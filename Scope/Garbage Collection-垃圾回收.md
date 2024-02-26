---
Title: Garbage Collection-垃圾回收
Type: D
DateStarted: 2023-07-28
DateModified: 2023-11-28
mindmap-plugin: basic
status: Snooze
LeadTime: "13"
DateDo: 2023-07-17T00:00:00.000+08:00
DateDone: 2023-07-29T00:00:00.000+08:00
Cards: 10
Cards-D: "1"
Page-D: "0"
EST: "-19554"
Topic:
  - Scope
---

# [[O-JS|D-JS]] Garbage Collection-垃圾回收

## Metadata

- Up:: [[C04-Variables; Scope; Memory-变量、作用域、内存]]

## <mark class="hltr-orange "> garbage-collected language </mark> [Page 14](zotero://open-pdf/library/items/777VEPFY?page=14&annotation=IMJJBYSZ)

- <mark class="hltr-yellow "> automatically allocating what is needed and reclaiming memory that is no longer being used </mark> [Page 14](zotero://open-pdf/library/items/777VEPFY?page=14&annotation=QLQ27SHK)
- <mark class="hltr-gray ">" Mark-and-Sweep 标记清理"</mark> [Page 15 ](zotero://open-pdf/library/items/777VEPFY?page=15&annotation=E7RH78YN)
  - 除所有在上下文中的变量，以及被在上下文中的变量引用的变量外的变量将被标记清理
- <mark class="hltr-gray ">" Reference Counting 引用计数"</mark> [Page 15 ](zotero://open-pdf/library/items/777VEPFY?page=15&annotation=3Z5S8B59)
  - 对每个值都记录它被引用的次数，引用为 0 则被清理

## <mark class="hltr-gray ">" Performance "</mark> [Page 16 ](zotero://open-pdf/library/items/777VEPFY?page=16&annotation=3S2S5IHX)

- 垃圾回收程序会周期性运行，如果内存中分配了很多变量，则可能造成性能损失，因此垃圾回收的时间调度很重要。
- <mark class="hltr-yellow "> minimizing the number of garbage collection operations the browser performs-合理使用分配的内存，并避免多余的垃圾回收. </mark> [Page 20](zotero://open-pdf/library/items/777VEPFY?page=20&annotation=4VDR5PEL)
  - 浏览器决定何时运行垃圾回收程序的一个标准就是对象更替的速度。如果有很多对象被初始化，然后一下子又都超出了作用域，那么浏览器就会采用更激进的方式调度垃圾回收程序运行

## <mark class="hltr-gray ">" Managing Memory "</mark> [Page 17 ](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=ZCQRAGP8)

- <mark class="hltr-orange "> memory limits affect 内存限制会影响 </mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=T45B54CJ)
  - <mark class="hltr-yellow "> variable allocation 变量分配 </mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=8LTM8KZJ)
  - <mark class="hltr-yellow "> call stack 调用栈</mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=RR3JJNVS)
  - <mark class="hltr-yellow "> number of statements that can be executed in a single thread 同在一个线程执行的语句数量</mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=4ILTXL8T)
- 优化内存占用的最佳手段
  - <mark class="hltr-orange "> dereferencing the value 解除引用 </mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=AQ5EF4NP)
    - <mark class="hltr-yellow "> When data is no longer necessary, it’s best to set the value to null, freeing up the reference </mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=QFNGYCJC)
    - <mark class="hltr-yellow "> applies mostly to global values and properties of global objects</mark> [Page 17](zotero://open-pdf/library/items/777VEPFY?page=17&annotation=Q63DYHYU)
    - ![[C04VariablesScopeMemory-18-x65-y456.png|275]]
  - <mark class="hltr-gray ">" Use const and let Declarations "</mark> [Page 18 ](zotero://open-pdf/library/items/777VEPFY?page=18&annotation=TIYHTYRX)
    - <mark class="hltr-yellow "> signal to the garbage collector that an allocated variable is eligible for cleanup far sooner </mark> [Page 18](zotero://open-pdf/library/items/777VEPFY?page=18&annotation=99T85KC4)
  - <mark class="hltr-gray ">" Hidden Classes and the delete Operation-隐藏类与删除操作 "</mark> [Page 18 ](zotero://open-pdf/library/items/777VEPFY?page=18&annotation=SJS2JDHM)
    - <mark class="hltr-yellow "> V8 will associate hidden classes for every object created to keep track of the shape of its properties </mark> [Page 18](zotero://open-pdf/library/items/777VEPFY?page=18&annotation=4XSY9GGJ)
      - <mark class="hltr-yellow "> Objects that are able to share the same hidden class will have better performance </mark> [Page 18](zotero://open-pdf/library/items/777VEPFY?page=18&annotation=59KNUJDF)
    - 在构造函数中一次性声明所有属性
      - 避免动态添加属性
        - ![[C04VariablesScopeMemory-19-x89-y398.png|400]]
      - 避免动态删除属性
        - <mark class="hltr-yellow "> Best practices dictate that unwanted properties should be set to null. </mark> [Page 19](zotero://open-pdf/library/items/777VEPFY?page=19&annotation=MTX5E2UV)
        - ![[C04VariablesScopeMemory-19-x91-y95.png|400]]
  - <mark class="hltr-gray ">" Memory Leaks-内存泄漏 3 种情形避免"</mark> [Page 19 ](zotero://open-pdf/library/items/777VEPFY?page=19&annotation=8AD54VW7)
    - <mark class="hltr-yellow "> the variable is not prefixed with a declaration keyword </mark> [Page 20](zotero://open-pdf/library/items/777VEPFY?page=20&annotation=8SP35ULF)
      - 没有用关键字声明变量，意外声明全局变量
    - <mark class="hltr-yellow "> Interval timers </mark> [Page 20](zotero://open-pdf/library/items/777VEPFY?page=20&annotation=56PSVZSB)
      - 定时器的回调通过闭包引用了外部变量
    - <mark class="hltr-yellow "> JavaScript closures </mark> [Page 20](zotero://open-pdf/library/items/777VEPFY?page=20&annotation=RVFRGMJ7)
      - 函数内的闭包引用了外部变量
  - <mark class="hltr-gray ">" Static Allocation and Object Pools 静态分配与对象池"</mark> [Page 20 ](zotero://open-pdf/library/items/777VEPFY?page=20&annotation=FB88CPI7)
    - <mark class="hltr-orange "> object pool-对象池</mark> [Page 21](zotero://open-pdf/library/items/777VEPFY?page=21&annotation=7FIJVY99)
      - 管理一组可回收的对象。
        - 应用程序可以向这个对象池请求一个对象、设置其属性、使用它，然后在操作完成后再把它还给对象池。由于没发生对象初始化，垃圾回收探测就不会发现有对象更替，因此垃圾回收程序就不会那么频繁地运行。
      - 对象池必须使用某种结构维护所有对象，数组是比较好的选择
        - 在初始化时就创建一个大小够用的数组，从而避免上述先删除再创建的操作
      - 静态分配是优化的一种极端形式，大多数情况下，这都属于过早优化，因此不用考虑。
