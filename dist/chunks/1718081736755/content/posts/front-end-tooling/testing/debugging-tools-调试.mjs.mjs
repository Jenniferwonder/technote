import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="set-up">Set-up<a class="anchor" href="#set-up"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>HTML, CSS, Live-server, Console</li>\n<li>’use strict’: add at the beginning of script file to enable developer mode</li>\n</ul>\n<h2 id="browser">Browser<a class="anchor" href="#browser"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="shortcuts">Shortcuts<a class="anchor" href="#shortcuts"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="console">Console<a class="anchor" href="#console"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>console.log(typeof ..)\n<ul>\n<li>To print out the data type in the console</li>\n</ul>\n</li>\n<li>console.warn</li>\n<li>console.error</li>\n<li>console.table</li>\n<li>console.dir(functionName)</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">time</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"filter array"</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> visibleTodos</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> filterTodos</span><span style="color:#E1E4E8">(todos, tab);</span></span>\n<span class="line"><span style="color:#E1E4E8">console.</span><span style="color:#B392F0">timeEnd</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"filter array"</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"></span></code></pre>\n<p>If the overall logged time adds up to a significant amount (say, <code>1ms</code> or more), it might make sense to memoize that calculation > [[Front-End/React/Private/learn-react/src/05-more-hooks/useMemo/README|useMemo]]</p>',frontmatter={topic:null,category:"Front-End Tooling",Datereviewed:null,reviewed:null,difficulty:null,comment:null,type:null,title:"debugging-tools-调试",tags:["Testing"],DateStarted:"2022-11-30T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,draft:!0,minutes:1,words:57},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/testing/debugging-tools-调试.md",url=void 0;function rawContent(){return'\n## Set-up\n\n- HTML, CSS, Live-server, Console\n- \'use strict\': add at the beginning of script file to enable developer mode\n\n## Browser\n\n### Shortcuts\n\n### Console\n\n- console.log(typeof ..)\n  - To print out the data type in the console\n- console.warn\n- console.error\n- console.table\n- console.dir(functionName)\n\n```js\nconsole.time("filter array");\nconst visibleTodos = filterTodos(todos, tab);\nconsole.timeEnd("filter array");\n```\n\nIf the overall logged time adds up to a significant amount (say, `1ms` or more), it might make sense to memoize that calculation > [[Front-End/React/Private/learn-react/src/05-more-hooks/useMemo/README|useMemo]]\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"set-up",text:"Set-up#"},{depth:2,slug:"browser",text:"Browser#"},{depth:3,slug:"shortcuts",text:"Shortcuts#"},{depth:3,slug:"console",text:"Console#"}]}const Content=createComponent(((e,n,o)=>{const{layout:t,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};