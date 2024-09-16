import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h3 id="参数特点-arguments-parameters">参数特点 (Arguments/ Parameters)<a class="anchor" href="#参数特点-arguments-parameters"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>不关心传入的参数个数，也不关心这些参数的数据类型</li>\n<li>对于命名参数而言，如果调用函数时没有传这个参数，那么它的值就是 <code>undefined</code></li>\n<li>Strict mode\n<ul>\n<li>No named parameter can be named <code>eval</code> or <code>arguments</code>.</li>\n<li>No two named parameters can have the same name.</li>\n</ul>\n</li>\n</ul>\n<hr>\n<p>Basic</p>\n<h3 id="arguments-对象用法"><code>arguments</code> 对象用法<a class="anchor" href="#arguments-对象用法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>功能：反映调用时传给函数的参数</li>\n<li>内部表现为一个数组\n<ul>\n<li>类数组对象（但不是 Array 的实例）\n<ul>\n<li><code>arguments.length</code></li>\n</ul>\n</li>\n<li>可以使用中括号语法访问其中的元素\n<ul>\n<li><code>arguments[0]</code></li>\n</ul>\n</li>\n<li>不声明参数也可以</li>\n<li>可用作 <code>apply()</code> 的第二个参数：<a href="call;-apply;-bind">call; apply; bind</a></li>\n</ul>\n</li>\n<li>箭头函数中没有 <code>arguments</code> 对象<br>\n_ 支持收集参数，可实现类似功能：<a href="../Collect-or-Rest-and-Spread-Function-Arguments-%E6%94%B6%E9%9B%86,-%E5%89%A9%E4%BD%99%E4%B8%8E%E6%89%A9%E5%B1%95%E5%8F%82%E6%95%B0">Collect or Rest and Spread Function Arguments (收集, 剩余与扩展参数)</a><br>\n_ 可以在包装函数中把它提供给箭头函数 * <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691646042322.png" alt=""><br>\n📌: JS::JS-Function<br>\n🏷️: JS-Function</li>\n</ul>\n\x3c!--ID: 1708067341797--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h4 id="argumentscallee-属性"><code>arguments.callee</code> 属性<a class="anchor" href="#argumentscallee-属性"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>Back:</p>\n<ul>\n<li>一个指向 <code>arguments</code> 对象所在函数的指针</li>\n<li>可以让函数逻辑与函数名解耦</li>\n<li>案例：阶乘函数\n<ul>\n<li><code>return num * factorial(num - 1);</code></li>\n<li><code>return num * arguments.callee(num - 1);</code></li>\n</ul>\n</li>\n<li>在严格模式下运行的代码是不能访问 <code>arguments.callee</code><br>\n_ 可使用命名函数表达式（named function expression）<br>\n_ <code>const factorial = (function f(num) {</code><br>\n_ <code>return num _ f(num - 1);</code></li>\n</ul>\n\x3c!--ID: 1708067341809--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="默认参数定义与规则">默认参数定义与规则<a class="anchor" href="#默认参数定义与规则"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>显式定义默认参数 (ES6)\n<ul>\n<li><code>function makeKing(name = \'Henry\') {</code></li>\n</ul>\n</li>\n<li>默认参数会按照定义它们的顺序依次被初始化</li>\n<li>参数初始化顺序遵循“暂时性死区”规则\n<ul>\n<li>前面定义的参数不能引用后面定义的</li>\n<li>后定义默认值的参数可以引用先定义的参数</li>\n</ul>\n</li>\n<li>参数存在于自己的作用域中，不能引用函数体的作用域</li>\n</ul>\n\x3c!--ID: 1708067341816--\x3e\n<hr>\n<h3 id="collect-or-rest-and-spread-function-arguments-收集-剩余与扩展参数"><a href="../Collect-or-Rest-and-Spread-Function-Arguments-%E6%94%B6%E9%9B%86,-%E5%89%A9%E4%BD%99%E4%B8%8E%E6%89%A9%E5%B1%95%E5%8F%82%E6%95%B0">Collect or Rest and Spread Function Arguments (收集, 剩余与扩展参数)</a><a class="anchor" href="#collect-or-rest-and-spread-function-arguments-收集-剩余与扩展参数"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={draft:!1,title:"function-arguments-函数参数",topic:["Function"],type:"D",tags:["JavaScript"],DateStarted:"2024-02-16T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",Datereviewed:"2024-02-16T00:00:00.000Z",reviewed:1,difficulty:null,status:null,comment:null,category:"Programming",minutes:2,words:443},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/function/function-arguments-函数参数.md",url=void 0;function rawContent(){return"\n### 参数特点 (Arguments/ Parameters)\n\n- 不关心传入的参数个数，也不关心这些参数的数据类型\n- 对于命名参数而言，如果调用函数时没有传这个参数，那么它的值就是 `undefined`\n- Strict mode\n  - No named parameter can be named `eval` or `arguments`.\n  - No two named parameters can have the same name.\n\n---\n\nBasic\n\n### `arguments` 对象用法\n\nBack:\n\n- 功能：反映调用时传给函数的参数\n- 内部表现为一个数组\n  - 类数组对象（但不是 Array 的实例）\n    - `arguments.length`\n  - 可以使用中括号语法访问其中的元素\n    - `arguments[0]`\n  - 不声明参数也可以\n  - 可用作 `apply()` 的第二个参数：[call; apply; bind](call;-apply;-bind)\n- 箭头函数中没有 `arguments` 对象  \n_ 支持收集参数，可实现类似功能：[Collect or Rest and Spread Function Arguments (收集, 剩余与扩展参数)](../Collect-or-Rest-and-Spread-Function-Arguments-收集,-剩余与扩展参数)  \n_ 可以在包装函数中把它提供给箭头函数 \\* ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691646042322.png)  \n📌: JS::JS-Function  \n🏷️: JS-Function\n\x3c!--ID: 1708067341797--\x3e\n\n---\n\n---\n\nBasic\n\n#### `arguments.callee` 属性\n\nBack:\n\n- 一个指向 `arguments` 对象所在函数的指针\n- 可以让函数逻辑与函数名解耦\n- 案例：阶乘函数\n  - `return num * factorial(num - 1);`\n  - `return num * arguments.callee(num - 1);`\n- 在严格模式下运行的代码是不能访问 `arguments.callee`  \n_ 可使用命名函数表达式（named function expression）  \n_ `const factorial = (function f(num) {`  \n_ `return num _ f(num - 1);`\n\x3c!--ID: 1708067341809--\x3e\n\n---\n\n---\n\nBasic\n\n### 默认参数定义与规则\n\nBack:\n\n- 显式定义默认参数 (ES6)\n  - `function makeKing(name = 'Henry') {`\n- 默认参数会按照定义它们的顺序依次被初始化\n- 参数初始化顺序遵循“暂时性死区”规则\n  - 前面定义的参数不能引用后面定义的\n  - 后定义默认值的参数可以引用先定义的参数\n- 参数存在于自己的作用域中，不能引用函数体的作用域\n\x3c!--ID: 1708067341816--\x3e\n\n---\n\n### [Collect or Rest and Spread Function Arguments (收集, 剩余与扩展参数)](../Collect-or-Rest-and-Spread-Function-Arguments-收集,-剩余与扩展参数)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:3,slug:"参数特点-arguments-parameters",text:"参数特点 (Arguments/ Parameters)#"},{depth:3,slug:"arguments-对象用法",text:"arguments 对象用法#"},{depth:4,slug:"argumentscallee-属性",text:"arguments.callee 属性#"},{depth:3,slug:"默认参数定义与规则",text:"默认参数定义与规则#"},{depth:3,slug:"collect-or-rest-and-spread-function-arguments-收集-剩余与扩展参数",text:"Collect or Rest and Spread Function Arguments (收集, 剩余与扩展参数)#"}]}const Content=createComponent(((n,e,a)=>{const{layout:t,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};