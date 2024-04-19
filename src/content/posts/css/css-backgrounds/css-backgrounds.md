---
category: Web Design
aliases:
  - CSS Backgrounds
draft: false
title: CSS Backgrounds
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-20
DateModified: 2024-04-19
difficulty: Hard
reviewed: 1
Datereviewed: 2023-09-23T00:00:00.000+08:00
comment: ⭐
topic:
  - Background
linter-yaml-title-alias: CSS Backgrounds
---

# [CSS](O-CSS) Backgrounds

## Shorthand Property & Values

### `background: url(bg-graphic.png) 10px 10px repeat-x fixed, red;`

- ```css
  background-color: red;
  background-image: url(bg-graphic.png);
  background-position: 10px 10px;
  background-repeat: repeat-x;
  background-attachment: fixed;
  ```

### A background-color may only be specified **after the final comma**

### The value of `background-size` may only be included immediately after **`background-position`**, separated with the '/' character, like this: center/80%

## `background-image`

### Image URL (absolute/ relative)

- `url('moon.jpg')`

### ⭐Gradient backgrounds

- `linear-gradient (to left, color 1, color 2)`
- `radial-gradient(circle, rgba(0,249,255,1) 39%, rgba(51,56,57,1) 96%)`
- 📌[Gradient Generator](https://cssgradient.io/)

### Multiple background images

- Each value of the different properties will match up to the values in the same position in the other properties.

### Image & Gradient Combination

## `background-repeat`

### `no-repeat`

- stop the background from repeating altogether.

### `repeat-x`

- repeat horizontally

### `repeat-y`

- repeat vertically

### `repeat`

- the default; repeat in both directions

## `background-position`

### uses a coordinate system in which the **top-left-hand corner** of the box is (0,0)

### 2 value

- **horizontal, vertical**
  - `background-position: top center;`
  - `background-position: 20px 10%;`
  - `background-position: 20px top;`

### 4 value

- indicate a distance from certain edges of the box
- 📌positioning the background **20px from the top and 10px from the right**
  - `background-position: top 20px right 10px;`

## `background-size`

### `cover`

- make the image just large enough so that it completely covers the box area while still retaining its aspect ratio
- 📌part of the image may end up outside the box

### `contain`

- make the image the right size to fit inside the box
- 📌may end up with gaps on either side

### length or percentage value

- `background-size: 100px 10em;`

## `background-attachment`

### `scroll`

- causes the element's background to **scroll when the page is scrolled**

### `fixed`

- causes an element's background to **be fixed to the viewport**

### `local`

- fixes the background to **the element it is set on**

### 📌 [Demo](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html)

## `background-color`

### Define background color

## 📌Accessibility consideration

### Any important content should be part of the HTML page and not contained in a background.
