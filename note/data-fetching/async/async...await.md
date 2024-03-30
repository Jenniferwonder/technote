---
Type: D
DateDo:
DateDone:
DateDue:
title: Async...await
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

## Async... await (Syntactical Sugar)

> [[英字] JavaScript 异步编程（Async/Await、Promise、Callback）FreeCodeCamp](https://www.bilibili.com/video/BV1g44y1z7N3/?spm_id_from=333.788.recommend_more_video.4&vd_source=be278a4cfd00a5f72dcf153eaca79333)  
> [FreeCodeCamp-Blog](https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/)

Better way to write **promises** and it helps us keep our code simple and clean

#### 1. Before async/await

```javascript
function order() {
	return new Promise((resolve, reject) => {
		// Write code here
	});
}
```

#### 2. With async/await

```javascript
//👇 the magical keyword
async function order() {
	// Write code here
}
```

#### 3. How to use try/catch?

##### 3.1. Promises in JS -> resolve or reject

```javascript
function kitchen() {
	return new Promise((resolve, reject) => {
		if (true) {
			resolve("promise is fulfilled");
		} else {
			reject("error caught here");
		}
	});
}
kitchen() // run the code
	.then() // next step
	.then() // next step
	.catch() // error caught here
	.finally(); // end of the promise [optional]
```

##### 3.2. Async / Await in JS -> try, catch

```javascript
//👇 Magical keyword
async function kitchen() {
	try {
		// Let's create a fake problem
		await abc;
	} catch (error) {
		console.log("abc does not exist", error);
	} finally {
		console.log("Runs code anyways");
	}
}
kitchen(); // run the code
```

#### 4. How to use `await` Keyword?

The keyword `await` makes JavaScript **wait** until a promise settles and returns its result.

##### 4.1. Promise - choice

```javascript
function toppings_choice() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("which topping would you love?"));
		}, 3000);
	});
}
```

##### 4.2. Async/await - kitchen & other tasks

```javascript
async function kitchen() {
	console.log("A");
	console.log("B");
	console.log("C");
	await toppings_choice(); //We are literally going outside our kitchen to ask our customer, "what is your topping choice?"

	// In the mean time, other things outside the kitchen still get done.

	// Once, we get their topping choice, we enter the kitchen and finish the job.
	console.log("D");
	console.log("E");
}
// Trigger the function
kitchen();
// Other Tasks
console.log("doing the dishes");
console.log("cleaning the tables");
console.log("taking orders");
```

##### 4.3. Output results

![](Pasted-image-20221209200813.png)

#### 5. Async/await Example (Icecream)

##### 5.1. Create Promise -- time function

```javascript
// First, open our shop
let is_shop_open = true;

// Create a time function, which return a Promise
function time(ms) {
	return new Promise((resolve, reject) => {
		if (is_shop_open) {
			setTimeout(resolve, ms);
		} else {
			reject(console.log("Shop is closed"));
		}
	});
}
```

##### 5.2. Create Async Function -- kitchen

```javascript
async function kitchen(){
	try{
		await time(2000)
		console.log(`${stocks.Fruits[0]} was selected`)
		await time(0000)
		console.log("production has started")
		await time(2000)
		console.log("fruit has been chopped")
		await time(1000)
		console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)
		await time(1000)
		console.log("start the machine")
		await time(2000)
		console.log(`ice cream placed on ${stocks.holder[1]}`)
		await time(3000)
		console.log(`${stocks.toppings[0]} as toppings`)
		await time(2000)
		console.log("Serve Ice Cream")
	}
	catch(error){
		 console.log("customer left")
	}
	finally {
		console.log("Day ended, shop closed")
	}
}
// Trigger
console.log("S1");
kitchen();
console.log("S2");
}
```

#### 6. More Examples

##### 6.1. Example - async-await

```js
// Basic
export const getFruit = async (name) => {
	const fruits = {
		pineapple: "🍍",
		peach: "🍑",
		strawberry: "🍓",
	};
	return fruits[name];
};
getFruit("peach").then(console.log);

// Async + Await
export const makeSmoothie = async () => {
	const a = await getFruit("pineapple");
	const b = await getFruit("strawberry");
	return [a, b];
};
const makeSmoothie2 = () => {
	let a;
	return getFruit("pineapple")
		.then((v) => {
			a = v;
			return getFruit("strawberry");
		})
		.then((v) => [a, v]);
};
```

##### 6.2. Example - concurrency

```js
import { getFruit } from "./3.1. Example - async-await";
const makeSmoothieFaster = async () => {
	const a = getFruit("pineapple");
	const b = getFruit("strawberry");
	const smoothie = await Promise.all([a, b]);
	return smoothie;
};

const fruitRace = async () => {
	const a = getFruit("pineapple");
	const b = getFruit("strawberry");
	const winner = await Promise.race([a, b]);
	return winner;
};
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
// fruitRace().then(log)
```

##### 6.3. Example - error-handling

```js
import { getFruit } from "./3.1. Example - async-await";
const badSmoothie = async () => {
	try {
		const a = getFruit("pineapple");
		const b = getFruit("strawberry");
		const smoothie = await Promise.all([a, b]);
		throw "broken!";
		return smoothie;
	} catch (err) {
		console.log(err);
		// return `😬 We are going to be fine...`
		throw `💩 It's broken!`;
	}
};
```

##### 6.4. Example - await in loop and conditionals

```js
import { getFruit } from "./3.1. Example - async-await";
const fruits = ["peach", "pineapple", "strawberry"];
// Use for loop
const fruitLoop = async () => {
	for (const f of fruits) {
		const emoji = await getFruit(f);
		log(emoji);
	}
};
// Use for loop, to run concurrently
const smoothie = fruits.map((f) => getFruit(f));
const fruitLoop = async () => {
	for await (const emoji of smoothie) {
		log(emoji);
	}
};
// Use map method, to run concurrently
const fruitloop = fruits.map(async (v) => {
	const emoji = await getFruit(f);
	log(emoji);
	return emoji;
});

const fruitInspection = async () => {
	if ((await getFruit("peach")) === "🍑") {
		console.log("looks peachy!");
	}
};

import fetch from "node-fetch";
const getTodo = async () => {
	const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
	const { title, userId, body } = await res.json();
	console.log(title, userId, body);
};
```
