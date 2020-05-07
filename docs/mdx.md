---
id: mdx
title: 语法演示
---

❤️ 强大： MDX 将 markdown 和 JSX 语法混合在一起并完美地 融入基于 JSX 的项目当中。

💻 一切皆组件： 导入（import） JSX 组件并 在 MDX 文档中直接渲染它们。 详情可以看[MDX](https://mdxjs.com/).

**Markdown** with _JSX_!

### jsx写入

```js
  import React from 'react'
  export const Highlight = ({ children, color }) => (<span style={{
      backgroundColor: color,
      borderRadius: '2px',
      color: '#fff',
      padding: '0.2rem',
  }}> {children} </span>);

  <Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight>
```
import Gradient from '../src/components/Gradient/index.jsx'
import { Highlight } from '../src/components/Highlight.jsx'

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight>

---
### 导入使用

`import Gradient from '../src/components/Gradient/index.jsx'`

<Gradient />

