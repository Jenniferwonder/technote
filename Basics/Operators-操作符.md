---
Title: Operators-操作符
Type: D
DateStarted: 2022-11-29
DateModified: 2023-11-28
status: Mature
mindmap-plugin: basic
LeadTime: "17"
DateDo: 2023-07-12T00:00:00.000+08:00
DateDone: 2023-07-28T00:00:00.000+08:00
Cards: 18
Cards-D: "2"
Page-D: "0"
EST: "-19549"
Reviewed: 2
Topic:
  - Basics
---

# [D-JS](O-JS.md) Operators-操作符

## Metadata

- Up:: [C03-Language Basics](../Private/C-JS/C03-Language%20Basics.md)

## <mark class="hltr-gray ">" Unary Operators-一元操作符 "</mark> [Page 44 ](zotero://open-pdf/library/items/2BS329KQ?page=44&annotation=V24TIWAA)

- <mark class="hltr-gray ">" Increment/Decrement "</mark> [Page 44 ](zotero://open-pdf/library/items/2BS329KQ?page=44&annotation=SUPV7FW5)
  - `++`
  - `--`
- <mark class="hltr-gray ">" Unary Plus and Minus "</mark> [Page 46 ](zotero://open-pdf/library/items/2BS329KQ?page=46&annotation=Z85QCQIZ)
  - Perfom similar to `Number()`

## <mark class="hltr-gray ">" Bitwise Operators-位操作符 "</mark> [Page 48 ](zotero://open-pdf/library/items/2BS329KQ?page=48&annotation=YHJD8E93)

- <mark class="hltr-gray ">" Bitwise NOT-按位非 "</mark> [Page 49 ](zotero://open-pdf/library/items/2BS329KQ?page=49&annotation=C7KWLGIJ)
  - `~`
- <mark class="hltr-gray ">" Bitwise AND-按位与 "</mark> [Page 50 ](zotero://open-pdf/library/items/2BS329KQ?page=50&annotation=V8PRGKL8)
  - `&`
- <mark class="hltr-gray ">" Bitwise OR-按位或"</mark> [Page 50 ](zotero://open-pdf/library/items/2BS329KQ?page=50&annotation=XCXEKWVA)
  - `|`
- <mark class="hltr-gray ">" Bitwise XOR-按位异或 "</mark> [Page 51 ](zotero://open-pdf/library/items/2BS329KQ?page=51&annotation=UMIINJSG)
  - `^`
- <mark class="hltr-gray ">" Left Shift "</mark> [Page 52 ](zotero://open-pdf/library/items/2BS329KQ?page=52&annotation=2QWRCGDB)
  - `<<`
- <mark class="hltr-gray ">" Signed Right Shift-有符号右移"</mark> [Page 52 ](zotero://open-pdf/library/items/2BS329KQ?page=52&annotation=HNB7FFVM)
  - `>>`
- <mark class="hltr-gray ">" Unsigned Right Shift-无符号右移 "</mark> [Page 52 ](zotero://open-pdf/library/items/2BS329KQ?page=52&annotation=Z2SEJ6E8)
  - `>>>`

## <mark class="hltr-gray ">" Boolean Operators-布尔操作符 "</mark> [Page 53 ](zotero://open-pdf/library/items/2BS329KQ?page=53&annotation=IH7BMD2M)

- - <mark class="hltr-gray ">" Logical NOT "</mark> [Page 53 ](zotero://open-pdf/library/items/2BS329KQ?page=53&annotation=33UFKUFK)
    - `!`
    - `!!`
  - <mark class="hltr-gray ">" Logical AND "</mark> [Page 54 ](zotero://open-pdf/library/items/2BS329KQ?page=54&annotation=9E7BKPJQ)
    - `&&`
  - <mark class="hltr-gray ">" Logical OR "</mark> [Page 55 ](zotero://open-pdf/library/items/2BS329KQ?page=55&annotation=5R5LYF6C)

    - `||`

  - ```js
    //logical assignment
      ||= //assign the first trusy value
    &&= //assign the first falsy value
    ```

- - ```js
    a || b;
    //return the first trusy value
    a ?? b;
    //return the first trusy value include 0
    a && b;
    //return the first falsy value
    ```

## <mark class="hltr-gray ">" Multiplicative Operators-乘性操作符 "</mark> [Page 56 ](zotero://open-pdf/library/items/2BS329KQ?page=56&annotation=7EBGYR7I)

- <mark class="hltr-gray ">" Multiply "</mark> [Page 56 ](zotero://open-pdf/library/items/2BS329KQ?page=56&annotation=8IITGBJI)
  - `*`
- <mark class="hltr-gray ">" Divide "</mark> [Page 57 ](zotero://open-pdf/library/items/2BS329KQ?page=57&annotation=RV8QP54E)
  - `/`
- <mark class="hltr-gray ">" Modulus/ Remainder Operator "</mark> [Page 58 ](zotero://open-pdf/library/items/2BS329KQ?page=58&annotation=YFPRUYWG)
  - `%`

## <mark class="hltr-gray ">" Additive Operators-加性操作符"</mark> [Page 58 ](zotero://open-pdf/library/items/2BS329KQ?page=58&annotation=9UNJ3LBE)

- <mark class="hltr-gray ">" Add "</mark> [Page 59 ](zotero://open-pdf/library/items/2BS329KQ?page=59&annotation=R7UMR22T)
  - `+`
  - Able to combine string
- <mark class="hltr-gray ">" Subtract "</mark> [Page 60 ](zotero://open-pdf/library/items/2BS329KQ?page=60&annotation=8R7XZYTS)
  - `-`

## <mark class="hltr-gray ">" Exponentiation Operator-指数操作符"</mark> [Page 58 ](zotero://open-pdf/library/items/2BS329KQ?page=58&annotation=B22TKWHG)

- `console.log(Math.pow(3, 2); // 9 console.log(3 ** 2); // 9`

## <mark class="hltr-gray ">" Relational Operators-关系操作符"</mark> [Page 61 ](zotero://open-pdf/library/items/2BS329KQ?page=61&annotation=AYSLHUW6)

- ```js
  >
  <
  >=
  <=
  ```

## <mark class="hltr-gray ">" Equality Operators-相等操作符"</mark> [Page 62 ](zotero://open-pdf/library/items/2BS329KQ?page=62&annotation=S8IC7N29)

- <mark class="hltr-gray ">" Equal and Not Equal "</mark> [Page 62 ](zotero://open-pdf/library/items/2BS329KQ?page=62&annotation=HBF8XYFZ)
  - ![](z-Assets/C03LanguageBasics-63-x72-y191.png)
  - Compare after conversion
- <mark class="hltr-gray ">" Identically Equal and Not Identically Equal "</mark> [Page 63 ](zotero://open-pdf/library/items/2BS329KQ?page=63&annotation=U4S6W887)
  - Compare without coercion
  - <mark class="hltr-orange "> </mark> identically equal [Page 63 ](zotero://open-pdf/library/items/2BS329KQ?page=63&annotation=DZIFJA4Y)
    - <mark class="hltr-yellow "> </mark> === [Page 63 ](zotero://open-pdf/library/items/2BS329KQ?page=63&annotation=NAWUJC94)
  - <mark class="hltr-orange "> </mark> not identically equal [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=2UQXFD8R)
    - <mark class="hltr-yellow "> </mark> !== [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=XBNNC2HB)
- <mark class="hltr-yellow "> </mark> it is recommended to use identically equal and not identically equal instead. [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=9DK93T4Q)

## <mark class="hltr-gray ">" Assignment Operators-赋值操作符"</mark> [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=6J8XXD9C)

- <mark class="hltr-orange "> </mark> Simple assignment is done with the equal sign (=) [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=UVGIHDE5)
  - <mark class="hltr-yellow "> </mark> assigns the value on the right to the variable on the left [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=MSJD3QWP)
- <mark class="hltr-orange "> </mark> Compound-assignment operators [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=TFN7VHPK)
  - <mark class="hltr-orange "> </mark> Multiply/assign (\*=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=6I4BHWQX)
  - <mark class="hltr-orange "> </mark> Divide/assign (/=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=SQQFH9LI)
  - <mark class="hltr-orange "> </mark> Modulus/assign (%=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=Q4WTMX87)
  - <mark class="hltr-orange "> </mark> Add/assign (+=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=7XD6ZB5K)
  - <mark class="hltr-orange "> </mark> Subtract/assign (-=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=KVR3SEH5)
  - <mark class="hltr-orange "> </mark> Left shift/assign (<<=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=SY3LQH9H)
  - <mark class="hltr-orange "> </mark> Signed right shift/assign (>>=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=6IULHDEL)
  - <mark class="hltr-orange "> </mark> Unsigned right shift/assign (>>>=) [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=YUEF33UA)

## <mark class="hltr-gray ">" Conditional Operator-条件操作符"</mark> [Page 64 ](zotero://open-pdf/library/items/2BS329KQ?page=64&annotation=XD2NM6PI)

- Short Circuiting
  - `let max = (num1 > num2) ? num1 : num2;`

## <mark class="hltr-gray ">" Comma Operator-逗号操作符 "</mark> [Page 65 ](zotero://open-pdf/library/items/2BS329KQ?page=65&annotation=8SLI7J4W)

- is used in the declaration of variables
  - `let num1 = 1, num2 = 2, num3 = 3;`
- can also be used to assign values
  - `let num = (5, 1, 4, 8, 0); // num becomes 0`
  - the comma operator always returns the last item in the expression

## Numeric Separators-数字分隔符

- ```js
  287_467_000;
  //return 287467000
  //only allowed between numbers
  ```
