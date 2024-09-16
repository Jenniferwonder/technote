import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/react-basics/react-server-component.md",collection="posts",slug="front-end-frameworks/react/react-basics/react-server-component",body="\n# React Server Components\n\n## ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-O-React-Server-Components.png)\n\n## Server and Client Environments\n\n### Client\n\n- browser on a user’s device that sends a request to a server for your application code\n- It then turns the response it receives from the server into an interface the user can interact with\n\n### Server\n\n- the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.\n\n### Each environment has its own set of capabilities and constraints\n\n- by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance\n- But to make your UI interactive, you need to update the DOM on the client.\n\n### Therefore, the code you write for the server and the client is not always the same\n\n- Certain operations (e.g. data fetching or managing user state) are better suited for one environment over the other.\n\n## Network Boundary\n\n### a conceptual line that separates the different environments\n\n### In React, you choose where to place the server-client network boundary in your component tree.\n\n### It's good practice to move your network boundary close to the _leaves_ of your component tree\n\n- can improve your application's performance by reducing the amount of code sent to the client.\n\n## 📌[NextJS](React-Full-Stack/Next.js/O-NextJS)\n\n### uses React Server Components by default\n\n- a new feature that allows React to render on the server to improve performance\n- Server Components don't support `useState`\n  - you'll need to use a Client Component instead.\n  - fix this by moving the interactive \"Like\" button to a Client Component\n\n## Questions\n\n#### [有用过 React 的服务端渲染吗？怎么做的？](https://github.com/haizlin/fe-interview/issues/665)\n",data={title:"React Server Components",DateStarted:new Date(17054496e5),tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/react-basics/react-server-component.md",rawData:void 0},html='<h1 id="react-server-components">React Server Components<a class="anchor" href="#react-server-components"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id=""><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-O-React-Server-Components.png" alt=""></h2>\n<h2 id="server-and-client-environments">Server and Client Environments<a class="anchor" href="#server-and-client-environments"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="client">Client<a class="anchor" href="#client"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>browser on a user’s device that sends a request to a server for your application code</li>\n<li>It then turns the response it receives from the server into an interface the user can interact with</li>\n</ul>\n<h3 id="server">Server<a class="anchor" href="#server"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.</li>\n</ul>\n<h3 id="each-environment-has-its-own-set-of-capabilities-and-constraints">Each environment has its own set of capabilities and constraints<a class="anchor" href="#each-environment-has-its-own-set-of-capabilities-and-constraints"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application’s performance</li>\n<li>But to make your UI interactive, you need to update the DOM on the client.</li>\n</ul>\n<h3 id="therefore-the-code-you-write-for-the-server-and-the-client-is-not-always-the-same">Therefore, the code you write for the server and the client is not always the same<a class="anchor" href="#therefore-the-code-you-write-for-the-server-and-the-client-is-not-always-the-same"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>Certain operations (e.g. data fetching or managing user state) are better suited for one environment over the other.</li>\n</ul>\n<h2 id="network-boundary">Network Boundary<a class="anchor" href="#network-boundary"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="a-conceptual-line-that-separates-the-different-environments">a conceptual line that separates the different environments<a class="anchor" href="#a-conceptual-line-that-separates-the-different-environments"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="in-react-you-choose-where-to-place-the-server-client-network-boundary-in-your-component-tree">In React, you choose where to place the server-client network boundary in your component tree.<a class="anchor" href="#in-react-you-choose-where-to-place-the-server-client-network-boundary-in-your-component-tree"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="its-good-practice-to-move-your-network-boundary-close-to-the-leaves-of-your-component-tree">It’s good practice to move your network boundary close to the <em>leaves</em> of your component tree<a class="anchor" href="#its-good-practice-to-move-your-network-boundary-close-to-the-leaves-of-your-component-tree"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>can improve your application’s performance by reducing the amount of code sent to the client.</li>\n</ul>\n<h2 id="nextjs">📌<a href="React-Full-Stack/Next.js/O-NextJS">NextJS</a><a class="anchor" href="#nextjs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="uses-react-server-components-by-default">uses React Server Components by default<a class="anchor" href="#uses-react-server-components-by-default"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>a new feature that allows React to render on the server to improve performance</li>\n<li>Server Components don’t support <code>useState</code>\n<ul>\n<li>you’ll need to use a Client Component instead.</li>\n<li>fix this by moving the interactive “Like” button to a Client Component</li>\n</ul>\n</li>\n</ul>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="有用过-react-的服务端渲染吗怎么做的"><a href="https://github.com/haizlin/fe-interview/issues/665">有用过 React 的服务端渲染吗？怎么做的？</a><a class="anchor" href="#有用过-react-的服务端渲染吗怎么做的"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>',frontmatter={topic:["Component-Basics"],Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"React Server Components",type:"D",tags:["React"],DateStarted:"2024-01-17T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,aliases:["React Server Components"],"linter-yaml-title-alias":"React Server Components",category:"Front-End Frameworks",minutes:1,words:248},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/react-basics/react-server-component.md",url=void 0;function rawContent(){return"\n# React Server Components\n\n## ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-O-React-Server-Components.png)\n\n## Server and Client Environments\n\n### Client\n\n- browser on a user’s device that sends a request to a server for your application code\n- It then turns the response it receives from the server into an interface the user can interact with\n\n### Server\n\n- the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.\n\n### Each environment has its own set of capabilities and constraints\n\n- by moving rendering and data fetching to the server, you can reduce the amount of code sent to the client, which can improve your application's performance\n- But to make your UI interactive, you need to update the DOM on the client.\n\n### Therefore, the code you write for the server and the client is not always the same\n\n- Certain operations (e.g. data fetching or managing user state) are better suited for one environment over the other.\n\n## Network Boundary\n\n### a conceptual line that separates the different environments\n\n### In React, you choose where to place the server-client network boundary in your component tree.\n\n### It's good practice to move your network boundary close to the _leaves_ of your component tree\n\n- can improve your application's performance by reducing the amount of code sent to the client.\n\n## 📌[NextJS](React-Full-Stack/Next.js/O-NextJS)\n\n### uses React Server Components by default\n\n- a new feature that allows React to render on the server to improve performance\n- Server Components don't support `useState`\n  - you'll need to use a Client Component instead.\n  - fix this by moving the interactive \"Like\" button to a Client Component\n\n## Questions\n\n#### [有用过 React 的服务端渲染吗？怎么做的？](https://github.com/haizlin/fe-interview/issues/665)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"react-server-components",text:"React Server Components#"},{depth:2,slug:"",text:""},{depth:2,slug:"server-and-client-environments",text:"Server and Client Environments#"},{depth:3,slug:"client",text:"Client#"},{depth:3,slug:"server",text:"Server#"},{depth:3,slug:"each-environment-has-its-own-set-of-capabilities-and-constraints",text:"Each environment has its own set of capabilities and constraints#"},{depth:3,slug:"therefore-the-code-you-write-for-the-server-and-the-client-is-not-always-the-same",text:"Therefore, the code you write for the server and the client is not always the same#"},{depth:2,slug:"network-boundary",text:"Network Boundary#"},{depth:3,slug:"a-conceptual-line-that-separates-the-different-environments",text:"a conceptual line that separates the different environments#"},{depth:3,slug:"in-react-you-choose-where-to-place-the-server-client-network-boundary-in-your-component-tree",text:"In React, you choose where to place the server-client network boundary in your component tree.#"},{depth:3,slug:"its-good-practice-to-move-your-network-boundary-close-to-the-leaves-of-your-component-tree",text:"It’s good practice to move your network boundary close to the leaves of your component tree#"},{depth:2,slug:"nextjs",text:"📌NextJS#"},{depth:3,slug:"uses-react-server-components-by-default",text:"uses React Server Components by default#"},{depth:2,slug:"questions",text:"Questions#"},{depth:4,slug:"有用过-react-的服务端渲染吗怎么做的",text:"有用过 React 的服务端渲染吗？怎么做的？#"}]}const Content=createComponent(((e,t,n)=>{const{layout:o,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),reactServerComponent=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,reactServerComponent,slug};