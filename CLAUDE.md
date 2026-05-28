# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

"無名の主页" - 一个基于 Vue 3 的个人主页项目，包含天气、音乐播放器、一言等功能。

## 常用命令

```bash
# 开发服务器（端口 8081）
pnpm dev

# 生产构建（输出到 dist/）
pnpm build

# 代码检查
pnpm lint

# 代码格式化
pnpm format
```

## 技术栈

- **框架**: Vue 3 + Vite 4
- **状态管理**: Pinia（带持久化插件）
- **UI 组件**: Element Plus（通过 unplugin 自动导入）
- **样式**: SCSS，全局样式位于 `src/style/global.scss`
- **图标**: @icon-park/vue-next 和 @vicons/fa

## 架构

```
src/
├── api/          # API 接口定义（天气、一言等）
├── components/   # Vue 组件（无嵌套，扁平结构）
├── store/        # Pinia 状态管理
├── utils/        # 工具函数（光标效果、防抖、时间处理）
├── views/        # 页面视图（Box、Func、Main、MoreSet）
├── assets/       # 静态资源和 JSON 配置
│   ├── siteLinks.json    # 网站链接配置
│   └── socialLinks.json  # 社交链接配置
└── App.vue       # 根组件
```

## 关键配置

- **环境变量**: 复制 `.env.example` 为 `.env`，包含站点信息、天气 API Key、音乐配置
- **天气 API**: 需要在[高德开放平台](https://console.amap.com/dev/index)申请 Web 服务 Key
- **音乐播放器**: 使用 Meting API，支持网易云/QQ 音乐，在 `.env` 中配置歌单
- **自动导入**: `unplugin-auto-import` 和 `unplugin-vue-components` 已配置，Vue API 和 Element Plus 组件无需手动导入

## 开发注意事项

- 开发服务器运行在 `localhost:8081`
- 构建时会自动压缩静态资源（vite-plugin-compression）
- PWA 已配置，支持离线缓存
- ESLint 规则：禁用了 `vue/multi-word-component-names`
- 路径别名：`@` 指向 `src/` 目录
