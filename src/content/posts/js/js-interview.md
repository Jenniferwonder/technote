---
title: JS Interview
topic: 
type: 
tags:
  - JavaScript
category: Programming
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - JS Interview
draft: true
DateStarted: 2024-04-25
DateModified: 2024-04-25
linter-yaml-title-alias: JS Interview
---
# JS Interview
### JS 有哪些内置对象？
### 什么是闭包
### let const var 比较
### 谈谈你对变量提升的理解
### 如何理解作用域、作用域链和执行上下文？
### 如何创建一个没有原型的对象？
### 如何理解原型链？
### JSON.stringify 有什么缺点？
### for...in 和 for...of 的区别?
### new 操作符都做了什么
### 类数组和数组的区别，dom 的类数组如何转换成数组
### offsetWidth/offsetHeight，clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别
### mouseover/mouseout 与 mouseenter/mouseleave 的区别与联系
### event.stopPropagation()与 event.stopImmediatePropagation 的区别
### esm 和 commonjs 的区别
### 谈谈你对 V8 垃圾回收的理解？
### 如何优化和减少垃圾回收的影响，从而提高应用性能？
### 说一下事件循环机制 Event Loop
### 解释下 JavaScript 栈内存和堆内存？
### 箭头函数与普通函数区别？
### 箭头函数的 this 是声明时确定还是调用时确定？
### isNaN 与 Number.isNaN 的区别
### 谈谈你对 this 的理解
### 谈谈你对严格模式的理解
### 谈谈你对 Promise 的理解
### 为什么 0.1+0.2 不等于 0.3
### Map 与 WeakMap 的区别
### 谈谈你对词法作用域的理解
### es6 有哪些新特性？
### async await 是什么？它有哪些作用？

### 常用的数组方法有哪些？
### 数组有哪几种循环方式？分别有什么作用？
### 常用的字符串方法有哪些？
### 什么是闭包？手写一个闭包函数？ 闭包有哪些优缺点？  
### 常见的继承有哪些？
### 什么是递归，递归有哪些优点或缺点？
### 什么是深拷贝、什么是浅拷贝？
### 请写至少三种数组去重的方法？（原生 js）

```
//利用filter
function unique(arr) {
  return arr.filter(function (item, index, arr) {
    //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
    return arr.indexOf(item, 0) === index
  })
}
var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {}
]
console.log(unique(arr))
//利用ES6 Set去重（ES6中最常用）
function unique(arr) {
  return Array.from(new Set(arr))
}
var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {}
]
console.log(unique(arr))
//[1, "true", true, 15, false, undefined, null, NaN, "NaN", 0, "a", {}, {}]
//利用for嵌套for，然后splice去重（ES5中最常用）
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        //第一个等同于第二个，splice方法删除第二个
        arr.splice(j, 1)
        j--
      }
    }
  }
  return arr
}
var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {}
]
console.log(unique(arr))
//[1, "true", 15, false, undefined, NaN, NaN, "NaN", "a", {…}, {…}]
//NaN和{}没有去重，两个null直接消失了
```

### 26、请写出至少两种常见的数组排序的方法（原生 js）

```
//快速排序
function quickSort(elements) {
  if (elements.length <= 1) {
    return elements
  }
  var pivotIndex = Math.floor(elements.length / 2)
  var pivot = elements.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (var i = 0; i < elements.length; i++) {
    if (elements[i] < pivot) {
      left.push(elements[i])
    } else {
      right.push(elements[i])
    }
  }
  return quickSort(left).concat([pivot], quickSort(right))
  //concat()方法用于连接两个或者多个数组；该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。
}
var elements = [3, 5, 6, 8, 2, 4, 7, 9, 1, 10]
document.write(quickSort(elements))
//插入排序
function sort(elements) {
  // 假设第0个元素是一个有序数列，第1个以后的是无序数列，
  // 所以从第1个元素开始将无序数列的元素插入到有序数列中去
  for (var i = 1; i <= elements.length; i++) {
    // 升序
    if (elements[i] < elements[i - 1]) {
      // 取出无序数列中的第i个作为被插入元素
      var guard = elements[i]
      //记住有序数列的最后一个位置，并且将有序数列的位置扩大一个
      var j = i - 1
      elements[i] = elements[j]
      // 比大小;找到被插入元素所在位置
      while (j >= 0 && guard < elements[j]) {
        elements[j + 1] = elements[j]
        j--
      }
      elements[j + 1] = guard //插入
    }
  }
}
var elements = [3, 5, 6, 8, 2, 4, 7, 9, 1, 10]
document.write('没调用之前：' + elements)
document.write('<br>')
sort(elements)
document.write('被调用之后：' + elements)
//冒泡排序
function sort(elements) {
  for (var i = 0; i < elements.length - 1; i++) {
    for (var j = 0; j < elements.length - 1 - i; j++) {
      if (elements[j] > elements[j + 1]) {
        var swap = elements[j]
        elements[j] = elements[j + 1]
        elements[j + 1] = swap
      }
    }
  }
}
var elements = [3, 5, 6, 8, 2, 4, 7, 9, 1, 10]
console.log('before' + elements)
sort(elements)
console.log('after' + elements)
```

### 27、知道 lodash 吗？它有哪些常见的 API ？
Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。 `_.cloneDeep` 深度拷贝 `_.reject` 根据条件去除某个元素。 `_.drop(array, [n=1] )` 作用：将 array 中的前 n 个元素去掉，然后返回剩余的部分.
### 30、谈谈 set 、 map 是什么？
set 是 es6 提供的一种新的数据结构，它类似于数组，但是成员的值都是唯一的。  
map 是 es6 提供的一种新的数据结构,它类似于对象，也是键值对的集合，但是键的范围不仅限于字符 串，各种类型的值都可以当做键。也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供 了“值—值”的对应，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。
### 33、图片懒加载是怎么实现的？
就是我们先设置图片的 data-set 属性（当然也可以是其他任意的，只要不会发送 http 请求就行了，作用 就是为了存取值）值为其图片路径，由于不是 src，所以不会发送 http 请求。  
然后我们计算出页面 scrollTop 的高度和浏览器的高度之和， 如果图片距离页面顶端的坐标 Y（相对于整个页面，而不是浏览 器窗口）小于前两者之和，就说明图片就要显示出来了（合适的时机，当然也可以是其他情况），  
这时 候我们再将 data-set 属性替换为 src 属性即可。
### 37、数据类型的判断有哪些方法？他们的优缺点及区别是什么？
### 38、知道 symbol 吗？
ES6 引入新的原始数据类型 Symbol，表示独一无二的值
### 39、请描述一下 ES6 中的 class 类?
es6 中的 class 可以把它看成是 es5 中构造函数的语法糖，它简化了构造函数的写法， 类的共有属性放到 constructor 里面  
通过 class 关键字创建类, 类名我们还是习惯性定义首字母大写  
类里面有个 constructor 函数,可以接受传递过来的参数,同时返回实例对象  
constructor 函数 只要 new 生成实例时,就会自动调用这个函数, 如果我们不写这个函数,类也会自 动生成这个函数  
多个函数方法之间不需要添加逗号分隔  
生成实例 new 不能省略  
语法规范, 创建类 类名后面不要加小括号,生成实例 类名后面加小括号, 构造函数不需要加 function  
继承中,如果实例化子类输出一个方法,先看子类有没有这个方法,如果有就先执行子类的  
继承中,如果子类里面没有,就去查找父类有没有这个方法,如果有,就执行父类的这个方法(就近 原则)  
如果子类想要继承父类的方法,同时在自己内部扩展自己的方法,利用 super 调用 父类的构造函 数,super 必须在子类 this 之前调用  
时刻注意 this 的指向问题,类里面的共有的属性和方法一定要加 this 使用.  
constructor 中的 this 指向的是 new 出来的实例对象  
自定义的方法,一般也指向的 new 出来的实例对象  
绑定事件之后 this 指向的就是触发事件的事件源  
在 ES6 中类没有变量提升，所以必须先定义类，才能通过类实例化对象
### 41、promise 是什么？它有哪些作用？
Promise 是异步编程的一种解决方案.简单说就是一个容器，里面保存着某个未来才会结束的事件 （通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，可以从改对象获取异步操 作的消息。 它可以解决回调地狱的问题，也就是异步深层嵌套问题 .catch() 获取异常信息 .finally() 成功与否都会执行（不是正式标准）

```
/*
1. Promise基本使用
我们使用new来构建一个Promise Promise的构造函数接收一个参数，是函数，并
且传入两个参数： resolve，reject， 分别表示异步操作执行成功后的回调函数
和异步操作执行失败后的回调函数
*/
var p = new Promise(function (resolve, reject) {
  //2. 这里用于实现异步任务 setTimeout
  setTimeout(function () {
    var flag = false
    if (flag) {
      //3. 正常情况
      resolve('hello')
    } else {
      //4. 异常情况
      reject('出错了')
    }
  }, 100)
})
// 5 Promise实例生成以后，可以用then方法指定resolved状态和reject状态的回调函
数
// 在then方法中，你也可以直接return数据而不是Promise对象，在后面的then中就可以
接收到数据了
p.then(
  function (data) {
    console.log(data)
  },
  function (info) {
    console.log(info)
  }
)
```

### 43、箭头函数有哪些特征，请简单描述一下它？
箭头函数没有自己的 this，this 指向定义箭头函数时所处的外部执行环境的 this  
即使调用call/apply/bind也无法改变箭头函数的 this 箭头函数本身没有名字 箭头函数不能 new，会报错  
箭头函数没有 arguments，在箭头函数内访问这个变量访问的是外部执行环境的 arguments  
箭头函数没有 prototype
### 50、js 的数据类型有哪些？
js 的数据类型分为基本数据类型（string、number、boolean、null、undefined、symbol）和复杂数据类型  
基本数据类型的特点：直接存储在栈中的数据  
复杂数据类型的特点：存储的是该对象在栈中引用，真实的数据存放在堆内存里
### 55、call、apply、bind 三者的异同
共同点 : 都可以改变 this 指向;  
不同点: call 和 apply 会调用函数, 并且改变函数内部 this 指向. call 和 apply传递的参数不一样,call 传递参数使用逗号隔开,apply 使用数组传递 bind 不会调用函数, 可以改变函 数内部 this 指向. 应用场景  
call 经常做继承.  
apply 经常跟数组有关系. 比如借助于数学对象实现数组最大值最小值  
bind 不调用函数,但是还想改变 this 指向. 比如改变定时器内部的 this 指向
### 18.简述对前端模块化的认识？
块化的概念  
模块化是一种处理复杂系统分解成为更好的可管理模块的方式，它可以把系统代码划分为一系列职责单一，高度解耦且可替换的模块，系统中某一部分的变化将如何影响其它部分就会变得显而易见，系统的可维护性更加简单易得。  
模块化是一种分治的思想，通过分解复杂系统为独立的模块实现细粒度的精细控制，对于复杂系统的维护和管理十分有益。模块化也是组件化的基石，是构成现在色彩斑斓的前端世界的前提条件。  
为什么需要模块化  
前端开发和其他开发工作的主要区别，首先是前端是基于多语言、多层次的编码和组织工作，其次前端产品的交付是基于浏览器，这些资源是通过增量加载的方式运行到浏览器端，如何在开发环境组织好这些碎片化的代码和资源，并且保证他们在浏览器端快速、优雅的加载和更新，就需要一个模块化系统。  
模块化的好处  
可维护性。 因为模块是独立的，一个设计良好的模块会让外面的代码对自己的依赖越少越好，这样自己就可以独立去更新和改进。  
命名空间。 在 JavaScript 里面，如果一个变量在最顶级的函数之外声明，它就直接变成全局可用。因此，常常不小心出现命名冲突的情况。使用模块化开发来封装变量，可以避免污染全局环境。  
重用代码。 我们有时候会喜欢从之前写过的项目中拷贝代码到新的项目，这没有问题，但是更好的方法是，通过模块引用的方式，来避免重复的代码库。我们可以在更新了模块之后，让引用了该模块的所有项目都同步更新，还能指定版本号，避免 API 变更带来的麻烦。
### 28.简述异步加载和延迟加载
1.异步加载的方案： 动态插入script标签  
2.通过ajax去获取js代码，然后通过eval执行  
3.script标签上添加defer或者async属性  
4.创建并插入iframe，让它异步执行js  
5.延迟加载：有些 js 代码并不是页面初始化的时候就立刻需要的，而稍后的某些情况才需要的。
### 29.简述Promise的构造函数
构造一个 Promise，最基本的用法如下：

```
var promise = new Promise(function(resolve, reject) {
  if (...) { // succeed
    	resolve(result);
    } else { // fails
    	reject(Error(errMessage));
  }
});
```

Promise 实例拥有 then 方法（具有 then 方法的对象，通常被称为 thenable）。它的使用方法如下：  
promise.then(onFulfilled, onRejected)  
接收两个函数作为参数，一个在 fulfilled 的时候被调用，一个在 rejected 的时候被调用，接收参数就是 future，onFulfilled对应 resolve, onRejected 对应 reject。
### 30.简述严格模式的限制
严格模式主要有以下限制：  
变量必须声明后再使用  
函数的参数不能有同名属性，否则报错  
不能使用with语句  
不能对只读属性赋值，否则报错  
不能使用前缀0表示八进制数，否则报错  
不能删除不可删除的属性，否则报错  
不能删除变量delete prop，会报错，只能删除属性delete global[prop]  
eval不会在它的外层作用域引入变量  
eval和arguments不能被重新赋值  
arguments不会自动反映函数参数的变化  
不能使用arguments.callee  
不能使用arguments.caller  
禁止this指向全局对象  
不能使用fn.caller和fn.arguments获取函数调用的堆栈  
增加了保留字（比如protected、static和interface）  
设立”严格模式”的目的，主要有以下几个：  
消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为;  
消除代码运行的一些不安全之处，保证代码运行的安全；  
提高编译器效率，增加运行速度；  
为未来新版本的Javascript做好铺垫。  
注：经过测试IE6,7,8,9均不支持严格模式。
# Front-end Interview
### 用 setTimeout 实现 setInterval

```typescript
function customSetInterval(callback: () => void, delay: number): () => void {
	let timer;
	const interval = () => {
		callback();
		timer = setTimeout(interval, delay);
	};
	timer = setTimeout(interval, delay);
	// 返回清除定时器的函数
	return () => {
		clearTimeout(timer);
	};
}
// 示例用法
const callback = () => console.log("Hello, world!");
const delay = 1000; // 每隔1000毫秒执行一次
const clearIntervalFunc = customSetInterval(callback, delay);
// 用法：在需要的时候清除定时器
// clearIntervalFunc();
```

### var 实现 let

```typescript
function demo() {
	(function () {
		var x = "Hello, world!";
		console.log(x); // 输出 "Hello, world!"
	})();
	try {
		console.log(x); // 抛出 ReferenceError，因为x在这个作用域内未定义
	} catch (error) {
		console.error(error); // 输出错误信息
	}
}
demo();
```

### 实现所有的 TypeScript Utility Types

```typescript
// 1. Partial<T>
type Partial<T> = { [P in keyof T]?: T[P] };
// 2. Required<T>
type Required<T> = { [P in keyof T]-?: T[P] };
// 3. Readonly<T>
type Readonly<T> = { readonly [P in keyof T]: T[P] };
// 4. Pick<T, K>
type Pick<T, K extends keyof T> = { [P in K]: T[P] };
// 5. Omit<T, K>
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// 6. Exclude<T, U>
type Exclude<T, U> = T extends U ? never : T;
// 7. Extract<T, U>
type Extract<T, U> = T extends U ? T : never;
// 8. NonNullable<T>
type NonNullable<T> = Exclude<T, null | undefined>;
// 9. ReturnType<T>
type ReturnType<T extends (...args: any) => any> = T extends (
	...args: any
) => infer R
	? R
	: any;
// 10. InstanceType<T>
type InstanceType<T extends new (...args: any) => any> = T extends new (
	...args: any
) => infer R
	? R
	: any;
// 11. ThisParameterType<T>
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
	? U
	: unknown;
// 12. OmitThisParameter<T>
type OmitThisParameter<T> = T extends (this: any, ...args: infer A) => infer R
	? (...args: A) => R
	: T;
// 13. ThisType<T>
// `ThisType` is a marker utility type and can't be implemented like other utility types.
```

### 防抖 debounce

```typescript
function debounce(
	func: (...args: any[]) => void,
	wait: number
): (...args: any[]) => void {
	let timeout: ReturnType<typeof setTimeout> | null = null;
	return (...args: any[]) => {
		if (timeout) {
			clearTimeout(timeout);
		}
		timeout = setTimeout(() => {
			func.apply(null, args);
		}, wait);
	};
}
```

### 节流 throttle

```typescript
function throttle(
	func: (...args: any[]) => void,
	limit: number
): (...args: any[]) => void {
	let lastCall = 0; // 记录上次调用的时间戳
	return (...args: any[]) => {
		const now = Date.now(); // 获取当前时间戳
		// 如果当前时间与上次调用的时间差大于等于设定的限制时间，执行函数并更新上次调用时间
		if (now - lastCall >= limit) {
			func.apply(null, args);
			lastCall = now;
		}
	};
}
```

### New

```typescript
function customNew(constructorFn: Function, ...args: any[]): object {
	const obj = Object.create(constructorFn.prototype); // 创建一个新对象，并将其原型链设置为构造函数的prototype
	const result = constructorFn.apply(obj, args); // 调用构造函数并将this绑定到新创建的对象
	// 如果构造函数返回了一个对象，那么返回这个对象，否则返回创建的新对象
	return typeof result === "object" && result !== null ? result : obj;
}
// 示例用法
function Person(name: string, age: number) {
	this.name = name;
	this.age = age;
}
const alice = customNew(Person, "Alice", 30) as Person;
console.log(alice.name); // 输出 "Alice"
console.log(alice.age); // 输出 30
```

### 数组去重

```typescript
// First
const uniqueArray = (arr: any[]) => {
	return [...new Set(arr)];
};
// Second
const uniqueArray = (arr: any[]) => {
	const result = [];
	for (const item of arr) {
		if (result.indexOf(item) === -1) {
			result.push(item);
		}
	}
	return result;
};
// Third
const uniqueArray = (arr: any[]) => {
	return arr.filter((item, index) => {
		return arr.indexOf(item) === index;
	});
};
console.log(uniqueArray([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 6]
```

### 实现正则切分千分位

```typescript
function formatThousands(n: number): string {
	const reg = /\d{1,3}(?=(\d{3})+$)/g;
	const num = n.toString();
	const formattedNum = num.replace(reg, "$&,");
	return formattedNum;
}
// 测试
console.log(formatThousands(123456789)); // 输出: 123,456,789
console.log(formatThousands(1000000)); // 输出: 1,000,000
console.log(formatThousands(9876543210)); // 输出: 9,876,543,210
```

### call

```typescript
// 实现自定义call方法
Function.prototype.myCall = function (thisArg: any, ...args: any[]): any {
	const fn = this;
	const uniqueKey = Symbol("uniqueKey");
	thisArg[uniqueKey] = fn;
	const result = thisArg[uniqueKey](...args);
	delete thisArg[uniqueKey];
	return result;
};
const obj = {
	name: "Alice",
};
// 示例用法
function greet(greeting: string, punctuation: string) {
	console.log(`${greeting}, ${this.name}${punctuation}`);
}
greet.myCall(obj, "Hello", "!"); // 输出 "Hello, Alice!"
```

### apply

```typescript
// 实现自定义apply方法
Function.prototype.myApply = function (thisArg: any, args: any[]): any {
	const fn = this;
	const uniqueKey = Symbol("uniqueKey");
	thisArg[uniqueKey] = fn;
	const result = thisArg[uniqueKey](...args);
	delete thisArg[uniqueKey];
	return result;
};
const obj = {
	name: "Alice",
};
// 示例用法
function greet(greeting: string, punctuation: string) {
	console.log(`${greeting}, ${this.name}${punctuation}`);
}
greet.myApply(obj, ["Hi", "!"]); // 输出 "Hi, Alice!"
```

### bind

```typescript
// 实现自定义bind方法
Function.prototype.myBind = function (
	thisArg: any,
	...args1: any[]
): (...args2: any[]) => any {
	const fn = this;
	return function (...args2: any[]) {
		return fn.myApply(thisArg, args1.concat(args2));
	};
};
const obj = {
	name: "Alice",
};
// 示例用法
function greet(greeting: string, punctuation: string) {
	console.log(`${greeting}, ${this.name}${punctuation}`);
}
const boundGreet = greet.myBind(obj, "Hey");
boundGreet("?"); // 输出 "Hey, Alice?"
```

### 深拷贝

```typescript
function deepClone(obj: any, cache = new WeakMap()): any {
	if (obj === null || typeof obj !== "object") {
		return obj;
	}
	if (cache.has(obj)) {
		return cache.get(obj);
	}
	if (obj instanceof Date) {
		return new Date(obj.getTime());
	}
	if (obj instanceof Function) {
		return function (...args: any[]) {
			obj.apply(this, args);
		};
	}
	if (obj instanceof RegExp) {
		return new RegExp(obj);
	}
	if (obj instanceof Array) {
		const clonedArr: any[] = [];
		cache.set(obj, clonedArr);
		for (let i = 0; i < obj.length; ++i) {
			clonedArr[i] = deepClone(obj[i], cache);
		}
		return clonedArr;
	}
	const clonedObj: { [key: string]: any } = {};
	cache.set(obj, clonedObj);
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			clonedObj[key] = deepClone(obj[key], cache);
		}
	}
	return clonedObj;
}
// 示例用法
const original: { [key: string]: any } = {
	name: "Alice",
	age: 30,
	dateOfBirth: new Date("1993-01-01"),
	preferences: {
		color: "blue",
		food: "pizza",
	},
	sum() {
		console.log(this.name + "-" + this.age);
	},
};
original.original = original;
original.originalArr = [original, original];
const cloned = deepClone(original);
console.log(cloned); // 输出与 original 相同但不是同一个引用的对象
```

### 柯里化

```typescript
function curry(fn: (...args: any[]) => any): (...args: any[]) => any {
	const arity = fn.length; // 获取原函数的参数个数
	function curried(...args: any[]): any {
		if (args.length >= arity) {
			return fn.apply(null, args);
		}
		return (...restArgs: any[]) => curried.apply(null, args.concat(restArgs));
	}
	return curried;
}
// 示例用法
function add(a: number, b: number, c: number): number {
	return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 输出 6
```

### es5 和 es6 继承

```js
// ES5继承（构造函数 + 原型链）
function AnimalES5(name: string) {
	this.name = name;
}
AnimalES5.prototype.sayName = function () {
	console.log("My name is " + this.name);
};
function DogES5(name: string, breed: string) {
	AnimalES5.call(this, name); // 调用父类构造函数
	this.breed = breed;
}
DogES5.prototype = Object.create(AnimalES5.prototype); // 设置原型链
DogES5.prototype.constructor = DogES5; // 修复构造函数
DogES5.prototype.sayBreed = function () {
	console.log("My breed is " + this.breed);
};
// 示例用法
const dogES5 = new DogES5("Max", "Golden Retriever");
dogES5.sayName(); // 输出 "My name is Max"
dogES5.sayBreed(); // 输出 "My breed is Golden Retriever"
// ES6继承（使用class和extends关键字）
class AnimalES6 {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	sayName() {
		console.log("My name is " + this.name);
	}
}
class DogES6 extends AnimalES6 {
	breed: string;
	constructor(name: string, breed: string) {
		super(name); // 调用父类构造函数
		this.breed = breed;
	}
	sayBreed() {
		console.log("My breed is " + this.breed);
	}
}
// 示例用法
const dogES6 = new DogES6("Max", "Golden Retriever");
dogES6.sayName(); // 输出 "My name is Max"
dogES6.sayBreed(); // 输出 "My breed is Golden Retriever"
```

### instanceof

```typescript
// 自定义实现 instanceof
function myInstanceOf(target: any, constructorFunc: Function): boolean {
	// 参数校验
	if (
		typeof target !== "object" ||
		target === null ||
		typeof constructorFunc !== "function"
	) {
		return false;
	}
	// 获取目标对象的原型
	let targetProto = Object.getPrototypeOf(target);
	// 获取构造函数的原型
	const constructorProto = constructorFunc.prototype;
	// 遍历原型链，查找目标对象是否是构造函数的实例
	while (targetProto !== null) {
		if (targetProto === constructorProto) {
			return true;
		}
		targetProto = Object.getPrototypeOf(targetProto);
	}
	return false;
}
// 测试用例
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}
const dog = new Dog();
const cat = new Cat();
console.log(myInstanceOf(dog, Dog)); // true
console.log(myInstanceOf(dog, Animal)); // true
console.log(myInstanceOf(cat, Dog)); // false
console.log(myInstanceOf(cat, Animal)); // true
console.log(myInstanceOf(123, Number)); // false
```

### 数组扁平化

```typescript
// 自定义实现数组扁平化
function flattenArray(arr: any[]): any[] {
	const result: any[] = [];
	// 递归处理每个元素
	function processItem(item: any) {
		// 如果元素是数组，则递归处理
		if (Array.isArray(item)) {
			item.forEach(processItem);
		} else {
			// 如果元素不是数组，直接添加到结果数组中
			result.push(item);
		}
	}
	arr.forEach(processItem);
	return result;
}
// 测试用例
const nestedArray = [1, [2, [3, 4], 5, [6, [7, 8]]], 9, 10];
console.log(flattenArray(nestedArray)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const nestedArray2 = [1, [2, 3], 4, [[5], 6, [7, [8, 9, [10]]]]];
console.log(flattenArray(nestedArray2)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

### 对象扁平化

```typescript
function flattenObject(
	obj: { [key: string]: any },
	prefix = ""
): { [key: string]: any } {
	const flattened: { [key: string]: any } = {};
	for (const key in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			const newKey = prefix ? `${prefix}.${key}` : key;
			if (
				typeof obj[key] === "object" &&
				obj[key] !== null &&
				!Array.isArray(obj[key])
			) {
				Object.assign(flattened, flattenObject(obj[key], newKey));
			} else {
				flattened[newKey] = obj[key];
			}
		}
	}
	return flattened;
}
// 示例用法
const nestedObj = {
	a: {
		b: {
			c: 1,
			d: {
				e: 2,
			},
		},
		f: 3,
	},
	g: {
		h: 4,
	},
};
const flattenedObj = flattenObject(nestedObj);
console.log(flattenedObj);
// 输出 { 'a.b.c': 1, 'a.b.d.e': 2, 'a.f': 3, 'g.h': 4 }
```

### JSON.parse

```typescript
const myJSONParse = (target) => {
	return eval(`(${target})`);
};
// 测试用例
const jsonString = '{"name": "John", "age": 30, "city": "New York"}';
const parsedObject = myJSONParse(jsonString);
console.log(parsedObject); // { name: 'JOHN', age: 30, city: 'NEW YORK' }
```

### EventEmitter 事件触发器

```typescript
class EventEmitter {
	private events: Map<string, Array<(...args: any[]) => void>>;
	constructor() {
		this.events = new Map(); // 存储事件名和对应的回调函数列表
	}
	// 添加事件监听
	on(event: string, listener: (...args: any[]) => void): void {
		if (!this.events.has(event)) {
			this.events.set(event, []);
		}
		this.events.get(event)!.push(listener);
	}
	// 移除事件监听
	off(event: string, listener: (...args: any[]) => void): void {
		const listeners = this.events.get(event);
		if (listeners) {
			const index = listeners.indexOf(listener);
			if (index !== -1) {
				listeners.splice(index, 1);
			}
		}
	}
	// 触发事件
	emit(event: string, ...args: any[]): void {
		const listeners = this.events.get(event);
		if (listeners) {
			listeners.forEach((listener) => listener.apply(null, args));
		}
	}
	// 添加只执行一次的事件监听
	once(event: string, listener: (...args: any[]) => void): void {
		const wrappedListener = (...args: any[]) => {
			listener.apply(null, args);
			this.off(event, wrappedListener);
		};
		this.on(event, wrappedListener);
	}
}
// 示例用法
const eventEmitter = new EventEmitter();
function hello(name: string) {
	console.log(`Hello, ${name}!`);
}
eventEmitter.on("greet", hello);
eventEmitter.emit("greet", "Alice"); // 输出 "Hello, Alice!"
eventEmitter.off("greet", hello);
eventEmitter.emit("greet", "Bob"); // 不会输出，因为监听器已被移除
eventEmitter.once("welcome", hello);
eventEmitter.emit("welcome", "Carol"); // 输出 "Hello, Carol!"
eventEmitter.emit("welcome", "David"); // 不会输出，因为监听器只执行一次
```

### async/await

```typescript
function customAsync(generatorFn: (...args: any[]) => Generator) {
	return function (...args: any[]) {
		const generator = generatorFn.apply(null, args);
		function handle(result: IteratorResult<any>): Promise<any> {
			if (result.done) {
				return Promise.resolve(result.value);
			}
			return Promise.resolve(result.value)
				.then((value) => handle(generator.next(value)))
				.catch((error) => handle(generator.throw!(error)));
		}
		return handle(generator.next());
	};
}
// 示例用法
function* myGenerator() {
	const result1 = yield new Promise((resolve) =>
		setTimeout(() => resolve("First result"), 1000)
	);
	console.log(result1);
	const result2 = yield new Promise((resolve) =>
		setTimeout(() => resolve("Second result"), 1000)
	);
	console.log(result2);
	return "Done";
}
const myAsyncFunction = customAsync(myGenerator);
myAsyncFunction().then((result) => console.log(result)); // 依次输出 "First result", "Second result", "Done"
```

### 正则获取 url params

```typescript
// 自定义实现获取 URL 参数
function getUrlParams(url: string): Record<string, string> {
	const params: Record<string, string> = {};
	const regex = /[?&]([^=&#]+)=([^&#]*)/g;
	let match: RegExpExecArray | null;
	// 使用正则表达式匹配 URL 参数
	while ((match = regex.exec(url)) !== null) {
		// 将匹配到的参数名称和值添加到结果对象中
		params[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
	}
	return params;
}
// 测试用例
const testUrl1 = "https://www.example.com/test?name=John&age=30&city=New-York";
const result1 = getUrlParams(testUrl1);
console.log(result1); // { name: 'John', age: '30', city: 'New York' }
const testUrl2 = "https://www.example.com/test?query=test&page=1&filter=active";
const result2 = getUrlParams(testUrl2);
console.log(result2); // { query: 'test', page: '1', filter: 'active' }
```

### jsonp

```typescript
function jsonp(
	url: string,
	params: { [key: string]: any },
	callbackName: string
): Promise<any> {
	return new Promise((resolve, reject) => {
		// 创建一个全局回调函数，用于接收请求返回的数据
		(window as any)[callbackName] = (data: any) => {
			delete (window as any)[callbackName]; // 请求完成后删除全局回调函数
			document.body.removeChild(script); // 移除script标签
			resolve(data); // 解析Promise，返回数据
		};
		// 将请求参数和回调函数名添加到URL
		const queryString = Object.entries(params)
			.map(
				([key, value]) =>
					`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
			)
			.join("&");
		const finalUrl = `${url}?${queryString}&callback=${callbackName}`;
		// 创建并插入一个script标签，用于发起JSONP请求
		const script = document.createElement("script");
		script.src = finalUrl;
		script.onerror = () => reject(new Error("JSONP request failed")); // 监听错误事件以处理请求失败的情况
		document.body.appendChild(script);
	});
}
// 示例用法
const url = "https://api.example.com/data";
const params = {
	userId: 123,
	accessToken: "abcdefgh",
};
const callbackName = "jsonpCallback";
jsonp(url, params, callbackName)
	.then((data) => console.log(data))
	.catch((error) => console.error(error));
```

### JSON.stringify

```typescript
function customJSONStringify(obj: any): string | undefined {
	const seenObjects: any[] = [];
	function stringify(value: any): string | undefined {
		if (
			typeof value === "number" ||
			typeof value === "boolean" ||
			value === null
		) {
			return String(value);
		}
		if (typeof value === "string") {
			return `"${value}"`;
		}
		if (
			typeof value === "undefined" ||
			typeof value === "function" ||
			value instanceof Symbol
		) {
			return undefined;
		}
		if (seenObjects.indexOf(value) !== -1) {
			throw new TypeError("Converting circular structure to JSON");
		}
		seenObjects.push(value);
		if (Array.isArray(value)) {
			const arr = value.map((item) => stringify(item) ?? "null");
			return `[${arr.join(",")}]`;
		}
		const keys = Object.keys(value).filter(
			(key) =>
				typeof value[key] !== "function" && typeof value[key] !== "undefined"
		);
		const keyValuePairs = keys.map(
			(key) => `"${key}":${stringify(value[key]) ?? "null"}`
		);
		return `{${keyValuePairs.join(",")}}`;
	}
	return stringify(obj);
}
// 示例用法
const obj = {
	name: "Alice",
	age: 30,
	sayHello: function () {
		console.log("Hello");
	},
	preferences: {
		color: "blue",
		food: "pizza",
	},
};
console.log(customJSONStringify(obj)); // 输出 '{"name":"Alice","age":30,"preferences":{"color":"blue","food":"pizza"}}'
```

### Promise

```typescript
// 定义Promise的三种状态常量
enum PromiseStatus {
	Pending = "PENDING",
	Fulfilled = "FULFILLED",
	Rejected = "REJECTED",
}
class CustomPromise {
	status: PromiseStatus;
	value: any;
	reason: any;
	onFulfilledCallbacks: Array<(...args: any[]) => void>;
	onRejectedCallbacks: Array<(...args: any[]) => void>;
	constructor(
		executor: (
			resolve: (value?: any) => void,
			reject: (reason?: any) => void
		) => void
	) {
		this.status = PromiseStatus.Pending; // 初始状态为Pending
		this.value = null; // 存储成功时的值
		this.reason = null; // 存储失败时的原因
		this.onFulfilledCallbacks = []; // 存储成功时的回调函数
		this.onRejectedCallbacks = []; // 存储失败时的回调函数
		const resolve = (value?: any) => {
			if (this.status === PromiseStatus.Pending) {
				this.status = PromiseStatus.Fulfilled;
				this.value = value;
				this.onFulfilledCallbacks.forEach((callback) => callback());
			}
		};
		const reject = (reason?: any) => {
			if (this.status === PromiseStatus.Pending) {
				this.status = PromiseStatus.Rejected;
				this.reason = reason;
				this.onRejectedCallbacks.forEach((callback) => callback());
			}
		};
		try {
			executor(resolve, reject);
		} catch (error) {
			reject(error);
		}
	}
	then(
		onFulfilled?: (value: any) => any,
		onRejected?: (reason: any) => any
	): CustomPromise {
		onFulfilled =
			typeof onFulfilled === "function" ? onFulfilled : (value) => value;
		onRejected =
			typeof onRejected === "function"
				? onRejected
				: (reason) => {
						throw reason;
				  };
		const promise = new CustomPromise((resolve, reject) => {
			const handleFulfilled = () => {
				try {
					const result = onFulfilled!(this.value);
					if (result === promise) {
						throw new TypeError("Chaining cycle detected for promise");
					}
					if (result instanceof CustomPromise) {
						result.then(resolve, reject);
					} else {
						resolve(result);
					}
				} catch (error) {
					reject(error);
				}
			};
			const handleRejected = () => {
				try {
					const result = onRejected!(this.reason);
					if (result === promise) {
						throw new TypeError("Chaining cycle detected for promise");
					}
					if (result instanceof CustomPromise) {
						result.then(resolve, reject);
					} else {
						resolve(result);
					}
				} catch (error) {
					reject(error);
				}
			};
			if (this.status === PromiseStatus.Fulfilled) {
				queueMicrotask(handleFulfilled);
			} else if (this.status === PromiseStatus.Rejected) {
				queueMicrotask(handleRejected);
			} else {
				this.onFulfilledCallbacks.push(() => queueMicrotask(handleFulfilled));
				this.onRejectedCallbacks.push(() => queueMicrotask(handleRejected));
			}
		});
		return promise;
	}
	catch(onRejected?: (reason: any) => any): CustomPromise {
		return this.then(undefined, onRejected);
	}
}
```

### 写一个通用的方法来获取地址栏的某个参数对应的值，不能使用正则表达式

```javascript
// 方法一
function getQueryParam(paramName) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(paramName);
}
// 使用示例
const myParamValue = getQueryParam("myParam");
console.log(myParamValue); // 输出myParam参数的值
```

```javascript
// 方法二
function getQueryParam(paramName) {
  var params = window.location.search.substr(1).split('&');
  for (let i = 0; i < params.length; i++) {
    let keyValuePair = params[i].split('=');=
    if (keyValuePair[0] === paramName) {
      return decodeURIComponent(keyValuePair[1]);
    }
  }
  return null;
}
// 使用示例
const myParamValue = getQueryParam('myParam');
console.log(myParamValue); // 输出myParam参数的值
```