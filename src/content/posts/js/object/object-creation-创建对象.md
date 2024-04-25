---
draft: false
aliases:
  - Object Creation-创建对象
title: Object Creation-创建对象
topic:
  - Objects
type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-04-25
Datereviewed: 2024-02-02
reviewed: 2
difficulty: Good
status: 
comment: 
linter-yaml-title-alias: Object Creation-创建对象
category: Programming
---

# Object Creation-创建对象

---

Basic

### What is Object in JS

Back:

- A collection of Key-Value Pairs
- 包含*内置对象类型*与*自定义对象类型*  
🏷️: JS-Objects  
📌: JS::JS-Objects
<!--ID: 1706843480961-->

---

---

Basic

### 创建内置对象

Back:

- let o = new Object ();
- new Array(), new String(), new Boolean(), new Error()...
<!--ID: 1706843480973-->

---

---

Basic

### Ways to Create Object

Back:

- [object-literal-对象字面量表示法](object-literal-对象字面量表示法)
- [Factory Function-工厂模式](factory-function-工厂函数模式)
- [Constructor Function-构造函数模式](constructor-function-构造函数模式)
- [Prototype Pattern-原型模式](prototype-pattern-原型模式)
<!--ID: 1706843480979-->

---

### 如何创建一个没有原型的对象？

可以使用` Object.create(null)` 方法创建一个没有原型的对象。这个方法创建一个全新的对象并将其原型设置为 null，因此它没有继承任何属性或方法。例如：

```js
const obj = Object.create(null);
console.log(obj.toString); // undefined
```
