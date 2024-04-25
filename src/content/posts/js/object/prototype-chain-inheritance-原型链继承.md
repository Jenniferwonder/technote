---
draft: false
aliases:
  - Prototype Chain Inheritance-原型链继承
title: Prototype Chain Inheritance-原型链继承
tags:
  - JavaScript
topic:
  - OOP
type: D
DateStarted: 2022-12-02
DateModified: 2024-04-25
Datereviewed: 
status:
  - ToCapture
difficulty: Hard
comment: 
reviewed: 1
linter-yaml-title-alias: Prototype Chain Inheritance-原型链继承
category: Programming
---

# Prototype Chain Inheritance-原型链继承

### 理解原型链 (Prototype Chain)

原型链是 JavaScript 中实现继承的一种机制，它通过让一个对象的原型指向另一个对象，从而使得一个对象可以访问另一个对象中定义的属性和方法。当我们试图访问一个对象中不存在的属性或方法时，JavaScript 引擎会沿着原型链一直向上查找，直到找到该属性或方法为止，或者最终抵达 Object.prototype（所有对象的祖先）上停止查找。  
The prototype will have its own prototype, making what's called a **prototype chain**. The chain ends when we reach a prototype that has `null` for its own prototype.  
它的作用就是当你在访问一个对象上属性的时候，如果该对象内部不存在这个属性，那么就会去它`__proto__`属性所指向的对象（原型对象）上查找。如果原型对象依旧不存在这个属性，那么就会去其原型的`__proto__`属性所指向的原型对象上去查找。以此类推，直到找到`nul`，而这个查找的线路，也就构成了我们常说的**原型链**

### 原型链继承

> [prototype-chain-inheritance-原型链继承]()

- `SubType.prototype = new SuperType();`
- 通过原型链实现继承之后，搜索就可以继承向上，搜索原型的原型
  - 原型链扩展了前面描述的原型搜索机制
- 任何函数的默认原型都是一个 Object 的实例
- 子类有时候需要覆盖父类的方法，或者增加父类没有的方法
  - 这些方法必须在原型赋值之后再添加到原型上
  - 上述两个方法都是在把原型赋值为 SuperType 的实例之后定义的

#### 特点

实例可继承的属性有：

- 实例的构造函数的属性
  - 属性通常会在构造函数中定义而不会定义在原型上
- 父类构造函数属性
- 父类原型的属性（新实例不会继承父类实例的属性）

#### 原型链继承的问题

- The prototype chain's behavior is less like inheritance and more like **delegation**.
- 原型中包含的引用值会在所有实例间共享，会导致所有实例默认都取得相同的属性值
- 原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！
- 继承单一，新实例无法向父类构造函数传参

## [Prototype Pattern-原型模式](prototype-pattern-原型模式)

## Reference

- [Inheritance and the prototype chain - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [Object prototypes - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [一文吃透所有 JS 原型相关知识点](https://juejin.cn/post/6844903984335945736 https://juejin.cn/post/6844903984335945736)
- [最详尽的 JS 原型与原型链终极详解](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fdee9f8b14771 https://www.jianshu.com/p/dee9f8b14771)
- [深入理解 JavaScript 原型](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2F1UDILezroK5wrcK-Z5bHOg https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg)
- [【THE LAST TIME】一文吃透所有 JS 原型相关知识点](https://juejin.cn/post/6844903984335945736 https://juejin.cn/post/6844903984335945736)
- [重新认识构造函数、原型和原型链](https://juejin.cn/post/6844903779079290887 https://juejin.cn/post/6844903779079290887)
- [JavaScript 深入之从原型到原型链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2Fblog%2Fissues%2F2 https://github.com/mqyqingfeng/blog/issues/2)
- [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fdee9f8b14771 https://www.jianshu.com/p/dee9f8b14771)
- [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（二）](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F652991a67186 https://www.jianshu.com/p/652991a67186)
- [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（三）](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fa4e1e7b6f4f8 https://www.jianshu.com/p/a4e1e7b6f4f8)
- [JavaScript 引擎基础：原型优化](https://link.juejin.cn?target=https%3A%2F%2Fhijiangtao.github.io%2F2018%2F08%2F21%2FPrototypes%2F https://hijiangtao.github.io/2018/08/21/Prototypes/)
- [Prototypes in JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2Fbetter-programming%2Fprototypes-in-javascript-5bba2990e04b https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b)
- [JavaScript 深入之创建对象的多种方式以及优缺点](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F15 https://github.com/mqyqingfeng/Blog/issues/15)
- [详解 JS 原型链与继承](https://link.juejin.cn?target=http%3A%2F%2Flouiszhai.github.io%2F2015%2F12%2F15%2FprototypeChain%2F http://louiszhai.github.io/2015/12/15/prototypeChain/)
- [从**proto**和 prototype 来深入理解 JS 对象和原型链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fcreeperyang%2Fblog%2Fissues%2F9 https://github.com/creeperyang/blog/issues/9)
- [代码复用模式](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjayli%2Fjavascript-patterns%2Fblob%2Fmaster%2Fchapter6.markdown https://github.com/jayli/javascript-patterns/blob/master/chapter6.markdown)
- [JavaScript 中的继承：ES3、ES5 和 ES6](https://link.juejin.cn?target=http%3A%2F%2Ftianfangye.com%2F2017%2F12%2F31%2Finheritance-in-javascript-es3-es5-and-es6%2F http://tianfangye.com/2017/12/31/inheritance-in-javascript-es3-es5-and-es6/)

## More Questions

- Prototypes and the “in” Operator
- Property Enumeration Order
- 对象迭代-Object Iteration
  - 其他原型语法-Alternate Prototype Syntax
  - 原型的动态性-Dynamic Nature of Prototypes
  - 原生对象原型-Native Object Prototypes
