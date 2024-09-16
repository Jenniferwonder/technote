---
category: Front-End Frameworks
title: Sync and Publish Obsidian Notes with Astro
topic: 
type: 
tags:
  - Astro
DateStarted: 2024-04-07
DateModified: 2024-09-14
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - Sync and Publish Obsidian Notes with Astro
  - Sync and Publish Obsidian Notes with Astro
linter-yaml-title-alias: Sync and Publish Obsidian Notes with Astro
---

# Sync and Publish Obsidian Notes with Astro

## Purpose

- [x] Public notes from different obsidian vaults keep in sync with public notes in Astro project
- [x] wikilink/ markdown link can be parsed properly

## Problems

Astro can't recognize:

- wikilinks like
  - `![[image.png]]`
  - `[[note]]`
- name with empty space placeholder
  - `-`
- common markdown links like `[another](another)`
  - the internal link to another markdown file has to be rewritten as `[another](another)` which is unrecognizable for other markdown editor.

## Solutions

### For Sync Obsidian Vaults to Astro project

Use **mklink/ symlink**

- ✅Update stays in sync
- ✅Obsidian vault doesn't get bloated with `node_modules` and files other than notes

### For image links

#### ❌ Solution-1: Update local images

- change them to markdown link format (using obsidian wikilink to markdown link plugin)
  - `![image](image.png)`
- replace empty space in image name to `-`
- replace `-` in image markdown link to `-`
- add a `./` before the image link,

#### 👍 Solution-2: Use free pic-bed

- [x] 配置 PicList 上传图片压缩 ✅ 2024-04-15
- [x] 批量压缩图片 (洋芋田图像处理软件) ✅ 2024-04-16
- [x] 克隆图片仓库，批量上传笔记图片至 GitHub，批量更新笔记图片链接 ✅ 2024-04-17
- [x] 批量替换笔记内图片链接： ✅ 2024-04-17
  - `![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/image.png)`

#### Ultimate Solution: Reduce image use

> 终极方案：减少不必要的笔记图片，专注文本输出

### For note links

#### ❌ Solutions I've tried

> neither of the following solution works in astro-starlight project

- [GitHub - vernak2539/astro-rehype-relative-markdown-links: Rehype Plugin for Astro that allows for usage of relative links between markdown files](https://github.com/vernak2539/astro-rehype-relative-markdown-links)
- [Getting Started | Starlight Links Validator](https://starlight-links-validator.vercel.app/getting-started/)

##### starlight-obsidian

> [GitHub - HiDeoo/starlight-obsidian: Starlight plugin to publish Obsidian vaults](https://github.com/HiDeoo/starlight-obsidian)

| Pros                               | Cons                                                                       |
| ---------------------------------- | -------------------------------------------------------------------------- |
| ✅ Supports wikilink to astro-link | ❌ can only link to 1 obsidian vault (not able to publish multiple vaults) |
|                                    | ❌ a `Note` item in Sidebar can't be removed                               |
|                                    | ❌ duplicated notes in astro-project `public` folder (bloat disk space)    |
|                                    | <br><br>                                                                   |

#### 👍 Current solution I'm using

- [parsing - Using markdown wiki-links in Astro framework - Stack Overflow](https://stackoverflow.com/questions/76163067/using-markdown-wiki-links-in-astro-framework)
- @portaljs/remark-wiki-link  
  Turn note links into absolute path wikilink  
  Configure `@portaljs/remark-wiki-link`
