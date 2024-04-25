---
category: Web Design
aliases:
  - Box Display Types (Block and Inline Boxes)
draft: false
title: Box Display Types (Block and Inline Boxes)
type: D
tags:
  - CSS
DateStarted: 2024-01-09
DateModified: 2024-04-25
status: 
reviewed: 1
Datereviewed: 2024-01-19T00:00:00.000+08:00
topic: Box
difficulty: Good
comment: ⭐⭐⭐
linter-yaml-title-alias: Box Display Types (Block and Inline Boxes)
---

# Box Display Types (Block and Inline Boxes)

## Inner display type

### Outer display type

- 📌 dictates how the box itself is displayed

### Inner display type

- 📌 dictates how elements inside that box are laid out

## Outer display type

### `display: block;`

- The box will break onto a new line
- The `width` and `height` properties are respected
- `padding`, `margin` and `border` will cause other elements to be pushed away from the box
- If `width` is not specified, the box will extend in the inline direction to fill the space available in its container.
  - In most cases, the box will become as wide as its container, filling up 100% of the space available.
- 📌`<h1>` and `<p>`, use **block** as their outer display type by default

### `display: inline;`

- The box will not break onto a new line
- The `width` and `height` properties will not apply
- Top and bottom padding, margins, and borders will apply but will **not cause** other inline boxes to move away from the box
- Left and right padding, margins, and borders will apply and will **cause** other inline boxes to move away from the box.
- ![](<https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/css-box-model-(盒模型)-inline.png>)
- 📌 `<a>`, `<span>`, `<em>` and `<strong>` use **inline** as their outer display type by default

### `display: inline-block`

- provides a middle ground
- Use it if you do not want an item to break onto a new line, but do want it to respect width and height
  - ![](<https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/css-box-model-(盒模型)-inline-block.png>)
- Allow padding to be set on it, making it easier for a user to click the link

## 🏷️[Hiding Elements](Hiding-Elements)

### `display: none`

## 🏷️[Floats](Floats)

### `display: flow-root`

## 🏷️[Flexbox](Flexbox)

### `display: flex`

### `inline-flex`

### `contents`

- create a “phantom” container whose children act like direct children of the parent

## 🏷️[Grids](Grids)

### `display: grid`

### `inline-grid`

## 🏷️[Table Style](Table-Style)

### `display: table`

### `display: inline-table`

### `table-caption`

### `table-header-group`

### `table-footer-group`

### `table-row-group`

### `table-column-group`

### `table-row`

### `table-column`

### `table-cell`

### [Table](https://tailwindcss.com/docs/display#table)

## 🏷️[Styling Lists](Styling-Lists)

### `display: list-item`
