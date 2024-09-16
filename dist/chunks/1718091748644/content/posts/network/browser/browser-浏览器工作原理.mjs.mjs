import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="what-is-browser">What is Browser<a class="anchor" href="#what-is-browser"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>Mix documents to render web pages</p>\n<ul>\n<li><a href="http://taligarsiel.com/Projects/howbrowserswork1.htm">How browsers work</a>\n<ul>\n<li>你需要了解一下浏览器是怎么工作的，所以，你必需要看</li>\n<li>这篇文章受众之大，后来被人重新整理并发布为 <a href="https://web.dev/howbrowserswork/">How browsers work</a></li>\n<li>还包括中文版。这篇文章非常非常长，所以，你要有耐心看完。</li>\n<li>精简版： <a href="https://coolshell.cn/articles/9666.html">浏览器的渲染原理简介 | 酷 壳 - CoolShell</a></li>\n</ul>\n</li>\n<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F53913989" title="https://zhuanlan.zhihu.com/p/53913989">深入浅出浏览器渲染原理</a></li>\n<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.html5rocks.com%2Fzh%2Ftutorials%2Finternals%2Fhowbrowserswork%2F" title="https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/">浏览器的工作原理：新式网络浏览器幕后揭秘</a></li>\n<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.zeolearn.com%2Fmagazine%2Fdifferent-types-of-observers-supported-by-modern-browsers" title="https://www.zeolearn.com/magazine/different-types-of-observers-supported-by-modern-browsers">Different Types Of Observers Supported By Modern Browsers</a></li>\n</ul>\n<h2 id="browser-devtools">Browser DevTools<a class="anchor" href="#browser-devtools"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<blockquote>\n<p><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools">What are browser developer tools? - Learn web development | MDN</a></p>\n</blockquote>\n<h4 id="chrome-extensions">Chrome Extensions<a class="anchor" href="#chrome-extensions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>Print Friendly &#x26; PDF</li>\n</ul>',frontmatter={type:"D",category:"Network",Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"browser-浏览器工作原理",tags:["Network","Browser"],topic:["Browser"],DateStarted:"2023-03-06T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,draft:!0,minutes:1,words:149},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/browser/browser-浏览器工作原理.md",url=void 0;function rawContent(){return'\n## What is Browser\n\nMix documents to render web pages\n\n- [How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)\n  - 你需要了解一下浏览器是怎么工作的，所以，你必需要看\n  - 这篇文章受众之大，后来被人重新整理并发布为 [How browsers work](https://web.dev/howbrowserswork/)\n  - 还包括中文版。这篇文章非常非常长，所以，你要有耐心看完。\n  - 精简版： [浏览器的渲染原理简介 | 酷 壳 - CoolShell](https://coolshell.cn/articles/9666.html)\n- [深入浅出浏览器渲染原理](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F53913989 "https://zhuanlan.zhihu.com/p/53913989")\n- [浏览器的工作原理：新式网络浏览器幕后揭秘](https://link.juejin.cn/?target=https%3A%2F%2Fwww.html5rocks.com%2Fzh%2Ftutorials%2Finternals%2Fhowbrowserswork%2F "https://www.html5rocks.com/zh/tutorials/internals/howbrowserswork/")\n- [Different Types Of Observers Supported By Modern Browsers](https://link.juejin.cn/?target=https%3A%2F%2Fwww.zeolearn.com%2Fmagazine%2Fdifferent-types-of-observers-supported-by-modern-browsers "https://www.zeolearn.com/magazine/different-types-of-observers-supported-by-modern-browsers")\n\n## Browser DevTools\n\n> [What are browser developer tools? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_are_browser_developer_tools)\n\n#### Chrome Extensions\n\n- Print Friendly & PDF\n\n\n\n\n\n\n\n\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"what-is-browser",text:"What is Browser#"},{depth:2,slug:"browser-devtools",text:"Browser DevTools#"},{depth:4,slug:"chrome-extensions",text:"Chrome Extensions#"}]}const Content=createComponent(((e,r,o)=>{const{layout:t,...n}=frontmatter;return n.file=file,n.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};