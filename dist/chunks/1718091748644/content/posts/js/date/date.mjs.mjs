import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="date">Date<a class="anchor" href="#date"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="the-date-type">THE DATE TYPE<a class="anchor" href="#the-date-type"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>\n<p>stores dates as the number of milliseconds that have passed since midnight on January 1, 1970 UTC (Universal Time Coordinated-协调世界时)</p>\n</li>\n<li>\n<p>可以精确表示 1970 年 1 月 1 日之前及之后 285 616 年的日期</p>\n</li>\n<li>\n<p><code>new Date()</code></p>\n<ul>\n<li>\n<p>功能</p>\n<ul>\n<li>创建日期对象，Get Current date and time</li>\n</ul>\n</li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> now </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>\n<p>可接受的参数</p>\n<ul>\n<li>\n<p><code>Date.parse()  </code></p>\n</li>\n<li>\n<p>接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数/timestamp</p>\n<ul>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-2-x50-y85.png" alt=""></li>\n</ul>\n</li>\n<li>\n<p><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-2-x63-y48.png" alt=""></p>\n</li>\n<li>\n<p><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-3-x73-y540.png" alt=""></p>\n<ul>\n<li>convert a timestamp to a date</li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`timestamp`</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"></span></code></pre>\n</li>\n<li>\n<p><code>Date.UTC()  </code></p>\n<ul>\n<li>也返回日期的毫秒表示，但使用不同参数\n<ul>\n<li>the year, the zero-based month (January is 0, February is 1, and so on), the day of the month (1 through 31), and the hours (0 through 23), minutes, seconds, and milliseconds of the time.</li>\n<li>(year and month) are required</li>\n</ul>\n</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-3-x85-y286.png" alt=""></li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-3-x91-y74.png" alt=""></li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">2022</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">19</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">15</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">23</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">5</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#6A737D">//JS month starts from 0</span></span>\n<span class="line"><span style="color:#6A737D">//return \'2022 Nov 19 15:23:05\'</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>Get the number of day passed from the current date</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">Math.</span><span style="color:#B392F0">round</span><span style="color:#E1E4E8">(Math.</span><span style="color:#B392F0">abs</span><span style="color:#E1E4E8">(date </span><span style="color:#F97583">-</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">()) </span><span style="color:#F97583">/</span><span style="color:#E1E4E8"> (</span><span style="color:#79B8FF">1000</span><span style="color:#F97583"> *</span><span style="color:#79B8FF"> 60</span><span style="color:#F97583"> *</span><span style="color:#79B8FF"> 60</span><span style="color:#F97583"> *</span><span style="color:#79B8FF"> 24</span><span style="color:#E1E4E8">));</span></span>\n<span class="line"></span></code></pre>\n<h2 id="datenow">Date.now()<a class="anchor" href="#datenow"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>returns the millisecond representation of the date and time at which the method is executed</li>\n<li>get the current time stamp</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">Date.</span><span style="color:#B392F0">now</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#E1E4E8">currentTime </span><span style="color:#F97583">=</span><span style="color:#F97583"> new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#E1E4E8">currentTimeStamp </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> currentTime.</span><span style="color:#B392F0">getTime</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"></span></code></pre>\n<h2 id="inherited-methods">Inherited Methods<a class="anchor" href="#inherited-methods"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li><code>toLocaleString() </code></li>\n<li>— 2/1/2019 12:00:00 AM</li>\n<li><code>toString()  </code></li>\n<li>— Thu Feb 1 2019 00:00:00 GMT-0800 (Pacific Standard Time)</li>\n<li>are useful only for debugging purposes, not for display purposes.</li>\n<li><code>valueOf() </code></li>\n<li>doesn’t return a string at all because it is overridden to return the milliseconds representation of the date</li>\n<li>less-than and greater-than</li>\n<li>will work appropriately</li>\n</ul>\n<h2 id="datetime-component-methods">Date/Time Component Methods<a class="anchor" href="#datetime-component-methods"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Get elements of Date\n<ul>\n<li><code>getFullYear()  </code></li>\n<li><code>getMonth() </code></li>\n<li><code>getDate()  </code></li>\n<li><code>getDay() </code></li>\n<li><code>getHours() </code></li>\n<li><code>getMinutes() </code></li>\n<li><code>getSeconds() </code></li>\n<li><code>getMilliseconds() </code></li>\n<li><code>getTime() </code></li>\n</ul>\n</li>\n<li>convert a time stamp to a time</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">.</span><span style="color:#B392F0">getTime</span><span style="color:#E1E4E8">(</span><span style="color:#9ECBFF">`timeStamp/ mileseconds`</span><span style="color:#E1E4E8">)</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>Change elements of Date</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">.</span><span style="color:#B392F0">setFullYear</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">2040</span><span style="color:#E1E4E8">)</span></span>\n<span class="line"><span style="color:#E1E4E8">.set</span><span style="color:#F97583">...</span></span>\n<span class="line"></span></code></pre>\n<h2 id="date-formatting-methods">Date-Formatting Methods<a class="anchor" href="#date-formatting-methods"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Get a nice formatted Time string</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">.toISOString</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>\n<p>Internationalizing Dates</p>\n<ul>\n<li>Get the browser language</li>\n</ul>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">navigator.language;</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>\n<p>ISO Language Code Table:</p>\n<ul>\n<li><a href="http://www.lingoes.net">www.lingoes.net</a></li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">new</span><span style="color:#E1E4E8"> Intl.</span><span style="color:#B392F0">DateTimeFormat</span><span style="color:#E1E4E8">(en</span><span style="color:#F97583">-</span><span style="color:#79B8FF">US</span><span style="color:#E1E4E8">).</span><span style="color:#B392F0">format</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">());</span></span>\n<span class="line"><span style="color:#6A737D">// Options</span></span>\n<span class="line"><span style="color:#F97583">new</span><span style="color:#E1E4E8"> Intl.</span><span style="color:#B392F0">DateTimeFormat</span><span style="color:#E1E4E8">(en</span><span style="color:#F97583">-</span><span style="color:#79B8FF">US</span><span style="color:#E1E4E8">, Options).</span><span style="color:#B392F0">format</span><span style="color:#E1E4E8">(</span><span style="color:#F97583">new</span><span style="color:#B392F0"> Date</span><span style="color:#E1E4E8">());</span></span>\n<span class="line"><span style="color:#E1E4E8">Options </span><span style="color:#F97583">=</span><span style="color:#E1E4E8"> {</span></span>\n<span class="line"><span style="color:#E1E4E8">\thour: numeric,</span></span>\n<span class="line"><span style="color:#E1E4E8">\tminute: ,</span></span>\n<span class="line"><span style="color:#E1E4E8">\tday: ,</span></span>\n<span class="line"><span style="color:#E1E4E8">\tmonth: long</span><span style="color:#F97583">/</span><span style="color:#79B8FF"> 2</span><span style="color:#F97583">-</span><span style="color:#E1E4E8">digit,</span></span>\n<span class="line"><span style="color:#E1E4E8">\tyear: ,</span></span>\n<span class="line"><span style="color:#E1E4E8">\tweekday: long</span><span style="color:#F97583">/</span><span style="color:#E1E4E8"> short</span><span style="color:#F97583">/</span><span style="color:#E1E4E8"> narrow,</span></span>\n<span class="line"><span style="color:#E1E4E8">};</span></span>\n<span class="line"></span></code></pre>\n</li>\n<li>\n<p>varies widely from browser to browser; can’t be employed in a user interface for consistent display of a date.</p>\n</li>\n<li>\n<p><code>toTimeString() </code></p>\n<ul>\n<li>the date’s hours, minutes, seconds, and time zone</li>\n</ul>\n</li>\n<li>\n<p><code>toDateString() </code></p>\n<ul>\n<li>the date’s day of the week, month, day of the month, and year</li>\n</ul>\n</li>\n<li>\n<p><code>toLocaleTimeString() </code></p>\n<ul>\n<li>the date’s hours, minutes, and seconds</li>\n</ul>\n</li>\n<li>\n<p><code>toLocaleDateString()  </code></p>\n</li>\n<li>\n<p>date’s day of the week, month, day of the month, and year in an implementation- and locale-specific format.</p>\n</li>\n<li>\n<p><code>toUTCString()  </code></p>\n</li>\n<li>\n<p>the complete UTC date</p>\n</li>\n</ul>',frontmatter={Datereviewed:null,difficulty:null,comment:null,aliases:["Date"],draft:!1,title:"Date",topic:["Date"],type:"D",DateStarted:"2022-12-01T00:00:00.000Z",DateModified:"2024-06-11T00:00:00.000Z",status:["ToDistill"],reviewed:2,category:"Programming",tags:["JavaScript"],"linter-yaml-title-alias":"Date",minutes:2,words:412},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/date/date.md",url=void 0;function rawContent(){return"\n# Date\n\n## THE DATE TYPE\n\n- stores dates as the number of milliseconds that have passed since midnight on January 1, 1970 UTC (Universal Time Coordinated-协调世界时)\n- 可以精确表示 1970 年 1 月 1 日之前及之后 285 616 年的日期\n- `new Date()`\n\n  - 功能\n\n    - 创建日期对象，Get Current date and time\n\n```js\nlet now = new Date();\n```\n\n- 可接受的参数\n\n  - `Date.parse()  `\n\n  - 接收一个表示日期的字符串参数，尝试将这个字符串转换为表示该日期的毫秒数/timestamp\n    - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-2-x50-y85.png)\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-2-x63-y48.png)\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-3-x73-y540.png)\n\n    - convert a timestamp to a date\n\n  ```js\n  new Date(`timestamp`);\n  ```\n\n- `Date.UTC()  `\n\n  - 也返回日期的毫秒表示，但使用不同参数\n    - the year, the zero-based month (January is 0, February is 1, and so on), the day of the month (1 through 31), and the hours (0 through 23), minutes, seconds, and milliseconds of the time.\n    - (year and month) are required\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-3-x85-y286.png)\n  - ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-3-x91-y74.png)\n\n```js\nnew Date(2022, 10, 19, 15, 23, 5);\n//JS month starts from 0\n//return '2022 Nov 19 15:23:05'\n```\n\n- Get the number of day passed from the current date\n\n```js\nMath.round(Math.abs(date - new Date()) / (1000 * 60 * 60 * 24));\n```\n\n## Date.now()\n\n- returns the millisecond representation of the date and time at which the method is executed\n- get the current time stamp\n\n```js\nDate.now();\ncurrentTime = new Date();\ncurrentTimeStamp = currentTime.getTime();\n```\n\n## Inherited Methods\n\n- `toLocaleString() `\n- — 2/1/2019 12:00:00 AM\n- `toString()  `\n- — Thu Feb 1 2019 00:00:00 GMT-0800 (Pacific Standard Time)\n- are useful only for debugging purposes, not for display purposes.\n- `valueOf() `\n- doesn’t return a string at all because it is overridden to return the milliseconds representation of the date\n- less-than and greater-than\n- will work appropriately\n\n## Date/Time Component Methods\n\n- Get elements of Date\n  - `getFullYear()  `\n  - `getMonth() `\n  - `getDate()  `\n  - `getDay() `\n  - `getHours() `\n  - `getMinutes() `\n  - `getSeconds() `\n  - `getMilliseconds() `\n  - `getTime() `\n- convert a time stamp to a time\n\n```js\n.getTime(`timeStamp/ mileseconds`)\n```\n\n- Change elements of Date\n\n```js\n.setFullYear(2040)\n.set...\n```\n\n## Date-Formatting Methods\n\n- Get a nice formatted Time string\n\n```js\n.toISOString\n```\n\n- Internationalizing Dates\n\n  - Get the browser language\n\n```js\nnavigator.language;\n```\n\n- ISO Language Code Table:\n\n  - www.lingoes.net\n\n  ```js\n  new Intl.DateTimeFormat(en-US).format(new Date());\n  // Options\n  new Intl.DateTimeFormat(en-US, Options).format(new Date());\n  Options = {\n  \thour: numeric,\n  \tminute: ,\n  \tday: ,\n  \tmonth: long/ 2-digit,\n  \tyear: ,\n  \tweekday: long/ short/ narrow,\n  };\n  ```\n\n- varies widely from browser to browser; can’t be employed in a user interface for consistent display of a date.\n- `toTimeString() `\n  - the date's hours, minutes, seconds, and time zone\n- `toDateString() `\n  - the date’s day of the week, month, day of the month, and year\n- `toLocaleTimeString() `\n  - the date's hours, minutes, and seconds\n- `toLocaleDateString()  `\n- date's day of the week, month, day of the month, and year in an implementation- and locale-specific format.\n- `toUTCString()  `\n- the complete UTC date\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"date",text:"Date#"},{depth:2,slug:"the-date-type",text:"THE DATE TYPE#"},{depth:2,slug:"datenow",text:"Date.now()#"},{depth:2,slug:"inherited-methods",text:"Inherited Methods#"},{depth:2,slug:"datetime-component-methods",text:"Date/Time Component Methods#"},{depth:2,slug:"date-formatting-methods",text:"Date-Formatting Methods#"}]}const Content=createComponent(((n,e,s)=>{const{layout:a,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};