---
Title: Array Holes-数组空位
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
Difficulty: Good
status:
  - Mature
Comment: 注意 map, fill 在空位数组中的特性
---
***
Basic
### Array Holes-数组空位含义
Back:
- 数组中的连续逗号间即为空位
- ![](1691245201476.png)
📌: JS::JS-Array
🏷️: JS-Array 
<!--ID: 1706537534099-->
****

***
Basic
### ES6 统一将空位值视为
Back:
- `undefined` 
- ![](1691245314602.png) 
<!--ID: 1706537534109-->
****

***
Basic
### 数组空位注意事项
- `alert([1,,,,5].map(() => 6));` 输出？
- `alert([1,,,,5].join('-'));` 输出？
Back:
- ❌ Avoid using array holes in your code.
- ✅Prefer to use an explicit `undefined` in place of a hole.
####  `alert([1,,,,5].map(() => 6));` 输出？
- `[6,undefined,undefined,undefined,6]`
- `map()` will skip the holes entirely
#### `alert([1,,,,5].join('-'));` 输出？
- `"1----5"` 
- `join()` treats holes as empty strings
<!--ID: 1706537534116-->
****


