---
title: fetch-api
topic:
  - Data
tags:
  - JavaScript
type: D
DateStarted: 2022-12-05
DateModified: 2024-04-25
Datereviewed: 
reviewed: 2
status: 
comment: 
difficulty: 
category: Programming
draft: false
---

> [Fetch API - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

## What is `fetch` API?

Fetch: a built-in function that returns a [Promise](Async/Promise) to query URL/API data **async**hronously.

- The `fetch()` method takes one mandatory argument, the **path** to the resource you want to fetch.
- It returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) / [Promise](Async/Promise) that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) to that request — as soon as the server responds with headers — **even if the server response is an HTTP error status**.

### Request

> [Request() - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request)

You can also optionally pass in an `init` options object as the second argument (see [`Request`](https://developer.mozilla.org/en-US/docs/Web/API/Request)).

#### 1. How to `post` data?

- set `method`: `'POST'`
- set `headers`: `'Content-Type': 'application/json'`
- set `body`: `JSON.stringify()`

```js
fetch(https://reqres.in/api/users, {
	method: POST,
	headers: {
		Accept: application/json, text/plain, */*,
		Content-Type: application/json,
	},
	body: JSON.stringify({
		name: User 1,
	}),
});
```

- Result:
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Pasted-image-20221210115058.png)

### Response

Once a [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) is retrieved, there are a number of methods available to define what the **body** content/ **JSON** is and how it should be handled.

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Pasted-image-20221210111900.png)

#### 1. Convert the JSON response to Object

- `res.json()` returns a [Promise](Async/Promise) that **resolves** to an [object](../object/object) containing all the JSON data
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Pasted-image-20221210112955.png)

#### 2. How to handle HTTP error status?

```js
if (res.ok) {
	console.log(SUCCESS);
} else {
	console.log(NOT SUCCESSFUL);
}
res.json;
```

### Optional

You can create a request and response directly using the [`Request()`](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request Request()) and [`Response()`](https://developer.mozilla.org/en-US/docs/Web/API/Response/Response Response()) constructors, but it's uncommon to do this directly.

## How to use?

```js
fetch(https://reqres.in/api/users) // return a Promise
	.then((res) => console.log(res)); // return a Response Object
```
