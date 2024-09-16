import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="https">HTTPS<a class="anchor" href="#https"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<p>⭐<a href="https://liruifengv.com/posts/certbot-https/">使用 Certbot 申请免费 HTTPS 证书及自动续期</a></p>\n<ul>\n<li><a href="https://juejin.cn/post/6844903830916694030" title="https://juejin.cn/post/6844903830916694030">深入理解 HTTPS 工作原理</a></li>\n<li><a href="https://juejin.cn/post/6844903521272201223" title="https://juejin.cn/post/6844903521272201223">九个问题从入门到熟悉 HTTPS</a></li>\n<li><a href="https://juejin.cn/post/6844903504046211079" title="https://juejin.cn/post/6844903504046211079">谈谈 HTTPS</a></li>\n<li><a href="https://juejin.cn/post/6844903608421449742" title="https://juejin.cn/post/6844903608421449742">看图学 HTTPS</a></li>\n<li><a href="https://juejin.cn/post/6844903599303032845" title="https://juejin.cn/post/6844903599303032845">分分钟让你理解 HTTPS</a></li>\n</ul>\n<h2 id="https-securityhttps-security">[[https-security|HTTPS Security]]<a class="anchor" href="#https-securityhttps-security"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="https-intro">HTTPS Intro<a class="anchor" href="#https-intro"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>HTTPS 的全称是 Hyper Text Transfer Protocol over Secure Socket Layer，是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，简称为 HTTPS。</p>\n<p>HTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种。</p>\n<ul>\n<li>建立一个信息安全通道来保证数据传输的安全。</li>\n<li>确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。</li>\n</ul>\n<p>现在越来越多的网站和 App 都已经向 HTTPS 方向发展，例如：</p>\n<ul>\n<li>苹果公司强制所有 iOS App 在 2017 年 1 月 1 日前全部改为使用 HTTPS 加密，否则 App 就无法在应用商店上架；</li>\n<li>谷歌从 2017 年 1 月推出的 Chrome 56 开始，对未进行 HTTPS 加密的网址链接亮出风险提示，即在地址栏的显著位置提醒用户 “此网页不安全”；</li>\n<li>腾讯微信小程序的官方需求文档要求后台使用 HTTPS 请求进行网络通信，不满足条件的域名和协议无法请求。</li>\n</ul>\n<p>而某些网站虽然使用了 HTTPS 协议，但还是会被浏览器提示不安全，例如我们在 Chrome 浏览器里面打开 12306，链接为：<a href="https://www.12306.cn/">https://www.12306.cn/</a>，这时浏览器就会提示 “您的连接不是私密连接” 这样的话，如图 2-3 所示。</p>\n<p><img src="https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-3.png" alt="">图 2-3 12306 页面</p>\n<p>这是因为 12306 的 CA 证书是中国铁道部自行签发的，而这个证书是不被 CA 机构信任的，所以这里证书验证就不会通过而提示这样的话，但是实际上它的数据传输依然是经过 SSL 加密的。如果要爬取这样的站点，就需要设置忽略证书的选项，否则会提示 SSL 链接错误。</p>',frontmatter={category:"Network",title:"HTTPS",topic:null,type:"D",Datereviewed:null,reviewed:null,difficulty:null,comment:null,tags:["Network","HTTPS"],DateStarted:"2022-12-16T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,aliases:["HTTPS"],"linter-yaml-title-alias":"HTTPS",minutes:3,words:565},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/web-protocol/https.md",url=void 0;function rawContent(){return'\n# HTTPS\n\n⭐[使用 Certbot 申请免费 HTTPS 证书及自动续期](https://liruifengv.com/posts/certbot-https/)\n\n- [深入理解 HTTPS 工作原理](https://juejin.cn/post/6844903830916694030 "https://juejin.cn/post/6844903830916694030")\n- [九个问题从入门到熟悉 HTTPS](https://juejin.cn/post/6844903521272201223 "https://juejin.cn/post/6844903521272201223")\n- [谈谈 HTTPS](https://juejin.cn/post/6844903504046211079 "https://juejin.cn/post/6844903504046211079")\n- [看图学 HTTPS](https://juejin.cn/post/6844903608421449742 "https://juejin.cn/post/6844903608421449742")\n- [分分钟让你理解 HTTPS](https://juejin.cn/post/6844903599303032845 "https://juejin.cn/post/6844903599303032845")\n\n## [[https-security|HTTPS Security]]\n\n## HTTPS Intro\n\nHTTPS 的全称是 Hyper Text Transfer Protocol over Secure Socket Layer，是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，简称为 HTTPS。\n\nHTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种。\n\n- 建立一个信息安全通道来保证数据传输的安全。\n- 确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。\n\n现在越来越多的网站和 App 都已经向 HTTPS 方向发展，例如：\n\n- 苹果公司强制所有 iOS App 在 2017 年 1 月 1 日前全部改为使用 HTTPS 加密，否则 App 就无法在应用商店上架；\n- 谷歌从 2017 年 1 月推出的 Chrome 56 开始，对未进行 HTTPS 加密的网址链接亮出风险提示，即在地址栏的显著位置提醒用户 “此网页不安全”；\n- 腾讯微信小程序的官方需求文档要求后台使用 HTTPS 请求进行网络通信，不满足条件的域名和协议无法请求。\n\n而某些网站虽然使用了 HTTPS 协议，但还是会被浏览器提示不安全，例如我们在 Chrome 浏览器里面打开 12306，链接为：[https://www.12306.cn/](https://www.12306.cn/)，这时浏览器就会提示 “您的连接不是私密连接” 这样的话，如图 2-3 所示。\n\n![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-3.png)图 2-3 12306 页面\n\n这是因为 12306 的 CA 证书是中国铁道部自行签发的，而这个证书是不被 CA 机构信任的，所以这里证书验证就不会通过而提示这样的话，但是实际上它的数据传输依然是经过 SSL 加密的。如果要爬取这样的站点，就需要设置忽略证书的选项，否则会提示 SSL 链接错误。\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"https",text:"HTTPS#"},{depth:2,slug:"https-securityhttps-security",text:"[[https-security|HTTPS Security]]#"},{depth:2,slug:"https-intro",text:"HTTPS Intro#"}]}const Content=createComponent(((t,n,e)=>{const{layout:p,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};