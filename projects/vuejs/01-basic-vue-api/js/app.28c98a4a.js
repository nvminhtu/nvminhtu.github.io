(function(t){function e(e){for(var r,o,i=e[0],c=e[1],l=e[2],p=0,f=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},s=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"087f":function(t,e,n){},1515:function(t,e,n){},"193c":function(t,e,n){"use strict";var r=n("087f"),a=n.n(r);a.a},"44ba":function(t,e,n){"use strict";var r=n("8302"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png",transition:"scale-transition",width:"40"}}),n("v-img",{staticClass:"shrink mt-1 hidden-sm-and-down",attrs:{alt:"Vuetify Name",contain:"","min-width":"100",src:"https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png",width:"100"}})],1),n("v-spacer"),n("v-btn",{staticClass:"mr-4",attrs:{color:"yellow"}},[n("router-link",{attrs:{to:{name:"Homepage"}}},[t._v("Homepage")])],1),n("v-btn",{staticClass:"mr-4",attrs:{color:"yellow"}},[n("router-link",{attrs:{to:"/quizzes"}},[t._v("Quizzes")])],1),n("v-btn",{staticClass:"mr-4",attrs:{color:"yellow"}},[n("router-link",{attrs:{to:"/users"}},[t._v("Users")])],1)],1),n("v-content",[n("router-view")],1)],1)},s=[],o={name:"App",components:{},data:function(){return{}}},i=o,c=n("2877"),l=n("6544"),u=n.n(l),p=n("7496"),f=n("40dc"),d=n("8336"),v=n("a75b"),m=n("adda"),h=n("2fa4"),_=Object(c["a"])(i,a,s,!1,null,null,null),y=_.exports;u()(_,{VApp:p["a"],VAppBar:f["a"],VBtn:d["a"],VContent:v["a"],VImg:m["a"],VSpacer:h["a"]});var b=n("8c4f"),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("home-intro")],1)},w=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"home-intro",attrs:{fluid:"","fill-height":""}},[n("v-layout",{attrs:{"justify-center":"","align-center":"",column:"","pa-5":""}},[n("div",{staticClass:"display-3 mb-10 font-weight-black white--text text-xs-center"},[t._v("LEARNING ENGLISH")]),n("div",{staticClass:"display-2 font-weight-black white--text text-xs-center mb-3"},[t._v("FOR FREE")]),n("div",{staticClass:"display-1 font-weight-bold white--text text-xs-center"},[t._v("Quizzes, Test, Practice, Lessons")])])],1)},j=[],C={name:"HomeIntro"},O=C,k=(n("44ba"),n("a523")),E=n("a722"),z=Object(c["a"])(O,x,j,!1,null,"2c0e3d46",null),V=z.exports;u()(z,{VContainer:k["a"],VLayout:E["a"]});var I={name:"Homepage",components:{HomeIntro:V}},P=I,$=Object(c["a"])(P,g,w,!1,null,null,null),H=$.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h3",[t._v("Users")]),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.ide},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(e.address.city))])])})),0)])])},N=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("ID")]),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Email")]),n("th",{attrs:{scope:"col"}},[t._v("City")])])])}],L=n("bc3a"),Q=n.n(L),U={name:"Users",data:function(){return{users:null}},created:function(){var t=this;Q.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){t.users=e.data}))}},A=U,M=(n("193c"),Object(c["a"])(A,S,N,!1,null,null,null)),T=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h3",[t._v("QUIZ")]),n("table",{staticClass:"table"},[t._m(0),n("tbody",t._l(t.users,(function(e){return n("tr",{key:e.ide},[n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),n("td",[t._v(t._s(e.name))]),n("td",[t._v(t._s(e.email))]),n("td",[t._v(t._s(e.address.city))])])})),0)])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("th",{attrs:{scope:"col"}},[t._v("ID")]),n("th",{attrs:{scope:"col"}},[t._v("Name")]),n("th",{attrs:{scope:"col"}},[t._v("Email")]),n("th",{attrs:{scope:"col"}},[t._v("City")])])])}],B={name:"Quiz",data:function(){return{users:null}},created:function(){var t=this;Q.a.get("https://jsonplaceholder.typicode.com/users").then((function(e){t.users=e.data}))}},D=B,F=(n("f3e9"),Object(c["a"])(D,R,q,!1,null,null,null)),G=F.exports;r["a"].use(b["a"]);var J=new b["a"]({routes:[{path:"/",name:"Homepage",component:H},{path:"/users",name:"Users",component:T},{path:"/quizzes",name:"Quizzes",component:G}]}),Z=n("f309");r["a"].use(Z["a"]);var K=new Z["a"]({});r["a"].config.productionTip=!1,new r["a"]({vuetify:K,router:J,render:function(t){return t(y)}}).$mount("#app")},8302:function(t,e,n){},f3e9:function(t,e,n){"use strict";var r=n("1515"),a=n.n(r);a.a}});
//# sourceMappingURL=app.28c98a4a.js.map