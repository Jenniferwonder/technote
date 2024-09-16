import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="js/object/use-new-operator-使用-new-操作符.md",collection="posts",slug="js/object/use-new-operator-使用-new-操作符",body="\n# Use `new` Operator-使用 new 操作符\n\n---\n\nBasic\n\n### 'new' 操作符实现机制\n\nBack:\n\n1. 内存中创建一个新对象\n2. 该对象内部的原型特性 (`__proto__`) 被赋值为构造函数的原型属性 (`prototype`)\n3. 调用该构造函数，构造函数内部的 `this` 指向新生成的对象\n4. 执行构造函数内部代码，给新对象添加属性\n5. 如果构造函数有返回值且返回值是一个对象或一个方法，则返回该值；否则返回新生成的对象\n\n📌: JS::JS-Objects  \n🏷️: JS-Objects\n\n\x3c!--ID: 1706844019913--\x3e\n\n---\n\n## ❓ 手写 new\n\n```javascript\nfunction selfNew(fn, ...args) {\n\t// 创建一个instance对象，该对象的原型是fn.prototype\n\tlet instance = Object.create(fn.prototype);\n\t// 调用构造函数，使用apply，将this指向新生成的对象\n\tlet res = fn.apply(instance, args);\n\t// 如果fn函数有返回值，并且返回值是一个对象或方法，则返回该对象，否则返回新生成的instance对象\n\treturn typeof res === object || typeof res === function ? res : instance;\n}\n```\n\n相关：[Class-ES6-类](../class/class-es6-类)\n",data={title:"Use `new` Operator-使用 new 操作符",DateStarted:new Date(1706832e6),draft:!1,tags:["JavaScript"],category:"Programming"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/use-new-operator-使用-new-操作符.md",rawData:void 0},html='<h1 id="use-new-operator-使用-new-操作符">Use <code>new</code> Operator-使用 new 操作符<a class="anchor" href="#use-new-operator-使用-new-操作符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<hr>\n<p>Basic</p>\n<h3 id="new-操作符实现机制">’new’ 操作符实现机制<a class="anchor" href="#new-操作符实现机制"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ol>\n<li>内存中创建一个新对象</li>\n<li>该对象内部的原型特性 (<code>__proto__</code>) 被赋值为构造函数的原型属性 (<code>prototype</code>)</li>\n<li>调用该构造函数，构造函数内部的 <code>this</code> 指向新生成的对象</li>\n<li>执行构造函数内部代码，给新对象添加属性</li>\n<li>如果构造函数有返回值且返回值是一个对象或一个方法，则返回该值；否则返回新生成的对象</li>\n</ol>\n<p>📌: JS::JS-Objects<br>\n🏷️: JS-Objects</p>\n\x3c!--ID: 1706844019913--\x3e\n<hr>\n<h2 id="-手写-new">❓ 手写 new<a class="anchor" href="#-手写-new"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> selfNew</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">fn</span><span style="color:#E1E4E8">, </span><span style="color:#F97583">...</span><span style="color:#FFAB70">args</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#6A737D">\t// 创建一个instance对象，该对象的原型是fn.prototype</span></span>\n<span class="line"><span style="color:#F97583">\tlet</span><span style="color:#E1E4E8"> instance </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> Object.</span><span style="color:#B392F0">create</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">fn</span><span style="color:#E1E4E8">.</span><span style="color:#79B8FF">prototype</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#6A737D">\t// 调用构造函数，使用apply，将this指向新生成的对象</span></span>\n<span class="line"><span style="color:#F97583">\tlet</span><span style="color:#E1E4E8"> res </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> fn.</span><span style="color:#B392F0">apply</span><span style="color:#E1E4E8">(instance, args);</span></span>\n<span class="line"><span style="color:#6A737D">\t// 如果fn函数有返回值，并且返回值是一个对象或方法，则返回该对象，否则返回新生成的instance对象</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#F97583"> typeof</span><span style="color:#E1E4E8"> res </span><span style="color:#F97583">===</span><span style="color:#E1E4E8"> object </span><span style="color:#F97583">||</span><span style="color:#F97583"> typeof</span><span style="color:#E1E4E8"> res </span><span style="color:#F97583">===</span><span style="color:#F97583"> function</span><span style="color:#E1E4E8"> ? </span><span style="color:#B392F0">res</span><span style="color:#E1E4E8"> : </span><span style="color:#B392F0">instance</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<p>相关：<a href="../class/class-es6-%E7%B1%BB">Class-ES6-类</a></p>',frontmatter={draft:!1,title:"Use `new` Operator-使用 new 操作符",topic:["Objects"],type:"D",tags:["JavaScript"],DateStarted:"2024-02-02T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",Datereviewed:"2024-02-02T00:00:00.000Z",reviewed:1,difficulty:null,status:null,comment:null,"linter-yaml-title-alias":"Use `new` Operator-使用 new 操作符",aliases:["Use `new` Operator-使用 new 操作符"],category:"Programming",minutes:1,words:247},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/use-new-operator-使用-new-操作符.md",url=void 0;function rawContent(){return"\n# Use `new` Operator-使用 new 操作符\n\n---\n\nBasic\n\n### 'new' 操作符实现机制\n\nBack:\n\n1. 内存中创建一个新对象\n2. 该对象内部的原型特性 (`__proto__`) 被赋值为构造函数的原型属性 (`prototype`)\n3. 调用该构造函数，构造函数内部的 `this` 指向新生成的对象\n4. 执行构造函数内部代码，给新对象添加属性\n5. 如果构造函数有返回值且返回值是一个对象或一个方法，则返回该值；否则返回新生成的对象\n\n📌: JS::JS-Objects  \n🏷️: JS-Objects\n\n\x3c!--ID: 1706844019913--\x3e\n\n---\n\n## ❓ 手写 new\n\n```javascript\nfunction selfNew(fn, ...args) {\n\t// 创建一个instance对象，该对象的原型是fn.prototype\n\tlet instance = Object.create(fn.prototype);\n\t// 调用构造函数，使用apply，将this指向新生成的对象\n\tlet res = fn.apply(instance, args);\n\t// 如果fn函数有返回值，并且返回值是一个对象或方法，则返回该对象，否则返回新生成的instance对象\n\treturn typeof res === object || typeof res === function ? res : instance;\n}\n```\n\n相关：[Class-ES6-类](../class/class-es6-类)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"use-new-operator-使用-new-操作符",text:"Use new Operator-使用 new 操作符#"},{depth:3,slug:"new-操作符实现机制",text:"’new’ 操作符实现机制#"},{depth:2,slug:"-手写-new",text:"❓ 手写 new#"}]}const Content=createComponent(((n,e,s)=>{const{layout:t,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),useNewOperator___New____=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,slug,useNewOperator___New____};