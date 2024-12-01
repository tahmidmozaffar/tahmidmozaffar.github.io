(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"+6XX":function(t,e,n){var r=n("y1pI");t.exports=function(t){return r(this.__data__,t)>-1}},"/9aa":function(t,e,n){var r=n("NykK"),o=n("ExA7");t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},"2gN3":function(t,e,n){var r=n("Kz5y")["__core-js_shared__"];t.exports=r},"3Fdi":function(t,e){var n=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return n.call(t)}catch(e){}try{return t+""}catch(e){}}return""}},"44Ds":function(t,e,n){var r=n("e4Nc");function o(t,e){if("function"!=typeof t||null!=e&&"function"!=typeof e)throw new TypeError("Expected a function");var n=function(){var r=arguments,o=e?e.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=t.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(o.Cache||r),n}o.Cache=r,t.exports=o},"4kuk":function(t,e,n){var r=n("SfRM"),o=n("Hvzi"),a=n("u8Dt"),i=n("ekgI"),c=n("JSQU");function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,t.exports=l},"4uTw":function(t,e,n){var r=n("Z0cm"),o=n("9ggG"),a=n("GNiM"),i=n("dt0z");t.exports=function(t,e){return r(t)?t:o(t,e)?[t]:a(i(t))}},"9Nap":function(t,e,n){var r=n("/9aa");t.exports=function(t){if("string"==typeof t||r(t))return t;var e=t+"";return"0"==e&&1/t==-1/0?"-0":e}},"9ggG":function(t,e,n){var r=n("Z0cm"),o=n("/9aa"),a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;t.exports=function(t,e){if(r(t))return!1;var n=typeof t;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=t&&!o(t))||(i.test(t)||!a.test(t)||null!=e&&t in Object(e))}},AP2z:function(t,e,n){var r=n("nmnc"),o=Object.prototype,a=o.hasOwnProperty,i=o.toString,c=r?r.toStringTag:void 0;t.exports=function(t){var e=a.call(t,c),n=t[c];try{t[c]=void 0;var r=!0}catch(l){}var o=i.call(t);return r&&(e?t[c]=n:delete t[c]),o}},Cwc5:function(t,e,n){var r=n("NKxu"),o=n("Npjl");t.exports=function(t,e){var n=o(t,e);return r(n)?n:void 0}},E2jh:function(t,e,n){var r,o=n("2gN3"),a=(r=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+r:"";t.exports=function(t){return!!a&&a in t}},EpBk:function(t,e){t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},ExA7:function(t,e){t.exports=function(t){return null!=t&&"object"==typeof t}},GNiM:function(t,e,n){var r=n("I01J"),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,a=/\\(\\)?/g,i=r((function(t){var e=[];return 46===t.charCodeAt(0)&&e.push(""),t.replace(o,(function(t,n,r,o){e.push(r?o.replace(a,"$1"):n||t)})),e}));t.exports=i},GoyQ:function(t,e){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},H8j4:function(t,e,n){var r=n("QkVE");t.exports=function(t,e){var n=r(this,t),o=n.size;return n.set(t,e),this.size+=n.size==o?0:1,this}},Hvzi:function(t,e){t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},I01J:function(t,e,n){var r=n("44Ds");t.exports=function(t){var e=r(t,(function(t){return 500===n.size&&n.clear(),t})),n=e.cache;return e}},JHgL:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).get(t)}},JSQU:function(t,e,n){var r=n("YESw");t.exports=function(t,e){var n=this.__data__;return this.size+=this.has(t)?0:1,n[t]=r&&void 0===e?"__lodash_hash_undefined__":e,this}},KMkd:function(t,e){t.exports=function(){this.__data__=[],this.size=0}},KfNM:function(t,e){var n=Object.prototype.toString;t.exports=function(t){return n.call(t)}},Kz5y:function(t,e,n){var r=n("WFqU"),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();t.exports=a},NKxu:function(t,e,n){var r=n("lSCD"),o=n("E2jh"),a=n("GoyQ"),i=n("3Fdi"),c=/^\[object .+?Constructor\]$/,l=Function.prototype,p=Object.prototype,u=l.toString,s=p.hasOwnProperty,h=RegExp("^"+u.call(s).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!a(t)||o(t))&&(r(t)?h:c).test(i(t))}},Npjl:function(t,e){t.exports=function(t,e){return null==t?void 0:t[e]}},NykK:function(t,e,n){var r=n("nmnc"),o=n("AP2z"),a=n("KfNM"),i=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":i&&i in Object(t)?o(t):a(t)}},QkVE:function(t,e,n){var r=n("EpBk");t.exports=function(t,e){var n=t.__data__;return r(e)?n["string"==typeof e?"string":"hash"]:n.map}},SfRM:function(t,e,n){var r=n("YESw");t.exports=function(){this.__data__=r?r(null):{},this.size=0}},VZoM:function(t,e,n){"use strict";const r=n("vOnD").default.h2`
    color: #3e465b;
    font-size: 22px;
    font-weight: 700;
    line-height: 1.5;
    margin: 25px 50px 15px;
`;e.a=r},WFqU:function(t,e,n){(function(e){var n="object"==typeof e&&e&&e.Object===Object&&e;t.exports=n}).call(this,n("eKGF"))},Xi7e:function(t,e,n){var r=n("KMkd"),o=n("adU4"),a=n("tMB7"),i=n("+6XX"),c=n("Z8oC");function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,t.exports=l},YESw:function(t,e,n){var r=n("Cwc5")(Object,"create");t.exports=r},Z0cm:function(t,e){var n=Array.isArray;t.exports=n},Z8oC:function(t,e,n){var r=n("y1pI");t.exports=function(t,e){var n=this.__data__,o=r(n,t);return o<0?(++this.size,n.push([t,e])):n[o][1]=e,this}},ZWtO:function(t,e,n){var r=n("4uTw"),o=n("9Nap");t.exports=function(t,e){for(var n=0,a=(e=r(e,t)).length;null!=t&&n<a;)t=t[o(e[n++])];return n&&n==a?t:void 0}},adU4:function(t,e,n){var r=n("y1pI"),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,n=r(e,t);return!(n<0)&&(n==e.length-1?e.pop():o.call(e,n,1),--this.size,!0)}},dt0z:function(t,e,n){var r=n("zoYe");t.exports=function(t){return null==t?"":r(t)}},e4Nc:function(t,e,n){var r=n("fGT3"),o=n("k+1r"),a=n("JHgL"),i=n("pSRY"),c=n("H8j4");function l(t){var e=-1,n=null==t?0:t.length;for(this.clear();++e<n;){var r=t[e];this.set(r[0],r[1])}}l.prototype.clear=r,l.prototype.delete=o,l.prototype.get=a,l.prototype.has=i,l.prototype.set=c,t.exports=l},eUgh:function(t,e){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},ebwN:function(t,e,n){var r=n("Cwc5")(n("Kz5y"),"Map");t.exports=r},ekgI:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return r?void 0!==e[t]:o.call(e,t)}},fGT3:function(t,e,n){var r=n("4kuk"),o=n("Xi7e"),a=n("ebwN");t.exports=function(){this.size=0,this.__data__={hash:new r,map:new(a||o),string:new r}}},"k+1r":function(t,e,n){var r=n("QkVE");t.exports=function(t){var e=r(this,t).delete(t);return this.size-=e?1:0,e}},lSCD:function(t,e,n){var r=n("NykK"),o=n("GoyQ");t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},ljhN:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},mwIZ:function(t,e,n){var r=n("ZWtO");t.exports=function(t,e,n){var o=null==t?void 0:r(t,e);return void 0===o?n:o}},nmnc:function(t,e,n){var r=n("Kz5y").Symbol;t.exports=r},pSRY:function(t,e,n){var r=n("QkVE");t.exports=function(t){return r(this,t).has(t)}},tMB7:function(t,e,n){var r=n("y1pI");t.exports=function(t){var e=this.__data__,n=r(e,t);return n<0?void 0:e[n][1]}},u8Dt:function(t,e,n){var r=n("YESw"),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(r){var n=e[t];return"__lodash_hash_undefined__"===n?void 0:n}return o.call(e,t)?e[t]:void 0}},y1pI:function(t,e,n){var r=n("ljhN");t.exports=function(t,e){for(var n=t.length;n--;)if(r(t[n][0],e))return n;return-1}},yZlL:function(t,e,n){"use strict";n.r(e);var r=n("dI71"),o=n("TJpk"),a=n.n(o),i=n("mwIZ"),c=n.n(i),l=n("q1tI"),p=n.n(l),u=n("obyI"),s=n.n(u),h=n("3yDT"),f=n("vOnD");var d=f.default.article`
    color: #65738c;
    font-size: 16px;

    a {
        color: ${s.a.primaryColor};
        font-weight: 700;
        text-decoration: none;

        &:hover {
            text-decoration: underline;
        }
    }

    h1 {
        color: #3e465b;
        font-size: 30px;
        font-weight: 700;
        line-height: 1.5;
        margin: 25px 50px 15px;
    }

    h2 {
        color: #3e465b;
        font-size: 22px;
        font-weight: 700;
        line-height: 1.5;
        margin: 25px 50px 15px;
    }

    h3 {
        color: #3e465b;
        font-size: 17px;
        font-weight: 700;
        line-height: 1.5;
        margin: 25px 50px 15px;
    }

    h4 {
        color: #3e465b;
        font-weight: 700;
        line-height: 1.5;
        margin: 25px 50px 15px;
    }

    h5,
    h6 {
        color: #3e465b;
        font-weight: 700;
        line-height: 1.5;
        margin: 25px 50px 15px;
    }

    p {
        line-height: 1.7;
        margin: 15px 50px;
    }

    blockquote {
        border-left: 5px solid #e0e6ed;
        line-height: 1.7;
        margin: 15px 50px 15px 75px;
        padding: 10px 10px 10px 15px;

        p {
            margin: 0;
        }
    }

    ul,
    ol {
        line-height: 1.7;
        margin: 15px 0;
        padding: 0 50px 0 100px;

        p,
        ul,
        ol {
            margin: 0;
        }

        ul,
        ol {
            padding: 0 0 0 30px;
        }
    }

    img {
        margin: 15px 0;
    }
`;var v=f.default.div`
    h1 {
        color: #3e465b;
        font-size: 35px;
        line-height: 1.5;
        margin: 0;
        padding: 0 30px;
        text-align: center;
    }

    p {
        color: #666d71;
        display: block;
        font-size: 1.6em;
        margin: 0;
        text-align: center;
    }

    span {
        background: #9c9da3;
        display: block;
        margin: 50px auto;
        height: 1px;
        width: 150px;
    }
`,x=n("ZO1O"),g=n("aAma"),m=n("ZtnR"),y=n("VZoM");var w=f.default.div`
    margin-top: 50px;
    text-align: center;
`;var _=f.default.a`
    border: 1px solid #bfc8d2;
    border-radius: 15px;
    display: inline-block;
    margin: 5px;
    padding: 5px 15px;
    text-decoration: none;

    svg {
        display: inline-block;
        height: 20px;
        stroke: #6e849c;
        vertical-align: middle;
        width: 20px;
    }

    &:hover {
        border-color: #3e465b;
    }
`;var b=function(t){let{title:e,url:n}=t;const r=encodeURI(n),o=encodeURI(e);return p.a.createElement(w,null,p.a.createElement(y.a,null,"Share This Post"),p.a.createElement(_,{href:"https://www.facebook.com/sharer/sharer.php?u="+r,target:"_blank","aria-label":"Share on Facebook",rel:"noopener"},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"}))),p.a.createElement(_,{href:`https://twitter.com/intent/tweet?text=${o}&url=${r}`,target:"_blank","aria-label":"Share on Twitter",rel:"noopener"},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"}))),p.a.createElement(_,{href:`https://www.linkedin.com/shareArticle?mini=true&url=${r}&title=${o}`,target:"_blank","aria-label":"Share on LinkedIn",rel:"noopener"},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}),p.a.createElement("rect",{x:"2",y:"9",width:"4",height:"12"}),p.a.createElement("circle",{cx:"4",cy:"4",r:"2"}))),p.a.createElement(_,{href:`mailto:?subject=${o}&body=${r}`,"aria-label":"Share by Email",rel:"noopener"},p.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},p.a.createElement("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),p.a.createElement("polyline",{points:"22,6 12,13 2,6"}))))},k=n("Y36/");let E=function(t){function e(){return t.apply(this,arguments)||this}return Object(r.a)(e,t),e.prototype.render=function(){const t=this.props.data.markdownRemark,e=c()(this.props,"data.site.siteMetadata.author");let n="";return"undefined"!=typeof window&&(n=window.location.href),p.a.createElement(h.a,null,p.a.createElement(g.a,null,p.a.createElement(a.a,{title:`${t.frontmatter.title} | ${e}`,htmlAttributes:{lang:"en"}},p.a.createElement("meta",{name:"description",content:`${s.a.title} | ${s.a.description}`})),p.a.createElement("p",{style:{fontSize:"20px"}},p.a.createElement(k.a,{to:"/"},"← Home 🏠")),"e",p.a.createElement(x.a,null,p.a.createElement(v,null,t.frontmatter.featuredImage&&p.a.createElement(m.a,{sizes:t.frontmatter.featuredImage.childImageSharp.sizes}),p.a.createElement("h1",null,t.frontmatter.title),p.a.createElement("p",null,t.frontmatter.date),p.a.createElement("span",null)),p.a.createElement(d,null,p.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}})),s.a.showShareButtons&&p.a.createElement(b,{url:n,title:t.frontmatter.title}))))},e}(p.a.Component);e.default=E},zoYe:function(t,e,n){var r=n("nmnc"),o=n("eUgh"),a=n("Z0cm"),i=n("/9aa"),c=r?r.prototype:void 0,l=c?c.toString:void 0;t.exports=function t(e){if("string"==typeof e)return e;if(a(e))return o(e,t)+"";if(i(e))return l?l.call(e):"";var n=e+"";return"0"==n&&1/e==-1/0?"-0":n}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-244af9e1a16932dba9e2.js.map