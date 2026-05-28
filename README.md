# 夜航船

我的个人主页，基于 Vue 3 + Vite 构建。

## 功能

- 载入动画
- 站点简介
- Hitokoto 一言
- 日期及时间
- 实时天气
- 时光进度条
- 音乐播放器
- 移动端适配
- PWA 支持

## 开发

```bash
# 安装依赖
pnpm install

# 开发服务器
pnpm dev

# 生产构建
pnpm build
```

## 部署

构建完成后，静态文件在 `dist` 目录中，可部署到 Vercel、Cloudflare Pages 等平台。

## 配置

复制 `.env.example` 为 `.env`，修改站点信息、天气 API Key、音乐播放列表等配置。

## 技术栈

- [Vue 3](https://cn.vuejs.org/)
- [Vite](https://vitejs.cn/)
- [Pinia](https://pinia.vuejs.org/)
- [Element Plus](https://element-plus.org/)
- [APlayer](https://aplayer.js.org/)
