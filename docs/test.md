---
title: 测试页面
description: 用于验证 VitePress 默认主题的示例页面
---

# 测试页面

这是一个用于测试站点渲染的 Markdown 文件。你可以在左侧侧边栏或顶部搜索栏中找到并预览它。

## 基本文本与格式

- 加粗：**bold**
- 斜体：_italic_
- 删除线：~~strikethrough~~
- 行内代码：\`inline code\`

> 引用：这是一段引用文本，用于测试样式。

## 代码块

```ts
function hello(name: string) {
  return `Hello, ${name}!`
}

console.log(hello('VitePress'))
```

## 列表与任务

- 项目 1
- 项目 2
  - 子项目 2.1

- [x] 已完成任务
- [ ] 待完成任务

## 表格

| 功能     | 状态   |
|----------|--------|
| 搜索     | 支持   |
| 高亮代码 | 支持   |
| 自定义主题 | 可扩展 |

## 链接与图片

- 站点首页链接：[返回首页](/)
- 相对链接示例：[Markdown Examples](/markdown-examples.html)

## 提示块

::: tip
这是一个提示块。
:::

::: warning
这是一个警告块。
:::

## Frontmatter 示例

你可以在文档顶部使用 Frontmatter 来设置标题与描述，当前文件已经设置了：
- title: 测试页面
- description: 用于验证 VitePress 默认主题的示例页面

如果你正在运行开发服务器，请刷新页面以查看效果。