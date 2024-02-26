---
Title: Context and Scope-执行上下文与作用域
Type: D
DateStarted: 2023-07-28
DateModified: 2023-11-28
mindmap-plugin: basic
status: Mature
LeadTime: "13"
DateDo: 2023-07-17T00:00:00.000+08:00
DateDone: 2023-07-29T00:00:00.000+08:00
Cards-D: "0"
Page-D: "0"
EST: "-19554"
Reviewed: 2
Topic:
  - Scope
---

# [[O-JS|D-JS]] Context and Scope-执行上下文与作用域

## Metadata

- Up:: [[C04-Variables; Scope; Memory-变量、作用域、内存]]

## Scope Definition

- <mark class="hltr-orange "> context </mark> [Page 6](zotero://open-pdf/library/items/777VEPFY?page=6&annotation=S929VULZ)
  - <mark class="hltr-yellow "> Each execution context has an associated variable object upon which all of its defined variables and functions exist. </mark> [Page 6](zotero://open-pdf/library/items/777VEPFY?page=6&annotation=YM4JW7TC)
- Refers to the environment where a certain variable is declared;
  - 作用域：可访问变量的集合
- Scope of a variable: Refer to the entire region of code where a certain variable can be accessed
  - 作用域最大的用处就是`隔离变量`，不同作用域下同名变量不会有冲突
- JS => Lexical scoping which is defined by the placement of functions and blocks in the code
- [JavaScript 深入之词法作用域和动态作用域](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F3 "https://github.com/mqyqingfeng/Blog/issues/3")

## Three Types of Scope 作用域类型

- Global scope 全局作用域
  - <mark class="hltr-orange "> In web browsers, the global context is said to be that of the window object </mark> [Page 6](zotero://open-pdf/library/items/777VEPFY?page=6&annotation=ESJ2WS8N)
  - <mark class="hltr-orange "> var </mark> [Page 6](zotero://open-pdf/library/items/777VEPFY?page=6&annotation=FPBTWZJB)
  - <mark class="hltr-yellow "> created as properties and methods on the window object </mark> [Page 6](zotero://open-pdf/library/items/777VEPFY?page=6&annotation=CE336QCA)
- Function scope/ Local scope 函数作用域
  - 是指声明在函数内部的变量，函数的作用域在函数定义的时候就决定了
- Block scope ES6 块级作用域
  - 块作用域由`{ }`包括，if 和 for 语句里面的`{ }`也属于块作用域
    - Eg. if/ for loops
  - 在块级作用域中，可通过 let 和 const 声明变量，该变量在指定块的作用域外无法被访问
    - let; const (not var)
- Related:: [[Variables-变量]]

## 作用域链

- <mark class="hltr-gray ">" Identifier Lookup 标识符查找"</mark> [Page 13 ](zotero://open-pdf/library/items/777VEPFY?page=13&annotation=62NCXD2X)
  - Child scope can access variables in its parent scope
  - 当查找变量的时候，首先会先从当前上下文的变量对象（作用域）中查找，如果没有找到，就会从父级的执行上下文的变量对象中查找，如果还没有找到，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做`作用域链`
  - <mark class="hltr-yellow "> identifiers in a parent context cannot be referenced if an identifier in the local context has the same name, </mark> [Page 13](zotero://open-pdf/library/items/777VEPFY?page=13&annotation=XGP433RV)
- <mark class="hltr-gray ">" Scope Chain Augmentation 作用域链增强 "</mark> [Page 8 ](zotero://open-pdf/library/items/777VEPFY?page=8&annotation=92V2RUYU)
  - The catch block in a try-catch statement
  - A `with` statement
- [JavaScript 深入之作用域链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F6 "https://github.com/mqyqingfeng/Blog/issues/6")
