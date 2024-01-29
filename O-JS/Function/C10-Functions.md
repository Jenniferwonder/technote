---
Title: C10-Functions
Type: O
DateStarted: 2023-07-14
DateModified: 2023-11-28
LeadTime: "-19578.666666666668"
Cards-D: "0"
Page-D: "0"
status: Distilling
Pages: 35
DateDo: 2023-08-11T00:00:00.000+08:00
DateDue: 2023-08-17T00:00:00.000+08:00
EST: "7"
mindmap-plugin: basic
Topic:
  - Function
---

# [[O-JS]] C10-Functions

## 特点

- 函数实际上是对象 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ca408a44-b903-443e)
  - 每个函数都是 Function 类型的实例 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f83c04ca-63a8-1b97)
  - Function 也有属性和方法 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=57301075-aa0c-a2d7)
- 函数名(Function Names) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d5894deb-83c7-a972)
  - 就是指向函数对象的指针，而且不一定与函数本身紧密绑定
  - 跟其他包含对象指针的变量具有相同的行为 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c7e59f26-31e2-2e74)
  - 意味着 一个函数可以有多个名称 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=78d3a2b6-fb87-5510)
  - Strict Mode
    - No function can be named `eval` or `arguments`. [Page 76 ](zotero://open-pdf/library/items/2BS329KQ?page=76&annotation=3AI3VGDZ)
- 参数 (Arguments/ Parameters)
  - 不关心传入的参数个数，也不关心这些参数的数据类型 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=bb63e1e4-32e9-2c18)
  - ECMAScript 函数的参数在内部表现为一个数组 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=6e9b8578-5393-a988)
    - 函数并不关心这个数组中包含什么 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=41e88b82-75f9-b43f)
  - 对于命名参数而言，如果调用函数时没有传这个参数，那么它的值就是 undefined [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a18f7267-1952-fd20)
  - <mark class="hltr-orange ">" Strict mode "</mark> [Page 76 ](zotero://open-pdf/library/items/2BS329KQ?page=76&annotation=J3IZR5J8)
    - <mark class="hltr-yellow ">" No named parameter can be named eval or arguments. "</mark> [Page 76 ](zotero://open-pdf/library/items/2BS329KQ?page=76&annotation=944KSISL)
    - <mark class="hltr-yellow ">" No two named parameters can have the same name. "</mark> [Page 76 ](zotero://open-pdf/library/items/2BS329KQ?page=76&annotation=V24DIKZ3)
- <mark class="hltr-gray ">" NO OVERLOADING-无重载 "</mark> [Page 7 ](zotero://open-pdf/library/items/FSJLWF7Z?page=7&annotation=4GK8UE4P)
  - Java 中，一个函数可以有两个定义， 只要签名（接收参数的类型和数量）不同就行 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=e42190f5-f700-f69d)
  - 如果在 ECMAScript 中定义了两个同名函数，则后定义的会覆盖先定义的 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c242a46f-d255-443d)
  - 可以通过检查参数的类型和数量，然后分别执行不同的逻辑来模拟函数重载 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3d220432-578b-60db)

## 调用

- <mark class="hltr-yellow ">" allow the encapsulation of statements that can be run anywhere and at any time "</mark> [Page 74 ](zotero://open-pdf/library/items/2BS329KQ?page=74&annotation=35XF5CA2)
- <mark class="hltr-yellow ">" This function can then be called by using the function name, followed by the function arguments enclosed in parentheses "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=T4HHA7U9)
- <mark class="hltr-gray ">" IMMEDIATELY INVOKED FUNCTION EXPRESSIONS 立即调用的函数表达式"</mark> [Page 34 ](zotero://open-pdf/library/items/FSJLWF7Z?page=34&annotation=9VHUVN8D)

  - ```JS
    (function( ) { } )( );
    ```

## Return

- <mark class="hltr-yellow ">" Functions in ECMAScript need not specify whether they return a value. "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=43VGQWZ2)
- <mark class="hltr-yellow ">" Any function can return a value at any time by using the return statement followed by the value to return. "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=L2TQEL3A)
- <mark class="hltr-yellow ">" a function stops executing and exits immediately when it encounters the return statement "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=3RV747WU)
  - <mark class="hltr-yellow ">" any code that comes after a return statement will never be executed. "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=GFGSHUYD)
- <mark class="hltr-yellow ">" The return statement can also be used without specifying a return value "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=F7TSCCXE)
  - <mark class="hltr-yellow ">" in this way, the function stops executing immediately and returns undefined as its value. "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=E5EXGBCW)
  - <mark class="hltr-yellow ">" used in functions that don’t return a value to stop function execution early "</mark> [Page 75 ](zotero://open-pdf/library/items/2BS329KQ?page=75&annotation=BMMDLGYZ)
- <mark class="hltr-yellow ">" a function either always return a value or never return a value. "</mark> [Page 76 ](zotero://open-pdf/library/items/2BS329KQ?page=76&annotation=NGCUJXR2)

## 创建方式

- ?
  - 使用 `function` 关键字
    - 函数声明 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=fec1c839-a589-8079)
      - ![[1691644780099.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=39bb0497-b2d5-bdd3)
      - 函数定义最后没有加分号。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f7c59cd7-021f-4e8d)
    - 函数表达式 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b1df8a35-2cef-34c4)
      - ![[1691644825041.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8e510398-a4ff-363c)
    - 参数特点
      - 可以**在函数内部访问 arguments 对象，从中取得传进来的每个参数值** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=becee39e-da7b-9171)
    - 有无括号
      - 必须使用大括号 `{ }`
  - 箭头函数 (ES6) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f3ae56ed-b3cd-3033)
    - ![[1691644853382.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=38e14589-5eee-cc6b)
    - 简洁的语法非常适合**嵌入函数的场景**
      - ![[1691645027980.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=a0439b66-6de4-1c2f)
    - 有无括号
      - 使用大括号 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3baa69be-191e-9fec)
        - 说明包含“函数体”，可以 在一个函数中包含多条语句，跟常规的函数一样 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=c95a4d6b-6e47-45b0)
      - 不用大括号 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ee659cb8-85c9-323d)
        - 那么箭头后面就只能有**一行代码， 比如一个赋值操作，或者一个表达式**。而且，省略大括号会**隐式返回这行代码的值** [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=767b002f-01a4-1ec0)
    - 参数特点
      - 参数将不能使用 arguments 关键字访问，而只 能通过定义的命名参数访问 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=65bea607-6084-3d53)
        - ![[1691646004944.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=0bf20a85-0a06-0453)
      - 虽然箭头函数中没有 arguments 对象，但可以在包装函数中把它提供给箭头函数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=f59adc05-3be5-5a15)
        - ![[1691646042322.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=624bbaff-f478-e41b)
    - `this` keyword in Arrow Function
      - **does not have** its own "this" key word
      - "this" in arrow function refers to **its parent object/ function**
    - **can not be constructor function** in OOP
  - 使用 Function 构造函数 (不推荐) [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3d97659f-bcf9-ae08)
    - ![[1691644875229.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=592e23cb-db7d-4dea)

## 默认参数值

- 默认参数定义方式
  - 在 ECMAScript5.1 及以前 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=eca9972a-30c8-fa32)
    - 实现默认参数的一种常用方式就是检测某个参数是否等于 undefined， 如果是则意味着没有传这个参数，那就给它赋一个值
  - ECMAScript 6 之后 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=3a23cbfe-bfa4-0e1a)
    - 支持显式定义默认参数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=75e5854f-343e-7165)
    - 只要 **在函数定义中的参数后面用 `=` ** 就可以为参数赋一个默认值 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=4d113fe5-0457-4b6f)
      - ![[1691646295840.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=051cb663-e4fc-6178)
- 默认参数特点
  - 给多个参数定义默认值实际上跟 **使用 let 关键字顺序声明变量** 一样 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d95907a9-547d-646e)
  - 默认参数会按照定义它们的顺序依次被初始化 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=b4bfb05e-3d5a-4b6c)
  - 参数初始化顺序遵循 **“暂时性死区”** 规则[📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=abe5ba18-88b6-4f4f)
    - 即前面定义的参数不能引用后面定义的
    - 后定义默认值的参数可以引用先定义的参数 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=7b977c66-31a6-5056)
  - 参数也存在于自己的作用域中，它们不能引用函数体的作用域 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=8a12deaf-feba-3779)
    - ![[1691646425219.png]] [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=abe485f8-6e26-fa48)

## <mark class="hltr-gray ">" SPREAD ARGUMENTS AND REST PARAMETERS "</mark> [Page 11 ](zotero://open-pdf/library/items/FSJLWF7Z?page=11&annotation=YLGFN8C5)

- <mark class="hltr-gray ">" Spread Arguments-扩展参数 "</mark> [Page 11 ](zotero://open-pdf/library/items/FSJLWF7Z?page=11&annotation=YHG9BZXH)
- <mark class="hltr-gray ">" Rest Parameter-收集参数"</mark> [Page 12 ](zotero://open-pdf/library/items/FSJLWF7Z?page=12&annotation=79QRP7LU)

## <mark class="hltr-gray ">" FUNCTION DECLARATIONS VERSUS FUNCTION EXPRESSIONS "</mark> [Page 13 ](zotero://open-pdf/library/items/FSJLWF7Z?page=13&annotation=TMMRD67B)

## <mark class="hltr-gray ">" FUNCTIONS AS VALUES "</mark> [Page 14 ](zotero://open-pdf/library/items/FSJLWF7Z?page=14&annotation=J7FA4CUU)

## <mark class="hltr-gray ">" FUNCTION INTERNALS "</mark> [Page 16 ](zotero://open-pdf/library/items/FSJLWF7Z?page=16&annotation=NHEWTT8D)

- <mark class="hltr-gray ">" arguments "</mark> [Page 16 ](zotero://open-pdf/library/items/FSJLWF7Z?page=16&annotation=KDDTJ7IM)
- <mark class="hltr-gray ">" this "</mark> [Page 17 ](zotero://open-pdf/library/items/FSJLWF7Z?page=17&annotation=3FGRNDBW)
- <mark class="hltr-gray ">" caller "</mark> [Page 18 ](zotero://open-pdf/library/items/FSJLWF7Z?page=18&annotation=TYZBY7PZ)
- <mark class="hltr-gray ">" new. target "</mark> [Page 19 ](zotero://open-pdf/library/items/FSJLWF7Z?page=19&annotation=VCJUCI25)

## <mark class="hltr-gray ">" FUNCTION PROPERTIES AND METHODS "</mark> [Page 19 ](zotero://open-pdf/library/items/FSJLWF7Z?page=19&annotation=RSKHZS79)

- name

  - ```js
    funName.name;
    //to get the name of the function
    ```

- [[this; call; apply; bind]]

  - ```js
    funName.call(`newObjectName`, `function parameter`);
    //to apply the function with "this" inside an object to a new object
    ```

  - ```JS
    const newFunName = funName.bind(`newObjectName/ argument to event handlers`)
    //create a new function to apply the function with "this" inside an object to a new object
    const newFunName = funName.bind(`newObjectName`, `pre-set parameter`)
    ```

## <mark class="hltr-gray ">" FUNCTION EXPRESSIONS "</mark> [Page 22 ](zotero://open-pdf/library/items/FSJLWF7Z?page=22&annotation=DNPTZJFG)

## <mark class="hltr-gray ">" RECURSION-递归"</mark> [Page 24 ](zotero://open-pdf/library/items/FSJLWF7Z?page=24&annotation=VPQH2NMJ)

## <mark class="hltr-gray ">" TAIL CALL OPTIMIZATION-尾调用优化 "</mark> [Page 25 ](zotero://open-pdf/library/items/FSJLWF7Z?page=25&annotation=Y5AUL6MK)

- <mark class="hltr-gray ">" Tail Call Optimization Requirements "</mark> [Page 26 ](zotero://open-pdf/library/items/FSJLWF7Z?page=26&annotation=L25PMNG6)
- <mark class="hltr-gray ">" Coding for Tail Call Optimization "</mark> [Page 27 ](zotero://open-pdf/library/items/FSJLWF7Z?page=27&annotation=YEP2ES3G)

## <mark class="hltr-gray ">" CLOSURES "</mark> [Page 28 ](zotero://open-pdf/library/items/FSJLWF7Z?page=28&annotation=VMJ358K3)

- <mark class="hltr-gray ">" The this Object "</mark> [Page 31 ](zotero://open-pdf/library/items/FSJLWF7Z?page=31&annotation=QZQJN4FS)
- <mark class="hltr-gray ">" Memory Leaks "</mark> [Page 33 ](zotero://open-pdf/library/items/FSJLWF7Z?page=33&annotation=I9AQKP8R)
- to give a function access to all variables of its parent function, even after that parent function has returned

## <mark class="hltr-gray ">" PRIVATE VARIABLES "</mark> [Page 36 ](zotero://open-pdf/library/items/FSJLWF7Z?page=36&annotation=DANMWHAY)

- <mark class="hltr-gray ">" Static Private Variables "</mark> [Page 37 ](zotero://open-pdf/library/items/FSJLWF7Z?page=37&annotation=I67YFCI8)
- <mark class="hltr-gray ">" The Module Pattern "</mark> [Page 39 ](zotero://open-pdf/library/items/FSJLWF7Z?page=39&annotation=P3CILIS7)
- <mark class="hltr-gray ">" The Module-Augmentation Pattern "</mark> [Page 40 ](zotero://open-pdf/library/items/FSJLWF7Z?page=40&annotation=5JHCZ23N)
