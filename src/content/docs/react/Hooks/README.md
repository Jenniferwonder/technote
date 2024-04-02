---
title: React Hooks
Topic:
  - React
tags:
  - React
Type: D
DateDue:
DateStarted: 2024-01-17
DateReviewed:
DateModified: 2024-03-06
DateDo:
DateDone:
status:
Reviewed:
Difficulty:
Comment:
aliases:
  - React Hooks
---

# React Hooks

## Reference

- [React Hooks 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)
- https://react.dev/reference/react
- [Making Sense of React Hooks - DEV Community](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)

## Hooks Concept

- Functions starting with `use` are called _Hooks_.
- React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进。React Hooks 就是那些钩子

## Rules

- You can only call Hooks at the _top_ of your components (or other Hooks)
- If you want to use `useState` in a condition or a loop, extract a new component and put it there

## Built-in Hooks Demos

- [useRef](./useRef/README)
- [useEffect](./useEffect/README)
- [useLayoutEffect](./useLayoutEffect)
- [useMemo](./useMemo)
- [useCallback](./useCallback)
- [useImperativeHandle](./useImperativeHandle)

## Custom Hooks

## Questions

#### [请描述下你对 React 的新特性 Hooks 的理解？它有哪些应用场景？](https://github.com/haizlin/fe-interview/issues/702)

#### [React 为什么要搞一个 Hooks？](https://github.com/haizlin/fe-interview/issues/846)

#### [React Hooks 帮我们解决了哪些问题？](https://github.com/haizlin/fe-interview/issues/845)

#### [怎样使用 Hooks 获取服务端数据？](https://github.com/haizlin/fe-interview/issues/891)

#### [使用 Hooks 要遵守哪些原则？](https://github.com/haizlin/fe-interview/issues/890)
