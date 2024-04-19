---
category: Front-End Tooling
aliases:
  - Write Stories
title: Write Stories
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
linter-yaml-title-alias: Write Stories
---

# Write Stories

> [How to write stories • Storybook docs](https://storybook.js.org/docs/writing-stories#default-export)

## Write stories with TypeScript

> [TypeScript • Storybook docs](https://storybook.js.org/docs/configure/typescript)

`Meta`

- to tell Storybook how to infer the **component's metadata**  
   `StoryObj`  
   - to infer the **type of the component's inputs (e.g., props)**

这样在创建新 Story 时如果参数缺失会在编辑器获得报错提示

## Simple Component

#### Goal

- ![|425](https://storybook.js.org/tutorials/intro-to-storybook/task-states-learnstorybook.png)

#### Idea

- first write our test states that correspond to the different types of tasks sketched above
- use Storybook to create the component in isolation using mocked data.
- manually test the component's appearance given each state as we go

#### Set up

- Baseline HTML implementation
  - `./components/Task.jsx`
- Build test states in storybook

  - 2 levels of organization
    - the component
    - its child stories
      - a permutation of a component
  - `./components/Task.stories.jsx`

    - default export

      - To tell Storybook about the component we are documenting and testing
      - Contains

        - ```tsx
          export default {
          	component: Task,
          	title: "Task",
          	tags: ["autodocs"],
          };
          ```

        - `component`
        - `title`
          - how to group or categorize the component in the Storybook sidebar
        - `tags`
          - to automatically generate documentation for our components

    - test cases
      - To define our stories, we'll use Component Story Format 3 (also known as [CSF3](https://storybook.js.org/docs/react/api/csf) )
      - By exporting an object containing each component state, we can _define our tests_ more intuitively and author and _reuse stories_ more efficiently
      - use a base `task` arg to build out the shape of the task the component expects
        - Typically modeled from what the actual data looks like

#### Build out the states

- `./components/Task.jsx`
  - label
    - `htmlFor`
    - `aria-label`
  - input
    - `type = "text"`
      - value
      - readOnly
      - name
      - placeholder
    - `type = "checkbox"`
      - disabled
      - checked
      - name
      - id
  - span
    - `className = "checkbox-custom"`
  - button
    - `aria-label`
    - `id`
    - `key`

#### Specify data requirements

- use `propTypes` in React to specify the shape of data that a component expects
  - self-documenting
  - helps catch problems early
- or use TypeScript

## Composite Component

#### Goal

- TaskList
  - ![](https://storybook.js.org/tutorials/intro-to-storybook/tasklist-states-1.png)
- Loading state when disconnected and empty state when no tasks
  - ![](https://storybook.js.org/tutorials/intro-to-storybook/tasklist-states-2.png)

#### Test states

- [Decorators](https://storybook.js.org/docs/react/writing-stories/decorators) are a way to provide arbitrary wrappers to stories
  - to add some `padding` around the rendered component
  - to wrap stories in “providers”-–i.e., library components that set React context
- importing `TaskStories`, we were able to [compose](https://storybook.js.org/docs/react/writing-stories/args#args-composition) the arguments (args for short) in our stories with minimal effort

- ```tsx
  export default {
  	component: TaskList,
  	title: "TaskList",
  	decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  	tags: ["autodocs"],
  };
  ```

#### Build out states
