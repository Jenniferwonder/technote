---
title: Iterator 迭代器
type: D
DateStarted: 2023-08-13
DateModified: 2024-04-19
status:
  - Young
aliases:
  - Iterator
  - 迭代器
topic:
  - Practice
tags:
  - JavaScript
category: Programming
draft: true
---

# Iterator 迭代器

## 迭代定义 (Iteration)

- 最简单的迭代
  - 计数循环
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691564604297.png)
- 循环是迭代机制的基础
  - 因为它可以指定迭代的次数，以及每次迭代要执行什么操作
- 在一个有序集合上进行
  - 数组
  - ES5 新增了 Array.prototype.forEach()
    - 没有办法标识迭代何时终止。 因此这个方法只适用于数组，而且回调结构也比较笨拙

## 迭代器模式 (The Iterator Pattern)

- JavaScript 在 ECMAScript 6 以后也支持了迭代器模式
- 开发者无须事先知道如何迭代就能实现 迭代操作

## 可迭代对象/接口（Iterable）

- 它们实现了正式的 Iterable 接口
- 可以通过迭代器 Iterator 消费
- 可迭代协议 (Iterable Protocol)
  - 要求同时具备两种能力
    - 支持迭代的自我识别能力
      - 必须暴露一个属性作为“默认迭代器”
      - 检查是否存在默认迭代器属性可以暴露这个工厂函数
        - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691565228166.png)
    - 创建实现 Iterator 接口的对象的能力
      - 默认迭代器属性必须引用一个迭代器工厂函数
      - 这个属性必须使用特殊的 `Symbol.iterator` 作为键
      - 调用这个工厂函数必须返回一个新迭代器
- 接收可迭代对象的原生语言特性
  - for-of 循环
  - 数组解构
  - 扩展操作符
  - Array.from()
  - 创建集合 Set
  - 创建映射 Map
  - Promise.all()接收由期约组成的可迭代对象
  - Promise.race()接收由期约组成的可迭代对象
  - `yield*`操作符，在生成器中使用
  - 这些原生语言结构会在后台调用提供的可迭代对象的这个工厂函数，从而创建一个迭代器：

## 迭代器 (Iterator)

- 概念
  - 通用的迭代
  - 接口
  - 正式的迭代器类型
  - 是**按需创建的一次性对象**
- 显示迭代器与原生迭代器的实现 - 类实现显示迭代器
  <!--SR:!2023-08-16,3,250-->

          
```js
class Foo {
	[Symbol.iterator]() {
	return {
		next() {
			return { done: false, value: 'foo' };
		}
	} 
	} 
}
let f = new Foo(); // 打印出实现了迭代器接口的对象 console.log(f[Symbol.iterator]()); // { next: f() {} }
```

- Array 类型的原生迭代器

          
```js
	let a = new Array(); // 打印出 ArrayIterator 的实例 console.log(a[Symbol.iterator]()); // Array Iterator {}
```

- 迭代器协议 (Iterator Protocol)
  - 特点
    - 每个迭代器都会关联一个可迭代对象
    - 迭代器会暴露迭代其关联可迭代对象的 API
    - 迭代器无须了解与其关联的可迭代对象 (Iterable) 的结构，只需要知道如何取得连续的值
      - 这种概念上的分离正是 Iterable 和 Iterator 的强大之处
    - 每个迭代器都表示**对可迭代对象的一次性有序遍历**
  - next()方法
    - 返回 **迭代器对象 IteratorResult**
      - 包含两个属性
        - **done**
          - 是一个布尔值，表示是否还可以再次调用 next()取得下一个值
          - done: true 状态称为“耗尽”
        - **value**
          - 包含可迭代对象的下一个值（done 为 false），或者 undefined（done 为 true）
  - 案例
    - // 可迭代对象
      - `let arr = ['foo', 'bar'];`
    - // 迭代器工厂函数
      - `console.log(arr[Symbol.iterator]); // f values() { [native code] }`
    - // 迭代器对象
      - `let iter = arr[Symbol.iterator](); console.log(iter); // ArrayIterator {}`
    - // 执行迭代
      - `console.log(iter.next()); // { done: false, value: 'foo' } console.log(iter.next()); // { done: false, value: 'bar' } console.log(iter.next()); // { done: true, value: undefined }`
- 自定义迭代器-Custom Iterator Definition
  - 任何实现 Iterator 接口的对象都可以作为迭代器
- 提前终止迭代器-Early Termination of Iterators - 可选的 return()方法 - 用于指定在迭代器提前关闭时执行的逻辑 - 执行迭代的结构在想让迭代器知 道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器 - 必须返回一个有效的 IteratorResult 对象  
- for-of 循环通过 break、continue、return 或 throw 提前退出 - 解构操作并未消费所有值 - 并非所有迭代器都是可关闭的 - 要知道某个迭代器是否可关闭 - 可以测试这个迭代器实例的 return 属性是不是函数对象
