---
Datereviewed: 
reviewed: 
difficulty: 
comment: 
title: dataview
type: D
DateStarted: 2023-08-09
DateModified: 2024-04-25
status:
  - Snooze
Up:
  - - Typed Array-定型数组
aliases:
  - JS Dataview
topic:
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
---

## Dataview

- 功能
  - 同 [Typed Array](Typed-Array-定型数组)
- 特点
  - for file I/O and network I/O
  - allows for a high degree of control when manipulating buffer data, but it offers reduced performance-支持对缓冲数据高度控制，但性能相对差些
  - does not assume anything about the buffer contents-对缓冲内容无预设
  - is not iterable-不能迭代
- Dataview 实例
  - 特点
    - 必须在对已有的 ArrayBuffer (缓冲) 读取或写入时才能创建
    - 可以使用全部或部分 ArrayBuffer
    - 维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置
  - 属性
    - `.buffer`
    - `.byteOffset` 称为**字节偏移量**，即视图在缓冲中开始的位置
    - `byteOffset=0` 表示**视图从缓冲第 1 个字节开始**
    - **`byteOffset=8`** 表示视图从缓冲的第 9 个字节开始
    - `.byteLength` 表示视图字节长度
- Dataview 实例创建方式 - new Dataview()参数 - 1st **使用的 ArrayBuffer** - 2nd **byteOffset** - 3rd **byteLength** - 新建一个 Dataview，让其使用整个 ArrayBuffer （默认）;;;`const fullDataView = new Dataview(buf);`
  <!--SR:!2023-08-21,6,250!2023-08-22,7,250-->
      - 新建一个Dataview，让其从缓冲起点开始，限制使用前8个字节缓冲;;; `new Dataview(buf, 0, 8)`
  <!--SR:!2023-08-23,8,250!2023-08-24,9,250-->
- 🟨 用 Dataview 读取缓冲，还需的几个组件
  - [JS ElementType](ElementType)
    - Dataview 针对每种 ElementType 均暴露了 `get`, `set` 方法
  - [JS Endianness](Endianness-字节序)
  - Corner Cases 边界情形
