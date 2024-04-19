---
topic: 
category: Web Design
Datereviewed: 
reviewed: 
difficulty: 
comment: 
draft: true
type: Note
title: 01-弹性盒布局方法总结-medium-主页
tags:
  - CSS
status: 
DateStarted: 2022-11-11
DateModified: 2024-04-19
---

创作时间：2022 年 11 月 11 日

## 效果展示

![1108-Blog.gif](https://cdn.nlark.com/yuque/0/2022/gif/29677165/1667878225708-5cec9e05-5afe-48a0-8b92-8bca6cc384bd.gif#averageHue=%23efc800&clientId=u5e673f1f-7ab0-4&crop=0&crop=0&crop=1&crop=1&from=drop&height=254&id=ube1ff0d6&margin=%5Bobject-Object%5D&name=1108-Blog.gif&originHeight=1141&originWidth=2518&originalType=binary&ratio=1&rotation=0&showTitle=false&size=3966181&status=done&style=none&taskId=uc9f6bccc-91d0-4dfe-86ec-bbd40bff4b4&title=&width=561)

## 技术栈

- React, Next.js, Tailwind CSS

## 主页主容器

### 技术步骤

- 打开 /index.tsx，删除 main, footer 部分
- 设置主页主容器、头部参数
- 添加导航条组件

### 参数分析

- 设置 max-w-7xl (max-width: 80rem //1280px)：规定总容器最大宽度
- 运用 mx-auto (margin-left: auto, margin-right: auto)：将容器内各部分居中

```tsx
import Head from "next/head";
import Link from "next/link";
import Header from "../components/Header";
export default function Home() {
	return (
		<div className="max-w-7xl mx-auto">
			<Head>
				<title>Medium Blog</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			{/* Include the Header Component */}
			<Header />
    </div>
}
```

## 弹性盒：两部分平行布局——通用参数

#### 1. 主容器：弹性盒

- flex (display: flex)
- justify-between (justify-items: space-between)
- - 主容器通用参数

#### 2. 内部弹性盒：项目居中与空间

- items-center (align-items: center)
- space-x-5 (margin-left)

## 顶部导航条组件——Header

### 技术步骤：

- 根目录创建 /component 文件夹 > Header.tsx
- 运用 Next.js <Link> 标签组件
  - 页面预加载：**pre-fetch** data from the linked page by default

### 样式步骤

- 运用弹性盒平行布局通用参数
- 左侧按钮容器：inline-flex
- LOGO
  - object-contain (object-fit: contain)：让图片适应容器大小

```tsx
import React from "react";
import Link from "next/link";
function Header() {
	return (
		<header className="flex justify-between p-5 max-w-7xl mx-auto">
			<div className="flex items-center space-x-5">
				{/* Logo */}
				<Link href="/">
					<img
						src="https://links.papareact.com/yvf"
						alt=""
						className="w-44 object-contain cursor-pointer"
					/>
				</Link>
				<div className="hidden md:inline-flex items-center space-x-5">
					<h3>About</h3>
					<h3>Contact</h3>
					<h3 className="text-white bg-green-600 px-4 py-1 rounded-full">
						Follow
					</h3>
				</div>
			</div>
			<div className="flex items-center space-x-5 text-green-600">
				<h3>Sign In</h3>
				<h3 className="border px-4 py-1 rounded-full border-green-600">
					Get Started
				</h3>
			</div>
		</header>
	);
}
export default Header;
```

## 主图部分——Banner

### 样式步骤

- 运用弹性盒平行布局通用参数
- 调整容器间空间参数
  - space-y-5 (margin-top: 1.25rem; /_ 20px _/)

```tsx
{
	/* Banner */
}
<div className="flex justify-between items-center bg-yellow-400 border-y border-black py-10 lg:py-0">
	<div className="px-10 space-y-5">
		<h1 className="text-6xl max-w-xl font-serif">
			<span className="underline decoration-black decoration-4">Medium</span> is
			a place to write, read and connect
		</h1>
		<h2>
			It's easy and free to post your thinking on any topic and connect with
			millions of readers.
		</h2>
	</div>
	<div>
		<img
			className="hidden md:inline-flex h-32 lg:h-full"
			src="https://accountabilitylab.org/wp-content/uploads/2020/03/Medium-logo.png"
			alt=""
		/>
	</div>
</div>;
```
