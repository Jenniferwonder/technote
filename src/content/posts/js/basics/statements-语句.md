---
draft: false
title: Statements-语句
tags:
  - JavaScript
difficulty: 
comment: 
topic:
  - Basics
type: D
DateStarted: 2023-07-13
DateModified: 2024-04-25
Datereviewed: 2024-04-17
status:
  - Mature
reviewed: 2
linter-yaml-title-alias: Statements-语句
aliases:
  - Statements-语句
category: Programming
---

# Statements-语句

## Multiple statements can be combined into a code block

also called flow-control statements

## Conditionals

- The if Statement
  - It’s considered best coding practice to always use block statements
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529359572image.png)
- The switch Statement
  - The switch statement compares values using the identically equal operator, so no type coercion occurs
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529292548image.png)
- Tenary Operation/ Conditional Operators

```js
activePlayer = activePlayer === 1 ? 2 : 1;
```

## [loops-循环语句](loops-循环语句)

## Labeled Statements

- can be referenced later by using the break or continue statement.
- are typically used with nested loops

```js
let num = 0;
outermost: for (let i = 0; i < 10; i++) {
	for (let j = 0; j < 10; j++) {
		if (i == 5 && j == 5) {
			continue outermost;
		}
		num++;
	}
}
console.log(num); // 95
```

## The break and continue Statements

- break
- exits the loop immediately, forcing execution to continue with the next statement after the loop
- continue
- exits the loop immediately, but execution continues from the top of the loop

## The with Statement

- sets the scope of the code within a particular object
- was created as a convenience for times when a single object was being coded to over and over again
- In strict mode, the with statement is not allowed and is considered a syntax error.
- It is widely considered a poor practice to use the with statement in production code
