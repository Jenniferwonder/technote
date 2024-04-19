---
category: Web Design
aliases:
  - Flexbox
draft: false
title: Flexbox
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-25
DateModified: 2024-04-19
comment: ⭐⭐⭐
difficulty: Hard
topic:
  - Layout
Datereviewed: 2024-01-19T00:00:00.000+08:00
reviewed: 2
linter-yaml-title-alias: Flexbox
---

# Flexbox

## `display:flex`

### to the parent element of the elements you want to lay out

## Axis

### ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/web-design/Flexbox-Axis.png)

## `flex-flow: row wrap`

### `flex-direction: row/ column/ row-reverse/ column-reverse`

### `flex-wrap: wrap`

- to prevent overflow content

## Flexible sizing of flex items

### Default Behavior (when flex container is too small/ big to contain items)

- shrink/ grow flex items to fit the container
- otherwise: overflow happens

### `flex`

- Shorthand
  - `flex: 1 1 0%`
    - allow a flex item to grow and shrink, ignoring its initial size
  - `flex: 1 1 auto`
    - allow a flex item to grow and shrink, taking into account its initial size
  - `flex: 0 1 auto`
    - allow a flex item to shrink but not grow, taking into account its _initial_ size
  - `flex: none`
    - prevent a flex item from growing or shrinking
- `flex-grow: 1`
  - `flex:1`
    - the flex item is allowed to grow to fill any available space along the main axis of the flex container
    - If set on each item
      - means they'll all take up an equal amount of the spare space left after properties like padding and margin have been set.
    - 📌`flex: 1 200px;`
      - Each flex item will first be given 200px of the available space. After that, the rest of the available space will be shared according to the proportion units.
- `flex-shrink: 2`
  - default value :1
    - each item would be shrunk by equal size
  - the item will shrink twice/ x times as much as the other when the container gets smaller
- `flex-basis: 200px`
  - `flex: 200px`
    - means that each will be at least 200px wide.

## Horizontal and vertical alignment

### `align-items`

- 📌controls where the flex items sit on the cross axis.
- `strech`
  - by default
  - stretches all flex items to fill the parent in the direction of the cross axis.
- `center`
  - centered vertically
- `flex-start`/ `flex-end`
  - align all items at the start and end of the cross axis respectively.

### `align-self`

- override the `align-items` behavior for individual flex items

### `justify-content`

- controls where the flex items sit on the main axis.
- `flex-start`
  - by default
- `flex-end`
- `space-around`
  - distributes all the items evenly along the main axis with a bit of space left at either end.
- `space-between`
  - similar to `space-around` except that it doesn't leave any space at either end.

### `justify-items`

- ⚠️ is ignored in flexbox layouts.

## Ordering flex items

### changing the layout order of flex items without affecting the source order

### `order`

- `0`
  - by default
- `-1`
  - to make items appear earlier than items whose value is 0
- 📌with higher specified order values will appear later in the display order than items with lower order values.

## Nested flex boxes

### to set a flex item to also be a flex container, so that its children are also laid out like flexible boxes

## Cross-browser compatibility

### [Cross browser testing](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Cross_browser_testing)

## Flexbox Guide and Resources

### [CSS-Tricks Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### [Flexbox Froggy](https://flexboxfroggy.com/)
