---
title: React Hooks
type: D
difficulty: 
comment: 
topic:
  - Hooks
tags:
  - React
DateStarted: 2024-01-17
DateModified: 2024-09-14
Datereviewed: 2024-04-13
reviewed: 1
status: 
aliases:
  - React Hooks
linter-yaml-title-alias: React Hooks
category: Front-End Frameworks
---

# React Hooks

## Reference

- [React Hooks 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2019/09/react-hooks.html)
- https://react.dev/reference/react
- [Making Sense of React Hooks - DEV Community](https://dev.to/dan_abramov/making-sense-of-react-hooks-2eib)

## Hooks Concept
- Functions starting with `use` are called _Hooks_.
- React Hooks 的意思是，组件尽量写成纯函数，如果需要外部功能和副作用，就用钩子把外部代码"钩"进。React Hooks 就是那些钩子

## Questions

#### [请描述下你对 React 的新特性 Hooks 的理解？它有哪些应用场景？](https://github.com/haizlin/fe-interview/issues/702)

- [React 为什么要搞一个 Hooks？](https://github.com/haizlin/fe-interview/issues/846)  
  方便在函数组件中添加外部功能和副作用，让函数组件有状态，让函数组件得以替代原有复杂且代码冗余的 Class 组件，让组件复用更为便捷  
  Hooks 方便了业务的抽离，可以使用 Hook 从组件中提取状态逻辑，无需修改组件结构，使得这些逻辑可以单独测试并复用。

#### [React Hooks 帮我们解决了哪些问题？](https://github.com/haizlin/fe-interview/issues/845)

#### [怎样使用 Hooks 获取服务端数据？](https://github.com/haizlin/fe-interview/issues/891)

```jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
function App() {
	const [data, setData] = useState({ hits: [] });
	useEffect(async () => {
		const result = await axios("https://api/url/to/data");
		setData(result.data);
	});
	return (
		<ul>
			{data.hits.map((item) => (
				<li key={item.objectID}>
					<a href={item.url}>{item.title}</a>
				</li>
			))}
		</ul>
	);
}
export default App;
```

#### [使用 Hooks 要遵守哪些原则？](https://github.com/haizlin/fe-interview/issues/890)
- You can only call Hooks at the _top_ of your components (or other Hooks)
- If you want to use `useState` in a condition or a loop, extract a new component and put it there




