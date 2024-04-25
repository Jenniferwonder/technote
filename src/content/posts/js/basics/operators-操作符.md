---
draft: false
title: Operators-操作符
tags:
  - JavaScript
type: D
difficulty: 
comment: 
DateStarted: 2022-11-29
DateModified: 2024-04-25
Datereviewed: 
status:
  - Mature
reviewed: 2
topic:
  - Basics
aliases:
  - Operators-操作符
linter-yaml-title-alias: Operators-操作符
category: Programming
---

# Operators-操作符

## Unary Operators-一元操作符

- Increment/Decrement
  - `++`
  - `--`
- Unary Plus and Minus
  - Perform similar to `Number()`

## Bitwise Operators-位操作符

- Bitwise NOT-按位非
  - `~`
- Bitwise AND-按位与
  - `&`
- Bitwise OR-按位或
  - `|`
- Bitwise XOR-按位异或
  - `^`
- Left Shift
  - `<<`
- Signed Right Shift-有符号右移
  - `>>`
- Unsigned Right Shift-无符号右移
  - `>>>`

## Boolean Operators-布尔操作符

- Logical NOT
    - `!`
    - `!!`
  - Logical AND
    - `&&`
  - Logical OR

    - `||`

```js
//logical assignment
	||= //assign the first trusy value
	&&= //assign the first falsy value
```

```js
    a || b;
    //return the first trusy value
    a ?? b;
    //return the first trusy value include 0
    a && b;
    //return the first falsy value
    ```

## Multiplicative Operators-乘性操作符

- Multiply
  - `*`
- Divide
  - `/`
- Modulus/ Remainder Operator
  - `%`

## Additive Operators-加性操作符

- Add
  - `+`
  - Able to combine string
- Subtract
  - `-`

## Exponentiation Operator-指数操作符

- `console.log(Math.pow(3, 2); // 9 console.log(3 ** 2); // 9`

## Relational Operators-关系操作符

```js
  >
  <
  >=
  <=
```

## Equality Operators-相等操作符

- Equal and Not Equal
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C03LanguageBasics-63-x72-y191.png)
  - Compare after conversion
- Identically Equal and Not Identically Equal
  - Compare without coercion
  - identically equal
    - `===`
  - not identically equal
    - `!==`
- it is recommended to use identically equal and not identically equal instead.

## Assignment Operators-赋值操作符

- Simple assignment is done with the equal sign (=) 
  - assigns the value on the right to the variable on the left
- Compound-assignment operators
  - Multiply/assign (\*=)
  - Divide/assign (/=)
  - Modulus/assign (%=)
  - Add/assign (+=) 
  - Subtract/assign (-=)
  - Left shift/assign (../<=) 
  - Signed right shift/assign (>>=)
  - Unsigned right shift/assign (>>>=)

## Conditional Operator-条件操作符

- Short Circuiting
  - `let max = (num1 > num2) ? num1 : num2;`

## Comma Operator-逗号操作符 

- is used in the declaration of variables
  - `let num1 = 1, num2 = 2, num3 = 3;`
- can also be used to assign values
  - `let num = (5, 1, 4, 8, 0); // num becomes 0`
  - the comma operator always returns the last item in the expression

## Numeric Separators-数字分隔符

```js
  287_467_000;
  //return 287467000
  //only allowed between numbers
```