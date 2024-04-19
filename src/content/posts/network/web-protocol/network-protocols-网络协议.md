---
category: Network
title: Network Protocols
type: D
topic: 
Datereviewed: 
reviewed: 
difficulty: 
comment: 
tags:
  - Network
DateStarted: 2023-03-06
DateModified: 2024-04-18
status: 
linter-yaml-title-alias: Network Protocols
aliases:
  - Network Protocols
---

# Network Protocols

## Reference

- [Protocol - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/Protocol)
- [[private/p-network/S-Network]]

## OSI 的七层模型：

✅[通俗大白话来理解 TCP 协议的三次握手和四次分手](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fjawil%2Fblog%2Fissues%2F14 "https://github.com/jawil/blog/issues/14")  
在 **TCP/IP 协议栈**里，后三层可以并为一层，如底层的 ARP 协议、中间的 TCP/UDP 协议，以及高层的 HTTP 协议。  
在**ISO/OSI**七层模型中，每一层的作用和对应的协议如下：  
[![](https://camo.githubusercontent.com/b5edc916eebc7117d31a8f47d194def70e8e3fe3269f7a92647da93b35ca3bbe/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d323062333132323731313732616364632e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)](https://camo.githubusercontent.com/b5edc916eebc7117d31a8f47d194def70e8e3fe3269f7a92647da93b35ca3bbe/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d323062333132323731313732616364632e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)  
[![](https://camo.githubusercontent.com/3568ca73ef69fb3fbccf7f03867933c98b4ec3c99721261389faba43ca56c928/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d313235396366326233646635333766342e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)](https://camo.githubusercontent.com/3568ca73ef69fb3fbccf7f03867933c98b4ec3c99721261389faba43ca56c928/687474703a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f323434383735322d313235396366326233646635333766342e6a70673f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970253743696d61676556696577322f322f772f31323430)  
每个 **数据** 都会经过数据的封装和解封装的过程。  
第七层——应用层，数据从应用层发下来，会在每一层都会加上头部信息，进行封装，然后再发送到数据接收端。([[web-fundamentals/web-protocol/http|HTTP]])  
第四层——Transport 层，数据叫 Segment。([[web-fundamentals/web-protocol/tcp-protocol|TCP]], UDP)

- 传输层（包含连接保持机制）  
  第三层——Network 层，数据叫 Packet ([[ip-protocol|IP]], ICMP)
- 网络层（包含路由机制）  
  第二层——Data Link 层，数据叫 Frame (ARP, RARP)
- 数据链路层（包含错误重发机制）

### Protocol

- Rules for interactions between two parties

### Network protocol

- the type of messages that are going to be sent over the network
- format, structure and order of those messages
- whether or not there should be some sort of response, and what the response should look like
- whether or not there should be rules around when messages can be sent to one another

## [[socket|Socket]]
