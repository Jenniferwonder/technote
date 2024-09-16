import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="cypress">Cypress<a class="anchor" href="#cypress"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="react-testing-crash-course">React Testing Crash Course<a class="anchor" href="#react-testing-crash-course"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://www.youtube.com/watch?v=OVNjsIto9xM">React Testing Crash Course (youtube.com)</a></li>\n<li><a href="https://github.com/MitchelSt/react-testing-starter">MitchelSt/react-testing-starter: Part of the “React Testing Crash Course” taught by Mitchel from Techbase (github.com)</a></li>\n</ul>\n<h2 id="install-package">Install package<a class="anchor" href="#install-package"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><code>yarn install &#x26;&#x26; yarn dev</code></li>\n</ul>',frontmatter={topic:null,category:"Front-End Tooling",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["Cypress"],title:"Cypress",type:null,tags:["Testing"],DateStarted:"2024-01-05T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",status:null,"linter-yaml-title-alias":"Cypress",draft:!0,minutes:1,words:26},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/testing/cypress.md",url=void 0;function rawContent(){return'\n# Cypress\n\n## React Testing Crash Course\n\n- [React Testing Crash Course (youtube.com)](https://www.youtube.com/watch?v=OVNjsIto9xM)\n- [MitchelSt/react-testing-starter: Part of the "React Testing Crash Course" taught by Mitchel from Techbase (github.com)](https://github.com/MitchelSt/react-testing-starter)\n\n## Install package\n\n- `yarn install && yarn dev`\n'}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"cypress",text:"Cypress#"},{depth:2,slug:"react-testing-crash-course",text:"React Testing Crash Course#"},{depth:2,slug:"install-package",text:"Install package#"}]}const Content=createComponent(((t,e,a)=>{const{layout:n,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};