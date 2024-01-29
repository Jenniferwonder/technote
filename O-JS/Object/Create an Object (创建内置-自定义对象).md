---
Title: Create an Object (创建内置/ 自定义对象)
Topic:
  - Objects
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-01-29
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 2024-01-29
Reviewed: 1
Difficulty: Good
status: 
Comment:
---
## 创建一个新的内置对象类型？
?
- let o = new Object ();
- new Array(), new String(), new Boolean(), new Error()...

## 创建自定义对象？
?
### ⛔Object literal (对象字面量) syntax: `{ }`
```js
// Object literal syntax
const circle = {
		radius: 1,
		location: {
				x: 1,
				y: 1,
		},
		// ES6 enhanced object literals: Create Function as *methods* inside an object 🟨
		draw: function () {
				console.log("draw");
		},
};
circle.draw();
```
### ⛔Factory Function (工厂函数)
```js
// Factory Function
function createCircle(radius) {
		return {
				radius,
				draw: function () {
						console.log("draw");
				},
		};
}
const circle = createCircle(1);
```
### ✅Constructor Function (构造器函数)
```js
// Constructor Function
function Circle(radius) {
		this.radius = radius;
		this.draw = function () {
			console.log("draw");
		};
}
const another = new Circle(1);
```

## Set Private Properties in Object?
?
```js
function Circle(radius) {
	this.radius = radius;
	// Use 'let' to convert properties into variables only available inside this scope
	let defaultLocation = { x: 0, y: 0 };
	let computeLocation = function (factor) {};
	// Closure enables the parent function variable is accessble to its child without 'this' keyword
	this.draw = function () {
			computeLoaction(0.1);
			console.log("draw");
	};
}
const circle = new Circle(10);
circle.draw();
```

## ❓new 一个对象，到底发生什么？
1）创建一个对象，该对象的原型指向构造函数的原型  
2）调用该构造函数，构造函数的 this 指向新生成的对象  
3）判断构造函数是否有返回值，如果有返回值且返回值是一个对象或一个方法，则返回该值；否则返回新生成的对象

## ❓构造函数有返回值的案例
```js
function Dog(name) {
	this.name = name;
	return { test: 1 };
}
let obj = new Dog("ming");
console.log(obj); // {test:1}
```

## ❓手写 new
```javascript
function selfNew(fn, ...args) {
	// 创建一个instance对象，该对象的原型是fn.prototype
	let instance = Object.create(fn.prototype);
	// 调用构造函数，使用apply，将this指向新生成的对象
	let res = fn.apply(instance, args);
	// 如果fn函数有返回值，并且返回值是一个对象或方法，则返回该对象，否则返回新生成的instance对象
	return typeof res === "object" || typeof res === "function" ? res : instance;
}
```
