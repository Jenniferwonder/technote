import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="network/web-protocol/http.md",collection="posts",slug="network/web-protocol/http",body='\n# HTTP\n\n> [\\[Python3 网络爬虫开发实战\\] 2.1-HTTP 基本原理 | 静觅](https://cuiqingcai.com/5465.html)\n\n## 访问资源需要的协议类型\n\n在淘宝的首页  [https://www.taobao.com/](https://www.taobao.com/)中，URL 的开头会有 http 或 https，这就是访问资源需要的协议类型。有时，我们还会看到 ftp、sftp、smb 开头的 URL，它们都是协议类型。在爬虫中，我们抓取的页面通常就是 http 或 https 协议的\n\n## HTTP Intro\n\nHTTP 的全称是 Hyper Text Transfer Protocol，中文名叫作超文本传输协议。  \n是 Web 联网的基础，也是手机联网常用的协议之一，HTTP 协议是建立在 TCP 协议之上的一种应用。(a higher level abstraction above TCP and IP)\n\n- HTTP 由万维网协会（World Wide Web Consortium）和 Internet 工作小组 IETF（Internet Engineering Task Force）共同合作制定的规范，目前广泛使用的是 HTTP 1.1 版本。\n- Request-Response Paradigm  \n  HTTP 连接最显著的特点是客户端发送的每次请求都需要服务器回送响应，在请求结束后，会主动释放连接。从建立连接到关闭连接的过程称为“一次连接”。  \n  1）在 HTTP 1.0 中，客户端的每次请求都要求建立一次单独的连接，在处理完本次请求后，就自动释放连接。  \n  2）在 HTTP 1.1 中则可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。  \n  由于 HTTP 在每次请求结束后都会主动释放连接，因此 HTTP 连接是一种“**短连接**”，要保持客户端程序的在线状态，需要不断地向服务器发起连接请求。通常 的做法是即时不需要获得任何数据，客户端也保持每隔一段固定的时间向服务器发送一次“保持连接”的请求，服务器在收到该请求后对客户端进行回复，表明知道 客户端“在线”。若服务器长时间无法收到客户端的请求，则认为客户端“下线”，若客户端长时间无法收到服务器的回复，则认为网络已经断开\n\n- [HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)\n- [HTTP — an Application-Level Protocol](https://dev.opera.com/articles/http-basic-introduction/)\n- [HTTP: Let\'s GET It On!](https://dev.opera.com/articles/http-lets-get-it-on/)\n- [前端基础篇之 HTTP 协议](https://juejin.cn/post/6844903844216832007 "https://juejin.cn/post/6844903844216832007")\n\n### [[network/web-protocol/http-request-response-process|HTTP Request Response Process]]\n\n### [[bowser-cache|Bowser Cache]]\n\n## [[web-fundamentals/web-protocol/https|HTTPS]]\n\n## [[web-fundamentals/web-protocol/http2-http3|HTTP2-HTTP3]]\n',data={title:"HTTP",DateStarted:new Date(16706304e5),tags:["Network","HTTP"],category:"Network"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/web-protocol/http.md",rawData:void 0},html='<h1 id="http">HTTP<a class="anchor" href="#http"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<blockquote>\n<p><a href="https://cuiqingcai.com/5465.html">[Python3 网络爬虫开发实战] 2.1-HTTP 基本原理 | 静觅</a></p>\n</blockquote>\n<h2 id="访问资源需要的协议类型">访问资源需要的协议类型<a class="anchor" href="#访问资源需要的协议类型"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>在淘宝的首页  <a href="https://www.taobao.com/">https://www.taobao.com/</a>中，URL 的开头会有 http 或 https，这就是访问资源需要的协议类型。有时，我们还会看到 ftp、sftp、smb 开头的 URL，它们都是协议类型。在爬虫中，我们抓取的页面通常就是 http 或 https 协议的</p>\n<h2 id="http-intro">HTTP Intro<a class="anchor" href="#http-intro"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>HTTP 的全称是 Hyper Text Transfer Protocol，中文名叫作超文本传输协议。<br>\n是 Web 联网的基础，也是手机联网常用的协议之一，HTTP 协议是建立在 TCP 协议之上的一种应用。(a higher level abstraction above TCP and IP)</p>\n<ul>\n<li>\n<p>HTTP 由万维网协会（World Wide Web Consortium）和 Internet 工作小组 IETF（Internet Engineering Task Force）共同合作制定的规范，目前广泛使用的是 HTTP 1.1 版本。</p>\n</li>\n<li>\n<p>Request-Response Paradigm<br>\nHTTP 连接最显著的特点是客户端发送的每次请求都需要服务器回送响应，在请求结束后，会主动释放连接。从建立连接到关闭连接的过程称为“一次连接”。<br>\n1）在 HTTP 1.0 中，客户端的每次请求都要求建立一次单独的连接，在处理完本次请求后，就自动释放连接。<br>\n2）在 HTTP 1.1 中则可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。<br>\n由于 HTTP 在每次请求结束后都会主动释放连接，因此 HTTP 连接是一种“<strong>短连接</strong>”，要保持客户端程序的在线状态，需要不断地向服务器发起连接请求。通常 的做法是即时不需要获得任何数据，客户端也保持每隔一段固定的时间向服务器发送一次“保持连接”的请求，服务器在收到该请求后对客户端进行回复，表明知道 客户端“在线”。若服务器长时间无法收到客户端的请求，则认为客户端“下线”，若客户端长时间无法收到服务器的回复，则认为网络已经断开</p>\n</li>\n<li>\n<p><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP">HTTP | MDN</a></p>\n</li>\n<li>\n<p><a href="https://dev.opera.com/articles/http-basic-introduction/">HTTP — an Application-Level Protocol</a></p>\n</li>\n<li>\n<p><a href="https://dev.opera.com/articles/http-lets-get-it-on/">HTTP: Let’s GET It On!</a></p>\n</li>\n<li>\n<p><a href="https://juejin.cn/post/6844903844216832007" title="https://juejin.cn/post/6844903844216832007">前端基础篇之 HTTP 协议</a></p>\n</li>\n</ul>\n<h3 id="networkweb-protocolhttp-request-response-processhttp-request-response-process">[[network/web-protocol/http-request-response-process|HTTP Request Response Process]]<a class="anchor" href="#networkweb-protocolhttp-request-response-processhttp-request-response-process"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="bowser-cachebowser-cache">[[bowser-cache|Bowser Cache]]<a class="anchor" href="#bowser-cachebowser-cache"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="web-fundamentalsweb-protocolhttpshttps">[[web-fundamentals/web-protocol/https|HTTPS]]<a class="anchor" href="#web-fundamentalsweb-protocolhttpshttps"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="web-fundamentalsweb-protocolhttp2-http3http2-http3">[[web-fundamentals/web-protocol/http2-http3|HTTP2-HTTP3]]<a class="anchor" href="#web-fundamentalsweb-protocolhttp2-http3http2-http3"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={category:"Network",title:"HTTP",tags:["Network","HTTP"],topic:null,type:null,Datereviewed:"2024-04-17T00:00:00.000Z",reviewed:null,difficulty:null,comment:null,aliases:["HTTP","HTTP"],DateStarted:"2022-12-10T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,"linter-yaml-title-alias":"HTTP",minutes:3,words:581},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/web-protocol/http.md",url=void 0;function rawContent(){return'\n# HTTP\n\n> [\\[Python3 网络爬虫开发实战\\] 2.1-HTTP 基本原理 | 静觅](https://cuiqingcai.com/5465.html)\n\n## 访问资源需要的协议类型\n\n在淘宝的首页  [https://www.taobao.com/](https://www.taobao.com/)中，URL 的开头会有 http 或 https，这就是访问资源需要的协议类型。有时，我们还会看到 ftp、sftp、smb 开头的 URL，它们都是协议类型。在爬虫中，我们抓取的页面通常就是 http 或 https 协议的\n\n## HTTP Intro\n\nHTTP 的全称是 Hyper Text Transfer Protocol，中文名叫作超文本传输协议。  \n是 Web 联网的基础，也是手机联网常用的协议之一，HTTP 协议是建立在 TCP 协议之上的一种应用。(a higher level abstraction above TCP and IP)\n\n- HTTP 由万维网协会（World Wide Web Consortium）和 Internet 工作小组 IETF（Internet Engineering Task Force）共同合作制定的规范，目前广泛使用的是 HTTP 1.1 版本。\n- Request-Response Paradigm  \n  HTTP 连接最显著的特点是客户端发送的每次请求都需要服务器回送响应，在请求结束后，会主动释放连接。从建立连接到关闭连接的过程称为“一次连接”。  \n  1）在 HTTP 1.0 中，客户端的每次请求都要求建立一次单独的连接，在处理完本次请求后，就自动释放连接。  \n  2）在 HTTP 1.1 中则可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。  \n  由于 HTTP 在每次请求结束后都会主动释放连接，因此 HTTP 连接是一种“**短连接**”，要保持客户端程序的在线状态，需要不断地向服务器发起连接请求。通常 的做法是即时不需要获得任何数据，客户端也保持每隔一段固定的时间向服务器发送一次“保持连接”的请求，服务器在收到该请求后对客户端进行回复，表明知道 客户端“在线”。若服务器长时间无法收到客户端的请求，则认为客户端“下线”，若客户端长时间无法收到服务器的回复，则认为网络已经断开\n\n- [HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)\n- [HTTP — an Application-Level Protocol](https://dev.opera.com/articles/http-basic-introduction/)\n- [HTTP: Let\'s GET It On!](https://dev.opera.com/articles/http-lets-get-it-on/)\n- [前端基础篇之 HTTP 协议](https://juejin.cn/post/6844903844216832007 "https://juejin.cn/post/6844903844216832007")\n\n### [[network/web-protocol/http-request-response-process|HTTP Request Response Process]]\n\n### [[bowser-cache|Bowser Cache]]\n\n## [[web-fundamentals/web-protocol/https|HTTPS]]\n\n## [[web-fundamentals/web-protocol/http2-http3|HTTP2-HTTP3]]\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"http",text:"HTTP#"},{depth:2,slug:"访问资源需要的协议类型",text:"访问资源需要的协议类型#"},{depth:2,slug:"http-intro",text:"HTTP Intro#"},{depth:3,slug:"networkweb-protocolhttp-request-response-processhttp-request-response-process",text:"[[network/web-protocol/http-request-response-process|HTTP Request Response Process]]#"},{depth:3,slug:"bowser-cachebowser-cache",text:"[[bowser-cache|Bowser Cache]]#"},{depth:2,slug:"web-fundamentalsweb-protocolhttpshttps",text:"[[web-fundamentals/web-protocol/https|HTTPS]]#"},{depth:2,slug:"web-fundamentalsweb-protocolhttp2-http3http2-http3",text:"[[web-fundamentals/web-protocol/http2-http3|HTTP2-HTTP3]]#"}]}const Content=createComponent(((t,e,n)=>{const{layout:o,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),http=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,http,id,slug};