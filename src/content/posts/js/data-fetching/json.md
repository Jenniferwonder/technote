---
type: 
Datereviewed: 
reviewed: 
difficulty: 
comment: 
title: json
tags:
  - JavaScript
DateStarted: 2022-12-05
DateModified: 2024-04-25
status: 
category: Programming
topic:
  - DataStore
draft: true
---

> [JSON - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) >[Working with JSON - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON) >[JSON - MDN Web Docs Glossary: Definitions of Web-related terms | MDN](https://developer.mozilla.org/en-US/docs/Glossary/JSON)

## Tool

- ⭐[JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/)
- 🚀[My JSON Server - Fake online REST server for teams](https://my-json-server.typicode.com/)
- [JSONT](https://www.jsont.run/)| A simple and powerful online JSON formatting tool

## What is JSON?

- JavaScript Object Notation (JSON): 对象表示法
- a standard text-based format for representing structured data based on JavaScript object syntax.
- commonly used for transmitting data in web applications (e.g., sending some data from the server to the client, or vice versa)
- JSON can represent numbers, booleans, strings, `null`, arrays (ordered sequences of values), and objects (string-value mappings) made up of these values (or of other arrays and objects).
- JSON exists as a **string** — useful when you want to transmit data across a network.
- JSON needs to be converted to a native JavaScript Object when you want to access the data -- Using built-in Object [JSON](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON)

## Obtain JSON

- Fake JSON data: https://jsonplaceholder.typicode.com
- To obtain the JSON, we use an API called [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API).
  - This API allows us to make network requests to retrieve resources from a server via JavaScript (e.g. images, text, JSON, even HTML snippets), meaning that we can update small sections of content without having to reload the entire page.

## Parse JSON

## Create JSON


### JSON.stringify 有什么缺点？
`JSON.stringify()`是一个将 JavaScript 对象转换为 JSON 字符串的方法。尽管它在许多情况下非常有用，但它确实存在一些限制和缺点：
1. 循环引用：`JSON.stringify()`无法处理具有循环引用的对象。如果一个对象的属性直接或间接引用了自身，`JSON.stringify()`将抛出一个错误，表示存在循环引用。
2. `undefined`、函数和 Symbol 忽略：`JSON.stringify()`不会序列化对象中的`undefined`、函数和 Symbol 类型的属性。这些属性将被忽略，不会出现在生成的 JSON 字符串中，单独转换则会返回`undefined`。
3. 丢失原型链：在对象序列化后，原型链上的属性和方法将丢失。只有对象自身的可枚举属性会被序列化。因此，在反序列化（使用`JSON.parse()`）后，原始对象的原型链信息将不复存在。
4. 日期对象处理：当使用`JSON.stringify()`序列化日期对象时，日期对象会被转换为它们的 ISO 字符串表示形式。在反序列化时，这些日期将被视为普通字符串，而不是日期对象。
5. 非数组和非对象的值：对于不是数组或对象的顶层值（例如：字符串、数字、布尔值等），`JSON.stringify()`会直接返回其对应的 JSON 表示，而不会将其包装在对象或数组中。



