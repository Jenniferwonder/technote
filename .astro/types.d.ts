declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"posts": {
"algo/README.md": {
	id: "algo/README.md";
  slug: "algo/readme";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/algo-interview.md": {
	id: "algo/algo-interview.md";
  slug: "algo/algo-interview";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/intro/algo-intro.md": {
	id: "algo/intro/algo-intro.md";
  slug: "algo/intro/algo-intro";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/intro/ds-intro.md": {
	id: "algo/intro/ds-intro.md";
  slug: "algo/intro/ds-intro";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/lc-tool-config.md": {
	id: "algo/lc-tool-config.md";
  slug: "algo/lc-tool-config";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/math/1991.-找到数组的中间位置-find-pivot-index.md": {
	id: "algo/math/1991.-找到数组的中间位置-find-pivot-index.md";
  slug: "algo/math/1991-找到数组的中间位置-find-pivot-index";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/math/位运算.md": {
	id: "algo/math/位运算.md";
  slug: "algo/math/位运算";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/math/回溯算法.md": {
	id: "algo/math/回溯算法.md";
  slug: "algo/math/回溯算法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/dp/121.买卖股票最佳时机 (best-time-to-buy-and-sell-stock).md": {
	id: "algo/recursive-algorithm/dp/121.买卖股票最佳时机 (best-time-to-buy-and-sell-stock).md";
  slug: "algo/recursive-algorithm/dp/121买卖股票最佳时机-best-time-to-buy-and-sell-stock";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/dp/DP.md": {
	id: "algo/recursive-algorithm/dp/DP.md";
  slug: "algo/recursive-algorithm/dp/dp";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/greedy/56.合并区间 (Merge Intervals).md": {
	id: "algo/recursive-algorithm/greedy/56.合并区间 (Merge Intervals).md";
  slug: "algo/recursive-algorithm/greedy/56合并区间-merge-intervals";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/greedy/Greedy.md": {
	id: "algo/recursive-algorithm/greedy/Greedy.md";
  slug: "algo/recursive-algorithm/greedy/greedy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/recursive-algorithm.md": {
	id: "algo/recursive-algorithm/recursive-algorithm.md";
  slug: "algo/recursive-algorithm/recursive-algorithm";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/two-pointers/15.三数之和 (Three-Sums).md": {
	id: "algo/recursive-algorithm/two-pointers/15.三数之和 (Three-Sums).md";
  slug: "algo/recursive-algorithm/two-pointers/15三数之和-three-sums";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/two-pointers/209.长度最小的子数组 (minSubArrayLen).md": {
	id: "algo/recursive-algorithm/two-pointers/209.长度最小的子数组 (minSubArrayLen).md";
  slug: "algo/recursive-algorithm/two-pointers/209长度最小的子数组-minsubarraylen";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/two-pointers/26.去除重复元素 (Remove-duplicates-from-sorted-array).md": {
	id: "algo/recursive-algorithm/two-pointers/26.去除重复元素 (Remove-duplicates-from-sorted-array).md";
  slug: "algo/recursive-algorithm/two-pointers/26去除重复元素-remove-duplicates-from-sorted-array";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/two-pointers/27.移除元素 (Remove Element).md": {
	id: "algo/recursive-algorithm/two-pointers/27.移除元素 (Remove Element).md";
  slug: "algo/recursive-algorithm/two-pointers/27移除元素-remove-element";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/recursive-algorithm/two-pointers/Two-Pointers.md": {
	id: "algo/recursive-algorithm/two-pointers/Two-Pointers.md";
  slug: "algo/recursive-algorithm/two-pointers/two-pointers";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/array.md": {
	id: "algo/searching-(ds)/array.md";
  slug: "algo/searching-ds/array";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/binary-search/35.搜索插入位置 (Search-Insert-Position).md": {
	id: "algo/searching-(ds)/binary-search/35.搜索插入位置 (Search-Insert-Position).md";
  slug: "algo/searching-ds/binary-search/35搜索插入位置-search-insert-position";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/binary-search/704.二分查找 (Binary Search).md": {
	id: "algo/searching-(ds)/binary-search/704.二分查找 (Binary Search).md";
  slug: "algo/searching-ds/binary-search/704二分查找-binary-search";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/graph.md": {
	id: "algo/searching-(ds)/graph.md";
  slug: "algo/searching-ds/graph";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/hash-table/1.两数之和 (Two-Sums).md": {
	id: "algo/searching-(ds)/hash-table/1.两数之和 (Two-Sums).md";
  slug: "algo/searching-ds/hash-table/1两数之和-two-sums";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/hash-table/217.存在重复元素(Includes Duplicates).md": {
	id: "algo/searching-(ds)/hash-table/217.存在重复元素(Includes Duplicates).md";
  slug: "algo/searching-ds/hash-table/217存在重复元素includes-duplicates";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/hash-table/Hash-Table.md": {
	id: "algo/searching-(ds)/hash-table/Hash-Table.md";
  slug: "algo/searching-ds/hash-table/hash-table";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/linked-list.md": {
	id: "algo/searching-(ds)/linked-list.md";
  slug: "algo/searching-ds/linked-list";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/list.md": {
	id: "algo/searching-(ds)/list.md";
  slug: "algo/searching-ds/list";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/searching-(ds).md": {
	id: "algo/searching-(ds)/searching-(ds).md";
  slug: "algo/searching-ds/searching-ds";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/stack-and-queue.md": {
	id: "algo/searching-(ds)/stack-and-queue.md";
  slug: "algo/searching-ds/stack-and-queue";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/string.md": {
	id: "algo/searching-(ds)/string.md";
  slug: "algo/searching-ds/string";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/tree.md": {
	id: "algo/searching-(ds)/tree.md";
  slug: "algo/searching-ds/tree";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/二叉树.md": {
	id: "algo/searching-(ds)/二叉树.md";
  slug: "algo/searching-ds/二叉树";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/searching-(ds)/单调栈.md": {
	id: "algo/searching-(ds)/单调栈.md";
  slug: "algo/searching-ds/单调栈";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/shortest-path/shortest-path.md": {
	id: "algo/shortest-path/shortest-path.md";
  slug: "algo/shortest-path/shortest-path";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/sorting/14.最长公共前缀-longest-common-prefix.md": {
	id: "algo/sorting/14.最长公共前缀-longest-common-prefix.md";
  slug: "algo/sorting/14最长公共前缀-longest-common-prefix";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/sorting/sorting.md": {
	id: "algo/sorting/sorting.md";
  slug: "algo/sorting/sorting";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/代码优化考虑.md": {
	id: "algo/代码优化考虑.md";
  slug: "algo/代码优化考虑";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"algo/核心方法.md": {
	id: "algo/核心方法.md";
  slug: "algo/核心方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/accessibility/accessibility.md": {
	id: "css/accessibility/accessibility.md";
  slug: "css/accessibility/accessibility";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/base-styles.md": {
	id: "css/basics/base-styles.md";
  slug: "css/basics/base-styles";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/button-style.md": {
	id: "css/basics/button-style.md";
  slug: "css/basics/button-style";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/color-scheme.md": {
	id: "css/basics/color-scheme.md";
  slug: "css/basics/color-scheme";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/css-basics.md": {
	id: "css/basics/css-basics.md";
  slug: "css/basics/css-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/css-cascade-specificity-and-inheritance-(优先级原理).md": {
	id: "css/basics/css-cascade-specificity-and-inheritance-(优先级原理).md";
  slug: "css/basics/css-cascade-specificity-and-inheritance-优先级原理";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/css-for-react.md": {
	id: "css/basics/css-for-react.md";
  slug: "css/basics/css-for-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/css-methodology.md": {
	id: "css/basics/css-methodology.md";
  slug: "css/basics/css-methodology";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/basics/css-properties-and-values.md": {
	id: "css/basics/css-properties-and-values.md";
  slug: "css/basics/css-properties-and-values";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/borders/border-radius-(rounded-corners).md": {
	id: "css/borders/border-radius-(rounded-corners).md";
  slug: "css/borders/border-radius-rounded-corners";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/borders/borders.md": {
	id: "css/borders/borders.md";
  slug: "css/borders/borders";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/box-model-spacing/border-box-explained.md": {
	id: "css/box-model-spacing/border-box-explained.md";
  slug: "css/box-model-spacing/border-box-explained";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/box-model-spacing/box-display-types-block-and-inline-boxes.md": {
	id: "css/box-model-spacing/box-display-types-block-and-inline-boxes.md";
  slug: "css/box-model-spacing/box-display-types-block-and-inline-boxes";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/box-model-spacing/box-model-spacing.md": {
	id: "css/box-model-spacing/box-model-spacing.md";
  slug: "css/box-model-spacing/box-model-spacing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/box-model-spacing/box-spacing-basics.md": {
	id: "css/box-model-spacing/box-spacing-basics.md";
  slug: "css/box-model-spacing/box-spacing-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/clipping-masking/clipping.md": {
	id: "css/clipping-masking/clipping.md";
  slug: "css/clipping-masking/clipping";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/clipping-masking/masks.md": {
	id: "css/clipping-masking/masks.md";
  slug: "css/clipping-masking/masks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-backgrounds/css-backgrounds.md": {
	id: "css/css-backgrounds/css-backgrounds.md";
  slug: "css/css-backgrounds/css-backgrounds";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-filters/css-filters.md": {
	id: "css/css-filters/css-filters.md";
  slug: "css/css-filters/css-filters";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-interview.md": {
	id: "css/css-interview.md";
  slug: "css/css-interview";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-selectors/attribute-selectors.md": {
	id: "css/css-selectors/attribute-selectors.md";
  slug: "css/css-selectors/attribute-selectors";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-selectors/basic-selectors.md": {
	id: "css/css-selectors/basic-selectors.md";
  slug: "css/css-selectors/basic-selectors";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-selectors/combinators-selector-combinations.md": {
	id: "css/css-selectors/combinators-selector-combinations.md";
  slug: "css/css-selectors/combinators-selector-combinations";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-selectors/css-selectors.md": {
	id: "css/css-selectors/css-selectors.md";
  slug: "css/css-selectors/css-selectors";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-selectors/pseudo-classes-selectors-伪类.md": {
	id: "css/css-selectors/pseudo-classes-selectors-伪类.md";
  slug: "css/css-selectors/pseudo-classes-selectors-伪类";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/css-selectors/pseudo-elements-selectors-伪元素.md": {
	id: "css/css-selectors/pseudo-elements-selectors-伪元素.md";
  slug: "css/css-selectors/pseudo-elements-selectors-伪元素";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/effects/box-shadow.md": {
	id: "css/effects/box-shadow.md";
  slug: "css/effects/box-shadow";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/effects/css-blending.md": {
	id: "css/effects/css-blending.md";
  slug: "css/effects/css-blending";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/interactivity/interactivity.md": {
	id: "css/interactivity/interactivity.md";
  slug: "css/interactivity/interactivity";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/css-normal-flow.md": {
	id: "css/layout/css-normal-flow.md";
  slug: "css/layout/css-normal-flow";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/css-overflowing-content.md": {
	id: "css/layout/css-overflowing-content.md";
  slug: "css/layout/css-overflowing-content";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/css-positioning.md": {
	id: "css/layout/css-positioning.md";
  slug: "css/layout/css-positioning";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/flexbox.md": {
	id: "css/layout/flexbox.md";
  slug: "css/layout/flexbox";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/floats.md": {
	id: "css/layout/floats.md";
  slug: "css/layout/floats";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/form-style.md": {
	id: "css/layout/form-style.md";
  slug: "css/layout/form-style";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/grids.md": {
	id: "css/layout/grids.md";
  slug: "css/layout/grids";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/hiding-elements.md": {
	id: "css/layout/hiding-elements.md";
  slug: "css/layout/hiding-elements";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/layout/table-style.md": {
	id: "css/layout/table-style.md";
  slug: "css/layout/table-style";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/motion/css-animation-&-transition.md": {
	id: "css/motion/css-animation-&-transition.md";
  slug: "css/motion/css-animation--transition";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/motion/css-transform.md": {
	id: "css/motion/css-transform.md";
  slug: "css/motion/css-transform";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/rules-and-functions/css-@rules-(at-rules).md": {
	id: "css/rules-and-functions/css-@rules-(at-rules).md";
  slug: "css/rules-and-functions/css-rules-at-rules";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/rules-and-functions/css-functions.md": {
	id: "css/rules-and-functions/css-functions.md";
  slug: "css/rules-and-functions/css-functions";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/rules-and-functions/media-query.md": {
	id: "css/rules-and-functions/media-query.md";
  slug: "css/rules-and-functions/media-query";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/sass/sass-预处理器.md": {
	id: "css/sass/sass-预处理器.md";
  slug: "css/sass/sass-预处理器";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/sizing-units-and-values/absolute-length-units-(for-print-styles).md": {
	id: "css/sizing-units-and-values/absolute-length-units-(for-print-styles).md";
  slug: "css/sizing-units-and-values/absolute-length-units-for-print-styles";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/sizing-units-and-values/css-image-video-and-other-replaced-elements.md": {
	id: "css/sizing-units-and-values/css-image-video-and-other-replaced-elements.md";
  slug: "css/sizing-units-and-values/css-image-video-and-other-replaced-elements";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/sizing-units-and-values/css-values-and-units.md": {
	id: "css/sizing-units-and-values/css-values-and-units.md";
  slug: "css/sizing-units-and-values/css-values-and-units";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/sizing-units-and-values/relative-length-units-(for-responsive-design).md": {
	id: "css/sizing-units-and-values/relative-length-units-(for-responsive-design).md";
  slug: "css/sizing-units-and-values/relative-length-units-for-responsive-design";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/sizing-units-and-values/sizing-units.md": {
	id: "css/sizing-units-and-values/sizing-units.md";
  slug: "css/sizing-units-and-values/sizing-units";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/svg-style/svg-style.md": {
	id: "css/svg-style/svg-style.md";
  slug: "css/svg-style/svg-style";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/tailwindcss/01-弹性盒布局方法总结-medium-主页.md": {
	id: "css/tailwindcss/01-弹性盒布局方法总结-medium-主页.md";
  slug: "css/tailwindcss/01-弹性盒布局方法总结-medium-主页";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/tailwindcss/02-圣杯式布局-twitter主页.md": {
	id: "css/tailwindcss/02-圣杯式布局-twitter主页.md";
  slug: "css/tailwindcss/02-圣杯式布局-twitter主页";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/tailwindcss/o-tailwindcss.md": {
	id: "css/tailwindcss/o-tailwindcss.md";
  slug: "css/tailwindcss/o-tailwindcss";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/tailwindcss/s-tailwindcss.md": {
	id: "css/tailwindcss/s-tailwindcss.md";
  slug: "css/tailwindcss/s-tailwindcss";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/typography/css-text-directions.md": {
	id: "css/typography/css-text-directions.md";
  slug: "css/typography/css-text-directions";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/typography/styling-links.md": {
	id: "css/typography/styling-links.md";
  slug: "css/typography/styling-links";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/typography/styling-lists.md": {
	id: "css/typography/styling-lists.md";
  slug: "css/typography/styling-lists";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/typography/typography.md": {
	id: "css/typography/typography.md";
  slug: "css/typography/typography";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/chart-图表.md": {
	id: "css/ui-resources/chart-图表.md";
  slug: "css/ui-resources/chart-图表";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/color-颜色与背景.md": {
	id: "css/ui-resources/color-颜色与背景.md";
  slug: "css/ui-resources/color-颜色与背景";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/css-framework-resources.md": {
	id: "css/ui-resources/css-framework-resources.md";
  slug: "css/ui-resources/css-framework-resources";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/css-reference.md": {
	id: "css/ui-resources/css-reference.md";
  slug: "css/ui-resources/css-reference";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/css-tools.md": {
	id: "css/ui-resources/css-tools.md";
  slug: "css/ui-resources/css-tools";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/css-tutorials.md": {
	id: "css/ui-resources/css-tutorials.md";
  slug: "css/ui-resources/css-tutorials";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/design-resources-and-toolkit.md": {
	id: "css/ui-resources/design-resources-and-toolkit.md";
  slug: "css/ui-resources/design-resources-and-toolkit";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/design-systems.md": {
	id: "css/ui-resources/design-systems.md";
  slug: "css/ui-resources/design-systems";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/design.md": {
	id: "css/ui-resources/design.md";
  slug: "css/ui-resources/design";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/font-字体.md": {
	id: "css/ui-resources/font-字体.md";
  slug: "css/ui-resources/font-字体";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/html-css-templates.md": {
	id: "css/ui-resources/html-css-templates.md";
  slug: "css/ui-resources/html-css-templates";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/icons/icons-dashy.md": {
	id: "css/ui-resources/icons/icons-dashy.md";
  slug: "css/ui-resources/icons/icons-dashy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/icons/icons.md": {
	id: "css/ui-resources/icons/icons.md";
  slug: "css/ui-resources/icons/icons";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/icons/s-favicons.md": {
	id: "css/ui-resources/icons/s-favicons.md";
  slug: "css/ui-resources/icons/s-favicons";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/icons/s-logo.md": {
	id: "css/ui-resources/icons/s-logo.md";
  slug: "css/ui-resources/icons/s-logo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/background.md": {
	id: "css/ui-resources/image-resources/background.md";
  slug: "css/ui-resources/image-resources/background";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/image-compression-and-resizing.md": {
	id: "css/ui-resources/image-resources/image-compression-and-resizing.md";
  slug: "css/ui-resources/image-resources/image-compression-and-resizing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/image-editing-and-mockup-tool.md": {
	id: "css/ui-resources/image-resources/image-editing-and-mockup-tool.md";
  slug: "css/ui-resources/image-resources/image-editing-and-mockup-tool";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/product-and-image-mockup.md": {
	id: "css/ui-resources/image-resources/product-and-image-mockup.md";
  slug: "css/ui-resources/image-resources/product-and-image-mockup";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/qr-tool.md": {
	id: "css/ui-resources/image-resources/qr-tool.md";
  slug: "css/ui-resources/image-resources/qr-tool";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/stock-photos.md": {
	id: "css/ui-resources/image-resources/stock-photos.md";
  slug: "css/ui-resources/image-resources/stock-photos";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/ui-graphics.md": {
	id: "css/ui-resources/image-resources/ui-graphics.md";
  slug: "css/ui-resources/image-resources/ui-graphics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/image-resources/vector&-clip-art.md": {
	id: "css/ui-resources/image-resources/vector&-clip-art.md";
  slug: "css/ui-resources/image-resources/vector-clip-art";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/motion-resources/s-css-animation.md": {
	id: "css/ui-resources/motion-resources/s-css-animation.md";
  slug: "css/ui-resources/motion-resources/s-css-animation";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/ui-componenet-library.md": {
	id: "css/ui-resources/ui-componenet-library.md";
  slug: "css/ui-resources/ui-componenet-library";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"css/ui-resources/video-resource.md": {
	id: "css/ui-resources/video-resource.md";
  slug: "css/ui-resources/video-resource";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/astro/astro-basics.md": {
	id: "front-end-frameworks/astro/astro-basics.md";
  slug: "front-end-frameworks/astro/astro-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/astro/sync-and-publish-obsidian-notes-with-astro.md": {
	id: "front-end-frameworks/astro/sync-and-publish-obsidian-notes-with-astro.md";
  slug: "front-end-frameworks/astro/sync-and-publish-obsidian-notes-with-astro";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/front-end-frameworks.md": {
	id: "front-end-frameworks/front-end-frameworks.md";
  slug: "front-end-frameworks/front-end-frameworks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/01-前后端初始化与工具安装.md": {
	id: "front-end-frameworks/next.js/01-前后端初始化与工具安装.md";
  slug: "front-end-frameworks/nextjs/01-前后端初始化与工具安装";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/02-数据请求与预览卡片渲染.md": {
	id: "front-end-frameworks/next.js/02-数据请求与预览卡片渲染.md";
  slug: "front-end-frameworks/nextjs/02-数据请求与预览卡片渲染";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/03-预加载与富文本内容展示.md": {
	id: "front-end-frameworks/next.js/03-预加载与富文本内容展示.md";
  slug: "front-end-frameworks/nextjs/03-预加载与富文本内容展示";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/04-如何实现评论功能？.md": {
	id: "front-end-frameworks/next.js/04-如何实现评论功能？.md";
  slug: "front-end-frameworks/nextjs/04-如何实现评论功能";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/get-sanity-data-in-next.js.md": {
	id: "front-end-frameworks/next.js/get-sanity-data-in-next.js.md";
  slug: "front-end-frameworks/nextjs/get-sanity-data-in-nextjs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/nextjs-features-pros-cons.md": {
	id: "front-end-frameworks/next.js/nextjs-features-pros-cons.md";
  slug: "front-end-frameworks/nextjs/nextjs-features-pros-cons";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/nextjs-rendering-methods.md": {
	id: "front-end-frameworks/next.js/nextjs-rendering-methods.md";
  slug: "front-end-frameworks/nextjs/nextjs-rendering-methods";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/next.js/o-nextjs.md": {
	id: "front-end-frameworks/next.js/o-nextjs.md";
  slug: "front-end-frameworks/nextjs/o-nextjs";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/class-component-类组件.md": {
	id: "front-end-frameworks/react/component-basics/class-component-类组件.md";
  slug: "front-end-frameworks/react/component-basics/class-component-类组件";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/component-life-cycle-组件声明周期.md": {
	id: "front-end-frameworks/react/component-basics/component-life-cycle-组件声明周期.md";
  slug: "front-end-frameworks/react/component-basics/component-life-cycle-组件声明周期";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/component-naming-structure-组件命名与结构.md": {
	id: "front-end-frameworks/react/component-basics/component-naming-structure-组件命名与结构.md";
  slug: "front-end-frameworks/react/component-basics/component-naming-structure-组件命名与结构";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/component-types-组件类型与划分.md": {
	id: "front-end-frameworks/react/component-basics/component-types-组件类型与划分.md";
  slug: "front-end-frameworks/react/component-basics/component-types-组件类型与划分";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/pure-function-component-纯函数组件.md": {
	id: "front-end-frameworks/react/component-basics/pure-function-component-纯函数组件.md";
  slug: "front-end-frameworks/react/component-basics/pure-function-component-纯函数组件";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/react-event-事件机制.md": {
	id: "front-end-frameworks/react/component-basics/react-event-事件机制.md";
  slug: "front-end-frameworks/react/component-basics/react-event-事件机制";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/react-features-versions-版本特性.md": {
	id: "front-end-frameworks/react/component-basics/react-features-versions-版本特性.md";
  slug: "front-end-frameworks/react/component-basics/react-features-versions-版本特性";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/react-server-component.md": {
	id: "front-end-frameworks/react/component-basics/react-server-component.md";
  slug: "front-end-frameworks/react/component-basics/react-server-component";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/react-strict-mode-严格模式.md": {
	id: "front-end-frameworks/react/component-basics/react-strict-mode-严格模式.md";
  slug: "front-end-frameworks/react/component-basics/react-strict-mode-严格模式";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/react-syntax-jsx-语法.md": {
	id: "front-end-frameworks/react/component-basics/react-syntax-jsx-语法.md";
  slug: "front-end-frameworks/react/component-basics/react-syntax-jsx-语法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/component-basics/share-state-组件间通信.md": {
	id: "front-end-frameworks/react/component-basics/share-state-组件间通信.md";
  slug: "front-end-frameworks/react/component-basics/share-state-组件间通信";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/data-fetching/react-data-fetching.md": {
	id: "front-end-frameworks/react/data-fetching/react-data-fetching.md";
  slug: "front-end-frameworks/react/data-fetching/react-data-fetching";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/data-fetching/react-query.md": {
	id: "front-end-frameworks/react/data-fetching/react-query.md";
  slug: "front-end-frameworks/react/data-fetching/react-query";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/data-fetching/relay.md": {
	id: "front-end-frameworks/react/data-fetching/relay.md";
  slug: "front-end-frameworks/react/data-fetching/relay";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/data-fetching/suspense.md": {
	id: "front-end-frameworks/react/data-fetching/suspense.md";
  slug: "front-end-frameworks/react/data-fetching/suspense";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/file-upload/file-upload-in-react.md": {
	id: "front-end-frameworks/react/file-upload/file-upload-in-react.md";
  slug: "front-end-frameworks/react/file-upload/file-upload-in-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/component-update-组件更新与高级用法.md": {
	id: "front-end-frameworks/react/hooks/component-update-组件更新与高级用法.md";
  slug: "front-end-frameworks/react/hooks/component-update-组件更新与高级用法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/hooks.md": {
	id: "front-end-frameworks/react/hooks/hooks.md";
  slug: "front-end-frameworks/react/hooks/hooks";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useDebugValue.md": {
	id: "front-end-frameworks/react/hooks/useDebugValue.md";
  slug: "front-end-frameworks/react/hooks/usedebugvalue";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useDeferredValue.md": {
	id: "front-end-frameworks/react/hooks/useDeferredValue.md";
  slug: "front-end-frameworks/react/hooks/usedeferredvalue";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useEffect.md": {
	id: "front-end-frameworks/react/hooks/useEffect.md";
  slug: "front-end-frameworks/react/hooks/useeffect";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useImperativeHandle.md": {
	id: "front-end-frameworks/react/hooks/useImperativeHandle.md";
  slug: "front-end-frameworks/react/hooks/useimperativehandle";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useMemo.md": {
	id: "front-end-frameworks/react/hooks/useMemo.md";
  slug: "front-end-frameworks/react/hooks/usememo";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useRef.md": {
	id: "front-end-frameworks/react/hooks/useRef.md";
  slug: "front-end-frameworks/react/hooks/useref";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/hooks/useTransition.md": {
	id: "front-end-frameworks/react/hooks/useTransition.md";
  slug: "front-end-frameworks/react/hooks/usetransition";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/class-component-类组件.md": {
	id: "front-end-frameworks/react/react-basics/class-component-类组件.md";
  slug: "front-end-frameworks/react/react-basics/class-component-类组件";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/component-naming-structure-组件命名与结构.md": {
	id: "front-end-frameworks/react/react-basics/component-naming-structure-组件命名与结构.md";
  slug: "front-end-frameworks/react/react-basics/component-naming-structure-组件命名与结构";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/component-types-组件类型与划分.md": {
	id: "front-end-frameworks/react/react-basics/component-types-组件类型与划分.md";
  slug: "front-end-frameworks/react/react-basics/component-types-组件类型与划分";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/pure-function-component-纯函数组件.md": {
	id: "front-end-frameworks/react/react-basics/pure-function-component-纯函数组件.md";
  slug: "front-end-frameworks/react/react-basics/pure-function-component-纯函数组件";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/react-event-事件.md": {
	id: "front-end-frameworks/react/react-basics/react-event-事件.md";
  slug: "front-end-frameworks/react/react-basics/react-event-事件";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/react-features-versions-版本特性.md": {
	id: "front-end-frameworks/react/react-basics/react-features-versions-版本特性.md";
  slug: "front-end-frameworks/react/react-basics/react-features-versions-版本特性";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/react-server-component.md": {
	id: "front-end-frameworks/react/react-basics/react-server-component.md";
  slug: "front-end-frameworks/react/react-basics/react-server-component";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/react-strict-mode-严格模式.md": {
	id: "front-end-frameworks/react/react-basics/react-strict-mode-严格模式.md";
  slug: "front-end-frameworks/react/react-basics/react-strict-mode-严格模式";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-basics/react-syntax-jsx-语法.md": {
	id: "front-end-frameworks/react/react-basics/react-syntax-jsx-语法.md";
  slug: "front-end-frameworks/react/react-basics/react-syntax-jsx-语法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-bugpack/error-handling-react.md": {
	id: "front-end-frameworks/react/react-bugpack/error-handling-react.md";
  slug: "front-end-frameworks/react/react-bugpack/error-handling-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-bugpack/react-bugpack.md": {
	id: "front-end-frameworks/react/react-bugpack/react-bugpack.md";
  slug: "front-end-frameworks/react/react-bugpack/react-bugpack";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-bundle-issue/react-bundle-issue.md": {
	id: "front-end-frameworks/react/react-bundle-issue/react-bundle-issue.md";
  slug: "front-end-frameworks/react/react-bundle-issue/react-bundle-issue";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-form-lib/react-form-lib.md": {
	id: "front-end-frameworks/react/react-form-lib/react-form-lib.md";
  slug: "front-end-frameworks/react/react-form-lib/react-form-lib";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-internal/react-internal.md": {
	id: "front-end-frameworks/react/react-internal/react-internal.md";
  slug: "front-end-frameworks/react/react-internal/react-internal";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-intl/react-intl.md": {
	id: "front-end-frameworks/react/react-intl/react-intl.md";
  slug: "front-end-frameworks/react/react-intl/react-intl";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-mini-app/filterable-product-table.md": {
	id: "front-end-frameworks/react/react-mini-app/filterable-product-table.md";
  slug: "front-end-frameworks/react/react-mini-app/filterable-product-table";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-mini-app/react-mini-app.md": {
	id: "front-end-frameworks/react/react-mini-app/react-mini-app.md";
  slug: "front-end-frameworks/react/react-mini-app/react-mini-app";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-mini-app/tic-tac-toe.md": {
	id: "front-end-frameworks/react/react-mini-app/tic-tac-toe.md";
  slug: "front-end-frameworks/react/react-mini-app/tic-tac-toe";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-mini-app/todo-react.md": {
	id: "front-end-frameworks/react/react-mini-app/todo-react.md";
  slug: "front-end-frameworks/react/react-mini-app/todo-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-performance/react-performance.md": {
	id: "front-end-frameworks/react/react-performance/react-performance.md";
  slug: "front-end-frameworks/react/react-performance/react-performance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-security/react-security.md": {
	id: "front-end-frameworks/react/react-security/react-security.md";
  slug: "front-end-frameworks/react/react-security/react-security";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/react-source-code/react-source-code.md": {
	id: "front-end-frameworks/react/react-source-code/react-source-code.md";
  slug: "front-end-frameworks/react/react-source-code/react-source-code";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/routing/react-router.md": {
	id: "front-end-frameworks/react/routing/react-router.md";
  slug: "front-end-frameworks/react/routing/react-router";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/lib-for-state/flux.md": {
	id: "front-end-frameworks/react/state-management/lib-for-state/flux.md";
  slug: "front-end-frameworks/react/state-management/lib-for-state/flux";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/lib-for-state/lib-for-state.md": {
	id: "front-end-frameworks/react/state-management/lib-for-state/lib-for-state.md";
  slug: "front-end-frameworks/react/state-management/lib-for-state/lib-for-state";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/lib-for-state/mobx.md": {
	id: "front-end-frameworks/react/state-management/lib-for-state/mobx.md";
  slug: "front-end-frameworks/react/state-management/lib-for-state/mobx";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/lib-for-state/react-middleware-redux-axios.md": {
	id: "front-end-frameworks/react/state-management/lib-for-state/react-middleware-redux-axios.md";
  slug: "front-end-frameworks/react/state-management/lib-for-state/react-middleware-redux-axios";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/lib-for-state/redux.md": {
	id: "front-end-frameworks/react/state-management/lib-for-state/redux.md";
  slug: "front-end-frameworks/react/state-management/lib-for-state/redux";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/share-state-组件间通信.md": {
	id: "front-end-frameworks/react/state-management/share-state-组件间通信.md";
  slug: "front-end-frameworks/react/state-management/share-state-组件间通信";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/state-management.md": {
	id: "front-end-frameworks/react/state-management/state-management.md";
  slug: "front-end-frameworks/react/state-management/state-management";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/useContext.md": {
	id: "front-end-frameworks/react/state-management/useContext.md";
  slug: "front-end-frameworks/react/state-management/usecontext";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/useReducer.md": {
	id: "front-end-frameworks/react/state-management/useReducer.md";
  slug: "front-end-frameworks/react/state-management/usereducer";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/state-management/useState.md": {
	id: "front-end-frameworks/react/state-management/useState.md";
  slug: "front-end-frameworks/react/state-management/usestate";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/style-for-react/react-animation-lib.md": {
	id: "front-end-frameworks/react/style-for-react/react-animation-lib.md";
  slug: "front-end-frameworks/react/style-for-react/react-animation-lib";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/style-for-react/react-icons.md": {
	id: "front-end-frameworks/react/style-for-react/react-icons.md";
  slug: "front-end-frameworks/react/style-for-react/react-icons";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/style-for-react/react-style-basics.md": {
	id: "front-end-frameworks/react/style-for-react/react-style-basics.md";
  slug: "front-end-frameworks/react/style-for-react/react-style-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/style-for-react/style-for-react.md": {
	id: "front-end-frameworks/react/style-for-react/style-for-react.md";
  slug: "front-end-frameworks/react/style-for-react/style-for-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/react/try-react/try-react.md": {
	id: "front-end-frameworks/react/try-react/try-react.md";
  slug: "front-end-frameworks/react/try-react/try-react";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/refine/refine-search-modal.md": {
	id: "front-end-frameworks/refine/refine-search-modal.md";
  slug: "front-end-frameworks/refine/refine-search-modal";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-frameworks/refine/refine.md": {
	id: "front-end-frameworks/refine/refine.md";
  slug: "front-end-frameworks/refine/refine";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/cdd/create-publish-react-component-lib.md": {
	id: "front-end-tooling/cdd/create-publish-react-component-lib.md";
  slug: "front-end-tooling/cdd/create-publish-react-component-lib";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/cli-脚手架.md": {
	id: "front-end-tooling/cli-脚手架.md";
  slug: "front-end-tooling/cli-脚手架";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/convention/coding-convention-编码规范.md": {
	id: "front-end-tooling/convention/coding-convention-编码规范.md";
  slug: "front-end-tooling/convention/coding-convention-编码规范";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/convention/commit-convention.md": {
	id: "front-end-tooling/convention/commit-convention.md";
  slug: "front-end-tooling/convention/commit-convention";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/ci-cd.md": {
	id: "front-end-tooling/deployment/ci-cd.md";
  slug: "front-end-tooling/deployment/ci-cd";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/containerization-&-virtualization.md": {
	id: "front-end-tooling/deployment/containerization-&-virtualization.md";
  slug: "front-end-tooling/deployment/containerization--virtualization";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/deployment.md": {
	id: "front-end-tooling/deployment/deployment.md";
  slug: "front-end-tooling/deployment/deployment";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/github-pages-deployment.md": {
	id: "front-end-tooling/deployment/github-pages-deployment.md";
  slug: "front-end-tooling/deployment/github-pages-deployment";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/hosting-service-托管服务.md": {
	id: "front-end-tooling/deployment/hosting-service-托管服务.md";
  slug: "front-end-tooling/deployment/hosting-service-托管服务";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/vercel.md": {
	id: "front-end-tooling/deployment/vercel.md";
  slug: "front-end-tooling/deployment/vercel";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/deployment/代理-nginx.md": {
	id: "front-end-tooling/deployment/代理-nginx.md";
  slug: "front-end-tooling/deployment/代理-nginx";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/front-end-tooling.md": {
	id: "front-end-tooling/front-end-tooling.md";
  slug: "front-end-tooling/front-end-tooling";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/init-compile-bundle/compilers-and-bundlers.md": {
	id: "front-end-tooling/init-compile-bundle/compilers-and-bundlers.md";
  slug: "front-end-tooling/init-compile-bundle/compilers-and-bundlers";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/init-compile-bundle/how-to-start-a-nextjs-and-tailwindcss-project.md": {
	id: "front-end-tooling/init-compile-bundle/how-to-start-a-nextjs-and-tailwindcss-project.md";
  slug: "front-end-tooling/init-compile-bundle/how-to-start-a-nextjs-and-tailwindcss-project";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/init-compile-bundle/parcel-and-webpack-bug-fix.md": {
	id: "front-end-tooling/init-compile-bundle/parcel-and-webpack-bug-fix.md";
  slug: "front-end-tooling/init-compile-bundle/parcel-and-webpack-bug-fix";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/init-compile-bundle/project-init.md": {
	id: "front-end-tooling/init-compile-bundle/project-init.md";
  slug: "front-end-tooling/init-compile-bundle/project-init";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/init-compile-bundle/vite.md": {
	id: "front-end-tooling/init-compile-bundle/vite.md";
  slug: "front-end-tooling/init-compile-bundle/vite";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/package-manager.md": {
	id: "front-end-tooling/package-manager.md";
  slug: "front-end-tooling/package-manager";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/sentry.md": {
	id: "front-end-tooling/sentry.md";
  slug: "front-end-tooling/sentry";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/cypress.md": {
	id: "front-end-tooling/testing/cypress.md";
  slug: "front-end-tooling/testing/cypress";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/debugging-tools-调试.md": {
	id: "front-end-tooling/testing/debugging-tools-调试.md";
  slug: "front-end-tooling/testing/debugging-tools-调试";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/jest-vitest-rtl.md": {
	id: "front-end-tooling/testing/jest-vitest-rtl.md";
  slug: "front-end-tooling/testing/jest-vitest-rtl";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/rtl-react-testing-library.md": {
	id: "front-end-tooling/testing/rtl-react-testing-library.md";
  slug: "front-end-tooling/testing/rtl-react-testing-library";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/storybook/config-storybook.md": {
	id: "front-end-tooling/testing/storybook/config-storybook.md";
  slug: "front-end-tooling/testing/storybook/config-storybook";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/storybook/install-&-run-storybook.md": {
	id: "front-end-tooling/testing/storybook/install-&-run-storybook.md";
  slug: "front-end-tooling/testing/storybook/install--run-storybook";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/storybook/storybook.md": {
	id: "front-end-tooling/testing/storybook/storybook.md";
  slug: "front-end-tooling/testing/storybook/storybook";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/storybook/why-storybook.md": {
	id: "front-end-tooling/testing/storybook/why-storybook.md";
  slug: "front-end-tooling/testing/storybook/why-storybook";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/storybook/write-stories.md": {
	id: "front-end-tooling/testing/storybook/write-stories.md";
  slug: "front-end-tooling/testing/storybook/write-stories";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/testing.md": {
	id: "front-end-tooling/testing/testing.md";
  slug: "front-end-tooling/testing/testing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/testing/测试-react-testing.md": {
	id: "front-end-tooling/testing/测试-react-testing.md";
  slug: "front-end-tooling/testing/测试-react-testing";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/typescript/s-typescript.md": {
	id: "front-end-tooling/typescript/s-typescript.md";
  slug: "front-end-tooling/typescript/s-typescript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"front-end-tooling/typescript/typescript.md": {
	id: "front-end-tooling/typescript/typescript.md";
  slug: "front-end-tooling/typescript/typescript";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-basics/access-set-value-in-array-获取设置数组元素值.md": {
	id: "js/array/array-basics/access-set-value-in-array-获取设置数组元素值.md";
  slug: "js/array/array-basics/access-set-value-in-array-获取设置数组元素值";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-basics/array-basics.md": {
	id: "js/array/array-basics/array-basics.md";
  slug: "js/array/array-basics/array-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-basics/array-holes-数组空位.md": {
	id: "js/array/array-basics/array-holes-数组空位.md";
  slug: "js/array/array-basics/array-holes-数组空位";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组.md": {
	id: "js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组.md";
  slug: "js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-basics/use-of-array-length-数组长度方法.md": {
	id: "js/array/array-basics/use-of-array-length-数组长度方法.md";
  slug: "js/array/array-basics/use-of-array-length-数组长度方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-basics/ways-to-create-arrays-创建数组.md": {
	id: "js/array/array-basics/ways-to-create-arrays-创建数组.md";
  slug: "js/array/array-basics/ways-to-create-arrays-创建数组";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice.md": {
	id: "js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice.md";
  slug: "js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/array-instance-methods.md": {
	id: "js/array/array-instance-methods/array-instance-methods.md";
  slug: "js/array/array-instance-methods/array-instance-methods";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/concat-arrays-合并数组.md": {
	id: "js/array/array-instance-methods/concat-arrays-合并数组.md";
  slug: "js/array/array-instance-methods/concat-arrays-合并数组";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法.md": {
	id: "js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法.md";
  slug: "js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md": {
	id: "js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md";
  slug: "js/array/array-instance-methods/copy-within-array-数组内部复制填充法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/fill-an-array-数组填充方法.md": {
	id: "js/array/array-instance-methods/fill-an-array-数组填充方法.md";
  slug: "js/array/array-instance-methods/fill-an-array-数组填充方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/filter-find-elements-筛选查找元素.md": {
	id: "js/array/array-instance-methods/filter-find-elements-筛选查找元素.md";
  slug: "js/array/array-instance-methods/filter-find-elements-筛选查找元素";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/find-index-of-element-查找元素位置.md": {
	id: "js/array/array-instance-methods/find-index-of-element-查找元素位置.md";
  slug: "js/array/array-instance-methods/find-index-of-element-查找元素位置";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/flat-array-展平数组.md": {
	id: "js/array/array-instance-methods/flat-array-展平数组.md";
  slug: "js/array/array-instance-methods/flat-array-展平数组";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/includes-some-every-判断.md": {
	id: "js/array/array-instance-methods/includes-some-every-判断.md";
  slug: "js/array/array-instance-methods/includes-some-every-判断";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代.md": {
	id: "js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代.md";
  slug: "js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/order-array-数组排序.md": {
	id: "js/array/array-instance-methods/order-array-数组排序.md";
  slug: "js/array/array-instance-methods/order-array-数组排序";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md": {
	id: "js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md";
  slug: "js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/reduce-array-get-the-sum-归并方法.md": {
	id: "js/array/array-instance-methods/reduce-array-get-the-sum-归并方法.md";
  slug: "js/array/array-instance-methods/reduce-array-get-the-sum-归并方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/shift-element-in-array-数组首增删元素-队列方法.md": {
	id: "js/array/array-instance-methods/shift-element-in-array-数组首增删元素-队列方法.md";
  slug: "js/array/array-instance-methods/shift-element-in-array-数组首增删元素-队列方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/slice-array-截取数组.md": {
	id: "js/array/array-instance-methods/slice-array-截取数组.md";
  slug: "js/array/array-instance-methods/slice-array-截取数组";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/array/array.md": {
	id: "js/array/array.md";
  slug: "js/array/array";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/boolean.md": {
	id: "js/basics/boolean.md";
  slug: "js/basics/boolean";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/copy-深浅拷贝.md": {
	id: "js/basics/copy-深浅拷贝.md";
  slug: "js/basics/copy-深浅拷贝";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/data-types-数据类型.md": {
	id: "js/basics/data-types-数据类型.md";
  slug: "js/basics/data-types-数据类型";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/es-version.md": {
	id: "js/basics/es-version.md";
  slug: "js/basics/es-version";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/iteration-and-spread-operators-迭代与扩展操作.md": {
	id: "js/basics/iteration-and-spread-operators-迭代与扩展操作.md";
  slug: "js/basics/iteration-and-spread-operators-迭代与扩展操作";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/keywords-and-reserved-words-关键字与保留字.md": {
	id: "js/basics/keywords-and-reserved-words-关键字与保留字.md";
  slug: "js/basics/keywords-and-reserved-words-关键字与保留字";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/loops-循环语句.md": {
	id: "js/basics/loops-循环语句.md";
  slug: "js/basics/loops-循环语句";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/operators-操作符.md": {
	id: "js/basics/operators-操作符.md";
  slug: "js/basics/operators-操作符";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/primitive-and-reference-values-原始值与引用值.md": {
	id: "js/basics/primitive-and-reference-values-原始值与引用值.md";
  slug: "js/basics/primitive-and-reference-values-原始值与引用值";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/statements-语句.md": {
	id: "js/basics/statements-语句.md";
  slug: "js/basics/statements-语句";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/strict-mode.md": {
	id: "js/basics/strict-mode.md";
  slug: "js/basics/strict-mode";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/symbol.md": {
	id: "js/basics/symbol.md";
  slug: "js/basics/symbol";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/syntax-语法.md": {
	id: "js/basics/syntax-语法.md";
  slug: "js/basics/syntax-语法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/basics/undefined-and-null.md": {
	id: "js/basics/undefined-and-null.md";
  slug: "js/basics/undefined-and-null";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/global-object.md": {
	id: "js/bom/global-object.md";
  slug: "js/bom/global-object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/history-object.md": {
	id: "js/bom/history-object.md";
  slug: "js/bom/history-object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/location-object.md": {
	id: "js/bom/location-object.md";
  slug: "js/bom/location-object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/navigator-object.md": {
	id: "js/bom/navigator-object.md";
  slug: "js/bom/navigator-object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/screen-object.md": {
	id: "js/bom/screen-object.md";
  slug: "js/bom/screen-object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/timer-计时器函数.md": {
	id: "js/bom/timer-计时器函数.md";
  slug: "js/bom/timer-计时器函数";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/bom/window-object.md": {
	id: "js/bom/window-object.md";
  slug: "js/bom/window-object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/class-es6-类.md": {
	id: "js/class/class-es6-类.md";
  slug: "js/class/class-es6-类";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/computed-properties.md": {
	id: "js/class/computed-properties.md";
  slug: "js/class/computed-properties";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/getters-setters.md": {
	id: "js/class/getters-setters.md";
  slug: "js/class/getters-setters";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/inheritance.md": {
	id: "js/class/inheritance.md";
  slug: "js/class/inheritance";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/new.target-功能用法-es6.md": {
	id: "js/class/new.target-功能用法-es6.md";
  slug: "js/class/newtarget-功能用法-es6";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/private-methods-properties.md": {
	id: "js/class/private-methods-properties.md";
  slug: "js/class/private-methods-properties";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/class/static-methods-properties.md": {
	id: "js/class/static-methods-properties.md";
  slug: "js/class/static-methods-properties";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/client-store/cookies.md": {
	id: "js/client-store/cookies.md";
  slug: "js/client-store/cookies";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/client-store/indexed-db.md": {
	id: "js/client-store/indexed-db.md";
  slug: "js/client-store/indexed-db";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/client-store/local-storage.md": {
	id: "js/client-store/local-storage.md";
  slug: "js/client-store/local-storage";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/client-store/session-storage.md": {
	id: "js/client-store/session-storage.md";
  slug: "js/client-store/session-storage";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/async...await.md": {
	id: "js/data-fetching/async...await.md";
  slug: "js/data-fetching/asyncawait";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/axios.md": {
	id: "js/data-fetching/axios.md";
  slug: "js/data-fetching/axios";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/data-fetching.md": {
	id: "js/data-fetching/data-fetching.md";
  slug: "js/data-fetching/data-fetching";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/debounce-and-throttle-防抖节流.md": {
	id: "js/data-fetching/debounce-and-throttle-防抖节流.md";
  slug: "js/data-fetching/debounce-and-throttle-防抖节流";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/fetch-api.md": {
	id: "js/data-fetching/fetch-api.md";
  slug: "js/data-fetching/fetch-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/json.md": {
	id: "js/data-fetching/json.md";
  slug: "js/data-fetching/json";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/promise-chaining-链式调用.md": {
	id: "js/data-fetching/promise-chaining-链式调用.md";
  slug: "js/data-fetching/promise-chaining-链式调用";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/promise-composition-组合调用.md": {
	id: "js/data-fetching/promise-composition-组合调用.md";
  slug: "js/data-fetching/promise-composition-组合调用";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/promise.md": {
	id: "js/data-fetching/promise.md";
  slug: "js/data-fetching/promise";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/data-fetching/xml-http-request.md": {
	id: "js/data-fetching/xml-http-request.md";
  slug: "js/data-fetching/xml-http-request";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/date/date.md": {
	id: "js/date/date.md";
  slug: "js/date/date";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/dom-basics.md": {
	id: "js/dom/dom-basics.md";
  slug: "js/dom/dom-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/dom-events.md": {
	id: "js/dom/dom-events.md";
  slug: "js/dom/dom-events";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/dom-interview.md": {
	id: "js/dom/dom-interview.md";
  slug: "js/dom/dom-interview";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/dom.md": {
	id: "js/dom/dom.md";
  slug: "js/dom/dom";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/element-styles.md": {
	id: "js/dom/element-styles.md";
  slug: "js/dom/element-styles";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/manipulate-elements.md": {
	id: "js/dom/manipulate-elements.md";
  slug: "js/dom/manipulate-elements";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/scripting-web-forms.md": {
	id: "js/dom/scripting-web-forms.md";
  slug: "js/dom/scripting-web-forms";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/select-elements.md": {
	id: "js/dom/select-elements.md";
  slug: "js/dom/select-elements";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/traverse-elements.md": {
	id: "js/dom/traverse-elements.md";
  slug: "js/dom/traverse-elements";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/dom/work-with-attributes.md": {
	id: "js/dom/work-with-attributes.md";
  slug: "js/dom/work-with-attributes";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/arraybuffer-缓冲.md": {
	id: "js/ds-plus/arraybuffer-缓冲.md";
  slug: "js/ds-plus/arraybuffer-缓冲";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/dataview.md": {
	id: "js/ds-plus/dataview.md";
  slug: "js/ds-plus/dataview";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/elementtype.md": {
	id: "js/ds-plus/elementtype.md";
  slug: "js/ds-plus/elementtype";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/endianness-字节序.md": {
	id: "js/ds-plus/endianness-字节序.md";
  slug: "js/ds-plus/endianness-字节序";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/map.md": {
	id: "js/ds-plus/map.md";
  slug: "js/ds-plus/map";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/set.md": {
	id: "js/ds-plus/set.md";
  slug: "js/ds-plus/set";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/typed-array-history-历史.md": {
	id: "js/ds-plus/typed-array-history-历史.md";
  slug: "js/ds-plus/typed-array-history-历史";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/typed-array-定型数组.md": {
	id: "js/ds-plus/typed-array-定型数组.md";
  slug: "js/ds-plus/typed-array-定型数组";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/weakmap.md": {
	id: "js/ds-plus/weakmap.md";
  slug: "js/ds-plus/weakmap";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/ds-plus/weakset.md": {
	id: "js/ds-plus/weakset.md";
  slug: "js/ds-plus/weakset";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/call-apply-bind.md": {
	id: "js/function/call-apply-bind.md";
  slug: "js/function/call-apply-bind";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/callbacks-回调函数.md": {
	id: "js/function/callbacks-回调函数.md";
  slug: "js/function/callbacks-回调函数";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/closure-闭包.md": {
	id: "js/function/closure-闭包.md";
  slug: "js/function/closure-闭包";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/collect-or-rest-and-spread-function-arguments-收集,-剩余与扩展参数.md": {
	id: "js/function/collect-or-rest-and-spread-function-arguments-收集,-剩余与扩展参数.md";
  slug: "js/function/collect-or-rest-and-spread-function-arguments-收集-剩余与扩展参数";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/function-arguments-函数参数.md": {
	id: "js/function/function-arguments-函数参数.md";
  slug: "js/function/function-arguments-函数参数";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/function-creation-创建函数.md": {
	id: "js/function/function-creation-创建函数.md";
  slug: "js/function/function-creation-创建函数";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/function-feature-函数本质与特点.md": {
	id: "js/function/function-feature-函数本质与特点.md";
  slug: "js/function/function-feature-函数本质与特点";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/function-names-读取函数名.md": {
	id: "js/function/function-names-读取函数名.md";
  slug: "js/function/function-names-读取函数名";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/function.md": {
	id: "js/function/function.md";
  slug: "js/function/function";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/recursive-function.md": {
	id: "js/function/recursive-function.md";
  slug: "js/function/recursive-function";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/function/the-return-statement.md": {
	id: "js/function/the-return-statement.md";
  slug: "js/function/the-return-statement";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-api/js-api.md": {
	id: "js/js-api/js-api.md";
  slug: "js/js-api/js-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-api/observer-api.md": {
	id: "js/js-api/observer-api.md";
  slug: "js/js-api/observer-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-api/web-apis.md": {
	id: "js/js-api/web-apis.md";
  slug: "js/js-api/web-apis";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-internal/call-stack-执行栈.md": {
	id: "js/js-internal/call-stack-执行栈.md";
  slug: "js/js-internal/call-stack-执行栈";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-internal/event-loop-事件循环.md": {
	id: "js/js-internal/event-loop-事件循环.md";
  slug: "js/js-internal/event-loop-事件循环";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-internal/garbage-collection-垃圾回收.md": {
	id: "js/js-internal/garbage-collection-垃圾回收.md";
  slug: "js/js-internal/garbage-collection-垃圾回收";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-internal/js-internal-feature.md": {
	id: "js/js-internal/js-internal-feature.md";
  slug: "js/js-internal/js-internal-feature";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/js-interview.md": {
	id: "js/js-interview.md";
  slug: "js/js-interview";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/math/math.md": {
	id: "js/math/math.md";
  slug: "js/math/math";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/number/number.md": {
	id: "js/number/number.md";
  slug: "js/number/number";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/assign-merge-objects-对象合并.md": {
	id: "js/object/assign-merge-objects-对象合并.md";
  slug: "js/object/assign-merge-objects-对象合并";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/constructor-function-构造函数模式.md": {
	id: "js/object/constructor-function-构造函数模式.md";
  slug: "js/object/constructor-function-构造函数模式";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/factory-function-工厂函数模式.md": {
	id: "js/object/factory-function-工厂函数模式.md";
  slug: "js/object/factory-function-工厂函数模式";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/identify-object-equality-对象全等判定.md": {
	id: "js/object/identify-object-equality-对象全等判定.md";
  slug: "js/object/identify-object-equality-对象全等判定";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object-creation-创建对象.md": {
	id: "js/object/object-creation-创建对象.md";
  slug: "js/object/object-creation-创建对象";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object-destructuring-对象解构.md": {
	id: "js/object/object-destructuring-对象解构.md";
  slug: "js/object/object-destructuring-对象解构";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object-iteration-对象迭代.md": {
	id: "js/object/object-iteration-对象迭代.md";
  slug: "js/object/object-iteration-对象迭代";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object-literal-对象字面量表示法.md": {
	id: "js/object/object-literal-对象字面量表示法.md";
  slug: "js/object/object-literal-对象字面量表示法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object-property-&-value-对象属性与值.md": {
	id: "js/object/object-property-&-value-对象属性与值.md";
  slug: "js/object/object-property--value-对象属性与值";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object-types-instanceof-标识对象类型.md": {
	id: "js/object/object-types-instanceof-标识对象类型.md";
  slug: "js/object/object-types-instanceof-标识对象类型";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/object.md": {
	id: "js/object/object.md";
  slug: "js/object/object";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/prototype-chain-inheritance-原型链继承.md": {
	id: "js/object/prototype-chain-inheritance-原型链继承.md";
  slug: "js/object/prototype-chain-inheritance-原型链继承";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/prototype-pattern-原型模式.md": {
	id: "js/object/prototype-pattern-原型模式.md";
  slug: "js/object/prototype-pattern-原型模式";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/object/use-new-operator-使用-new-操作符.md": {
	id: "js/object/use-new-operator-使用-new-操作符.md";
  slug: "js/object/use-new-operator-使用-new-操作符";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/practice/generator-生成器.md": {
	id: "js/practice/generator-生成器.md";
  slug: "js/practice/generator-生成器";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/practice/iterator-迭代器.md": {
	id: "js/practice/iterator-迭代器.md";
  slug: "js/practice/iterator-迭代器";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/practice/modules.md": {
	id: "js/practice/modules.md";
  slug: "js/practice/modules";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/regexp/regexp.md": {
	id: "js/regexp/regexp.md";
  slug: "js/regexp/regexp";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/scope/context-and-scope-执行上下文与作用域.md": {
	id: "js/scope/context-and-scope-执行上下文与作用域.md";
  slug: "js/scope/context-and-scope-执行上下文与作用域";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/scope/this-in-js.md": {
	id: "js/scope/this-in-js.md";
  slug: "js/scope/this-in-js";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/scope/variable-let-const-var-变量声明.md": {
	id: "js/scope/variable-let-const-var-变量声明.md";
  slug: "js/scope/variable-let-const-var-变量声明";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-basics/character-literals-字符字面量.md": {
	id: "js/string/string-basics/character-literals-字符字面量.md";
  slug: "js/string/string-basics/character-literals-字符字面量";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-basics/convert-value-to-a-string-转字符串方法.md": {
	id: "js/string/string-basics/convert-value-to-a-string-转字符串方法.md";
  slug: "js/string/string-basics/convert-value-to-a-string-转字符串方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-basics/string-basics.md": {
	id: "js/string/string-basics/string-basics.md";
  slug: "js/string/string-basics/string-basics";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-basics/template-literals-模板字面量.md": {
	id: "js/string/string-basics/template-literals-模板字面量.md";
  slug: "js/string/string-basics/template-literals-模板字面量";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-case-methods-大小写.md": {
	id: "js/string/string-instance-methods/string-case-methods-大小写.md";
  slug: "js/string/string-instance-methods/string-case-methods-大小写";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-concat-拼接方法.md": {
	id: "js/string/string-instance-methods/string-concat-拼接方法.md";
  slug: "js/string/string-instance-methods/string-concat-拼接方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-inclusion-methods-包含方法.md": {
	id: "js/string/string-instance-methods/string-inclusion-methods-包含方法.md";
  slug: "js/string/string-instance-methods/string-inclusion-methods-包含方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-instance-methods.md": {
	id: "js/string/string-instance-methods/string-instance-methods.md";
  slug: "js/string/string-instance-methods/string-instance-methods";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构.md": {
	id: "js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构.md";
  slug: "js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-location-methods-位置方法.md": {
	id: "js/string/string-instance-methods/string-location-methods-位置方法.md";
  slug: "js/string/string-instance-methods/string-location-methods-位置方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法.md": {
	id: "js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法.md";
  slug: "js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换.md": {
	id: "js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换.md";
  slug: "js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-repeat-method-重复方法.md": {
	id: "js/string/string-instance-methods/string-repeat-method-重复方法.md";
  slug: "js/string/string-instance-methods/string-repeat-method-重复方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-slice-substring-substr-截取方法.md": {
	id: "js/string/string-instance-methods/string-slice-substring-substr-截取方法.md";
  slug: "js/string/string-instance-methods/string-slice-substring-substr-截取方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-split-join-拆合方法.md": {
	id: "js/string/string-instance-methods/string-split-join-拆合方法.md";
  slug: "js/string/string-instance-methods/string-split-join-拆合方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-trim-space-method-去空格方法.md": {
	id: "js/string/string-instance-methods/string-trim-space-method-去空格方法.md";
  slug: "js/string/string-instance-methods/string-trim-space-method-去空格方法";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/string/string.md": {
	id: "js/string/string.md";
  slug: "js/string/string";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/canvas/canvas-api.md": {
	id: "js/web-api/canvas/canvas-api.md";
  slug: "js/web-api/canvas/canvas-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/drag-and-drop-api.md": {
	id: "js/web-api/drag-and-drop-api.md";
  slug: "js/web-api/drag-and-drop-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/file-reader-api.md": {
	id: "js/web-api/file-reader-api.md";
  slug: "js/web-api/file-reader-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/form-data-api.md": {
	id: "js/web-api/form-data-api.md";
  slug: "js/web-api/form-data-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/geo-location-api.md": {
	id: "js/web-api/geo-location-api.md";
  slug: "js/web-api/geo-location-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/history-api.md": {
	id: "js/web-api/history-api.md";
  slug: "js/web-api/history-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-api/notification-api.md": {
	id: "js/web-api/notification-api.md";
  slug: "js/web-api/notification-api";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-worker/service-worker.md": {
	id: "js/web-worker/service-worker.md";
  slug: "js/web-worker/service-worker";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"js/web-worker/web-worker.md": {
	id: "js/web-worker/web-worker.md";
  slug: "js/web-worker/web-worker";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"markdown copy.md": {
	id: "markdown copy.md";
  slug: "markdown-copy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"markdown.md": {
	id: "markdown.md";
  slug: "markdown";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/browser/bowser-cache.md": {
	id: "network/browser/bowser-cache.md";
  slug: "network/browser/bowser-cache";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/browser/browser-routing-history-hash.md": {
	id: "network/browser/browser-routing-history-hash.md";
  slug: "network/browser/browser-routing-history-hash";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/browser/browser-浏览器工作原理.md": {
	id: "network/browser/browser-浏览器工作原理.md";
  slug: "network/browser/browser-浏览器工作原理";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/browser/cookies.md": {
	id: "network/browser/cookies.md";
  slug: "network/browser/cookies";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/cdn.md": {
	id: "network/cdn.md";
  slug: "network/cdn";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/cors-跨域.md": {
	id: "network/cors-跨域.md";
  slug: "network/cors-跨域";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/hypertext.md": {
	id: "network/hypertext.md";
  slug: "network/hypertext";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/security/csrf-attack.md": {
	id: "network/security/csrf-attack.md";
  slug: "network/security/csrf-attack";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/security/https-security.md": {
	id: "network/security/https-security.md";
  slug: "network/security/https-security";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/security/security.md": {
	id: "network/security/security.md";
  slug: "network/security/security";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/security/xss.md": {
	id: "network/security/xss.md";
  slug: "network/security/xss";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/server/server.md": {
	id: "network/server/server.md";
  slug: "network/server/server";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/dns.md": {
	id: "network/web-protocol/dns.md";
  slug: "network/web-protocol/dns";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/http-request-response-process.md": {
	id: "network/web-protocol/http-request-response-process.md";
  slug: "network/web-protocol/http-request-response-process";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/http-request.md": {
	id: "network/web-protocol/http-request.md";
  slug: "network/web-protocol/http-request";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/http.md": {
	id: "network/web-protocol/http.md";
  slug: "network/web-protocol/http";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/http2-http3.md": {
	id: "network/web-protocol/http2-http3.md";
  slug: "network/web-protocol/http2-http3";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/https.md": {
	id: "network/web-protocol/https.md";
  slug: "network/web-protocol/https";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/ip-protocol.md": {
	id: "network/web-protocol/ip-protocol.md";
  slug: "network/web-protocol/ip-protocol";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/network-protocols-网络协议.md": {
	id: "network/web-protocol/network-protocols-网络协议.md";
  slug: "network/web-protocol/network-protocols-网络协议";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/socket.md": {
	id: "network/web-protocol/socket.md";
  slug: "network/web-protocol/socket";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/tcp-protocol.md": {
	id: "network/web-protocol/tcp-protocol.md";
  slug: "network/web-protocol/tcp-protocol";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"network/web-protocol/url.md": {
	id: "network/web-protocol/url.md";
  slug: "network/web-protocol/url";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"video copy.md": {
	id: "video copy.md";
  slug: "video-copy";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"video.md": {
	id: "video.md";
  slug: "video";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};
"spec": {
"about.md": {
	id: "about.md";
  slug: "about";
  body: string;
  collection: "spec";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
