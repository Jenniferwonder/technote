---
aliases:
  - Loops-循环语句
title: Loops-循环语句
topic:
  - Loop
type: D
tags:
  - JavaScript
category: Programming
Datereviewed: 2024-04-25
reviewed: 2
difficulty: 
status: 
comment: 
draft: false
DateStarted: 2024-04-25
DateModified: 2024-04-25
linter-yaml-title-alias: Loops-循环语句
---
# Loops-循环语句
### for...in 和 for...of 的区别?
for...in 循环用于遍历对象的可枚举属性，返回的是属性名称；for...of 循环用于遍历可迭代对象（如数组、字符串、Map、Set 等），返回的是元素值。
#### The for-in Statement
  - strict iterative statement
  - used to enumerate the non-symbol keyed properties of an object
  - is used to display all the properties of the BOM window object
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529687869image.png)
#### The for-of Statement
  - strict iterative statement
  - used to loop through elements in an iterable object
  - the const operator in the control statement is not necessary but is recommended for ensuring the use of a local variable that will not be altered
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529801720image.png)
### The do-while Statement
  - post-test loop
  - meaning that the escape condition is evaluated only after the code inside the loop has been executed
  - The body of the loop is always executed at least once
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529496174image.png)
### The while Statement
  - pretest loop
  - it is possible that the body of the loop is never executed
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529529772image.png)
### The for Statement
  - pretest loop
  - the for statement one of the most used in the language
    - with the added capabilities of variable initialization
    - defining postloop code to be executed
    - Nothing can be done with a for loop that can’t be done using a while loop
  - the cleanest implementation is to use a let declaration inside the loop initialization to declare the iterator variable because its scope will be limited to only the loop itself.
  - If the body is executed, the postloop expression is also executed
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529552779image.png)
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690529642587image.png)
