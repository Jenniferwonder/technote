---
aliases:
  - Context and Scope-执行上下文与作用域
draft: false
title: Context and Scope-执行上下文与作用域
tags:
  - JavaScript
type: D
topic:
  - Scope
DateStarted: 2023-07-28
DateModified: 2024-04-25
Datereviewed: 
status:
  - Mature
reviewed: 2
difficulty: 
comment: 
category: Programming
linter-yaml-title-alias: Context and Scope-执行上下文与作用域
---

# Context and Scope-执行上下文与作用域
>在 JavaScript 中，作用域、作用域链和执行上下文是密切相关的概念，它们与变量和函数的查找、访问以及生命周期有关。  
>**作用域** 是变量和函数的可访问范围；**作用域链** 是由当前执行上下文的作用域和其父级作用域组成的链表，用于在代码执行过程中查找变量和函数；**执行上下文**是代码执行过程中的环境，包含了当前执行的代码所需的所有信息。这三者共同决定了代码执行过程中变量和函数的查找、访问以及生命周期。

## 作用域 (Scope)
**作用域是一个变量或函数的可访问范围**。JavaScript 中有三种作用域：**全局作用域**、**局部（函数）作用域**和**块级作用域**。  
 变量的生命周期受其作用域的限制。  
 作用域最大的用处就是`隔离变量`，不同作用域下同名变量不会有冲突
### 全局作用域
- 声明的变量和函数可以在整个代码中访问，
- 全局作用域中的变量在整个程序执行过程中持续存在，
- In web browsers, the global context is said to be that of the window object
- created as properties and methods on the window object
- var
### 局部/函数作用域
- 声明的变量和函数只能在特定的函数内部访问，
- 是指声明在函数内部的变量，函数的作用域在函数定义的时候就决定了
- 局部作用域中的变量在函数执行结束时销毁
### 块级作用域
- 块级作用域在代码块执行结束时，块级作用域中的变量将被销毁。  
- 一对花括号内定义，对`let`和`const`关键字声明的变量有效。  
- 块作用域由`{ }`包括，if 和 for 语句里面的`{ }`也属于块作用域
	- Eg. if/ for loops
- 在块级作用域中，可通过 let 和 const 声明变量，该变量在指定块的作用域外无法被访问
	- let; const (not var)
- Related:: [variable-let-const-var-变量声明](variable-let-const-var-变量声明)
### 词法作用域的理解
词法作用域（有时也称为静态作用域）是在编程中用于确定变量可见性和生命周期的一种作用域规则。以下是对词法作用域的深入理解：
1. **定义时确定**：词法作用域是在代码的编写阶段定义的，而不是在运行时。换句话说，作用域是由代码的物理结构决定的，而不是它是如何被调用的。
2. **嵌套结构**：在词法作用域中，我们可以在一个函数内部定义另一个函数，从而形成一个嵌套的作用域链。内部函数可以访问其外部函数的变量和参数，但外部函数不能访问其内部函数的变量。
3. **与动态作用域的区别**：词法作用域与动态作用域是两种不同的作用域规则。在动态作用域中，作用域是由函数如何被调用决定的，而不是代码的结构。JavaScript 使用的是词法作用域，而不是动态作用域。
4. **闭包**：闭包是词法作用域和函数的强大组合。当函数能够记住并访问其词法作用域，即使当该函数在其原始词法作用域之外执行时，我们就称之为闭包。
5. **性能考虑**：由于词法作用域是在编译时确定的，编译器可以对代码进行优化。知道哪些变量在哪里被访问，以及它们如何被访问，可以帮助编译器提高代码的执行效率。
- JS => Lexical scoping which is defined by the placement of functions and blocks in the code
- [JavaScript 深入之词法作用域和动态作用域](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F3 https://github.com/mqyqingfeng/Blog/issues/3)
## 作用域链（Scope Chain）
- Identifier Lookup 标识符查找
	 - **当代码执行过程中访问一个变量或函数时，JavaScript 引擎会沿着作用域链查找该标识符**。作用域链是由当前执行上下文的作用域和其所有父级作用域组成的链表。
	 - 查找过程从当前作用域开始，然后逐级向上查找，直到找到目标标识符或到达全局作用域。如果在全局作用域中仍未找到目标标识符，则返回`undefined`。
  - 特点：
	  - Child scope can access variables in its parent scope
	  - identifiers in a parent context cannot be referenced if an identifier in the local context has the same name,
- Scope Chain Augmentation 作用域链增强
  - The catch block in a try-catch statement
  - A `with` statement
- [JavaScript 深入之作用域链](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F6 https://github.com/mqyqingfeng/Blog/issues/6)
## 执行上下文（Execution Context）
> [理解 JavaScript 中的执行上下文和执行栈](https://juejin.cn/post/6844903682283143181 https://juejin.cn/post/6844903682283143181) >[理解 JavaScript 的执行上下文](https://link.juejin.cn?target=https%3A%2F%2Fzhuanlan.zhihu.com%2Fp%2F72959191 https://zhuanlan.zhihu.com/p/72959191) >[JavaScript 进阶-执行上下文](https://juejin.cn/post/6844903983438381069 https://juejin.cn/post/6844903983438381069) >[JavaScript 深入之执行上下文栈](https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fmqyqingfeng%2FBlog%2Fissues%2F4 https://github.com/mqyqingfeng/Blog/issues/4) >[一道 js 面试题引发的思考 · Issue #18 · kuitos/kuitos.github.io · GitHub](https://github.com/kuitos/kuitos.github.io/issues/18)

**执行上下文是 JavaScript 代码执行过程中的环境**。每当进入一个新的函数执行或全局代码执行时，都会创建一个新的执行上下文。执行上下文包含了当前执行的代码所需的所有信息，如变量、函数、作用域链等。  
 JavaScript 引擎使用执行上下文栈（Execution Context Stack）来管理执行上下文。栈顶的执行上下文为当前执行的代码环境。当一个函数被调用时，一个新的执行上下文被压入栈顶；当函数执行结束时，执行上下文从栈顶弹出，返回到调用者的上下文环境。
- context
- Each execution context has an associated variable object upon which all of its defined variables and functions exist.
- Refers to the environment where a certain variable is declared;  
Javascript 代码都是在 **执行上下文** 中运行的  
执行上下文： 指当前执行环境中的变量、函数声明、作用域链 [Scope-作用域](Scope-作用域)、this 等信息

#### 全局、函数、Eval 执行上下文
执行上下文分为 `全局、函数、Eval执行上下文`
1. 全局执行上下文（浏览器环境下，为全局的 `window` 对象）
2. 函数执行上下文，每当一个函数被调用时, 都会为该函数创建一个新的上下文
3. 🟨Eval 函数执行上下文，如 eval(1 + 2)  
   对于每个执行上下文，都有三个重要属性：变量对象、作用域链 ([Scope-作用域](Scope-作用域) chain)、this`

#### 变量对象
变量对象是与执行上下文相关的数据作用域，存储了上下文中定义的变量和函数声明  
变量对象是一个抽象的概念，在全局执行上下文中，变量对象就是全局对象。

### 执行上下文的特点

1. 单线程，只在主线程上运行；
2. 同步执行，从上向下按顺序执行；
3. 全局上下文只有一个，也就是 `window` 对象；
4. 函数每调用一次就会产生一个新的执行上下文环境。

### 执行上下文生命周期

#### 创建阶段

生成变量对象、建立作用域链 [Scope-作用域](Scope-作用域)、确定 this 的指向

#### 执行阶段

变量赋值、函数的引用、执行其他代码  
![执行上下文.jpg](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f02e41f0bff3498990d04b7c90215a1f~tplv-k3u1fbpfcp-zoom-in-crop-mark:4536:0:0:0.awebp?)

