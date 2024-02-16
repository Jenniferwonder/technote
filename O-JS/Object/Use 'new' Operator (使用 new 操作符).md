---
Title: Use 'new' Operator (使用 new 操作符)
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
Reviewed: 1
Difficulty: 
status: 
Comment:
---
***
Basic
### 'new' 操作符实现机制
Back:
1. 内存中创建一个新对象
2. 该对象内部的原型特性 (`__proto__`) 被赋值为构造函数的原型属性 (`prototype`)  
3. 调用该构造函数，构造函数内部的 this 指向新生成的对象  
4. 执行构造函数内部代码，给新对象添加属性
5. 判断构造函数是否有返回值，如果有返回值且返回值是一个对象或一个方法，则返回该值；否则返回新生成的对象
📌: JS::JS-Objects 
🏷️: JS-Objects 
<!--ID: 1706844019913-->
****

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