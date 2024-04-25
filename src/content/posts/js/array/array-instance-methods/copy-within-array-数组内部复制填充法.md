---
draft: false
Datereviewed: 2024-01-26
aliases:
  - Copy within Array-数组内部复制填充法
title: Copy within Array-数组内部复制填充法
topic:
  - Array
type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-25
reviewed: 1
difficulty: Hard
status:
  - ToUse
comment: 
linter-yaml-title-alias: Copy within Array-数组内部复制填充法
category: Programming
---

# Copy within Array-数组内部复制填充法

---

Basic

### 复制数组索引第 5 位前的元素从第 5 位起填充数组

Back:

- `.copyWithin(5)`
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1691247899277image.png)  
📌: JS::JS-Array  
🏷️: JS-Array
<!--ID: 1706600287342-->

---

---

Basic

### 复制数组索引第 5 位元素开始的值从首位开始填充数组

Back:

- `.copyWithin(0, 5)`
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-copy-within-array.png)
<!--ID: 1706600287345-->

---

---

Basic

### 复制首位至数组索引第 3 位前元素的值从第 4 位开始填充数组

Back:

- `.copyWithin(4, 0, 3)`
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691247976103.png)
<!--ID: 1706600287348-->

---

---

Basic

### `.copyWithin()` 特性与注意事项

Back:

- performs an iterative shallow copy of some of the array and **overwrites existing values** beginning at the provided index
- allow for batch fill and copy inside an array - allow to specify a range within an existing array instance - inclusive start and exclusive end index
<!--ID: 1706600287351-->

---

<!--SR:!2024-01-30,1,230-->
