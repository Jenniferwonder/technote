import{createComponent,renderTemplate,maybeRenderHead,unescapeHTML}from"../../../../astro.mjs";import"kleur/colors";import"clsx";import"html-escaper";import"cssesc";const html='<h1 id="number">Number<a class="anchor" href="#number"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h1>\n<h2 id="number-类型">Number 类型<a class="anchor" href="#number-类型"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>uses the IEEE–754 format to represent both integers 整数 and floating-point values 浮点值 (also called double–precision values 双精度值 in some languages)</li>\n</ul>\n<h2 id="number-literal-formats">Number Literal Formats<a class="anchor" href="#number-literal-formats"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Integers</li>\n<li>octal literal</li>\n<li>the first digit must be a zero (0) followed by a sequence of octal digits (numbers 0 through 7).</li>\n<li>Octal literals are invalid when running in strict mode</li>\n<li>hexadecimal literal</li>\n<li>must make the first two characters 0x (case insensitive), followed by any number of hexadecimal digits (0 through 9, and A through F)</li>\n<li>Numbers created using octal or hexadecimal format are treated as decimal numbers in all arithmetic operations.</li>\n</ul>\n<h2 id="floating-point-values">Floating-Point Values<a class="anchor" href="#floating-point-values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>To define a floating-point value, you must include a decimal point and at least one number after the decimal point.</li>\n<li>ECMAScript always looks for ways to convert values into integers.</li>\n<li>e-notation 科学计数法</li>\n<li>used to indicate a number that should be multiplied by 10 raised to a given power</li>\n<li><code>let floatNum = 3.125e7; // equal to 31250000</code></li>\n<li>3e–17</li>\n<li>0.00000000000000003</li>\n<li>ECMAScript converts any floating-point value with at least six zeros after the decimal point into e-notation</li>\n<li>small rounding errors</li>\n</ul>\n<h2 id="range-of-values">Range of Values<a class="anchor" href="#range-of-values"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Number 属性\n<ul>\n<li>Number.MIN_VALUE</li>\n<li>5 e–324</li>\n<li>Number.MAX_VALUE</li>\n<li>1.7976931348623157 e+308</li>\n<li>Number.POSITIVE _ INFINITY</li>\n<li>Infinity (positive infinity)</li>\n<li>Infinity: 23 / 0</li>\n<li>any positive number that can’t be represented</li>\n<li>If a calculation returns either positive or negative Infinity, that value cannot be used in any further calculations</li>\n<li>Number.NEGATIVE _ INFINITY</li>\n<li>–Infinity (negative infinity)</li>\n<li>Any negative number that can’t be represented</li>\n</ul>\n</li>\n<li>BigInt(ES2020)\n<ul>\n<li>The biggest number: <code>2 ** 53 - 1</code></li>\n<li>Only 53 bits are used in JS to store the digits; the rest are used to store decimals</li>\n<li>Numbers are represented as 64 bits</li>\n</ul>\n</li>\n</ul>\n<h2 id="nan">NaN<a class="anchor" href="#nan"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>not a number</li>\n<li>any operation involving NaN always returns NaN</li>\n<li>NaN is not equal to any value, including NaN</li>\n<li>isNaN() function</li>\n<li>to determine if the value is “not a number.”</li>\n<li>Any value that cannot be converted into a number causes the function to return true.</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690789727897image.png" alt=""></li>\n</ul>\n<h2 id="number-conversions">Number Conversions<a class="anchor" href="#number-conversions"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>Number() function 转型函数</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690790014137image.png" alt=""></li>\n<li>unary plus operator</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">+</span><span style="color:#E1E4E8">;</span></span>\n<span class="line"><span style="color:#6A737D">//convert a string to number</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>works the same as the Number () function.</li>\n</ul>\n<h2 id="number-对象实例方法">Number 对象实例方法<a class="anchor" href="#number-对象实例方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>toString()</li>\n<li>参数\n<ul>\n<li>可选地接收一个表示基数的参数</li>\n</ul>\n</li>\n<li>返回值\n<ul>\n<li>并返回相应基数形式的数值字符串</li>\n</ul>\n</li>\n<li>toFixed()</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x68-y469.png" alt=""></li>\n<li>can represent numbers with 0 through 20 decimal places</li>\n<li>toExponential()</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x66-y196.png" alt=""></li>\n<li>toPrecision()</li>\n<li><img src="https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x64-y67.png" alt=""></li>\n<li>can represent numbers with 1 through 21 decimal places</li>\n</ul>\n<h2 id="number-构造函数方法">Number 构造函数方法<a class="anchor" href="#number-构造函数方法"><span class="anchor-icon" data-pagefind-ignore="">#</span></a></h2>\n<ul>\n<li>\n<p>parseInt()</p>\n</li>\n<li>\n<p>参数</p>\n<ul>\n<li>If this first character isn’t a number, the minus sign, or the plus sign, parseInt() always returns NaN</li>\n<li>parseInt() provides a second argument: the radix 基数 (number of digits).</li>\n</ul>\n</li>\n<li>\n<p>返回值</p>\n<ul>\n<li>默认为十进制数值</li>\n<li>it’s advisable to always include a radix to avoid errors.</li>\n</ul>\n</li>\n<li>\n<p>用法</p>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#F97583">let</span><span style="color:#E1E4E8"> num </span><span style="color:#F97583">=</span><span style="color:#B392F0"> parseInt</span><span style="color:#E1E4E8">(</span><span style="color:#79B8FF">0xAF</span><span style="color:#E1E4E8">, </span><span style="color:#79B8FF">16</span><span style="color:#E1E4E8">); </span><span style="color:#6A737D">// 175</span></span>\n<span class="line"><span style="color:#E1E4E8">Number.</span><span style="color:#B392F0">parseInt</span><span style="color:#E1E4E8">(30px); </span><span style="color:#6A737D">//return 30</span></span>\n<span class="line"><span style="color:#E1E4E8">Number.</span><span style="color:#B392F0">parseInt</span><span style="color:#E1E4E8">(e23); </span><span style="color:#6A737D">//return NaN</span></span>\n<span class="line"><span style="color:#E1E4E8">Number.</span><span style="color:#B392F0">parseInt</span><span style="color:#E1E4E8">(30px, </span><span style="color:#79B8FF">10</span><span style="color:#E1E4E8">);</span></span>\n<span class="line"><span style="color:#6A737D">//return 30</span></span>\n<span class="line"></span></code></pre>\n</li>\n<li>\n<p>parseFloat()</p>\n</li>\n<li>\n<p>a decimal point is valid the first time it appears, but a second decimal point is invalid and the rest of the string is ignored</p>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">Number.</span><span style="color:#B392F0">parseFloat</span><span style="color:#E1E4E8">(2.5rem);</span></span>\n<span class="line"><span style="color:#6A737D">//return 2.5</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>\n<p>isFinite() function</p>\n</li>\n<li>\n<p>To determine if a value is finite (that is, it occurs between the minimum and the maximum)</p>\n</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">Number.</span><span style="color:#B392F0">isFinite</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"><span style="color:#B392F0">isFinite</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"></span></code></pre>\n<ul>\n<li>\n<p><code>Number.isInteger()</code></p>\n<ul>\n<li>Check if a value is Interger</li>\n</ul>\n<pre class="astro-code github-dark" style="background-color:#24292e;color:#e1e4e8; overflow-x: auto;" tabindex="0"><code><span class="line"><span style="color:#E1E4E8">Number.</span><span style="color:#B392F0">isInteger</span><span style="color:#E1E4E8">();</span></span>\n<span class="line"></span></code></pre>\n</li>\n<li>\n<p>Number.isSafeInteger()</p>\n</li>\n<li>\n<p>Number.MIN_SAFE_INTEGER, or -2^53 + 1</p>\n</li>\n<li>\n<p>Number.MAX_SAFE_INTEGER, or 2^53 - 1</p>\n</li>\n</ul>',frontmatter={topic:["Number"],type:"D",tags:["JavaScript"],difficulty:null,comment:null,title:"Number",DateStarted:"2022-12-01T00:00:00.000Z",DateModified:"2024-04-18T00:00:00.000Z",Datereviewed:"2024-04-16T00:00:00.000Z",reviewed:null,status:["Mature"],aliases:["Number"],"linter-yaml-title-alias":"Number",category:"Programming",minutes:3,words:500},file="E:/SynologyDrive/Codespace/blog-site/mynote/my-fuwari-blog/src/content/posts/js/basics/number.md",url=void 0;function rawContent(){return"\n# Number\n\n## Number 类型\n\n- uses the IEEE–754 format to represent both integers 整数 and floating-point values 浮点值 (also called double–precision values 双精度值 in some languages)\n\n## Number Literal Formats\n- Integers\n- octal literal\n- the first digit must be a zero (0) followed by a sequence of octal digits (numbers 0 through 7).\n- Octal literals are invalid when running in strict mode\n- hexadecimal literal\n- must make the first two characters 0x (case insensitive), followed by any number of hexadecimal digits (0 through 9, and A through F)\n- Numbers created using octal or hexadecimal format are treated as decimal numbers in all arithmetic operations.\n\n## Floating-Point Values\n\n- To define a floating-point value, you must include a decimal point and at least one number after the decimal point.\n- ECMAScript always looks for ways to convert values into integers.\n- e-notation 科学计数法\n- used to indicate a number that should be multiplied by 10 raised to a given power\n- `let floatNum = 3.125e7; // equal to 31250000`\n- 3e–17\n- 0.00000000000000003\n- ECMAScript converts any floating-point value with at least six zeros after the decimal point into e-notation\n- small rounding errors\n\n## Range of Values\n\n- Number 属性\n  - Number.MIN_VALUE\n  - 5 e–324\n  - Number.MAX_VALUE\n  - 1.7976931348623157 e+308\n  - Number.POSITIVE \\_ INFINITY\n  - Infinity (positive infinity)\n  - Infinity: 23 / 0\n  - any positive number that can’t be represented\n  - If a calculation returns either positive or negative Infinity, that value cannot be used in any further calculations\n  - Number.NEGATIVE \\_ INFINITY\n  - –Infinity (negative infinity)\n  - Any negative number that can’t be represented\n- BigInt(ES2020)\n  - The biggest number: `2 ** 53 - 1`\n  - Only 53 bits are used in JS to store the digits; the rest are used to store decimals\n  - Numbers are represented as 64 bits\n\n## NaN\n\n- not a number\n- any operation involving NaN always returns NaN\n- NaN is not equal to any value, including NaN\n- isNaN() function\n- to determine if the value is “not a number.”\n- Any value that cannot be converted into a number causes the function to return true.\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690789727897image.png)\n\n## Number Conversions\n\n- Number() function 转型函数\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/paste-image-1690790014137image.png)\n- unary plus operator\n\n```js\n+;\n//convert a string to number\n```\n\n- works the same as the Number () function.\n\n## Number 对象实例方法\n\n- toString()\n- 参数\n  - 可选地接收一个表示基数的参数\n- 返回值\n  - 并返回相应基数形式的数值字符串\n- toFixed()\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x68-y469.png)\n- can represent numbers with 0 through 20 decimal places\n- toExponential()\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x66-y196.png)\n- toPrecision()\n- ![](https://cdn.jsdelivr.net/gh/jenniferwonder/bimg/programming/C05BasicReferenceTypes-18-x64-y67.png)\n- can represent numbers with 1 through 21 decimal places\n\n## Number 构造函数方法\n\n- parseInt()\n\n- 参数\n  - If this first character isn’t a number, the minus sign, or the plus sign, parseInt() always returns NaN\n  - parseInt() provides a second argument: the radix 基数 (number of digits).\n- 返回值\n  - 默认为十进制数值\n  - it’s advisable to always include a radix to avoid errors.\n- 用法\n\n  ```js\n  let num = parseInt(0xAF, 16); // 175\n  Number.parseInt(30px); //return 30\n  Number.parseInt(e23); //return NaN\n  Number.parseInt(30px, 10);\n  //return 30\n  ```\n\n- parseFloat()\n\n- a decimal point is valid the first time it appears, but a second decimal point is invalid and the rest of the string is ignored\n\n```js\nNumber.parseFloat(2.5rem);\n//return 2.5\n```\n\n- isFinite() function\n\n- To determine if a value is finite (that is, it occurs between the minimum and the maximum)\n\n```js\nNumber.isFinite();\nisFinite();\n```\n\n- `Number.isInteger()`\n\n  - Check if a value is Interger\n\n  ```js\n  Number.isInteger();\n  ```\n\n- Number.isSafeInteger()\n- Number.MIN_SAFE_INTEGER, or -2^53 + 1\n- Number.MAX_SAFE_INTEGER, or 2^53 - 1\n"}function compiledContent(){return html}function getHeadings(){return[{depth:1,slug:"number",text:"Number#"},{depth:2,slug:"number-类型",text:"Number 类型#"},{depth:2,slug:"number-literal-formats",text:"Number Literal Formats#"},{depth:2,slug:"floating-point-values",text:"Floating-Point Values#"},{depth:2,slug:"range-of-values",text:"Range of Values#"},{depth:2,slug:"nan",text:"NaN#"},{depth:2,slug:"number-conversions",text:"Number Conversions#"},{depth:2,slug:"number-对象实例方法",text:"Number 对象实例方法#"},{depth:2,slug:"number-构造函数方法",text:"Number 构造函数方法#"}]}const Content=createComponent(((n,e,a)=>{const{layout:i,...t}=frontmatter;return t.file=file,t.url=url,renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`}));export{Content,compiledContent,Content as default,file,frontmatter,getHeadings,rawContent,url};