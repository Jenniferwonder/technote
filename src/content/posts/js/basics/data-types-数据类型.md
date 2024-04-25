---
aliases:
  - Data Types-数据类型
draft: false
title: Data Types-数据类型
tags:
  - JavaScript
topic:
  - Basics
type: D
status:
  - Mature
DateStarted: 2022-11-30
DateModified: 2024-04-25
Datereviewed: 2024-01-29
difficulty: Good
reviewed: 3
comment: 
category: Programming
linter-yaml-title-alias: Data Types-数据类型
---

# Data Types-数据类型

## Reference

- [JavaScript data types and data structures - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

## `typeof`

- works well for primitive values
  - 只能检测出基本类型，不能检测出引用类型
  - 7 Types (`number、undefined、symbol、string、function、boolean、object`)
  - 特殊情况：`typeof null === 'object'`
- typeof is an operator and not a function, no parentheses are required
- functions are considered **objects** in ECMAScript
  - they do have some special properties
  - differentiating between functions and other objects
- [Object Types (instanceof 标识对象类型)](../object/object-types-instanceof-标识对象类型)

## 6 simple data types

- The [Undefined and Null](undefined-and-null) Type
- The [Boolean](boolean) Type
- The [Number](../number/number) Type
- The [String](../string) Type
- The [Symbol](symbol) Type (ES6)

## 1 complex data type

- The [Object](../object/object) Type

### 数据类型的判断有哪些方法？他们的优缺点及区别是什么？

然后判断数据类型的方法一般可以通过：typeof、instanceof、constructor、toString 四种常用方法  
不同类型的优缺点 typeof instanceof constructor Object.prototype.toString.call
