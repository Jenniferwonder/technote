import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="js/object/object-property-&-value-对象属性与值.md",collection="posts",slug="js/object/object-property--value-对象属性与值",body="\n# Object Property & Value-对象属性与值\n\n---\n\nBasic\n\n### Access Object value\n\nBack:\n\n- dot notation\n- bracket notation: `[' ']` - can be used when property name is _invalid_ to be accessed by dot - can be used when property name is _dynamically_ changing  \n  📌: JS::JS-Objects  \n  🏷️: JS-Objects\n  \x3c!--SR:!2024-02-06,4,270--\x3e\n  \x3c!--ID: 1706850359403--\x3e\n\n---\n\n---\n\nBasic\n\n### Access Object Properties (获取属性)\n\nBack:\n\n#### 获取所有可枚举的实例属性\n\n- `const keys = Object.keys(obj); // return an array of keys`\n\n#### 获取所有实例属性，无论是否可枚举\n\n- `Object.getOwnPropertyNames()`\n\n#### 获取所有 Symbol 类型属性\n\n- `Object.getOwnPropertySymbols()`\n\x3c!--ID: 1706850359414--\x3e\n\n---\n\n---\n\nBasic\n\n### 属性枚举顺序\n\nBack:\n\n- 不确定的\n  - for-in 循环和 `Object.keys()`\n- 确定性的 - 先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中定义的键以它们逗号分隔的顺序插入 - `Object.getOwnPropertyNames()` - `Object.getOwnPropertySymbols()` - `Object.assign()`\n  \x3c!--SR:!2024-02-05,3,250--\x3e\n  \x3c!--ID: 1706850359423--\x3e\n\n---\n\n---\n\nBasic\n\n## Identify Property Existence (判断属性是否存在)\n\nBack:\n\n#### Identify whether a Property is in an Object Instance or Prototype\n\n- `(name in person1); // true`\n\n#### Identify whether a Property is in an Object Instance\n\n- `hasOwnProperty(propertyName)`\n\n#### Identify whether a Property is in an Object Prototype\n\n- `hasPrototypeProperty(person, name); // true`\n\x3c!--ID: 1706850359433--\x3e\n\n---\n\n---\n\nBasic\n\n### Property Types & Descriptors 属性类型与描述符\n\nBack:\n\n#### 属性类型\n\n- 数据属性-Data Properties\n- 访问器属性-Accessor Properties\n\n#### 数据属性描述符\n\n- Configurable\n  - 表示属性是否可以通过 delete 删除并重新定义\n  - 是否可以修改它的特性\n  - 是否可以把它改为访问器属性\n  - 默认 true\n- Enumerable\n  - 属性是否可以通过 for-in 循环返回\n  - 默认 true\n  - Identify whether a Property is Enumerable\n    - `propertyIsEnumerable(propertyName)`\n- Writable\n- Value\n\n#### 访问器属性描述符\n\n- Configurable\n- Enumerable\n- Get (获取函数，非必需)\n  - 读取访问器属性时，会调用\n- Set (设置函数，非必需) - 写入访问器属性时，会调用 - 只有一个设置函数的属性 是不能读取的 - 非严格模式下读取会返回 undefined - 严格模式下会抛出错误\n  - 使用场景 - 设置一个属性值会导致一些其他变化发生 - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1692022911410image.png)\n  \x3c!--ID: 1706850359442--\x3e\n\n---\n\n---\n\nBasic\n\n### 定义属性描述符\n\n- `Object.defineProperty()`\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692022103611.png)\n- `Object.defineProperties()` - 可以通过多个描述符/一个描述符对象一次性定义多个属性 - 接收两个参数 - 要为之添加或修改属性的对象 - 另一个描述符对象\n\x3c!--ID: 1706850359450--\x3e\n\n---\n\n---\n\nBasic\n\n### 读取属性描述符\n\n- `Object.getOwnPropertyDescriptor()`\n  - 取得指定属性的属性描述符\n  - 两个参数\n    - 属性所在的对象\n    - 要取得其描述符的属性名\n  - 返回值\n    - 指定属性的描述符对象\n- `Object.getOwnPropertyDescriptors()` (ECMAScript 2017 新增) - 取得所有属性的描述符对象 - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692023527551.png)\n\x3c!--ID: 1706850359459--\x3e\n\n---\n",data={title:"Object Property & Value-对象属性与值",DateStarted:new Date(17064864e5),draft:!1,tags:["JavaScript"],category:"Programming"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/object-property-&-value-对象属性与值.md",rawData:void 0},html='<h1 id="object-property--value-对象属性与值">Object Property &#x26; Value-对象属性与值<a class="anchor" href="#object-property--value-对象属性与值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<hr>\n<p>Basic</p>\n<h3 id="access-object-value">Access Object value<a class="anchor" href="#access-object-value"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>dot notation</li>\n<li>bracket notation: <code>[\' \']</code> - can be used when property name is <em>invalid</em> to be accessed by dot - can be used when property name is <em>dynamically</em> changing<br>\n📌: JS::JS-Objects<br>\n🏷️: JS-Objects\n\x3c!--SR:!2024-02-06,4,270--\x3e\n\x3c!--ID: 1706850359403--\x3e\n</li>\n</ul>\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="access-object-properties-获取属性">Access Object Properties (获取属性)<a class="anchor" href="#access-object-properties-获取属性"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<h4 id="获取所有可枚举的实例属性">获取所有可枚举的实例属性<a class="anchor" href="#获取所有可枚举的实例属性"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>const keys = Object.keys(obj); // return an array of keys</code></li>\n</ul>\n<h4 id="获取所有实例属性无论是否可枚举">获取所有实例属性，无论是否可枚举<a class="anchor" href="#获取所有实例属性无论是否可枚举"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>Object.getOwnPropertyNames()</code></li>\n</ul>\n<h4 id="获取所有-symbol-类型属性">获取所有 Symbol 类型属性<a class="anchor" href="#获取所有-symbol-类型属性"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>Object.getOwnPropertySymbols()</code></li>\n</ul>\n\x3c!--ID: 1706850359414--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="属性枚举顺序">属性枚举顺序<a class="anchor" href="#属性枚举顺序"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>不确定的\n<ul>\n<li>for-in 循环和 <code>Object.keys()</code></li>\n</ul>\n</li>\n<li>确定性的 - 先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中定义的键以它们逗号分隔的顺序插入 - <code>Object.getOwnPropertyNames()</code> - <code>Object.getOwnPropertySymbols()</code> - <code>Object.assign()</code>\n\x3c!--SR:!2024-02-05,3,250--\x3e\n\x3c!--ID: 1706850359423--\x3e\n</li>\n</ul>\n<hr>\n<hr>\n<p>Basic</p>\n<h2 id="identify-property-existence-判断属性是否存在">Identify Property Existence (判断属性是否存在)<a class="anchor" href="#identify-property-existence-判断属性是否存在"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>Back:</p>\n<h4 id="identify-whether-a-property-is-in-an-object-instance-or-prototype">Identify whether a Property is in an Object Instance or Prototype<a class="anchor" href="#identify-whether-a-property-is-in-an-object-instance-or-prototype"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>(name in person1); // true</code></li>\n</ul>\n<h4 id="identify-whether-a-property-is-in-an-object-instance">Identify whether a Property is in an Object Instance<a class="anchor" href="#identify-whether-a-property-is-in-an-object-instance"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>hasOwnProperty(propertyName)</code></li>\n</ul>\n<h4 id="identify-whether-a-property-is-in-an-object-prototype">Identify whether a Property is in an Object Prototype<a class="anchor" href="#identify-whether-a-property-is-in-an-object-prototype"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>hasPrototypeProperty(person, name); // true</code></li>\n</ul>\n\x3c!--ID: 1706850359433--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="property-types--descriptors-属性类型与描述符">Property Types &#x26; Descriptors 属性类型与描述符<a class="anchor" href="#property-types--descriptors-属性类型与描述符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<h4 id="属性类型">属性类型<a class="anchor" href="#属性类型"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>数据属性-Data Properties</li>\n<li>访问器属性-Accessor Properties</li>\n</ul>\n<h4 id="数据属性描述符">数据属性描述符<a class="anchor" href="#数据属性描述符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>Configurable\n<ul>\n<li>表示属性是否可以通过 delete 删除并重新定义</li>\n<li>是否可以修改它的特性</li>\n<li>是否可以把它改为访问器属性</li>\n<li>默认 true</li>\n</ul>\n</li>\n<li>Enumerable\n<ul>\n<li>属性是否可以通过 for-in 循环返回</li>\n<li>默认 true</li>\n<li>Identify whether a Property is Enumerable\n<ul>\n<li><code>propertyIsEnumerable(propertyName)</code></li>\n</ul>\n</li>\n</ul>\n</li>\n<li>Writable</li>\n<li>Value</li>\n</ul>\n<h4 id="访问器属性描述符">访问器属性描述符<a class="anchor" href="#访问器属性描述符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>Configurable</li>\n<li>Enumerable</li>\n<li>Get (获取函数，非必需)\n<ul>\n<li>读取访问器属性时，会调用</li>\n</ul>\n</li>\n<li>Set (设置函数，非必需) - 写入访问器属性时，会调用 - 只有一个设置函数的属性 是不能读取的 - 非严格模式下读取会返回 undefined - 严格模式下会抛出错误\n<ul>\n<li>使用场景 - 设置一个属性值会导致一些其他变化发生 - <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1692022911410image.png" alt=""></li>\n</ul>\n\x3c!--ID: 1706850359442--\x3e\n</li>\n</ul>\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="定义属性描述符">定义属性描述符<a class="anchor" href="#定义属性描述符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>Object.defineProperty()</code>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692022103611.png" alt=""></li>\n</ul>\n</li>\n<li><code>Object.defineProperties()</code> - 可以通过多个描述符/一个描述符对象一次性定义多个属性 - 接收两个参数 - 要为之添加或修改属性的对象 - 另一个描述符对象</li>\n</ul>\n\x3c!--ID: 1706850359450--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="读取属性描述符">读取属性描述符<a class="anchor" href="#读取属性描述符"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><code>Object.getOwnPropertyDescriptor()</code>\n<ul>\n<li>取得指定属性的属性描述符</li>\n<li>两个参数\n<ul>\n<li>属性所在的对象</li>\n<li>要取得其描述符的属性名</li>\n</ul>\n</li>\n<li>返回值\n<ul>\n<li>指定属性的描述符对象</li>\n</ul>\n</li>\n</ul>\n</li>\n<li><code>Object.getOwnPropertyDescriptors()</code> (ECMAScript 2017 新增) - 取得所有属性的描述符对象 - <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692023527551.png" alt=""></li>\n</ul>\n\x3c!--ID: 1706850359459--\x3e\n<hr>',frontmatter={draft:!1,aliases:["Object Property & Value-对象属性与值"],title:"Object Property & Value-对象属性与值",topic:["Objects"],type:"D",tags:["JavaScript"],DateStarted:"2024-01-29T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",Datereviewed:"2024-01-29T00:00:00.000Z",reviewed:1,difficulty:"Good",status:["ToUseMore"],comment:null,"linter-yaml-title-alias":"Object Property & Value-对象属性与值",category:"Programming",minutes:3,words:572},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/object-property-&-value-对象属性与值.md",url=void 0;function rawContent(){return"\n# Object Property & Value-对象属性与值\n\n---\n\nBasic\n\n### Access Object value\n\nBack:\n\n- dot notation\n- bracket notation: `[' ']` - can be used when property name is _invalid_ to be accessed by dot - can be used when property name is _dynamically_ changing  \n  📌: JS::JS-Objects  \n  🏷️: JS-Objects\n  \x3c!--SR:!2024-02-06,4,270--\x3e\n  \x3c!--ID: 1706850359403--\x3e\n\n---\n\n---\n\nBasic\n\n### Access Object Properties (获取属性)\n\nBack:\n\n#### 获取所有可枚举的实例属性\n\n- `const keys = Object.keys(obj); // return an array of keys`\n\n#### 获取所有实例属性，无论是否可枚举\n\n- `Object.getOwnPropertyNames()`\n\n#### 获取所有 Symbol 类型属性\n\n- `Object.getOwnPropertySymbols()`\n\x3c!--ID: 1706850359414--\x3e\n\n---\n\n---\n\nBasic\n\n### 属性枚举顺序\n\nBack:\n\n- 不确定的\n  - for-in 循环和 `Object.keys()`\n- 确定性的 - 先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中定义的键以它们逗号分隔的顺序插入 - `Object.getOwnPropertyNames()` - `Object.getOwnPropertySymbols()` - `Object.assign()`\n  \x3c!--SR:!2024-02-05,3,250--\x3e\n  \x3c!--ID: 1706850359423--\x3e\n\n---\n\n---\n\nBasic\n\n## Identify Property Existence (判断属性是否存在)\n\nBack:\n\n#### Identify whether a Property is in an Object Instance or Prototype\n\n- `(name in person1); // true`\n\n#### Identify whether a Property is in an Object Instance\n\n- `hasOwnProperty(propertyName)`\n\n#### Identify whether a Property is in an Object Prototype\n\n- `hasPrototypeProperty(person, name); // true`\n\x3c!--ID: 1706850359433--\x3e\n\n---\n\n---\n\nBasic\n\n### Property Types & Descriptors 属性类型与描述符\n\nBack:\n\n#### 属性类型\n\n- 数据属性-Data Properties\n- 访问器属性-Accessor Properties\n\n#### 数据属性描述符\n\n- Configurable\n  - 表示属性是否可以通过 delete 删除并重新定义\n  - 是否可以修改它的特性\n  - 是否可以把它改为访问器属性\n  - 默认 true\n- Enumerable\n  - 属性是否可以通过 for-in 循环返回\n  - 默认 true\n  - Identify whether a Property is Enumerable\n    - `propertyIsEnumerable(propertyName)`\n- Writable\n- Value\n\n#### 访问器属性描述符\n\n- Configurable\n- Enumerable\n- Get (获取函数，非必需)\n  - 读取访问器属性时，会调用\n- Set (设置函数，非必需) - 写入访问器属性时，会调用 - 只有一个设置函数的属性 是不能读取的 - 非严格模式下读取会返回 undefined - 严格模式下会抛出错误\n  - 使用场景 - 设置一个属性值会导致一些其他变化发生 - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1692022911410image.png)\n  \x3c!--ID: 1706850359442--\x3e\n\n---\n\n---\n\nBasic\n\n### 定义属性描述符\n\n- `Object.defineProperty()`\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692022103611.png)\n- `Object.defineProperties()` - 可以通过多个描述符/一个描述符对象一次性定义多个属性 - 接收两个参数 - 要为之添加或修改属性的对象 - 另一个描述符对象\n\x3c!--ID: 1706850359450--\x3e\n\n---\n\n---\n\nBasic\n\n### 读取属性描述符\n\n- `Object.getOwnPropertyDescriptor()`\n  - 取得指定属性的属性描述符\n  - 两个参数\n    - 属性所在的对象\n    - 要取得其描述符的属性名\n  - 返回值\n    - 指定属性的描述符对象\n- `Object.getOwnPropertyDescriptors()` (ECMAScript 2017 新增) - 取得所有属性的描述符对象 - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692023527551.png)\n\x3c!--ID: 1706850359459--\x3e\n\n---\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"object-property--value-对象属性与值",text:"Object Property & Value-对象属性与值#"},{depth:3,slug:"access-object-value",text:"Access Object value#"},{depth:3,slug:"access-object-properties-获取属性",text:"Access Object Properties (获取属性)#"},{depth:4,slug:"获取所有可枚举的实例属性",text:"获取所有可枚举的实例属性#"},{depth:4,slug:"获取所有实例属性无论是否可枚举",text:"获取所有实例属性，无论是否可枚举#"},{depth:4,slug:"获取所有-symbol-类型属性",text:"获取所有 Symbol 类型属性#"},{depth:3,slug:"属性枚举顺序",text:"属性枚举顺序#"},{depth:2,slug:"identify-property-existence-判断属性是否存在",text:"Identify Property Existence (判断属性是否存在)#"},{depth:4,slug:"identify-whether-a-property-is-in-an-object-instance-or-prototype",text:"Identify whether a Property is in an Object Instance or Prototype#"},{depth:4,slug:"identify-whether-a-property-is-in-an-object-instance",text:"Identify whether a Property is in an Object Instance#"},{depth:4,slug:"identify-whether-a-property-is-in-an-object-prototype",text:"Identify whether a Property is in an Object Prototype#"},{depth:3,slug:"property-types--descriptors-属性类型与描述符",text:"Property Types & Descriptors 属性类型与描述符#"},{depth:4,slug:"属性类型",text:"属性类型#"},{depth:4,slug:"数据属性描述符",text:"数据属性描述符#"},{depth:4,slug:"访问器属性描述符",text:"访问器属性描述符#"},{depth:3,slug:"定义属性描述符",text:"定义属性描述符#"},{depth:3,slug:"读取属性描述符",text:"读取属性描述符#"}]}const Content=createComponent(((n,e,t)=>{const{layout:r,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),objectProperty__Value_______=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,objectProperty__Value_______,slug};