---
Title: Object Prototype (Prototype Chain)
tags:
  - JavaScript
Topic:
  - OOP
Type: D
DateStarted: 2022-12-02
DateDo: 
DateDone: 
DateDue: 
DateModified: 2024-01-29
DateReviewed: 
status:
  - ToCapture
Difficulty: Hard
Comment: 
Reviewed: 1
---

## Reference
- [Inheritance and the prototype chain - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)  
- [Object prototypes - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes)
- [一文吃透所有 JS 原型相关知识点](https://juejin.cn/post/6844903984335945736 "https://juejin.cn/post/6844903984335945736")
- [最详尽的 JS 原型与原型链终极详解](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fdee9f8b14771 "https://www.jianshu.com/p/dee9f8b14771")
- [深入理解 JavaScript 原型](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fs%2F1UDILezroK5wrcK-Z5bHOg "https://mp.weixin.qq.com/s/1UDILezroK5wrcK-Z5bHOg")
- [【THE LAST TIME】一文吃透所有 JS 原型相关知识点](https://juejin.cn/post/6844903984335945736 "https://juejin.cn/post/6844903984335945736")
- [重新认识构造函数、原型和原型链](https://juejin.cn/post/6844903779079290887 "https://juejin.cn/post/6844903779079290887")
- [JavaScript 深入之从原型到原型链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2Fblog%2Fissues%2F2 "https://github.com/mqyqingfeng/blog/issues/2")
- [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（一）](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fdee9f8b14771 "https://www.jianshu.com/p/dee9f8b14771")
- [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（二）](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2F652991a67186 "https://www.jianshu.com/p/652991a67186")
- [最详尽的 JS 原型与原型链终极详解，没有「可能是」。（三）](https://link.juejin.cn?target=https%3A%2F%2Fwww.jianshu.com%2Fp%2Fa4e1e7b6f4f8 "https://www.jianshu.com/p/a4e1e7b6f4f8")
- [JavaScript 引擎基础：原型优化](https://link.juejin.cn?target=https%3A%2F%2Fhijiangtao.github.io%2F2018%2F08%2F21%2FPrototypes%2F "https://hijiangtao.github.io/2018/08/21/Prototypes/")
- [Prototypes in JavaScript](https://link.juejin.cn?target=https%3A%2F%2Fmedium.com%2Fbetter-programming%2Fprototypes-in-javascript-5bba2990e04b "https://medium.com/better-programming/prototypes-in-javascript-5bba2990e04b")
- [JavaScript 深入之创建对象的多种方式以及优缺点](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F15 "https://github.com/mqyqingfeng/Blog/issues/15")
- [详解 JS 原型链与继承](https://link.juejin.cn?target=http%3A%2F%2Flouiszhai.github.io%2F2015%2F12%2F15%2FprototypeChain%2F "http://louiszhai.github.io/2015/12/15/prototypeChain/")
- [从**proto**和 prototype 来深入理解 JS 对象和原型链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fcreeperyang%2Fblog%2Fissues%2F9 "https://github.com/creeperyang/blog/issues/9")
- [代码复用模式](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fjayli%2Fjavascript-patterns%2Fblob%2Fmaster%2Fchapter6.markdown "https://github.com/jayli/javascript-patterns/blob/master/chapter6.markdown")
- [JavaScript 中的继承：ES3、ES5 和 ES6](https://link.juejin.cn?target=http%3A%2F%2Ftianfangye.com%2F2017%2F12%2F31%2Finheritance-in-javascript-es3-es5-and-es6%2F "http://tianfangye.com/2017/12/31/inheritance-in-javascript-es3-es5-and-es6/")

## What is Prototype
### Prototype
- 原型被定义为给其它对象提供共享属性的对象，函数的实例可以共享原型上的属性和方法
- to reuse code and combine objects.
- built-in property called **prototype**, which is itself an [[Object]]
### Prototype Chain
- The prototype will have its own prototype, making what's called a **prototype chain**.
- The chain ends when we reach a prototype that has `null` for its own prototype.
- 它的作用就是当你在访问一个对象上属性的时候，如果该对象内部不存在这个属性，那么就会去它`__proto__`属性所指向的对象（原型对象）上查找。如果原型对象依旧不存在这个属性，那么就会去其原型的`__proto__`属性所指向的原型对象上去查找。以此类推，直到找到`nul`，而这个查找的线路，也就构成了我们常说的**原型链**
## [[Object Prototype Properties and Method (原型属性与方法)]]
## More Questions
  - How Prototypes Work
  - Understanding the Prototype Hierarchy
  - Prototypes and the “in” Operator
  - Property Enumeration Order
- 对象迭代-Object Iteration
  - 其他原型语法-Alternate Prototype Syntax
  - 原型的动态性-Dynamic Nature of Prototypes
  - 原生对象原型-Native Object Prototypes
  - 原型的问题
- 默认原型
- 原型与继承关系-Prototype and Instance Relationships
- 原型链的问题
	- 缺点：引用类型的属性被所有实例共享  
	- The prototype chain's behavior is less like inheritance and more like **delegation**.
- 方法
- 原型模式-The Prototype Pattern