---
draft: false
Datereviewed: 2024-01-26
aliases:
  - Flat Array-展平数组 (ES2019)
title: Flat Array-展平数组 (ES2019)
topic:
  - Array
type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-19
reviewed: 1
difficulty: Hard
status:
  - Snooze
comment: 
linter-yaml-title-alias: Flat Array-展平数组 (ES2019)
category: Programming
---

# Flat Array-展平数组 (ES2019)

> [数组的扩展 - ECMAScript 6 入门 (ruanyifeng.com)](https://es6.ruanyifeng.com/#docs/array)

### `flat()`

默认展平一层

```js
[1, 2, [3, [4, 5]]]
	.flat()
	[
		// [1, 2, 3, [4, 5]]

		(1, 2, [3, [4, 5]])
	].flat(2)
	[
		// [1, 2, 3, 4, 5]

		(1, [2, [3]])
	].flat(Infinity);
// [1, 2, 3]
```

### `flatMap()`

相当于 `map()` + `flat()` ，但只能展开一层数组

```js
[2, 3, 4]
	.flatMap((x) => [x, x * 2])
	[
		// [2, 4, 3, 6, 4, 8]
		(1, 2, 3, 4)
	].flatMap((x) => [[x * 2]]);
// [[2], [4], [6], [8]]
```
