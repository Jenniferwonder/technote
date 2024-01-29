---
Title: Object Types (instanceof)
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
Reviewed: 
Difficulty: 
status: 
Comment:
---
## Object Types (`instanceof`)
- 常用来判断对象是否为该构造函数的实例
- what type of object it is
	- ![[C04VariablesScopeMemory-6-x62-y394.png|425]]
#### 特殊示例

```javascript
console.log(Object instanceof Object); //true
console.log(Function instanceof Function); //true
console.log(Function instanceof Object); //true
console.log(function () {} instanceof Function); //true
```

#### 手写 instanceof 方法

```javascript
function instanceOf(obj, fn) {
	let proto = obj.__proto__;
	if (proto) {
		if (proto === fn.prototype) {
			return true;
		} else {
			return instanceOf(proto, fn);
		}
	} else {
		return false;
	}
}
// 测试
function Dog() {}
let dog = new Dog();
console.log(instanceOf(dog, Dog), instanceOf(dog, Object)); // true true
```