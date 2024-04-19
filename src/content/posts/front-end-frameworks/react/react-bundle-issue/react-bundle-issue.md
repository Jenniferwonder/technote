---
title: React Bundle Issue
topic:
  - React
type: D
tags:
  - React
DateStarted: 2024-03-06
DateModified: 2024-04-19
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - React Bundle Issue
category: Front-End Frameworks
linter-yaml-title-alias: React Bundle Issue
draft: true
---

# React Bundle Issue

不只是域名，这种问题针对的是不同环境的个性化环境变量如何设置的问题。  
如果是 CRA 的项目的话，可以使用`.env` `.env.development` `.env.production`文件来区分不同的环境；  
比如生产环境域名`http://www.prod.com`，开发环境域名`http://www.deve.com`，  
则可以分别设置`REACT_APP_BASE_URL = 'http://www.prod.com'`和`REACT_APP_BASE_URL = 'http://www.deve.com'`，  
然后在程序中使用`process.env.REACT_APP_BASE_URL`来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名

## Reference

- [in Depth-a-note-on-vite-p1](https://angularindepth.com/posts/1318/a-note-on-vite-a-very-fast-dev-build-tool)
- [in Depth-a-note-on-vite-p2](https://angularindepth.com/posts/1327/a-note-on-vite-a-very-fast-dev-build-tool-ii)

## Questions

#### [浏览器为什么无法直接 JSX？怎么解决呢？](https://github.com/haizlin/fe-interview/issues/624)

#### [React 根据不同的环境打包不同的域名？](https://github.com/haizlin/fe-interview/issues/882)

#### [使用 webpack 打包 React 项目，怎么减小生成的 js 大小？](https://github.com/haizlin/fe-interview/issues/881)

#### [在 React 中如何去除生产环境上的 sourcemap？](https://github.com/haizlin/fe-interview/issues/842)

#### [React 的应用如何打包发布？它的步骤是什么？](https://github.com/haizlin/fe-interview/issues/827)

#### [怎样在 React 中开启生产模式？](https://github.com/haizlin/fe-interview/issues/793)









