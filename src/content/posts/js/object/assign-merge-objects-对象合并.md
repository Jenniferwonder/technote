---
aliases:
  - Assign Merge Objects-ES6 对象合并
title: Assign Merge Objects-ES6 对象合并
topic:
  - Objects
type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-04-25
Datereviewed: 2024-01-29
reviewed: 1
difficulty: Good
status:
  - ToUse
comment: 
linter-yaml-title-alias: Assign Merge Objects-ES6 对象合并
category: Programming
draft: false
---

# Assign Merge Objects-ES6 对象合并

- `Object.assign()`
  - 把源对象所有的本地属性一起复制到目标对象上，目标对象通过混入源对象的属性得到了增强
  - 参数
    - 一个目标对象
    - 一个或多个源对象
  - 示例
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692023788442.png)
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692023800667.png)
  - 特点
    - 对每个源对象执行的是浅复制
      - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692024049086.png)
    - 如果多个源对象都有相同的属性，则使 用最后一个复制的值
      - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1692023999809.png)
    - 不能在两个对象间转移获取函数和设置函数
