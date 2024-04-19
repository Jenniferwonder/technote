---
category: Web Design
comment: 
aliases:
  - Basic Selectors
draft: false
title: Basic Selectors
type: D
tags:
  - CSS
DateStarted: 2024-01-09
DateModified: 2024-04-19
status: 
reviewed: 1
Datereviewed: 2024-01-09T00:00:00.000+08:00
topic: Selectors
difficulty: Good
linter-yaml-title-alias: Basic Selectors
---

# Basic Selectors

## Selector List

### combine these into a selector list, by adding a **comma** between them

### `h1, .special { color: blue;}`

## **Universal Selector**

### `*`

### reset stylesheets

- to remove the margins on all elements
- strip out all of the browser styling

### make your selectors easier to read, making it more obvious what the selector is doing

- `article *:first-child`{ }

### Global Style (全局样式设置)

## **Element Selector** (Type/ Tag name selector)

### `p, li, h1 { }`

### `body`

### `html`

## **ID Selector**

### `#onething`

### can be used only **once per page**, and elements can only have **a single id value** applied to them

### It can select an element that has the id set on it

### To only target the element without applying the block rules, precede the ID with a Type Selector

- `h1#heading {color: purple;}`
  - ‼️ The color will not be set to purple

### an ID has high specificity. It will overrule most other selectors.

### In most cases, it is preferable to add a **class** to an element instead of an ID

## **Class Selector**

### `.className{ }`

### select a subset of the elements without changing the others

### Targeting classes on particular elements

- `h1.highlight {background-color: pink;}`
- The rule will only apply to that particular element and class combination

### Target an element if it has more than one class applied

- `.notebox.warning {border-color: orange; font-weight: bold;}`
