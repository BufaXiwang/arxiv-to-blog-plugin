# Installation & Testing Guide

## Quick Start

### 1. Clone or Download the Repository
```bash
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
cd arxiv-to-blog-plugin
```

### 2. Add Extension Icons (Required)
Before loading the extension, you need to add icon files to the `icons/` directory:

**Required files:**
- `icons/icon16.png` (16x16 pixels)
- `icons/icon32.png` (32x32 pixels)  
- `icons/icon48.png` (48x48 pixels)
- `icons/icon128.png` (128x128 pixels)

**Quick solution:** You can create simple colored squares as placeholders or use online tools to generate icons from text/emojis.

### 3. Load Extension in Chrome

1. **Open Chrome Extensions Page:**
   - Navigate to `chrome://extensions/`
   - Or go to Menu → More tools → Extensions

2. **Enable Developer Mode:**
   - Toggle the "Developer mode" switch in the top-right corner

3. **Load the Extension:**
   - Click "Load unpacked"
   - Select the `arxiv-to-blog-plugin` folder
   - The extension should appear in your extensions list

### 4. Test the Extension

1. **Visit an arXiv paper:**
   ```
   https://arxiv.org/abs/2301.00001
   ```

2. **Test Methods:**
   - **Popup:** Click the extension icon in your toolbar
   - **Floating Button:** Look for the floating button on the arXiv page

3. **Expected Behavior:**
   - Popup shows paper ID and language options
   - Clicking "Go to Blog" opens the corresponding AlphaXiv page
   - Floating button provides one-click access

## Testing Different Features

### Language Switching
1. Open extension popup on any arXiv page
2. Change language selection
3. Verify URL preview updates in settings
4. Test redirect with different languages

### Settings Page
1. Right-click extension icon → "Options"
2. Modify settings:
   - Change default language
   - Toggle floating button
   - Toggle "open in new tab"
3. Save settings and test changes

### URL Mapping Test Cases

| Input URL | Expected Output (English) |
|-----------|---------------------------|
| `https://arxiv.org/abs/2301.00001` | `https://www.alphaxiv.org/overview/2301.00001` |
| `https://arxiv.org/abs/1234.56789` | `https://www.alphaxiv.org/overview/1234.56789` |
| `https://arxiv.org/abs/physics/0001001` | `https://www.alphaxiv.org/overview/physics/0001001` |

| Input URL | Expected Output (Chinese) |
|-----------|---------------------------|
| `https://arxiv.org/abs/2301.00001` | `https://www.alphaxiv.org/zh/overview/2301.00001` |

## Troubleshooting

### Extension Not Loading
- **Missing Icons:** Ensure all 4 icon files exist in the `icons/` directory
- **File Permissions:** Check that Chrome can read the extension folder
- **Manifest Errors:** Look for errors in the Chrome extensions page

### Popup Not Working
- **Permissions:** Extension needs "activeTab" permission
- **Console Errors:** Check browser developer console for JavaScript errors

### Floating Button Not Appearing
- **Settings:** Check if floating button is enabled in options
- **URL Match:** Ensure you're on an arXiv abstract page (`arxiv.org/abs/...`)
- **Content Script:** Verify content script is loading properly

### Debug Mode
1. Open Chrome DevTools (F12)
2. Go to Extensions tab
3. Find your extension and click "background page" or "inspect views"
4. Check console for error messages

## File Structure Verification

Ensure your directory structure looks like this:
```
arxiv-to-blog-plugin/
├── manifest.json
├── popup.html
├── popup.js
├── content.js
├── options.html
├── options.js
├── icons/
│   ├── icon16.png
│   ├── icon32.png
│   ├── icon48.png
│   └── icon128.png
├── README.md
├── README_CN.md
├── LICENSE
└── INSTALL.md
```

## Next Steps

Once you've successfully tested the extension locally:

1. **Create proper icons** using a design tool
2. **Test on various arXiv pages** to ensure compatibility
3. **Package for distribution** (if planning to publish)
4. **Submit to Chrome Web Store** (optional)

## Development Tips

- **Hot Reload:** After making code changes, click the refresh icon on the extension in `chrome://extensions/`
- **Console Logging:** Use `console.log()` for debugging - check the extension's background page console
- **Storage Testing:** Use Chrome DevTools → Application → Storage to inspect stored settings 