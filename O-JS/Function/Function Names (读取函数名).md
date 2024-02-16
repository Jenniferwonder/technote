---
Title: Function Names (读取函数名)
Topic:
  - Function
Type: D
tags:
  - JavaScript
DateStarted: 2024-02-16
DateModified: 2024-02-16
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 2024-02-16
Reviewed: 1
Difficulty: 
status: 
Comment:
---
***
Basic
### `name` 属性功能用法
Back:
* 所有函数对象都会暴露一个只读的 `name` 属性，可读取函数名
	* 保存的就是一个函数标识符，一个字符串化的变量名
	* 若函数没有名称，也会如实显示成*空字符串*
		* `console.log((() ={}).name); //（空字符串）`
	* 如果它是使用 Function 构造函数创建的，则会标识成 "*anonymous*"
		* `console.log((new Function()).name); // anonymous`
	* 函数名前面 *加前缀* 的情况
		* 如果函数是一个获取函数、设置函数，或者使用 `bind()` 实例化
		* `bound foo`
			* `foo.bind(null).name`
		* `get age`
			* `propertyDescriptor.get.name`
		* `set age`
			* `propertyDescriptor.set.name`
📌: JS::JS-Function
🏷️: JS-Function
<!--ID: 1708068045611-->
****