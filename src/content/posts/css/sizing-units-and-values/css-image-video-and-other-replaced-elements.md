---
category: Web Design
aliases:
  - CSS Images, videos and other replaced elements
draft: false
title: CSS Images, videos and other replaced elements
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-21
DateModified: 2024-04-19
difficulty: Good
reviewed: 2
Datereviewed: 2024-01-19T00:00:00.000+08:00
comment: ⭐⭐⭐
topic:
  - Sizing
linter-yaml-title-alias: CSS Images, videos and other replaced elements
---

# CSS Images, videos and other replaced elements

## Replaced elements

### a replaced element is **an element whose representation is outside the scope of CSS**

### The **position** of the replaced element can be affected using CSS, but not the **contents**

### having an aspect ratio will be displayed using the intrinsic dimensions of the file by defaul

### Reference: https://developer.mozilla.org/en-US/docs/Web/CSS/Replaced_element

### Replaced elements in layout

- replaced elements, when they become part of a grid or flex layout, have different default behaviors

## Sizing images

### Responsive image

- `max-width: 100%`
  - to prevent image overflow while retaining aspect ratio
- `height: auto`
- [Responsive Image Techniques](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

### `object-fit`

- `object-fit: cover`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695297488732image.png)
- `object-fit: contain`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Paste-image-1695297501729image.png)
- `object-fit: fill`
  - fill the box without keeping aspect ratio
