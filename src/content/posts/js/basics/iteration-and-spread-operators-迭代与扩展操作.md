---
draft: false
title: Iteration and Spread Operators 迭代与扩展操作
tags:
  - JavaScript
topic:
  - Objects
  - Basics
type: D
DateStarted: 2023-08-09
DateModified: 2024-04-25
Datereviewed: 2024-04-17
reviewed: 1
status:
  - Distilling
difficulty: 
comment: 
aliases:
  - Iteration and Spread Operators 迭代与扩展操作
linter-yaml-title-alias: Iteration and Spread Operators 迭代与扩展操作
category: Programming
---

# Iteration and Spread Operators 迭代与扩展操作

## ECMAScript 6 新增的迭代器和扩展操作符对集合引用类型特别有用

- [Iterator-迭代器](iterator-迭代器)
- [Collect and Spread Function Arguments-收集与扩展参数](collect-or-rest-and-spread-function-arguments-收集,-剩余与扩展参数)

## 让集合类型之间 相互操作、复制和修改变得异常方便

## 4 种原生集合类型定义了默认迭代器

- Array
- 所有定型数组
- Map
- Set

## 都支持顺序迭代，都可以传入 for-of 循环

## 都兼容扩展操作符

- 扩展操作符在对可迭代对象执行 [Copy-深浅拷贝](copy-深浅拷贝)——浅拷贝 时特别有用， 只需简单的语法就可以复制整个对象
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561776097.png)

## 只要传入一个可迭代对象就可以实现复制

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561810813.png)

## 也可以构建数组的部分元素

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561816320.png)

## 浅复制意味着只会复制对象引用

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561917304.png)

## 都支持多种构建方法，比如 `Array.of()`和 `Array.from()`静态方法。在与扩展操 作符一起使用时，可以非常方便地实现互操作

## 把数组复制到定型数组

```js
let typedArr1 = Int16Array.of(...arr1);
let typedArr2 = Int16Array.from(arr1);
console.log(typedArr1); // Int16Array [1, 2, 3]
console.log(typedArr2); // Int16Array [1, 2, 3]
```

## 把数组复制到映射

```js
let map = new Map(arr1.map((x) => [x, val + x]));
console.log(map); // Map {1 => 'val 1', 2 => 'val 2', 3 => 'val 3'}
```

## 把数组复制到集合

```js
let set = new Set(typedArr2);
console.log(set); // Set {1, 2, 3}
```

## 把集合复制回数组

```js
let arr2 = [...set];
console.log(arr2); // [1, 2, 3]
```
