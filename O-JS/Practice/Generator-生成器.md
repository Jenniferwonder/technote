---
Title: 生成器
Type: D
DateStarted: 2023-08-13
DateModified: 2023-11-28
status:
  - Young
aliases:
  - Generator
  - 生成器
Up:
  - - C07-Iterators and Generators-迭代器与生成器
mindmap-plugin: basic
LeadTime: "2"
Cards-D: "0"
Page-D: "0"
DateDo: 2023-08-09T00:00:00.000+08:00
DateDone: 2023-08-10T00:00:00.000+08:00
EST: "-19577"
Topic:
  - Practice
---

# Generator-生成器

- 形式
  - 生成器的形式是一个函数，函数 **名称前面加一个星号`（*）`**表示它是一个生成器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3b4d07e8-f599-adab)
  - 标识生成器函数的星号 **不受** 两侧空格的影响 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=71362c4c-e2e8-c30e)
- 功能
  - 拥有在一个函数块内 **暂停和恢复代码执行** 的能力 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8168b671-1964-c500)
  - 使用生成器可以自定义 **迭代器和实现协程** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4d44d02a-9ce2-1cdf)
- 特点
  - 只要是可以定义函数的地方，就可以定义生成器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a5998a0b-7b27-1d4f)
  - 箭头函数不能用来定义生成器函数。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8384eb75-32fa-0124)
- 定义方式
  - // 生成器函数声明 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=69ce7d70-6e8f-336a)
    - function\* generatorFn() {} [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9c03ca69-bd9b-43d8)
  - // 生成器函数表达式 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=844faea9-bf96-20f2)
    - let generatorFn = function\* () {} [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5e8fcb8b-3893-aeab)
  - // 作为对象字面量方法的生成器函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=db9de8dc-107b-a713)
    - let foo = { \* generatorFn() {} } [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=20b50bab-bd89-ca7f)
  - // 作为类实例方法的生成器函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b8a08c22-ff87-3e03)
    - class Foo { \* generatorFn() {} } [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9486e673-4cdb-f29c)
  - // 作为类静态方法的生成器函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d4fa85f4-7a39-dfdc)
    - class Bar { static \* generatorFn() {} } [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6bb1bba6-9286-38f9)
- 生成器对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e413786f-20da-9799)
  - 一开始处于暂停执行（suspended）的 状 态 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=982d34fb-a593-399b)
  - 生成器对象也实现了 Iterator 接口，因此具有 next()方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=be03a878-13a1-b006)
    - 调用这个方法会让生成器 开始或恢复执行。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5419f835-d4f0-1ba3)
    - 生成器函数只会在初次调用 **`next()`方法**后开始执行 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e4a417ff-a67f-facf)
    - next()方法的返回值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=12500ec7-cbec-8d2f)
      - done 属性 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=eacdd132-78de-306b)
        - 函数体为空的生成器 函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b87ecd93-7539-44b0)
      - value 属性 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4a97341d-ec60-51f9)
        - value 属性是生成器函数的返回值，默认值为 undefined，可以通过生成器函数的返回值指定 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a464f860-57aa-927a)
  - 生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=7e3f17c0-6321-1b36)
- 通过 yield 中断执行-Interrupting Execution [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=cf726dd5-b051-fd3b)
  - 特点
    - yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=109dad72-f835-793d)
    - yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ff254b61-2a30-3a49)
    - 出现在嵌套的非生成器函数中会抛出语法错误 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4d0fb6bb-7c68-ffa0)
  - 生成器对象作为可迭代对象 (Iterable) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=684dc287-31a0-8cfa)
    - 在生成器对象上显式调用 next()方法的用处并不大 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=db56b633-6efb-a188)
    - 如果把生成器对象当成可迭代对象， 那么使用起来会更方便 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=65ecf546-57c1-4b2a)
  - 使用 yield 实现输入和输出 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9e78a6be-fae2-5fef)
  - 产生可迭代对象-Yielding an Iterable [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8e36ad7b-f669-d322)
  - 使用 `yield*`实现递归算法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4088df2f-2918-715b)
- 生成器作为默认迭代器-Using a Generator as the Default Iterator [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=cb2a967e-4291-aded)
- 提前终止生成器-Early Termination of Generators [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5923c48a-f30c-080f) - <mark class="hltr-gray ">" The return() Method "</mark> [Page 23 ](zotero://open-pdf/library/items/HBK57UVK?page=23&annotation=MPISIEH8) - <mark class="hltr-gray ">" The throw() Method "</mark> [Page 24 ](zotero://open-pdf/library/items/HBK57UVK?page=24&annotation=749SG6YC)
<!--SR:!2023-08-16,3,250!2023-08-16,3,250!2023-08-16,3,250!2023-08-16,3,250!2023-08-16,3,250-->
