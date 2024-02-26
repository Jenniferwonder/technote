---
Title: C05-Basic Reference Types-基本引用类型
Type: O
DateStarted: 2023-07-13
DateModified: 2023-07-27
mindmap-plugin: basic
status: Young
aliases: C05
LeadTime: "17"
DateDo: 2023-07-18T00:00:00.000+08:00
DateDone: 2023-08-03T00:00:00.000+08:00
Cards: 188
Page-D: "3"
Cards-D: "12"
Pages: 42
EST: "-19555"
Topic:
  - Basics
  - Date
  - Number
---

# [O-JS](O-JS.md) C05-Basic Reference Types-基本引用类型

## Reference Type

- A reference value (object) is an instance of a specific reference type
- also known as **object definition**
  - <mark class="hltr-yellow "> describe the properties and methods that objects should have </mark> [Page 1](zotero://open-pdf/library/items/6CRSJHBD?page=1&annotation=W8FMGMY2)
  - <mark class="hltr-yellow "> New objects are created by using the `new` operator followed by a **constructor**. </mark> [Page 2](zotero://open-pdf/library/items/6CRSJHBD?page=2&annotation=XVQF4W88)
    - constructor
      - a function whose purpose is to create a new object
- <mark class="hltr-yellow "> Functions are a reference type </mark> [Page 2](zotero://open-pdf/library/items/6CRSJHBD?page=2&annotation=E3F9YDP6)
<!--SR:!2023-08-23,8,250!2023-08-25,10,250-->

## " THE [Date](Date.md) TYPE " [Page 2 ](zotero://open-pdf/library/items/6CRSJHBD?page=2&annotation=ZCMRAWIJ)

## " THE [RegExp](RegExp.md) TYPE " [Page 7 ](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=7CTZW4JC)

## 原始值包装类型

- 功能
  - 为了方便操作原始值
    - 每当用到某个原始值的方法或属性时，后台都会创建一个相应原始包装类型的对象，从而暴露出操作原始值的各种方法。
- 类型
  - [Boolean](Boolean.md)
  - [Number](Number.md)
  - [String](String.md)
- 特点
  - 生命周期只存在于访问它的那行代码执行期间，即不能在运行时给原始值添加属性和方法
  - 可以显式地使用 Boolean、 Number 和 String 构造函数创建原始值包装对象实例。不过应该在确实必要时，否则易分不清是原始值还是引用值，在实例上调用`typeof` 会返回 `object`
  - Object 构造函数作为一个工厂方法，能够根据传入值的类型返回相应原始值包装类型的实例
    - ![](Paste%20image%201690786151062image.png)
  - 使用 new 调用原始值包装类型的构造函数，与调用同名的转型函数并不一样
    - ![](Paste%20image%201690786054733image.png)

## Singleton Built-in Objects-单例内置对象

- " The [Global Object](Global%20Object-全局对象.md) " [Page 33 ](zotero://open-pdf/library/items/6CRSJHBD?page=33&annotation=2YN64C3N)
- " The [Math](Math.md) Object " [Page 37 ](zotero://open-pdf/library/items/6CRSJHBD?page=37&annotation=MG3CNTWP)
