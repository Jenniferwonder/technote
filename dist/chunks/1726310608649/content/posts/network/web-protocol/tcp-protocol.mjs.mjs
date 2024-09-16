import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="tcp">TCP<a class="anchor" href="#tcp"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="online-resources">Online Resources<a class="anchor" href="#online-resources"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>$ Related Course\n<ul>\n<li><a href="https://www.coursera.org/learn/computer-networking/home/week/1">Coursera | Online Courses &#x26; Credentials From Top Educators. Join for Free | Coursera</a></li>\n</ul>\n</li>\n<li>$ Recommend resources to learn TCP/IP - <a href="https://medium.com/javarevisited/5-best-books-and-courses-to-learn-computer-networking-tcp-ip-and-udp-protocols-5a0e4dce75fa">7 Best Books and Courses to Learn Computer Networking, TCP/IP and UDP Protocols | by javinpaul | Javarevisited | Medium</a>\n<blockquote>\n<p><a href="https://developer.mozilla.org/en-US/docs/Glossary/TCP">TCP - MDN Web Docs Glossary: Definitions of Web-related terms | MDN</a></p>\n</blockquote>\n</li>\n<li><a href="https://link.juejin.cn/?target=http%3A%2F%2Fjm.taobao.org%2F2017%2F06%2F08%2F20170608%2F" title="http://jm.taobao.org/2017/06/08/20170608/">就是要你懂 TCP</a></li>\n</ul>\n<h2 id="三次握手四次分手">三次握手，四次分手<a class="anchor" href="#三次握手四次分手"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>✅<a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjawil%2Fblog%2Fissues%2F14" title="https://github.com/jawil/blog/issues/14">通俗大白话来理解 TCP 协议的三次握手和四次分手</a></li>\n</ul>\n<h3 id="三次握手建立连接">三次握手，建立连接<a class="anchor" href="#三次握手建立连接"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li><a href="https://juejin.cn/post/6844903472559718407" title="https://juejin.cn/post/6844903472559718407">面试时，你被问到过 TCP/IP 协议吗?</a></li>\n<li><a href="https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F53374516" title="https://zhuanlan.zhihu.com/p/53374516">“三次握手，四次挥手”你真的懂吗？</a></li>\n</ul>\n<p><img src="https://camo.githubusercontent.com/75464b81c1cd2f0beabb6cb8ab092451d79facaa29070ab7879a63ade5fffd42/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d656666376231373339343536663930342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430" alt="camo.githubusercontent.com/75464b81c1cd2f0beabb6cb8ab092451d79facaa29070ab7879a63ade5fffd42/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d656666376231373339343536663930342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430"></p>\n<h4 id="为什么要三次握手">为什么要三次握手<a class="anchor" href="#为什么要三次握手"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误，使服务器端一直等待而浪费资源。</p>\n<h4 id="四次分手断开连接">四次分手，断开连接<a class="anchor" href="#四次分手断开连接"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>TCP 是全双工模式，这就意味着，<br>\n当主机 1 发出 FIN 报文段时，主机 1 告诉主机 2，它的数据已经全部发送完毕了；但是，这个时候主机 1 还是可以接受来自主机 2 的数据；<br>\n当主机 2 返回 ACK 报文段时，表示它已经知道主机 1 没有数据发送了，但是主机 2 还是可以发送数据到主机 1 的；<br>\n当主机 2 也发送了 FIN 报文段时，这个时候就表示主机 2 也没有数据要发送了，就会告诉主机 1，我也没有数据要发送了，之后彼此就会愉快的中断这次 TCP 连接。</p>\n<h2 id="tcp-1">TCP<a class="anchor" href="#tcp-1"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。<br>\n<a href="https://juejin.cn/post/6844903685563105293" title="https://juejin.cn/post/6844903685563105293">TCP 协议详解</a></p>\n<h3 id="-可靠性如何保证">## 可靠性如何保证<a class="anchor" href="#-可靠性如何保证"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>分块传送：数据被分割成 <strong>最合适的</strong> 数据块（UDP 的数据报长度不变）</li>\n<li>等待确认：通过定时器等待接收端发送确认请求，收不到确认则重发</li>\n<li>确认回复：收到确认后发送确认回复(不是立即发送，通常推迟几分之一秒)</li>\n<li>数据校验：保持首部和数据的校验和，检测数据传输过程有无变化</li>\n<li>乱序排序：接收端能重排序数据，以正确的顺序交给应用端</li>\n<li>重复丢弃：接收端能丢弃重复的数据包</li>\n<li>流量缓冲：两端有固定大小的缓冲区（滑动窗口），防止速度不匹配丢数据</li>\n</ul>',frontmatter={category:"Network",title:"TCP",tags:["Network","TCP-IP"],topic:null,type:"D",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["TCP"],DateStarted:"2023-03-06T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,"linter-yaml-title-alias":"TCP",minutes:3,words:588},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/network/web-protocol/tcp-protocol.md",url=void 0;function rawContent(){return'\n# TCP\n\n## Online Resources\n\n- $ Related Course\n  - [Coursera | Online Courses & Credentials From Top Educators. Join for Free | Coursera](https://www.coursera.org/learn/computer-networking/home/week/1)\n- $ Recommend resources to learn TCP/IP - [7 Best Books and Courses to Learn Computer Networking, TCP/IP and UDP Protocols | by javinpaul | Javarevisited | Medium](https://medium.com/javarevisited/5-best-books-and-courses-to-learn-computer-networking-tcp-ip-and-udp-protocols-5a0e4dce75fa)\n  > [TCP - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/TCP)\n- [就是要你懂 TCP](https://link.juejin.cn/?target=http%3A%2F%2Fjm.taobao.org%2F2017%2F06%2F08%2F20170608%2F "http://jm.taobao.org/2017/06/08/20170608/")\n\n## 三次握手，四次分手\n\n- ✅[通俗大白话来理解 TCP 协议的三次握手和四次分手](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjawil%2Fblog%2Fissues%2F14 "https://github.com/jawil/blog/issues/14")\n\n### 三次握手，建立连接\n\n- [面试时，你被问到过 TCP/IP 协议吗?](https://juejin.cn/post/6844903472559718407 "https://juejin.cn/post/6844903472559718407")\n- [“三次握手，四次挥手”你真的懂吗？](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F53374516 "https://zhuanlan.zhihu.com/p/53374516")\n\n![camo.githubusercontent.com/75464b81c1cd2f0beabb6cb8ab092451d79facaa29070ab7879a63ade5fffd42/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d656666376231373339343536663930342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430](https://camo.githubusercontent.com/75464b81c1cd2f0beabb6cb8ab092451d79facaa29070ab7879a63ade5fffd42/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d656666376231373339343536663930342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)\n\n#### 为什么要三次握手\n\n防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误，使服务器端一直等待而浪费资源。\n\n#### 四次分手，断开连接\n\nTCP 是全双工模式，这就意味着，  \n当主机 1 发出 FIN 报文段时，主机 1 告诉主机 2，它的数据已经全部发送完毕了；但是，这个时候主机 1 还是可以接受来自主机 2 的数据；  \n当主机 2 返回 ACK 报文段时，表示它已经知道主机 1 没有数据发送了，但是主机 2 还是可以发送数据到主机 1 的；  \n当主机 2 也发送了 FIN 报文段时，这个时候就表示主机 2 也没有数据要发送了，就会告诉主机 1，我也没有数据要发送了，之后彼此就会愉快的中断这次 TCP 连接。\n\n## TCP\n\nTCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。  \n[TCP 协议详解](https://juejin.cn/post/6844903685563105293 "https://juejin.cn/post/6844903685563105293")\n\n### ## 可靠性如何保证\n\n- 分块传送：数据被分割成 **最合适的** 数据块（UDP 的数据报长度不变）\n- 等待确认：通过定时器等待接收端发送确认请求，收不到确认则重发\n- 确认回复：收到确认后发送确认回复(不是立即发送，通常推迟几分之一秒)\n- 数据校验：保持首部和数据的校验和，检测数据传输过程有无变化\n- 乱序排序：接收端能重排序数据，以正确的顺序交给应用端\n- 重复丢弃：接收端能丢弃重复的数据包\n- 流量缓冲：两端有固定大小的缓冲区（滑动窗口），防止速度不匹配丢数据\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"tcp",text:"TCP#"},{depth:2,slug:"online-resources",text:"Online Resources#"},{depth:2,slug:"三次握手四次分手",text:"三次握手，四次分手#"},{depth:3,slug:"三次握手建立连接",text:"三次握手，建立连接#"},{depth:4,slug:"为什么要三次握手",text:"为什么要三次握手#"},{depth:4,slug:"四次分手断开连接",text:"四次分手，断开连接#"},{depth:2,slug:"tcp-1",text:"TCP#"},{depth:3,slug:"-可靠性如何保证",text:"## 可靠性如何保证#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};