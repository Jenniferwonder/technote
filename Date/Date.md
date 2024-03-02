---
Title: Date
Type: D
DateStarted: 2022-12-01
DateModified: 2023-11-28
status:
  - ToDistill
DateDo: 2023-07-18T00:00:00.000+08:00
DateDone: 2023-07-31T00:00:00.000+08:00
Reviewed: 2
Topic:
  - Date
---

# Date

##  THE DATE TYPE  

-  stores dates as the number of milliseconds that have passed since midnight on January 1, 1970 UTC (Universal Time Coordinated-协调世界时)  
  - 可以精确表示 1970 年 1 月 1 日之前及之后 285 616 年的日期
- `new Date()`

  - 功能

    - 创建日期对象，Get Current date and time

```js
	let now = new Date();
```

  - 可接受的参数

    -  `Date.parse()  `

      - 接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数/timestamp
        - ![](z-Assets/C05BasicReferenceTypes-2-x50-y85.png)
      - ![](z-Assets/C05BasicReferenceTypes-2-x63-y48.png)
      - ![](z-Assets/C05BasicReferenceTypes-3-x73-y540.png)

        - convert a timestamp to a date

	```js
		new Date(`timestamp`)
	```

-  `Date.UTC()  `

      - 也返回日期的毫秒表示，但使用不同参数
        -  the year, the zero-based month (January is 0, February is 1, and so on), the day of the month (1 through 31), and the hours (0 through 23), minutes, seconds, and milliseconds of the time. 
        -  (year and month) are required  
      - ![](z-Assets/C05BasicReferenceTypes-3-x85-y286.png)
      - ![](z-Assets/C05BasicReferenceTypes-3-x91-y74.png)

```js
new Date(2022, 10, 19, 15, 23, 5)
//JS month starts from 0
//return '2022 Nov 19 15:23:05'
```

  - Get the number of day passed from the current date

```js
Math.round(Math.abs(date - new Date()) / (1000 * 60 * 60 * 24));
```

##  Date.now()  

- returns the millisecond representation of the date and time at which the method is executed  
- get the current time stamp

```JS
Date.now()
currentTime = new Date()
currentTimeStamp = currentTime.getTime()
```

## Inherited Methods 

-  `toLocaleString() `
  -  — 2/1/2019 12:00:00 AM 
-  `toString()  `
  -  — Thu Feb 1 2019 00:00:00 GMT-0800 (Pacific Standard Time)  
  -  are useful only for debugging purposes, not for display purposes. 
-  `valueOf() `
  -  doesn’t return a string at all because it is overridden to return the milliseconds representation of the date 
-  less-than and greater-than  
  -  will work appropriately 

## Date/Time Component Methods 

- Get elements of Date
  -  `getFullYear()  `
  -  `getMonth() `
  -  `getDate()  `
  -  `getDay() `
  -  `getHours() `
  -  `getMinutes() `
  -  `getSeconds() `
  -  `getMilliseconds() `
  -  `getTime() `
- convert a time stamp to a time

```JS
.getTime(`timeStamp/ mileseconds`)
```

- Change elements of Date

```js
.setFullYear(2040)
.set...
```

## Date-Formatting Methods 

- Get a nice formatted Time string

```js
.toISOString
```

- Internationalizing Dates

  - Get the browser language

```js
navigator.language;
```

  - ISO Language Code Table:

    - www.lingoes.net
	```js
	new Intl.DateTimeFormat("en-US").format(new Date());
	// Options
	new Intl.DateTimeFormat("en-US", Options).format(new Date());
	Options = {
		hour: "numeric",
		minute: "",
		day: "",
		month: "long/ 2-digit",
		year: "",
		weekday: "long/ short/ narrow",
	};
	```

- varies widely from browser to browser; can’t be employed in a user interface for consistent display of a date. 
-  `toTimeString() `
	-  the date's hours, minutes, seconds, and time zone 
-  `toDateString() `
	-  the date’s day of the week, month, day of the month, and year 
-  `toLocaleTimeString() `
	-  the date's hours, minutes, and seconds  
-  `toLocaleDateString()  `
-  date's day of the week, month, day of the month, and year in an implementation- and locale-specific format.  
-  `toUTCString()  `
-  the complete UTC date 
