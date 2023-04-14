<template><div><p>Vdoing是<a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress v1.x<ExternalLinkIcon/></a>的一个主题，是在<a href="https://vuepress.vuejs.org/zh/theme/option-api.html" target="_blank" rel="noopener noreferrer">默认主题<ExternalLinkIcon/></a>基础上做的修改和扩展，很多配置仍然沿用<a href="https://vuepress.vuejs.org/zh/config/" target="_blank" rel="noopener noreferrer">官方配置<ExternalLinkIcon/></a>。使用本主题可以很方便的搭建一个结构化的知识库或博客。</p>
<p>这个主题的初衷是打造一个好用的、面向程序员的知识管理工具：
<RouterLink to="/pages/52d5c3/"><strong>主题初衷与诞生</strong>。</RouterLink></p>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<ol>
<li>Node请使用<code v-pre>v14.17.x</code>或以上版本</li>
<li>在使用本主题前，要求你至少会VuePress v1.x的基本使用和默认主题的基本配置，然后再查看本文档。</li>
<li>本文档仅负责介绍Vdoing主题对默认主题的扩展部分，更多配置请移步 <a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress v1.x文档<ExternalLinkIcon/></a></li>
</ol>
</div>
<h2 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h2>
<ul>
<li><strong>知识管理</strong></li>
</ul>
<p>包含三种典型的知识管理形态：结构化、碎片化、体系化。轻松打造属于你自己的知识管理平台。</p>
<ul>
<li><strong>结构化</strong></li>
</ul>
<p>自动生成侧边栏、目录页、索引页、面包屑等，轻松构建一个结构化知识库。</p>
<ul>
<li><strong>碎片化&amp;个性化</strong></li>
</ul>
<p>博客功能提供一种知识的碎片化形态，并提供个性化的博客配置。</p>
<ul>
<li><strong>简洁高效</strong></li>
</ul>
<p>以 Markdown 为中心的项目结构，内置自动化工具，以更少的配置完成更多的事。配合多维索引快速定位每个知识点。</p>
<ul>
<li><strong>沉浸式阅读体验</strong></li>
</ul>
<p>专为阅读设计的UI，配合多种颜色模式、可关闭的侧边栏和导航栏，带给你一种沉浸式阅读体验。</p>
<h2 id="扩展功能" tabindex="-1"><a class="header-anchor" href="#扩展功能" aria-hidden="true">#</a> 扩展功能</h2>
<p>相较于默认主题，添加的功能内容主要有：</p>
<ul>
<li>
<p>添加方便管理学习笔记和技术文档的<code v-pre>自动生成结构化侧边栏</code>、<code v-pre>自动生成front matter</code>、<code v-pre>目录页</code>、<code v-pre>扩展的搜索框插件</code>、<code v-pre>面包屑</code>、<code v-pre>快捷翻页按钮</code> 等，让你快速定位到任何你想要找的内容。</p>
</li>
<li>
<p>添加博客相关的 <code v-pre>文章信息栏（作者与创建时间）</code>、<code v-pre>最近更新栏</code> 、<code v-pre>博主信息栏</code>、<code v-pre>页脚版权栏</code>、<code v-pre>分类功能+分类页</code>、<code v-pre>标签功能+标签页</code>、<code v-pre>归档页</code>、<code v-pre>评论插件</code>等。</p>
</li>
<li>
<p>方便好用的 <code v-pre>Markdown 容器</code>。</p>
</li>
<li>
<p>首页<code v-pre>文章列表</code>、<code v-pre>个性化配置</code>和<code v-pre>样式美化</code>等。</p>
</li>
<li>
<p>多种颜色模式供用户选择：<code v-pre>跟随系统</code>、<code v-pre>浅色模式</code>、<code v-pre>深色模式</code>、<code v-pre>阅读模式</code></p>
</li>
<li>
<p>提高搬砖效率的辅助工具： <code v-pre>批量操作front matter工具</code></p>
</li>
<li>
<p>...</p>
</li>
</ul>
<h2 id="安利" tabindex="-1"><a class="header-anchor" href="#安利" aria-hidden="true">#</a> 安利</h2>
<ul>
<li>
<p>拥有它你就同时拥有了一个专属你个人的在线知识库(云笔记)、博客、文档库、Demo库、一站式技术搜索工具，内容全部采用Markdown编写，简单高效，各种代码随便贴。</p>
</li>
<li>
<p>你可以在<code v-pre>.md</code>文件中写html、css、js、甚至是vue组件代码，<a href="https://v1.vuepress.vuejs.org/zh/guide/using-vue.html" target="_blank" rel="noopener noreferrer">markdown天然的就支持vue组件<ExternalLinkIcon/></a>，魔改页面什么的不要太简单。</p>
</li>
<li>
<p>相当多的程序员喜欢深色模式，还有的视力也不太好(🤓)，我们有浅色、深色和阅读模式，更有跟随系统自动响应深浅色模式功能，想怎么换就怎么换。</p>
<blockquote>
<p>点击右下角换肤按钮</p>
</blockquote>
</li>
<li>
<p>当你习惯用vdoing主题后，在别处看文档发现是markdown编写的，但所在站点的目录、导航、主题等某个地方用起来不是很爽，你都可以把文档拷贝或把整个专栏下载(如支持下载的话)下来放到vdoing主题，vdoing的自动化工具助你生成一个结构清晰的、拥有目录、页面导航的，而且有多种颜色模式的文档站。让你更专注于内容的学习。</p>
<blockquote>
<p>参考我博客中的<a href="https://xugaoyi.com/note/typescript-axios/" target="_blank" rel="noopener noreferrer">文档专栏<ExternalLinkIcon/></a></p>
</blockquote>
</li>
<li>
<p>如果你想和更多的人分享你的文章，那么这款seo友好的主题是一个很不错的选择，更有为了加快百度收录而定制的每天定时<a href="https://xugaoyi.com/pages/f44d2f9ad04ab8d3/" target="_blank" rel="noopener noreferrer">百度推送程序<ExternalLinkIcon/></a>。</p>
<blockquote>
<p>参考我的博客<a href="https://www.baidu.com/s?word=site%3Axugaoyi.com" target="_blank" rel="noopener noreferrer">收录情况<ExternalLinkIcon/></a>。</p>
</blockquote>
</li>
</ul>
<p>别犹豫了，赶快上手吧</p>
</div></template>


