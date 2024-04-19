---
category: Web Design
draft: false
title: grids
type: D
tags:
  - CSS
status: 
DateStarted: 2023-09-25
DateModified: 2024-04-19
comment: ⭐⭐⭐
difficulty: Hard
topic: Layout
reviewed: 1
Datereviewed: 2024-01-05T00:00:00.000+08:00
---

### Grids

- Create a grid
  - `display:grid`
    - gives you a one column grid, so your items will continue to display one below the other as they do in normal flow.
  - ⭐`grid-template-columns`
    - `200px 200px 200px;`
      - add three 200-pixel columns
    - Flexible grids with the `fr` unit
      - `fr` unit represents one fraction of the available space in the grid container to flexibly size grid rows and columns.
    - Repeating track listings
      - repeat all or merely a section of your track listing
      - `grid-template-columns: repeat(3, 1fr);`
    - As many columns as will fit
      - `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));`
        - grid is creating as many 200-pixel columns as will fit into the container, then sharing whatever space is leftover among all the columns
  - ⭐Gaps between tracks
    - `gap` / `grid-gap`
      - a shorthand for both
      - `column-gap`
      - `row-gap`
    - 📌 can be any length unit or percentage, but not an `fr` unit
- Implicit and explicit grids
  - Explicit grid
    - created using `grid-template-columns` or `grid-template-rows`.
  - Implicit grid
    - when content is placed outside of that grid, such as into the rows by drawing additional grid lines.
    - By default, tracks created in the implicit grid are auto sized
      - they're large enough to contain their content
    - To give implicit grid tracks a size
      - `grid-auto-rows`
      - `grid-auto-columns`
  - The `minmax()` function
    - `grid-auto-rows: minmax(100px, auto);`
      - The minimum size is 100 pixels, but the maximum iwill expand to accommodate more content.
- Arrange items on the grid
  - ⭐Line-based placement
    - 📌specify the start and end lines of the grid area where an item should be placed
    - `grid-column`
      - `grid-column-start`, `grid-column-end`
      - `grid-column: 1 / 3;`
        - specify that an item should start on line 1 and end on line 3
    - `grid-row`
      - `grid-row-start`, `grid-row-end`
  - ⭐Positioning with `grid-template-areas`
    - Rules
      - You need to have every cell of the grid filled.
      - To span across two cells, repeat the name.
      - To leave a cell empty, use a . (period).
      - Areas must be rectangular — for example, you can't have an L-shaped area.
      - Areas can't be repeated in different locations.

```css
.container {
	display: grid;
	grid-template-areas:
		"header header"
		"sidebar content"
		"footer footer";
	grid-template-columns: 1fr 3fr;
	gap: 20px;
}

header {
	grid-area: header;
}
article {
	grid-area: content;
}
```

- Nesting grids and subgrid
  - ` grid-template-columns: subgrid;`
    - to inherit the parent grid's column tracks
- Grid frameworks
  - offering a 12 or 16-column grid, to help with laying out your content
- Guide and Resources
  - [CSS Grid Guides](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout#guides)
  - [Subgrid Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout/Subgrid)
  - [Firefox Grid Inspector](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html)
  - [Complete Guide to CSS Grid-A Visual Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
  - [Grid Garden](https://cssgridgarden.com/)
