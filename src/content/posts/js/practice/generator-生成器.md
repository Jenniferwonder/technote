---
title: 生成器
type: D
DateStarted: 2023-08-13
DateModified: 2024-04-19
status:
  - Young
aliases:
  - Generator
  - 生成器
topic:
  - Practice
category: Programming
tags:
  - JavaScript
draft: true
---

# Generator-生成器

- 形式
  - 生成器的形式是一个函数，函数 **名称前面加一个星号`（*）`**表示它是一个生成器
  - 标识生成器函数的星号 **不受** 两侧空格的影响
- 功能
  - 拥有在一个函数块内 **暂停和恢复代码执行** 的能力
  - 使用生成器可以自定义 **迭代器和实现协程**
- 特点
  - 只要是可以定义函数的地方，就可以定义生成器
  - 箭头函数不能用来定义生成器函数。
- 定义方式
  - // 生成器函数声明
    - function\* generatorFn() {}
  - // 生成器函数表达式
    - let generatorFn = function\* () {}
  - // 作为对象字面量方法的生成器函数
    - let foo = { \* generatorFn() {} }
  - // 作为类实例方法的生成器函数
    - class Foo { \* generatorFn() {} }
  - // 作为类静态方法的生成器函数
    - class Bar { static \* generatorFn() {} }
- 生成器对象
  - 一开始处于暂停执行（suspended）的 状 态
  - 生成器对象也实现了 Iterator 接口，因此具有 next()方法
    - 调用这个方法会让生成器 开始或恢复执行。
    - 生成器函数只会在初次调用 **`next()`方法**后开始执行
    - next()方法的返回值
      - done 属性
        - 函数体为空的生成器 函数中间不会停留，调用一次 next()就会让生成器到达 done: true 状态
      - value 属性
        - value 属性是生成器函数的返回值，默认值为 undefined，可以通过生成器函数的返回值指定
  - 生成器对象实现了 Iterable 接口，它们默认的迭代器是自引用的
- 通过 yield 中断执行-Interrupting Execution
  - 特点
    - yield 关键字可以让生成器停止和开始执行，也是生成器最有用的地方
    - yield 关键字只能在生成器函数内部使用，用在其他地方会抛出错误
    - 出现在嵌套的非生成器函数中会抛出语法错误
  - 生成器对象作为可迭代对象 (Iterable)
    - 在生成器对象上显式调用 next()方法的用处并不大
    - 如果把生成器对象当成可迭代对象， 那么使用起来会更方便
  - 使用 yield 实现输入和输出
  - 产生可迭代对象-Yielding an Iterable
  - 使用 `yield*`实现递归算法
- 生成器作为默认迭代器-Using a Generator as the Default Iterator
- 提前终止生成器-Early Termination of Generators - The return() Method - The throw() Method
