---
Title: Math
Type: D
DateStarted: 2022-12-01
DateModified: 2023-11-28
status: Young
mindmap-plugin: basic
LeadTime: "17"
DateDo: 2023-07-18T00:00:00.000+08:00
DateDone: 2023-08-03T00:00:00.000+08:00
Cards: 21
Cards-D: "2"
Page-D: "0"
EST: "-19555"
Reviewed: 2
Topic:
  - JS-Math
---

# [[O-JS|D-JS]] Math

## Metadata
- Reference:: [Math - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math), [Basic math in JavaScript — numbers and operators - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Math)

## The Math Object
- <mark class="hltr-yellow "> as a common location for mathematical formulas, information, and computation. </mark> [Page 37](zotero://open-pdf/library/items/6CRSJHBD?page=37&annotation=VPZPIDZL)
- <mark class="hltr-yellow "> offers a number of properties and methods to help these computations. </mark> [Page 37](zotero://open-pdf/library/items/6CRSJHBD?page=37&annotation=LYTKBR3G)
- <mark class="hltr-yellow "> The computations available on the Math object execute faster than if you were to write the computations in JavaScript directly </mark> [Page 37](zotero://open-pdf/library/items/6CRSJHBD?page=37&annotation=AGTN3RFT)
- <mark class="hltr-yellow "> A side-effect of this is that precision of these operations may vary between browsers, operating systems, instruction sets, and hardware. </mark> [Page 37](zotero://open-pdf/library/items/6CRSJHBD?page=37&annotation=JMXPAXA3)

## " Math Object Properties " [Page 38 ](zotero://open-pdf/library/items/6CRSJHBD?page=38&annotation=DNAZUPG4)
- ![[C05BasicReferenceTypes-38-x45-y370.png|475]]
- PI

    -
      ```js
      Math.PI * Number.parseFloat("10px") ** 2;
      //get the area of a circle with the specified radius
      ```


## " The min() and max() Methods " [Page 38 ](zotero://open-pdf/library/items/6CRSJHBD?page=38&annotation=VHB44J9M)
- <mark class="hltr-orange "> min() and max() </mark> [Page 38](zotero://open-pdf/library/items/6CRSJHBD?page=38&annotation=7Y9MS5Q8)

    -
      ```js
      Math.max(3, 8, 6);
      //get the maximum number
      Math.min(3, 8, 6);
      //get the minimum number
      ```

- <mark class="hltr-yellow "> determine which number is the smallest or largest in a group of numbers </mark> [Page 38](zotero://open-pdf/library/items/6CRSJHBD?page=38&annotation=47GLXH82)

## " Rounding Methods-舍入方法" [Page 39 ](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=IU6BVY3Y)
- <mark class="hltr-orange "> Math.ceil() </mark> [Page 39](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=S7VVU943)
- <mark class="hltr-orange "> Math.floor() </mark> [Page 39](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=69WG8NPL)
- <mark class="hltr-orange "> Math.round() </mark> [Page 39](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=L2TGFRM8)
- <mark class="hltr-orange "> Math.fround() </mark> [Page 39](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=EDVMSG7H)

-
  ```js
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


## " The random() Method" [Page 39 ](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=GQZ7CPFF)
- <mark class="hltr-yellow "> returns a random number between the 0 and the 1, not including either 0 or 1 </mark> [Page 39](zotero://open-pdf/library/items/6CRSJHBD?page=39&annotation=EB8BY9SH)
- <mark class="hltr-yellow "> to select a number between 1 and 10 </mark> [Page 40](zotero://open-pdf/library/items/6CRSJHBD?page=40&annotation=44DHMKFJ)
    - <mark class="hltr-yellow "> let num = Math.floor(Math.random() \* 10 + 1); </mark> [Page 40](zotero://open-pdf/library/items/6CRSJHBD?page=40&annotation=6NTC2KL2)

-
  ```js
  // Random number from 1-6
  Math.trunc(Math.random() * 6) + 1;
  // Random number from min-max
  Math.trunc(Math.random() * (max - min) + 1) + min;
  ```


## " Other Methods " [Page 40 ](zotero://open-pdf/library/items/6CRSJHBD?page=40&annotation=B889WBT4)
- Root

    -
      ```js
      Math.sqrt(25)(
          //return 5
          //similar to "25 ** (1 / 2)"
          8 ** (1 / 3)
      );
      //return 2
      //to get the cubic root
      ```

- Absolute value of a negative number

    -
      ```JS
      Math.abs(-2) // 2
      ```

- Even/ Odd

    -
      ```js
      //Check if a number is an Even number
      //To repeat sth every N time
      const isEven = (n) => n % 2 === 0;
      ```