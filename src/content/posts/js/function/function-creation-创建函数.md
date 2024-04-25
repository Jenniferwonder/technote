---
draft: false
title: function-creation-创建函数
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-06
DateModified: 2024-04-25
Datereviewed: 2024-02-16
reviewed: 3
difficulty: 
status: 
comment: 
category: Programming
---

---

Basic

### 创建函数的方法

Back:

#### 函数声明

- `function sum (num1, num2) {`

#### 函数表达式

- `let sum = function (num1, num2) {`
- 这样创建的函数叫作匿名函数（anonymous funtion）
  - 兰姆达函数
  - 未赋值给其他变量的匿名函数的 name 属性是空字符串

#### 箭头函数（arrow function）

- `let sum = (num1, num2) => {`
- 没有参数，或者多个参数的情况下，才需要使用括号
- 不使用大括号
  - 箭头后面就只能有一行代码，比如一个赋值操作，或者一个表达式
  - 会隐式返回这行代码的值
- 使用大括号
  - 包含“函数体”，可以在一个函数中包含多条语句，跟常规的函数一样

#### 构造函数

- `let sum = new Function(num1, num2, return num1 + num2);  // 不推荐`
- 最后一个参数始终会被当成函数体，而之前的参数都是新函数的参数  
📌: JS::JS-Function  
🏷️: JS-Function
<!--ID: 1708054155507-->

---

---

Basic

### 函数声明与函数表达式区别

Back:

- 函数声明提升（function declaration hoisting）
	- 即使函数定义出现在调用它们的代码之后，引擎也会把函数声明提升到顶部
- 函数表达式要先赋值再使用 
	- 函数表达式跟 JavaScript 中的其他表达式一样，须等到代码执行到它那一行，才会在执行上下文中生成函数定义
<!--ID: 1708054155517-->

---


### 箭头函数与普通函数区别？

箭头函数（Arrow Functions）与普通函数（常被称为函数声明或函数表达式）在 JavaScript 中有一些重要的区别。这些区别包括语法、`this` 关键字的绑定、arguments 对象的使用、构造函数行为以及原型链。以下是箭头函数和普通函数之间的主要区别：
1. `this` 关键字绑定：
   - 箭头函数没有自己的 `this`，它从包围它的普通函数或全局作用域继承 `this`。这使得 **在事件处理器或回调函数中使用箭头函数** 非常方便，因为它们自动捕获外部的 `this`。
   - 普通函数有自己的 `this`，它的值在函数调用时确定。根据函数调用的方式（如通过对象方法调用、直接调用、构造函数调用等），`this` 的值可能会有所不同。
2. `arguments` 对象：
   - 箭头函数没有自己的 `arguments` 对象。它们可以访问包围它们的普通函数的 `arguments` 对象。
   - 普通函数有自己的 `arguments` 对象，这是一个类数组对象，包含了传递给函数的参数。
3. 构造函数行为：
   - 箭头函数不能作为构造函数使用，因此不能使用 `new` 关键字调用。它们也没有 `prototype` 属性。
   - 普通函数可以作为构造函数使用，通过 `new` 关键字创建新的对象实例。
4. 原型链：
   - 由于箭头函数没有 `prototype` 属性，它们不能作为其他对象的原型。
   - 普通函数有 `prototype` 属性，可以作为其他对象的原型。
5. 生成器：
   - 箭头函数不能使用`yield`关键字。
   - 普通函数可以使用`yield`关键字变成生成器函数。

### 箭头函数的 this 是声明时确定还是调用时确定？
箭头函数的 `this` 是根据其被声明的位置来确定的，而不是它被调用的位置。这个特性称为"词法作用域"或者"静态作用域"。箭头函数不会创建自己的 `this`，它会从自己的作用域链上一层继承 `this`。




