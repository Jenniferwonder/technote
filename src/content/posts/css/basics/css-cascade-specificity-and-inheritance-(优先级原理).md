---
category: Web Design
aliases:
  - CSS Cascade, Specificity and Inheritance (优先级原理)
draft: false
title: CSS Cascade, Specificity and Inheritance (优先级原理)
type: D
tags:
  - CSS
DateStarted: 2023-09-19
DateModified: 2024-04-19
status: 
comment: ⭐⭐
difficulty: Good
Datereviewed: 2023-09-23T00:00:00.000+08:00
reviewed: 1
topic: Basics
linter-yaml-title-alias: CSS Cascade, Specificity and Inheritance (优先级原理)
---

# CSS Cascade, Specificity and Inheritance (优先级原理)

## Cascade

### Source order

- When have equal specificity, the rule **that is defined last in the stylesheet** is the one that will be used
- Source order only matters when the specificity weight of the rules is the same

### Specificity

- ID, CLASS, and ELEMENT columns in the hundreds, tens, and ones place

### Inline Styles

- Take precedence over all normal styles, no matter the specificity

### Importance

- `!important`
  - overrule all of the above calculations, even inline styles
  - recommend that you never use it unless you absolutely have to
  - make debugging CSS problems really hard to work out

### 📌Order of overriding declarations: with later ones overriding earlier ones ^d682bc08-36f6-6872

- Normal declarations in user style sheets (custom styles set by a user).
- Normal declarations in author style sheets (these are the styles set by us, the web developers)
- Important declarations in author style sheets
- Important declarations in user style sheets.
- Important declarations in user agent style sheets.

## Cascade Layers

### Order of cascade layers

- `@layer firstLayer, secondLayer;`
  - `@layer firstLayer { }`
- Normal Styles Precedence
  - non-layered normal styles take precedence over layered normal styles, no matter the specificity
  - With competing normal (not important) styles, later layers take precedence over earlier defined layers
- Important Styles Precedence
  - For styles flagged with `!important`, however, earlier defined layers take precedence over later defined layers.
- Inline styles take precedence over all author styles, no matter the layer

### Reference

- https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers

## Inheritance

### Inherited properties

- `color`

### Non-Inherited properties

- `width`
- `margin`
- `padding`
- `border`

### Controlling inheritance

- `inherit`
  - Sets the property value applied to a selected element to be the same as that of its parent element
- `initial`
  - Sets the property value applied to a selected element to the initial value of that property
- `revert`
  - Resets the property value applied to a selected element to the browser's default styling
- `revert-layer`
  - Resets the property value applied to a selected element to the value established in a previous cascade layer
- `unset`
  - Resets the property to its natural value, which means that if the property is naturally inherited it acts like inherit, otherwise it acts like initial.
- Resetting all property values
  - `all: unset;`

### Reference

- https://www.w3.org/TR/CSS22/cascade.html#specified-value
