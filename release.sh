#!/bin/bash

# ArXiv to Blog Plugin Release Script
# Usage: ./release.sh [version] [release_notes]
# Example: ./release.sh 1.0.1 "Bug fixes and improvements"

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if version is provided
if [ -z "$1" ]; then
    print_error "请提供版本号"
    echo "用法: ./release.sh [版本号] [发布说明]"
    echo "示例: ./release.sh 1.0.1 \"错误修复和改进\""
    exit 1
fi

VERSION=$1
RELEASE_NOTES=${2:-"Release version $VERSION"}

print_status "开始发布版本 $VERSION..."

# Validate version format (semantic versioning)
if ! [[ $VERSION =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
    print_error "版本号格式无效。请使用语义化版本格式 (例如: 1.0.1)"
    exit 1
fi

# Check if we're in a git repository
if [ ! -d ".git" ]; then
    print_error "当前目录不是Git仓库"
    exit 1
fi

# Check for uncommitted changes
if [ -n "$(git status --porcelain)" ]; then
    print_warning "发现未提交的更改："
    git status --short
    read -p "是否继续发布？这将提交所有更改 (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "发布已取消"
        exit 1
    fi
fi

# Update version in manifest.json
print_status "更新 manifest.json 中的版本号..."
if [ -f "manifest.json" ]; then
    # Create backup
    cp manifest.json manifest.json.backup
    
    # Update version using sed (works on both macOS and Linux)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/\"version\": \".*\"/\"version\": \"$VERSION\"/" manifest.json
    else
        # Linux
        sed -i "s/\"version\": \".*\"/\"version\": \"$VERSION\"/" manifest.json
    fi
    
    print_success "版本号已更新为 $VERSION"
else
    print_error "未找到 manifest.json 文件"
    exit 1
fi

# Test build locally (optional)
print_status "测试本地构建..."
if [ -f "build.sh" ]; then
    chmod +x build.sh
    ./build.sh
    if [ $? -ne 0 ]; then
        print_error "构建失败"
        # Restore backup
        mv manifest.json.backup manifest.json
        exit 1
    fi
    print_success "本地构建测试通过"
else
    print_warning "未找到 build.sh，跳过构建测试"
fi

# Commit changes
print_status "提交更改..."
git add .
git commit -m "Release version $VERSION

$RELEASE_NOTES"

# Create and push tag
print_status "创建并推送标签 v$VERSION..."
git tag -a "v$VERSION" -m "Release version $VERSION

$RELEASE_NOTES"

# Push commits and tags
print_status "推送到远程仓库..."
git push origin main
git push origin "v$VERSION"

# Clean up backup
rm -f manifest.json.backup

print_success "🎉 版本 $VERSION 发布成功！"
print_status "GitHub Actions 将自动构建并创建 GitHub Release"

# Get repository URL for display
REPO_URL=$(git config --get remote.origin.url | sed 's/git@github.com:/https:\/\/github.com\//' | sed 's/\.git$//')

print_status "您可以在以下位置查看发布进度："
echo "  - GitHub Actions: $REPO_URL/actions"
echo "  - GitHub Releases: $REPO_URL/releases"
echo "  - 标签页面: $REPO_URL/tags"

print_status "下一步："
echo "  1. 等待 GitHub Actions 完成构建（通常需要1-2分钟）"
echo "  2. 检查 Release 页面是否成功创建"
echo "  3. 验证下载链接是否正常工作"
echo "  4. 更新 Chrome Web Store（如果适用）"
echo "  5. 通知用户新版本发布" 