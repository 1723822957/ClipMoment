# ClipMoment（剪贴板时光）

Windows 剪切板助手：复制后在屏幕右下角弹出预览卡片（含「xx 分钟前」），并管理最近 15 条本地历史。

## 功能

- 文本 / 图片 / 文件剪贴板监听与去重
- 复制后右下角弹出可翻阅列表（5 秒自动收起，悬停暂停）
- 相对时间 + 绝对时间显示
- 历史列表：`Ctrl+Shift+V` 或托盘打开，支持搜索
- **内容管理**：删除、清空、暂停记录、固定、敏感应用黑名单
- 深色模式、首次使用引导
- 本地存储，数据不出本机

## 打包安装程序

```powershell
npm install
npm run dist
```

安装包输出在 `release/` 目录（NSIS `.exe`）。

## 文档

- [MVP 决策](docs/DECISIONS.md)
- [PRD 一页纸](docs/PRD.md)
- [线框图（浏览器打开）](docs/wireframes/index.html)
- [技术栈说明](docs/TECH_STACK.md)

## 环境要求

- Windows 10 21H2+ / Windows 11
- Node.js 18+

## 安装与运行

```powershell
cd "c:\Users\frank\Desktop\剪切板"
npm install
npm run build
npm start
```

`npm start` 等价于 `npm run preview`（构建后启动 Electron）。

开发调试：

```powershell
npm run dev
```

## 项目结构

```
electron/           # 主进程：监听、存储、托盘、窗口
  clipboard/        # 剪贴板轮询与粘贴
  store/            # SQLite
src/
  popup/            # 复制弹出卡片
  history/          # 历史与管理
  settings/         # 设置页
  shared/           # 类型、相对时间
docs/               # PRD、决策、线框
```

## 技术栈

Electron 33 + React 18 + Vite 6 + TypeScript + Tailwind

（计划中的 Tauri 2 迁移路径见 [TECH_STACK.md](docs/TECH_STACK.md)）

## AI能力展望
尽管当前版本未集成 AI，但基于用户剪贴内容可衍生多种智能化能力，提升信息处理效率：

智能分类与标签：利用轻量级 NLP 模型（如 BERT-mini）对复制内容自动分类（网址、代码、地址、待办等），并生成标签，支持按类别检索历史。

智能摘要与补全：当用户复制长文本（如文章段落、会议记录），调用本地小模型或云端 API 生成一句话摘要，悬浮窗可直接显示摘要而非原文，节省阅读时间。

语义搜索：传统搜索依赖关键词，AI 可支持自然语言查询，例如“上周复制的那段关于OKR的句子”，即使不记得确切文字也能找回。

上下文关联推荐：根据当前正在编辑的应用（如写周报、回邮件），自动推荐历史剪贴中可能相关的内容，形成“智能剪贴板助手”。

隐私安全设计：所有 AI 处理优先采用本地模型（如 On-Device AI），敏感内容不上云，平衡智能化与隐私保护。

以上设想已形成初步的 PRD 思路，包括用户场景、模型选型方向、评估指标（准确率、召回率、用户点击率）及冷启动策略。
