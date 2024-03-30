import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
// import starlightObsidian, { obsidianSidebarGroup } from "starlight-obsidian";
// import markdown from "remark-parse";
// import starlightLinksValidator from "starlight-links-validator";
// import wikiLinkPlugin from "@portaljs/remark-wiki-link";
// import { getPermalinks } from "@portaljs/remark-wiki-link";

// TODO: support for markdown link or wikilink
// https://github.com/vernak2539/astro-rehype-relative-markdown-links
// https://stackoverflow.com/questions/76163067/using-markdown-wiki-links-in-astro-framework
// https://starlight-links-validator.vercel.app/getting-started/

// const processor = unified().use(markdown).use(wikiLinkPlugin);
// const pageUrlPathPrefix = "http://localhost:4321/";
// https://astro.build/config
export default defineConfig({
	// markdown: {
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
	site: "https://jenniferwonder.github.io",
	base: "/js-note",
	integrations: [
		starlight({
			title: "瞻思笔记",
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
			sidebar: [
				{
					label: "Basics",
					autogenerate: { directory: "basics" },
				},
				{
					label: "Array",
					autogenerate: { directory: "array" },
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
		}),
	],
});
