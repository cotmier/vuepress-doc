<template><div><!-- 目录 -->
<nav class="table-of-contents"><ul><li><router-link to="#分组代码块-全局组件">分组代码块 - 全局组件</router-link></li><li><router-link to="#行号">行号</router-link></li></ul></nav>
<h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h1>
<h1 id="分组显示代码块" tabindex="-1"><a class="header-anchor" href="#分组显示代码块" aria-hidden="true">#</a> 分组显示代码块</h1>
<hr>
<CodeGroup>
<CodeGroupItem title="FOO">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> foo <span class="token operator">=</span> <span class="token string">'foo'</span>
<span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">logo</span><span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroupItem>
<CodeGroupItem title="BAR">
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> bar <span class="token operator">=</span> <span class="token string">'bar'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></CodeGroupItem>
</CodeGroup>
<h2 id="分组代码块-全局组件" tabindex="-1"><a class="header-anchor" href="#分组代码块-全局组件" aria-hidden="true">#</a> 分组代码块 - 全局组件</h2>
<CodeGroup>
 <CodeGroupItem title = "yarn">
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">install</span>
</code></pre></div> </CodeGroupItem>
 <CodeGroupItem title = "npm" active>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span>
</code></pre></div> </CodeGroupItem>
</CodeGroup>
<h2 id="行号" tabindex="-1"><a class="header-anchor" href="#行号" aria-hidden="true">#</a> 行号</h2>
<ul>
<li>
<p>你肯定已经注意到在代码块的最左侧会展示行号。这个功能是默认启用的，你可以通过配置来禁用它。</p>
</li>
<li>
<p>你可以在代码块添加 :line-numbers / :no-line-numbers 标记来覆盖配置项中的设置。</p>
</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 行号默认是启用的</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token comment">// 行号被禁用</span>
<span class="token keyword">const</span> line2 <span class="token operator">=</span> <span class="token string">'This is line 2'</span>
<span class="token keyword">const</span> line3 <span class="token operator">=</span> <span class="token string">'This is line 3'</span>
</code></pre></div></div></template>


