---
Title: Dataviews
Type: D
DateStarted: 2023-08-09
DateModified: 2023-11-28
status:
  - Snooze
Up:
  - - Typed Array-定型数组
aliases:
  - JS Dataview
LeadTime: "1"
Page-D: "0"
Cards-D: "0"
DateDo: 2023-08-08T00:00:00.000+08:00
DateDone: 2023-08-08T00:00:00.000+08:00
EST: "-19576"
Topic:
  - DS+
---

## Dataview

- 功能
  - 同 [Typed Array](Typed%20Array-定型数组.md)
- 特点
  - for file I/O and network I/O [📌](obsidian://jump-to-pdf?id=ProJS-EN&annotate=79c3f16c-f7ae-5d44)
  - allows for a high degree of control when manipulating buffer data, but it offers reduced performance-支持对缓冲数据高度控制，但性能相对差些 [📌](obsidian://jump-to-pdf?id=ProJS-EN&annotate=9495318c-d3ef-35ce)
  - does not assume anything about the buffer contents-对缓冲内容无预设 [📌](obsidian://jump-to-pdf?id=ProJS-EN&annotate=e893ee4f-a627-9a34)
  - is not iterable-不能迭代 [📌](obsidian://jump-to-pdf?id=ProJS-EN&annotate=32a1e34c-39a8-2cf2)
- Dataview 实例
  - 特点
    - 必须在对已有的 ArrayBuffer (缓冲) 读取或写入时才能创建 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d8d32404-53b2-e0b4)
    - 可以使用全部或部分 ArrayBuffer [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5af96120-9f11-d595)
    - 维护着对该缓冲实例的引用，以及视图在缓冲中开始的位置 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6e19ce86-9f53-715b)
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
  - [JS ElementType](ElementType.md)
    - Dataview 针对每种 ElementType 均暴露了 `get`, `set` 方法
  - [JS Endianness](Endianness%20字节序.md)
  - Corner Cases 边界情形 [📌](obsidian://jump-to-pdf?id=ProJS-EN&annotate=167a2ccf-016b-39fc)
