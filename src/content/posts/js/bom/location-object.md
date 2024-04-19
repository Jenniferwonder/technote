---
title: Location Object
type: D
tags:
  - JavaScript
topic:
  - Objects
  - BOM
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
DateStarted: 2023-08-11
DateModified: 2024-04-19
category: Programming
draft: true
---

## THE LOCATION OBJECT

- Query String Arguments
  - URLSearchParams
  - location.search
    - 返回了从问号开始直到 URL 末尾的所有内容，但没有办法逐个访问每个查询参数
  - URLSearchParams
    - 提供了一组标准 API 方法，通过它们可以检查和修改查询字符串
    - 给 URLSearchParams 构造函数传入一个查询字符串，就可以创建一个实例
    - 这个实例上暴露了 get()、 set()和 delete()等方法，可以对查询字符串执行相应操作
    - 大多数支持 URLSearchParams 的浏览器也支持将 URLSearchParams 的实例用作可迭代对象
- Manipulating the Location
  - assign()方法
  - 传入一 个 URL
  - 可以通过修改 location 对象修改浏览器的地址
  - location.assign(http://www.wrox.com);
  - 这行代码会立即启动导航到新 URL 的操作，同时在浏览器历史记录中增加一条记录
  - 如果给 location.href 或 window.location 设置一个 URL，也会以同一个 URL 值调用 assign()方法。
  - 3 种修改浏览器地址的方法中，设置 location.href 是最常见的。
  - window.location = http://www.wrox.com;
  - location.href = http://www.wrox.com;
  - 修改 location 对象的属性也会修改当前加载的页面。其中，hash、search、hostname、pathname 和 port 属性被设置为新值之后都会修改当前 URL
  - reload()
  - 能重新加载当前显示的页面
  - replace()方法
  - 这个方法接 收一个 URL 参数，但重新加载后不会增加历史记录
  - 调用 replace()之后，用户不能回到前一页
- 提供了当前窗口中加载文档的信息，以及通常的导航功能。
- 它既是 window 的属性，也是 document 的属性
- window.location 和 document.location 指向同一个对象
- 不仅保存着当前加载文 档的信息
- 也保存着把 URL 解析为离散片段后能够通过属性访问的信息
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737032733.png)
