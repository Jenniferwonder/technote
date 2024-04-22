import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="oop">OOP<a class="anchor" href="#oop"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="object-对象"><a href="object">Object-对象</a><a class="anchor" href="#object-对象"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="oop-principles-面向对象原则"><a href="oop-principles">OOP Principles-面向对象原则</a><a class="anchor" href="#oop-principles-面向对象原则"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="inheritance-继承"><a href="inheritance">Inheritance-继承</a><a class="anchor" href="#inheritance-继承"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="class-es6-类"><a href="class-es6-%E7%B1%BB">Class-ES6-类</a><a class="anchor" href="#class-es6-类"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={tags:["JavaScript"],reviewed:1,difficulty:"Hard",comment:null,title:"OOP",type:"O",status:["ToUse"],DateStarted:"2023-07-14T00:00:00.000Z",DateModified:"2024-04-18T00:00:00.000Z",Datereviewed:"2024-01-29T00:00:00.000Z",Pages:71,aliases:["OOP","C08"],topic:["OOP"],"linter-yaml-title-alias":"OOP",category:"Programming",minutes:1,words:16},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/oop/oop.md",url=void 0;function rawContent(){return"\n# OOP\n\n## [Object-对象](object)\n\n## [OOP Principles-面向对象原则](oop-principles)\n\n## [Inheritance-继承](inheritance)\n\n## [Class-ES6-类](class-es6-类)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"oop",text:"OOP#"},{depth:2,slug:"object-对象",text:"Object-对象#"},{depth:2,slug:"oop-principles-面向对象原则",text:"OOP Principles-面向对象原则#"},{depth:2,slug:"inheritance-继承",text:"Inheritance-继承#"},{depth:2,slug:"class-es6-类",text:"Class-ES6-类#"}]}const Content=createComponent(((e,n,a)=>{const{layout:t,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};