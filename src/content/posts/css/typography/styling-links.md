---
category: Web Design
aliases:
  - Styling Links
draft: false
title: Styling Links
type: D
tags:
  - CSS
DateStarted: 2023-09-22
DateModified: 2024-04-19
status: 
comment: ⭐⭐
Datereviewed: 2023-09-23T00:00:00.000+08:00
reviewed: 1
difficulty: Hard
topic: Text
linter-yaml-title-alias: Styling Links
---

# Styling Links

## Reference

- [Styling Links](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links#lets_look_at_some_links)

## Link states & Default styles

### **a**

- `<a href="http://example.com">link</a>`
- Select the anchor element

### **:link**

- A link that has a destination (i.e., not just a named anchor)
- 📌Links are underlined.

### **:visited**

- unvisited, visited
- 📌Unvisited links are blue. Visited links are purple.

### **:focus**

- focused via the keyboard
- 📌Focused links have an outline around them

### **:hover**

- being hovered over
- 📌Hovering a link makes the mouse pointer change to a little hand icon.

### **:active**

- ! When a button is clicked
- in the process of being clicked (activated)
- 📌Active links are red

### ⭐ The above order matters when styling links, cuz link styles build on one another

## To change default styles

### `color`

### `cursor`

- mouse pointer style

### `outline`

- text outline, similar to a border

### `background`

### Refer to [Typography](Typography)

- `text-align`
- `line-height`
- `text-decoration`

## Including icons on links

### ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695366049825image.png)

### specify the position as 100% of the way to the right of the text content, and 0 pixels from the top.

### Refer to [CSS Selectors](CSS-Selectors)

## Styling links as buttons
