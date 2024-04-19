---
category: Web Design
draft: false
title: css-overflowing-content
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-20
DateModified: 2024-04-19
difficulty: Good
reviewed: 1
Datereviewed: 2023-09-23T00:00:00.000+08:00
comment: ⭐⭐
topic: Text
---

### CSS Overflowing Content

- What is overflow?
  - Overflow happens when there is too much content to fit in a box
  - CSS tries to avoid "data loss"
    - CSS overflows in visible ways
- The overflow property
  - `overflow`
    - `visible`
      - by default
    - `hidden`
    - `scroll`
      - browsers with visible scrollbars will always display them—even if there is not enough content to overflow
      - `overflow-y: scroll`
        - To just scroll on the y axis
      - `overflow-x: scroll`
        - not recommended
        - recommend using `overflow-wrap`
    - `auto`
      - allows the browser to determine if it should display scrollbars
  - `overflow-wrap`
    - `normal`
    - `anywhere`
    - `word-break`
    - 📌[Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap)
  - `word-break`
    - 📌[Demo](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)
- 🟨Overflow establishes a [Block Formatting Context](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Block_formatting_context)
- ✅Test designs with large and small amounts of content.
  - Increase and decrease font sizes by at least two increments. Ensure your CSS is robust.
