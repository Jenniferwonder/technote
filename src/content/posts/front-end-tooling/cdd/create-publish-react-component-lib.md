---
title: Create & Publish Component Library (React)
type: 
tags:
  - React
topic:
  - CDD
Datereviewed: 
Type: D
DateStarted: 2024-01-16
DateModified: 2024-04-19
reviewed: 
status: 
difficulty: 
comment: 
aliases:
  - Create & Publish Component Library (React)
  - React CDD
category: Front-End Tooling
linter-yaml-title-alias: Create & Publish Component Library (React)
---

# Create & Publish Component Library (React)

## 💡Goal

- React 组件化和 hooks 封装 (复用)
- How to build reusable components?
- How to use React Component, Hooks?
- 📌React Component Lib

## Reference

- [How to Create and Publish a React Component Library - DEV Community](https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe)
- [How To Create & Publish A React Library (rehansattar.dev)](https://rehansattar.dev/how-to-create-and-publish-a-react-library)

## Lib Project Init

#### Install React, TypeScript

- ✅`npm install react typescript @types/react`

#### (Optional)

- [create-react-library - npm (npmjs.com)](https://www.npmjs.com/package/create-react-library)
  - `npx create-react-library my-react-library`
- 🏷️[Project-Init](Tooling/Init-Compile-Bundle/Project-Init)

## Config TypeScript

- 🏷️[TypeScript](Tooling/TypeScript/TypeScript)
- Create `tsconfig.json`

```ts
"skipLibCheck": true /* Skip type checking all .d.ts files. */,
"jsx": "react", // Add support to jsx syntax
"module": "ESNext",
"declaration": true,
"sourceMap": true,
"outDir": "dist",
"moduleResolution": "node",
"allowSyntheticDefaultImports": true,
"emitDeclarationOnly": true
```

## Develop your React components

> [React](React/Private/O-React)

- Create `index.ts` in each component directory

```ts
export { default } from "./Button";
export { default as Button } from "./Button";
export * from "./components";
```

## Testing

> 🏷️[Testing](Tooling/Testing/Testing) -->🏷️[Storybook](Storybook) --> 🏷️[Cypress](Tooling/Testing/Cypress) / [Jest](Jest)/ [React Testing Library](React-Testing-Library)

### Jest & Babel

> [Configuring Jest · Jest](https://jestjs.io/docs/configuration#testenvironment-string)

#### Install Jest

`npm install @testing-library/react jest @types/jest @testing-library/jest-dom --save-dev`

#### Install Babel to add test support for .jsx and .tsx

`npm install @babel/core @babel/preset-react @babel/preset-typescript @babel/preset-env --save-dev`

#### 🐛Note

##### Common JS 兼容问题

- 把`.js` 后缀改为 `.cjs`
  - [jest.config.cjs](file:///e%3A/SynologyDrive/Codespace/full-stack/front-end/component-dev-practice/react-component-lib/jest.config.cjs)
  - [babel.config.cjs](file:///e%3A/SynologyDrive/Codespace/full-stack/front-end/component-dev-practice/react-component-lib/babel.config.cjs)
- Reference
  - [node.js - Error while loading config - You appear to be using a native ECMAScript module configuration file - Stack Overflow](https://stackoverflow.com/questions/61146112/error-while-loading-config-you-appear-to-be-using-a-native-ecmascript-module-c)

##### 测试环境依赖问题

```shell
As of Jest 28 "jest-environment-jsdom" is no longer shipped by default, make sure to install it separately.
```

> `npm install -D jest-environment-jsdom`

并在 `jest.config.cjs` 添加：

```js
module.exports = {
	testEnvironment: "jsdom",
};
```

- Reference
  - [javascript - Upgrading Jest to v29 - Error Test environment jest-environment-jsdom cannot be found - Stack Overflow](https://stackoverflow.com/questions/72013449/upgrading-jest-to-v29-error-test-environment-jest-environment-jsdom-cannot-be)

##### non-JS module 识别问题

![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-jest-config-bug.png)

> `npm install -D identity-obj-proxy`

并在 `jest.config.cjs` 添加：

```js
module.exports = {
	moduleNameMapper: {
		".(css|less|scss)$": "identity-obj-proxy",
	},
};
```

### Storybook

#### Install

`npx sb init`  
`npm run storybook`

#### 🐛Note

##### storybook not able to detect the right builder

- Choose `vite`
- Reference
  - [\[Documentation\]: Rollup Not Supported · Issue #25206 · storybookjs/storybook · GitHub](https://github.com/storybookjs/storybook/issues/25206)

## Documentation

- 💡to document your components and generate a live style guide
  - [Learn React Styleguidist | React Styleguidist (react-styleguidist.js.org)](https://react-styleguidist.js.org/learn)

## Compilers and Bundlers

> [Compilers and Bundlers](Compilers-and-Bundlers)  
> [为什么说 rollup 比 webpack 更适合打包库 - 知乎](https://zhuanlan.zhihu.com/p/340255085)  
> [打包工具 rollup.js 入门教程 - 阮一峰的网络日志](https://www.ruanyifeng.com/blog/2022/05/rollup.html)

### Rollup Install & Config

#### Install Rollup

- ✅`npm install rollup @rollup/plugin-commonjs @rollup/plugin-node-resolve @rollup/plugin-typescript rollup-plugin-dts --save-dev`
- ✅`npm install rollup-plugin-postcss --save-dev` ^y1ky13

#### 🐛 npm 报错 (network error)：

```shell
npm ERR! code ETIMEDOUT
npm ERR! errno ETIMEDOUT
npm ERR! network request to https://registry.npmjs.org/rollup-plugin-postcss failed, reason:
npm ERR! network This is a problem related to network connectivity.
npm ERR! network In most cases you are behind a proxy or have bad network settings.
npm ERR! network
npm ERR! network If you are behind a proxy, please make sure that the
npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
```

退出所有代理，重试即可  
查看是否有代理

- `npm config get proxy`
- `npm config get https-proxy`

#### 🟨To check

```
// "@babel/preset-env": "^7.23.9",
// "@babel/preset-react": "^7.23.3",
// "@rollup/plugin-babel": "^6.0.4",
// "@rollup/plugin-commonjs": "^25.0.7",
// "@rollup/plugin-node-resolve": "^15.2.3",
// "@rollup/plugin-typescript": "^11.1.6",
// "rollup": "^2.79.1",
// "rollup-plugin-dts": "^6.1.0",
// "rollup-plugin-terser": "^7.0.2",
```

#### Configure Rollup for bundling

- Create `rollup.config.js`:
  - [rollup.config.js](file:///e%3A/SynologyDrive/Codespace/full-stack/front-end/component-dev-practice/react-component-lib/rollup.config.js)
- Add plugin to support css file
  - `import postcss from "rollup-plugin-postcss";`
  - npm install the plugin: [Create & Publish Component Library (React) > ^y1ky13](Front-End/CDD/README#^y1ky13)

## Package management

### Update `package.json`

- metadata + scripts
  - name, version, description, keywords, author

```json
{
	"main": "dist/cjs/index.js",
	"module": "dist/esm/index.js",
	"files": ["dist"],
	"types": "dist/index.d.ts",
	"type": "module",
	"scripts": {
		"rollup": "rollup -c"
	}
}
```

## Publish the Library

### Opt-1: Publish to NPM & Install with NPM

- Create an account
- Login
- Publish your package
- Package versioning and update
  - Semantic versioning
  - Publish updates
- 🏷️[O-NodeJS](Back-End/Node.js/O-NodeJS)

### Opt-2: Publish to GitHub & Install with NPM

#### Create a git repo

> If you want to build a library for internal use, create a private repo

- `.gitinore`
  - node_modules
  - dist
- Update `package.json`
  - `"name": "@jenniferwonder/my-react-component-lib"`
  - `"publishConfig":{"registry": "https://npm.pkg.github.com/jenniferwonder"}`

#### Create `.npmrc` file

```npmrc
registry=https://registry.npmjs.org/
@jenniferwonder:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=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
```

#### Generate GitHub Tokens

- https://github.com/settings/tokens
- Select permission
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/z-GitHub-Token-Permission.png)
- Token for my-react-component-lib (2024-02-28, 7 days)
  - `...`

#### Publish Lib

- `npm publish`

## Consume your lib

### Init a React App (or use your existing React App)

- `npx create-react-app my-app --template typescript`
- npm install your-package
- import and use components in your projects

### Consume a private library

- Get the Token with permission needed
- create an `.npmrc` file same as that of the library: [Create & Publish Component Library (React) > Create npmrc file](Front-End/CDD/README#Create-npmrc-file)
- install the package: `npm install @jenniferwonder/my-react-component-lib` ^4nn4c5

### Consume a public library

- [Create & Publish Component Library (React) > ^4nn4c5](Front-End/CDD/README#^4nn4c5)

## CI-CD

## Design Tokens to the reuse

## Use Node.js to write custom scripts

## Atomic Design with React

## Prettier, ESLint and Stylelint
