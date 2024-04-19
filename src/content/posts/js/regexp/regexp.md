---
title: RegExp
tags:
  - JavaScript
topic:
  - RegExp
type: D
DateStarted: 2023-07-19
DateModified: 2024-04-18
Datereviewed: 2024-04-17
reviewed: 
difficulty: 
comment: 
status:
  - Young
aliases:
  - RegExp
linter-yaml-title-alias: RegExp
category: Programming
---

# RegExp

## RegExp type

- let expression = /pattern 模式/flags 标记;
- Different Mode
  - g
  - global mode 全局模式
  - the pattern will be applied to all of the string instead of stopping after the first match is found
  - i
  - case-insensitive mode 不区分大小写
  - the case of the pattern and the string are ignored when determining matches
  - m
  - multiline mode 多行模式
  - the pattern will continue looking for matches after reaching the end of one line of text
  - y
  - sticky mode 粘附模式
  - > the pattern will only look at the string contents beginning at lastIndex
  - u
  - Unicode mode is enable
  - 启用 Unicode 匹配
  - s
    - dotAll 模式
    - 表示元字符.匹配任何字符（包括\n 或\r）
- metacharacters
- must be escaped by a backslash (`\`) when used as part of the pattern
- 元字符含义
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-8-x67-y438.png)
  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1690779496589image.png)
- 创建 RegExp instance (实例) 的方法 - literal form 字面量形- Regular-expression literals always share the same RegExp instanc- RegExp constructor 构造函- accepts two argument- a string **pattern** to match - All metacharacters must be double-escape- and an optional string of **flags** to apply - It is also possible to copy existing regular expression instances and optionally modify their flags using the constructo- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-9-x92-y69.png)
<!--SR:!2023-08-20,8,250!2023-08-24,12,250-->

## RegExp Instance Properties

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1690781179401image.png)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-10-x65-y213.png)
- lastIndex
  - 表示在源字符串中下一次搜索的开始位置，或上一次搜索结束位置的右边第一位，始终从 0 开始

## RegExp Instance Methods

- exec()
- 参数
  - 只接收一个参数，即要应用模式的字符串
- 返回值
  - returns an **array** of information about the first match
    - index
    - 字符串中匹配模式的起始位置
    - input
    - 要查找的字符串
    - 数组的第一个元素是匹配整个模式的字符串，其他元素是与表达式中的捕获组匹配的字符串
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1690782053073image.png)
  - or **null** if no match was found.
  - 模式标记为`g`
    - The exec() method returns information about one match at a time even if the pattern is global
    - With the global g flag set on the pattern, each call to exec() moves further into the string looking for matches
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1690782124256image.png)
  - 模式标记为`y`
    - 每次调用 exec()就只会在 `lastIndex` 的位置上寻找匹配项。粘附标记覆盖全局标记
    - lastIndex tracks the index of the character that appears immediately to the right of the last match.
    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/Paste-image-1690782407110image.png)
- test()
- 判断输入的文本与模式是否匹配，返回值：true/ false
- returns true if the pattern matches the argument and false if it does not
- toLocaleString() 与 toString() - return the literal representation of the regular expression, regardless of how it was created.
<!--SR:!2023-08-23,11,250!2023-08-21,9,250-->

## RegExp Constructor Properties

- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-13-x84-y22.png)
- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-14-x67-y271.png)

## Pattern Limitations

- lack some of the advanced regular-expression features available in languages such as Perl
- The following features are not supported in ECMAScript regular expressions
