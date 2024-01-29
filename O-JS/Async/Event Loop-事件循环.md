---
Type: D
DateDo: 
DateDone: 
DateDue: 
Title: Event Loop-事件循环
DateStarted: 2022-12-08
DateModified: 2023-11-28
status: 
LeadTime: "1"
Cards-D: "0"
Page-D: "0"
EST: NaN
Difficulty: Hard
Reviewed: 1
Topic:
  - Async
---
- Up:: [[1.2.1.3 JavaScript]]

> [What the heck is the event loop anyway? | Philip Roberts | JSConf EU - YouTube](https://www.youtube.com/watch?v=8aGhZQkoFbQ)

## What is JavaScript?

> - [How JavaScript works](https://link.juejin.cn/?target=https%3A%2F%2Fblog.sessionstack.com%2Fhow-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5 "https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5")

- A **single-threaded** non-blocking asynchronous concurrent language.
- 单线程、无阻塞、异步、并发
- Have **a call stack**, an event loop, a callback queue and other APIs...
- 调用栈、堆栈溢出（stack overflow）、回调队列/任务队列（回调函数）、事件循环、

### V8

- A JS runtime
- Have a callstack and a heap
- The V8 can do one thing at a time, but not the browser which can access other APIs.  
  ![[Pasted image 20221208182251.png]]

## 宏任务 微任务

> - [Tasks, microtasks, queues and schedules](https://link.juejin.cn/?target=https%3A%2F%2Fjakearchibald.com%2F2015%2Ftasks-microtasks-queues-and-schedules%2F "https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/")

JS 语言的一大特点就是单线程，也就是说，同一个时间只能做一件事。所有任务都需要排队，前一个任务结束，才会执行后一个任务。如果前一个任务耗时很长，后一个任务就不得不一直等着  
所有任务可以分成两种，一种是宏任务，另一种是微任务

#### 1. 宏任务（Macrotasks）

主线程上排队执行的任务，只有前一个任务执行完毕，才能执行下一个任务

- script 全部代码（注意同步代码也属于宏任务）
- setTimeout、setInterval、setImmediate 等

#### 2. 微任务（Microtasks）

不进入主线程、而进入 " 微任务列表 " 的任务

- Promise、MutationObserver

## 事件轮询机制 Event Loop

### Reference

- [这一次，彻底弄懂 JavaScript 执行机制](https://juejin.cn/post/6844903512845860872 "https://juejin.cn/post/6844903512845860872")
- [从 event loop 规范探究 javaScript 异步及浏览器更新渲染时机](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faooy%2Fblog%2Fissues%2F5 "https://github.com/aooy/blog/issues/5")
- [【THE LAST TIME】彻底吃透 JavaScript 执行机制](https://juejin.cn/post/6844903955286196237 "https://juejin.cn/post/6844903955286196237")
- [一次弄懂 Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606 "https://juejin.cn/post/6844903764202094606")
- [深入理解 JavaScript Event Loop](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F34229323 "https://zhuanlan.zhihu.com/p/34229323")

#### 1. Node.js Event Loop

- [浏览器与 Node 的事件循环(Event Loop)有何区别?](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F54882306 "https://zhuanlan.zhihu.com/p/54882306")
- [浏览器与 Node 的事件循环(Event Loop)有何区别?](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F54882306 "https://zhuanlan.zhihu.com/p/54882306")
- [The Node.js Event Loop, Timers, and process.nextTick()](https://link.juejin.cn?target=https%3A%2F%2Fnodejs.org%2Fen%2Fdocs%2Fguides%2Fevent-loop-timers-and-nexttick%2F "https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/")

#### 2. Vue 异步更新

- [Vue 异步更新 - nextTick 为什么要 microtask 优先](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fqingzhou729%2Fstudy%2Fissues%2F15 "https://github.com/qingzhou729/study/issues/15")

### Event Loop Concept

call stack > webapis > callback queue > 🔁event loop > task in callback queue? push task to the end of stack  
render queue：重绘

#### 1. 事件轮询机制执行过程

1）代码执行过程中，宏任务和微任务放在不同的任务队列中  
2）当某个宏任务执行完后,会查看微任务队列是否有任务。如果有，执行微任务队列中的所有微任务 (注意这里是执行所有的微任务)  
3）微任务执行完成后，会读取宏任务队列中排在最前的第一个宏任务（注意宏任务是一个个取），执行该宏任务，如果执行过程中，遇到微任务，依次加入微任务队列  
4）宏任务执行完成后，再次读取微任务队列里的任务，依次类推。

#### 2. Event Loop 经典题目：判断打印结果 （[[Promise]]）

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

##### 2.1. 案例的解释

宏任务是一个个执行，执行一个宏任务，然后就把在任务队列中的所有微任务都执行完，再执行下一个宏任务，再执行所有微任务，依次类推

#### 3. [[Async...await]] 事件轮询执行时机

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

#### 4. event loop 与 浏览器更新渲染时机

1） 浏览器更新渲染会在 event loop 中的 宏任务 和 微任务 完成后进行，即 `宏任务 → 微任务 → 渲染更新`（先宏任务 再微任务，然后再渲染更新）  
2）宏任务队列中，如果有大量任务等待执行时，将 `dom的变动作为微任务，能更快的将变化呈现给用户`，这样就可以在这一次的事件轮询中更新 dom

#### 5. event loop 与 vue nextTick

**vue nextTick 为什么要优先使用微任务实现？**

1） vue nextTick 的源码实现，优先级判断，总结就是 `Promise > MutationObserver > setImmediate > setTimeout`

2）这里优先使用 Promise，因为根据 event loop 与浏览器更新渲染时机，使用微任务，本次 event loop 轮询就可以获取到更新的 dom

3）如果使用宏任务，要到下一次 event loop 中，才能获取到更新的 dom

#### 6. Node 中的 process.nextTick

有很多文章把 Node 的 process.nextTick 和微任务混为一谈，但其实并不是同一个东西

process.nextTick 是 Node.js 自身定义实现的一种机制，有自己的 `nextTickQueue`

**process.nextTick 执行顺序早于微任务**

**示例**

```javascript
console.log("start");
setTimeout(() => {
	console.log("timeout");
}, 0);
Promise.resolve().then(() => {
	console.log("promise");
});
process.nextTick(() => {
	console.log("nextTick");
	Promise.resolve().then(() => {
		console.log("promise1");
	});
});
console.log("end");
// 执行结果 start end nextTick  promise promise1 timeout
```
