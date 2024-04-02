---
title: Add Interactivity
DateStarted: 2023-12-04
DateModified: 2023-12-05
aliases: add-interactivity-react-state
source: https://react.dev/learn/adding-interactivity
---

# Add Interactivity with State

## State: a component's memory

- Build an Art Gallery page
  - ![04-art-gallery-mock](./z-Assets/04-art-gallery-mock.png)
  - 📌`04-1-Gallery.jsx`

## State as a snapshot

React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.

- 📌`04-2-Chat.jsx`
  - ![04-chat-mock](./z-Assets/04-chat-mock.png)

## Queueing a series of state updates

- 📌`04-3-Scores.jsx`
  - replacing `setScore(score + 1)` with `setScore(s => s + 1)` fixes the “+3” button.

## Updating objects in state

State can hold any kind of JavaScript value, including objects. But avoid mutate the origin objects or arrays stored in state.

use the `...` spread syntax to copy objects and arrays that you want to change.

- 📌`04-4-Objects.jsx`
  - ![04-objects-mock](./z-Assets/04-objects-mock.png)
- 📌`04-4-ImmerObjects.jsx`
  - Use [Immer](https://github.com/immerjs/use-immer) instead of `useState` in this case to reduce repetitive code.
  - npm install the following dependencies
    - "immer": "1.7.3",
    - "use-immer": "0.5.1"

> Next: 05-react-to-input-with-state
