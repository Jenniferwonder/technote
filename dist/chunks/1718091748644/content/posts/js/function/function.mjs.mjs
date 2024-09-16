import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="function">Function<a class="anchor" href="#function"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="function-feature-函数本质与特点"><a href="function-feature-%E5%87%BD%E6%95%B0%E6%9C%AC%E8%B4%A8%E4%B8%8E%E7%89%B9%E7%82%B9">function-feature-函数本质与特点</a><a class="anchor" href="#function-feature-函数本质与特点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="function-creation-创建函数"><a href="function-creation-%E5%88%9B%E5%BB%BA%E5%87%BD%E6%95%B0">function-creation-创建函数</a><a class="anchor" href="#function-creation-创建函数"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="function-names-读取函数名"><a href="function-names-%E8%AF%BB%E5%8F%96%E5%87%BD%E6%95%B0%E5%90%8D">function-names-读取函数名</a><a class="anchor" href="#function-names-读取函数名"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="function-arguments-函数参数"><a href="function-arguments-%E5%87%BD%E6%95%B0%E5%8F%82%E6%95%B0">function-arguments-函数参数</a><a class="anchor" href="#function-arguments-函数参数"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="函数内部特殊对象">函数内部特殊对象<a class="anchor" href="#函数内部特殊对象"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="%60this%60-in-JS-Function"><code>this</code> in JS Function</a></li>\n<li><a href="../%60new.target%60-%E5%8A%9F%E8%83%BD%E7%94%A8%E6%B3%95-ES6"><code>new.target</code> 功能用法 (ES6)</a></li>\n</ul>\n<h3 id="函数属性与方法">函数属性与方法<a class="anchor" href="#函数属性与方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="call;-apply;-bind">call; apply; bind</a></li>\n<li><code>prototype</code></li>\n<li><code>length</code>\n<ul>\n<li>保存函数定义的命名参数的个数</li>\n<li><code>console.log(sayName.length);  // 1</code></li>\n</ul>\n</li>\n<li><code>caller</code> (ES5)\n<ul>\n<li>引用的是调用当前函数的函数\n<ul>\n<li>如果是在全局作用域中调用的则为 <code>null</code></li>\n</ul>\n</li>\n<li><code>console.log(inner.caller);</code>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/0abc5bc2d093e03182bbcfdb1ab7ca89.png" alt="image"></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="closure-闭包"><a href="../Closure-%E9%97%AD%E5%8C%85">Closure (闭包)</a><a class="anchor" href="#closure-闭包"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="立即调用的函数表达式-iife">立即调用的函数表达式 (IIFE)<a class="anchor" href="#立即调用的函数表达式-iife"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>IIFE，Immediately Invoked Function Expression</li>\n<li>\n<h6 id="es5-时期用途">ES5 时期用途<a class="anchor" href="#es5-时期用途"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h6>\n<ul>\n<li>用它锁定参数值</li>\n<li>ECMAScript 5 尚未支持块级作用域，使用 IIFE 模拟块级作用域是相当普遍</li>\n</ul>\n</li>\n<li>两种不同的块级作用域形式 (ES6)\n<ul>\n<li>内嵌块级作用域</li>\n<li>循环的块级作用域</li>\n</ul>\n</li>\n</ul>\n<h3 id="尾调用优化">尾调用优化<a class="anchor" href="#尾调用优化"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>“尾调用”，即外部函数的返回值是一个内部函数的返回值</li>\n<li>内存管理优化机制 (ES6)\n<ul>\n<li>可以重用栈帧</li>\n</ul>\n</li>\n<li>尾调用优化的条件\n<ul>\n<li>确定外部栈帧真的没有必要存在了</li>\n</ul>\n</li>\n</ul>\n<h3 id="私有变量">私有变量<a class="anchor" href="#私有变量"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={aliases:["Function"],title:"Function",topic:["Function"],type:null,tags:["JavaScript"],DateStarted:"2024-02-06T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",Datereviewed:"2024-04-25T00:00:00.000Z",reviewed:2,difficulty:null,status:null,comment:null,category:"Programming",draft:!0,"linter-yaml-title-alias":"Function",minutes:1,words:252},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/function/function.md",url=void 0;function rawContent(){return"\n# Function\n\n### [function-feature-函数本质与特点](function-feature-函数本质与特点)\n\n### [function-creation-创建函数](function-creation-创建函数)\n\n### [function-names-读取函数名](function-names-读取函数名)\n\n### [function-arguments-函数参数](function-arguments-函数参数)\n\n### 函数内部特殊对象\n\n- [`this` in JS Function](`this`-in-JS-Function)\n- [`new.target` 功能用法 (ES6)](../`new.target`-功能用法-ES6)\n\n### 函数属性与方法\n\n- [call; apply; bind](call;-apply;-bind)\n- `prototype`\n- `length`\n  - 保存函数定义的命名参数的个数\n  - `console.log(sayName.length);  // 1`\n- `caller` (ES5)\n  - 引用的是调用当前函数的函数\n    - 如果是在全局作用域中调用的则为 `null`\n  - `console.log(inner.caller);`\n    - ![image](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/0abc5bc2d093e03182bbcfdb1ab7ca89.png)\n\n### [Closure (闭包)](../Closure-闭包)\n\n### 立即调用的函数表达式 (IIFE)\n\n- IIFE，Immediately Invoked Function Expression\n- ###### ES5 时期用途\n  - 用它锁定参数值\n  - ECMAScript 5 尚未支持块级作用域，使用 IIFE 模拟块级作用域是相当普遍\n- 两种不同的块级作用域形式 (ES6)\n  - 内嵌块级作用域\n  - 循环的块级作用域\n\n### 尾调用优化\n\n- “尾调用”，即外部函数的返回值是一个内部函数的返回值\n- 内存管理优化机制 (ES6)\n  - 可以重用栈帧\n- 尾调用优化的条件\n  - 确定外部栈帧真的没有必要存在了\n\n### 私有变量\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"function",text:"Function#"},{depth:3,slug:"function-feature-函数本质与特点",text:"function-feature-函数本质与特点#"},{depth:3,slug:"function-creation-创建函数",text:"function-creation-创建函数#"},{depth:3,slug:"function-names-读取函数名",text:"function-names-读取函数名#"},{depth:3,slug:"function-arguments-函数参数",text:"function-arguments-函数参数#"},{depth:3,slug:"函数内部特殊对象",text:"函数内部特殊对象#"},{depth:3,slug:"函数属性与方法",text:"函数属性与方法#"},{depth:3,slug:"closure-闭包",text:"Closure (闭包)#"},{depth:3,slug:"立即调用的函数表达式-iife",text:"立即调用的函数表达式 (IIFE)#"},{depth:6,slug:"es5-时期用途",text:"ES5 时期用途#"},{depth:3,slug:"尾调用优化",text:"尾调用优化#"},{depth:3,slug:"私有变量",text:"私有变量#"}]}const Content=createComponent(((n,e,a)=>{const{layout:t,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};