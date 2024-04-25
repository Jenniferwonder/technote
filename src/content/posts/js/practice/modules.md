---
status: 
type: D
tags:
  - JavaScript
category: Programming
reviewed: 1
difficulty: 
comment: 
draft: true
DateStarted: 2023-07-14
DateModified: 2024-04-25
aliases:
  - Modules
Datereviewed: 2024-04-25
topic:
  - Practice
title: Modules
linter-yaml-title-alias: Modules
---

# Modules

> [juejin.cn/post/6844903959283367950](https://juejin.cn/post/6844903959283367950)

- 命令
  - **export**：规定模块对外接口
    - **默认导出**：`export default Person`(导入时可指定模块任意名称，无需知晓内部真实名称)
    - **单独导出**：`export const name = "Bruce"`
    - **按需导出**：`export { age, name, sex }`(推荐)
    - **改名导出**：`export { name as newName }`
  - **import**：导入模块内部功能
    - **默认导入**：`import Person from "person"`
    - **整体导入**：`import * as Person from "person"`
    - **按需导入**：`import { age, name, sex } from "person"`
    - **改名导入**：`import { name as newName } from "person"`
    - **自执导入**：`import "person"`
    - **复合导入**：`import Person, { name } from "person"`
  - **复合模式**：`export命令`和`import命令`结合在一起写成一行，变量实质没有被导入当前模块，相当于对外转发接口，导致当前模块无法直接使用其导入变量
    - **默认导入导出**：`export { default } from "person"`
    - **整体导入导出**：`export * from "person"`
    - **按需导入导出**：`export { age, name, sex } from "person"`
    - **改名导入导出**：`export { name as newName } from "person"`
    - **具名改默认导入导出**：`export { name as default } from "person"`
    - **默认改具名导入导出**：`export { default as name } from "person"`
- 继承：`默认导出`和`改名导出`结合使用可使模块具备继承性
- 设计思想：尽量地静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量
- 严格模式：ES6 模块自动采用严格模式(不管模块头部是否添加`use strict`)

### ESM 和 CommonJS 的区别

ESM（ECMAScript Modules）和 CommonJS 是 JavaScript 中两种不同的模块系统。它们都允许将代码拆分成可重用的模块，并在需要时导入这些模块。尽管它们都实现了相似的功能，但它们之间存在一些关键差异：

1. 语法：ESM 和 CommonJS 使用不同的语法来导入和导出模块。

   - ESM 使用 `import` 和 `export` 关键字
   - CommonJS 使用 `require` 和 `module.exports`关键字

2. 运行时加载与静态加载：

   - CommonJS 是**运行时加载**，这意味着模块在运行时解析和加载。因此，在运行时可以动态修改模块和依赖关系。
   - ESM 是**静态加载**，这意味着模块在编译时解析和加载。这允许更好的优化，如代码消除和更快的加载速度，但不允许在运行时动态修改模块。

3. 作用域：ESM 和 CommonJS 在处理变量作用域方面有所不同。

   - ESM 使用**模块作用域**，每个模块具有自己的顶级作用域。在模块内声明的变量不会污染全局作用域。
   - CommonJS 使用**文件作用域**，但与 ESM 不同，CommonJS 模块可以通过 `global` 对象访问全局作用域。

4. 循环依赖：ESM 和 CommonJS 处理循环依赖的方式不同。

   - ESM 可以更好地处理循环依赖，因为模块是静态加载的。在循环依赖中，导入的值可能是不完整的，但不会导致错误。
   - CommonJS 在处理循环依赖时可能会遇到问题，因为模块是运行时加载的。这可能导致在循环依赖中的模块中获得一个不完整的对象。

5. 兼容性和使用场景：

   - CommonJS 主要用于 Node.js 环境，因为它是 Node.js 的原生模块系统。虽然现代 Node.js 版本也支持 ESM，但很多旧的 Node.js 代码仍使用 CommonJS。然而，许多新的 Node.js 项目逐渐采用 ESM。
   - ESM 通常用于现代 Web 开发，因为大多数现代浏览器原生支持 ESM。在使用构建工具（如 Webpack、Rollup 或 Parcel）时，ESM 也提供了更好的优化和打包能力。

6. 实时绑定与值拷贝：

   - ESM 使用**实时绑定**，当导入的值发生更改时，导入模块的值也会跟着更改。这意味着导入的值始终保持最新。
   - CommonJS 使用**值拷贝**，当模块被导入时，值被复制到导入模块。这意味着在导入模块中，值的更改不会反映到原始模块，导入的值在导入时是固定的。

7. 导出值：

   - ESM 导出值是**映射关系**，**可读，不可修改**，但可通过导出的函数修改导出的值。
   - CoomonJS 导出**值的拷贝**，**可以修改导出的值**。

8. export 使用：

   - ESM export 和 export default 支持一起使用。
   - CoomonJS module.exports 和 exports 不支持一起使用，会被覆盖。

总结一下，ESM 和 CommonJS 的主要区别在于它们的语法、加载机制、作用域、循环依赖处理、兼容性和使用场景以及实时绑定与值拷贝。尽管它们在某些方面有所不同，它们都是为了解决 JavaScript 模块化编程的问题。

- UNDERSTANDING THE MODULE PATTERN

- Module Identifiers

- Module Dependencies

- Module Loading

- Entry Points

- Asynchronous Dependencies

- Programmatic Dependencies

- Static Analysis

- Circular Dependencies

- IMPROVISING MODULE SYSTEMS

- WORKING WITH PRE-ES6 MODULE LOADERS

- CommonJS

- Asynchronous Module Definition "

- Universal Module Definition "

- Module Loader Deprecation "

- WORKING WITH ES6 MODULES "

- Module Tagging and Definition "

- Module Loading "

- Module Behavior "

- Module Exports "

- Module Imports "

- Module Passthrough Exports "

- Worker Modules "

- Backwards Compatibility "
