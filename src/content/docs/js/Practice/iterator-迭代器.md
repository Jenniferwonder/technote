---
title: Iterator 迭代器
Type: D
DateStarted: 2023-08-13
DateModified: 2023-11-28
status:
  - Young
aliases:
  - Iterator
  - 迭代器
mindmap-plugin: basic
LeadTime: "2"
Page-D: "0"
Cards-D: "0"
DateDo: 2023-08-09T00:00:00.000+08:00
DateDue: ""
DateDone: 2023-08-10T00:00:00.000+08:00
EST: "-19577"
Topic:
  - Practice
---

# Iterator 迭代器

## 迭代定义 (Iteration)

- 最简单的迭代 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=676c2276-9bfb-d891)
  - 计数循环 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8e661f59-1eca-a0ca)
    - ![](./z-Assets/1691564604297.png) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=42590d6d-5407-156f)
- 循环是迭代机制的基础 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3afecd5b-01ad-d115)
  - 因为它可以指定迭代的次数，以及每次迭代要执行什么操作 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6c4e7b92-ce28-868b)
- 在一个有序集合上进行 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=22d5ab25-364a-703a)
  - 数组 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=812f0270-ea00-ae77)
  - ES5 新增了 Array.prototype.forEach() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a046879d-b323-24c6)
    - 没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=cf89c9a7-9b4e-438f)

## 迭代器模式 (The Iterator Pattern) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=36b02d7e-998c-beaf)

- JavaScript 在 ECMAScript 6 以后也支持了迭代器模式 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8d752266-9015-043d)
- 开发者无须事先知道如何迭代就能实现 迭代操作 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8da72929-3622-2f1e)

## 可迭代对象/接口（Iterable） [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9a70ba99-e1ca-79d3)

- 它们实现了正式的 Iterable 接口 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e340cf10-9fff-b0ec)
- 可以通过迭代器 Iterator 消费 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=13840766-d943-6779)
- 可迭代协议 (Iterable Protocol) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=25be718f-0e17-3a9c)
  - 要求同时具备两种能力 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=455a1fdd-cc30-1c81)
    - 支持迭代的自我识别能力 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=277d1c8f-3d3e-4dcd)
      - 必须暴露一个属性作为“默认迭代器” [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b062c107-604d-1af0)
      - 检查是否存在默认迭代器属性可以暴露这个工厂函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a97de4d3-94ff-d513)
        - ![](./z-Assets/1691565228166.png) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=665c7d9a-85b3-a0ec)
    - 创建实现 Iterator 接口的对象的能力 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6b519eb0-c495-5e09)
      - 默认迭代器属性必须引用一个迭代器工厂函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=97b1c89a-1ee4-77bc)
      - 这个属性必须使用特殊的 `Symbol.iterator` 作为键 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ec85170e-8c69-774a)
      - 调用这个工厂函数必须返回一个新迭代器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3bb643df-355f-3edb)
- 接收可迭代对象的原生语言特性 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=52f0d65b-b0c8-e159)
  - for-of 循环 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=debb98cd-8d15-02ce)
  - 数组解构 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f38dfd0b-6a23-613a)
  - 扩展操作符 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=02239a72-4841-d206)
  - Array.from() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=2085dcda-355e-3719)
  - 创建集合 Set [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=23bc8009-6a81-8456)
  - 创建映射 Map [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=de37be5f-615f-f3c5)
  - Promise.all()接收由期约组成的可迭代对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3b0192a2-af40-bf0e)
  - Promise.race()接收由期约组成的可迭代对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ca6ea732-6e21-ecd6)
  - `yield*`操作符，在生成器中使用 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=efe7fd97-2d58-ae9b)
  - 这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器： [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a91339b4-d8b0-ee0e)

## 迭代器 (Iterator)

- 概念
  - 通用的迭代 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6ad6bc48-da1e-3d0a)
  - 接口 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=26de5751-9a3f-e080)
  - 正式的迭代器类型 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=33ad8c93-a928-8eea)
  - 是**按需创建的一次性对象** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=250dcc2e-1fc2-bd16)
- 显示迭代器与原生迭代器的实现 - 类实现显示迭代器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=0f6af28d-0020-fb3a)
  <!--SR:!2023-08-16,3,250-->

          -
            ```js
            class Foo {
            [Symbol.iterator]() {
            return {
            next() {
            return { done: false, value: 'foo' };
            }
            } } }
            let f = new Foo(); // 打印出实现了迭代器接口的对象 console.log(f[Symbol.iterator]()); // { next: f() {} }
            ```

      - Array 类型的原生迭代器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9402fb7e-28e1-9b5c)

          -
            ```js
            let a = new Array(); // 打印出 ArrayIterator 的实例 console.log(a[Symbol.iterator]()); // Array Iterator {}
            ```

- 迭代器协议 (Iterator Protocol) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8c7f95db-2f65-c1d0)
  - 特点
    - 每个迭代器都会关联一个可迭代对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1226db27-0dad-bc24)
    - 迭代器会暴露迭代其关联可迭代对象的 API [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9923649d-6241-0dc6)
    - 迭代器无须了解与其关联的可迭代对象 (Iterable) 的结构，只需要知道如何取得连续的值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4153195f-f6b9-576c)
      - 这种概念上的分离正是 Iterable 和 Iterator 的强大之处 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b066cc32-2434-d186)
    - 每个迭代器都表示**对可迭代对象的一次性有序遍历** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=02b5a647-a7f3-6984)
  - next()方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5ebbea62-65f1-7cb7)
    - 返回 **迭代器对象 IteratorResult** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=fcd04e43-00b3-b8d7)
      - 包含两个属性 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=327212bb-bf06-ef67)
        - **done** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=bd7744a2-be89-2158)
          - 是一个布尔值，表示是否还可以再次调用 next()取得下一个值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=28270ef7-ce4c-bd07)
          - done: true 状态称为“耗尽” [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f4ab1d73-bd7f-2bdd)
        - **value** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=aa6aff0c-82da-b7a2)
          - 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true） [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=04895c3f-ee1a-70b7)
  - 案例
    - // 可迭代对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=34da9bb4-24e8-db9c)
      - `let arr = ['foo', 'bar'];` [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f98391a3-10f4-7d2b)
    - // 迭代器工厂函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c236eecb-8686-f1b4)
      - `console.log(arr[Symbol.iterator]); // f values() { [native code] }` [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=46ab24db-89f0-6414)
    - // 迭代器对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1f8c6333-200f-78ee)
      - `let iter = arr[Symbol.iterator](); console.log(iter); // ArrayIterator {}` [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=daf099e8-9754-b03d)
    - // 执行迭代 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9f23ef57-6b17-37fb)
      - `console.log(iter.next()); // { done: false, value: 'foo' } console.log(iter.next()); // { done: false, value: 'bar' } console.log(iter.next()); // { done: true, value: undefined }` [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d3732677-98e3-be0c)
- 自定义迭代器-Custom Iterator Definition
  - 任何实现 Iterator 接口的对象都可以作为迭代器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b495a015-57fc-79d1)
- 提前终止迭代器-Early Termination of Iterators - 可选的 return()方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1492fe50-c3fa-149e) - 用于指定在迭代器提前关闭时执行的逻辑 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f561138b-0c97-ce7f) - 执行迭代的结构在想让迭代器知 道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=529d5f6b-bf01-de58) - 必须返回一个有效的 IteratorResult 对象 [📌](<../obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88-%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=3d2dc853-21ac-2a0c>>) - for-of 循环通过 break、continue、return 或 throw 提前退出 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c595f1f5-3392-b535) - 解构操作并未消费所有值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=53f275cf-9330-d24a) - 并非所有迭代器都是可关闭的 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9cd97d76-5d08-91ca) - 要知道某个迭代器是否可关闭 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9dbc6491-5aa5-145d) - 可以测试这个迭代器实例的 return 属性是不是函数对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f446f6ca-26a7-a70e)
<!--SR:!2023-08-16,3,250!2023-08-16,3,250!2023-08-16,3,250!2023-08-16,3,250-->
