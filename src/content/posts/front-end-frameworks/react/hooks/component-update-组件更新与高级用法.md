---
aliases:
  - Component Update-组件更新与高级用法
title: Component Update-组件更新与高级用法
topic:
  - Component-Basics
  - Hooks
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
linter-yaml-title-alias: Component Update-组件更新与高级用法
category: Front-End Frameworks
draft: true
---

# Component Update-组件更新与高级用法

#### [怎样动态导入组件？](https://github.com/haizlin/fe-interview/issues/895)

- 自己使用 import 和 async/await 实现的异步组件
- [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
- 开源库 react-loadable 库/react-lazyload 库
- babel 动态导入（Dynamic Import）

#### [怎么定时更新一个组件？](https://github.com/haizlin/fe-interview/issues/883)

```jsx
import React, { useState, useEffect } from "react";
export default function TimerHooks() {
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		let timerId = setInterval(() => {
			setDate(new Date());
		}, 1000);
		return () => {
			clearInterval(timerId);
		};
	}, []);
	return (
		<div>
			<p>时间: {date.toLocaleTimeString()}</p>
		</div>
	);
}
```

#### [请说下 react 组件更新的机制是什么？](https://github.com/haizlin/fe-interview/issues/815)

#### [shouldComponentUpdate 方法是做什么的？](https://github.com/haizlin/fe-interview/issues/693)

#### [说说你对 windowing 的了解](https://github.com/haizlin/fe-interview/issues/935)

- 'windowing' 的技术把大数据集分解为多个块，当它们滚动到视图中时可以即时加载。它也可以用于创建无限加载列表
- 例如：react-virtualized，react-window 等都使用了“windowing”的技术
- [https://react-window.now.sh/#/examples/list/fixed-size](https://react-window.now.sh/#/examples/list/fixed-size)
- [https://bvaughn.github.io/react-virtualized/#/components/List](https://bvaughn.github.io/react-virtualized/#/components/List)





