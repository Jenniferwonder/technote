---
Title: Callbacks
Type: D
DateStarted: 2022-12-09
DateModified: 2023-11-28
status: 
LeadTime: "1"
Cards-D: "0"
Page-D: "0"
EST: NaN
Reviewed: 1
Topic:
  - Function
  - Async
---
- Up:: [O-JS](../../Private/O-JS.md)
## Use of Callbacks

#### 1. 回调函数（同步回调与异步回调？）

> [带你聊聊 JavaScript 中的回调函数，区分下同步和异步回调-js 教程-PHP 中文网](https://www.php.cn/js-tutorial-486539.html))

#### 2. Why Use Callbacks?

> [[英字] JavaScript 异步编程（Async/Await、Promise、Callback）FreeCodeCamp](https://www.bilibili.com/video/BV1g44y1z7N3/?spm_id_from=333.788.recommend_more_video.4&vd_source=be278a4cfd00a5f72dcf153eaca79333)  
> [FreeCodeCamp-Blog](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)

When doing a complex task, we break that task down into smaller steps. To help us establish a relationship between these steps according to time (optional) and order, we use callbacks.

#### 3. ✅ 异步回调方法？

- Event Handler：将函数放入 EventListener (事件监听器) 中，事件处理器是异步回调函数的一种
- Timer Function：将函数放入 setTimeout 等 Timer Function 中

#### 4. ✅ 异步回调示例

##### 4.1. Stock - BakcEnd

```javascript
let stocks = {
	Fruits: ["strawberry", "grapes", "banana", "apple"],
	liquid: ["water", "ice"],
	holder: ["cone", "cup", "stick"],
	toppings: ["chocolate", "peanuts"],
};
```

##### 4.2. Kitchen - FrontEnd

```javascript
// 1st Function
let order = (fruit_name, call_production) => {
	setTimeout(function () {
		console.log(`${stocks.Fruits[fruit_name]} was selected`);
		// Order placed. Call production to start
		call_production();
	}, 2000);
};
// 2nd Function
let production = () => {
	setTimeout(() => {
		console.log("production has DateStarted");
		setTimeout(() => {
			console.log("The fruit has been chopped");
			setTimeout(() => {
				console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`);
				setTimeout(() => {
					console.log("start the machine");
					setTimeout(() => {
						console.log(`Ice cream placed on ${stocks.holder[1]}`);
						setTimeout(() => {
							console.log(`${stocks.toppings[0]} as toppings`);
							setTimeout(() => {
								console.log("serve Ice cream");
							}, 2000);
						}, 3000);
					}, 2000);
				}, 1000);
			}, 1000);
		}, 2000);
	}, 0000);
};
// Trigger 👇
order(0, production);
```

#### 5. 异步回调缺点？

- Callback Hell
- hard to handle errors:
	- often you have to handle errors at each level of the "pyramid", instead of having error handling only once at the top level

#### 6. ⛔ 同步函数示例

```js
function doStep1(init) {
	return init + 1;
}
function doStep2(init) {
	return init + 2;
}
function doStep3(init) {
	return init + 3;
}
function doOperation() {
	let result = 0;
	result = doStep1(result);
	result = doStep2(result);
	result = doStep3(result);
	console.log(`result: ${result}`);
}

doOperation();
```

#### 7. ⛔ 同步回调函数示例

```js
function doStep1(init, callback) {
	const result = init + 1;
	callback(result);
}
function doStep2(init, callback) {
	const result = init + 2;
	callback(result);
}
function doStep3(init, callback) {
	const result = init + 3;
	callback(result);
}
function doOperation() {
	doStep1(0, (result1) => {
		doStep2(result1, (result2) => {
			doStep3(result2, (result3) => {
				console.log(`result: ${result3}`);
			});
		});
	});
}
doOperation();
```
