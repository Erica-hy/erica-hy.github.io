---
title: 侧边栏与分组
description: 通过分组与嵌套 items 构建二级菜单
---

# 侧边栏与分组

在 docs/.vitepress/config.ts 中，为不同路径配置独立的侧边栏，并用分组实现二级菜单：
```ts
export default defineConfig({
  themeConfig: {
    sidebar: {
      '/guide/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '快速开始', link: '/guide/start' },
            { text: '基础用法', link: '/guide/basic' }
          ]
        },
        {
          text: '进阶',
          collapsed: true,
          items: [
            { text: '配置导航', link: '/guide/nav' },
            { text: '侧边栏与分组', link: '/guide/sidebar' }
          ]
        }
      ],
      '/advanced/': [
        {
          text: '高级功能',
          collapsed: false,
          items: [
            { text: '嵌套示例', link: '/advanced/nested/menu' }
          ]
        }
      ]
    }
  }
})
```

使用要点：
- 根据当前页面路径自动匹配对应侧边栏（例如访问 /guide/* 时显示 /guide/ 的侧栏）。
- `collapsed: false` 展开分组，`true` 默认折叠。
- `items` 内即为二级菜单条目。