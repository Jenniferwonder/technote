---
Title: Call Stack-执行栈与执行上下文
Topic:
  - Scope
tags:
  - JavaScript
Type: D
DateStarted: 2022-12-16
DateModified: 2024-03-02
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 
Comment: 
Reviewed: 
Difficulty: 
status:
---

## 执行上下文

> [理解 JavaScript 中的执行上下文和执行栈](https://juejin.cn/post/6844903682283143181 "https://juejin.cn/post/6844903682283143181") >[理解 JavaScript 的执行上下文](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F72959191 "https://zhuanlan.zhihu.com/p/72959191") >[JavaScript 进阶-执行上下文](https://juejin.cn/post/6844903983438381069 "https://juejin.cn/post/6844903983438381069") >[JavaScript 深入之执行上下文栈](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F4 "https://github.com/mqyqingfeng/Blog/issues/4") >[一道 js 面试题引发的思考 · Issue #18 · kuitos/kuitos.github.io · GitHub](https://github.com/kuitos/kuitos.github.io/issues/18)

#### 1. 什么是执行上下文？

Javascript 代码都是在 **执行上下文** 中运行的  
执行上下文： 指当前执行环境中的变量、函数声明、作用域链 [Scope-作用域](Scope-作用域)、this 等信息

#### 2. 执行上下文生命周期

##### 2.1. 创建阶段

生成变量对象、建立作用域链 [Scope-作用域](Scope-作用域)、确定 this 的指向

##### 2.2. 执行阶段

变量赋值、函数的引用、执行其他代码  
![执行上下文.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f02e41f0bff3498990d04b7c90215a1f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

##### 2.3. 变量对象

变量对象是与执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明  
变量对象是一个抽象的概念，在全局执行上下文中，变量对象就是全局对象。

#### 3. 执行上下文的特点：

1. 单线程，只在主线程上运行；
2. 同步执行，从上向下按顺序执行；
3. 全局上下文只有一个，也就是 `window` 对象；
4. 函数每调用一次就会产生一个新的执行上下文环境。

#### 4. 全局、函数、Eval 执行上下文

执行上下文分为 `全局、函数、Eval执行上下文`

1. 全局执行上下文（浏览器环境下，为全局的 `window` 对象）
2. 函数执行上下文，每当一个函数被调用时, 都会为该函数创建一个新的上下文
3. 🟨Eval 函数执行上下文，如 eval("1 + 2")  
   对于每个执行上下文，都有三个重要属性：变量对象、作用域链 ([Scope-作用域](Scope-作用域) chain)、this`

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
