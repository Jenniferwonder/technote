---
category: Web Design
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - Media Query
draft: false
title: Media Query
type: D
topic: 
tags:
  - CSS
DateStarted: 2024-01-22
DateModified: 2024-04-19
status: 
linter-yaml-title-alias: Media Query
---

# Media Query

## `@media`

### 💡used to create media queries

### use conditional logic for applying CSS styling

## Specifies a medium

### default to all

### `all`

### `print`

### `screen`

### `speech`

## Specifies a condition/ conditions

### `@media screen

    and (min-width: 600px)
    and (orientation: landscape)`

## Conditionally loading stylesheets

```html
<link rel="stylesheet" href="style.css" media="screen" />
<link rel="stylesheet" href="print.css" media="print" />
```

## Use Cases

### `@media screen and (min-width: 30em) {body {background-color: blue;}}`

- defines a blue background if the browser viewport is wider than 30em

### `@media (orientation: landscape)`

### 🏷️[Base Styles](Base-Styles)

- 🏷️[Color Scheme](Color-Scheme)
  - `@media (prefers-color-scheme: dark)`

### 🏷️[CSS Animation & Transition](CSS-Animation-&-Transition)

- `@media(prefers-reduced-motion: reduce/ no-preference)`

## Tailwind Customizing Screens

### https://tailwindcss.com/docs/screens

### [Handling Hover, Focus, and Other States - Tailwind CSS](https://tailwindcss.com/docs/hover-focus-and-other-states#media-and-feature-queries)

### [Responsive Design - Tailwind CSS](https://tailwindcss.com/docs/responsive-design)
