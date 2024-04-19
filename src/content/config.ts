import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		DateStarted: z.date(),
		draft: z.boolean().optional(),
		description: z.string().optional(),
		image: z.string().optional(),
		tags: z.array(z.string()).default(["others"]),
		category: z.string().optional(),
	}),
});
export const collections = {
	posts: postsCollection,
};
