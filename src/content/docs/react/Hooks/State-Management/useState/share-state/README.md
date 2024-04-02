---
title: Share State (React Props)
Topic:
  - React
tags:
  - React
Type: D
DateDo:
DateDone:
DateDue:
DateStarted: 2023-12-06
DateModified: 2024-03-05
DateReviewed:
status:
Reviewed:
Difficulty:
Comment:
aliases:
  - Share State (React Props)
---

# Share State (React Props)

## Reference

### [Sharing State Between Components • React](https://beta.reactjs.org/learn/sharing-state-between-components#recap)

- When you want to coordinate two components, move their state to their common parent.
- Then pass the information down through props from their common parent.
- Finally, pass the event handlers down so that the children can change the parent’s state.
- It’s useful to consider components as “controlled” (driven by props) or “uncontrolled” (driven by state).

## ⭐Props (proptypes, defaultprops, etc)

### Read-only information that's passed to components

## Component & App Level

### `![](./z-Assets/Paste-image-1701567850607image.png)`

### Move the _state_ up from the component to its parent

## Pass the _state_ and _Event Handlers_ as _props_ to each component used in the parent app

### `<MyButton count={count} onClick={handleClick} />`

## Let the child component read the _props_

### `MyButton(props)`

- the child component, can accept those props as its first function parameter
- If you `console.log()` props, you can see that it's an object with properties.

### `MyButton({ count, onClick })`

- use [object destructuring](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment) to explicitly name the values of props inside your function parameters

## Case

### 📌[ShareClickApp](../../DB-React-Components/ShareClickApp.md)

### 📌[FilterList](../../DB-React-Components/FilterList.md)

### 🚀MiniApp

- 📌[Tic-Tac-Toe](../../DB-React-Components/Tic-Tac-Toe.md)
