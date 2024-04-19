---
category: Web Design
Datereviewed: 
reviewed: 
aliases:
  - CSS for React
draft: false
title: CSS for React
type: D
tags:
  - CSS
DateStarted: 2024-01-08
DateModified: 2024-04-19
status: 
topic: Basics
comment: ⭐⭐⭐
difficulty: Hard
linter-yaml-title-alias: CSS for React
---

# CSS for React

## Reference

### https://www.freecodecamp.org/news/how-to-style-react-apps-with-css/

### https://blog.devgenius.io/best-ways-to-style-a-react-js-application-c818b71f6341

## Folder Structure

### `src`

- `components`
- `containers`
- `data`
- `pages`
- `context`

### `public`

## Practice

### Global CSS

- 📌[Base Styles](Base-Styles)

### Using normal CSS

- Module CSS
- `import './styles.css'`
- `<img className="avatar" />`
  - `className` 相当于 html `class`
- Open Props
  - https://open-props.style/#getting-started
  - [Open-Props Normalize Demo Page, aka Everything But The Bagel (codepen.io)](https://codepen.io/argyleink/pen/KKvRORE)

### Inline CSS

- Utility Class
  - 📌[O-TailwindCSS](O-TailwindCSS)
- `style={{  
width: user.imageSize, height: user.imageSize, }}`

### [UI Componenet Library](UI-Componenet-Library)

- 💡Pre-styled components
  - ❌Difficult to customize
  - material-ui
  - react-bootstrap
  - chakra
  - react-select
- 💡Unstyled components
  - Hooks version
    - react-aria
      - backed by Adobe
    - downshift.js
  - Components version
    - base-ui
    - ✅radix-ui
      - Projects Examples
        - cal.com
        - steven-tey/dub (dub.sh)
          - radix
          - tailwind
    - headless-ui
    - reach-ui
- 💡Templates for styles
  - ShadCN
