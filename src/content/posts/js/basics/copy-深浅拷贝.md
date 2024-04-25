---
draft: false
title: Copy-深浅拷贝
tags:
  - JavaScript
comment: 
type: D
topic:
  - Practice
DateStarted: 2022-12-16
DateModified: 2024-04-25
Datereviewed: 
status: 
difficulty: Hard
reviewed: 0
aliases:
  - Copy-深浅拷贝
linter-yaml-title-alias: Copy-深浅拷贝
category: Programming
---

# Copy-深浅拷贝

### 什么是深拷贝、什么是浅拷贝？
浅拷贝： 创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个 地址，就会影响到另一个对象。  
深拷贝： 会拷贝所有的属性，并拷贝属性指向的动态分配的内存。当对象和它所引用的对象一起拷贝时即 发生深拷贝。 深拷贝相比于浅拷贝速度较慢并且花销较大。拷贝前后两个对象互不影响。

### Reference

- [JavaScript 基础心法——深浅拷贝](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Faxuebin%2Farticles%2Fissues%2F20 https://github.com/axuebin/articles/issues/20)
- [深拷贝的终极探索（90%的人都不知道）](https://juejin.cn/post/6844903692756336653 https://juejin.cn/post/6844903692756336653)
- [JavaScript 专题之深浅拷贝](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F32 https://github.com/mqyqingfeng/Blog/issues/32)
- [javaScript 中浅拷贝和深拷贝的实现](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fwengjq%2FBlog%2Fissues%2F3 https://github.com/wengjq/Blog/issues/3)
- [深入剖析 JavaScript 的深复制](https://link.juejin.cn?target=https%3A%2F%2Fjerryzou.com%2Fposts%2Fdive-into-deep-clone-in-javascript%2F https://jerryzou.com/posts/dive-into-deep-clone-in-javascript/)
- [「JavaScript」带你彻底搞清楚深拷贝、浅拷贝和循环引用](https://link.juejin.cn?target=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000015042902 https://segmentfault.com/a/1190000015042902)
- [面试题之如何实现一个深拷贝](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fyygmind%2Fblog%2Fissues%2F29 https://github.com/yygmind/blog/issues/29)