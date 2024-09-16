---
topic: 
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - Next.js Rendering Methods
title: Next.js Rendering Methods
type: D
tags:
  - NextJS
status: 
DateStarted: 2023-11-30
DateModified: 2024-09-14
category: Front-End Frameworks
linter-yaml-title-alias: Next.js Rendering Methods
---

# Next.js Rendering Methods

### Reference

- [Client Side Rendering Vs Server Side Rendering in React js & Next js | by Yudhajit Adhikary | Medium](https://yudhajitadhikary.medium.com/client-side-rendering-vs-server-side-rendering-in-react-js-next-js-b74b909c7c51)
- [[Routing Methods]]
- view-source: https://...

### CSR

- CSR-Client Side Rendering 客户端渲染
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102356.png)
- Instead of getting all the content from the HTML document itself, a bare-bones HTML document with a JavaScript file in initial loading itself is received, which renders the rest of the site using the browser.
- With client-side rendering, the initial page load is naturally a bit slow. However, after that, every subsequent page load is very fast.
- Communication with server happens only for **getting the run-time data**. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.
- **Pros of Client Side Rendering:**
  - 1. Rich site interactions
  - 2. Fast website rendering after the initial load.
  - 3. Great for web applications.
  - 4. Robust selection of JavaScript libraries.
- **Cons of Client Side Rendering:**
  - 1. Low SEO if not implemented correctly.
  - 2. Initial load might require more time.
  - 3. In most cases, requires an external library.

### SSG

- SSG-Static Site Generation 静态页面生成
- In Next.js, by default, all pages will be cached to provide the performance of a static site
- [SSG Frameworks](SSG-Frameworks)

### SSR

- SSR-Server Side Rendering 服务端渲染
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/pasted-image-20230308102929.png)
- But if you want new data on every request like SSR, you can add `{cache: 'no-store'}` option to fetch, or for ISR , use the `{next:{revalidate:420}}` option with the number of revalidate seconds.
- In **server-side rendering** when a user makes a request to a webpage, the server prepares an HTML page by fetching user-specific data and sends it to the user’s machine over the internet. The browser then constructs the content and displays the page. This entire process of fetching data from the database, creating an HTML page and sending it to client happens in mere milliseconds.
- **Pros of Server Side Rendering** :
  - 1. Search engines can crawl the site for better SEO.
  - 2. The initial page load is faster.
  - 3. Great for **static sites**.
- **Cons of Server Side Rendering:**
  - 1. Frequent server requests.
  - 2. An overall slow page rendering.
  - 3. Full page reloads.
  - 4. Non-rich site interactions

### ISR

- ISR-Incremental Static Regeneration 增量静态重生成
- The UI can be incrementally streamed in thanks to React suspense. Just need to define a `loading.js` file to define the UI. If a component is still awaiting data, it'll automatically show it at the component level, while rendering everything else in the application.
