---
category: Web Design
aliases:
  - Styling Lists
draft: false
title: Styling Lists
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-22
DateModified: 2024-04-19
comment: ⭐⭐
Datereviewed: 2023-09-23T00:00:00.000+08:00
reviewed: 1
difficulty: Hard
topic: Text
linter-yaml-title-alias: Styling Lists
---

# Styling Lists

## List Types

### **Ordered list**

- `ol`
- 📌have a top and bottom margin of 16px (1em) and a padding-left of 40px (2.5em)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695359623245image.png)

### **Unordered list**

- `ul`
- 📌have a top and bottom margin of 16px (1em) and a padding-left of 40px (2.5em)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695359559748image.png)

### **List element**

- `li`
- 📌have no set defaults for spacing.

### **Description list**

- `dl`
- **`dt`**
  - description terms in `dl`
- **`dd`**
  - description details in `dl`, after `dt`
  - 📌have margin-left of 40px (2.5em).
- 📌has a top and bottom margin of 16px (1em), but no padding set.
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695359663654image.png)

## List Spacing

### `font-size`

### `line-height`

### `font-weight`

## List-specific styles

### **`list-style-type`**

- 📌Sets the type of bullets to use
- 📌[List style values](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type)
  - for unordered list
    - `circle`
      - A hollow circle
    - `disc`
      - A filled circle (by default)
    - `square`
    - Or use [@counter-style](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style)
  - for ordered list
    - `decimal`
      - begin with `1.`
    - `decimal-leading-zero`
      - Decimal numbers, padded by initial zeros.
    - `lower-alpha`, `lower-latin` or `upper-alpha`, `upper-latin`
      - ASCII letters
    - `simp-chinese-formal` or `simp-chinese-informal`
    - `lower-roman` or `upper-roman`

### **`list-style-position`**

- **`inside`**
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695361307475image.png)
- **`outside`**
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695361275290image.png)

### Use a custom bullet image

- **`list-style-image`**
  - 📌use a custom image for your bullet
  - ⚠️is a bit limited in terms of controlling the position, size, etc. of the bullets (better using `background` properties)
  - `list-style-image: url(star.svg);`
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695361727361image.png)

### List-style shorthand

- `list-style`
- The above mentioned three property values in any order

## Controlling list counting

### `start`

### `reversed`

### `value`
