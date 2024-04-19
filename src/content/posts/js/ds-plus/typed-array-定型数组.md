---
title: Typed Array-定型数组
type: D
DateStarted: 2023-08-06
DateModified: 2024-04-19
status: Snooze
Pomo: 8
Pages: 5
Up:
  - - C06-Collection Reference Type-集合引用类型
Cards: 34
aliases: JS Typed Array
topic:
  - Array
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
---

# Typed Array-定型数组

## 基本概念

- 历史
  - [Typed Array History-历史](Typed-Array-History-历史)
- 目的
  - 提高与 WebGL 等原生库交换二进制数据的效率 (efficiently passing binary data to native libraries)
- 功能
  - 读取或写入 [Array Buffer](ArrayBuffer-缓冲)，引用 ArrayBuffer 中存储的二进制数据
- 特点
  - 特定于一种 [JS ElementType](ElementType)
  - 遵循系统原生的 [字节序](Endianness-字节序)
  - 提供了适用面更广的 API 和更高的性能
  - 没有用任何值初始化，则其关联的缓冲会以 0 填充
- 相关概念
  - [ArrayBuffer 缓冲](ArrayBuffer-缓冲)
  - [Dataview](Dataview)
  - 一个字节有 8 位（1 byte = **8** bits）
    - `Int32Array` 数组每个元素需要 **4** 字节
    - 用 12 字节的缓冲可以创建一个长度为 **3** 的 Int32Array 定型数组

## 创建方式

- 通过 [JS ElementType](ElementType)
  - `<ElementType>.from()`和`<ElementType>.of()`
- 通过构造函数（构造函数参数）
- ?
  - 指定缓冲
    - `new Int32Array(buf)`
  - 指定长度
    - `new Int32Array(length)`
  - 指定元素值
    - `const ints3 = new Int32Array([2, 4, 6, 8]);`
  - 已有的定型数组（复制 ints3 的值创建一个 `Int16Array`）
    - `const ints4 = new Int16Array(ints3);`

## 实例属性

- BYTES_PER_ELEMENT
  - 返回该类型数组中每个元素的大小

## 实例方法

- 与普通数组相似的方法
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691479384516.png)
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691479394996.png)
- 拼、删、增、截、改
  - 不适用的方法
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691479512448.png)
  - 复制数据的新方法
    - set()
      - 从提供的数组或定型数组中把值复制到当前定型数组中指定的索引位置
        - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691479695992.png)
      - subarray()
        - 基于从原始定型数组中复制的值返回一个新定型数组
        - 开始索引和结束索引可选
        - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691479818115.png)
  - 拼接方法
- 🟨 下溢和上溢-Underflow and Overflow
<!--SR:!2023-08-25,10,250-->
