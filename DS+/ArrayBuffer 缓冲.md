---
Title: ArrayBuffer 缓冲
Type: D
DateStarted: 2023-08-09
DateModified: 2023-11-28
status:
  - Snooze
Up:
  - - Typed Array-定型数组
LeadTime: "2"
Page-D: "0"
Cards-D: "0"
DateDone: 2023-08-08T00:00:00.000+08:00
DateDo: 2023-08-07T00:00:00.000+08:00
EST: "-19575"
Topic:
  - DS+
---

# ArrayBuffer 缓冲

- 定义
  - 是一块 **allocated memory-预分配内存**
  - 是所有**定型数组及视图**引用的基本单位 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a949b9f3-3b65-c7d9)
- 变体
  - **SharedArrayBuffer**
    - 可以无须复制就在执行上下文间传递它 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1b4b8715-6f67-9be9)
    - 参考 [[C27-Workers]]
- ArrayBuffer() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=7ab34090-1e66-e3fa) - 定义 - 一个 JavaScript 构造函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b334972c-db54-863b) - 功能 - 可用于**在内存中分配特定数量的字节空间** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f10694c3-087a-9f6c) - 在内存中分配 16 字节 (Byte) ;;;`const buf = new ArrayBuffer(16)`
  <!--SR:!2023-08-25,10,250!2023-08-22,7,250-->
      - 获取一个变量的字节长度;;;`const buf = new ArrayBuffer(16)`
  <!--SR:!2023-08-25,10,250!2023-08-24,9,250-->
- 特点 - ArrayBuffer 一经创建就不能**再调整大小** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1da5596a-436b-d980) - ArrayBuffer 用 `.slice()`;;;可将 ArrayBuffer 复制其全部或部分到一个新实例中
<!--SR:!2023-08-25,10,250!2023-08-21,6,250-->
