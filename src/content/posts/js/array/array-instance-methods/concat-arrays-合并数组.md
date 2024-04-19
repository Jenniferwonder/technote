---
draft: false
Datereviewed: 2024-01-26
aliases:
  - Concat Arrays-合并数组
title: Concat Arrays-合并数组
topic:
  - Array
type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-19
reviewed: 1
difficulty: 
status: 
comment: 
linter-yaml-title-alias: Concat Arrays-合并数组
category: Programming
---

# Concat Arrays-合并数组

---

Basic

## 将两个或多个数组合并为一个新数组（忽略二维数组结构）

Back:

- `let newColor = color.concat(oldColor)`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691308392551.png)
- ✅`let newColor = [...color,...oldColor]`
<!--ID: 1706600287314-->

---

---

Basic

## 合并一个二维数组（保留二维数组结构）

Back:

- `oldColor[Symbol.isConcatSpreadable] = false`
- `let newColor = color.concat(oldColor)` - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691309107510.png)
<!--ID: 1706600287320-->

---
