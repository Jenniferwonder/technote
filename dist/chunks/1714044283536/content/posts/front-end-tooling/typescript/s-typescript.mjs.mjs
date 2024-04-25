import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><a href="https://basarat.gitbook.io/typescript/getting-started">TypeScript Deep Dive-EN</a><br>\n<a href="https://jkchao.github.io/typescript-book-chinese/typings/generices.html#%E9%85%8D%E5%90%88-axios-%E4%BD%BF%E7%94%A8">TypeScript Deep Dive-CN</a><br>\n<a href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html">TypeScript: Documentation - TypeScript for the New Programmer</a><br>\n数据类型<br>\n<img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d44490ffdf064cf0bd17f5109b6c6844~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FOypiN7HOlUBprYUjJs_Rqw" title="https://mp.weixin.qq.com/s/OypiN7HOlUBprYUjJs_Rqw">TypeScript 是什么</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fbda750e2d15e" title="https://www.jianshu.com/p/bda750e2d15e">为什么要在 javascript 中进行静态类型检查</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F36" title="https://github.com/axuebin/articles/issues/36">TypeScript Start: 基础类型</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FKfOAu983zg8d0Uc-jhM84w" title="https://mp.weixin.qq.com/s/KfOAu983zg8d0Uc-jhM84w">TypeScript 真香系列——接口篇</a></li>\n<li><a href="https://link.juejin.cn?target=http%3A%2F%2Fwww.alloyteam.com%2F2019%2F07%2F13796%2F" title="http://www.alloyteam.com/2019/07/13796/">TypeScript 中高级应用与最佳实践</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FnvYqDhhZzbNuifxck87aNQ" title="https://mp.weixin.qq.com/s/nvYqDhhZzbNuifxck87aNQ">typescript 高级技巧</a></li>\n<li><a href="https://juejin.cn/post/6844903849166110728" title="https://juejin.cn/post/6844903849166110728">可能是你需要的 React + TypeScript 50 条规范和经验</a></li>\n<li><a href="https://juejin.cn/post/6844903485977133069" title="https://juejin.cn/post/6844903485977133069">从 JavaScript 到 TypeScript</a></li>\n<li><a href="https://juejin.cn/post/6844903641829081095" title="https://juejin.cn/post/6844903641829081095">TypeScript + 大型项目实战</a></li>\n<li><a href="https://juejin.cn/post/6844903841951924232" title="https://juejin.cn/post/6844903841951924232">TypeScript - 一种思维方式</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000009247663" title="https://segmentfault.com/a/1190000009247663">如何编写一个 d.ts 文件</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmy.oschina.net%2Ffenying%2Fblog%2F748805" title="https://my.oschina.net/fenying/blog/748805">TypeScript 的声明文件的使用与编写</a></li>\n<li><a href="https://link.juejin.cn?target=http%3A%2F%2Fimzc.me%2Fdev%2F2016%2F11%2F30%2Fwrite-d-ts-files%2F" title="http://imzc.me/dev/2016/11/30/write-d-ts-files/">TypeScript 进阶：给第三方库编写声明文件</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fjkchao.github.io%2Ftypescript-book-chinese%2Ftypings%2Fgenerices.html" title="https://jkchao.github.io/typescript-book-chinese/typings/generices.html">TypeScript 泛型</a></li>\n<li><a href="https://juejin.cn/post/6844903720967372814" title="https://juejin.cn/post/6844903720967372814">TypeScript 重构 Axios 经验分享</a></li>\n<li><a href="https://juejin.cn/post/6844903511033921543" title="https://juejin.cn/post/6844903511033921543">手把手教写 TypeScript Transformer Plugin</a></li>\n</ul>',frontmatter={title:"s-typescript",topic:null,type:null,tags:["TypeScript"],category:"Front-End Tooling",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,DateStarted:"2023-12-14T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",draft:!0,minutes:1,words:156},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/typescript/s-typescript.md",url=void 0;function rawContent(){return'## Reference\n[TypeScript Deep Dive-EN](https://basarat.gitbook.io/typescript/getting-started)  \n[TypeScript Deep Dive-CN](https://jkchao.github.io/typescript-book-chinese/typings/generices.html#%E9%85%8D%E5%90%88-axios-%E4%BD%BF%E7%94%A8)  \n[TypeScript: Documentation - TypeScript for the New Programmer](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)  \n数据类型  \n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d44490ffdf064cf0bd17f5109b6c6844~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)\n\n- [TypeScript 是什么](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FOypiN7HOlUBprYUjJs_Rqw "https://mp.weixin.qq.com/s/OypiN7HOlUBprYUjJs_Rqw")\n- [为什么要在 javascript 中进行静态类型检查](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fbda750e2d15e "https://www.jianshu.com/p/bda750e2d15e")\n- [TypeScript Start: 基础类型](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F36 "https://github.com/axuebin/articles/issues/36")\n- [TypeScript 真香系列——接口篇](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FKfOAu983zg8d0Uc-jhM84w "https://mp.weixin.qq.com/s/KfOAu983zg8d0Uc-jhM84w")\n- [TypeScript 中高级应用与最佳实践](https://link.juejin.cn?target=http%3A%2F%2Fwww.alloyteam.com%2F2019%2F07%2F13796%2F "http://www.alloyteam.com/2019/07/13796/")\n- [typescript 高级技巧](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FnvYqDhhZzbNuifxck87aNQ "https://mp.weixin.qq.com/s/nvYqDhhZzbNuifxck87aNQ")\n- [可能是你需要的 React + TypeScript 50 条规范和经验](https://juejin.cn/post/6844903849166110728 "https://juejin.cn/post/6844903849166110728")\n- [从 JavaScript 到 TypeScript](https://juejin.cn/post/6844903485977133069 "https://juejin.cn/post/6844903485977133069")\n- [TypeScript + 大型项目实战](https://juejin.cn/post/6844903641829081095 "https://juejin.cn/post/6844903641829081095")\n- [TypeScript - 一种思维方式](https://juejin.cn/post/6844903841951924232 "https://juejin.cn/post/6844903841951924232")\n- [如何编写一个 d.ts 文件](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000009247663 "https://segmentfault.com/a/1190000009247663")\n- [TypeScript 的声明文件的使用与编写](https://link.juejin.cn?target=https%3A%2F%2Fmy.oschina.net%2Ffenying%2Fblog%2F748805 "https://my.oschina.net/fenying/blog/748805")\n- [TypeScript 进阶：给第三方库编写声明文件](https://link.juejin.cn?target=http%3A%2F%2Fimzc.me%2Fdev%2F2016%2F11%2F30%2Fwrite-d-ts-files%2F "http://imzc.me/dev/2016/11/30/write-d-ts-files/")\n- [TypeScript 泛型](https://link.juejin.cn?target=https%3A%2F%2Fjkchao.github.io%2Ftypescript-book-chinese%2Ftypings%2Fgenerices.html "https://jkchao.github.io/typescript-book-chinese/typings/generices.html")\n- [TypeScript 重构 Axios 经验分享](https://juejin.cn/post/6844903720967372814 "https://juejin.cn/post/6844903720967372814")\n- [手把手教写 TypeScript Transformer Plugin](https://juejin.cn/post/6844903511033921543 "https://juejin.cn/post/6844903511033921543")'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"reference",text:"Reference#"}]}const Content=createComponent(((t,e,i)=>{const{layout:n,...p}=frontmatter;return p.file=file,p.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};