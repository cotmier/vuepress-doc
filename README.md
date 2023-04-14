
## 新建文件夹 并且进入 vuepress 文件夹
```angular2html
mkdir vuepress
cd vuepress
```
## npm初始化
```angular2html
pnpm init
```
## 全局安装
```angular2html
npm add -D vuepress@next @vuepress/client@next vue
```
## 打开 package.json，替换掉原先scripts内容
```angular2html
"scripts": {									
    "docs:dev": "vuepress dev docs",           
    "docs:build": "vuepress build docs"         
}
```
## 以下内容可选
```angular2html
"author": "passwordgloo@163.com",

"keywords": [
    "foresee",
    "igloo",
    "vuepress"
],
   
"homepage": "https://github.com/passwordgloo/passwordgloo.github.io",
"repository": {
    "type": "git",
    "url": "https://github.com/passwordgloo/passwordgloo.github.io.git"
},

```
## 新建docs文件夹，在内部新建README.md
```angular2html
---
home: true
heroImage: /favicon.png
heroText: igloo's document
actions:
  - text: Quick
    link: /Guide/
    type: primary
  - text: Intro
    link: /guide/
    type: secondary
features:
- title: Note
  details: Markdown-centered notes that record every moment succinctly and efficiently
- title: Blog
  details: Clean and tidy blog, easy to archive files
- title: Document
  details: Online personal documentation, make the desired documentation
footer: MIT Licensed | Copyright © 2016-present Passwordgloo
---
请在此书写你的内容


```
home	判断是否是首页
heroImage	首页logo图
heroText	首页标题
actions	按钮，text和link可以多个
features	文档分栏，title和details数量自定
footer	文档底部板块

## 安装
```angular2html
npm install
yarn install
```

## 启动运行
```angular2html
npm docs:dev
yarn docs:dev
```