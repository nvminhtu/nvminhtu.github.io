(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6z7D":function(e,t,a){e.exports={tags:"tag-list-module--tags--3uJ7V"}},FT44:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("ph5I"),c=a.n(o),u=function(e){var t=e.children,a=e.to,n=e.buttonStyle;return r.a.createElement(l.Link,{to:a,className:c.a.button+" "+n},t)};u.defaultProps={buttonStyle:""};var i=u},GWjj:function(e,t,a){e.exports={container:"post-list-module--container--1ANXI",post:"post-list-module--post--39h-F",cover:"post-list-module--cover--2O8pN",content:"post-list-module--content--llWjm"}},JIeO:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("ma3e"),o=a("FT44"),c=a("obyI"),u=a.n(c),i=a("Al62"),s=a.n(i),m=a("qux6"),p=a.n(m),d=function(e){var t=e.prevPage,a=e.nextPage;return r.a.createElement("div",{className:p.a.container},t?r.a.createElement(o.a,{to:s.a.resolvePageUrl(u.a.pages.archive,t),buttonStyle:p.a.buttonLeft},r.a.createElement(l.a,null),r.a.createElement("span",null,"Newer posts")):null,a?r.a.createElement(o.a,{to:s.a.resolvePageUrl(u.a.pages.archive,a),buttonStyle:p.a.buttonRight},r.a.createElement("span",null,"Older posts"),r.a.createElement(l.b,null)):null)}},bpH6:function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return m}));var n=a("q1tI"),r=a.n(n),l=a("I/Ru"),o=a("jNNy"),c=a("fC2M"),u=a("JIeO"),i=a("obyI"),s=a.n(i),m="3350011143";t.default=function(e){var t=e.data,a=e.pageContext,n=a.archivePage,i=n>1?n-1:null,m=n<a.lastArchivePage?n+1:null;return r.a.createElement(l.a,{title:"Archive"},r.a.createElement(o.a,{title:"Archive | Page "+n,description:"Old posts",path:s.a.pages.archive}),r.a.createElement(c.a,{posts:t.allMarkdownRemark.edges}),r.a.createElement(u.a,{prevPage:i,nextPage:m}))}},dkXr:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));a("f3/d"),a("Vd3H");var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("6z7D"),c=a.n(o),u=a("obyI"),i=a.n(u),s=a("Al62"),m=a.n(s),p=function(e){var t=e.tags;return r.a.createElement("div",{className:c.a.tags},t.filter((function(e,a){return a===t.indexOf(e)})).sort().map((function(e){return r.a.createElement(l.Link,{to:m.a.resolvePageUrl(i.a.pages.tag,e),key:e},i.a.tags[e].name||m.a.capitalize(e))})))}},fC2M:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("q1tI"),r=a.n(n),l=a("Wbzz"),o=a("9eSz"),c=a.n(o),u=a("GWjj"),i=a.n(u),s=a("dkXr"),m=a("Al62"),p=a.n(m),d=function(e){var t=e.posts;return r.a.createElement("div",{className:i.a.container},t.map((function(e,t){var a=e.node.frontmatter,n=a.title,o=a.date,u=a.path,m=a.tags,d=a.cover,v=a.excerpt;return r.a.createElement("div",{key:n,className:i.a.post},r.a.createElement("div",{className:i.a.cover},r.a.createElement(l.Link,{to:p.a.resolvePageUrl(u)},r.a.createElement(c.a,{fluid:d.childImageSharp.fluid,title:v,alt:n}))),r.a.createElement("div",{className:i.a.content},r.a.createElement(l.Link,{to:p.a.resolvePageUrl(u)},o?r.a.createElement("label",null,o):null,r.a.createElement("h2",null,n),r.a.createElement("p",null,v)),r.a.createElement(s.a,{tags:m})))})))}},ph5I:function(e,t,a){e.exports={button:"button-module--button--cNiW9"}},qux6:function(e,t,a){e.exports={container:"archive-pagination-module--container--18uDF",buttonLeft:"archive-pagination-module--buttonLeft--25vg7",buttonRight:"archive-pagination-module--buttonRight--2ZMPL"}}}]);
//# sourceMappingURL=component---src-templates-archive-archive-js-b68a3d29289a3d55b344.js.map