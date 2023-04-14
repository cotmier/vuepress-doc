---
lang: zh-CN
title: 首页的标题
description: 页面的描述
---

<!-- 目录 -->
[[toc]]

# Hello VuePress

<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)
<!-- URL 外部链接 -->
[GitHub](https://github.com)


## 行高亮
- 你可以在代码块添加行数范围标记，来为对应代码行进行高亮[1,6-8]：
```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```
# 分组显示代码块
 
---
:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
theme: defaultTheme({
  logo: 'https://vuejs.org/images/logo.png',
})
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

## 分组代码块 - 全局组件

<CodeGroup>
 <CodeGroupItem title = "yarn">

  ```bash:no-line-numbers
  yarn install
  ```
 </CodeGroupItem>

 <CodeGroupItem title = "npm" active>

  ```bash:no-line-numbers
  npm install
  ```
 </CodeGroupItem>

</CodeGroup>


## 行号
- 你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。

- 你可以在代码块添加 :line-numbers / :no-line-numbers 标记来覆盖配置项中的设置。
```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```

```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```


## Emoji 🎉
- 你可以在你的 Markdown 内容中输入 :EMOJICODE: 来添加 Emoji 表情。
- 前往 emoji-cheat-sheet 来查看所有可用的 Emoji 表情和对应代码。
- 点击访问 [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet)  
  输入
```angular2html
VuePress 2 已经发布 :tada: ！
```
显示：VuePress 2 已经发布 :tada: ！

## 自定义容器 默认主题
输入
```angular2html
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::
```
::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

你也可以自定义块中的标题：
```angular2html
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```

::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::

## Public 文件
你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。

默认的 Public 目录是 .vuepress/public ，可以通过 public 配置项来修改。

在下列这些情况中，你可能会用到它：

- 你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。
- 你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。
- 你可能想在你的 Markdown 内容中通过绝对路径来引入图片。
- 以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：
```angular2html
└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # <- Logo 文件
   └─ guide
      └─ assets.md       # <- 我们在这里
```

- 我们可以这样在当前页面引用 Logo ：

```angular2html

![VuePress Logo](/images/hero.png)

```

![VuePress Logo](/images/hero.png)


## 静态资源
### 相对路径
你可以在你的 Markdown 内容中使用相对路径来引用静态资源：
```angular2html
![图片](./image.png)
```

![图片](/images/imgave.jpg)
