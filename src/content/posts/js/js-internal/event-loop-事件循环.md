---
aliases:
  - Event Loop-事件循环
draft: false
tags:
  - JavaScript
comment: 
type: D
title: Event Loop-事件循环
DateStarted: 2022-12-08
DateModified: 2024-04-25
status: 
difficulty: Hard
reviewed: 3
topic:
  - Basics
  - Async
Datereviewed: 2024-04-25
category: Programming
linter-yaml-title-alias: Event Loop-事件循环
---

# Event Loop-事件循环
### 相关术语
- call stack > Web APIs > callback queue > 🔁event loop > task in callback queue? push task to the end of stack
- render queue：重绘
- 调用栈、堆栈溢出（stack overflow）、回调队列/任务队列（回调函数）、事件循环
### Event Loop (事件轮询机制)
事件循环（Event Loop）是 JavaScript 运行时环境中的一个核心概念，它负责协调异步操作和同步代码的执行。JavaScript 是单线程的，这意味着它一次只能执行一个任务。事件循环使 JavaScript 能够在执行同步代码的同时，处理异步操作（如定时器、用户交互和网络请求）的回调。  
事件循环的目标是在处理同步代码和异步回调之间保持平衡，确保 JavaScript 代码的执行效率和响应能力。通过这种方式，事件循环允许 JavaScript 在单线程环境中有效地处理并发操作。

  ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Pasted-image-20221208182251.png)

#### 事件轮询机制执行过程
1. 首先，JavaScript 引擎执行全局同步代码（例如来自`<script>`标签或 Node.js 文件的代码）。
2. 当遇到异步操作，它们的回调函数会被放入相应的任务队列中（**微任务队列**或**宏任务队列**）。
3. 全局同步代码执行完成后，事件循环开始检查 **微任务队列**。如果队列中有任务，事件循环将依次执行它们，直到队列为空。
4. 接下来，事件循环检查 **宏任务队列**，并执行其中第一个宏任务，如果执行过程中，遇到微任务，依次加入微任务队列，然后**返回到微任务队列**，执行所有微任务。
5. 事件循环在微任务队列和宏任务队列之间循环，依次执行队列中的任务。当两个队列都为空时，事件循环将等待新的任务（如用户交互或网络请求回调）。
6. 当新任务出现时，事件循环将其添加到相应的队列中，并继续循环执行任务。

### 宏任务（Macrotasks）
> macrotask 本质上是浏览器多个线程之间通信的一个消息队列  
> 在 chrome 里，每个页面都对应一个进程，该进程又有多个线程，比如 js 线程、渲染线程、io 线程、网络线程、定时器线程等，这些线程之间的通信，是通过向对方的任务队列中添加一个任务（PostTask）来实现的。

宏任务是一个个执行，执行一个宏任务，然后就把在任务队列中的所有微任务都执行完，再执行下一个宏任务，再执行所有微任务，依次类推  
主线程上排队执行的任务，只有前一个任务执行完毕，才能执行下一个任务
- `script` 全部代码（注意同步代码也属于宏任务）
- `setTimeout`、`setInterval`、`setImmediate` 等
### 微任务（Microtasks）
不进入主线程、而进入 微任务列表 的任务
- `Promise`、`MutationObserver`

### 浏览器更新渲染时机
1） 浏览器更新渲染会在 event loop 中的 宏任务 和 微任务 完成后进行，即 `宏任务 → 微任务 → 渲染更新`（先宏任务 再微任务，然后再渲染更新）  
2）宏任务队列中，如果有大量任务等待执行时，将 DOM 的变动作为微任务，能更快的将变化呈现给用户，这样就可以在这一次的事件轮询中更新 DOM

### `requestAnimationFrame`
- [【今天你更博学了么】一个神奇的前端动画 API requestAnimationFrame - 掘金](https://juejin.cn/post/6991297852462858277?searchId=202402181438115229F57507550A5779CE)
- [性能优化之通俗易懂学习 requestAnimationFrame 和使用场景举例 - 掘金](https://juejin.cn/post/7190728064458817591?searchId=202402181438115229F57507550A5779CE)
- [另一种渲染大量数据的高效方法：requestAnimationFrame - 掘金](https://juejin.cn/post/7274346507037016104?searchId=202402181438115229F57507550A5779CE)
- [利用 requestAnimationFrame 优化大数据列表渲染 - 掘金](https://juejin.cn/post/7262900590937063482?searchId=202402181438115229F57507550A5779CE)

### Reference
- ⭐[What the heck is the event loop anyway? | Philip Roberts | JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- ⭐[Jake Archibald on the web browser event loop, setTimeout, micro tasks, requestAnimationFrame, ... - YouTube](https://www.youtube.com/watch?v=cCOL7MC4Pl0)  
[深入浏览器事件循环的本质 · Issue #160 · frontend9/fe9-library · GitHub](https://github.com/frontend9/fe9-library/issues/160)
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872 https://juejin.cn/post/6844903512845860872)
- [从 event loop 规范探究 javaScript 异步及浏览器更新渲染时机](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faooy%2Fblog%2Fissues%2F5 https://github.com/aooy/blog/issues/5)
- [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.cn/post/6844903955286196237 https://juejin.cn/post/6844903955286196237)
- [一次弄懂 Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606 https://juejin.cn/post/6844903764202094606)
- [深入理解 JavaScript Event Loop](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F34229323 https://zhuanlan.zhihu.com/p/34229323)
- [Tasks, microtasks, queues and schedules](https://link.juejin.cn/?target=https%3A%2F%2Fjakearchibald.com%2F2015%2Ftasks-microtasks-queues-and-schedules%2F https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/)
- [详解宏任务、微任务与事件循环 Event Loop - 掘金](https://juejin.cn/post/7020710294083092493)
### 🛠️ Interview Exercise
#### Event Loop 经典题目：判断打印结果

```javascript
Promise.resolve()
	.then(function () {
		console.log(promise0);
	})
	.then(function () {
		console.log(promise5);
	});
setTimeout(() => {
	console.log(timer1);
	Promise.resolve().then(function () {
		console.log(promise2);
	});
	Promise.resolve().then(function () {
		console.log(promise4);
	});
}, 0);
setTimeout(() => {
	console.log(timer2);
	Promise.resolve().then(function () {
		console.log(promise3);
	});
}, 0);
Promise.resolve().then(function () {
	console.log(promise1);
});
console.log(start);

// 打印结果： start promise0 promise1 promise5 timer1 promise2 promise4 timer2 promise3
```

#### 事件轮询执行时机

async 隐式返回 Promise，会产生一个微任务，await 后面的代码是在微任务时执行

```javascript
console.log(script start);
async function async1() {
	await async2(); // await 隐式返回promise
	console.log(async1 end); // 这里的执行时机：在执行微任务时执行
}
async function async2() {
	console.log(async2 end); // 这里是同步代码
}
async1();
setTimeout(function () {
	console.log(setTimeout);
}, 0);
new Promise((resolve) => {
	console.log(Promise); // 这里是同步代码
	resolve();
})
	.then(function () {
		console.log(promise1);
	})
	.then(function () {
		console.log(promise2);
	});
console.log(script end);

// 打印结果:  script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout
```
