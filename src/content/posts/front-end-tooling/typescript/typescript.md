---
topic: 
type: 
category: Front-End Tooling
Datereviewed: 
reviewed: 
difficulty: 
comment: 
aliases:
  - TypeScript
title: TypeScript
tags:
  - TypeScript
DateStarted: 2022-11-29
DateModified: 2024-09-14
status: 
linter-yaml-title-alias: TypeScript
---

# TypeScript

## What is TS

### Handbook

- https://www.typescriptlang.org/docs/handbook/intro.html

### Statically-typed vs. Dynamically-typed

### Problem

- The only way in pure JavaScript to tell what `fn` does with a particular value is to call it and see what happens. This kind of behavior makes it hard to predict what the code will do before it runs, which means it’s harder to know what your code is going to do while you’re writing it.

### JS with type checking

- Can catch bugs/error at compile time
- can build a type-system that accepts JavaScript code but has types

### Code completion

### Refactoring

### Shorthand notations

### Features

- Explicit types
- Erased types
- Downleveling

### Drawback

- compilation
- more code

## Set up

### `npm i -g typescript`

### `tsc -v`

- to check TS compiler version

## Config

### `tsconfig.json`

- [TypeScript: Documentation - What is a tsconfig.json (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [TypeScript: TSConfig Reference - Docs on every TSConfig option (typescriptlang.org)](https://www.typescriptlang.org/tsconfig)

### Strictness

- `"strict": true`
- `"noImplicitAny":true`
  - to flag any implicit `any` as an error.
- `"strictNullChecks": true`

### `tsc --init`

- `"target": "ES2016"`
  - By default TypeScript targets ES3, an extremely old version of ECMAScript.
- `"module":"commonjs"`
- `"rootDir":"./src"`
- `"outDir":"./dist"`
- `"removeComments":true`
- `"noEmitOnError":true`
  - Emitting with errors
    - `tsc --noEmitOnError hello.ts`
      - If error is caught, no updates will be made to the emitted js file

### Debug TS

- `"sourceMap":true`
  - Produce `index.js.map`
    - for debugger to read
- VS Code Debugger > create a `lauch.json` file
  - Add `"preLauchTask": "tsc: build - tsconfig.json"`

## Run and compile

### `tsc`

- to compile all js files

## Types

### Built-in Types (Primitives)

- JS
  - number
  - string
  - boolean
  - null
  - undefined
  - object
- TS
  - any
  - unknown
  - never
  - enum
  - tuple

### Arrays

- `let numbers: number[]/ Array<number> = []`

### The `any` Type

### Type Annotations on Variables

- Type annotations will always go *after* the thing being typed.

### Union Types

### Type Aliases

### Interface

### Type Assertions

- `const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;`
- `const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");`

### Literal Types

### Nullable Types

- `strictNullChecks`

### Enums

- [TypeScript: Handbook - Enums (typescriptlang.org)](https://www.typescriptlang.org/docs/handbook/enums.html)
- Numeric enums
- String enums
- Heterogeneous enums
- Computed and constant members
- Union enums and enum member types
- Enums at runtime
- Enums at compile time

### Less Common Primitives

- `bigint`
- `symbol`

## Functions

### Basics

- TypeScript allows you to specify the types of both the input and output values of functions.
- Parameter Type Annotations
  - go after the parameter name
- Return type annotations
  - appear after the parameter list

### Function Type Expressions (Similar to arrow function)

### ❓Call Signatures

### ❓Construct Signatures

### Generic Functions

- ```ts
  function firstElement<Type>(arr: Type[]): Type | undefined {
  	return arr[0];
  }
  ```

### Inference

### Constraints

## Object Types

## Narrowing

### `typeof` type guards

### Truthiness narrowing

### Equality narrowing

### The `in` operator narrowing

### `instanceof` narrowing

### Assignments

### Control flow analysis

### Type predicates

- ```ts
  function isFish(pet: Fish | Bird): pet is Fish {
  	return (pet as Fish).swim !== undefined;
  }
  ```

- `parameterName is Type`

### Assertion Function

- https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions

### Discriminated unions

### `never` Type

## Type Manipuation

### Generics

### `Keyof` Type Operator

### `Typeof` Type Operator

### Indexed Access Types

### Conditional Types

### Mapped Types

### Template Literal Types

## Classes

## Modules

## Tuples

## Advanced Types

## Intersection Type

## Optional Chaining

## Questions

### [可以使用 TypeScript 写 React 应用吗？怎么操作？](https://github.com/haizlin/fe-interview/issues/899)
