---
title: React Basics
DateStarted: 2023-12-02
DateModified: 2023-12-05
aliases:
  - React Component
---

# React Basics

### Component Basics

- Component Name
  - Component name should be **capitalized** and be the same as the component file name
- Component Export
  - To separate the component from the entrance file `App.js`, we need to use `export default function` instead of `function` alone.
  - Can only used on the main component
- `return()`
  - Each component returns a piece of JSX code to be rendered on page
- 📌 Case
  - _[AboutPage](https://github.com/Jenniferwonder/react-tutorial/blob/main/src/components/01-quick-start/AboutPage.jsx)_

### JSX Rules & Syntax

- JSX lets you put markup into JavaScript

#### Fragment 包裹元素

> 为一个组件添加多个元素,可以讲你的子组件列表添加到一个分组中(`<></>`),并且不会再 DOM 增加额外节点

- component also can't return multiple JSX tag
- You have to wrap them into a shared parent, like a `<div>...</div>` or an empty `<>...</>` wrapper

#### Curly braces

- Curly braces let you “escape back” into JS so that you can embed some variable from your code and display it to the user
  - You can add any JavaScript expression (something that evaluates to a single value) inside _curly braces_.
  - An _object property_ with dot notation
    - `<h1>{user.name}</h1>`
  - A _template literal_
    - `return <h1>{`Cool ${title}`}</h1>;`
  - The _returned value of a function_
    - `return <h1>{createTitle(title)}</h1>;`
  - _ternary operators_
    - `return <h1>{title ? title : 'Default Title'}</h1>;`

#### Conditional Rendering

- Case-1-`if...else`
- Case-2-`test? a:b`
- Case-3-`&&`
- 📌[Conditional](../../DB-React-Components/Conditional.md)

#### Render Lists

- `.map()` method
- `.filter()`
  - 📌[FilterList](../../DB-React-Components/FilterList.md)
  - 📌[ProductTableApp](../../DB-React-Components/ProductTableApp.md)
- `key`
  - `<li>` has a `key` attribute. For each item in a list, you should pass a string or a number that uniquely identifies that item among its siblings.
  - 📌[Lists](../../DB-React-Components/Lists.md)

### Keep Component Pure

> reference: [Keeping Components Pure – React](https://react.dev/learn/keeping-components-pure#where-you-_can_-cause-side-effects)

#### Pure Function

> React is designed around the concept of functional programming, assuming that every component you write is a **pure function**. This means that React components you write must always return the same JSX given the same inputs

- **It minds its own business.** It does not change any objects or variables that existed before it was called
- **Same inputs, same output.** Given the same inputs, a pure function should always return the same result
  📌 PureFun.jsx
  📌 ImpureFun.jsx

#### Side Effects

**Side effects**: updating the screen, starting an animation, changing the data, things that happen _on the side_, not during rendering
Side effects usually belong inside [event handlers](https://react.dev/learn/responding-to-events), which don't run _during_ rendering, so event handlers don't need to be pure.

#### Benefits

- Your components could run in a different environment—for example, on the server!
- You can improve performance by [skipping rendering](https://react.dev/reference/react/memo) components whose inputs have not changed. This is safe because pure functions always return the same results, so they are safe to cache.
- If some data changes in the middle of rendering a deep component tree, React can restart rendering without wasting time to finish the outdated render. Purity makes it safe to stop calculating at any time.

## Questions

### DevTools

#### [有用过 React Devtools 吗？说说它的优缺点分别是什么？](https://github.com/haizlin/fe-interview/issues/801)

#### [你有做过 React 的单元测试吗？如果有，用的是哪些工具？怎么做的？](https://github.com/haizlin/fe-interview/issues/714)

#### [浏览器为什么无法直接 JSX？怎么解决呢？](https://github.com/haizlin/fe-interview/issues/624)

#### [在使用 React 过程中你都踩过哪些坑？你是怎么填坑的？](https://github.com/haizlin/fe-interview/issues/623)

### React Middleware

#### [你有写过 React 的中间件插件吗？](https://github.com/haizlin/fe-interview/issues/691)

#### [React 的中间件机制是怎么样的？这种机制有什么作用？](https://github.com/haizlin/fe-interview/issues/690)

#### [React 中你用过哪些第三方的中间件？](https://github.com/haizlin/fe-interview/issues/689)

### Component Basics

#### [React 声明组件有哪几种方法，各有什么不同？](https://github.com/haizlin/fe-interview/issues/604)

#### [React 有几种构建组件的方式？可以写出来吗？](https://github.com/haizlin/fe-interview/issues/644)

#### [在 React 中组件和元素有什么区别？](https://github.com/haizlin/fe-interview/issues/804)

#### [解释下 React 中 component 和 pureComponent 两者的区别是什么？](https://github.com/haizlin/fe-interview/issues/618)

#### [在 React 中声明组件时组件名的第一个字母必须是大写吗？为什么？](https://github.com/haizlin/fe-interview/issues/803)

- [why-component-identifiers-must-be-capitalized-in-react](https://angularindepth.com/posts/1499/why-component-identifiers-must-be-capitalized-in-react)

#### [说说你对 React 的组件命名规范的理解](https://github.com/haizlin/fe-interview/issues/796)

#### [React 组件命名推荐的方式是哪个？为什么不推荐使用 displayName？](https://github.com/haizlin/fe-interview/issues/798)

#### [React 的 displayName 有什么作用？](https://github.com/haizlin/fe-interview/issues/797)

#### [在 React 中如何判断点击元素属于哪一个组件？](https://github.com/haizlin/fe-interview/issues/805)

#### [说说你对“在 React 中，一切都是组件”的理解](https://github.com/haizlin/fe-interview/issues/626)

#### [你是如何划分 React 组件的？](https://github.com/haizlin/fe-interview/issues/851)

#### [如何封装一个 React 的全局公共组件？](https://github.com/haizlin/fe-interview/issues/825)

#### [说说你是怎么理解 React 的业务组件和技术组件的？](https://github.com/haizlin/fe-interview/issues/699)

#### [展示组件和容器组件有什么区别？](https://github.com/haizlin/fe-interview/issues/697)

#### [受控组件和非受控组件有什么区别？](https://github.com/haizlin/fe-interview/issues/631)

#### [React 中什么是非控组件？](https://github.com/haizlin/fe-interview/issues/630)

#### [React 中什么是受控组件？](https://github.com/haizlin/fe-interview/issues/629)

#### [React 什么是有状态组件？](https://github.com/haizlin/fe-interview/issues/860)

#### [React 如何进行代码拆分？拆分的原则是什么？](https://github.com/haizlin/fe-interview/issues/931)

#### [React 自定义组件你写过吗？说说看都写过哪些？](https://github.com/haizlin/fe-interview/issues/646)

#### [React 的 mixins 有什么作用？适用于什么场景？](https://github.com/haizlin/fe-interview/issues/664)

#### [请描述你对纯函数的理解？](https://github.com/haizlin/fe-interview/issues/632)

#### [怎样将多个组件嵌入到一个组件中？](https://github.com/haizlin/fe-interview/issues/848)

### 组件间通信

#### [React 组件间的通信有哪些？](https://github.com/haizlin/fe-interview/issues/648)

#### [React 非兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/652)

#### [React 兄弟组件如何通信？](https://github.com/haizlin/fe-interview/issues/651)

#### [React 非父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/650)

#### [React 父子组件如何通信？](https://github.com/haizlin/fe-interview/issues/649)

### 如何实现双向绑定，并抽象成公共组件

### Portal & Slot

#### [举例说明 React 的插槽有哪些运用场景？](https://github.com/haizlin/fe-interview/issues/934)

#### [你有用过 React 的插槽(Portals)吗？怎么用？](https://github.com/haizlin/fe-interview/issues/933)

#### [请说说 React 中 Portal 是什么？](https://github.com/haizlin/fe-interview/issues/687)

### HOC

#### [举例说明什么是高阶组件(HOC)的属性代理？](https://github.com/haizlin/fe-interview/issues/800)

#### [举例说明什么是高阶组件(HOC)的反向继承？](https://github.com/haizlin/fe-interview/issues/802)

#### [使用高阶组件(HOC)实现一个 loading 组件](https://github.com/haizlin/fe-interview/issues/854)

#### [高阶组件(HOC)有哪些优点和缺点？](https://github.com/haizlin/fe-interview/issues/785)

#### [在 React 使用高阶组件(HOC)有遇到过哪些问题？如何解决？](https://github.com/haizlin/fe-interview/issues/752)

#### [在使用 React 过程中什么时候用高阶组件(HOC)？](https://github.com/haizlin/fe-interview/issues/751)

### JSX

#### [React 必须使用 JSX 吗？](https://github.com/haizlin/fe-interview/issues/886)

#### [在 JSX 中如何写注释？](https://github.com/haizlin/fe-interview/issues/867)

#### [React 的书写规范有哪些？](https://github.com/haizlin/fe-interview/issues/660)

#### [在 React 中你有经常使用常量吗？](https://github.com/haizlin/fe-interview/issues/925)

#### [写个例子说明什么是 JSX 的内联条件渲染](https://github.com/haizlin/fe-interview/issues/877)

#### [怎样有条件地渲染组件？](https://github.com/haizlin/fe-interview/issues/868)

#### [在 React 中什么时候使用箭头函数更方便呢？](https://github.com/haizlin/fe-interview/issues/872)

#### [写例子说明 React 如何在 JSX 中实现 for 循环](https://github.com/haizlin/fe-interview/issues/865)

#### [ES6 的语法'...'在 React 中有哪些应用？](https://github.com/haizlin/fe-interview/issues/826)

#### [在 React 中遍历的方法有哪些？它们有什么区别呢？](https://github.com/haizlin/fe-interview/issues/679)

#### [props.children.map 和 js 的 map 有什么区别？为什么优先选择 React 的？](https://github.com/haizlin/fe-interview/issues/677)

#### [写 React 你是用 es6 还是 es5 的语法？有什么区别？](https://github.com/haizlin/fe-interview/issues/625)

#### [在 React 中我们怎么做静态类型检测？都有哪些方法可以做到？](https://github.com/haizlin/fe-interview/issues/810)

#### [为什么建议 Fragment 包裹元素？它的简写是什么？](https://github.com/haizlin/fe-interview/issues/864)

#### [你有用过 React.Fragment 吗？说说它有什么用途？](https://github.com/haizlin/fe-interview/issues/863)

#### [有用过 React 的 Fragment 吗？它的运用场景是什么？](https://github.com/haizlin/fe-interview/issues/673)

#### [为什么标签里的 for 要写成 htmlFor 呢？](https://github.com/haizlin/fe-interview/issues/839)

#### [在 React 中如何引入图片？哪种方式更好？](https://github.com/haizlin/fe-interview/issues/829)

#### [怎么防止 HTML 被转义？](https://github.com/haizlin/fe-interview/issues/812)

#### [怎样在 React 中使用 innerHTML？](https://github.com/haizlin/fe-interview/issues/692)

#### [JSX 和 HTML 有什么区别？](https://github.com/haizlin/fe-interview/issues/661)

#### [createElement 与 cloneElement 两者有什么区别？](https://github.com/haizlin/fe-interview/issues/620)

### Key

#### [需要把 keys 设置为全局唯一吗？](https://github.com/haizlin/fe-interview/issues/884)

#### [React 中遍历时为什么不用索引作为唯一的 key 值？](https://github.com/haizlin/fe-interview/issues/643)

#### [React 中的 key 有什么作用？](https://github.com/haizlin/fe-interview/issues/642)

### React key 是干嘛用的 为什么要加？key 主要是解决哪一类问题的

### Props

#### [React 组件的 state 和 props 两者有什么区别？](https://github.com/haizlin/fe-interview/issues/645)

#### [怎么在 JSX 里使用自定义属性？](https://github.com/haizlin/fe-interview/issues/813)

#### [怎么在 JSX 里属性可以被覆盖吗？覆盖的原则是什么？](https://github.com/haizlin/fe-interview/issues/814)

#### [如何给非控组件设置默认的值？](https://github.com/haizlin/fe-interview/issues/894)

#### [为什么说 React 中的 props 是只读的？](https://github.com/haizlin/fe-interview/issues/924)

#### [如果组件的属性没有传值，那么它的默认值是什么？](https://github.com/haizlin/fe-interview/issues/900)

#### [在 React 中组件的 props 改变时更新组件的有哪些方法？](https://github.com/haizlin/fe-interview/issues/824)

#### [React 中验证 props 的目的是什么？](https://github.com/haizlin/fe-interview/issues/790)

#### [React 中怎么检验 props？](https://github.com/haizlin/fe-interview/issues/787)

#### [React 中你有使用过 getDefaultProps 吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/789)

#### [给组件设置很多属性时不想一个个去设置有什么办法可以解决这问题呢？](https://github.com/haizlin/fe-interview/issues/784)

#### [immutable 的原理是什么？](https://github.com/haizlin/fe-interview/issues/823)

#### [你对 immutable 有了解吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/822)

#### [React 中你有使用过 propType 吗？它有什么作用？](https://github.com/haizlin/fe-interview/issues/788)

#### [使用 PropTypes 和 Flow 有什么区别？](https://github.com/haizlin/fe-interview/issues/869)

#### [React 的 isMounted 有什么作用？](https://github.com/haizlin/fe-interview/issues/799)

### Event

#### React 组件中怎么做事件代理？它的原理是什么？

#### [`<div onClick={handlerClick}>单击</div>`和`<div onClick={handlerClick(1)}>单击</div>`有什么区别？](https://github.com/haizlin/fe-interview/issues/830)

jsx 事件 = 函数，会调用函数并把函数的返回值记录，在每次 render 时调用  
因此，handleClick 会随事件触发调用，handleClick() 只会调用一次

#### [在 React 中什么是合成事件？有什么用？](https://github.com/haizlin/fe-interview/issues/713)

#### [举例说明如何在 React 创建一个事件](https://github.com/haizlin/fe-interview/issues/850)

#### [怎样将事件传递给子组件？](https://github.com/haizlin/fe-interview/issues/892)

#### [在 React 中怎么将参数传递给事件？](https://github.com/haizlin/fe-interview/issues/876)

#### [React 的事件和普通的 HTML 事件有什么不同？](https://github.com/haizlin/fe-interview/issues/875)

#### [在 React 中怎么阻止事件的默认行为？](https://github.com/haizlin/fe-interview/issues/874)

#### [组件卸载前，加在 DOM 元素的监听事件和定时器要不要手动清除？为什么？](https://github.com/haizlin/fe-interview/issues/840)

#### [React 的触摸事件有哪几种？](https://github.com/haizlin/fe-interview/issues/834)

#### [请描述下事件在 React 中的处理方式是什么？](https://github.com/haizlin/fe-interview/issues/662)

### Strict Mode

#### [React 的严格模式有什么用处？](https://github.com/haizlin/fe-interview/issues/932)

#### [有用过 React 的严格模式吗？](https://github.com/haizlin/fe-interview/issues/676)

### Dynamic Render

#### [怎样动态导入组件？](https://github.com/haizlin/fe-interview/issues/895)

- 自己使用 import 和 async/await 实现的异步组件
- [React.lazy](https://reactjs.org/docs/code-splitting.html#reactlazy)
- 开源库 react-loadable 库/react-lazyload 库
- babel 动态导入（Dynamic Import）

#### [怎么定时更新一个组件？](https://github.com/haizlin/fe-interview/issues/883)

#### [请说下 react 组件更新的机制是什么？](https://github.com/haizlin/fe-interview/issues/815)

#### [shouldComponentUpdate 方法是做什么的？](https://github.com/haizlin/fe-interview/issues/693)

#### [说说你对 windowing 的了解](https://github.com/haizlin/fe-interview/issues/935)

- 'windowing' 的技术把大数据集分解为多个块，当它们滚动到视图中时可以即时加载。它也可以用于创建无限加载列表
- 例如：react-virtualized，react-window 等都使用了“windowing”的技术
- [https://react-window.now.sh/#/examples/list/fixed-size](https://react-window.now.sh/#/examples/list/fixed-size)
- [https://bvaughn.github.io/react-virtualized/#/components/List](https://bvaughn.github.io/react-virtualized/#/components/List)
