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
  data: any
} & { render(): Render[".mdx"] };
"index.mdx": {
	id: "index.mdx";
  slug: "index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"js/Array/Array-Basics/access-set-value-array-index.md": {
	id: "js/Array/Array-Basics/access-set-value-array-index.md";
  slug: "js/array/array-basics/access-set-value-array-index";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Basics/array-basics.md": {
	id: "js/Array/Array-Basics/array-basics.md";
  slug: "js/array/array-basics/array-basics";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Basics/array-holes-数组空位.md": {
	id: "js/Array/Array-Basics/array-holes-数组空位.md";
  slug: "js/array/array-basics/array-holes-数组空位";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Basics/identify-if-a-value-is-array-检测值是否为数组.md": {
	id: "js/Array/Array-Basics/identify-if-a-value-is-array-检测值是否为数组.md";
  slug: "js/array/array-basics/identify-if-a-value-is-array-检测值是否为数组";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Basics/maximum-numbers-of-items-in-an-array.md": {
	id: "js/Array/Array-Basics/maximum-numbers-of-items-in-an-array.md";
  slug: "js/array/array-basics/maximum-numbers-of-items-in-an-array";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Basics/use-of-array-length.md": {
	id: "js/Array/Array-Basics/use-of-array-length.md";
  slug: "js/array/array-basics/use-of-array-length";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Basics/ways-to-create-arrays-创建数组.md": {
	id: "js/Array/Array-Basics/ways-to-create-arrays-创建数组.md";
  slug: "js/array/array-basics/ways-to-create-arrays-创建数组";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/add-delete-change-elements-in-array-增删改数组-splice.md": {
	id: "js/Array/Array-Instance-Methods/add-delete-change-elements-in-array-增删改数组-splice.md";
  slug: "js/array/array-instance-methods/add-delete-change-elements-in-array-增删改数组-splice";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/array-instance-methods.md": {
	id: "js/Array/Array-Instance-Methods/array-instance-methods.md";
  slug: "js/array/array-instance-methods/array-instance-methods";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/concat-arrays-合并数组.md": {
	id: "js/Array/Array-Instance-Methods/concat-arrays-合并数组.md";
  slug: "js/array/array-instance-methods/concat-arrays-合并数组";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/convert-array-or-object-to-string-数组对象转字符串方法.md": {
	id: "js/Array/Array-Instance-Methods/convert-array-or-object-to-string-数组对象转字符串方法.md";
  slug: "js/array/array-instance-methods/convert-array-or-object-to-string-数组对象转字符串方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/copy-within-array-数组内部复制填充法.md": {
	id: "js/Array/Array-Instance-Methods/copy-within-array-数组内部复制填充法.md";
  slug: "js/array/array-instance-methods/copy-within-array-数组内部复制填充法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/fill-an-array-数组填充方法.md": {
	id: "js/Array/Array-Instance-Methods/fill-an-array-数组填充方法.md";
  slug: "js/array/array-instance-methods/fill-an-array-数组填充方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/filter-find-elements-筛选查找元素.md": {
	id: "js/Array/Array-Instance-Methods/filter-find-elements-筛选查找元素.md";
  slug: "js/array/array-instance-methods/filter-find-elements-筛选查找元素";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/find-index-of-element-查找元素位置.md": {
	id: "js/Array/Array-Instance-Methods/find-index-of-element-查找元素位置.md";
  slug: "js/array/array-instance-methods/find-index-of-element-查找元素位置";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/flat-array-展平数组.md": {
	id: "js/Array/Array-Instance-Methods/flat-array-展平数组.md";
  slug: "js/array/array-instance-methods/flat-array-展平数组";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/includes,-some,-every-判断.md": {
	id: "js/Array/Array-Instance-Methods/includes,-some,-every-判断.md";
  slug: "js/array/array-instance-methods/includes-some-every-判断";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/iterate-and-map-over-array-数组循环迭代.md": {
	id: "js/Array/Array-Instance-Methods/iterate-and-map-over-array-数组循环迭代.md";
  slug: "js/array/array-instance-methods/iterate-and-map-over-array-数组循环迭代";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/order-array-数组排序.md": {
	id: "js/Array/Array-Instance-Methods/order-array-数组排序.md";
  slug: "js/array/array-instance-methods/order-array-数组排序";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md": {
	id: "js/Array/Array-Instance-Methods/pop-push-last-element-in-array-数组末位增删元素-栈方法.md";
  slug: "js/array/array-instance-methods/pop-push-last-element-in-array-数组末位增删元素-栈方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/reduce-array-get-the-sum-归并方法.md": {
	id: "js/Array/Array-Instance-Methods/reduce-array-get-the-sum-归并方法.md";
  slug: "js/array/array-instance-methods/reduce-array-get-the-sum-归并方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/shift-element-in-array-数组首尾增删元素-队列方法.md": {
	id: "js/Array/Array-Instance-Methods/shift-element-in-array-数组首尾增删元素-队列方法.md";
  slug: "js/array/array-instance-methods/shift-element-in-array-数组首尾增删元素-队列方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/Array-Instance-Methods/slice-array-截取数组.md": {
	id: "js/Array/Array-Instance-Methods/slice-array-截取数组.md";
  slug: "js/array/array-instance-methods/slice-array-截取数组";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Array/array.md": {
	id: "js/Array/array.md";
  slug: "js/array/array";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/BOM/global-object.md": {
	id: "js/BOM/global-object.md";
  slug: "js/bom/global-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/BOM/history-object.md": {
	id: "js/BOM/history-object.md";
  slug: "js/bom/history-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/BOM/location-object.md": {
	id: "js/BOM/location-object.md";
  slug: "js/bom/location-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/BOM/navigator-object.md": {
	id: "js/BOM/navigator-object.md";
  slug: "js/bom/navigator-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/BOM/screen-object.md": {
	id: "js/BOM/screen-object.md";
  slug: "js/bom/screen-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/BOM/window-object.md": {
	id: "js/BOM/window-object.md";
  slug: "js/bom/window-object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/boolean.md": {
	id: "js/Basics/boolean.md";
  slug: "js/basics/boolean";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/data-types.md": {
	id: "js/Basics/data-types.md";
  slug: "js/basics/data-types";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/ecmascript-version.md": {
	id: "js/Basics/ecmascript-version.md";
  slug: "js/basics/ecmascript-version";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/keywords-and-reserved-words-关键字与保留字.md": {
	id: "js/Basics/keywords-and-reserved-words-关键字与保留字.md";
  slug: "js/basics/keywords-and-reserved-words-关键字与保留字";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/number.md": {
	id: "js/Basics/number.md";
  slug: "js/basics/number";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/operators-操作符.md": {
	id: "js/Basics/operators-操作符.md";
  slug: "js/basics/operators-操作符";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/primitive-and-reference-values-原始值与引用值.md": {
	id: "js/Basics/primitive-and-reference-values-原始值与引用值.md";
  slug: "js/basics/primitive-and-reference-values-原始值与引用值";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/statements-语句.md": {
	id: "js/Basics/statements-语句.md";
  slug: "js/basics/statements-语句";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/symbol.md": {
	id: "js/Basics/symbol.md";
  slug: "js/basics/symbol";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/syntax-语法.md": {
	id: "js/Basics/syntax-语法.md";
  slug: "js/basics/syntax-语法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/undefined-and-null.md": {
	id: "js/Basics/undefined-and-null.md";
  slug: "js/basics/undefined-and-null";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Basics/variables-变量.md": {
	id: "js/Basics/variables-变量.md";
  slug: "js/basics/variables-变量";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/arraybuffer-缓冲.md": {
	id: "js/DS-Plus/arraybuffer-缓冲.md";
  slug: "js/ds-plus/arraybuffer-缓冲";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/dataview.md": {
	id: "js/DS-Plus/dataview.md";
  slug: "js/ds-plus/dataview";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/elementtype.md": {
	id: "js/DS-Plus/elementtype.md";
  slug: "js/ds-plus/elementtype";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/endianness-字节序.md": {
	id: "js/DS-Plus/endianness-字节序.md";
  slug: "js/ds-plus/endianness-字节序";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/map.md": {
	id: "js/DS-Plus/map.md";
  slug: "js/ds-plus/map";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/set.md": {
	id: "js/DS-Plus/set.md";
  slug: "js/ds-plus/set";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/typed-array-history-历史.md": {
	id: "js/DS-Plus/typed-array-history-历史.md";
  slug: "js/ds-plus/typed-array-history-历史";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/typed-array-定型数组.md": {
	id: "js/DS-Plus/typed-array-定型数组.md";
  slug: "js/ds-plus/typed-array-定型数组";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/weakmap.md": {
	id: "js/DS-Plus/weakmap.md";
  slug: "js/ds-plus/weakmap";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/DS-Plus/weakset.md": {
	id: "js/DS-Plus/weakset.md";
  slug: "js/ds-plus/weakset";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/Async/async...await.md": {
	id: "js/Data-fetching/Async/async...await.md";
  slug: "js/data-fetching/async/asyncawait";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/Async/callbacks.md": {
	id: "js/Data-fetching/Async/callbacks.md";
  slug: "js/data-fetching/async/callbacks";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/Async/debounce-and-throttle-防抖节流.md": {
	id: "js/Data-fetching/Async/debounce-and-throttle-防抖节流.md";
  slug: "js/data-fetching/async/debounce-and-throttle-防抖节流";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/Async/event-loop-事件循环.md": {
	id: "js/Data-fetching/Async/event-loop-事件循环.md";
  slug: "js/data-fetching/async/event-loop-事件循环";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/Async/promise.md": {
	id: "js/Data-fetching/Async/promise.md";
  slug: "js/data-fetching/async/promise";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/Async/timer-计时器函数.md": {
	id: "js/Data-fetching/Async/timer-计时器函数.md";
  slug: "js/data-fetching/async/timer-计时器函数";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/axios.md": {
	id: "js/Data-fetching/axios.md";
  slug: "js/data-fetching/axios";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/data-fetching.md": {
	id: "js/Data-fetching/data-fetching.md";
  slug: "js/data-fetching/data-fetching";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-fetching/fetch-api.md": {
	id: "js/Data-fetching/fetch-api.md";
  slug: "js/data-fetching/fetch-api";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-store/cookies.md": {
	id: "js/Data-store/cookies.md";
  slug: "js/data-store/cookies";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-store/json.md": {
	id: "js/Data-store/json.md";
  slug: "js/data-store/json";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-store/local-storage.md": {
	id: "js/Data-store/local-storage.md";
  slug: "js/data-store/local-storage";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-store/mock-data.md": {
	id: "js/Data-store/mock-data.md";
  slug: "js/data-store/mock-data";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Data-store/session.md": {
	id: "js/Data-store/session.md";
  slug: "js/data-store/session";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Date/date.md": {
	id: "js/Date/date.md";
  slug: "js/date/date";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/call-apply-bind.md": {
	id: "js/Function/call-apply-bind.md";
  slug: "js/function/call-apply-bind";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/closure-(闭包).md": {
	id: "js/Function/closure-(闭包).md";
  slug: "js/function/closure-闭包";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/collect-or-rest-and-spread-function-arguments-(收集,-剩余与扩展参数).md": {
	id: "js/Function/collect-or-rest-and-spread-function-arguments-(收集,-剩余与扩展参数).md";
  slug: "js/function/collect-or-rest-and-spread-function-arguments-收集-剩余与扩展参数";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/function-arguments-(函数参数).md": {
	id: "js/Function/function-arguments-(函数参数).md";
  slug: "js/function/function-arguments-函数参数";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/function-creation-(创建函数).md": {
	id: "js/Function/function-creation-(创建函数).md";
  slug: "js/function/function-creation-创建函数";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/function-feature-(函数本质与特点).md": {
	id: "js/Function/function-feature-(函数本质与特点).md";
  slug: "js/function/function-feature-函数本质与特点";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/function-names-(读取函数名).md": {
	id: "js/Function/function-names-(读取函数名).md";
  slug: "js/function/function-names-读取函数名";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/function.md": {
	id: "js/Function/function.md";
  slug: "js/function/function";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/functional-programming-js-函数式编程.md": {
	id: "js/Function/functional-programming-js-函数式编程.md";
  slug: "js/function/functional-programming-js-函数式编程";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/new.target-功能用法-(es6).md": {
	id: "js/Function/new.target-功能用法-(es6).md";
  slug: "js/function/newtarget-功能用法-es6";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/the-return-statement.md": {
	id: "js/Function/the-return-statement.md";
  slug: "js/function/the-return-statement";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Function/this-in-js-function.md": {
	id: "js/Function/this-in-js-function.md";
  slug: "js/function/this-in-js-function";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/JS-API/js-api.md": {
	id: "js/JS-API/js-api.md";
  slug: "js/js-api/js-api";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/JS-API/observer-api.md": {
	id: "js/JS-API/observer-api.md";
  slug: "js/js-api/observer-api";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Math/math.md": {
	id: "js/Math/math.md";
  slug: "js/math/math";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/OOP/class-(es6-类).md": {
	id: "js/OOP/class-(es6-类).md";
  slug: "js/oop/class-es6-类";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/OOP/inheritance.md": {
	id: "js/OOP/inheritance.md";
  slug: "js/oop/inheritance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/OOP/oop-principles.md": {
	id: "js/OOP/oop-principles.md";
  slug: "js/oop/oop-principles";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/OOP/oop.md": {
	id: "js/OOP/oop.md";
  slug: "js/oop/oop";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/OOP/prototype-chain-inheritance.md": {
	id: "js/OOP/prototype-chain-inheritance.md";
  slug: "js/oop/prototype-chain-inheritance";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/assign-merge-objects-(对象合并).md": {
	id: "js/Object/assign-merge-objects-(对象合并).md";
  slug: "js/object/assign-merge-objects-对象合并";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/constructor-function-(构造函数模式).md": {
	id: "js/Object/constructor-function-(构造函数模式).md";
  slug: "js/object/constructor-function-构造函数模式";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/factory-function-(工厂模式).md": {
	id: "js/Object/factory-function-(工厂模式).md";
  slug: "js/object/factory-function-工厂模式";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/identify-object-equality-(对象全等判定).md": {
	id: "js/Object/identify-object-equality-(对象全等判定).md";
  slug: "js/object/identify-object-equality-对象全等判定";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object-creation-(创建对象).md": {
	id: "js/Object/object-creation-(创建对象).md";
  slug: "js/object/object-creation-创建对象";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object-destructuring-(对象解构).md": {
	id: "js/Object/object-destructuring-(对象解构).md";
  slug: "js/object/object-destructuring-对象解构";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object-iteration-(对象迭代).md": {
	id: "js/Object/object-iteration-(对象迭代).md";
  slug: "js/object/object-iteration-对象迭代";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object-literal-(对象字面量表示法).md": {
	id: "js/Object/object-literal-(对象字面量表示法).md";
  slug: "js/object/object-literal-对象字面量表示法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object-property-&-value-(对象属性与值).md": {
	id: "js/Object/object-property-&-value-(对象属性与值).md";
  slug: "js/object/object-property--value-对象属性与值";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object-types-(instanceof-标识对象类型).md": {
	id: "js/Object/object-types-(instanceof-标识对象类型).md";
  slug: "js/object/object-types-instanceof-标识对象类型";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/object.md": {
	id: "js/Object/object.md";
  slug: "js/object/object";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/prototype-pattern-(原型模式).md": {
	id: "js/Object/prototype-pattern-(原型模式).md";
  slug: "js/object/prototype-pattern-原型模式";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Object/use-new-operator-(使用-new-操作符).md": {
	id: "js/Object/use-new-operator-(使用-new-操作符).md";
  slug: "js/object/use-new-operator-使用-new-操作符";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Practice/copy-深浅拷贝.md": {
	id: "js/Practice/copy-深浅拷贝.md";
  slug: "js/practice/copy-深浅拷贝";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Practice/generator-生成器.md": {
	id: "js/Practice/generator-生成器.md";
  slug: "js/practice/generator-生成器";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Practice/iteration-and-spread-operators-迭代与扩展操作.md": {
	id: "js/Practice/iteration-and-spread-operators-迭代与扩展操作.md";
  slug: "js/practice/iteration-and-spread-operators-迭代与扩展操作";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Practice/iterator-迭代器.md": {
	id: "js/Practice/iterator-迭代器.md";
  slug: "js/practice/iterator-迭代器";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Regexp/regexp.md": {
	id: "js/Regexp/regexp.md";
  slug: "js/regexp/regexp";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Scope/call-stack-执行栈与执行上下文.md": {
	id: "js/Scope/call-stack-执行栈与执行上下文.md";
  slug: "js/scope/call-stack-执行栈与执行上下文";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Scope/context-and-scope-执行上下文与作用域.md": {
	id: "js/Scope/context-and-scope-执行上下文与作用域.md";
  slug: "js/scope/context-and-scope-执行上下文与作用域";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Scope/garbage-collection-垃圾回收.md": {
	id: "js/Scope/garbage-collection-垃圾回收.md";
  slug: "js/scope/garbage-collection-垃圾回收";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Basics/character-literals-字符字面量.md": {
	id: "js/String/String-Basics/character-literals-字符字面量.md";
  slug: "js/string/string-basics/character-literals-字符字面量";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Basics/convert-value-to-a-string-(转字符串方法).md": {
	id: "js/String/String-Basics/convert-value-to-a-string-(转字符串方法).md";
  slug: "js/string/string-basics/convert-value-to-a-string-转字符串方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Basics/string-basics.md": {
	id: "js/String/String-Basics/string-basics.md";
  slug: "js/string/string-basics/string-basics";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Basics/template-literals-模板字面量.md": {
	id: "js/String/String-Basics/template-literals-模板字面量.md";
  slug: "js/string/string-basics/template-literals-模板字面量";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-case-methods-(大小写).md": {
	id: "js/String/String-Instance-Methods/string-case-methods-(大小写).md";
  slug: "js/string/string-instance-methods/string-case-methods-大小写";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-concat-(拼接方法).md": {
	id: "js/String/String-Instance-Methods/string-concat-(拼接方法).md";
  slug: "js/string/string-instance-methods/string-concat-拼接方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-inclusion-methods-(包含方法).md": {
	id: "js/String/String-Instance-Methods/string-inclusion-methods-(包含方法).md";
  slug: "js/string/string-instance-methods/string-inclusion-methods-包含方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-instance-methods.md": {
	id: "js/String/String-Instance-Methods/string-instance-methods.md";
  slug: "js/string/string-instance-methods/string-instance-methods";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-iterators-and-destructuring-(迭代与解构).md": {
	id: "js/String/String-Instance-Methods/string-iterators-and-destructuring-(迭代与解构).md";
  slug: "js/string/string-instance-methods/string-iterators-and-destructuring-迭代与解构";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-location-methods-(位置方法).md": {
	id: "js/String/String-Instance-Methods/string-location-methods-(位置方法).md";
  slug: "js/string/string-instance-methods/string-location-methods-位置方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-padstart()-and-padend()-fill-methods-(填充方法).md": {
	id: "js/String/String-Instance-Methods/string-padstart()-and-padend()-fill-methods-(填充方法).md";
  slug: "js/string/string-instance-methods/string-padstart-and-padend-fill-methods-填充方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-pattern-matching-methods-(查找匹配替换).md": {
	id: "js/String/String-Instance-Methods/string-pattern-matching-methods-(查找匹配替换).md";
  slug: "js/string/string-instance-methods/string-pattern-matching-methods-查找匹配替换";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-repeat-method-(重复方法).md": {
	id: "js/String/String-Instance-Methods/string-repeat-method-(重复方法).md";
  slug: "js/string/string-instance-methods/string-repeat-method-重复方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-slice,-substring,-substr-(截取方法).md": {
	id: "js/String/String-Instance-Methods/string-slice,-substring,-substr-(截取方法).md";
  slug: "js/string/string-instance-methods/string-slice-substring-substr-截取方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-split,-join-(拆合方法).md": {
	id: "js/String/String-Instance-Methods/string-split,-join-(拆合方法).md";
  slug: "js/string/string-instance-methods/string-split-join-拆合方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/String-Instance-Methods/string-trim-space-method-(去空格方法).md": {
	id: "js/String/String-Instance-Methods/string-trim-space-method-(去空格方法).md";
  slug: "js/string/string-instance-methods/string-trim-space-method-去空格方法";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/String/string.md": {
	id: "js/String/string.md";
  slug: "js/string/string";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Web-worker/service-worker.md": {
	id: "js/Web-worker/service-worker.md";
  slug: "js/web-worker/service-worker";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"js/Web-worker/web-worker.md": {
	id: "js/Web-worker/web-worker.md";
  slug: "js/web-worker/web-worker";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"overview.mdx": {
	id: "overview.mdx";
  slug: "overview";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"react/Data-Fetching/README.md": {
	id: "react/Data-Fetching/README.md";
  slug: "react/data-fetching/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Data-Fetching/React-Query/README.md": {
	id: "react/Data-Fetching/React-Query/README.md";
  slug: "react/data-fetching/react-query/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/File-Upload/README.md": {
	id: "react/File-Upload/README.md";
  slug: "react/file-upload/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/README.md": {
	id: "react/Hooks/README.md";
  slug: "react/hooks/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/README.md": {
	id: "react/Hooks/State-Management/README.md";
  slug: "react/hooks/state-management/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/lib-for-state/README.md": {
	id: "react/Hooks/State-Management/lib-for-state/README.md";
  slug: "react/hooks/state-management/lib-for-state/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useContext/README.md": {
	id: "react/Hooks/State-Management/useContext/README.md";
  slug: "react/hooks/state-management/usecontext/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useReducer/README.md": {
	id: "react/Hooks/State-Management/useReducer/README.md";
  slug: "react/hooks/state-management/usereducer/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/README.md": {
	id: "react/Hooks/State-Management/useState/README.md";
  slug: "react/hooks/state-management/usestate/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/add-interactivity/README.md": {
	id: "react/Hooks/State-Management/useState/add-interactivity/README.md";
  slug: "react/hooks/state-management/usestate/add-interactivity/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/add-interactivity/Update Screen (Event Handlers).md": {
	id: "react/Hooks/State-Management/useState/add-interactivity/Update Screen (Event Handlers).md";
  slug: "react/hooks/state-management/usestate/add-interactivity/update-screen-event-handlers";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/preserve-reset-state/README.md": {
	id: "react/Hooks/State-Management/useState/preserve-reset-state/README.md";
  slug: "react/hooks/state-management/usestate/preserve-reset-state/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/react-to-input/README.md": {
	id: "react/Hooks/State-Management/useState/react-to-input/README.md";
  slug: "react/hooks/state-management/usestate/react-to-input/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/react-to-input/Respond to Events (Inputs).md": {
	id: "react/Hooks/State-Management/useState/react-to-input/Respond to Events (Inputs).md";
  slug: "react/hooks/state-management/usestate/react-to-input/respond-to-events-inputs";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/share-state/README.md": {
	id: "react/Hooks/State-Management/useState/share-state/README.md";
  slug: "react/hooks/state-management/usestate/share-state/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/State-Management/useState/state-structure/README.md": {
	id: "react/Hooks/State-Management/useState/state-structure/README.md";
  slug: "react/hooks/state-management/usestate/state-structure/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/useEffect/README.md": {
	id: "react/Hooks/useEffect/README.md";
  slug: "react/hooks/useeffect/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/useImperativeHandle/README.md": {
	id: "react/Hooks/useImperativeHandle/README.md";
  slug: "react/hooks/useimperativehandle/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/useMemo/README.md": {
	id: "react/Hooks/useMemo/README.md";
  slug: "react/hooks/usememo/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Hooks/useRef/README.md": {
	id: "react/Hooks/useRef/README.md";
  slug: "react/hooks/useref/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Basics/Demo.mdx": {
	id: "react/React-Basics/Demo.mdx";
  slug: "react/react-basics/demo";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".mdx"] };
"react/React-Basics/README.md": {
	id: "react/React-Basics/README.md";
  slug: "react/react-basics/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Basics/React CDD-组件化开发.md": {
	id: "react/React-Basics/React CDD-组件化开发.md";
  slug: "react/react-basics/react-cdd-组件化开发";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Basics/z-class-component/README.md": {
	id: "react/React-Basics/z-class-component/README.md";
  slug: "react/react-basics/z-class-component/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Basics/z-react-loadable/README.md": {
	id: "react/React-Basics/z-react-loadable/README.md";
  slug: "react/react-basics/z-react-loadable/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Bundle-Issue/README.md": {
	id: "react/React-Bundle-Issue/README.md";
  slug: "react/react-bundle-issue/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Form-Lib/README.md": {
	id: "react/React-Form-Lib/README.md";
  slug: "react/react-form-lib/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Intl/README.md": {
	id: "react/React-Intl/README.md";
  slug: "react/react-intl/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Performance/README.md": {
	id: "react/React-Performance/README.md";
  slug: "react/react-performance/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Security-Issue/README.md": {
	id: "react/React-Security-Issue/README.md";
  slug: "react/react-security-issue/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Source-Code/README.md": {
	id: "react/React-Source-Code/README.md";
  slug: "react/react-source-code/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/React-Versions-Features/README.md": {
	id: "react/React-Versions-Features/README.md";
  slug: "react/react-versions-features/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Relay/README.md": {
	id: "react/Relay/README.md";
  slug: "react/relay/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Routing/README.md": {
	id: "react/Routing/README.md";
  slug: "react/routing/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Routing/React-Router/README.md": {
	id: "react/Routing/React-Router/README.md";
  slug: "react/routing/react-router/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Server-Component/README.md": {
	id: "react/Server-Component/README.md";
  slug: "react/server-component/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Style-for-React/CSS-Module/README.md": {
	id: "react/Style-for-React/CSS-Module/README.md";
  slug: "react/style-for-react/css-module/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Style-for-React/README.md": {
	id: "react/Style-for-React/README.md";
  slug: "react/style-for-react/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Suspense/README.md": {
	id: "react/Suspense/README.md";
  slug: "react/suspense/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Think-in-React/README.md": {
	id: "react/Think-in-React/README.md";
  slug: "react/think-in-react/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Think-in-React/Think in React.md": {
	id: "react/Think-in-React/Think in React.md";
  slug: "react/think-in-react/think-in-react";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Think-in-React/product-table-app/mock.md": {
	id: "react/Think-in-React/product-table-app/mock.md";
  slug: "react/think-in-react/product-table-app/mock";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Think-in-React/tic-tac-toe/README.md": {
	id: "react/Think-in-React/tic-tac-toe/README.md";
  slug: "react/think-in-react/tic-tac-toe/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Think-in-React/tic-tac-toe/Tic-Tac-Toe.md": {
	id: "react/Think-in-React/tic-tac-toe/Tic-Tac-Toe.md";
  slug: "react/think-in-react/tic-tac-toe/tic-tac-toe";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
"react/Try-React/README.md": {
	id: "react/Try-React/README.md";
  slug: "react/try-react/readme";
  body: string;
  collection: "docs";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"i18n": {
"zh-CN": {
	id: "zh-CN";
  collection: "i18n";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
