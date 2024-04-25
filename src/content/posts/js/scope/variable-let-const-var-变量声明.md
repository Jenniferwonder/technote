---
draft: false
title: Variables let, const, var-变量声明
type: D
topic:
  - Basics
  - Scope
tags:
  - JavaScript
Datereviewed: 2024-04-16
reviewed: 2
difficulty: 
comment: 
aliases:
  - Variables let, const, var-变量声明
DateStarted: 2022-12-02
DateModified: 2024-04-25
status:
  - ToUse
linter-yaml-title-alias: Variables let, const, var-变量声明
category: Programming
---

# Variables let, const, var-变量声明

## var, let, const 区别

|                        | var                          | let | const                       |
| ---------------------- | ---------------------------- | --- | --------------------------- |
| 变量与 window 对象绑定 | ✅                           | ❌  | ❌                          |
| 变量提升 (先用后声明)  | ✅                           | ❌  | ❌                          |
| 重复声明               | ✅                           | ❌  | ❌                          |
| 变量修改               | ✅                           | ✅  | ❌ (不能用于循环体变量声明) |
| 必须初始化赋值         | ❌                           | ❌  | ✅                          |
| 作用域                 | 函数（闭包实现块作用域效果） | 块  | 块                          |

- ❗const 声明的对象，其内部值仍可修改，若要冻结对象内部值，可使用 `Object.freeze()`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C04VariablesScopeMemory-12-x62-y38.png)

### 谈谈你对变量提升的理解

变量提升（Hoisting）是 JavaScript 的一个核心概念，理解它对于编写和理解代码非常重要。以下是我对变量提升的理解：

1. 什么是变量提升：在 JavaScript 中，变量和函数声明（使用 var 和 function）在内部会被“提升”到它们所在作用域（全局或函数）的顶部。这意味着在代码执行之前，JavaScript 引擎已经知道这些变量和函数的存在，即使它们在源代码中的位置可能在后面。
2. 声明与赋值：需要注意的是，提升只作用于声明，不作用于赋值或初始化。如果一个变量在后面被赋值，那么它在提升时仍被认为是`undefined`。只有当执行到赋值语句时，它才会被赋予特定的值。
3. var, let, const：只有用`var`声明的变量会被提升。用`let`和`const`声明的变量也有类似的提升行为，但由于它们存在“暂时性死区”（Temporal Dead Zone，TDZ），在声明前对它们的访问会导致错误。
4. 函数提升：函数声明也会被提升，并且优先级高于变量。如果一个函数和一个变量同名，且变量未被赋值，那么该名称指向函数。


