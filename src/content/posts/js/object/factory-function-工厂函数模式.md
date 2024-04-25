---
draft: false
aliases:
  - Factory Function-工厂函数模式
title: Factory Function-工厂函数模式
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
linter-yaml-title-alias: Factory Function-工厂函数模式
category: Programming
---

# Factory Function-工厂函数模式

### Use Factory Function to Create Object

```js
// Factory Function
function createCircle(radius) {
	return {
		radius,
		draw: function () {
			console.log(draw);
		},
	};
}
const circle = createCircle(1);
```

### 工厂模式缺点

- 无法判断新创建的对象是什么类型 ([Object Types (instanceof 标识对象类型)](../Object-Types-instanceof-标识对象类型)
