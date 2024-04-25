---
title: Promise Chaining-链式调用
topic: 
type: D
tags:
  - JavaScript
category: Programming
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - Promise Chaining-链式调用
draft: false
DateStarted: 2024-04-25
DateModified: 2024-04-25
linter-yaml-title-alias: Promise Chaining-链式调用
---
# Promise Chaining-链式调用
### `Promise.prototype.then()`

接收两个回调函数作为参数，均为可选参数

```js
Promise.resolve().then(onFulfilled()=>{}, onReject()={})
```

### `Promise.prototype.catch()`

#### 错误捕获条件

❌ 在`then`或`catch`中 `return` 一个 `new Error` 对象不会被捕获：  
`return new Error(Error!)`  
✅ 必须使用以下任一一种语法：

```js
return Promise.reject(new Error(error!!!));
throw new Error(error!!!);
```

#### 级联错误

- 如果在  `catch()`  内部引发错误，则可以附加第二个  `catch()`来处理，依此类推

```js
new Promise((resolve, reject) => {
	throw new Error(错误);
})
	.catch((err) => {
		throw new Error(错误);
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
// import fetch from node-fetch;
const promise = fetch(https://jsonplaceholder.typicode.com/todos/1);
promise
	.then((res) => res.json())
	.then((todo) => {
		throw new Error(uh oh);
		return todo;
	})
	.then((todo) => console.log(😛, todo.title)) // This line will be bypasses
	.catch((err) => console.error(😭, err));
console.log(🥪 Synchronous);
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
			reject(console.log(Our shop is closed));
		}
	});
};
```

##### Promise chaining

```js
// step 1
order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
	// step 2
	.then(() => order(0000, () => console.log(production has started)))
	// step 3
	.then(() => {
		return order(2000, () => console.log(Fruit has been chopped));
	})
	// step 4
	.then(() => {
		return order(1000, () =>
			console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
		);
	})
	// step 5
	.then(() => {
		return order(1000, () => console.log(start the machine));
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
		return order(2000, () => console.log(Serve Ice Cream));
	});
```

##### Error handling

```javascript
let is_shop_open = false;
// Add Error handling at the end of the Promise chain
.catch(()=>{
  console.log(Customer left)
})
// Output:
// Our shop is closed -- from reject
// Customer left -- from catch
```

##### The `.finally` handler

The `finally` handler which works regardless of whether our promise was resolved or rejected.

```javascript
// Whether we serve no customers or 100 customers, our shop will close at the end of the day. Optional - Add `finally` at the very bottom of the chain
.finally(()=>{
  console.log(end of day)
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