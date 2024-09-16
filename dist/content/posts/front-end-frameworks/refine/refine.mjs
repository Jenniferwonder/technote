import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/refine/refine.md",collection="posts",slug="front-end-frameworks/refine/refine",body='# Refine\n## Init\n`npm create-refine-app`\n## Fake API\n[GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)](https://github.com/typicode/json-server)\n\n## Data Fetching\n`<Refine />` component accepts a [`dataProvider`](https://refine.dev/docs/core/refine-component/#dataprovider-) prop which is used to handle all the data fetching and mutation operations with a simple interface. While Refine supports many data providers out of the box, for sake of this tutorial, we\'ll be creating our own data provider and connecting it to a [fake REST API](https://api.fake-rest.refine.dev/).\n```jsx\nimport { Refine } from "@refinedev/core";\nimport { dataProvider } from "./providers/data-provider";\nimport { ShowProduct } from "./pages/products/show";\nexport default function App(): JSX.Element {\n  return (\n    <Refine dataProvider={dataProvider}>\n        <ShowProduct />\n    </Refine>\n  );\n}\n```\n\n### Show data\n#### `getOne()`\nin file `data-provider`, add `getOne` method, to fetch from an api\n#### `useOne()`\n`useOne()` to get data\n```jsx\nimport { useOne } from "@refinedev/core";\nexport const ShowProduct = () => {\n    const { data, isLoading } = useOne({ resource: "products", id: 123 });\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n    return <div>Product name: {data?.data.name}</div>;\n};\n```\n\n### Update/ Edit data\n#### `update`\nin file `data-provider`, add: \n```jsx\nupdate: async ({ resource, id, variables }) => {\n    const response = await fetch(`${API_URL}/${resource}/${id}`, {\n      method: "PATCH",\n      body: JSON.stringify(variables),\n      headers: {\n        "Content-Type": "application/json",\n      },\n    });\n    if (response.status < 200 || response.status > 299) throw response;\n    const data = await response.json();\n    return { data };\n  },\n```\n#### `useUpdate()`\nwhen we update the price using `useUpdate`, the `useOne` hook we called before is automatically invalidated\n```jsx\nconst { mutate, isLoading: isUpdating } = useUpdate();\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n  const updatePrice = async () => {\n    await mutate({\n      resource: "products",\n      id: 123,\n      values: {\n        price: Math.floor(Math.random() * 100),\n      },\n    });\n  };\n```\n\n### Fetch List Records\nfetch a list of records from our API\npagination, sorting and filtering\n#### `getList()`\n```jsx\ngetList: async ({ resource, pagination, filters, sorters, meta }) => {\n    const params = new URLSearchParams();\n    if (pagination) {\n      params.append("_start", (pagination.current - 1) * pagination.pageSize);\n      params.append("_end", pagination.current * pagination.pageSize);\n    }\n    if (sorters && sorters.length > 0) {\n      params.append("_sort", sorters.map((sorter) => sorter.field).join(","));\n      params.append("_order", sorters.map((sorter) => sorter.order).join(","));\n    }\n    if (filters && filters.length > 0) {\n      filters.forEach((filter) => {\n        if ("field" in filter && filter.operator === "eq") {\n          // Our fake API supports "eq" operator by simply appending the field name and value to the query string.\n          params.append(filter.field, filter.value);\n        }\n      });\n    }\n    const response = await fetch(`${API_URL}/${resource}?${params.toString()}`);\n    if (response.status < 200 || response.status > 299) throw response;\n    const data = await response.json();\n    return {\n      data,\n      total: 0, // We\'ll cover this in the next steps.\n    };\n  },\n```\n#### `useList()`\n### Forms\n### Tables\n',data={title:"Refine",DateStarted:new Date(17187552e5),draft:!0,tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/refine/refine.md",rawData:void 0},html='<h1 id="refine">Refine<a class="anchor" href="#refine"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="init">Init<a class="anchor" href="#init"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><code>npm create-refine-app</code></p>\n<h2 id="fake-api">Fake API<a class="anchor" href="#fake-api"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><a href="https://github.com/typicode/json-server">GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)</a></p>\n<h2 id="data-fetching">Data Fetching<a class="anchor" href="#data-fetching"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><code>&#x3C;Refine /></code> component accepts a <a href="https://refine.dev/docs/core/refine-component/#dataprovider-"><code>dataProvider</code></a> prop which is used to handle all the data fetching and mutation operations with a simple interface. While Refine supports many data providers out of the box, for sake of this tutorial, we’ll be creating our own data provider and connecting it to a <a href="https://api.fake-rest.refine.dev/">fake REST API</a>.</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { Refine } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@refinedev/core"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { dataProvider } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "./providers/data-provider"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { ShowProduct } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "./pages/products/show"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#F97583"> function</span><span style="color:#B392F0"> App</span><span style="color:#E1E4E8">()</span><span style="color:#F97583">:</span><span style="color:#B392F0"> JSX</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">Element</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">  return</span><span style="color:#E1E4E8"> (</span></span>\n<span class="line"><span style="color:#E1E4E8">    &#x3C;</span><span style="color:#79B8FF">Refine</span><span style="color:#B392F0"> dataProvider</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{dataProvider}></span></span>\n<span class="line"><span style="color:#E1E4E8">        &#x3C;</span><span style="color:#79B8FF">ShowProduct</span><span style="color:#E1E4E8"> /></span></span>\n<span class="line"><span style="color:#E1E4E8">    &#x3C;/</span><span style="color:#79B8FF">Refine</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">  );</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h3 id="show-data">Show data<a class="anchor" href="#show-data"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="getone"><code>getOne()</code><a class="anchor" href="#getone"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>in file <code>data-provider</code>, add <code>getOne</code> method, to fetch from an api</p>\n<h4 id="useone"><code>useOne()</code><a class="anchor" href="#useone"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>useOne()</code> to get data</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { useOne } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@refinedev/core"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> const</span><span style="color:#B392F0"> ShowProduct</span><span style="color:#F97583"> =</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">    const</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">data</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">isLoading</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useOne</span><span style="color:#E1E4E8">({ resource: </span><span style="color:#9ECBFF">"products"</span><span style="color:#E1E4E8">, id: </span><span style="color:#79B8FF">123</span><span style="color:#E1E4E8"> });</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (isLoading) {</span></span>\n<span class="line"><span style="color:#F97583">        return</span><span style="color:#E1E4E8"> &#x3C;</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>Loading...&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>;</span></span>\n<span class="line"><span style="color:#E1E4E8">    }</span></span>\n<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> &#x3C;</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>Product name: {data?.data.name}&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>;</span></span>\n<span class="line"><span style="color:#E1E4E8">};</span></span>\n<span class="line"></span></code></pre>\n<h3 id="update-edit-data">Update/ Edit data<a class="anchor" href="#update-edit-data"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="update"><code>update</code><a class="anchor" href="#update"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>in file <code>data-provider</code>, add:</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#B392F0">update</span><span style="color:#E1E4E8">: </span><span style="color:#F97583">async</span><span style="color:#E1E4E8"> ({ </span><span style="color:#FFAB70">resource</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">id</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">variables</span><span style="color:#E1E4E8"> }) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> response</span><span style="color:#F97583"> =</span><span style="color:#F97583"> await</span><span style="color:#B392F0"> fetch</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`${</span><span style="color:#79B8FF">API_URL</span><span style="color:#9ECBFF">}/${</span><span style="color:#E1E4E8">resource</span><span style="color:#9ECBFF">}/${</span><span style="color:#E1E4E8">id</span><span style="color:#9ECBFF">}`</span><span style="color:#E1E4E8">, {</span></span>\n<span class="line"><span style="color:#E1E4E8">      method: </span><span style="color:#9ECBFF">"PATCH"</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">      body: </span><span style="color:#79B8FF">JSON</span><span style="color:#E1E4E8">.</span><span style="color:#B392F0">stringify</span><span style="color:#E1E4E8">(variables),</span></span>\n<span class="line"><span style="color:#E1E4E8">      headers: {</span></span>\n<span class="line"><span style="color:#9ECBFF">        "Content-Type"</span><span style="color:#E1E4E8">: </span><span style="color:#9ECBFF">"application/json"</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">      },</span></span>\n<span class="line"><span style="color:#E1E4E8">    });</span></span>\n<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (response.status </span><span style="color:#F97583">&#x3C;</span><span style="color:#79B8FF"> 200</span><span style="color:#F97583"> ||</span><span style="color:#E1E4E8"> response.status </span><span style="color:#F97583">></span><span style="color:#79B8FF"> 299</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">throw</span><span style="color:#E1E4E8"> response;</span></span>\n<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> data</span><span style="color:#F97583"> =</span><span style="color:#F97583"> await</span><span style="color:#E1E4E8"> response.</span><span style="color:#B392F0">json</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> { data };</span></span>\n<span class="line"><span style="color:#E1E4E8">  },</span></span>\n<span class="line"></span></code></pre>\n<h4 id="useupdate"><code>useUpdate()</code><a class="anchor" href="#useupdate"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>when we update the price using <code>useUpdate</code>, the <code>useOne</code> hook we called before is automatically invalidated</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#E1E4E8"> { </span><span style="color:#79B8FF">mutate</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">isLoading</span><span style="color:#E1E4E8">: </span><span style="color:#79B8FF">isUpdating</span><span style="color:#E1E4E8"> } </span><span style="color:#F97583">=</span><span style="color:#B392F0"> useUpdate</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#F97583">  if</span><span style="color:#E1E4E8"> (isLoading) {</span></span>\n<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> &#x3C;</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>Loading...&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>;</span></span>\n<span class="line"><span style="color:#E1E4E8">  }</span></span>\n<span class="line"><span style="color:#F97583">  const</span><span style="color:#B392F0"> updatePrice</span><span style="color:#F97583"> =</span><span style="color:#F97583"> async</span><span style="color:#E1E4E8"> () </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">    await</span><span style="color:#B392F0"> mutate</span><span style="color:#E1E4E8">({</span></span>\n<span class="line"><span style="color:#E1E4E8">      resource: </span><span style="color:#9ECBFF">"products"</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">      id: </span><span style="color:#79B8FF">123</span><span style="color:#E1E4E8">,</span></span>\n<span class="line"><span style="color:#E1E4E8">      values: {</span></span>\n<span class="line"><span style="color:#E1E4E8">        price: Math.</span><span style="color:#B392F0">floor</span><span style="color:#E1E4E8">(Math.</span><span style="color:#B392F0">random</span><span style="color:#E1E4E8">() </span><span style="color:#F97583">*</span><span style="color:#79B8FF"> 100</span><span style="color:#E1E4E8">),</span></span>\n<span class="line"><span style="color:#E1E4E8">      },</span></span>\n<span class="line"><span style="color:#E1E4E8">    });</span></span>\n<span class="line"><span style="color:#E1E4E8">  };</span></span>\n<span class="line"></span></code></pre>\n<h3 id="fetch-list-records">Fetch List Records<a class="anchor" href="#fetch-list-records"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>fetch a list of records from our API\npagination, sorting and filtering</p>\n<h4 id="getlist"><code>getList()</code><a class="anchor" href="#getlist"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#B392F0">getList</span><span style="color:#E1E4E8">: </span><span style="color:#F97583">async</span><span style="color:#E1E4E8"> ({ </span><span style="color:#FFAB70">resource</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">pagination</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">filters</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">sorters</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">meta</span><span style="color:#E1E4E8"> }) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> params</span><span style="color:#F97583"> =</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> URLSearchParams</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (pagination) {</span></span>\n<span class="line"><span style="color:#E1E4E8">      params.</span><span style="color:#B392F0">append</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"_start"</span><span style="color:#E1E4E8">, (pagination.current </span><span style="color:#F97583">-</span><span style="color:#79B8FF"> 1</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> pagination.pageSize);</span></span>\n<span class="line"><span style="color:#E1E4E8">      params.</span><span style="color:#B392F0">append</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"_end"</span><span style="color:#E1E4E8">, pagination.current </span><span style="color:#F97583">*</span><span style="color:#E1E4E8"> pagination.pageSize);</span></span>\n<span class="line"><span style="color:#E1E4E8">    }</span></span>\n<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (sorters </span><span style="color:#F97583">&#x26;&#x26;</span><span style="color:#E1E4E8"> sorters.</span><span style="color:#79B8FF">length</span><span style="color:#F97583"> ></span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#E1E4E8">      params.</span><span style="color:#B392F0">append</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"_sort"</span><span style="color:#E1E4E8">, sorters.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">sorter</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> sorter.field).</span><span style="color:#B392F0">join</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">","</span><span style="color:#E1E4E8">));</span></span>\n<span class="line"><span style="color:#E1E4E8">      params.</span><span style="color:#B392F0">append</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">"_order"</span><span style="color:#E1E4E8">, sorters.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">sorter</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> sorter.order).</span><span style="color:#B392F0">join</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">","</span><span style="color:#E1E4E8">));</span></span>\n<span class="line"><span style="color:#E1E4E8">    }</span></span>\n<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (filters </span><span style="color:#F97583">&#x26;&#x26;</span><span style="color:#E1E4E8"> filters.</span><span style="color:#79B8FF">length</span><span style="color:#F97583"> ></span><span style="color:#79B8FF"> 0</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#E1E4E8">      filters.</span><span style="color:#B392F0">forEach</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">filter</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">        if</span><span style="color:#E1E4E8"> (</span><span style="color:#9ECBFF">"field"</span><span style="color:#F97583"> in</span><span style="color:#E1E4E8"> filter </span><span style="color:#F97583">&#x26;&#x26;</span><span style="color:#E1E4E8"> filter.operator </span><span style="color:#F97583">===</span><span style="color:#9ECBFF"> "eq"</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#6A737D">          // Our fake API supports "eq" operator by simply appending the field name and value to the query string.</span></span>\n<span class="line"><span style="color:#E1E4E8">          params.</span><span style="color:#B392F0">append</span><span style="color:#E1E4E8">(filter.field, filter.value);</span></span>\n<span class="line"><span style="color:#E1E4E8">        }</span></span>\n<span class="line"><span style="color:#E1E4E8">      });</span></span>\n<span class="line"><span style="color:#E1E4E8">    }</span></span>\n<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> response</span><span style="color:#F97583"> =</span><span style="color:#F97583"> await</span><span style="color:#B392F0"> fetch</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`${</span><span style="color:#79B8FF">API_URL</span><span style="color:#9ECBFF">}/${</span><span style="color:#E1E4E8">resource</span><span style="color:#9ECBFF">}?${</span><span style="color:#E1E4E8">params</span><span style="color:#9ECBFF">.</span><span style="color:#B392F0">toString</span><span style="color:#9ECBFF">()</span><span style="color:#9ECBFF">}`</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#F97583">    if</span><span style="color:#E1E4E8"> (response.status </span><span style="color:#F97583">&#x3C;</span><span style="color:#79B8FF"> 200</span><span style="color:#F97583"> ||</span><span style="color:#E1E4E8"> response.status </span><span style="color:#F97583">></span><span style="color:#79B8FF"> 299</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">throw</span><span style="color:#E1E4E8"> response;</span></span>\n<span class="line"><span style="color:#F97583">    const</span><span style="color:#79B8FF"> data</span><span style="color:#F97583"> =</span><span style="color:#F97583"> await</span><span style="color:#E1E4E8"> response.</span><span style="color:#B392F0">json</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#F97583">    return</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">      data,</span></span>\n<span class="line"><span style="color:#E1E4E8">      total: </span><span style="color:#79B8FF">0</span><span style="color:#E1E4E8">, </span><span style="color:#6A737D">// We\'ll cover this in the next steps.</span></span>\n<span class="line"><span style="color:#E1E4E8">    };</span></span>\n<span class="line"><span style="color:#E1E4E8">  },</span></span>\n<span class="line"></span></code></pre>\n<h4 id="uselist"><code>useList()</code><a class="anchor" href="#uselist"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h3 id="forms">Forms<a class="anchor" href="#forms"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="tables">Tables<a class="anchor" href="#tables"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={title:"Refine",topic:null,type:"D",tags:["React"],category:"Front-End Frameworks",DateStarted:"2024-06-19T00:00:00.000Z",DateModified:"2024-06-19T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,draft:!0,minutes:2,words:382},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/refine/refine.md",url=void 0;function rawContent(){return'# Refine\n## Init\n`npm create-refine-app`\n## Fake API\n[GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)](https://github.com/typicode/json-server)\n\n## Data Fetching\n`<Refine />` component accepts a [`dataProvider`](https://refine.dev/docs/core/refine-component/#dataprovider-) prop which is used to handle all the data fetching and mutation operations with a simple interface. While Refine supports many data providers out of the box, for sake of this tutorial, we\'ll be creating our own data provider and connecting it to a [fake REST API](https://api.fake-rest.refine.dev/).\n```jsx\nimport { Refine } from "@refinedev/core";\nimport { dataProvider } from "./providers/data-provider";\nimport { ShowProduct } from "./pages/products/show";\nexport default function App(): JSX.Element {\n  return (\n    <Refine dataProvider={dataProvider}>\n        <ShowProduct />\n    </Refine>\n  );\n}\n```\n\n### Show data\n#### `getOne()`\nin file `data-provider`, add `getOne` method, to fetch from an api\n#### `useOne()`\n`useOne()` to get data\n```jsx\nimport { useOne } from "@refinedev/core";\nexport const ShowProduct = () => {\n    const { data, isLoading } = useOne({ resource: "products", id: 123 });\n\n    if (isLoading) {\n        return <div>Loading...</div>;\n    }\n    return <div>Product name: {data?.data.name}</div>;\n};\n```\n\n### Update/ Edit data\n#### `update`\nin file `data-provider`, add: \n```jsx\nupdate: async ({ resource, id, variables }) => {\n    const response = await fetch(`${API_URL}/${resource}/${id}`, {\n      method: "PATCH",\n      body: JSON.stringify(variables),\n      headers: {\n        "Content-Type": "application/json",\n      },\n    });\n    if (response.status < 200 || response.status > 299) throw response;\n    const data = await response.json();\n    return { data };\n  },\n```\n#### `useUpdate()`\nwhen we update the price using `useUpdate`, the `useOne` hook we called before is automatically invalidated\n```jsx\nconst { mutate, isLoading: isUpdating } = useUpdate();\n  if (isLoading) {\n    return <div>Loading...</div>;\n  }\n  const updatePrice = async () => {\n    await mutate({\n      resource: "products",\n      id: 123,\n      values: {\n        price: Math.floor(Math.random() * 100),\n      },\n    });\n  };\n```\n\n### Fetch List Records\nfetch a list of records from our API\npagination, sorting and filtering\n#### `getList()`\n```jsx\ngetList: async ({ resource, pagination, filters, sorters, meta }) => {\n    const params = new URLSearchParams();\n    if (pagination) {\n      params.append("_start", (pagination.current - 1) * pagination.pageSize);\n      params.append("_end", pagination.current * pagination.pageSize);\n    }\n    if (sorters && sorters.length > 0) {\n      params.append("_sort", sorters.map((sorter) => sorter.field).join(","));\n      params.append("_order", sorters.map((sorter) => sorter.order).join(","));\n    }\n    if (filters && filters.length > 0) {\n      filters.forEach((filter) => {\n        if ("field" in filter && filter.operator === "eq") {\n          // Our fake API supports "eq" operator by simply appending the field name and value to the query string.\n          params.append(filter.field, filter.value);\n        }\n      });\n    }\n    const response = await fetch(`${API_URL}/${resource}?${params.toString()}`);\n    if (response.status < 200 || response.status > 299) throw response;\n    const data = await response.json();\n    return {\n      data,\n      total: 0, // We\'ll cover this in the next steps.\n    };\n  },\n```\n#### `useList()`\n### Forms\n### Tables\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"refine",text:"Refine#"},{depth:2,slug:"init",text:"Init#"},{depth:2,slug:"fake-api",text:"Fake API#"},{depth:2,slug:"data-fetching",text:"Data Fetching#"},{depth:3,slug:"show-data",text:"Show data#"},{depth:4,slug:"getone",text:"getOne()#"},{depth:4,slug:"useone",text:"useOne()#"},{depth:3,slug:"update-edit-data",text:"Update/ Edit data#"},{depth:4,slug:"update",text:"update#"},{depth:4,slug:"useupdate",text:"useUpdate()#"},{depth:3,slug:"fetch-list-records",text:"Fetch List Records#"},{depth:4,slug:"getlist",text:"getList()#"},{depth:4,slug:"uselist",text:"useList()#"},{depth:3,slug:"forms",text:"Forms#"},{depth:3,slug:"tables",text:"Tables#"}]}const Content=createComponent(((s,n,a)=>{const{layout:e,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),refine=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,refine,slug};