---
title: 配置导航
description: 顶部导航（nav）配置说明
---

# 配置导航（nav）

顶部导航用于放置少量关键入口，示例（见 docs/.vitepress/config.ts）：
```ts
themeConfig: {
  nav: [
    { text: '首页', link: '/' },
    { text: '文档', link: '/guide/start' }
  ]
}
```

最佳实践：
- 保持精简：仅保留核心入口（如 首页、文档、外链）
- 其余内容放到左侧侧边栏，通过分组展示

常见问题：
- 如果进入 /guide/* 页面，左侧侧边栏会根据路径自动切换到 /guide/ 的分组。