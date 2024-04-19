---
category: Web Design
aliases:
  - CSS Positioning
draft: false
title: CSS Positioning
type: D
tags:
  - CSS
status: 
DateStarted: 2023-10-01
DateModified: 2024-04-19
comment: ⭐⭐⭐
topic:
  - Layout
difficulty: Hard
Datereviewed: 2024-01-19T00:00:00.000+08:00
reviewed: 1
linter-yaml-title-alias: CSS Positioning
---

# CSS Positioning

## Purpose

### ✅to precisely control the placement of boxes inside other boxes.

## Position values

### a set of 2D coordinates

### two values — the first sets the position **horizontally**, the second **vertically**

### `background-position: right 40px;`

- positioned a background image 40px from the top and to the right of the container using a keyword

## Static positioning

### the default

## Relative positioning

### ✅to move an element relative to its position in normal flow, as well as to make it overlap other elements on the page

### `position: relative`

### `top: 30px`

- it's as if a force will push the top of the box, causing it to move **downwards (in the opposite direction)** by 30px

## Absolute positioning

### Positioning context

- ✅fixes an element in place relative to **its nearest positioned ancestor** (**the initial containing block** if there isn't one)
  - moves an element completely out of the page's normal layout flow
  - dependent on the position property of the ancestors of the positioned element
- by default
  - all ancestor elements will have a static position
  - the absolutely positioned element will be positioned relative to **the initial viewport**. It will be contained in the **initial containing block**, which has the dimensions of the **viewport** and is also the block that contains the `<html>` element
- 📌Reference: [Layout and the containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block)

### `position: absolute`

### **z-index**

- To change the stacking order
- positive values move them higher up the stack, negative values move them lower down the stack

### 📌Applications

- popup information boxes, control menus, rollover panels, UI features that can be dragged and dropped anywhere on the page

## Fixed positioning

### ✅similar to absolute positioning except that it fixes an element relative to **the browser viewport**, not another element

### `position: fixed`

### 📌 Applications

- persistent navigation menus that are always visible no matter how much the page scrolls.

## Sticky positioning

### makes an element act like `position: relative` until it hits a defined offset from the viewport, at which point it acts like `position: fixed`.

### Sticky elements are "sticky" relative to the nearest ancestor with a "scrolling mechanism", which is determined by its ancestors' position property.

### 📌Applications

- create a scrolling index page where different headings stick to the top of the page as they reach it

## `object-position`

### `bottom/ top/ center/ left/ right/ left bottom/ ...`

### 🏷️[CSS Image-Video and other Replaced elements](CSS-Image-Video-and-other-Replaced-elements)
