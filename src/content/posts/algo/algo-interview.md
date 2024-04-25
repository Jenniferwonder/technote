---
title: algo-interview
topic: 
type: 
tags:
  - Algo
category: Programming
Datereviewed: 
reviewed: 
difficulty: 
status: 
comment: 
draft: true
DateStarted: 2024-04-25
DateModified: 2024-04-25
---
### 深度优先遍历和广度优先遍历的区别是什么？
深度优先遍历（Depth-First Search, DFS）和广度优先遍历（Breadth-First Search, BFS）都是用于遍历或搜索树或图的算法。这两种方法各有其优缺点：
### 深度优先遍历 (DFS)：
#### 优点：
1. **空间效率**：在树的深度远小于广度时，DFS 通常更加空间效率。因为它只需要存储一个路径的信息，而不是存储整个层的信息。
2. **寻找深度解**：当问题需要找到深度解（例如求解迷宫的一条路径）时，DFS 是一个很好的选择。
3. **实现相对简单**：使用递归或堆栈，DFS 相对容易实现。
4. **可以找到连通分量**：对于图的分析，DFS 可以被用来识别图的连通分量。
#### 缺点：
1. **可能不完整**：在无限或非常大的搜索空间中，DFS 可能永远不会结束，或者可能会错过更优解。
2. **可能找到非最优解**：不同于 BFS，DFS 可能找到一个解，但并不是最优解。
3. **使用递归可能导致栈溢出**：如果搜索树非常深，递归实现可能会导致栈溢出。
### 广度优先遍历 (BFS)：
#### 优点：
1. **找到最优解**：如果存在多个解，BFS 会找到最少步骤的解，因为它首先检查所有的近邻节点。
2. **完整性**：即使在无限或非常大的搜索空间中，BFS 也可以保证找到解（如果存在）。
3. **适用于广度大于深度的情况**：如果树或图的广度远小于深度，BFS 可能更加高效。
#### 缺点：
1. **空间消耗**：因为 BFS 需要存储所有扩展节点的信息，所以空间消耗可能非常大，特别是当广度远大于深度时。
2. **可能较慢找到深度解**：如果解在较深的层，BFS 可能需要更多时间来找到它，因为它需要逐层搜索。
### 总结
选择 DFS 还是 BFS 主要取决于问题的具体要求和搜索空间的结构。如果你需要找到最优解并且广度相对较小，BFS 可能是更好的选择。如果你只需要找到一个解，或者如果深度相对较小，DFS 可能更加适合。在实际应用中，深度优先搜索和广度优先搜索的选择可能还取决于其他许多因素，如问题的特殊性质和可用资源。
### 排序
#### 快速排序（Quick Sort）

```typescript
function quickSort(arr: number[], low: number, high: number): void {
	if (low < high) {
		// 获取分区索引
		const partitionIndex = partition(arr, low, high);
		// 递归调用
		quickSort(arr, low, partitionIndex - 1);
		quickSort(arr, partitionIndex + 1, high);
	}
}
function partition(arr: number[], low: number, high: number): number {
	// 选择基准值
	const pivot = arr[high];
	// 初始化分区索引
	let i = low - 1;
	// 将小于等于基准值的元素放到基准值的左侧
	for (let j = low; j < high; j++) {
		if (arr[j] <= pivot) {
			i++;
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	// 交换基准值和分区索引+1位置的元素
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	// 返回分区索引+1作为新的基准值索引
	return i + 1;
}
// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 归并排序（Merge Sort）

```typescript
function mergeSort(arr: number[]): number[] {
	const len = arr.length;
	if (len < 2) {
		return arr;
	}
	// 分割数组
	const mid = Math.floor(len / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	// 递归调用并合并结果
	return merge(mergeSort(left), mergeSort(right));
}
function merge(left: number[], right: number[]): number[] {
	const result: number[] = [];
	// 合并两个已排序的数组
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift()!);
		} else {
			result.push(right.shift()!);
		}
	}
	// 将剩余的元素添加到结果数组
	return result.concat(left, right);
}
// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(mergeSort(arr)); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 堆排序（Heap Sort）

```typescript
function heapSort(arr: number[]): void {
	let n = arr.length;
	// 构建大顶堆
	for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
		heapify(arr, n, i);
	}
	// 逐个提取元素并调整堆结构
	for (let i = n - 1; i > 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		n--;
		heapify(arr, n, 0);
	}
}
function heapify(arr: number[], n: number, i: number): void {
	let largest = i;
	const left = 2 * i + 1;
	const right = 2 * i + 2;
	if (left < n && arr[left] > arr[largest]) {
		largest = left;
	}
	if (right < n && arr[right] > arr[largest]) {
		largest = right;
	}
	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		heapify(arr, n, largest);
	}
}
// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
heapSort(arr);
console.log(arr); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 冒泡排序（Bubble Sort）

```typescript
function bubbleSort(arr: number[]): void {
	const n = arr.length;
	let swapped;
	for (let i = 0; i < n - 1; i++) {
		swapped = false;
		for (let j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
				swapped = true;
			}
		}
		// 如果没有发生交换，说明数组已经有序
		if (!swapped) {
			break;
		}
	}
}
// 测试用例
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
bubbleSort(arr);
console.log(arr); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 选择排序（Selection Sort）

```typescript
function selectionSort(arr: number[]): void {
	const n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let minIndex = i;
		// 寻找最小元素的索引
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j;
			}
		}
		// 交换最小元素与当前元素
		if (minIndex !== i) {
			[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
		}
	}
}
// 测试用例
const arr1 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
selectionSort(arr1);
console.log(arr1); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 插入排序（Insertion Sort）

```typescript
function insertionSort(arr: number[]): void {
	const n = arr.length;
	for (let i = 1; i < n; i++) {
		const key = arr[i];
		let j = i - 1;
		// 将大于 key 的元素向后移动
		while (j >= 0 && arr[j] > key) {
			arr[j + 1] = arr[j];
			j--;
		}
		// 插入 key 到正确位置
		arr[j + 1] = key;
	}
}
// 测试用例
const arr2 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
insertionSort(arr2);
console.log(arr2); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 希尔排序（Shell Sort）

```typescript
function shellSort(arr: number[]): void {
	const n = arr.length;
	for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < n; i++) {
			const temp = arr[i];
			let j;
			for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
				arr[j] = arr[j - gap];
			}
			arr[j] = temp;
		}
	}
}
// 测试用例
const arr3 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
shellSort(arr3);
console.log(arr3); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 计数排序（Counting Sort）

```typescript
function countingSort(arr: number[]): number[] {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const range = max - min + 1;
	const count: number[] = new Array(range).fill(0);
	const output: number[] = new Array(arr.length);
	// 统计元素出现次数
	arr.forEach((value) => {
		count[value - min]++;
	});
	// 累加计数
	for (let i = 1; i < range; i++) {
		count[i] += count[i - 1];
	}
	// 生成结果数组
	for (let i = arr.length - 1; i >= 0; i--) {
		output[count[arr[i] - min] - 1] = arr[i];
		count[arr[i] - min]--;
	}
	return output;
}
// 测试用例
const arr4 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(countingSort(arr4)); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 基数排序（Radix Sort）

```typescript
function radixSort(arr: number[]): void {
	const max = Math.max(...arr);
	let exp = 1;
	while (Math.floor(max / exp) > 0) {
		countingSortForRadix(arr, exp);
		exp *= 10;
	}
}
function countingSortForRadix(arr: number[], exp: number): void {
	const n = arr.length;
	const output: number[] = new Array(n).fill(0);
	const count: number[] = new Array(10).fill(0);
	// 统计个位数字出现的次数
	for (let i = 0; i < n; i++) {
		count[Math.floor(arr[i] / exp) % 10]++;
	}
	// 累加计数
	for (let i = 1; i < 10; i++) {
		count[i] += count[i - 1];
	}
	// 生成结果数组
	for (let i = n - 1; i >= 0; i--) {
		output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
		count[Math.floor(arr[i] / exp) % 10]--;
	}
	// 将结果复制回原数组
	for (let i = 0; i < n; i++) {
		arr[i] = output[i];
	}
}
// 测试用例
const arr5 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
radixSort(arr5);
console.log(arr5); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 桶排序（Bucket Sort）

```typescript
function bucketSort(arr: number[], bucketSize = 5): number[] {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const bucketCount = Math.floor((max - min) / bucketSize) + 1;
	const buckets: number[][] = new Array(bucketCount).fill(0).map(() => []);
	// 将元素分配到桶中
	for (let i = 0; i < arr.length; i++) {
		const index = Math.floor((arr[i] - min) / bucketSize);
		buckets[index].push(arr[i]);
	}
	// 对每个桶进行排序
	for (let i = 0; i < buckets.length; i++) {
		buckets[i].sort((a, b) => a - b);
	}
	// 将桶中的元素合并到结果数组
	return ([] as number[]).concat(...buckets);
}
// 测试用例
const arr6 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(bucketSort(arr6)); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 二叉树排序（Binary Tree Sort）
二叉树排序是指利用二叉搜索树（Binary Search Tree，BST）的特性进行排序的算法。二叉搜索树是一种特殊的二叉树，对于树中的每个节点，其左子树中的所有节点值均小于该节点值，其右子树中的所有节点值均大于该节点值。通过中序遍历二叉搜索树，可以得到一个有序的序列。

```typescript
// 定义一个二叉搜索树节点类
class TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
// 定义一个二叉搜索树类，包含插入和中序遍历方法
class BinarySearchTree {
	root: TreeNode | null;
	constructor() {
		this.root = null;
	}
	insert(value: number): void {
		if (this.root === null) {
			this.root = new TreeNode(value);
		} else {
			this._insertNode(this.root, value);
		}
	}
	private _insertNode(node: TreeNode, value: number): void {
		if (value < node.value) {
			if (node.left === null) {
				node.left = new TreeNode(value);
			} else {
				this._insertNode(node.left, value);
			}
		} else {
			if (node.right === null) {
				node.right = new TreeNode(value);
			} else {
				this._insertNode(node.right, value);
			}
		}
	}
	inOrderTraversal(): number[] {
		const result: number[] = [];
		this._inOrderTraversalNode(this.root, result);
		return result;
	}
	private _inOrderTraversalNode(node: TreeNode | null, result: number[]): void {
		if (node !== null) {
			this._inOrderTraversalNode(node.left, result);
			result.push(node.value);
			this._inOrderTraversalNode(node.right, result);
		}
	}
}
function binaryTreeSort(arr: number[]): number[] {
	const bst = new BinarySearchTree();
	// 将数组中的值插入二叉搜索树
	arr.forEach((value) => {
		bst.insert(value);
	});
	// 中序遍历二叉搜索树，得到排序后的数组
	return bst.inOrderTraversal();
}
// 测试用例
const arr8 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(binaryTreeSort(arr8)); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

注意，二叉搜索树在极端情况下可能导致不平衡，这会影响排序性能。为了解决这个问题，可以使用平衡二叉搜索树（如 AVL 树或红黑树）进行排序。
#### 鸽巢排序（Pigeonhole Sort）

```typescript
function pigeonholeSort(arr: number[]): number[] {
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const range = max - min + 1;
	const pigeonholes: number[][] = new Array(range).fill(0).map(() => []);
	// 将元素放入对应的鸽巢
	for (const value of arr) {
		pigeonholes[value - min].push(value);
	}
	// 从鸽巢中取出元素，拼接成排序后的数组
	return ([] as number[]).concat(...pigeonholes);
}
// 测试用例
const arr7 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(pigeonholeSort(arr7)); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 侏儒排序（Gnome Sort）

```typescript
function gnomeSort(arr: number[]): void {
	let i = 1;
	let j = 2;
	while (i < arr.length) {
		if (arr[i - 1] <= arr[i]) {
			i = j;
			j++;
		} else {
			[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
			i -= 1;
			if (i === 0) {
				i = j;
				j++;
			}
		}
	}
}
// 测试用例
const arr9 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
gnomeSort(arr9);
console.log(arr9); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

#### 猴子排序（Bogo Sort）

```typescript
function isSorted(arr: number[]): boolean {
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] > arr[i]) {
			return false;
		}
	}
	return true;
}
function shuffle(arr: number[]): void {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
}
function bogosort(arr: number[]): void {
	while (!isSorted(arr)) {
		shuffle(arr);
	}
}
// 测试用例
const arr11 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
bogosort(arr11);
console.log(arr11); // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
```

### 查找
#### 二分查找（Binary Search）

```typescript
function binarySearch(arr: number[], target: number): number {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) {
			return mid;
		}
		if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
// 测试用例
const sortedArr = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(binarySearch(sortedArr, 10)); // 输出：6
console.log(binarySearch(sortedArr, 4)); // 输出：-1
```

#### 插值查找（Interpolation Search）

```typescript
function interpolationSearch(arr: number[], target: number): number {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right && target >= arr[left] && target <= arr[right]) {
		if (left === right) {
			return arr[left] === target ? left : -1;
		}
		const position =
			left +
			Math.floor(
				((target - arr[left]) * (right - left)) / (arr[right] - arr[left])
			);
		if (arr[position] === target) {
			return position;
		}
		if (arr[position] < target) {
			left = position + 1;
		} else {
			right = position - 1;
		}
	}
	return -1;
}
// 测试用例
const sortedArr3 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(interpolationSearch(sortedArr3, 10)); // 输出：6
console.log(interpolationSearch(sortedArr3, 4)); // 输出：-1
```

#### 斐波那契查找（Fibonacci Search）

```typescript
function fibonacciSearch(arr: number[], target: number): number {
	const fib = [0, 1];
	while (fib[fib.length - 1] < arr.length) {
		fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
	}
	let offset = -1;
	while (fib[fib.length - 1] > 1) {
		const index = Math.min(offset + fib[fib.length - 2], arr.length - 1);
		if (target > arr[index]) {
			fib.pop();
			offset = index;
		} else if (target < arr[index]) {
			fib.pop();
			fib.pop();
		} else {
			return index;
		}
	}
	if (fib[fib.length - 1] && arr[offset + 1] === target) {
		return offset + 1;
	}
	return -1;
}
// 测试用例
const sortedArr4 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(fibonacciSearch(sortedArr4, 10)); // 输出：6
console.log(fibonacciSearch(sortedArr4, 4)); // 输出：-1
```

#### 指数查找（Exponential Search）

```typescript
function exponentialSearch(arr: number[], target: number): number {
	if (arr[0] === target) {
		return 0;
	}
	let i = 1;
	while (i < arr.length && arr[i] <= target) {
		i *= 2;
	}
	return binarySearch(arr.slice(i / 2, Math.min(i, arr.length)), target);
}
function binarySearch(arr: number[], target: number): number {
	let left = 0;
	let right = arr.length - 1;
	while (left <= right) {
		const mid = Math.floor((left + right) / 2);
		if (arr[mid] === target) {
			return mid;
		}
		if (arr[mid] < target) {
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return -1;
}
// 测试用例
const sortedArr5 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(exponentialSearch(sortedArr5, 10)); // 输出：6
console.log(exponentialSearch(sortedArr5, 4)); // 输出：-1
```

#### 哈希查找（Hashing）

```typescript
class HashTable {
	storage: Map<number, number>;
	constructor() {
		this.storage = new Map<number, number>();
	}
	insert(key: number, value: number): void {
		this.storage.set(key, value);
	}
	search(key: number): number | null {
		return this.storage.has(key) ? this.storage.get(key) : null;
	}
}
const hashTable = new HashTable();
const arr6 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
// 将数组中的值作为键，索引作为值存储到哈希表中
arr6.forEach((value, index) => {
	hashTable.insert(value, index);
});
// 测试用例
console.log(hashTable.search(10)); // 输出：8
console.log(hashTable.search(4)); // 输出：null
```

#### 二叉查找树（Binary Search Tree）

```typescript
class TreeNode {
	value: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(value: number) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}
class BinarySearchTree {
	root: TreeNode | null;
	constructor() {
		this.root = null;
	}
	insert(value: number): void {
		if (this.root === null) {
			this.root = new TreeNode(value);
		} else {
			this._insertNode(this.root, value);
		}
	}
	private _insertNode(node: TreeNode, value: number): void {
		if (value < node.value) {
			if (node.left === null) {
				node.left = new TreeNode(value);
			} else {
				this._insertNode(node.left, value);
			}
		} else {
			if (node.right === null) {
				node.right = new TreeNode(value);
			} else {
				this._insertNode(node.right, value);
			}
		}
	}
	search(value: number): boolean {
		return this._searchNode(this.root, value);
	}
	private _searchNode(node: TreeNode | null, value: number): boolean {
		if (node === null) {
			return false;
		}
		if (value < node.value) {
			return this._searchNode(node.left, value);
		} else if (value > node.value) {
			return this._searchNode(node.right, value);
		} else {
			return true;
		}
	}
}
const bst = new BinarySearchTree();
const arr7 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
// 向二叉查找树中插入数组中的值
arr7.forEach((value) => {
	bst.insert(value);
});
// 测试用例
console.log(bst.search(10)); // 输出：true
console.log(bst.search(4)); // 输出：false
```

#### 平衡二叉查找树（Balanced Binary Search Tree），如 AVL 树、红黑树

```typescript
class AVLTreeNode extends TreeNode {
	height: number;
	constructor(value: number) {
		super(value);
		this.height = 1;
	}
}
class AVLTree extends BinarySearchTree {
	insert(value: number): void {
		this.root = this._insertNode(this.root as AVLTreeNode, value);
	}
	private _insertNode(node: AVLTreeNode | null, value: number): AVLTreeNode {
		if (node === null) {
			return new AVLTreeNode(value);
		}
		if (value < node.value) {
			node.left = this._insertNode(node.left as AVLTreeNode, value);
		} else if (value > node.value) {
			node.right = this._insertNode(node.right as AVLTreeNode, value);
		} else {
			return node;
		}
		node.height =
			1 + Math.max(this._height(node.left), this._height(node.right));
		const balance = this._getBalance(node);
		if (balance > 1) {
			if (value < (node.left as AVLTreeNode).value) {
				return this._rotateRight(node);
			} else {
				node.left = this._rotateLeft(node.left as AVLTreeNode);
				return this._rotateRight(node);
			}
		}
		if (balance < -1) {
			if (value > (node.right as AVLTreeNode).value) {
				return this._rotateLeft(node);
			} else {
				node.right = this._rotateRight(node.right as AVLTreeNode);
				return this._rotateLeft(node);
			}
		}
		return node;
	}
	private _height(node: TreeNode | null): number {
		if (node === null) {
			return 0;
		}
		return (node as AVLTreeNode).height;
	}
	private _getBalance(node: AVLTreeNode): number {
		return this._height(node.left) - this._height(node.right);
	}
	private _rotateLeft(z: AVLTreeNode): AVLTreeNode {
		const y = z.right as AVLTreeNode;
		const T2 = y.left;
		y.left = z;
		z.right = T2;
		z.height = 1 + Math.max(this._height(z.left), this._height(z.right));
		y.height = 1 + Math.max(this._height(y.left), this._height(y.right));
		return y;
	}
	private _rotateRight(y: AVLTreeNode): AVLTreeNode {
		const x = y.left as AVLTreeNode;
		const T2 = x.right;
		x.right = y;
		y.left = T2;
		y.height = 1 + Math.max(this._height(y.left), this._height(y.right));
		x.height = 1 + Math.max(this._height(x.left), this._height(x.right));
		return x;
	}
}
const avl = new AVLTree();
const arr8 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
// 向平衡二叉查找树中插入数组中的值
arr8.forEach((value) => {
	avl.insert(value);
});
// 测试用例
console.log(avl.search(10)); // 输出：true
console.log(avl.search(4)); // 输出：false
```