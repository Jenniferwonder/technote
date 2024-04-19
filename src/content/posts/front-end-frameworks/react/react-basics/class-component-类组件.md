---
title: Class Component-类组件
topic:
  - Component-Basics
type: D
tags:
  - React
DateStarted: 2024-03-06
DateModified: 2024-04-19
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
aliases:
  - Class Component-类组件
  - Class Component
linter-yaml-title-alias: Class Component-类组件
category: Front-End Frameworks
draft: true
---

# Class Component-类组件

## Constructor & super()

react 中的 class 是基于 es6 的规范实现的, 继承是使用 extends 关键字实现继承的，子类必须在 constructor()中调用 super() 方法否则新建实例  
就会报错，报错的原因是 子类是没有自己的 this 对象的，它只能继承父类的 this 对象，然后对其进行加工，而 super()就是将父类中的 this 对象继承给子类的，没有 super() 子类就得不到 this 对象。  
如果你使用了 constructor 就必须写 super() 这个是用来初始化 this 的，可以绑定事件到 this 上  
如果你想要在 constructor 中使用 this.props,就必须给 super 添加参数 super(props)  
注意，无论有没有 constructor，在 render 中的 this.props 都是可以使用的，这是 react 自动附带的  
如果没有用到 constructor 是可以不写的，react 会默认添加一个空的 constroctor.

如果只调用了`super()`，那么`this.props`在`super()`和构造函数结束之间仍是`undefined`。

```js
class Button extends React.Component {
	constructor(props) {
		super(); // 没有传 props
		console.log(props); // {}
		console.log(this.props); // undefined
	}
	// ...
}
```

super() 可以让我们使用 this 来调用各种东西，  
而 super(props)可以让我们在 this 的基础上使用构造函数里面的东西， 或者从父元素那边传过来的一些属性

## Questions

#### [类组件和函数式组件有什么区别？](https://github.com/haizlin/fe-interview/issues/647)

#### [什么是 React 的实例？函数式组件有没有实例？](https://github.com/haizlin/fe-interview/issues/806)

#### [React.createClass 和 extends Component 的区别有哪些？](https://github.com/haizlin/fe-interview/issues/786)

#### [React 组件的构造函数有什么作用？](https://github.com/haizlin/fe-interview/issues/930)

#### [React 组件的构造函数是必须的吗？](https://github.com/haizlin/fe-interview/issues/929)

#### [`super()`和`super(props)`有什么区别？](https://github.com/haizlin/fe-interview/issues/898)

#### [constructor 和 getInitialState 有不同？](https://github.com/haizlin/fe-interview/issues/866)

#### [React 中除了在构造函数中绑定 this,还有别的方式吗？](https://github.com/haizlin/fe-interview/issues/641)

#### [使用 ES6 的 class 定义的组件不支持 mixins 了，那用什么可以替代呢？](https://github.com/haizlin/fe-interview/issues/722)
#### [装饰器(Decorator)在 React 中有什么应用？](https://github.com/haizlin/fe-interview/issues/855)
#### [React 声明组件有哪几种方法，各有什么不同？](https://github.com/haizlin/fe-interview/issues/604)
#### [React 的 mixins 有什么作用？适用于什么场景？](https://github.com/haizlin/fe-interview/issues/664)

#### [React 有几种构建组件的方式？可以写出来吗？](https://github.com/haizlin/fe-interview/issues/644)

#### [在 React 中如何判断点击元素属于哪一个组件？](https://github.com/haizlin/fe-interview/issues/805)
### Life Cycle

#### [函数式组件有没有生命周期？为什么？](https://github.com/haizlin/fe-interview/issues/836)

#### [React16 废弃了哪些生命周期？为什么？](https://github.com/haizlin/fe-interview/issues/794)

#### [React 的 isMounted 有什么作用？](https://github.com/haizlin/fe-interview/issues/799)
#### [React 中修改 prop 引发的生命周期有哪几个？](https://github.com/haizlin/fe-interview/issues/686)

#### [React 中发起网络请求应该在哪个生命周期中进行？为什么？](https://github.com/haizlin/fe-interview/issues/628)

#### [说说 React 的生命周期有哪些？](https://github.com/haizlin/fe-interview/issues/627)















