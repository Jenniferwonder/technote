import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="network/cors-跨域.md",collection="posts",slug="network/cors-跨域",body='\n# CORS-跨域\n\n## Reference\n\n[CORS in 100 Seconds - YouTube](https://www.youtube.com/watch?v=4KHiSt0oLJ0&list=PL0vfts4VzfNiq0-fXbVVdnngU1Ur2SzyZ&index=11)  \n[Cross-Origin Resource Sharing (CORS)](https://web.dev/cross-origin-resource-sharing/)  \n[Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)\n\n## Questions\n\n- [前端开发如何独立解决跨域问题](https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000010719058 "https://segmentfault.com/a/1190000010719058")\n- [九种跨域方式实现原理（完整版）](https://juejin.cn/post/6844903767226351623 "https://juejin.cn/post/6844903767226351623")\n- [浏览器同源策略与 ajax 跨域方法汇总](https://link.juejin.cn/?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F438183ddcea8 "https://www.jianshu.com/p/438183ddcea8")\n- 跨域通信有哪些方式\n  - [前端跨域通信的几种方式](https://link.segmentfault.com/?enc=BNAtfKVRkHofyBdQeafGYQ%3D%3D.Z3B6JMvwC8qAGOS6HlEEDzQ7wJPoPopYV0Kne2i7vD%2FLX5RcOgMikWIx4SIQDZEciRbkLZtO8B3uGbuQ4VAAXQ%3D%3D)\n  - [CORS 简单请求+预检请求（彻底理解跨域）](https://link.segmentfault.com/?enc=btOjWp7RnCGLXgMmDSVAIA%3D%3D.B8afnikhjSN%2B%2B%2BQXAQW7hKod2S%2FTtLg1wewYvFA9svaJkPfCyHADrNgw1olNi6Sd)\n- 表单可以跨域吗\n  - [为什么 form 表单提交没有跨域问题，但 ajax 提交有跨域问题？](https://link.segmentfault.com/?enc=lF96OnTZsJml4JPaJrjbkA%3D%3D.qihY4DTp3YaH%2Bf7B0BtGfjwIyKR8Mu4BXzYrRZyTCr5%2BftI2LUZHUFEHxRpAHPyx)\n',data={title:"CORS-跨域",DateStarted:new Date(16711488e5),draft:!0,tags:["Network"],category:"Network"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/cors-跨域.md",rawData:void 0},html='<h1 id="cors-跨域">CORS-跨域<a class="anchor" href="#cors-跨域"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><a href="https://www.youtube.com/watch?v=4KHiSt0oLJ0&#x26;list=PL0vfts4VzfNiq0-fXbVVdnngU1Ur2SzyZ&#x26;index=11">CORS in 100 Seconds - YouTube</a><br>\n<a href="https://web.dev/cross-origin-resource-sharing/">Cross-Origin Resource Sharing (CORS)</a><br>\n<a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">Cross-Origin Resource Sharing (CORS) - HTTP | MDN</a></p>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000010719058" title="https://segmentfault.com/a/1190000010719058">前端开发如何独立解决跨域问题</a></li>\n<li><a href="https://juejin.cn/post/6844903767226351623" title="https://juejin.cn/post/6844903767226351623">九种跨域方式实现原理（完整版）</a></li>\n<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F438183ddcea8" title="https://www.jianshu.com/p/438183ddcea8">浏览器同源策略与 ajax 跨域方法汇总</a></li>\n<li>跨域通信有哪些方式\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=BNAtfKVRkHofyBdQeafGYQ%3D%3D.Z3B6JMvwC8qAGOS6HlEEDzQ7wJPoPopYV0Kne2i7vD%2FLX5RcOgMikWIx4SIQDZEciRbkLZtO8B3uGbuQ4VAAXQ%3D%3D">前端跨域通信的几种方式</a></li>\n<li><a href="https://link.segmentfault.com/?enc=btOjWp7RnCGLXgMmDSVAIA%3D%3D.B8afnikhjSN%2B%2B%2BQXAQW7hKod2S%2FTtLg1wewYvFA9svaJkPfCyHADrNgw1olNi6Sd">CORS 简单请求+预检请求（彻底理解跨域）</a></li>\n</ul>\n</li>\n<li>表单可以跨域吗\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=lF96OnTZsJml4JPaJrjbkA%3D%3D.qihY4DTp3YaH%2Bf7B0BtGfjwIyKR8Mu4BXzYrRZyTCr5%2BftI2LUZHUFEHxRpAHPyx">为什么 form 表单提交没有跨域问题，但 ajax 提交有跨域问题？</a></li>\n</ul>\n</li>\n</ul>',frontmatter={category:"Network",title:"CORS-跨域",topic:null,type:"D",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["CORS-跨域"],tags:["Network"],DateStarted:"2022-12-16T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,"linter-yaml-title-alias":"CORS-跨域",draft:!0,minutes:1,words:126},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/cors-跨域.md",url=void 0;function rawContent(){return'\n# CORS-跨域\n\n## Reference\n\n[CORS in 100 Seconds - YouTube](https://www.youtube.com/watch?v=4KHiSt0oLJ0&list=PL0vfts4VzfNiq0-fXbVVdnngU1Ur2SzyZ&index=11)  \n[Cross-Origin Resource Sharing (CORS)](https://web.dev/cross-origin-resource-sharing/)  \n[Cross-Origin Resource Sharing (CORS) - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)\n\n## Questions\n\n- [前端开发如何独立解决跨域问题](https://link.juejin.cn/?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000010719058 "https://segmentfault.com/a/1190000010719058")\n- [九种跨域方式实现原理（完整版）](https://juejin.cn/post/6844903767226351623 "https://juejin.cn/post/6844903767226351623")\n- [浏览器同源策略与 ajax 跨域方法汇总](https://link.juejin.cn/?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F438183ddcea8 "https://www.jianshu.com/p/438183ddcea8")\n- 跨域通信有哪些方式\n  - [前端跨域通信的几种方式](https://link.segmentfault.com/?enc=BNAtfKVRkHofyBdQeafGYQ%3D%3D.Z3B6JMvwC8qAGOS6HlEEDzQ7wJPoPopYV0Kne2i7vD%2FLX5RcOgMikWIx4SIQDZEciRbkLZtO8B3uGbuQ4VAAXQ%3D%3D)\n  - [CORS 简单请求+预检请求（彻底理解跨域）](https://link.segmentfault.com/?enc=btOjWp7RnCGLXgMmDSVAIA%3D%3D.B8afnikhjSN%2B%2B%2BQXAQW7hKod2S%2FTtLg1wewYvFA9svaJkPfCyHADrNgw1olNi6Sd)\n- 表单可以跨域吗\n  - [为什么 form 表单提交没有跨域问题，但 ajax 提交有跨域问题？](https://link.segmentfault.com/?enc=lF96OnTZsJml4JPaJrjbkA%3D%3D.qihY4DTp3YaH%2Bf7B0BtGfjwIyKR8Mu4BXzYrRZyTCr5%2BftI2LUZHUFEHxRpAHPyx)\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"cors-跨域",text:"CORS-跨域#"},{depth:2,slug:"reference",text:"Reference#"},{depth:2,slug:"questions",text:"Questions#"}]}const Content=createComponent(((t,e,n)=>{const{layout:o,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),cors___=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,cors___,data,id,slug};