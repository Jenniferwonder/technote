---
category: Web Design
aliases:
  - Typography
draft: false
title: Typography
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-21
DateModified: 2024-04-19
Datereviewed: 2024-01-19T00:00:00.000+08:00
comment: ⭐⭐⭐
reviewed: 3
difficulty: Hard
topic: Text
linter-yaml-title-alias: Typography
---

# Typography

## Fonts

### `font-family`

- 📌[Google Fonts](https://fonts.google.com/)

```html
<link
	href="https://fonts.googleapis.com/css?family=Rock+Salt"
	rel="stylesheet"
	type="text/css"
/>
```

- Web safe fonts
  - 📌[cssfontstack.com](https://www.cssfontstack.com/)
    - maintains a list of web safe fonts available
- Default fonts
  - CSS defines five generic names for fonts: `serif`, `sans-serif`, `monospace`, `cursive`, and `fantasy`
- Font stacks

### `font-size`

- [CSS Values and Units](CSS-Values-and-Units)
- ⭐Fluid/ responsive typography
  - `font-size: clamp(48px, 4.8vw, 64px);`
    - the minimum size
    - the preferred size
    - the maximum size

### `line-height`

- Line height
- [CSS Values and Units](CSS-Values-and-Units)

### `font-weight`

- `normal`, `bold`
- `lighter`, `bolder`
- `100`-`900`

### `font-style`

- `normal`
- `italic`
- `oblique`

### `font-variant`

- Switch between small caps and normal font alternatives

### `font-stretch`

- Switch between possible alternative stretched versions of a given font

### Font shorthand

- written in the following order: `font-style`, `font-variant`, `font-weight`, `font-stretch`, `font-size`/`line-height`, and `font-family`
  - `font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;`

### `color`

## Text Style

### `text-transform`

- `uppercase`, `lowercase`
- `capitalize`
- `full-width`
- `none`

### `text-decoration`

- `none`
- `underline`
- `overline`
- `line-through`
- can accept multiple values at once
  - `text-decoration: underline overline`

### `text-shadow`

- `text-shadow: 4px 4px 5px red;`
- horizontal, vertical, blur radius, base color of the shadow
- can apply multiple shadows
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695304143112image.png)
- 📌[Box Shadow](Box-Shadow)

## Text Layout

### `text-align`

- `left`, `right`, `center`
- `justify`
  - Makes the text spread out, varying the gaps in between the words so that all lines of text are the same width

### `letter-spacing`

### `word-spacing`

### [CSS Text Directions](CSS-Text-Directions)

- `writing-mode`

### [CSS Overflowing Content](CSS-Overflowing-Content)

- `overflow-wrap`

## 📌 Reference: https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals
