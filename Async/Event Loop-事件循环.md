---
tags:
  - JavaScript
DateReviewed: 2024-02-18
Comment:
Type: D
DateDo:
DateDone:
DateDue:
Title: Event Loop-事件循环
DateStarted: 2022-12-08
DateModified: 2024-02-18
status:
Difficulty: Hard
Reviewed: 2
Topic:
  - Async
---

# Event Loop-事件循环

## What is JavaScript?

- [How JavaScript works](https://link.juejin.cn/?target=https%3A%2F%2Fblog.sessionstack.com%2Fhow-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5 "https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5")
- A **single-threaded** non-blocking asynchronous concurrent language.
- 单线程、无阻塞、异步、并发
- Have **a call stack**, an event loop, a callback queue and other APIs...

### V8

- A JS runtime
- Have a callstack and a heap
- The V8 can do one thing at a time, but not the browser which can access other APIs.

## Event Loop (事件轮询机制)

### Reference

- ⭐[What the heck is the event loop anyway? | Philip Roberts | JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
- ⭐[Jake Archibald on the web browser event loop, setTimeout, micro tasks, requestAnimationFrame, ... - YouTube](https://www.youtube.com/watch?v=cCOL7MC4Pl0)
- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872 "https://juejin.cn/post/6844903512845860872")
- [从 event loop 规范探究 javaScript 异步及浏览器更新渲染时机](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faooy%2Fblog%2Fissues%2F5 "https://github.com/aooy/blog/issues/5")
- [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.cn/post/6844903955286196237 "https://juejin.cn/post/6844903955286196237")
- [一次弄懂 Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606 "https://juejin.cn/post/6844903764202094606")
- [深入理解 JavaScript Event Loop](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F34229323 "https://zhuanlan.zhihu.com/p/34229323")

### Event Loop Execution Process

- call stack > Web APIs > callback queue > 🔁event loop > task in callback queue? push task to the end of stack
- 调用栈、堆栈溢出（stack overflow）、回调队列/任务队列（回调函数）、事件循环、
- render queue：重绘

  ![](z-Assets/Pasted%20image%2020221208182251.png)

#### 事件轮询机制执行过程

1）代码执行过程中，宏任务和微任务放在不同的任务队列中  
2）当某个宏任务执行完后,会查看微任务队列是否有任务。如果有，执行微任务队列中的所有微任务 (注意这里是执行所有的微任务)  
3）微任务执行完成后，会读取宏任务队列中排在最前的第一个宏任务（注意宏任务是一个个取），执行该宏任务，如果执行过程中，遇到微任务，依次加入微任务队列  
4）宏任务执行完成后，再次读取微任务队列里的任务，依次类推。

### 宏任务 微任务

宏任务是一个个执行，执行一个宏任务，然后就把在任务队列中的所有微任务都执行完，再执行下一个宏任务，再执行所有微任务，依次类推

### Reference

- [Tasks, microtasks, queues and schedules](https://link.juejin.cn/?target=https%3A%2F%2Fjakearchibald.com%2F2015%2Ftasks-microtasks-queues-and-schedules%2F "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/")
- [详解宏任务、微任务与事件循环 Event Loop - 掘金](https://juejin.cn/post/7020710294083092493)

### 宏任务（Macrotasks）

主线程上排队执行的任务，只有前一个任务执行完毕，才能执行下一个任务

- script 全部代码（注意同步代码也属于宏任务）
- setTimeout、setInterval、setImmediate 等

### 微任务（Microtasks）

不进入主线程、而进入 " 微任务列表 " 的任务

- Promise、MutationObserver

### Event loop 与 浏览器更新渲染时机

1） 浏览器更新渲染会在 event loop 中的 宏任务 和 微任务 完成后进行，即 `宏任务 → 微任务 → 渲染更新`（先宏任务 再微任务，然后再渲染更新）  
2）宏任务队列中，如果有大量任务等待执行时，将 `dom的变动作为微任务，能更快的将变化呈现给用户`，这样就可以在这一次的事件轮询中更新 dom

## `requestAnimationFrame`

- [【今天你更博学了么】一个神奇的前端动画 API requestAnimationFrame - 掘金](https://juejin.cn/post/6991297852462858277?searchId=202402181438115229F57507550A5779CE)
- [性能优化之通俗易懂学习 requestAnimationFrame 和使用场景举例 - 掘金](https://juejin.cn/post/7190728064458817591?searchId=202402181438115229F57507550A5779CE)
- [另一种渲染大量数据的高效方法：requestAnimationFrame - 掘金](https://juejin.cn/post/7274346507037016104?searchId=202402181438115229F57507550A5779CE)
- [利用 requestAnimationFrame 优化大数据列表渲染 - 掘金](https://juejin.cn/post/7262900590937063482?searchId=202402181438115229F57507550A5779CE)

## 🛠️ Interview Exercise

#### Event Loop 经典题目：判断打印结果 （[Promise](Promise.md)）

```javascript
Promise.resolve()
	.then(function () {
		console.log("promise0");
	})
	.then(function () {
		console.log("promise5");
	});
setTimeout(() => {
	console.log("timer1");
	Promise.resolve().then(function () {
		console.log("promise2");
	});
	Promise.resolve().then(function () {
		console.log("promise4");
	});
}, 0);
setTimeout(() => {
	console.log("timer2");
	Promise.resolve().then(function () {
		console.log("promise3");
	});
}, 0);
Promise.resolve().then(function () {
	console.log("promise1");
});
console.log("start");

// 打印结果： start promise0 promise1 promise5 timer1 promise2 promise4 timer2 promise3
```

#### [Async...await](Async...await.md) 事件轮询执行时机

async 隐式返回 Promise，会产生一个微任务，await 后面的代码是在微任务时执行

```javascript
console.log("script start");
async function async1() {
	await async2(); // await 隐式返回promise
	console.log("async1 end"); // 这里的执行时机：在执行微任务时执行
}
async function async2() {
	console.log("async2 end"); // 这里是同步代码
}
async1();
setTimeout(function () {
	console.log("setTimeout");
}, 0);
new Promise((resolve) => {
	console.log("Promise"); // 这里是同步代码
	resolve();
})
	.then(function () {
		console.log("promise1");
	})
	.then(function () {
		console.log("promise2");
	});
console.log("script end");

// 打印结果:  script start => async2 end => Promise => script end => async1 end => promise1 => promise2 => setTimeout
```

## ❓[Node.js Event Loop](Node.js%20Event%20Loop)

## ❓[Vue 异步更新 (Event loop 与 Vue nextTick)](<Vue%20异步更新%20(Event%20loop%20与%20Vue%20nextTick)>)
