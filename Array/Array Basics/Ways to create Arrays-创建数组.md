---
Title: "Ways to Create Arrays-创建数组 "
Type: D
Topic:
  - Array
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-01-26
DateDo:
DateDone:
DateDue:
DateReviewed: 2024-01-26
Reviewed: 1
status:
  - Mature
---
***
Basic
### 创建数组的三种方法
Back: 
- 使用数组构造函数 `new Array()`
- 字面量标记法 `[ ]`
- 静态方法 `Array.from()` （introduced in ES6）
🏷️: JS-Array
📌: JS::JS-Array
<!--ID: 1706536857988-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 创建一个空数组
Back:
- let colors = `new Array();`
- let colors = `[ ]`
<!--ID: 1706536857998-->
****
<!--SR:!2024-02-01,3,250--> 

***
Basic
### 创建一个 20 位的空数组
Back:
- `let colors = new Array(20);`
- `let colors = Array(20); // Omit the 'new' keyword: `
<!--ID: 1706536858009-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 创建数组 `["red", "blue", "green"]`
Back:
- ✅字面量标记法：`let colors = ["red", "blue", "green"];`
- 构造函数法：`let colors = new Array("red", "blue", "green");`
- 静态方法：`let colors = Array.of("red", "blue", "green");`
<!--ID: 1706536858020-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 创建含 3 个值为 1 元素的数组 (`[1, 1, 1]`)
Back:
- 法 1：`Array.from({ length: 3}, () => 1)`
- 法 2：`Array(3).fill(1,0,2)
<!--ID: 1706536858031-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 创建含 3 个数组递增元素的数组 (`[1, 2, 3]`)
Back:
- `Array.from({ length: 3}, (_, i) => i+1)`
<!--ID: 1706536858042-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 创建一个指定类名下 DOM 元素的数组
Back:
- `Array.from(document.querySelectorAll('.className'), function)`
<!--ID: 1706536858052-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 将字符串拆分为对应字符的数组
Back:
- `alert(Array.from("Matt")); // ["M", "a", "t", "t"]`
<!--ID: 1706537026589-->
****

***
Basic
### Convert Set (s) and Map (m) into an new Array Instance
Back:
- ![[1691244271831.png]]
<!--ID: 1706536858072-->
****
<!--SR:!2024-02-01,3,250--> 

***
Basic
### `.fill(1, 2, 5)` 含义
Back:
- fill an array with the specified value 1 from index 2 to 5
<!--ID: 1706536858081-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### Turn variables into Array
Back:
- `alert(Array.of(1,2,3,4)) // [1,2,3,4] `
- `alert(Array.of(undefined)) // [undefined]`
- `alert(Array.of(...[,,,])) // [undefined, undefined, undefined]`
<!--ID: 1706536858091-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### `Array.from()` 用途、参数
Back:
- used for converting array-like constructs into an array instance
- `Array.from()` performs a shallow **copy** of an existing array
- 1st Arg
	- "arrayLike" object: anything that is iterable or has a property length and indexed elements
- 2nd Arg (Optional)
	- map function argument
	- same with `Array.from().map()`
	- [[Iterate and Map over Array (数组循环迭代)]]
- 3rd Arg (Optional)
	- ![[1691244947152.png|525]]
<!--ID: 1706536858100-->
****
<!--SR:!2024-02-05,7,250-->



