import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/hooks/useRef.md",collection="posts",slug="front-end-frameworks/react/hooks/useref",body="\n# useRef\n\n> [useRef – React](https://react.dev/reference/react/useRef)\n\n### Why\n\nWhen you want a component to “remember” some information, but you don't want that information to [trigger new renders](https://react.dev/learn/render-and-commit), you can use a _ref_  \nLike state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!  \nRefs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose\n\n### ❌ Pitfall\n\n🚩 Don't write a ref during rendering  \n🚩 Don't read a ref during rendering  \n🚩 **Do not overuse refs.** You should only use refs for _imperative_ behaviors that you can't express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on  \n✅ You can read or write refs **from event handlers or effects instead**.\n\n### Basics\n\n`const ref = useRef(initialValue)`\n\n#### Access Ref's Current Value\n\n`ref.current`  \nThis value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn't track. (This is what makes it an “escape hatch” from React's one-way data flow)\n\n#### Parameter\n\n`initialValue`: The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render\n\n##### Avoid recreating the ref contents\n\n```js\n// ❌ Don't do this\n// the result of `new VideoPlayer()` is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating expensive objects.\nfunction Video() {\n\tconst playerRef = useRef(new VideoPlayer());\n}\n// ✅ Do this instead\nfunction Video() {\n\tconst playerRef = useRef(null);\n\tif (playerRef.current === null) {\n\t\tplayerRef.current = new VideoPlayer();\n}\n```\n\n#### Returns\n\n`useRef` returns an object with a single property:\n\n- `current`: Initially, it’s set to the `initialValue` you have passed. You can later set it to something else. If you pass the ref object to React as a `ref` attribute to a JSX node, React will set its `current` property.\n\n### Manipulate DOM with refs\n\n1. declare a ref object with an initial value of `null`:\n   - `const inputRef = useRef(null);`\n2. pass your ref object as the `ref` attribute to the JSX of the DOM node you want to manipulate\n   - `return <input ref={inputRef} />;`\n3. React will set the `current` property of your ref object to that DOM node\n\n```js\nfunction handleClick() {\n\tinputRef.current.focus();\n}\n```\n\n### `forwardRef`\n\n#### Exposing a ref to your own component\n\nuse a combination of `useRef` to hold the input and [`forwardRef`](https://react.dev/reference/react/forwardRef) to expose it to the parent component\n\n```jsx\nconst MyInput = forwardRef((props, ref) => {\n\treturn <input {...props} ref={ref} />;\n});\n<MyInput ref={inputRef} />;\n```\n\nIn design systems, it is a common pattern for low-level components like buttons, inputs, and so on, **to forward their refs to their DOM nodes**. On the other hand, high-level components like forms, lists, or page sections usually won't expose their DOM nodes to avoid accidental dependencies on the DOM structure\n\n## Questions\n\n#### [请说说什么是 useRef？](https://github.com/haizlin/fe-interview/issues/706)\n\n#### [为什么建议不要过度使用 Refs？](https://github.com/haizlin/fe-interview/issues/753)\n\n#### [React 中 refs 的作用是什么？有哪些应用场景？](https://github.com/haizlin/fe-interview/issues/633)\n\n#### [什么是 React.forwardRef？它有什么作用？](https://github.com/haizlin/fe-interview/issues/878)\n\n#### [使用 React 的 memo 和 forwardRef 包装的组件为什么提示 children 类型不对？](https://github.com/haizlin/fe-interview/issues/844)\n",data={title:"useRef",DateStarted:new Date(1712016e6),tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/hooks/useRef.md",rawData:void 0},html='<h1 id="useref">useRef<a class="anchor" href="#useref"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<blockquote>\n<p><a href="https://react.dev/reference/react/useRef">useRef – React</a></p>\n</blockquote>\n<h3 id="why">Why<a class="anchor" href="#why"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>When you want a component to “remember” some information, but you don’t want that information to <a href="https://react.dev/learn/render-and-commit">trigger new renders</a>, you can use a <em>ref</em><br>\nLike state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!<br>\nRefs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose</p>\n<h3 id="-pitfall">❌ Pitfall<a class="anchor" href="#-pitfall"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>🚩 Don’t write a ref during rendering<br>\n🚩 Don’t read a ref during rendering<br>\n🚩 <strong>Do not overuse refs.</strong> You should only use refs for <em>imperative</em> behaviors that you can’t express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on<br>\n✅ You can read or write refs <strong>from event handlers or effects instead</strong>.</p>\n<h3 id="basics">Basics<a class="anchor" href="#basics"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p><code>const ref = useRef(initialValue)</code></p>\n<h4 id="access-refs-current-value">Access Ref’s Current Value<a class="anchor" href="#access-refs-current-value"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>ref.current</code><br>\nThis value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn’t track. (This is what makes it an “escape hatch” from React’s one-way data flow)</p>\n<h4 id="parameter">Parameter<a class="anchor" href="#parameter"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>initialValue</code>: The value you want the ref object’s <code>current</code> property to be initially. It can be a value of any type. This argument is ignored after the initial render</p>\n<h5 id="avoid-recreating-the-ref-contents">Avoid recreating the ref contents<a class="anchor" href="#avoid-recreating-the-ref-contents"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">// ❌ Don\'t do this</span></span>\n<span class="line"><span style="color:#6A737D">// the result of `new VideoPlayer()` is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating expensive objects.</span></span>\n<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> Video</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#F97583">\tconst</span><span style="color:#79B8FF"> playerRef</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> useRef</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">new</span><span style="color:#B392F0"> VideoPlayer</span><span style="color:#E1E4E8">());</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#6A737D">// ✅ Do this instead</span></span>\n<span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> Video</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#F97583">\tconst</span><span style="color:#79B8FF"> playerRef</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> useRef</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">null</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#F97583">\tif</span><span style="color:#E1E4E8"> (playerRef.current </span><span style="color:#F97583">===</span><span style="color:#79B8FF"> null</span><span style="color:#E1E4E8">) {</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\tplayerRef.current </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> VideoPlayer</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h4 id="returns">Returns<a class="anchor" href="#returns"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>useRef</code> returns an object with a single property:</p>\n<ul>\n<li><code>current</code>: Initially, it’s set to the <code>initialValue</code> you have passed. You can later set it to something else. If you pass the ref object to React as a <code>ref</code> attribute to a JSX node, React will set its <code>current</code> property.</li>\n</ul>\n<h3 id="manipulate-dom-with-refs">Manipulate DOM with refs<a class="anchor" href="#manipulate-dom-with-refs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ol>\n<li>declare a ref object with an initial value of <code>null</code>:\n<ul>\n<li><code>const inputRef = useRef(null);</code></li>\n</ul>\n</li>\n<li>pass your ref object as the <code>ref</code> attribute to the JSX of the DOM node you want to manipulate\n<ul>\n<li><code>return &#x3C;input ref={inputRef} />;</code></li>\n</ul>\n</li>\n<li>React will set the <code>current</code> property of your ref object to that DOM node</li>\n</ol>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">function</span><span style="color:#B392F0"> handleClick</span><span style="color:#E1E4E8">() {</span></span>\n<span class="line"><span style="color:#E1E4E8">\tinputRef.current.</span><span style="color:#B392F0">focus</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<h3 id="forwardref"><code>forwardRef</code><a class="anchor" href="#forwardref"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="exposing-a-ref-to-your-own-component">Exposing a ref to your own component<a class="anchor" href="#exposing-a-ref-to-your-own-component"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>use a combination of <code>useRef</code> to hold the input and <a href="https://react.dev/reference/react/forwardRef"><code>forwardRef</code></a> to expose it to the parent component</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">const</span><span style="color:#79B8FF"> MyInput</span><span style="color:#F97583"> =</span><span style="color:#B392F0"> forwardRef</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">props</span><span style="color:#E1E4E8">, </span><span style="color:#FFAB70">ref</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#F97583">\treturn</span><span style="color:#E1E4E8"> &#x3C;</span><span style="color:#85E89D">input</span><span style="color:#E1E4E8"> {</span><span style="color:#F97583">...</span><span style="color:#E1E4E8">props} </span><span style="color:#B392F0">ref</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{ref} />;</span></span>\n<span class="line"><span style="color:#E1E4E8">});</span></span>\n<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#79B8FF">MyInput</span><span style="color:#B392F0"> ref</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{inputRef} />;</span></span>\n<span class="line"></span></code></pre>\n<p>In design systems, it is a common pattern for low-level components like buttons, inputs, and so on, <strong>to forward their refs to their DOM nodes</strong>. On the other hand, high-level components like forms, lists, or page sections usually won’t expose their DOM nodes to avoid accidental dependencies on the DOM structure</p>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="请说说什么是-useref"><a href="https://github.com/haizlin/fe-interview/issues/706">请说说什么是 useRef？</a><a class="anchor" href="#请说说什么是-useref"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="为什么建议不要过度使用-refs"><a href="https://github.com/haizlin/fe-interview/issues/753">为什么建议不要过度使用 Refs？</a><a class="anchor" href="#为什么建议不要过度使用-refs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中-refs-的作用是什么有哪些应用场景"><a href="https://github.com/haizlin/fe-interview/issues/633">React 中 refs 的作用是什么？有哪些应用场景？</a><a class="anchor" href="#react-中-refs-的作用是什么有哪些应用场景"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="什么是-reactforwardref它有什么作用"><a href="https://github.com/haizlin/fe-interview/issues/878">什么是 React.forwardRef？它有什么作用？</a><a class="anchor" href="#什么是-reactforwardref它有什么作用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="使用-react-的-memo-和-forwardref-包装的组件为什么提示-children-类型不对"><a href="https://github.com/haizlin/fe-interview/issues/844">使用 React 的 memo 和 forwardRef 包装的组件为什么提示 children 类型不对？</a><a class="anchor" href="#使用-react-的-memo-和-forwardref-包装的组件为什么提示-children-类型不对"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>',frontmatter={topic:["Hooks"],type:"D",tags:["React"],DateStarted:"2024-04-02T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,title:"useRef",category:"Front-End Frameworks",minutes:3,words:525},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/hooks/useRef.md",url=void 0;function rawContent(){return"\n# useRef\n\n> [useRef – React](https://react.dev/reference/react/useRef)\n\n### Why\n\nWhen you want a component to “remember” some information, but you don't want that information to [trigger new renders](https://react.dev/learn/render-and-commit), you can use a _ref_  \nLike state, refs are retained by React between re-renders. However, setting state re-renders a component. Changing a ref does not!  \nRefs are an escape hatch. You should only use them when you have to “step outside React”. Common examples of this include managing focus, scroll position, or calling browser APIs that React does not expose\n\n### ❌ Pitfall\n\n🚩 Don't write a ref during rendering  \n🚩 Don't read a ref during rendering  \n🚩 **Do not overuse refs.** You should only use refs for _imperative_ behaviors that you can't express as props: for example, scrolling to a node, focusing a node, triggering an animation, selecting text, and so on  \n✅ You can read or write refs **from event handlers or effects instead**.\n\n### Basics\n\n`const ref = useRef(initialValue)`\n\n#### Access Ref's Current Value\n\n`ref.current`  \nThis value is intentionally mutable, meaning you can both read and write to it. It’s like a secret pocket of your component that React doesn't track. (This is what makes it an “escape hatch” from React's one-way data flow)\n\n#### Parameter\n\n`initialValue`: The value you want the ref object’s `current` property to be initially. It can be a value of any type. This argument is ignored after the initial render\n\n##### Avoid recreating the ref contents\n\n```js\n// ❌ Don't do this\n// the result of `new VideoPlayer()` is only used for the initial render, you’re still calling this function on every render. This can be wasteful if it’s creating expensive objects.\nfunction Video() {\n\tconst playerRef = useRef(new VideoPlayer());\n}\n// ✅ Do this instead\nfunction Video() {\n\tconst playerRef = useRef(null);\n\tif (playerRef.current === null) {\n\t\tplayerRef.current = new VideoPlayer();\n}\n```\n\n#### Returns\n\n`useRef` returns an object with a single property:\n\n- `current`: Initially, it’s set to the `initialValue` you have passed. You can later set it to something else. If you pass the ref object to React as a `ref` attribute to a JSX node, React will set its `current` property.\n\n### Manipulate DOM with refs\n\n1. declare a ref object with an initial value of `null`:\n   - `const inputRef = useRef(null);`\n2. pass your ref object as the `ref` attribute to the JSX of the DOM node you want to manipulate\n   - `return <input ref={inputRef} />;`\n3. React will set the `current` property of your ref object to that DOM node\n\n```js\nfunction handleClick() {\n\tinputRef.current.focus();\n}\n```\n\n### `forwardRef`\n\n#### Exposing a ref to your own component\n\nuse a combination of `useRef` to hold the input and [`forwardRef`](https://react.dev/reference/react/forwardRef) to expose it to the parent component\n\n```jsx\nconst MyInput = forwardRef((props, ref) => {\n\treturn <input {...props} ref={ref} />;\n});\n<MyInput ref={inputRef} />;\n```\n\nIn design systems, it is a common pattern for low-level components like buttons, inputs, and so on, **to forward their refs to their DOM nodes**. On the other hand, high-level components like forms, lists, or page sections usually won't expose their DOM nodes to avoid accidental dependencies on the DOM structure\n\n## Questions\n\n#### [请说说什么是 useRef？](https://github.com/haizlin/fe-interview/issues/706)\n\n#### [为什么建议不要过度使用 Refs？](https://github.com/haizlin/fe-interview/issues/753)\n\n#### [React 中 refs 的作用是什么？有哪些应用场景？](https://github.com/haizlin/fe-interview/issues/633)\n\n#### [什么是 React.forwardRef？它有什么作用？](https://github.com/haizlin/fe-interview/issues/878)\n\n#### [使用 React 的 memo 和 forwardRef 包装的组件为什么提示 children 类型不对？](https://github.com/haizlin/fe-interview/issues/844)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"useref",text:"useRef#"},{depth:3,slug:"why",text:"Why#"},{depth:3,slug:"-pitfall",text:"❌ Pitfall#"},{depth:3,slug:"basics",text:"Basics#"},{depth:4,slug:"access-refs-current-value",text:"Access Ref’s Current Value#"},{depth:4,slug:"parameter",text:"Parameter#"},{depth:5,slug:"avoid-recreating-the-ref-contents",text:"Avoid recreating the ref contents#"},{depth:4,slug:"returns",text:"Returns#"},{depth:3,slug:"manipulate-dom-with-refs",text:"Manipulate DOM with refs#"},{depth:3,slug:"forwardref",text:"forwardRef#"},{depth:4,slug:"exposing-a-ref-to-your-own-component",text:"Exposing a ref to your own component#"},{depth:2,slug:"questions",text:"Questions#"},{depth:4,slug:"请说说什么是-useref",text:"请说说什么是 useRef？#"},{depth:4,slug:"为什么建议不要过度使用-refs",text:"为什么建议不要过度使用 Refs？#"},{depth:4,slug:"react-中-refs-的作用是什么有哪些应用场景",text:"React 中 refs 的作用是什么？有哪些应用场景？#"},{depth:4,slug:"什么是-reactforwardref它有什么作用",text:"什么是 React.forwardRef？它有什么作用？#"},{depth:4,slug:"使用-react-的-memo-和-forwardref-包装的组件为什么提示-children-类型不对",text:"使用 React 的 memo 和 forwardRef 包装的组件为什么提示 children 类型不对？#"}]}const Content=createComponent(((e,n,t)=>{const{layout:a,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),useRef=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,slug,useRef};