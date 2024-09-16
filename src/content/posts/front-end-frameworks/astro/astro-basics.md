---
category: Front-End Frameworks
Datereviewed: 
title: Astro Basics
topic: 
type: 
tags:
  - Astro
DateStarted: 2024-03-29
DateModified: 2024-09-14
ewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - Astro Basics
---

# Astro Basics

### Why

- Fastest client-side app

### Reference

- [Check in: Unit 2 - Pages | Docs (astro.build)](https://docs.astro.build/en/tutorial/2-pages/)

### Dependency

- astro 4.4.9
- create RSS feed
  - `npm install @astrojs/rss`

### Tools

- VS Code Extension
  - astro

### Reuse Components

> `src/components`

#### Astro Components (SSR)

- To hold `.astro` files that will generate HTML but that will not become new pages on your website
- JS in Astro Components
  - JS in HTML template: Curly braces are necessary
  - JS in frontmatter
    - The Astro frontmatter script contains only JavaScript.
  - ✅ Use
    - Defining your page title and heading dynamically
    - Mapping through a list of skills on the About page
    - Conditionally displaying HTML elements
  - ❌ Not for client-side interaction
    - Executed at build time to create static HTML for your site, and then the code is “thrown away.”

#### Client Side Interaction (CSR)

> 📺Sent to the browser, and is available to run, based on user interactions like refreshing a page or toggling an input

##### Framework Components

- Astro Island
  - 📺 a *hydrated* component (UI Framework component)
  - include `client:` to send the JavaScript to the client at a different time
  - allow you to “try out” a new framework without requiring you to start an entirely new project using that tech stack
  - allow you to reuse code you have written in other frameworks and you can often just drop them right into your site.
  - `client:load`
  - `client:visible`
    - will only send the component’s JavaScript when it is visible on the page

##### JS in HTML `<script>` tag

- import from `./src/scripts`

### Create Layouts

> `src/layouts`

- In HTML template, add `<slot />`
  - Pass content to your layouts
- Pass data from Markdown frontmatter to your layouts
  - `const {pageTitle} = Astro.props`
  - Then use `{pageTitle}` in HTML template
- Nest two layouts

### Astro API

- ✅ access data from files in your project
  - In frontmatter
    - `const allPosts = await Astro.glob('../pages/posts/*');`
      - will return an array of objects, one for each blog post
  - Then in HTML template
    - `{allPosts.map((post)=><BlogPost url={post.url} title={post.frontmatter.title}/>)}`
- ✅ create multiple pages (routes) from one file
  - `[tag].astro`
  - `getStaticPaths(... return {params: {tag}, props:{posts: ...}})`
    - `const {tag} = Astro.params`
    - `const {posts} = Astro.props`

### Styles

- global style
  - `./src/styles/global.css`
- page style
  - In HTML `<style>` to style individual page
  - When in conflict, page style will overwrite global style

#### Tailwind in Astro

`npx astro add tailwind`

### Pages Routing

> `./src/pages`

- `pages/folder/index.astro` routing feature
  - a page at the same route: `pages/folder.astro`

### Content Collection

> `src/content`

#### Why

allow you to use more powerful and performant APIs to generate your blog post index and display your individual blog posts  
 you will have a **[schema](https://docs.astro.build/en/guides/content-collections/#defining-a-collection-schema)** to define a common structure for each post that Astro will help you enforce

- can specify when frontmatter properties are required
- which data type each property must be, such as a string or an array

#### Use

convert a basic blog from `src/pages/posts/` to `src/content/posts/`

##### Generate pages from a collection

Your Markdown and MDX files no longer automatically become pages using Astro's file-based routing when they are inside a collection, so you must create a page responsible for generating each individual blog post

### Transition Animation

> [Tutorial - Extend with View Transitions | Docs](https://docs.astro.build/en/tutorials/add-view-transitions/)

To change the type of animation for a single element, add the `transition:animate=""` directive

#### Override transition animation (force a full browser reload)

`<a href="/about/" data-astro-reload>About</a>`
