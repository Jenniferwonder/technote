---
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - Promise
type: D
title: Promise
DateStarted: 2022-12-09
DateModified: 2024-04-25
status: 
topic:
  - Async
tags:
  - JavaScript
category: Programming
draft: true
linter-yaml-title-alias: Promise
---

# Promise

## What is a Promise?

Promise 是一种在 JavaScript 中用于处理异步操作的编程模式。它表示一个尚未完成但预计在未来某个时刻完成的操作的结果。Promise 允许我们以更简洁、易读的方式处理异步操作，避免了传统的回调地狱（callback hell）问题。

- A promise is a returned **object** to which you attach callbacks, instead of passing callbacks into a function.
- It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

### Promise 3 种状态

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled** (resolved): meaning that the operation was completed successfully.
- **rejected**: meaning that the operation failed
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-PromiseState-1.png) ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-PromiseState.png)

### Promise 核心特点

1. ? Promise 对象是不可变的，一旦创建，其状态就不能再被改变。
2. Promise 状态只能从 pending 变为 fulfilled 或 rejected，不能逆向改变，且只能改变一次。
3. Promise 允许我们将成功和失败的处理函数分开，增加代码的可读性。

### Promise 缺点

1. 无法取消：一旦创建了 Promise，就无法取消它。这可能导致在某些情况下，不再需要结果的异步操作仍然在执行。
2. 总是异步：Promise 的回调总是异步执行，即使操作已经完成。这可能会导致一些意外的行为，特别是在执行顺序敏感的情况下。
3. 调试困难：由于 Promise 的链式调用和异步特性，调试 Promise 可能比调试同步代码更具挑战性。错误堆栈可能不够清晰，难以确定问题出在哪里。

### 执行特点

- Promise 只以`第一次为准`，第一次成功就`永久`为`fulfilled`，第一次失败就永远状态为`rejected`
- Promise 中有 `throw` 的话，就相当于执行了`reject`

```js
let p1 = new Promise((resolve, reject) => {
	resolve(成功);
	reject(失败);
});
console.log(p1, p1);

let p2 = new Promise((resolve, reject) => {
	reject(失败);
	resolve(成功);
});
console.log(p2, p2);

let p3 = new Promise((resolve, reject) => {
	throw 报错;
});
console.log(p3, p3);
```

### Pending State 特点

- Promise 里没有执行`resolve`、`reject`以及`throw`的话，这个 promise 的状态也是`pending`
- `pending`状态下的 promise 不会执行回调函数`then()`

```js
let myPromise1 = new Promise(() => {});
console.log(myPromise1 :>> , myPromise1);
let myPromise2 = new Promise((resolve, reject) => {
	let a = 1;
	for (let index = 0; index < 5; index++) {
		a++;
	}
});
console.log(myPromise2 :>> , myPromise2);
myPromise2.then(() => {
	console.log(myPromise2执行了then); // 在 Promise pending 状态下不会执行
});
```

## 常见用法

1. 创建 Promise 对象：通过`new Promise(executor)`创建一个 Promise 对象，其中 executor 是一个执行器函数，接受两个参数：resolve 和 reject。成功时调用 resolve 函数并传递结果，失败时调用 reject 函数并传递原因。
2. 链式调用：通过`.then()`方法处理 fulfilled 状态，接受一个回调函数作为参数，当 Promise 状态变为 fulfilled 时调用。`.catch()`方法处理 rejected 状态，接受一个回调函数作为参数，当 Promise 状态变为 rejected 时调用。
3. Promise.all：接受一个 Promise 数组作为参数，当所有 Promise 都变为 fulfilled 状态时返回一个新的 Promise，其值为所有 Promise 结果的数组。如果有任意一个 Promise 变为 rejected 状态，则返回的 Promise 也变为 rejected，且返回原因是第一个 rejected 的 Promise 的原因。
4. Promise.race：接受一个 Promise 数组作为参数，返回一个新的 Promise，其状态和结果与第一个完成（无论是 fulfilled 还是 rejected）的 Promise 相同。

## Create a Promise

### `new Promise()`

#### 参数要求

- 使用 `new Promise()` 必须输入一个执行函数，否则会报错

```js
let myPromise0 = new Promise();
console.log(myPromise0 :>> , myPromise0); // 报错：TypeError: Promise resolver undefined
```

##### Case

```js
function makeRequest(location) {
	return new Promise((resolve, reject) => {
		console.log(`Making Request to ${location}`);
		if (location === Google) {
			resolve(Google says Hi);
		} else {
			reject(We can only talk to Google);
		}
	});
}
```

#### ⭐ 执行顺序

- Promise 构造函数是同步执行的，`promise.then`  中的函数是异步执行的

##### Case

```js
const promise = new Promise((resolve, reject) => {
	console.log(1);
	resolve();
	console.log(2);
});
promise.then(() => {
	console.log(3);
});
console.log(4);
```

##### Output

```shell
1
2
4
3
```

### `Promise.resolve()`

将现有对象转为 Promise 对象

```js
Promise.resolve(foo);
// 等价于
new Promise((resolve) => resolve(foo));
```

#### 参数的四种情况

1. 如果参数是 `Promise` 实例
   - 那么 `Promise.resolve()` 将不做任何修改、原封不动地返回这个实例。
2. 参数是一个 thenable (具有`then`方法的对象) 对象
   - 会将这个对象转为 `Promise` 对象，然后就立即执行 thenable 对象的 `then`方法
3. 参数是一个原始值，或者是一个不具有`then`方法的对象
   - 则`Promise.resolve`方法返回一个新的  `Promise`  对象，状态为`resolved`
4. `Promise.resolve()`方法允许调用时不带参数
   - 直接返回一个 `resolved`状态的 `Promise` 对象。

#### Example

```js
const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);
const codeBlocker = () => {
	// Blocking
	// let i = 0;
	// while(i < 1000000000) { i++;}
	// return '🐷 billion loops done';

	// Async blocking
	// return new Promise((resolve, reject) => {
	// let i = 0;
	// while(i < 1000000000) { i++;}
	// resolve('🐷 billion loops done');
	// })

	// Non-blocking
	return Promise.resolve().then((v) => {
		let i = 0;
		while (i < 1000000000) {
			i++;
		}
		return 🐷 billion loops done;
	});
};
log(🥪 Synchronous 1);
codeBlocker().then(log);
log(🥪 Synchronous 2);
```

### `Promise.reject()`

- `Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数

```js
const thenable = {
	then(resolve, reject) {
		reject(出错了);
	},
};
Promise.reject(thenable).catch((e) => {
	console.log(e === thenable);
});
// true
```

## [Promise Chaining-链式调用](promise-chaining-链式调用)

## [Promise Composition-组合调用](promise-composition-组合调用)

## Reference

- ⭐[通俗易懂的 Promise 知识点总结，检验一下你是否真的完全掌握了 Promise？ - 掘金](https://juejin.cn/post/7020335414980378655)
  - [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [Using Promises - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [你好，JavaScript 异步编程---- 理解 JavaScript 异步的美妙](https://juejin.cn/post/6844903648162480142 https://juejin.cn/post/6844903648162480142)
- [Promise 不会？？看这里！！！史上最通俗易懂的 Promise！！！](https://juejin.cn/post/6844903607968481287 https://juejin.cn/post/6844903607968481287)
- [当 async/await 遇上 forEach](https://link.juejin.cn?target=https%3A%2F%2Fobjcer.com%2F2017%2F10%2F12%2Fasync-await-with-forEach%2F https://objcer.com/2017/10/12/async-await-with-forEach/)
- [Promise 必知必会（十道题）](https://juejin.cn/post/6844903509934997511 https://juejin.cn/post/6844903509934997511)

### Write a Promise

- ⭐[Promises/A+](https://promisesaplus.com/)
  - 🛠️[Conformant Promises/A+ Implementations](https://promisesaplus.com/implementations)
  - 🛠️[Promises/A+ · GitHub](https://github.com/promises-aplus)
- 🚀[手写 Promise：实现符合 Promises/A+规范的 Promise - 掘金](https://juejin.cn/post/7274887531271012388#heading-13)
- 🚀[手写 Promise 核心代码 - JavaScript 前端 Web 工程师\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1RR4y1p7my/?vd_source=be278a4cfd00a5f72dcf153eaca79333)
  - [手把手一行一行代码教你“手写 Promise“，完美通过 Promises/A+ 官方 872 个测试用例 - 掘金](https://juejin.cn/post/7043758954496655397#heading-14)
- [Promise 实现原理（附源码）](https://juejin.cn/post/6844903665686282253 https://juejin.cn/post/6844903665686282253)
- [100 行代码实现 Promises/A+ 规范](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FqdJ0Xd8zTgtetFdlJL3P1g https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g)
- [一起学习造轮子（一）：从零开始写一个符合 Promises/A+规范的 promise](https://juejin.cn/post/6844903617619558408#heading-34 https://juejin.cn/post/6844903617619558408#heading-34)
- [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.cn/post/6844903625769091079#heading-9 https://juejin.cn/post/6844903625769091079#heading-9)
