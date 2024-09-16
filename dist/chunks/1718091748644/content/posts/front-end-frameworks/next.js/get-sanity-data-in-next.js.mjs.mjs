import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h3 id="get-sanity-data-in-nextjs">Get Sanity Data in Next.js<a class="anchor" href="#get-sanity-data-in-nextjs"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<h4 id="1-libraries-needed-to-get-data">1. Libraries needed to get data<a class="anchor" href="#1-libraries-needed-to-get-data"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#6A737D">// Libraries needed to get data</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#F97583"> type</span><span style="color:#E1E4E8"> { NextPage } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "next"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Head </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "next/head"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Image </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "next/image"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> Link </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "next/link"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { useRouter } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "next/router"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D">// Sanity Library From Medium-Clone</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { sanityClient, urlFor } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "sanity"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#6A737D">// Sanity Library From Tutorials</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { getClient, usePreviewSubscription } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "@lib/sanity"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#F97583">import</span><span style="color:#E1E4E8"> { groq } </span><span style="color:#F97583">from</span><span style="color:#9ECBFF"> "next-sanity"</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"></span></code></pre>\n<h4 id="2-functions-used-to-get-data">2. Functions used to get data<a class="anchor" href="#2-functions-used-to-get-data"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li>getStaticProps</li>\n<li>useRouter</li>\n<li>usePreviewSubscription</li>\n<li>const query = groq<code>...</code></li>\n<li>getClient().fetch()</li>\n<li>sanityClient.fetch()</li>\n</ul>',frontmatter={title:"get-sanity-data-in-next.js",topic:null,type:null,tags:["NextJS"],category:"Front-End Frameworks",Datereviewed:null,reviewed:null,difficulty:null,status:null,comment:null,DateStarted:"2023-11-30T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",draft:!0,minutes:1,words:78},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-frameworks/next.js/get-sanity-data-in-next.js.md",url=void 0;function rawContent(){return'\n### Get Sanity Data in Next.js\n\n#### 1. Libraries needed to get data\n\n```jsx\n// Libraries needed to get data\nimport type { NextPage } from "next";\nimport Head from "next/head";\nimport Image from "next/image";\nimport Link from "next/link";\nimport { useRouter } from "next/router";\n\n// Sanity Library From Medium-Clone\nimport { sanityClient, urlFor } from "sanity";\n\n// Sanity Library From Tutorials\nimport { getClient, usePreviewSubscription } from "@lib/sanity";\nimport { groq } from "next-sanity";\n```\n\n#### 2. Functions used to get data\n\n- getStaticProps\n- useRouter\n- usePreviewSubscription\n- const query = groq`...`\n- getClient().fetch()\n- sanityClient.fetch()\n'}function compiledContent(){return html}function getHeadings(){return[{depth:3,slug:"get-sanity-data-in-nextjs",text:"Get Sanity Data in Next.js#"},{depth:4,slug:"1-libraries-needed-to-get-data",text:"1. Libraries needed to get data#"},{depth:4,slug:"2-functions-used-to-get-data",text:"2. Functions used to get data#"}]}const Content=createComponent(((n,e,s)=>{const{layout:t,...a}=frontmatter;return a.file=file,a.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};