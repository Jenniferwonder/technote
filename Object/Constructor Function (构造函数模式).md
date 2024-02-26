---
Title: Constructor Function & 'new' Operator (构造函数模式)
Topic:
  - Objects
Type: D
tags:
  - JavaScript
DateStarted: 2024-02-02
DateModified: 2024-02-02
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 2024-02-02
Reviewed: 2
Difficulty: 
status: 
Comment:
---
***
Basic
### 构造函数本质
Back:
- 任何函数 ([The `return` Statement](The%20`return`%20Statement.md)) 只要使用new操作符调用就是构造函数
🏷️: JS-Objects 
📌: JS::JS-Objects 
<!--ID: 1706843828751-->
****

***
Basic
### 将构造函数作为普通函数调用
Back:
- 在另一个对象作用域调用： [call; apply; bind](call;%20apply;%20bind.md)
	- `Person.call(o, "Kristen", 25, "Nurse");`
- 在 window 对象调用
<!--ID: 1706843828762-->
****

***
Basic
### Use Constructor Function to Create Object
Back:
```js
// Constructor Function
function Circle(radius) {
		this.radius = radius;
		this.draw = function () {
			console.log("draw");
		};
}
const another = new Circle(1);
// 如果不想传参数，那么构造函数后面的括号可加可不加。只要有new操作符，就可以调用相应的构造函数
let circle = new Circle;
```
<!--ID: 1706843828772-->
****

***
Basic
### Set Private Properties in Constructor Function
Back:
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
<!--ID: 1706843828782-->
****

***
Basic
### 构造函数有返回值的案例
Back:
```js
function Dog(name) {
	this.name = name;
	return { test: 1 };
}
let obj = new Dog("ming");
console.log(obj); // {test:1}
```
<!--ID: 1706843828793-->
****

### [Use 'new' Operator (使用 new 操作符)](Use%20'new'%20Operator%20(使用%20new%20操作符).md)

### [Object Types (instanceof 标识对象类型)](Object%20Types%20(instanceof%20标识对象类型).md)

***
Basic
### 构造函数的问题
Back:
- 其定义的方法会在每个实例上都创建一遍
	- 函数是对象，因此每次定义函数时，都会初始化一个对象
	- 不同实例上的函数虽然同名却不相等
- 解决方案：[Prototype Chain Inheritance](Prototype%20Chain%20Inheritance.md)
<!--ID: 1706843828803-->
****



