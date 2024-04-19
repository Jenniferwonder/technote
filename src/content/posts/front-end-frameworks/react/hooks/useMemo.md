---
title: useMemo
topic:
  - Hooks
type: D
tags:
  - React
DateStarted: 2024-03-05
DateModified: 2024-04-18
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
category: Front-End Frameworks
---

# useMemo

[How to useMemo and useCallback: you can remove most of them | by Nadia Makarevich | Medium](https://adevnadia.medium.com/how-to-usememo-and-usecallback-you-can-remove-most-of-them-b8ef01b2020d)

## Why

`useMemo` is a React Hook that lets you cache the result of a calculation between re-renders  
✅ If the overall logged time adds up to a significant amount (say, `1ms` or more), and its dependencies rarely change, it might make sense to memorize that calculation

```js
console.time("filter array");
const visibleTodos = useMemo(() => {
	return filterTodos(todos, tab); // Skipped if todos and tab haven't changed
}, [todos, tab]);
console.timeEnd("filter array");
```

✅❓ You pass it as a prop to a component wrapped in [`memo`.](https://react.dev/reference/react/memo) You want to skip re-rendering if the value hasn't changed. Memorization lets your component re-render only when dependencies aren't the same  
✅❓ The value you're passing is later used as a dependency of some Hook. For example, maybe another `useMemo` calculation value depends on it. Or maybe you are depending on this value from [`useEffect`](https://react.dev/reference/react/useEffect)  
✅ If a specific interaction still feels laggy, [use the React Developer Tools profiler](https://legacy.reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html) to see which components would benefit the most from memorization, and add memorization where needed  
❌ **You should only rely on `useMemo` as a performance optimization.** If your code doesn't work without it, find the underlying problem and fix it first. Then you may add `useMemo` to improve performance.  
❌ `useMemo` won't make the _first_ render faster. It only helps you skip unnecessary work on updates

### Approaches to make memorization unnecessary

✅ When a component visually wraps other components, let it [accept JSX as children.](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children) This way, when the wrapper component updates its own state, React knows that its children don’t need to re-render  
✅ Prefer local state and don't [lift state up](https://react.dev/learn/sharing-state-between-components) any further than necessary  
✅ Keep your [rendering logic pure](https://react.dev/learn/keeping-components-pure)  
✅ Avoid [unnecessary Effects that update state](https://react.dev/learn/you-might-not-need-an-effect)  
✅ Try to [remove unnecessary dependencies from your Effects](https://react.dev/learn/removing-effect-dependencies)

## Basics

`const cachedValue = useMemo(calculateValue, dependencies)`

### Parameters

#### 1. `calculateValue`

- The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type
- React will call your function during the initial render. On next renders, React will return the same value again if the `dependencies` have not changed since the last render. Otherwise, it will call `calculateValue`, return its result, and store it so it can be reused later

#### 1. `dependencies`:

- The list of all reactive values referenced inside of the `calculateValue` code.

### Return

On the initial render, `useMemo` returns the result of calling `calculateValue` with no arguments.  
During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call `calculateValue` again, and return the result that `calculateValue` has returned

## Use Case

#### Skipping re-rendering with `useMemo` and `memo`

📌 MemoToDo.jsx  
📌 RecalToDo.jsx

#### Memorizing a dependency of another Hook

have a calculation that depends on an object created directly in the component body;  
✅ To fix this, you could memorize the object _itself_ before passing it as a dependency

```jsx
function Dropdown({ allItems, text }) {
	const searchOptions = useMemo(() => {
		return { matchMode: 'whole-word', text };
	}, [text]); // ✅ Only changes when text changes
	const visibleItems = useMemo(() => {
		return searchItems(allItems, searchOptions);
}, [allItems, searchOptions]); // ✅ Only changes when allItems or searchOptions changes
// ...
```

✅ an even better fix is to move the `searchOptions` object declaration _inside_ of the `useMemo` calculation function

```jsx
function Dropdown({ allItems, text }) {
const visibleItems = useMemo(() => {
	const searchOptions = { matchMode: 'whole-word', text };
	return searchItems(allItems, searchOptions);
}, [allItems, text]); // ✅ Only changes when allItems or text changes
// ...
```

#### Memorizing a function

💡 Just as `{}` creates a different object, function declarations like `function() {}` and expressions like `() => {}` produce a _different_ function on every re-render  
❌ To memorize a function with `useMemo`, your calculation function would have to return another function

```jsx
export default function Page({ productId, referrer }) {
	const handleSubmit = useMemo(() => {
		return (orderDetails) => {
			post("/product/" + productId + "/buy", {
				referrer,
				orderDetails,
			});
		};
	}, [productId, referrer]);
	return <Form onSubmit={handleSubmit} />;
}
```

✅ **Wrap your functions into [`useCallback`](https://react.dev/reference/react/useCallback) instead of `useMemo`** to avoid having to write an extra nested function

```jsx
export default function Page({ productId, referrer }) {
	const handleSubmit = useCallback(
		(orderDetails) => {
			post("/product/" + productId + "/buy", {
				referrer,
				orderDetails,
			});
		},
		[productId, referrer]
	);
	return <Form onSubmit={handleSubmit} />;
}
```

## Questions

[怎样实现 React 组件的记忆？原理是什么？](https://github.com/haizlin/fe-interview/issues/755)
