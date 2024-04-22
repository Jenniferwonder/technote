import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../../chunks/1713773016041/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/state-management/lib-for-state/redux.md",collection="posts",slug="front-end-frameworks/react/state-management/lib-for-state/redux",body="# Redux\n\n#### [在 Redux 中怎么发起网络请求？](https://github.com/haizlin/fe-interview/issues/919)\n\n#### [Redux 怎样重置状态？](https://github.com/haizlin/fe-interview/issues/918)\n\n#### [Redux 怎样设置初始状态？](https://github.com/haizlin/fe-interview/issues/917)\n\n#### [Redux 怎么添加新的中间件？](https://github.com/haizlin/fe-interview/issues/914)\n\n#### [redux-saga 和 redux-thunk 有什么本质的区别？](https://github.com/haizlin/fe-interview/issues/913)\n#### [你知道 redux-saga 的原理吗？](https://github.com/haizlin/fe-interview/issues/911)\n\n#### [你有使用过 redux-saga 中间件吗？它是干什么的？](https://github.com/haizlin/fe-interview/issues/910)\n\n#### [Redux 中异步 action 和同步 action 最大的区别是什么？](https://github.com/haizlin/fe-interview/issues/769)\n\n#### [Redux 的中间件是什么？你有用过哪些 Redux 的中间件？](https://github.com/haizlin/fe-interview/issues/767)\n\n#### [说说 Redux 的实现流程](https://github.com/haizlin/fe-interview/issues/766)\n#### [Redux 由哪些组件构成？](https://github.com/haizlin/fe-interview/issues/764)\n\n\n#### [Redux 的 thunk 作用是什么？](https://github.com/haizlin/fe-interview/issues/740)\n\n#### [Redux 的数据存储和本地储存有什么区别？](https://github.com/haizlin/fe-interview/issues/739)\n\n#### [在 Redux 中，什么是 reducer？它有什么作用？](https://github.com/haizlin/fe-interview/issues/738)\n\n#### [举例说明怎么在 Redux 中定义 action？](https://github.com/haizlin/fe-interview/issues/737)\n\n#### [在 Redux 中，什么是 action？](https://github.com/haizlin/fe-interview/issues/736)\n\n#### [在 Redux 中，什么是 store？](https://github.com/haizlin/fe-interview/issues/735)\n\n#### [为什么 Redux 能做到局部渲染呢？](https://github.com/haizlin/fe-interview/issues/734)\n\n#### [说说 Redux 的优缺点分别是什么？](https://github.com/haizlin/fe-interview/issues/733)\n#### [Redux 它的三个原则是什么？](https://github.com/haizlin/fe-interview/issues/731)\n#### [什么是 Redux？说说你对 Redux 的理解？有哪些运用场景？](https://github.com/haizlin/fe-interview/issues/729)\n#### [什么是单一数据源？](https://github.com/haizlin/fe-interview/issues/730)\n\n\n\n\n\n\n\n\n\n\n\n",data={title:"Redux",DateStarted:new Date(17133984e5),draft:!0,tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/state-management/lib-for-state/redux.md",rawData:void 0},html='<h1 id="redux">Redux<a class="anchor" href="#redux"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h4 id="在-redux-中怎么发起网络请求"><a href="https://github.com/haizlin/fe-interview/issues/919">在 Redux 中怎么发起网络请求？</a><a class="anchor" href="#在-redux-中怎么发起网络请求"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-怎样重置状态"><a href="https://github.com/haizlin/fe-interview/issues/918">Redux 怎样重置状态？</a><a class="anchor" href="#redux-怎样重置状态"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-怎样设置初始状态"><a href="https://github.com/haizlin/fe-interview/issues/917">Redux 怎样设置初始状态？</a><a class="anchor" href="#redux-怎样设置初始状态"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-怎么添加新的中间件"><a href="https://github.com/haizlin/fe-interview/issues/914">Redux 怎么添加新的中间件？</a><a class="anchor" href="#redux-怎么添加新的中间件"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-saga-和-redux-thunk-有什么本质的区别"><a href="https://github.com/haizlin/fe-interview/issues/913">redux-saga 和 redux-thunk 有什么本质的区别？</a><a class="anchor" href="#redux-saga-和-redux-thunk-有什么本质的区别"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="你知道-redux-saga-的原理吗"><a href="https://github.com/haizlin/fe-interview/issues/911">你知道 redux-saga 的原理吗？</a><a class="anchor" href="#你知道-redux-saga-的原理吗"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="你有使用过-redux-saga-中间件吗它是干什么的"><a href="https://github.com/haizlin/fe-interview/issues/910">你有使用过 redux-saga 中间件吗？它是干什么的？</a><a class="anchor" href="#你有使用过-redux-saga-中间件吗它是干什么的"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-中异步-action-和同步-action-最大的区别是什么"><a href="https://github.com/haizlin/fe-interview/issues/769">Redux 中异步 action 和同步 action 最大的区别是什么？</a><a class="anchor" href="#redux-中异步-action-和同步-action-最大的区别是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-的中间件是什么你有用过哪些-redux-的中间件"><a href="https://github.com/haizlin/fe-interview/issues/767">Redux 的中间件是什么？你有用过哪些 Redux 的中间件？</a><a class="anchor" href="#redux-的中间件是什么你有用过哪些-redux-的中间件"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="说说-redux-的实现流程"><a href="https://github.com/haizlin/fe-interview/issues/766">说说 Redux 的实现流程</a><a class="anchor" href="#说说-redux-的实现流程"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-由哪些组件构成"><a href="https://github.com/haizlin/fe-interview/issues/764">Redux 由哪些组件构成？</a><a class="anchor" href="#redux-由哪些组件构成"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-的-thunk-作用是什么"><a href="https://github.com/haizlin/fe-interview/issues/740">Redux 的 thunk 作用是什么？</a><a class="anchor" href="#redux-的-thunk-作用是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-的数据存储和本地储存有什么区别"><a href="https://github.com/haizlin/fe-interview/issues/739">Redux 的数据存储和本地储存有什么区别？</a><a class="anchor" href="#redux-的数据存储和本地储存有什么区别"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="在-redux-中什么是-reducer它有什么作用"><a href="https://github.com/haizlin/fe-interview/issues/738">在 Redux 中，什么是 reducer？它有什么作用？</a><a class="anchor" href="#在-redux-中什么是-reducer它有什么作用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="举例说明怎么在-redux-中定义-action"><a href="https://github.com/haizlin/fe-interview/issues/737">举例说明怎么在 Redux 中定义 action？</a><a class="anchor" href="#举例说明怎么在-redux-中定义-action"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="在-redux-中什么是-action"><a href="https://github.com/haizlin/fe-interview/issues/736">在 Redux 中，什么是 action？</a><a class="anchor" href="#在-redux-中什么是-action"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="在-redux-中什么是-store"><a href="https://github.com/haizlin/fe-interview/issues/735">在 Redux 中，什么是 store？</a><a class="anchor" href="#在-redux-中什么是-store"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="为什么-redux-能做到局部渲染呢"><a href="https://github.com/haizlin/fe-interview/issues/734">为什么 Redux 能做到局部渲染呢？</a><a class="anchor" href="#为什么-redux-能做到局部渲染呢"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="说说-redux-的优缺点分别是什么"><a href="https://github.com/haizlin/fe-interview/issues/733">说说 Redux 的优缺点分别是什么？</a><a class="anchor" href="#说说-redux-的优缺点分别是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="redux-它的三个原则是什么"><a href="https://github.com/haizlin/fe-interview/issues/731">Redux 它的三个原则是什么？</a><a class="anchor" href="#redux-它的三个原则是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="什么是-redux说说你对-redux-的理解有哪些运用场景"><a href="https://github.com/haizlin/fe-interview/issues/729">什么是 Redux？说说你对 Redux 的理解？有哪些运用场景？</a><a class="anchor" href="#什么是-redux说说你对-redux-的理解有哪些运用场景"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="什么是单一数据源"><a href="https://github.com/haizlin/fe-interview/issues/730">什么是单一数据源？</a><a class="anchor" href="#什么是单一数据源"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>',frontmatter={draft:!0,title:"Redux",topic:["State"],type:"D",tags:["React"],Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["Redux"],DateStarted:"2024-04-18T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z","linter-yaml-title-alias":"Redux",category:"Front-End Frameworks",minutes:1,words:249},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/state-management/lib-for-state/redux.md",url=void 0;function rawContent(){return"# Redux\n\n#### [在 Redux 中怎么发起网络请求？](https://github.com/haizlin/fe-interview/issues/919)\n\n#### [Redux 怎样重置状态？](https://github.com/haizlin/fe-interview/issues/918)\n\n#### [Redux 怎样设置初始状态？](https://github.com/haizlin/fe-interview/issues/917)\n\n#### [Redux 怎么添加新的中间件？](https://github.com/haizlin/fe-interview/issues/914)\n\n#### [redux-saga 和 redux-thunk 有什么本质的区别？](https://github.com/haizlin/fe-interview/issues/913)\n#### [你知道 redux-saga 的原理吗？](https://github.com/haizlin/fe-interview/issues/911)\n\n#### [你有使用过 redux-saga 中间件吗？它是干什么的？](https://github.com/haizlin/fe-interview/issues/910)\n\n#### [Redux 中异步 action 和同步 action 最大的区别是什么？](https://github.com/haizlin/fe-interview/issues/769)\n\n#### [Redux 的中间件是什么？你有用过哪些 Redux 的中间件？](https://github.com/haizlin/fe-interview/issues/767)\n\n#### [说说 Redux 的实现流程](https://github.com/haizlin/fe-interview/issues/766)\n#### [Redux 由哪些组件构成？](https://github.com/haizlin/fe-interview/issues/764)\n\n\n#### [Redux 的 thunk 作用是什么？](https://github.com/haizlin/fe-interview/issues/740)\n\n#### [Redux 的数据存储和本地储存有什么区别？](https://github.com/haizlin/fe-interview/issues/739)\n\n#### [在 Redux 中，什么是 reducer？它有什么作用？](https://github.com/haizlin/fe-interview/issues/738)\n\n#### [举例说明怎么在 Redux 中定义 action？](https://github.com/haizlin/fe-interview/issues/737)\n\n#### [在 Redux 中，什么是 action？](https://github.com/haizlin/fe-interview/issues/736)\n\n#### [在 Redux 中，什么是 store？](https://github.com/haizlin/fe-interview/issues/735)\n\n#### [为什么 Redux 能做到局部渲染呢？](https://github.com/haizlin/fe-interview/issues/734)\n\n#### [说说 Redux 的优缺点分别是什么？](https://github.com/haizlin/fe-interview/issues/733)\n#### [Redux 它的三个原则是什么？](https://github.com/haizlin/fe-interview/issues/731)\n#### [什么是 Redux？说说你对 Redux 的理解？有哪些运用场景？](https://github.com/haizlin/fe-interview/issues/729)\n#### [什么是单一数据源？](https://github.com/haizlin/fe-interview/issues/730)\n\n\n\n\n\n\n\n\n\n\n\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"redux",text:"Redux#"},{depth:4,slug:"在-redux-中怎么发起网络请求",text:"在 Redux 中怎么发起网络请求？#"},{depth:4,slug:"redux-怎样重置状态",text:"Redux 怎样重置状态？#"},{depth:4,slug:"redux-怎样设置初始状态",text:"Redux 怎样设置初始状态？#"},{depth:4,slug:"redux-怎么添加新的中间件",text:"Redux 怎么添加新的中间件？#"},{depth:4,slug:"redux-saga-和-redux-thunk-有什么本质的区别",text:"redux-saga 和 redux-thunk 有什么本质的区别？#"},{depth:4,slug:"你知道-redux-saga-的原理吗",text:"你知道 redux-saga 的原理吗？#"},{depth:4,slug:"你有使用过-redux-saga-中间件吗它是干什么的",text:"你有使用过 redux-saga 中间件吗？它是干什么的？#"},{depth:4,slug:"redux-中异步-action-和同步-action-最大的区别是什么",text:"Redux 中异步 action 和同步 action 最大的区别是什么？#"},{depth:4,slug:"redux-的中间件是什么你有用过哪些-redux-的中间件",text:"Redux 的中间件是什么？你有用过哪些 Redux 的中间件？#"},{depth:4,slug:"说说-redux-的实现流程",text:"说说 Redux 的实现流程#"},{depth:4,slug:"redux-由哪些组件构成",text:"Redux 由哪些组件构成？#"},{depth:4,slug:"redux-的-thunk-作用是什么",text:"Redux 的 thunk 作用是什么？#"},{depth:4,slug:"redux-的数据存储和本地储存有什么区别",text:"Redux 的数据存储和本地储存有什么区别？#"},{depth:4,slug:"在-redux-中什么是-reducer它有什么作用",text:"在 Redux 中，什么是 reducer？它有什么作用？#"},{depth:4,slug:"举例说明怎么在-redux-中定义-action",text:"举例说明怎么在 Redux 中定义 action？#"},{depth:4,slug:"在-redux-中什么是-action",text:"在 Redux 中，什么是 action？#"},{depth:4,slug:"在-redux-中什么是-store",text:"在 Redux 中，什么是 store？#"},{depth:4,slug:"为什么-redux-能做到局部渲染呢",text:"为什么 Redux 能做到局部渲染呢？#"},{depth:4,slug:"说说-redux-的优缺点分别是什么",text:"说说 Redux 的优缺点分别是什么？#"},{depth:4,slug:"redux-它的三个原则是什么",text:"Redux 它的三个原则是什么？#"},{depth:4,slug:"什么是-redux说说你对-redux-的理解有哪些运用场景",text:"什么是 Redux？说说你对 Redux 的理解？有哪些运用场景？#"},{depth:4,slug:"什么是单一数据源",text:"什么是单一数据源？#"}]}const Content=createComponent(((e,i,n)=>{const{layout:t,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),redux=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,redux,slug};