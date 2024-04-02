---
Type: D
DateDo:
DateDone:
DateDue:
title: Promise
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

# Promise

## Reference

- ⭐[通俗易懂的 Promise 知识点总结，检验一下你是否真的完全掌握了 Promise？ - 掘金](https://juejin.cn/post/7020335414980378655)
  - [Promise - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
  - [Using Promises - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [你好，JavaScript 异步编程---- 理解 JavaScript 异步的美妙](https://juejin.cn/post/6844903648162480142 "https://juejin.cn/post/6844903648162480142")
- [Promise 不会？？看这里！！！史上最通俗易懂的 Promise！！！](https://juejin.cn/post/6844903607968481287 "https://juejin.cn/post/6844903607968481287")
- [当 async/await 遇上 forEach](https://link.juejin.cn?target=https%3A%2F%2Fobjcer.com%2F2017%2F10%2F12%2Fasync-await-with-forEach%2F "https://objcer.com/2017/10/12/async-await-with-forEach/")
- [Promise 必知必会（十道题）](https://juejin.cn/post/6844903509934997511 "https://juejin.cn/post/6844903509934997511")

### Write a Promise

- ⭐[Promises/A+](https://promisesaplus.com/)
  - 🛠️[Conformant Promises/A+ Implementations](https://promisesaplus.com/implementations)
  - 🛠️[Promises/A+ · GitHub](https://github.com/promises-aplus)
- 🚀[手写 Promise：实现符合 Promises/A+规范的 Promise - 掘金](https://juejin.cn/post/7274887531271012388#heading-13)
- 🚀[手写 Promise 核心代码 - JavaScript 前端 Web 工程师\_哔哩哔哩\_bilibili](https://www.bilibili.com/video/BV1RR4y1p7my/?vd_source=be278a4cfd00a5f72dcf153eaca79333)
  - [手把手一行一行代码教你“手写 Promise“，完美通过 Promises/A+ 官方 872 个测试用例 - 掘金](https://juejin.cn/post/7043758954496655397#heading-14)
- [Promise 实现原理（附源码）](https://juejin.cn/post/6844903665686282253 "https://juejin.cn/post/6844903665686282253")
- [100 行代码实现 Promises/A+ 规范](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2FqdJ0Xd8zTgtetFdlJL3P1g "https://mp.weixin.qq.com/s/qdJ0Xd8zTgtetFdlJL3P1g")
- [一起学习造轮子（一）：从零开始写一个符合 Promises/A+规范的 promise](https://juejin.cn/post/6844903617619558408#heading-34 "https://juejin.cn/post/6844903617619558408#heading-34")
- [BAT 前端经典面试问题：史上最最最详细的手写 Promise 教程](https://juejin.cn/post/6844903625769091079#heading-9 "https://juejin.cn/post/6844903625769091079#heading-9")

## What is a Promise?

- A promise is a returned **object** to which you attach callbacks, instead of passing callbacks into a function.
- It represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
- Promise 是一种处理异步代码（而不会陷入回调地狱）的方式。

## Promise State & Result

#### 3 种状态 (PromiseState)

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled** (resolved): meaning that the operation was completed successfully.
- **rejected**: meaning that the operation failed
- ![](./z-Assets/z-PromiseState-1.png) ![](./z-Assets/z-PromiseState.png)

#### 执行特点

- Promise 只以`第一次为准`，第一次成功就`永久`为`fulfilled`，第一次失败就永远状态为`rejected`
- Promise 中有 `throw` 的话，就相当于执行了`reject`

```js
let p1 = new Promise((resolve, reject) => {
	resolve("成功");
	reject("失败");
});
console.log("p1", p1);

let p2 = new Promise((resolve, reject) => {
	reject("失败");
	resolve("成功");
});
console.log("p2", p2);

let p3 = new Promise((resolve, reject) => {
	throw "报错";
});
console.log("p3", p3);
```

#### Pending State 特点

- Promise 里没有执行`resolve`、`reject`以及`throw`的话，这个 promise 的状态也是`pending`
- `pending`状态下的 promise 不会执行回调函数`then()`

```js
let myPromise1 = new Promise(() => {});
console.log("myPromise1 :>> ", myPromise1);
let myPromise2 = new Promise((resolve, reject) => {
	let a = 1;
	for (let index = 0; index < 5; index++) {
		a++;
	}
});
console.log("myPromise2 :>> ", myPromise2);
myPromise2.then(() => {
	console.log("myPromise2执行了then"); // 在 Promise pending 状态下不会执行
});
```

## Create a Promise

### `new Promise()`

#### 参数要求

- 使用 `new Promise()` 必须输入一个执行函数，否则会报错

```js
let myPromise0 = new Promise();
console.log("myPromise0 :>> ", myPromise0); // 报错：TypeError: Promise resolver undefined
```

##### Case

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
Promise.resolve("foo");
// 等价于
new Promise((resolve) => resolve("foo"));
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
		return "🐷 billion loops done";
	});
};
log("🥪 Synchronous 1");
codeBlocker().then(log);
log("🥪 Synchronous 2");
```

### `Promise.reject()`

- `Promise.reject()`方法的参数，会原封不动地作为`reject`的理由，变成后续方法的参数

```js
const thenable = {
	then(resolve, reject) {
		reject("出错了");
	},
};
Promise.reject(thenable).catch((e) => {
	console.log(e === thenable);
});
// true
```

## Consume Promise

### `Promise.prototype.then()`

接收两个回调函数作为参数，均为可选参数

```js
Promise.resolve().then(onFulfilled()=>{}, onReject()={})
```

### `Promise.prototype.catch()`

#### 错误捕获条件

❌ 在`then`或`catch`中 `return` 一个 `new Error` 对象不会被捕获：
`return new Error("Error!")`
✅ 必须使用以下任一一种语法：

```js
return Promise.reject(new Error("error!!!"));
throw new Error("error!!!");
```

#### 级联错误

- 如果在  `catch()`  内部引发错误，则可以附加第二个  `catch()`来处理，依此类推

```js
new Promise((resolve, reject) => {
	throw new Error("错误");
})
	.catch((err) => {
		throw new Error("错误");
	})
	.catch((err) => {
		console.error(err);
	});
```

### `Promise.prototype.finally()`

- 用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的
  - 避免了同样的语句需要在`then()`和`catch()`中各写一次的情况。

### Example (Consume Promise )

#### Example (Promise chain)

```js
// import fetch from "node-fetch";
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

#### Example (Ice-cream Shop)

- [[英字] JavaScript 异步编程（Async/Await、Promise、Callback）FreeCodeCamp](https://www.bilibili.com/video/BV1g44y1z7N3/?spm_id_from=333.788.recommend_more_video.4&vd_source=be278a4cfd00a5f72dcf153eaca79333)
- [FreeCodeCamp-Blog](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)

##### Relationship between time and work

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

##### Promise chaining

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

##### Error handling

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

##### The `.finally` handler

The `finally` handler which works regardless of whether our promise was resolved or rejected.

```javascript
// Whether we serve no customers or 100 customers, our shop will close at the end of the day. Optional - Add `finally` at the very bottom of the chain
.finally(()=>{
  console.log("end of day")
})
```

#### Avoid Mistakes

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

## More Promise Method (更多 Promise 对象方法)

### `Promise.all()`

- 发起多个并发请求，然后在所有 promise 都被解决后执行一些操作
- 适合彼此相互依赖或者在其中任何一个`reject`时立即结束

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "foo");
});
Promise.all([promise1, promise2, promise3]).then((values) => {
	console.log(values);
});
// expected output: Array [3, 42, "foo"]
```

### `Promise.race()`

- 传入多个 promise 实例，谁跑的快，就以谁的结果执行回调

```js
const first = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, "第一个");
});
const second = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, "第二个");
});
Promise.race([first, second]).then((result) => {
	console.log(result); // 第二个
});
```

#### Use Case

1、把异步操作和定时器放到一起，如果定时器先触发，认为超时，告知用户

```js
function timeOut(time) {
	let result = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("请求超时");
		}, time); // 为了验证方法，可以把时间设小点
	});
	return result;
}
Promise.race([timeOut(200), fetch("https://api.github.com/users/ruanyf")]).then(
	(res) => {
		console.log(res);
	}
);
```

2、如果图片等资源有多个存放路径，但是不确定哪个路径的资源更快，可以用该方法同时请求多个路径，哪个路径的资源最先拿到，使用哪个资源

3、如果指定时间内没有获得结果，就将 Promise 的状态变为 `reject`，否则变为`resolve`

```js
const p = Promise.race([
	fetch("/resource-that-may-take-a-while"),
	new Promise(function (resolve, reject) {
		setTimeout(() => reject(new Error("request timeout")), 5000);
	}),
]);
p.then(console.log).catch(console.error);
```

### `Promise.allSettled()` (ES2020)

- 由 ES2020 引入
- 功能
  - 有多个彼此不依赖的异步任务成功完成时，或者您总是想知道每个 promise 的结果时，通常使用
  - `Promise.all()`无法确定所有请求都结束。想要达到这个目的，写起来很麻烦，有了`Promise.allSettled()`，这就很容易了

```js
const urls = [
	/* ... */
];
const requests = urls.map((x) => fetch(x));
try {
	await Promise.all(requests);
	console.log("所有请求都成功。");
} catch {
	console.log("至少一个请求失败，其他请求可能还没结束。");
}
```

#### 返回值

- 返回一个在所有给定的 promise 都已经`fulfilled`或`rejected`后的 promise，并带有一个**对象数组**，每个对象表示对应的 promise 结果
  - ![](./z-Assets/z-Promise.allSettled.png)
- 每个对象都有`status`属性，该属性的值只可能是字符串`fulfilled`或字符串`rejected`。
  - `fulfilled`时，对象有`value`属性，
  - `rejected`时有`reason`属性，对应两种状态的返回值。

```js
const promises = [fetch("index.html"), fetch("https://does-not-exist/")];
const results = await Promise.allSettled(promises);
// 过滤出成功的请求
const successfulPromises = results.filter((p) => p.status === "fulfilled");
// 过滤出失败的请求，并输出原因
const errors = results
	.filter((p) => p.status === "rejected")
	.map((p) => p.reason);
```

### `Promise.any()` (ES2020)

- 输入
  - 一个 Promise 数组
- 返回值
  - 一个新的 Promise 对象
    - 该 Promise 对象在传入的 Promise 数组中的任何一个 Promise 解决时就会被解决
    - 若所有的 Promise 都被拒绝，则返回的 Promise 会被拒绝，并且它的拒因是一个 `AggregateError` 对象实例，包含了所有被拒绝的 Promise 的原因 (可通过 `.errors` 属性读取)
- 返回值处理

```js
Promise.any([p10, p11])
	.then((res) => console.log(res))
	.catch((err) => {
		if (err instanceof AggregateError) {
			console.error("AggregateError occurred:");
			console.log(err.errors);
			err.errors.forEach((err, index) => {
				console.error(`Error ${index + 1}:`, err);
			});
		} else {
			console.error("Other error occurred:", err);
		}
	});
```
