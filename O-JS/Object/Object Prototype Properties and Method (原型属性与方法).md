---
Title: Object Prototype Properties and Method
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
  - ToCapture
Comment:
---
### proto、prototype、constructor 属性
- js 中对象分为两种，普通对象和函数对象  
- `constructor`
	- Every Object has a property called `constructor`, referring to the *Constructor Function* that is used to create that object
	- 对象所独有，它是一个对象指向一个函数，这个函数就是该对象的构造函数  
	- `构造函数.prototype.constructor === 该构造函数本身`  
- `__proto__`
	- 是对象独有的。
	- 一个对象的`__proto__`指向其构造函数的`prototype`  
		- `函数创建的对象.__proto__ === 该函数.prototype`  
- `prototype`
	- 函数独有的，它的作用是包含可以给特定类型的所有实例提供共享的属性和方法；
	- 在 JS 中，函数也是对象，所以函数也拥有`__proto__`和 `constructor`属性  
- 特殊的`Object`、`Function`

```javascript
console.log(Function.prototype === Function.__proto__); // true
console.log(Object.__proto__ === Function.prototype); // true
console.log(Function.prototype.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true
```

### Access Object Prototype
- [`Object.getPrototypeOf()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf)
  - Property shadowing:
	- when an object's property name is the same as the property name of its prototype

### Identify Object Prototype
- `isPrototypeof(object)`

### Set a Object Prototype
- [[Create an Object (创建内置-自定义对象)]]
#### 1. `Object.create()`
- creates a new object and allows you to specify an object that will be used as the new object's prototype
```js
const personPrototype = {
	greet() {
		console.log("hello!");
	},
};

const carl = Object.create(personPrototype);
carl.greet(); // hello!
```

#### 2. `Object.assign()` - Use Constructors
- It's common to see this pattern, in which **methods** are defined on the prototype, but data **properties** are defined in the constructor.

```js
const personPrototype = {
	greet() {
		console.log(`hello, my name is ${this.name}!`);
	},
};
function Person(name) {
	this.name = name;
}
Object.assign(Person.prototype, personPrototype);
// or
// Person.prototype.greet = personPrototype.greet;
```