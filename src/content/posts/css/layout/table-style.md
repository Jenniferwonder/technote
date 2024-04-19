---
category: Web Design
aliases:
  - Styling Tables
draft: false
title: Styling Tables
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-21
DateModified: 2024-04-19
Datereviewed: 2024-01-19T00:00:00.000+08:00
reviewed: 2
difficulty: Hard
topic:
  - Layout
comment: ⭐⭐
linter-yaml-title-alias: Styling Tables
---

# Styling Tables

## A typical HTML table

### https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables

### **`<table>`**

- **`<caption>`**
- **`thead`**
  - `<tr>`
  - `<th scope ="col">`
- **`tbody`**
  - `<th scope="row">`
  - `<td>`
- **`tfoot`**
  - `<td colspan="2">`

## Styling our table

### Spacing and layout

- **`table-layout: fixed`**
  - makes the table behave a bit more predictably by default
  - Normally, table columns tend to be sized according to how much content they contain, which produces some strange results
- **`border-collapse: collapse;`**
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695300802216image.png)
- **`thead th:nth-child(n)`**
  - Select the n-th child that is a `<th>` element in a sequence, inside a `<thead>` element
- 📌[Fixed Table Layout](https://css-tricks.com/fixing-tables-long-strings/)

### Typography

- [Typography](../../Typography/Typography)

### Graphics and colors

- Zebra striping
  - make alternative rows easier to read
  - **`tbody tr:nth-child(odd) { }`**
    - => `(2n-1)`
  - **`tbody tr:nth-child(even) { } `**
    - => `(2n)`
  - Refer to: [CSS Selectors](CSS-Selectors)

### Styling the caption

- **`caption-side: bottom`**
  - causes the caption to be positioned on the bottom of the table
