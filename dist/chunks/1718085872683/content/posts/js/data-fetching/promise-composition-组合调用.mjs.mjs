import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="promise-composition-组合调用">Promise Composition-组合调用<a class="anchor" href="#promise-composition-组合调用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="promiseall"><code>Promise.all()</code><a class="anchor" href="#promiseall"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>发起多个并发请求，然后在所有 promise 都被解决后执行一些操作</li>\n<li>适合彼此相互依赖或者在其中任何一个<code>reject</code>时立即结束</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> promise1</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">resolve</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> promise2</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> 42</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> promise3</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\tsetTimeout</span><span style="color:#E1E4E8">(resolve, </span><span style="color:#79B8FF">100</span><span style="color:#E1E4E8">, foo);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#79B8FF">Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">all</span><span style="color:#E1E4E8">([promise1, promise2, promise3]).</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">values</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(values);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#6A737D">// expected output: Array [3, 42, foo]</span></span>\n<span class="line"></span></code></pre>\n<h3 id="promiserace"><code>Promise.race()</code><a class="anchor" href="#promiserace"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>传入多个 promise 实例，谁跑的快，就以谁的结果执行回调</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> first</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\tsetTimeout</span><span style="color:#E1E4E8">(resolve, </span><span style="color:#79B8FF">500</span><span style="color:#E1E4E8">, 第一个);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> second</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\tsetTimeout</span><span style="color:#E1E4E8">(resolve, </span><span style="color:#79B8FF">100</span><span style="color:#E1E4E8">, 第二个);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#79B8FF">Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">race</span><span style="color:#E1E4E8">([first, second]).</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">result</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(result); </span><span style="color:#6A737D">// 第二个</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"></span></code></pre>\n<h4 id="use-case">Use Case<a class="anchor" href="#use-case"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>1、把异步操作和定时器放到一起，如果定时器先触发，认为超时，告知用户</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> timeOut</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">time</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#F97583">\tlet</span><span style="color:#E1E4E8"> result </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\t\tsetTimeout</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\tresolve</span><span style="color:#E1E4E8">(请求超时);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t}, time); </span><span style="color:#6A737D">// 为了验证方法，可以把时间设小点</span></span>\n<span class="line"><span style="color:#E1E4E8">\t});</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#E1E4E8"> result;</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#79B8FF">Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">race</span><span style="color:#E1E4E8">([</span><span style="color:#B392F0">timeOut</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">200</span><span style="color:#E1E4E8">), </span><span style="color:#B392F0">fetch</span><span style="color:#E1E4E8">(https:</span><span style="color:#6A737D">//api.github.com/users/ruanyf)]).then(</span></span>\n<span class="line"><span style="color:#E1E4E8">\t(</span><span style="color:#FFAB70">res</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(res);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">);</span></span>\n<span class="line"></span></code></pre>\n<p>2、如果图片等资源有多个存放路径，但是不确定哪个路径的资源更快，可以用该方法同时请求多个路径，哪个路径的资源最先拿到，使用哪个资源</p>\n<p>3、如果指定时间内没有获得结果，就将 Promise 的状态变为 <code>reject</code>，否则变为<code>resolve</code></p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> p</span><span style="color:#F97583"> =</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">race</span><span style="color:#E1E4E8">([</span></span>\n<span class="line"><span style="color:#B392F0">\tfetch</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">/</span><span style="color:#E1E4E8">resource</span><span style="color:#F97583">-</span><span style="color:#E1E4E8">that</span><span style="color:#F97583">-</span><span style="color:#E1E4E8">may</span><span style="color:#F97583">-</span><span style="color:#E1E4E8">take</span><span style="color:#F97583">-</span><span style="color:#E1E4E8">a</span><span style="color:#F97583">-</span><span style="color:#E1E4E8">while),</span></span>\n<span class="line"><span style="color:#F97583">\tnew</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">function</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#B392F0">\t\tsetTimeout</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">=></span><span style="color:#B392F0"> reject</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">new</span><span style="color:#B392F0"> Error</span><span style="color:#E1E4E8">(request timeout)), </span><span style="color:#79B8FF">5000</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}),</span></span>\n<span class="line"><span style="color:#E1E4E8">]);</span></span>\n<span class="line"><span style="color:#E1E4E8">p.</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">(console.log).</span><span style="color:#B392F0">catch</span><span style="color:#E1E4E8">(console.error);</span></span>\n<span class="line"></span></code></pre>\n<h3 id="promiseallsettled-es2020"><code>Promise.allSettled()</code> (ES2020)<a class="anchor" href="#promiseallsettled-es2020"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>由 ES2020 引入</li>\n<li>功能\n<ul>\n<li>有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个 promise 的结果时，通常使用</li>\n<li><code>Promise.all()</code>无法确定所有请求都结束。想要达到这个目的，写起来很麻烦，有了<code>Promise.allSettled()</code>，这就很容易了</li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> urls</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> [</span></span>\n<span class="line"><span style="color:#6A737D">\t/* ... */</span></span>\n<span class="line"><span style="color:#E1E4E8">];</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> requests</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> urls.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">x</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#B392F0"> fetch</span><span style="color:#E1E4E8">(x));</span></span>\n<span class="line"><span style="color:#F97583">try</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">\tawait</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">all</span><span style="color:#E1E4E8">(requests);</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(所有请求都成功。);</span></span>\n<span class="line"><span style="color:#E1E4E8">} </span><span style="color:#F97583">catch</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(至少一个请求失败，其他请求可能还没结束。);</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h4 id="返回值">返回值<a class="anchor" href="#返回值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>返回一个在所有给定的 promise 都已经<code>fulfilled</code>或<code>rejected</code>后的 promise，并带有一个<strong>对象数组</strong>，每个对象表示对应的 promise 结果\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-Promise.allSettled.png" alt=""></li>\n</ul>\n</li>\n<li>每个对象都有<code>status</code>属性，该属性的值只可能是字符串<code>fulfilled</code>或字符串<code>rejected</code>。\n<ul>\n<li><code>fulfilled</code>时，对象有<code>value</code>属性，</li>\n<li><code>rejected</code>时有<code>reason</code>属性，对应两种状态的返回值。</li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> promises</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> [</span><span style="color:#B392F0">fetch</span><span style="color:#E1E4E8">(index.html), </span><span style="color:#B392F0">fetch</span><span style="color:#E1E4E8">(https:</span><span style="color:#6A737D">//does-not-exist/)];</span></span>\n<span class="line"><span style="color:#E1E4E8">const results </span><span style="color:#F97583">=</span><span style="color:#F97583"> await</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">allSettled</span><span style="color:#E1E4E8">(promises);</span></span>\n<span class="line"><span style="color:#6A737D">// 过滤出成功的请求</span></span>\n<span class="line"><span style="color:#E1E4E8">const successfulPromises </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> results.</span><span style="color:#B392F0">filter</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">p</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> p.status </span><span style="color:#F97583">===</span><span style="color:#E1E4E8"> fulfilled);</span></span>\n<span class="line"><span style="color:#6A737D">// 过滤出失败的请求，并输出原因</span></span>\n<span class="line"><span style="color:#E1E4E8">const errors </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> results</span></span>\n<span class="line"><span style="color:#E1E4E8">\t.</span><span style="color:#B392F0">filter</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">p</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> p.status </span><span style="color:#F97583">===</span><span style="color:#E1E4E8"> rejected)</span></span>\n<span class="line"><span style="color:#E1E4E8">\t.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">p</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> p.reason);</span></span>\n<span class="line"></span></code></pre>\n<h3 id="promiseany-es2020"><code>Promise.any()</code> (ES2020)<a class="anchor" href="#promiseany-es2020"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>输入\n<ul>\n<li>一个 Promise 数组</li>\n</ul>\n</li>\n<li>返回值\n<ul>\n<li>一个新的 Promise 对象\n<ul>\n<li>该 Promise 对象在传入的 Promise 数组中的任何一个 Promise 解决时就会被解决</li>\n<li>若所有的 Promise 都被拒绝，则返回的 Promise 会被拒绝，并且它的拒因是一个 <code>AggregateError</code> 对象实例，包含了所有被拒绝的 Promise 的原因 (可通过 <code>.errors</code> 属性读取)</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>返回值处理</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#79B8FF">Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">any</span><span style="color:#E1E4E8">([p10, p11])</span></span>\n<span class="line"><span style="color:#E1E4E8">\t.</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">res</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(res))</span></span>\n<span class="line"><span style="color:#E1E4E8">\t.</span><span style="color:#B392F0">catch</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">err</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">\t\tif</span><span style="color:#E1E4E8"> (err </span><span style="color:#F97583">instanceof</span><span style="color:#B392F0"> AggregateError</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\tconsole.</span><span style="color:#B392F0">error</span><span style="color:#E1E4E8">(AggregateError occurred:);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(err.errors);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\terr.errors.</span><span style="color:#B392F0">forEach</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">err</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">index</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\tconsole.</span><span style="color:#B392F0">error</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`Error ${</span><span style="color:#E1E4E8">index</span><span style="color:#F97583"> +</span><span style="color:#79B8FF"> 1</span><span style="color:#9ECBFF">}:`</span><span style="color:#E1E4E8">, err);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t});</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t} </span><span style="color:#F97583">else</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\tconsole.</span><span style="color:#B392F0">error</span><span style="color:#E1E4E8">(Other error occurred:, err);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">\t});</span></span>\n<span class="line"></span></code></pre>',frontmatter={title:"Promise Composition-组合调用",topic:null,type:null,tags:["JavaScript"],category:"Programming",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["Promise Composition-组合调用"],draft:!1,DateStarted:"2024-04-25T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z","linter-yaml-title-alias":"Promise Composition-组合调用",minutes:4,words:737},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/data-fetching/promise-composition-组合调用.md",url=void 0;function rawContent(){return"# Promise Composition-组合调用\n\n### `Promise.all()`\n\n- 发起多个并发请求，然后在所有 promise 都被解决后执行一些操作\n- 适合彼此相互依赖或者在其中任何一个`reject`时立即结束\n\n```js\nconst promise1 = Promise.resolve(3);\nconst promise2 = 42;\nconst promise3 = new Promise((resolve, reject) => {\n\tsetTimeout(resolve, 100, foo);\n});\nPromise.all([promise1, promise2, promise3]).then((values) => {\n\tconsole.log(values);\n});\n// expected output: Array [3, 42, foo]\n```\n\n### `Promise.race()`\n\n- 传入多个 promise 实例，谁跑的快，就以谁的结果执行回调\n\n```js\nconst first = new Promise((resolve, reject) => {\n\tsetTimeout(resolve, 500, 第一个);\n});\nconst second = new Promise((resolve, reject) => {\n\tsetTimeout(resolve, 100, 第二个);\n});\nPromise.race([first, second]).then((result) => {\n\tconsole.log(result); // 第二个\n});\n```\n\n#### Use Case\n\n1、把异步操作和定时器放到一起，如果定时器先触发，认为超时，告知用户\n\n```js\nfunction timeOut(time) {\n\tlet result = new Promise((resolve, reject) => {\n\t\tsetTimeout(() => {\n\t\t\tresolve(请求超时);\n\t\t}, time); // 为了验证方法，可以把时间设小点\n\t});\n\treturn result;\n}\nPromise.race([timeOut(200), fetch(https://api.github.com/users/ruanyf)]).then(\n\t(res) => {\n\t\tconsole.log(res);\n\t}\n);\n```\n\n2、如果图片等资源有多个存放路径，但是不确定哪个路径的资源更快，可以用该方法同时请求多个路径，哪个路径的资源最先拿到，使用哪个资源\n\n3、如果指定时间内没有获得结果，就将 Promise 的状态变为 `reject`，否则变为`resolve`\n\n```js\nconst p = Promise.race([\n\tfetch(/resource-that-may-take-a-while),\n\tnew Promise(function (resolve, reject) {\n\t\tsetTimeout(() => reject(new Error(request timeout)), 5000);\n\t}),\n]);\np.then(console.log).catch(console.error);\n```\n\n### `Promise.allSettled()` (ES2020)\n\n- 由 ES2020 引入\n- 功能\n  - 有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个 promise 的结果时，通常使用\n  - `Promise.all()`无法确定所有请求都结束。想要达到这个目的，写起来很麻烦，有了`Promise.allSettled()`，这就很容易了\n\n```js\nconst urls = [\n\t/* ... */\n];\nconst requests = urls.map((x) => fetch(x));\ntry {\n\tawait Promise.all(requests);\n\tconsole.log(所有请求都成功。);\n} catch {\n\tconsole.log(至少一个请求失败，其他请求可能还没结束。);\n}\n```\n\n#### 返回值\n\n- 返回一个在所有给定的 promise 都已经`fulfilled`或`rejected`后的 promise，并带有一个**对象数组**，每个对象表示对应的 promise 结果\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-Promise.allSettled.png)\n- 每个对象都有`status`属性，该属性的值只可能是字符串`fulfilled`或字符串`rejected`。\n  - `fulfilled`时，对象有`value`属性，\n  - `rejected`时有`reason`属性，对应两种状态的返回值。\n\n```js\nconst promises = [fetch(index.html), fetch(https://does-not-exist/)];\nconst results = await Promise.allSettled(promises);\n// 过滤出成功的请求\nconst successfulPromises = results.filter((p) => p.status === fulfilled);\n// 过滤出失败的请求，并输出原因\nconst errors = results\n\t.filter((p) => p.status === rejected)\n\t.map((p) => p.reason);\n```\n\n### `Promise.any()` (ES2020)\n\n- 输入\n  - 一个 Promise 数组\n- 返回值\n  - 一个新的 Promise 对象\n    - 该 Promise 对象在传入的 Promise 数组中的任何一个 Promise 解决时就会被解决\n    - 若所有的 Promise 都被拒绝，则返回的 Promise 会被拒绝，并且它的拒因是一个 `AggregateError` 对象实例，包含了所有被拒绝的 Promise 的原因 (可通过 `.errors` 属性读取)\n- 返回值处理\n\n```js\nPromise.any([p10, p11])\n\t.then((res) => console.log(res))\n\t.catch((err) => {\n\t\tif (err instanceof AggregateError) {\n\t\t\tconsole.error(AggregateError occurred:);\n\t\t\tconsole.log(err.errors);\n\t\t\terr.errors.forEach((err, index) => {\n\t\t\t\tconsole.error(`Error ${index + 1}:`, err);\n\t\t\t});\n\t\t} else {\n\t\t\tconsole.error(Other error occurred:, err);\n\t\t}\n\t});\n```"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"promise-composition-组合调用",text:"Promise Composition-组合调用#"},{depth:3,slug:"promiseall",text:"Promise.all()#"},{depth:3,slug:"promiserace",text:"Promise.race()#"},{depth:4,slug:"use-case",text:"Use Case#"},{depth:3,slug:"promiseallsettled-es2020",text:"Promise.allSettled() (ES2020)#"},{depth:4,slug:"返回值",text:"返回值#"},{depth:3,slug:"promiseany-es2020",text:"Promise.any() (ES2020)#"}]}const Content=createComponent(((s,n,o)=>{const{layout:a,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};