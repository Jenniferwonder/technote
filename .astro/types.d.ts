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
"array/array-basics/access-set-value-array-index.md": {
	id: "array/array-basics/access-set-value-array-index.md";
  slug: "array/array-basics/access-set-value-array-index";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-basics/array-basics.md": {
	id: "array/array-basics/array-basics.md";
  slug: "array/array-basics/array-basics";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-basics/array-holes-数组空位.md": {
	id: "array/array-basics/array-holes-数组空位.md";
  slug: "array/array-basics/array-holes-数组空位";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-basics/identify-if-a-value-is-array-检测值是否为数组.md": {
	id: "array/array-basics/identify-if-a-value-is-array-检测值是否为数组.md";
  slug: "array/array-basics/identify-if-a-value-is-array-检测值是否为数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-basics/maximum-numbers-of-items-in-an-array.md": {
	id: "array/array-basics/maximum-numbers-of-items-in-an-array.md";
  slug: "array/array-basics/maximum-numbers-of-items-in-an-array";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-basics/use-of-array-length.md": {
	id: "array/array-basics/use-of-array-length.md";
  slug: "array/array-basics/use-of-array-length";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-basics/ways-to-create-arrays-创建数组.md": {
	id: "array/array-basics/ways-to-create-arrays-创建数组.md";
  slug: "array/array-basics/ways-to-create-arrays-创建数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice.md": {
	id: "array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice.md";
  slug: "array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/array-instance-methods.md": {
	id: "array/array-instance-methods/array-instance-methods.md";
  slug: "array/array-instance-methods/array-instance-methods";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/concat-arrays-合并数组.md": {
	id: "array/array-instance-methods/concat-arrays-合并数组.md";
  slug: "array/array-instance-methods/concat-arrays-合并数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法.md": {
	id: "array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法.md";
  slug: "array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/copy-within-array-数组内部复制填充法.md": {
	id: "array/array-instance-methods/copy-within-array-数组内部复制填充法.md";
  slug: "array/array-instance-methods/copy-within-array-数组内部复制填充法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/fill-an-array-数组填充方法.md": {
	id: "array/array-instance-methods/fill-an-array-数组填充方法.md";
  slug: "array/array-instance-methods/fill-an-array-数组填充方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/filter-find-elements-筛选查找元素.md": {
	id: "array/array-instance-methods/filter-find-elements-筛选查找元素.md";
  slug: "array/array-instance-methods/filter-find-elements-筛选查找元素";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/find-index-of-element-查找元素位置.md": {
	id: "array/array-instance-methods/find-index-of-element-查找元素位置.md";
  slug: "array/array-instance-methods/find-index-of-element-查找元素位置";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/flat-array-展平数组.md": {
	id: "array/array-instance-methods/flat-array-展平数组.md";
  slug: "array/array-instance-methods/flat-array-展平数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/includes,-some,-every-判断.md": {
	id: "array/array-instance-methods/includes,-some,-every-判断.md";
  slug: "array/array-instance-methods/includes-some-every-判断";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/iterate-and-map-over-array-数组循环迭代.md": {
	id: "array/array-instance-methods/iterate-and-map-over-array-数组循环迭代.md";
  slug: "array/array-instance-methods/iterate-and-map-over-array-数组循环迭代";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/order-array-数组排序.md": {
	id: "array/array-instance-methods/order-array-数组排序.md";
  slug: "array/array-instance-methods/order-array-数组排序";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md": {
	id: "array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md";
  slug: "array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/reduce-array-get-the-sum-归并方法.md": {
	id: "array/array-instance-methods/reduce-array-get-the-sum-归并方法.md";
  slug: "array/array-instance-methods/reduce-array-get-the-sum-归并方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法.md": {
	id: "array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法.md";
  slug: "array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array-instance-methods/slice-array-截取数组.md": {
	id: "array/array-instance-methods/slice-array-截取数组.md";
  slug: "array/array-instance-methods/slice-array-截取数组";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"array/array.md": {
	id: "array/array.md";
  slug: "array/array";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/data-types.md": {
	id: "basics/data-types.md";
  slug: "basics/data-types";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/ecmascript-version.md": {
	id: "basics/ecmascript-version.md";
  slug: "basics/ecmascript-version";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/keywords-and-reserved-words-关键字与保留字.md": {
	id: "basics/keywords-and-reserved-words-关键字与保留字.md";
  slug: "basics/keywords-and-reserved-words-关键字与保留字";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/number.md": {
	id: "basics/number.md";
  slug: "basics/number";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/operators-操作符.md": {
	id: "basics/operators-操作符.md";
  slug: "basics/operators-操作符";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/primitive-and-reference-values-原始值与引用值.md": {
	id: "basics/primitive-and-reference-values-原始值与引用值.md";
  slug: "basics/primitive-and-reference-values-原始值与引用值";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/statements-语句.md": {
	id: "basics/statements-语句.md";
  slug: "basics/statements-语句";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/symbol.md": {
	id: "basics/symbol.md";
  slug: "basics/symbol";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/syntax-语法.md": {
	id: "basics/syntax-语法.md";
  slug: "basics/syntax-语法";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/undefined-and-null.md": {
	id: "basics/undefined-and-null.md";
  slug: "basics/undefined-and-null";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
"basics/variables-变量.md": {
	id: "basics/variables-变量.md";
  slug: "basics/variables-变量";
  body: string;
  collection: "docs";
  data: InferEntrySchema<"docs">
} & { render(): Render[".md"] };
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
"zh-cn/index.md": {
	id: "zh-cn/index.md";
  slug: "zh-cn";
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
