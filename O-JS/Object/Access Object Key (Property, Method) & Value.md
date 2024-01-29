---
Title: Object Key (Property, Method) & Value
Topic:
  - Objects
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-01-29
DateDo: 
DateDone: 
DateDue: 
DateReviewed: 2024-01-29
Reviewed: 1
Difficulty: Good
status:
  - ToUseMore
Comment:
---
## What is Object in JS?
?
- A collection of Key-Value Pairs
- 包含*内置对象类型*与*自定义对象类型*
- Enhanced Object Property Syntax
	- 属性值简写-Property Value Shorthand
	  - ![[1692024641437.png]] 
	- 简写方法名
	- 可计算属性-Computed Property Keys

## Access Object value?
?
- dot notation
- bracket notation: `[' ']`
	- can be used when property name is *invalid* to be accessed by dot
	- can be used when property name is *dynamically* changing
- [[Object Destructuring]]

## Object Properties 
### Access Object properties?
?
- `const keys = Object.keys(obj); // return an array of keys`

### Identify whether a Property is in an Object
?
- `hasOwnProperty(propertyName)`

### Identify whether a Property is Enumerable
?
- `propertyIsEnumerable(propertyName)`

### Loop over Object properties?
?
```js
for (let key in circle) {
console.log(key, circle[key]); // return key and value
}
```

### Define Properties Descriptors 定义多个属性
?
- `Object.defineProperty()`
-  ![[1692022103611.png]]
- 可以通过多个描述符/一个描述符对象一次性定义多个属性
- 接收两个参数
- 要为之添加或修改属性的对象
- 另一个描述符对象

### Read Property Descriptors 读取属性描述符
?
- `Object.getOwnPropertyDescriptor()`
  - 取得指定属性的属性描述符
  - 两个参数
    - 属性所在的对象
    - 要取得其描述符的属性名
  - 返回值
    - 一个描述符对象
- `Object.getOwnPropertyDescriptors()` (ECMAScript 2017 新增)
-  ![[1692023527551.png]] 

### ❓Types of Properties and Descriptors 属性的类型
- 数据属性-Data Properties
    - Configurable
      - 表示属性是否可以通过 delete 删除并重新定义
      - 是否可以修改它的特性
      - 是否可以把它改为访问器属性
      - 默认
        - true
    - Enumerable
      - 属性是否可以通过 for-in 循环返回
      - 默认
        - true
- 访问器属性-Accessor Properties
    - Configurable
    - Enumerable
    - Get (非必需)
      - 读取访问器属性时，会调用
      - 写入访问器属性时，会调用
      - 决定对数据做出什么修改
      - 只有一个设置函数的属性 是不能读取的
        - 非严格模式下读取会返回 undefined
        - 严格模式下会抛出错误
  - 使用场景
    - 设置一个属性值会导致一些其他变化发生
    - ![[Paste image 1692022911410image.png]]