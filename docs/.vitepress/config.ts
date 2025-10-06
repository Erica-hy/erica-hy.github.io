import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '小羊的博客',
  description: '零星的优秀，也能拼凑成山河',
  base: '/erica.github.io/',
  themeConfig: {
    // 顶部导航精简，仅保留关键入口
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/vue/vue3-响应式原理示例', activeMatch: '^/(guide|advanced|vue|javascript)/' }
    ],
    // 侧边栏按路径分组，并使用分组 items 实现二级菜单
    sidebar: {
      '/vue/': [
        {
          text: 'Vue',
          collapsed: false,
          items: [
            { text: 'Vue3 响应式原理示例', link: '/vue/vue3-响应式原理示例' }
          ]
        },
      ],
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/' }
    ],
    outline: 'deep'
  }
})