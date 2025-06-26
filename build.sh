#!/bin/bash

# Chrome Extension Build Script for GitHub Release
# This script packages the extension into a ZIP file for distribution

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Building ArXiv to Blog Chrome Extension...${NC}"

# Get version from manifest.json
VERSION=$(grep '"version"' manifest.json | sed 's/.*"version": "\(.*\)".*/\1/')
echo -e "${YELLOW}📦 Version: ${VERSION}${NC}"

# Create build directory
BUILD_DIR="build"
DIST_DIR="dist"
mkdir -p ${BUILD_DIR}
mkdir -p ${DIST_DIR}

echo -e "${YELLOW}🧹 Cleaning previous build...${NC}"
rm -rf ${BUILD_DIR}/*

echo -e "${YELLOW}📋 Copying extension files...${NC}"

# Copy essential extension files
cp manifest.json ${BUILD_DIR}/
cp popup.html ${BUILD_DIR}/
cp popup.js ${BUILD_DIR}/
cp content.js ${BUILD_DIR}/
cp options.html ${BUILD_DIR}/
cp options.js ${BUILD_DIR}/

# Copy icons directory
cp -r icons/ ${BUILD_DIR}/

# Copy documentation
cp LICENSE ${BUILD_DIR}/
cp README.md ${BUILD_DIR}/

echo -e "${YELLOW}🗂️  Files included in package:${NC}"
ls -la ${BUILD_DIR}/

# Create ZIP file
ZIP_NAME="arxiv-to-blog-v${VERSION}.zip"
cd ${BUILD_DIR}
zip -r "../${DIST_DIR}/${ZIP_NAME}" .
cd ..

echo -e "${GREEN}✅ Package created: ${DIST_DIR}/${ZIP_NAME}${NC}"

# Calculate file size
FILE_SIZE=$(du -h "${DIST_DIR}/${ZIP_NAME}" | cut -f1)
echo -e "${GREEN}📏 Package size: ${FILE_SIZE}${NC}"

# Verify ZIP contents
echo -e "${YELLOW}📋 Package contents:${NC}"
unzip -l "${DIST_DIR}/${ZIP_NAME}"

echo -e "${GREEN}🎉 Build completed successfully!${NC}"
echo -e "${BLUE}📦 Ready for GitHub Release: ${DIST_DIR}/${ZIP_NAME}${NC}"
