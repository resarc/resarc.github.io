(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))v(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const b of t.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&v(b)}).observe(document,{childList:!0,subtree:!0});function g(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function v(e){if(e.ep)return;e.ep=!0;const t=g(e);fetch(e.href,t)}})();addEventListener("load",function(){var i=document.querySelectorAll("pre code.hljs");Array.prototype.forEach.call(i,function(s){var g=s.result.language;s.insertAdjacentHTML("afterbegin",`<label>${g}</label>`)})});let y=document.getElementById("logo"),w=document.querySelectorAll("#logo svg");y.addEventListener("click",function(){console.log("aa"),w.forEach(i=>{i.classList.toggle("pause")})});let f=document.createElement("div");f.classList.add("menu","rotating");f.innerHTML=`
  <div id="btn-html" class="menu-item">HTML</div>
  <div id="btn-css" class="menu-item">CSS</div>
  <div id="btn-js" class="menu-item">JS</div>
`;document.body.appendChild(f);document.querySelector("#btn-html").addEventListener("click",function(){document.querySelector("#section-html").scrollIntoView()});document.querySelector("#btn-css").addEventListener("click",function(){document.querySelector("#section-css").scrollIntoView()});document.querySelector("#btn-js").addEventListener("click",function(){document.querySelector("#section-js").scrollIntoView()});let S=document.createElement("div");S.classList.add("pages");S.innerHTML=`
  <div id="btn-project" class="menu-item">Project</div>
  <div id="btn-details" class="menu-item">Details</div>
  <div id="btn-classworks" class="menu-item">Classworks</div>
`;document.body.appendChild(S);document.querySelector("#btn-project").addEventListener("click",function(){document.querySelector("#section-project").scrollIntoView()});document.querySelector("#btn-details").addEventListener("click",function(){document.querySelector("#section-details").scrollIntoView()});document.querySelector("#btn-classworks").addEventListener("click",function(){document.querySelector("#section-classworks").scrollIntoView()});function x(){return window.scrollTop||document.body.scrollTop||document.documentElement&&document.documentElement.scrollTop}x();let a;function q(){window.scrollBy(0,2,"smooth")}function z(){clearInterval(a),a=setInterval(q,50)}function C(){clearInterval(a)}window.addEventListener("wheel",function(){clearInterval(a)});window.addEventListener("scroll",function(){window.scrollY+window.innerHeight>=document.body.offsetHeight&&clearInterval(a)});function U(){clearInterval(a),document.body.scrollTop=0,document.documentElement.scrollTop=0}let o=document.createElement("div");o.style.background="lime";o.style.color="black";o.style.padding="5px 10px";o.classList.add("scroll-box-item");o.innerHTML="Auto";o.addEventListener("click",z);let r=document.createElement("div");r.style.background="red";r.style.padding="5px 10px";r.innerHTML="Stop";r.classList.add("scroll-box-item");r.addEventListener("click",C);let l=document.createElement("div");l.style.background="lightblue";l.style.color="black";l.style.padding="5px 10px";l.innerHTML="Top";l.classList.add("scroll-box-item");l.addEventListener("click",U);let n=document.createElement("div");n.appendChild(l);n.appendChild(o);n.appendChild(r);n.style.position="fixed";n.style.display="flex";n.style.bottom=0;n.style.right=0;n.classList.add("scroll-box");document.body.appendChild(n);const L=`<p>CSS - Cascading Style Sheets</p>
<h2>Selectors</h2>
<h3>Select by element tag</h3>
<p>use the tag name to select a specific element</p>
<pre><code class="language-css">p {
	color: red;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors">https://developer.mozilla.org/en-US/docs/Web/CSS/Type_selectors</a></p>
<h3>Select by class</h3>
<p>use the class name to select a specific element</p>
<pre><code class="language-css">.small-text {
	font-size: 10px;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors">https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors</a></p>
<h3>Select by id</h3>
<p>use the id to select a specific element</p>
<pre><code class="language-css">#box-1 {
	background: blue;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors">https://developer.mozilla.org/en-US/docs/Web/CSS/ID_selectors</a></p>
<h3>pseudo-class (hover)</h3>
<p>add style when users hover on a specific element</p>
<pre><code class="language-css">p:hover {
	color: green;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes">https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes</a></p>
<hr>
<h2>Colors</h2>
<h3>Background</h3>
<pre><code class="language-css">p {
	background: red;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/background">https://developer.mozilla.org/en-US/docs/Web/CSS/background</a></p>
<h3>Color</h3>
<pre><code class="language-css">p {
	color: red;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color">https://developer.mozilla.org/en-US/docs/Web/CSS/color</a></p>
<h4>Color types</h4>
<h5>Keyword colors</h5>
<pre><code class="language-css">p {
	background: red;
}
</code></pre>
<p>info: https://www.w3.org/wiki/CSS/Properties/color/keywords#Color_keywords</p>
<h5>Hexadecimal colors</h5>
<pre><code class="language-css">p {
	background: #ff0000;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_colors_hex.asp">https://www.w3schools.com/css/css_colors_hex.asp</a></p>
<h5>RGB colors</h5>
<pre><code class="language-css">p {
	background: rgb(255,0,0);
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors">https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_colors</a></p>
<h5>Gradient</h5>
<pre><code class="language-css">p {
	background: linear-gragient(#ff0000, #00ff00);
}
</code></pre>
<p>info: <a href="https://cssgradient.io/">https://cssgradient.io/</a></p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/width">https://developer.mozilla.org/en-US/docs/Web/CSS/width</a></p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/height">https://developer.mozilla.org/en-US/docs/Web/CSS/height</a></p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/margin">https://developer.mozilla.org/en-US/docs/Web/CSS/margin</a></p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/padding">https://developer.mozilla.org/en-US/docs/Web/CSS/padding</a></p>
<h3>Border</h3>
<pre><code class="language-css">div {
	border: 1px solid red;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border">https://developer.mozilla.org/en-US/docs/Web/CSS/border</a></p>
<h3>Border radius</h3>
<pre><code class="language-css">div {
	border-radius: 12px;
}

div {
	border-radius: 12px 10px 8px 6px;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius">https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius</a></p>
<h3>Box shadow</h3>
<pre><code class="language-css">div {
	box-shadow: 1px 1px 5px red;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow">https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow</a></p>
<h3>Transform</h3>
<pre><code class="language-css">/* Keyword values */
transform: none;

/* Function values */
transform: matrix(1, 2, 3, 4, 5, 6);
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
transform: perspective(17px);
transform: rotate(0.5turn);
transform: rotate3d(1, 2, 3, 10deg);
transform: rotateX(10deg);
transform: rotateY(10deg);
transform: rotateZ(10deg);
transform: translate(12px, 50%);
transform: translate3d(12px, 50%, 3em);
transform: translateX(2em);
transform: translateY(3in);
transform: translateZ(2px);
transform: scale(2, 0.5);
transform: scale3d(2.5, 1.2, 0.3);
transform: scaleX(2);
transform: scaleY(0.5);
transform: scaleZ(0.3);
transform: skew(30deg, 20deg);
transform: skewX(30deg);
transform: skewY(1.07rad);

/* Multiple function values */
transform: translateX(10px) rotate(10deg) translateY(5px);
transform: perspective(500px) translate(10px, 0, 20px) rotateY(3deg);

/* Global values */
transform: inherit;
transform: initial;
transform: revert;
transform: revert-layer;
transform: unset;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">https://developer.mozilla.org/en-US/docs/Web/CSS/transform</a></p>
<hr>
<h2>Text</h2>
<h3>Text align</h3>
<pre><code class="language-css">h1 {
	text-align: center;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align">https://developer.mozilla.org/en-US/docs/Web/CSS/text-align</a></p>
<h3>Text decoration</h3>
<pre><code class="language-css">h1 {
	text-decoration: underline;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration">https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration</a></p>
<h3>Text transform</h3>
<pre><code class="language-css">h1 {
	text-transform: uppercase;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform">https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform</a></p>
<h3>Font size</h3>
<pre><code class="language-css">h1 {
	font-size: 30px;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-size">https://developer.mozilla.org/en-US/docs/Web/CSS/font-size</a></p>
<h3>Line height</h3>
<pre><code class="language-css">h1 {
	font-size: 30px;
	font-size: 1.5;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/line-height">https://developer.mozilla.org/en-US/docs/Web/CSS/line-height</a></p>
<h3>Font style</h3>
<pre><code class="language-css">h1 {
	font-style: italic;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-style">https://developer.mozilla.org/en-US/docs/Web/CSS/font-style</a></p>
<h3>Font weight</h3>
<pre><code class="language-css">h1 {
	font-weight: bold;
}

h1 {
	font-weight: 700;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight</a></p>
<h3>Font family</h3>
<pre><code class="language-css">h1 {
	font-family: 'Courier New', monospace;
}
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-family">https://developer.mozilla.org/en-US/docs/Web/CSS/font-family</a></p>
<h3>Add font</h3>
<pre><code class="language-css">@font-face {  font-family: myFont;  
	src: url(myFont.woff);
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/cssref/css3_pr_font-face_rule.php">https://www.w3schools.com/cssref/css3_pr_font-face_rule.php</a></p>
<h3>Add Google Font</h3>
<p>info: <a href="https://fonts.google.com">https://fonts.google.com</a></p>
<hr>
<h2>List style</h2>
<pre><code class="language-css">ul {
	list-style: square;
}

/* type */
list-style: square;

/* image */
list-style: url(&quot;../img/shape.png&quot;);

/* position */
list-style: inside;

/* two values */
list-style: georgian outside;
list-style: url(&quot;img/pip.svg&quot;) inside;

/* three values */
list-style: lower-roman url(&quot;img/shape.png&quot;) outside;

/* Keyword value */
list-style: none;

/* Global values */
list-style: inherit;
list-style: initial;
list-style: revert;
list-style: revert-layer;
list-style: unset;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/list-style">https://developer.mozilla.org/en-US/docs/Web/CSS/list-style</a></p>
<hr>
<h2>Image</h2>
<h3>responsive image</h3>
<pre><code class="language-css">img {
  max-width: 100%;
  height: auto;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://www.w3schools.com/css/css_rwd_images.asp</a></p>
<hr>
<h2>Layout</h2>
<h3>Display</h3>
<pre><code class="language-css">div {
	display: block | inline | flex | grid;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Web/CSS/display</a></p>
<h3>Position</h3>
<pre><code class="language-css">div {
	position: relative | absolute | fixed | sticky;
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Web/CSS/position</a></p>
<h3>Flexbox</h3>
<pre><code class="language-css">div {
   display: flex;
   flex-direction: row | row-reverse | column | column-reverse; /* optional */
   justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right; /* optional */
   align-items: stretch | flex-start | flex-end | center; /* optional */
}
</code></pre>
<p>info:
<a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox</a></p>
<p><a href="https://www.w3schools.com/css/css_rwd_images.asp">https://css-tricks.com/snippets/css/a-guide-to-flexbox/</a></p>
<h3>grid</h3>
<pre><code class="language-css">div {
	display: grid;
	grid: /* grid-template-rows */ / /* grid-template-columns */
}
</code></pre>
<p>info: <a href="https://www.w3schools.com/css/css_rwd_images.asp">https://developer.mozilla.org/en-US/docs/Web/CSS/grid</a></p>
<p><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids</a></p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">https://developer.mozilla.org/en-US/docs/Web/CSS/animation</a></p>
<hr>
<h2>Media queries</h2>
<h3>Breakpoints</h3>
<p>Mobiles: &lt; 480px</p>
<p>Tablets: 481px - 768px</p>
<p>Laptops: &gt; 768px</p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries</a></p>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties">https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties</a></p>
<hr>
`;let d=document.createElement("div");d.classList.add("content");d.setAttribute("id","css");d.innerHTML=L;document.querySelector("#section-css").appendChild(d);const W=`<p>Hyper Text Markup Language
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
`;let c=document.createElement("div");c.classList.add("content");c.setAttribute("id","html");c.innerHTML=W;document.querySelector("#section-html").appendChild(c);const T=`<h2>Comment</h2>
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
<p>info: <a href="https://www.w3schools.com/js/js_operators.asp">https://www.w3schools.com/js/js_operators.asp</a></p>
<hr>
<h2>Events</h2>
<h3>add event listener</h3>
<pre><code class="language-js">window.addEventListener( &quot;click&quot;, console.log(&quot;clicked&quot;) );
window.addEventListener( &quot;scroll&quot;, console.log(&quot;scrolled&quot;) );
window.addEventListener( &quot;mouseover&quot;, console.log(&quot;hovered&quot;) );
</code></pre>
<p>info: <a href="https://www.w3schools.com/jsref/met_document_addeventlistener.asp">https://www.w3schools.com/jsref/met_document_addeventlistener.asp</a></p>
<h3>setInterval()</h3>
<h3>setTimeout()</h3>
<hr>
`;let p=document.createElement("div");p.classList.add("content");p.setAttribute("id","js");p.innerHTML=T;document.querySelector("#section-js").appendChild(p);const M=`<h1>Classwork 01: Inspect</h1>
<p>Week 01</p>
<p>Utilize the inspection tool within a web browser to examine an assigned website and analyze its logic, if present, concerning the following aspects:</p>
<ul>
<li>Typography</li>
<li>Color scheme</li>
<li>Grid layout</li>
<li>Spacing</li>
<li>Illustrations</li>
<li>Icons</li>
</ul>
<p>Present and discuss your findings.</p>
<hr>
<h1>Classwork 02: Moving Page</h1>
<p>Week 02</p>
<p>Choose an audiovisual content such as a movie, music, anime, etc., as the starting point for a webpage design.</p>
<ul>
<li>Use HTML to create elements on the webpage.</li>
<li>Use CSS to style the created elements and CSS Animation to make the elements move.</li>
</ul>
<hr>
<h1>Classwork 03: JS</h1>
<p>Week 03</p>
<p>Create a webpage with added JavaScript to implement interactivity, featuring either the same content as Classwork 02 or new content.</p>
<ul>
<li>Use HTML to create elements on a webpage.</li>
<li>Use CSS to style the created elements.</li>
<li>Use JS to add interactivity on a webpage.</li>
</ul>
<hr>
`;let h=document.createElement("div");h.classList.add("content");h.setAttribute("id","classwork-inspect");h.innerHTML=M;document.querySelector("#section-classworks").appendChild(h);const k=`<h1>Assessment Criteria</h1>
<table>
<thead>
<tr>
<th></th>
<th>%</th>
</tr>
</thead>
<tbody>
<tr>
<td>Attendance</td>
<td>10</td>
</tr>
<tr>
<td>Classworks</td>
<td>30</td>
</tr>
<tr>
<td>Final Project</td>
<td>60</td>
</tr>
</tbody>
</table>
<h1>Schedule</h1>
<h2>Group 1</h2>
<table>
<thead>
<tr>
<th>08/01/24 Monday</th>
<th>09/01/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>- Basic HTML, CSS<br>- Explore websites<br>- Classwork:</td>
<td>Presentation on Classwork 01</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>15/01/24 Monday</th>
<th>16/01/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>- CSS animation<br>- Responsive web design</td>
<td>Presentation on Classwork 02</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>22/01/24 Monday</th>
<th>23/01/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Javascript / Event listener</td>
<td>Presentation on Classwork 03</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>29/01/24 Monday</th>
<th>30/01/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/ Ideation<br>/ Visualization</td>
<td>Project tutorial<br>/ Ideation<br>/ Visualization</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>05/02/24 Monday</th>
<th>06/02/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/Visualization<br>/ Production</td>
<td>Project tutorial<br>/Visualization<br>/ Production</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>12/02/24 Monday</th>
<th>13/02/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/ Production</td>
<td>Project tutorial<br>/ Production</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>19/02/24 Monday</th>
<th>20/02/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/ Production</td>
<td>Project tutorial<br>/ Production</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>26/02/24 Monday</th>
<th>27/02/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Final presentation</td>
</tr>
</tbody>
</table>
<hr>
<h2>Group 2</h2>
<table>
<thead>
<tr>
<th>04/03/24 Monday</th>
<th>05/03/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>- Basic HTML, CSS<br>- Explore websites<br>- Classwork:</td>
<td>Presentation on Classwork 01</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>11/03/24 Monday</th>
<th>12/03/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>- CSS animation<br>- Responsive web design</td>
<td>Presentation on Classwork 02</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>18/03/24 Monday</th>
<th>19/03/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Javascript / Event listener</td>
<td>Presentation on Classwork 03</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>25/03/24 Monday</th>
<th>26/03/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/ Ideation<br>/ Visualization</td>
<td>Project tutorial<br>/ Ideation<br>/ Visualization</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>01/04/24 Monday</th>
<th>02/04/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/Visualization<br>/ Production</td>
<td>Project tutorial<br>/Visualization<br>/ Production</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>08/04/24 Monday</th>
<th>09/04/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>-</td>
<td>Project tutorial<br>/ Production</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>15/04/24 Monday</th>
<th>16/04/24 Tuesday</th>
</tr>
</thead>
</table>
<table>
<thead>
<tr>
<th>22/04/24 Monday</th>
<th>23/04/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/ Production</td>
<td>Project tutorial<br>/ Production</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>29/04/24 Monday</th>
<th>30/04/24 Tuesday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Project tutorial<br>/ Production</td>
<td>Final presentation</td>
</tr>
</tbody>
</table>
<hr>
<table>
<thead>
<tr>
<th>03/05/24 Friday</th>
</tr>
</thead>
<tbody>
<tr>
<td>Final Screening for Live Action and Motion/Animation (to be confirmed)</td>
</tr>
</tbody>
</table>
`;let m=document.createElement("div");m.classList.add("content");m.setAttribute("id","details");m.innerHTML=k;document.querySelector("#section-details").appendChild(m);const E=`<p>In <em>Species of Spaces</em>, Georges Perec writes about space in various aspects: how it can be observed, experienced, and interacted with through different forms of writing such as essays, diaries, (concrete) poetry, lists of tasks, timetables, etc. His works consist of a blend of fact and fiction, intertwining the two, leading readers to explore novels, movies, and various other works of his contemporaries.</p>
<p>For this project, we will explore the spaces within and between everyday objects. Each object will be examined from various aspects, such as ideas, concepts, narratives, etc., either in the form of fact or fiction and will be executed through graphic design, utilizing a webpage as the medium.</p>
<p>Course topics:</p>
<ul>
<li>Creating webpages with HTML</li>
<li>Styling webpage elements using CSS</li>
<li>Implementing interactivity with JavaScript</li>
<li>Utilizing text editors for web development</li>
<li>Understanding webpages as a medium</li>
</ul>
`;let u=document.createElement("div");u.classList.add("content");u.setAttribute("id","project");u.innerHTML=E;document.querySelector("#section-project").appendChild(u);
