---
topic: 
type: 
category: Front-End Tooling
Datereviewed: 
reviewed: 
difficulty: 
comment: 
title: how-to-start-a-nextjs-and-tailwindcss-project
tags:
  - NextJS
DateStarted: 2023-02-17
DateModified: 2024-04-19
status: 
draft: true
---

## Options

> [7 better ways to create a React app - YouTube](https://www.youtube.com/watch?v=2OTq15A5s0Y)

- [Vite](Vite) ~~/ Create-React-App/ Parcel~~?
  - Why not create react app? > Slower, Painful to set up tools like tailwind and typescript
  - Stackblitz/ CodeSandbox (Sharable from any computers)
  - Vite >
    - build on demand with tools like ES Modules and ES Build
    - use SWC instead of Bable based on Rust which is a fastser compiler
    - use Rollup for module bundling as opposed to webpack using CRA
    - has a Typescript template out of the box supporting any modern libraries
- Nx
- Next.js >
  - `npx create-next-app --example with-tailwindcss <项目名>`

## How to start a project with [O-NextJS](O-NextJS)?

### Initiate Next.js with TailwindCSS

#### 1. Step 1 (🐛tailwindCSS not installed)

![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230320130514.png)

### Optional

#### 1. Step 1: npx create-next-app

`npx create-next-app@latest my-project --typescript --eslint`

- When prompted to install `create-next-app@13.1.6`, hit `y`
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230217104358.png)
- Waiting for the success message
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230217104926.png)

#### 2. Step 2: Install Tailwind CSS

- Reference: [Install Tailwind CSS with Next.js - Tailwind CSS](https://tailwindcss.com/docs/guides/nextjs)
  - ❗ Before intall, `cd my-project`
- 🐛1. Parsing Error in ./tailwind.config.js ([Parsing error : Cannot find module 'next/babel'](https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel))
  - ❌~~Create file called `.babelrc` in your root directory and add this code:~~
  - In `.eslintrc`/ `.eslintrc.json`, replace the existing code with:
  - `{"extends": ["next/babel","next/core-web-vitals"]}`
- 🐛2. Unknown at rule in ./global.css ([Site Unreachable](https://flaviocopes.com/fix-unknown-at-rule-tailwind/))
  - Open the VS Code settings, search for “unknown", find the result: `CSS > Lint: Unknown At Rules`, change its value from`warning` to `ignore`
- 🐛3. Disabled SWC as replacement for Babel, after run `npm run dev`?
  - Delete created ./babelrc
- 🐛[node.js - Cannot find module 'babel-preset-env' from PATH Did you mean "@babel/env"? - Stack Overflow](https://stackoverflow.com/questions/56519158/cannot-find-module-babel-preset-env-from-path-did-you-mean-babel-env)
  - In `.eslintrc`, add `@babel/core` to the existing list of configs

#### 3. Step 3: Install VS Code Extensions and plugins for React and Tailwind CSS

- [VSCode](VSCode)
- [C-TailwindCSS](C-TailwindCSS)

#### 4. Step 4: Install Dependencies

- 🐛[Dependency Installation Error](Dependency-Installation-Error)  
  根目录，可预先安装全部所需依赖：  
  `npm i`  
  `next-sanity`  
  `@sanity/image-url `

##### 4.1. prettier-plugin-tailwindcss：

`npm install -D prettier prettier-plugin-tailwindcss`

##### 4.2. react-portable-text

`react-portable-text`

##### 4.3. react-hook-form

`react-hook-form`

##### 4.4. react-timeago:

`npm i react-timeago`  
`npm i -d @types/react-timeago`

##### 4.5. react-hot-toast

`npm i react-hot-toast`

##### 4.6. next-auth

`npm i next-auth`
