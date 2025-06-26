# ArXiv to Blog Redirector

🚀 **A Chrome extension that seamlessly redirects arXiv papers to AlphaXiv blog for an enhanced reading experience with multilingual support.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-brightgreen.svg)](https://chrome.google.com/webstore)
[![Release](https://img.shields.io/github/v/release/your-username/arxiv-to-blog-plugin)](https://github.com/your-username/arxiv-to-blog-plugin/releases)

## 📖 Overview

ArXiv to Blog Redirector is a lightweight Chrome extension that helps researchers and academics easily navigate from arXiv papers to their enhanced versions on AlphaXiv blog. With support for multiple languages, integrated settings, and a clean, intuitive interface, this extension streamlines your research workflow.

## ✨ Features

- 🔍 **Smart Detection**: Automatically detects when you're viewing an arXiv paper
- 🌍 **Multi-language Support**: Supports English, Chinese (中文), Japanese (日本語), and Korean (한국어)
- 🎯 **One-Click Redirect**: Quick access via popup or floating button
- ⚙️ **Integrated Settings**: All settings conveniently accessible within the popup
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- 📱 **Mobile-Friendly**: Works seamlessly on all screen sizes
- 🚀 **Easy Deployment**: Automated build and release system

## 🚀 Installation

### From GitHub Releases (Recommended)
1. Visit the [Releases page](https://github.com/your-username/arxiv-to-blog-plugin/releases)
2. Download the latest `arxiv-to-blog-extension-v*.zip` file
3. Extract the ZIP file to a local folder
4. Open Chrome and navigate to `chrome://extensions/`
5. Enable "Developer mode" in the top right corner
6. Click "Load unpacked" and select the extracted folder

### From Chrome Web Store (Coming Soon)
1. Visit the [Chrome Web Store page](https://chrome.google.com/webstore)
2. Click "Add to Chrome"
3. Confirm installation

### Manual Build from Source
```bash
# Clone the repository
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
cd arxiv-to-blog-plugin

# Build the extension
./build.sh

# Load the built extension from the build/ directory
```

## 🎯 How to Use

### Method 1: Extension Popup
1. Navigate to any arXiv paper (e.g., `https://arxiv.org/abs/2301.00001`)
2. Click the extension icon in your Chrome toolbar
3. Configure settings directly in the popup:
   - Select your preferred language
   - Toggle floating button visibility
   - Choose whether to open in new tab
4. Click "🚀 Go to Blog"

### Method 2: Floating Button
1. Navigate to any arXiv paper
2. Look for the floating "📚 Go to Blog" button in the top-right corner
3. Click the button to instantly redirect (uses your saved language preference)

## 🌐 Supported Languages & URLs

| Language | AlphaXiv URL Format |
|----------|-------------------|
| English | `https://www.alphaxiv.org/overview/[paper-id]` |
| Chinese (中文) | `https://www.alphaxiv.org/zh/overview/[paper-id]` |
| Japanese (日本語) | `https://www.alphaxiv.org/ja/overview/[paper-id]` |
| Korean (한국어) | `https://www.alphaxiv.org/ko/overview/[paper-id]` |

## ⚙️ Settings

All settings are now conveniently integrated into the main popup! No need for a separate settings page.

**Available Settings:**
- **Default Language**: Choose your preferred language for AlphaXiv
- **Show Floating Button**: Toggle the floating button on arXiv pages
- **Open in New Tab**: Control whether AlphaXiv opens in a new tab or replaces the current one

**Settings are automatically saved** as you change them and sync across your Chrome profile.

## 🛠️ Development

### Prerequisites
- Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript
- Git (for version control)

### Project Structure
```
arxiv-to-blog-plugin/
├── 📄 manifest.json          # Extension configuration
├── ��️  popup.html             # Popup interface with integrated settings
├── ⚙️  popup.js               # Popup logic and settings management
├── 📜 content.js             # Content script for arXiv pages
├── 🎨 icons/                 # Extension icons
├── 🔧 build.sh               # Build script
├── �� release.sh             # Automated release script
├── 📋 .github/workflows/     # GitHub Actions for CI/CD
├── 📖 README.md              # English documentation
├── 📖 README_CN.md           # Chinese documentation
```

### Building from Source
```bash
# Clone the repository
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
cd arxiv-to-blog-plugin

# Make build script executable
chmod +x build.sh

# Build the extension
./build.sh

# The built extension will be in the build/ directory
# Built package will be in the dist/ directory
```

### Development Workflow
1. Make your changes to the source files
2. Test locally by loading the extension in Chrome developer mode
3. Run `./build.sh` to create a distribution package
4. Use `./release.sh [version] [notes]` to create a GitHub release

## 📦 Release Management

### Quick Release
```bash
# Release a new version (automatically updates version, builds, and publishes)
./release.sh 1.0.1 "Bug fixes and improvements"
```

### Manual Build
```bash
# Just build the extension package
./build.sh

# Output: dist/arxiv-to-alphaxiv-v[version].zip
```

The project includes automated GitHub Actions that will:
- 🏗️ Build the extension when you push a version tag
- 📦 Create a GitHub Release automatically
- 📎 Upload the built ZIP file as a release asset

## 📝 Example Usage

**Original arXiv URL:**
```
https://arxiv.org/abs/2301.00001
```

**Redirected AlphaXiv URLs:**
- English: `https://www.alphaxiv.org/overview/2301.00001`
- Chinese: `https://www.alphaxiv.org/zh/overview/2301.00001`
- Japanese: `https://www.alphaxiv.org/ja/overview/2301.00001`
- Korean: `https://www.alphaxiv.org/ko/overview/2301.00001`

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

### How to Contribute:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Test your changes thoroughly
4. Run the build script to ensure everything works
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

### Development Guidelines:
- Follow the existing code style
- Test on multiple arXiv pages
- Ensure the extension works in both popup and floating button modes
- Update documentation if needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to the arXiv team for providing open access to scientific papers
- Thanks to the AlphaXiv team for creating an enhanced reading experience
- Inspired by the need to bridge academic platforms seamlessly

## 📞 Support

If you encounter any issues or have suggestions:
- 🐛 [Report bugs](https://github.com/your-username/arxiv-to-blog-plugin/issues)
- 💡 [Request features](https://github.com/your-username/arxiv-to-blog-plugin/issues)
- 📧 [Contact us](mailto:your-email@example.com)

## 🔮 Roadmap

- [ ] Support for more languages
- [ ] Keyboard shortcuts
- [ ] Custom URL patterns
- [ ] Integration with reference managers
- [ ] Dark mode support
- [ ] Chrome Web Store publication
- [ ] Firefox extension port

## 📊 Project Stats

- **Extension Size**: ~20KB
- **Load Time**: <100ms
- **Supported Languages**: 4
- **Chrome Manifest**: Version 3
- **Permissions**: Minimal (activeTab, storage)

---

⭐ **If you find this extension helpful, please consider giving it a star on GitHub!**
