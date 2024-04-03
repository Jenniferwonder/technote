declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

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
		"docs": {
"en/index.mdx": {
	id: "en/index.mdx";
  slug: "en";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"js/array/array-basics/access-set-value-array-index.md": {
	id: "js/array/array-basics/access-set-value-array-index.md";
  slug: "js/array/array-basics/access-set-value-array-index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-basics/array-basics.md": {
	id: "js/array/array-basics/array-basics.md";
  slug: "js/array/array-basics/array-basics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-basics/array-holes-数组空位.md": {
	id: "js/array/array-basics/array-holes-数组空位.md";
  slug: "js/array/array-basics/array-holes-数组空位";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组.md": {
	id: "js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组.md";
  slug: "js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-basics/maximum-numbers-of-items-in-an-array.md": {
	id: "js/array/array-basics/maximum-numbers-of-items-in-an-array.md";
  slug: "js/array/array-basics/maximum-numbers-of-items-in-an-array";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-basics/use-of-array-length.md": {
	id: "js/array/array-basics/use-of-array-length.md";
  slug: "js/array/array-basics/use-of-array-length";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-basics/ways-to-create-arrays-创建数组.md": {
	id: "js/array/array-basics/ways-to-create-arrays-创建数组.md";
  slug: "js/array/array-basics/ways-to-create-arrays-创建数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice.md": {
	id: "js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice.md";
  slug: "js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/array-instance-methods.md": {
	id: "js/array/array-instance-methods/array-instance-methods.md";
  slug: "js/array/array-instance-methods/array-instance-methods";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/concat-arrays-合并数组.md": {
	id: "js/array/array-instance-methods/concat-arrays-合并数组.md";
  slug: "js/array/array-instance-methods/concat-arrays-合并数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法.md": {
	id: "js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法.md";
  slug: "js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md": {
	id: "js/array/array-instance-methods/copy-within-array-数组内部复制填充法.md";
  slug: "js/array/array-instance-methods/copy-within-array-数组内部复制填充法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/fill-an-array-数组填充方法.md": {
	id: "js/array/array-instance-methods/fill-an-array-数组填充方法.md";
  slug: "js/array/array-instance-methods/fill-an-array-数组填充方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/filter-find-elements-筛选查找元素.md": {
	id: "js/array/array-instance-methods/filter-find-elements-筛选查找元素.md";
  slug: "js/array/array-instance-methods/filter-find-elements-筛选查找元素";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/find-index-of-element-查找元素位置.md": {
	id: "js/array/array-instance-methods/find-index-of-element-查找元素位置.md";
  slug: "js/array/array-instance-methods/find-index-of-element-查找元素位置";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/flat-array-展平数组.md": {
	id: "js/array/array-instance-methods/flat-array-展平数组.md";
  slug: "js/array/array-instance-methods/flat-array-展平数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/includes,-some,-every-判断.md": {
	id: "js/array/array-instance-methods/includes,-some,-every-判断.md";
  slug: "js/array/array-instance-methods/includes-some-every-判断";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代.md": {
	id: "js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代.md";
  slug: "js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/order-array-数组排序.md": {
	id: "js/array/array-instance-methods/order-array-数组排序.md";
  slug: "js/array/array-instance-methods/order-array-数组排序";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md": {
	id: "js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md";
  slug: "js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/reduce-array-get-the-sum-归并方法.md": {
	id: "js/array/array-instance-methods/reduce-array-get-the-sum-归并方法.md";
  slug: "js/array/array-instance-methods/reduce-array-get-the-sum-归并方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法.md": {
	id: "js/array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法.md";
  slug: "js/array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array-instance-methods/slice-array-截取数组.md": {
	id: "js/array/array-instance-methods/slice-array-截取数组.md";
  slug: "js/array/array-instance-methods/slice-array-截取数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/array/array.md": {
	id: "js/array/array.md";
  slug: "js/array/array";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-basics/character-literals-字符字面量.md": {
	id: "js/string/string-basics/character-literals-字符字面量.md";
  slug: "js/string/string-basics/character-literals-字符字面量";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-basics/convert-value-to-a-string-转字符串方法.md": {
	id: "js/string/string-basics/convert-value-to-a-string-转字符串方法.md";
  slug: "js/string/string-basics/convert-value-to-a-string-转字符串方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-basics/string-basics.md": {
	id: "js/string/string-basics/string-basics.md";
  slug: "js/string/string-basics/string-basics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-basics/template-literals-模板字面量.md": {
	id: "js/string/string-basics/template-literals-模板字面量.md";
  slug: "js/string/string-basics/template-literals-模板字面量";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-case-methods-大小写.md": {
	id: "js/string/string-instance-methods/string-case-methods-大小写.md";
  slug: "js/string/string-instance-methods/string-case-methods-大小写";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-concat-拼接方法.md": {
	id: "js/string/string-instance-methods/string-concat-拼接方法.md";
  slug: "js/string/string-instance-methods/string-concat-拼接方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-inclusion-methods-包含方法.md": {
	id: "js/string/string-instance-methods/string-inclusion-methods-包含方法.md";
  slug: "js/string/string-instance-methods/string-inclusion-methods-包含方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-instance-methods.md": {
	id: "js/string/string-instance-methods/string-instance-methods.md";
  slug: "js/string/string-instance-methods/string-instance-methods";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构.md": {
	id: "js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构.md";
  slug: "js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-location-methods-位置方法.md": {
	id: "js/string/string-instance-methods/string-location-methods-位置方法.md";
  slug: "js/string/string-instance-methods/string-location-methods-位置方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法.md": {
	id: "js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法.md";
  slug: "js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换.md": {
	id: "js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换.md";
  slug: "js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-repeat-method-重复方法.md": {
	id: "js/string/string-instance-methods/string-repeat-method-重复方法.md";
  slug: "js/string/string-instance-methods/string-repeat-method-重复方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-slice,-substring,-substr-截取方法.md": {
	id: "js/string/string-instance-methods/string-slice,-substring,-substr-截取方法.md";
  slug: "js/string/string-instance-methods/string-slice-substring-substr-截取方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-split,-join-拆合方法.md": {
	id: "js/string/string-instance-methods/string-split,-join-拆合方法.md";
  slug: "js/string/string-instance-methods/string-split-join-拆合方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string-instance-methods/string-trim-space-method-去空格方法.md": {
	id: "js/string/string-instance-methods/string-trim-space-method-去空格方法.md";
  slug: "js/string/string-instance-methods/string-trim-space-method-去空格方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"js/string/string.md": {
	id: "js/string/string.md";
  slug: "js/string/string";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"overview.mdx": {
	id: "overview.mdx";
  slug: "overview";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"react/data-fetching/README.md": {
	id: "react/data-fetching/README.md";
  slug: "react/data-fetching/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/data-fetching/react-query/README.md": {
	id: "react/data-fetching/react-query/README.md";
  slug: "react/data-fetching/react-query/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/file-upload/README.md": {
	id: "react/file-upload/README.md";
  slug: "react/file-upload/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/README.md": {
	id: "react/hooks/README.md";
  slug: "react/hooks/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/README.md": {
	id: "react/hooks/state-management/README.md";
  slug: "react/hooks/state-management/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/lib-for-state/README.md": {
	id: "react/hooks/state-management/lib-for-state/README.md";
  slug: "react/hooks/state-management/lib-for-state/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useContext/README.md": {
	id: "react/hooks/state-management/useContext/README.md";
  slug: "react/hooks/state-management/usecontext/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useReducer/README.md": {
	id: "react/hooks/state-management/useReducer/README.md";
  slug: "react/hooks/state-management/usereducer/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/README.md": {
	id: "react/hooks/state-management/useState/README.md";
  slug: "react/hooks/state-management/usestate/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/add-interactivity/README.md": {
	id: "react/hooks/state-management/useState/add-interactivity/README.md";
  slug: "react/hooks/state-management/usestate/add-interactivity/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/add-interactivity/Update Screen (Event Handlers).md": {
	id: "react/hooks/state-management/useState/add-interactivity/Update Screen (Event Handlers).md";
  slug: "react/hooks/state-management/usestate/add-interactivity/update-screen-event-handlers";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/preserve-reset-state/README.md": {
	id: "react/hooks/state-management/useState/preserve-reset-state/README.md";
  slug: "react/hooks/state-management/usestate/preserve-reset-state/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/react-to-input/README.md": {
	id: "react/hooks/state-management/useState/react-to-input/README.md";
  slug: "react/hooks/state-management/usestate/react-to-input/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/react-to-input/Respond to Events (Inputs).md": {
	id: "react/hooks/state-management/useState/react-to-input/Respond to Events (Inputs).md";
  slug: "react/hooks/state-management/usestate/react-to-input/respond-to-events-inputs";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/share-state/README.md": {
	id: "react/hooks/state-management/useState/share-state/README.md";
  slug: "react/hooks/state-management/usestate/share-state/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/state-management/useState/state-structure/README.md": {
	id: "react/hooks/state-management/useState/state-structure/README.md";
  slug: "react/hooks/state-management/usestate/state-structure/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/useEffect/README.md": {
	id: "react/hooks/useEffect/README.md";
  slug: "react/hooks/useeffect/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/useImperativeHandle/README.md": {
	id: "react/hooks/useImperativeHandle/README.md";
  slug: "react/hooks/useimperativehandle/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/useMemo/README.md": {
	id: "react/hooks/useMemo/README.md";
  slug: "react/hooks/usememo/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/hooks/useRef/README.md": {
	id: "react/hooks/useRef/README.md";
  slug: "react/hooks/useref/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-basics/Demo.mdx": {
	id: "react/react-basics/Demo.mdx";
  slug: "react/react-basics/demo";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".mdx"] };
"react/react-basics/README.md": {
	id: "react/react-basics/README.md";
  slug: "react/react-basics/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-basics/React CDD-组件化开发.md": {
	id: "react/react-basics/React CDD-组件化开发.md";
  slug: "react/react-basics/react-cdd-组件化开发";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-basics/z-class-component/README.md": {
	id: "react/react-basics/z-class-component/README.md";
  slug: "react/react-basics/z-class-component/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-basics/z-react-loadable/README.md": {
	id: "react/react-basics/z-react-loadable/README.md";
  slug: "react/react-basics/z-react-loadable/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-bundle-issue/README.md": {
	id: "react/react-bundle-issue/README.md";
  slug: "react/react-bundle-issue/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-form-lib/README.md": {
	id: "react/react-form-lib/README.md";
  slug: "react/react-form-lib/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-intl/README.md": {
	id: "react/react-intl/README.md";
  slug: "react/react-intl/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-performance/README.md": {
	id: "react/react-performance/README.md";
  slug: "react/react-performance/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-security-issue/README.md": {
	id: "react/react-security-issue/README.md";
  slug: "react/react-security-issue/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-source-code/README.md": {
	id: "react/react-source-code/README.md";
  slug: "react/react-source-code/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/react-versions-features/README.md": {
	id: "react/react-versions-features/README.md";
  slug: "react/react-versions-features/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/relay/README.md": {
	id: "react/relay/README.md";
  slug: "react/relay/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/routing/README.md": {
	id: "react/routing/README.md";
  slug: "react/routing/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/routing/react-router/README.md": {
	id: "react/routing/react-router/README.md";
  slug: "react/routing/react-router/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/server-component/README.md": {
	id: "react/server-component/README.md";
  slug: "react/server-component/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/style-for-react/README.md": {
	id: "react/style-for-react/README.md";
  slug: "react/style-for-react/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/style-for-react/css-module/README.md": {
	id: "react/style-for-react/css-module/README.md";
  slug: "react/style-for-react/css-module/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/suspense/README.md": {
	id: "react/suspense/README.md";
  slug: "react/suspense/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/think-in-react/README.md": {
	id: "react/think-in-react/README.md";
  slug: "react/think-in-react/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/think-in-react/Think in React.md": {
	id: "react/think-in-react/Think in React.md";
  slug: "react/think-in-react/think-in-react";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/think-in-react/product-table-app/mock.md": {
	id: "react/think-in-react/product-table-app/mock.md";
  slug: "react/think-in-react/product-table-app/mock";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/think-in-react/tic-tac-toe/README.md": {
	id: "react/think-in-react/tic-tac-toe/README.md";
  slug: "react/think-in-react/tic-tac-toe/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/think-in-react/tic-tac-toe/Tic-Tac-Toe.md": {
	id: "react/think-in-react/tic-tac-toe/Tic-Tac-Toe.md";
  slug: "react/think-in-react/tic-tac-toe/tic-tac-toe";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"react/try-react/README.md": {
	id: "react/try-react/README.md";
  slug: "react/try-react/readme";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"i18n": {
"zh-CN": {
	id: "zh-CN";
  collection: "i18n";
  data: InferEntrySchema<"i18n">
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("./../src/content/config.js");
}
