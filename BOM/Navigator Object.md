---
Title: Navigator Object
Type: D
DateStarted: 2023-08-11
DateModified: 2023-11-28
status: Snooze
Up:
  - - C12-BOM
mindmap-plugin: basic
LeadTime: "1"
Page-D: "0"
Cards-D: "0"
DateDo: 2023-08-11T00:00:00.000+08:00
DateDone: 2023-08-11T00:00:00.000+08:00
EST: "-19579"
Topic:
  - Objects
  - BOM
---

# THE NAVIGATOR OBJECT " [Page 18 ](zotero://open-pdf/library/items/Q5ZZIU26?page=18&annotation=DKXDHXN4)

## navigator 对象的属性通常用于确定浏览器的类型 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7e32ecbc-69c6-d33f>)

## <mark class="hltr-gray ">" Detecting Plug-ins "</mark> [Page 20 ](zotero://open-pdf/library/items/Q5ZZIU26?page=20&annotation=PKE25HEH)

- <mark class="hltr-gray ">" Legacy Internet Explorer Plugin Detection "</mark> [Page 21 ](zotero://open-pdf/library/items/Q5ZZIU26?page=21&annotation=QBZ25CBD)
- 检测插件就是遍历浏览器中 可用的插件，并逐个比较插件的名称 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=3b9bca68-193d-8a5f>)
  - 除 IE10 及更低版本外的浏览器，都可以通 过 plugins 数组来确定 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=f35089f6-0ede-2ae3>)
- 这个数组中的每一项都包含如下属性 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=09706c43-a051-1b87>)
  - name：插件名称。 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=c09057a9-3428-ec52>)
    - name 属性包含识别插件所需的必要信息，尽管不是特别准确 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=50427bd5-69bc-a4f1>)
  - description：插件介绍 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=9fc2e455-e764-7fbb>)
  - filename：插件的文件名 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=7e338021-5bcb-e066>)
  - length：由当前插件处理的 MIME 类型数量 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=1026a5ad-db0c-8a6e>)

## <mark class="hltr-gray ">" Registering Handlers "</mark> [Page 23 ](zotero://open-pdf/library/items/Q5ZZIU26?page=23&annotation=9VIMVXDX)

- registerProtocolHandler()方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=131f5207-d01d-4cdd>)
  - 可以把一个网站注册为处理某种特定类型信息应用程序 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=b1f788c8-142f-65d3>)
  - 可以借助这个方法将 Web 应用程序注册为像桌面软件一样的默认应用程序 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=502fc751-ee83-1f1d>)
- 3 个参数 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=f3695f53-64c3-c8b1>)
  - 要处理的协议 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=bbc423d1-1044-c51d>)
  - 处理该协议的 URL [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=14ba1dc1-e351-37b9>)
  - 应用名称 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=61ff06d1-f4ef-e24c>)

## 实现了 NavigatorID 、 NavigatorLanguage 、 NavigatorOnLine 、 NavigatorContentUtils 、 NavigatorStorage 、 NavigatorStorageUtils 、 NavigatorConcurrentHardware、NavigatorPlugins 和 NavigatorUserMedia 接口定义的属性和方法 [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=732951e1-5a3b-2d7e>)

- ![[1691737442874.png]] [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=ebc1c210-61d9-378a>)
- ![[1691737457348.png]] [📌](<obsidian://jump-to-pdf?pdf=Source%2FS-JS%2FB-JS%2FProJS%2FJavaScript%E9%AB%98%E7%BA%A7%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1(%E7%AC%AC4%E7%89%88%20%E4%B8%AD%E6%96%87%E9%AB%98%E6%B8%85).pdf&annotate=aaadce16-fcc5-a961>)
