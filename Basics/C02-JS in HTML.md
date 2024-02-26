---
Title: C02-JS in HTML
Type: O
DateStarted: 2023-07-12
DateModified: 2023-07-14
mindmap-plugin: basic
status:
  - Mature
aliases:
  - C02
LeadTime: "2"
Cards: 12
DateDo: 2023-07-10T00:00:00.000+08:00
DateDone: 2023-07-11T00:00:00.000+08:00
Pages: 12
Topic:
  - Basics
---

# C02-JS in HTML (JS 脚本/资源加载方式)

## 目的

- 在 HTML 中调用 JS 代码

## 🚫 行内代码

- <mark class="hltr-yellow ">" embed JavaScript code directly into the page "</mark> [Page 61 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=61&annotation=XJ375MWA)

## ✅ 外部文件

- 相比行内代码优点？
  - 缓存 (Caching) [Page 68 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=68&annotation=532FKVLW)
    - 页面加载更快 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=4b72a287-15d2-9886>)
      - 浏览器会根据特定的设置缓存所有外部链接的 JavaScript 文件 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=e8e4cc50-59d0-6a9b>)
      - 如果两个页面都用到同一个文件，则该文件只需下载一次 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=8017f806-18d0-bb93>)
  - 可维护性 (Maintainability) [Page 68 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=68&annotation=BNF5EWN6)
  - 适应未来 (Future-proof) [Page 68 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=68&annotation=6I7BK5RI)
- 怎样加载外部 JS 文件？
  - ⭐**Script 标签/静态脚本加载**
    - 功能（特点）
      - Resources fetched in this fashion will be hidden from **browser preloaders** [Page 65 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=65&annotation=QU2KXEVB)
      - <mark class="hltr-yellow ">" You are not limited to using static script tags to retrieve resources "</mark> [Page 65 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=65&annotation=66RIBDUF)
    - 用法
      - 位置
        - include all JavaScript references **in the `<body>` element, after the page content**
          - ![[Paste image 1689431862863image.png]]
      - 主要属性
        - <mark class="hltr-orange ">" src "</mark> [Page 61 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=61&annotation=K98LZDHQ)
          - 功能
            - Able to include JavaScript files from outside domains
          - ⚠️ 注意事项
            - <mark class="hltr-yellow ">" Code from an external domain will be loaded and interpreted as if it were part of the page that is loading it. "</mark> [Page 63 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=63&annotation=IYETJBH9)
            - <mark class="hltr-yellow ">" When including JavaScript files from a different domain, make sure you are the domain owner or the domain is owned by a trusted source. "</mark> [Page 63 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=63&annotation=AXF4DMG4)
        - <mark class="hltr-orange ">" `async` "</mark> [Page 60 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=60&annotation=J2DAXE83)
          - scripts are not always executed in order
          - 3rd-party scripts
        - <mark class="hltr-orange ">" defer "</mark> [Page 61 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=61&annotation=R57W98BT)
          - scripts are exexuted in order
          - ! better solution
            - library
            - own script
        - <mark class="hltr-orange ">" crossorigin "</mark> [Page 60 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=60&annotation=DMU5C5VF)
          - crossorigin: anonymous
          - crossorigin: use-credentials
      - 其他属性
        - <mark class="hltr-orange ">" type "</mark> [Page 61 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=61&annotation=2K43E9UP)
        - <mark class="hltr-orange ">" integrity "</mark> [Page 61 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=61&annotation=NZVCF6GM)
        - <mark class="hltr-orange ">" charset "</mark> [Page 60 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=60&annotation=LX42RWGZ)
          - rarely used
      - 代码示例
        - 延迟脚本：in head **` <script defer src=...>`**
        - 异步脚本：in head **`<script async src=...>`**
        - 本地 JS 文件引用：**`<script src="example.js"></script> `**
        - 网络 JS 文件引用：**`<script src="http://www.somewhere.com/afile.js"></script>`**
  - ⭐ **Link 标签/动态脚本加载**
    - 功能
      - 与 Script 标签加载资源不同的另一种加载资源/脚本的方式
      - <mark class="hltr-yellow ">" To inform **preloaders** of the existence of these dynamically requested files "</mark> [Page 65 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=65&annotation=G27BT23W)
    - 用法
      - 位置
        - <mark class="hltr-orange ">" you can explicitly declare them in the document head: "</mark> [Page 65 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=65&annotation=FFYT4Q6K)
      - 属性
        - 🟨`rel`
        - 🟨`href`
      - 代码示例
        - Link 标签：\*\*`<link rel="subresource" href="gibberish.js">

## ❓JS 脚本/资源无法加载的情况

- **`noscript` 标签** [Page 70 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=70&annotation=WNF8YEU9) - <mark class="hltr-yellow ">" created to provide alternate content for browsers without JavaScript "</mark> [Page 70 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=70&annotation=YAPFC98M) - 设置针对不支持/关闭 JS 浏览器的定制内容


## 相关概念

- [[HTML]] 标签编译顺序
  - <mark class="hltr-yellow ">" elements are interpreted in the order in which they occur on the page so long as defer and async attributes are not used "</mark> [Page 71 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=71&annotation=7SG6FZJC)
- 🟨 Browser Preloader (浏览器预加载器)
- <mark class="hltr-gray ">" Changes in XHTML "</mark> [Page 66 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=66&annotation=Y3TDAWQF)
  - <mark class="hltr-orange ">" Extensible HyperText Markup Language, or XHTML "</mark> [Page 66 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=66&annotation=6VY2IR27)
  - <mark class="hltr-yellow ">" a reformulation of HTML as an application of XML "</mark> [Page 66 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=66&annotation=2GFBX3VF)
  - <mark class="hltr-yellow ">" The rules for writing code in XHTML are stricter than those for HTML "</mark> [Page 66 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=66&annotation=HM66KQZJ)
- <mark class="hltr-gray ">" DOCUMENT MODES "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=4HEFIVFR)
  - <mark class="hltr-orange ">" doctype switching "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=AFAZPW4D)
    - <mark class="hltr-yellow ">" the primary difference between these two modes is related to the rendering of content with regard to CSS "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=EV6VLGIM)
    - <mark class="hltr-yellow ">" there are also several side effects related to JavaScript "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=F9MYZ4YA)
  - <mark class="hltr-orange ">" quirks mode "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=XWDWJW5Z)
    - <mark class="hltr-yellow ">" Quirks mode is achieved in all browsers by omitting the doctype at the beginning of the document. "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=5I7BVWYF)
    - <mark class="hltr-yellow ">" This is considered poor practice "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=W9M8HAZ4)
    - <mark class="hltr-yellow ">" quirks mode is very different across all browsers "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=XH872MZS)
    - <mark class="hltr-yellow ">" no level of true browser consistency can be achieved without hacks. "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=97E59QGN)
  - <mark class="hltr-orange ">" standards mode "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=DS4Z4ZKJ)
    - <mark class="hltr-orange ">" Standards mode is turned on when one of the following doctypes is used: "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=RL5ZTCN9)
    - ![[C-Professional JavaScript for Web Developers.png|350]]
  - <mark class="hltr-orange ">" almost standards mode "</mark> [Page 69 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=69&annotation=K4KQVAYH)
