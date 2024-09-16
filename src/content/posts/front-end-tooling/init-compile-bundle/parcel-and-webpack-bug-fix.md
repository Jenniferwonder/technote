---
topic: 
type: 
category: Front-End Tooling
Datereviewed: 
reviewed: 
difficulty: 
comment: 
title: parcel-and-webpack-bug-fix
tags:
  - Bundler
status: 
DateStarted: 2022-10-13
DateModified: 2024-09-14
draft: true
---

## Issue 1: Live Reload

### **🐛**Bugs

🐛Parcel dev-server unable to live-load the change made in src/index.js.  
🐛Webpack dev-server unable to live-load the change made in src/index.js.

- "webpack":"^5.74.0",
-     "webpack-cli":"^4.10.0",
-     "webpack-dev-middleware":"^5.3.3",
-     "webpack-dev-server":"^4.11.1"
- node: v16.17.1
- ubuntu
- VS Code> wsl

### ❓Possible Causes

- webpack-dev-server 相关配置问题
  - 比对 **官方文档、指南**，配置 webpack.config.js> dev-server❌
- webpack 其他配置影响
- node, sass 等其他 dependencies 影响
  - 搜索相关问题解决方案：**Stackoverflow, Github, Google**...❌
  - 终极方案：采取与官方同样的文件架构与代码，一步一步尝试比对 ❌
- ❓Clue:
  - Parcel 与 Webpack 均能成功打包编译文件，服务器首次加载均运行正常
  - 但 **服务器均无法实时更新本地文件的修改**

### 🛠️Log: First Loading Fix 10:00-10:20, Sept 29

✅Run 'npm start', the first load is working fine and update the change made in 'console.log'!  
❌Unable to live update change in src/index.js  
![image.png](https://cdn.nlark.com/yuque/0/2022/png/29677165/1664416973702-68e65c7a-a3cc-4a9c-90bf-508210fb0155.png#clientId=ucbd68a98-1ce1-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=172&id=UWPpu&margin=%5Bobject-Object%5D&name=image.png&originHeight=343&originWidth=1833&originalType=binary&ratio=1&rotation=0&showTitle=false&size=51378&status=done&style=none&taskId=u92d2cb40-08c8-4134-83c5-c1bb7e82909&title=&width=916.5)

#### 1. webpack.config.js

```jsx
"use strict";
const path = require("path");
module.exports = {
	//   context: __dirname,
	mode: "development",
	entry: {
		index: "./src/index.js",
	},
	devtool: "source-map",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	//   stats: {
	//     colors: true,
	//   },
	devServer: {
		static: "./dist",
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					//'MiniCssExtractPlugin.loader',
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
};
```

#### 2. server.js

```jsx
"use strict";
const Webpack = require("webpack");
const WebpackDevServer = require("../lib/Server");
const webpackConfig = require("./webpack.config");
const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(devServerOptions, compiler);
server.startCallback(() => {
	console.log("Starting server on http://localhost:8080");
});
```

#### 3. package.json

```jsx
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack serve --open",
    "server": "node server.js",
    "build": "webpack"
  },
```

### 📑Reference

### 😊Real Cause and Solution

- WSL Ubuntu 实时监测读取本地文件的设置与权限问题
  - 用 Windows CMD 运行 NPM，以及 webpack-dev-server
- 最终同样的配置与代码，通过 Windows CMD，webpack-dev-server 成功运行，并能实时加载更新后的本地代码

## Issue 2: Webpack Compile and Live Reload Project

### ❓Webpack How-to:

- Use Webpack to build and live-reload page built by the following Tech-stack:
  - **SASS**, CSS, HTML and JS, with IMG (svg. and png.) files
- Pls. Enable Webpack to function as follow:
  - Generate an HTML file in ./dist folder based on a template and update changes
  - Generate required assets/img folder with required imgs
  - Compile all files needed in the project and live-reload changes
  - Automatically clean useless files in ./dist

### 📑Reference

[Load HTML and Images with Webpack](https://requestmetrics.com/web-performance/optimizing-static-html-images-webpack)

### 😊Solution

#### 1. 🛠️Package.json

```jsx
{
  "name": "forkify-test",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    //"test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --mode development",
    //"server": "node server.js",
    "build": "webpack --mode production"
  },
  "author": "",
  "license": "ISC",
  "keywords": [],
  "devDependencies": {
    "css-loader": "^6.7.1",
    //"express": "^4.18.1",
    "html-loader": "^4.2.0",
    "html-webpack-plugin": "^5.5.0",
    "image-webpack-loader": "^8.1.0",
    //"mini-css-extract-plugin": "^2.6.1",
    "node-sass": "^7.0.3",
    "sass": "^1.55.0",
    "sass-loader": "^13.0.2",
    "style-loader": "^3.3.1",
    //"url-loader": "^4.1.1",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    //"webpack-dev-middleware": "^5.3.3",
    "webpack-dev-server": "^4.11.1"
  },
  "dependencies": {
    "lodash": "^4.17.21"
  },
  "main": "server.js",
  "description": ""
}
```

#### 2. 🛠️Webpack Configuration

```jsx
const path = require("path");
const fs = require("fs");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// Look for .html files
var htmlFiles = [];
var directories = ["src"];
while (directories.length > 0) {
	var directory = directories.pop();
	var dirContents = fs
		.readdirSync(directory)
		.map((file) => path.join(directory, file));
	htmlFiles.push(...dirContents.filter((file) => file.endsWith(".html")));
	directories.push(
		...dirContents.filter((file) => fs.statSync(file).isDirectory())
	);
}
module.exports = {
	//   context: __dirname,
	mode: "development",
	entry: "./src/js/index.js",
	devtool: "source-map",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		// publicPath: '/img/',
	},
	plugins: [
		// Build a new plugin instance for each .html file found
		...htmlFiles.map(
			(htmlFile) =>
				new HtmlWebpackPlugin({
					template: htmlFile,
					filename: htmlFile.replace(path.normalize("src/"), ""),
					inject: true,
				})
		),
	],
	devServer: {
		// static: { directory: path.join(__dirname, 'dist') },
		// watchFiles: ['./src/**/*.*'],
		static: "./dist",
		watchFiles: "src/**/*.jsx",
		hot: true,
		compress: true,
		port: 8080,
		client: {
			progress: true,
		},
		liveReload: true,
	},
	module: {
		rules: [
			{
				test: /\.s[ac]ss$/i,
				use: [
					"style-loader",
					//'MiniCssExtractPlugin.loader',
					"css-loader",
					"sass-loader",
				],
			},
			{
				test: /\.html$/i,
				use: "html-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "img/[name]-[hash][ext]",
				},
			},
		],
	},
};
```

#### 3. 🛠️HTML Src Template

```jsx
<!--> Customized Content with no need to add any script src<-->
```
