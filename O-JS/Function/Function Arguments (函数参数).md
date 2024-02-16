---
Title: Function Arguments (函数参数)
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
### 参数特点 (Arguments/ Parameters)
- 不关心传入的参数个数，也不关心这些参数的数据类型
- 对于命名参数而言，如果调用函数时没有传这个参数，那么它的值就是 `undefined`
- Strict mode  
	- No named parameter can be named `eval` or `arguments`. 
	- No two named parameters can have the same name. 

***
Basic
### `arguments` 对象用法
Back:
* 功能：反映调用时传给函数的参数
* 内部表现为一个数组
	* 类数组对象（但不是Array的实例）
		* `arguments.length`
	* 可以使用中括号语法访问其中的元素
		* `arguments[0]`
	* 不声明参数也可以
	* 可用作 `apply()` 的第二个参数：[[call; apply; bind]]
* 箭头函数中没有 `arguments` 对象 
	* 支持收集参数，可实现类似功能：[[Collect and Spread Function Arguments (收集与扩展参数)]]
	* 可以在包装函数中把它提供给箭头函数
		* ![[1691646042322.png]] 
📌: JS::JS-Function
🏷️: JS-Function
<!--ID: 1708067341797-->
****

***
Basic
#### `arguments.callee` 属性
Back:
* 一个指向 `arguments` 对象所在函数的指针
* 可以让函数逻辑与函数名解耦
* 案例：阶乘函数
	* `return num * factorial(num - 1);`
	* `return num * arguments.callee(num - 1);`
* 在严格模式下运行的代码是不能访问 `arguments.callee`
	* 可使用命名函数表达式（named function expression）
		* `const factorial = (function f(num) {`
		* `return num * f(num - 1);`
<!--ID: 1708067341809-->
****

***
Basic
### 默认参数定义与规则
Back:
* 显式定义默认参数 (ES6)
	* `function makeKing(name = 'Henry') {`
* 默认参数会按照定义它们的顺序依次被初始化
* 参数初始化顺序遵循“暂时性死区”规则
	* 前面定义的参数不能引用后面定义的
	* 后定义默认值的参数可以引用先定义的参数
* 参数存在于自己的作用域中，不能引用函数体的作用域
<!--ID: 1708067341816-->
****

### [[Collect and Spread Function Arguments (收集与扩展参数)]]
