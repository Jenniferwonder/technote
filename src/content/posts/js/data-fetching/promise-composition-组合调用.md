---
title: Promise Composition-组合调用
topic: 
type: 
tags:
  - JavaScript
category: Programming
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - Promise Composition-组合调用
draft: false
DateStarted: 2024-04-25
DateModified: 2024-04-25
linter-yaml-title-alias: Promise Composition-组合调用
---
# Promise Composition-组合调用

### `Promise.all()`

- 发起多个并发请求，然后在所有 promise 都被解决后执行一些操作
- 适合彼此相互依赖或者在其中任何一个`reject`时立即结束

```js
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, foo);
});
Promise.all([promise1, promise2, promise3]).then((values) => {
	console.log(values);
});
// expected output: Array [3, 42, foo]
```

### `Promise.race()`

- 传入多个 promise 实例，谁跑的快，就以谁的结果执行回调

```js
const first = new Promise((resolve, reject) => {
	setTimeout(resolve, 500, 第一个);
});
const second = new Promise((resolve, reject) => {
	setTimeout(resolve, 100, 第二个);
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
			resolve(请求超时);
		}, time); // 为了验证方法，可以把时间设小点
	});
	return result;
}
Promise.race([timeOut(200), fetch(https://api.github.com/users/ruanyf)]).then(
	(res) => {
		console.log(res);
	}
);
```

2、如果图片等资源有多个存放路径，但是不确定哪个路径的资源更快，可以用该方法同时请求多个路径，哪个路径的资源最先拿到，使用哪个资源

3、如果指定时间内没有获得结果，就将 Promise 的状态变为 `reject`，否则变为`resolve`

```js
const p = Promise.race([
	fetch(/resource-that-may-take-a-while),
	new Promise(function (resolve, reject) {
		setTimeout(() => reject(new Error(request timeout)), 5000);
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
	console.log(所有请求都成功。);
} catch {
	console.log(至少一个请求失败，其他请求可能还没结束。);
}
```

#### 返回值

- 返回一个在所有给定的 promise 都已经`fulfilled`或`rejected`后的 promise，并带有一个**对象数组**，每个对象表示对应的 promise 结果
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-Promise.allSettled.png)
- 每个对象都有`status`属性，该属性的值只可能是字符串`fulfilled`或字符串`rejected`。
  - `fulfilled`时，对象有`value`属性，
  - `rejected`时有`reason`属性，对应两种状态的返回值。

```js
const promises = [fetch(index.html), fetch(https://does-not-exist/)];
const results = await Promise.allSettled(promises);
// 过滤出成功的请求
const successfulPromises = results.filter((p) => p.status === fulfilled);
// 过滤出失败的请求，并输出原因
const errors = results
	.filter((p) => p.status === rejected)
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
			console.error(AggregateError occurred:);
			console.log(err.errors);
			err.errors.forEach((err, index) => {
				console.error(`Error ${index + 1}:`, err);
			});
		} else {
			console.error(Other error occurred:, err);
		}
	});
```