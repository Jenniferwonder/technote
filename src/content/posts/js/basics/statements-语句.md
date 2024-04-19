---
title: Statements-语句
tags:
  - JavaScript
difficulty: 
comment: 
topic:
  - Basics
type: D
DateStarted: 2023-07-13
DateModified: 2024-04-18
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

## Loops

- The do-while Statement
  - post-test loop
  - meaning that the escape condition is evaluated only after the code inside the loop has been executed
  - The body of the loop is always executed at least once
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529496174image.png)
- The while Statemen
  - pretest loop
  - it is possible that the body of the loop is never executed
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529529772image.png)
- The for Statement
  - pretest loop
  - the for statement one of the most used in the language
    - with the added capabilities of variable initialization
    - defining postloop code to be executed
    - Nothing can be done with a for loop that can’t be done using a while loop
  - the cleanest implementation is to use a let declaration inside the loop initialization to declare the iterator variable because its scope will be limited to only the loop itself.
  - If the body is executed, the postloop expression is also executed
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529552779image.png)
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529642587image.png)
- The for-in Statement
  - strict iterative statement
  - used to enumerate the non-symbol keyed properties of an object
  - is used to display all the properties of the BOM window object
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529687869image.png)
- The for-of Statement
  - strict iterative statement
  - used to loop through elements in an iterable object
  - the const operator in the control statement is not necessary but is recommended for ensuring the use of a local variable that will not be altered
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529801720image.png)

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
