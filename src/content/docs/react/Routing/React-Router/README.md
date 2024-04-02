---
title: React Router
aliases: react-router
---

# React Router

> [Feature Overview v6.22.3 | React Router](https://reactrouter.com/en/main/start/overview)

## Why

> [Server-side vs Client-side Routing | by Wilbert Schepenaar | Medium](https://medium.com/@wilbo/server-side-vs-client-side-routing-71d710e9227f) >[Server side vs Client side Routing- Scaler Topics](https://www.scaler.com/topics/react/server-client-routing/)
> [What is the difference between React Router and conventional routing? | by Yashi Shukla | Nerd For Tech | Medium](https://medium.com/nerd-for-tech/what-is-the-difference-between-react-router-and-conventional-routing-9b11159d92a4)

React Router enables "==client side routing=="

### What is Client Side Routing & Why?

In traditional websites, the browser **requests a document from a web server, downloads and evaluates CSS and JavaScript assets, and renders the HTML sent from the server**. When the user clicks a link, it starts the process all over again for a new page
Client side routing allows your app to update the URL from a link click **without making another request for another document from the server**. Instead, your app can immediately render some new UI and make data requests with `fetch` to update the page with new information

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
