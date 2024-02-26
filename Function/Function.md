
### [Function Feature (函数本质与特点)](Function%20Feature%20(函数本质与特点).md)
### [Function Creation (创建函数)](Function%20Creation%20(创建函数).md)
### [Function Names (读取函数名)](Function%20Names%20(读取函数名).md)
### [Function Arguments (函数参数)](Function%20Arguments%20(函数参数).md)

### 函数内部特殊对象
* [`this` in JS Function](`this`%20in%20JS%20Function.md)
* [`new.target` 功能用法 (ES6)](`new.target`%20功能用法%20(ES6).md)

### 函数属性与方法
* [call; apply; bind](call;%20apply;%20bind.md)
* `prototype`
* `length`
	* 保存函数定义的命名参数的个数
	* `console.log(sayName.length);  // 1`
* `caller` (ES5)
	* 引用的是调用当前函数的函数
		* 如果是在全局作用域中调用的则为 `null`
	* `console.log(inner.caller);`
		* ![image](0abc5bc2d093e03182bbcfdb1ab7ca89.png)

### [Closure (闭包)](Closure%20(闭包).md)

### 立即调用的函数表达式 (IIFE)
* IIFE，Immediately Invoked Function Expression
* ###### ES5 时期用途
	* 用它锁定参数值
	* ECMAScript 5 尚未支持块级作用域，使用 IIFE模拟块级作用域是相当普遍
* 两种不同的块级作用域形式 (ES6)
	* 内嵌块级作用域
	* 循环的块级作用域

### 尾调用优化
* “尾调用”，即外部函数的返回值是一个内部函数的返回值
* 内存管理优化机制 (ES6)
	* 可以重用栈帧
* 尾调用优化的条件
	* 确定外部栈帧真的没有必要存在了

### 私有变量




