---
title: History Object
Topic:
  - Objects
  - BOM
Type: D
tags:
  - JavaScript
Reviewed:
Difficulty:
Comment:
DateStarted: 2023-08-11
DateModified: 2024-03-02
DateReviewed:
DateDue:
status:
  - Snooze
aliases:
  - History Object
DateDo: 2023-08-11T00:00:00.000+08:00
DateDone: 2023-08-11T00:00:00.000+08:00
---

# History Object

- Navigation
  - go()方法
  - ![](./z-Assets/1691737777316.png)
  - 负值表示在历史记录中后退
  - 正值表示在历史记录中前进
  - 有两个简写方法
  - back()
  - forward()
- History State Management
  - 现代 Web 应用程序开发中最难的环节之一就是历史记录管理
  - hashchange 事件
    - hashchange 会在页面 URL 的散列变化时被触发，开发者可以在此时执行某些操作
  - HTML5 也为 history 对象增加了方便的状态管理特性
  - 状态管理 API 则可以让开发者改变浏览器 URL 而不会加载新页面
    - history.pushState()
    - 3 个参数
      - 一个 state 对象
      - 一个新状态的标题
      - 一个（可选的）相对 URL
    - pushState()方法执行后，状态信息就会被推到历史记录中，浏览器地址栏也会改变以反映新的相 对 URL
    - ![](./z-Assets/1691738032094.png)
  - popstate 事件
  - 单击“后退” 按钮，就会触发
  - event.state
  - 初次加载时没有状态
  - 会为 null
  - history.state
  - 获取当前的状态对象
  - replaceState()
  - 更新状态
  - 更新状态不会创建新历史记录，只会覆盖当前状态
- 表示当前窗口首次使用以来用户的导航历史记录
- history 是 window 的属性
- 每个 window 都有自己的 history 对象
- 这个对象不会暴露用户访问过的 URL， 但可以通过它在不知道实际 URL 的情况下前进和后退
