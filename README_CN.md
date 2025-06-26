# ArXiv 到 AlphaXiv 重定向器

🚀 **一个Chrome扩展程序，可以无缝地将arXiv论文重定向到AlphaXiv，提供增强的阅读体验和多语言支持。**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-brightgreen.svg)](https://chrome.google.com/webstore)

## 📖 概述

ArXiv 到 AlphaXiv 重定向器是一个轻量级的Chrome扩展程序，帮助研究人员和学者轻松地从arXiv论文导航到AlphaXiv上的增强版本。支持多种语言和简洁直观的界面，这个扩展程序能够简化您的研究工作流程。

## ✨ 功能特点

- 🔍 **智能检测**：自动检测您正在查看的是否为arXiv论文
- 🌍 **多语言支持**：支持英语、中文、日语和韩语
- 🎯 **一键重定向**：通过弹窗或浮动按钮快速访问
- ⚙️ **可自定义设置**：配置默认语言和界面偏好
- 🎨 **现代化UI**：简洁、响应式设计，带有流畅动画
- 📱 **移动端友好**：在所有屏幕尺寸上无缝工作

## 🚀 安装方法

### 从Chrome网上应用店安装（推荐）
1. 访问 [Chrome网上应用店页面](https://chrome.google.com/webstore)（即将上线）
2. 点击"添加至Chrome"
3. 确认安装

### 手动安装（开发者模式）
1. 克隆此仓库或下载ZIP文件
```bash
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
```

2. 打开Chrome浏览器，导航到 `chrome://extensions/`
3. 在右上角启用"开发者模式"
4. 点击"加载已解压的扩展程序"并选择扩展程序文件夹
5. 扩展程序将出现在您的Chrome工具栏中

## 🎯 使用方法

### 方法1：扩展程序弹窗
1. 导航到任何arXiv论文（例如：`https://arxiv.org/abs/2301.00001`）
2. 点击Chrome工具栏中的扩展程序图标
3. 选择您的首选语言
4. 点击"🚀 前往AlphaXiv"

### 方法2：浮动按钮
1. 导航到任何arXiv论文
2. 查找右上角的浮动"📚 在AlphaXiv上查看"按钮
3. 点击按钮即可立即重定向

## 🌐 支持的语言和URL

| 语言 | AlphaXiv URL格式 |
|------|------------------|
| 英语 | `https://www.alphaxiv.org/overview/[论文ID]` |
| 中文 | `https://www.alphaxiv.org/zh/overview/[论文ID]` |
| 日语 | `https://www.alphaxiv.org/ja/overview/[论文ID]` |
| 韩语 | `https://www.alphaxiv.org/ko/overview/[论文ID]` |

## ⚙️ 设置

访问设置页面的方法：
1. 右键点击扩展程序图标 → "选项"
2. 或在弹窗中点击"⚙️ 设置"

### 可用设置：
- **默认语言**：选择您首选的AlphaXiv语言
- **显示浮动按钮**：在arXiv页面上切换浮动按钮
- **在新标签页中打开**：控制AlphaXiv是在新标签页中打开还是替换当前标签页

## 🛠️ 开发

### 前置条件
- Chrome浏览器
- HTML、CSS和JavaScript基础知识

### 项目结构
```
arxiv-to-blog-plugin/
├── manifest.json          # 扩展程序配置
├── popup.html             # 弹窗界面
├── popup.js               # 弹窗逻辑
├── content.js             # arXiv页面的内容脚本
├── options.html           # 设置页面
├── options.js             # 设置逻辑
├── icons/                 # 扩展程序图标
├── README.md              # 英文文档
└── README_CN.md           # 中文文档
```

### 从源码构建
1. 克隆仓库
2. 进行您的修改
3. 在Chrome中加载扩展程序（开发者模式）
4. 在arXiv页面上测试功能

## 📝 使用示例

**原始arXiv URL：**
```
https://arxiv.org/abs/2301.00001
```

**重定向后的AlphaXiv URLs：**
- 英语：`https://www.alphaxiv.org/overview/2301.00001`
- 中文：`https://www.alphaxiv.org/zh/overview/2301.00001`
- 日语：`https://www.alphaxiv.org/ja/overview/2301.00001`
- 韩语：`https://www.alphaxiv.org/ko/overview/2301.00001`

## 🤝 贡献

我们欢迎贡献！请随时提交Pull Request。对于重大更改，请先开启issue讨论您想要改变的内容。

### 如何贡献：
1. Fork本仓库
2. 创建您的功能分支（`git checkout -b feature/AmazingFeature`）
3. 提交您的更改（`git commit -m 'Add some AmazingFeature'`）
4. 推送到分支（`git push origin feature/AmazingFeature`）
5. 开启Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看[LICENSE](LICENSE)文件了解详情。

## 🙏 致谢

- 感谢arXiv团队提供开放获取的科学论文
- 感谢AlphaXiv团队创造增强的阅读体验
- 受到无缝连接学术平台需求的启发

## 📞 支持

如果您遇到任何问题或有建议：
- 🐛 [报告bug](https://github.com/your-username/arxiv-to-blog-plugin/issues)
- 💡 [请求功能](https://github.com/your-username/arxiv-to-blog-plugin/issues)
- 📧 [联系我们](mailto:your-email@example.com)

## 🔮 发展路线图

- [ ] 支持更多语言
- [ ] 键盘快捷键
- [ ] 自定义URL模式
- [ ] 与参考文献管理器集成
- [ ] 深色模式支持

---

⭐ **如果您觉得这个扩展程序有用，请考虑在GitHub上给它一个星标！** 