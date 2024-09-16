---
status: 
title: NextJS Features (Pros & Cons)
tags:
  - NextJS
topic: 
type: 
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - NextJS Features (Pros & Cons)
DateStarted: 2023-11-30
DateModified: 2024-09-14
linter-yaml-title-alias: NextJS Features (Pros & Cons)
category: Front-End Frameworks
---

# NextJS Features (Pros & Cons)

## Why Next.js?

- Next.js is a solution for running react application server side.
- Next.js is a popular, lightweight framework for static and server‑rendered applications❓ built with React.
  - Next.js is what you would almost call the official React framework
  - Only with React, developers need to spend time configuring tools and reinventing solutions for common application requirements.
- Built-in Optimizations for improved UX and Core Web Vitals
  - Image
  - Font
  - Script

## Downsides

Many features are inspired by Remix. One thing Next is missing is a way to write data similar to Remix forms.  
There's no way to write _API routes_ in the new app directory which seems like a sloppy loose end, as _data fetching_ looks amazing but _mutations_ are an entirely different story on which the team says they are working on a new _RFC_ for mutating data.  
Currently, you would use a client-side component `"use client"` , write your mutation logic and then pass in a callback function of `refresh` to update any data on that route after the mutation is complete, which is similar to React query `useRouter().refresh`  
Major changes- hard to migrate code  
90 KB baseline of client-side JS (just for warm-up)

- Other framework that can ship 0 JS app: Astro, Quick
