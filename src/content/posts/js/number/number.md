---
draft: false
topic:
  - Number
type: D
tags:
  - JavaScript
difficulty: 
comment: 
title: Number
DateStarted: 2022-12-01
DateModified: 2024-04-25
Datereviewed: 2024-04-16
reviewed: 
status:
  - Mature
aliases:
  - Number
linter-yaml-title-alias: Number
category: Programming
---

# Number

## Number 类型

- uses the IEEE–754 format to represent both integers 整数 and floating-point values 浮点值 (also called double–precision values 双精度值 in some languages)

## Number Literal Formats
- Integers
- octal literal
- the first digit must be a zero (0) followed by a sequence of octal digits (numbers 0 through 7).
- Octal literals are invalid when running in strict mode
- hexadecimal literal
- must make the first two characters 0x (case insensitive), followed by any number of hexadecimal digits (0 through 9, and A through F)
- Numbers created using octal or hexadecimal format are treated as decimal numbers in all arithmetic operations.

## Floating-Point Values
- To define a floating-point value, you must include a decimal point and at least one number after the decimal point.
- ECMAScript always looks for ways to convert values into integers.
- e-notation 科学计数法
- used to indicate a number that should be multiplied by 10 raised to a given power
- `let floatNum = 3.125e7; // equal to 31250000`
- 3e–17
- 0.00000000000000003
- ECMAScript converts any floating-point value with at least six zeros after the decimal point into e-notation
- small rounding errors

## Range of Values

- Number 属性
  - Number.MIN_VALUE
  - 5 e–324
  - Number.MAX_VALUE
  - 1.7976931348623157 e+308
  - Number.POSITIVE \_ INFINITY
  - Infinity (positive infinity)
  - Infinity: 23 / 0
  - any positive number that can’t be represented
  - If a calculation returns either positive or negative Infinity, that value cannot be used in any further calculations
  - Number.NEGATIVE \_ INFINITY
  - –Infinity (negative infinity)
  - Any negative number that can’t be represented
- BigInt(ES2020)
  - The biggest number: `2 ** 53 - 1`
  - Only 53 bits are used in JS to store the digits; the rest are used to store decimals
  - Numbers are represented as 64 bits

## NaN

- not a number
- any operation involving NaN always returns NaN
- NaN is not equal to any value, including NaN
- isNaN() function
- to determine if the value is “not a number.”
- Any value that cannot be converted into a number causes the function to return true.
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690789727897image.png)


### isNaN 与 Number.isNaN 的区别

isNaN 函数用于检查一个值是否是 NaN，它会将传入的参数先转换为数字类型再进行判断。如果传入的参数无法转换为数字类型，则会返回 true。  
而 Number.isNaN 用于检查一个值是否为 NaN，但它不会将参数转换为数字类型，只有在参数本身就是 NaN 时才返回 true。否则，返回 false。


## Number Conversions

- Number() function 转型函数
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690790014137image.png)
- unary plus operator

```js
+;
//convert a string to number
```

- works the same as the Number () function.

## Number 对象实例方法

- toString()
- 参数
  - 可选地接收一个表示基数的参数
- 返回值
  - 并返回相应基数形式的数值字符串
- toFixed()
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x68-y469.png)
- can represent numbers with 0 through 20 decimal places
- toExponential()
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x66-y196.png)
- toPrecision()
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x64-y67.png)
- can represent numbers with 1 through 21 decimal places

## Number 构造函数方法

- parseInt()

- 参数
  - If this first character isn’t a number, the minus sign, or the plus sign, parseInt() always returns NaN
  - parseInt() provides a second argument: the radix 基数 (number of digits).
- 返回值
  - 默认为十进制数值
  - it’s advisable to always include a radix to avoid errors.
- 用法

  ```js
  let num = parseInt(0xAF, 16); // 175
  Number.parseInt(30px); //return 30
  Number.parseInt(e23); //return NaN
  Number.parseInt(30px, 10);
  //return 30
  ```

- parseFloat()

- a decimal point is valid the first time it appears, but a second decimal point is invalid and the rest of the string is ignored

```js
Number.parseFloat(2.5rem);
//return 2.5
```

- isFinite() function

- To determine if a value is finite (that is, it occurs between the minimum and the maximum)

```js
Number.isFinite();
isFinite();
```

- `Number.isInteger()`

  - Check if a value is Interger

  ```js
  Number.isInteger();
  ```

- Number.isSafeInteger()
- Number.MIN_SAFE_INTEGER, or -2^53 + 1
- Number.MAX_SAFE_INTEGER, or 2^53 - 1

### 为什么 0.1+0.2 不等于 0.3
在 JavaScript（以及许多其他编程语言）中，0.1 + 0.2 不等于 0.3 的原因是浮点数精度问题。JavaScript 使用 IEEE 754 标准中规定的 **双精度浮点数**（double-precision floating point）来表示数字。这种表示方法在大多数情况下都很有效，但有时会导致精度损失。

双精度浮点数**只有有限的位数（64 位）来表示数字**，其中 1 位表示符号位，11 位表示指数，以及 52 位表示尾数。当尝试表示某些数字（特别是十进制小数）时，它们的二进制表示可能是无限循环的，因此需要截断以适应有限的位数。这可能导致浮点数的近似值与实际值之间存在微小差异。

在本例中，0.1 和 0.2 的二进制表示都是无限循环的，需要截断。当它们被截断并以双精度浮点数存储时，这两个数字的实际值与理论值略有不同。因此，当执行 0.1 + 0.2 时，结果也会有微小误差，与 0.3 的理论值不完全相等。

为了解决这个问题，可以将结果四舍五入到所需的精度。例如，如果要比较两个数字是否相等，可以将它们四舍五入到一个合理的精度，然后再进行比较：

```js
function areNumbersAlmostEqual(num1, num2, epsilon = 1e-10) {
	return Math.abs(num1 - num2) < epsilon;
}

console.log(areNumbersAlmostEqual(0.1 + 0.2, 0.3)); // 输出 true
```

在这个示例中，我们使用一个称为"epsilon"的小数值来表示可接受的误差范围。我们计算两个数字之差的绝对值，如果它小于 epsilon，我们认为这两个数字几乎相等。在实践中，需要根据具体问题选择合适的 epsilon 值。



