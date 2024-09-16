---
category: Network
title: HTTP Request Response Process
topic: 
type: 
tags:
  - Network
  - HTTP
DateStarted: 2024-04-11
DateModified: 2024-09-14
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - HTTP Request Response Process
linter-yaml-title-alias: HTTP Request Response Process
---

# HTTP Request Response Process

我们在浏览器中输入一个 URL，回车之后便会在浏览器中观察到页面内容。实际上，这个过程是浏览器向网站所在的服务器发送了一个请求，网站服务器接收到这个请求后进行处理和解析，然后返回对应的响应，接着传回给浏览器。响应里包含了页面的源代码等内容，浏览器再对其进行解析，便将网页呈现了出来，模型如图 2-4 所示。  
![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-4.jpg)图 2-4 模型图

## Chrome Inspect Network Panel

`F12` Inspect  
输入该 URL 后回车，观察这个过程中发生了怎样的网络请求。可以看到，在 Network 页面下方出现了一个个的条目，其中一个条目就代表一次发送请求和接收响应的过程，如图 2-5 所示。  
![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-5.png)图 2-5 Network 面板  
其中各列的含义如下。

- **第一列 Name**：请求的名称，一般会将 URL 的最后一部分内容当作名称。
- **第二列 Status**：响应的状态码，这里显示为 200，代表响应是正常的。通过状态码，我们可以判断发送了请求之后是否得到了正常的响应。
- **第三列 Type**：请求的文档类型。这里为 document，代表我们这次请求的是一个 HTML 文档，内容就是一些 HTML 代码。
- **第四列 Initiator**：请求源。用来标记请求是由哪个对象或进程发起的。
- **第五列 Size**：从服务器下载的文件和请求的资源大小。如果是从缓存中取得的资源，则该列会显示 from cache。
- **第六列 Time**：发起请求到获取响应所用的总时间。
- **第七列 Waterfall**：网络请求的可视化瀑布流。  
  点击这个条目，即可看到更详细的信息，如图 2-6 所示。  
  ![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-6.jpg)图 2-6 详细信息

## [[http-request]]

## http-response

响应，由服务端返回给客户端，可以分为三部分：

- 响应状态码（Response Status Code）
- 响应头（Response Headers）
- 响应体（Response Body）。  
  包含了服务器的类型、文档类型、日期等信息，浏览器接受到响应后，会解析响应内容，进而呈现网页内容。

### 状态码

> [HTTP: Response Codes](https://dev.opera.com/articles/http-response-codes/)

- [HTTP 响应代码 | MDN](https://link.juejin.cn?target=https%3A%2F%2Fdeveloper.mozilla.org%2Fzh-CN%2Fdocs%2FWeb%2FHTTP%2FStatus "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status")
- [如何理解 HTTP 响应的状态码？](https://link.juejin.cn?target=https%3A%2F%2Fharttle.land%2F2015%2F08%2F15%2Fhttp-status-code.html%23header-11 "https://harttle.land/2015/08/15/http-status-code.html#header-11")
- [你所知道的 3xx 状态码](https://link.juejin.cn?target=https%3A%2F%2Faotu.io%2Fnotes%2F2016%2F01%2F28%2F3xx-of-http-status%2Findex.html "https://aotu.io/notes/2016/01/28/3xx-of-http-status/index.html")
- 1xx：指示信息–表示请求已接收，继续处理。
- 2xx：成功–表示请求已被成功接收、理解、接受。
- 3xx：重定向–要完成请求必须进行更进一步的操作。
- 4xx：客户端错误–请求有语法错误或请求无法实现。
- 5xx：服务器端错误–服务器未能实现合法的请求。  
   平时遇到比较常见的状态码有:200, 204, 301, 302, 304, 400, 401, 403, 404, 422, 500(分别表示什么请自行查找)。

### 响应头

响应头包含了服务器对请求的应答信息，如 Content-Type、Server、Set-Cookie 等。下面简要说明一些常用的头信息。

- **Date**：标识响应产生的时间。
- **Last-Modified**：指定资源的最后修改时间。
- **Content-Encoding**：指定响应内容的编码。
- **Server**：包含服务器的信息，比如名称、版本号等。
- **Content-Type**：文档类型，指定返回的数据类型是什么，如 text/html 代表返回 HTML 文档，application/x-javascript 则代表返回 JavaScript 文件，image/jpeg 则代表返回图片。
- **Set-Cookie**：设置 Cookies。响应头中的 Set-Cookie 告诉浏览器需要将此内容放在 Cookies 中，下次请求携带 Cookies 请求。
- **Expires**：指定响应的过期时间，可以使代理服务器或浏览器将加载的内容更新到缓存中。如果再次访问时，就可以直接从缓存中加载，降低服务器负载，缩短加载时间。

### 响应体

最重要的当属响应体的内容了。响应的正文数据都在响应体中，比如请求网页时，它的响应体就是网页的 HTML 代码；请求一张图片时，它的响应体就是图片的二进制数据。我们做爬虫请求网页后，要解析的内容就是响应体，如图 2-8 所示。  
![](https://cdn.cuiqingcai.com/wp-content/uploads/2018/02/2-8.jpg)图 2-8 响应体内容  
在浏览器开发者工具中点击 Preview，就可以看到网页的源代码，也就是响应体的内容，它是解析的目标。  
在做爬虫时，我们主要通过响应体得到网页的源代码、JSON 数据等，然后从中做相应内容的提取。
