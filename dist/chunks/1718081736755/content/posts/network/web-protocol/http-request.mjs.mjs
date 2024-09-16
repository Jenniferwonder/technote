import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="htpp-request">HTPP Request<a class="anchor" href="#htpp-request"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<ul>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F25028045" title="https://zhuanlan.zhihu.com/p/25028045">听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000018129846" title="https://segmentfault.com/a/1190000018129846">都 9102 年了，还问 GET 和 POST 的区别</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Fwww.byvoid.com%2Fzhs%2Fblog%2Fhttp-keep-alive-header" title="https://www.byvoid.com/zhs/blog/http-keep-alive-header">HTTP 协议头部与 Keep-Alive 模式详解</a></li>\n<li><a href="https://link.juejin.cn?target=https%3A%2F%2Flotabout.me%2F2019%2FThings-about-keepalive%2F" title="https://lotabout.me/2019/Things-about-keepalive/">HTTP keep-alive 二三事</a></li>\n</ul>\n<h3 id="overview">Overview<a class="anchor" href="#overview"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>请求，由客户端向服务端发出，可以分为 4 部分内容：</p>\n<ul>\n<li>请求方法（Request Method）</li>\n<li>请求的网址（Request URL）</li>\n<li>请求头（Request Headers）</li>\n<li>请求体（Request Body）</li>\n</ul>\n<h3 id="general-部分">General 部分<a class="anchor" href="#general-部分"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Request URL 为请求的 URL，</li>\n<li>Request Method 为请求的方法，</li>\n<li>Status Code 为响应状态码，</li>\n<li>Remote Address 为远程服务器的地址和端口，</li>\n<li>Referrer Policy 为 Referrer 判别策略。</li>\n</ul>\n<h3 id="请求方法">请求方法<a class="anchor" href="#请求方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>常见的请求方法有两种：GET 和 POST，有如下区别。</p>\n<ul>\n<li>GET 请求中的参数包含在 URL 里面，数据可以在 URL 中看到，而 POST 请求的 URL 不会包含这些数据，数据都是通过表单形式传输的，会包含在请求体中。</li>\n<li>GET 请求提交的数据最多只有 1024 字节，而 POST 方式没有限制。</li>\n</ul>\n<p>一般来说，登录时，需要提交用户名和密码，其中包含了敏感信息，使用 GET 方式请求的话，密码就会暴露在 URL 里面，造成密码泄露，所以这里最好以 POST 方式发送。上传文件时，由于文件内容比较大，也会选用 POST 方式。</p>\n<p>表 2-1 其他请求方法</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>方法</th><th>描述</th></tr></thead><tbody><tr><td>GET</td><td>请求页面，并返回页面内容</td></tr><tr><td>HEAD</td><td>类似于 GET 请求，不过返回的响应中没有具体的内容，用于获取报头</td></tr><tr><td>POST</td><td>大多用于提交表单或上传文件，数据包含在请求体中</td></tr><tr><td>PUT</td><td>从客户端向服务器传送的数据取代指定文档中的内容</td></tr><tr><td>DELETE</td><td>请求服务器删除指定的页面</td></tr><tr><td>CONNECT</td><td>把服务器当作跳板，让服务器代替客户端访问其他网页</td></tr><tr><td>OPTIONS</td><td>允许客户端查看服务器的性能？Returns supported HTTP methods</td></tr><tr><td>TRACE</td><td>回显服务器收到的请求，主要用于测试或诊断</td></tr><tr><td>PATCH</td><td>Update partial resources</td></tr></tbody></table>\n<p>本表参考：<a href="http://www.runoob.com/http/http-methods.html">http://www.runoob.com/http/http-methods.html</a>。</p>\n<h3 id="请求的网址">请求的网址<a class="anchor" href="#请求的网址"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>请求的网址，即统一资源定位符 [[web-fundamentals/url|URL]]，它可以唯一确定我们想请求的资源。</p>\n<h3 id="请求头">请求头<a class="anchor" href="#请求头"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>请求头，是请求的一部分，服务器会根据请求头内的信息判断请求是否合法，进而作出对应的响应。用来说明服务器要使用的附加信息，比较重要的信息有 Cookie、Referer、User-Agent 等。下面简要说明一些常用的头信息。<br>\n请求头是请求的重要组成部分，在写爬虫时，大部分情况下都需要设定请求头。</p>\n<ul>\n<li><strong>Accept</strong>：请求报头域，用于指定客户端可接受哪些类型的信息。</li>\n<li><strong>Accept-Language</strong>：指定客户端可接受的语言类型。</li>\n<li><strong>Accept-Encoding</strong>：指定客户端可接受的内容编码。</li>\n<li><strong>Host</strong>：用于指定请求资源的主机 IP 和端口号，其内容为请求 URL 的原始服务器或网关的位置。从 HTTP 1.1 版本开始，请求必须包含此内容。</li>\n<li><strong>Cookie</strong>：也常用复数形式 Cookies，这是网站为了辨别用户进行会话跟踪而存储在用户本地的数据。它的主要功能是维持当前访问会话。例如，我们输入用户名和密码成功登录某个网站后，服务器会用会话保存登录状态信息，后面我们每次刷新或请求该站点的其他页面时，会发现都是登录状态，这就是 Cookies 的功劳。Cookies 里有信息标识了我们所对应的服务器的会话，每次浏览器在请求该站点的页面时，都会在请求头中加上 Cookies 并将其发送给服务器，服务器通过 Cookies 识别出是我们自己，并且查出当前状态是登录状态，所以返回结果就是登录之后才能看到的网页内容。</li>\n<li><strong>Referer</strong>：此内容用来标识这个请求是从哪个页面发过来的，服务器可以拿到这一信息并做相应的处理，如作来源统计、防盗链处理等。</li>\n<li><strong>User-Agent</strong>：简称 UA，它是一个特殊的字符串头，可以使服务器识别客户使用的操作系统及版本、浏览器及版本等信息。在做爬虫时加上此信息，可以伪装为浏览器；如果不加，很可能会被识别出为爬虫。</li>\n<li><strong>Content-Type</strong>：也叫互联网媒体类型（Internet Media Type）或者 MIME 类型，在 HTTP 协议消息头中，它用来表示具体请求中的媒体类型信息。例如，text/html 代表 HTML 格式，image/gif 代表 GIF 图片，application/json 代表 JSON 类型，更多对应关系可以查看此对照表：<a href="http://tool.oschina.net/commons">http://tool.oschina.net/commons</a></li>\n<li>content-length: 51`</li>\n<li>port</li>\n<li>path - A server might have multiple paths for different services - Separate out logic on the server<br>\n例如，这里我登录 GitHub 时捕获到的请求和响应如图 2-7 所示。</li>\n</ul>\n<p><img src="https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-7.jpg" alt="">图 2-7 详细信息</p>\n<p>登录之前，我们填写了用户名和密码信息，提交时这些内容就会以表单数据的形式提交给服务器，注意：<br>\n表 2-2 Content-Type 和 POST 提交数据方式的关系</p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Content-Type</th><th>提交数据的方式</th></tr></thead><tbody><tr><td>application/x-www-form-urlencoded</td><td>表单数据</td></tr><tr><td>multipart/form-data</td><td>表单文件上传</td></tr><tr><td>application/json</td><td>序列化 JSON 数据</td></tr><tr><td>text/xml</td><td>XML 数据</td></tr></tbody></table>\n<p>在爬虫中，如果要构造 POST 请求，需要使用正确的 Content-Type，并了解各种请求库的各个参数设置时使用的是哪种 Content-Type，不然可能会导致 POST 提交后无法正常响应。</p>\n<h3 id="请求体">请求体<a class="anchor" href="#请求体"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>请求体一般承载的内容是 POST 请求中的表单数据，而对于 GET 请求，请求体则为空。</p>',frontmatter={category:"Network",title:"HTPP Request",topic:["HTTP"],type:"D",tags:["Network","HTTP"],DateStarted:"2024-04-11T00:00:00.000Z",DateModified:"2024-04-18T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["HTPP Request"],"linter-yaml-title-alias":"HTPP Request",minutes:7,words:1417},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/web-protocol/http-request.md",url=void 0;function rawContent(){return'\n# HTPP Request\n\n- [听说『99% 的人都理解错了 HTTP 中 GET 与 POST 的区别』？？](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F25028045 "https://zhuanlan.zhihu.com/p/25028045")\n- [都 9102 年了，还问 GET 和 POST 的区别](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000018129846 "https://segmentfault.com/a/1190000018129846")\n- [HTTP 协议头部与 Keep-Alive 模式详解](https://link.juejin.cn?target=https%3A%2F%2Fwww.byvoid.com%2Fzhs%2Fblog%2Fhttp-keep-alive-header "https://www.byvoid.com/zhs/blog/http-keep-alive-header")\n- [HTTP keep-alive 二三事](https://link.juejin.cn?target=https%3A%2F%2Flotabout.me%2F2019%2FThings-about-keepalive%2F "https://lotabout.me/2019/Things-about-keepalive/")\n\n### Overview\n\n请求，由客户端向服务端发出，可以分为 4 部分内容：\n\n- 请求方法（Request Method）\n- 请求的网址（Request URL）\n- 请求头（Request Headers）\n- 请求体（Request Body）\n\n### General 部分\n\n- Request URL 为请求的 URL，\n- Request Method 为请求的方法，\n- Status Code 为响应状态码，\n- Remote Address 为远程服务器的地址和端口，\n- Referrer Policy 为 Referrer 判别策略。\n\n### 请求方法\n\n常见的请求方法有两种：GET 和 POST，有如下区别。\n\n- GET 请求中的参数包含在 URL 里面，数据可以在 URL 中看到，而 POST 请求的 URL 不会包含这些数据，数据都是通过表单形式传输的，会包含在请求体中。\n- GET 请求提交的数据最多只有 1024 字节，而 POST 方式没有限制。\n\n一般来说，登录时，需要提交用户名和密码，其中包含了敏感信息，使用 GET 方式请求的话，密码就会暴露在 URL 里面，造成密码泄露，所以这里最好以 POST 方式发送。上传文件时，由于文件内容比较大，也会选用 POST 方式。\n\n表 2-1 其他请求方法\n\n| 方法    | 描述                                                          |\n| ------- | ------------------------------------------------------------- |\n| GET     | 请求页面，并返回页面内容                                      |\n| HEAD    | 类似于 GET 请求，不过返回的响应中没有具体的内容，用于获取报头 |\n| POST    | 大多用于提交表单或上传文件，数据包含在请求体中                |\n| PUT     | 从客户端向服务器传送的数据取代指定文档中的内容                |\n| DELETE  | 请求服务器删除指定的页面                                      |\n| CONNECT | 把服务器当作跳板，让服务器代替客户端访问其他网页              |\n| OPTIONS | 允许客户端查看服务器的性能？Returns supported HTTP methods    |\n| TRACE   | 回显服务器收到的请求，主要用于测试或诊断                      |\n| PATCH   | Update partial resources                                      |\n\n本表参考：[http://www.runoob.com/http/http-methods.html](http://www.runoob.com/http/http-methods.html)。\n\n### 请求的网址\n\n请求的网址，即统一资源定位符 [[web-fundamentals/url|URL]]，它可以唯一确定我们想请求的资源。\n\n### 请求头\n\n请求头，是请求的一部分，服务器会根据请求头内的信息判断请求是否合法，进而作出对应的响应。用来说明服务器要使用的附加信息，比较重要的信息有 Cookie、Referer、User-Agent 等。下面简要说明一些常用的头信息。  \n请求头是请求的重要组成部分，在写爬虫时，大部分情况下都需要设定请求头。\n\n- **Accept**：请求报头域，用于指定客户端可接受哪些类型的信息。\n- **Accept-Language**：指定客户端可接受的语言类型。\n- **Accept-Encoding**：指定客户端可接受的内容编码。\n- **Host**：用于指定请求资源的主机 IP 和端口号，其内容为请求 URL 的原始服务器或网关的位置。从 HTTP 1.1 版本开始，请求必须包含此内容。\n- **Cookie**：也常用复数形式 Cookies，这是网站为了辨别用户进行会话跟踪而存储在用户本地的数据。它的主要功能是维持当前访问会话。例如，我们输入用户名和密码成功登录某个网站后，服务器会用会话保存登录状态信息，后面我们每次刷新或请求该站点的其他页面时，会发现都是登录状态，这就是 Cookies 的功劳。Cookies 里有信息标识了我们所对应的服务器的会话，每次浏览器在请求该站点的页面时，都会在请求头中加上 Cookies 并将其发送给服务器，服务器通过 Cookies 识别出是我们自己，并且查出当前状态是登录状态，所以返回结果就是登录之后才能看到的网页内容。\n- **Referer**：此内容用来标识这个请求是从哪个页面发过来的，服务器可以拿到这一信息并做相应的处理，如作来源统计、防盗链处理等。\n- **User-Agent**：简称 UA，它是一个特殊的字符串头，可以使服务器识别客户使用的操作系统及版本、浏览器及版本等信息。在做爬虫时加上此信息，可以伪装为浏览器；如果不加，很可能会被识别出为爬虫。\n- **Content-Type**：也叫互联网媒体类型（Internet Media Type）或者 MIME 类型，在 HTTP 协议消息头中，它用来表示具体请求中的媒体类型信息。例如，text/html 代表 HTML 格式，image/gif 代表 GIF 图片，application/json 代表 JSON 类型，更多对应关系可以查看此对照表：[http://tool.oschina.net/commons](http://tool.oschina.net/commons)\n- content-length: 51`\n- port\n- path - A server might have multiple paths for different services - Separate out logic on the server  \n  例如，这里我登录 GitHub 时捕获到的请求和响应如图 2-7 所示。\n\n![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-7.jpg)图 2-7 详细信息\n\n登录之前，我们填写了用户名和密码信息，提交时这些内容就会以表单数据的形式提交给服务器，注意：  \n表 2-2 Content-Type 和 POST 提交数据方式的关系\n\n| Content-Type                      | 提交数据的方式   |\n| --------------------------------- | ---------------- |\n| application/x-www-form-urlencoded | 表单数据         |\n| multipart/form-data               | 表单文件上传     |\n| application/json                  | 序列化 JSON 数据 |\n| text/xml                          | XML 数据         |\n\n在爬虫中，如果要构造 POST 请求，需要使用正确的 Content-Type，并了解各种请求库的各个参数设置时使用的是哪种 Content-Type，不然可能会导致 POST 提交后无法正常响应。\n\n### 请求体\n\n请求体一般承载的内容是 POST 请求中的表单数据，而对于 GET 请求，请求体则为空。\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"htpp-request",text:"HTPP Request#"},{depth:3,slug:"overview",text:"Overview#"},{depth:3,slug:"general-部分",text:"General 部分#"},{depth:3,slug:"请求方法",text:"请求方法#"},{depth:3,slug:"请求的网址",text:"请求的网址#"},{depth:3,slug:"请求头",text:"请求头#"},{depth:3,slug:"请求体",text:"请求体#"}]}const Content=createComponent(((t,n,e)=>{const{layout:o,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};