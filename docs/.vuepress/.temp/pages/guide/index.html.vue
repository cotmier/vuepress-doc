<template><div><!-- 目录 -->
<nav class="table-of-contents"><ul><li><router-link to="#行高亮">行高亮</router-link></li><li><router-link to="#分组代码块-全局组件">分组代码块 - 全局组件</router-link></li><li><router-link to="#行号">行号</router-link></li><li><router-link to="#emoji-🎉">Emoji 🎉</router-link></li><li><router-link to="#自定义容器-默认主题">自定义容器 默认主题</router-link></li><li><router-link to="#public-文件">Public 文件</router-link></li><li><router-link to="#静态资源">静态资源</router-link><ul><li><router-link to="#相对路径">相对路径</router-link></li></ul></li></ul></nav>
<h1 id="hello-vuepress" tabindex="-1"><a class="header-anchor" href="#hello-vuepress" aria-hidden="true">#</a> Hello VuePress</h1>
<!-- 相对路径 -->
<p><RouterLink to="/">首页</RouterLink><br>
<RouterLink to="/reference/config.html">配置参考</RouterLink><br>
<RouterLink to="/guide/getting-started.html">快速上手</RouterLink></p>
<!-- 绝对路径 -->
<p><RouterLink to="/zh/guide/">指南</RouterLink><br>
<RouterLink to="/zh/reference/config.html#links">配置参考 &gt; markdown.links</RouterLink></p>
<!-- URL 外部链接 -->
<p><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub<ExternalLinkIcon/></a></p>
<h2 id="行高亮" tabindex="-1"><a class="header-anchor" href="#行高亮" aria-hidden="true">#</a> 行高亮</h2>
<ul>
<li>你可以在代码块添加行数范围标记，来为对应代码行进行高亮[1,6-8]：</li>
</ul>
<div class="language-typescript line-numbers-mode" data-ext="ts"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defaultTheme<span class="token punctuation">,</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuepress'</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

  theme<span class="token operator">:</span> <span class="token function">defaultTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="分组显示代码块" tabindex="-1"><a class="header-anchor" href="#分组显示代码块" aria-hidden="true">#</a> 分组显示代码块</h1>
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
</code></pre></div><h2 id="emoji-🎉" tabindex="-1"><a class="header-anchor" href="#emoji-🎉" aria-hidden="true">#</a> Emoji 🎉</h2>
<ul>
<li>你可以在你的 Markdown 内容中输入 :EMOJICODE: 来添加 Emoji 表情。</li>
<li>前往 emoji-cheat-sheet 来查看所有可用的 Emoji 表情和对应代码。</li>
<li>点击访问 <a href="https://github.com/ikatyang/emoji-cheat-sheet" target="_blank" rel="noopener noreferrer">emoji-cheat-sheet<ExternalLinkIcon/></a><br>
输入</li>
</ul>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>VuePress 2 已经发布 :tada: ！
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>显示：VuePress 2 已经发布 🎉 ！</p>
<h2 id="自定义容器-默认主题" tabindex="-1"><a class="header-anchor" href="#自定义容器-默认主题" aria-hidden="true">#</a> 自定义容器 默认主题</h2>
<p>输入</p>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>::: tip
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>这是一个警告</p>
</div>
<div class="custom-container danger"><p class="custom-container-title">DANGER</p>
<p>这是一个危险警告</p>
</div>
<details class="custom-container details">
<p>这是一个详情块，在 IE / Edge 中不生效</p>
</details>
<p>你也可以自定义块中的标题：</p>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container danger"><p class="custom-container-title">STOP</p>
<p>危险区域，禁止通行</p>
</div>
<details class="custom-container details"><summary>点击查看代码</summary>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'你好，VuePress！'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></details>
<h2 id="public-文件" tabindex="-1"><a class="header-anchor" href="#public-文件" aria-hidden="true">#</a> Public 文件</h2>
<p>你可以把一些静态资源放在 Public 目录中，它们会被复制到最终生成的网站的根目录下。</p>
<p>默认的 Public 目录是 .vuepress/public ，可以通过 public 配置项来修改。</p>
<p>在下列这些情况中，你可能会用到它：</p>
<ul>
<li>你可能需要提供一些静态资源，但是它们并不直接被你的 Markdown 文件引用，比如 favicon 和 PWA 图标。</li>
<li>你可能想要托管一些共享的静态资源，甚至可能需要在你的网站外部引用它，比如 Logo 图片。</li>
<li>你可能想在你的 Markdown 内容中通过绝对路径来引入图片。</li>
<li>以我们文档的源文件为例，我们把 VuePress 的 Logo 放在了 Public 目录下：</li>
</ul>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>└─ docs
   ├─ .vuepress
   |  └─ public
   |     └─ images
   |        └─ hero.png  # &lt;- Logo 文件
   └─ guide
      └─ assets.md       # &lt;- 我们在这里
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>我们可以这样在当前页面引用 Logo ：</li>
</ul>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>
![VuePress Logo](/images/hero.png)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/images/hero.png" alt="VuePress Logo"></p>
<h2 id="静态资源" tabindex="-1"><a class="header-anchor" href="#静态资源" aria-hidden="true">#</a> 静态资源</h2>
<h3 id="相对路径" tabindex="-1"><a class="header-anchor" href="#相对路径" aria-hidden="true">#</a> 相对路径</h3>
<p>你可以在你的 Markdown 内容中使用相对路径来引用静态资源：</p>
<div class="language-angular2html line-numbers-mode" data-ext="angular2html"><pre v-pre class="language-angular2html"><code>![图片](./image.png)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="/images/imgave.jpg" alt="图片"></p>
</div></template>


