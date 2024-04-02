---
title: React Suspense
Topic:
  - React
Type: D
tags:
  - React
DateStarted: 2024-03-05
DateModified: 2024-03-05
DateDo:
DateDone:
DateDue:
DateReviewed:
Reviewed:
Difficulty:
status:
Comment:
aliases:
  - React Suspense
---

# React Suspense

> [codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11](https://codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11)
> [in Depth-react-suspense-will-be-a-game-changer](https://angularindepth.com/posts/1044/why-react-suspense-will-be-a-game-changer)
> [GitHub - julianburr/talk-suspense-game-changer: Demo app for my talk at ReactJS Brisbane](https://github.com/julianburr/talk-suspense-game-changer)

让你可以“等待”目标代码加载，并且可以直接指定一个加载的界面（像是个 spinner）

```
const ProfilePage = React.lazy(() => import('./ProfilePage')); // 懒加载

// 在 ProfilePage 组件处于加载阶段时显示一个 spinner
<Suspense fallback={<Spinner />}>
  <ProfilePage />
</Suspense>
```

以下注意 :

##### 想要用 Suspense 成为组件读取异步数据的主要方式有以下问题:

`它不是数据获取的一种实现。`它并不假定你使用 GraphQL，REST，或者任何其他特定的数据格式、库、数据传输方式、协议。

`它不是一个可以直接用于数据获取的客户端。`你不能用 Suspense 来“替代” `fetch`  或者 Relay。不过你可以使用集成 Suspense 的库（比如说，[新的 Relay API](https://relay.dev/docs/en/experimental/api-reference)）。

`它不使数据获取与视图层代码耦合。`它协助编排加载状态在 UI 中的显示，但它并不将你的网络逻辑捆绑到 React 组件。

##### Suspense 到底有什么用呢

`它能让数据获取库与 React 紧密整合。`如果一个数据请求库实现了对 Suspense 的支持，那么，在 React 中使用 Suspense 将会是自然不过的事。

`它能让你有针对性地安排加载状态的展示。`虽然它不干涉数据怎样获取，但它可以让你对应用的视图加载顺序有更大的控制权。

`它能够消除 race conditions。`即便是用上  `await`，异步代码还是很容易出错。相比之下，Suspense 更给人同步读取数据的感觉 —— 假定数据已经加载完毕。

扩展 : `react-cache`与 Suspense 使用

## Questions

### [你有使用过 suspense 组件吗？它帮我们解决了什么问题？](https://github.com/haizlin/fe-interview/issues/896)
