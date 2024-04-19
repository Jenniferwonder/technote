---
draft: false
Datereviewed: 2024-01-26
aliases:
  - Reduce Array (Get the Sum)-归并方法
title: Reduce Array (Get the Sum)-归并方法
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
  - ToUseMore
comment: 
linter-yaml-title-alias: Reduce Array (Get the Sum)-归并方法
category: Programming
---

# Reduce Array (Get the Sum)-归并方法

---

Basic

### Get the `sum` value of all items in an Array

Back:

- `.reduce((prev, cur) => prev + cur)`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691312206123.png)
- `.reduceRight((prev, cur) => prev + cur)`
- works in the same way, just in the opposite direction
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691312257363.png)
<!--ID: 1706600287415-->

---

<!--SR:!2024-02-01,3,250-->

---

Basic

### 😺`.reduce()` 参数与返回值

Back:

- Purpose
  - Return a computed value
- 2 Arguments
- **a function** to call on each item
- 4 Arguments
  - **the previous value**
  - **the current value**
  - the item's index
  - the array object
- an optional **initial value** upon which the reduction is based
<!--ID: 1706600287419-->

---

<!--SR:!2024-01-30,1,230-->
