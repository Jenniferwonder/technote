---
Title: Add, Delete, Change Elements in Array (增删改数组-Splice)
Topic:
  - Array
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-01-26
DateDo:
DateDone:
DateDue:
DateReviewed: 2024-01-26
Reviewed: 1
Difficulty: Hard
status:
  - ToUse
Comment:
---
### Delete 2 elements from index position 1 from an array
?
- `.splice(1, 2)`
<!--SR:!2024-01-30,1,230-->

### Insert strings "red" and "green" into the array at position 2
?
- `.splice(2, 0, "red", "green")`
### Replace the 1 item at position 2 with the strings "red" and "green"
?
- `.splice(2, 1, "red", "green")`
<!--SR:!2024-01-30,1,230-->

### `.splice()` 接收参数与返回值
?
- the starting position
- number of items to delete
- the items to insert
- ![[1691309906253.png]]
<!--SR:!2024-02-01,3,250-->