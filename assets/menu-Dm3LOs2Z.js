(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();let n=document.createElement("div");n.classList.add("menu-container");n.innerHTML=`
<a href="/projects">Projects</a>
<a href="/week-01">Week 01</a>
<a href="/week-02">Week 02</a>
<a href="/week-03">Week 03</a>
<a href="/week-04">Week 04</a>
<a href="/steps">Steps</a>
`;document.querySelector(".menu").appendChild(n);
