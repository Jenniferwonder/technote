---
Datereviewed: 
reviewed: 
difficulty: 
comment: 
draft: true
title: "List (线性表) "
type: D
topic:
  - List
DateStarted: 2023-09-07
DateModified: 2024-04-19
status: 
aliases:
  - "List (线性表) "
  - 线性表
category: Programming
tags:
  - Algo
linter-yaml-title-alias: "List (线性表) "
---

# List (线性表) ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693573540387.png)![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693628790889.png)

## 概念

### 3.2 　线性表的定义

- 是一种数据项构成的**有限**序列，即按照一定的**线性**顺序，排列而成的数据项 的集合 7a8)
<!--SR:!2023-09-13,3,250!2023-09-13,3,250-->

### 3.3 　线性表的抽象数据类型

### 3.4 　线性表的顺序存储结构

- 3.4.1 　顺序存储定义
- 3.4.2 　顺序存储方式
- 3.4.3 　数组 (Array) 长度与线性表长度区别
- 3.4.4 　地址计算方法
- 3.5 　顺序存储结构的插入与删除
  - 3.5.1 　获得元素操作
  - 3.5.2 　插入操作
  - 3.5.3 　删除操作
  - 3.5.4 　线性表顺序存储结构的优缺点

### 3.6 　线性表的链式存储结构

- 3.6.1 　顺序存储结构不足的解决办法
- 3.6.2 　线性表链式存储结构定义
- 3.6.3 　头指针与头结点的异同
- 3.6.4 　线性表链式存储结构代码描述

## ==[Array](Array)==

### 数组会用一些名为 **索引** 的数字来标识每项数据在数组中的位置 0cf)

<!--SR:!2023-09-13,3,250-->

### 操作

- 读
  - O(1)
- 增
- 删
  - O(n)
- 查
  - O(n)

## ==链表 ([Linked List](Linked-List))==

### ==单链表==

- 3.7 　单链表的读取
- 3.8 　单链表的插入与删除
  - 3.8.1 　单链表的插入
  - 3.8.2 　单链表的删除
- 3.9 　单链表的整表创建
- 3.10 　单链表的整表删除
- 3.11 　单链表结构与顺序存储结构优缺点

### 3.12 　==静态链表==

- 3.12.1 　静态链表的插入操作
- 3.12.2 　静态链表的删除操作
- 3.12.3 　静态链表优缺点

### 3.13 　==循环链表==

### 3.14 　==双向链表==

## [Stack and Queue](Stack-and-Queue)

### ==Stack (栈)==

- 4.2 　栈的定义
  - 后进先出
  - 案例
    - 撤销
    - 返回上级页面
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693574753074.png) ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693574770147.png)
  - 4.2.2 　进栈出栈变化形式
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1693574945553.png)
    - 3 个元素，就有 5 种可能的出栈次序， 如果元素数量多，其实出栈的变化将会更多
- 4.3 　栈的抽象数据类型
- 4.4 　栈的顺序存储结构及实现
  - 4.4.1 　栈的顺序存储结构
  - 4.4.2 　栈的顺序存储结构 ——进栈操作
  - 4.4.3 　栈的顺序存储结构 ——出栈
- 4.5 　两栈共享空间
- 4.6 　栈的链式存储结构及实现
  - 4.6.1 　栈的链式存储结构
  - 4.6.2 　栈的链式存储结构 ——进栈操作
  - 4.6.3 　栈的链式存储结构 ——出栈操作
- 4.7 　栈的作用
- 4.8 　栈的应用 ——**_递归_**
  - 4.8.1 　斐波那契数列实现
  - 4.8.2 　递归定义
- 4.9 　栈的应用 ——四则运算表达式求值 - 4.9.1 　后缀（逆波兰）表示法定义 - 4.9.2 　后缀表达式计算结果 - 4.9.3 　中缀表达式转后缀表达式
<!--SR:!2023-09-13,3,250-->

### ==Queue (队列)==

- 4.10 　队列的定义
  - 先进先出（First In First Out）
  - 案例
    - 键盘输入打字 > 屏幕显示
- 4.11 　队列的抽象数据类型
- 4.12 　循环队列
  - 4.12.1 　队列顺序存储的不足
  - 4.12.2 　循环队列定义
- 4.13 　队列的链式存储结构及实现
  - 4.13.1 　队列的链式存储结构 ——入队操作
  - 4.13.2 　队列的链式存储结构 ——出队操作

## ==[String](String) (串)==

### 5.2 　串的定义

- 是由零个或多个字符组成的有限序列，又名叫字符串
- 空格串
- 子串
- 主串

### 5.3 　串的比较

### 5.4 　串的抽象数据类型

### 5.5 　串的存储结构

- 5.5.1 　串的顺序存储结构
- 5.5.2 　串的链式存储结构

### 5.6 　朴素的模式匹配算法

### 5.7 　**_KMP 模式匹配算法_**

- 5.7.1 　 KMP 模式匹配算法原理
- 5.7.2 　 next 数组值推导
- 5.7.3 　 KMP 模式匹配算法实现
- 5.7.4 　 KMP 模式匹配算法改进
- 5.7.5 　 nextval 数组值推导
<!--SR:!2023-09-13,3,250-->