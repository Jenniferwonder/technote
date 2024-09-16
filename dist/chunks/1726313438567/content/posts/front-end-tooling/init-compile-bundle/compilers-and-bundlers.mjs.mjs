import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="scope">Scope<a class="anchor" href="#scope"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="Vite">Vite</a></li>\n<li><a href="Parcel-and-Webpack-Bug-Fix">Parcel and Webpack Bug Fix</a></li>\n</ul>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df3cf7bce9c4475db94aa28556e73886~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p>\n<h3 id="41-webpack">4.1 Webpack<a class="anchor" href="#41-webpack"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F38" title="https://github.com/axuebin/articles/issues/38">前端工程师都得掌握的 webpack Loader</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FNO5jZfoHZbjOwR8qiWnXmw" title="https://mp.weixin.qq.com/s/NO5jZfoHZbjOwR8qiWnXmw">webpack loader 从上手到理解系列：vue-loader</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FalIKsKkGRU_yyjpeV8i0og" title="https://mp.weixin.qq.com/s/alIKsKkGRU_yyjpeV8i0og">webpack loader 从上手到理解系列：style-loader</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI0MTUxOTE5NQ%3D%3D%26mid%3D2247484030%26idx%3D1%26sn%3Dd630d4b3995bbfd50f99e781074acfeb" title="https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&#x26;mid=2247484030&#x26;idx=1&#x26;sn=d630d4b3995bbfd50f99e781074acfeb">一文掌握 Webpack 编译流程</a></li>\n<li><a href="https://juejin.cn/post/6844903617971879949" title="https://juejin.cn/post/6844903617971879949">手把手教你撸一个简易的 webpack</a></li>\n<li><a href="https://juejin.cn/post/6844903588607557639" title="https://juejin.cn/post/6844903588607557639">带你走进 webpack 世界，成为 webpack 头号玩家。</a></li>\n<li><a href="https://juejin.cn/post/6844903853905674248" title="https://juejin.cn/post/6844903853905674248">关于 webpack4 的 14 个知识点,童叟无欺</a></li>\n<li><a href="https://juejin.cn/post/6844903555673882632" title="https://juejin.cn/post/6844903555673882632">手把手教你撸一个 Webpack Loader</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fdiverse.space%2F2018%2F05%2Fbetter-tree-shaking-with-scope-analysis" title="https://diverse.space/2018/05/better-tree-shaking-with-scope-analysis">webpack 如何通过作用域分析消除无用代码</a></li>\n<li><a href="https://juejin.cn/post/6844903693070909447" title="https://juejin.cn/post/6844903693070909447">【webpack 进阶】你真的掌握了 loader 么？- loader 十问</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.timsrc.com%2Farticle%2F2%2Fwebpack-book" title="https://www.timsrc.com/article/2/webpack-book">Webpack 小书</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2F879479119%2F879479119.github.io%2Fissues%2F5" title="https://github.com/879479119/879479119.github.io/issues/5">聊一聊 webpack-dev-server 和其中 socket，HMR 的实现</a></li>\n<li><a href="https://link.juejin.cn?target=http%3A%2F%2Flouiszhai.github.io%2F2019%2F01%2F04%2Fwebpack4" title="http://louiszhai.github.io/2019/01/04/webpack4">使用 webpack4 提升 180%编译速度</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F26710831" title="https://zhuanlan.zhihu.com/p/26710831">Webpack 大法之 Code Splitting</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2F2L9Y0pdwT8U2kXHFlPA" title="https://mp.weixin.qq.com/s/2L9Y0pdwT8U2kXHFlPA">轻松理解 webpack 热更新原理</a></li>\n<li><a href="https://juejin.cn/post/6844904008432222215" title="https://juejin.cn/post/6844904008432222215">轻松理解 webpack 热更新原理</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fchampyin.com%2F2020%2F01%2F12%2F%25E6%258F%25AD%25E7%25A7%2598webpack-plugin%2F" title="https://champyin.com/2020/01/12/%E6%8F%AD%E7%A7%98webpack-plugin/">揭秘 webpack plugin</a></li>\n</ul>\n<h3 id="42-babel">4.2 Babel<a class="anchor" href="#42-babel"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FC-WmM5tjfc3r4sB52C4R0Q" title="https://mp.weixin.qq.com/s/C-WmM5tjfc3r4sB52C4R0Q">一篇文章了解前端开发必须懂的 Babel</a></li>\n<li><a href="https://juejin.cn/post/6844904008679686152" title="https://juejin.cn/post/6844904008679686152">不容错过的 Babel7 知识</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.zoo.team%2Farticle%2Fbabel" title="https://www.zoo.team/article/babel">前端工程师需要了解的 Babel 知识</a></li>\n<li><a href="https://juejin.cn/post/6844903956905197576" title="https://juejin.cn/post/6844903956905197576">深入浅出 Babel 上篇：架构和原理 + 实战</a></li>\n<li><a href="https://juejin.cn/post/6844903961820921869" title="https://juejin.cn/post/6844903961820921869">深入浅出 Babel 下篇：既生 Plugin 何生 Macros</a></li>\n<li><a href="https://juejin.cn/post/6844904079118827533" title="https://juejin.cn/post/6844904079118827533">前端工程师的自我修养-关于 Babel 那些事儿</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000017241258" title="https://segmentfault.com/a/1190000017241258">前端与编译原理——用 JS 写一个 JS 解释器</a></li>\n</ul>\n<h3 id="43-模板引擎">4.3 模板引擎<a class="anchor" href="#43-模板引擎"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.liaoxuefeng.com%2Farticle%2F1006272230979008" title="https://www.liaoxuefeng.com/article/1006272230979008">编写一个简单的 JavaScript 模板引擎</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.cnblogs.com%2Fhustskyking%2Fp%2Fprinciple-of-javascript-template.html" title="https://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html">JavaScript 模板引擎原理，几行代码的事儿</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fberwin%2FBlog%2Fissues%2F18" title="https://github.com/berwin/Blog/issues/18">Vue 模板编译原理</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fkrasimirtsonev.com%2Fblog%2Farticle%2FJavascript-template-engine-in-just-20-line" title="https://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line">JavaScript template engine in just 20 lines</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2Fwdstack%2Funderstanding-javascript-micro-templating-f37a37b3b40e" title="https://medium.com/wdstack/understanding-javascript-micro-templating-f37a37b3b40e">Understanding JavaScript Micro-Templating</a></li>\n</ul>\n<h3 id="45-weex">4.5 weex<a class="anchor" href="#45-weex"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://juejin.cn/post/6844903618290663438" title="https://juejin.cn/post/6844903618290663438">深入了解 Weex</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fweexteam%2Farticle%2Fissues%2F32" title="https://github.com/weexteam/article/issues/32">Weex 原理概述</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fhalfrost.com%2Fweex_ios%2F" title="https://halfrost.com/weex_ios/">Weex 是如何在 iOS 客户端上跑起来的</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000010415641" title="https://segmentfault.com/a/1190000010415641">详解 Weex 页面的渲染过程</a></li>\n<li><a href="https://link.juejin.cn?target=http%3A%2F%2Fcoolnuanfeng.github.io%2Fjsbridge" title="http://coolnuanfeng.github.io/jsbridge">JSBridge 介绍及实现原理</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FI812Cr1_tLGrvIRb9jsg-A" title="https://mp.weixin.qq.com/s/I812Cr1_tLGrvIRb9jsg-A">移动混合开发中的 JSBridge</a></li>\n</ul>',frontmatter={topic:null,type:null,category:"Front-End Tooling",Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"compilers-and-bundlers",tags:["Bundler","Compiler"],DateStarted:"2022-12-16T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,draft:!0,minutes:2,words:375},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/init-compile-bundle/compilers-and-bundlers.md",url=void 0;function rawContent(){return'\n## Scope\n\n- [Vite](Vite)\n- [Parcel and Webpack Bug Fix](Parcel-and-Webpack-Bug-Fix)\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/df3cf7bce9c4475db94aa28556e73886~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)\n\n### 4.1 Webpack\n\n- [前端工程师都得掌握的 webpack Loader](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F38 "https://github.com/axuebin/articles/issues/38")\n- [webpack loader 从上手到理解系列：vue-loader](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FNO5jZfoHZbjOwR8qiWnXmw "https://mp.weixin.qq.com/s/NO5jZfoHZbjOwR8qiWnXmw")\n- [webpack loader 从上手到理解系列：style-loader](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FalIKsKkGRU_yyjpeV8i0og "https://mp.weixin.qq.com/s/alIKsKkGRU_yyjpeV8i0og")\n- [一文掌握 Webpack 编译流程](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%3F__biz%3DMzI0MTUxOTE5NQ%3D%3D%26mid%3D2247484030%26idx%3D1%26sn%3Dd630d4b3995bbfd50f99e781074acfeb "https://mp.weixin.qq.com/s?__biz=MzI0MTUxOTE5NQ==&mid=2247484030&idx=1&sn=d630d4b3995bbfd50f99e781074acfeb")\n- [手把手教你撸一个简易的 webpack](https://juejin.cn/post/6844903617971879949 "https://juejin.cn/post/6844903617971879949")\n- [带你走进 webpack 世界，成为 webpack 头号玩家。](https://juejin.cn/post/6844903588607557639 "https://juejin.cn/post/6844903588607557639")\n- [关于 webpack4 的 14 个知识点,童叟无欺](https://juejin.cn/post/6844903853905674248 "https://juejin.cn/post/6844903853905674248")\n- [手把手教你撸一个 Webpack Loader](https://juejin.cn/post/6844903555673882632 "https://juejin.cn/post/6844903555673882632")\n- [webpack 如何通过作用域分析消除无用代码](https://link.juejin.cn?target=https%3A%2F%2Fdiverse.space%2F2018%2F05%2Fbetter-tree-shaking-with-scope-analysis "https://diverse.space/2018/05/better-tree-shaking-with-scope-analysis")\n- [【webpack 进阶】你真的掌握了 loader 么？- loader 十问](https://juejin.cn/post/6844903693070909447 "https://juejin.cn/post/6844903693070909447")\n- [Webpack 小书](https://link.juejin.cn?target=https%3A%2F%2Fwww.timsrc.com%2Farticle%2F2%2Fwebpack-book "https://www.timsrc.com/article/2/webpack-book")\n- [聊一聊 webpack-dev-server 和其中 socket，HMR 的实现](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2F879479119%2F879479119.github.io%2Fissues%2F5 "https://github.com/879479119/879479119.github.io/issues/5")\n- [使用 webpack4 提升 180%编译速度](https://link.juejin.cn?target=http%3A%2F%2Flouiszhai.github.io%2F2019%2F01%2F04%2Fwebpack4 "http://louiszhai.github.io/2019/01/04/webpack4")\n- [Webpack 大法之 Code Splitting](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F26710831 "https://zhuanlan.zhihu.com/p/26710831")\n- [轻松理解 webpack 热更新原理](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2F2L9Y0pdwT8U2kXHFlPA "https://mp.weixin.qq.com/s/2L9Y0pdwT8U2kXHFlPA")\n- [轻松理解 webpack 热更新原理](https://juejin.cn/post/6844904008432222215 "https://juejin.cn/post/6844904008432222215")\n- [揭秘 webpack plugin](https://link.juejin.cn?target=https%3A%2F%2Fchampyin.com%2F2020%2F01%2F12%2F%25E6%258F%25AD%25E7%25A7%2598webpack-plugin%2F "https://champyin.com/2020/01/12/%E6%8F%AD%E7%A7%98webpack-plugin/")\n\n### 4.2 Babel\n\n- [一篇文章了解前端开发必须懂的 Babel](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FC-WmM5tjfc3r4sB52C4R0Q "https://mp.weixin.qq.com/s/C-WmM5tjfc3r4sB52C4R0Q")\n- [不容错过的 Babel7 知识](https://juejin.cn/post/6844904008679686152 "https://juejin.cn/post/6844904008679686152")\n- [前端工程师需要了解的 Babel 知识](https://link.juejin.cn?target=https%3A%2F%2Fwww.zoo.team%2Farticle%2Fbabel "https://www.zoo.team/article/babel")\n- [深入浅出 Babel 上篇：架构和原理 + 实战](https://juejin.cn/post/6844903956905197576 "https://juejin.cn/post/6844903956905197576")\n- [深入浅出 Babel 下篇：既生 Plugin 何生 Macros](https://juejin.cn/post/6844903961820921869 "https://juejin.cn/post/6844903961820921869")\n- [前端工程师的自我修养-关于 Babel 那些事儿](https://juejin.cn/post/6844904079118827533 "https://juejin.cn/post/6844904079118827533")\n- [前端与编译原理——用 JS 写一个 JS 解释器](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000017241258 "https://segmentfault.com/a/1190000017241258")\n\n### 4.3 模板引擎\n\n- [编写一个简单的 JavaScript 模板引擎](https://link.juejin.cn?target=https%3A%2F%2Fwww.liaoxuefeng.com%2Farticle%2F1006272230979008 "https://www.liaoxuefeng.com/article/1006272230979008")\n- [JavaScript 模板引擎原理，几行代码的事儿](https://link.juejin.cn?target=https%3A%2F%2Fwww.cnblogs.com%2Fhustskyking%2Fp%2Fprinciple-of-javascript-template.html "https://www.cnblogs.com/hustskyking/p/principle-of-javascript-template.html")\n- [Vue 模板编译原理](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fberwin%2FBlog%2Fissues%2F18 "https://github.com/berwin/Blog/issues/18")\n- [JavaScript template engine in just 20 lines](https://link.juejin.cn?target=https%3A%2F%2Fkrasimirtsonev.com%2Fblog%2Farticle%2FJavascript-template-engine-in-just-20-line "https://krasimirtsonev.com/blog/article/Javascript-template-engine-in-just-20-line")\n- [Understanding JavaScript Micro-Templating](https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2Fwdstack%2Funderstanding-javascript-micro-templating-f37a37b3b40e "https://medium.com/wdstack/understanding-javascript-micro-templating-f37a37b3b40e")\n\n### 4.5 weex\n\n- [深入了解 Weex](https://juejin.cn/post/6844903618290663438 "https://juejin.cn/post/6844903618290663438")\n- [Weex 原理概述](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fweexteam%2Farticle%2Fissues%2F32 "https://github.com/weexteam/article/issues/32")\n- [Weex 是如何在 iOS 客户端上跑起来的](https://link.juejin.cn?target=https%3A%2F%2Fhalfrost.com%2Fweex_ios%2F "https://halfrost.com/weex_ios/")\n- [详解 Weex 页面的渲染过程](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000010415641 "https://segmentfault.com/a/1190000010415641")\n- [JSBridge 介绍及实现原理](https://link.juejin.cn?target=http%3A%2F%2Fcoolnuanfeng.github.io%2Fjsbridge "http://coolnuanfeng.github.io/jsbridge")\n- [移动混合开发中的 JSBridge](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FI812Cr1_tLGrvIRb9jsg-A "https://mp.weixin.qq.com/s/I812Cr1_tLGrvIRb9jsg-A")\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"scope",text:"Scope#"},{depth:3,slug:"41-webpack",text:"4.1 Webpack#"},{depth:3,slug:"42-babel",text:"4.2 Babel#"},{depth:3,slug:"43-模板引擎",text:"4.3 模板引擎#"},{depth:3,slug:"45-weex",text:"4.5 weex#"}]}const Content=createComponent(((t,e,i)=>{const{layout:n,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};