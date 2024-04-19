---
title: Map
type: D
DateStarted: 2023-07-29
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

# Map

## 创建方式

- 构造函数
  - `const m = new Map()`
- 构造函数参数（初始化实例）
  - 嵌套数组
  - 自定义迭代器 iterator
  - 空数组
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691557774350.png)
  - 在映射中用作键和值的对象及其他“集合”类型，在自己的内容或属性被修改时 仍然保持不变
  - delete()和 clear()
  - size 属性
  - set()方法再添加键/值对。另外，可以使用 get()和 has()进行查询
  - 使用严格对象相等的标准来检查键的匹配性
  - 与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序
  - set()方法返回映射实例，因此可以把多个操作连缀起来，包括初始化声明
  - 迭代操作
  - alert(m.entries === m[Symbol.iterator]); // true
  - Symbol.iterator 属性
  - entries()方法
  - console.log([...m]); // [key1,val1],[key2,val2],[key3,val3](key1,val1],[key2,val2],[key3,val3)
  - forEach(callback, opt_thisArg)
  - 传入的回调接收可选的第二个参数，这个参数用于重写回调 内部 this 的值
  - keys()和 values()
  - 键和值在迭代器遍历时是可以修改的

## 选择 Object 还是 Map

- Map 大约可以比 Object 多存储 50%的键/值对
- 内存占用
- 插入性能
- 查找速度
- 删除性能
- 插入 Map 在所有浏览器中一般会稍微快 一点儿
- 如果只包含少量键/值对， 则 Object 有时候速度更快。
- Map 的 delete()操作都比插入和查找更快
