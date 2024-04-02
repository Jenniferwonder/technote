---
title: Update Screen
---

# Add Interactivity

## Update Screen (Event Handlers)

### `useState` Hook

- `import { useState } from "react";`
- `import { React } from "react";`

### State as a snapshot

- Setting it does not change the state variable you already have, but instead triggers a re-render.
  - 📌[Message](../../DB-React-Components/Message.md)
    - State as a snapshot

### Queueing a series of state updates

- replacing `setScore(score + 1)` with `setScore(s => s + 1)` fixes the “+3” button.
  - 📌[Scores](../../DB-React-Components/Scores.md)
    - Queueing state updates

### Update objects/ arrays in state

- use the `...` spread syntax to copy objects and arrays that you want to change.
  - 📌[InfoChange](../../DB-React-Components/InfoChange.md)
    - Update objects in state
- Use [Immer](https://github.com/immerjs/use-immer) instead of `useState` in this case to reduce repetitive code.
  - 📌[ImmerInfoChange](../../DB-React-Components/ImmerInfoChange.md)
