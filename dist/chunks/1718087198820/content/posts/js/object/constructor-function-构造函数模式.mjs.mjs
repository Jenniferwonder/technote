import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="constructor-function-构造函数模式">Constructor Function-构造函数模式<a class="anchor" href="#constructor-function-构造函数模式"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<hr>\n<p>Basic</p>\n<h3 id="构造函数本质">构造函数本质<a class="anchor" href="#构造函数本质"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>任何函数 (<a href="The-return-Statement">The <code>return</code> Statement</a>) 只要使用 new 操作符调用就是构造函数<br>\n🏷️: JS-Objects<br>\n📌: JS::JS-Objects</li>\n</ul>\n\x3c!--ID: 1706843828751--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="将构造函数作为普通函数调用">将构造函数作为普通函数调用<a class="anchor" href="#将构造函数作为普通函数调用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>在另一个对象作用域调用： <a href="call-apply-bind">call; apply; bind</a>\n<ul>\n<li><code>Person.call(o, Kristen, 25, Nurse);</code></li>\n</ul>\n</li>\n<li>在 window 对象调用</li>\n</ul>\n\x3c!--ID: 1706843828762--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="use-constructor-function-to-create-object">Use Constructor Function to Create Object<a class="anchor" href="#use-constructor-function-to-create-object"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Constructor Function</span></span>\n<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> Circle</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">radius</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#79B8FF">\tthis</span><span style="color:#E1E4E8">.radius </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> radius;</span></span>\n<span class="line"><span style="color:#79B8FF">\tthis</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">draw</span><span style="color:#F97583"> =</span><span style="color:#F97583"> function</span><span style="color:#E1E4E8"> () {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(draw);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t};</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> another</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Circle</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#6A737D">// 如果不想传参数，那么构造函数后面的括号可加可不加。只要有new操作符，就可以调用相应的构造函数</span></span>\n<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> circle </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Circle</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"></span></code></pre>\n\x3c!--ID: 1706843828772--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="set-private-properties-in-constructor-function">Set Private Properties in Constructor Function<a class="anchor" href="#set-private-properties-in-constructor-function"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> Circle</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">radius</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#79B8FF">\tthis</span><span style="color:#E1E4E8">.radius </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> radius;</span></span>\n<span class="line"><span style="color:#6A737D">\t// Use \'let\' to convert properties into variables only available inside this scope</span></span>\n<span class="line"><span style="color:#F97583">\tlet</span><span style="color:#E1E4E8"> defaultLocation </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> { x: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">, y: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8"> };</span></span>\n<span class="line"><span style="color:#F97583">\tlet</span><span style="color:#B392F0"> computeLocation</span><span style="color:#F97583"> =</span><span style="color:#F97583"> function</span><span style="color:#E1E4E8"> (</span><span style="color:#FFAB70">factor</span><span style="color:#E1E4E8">) {};</span></span>\n<span class="line"><span style="color:#6A737D">\t// Closure enables the parent function variable is accessble to its child without \'this\' keyword</span></span>\n<span class="line"><span style="color:#79B8FF">\tthis</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">draw</span><span style="color:#F97583"> =</span><span style="color:#F97583"> function</span><span style="color:#E1E4E8"> () {</span></span>\n<span class="line"><span style="color:#B392F0">\t\tcomputeLoaction</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">0.1</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(draw);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t};</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> circle</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Circle</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">circle.</span><span style="color:#B392F0">draw</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"></span></code></pre>\n\x3c!--ID: 1706843828782--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="构造函数有返回值的案例">构造函数有返回值的案例<a class="anchor" href="#构造函数有返回值的案例"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> Dog</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">name</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#79B8FF">\tthis</span><span style="color:#E1E4E8">.name </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> name;</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#E1E4E8"> { test: </span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8"> };</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> obj </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Dog</span><span style="color:#E1E4E8">(ming);</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(obj); </span><span style="color:#6A737D">// {test:1}</span></span>\n<span class="line"></span></code></pre>\n\x3c!--ID: 1706843828793--\x3e\n<hr>\n<h3 id="use-new-operator-使用-new-操作符"><a href="../Use-&#x27;new&#x27;-Operator-%E4%BD%BF%E7%94%A8-new-%E6%93%8D%E4%BD%9C%E7%AC%A6">Use ‘new’ Operator (使用 new 操作符)</a><a class="anchor" href="#use-new-operator-使用-new-操作符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="object-types-instanceof-标识对象类型"><a href="../Object-Types-instanceof-%E6%A0%87%E8%AF%86%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B">Object Types (instanceof 标识对象类型)</a><a class="anchor" href="#object-types-instanceof-标识对象类型"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<hr>\n<p>Basic</p>\n<h3 id="构造函数的问题">构造函数的问题<a class="anchor" href="#构造函数的问题"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>其定义的方法会在每个实例上都创建一遍\n<ul>\n<li>函数是对象，因此每次定义函数时，都会初始化一个对象</li>\n<li>不同实例上的函数虽然同名却不相等</li>\n</ul>\n</li>\n<li>解决方案：<a href="prototype-chain-inheritance-%E5%8E%9F%E5%9E%8B%E9%93%BE%E7%BB%A7%E6%89%BF">Prototype Chain Inheritance</a></li>\n</ul>\n\x3c!--ID: 1706843828803--\x3e\n<hr>\n<h3 id="盗用构造函数继承">盗用构造函数继承<a class="anchor" href="#盗用构造函数继承"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>也称作“对象伪装”或“经典继承”</li>\n<li>在子类构造函数中调用父类构造函数\n<ul>\n<li>可以使用<code>apply()</code>和<code>call()</code>方法以新创建的对象为上下文执行构造函数\n<ul>\n<li><code>SuperType.call(this, Nicholas);</code>\n<ul>\n<li>实际上会在 SubType 的实例上定义<code>name</code>属性</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>用 .call()和.apply() 将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复 制））</li>\n</ul>\n</li>\n</ul>\n<h4 id="特点">特点：<a class="anchor" href="#特点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>1、只继承了父类构造函数的属性，没有继承父类原型的属性。<br>\n2、解决了原型链继承缺点 1、2、3。<br>\n3、可以继承多个构造函数属性（call 多个）。<br>\n4、在子实例中可向父实例传参。</p>\n<ul>\n<li>可以在子类构造函数中向父类构造函数传参</li>\n</ul>\n<h4 id="盗用构造函数的问题">盗用构造函数的问题<a class="anchor" href="#盗用构造函数的问题"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>1、只能继承父类构造函数的属性，子类也不能访问父类原型上定义的方法<br>\n2、无法实现构造函数的复用。（每次用每次都要重新调用）<br>\n3、每个新实例都有父类构造函数的副本，臃肿。</p>',frontmatter={draft:!1,aliases:["Constructor Function-构造函数模式"],title:"Constructor Function-构造函数模式",topic:["Objects"],type:"D",tags:["JavaScript"],DateStarted:"2024-02-02T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",Datereviewed:"2024-02-02T00:00:00.000Z",reviewed:2,difficulty:null,status:null,comment:null,"linter-yaml-title-alias":"Constructor Function-构造函数模式",category:"Programming",minutes:3,words:636},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/constructor-function-构造函数模式.md",url=void 0;function rawContent(){return"\n# Constructor Function-构造函数模式\n\n---\n\nBasic\n\n### 构造函数本质\n\nBack:\n\n- 任何函数 ([The `return` Statement](The-return-Statement)) 只要使用 new 操作符调用就是构造函数  \n🏷️: JS-Objects  \n📌: JS::JS-Objects\n\x3c!--ID: 1706843828751--\x3e\n\n---\n\n---\n\nBasic\n\n### 将构造函数作为普通函数调用\n\nBack:\n\n- 在另一个对象作用域调用： [call; apply; bind](call-apply-bind)\n  - `Person.call(o, Kristen, 25, Nurse);`\n- 在 window 对象调用\n\x3c!--ID: 1706843828762--\x3e\n\n---\n\n---\n\nBasic\n\n### Use Constructor Function to Create Object\n\nBack:\n\n```js\n// Constructor Function\nfunction Circle(radius) {\n\tthis.radius = radius;\n\tthis.draw = function () {\n\t\tconsole.log(draw);\n\t};\n}\nconst another = new Circle(1);\n// 如果不想传参数，那么构造函数后面的括号可加可不加。只要有new操作符，就可以调用相应的构造函数\nlet circle = new Circle();\n```\n\n\x3c!--ID: 1706843828772--\x3e\n\n---\n\n---\n\nBasic\n\n### Set Private Properties in Constructor Function\n\nBack:\n\n```js\nfunction Circle(radius) {\n\tthis.radius = radius;\n\t// Use 'let' to convert properties into variables only available inside this scope\n\tlet defaultLocation = { x: 0, y: 0 };\n\tlet computeLocation = function (factor) {};\n\t// Closure enables the parent function variable is accessble to its child without 'this' keyword\n\tthis.draw = function () {\n\t\tcomputeLoaction(0.1);\n\t\tconsole.log(draw);\n\t};\n}\nconst circle = new Circle(10);\ncircle.draw();\n```\n\n\x3c!--ID: 1706843828782--\x3e\n\n---\n\n---\n\nBasic\n\n### 构造函数有返回值的案例\n\nBack:\n\n```js\nfunction Dog(name) {\n\tthis.name = name;\n\treturn { test: 1 };\n}\nlet obj = new Dog(ming);\nconsole.log(obj); // {test:1}\n```\n\n\x3c!--ID: 1706843828793--\x3e\n\n---\n\n### [Use 'new' Operator (使用 new 操作符)](../Use-'new'-Operator-使用-new-操作符)\n\n### [Object Types (instanceof 标识对象类型)](../Object-Types-instanceof-标识对象类型)\n\n---\n\nBasic\n\n### 构造函数的问题\n\nBack:\n\n- 其定义的方法会在每个实例上都创建一遍\n  - 函数是对象，因此每次定义函数时，都会初始化一个对象\n  - 不同实例上的函数虽然同名却不相等\n- 解决方案：[Prototype Chain Inheritance](prototype-chain-inheritance-原型链继承)\n\x3c!--ID: 1706843828803--\x3e\n\n---\n\n### 盗用构造函数继承\n\n- 也称作“对象伪装”或“经典继承”\n- 在子类构造函数中调用父类构造函数\n  - 可以使用`apply()`和`call()`方法以新创建的对象为上下文执行构造函数\n    - `SuperType.call(this, Nicholas);`\n      - 实际上会在 SubType 的实例上定义`name`属性\n  - 用 .call()和.apply() 将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复 制））\n\n#### 特点：\n\n1、只继承了父类构造函数的属性，没有继承父类原型的属性。  \n2、解决了原型链继承缺点 1、2、3。  \n3、可以继承多个构造函数属性（call 多个）。  \n4、在子实例中可向父实例传参。\n\n- 可以在子类构造函数中向父类构造函数传参\n\n#### 盗用构造函数的问题\n\n1、只能继承父类构造函数的属性，子类也不能访问父类原型上定义的方法  \n2、无法实现构造函数的复用。（每次用每次都要重新调用）  \n3、每个新实例都有父类构造函数的副本，臃肿。\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"constructor-function-构造函数模式",text:"Constructor Function-构造函数模式#"},{depth:3,slug:"构造函数本质",text:"构造函数本质#"},{depth:3,slug:"将构造函数作为普通函数调用",text:"将构造函数作为普通函数调用#"},{depth:3,slug:"use-constructor-function-to-create-object",text:"Use Constructor Function to Create Object#"},{depth:3,slug:"set-private-properties-in-constructor-function",text:"Set Private Properties in Constructor Function#"},{depth:3,slug:"构造函数有返回值的案例",text:"构造函数有返回值的案例#"},{depth:3,slug:"use-new-operator-使用-new-操作符",text:"Use ‘new’ Operator (使用 new 操作符)#"},{depth:3,slug:"object-types-instanceof-标识对象类型",text:"Object Types (instanceof 标识对象类型)#"},{depth:3,slug:"构造函数的问题",text:"构造函数的问题#"},{depth:3,slug:"盗用构造函数继承",text:"盗用构造函数继承#"},{depth:4,slug:"特点",text:"特点：#"},{depth:4,slug:"盗用构造函数的问题",text:"盗用构造函数的问题#"}]}const Content=createComponent(((n,s,a)=>{const{layout:e,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};