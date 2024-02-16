---
Title: Reduce Array (Get the Sum 归并方法)
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
  - ToUseMore
Comment:
---
***
Basic
### Get the `sum` value of all items in an Array
Back:
- `.reduce((prev, cur) => prev + cur)`
	- ![[1691312206123.png]]
- `.reduceRight((prev, cur) => prev + cur)`
    - works in the same way, just in the opposite direction
	- ![[1691312257363.png]]
<!--ID: 1706600287415-->
****
<!--SR:!2024-02-01,3,250-->

***
Basic
### 😺`.reduce()` 参数与返回值
Back:
- Purpose
    - Return a computed value
- 2 Arguments
    - **a function** to call on each item [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=ef32b89b-137a-4299)
        - 4 Arguments
            - **the previous value** [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=82d14c01-3f3e-f40a)
            - **the current value** [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=2a37a043-94d3-6036)
            - the item’s index [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=620a7f99-e301-6fd1)
            - the array object [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=1fc6464f-49da-aa80)
    - an optional **initial value** upon which the reduction is based [📌](obsidian://jump-to-pdf?pdf=ProJS%2FC6-Collection%20Reference%20Type.pdf&annotate=27095b3b-0310-a322)
<!--ID: 1706600287419-->
****
<!--SR:!2024-01-30,1,230-->

