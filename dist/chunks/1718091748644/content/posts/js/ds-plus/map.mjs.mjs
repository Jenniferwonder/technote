import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="map">Map<a class="anchor" href="#map"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="创建方式">创建方式<a class="anchor" href="#创建方式"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>构造函数\n<ul>\n<li><code>const m = new Map()</code></li>\n</ul>\n</li>\n<li>构造函数参数（初始化实例）\n<ul>\n<li>嵌套数组</li>\n<li>自定义迭代器 iterator</li>\n<li>空数组</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691557774350.png" alt=""></li>\n<li>在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时 仍然保持不变</li>\n<li>delete()和 clear()</li>\n<li>size 属性</li>\n<li>set()方法再添加键/值对。另外，可以使用 get()和 has()进行查询</li>\n<li>使用严格对象相等的标准来检查键的匹配性</li>\n<li>与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序</li>\n<li>set()方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明</li>\n<li>迭代操作</li>\n<li>alert(m.entries === m[Symbol.iterator]); // true</li>\n<li>Symbol.iterator 属性</li>\n<li>entries()方法</li>\n<li>console.log([…m]); // [key1,val1],[key2,val2],<a href="key1,val1%5D,%5Bkey2,val2%5D,%5Bkey3,val3">key3,val3</a></li>\n<li>forEach(callback, opt_thisArg)</li>\n<li>传入的回调接收可选的第二个参数，这个参数用于重写回调 内部 this 的值</li>\n<li>keys()和 values()</li>\n<li>键和值在迭代器遍历时是可以修改的</li>\n</ul>\n</li>\n</ul>\n<h2 id="选择-object-还是-map">选择 Object 还是 Map<a class="anchor" href="#选择-object-还是-map"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Map 大约可以比 Object 多存储 50%的键/值对</li>\n<li>内存占用</li>\n<li>插入性能</li>\n<li>查找速度</li>\n<li>删除性能</li>\n<li>插入 Map 在所有浏览器中一般会稍微快 一点儿</li>\n<li>如果只包含少量键/值对， 则 Object 有时候速度更快。</li>\n<li>Map 的 delete()操作都比插入和查找更快</li>\n</ul>\n<h3 id="map-与-weakmap-的区别">Map 与 WeakMap 的区别<a class="anchor" href="#map-与-weakmap-的区别"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Map 和 WeakMap 在 JavaScript 中都提供了键值对的存储，但它们的工作方式和底层实现有一些重要的区别。</p>\n<ol>\n<li>键的引用：在 Map 中，键的引用是强引用，也就是说只要 Map 存在，那么它的键值对就会保留在内存中，不会被垃圾收集器回收。而在 WeakMap 中，键的引用是弱引用，也就是说如果没有其他地方引用该键，那么该键就会被垃圾收集器回收，不论该 WeakMap 是否还存在。</li>\n<li>键的类型：在 Map 中，键可以是任何类型，包括原始类型（比如字符串、数字、布尔值）和对象类型。而在 WeakMap 中，键必须是对象。</li>\n<li>迭代器和清除方法：Map 具有诸如 <code>size</code>、<code>clear</code>、<code>keys</code>、<code>values</code> 和 <code>entries</code> 等方法，允许开发者获取大小，清除所有键值对，或者迭代所有的键或值。然而，由于 WeakMap 的键是弱引用，为了防止在垃圾回收过程中可能引发的并发问题，WeakMap 没有这些方法。</li>\n<li>底层实现：JavaScript 本身是高级语言，其具体实现取决于底层的 JavaScript 引擎，如 V8 或 SpiderMonkey。在一般情况下，Map 可以使用简单的哈希表来实现。对于 WeakMap，由于其键是弱引用，因此在内存管理方面需要更加复杂的处理。这些处理通常在引擎级别完成，而不是在 JavaScript 代码级别。</li>\n</ol>\n<p>以上这些区别使得 Map 和 WeakMap 有各自适用的情况。比如，当你需要存储的键值对在某个时间点之后不再需要时，使用 WeakMap 可以防止内存泄漏。而当你需要完全控制何时删除键值对时，使用 Map 更为合适。</p>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["Map"],title:"Map",type:"D",DateStarted:"2023-07-29T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:"Snooze",pages:6,Up:[["C06-Collection Reference Type-集合引用类型"]],Pomo:1,topic:["DS+"],category:"Programming",tags:["JavaScript"],draft:!0,"linter-yaml-title-alias":"Map",minutes:4,words:788},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/ds-plus/map.md",url=void 0;function rawContent(){return"\n# Map\n\n## 创建方式\n\n- 构造函数\n  - `const m = new Map()`\n- 构造函数参数（初始化实例）\n  - 嵌套数组\n  - 自定义迭代器 iterator\n  - 空数组\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691557774350.png)\n  - 在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时 仍然保持不变\n  - delete()和 clear()\n  - size 属性\n  - set()方法再添加键/值对。另外，可以使用 get()和 has()进行查询\n  - 使用严格对象相等的标准来检查键的匹配性\n  - 与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序\n  - set()方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明\n  - 迭代操作\n  - alert(m.entries === m[Symbol.iterator]); // true\n  - Symbol.iterator 属性\n  - entries()方法\n  - console.log([...m]); // [key1,val1],[key2,val2],[key3,val3](key1,val1],[key2,val2],[key3,val3)\n  - forEach(callback, opt_thisArg)\n  - 传入的回调接收可选的第二个参数，这个参数用于重写回调 内部 this 的值\n  - keys()和 values()\n  - 键和值在迭代器遍历时是可以修改的\n\n## 选择 Object 还是 Map\n\n- Map 大约可以比 Object 多存储 50%的键/值对\n- 内存占用\n- 插入性能\n- 查找速度\n- 删除性能\n- 插入 Map 在所有浏览器中一般会稍微快 一点儿\n- 如果只包含少量键/值对， 则 Object 有时候速度更快。\n- Map 的 delete()操作都比插入和查找更快\n\n### Map 与 WeakMap 的区别\n\nMap 和 WeakMap 在 JavaScript 中都提供了键值对的存储，但它们的工作方式和底层实现有一些重要的区别。\n\n1. 键的引用：在 Map 中，键的引用是强引用，也就是说只要 Map 存在，那么它的键值对就会保留在内存中，不会被垃圾收集器回收。而在 WeakMap 中，键的引用是弱引用，也就是说如果没有其他地方引用该键，那么该键就会被垃圾收集器回收，不论该 WeakMap 是否还存在。\n2. 键的类型：在 Map 中，键可以是任何类型，包括原始类型（比如字符串、数字、布尔值）和对象类型。而在 WeakMap 中，键必须是对象。\n3. 迭代器和清除方法：Map 具有诸如 `size`、`clear`、`keys`、`values` 和 `entries` 等方法，允许开发者获取大小，清除所有键值对，或者迭代所有的键或值。然而，由于 WeakMap 的键是弱引用，为了防止在垃圾回收过程中可能引发的并发问题，WeakMap 没有这些方法。\n4. 底层实现：JavaScript 本身是高级语言，其具体实现取决于底层的 JavaScript 引擎，如 V8 或 SpiderMonkey。在一般情况下，Map 可以使用简单的哈希表来实现。对于 WeakMap，由于其键是弱引用，因此在内存管理方面需要更加复杂的处理。这些处理通常在引擎级别完成，而不是在 JavaScript 代码级别。\n\n以上这些区别使得 Map 和 WeakMap 有各自适用的情况。比如，当你需要存储的键值对在某个时间点之后不再需要时，使用 WeakMap 可以防止内存泄漏。而当你需要完全控制何时删除键值对时，使用 Map 更为合适。\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"map",text:"Map#"},{depth:2,slug:"创建方式",text:"创建方式#"},{depth:2,slug:"选择-object-还是-map",text:"选择 Object 还是 Map#"},{depth:3,slug:"map-与-weakmap-的区别",text:"Map 与 WeakMap 的区别#"}]}const Content=createComponent(((e,a,n)=>{const{layout:l,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};