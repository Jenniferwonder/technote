---
category: Front-End Tooling
aliases:
  - Config Storybook
title: Config Storybook
topic:
  - Testing
type: D
tags:
  - Testing
  - Storybook
DateStarted: 2024-02-29
DateModified: 2024-04-18
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
linter-yaml-title-alias: Config Storybook
---

# Config Storybook

## Reference

- [Configure Storybook • Storybook docs](https://storybook.js.org/docs/configure)

## To import styles

- In `.storybook/preview.js`
  - `import '../src/index.css'`

## Specify where to render stories

- In `.storybook/main.js`
  - `stories: ['../src/components/**/*.stories.@(js|jsx|ts)'],`

## Config Storybook with TypeScript

> [TypeScript • Storybook docs](https://storybook.js.org/docs/configure/typescript)

- `main.ts`
  - ESM module in TS
  - support your existing framework
  - stricter type-checking and autocompletion in your editor
- 🏷️[Write Stories](Write-Stories)

### To include addons

- `'@storybook/addon-a11y',`
- Accessibility
  - based on [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/) rules
  - Storybook includes an official [accessibility addon](https://storybook.js.org/addons/@storybook/addon-a11y).
    - Powered by Deque's [axe-core](https://github.com/dequelabs/axe-core)
    - Powered by Deque's axe-core
  - `npm i --dev @storybook/addon-a11y `
