---
draft: false
aliases:
  - Object Types (instanceof)-标识对象类型
title: Object Types (instanceof)-标识对象类型
topic:
  - Objects
type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-04-25
Datereviewed: 2024-02-02
reviewed: 2
difficulty: 
status: 
comment: 
linter-yaml-title-alias: Object Types (instanceof)-标识对象类型
category: Programming
---

# Object Types (instanceof)-标识对象类型

---

Basic

### 判断对象是否某该构造函数的实例（标识对象类型）

Back:

- ❌`constructor` 属性
- ✅`instanceof` - To identify what type of object it is (更常用) - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C04VariablesScopeMemory-6-x62-y394.png)  
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
