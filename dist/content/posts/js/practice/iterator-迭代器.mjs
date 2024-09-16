import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="js/practice/iterator-迭代器.md",collection="posts",slug="js/practice/iterator-迭代器",body="\n# Iterator 迭代器\n\n## 迭代定义 (Iteration)\n\n- 最简单的迭代\n  - 计数循环\n    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691564604297.png)\n- 循环是迭代机制的基础\n  - 因为它可以指定迭代的次数，以及每次迭代要执行什么操作\n- 在一个有序集合上进行\n  - 数组\n  - ES5 新增了 Array.prototype.forEach()\n    - 没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙\n\n## 迭代器模式 (The Iterator Pattern)\n\n- JavaScript 在 ECMAScript 6 以后也支持了迭代器模式\n- 开发者无须事先知道如何迭代就能实现 迭代操作\n\n## 可迭代对象/接口（Iterable）\n\n- 它们实现了正式的 Iterable 接口\n- 可以通过迭代器 Iterator 消费\n- 可迭代协议 (Iterable Protocol)\n  - 要求同时具备两种能力\n    - 支持迭代的自我识别能力\n      - 必须暴露一个属性作为“默认迭代器”\n      - 检查是否存在默认迭代器属性可以暴露这个工厂函数\n        - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691565228166.png)\n    - 创建实现 Iterator 接口的对象的能力\n      - 默认迭代器属性必须引用一个迭代器工厂函数\n      - 这个属性必须使用特殊的 `Symbol.iterator` 作为键\n      - 调用这个工厂函数必须返回一个新迭代器\n- 接收可迭代对象的原生语言特性\n  - for-of 循环\n  - 数组解构\n  - 扩展操作符\n  - Array.from()\n  - 创建集合 Set\n  - 创建映射 Map\n  - Promise.all()接收由期约组成的可迭代对象\n  - Promise.race()接收由期约组成的可迭代对象\n  - `yield*`操作符，在生成器中使用\n  - 这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：\n\n## 迭代器 (Iterator)\n\n- 概念\n  - 通用的迭代\n  - 接口\n  - 正式的迭代器类型\n  - 是**按需创建的一次性对象**\n- 显示迭代器与原生迭代器的实现 - 类实现显示迭代器\n  \x3c!--SR:!2023-08-16,3,250--\x3e\n\n```js\nclass Foo {\n\t[Symbol.iterator]() {\n\treturn {\n\t\tnext() {\n\t\t\treturn { done: false, value: 'foo' };\n\t\t}\n\t} \n\t} \n}\nlet f = new Foo(); // 打印出实现了迭代器接口的对象 console.log(f[Symbol.iterator]()); // { next: f() {} }\n```\n\n- Array 类型的原生迭代器\n\n```js\n\tlet a = new Array(); // 打印出 ArrayIterator 的实例 console.log(a[Symbol.iterator]()); // Array Iterator {}\n```\n\n- 迭代器协议 (Iterator Protocol)\n  - 特点\n    - 每个迭代器都会关联一个可迭代对象\n    - 迭代器会暴露迭代其关联可迭代对象的 API\n    - 迭代器无须了解与其关联的可迭代对象 (Iterable) 的结构，只需要知道如何取得连续的值\n      - 这种概念上的分离正是 Iterable 和 Iterator 的强大之处\n    - 每个迭代器都表示**对可迭代对象的一次性有序遍历**\n  - next()方法\n    - 返回 **迭代器对象 IteratorResult**\n      - 包含两个属性\n        - **done**\n          - 是一个布尔值，表示是否还可以再次调用 next()取得下一个值\n          - done: true 状态称为“耗尽”\n        - **value**\n          - 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）\n  - 案例\n    - // 可迭代对象\n      - `let arr = ['foo', 'bar'];`\n    - // 迭代器工厂函数\n      - `console.log(arr[Symbol.iterator]); // f values() { [native code] }`\n    - // 迭代器对象\n      - `let iter = arr[Symbol.iterator](); console.log(iter); // ArrayIterator {}`\n    - // 执行迭代\n      - `console.log(iter.next()); // { done: false, value: 'foo' } console.log(iter.next()); // { done: false, value: 'bar' } console.log(iter.next()); // { done: true, value: undefined }`\n- 自定义迭代器-Custom Iterator Definition\n  - 任何实现 Iterator 接口的对象都可以作为迭代器\n- 提前终止迭代器-Early Termination of Iterators - 可选的 return()方法 - 用于指定在迭代器提前关闭时执行的逻辑 - 执行迭代的结构在想让迭代器知 道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器 - 必须返回一个有效的 IteratorResult 对象  \n- for-of 循环通过 break、continue、return 或 throw 提前退出 - 解构操作并未消费所有值 - 并非所有迭代器都是可关闭的 - 要知道某个迭代器是否可关闭 - 可以测试这个迭代器实例的 return 属性是不是函数对象\n",data={title:"Iterator 迭代器",DateStarted:new Date(16918848e5),draft:!0,tags:["JavaScript"],category:"Programming"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/practice/iterator-迭代器.md",rawData:void 0},html='<h1 id="iterator-迭代器">Iterator 迭代器<a class="anchor" href="#iterator-迭代器"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="迭代定义-iteration">迭代定义 (Iteration)<a class="anchor" href="#迭代定义-iteration"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>最简单的迭代\n<ul>\n<li>计数循环\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691564604297.png" alt=""></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>循环是迭代机制的基础\n<ul>\n<li>因为它可以指定迭代的次数，以及每次迭代要执行什么操作</li>\n</ul>\n</li>\n<li>在一个有序集合上进行\n<ul>\n<li>数组</li>\n<li>ES5 新增了 Array.prototype.forEach()\n<ul>\n<li>没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="迭代器模式-the-iterator-pattern">迭代器模式 (The Iterator Pattern)<a class="anchor" href="#迭代器模式-the-iterator-pattern"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>JavaScript 在 ECMAScript 6 以后也支持了迭代器模式</li>\n<li>开发者无须事先知道如何迭代就能实现 迭代操作</li>\n</ul>\n<h2 id="可迭代对象接口iterable">可迭代对象/接口（Iterable）<a class="anchor" href="#可迭代对象接口iterable"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>它们实现了正式的 Iterable 接口</li>\n<li>可以通过迭代器 Iterator 消费</li>\n<li>可迭代协议 (Iterable Protocol)\n<ul>\n<li>要求同时具备两种能力\n<ul>\n<li>支持迭代的自我识别能力\n<ul>\n<li>必须暴露一个属性作为“默认迭代器”</li>\n<li>检查是否存在默认迭代器属性可以暴露这个工厂函数\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691565228166.png" alt=""></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>创建实现 Iterator 接口的对象的能力\n<ul>\n<li>默认迭代器属性必须引用一个迭代器工厂函数</li>\n<li>这个属性必须使用特殊的 <code>Symbol.iterator</code> 作为键</li>\n<li>调用这个工厂函数必须返回一个新迭代器</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>接收可迭代对象的原生语言特性\n<ul>\n<li>for-of 循环</li>\n<li>数组解构</li>\n<li>扩展操作符</li>\n<li>Array.from()</li>\n<li>创建集合 Set</li>\n<li>创建映射 Map</li>\n<li>Promise.all()接收由期约组成的可迭代对象</li>\n<li>Promise.race()接收由期约组成的可迭代对象</li>\n<li><code>yield*</code>操作符，在生成器中使用</li>\n<li>这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：</li>\n</ul>\n</li>\n</ul>\n<h2 id="迭代器-iterator">迭代器 (Iterator)<a class="anchor" href="#迭代器-iterator"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>概念\n<ul>\n<li>通用的迭代</li>\n<li>接口</li>\n<li>正式的迭代器类型</li>\n<li>是<strong>按需创建的一次性对象</strong></li>\n</ul>\n</li>\n<li>显示迭代器与原生迭代器的实现 - 类实现显示迭代器\n\x3c!--SR:!2023-08-16,3,250--\x3e\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> Foo</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t[Symbol.iterator]() {</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#B392F0">\t\tnext</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#F97583">\t\t\treturn</span><span style="color:#E1E4E8"> { done: </span><span style="color:#79B8FF">false</span><span style="color:#E1E4E8">, value: </span><span style="color:#9ECBFF">\'foo\'</span><span style="color:#E1E4E8"> };</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">\t} </span></span>\n<span class="line"><span style="color:#E1E4E8">\t} </span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> f </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Foo</span><span style="color:#E1E4E8">(); </span><span style="color:#6A737D">// 打印出实现了迭代器接口的对象 console.log(f[Symbol.iterator]()); // { next: f() {} }</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>Array 类型的原生迭代器</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">\tlet</span><span style="color:#E1E4E8"> a </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Array</span><span style="color:#E1E4E8">(); </span><span style="color:#6A737D">// 打印出 ArrayIterator 的实例 console.log(a[Symbol.iterator]()); // Array Iterator {}</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>迭代器协议 (Iterator Protocol)\n<ul>\n<li>特点\n<ul>\n<li>每个迭代器都会关联一个可迭代对象</li>\n<li>迭代器会暴露迭代其关联可迭代对象的 API</li>\n<li>迭代器无须了解与其关联的可迭代对象 (Iterable) 的结构，只需要知道如何取得连续的值\n<ul>\n<li>这种概念上的分离正是 Iterable 和 Iterator 的强大之处</li>\n</ul>\n</li>\n<li>每个迭代器都表示<strong>对可迭代对象的一次性有序遍历</strong></li>\n</ul>\n</li>\n<li>next()方法\n<ul>\n<li>返回 <strong>迭代器对象 IteratorResult</strong>\n<ul>\n<li>包含两个属性\n<ul>\n<li><strong>done</strong>\n<ul>\n<li>是一个布尔值，表示是否还可以再次调用 next()取得下一个值</li>\n<li>done: true 状态称为“耗尽”</li>\n</ul>\n</li>\n<li><strong>value</strong>\n<ul>\n<li>包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>案例\n<ul>\n<li>// 可迭代对象\n<ul>\n<li><code>let arr = [\'foo\', \'bar\'];</code></li>\n</ul>\n</li>\n<li>// 迭代器工厂函数\n<ul>\n<li><code>console.log(arr[Symbol.iterator]); // f values() { [native code] }</code></li>\n</ul>\n</li>\n<li>// 迭代器对象\n<ul>\n<li><code>let iter = arr[Symbol.iterator](); console.log(iter); // ArrayIterator {}</code></li>\n</ul>\n</li>\n<li>// 执行迭代\n<ul>\n<li><code>console.log(iter.next()); // { done: false, value: \'foo\' } console.log(iter.next()); // { done: false, value: \'bar\' } console.log(iter.next()); // { done: true, value: undefined }</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>自定义迭代器-Custom Iterator Definition\n<ul>\n<li>任何实现 Iterator 接口的对象都可以作为迭代器</li>\n</ul>\n</li>\n<li>提前终止迭代器-Early Termination of Iterators - 可选的 return()方法 - 用于指定在迭代器提前关闭时执行的逻辑 - 执行迭代的结构在想让迭代器知 道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器 - 必须返回一个有效的 IteratorResult 对象</li>\n<li>for-of 循环通过 break、continue、return 或 throw 提前退出 - 解构操作并未消费所有值 - 并非所有迭代器都是可关闭的 - 要知道某个迭代器是否可关闭 - 可以测试这个迭代器实例的 return 属性是不是函数对象</li>\n</ul>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"Iterator 迭代器",type:"D",DateStarted:"2023-08-13T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",status:["Young"],aliases:["Iterator 迭代器","Iterator","迭代器"],topic:["Practice"],tags:["JavaScript"],category:"Programming",draft:!0,"linter-yaml-title-alias":"Iterator 迭代器",minutes:5,words:994},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/practice/iterator-迭代器.md",url=void 0;function rawContent(){return"\n# Iterator 迭代器\n\n## 迭代定义 (Iteration)\n\n- 最简单的迭代\n  - 计数循环\n    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691564604297.png)\n- 循环是迭代机制的基础\n  - 因为它可以指定迭代的次数，以及每次迭代要执行什么操作\n- 在一个有序集合上进行\n  - 数组\n  - ES5 新增了 Array.prototype.forEach()\n    - 没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙\n\n## 迭代器模式 (The Iterator Pattern)\n\n- JavaScript 在 ECMAScript 6 以后也支持了迭代器模式\n- 开发者无须事先知道如何迭代就能实现 迭代操作\n\n## 可迭代对象/接口（Iterable）\n\n- 它们实现了正式的 Iterable 接口\n- 可以通过迭代器 Iterator 消费\n- 可迭代协议 (Iterable Protocol)\n  - 要求同时具备两种能力\n    - 支持迭代的自我识别能力\n      - 必须暴露一个属性作为“默认迭代器”\n      - 检查是否存在默认迭代器属性可以暴露这个工厂函数\n        - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691565228166.png)\n    - 创建实现 Iterator 接口的对象的能力\n      - 默认迭代器属性必须引用一个迭代器工厂函数\n      - 这个属性必须使用特殊的 `Symbol.iterator` 作为键\n      - 调用这个工厂函数必须返回一个新迭代器\n- 接收可迭代对象的原生语言特性\n  - for-of 循环\n  - 数组解构\n  - 扩展操作符\n  - Array.from()\n  - 创建集合 Set\n  - 创建映射 Map\n  - Promise.all()接收由期约组成的可迭代对象\n  - Promise.race()接收由期约组成的可迭代对象\n  - `yield*`操作符，在生成器中使用\n  - 这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：\n\n## 迭代器 (Iterator)\n\n- 概念\n  - 通用的迭代\n  - 接口\n  - 正式的迭代器类型\n  - 是**按需创建的一次性对象**\n- 显示迭代器与原生迭代器的实现 - 类实现显示迭代器\n  \x3c!--SR:!2023-08-16,3,250--\x3e\n\n```js\nclass Foo {\n\t[Symbol.iterator]() {\n\treturn {\n\t\tnext() {\n\t\t\treturn { done: false, value: 'foo' };\n\t\t}\n\t} \n\t} \n}\nlet f = new Foo(); // 打印出实现了迭代器接口的对象 console.log(f[Symbol.iterator]()); // { next: f() {} }\n```\n\n- Array 类型的原生迭代器\n\n```js\n\tlet a = new Array(); // 打印出 ArrayIterator 的实例 console.log(a[Symbol.iterator]()); // Array Iterator {}\n```\n\n- 迭代器协议 (Iterator Protocol)\n  - 特点\n    - 每个迭代器都会关联一个可迭代对象\n    - 迭代器会暴露迭代其关联可迭代对象的 API\n    - 迭代器无须了解与其关联的可迭代对象 (Iterable) 的结构，只需要知道如何取得连续的值\n      - 这种概念上的分离正是 Iterable 和 Iterator 的强大之处\n    - 每个迭代器都表示**对可迭代对象的一次性有序遍历**\n  - next()方法\n    - 返回 **迭代器对象 IteratorResult**\n      - 包含两个属性\n        - **done**\n          - 是一个布尔值，表示是否还可以再次调用 next()取得下一个值\n          - done: true 状态称为“耗尽”\n        - **value**\n          - 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）\n  - 案例\n    - // 可迭代对象\n      - `let arr = ['foo', 'bar'];`\n    - // 迭代器工厂函数\n      - `console.log(arr[Symbol.iterator]); // f values() { [native code] }`\n    - // 迭代器对象\n      - `let iter = arr[Symbol.iterator](); console.log(iter); // ArrayIterator {}`\n    - // 执行迭代\n      - `console.log(iter.next()); // { done: false, value: 'foo' } console.log(iter.next()); // { done: false, value: 'bar' } console.log(iter.next()); // { done: true, value: undefined }`\n- 自定义迭代器-Custom Iterator Definition\n  - 任何实现 Iterator 接口的对象都可以作为迭代器\n- 提前终止迭代器-Early Termination of Iterators - 可选的 return()方法 - 用于指定在迭代器提前关闭时执行的逻辑 - 执行迭代的结构在想让迭代器知 道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器 - 必须返回一个有效的 IteratorResult 对象  \n- for-of 循环通过 break、continue、return 或 throw 提前退出 - 解构操作并未消费所有值 - 并非所有迭代器都是可关闭的 - 要知道某个迭代器是否可关闭 - 可以测试这个迭代器实例的 return 属性是不是函数对象\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"iterator-迭代器",text:"Iterator 迭代器#"},{depth:2,slug:"迭代定义-iteration",text:"迭代定义 (Iteration)#"},{depth:2,slug:"迭代器模式-the-iterator-pattern",text:"迭代器模式 (The Iterator Pattern)#"},{depth:2,slug:"可迭代对象接口iterable",text:"可迭代对象/接口（Iterable）#"},{depth:2,slug:"迭代器-iterator",text:"迭代器 (Iterator)#"}]}const Content=createComponent(((n,e,t)=>{const{layout:r,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),iterator____=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,iterator____,slug};