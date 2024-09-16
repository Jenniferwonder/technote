import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../../chunks/1726310608649/astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const id="front-end-frameworks/react/react-bundle-issue/react-bundle-issue.md",collection="posts",slug="front-end-frameworks/react/react-bundle-issue/react-bundle-issue",body="\n# React Bundle Issue\n\n不只是域名，这种问题针对的是不同环境的个性化环境变量如何设置的问题。  \n如果是 CRA 的项目的话，可以使用`.env` `.env.development` `.env.production`文件来区分不同的环境；  \n比如生产环境域名`http://www.prod.com`，开发环境域名`http://www.deve.com`，  \n则可以分别设置`REACT_APP_BASE_URL = 'http://www.prod.com'`和`REACT_APP_BASE_URL = 'http://www.deve.com'`，  \n然后在程序中使用`process.env.REACT_APP_BASE_URL`来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名\n\n## Reference\n\n- [in Depth-a-note-on-vite-p1](https://angularindepth.com/posts/1318/a-note-on-vite-a-very-fast-dev-build-tool)\n- [in Depth-a-note-on-vite-p2](https://angularindepth.com/posts/1327/a-note-on-vite-a-very-fast-dev-build-tool-ii)\n\n## Questions\n\n#### [浏览器为什么无法直接 JSX？怎么解决呢？](https://github.com/haizlin/fe-interview/issues/624)\n\n#### [React 根据不同的环境打包不同的域名？](https://github.com/haizlin/fe-interview/issues/882)\n\n#### [使用 webpack 打包 React 项目，怎么减小生成的 js 大小？](https://github.com/haizlin/fe-interview/issues/881)\n\n#### [在 React 中如何去除生产环境上的 sourcemap？](https://github.com/haizlin/fe-interview/issues/842)\n\n#### [React 的应用如何打包发布？它的步骤是什么？](https://github.com/haizlin/fe-interview/issues/827)\n\n#### [怎样在 React 中开启生产模式？](https://github.com/haizlin/fe-interview/issues/793)\n\n\n\n\n\n\n\n\n\n",data={title:"React Bundle Issue",DateStarted:new Date(17096832e5),draft:!0,tags:["React"],category:"Front-End Frameworks"},_internal={type:"content",filePath:"E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/react-bundle-issue/react-bundle-issue.md",rawData:void 0},html='<h1 id="react-bundle-issue">React Bundle Issue<a class="anchor" href="#react-bundle-issue"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<p>不只是域名，这种问题针对的是不同环境的个性化环境变量如何设置的问题。<br>\n如果是 CRA 的项目的话，可以使用<code>.env</code> <code>.env.development</code> <code>.env.production</code>文件来区分不同的环境；<br>\n比如生产环境域名<code>http://www.prod.com</code>，开发环境域名<code>http://www.deve.com</code>，<br>\n则可以分别设置<code>REACT_APP_BASE_URL = \'http://www.prod.com\'</code>和<code>REACT_APP_BASE_URL = \'http://www.deve.com\'</code>，<br>\n然后在程序中使用<code>process.env.REACT_APP_BASE_URL</code>来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名</p>\n<h2 id="reference">Reference<a class="anchor" href="#reference"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><a href="https://angularindepth.com/posts/1318/a-note-on-vite-a-very-fast-dev-build-tool">in Depth-a-note-on-vite-p1</a></li>\n<li><a href="https://angularindepth.com/posts/1327/a-note-on-vite-a-very-fast-dev-build-tool-ii">in Depth-a-note-on-vite-p2</a></li>\n</ul>\n<h2 id="questions">Questions<a class="anchor" href="#questions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="浏览器为什么无法直接-jsx怎么解决呢"><a href="https://github.com/haizlin/fe-interview/issues/624">浏览器为什么无法直接 JSX？怎么解决呢？</a><a class="anchor" href="#浏览器为什么无法直接-jsx怎么解决呢"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-根据不同的环境打包不同的域名"><a href="https://github.com/haizlin/fe-interview/issues/882">React 根据不同的环境打包不同的域名？</a><a class="anchor" href="#react-根据不同的环境打包不同的域名"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="使用-webpack-打包-react-项目怎么减小生成的-js-大小"><a href="https://github.com/haizlin/fe-interview/issues/881">使用 webpack 打包 React 项目，怎么减小生成的 js 大小？</a><a class="anchor" href="#使用-webpack-打包-react-项目怎么减小生成的-js-大小"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="在-react-中如何去除生产环境上的-sourcemap"><a href="https://github.com/haizlin/fe-interview/issues/842">在 React 中如何去除生产环境上的 sourcemap？</a><a class="anchor" href="#在-react-中如何去除生产环境上的-sourcemap"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="react-的应用如何打包发布它的步骤是什么"><a href="https://github.com/haizlin/fe-interview/issues/827">React 的应用如何打包发布？它的步骤是什么？</a><a class="anchor" href="#react-的应用如何打包发布它的步骤是什么"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="怎样在-react-中开启生产模式"><a href="https://github.com/haizlin/fe-interview/issues/793">怎样在 React 中开启生产模式？</a><a class="anchor" href="#怎样在-react-中开启生产模式"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>',frontmatter={title:"React Bundle Issue",topic:["React"],type:"D",tags:["React"],DateStarted:"2024-03-06T00:00:00.000Z",DateModified:"2024-09-14T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,aliases:["React Bundle Issue"],category:"Front-End Frameworks","linter-yaml-title-alias":"React Bundle Issue",draft:!0,minutes:1,words:220},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/react/react-bundle-issue/react-bundle-issue.md",url=void 0;function rawContent(){return"\n# React Bundle Issue\n\n不只是域名，这种问题针对的是不同环境的个性化环境变量如何设置的问题。  \n如果是 CRA 的项目的话，可以使用`.env` `.env.development` `.env.production`文件来区分不同的环境；  \n比如生产环境域名`http://www.prod.com`，开发环境域名`http://www.deve.com`，  \n则可以分别设置`REACT_APP_BASE_URL = 'http://www.prod.com'`和`REACT_APP_BASE_URL = 'http://www.deve.com'`，  \n然后在程序中使用`process.env.REACT_APP_BASE_URL`来获取基础路径，此时打包的时候会根据不同的环境打包不同的域名\n\n## Reference\n\n- [in Depth-a-note-on-vite-p1](https://angularindepth.com/posts/1318/a-note-on-vite-a-very-fast-dev-build-tool)\n- [in Depth-a-note-on-vite-p2](https://angularindepth.com/posts/1327/a-note-on-vite-a-very-fast-dev-build-tool-ii)\n\n## Questions\n\n#### [浏览器为什么无法直接 JSX？怎么解决呢？](https://github.com/haizlin/fe-interview/issues/624)\n\n#### [React 根据不同的环境打包不同的域名？](https://github.com/haizlin/fe-interview/issues/882)\n\n#### [使用 webpack 打包 React 项目，怎么减小生成的 js 大小？](https://github.com/haizlin/fe-interview/issues/881)\n\n#### [在 React 中如何去除生产环境上的 sourcemap？](https://github.com/haizlin/fe-interview/issues/842)\n\n#### [React 的应用如何打包发布？它的步骤是什么？](https://github.com/haizlin/fe-interview/issues/827)\n\n#### [怎样在 React 中开启生产模式？](https://github.com/haizlin/fe-interview/issues/793)\n\n\n\n\n\n\n\n\n\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"react-bundle-issue",text:"React Bundle Issue#"},{depth:2,slug:"reference",text:"Reference#"},{depth:2,slug:"questions",text:"Questions#"},{depth:4,slug:"浏览器为什么无法直接-jsx怎么解决呢",text:"浏览器为什么无法直接 JSX？怎么解决呢？#"},{depth:4,slug:"react-根据不同的环境打包不同的域名",text:"React 根据不同的环境打包不同的域名？#"},{depth:4,slug:"使用-webpack-打包-react-项目怎么减小生成的-js-大小",text:"使用 webpack 打包 React 项目，怎么减小生成的 js 大小？#"},{depth:4,slug:"在-react-中如何去除生产环境上的-sourcemap",text:"在 React 中如何去除生产环境上的 sourcemap？#"},{depth:4,slug:"react-的应用如何打包发布它的步骤是什么",text:"React 的应用如何打包发布？它的步骤是什么？#"},{depth:4,slug:"怎样在-react-中开启生产模式",text:"怎样在 React 中开启生产模式？#"}]}const Content=createComponent(((e,t,n)=>{const{layout:a,...s}=frontmatter;return s.file=file,s.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`})),reactBundleIssue=Object.freeze(Object.defineProperty({__proto__:null,Content:Content,compiledContent:compiledContent,default:Content,file:file,frontmatter:frontmatter,getHeadings:getHeadings,rawContent:rawContent,url:url},Symbol.toStringTag,{value:"Module"}));export{_internal,body,collection,data,id,reactBundleIssue,slug};