---
Title: WeakMap
Type: D
DateStarted: 2023-08-06
DateModified: 2023-11-28
status: Snooze
mindmap-plugin: basic
LeadTime: "1"
Cards-D: "0"
Page-D: "6"
DateDo: 2023-08-09T00:00:00.000+08:00
DateDone: 2023-08-09T00:00:00.000+08:00
Pages: 6
Up:
  - - C06-Collection Reference Type-集合引用类型
Pomo: 1
EST: "-19577"
Topic:
  - DS+
---

# WeakMap

## <mark class="hltr-gray ">" Basic API "</mark> [Page 41 ](zotero://open-pdf/library/items/J32BLJDJ?page=41&annotation=DCQ8RF2D)

- const wm = new WeakMap(); [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ce95e20b-da2c-2742)
- 构造函数可以接收一个可迭代对象，其中需要包含键/值对数组 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ad4837e6-7e8a-be7b)
- 使用嵌套数组初始化弱映射 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=960ebd95-8bc7-4550)
- 只要有一个键无效就会抛出错误，导致整个初始化失败 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b805898b-ab39-5bc6)
- WeakMap 是 Map 的“兄弟”类型，其 API 也是 Map 的子集 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=81c3f0fb-7917-98d2)
- WeakMap 中的“weak”（弱）， 描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=69ce868b-65bf-3b1e)
- set() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b34390f2-5512-a741)
- get() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1a8da0b3-a31b-f430)
- has() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b2dc46cf-1436-f47e)
- delete() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=82eaf21a-64db-b5d0)

## <mark class="hltr-gray ">" Weak Keys "</mark> [Page 42 ](zotero://open-pdf/library/items/J32BLJDJ?page=42&annotation=SKAE6CBY)

- 这些键不属于正式的引用， 不会阻止垃圾回收 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=58b7e650-abf3-7a32)
- 弱映射中值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c2a13319-79a3-1623)
- 只要键存在，键/值 对就会存在于映射中，并被当作对值的引用，因此就不会被当作垃圾回收 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f6d84254-a9b1-fcbf)

## <mark class="hltr-gray ">" Non-Iterable Keys "</mark> [Page 43 ](zotero://open-pdf/library/items/J32BLJDJ?page=43&annotation=TX9B6Y76)

- clear() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=bac38261-eb00-1f2c)
  - 。WeakMap 确实没有这个方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=41ccee69-26e1-1ba4)
- WeakMap 中的键/值对任何时候都可能被销毁 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9356ea33-05ff-481a)

## <mark class="hltr-gray ">" Utility "</mark> [Page 43 ](zotero://open-pdf/library/items/J32BLJDJ?page=43&annotation=KCAVML69)

- <mark class="hltr-gray ">" Private Variables "</mark> [Page 43 ](zotero://open-pdf/library/items/J32BLJDJ?page=43&annotation=U4HRQS9G)
  - 私有变量 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9efe697f-dfb1-27a2)
  - 用一个闭包把 WeakMap 包装起来，这样就可以把弱映 射与外界完全隔离开了 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=db242c89-4e2e-1b39)
  - 虽然这防止了前面提到的访问，但 整个代码也完全陷入了 ES6 之前的闭包私有变量模式 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=7ab3a170-6305-d5cd)
- <mark class="hltr-gray ">" DOM Node Metadata "</mark> [Page 45 ](zotero://open-pdf/library/items/J32BLJDJ?page=45&annotation=44FMIZUR)
  - DOM 节点元数据 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=1248dc3b-e504-6983)
  - 因为 WeakMap 实例不会妨碍垃圾回收，所以非常适合保存关联元数据 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f3fb6ad1-6f8d-483d)
  - ![[1691559775005.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3082729e-8050-93f4)
  - ![[1691559786052.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=0b5854d1-32fd-7fca)
