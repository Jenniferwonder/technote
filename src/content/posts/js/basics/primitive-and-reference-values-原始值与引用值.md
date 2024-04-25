---
Datereviewed: 
reviewed: 
comment: 
aliases:
  - Primitive and Reference Values-原始值与引用值
draft: false
title: Primitive and Reference Values-原始值与引用值
topic:
  - Basics
type: D
DateStarted: 2023-07-28
DateModified: 2024-04-25
status:
  - Mature
difficulty: Easy
category: Programming
tags:
  - JavaScript
linter-yaml-title-alias: Primitive and Reference Values-原始值与引用值
---

# Primitive and Reference Values-原始值与引用值

## Primitive values-原始值

- Accessed by value (按值访问)
  - You are manipulating the actual value stored in the variable.
- Copied by value
  - Changing the copied value will not change the original variable value
- can’t have properties added to them even though attempting to do so won’t cause an error.
- primitive literal form
- > If you were to use the new keyword, JavaScript will create an Object type, but one that behaves like a primitive.

## Reference values-引用值

- Accessed by reference (按引用访问)
  - You’re really working on a reference to that object rather than the actual object itself
- Copied by reference
  - Changing the value will change the original
  - will not independently copy the value, but only refer to the original
- you can add, change, or delete properties and methods at any time

## Argument Passing 参数传递

- All function arguments in ECMAScript are passed by value (按值传递); the value outside of the function is copied
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C04VariablesScopeMemory-5-x88-y399.png)
