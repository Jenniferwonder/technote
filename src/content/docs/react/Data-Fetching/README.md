---
title: React Data Fetching
Topic:
  - React
Type: D
tags:
  - React
DateStarted: 2024-03-06
DateModified: 2024-03-06
DateDo:
DateDone:
DateDue:
DateReviewed:
Reviewed:
Difficulty:
status:
Comment:
aliases:
  - React Data Fetching
---

# React Data Fetching

creating, reading, searching, updating, and deleting data. A typical web app would probably be talking to an API on your web server, but we're going to use browser storage and fake some network latency to keep this focused

## Fetch

#### `await response.text()`

typically used when you expect the server to respond with plain text, HTML, XML, or any other non-JSON format

##### fetch `.mmd` data from `raw.githubusercontent.com`

```js
const pathToMermaid =
	"https://raw.githubusercontent.com/Lissy93/git-into-open-source/main/guides/roadmap.mmd";
const getMermaidCode = async () => {
	const response = await fetch(pathToMermaid);
	return await response.text();
};
const mermaidCode = await getMermaidCode();
```

##### fetch `.yml` data from `raw.githubusercontent.com`

```js
import yaml from "js-yaml";
const resourcesUrl =
	"https://raw.githubusercontent.com/Lissy93/git-into-open-source/main/resources.yml";
const fetchResources = async (url) => {
	const response = await fetch(url);
	const textData = await response.text();
	const data = yaml.load(textData);
	return data.resources || [];
};
const resources = await fetchResources(resourcesUrl);
```

#### `await response.json()`

```js

```

## React Query

## Questions

#### [在 React 中怎么使用 async/await？](https://github.com/haizlin/fe-interview/issues/880)

### Error Handling

#### [React 中在哪捕获错误？](https://github.com/haizlin/fe-interview/issues/928)

#### [说说你对 Error Boundaries 的理解](https://github.com/haizlin/fe-interview/issues/701)

#### [React v15 中怎么处理错误边界？](https://github.com/haizlin/fe-interview/issues/859)
