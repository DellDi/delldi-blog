---
id: mdx
title: MDX渲染组件
---

❤️ 强大： MDX 将 markdown 和 JSX 语法混合在一起并完美地 融入基于 JSX 的项目当中。

💻 一切皆组件： 导入（import） JSX 组件并 在 MDX 文档中直接渲染它们。 [MDX](https://mdxjs.com/).

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

```js

export const Highlight = ({children, color}) => ( <span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
    }}> {children} </span> );

```

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!
