---
Title: Find Index of Element (查找元素位置)
Topic:
  - Array
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-01-26
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 2024-01-26
Reviewed: 1
Difficulty: Good
status:
  - ToUse
Comment:
---
### 查找元素位置
- `.indexOf()` (严格相等/全等比较)
	- Return the index of an element based on value
- `.lastIndexOf()` (严格相等/全等比较)
	- ![[Paste image 1691284203252image.png]]
- `.findIndex()`
	- 断言函数
		- 断言函数的返回值决定了相应索引的元素是否被认为匹配
	- Return the index of the first element based on test condition, if not found return `-1`
	- `.findIndex(arr => acc.username === currentAcc.username)`