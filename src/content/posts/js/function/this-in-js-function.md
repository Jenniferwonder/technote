---
aliases:
  - "this in JS Functions "
title: "this in JS Functions "
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
DateModified: 2024-04-18
Datereviewed: 2024-02-16
reviewed: 1
difficulty: 
status: 
comment: 
category: Programming
linter-yaml-title-alias: "this in JS Functions "
---

# this in JS Functions 
---

Basic

### `this` 的 5 种绑定方式

Back:

1. 默认绑定
   - 非严格模式下 this 指向全局对象
   - 严格模式下函数内的 this 指向`undefined`
2. 隐式绑定
   - 标准函数中，this 引用的是把函数当成方法调用的上下文对象
   - 如 `obj.foo()`的调用方式, foo 内的 this 指向 obj
3. 显示绑定
   - 通过 `call` 或者 `apply` 方法直接指定 this 的绑定对象, 如`foo.call(obj)`
4. 箭头函数中，this 引用的是定义箭头函数的上下文
   - 在事件回调或定时回调中调用某个函数时
     - ![image](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1fc4c4837ed533b9b66067107fee23b3.png)
     - `setTimeout(() =console.log(this.royaltyName), 1000);
5. new 构造函数绑定，this 指向新生成的对象  
📌: JS::JS-Function  
🏷️: JS-Function
<!--ID: 1708065505751-->

---

#### 2. this 题目 1

```javascript
use strict;
var a = 10; // var定义的a变量挂载到window对象上
function foo() {
	console.log(this1, this); // undefined
	console.log(window.a); // 10
	console.log(this.a); //  报错，Uncaught TypeError: Cannot read properties of undefined (reading 'a')
}
console.log(this2, this); // window
foo();
```

注意：开启了严格模式，只是使得函数内的 this 指向`undefined`，它并不会改变全局中 this 的指向。因此`this1`中打印的是`undefined`，而`this2`还是`window`对象。

#### 3. this 题目 2

```javascript
let a = 10;
const b = 20;
function foo() {
	console.log(this.a); // undefined
	console.log(this.b); // undefined
}
foo();
console.log(window.a); // undefined
复制代码;
```

如果把 var 改成了 let 或 const，变量是不会被绑定到 window 上的，所以此时会打印出三个 undefined

#### 4. this 题目 3

```javascript
var a = 1;
function foo() {
	var a = 2;
	console.log(this); // window
	console.log(this.a); // 1
}
foo();
```

foo()函数内的 this 指向的是 window，因为是 window 调用的 foo，打印出的`this.a`是 window 下的`a`

#### 5. this 题目 4

```javascript
var obj2 = {
	a: 2,
	foo1: function () {
		console.log(this.a); // 2
	},
	foo2: function () {
		setTimeout(function () {
			console.log(this); // window
			console.log(this.a); // 3
		}, 0);
	},
};
var a = 3;

obj2.foo1();
obj2.foo2();
```

对于`setTimeout`中的函数，这里存在隐式绑定的 this 丢失，也就是当我们将函数作为参数传递时,会被隐式赋值，回调函数丢失 this 绑定，因此这时候 setTimeout 中函数内的 this 是指向`window`

#### 6. this 题目 5

```javascript
var obj = {
	name: obj,
	foo1: () => {
		console.log(this.name); // window
	},
	foo2: function () {
		console.log(this.name); // obj
		return () => {
			console.log(this.name); // obj
		};
	},
};
var name = window;
obj.foo1();
obj.foo2()();
```

这道题非常经典，它证明了**箭头函数内的 this 是由外层作用域决定的**

##### 6.1. 题目 5 解析：

1）对于`obj.foo1()`函数的调用，它的外层作用域是 window，对象 obj 当然不属于作用域了(作用域只有全局作用域、函数作用域、块级作用域)，所以会打印出`window`  
2）`obj.foo2()()`，首先会执行`obj.foo2()`，这不是个箭头函数，所以它里面的 this 是调用它的 obj 对象，因此第二个打印为`obj`，而返回的匿名函数是一个箭头函数，**它的 this 由外层作用域决定**，那也就是它的 this 会和 foo2 函数里的 this 一样，第三个打印也是`obj`

## Reference

- [JavaScript 基础心法——this](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F6 https://github.com/axuebin/articles/issues/6)
- [面试官问：JS 的 this 指向](https://juejin.cn/post/6844903746984476686 https://juejin.cn/post/6844903746984476686)
- [JavaScript 深入之从 ECMAScript 规范解读 this](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F7 https://github.com/mqyqingfeng/Blog/issues/7)
- [前端基础进阶（七）：全方位解读 this](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fd647aa6d1ae6 https://www.jianshu.com/p/d647aa6d1ae6)
- [再来 40 道 this 面试题酸爽继续(1.2w 字用手整理)](https://juejin.cn/post/6844904083707396109 https://juejin.cn/post/6844904083707396109)
