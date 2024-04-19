---
title: Endianness 字节序
type: D
DateStarted: 2023-08-09
DateModified: 2024-04-19
status:
  - Snooze
aliases:
  - Endianness
  - 字节序
Up:
  - - Typed Array-定型数组
topic:
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
---

## Endianness 字节序

- 定义
  - 计算系统维护的一种字节顺序的约定
- Dataview 支持的字节序
  - Big-Endian (大端字节序) -默认
    - 也称为“网络字节序”，意思 是最高有效位保存在第一个字节，而最低有效位保存在最后一个字节
  - Small-Endian (小端字节序)
    - 正好相反，即最低有效位保存在第一个字节，最高有效位保存在最后一个字节
