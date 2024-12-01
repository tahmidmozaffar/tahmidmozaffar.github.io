(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{TRom:function(e,t,a){"use strict";a.r(t);var n=a("TJpk"),r=a.n(n),l=a("q1tI"),o=a.n(l),i=a("obyI"),c=a.n(i),s=a("3yDT"),m=a("ZO1O"),u=a("aAma"),d=a("vOnD");var p=d.default.div`
  margin-top: 50px;
  text-align: center;
`,g=a("ww3E");var E=function(e){let{previousUrl:t,nextUrl:a,isFirst:n=!1,isLast:r=!1}=e;return o.a.createElement(p,null,!n&&o.a.createElement(g.a,{to:t},"← Newer Posts"),!r&&o.a.createElement(g.a,{to:a},"Older Posts →"))},f=a("ZtnR"),v=a("Nr8n"),x=a("L1Cw");var w=d.default.div`
  text-align: center;
`,b=a("+ZDr"),h=a.n(b);var y=Object(d.default)(h.a)`
  color: #3e465b;
  text-decoration: none;

  &:hover {
    color: ${c.a.primaryColor};
  }
`;var k=d.default.span`
  color: #666d71;
  display: block;
  font-size: 1.6em;
  margin: 0;
  text-align: center;
`;var C=Object(d.default)(h.a)`
  color: #666d71;
  display: inline-block;
  font-size: 14px;
  margin-top: 50px;
  text-decoration: none;

  &:hover {
    color: ${c.a.primaryColor};
  }  
`;var O=function(e){let{date:t,title:a,excerpt:n,slug:r,image:l}=e;return o.a.createElement(w,null,l&&o.a.createElement(y,{to:r},o.a.createElement(f.a,{sizes:l.childImageSharp.sizes})),o.a.createElement(v.a,null,o.a.createElement(y,{to:r},a)),o.a.createElement(k,null,t),o.a.createElement(x.a,null,n),o.a.createElement(C,{to:r},"Continue Reading →"))};t.default=e=>{let{pageContext:t}=e;const{group:a,index:n,pageCount:l}=t,i=n-1==1?"":(n-1).toString(),d=(n+1).toString();return o.a.createElement(s.a,null,o.a.createElement(u.a,null,o.a.createElement(r.a,{title:`${c.a.title} | ${c.a.author}`,htmlAttributes:{lang:"en"}},o.a.createElement("meta",{name:"description",content:`${c.a.title} | ${c.a.description}`})),a.map(e=>{let{node:t}=e;return o.a.createElement(m.a,{key:t.fields.slug},o.a.createElement(O,{date:t.frontmatter.date,title:t.frontmatter.title,excerpt:t.excerpt,image:t.frontmatter.featuredImage,slug:t.fields.slug}))}),o.a.createElement(E,{isFirst:1===n,isLast:n===l,nextUrl:d,previousUrl:i})))}}}]);
//# sourceMappingURL=component---src-templates-index-js-b0b718959af28c9bd55e.js.map