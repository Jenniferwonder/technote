---
Title: Variables-变量
Type: D
DateStarted: 2022-12-02
DateModified: 2023-11-28
status:
  - Young
DateDo: 2023-07-17T00:00:00.000+08:00
DateDone: 2023-07-28T00:00:00.000+08:00
Reviewed: 2
Topic:
  - Basics
  - Scope
---

# Variables-变量

## `var` 关键字

- 可以变量提升
  - <mark class="hltr-gray ">" var Declaration Hoisting "</mark> [Page 6 ](zotero://open-pdf/library/items/2BS329KQ?page=6&annotation=5KRSMUUN)
- 声明范围是函数作用域
  - <mark class="hltr-gray ">" Function Scope Declaration Using var "</mark> [Page 9 ](zotero://open-pdf/library/items/777VEPFY?page=9&annotation=BXPR6RKC)
  - 没有块的概念，可以跨块访问
    - 借助 **[Closures-闭包](Closures-闭包)** 和函数作用域来实现块级作用域的效果
- 可重复声明同一个变量


## `let` 声明

- 无变量提升
  - <mark class="hltr-gray ">" Temporal Dead Zone-暂时性死区 "</mark> [Page 8 ](zotero://open-pdf/library/items/2BS329KQ?page=8&annotation=CU8ZHDQX)
  - <mark class="hltr-yellow ">" cannot be used in a way that assumes hoisting "</mark> [Page 8 ](zotero://open-pdf/library/items/2BS329KQ?page=8&annotation=38TNQNG8)
- 声明范围是块作用域

  - 只能在块作用域里访问（不能跨块访问，也不能跨函数访问）
  - 块作用域是函数作用域的子集
  - <mark class="hltr-gray ">" Block Scope Declaration Using let "</mark> [Page 11 ](zotero://open-pdf/library/items/777VEPFY?page=11&annotation=454XNBUM)

    - ```js
      function func() {
      	if (true) {
      		let i = 3;
      	}
      	console.log(i); // 报错 "i is not defined"
      }
      func();
      ```

- 不能重复声明
- 声明的变量可修改
  - <mark class="hltr-gray ">" let Declaration in for Loops "</mark> [Page 10 ](zotero://open-pdf/library/items/2BS329KQ?page=10&annotation=M8N2ZSD9)
- 不能使用 let 进行条件式声明
  - <mark class="hltr-gray ">" Conditional Declaration "</mark> [Page 8 ](zotero://open-pdf/library/items/2BS329KQ?page=8&annotation=69C5L7MM)
    - <mark class="hltr-yellow ">" conditionally declare it only if it has not "</mark> [Page 8 ](zotero://open-pdf/library/items/2BS329KQ?page=8&annotation=4IMUWUY9)
- <mark class="hltr-gray ">" Global Declarations "</mark> [Page 8 ](zotero://open-pdf/library/items/2BS329KQ?page=8&annotation=WEUZDU2E)
  - <mark class="hltr-yellow ">" variables will not attach to the window object as they do with var "</mark> [Page 8 ](zotero://open-pdf/library/items/2BS329KQ?page=8&annotation=ZZY7P3LC)
  - ![](z-Assets/Paste%20image%201690534149883image.png)

## `const` 声明

- 只能在块作用域里访问，无变量提升，不能重复声明
  - 与`let`的共同点
- 声明常量，不能修改
  - <mark class="hltr-yellow ">" you cannot use const to declare for loop iterators "</mark> [Page 11 ](zotero://open-pdf/library/items/2BS329KQ?page=11&annotation=6NIQJB6R)
  - <mark class="hltr-yellow "> Once declared, it cannot be reassigned to a new value at any point in its lifetime. </mark> [Page 12](zotero://open-pdf/library/items/777VEPFY?page=12&annotation=I5YCL9JT)
  - <mark class="hltr-orange "> Object.freeze() </mark> [Page 12](zotero://open-pdf/library/items/777VEPFY?page=12&annotation=M5HBDEMU)
    - ![](z-Assets/C04VariablesScopeMemory-12-x62-y38.png)
    - <mark class="hltr-yellow "> to make the entire object immutable </mark> [Page 12](zotero://open-pdf/library/items/777VEPFY?page=12&annotation=RRNIJI7V)
- <mark class="hltr-yellow ">" it must be initialized with a value-必须初始化/赋值 "</mark> [Page 10 ](zotero://open-pdf/library/items/2BS329KQ?page=10&annotation=ZUXGB5XK)

## <mark class="hltr-gray ">" Declaration Styles and Best Practices "</mark> [Page 11 ](zotero://open-pdf/library/items/2BS329KQ?page=11&annotation=77PIZC25)

- <mark class="hltr-gray ">" Don’t Use var "</mark> [Page 12 ](zotero://open-pdf/library/items/2BS329KQ?page=12&annotation=HY4UAB6Y)
- <mark class="hltr-gray ">" Prefer const Over let "</mark> [Page 12 ](zotero://open-pdf/library/items/2BS329KQ?page=12&annotation=W8GCVGJV)

- ```js
  let
  //Only needed when create a variable for the first time
  const
  //By default
  //Unable to change/re-assign the value
  var
  //Old
  ```
