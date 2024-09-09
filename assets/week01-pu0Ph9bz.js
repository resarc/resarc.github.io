import"./menu-Dm3LOs2Z.js";const e=`<h1>HTML</h1>
<h2>Container</h2>
<p>div</p>
<pre><code class="language-html">&lt;div&gt;
	...
&lt;/div&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div</a></p>
<hr>
<h2>Text</h2>
<h3>Headings</h3>
<p>h1, h2, h3, h4, h5, h6</p>
<pre><code class="language-html">&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6&lt;/h6&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements</a></p>
<hr>
<h3>Paragraph</h3>
<p>p</p>
<pre><code class="language-html">&lt;p&gt;
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet convallis neque eu lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia felis sed pharetra aliquet. Phasellus metus mi, lacinia sollicitudin molestie sit amet, finibus sed nibh.
&lt;/p&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p</a></p>
<hr>
<h2>Image</h2>
<p>img</p>
<pre><code class="language-html">&lt;img src=&quot;https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp&quot; /&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img</a></p>
<hr>
<h2>Comment</h2>
<pre><code class="language-html">&lt;!-- Comment something on your HTML --&gt;
&lt;img src=&quot;https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp&quot; /&gt;
</code></pre>
<hr>
<h1>CSS</h1>
<h2>Comment in CSS</h2>
<pre><code class="language-css">/* Comment something on your CSS */
p {
	color: red;
}
</code></pre>
<hr>
<h2>How to use CSS</h2>
<ol>
<li>Select
<ul>
<li>by tag</li>
<li>by class</li>
<li>by id</li>
</ul>
</li>
<li>Add attributes</li>
</ol>
<pre><code class="language-css">p {
	color: red;
}
</code></pre>
<hr>
<h2>div</h2>
<h3>Width</h3>
<pre><code class="language-css">/* Relative height */
div {
	width: 100%;
}

/* Absolute height */
div {
	width: 500px;
}

/* Minimum height */
div {
	min-width: 200px;
}

/* Maximum height */
div {
	max-width: 800px;
}
</code></pre>
<hr>
<h3>Height</h3>
<pre><code class="language-css">/* Relative height */
div {
	height: 100%;
}

/* Absolute height */
div {
	height: 500px;
}

/* Minimum height */
div {
	min-height: 200px;
}

/* Maximum height */
div {
	max-height: 800px;
}
</code></pre>
<hr>
<h3>Display</h3>
<pre><code class="language-css">div {
	display: block | inline | flex | grid;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Web/CSS/display</a></p>
<h3>Display - Grid</h3>
<pre><code class="language-css">div {
	display: grid;
	grid-template: /* rows */ / /* columns */;

	row-gap: 10px;
	column-gap: 10px;

	/* for both row and column gaps */
	gap: 10px;
	
	align-items: center;
	justify-items: center;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Web/CSS/grid</a>,
<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids</a></p>
<hr>
<h3>Position</h3>
<pre><code class="language-css">div {
	position: relative;
}

div {
	position: absolute;
}

div {
	position: fixed;
}

div {
	position: sticky;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Web/CSS/position</a></p>
<hr>
<h3>Move a div from its origin</h3>
<pre><code class="language-css">div {
	position: relative;
	
	left: 100px;
	right: 100px;
	top: 100px;
	bottom: 100px;
}
</code></pre>
<hr>
<h3>Background color</h3>
<pre><code class="language-css">/* Using Keyword colors */
div {
	background: red;
}

/* Using Hexadecimal colors */
div {
	background: red;
}

/* Using RGB colors */
div {
	background: red;
}
</code></pre>
<hr>
<h3>Margin</h3>
<pre><code class="language-css">/* all sides */
div {
	margin: 12px;
}

/* top-bottom / left-right */
div {
	margin: 12px 24px;
}

/* attributes for each side */
div {
	margin-top: 12px;
	margin-bottom: 12px;
	margin-left: 24px;
	margin-right: 24px;
}

/* shorthand attribute for each side */
div {
	margin: 12px 24px 2px 4px;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin">https://developer.mozilla.org/en-US/docs/Web/CSS/margin</a></p>
<hr>
<h3>Padding</h3>
<pre><code class="language-css">/* all sides */
div {
	padding: 12px;
}

/* top-bottom / left-right */
div {
	padding: 12px 24px;
}

/* attributes for each side */
div {
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 24px;
	padding-right: 24px;
}

/* shorthand attribute for each side */
div {
	padding: 12px 24px 2px 4px;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">https://developer.mozilla.org/en-US/docs/Web/CSS/padding</a></p>
<hr>
<h3>Border radius</h3>
<pre><code class="language-css">/* all sides */
div {
	border-radius: 12px;
}

/* shorthand attribute for each side */
div {
	border-radius: 12px 10px 8px 6px;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius">https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius</a></p>
<hr>
<h2>Text</h2>
<h3>Color</h3>
<pre><code class="language-css">p {
	color: red;
}
</code></pre>
<h3>Font size</h3>
<pre><code class="language-css">p {
	font-size: 10px;
}
</code></pre>
<h3>Line height</h3>
<pre><code class="language-css">h1 {
	font-size: 30px;
	font-size: 1.5;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">https://developer.mozilla.org/en-US/docs/Web/CSS/line-height</a></p>
<h3>Font weight</h3>
<pre><code class="language-css">h1 {
	font-weight: bold;
}

h1 {
	font-weight: 700;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight</a></p>
<h3>Font style</h3>
<pre><code class="language-css">h1 {
	font-style: italic;
}
</code></pre>
<h3>Text align</h3>
<pre><code class="language-css">h1 {
	text-align: center;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">https://developer.mozilla.org/en-US/docs/Web/CSS/text-align</a></p>
<h3>Font family</h3>
<pre><code class="language-css">h1 {
	font-family: 'Courier New', monospace;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">https://developer.mozilla.org/en-US/docs/Web/CSS/font-family</a></p>
<h3>Add font</h3>
<pre><code class="language-css">@font-face {  font-family: myFont;  
	src: url(myFont.woff);
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/cssref/css3_pr_font-face_rule.php">https://www.w3schools.com/cssref/css3_pr_font-face_rule.php</a></p>
<h3>Add Google Font</h3>
<p>info: <a href="https://fonts.google.com/">https://fonts.google.com</a></p>
`;let n=document.createElement("div");n.classList.add("content");n.setAttribute("id","week-01");n.innerHTML=e;document.querySelector("#section-week-01").appendChild(n);
