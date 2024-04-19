---
category: Web Design
aliases:
  - Base Styles
draft: false
title: Base Styles
type: D
tags:
  - CSS
DateStarted: 2024-01-08
DateModified: 2024-04-19
status: 
topic: Basics
difficulty: Good
comment: ⭐⭐⭐
Datereviewed: 2024-01-15T00:00:00.000+08:00
reviewed: 2
linter-yaml-title-alias: Base Styles
---

# Base Styles

## Reference

### 📌[Normalize.css](https://necolas.github.io/normalize.css/)

- a very popular stylesheet used as a base by many projects
- are used by many developers to create a set of baseline styles to use on all projects.
- anything different across browsers is set to a consistent default before you do your own work on the CSS
- `npm install --save normalize.css`

### [Preflight](https://tailwindcss.com/docs/preflight) (Tailwind Base Style/ Reset)

- 📌[unpkg.com/tailwindcss@3.3.6/src/css/preflight.css](https://unpkg.com/tailwindcss@3.3.6/src/css/preflight.css)
- Default margins are removed
- All heading elements are completely unstyled
- lists are unstyled by default, with no bullets/numbers and no margin or padding
- Images and other replaced elements (like `svg`, `video`, `canvas`, and others) are `display: block` by default.
- Images and videos are constrained to the parent width
  - This prevents them from overflowing their containers and makes them responsive by default
- Border styles are reset globally
- Extending Preflight
- Disabling Preflight

## `app.css` & `index.css`

### https://blog.stackademic.com/understanding-the-role-of-app-css-and-index-css-in-web-development-3d85a7f86b28

## Global selectors

### `html`

- 📌Text
- `font-size: 62.5%`

### `:host`

- used to target the shadow host of the shadow DOM

### `:root`

- often preferred for defining global styles, variables and custom properties intended to be global or shared across the entire document
- highest specificity level
  - takes precedence over other selectors like `html` or `*`
- consistency and readability
- 📌[Color Scheme](Color-Scheme)
- 📌[CSS Selectors](CSS-Selectors) > [pseudo-classes selectors (伪类)](<pseudo-classes-selectors-(伪类)>)

### `*, ::before, ::after`

- 📌Border
- 📌Border-Box

### `body`

- 📌Spacing

## 📌[Borders](Borders)

### 💡Purpose

- Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
- Allow adding a border to an element by just adding a `border-width`. (https://github.com/tailwindcss/tailwindcss/pull/116)

### `box-sizing: border-box`

- https://www.paulirish.com/2012/box-sizing-border-box-ftw/
- 📌[Border-Box Explained](Border-Box-Explained)

### `border-width: 0`

### `border-style: solid`

### `border-color: currentColor`

## 📌[Box Spacing Basics](Box-Spacing-Basics)

### margin & padding

- For consistency, it is a good idea to set margins and padding to 0 on all elements, then add these back in when styling particular controls
- `margin: 0`
- `padding: 0`

## Text

### `line-height: 1.5`

- Use a consistent sensible line-height in all browsers.

### `-webkit-text-size-adjust: 100%`

- Prevent adjustments of font size after orientation changes in iOS

### `text-rendering: optimizeLegibility`

### `-webkit-font-smoothing: antialiased`

### `-moz-osx-font-smoothing: grayscale;`

### Tab Size

- Use a more readable tab size.
- `tab-size: 4`
- `-moz-tab-size: 4`

### Tap Highlight

- Disable tap highlights on iOS
- `-webkit-tap-highlight-color: transparent;`

### Special elements

- `hr`
  - `height: 0`
    - Add the correct height in Firefox.
  - `box-sizing: content-box`
    - Add the correct box sizing in Firefox
  - `color: inherit`
    - Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show\_bug.cgi?id=190655)
  - `border-top-width: 1px;`
    - Ensure horizontal rules are visible by default.
  - ❓`overflow: visible`
    - Show the overflow in Edge and IE
- `hr, dl, dd, blockquote, figure`
  - `margin: 0`
- `dialogue`
  - `padding: 0`
- `pre, code, kbd, samp`
  - `font-family: monospace, monospace`
- `abbr[title]`
  - `text-decoration: underline dotted;`
- `sub, sup`
  - Prevent `sub` and `sup` elements from affecting the line height in all browsers
  - `font-size: 75%`
  - `line-height: 0`
  - `position: relative`
  - `vertical-align: baseline`
  - `sub`
    - `bottom: -0.25em`
  - `sup`
    - `top: -0.5em`
- `small`
  - Add the correct font size in all browsers
  - `font-size: 80%`
- `b, strong`
  - Add the correct font weight in Chrome, Edge, and Safari
  - `font-weight: bolder`
- `a`
  - `background-color: transparent`

### 📌[Styling Links](Styling-Links)

### 📌[Styling Lists](Styling-Lists)

### 📌[CSS Overflowing Content](CSS-Overflowing-Content)

- `overflow: auto;`

### 📌[Typography](Typography)

- [S-Font-字体](S-Font-字体)

## 📌[CSS Image-Video and other Replaced elements](CSS-Image-Video-and-other-Replaced-elements)

### `img, svg, video, canvas, audio, iframe, embed, object`

- `display: block`
- `vertical-align: middle`
  - to align replaced elements more sensibly by default

### `img, video`

- Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
- `max-width: 100%`
- `height: auto`

### `img`

- Remove the border on images inside links in IE 10
- `border-style: none;`

## 📌[Form Style](Form-Style)

### `button, input, optgroup, select, textarea`

- Change the font styles in all browsers
  - `font-family: inherit;`
  - `font-size: 100%`
  - `font-feature-settings: inherit`
  - `font-variation-settings: inherit`
  - `line-height: inherit`
  - `font-weight: inherit`
  - `color: inherit`
- `margin: 0`
  - Remove the margin in Firefox and Safari
- `padding: 0`
  - Remove default padding in all browsers

### Button

- `button, [type="button"], [type="reset"],[type="submit"]`
  - `-webkit-appearance: button`
    - Correct the inability to style clickable types in iOS and Safari
  - Remove default button styles
    - `background-color: transparent`
    - `background-image: none`
- `button, select`
  - `text-transform: none`
    - Remove the inheritance of text transform in Edge and Firefox
- `::-webkit-file-upload-button`
  - `-webkit-appearance: button`
  - `font: inherit`
- `:-moz-focusring`
  - `outline:auto`
    - Use the modern Firefox focus style for all focusable elements
- `:-moz-ui-invalid`
  - `box-shadow: none`
    - Remove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
- Cursor Style
  - `button, [role="button"]`
    - `cursor:pointer`
  - `:disabled`
    - `cursor: default`
  - Correct the cursor style of increment and decrement buttons in Safari
  - `::-webkit-inner-spin-button, ::-webkit-outer-spin-button`
    - `height: auto`

### `progress`

- `vertical-align: baseline`

### `[type='search']`

- `-webkit-appearance: textfield`
  - Correct the odd appearance in Chrome and Safari
- `outline-offset: -2px`
  - Correct the outline style in Safari

### `::-webkit-search-decoration`

- Remove the inner padding in Chrome and Safari on macOS
- `-webkit-appearance: none`

### `fieldset`

- `margin: 0; padding: 0`

### `legend`

- `padding: 0`

### `textarea`

- `resize: vertical`

## 📌[Table Style](Table-Style)

### `text-indent:0`

- Remove text indentation from table contents in Chrome and Safari (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)

### `border-color: inherit`

- Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show\_bug.cgi?id=195016)

### `border-collapse: collapse`

- Remove gaps between table borders by default

## Interactive Display

### `summary`

- `display: list-item`

### `details`

- `display: block`

## Color

### [S-Color-颜色与背景](S-Color-颜色与背景)

### 📌[Color Scheme](Color-Scheme)

## `scroll-behavior: smooth / auto`

## `[hidden]`

### `display: none`

## `template`

### `display: none`
