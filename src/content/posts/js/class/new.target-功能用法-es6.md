---
draft: false
title: new.target-功能用法-es6
topic:
  - Function
type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
DateModified: 2024-04-25
Datereviewed: 2024-02-16
reviewed: 1
difficulty: 
status: 
comment: 
category: Programming
---

---

Basic

### `new.target` 功能用法 (ES6)

Back:

- 检测函数是否使用 new 关键字调用
- 如果是使用 new 关键字调用的，则`new.target`将引用被调用的构造函数
- 如果函数是正常调用的，值为 `undefined`

```js
function Person(name) { 
	if (!new.target) { 
		throw "must use new operator with Person"; 
	} 
	this.name = name; 
}
```

📌: JS::JS-Function  
🏷️: JS-Function
<!--ID: 1708068526981-->

---
