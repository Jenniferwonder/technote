---
title: THE NAVIGATOR OBJECT
tags:
  - JavaScript
topic:
  - Objects
  - BOM
difficulty: 
comment: 
type: D
DateStarted: 2023-08-11
DateModified: 2024-04-18
Datereviewed: 
reviewed: 
status:
  - Snooze
category: Programming
---

# THE NAVIGATOR OBJECT

## navigator 对象的属性通常用于确定浏览器的类型

## Detecting Plug-ins

- Legacy Internet Explorer Plugin Detection
- 检测插件就是遍历浏览器中 可用的插件，并逐个比较插件的名称
  - 除 IE10 及更低版本外的浏览器，都可以通 过 plugins 数组来确定
- 这个数组中的每一项都包含如下属性
  - name：插件名称。
    - name 属性包含识别插件所需的必要信息，尽管不是特别准确
  - description：插件介绍
  - filename：插件的文件名
  - length：由当前插件处理的 MIME 类型数量

## Registering Handlers

- registerProtocolHandler()方法
  - 可以把一个网站注册为处理某种特定类型信息应用程序
  - 可以借助这个方法将 Web 应用程序注册为像桌面软件一样的默认应用程序
- 3 个参数
  - 要处理的协议
  - 处理该协议的 URL
  - 应用名称

## 实现了 NavigatorID 、 NavigatorLanguage 、 NavigatorOnLine 、 NavigatorContentUtils 、 NavigatorStorage 、 NavigatorStorageUtils 、 NavigatorConcurrentHardware、NavigatorPlugins 和 NavigatorUserMedia 接口定义的属性和方法

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737442874.png)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691737457348.png)
