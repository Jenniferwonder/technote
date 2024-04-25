---
draft: false
Datereviewed: 2024-01-26
difficulty: 
comment: 
aliases:
  - Ways to Create Arrays-创建数组
title: Ways to Create Arrays-创建数组
type: D
topic:
  - Array
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-25
reviewed: 1
status:
  - Mature
linter-yaml-title-alias: Ways to Create Arrays-创建数组
category: Programming
---

# Ways to Create Arrays-创建数组

---

Basic

### 创建数组的三种方法

Back:

- 使用数组构造函数 `new Array()`
- 字面量标记法 `[ ]`
- 静态方法 `Array.from()` （introduced in ES6）  
🏷️: JS-Array  
📌: JS::JS-Array
<!--ID: 1706536857988-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 创建一个空数组

Back:

- let colors = `new Array();`
- let colors = `[ ]`
<!--ID: 1706536857998-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 创建一个 20 位的空数组

Back:

- `let colors = new Array(20);`
- `let colors = Array(20); // Omit the 'new' keyword: `
<!--ID: 1706536858009-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 创建数组 `[red, blue, green]`

Back:

- ✅ 字面量标记法：`let colors = [red, blue, green];`
- 构造函数法：`let colors = new Array(red, blue, green);`
- 静态方法：`let colors = Array.of(red, blue, green);`
<!--ID: 1706536858020-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 创建含 3 个值为 1 元素的数组 (`[1, 1, 1]`)

Back:

- 法 1：`Array.from({ length: 3}, () => 1)`
- 法 2：`Array(3).fill(1,0,2)
<!--ID: 1706536858031-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 创建含 3 个数组递增元素的数组 (`[1, 2, 3]`)

Back:

- `Array.from({ length: 3}, (_, i) => i+1)`
<!--ID: 1706536858042-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 将类数组转换为数组

Back:

- `Array.from(document.querySelectorAll('.className'))`
- `[...document.querySelectorAll('.className')]`
- `Array.prototype.slice.call(document.querySelectorAll('.className'))`
<!--ID: 1706536858052-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 将字符串拆分为对应字符的数组

Back:

- `alert(Array.from(Matt)); // [M, a, t, t]`
<!--ID: 1706537026589-->

---

---

Basic

### Convert Set (s) and Map (m) into an new Array Instance

Back:

- ![1691244271831.png](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/202404152053906-js-array.png)
<!--ID: 1706536858072-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### `.fill(1, 2, 5)` 含义

Back:

- fill an array with the specified value 1 from index 2 to 5
<!--ID: 1706536858081-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### Turn variables into Array

Back:

- `alert(Array.of(1,2,3,4)) // [1,2,3,4] `
- `alert(Array.of(undefined)) // [undefined]`
- `alert(Array.of(...[,,,])) // [undefined, undefined, undefined]`
<!--ID: 1706536858091-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### `Array.from()` 用途、参数

Back:

- used for converting array-like constructs into an array instance
- `Array.from()` performs a shallow **copy** of an existing array
- 1st Arg
  - arrayLike object: anything that is iterable or has a property length and indexed elements
- 2nd Arg (Optional)
  - map function argument
  - same with `Array.from().map()`
  - [Iterate and Map over Array (数组循环迭代)](../iterate-and-map-over-array)
- 3rd Arg (Optional)
- ![1691244947152.png](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/202404152054341.png-js-array)

<!--ID: 1706536858100-->

---

<!--SR:!2024-02-05,7,250-->
### 类数组和数组的区别，dom 的类数组如何转换成数组
类数组（Array-like）和数组（Array）都是用于存储多个值的数据结构，但它们之间存在一些关键区别：
1. 类型：数组是 JavaScript 的内置对象类型，继承自`Array.prototype`，具有一系列数组方法（如`push()`、`pop()`、`map()`等）。类数组是普通的对象，其属性名为索引（如`0`、`1`、`2`等），具有一个`length`属性，但不具备数组的方法。
2. 原型：数组的原型为`Array.prototype`，因此具有数组的所有方法。类数组的原型通常为`Object.prototype`，并不包含数组的方法。  
要将 DOM 的类数组（例如，通过`document.getElementsByClassName()`或`document.querySelectorAll()`获取的元素集合）转换为数组，可以使用以下方法之一：
3. 使用`Array.from()`方法：

   ```js
   let nodeList = document.querySelectorAll("div");
   let array = Array.from(nodeList);
   ```

   `Array.from()`方法会创建一个新数组，并将类数组的元素逐个复制到新数组中。

4. 使用扩展运算符（Spread Operator）：

   ```js
   let nodeList = document.querySelectorAll("div");
   let array = [...nodeList];
   ```

   扩展运算符`...`可以将类数组直接转换为数组。

5. 使用`Array.prototype.slice.call()`：

   ```js
   let nodeList = document.querySelectorAll("div");
   let array = Array.prototype.slice.call(nodeList);
   ```

`Array.prototype.slice.call()`方法会将类数组作为上下文，并创建一个新数组，将类数组的元素逐个复制到新数组中。

这些方法可以将类数组转换为数组，这样就可以在转换后的数组上使用数组的方法了。注意，这些方法不仅适用于 DOM 类数组，还适用于其他类数组对象。