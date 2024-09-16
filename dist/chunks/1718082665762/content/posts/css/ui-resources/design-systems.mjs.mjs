import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="s-design-systems">S-Design Systems<a class="anchor" href="#s-design-systems"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="design-systems--style-guides">Design Systems &#x26; Style Guides<a class="anchor" href="#design-systems--style-guides"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<blockquote>\n<p>Design systems, style guides, toolkits, docs. Some of these are design guides for top companies/websites</p>\n</blockquote>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<table><thead><tr><th>Website                           </th><th>Description</th></tr></thead><tbody><tr><td><a href="https://material.io/">Material Design</a></td><td>Google’s Material Design</td></tr><tr><td><a href="https://ant.design/">Ant Design</a></td><td>Design system for enterprise-level products</td></tr><tr><td><a href="https://developer.apple.com/design/resources/">Apple Design Resources</a></td><td>Guides and templates for using Apple design and UI</td></tr><tr><td><a href="https://primer.style/">Primer</a></td><td>Design, build, and create with GitHub’s design system</td></tr><tr><td><a href="https://arco.design/en-US">Arco.design</a></td><td>An enterprise-level design system jointly launched by the Bytedance GIP UED team and the architecture front-end team.</td></tr><tr><td><a href="https://www.oracle.com/webfolder/ux/middleware/alta/index.html">Alta UI</a></td><td>Oracle’s design system and toolkit</td></tr><tr><td><a href="https://pulse.heartbeat.ua/">Pulse</a></td><td>Design system, guides and React component library</td></tr><tr><td><a href="https://boltdesignsystem.com/">Bolt</a></td><td>Robust Twig and web component powered UI components</td></tr><tr><td><a href="https://clarity.design/">Clarity Design System</a></td><td>UX guidelines, HTML/CSS framework, and Angular components</td></tr><tr><td><a href="https://atlaskit.atlassian.com/">AtlasKit</a></td><td>Atlassian’s official UI library, built according to the Atlassian Design Guidelines</td></tr><tr><td><a href="https://www.audi.com/ci/en/guides/user-interface/introduction.html">Audi Design Resources</a></td><td>Audi UI design system and toolkit</td></tr><tr><td><a href="https://www.carbondesignsystem.com/">Carbon Design Systems</a></td><td>Carbon is IBM’s open-source design system for products and experiences</td></tr><tr><td><a href="https://www.yelp.com/styleguide">Yelp Style Guide</a></td><td>Yelp style guide, components and toolkit</td></tr><tr><td><a href="https://comet.discoveryeducation.com/">Comet</a></td><td>Scalable design system of visual language, components, and design assets</td></tr><tr><td><a href="https://etrade.design/">ETrade Design System</a></td><td>Guides and toolkits that blend finance with simplicity and ease of use</td></tr><tr><td><a href="https://sap.github.io/fundamental-styles/">Fundamental Library</a></td><td>Open source and community driven project for consistent user interfaces</td></tr><tr><td><a href="https://design.infor.com/">Infor Design</a></td><td>Guidelines and resources to create meaningful experiences for Infor’s products</td></tr><tr><td><a href="https://liferay.design/lexicon/">Lexicon</a></td><td>An experience language for crafting beautiful UI</td></tr><tr><td><a href="https://ux.mailchimp.com/patterns/color">Mailchimp UI/UX</a></td><td>Style guide and components from Mailchimp</td></tr><tr><td><a href="https://marvelapp.com/styleguide/overview/introduction">Marvel Style Guide</a></td><td>Set of design principles and components</td></tr><tr><td><a href="https://developer.microsoft.com/en-us/fluentui#/">Microsoft Fluent UI</a></td><td>Collection of UX frameworks from Microsoft</td></tr><tr><td><a href="https://design-system.pluralsight.com/">Pluralsight Design System</a></td><td>Design guide with components for designing with Pluralsight</td></tr><tr><td><a href="https://polaris.shopify.com/">Polaris</a></td><td>Design system that creates great experiences for all of Shopify’s merchants</td></tr><tr><td><a href="https://protocol.mozilla.org/">Mozilla Protocol</a></td><td>Protocol is a design system for Mozilla and Firefox websites</td></tr><tr><td><a href="http://styleguide.sendgrid.com/">SendGrid Style Guide</a></td><td>UI library for developing consistent UI/UX at SendGrid</td></tr><tr><td><a href="https://styleguide.vtex.com/">VTEX Styleguide</a></td><td>Reusable patterns, components and assets related to product design in VTEX</td></tr><tr><td><a href="https://rizzo.lonelyplanet.com/styleguide/design-elements">Rizzo</a></td><td>Style guide with UI components, JS components, widgets, etc</td></tr><tr><td><a href="https://atomizecode.com/">Atomize</a></td><td>UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly</td></tr><tr><td><a href="http://styleguides.io/">StyleGuides.io</a></td><td>A directory of 500+ styleguides</td></tr><tr><td><a href="https://uilibrary.github.io/done-design-system/">Done Design System</a></td><td>Open source design system, guides &#x26; components</td></tr><tr><td><a href="https://skoda-brand.com/explore-our-brand">Skoda Brand System</a></td><td>Design guideline for developing applications under the Skoda brand</td></tr><tr><td><a href="https://spectrum.adobe.com/">Spectrum</a></td><td>Adobe’s design system that provides components and tools to help product teams work more efficiently, and to make Adobe’s applications more cohesive.</td></tr><tr><td><a href="https://asphalt.gojek.io/">Asphalt</a></td><td>Gojek’s design language system. A collection of guidelines and components to create amazing user experiences.</td></tr><tr><td><a href="https://lawsofux.com/">Laws of UX</a></td><td>A collection of the key maxims that designers must consider when building user interfaces.</td></tr><tr><td><a href="https://www.checklist.design/">Checklist Design</a></td><td>Checklist Design is a curated list of checklists ranging from website pages, to UI components, all the way to branding assets.</td></tr><tr><td><a href="https://humanebydesign.com/">Humane By Design</a></td><td>A resource that provides guidance for designing ethically humane digital products through patterns focused on user well-being.</td></tr><tr><td><a href="https://guidelines.pr1mer.tech">Pr1mer Guidelines</a></td><td>An open source set of very general guidelines, inspired by Human Interface. Created and maintained by Pr1mer Tech</td></tr><tr><td><a href="https://www.patternfly.org/">Patterfly</a></td><td>PatternFly is an open source design system from Red Hat, Inc.</td></tr><tr><td><a href="https://www.patterns.dev">Patterns</a></td><td>A resource to improve on design patterns and component patterns for building powerful web apps with vanilla JavaScript and React.</td></tr></tbody></table>\n<h2 id="设计语言与设计系统">设计语言与设计系统<a class="anchor" href="#设计语言与设计系统"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<h4 id="1-fluent-design-system">1. Fluent Design System<a class="anchor" href="#1-fluent-design-system"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<blockquote>\n<p><a href="https://www.microsoft.com/design/fluent/#/">Microsoft Design|Fluent Design System</a> 中文翻译为流畅设计体系，是微软于 2017 年开发的设计语言。流畅设计是 Microsoft Design Language 2 的改版，其中包含为所有面向 Windows 10 设备和平台设计的软件中的<strong>设计和交互</strong>的指导原则。该体系基于五个关键元素：<strong>光感、深度、动效、材质和缩放</strong>。新的设计语言包括更多对<strong>动效、深度及半透明效果的</strong>使用。过渡到流畅设计体系是一个长期项目，没有具体的完成目标，但是从创作者更新以来，新设计语言的元素已被融入到个别应用程序中。它将在未来的 Windows 10 秋季创作者更新中更广泛地使用，但微软也表示，该设计体系不会在秋季创作者更新内完成。微软于 2017 年 5 月 11 日的 Microsoft Build 2017 开发者大会上公开了该设计体系。</p>\n</blockquote>\n<ul>\n<li><em>What’s new and coming for Windows UI: XAML and composition</em> 从概念上讲了一下 Fluent Design System 的各个部分。</li>\n<li><em>Introducing Fluent Design</em> ，介绍了 Fluent Design System 的各个部分。</li>\n<li>Build 2018 上的一些微软的 YouTube 分享\n<ul>\n<li>Fluent Design: Evolving our Design System : Build 2018</li>\n<li>Microsoft Build 2018 - Fluent Design System Demo</li>\n<li>Microsoft Build 2018 - Fluent Design System Evolution</li>\n<li>Fluent Design System inside of Microsoft: Office : Build 2018</li>\n</ul>\n</li>\n</ul>\n<h4 id="2-material-design">2. Material Design<a class="anchor" href="#2-material-design"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<blockquote>\n<p>Material Design 中文翻译为质感设计，或是材质设计、材料设计。这是由 Google 开发的设计语言。扩展于 Google Now 的“卡片”设计，Material Design 基于网格的布局、响应动画与过渡、填充、深度效果（如光线和阴影）。设计师马蒂亚斯·杜阿尔特（Matías Duarte）解释说：“与真正的纸张不同，我们的数字材质可以智能地扩大和变形。材质具有实体的表面和边缘。接缝和阴影表明组件的含义。”Google 指出他们的新设计语言基于纸张和油墨。</p>\n</blockquote>\n<ul>\n<li><a href="https://m3.material.io/">Material Design</a></li>\n<li>Material Design 于 2014 年的 Google I/O 大会上发布\n<ul>\n<li><a href="https://www.youtube.com/watch?v=97SWYiRtF0Y">Google I/O 2014 - Material witness: How Android material applications work - YouTube</a></li>\n<li>其可借助 v7 appcompat 库用于 Android 2.1 及以上版本，几乎支持所有 2009 年以后制造的 Android 设备。随后，Material Design 扩展到 Google 的网络和移动产品阵列，提供一致的跨平台和应用程序体验。Google 还为第三方开发人员发布了 API，开发人员可将质感设计应用到他们的应用程序中。</li>\n</ul>\n</li>\n<li>Material UI 的工程实现\n<ul>\n<li><a href="https://getmdl.io/">Material Design Lite</a>\n<ul>\n<li>这是 Google 官方的框架，简单易用。</li>\n</ul>\n</li>\n<li><a href="https://materializecss.com/">Documentation - Materialize</a>\n<ul>\n<li>一组类似于 Bootstrap 的前端 UI 框架。</li>\n</ul>\n</li>\n<li><a href="https://mui.com/core/">MUI Core: Ready to use components, free forever</a>\n<ul>\n<li>基于 Google Material Design 的 React 组件实现。</li>\n</ul>\n</li>\n<li><a href="https://www.muicss.com/">MUI - Material Design CSS Framework</a>\n<ul>\n<li>轻量级的 CSS 框架，遵循 Google 的 Material Design 设计方针</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<h4 id="3-other-design-systems">3. Other Design Systems<a class="anchor" href="#3-other-design-systems"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h4>\n<ul>\n<li><a href="https://developer.apple.com/design/">Design - Apple Developer</a>\n<ul>\n<li>苹果的各种设备的设计规范和指导，一方面可以让你的 App 能和苹果的 UI 融合在一起，另一方面，你也可以从中看到苹果的审美和思维方式。</li>\n</ul>\n</li>\n<li><a href="https://www.ibm.com/design/language/">IBM Design Language</a>\n<ul>\n<li>IBM 公司的这个设计语言的确比较出众。所以，在这里推荐一下。</li>\n</ul>\n</li>\n<li><a href="https://www.lightningdesignsystem.com/">Lightning Design System</a>\n<ul>\n<li>在 Salesforce 生态系统中用于创建统一 UI 的设计模式、组件和指南的集合，是一个企业级的产品。</li>\n</ul>\n</li>\n<li><a href="https://design.facebook.com/">Design at Meta is dedicated to what’s new in design</a>\n<ul>\n<li>Facebook Design - What’s on our mind? ，Facebook 的设计师们收集的一系列的文章、视频和资源。很不错哦。</li>\n</ul>\n</li>\n</ul>',frontmatter={topic:null,category:"Web Design",Datereviewed:null,reviewed:null,difficulty:null,comment:null,aliases:["S-Design Systems"],draft:!1,title:"S-Design Systems",type:"S",tags:null,DateStarted:"2024-01-04T00:00:00.000Z",DateModified:"2024-04-19T00:00:00.000Z",status:null,"linter-yaml-title-alias":"S-Design Systems",minutes:7,words:1309},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/css/ui-resources/design-systems.md",url=void 0;function rawContent(){return"\n# S-Design Systems\n\n## Design Systems & Style Guides\n\n> Design systems, style guides, toolkits, docs. Some of these are design guides for top companies/websites\n\n| Website&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Description                                                                                                                                           |\n| -------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |\n| [Material Design](https://material.io/)                                                                  | Google's Material Design                                                                                                                              |\n| [Ant Design](https://ant.design/)                                                                        | Design system for enterprise-level products                                                                                                           |\n| [Apple Design Resources](https://developer.apple.com/design/resources/)                                  | Guides and templates for using Apple design and UI                                                                                                    |\n| [Primer](https://primer.style/)                                                                          | Design, build, and create with GitHub’s design system                                                                                                 |\n| [Arco.design](https://arco.design/en-US)                                                                 | An enterprise-level design system jointly launched by the Bytedance GIP UED team and the architecture front-end team.                                 |\n| [Alta UI](https://www.oracle.com/webfolder/ux/middleware/alta/index.html)                                | Oracle's design system and toolkit                                                                                                                    |\n| [Pulse](https://pulse.heartbeat.ua/)                                                                     | Design system, guides and React component library                                                                                                     |\n| [Bolt](https://boltdesignsystem.com/)                                                                    | Robust Twig and web component powered UI components                                                                                                   |\n| [Clarity Design System](https://clarity.design/)                                                         | UX guidelines, HTML/CSS framework, and Angular components                                                                                             |\n| [AtlasKit](https://atlaskit.atlassian.com/)                                                              | Atlassian's official UI library, built according to the Atlassian Design Guidelines                                                                   |\n| [Audi Design Resources](https://www.audi.com/ci/en/guides/user-interface/introduction.html)              | Audi UI design system and toolkit                                                                                                                     |\n| [Carbon Design Systems](https://www.carbondesignsystem.com/)                                             | Carbon is IBM’s open-source design system for products and experiences                                                                                |\n| [Yelp Style Guide](https://www.yelp.com/styleguide)                                                      | Yelp style guide, components and toolkit                                                                                                              |\n| [Comet](https://comet.discoveryeducation.com/)                                                           | Scalable design system of visual language, components, and design assets                                                                              |\n| [ETrade Design System](https://etrade.design/)                                                           | Guides and toolkits that blend finance with simplicity and ease of use                                                                                |\n| [Fundamental Library](https://sap.github.io/fundamental-styles/)                                         | Open source and community driven project for consistent user interfaces                                                                               |\n| [Infor Design](https://design.infor.com/)                                                                | Guidelines and resources to create meaningful experiences for Infor’s products                                                                        |\n| [Lexicon](https://liferay.design/lexicon/)                                                               | An experience language for crafting beautiful UI                                                                                                      |\n| [Mailchimp UI/UX](https://ux.mailchimp.com/patterns/color)                                               | Style guide and components from Mailchimp                                                                                                             |\n| [Marvel Style Guide](https://marvelapp.com/styleguide/overview/introduction)                             | Set of design principles and components                                                                                                               |\n| [Microsoft Fluent UI](https://developer.microsoft.com/en-us/fluentui#/)                                  | Collection of UX frameworks from Microsoft                                                                                                            |\n| [Pluralsight Design System](https://design-system.pluralsight.com/)                                      | Design guide with components for designing with Pluralsight                                                                                           |\n| [Polaris](https://polaris.shopify.com/)                                                                  | Design system that creates great experiences for all of Shopify’s merchants                                                                           |\n| [Mozilla Protocol](https://protocol.mozilla.org/)                                                        | Protocol is a design system for Mozilla and Firefox websites                                                                                          |\n| [SendGrid Style Guide](http://styleguide.sendgrid.com/)                                                  | UI library for developing consistent UI/UX at SendGrid                                                                                                |\n| [VTEX Styleguide](https://styleguide.vtex.com/)                                                          | Reusable patterns, components and assets related to product design in VTEX                                                                            |\n| [Rizzo](https://rizzo.lonelyplanet.com/styleguide/design-elements)                                       | Style guide with UI components, JS components, widgets, etc                                                                                           |\n| [Atomize](https://atomizecode.com/)                                                                      | UI framework that helps developers collaborate with designers and build consistent user interfaces effortlessly                                       |\n| [StyleGuides.io](http://styleguides.io/)                                                                 | A directory of 500+ styleguides                                                                                                                       |\n| [Done Design System](https://uilibrary.github.io/done-design-system/)                                    | Open source design system, guides & components                                                                                                        |\n| [Skoda Brand System](https://skoda-brand.com/explore-our-brand)                                          | Design guideline for developing applications under the Skoda brand                                                                                    |\n| [Spectrum](https://spectrum.adobe.com/)                                                                  | Adobe’s design system that provides components and tools to help product teams work more efficiently, and to make Adobe’s applications more cohesive. |\n| [Asphalt](https://asphalt.gojek.io/)                                                                     | Gojek’s design language system. A collection of guidelines and components to create amazing user experiences.                                         |\n| [Laws of UX](https://lawsofux.com/)                                                                      | A collection of the key maxims that designers must consider when building user interfaces.                                                            |\n| [Checklist Design](https://www.checklist.design/)                                                        | Checklist Design is a curated list of checklists ranging from website pages, to UI components, all the way to branding assets.                        |\n| [Humane By Design](https://humanebydesign.com/)                                                          | A resource that provides guidance for designing ethically humane digital products through patterns focused on user well-being.                        |\n| [Pr1mer Guidelines](https://guidelines.pr1mer.tech)                                                      | An open source set of very general guidelines, inspired by Human Interface. Created and maintained by Pr1mer Tech                                     |\n| [Patterfly](https://www.patternfly.org/)                                                                 | PatternFly is an open source design system from Red Hat, Inc.                                                                                         |\n| [Patterns](https://www.patterns.dev)                                                                     | A resource to improve on design patterns and component patterns for building powerful web apps with vanilla JavaScript and React.                     |\n\n## 设计语言与设计系统\n\n#### 1. Fluent Design System\n\n> [Microsoft Design|Fluent Design System](https://www.microsoft.com/design/fluent/#/) 中文翻译为流畅设计体系，是微软于 2017 年开发的设计语言。流畅设计是 Microsoft Design Language 2 的改版，其中包含为所有面向 Windows 10 设备和平台设计的软件中的**设计和交互**的指导原则。该体系基于五个关键元素：**光感、深度、动效、材质和缩放**。新的设计语言包括更多对**动效、深度及半透明效果的**使用。过渡到流畅设计体系是一个长期项目，没有具体的完成目标，但是从创作者更新以来，新设计语言的元素已被融入到个别应用程序中。它将在未来的 Windows 10 秋季创作者更新中更广泛地使用，但微软也表示，该设计体系不会在秋季创作者更新内完成。微软于 2017 年 5 月 11 日的 Microsoft Build 2017 开发者大会上公开了该设计体系。\n\n- _What’s new and coming for Windows UI: XAML and composition_ 从概念上讲了一下 Fluent Design System 的各个部分。\n- _Introducing Fluent Design_ ，介绍了 Fluent Design System 的各个部分。\n- Build 2018 上的一些微软的 YouTube 分享\n  - Fluent Design: Evolving our Design System : Build 2018\n  - Microsoft Build 2018 - Fluent Design System Demo\n  - Microsoft Build 2018 - Fluent Design System Evolution\n  - Fluent Design System inside of Microsoft: Office : Build 2018\n\n#### 2. Material Design\n\n> Material Design 中文翻译为质感设计，或是材质设计、材料设计。这是由 Google 开发的设计语言。扩展于 Google Now 的“卡片”设计，Material Design 基于网格的布局、响应动画与过渡、填充、深度效果（如光线和阴影）。设计师马蒂亚斯·杜阿尔特（Matías Duarte）解释说：“与真正的纸张不同，我们的数字材质可以智能地扩大和变形。材质具有实体的表面和边缘。接缝和阴影表明组件的含义。”Google 指出他们的新设计语言基于纸张和油墨。\n\n- [Material Design](https://m3.material.io/)\n- Material Design 于 2014 年的 Google I/O 大会上发布\n  - [Google I/O 2014 - Material witness: How Android material applications work - YouTube](https://www.youtube.com/watch?v=97SWYiRtF0Y)\n  - 其可借助 v7 appcompat 库用于 Android 2.1 及以上版本，几乎支持所有 2009 年以后制造的 Android 设备。随后，Material Design 扩展到 Google 的网络和移动产品阵列，提供一致的跨平台和应用程序体验。Google 还为第三方开发人员发布了 API，开发人员可将质感设计应用到他们的应用程序中。\n- Material UI 的工程实现\n  - [Material Design Lite](https://getmdl.io/)\n    - 这是 Google 官方的框架，简单易用。\n  - [Documentation - Materialize](https://materializecss.com/)\n    - 一组类似于 Bootstrap 的前端 UI 框架。\n  - [MUI Core: Ready to use components, free forever](https://mui.com/core/)\n    - 基于 Google Material Design 的 React 组件实现。\n  - [MUI - Material Design CSS Framework](https://www.muicss.com/)\n    - 轻量级的 CSS 框架，遵循 Google 的 Material Design 设计方针\n\n#### 3. Other Design Systems\n\n- [Design - Apple Developer](https://developer.apple.com/design/)\n  - 苹果的各种设备的设计规范和指导，一方面可以让你的 App 能和苹果的 UI 融合在一起，另一方面，你也可以从中看到苹果的审美和思维方式。\n- [IBM Design Language](https://www.ibm.com/design/language/)\n  - IBM 公司的这个设计语言的确比较出众。所以，在这里推荐一下。\n- [Lightning Design System](https://www.lightningdesignsystem.com/)\n  - 在 Salesforce 生态系统中用于创建统一 UI 的设计模式、组件和指南的集合，是一个企业级的产品。\n- [Design at Meta is dedicated to what's new in design](https://design.facebook.com/)\n  - Facebook Design - What’s on our mind? ，Facebook 的设计师们收集的一系列的文章、视频和资源。很不错哦。\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"s-design-systems",text:"S-Design Systems#"},{depth:2,slug:"design-systems--style-guides",text:"Design Systems & Style Guides#"},{depth:2,slug:"设计语言与设计系统",text:"设计语言与设计系统#"},{depth:4,slug:"1-fluent-design-system",text:"1. Fluent Design System#"},{depth:4,slug:"2-material-design",text:"2. Material Design#"},{depth:4,slug:"3-other-design-systems",text:"3. Other Design Systems#"}]}const Content=createComponent(((e,t,n)=>{const{layout:s,...i}=frontmatter;return i.file=file,i.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};