---
category: Web Design
comment: 
aliases:
  - CSS @rules (at-rules)
draft: false
title: CSS @rules (at-rules)
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-18
DateModified: 2024-04-19
difficulty: Hard
topic:
  - Rules
Datereviewed: 2024-01-19T00:00:00.000+08:00
reviewed: 2
linter-yaml-title-alias: CSS @rules (at-rules)
---

# CSS @rules (at-rules)

## Intro

### to define and apply various special directives or rules, known as "at-rules."

## `@import`

### `@import "styles2.css";`

### `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap')`

## `@font-face`

### to define custom fonts

```css
@font-face {
	font-family: "CustomFont";
	src: url("custom-font.woff2") format("woff2");
}
```

## 🏷️[Media Query](Media-Query)

## `@supports`

### checks if a particular CSS feature is supported by the browser

```css
@supports (display: grid) {
	/* Styles for browsers that support CSS Grid */
}
```

## `@page`

### to define styles for printed pages

## `@keyframes`

### defining animations and specifying how a CSS animation should progress over time

```css
@keyframes slideIn {
	from {
		transform: translateX(-100%);
	}
	to {
		transform: translateX(0);
	}
}
```

### 🏷️[CSS Animation & Transition](CSS-Animation-&-Transition)
