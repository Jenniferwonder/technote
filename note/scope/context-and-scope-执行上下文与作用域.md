---
title: Context and Scope-执行上下文与作用域
tags:
  - JavaScript
Type: D
Topic:
  - Scope
DateStarted: 2023-07-28
DateModified: 2024-03-02
DateDo: 2023-07-17T00:00:00.000+08:00
DateDone: 2023-07-29T00:00:00.000+08:00
DateReviewed:
DateDue:
status:
  - Mature
Reviewed: 2
Difficulty:
Comment:
---

# Context and Scope-执行上下文与作用域

## Scope Definition

- context
- Each execution context has an associated variable object upon which all of its defined variables and functions exist.
- Refers to the environment where a certain variable is declared;
  - 作用域：可访问变量的集合
- Scope of a variable: Refer to the entire region of code where a certain variable can be accessed
  - 作用域最大的用处就是`隔离变量`，不同作用域下同名变量不会有冲突
- JS => Lexical scoping which is defined by the placement of functions and blocks in the code
- [JavaScript 深入之词法作用域和动态作用域](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F3 "https://github.com/mqyqingfeng/Blog/issues/3")

## Three Types of Scope 作用域类型

- Global scope 全局作用域
  - In web browsers, the global context is said to be that of the window object
  - var
  - created as properties and methods on the window object
- Function scope/ Local scope 函数作用域
  - 是指声明在函数内部的变量，函数的作用域在函数定义的时候就决定了
- Block scope ES6 块级作用域
  - 块作用域由`{ }`包括，if 和 for 语句里面的`{ }`也属于块作用域
    - Eg. if/ for loops
  - 在块级作用域中，可通过 let 和 const 声明变量，该变量在指定块的作用域外无法被访问
    - let; const (not var)
- Related:: [Variables-变量](Variables-变量.md)

## 作用域链

- Identifier Lookup 标识符查找
  - Child scope can access variables in its parent scope
  - 当查找变量的时候，首先会先从当前上下文的变量对象（作用域）中查找，如果没有找到，就会从父级的执行上下文的变量对象中查找，如果还没有找到，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做`作用域链`
  - identifiers in a parent context cannot be referenced if an identifier in the local context has the same name,
- Scope Chain Augmentation 作用域链增强
  - The catch block in a try-catch statement
  - A `with` statement
- [JavaScript 深入之作用域链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F6 "https://github.com/mqyqingfeng/Blog/issues/6")
