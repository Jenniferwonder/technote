---
Title: C11-Promises and Async Functions-期约与异步函数
Type: O
DateStarted: 2023-07-14
DateModified: 2023-07-27
mindmap-plugin: basic
status: Capturing
aliases: C11
LeadTime: "-19585.666666666668"
Page-D: "0"
Cards-D: "0"
DateDo: 2023-08-18T00:00:00.000+08:00
DateDone: ""
Pages: 46
DateDue: 2023-08-20T00:00:00.000+08:00
EST: "3"
Topic:
  - Async
---

# [[O-JS]] C11-Promises and Async Functions-期约与异步函数

## <mark class="hltr-gray ">" INTRODUCTION TO ASYNCHRONOUS PROGRAMMING "</mark> [Page 2 ](zotero://open-pdf/library/items/B29JDDKZ?page=2&annotation=87HD5KV8)

- <mark class="hltr-gray ">" Synchronous vs. Asynchronous JavaScript "</mark> [Page 2 ](zotero://open-pdf/library/items/B29JDDKZ?page=2&annotation=T7VZVMG2)
- <mark class="hltr-gray ">" Legacy Asynchronous Programming Patterns "</mark> [Page 3 ](zotero://open-pdf/library/items/B29JDDKZ?page=3&annotation=WVS9RD3K)
  - <mark class="hltr-gray ">" Returning Asynchronous Values "</mark> [Page 3 ](zotero://open-pdf/library/items/B29JDDKZ?page=3&annotation=Y4VPYZ7N)
  - <mark class="hltr-gray ">" Handling Failure "</mark> [Page 4 ](zotero://open-pdf/library/items/B29JDDKZ?page=4&annotation=CX9HK66A)
  - <mark class="hltr-gray ">" Nesting Asynchronous Callbacks "</mark> [Page 4 ](zotero://open-pdf/library/items/B29JDDKZ?page=4&annotation=X4B7RWIM)

## <mark class="hltr-gray ">" [[Promise]] "</mark> [Page 5 ](zotero://open-pdf/library/items/B29JDDKZ?page=5&annotation=Q57QXZ97)

- <mark class="hltr-gray ">" The Promises/A+ Specification "</mark> [Page 5 ](zotero://open-pdf/library/items/B29JDDKZ?page=5&annotation=EDZU3EVS)
- <mark class="hltr-gray ">" Promise Basics "</mark> [Page 5 ](zotero://open-pdf/library/items/B29JDDKZ?page=5&annotation=HLA8W4MX)
  - <mark class="hltr-gray ">" The Promise State Machine "</mark> [Page 6 ](zotero://open-pdf/library/items/B29JDDKZ?page=6&annotation=6884JP5Z)
  - <mark class="hltr-gray ">" Resolved Values, Rejection Reasons, and Utility of Promises "</mark> [Page 6 ](zotero://open-pdf/library/items/B29JDDKZ?page=6&annotation=C3DRZJRP)
  - <mark class="hltr-gray ">" Controlling Promise State with the Executor "</mark> [Page 7 ](zotero://open-pdf/library/items/B29JDDKZ?page=7&annotation=9A8NHZCT)
  - <mark class="hltr-gray ">" Promise Casting with Promise.resolve() "</mark> [Page 8 ](zotero://open-pdf/library/items/B29JDDKZ?page=8&annotation=GD8FLWQK)
  - <mark class="hltr-gray ">" Promise Rejection with Promise.reject() "</mark> [Page 9 ](zotero://open-pdf/library/items/B29JDDKZ?page=9&annotation=DBWFW968)
  - <mark class="hltr-gray ">" Synchronous/Asynchronous Execution Duality "</mark> [Page 9 ](zotero://open-pdf/library/items/B29JDDKZ?page=9&annotation=447XVE92)
- <mark class="hltr-gray ">" Promise Instance Methods "</mark> [Page 10 ](zotero://open-pdf/library/items/B29JDDKZ?page=10&annotation=HXTNRGG6)
  - <mark class="hltr-gray ">" Implementing the Thenable Interface "</mark> [Page 10 ](zotero://open-pdf/library/items/B29JDDKZ?page=10&annotation=H4NJG45W)
  - <mark class="hltr-gray ">" Promise.prototype.then() "</mark> [Page 10 ](zotero://open-pdf/library/items/B29JDDKZ?page=10&annotation=DTZ9MQL4)
  - <mark class="hltr-gray ">" Promise.prototype.catch() "</mark> [Page 13 ](zotero://open-pdf/library/items/B29JDDKZ?page=13&annotation=GHVTXDX6)
  - <mark class="hltr-gray ">" Promise.prototype.finally() "</mark> [Page 14 ](zotero://open-pdf/library/items/B29JDDKZ?page=14&annotation=5ALD8H9A)
  - <mark class="hltr-gray ">" Non-Reentrant Promise Methods "</mark> [Page 15 ](zotero://open-pdf/library/items/B29JDDKZ?page=15&annotation=QE4QWB4D)
  - <mark class="hltr-gray ">" Sibling Handler Order of Execution "</mark> [Page 17 ](zotero://open-pdf/library/items/B29JDDKZ?page=17&annotation=FYLZLTHB)
  - <mark class="hltr-gray ">" Resolved Value and Rejected Reason Passing "</mark> [Page 18 ](zotero://open-pdf/library/items/B29JDDKZ?page=18&annotation=N28GCMRU)
  - <mark class="hltr-gray ">" Rejecting Promises and Rejection Error Handling "</mark> [Page 18 ](zotero://open-pdf/library/items/B29JDDKZ?page=18&annotation=C4CLAQGG)
- <mark class="hltr-gray ">" Promise Chaining and Composition "</mark> [Page 20 ](zotero://open-pdf/library/items/B29JDDKZ?page=20&annotation=UXTNJC4D)
- <mark class="hltr-gray ">" Promise Chaining "</mark> [Page 20 ](zotero://open-pdf/library/items/B29JDDKZ?page=20&annotation=WY3BYPPL)
  - <mark class="hltr-gray ">" Promise Graphs "</mark> [Page 23 ](zotero://open-pdf/library/items/B29JDDKZ?page=23&annotation=9HQT5XY4)
  - <mark class="hltr-gray ">" Parallel Promise Composition with Promise.all() and Promise.race() "</mark> [Page 24 ](zotero://open-pdf/library/items/B29JDDKZ?page=24&annotation=RUVCGTIF)
  - <mark class="hltr-gray ">" Promise.all() "</mark> [Page 24 ](zotero://open-pdf/library/items/B29JDDKZ?page=24&annotation=7BGLDVEI)
  - <mark class="hltr-gray ">" Promise.race() "</mark> [Page 25 ](zotero://open-pdf/library/items/B29JDDKZ?page=25&annotation=ZRRTLAWZ)
  - <mark class="hltr-gray ">" Serial Promise Composition "</mark> [Page 26 ](zotero://open-pdf/library/items/B29JDDKZ?page=26&annotation=ZCHLHRTI)
- <mark class="hltr-gray ">" Promise Extensions "</mark> [Page 28 ](zotero://open-pdf/library/items/B29JDDKZ?page=28&annotation=AY7GLGID)
  - <mark class="hltr-gray ">" Promise Canceling "</mark> [Page 28 ](zotero://open-pdf/library/items/B29JDDKZ?page=28&annotation=W8GCJATM)
  - <mark class="hltr-gray ">" Promise Progress Notifications "</mark> [Page 29 ](zotero://open-pdf/library/items/B29JDDKZ?page=29&annotation=4CK943DM)

## <mark class="hltr-gray ">" ASYNC FUNCTIONS "</mark> [Page 31 ](zotero://open-pdf/library/items/B29JDDKZ?page=31&annotation=6HB8222W)

- <mark class="hltr-gray ">" Async Function Basics "</mark> [Page 32 ](zotero://open-pdf/library/items/B29JDDKZ?page=32&annotation=TBKAZWZK)
  - <mark class="hltr-gray ">" The async keyword "</mark> [Page 32 ](zotero://open-pdf/library/items/B29JDDKZ?page=32&annotation=HW4WUDCD)
  - <mark class="hltr-gray ">" The await keyword "</mark> [Page 34 ](zotero://open-pdf/library/items/B29JDDKZ?page=34&annotation=ZIVFFBDN)
  - <mark class="hltr-gray ">" Restrictions on await "</mark> [Page 36 ](zotero://open-pdf/library/items/B29JDDKZ?page=36&annotation=QFTKCIRI)
- <mark class="hltr-gray ">" Halting and Resuming Execution "</mark> [Page 37 ](zotero://open-pdf/library/items/B29JDDKZ?page=37&annotation=ESTW95CU)
- <mark class="hltr-gray ">" Strategies for Async Functions "</mark> [Page 40 ](zotero://open-pdf/library/items/B29JDDKZ?page=40&annotation=FAZNQ6CU)
  - <mark class="hltr-gray ">" Implementing Sleep() "</mark> [Page 40 ](zotero://open-pdf/library/items/B29JDDKZ?page=40&annotation=LEZPWLU5)
  - <mark class="hltr-gray ">" Maximizing Parallelization "</mark> [Page 41 ](zotero://open-pdf/library/items/B29JDDKZ?page=41&annotation=8FB6HVYA)
  - <mark class="hltr-gray ">" Serial Promise Execution "</mark> [Page 44 ](zotero://open-pdf/library/items/B29JDDKZ?page=44&annotation=FGIZE58Q)
