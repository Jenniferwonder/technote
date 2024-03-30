---
title: Assign Merge Copy Objects (ES6 对象合并复制)
Topic:
  - Objects
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-02-02
DateDo:
DateDone:
DateDue:
DateReviewed: 2024-01-29
Reviewed: 1
Difficulty: Good
status:
  - ToUse
Comment:
---

## Assign Merge Objects (ES6 对象合并)

?

- `Object.assign()`
  - 把源对象所有的本地属性一起复制到目标对象上，目标对象通过混入源对象的属性得到了增强
  - 参数
    - 一个目标对象
    - 一个或多个源对象
  - 示例
    - ![](./z-Assets/1692023788442.png)
    - ![](./z-Assets/1692023800667.png)
  - 特点
    - 对每个源对象执行的是浅复制
      - ![](./z-Assets/1692024049086.png)
    - 如果多个源对象都有相同的属性，则使 用最后一个复制的值
      - ![](./z-Assets/1692023999809.png)
    - 不能在两个对象间转移获取函数和设置函数
