---
Title: Object Property & Value
Topic:
  - Objects
Type: D
tags:
  - JavaScript
DateStarted: 2024-01-29
DateModified: 2024-02-02
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


***
Basic
### Access Object value
Back:
- dot notation
- bracket notation: `[' ']`
	- can be used when property name is *invalid* to be accessed by dot
	- can be used when property name is *dynamically* changing
📌: JS::JS-Objects
🏷️: JS-Objects
<!--SR:!2024-02-06,4,270-->
<!--ID: 1706850359403-->
****

***
Basic
### Access Object Properties (获取属性)
Back:
#### 获取所有可枚举的实例属性
- `const keys = Object.keys(obj); // return an array of keys`
#### 获取所有实例属性，无论是否可枚举
- `Object.getOwnPropertyNames()`
#### 获取所有 Symbol 类型属性
- `Object.getOwnPropertySymbols()`
<!--ID: 1706850359414-->
****

***
Basic
### 属性枚举顺序
Back:
- 不确定的
	- for-in 循环和 `Object.keys()`
- 确定性的
	- 先以升序枚举数值键，然后以插入顺序枚举字符串和符号键。在对象字面量中定义的键以它们逗号分隔的顺序插入
	- `Object.getOwnPropertyNames()`
	- `Object.getOwnPropertySymbols()`
	- `Object.assign()`
<!--SR:!2024-02-05,3,250-->
<!--ID: 1706850359423-->
****

***
Basic
## Identify Property Existence (判断属性是否存在)
Back:
#### Identify whether a Property is in an Object Instance or Prototype 
- `("name" in person1); // true`
#### Identify whether a Property is in an Object Instance
- `hasOwnProperty(propertyName)`
#### Identify whether a Property is in an Object Prototype
- `hasPrototypeProperty(person, "name"); // true`
<!--ID: 1706850359433-->
****

***
Basic
### Property Types & Descriptors 属性类型与描述符
Back:
#### 属性类型
- 数据属性-Data Properties
- 访问器属性-Accessor Properties
#### 数据属性描述符
- Configurable
	- 表示属性是否可以通过 delete 删除并重新定义
	- 是否可以修改它的特性
	- 是否可以把它改为访问器属性
	- 默认 true
- Enumerable
	- 属性是否可以通过 for-in 循环返回
	- 默认 true
	- Identify whether a Property is Enumerable
		- `propertyIsEnumerable(propertyName)`
- Writable
- Value
#### 访问器属性描述符
- Configurable
- Enumerable
- Get (获取函数，非必需)
	- 读取访问器属性时，会调用
- Set (设置函数，非必需)
	- 写入访问器属性时，会调用
	- 只有一个设置函数的属性 是不能读取的
		- 非严格模式下读取会返回 undefined
		- 严格模式下会抛出错误
  - 使用场景
    - 设置一个属性值会导致一些其他变化发生
    - ![[Paste image 1692022911410image.png]]
<!--ID: 1706850359442-->
****

***
Basic
### 定义属性描述符
- `Object.defineProperty()`
	- ![[1692022103611.png]]
- `Object.defineProperties()`
	- 可以通过多个描述符/一个描述符对象一次性定义多个属性
	- 接收两个参数
		- 要为之添加或修改属性的对象
		- 另一个描述符对象
<!--ID: 1706850359450-->
****

***
Basic
### 读取属性描述符
- `Object.getOwnPropertyDescriptor()`
	- 取得指定属性的属性描述符
	- 两个参数
		- 属性所在的对象
		- 要取得其描述符的属性名
	- 返回值
		- 指定属性的描述符对象
- `Object.getOwnPropertyDescriptors()` (ECMAScript 2017 新增)
	- 取得所有属性的描述符对象
	- ![[1692023527551.png]] 
<!--ID: 1706850359459-->
****





