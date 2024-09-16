---
topic: 
category: Front-End Tooling
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - Front-End Practice
title: Front-End Practice
type: O
tags:
  - DevPractice
DateStarted: 2023-12-21
DateModified: 2024-09-14
status: 
linter-yaml-title-alias: Front-End Practice
draft: true
---

# Front-End Practice

## 🏷️Developer Experience

### team’s experience building and maintaining your application.

### [TypeScript](TypeScript)

## 🏷️UI

### 💡From Design to Code

- how users will consume and interact with your application.

### Front-End Frameworks

- HTML in JS
  - 📌[react](private/p-react/react)
- JS in HTML
  - 📌[Vue](O-Vue)
  - 📌[Svelte](O-Svelte)

### UI Styling

- 📌HTML
- 📌CSS
  - CSS Fundamentals
  - CSS Support
    - Sass
    - TailwindCSS

### UI Events & Interaction

- 📌JS
  - JS Fundamentals

### Component Library

- React Component Lib
  - Styled-JSX
  - 📌Use Component Lib
  - 🏷️[README](Front-End/CDD/README)
- Vue Component Lib
- Svelte Component Lib

## 🏷️[Component-Driven Development](Component-Driven-Development)

### [Project-Init](Project-Init)

### [Testing](Testing)

### [Compilers and Bundlers](Compilers-and-Bundlers)

## 📌Placeholder Data

### Use placeholder data in JSON format or as JavaScript objects.

### Use a 3rd party service like [mockAPI](https://mockapi.io/).

## 🏷️[Routing](Routing)

### how users navigate between different parts of your application.

### React Router Dom

### 📌[NextJS](O-NextJS)

- Advanced Routing & Nested Layouts
  - Directory based routing system
    - _React Router Dom_ is not needed with Next.js
    - Use a new app directory using _file system based routing_ like before, but now it's also _directory based_
    - To creat a page, you give the directory the name of the route, then create a `page.js` file to it that exports the component you want to display there.
      - We can co-locate extra components in that directory as well instead of needing to create a separate component directory
    - It opens the door to layouts and nested routing - When you create a `layout.js`, it creates a UI that can be _inherited_ by the child routes
      - When navigate to a route inside of a layout, only the inner UI is rendered as opposed to the entire page.
  - support for more advanced routing patterns and UI layouts
  - Easily fetch data for your entire layout
  - Also it has file naming conventions for _loading_ and _error_ that can render a different UI _at the component level_ based on its current state.
    - If a component breaks, it'll render `error.js` instead of `page.js`. The rest of the UI stays intact.
- Middleware
  - Take control of incoming request
  - Use code to define routing and access rules for authentication, experimentation, and internationalization

## 🏷️[Data Fetching](Data-Fetching)

### where your data lives and how to get it.

### React Query

### 📌[NextJS](O-NextJS)

- Make React component async and await your data
  - Now we can totally get rid of things like `getStaticProps`, and `getServerSideProps` , instead we can write a plain JS function uses `fetch` (`async function...await`) and `await` the result of that function directly in a component, no need to pass props back and forth between client and server.
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230227195806.png)
- Support both client and server data fetching

## 🏷️Rendering

### The environment where your code runs

- Development vs. Production

### when and where you render static or dynamic content.

- _When_ your code runs
  - Build Time vs. Runtime
- _Where_ rendering happens
  - Client vs. Server

### SSG

- Static Site Generation
- 📌[SSG Frameworks](SSG-Frameworks)

### SSR

- Server Side Rendering
- All components are React server components by default. _Server components_ are a low level primitive in React that _enables SSR_, but until Next.js 13, they've always been difficult for common developer to use.
- 数据预加载

### ISR

- Incremental Static Regeneration
- 动态渲染

### 📌[NextJS](O-NextJS)

- Client and Server Rendering
  - Supports _ISR, SSR, SSG_ - the new mental model revolves entirely around caching
- React Server Components
  - Add components without sending additional client-side JS
- Dynamic HTML Streaming
  - Instantly stream UI from server, integrated with the App Router and React Suspense

## 🏷️Integrations (3rd-Party Services)

### what third-party services you use (CMS, auth, payments, etc) and how you connect to them.

### CMS

### [Authentication](Authentication)

### Payments

### [User Analytics](User-Analytics)

- [三方服务——访问统计与分析](三方服务——访问统计与分析)

### [三方服务——评论功能](三方服务——评论功能)

### 📌[NextJS](O-NextJS)

- Route Handlers
  - Build API endpoints to securely connect with 3rd party services and consume from your frontend

## 🏷️Infrastructure

### where you deploy, store, and run your application code

### [Deploying](Deploying)

- Vercel
- Netlify

### Serverless

### Edge

### CDN

### NodeJS

### [代理-Nginx](代理-Nginx)

## 🏷️[Front-End Performance Optimization](Front-End-Performance-Optimization)

### how to optimize your application for end-users.

### Bundler

- Webpack
- Vite
- 📌[NextJS](O-NextJS)
  - Turbopack
    - It's faster than Create-React-App
      - 4x faster cold starts than Webpack

### Compiler (& minification)

- Babel
- 📌[NextJS](O-NextJS)
  - Speedy Web Compiler (SWC)
    - It also uses SWC (Speedy Web Compiler) same as Vite based on Rust which is faster than Babel as a compiler
      - 10x Faster than Vite
      - 700x Faster updates than Webpack (Plugins)
  - Hot Reloading support.
  - Automatic code splitting and lazy loading.

### 📌[NextJS](O-NextJS)

- Built-in Optimizations for improved UX and Core Web Vitals
  - Image
    - Vercel 0G Image Generation
    - next/image: optimize images on demand
  - Font
    - next/font: custom typefaces for your brand
  - Link
    - next/link: increase your engagement rate
  - Script

## 🏷️Scalability

### how your application adapts as your team, data, and traffic grow.
