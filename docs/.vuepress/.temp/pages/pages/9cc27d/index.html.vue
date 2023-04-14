<template><div><h2 id="我是一个小白-想使用这个主题搭建博客-知识库-需要做哪些工作" tabindex="-1"><a class="header-anchor" href="#我是一个小白-想使用这个主题搭建博客-知识库-需要做哪些工作" aria-hidden="true">#</a> 我是一个小白，想使用这个主题搭建博客（知识库）需要做哪些工作？</h2>
<p>答：使用这个主题前需要你掌握下面这些知识：</p>
<ul>
<li>掌握 <a href="https://xugaoyi.com/pages/ad247c4332211551/" target="_blank" rel="noopener noreferrer">markdown<ExternalLinkIcon/></a>、<a href="https://xugaoyi.com/pages/4e8444e2d534d14f/" target="_blank" rel="noopener noreferrer">yaml<ExternalLinkIcon/></a> 语法</li>
<li>会使用终端（命令行），会使用 git</li>
<li>会阅读文档、搜索文档</li>
<li>会<a href="https://vuepress.vuejs.org/zh/" target="_blank" rel="noopener noreferrer">VuePress<ExternalLinkIcon/></a>的基本使用和默认主题的基本配置</li>
</ul>
<p>以上知识都掌握之后，再查看本文档。你也可以运行我的主题项目，一边看代码，一边查看文档。主题项目内写了比较多的注释代码，方便你的学习和使用。</p>
<h2 id="clone-项目后需要修改哪些地方" tabindex="-1"><a class="header-anchor" href="#clone-项目后需要修改哪些地方" aria-hidden="true">#</a> clone 项目后需要修改哪些地方？</h2>
<p>答：大致的修改流程是这样的：</p>
<ol>
<li>首先让项目正常的跑起来</li>
<li>根据需求构建和替换 <RouterLink to="/pages/2f674a/">docs/&lt;结构化目录&gt;</RouterLink> 的目录及内容</li>
<li>根据需求修改 <RouterLink to="/pages/a20ce8/">config.js</RouterLink> 配置</li>
<li>修改 <RouterLink to="/pages/f14bdb/">首页配置</RouterLink></li>
<li>修改 <RouterLink to="/pages/f51918/">主题颜色和样式</RouterLink>（如果你想修改的话）</li>
</ol>
<h2 id="可减少项目冗余的地方有哪些" tabindex="-1"><a class="header-anchor" href="#可减少项目冗余的地方有哪些" aria-hidden="true">#</a> 可减少项目冗余的地方有哪些？</h2>
<p>答：在完成项目的搭建之后，对于没有使用到的一些文件和代码，可以看情况删减，可删减的地方有:</p>
<ul>
<li>卸载<code v-pre>config.js</code>中未使用的插件依赖包</li>
<li>参照 <RouterLink to="/pages/2f674a/">目录结构</RouterLink>，删除未使用到的 <code v-pre>可选</code> 文件</li>
<li>删除<code v-pre>.vusepress</code>目录内未使用到的 <code v-pre>可选</code> 文件</li>
<li>删除各文件内的注释代码</li>
</ul>
<h2 id="我可以不使用永久链接吗" tabindex="-1"><a class="header-anchor" href="#我可以不使用永久链接吗" aria-hidden="true">#</a> 我可以不使用永久链接吗？</h2>
<p>答：<strong>不可以</strong>。当你没有在front matter指定永久链接时，主题会<RouterLink to="/pages/088c16/">自动生成永久链接</RouterLink>到front matter，你可以修改永久链接的值。
使用永久链接是出于以下几点考虑:</p>
<ol>
<li>在<code v-pre>config.js</code>配置nav时使用永久链接，就不会因为文件的路径或名称的改变而改变。</li>
<li>对于博客而言，当别人收藏了你的文章，在未来的时间里都可以通过永久链接来访问到。</li>
<li>主题中的<code v-pre>目录页</code>需要通过永久链接来访问文章。</li>
</ol>
<h2 id="是否支持国际化" tabindex="-1"><a class="header-anchor" href="#是否支持国际化" aria-hidden="true">#</a> 是否支持国际化？</h2>
<p>答：暂不支持。目前的国际化方案，只能是使用不同项目来处理，比如：一个项目是中文，一个项目是英文，在导航中添加中英文站点的链接。</p>
<h2 id="打包后在本地预览怎么没有样式" tabindex="-1"><a class="header-anchor" href="#打包后在本地预览怎么没有样式" aria-hidden="true">#</a> 打包后在本地预览怎么没有样式？</h2>
<p>答：因vuepress打包后的CSS、JS等资源链接采用绝对路径引入，在本地预览时的引入链接是不正确的，部署到服务器即可正常引入和预览。如果你确实需要本地预览，可以使用<a href="https://vuepress.github.io/zh/plugins/serve/" target="_blank" rel="noopener noreferrer">vuepress-plugin-serve<ExternalLinkIcon/></a>插件，使用方法看相应文档。</p>
<h2 id="在build时出现错误-但是在dev时是正常的" tabindex="-1"><a class="header-anchor" href="#在build时出现错误-但是在dev时是正常的" aria-hidden="true">#</a> 在<code v-pre>build</code>时出现错误，但是在<code v-pre>dev</code>时是正常的</h2>
<p>答：这种情况多半是因为你在<code v-pre>created</code>或<code v-pre>beforeCreate</code>生命周期调用了浏览器API的原因导致，详情查看：<a href="https://vuepress.vuejs.org/zh/guide/using-vue.html#%E6%B5%8F%E8%A7%88%E5%99%A8%E7%9A%84-api-%E8%AE%BF%E9%97%AE%E9%99%90%E5%88%B6" target="_blank" rel="noopener noreferrer">浏览器的 API 访问限制<ExternalLinkIcon/></a></p>
</div></template>


