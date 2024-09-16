import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<blockquote>\n<p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON">JSON - JavaScript | MDN</a> ><a href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON">Working with JSON - Learn web development | MDN</a> ><a href="https://developer.mozilla.org/en-US/docs/Glossary/JSON">JSON - MDN Web Docs Glossary: Definitions of Web-related terms | MDN</a></p>\n</blockquote>\n<h2 id="tool">Tool<a class="anchor" href="#tool"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>⭐<a href="https://jsonplaceholder.typicode.com/">JSONPlaceholder - Free Fake REST API</a></li>\n<li>🚀<a href="https://my-json-server.typicode.com/">My JSON Server - Fake online REST server for teams</a></li>\n<li><a href="https://www.jsont.run/">JSONT</a>| A simple and powerful online JSON formatting tool</li>\n</ul>\n<h2 id="what-is-json">What is JSON?<a class="anchor" href="#what-is-json"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>JavaScript Object Notation (JSON): 对象表示法</li>\n<li>a standard text-based format for representing structured data based on JavaScript object syntax.</li>\n<li>commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, or vice versa)</li>\n<li>JSON can represent numbers, booleans, strings, <code>null</code>, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects).</li>\n<li>JSON exists as a <strong>string</strong> — useful when you want to transmit data across a network.</li>\n<li>JSON needs to be converted to a native JavaScript Object when you want to access the data — Using built-in Object <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON">JSON</a></li>\n</ul>\n<h2 id="obtain-json">Obtain JSON<a class="anchor" href="#obtain-json"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Fake JSON data: <a href="https://jsonplaceholder.typicode.com">https://jsonplaceholder.typicode.com</a></li>\n<li>To obtain the JSON, we use an API called <a href="https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API">Fetch</a>.\n<ul>\n<li>This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.</li>\n</ul>\n</li>\n</ul>\n<h2 id="parse-json">Parse JSON<a class="anchor" href="#parse-json"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="create-json">Create JSON<a class="anchor" href="#create-json"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="jsonstringify-有什么缺点">JSON.stringify 有什么缺点？<a class="anchor" href="#jsonstringify-有什么缺点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p><code>JSON.stringify()</code>是一个将 JavaScript 对象转换为 JSON 字符串的方法。尽管它在许多情况下非常有用，但它确实存在一些限制和缺点：</p>\n<ol>\n<li>循环引用：<code>JSON.stringify()</code>无法处理具有循环引用的对象。如果一个对象的属性直接或间接引用了自身，<code>JSON.stringify()</code>将抛出一个错误，表示存在循环引用。</li>\n<li><code>undefined</code>、函数和 Symbol 忽略：<code>JSON.stringify()</code>不会序列化对象中的<code>undefined</code>、函数和 Symbol 类型的属性。这些属性将被忽略，不会出现在生成的 JSON 字符串中，单独转换则会返回<code>undefined</code>。</li>\n<li>丢失原型链：在对象序列化后，原型链上的属性和方法将丢失。只有对象自身的可枚举属性会被序列化。因此，在反序列化（使用<code>JSON.parse()</code>）后，原始对象的原型链信息将不复存在。</li>\n<li>日期对象处理：当使用<code>JSON.stringify()</code>序列化日期对象时，日期对象会被转换为它们的 ISO 字符串表示形式。在反序列化时，这些日期将被视为普通字符串，而不是日期对象。</li>\n<li>非数组和非对象的值：对于不是数组或对象的顶层值（例如：字符串、数字、布尔值等），<code>JSON.stringify()</code>会直接返回其对应的 JSON 表示，而不会将其包装在对象或数组中。</li>\n</ol>',frontmatter={type:null,Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"json",tags:["JavaScript"],DateStarted:"2022-12-05T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,category:"Programming",topic:["DataStore"],draft:!0,minutes:3,words:555},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/data-fetching/json.md",url=void 0;function rawContent(){return"\n> [JSON - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) >[Working with JSON - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) >[JSON - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/JSON)\n\n## Tool\n\n- ⭐[JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/)\n- 🚀[My JSON Server - Fake online REST server for teams](https://my-json-server.typicode.com/)\n- [JSONT](https://www.jsont.run/)| A simple and powerful online JSON formatting tool\n\n## What is JSON?\n\n- JavaScript Object Notation (JSON): 对象表示法\n- a standard text-based format for representing structured data based on JavaScript object syntax.\n- commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, or vice versa)\n- JSON can represent numbers, booleans, strings, `null`, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects).\n- JSON exists as a **string** — useful when you want to transmit data across a network.\n- JSON needs to be converted to a native JavaScript Object when you want to access the data -- Using built-in Object [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)\n\n## Obtain JSON\n\n- Fake JSON data: https://jsonplaceholder.typicode.com\n- To obtain the JSON, we use an API called [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).\n  - This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.\n\n## Parse JSON\n\n## Create JSON\n\n\n### JSON.stringify 有什么缺点？\n`JSON.stringify()`是一个将 JavaScript 对象转换为 JSON 字符串的方法。尽管它在许多情况下非常有用，但它确实存在一些限制和缺点：\n1. 循环引用：`JSON.stringify()`无法处理具有循环引用的对象。如果一个对象的属性直接或间接引用了自身，`JSON.stringify()`将抛出一个错误，表示存在循环引用。\n2. `undefined`、函数和 Symbol 忽略：`JSON.stringify()`不会序列化对象中的`undefined`、函数和 Symbol 类型的属性。这些属性将被忽略，不会出现在生成的 JSON 字符串中，单独转换则会返回`undefined`。\n3. 丢失原型链：在对象序列化后，原型链上的属性和方法将丢失。只有对象自身的可枚举属性会被序列化。因此，在反序列化（使用`JSON.parse()`）后，原始对象的原型链信息将不复存在。\n4. 日期对象处理：当使用`JSON.stringify()`序列化日期对象时，日期对象会被转换为它们的 ISO 字符串表示形式。在反序列化时，这些日期将被视为普通字符串，而不是日期对象。\n5. 非数组和非对象的值：对于不是数组或对象的顶层值（例如：字符串、数字、布尔值等），`JSON.stringify()`会直接返回其对应的 JSON 表示，而不会将其包装在对象或数组中。\n\n\n\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"tool",text:"Tool#"},{depth:2,slug:"what-is-json",text:"What is JSON?#"},{depth:2,slug:"obtain-json",text:"Obtain JSON#"},{depth:2,slug:"parse-json",text:"Parse JSON#"},{depth:2,slug:"create-json",text:"Create JSON#"},{depth:3,slug:"jsonstringify-有什么缺点",text:"JSON.stringify 有什么缺点？#"}]}const Content=createComponent(((e,t,n)=>{const{layout:a,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};