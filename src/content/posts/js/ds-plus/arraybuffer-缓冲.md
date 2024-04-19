---
title: ArrayBuffer 缓冲
type: D
DateStarted: 2023-08-09
DateModified: 2024-04-19
status:
  - Snooze
Up:
  - - Typed Array-定型数组
topic:
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
---

# ArrayBuffer 缓冲

- 定义
  - 是一块 **allocated memory-预分配内存**
  - 是所有**定型数组及视图**引用的基本单位
- 变体
  - **SharedArrayBuffer**
    - 可以无须复制就在执行上下文间传递它
    - 参考 [C27-Workers](C27-Workers)
- ArrayBuffer() - 定义 - 一个 JavaScript 构造函数 - 功能 - 可用于**在内存中分配特定数量的字节空间** - 在内存中分配 16 字节 (Byte) ;;;`const buf = new ArrayBuffer(16)`
  <!--SR:!2023-08-25,10,250!2023-08-22,7,250-->
      - 获取一个变量的字节长度;;;`const buf = new ArrayBuffer(16)`
  <!--SR:!2023-08-25,10,250!2023-08-24,9,250-->
- 特点 - ArrayBuffer 一经创建就不能**再调整大小** - ArrayBuffer 用 `.slice()`;;;可将 ArrayBuffer 复制其全部或部分到一个新实例中
<!--SR:!2023-08-25,10,250!2023-08-21,6,250-->
