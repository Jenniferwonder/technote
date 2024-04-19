---
topic: 
type: 
category: Web Design
DateModified: 2024-04-19
Datereviewed: 
reviewed: 
difficulty: 
comment: 
draft: true
title: 02-圣杯式布局-twitter主页
tags:
  - CSS
status: 
DateStarted: 2022-11-11
---

创作时间：2022 年 11 月 13 日

## 效果展示

## 技术栈

- React, Next.js, Tailwind CSS

## 主页

### 技术步骤

- 打开 /index.tsx，删除 main, footer 部分
- 添加三部分组件：**左侧导航栏（Sidebar）、中间内容 (Feed)、右侧信息栏 (Widgets)**

## 左侧导航栏组件（Sidebar）

### 技术步骤

- 加入导航条目组件（SidebarRow）
- 加入图标库：根目录安装 `npm install @heroicons/react@v1`

```tsx
import React from "react";
import {
	BellIcon,
	HashtagIcon,
	BookmarkIcon,
	CollectionIcon,
	DotsCircleHorizontalIcon,
	MailIcon,
	UserIcon,
	HomeIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";
```

### 主容器样式

- flex (display: flex)
- flex-col (flex-direction: column)

### 条目组件信息

```tsx
<SidebarRow Icon={HomeIcon} title="Home" />
<SidebarRow Icon={HashtagIcon} title="Explore" />
<SidebarRow Icon={BellIcon} title="Notifications" />
```

## 导航条目组件（SidebarRow）

### 技术步骤

- 加入 React, {SVGProps} 库
- 定义 **Icon** 类型

```tsx
import React, { SVGProps } from "react";
interface Props {
	Icon: (props: SVGProps<SVGSVGElement) => JSX.Element;
	title: string;
}
```

### 条目主容器样式

- **条目主容器** 通用布局 + 样式 --Flexbox（见附录）

#### 1. 尺寸

- 最大宽度：max-w-fit

#### 2. 动画效果

- 指针：cursor-pointer
- 悬停（背景变色）：hover:bg-gray-100
- 时间：transition-all, duration-200

#### 3. 整体选中：

- group

### 条目内部项目样式

#### 1. 图标尺寸

- 宽高：h-6, w-6

#### 2. 条目文字

- 悬停（文字变色）：**group-hover**:text-twitter（见附录：Tailwind 自定义颜色参数）

```tsx
function SidebarRow({ Icon, title }: Props) {
	return (
		<div className="group flex max-w-fit items-center space-x-2 px-4 py-3 rounded-full cursor-pointer hover:bg-gray-100 transition-all duration-200">
			<Icon className="h-6 w-6" />
			<p className="group-hover:text-twitter">{title}</p>
		</div>
	);
}
export default SidebarRow;
```

## 中间内容组件（Feed）

- 条目主容器通用布局 + 样式 --Flexbox
- 加入刷新图标 `import { RefreshIcon } from "@heroicons/react/outline"`

### 刷新图标样式

#### 1. 宽高

- h-8 w-8

#### 2. 颜色

- text-twitter

#### 3. 周边距

- mr-5 mt-5

#### 4. 动画效果

- 指针：cursor-pointer
- 选中（放大）：active:scale-125
- 悬停（旋转）：hover:rotate-180
- 时间：transition-all duration-500 ease-out

```tsx
<RefreshIcon className="mr-5 mt-5 h-8 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
```

## 右侧信息栏组件（Widgets）

### 搜索条样式

- **条目主容器** 通用布局 + 样式 --Flexbox（见附录）

#### 1. 搜索图标

- 宽高：h-5, w-5
- 颜色：text-gray-400

#### 2. 输入栏

- **尺寸：flex-1**
- 外边框：outline-none
- 背景颜色：bg-transparent

```tsx
<div className="flex items-center space-x-2 rounded-full bg-gray-100 p-3">
	<SearchIcon className="h-5 w-5 text-gray-400" />
	<input
		type="text"
		placeholder="Search Twitter"
		className="flex-1 bg-transparent outline-none"
	/>
</div>
```

## 附录：

### 插件/依赖

#### 1. prettier-plugin-tailwindcss：

`npm install -D prettier prettier-plugin-tailwindcss`

#### 2. react-timeago:

`npm i react-timeago`  
`npm i -d @types/react-timeago`

#### 3. react-hot-toast

`npm i react-hot-toast`

#### 4. next-auth

`npm i next-auth`

### Tailwind 自定义颜色参数（customized color）

- 打开 /tailwind.config.js，设置自定义颜色参数“twitter”

```tsx
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				twitter: "#00ADED",
			},
		},
	},
	plugins: [],
};
```

### 条目主容器通用布局样式 --Flexbox

#### 1. 通用布局

- 布局类型：flex
- 布局方向：flex-col (默认横向)
- 容器内项目居中：items-center
- 容器内项目间距：space-x-2

#### 2. 通用样式

- 容器圆边角：rounded-full
- 容器周边距：px-4, py-3

### 圣杯式网格布局模板 --Grid

#### 1. 主容器

- mx-auto
- lg:max-w-6xl

#### 2. 副主容器

- grid
- grid-cols-9

#### 3. 左边栏

- col-span-2

#### 4. 中部栏

- col-span-7
- lg: col-span-5

#### 5. 右边栏

- lg: col-span-2
- hidden

### 图标参数模板 --Icon

#### 1. 宽高

- h-8 w-8

#### 2. 颜色

- text-twitter

#### 3. 周边距

- mr-5 mt-5

### 动画参数模板 --Animation

#### 1. 指针：

- cursor-pointer

#### 2. 选中

- 放大：active:scale-125

#### 3. 悬停

- 旋转：hover:rotate-180
- 背景变色：hover:bg-gray-100
- 文字变色：group-hover:text-twitter

#### 4. 时间：

- transition-all
- duration-500
- ease-out
