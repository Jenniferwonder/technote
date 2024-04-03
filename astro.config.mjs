import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";
// import markdown from "remark-parse";
// import starlightLinksValidator from "starlight-links-validator";
// import wikiLinkPlugin from "@portaljs/remark-wiki-link";
// import { getPermalinks } from "@portaljs/remark-wiki-link";
import react from "@astrojs/react";

// import rehypeAstroRelativeMarkdownLinks from "astro-rehype-relative-markdown-links";

// TODO: support for markdown link or wikilink
// https://github.com/vernak2539/astro-rehype-relative-markdown-links
// https://stackoverflow.com/questions/76163067/using-markdown-wiki-links-in-astro-framework
// https://starlight-links-validator.vercel.app/getting-started/

// const processor = unified().use(markdown).use(wikiLinkPlugin);
// const pageUrlPathPrefix = "http://localhost:4321/";
// const options = {
// contentPath:"",
// basePath: "/js-note",
// };
// https://astro.build/config
export default defineConfig({
	site: "https://jenniferwonder.github.io",
	base: "/technote",
	// markdown: {
	// 	rehypePlugins: [rehypeAstroRelativeMarkdownLinks, options],
	// 	remarkPlugins: [
	// 		[
	// 			wikiLinkPlugin,
	// 			{
	// 				pathFormat: "obsidian-absolute",
	// 				// generate url of the linked page.
	// 				// here `slug` would be "Page Name" for wiki link [[Page Name]].
	// 				wikiLinkResolver: (slug) => [pageUrlPathPrefix + slug],
	// 			},
	// 		],
	// 	],
	// },
	integrations: [
		starlight({
			sidebar: [
				{
					label: "Overview",
					link: "overview",
				},
				{
					label: "JS",
					collapsed: true,
					// items: [
					// 	{
					// 		label: "基础",
					// 		collapsed: true,
					// 		autogenerate: {
					// 			directory: "js/basics",
					// 		},
					// 		translations: { en: "Basics" },
					// 	},
					// 	{
					// 		label: "数组",
					// 		collapsed: true,
					// 		autogenerate: {
					// 			directory: "js/array",
					// 		},
					// 		translations: { en: "Array" },
					// 	},
					// ],
					autogenerate: {
						directory: "js",
					},
				},
				{
					label: "React",
					collapsed: true,
					autogenerate: {
						directory: "react",
					},
				},
				// {
				// 	label: "Guides",
				// 	items: [
				// 		// Each item here is one entry in the navigation menu.
				// 		{ label: "Example Guide", link: "/guides/example/" },
				// 	],
				// },
				/* 
    {
    	label: "Reference",
    	autogenerate: { directory: "reference" },
    }, */
				/* {
    	label: "String Instance Method",
    	autogenerate: { directory: "string-instance" },
    }, */
				// Add the generated sidebar group to the sidebar.
				// obsidianSidebarGroup,
			],
			title: "瞻思笔记",
			// translations: { en: "JenCode" },
			editLink: {
				baseUrl: "https://github.com/Jenniferwonder/js-note/tree/main/",
			},
			components: {
				// Override
				PageTitle: "./src/components/PageTitle.astro",
				ContentPanel: "./src/components/ContentPanel.astro",
				MarkdownContent: "./src/components/MarkdownContent.astro",
				// PageSidebar: "./src/components/PageSidebar.astro",
			},
			social: {
				github: "https://github.com/Jenniferwonder/js-note",
			},
			// Set English as the default language for this site.
			defaultLocale: "root",
			locales: {
				// English docs in `src/content/docs/en/`
				root: {
					label: "简体中文",
					lang: "zh-CN",
				},
				// Simplified Chinese docs in `src/content/docs/zh-cn/`
				en: {
					label: "English",
					lang: "en",
				},
			},
			plugins: [
				// Generate the Obsidian vault pages.
				// starlightObsidian({
				// 	vault: "./vault",
				// }),
				// starlightLinksValidator({
				// 	errorOnRelativeLinks: false,
				// })
			],
		}),
		react(),
	],
});
