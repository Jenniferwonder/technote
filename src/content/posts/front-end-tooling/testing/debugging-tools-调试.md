---
topic: 
category: Front-End Tooling
Datereviewed: 
reviewed: 
difficulty: 
comment: 
type: 
title: debugging-tools-调试
tags:
  - Testing
DateStarted: 2022-11-30
DateModified: 2024-09-14
status: 
draft: true
---

## Set-up

- HTML, CSS, Live-server, Console
- 'use strict': add at the beginning of script file to enable developer mode

## Browser

### Shortcuts

### Console

- console.log(typeof ..)
  - To print out the data type in the console
- console.warn
- console.error
- console.table
- console.dir(functionName)

```js
console.time("filter array");
const visibleTodos = filterTodos(todos, tab);
console.timeEnd("filter array");
```

If the overall logged time adds up to a significant amount (say, `1ms` or more), it might make sense to memoize that calculation > [[Front-End/React/Private/learn-react/src/05-more-hooks/useMemo/README|useMemo]]
