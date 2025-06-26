#!/bin/bash

# Quick Release Script for GitHub
# Usage: ./release.sh [version] [release-notes]

set -e

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Function to show usage
show_usage() {
    echo "Usage: $0 [version] [release-notes]"
    echo ""
    echo "Examples:"
    echo "  $0 1.0.1 \"Bug fixes and improvements\""
    echo "  $0 1.1.0 \"New features added\""
    echo ""
    echo "Version format: MAJOR.MINOR.PATCH"
    exit 1
}

# Check if git is clean
check_git_status() {
    if [[ -n $(git status --porcelain) ]]; then
        echo -e "${RED}❌ Git working directory is not clean. Please commit your changes first.${NC}"
        git status
        exit 1
    fi
}

# Update manifest.json version
update_manifest_version() {
    local new_version=$1
    echo -e "${YELLOW}📝 Updating manifest.json version to ${new_version}...${NC}"
    
    # Create backup
    cp manifest.json manifest.json.backup
    
    # Update version using sed (macOS/Linux compatible)
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS
        sed -i '' "s/\"version\": \".*\"/\"version\": \"${new_version}\"/" manifest.json
    else
        # Linux
        sed -i "s/\"version\": \".*\"/\"version\": \"${new_version}\"/" manifest.json
    fi
    
    echo -e "${GREEN}✅ Version updated in manifest.json${NC}"
}

# Main release process
main() {
    # Check arguments
    if [[ $# -lt 1 ]]; then
        show_usage
    fi
    
    local version=$1
    local release_notes=${2:-"Release version ${version}"}
    
    echo -e "${BLUE}🚀 Starting release process for version ${version}...${NC}"
    
    # Validate version format
    if [[ ! $version =~ ^[0-9]+\.[0-9]+\.[0-9]+$ ]]; then
        echo -e "${RED}❌ Invalid version format. Use MAJOR.MINOR.PATCH (e.g., 1.0.1)${NC}"
        exit 1
    fi
    
    # Check git status
    check_git_status
    
    # Update manifest version
    update_manifest_version $version
    
    # Build the extension
    echo -e "${YELLOW}🔨 Building extension...${NC}"
    if [[ -f "build.sh" ]]; then
        ./build.sh
    else
        echo -e "${RED}❌ build.sh not found. Please run this script from the project root.${NC}"
        exit 1
    fi
    
    # Commit version change
    echo -e "${YELLOW}📝 Committing version update...${NC}"
    git add manifest.json
    git commit -m "Bump version to ${version}"
    
    # Create and push tag
    echo -e "${YELLOW}🏷️  Creating tag v${version}...${NC}"
    git tag -a "v${version}" -m "Release version ${version}: ${release_notes}"
    
    echo -e "${YELLOW}⬆️  Pushing changes and tag...${NC}"
    git push origin main
    git push origin "v${version}"
    
    echo -e "${GREEN}🎉 Release process completed!${NC}"
    echo -e "${BLUE}📦 Package created: dist/arxiv-to-alphaxiv-v${version}.zip${NC}"
    echo -e "${BLUE}🏷️  Tag created: v${version}${NC}"
    echo ""
    echo -e "${YELLOW}Next steps:${NC}"
    echo "1. 🌐 Visit your GitHub repository"
    echo "2. 📋 Go to the 'Releases' section"
    echo "3. 🔍 You should see the new release (if GitHub Actions is set up)"
    echo "4. ✏️  Edit the release notes if needed"
    echo ""
    echo -e "${GREEN}Or wait for GitHub Actions to automatically create the release!${NC}"
}

# Run main function
main "$@"
