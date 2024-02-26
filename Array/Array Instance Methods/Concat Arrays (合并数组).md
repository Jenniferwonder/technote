---
Title: Concat Arrays (合并数组)
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
Difficulty:
status:
Comment:
---
***
Basic
## 将两个或多个数组合并为一个新数组（忽略二维数组结构）
Back:
- `let newColor = color.concat(oldColor)`
	- ![](z-Assets/1691308392551.png)
- ✅`let newColor = [...color,...oldColor]`
<!--ID: 1706600287314-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
## 合并一个二维数组（保留二维数组结构）
Back:
- `oldColor[Symbol.isConcatSpreadable] = false`
- `let newColor = color.concat(oldColor)`
	- ![](1691309107510.png) 
<!--ID: 1706600287320-->
****
<!--SR:!2024-01-30,1,230-->


