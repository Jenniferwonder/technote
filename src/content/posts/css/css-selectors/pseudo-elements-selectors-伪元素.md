---
aliases:
  - Pseudo Elements Selectors (伪元素)
category: Web Design
comment: 
draft: false
title: Pseudo Elements Selectors (伪元素)
type: D
tags:
  - CSS
DateStarted: 2024-01-09
DateModified: 2024-04-19
status: 
reviewed: 1
Datereviewed: 2024-01-09T00:00:00.000+08:00
topic: Selectors
difficulty: Hard
linter-yaml-title-alias: Pseudo Elements Selectors (伪元素)
---

# Pseudo Elements Selectors (伪元素)

### Select **a certain part of an element** rather than the element itself

- Act as if you had added a whole new HTML element into the markup, rather than applying a class to existing elements

### Structural

- `p::first-line{ }`
  - Selects the first line of text inside an element
  - If the number of words increases or decreases it will still only select the first line
- `::first-letter`
- `::before`
- `::after`
  - ! Set other properties to make sure it's identical to the button parent
    - display: in-line block
    - height: 100%
    - width: 100%
    - border-radius: 100px
  - ! Set its position behind the buttons
    - position: absolute
      - ! for child element
  - `:hover::after`

### Selection

- `::selection`
  - Applies styles to the portion of a document that has been highlighted (selected) by the user

### Marker (List related)

- `::marker`
  - Styles the marker box of a list item. It allows you to style the bullet or number in a list

### Placeholder

- `::placeholder`

### Scrollbar

- `::scrollbar`
- `::track`
- `::thumb`
- `::corner`

### File Input (Form related)

- `::file-selector-button`
- `::file-selector-arrow`

### To Generate Content

- `::content`
- `content:""`
  - The property must be used along with
  - Whenever you see these selectors, look at the content property to see what is being added to the HTML element.
- 📌to insert an icon
  - `.box::after {content: " ➥";}`
    - a visual indicator that we wouldn't want read out by a screen reader
- 📌to insert an empty string
  - set this to `display: block` in order that we can style it with a width and height. We then use CSS to style it just like any element
- 📌Example: [CSS Arrow Box](https://cssarrowplease.com/)

### Backdrop

- `::backdrop`
