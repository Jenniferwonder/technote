---
Title: Convert Array to String (数组转字符串方法)
Topic:
  - Array
  - String
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-01-26
DateDo:
DateDone:
DateDue:
DateReviewed: 2024-01-26
Reviewed:
Difficulty: Good
status:
  - ToUse
Comment:
---
### Convert Array or Object to String (数组转字符串方法)
?
- `toString()`
- `valueOf()`
    - ![[1691303468091.png|500]]
- `.join(",")`
- **`toLocaleString()`**
    - may end up returning the same value as toString() and valueOf(), but not always
    - ![[1691303867882.png]]
<!--SR:!2024-01-30,1,230-->


### 3 种转字符串方法的特点
- Each return the array items as a comma-separated string 
- If an item in the array is null or undefined, it is represented by an **empty string**