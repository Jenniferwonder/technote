---
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
DateModified: 2024-04-18
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
