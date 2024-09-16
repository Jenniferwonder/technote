import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="primitive-and-reference-values-原始值与引用值">Primitive and Reference Values-原始值与引用值<a class="anchor" href="#primitive-and-reference-values-原始值与引用值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="primitive-values-原始值">Primitive values-原始值<a class="anchor" href="#primitive-values-原始值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Accessed by value (按值访问)\n<ul>\n<li>You are manipulating the actual value stored in the variable.</li>\n</ul>\n</li>\n<li>Copied by value\n<ul>\n<li>Changing the copied value will not change the original variable value</li>\n</ul>\n</li>\n<li>can’t have properties added to them even though attempting to do so won’t cause an error.</li>\n<li>primitive literal form</li>\n<li>\n<blockquote>\n<p>If you were to use the new keyword, JavaScript will create an Object type, but one that behaves like a primitive.</p>\n</blockquote>\n</li>\n</ul>\n<h2 id="reference-values-引用值">Reference values-引用值<a class="anchor" href="#reference-values-引用值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Accessed by reference (按引用访问)\n<ul>\n<li>You’re really working on a reference to that object rather than the actual object itself</li>\n</ul>\n</li>\n<li>Copied by reference\n<ul>\n<li>Changing the value will change the original</li>\n<li>will not independently copy the value, but only refer to the original</li>\n</ul>\n</li>\n<li>you can add, change, or delete properties and methods at any time</li>\n</ul>\n<h2 id="argument-passing-参数传递">Argument Passing 参数传递<a class="anchor" href="#argument-passing-参数传递"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>All function arguments in ECMAScript are passed by value (按值传递); the value outside of the function is copied\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C04VariablesScopeMemory-5-x88-y399.png" alt=""></li>\n</ul>\n</li>\n</ul>',frontmatter={Datereviewed:null,reviewed:null,comment:null,aliases:["Primitive and Reference Values-原始值与引用值"],draft:!1,title:"Primitive and Reference Values-原始值与引用值",topic:["Basics"],type:"D",DateStarted:"2023-07-28T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",status:["Mature"],difficulty:"Easy",category:"Programming",tags:["JavaScript"],"linter-yaml-title-alias":"Primitive and Reference Values-原始值与引用值",minutes:1,words:168},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/basics/primitive-and-reference-values-原始值与引用值.md",url=void 0;function rawContent(){return"\n# Primitive and Reference Values-原始值与引用值\n\n## Primitive values-原始值\n\n- Accessed by value (按值访问)\n  - You are manipulating the actual value stored in the variable.\n- Copied by value\n  - Changing the copied value will not change the original variable value\n- can’t have properties added to them even though attempting to do so won’t cause an error.\n- primitive literal form\n- > If you were to use the new keyword, JavaScript will create an Object type, but one that behaves like a primitive.\n\n## Reference values-引用值\n\n- Accessed by reference (按引用访问)\n  - You’re really working on a reference to that object rather than the actual object itself\n- Copied by reference\n  - Changing the value will change the original\n  - will not independently copy the value, but only refer to the original\n- you can add, change, or delete properties and methods at any time\n\n## Argument Passing 参数传递\n\n- All function arguments in ECMAScript are passed by value (按值传递); the value outside of the function is copied\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C04VariablesScopeMemory-5-x88-y399.png)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"primitive-and-reference-values-原始值与引用值",text:"Primitive and Reference Values-原始值与引用值#"},{depth:2,slug:"primitive-values-原始值",text:"Primitive values-原始值#"},{depth:2,slug:"reference-values-引用值",text:"Reference values-引用值#"},{depth:2,slug:"argument-passing-参数传递",text:"Argument Passing 参数传递#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};