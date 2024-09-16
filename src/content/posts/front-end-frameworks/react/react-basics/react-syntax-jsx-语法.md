---
aliases:
  - React Syntax-JSX-语法
title: React Syntax-JSX-语法
topic:
  - Component-Basics
type: D
tags:
  - React
DateStarted: 2024-04-12
DateModified: 2024-09-14
Datereviewed: 2024-04-12
reviewed: 1
difficulty: 
status: 
comment: 
linter-yaml-title-alias: React Syntax-JSX-语法
category: Front-End Frameworks
---

# React Syntax-JSX-语法

### JSX Rules & Syntax

- JSX lets you put markup into JavaScript

#### Fragment 包裹元素

> 为一个组件添加多个元素,可以讲你的子组件列表添加到一个分组中(`<></>`),并且不会再 DOM 增加额外节点

- component also can't return multiple JSX tag
- You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper

#### Curly braces

- Curly braces let you “escape back” into JS so that you can embed some variable from your code and display it to the user
  - You can add any JavaScript expression (something that evaluates to a single value) inside _curly braces_.
  - An _object property_ with dot notation
    - `<h1>{user.name}</h1>`
  - A _template literal_
    - `return <h1>{`Cool ${title}`}</h1>;`
  - The _returned value of a function_
    - `return <h1>{createTitle(title)}</h1>;`
  - _ternary operators_
    - `return <h1>{title ? title : 'Default Title'}</h1>;`

#### Conditional Rendering

- Case-1-`if...else`
- Case-2-`test? a:b`
- Case-3-`&&`
- 📌[Conditional](DB-React-Components/Conditional)

#### Render Lists

- `.map()` method
- `.filter()`
  - 📌[FilterList](DB-React-Components/FilterList)
  - 📌[ProductTableApp](DB-React-Components/ProductTableApp)
- `key`
  - `<li>` has a `key` attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
  - 📌[Lists](DB-React-Components/Lists)

## Questiosn

#### [React 必须使用 JSX 吗？](https://github.com/haizlin/fe-interview/issues/886)

#### [在 JSX 中如何写注释？](https://github.com/haizlin/fe-interview/issues/867)

#### [React 的书写规范有哪些？](https://github.com/haizlin/fe-interview/issues/660)

#### [在 React 中你有经常使用常量吗？](https://github.com/haizlin/fe-interview/issues/925)

#### [写个例子说明什么是 JSX 的内联条件渲染](https://github.com/haizlin/fe-interview/issues/877)

#### [怎样有条件地渲染组件？](https://github.com/haizlin/fe-interview/issues/868)

#### [在 React 中什么时候使用箭头函数更方便呢？](https://github.com/haizlin/fe-interview/issues/872)

#### [写例子说明 React 如何在 JSX 中实现 for 循环](https://github.com/haizlin/fe-interview/issues/865)

#### [ES6 的语法'...'在 React 中有哪些应用？](https://github.com/haizlin/fe-interview/issues/826)

#### [在 React 中遍历的方法有哪些？它们有什么区别呢？](https://github.com/haizlin/fe-interview/issues/679)

#### [props.children.map 和 js 的 map 有什么区别？为什么优先选择 React 的？](https://github.com/haizlin/fe-interview/issues/677)

#### [写 React 你是用 es6 还是 es5 的语法？有什么区别？](https://github.com/haizlin/fe-interview/issues/625)

#### [在 React 中我们怎么做静态类型检测？都有哪些方法可以做到？](https://github.com/haizlin/fe-interview/issues/810)

#### [为什么建议 Fragment 包裹元素？它的简写是什么？](https://github.com/haizlin/fe-interview/issues/864)

#### [你有用过 React.Fragment 吗？说说它有什么用途？](https://github.com/haizlin/fe-interview/issues/863)

#### [有用过 React 的 Fragment 吗？它的运用场景是什么？](https://github.com/haizlin/fe-interview/issues/673)

#### [为什么标签里的 for 要写成 htmlFor 呢？](https://github.com/haizlin/fe-interview/issues/839)

#### [在 React 中如何引入图片？哪种方式更好？](https://github.com/haizlin/fe-interview/issues/829)

#### [怎么防止 HTML 被转义？](https://github.com/haizlin/fe-interview/issues/812)

#### [怎样在 React 中使用 innerHTML？](https://github.com/haizlin/fe-interview/issues/692)

#### [JSX 和 HTML 有什么区别？](https://github.com/haizlin/fe-interview/issues/661)

#### [createElement 与 cloneElement 两者有什么区别？](https://github.com/haizlin/fe-interview/issues/620)
