---
draft: false
Datereviewed: 2024-04-16
aliases:
  - Convert Array or Object to String-数组或对象转字符串方法
title: Convert Array or Object to String-数组或对象转字符串方法
topic:
  - Array
  - String
type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-25
reviewed: 1
difficulty: Good
status:
  - ToUse
comment: 
linter-yaml-title-alias: Convert Array or Object to String-数组或对象转字符串方法
category: Programming
---

# Convert Array or Object to String-数组或对象转字符串方法

---

Basic

### Convert Array or Object to String (数组或对象转字符串方法)

Back:

- `toString()`
- `valueOf()`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691303468091.png)
- `.join(,)`
- **`toLocaleString()`**
- may end up returning the same value as toString() and valueOf(), but not always - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691303867882.png)  
📌: JS::JS-Array  
🏷️: JS-Array
<!--ID: 1706600287338-->

---

<!--SR:!2024-01-30,1,230-->

### 3 种转字符串方法的特点

- Each return the array items as a comma-separated string
- If an item in the array is null or undefined, it is represented by an **empty string**
