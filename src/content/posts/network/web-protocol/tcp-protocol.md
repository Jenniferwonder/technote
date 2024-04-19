---
category: Network
title: TCP
tags:
  - Network
  - TCP-IP
topic: 
type: D
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - TCP
DateStarted: 2023-03-06
DateModified: 2024-04-18
status: 
linter-yaml-title-alias: TCP
---

# TCP

## Online Resources

- $ Related Course
  - [Coursera | Online Courses & Credentials From Top Educators. Join for Free | Coursera](https://www.coursera.org/learn/computer-networking/home/week/1)
- $ Recommend resources to learn TCP/IP - [7 Best Books and Courses to Learn Computer Networking, TCP/IP and UDP Protocols | by javinpaul | Javarevisited | Medium](https://medium.com/javarevisited/5-best-books-and-courses-to-learn-computer-networking-tcp-ip-and-udp-protocols-5a0e4dce75fa)
  > [TCP - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/TCP)
- [就是要你懂 TCP](https://link.juejin.cn/?target=http%3A%2F%2Fjm.taobao.org%2F2017%2F06%2F08%2F20170608%2F "http://jm.taobao.org/2017/06/08/20170608/")

## 三次握手，四次分手

- ✅[通俗大白话来理解 TCP 协议的三次握手和四次分手](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjawil%2Fblog%2Fissues%2F14 "https://github.com/jawil/blog/issues/14")

### 三次握手，建立连接

- [面试时，你被问到过 TCP/IP 协议吗?](https://juejin.cn/post/6844903472559718407 "https://juejin.cn/post/6844903472559718407")
- [“三次握手，四次挥手”你真的懂吗？](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F53374516 "https://zhuanlan.zhihu.com/p/53374516")

![camo.githubusercontent.com/75464b81c1cd2f0beabb6cb8ab092451d79facaa29070ab7879a63ade5fffd42/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d656666376231373339343536663930342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430](https://camo.githubusercontent.com/75464b81c1cd2f0beabb6cb8ab092451d79facaa29070ab7879a63ade5fffd42/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d656666376231373339343536663930342e706e673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)

#### 为什么要三次握手

防止已失效的连接请求报文段突然又传送到了服务端，因而产生错误，使服务器端一直等待而浪费资源。

#### 四次分手，断开连接

TCP 是全双工模式，这就意味着，  
当主机 1 发出 FIN 报文段时，主机 1 告诉主机 2，它的数据已经全部发送完毕了；但是，这个时候主机 1 还是可以接受来自主机 2 的数据；  
当主机 2 返回 ACK 报文段时，表示它已经知道主机 1 没有数据发送了，但是主机 2 还是可以发送数据到主机 1 的；  
当主机 2 也发送了 FIN 报文段时，这个时候就表示主机 2 也没有数据要发送了，就会告诉主机 1，我也没有数据要发送了，之后彼此就会愉快的中断这次 TCP 连接。

## TCP

TCP（Transmission Control Protocol 传输控制协议）是一种面向连接的、可靠的、基于字节流的传输层通信协议。  
[TCP 协议详解](https://juejin.cn/post/6844903685563105293 "https://juejin.cn/post/6844903685563105293")

### ## 可靠性如何保证

- 分块传送：数据被分割成 **最合适的** 数据块（UDP 的数据报长度不变）
- 等待确认：通过定时器等待接收端发送确认请求，收不到确认则重发
- 确认回复：收到确认后发送确认回复(不是立即发送，通常推迟几分之一秒)
- 数据校验：保持首部和数据的校验和，检测数据传输过程有无变化
- 乱序排序：接收端能重排序数据，以正确的顺序交给应用端
- 重复丢弃：接收端能丢弃重复的数据包
- 流量缓冲：两端有固定大小的缓冲区（滑动窗口），防止速度不匹配丢数据
