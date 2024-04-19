---
title: Function Creation (创建函数)
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-06
DateModified: 2024-04-18
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

- `let sum = (num1, num2) ={`
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
- 函数表达式要先赋值再使用 - 函数表达式跟 JavaScript 中的其他表达式一样，须等到代码执行到它那一行，才会在执行上下文中生成函数定义
<!--ID: 1708054155517-->

---

---

Basic

### 函数表达式适用场景

Back:

- 根据 condition 的值为变量 sayHi 赋予相应的函数
- 在一个函数中把另一个函数当作值返回 - `return function(object1, object2) {`
<!--ID: 1708054155527-->

---

---

Basic

### 箭头函数适用与不适用场景

Back:

- 适合嵌入函数的场景，作为回调函数
  - `console.log(ints.map((i) ={ return i + 1 }));`
- 不适用的场合 - 不能使用 `arguments`、`super` 和 `new.target` - 不能用作构造函数 - 没有 `prototype` 属性 - `this` 指向父级对象或函数，而非函数本身
<!--ID: 1708054155535-->

---
