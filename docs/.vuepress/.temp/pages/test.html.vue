<template><div><h2 id="新建文件夹-并且进入-vuepress-文件夹" tabindex="-1"><a class="header-anchor" href="#新建文件夹-并且进入-vuepress-文件夹" aria-hidden="true">#</a> 新建文件夹 并且进入 vuepress 文件夹</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>mkdir vuepress
cd vuepress
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="npm初始化" tabindex="-1"><a class="header-anchor" href="#npm初始化" aria-hidden="true">#</a> npm初始化</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>pnpm init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="全局安装" tabindex="-1"><a class="header-anchor" href="#全局安装" aria-hidden="true">#</a> 全局安装</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>npm add -D vuepress@next @vuepress/client@next vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="打开-package-json-替换掉原先scripts内容" tabindex="-1"><a class="header-anchor" href="#打开-package-json-替换掉原先scripts内容" aria-hidden="true">#</a> 打开 package.json，替换掉原先scripts内容</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>&quot;scripts&quot;: {									
    &quot;docs:dev&quot;: &quot;vuepress dev docs&quot;,           
    &quot;docs:build&quot;: &quot;vuepress build docs&quot;         
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="以下内容可选" tabindex="-1"><a class="header-anchor" href="#以下内容可选" aria-hidden="true">#</a> 以下内容可选</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>&quot;author&quot;: &quot;passwordgloo@163.com&quot;,

&quot;keywords&quot;: [
    &quot;foresee&quot;,
    &quot;igloo&quot;,
    &quot;vuepress&quot;
],
   
&quot;homepage&quot;: &quot;https://github.com/passwordgloo/passwordgloo.github.io&quot;,
&quot;repository&quot;: {
    &quot;type&quot;: &quot;git&quot;,
    &quot;url&quot;: &quot;https://github.com/passwordgloo/passwordgloo.github.io.git&quot;
},

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="新建docs文件夹-在内部新建readme-md" tabindex="-1"><a class="header-anchor" href="#新建docs文件夹-在内部新建readme-md" aria-hidden="true">#</a> 新建docs文件夹，在内部新建README.md</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>---
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


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>home	判断是否是首页
heroImage	首页logo图
heroText	首页标题
actions	按钮，text和link可以多个
features	文档分栏，title和details数量自定
footer	文档底部板块</p>
<h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>npm install
yarn install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动运行" tabindex="-1"><a class="header-anchor" href="#启动运行" aria-hidden="true">#</a> 启动运行</h2>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>npm docs:dev
yarn docs:dev
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


