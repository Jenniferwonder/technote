---
Title: Fill an Array (数组填充方法)
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
Comment:
---
### Fill the entire array with value 5
?
- `.fill(5)`
- ![[1691292422220.png]]
- ![[1691292315495.png]]
<!--SR:!2024-02-01,3,250-->

### Fill all indices >=3 with 6
?
- `.fill(6,3)`
- ![[1691292351811.png]]
<!--SR:!2024-02-01,3,250-->

### Fill all indices >= 1 and < 3 with 7
?
- `.fill(7,1,3)`
- ![[1691292362365.png]]
<!--SR:!2024-02-01,3,250--> 

### Meaning of `[0,0,0,0,0].fill(8,-4,-1)`
?
- Fill all indices >=1 and < 4 with 8
- ![[1691292373703.png]]
<!--SR:!2024-02-01,3,250--> 

### Avoid Invalid Fill Value
?
- // Fill with **too low indices** is noop
	- ![[1691292459859.png]]
- // Fill with **too high indices** is noop
	- ![[1691292467153.png]]
- // Fill with **reversed indices** is noop
	- ![[1691292480812.png]]
- // Fill with **partial index overlap** is best effort
	- ![[1691292489788.png]]
<!--SR:!2024-02-01,3,250-->