---
Title: C14-DOM
Type: O
DateStarted: 2023-07-14
DateModified: 2023-07-14
mindmap-plugin: basic
status: Capturing
aliases: C14
LeadTime: "-19588.666666666668"
Page-D: "0"
Cards-D: "0"
DateDo: 2023-08-21T00:00:00.000+08:00
DateDone: ""
Pages: 52
DateDue: 2023-08-22T00:00:00.000+08:00
EST: "0"
Topic:
  - DOM
---

# [O-JS](O-JS.md) C14-DOM

## Intro to DOM

### 文档对象模型 Document Object Model

- an application programming interface (API) for XML that was extended for use in HTML.
- DOM 表示 由多层节点构成的文档，通过它开发者可以添加、删除和修改页面的各个部分。 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=96b20821-da4d-aff9)
  - ![](z-Assets/z-C14-DOM.png)

### Why DOM

- <mark class="hltr-orange ">" World Wide Web Consortium (W 3 C) "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=RJG5RX9Q)

### DOM 级别 ([C16-DOM Level 2 and 3](C16-DOM%20Level%202%20and%203.md))

- <mark class="hltr-orange ">" DOM Level 1 "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=NDUZFUVV)
  - <mark class="hltr-yellow ">" the DOM Core "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=YSJQWCTR)
  - <mark class="hltr-yellow ">" DOM HTML "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=6ML3UFET)
- <mark class="hltr-orange ">" DOM Level 2 "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=KZBEV8JR)

  - <mark class="hltr-yellow ">" DOM views "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=T89H4FY3)
  - <mark class="hltr-yellow ">" DOM events "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=V8BVSIUC)

    - ```js
      guessSubmit.addEventListener("click", checkGuess);
      ```

  - <mark class="hltr-yellow ">" DOM style "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=MFUZT29S)
  - <mark class="hltr-yellow ">" DOM traversal and range "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=ESH3YUZY)

- <mark class="hltr-orange ">" DOM Level 3 "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=YAMRL4ZA)
  - <mark class="hltr-yellow ">" DOM Load and Save "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=7H4ZKPAT)
- <mark class="hltr-orange ">" DOM Living Standard "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=CMBKI8AP)
- Reference
  - [Using the W3C DOM Level 1 Core - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core)
- Overview
  - ![](z-Assets/Pasted%20image%2020230310114615.png)

### <mark class="hltr-gray ">" Other DOMs "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=KFGXNDZK)

- <mark class="hltr-orange ">" The languages in the following list are XML-based, and each DOM adds methods and interfaces unique to a particular language "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=85JJGEYH)
  - <mark class="hltr-yellow ">" Scalable Vector Graphics (SVG) "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=M96W5C2R)
  - <mark class="hltr-yellow ">" Mathematical Markup Language (MathML) "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=RBCEB999)
  - <mark class="hltr-yellow ">" Synchronized Multimedia Integration Language (SMIL) "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=6IWPCU35)

### <mark class="hltr-gray ">" DOM Support in Web Browsers "</mark> [Page 56 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=56&annotation=XDVD4GDD)

- <mark class="hltr-yellow ">" For web browsers, however, the DOM has been implemented using ECMAScript and now makes up a large part of the JavaScript language. "</mark> [Page 55 ](zotero://open-pdf/library/items/ZK2IJ5LN?page=55&annotation=4WT7DGZZ)

## DOM 节点层级

### 12 种节点类型 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=d1878b32-08e2-1895)

### Node Type

- <mark class="hltr-gray ">" The nodeName and nodeValue Properties "</mark> [Page 3 ](zotero://open-pdf/library/items/UVUQBQ7F?page=3&annotation=C7AUTH4D)
- <mark class="hltr-gray ">" Node Relationships "</mark> [Page 4 ](zotero://open-pdf/library/items/UVUQBQ7F?page=4&annotation=MTVNA3NM)
- <mark class="hltr-gray ">" Manipulating Nodes "</mark> [Page 5 ](zotero://open-pdf/library/items/UVUQBQ7F?page=5&annotation=CDSQUKED)
- <mark class="hltr-gray ">" Other Methods "</mark> [Page 7 ](zotero://open-pdf/library/items/UVUQBQ7F?page=7&annotation=LRY45CT6)

### Document Type

- <mark class="hltr-gray ">" Document Children "</mark> [Page 8 ](zotero://open-pdf/library/items/UVUQBQ7F?page=8&annotation=9QZTK9WK)
- <mark class="hltr-gray ">" Document Information "</mark> [Page 9 ](zotero://open-pdf/library/items/UVUQBQ7F?page=9&annotation=SPUMFNPA)
- <mark class="hltr-gray ">" Locating Elements "</mark> [Page 10 ](zotero://open-pdf/library/items/UVUQBQ7F?page=10&annotation=NNB3RULH)
- <mark class="hltr-gray ">" Special Collections "</mark> [Page 12 ](zotero://open-pdf/library/items/UVUQBQ7F?page=12&annotation=SYNPLHEV)
- <mark class="hltr-gray ">" DOM Conformance Detection "</mark> [Page 13 ](zotero://open-pdf/library/items/UVUQBQ7F?page=13&annotation=I7VQMRHU)
- <mark class="hltr-gray ">" Document Writing "</mark> [Page 14 ](zotero://open-pdf/library/items/UVUQBQ7F?page=14&annotation=RU8UF7RW)

### Element Type

- <mark class="hltr-gray ">" HTML Elements "</mark> [Page 17 ](zotero://open-pdf/library/items/UVUQBQ7F?page=17&annotation=C3N3YPIM)

  - Selector

    - ```js
      const guessField = document.querySelector(".guessField");
      ```

- <mark class="hltr-gray ">" Getting Attributes "</mark> [Page 20 ](zotero://open-pdf/library/items/UVUQBQ7F?page=20&annotation=BM334MYA)
- <mark class="hltr-gray ">" Setting Attributes "</mark> [Page 21 ](zotero://open-pdf/library/items/UVUQBQ7F?page=21&annotation=MT688RM4)
  - ClassList
    - `document.classList.add/toggle/remove`
- <mark class="hltr-gray ">" The attributes Property "</mark> [Page 21 ](zotero://open-pdf/library/items/UVUQBQ7F?page=21&annotation=C5CZFV4V)
- <mark class="hltr-gray ">" Creating Elements "</mark> [Page 23 ](zotero://open-pdf/library/items/UVUQBQ7F?page=23&annotation=YCFRKKSH)

  - ```js
    resetButton = document.createElement("button");
    resetButton.textContent = "Start new game";
    ```

- <mark class="hltr-gray ">" Element Children "</mark> [Page 23 ](zotero://open-pdf/library/items/UVUQBQ7F?page=23&annotation=4ZGRX9NN)
- appendChild

  - ```js
    document.body.appendChild(resetButton);
    ```

### Text Type

- <mark class="hltr-gray ">" Creating Text Nodes "</mark> [Page 25 ](zotero://open-pdf/library/items/UVUQBQ7F?page=25&annotation=4JIE48ZJ)
- <mark class="hltr-gray ">" Normalizing Text Nodes "</mark> [Page 26 ](zotero://open-pdf/library/items/UVUQBQ7F?page=26&annotation=33IUIRMM)
- <mark class="hltr-gray ">" Splitting Text Nodes "</mark> [Page 27 ](zotero://open-pdf/library/items/UVUQBQ7F?page=27&annotation=637IX2WW)

### Comment Type

### CDATASection Type

### DocumentType Type

### DocumentFragment Type

### Attr Type

## DOM 编程/操作

### <mark class="hltr-gray ">" Dynamic Scripts "</mark> [Page 31 ](zotero://open-pdf/library/items/UVUQBQ7F?page=31&annotation=H3ZHTA2U)

### <mark class="hltr-gray ">" Dynamic Styles "</mark> [Page 33 ](zotero://open-pdf/library/items/UVUQBQ7F?page=33&annotation=WJ85D3T4)

### <mark class="hltr-gray ">" Manipulating Tables "</mark> [Page 35 ](zotero://open-pdf/library/items/UVUQBQ7F?page=35&annotation=C3V8FBRX)

### <mark class="hltr-gray ">" Using NodeLists "</mark> [Page 38 ](zotero://open-pdf/library/items/UVUQBQ7F?page=38&annotation=6LCMSP8H)

### Reference

- [Manipulating documents - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)

## MutationObserver 接口

### <mark class="hltr-gray ">" Basic usage "</mark> [Page 39 ](zotero://open-pdf/library/items/UVUQBQ7F?page=39&annotation=43FQM7RG)

- <mark class="hltr-gray ">" The observe() method "</mark> [Page 39 ](zotero://open-pdf/library/items/UVUQBQ7F?page=39&annotation=BWI8BAUJ)
- <mark class="hltr-gray ">" Working with Callbacks and MutationRecords "</mark> [Page 40 ](zotero://open-pdf/library/items/UVUQBQ7F?page=40&annotation=DL2H2I2M)
- <mark class="hltr-gray ">" The disconnect() method "</mark> [Page 42 ](zotero://open-pdf/library/items/UVUQBQ7F?page=42&annotation=T6I7ZBW8)
- <mark class="hltr-gray ">" Multiplexing a MutationObserver "</mark> [Page 42 ](zotero://open-pdf/library/items/UVUQBQ7F?page=42&annotation=LMT6L7XX)
- <mark class="hltr-gray ">" Reusing a MutationObserver "</mark> [Page 43 ](zotero://open-pdf/library/items/UVUQBQ7F?page=43&annotation=KEC6QL76)

### <mark class="hltr-gray ">" Controlling the Observer scope with MutationObserverInit "</mark> [Page 44 ](zotero://open-pdf/library/items/UVUQBQ7F?page=44&annotation=ZP5SRHTE)

- <mark class="hltr-gray ">" Observing attribute mutations "</mark> [Page 45 ](zotero://open-pdf/library/items/UVUQBQ7F?page=45&annotation=RXPU9WBP)
- <mark class="hltr-gray ">" Observing character data mutations "</mark> [Page 46 ](zotero://open-pdf/library/items/UVUQBQ7F?page=46&annotation=4QT3LI27)
- <mark class="hltr-gray ">" Observing child mutations "</mark> [Page 47 ](zotero://open-pdf/library/items/UVUQBQ7F?page=47&annotation=GRL6FBLX)
- <mark class="hltr-gray ">" Observing subtree mutations "</mark> [Page 49 ](zotero://open-pdf/library/items/UVUQBQ7F?page=49&annotation=7HGTUYEE)

### <mark class="hltr-gray ">" Async Callbacks and the Record Queue "</mark> [Page 50 ](zotero://open-pdf/library/items/UVUQBQ7F?page=50&annotation=SXUDM5EN)

- <mark class="hltr-gray ">" Behavior of the Record Queue "</mark> [Page 50 ](zotero://open-pdf/library/items/UVUQBQ7F?page=50&annotation=2IHZMRYM)
- <mark class="hltr-gray ">" The takeRecords() method "</mark> [Page 51 ](zotero://open-pdf/library/items/UVUQBQ7F?page=51&annotation=YC8RTNIR)

### <mark class="hltr-gray ">" Performance, Memory, and Garbage Collection "</mark> [Page 51 ](zotero://open-pdf/library/items/UVUQBQ7F?page=51&annotation=KGZRA4NX)

- <mark class="hltr-gray ">" MutationObserver References "</mark> [Page 51 ](zotero://open-pdf/library/items/UVUQBQ7F?page=51&annotation=ASUSK77K)
- <mark class="hltr-gray ">" MutationRecord References "</mark> [Page 52 ](zotero://open-pdf/library/items/UVUQBQ7F?page=52&annotation=MWRUW7YZ)

## 📌[C15-DOM Extensions](C15-DOM%20Extensions.md)

### Selectors API [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=2f55abba-dd21-8d42)

### 元素遍历 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=ced267ce-94f7-41d6)

### HTML5 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=be5b8899-6734-53c3)

### 专有扩展 [📌](obsidian://jump-to-pdf?id=ProJS-ZN&annotate=2a2db73e-949a-6f5c)
