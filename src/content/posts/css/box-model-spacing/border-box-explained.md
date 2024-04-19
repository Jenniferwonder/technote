---
category: Web Design
draft: false
title: border-box-explained
type: D
tags:
  - CSS
DateStarted: 2024-01-09
DateModified: 2024-04-19
status: 
reviewed: 1
Datereviewed: 2024-01-19T00:00:00.000+08:00
topic: Box
difficulty: Good
comment: ⭐⭐
---

## Border-Box Explained

### ⭐Standard CSS Box Model

- ![](<https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/CSS-Box-Model-(盒模型)-Standard-CSS-Box.png>)

### ⭐Alternative CSS Box Model

- border-box
- `box-sizing: border-box`
  - ![](<https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/CSS-Box-Model-(盒模型)-Border-Box.png>)
- 📌[Base Styles](Base-Styles)
- 📌To use the alternative box model for all of your elements (which is a common choice among developers)

  ```css
  html {
  	box-sizing: border-box;
  }
  *,
  *::before,
  *::after {
  	box-sizing: inherit;
  }
  ```

  - separates the reset from the global styling of all elements
    - explicitly sets the box-sizing for the root element and lets the rest inherit it
    - can be seen as a form of organization, especially if you have other global styles applied to the `<html>` element
