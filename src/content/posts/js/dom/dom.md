---
type: D
tags:
  - JavaScript
category: Programming
reviewed: 
difficulty: 
comment: 
draft: true
DateStarted: 2023-07-14
Datereviewed: 
DateModified: 2024-04-25
status:
  - Capturing
aliases:
  - DOM
  - C14
pages: 52
topic:
  - DOM
title: DOM
linter-yaml-title-alias: DOM
---

# DOM

### Selectors

选中 `ul` 节点下所有 `li` 节点下的 `img` 元素，返回一个数组

- `const imgNode = listNode.querySelectorAll('li > img')`

### offsetWidth/offsetHeight，clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

offsetWidth/offsetHeight 是元素的可见宽度/高度加上 padding、border 和滚动条（如果存在）的宽度/高度。

clientWidth/clientHeight 是元素的可见宽度/高度，不包括 padding 和滚动条。

scrollWidth/scrollHeight 是元素内容的完整宽度/高度，包括溢出部分。如果元素没有溢出，则 scrollWidth/scrollHeight 等于 clientWidth/clientHeight。如果有溢出，则 scrollWidth/scrollHeight 大于 clientWidth/clientHeight。

### mouseover/mouseout 与 mouseenter/mouseleave 的区别与联系

mouseover 和 mouseout 是 HTML DOM 事件，它们会在鼠标移入或移出元素时触发。它们也会在鼠标指针进入或离开**子元素**时触发。这也就是说，如果在父元素上有 mouseover 事件，并且鼠标指针进入子元素，则该元素上仍然会触发 mouseover 事件。mouseout 同理。

mouseenter 和 mouseleave 事件也是在鼠标进入或离开元素时触发。与 mouseover 和 mouseout 不同的是，mouseenter 和 mouseleave 事件**不会传播到子元素**。因此，如果鼠标指针进入或离开元素的子元素，则不会触发 mouseenter 和 mouseleave 事件。

### event.stopPropagation()与 event.stopImmediatePropagation 的区别

event.stopPropagation()可以阻止事件冒泡到父元素，但不阻止其他事件处理程序的执行。而 event.stopImmediatePropagation()可以立即阻止事件冒泡并取消同一元素上其他事件处理程序的执行。

### DOM API

#### Scroll

`.scrollIntoView()`

```js
imgNode.scrollIntoView({
	behavior: "smooth",
	block: "nearest",
	inline: "center",
});
```

#### Video

`.play()`  
`.pause()`

## Intro to DOM

### 文档对象模型 Document Object Model

- an application programming interface (API) for XML that was extended for use in HTML.
- DOM 表示 由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-O-JS-C14-DOM.png)

### Why DOM

- > " World Wide Web Consortium (W 3 C) "

### DOM 级别 ([C16-DOM Level 2 and 3](js/dom/C16-DOM-Level-2-and-3))

- > " DOM Level 1 "
  - > " the DOM Core "
  - > " DOM HTML "
- > " DOM Level 2 "

  - > " DOM views "
  - > " DOM events "

    - ```js
      guessSubmit.addEventListener("click", checkGuess);
      ```

  - > " DOM style "
  - > " DOM traversal and range "

- > " DOM Level 3 "
  - > " DOM Load and Save "
- > " DOM Living Standard "
- Reference
  - [Using the W3C DOM Level 1 Core - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)
- Overview
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Pasted-image-20230310114615.png)

### Other DOMs "

- > " The languages in the following list are XML-based, and each DOM adds methods and interfaces unique to a particular language "
  - > " Scalable Vector Graphics (SVG) "
  - > " Mathematical Markup Language (MathML) "
  - > " Synchronized Multimedia Integration Language (SMIL) "

### DOM Support in Web Browsers "

- > " For web browsers, however, the DOM has been implemented using ECMAScript and now makes up a large part of the JavaScript language. "

## DOM 节点层级

### 12 种节点类型

### Node Type

- The nodeName and nodeValue Properties
- Node Relationships
- Manipulating Nodes
- Other Methods

### Document Type

- Document Children
- Document Information
- Locating Elements "
- Special Collections "
- DOM Conformance Detection "
- Document Writing "

### Element Type

- HTML Elements "

- Selector

  - ```js
    const guessField = document.querySelector(".guessField");
    ```

- Getting Attributes "
- Setting Attributes "
- ClassList
  - `document.classList.add/toggle/remove`
- The attributes Property "
- Creating Elements "

- ```js
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  ```

- Element Children "
- appendChild

  - ```js
    document.body.appendChild(resetButton);
    ```

### Text Type

- Creating Text Nodes "
- Normalizing Text Nodes "
- Splitting Text Nodes "

### Comment Type

### CDATASection Type

### DocumentType Type

### DocumentFragment Type

### Attr Type

## DOM 编程/操作

### Dynamic Scripts "

### Dynamic Styles "

### Manipulating Tables "

### Using NodeLists "

### Reference

- [Manipulating documents - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

## MutationObserver 接口

### Basic usage "

- The observe() method "
- Working with Callbacks and MutationRecords "
- The disconnect() method "
- Multiplexing a MutationObserver "
- Reusing a MutationObserver "

### Controlling the Observer scope with MutationObserverInit "

- Observing attribute mutations "
- Observing character data mutations "
- Observing child mutations "
- Observing subtree mutations "

### Async Callbacks and the Record Queue "

- Behavior of the Record Queue "
- The takeRecords() method "

### Performance, Memory, and Garbage Collection "

- MutationObserver References "
- MutationRecord References "

## 📌[C15-DOM Extensions](js/dom/C15-DOM-Extensions)

### Selectors API

### 元素遍历

### HTML5

### 专有扩展
