---
title: JS Internal Feature
topic:
  - Basics
type: D
tags:
  - JavaScript
category: Programming
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - JS Internal Feature
draft: false
DateStarted: 2024-04-25
DateModified: 2024-04-25
linter-yaml-title-alias: JS Internal Feature
---

# JS Internal Feature

### What is JavaScript?

- [How JavaScript works](https://link.juejin.cn/?target=https%3A%2F%2Fblog.sessionstack.com%2Fhow-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5 https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5)
- A **single-threaded** non-blocking asynchronous concurrent language.
- JS 是一个单线程、异步、并发、非阻塞 I/O 模型，拥有：
  - **a call stack**
  - event loop 事件循环机制 > [Event Loop-事件循环](event-loop-事件循环)
  - a callback queue
  - and other APIs...
- 所有任务可以分成两种，一种是同步任务（synchronous），另一种是异步任务（asynchronous）。
  - 同步任务指的是，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务。
  - 异步任务指的是，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程， 某个异步任务可以执行了，该任务才会进入主线程执行。

### V8

- A JS runtime
- Have a callstack and a heap
- The V8 can do one thing at a time, but not the browser which can access other APIs.

#### 对 V8 垃圾回收的理解？

V8 引擎主要采用了两种算法来处理垃圾回收：分代收集（Generational Collection）和增量标记（Incremental Marking）。

1. 分代收集：V8 将内存分为两个代：新生代（Young Generation）和老生代（Old Generation）。新生代中的对象存活时间较短，而老生代中的对象存活时间较长。新生代使用 Scavenge 算法进行垃圾回收，通常采用 Cheney 算法，将内存分为两个半区（From Space 和 To Space），每次垃圾回收时，会将存活的对象复制到 To Space 中，并清空 From Space。当一个对象在新生代中经历了多次垃圾回收仍然存活时，会将其移动到老生代。
2. 增量标记：老生代采用标记-清除（Mark-Sweep）算法进行垃圾回收。这种算法首先会标记所有可达的对象，然后清除所有未被标记的对象。为了避免在标记过程中产生长时间的停顿（Stop-The-World），V8 采用了增量标记策略。这种策略将标记过程分为多个阶段，在每个阶段之间，JavaScript 程序可以继续执行。这样可以降低垃圾回收对程序性能的影响。  
   V8 垃圾回收是对 JavaScript 垃圾回收策略的具体实现。它采用分代收集和增量标记两种算法，有效降低了垃圾回收对程序性能的影响。

#### 如何优化和减少垃圾回收的影响，从而提高应用性能？

以下是一些建议和技巧来帮助优化和减少垃圾回收的影响：

1. **避免全局变量**：全局变量不会被垃圾回收，除非它们被设置为 `null`。只有在确实需要时才应该使用它们。
2. **使用对象池**：对于频繁创建和销毁的对象（如在游戏或高性能应用中的实体），使用对象池可以重用对象而不是每次都创建新的对象。这可以避免频繁的垃圾回收。
3. **小心闭包**：闭包可能会导致意外的引用，从而阻止对象被垃圾回收。确保你只在需要时使用闭包，并在不再需要它们时断开引用。
4. **手动释放大对象**：对于大的数据结构或数组，如果你知道它们不再需要，可以手动将它们设置为 `null`，从而提前提示垃圾回收器。
5. **避免循环引用**：确保对象之间没有循环引用，因为这可能导致它们无法被垃圾回收。
6. **使用弱引用**：在合适的场景下，使用 `WeakMap` 或 `WeakSet` 可以让你存储对对象的引用，而不会阻止这些对象被垃圾回收。
7. **优化事件监听器**：确保及时删除不再需要的事件监听器。未删除的事件监听器可能会导致内存泄漏。
8. **减少内存分配**：减少动态创建对象、数组和闭包的频率可以帮助减少需要回收的垃圾量。
9. **使用浏览器开发者工具**：浏览器提供的开发者工具（如 Chrome DevTools）可以帮助你监测和诊断内存使用情况和潜在的泄漏。
10. **考虑使用 WebAssembly**：对于需要高性能和低延迟的应用，使用 WebAssembly 可能会帮助减少 JavaScript 的垃圾回收的影响，因为 WebAssembly 有自己的内存管理模型。

#### 解释下 JavaScript 栈内存和堆内存？

在 JavaScript 中，栈内存（Stack Memory）和堆内存（Heap Memory）扮演着不同的角色，它们分别负责存储不同类型的数据。以下是它们在 JavaScript 中的简要说明：

1. 栈内存（Stack Memory）：
   - 栈内存主要用于存储基本类型（原始类型）的值，如 `number`、`string`、`boolean`、`null` 和 `undefined`。这些类型的值通常**较小且固定大小**。
   - 栈内存还负责存储函数调用的执行上下文、局部变量和临时数据。
   - 栈内存遵循后进先出（LIFO）的原则进行分配和释放空间。当函数被调用时，函数的执行上下文、局部变量和相关信息会被压入栈中；当函数返回时，这些数据会从栈中弹出。
   - 栈内存的分配和回收速度较快，因为内存管理由 JavaScript 引擎自动完成。
   - 由于栈内存有限，如果递归调用过深或者分配大量的局部变量，可能导致栈溢出。
2. 堆内存（Heap Memory）：
   - 堆内存主要用于存储引用类型的值，如对象（`object`）、数组（`array`）和函数（`function`）。这些类型的值通常**较大，大小不固定**。
   - JavaScript 引擎使用垃圾回收机制自动管理堆内存中的对象。当对象不再被引用时，它们会被标记为垃圾，并在下一次垃圾回收时释放内存。
   - 与栈内存相比，堆内存分配和回收速度较慢，因为需要管理更复杂的数据结构和垃圾回收机制。
   - 堆内存可以动态分配，因此可以存储更多数据。
   - 如果没有正确处理引用关系，可能导致内存泄漏。  
     总结一下，在 JavaScript 中，栈内存用于存储基本类型的值、函数调用的执行上下文和局部变量，堆内存用于存储引用类型的值。理解栈内存和堆内存的差异有助于编写高效且内存友好的 JavaScript 程序。
