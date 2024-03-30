---
title: Symbol
Type: D
DateStarted: 2023-02-15
DateModified: 2023-11-28
status:
  - ToDo
aliases:
  - Symbol
mindmap-plugin: basic
Cards-D: "0"
Page-D: "0"
EST: "1"
Reviewed: 0
Difficulty: Hard
Topic:
  - Basics
---

# Symbol
## Reference

- [Symbol - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [7. Symbols](https://exploringjs.com/es6/ch_symbols.html)
- [JavaScript Symbols: But Why?. Symbols, the newest JavaScript… | by Thomas Hunter II | intrinsic | Medium](https://medium.com/intrinsic-blog/javascript-symbols-but-why-6b02768f4a5c)

## What is symbol?

- - <mark class="hltr-yellow ">" Symbols are primitive values "</mark> [Page 30 ](zotero://open-pdf/library/items/2BS329KQ?page=30&annotation=L8S8F7GL)
    - A symbol is a primitive which cannot be recreated?
  - <mark class="hltr-yellow ">" symbol instances are unique and immutable "</mark> [Page 30 ](zotero://open-pdf/library/items/2BS329KQ?page=30&annotation=YGZUFWAJ)
  - 一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的;
    - <mark class="hltr-yellow ">" The purpose of a symbol is to be a guaranteed unique identifier for object properties that does not risk property collision "</mark> [Page 30 ](zotero://open-pdf/library/items/2BS329KQ?page=30&annotation=PVFGKJ65)
  - In this case a symbols is similar to an object as creating multiple instances will result in values which are not exactly equal. But, a symbol is also a primitive in that it cannot be mutated.

- ```js
  const s1 = Symbol();
  const s2 = Symbol();
  console.log(s1 === s2); // false
  ```

## The [Symbol](Symbol) Type

- <mark class="hltr-gray ">" Basic Symbol Use "</mark> [Page 30 ](zotero://open-pdf/library/items/2BS329KQ?page=30&annotation=A38C63WY)
- <mark class="hltr-gray ">" Using the Global Symbol Registry "</mark> [Page 31 ](zotero://open-pdf/library/items/2BS329KQ?page=31&annotation=L5AQMQME)
- <mark class="hltr-gray ">" Using Symbols as Properties "</mark> [Page 32 ](zotero://open-pdf/library/items/2BS329KQ?page=32&annotation=Q6UR7U8S)
- <mark class="hltr-gray ">" Well-Known Symbols "</mark> [Page 33 ](zotero://open-pdf/library/items/2BS329KQ?page=33&annotation=GMPBPK4E)
  - <mark class="hltr-gray ">" Symbol.asyncIterator "</mark> [Page 34 ](zotero://open-pdf/library/items/2BS329KQ?page=34&annotation=X5RVRXQ2)
  - <mark class="hltr-gray ">" Symbol.hasInstance "</mark> [Page 35 ](zotero://open-pdf/library/items/2BS329KQ?page=35&annotation=L5K9A349)
  - <mark class="hltr-gray ">" Symbol.isConcatSpreadable "</mark> [Page 36 ](zotero://open-pdf/library/items/2BS329KQ?page=36&annotation=44K87KP7)
  - <mark class="hltr-gray ">" Symbol.iterator "</mark> [Page 36 ](zotero://open-pdf/library/items/2BS329KQ?page=36&annotation=7NELTJSS)
  - <mark class="hltr-gray ">" Symbol.match "</mark> [Page 37 ](zotero://open-pdf/library/items/2BS329KQ?page=37&annotation=U7X3WLEK)
  - <mark class="hltr-gray ">" Symbol.replace "</mark> [Page 38 ](zotero://open-pdf/library/items/2BS329KQ?page=38&annotation=YVZYTAFI)
  - <mark class="hltr-gray ">" Symbol.search "</mark> [Page 39 ](zotero://open-pdf/library/items/2BS329KQ?page=39&annotation=B36IYMGL)
  - <mark class="hltr-gray ">" Symbol.species "</mark> [Page 40 ](zotero://open-pdf/library/items/2BS329KQ?page=40&annotation=CDECGMVK)
  - <mark class="hltr-gray ">" Symbol.split "</mark> [Page 40 ](zotero://open-pdf/library/items/2BS329KQ?page=40&annotation=S24TAPGY)
  - <mark class="hltr-gray ">" Symbol.toPrimitive "</mark> [Page 41 ](zotero://open-pdf/library/items/2BS329KQ?page=41&annotation=XIHXRG83)
  - <mark class="hltr-gray ">" Symbol.toStringTag "</mark> [Page 42 ](zotero://open-pdf/library/items/2BS329KQ?page=42&annotation=ZXLEICRX)
  - <mark class="hltr-gray ">" Symbol.unscopables "</mark> [Page 42 ](zotero://open-pdf/library/items/2BS329KQ?page=42&annotation=9LDIEXKS)
