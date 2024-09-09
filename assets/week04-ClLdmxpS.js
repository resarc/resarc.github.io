import"./menu-Dm3LOs2Z.js";const t=`<h1>JavaScript</h1>
<p>Comment</p>
<pre><code class="language-js">// a comment
/* also a comment */
</code></pre>
<hr>
<h2>Variables</h2>
<pre><code class="language-js">let age = 23; // Number
let name = &quot;John&quot;; // String
let opened = true; // Boolean
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let">https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let</a></p>
<hr>
<h2>Selectors</h2>
<h3>querySelector()</h3>
<p>Select the first element that matches the query</p>
<pre><code class="language-js">let li = document.querySelector(&quot;li&quot;);
let day = document.querySelector(&quot;.day&quot;);
let paragraph = document.querySelector(&quot;ul#list p&quot;);
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector">https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector</a></p>
<hr>
<h2>Element manipulation</h2>
<h3>add classes</h3>
<pre><code class="language-js">jslet divElement = document.querySelector(&quot;div&quot;);
divElement.classList.add(&quot;small&quot;);
divElement.classList.remove(&quot;big&quot;);
</code></pre>
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/classList">https://developer.mozilla.org/en-US/docs/Web/API/Element/classList</a></p>
`;let e=document.createElement("div");e.classList.add("content");e.setAttribute("id","week-04");e.innerHTML=t;document.querySelector("#section-week-04").appendChild(e);
