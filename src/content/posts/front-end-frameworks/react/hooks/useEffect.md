---
title: useEffect
topic:
  - Hooks
type: D
tags:
  - React
DateStarted: 2024-03-05
DateModified: 2024-09-14
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
category: Front-End Frameworks
---

# useEffect

## Why

a React Hook that lets you [synchronize a component with an external system.](https://react.dev/learn/synchronizing-with-effects)  
✅ For example, you might want to control a non-React component based on the React state, ==set up a server connection==, or ==send an analytics log== when a component appears on the screen. _Effects_ let you run some code after rendering so that you can synchronize your component with some system outside of React.  
✅ _Effects_ let you specify side effects that are caused by rendering itself, rather than by a particular event like a click  
❌ If your Effect only adjusts some state based on other state, [you might not need an Effect](https://react.dev/learn/you-might-not-need-an-effect)  
❌ If your Effect is doing something visual (for example, positioning a tooltip), and the delay is noticeable (for example, it flickers), replace `useEffect` with [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect)

- Even if your Effect was caused by an interaction (like a click), **the browser may repaint the screen before processing the state updates inside your Effect.** Usually, that’s what you want. However, if you must block the browser from repainting the screen, you need to replace `useEffect` with [`useLayoutEffect`](https://react.dev/reference/react/useLayoutEffect)

## Basics

`useEffect(setup, dependencies?)`  
`useEffect` 是异步的

### Parameters

#### 1. A `setup` function with setup code

- The function with your Effect's logic that connects to the external system, such as
  - A timer managed with [`setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/setInterval) and [`clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/clearInterval).
  - An event subscription using [`window.addEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) and [`window.removeEventListener()`](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener)
  - A third-party animation library with an API like `animation.start()` and `animation.reset()`
- It should return a *cleanup function* with cleanup code that disconnectHs from that system.
- The cleanup function should stop or undo whatever the setup function was doing
- **React calls your setup and cleanup functions whenever it's necessary, which may happen multiple times**
  - Your setup code runs when your component is added to the page *(mounts)*
  - After every re-render of your component where the dependencies have changed
    - First, your cleanup code runs with the old props and state
    - Then, your setup code runs with the new props and state.

#### 2. A list of `dependencies` (optional)

- The list of all reactive values referenced inside of the `setup` code, including ==props, state, and all the variables and functions== declared directly inside your component body
- must have a constant number of items and be written inline like `[dep1, dep2, dep3]`
- React will compare each dependency with its previous value using the [`Object.is`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is) comparison
- Every reactive value used by your Effect's code must be declared as a dependency

##### Different types of dependencies

- [See the difference between passing an array of dependencies, an empty array, and no dependencies at all.](https://react.dev/reference/react/useEffect#examples-dependencies)
  - ✅empty dependency `[]` : your Effect doesn't re-run when any of your component's props or state change; It will only run **after the initial render**
  - ❌If you omit this argument, your Effect will re-run after every re-render of the component

###### Passing a dependency array

```jsx
useEffect(() => {
	// ...
}, [a, b]); // Runs again if a or b are different
```

### Returns

`useEffect` returns `undefined`

## Use Case

#### [Connecting to an external system](https://react.dev/reference/react/useEffect#connecting-to-an-external-system)

#### [Wrapping Effects in custom Hooks](https://react.dev/reference/react/useEffect#wrapping-effects-in-custom-hooks)

#### [Controlling a non-React widget](https://react.dev/reference/react/useEffect#controlling-a-non-react-widget)

#### [Fetching data with Effects](https://react.dev/reference/react/useEffect#fetching-data-with-effects)

❌Writing data fetching directly in Effects gets repetitive and makes it difficult to add optimizations like caching and server rendering later

- **Effects don't run on the server**
- **Fetching directly in Effects makes it easy to create “network waterfalls”**
- **Fetching directly in Effects usually means you don’t preload or cache data**
- **It's not very ergonomic**: too much boilerplate code involved, error-prone  
  ✅Modern React frameworks have integrated data fetching mechanisms that are efficient  
  ✅using or building a client-side cache: solutions include [React Query](https://tanstack.com/query/latest/), [useSWR](https://swr.vercel.app/), and [React Router 6.4+](https://beta.reactrouter.com/en/main/start/overview)
- use Effects under the hood but also add logic for deduplicating requests, caching responses, and avoiding network waterfalls (by preloading data or hoisting data requirements to routes)

#### [Updating state based on previous state from an Effect](https://react.dev/reference/react/useEffect#updating-state-based-on-previous-state-from-an-effect)

❌ Don't do `setCount(count+1)` in `useEffect`  
✅ use an **updater function** `c => c + 1` to update the state in `useEffect`

#### [Removing unnecessary object dependencies](https://react.dev/reference/react/useEffect#removing-unnecessary-object-dependencies)

❌ Avoid using an object created during rendering as a dependency.  
✅ Instead, create the object inside the Effect

#### [Removing unnecessary function dependencies](https://react.dev/reference/react/useEffect#removing-unnecessary-function-dependencies)

#### [Reading the latest props and state from an Effect](https://react.dev/reference/react/useEffect#reading-the-latest-props-and-state-from-an-effect)

##### `useEffectEvent()`

```jsx
function Page({ url, shoppingCart }) {
	const onVisit = useEffectEvent((visitedUrl) => {
		logVisit(visitedUrl, shoppingCart.length);
	});
	useEffect(() => {
		onVisit(url);
	}, [url]); // ✅ All dependencies declared
	// ...
}
```

#### [Displaying different content on the server and the client](https://react.dev/reference/react/useEffect#displaying-different-content-on-the-server-and-the-client)

In rare cases, you might need to display different content on the client. For example, if your app reads some data from [`localStorage`](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), it can't possibly do that on the server.  
In many cases, you can avoid the need for this by conditionally showing different things with CSS

```jsx
function MyComponent() {
	const [didMount, setDidMount] = useState(false);
	useEffect(() => {
		setDidMount(true);
	}, []);
	if (didMount) {
		// ... return client-only JSX ...
	} else {
		// ... return initial JSX ...
	}
}
```

## Reference

- [轻松学会 React 钩子：以 useEffect() 为例 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2020/09/react-hooks-useeffect-tutorial.html)
- [A complete guide to the useEffect React Hook - LogRocket Blog](https://blog.logrocket.com/useeffect-hook-complete-guide/)
- [https://cloud.tencent.com/developer/article/1426847](https://cloud.tencent.com/developer/article/1426847)

## Questions

#### [请说说什么是 useEffect？](https://github.com/haizlin/fe-interview/issues/705)

#### [useEffect 和 useLayoutEffect 有什么区别？](https://github.com/haizlin/fe-interview/issues/888)
