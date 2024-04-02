---
title: React State Management
tags:
  - React
Topic:
  - React
DateDo:
DateDone:
DateDue:
DateReviewed:
DateStarted: 2023-02-14
DateModified: 2024-03-06
Reviewed:
status:
Difficulty:
Comment:
Type: D
aliases:
  - React State Management
---

# React State Management

## Basics

> [The modern guide to React state patterns - LogRocket Blog](https://blog.logrocket.com/modern-guide-react-state-patterns/#usestate-hook) > [@chrlschn - Thoughts on React vs Vue vs Everything Else in 2023](https://chrlschn.dev/blog/2022/12/react-vs-vue-vs-everything-in-2023/)

### Purpose

- Add Interactivity/ Update Event

### States

- State: a component's memory
- information that can change over time, usually triggered by user interaction

### Event Update

- `useState` Hook
  - `import { useState } from "react";`
  - `import { React } from "react";`
- Respond to Events
  - `onClick={handleClick}`
  - 📌 Case
    - _[Click](https://github.com/Jenniferwonder/react-tutorial/blob/main/src/components/01-quick-start/Click.jsx)_
- Update Screen
  - 📌 Case
    - _[UpdateClick](https://github.com/Jenniferwonder/react-tutorial/blob/main/src/components/01-quick-start/UpdateClick.jsx)_

### Props

> to share state between components

- `![Share Date Illustration](./z-Assets/1701567850607.png)`
- Move the _state_ up from the component to its parent
- Pass the _state_ and _Event Handlers_ as _props_ to each component used in the parent app
  - `<MyButton count={count} onClick={handleClick} />`
- Let the component to read the _props_
  - `MyButton({ count, onClick })`
- 📌 Case
  - _[ShareData](https://github.com/Jenniferwonder/react-tutorial/blob/main/src/components/01-quick-start/ShareData.jsx)_

## Solutions

- [in Depth-deep-dive-into-state-management-with-react-and-nextjs](https://angularindepth.com/posts/1487/deep-dive-into-state-management-with-react-and-nextjs)

## In-Depth

- [In-depth explanation of state and props update in React | by Max Koretskyi | React In Depth | Medium](https://medium.com/react-in-depth/in-depth-explanation-of-state-and-props-update-in-react-51ab94563311)

## Questions

#### [在 React 中你是怎么进行状态管理的？](https://github.com/haizlin/fe-interview/issues/605)

#### [如何更新组件的状态？](https://github.com/haizlin/fe-interview/issues/849)

#### [在 React 中怎样改变组件状态，以及状态改变的过程是什么？](https://github.com/haizlin/fe-interview/issues/606)

#### [React 为什么不要直接修改 state？如果想修改怎么做？](https://github.com/haizlin/fe-interview/issues/857)

#### [componentWillUpdate 可以直接修改 state 的值吗？](https://github.com/haizlin/fe-interview/issues/951)

#### [React 中 getInitialState 方法的作用是什么？](https://github.com/haizlin/fe-interview/issues/792)

#### [什么时候使用状态管理器？](https://github.com/haizlin/fe-interview/issues/953)

#### [状态管理器解决了什么问题？什么时候用状态管理器？](https://github.com/haizlin/fe-interview/issues/838)

#### [状态管理器它精髓是什么？](https://github.com/haizlin/fe-interview/issues/837)

#### [React 中如何监听 state 的变化？](https://github.com/haizlin/fe-interview/issues/861)

#### [React 组件间共享数据方法有哪些？](https://github.com/haizlin/fe-interview/issues/672)

#### [React 的状态提升是什么？使用场景有哪些？](https://github.com/haizlin/fe-interview/issues/671)
