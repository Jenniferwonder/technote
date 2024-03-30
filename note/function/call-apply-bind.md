---
title: call; apply; bind
Topic:
  - Scope
  - Objects
  - Function
Type: D
tags:
  - JavaScript
DateReviewed: 2024-02-16
Reviewed: 2
Difficulty:
Comment:
DateDo:
DateDone:
DateDue:
DateStarted: 2022-12-16
DateModified: 2024-02-16
status:
---

---

Basic

### call apply bind 三者功能与异同

Back:

#### 功能

- 将任意对象设置为任意函数的作用域，这样对象可以不用关心方法
  - 都可以显式绑定函数的 this 指向

#### 异同

- 三者第一个参数都是 `this` 要指向的对象，若该参数为 `undefined` 或 `null`，`this` 则默认指向全局 window
- 传参不同：
  - `apply` 是数组
    - 可以是 Array 的实例
    - 也可以是 arguments 对象
    - `return sum.apply(this, arguments); // 传入 arguments 对象`
  - `call` 是参数列表
    - `return sum.call(this, num1, num2);`
  - `bind` (ES5) 可以分为多次传入，实现参数的合并
    - `let objectSayColor = sayColor.bind(o);`
      - `objectSayColor();  // blue`
- `call`、`apply` 是立即执行，`bind` 是返回绑定 `this` 之后的函数，如果这个新的函数作为构造函数被调用，那么 `this` 不再指向传入给 `bind` 的第一个参数，而是指向新生成的对象  
📌: JS::JS-Function  
🏷️: JS-Function
<!--ID: 1708065412000-->

---

### 手写 call apply bind

```js
// 手写call
Function.prototype.Call = function (context, ...args) {
	// context为undefined或null时，则this默认指向全局window
	if (!context || context === null) {
		context = window;
	}
	// 利用Symbol创建一个唯一的key值，防止新增加的属性与obj中的属性名重复
	let fn = Symbol();
	// this指向调用call的函数
	context[fn] = this;
	// 隐式绑定this，如执行obj.foo(), foo内的this指向obj
	let res = context[fn](...args);
	// 执行完以后，删除新增加的属性
	delete context[fn];
	return res;
};

// apply与call相似，只有第二个参数是一个数组，
Function.prototype.Apply = function (context, args) {
	if (!context || context === null) {
		context = window;
	}
	let fn = Symbol();
	context[fn] = this;
	let res = context[fn](...args);
	delete context[fn];
	return res;
};

// bind要考虑返回的函数，作为构造函数被调用的情况
Function.prototype.Bind = function (context, ...args) {
	if (!context || context === null) {
		context = window;
	}
	let fn = this;
	let f = Symbol();
	const result = function (...args1) {
		if (this instanceof fn) {
			// result如果作为构造函数被调用，this指向的是new出来的对象
			// this instanceof fn，判断new出来的对象是否为fn的实例
			this[f] = fn;
			let res = this[f](...args, ...args1);
			delete this[f];
			return res;
		} else {
			// bind返回的函数作为普通函数被调用时
			context[f] = fn;
			let res = context[f](...args, ...args1);
			delete context[f];
			return res;
		}
	};
	// 如果绑定的是构造函数 那么需要继承构造函数原型属性和方法
	// 实现继承的方式: 使用Object.create
	result.prototype = Object.create(fn.prototype);
	return result;
};
```

### Reference

- [面试官为啥总是让我们手撕 call、apply、bind? - 掘金](https://juejin.cn/post/7128233572380442660)
- [JavaScript 深入之 call 和 apply 的模拟实现](https://juejin.cn/post/6844903476477034510 "https://juejin.cn/post/6844903476477034510")
- [JavaScript 基础心法—— call apply bind](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F7 "https://github.com/axuebin/articles/issues/7")
- [面试官问：能否模拟实现 JS 的 call 和 apply 方法](https://juejin.cn/post/6844903728147857415 "https://juejin.cn/post/6844903728147857415")
- [回味 JS 基础:call apply 与 bind](https://juejin.cn/post/6844903444348665870 "https://juejin.cn/post/6844903444348665870")
- [面试官问：能否模拟实现 JS 的 bind 方法](https://juejin.cn/post/6844903718089916429 "https://juejin.cn/post/6844903718089916429")
- [不用 call 和 apply 方法模拟实现 ES5 的 bind 方法](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjawil%2Fblog%2Fissues%2F16 "https://github.com/jawil/blog/issues/16")
