# ArXiv 到博客重定向器

🚀 **一个Chrome扩展程序，可以无缝地将arXiv论文重定向到AlphaXiv博客，提供增强的阅读体验和多语言支持。**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Web Store](https://img.shields.io/badge/Chrome-Extension-brightgreen.svg)](https://chrome.google.com/webstore)
[![Release](https://img.shields.io/github/v/release/your-username/arxiv-to-blog-plugin)](https://github.com/your-username/arxiv-to-blog-plugin/releases)

## 📖 概述

ArXiv 到博客重定向器是一个轻量级的Chrome扩展程序，帮助研究人员和学者轻松地从arXiv论文导航到AlphaXiv博客上的增强版本。支持多种语言、集成设置界面以及简洁直观的界面，这个扩展程序能够简化您的研究工作流程。

## ✨ 功能特点

- 🔍 **智能检测**：自动检测您正在查看的是否为arXiv论文
- 🌍 **多语言支持**：支持英语、中文、日语和韩语
- 🎯 **一键重定向**：通过弹窗或浮动按钮快速访问
- ⚙️ **集成设置**：所有设置都方便地集成在弹窗中
- 🎨 **现代化UI**：简洁、响应式设计，带有流畅动画
- 📱 **移动端友好**：在所有屏幕尺寸上无缝工作
- 🚀 **简易部署**：自动化构建和发布系统

## 🚀 安装方法

### 从GitHub Releases安装（推荐）
1. 访问 [Releases页面](https://github.com/your-username/arxiv-to-blog-plugin/releases)
2. 下载最新的 `arxiv-to-blog-extension-v*.zip` 文件
3. 将ZIP文件解压到本地文件夹
4. 打开Chrome浏览器，导航到 `chrome://extensions/`
5. 在右上角启用"开发者模式"
6. 点击"加载已解压的扩展程序"并选择解压的文件夹

### 从Chrome网上应用店安装（即将上线）
1. 访问 [Chrome网上应用店页面](https://chrome.google.com/webstore)
2. 点击"添加至Chrome"
3. 确认安装

### 从源码手动构建
```bash
# 克隆仓库
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
cd arxiv-to-blog-plugin

# 构建扩展
./build.sh

# 从build/目录加载构建的扩展
```

## 🎯 使用方法

### 方法1：扩展程序弹窗
1. 导航到任何arXiv论文（例如：`https://arxiv.org/abs/2301.00001`）
2. 点击Chrome工具栏中的扩展程序图标
3. 直接在弹窗中配置设置：
   - 选择您的首选语言
   - 切换浮动按钮显示
   - 选择是否在新标签页中打开
4. 点击"🚀 前往博客"

### 方法2：浮动按钮
1. 导航到任何arXiv论文
2. 查找右上角的浮动"📚 前往博客"按钮
3. 点击按钮即可立即重定向（使用您保存的语言偏好）

## 🌐 支持的语言和URL

| 语言 | AlphaXiv URL格式 |
|------|------------------|
| 英语 | `https://www.alphaxiv.org/overview/[论文ID]` |
| 中文 | `https://www.alphaxiv.org/zh/overview/[论文ID]` |
| 日语 | `https://www.alphaxiv.org/ja/overview/[论文ID]` |
| 韩语 | `https://www.alphaxiv.org/ko/overview/[论文ID]` |

## ⚙️ 设置

所有设置现在都方便地集成在主弹窗中！无需单独的设置页面。

**可用设置：**
- **默认语言**：选择您首选的AlphaXiv语言
- **显示浮动按钮**：在arXiv页面上切换浮动按钮
- **在新标签页中打开**：控制AlphaXiv是在新标签页中打开还是替换当前标签页

**设置会自动保存**，当您更改时会立即生效，并在您的Chrome配置文件中同步。

## 🛠️ 开发

### 前置条件
- Chrome浏览器
- HTML、CSS和JavaScript基础知识
- Git（用于版本控制）

### 项目结构
```
arxiv-to-blog-plugin/
├── 📄 manifest.json          # 扩展程序配置
├── 🖼️  popup.html             # 集成设置的弹窗界面
├── ⚙️  popup.js               # 弹窗逻辑和设置管理
├── 📜 content.js             # arXiv页面的内容脚本
├── 🎨 icons/                 # 扩展程序图标
├── 🔧 build.sh               # 构建脚本
├── 🚀 release.sh             # 自动化发布脚本
├── 📋 .github/workflows/     # GitHub Actions CI/CD
├── 📖 README.md              # 英文文档
├── 📖 README_CN.md           # 中文文档
└── 🚀 QUICK_START.md         # 快速开始指南
```

### 从源码构建
```bash
# 克隆仓库
git clone https://github.com/your-username/arxiv-to-blog-plugin.git
cd arxiv-to-blog-plugin

# 使构建脚本可执行
chmod +x build.sh

# 构建扩展
./build.sh

# 构建的扩展将在build/目录中
# 构建的包将在dist/目录中
```

### 开发工作流程
1. 对源文件进行修改
2. 通过在Chrome开发者模式下加载扩展进行本地测试
3. 运行 `./build.sh` 创建分发包
4. 使用 `./release.sh [版本] [说明]` 创建GitHub发布

## 📦 版本管理

### 快速发布
```bash
# 发布新版本（自动更新版本、构建和发布）
./release.sh 1.0.1 "错误修复和改进"
```

### 手动构建
```bash
# 仅构建扩展包
./build.sh

# 输出：dist/arxiv-to-alphaxiv-v[版本].zip
```

项目包含自动化的GitHub Actions，将会：
- 🏗️ 当您推送版本标签时构建扩展
- 📦 自动创建GitHub Release
- 📎 上传构建的ZIP文件作为发布资产

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
3. 充分测试您的更改
4. 运行构建脚本确保一切正常
5. 提交您的更改（`git commit -m 'Add some AmazingFeature'`）
6. 推送到分支（`git push origin feature/AmazingFeature`）
7. 开启Pull Request

### 开发指南：
- 遵循现有的代码风格
- 在多个arXiv页面上进行测试
- 确保扩展在弹窗和浮动按钮模式下都能正常工作
- 如有需要请更新文档

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
- [ ] Chrome网上应用店发布
- [ ] Firefox扩展移植

## 📊 项目统计

- **扩展大小**：约20KB
- **加载时间**：<100毫秒
- **支持语言**：4种
- **Chrome清单**：版本3
- **权限**：最小化（activeTab, storage）

---

⭐ **如果您觉得这个扩展程序有用，请考虑在GitHub上给它一个星标！**
