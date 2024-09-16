import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="string">String<a class="anchor" href="#string"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="leetcode">LeetCode<a class="anchor" href="#leetcode"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="1-字符串344反转字符串">1. <a href="./problems/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串：344.反转字符串</a><a class="anchor" href="#1-字符串344反转字符串"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="2-字符串541反转字符串-ii">2. <a href="./problems/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II">字符串：541.反转字符串 II</a><a class="anchor" href="#2-字符串541反转字符串-ii"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="3-字符串替换空格">3. <a href="./problems/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC">字符串：替换空格</a><a class="anchor" href="#3-字符串替换空格"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="4-字符串151翻转字符串里的单词">4. <a href="./problems/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D">字符串：151.翻转字符串里的单词</a><a class="anchor" href="#4-字符串151翻转字符串里的单词"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="5-字符串左旋转字符串">5. <a href="./problems/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串：左旋转字符串</a><a class="anchor" href="#5-字符串左旋转字符串"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="6-帮你把-kmp-算法学个通透">6. <a href="./problems/0028.%E5%AE%9E%E7%8E%B0strStr">帮你把 KMP 算法学个通透</a><a class="anchor" href="#6-帮你把-kmp-算法学个通透"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="7-字符串459重复的子字符串">7. <a href="./problems/0459.%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2">字符串：459.重复的子字符串</a><a class="anchor" href="#7-字符串459重复的子字符串"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="8-字符串总结篇">8. <a href="./problems/%E5%AD%97%E7%AC%A6%E4%B8%B2%E6%80%BB%E7%BB%93">字符串：总结篇！</a><a class="anchor" href="#8-字符串总结篇"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h2 id="字符串匹配">字符串匹配<a class="anchor" href="#字符串匹配"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="kmp">KMP<a class="anchor" href="#kmp"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h3 id="前缀树">前缀树<a class="anchor" href="#前缀树"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>',frontmatter={Datereviewed:null,reviewed:null,difficulty:null,comment:null,draft:!0,title:"String",type:"D",topic:["String"],DateStarted:"2023-09-07T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,aliases:["String","字符串"],category:"Programming",tags:["Algo"],"linter-yaml-title-alias":"String",minutes:1,words:91},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/algo/searching-(ds)/string.md",url=void 0;function rawContent(){return"\n# String\n\n## LeetCode\n\n### 1. [字符串：344.反转字符串](./problems/0344.反转字符串)\n\n### 2. [字符串：541.反转字符串 II](./problems/0541.反转字符串II)\n\n### 3. [字符串：替换空格](./problems/剑指Offer05.替换空格)\n\n### 4. [字符串：151.翻转字符串里的单词](./problems/0151.翻转字符串里的单词)\n\n### 5. [字符串：左旋转字符串](./problems/剑指Offer58-II.左旋转字符串)\n\n### 6. [帮你把 KMP 算法学个通透](./problems/0028.实现strStr)\n\n### 7. [字符串：459.重复的子字符串](./problems/0459.重复的子字符串)\n\n### 8. [字符串：总结篇！](./problems/字符串总结)\n\n## 字符串匹配\n\n### KMP\n\n### 前缀树\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"string",text:"String#"},{depth:2,slug:"leetcode",text:"LeetCode#"},{depth:3,slug:"1-字符串344反转字符串",text:"1. 字符串：344.反转字符串#"},{depth:3,slug:"2-字符串541反转字符串-ii",text:"2. 字符串：541.反转字符串 II#"},{depth:3,slug:"3-字符串替换空格",text:"3. 字符串：替换空格#"},{depth:3,slug:"4-字符串151翻转字符串里的单词",text:"4. 字符串：151.翻转字符串里的单词#"},{depth:3,slug:"5-字符串左旋转字符串",text:"5. 字符串：左旋转字符串#"},{depth:3,slug:"6-帮你把-kmp-算法学个通透",text:"6. 帮你把 KMP 算法学个通透#"},{depth:3,slug:"7-字符串459重复的子字符串",text:"7. 字符串：459.重复的子字符串#"},{depth:3,slug:"8-字符串总结篇",text:"8. 字符串：总结篇！#"},{depth:2,slug:"字符串匹配",text:"字符串匹配#"},{depth:3,slug:"kmp",text:"KMP#"},{depth:3,slug:"前缀树",text:"前缀树#"}]}const Content=createComponent(((a,n,e)=>{const{layout:t,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};