---
title: Typed Array History-历史
type: D
DateStarted: 2023-08-09
DateModified: 2024-04-19
status:
  - Snooze
Up:
  - - Typed Array-定型数组
topic:
  - Array
  - DS+
category: Programming
tags:
  - JavaScript
draft: true
---

# [Typed Array](Typed-Array-定型数组) History-历史

- WebGL
  - 2006 年，目的（Mozilla、Opera 等浏览器提供商提出）
    - WebGL 目的是**充分利用 3D 图形 API 和 GPU 加速**，以便在`<canvas>`元素上渲染复杂的图形
  - OpenGL ES
    - 英文全称：**OpenGL for Embedded Systems**
    - 是 OpenGL 专注于 2D 和 3D 计算机图形的子集
    - JavaScript API 基于 OpenGL ES 2.0 规范的
  - 2011 年，发布 1.0 版
    - 这个新 API 被命名为 WebGL，全称 **Web Graphics Library**
  - 早期版本存在性能问题
    - 原因是**JavaScript 数组与原生数组之间不匹配**
      - 图形 驱动程序 API 通常不需要以 JavaScript 默认**双精度浮点格式-double floating point**传递给它们的数值，而这恰恰是 JavaScript 数组在内存中的格式
- 定型数组 - 目的 - 为解决**WebGL 早期版本性能问题** - `CanvasFloatArray`(Mozilla 推出) - 最终变成 `Float32Array` - 定义 - 是首个可用的提供 **JS 接口**、**C 语言**风格浮点值的**定型数组“类型”** - JavaScript 运行时使用这个类型可以分配、读取和写入数组。 - 这个数组可以直接传给底层图形驱动程序 API，也可以直接从底层获取到。 - 是 **one type of view-一种视图** 📌 - 功能 - Allow the JavaScript runtime to \*\*access (访问) `ArrayBuffer
<!--SR:!2023-08-22,7,250!2023-08-23,8,250!2023-08-25,10,250!2023-08-21,6,250!2023-08-23,8,250!2023-08-21,6,250!2023-08-21,6,250!2023-08-24,9,250!2023-08-23,8,250!2023-08-22,7,250-->
