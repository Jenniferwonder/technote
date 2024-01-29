---
Title: Class (ES6 类)
tags:
  - JavaScript
Topic:
  - OOP
Difficulty: 
Comment: 
Type: D
DateDo: 
DateDone: 
DateDue: 
DateStarted: 2022-12-02
DateModified: 2024-01-29
DateReviewed: 2024-01-29
status: 
Reviewed: 1
---
## Reference
- [Classes - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)  
- [Classes in JavaScript - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript)

## [Classes and constructors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#classes_and_constructors)
  - a syntac sugar
  - not a new way of combining objects
  - just a way to make it easier to set up a prototype chain

```js
class Person {
	name;
	constructor(name) {
		this.name = name;
	}
	introduceSelf() {
		console.log(`Hi! I'm ${this.name}`);
	}
}
```

### [Omitting constructors](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#omitting_constructors)

- If you don't need to do any special initialization, you can omit the constructor, and a default constructor will be generated for you.

## [Inheritance](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#inheritance)

```js
class Professor extends Person {
	teaches;
	constructor(name, teaches) {
		super(name);
		this.teaches = teaches;
	}
	introduceSelf() {
		console.log(
			`My name is ${this.name}, and I will be your ${this.teaches} professor.`
		);
	}
	grade(paper) {
		const grade = Math.floor(Math.random() * (5 - 1) + 1);
		console.log(grade);
	}
}
```

## [Encapsulation](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Classes_in_JavaScript#encapsulation)

```js
class Student extends Person {
	#year;
	constructor(name, year) {
		super(name);
		this.#year = year;
	}
	introduceSelf() {
		console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
	}
	canStudyArchery() {
		return this.#year > 1;
	}
}
```

- 类定义-Class Definition Basics
  - 类的构成-Class Composition
- 类构造函数--The Class Constructor
  - 实例化-Instantiation
  - 把类当成特殊函数59-5fad)
- 实例、原型和类成员-Instance, Prototype, and Class Members
  - 实例成员-Instance Member
  - 原型方法与访问器-Prototype Methods and Accessors
  - 静态类方法-Static Class Methods and Accessors
  - 非函数原型和类成员-Non-Function Prototype and Class Members
  - 迭代器与生成器方法
- 继承-Inheritance
  - 继承基础
  - 构造函数、HomeObject 和 super()
  - 抽象基类-Abstract Base Classes
  - 继承内置类型-Inheriting from Built-in Types
  - 类混入-Class Mixins
