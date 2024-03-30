---
title: Primitive and Reference Values-原始值与引用值
Topic:
  - Basics
Type: D
DateStarted: 2023-07-28
DateModified: 2023-11-28
status:
  - Mature
DateDo: 2023-07-17T00:00:00.000+08:00
DateDone: 2023-07-29T00:00:00.000+08:00
Difficulty: Easy
---

# Primitive and Reference Values-原始值与引用值

## <mark class="hltr-orange ">" Primitive values-原始值 "</mark> [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=DL6JSJAY)

- Accessed by value (按值访问)  [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=UMTVM7XE)
  - You are manipulating the actual value stored in the variable.
- Copied by value
  - Changing the copied value will not change the original variable value
- <mark class="hltr-yellow ">" can’t have properties added to them even though attempting to do so won’t cause an error. "</mark> [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=RJGZB524)
  - <mark class="hltr-orange ">" primitive literal form "</mark> [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=FPCIM9TN)
    - <mark class="hltr-magenta "> If you were to use the new keyword, JavaScript will create an Object type, but one that behaves like a primitive. </mark> [Page 2](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=LQSJB5VB)

## <mark class="hltr-orange ">" Reference values-引用值 "</mark> [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=U5P3W6SX)

- Accessed by reference (按引用访问) [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=Y8ITK2AN)
  - You’re really working on a reference to that object rather than the actual object itself
- Copied by reference
  - Changing the value will change the original
  - will not independently copy the value, but only refer to the original
- <mark class="hltr-yellow ">" you can add, change, or delete properties and methods at any time "</mark> [Page 2 ](zotero://open-pdf/library/items/777VEPFY?page=2&annotation=FIZ2YTPL)

## <mark class="hltr-gray ">" Argument Passing 参数传递 "</mark> [Page 3 ](zotero://open-pdf/library/items/777VEPFY?page=3&annotation=L64HPRQ9)

- All function arguments in ECMAScript are passed by value (按值传递); the value outside of the function is copied
  - ![](./z-Assets/C04VariablesScopeMemory-5-x88-y399.png)

## [Copy-深浅拷贝](Copy-深浅拷贝.md)
