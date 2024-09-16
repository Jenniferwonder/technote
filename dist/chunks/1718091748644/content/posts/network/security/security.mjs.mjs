import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="web-security">Web Security<a class="anchor" href="#web-security"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ab67a38881e444989459645de840eb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp" alt=""></p>\n<p><img src="https://segmentfault.com/img/remote/1460000038420811" alt="image-static.segmentfault.com/493/006/493006371-eb4f4e8be6031ff8_fix732"></p>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Falmanac.httparchive.org%2Fen%2F2019%2Fsecurity" title="https://almanac.httparchive.org/en/2019/security">Security</a></li>\n<li><a href="https://juejin.cn/post/6844903660678299661" title="https://juejin.cn/post/6844903660678299661">前端也需要了解的 JSONP 安全</a></li>\n<li><a href="https://juejin.cn/post/6844903842635579405" title="https://juejin.cn/post/6844903842635579405">【面试篇】寒冬求职之你必须要懂的 Web 安全</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F25486768%3Fgroup_id%3D820705780520079360" title="https://zhuanlan.zhihu.com/p/25486768?group_id=820705780520079360">谈谈对 Web 安全的理解</a></li>\n<li><a href="https://juejin.cn/post/6844903639820009486" title="https://juejin.cn/post/6844903639820009486">程序员必须要了解的 web 安全</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fzoumiaojiang.com%2Farticle%2Fcommon-web-security%2F" title="https://zoumiaojiang.com/article/common-web-security/">常见 Web 安全攻防总结</a></li>\n</ul>\n<h2 id="scope">Scope<a class="anchor" href="#scope"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="web-fundamentalssecurityxssxss">[[web-fundamentals/security/xss|XSS]]<a class="anchor" href="#web-fundamentalssecurityxssxss"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="web-fundamentalssecuritycsrf-attackcsrf-xsrf">[[web-fundamentals/security/csrf-attack|CSRF-XSRF]]<a class="anchor" href="#web-fundamentalssecuritycsrf-attackcsrf-xsrf"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="https-securityhttps-security">[[https-security|HTTPS Security]]<a class="anchor" href="#https-securityhttps-security"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="接口加签">接口加签<a class="anchor" href="#接口加签"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=gmmUm0LVXGy4oHjkIBy%2BpA%3D%3D.Gq5BCzQeXSttnX2U7Z0Sb0XtpgAugenkKUbKYXSQxFY9SXFSDJOa4CRKhrTP4xvn">API 接口的参数加密签名设计思路（参数加密+超时处理+私钥验证+Https）</a></li>\n</ul>\n<h4 id="接口加密">接口加密<a class="anchor" href="#接口加密"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="接口防重放">接口防重放<a class="anchor" href="#接口防重放"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=o7uS4B9p3gd3hNcDywLEWg%3D%3D.lAIzWlbG8FTR%2BuneI3i27dmBjDDvw3oSjLcZupcdGI5pCypUbPGoFi6pSTZN%2FRqRvlU5rEvLWM8HHy5arprBZw%3D%3D">Api 接口安全-防篡改,防重放理解总结</a></li>\n</ul>\n<h4 id="环境检测">环境检测<a class="anchor" href="#环境检测"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="代码加密混淆">代码加密混淆<a class="anchor" href="#代码加密混淆"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.freebuf.com%2Farticles%2Fweb%2F102269.html" title="https://www.freebuf.com/articles/web/102269.html">可信前端之路：代码保护</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F47047191" title="https://www.zhihu.com/question/47047191">前端如何给 JavaScript 加密（不是混淆）？</a></li>\n</ul>\n<h4 id="无处不在的验证码">无处不在的验证码<a class="anchor" href="#无处不在的验证码"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=JfhUEjmcyuFc%2FqmSVZN%2BJg%3D%3D.Dkn2am%2FOjctMHQHTENfY7dibjU0Lqr%2BN4MVKkXMJoLJefjkD6krFltTrQDlpM8ZE">验证码 WEB 端产品调研（一）：Google reCAPTCHA</a></li>\n<li><a href="https://link.segmentfault.com/?enc=6zgnviWmzX0T%2F31Iy1VrbQ%3D%3D.Y78AoUKM4kkS1LY9mrZ9oyidH%2Bvtr7tQGFiGUgGDmANhuCFk7ZX2eqTzXu">验证码 WEB 端产品调研（二）：极限验证</a></li>\n</ul>\n<h4 id="浏览器为什么要阻止跨域请求如何解决跨域每次跨域请求都需要到达服务端吗">浏览器为什么要阻止跨域请求？如何解决跨域？每次跨域请求都需要到达服务端吗？<a class="anchor" href="#浏览器为什么要阻止跨域请求如何解决跨域每次跨域请求都需要到达服务端吗"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=PRLpn4tWB1%2F5l3AEelopew%3D%3D.HhCmkm3WvOuElGRpVHUqcsWV%2FrlKuy%2FGaR352D4%2FKecqb1B321o%2BmbMgGVivi4L9">为什么浏览器要限制跨域访问?</a></li>\n</ul>',frontmatter={category:"Network",title:"Web Security",tags:["Security","Network"],topic:null,type:null,Datereviewed:null,reviewed:null,difficulty:null,comment:null,DateStarted:"2023-03-06T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,"linter-yaml-title-alias":"Web Security",aliases:["Web Security"],draft:!0,minutes:1,words:230},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/security/security.md",url=void 0;function rawContent(){return'\n# Web Security\n\n![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ab67a38881e444989459645de840eb1~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp)\n\n![image-static.segmentfault.com/493/006/493006371-eb4f4e8be6031ff8_fix732](https://segmentfault.com/img/remote/1460000038420811)\n\n- [Security](https://link.juejin.cn?target=https%3A%2F%2Falmanac.httparchive.org%2Fen%2F2019%2Fsecurity "https://almanac.httparchive.org/en/2019/security")\n- [前端也需要了解的 JSONP 安全](https://juejin.cn/post/6844903660678299661 "https://juejin.cn/post/6844903660678299661")\n- [【面试篇】寒冬求职之你必须要懂的 Web 安全](https://juejin.cn/post/6844903842635579405 "https://juejin.cn/post/6844903842635579405")\n- [谈谈对 Web 安全的理解](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F25486768%3Fgroup_id%3D820705780520079360 "https://zhuanlan.zhihu.com/p/25486768?group_id=820705780520079360")\n- [程序员必须要了解的 web 安全](https://juejin.cn/post/6844903639820009486 "https://juejin.cn/post/6844903639820009486")\n- [常见 Web 安全攻防总结](https://link.juejin.cn?target=https%3A%2F%2Fzoumiaojiang.com%2Farticle%2Fcommon-web-security%2F "https://zoumiaojiang.com/article/common-web-security/")\n\n## Scope\n\n#### [[web-fundamentals/security/xss|XSS]]\n\n#### [[web-fundamentals/security/csrf-attack|CSRF-XSRF]]\n\n#### [[https-security|HTTPS Security]]\n\n#### 接口加签\n\n- [API 接口的参数加密签名设计思路（参数加密+超时处理+私钥验证+Https）](https://link.segmentfault.com/?enc=gmmUm0LVXGy4oHjkIBy%2BpA%3D%3D.Gq5BCzQeXSttnX2U7Z0Sb0XtpgAugenkKUbKYXSQxFY9SXFSDJOa4CRKhrTP4xvn)\n\n#### 接口加密\n\n#### 接口防重放\n\n- [Api 接口安全-防篡改,防重放理解总结](https://link.segmentfault.com/?enc=o7uS4B9p3gd3hNcDywLEWg%3D%3D.lAIzWlbG8FTR%2BuneI3i27dmBjDDvw3oSjLcZupcdGI5pCypUbPGoFi6pSTZN%2FRqRvlU5rEvLWM8HHy5arprBZw%3D%3D)\n\n#### 环境检测\n\n#### 代码加密混淆\n\n- [可信前端之路：代码保护](https://link.juejin.cn?target=https%3A%2F%2Fwww.freebuf.com%2Farticles%2Fweb%2F102269.html "https://www.freebuf.com/articles/web/102269.html")\n- [前端如何给 JavaScript 加密（不是混淆）？](https://link.juejin.cn?target=https%3A%2F%2Fwww.zhihu.com%2Fquestion%2F47047191 "https://www.zhihu.com/question/47047191")\n\n#### 无处不在的验证码\n\n- [验证码 WEB 端产品调研（一）：Google reCAPTCHA](https://link.segmentfault.com/?enc=JfhUEjmcyuFc%2FqmSVZN%2BJg%3D%3D.Dkn2am%2FOjctMHQHTENfY7dibjU0Lqr%2BN4MVKkXMJoLJefjkD6krFltTrQDlpM8ZE)\n- [验证码 WEB 端产品调研（二）：极限验证](https://link.segmentfault.com/?enc=6zgnviWmzX0T%2F31Iy1VrbQ%3D%3D.Y78AoUKM4kkS1LY9mrZ9oyidH%2Bvtr7tQGFiGUgGDmANhuCFk7ZX2eqTzXu)\n\n#### 浏览器为什么要阻止跨域请求？如何解决跨域？每次跨域请求都需要到达服务端吗？\n\n- [为什么浏览器要限制跨域访问?](https://link.segmentfault.com/?enc=PRLpn4tWB1%2F5l3AEelopew%3D%3D.HhCmkm3WvOuElGRpVHUqcsWV%2FrlKuy%2FGaR352D4%2FKecqb1B321o%2BmbMgGVivi4L9)\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"web-security",text:"Web Security#"},{depth:2,slug:"scope",text:"Scope#"},{depth:4,slug:"web-fundamentalssecurityxssxss",text:"[[web-fundamentals/security/xss|XSS]]#"},{depth:4,slug:"web-fundamentalssecuritycsrf-attackcsrf-xsrf",text:"[[web-fundamentals/security/csrf-attack|CSRF-XSRF]]#"},{depth:4,slug:"https-securityhttps-security",text:"[[https-security|HTTPS Security]]#"},{depth:4,slug:"接口加签",text:"接口加签#"},{depth:4,slug:"接口加密",text:"接口加密#"},{depth:4,slug:"接口防重放",text:"接口防重放#"},{depth:4,slug:"环境检测",text:"环境检测#"},{depth:4,slug:"代码加密混淆",text:"代码加密混淆#"},{depth:4,slug:"无处不在的验证码",text:"无处不在的验证码#"},{depth:4,slug:"浏览器为什么要阻止跨域请求如何解决跨域每次跨域请求都需要到达服务端吗",text:"浏览器为什么要阻止跨域请求？如何解决跨域？每次跨域请求都需要到达服务端吗？#"}]}const Content=createComponent(((t,e,n)=>{const{layout:a,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};