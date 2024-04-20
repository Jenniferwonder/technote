<h1 align="center">瞻思笔记 | Technote</h1>
<p align="center">
  <i>瞻思笔记是一个分享编程笔记的网站，基于 Astro 与 fuwari 模板构建</i>
  <br/>
<b><a href="https://jenniferwonder.github.io/technote">🌍在线访问</a></b> | <b><a href="https://github.com/jenniferwonder/technote">GitHub</a></b>
  <br/><br/>
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-0aa8d2?logo=opensourceinitiative&logoColor=fff" alt="License MIT">
  </a>
</p>

### 本站使用的技术和工具

- 主框架：[Astro](https://astro.build)
- 模板：[fuwari](https://github.com/jenniferwonder/fuwari)
- 样式：Tailwind, Stylus
- 交互: Svelte
- 笔记编辑与管理：Obsidian

### 功能特性

- [x] 原模版标签、分类按命名排序，调整为按笔记数量排序 ✅ 2024-04-19
- [ ] 添加单页目录 ToC
- [ ] 添加边栏隐藏，宽屏视图
- [ ] 标签组件改为标签云样式
- [ ] 添加多语种支持

### 界面展示

![screely-1713582572477.png](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/full-stack/astro-blog-technote.png)

### 自定义配置

- 自定义笔记 yaml (可选)
  - [x] 自定义笔记发布时间 yaml：`publish` 批量转 `DateCreated` ✅ 2024-04-18
- 自定义个人信息组件相关链接及配置 Icon (可选)
  - [x] 自定义 Icon: [Open Source Icon Sets - Iconify](https://icon-sets.iconify.design/) ✅ 2024-04-18
- 自定义发布网址与页面路由
  - [x] 自定义发布路径: `https://jenniferwonder.github.io/technote` ✅ 2024-04-18
  - [x] 页面根路由 `/` 转 `/technote`，避免原路径跳转报错 ✅ 2024-04-18
    - vs code `ctrl p` 打开受影响组件，并更新对应路由
- 笔记图片与链接批量更新处理，统一管理，同时避免渲染出错
  - [x] 图片批量压缩上传 gh ✅ 2024-04-18
    - `git` + PicList 管理
  - [x] 图片链接批量处理，本地链接转远程 gh 远程链接 ✅ 2024-04-18
    - vs code 批量替换
  - [x] 笔记内链设为相对路径，wikilink 批量转 markdown link ✅ 2024-04-18
    - 使用插件：[obsidian-consistent-attachments-and-links](https://github.com/dy-sh/obsidian-consistent-attachments-and-links)

### 批量发布

- ❌Astro 官方推荐 workflow 运行会报错，无法识别本项目中的图片链接转换代码
- ✅可行发布方案：
  - `npm run build` 本地构建生成 `dist` 文件夹
  - 配置 GitHub action workflow 将 `dist` 发布至 GitHub Pages
    - 使用 `gh-pages`

<p align="center">
  <br>

  <a href="https://github.com/jenniferwonder/technote">
    <img src="https://github.githubassets.com/images/icons/emoji/octocat.png" />
  </a>
  <br><br>
  <i>Thank you for Visiting</i>
</p>
