---
Type: D
DateDo: 
DateDone: 
DateDue: 
Title: Promise
DateStarted: 2022-12-09
DateModified: 2023-11-28
status: 
LeadTime: "1"
Cards-D: "0"
Page-D: "0"
EST: NaN
Topic:
  - Async
---

## Questions

- [100 行代码实现 Promises/A+ 规范](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FqdJ0Xd8zTgtetFdlJL3P1g "https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g")
- [你好，JavaScript 异步编程---- 理解 JavaScript 异步的美妙](https://juejin.cn/post/6844903648162480142 "https://juejin.cn/post/6844903648162480142")
- [Promise 不会？？看这里！！！史上最通俗易懂的 Promise！！！](https://juejin.cn/post/6844903607968481287 "https://juejin.cn/post/6844903607968481287")
- [一起学习造轮子（一）：从零开始写一个符合 Promises/A+规范的 promise](https://juejin.cn/post/6844903617619558408#heading-34 "https://juejin.cn/post/6844903617619558408#heading-34")
- [Promise 实现原理（附源码）](https://juejin.cn/post/6844903665686282253 "https://juejin.cn/post/6844903665686282253")
- [当 async/await 遇上 forEach](https://link.juejin.cn?target=https%3A%2F%2Fobjcer.com%2F2017%2F10%2F12%2Fasync-await-with-forEach%2F "https://objcer.com/2017/10/12/async-await-with-forEach/")
- [Promise 必知必会（十道题）](https://juejin.cn/post/6844903509934997511 "https://juejin.cn/post/6844903509934997511")
- [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.cn/post/6844903625769091079#heading-9 "https://juejin.cn/post/6844903625769091079#heading-9")

## Promise Chain

> [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)  
> [Using Promises - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

#### 1. What is a Promise?

A promise is a returned **object** to which you attach callbacks, instead of passing callbacks into a function. It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

#### 2. States

A `Promise` is in one of these states:

- _pending_: initial state, neither fulfilled nor rejected.
- _**resolved** (fulfilled)_: meaning that the operation was completed successfully.
- _**rejected**_: meaning that the operation failed

#### 3. Create a Promise (Example - Icecream)

> [[英字] JavaScript 异步编程（Async/Await、Promise、Callback）FreeCodeCamp](https://www.bilibili.com/video/BV1g44y1z7N3/?spm_id_from=333.788.recommend_more_video.4&vd_source=be278a4cfd00a5f72dcf153eaca79333)  
> [FreeCodeCamp-Blog](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)

##### 3.1. Relationship between time and work

```javascript
let is_shop_open = true;
let order = (time, work) => {
	return new Promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(() => {
				// work is 👇 getting done here
				resolve(work());
				// Setting 👇 time here for 1 work
			}, time);
		} else {
			reject(console.log("Our shop is closed"));
		}
	});
};
```

##### 3.2. Promise chaining

```js
// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
	// step 2
	.then(() => order(0000, () => console.log("production has started")))
	// step 3
	.then(() => {
		return order(2000, () => console.log("Fruit has been chopped"));
	})
	// step 4
	.then(() => {
		return order(1000, () =>
			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
		);
	})
	// step 5
	.then(() => {
		return order(1000, () => console.log("start the machine"));
	})
	// step 6
	.then(() => {
		return order(2000, () =>
			console.log(`ice cream placed on ${stocks.holder[1]}`)
		);
	})
	// step 7
	.then(() => {
		return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
	})
	// Step 8
	.then(() => {
		return order(2000, () => console.log("Serve Ice Cream"));
	});
```

##### 3.3. Error handling

```javascript
let is_shop_open = false;
// Add Error handling at the end of the Promise chain
.catch(()=>{
  console.log("Customer left")
})
// Output:
// "Our shop is closed" -- from reject
// "Customer left" -- from catch
```

##### 3.4. The `.finally` handler

The `finally` handler which works regardless of whether our promise was resolved or rejected.

```javascript
// Whether we serve no customers or 100 customers, our shop will close at the end of the day. Optional - Add `finally` at the very bottom of the chain
.finally(()=>{
  console.log("end of day")
})
```

#### 4. Avoid Mistakes

```js
doSomething()
	.then(function (result) {
		// If using a full function expression: return the promise
		return doSomethingElse(result);
	})
	// If using arrow functions: omit the braces and implicitly return the result
	.then((newResult) => doThirdThing(newResult))
	// Even if the previous chained promise returns a result, the next one
	// doesn't necessarily have to use it. You can pass a handler that doesn't
	// consume any result.
	.then((/* result ignored */) => doFourthThing())
	// Always end the promise chain with a catch handler to avoid any
	// unhandled rejections!
	.catch((error) => console.error(error));
```

#### 5. More Examples

> Fireship

##### 5.1. Example - cosume-promise

```js
import fetch from "node-fetch";
const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
promise
	.then((res) => res.json())
	.then((todo) => {
		throw new Error("uh oh");
		return todo;
	})
	.then((todo) => console.log("😛", todo.title)) // This line will be bypasses
	.catch((err) => console.error("😭", err));
console.log("🥪 Synchronous");
```

##### 5.2. Example - create-promise

```js
function makeRequest(location) {
	return new Promise((resolve, reject) => {
		console.log(`Making Request to ${location}`);
		if (location === "Google") {
			resolve("Google says Hi");
		} else {
			reject("We can only talk to Google");
		}
	});
}
```

##### 5.3. Example - non-blocking-promise

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
		return "🐷 billion loops done";
	});
};
log("🥪 Synchronous 1");
codeBlocker().then(log);
log("🥪 Synchronous 2");
```
