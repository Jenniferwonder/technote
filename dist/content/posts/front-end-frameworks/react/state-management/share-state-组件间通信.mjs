import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726310608649/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/state-management/share-state-组件间通信.md",collection="posts",slug="front-end-frameworks/react/state-management/share-state-组件间通信",body="\n# Share State-组件间通信\n>[Sharing State Between Components • React](https://beta.reactjs.org/learn/sharing-state-between-components#recap)\n\n## Reference\n- When you want to coordinate two components, move their state to their common parent.\n- Then pass the information down through props from their common parent.\n- Finally, pass the event handlers down so that the children can change the parent's state.\n- It's useful to consider components as **“controlled” (driven by props)** or **“uncontrolled” (driven by state)**.\n\n#### [React 组件间的通信有哪些？](https://github.com/haizlin/fe-interview/issues/648)\n#### [React 父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/649)\n- 父向子：在子组件函数中传递 `props` 参数，在父组件中使用子组件并向子组件 `props` 通过 `state` 传值\n- 子向父：通过传入事件处理函数，改变父组件 `state`  \n#### [React 兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/651)\n- Move the _state_ up from the component to its parent\n#### [React 非父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/650)\n- `useContext`\n#### ❓[React 非兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/652)\n\n\n### React Key\n\n#### [需要把 keys 设置为全局唯一吗？](https://github.com/haizlin/fe-interview/issues/884)\n\n#### [React 中遍历时为什么不用索引作为唯一的 key 值？](https://github.com/haizlin/fe-interview/issues/643)\n\n#### [React 中的 key 有什么作用？](https://github.com/haizlin/fe-interview/issues/642)\n\n#### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的\n\n### Props\n\n#### [React 组件的 state 和 props 两者有什么区别？](https://github.com/haizlin/fe-interview/issues/645)\n\n#### [怎么在 JSX 里使用自定义属性？](https://github.com/haizlin/fe-interview/issues/813)\n\n#### [怎么在 JSX 里属性可以被覆盖吗？覆盖的原则是什么？](https://github.com/haizlin/fe-interview/issues/814)\n\n#### [如何给非控组件设置默认的值？](https://github.com/haizlin/fe-interview/issues/894)\n\n#### [为什么说 React 中的 props 是只读的？](https://github.com/haizlin/fe-interview/issues/924)\n\n#### [如果组件的属性没有传值，那么它的默认值是什么？](https://github.com/haizlin/fe-interview/issues/900)\n\n#### [在 React 中组件的 props 改变时更新组件的有哪些方法？](https://github.com/haizlin/fe-interview/issues/824)\n\n#### [React 中验证 props 的目的是什么？](https://github.com/haizlin/fe-interview/issues/790)\n\n#### [React 中怎么检验 props？](https://github.com/haizlin/fe-interview/issues/787)\n\n#### [React 中你有使用过 getDefaultProps 吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/789)\n\n#### [给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？](https://github.com/haizlin/fe-interview/issues/784)\n\n#### [immutable 的原理是什么？](https://github.com/haizlin/fe-interview/issues/823)\n\n#### [你对 immutable 有了解吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/822)\n\n#### [React 中你有使用过 propType 吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/788)\n\n#### [使用 PropTypes 和 Flow 有什么区别？](https://github.com/haizlin/fe-interview/issues/869)\n\n### Portal & Slot\n\n#### [举例说明 React 的插槽有哪些运用场景？](https://github.com/haizlin/fe-interview/issues/934)\n\n#### [你有用过 React 的插槽(Portals)吗？怎么用？](https://github.com/haizlin/fe-interview/issues/933)\n\n#### [请说说 React 中 Portal 是什么？](https://github.com/haizlin/fe-interview/issues/687)\n\n## React 组件间通信 (props, children)\n\n- 概念\n- ![z-React-CDD-组件插槽用法.png|400](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-React-CDD-%E7%BB%84%E4%BB%B6%E6%8F%92%E6%A7%BD%E7%94%A8%E6%B3%95.png)\n\n- 组件的 `children` 子元素\n- ![React-CDD-插槽-children.png|350](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-%E6%8F%92%E6%A7%BD-children.png)\n  - ![React-CDD-children.png|425](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-children.png)\n  - 弊端\n    - children 数量被限制\n      - 1 个 (值为对象)\n        - `children: button`\n      - 多个 (值为对象数组)\n        - `children: [button, ...]`\n  - 限制只能传一个元素\n  - ![React-CDD-children-1.png](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-children-1.png)\n- `props` 属性传递 React 元素\n  - ![React-CDD-props.png|325](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-props.png)\n\n![1701567850607.png|500](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/1701567850607.png)\n\n\n\n\n\n\n",data={title:"Share State-组件间通信",DateStarted:new Date(171288e7),tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/state-management/share-state-组件间通信.md",rawData:void 0},html='<h1 id="share-state-组件间通信">Share State-组件间通信<a class="anchor" href="#share-state-组件间通信"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<blockquote>\n<p><a href="https://beta.reactjs.org/learn/sharing-state-between-components#recap">Sharing State Between Components • React</a></p>\n</blockquote>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>When you want to coordinate two components, move their state to their common parent.</li>\n<li>Then pass the information down through props from their common parent.</li>\n<li>Finally, pass the event handlers down so that the children can change the parent’s state.</li>\n<li>It’s useful to consider components as <strong>“controlled” (driven by props)</strong> or <strong>“uncontrolled” (driven by state)</strong>.</li>\n</ul>\n<h4 id="react-组件间的通信有哪些"><a href="https://github.com/haizlin/fe-interview/issues/648">React 组件间的通信有哪些？</a><a class="anchor" href="#react-组件间的通信有哪些"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-父子组件如何通信"><a href="https://github.com/haizlin/fe-interview/issues/649">React 父子组件如何通信？</a><a class="anchor" href="#react-父子组件如何通信"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>父向子：在子组件函数中传递 <code>props</code> 参数，在父组件中使用子组件并向子组件 <code>props</code> 通过 <code>state</code> 传值</li>\n<li>子向父：通过传入事件处理函数，改变父组件 <code>state</code></li>\n</ul>\n<h4 id="react-兄弟组件如何通信"><a href="https://github.com/haizlin/fe-interview/issues/651">React 兄弟组件如何通信？</a><a class="anchor" href="#react-兄弟组件如何通信"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>Move the <em>state</em> up from the component to its parent</li>\n</ul>\n<h4 id="react-非父子组件如何通信"><a href="https://github.com/haizlin/fe-interview/issues/650">React 非父子组件如何通信？</a><a class="anchor" href="#react-非父子组件如何通信"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><code>useContext</code></li>\n</ul>\n<h4 id="react-非兄弟组件如何通信">❓<a href="https://github.com/haizlin/fe-interview/issues/652">React 非兄弟组件如何通信？</a><a class="anchor" href="#react-非兄弟组件如何通信"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h3 id="react-key">React Key<a class="anchor" href="#react-key"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="需要把-keys-设置为全局唯一吗"><a href="https://github.com/haizlin/fe-interview/issues/884">需要把 keys 设置为全局唯一吗？</a><a class="anchor" href="#需要把-keys-设置为全局唯一吗"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中遍历时为什么不用索引作为唯一的-key-值"><a href="https://github.com/haizlin/fe-interview/issues/643">React 中遍历时为什么不用索引作为唯一的 key 值？</a><a class="anchor" href="#react-中遍历时为什么不用索引作为唯一的-key-值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中的-key-有什么作用"><a href="https://github.com/haizlin/fe-interview/issues/642">React 中的 key 有什么作用？</a><a class="anchor" href="#react-中的-key-有什么作用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-key-是干嘛用的-为什么要加key-主要是解决哪一类问题的">React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的<a class="anchor" href="#react-key-是干嘛用的-为什么要加key-主要是解决哪一类问题的"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h3 id="props">Props<a class="anchor" href="#props"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="react-组件的-state-和-props-两者有什么区别"><a href="https://github.com/haizlin/fe-interview/issues/645">React 组件的 state 和 props 两者有什么区别？</a><a class="anchor" href="#react-组件的-state-和-props-两者有什么区别"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="怎么在-jsx-里使用自定义属性"><a href="https://github.com/haizlin/fe-interview/issues/813">怎么在 JSX 里使用自定义属性？</a><a class="anchor" href="#怎么在-jsx-里使用自定义属性"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="怎么在-jsx-里属性可以被覆盖吗覆盖的原则是什么"><a href="https://github.com/haizlin/fe-interview/issues/814">怎么在 JSX 里属性可以被覆盖吗？覆盖的原则是什么？</a><a class="anchor" href="#怎么在-jsx-里属性可以被覆盖吗覆盖的原则是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="如何给非控组件设置默认的值"><a href="https://github.com/haizlin/fe-interview/issues/894">如何给非控组件设置默认的值？</a><a class="anchor" href="#如何给非控组件设置默认的值"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="为什么说-react-中的-props-是只读的"><a href="https://github.com/haizlin/fe-interview/issues/924">为什么说 React 中的 props 是只读的？</a><a class="anchor" href="#为什么说-react-中的-props-是只读的"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="如果组件的属性没有传值那么它的默认值是什么"><a href="https://github.com/haizlin/fe-interview/issues/900">如果组件的属性没有传值，那么它的默认值是什么？</a><a class="anchor" href="#如果组件的属性没有传值那么它的默认值是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="在-react-中组件的-props-改变时更新组件的有哪些方法"><a href="https://github.com/haizlin/fe-interview/issues/824">在 React 中组件的 props 改变时更新组件的有哪些方法？</a><a class="anchor" href="#在-react-中组件的-props-改变时更新组件的有哪些方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中验证-props-的目的是什么"><a href="https://github.com/haizlin/fe-interview/issues/790">React 中验证 props 的目的是什么？</a><a class="anchor" href="#react-中验证-props-的目的是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中怎么检验-props"><a href="https://github.com/haizlin/fe-interview/issues/787">React 中怎么检验 props？</a><a class="anchor" href="#react-中怎么检验-props"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中你有使用过-getdefaultprops-吗它有什么作用"><a href="https://github.com/haizlin/fe-interview/issues/789">React 中你有使用过 getDefaultProps 吗？它有什么作用？</a><a class="anchor" href="#react-中你有使用过-getdefaultprops-吗它有什么作用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢"><a href="https://github.com/haizlin/fe-interview/issues/784">给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？</a><a class="anchor" href="#给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="immutable-的原理是什么"><a href="https://github.com/haizlin/fe-interview/issues/823">immutable 的原理是什么？</a><a class="anchor" href="#immutable-的原理是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="你对-immutable-有了解吗它有什么作用"><a href="https://github.com/haizlin/fe-interview/issues/822">你对 immutable 有了解吗？它有什么作用？</a><a class="anchor" href="#你对-immutable-有了解吗它有什么作用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-中你有使用过-proptype-吗它有什么作用"><a href="https://github.com/haizlin/fe-interview/issues/788">React 中你有使用过 propType 吗？它有什么作用？</a><a class="anchor" href="#react-中你有使用过-proptype-吗它有什么作用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="使用-proptypes-和-flow-有什么区别"><a href="https://github.com/haizlin/fe-interview/issues/869">使用 PropTypes 和 Flow 有什么区别？</a><a class="anchor" href="#使用-proptypes-和-flow-有什么区别"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h3 id="portal--slot">Portal &#x26; Slot<a class="anchor" href="#portal--slot"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="举例说明-react-的插槽有哪些运用场景"><a href="https://github.com/haizlin/fe-interview/issues/934">举例说明 React 的插槽有哪些运用场景？</a><a class="anchor" href="#举例说明-react-的插槽有哪些运用场景"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="你有用过-react-的插槽portals吗怎么用"><a href="https://github.com/haizlin/fe-interview/issues/933">你有用过 React 的插槽(Portals)吗？怎么用？</a><a class="anchor" href="#你有用过-react-的插槽portals吗怎么用"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="请说说-react-中-portal-是什么"><a href="https://github.com/haizlin/fe-interview/issues/687">请说说 React 中 Portal 是什么？</a><a class="anchor" href="#请说说-react-中-portal-是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h2 id="react-组件间通信-props-children">React 组件间通信 (props, children)<a class="anchor" href="#react-组件间通信-props-children"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>\n<p>概念</p>\n</li>\n<li>\n<p><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-React-CDD-组件插槽用法.png" alt="z-React-CDD-组件插槽用法.png|400"></p>\n</li>\n<li>\n<p>组件的 <code>children</code> 子元素</p>\n</li>\n<li>\n<p><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-插槽-children.png" alt="React-CDD-插槽-children.png|350"></p>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-children.png" alt="React-CDD-children.png|425"></li>\n<li>弊端\n<ul>\n<li>children 数量被限制\n<ul>\n<li>1 个 (值为对象)\n<ul>\n<li><code>children: button</code></li>\n</ul>\n</li>\n<li>多个 (值为对象数组)\n<ul>\n<li><code>children: [button, ...]</code></li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n</li>\n<li>限制只能传一个元素</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-children-1.png" alt="React-CDD-children-1.png"></li>\n</ul>\n</li>\n<li>\n<p><code>props</code> 属性传递 React 元素</p>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-props.png" alt="React-CDD-props.png|325"></li>\n</ul>\n</li>\n</ul>\n<p><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/1701567850607.png" alt="1701567850607.png|500"></p>',frontmatter={aliases:["Share State-组件间通信"],title:"Share State-组件间通信",topic:["Component-Basics"],type:"D",tags:["React"],DateStarted:"2024-04-12T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",Datereviewed:"2024-04-12T00:00:00.000Z",reviewed:1,difficulty:null,status:null,comment:null,"linter-yaml-title-alias":"Share State-组件间通信",category:"Front-End Frameworks",minutes:3,words:575},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/state-management/share-state-组件间通信.md",url=void 0;function rawContent(){return"\n# Share State-组件间通信\n>[Sharing State Between Components • React](https://beta.reactjs.org/learn/sharing-state-between-components#recap)\n\n## Reference\n- When you want to coordinate two components, move their state to their common parent.\n- Then pass the information down through props from their common parent.\n- Finally, pass the event handlers down so that the children can change the parent's state.\n- It's useful to consider components as **“controlled” (driven by props)** or **“uncontrolled” (driven by state)**.\n\n#### [React 组件间的通信有哪些？](https://github.com/haizlin/fe-interview/issues/648)\n#### [React 父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/649)\n- 父向子：在子组件函数中传递 `props` 参数，在父组件中使用子组件并向子组件 `props` 通过 `state` 传值\n- 子向父：通过传入事件处理函数，改变父组件 `state`  \n#### [React 兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/651)\n- Move the _state_ up from the component to its parent\n#### [React 非父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/650)\n- `useContext`\n#### ❓[React 非兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/652)\n\n\n### React Key\n\n#### [需要把 keys 设置为全局唯一吗？](https://github.com/haizlin/fe-interview/issues/884)\n\n#### [React 中遍历时为什么不用索引作为唯一的 key 值？](https://github.com/haizlin/fe-interview/issues/643)\n\n#### [React 中的 key 有什么作用？](https://github.com/haizlin/fe-interview/issues/642)\n\n#### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的\n\n### Props\n\n#### [React 组件的 state 和 props 两者有什么区别？](https://github.com/haizlin/fe-interview/issues/645)\n\n#### [怎么在 JSX 里使用自定义属性？](https://github.com/haizlin/fe-interview/issues/813)\n\n#### [怎么在 JSX 里属性可以被覆盖吗？覆盖的原则是什么？](https://github.com/haizlin/fe-interview/issues/814)\n\n#### [如何给非控组件设置默认的值？](https://github.com/haizlin/fe-interview/issues/894)\n\n#### [为什么说 React 中的 props 是只读的？](https://github.com/haizlin/fe-interview/issues/924)\n\n#### [如果组件的属性没有传值，那么它的默认值是什么？](https://github.com/haizlin/fe-interview/issues/900)\n\n#### [在 React 中组件的 props 改变时更新组件的有哪些方法？](https://github.com/haizlin/fe-interview/issues/824)\n\n#### [React 中验证 props 的目的是什么？](https://github.com/haizlin/fe-interview/issues/790)\n\n#### [React 中怎么检验 props？](https://github.com/haizlin/fe-interview/issues/787)\n\n#### [React 中你有使用过 getDefaultProps 吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/789)\n\n#### [给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？](https://github.com/haizlin/fe-interview/issues/784)\n\n#### [immutable 的原理是什么？](https://github.com/haizlin/fe-interview/issues/823)\n\n#### [你对 immutable 有了解吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/822)\n\n#### [React 中你有使用过 propType 吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/788)\n\n#### [使用 PropTypes 和 Flow 有什么区别？](https://github.com/haizlin/fe-interview/issues/869)\n\n### Portal & Slot\n\n#### [举例说明 React 的插槽有哪些运用场景？](https://github.com/haizlin/fe-interview/issues/934)\n\n#### [你有用过 React 的插槽(Portals)吗？怎么用？](https://github.com/haizlin/fe-interview/issues/933)\n\n#### [请说说 React 中 Portal 是什么？](https://github.com/haizlin/fe-interview/issues/687)\n\n## React 组件间通信 (props, children)\n\n- 概念\n- ![z-React-CDD-组件插槽用法.png|400](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-React-CDD-%E7%BB%84%E4%BB%B6%E6%8F%92%E6%A7%BD%E7%94%A8%E6%B3%95.png)\n\n- 组件的 `children` 子元素\n- ![React-CDD-插槽-children.png|350](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-%E6%8F%92%E6%A7%BD-children.png)\n  - ![React-CDD-children.png|425](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-children.png)\n  - 弊端\n    - children 数量被限制\n      - 1 个 (值为对象)\n        - `children: button`\n      - 多个 (值为对象数组)\n        - `children: [button, ...]`\n  - 限制只能传一个元素\n  - ![React-CDD-children-1.png](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-children-1.png)\n- `props` 属性传递 React 元素\n  - ![React-CDD-props.png|325](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/React-CDD-props.png)\n\n![1701567850607.png|500](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/1701567850607.png)\n\n\n\n\n\n\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"share-state-组件间通信",text:"Share State-组件间通信#"},{depth:2,slug:"reference",text:"Reference#"},{depth:4,slug:"react-组件间的通信有哪些",text:"React 组件间的通信有哪些？#"},{depth:4,slug:"react-父子组件如何通信",text:"React 父子组件如何通信？#"},{depth:4,slug:"react-兄弟组件如何通信",text:"React 兄弟组件如何通信？#"},{depth:4,slug:"react-非父子组件如何通信",text:"React 非父子组件如何通信？#"},{depth:4,slug:"react-非兄弟组件如何通信",text:"❓React 非兄弟组件如何通信？#"},{depth:3,slug:"react-key",text:"React Key#"},{depth:4,slug:"需要把-keys-设置为全局唯一吗",text:"需要把 keys 设置为全局唯一吗？#"},{depth:4,slug:"react-中遍历时为什么不用索引作为唯一的-key-值",text:"React 中遍历时为什么不用索引作为唯一的 key 值？#"},{depth:4,slug:"react-中的-key-有什么作用",text:"React 中的 key 有什么作用？#"},{depth:4,slug:"react-key-是干嘛用的-为什么要加key-主要是解决哪一类问题的",text:"React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的#"},{depth:3,slug:"props",text:"Props#"},{depth:4,slug:"react-组件的-state-和-props-两者有什么区别",text:"React 组件的 state 和 props 两者有什么区别？#"},{depth:4,slug:"怎么在-jsx-里使用自定义属性",text:"怎么在 JSX 里使用自定义属性？#"},{depth:4,slug:"怎么在-jsx-里属性可以被覆盖吗覆盖的原则是什么",text:"怎么在 JSX 里属性可以被覆盖吗？覆盖的原则是什么？#"},{depth:4,slug:"如何给非控组件设置默认的值",text:"如何给非控组件设置默认的值？#"},{depth:4,slug:"为什么说-react-中的-props-是只读的",text:"为什么说 React 中的 props 是只读的？#"},{depth:4,slug:"如果组件的属性没有传值那么它的默认值是什么",text:"如果组件的属性没有传值，那么它的默认值是什么？#"},{depth:4,slug:"在-react-中组件的-props-改变时更新组件的有哪些方法",text:"在 React 中组件的 props 改变时更新组件的有哪些方法？#"},{depth:4,slug:"react-中验证-props-的目的是什么",text:"React 中验证 props 的目的是什么？#"},{depth:4,slug:"react-中怎么检验-props",text:"React 中怎么检验 props？#"},{depth:4,slug:"react-中你有使用过-getdefaultprops-吗它有什么作用",text:"React 中你有使用过 getDefaultProps 吗？它有什么作用？#"},{depth:4,slug:"给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢",text:"给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？#"},{depth:4,slug:"immutable-的原理是什么",text:"immutable 的原理是什么？#"},{depth:4,slug:"你对-immutable-有了解吗它有什么作用",text:"你对 immutable 有了解吗？它有什么作用？#"},{depth:4,slug:"react-中你有使用过-proptype-吗它有什么作用",text:"React 中你有使用过 propType 吗？它有什么作用？#"},{depth:4,slug:"使用-proptypes-和-flow-有什么区别",text:"使用 PropTypes 和 Flow 有什么区别？#"},{depth:3,slug:"portal--slot",text:"Portal & Slot#"},{depth:4,slug:"举例说明-react-的插槽有哪些运用场景",text:"举例说明 React 的插槽有哪些运用场景？#"},{depth:4,slug:"你有用过-react-的插槽portals吗怎么用",text:"你有用过 React 的插槽(Portals)吗？怎么用？#"},{depth:4,slug:"请说说-react-中-portal-是什么",text:"请说说 React 中 Portal 是什么？#"},{depth:2,slug:"react-组件间通信-props-children",text:"React 组件间通信 (props, children)#"}]}const Content=createComponent(((e,t,n)=>{const{layout:a,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),shareState______=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,shareState______,slug};