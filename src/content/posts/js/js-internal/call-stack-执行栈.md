---
draft: false
title: call-stack-执行栈
topic:
  - Basics
tags:
  - JavaScript
type: D
DateStarted: 2022-12-16
DateModified: 2024-04-25
Datereviewed: 
comment: 
reviewed: 
difficulty: 
status: 
category: Programming
---



## 执行栈 Call Stack
是一种 `先进后出` 的数据结构，用来存储代码运行的所有执行上下文

1. 当 JS 引擎第一次遇到 `.js` 脚本时，会创建一个全局的执行上下文并且压入当前执行栈
2. 每当 JS 引擎遇到一个函数调用，它会为该函数创建一个新的执行上下文并压入栈的顶部
3. 当该函数执行结束时，执行上下文从栈中弹出，控制流程到达当前栈中的下一个上下文
4. 一旦所有代码执行完毕，JS 引擎从当前栈中移除全局执行上下文

### 执行栈示例

```php
var a = 1; // 1. 全局上下文环境
function bar (x) {
    console.log('bar')
    var b = 2;
    fn(x + b); // 3. fn上下文环境
}
function fn (c) {
    console.log(c);
}
bar(3); // 2. bar上下文环境

```

**执行栈图解** ![执行上下文.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5bffb09739624bcdb3572c6ae963d8a2~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)
