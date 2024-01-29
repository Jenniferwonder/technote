---
Title: Inheritance Types
Topic:
  - OOP
tags:
  - JavaScript
Type: D
DateStarted: 2022-12-05
DateDo: 
DateDone: 
DateDue: 
DateModified: 2024-01-29
DateReviewed: 2024-01-29
status:
  - ToCapture
Reviewed: 1
Difficulty: 
Comment:
---
## Inheritance Types
### 构造函数继承（经典继承）  
- 盗用构造函数-Constructor Stealing
  - 传递参数
  - 盗用构造函数的问题
### 原型式继承-Prototypal Inheritance
- [[Object Prototype (Prototype Chain)]]
- [[Class (ES6 类)]]
### 组合继承-Combination Inheritance 
### 寄生式继承-Parasitic Inheritance
### 寄生式组合继承-Parasitic Combination Inheritance
优势：借用父类的构造函数，在不需要生成父类实例的情况下，继承了父类原型上的属性和方法

```javascript
// 精简版
class Child {
	constructor() {
		// 调用父类的构造函数
		Parent.call(this);
		// 利用Object.create生成一个对象，新生成对象的原型是父类的原型，并将该对象作为子类构造函数的原型，继承了父类原型上的属性和方法
		Child.prototype = Object.create(Parent.prototype);
		// 原型对象的constructor指向子类的构造函数
		Child.prototype.constructor = Child;
	}
}

// 通用版
function Parent(name) {
	this.name = name;
}
Parent.prototype.getName = function () {
	console.log(this.name);
};
function Child(name, age) {
	// 调用父类的构造函数
	Parent.call(this, name);
	this.age = age;
}
function createObj(o) {
	// 目的是为了继承父类原型上的属性和方法，在不需要实例化父类构造函数的情况下，避免生成父类的实例，如new Parent()
	function F() {}
	F.prototype = o;
	// 创建一个空对象，该对象原型指向父类的原型对象
	return new F();
}

// 等同于 Child.prototype = Object.create(Parent.prototype)
Child.prototype = createObj(Parent.prototype);
Child.prototype.constructor = Child;

let child = new Child("tom", 12);
child.getName(); // tom
```

## Reference
- [Object-oriented programming - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [Object-oriented Programming in JavaScript: Made Super Simple | Mosh - YouTube](https://www.youtube.com/watch?v=PFmuCDHHpwk)
