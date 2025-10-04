import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '小羊的博客',
  description: '零星的优秀，也能拼凑成山河',
  base: '/vitepress_blog/',
  themeConfig: {
    // 顶部导航精简，仅保留关键入口
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/guide/start' }
    ],
    // 侧边栏按路径分组，并使用分组 items 实现二级菜单
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
      ],
      // 根路径下保留你的示例入口，便于过渡
      '/': [
        {
          text: '示例',
          items: [
            { text: 'Markdown 示例', link: '/markdown-examples' },
            { text: '测试页面', link: '/test' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    outline: 'deep'
  }
})