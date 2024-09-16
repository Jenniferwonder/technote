import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="class-es6-类">Class-ES6-类<a class="anchor" href="#class-es6-类"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="装饰器模式-decorator-pattern-in-js">装饰器模式 Decorator Pattern in JS<a class="anchor" href="#装饰器模式-decorator-pattern-in-js"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://angularindepth.com/posts/1491/attaching-new-behaviors-through-decorators-in-javascript">in Depth-Decorator Pattern in JS</a></li>\n</ul>\n<h3 id="类的本质">类的本质<a class="anchor" href="#类的本质"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>ES6 新引入的 <code>class</code> 关键字具有正式定义类的能力</li>\n<li>新的基础性语法糖结构，让原型链更易使用</li>\n<li>背后使用的仍然是<strong>原型</strong>和<strong>构造函数</strong>的概念\n<ul>\n<li><a href="../object/prototype-pattern-%E5%8E%9F%E5%9E%8B%E6%A8%A1%E5%BC%8F">Prototype Pattern-原型模式</a></li>\n<li><a href="../object/constructor-function-%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E6%A8%A1%E5%BC%8F">Constructor Function-构造函数模式</a></li>\n</ul>\n</li>\n<li>类就是一种特殊函数\n<ul>\n<li>把类作为参数传递</li>\n<li>立即调用</li>\n</ul>\n</li>\n</ul>\n<h3 id="创建类">创建类<a class="anchor" href="#创建类"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>类表达式</th><th>类声明</th></tr></thead><tbody><tr><td>语法</td><td><code>const Animal = class{}</code></td><td><code>class Animal {}</code></td></tr><tr><td>声明前引用</td><td>❌</td><td>❌(函数声明可以，类声明不行)</td></tr><tr><td>作用域</td><td>块作用域</td><td>块作用域</td></tr><tr><td>名称可选 (可用 <code>.name</code> 属性获取)</td><td>✅<code>let Person = class PersonName {}</code></td><td>/</td></tr></tbody></table>\n<h3 id="类构造函数">类构造函数<a class="anchor" href="#类构造函数"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>非必需\n<ul>\n<li>不定义构造函数相当于将构造函数定义为空函数</li>\n</ul>\n</li>\n<li>类构造函数与构造函数的主要区别\n<ul>\n<li>调用类构造函数必须使用 <code>new</code> 操作符。</li>\n<li>普通构造函数如果不使用 <code>new</code> 调用，那么就会以全局的 <code>this</code>（通常是 window）作为内部对象\n<ul>\n<li><a href="../object/use-new-operator-%E4%BD%BF%E7%94%A8-new-%E6%93%8D%E4%BD%9C%E7%AC%A6">Use <code>new</code> Operator-使用 new 操作符</a></li>\n</ul>\n</li>\n<li>使用对类构造函数的引用创建一个新实例\n<ul>\n<li><code>let p2 = new p1.constructor();</code></li>\n</ul>\n</li>\n<li>类中定义的 <code>constructor</code> 方法不会被当成构造函数\n<ul>\n<li><code>console.log(p1 instanceof Person.constructor);  // false</code></li>\n<li><code>console.log(p1 instanceof Person);              // true</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>❓ 实例化 (Instantiation)\n<ul>\n<li>使用 <code>new</code> 和类意味着应该使用 <code>constructor</code> 函数进行实例化</li>\n<li>类实例化时传入的参数会用作构造函数的参数</li>\n</ul>\n</li>\n</ul>\n<h3 id="实例原型类成员">实例、原型、类成员<a class="anchor" href="#实例原型类成员"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>可以非常方便地定义应该存在于实例上的成员、应该存在于原型上的成员，以及应该存在于类本身的成员</li>\n</ul>\n<h4 id="实例成员-添加自有属性">实例成员 (添加自有属性)<a class="anchor" href="#实例成员-添加自有属性"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>类构造函数 (<code>constructor</code>) 内部，可以为新创建的实例（<code>this</code>）添加 <strong>自有属性</strong>，该属性不会在原型上共享</li>\n</ul>\n<h4 id="原型方法与访问器">原型方法与访问器<a class="anchor" href="#原型方法与访问器"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>在实例间共享方法\n<ul>\n<li><strong>在类块中定义的所有内容都会定义在类的原型上</strong></li>\n<li>类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键</li>\n<li>支持获取和设置访问器 (Accessors)。语法与行为跟普通对象一样</li>\n</ul>\n</li>\n<li>不能在类块中给原型添加原始值或对象作为成员数据</li>\n</ul>\n<h4 id="静态类方法">静态类方法<a class="anchor" href="#静态类方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>用于执行不特定于实例的操作，也不要求存在类的实例</li>\n<li>静态属性\n<ul>\n<li><code>static PENDING = pending</code></li>\n</ul>\n</li>\n<li>用<code>static</code>关键字作为前缀\n<ul>\n<li><code>static locate() {     console.log(\'class\', this);   }</code></li>\n<li><code>Person.locate();            // class, class Person {}</code></li>\n</ul>\n</li>\n</ul>\n<h4 id="-非函数原型和类成员">❓ 非函数原型和类成员<a class="anchor" href="#-非函数原型和类成员"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>在类定义外部，可手动添加\n<ul>\n<li>在类上定义数据成员\n<ul>\n<li><code>Person.greeting = \'My name is\';</code></li>\n</ul>\n</li>\n<li>在原型上定义数据成员\n<ul>\n<li><code>Person.prototype.name = \'Jake\';</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>❌ 在共享目标（原型和类）上添加可变（可修改）数据成员是一种反模式\n<ul>\n<li>对象实例应该独自拥有通过<code>this</code>引用的数据</li>\n</ul>\n</li>\n</ul>\n<h4 id="迭代器与生成器方法">迭代器与生成器方法<a class="anchor" href="#迭代器与生成器方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>在原型上定义生成器方法\n<ul>\n<li><code>*createNicknameIterator() {</code></li>\n</ul>\n</li>\n<li>在类上定义生成器方法\n<ul>\n<li><code>static *createJobIterator() {</code></li>\n<li><code>console.log(jobIter.next().value);  // Butcher</code></li>\n</ul>\n</li>\n<li>可以通过添加一个默认的迭代器，把类实例变成可迭代对象\n<ul>\n<li><code>*[Symbol.iterator]() {     yield *this.nicknames.entries();   }</code>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/9758d5e1b077c63d80d0e4190b1332c1.png" alt="image"></li>\n</ul>\n</li>\n<li>可以只返回迭代器实例\n<ul>\n<li><code>[Symbol.iterator]() {     return this.nicknames.entries();   }</code><br>\n* <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/581766ac713aced178084bb330fc826e.png" alt="image"></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="类继承机制">类继承机制<a class="anchor" href="#类继承机制"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="extends关键字"><code>extends</code>关键字<a class="anchor" href="#extends关键字"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>功能\n<ul>\n<li>可以继承任何拥有<code>[[Construct]]</code>和原型的对象</li>\n<li>不仅可以继承一个类，也可以继承普通的构造函数（保持向后兼容）</li>\n</ul>\n</li>\n<li>继承类\n<ul>\n<li><code>class Vehicle {}</code></li>\n<li><code>class Bus extends Vehicle {}</code></li>\n</ul>\n</li>\n<li>继承普通构造函数\n<ul>\n<li><code>function Person() {}</code></li>\n<li><code>class Engineer extends Person {}</code></li>\n</ul>\n</li>\n<li>继承内置类型\n<ul>\n<li>可以方便地扩展内置类型\n<ul>\n<li><code>class SuperArray extends Array {</code></li>\n</ul>\n</li>\n<li>有些内置类型的方法会返回新实例\n<ul>\n<li>默认情况下，返回实例的类型与原始实例的类型是一致的</li>\n<li>覆盖<code>Symbol.species</code>访问器\n<ul>\n<li>决定在创建返回的实例时使用的类</li>\n<li><code>static get [Symbol.species]() {     return Array;   }</code></li>\n<li><code>let a2 = a1.filter(x =!!(x%2))</code></li>\n<li><code>console.log(a2 instanceof SuperArray);  // false</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>this</code>的值会反映调用相应方法的实例或者类\n<ul>\n<li><code>class Bus extends Vehicle {}</code></li>\n<li><code>let b = new Bus();</code></li>\n<li><code>b.identifyPrototype(\'bus\');       // bus, Bus {}</code></li>\n</ul>\n</li>\n</ul>\n<h4 id="super关键字"><code>super</code>关键字<a class="anchor" href="#super关键字"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>只能在派生类构造函数和静态方法中使用\n<ul>\n<li>要么用它调用构造函数，要么用它引用静态方法</li>\n<li>在类构造函数中使用<code>super</code>可以调用父类构造函数\n<ul>\n<li><code>super(); // 相当于 super.constructor()</code></li>\n</ul>\n</li>\n<li>静态方法中可以通过<code>super</code>调用继承的类上定义的静态方法\n<ul>\n<li><code>static identify() {     super.identify();   }</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>调用<code>super()</code>会调用父类构造函数，并将返回的实例赋值给<code>this</code>\n<ul>\n<li>不要在调用 <code>super()</code>之前引用 <code>this</code>，否则会抛出 <code>ReferenceError</code></li>\n</ul>\n</li>\n<li><code>super()</code>的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入\n<ul>\n<li><code>super(licensePlate);</code></li>\n</ul>\n</li>\n<li>如果没有定义类构造函数，在实例化派生类时会调用<code>super()</code>，而且会传入所有传给派生类的参数\n<ul>\n<li><code>class Vehicle {constructor(licensePlate) {</code></li>\n<li><code>class Bus extends Vehicle {}</code></li>\n<li><code>console.log(new Bus(\'1337H4X\')); // Bus { licensePlate: \'1337H4X\' }</code></li>\n</ul>\n</li>\n<li>如果在派生类中显式定义了构造函数，则要么必须在其中调用<code>super()</code>，要么必须在其中返回一个对象</li>\n</ul>\n<h4 id="use-case-inherit-a-class">Use Case (Inherit a Class)<a class="anchor" href="#use-case-inherit-a-class"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> Professor</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> Person</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\tteaches</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">\tconstructor</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">name</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">teaches</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#79B8FF">\t\tsuper</span><span style="color:#E1E4E8">(name);</span></span>\n<span class="line"><span style="color:#79B8FF">\t\tthis</span><span style="color:#E1E4E8">.teaches </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> teaches;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#B392F0">\tintroduceSelf</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span></span>\n<span class="line"><span style="color:#9ECBFF">\t\t\t`My name is ${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">name</span><span style="color:#9ECBFF">}, and I will be your ${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">teaches</span><span style="color:#9ECBFF">} professor.`</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#B392F0">\tgrade</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">paper</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#F97583">\t\tconst</span><span style="color:#79B8FF"> grade</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> Math.</span><span style="color:#B392F0">floor</span><span style="color:#E1E4E8">(Math.</span><span style="color:#B392F0">random</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> (</span><span style="color:#79B8FF">5</span><span style="color:#F97583"> -</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">+</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(grade);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h4 id="use-case-private-property">Use Case (Private Property)<a class="anchor" href="#use-case-private-property"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">class</span><span style="color:#B392F0"> Student</span><span style="color:#F97583"> extends</span><span style="color:#B392F0"> Person</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\t#year</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">\tconstructor</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">name</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">year</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#79B8FF">\t\tsuper</span><span style="color:#E1E4E8">(name);</span></span>\n<span class="line"><span style="color:#79B8FF">\t\tthis</span><span style="color:#E1E4E8">.#year </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> year;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#B392F0">\tintroduceSelf</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`Hi! I\'m ${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">name</span><span style="color:#9ECBFF">}, and I\'m in year ${</span><span style="color:#79B8FF">this</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">#year</span><span style="color:#9ECBFF">}.`</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#B392F0">\tcanStudyArchery</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#F97583">\t\treturn</span><span style="color:#79B8FF"> this</span><span style="color:#E1E4E8">.#year </span><span style="color:#F97583">></span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t}</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h3 id="abstract-base-classes-抽象基类">Abstract Base Classes (抽象基类)<a class="anchor" href="#abstract-base-classes-抽象基类"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>可供其他类继承，但本身不会被实例化</li>\n<li>通过在实例化时检测<code>new.target</code>是不是抽象基类，可以阻止对抽象基类的实例化\n<ul>\n<li><code>if (new.target === Vehicle) {       throw new Error(\'Vehicle cannot be directly instantiated\');</code></li>\n</ul>\n</li>\n<li>可以要求派生类必须定义某个方法\n<ul>\n<li>通过在抽象基类构造函数中进行检查</li>\n<li><code>if (!this.foo) { throw new Error(\'Inheriting class must define foo()\'); }</code></li>\n</ul>\n</li>\n</ul>\n<h3 id="class-mixins-类混入">Class Mixins (类混入)<a class="anchor" href="#class-mixins-类混入"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>把不同类的行为集中到一个类\n<ul>\n<li>案例：Person 类需要组合 A、B、C\n<ul>\n<li>需要某种机制实现 B 继承 A，C 继承 B，而 Person 再继承 C</li>\n</ul>\n</li>\n<li>\n<h6 id="策略">策略<a class="anchor" href="#策略"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h6>\n<ul>\n<li>定义一组“可嵌套”的函数，每个函数分别接收一个超类作为参数，而将混入类定义为这个参数的子类，并返回这个类\n<ul>\n<li><code>let FooMixin = (Superclass) =class extends Superclass {</code></li>\n<li><code>class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}</code></li>\n</ul>\n</li>\n<li>写一个辅助函数，可以把嵌套调用展开\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/f8257bb98eb30bb7aa68cb96e10a5ec5.png" alt="image"></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>转向了组合模式\n<ul>\n<li>很多 JavaScript 框架（特别是 React）已经抛弃混入模式</li>\n<li>软件设计原则：“组合胜过继承（composition over inheritance）。</li>\n<li>把方法提取到独立的类和辅助对象中，然后把它们组合起来，但不使用继承</li>\n</ul>\n</li>\n<li>区别：混入多个对象的属性\n<ul>\n<li><code>Object.assign()</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Classes - JavaScript | MDN</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript">Classes in JavaScript - Learn web development | MDN</a></li>\n</ul>',frontmatter={draft:!1,aliases:["Class-ES6-类"],title:"Class-ES6-类",topic:["Classes"],type:"D",tags:["JavaScript"],DateStarted:"2024-02-16T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",Datereviewed:"2024-02-19T00:00:00.000Z",reviewed:1,difficulty:null,status:null,comment:null,"linter-yaml-title-alias":"Class-ES6-类",category:"Programming",minutes:8,words:1685},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/class/class-es6-类.md",url=void 0;function rawContent(){return"\n# Class-ES6-类\n\n### 装饰器模式 Decorator Pattern in JS\n\n- [in Depth-Decorator Pattern in JS](https://angularindepth.com/posts/1491/attaching-new-behaviors-through-decorators-in-javascript)\n\n### 类的本质\n\n- ES6 新引入的 `class` 关键字具有正式定义类的能力\n- 新的基础性语法糖结构，让原型链更易使用\n- 背后使用的仍然是**原型**和**构造函数**的概念\n  - [Prototype Pattern-原型模式](../object/prototype-pattern-原型模式)\n  - [Constructor Function-构造函数模式](../object/constructor-function-构造函数模式)\n- 类就是一种特殊函数\n  - 把类作为参数传递\n  - 立即调用\n\n### 创建类\n\n|                                  | 类表达式                             | 类声明                       |\n| -------------------------------- | ------------------------------------ | ---------------------------- |\n| 语法                             | `const Animal = class{}`             | `class Animal {}`            |\n| 声明前引用                       | ❌                                   | ❌(函数声明可以，类声明不行) |\n| 作用域                           | 块作用域                             | 块作用域                     |\n| 名称可选 (可用 `.name` 属性获取) | ✅`let Person = class PersonName {}` | /                            |\n\n### 类构造函数\n\n- 非必需\n  - 不定义构造函数相当于将构造函数定义为空函数\n- 类构造函数与构造函数的主要区别\n  - 调用类构造函数必须使用 `new` 操作符。\n  - 普通构造函数如果不使用 `new` 调用，那么就会以全局的 `this`（通常是 window）作为内部对象\n    - [Use `new` Operator-使用 new 操作符](../object/use-new-operator-使用-new-操作符)\n  - 使用对类构造函数的引用创建一个新实例\n    - `let p2 = new p1.constructor();`\n  - 类中定义的 `constructor` 方法不会被当成构造函数\n    - `console.log(p1 instanceof Person.constructor);  // false`\n    - `console.log(p1 instanceof Person);              // true`\n- ❓ 实例化 (Instantiation)\n  - 使用 `new` 和类意味着应该使用 `constructor` 函数进行实例化\n  - 类实例化时传入的参数会用作构造函数的参数\n\n### 实例、原型、类成员\n\n- 可以非常方便地定义应该存在于实例上的成员、应该存在于原型上的成员，以及应该存在于类本身的成员\n\n#### 实例成员 (添加自有属性)\n\n- 类构造函数 (`constructor`) 内部，可以为新创建的实例（`this`）添加 **自有属性**，该属性不会在原型上共享\n\n#### 原型方法与访问器\n\n- 在实例间共享方法\n  - **在类块中定义的所有内容都会定义在类的原型上**\n  - 类方法等同于对象属性，因此可以使用字符串、符号或计算的值作为键\n  - 支持获取和设置访问器 (Accessors)。语法与行为跟普通对象一样\n- 不能在类块中给原型添加原始值或对象作为成员数据\n\n#### 静态类方法\n\n- 用于执行不特定于实例的操作，也不要求存在类的实例\n- 静态属性\n  - `static PENDING = pending`\n- 用`static`关键字作为前缀\n  - `static locate() {     console.log('class', this);   }`\n  - `Person.locate();            // class, class Person {}`\n\n#### ❓ 非函数原型和类成员\n\n- 在类定义外部，可手动添加\n  - 在类上定义数据成员\n    - `Person.greeting = 'My name is';`\n  - 在原型上定义数据成员\n    - `Person.prototype.name = 'Jake';`\n- ❌ 在共享目标（原型和类）上添加可变（可修改）数据成员是一种反模式\n  - 对象实例应该独自拥有通过`this`引用的数据\n\n#### 迭代器与生成器方法\n\n- 在原型上定义生成器方法\n  - `*createNicknameIterator() {`\n- 在类上定义生成器方法\n  - `static *createJobIterator() {`\n  - `console.log(jobIter.next().value);  // Butcher`\n- 可以通过添加一个默认的迭代器，把类实例变成可迭代对象\n  - `*[Symbol.iterator]() {     yield *this.nicknames.entries();   }`\n    - ![image](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/9758d5e1b077c63d80d0e4190b1332c1.png)\n  - 可以只返回迭代器实例\n    - `[Symbol.iterator]() {     return this.nicknames.entries();   }`  \n       \\* ![image](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/581766ac713aced178084bb330fc826e.png)\n\n### 类继承机制\n\n#### `extends`关键字\n\n- 功能\n  - 可以继承任何拥有`[[Construct]]`和原型的对象\n  - 不仅可以继承一个类，也可以继承普通的构造函数（保持向后兼容）\n- 继承类\n  - `class Vehicle {}`\n  - `class Bus extends Vehicle {}`\n- 继承普通构造函数\n  - `function Person() {}`\n  - `class Engineer extends Person {}`\n- 继承内置类型\n  - 可以方便地扩展内置类型\n    - `class SuperArray extends Array {`\n  - 有些内置类型的方法会返回新实例\n    - 默认情况下，返回实例的类型与原始实例的类型是一致的\n    - 覆盖`Symbol.species`访问器\n      - 决定在创建返回的实例时使用的类\n      - `static get [Symbol.species]() {     return Array;   }`\n      - `let a2 = a1.filter(x =!!(x%2))`\n      - `console.log(a2 instanceof SuperArray);  // false`\n- `this`的值会反映调用相应方法的实例或者类\n  - `class Bus extends Vehicle {}`\n  - `let b = new Bus();`\n  - `b.identifyPrototype('bus');       // bus, Bus {}`\n\n#### `super`关键字\n\n- 只能在派生类构造函数和静态方法中使用\n  - 要么用它调用构造函数，要么用它引用静态方法\n  - 在类构造函数中使用`super`可以调用父类构造函数\n    - `super(); // 相当于 super.constructor()`\n  - 静态方法中可以通过`super`调用继承的类上定义的静态方法\n    - `static identify() {     super.identify();   }`\n- 调用`super()`会调用父类构造函数，并将返回的实例赋值给`this`\n  - 不要在调用 `super()`之前引用 `this`，否则会抛出 `ReferenceError`\n- `super()`的行为如同调用构造函数，如果需要给父类构造函数传参，则需要手动传入\n  - `super(licensePlate);`\n- 如果没有定义类构造函数，在实例化派生类时会调用`super()`，而且会传入所有传给派生类的参数\n  - `class Vehicle {constructor(licensePlate) {`\n  - `class Bus extends Vehicle {}`\n  - `console.log(new Bus('1337H4X')); // Bus { licensePlate: '1337H4X' }`\n- 如果在派生类中显式定义了构造函数，则要么必须在其中调用`super()`，要么必须在其中返回一个对象\n\n#### Use Case (Inherit a Class)\n\n```js\nclass Professor extends Person {\n\tteaches;\n\tconstructor(name, teaches) {\n\t\tsuper(name);\n\t\tthis.teaches = teaches;\n\t}\n\tintroduceSelf() {\n\t\tconsole.log(\n\t\t\t`My name is ${this.name}, and I will be your ${this.teaches} professor.`\n\t\t);\n\t}\n\tgrade(paper) {\n\t\tconst grade = Math.floor(Math.random() * (5 - 1) + 1);\n\t\tconsole.log(grade);\n\t}\n}\n```\n\n#### Use Case (Private Property)\n\n```js\nclass Student extends Person {\n\t#year;\n\tconstructor(name, year) {\n\t\tsuper(name);\n\t\tthis.#year = year;\n\t}\n\tintroduceSelf() {\n\t\tconsole.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);\n\t}\n\tcanStudyArchery() {\n\t\treturn this.#year > 1;\n\t}\n}\n```\n\n### Abstract Base Classes (抽象基类)\n\n- 可供其他类继承，但本身不会被实例化\n- 通过在实例化时检测`new.target`是不是抽象基类，可以阻止对抽象基类的实例化\n  - `if (new.target === Vehicle) {       throw new Error('Vehicle cannot be directly instantiated');`\n- 可以要求派生类必须定义某个方法\n  - 通过在抽象基类构造函数中进行检查\n  - `if (!this.foo) { throw new Error('Inheriting class must define foo()'); }`\n\n### Class Mixins (类混入)\n\n- 把不同类的行为集中到一个类\n  - 案例：Person 类需要组合 A、B、C\n    - 需要某种机制实现 B 继承 A，C 继承 B，而 Person 再继承 C\n  - ###### 策略\n    - 定义一组“可嵌套”的函数，每个函数分别接收一个超类作为参数，而将混入类定义为这个参数的子类，并返回这个类\n      - `let FooMixin = (Superclass) =class extends Superclass {`\n      - `class Bus extends FooMixin(BarMixin(BazMixin(Vehicle))) {}`\n    - 写一个辅助函数，可以把嵌套调用展开\n      - ![image](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/f8257bb98eb30bb7aa68cb96e10a5ec5.png)\n  - 转向了组合模式\n    - 很多 JavaScript 框架（特别是 React）已经抛弃混入模式\n    - 软件设计原则：“组合胜过继承（composition over inheritance）。\n    - 把方法提取到独立的类和辅助对象中，然后把它们组合起来，但不使用继承\n  - 区别：混入多个对象的属性\n    - `Object.assign()`\n\n## Reference\n\n- [Classes - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)\n- [Classes in JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"class-es6-类",text:"Class-ES6-类#"},{depth:3,slug:"装饰器模式-decorator-pattern-in-js",text:"装饰器模式 Decorator Pattern in JS#"},{depth:3,slug:"类的本质",text:"类的本质#"},{depth:3,slug:"创建类",text:"创建类#"},{depth:3,slug:"类构造函数",text:"类构造函数#"},{depth:3,slug:"实例原型类成员",text:"实例、原型、类成员#"},{depth:4,slug:"实例成员-添加自有属性",text:"实例成员 (添加自有属性)#"},{depth:4,slug:"原型方法与访问器",text:"原型方法与访问器#"},{depth:4,slug:"静态类方法",text:"静态类方法#"},{depth:4,slug:"-非函数原型和类成员",text:"❓ 非函数原型和类成员#"},{depth:4,slug:"迭代器与生成器方法",text:"迭代器与生成器方法#"},{depth:3,slug:"类继承机制",text:"类继承机制#"},{depth:4,slug:"extends关键字",text:"extends关键字#"},{depth:4,slug:"super关键字",text:"super关键字#"},{depth:4,slug:"use-case-inherit-a-class",text:"Use Case (Inherit a Class)#"},{depth:4,slug:"use-case-private-property",text:"Use Case (Private Property)#"},{depth:3,slug:"abstract-base-classes-抽象基类",text:"Abstract Base Classes (抽象基类)#"},{depth:3,slug:"class-mixins-类混入",text:"Class Mixins (类混入)#"},{depth:6,slug:"策略",text:"策略#"},{depth:2,slug:"reference",text:"Reference#"}]}const Content=createComponent(((n,s,e)=>{const{layout:a,...l}=frontmatter;return l.file=file,l.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};