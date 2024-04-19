---
category: Network
title: URL
topic: 
type: D
Datereviewed: 
reviewed: 
difficulty: 
comment: 
tags:
  - Network
DateStarted: 2023-03-06
DateModified: 2024-04-18
status: 
aliases:
  - URL
linter-yaml-title-alias: URL
---

# URL

## Questions

- [04 | 导航流程：从输入 URL 到页面展示，这中间发生了什么？-极客时间](https://time.geekbang.org/column/article/117637)
- [前端经典面试题: 从输入 URL 到页面加载发生了什么？ - 我的前端之路 - SegmentFault 思否](https://segmentfault.com/a/1190000006879700)
- [What happens when you type a URL into your browser? - YouTube](https://www.youtube.com/watch?v=AlkDbnbv7dk)

## From URL to Page Load

![image.png](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/202404111454215.png)

## What is URL

> [What is a URL? - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL >[\[Python3 网络爬虫开发实战\] 2.1-HTTP 基本原理 | 静觅](https://cuiqingcai.com/5465.html)

### URI 和 URL

这里我们先了解一下 URI 和 URL，URI 的全称为 Uniform Resource Identifier，即统一资源标志符，URL 的全称为 Universal Resource Locator，即统一资源定位符。

举例来说，[https://github.com/favicon.ico](https://github.com/favicon.ico)是 GitHub 的网站图标链接，它是一个 URL，也是一个 URI。即有这样的一个图标资源，我们用 URL/URI 来唯一指定了它的访问方式，这其中包括了访问协议 https、访问路径（/ 即根目录）和资源名称 favicon.ico。通过这样一个链接，我们便可以从互联网上找到这个资源，这就是 URL/URI。

URL 是 URI 的子集，也就是说每个 URL 都是 URI，但不是每个 URI 都是 URL。那么，怎样的 URI 不是 URL 呢？URI 还包括一个子类叫作 URN，它的全称为 Universal Resource Name，即统一资源名称。URN 只命名资源而不指定如何定位资源，比如 urn:isbn:0451450523 指定了一本书的 ISBN，可以唯一标识这本书，但是没有指定到哪里定位这本书，这就是 URN。URL、URN 和 URI 的关系可以用图 2-1 表示。

![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-1.jpg)图 2-1 URL、URN 和 URI 关系图

但是在目前的互联网中，URN 用得非常少，所以几乎所有的 URI 都是 URL，一般的网页链接我们既可以称为 URL，也可以称为 URI，我个人习惯称为 URL。
