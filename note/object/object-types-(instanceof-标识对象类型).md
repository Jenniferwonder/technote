---
title: Object Types (instanceof 标识对象类型)
Topic:
  - Objects
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
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

---

Basic

### 判断对象是否某该构造函数的实例（标识对象类型）

Back:

- ❌`constructor` 属性
- ✅`instanceof` - To identify what type of object it is (更常用) - ![](./z-Assets/C04VariablesScopeMemory-6-x62-y394.png)
🏷️: JS-Objects
📌: JS::JS-Objects
<!--ID: 1706844449149-->

---

### `instanceof` 特殊示例

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
