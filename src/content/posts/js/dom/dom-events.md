---
type: D
tags:
  - JavaScript
category: Programming
Datereviewed: 
reviewed: 
difficulty: 
comment: 
draft: true
DateStarted: 2023-07-14
DateModified: 2024-04-25
status:
  - ToDo
aliases:
  - DOM Events
pages: 69
topic:
  - DOM
title: DOM Events
linter-yaml-title-alias: DOM Events
---

# DOM Events

### offsetWidth/offsetHeight，clientWidth/clientHeight 与 scrollWidth/scrollHeight 的区别

offsetWidth/offsetHeight 是元素的可见宽度/高度加上 padding、border 和滚动条（如果存在）的宽度/高度。

clientWidth/clientHeight 是元素的可见宽度/高度，不包括 padding 和滚动条。

scrollWidth/scrollHeight 是元素内容的完整宽度/高度，包括溢出部分。如果元素没有溢出，则 scrollWidth/scrollHeight 等于 clientWidth/clientHeight。如果有溢出，则 scrollWidth/scrollHeight 大于 clientWidth/clientHeight。

### mouseover/mouseout 与 mouseenter/mouseleave 的区别与联系

mouseover 和 mouseout 是 HTML DOM 事件，它们会在鼠标移入或移出元素时触发。它们也会在鼠标指针进入或离开**子元素**时触发。这也就是说，如果在父元素上有 mouseover 事件，并且鼠标指针进入子元素，则该元素上仍然会触发 mouseover 事件。mouseout 同理。

mouseenter 和 mouseleave 事件也是在鼠标进入或离开元素时触发。与 mouseover 和 mouseout 不同的是，mouseenter 和 mouseleave 事件**不会传播到子元素**。因此，如果鼠标指针进入或离开元素的子元素，则不会触发 mouseenter 和 mouseleave 事件。

### event.stopPropagation()与 event.stopImmediatePropagation 的区别

`event.stopPropagation()`可以阻止事件冒泡到父元素，但不阻止其他事件处理程序的执行。而 `event.stopImmediatePropagation()`可以立即阻止事件冒泡并取消同一元素上其他事件处理程序的执行。

- EVENT FLOW

- Event Bubbling

- Event Capturing

- DOM Event Flow

- EVENT HANDLERS

- HTML Event Handlers

- DOM Level 0 Event Handlers

- DOM Level 2 Event Handlers

- Internet Explorer Event Handlers

- Cross-Browser Event Handlers "

- THE EVENT OBJECT "

- The DOM Event Object "

- The Internet Explorer Event Object "

- The Cross-Browser Event Object "

- EVENT TYPES "

- UI Events "

- The load Event "

- The unload Event "

- The resize Event "

- Focus Events "

- Mouse and Wheel Events "

- Client Coordinates "

- Page Coordinates "

- Screen Coordinates "

- Modifier Keys "

- Related Elements "

- Buttons "

- Additional Event Information "

- The mousewheel Event "

- Touch Device Support "

- Accessibility Issues "

- Keyboard and Text Events "

- Key Codes "

- Character Codes "

- DOM Level 3 Changes "

- The textInput Event "

- Keyboard Events on Devices "

- Composition Events "

- Mutation Events "

- HTML5 Events "

- The contextmenu Event "

- The beforeunload Event "

- The DOMContentLoaded Event "

- The readystatechange Event "

- The pageshow and pagehide Events "

- The hashchange Event "

- Device Events "

- The orientationchange Event "

- The deviceorientation Event "

- The devicemotion Event "

- Touch and Gesture Events "

- Touch Events "

- Gesture Events "

- Event Reference "

- MEMORY AND PERFORMANCE "

- Event Delegation "

- Removing Event Handlers "

- SIMULATING EVENTS "

- DOM Event Simulation "

- Simulating Mouse Events "

- Simulating Keyboard Events "

- Simulating Other Events "

- Custom DOM Events "

- Internet Explorer Event Simulation "
