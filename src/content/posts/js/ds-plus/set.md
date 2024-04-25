---
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - Set
title: Set
type: D
DateStarted: 2022-12-01
DateModified: 2024-04-25
status: Snooze
pages: 7
Up:
  - - C06-Collection Reference Type-集合引用类型
Pomo: 1
topic:
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
linter-yaml-title-alias: Set
---

# Set

## Basic API

- Set 在很多方面都 像是加强的 Map
- 它们的大多数 API 和行为都是共有的
- const m = new Set();
- 可以给 Set 构造函数传入一个可迭代对象
- 使用数组初始化集合
- 使用自定义迭代器初始化集合
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691559944791.png)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691559952833.png)
- add()
- has()
- size
- delete()
- clear()
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691559997953.png)
- add()返回集合的实例，所以可以将多个添加操作连缀起来，包括初始化
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691560058246.png)
- 与 Map 类似，Set 可以包含任何 JavaScript 数据类型作为值
- 相当于使用严格对象相等的标准来检查值的匹 配性
- delete()返回一个布尔值，表示集合中是否存在要删除的值

## Order and Iteration

- 支持按顺序迭代
  - 可以直接对集合实例使用扩展操作，把集合转换为数组
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691560666901.png)
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691560672263.png)
    - forEach()
    - 传入的回调接收可选的第二个参数，这个参数用于重写回调内部 this 的值

## Defining Formal Set Operations

- 子类化 Set
  - 定义一 个实用函数库
  - 两种方式合二为一，可以在子类上实现静态方法，然后在实例方法中使用这些静态 方法
