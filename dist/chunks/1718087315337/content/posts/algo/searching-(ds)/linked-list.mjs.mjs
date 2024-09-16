import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="链表">链表<a class="anchor" href="#链表"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ol>\n<li><a href="./problems/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80">关于链表，你该了解这些！</a></li>\n<li><a href="./problems/0203.%E7%A7%BB%E9%99%A4%E9%93%BE%E8%A1%A8%E5%85%83%E7%B4%A0">链表：203.移除链表元素</a></li>\n<li><a href="./problems/0707.%E8%AE%BE%E8%AE%A1%E9%93%BE%E8%A1%A8">链表：707.设计链表</a></li>\n<li><a href="./problems/0206.%E7%BF%BB%E8%BD%AC%E9%93%BE%E8%A1%A8">链表：206.翻转链表</a></li>\n<li><a href="./problems/0024.%E4%B8%A4%E4%B8%A4%E4%BA%A4%E6%8D%A2%E9%93%BE%E8%A1%A8%E4%B8%AD%E7%9A%84%E8%8A%82%E7%82%B9">链表：24.两两交换链表中的节点</a></li>\n<li><a href="./problems/0019.%E5%88%A0%E9%99%A4%E9%93%BE%E8%A1%A8%E7%9A%84%E5%80%92%E6%95%B0%E7%AC%ACN%E4%B8%AA%E8%8A%82%E7%82%B9">链表：19.删除链表的倒数第 N 个结点</a></li>\n<li><a href="./problems/%E9%9D%A2%E8%AF%95%E9%A2%9802.07.%E9%93%BE%E8%A1%A8%E7%9B%B8%E4%BA%A4">链表：链表相交</a></li>\n<li><a href="./problems/0142.%E7%8E%AF%E5%BD%A2%E9%93%BE%E8%A1%A8II">链表：142.环形链表</a></li>\n<li><a href="./problems/%E9%93%BE%E8%A1%A8%E6%80%BB%E7%BB%93%E7%AF%87">链表：总结篇！</a></li>\n</ol>',frontmatter={tags:["Algo"],Datereviewed:null,reviewed:null,difficulty:null,comment:null,draft:!0,title:"linked-list",type:"D",topic:["Linked-List"],DateStarted:"2023-09-07T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,category:"Programming",minutes:1,words:81},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/algo/searching-(ds)/linked-list.md",url=void 0;function rawContent(){return"\n## 链表\n\n1. [关于链表，你该了解这些！](./problems/链表理论基础)\n2. [链表：203.移除链表元素](./problems/0203.移除链表元素)\n3. [链表：707.设计链表](./problems/0707.设计链表)\n4. [链表：206.翻转链表](./problems/0206.翻转链表)\n5. [链表：24.两两交换链表中的节点](./problems/0024.两两交换链表中的节点)\n6. [链表：19.删除链表的倒数第 N 个结点](./problems/0019.删除链表的倒数第N个节点)\n7. [链表：链表相交](./problems/面试题02.07.链表相交)\n8. [链表：142.环形链表](./problems/0142.环形链表II)\n9. [链表：总结篇！](./problems/链表总结篇)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"链表",text:"链表#"}]}const Content=createComponent(((e,n,l)=>{const{layout:t,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};