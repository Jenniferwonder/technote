---
topic:
  - Hooks
type: D
tags:
  - React
DateStarted: 2024-04-02
DateModified: 2024-04-18
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
title: useRef
category: Front-End Frameworks
---

# useRef

> [useRef – React](https://react.dev/reference/react/useRef)

### Why

When you want a component to “remember” some information, but you don't want that information to [trigger new renders](https://react.dev/learn/render-and-commit), you can use a _ref_  
Like state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!  
Refs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose

### ❌ Pitfall

🚩 Don't write a ref during rendering  
🚩 Don't read a ref during rendering  
🚩 **Do not overuse refs.** You should only use refs for _imperative_ behaviors that you can't express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on  
✅ You can read or write refs **from event handlers or effects instead**.

### Basics

`const ref = useRef(initialValue)`

#### Access Ref's Current Value

`ref.current`  
This value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn't track. (This is what makes it an “escape hatch” from React's one-way data flow)

#### Parameter

`initialValue`: The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render

##### Avoid recreating the ref contents

```js
// ❌ Don't do this
// the result of `new VideoPlayer()` is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating expensive objects.
function Video() {
	const playerRef = useRef(new VideoPlayer());
}
// ✅ Do this instead
function Video() {
	const playerRef = useRef(null);
	if (playerRef.current === null) {
		playerRef.current = new VideoPlayer();
}
```

#### Returns

`useRef` returns an object with a single property:

- `current`: Initially, it’s set to the `initialValue` you have passed. You can later set it to something else. If you pass the ref object to React as a `ref` attribute to a JSX node, React will set its `current` property.

### Manipulate DOM with refs

1. declare a ref object with an initial value of `null`:
   - `const inputRef = useRef(null);`
2. pass your ref object as the `ref` attribute to the JSX of the DOM node you want to manipulate
   - `return <input ref={inputRef} />;`
3. React will set the `current` property of your ref object to that DOM node

```js
function handleClick() {
	inputRef.current.focus();
}
```

### `forwardRef`

#### Exposing a ref to your own component

use a combination of `useRef` to hold the input and [`forwardRef`](https://react.dev/reference/react/forwardRef) to expose it to the parent component

```jsx
const MyInput = forwardRef((props, ref) => {
	return <input {...props} ref={ref} />;
});
<MyInput ref={inputRef} />;
```

In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, **to forward their refs to their DOM nodes**. On the other hand, high-level components like forms, lists, or page sections usually won't expose their DOM nodes to avoid accidental dependencies on the DOM structure

## Questions

#### [请说说什么是 useRef？](https://github.com/haizlin/fe-interview/issues/706)

#### [为什么建议不要过度使用 Refs？](https://github.com/haizlin/fe-interview/issues/753)

#### [React 中 refs 的作用是什么？有哪些应用场景？](https://github.com/haizlin/fe-interview/issues/633)

#### [什么是 React.forwardRef？它有什么作用？](https://github.com/haizlin/fe-interview/issues/878)

#### [使用 React 的 memo 和 forwardRef 包装的组件为什么提示 children 类型不对？](https://github.com/haizlin/fe-interview/issues/844)
