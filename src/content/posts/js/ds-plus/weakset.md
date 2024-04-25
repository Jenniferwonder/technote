---
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - WeakSet
title: WeakSet
type: D
DateStarted: 2023-08-06
DateModified: 2024-04-25
status: Snooze
pages: 7
Pomo: 1
Up:
  - - C06-Collection Reference Type-集合引用类型
topic:
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
linter-yaml-title-alias: WeakSet
---

# WeakSet

## 基本 API

- 弱集合中的值只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置值会抛出 TypeError
- 构造函数可以接收一个可迭代对象，其中需要包含有效的值
- const ws1 = new WeakSet([val1, val2, val3]);
- const ws2 = new WeakSet([val1, BADVAL, val3]); // TypeError: Invalid value used in WeakSet typeof ws2; // ReferenceError: ws2 is not defined
- // 原始值可以先包装成对象再用作值 const stringVal = new String(val1); const ws3 = new WeakSet([stringVal]); alert(ws3.has(stringVal)); // true
- add()
- has()
- delete()

## 弱值

- 值不属于正式的引用， 不会阻止垃圾回收

## 不可迭代值

- 因为 WeakSet 中的值任何时候都可能被销毁，所以没必要提供迭代其值的能力
- 之所以限制只能用对象作为值，是为了保证只有通过值对象的引用才能取得值。

## 使用弱集合

- 弱集合在给对象打标签时还是有 价值的
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691561411853.png)
  - 通过查询元素在不在 disabledElements 中，就可以知道它是不是被禁用了
