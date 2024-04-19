---
category: Web Design
Datereviewed: 
reviewed: 
comment: 
aliases:
  - CSS Transform
draft: false
title: CSS Transform
type: D
topic: Motion
tags:
  - CSS
DateStarted: 2024-01-19
DateModified: 2024-04-19
status: 
difficulty: Good
linter-yaml-title-alias: CSS Transform
---

# CSS Transform

## Perspective

## Rotation

### Origin point

- center of the element
- `transform-origin`
  - size-value (10px/ 25%)
  - keyword (left/ center/ right/ top...)

### `rotate/ rotateZ`

- `transform: rotate(45deg)`

### `rotateX`

- `transform: perspective(200px)  
               rotateX(45deg);`

### `rotateY`

- `transform: perspective(200px)  
               rotateY(45deg);`

### `rotate3d`

- `transform: perspective(200px)  
               rotate3d(1, 1, 0, 45deg);`

### 📌[Sizing Units](Sizing-Units)

## Translation

### `transform: translate(2rem, 2rem)`

- translated 2rem to the left and 2rem down
- `translateX`
- `translateY`

### `translateZ`

- used with `perspective()`
- `transform: perspective(200px)  
               translateZ(2rem)`

### `translate3d`

- `transform: perspective(200px)  
               translate3d(1rem, 2rem, 3rem);`

## Scaling

### `transform: scale(2, 5)`

- `scaleX()`
- `scaleY()`

### `scaleZ `

- used with `rotateX`, `perspective`
- `transform: perspective(200px) scaleZ(5) rotateX(45deg)`

### `scale3d`

## Skewing

### ` skew(45deg, 20deg)`

## Multiple transforms

### `transform: translateX(100px)

rotate(45deg)  
           translateX(100px);`

## Examples

### Make a Heart

### Make a Cube
