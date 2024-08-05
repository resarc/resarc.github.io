import"./menu-D07ve1ke.js";const n=`<h1>HTML</h1>
<h2>Link</h2>
<pre><code class="language-html">&lt;a href=&quot;www.google.com&quot;&gt;Google&lt;/a&gt;
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a</a></p>
<hr>
<h2>Responsive design</h2>
<h3>Media queries</h3>
<p>Breakpoints</p>
<ul>
<li>Mobiles: &lt; 480px</li>
<li>Tablets: 481px - 768px</li>
<li>Laptops: &gt; 768px</li>
</ul>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries</a></p>
`;let e=document.createElement("div");e.classList.add("content");e.setAttribute("id","week-02");e.innerHTML=n;document.querySelector("#section-week-02").appendChild(e);
