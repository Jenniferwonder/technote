import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="package-manager">Package Manager<a class="anchor" href="#package-manager"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="发版及-changelog-自动化">发版及 Changelog 自动化<a class="anchor" href="#发版及-changelog-自动化"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p><a href="https://github.com/conventional-changelog/conventional-changelog/tree/master">GitHub - conventional-changelog/conventional-changelog: Generate changelogs and release notes from a project’s commit messages and metadata.</a>\n<a href="https://github.com/semantic-release/semantic-release?tab=readme-ov-file">semantic-release/semantic-release: Fully automated version management and package publishing</a>\n<a href="https://github.com/googleapis/release-please">googleapis/release-please: generate release PRs based on the conventionalcommits.org spec</a></p>\n<ul>\n<li><a href="https://github.com/absolute-version/commit-and-tag-version?tab=readme-ov-file">absolute-version/commit-and-tag-version: Fork of the excellent standard-version. Automate versioning and CHANGELOG generation</a></li>\n</ul>\n<h3 id="参考项目">参考项目<a class="anchor" href="#参考项目"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h3>\n<p><a href="https://github.com/rcdexta/react-trello/blob/master/package.json">react-trello/package.json at master · rcdexta/react-trello · GitHub</a></p>\n<h2 id="提效工具">提效工具<a class="anchor" href="#提效工具"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="ni">ni<a class="anchor" href="#ni"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><a href="https://github.com/antfu-collective/ni">antfu/ni</a></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Command</th><th></th><th>For</th></tr></thead><tbody><tr><td>ni</td><td></td><td>install</td></tr><tr><td></td><td>ni -D</td><td></td></tr><tr><td></td><td>ni -g</td><td></td></tr><tr><td>nr dev</td><td></td><td>run dev</td></tr><tr><td></td><td>nr -</td><td>run last script</td></tr><tr><td>nlx</td><td></td><td>npx … (download &#x26; execute)</td></tr><tr><td>nun</td><td></td><td>uninstall</td></tr><tr><td>nu</td><td></td><td>update</td></tr><tr><td>ni -v</td><td></td><td>show version</td></tr><tr><td>ni -h</td><td></td><td>show help</td></tr></tbody></table>\n<h4 id="taze">taze<a class="anchor" href="#taze"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><a href="https://github.com/antfu-collective/taze">GitHub - antfu-collective/taze: 🥦 A modern cli tool that keeps your deps fresh</a></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Command</th><th>For</th></tr></thead><tbody><tr><td>npx taze</td><td></td></tr><tr><td>npx taze -w</td><td>write update to package.json</td></tr><tr><td>taze major</td><td></td></tr><tr><td>taze minor</td><td></td></tr><tr><td>taze patch</td><td></td></tr></tbody></table>\n<h4 id="bump">bump<a class="anchor" href="#bump"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<p><a href="https://jstools.dev/version-bump-prompt/">Version Bump Prompt</a></p>\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Command</th><th>For</th></tr></thead><tbody><tr><td>bump</td><td>update current project version to major/ minor/ patch release</td></tr></tbody></table>\n<h2 id="多包管理工具">多包管理工具<a class="anchor" href="#多包管理工具"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<p>lerner</p>\n<h2 id="包管理工具对比">包管理工具对比<a class="anchor" href="#包管理工具对比"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th></th><th>npm</th><th>pnpm</th><th>yarn</th></tr></thead><tbody><tr><td></td><td></td><td></td><td></td></tr></tbody></table>',frontmatter={title:"package-manager",topic:null,type:"D",tags:["DevPractice"],category:"Programming",DateStarted:"2024-04-27T00:00:00.000Z",DateModified:"2024-06-01T00:00:00.000Z",Datereviewed:null,reviewed:null,difficulty:null,status:["Capturing"],comment:null,draft:!0,minutes:1,words:128},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/front-end-tooling/package-manager.md",url=void 0;function rawContent(){return"# Package Manager\n## 发版及 Changelog 自动化\n\n[GitHub - conventional-changelog/conventional-changelog: Generate changelogs and release notes from a project's commit messages and metadata.](https://github.com/conventional-changelog/conventional-changelog/tree/master)\n[semantic-release/semantic-release: Fully automated version management and package publishing](https://github.com/semantic-release/semantic-release?tab=readme-ov-file)\n[googleapis/release-please: generate release PRs based on the conventionalcommits.org spec](https://github.com/googleapis/release-please)\n- [absolute-version/commit-and-tag-version: Fork of the excellent standard-version. Automate versioning and CHANGELOG generation](https://github.com/absolute-version/commit-and-tag-version?tab=readme-ov-file)\n### 参考项目\n[react-trello/package.json at master · rcdexta/react-trello · GitHub](https://github.com/rcdexta/react-trello/blob/master/package.json)\n## 提效工具\n#### ni\n[antfu/ni](https://github.com/antfu-collective/ni)\n\n| Command |       | For                          |\n| ------- | ----- | ---------------------------- |\n| ni      |       | install                      |\n|         | ni -D |                              |\n|         | ni -g |                              |\n| nr dev  |       | run dev                      |\n|         | nr -  | run last script              |\n| nlx     |       | npx ... (download & execute) |\n| nun     |       | uninstall                    |\n| nu      |       | update                       |\n| ni -v   |       | show version                 |\n| ni -h   |       | show help                    |\n#### taze\n[GitHub - antfu-collective/taze: 🥦 A modern cli tool that keeps your deps fresh](https://github.com/antfu-collective/taze)\n\n| Command     | For                          |\n| ----------- | ---------------------------- |\n| npx taze    |                              |\n| npx taze -w | write update to package.json |\n| taze major  |                              |\n| taze minor  |                              |\n| taze patch  |                              |\n\n#### bump\n[Version Bump Prompt](https://jstools.dev/version-bump-prompt/)\n\n\n| Command | For                                                           |\n| ------- | ------------------------------------------------------------- |\n| bump    | update current project version to major/ minor/ patch release |\n\n\n## 多包管理工具\nlerner\n\n## 包管理工具对比 \n\n|     | npm | pnpm | yarn |\n| --- | --- | ---- | ---- |\n|     |     |      |      |\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"package-manager",text:"Package Manager#"},{depth:2,slug:"发版及-changelog-自动化",text:"发版及 Changelog 自动化#"},{depth:3,slug:"参考项目",text:"参考项目#"},{depth:2,slug:"提效工具",text:"提效工具#"},{depth:4,slug:"ni",text:"ni#"},{depth:4,slug:"taze",text:"taze#"},{depth:4,slug:"bump",text:"bump#"},{depth:2,slug:"多包管理工具",text:"多包管理工具#"},{depth:2,slug:"包管理工具对比",text:"包管理工具对比#"}]}const Content=createComponent(((n,t,e)=>{const{layout:a,...o}=frontmatter;return o.file=file,o.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};