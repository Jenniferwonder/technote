---
Title: "Window Object "
Type: D
DateStarted: 2023-08-11
DateModified: 2023-11-28
mindmap-plugin: basic
status: Snooze
aliases: Window Object
LeadTime: "1"
Page-D: "11"
Cards-D: "0"
DateDo: 2023-08-11T00:00:00.000+08:00
DateDone: 2023-08-11T00:00:00.000+08:00
Pages: 11
Up:
  - - C12-BOM
EST: "-19579"
Topic:
  - Objects
  - BOM
---

# Window Object

## 定义

- BOM 的核心是 window 对象 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=983282c1-6cc7-7176>)
- 一个是 ECMAScript 中的 Global 对象 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=93de0a57-e943-ed9b>)
- 浏览器窗口的 JavaScript 接口 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=c8bd3b88-a693-a9c1>)
- 网页中定义的所有 对象、变量和函数都以 window 作为其 Global 对象，都可以访问其上定义的 parseInt()等全局方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=4a8879f8-1903-dcf7>)
- 很多浏览器 API 及相关构造函数 都以 window 对象属性的形式暴露出来 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=2131fd93-4718-783e>)
  - [[C20-JS APIs]]
- <mark class="hltr-gray ">" The Global Scope "</mark> [Page 2 ](zotero://open-pdf/library/items/Q5ZZIU26?page=2&annotation=XNNGBKQU)

## <mark class="hltr-gray ">" Window Relationships "</mark> [Page 3 ](zotero://open-pdf/library/items/Q5ZZIU26?page=3&annotation=WQIU7G6K)

- top 对象 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=3382995c-73f5-08f9>)
  - 始终指向最上层（最外层）窗口，即浏览器窗口本身 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=90d03679-50e3-248c>)
- parent 对象 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=d7103d95-9e20-4bb2>)
- self 对象 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=f824969e-9891-2574>)
  - 是终极 window 属性，始终会指向 window [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=c33870e0-bcae-e92d>)
  - self 和 window 就 是同一个对象 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=fef59722-86d8-ac01>)
- 可以把访问多个窗口的 window 对象串联起来，比如 window.parent.parent [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=e4e770ee-c581-39e0>)

## <mark class="hltr-gray ">" Window Position and Pixel Ratio "</mark> [Page 3 ](zotero://open-pdf/library/items/Q5ZZIU26?page=3&annotation=D9PVWD22)

- screenLeft [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=eb921865-484e-e21c>)
- screenTop 属性 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=1bc6d611-c549-5303>)
  - 用于表示窗口相对于屏幕左侧和顶部的位置 ，返回值的单位是 CSS 像素 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=63cf6802-bcdf-562b>)
- moveTo()和 moveBy()方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=c2835f2e-7ee5-3b3b>)
  - 移动窗口 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=aa599ab6-340d-a03a>)
  - moveTo()接 收要移动到的新位置的绝对坐标 x 和 y [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=e44a1c62-a04e-7d2e>)
  - moveBy()则接收相对当前位置在两个方向上移动的像素数 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=54898107-8887-54b4>)
- 像素比 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=cdf84a4a-4c17-78b1>)
  - window.devicePixelRatio 属性 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7f77388e-1079-2e2a>)

## <mark class="hltr-gray ">" Window Size "</mark> [Page 4 ](zotero://open-pdf/library/items/Q5ZZIU26?page=4&annotation=HKRSU56F)

- outerWidth 和 outerHeight [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=5a8a933f-9497-d7a8>)
  - 返回浏 览器窗口自身的大小（不管是在最外层 window 上使用，还是在窗格<frame>中使用） [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=148604d2-b0c2-a0f2>)
- innerWidth 和 innerHeight [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=2ae3e38e-f3a4-300c>)
  - 确定页面视口的大小,（不包含浏览器边框和工具栏） [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=6013f2d1-2e6d-0317>)
- document.documentElement.clientWidth 和 document.documentElement.clientHeight [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=37e68dd5-62d1-896d>)
  - 返回页面视口的宽度和高度 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=b3415f39-82ea-fa75>)
- resizeTo() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=d0f02323-2c95-11b2>)
  - 接收新的宽度和高度值 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=090dfdd4-e0ca-863f>)
- resizeBy() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=5c9bb965-4aa3-eeee>)
  - 接收宽度和高度各要缩放多少 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=88953c9b-8977-2ab2>)

## <mark class="hltr-gray ">" Window Viewport Position "</mark> [Page 5 ](zotero://open-pdf/library/items/Q5ZZIU26?page=5&annotation=EY339RJT)

- 度量文档相对于视口滚动距离的属性有两对 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=490215dc-2289-a364>)
  - window.pageXoffset/window. scrollX [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=653a716d-283e-27c2>)
  - window.pageYoffset/window.scrollY [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=ef48a5cd-9a8b-e936>)
- 滚动页面 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=bc7249df-fc64-6e29>)
  - scroll()、scrollTo()和 scrollBy()方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=4b76bd38-538a-63ad>)
    - 都接收表示相对视口距 离的 x 和 y 坐标 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=19c83651-8b47-a033>)
    - 在前两个方法中表示要滚动到的坐标 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=71c93d42-b291-9e02>)
    - 在最后一个方法中表示滚动的距离 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=2b57f189-58a7-866d>)
- ScrollToOptions 字典 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=6e016276-eb78-4ff1>)
  - 提供偏移值，还可以通过 behavior 属性 告诉浏览器是否平滑滚动 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=b52ed5e4-425b-e3f0>)
  - ![[1691735043389.png]] [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=62e2b8c8-7d43-f221>)

## <mark class="hltr-gray ">" Navigating and Opening Windows "</mark> [Page 6 ](zotero://open-pdf/library/items/Q5ZZIU26?page=6&annotation=5UC96D67)

- <mark class="hltr-gray ">" Popping Up Windows "</mark> [Page 6 ](zotero://open-pdf/library/items/Q5ZZIU26?page=6&annotation=H82BCCAN)
  - window.open()方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7c837d4e-60d9-8f94>)
    - 接收 4 个参数 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=3d006d04-2e77-7872>)
      - 要加载的 URL [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=b07b86a3-52f4-42a6>)
      - 目标窗口 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=fd3dc231-dbde-735f>)
      - 特性字符串 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=9acd17e0-cc65-0bca>)
        - 特性字符串是一个逗号分隔的设置字符串，用于指定新窗口包含的特性 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=98572783-3be0-fb2b>)
        - 如果没有传第三个参数，则新窗口（或标签页）会带有所有默 认的浏览器特性（工具栏、地址栏、状态栏等都是默认配置） [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=66f077f9-dff8-8b3b>)
        - 如果打开的不是新窗口，则忽略第三个 参数 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7bd54670-47ed-a0b7>)
        - ![[1691735260784.png]] [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=5597dd2f-2d05-9ceb>)
        - ![[1691735268390.png]] [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=88991d0e-bff2-dad0>)
        - 这些设置需要以逗号分隔的名值对形式出现 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=37ca43b6-b390-31f4>)
        - 名值对以等号连接 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=9e210e95-b750-2d31>)
        - 不能包含空 格 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=fe2b45f6-79e0-f6a9>)
      - 表示新窗口在浏览器历史记录中是否替代当前加载页 面的布尔值 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7875c7fa-a361-adda>)
        - 最后一个参数只有在不打开新窗口时才会使用 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=9947a887-063f-2be8>)
  - close()方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=9d510e14-211b-8d2f>)
- <mark class="hltr-gray ">" Security Restrictions "</mark> [Page 9 ](zotero://open-pdf/library/items/Q5ZZIU26?page=9&annotation=6NNWRMQT)
  - 浏览器会在用户操作下才允许创建弹窗。在网页加载过程中调用 window.open()没有效果， 而且还可能导致向用户显示错误。弹窗通常可能在鼠标点击或按下键盘中某个键的情况下才能打开 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=dd8b3371-e031-7a7e>)
- <mark class="hltr-gray ">" Pop-up Blockers "</mark> [Page 9 ](zotero://open-pdf/library/items/Q5ZZIU26?page=9&annotation=PU9JSDJX)

## <mark class="hltr-gray ">" Intervals and Timeouts "</mark> [Page 10 ](zotero://open-pdf/library/items/Q5ZZIU26?page=10&annotation=UZL7QCQW)

- [[Timer-计时器函数]]
- setTimeout() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=a62e897e-bc9c-5570>)
  - 用于指定在一定时间后执行某些代码 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=18965a9a-0cf9-aa44>)
  - setTimeout()方法通常接收两个参数 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=dc9c89a7-5791-4e83>)
    - 要执行的代码 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=891b0cc9-41da-03e8>)
    - 执行回调函数前等待的时间（毫秒） [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=a2d56314-669d-bd97>)
- setInterval() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=996103de-5e8b-f6d8>)
  - 用于指定 每隔一段时间执行某些代码 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=34f263c2-d42a-fb9a>)

## <mark class="hltr-gray ">" System Dialogs "</mark> [Page 12 ](zotero://open-pdf/library/items/Q5ZZIU26?page=12&annotation=6K4HJ2RP)

- 这些对话框都是同步的模态对话框 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=2e9b9941-bee6-3cd5>)
  - alert() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=00942433-a72d-5802>)
  - confirm() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=6e1c66e2-9ee6-15a3>)
    - 确认框 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=1881f0d2-66fc-cf7b>)
    - 确认框有两个按钮：“Cancel”（取消）和“OK”（确定）。 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=f2400619-52f2-dc6b>)
  - prompt()方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=730cd4d4-0c35-44c3>)
    - 提示用户输入消息。 除了 OK 和 Cancel 按钮，提示框还会显示一个文本框，让用户输入内容 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=f5b9dcba-fb4a-25ce>)
  - 它们显示的时候，代码会停止执行， 在它们消失以后，代码才会恢复执行。 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=9f2c15e1-3b22-c0c6>)
  - 外观由操作系统或者浏览器决定， 无法使用 CSS 设置 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=69fb032c-246a-0b58>)
- 这两种对话框都是异步显示的，即控 制权会立即返回给脚本 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7ccdd461-da81-3ff5>)
  - find() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=a8c997a4-e407-02a7>)
  - print() [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=75bcc404-78a7-9b7b>)
  - 这两个方法不会返回任何有关用户在对话框中执行了什么操作的信息，因此很难加以利用 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=74edb1aa-2992-c146>)
