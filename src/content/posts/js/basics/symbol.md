---
topic:
  - Basics
type: D
tags:
  - JavaScript
Datereviewed: 2024-04-16
reviewed: 1
difficulty: Hard
comment: 
title: Symbol
DateStarted: 2023-02-15
DateModified: 2024-04-25
status:
  - ToDo
aliases:
  - Symbol
linter-yaml-title-alias: Symbol
category: Programming
draft: true
---

# Symbol

## Reference

- [Symbol - JavaScript | MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol)
- [7. Symbols](https://exploringjs.com/es6/ch_symbols.html)
- [JavaScript Symbols: But Why?. Symbols, the newest JavaScript… | by Thomas Hunter II | intrinsic | Medium](https://medium.com/intrinsic-blog/javascript-symbols-but-why-6b02768f4a5c)

## What is symbol?

- - Symbols are primitive values
  - A symbol is a primitive which cannot be recreated?
  - symbol instances are unique and immutable
  - 一个 symbol 值能作为对象属性的标识符；这是该数据类型仅有的目的;
    - The purpose of a symbol is to be a guaranteed unique identifier for object properties that does not risk property collision
  - In this case a symbols is similar to an object as creating multiple instances will result in values which are not exactly equal. But, a symbol is also a primitive in that it cannot be mutated.

```js
const s1 = Symbol();
const s2 = Symbol();
console.log(s1 === s2); // false
```

## The [Symbol](Symbol) Type

- Basic Symbol Use
- Using the Global Symbol Registry
- Using Symbols as Properties
- Well-Known Symbols
  - Symbol.asyncIterator
  - Symbol.hasInstance
  - Symbol.isConcatSpreadable
  - Symbol.iterator
  - Symbol.match
  - Symbol.replace
  - Symbol.search
  - Symbol.species
  - Symbol.split
  - Symbol.toPrimitive
  - Symbol.toStringTag
  - Symbol.unscopables
