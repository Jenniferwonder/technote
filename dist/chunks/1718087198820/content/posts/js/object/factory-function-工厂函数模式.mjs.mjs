import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="factory-function-工厂函数模式">Factory Function-工厂函数模式<a class="anchor" href="#factory-function-工厂函数模式"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h3 id="use-factory-function-to-create-object">Use Factory Function to Create Object<a class="anchor" href="#use-factory-function-to-create-object"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Factory Function</span></span>\n<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> createCircle</span><span style="color:#E1E4E8">(</span><span style="color:#FFAB70">radius</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tradius,</span></span>\n<span class="line"><span style="color:#B392F0">\t\tdraw</span><span style="color:#E1E4E8">: </span><span style="color:#F97583">function</span><span style="color:#E1E4E8"> () {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\tconsole.</span><span style="color:#B392F0">log</span><span style="color:#E1E4E8">(draw);</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t},</span></span>\n<span class="line"><span style="color:#E1E4E8">\t};</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> circle</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> createCircle</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">1</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"></span></code></pre>\n<h3 id="工厂模式缺点">工厂模式缺点<a class="anchor" href="#工厂模式缺点"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>无法判断新创建的对象是什么类型 (<a href="../Object-Types-instanceof-%E6%A0%87%E8%AF%86%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B">Object Types (instanceof 标识对象类型)</a></li>\n</ul>',frontmatter={draft:!1,aliases:["Factory Function-工厂函数模式"],title:"Factory Function-工厂函数模式",topic:["Objects"],type:"D",tags:["JavaScript"],DateStarted:"2024-02-02T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",Datereviewed:"2024-02-02T00:00:00.000Z",reviewed:2,difficulty:null,status:null,comment:null,"linter-yaml-title-alias":"Factory Function-工厂函数模式",category:"Programming",minutes:1,words:64},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/object/factory-function-工厂函数模式.md",url=void 0;function rawContent(){return"\n# Factory Function-工厂函数模式\n\n### Use Factory Function to Create Object\n\n```js\n// Factory Function\nfunction createCircle(radius) {\n\treturn {\n\t\tradius,\n\t\tdraw: function () {\n\t\t\tconsole.log(draw);\n\t\t},\n\t};\n}\nconst circle = createCircle(1);\n```\n\n### 工厂模式缺点\n\n- 无法判断新创建的对象是什么类型 ([Object Types (instanceof 标识对象类型)](../Object-Types-instanceof-标识对象类型)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"factory-function-工厂函数模式",text:"Factory Function-工厂函数模式#"},{depth:3,slug:"use-factory-function-to-create-object",text:"Use Factory Function to Create Object#"},{depth:3,slug:"工厂模式缺点",text:"工厂模式缺点#"}]}const Content=createComponent(((n,t,a)=>{const{layout:e,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};