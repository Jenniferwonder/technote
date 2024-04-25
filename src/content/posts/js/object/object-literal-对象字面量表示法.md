---
draft: false
aliases:
  - Object literal-对象字面量表示法
title: Object literal-对象字面量表示法
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
linter-yaml-title-alias: Object literal-对象字面量表示法
category: Programming
---

# Object literal-对象字面量表示法

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
		console.log(draw);
	},
};
circle.draw();
```

---

Basic

### Enhanced Object Property Syntax (ES6)

Back:

- 属性值简写-Property Value Shorthand
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692024641437.png)
- 简写方法名
- 可计算属性-Computed Property Keys - 可以在对象字面量中完成动态属性赋值  
📌: JS::JS-Objects  
🏷️: JS-Objects
<!--ID: 1706845435119-->

---
