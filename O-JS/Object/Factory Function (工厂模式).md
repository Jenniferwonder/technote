---
Title: Factory Function (工厂模式)
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
### Use Factory Function to Create Object 
```js
// Factory Function
function createCircle(radius) {
		return {
				radius,
				draw: function () {
						console.log("draw");
				},
		};
}
const circle = createCircle(1);
```

### 工厂模式缺点
- 无法判断新创建的对象是什么类型 ([[Object Types (instanceof 标识对象类型)]])
