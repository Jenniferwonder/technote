---
draft: false
aliases:
  - Constructor Function-构造函数模式
title: Constructor Function-构造函数模式
topic:
  - Objects
type: D
tags:
  - JavaScript
DateStarted: 2024-02-02
DateModified: 2024-04-25
Datereviewed: 2024-02-02
reviewed: 2
difficulty: 
status: 
comment: 
linter-yaml-title-alias: Constructor Function-构造函数模式
category: Programming
---

# Constructor Function-构造函数模式

---

Basic

### 构造函数本质

Back:

- 任何函数 ([The `return` Statement](The-return-Statement)) 只要使用 new 操作符调用就是构造函数  
🏷️: JS-Objects  
📌: JS::JS-Objects
<!--ID: 1706843828751-->

---

---

Basic

### 将构造函数作为普通函数调用

Back:

- 在另一个对象作用域调用： [call; apply; bind](call-apply-bind)
  - `Person.call(o, Kristen, 25, Nurse);`
- 在 window 对象调用
<!--ID: 1706843828762-->

---

---

Basic

### Use Constructor Function to Create Object

Back:

```js
// Constructor Function
function Circle(radius) {
	this.radius = radius;
	this.draw = function () {
		console.log(draw);
	};
}
const another = new Circle(1);
// 如果不想传参数，那么构造函数后面的括号可加可不加。只要有new操作符，就可以调用相应的构造函数
let circle = new Circle();
```

<!--ID: 1706843828772-->

---

---

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
		console.log(draw);
	};
}
const circle = new Circle(10);
circle.draw();
```

<!--ID: 1706843828782-->

---

---

Basic

### 构造函数有返回值的案例

Back:

```js
function Dog(name) {
	this.name = name;
	return { test: 1 };
}
let obj = new Dog(ming);
console.log(obj); // {test:1}
```

<!--ID: 1706843828793-->

---

### [Use 'new' Operator (使用 new 操作符)](../Use-'new'-Operator-使用-new-操作符)

### [Object Types (instanceof 标识对象类型)](../Object-Types-instanceof-标识对象类型)

---

Basic

### 构造函数的问题

Back:

- 其定义的方法会在每个实例上都创建一遍
  - 函数是对象，因此每次定义函数时，都会初始化一个对象
  - 不同实例上的函数虽然同名却不相等
- 解决方案：[Prototype Chain Inheritance](prototype-chain-inheritance-原型链继承)
<!--ID: 1706843828803-->

---

### 盗用构造函数继承

- 也称作“对象伪装”或“经典继承”
- 在子类构造函数中调用父类构造函数
  - 可以使用`apply()`和`call()`方法以新创建的对象为上下文执行构造函数
    - `SuperType.call(this, Nicholas);`
      - 实际上会在 SubType 的实例上定义`name`属性
  - 用 .call()和.apply() 将父类构造函数引入子类函数（在子类函数中做了父类函数的自执行（复 制））

#### 特点：

1、只继承了父类构造函数的属性，没有继承父类原型的属性。  
2、解决了原型链继承缺点 1、2、3。  
3、可以继承多个构造函数属性（call 多个）。  
4、在子实例中可向父实例传参。

- 可以在子类构造函数中向父类构造函数传参

#### 盗用构造函数的问题

1、只能继承父类构造函数的属性，子类也不能访问父类原型上定义的方法  
2、无法实现构造函数的复用。（每次用每次都要重新调用）  
3、每个新实例都有父类构造函数的副本，臃肿。
