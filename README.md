# ArXiv to AlphaXiv Redirector

🚀 **A Chrome extension that seamlessly redirects arXiv papers to AlphaXiv for an enhanced reading experience with multilingual support.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-brightgreen.svg)](https://chrome.google.com/webstore)

## 📖 Overview

ArXiv to AlphaXiv Redirector is a lightweight Chrome extension that helps researchers and academics easily navigate from arXiv papers to their enhanced versions on AlphaXiv. With support for multiple languages and a clean, intuitive interface, this extension streamlines your research workflow.

## ✨ Features

- 🔍 **Smart Detection**: Automatically detects when you're viewing an arXiv paper
- 🌍 **Multi-language Support**: Supports English, Chinese (中文), Japanese (日本語), and Korean (한국어)
- 🎯 **One-Click Redirect**: Quick access via popup or floating button
- ⚙️ **Customizable Settings**: Configure default language and interface preferences
- 🎨 **Modern UI**: Clean, responsive design with smooth animations
- 📱 **Mobile-Friendly**: Works seamlessly on all screen sizes

## 🚀 Installation

### From Chrome Web Store (Recommended)
1. Visit the [Chrome Web Store page](https://chrome.google.com/webstore) (coming soon)
2. Click "Add to Chrome"
3. Confirm installation

### Manual Installation (Developer Mode)
1. Clone this repository or download the ZIP file
```bash
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
```

2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right corner
4. Click "Load unpacked" and select the extension folder
5. The extension will appear in your Chrome toolbar

## 🎯 How to Use

### Method 1: Extension Popup
1. Navigate to any arXiv paper (e.g., `https://arxiv.org/abs/2301.00001`)
2. Click the extension icon in your Chrome toolbar
3. Select your preferred language
4. Click "🚀 Go to AlphaXiv"

### Method 2: Floating Button
1. Navigate to any arXiv paper
2. Look for the floating "📚 View on AlphaXiv" button in the top-right corner
3. Click the button to instantly redirect

## 🌐 Supported Languages & URLs

| Language | AlphaXiv URL Format |
|----------|-------------------|
| English | `https://www.alphaxiv.org/overview/[paper-id]` |
| Chinese (中文) | `https://www.alphaxiv.org/zh/overview/[paper-id]` |
| Japanese (日本語) | `https://www.alphaxiv.org/ja/overview/[paper-id]` |
| Korean (한국어) | `https://www.alphaxiv.org/ko/overview/[paper-id]` |

## ⚙️ Settings

Access the settings page by:
1. Right-clicking the extension icon → "Options"
2. Or clicking "⚙️ Settings" in the popup

### Available Settings:
- **Default Language**: Choose your preferred language for AlphaXiv
- **Show Floating Button**: Toggle the floating button on arXiv pages
- **Open in New Tab**: Control whether AlphaXiv opens in a new tab or replaces the current one

## 🛠️ Development

### Prerequisites
- Chrome browser
- Basic knowledge of HTML, CSS, and JavaScript

### Project Structure
```
arxiv-to-blog-plugin/
├── manifest.json          # Extension configuration
├── popup.html             # Popup interface
├── popup.js               # Popup logic
├── content.js             # Content script for arXiv pages
├── options.html           # Settings page
├── options.js             # Settings logic
├── icons/                 # Extension icons
├── README.md              # English documentation
└── README_CN.md           # Chinese documentation
```

### Building from Source
1. Clone the repository
2. Make your changes
3. Load the extension in Chrome (developer mode)
4. Test functionality on arXiv pages

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
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

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

---

⭐ **If you find this extension helpful, please consider giving it a star on GitHub!** 