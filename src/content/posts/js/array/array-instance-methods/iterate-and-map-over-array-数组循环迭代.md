---
draft: false
aliases:
  - Iterate and Loop over Array-数组循环迭代
Datereviewed: 2024-01-26
title: Iterate and Loop over Array-数组循环迭代
topic:
  - Array
type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-25
reviewed: 1
difficulty: Good
status:
  - ToUseMore
comment: 
linter-yaml-title-alias: Iterate and Loop over Array-数组循环迭代
category: Programming
---

# Iterate and Loop over Array-数组循环迭代

---

Basic

### Return an array computed from original

Back:

- `.map()`  
📌: JS::JS-Array  
🏷️: JS-Array
<!--ID: 1706600287395-->

---

---

Basic

### Iterative Methods-数组循环迭代方法

Back:

- `.forEach()`
- 相当于使用 for 循环遍历数组
<!--ID: 1706600287399-->

---

---

Basic

### ES6 Destructuring (Iterator-迭代器方法)

Back:

- `for (const [i, ele] of a.entries()){ }`
- to split out the key/value pairs inside a loop
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691247030389.png)
- **`.keys()`**
  - return an iterator of the array's indices
- **`.values()`**
  - return an iterator of the array’s elements/values
- **`.entries()`**
  - return an iterator of index/value pairs
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691246935131.png)
<!--ID: 1706600287402-->

---

### 数组有哪几种循环方式？分别有什么作用？
forEach() 方法对数组的每个元素执行一次提供的函数。  
every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔 值。  
filter() 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。 注意： filter() 不会对空数组进行检测。 注意： filter() 不会改变原始数组。  
some() 方法测试是否至少有一个元素可以通过被提供的函数方法。该方法返回一个 Boolean 类型 的值。






