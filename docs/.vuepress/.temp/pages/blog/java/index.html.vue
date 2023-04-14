<template><div><!-- 目录 -->
<nav class="table-of-contents"><ul></ul></nav>
<h1 id="hello-java" tabindex="-1"><a class="header-anchor" href="#hello-java" aria-hidden="true">#</a> Hello java</h1>
<!-- 相对路径 -->
<p><RouterLink to="/blog/">首页</RouterLink><br>
<RouterLink to="/blog/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/blog/java/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL 外部链接 -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
</div></template>


