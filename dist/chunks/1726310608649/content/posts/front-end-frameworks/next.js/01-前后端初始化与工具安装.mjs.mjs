import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="项目前后端初始化">项目前后端初始化<a class="anchor" href="#项目前后端初始化"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="前端nextjs-tailwind-项目文件架构自动生成">前端：<a href="https://nextjs.org/">Next.js</a>, Tailwind 项目文件架构——自动生成<a class="anchor" href="#前端nextjs-tailwind-项目文件架构自动生成"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="1-打开终端运行命令">1. 打开终端，运行命令：<a class="anchor" href="#1-打开终端运行命令"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>参考：<a href="How-to-start-a-React,-NextJS-and-TailwindCSS-project">How to start a React, NextJS and TailwindCSS project</a></li>\n<li>❗ 或过期：<code>npx create-next-app --example with-tailwindcss &#x3C;项目名></code>\n<ul>\n<li>❗ 注意：运行上述命令时，关闭所有代理，含 GitHub 加速器，避免出现 proxy- 代理报错</li>\n</ul>\n</li>\n</ul>\n<h4 id="2-成功提示">2. 成功提示：<a class="anchor" href="#2-成功提示"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667807686230-2850367b-0a53-4d1e-ba17-5a42b2999f30.png" alt=""></li>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667808219286-bcd367f6-d4ea-41e1-ae98-349576e0057e.png" alt=""></li>\n<li>自动生成项目文件夹及相关配置文件</li>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667808121381-b22aa698-08c5-4e62-a772-a400811ead67.png" alt=""></li>\n</ul>\n<h3 id="后端-cmssanity新建项目">后端 CMS：<a href="https://www.sanity.io/">Sanity</a>——新建项目<a class="anchor" href="#后端-cmssanity新建项目"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<blockquote>\n<p>[!attention]<br>\n注意 Sanity 版本已更新！<br>\n<a href="https://www.sanity.io/help/studio-v2-vs-v3">Sanity Studio v2 is deprecated – Sanity</a></p>\n</blockquote>\n<h4 id="1-sanity-官网注册登录sanityio">1. <a href="Sanity">Sanity</a> 官网注册、登录：sanity.io<a class="anchor" href="#1-sanity-官网注册登录sanityio"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<h4 id="2-终端输入-安装命令">2. 终端输入 <a href="https://www.sanity.io/docs/create-a-sanity-project?ref=hero">安装命令</a>：<a class="anchor" href="#2-终端输入-安装命令"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p>npx -y @sanity/cli init —template empty —create-project “Sanity Project” —dataset production</p>\n<ul>\n<li>成功提示：<img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667808912491-93d2ae9e-9230-4979-b83d-4c4639a41573.png" alt=""></li>\n</ul>\n<h4 id="3-或者输入后端项目文件初始化命令">3. 🐛❌~~或者，~~输入后端项目文件初始化命令：<a class="anchor" href="#3-或者输入后端项目文件初始化命令"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><del>sanity init —coupon sonny2022</del> (老版本，已升级至 v3 <a href="https://www.sanity.io/docs/create-a-sanity-project">Create a Sanity project</a>)</p>\n<ul>\n<li>成功提示：<img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667809675252-8c64e0da-0eb5-42eb-b986-3e758cbe5990.png" alt=""></li>\n<li>可能 Bug <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230219111202.png" alt="">\n<ul>\n<li>solution: <code>sanity install</code></li>\n<li><a href="https://stackoverflow.com/questions/65216022/error-no-sanity-json-file-found-in-plugin-sanity-base">Error: No “sanity.json” file found in plugin “@sanity/base” - Stack Overflow</a></li>\n</ul>\n</li>\n</ul>\n<h4 id="4-上下键选择项目类型blog--enter">4. 上下键选择项目类型：Blog > <code>enter</code><a class="anchor" href="#4-上下键选择项目类型blog--enter"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>官网登录：即可看到新建的项目 <a href="https://www.sanity.io/manage">https://www.sanity.io/manage</a></li>\n<li>项目文件夹中可见新生成的> Sanity 后台项目文件夹</li>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667817246744-1f104496-645e-4a3d-8b64-c963b7e165df.png" alt=""></li>\n</ul>\n<h2 id="运行开发环境">运行开发环境<a class="anchor" href="#运行开发环境"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>根目录，运行 <code>npm run dev</code></li>\n</ul>\n<h2 id="工具安装">工具安装<a class="anchor" href="#工具安装"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="1-安装-react-代码提示插件">1. 安装 React 代码提示插件：<a class="anchor" href="#1-安装-react-代码提示插件"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets">https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets</a></li>\n<li>效果：输入 <code>rfce</code> > 提示：ReactFunctionExportComponent</li>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667812088268-37587743-4d51-4b23-959d-ebb9fbeed69f.png" alt=""></li>\n</ul>\n<h4 id="2-安装-tailwind-css-代码提示插件">2. 安装 Tailwind CSS 代码提示插件：<a class="anchor" href="#2-安装-tailwind-css-代码提示插件"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss</a></li>\n</ul>\n<h2 id="依赖包安装">依赖包安装<a class="anchor" href="#依赖包安装"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>根目录，可预先安装全部所需依赖：<br>\n<code>npm i</code><br>\n<code>next-sanity</code><br>\n<code>@sanity/image-url </code></p>\n<h4 id="1-prettier-plugin-tailwindcss">1. prettier-plugin-tailwindcss：<a class="anchor" href="#1-prettier-plugin-tailwindcss"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>npm install -D prettier prettier-plugin-tailwindcss</code></p>\n<h4 id="2-react-portable-text">2. react-portable-text<a class="anchor" href="#2-react-portable-text"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>react-portable-text</code></p>\n<h4 id="3-react-hook-form">3. react-hook-form<a class="anchor" href="#3-react-hook-form"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>react-hook-form</code></p>\n<h4 id="4-react-timeago">4. react-timeago:<a class="anchor" href="#4-react-timeago"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>npm i react-timeago</code><br>\n<code>npm i -d @types/react-timeago</code></p>\n<h4 id="5-react-hot-toast">5. react-hot-toast<a class="anchor" href="#5-react-hot-toast"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>npm i react-hot-toast</code></p>\n<h4 id="6-next-auth">6. next-auth<a class="anchor" href="#6-next-auth"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><code>npm i next-auth</code></p>',frontmatter={topic:null,category:"Front-End Frameworks",Datereviewed:null,reviewed:null,difficulty:null,comment:null,type:"Note",DateModified:"2024-09-14T00:00:00.000Z",title:"01-前后端初始化与工具安装",tags:["NextJS"],status:[""],DateStarted:"2022-11-07T00:00:00.000Z",draft:!0,minutes:2,words:349},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/next.js/01-前后端初始化与工具安装.md",url=void 0;function rawContent(){return'\n## 项目前后端初始化\n\n### 前端：[Next.js](https://nextjs.org/), Tailwind 项目文件架构——自动生成\n\n#### 1. 打开终端，运行命令：\n\n- 参考：[How to start a React, NextJS and TailwindCSS project](How-to-start-a-React,-NextJS-and-TailwindCSS-project)\n- ❗ 或过期：`npx create-next-app --example with-tailwindcss <项目名>`\n  - ❗ 注意：运行上述命令时，关闭所有代理，含 GitHub 加速器，避免出现 proxy- 代理报错\n\n#### 2. 成功提示：\n\n- ![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667807686230-2850367b-0a53-4d1e-ba17-5a42b2999f30.png)\n- ![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667808219286-bcd367f6-d4ea-41e1-ae98-349576e0057e.png)\n- 自动生成项目文件夹及相关配置文件\n- ![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667808121381-b22aa698-08c5-4e62-a772-a400811ead67.png)\n\n### 后端 CMS：[Sanity](https://www.sanity.io/)——新建项目\n\n> [!attention]  \n> 注意 Sanity 版本已更新！  \n> [Sanity Studio v2 is deprecated – Sanity](https://www.sanity.io/help/studio-v2-vs-v3)\n\n#### 1. [Sanity](Sanity) 官网注册、登录：sanity.io\n\n#### 2. 终端输入 [安装命令](https://www.sanity.io/docs/create-a-sanity-project?ref=hero)：\n\nnpx -y @sanity/cli init --template empty --create-project "Sanity Project" --dataset production\n\n- 成功提示：![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667808912491-93d2ae9e-9230-4979-b83d-4c4639a41573.png)\n\n#### 3. 🐛❌~~或者，~~输入后端项目文件初始化命令：\n\n~~sanity init --coupon sonny2022~~ (老版本，已升级至 v3 [Create a Sanity project](https://www.sanity.io/docs/create-a-sanity-project))\n\n- 成功提示：![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667809675252-8c64e0da-0eb5-42eb-b986-3e758cbe5990.png)\n- 可能 Bug ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230219111202.png)\n  - solution: `sanity install`\n  - [Error: No "sanity.json" file found in plugin "@sanity/base" - Stack Overflow](https://stackoverflow.com/questions/65216022/error-no-sanity-json-file-found-in-plugin-sanity-base)\n\n#### 4. 上下键选择项目类型：Blog > `enter`\n\n- 官网登录：即可看到新建的项目 [https://www.sanity.io/manage](https://www.sanity.io/manage)\n- 项目文件夹中可见新生成的> Sanity 后台项目文件夹\n- ![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667817246744-1f104496-645e-4a3d-8b64-c963b7e165df.png)\n\n## 运行开发环境\n\n- 根目录，运行 `npm run dev`\n\n## 工具安装\n\n#### 1. 安装 React 代码提示插件：\n\n- [https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)\n- 效果：输入 `rfce` > 提示：ReactFunctionExportComponent\n- ![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667812088268-37587743-4d51-4b23-959d-ebb9fbeed69f.png)\n\n#### 2. 安装 Tailwind CSS 代码提示插件：\n\n- [https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)\n\n## 依赖包安装\n\n根目录，可预先安装全部所需依赖：  \n`npm i`  \n`next-sanity`  \n`@sanity/image-url `\n\n#### 1. prettier-plugin-tailwindcss：\n\n`npm install -D prettier prettier-plugin-tailwindcss`\n\n#### 2. react-portable-text\n\n`react-portable-text`\n\n#### 3. react-hook-form\n\n`react-hook-form`\n\n#### 4. react-timeago:\n\n`npm i react-timeago`  \n`npm i -d @types/react-timeago`\n\n#### 5. react-hot-toast\n\n`npm i react-hot-toast`\n\n#### 6. next-auth\n\n`npm i next-auth`\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"项目前后端初始化",text:"项目前后端初始化#"},{depth:3,slug:"前端nextjs-tailwind-项目文件架构自动生成",text:"前端：Next.js, Tailwind 项目文件架构——自动生成#"},{depth:4,slug:"1-打开终端运行命令",text:"1. 打开终端，运行命令：#"},{depth:4,slug:"2-成功提示",text:"2. 成功提示：#"},{depth:3,slug:"后端-cmssanity新建项目",text:"后端 CMS：Sanity——新建项目#"},{depth:4,slug:"1-sanity-官网注册登录sanityio",text:"1. Sanity 官网注册、登录：sanity.io#"},{depth:4,slug:"2-终端输入-安装命令",text:"2. 终端输入 安装命令：#"},{depth:4,slug:"3-或者输入后端项目文件初始化命令",text:"3. 🐛❌~~或者，~~输入后端项目文件初始化命令：#"},{depth:4,slug:"4-上下键选择项目类型blog--enter",text:"4. 上下键选择项目类型：Blog > enter#"},{depth:2,slug:"运行开发环境",text:"运行开发环境#"},{depth:2,slug:"工具安装",text:"工具安装#"},{depth:4,slug:"1-安装-react-代码提示插件",text:"1. 安装 React 代码提示插件：#"},{depth:4,slug:"2-安装-tailwind-css-代码提示插件",text:"2. 安装 Tailwind CSS 代码提示插件：#"},{depth:2,slug:"依赖包安装",text:"依赖包安装#"},{depth:4,slug:"1-prettier-plugin-tailwindcss",text:"1. prettier-plugin-tailwindcss：#"},{depth:4,slug:"2-react-portable-text",text:"2. react-portable-text#"},{depth:4,slug:"3-react-hook-form",text:"3. react-hook-form#"},{depth:4,slug:"4-react-timeago",text:"4. react-timeago:#"},{depth:4,slug:"5-react-hot-toast",text:"5. react-hot-toast#"},{depth:4,slug:"6-next-auth",text:"6. next-auth#"}]}const Content=createComponent(((n,t,a)=>{const{layout:e,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};