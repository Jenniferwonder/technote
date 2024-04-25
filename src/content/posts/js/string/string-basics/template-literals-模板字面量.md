---
draft: false
aliases:
  - Template literals-模板字面量
title: Template literals-模板字面量
topic:
  - String
type: D
tags:
  - JavaScript
DateStarted: 2024-01-26
DateModified: 2024-04-25
Datereviewed: 2024-01-26
reviewed: 1
difficulty: Good
status: 
comment: 
linter-yaml-title-alias: Template literals-模板字面量
category: Programming
---

# Template literals-模板字面量

- `I'm ${firstName}`
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

- Strings are **immutable** in ECMAScript
  - To change the string held by a variable, the original string must be destroyed and the variable filled with another string containing a new value
