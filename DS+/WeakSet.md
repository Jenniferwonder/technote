---
Title: WeakSet
Type: D
DateStarted: 2023-08-06
DateModified: 2023-11-28
status: Snooze
mindmap-plugin: basic
LeadTime: "1"
Cards-D: "0"
Page-D: "7"
DateDo: 2023-08-09T00:00:00.000+08:00
DateDone: 2023-08-09T00:00:00.000+08:00
Pages: 7
Pomo: 1
Up:
  - - C06-Collection Reference Type-集合引用类型
EST: "-19577"
Topic:
  - DS+
---

# WeakSet

## 基本 API [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=cedd019f-aad8-2ed1)

- 弱集合中的值只能是 Object 或者继承自 Object 的类型，尝试使用非对象设置值会抛出 TypeError [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6f3a683b-2c73-23a4)
- 构造函数可以接收一个可迭代对象，其中需要包含有效的值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d9ba1358-4c2c-6ace)
- const ws1 = new WeakSet([val1, val2, val3]); [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c8e19d2a-9965-1714)
- const ws2 = new WeakSet([val1, "BADVAL", val3]); // TypeError: Invalid value used in WeakSet typeof ws2; // ReferenceError: ws2 is not defined [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=42ba9ea0-3044-7920)
- // 原始值可以先包装成对象再用作值 const stringVal = new String("val1"); const ws3 = new WeakSet([stringVal]); alert(ws3.has(stringVal)); // true [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9332d196-bb03-6254)
- add() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8748d442-7811-ba65)
- has() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=269606a3-9776-414d)
- delete() [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f606e78a-66e6-332a)

## 弱值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6a33afba-0322-96d7)

- 值不属于正式的引用， 不会阻止垃圾回收 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=9cca829d-6905-5f3c)

## 不可迭代值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a3c562ab-e943-0349)

- 因为 WeakSet 中的值任何时候都可能被销毁，所以没必要提供迭代其值的能力 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b1df8d48-1154-f614)
- 之所以限制只能用对象作为值，是为了保证只有通过值对象的引用才能取得值。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=0b830ec8-0632-f9f3)

## 使用弱集合 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c0e730f4-9688-e93f)

- 弱集合在给对象打标签时还是有 价值的 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=abcdfbb5-40a7-3102)
- ![](z-Assets/1691561411853.png) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6577b05d-5425-4318)
  - 通过查询元素在不在 disabledElements 中，就可以知道它是不是被禁用了 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=205bff7c-c908-905e)
