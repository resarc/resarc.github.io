import"./menu-Dm3LOs2Z.js";const r=`<h1>Css</h1>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation">https://developer.mozilla.org/en-US/docs/Web/CSS/animation</a></p>
<hr>
<h2>Transform</h2>
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
<p>info: <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform">https://developer.mozilla.org/en-US/docs/Web/CSS/transform</a></p>
`;let n=document.createElement("div");n.classList.add("content");n.setAttribute("id","week-03");n.innerHTML=r;document.querySelector("#section-week-03").appendChild(n);
