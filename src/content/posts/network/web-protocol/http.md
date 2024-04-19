---
category: Network
title: HTTP
tags:
  - Network
  - HTTP
topic: 
type: 
Datereviewed: 2024-04-17
reviewed: 
difficulty: 
comment: 
aliases:
  - HTTP
  - HTTP
DateStarted: 2022-12-10
DateModified: 2024-04-18
status: 
linter-yaml-title-alias: HTTP
---

# HTTP

> [\[Python3 网络爬虫开发实战\] 2.1-HTTP 基本原理 | 静觅](https://cuiqingcai.com/5465.html)

## 访问资源需要的协议类型

在淘宝的首页  [https://www.taobao.com/](https://www.taobao.com/)中，URL 的开头会有 http 或 https，这就是访问资源需要的协议类型。有时，我们还会看到 ftp、sftp、smb 开头的 URL，它们都是协议类型。在爬虫中，我们抓取的页面通常就是 http 或 https 协议的

## HTTP Intro

HTTP 的全称是 Hyper Text Transfer Protocol，中文名叫作超文本传输协议。  
是 Web 联网的基础，也是手机联网常用的协议之一，HTTP 协议是建立在 TCP 协议之上的一种应用。(a higher level abstraction above TCP and IP)

- HTTP 由万维网协会（World Wide Web Consortium）和 Internet 工作小组 IETF（Internet Engineering Task Force）共同合作制定的规范，目前广泛使用的是 HTTP 1.1 版本。
- Request-Response Paradigm  
  HTTP 连接最显著的特点是客户端发送的每次请求都需要服务器回送响应，在请求结束后，会主动释放连接。从建立连接到关闭连接的过程称为“一次连接”。  
  1）在 HTTP 1.0 中，客户端的每次请求都要求建立一次单独的连接，在处理完本次请求后，就自动释放连接。  
  2）在 HTTP 1.1 中则可以在一次连接中处理多个请求，并且多个请求可以重叠进行，不需要等待一个请求结束后再发送下一个请求。  
  由于 HTTP 在每次请求结束后都会主动释放连接，因此 HTTP 连接是一种“**短连接**”，要保持客户端程序的在线状态，需要不断地向服务器发起连接请求。通常 的做法是即时不需要获得任何数据，客户端也保持每隔一段固定的时间向服务器发送一次“保持连接”的请求，服务器在收到该请求后对客户端进行回复，表明知道 客户端“在线”。若服务器长时间无法收到客户端的请求，则认为客户端“下线”，若客户端长时间无法收到服务器的回复，则认为网络已经断开

- [HTTP | MDN](https://developer.mozilla.org/zh-CN/docs/Web/HTTP)
- [HTTP — an Application-Level Protocol](https://dev.opera.com/articles/http-basic-introduction/)
- [HTTP: Let's GET It On!](https://dev.opera.com/articles/http-lets-get-it-on/)
- [前端基础篇之 HTTP 协议](https://juejin.cn/post/6844903844216832007 "https://juejin.cn/post/6844903844216832007")

### [[network/web-protocol/http-request-response-process|HTTP Request Response Process]]

### [[bowser-cache|Bowser Cache]]

## [[web-fundamentals/web-protocol/https|HTTPS]]

## [[web-fundamentals/web-protocol/http2-http3|HTTP2-HTTP3]]
