---
title: Timer Functions-计时器函数
tags:
  - JavaScript
topic:
  - Function
  - BOM
type: D
status: 
DateStarted: 2022-12-14
DateModified: 2024-04-18
Datereviewed: 2024-04-17
reviewed: 1
difficulty: 
comment: 
aliases:
  - Timer Functions-计时器函数
linter-yaml-title-alias: Timer Functions-计时器函数
category: Programming
---

# Timer Functions-计时器函数

#### 1. setTimeout(`callback function`, `mileseconds`, `arg1`, `arg2`)

- to execute a function after certain mileseconds
- setTimeout、setInterval 最短时长为 4ms

```js
setTimeout(
	(ing1, ing2) => console.log(`Here are ${ing1} and ${ing2}`),
	3000,
	olives,
	spinach
);
//after 3000 mileseconds/ 3 seconds, the console will execute console.log
```

#### 2. clearTimeout(setTimeout())

- to not execute the setTimeout function

#### 3. setInterval(`callback function`, `mileseconds`)

- to repeat executing a function after a certain mileseconds
- setTimeout、setInterval 最短时长为 4ms

#### 4. clearInterval(setInterval())

- to stop executing the setInterval function

## 定时器不准的原因

#### 1. setTimeout/setInterval 的执行时间并不是确定的

- setTimeout/setInterval 是宏任务，根据事件轮询机制，其他任务会阻塞或延迟 js 任务的执行
- 考虑极端情况，假如定时器里面的代码需要进行大量的计算，或者是 DOM 操作，代码执行时间超过定时器的时间，会出现定时器不准的情况

#### 2. setTimeout/setInterval 动画卡顿

不同设备的屏幕刷新频率可能不同， setTimeout/setInterval 只能设置固定的时间间隔，这个时间和屏幕刷新间隔可能不同

setTimeout/setInterval 通过设置一个间隔时间，来不断改变图像实现动画效果，在不同设备上可能会出现卡顿、抖动等现象

#### 3. requestAnimationFrame

**`requestAnimationFrame` 是浏览器专门为动画提供的 API**  
requestAnimationFrame 刷新频率与显示器的刷新频率保持一致，使用该 api 可以避免使用 setTimeout/setInterval 造成动画卡顿的情况  
requestAnimationFrame：告诉浏览器在下次重绘之前执行传入的回调函数(通常是操纵 dom，更新动画的函数)

#### 4. setTimeout、setInterval、requestAnimationFrame 三者的区别

**1）引擎层面**

setTimeout 属于 `JS引擎` ，存在事件轮询  
requestAnimationFrame 属于 `GUI引擎`  
`JS引擎与GUI引擎`是互斥的，也就是说 GUI 引擎在渲染时会阻塞 JS 引擎的计算

这样设计的原因，如果在 GUI 渲染的时候，JS 同时又改变了 dom，那么就会造成页面渲染不同步

**2）性能层面**

当页面被隐藏或最小化时，定时器 setTimeout 仍会在后台执行动画任务

当页面处于未激活的状态下，该页面的屏幕刷新任务会被系统暂停，requestAnimationFrame 也会停止

#### 5. setTimeout 模拟实现 setInterval

```js
// 使用闭包实现
function mySetInterval(fn, t) {
	let timer = null;
	function interval() {
		fn();
		timer = setTimeout(interval, t);
	}
	interval();
	return {
		// cancel用来清除定时器
		cancel() {
			clearTimeout(timer);
		},
	};
}
```

#### 6. setInterval 模拟实现 setTimeout

```js
function mySetTimeout(fn, time) {
	let timer = setInterval(() => {
		clearInterval(timer);
		fn();
	}, time);
}

// 使用
mySetTimeout(() => {
	console.log(1);
}, 2000);
```
