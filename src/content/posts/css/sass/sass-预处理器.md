---
topic: 
category: Web Design
aliases:
  - SASS 预处理器
draft: false
title: SASS 预处理器
type: O
tags:
  - SASS
  - CSS
status: 
DateStarted: 2023-09-18
DateModified: 2024-04-19
Datereviewed: 2023-09-23T00:00:00.000+08:00
difficulty: Good
reviewed: 1
comment: ⭐⭐
linter-yaml-title-alias: SASS 预处理器
---

# SASS 预处理器

## CSS Preprocessor, adds power and elegance to the language

## Main features

### mixins

- to write reusable piece of CSS code

### variables

- reusable values:colors, font-sizes, spacing, etc

### functions

- similar to mixins, difference is that they produce a value that can be used

### nesting

- nest selectors insde of one another, to write less code

### extends

- make different selectors inherit declarations that are common to all of them

### operators

- mathematical opertions inside CSS

### partials and imports

- write CSS in different partial files and importing them all in one single file

### control directives

- write complex code using conditionals and loops

## syntax

### SASS syntax

### SCSS syntax

## to install locally

### node.js

- write and run JS on the server

### npm: node package manager

- command line interface: to install and manage packages(tools, libraries and frameworks needed for modern development) on local computer
- npm init
  - create a package.json file in the working directory
- npm install
  - npm install node-sass --save-dev
    - make sure 'package.json' is updated and list it as one of the dev dependencies (tool for the project)
  - sudo npm install `<package ame> -g`
    - install globally
  - ! npm install
    - Based on 'package.json' download necessary node modules
- live-server
  - Need to go back to the project folder
  - ! Together with "sass:compile" scripts running: no need to reload to watch for changes
- create a 'main.scss' file in a new 'sass' folder
- "scripts"
  - To import sass file to css file
    - create a script <"compile:sass": "node-sass sass/main.scss css/style.css -w" in 'package.json' (-w: means keep watching for the changes)
    - npm run `<script name>`
    - error
      - npm rebuild `<script name>`
      - node-fetch connect ETIMEDOUT error
        - npm config rm proxy
        - npm config rm https-proxy
  - ! Other scripts
    - To add prefixer: ensure compatibility on different browsers
    - To compress code
