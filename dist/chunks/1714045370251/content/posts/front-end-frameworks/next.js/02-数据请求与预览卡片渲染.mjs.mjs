import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h2 id="技术栈">技术栈<a class="anchor" href="#技术栈"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>前端：<a href="100-Front-End-Roadmap/1.-TechSkills/1.2-Web-Dev/1.2.3-Front-End-Frameworks/React/React">100-Front-End Roadmap/1. TechSkills/1.2 Web Dev/1.2.3 Front-End Frameworks/React/React</a>, <a href="O-NextJS">O-NextJS</a>, <a href="C-TailwindCSS">C-TailwindCSS</a> , <a href="TypeScript">TypeScript</a><br>\n后端 -CMS：<a href="Sanity">Sanity</a></p>\n<h2 id="项目启动步骤">项目启动步骤<a class="anchor" href="#项目启动步骤"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="1-运行开发环境">1. 运行开发环境<a class="anchor" href="#1-运行开发环境"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>运行 <code>npm run dev</code></li>\n</ul>\n<h4 id="2-打开后台内容管理系统sanity-studio">2. 打开后台内容管理系统：Sanity Studio<a class="anchor" href="#2-打开后台内容管理系统sanity-studio"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>进入> 项目文件夹 (前端，含 package.json) ><strong>Sanity 项目文件夹</strong> (后端，含 package.json)</li>\n<li>输入 <code>sanity login</code>> <code>sanity start</code></li>\n<li>可能 Bug <img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230219224930.png" alt="">\n<ul>\n<li>在插件根目录添加 sanity.json 文件，文件内容见提示网站</li>\n</ul>\n</li>\n<li>成功提示：<img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667816734814-c82315ac-430a-469d-9ba1-e0fba8f5ba1e.png" alt=""></li>\n</ul>\n<h4 id="3-打开后台网址并登录httplocalhost3333">3. 打开后台网址并登录：<a href="http://localhost:3333">http://localhost:3333</a><a class="anchor" href="#3-打开后台网址并登录httplocalhost3333"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>成功提示：<img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667816908364-20aa7c2b-cf30-445b-bead-7fdca9ac140a.png" alt=""></li>\n<li>可以看到提供的 <strong>模板表单条目 (schemas)，可个性化设计调整</strong></li>\n</ul>\n<h2 id="后台数据库与前端连接配置">后台数据库与前端连接配置<a class="anchor" href="#后台数据库与前端连接配置"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="1-进入-sanity-项目文件夹-schemas-postjs个性化调整表单条目与类型">1. 进入 Sanity 项目文件夹> /schemas> post.js，个性化调整表单条目与类型<a class="anchor" href="#1-进入-sanity-项目文件夹-schemas-postjs个性化调整表单条目与类型"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>在后台网站, 创建一条 Post</li>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667887075605-f31e8541-a923-457a-a315-e64444f0578a.png" alt="|230"></li>\n<li>选择 Vision 标签> 输入 Query 指令，可以获取 Post 数据</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">*</span><span style="color:#E1E4E8">[_type </span><span style="color:#F97583">==</span><span style="color:#9ECBFF">"post"</span><span style="color:#E1E4E8">]{</span></span>\n<span class="line"><span style="color:#B392F0">_id,</span></span>\n<span class="line"><span style="color:#B392F0">title,</span></span>\n<span class="line"><span style="color:#B392F0">author-></span><span style="color:#E1E4E8">{</span></span>\n<span class="line"><span style="color:#B392F0">name,</span></span>\n<span class="line"><span style="color:#B392F0">image</span></span>\n<span class="line"><span style="color:#E1E4E8">},</span></span>\n<span class="line"><span style="color:#B392F0">description,</span></span>\n<span class="line"><span style="color:#B392F0">mainImage,</span></span>\n<span class="line"><span style="color:#B392F0">slug</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>GROQ: <a href="https://www.sanity.io/docs/query-cheat-sheet">https://www.sanity.io/docs/query-cheat-sheet</a></li>\n</ul>\n<h4 id="2-安装插件-next-sanity-便于-api-请求将后台内容与前端连接">2. 安装插件 next-sanity: 便于 API 请求，将后台内容与前端连接<a class="anchor" href="#2-安装插件-next-sanity-便于-api-请求将后台内容与前端连接"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>进入> 项目文件夹 <strong>根目录</strong></li>\n<li>打开终端，输入 <code>npm i next-sanity</code></li>\n</ul>\n<h4 id="3-在根目录创建配置文件">3. 在根目录，创建配置文件<a class="anchor" href="#3-在根目录创建配置文件"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>sanity.js\n<ul>\n<li>将后台数据库与前端连接</li>\n</ul>\n</li>\n<li>.env.local\n<ul>\n<li>存放环境变量</li>\n</ul>\n</li>\n</ul>\n<h4 id="4-设置-envlocal">4. 设置 env.local<a class="anchor" href="#4-设置-envlocal"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>打开/static > sanity.json， 获取相关参数</li>\n<li>PUBLIC 参数：客户端与 API 同时可见</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">NEXT_PUBLIC_SANITY_DATASET</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">production</span></span>\n<span class="line"><span style="color:#E1E4E8">NEXT_PUBLIC_SANITY_PROJECT_ID</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">j70xi0l8</span></span>\n<span class="line"></span></code></pre>\n<h4 id="5-设置-sanityjs-配置文件与-firebasejs-原理类似">5. 设置 sanity.js 配置文件（与 firebase.js 原理类似）<a class="anchor" href="#5-设置-sanityjs-配置文件与-firebasejs-原理类似"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>参考教程：<a href="https://www.sanity.io/guides/sanity-nextjs-tailwindcss">https://www.sanity.io/guides/sanity-nextjs-tailwindcss</a></li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span>import {</span></span>\n<span class="line"><span>  createImageUrlBuilder,</span></span>\n<span class="line"><span>  createCurrentUserHook,</span></span>\n<span class="line"><span>  createClient,</span></span>\n<span class="line"><span>} from "next-sanity"; // 注意该方案将报错：ImageUrlBuilder不再受支持！</span></span>\n<span class="line"><span>export const config = {</span></span>\n<span class="line"><span>  /*COMMENT:</span></span>\n<span class="line"><span>\t * Find your project ID and dataset in `sanity.json` in your studio project.</span></span>\n<span class="line"><span>\t * These are considered “public”, but you can use environment variables</span></span>\n<span class="line"><span>\t * if you want differ between local dev and production.</span></span>\n<span class="line"><span>\t *</span></span>\n<span class="line"><span>\t * https://nextjs.org/docs/basic-features/environment-variables</span></span>\n<span class="line"><span>\t **/</span></span>\n<span class="line"><span>  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",</span></span>\n<span class="line"><span>  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,</span></span>\n<span class="line"><span>  apiVersion: "2021-08-11", // or today\'s date for latest</span></span>\n<span class="line"><span>  /**</span></span>\n<span class="line"><span>\t * Set useCdn to `false` if your application require the freshest possible</span></span>\n<span class="line"><span>\t * data always (potentially slightly slower and a bit more expensive).</span></span>\n<span class="line"><span>\t * Authenticated request (like preview) will always bypass the CDN</span></span>\n<span class="line"><span>\t **/</span></span>\n<span class="line"><span>  useCdn: process.env.NODE_ENV === "production",</span></span>\n<span class="line"><span>};</span></span>\n<span class="line"><span>// COMMENT: Set up the client for fetching data in the getProps page function</span></span>\n<span class="line"><span>export const sanityClient = createClient(config);</span></span>\n<span class="line"><span>// COMMENT: Set up a helper function for generating Image URLs with only the asset reference data in your documents</span></span>\n<span class="line"><span>export const urlFor = (source) => createImageUrlBuilder(config).image(source);</span></span>\n<span class="line"><span>// COMMENT: Helper function for using the current logged in user account</span></span>\n<span class="line"><span>export const useCurrentUser = createCurrentUserHook(config);</span></span>\n<span class="line"><span></span></span></code></pre>\n<ul>\n<li>❌! 注意 next-sanity 不再支持 createImageUrlBuilder，将出现图片链接插件报错，参考：<a href="https://stackoverflow.com/questions/71277628/typeerror-0-next-sanity-webpack-imported-module-0-createimageurlbuilder">https://stackoverflow.com/questions/71277628/typeerror-0-next-sanity-webpack-imported-module-0-createimageurlbuilder</a></li>\n<li><img src="https://cdn.nlark.com/yuque/0/2022/png/29677165/1667892113084-da88f4f1-eeaa-4b98-b970-cf50a90f72c2.png" alt="|300"></li>\n<li>需要另外在根目录下载 image-url： <code>npm install @sanity/image-url</code></li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span>import { createCurrentUserHook, createClient } from "next-sanity";</span></span>\n<span class="line"><span>import createImageUrlBuilder from "./node_modules/@sanity/image-url";</span></span>\n<span class="line"><span></span></span></code></pre>\n<h2 id="博文预览卡片">博文预览卡片<a class="anchor" href="#博文预览卡片"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h3 id="数据请求ssr--服务端渲染">数据请求：SSR- 服务端渲染<a class="anchor" href="#数据请求ssr--服务端渲染"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>每次请求，渲染一次：Next.js 作为中间服务器，将请求页面渲染给客户端；</li>\n<li>避免请求时，客户端一次加载全部内容 (bundle)</li>\n<li>将页面路径（Page route）转化为服务端路径 (Server-side route)</li>\n</ul>\n<h4 id="1-实现如何在-nextjs-中实现-ssr">1. 实现：如何在 Next.js 中实现 SSR？<a class="anchor" href="#1-实现如何在-nextjs-中实现-ssr"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>打开 index.tsx，添加函数 getServerSideProps，将服务端数据返回给客户端，</li>\n<li>💡 难点：将 <strong>props</strong> 返回给 Home 函数</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span>import { sanityClient, urlFor } from "../sanity";</span></span>\n<span class="line"><span>/* Get the Server Side Rendered Data back to the Client*/</span></span>\n<span class="line"><span>export const getServerSideProps = async () => {</span></span>\n<span class="line"><span>  const query = `*[_type =="post"]{</span></span>\n<span class="line"><span>\t\t_id,</span></span>\n<span class="line"><span>\t\ttitle,</span></span>\n<span class="line"><span>\t\tauthor->{</span></span>\n<span class="line"><span>\t\tname,</span></span>\n<span class="line"><span>\t\timage</span></span>\n<span class="line"><span>\t},</span></span>\n<span class="line"><span>\tdescription,</span></span>\n<span class="line"><span>\tmainImage,</span></span>\n<span class="line"><span>\tslug</span></span>\n<span class="line"><span>\t}`;</span></span>\n<span class="line"><span>  const posts = await sanityClient.fetch(query);</span></span>\n<span class="line"><span>  return {</span></span>\n<span class="line"><span>    props: {</span></span>\n<span class="line"><span>      posts,</span></span>\n<span class="line"><span>    },</span></span>\n<span class="line"><span>  };</span></span>\n<span class="line"><span>};</span></span>\n<span class="line"><span></span></span></code></pre>\n<ul>\n<li>💡 难点：定义 <strong>props 类型</strong></li>\n<li>根目录创建 TypeScript 定义文件：<strong>typings.d.ts</strong></li>\n<li>可在后台网站 Post > Inspect，查看数据类型</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> interface</span><span style="color:#B392F0"> Post</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\t_id</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#FFAB70">\t_createdAt</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#FFAB70">\ttitle</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#FFAB70">\tauthor</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\t\tname</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#FFAB70">\t\timage</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t};</span></span>\n<span class="line"><span style="color:#FFAB70">\tdescription</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#FFAB70">\tmainImage</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\t\tasset</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\t\t\turl</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t};</span></span>\n<span class="line"><span style="color:#E1E4E8">\t};</span></span>\n<span class="line"><span style="color:#FFAB70">\tslug</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\t\tcurrent</span><span style="color:#F97583">:</span><span style="color:#79B8FF"> string</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#E1E4E8">\t};</span></span>\n<span class="line"><span style="color:#FFAB70">\tbody</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> [</span><span style="color:#79B8FF">object</span><span style="color:#E1E4E8">];</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>定义 props 类型</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { Post } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "../typings"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">interface</span><span style="color:#B392F0"> Props</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#FFAB70">\tposts</span><span style="color:#F97583">:</span><span style="color:#E1E4E8"> [</span><span style="color:#B392F0">Post</span><span style="color:#E1E4E8">];</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#F97583">export</span><span style="color:#F97583"> default</span><span style="color:#F97583"> function</span><span style="color:#B392F0"> Home</span><span style="color:#E1E4E8">({ </span><span style="color:#FFAB70">posts</span><span style="color:#E1E4E8"> }</span><span style="color:#F97583">:</span><span style="color:#B392F0"> Props</span><span style="color:#E1E4E8">) {}</span></span>\n<span class="line"></span></code></pre>\n<h3 id="预览卡片样式">预览卡片：样式<a class="anchor" href="#预览卡片样式"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<ul>\n<li>参考：<a href="https://tailwindcss.com/docs/guides/create-react-app">Tailwind CSS 官方文档</a></li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">{</span></span>\n<span class="line"><span style="color:#6A737D">\t/* Posts */</span></span>\n<span class="line"><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#E1E4E8">&#x3C;</span><span style="color:#85E89D">div</span><span style="color:#B392F0"> className</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3:gap-6 p-2 lg:p-6"</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t{posts.</span><span style="color:#B392F0">map</span><span style="color:#E1E4E8">((</span><span style="color:#FFAB70">post</span><span style="color:#E1E4E8">) </span><span style="color:#F97583">=></span><span style="color:#E1E4E8"> (</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t&#x3C;</span><span style="color:#79B8FF">Link</span><span style="color:#B392F0"> key</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{post._id} </span><span style="color:#B392F0">href</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{</span><span style="color:#9ECBFF">`/post/${</span><span style="color:#E1E4E8">post</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">slug</span><span style="color:#9ECBFF">.</span><span style="color:#E1E4E8">current</span><span style="color:#9ECBFF">}`</span><span style="color:#E1E4E8">}></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t&#x3C;</span><span style="color:#85E89D">div</span><span style="color:#B392F0"> className</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"group cursor-pointer border rounded-lg overflow-hidden"</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t&#x3C;</span><span style="color:#85E89D">img</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\t\t\tclassName</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\t\t\tsrc</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{</span><span style="color:#B392F0">urlFor</span><span style="color:#E1E4E8">(post.mainImage).</span><span style="color:#B392F0">url</span><span style="color:#E1E4E8">()</span><span style="color:#F97583">!</span><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\t\t\talt</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">""</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t/></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t&#x3C;</span><span style="color:#85E89D">div</span><span style="color:#B392F0"> className</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"flex justify-between p-5 bg-white"</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t&#x3C;</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t\t&#x3C;</span><span style="color:#85E89D">p</span><span style="color:#B392F0"> className</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"text-lg font-bold"</span><span style="color:#E1E4E8">>{post.title}&#x3C;/</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t\t&#x3C;</span><span style="color:#85E89D">p</span><span style="color:#B392F0"> className</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"text-xs"</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t\t\t{post.description} by {post.author.name}</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t\t&#x3C;/</span><span style="color:#85E89D">p</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t&#x3C;</span><span style="color:#85E89D">img</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\t\t\t\tclassName</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">"h-12 w-12 rounded-full"</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\t\t\t\tsrc</span><span style="color:#F97583">=</span><span style="color:#E1E4E8">{</span><span style="color:#B392F0">urlFor</span><span style="color:#E1E4E8">(post.author.image).</span><span style="color:#B392F0">url</span><span style="color:#E1E4E8">()</span><span style="color:#F97583">!</span><span style="color:#E1E4E8">}</span></span>\n<span class="line"><span style="color:#B392F0">\t\t\t\t\t\talt</span><span style="color:#F97583">=</span><span style="color:#9ECBFF">""</span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t\t/></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t\t&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t\t&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t\t&#x3C;/</span><span style="color:#79B8FF">Link</span><span style="color:#E1E4E8">></span></span>\n<span class="line"><span style="color:#E1E4E8">\t))}</span></span>\n<span class="line"><span style="color:#E1E4E8">&#x3C;/</span><span style="color:#85E89D">div</span><span style="color:#E1E4E8">>;</span></span>\n<span class="line"></span></code></pre>',frontmatter={topic:null,type:null,category:"Front-End Frameworks",Datereviewed:null,reviewed:null,difficulty:null,comment:null,title:"02-数据请求与预览卡片渲染",tags:["NextJS"],status:[""],DateStarted:"2022-11-08T00:00:00.000Z","sr-due":"2023-07-02T00:00:00.000Z","sr-interval":4,"sr-ease":281,DateModified:"2024-04-19T00:00:00.000Z",draft:!0,minutes:4,words:899},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/next.js/02-数据请求与预览卡片渲染.md",url=void 0;function rawContent(){return'\n## 技术栈\n\n前端：[100-Front-End Roadmap/1. TechSkills/1.2 Web Dev/1.2.3 Front-End Frameworks/React/React](100-Front-End-Roadmap/1.-TechSkills/1.2-Web-Dev/1.2.3-Front-End-Frameworks/React/React), [O-NextJS](O-NextJS), [C-TailwindCSS](C-TailwindCSS) , [TypeScript](TypeScript)  \n后端 -CMS：[Sanity](Sanity)\n\n## 项目启动步骤\n\n#### 1. 运行开发环境\n\n- 运行 `npm run dev`\n\n#### 2. 打开后台内容管理系统：Sanity Studio\n\n- 进入> 项目文件夹 (前端，含 package.json) >**Sanity 项目文件夹** (后端，含 package.json)\n- 输入 `sanity login`> `sanity start`\n- 可能 Bug ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/Pasted-image-20230219224930.png)\n  - 在插件根目录添加 sanity.json 文件，文件内容见提示网站\n- 成功提示：![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667816734814-c82315ac-430a-469d-9ba1-e0fba8f5ba1e.png)\n\n#### 3. 打开后台网址并登录：http://localhost:3333\n\n- 成功提示：![](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667816908364-20aa7c2b-cf30-445b-bead-7fdca9ac140a.png)\n- 可以看到提供的 **模板表单条目 (schemas)，可个性化设计调整**\n\n## 后台数据库与前端连接配置\n\n#### 1. 进入 Sanity 项目文件夹> /schemas> post.js，个性化调整表单条目与类型\n\n- 在后台网站, 创建一条 Post\n- ![|230](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667887075605-f31e8541-a923-457a-a315-e64444f0578a.png)\n- 选择 Vision 标签> 输入 Query 指令，可以获取 Post 数据\n\n```bash\n*[_type =="post"]{\n_id,\ntitle,\nauthor->{\nname,\nimage\n},\ndescription,\nmainImage,\nslug\n}\n```\n\n- GROQ: [https://www.sanity.io/docs/query-cheat-sheet](https://www.sanity.io/docs/query-cheat-sheet)\n\n#### 2. 安装插件 next-sanity: 便于 API 请求，将后台内容与前端连接\n\n- 进入> 项目文件夹 **根目录**\n- 打开终端，输入 `npm i next-sanity`\n\n#### 3. 在根目录，创建配置文件\n\n- sanity.js\n  - 将后台数据库与前端连接\n- .env.local\n  - 存放环境变量\n\n#### 4. 设置 env.local\n\n- 打开/static > sanity.json， 获取相关参数\n- PUBLIC 参数：客户端与 API 同时可见\n\n```bash\nNEXT_PUBLIC_SANITY_DATASET=production\nNEXT_PUBLIC_SANITY_PROJECT_ID=j70xi0l8\n```\n\n#### 5. 设置 sanity.js 配置文件（与 firebase.js 原理类似）\n\n- 参考教程：[https://www.sanity.io/guides/sanity-nextjs-tailwindcss](https://www.sanity.io/guides/sanity-nextjs-tailwindcss)\n\n```JavaScript\nimport {\n  createImageUrlBuilder,\n  createCurrentUserHook,\n  createClient,\n} from "next-sanity"; // 注意该方案将报错：ImageUrlBuilder不再受支持！\nexport const config = {\n  /*COMMENT:\n\t * Find your project ID and dataset in `sanity.json` in your studio project.\n\t * These are considered “public”, but you can use environment variables\n\t * if you want differ between local dev and production.\n\t *\n\t * https://nextjs.org/docs/basic-features/environment-variables\n\t **/\n  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",\n  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,\n  apiVersion: "2021-08-11", // or today\'s date for latest\n  /**\n\t * Set useCdn to `false` if your application require the freshest possible\n\t * data always (potentially slightly slower and a bit more expensive).\n\t * Authenticated request (like preview) will always bypass the CDN\n\t **/\n  useCdn: process.env.NODE_ENV === "production",\n};\n// COMMENT: Set up the client for fetching data in the getProps page function\nexport const sanityClient = createClient(config);\n// COMMENT: Set up a helper function for generating Image URLs with only the asset reference data in your documents\nexport const urlFor = (source) => createImageUrlBuilder(config).image(source);\n// COMMENT: Helper function for using the current logged in user account\nexport const useCurrentUser = createCurrentUserHook(config);\n```\n\n- ❌! 注意 next-sanity 不再支持 createImageUrlBuilder，将出现图片链接插件报错，参考：[https://stackoverflow.com/questions/71277628/typeerror-0-next-sanity-webpack-imported-module-0-createimageurlbuilder](https://stackoverflow.com/questions/71277628/typeerror-0-next-sanity-webpack-imported-module-0-createimageurlbuilder)\n- ![|300](https://cdn.nlark.com/yuque/0/2022/png/29677165/1667892113084-da88f4f1-eeaa-4b98-b970-cf50a90f72c2.png)\n- 需要另外在根目录下载 image-url： `npm install @sanity/image-url`\n\n```JS\nimport { createCurrentUserHook, createClient } from "next-sanity";\nimport createImageUrlBuilder from "./node_modules/@sanity/image-url";\n```\n\n## 博文预览卡片\n\n### 数据请求：SSR- 服务端渲染\n\n- 每次请求，渲染一次：Next.js 作为中间服务器，将请求页面渲染给客户端；\n- 避免请求时，客户端一次加载全部内容 (bundle)\n- 将页面路径（Page route）转化为服务端路径 (Server-side route)\n\n#### 1. 实现：如何在 Next.js 中实现 SSR？\n\n- 打开 index.tsx，添加函数 getServerSideProps，将服务端数据返回给客户端，\n- 💡 难点：将 **props** 返回给 Home 函数\n\n```TSX\nimport { sanityClient, urlFor } from "../sanity";\n/* Get the Server Side Rendered Data back to the Client*/\nexport const getServerSideProps = async () => {\n  const query = `*[_type =="post"]{\n\t\t_id,\n\t\ttitle,\n\t\tauthor->{\n\t\tname,\n\t\timage\n\t},\n\tdescription,\n\tmainImage,\n\tslug\n\t}`;\n  const posts = await sanityClient.fetch(query);\n  return {\n    props: {\n      posts,\n    },\n  };\n};\n```\n\n- 💡 难点：定义 **props 类型**\n- 根目录创建 TypeScript 定义文件：**typings.d.ts**\n- 可在后台网站 Post > Inspect，查看数据类型\n\n```ts\nexport interface Post {\n\t_id: string;\n\t_createdAt: string;\n\ttitle: string;\n\tauthor: {\n\t\tname: string;\n\t\timage: string;\n\t};\n\tdescription: string;\n\tmainImage: {\n\t\tasset: {\n\t\t\turl: string;\n\t\t};\n\t};\n\tslug: {\n\t\tcurrent: string;\n\t};\n\tbody: [object];\n}\n```\n\n- 定义 props 类型\n\n```tsx\nimport { Post } from "../typings";\ninterface Props {\n\tposts: [Post];\n}\nexport default function Home({ posts }: Props) {}\n```\n\n### 预览卡片：样式\n\n- 参考：[Tailwind CSS 官方文档](https://tailwindcss.com/docs/guides/create-react-app)\n\n```tsx\n{\n\t/* Posts */\n}\n<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3:gap-6 p-2 lg:p-6">\n\t{posts.map((post) => (\n\t\t<Link key={post._id} href={`/post/${post.slug.current}`}>\n\t\t\t<div className="group cursor-pointer border rounded-lg overflow-hidden">\n\t\t\t\t<img\n\t\t\t\t\tclassName="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"\n\t\t\t\t\tsrc={urlFor(post.mainImage).url()!}\n\t\t\t\t\talt=""\n\t\t\t\t/>\n\t\t\t\t<div className="flex justify-between p-5 bg-white">\n\t\t\t\t\t<div>\n\t\t\t\t\t\t<p className="text-lg font-bold">{post.title}</p>\n\t\t\t\t\t\t<p className="text-xs">\n\t\t\t\t\t\t\t{post.description} by {post.author.name}\n\t\t\t\t\t\t</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<img\n\t\t\t\t\t\tclassName="h-12 w-12 rounded-full"\n\t\t\t\t\t\tsrc={urlFor(post.author.image).url()!}\n\t\t\t\t\t\talt=""\n\t\t\t\t\t/>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</Link>\n\t))}\n</div>;\n```\n'}function compiledContent(){return html}function getHeadings(){return[{depth:2,slug:"技术栈",text:"技术栈#"},{depth:2,slug:"项目启动步骤",text:"项目启动步骤#"},{depth:4,slug:"1-运行开发环境",text:"1. 运行开发环境#"},{depth:4,slug:"2-打开后台内容管理系统sanity-studio",text:"2. 打开后台内容管理系统：Sanity Studio#"},{depth:4,slug:"3-打开后台网址并登录httplocalhost3333",text:"3. 打开后台网址并登录：http://localhost:3333#"},{depth:2,slug:"后台数据库与前端连接配置",text:"后台数据库与前端连接配置#"},{depth:4,slug:"1-进入-sanity-项目文件夹-schemas-postjs个性化调整表单条目与类型",text:"1. 进入 Sanity 项目文件夹> /schemas> post.js，个性化调整表单条目与类型#"},{depth:4,slug:"2-安装插件-next-sanity-便于-api-请求将后台内容与前端连接",text:"2. 安装插件 next-sanity: 便于 API 请求，将后台内容与前端连接#"},{depth:4,slug:"3-在根目录创建配置文件",text:"3. 在根目录，创建配置文件#"},{depth:4,slug:"4-设置-envlocal",text:"4. 设置 env.local#"},{depth:4,slug:"5-设置-sanityjs-配置文件与-firebasejs-原理类似",text:"5. 设置 sanity.js 配置文件（与 firebase.js 原理类似）#"},{depth:2,slug:"博文预览卡片",text:"博文预览卡片#"},{depth:3,slug:"数据请求ssr--服务端渲染",text:"数据请求：SSR- 服务端渲染#"},{depth:4,slug:"1-实现如何在-nextjs-中实现-ssr",text:"1. 实现：如何在 Next.js 中实现 SSR？#"},{depth:3,slug:"预览卡片样式",text:"预览卡片：样式#"}]}const Content=createComponent(((n,s,a)=>{const{layout:t,...e}=frontmatter;return e.file=file,e.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};