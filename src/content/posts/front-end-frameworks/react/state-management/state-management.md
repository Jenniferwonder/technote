---
title: React State Management
tags:
  - React
topic:
  - State
Datereviewed: 
DateStarted: 2023-02-14
DateModified: 2024-04-19
reviewed: 
status: 
difficulty: 
comment: 
type: D
aliases:
  - React State Management
  - React State Management
linter-yaml-title-alias: React State Management
category: Front-End Frameworks
draft: true
---

# React State Management
## Reference
- [in Depth-deep-dive-into-state-management-with-react-and-nextjs](https://angularindepth.com/posts/1487/deep-dive-into-state-management-with-react-and-nextjs)
- [In-depth explanation of state and props update in React | by Max Koretskyi | React In Depth | Medium](https://medium.com/react-in-depth/in-depth-explanation-of-state-and-props-update-in-react-51ab94563311)
- [The modern guide to React state patterns - LogRocket Blog](https://blog.logrocket.com/modern-guide-react-state-patterns/#usestate-hook) 
- [@chrlschn - Thoughts on React vs Vue vs Everything Else in 2023](https://chrlschn.dev/blog/2022/12/react-vs-vue-vs-everything-in-2023/)
## State Basics
- Purpose: 
	- Add Interactivity/ Update Event
- a component's memory
	- information that can change over time, usually triggered by user interaction
- a snapshot: 
	- React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.
	- 📌`04-3-Scores.jsx`
	  - replacing `setScore(score + 1)` with `setScore(s => s + 1)` fixes the “+3” button.

### React State Structure
>[Choosing the State Structure • React](https://beta.reactjs.org/learn/choosing-the-state-structure)

- When to use a single vs multiple state variables
- What to avoid when organizing state
- How to fix common issues with the state structure
### Preserve State
>[Preserving and Resetting State • React](https://beta.reactjs.org/learn/preserving-and-resetting-state)

Same component at the same position preserves state
### Reset State
Different components at the same position reset state  
Reset state with the same components
- Op1. Rendering a component in different positions
- Op2. Resetting state with a key
### Updating objects in state
State can hold any kind of JavaScript value, including objects. But avoid mutate the origin objects or arrays stored in state.  
use the `...` spread syntax to copy objects and arrays that you want to change.

- 📌`04-4-Objects.jsx`
  - ![04-objects-mock](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/04-objects-mock.png)
- 📌`04-4-ImmerObjects.jsx`
  - Use [Immer](https://github.com/immerjs/use-immer) instead of `useState` in this case to reduce repetitive code.
  - npm install the following dependencies
    - "immer": "1.7.3",
    - "use-immer": "0.5.1"
> Next: 05-react-to-input-with-state
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















