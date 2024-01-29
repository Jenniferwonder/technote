---
Title: Template Literals 模板字面量
Topic:
  - String
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-01-26
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 2024-01-26
Reviewed: 1
Difficulty: Good
status: 
Comment:
---
Template Literals 模板字面量
- Template literals (模板字面量/字符串) `I'm ${firstName}`
	- template literals respect new line characters, and can be defined spanning multiple lines
	- template literals are especially useful when defining templates, such as HTML 
	- template literals will exactly match the whitespace inside the backticks
	- A correctly formatted template string may appear to have improper indentation 
- Interpolation 字符串插值
	- allows you to insert values at one or more places inside a single unbroken definition.
	- Invoking functions and methods inside interpolated expressions is allowed
- Template Literal Tag Functions 模板字面量标签函数
- A tag function is defined as a regular function and is applied to a template literal by being prepended to it,  
- tag functions
	- are able to define custom interpolation behavior.

### Nature of Strings 字符串特点
?
- Strings are **immutable** in ECMAScript
		- To change the string held by a variable, the original string must be destroyed and the variable filled with another string containing a new value
<!--SR:!2024-02-01,3,250-->