---
aliases:
  - React Event-事件
title: React Event-事件
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
linter-yaml-title-alias: React Event-事件
category: Front-End Frameworks
---

# React Event-事件

> [Reacting to Input with State • React](https://beta.reactjs.org/learn/reacting-to-input-with-state)

## Steps

- _Identify_ your component's different visual states
- _Determine_ what triggers those state changes (Human/ computer input)
- _Represent_ the state in memory using `useState`
- _Remove_ any non-essential state variables
- _Connect_ the event handlers to set the state

### `onClick={handleClick}`

- 📌[Click](DB-React-Components/Click)
- 📌[UpdateClick](DB-React-Components/UpdateClick)
- 📌[RemoveBg](DB-React-Components/RemoveBg)
- 📌[Gallery](DB-React-Components/Gallery)
  - Store Boolean as state
  - Conditional rendering
  - `handleNextClick(){}`
  - `handleMoreClick(){}`

### `onSubmit` (Form Handling)

- 📌[Quiz](DB-React-Components/Quiz)
  - `async function`
    - `try {await...} catch (err) {...}`
  - `new Promise((resolve, reject) =>{ })`
    - `setTimeout()`
    - `new Error()`
- 📌[EditProfile](DB-React-Components/EditProfile)

### `onChange` (input text & checkbox)

- `onChange={(e) => onFilterTextChange(e.target.value)}`
- `onChange={(e) => onInStockOnlyChange(e.target.checked)}`
- 🏷️Table
  - 📌[ProductTableApp](DB-React-Components/ProductTableApp)
  - 📌[FilterList](DB-React-Components/FilterList)
- 📌[MailSelect](DB-React-Components/MailSelect)

### `onFocus` & `onPointerMove`

- 📌[MailHighlight](DB-React-Components/MailHighlight) (Highlight & Star)

## Questions

#### React 事件绑定原理

- [深入理解 React：事件机制原理](https://link.segmentfault.com/?enc=YWEtw47CvOdPRPRJCJ0lxA%3D%3D.CuQXmGFuL7V69GLgnC6fFFMLm%2Fcpx6Mo5oQ0kdkOWgh4Za%2BUqvZdkoW7IoaLDTqaJtyqsYD9QGfnqxGRrf0qQA%3D%3D)

#### React 组件中怎么做事件代理？它的原理是什么？

#### [`<div onClick={handlerClick}>单击</div>`和`<div onClick={handlerClick(1)}>单击</div>`有什么区别？](https://github.com/haizlin/fe-interview/issues/830)

jsx 事件 = 函数，会调用函数并把函数的返回值记录，在每次 render 时调用  
因此，handleClick 会随事件触发调用，handleClick() 只会调用一次

#### [在 React 中什么是合成事件？有什么用？](https://github.com/haizlin/fe-interview/issues/713)

#### [举例说明如何在 React 创建一个事件](https://github.com/haizlin/fe-interview/issues/850)

#### [怎样将事件传递给子组件？](https://github.com/haizlin/fe-interview/issues/892)

#### [在 React 中怎么将参数传递给事件？](https://github.com/haizlin/fe-interview/issues/876)

#### [React 的事件和普通的 HTML 事件有什么不同？](https://github.com/haizlin/fe-interview/issues/875)

#### [在 React 中怎么阻止事件的默认行为？](https://github.com/haizlin/fe-interview/issues/874)

#### [组件卸载前，加在 DOM 元素的监听事件和定时器要不要手动清除？为什么？](https://github.com/haizlin/fe-interview/issues/840)

#### [React 的触摸事件有哪几种？](https://github.com/haizlin/fe-interview/issues/834)

#### [请描述下事件在 React 中的处理方式是什么？](https://github.com/haizlin/fe-interview/issues/662)
