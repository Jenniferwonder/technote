import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/data-fetching/suspense.md",collection="posts",slug="front-end-frameworks/react/data-fetching/suspense",body="\n# React Suspense\n\n> [codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11](https://codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11) > [in Depth-react-suspense-will-be-a-game-changer](https://angularindepth.com/posts/1044/why-react-suspense-will-be-a-game-changer) > [GitHub - julianburr/talk-suspense-game-changer: Demo app for my talk at ReactJS Brisbane](https://github.com/julianburr/talk-suspense-game-changer)\n\n让你可以“等待”目标代码加载，并且可以直接指定一个加载的界面（像是个 spinner）\n\n```\nconst ProfilePage = React.lazy(() => import('./ProfilePage')); // 懒加载\n\n// 在 ProfilePage 组件处于加载阶段时显示一个 spinner\n<Suspense fallback={<Spinner />}>\n  <ProfilePage />\n</Suspense>\n```\n\n以下注意 :\n\n##### 想要用 Suspense 成为组件读取异步数据的主要方式有以下问题:\n\n`它不是数据获取的一种实现。`它并不假定你使用 GraphQL，REST，或者任何其他特定的数据格式、库、数据传输方式、协议。\n\n`它不是一个可以直接用于数据获取的客户端。`你不能用 Suspense 来“替代” `fetch`  或者 Relay。不过你可以使用集成 Suspense 的库（比如说，[新的 Relay API](https://relay.dev/docs/en/experimental/api-reference)）。\n\n`它不使数据获取与视图层代码耦合。`它协助编排加载状态在 UI 中的显示，但它并不将你的网络逻辑捆绑到 React 组件。\n\n##### Suspense 到底有什么用呢\n\n`它能让数据获取库与 React 紧密整合。`如果一个数据请求库实现了对 Suspense 的支持，那么，在 React 中使用 Suspense 将会是自然不过的事。\n\n`它能让你有针对性地安排加载状态的展示。`虽然它不干涉数据怎样获取，但它可以让你对应用的视图加载顺序有更大的控制权。\n\n`它能够消除 race conditions。`即便是用上  `await`，异步代码还是很容易出错。相比之下，Suspense 更给人同步读取数据的感觉 —— 假定数据已经加载完毕。\n\n扩展 : `react-cache`与 Suspense 使用\n\n## Questions\n\n### [你有使用过 suspense 组件吗？它帮我们解决了什么问题？](https://github.com/haizlin/fe-interview/issues/896)\n\n\n\n\n\n",data={title:"React Suspense",DateStarted:new Date(17095968e5),tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/data-fetching/suspense.md",rawData:void 0},html='<h1 id="react-suspense">React Suspense<a class="anchor" href="#react-suspense"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<blockquote>\n<p><a href="https://codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11">codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11</a> > <a href="https://angularindepth.com/posts/1044/why-react-suspense-will-be-a-game-changer">in Depth-react-suspense-will-be-a-game-changer</a> > <a href="https://github.com/julianburr/talk-suspense-game-changer">GitHub - julianburr/talk-suspense-game-changer: Demo app for my talk at ReactJS Brisbane</a></p>\n</blockquote>\n<p>让你可以“等待”目标代码加载，并且可以直接指定一个加载的界面（像是个 spinner）</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span>const ProfilePage = React.lazy(() => import(\'./ProfilePage\')); // 懒加载</span></span>\n<span class="line"><span></span></span>\n<span class="line"><span>// 在 ProfilePage 组件处于加载阶段时显示一个 spinner</span></span>\n<span class="line"><span>&#x3C;Suspense fallback={&#x3C;Spinner />}></span></span>\n<span class="line"><span>  &#x3C;ProfilePage /></span></span>\n<span class="line"><span>&#x3C;/Suspense></span></span>\n<span class="line"><span></span></span></code></pre>\n<p>以下注意 :</p>\n<h5 id="想要用-suspense-成为组件读取异步数据的主要方式有以下问题">想要用 Suspense 成为组件读取异步数据的主要方式有以下问题:<a class="anchor" href="#想要用-suspense-成为组件读取异步数据的主要方式有以下问题"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<p><code>它不是数据获取的一种实现。</code>它并不假定你使用 GraphQL，REST，或者任何其他特定的数据格式、库、数据传输方式、协议。</p>\n<p><code>它不是一个可以直接用于数据获取的客户端。</code>你不能用 Suspense 来“替代” <code>fetch</code>  或者 Relay。不过你可以使用集成 Suspense 的库（比如说，<a href="https://relay.dev/docs/en/experimental/api-reference">新的 Relay API</a>）。</p>\n<p><code>它不使数据获取与视图层代码耦合。</code>它协助编排加载状态在 UI 中的显示，但它并不将你的网络逻辑捆绑到 React 组件。</p>\n<h5 id="suspense-到底有什么用呢">Suspense 到底有什么用呢<a class="anchor" href="#suspense-到底有什么用呢"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h5>\n<p><code>它能让数据获取库与 React 紧密整合。</code>如果一个数据请求库实现了对 Suspense 的支持，那么，在 React 中使用 Suspense 将会是自然不过的事。</p>\n<p><code>它能让你有针对性地安排加载状态的展示。</code>虽然它不干涉数据怎样获取，但它可以让你对应用的视图加载顺序有更大的控制权。</p>\n<p><code>它能够消除 race conditions。</code>即便是用上  <code>await</code>，异步代码还是很容易出错。相比之下，Suspense 更给人同步读取数据的感觉 —— 假定数据已经加载完毕。</p>\n<p>扩展 : <code>react-cache</code>与 Suspense 使用</p>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="你有使用过-suspense-组件吗它帮我们解决了什么问题"><a href="https://github.com/haizlin/fe-interview/issues/896">你有使用过 suspense 组件吗？它帮我们解决了什么问题？</a><a class="anchor" href="#你有使用过-suspense-组件吗它帮我们解决了什么问题"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={title:"React Suspense",topic:["Data-Fetching"],type:"D",tags:["React"],DateStarted:"2024-03-05T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["React Suspense"],"linter-yaml-title-alias":"React Suspense",category:"Front-End Frameworks",minutes:2,words:439},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/data-fetching/suspense.md",url=void 0;function rawContent(){return"\n# React Suspense\n\n> [codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11](https://codesandbox.io/p/sandbox/frosty-hermann-bztrp?file=%2Fsrc%2Findex.js%3A10%2C11) > [in Depth-react-suspense-will-be-a-game-changer](https://angularindepth.com/posts/1044/why-react-suspense-will-be-a-game-changer) > [GitHub - julianburr/talk-suspense-game-changer: Demo app for my talk at ReactJS Brisbane](https://github.com/julianburr/talk-suspense-game-changer)\n\n让你可以“等待”目标代码加载，并且可以直接指定一个加载的界面（像是个 spinner）\n\n```\nconst ProfilePage = React.lazy(() => import('./ProfilePage')); // 懒加载\n\n// 在 ProfilePage 组件处于加载阶段时显示一个 spinner\n<Suspense fallback={<Spinner />}>\n  <ProfilePage />\n</Suspense>\n```\n\n以下注意 :\n\n##### 想要用 Suspense 成为组件读取异步数据的主要方式有以下问题:\n\n`它不是数据获取的一种实现。`它并不假定你使用 GraphQL，REST，或者任何其他特定的数据格式、库、数据传输方式、协议。\n\n`它不是一个可以直接用于数据获取的客户端。`你不能用 Suspense 来“替代” `fetch`  或者 Relay。不过你可以使用集成 Suspense 的库（比如说，[新的 Relay API](https://relay.dev/docs/en/experimental/api-reference)）。\n\n`它不使数据获取与视图层代码耦合。`它协助编排加载状态在 UI 中的显示，但它并不将你的网络逻辑捆绑到 React 组件。\n\n##### Suspense 到底有什么用呢\n\n`它能让数据获取库与 React 紧密整合。`如果一个数据请求库实现了对 Suspense 的支持，那么，在 React 中使用 Suspense 将会是自然不过的事。\n\n`它能让你有针对性地安排加载状态的展示。`虽然它不干涉数据怎样获取，但它可以让你对应用的视图加载顺序有更大的控制权。\n\n`它能够消除 race conditions。`即便是用上  `await`，异步代码还是很容易出错。相比之下，Suspense 更给人同步读取数据的感觉 —— 假定数据已经加载完毕。\n\n扩展 : `react-cache`与 Suspense 使用\n\n## Questions\n\n### [你有使用过 suspense 组件吗？它帮我们解决了什么问题？](https://github.com/haizlin/fe-interview/issues/896)\n\n\n\n\n\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"react-suspense",text:"React Suspense#"},{depth:5,slug:"想要用-suspense-成为组件读取异步数据的主要方式有以下问题",text:"想要用 Suspense 成为组件读取异步数据的主要方式有以下问题:#"},{depth:5,slug:"suspense-到底有什么用呢",text:"Suspense 到底有什么用呢#"},{depth:2,slug:"questions",text:"Questions#"},{depth:3,slug:"你有使用过-suspense-组件吗它帮我们解决了什么问题",text:"你有使用过 suspense 组件吗？它帮我们解决了什么问题？#"}]}const Content=createComponent(((e,n,s)=>{const{layout:a,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),suspense=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,slug,suspense};