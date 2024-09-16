---
topic:
  - Routing
type: D
tags:
  - React
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
title: React Router DOM
aliases:
  - React Router DOM
  - react-router
DateStarted: 2024-04-02
DateModified: 2024-09-14
linter-yaml-title-alias: React Router DOM
category: Front-End Frameworks
---

# React Router DOM

> [Feature Overview v6.22.3 | React Router](https://reactrouter.com/en/main/start/overview)

## Why

> [Server-side vs Client-side Routing | by Wilbert Schepenaar | Medium](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f) >[Server side vs Client side Routing- Scaler Topics](https://www.scaler.com/topics/react/server-client-routing/)  
> [What is the difference between React Router and conventional routing? | by Yashi Shukla | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/what-is-the-difference-between-react-router-and-conventional-routing-9b11159d92a4)

React Router enables "==client side routing=="

### What is Client Side Routing & Why?

In traditional websites, the browser **requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server**. When the user clicks a link, it starts the process all over again for a new page  
Client side routing allows your app to update the URL from a link click **without making another request for another document from the server**. Instead, your app can immediately render some new UI and make data requests with `fetch` to update the page with new information


## Routers
low-level interface that is shared by all router components. 
- [`<Router>`](https://reactrouter.com/en/main/router-components/router)
	- should use one of the higher-level routers. Only ever need one router in a given app
### ✅ Data Routers (v6.4)
>v6.4, new routers that support Data API  
> to quickly update to a v6.4 is to get the help from [`createRoutesFromElements`](https://reactrouter.com/en/main/utils/create-routes-from-elements) so you don't need to convert your `<Route>` elements to route objects
- [`createBrowserRouter`](https://reactrouter.com/en/main/routers/create-browser-router)
	- For all web projects 
	- uses the **full URL** instead of the hash urls (`#this/stuff`) common in web apps before `history.pushState` was standardized
	- better for SEO, better for server rendering, and are just more compatible with the rest of the web platform
	- on a static file server, you'll need to configure it to send all requests to your `index.html` to avoid getting 404s
- [`createMemoryRouter`](https://reactrouter.com/en/main/routers/create-memory-router)
	- Testing components that use React Router APIs is easiest with [`createMemoryRouter`](https://reactrouter.com/en/main/routers/create-memory-router) or [`<MemoryRouter>`](https://reactrouter.com/en/main/router-components/memory-router) instead of the routers you use in your app that require DOM history APIs
- [`createHashRouter`](https://reactrouter.com/en/main/routers/create-hash-router)
	- If for some reason you can't use the full URL, [`createHashRouter`](https://reactrouter.com/en/main/routers/create-hash-router) is the next best thing
- [`createStaticRouter`](https://reactrouter.com/en/main/routers/create-static-router)
### 🟨 Old Router Components
> Router components that do not support the data APIs:  
> recommend updating your app to use one of the new routers from 6.4
- [`<BrowserRouter>`](https://reactrouter.com/en/main/router-components/browser-router)
- [`<MemoryRouter>`](https://reactrouter.com/en/main/router-components/memory-router)
- [`<HashRouter>`](https://reactrouter.com/en/main/router-components/hash-router)
- [`<NativeRouter>`](https://reactrouter.com/en/main/router-components/native-router)
- [`<StaticRouter>`](https://reactrouter.com/en/main/router-components/static-router)
## Route
Data APIs for Route; Only work when using a [[front-end-frameworks/react/routing/react-router#✅ Data Routers v6 4|✅ Data Router v6 4]]
- [`route.action`](https://reactrouter.com/en/main/route/action)
- [`route.errorElement`](https://reactrouter.com/en/main/route/error-element)
- [`route.lazy`](https://reactrouter.com/en/main/route/lazy)
- [`route.loader`](https://reactrouter.com/en/main/route/loader)
- [`route.shouldRevalidate`](https://reactrouter.com/en/main/route/should-revalidate)
- [`route.handle`](https://reactrouter.com/en/main/route/route#handle)

## Components
>Data APIs for Route; Only work when using a [[front-end-frameworks/react/routing/react-router#✅ Data Routers v6 4|✅ Data Router v6 4]]
- [`<Await>`](https://reactrouter.com/en/main/components/await)
- [`<Form>`](https://reactrouter.com/en/main/components/form)
- [`<ScrollRestoration>`](https://reactrouter.com/en/main/components/scroll-restoration)
## Hooks
>Data APIs for Route; Only work when using a [[front-end-frameworks/react/routing/react-router#✅ Data Routers v6 4|✅ Data Router v6 4]]
- [`useActionData`](https://reactrouter.com/en/main/hooks/use-action-data)
- [`useAsyncError`](https://reactrouter.com/en/main/hooks/use-async-error)
- [`useAsyncValue`](https://reactrouter.com/en/main/hooks/use-async-value)
- [`useFetcher`](https://reactrouter.com/en/main/hooks/use-fetcher)
- [`useFetchers`](https://reactrouter.com/en/main/hooks/use-fetchers)
- [`useLoaderData`](https://reactrouter.com/en/main/hooks/use-loader-data)
- [`useMatches`](https://reactrouter.com/en/main/hooks/use-matches)
- [`useNavigation`](https://reactrouter.com/en/main/hooks/use-navigation)
- [`useRevalidator`](https://reactrouter.com/en/main/hooks/use-revalidator)
- [`useRouteError`](https://reactrouter.com/en/main/hooks/use-route-error)
- [`useRouteLoaderData`](https://reactrouter.com/en/main/hooks/use-route-loader-data)
- [`useSubmit`](https://reactrouter.com/en/main/hooks/use-submit)
- `startViewTransition` support on [Link](https://reactrouter.com/en/main/components/link#unstable_viewtransition) and [useNavigate](https://reactrouter.com/en/main/hooks/use-navigate#optionsunstable_viewtransition)
## Fetch Utilities


## Utilities




## Use

### Main Route

`import { createBrowserRouter, RouterProvider } from "react-router-dom";`

### Nested Route

`{... children:[{...}]}`

#### Deep nested routes

> [reactjs - createBrowserRouter How to nest child routes inside another route that itself is a nested child route? - Stack Overflow](https://stackoverflow.com/questions/74566649/createbrowserrouter-how-to-nest-child-routes-inside-another-route-that-itself-is/78214668#78214668)

### Handle Not Found Error

ErrorBoundary  
`errorElement: ...`

#### ErrorPage

```jsx
import { useRouteError } from "react-router-dom";
export default function ErrorPage() {
	const error = useRouteError();
	console.error(error);
	return (
		<div id="error-page">
			      <h1>Oops!</h1>      <p>Sorry, an unexpected error has occurred.</p> 
			   {" "}
			<p>
				        <i>{error.statusText || error.message}</i>     {" "}
			</p>
			   {" "}
		</div>
	);
}
```

### Loading Data

export an async loader function from root.jsx  
import the loader function in main.jsx  
`loader: loaderFunction`  
`import {useLoaderData} from "react-router-dom"`

### Data Writes + HTML Forms

React Router emulates HTML Form navigation as the data mutation primitive  
Links can only change the URL while forms can also change the request method (GET vs POST) and the request body (POST form data)

#### Form component

`import { Form } from "react-router-dom";`

- [`<Form>`](https://reactrouter.com/en/main/components/form) prevents the browser from sending the request to the server and sends it to your route `action` instead.
- React Router uses POST as a hint to automatically revalidate the data on the page after the action finishes. That means all of your `useLoaderData` hooks update and the UI stays in sync with your data automatically!
- Like `<Link to>`, `<Form action>` can take a *relative* value. A relative action with `destroy` will submit the form to `contact/:contactId/destroy` when clicked

#### URL Params

`path: "contacts/:contactId"`

- The colon (`:`) has special meaning, turning it into a "dynamic segment". We call these values in the URL "URL Params", or just "params" for short.
- These params are most often used to find a record by ID

### Update with FormData

[FormData - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/FormData)  
Without JavaScript, when a form is submitted, the browser will create [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) and set it as the body of the request when it sends it to the server  
React Router prevents that and sends the request to your action instead, including the [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData)  
Each field in the form is accessible with `formData.get(name)`

```jsx
export async function action({ request, params }) {
	const formData = await request.formData();
	const firstName = formData.get("first");
	const lastName = formData.get("last");
	// ...
}
```

### Active Link Styling

We can use [`NavLink`](https://reactrouter.com/en/main/components/nav-link)  
we are passing a function to `className`. When the user is at the URL in the `NavLink`, then `isActive` will be true. When it's *about* to be active (the data is still loading) then `isPending` will be true

### Global Pending UI

As the user navigates the app, React Router will *leave the old page up* as data is loading for the next page. We can provide the user with some feedback so the app doesn't feel unresponsive  
React Router is managing all of the state behind the scenes and reveals the pieces of it you need to build dynamic web apps. We'll use the [`useNavigation`](https://reactrouter.com/en/main/hooks/use-navigation) hook  
[`useNavigation`](https://reactrouter.com/en/main/hooks/use-navigation) returns the current navigation state: it can be one of `"idle" | "submitting" | "loading"`

### Contextual Error

create a contextual error message for the destroy route  
user now has more options than slamming refresh, they can continue to interact with the parts of the page that aren't having trouble

### Index Route

You can think of index routes as the default child route to fill in that space.

### Cancel Button (`useNavigate`)

`const navigate = useNavigate();`  
`<button type="button" onClick={() => {navigate(-1); }}>`

- A `<button type="button">`, while seemingly redundant, is the HTML way of preventing a button from submitting its form  
  when the user clicks "Cancel", they'll be sent back one entry in the browser's history

## URL Search Params and GET Submissions

All interactive UI in this demo project so far have been either  
 - **links** that change the URL or  
 - **forms** that post data to actions  
The search field is a mix of both!

- The search form does not have `<form method="post">`. The default `method` is `"get"`  
  the browser's URL contains your query in the URL as [URLSearchParams](https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams)  
  `http://127.0.0.1:5173/?q=ryan`
- browsers can serialize forms by the `name` attribute of it's input elements
- The name of this input is `q`, that's why the URL has `?q=`.  
  Submitting a GET form is the same as clicking a link: only the URL changes. That's why the code we added for filtering is in the `loader`, not the `action` of this route

### Synchronize URLs to Form State

### Submitting the Search Form `onChange` (`useSubmit`)

have the filtering happen on every key stroke instead of when the form is explicitly submitted  
`const submit = useSubmit()`

```jsx
<input onChange={(event) => {
       submit(event.currentTarget.form);}}
```

The `currentTarget` is the DOM node the event is attached to, and the `currentTarget.form` is the input's parent form node. The `submit` function will serialize and submit any form you pass to it.

### Add Search Spinner

The `navigation.location` will show up when the app is navigating to a new URL and loading the data for it. It then goes away when there is no pending navigation anymore

### Manage the History Stack (Throttle)

*replacing* the current entry in the history stack with the next page, instead of pushing into it

### Mutation without Navigation

`useFetcher` allows us to communicate with loaders and actions without causing a navigation



## Questions
#### [在 history 模式中 push 和 replace 有什么区别？](https://github.com/haizlin/fe-interview/issues/778)

#### [React-Router 的实现原理是什么？](https://github.com/haizlin/fe-interview/issues/774)

#### [React-Router 怎么获取 URL 的参数？](https://github.com/haizlin/fe-interview/issues/921)

#### [React-Router 怎么获取历史对象？](https://github.com/haizlin/fe-interview/issues/922)


#### [React-Router 怎么设置重定向？](https://github.com/haizlin/fe-interview/issues/777)

#### [路由切换时同一组件无法重新渲染的有什么方法可以解决？](https://github.com/haizlin/fe-interview/issues/833)

#### [React-Router 的路由有几种模式？](https://github.com/haizlin/fe-interview/issues/772)

#### [React-Router 的`<Link>`标签和`<a>`标签有什么区别？](https://github.com/haizlin/fe-interview/issues/770)

#### [React-Router 4 中`<Router>`组件有几种类型？](https://github.com/haizlin/fe-interview/issues/776)

#### [React-Router 3 和 React-Router 4 有什么变化？添加了什么好的特性？](https://github.com/haizlin/fe-interview/issues/775)

#### [React-Router 4 的 switch 有什么用？](https://github.com/haizlin/fe-interview/issues/773)

#### [React-Router 4 怎样在路由变化时重新渲染同一个组件？](https://github.com/haizlin/fe-interview/issues/771)


#### [React 的路由和普通路由有什么区别？](https://github.com/haizlin/fe-interview/issues/728)

#### [请你说说 React 的路由的优缺点？](https://github.com/haizlin/fe-interview/issues/727)

#### [请你说说 React 的路由是什么？](https://github.com/haizlin/fe-interview/issues/726)








