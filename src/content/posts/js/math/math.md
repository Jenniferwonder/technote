---
Datereviewed: 
difficulty: 
comment: 
aliases:
  - Math
draft: false
title: Math
type: D
DateStarted: 2022-12-01
DateModified: 2024-04-25
status:
  - Young
Cards: 21
reviewed: 2
topic:
  - JS-Math
category: Programming
tags:
  - JavaScript
linter-yaml-title-alias: Math
---

# Math

## Metadata

- Reference:: [Math - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [Basic math in JavaScript — numbers and operators - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)

## The Math Object

- as a common location for mathematical formulas, information, and computation.
- offers a number of properties and methods to help these computations.
- The computations available on the Math object execute faster than if you were to write the computations in JavaScript directly
- A side-effect of this is that precision of these operations may vary between browsers, operating systems, instruction sets, and hardware.

## Math Object Properties

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-38-x45-y370.png)
- PI

  - ```js
    Math.PI * Number.parseFloat(10px) ** 2;
    //get the area of a circle with the specified radius
    ```

## The min() and max() Methods

- min() and max()

- ```js
  Math.max(3, 8, 6);
  //get the maximum number
  Math.min(3, 8, 6);
  //get the minimum number
  ```

- determine which number is the smallest or largest in a group of numbers

## Rounding Methods-舍入方法

- Math.ceil()
- Math.floor()
- Math.round()
- Math.fround()

- ```js
  Math.trunc();
  //Remove decimal parts
  Math.round();
  //Round to the nearest integer
  Math.floor();
  //Round down a float to a nearest integer
  Math.ceil()(
  	//Round up a float to a nearest integer
  	2.345
  ).toFixed(2);
  //return '2.35' (a string)
  ```

## The random() Method

- returns a random number between the 0 and the 1, not including either 0 or 1
- to select a number between 1 and 10

- let num = Math.floor(Math.random() \* 10 + 1);

- ```js
  // Random number from 1-6
  Math.trunc(Math.random() * 6) + 1;
  // Random number from min-max
  Math.trunc(Math.random() * (max - min) + 1) + min;
  ```

## Other Methods

- Root

  - ```js
    Math.sqrt(25)(
    	//return 5
    	//similar to 25 ** (1 / 2)
    	8 ** (1 / 3)
    );
    //return 2
    //to get the cubic root
    ```

- Absolute value of a negative number

  - ```js
    Math.abs(-2); // 2
    ```

- Even/ Odd

  - ```js
    //Check if a number is an Even number
    //To repeat sth every N time
    const isEven = (n) => n % 2 === 0;
    ```
