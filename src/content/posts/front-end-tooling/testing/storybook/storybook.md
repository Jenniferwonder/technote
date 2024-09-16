---
category: Front-End Tooling
aliases:
  - Storybook
title: Storybook
topic:
  - Testing
type: D
tags:
  - Testing
  - Storybook
difficulty: 
comment: 
reviewed: 
Datereviewed: 
DateStarted: 2024-01-05
DateModified: 2024-09-14
status: 
linter-yaml-title-alias: Storybook
---

# Storybook

## Reference

- [Install Storybook • Storybook docs](https://storybook.js.org/docs/get-started/install)
- Tutorials
  - [Storybook 7 Crash Course - React Typescript (youtube.com)](https://www.youtube.com/watch?v=CuGZgYo6-XY)
  - [01 Course presentation — Modern Component Library w/ React & Storybook - YouTube](https://www.youtube.com/watch?v=21iHNxVlfvw&list=PLKBvDYynKmlWa59k8pnw-EHac2_miPagh)

## [Why Storybook](Why-Storybook)

## [Install & Run Storybook](Install-&-Run-Storybook)

## [Config Storybook](Storybook/Config-Storybook)

### [Write Stories](Write-Stories)

## Data

### ❓To build simple data model

- uses [Redux Toolkit](https://redux-toolkit.js.org/), the most effective toolset for developing applications for storing data with [Redux](https://redux.js.org/)
- `npm i @reduxjs/toolkit react-redux`
- in a file called `store.js` in the `src/lib`
  - ❓construct a simple Redux store that responds to actions that change the task's state

### In `TaskList.jsx`

- update our `TaskList` component to connect to the Redux store
  - ❓`import { useDispatch, useSelector } from "react-redux";`

### In `TaskList.stories.jsx`

- rely on a decorator
- provide a mocked store
- `excludeStories`
  - prevents our mocked state to be treated as a story
  - more about this field in the [Storybook documentation](https://storybook.js.org/docs/react/api/csf).

## Screens

### 💡combining components in a screen and developing that screen in Storybook

### Goal

- mply fetching data from a remote API
- wrapping the `TaskList` component (which supplies its own data from Redux)
- pulling a top-level `error` field out of Redux

### ❓updating our Redux store (in `src/lib/store.js`) to connect to a remote API

- handle the various states for our application (i.e., `error`, `succeeded`)

### create our `InboxScreen.jsx` in the `src/components` directory

- ❓`useEffect`

### change our `App` component to render the `InboxScreen`

- eventually, we would use a router to choose the correct screen

### In `InboxScreen.stories.jsx`

- ❌issue with the `error` story
- Solutions
  - provide a mocked version for each state
  - or use API mocking library alongside a Storybook addon
    - use [Mock Service Worker](https://mswjs.io/) and [Storybook's MSW addon](https://storybook.js.org/addons/msw-storybook-addon)
    - relies on service workers to capture network requests
    - provides mocked data in responses
- How
  - to generate a generic service worker inside your `public` folder
    - `npm run init-msw`
  - update our `.storybook/preview.js` and initialize them
  - update the `InboxScreen` stories and include a [parameter](https://storybook.js.org/docs/react/writing-stories/parameters) that mocks the remote API calls
  - another viable approach would be to pass data down the hierarchy
    - especially when using [GraphQL](http://graphql.org/). It’s how we have built [Chromatic](https://www.chromatic.com/?utm_source=storybook_website&utm_medium=link&utm_campaign=storybook) alongside 800+ stories
- Result
  - ✅the `error` story is now working as intended
  - MSW intercepted our remote API call and provided the appropriate response

### Interaction tests

- 💡test our component interactions automatically
- Write an interaction test using the play function
  - Storybook's [`play`](https://storybook.js.org/docs/react/writing-stories/play-function)
    - A play function includes small snippets of code that run after the story renders
    - uses framework-agnostic DOM APIs
  - and [`@storybook/addon-interactions`](https://storybook.js.org/docs/react/writing-tests/interaction-testing)
    - visualize our tests in Storybook
    - providing a step-by-step flow
    - offers a handy set of UI controls to pause, resume, rewind, and step through each interaction
  - set up component interactions in `InboxScreen.stories.tsx`
    - `@storybook/test` package replaces the `@storybook/jest` and `@storybook/testing-library` testing packages
      - a smaller bundle size
      - a more straightforward API based on the [Vitest](https://vitest.dev/) package.
  - Merits
    - to sidestep our problem, allowing us to interact with our UI
    - quickly check how it responds if we update our tasks—keeping the UI consistent at no extra manual effort
  - Downsides
    - we'd still have to go through each story to run all checks if we make a change
- Automate tests with the test runner
  - Storybook's [test runner](https://storybook.js.org/docs/react/writing-tests/test-runner)
    - a standalone utility—powered by [Playwright](https://playwright.dev/)—that runs all our interactions tests and catches broken stories
- recommend reading the [official documentation](https://storybook.js.org/docs/react/writing-tests/interaction-testing) to learn more
- For an even deeper dive into testing, check out the [Testing Handbook](https://storybook.js.org/tutorials/ui-testing-handbook)

## Deploy

## Visual Testing

## Addons

## Conclusion

## Contribute
