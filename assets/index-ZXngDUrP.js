(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))v(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const u of n.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&v(u)}).observe(document,{childList:!0,subtree:!0});function h(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function v(e){if(e.ep)return;e.ep=!0;const n=h(e);fetch(e.href,n)}})();addEventListener("load",function(){var m=document.querySelectorAll("pre code.hljs");Array.prototype.forEach.call(m,function(l){var h=l.result.language;l.insertAdjacentHTML("afterbegin",`<label>${h}</label>`)})});let g=document.createElement("div");g.classList.add("menu","rotating");g.innerHTML=`
  <div id="btn-html" class="menu-item">HTML</div>
  <div id="btn-css" class="menu-item">CSS</div>
  <div id="btn-js" class="menu-item">JS</div>
  <div id="btn-details" class="menu-item">details</div>
`;document.body.appendChild(g);document.querySelector("#btn-html").addEventListener("click",function(){document.querySelector("#section-html").scrollIntoView()});document.querySelector("#btn-css").addEventListener("click",function(){document.querySelector("#section-css").scrollIntoView()});document.querySelector("#btn-js").addEventListener("click",function(){document.querySelector("#section-js").scrollIntoView()});document.querySelector("#btn-details").addEventListener("click",function(){document.querySelector("#section-details").scrollIntoView()});function f(){return window.scrollTop||document.body.scrollTop||document.documentElement&&document.documentElement.scrollTop}let b=f(),o;function S(){window.scrollBy(0,2,"smooth"),console.log("window scrollY",window.scrollY+window.innerHeight),console.log("window innerheight",document.body.offsetHeight)}function y(){clearInterval(o),o=setInterval(S,50),console.log("top",b),console.log("interval",o)}function x(){clearInterval(o)}window.addEventListener("wheel",function(){clearInterval(o)});window.addEventListener("scroll",function(){window.scrollY+window.innerHeight>=document.body.offsetHeight&&clearInterval(o)});function q(){clearInterval(o),document.body.scrollTop=0,document.documentElement.scrollTop=0}let a=document.createElement("div");a.style.background="lime";a.style.padding="5px 10px";a.innerHTML="Auto";a.addEventListener("click",y);let r=document.createElement("div");r.style.background="red";r.style.padding="5px 10px";r.innerHTML="Stop";r.addEventListener("click",x);let s=document.createElement("div");s.style.background="lightblue";s.style.padding="5px 10px";s.innerHTML="Top";s.addEventListener("click",q);let t=document.createElement("div");t.appendChild(s);t.appendChild(a);t.appendChild(r);t.style.position="fixed";t.style.display="flex";t.style.bottom=0;t.style.right=0;t.classList.add("scroll-box");document.body.appendChild(t);const w=`<h1>CSS</h1>
<p>CSS - Cascading Style Sheets</p>
<h2>Selectors</h2>
<h3>Select by element tag</h3>
<p>use the tag name to select a specific element</p>
<pre><code class="language-css">p {
	color: red;
}
</code></pre>
<h3>Select by class</h3>
<p>use the class name to select a specific element</p>
<pre><code class="language-css">.small-text {
	font-size: 10px;
}
</code></pre>
<h3>Select by id</h3>
<p>use the id to select a specific element</p>
<pre><code class="language-css">#box-1 {
	background: blue;
}
</code></pre>
<h3>pseudo-class (hover)</h3>
<p>add style when users hover on a specific element</p>
<pre><code class="language-css">p:hover {
	color: green;
}
</code></pre>
<hr>
<h2>Colors</h2>
<h3>Background</h3>
<pre><code class="language-css">p {
	background: red;
}
</code></pre>
<h3>Color</h3>
<pre><code class="language-css">p {
	color: red;
}
</code></pre>
<h4>Color types</h4>
<h5>Keyword colors</h5>
<pre><code class="language-css">p {
	background: red;
}
</code></pre>
<p>ref: https://www.w3.org/wiki/CSS/Properties/color/keywords#Color_keywords</p>
<h5>Hexadecimal colors</h5>
<pre><code class="language-css">p {
	background: #ff0000;
}
</code></pre>
<h5>RGB colors</h5>
<pre><code class="language-css">p {
	background: rgb(255,0,0);
}
</code></pre>
<h5>Gradient</h5>
<pre><code class="language-css">p {
	background: linear-gragient(#ff0000, #00ff00);
}
</code></pre>
<hr>
<h2>Building a block</h2>
<h3>Width</h3>
<pre><code class="language-css">div {
	width: 100%;
}

div {
	width: 500px;
}

div {
	min-width: 200px;
}

div {
	max-width: 800px;
}
</code></pre>
<h3>Height</h3>
<pre><code class="language-css">div {
	height: 100%;
}

div {
	height: 500px;
}

div {
	min-height: 200px;
}

div {
	max-height: 800px;
}
</code></pre>
<h3>Margin</h3>
<pre><code class="language-css">div {
	margin: 12px;
}

div {
	margin: 12px 24px;
}

div {
	margin-top: 12px;
	margin-bottom: 12px;
	margin-left: 24px;
	margin-right: 24px;
}

div {
	margin: 12px 24px 2px 4px;
}
</code></pre>
<h3>Padding</h3>
<pre><code class="language-css">div {
	padding: 12px;
}

div {
	padding: 12px 24px;
}

div {
	padding-top: 12px;
	padding-bottom: 12px;
	padding-left: 24px;
	padding-right: 24px;
}

div {
	padding: 12px 24px 2px 4px;
}
</code></pre>
<h3>Border</h3>
<pre><code class="language-css">div {
	border: 1px solid red;
}
</code></pre>
<h3>Radius</h3>
<pre><code class="language-css">div {
	border-radius: 12px;
}

div {
	border-radius: 12px 10px 8px 6px;
}
</code></pre>
<h3>Box shadow</h3>
<pre><code class="language-css">div {
	box-shadow: 1px 1px 5px red;
}
</code></pre>
<hr>
<h2>Text</h2>
<h3>text-align</h3>
<pre><code class="language-css">h1 {
	text-align: center;
}
</code></pre>
<h3>text-decoration</h3>
<pre><code class="language-css">h1 {
	text-decoration: underline;
}
</code></pre>
<h3>text-transform</h3>
<pre><code class="language-css">h1 {
	text-transform: uppercase;
}
</code></pre>
<h3>font-size</h3>
<pre><code class="language-css">h1 {
	font-size: 30px;
}
</code></pre>
<h3>line-height</h3>
<pre><code class="language-css">h1 {
	font-size: 30px;
	font-size: 1.5;
}
</code></pre>
<h3>font-style</h3>
<pre><code class="language-css">h1 {
	font-style: italic;
}
</code></pre>
<h3>font-weight</h3>
<pre><code class="language-css">h1 {
	font-weight: bold;
}

h1 {
	font-weight: 700;
}
</code></pre>
<h3>font-family</h3>
<pre><code class="language-css">h1 {
	font-family: 'Courier New', monospace;
}
</code></pre>
<hr>
<h2>List</h2>
<pre><code class="language-css">ul {
	list-style: square;
}
</code></pre>
<p>more info: https://developer.mozilla.org/en-US/docs/Web/CSS/list-style</p>
<hr>
<h2>Image</h2>
<h3>responsive image</h3>
<pre><code class="language-css">img {
  max-width: 100%;
  height: auto;
}
</code></pre>
<hr>
<h2>Layout</h2>
<h3>display</h3>
<pre><code class="language-css">div {
	display: block | inline | flex | grid;
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/display</p>
<h3>position</h3>
<pre><code class="language-css">div {
	position: relative | absolute | fixed | sticky;
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/position</p>
<h3>flexbox</h3>
<pre><code class="language-css">div {
   display: flex;
   flex-direction: row | row-reverse | column | column-reverse; /* optional */
   justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right; /* optional */
   align-items: stretch | flex-start | flex-end | center; /* optional */
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox
https://css-tricks.com/snippets/css/a-guide-to-flexbox/</p>
<h3>grid</h3>
<pre><code class="language-css">div {
	display: grid;
	grid: /* grid-template-rows */ / /* grid-template-columns */
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/grid
https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids</p>
<hr>
<h2>Animation</h2>
<pre><code class="language-css">div {
	animation: extendingX 2s linear infinite;
}

@keyframes extendingX {
  0% {
    transform: scaleX(1);
  }
  50% {
    transform: scaleX(1.5);
  }
  100% {
    transform: scaleX(1);
  }
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/animation</p>
<hr>
<h2>Media queries</h2>
<p>Breakpoint:
Mobiles: &lt; 480px
Tablets: 481px - 768px
Laptops: &gt; 768px</p>
<pre><code class="language-css">/* Laptops: &gt; 768px */
h1 {
	font-size: 24px
}

/* Tablets: 481px - 768px */
@media screen and (min-width: 481px) and (max-width: 768px) {
  h1 {
    font-size: 18px;
  }
}

/* Mobiles: &lt; 480px */
@media screen and (max-width: 480px) {
  h1 {
    font-size: 14px;
  }
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries</p>
<hr>
<h2>CSS variables</h2>
<pre><code class="language-css">body {
	--main-color: #ff0000;
	--secondary-color: #00ff00;
}

p {
	color: var(--main-color);
}
</code></pre>
<p>https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties</p>
<hr>
`;let d=document.createElement("div");d.classList.add("content");d.setAttribute("id","css");d.innerHTML=w;document.querySelector("#section-css").appendChild(d);const L=`<h1>HTML</h1>
<p>Hyper Text Markup Language
info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">https://developer.mozilla.org/en-US/docs/Web/HTML</a></p>
<h2>Doctype</h2>
<pre><code class="language-html">&lt;!DOCTYPE html&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Glossary/Doctype">https://developer.mozilla.org/en-US/docs/Glossary/Doctype</a></p>
<hr>
<h2>Root</h2>
<pre><code class="language-html">&lt;html&gt;...&lt;/html&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/html</a></p>
<hr>
<h2>Metadata</h2>
<pre><code class="language-html">&lt;head&gt;...&lt;/head&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head</a></p>
<hr>
<h2>Body</h2>
<pre><code class="language-html">&lt;body&gt;...&lt;/head&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/body</a></p>
<hr>
<h2>Text</h2>
<h3>Headings</h3>
<pre><code class="language-html">&lt;h1&gt;Heading 1&lt;/h1&gt;
&lt;h2&gt;Heading 2&lt;/h2&gt;
&lt;h3&gt;Heading 3&lt;/h3&gt;
&lt;h4&gt;Heading 4&lt;/h4&gt;
&lt;h5&gt;Heading 5&lt;/h5&gt;
&lt;h6&gt;Heading 6&lt;/h6&gt;
</code></pre>
<div class="example">
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements</a></p>
<h3>paragraph</h3>
<pre><code class="language-html">&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet convallis neque eu lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia felis sed pharetra aliquet. Phasellus metus mi, lacinia sollicitudin molestie sit amet, finibus sed nibh. Curabitur rutrum sem lectus, nec eleifend orci bibendum at. Vestibulum quis felis varius, venenatis mi a, vestibulum ante. Ut sem lorem, vehicula id sagittis at, vehicula in ante. Curabitur ut posuere arcu, at scelerisque odio.&lt;/p&gt;
</code></pre>
<div class="example">
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer laoreet convallis neque eu lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam lacinia felis sed pharetra aliquet. Phasellus metus mi, lacinia sollicitudin molestie sit amet, finibus sed nibh. Curabitur rutrum sem lectus, nec eleifend orci bibendum at. Vestibulum quis felis varius, venenatis mi a, vestibulum ante. Ut sem lorem, vehicula id sagittis at, vehicula in ante. Curabitur ut posuere arcu, at scelerisque odio.</p>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p</a></p>
<h3>bold</h3>
<pre><code class="language-html">&lt;strong&gt;Text&lt;/strong&gt;
</code></pre>
<div class="example">
<strong>Text</strong>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong</a></p>
<h3>italic</h3>
<pre><code class="language-html">&lt;em&gt;Text&lt;/em&gt;
</code></pre>
<div class="example">
<em>Text</em>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em</a></p>
<hr>
<h2>link</h2>
<pre><code class="language-html">&lt;a href=&quot;www.google.com&quot;&gt;Google&lt;/a&gt;
</code></pre>
<div class="example">
<a href="www.google.com">Google</a>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a</a></p>
<hr>
<h2>image</h2>
<pre><code class="language-html">&lt;img src=&quot;https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp&quot; /&gt;
</code></pre>
<div class="example">
<img src="https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp" />
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img</a></p>
<hr>
<h2>unordered list</h2>
<pre><code class="language-html">&lt;ul&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
  &lt;li&gt;Milk&lt;/li&gt;
&lt;/ul&gt;
</code></pre>
<div class="example">
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ul</a></p>
<hr>
<h2>ordered list</h2>
<pre><code class="language-html">&lt;ol&gt;
  &lt;li&gt;Coffee&lt;/li&gt;
  &lt;li&gt;Tea&lt;/li&gt;
  &lt;li&gt;Milk&lt;/li&gt;
&lt;/ol&gt;
</code></pre>
<div class="example">
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/ol</a></p>
<hr>
<h2>list item</h2>
<pre><code class="language-html">&lt;li&gt;Coffee&lt;/li&gt;
</code></pre>
<div class="example">
<li>Coffee</li>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/li</a></p>
<hr>
<h2>generic container</h2>
<pre><code class="language-html">&lt;div&gt;
	&lt;img src=&quot;https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp&quot; /&gt;
	&lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien lacus, fringilla at pharetra eget, egestas ac dolor. In hac habitasse platea dictumst. Aenean ut aliquet quam. Vivamus in aliquam orci, id aliquet lorem. Aenean sed nulla ac tortor sagittis posuere a a sapien.&lt;/p&gt;
&lt;/div&gt;
</code></pre>
<div class="example">
<div>
	<img src="https://upload.wikimedia.org/wikipedia/en/9/96/Meme_Man_on_transparent_background.webp" />
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sapien lacus, fringilla at pharetra eget, egestas ac dolor. In hac habitasse platea dictumst. Aenean ut aliquet quam. Vivamus in aliquam orci, id aliquet lorem. Aenean sed nulla ac tortor sagittis posuere a a sapien.</p>
</div>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div</a></p>
<hr>
<h2>inline container</h2>
<pre><code class="language-html">&lt;span&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit.&lt;/span&gt;
</code></pre>
<div class="example">
<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span</a></p>
<hr>
<h2>Scalable Vector Graphics (SVG)</h2>
<pre><code class="language-html">&lt;svg viewBox=&quot;0 0 100 100&quot;
  stroke=&quot;blue&quot;
  fill=&quot;lime&quot;&gt;
  &lt;circle cx=&quot;50&quot; cy=&quot;50&quot; r=&quot;40&quot; /&gt;
&lt;/svg&gt;
</code></pre>
<div class="example">
<svg viewBox="0 0 100 100"
  stroke="blue"
  fill="lime">
  <circle cx="50" cy="50" r="40" />
</svg>
</div>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg">https://developer.mozilla.org/en-US/docs/Web/SVG/Element/svg</a></p>
<hr>
`;let i=document.createElement("div");i.classList.add("content");i.setAttribute("id","html");i.innerHTML=L;document.querySelector("#section-html").appendChild(i);const T=`<h1>Javascript</h1>
<h2>Comment</h2>
<pre><code class="language-js">// a comment
/* also a comment */
</code></pre>
<hr>
<h2>Variables</h2>
<pre><code class="language-js">let age = 23; // Number
let name = &quot;John&quot;; // String
let opened = true; // Boolean
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let</a></p>
<hr>
<h2>Logs</h2>
<pre><code class="language-js">console.log(&quot;hello&quot;);
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/console/log_static">https://developer.mozilla.org/en-US/docs/Web/API/console/log_static</a></p>
<hr>
<h2>Selectors</h2>
<h3>querySelector()</h3>
<p>Select the first element that matches the query</p>
<pre><code class="language-js">let li = document.querySelector(&quot;li&quot;);
let day = document.querySelector(&quot;.day&quot;);
let paragraph = document.querySelector(&quot;ul#list p&quot;);
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector</a></p>
<h3>querySelectorAll()</h3>
<p>Select all the elements that match the query</p>
<pre><code class="language-js">let lis = document.querySelectorAll(&quot;li&quot;);
let paragraphs = document.querySelectorAll(&quot;li#special p&quot;);
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll">https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll</a></p>
<hr>
<h2>Element manipulation</h2>
<h3>add style</h3>
<pre><code class="language-js">let targetedElement = document.querySelector(&quot;.container&quot;);
boxElement.style.backgound = &quot;green&quot;;
boxElement.style.border = &quot;1px solid blue&quot;;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style">https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style</a></p>
<h3>add classes</h3>
<pre><code class="language-js">let divElement = document.querySelector(&quot;div&quot;);
divElement.classList.add(&quot;small&quot;);
divElement.classList.remove(&quot;big&quot;);
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">https://developer.mozilla.org/en-US/docs/Web/API/Element/classList</a></p>
<h3>add html content</h3>
<pre><code class="language-js">let p = document.querySelector(&quot;p&quot;)
p.innerHTML = &quot;This is content!&quot;;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML">https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML</a></p>
<h2>If else statement</h2>
<h3>if statement</h3>
<pre><code class="language-js">let weekend = true

if (weekend == true) {
	console.log(&quot;sleep&quot;);
}
if (weekend == false) {
	console.log(&quot;go to work!&quot;);
}
</code></pre>
<h3>if else statement</h3>
<pre><code class="language-js">let weekend = true

if (weekend == true) {
	console.log(&quot;sleep&quot;);
} else (weekend == false) {
	console.log(&quot;go to work!&quot;);
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else</a></p>
<h3>Logical OR (||)</h3>
<pre><code class="language-js">if (weekend == true || specialHoliday == true) {
	console.log(&quot;sleep&quot;);
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR</a></p>
<h3>Logical AND (&amp;&amp;)</h3>
<pre><code class="language-js">if (weekend == true &amp;&amp; haveMoney == true) {
	console.log(&quot;go shopping&quot;);
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND</a></p>
<hr>
<h2>Operators</h2>
<p>https://www.w3schools.com/js/js_operators.asp</p>
<hr>
<h2>Events</h2>
<h3>add event listener</h3>
<pre><code class="language-js">window.addEventListener( &quot;scroll&quot;, console.log(&quot;scrolling&quot;) );
window.addEventListener( &quot;scroll&quot;, console.log(&quot;scrolling&quot;) );
window.addEventListener( &quot;scroll&quot;, console.log(&quot;scrolling&quot;) );
</code></pre>
<p>info: <a href="https://www.w3schools.com/jsref/met_document_addeventlistener.asp">https://www.w3schools.com/jsref/met_document_addeventlistener.asp</a></p>
<h3>setInterval()</h3>
<h3>setTimeout()</h3>
<hr>
`;let c=document.createElement("div");c.classList.add("content");c.setAttribute("id","js");c.innerHTML=T;document.querySelector("#section-js").appendChild(c);const M=`<h1>Schedule</h1>
<table>
<thead>
<tr>
<th>Date</th>
<th>Monday Morning</th>
<th>Monday Afternoon</th>
<th>Date</th>
<th>Tuesday Morning</th>
</tr>
</thead>
<tbody>
<tr>
<td>08/01/24</td>
<td>Basic HTML, CSS</td>
<td>Basic HTML, CSS</td>
<td>09/01/24</td>
<td>Presentation on classwork</td>
</tr>
<tr>
<td>15/01/24</td>
<td>CSS animation / Responsive web design</td>
<td>CSS animation / Responsive web design</td>
<td>16/01/24</td>
<td>Presentation on classwork</td>
</tr>
<tr>
<td>22/01/24</td>
<td>JS / Event listener / setTimeout / setInterval</td>
<td>JS / Event listener / setTimeout / setInterval</td>
<td>23/01/24</td>
<td>Presentation - Moving elements</td>
</tr>
<tr>
<td>29/01/24</td>
<td>Project tutorial</td>
<td>Project tutorial</td>
<td>30/01/24</td>
<td>Project tutorial</td>
</tr>
<tr>
<td>05/02/24</td>
<td>Project tutorial</td>
<td>Project tutorial</td>
<td>06/02/24</td>
<td>Project tutorial</td>
</tr>
<tr>
<td>12/02/24</td>
<td>Project tutorial</td>
<td>Project tutorial</td>
<td>13/02/24</td>
<td>Project tutorial</td>
</tr>
<tr>
<td>19/02/24</td>
<td>Project tutorial / Bring your site online</td>
<td>Project tutorial / Bring your site online</td>
<td>20/02/24</td>
<td>Project tutorial / Bring your site online</td>
</tr>
<tr>
<td>26/02/24</td>
<td>-</td>
<td>-</td>
<td>27/02/24</td>
<td>Presentation</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>Date</th>
<th>Monday Morning</th>
<th>Monday Afternoon</th>
<th>Date</th>
<th>Tuesday Morning</th>
</tr>
</thead>
<tbody>
<tr>
<td>04/03/24</td>
<td>Web analysis</td>
<td>Web analysis</td>
<td>05/03/24</td>
<td></td>
</tr>
<tr>
<td>11/03/24</td>
<td>Ideation / Visualisation / Basic HTML, CSS</td>
<td></td>
<td>12/03/24</td>
<td></td>
</tr>
<tr>
<td>18/03/24</td>
<td>Moving elements</td>
<td></td>
<td>19/03/24</td>
<td></td>
</tr>
<tr>
<td>25/03/24</td>
<td>Parallax scroll</td>
<td></td>
<td>26/03/24</td>
<td></td>
</tr>
<tr>
<td>01/04/24</td>
<td>Tutorial</td>
<td>Tutorial</td>
<td>02/04/24</td>
<td>Tutorial</td>
</tr>
<tr>
<td>08/04/24</td>
<td>-</td>
<td>-</td>
<td>09/04/24</td>
<td>Tutorial</td>
</tr>
<tr>
<td>15/04/24</td>
<td>-</td>
<td>-</td>
<td>16/04/24</td>
<td>-</td>
</tr>
<tr>
<td>22/04/24</td>
<td>Tutorial</td>
<td>Tutorial</td>
<td>23/04/24</td>
<td>Tutorial</td>
</tr>
<tr>
<td>29/04/24</td>
<td>Tutorial / Bring it online</td>
<td>Tutorial / Bring it online</td>
<td>30/04/24</td>
<td>Presentation</td>
</tr>
<tr>
<td>06/05/24</td>
<td>-</td>
<td>-</td>
<td>07/05/24</td>
<td>Final Screening</td>
</tr>
</tbody>
</table>
`;let p=document.createElement("div");p.classList.add("content");p.setAttribute("id","details");p.innerHTML=M;document.querySelector("#section-details").appendChild(p);
