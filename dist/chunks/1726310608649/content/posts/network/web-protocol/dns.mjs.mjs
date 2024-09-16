import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://program-think.blogspot.com/2014/01/dns.html">扫盲 DNS 原理，兼谈“域名劫持”和“域名欺骗/域名污染” @ 编程随想的博客</a></li>\n<li><a href="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name">What is a Domain Name? - Learn web development | MDN</a></li>\n<li><a href="https://www.jianshu.com/p/95a0c0636d28">前端优化: DNS 预解析提升页面速度 - 简书</a></li>\n<li><a href="http://www.sunhao.win/articles/netwrok-dns.html">写给前端工程师的 DNS 基础知识 | Da’sBlog</a></li>\n<li><a href="https://www.iana.org/">Internet Assigned Numbers Authority</a></li>\n<li>DNS 查询的过程，分为哪两种，是怎么一个过程\n<ul>\n<li><a href="https://link.segmentfault.com/?enc=sluwK6V4R8LEIGeW2C9qEw%3D%3D.de17lCzGo7eYZ%2BeibqU9Gni1Hu8pT%2BSLYTQQl1CNHE5hhxwKYnWEUNKhnNj822m1">浅析DNS域名解析过程</a></li>\n</ul>\n</li>\n</ul>\n<h2 id="what">What?<a class="anchor" href="#what"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="1-域名类型有哪些命名原则">1. 域名类型有哪些？命名原则？<a class="anchor" href="#1-域名类型有哪些命名原则"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="2-不同域名类型有性能区别吗">2. 不同域名类型有性能区别吗？<a class="anchor" href="#2-不同域名类型有性能区别吗"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="3-域名购买渠道价格对比">3. 域名购买渠道、价格对比？<a class="anchor" href="#3-域名购买渠道价格对比"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h3 id="domain">Domain<a class="anchor" href="#domain"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Domain is a place on the web where you can store your files.<br>\nEach domain would have a unique IP address which is used to identify it.<br>\nAll domains were connected to a single large server called <strong>DNS server</strong> which is then connected to your browser through the internet.<br>\nTo improve the response time, the DNS are split into many branches<br>\nand put all around the globe and are inter-linked with each other.</p>\n<h2 id="域名申请服务器购买备案">域名申请、服务器购买、备案<a class="anchor" href="#域名申请服务器购买备案"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://developer.aliyun.com/article/771535">阿里云域名申请+服务器购买+备案教程（图文讲解版）-阿里云开发者社区</a></li>\n<li><a href="https://netcn.console.aliyun.com/core/buy/commonbuy">阿里云登录页</a></li>\n</ul>',frontmatter={topic:null,type:"D",category:"Network",Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"dns",tags:["Network"],DateStarted:"2023-03-06T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,Progress:null,draft:!0,minutes:1,words:254},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/web-protocol/dns.md",url=void 0;function rawContent(){return"\n## Reference\n\n- [扫盲 DNS 原理，兼谈“域名劫持”和“域名欺骗/域名污染” @ 编程随想的博客](https://program-think.blogspot.com/2014/01/dns.html)\n- [What is a Domain Name? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_domain_name)\n- [前端优化: DNS 预解析提升页面速度 - 简书](https://www.jianshu.com/p/95a0c0636d28)\n- [写给前端工程师的 DNS 基础知识 | Da'sBlog](http://www.sunhao.win/articles/netwrok-dns.html)\n- [Internet Assigned Numbers Authority](https://www.iana.org/)\n- DNS 查询的过程，分为哪两种，是怎么一个过程\n    - [浅析DNS域名解析过程](https://link.segmentfault.com/?enc=sluwK6V4R8LEIGeW2C9qEw%3D%3D.de17lCzGo7eYZ%2BeibqU9Gni1Hu8pT%2BSLYTQQl1CNHE5hhxwKYnWEUNKhnNj822m1)\n## What?\n\n#### 1. 域名类型有哪些？命名原则？\n\n#### 2. 不同域名类型有性能区别吗？\n\n#### 3. 域名购买渠道、价格对比？\n\n### Domain\nDomain is a place on the web where you can store your files.  \nEach domain would have a unique IP address which is used to identify it.  \nAll domains were connected to a single large server called **DNS server** which is then connected to your browser through the internet.  \nTo improve the response time, the DNS are split into many branches  \nand put all around the globe and are inter-linked with each other.\n\n## 域名申请、服务器购买、备案\n\n- [阿里云域名申请+服务器购买+备案教程（图文讲解版）-阿里云开发者社区](https://developer.aliyun.com/article/771535)\n- [阿里云登录页](https://netcn.console.aliyun.com/core/buy/commonbuy)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"reference",text:"Reference#"},{depth:2,slug:"what",text:"What?#"},{depth:4,slug:"1-域名类型有哪些命名原则",text:"1. 域名类型有哪些？命名原则？#"},{depth:4,slug:"2-不同域名类型有性能区别吗",text:"2. 不同域名类型有性能区别吗？#"},{depth:4,slug:"3-域名购买渠道价格对比",text:"3. 域名购买渠道、价格对比？#"},{depth:3,slug:"domain",text:"Domain#"},{depth:2,slug:"域名申请服务器购买备案",text:"域名申请、服务器购买、备案#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};