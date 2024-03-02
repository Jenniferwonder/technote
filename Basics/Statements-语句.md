---
Title: Statements-语句
Topic:
  - Basics
Type: D
DateStarted: 2023-07-13
DateModified: 2023-11-28
aliases:
  - Statements
status:
  - Mature
DateDo: 2023-07-12T00:00:00.000+08:00
DateDone: 2023-07-28T00:00:00.000+08:00
Reviewed: 2
---

# Statements-语句

## <mark class="hltr-yellow ">" Multiple statements can be combined into a code block "</mark> [Page 3 ](zotero://open-pdf/library/items/2BS329KQ?page=3&annotation=ZXVBT58F)

## <mark class="hltr-orange ">" also called flow-control statements "</mark> [Page 66 ](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=2VF6KXAJ)

## Conditionals

- <mark class="hltr-gray ">" The if Statement "</mark> [Page 66 ](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=U87WSUNB)
  - <mark class="hltr-yellow "> It’s considered best coding practice to always use block statements </mark> [Page 66](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=NRHPN9LX)
  - ![](z-Assets/Paste%20image%201690529359572image.png)
- <mark class="hltr-gray ">" The switch Statement "</mark> [Page 72 ](zotero://open-pdf/library/items/2BS329KQ?page=72&annotation=C84573YU)
  - <mark class="hltr-yellow "> The switch statement compares values using the identically equal operator, so no type coercion occurs </mark> [Page 74](zotero://open-pdf/library/items/2BS329KQ?page=74&annotation=DB4WPHM5)
  - ![](z-Assets/Paste%20image%201690529292548image.png)
- Tenary Operation/ Conditional Operators

  ```js
  activePlayer = activePlayer === 1 ? 2 : 1;
  ```

## Loops

- <mark class="hltr-gray ">" The do-while Statement "</mark> [Page 66 ](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=SV2XM65N)
  - <mark class="hltr-orange "> post-test loop </mark> [Page 66](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=UTI74GZM)
  - <mark class="hltr-yellow "> meaning that the escape condition is evaluated only after the code inside the loop has been executed </mark> [Page 66](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=QTGNV32X)
  - <mark class="hltr-yellow "> The body of the loop is always executed at least once </mark> [Page 66](zotero://open-pdf/library/items/2BS329KQ?page=66&annotation=2S9XVXHN)
  - ![](z-Assets/Paste%20image%201690529496174image.png)
- <mark class="hltr-gray ">" The while Statement "</mark> [Page 67 ](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=FK77AR7S)
  - <mark class="hltr-orange "> pretest loop </mark> [Page 67](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=9RZ8K2YG)
  - <mark class="hltr-yellow "> it is possible that the body of the loop is never executed </mark> [Page 67](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=RRS8J6KI)
  - ![](z-Assets/Paste%20image%201690529529772image.png)
- <mark class="hltr-gray ">" The for Statement "</mark> [Page 67 ](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=GU882LFC)
  - <mark class="hltr-orange "> pretest loop </mark> [Page 67](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=V67VFJXI)
  - <mark class="hltr-yellow "> the for statement one of the most used in the language </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=NAN44N4X)
    - <mark class="hltr-yellow "> with the added capabilities of variable initialization </mark> [Page 67](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=299N7A9J)
    - <mark class="hltr-yellow "> defining postloop code to be executed </mark> [Page 67](zotero://open-pdf/library/items/2BS329KQ?page=67&annotation=LGDZ4ZC5)
    - <mark class="hltr-yellow "> Nothing can be done with a for loop that can’t be done using a while loop </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=VLVWUALH)
  - <mark class="hltr-yellow "> the cleanest implementation is to use a let declaration inside the loop initialization to declare the iterator variable because its scope will be limited to only the loop itself. </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=AI8JCPL2)
  - <mark class="hltr-yellow "> If the body is executed, the postloop expression is also executed </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=FLCI44VW)
  - ![](z-Assets/Paste%20image%201690529552779image.png)
  - ![](z-Assets/Paste%20image%201690529642587image.png)
- <mark class="hltr-gray ">" The for-in Statement "</mark> [Page 68 ](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=C2AEGDF2)
  - <mark class="hltr-orange "> strict iterative statement </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=TALNCD6W)
  - <mark class="hltr-yellow "> used to enumerate the non-symbol keyed properties of an object </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=2ELCB3DF)
  - <mark class="hltr-yellow "> is used to display all the properties of the BOM window object </mark> [Page 68](zotero://open-pdf/library/items/2BS329KQ?page=68&annotation=QF6AEZXN)
  - ![](z-Assets/Paste%20image%201690529687869image.png)
- <mark class="hltr-gray ">" The for-of Statement "</mark> [Page 69 ](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=M3ALI9C5)
  - <mark class="hltr-orange "> strict iterative statement </mark> [Page 69](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=LGQ3I3DJ)
  - <mark class="hltr-yellow "> used to loop through elements in an iterable object </mark> [Page 69](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=596BJG5V)
  - <mark class="hltr-yellow "> the const operator in the control statement is not necessary but is recommended for ensuring the use of a local variable that will not be altered </mark> [Page 69](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=8ITIUUEP)
  - ![](z-Assets/Paste%20image%201690529801720image.png)

## <mark class="hltr-gray ">" Labeled Statements "</mark> [Page 69 ](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=C42TFP9R)

- - <mark class="hltr-yellow "> can be referenced later by using the break or continue statement. </mark> [Page 69](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=LPTU9BUA)
  - <mark class="hltr-yellow "> are typically used with nested loops. </mark> [Page 69](zotero://open-pdf/library/items/2BS329KQ?page=69&annotation=9JIS59K3)

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

## <mark class="hltr-gray ">" The break and continue Statements "</mark> [Page 70 ](zotero://open-pdf/library/items/2BS329KQ?page=70&annotation=HGG2V8WG)

- <mark class="hltr-orange "> break </mark> [Page 70](zotero://open-pdf/library/items/2BS329KQ?page=70&annotation=FC9BXEBE)
  - <mark class="hltr-yellow "> exits the loop immediately, forcing execution to continue with the next statement after the loop </mark> [Page 70](zotero://open-pdf/library/items/2BS329KQ?page=70&annotation=HF9QVUCY)
- <mark class="hltr-orange "> continue </mark> [Page 70](zotero://open-pdf/library/items/2BS329KQ?page=70&annotation=MH9MEQ47)
  - <mark class="hltr-yellow "> exits the loop immediately, but execution continues from the top of the loop </mark> [Page 70](zotero://open-pdf/library/items/2BS329KQ?page=70&annotation=Q3F8IMU7)

## <mark class="hltr-gray ">" The with Statement "</mark> [Page 71 ](zotero://open-pdf/library/items/2BS329KQ?page=71&annotation=AKEEUJ4A)

- <mark class="hltr-yellow "> sets the scope of the code within a particular object </mark> [Page 71](zotero://open-pdf/library/items/2BS329KQ?page=71&annotation=8RYHH4DI)
- <mark class="hltr-yellow "> was created as a convenience for times when a single object was being coded to over and over again </mark> [Page 71](zotero://open-pdf/library/items/2BS329KQ?page=71&annotation=RJHQUH4L)
- <mark class="hltr-orange "> In strict mode, the with statement is not allowed and is considered a syntax error. </mark> [Page 72](zotero://open-pdf/library/items/2BS329KQ?page=72&annotation=N7YCKCHH)
  - <mark class="hltr-yellow "> It is widely considered a poor practice to use the with statement in production code </mark> [Page 72](zotero://open-pdf/library/items/2BS329KQ?page=72&annotation=8JE9X9UD)
