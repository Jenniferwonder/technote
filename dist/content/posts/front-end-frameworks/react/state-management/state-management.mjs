import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726310608649/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/state-management/state-management.md",collection="posts",slug="front-end-frameworks/react/state-management/state-management",body='\n# React State Management\n## Reference\n- [in Depth-deep-dive-into-state-management-with-react-and-nextjs](https://angularindepth.com/posts/1487/deep-dive-into-state-management-with-react-and-nextjs)\n- [In-depth explanation of state and props update in React | by Max Koretskyi | React In Depth | Medium](https://medium.com/react-in-depth/in-depth-explanation-of-state-and-props-update-in-react-51ab94563311)\n- [The modern guide to React state patterns - LogRocket Blog](https://blog.logrocket.com/modern-guide-react-state-patterns/#usestate-hook) \n- [@chrlschn - Thoughts on React vs Vue vs Everything Else in 2023](https://chrlschn.dev/blog/2022/12/react-vs-vue-vs-everything-in-2023/)\n## State Basics\n- Purpose: \n\t- Add Interactivity/ Update Event\n- a component\'s memory\n\t- information that can change over time, usually triggered by user interaction\n- a snapshot: \n\t- React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.\n\t- 📌`04-3-Scores.jsx`\n\t  - replacing `setScore(score + 1)` with `setScore(s => s + 1)` fixes the “+3” button.\n\n### React State Structure\n>[Choosing the State Structure • React](https://beta.reactjs.org/learn/choosing-the-state-structure)\n\n- When to use a single vs multiple state variables\n- What to avoid when organizing state\n- How to fix common issues with the state structure\n### Preserve State\n>[Preserving and Resetting State • React](https://beta.reactjs.org/learn/preserving-and-resetting-state)\n\nSame component at the same position preserves state\n### Reset State\nDifferent components at the same position reset state  \nReset state with the same components\n- Op1. Rendering a component in different positions\n- Op2. Resetting state with a key\n### Updating objects in state\nState can hold any kind of JavaScript value, including objects. But avoid mutate the origin objects or arrays stored in state.  \nuse the `...` spread syntax to copy objects and arrays that you want to change.\n\n- 📌`04-4-Objects.jsx`\n  - ![04-objects-mock](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/04-objects-mock.png)\n- 📌`04-4-ImmerObjects.jsx`\n  - Use [Immer](https://github.com/immerjs/use-immer) instead of `useState` in this case to reduce repetitive code.\n  - npm install the following dependencies\n    - "immer": "1.7.3",\n    - "use-immer": "0.5.1"\n> Next: 05-react-to-input-with-state\n## Questions\n#### [在 React 中你是怎么进行状态管理的？](https://github.com/haizlin/fe-interview/issues/605)\n\n#### [如何更新组件的状态？](https://github.com/haizlin/fe-interview/issues/849)\n\n#### [在 React 中怎样改变组件状态，以及状态改变的过程是什么？](https://github.com/haizlin/fe-interview/issues/606)\n\n#### [React 为什么不要直接修改 state？如果想修改怎么做？](https://github.com/haizlin/fe-interview/issues/857)\n\n#### [componentWillUpdate 可以直接修改 state 的值吗？](https://github.com/haizlin/fe-interview/issues/951)\n\n#### [React 中 getInitialState 方法的作用是什么？](https://github.com/haizlin/fe-interview/issues/792)\n\n#### [什么时候使用状态管理器？](https://github.com/haizlin/fe-interview/issues/953)\n\n#### [状态管理器解决了什么问题？什么时候用状态管理器？](https://github.com/haizlin/fe-interview/issues/838)\n\n#### [状态管理器它精髓是什么？](https://github.com/haizlin/fe-interview/issues/837)\n\n#### [React 中如何监听 state 的变化？](https://github.com/haizlin/fe-interview/issues/861)\n\n#### [React 组件间共享数据方法有哪些？](https://github.com/haizlin/fe-interview/issues/672)\n\n#### [React 的状态提升是什么？使用场景有哪些？](https://github.com/haizlin/fe-interview/issues/671)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n',data={title:"React State Management",DateStarted:new Date(16763328e5),draft:!0,tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/state-management/state-management.md",rawData:void 0},html='<h1 id="react-state-management">React State Management<a class="anchor" href="#react-state-management"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://angularindepth.com/posts/1487/deep-dive-into-state-management-with-react-and-nextjs">in Depth-deep-dive-into-state-management-with-react-and-nextjs</a></li>\n<li><a href="https://medium.com/react-in-depth/in-depth-explanation-of-state-and-props-update-in-react-51ab94563311">In-depth explanation of state and props update in React | by Max Koretskyi | React In Depth | Medium</a></li>\n<li><a href="https://blog.logrocket.com/modern-guide-react-state-patterns/#usestate-hook">The modern guide to React state patterns - LogRocket Blog</a></li>\n<li><a href="https://chrlschn.dev/blog/2022/12/react-vs-vue-vs-everything-in-2023/">@chrlschn - Thoughts on React vs Vue vs Everything Else in 2023</a></li>\n</ul>\n<h2 id="state-basics">State Basics<a class="anchor" href="#state-basics"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Purpose:\n<ul>\n<li>Add Interactivity/ Update Event</li>\n</ul>\n</li>\n<li>a component’s memory\n<ul>\n<li>information that can change over time, usually triggered by user interaction</li>\n</ul>\n</li>\n<li>a snapshot:\n<ul>\n<li>React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.</li>\n<li>📌<code>04-3-Scores.jsx</code>\n<ul>\n<li>replacing <code>setScore(score + 1)</code> with <code>setScore(s => s + 1)</code> fixes the “+3” button.</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h3 id="react-state-structure">React State Structure<a class="anchor" href="#react-state-structure"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<blockquote>\n<p><a href="https://beta.reactjs.org/learn/choosing-the-state-structure">Choosing the State Structure • React</a></p>\n</blockquote>\n<ul>\n<li>When to use a single vs multiple state variables</li>\n<li>What to avoid when organizing state</li>\n<li>How to fix common issues with the state structure</li>\n</ul>\n<h3 id="preserve-state">Preserve State<a class="anchor" href="#preserve-state"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<blockquote>\n<p><a href="https://beta.reactjs.org/learn/preserving-and-resetting-state">Preserving and Resetting State • React</a></p>\n</blockquote>\n<p>Same component at the same position preserves state</p>\n<h3 id="reset-state">Reset State<a class="anchor" href="#reset-state"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Different components at the same position reset state<br>\nReset state with the same components</p>\n<ul>\n<li>Op1. Rendering a component in different positions</li>\n<li>Op2. Resetting state with a key</li>\n</ul>\n<h3 id="updating-objects-in-state">Updating objects in state<a class="anchor" href="#updating-objects-in-state"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>State can hold any kind of JavaScript value, including objects. But avoid mutate the origin objects or arrays stored in state.<br>\nuse the <code>...</code> spread syntax to copy objects and arrays that you want to change.</p>\n<ul>\n<li>📌<code>04-4-Objects.jsx</code>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/04-objects-mock.png" alt="04-objects-mock"></li>\n</ul>\n</li>\n<li>📌<code>04-4-ImmerObjects.jsx</code>\n<ul>\n<li>Use <a href="https://github.com/immerjs/use-immer">Immer</a> instead of <code>useState</code> in this case to reduce repetitive code.</li>\n<li>npm install the following dependencies\n<ul>\n<li>”immer”: “1.7.3”,</li>\n<li>“use-immer”: “0.5.1”</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>Next: 05-react-to-input-with-state</p>\n</blockquote>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="在-react-中你是怎么进行状态管理的"><a href="https://github.com/haizlin/fe-interview/issues/605">在 React 中你是怎么进行状态管理的？</a><a class="anchor" href="#在-react-中你是怎么进行状态管理的"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="如何更新组件的状态"><a href="https://github.com/haizlin/fe-interview/issues/849">如何更新组件的状态？</a><a class="anchor" href="#如何更新组件的状态"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="在-react-中怎样改变组件状态以及状态改变的过程是什么"><a href="https://github.com/haizlin/fe-interview/issues/606">在 React 中怎样改变组件状态，以及状态改变的过程是什么？</a><a class="anchor" href="#在-react-中怎样改变组件状态以及状态改变的过程是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-为什么不要直接修改-state如果想修改怎么做"><a href="https://github.com/haizlin/fe-interview/issues/857">React 为什么不要直接修改 state？如果想修改怎么做？</a><a class="anchor" href="#react-为什么不要直接修改-state如果想修改怎么做"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="componentwillupdate-可以直接修改-state-的值吗"><a href="https://github.com/haizlin/fe-interview/issues/951">componentWillUpdate 可以直接修改 state 的值吗？</a><a class="anchor" href="#componentwillupdate-可以直接修改-state-的值吗"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中-getinitialstate-方法的作用是什么"><a href="https://github.com/haizlin/fe-interview/issues/792">React 中 getInitialState 方法的作用是什么？</a><a class="anchor" href="#react-中-getinitialstate-方法的作用是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="什么时候使用状态管理器"><a href="https://github.com/haizlin/fe-interview/issues/953">什么时候使用状态管理器？</a><a class="anchor" href="#什么时候使用状态管理器"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="状态管理器解决了什么问题什么时候用状态管理器"><a href="https://github.com/haizlin/fe-interview/issues/838">状态管理器解决了什么问题？什么时候用状态管理器？</a><a class="anchor" href="#状态管理器解决了什么问题什么时候用状态管理器"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="状态管理器它精髓是什么"><a href="https://github.com/haizlin/fe-interview/issues/837">状态管理器它精髓是什么？</a><a class="anchor" href="#状态管理器它精髓是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中如何监听-state-的变化"><a href="https://github.com/haizlin/fe-interview/issues/861">React 中如何监听 state 的变化？</a><a class="anchor" href="#react-中如何监听-state-的变化"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-组件间共享数据方法有哪些"><a href="https://github.com/haizlin/fe-interview/issues/672">React 组件间共享数据方法有哪些？</a><a class="anchor" href="#react-组件间共享数据方法有哪些"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-的状态提升是什么使用场景有哪些"><a href="https://github.com/haizlin/fe-interview/issues/671">React 的状态提升是什么？使用场景有哪些？</a><a class="anchor" href="#react-的状态提升是什么使用场景有哪些"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>',frontmatter={title:"React State Management",tags:["React"],topic:["State"],Datereviewed:null,DateStarted:"2023-02-14T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",reviewed:null,status:null,difficulty:null,comment:null,type:"D",aliases:["React State Management","React State Management"],"linter-yaml-title-alias":"React State Management",category:"Front-End Frameworks",draft:!0,minutes:2,words:384},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/state-management/state-management.md",url=void 0;function rawContent(){return'\n# React State Management\n## Reference\n- [in Depth-deep-dive-into-state-management-with-react-and-nextjs](https://angularindepth.com/posts/1487/deep-dive-into-state-management-with-react-and-nextjs)\n- [In-depth explanation of state and props update in React | by Max Koretskyi | React In Depth | Medium](https://medium.com/react-in-depth/in-depth-explanation-of-state-and-props-update-in-react-51ab94563311)\n- [The modern guide to React state patterns - LogRocket Blog](https://blog.logrocket.com/modern-guide-react-state-patterns/#usestate-hook) \n- [@chrlschn - Thoughts on React vs Vue vs Everything Else in 2023](https://chrlschn.dev/blog/2022/12/react-vs-vue-vs-everything-in-2023/)\n## State Basics\n- Purpose: \n\t- Add Interactivity/ Update Event\n- a component\'s memory\n\t- information that can change over time, usually triggered by user interaction\n- a snapshot: \n\t- React state behaves more like a snapshot. Setting it does not change the state variable you already have, but instead triggers a re-render.\n\t- 📌`04-3-Scores.jsx`\n\t  - replacing `setScore(score + 1)` with `setScore(s => s + 1)` fixes the “+3” button.\n\n### React State Structure\n>[Choosing the State Structure • React](https://beta.reactjs.org/learn/choosing-the-state-structure)\n\n- When to use a single vs multiple state variables\n- What to avoid when organizing state\n- How to fix common issues with the state structure\n### Preserve State\n>[Preserving and Resetting State • React](https://beta.reactjs.org/learn/preserving-and-resetting-state)\n\nSame component at the same position preserves state\n### Reset State\nDifferent components at the same position reset state  \nReset state with the same components\n- Op1. Rendering a component in different positions\n- Op2. Resetting state with a key\n### Updating objects in state\nState can hold any kind of JavaScript value, including objects. But avoid mutate the origin objects or arrays stored in state.  \nuse the `...` spread syntax to copy objects and arrays that you want to change.\n\n- 📌`04-4-Objects.jsx`\n  - ![04-objects-mock](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/04-objects-mock.png)\n- 📌`04-4-ImmerObjects.jsx`\n  - Use [Immer](https://github.com/immerjs/use-immer) instead of `useState` in this case to reduce repetitive code.\n  - npm install the following dependencies\n    - "immer": "1.7.3",\n    - "use-immer": "0.5.1"\n> Next: 05-react-to-input-with-state\n## Questions\n#### [在 React 中你是怎么进行状态管理的？](https://github.com/haizlin/fe-interview/issues/605)\n\n#### [如何更新组件的状态？](https://github.com/haizlin/fe-interview/issues/849)\n\n#### [在 React 中怎样改变组件状态，以及状态改变的过程是什么？](https://github.com/haizlin/fe-interview/issues/606)\n\n#### [React 为什么不要直接修改 state？如果想修改怎么做？](https://github.com/haizlin/fe-interview/issues/857)\n\n#### [componentWillUpdate 可以直接修改 state 的值吗？](https://github.com/haizlin/fe-interview/issues/951)\n\n#### [React 中 getInitialState 方法的作用是什么？](https://github.com/haizlin/fe-interview/issues/792)\n\n#### [什么时候使用状态管理器？](https://github.com/haizlin/fe-interview/issues/953)\n\n#### [状态管理器解决了什么问题？什么时候用状态管理器？](https://github.com/haizlin/fe-interview/issues/838)\n\n#### [状态管理器它精髓是什么？](https://github.com/haizlin/fe-interview/issues/837)\n\n#### [React 中如何监听 state 的变化？](https://github.com/haizlin/fe-interview/issues/861)\n\n#### [React 组件间共享数据方法有哪些？](https://github.com/haizlin/fe-interview/issues/672)\n\n#### [React 的状态提升是什么？使用场景有哪些？](https://github.com/haizlin/fe-interview/issues/671)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"react-state-management",text:"React State Management#"},{depth:2,slug:"reference",text:"Reference#"},{depth:2,slug:"state-basics",text:"State Basics#"},{depth:3,slug:"react-state-structure",text:"React State Structure#"},{depth:3,slug:"preserve-state",text:"Preserve State#"},{depth:3,slug:"reset-state",text:"Reset State#"},{depth:3,slug:"updating-objects-in-state",text:"Updating objects in state#"},{depth:2,slug:"questions",text:"Questions#"},{depth:4,slug:"在-react-中你是怎么进行状态管理的",text:"在 React 中你是怎么进行状态管理的？#"},{depth:4,slug:"如何更新组件的状态",text:"如何更新组件的状态？#"},{depth:4,slug:"在-react-中怎样改变组件状态以及状态改变的过程是什么",text:"在 React 中怎样改变组件状态，以及状态改变的过程是什么？#"},{depth:4,slug:"react-为什么不要直接修改-state如果想修改怎么做",text:"React 为什么不要直接修改 state？如果想修改怎么做？#"},{depth:4,slug:"componentwillupdate-可以直接修改-state-的值吗",text:"componentWillUpdate 可以直接修改 state 的值吗？#"},{depth:4,slug:"react-中-getinitialstate-方法的作用是什么",text:"React 中 getInitialState 方法的作用是什么？#"},{depth:4,slug:"什么时候使用状态管理器",text:"什么时候使用状态管理器？#"},{depth:4,slug:"状态管理器解决了什么问题什么时候用状态管理器",text:"状态管理器解决了什么问题？什么时候用状态管理器？#"},{depth:4,slug:"状态管理器它精髓是什么",text:"状态管理器它精髓是什么？#"},{depth:4,slug:"react-中如何监听-state-的变化",text:"React 中如何监听 state 的变化？#"},{depth:4,slug:"react-组件间共享数据方法有哪些",text:"React 组件间共享数据方法有哪些？#"},{depth:4,slug:"react-的状态提升是什么使用场景有哪些",text:"React 的状态提升是什么？使用场景有哪些？#"}]}const Content=createComponent(((e,t,n)=>{const{layout:a,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),stateManagement=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,slug,stateManagement};