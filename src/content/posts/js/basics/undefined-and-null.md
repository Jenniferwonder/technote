---
topic:
  - Basics
type: D
tags:
  - JavaScript
Datereviewed: 
reviewed: 2
difficulty: 
comment: 
aliases:
  - Undefined and Null
title: Undefined and Null
DateStarted: 2023-07-28
DateModified: 2024-04-18
status:
  - Mature
linter-yaml-title-alias: Undefined and Null
category: Programming
---

# Undefined and Null

## The Null Type

- Logically, a null value is an empty object pointer, which is why typeof returns object
- Even though null and undefined are related, they have very different uses
- Any time an object is expected but is not available, null should be used in its place.
- This helps to keep the paradigm of null as an empty object pointer and further differentiates it from undefined.
- The null type is falsy

## The Undefined Type

- The Undefined type has only one value, which is the special value undefined
- explicitly initialized to be undefined. This is unnecessary
- to help formalize the difference between an empty object pointer (null) and an uninitialized variable
- The value undefined is falsy
