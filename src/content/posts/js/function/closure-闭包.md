---
aliases:
  - Closures 闭包
draft: false
title: Closures 闭包
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
Datereviewed: 2024-02-16
DateModified: 2024-04-25
reviewed: 1
difficulty: 
status: 
comment: 
category: Programming
linter-yaml-title-alias: Closures 闭包
---
# Closures 闭包
---
Basic
### 闭包定义
Back:
- 闭包是指一个函数可以访问另一个函数作用域内的变量。
- 当一个函数嵌套在另一个函数中时，内部函数可以访问外部函数的变量，即使外部函数已经返回了。这种情况下，内部函数形成了一个闭包，它保留了外部函数的作用域链并可以继续访问这些变量。闭包常常用于实现函数的封装和私有化，以及在回调和事件处理等场景下的数据共享与传递。
- to give a function access to all variables of its parent function, even after that parent function has returned
- 闭包中使用 this  

  📌: JS::JS-Function  
  🏷️: JS-Function
  
---
#### 1. 闭包常见的两种情况
一是函数作为返回值； 另一个是函数作为参数传递
#### 2. 闭包的作用
可以让局部变量的值始终保持在内存中；  
对内部变量进行保护，使外部访问不到  
最常见的案例：`函数节流和防抖` [Debounce and Throttle-防抖节流](Debounce-and-Throttle-防抖节流)
#### 3. 闭包的垃圾回收
副作用：不合理的使用闭包，会造成内存泄露 (就是该内存空间使用完毕之后未被回收)  
闭包中引用的变量直到闭包被销毁时才会被垃圾回收
### Reference
- [发现 JavaScript 中闭包的强大威力](https://juejin.cn/post/6844903769646317576 https://juejin.cn/post/6844903769646317576)
- [JavaScript 闭包的底层运行机制](https://link.juejin.cn/?target=http%3A%2F%2Fblog.leapoahead.com%2F2015%2F09%2F15%2Fjs-closure%2F http://blog.leapoahead.com/2015/09/15/js-closure/)
- [我从来不理解 JavaScript 闭包，直到有人这样向我解释它...](https://link.juejin.cn/?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F56490498 https://zhuanlan.zhihu.com/p/56490498)
- [破解前端面试（80% 应聘者不及格系列）：从闭包说起](https://juejin.cn/post/6844903474212143117#heading-0 https://juejin.cn/post/6844903474212143117#heading-0)
#### 4. 闭包的示例

```javascript
// 原始题目
for (var i = 0; i < 5; i++) {
	setTimeout(function () {
		console.log(i); // 1s后打印出5个5
	}, 1000);
}
// ⬅️利用闭包，将上述题目改成1s后，打印0,1,2,3,4
// 方法一：
for (var i = 0; i < 5; i++) {
	(function (j) {
		setTimeout(function timer() {
			console.log(j);
		}, 1000);
	})(i);
}
// 方法二：
// 利用setTimeout的第三个参数，第三个参数将作为setTimeout第一个参数的参数
for (var i = 0; i < 5; i++) {
	setTimeout(
		function fn(i) {
			console.log(i);
		},
		1000,
		i
	); // 第三个参数i,将作为fn的参数
}
// ⬅️将上述题目改成每间隔1s后，依次打印0,1,2,3,4
for (var i = 0; i < 5; i++) {
	setTimeout(
		function fn(i) {
			console.log(i);
		},
		1000 * i,
		i
	);
}
```

### 手写一个闭包

```
function fn() {
  var num = 10
  function fun() {
    console.log(num)
  }
  return fun
}
var f = fn()
f()
```