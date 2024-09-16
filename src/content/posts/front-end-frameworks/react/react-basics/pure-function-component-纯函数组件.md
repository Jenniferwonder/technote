---
aliases:
  - Pure-Function-Component-纯函数组件
title: Pure-Function-Component-纯函数组件
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
linter-yaml-title-alias: Pure-Function-Component-纯函数组件
category: Front-End Frameworks
---

# Pure-Function-Component-纯函数组件

- [请描述你对纯函数的理解？](https://github.com/haizlin/fe-interview/issues/632)
- [解释下 React 中 component 和 pureComponent 两者的区别是什么？](https://github.com/haizlin/fe-interview/issues/618)

##### Pure Function

> reference: [Keeping Components Pure – React](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects)

React is designed around the concept of functional programming, assuming that every component you write is a **pure function**. This means that React components you write must always return the same JSX given the same inputs

- **It minds its own business.** It does not change any objects or variables that existed before it was called
- **Same inputs, same output.** Given the same inputs, a pure function should always return the same result  
  📌 PureFun.jsx  
  📌 ImpureFun.jsx

##### Side Effects

**Side effects**: updating the screen, starting an animation, changing the data, things that happen _on the side_, not during rendering  
Side effects usually belong inside [event handlers](https://react.dev/learn/responding-to-events), which don't run _during_ rendering, so event handlers don't need to be pure.

##### Benefits

- Your components could run in a different environment—for example, on the server!
- You can improve performance by [skipping rendering](https://react.dev/reference/react/memo) components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
- If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.




