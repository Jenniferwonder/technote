---
title: WeakMap
type: D
DateStarted: 2023-08-06
DateModified: 2024-04-19
status: Snooze
Pages: 6
Up:
  - - C06-Collection Reference Type-集合引用类型
Pomo: 1
topic:
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
---

# WeakMap

## Basic API

- const wm = new WeakMap();
- 构造函数可以接收一个可迭代对象，其中需要包含键/值对数组
- 使用嵌套数组初始化弱映射
- 只要有一个键无效就会抛出错误，导致整个初始化失败
- WeakMap 是 Map 的“兄弟”类型，其 API 也是 Map 的子集
- WeakMap 中的“weak”（弱）， 描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式
- set()
- get()
- has()
- delete()

## Weak Keys

- 这些键不属于正式的引用， 不会阻止垃圾回收
- 弱映射中值
- 只要键存在，键/值 对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收

## Non-Iterable Keys

- clear()
  - 。WeakMap 确实没有这个方法
- WeakMap 中的键/值对任何时候都可能被销毁

## Utility

- Private Variables
  - 私有变量
  - 用一个闭包把 WeakMap 包装起来，这样就可以把弱映 射与外界完全隔离开了
  - 虽然这防止了前面提到的访问，但 整个代码也完全陷入了 ES6 之前的闭包私有变量模式
- DOM Node Metadata
  - DOM 节点元数据
  - 因为 WeakMap 实例不会妨碍垃圾回收，所以非常适合保存关联元数据
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691559775005.png)
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691559786052.png)
