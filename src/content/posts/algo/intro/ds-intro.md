---
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - DS Intro
draft: true
title: DS Intro
type: D
topic:
  - Algo
DateStarted: 2023-09-07
DateModified: 2024-04-19
status: 
category: Programming
tags:
  - Algo
linter-yaml-title-alias: DS Intro
---

# DS Intro

## 程序设计= **数据结构+算法** 

## ⭐ 重点

### 为什么需要

### 特性

### 案例

### 优劣

### 操作

### 应用

## 1.4 　基本概念和术语 ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693552954849.png)

### 1.4.1 　数据

- 是描述客观事物的符号，是计算机中可以操作的对象，是能被计 算机识别，并输入给计算机处理的符号集合

### 1.4.2 　数据元素

- 是组成数据的、有一定意义的基本单位，在计算机中通常作 为整体处理。也被称为记录

### 1.4.3 　数据项

- 是数据不可分割的最小单位

### 1.4.4 　数据对象

- 是性质相同的数据元素的集合，是数据的子集

### 1.4.5 　数据结构

- 结构
  - 关系
  - 是指各个组成部分相互搭配和排列的方式
- 数据结构：是**相互之间存在一种或多种特定关系的数据元素的集合**

## 1.5 　逻辑结构与物理结构

### 1.5.1 　逻辑结构

- 集合结构 (散列结构, ==散列表==)
  - 集合结构中的数据元素除了同属于一个集合外，它们之间没有其他关系
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693551791349.png)
  - 案例
    - 题库
    - 商店商品
  - 特性
    - 集合里的元素类型不一定相同
    - 集合里的元素没有顺序
  - 为什么需要散列表 c)
  - 散列表的读写操作 8)
  - ==集合==
  - ==映射==
  - ==BitMap==
    - **_Bitmap 算法 (图算法)_** 3)
  - **_哈希函数_** 8)
- 线性结构
  - 线性结构中的数据元素之间是**一对一**的关系
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693551921768.png)
- 树形结构
  - 树形结构中的数据元素之间存在一种**一对多**的层次关系
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693551970530.png)
- 图形结构
  - 图形结构的数据元素是**多对多**的关系
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693552009255.png)

### 1.5.2 　物理结构

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1693553718264image.png) 顺序存储结构
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693553223233.png)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1693553831167image.png)链式存储结构
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693553231318.png)

## 1.6 　抽象数据类型

### ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1693554002377image.png)1.6.1 　数据类型

- 是指一组性质相同的值的集合及定义在此集合上的一些操作的总称
- 按照值的不同进行划分的

### 1.6.2 　抽象数据类型 (ADT)

- 是指一个数学模型及定 义在该模型上的一组操作
  - “抽象”的意义在于数据类型的 数学抽象特性
  - 一个抽象数据类型定义了：一个数据对象、数据对象中各数据元素之间的关系及对数据元素的操作
- 体现了程序设计中问题分解、抽象和信息隐藏的特性
