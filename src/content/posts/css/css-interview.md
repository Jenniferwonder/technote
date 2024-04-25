---
title: css-interview
topic: 
type: 
tags:
  - CSS
category: Web Design
Datereviewed: 2024-04-25
reviewed: 1
difficulty: 
status: 
comment: 
draft: true
DateStarted: 2024-04-25
DateModified: 2024-04-25
---
### CSS 属性是否区分大小写？

CSS 属性名和属性值在大多数情况下是不区分大小写的，但也有少数例外情况，如 font-variant 和 text-decoration 等属性与其值中的某些字母是区分大小写的。建议在编写 CSS 代码时还是严格遵守大小写以避免不必要的错误。

### CSS 的盒模型?

CSS 盒模型包括标准盒模型和 IE 盒模型。其中标准盒模型（box-sizing: content-box;）的宽度和高度只包括内容的宽度和高度；而 IE 盒模型（box-sizing: border-box;）的宽度和高度则包括了内容、内边距和边框的宽度和高度。这两种盒模型的主要区别在于计算元素宽度和高度时所涉及的内容不同。

### link 与@import 的区别

`<link>`和`@import`都可以用来引入外部资源，如 CSS 文件，但是它们之间有以下区别：

1. 引入方式：`<link>`是 HTML 标签，`@import`是 CSS 提供的一种方式。
2. 加载顺序和性能：`<link>`在页面载入时同时加载，`@import`在页面载入完成后加载。
3. 定义方式：`<link>`可以在文档头部定义，也可以在文档中任何地方定义，`@import`只能在样式表中定义。
4. 加载方式：`<link>`可以同时加载多个外部样式表，而`@import`必须一条一条地执行。
5. 附加功能：`link`标签支持添加一些额外属性，如`media`、`title`等，用于指定媒体类型或提供样式表的描述。`@import`不支持这些附加功能。
6. 可控性：`<link>`支持动态插入，而`@import`不支持。

### 元素垂直居中的方式有哪些？

1. 使用 flexbox 布局，通过设置父元素的 align-items 属性为 center 实现元素垂直居中。
2. 使用 grid 布局，可以通过设置网格项的 align-self 属性为 center 实现元素垂直居中。
3. 使用 position 和 transform 属性，设置元素的 top 和 left 属性为 50%，并使用 transform 属性的 translate()函数将元素向上和左移动自身高度和宽度的一半，就可以实现元素垂直居中。
4. 使用表格布局，将元素放入一个单元格中，并设置单元格的 vertical-align 属性为 middle 实现元素垂直居中。

### 文本垂直居中的方式有哪些？

1. 使用行高（line-height）属性，将行高设置为等于容器的高度减去文本行高，再将文本的行高设置为容器高度。
2. 使用弹性盒子（flexbox）布局，在容器上设置 display:flex 和 align-items:center 属性。
3. 使用网格布局（grid）将文本放置在居中单元格中。
4. 使用绝对定位（absolute positioning）属性，并将文本的 top 和 bottom 都设置为 0，再设置 margin:auto 来水平居中

### CSS 选择器的优先级是如何计算的？
1. !important 优先级最高
2. 标签内样式：即在 HTML 标签内部使用 style 属性设置的样式，优先级第二高。
3. ID 选择器：以 # 符号开头，指定某个元素的唯一标识符，比如 #header，优先级第三高。
4. 类选择器、属性选择器和伪类选择器：包括 .class、[attr]、:hover 等，优先级第四高。
5. 元素选择器和伪元素选择器：包括 div、span、:before 等，优先级最低。

在比较优先级时，遵循“从左到右，从高到低”的原则，也就是选择器中每增加一项就会降低一级别的优先级。如果两个选择器的优先级相同，则后面的选择器优先级更高。

### 请阐述块格式化上下文（Block Formatting Context）、工作原理以及形成条件？

块格式化上下文（Block Formatting Context，BFC）是一个独立的渲染区域，在这个区域内，元素的布局和外部元素互不影响。BFC 是 Web 页面布局中的一种重要机制，主要用于控制块级元素的布局及其内部元素的排列方式。

BFC 的工作原理：

1. 内部的块级盒子会在垂直方向一个接一个放置。
2. 块级盒子的垂直间距（margin）会发生折叠。相邻的块级盒子的上下外边距会取最大值，而非相加。
3. BFC 的区域不会与浮动盒子重叠。在计算布局时，BFC 会考虑浮动元素的占用空间，从而避免与浮动元素重叠。
4. 计算 BFC 的高度时，浮动元素也参与计算。
5. BFC 是一个独立的容器，外部元素对其内部元素布局没有影响；同样，BFC 内部元素的布局也不会影响外部元素。

形成 BFC 的条件：
要创建一个 BFC，需要满足以下条件之一：
1. 根元素（`<html>`）。
2. 浮动元素（`float`属性为`left`或`right`）。
3. 绝对定位元素（`position`属性为`absolute`或`fixed`）。
4. 内联块（`display`属性为`inline-block`）。
5. 表格单元格（`display`属性为`table-cell`）。
6. 表格标题（`display`属性为`table-caption`）。
7. 匿名表格单元格（`display`属性为`table`、`table-row`、`table-row-group`、`table-header-group`、`table-footer-group`、`table-column`、`table-column-group`）。
8. 元素的`overflow`属性值不为`visible`（例如，`auto`、`scroll`、`hidden`）。
9. 弹性盒子（`display`属性为`flex`或`inline-flex`）。
10. 网格容器（`display`属性为`grid`或`inline-grid`）。
11. 多列容器（`column-count`或`column-width`属性不为`auto`）。
12. `contain`属性值为`layout`、`paint`或`strict`。

通过满足以上条件之一，可以创建 BFC，实现独立渲染区域。在实际应用中，BFC 有助于解决外边距折叠、浮动元素引起的布局问题等。

### 请阐述 z-index 属性，并说明如何形成层叠上下文（stacking context）

`z-index`属性是 CSS 中用于控制元素在页面中的堆叠顺序（即在 z 轴上的顺序）的属性。具有较高`z-index`值的元素会覆盖较低`z-index`值的元素。需要注意的是，`z-index`属性只适用于具有定位属性（`position`属性值为`relative`、`absolute`或`fixed`）的元素。

层叠上下文（Stacking Context）是一个抽象概念，它定义了一个元素在 z 轴上的层次。在同一个层叠上下文中，元素的堆叠顺序由`z-index`属性控制。层叠上下文可以嵌套，形成一个层叠上下文树。层叠上下文解决了多个元素重叠时的优先级显示。

形成层叠上下文的条件：

1. 根元素（`<html>`）。
2. `z-index`值不为`auto`的定位元素（`position`属性值为`relative`、`absolute`或`fixed`）。
3. `z-index`值不为`auto`的弹性盒子（`display`属性值为`flex`或`inline-flex`）的直接子元素。
4. `z-index`值不为`auto`的网格容器（`display`属性值为`grid`或`inline-grid`）的直接子元素。
5. `opacity`属性值小于 1 的元素。
6. `transform`属性值不为`none`的元素。
7. `filter`属性值不为`none`的元素。
8. `perspective`属性值不为`none`的元素。
9. `will-change`属性值指定了任意形成层叠上下文的属性的元素。
10. `contain`属性值为`paint`或`strict`的元素。
11. `mix-blend-mode`属性值不为`normal`的元素。
12. `isolation`属性值为`isolate`的元素。

满足以上任意条件之一的元素都会创建一个新的层叠上下文。在层叠上下文中，元素会根据其`z-index`值和其他因素进行堆叠。层叠上下文有助于更好地控制元素的堆叠顺序，解决元素覆盖和遮挡的问题。

### CSS 有哪些继承属性？

1. 文本和字体相关属性：
   - `color`
   - `font-family`
   - `font-size`
   - `font-weight`
   - `font-style`
   - `font-variant`
   - `letter-spacing`
   - `line-height`
   - `text-align`
   - `text-indent`
   - `text-transform`
   - `white-space`
   - `word-spacing`
2. 列表样式相关属性：
   - `list-style-type`
   - `list-style-position`
   - `list-style-image`
3. 表格布局相关属性：
   - `border-collapse`
   - `border-spacing`
   - `caption-side`
   - `empty-cells`
   - `table-layout`
4. 其他可继承属性：
   - `visibility`
   - `cursor`
   - `quotes`
   - `text-decoration`
   - `text-shadow`
   - `word-break`
   - `word-wrap`
   - `writing-mode`
   - `direction`

### 有哪些清除浮动的技术，都适用哪些情况？

1. 使用`clear`属性： 在浮动元素后添加一个空元素，然后使用 CSS 的`clear`属性来清除浮动。适用于简单布局和较早的浏览器版本。

   ```css
   <div style="float: left;">...</div>
   <div style="clear: both;"></div>
   ```

2. 父元素使用`overflow`属性： 为父元素添加`overflow: auto`或`overflow: hidden`属性。此方法可以使父元素自动计算其高度，包括浮动元素。适用于不需要显示滚动条的布局。

   ```css
   .container {
   	overflow: auto;
   }
   ```

3. 使用伪元素`::after`： 为父元素添加`::after`伪元素，并设置`clear: both`。这种方法不需要额外的 HTML 元素。适用于现代浏览器和简洁的 HTML 结构。

   ```css
   .container::after {
   	content: "";
   	display: table;
   	clear: both;
   }
   ```

4. 使用 Flexbox 布局： 将父元素的`display`属性设置为`flex`。这会使所有子元素成为弹性项，并且不再需要清除浮动。适用于现代浏览器和需要使用弹性布局的场景。

   ```css
   .container {
   	display: flex;
   }
   ```

5. 使用 Grid 布局： 将父元素的`display`属性设置为`grid`。这会使所有子元素成为网格项，并且不再需要清除浮动。适用于现代浏览器和需要使用网格布局的场景。

   ```css
   .container {
   	display: grid;
   }
   ```

在实际项目中，选择哪种清除浮动的技术取决于项目的具体需求、浏览器兼容性和布局类型。现代项目通常更倾向于使用 Flexbox 或 Grid 布局来解决浮动问题。

### 响应式布局有哪些

响应式布局是一种使网站能够自动适应不同屏幕尺寸和设备类型的设计方法。以下是一些常见的响应式布局技术：

1. 流式布局（Fluid Layout）： 使用百分比来定义元素的宽度，使元素随浏览器窗口大小变化而自动调整宽度。这种布局可以在一定程度上适应不同屏幕尺寸，但在极小或极大屏幕上可能无法提供最佳用户体验。
2. 弹性布局（Flexible Layout）： 使用 CSS3 中的弹性盒子（Flexbox）布局模型，可以轻松创建自适应大小和顺序的布局。弹性布局可以根据屏幕尺寸自动调整元素的大小和排列，提供更好的响应式体验。
3. 网格布局（Grid Layout）： 使用 CSS3 中的网格布局（Grid）模型，可以创建复杂的二维布局。网格布局允许在水平和垂直方向上自由排列和调整元素，从而实现高度自适应的响应式设计。
4. 媒体查询（Media Queries）： 使用 CSS3 的媒体查询功能，可以针对不同屏幕尺寸、分辨率和设备类型应用特定的样式。结合流式布局、弹性布局和网格布局，媒体查询可以实现更精确和全面的响应式设计。
5. 自适应图片（Responsive Images）： 使用`srcset`、`sizes`属性和`<picture>`元素，可以让浏览器根据设备像素比（DPR）和屏幕尺寸选择合适的图片资源。这样可以在不同设备上加载适当大小的图片，提高性能并保持视觉效果。
6. 移动优先设计（Mobile-first Design）： 从移动设备的视角开始设计，然后逐步扩展到平板和桌面设备。这种设计方法强调简单、清晰和高效，可以提高跨设备的用户体验。

在实际项目中，通常会综合运用以上技术来实现响应式布局。这些技术可以使网站在不同设备和屏幕尺寸下保持良好的用户体验和视觉效果。

### 讲一下三栏布局实现？圣杯布局、双飞翼布局和 flex 布局

三栏布局是指一个网页由三个栏目组成的布局，分别是左栏、右栏和中间栏。下面是三种实现三栏布局的方法：

1. 圣杯布局

圣杯布局是一种使用浮动和负边距实现的三栏布局。中间栏先放在 html 结构中，使用负边距将左右栏移动到中间栏的两侧，再使用相对定位将左右栏拉回原来的位置。这种布局可以使得中间栏优先渲染，兼顾 SEO 和用户体验。

1. 双飞翼布局

双飞翼布局也是一种使用浮动和负边距实现的三栏布局。与圣杯布局不同的是，左右栏使用 margin 负值撑开中间栏的宽度。这种布局与圣杯布局相比，代码更简单易懂。

1. Flex 布局

Flex 布局是 CSS3 引入的一种新的布局方式，通过 flex 容器和 flex 项目的属性设置，可以轻松实现三栏布局。设置左右栏的宽度为固定值，中间栏的宽度使用 flex-grow 属性自动填充。这种布局适用于移动端和 PC 端，具有响应式的特点。

### 使用过哪些 CSS 预处理器？它们有什么优劣？

Less 和 Sass 这两个常见的 CSS 预处理器。它们的优势是可以使用变量、嵌套规则和函数等功能，可以更简单更高效地编写 CSS 代码。缺点是需要进行额外的预处理工作，增加了开发成本。

### 如何解决 CSS 样式在不同浏览器中的兼容性问题？

解决 CSS 样式在不同浏览器中的兼容性问题可以使用一些通用的方法，如使用 CSS Reset，避免使用 CSS Hack 和浏览器前缀，使用标准的组件库，尽量使用标准的 CSS 属性和属性值等。

### 如何制作一个自适应的正方形？

在外层容器内创建一个正方形元素，并设置`padding-bottom`为 100%。这里的关键是`padding-bottom`以父元素的宽度为基准计算，因此当设置为 100%时，它将等于父元素的宽度，从而保证正方形的宽高相等。

```html
<div class="square-container">
	<div class="square"></div>
</div>
```

```css
.square {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	padding-bottom: 100%; /* 确保正方形的高度等于宽度 */
	background-color: #f00; /* 设置背景颜色以便观察效果 */
}
```

### 讲讲 margin 塌陷和 margin 合并以及解决方案？

**margin 塌陷** 和 **margin 合并** 都是 CSS 中描述 margin 行为的术语。它们分别指 margin 在不同场景下的特殊表现。

1. **Margin 塌陷**：Margin 塌陷是指当一个元素的上外边距（margin-top）和相邻的另一个元素的下外边距（margin-bottom）相遇时，它们之间的距离实际上等于两个外边距中的较大值，而不是它们的总和。这种现象主要发生在具有相邻兄弟元素的块级元素之间。
2. **Margin 合并**：Margin 合并是指在父子元素之间发生的现象。当一个元素的外边距与其父元素的外边距相遇时，它们之间的距离实际上等于两个外边距中的较大值，而不是它们的总和。Margin 合并通常发生在没有边框、内边距或行内内容分隔的父元素与其第一个或最后一个子元素之间。

解决方案：

针对 margin 塌陷和合并的现象，有以下几种解决方案：

1. **使用内边距（padding）**：如果适用，可以使用内边距代替外边距来调整元素之间的距离。内边距不会发生塌陷或合并。
2. **添加边框（border）或内边距（padding）**：在父子元素间的 margin 合并问题上，可以通过给父元素添加一个边框或一个很小的内边距来阻止 margin 合并。
3. **使用 BFC（块格式化上下文）**：创建一个新的 BFC（如通过设置 `overflow` 属性为 `auto` 或 `hidden`）可以防止父子元素间的 margin 合并。
4. **使用伪元素**：可以通过在两个相邻的兄弟元素之间插入一个透明的伪元素（如 `::before` 或 `::after`），并为其添加 `display: inline-block;` 属性来防止兄弟元素间的 margin 塌陷。
5. **避免使用外边距**：在某些情况下，可以使用其他布局技术（如 Flexbox 或 Grid）来调整元素之间的距离，从而避免 margin 塌陷和合并的问题。

了解 margin 塌陷和合并现象以及如何解决这些问题可以帮助你更好地控制布局和元素间距。

### 如何实现一个三角形？

使用 CSS 创建一个三角形的常见方法是利用边框（border）属性。具体操作如下：

1. 首先，创建一个宽高为 0 的元素（如 `div`），这样它的内容区域将不占据任何空间。
2. 为该元素设置透明边框，这样它的边框也不会显示出来。
3. 根据你需要的三角形方向，设置一个边框颜色，使该边框变得可见。

以下是一个创建向上的三角形的示例：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<style>
			.triangle {
				width: 0;
				height: 0;
				border-left: 50px solid transparent;
				border-right: 50px solid transparent;
				border-bottom: 100px solid red;
			}
		</style>
	</head>
	<body>
		<div class="triangle"></div>
	</body>
</html>
```

在这个示例中，我们创建了一个名为 `.triangle` 的 `div` 元素。我们将其宽度和高度设置为 0，然后为其添加了左、右和底边框。左右边框设置为透明，底边框设置为红色。这将创建一个向上的红色三角形。

### 如何画一条 0.5px 的线

要在屏幕上绘制一条 0.5px 的线，可以使用 CSS 的伪元素 `::before` 或 `::after`，并设置它们的尺寸和缩放（scale）。以下是一个绘制 0.5px 水平线的示例：

```css
.half-pixel-line {
	position: relative;
	display: inline-block;
	width: 100%;
	height: 1px;
}

.half-pixel-line::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 1px;
	background-color: black;
	transform-origin: left top;
	transform: scaleY(0.5);
}
```

### 视差滚动效果的原理？

视差滚动效果（Parallax Scrolling）是一种视觉设计技巧，通过在页面滚动时以不同速度移动前景和背景元素，从而产生深度感和动态效果。这种效果可以使网页看起来更有趣、更具吸引力。

视差滚动效果的原理在于，当用户滚动页面时，页面上的不同元素（例如前景、背景、文字等）以不同的速度移动。这些速度差使得靠近观察者的元素（前景）看起来移动得更快，而远离观察者的元素（背景）看起来移动得更慢。这种相对运动产生了一种错觉，使用户感觉到页面的不同部分之间有深度关系，从而增强了视觉体验。

要实现视差滚动效果，可以使用以下方法之一：

1. **纯 CSS 方法**：利用 CSS3 的 `background-attachment` 属性设置为 `fixed`。这种方法简单易实现，但仅适用于背景图像，并且在某些浏览器或设备上可能存在兼容性问题。
2. **JavaScript 方法**：通过监听页面滚动事件，根据滚动位置动态调整元素的位置。这种方法更灵活，可以应用于任何元素，并且可以实现更复杂的视差效果。通常使用 JavaScript 库（如 Rellax.js、Parallax.js 等）来简化开发过程。

需要注意的是，过多或不合适的视差滚动效果可能会导致页面性能下降、用户体验受损，因此在实现视差滚动效果时要保持适度。
### 24.display:none和visibility:hidden的区别？

display:none 隐藏对应的元素，在文档布局中不再给它分配空间，它各边的元素会合拢，就当他从来不存在。  
visibility:hidden 隐藏对应的元素，但是在文档布局中仍保留原来的空间
### 16、常见的盒子垂直居中的方法有哪些请举例 3 种？

```
// 1. 利用子绝父相定位的方式来实现
#container {
  width: 500px;
  height: 500px;
  position: relative;
}
#center {
  width: 100px;
  hight: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
}

// 2. 利用 Css3 的 transform，可以轻松的在未知元素的高宽的情况下实现元素的垂直居中。

#container {
  position: relative;
}
#center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// 3. flex
#container {
  display: flex;
  justify-content: center;
  align-items: center;
}
#center {
}
```

### 31、清除浮动的方法有哪些？
为什么要清除浮动，因为浮动的盒子脱离标准流，如果父盒子没有设置高度的话，下面的盒子就会撑上 来。

1.额外标签法（在最后一个浮动标签后，新加一个标签，给其设置 clear：both；）（不推荐）

2.父级添加 overflow 属性（父元素添加 overflow:hidden）（不推荐）

3.使用 after 伪元素清除浮动（推荐使用）

```
.clearfix:after{/*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear:both;
  visibility: hidden;
}
.clearfix{
  *zoom: 1;/*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
｝
```

4.使用 before 和 after 双伪元素清除浮动

```
.clearfix:after,
.clearfix:before {
  content: '';
  display: table;
}
.clearfix:after {
  clear: both;
}
.clearfix {
  *zoom: 1;
}
```

### 32、常见的布局方法有哪些？他们的优缺点是什么？
页面布局常用的方法有浮动、定位、flex、grid 网格布局、栅格系统布局

浮动： 优点：兼容性好。 缺点：浮动会脱离标准文档流，因此要清除浮动。我们解决好这个问题即可。

绝对定位 优点：快捷。 缺点：导致子元素也脱离了标准文档流，可实用性差。

flex 布局（CSS3 中出现的） 优点：解决上面两个方法的不足，flex 布局比较完美。移动端基本用 flex 布局。

网格布局（grid） CSS3 中引入的布局，很好用。代码量简化了很多。

利用网格布局实现的一个左右 300px 中间自适应的布局

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
    <style>
      html * {
        padding: 0;
        margin: 0;
      }
      /* 重要：设置容器为网格布局，宽度为100% */
      .layout.grid .left-center-right {
        display: grid;
        width: 100%;
        grid-template-rows: 100px;
        grid-template-columns: 300px auto 300px; /* 重要：设置网格为三列，
	并设置每列的宽度。即可。*/
      }
      .layout.grid .left {
        background: red;
      }
      .layout.grid .center {
        background: green;
      }
      .layout.grid .right {
        background: blue;
      }
    </style>
  </head>
  <body>
    <section class="layout grid">
      <article class="left-center-right">
        <div class="left">我是 left</div>
        <div class="center">
          <h1>网格布局解决方案</h1>
          我是 center
        </div>
        <div class="right">我是 right</div>
      </article>
    </section>
  </body>
</html>
```

栅格系统布局 优点：可以适用于多端设备
### 40、谈谈盒子模型？
在标准盒子模型中，width 和 height 指的是内容区域的宽度和高度。

增加内边距、边框和外边距不会 影响内容区域的尺寸，但是会增加元素框的总尺寸。

IE 盒子模型中，width 和 height 指的是内容区域+border+padding的宽度和高度。

盒子模型是css技术所使用的一种思维模型。盒子模型是指将网页设计页面中的内容元素看作一个个装了东西的矩形盒子。每个矩形盒子都由内容、内边距、边框和外边距4个部分组成。除去内容部分，其余每个部分又分别包含上、下、左和右4个方向，方向既可以分别定义也可以统一定义。

我们生活中常见的手机盒子就可以看作一个盒子模型，完整的手机盒子通常包含手机、内填充物和盛装手机的外壳。如果把手机想象成HTML标记，那么手机盒子就是一个CSS盒子模型。内容就是盒子里装的手机；内边距就是怕手机损坏得填充物：边框就是盒子本身外部的壳；外边距就是多个手机盒子排放时空的缝隙。

标记

div英文全称为division，译为中文是“分割、区域”。标记简单而言就是一个块标记，可以实现网页的规划和布局。在HTML文档中，页面会被划分为很多区域，不同区域显示不同的内容，如导航栏、banner、内容区等，这些区块一般都通过标记可以在div标记中设置外边距、内边距、宽和高，同时内部可以容纳段落、标题、表图像等各种网页元素，也就是说大多数HTML标记都可以嵌套在标记中，中还可以嵌套多层。标记非常强大，通过与id、class等属性结合设置CSS样式，可以替代大多数的块级文本标记。

盒子的宽与高

网页是由多个盒子排列而成的，每个盒子都有固定的大小，在CSS中使用宽度属性widh和高度属性height控制盒子的大小。widh和height属性值可以是不同单位的数值或相对于父标记的百分比，实际工作中，最常用的属性值是像素值。

相关阅读：什么是实体化三属性？

实体化是指给标记划分区域(画盒子)，并通过宽度、高度、背景色这三种属性，让标记形态化，成为一个盒子。需要注意的是，宽度属性wdh和高度属性height仅适用于块级元素，对行内元素无效（和标记除外）。

### 15. 前端标准 px和em的区别？

px和em都是长度单位，区别是，px的值是固定的，指定是多少就是多少，计算比较容易。em得值不是固定的，并且em会继承父级元素的字体大小。  
浏览器的默认字体高都是16px。所以未经调整的浏览器都符合: 1em=16px。那么12px=0.75em, 10px=0.625em
### 48、BFC 是什么？
BFC（块级格式化上下文），一个创建了新的 BFC 的盒子是独立布局的，盒子内元素的布局不会影响盒 子外面的元素。在同一个 BFC 中的两个相邻的盒子在垂直方向发生 margin 重叠的问题。
BFC 是值浏览器中创建了一个独立的渲染区域，该区域内所有元素的布局不会影响到区域外元素的布 局，这个渲染区域只对块级元素起作用
1：概念 在⻚⾯布局的过程中，我们经常会遇到⼀些奇怪的情况，⽐如元素的⾼度消失了、两栏布局⽆法⾃适应、元素间距出现异常等等。这些问题往往是由于元素之间相互影响⽽导致的。在这⾥，就涉及到了BFC 的概念。  
BFC（块级格式化上下⽂）是⻚⾯中⼀块独⽴的渲染区域，具有⼀套独⽴的渲染规则：内部的盒⼦会在垂直⽅向上⼀个接⼀个地放置。  
同⼀个BFC的相邻盒⼦的m a r g in会发⽣重叠，与⽅向⽆关。  
每个元素的左外边距与包含块的左边界相接触（从左到右），即使浮动元素也是如此。BFC的区域不会与floa t的元素区域重叠。  
计算BFC的⾼度时，浮动⼦元素也参与计算。  
BFC是⻚⾯上的⼀个隔离的独⽴容器，容器⾥⾯的⼦元素不会影响到外⾯的元素，反之亦然。  
BFC的⽬的是形成⼀个相对于外界完全独⽴的空间，使内部的⼦元素不会影响到外部的元素

2：触发条件  
触发BFC的条件包含但不限于：  
根元素，即HTML元素  
浮动元素：floa t值为left、right  
ov e rflow值不为visibl e，为auto、s croll、hidden  
displ ay的值为inline -block、inline -t abl e、t abl e - ce ll、t abl e - caption、flex、inline -  
fle x、grid、inline - grid position的值为absolut e或fix ed