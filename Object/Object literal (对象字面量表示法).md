---
Title: Object literal (对象字面量表示法)
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
### Use Object literal to Create Object 
- `{ }`

```js
// Object literal syntax
const circle = {
		radius: 1,
		location: {
				x: 1,
				y: 1,
		},
		// ES6 enhanced object literals: Create Function as *methods* inside an object 🟨
		draw: function () {
				console.log("draw");
		},
};
circle.draw();
```


***
Basic
### Enhanced Object Property Syntax (ES6)
Back:
- 属性值简写-Property Value Shorthand
	- ![](1692024641437.png) 
- 简写方法名
- 可计算属性-Computed Property Keys
	- 可以在对象字面量中完成动态属性赋值
📌: JS::JS-Objects 
🏷️: JS-Objects 
<!--ID: 1706845435119-->
****
