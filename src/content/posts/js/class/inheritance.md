---
draft: false
title: Inheritance-继承
topic:
  - Classes
  - OOP
type: D
tags:
  - JavaScript
DateStarted: 2022-12-05
DateModified: 2024-04-25
Datereviewed: 2024-02-03
reviewed: 0
difficulty: Hard
status:
  - ToUse
comment: 
linter-yaml-title-alias: Inheritance-继承
aliases:
  - Inheritance-继承
category: Programming
---

# Inheritance-继承

### OOP 语言支持的继承

- 接口继承
  - 继承方法签名（不支持）
- 实现继承
  - 继承实际的方法
  - 实现继承是 ECMAScript 唯一支持的继承方式
  - 通过原型链实现

### 原型链继承

> [prototype-chain-inheritance-原型链继承](../object/prototype-chain-inheritance-原型链继承)

### 盗用构造函数继承

> [constructor-function-构造函数模式](../object/constructor-function-构造函数模式)

### 组合继承 (常用)

- 也叫伪经典继承
- ![image|375](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/c785cd107320990eed55400fb1ff58cf.png)
  - `SuperType.call(this, name);`
    - 通过盗用构造函数继承实例属性
  - `SubType.prototype = new SuperType();`
    - 使用原型链继承原型上的属性和方法，

#### 优点

- 综合了原型链和盗用构造函数，结合了二者优点，传参和复用
- 每个新实例引入的构造函数属性是私有的。
- 保留了`instanceof`操作符和`isPrototypeOf()`方法识别合成对象的能力

#### 效率问题

- 父类构造函数始终会被调用两次（耗内存）
  - 一次在是创建子类原型时调用
  - 另一次是在子类构造函数中调用
- 子类的构造函数会代替原型上的那个父类构造函数。
- 解决方案：
  - 🏷️ 寄生式组合继承

### ❓ 寄生式组合继承

- 使用寄生式继承来继承父类原型，但使用混合式原型链继承方法
- ![image](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/4d3ce511f14579e6cbdb3a723b1bcfb9.png)

#### 优点

- 寄生式组合继承可以算是引用类型继承的最佳模式
- 避免了`SubType.prototype`上不必要也用不到的属性

### 原型式继承

> [prototype-pattern-原型模式](../object/prototype-pattern-原型模式)

### ❓ 寄生式继承

重点： 就是给原型式继承外面套了个壳子。  
优点： 没有创建自定义类型，因为只是套了个壳子返回对象（这个），这个函数顺理成章就成了创建的新对象。  
缺点： 没用到原型，无法复用。

- 寄生构造函数和工厂模式
  - 创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象

#### 缺点

- 通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似

### Class 类实现继承

> [Class-ES6-类](class-es6-类)

通过 extends 和 super 实现继承

### Reference

- [Object-oriented programming - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [Object-oriented Programming in JavaScript: Made Super Simple | Mosh - YouTube](https://www.youtube.com/watch?v=PFmuCDHHpwk)

### ❓Use Case
