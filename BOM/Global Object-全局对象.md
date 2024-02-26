---
Title: Global Object
Type: D
DateStarted: 2023-07-20
DateModified: 2023-11-28
mindmap-plugin: basic
status: Snooze
LeadTime: "17"
DateDo: 2023-07-18T00:00:00.000+08:00
DateDone: 2023-08-03T00:00:00.000+08:00
Cards: 10
Cards-D: "1"
Page-D: "0"
EST: "-19555"
Topic:
  - Objects
  - DOM
---

# [D-JS](O-JS.md) Global Object-全局对象

## 定义

- Global 对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。

## 方法

- <mark class="hltr-yellow "> isNaN(), isFinite(), parseInt(), and parseFloat(), are actually methods of the Global object </mark> [Page 33](zotero://open-pdf/library/items/6CRSJHBD?page=33&annotation=ABW2SKGC)
- " URI-Encoding Methods " [Page 34 ](zotero://open-pdf/library/items/6CRSJHBD?page=34&annotation=BIEWLRJK)
  - 目的
    - 用于编码统一资源标识符（ URI），特殊的 UTF-8 编码替换掉所有无效字符空格等，使浏览器理解
  - <mark class="hltr-orange "> encodeURI() </mark> [Page 34](zotero://open-pdf/library/items/6CRSJHBD?page=34&annotation=XCVEE45A)
    - <mark class="hltr-yellow "> can be used on full URIs </mark> [Page 34](zotero://open-pdf/library/items/6CRSJHBD?page=34&annotation=HRFMTER3)
    - 不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、井号
  - <mark class="hltr-orange "> encodeURIComponent() </mark> [Page 34](zotero://open-pdf/library/items/6CRSJHBD?page=34&annotation=PSMZMJFT)
    - <mark class="hltr-yellow "> can be used only on strings that are appended to the end of an existing URI. </mark> [Page 34](zotero://open-pdf/library/items/6CRSJHBD?page=34&annotation=WIIIR3U7)
    - 会编码它发现的所有非标准字符
  - ![](z-Assets/C05BasicReferenceTypes-34-x67-y372.png)
- " The eval() Method " [Page 35 ](zotero://open-pdf/library/items/6CRSJHBD?page=35&annotation=NS6GEF6L)
  - <mark class="hltr-yellow "> the most powerful in the entire ECMAScript language </mark> [Page 35](zotero://open-pdf/library/items/6CRSJHBD?page=35&annotation=JGCRMSIN)
  - <mark class="hltr-yellow "> This method works like an entire ECMAScript interpreter (编译器) and accepts one argument, a string of ECMAScript (or JavaScript) to execute. </mark> [Page 35](zotero://open-pdf/library/items/6CRSJHBD?page=35&annotation=TWFAMZNI)
    - ![](z-Assets/Paste%20image%201691042433344image.png)
  - <mark class="hltr-yellow "> Any variables or functions created inside of eval() will not be hoisted, as they are contained within a string when the code is being parsed. They are created only at the time of eval() execution. </mark> [Page 35](zotero://open-pdf/library/items/6CRSJHBD?page=35&annotation=CNZN5I4P)
  - <mark class="hltr-yellow "> In strict mode, variables and functions created inside of eval() are not accessible outside </mark> [Page 35](zotero://open-pdf/library/items/6CRSJHBD?page=35&annotation=53T4MEWE)
  - <mark class="hltr-yellow "> in strict mode, assigning a value to eval causes an error </mark> [Page 35](zotero://open-pdf/library/items/6CRSJHBD?page=35&annotation=WSU33BJR)
  - 可能有恶性插入风险，须慎用

## 属性

- <mark class="hltr-yellow "> all variables and functions defined globally become properties of the Global object. </mark> [Page 33](zotero://open-pdf/library/items/6CRSJHBD?page=33&annotation=HDRRTNBQ)
- <mark class="hltr-yellow "> The special values (特殊值) of undefined, NaN, and Infinity are all properties of the Global object. </mark> [Page 36](zotero://open-pdf/library/items/6CRSJHBD?page=36&annotation=EGQ64LRG)
- <mark class="hltr-yellow "> all native reference type constructors (引用类型构造函数), such as Object and Function, are properties of the Global object. </mark> [Page 36](zotero://open-pdf/library/items/6CRSJHBD?page=36&annotation=887UPYMD)
- ![](z-Assets/Paste%20image%201691042774125image.png)
- ![](z-Assets/Paste%20image%201691042785602image.png)

## [Window Object](Window%20Object.md)

- <mark class="hltr-yellow "> all variables and functions declared in the global scope become properties on window. </mark> [Page 37](zotero://open-pdf/library/items/6CRSJHBD?page=37&annotation=PRVS9N8H)
- 浏览器将 window 对象实现为 Global 对象的代理
- window 对象在 JavaScript 中远不止实现了 ECMAScript 的 Global 对象那么简单。关于 window 对象的更多介绍，请参考 [C12-BOM](C12-BOM.md)。
