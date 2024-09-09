import"./menu-Dm3LOs2Z.js";import n from"https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";const e=`<pre><code class="language-mermaid">%%{ 
	init: { 
		'theme': 'base', 
		'themeVariables': { 
			'primaryColor': '#ff0000',
			'fontSize': '14px',
			'primaryTextColor': '#fff',
			'lineColor': '#0000ff',
			'secondaryColor': '#006100',
			'clusterBkg': '#eff',
			'titleColor': '#a99'
		}
	}
}%%

flowchart TB

subgraph Parent
direction TB
subgraph Step1
direction TB
1[create a div] 
--&gt; 1.html{{div}} --&gt; 1.css{{display: grid;}}
end

Step1 --&gt; Step2

subgraph Step2
direction TB
2[How many columns?]
2 -- 1 column ---&gt; 2.1{{grid-template-columns: 1fr;}}
2 -- 2 columns ---&gt; 2.2.1{{grid-template-columnns: 1fr 1fr;}}
2.2.1 --&gt; 3[Gap between columns?]
3 -- Column gap ---&gt; 3.1{{column-gap: 10px;}}

2.1 -----&gt; 4
3.1 ---&gt; 4[How many rows?]
4 -- 1 row ---&gt; 4.1{{grid-template-rows: 1fr;}}
4 -- 2 rows ---&gt; 4.2{{grid-template-rows: 1fr 1fr;}} --&gt; 4.2.1[Gap between rows?] -- Row gap ---&gt; 4.2.1.1.1{{row-gap: 10px;}}
end

Step2 --&gt; Step3
subgraph Step3
direction TB
5[Most inner div?]
%% 5 -- No ----&gt; 1 %%


5 -- Yes ---&gt; 6[alignment of item inside]
6 -- horizontal --&gt; 6.1{{justify-items: center;}}
6 -- vertical --&gt; 6.2{{align-items: center;}}
end
end

Step3 --&gt; Child

subgraph Child
direction TB
7[put an element inside]
7 -- Text --&gt; 7.1(h1, h2, h3, h4, h5, h6, p) 
7.1--&gt; 7.1.1html{{h1}}
7.1--&gt; 7.1.2html{{h2}}
7.1--&gt; 7.1.3html{{h3}}
7.1--&gt; 7.1.4html{{h4}}
7.1--&gt; 7.1.5html{{h5}}
7.1--&gt; 7.1.6html{{h6}}
7.1--&gt; 7.1.7html{{p}}

7 -- Image --&gt; 7.2
7.2(&quot;\`wrap img tag with div 
and use width 100% on img tag\`&quot;)
--&gt; 7.2html{{img}}
end

classDef text fill:#404,color:#fff;
classDef css fill:#f6f,stroke:#333,color:#fff;
classDef html fill:#fff,color:#000;

class 1,2,3,4,4.2.1,5,6,7,7.1,7.2 text
class 1.html,7.1.1html,7.1.2html,7.1.3html,7.1.4html,7.1.5html,7.1.6html,7.1.7html,7.2html html
class 1.css,2.1,2.2.1,3.1,4.1,4.2,4.2.1.1.1,6.1,6.2 css
</code></pre>
`;let t=document.createElement("div");t.classList.add("content");t.setAttribute("id","steps");t.innerHTML=e;document.querySelector("#section-steps").appendChild(t);n.initialize({startOnLoad:!1});n.run({nodes:document.querySelectorAll("code.language-mermaid")});
