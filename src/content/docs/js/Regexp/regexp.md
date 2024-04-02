---
title: RegExp
Type: D
DateStarted: 2023-07-19
DateModified: 2023-11-28
mindmap-plugin: basic
status: Young
LeadTime: "14"
DateDo: 2023-07-18T00:00:00.000+08:00
DateDone: 2023-07-31T00:00:00.000+08:00
Cards: 56
Cards-D: "4"
Page-D: "0"
EST: "-19555"
Topic:
  - Practice
---

# [D-JS](O-JS.md) RegExp

## Metadata

- Up:: [C05-Basic Reference Types-基本引用类型](C05-Basic-Reference-Types-基本引用类型.md)

## <mark class="hltr-orange "> RegExp type </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=GL7UNM5J)

- <mark class="hltr-orange "> let expression = /pattern 模式/flags 标记; </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=R2DT6VHU)
- Different Mode
  - <mark class="hltr-orange "> g </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=E29DPYPM)
    - <mark class="hltr-orange "> global mode 全局模式</mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=GTK5SGWU)
    - <mark class="hltr-yellow "> the pattern will be applied to all of the string instead of stopping after the first match is found </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=W6878BRG)
  - <mark class="hltr-orange "> i </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=5X42GE33)
    - <mark class="hltr-orange "> case-insensitive mode 不区分大小写 </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=NVXG6SEW)
    - <mark class="hltr-yellow "> the case of the pattern and the string are ignored when determining matches </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=4I6QEFYX)
  - <mark class="hltr-orange "> m </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=4IVVVL9V)
    - <mark class="hltr-orange "> multiline mode 多行模式 </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=T4TWY5CA)
    - <mark class="hltr-yellow "> the pattern will continue looking for matches after reaching the end of one line of text </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=WPELWRNC)
  - <mark class="hltr-orange "> y </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=5ZNW5SAV)
    - <mark class="hltr-orange "> sticky mode 粘附模式</mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=A42EKG45)
    - <mark class="hltr-magenta "> the pattern will only look at the string contents beginning at lastIndex </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=Y7J5NXL9)
  - <mark class="hltr-orange "> u </mark> [Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=KFZZWNAR)
    - <mark class="hltr-orange "> Unicode mode </mark> is enabled[Page 7](zotero://open-pdf/library/items/6CRSJHBD?page=7&annotation=NVAI9GLG)
    - 启用 Unicode 匹配
  - s
    - dotAll 模式
    - 表示元字符.匹配任何字符（包括\n 或\r）
- <mark class="hltr-orange "> metacharacters </mark> [Page 8](zotero://open-pdf/library/items/6CRSJHBD?page=8&annotation=DMUZF2SB)
  - must be escaped by a backslash (`\`) when used as part of the pattern [Page 8](zotero://open-pdf/library/items/6CRSJHBD?page=8&annotation=4SJM39PG)
  - 元字符含义
    - ![](./z-Assets/C05BasicReferenceTypes-8-x67-y438.png)
    - ![](./z-Assets/paste-image-1690779496589image.png)
- 创建 RegExp instance (实例) 的方法 - <mark class="hltr-orange "> literal form 字面量形式</mark> [Page 8](zotero://open-pdf/library/items/6CRSJHBD?page=8&annotation=E7F9IWUI) - <mark class="hltr-yellow "> Regular-expression literals always share the same RegExp instance </mark> [Page 9](zotero://open-pdf/library/items/6CRSJHBD?page=9&annotation=7U3TETB7) - <mark class="hltr-orange "> RegExp constructor 构造函数 </mark> [Page 8](zotero://open-pdf/library/items/6CRSJHBD?page=8&annotation=IFRKFMIU) - <mark class="hltr-yellow "> accepts two arguments </mark> [Page 8](zotero://open-pdf/library/items/6CRSJHBD?page=8&annotation=ZB42L7KU) - a string **pattern** to match - <mark class="hltr-yellow "> All metacharacters must be double-escaped </mark> [Page 8](zotero://open-pdf/library/items/6CRSJHBD?page=8&annotation=L8KABP7I) - and an optional string of **flags** to apply - <mark class="hltr-yellow "> It is also possible to copy existing regular expression instances and optionally modify their flags using the constructor </mark> [Page 9](zotero://open-pdf/library/items/6CRSJHBD?page=9&annotation=NCMX6TWH) - ![](./z-Assets/C05BasicReferenceTypes-9-x92-y69.png)
<!--SR:!2023-08-20,8,250!2023-08-24,12,250-->

## <mark class="hltr-gray ">" RegExp Instance Properties "</mark> [Page 10 ](zotero://open-pdf/library/items/6CRSJHBD?page=10&annotation=Z6DWF5AV)

- ![](./z-Assets/paste-image-1690781179401image.png)
- ![](./z-Assets/C05BasicReferenceTypes-10-x65-y213.png)
- lastIndex
  - 表示在源字符串中下一次搜索的开始位置，或上一次搜索结束位置的右边第一位，始终从 0 开始

## <mark class="hltr-gray ">" RegExp Instance Methods "</mark> [Page 11 ](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=FVTKCKTR)

- <mark class="hltr-orange "> exec() </mark> [Page 11](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=YZ6JEU2U)
  - 参数
    - 只接收一个参数，即要应用模式的字符串
  - 返回值
    - returns an **array** of information about the first match [Page 11](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=28QWAL6T)
      - <mark class="hltr-orange "> index </mark> [Page 11](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=YJ5JQNGS)
        - 字符串中匹配模式的起始位置
      - <mark class="hltr-orange "> input </mark> [Page 11](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=M8YI8TNQ)
        - 要查找的字符串
      - 数组的第一个元素是匹配整个模式的字符串，其他元素是与表达式中的捕获组匹配的字符串
      - ![](./z-Assets/paste-image-1690782053073image.png)
    - or **null** if no match was found.
    - 模式标记为`g`
      - <mark class="hltr-yellow "> The exec() method returns information about one match at a time even if the pattern is global </mark> [Page 11](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=SCGCLNAK)
      - <mark class="hltr-yellow "> With the global g flag set on the pattern, each call to exec() moves further into the string looking for matches </mark> [Page 11](zotero://open-pdf/library/items/6CRSJHBD?page=11&annotation=8B4KA7FH)
        - ![](./z-Assets/paste-image-1690782124256image.png)
    - 模式标记为`y`
      - 每次调用 exec()就只会在 `lastIndex` 的位置上寻找匹配项。粘附标记覆盖全局标记
      - <mark class="hltr-orange "> lastIndex </mark>tracks the index of the character that appears immediately to the right of the last match. [Page 12](zotero://open-pdf/library/items/6CRSJHBD?page=12&annotation=Z5X4SZ2B)
      - ![](./z-Assets/paste-image-1690782407110image.png)
- <mark class="hltr-orange "> test() </mark> [Page 12](zotero://open-pdf/library/items/6CRSJHBD?page=12&annotation=P57J7K52)
  - 判断输入的文本与模式是否匹配，返回值：true/ false
  - <mark class="hltr-yellow "> returns true if the pattern matches the argument and false if it does not </mark> [Page 12](zotero://open-pdf/library/items/6CRSJHBD?page=12&annotation=SAL7FVIT)
- <mark class="hltr-orange "> toLocaleString() 与 toString() </mark> [Page 13](zotero://open-pdf/library/items/6CRSJHBD?page=13&annotation=LNTNAH4B) - <mark class="hltr-yellow "> return the literal representation of the regular expression, regardless of how it was created. </mark> [Page 13](zotero://open-pdf/library/items/6CRSJHBD?page=13&annotation=66SV3AEI)
<!--SR:!2023-08-23,11,250!2023-08-21,9,250-->

## <mark class="hltr-gray ">" RegExp Constructor Properties "</mark> [Page 13 ](zotero://open-pdf/library/items/6CRSJHBD?page=13&annotation=6679RQYU)

- ![](./z-Assets/C05BasicReferenceTypes-13-x84-y22.png)
- ![](./z-Assets/C05BasicReferenceTypes-14-x67-y271.png)

## <mark class="hltr-gray ">" Pattern Limitations "</mark> [Page 15 ](zotero://open-pdf/library/items/6CRSJHBD?page=15&annotation=4IVXA75J)

- <mark class="hltr-yellow "> lack some of the advanced regular-expression features available in languages such as Perl </mark> [Page 15](zotero://open-pdf/library/items/6CRSJHBD?page=15&annotation=9VDSVT93)
- <mark class="hltr-yellow "> The following features are not supported in ECMAScript regular expressions </mark> [Page 15](zotero://open-pdf/library/items/6CRSJHBD?page=15&annotation=84R37J4H)
