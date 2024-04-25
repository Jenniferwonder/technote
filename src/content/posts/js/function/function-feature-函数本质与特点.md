---
draft: false
title: function-feature-函数本质与特点
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
DateModified: 2024-04-25
Datereviewed: 2024-02-16
reviewed: 1
difficulty: Good
status: 
comment: 
category: Programming
---

---

Basic

### 函数本质

Back:

- 每个函数都是 Function 对象类型的实例
  - Function 也有属性和方法
- 函数名在 ES 中就是变量，就是指向函数对象的指针
	- 函数可以用在任何可以使用变量的地方
	- 函数作为参数传给另一个函数
	- 在一个函数中返回另一个函数
	- 一个函数可以有多个名称 \* `let anotherSum = sum;`  
  📌: JS::JS-Function  
  🏷️: JS-Function

---

---

Basic

### 无重载 (No Overloading)

Back:

- 两个同名函数，则后定义的会覆盖先定义的
- 可以通过检查参数的类型和数量，然后分别执行不同的逻辑来模拟函数重载
  - Java 中，一个函数可以有两个定义， 只要签名（接收参数的类型和数量）不同就行

---
