---
title: Global Object
reviewed: 
difficulty: 
comment: 
topic:
  - Objects
  - DOM
tags:
  - JavaScript
type: D
DateStarted: 2023-07-20
DateModified: 2024-04-18
Datereviewed: 
status:
  - Snooze
category: Programming
---

# Global Object

## 定义

- Global 对象为一种兜底对象，它所针对的是不属于任何对象的属性和方法。

## 方法

- `isNaN()`, `isFinite()`, `parseInt()`, and `parseFloat()`, are actually methods of the Global object
- URI-Encoding Methods
  - 目的
    - 用于编码统一资源标识符（ URI），特殊的 UTF-8 编码替换掉所有无效字符空格等，使浏览器理解
  - `encodeURI()`
    - can be used on full URIs
    - 不会编码属于 URL 组件的特殊字符，比如冒号、斜杠、问号、井号
  - `encodeURIComponent()`
- can be used only on strings that are appended to the end of an existing URI.
  - 会编码它发现的所有非标准字符
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-34-x67-y372.png)
- The `eval()` Method
  - the most powerful in the entire ECMAScript language
  - This method works like an entire ECMAScript interpreter (编译器) and accepts one argument, a string of ECMAScript (or JavaScript) to execute.
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1691042433344image.png)
  - Any variables or functions created inside of eval() will not be hoisted, as they are contained within a string when the code is being parsed. They are created only at the time of eval() execution.
  - In strict mode, variables and functions created inside of eval() are not accessible outside
  - in strict mode, assigning a value to eval causes an error
  - 可能有恶性插入风险，须慎用

## 属性

- all variables and functions defined globally become properties of the Global object.
- The special values (特殊值) of undefined, NaN, and Infinity are all properties of the Global object.
- all native reference type constructors (引用类型构造函数), such as Object and Function, are properties of the Global object.
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1691042774125image.png)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1691042785602image.png)

## [Window Object](Window-Object)

- 浏览器将 window 对象实现为 Global 对象的代理
- window 对象在 JavaScript 中远不止实现了 ECMAScript 的 Global 对象那么简单。
- all variables and functions declared in the global scope become properties on window.
