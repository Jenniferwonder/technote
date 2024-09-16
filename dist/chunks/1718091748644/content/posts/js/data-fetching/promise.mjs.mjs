import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="promise">Promise<a class="anchor" href="#promise"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="what-is-a-promise">What is a Promise?<a class="anchor" href="#what-is-a-promise"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>Promise 是一种在 JavaScript 中用于处理异步操作的编程模式。它表示一个尚未完成但预计在未来某个时刻完成的操作的结果。Promise 允许我们以更简洁、易读的方式处理异步操作，避免了传统的回调地狱（callback hell）问题。</p>\n<ul>\n<li>A promise is a returned <strong>object</strong> to which you attach callbacks, instead of passing callbacks into a function.</li>\n<li>It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.</li>\n</ul>\n<h3 id="promise-3-种状态">Promise 3 种状态<a class="anchor" href="#promise-3-种状态"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><strong>pending</strong>: initial state, neither fulfilled nor rejected.</li>\n<li><strong>fulfilled</strong> (resolved): meaning that the operation was completed successfully.</li>\n<li><strong>rejected</strong>: meaning that the operation failed</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-PromiseState-1.png" alt=""> <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-PromiseState.png" alt=""></li>\n</ul>\n<h3 id="promise-核心特点">Promise 核心特点<a class="anchor" href="#promise-核心特点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ol>\n<li>? Promise 对象是不可变的，一旦创建，其状态就不能再被改变。</li>\n<li>Promise 状态只能从 pending 变为 fulfilled 或 rejected，不能逆向改变，且只能改变一次。</li>\n<li>Promise 允许我们将成功和失败的处理函数分开，增加代码的可读性。</li>\n</ol>\n<h3 id="promise-缺点">Promise 缺点<a class="anchor" href="#promise-缺点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ol>\n<li>无法取消：一旦创建了 Promise，就无法取消它。这可能导致在某些情况下，不再需要结果的异步操作仍然在执行。</li>\n<li>总是异步：Promise 的回调总是异步执行，即使操作已经完成。这可能会导致一些意外的行为，特别是在执行顺序敏感的情况下。</li>\n<li>调试困难：由于 Promise 的链式调用和异步特性，调试 Promise 可能比调试同步代码更具挑战性。错误堆栈可能不够清晰，难以确定问题出在哪里。</li>\n</ol>\n<h3 id="执行特点">执行特点<a class="anchor" href="#执行特点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Promise 只以<code>第一次为准</code>，第一次成功就<code>永久</code>为<code>fulfilled</code>，第一次失败就永远状态为<code>rejected</code></li>\n<li>Promise 中有 <code>throw</code> 的话，就相当于执行了<code>reject</code></li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> p1 </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\tresolve</span><span style="color:#E1E4E8">(成功);</span></span>\n<span class="line"><span style="color:#B392F0">\treject</span><span style="color:#E1E4E8">(失败);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(p1, p1);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> p2 </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\treject</span><span style="color:#E1E4E8">(失败);</span></span>\n<span class="line"><span style="color:#B392F0">\tresolve</span><span style="color:#E1E4E8">(成功);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(p2, p2);</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> p3 </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">\tthrow</span><span style="color:#E1E4E8"> 报错;</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(p3, p3);</span></span>\n<span class="line"></span></code></pre>\n<h3 id="pending-state-特点">Pending State 特点<a class="anchor" href="#pending-state-特点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Promise 里没有执行<code>resolve</code>、<code>reject</code>以及<code>throw</code>的话，这个 promise 的状态也是<code>pending</code></li>\n<li><code>pending</code>状态下的 promise 不会执行回调函数<code>then()</code></li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> myPromise1 </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {});</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(myPromise1 :</span><span style="color:#F97583">>></span><span style="color:#E1E4E8"> , myPromise1);</span></span>\n<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> myPromise2 </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">\tlet</span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">\tfor</span><span style="color:#E1E4E8"> (</span><span style="color:#F97583">let</span><span style="color:#E1E4E8"> index </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">; index </span><span style="color:#F97583">&#x3C;</span><span style="color:#79B8FF"> 5</span><span style="color:#E1E4E8">; index</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\ta</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(myPromise2 :</span><span style="color:#F97583">>></span><span style="color:#E1E4E8"> , myPromise2);</span></span>\n<span class="line"><span style="color:#E1E4E8">myPromise2.</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(myPromise2执行了then); </span><span style="color:#6A737D">// 在 Promise pending 状态下不会执行</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"></span></code></pre>\n<h2 id="常见用法">常见用法<a class="anchor" href="#常见用法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ol>\n<li>创建 Promise 对象：通过<code>new Promise(executor)</code>创建一个 Promise 对象，其中 executor 是一个执行器函数，接受两个参数：resolve 和 reject。成功时调用 resolve 函数并传递结果，失败时调用 reject 函数并传递原因。</li>\n<li>链式调用：通过<code>.then()</code>方法处理 fulfilled 状态，接受一个回调函数作为参数，当 Promise 状态变为 fulfilled 时调用。<code>.catch()</code>方法处理 rejected 状态，接受一个回调函数作为参数，当 Promise 状态变为 rejected 时调用。</li>\n<li>Promise.all：接受一个 Promise 数组作为参数，当所有 Promise 都变为 fulfilled 状态时返回一个新的 Promise，其值为所有 Promise 结果的数组。如果有任意一个 Promise 变为 rejected 状态，则返回的 Promise 也变为 rejected，且返回原因是第一个 rejected 的 Promise 的原因。</li>\n<li>Promise.race：接受一个 Promise 数组作为参数，返回一个新的 Promise，其状态和结果与第一个完成（无论是 fulfilled 还是 rejected）的 Promise 相同。</li>\n</ol>\n<h2 id="create-a-promise">Create a Promise<a class="anchor" href="#create-a-promise"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="new-promise"><code>new Promise()</code><a class="anchor" href="#new-promise"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="参数要求">参数要求<a class="anchor" href="#参数要求"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>使用 <code>new Promise()</code> 必须输入一个执行函数，否则会报错</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> myPromise0 </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(myPromise0 :</span><span style="color:#F97583">>></span><span style="color:#E1E4E8"> , myPromise0); </span><span style="color:#6A737D">// 报错：TypeError: Promise resolver undefined</span></span>\n<span class="line"></span></code></pre>\n<h5 id="case">Case<a class="anchor" href="#case"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> makeRequest</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">location</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`Making Request to ${</span><span style="color:#E1E4E8">location</span><span style="color:#9ECBFF">}`</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#F97583">\t\tif</span><span style="color:#E1E4E8"> (location </span><span style="color:#F97583">===</span><span style="color:#E1E4E8"> Google) {</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\tresolve</span><span style="color:#E1E4E8">(Google says Hi);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t} </span><span style="color:#F97583">else</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\treject</span><span style="color:#E1E4E8">(We can only talk to Google);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">\t});</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h4 id="-执行顺序">⭐ 执行顺序<a class="anchor" href="#-执行顺序"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>Promise 构造函数是同步执行的，<code>promise.then</code>  中的函数是异步执行的</li>\n</ul>\n<h5 id="case-1">Case<a class="anchor" href="#case-1"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> promise</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#B392F0">\tresolve</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">promise.</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">(() </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">3</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">4</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"></span></code></pre>\n<h5 id="output">Output<a class="anchor" href="#output"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#B392F0">1</span></span>\n<span class="line"><span style="color:#B392F0">2</span></span>\n<span class="line"><span style="color:#B392F0">4</span></span>\n<span class="line"><span style="color:#B392F0">3</span></span>\n<span class="line"></span></code></pre>\n<h3 id="promiseresolve"><code>Promise.resolve()</code><a class="anchor" href="#promiseresolve"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>将现有对象转为 Promise 对象</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#79B8FF">Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">resolve</span><span style="color:#E1E4E8">(foo);</span></span>\n<span class="line"><span style="color:#6A737D">// 等价于</span></span>\n<span class="line"><span style="color:#F97583">new</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#B392F0"> resolve</span><span style="color:#E1E4E8">(foo));</span></span>\n<span class="line"></span></code></pre>\n<h4 id="参数的四种情况">参数的四种情况<a class="anchor" href="#参数的四种情况"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ol>\n<li>如果参数是 <code>Promise</code> 实例\n<ul>\n<li>那么 <code>Promise.resolve()</code> 将不做任何修改、原封不动地返回这个实例。</li>\n</ul>\n</li>\n<li>参数是一个 thenable (具有<code>then</code>方法的对象) 对象\n<ul>\n<li>会将这个对象转为 <code>Promise</code> 对象，然后就立即执行 thenable 对象的 <code>then</code>方法</li>\n</ul>\n</li>\n<li>参数是一个原始值，或者是一个不具有<code>then</code>方法的对象\n<ul>\n<li>则<code>Promise.resolve</code>方法返回一个新的  <code>Promise</code>  对象，状态为<code>resolved</code></li>\n</ul>\n</li>\n<li><code>Promise.resolve()</code>方法允许调用时不带参数\n<ul>\n<li>直接返回一个 <code>resolved</code>状态的 <code>Promise</code> 对象。</li>\n</ul>\n</li>\n</ol>\n<h4 id="example">Example<a class="anchor" href="#example"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> tick</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> Date.</span><span style="color:#B392F0">now</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> log</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">v</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`${</span><span style="color:#E1E4E8">v</span><span style="color:#9ECBFF">} </span><span style="color:#79B8FF">\\n</span><span style="color:#9ECBFF"> Elapsed: ${</span><span style="color:#E1E4E8">Date</span><span style="color:#9ECBFF">.</span><span style="color:#B392F0">now</span><span style="color:#9ECBFF">() </span><span style="color:#F97583">-</span><span style="color:#E1E4E8"> tick</span><span style="color:#9ECBFF">}ms`</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#B392F0"> codeBlocker</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#6A737D">\t// Blocking</span></span>\n<span class="line"><span style="color:#6A737D">\t// let i = 0;</span></span>\n<span class="line"><span style="color:#6A737D">\t// while(i &#x3C; 1000000000) { i++;}</span></span>\n<span class="line"><span style="color:#6A737D">\t// return \'🐷 billion loops done\';</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D">\t// Async blocking</span></span>\n<span class="line"><span style="color:#6A737D">\t// return new Promise((resolve, reject) => {</span></span>\n<span class="line"><span style="color:#6A737D">\t// let i = 0;</span></span>\n<span class="line"><span style="color:#6A737D">\t// while(i &#x3C; 1000000000) { i++;}</span></span>\n<span class="line"><span style="color:#6A737D">\t// resolve(\'🐷 billion loops done\');</span></span>\n<span class="line"><span style="color:#6A737D">\t// })</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D">\t// Non-blocking</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#79B8FF"> Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">resolve</span><span style="color:#E1E4E8">().</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">v</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">\t\tlet</span><span style="color:#E1E4E8"> i </span><span style="color:#F97583">=</span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">\t\twhile</span><span style="color:#E1E4E8"> (i </span><span style="color:#F97583">&#x3C;</span><span style="color:#79B8FF"> 1000000000</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\ti</span><span style="color:#F97583">++</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t}</span></span>\n<span class="line"><span style="color:#F97583">\t\treturn</span><span style="color:#E1E4E8"> 🐷 billion loops done;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t});</span></span>\n<span class="line"><span style="color:#E1E4E8">};</span></span>\n<span class="line"><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(🥪 Synchronous </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#B392F0">codeBlocker</span><span style="color:#E1E4E8">().</span><span style="color:#B392F0">then</span><span style="color:#E1E4E8">(log);</span></span>\n<span class="line"><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(🥪 Synchronous </span><span style="color:#79B8FF">2</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"></span></code></pre>\n<h3 id="promisereject"><code>Promise.reject()</code><a class="anchor" href="#promisereject"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>Promise.reject()</code>方法的参数，会原封不动地作为<code>reject</code>的理由，变成后续方法的参数</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> thenable</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\tthen</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">resolve</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">reject</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#B392F0">\t\treject</span><span style="color:#E1E4E8">(出错了);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t},</span></span>\n<span class="line"><span style="color:#E1E4E8">};</span></span>\n<span class="line"><span style="color:#79B8FF">Promise</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">reject</span><span style="color:#E1E4E8">(thenable).</span><span style="color:#B392F0">catch</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">e</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(e </span><span style="color:#F97583">===</span><span style="color:#E1E4E8"> thenable);</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#6A737D">// true</span></span>\n<span class="line"></span></code></pre>\n<h2 id="promise-chaining-链式调用"><a href="promise-chaining-%E9%93%BE%E5%BC%8F%E8%B0%83%E7%94%A8">Promise Chaining-链式调用</a><a class="anchor" href="#promise-chaining-链式调用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="promise-composition-组合调用"><a href="promise-composition-%E7%BB%84%E5%90%88%E8%B0%83%E7%94%A8">Promise Composition-组合调用</a><a class="anchor" href="#promise-composition-组合调用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>⭐<a href="https://juejin.cn/post/7020335414980378655">通俗易懂的 Promise 知识点总结，检验一下你是否真的完全掌握了 Promise？ - 掘金</a>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise">Promise - JavaScript | MDN</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises">Using Promises - JavaScript | MDN</a></li>\n</ul>\n</li>\n<li>[你好，JavaScript 异步编程---- 理解 JavaScript 异步的美妙](<a href="https://juejin.cn/post/6844903648162480142">https://juejin.cn/post/6844903648162480142</a> <a href="https://juejin.cn/post/6844903648162480142">https://juejin.cn/post/6844903648162480142</a>)</li>\n<li>[Promise 不会？？看这里！！！史上最通俗易懂的 Promise！！！](<a href="https://juejin.cn/post/6844903607968481287">https://juejin.cn/post/6844903607968481287</a> <a href="https://juejin.cn/post/6844903607968481287">https://juejin.cn/post/6844903607968481287</a>)</li>\n<li>[当 async/await 遇上 forEach](<a href="https://link.juejin.cn?target=https%3A%2F%2Fobjcer.com%2F2017%2F10%2F12%2Fasync-await-with-forEach%2F">https://link.juejin.cn?target=https%3A%2F%2Fobjcer.com%2F2017%2F10%2F12%2Fasync-await-with-forEach%2F</a> <a href="https://objcer.com/2017/10/12/async-await-with-forEach/">https://objcer.com/2017/10/12/async-await-with-forEach/</a>)</li>\n<li>[Promise 必知必会（十道题）](<a href="https://juejin.cn/post/6844903509934997511">https://juejin.cn/post/6844903509934997511</a> <a href="https://juejin.cn/post/6844903509934997511">https://juejin.cn/post/6844903509934997511</a>)</li>\n</ul>\n<h3 id="write-a-promise">Write a Promise<a class="anchor" href="#write-a-promise"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>⭐<a href="https://promisesaplus.com/">Promises/A+</a>\n<ul>\n<li>🛠️<a href="https://promisesaplus.com/implementations">Conformant Promises/A+ Implementations</a></li>\n<li>🛠️<a href="https://github.com/promises-aplus">Promises/A+ · GitHub</a></li>\n</ul>\n</li>\n<li>🚀<a href="https://juejin.cn/post/7274887531271012388#heading-13">手写 Promise：实现符合 Promises/A+规范的 Promise - 掘金</a></li>\n<li>🚀<a href="https://www.bilibili.com/video/BV1RR4y1p7my/?vd_source=be278a4cfd00a5f72dcf153eaca79333">手写 Promise 核心代码 - JavaScript 前端 Web 工程师_哔哩哔哩_bilibili</a>\n<ul>\n<li><a href="https://juejin.cn/post/7043758954496655397#heading-14">手把手一行一行代码教你“手写 Promise“，完美通过 Promises/A+ 官方 872 个测试用例 - 掘金</a></li>\n</ul>\n</li>\n<li>[Promise 实现原理（附源码）](<a href="https://juejin.cn/post/6844903665686282253">https://juejin.cn/post/6844903665686282253</a> <a href="https://juejin.cn/post/6844903665686282253">https://juejin.cn/post/6844903665686282253</a>)</li>\n<li>[100 行代码实现 Promises/A+ 规范](<a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FqdJ0Xd8zTgtetFdlJL3P1g">https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FqdJ0Xd8zTgtetFdlJL3P1g</a> <a href="https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g">https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g</a>)</li>\n<li>[一起学习造轮子（一）：从零开始写一个符合 Promises/A+规范的 promise](<a href="https://juejin.cn/post/6844903617619558408#heading-34">https://juejin.cn/post/6844903617619558408#heading-34</a> <a href="https://juejin.cn/post/6844903617619558408#heading-34">https://juejin.cn/post/6844903617619558408#heading-34</a>)</li>\n<li>[BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](<a href="https://juejin.cn/post/6844903625769091079#heading-9">https://juejin.cn/post/6844903625769091079#heading-9</a> <a href="https://juejin.cn/post/6844903625769091079#heading-9">https://juejin.cn/post/6844903625769091079#heading-9</a>)</li>\n</ul>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["Promise"],type:"D",title:"Promise",DateStarted:"2022-12-09T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,topic:["Async"],tags:["JavaScript"],category:"Programming",draft:!0,"linter-yaml-title-alias":"Promise",minutes:7,words:1468},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/data-fetching/promise.md",url=void 0;function rawContent(){return"\n# Promise\n\n## What is a Promise?\n\nPromise 是一种在 JavaScript 中用于处理异步操作的编程模式。它表示一个尚未完成但预计在未来某个时刻完成的操作的结果。Promise 允许我们以更简洁、易读的方式处理异步操作，避免了传统的回调地狱（callback hell）问题。\n\n- A promise is a returned **object** to which you attach callbacks, instead of passing callbacks into a function.\n- It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.\n\n### Promise 3 种状态\n\n- **pending**: initial state, neither fulfilled nor rejected.\n- **fulfilled** (resolved): meaning that the operation was completed successfully.\n- **rejected**: meaning that the operation failed\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-PromiseState-1.png) ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-PromiseState.png)\n\n### Promise 核心特点\n\n1. ? Promise 对象是不可变的，一旦创建，其状态就不能再被改变。\n2. Promise 状态只能从 pending 变为 fulfilled 或 rejected，不能逆向改变，且只能改变一次。\n3. Promise 允许我们将成功和失败的处理函数分开，增加代码的可读性。\n\n### Promise 缺点\n\n1. 无法取消：一旦创建了 Promise，就无法取消它。这可能导致在某些情况下，不再需要结果的异步操作仍然在执行。\n2. 总是异步：Promise 的回调总是异步执行，即使操作已经完成。这可能会导致一些意外的行为，特别是在执行顺序敏感的情况下。\n3. 调试困难：由于 Promise 的链式调用和异步特性，调试 Promise 可能比调试同步代码更具挑战性。错误堆栈可能不够清晰，难以确定问题出在哪里。\n\n### 执行特点\n\n- Promise 只以`第一次为准`，第一次成功就`永久`为`fulfilled`，第一次失败就永远状态为`rejected`\n- Promise 中有 `throw` 的话，就相当于执行了`reject`\n\n```js\nlet p1 = new Promise((resolve, reject) => {\n\tresolve(成功);\n\treject(失败);\n});\nconsole.log(p1, p1);\n\nlet p2 = new Promise((resolve, reject) => {\n\treject(失败);\n\tresolve(成功);\n});\nconsole.log(p2, p2);\n\nlet p3 = new Promise((resolve, reject) => {\n\tthrow 报错;\n});\nconsole.log(p3, p3);\n```\n\n### Pending State 特点\n\n- Promise 里没有执行`resolve`、`reject`以及`throw`的话，这个 promise 的状态也是`pending`\n- `pending`状态下的 promise 不会执行回调函数`then()`\n\n```js\nlet myPromise1 = new Promise(() => {});\nconsole.log(myPromise1 :>> , myPromise1);\nlet myPromise2 = new Promise((resolve, reject) => {\n\tlet a = 1;\n\tfor (let index = 0; index < 5; index++) {\n\t\ta++;\n\t}\n});\nconsole.log(myPromise2 :>> , myPromise2);\nmyPromise2.then(() => {\n\tconsole.log(myPromise2执行了then); // 在 Promise pending 状态下不会执行\n});\n```\n\n## 常见用法\n\n1. 创建 Promise 对象：通过`new Promise(executor)`创建一个 Promise 对象，其中 executor 是一个执行器函数，接受两个参数：resolve 和 reject。成功时调用 resolve 函数并传递结果，失败时调用 reject 函数并传递原因。\n2. 链式调用：通过`.then()`方法处理 fulfilled 状态，接受一个回调函数作为参数，当 Promise 状态变为 fulfilled 时调用。`.catch()`方法处理 rejected 状态，接受一个回调函数作为参数，当 Promise 状态变为 rejected 时调用。\n3. Promise.all：接受一个 Promise 数组作为参数，当所有 Promise 都变为 fulfilled 状态时返回一个新的 Promise，其值为所有 Promise 结果的数组。如果有任意一个 Promise 变为 rejected 状态，则返回的 Promise 也变为 rejected，且返回原因是第一个 rejected 的 Promise 的原因。\n4. Promise.race：接受一个 Promise 数组作为参数，返回一个新的 Promise，其状态和结果与第一个完成（无论是 fulfilled 还是 rejected）的 Promise 相同。\n\n## Create a Promise\n\n### `new Promise()`\n\n#### 参数要求\n\n- 使用 `new Promise()` 必须输入一个执行函数，否则会报错\n\n```js\nlet myPromise0 = new Promise();\nconsole.log(myPromise0 :>> , myPromise0); // 报错：TypeError: Promise resolver undefined\n```\n\n##### Case\n\n```js\nfunction makeRequest(location) {\n\treturn new Promise((resolve, reject) => {\n\t\tconsole.log(`Making Request to ${location}`);\n\t\tif (location === Google) {\n\t\t\tresolve(Google says Hi);\n\t\t} else {\n\t\t\treject(We can only talk to Google);\n\t\t}\n\t});\n}\n```\n\n#### ⭐ 执行顺序\n\n- Promise 构造函数是同步执行的，`promise.then`  中的函数是异步执行的\n\n##### Case\n\n```js\nconst promise = new Promise((resolve, reject) => {\n\tconsole.log(1);\n\tresolve();\n\tconsole.log(2);\n});\npromise.then(() => {\n\tconsole.log(3);\n});\nconsole.log(4);\n```\n\n##### Output\n\n```shell\n1\n2\n4\n3\n```\n\n### `Promise.resolve()`\n\n将现有对象转为 Promise 对象\n\n```js\nPromise.resolve(foo);\n// 等价于\nnew Promise((resolve) => resolve(foo));\n```\n\n#### 参数的四种情况\n\n1. 如果参数是 `Promise` 实例\n   - 那么 `Promise.resolve()` 将不做任何修改、原封不动地返回这个实例。\n2. 参数是一个 thenable (具有`then`方法的对象) 对象\n   - 会将这个对象转为 `Promise` 对象，然后就立即执行 thenable 对象的 `then`方法\n3. 参数是一个原始值，或者是一个不具有`then`方法的对象\n   - 则`Promise.resolve`方法返回一个新的  `Promise`  对象，状态为`resolved`\n4. `Promise.resolve()`方法允许调用时不带参数\n   - 直接返回一个 `resolved`状态的 `Promise` 对象。\n\n#### Example\n\n```js\nconst tick = Date.now();\nconst log = (v) => console.log(`${v} \\n Elapsed: ${Date.now() - tick}ms`);\nconst codeBlocker = () => {\n\t// Blocking\n\t// let i = 0;\n\t// while(i < 1000000000) { i++;}\n\t// return '🐷 billion loops done';\n\n\t// Async blocking\n\t// return new Promise((resolve, reject) => {\n\t// let i = 0;\n\t// while(i < 1000000000) { i++;}\n\t// resolve('🐷 billion loops done');\n\t// })\n\n\t// Non-blocking\n\treturn Promise.resolve().then((v) => {\n\t\tlet i = 0;\n\t\twhile (i < 1000000000) {\n\t\t\ti++;\n\t\t}\n\t\treturn 🐷 billion loops done;\n\t});\n};\nlog(🥪 Synchronous 1);\ncodeBlocker().then(log);\nlog(🥪 Synchronous 2);\n```\n\n### `Promise.reject()`\n\n- `Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数\n\n```js\nconst thenable = {\n\tthen(resolve, reject) {\n\t\treject(出错了);\n\t},\n};\nPromise.reject(thenable).catch((e) => {\n\tconsole.log(e === thenable);\n});\n// true\n```\n\n## [Promise Chaining-链式调用](promise-chaining-链式调用)\n\n## [Promise Composition-组合调用](promise-composition-组合调用)\n\n## Reference\n\n- ⭐[通俗易懂的 Promise 知识点总结，检验一下你是否真的完全掌握了 Promise？ - 掘金](https://juejin.cn/post/7020335414980378655)\n  - [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\n  - [Using Promises - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)\n- [你好，JavaScript 异步编程---- 理解 JavaScript 异步的美妙](https://juejin.cn/post/6844903648162480142 https://juejin.cn/post/6844903648162480142)\n- [Promise 不会？？看这里！！！史上最通俗易懂的 Promise！！！](https://juejin.cn/post/6844903607968481287 https://juejin.cn/post/6844903607968481287)\n- [当 async/await 遇上 forEach](https://link.juejin.cn?target=https%3A%2F%2Fobjcer.com%2F2017%2F10%2F12%2Fasync-await-with-forEach%2F https://objcer.com/2017/10/12/async-await-with-forEach/)\n- [Promise 必知必会（十道题）](https://juejin.cn/post/6844903509934997511 https://juejin.cn/post/6844903509934997511)\n\n### Write a Promise\n\n- ⭐[Promises/A+](https://promisesaplus.com/)\n  - 🛠️[Conformant Promises/A+ Implementations](https://promisesaplus.com/implementations)\n  - 🛠️[Promises/A+ · GitHub](https://github.com/promises-aplus)\n- 🚀[手写 Promise：实现符合 Promises/A+规范的 Promise - 掘金](https://juejin.cn/post/7274887531271012388#heading-13)\n- 🚀[手写 Promise 核心代码 - JavaScript 前端 Web 工程师\\_哔哩哔哩\\_bilibili](https://www.bilibili.com/video/BV1RR4y1p7my/?vd_source=be278a4cfd00a5f72dcf153eaca79333)\n  - [手把手一行一行代码教你“手写 Promise“，完美通过 Promises/A+ 官方 872 个测试用例 - 掘金](https://juejin.cn/post/7043758954496655397#heading-14)\n- [Promise 实现原理（附源码）](https://juejin.cn/post/6844903665686282253 https://juejin.cn/post/6844903665686282253)\n- [100 行代码实现 Promises/A+ 规范](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FqdJ0Xd8zTgtetFdlJL3P1g https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)\n- [一起学习造轮子（一）：从零开始写一个符合 Promises/A+规范的 promise](https://juejin.cn/post/6844903617619558408#heading-34 https://juejin.cn/post/6844903617619558408#heading-34)\n- [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.cn/post/6844903625769091079#heading-9 https://juejin.cn/post/6844903625769091079#heading-9)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"promise",text:"Promise#"},{depth:2,slug:"what-is-a-promise",text:"What is a Promise?#"},{depth:3,slug:"promise-3-种状态",text:"Promise 3 种状态#"},{depth:3,slug:"promise-核心特点",text:"Promise 核心特点#"},{depth:3,slug:"promise-缺点",text:"Promise 缺点#"},{depth:3,slug:"执行特点",text:"执行特点#"},{depth:3,slug:"pending-state-特点",text:"Pending State 特点#"},{depth:2,slug:"常见用法",text:"常见用法#"},{depth:2,slug:"create-a-promise",text:"Create a Promise#"},{depth:3,slug:"new-promise",text:"new Promise()#"},{depth:4,slug:"参数要求",text:"参数要求#"},{depth:5,slug:"case",text:"Case#"},{depth:4,slug:"-执行顺序",text:"⭐ 执行顺序#"},{depth:5,slug:"case-1",text:"Case#"},{depth:5,slug:"output",text:"Output#"},{depth:3,slug:"promiseresolve",text:"Promise.resolve()#"},{depth:4,slug:"参数的四种情况",text:"参数的四种情况#"},{depth:4,slug:"example",text:"Example#"},{depth:3,slug:"promisereject",text:"Promise.reject()#"},{depth:2,slug:"promise-chaining-链式调用",text:"Promise Chaining-链式调用#"},{depth:2,slug:"promise-composition-组合调用",text:"Promise Composition-组合调用#"},{depth:2,slug:"reference",text:"Reference#"},{depth:3,slug:"write-a-promise",text:"Write a Promise#"}]}const Content=createComponent(((s,n,e)=>{const{layout:o,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};