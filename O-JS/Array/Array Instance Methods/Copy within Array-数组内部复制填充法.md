---
Title: Copy within Array-数组内部复制填充法
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
### 复制数组索引第 5 位前的元素从第 5 位起填充数组
？
- `.copyWithin(5)` 
    - ![[Paste image 1691247899277image.png|425]]

### 复制数组索引第 5 位元素开始的值从首位开始填充数组
？
- `.copyWithin(0, 5)`
- ![[Copy within Array-数组内部复制填充法.png|475]]

### 复制首位至数组索引第 3 位前元素的值从第 4 位开始填充数组
？
- `.copyWithin(4, 0, 3)`
- ![[1691247976103.png|550]]

### `.copyWithin()` 特性与注意事项
?
- performs an iterative shallow copy of some of the array and **overwrites existing values** beginning at the provided index
- allow for batch fill and copy inside an array
    - allow to specify a range within an existing array instance
    - inclusive start and exclusive end index
<!--SR:!2024-01-30,1,230-->