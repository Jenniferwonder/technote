---
category: Web Design
aliases:
  - Form Style
draft: false
title: Form Style
type: D
tags:
  - CSS
DateStarted: 2024-01-09
DateModified: 2024-04-19
status: 
topic:
  - Layout
difficulty: Hard
reviewed: 1
Datereviewed: 2024-01-19T00:00:00.000+08:00
comment: ⭐⭐⭐
linter-yaml-title-alias: Form Style
---

# Form Style

## Reference: [Web Forms Styling](https://developer.mozilla.org/en-US/docs/Learn/Forms)

## HTML Form Tags

### 💡Reminder

- Form elements must have labels: Element has no title attribute Element has no placeholder

### ✅`<label>`

- `<label for = "id-value"> </label>`

### ✅`<form>`

- `action = "/submit"`
  - Specifies that when the form is submitted, the data should be sent to the server-side script located at the "/submit" URL
  - if not specified, data will be submitted to the same URL as the page containing the form
- `method = "post"`
  - Indicates that the form data should be submitted using the HTTP POST method
  - determines how the form data is sent to the server

### `<Input type="">`

- ✅`text`
  - `name = ""`
    - the name of the name-value pair
    - used to access the form data
    - value often equals to the `id` value
    - using JS to access form data (client-side validation)
  - `id = ""`
  - `placeholder = ""`
  - `aria-label = ""`
    - for input whose label needs to be hidden
  - `required`
- ✅`submit`
  - `value = ""`
    - the text that will be displayed on the submit button
- ✅`password`
- ✅`checkbox`
- ✅`radio`
- `email`
- `search`
- `number`
- `range`
  - `min = ""`
  - `max = ""`
- `tel`
- `url`
- `file`
- `hidden`
- `date`
- `datetime-local`
- `time`
- `week`
- `month`
- `color`

### ✅`<select>`

- `name`
- `id`
- `title`
  - less common for labeling form controls, it can also serve as an accessible name
- `aria-labelledby = "label-id"`
- 🏷️Used with
  - `<label for = "id-value" id="">`
  - `<optgroup lable = "">`
    - `<option value = ""> Value </option>`
    - To group different options

### ✅`<textarea>`

- `rows=""`
- `cols=""`

### `<fieldset></fieldset>`

- `<legend></legend>`

## Form Base Style

### 📌[Base Styles](Base-Styles)

## Attribute selector for form elements

### `input[type="submit"]` { }

### 📌[Attribute Selectors](Attribute-Selectors)
