import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="projectinit">ProjectInit<a class="anchor" href="#projectinit"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="start-a-react-project"><a href="Start-a-React-Project">Start a React Project</a><a class="anchor" href="#start-a-react-project"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="how-to-start-a-react-nextjs-and-tailwindcss-project"><a href="How-to-start-a-React,-NextJS-and-TailwindCSS-project">How to start a React, NextJS and TailwindCSS project</a><a class="anchor" href="#how-to-start-a-react-nextjs-and-tailwindcss-project"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="compilers-and-bundlers"><a href="Compilers-and-Bundlers">Compilers and Bundlers</a><a class="anchor" href="#compilers-and-bundlers"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="vite"><a href="Vite">Vite</a><a class="anchor" href="#vite"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h2 id="parcel-and-webpack-bug-fix"><a href="Parcel-and-Webpack-Bug-Fix">Parcel and Webpack Bug Fix</a><a class="anchor" href="#parcel-and-webpack-bug-fix"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>',frontmatter={topic:null,category:"Front-End Tooling",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["ProjectInit"],title:"ProjectInit",type:"O",tags:["Cli"],DateStarted:"2023-12-21T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:null,"linter-yaml-title-alias":"ProjectInit",draft:!0,minutes:1,words:18},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/init-compile-bundle/project-init.md",url=void 0;function rawContent(){return"\n# ProjectInit\n\n## [Start a React Project](Start-a-React-Project)\n\n## [How to start a React, NextJS and TailwindCSS project](How-to-start-a-React,-NextJS-and-TailwindCSS-project)\n\n## [Compilers and Bundlers](Compilers-and-Bundlers)\n\n## [Vite](Vite)\n\n## [Parcel and Webpack Bug Fix](Parcel-and-Webpack-Bug-Fix)\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"projectinit",text:"ProjectInit#"},{depth:2,slug:"start-a-react-project",text:"Start a React Project#"},{depth:2,slug:"how-to-start-a-react-nextjs-and-tailwindcss-project",text:"How to start a React, NextJS and TailwindCSS project#"},{depth:2,slug:"compilers-and-bundlers",text:"Compilers and Bundlers#"},{depth:2,slug:"vite",text:"Vite#"},{depth:2,slug:"parcel-and-webpack-bug-fix",text:"Parcel and Webpack Bug Fix#"}]}const Content=createComponent(((t,a,e)=>{const{layout:n,...r}=frontmatter;return r.file=file,r.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};