import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726300354279/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md",collection="posts",slug="js/array/array-instance-methods/copy-within-array-数组内部复制填充法",body="\n# Copy within Array-数组内部复制填充法\n\n---\n\nBasic\n\n### 复制数组索引第 5 位前的元素从第 5 位起填充数组\n\nBack:\n\n- `.copyWithin(5)`\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1691247899277image.png)  \n📌: JS::JS-Array  \n🏷️: JS-Array\n\x3c!--ID: 1706600287342--\x3e\n\n---\n\n---\n\nBasic\n\n### 复制数组索引第 5 位元素开始的值从首位开始填充数组\n\nBack:\n\n- `.copyWithin(0, 5)`\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-copy-within-array.png)\n\x3c!--ID: 1706600287345--\x3e\n\n---\n\n---\n\nBasic\n\n### 复制首位至数组索引第 3 位前元素的值从第 4 位开始填充数组\n\nBack:\n\n- `.copyWithin(4, 0, 3)`\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691247976103.png)\n\x3c!--ID: 1706600287348--\x3e\n\n---\n\n---\n\nBasic\n\n### `.copyWithin()` 特性与注意事项\n\nBack:\n\n- performs an iterative shallow copy of some of the array and **overwrites existing values** beginning at the provided index\n- allow for batch fill and copy inside an array - allow to specify a range within an existing array instance - inclusive start and exclusive end index\n\x3c!--ID: 1706600287351--\x3e\n\n---\n\n\x3c!--SR:!2024-01-30,1,230--\x3e\n",data={title:"Copy within Array-数组内部复制填充法",DateStarted:new Date(17062272e5),draft:!1,tags:["JavaScript"],category:"Programming"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md",rawData:void 0},html='<h1 id="copy-within-array-数组内部复制填充法">Copy within Array-数组内部复制填充法<a class="anchor" href="#copy-within-array-数组内部复制填充法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<hr>\n<p>Basic</p>\n<h3 id="复制数组索引第-5-位前的元素从第-5-位起填充数组">复制数组索引第 5 位前的元素从第 5 位起填充数组<a class="anchor" href="#复制数组索引第-5-位前的元素从第-5-位起填充数组"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li><code>.copyWithin(5)</code></li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1691247899277image.png" alt=""><br>\n📌: JS::JS-Array<br>\n🏷️: JS-Array</li>\n</ul>\n\x3c!--ID: 1706600287342--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="复制数组索引第-5-位元素开始的值从首位开始填充数组">复制数组索引第 5 位元素开始的值从首位开始填充数组<a class="anchor" href="#复制数组索引第-5-位元素开始的值从首位开始填充数组"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li><code>.copyWithin(0, 5)</code></li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-copy-within-array.png" alt=""></li>\n</ul>\n\x3c!--ID: 1706600287345--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="复制首位至数组索引第-3-位前元素的值从第-4-位开始填充数组">复制首位至数组索引第 3 位前元素的值从第 4 位开始填充数组<a class="anchor" href="#复制首位至数组索引第-3-位前元素的值从第-4-位开始填充数组"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li><code>.copyWithin(4, 0, 3)</code></li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691247976103.png" alt=""></li>\n</ul>\n\x3c!--ID: 1706600287348--\x3e\n<hr>\n<hr>\n<p>Basic</p>\n<h3 id="copywithin-特性与注意事项"><code>.copyWithin()</code> 特性与注意事项<a class="anchor" href="#copywithin-特性与注意事项"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p>Back:</p>\n<ul>\n<li>performs an iterative shallow copy of some of the array and <strong>overwrites existing values</strong> beginning at the provided index</li>\n<li>allow for batch fill and copy inside an array - allow to specify a range within an existing array instance - inclusive start and exclusive end index</li>\n</ul>\n\x3c!--ID: 1706600287351--\x3e\n<hr>\n\x3c!--SR:!2024-01-30,1,230--\x3e',frontmatter={draft:!1,Datereviewed:"2024-01-26T00:00:00.000Z",aliases:["Copy within Array-数组内部复制填充法"],title:"Copy within Array-数组内部复制填充法",topic:["Array"],type:"D",tags:["JavaScript"],DateStarted:"2024-01-26T00:00:00.000Z",DateModified:"2024-04-25T00:00:00.000Z",reviewed:1,difficulty:"Hard",status:["ToUse"],comment:null,"linter-yaml-title-alias":"Copy within Array-数组内部复制填充法",category:"Programming",minutes:1,words:150},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md",url=void 0;function rawContent(){return"\n# Copy within Array-数组内部复制填充法\n\n---\n\nBasic\n\n### 复制数组索引第 5 位前的元素从第 5 位起填充数组\n\nBack:\n\n- `.copyWithin(5)`\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1691247899277image.png)  \n📌: JS::JS-Array  \n🏷️: JS-Array\n\x3c!--ID: 1706600287342--\x3e\n\n---\n\n---\n\nBasic\n\n### 复制数组索引第 5 位元素开始的值从首位开始填充数组\n\nBack:\n\n- `.copyWithin(0, 5)`\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/z-copy-within-array.png)\n\x3c!--ID: 1706600287345--\x3e\n\n---\n\n---\n\nBasic\n\n### 复制首位至数组索引第 3 位前元素的值从第 4 位开始填充数组\n\nBack:\n\n- `.copyWithin(4, 0, 3)`\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/1691247976103.png)\n\x3c!--ID: 1706600287348--\x3e\n\n---\n\n---\n\nBasic\n\n### `.copyWithin()` 特性与注意事项\n\nBack:\n\n- performs an iterative shallow copy of some of the array and **overwrites existing values** beginning at the provided index\n- allow for batch fill and copy inside an array - allow to specify a range within an existing array instance - inclusive start and exclusive end index\n\x3c!--ID: 1706600287351--\x3e\n\n---\n\n\x3c!--SR:!2024-01-30,1,230--\x3e\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"copy-within-array-数组内部复制填充法",text:"Copy within Array-数组内部复制填充法#"},{depth:3,slug:"复制数组索引第-5-位前的元素从第-5-位起填充数组",text:"复制数组索引第 5 位前的元素从第 5 位起填充数组#"},{depth:3,slug:"复制数组索引第-5-位元素开始的值从首位开始填充数组",text:"复制数组索引第 5 位元素开始的值从首位开始填充数组#"},{depth:3,slug:"复制首位至数组索引第-3-位前元素的值从第-4-位开始填充数组",text:"复制首位至数组索引第 3 位前元素的值从第 4 位开始填充数组#"},{depth:3,slug:"copywithin-特性与注意事项",text:".copyWithin() 特性与注意事项#"}]}const Content=createComponent(((n,e,a)=>{const{layout:i,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),copyWithinArray__________=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,copyWithinArray__________,data,id,slug};