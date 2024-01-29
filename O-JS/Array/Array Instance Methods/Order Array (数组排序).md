---
Title: Order Array (数组排序)
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
Reviewed: 2
Difficulty: Hard
status:
  - ToUseMore
Comment:
---

### 将数组按元素数值大小升序排列 （Ascend）
?
- `.sort((a, b) => a-b);`
<!--SR:!2024-02-01,3,250-->

### 将数组元素按字符串值顺序升序排列
?
- `.sort()`
	- ![[1691305985325.png]] [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=25a7455d-8019-b7a0)
    - sort an array alphabetically, treating element as a string using String() casting function
<!--SR:!2024-02-01,3,250-->

### Reverse order of elements in an array
?
- `.reverse()`
        - ![[1691305997573.png]]
<!--SR:!2024-02-01,3,250-->

### 😺`.sort()` 可接收参数及功能
?
- Optional: allow to pass in a comparison function that indicates which value should come before which
	- ![[Paste image 1691307727873image.png]]
- return value
	- a positive number
		- the 1st should come after the 2nd
	- a negative value
		- the 1st should come before the 2nd
	- zero
		- arguments are equal
<!--SR:!2024-02-01,3,250-->