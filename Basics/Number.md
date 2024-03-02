---
Title: Number
Topic:
  - Number
Type: D
DateStarted: 2022-12-01
DateModified: 2023-11-28
status:
  - Mature
DateDo: 2023-07-12T00:00:00.000+08:00
DateDone: 2023-07-31T00:00:00.000+08:00
---

# [D-JS](O-JS.md) Number

## Metadata

- Up:: [C05-Basic Reference Types-基本引用类型](../Private/C-JS/C05-Basic%20Reference%20Types-基本引用类型.md)

## Number 类型

- <mark class="hltr-yellow ">" uses the IEEE–754 format to represent both integers 整数 and floating-point values 浮点值 (also called double–precision values 双精度值 in some languages) "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=A5WZZFZV)

## Number Literal Formats

- <mark class="hltr-orange ">" Integers "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=FZRMQJER)
- <mark class="hltr-orange ">" octal literal "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=RQB6KWEC)
  - <mark class="hltr-yellow ">" the first digit must be a zero (0) followed by a sequence of octal digits (numbers 0 through 7). "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=YS29P5TB)
  - <mark class="hltr-yellow ">" Octal literals are invalid when running in strict mode "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=8Z3RHIEU)
- <mark class="hltr-orange ">" hexadecimal literal "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=XEY4B8AR)
  - <mark class="hltr-yellow ">" must make the first two characters 0x (case insensitive), followed by any number of hexadecimal digits (0 through 9, and A through F) "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=EX2ZTVDK)
  - <mark class="hltr-yellow ">" Numbers created using octal or hexadecimal format are treated as decimal numbers in all arithmetic operations. "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=JRHZCGE8)

## <mark class="hltr-gray ">" Floating-Point Values "</mark> [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=T98XG2D7)

- <mark class="hltr-yellow "> </mark> To define a floating-point value, you must include a decimal point and at least one number after the decimal point. [Page 17 ](zotero://open-pdf/library/items/2BS329KQ?page=17&annotation=RFDEY5S4)
- <mark class="hltr-yellow "> </mark> ECMAScript always looks for ways to convert values into integers. [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=VJCLBKPX)
- <mark class="hltr-orange "> </mark> e-notation 科学计数法 [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=UN6QPP3C)
  - <mark class="hltr-yellow "> </mark> used to indicate a number that should be multiplied by 10 raised to a given power [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=GRBMX4RG)
    - `let floatNum = 3.125e7; // equal to 31250000`
    - <mark class="hltr-yellow "> </mark> 3e–17 [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=Y3MUJ2UR)
      - <mark class="hltr-yellow "> </mark> 0.00000000000000003 [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=DDL55Z8D)
  - <mark class="hltr-yellow "> </mark> ECMAScript converts any floating-point value with at least six zeros after the decimal point into e-notation [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=5BIM5XWJ)
- <mark class="hltr-orange "> </mark> small rounding errors [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=BVKJB4XY)

## <mark class="hltr-gray ">" Range of Values "</mark> [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=WHDRDPSG)

- Number 属性
  - <mark class="hltr-orange "> </mark> Number.MIN_VALUE [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=2Q7TE89T)
    - <mark class="hltr-yellow "> </mark> 5 e–324 [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=TBWBHHBJ)
  - <mark class="hltr-orange "> </mark> Number.MAX_VALUE [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=QCNLPCQZ)
    - <mark class="hltr-yellow "> </mark> 1.7976931348623157 e+308 [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=XX4PRL6W)
  - <mark class="hltr-orange "> </mark> Number.POSITIVE \_ INFINITY [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=DAP4Z8CF)
    - <mark class="hltr-orange "> </mark> Infinity (positive infinity) [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=L4FL2HMR)
      - Infinity: 23 / 0
      - <mark class="hltr-yellow "> </mark> any positive number that can’t be represented [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=BGJFJG5Q)
      - <mark class="hltr-yellow "> </mark> If a calculation returns either positive or negative Infinity, that value cannot be used in any further calculations [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=Z7TDBQRP)
  - <mark class="hltr-orange "> </mark> Number.NEGATIVE \_ INFINITY [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=46LC8L9X)
    - <mark class="hltr-orange "> </mark> –Infinity (negative infinity) [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=7WDWI9TZ)
      - <mark class="hltr-yellow "> </mark> Any negative number that can’t be represented [Page 18 ](zotero://open-pdf/library/items/2BS329KQ?page=18&annotation=GPX73K37)
- BigInt(ES2020)
  - The biggest number: `2 ** 53 - 1`
  - Only 53 bits are used in JS to store the digits; the rest are used to store decimals
  - Numbers are represented as 64 bits

## <mark class="hltr-gray ">" NaN "</mark> [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=24WP33WV)

- not a number
- <mark class="hltr-yellow "> </mark> any operation involving NaN always returns NaN [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=5VZ83BB9)
- <mark class="hltr-yellow "> </mark> NaN is not equal to any value, including NaN [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=U4CXQP3U)
- <mark class="hltr-orange "> </mark> isNaN() function [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=SKYWJJEA)
  - <mark class="hltr-yellow "> </mark> to determine if the value is “not a number.” [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=QWYI8S8G)
  - <mark class="hltr-yellow "> </mark> Any value that cannot be converted into a number causes the function to return true. [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=M8ZM96DF)
  - ![](z-Assets/Paste%20image%201690789727897image.png)

## <mark class="hltr-gray ">" Number Conversions "</mark> [Page 20 ](zotero://open-pdf/library/items/2BS329KQ?page=20&annotation=5TYX6IXZ)

- <mark class="hltr-orange ">" Number() function 转型函数"</mark> [Page 20 ](zotero://open-pdf/library/items/2BS329KQ?page=20&annotation=67KS4CPB)
  - ![](z-Assets/Paste%20image%201690790014137image.png)
- <mark class="hltr-orange "> </mark> unary plus operator [Page 21 ](zotero://open-pdf/library/items/2BS329KQ?page=21&annotation=FC7LIRQT)

  - ```js
    +"";
    //convert a string to number
    ```

  - <mark class="hltr-yellow "> </mark> works the same as the Number () function. [Page 21 ](zotero://open-pdf/library/items/2BS329KQ?page=21&annotation=HWIFNUEM)

## Number 对象实例方法 [Page 17 ](zotero://open-pdf/library/items/6CRSJHBD?page=17&annotation=WN4YVWYP)

- <mark class="hltr-orange "> toString() </mark> [Page 17](zotero://open-pdf/library/items/6CRSJHBD?page=17&annotation=4WYH253H)
  - 参数
    - 可选地接收一个表示基数的参数
  - 返回值
    - 并返回相应基数形式的数值字符串
- <mark class="hltr-orange "> toFixed() </mark> [Page 18](zotero://open-pdf/library/items/6CRSJHBD?page=18&annotation=B38XUVSX)
  - ![](z-Assets/z-Assets/C05BasicReferenceTypes-18-x68-y469.png)
  - <mark class="hltr-yellow "> can represent numbers with 0 through 20 decimal places </mark> [Page 18](zotero://open-pdf/library/items/6CRSJHBD?page=18&annotation=5Y6GE2JY)
- <mark class="hltr-orange "> toExponential() </mark> [Page 18](zotero://open-pdf/library/items/6CRSJHBD?page=18&annotation=NK94UD7F)
  - ![](z-Assets/z-Assets/C05BasicReferenceTypes-18-x66-y196.png)
- <mark class="hltr-orange "> toPrecision() </mark> [Page 18](zotero://open-pdf/library/items/6CRSJHBD?page=18&annotation=NEW9XL9L)
  - ![](z-Assets/z-Assets/C05BasicReferenceTypes-18-x64-y67.png)
  - <mark class="hltr-yellow "> can represent numbers with 1 through 21 decimal places </mark> [Page 19](zotero://open-pdf/library/items/6CRSJHBD?page=19&annotation=Z69M7WK4)

## Number 构造函数方法

- <mark class="hltr-orange ">" parseInt() "</mark> [Page 21 ](zotero://open-pdf/library/items/2BS329KQ?page=21&annotation=I7R8K26N)

  - 参数
    - <mark class="hltr-yellow ">" If this first character isn’t a number, the minus sign, or the plus sign, parseInt() always returns NaN "</mark> [Page 21 ](zotero://open-pdf/library/items/2BS329KQ?page=21&annotation=KRFNH8EF)
    - <mark class="hltr-yellow ">" parseInt() provides a second argument: the radix 基数 (number of digits). "</mark> [Page 21 ](zotero://open-pdf/library/items/2BS329KQ?page=21&annotation=XQM7AC63)
  - 返回值
    - 默认为十进制数值
    - <mark class="hltr-yellow ">" it’s advisable to always include a radix to avoid errors. "</mark> [Page 22 ](zotero://open-pdf/library/items/2BS329KQ?page=22&annotation=F8A8J64T)
  - 用法

    - ```js
      let num = parseInt("0xAF", 16); // 175
      Number.parseInt("30px"); //return 30
      Number.parseInt("e23"); //return NaN
      Number.parseInt("30px", 10);
      //return 30
      ```

- <mark class="hltr-orange ">" parseFloat() "</mark> [Page 22 ](zotero://open-pdf/library/items/2BS329KQ?page=22&annotation=XRD4NPWT)

  - <mark class="hltr-yellow ">" a decimal point is valid the first time it appears, but a second decimal point is invalid and the rest of the string is ignored "</mark> [Page 22 ](zotero://open-pdf/library/items/2BS329KQ?page=22&annotation=MKU62BPB)

  - ```js
    Number.parseFloat("2.5rem");
    //return 2.5
    ```

- <mark class="hltr-orange "> </mark> isFinite() function [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=QEYIC3VT)

  - <mark class="hltr-yellow "> </mark> To determine if a value is finite (that is, it occurs between the minimum and the maximum) [Page 19 ](zotero://open-pdf/library/items/2BS329KQ?page=19&annotation=C2KJJ5E7)

  - ```js
    Number.isFinite();
    isFinite();
    ```

- `Number.isInteger()`

  - Check if a value is Interger

  - ```js
    Number.isInteger();
    ```

- <mark class="hltr-orange "> Number.isSafeInteger() </mark> [Page 19](zotero://open-pdf/library/items/6CRSJHBD?page=19&annotation=XCS5RBUS)
  - <mark class="hltr-yellow "> Number.MIN_SAFE_INTEGER, or -2^53 + 1 </mark> [Page 19](zotero://open-pdf/library/items/6CRSJHBD?page=19&annotation=GALJFVJ3)
  - <mark class="hltr-yellow "> Number.MAX_SAFE_INTEGER, or 2^53 - 1 </mark> [Page 19](zotero://open-pdf/library/items/6CRSJHBD?page=19&annotation=QKVQB3BU)
