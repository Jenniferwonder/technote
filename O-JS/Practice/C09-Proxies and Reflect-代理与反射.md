---
Title: C09-Proxies and Reflect-代理与反射
Type: O
DateStarted: 2023-07-14
DateModified: 2023-08-10
mindmap-plugin: basic
status: Snooze
aliases: C09
LeadTime: "1"
Page-D: "26"
Cards-D: "0"
DateDo: 2023-08-10T00:00:00.000+08:00
DateDone: 2023-08-10T00:00:00.000+08:00
Pages: 26
Pomo: 1
EST: "-19578"
Topic:
  - Function
---

# [[O-JS]] C09-Proxies and Reflect-代理与反射

## 代理基础 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=fdf62bd0-6b34-2aee)

- 特点
  - ECMAScript 6 新增 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=bbac9c4c-bb2d-cef2)
  - 代理是目标对象的抽象。从很多方面看，代理类似 C++指针，因为它可以 用作目标对象的替身，但又完全独立于目标对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1780659f-cb80-6fd5)
- 功能
  - 提供了拦截并向基本操作嵌入额外行为的能力 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c746564b-1495-7b06)
- 创建空代理 (Passthrough Proxy) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1d411aae-c9a0-736a)
  - 代理是使用 Proxy 构造函数创建的 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6eb47663-38f5-8d2b)
    - 两个参数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5618219e-7ac1-ad60)
      - 目标对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=540d4e0b-bc13-f21b)
      - 处理程序对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=0532f1ab-5aa6-d2ff)
    - 缺 少其中任何一个参数都会抛出 TypeError [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=604c6bc4-41fb-a9d6)
  - 最简单的代理是空代理，即除了作为一个抽象的目标对象，什么也不做。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ce9c40e8-8e42-d342)
  - 在代理对象上执行的任何操作实际上都会应用到目标对象。唯一可感知的不同 就是代码中操作的是代理对象。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e66375f5-4931-dde2)
  - ![[1691640571936.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1fd5a820-eb04-5efc)
- 定义捕获器 (Traps) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=29c38d6b-50ed-1e7b)
  - 使用代理的主要目的是可以定义捕获器（trap） [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=fae3c413-9741-3a47)
    - 就是在处理程序对象中定义的“基本操作的 拦截器” [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a226f4c5-da08-f4c4)
    - 每个捕获器都对应一种基本操作，可以直接 或间接在代理对象上调用 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=47bb1b51-0027-45e8)
  - 每次在代理对象上调用这些基本操作时，代理可以在这些操作传播到目标对 象之前先调用捕获器函数，从而拦截并修改相应的行为 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=72fe8b27-7ae4-efae)
    - ![[1691640762307.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9250b292-e187-3036)
- 捕获器参数 (Trap Parameters) 和反射 API (Reflect API) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f2b41a8c-8bbc-8d80)
  - 处理程序对象中所有可以捕获的方法都有对应的反射（Reflect）API 方法。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=bac01039-75c4-f1cc)
    - 与捕获器拦截 的方法具有相同的名称和函数签名，而且也具有与被拦截方法相同的行为。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5e3f4d7d-961b-6b56)
  - 创建一个可以捕获所有方法，然后将每个方法转发给对应反射 API 的空代理 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4e510858-a049-3357)
    - ![[1691640998045.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d5d2a857-b9b4-295b)
- 捕获器不变式 (Trap Invariants) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=790f45e0-8725-7e7f)
  - 使用捕获器几乎可以改变所有基本方法的行为，但也不是没有限制 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=fa578a2a-f4c6-434d)
  - 捕获处理程序的行为必须遵循“捕获器不变式” （trap invariant） [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e0edb10f-de1d-6457)
- 可撤销代理 (Revocable Proxies ) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=dbdd0e2d-7968-8e50)
  - Proxy 也暴露了 revocable()方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8484d1b7-e61a-a082)
- 实用反射 API - Utility of the Reflect API  [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=aed2d42b-ae63-824e)
  - 反射 API 与对象 API [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ea5d579d-c517-3d76)
  - 状态标记 (Status Flags) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b368c11d-af50-cd23)
  - 用一等函数替代操作符-Supplanting Operators with First-Class Functions  [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b75adbe4-4031-73d3)
  - 安全地应用函数-Safe Function Application [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=2e69556a-d6f9-6d75)
- 代理另一个代理-Proxying a Proxy [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a4126f1d-be8a-784f)
- 代理的问题与不足-Proxy Considerations and Shortcomings [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=cce52c73-15d5-c211)
  - 代理中的 this [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=82561226-bf9e-b96b)
  - 代理与内部槽位 (Internal Slots) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=bda9506e-55d0-e6c4)

## 代理捕获器与反射方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b5be8ddf-d679-dd8c)

- get() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=329a18d7-320d-d8b4)
- set() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8c559755-c591-8592)
- has() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=5d0575fa-9600-b6ca)
- defineProperty() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=480640cf-2cc2-483e)
- getOwnPropertyDescriptor() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=67288628-ae2d-721f)
- deleteProperty() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=976c6cdd-a543-1ce1)
- ownKeys() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b3399a6d-160f-edf6)
- setPrototypeOf() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e033788b-8244-57fd)
- getPrototypeOf() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b1f03a44-7422-24e6)
- isExtensible() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=816f700f-14b0-0ed8)
- preventExtensions() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=85448d38-1c10-088a)
- apply() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f7e173ab-ba8d-54dd)
- construct() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=92c986bd-b56f-9ac1)

## 代理模式 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=40d691cf-69e4-e41f)

- 跟踪属性访问-Tracking Property Access [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e6067b71-2145-55ad)
- 隐藏属性-Hidden Properties [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=84cff50f-3eca-2620)
- 属性验证-Property Validation [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c4d23c8b-e31e-cacf)
- 函数与构造函数参数验证 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=28bcab6a-fd1a-1087)
- 数据绑定与可观察对象-Data Binding and Observables
