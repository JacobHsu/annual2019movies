(function(t){function e(e){for(var o,r,i=e[0],c=e[1],l=e[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&f.push(n[r][0]),n[r]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);p&&p(e);while(f.length)f.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],o=!0,i=1;i<a.length;i++){var c=a[i];0!==n[c]&&(o=!1)}o&&(s.splice(e--,1),t=r(r.s=a[0]))}return t}var o={},n={app:0},s=[];function r(e){if(o[e])return o[e].exports;var a=o[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=o,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/annual2019movies/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var o=a("85ec"),n=a.n(o);n.a},"0b7a":function(t,e,a){},"3ed8":function(t,e,a){"use strict";var o=a("0b7a"),n=a.n(o);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var o=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},s=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("ksvuefp",{attrs:{options:t.options,sections:t.sections}},t._l(t.sections,(function(e,o){return a("ksvuefp-section",{key:e.bgColor,attrs:{section:e,"section-index":o,"background-color":e.bgColor,"background-image":"url("+e.bgImg+")"}},[a("b-card",{staticClass:"card d-none d-lg-block text-right",attrs:{header:"2019個人評價最高的",title:e.type,"header-text-variant":"white","text-variant":"white"}},[a("b-card-text",{staticClass:"text-white"},[a("h3",[t._v(t._s(e.name))]),a("h4",[t._v(t._s(e.title))])]),a("b-card-footer",{staticClass:"text-warning text-right"},[a("font-awesome-icon",{attrs:{icon:"star"}}),a("font-awesome-icon",{attrs:{icon:"star"}}),a("font-awesome-icon",{attrs:{icon:"star"}}),a("font-awesome-icon",{attrs:{icon:["fas","star"]}}),5===e.stars?a("font-awesome-icon",{attrs:{icon:"star"}}):t._e(),4.5===e.stars?a("font-awesome-icon",{attrs:{icon:"star-half-alt"}}):t._e(),a("span",{staticClass:"rank ml-2"},["N/A"!=e.imdb?a("span",[a("svg",{staticClass:"ipc-logo",attrs:{id:"home_img",xmlns:"http://www.w3.org/2000/svg",width:"32",height:"16",viewBox:"0 0 64 32",version:"1.1"}},[a("g",{attrs:{fill:"#F5C518"}},[a("rect",{attrs:{x:"0",y:"0",width:"100%",height:"100%",rx:"4"}})]),a("g",{attrs:{transform:"translate(8.000000, 7.000000)",fill:"#000000","fill-rule":"nonzero"}},[a("polygon",{attrs:{points:"0 18 5 18 5 0 0 0"}}),a("path",{attrs:{d:"M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"}}),a("path",{attrs:{d:"M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"}}),a("path",{attrs:{d:"M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"}})])]),a("span",{staticClass:"text-white"},[t._v(" "+t._s(e.imdb)+" ")])]):t._e(),e.tomatoRating?a("span",[a("img",{attrs:{border:"0",src:"https://staticv2-4.rottentomatoes.com/static/images/icons/fresh-16.png",width:"16",height:"16"}}),a("span",{staticClass:"text-white"},[t._v(" "+t._s(e.tomatoRating))])]):t._e()])],1)],1),a("footer",[a("div",{staticClass:"d-flex justify-content-center align-self-end  v-cloak"},[a("b-nav",t._l(t.lists[o],(function(t,e){return a("b-nav-item",[a("a",{staticClass:"nav-link",attrs:{href:"https://www.google.com.tw/search?q="+t.title,target:"_blank",title:t.title}},[a("img",{attrs:{src:t.poster,width:"100px",height:"150px"}})])])})),1)],1)])],1)})),1)],1)},i=[],c=(a("4160"),a("d3b7"),a("159b"),a("96cf"),a("bc3a")),l=a.n(c),p=a("824d"),u={name:"HelloWorld",props:{msg:String},data:function(){return{mysections:[],sections:[],lists:[],options:{duration:800,overlay:!1}}},created:function(){this.getList()},methods:{getList:function(){var t,e,a=this;return regeneratorRuntime.async((function(o){while(1)switch(o.prev=o.next){case 0:return t="production",e="development"===t?"../data/movies.json":"../annual2019movies/data/movies.json",o.next=4,regeneratorRuntime.awrap(l.a.get(e).then((function(t){var e=a.sections,o=a.lists,n=[],s=[],r=[],i=[];t.data.forEach((function(t,e){var a="4e1e08f0",o="https://www.omdbapi.com/?apikey="+a+"&t="+t.title+"&type=movie&tomatoes=true";switch(t.title){case"Eiga: Kakegurui":o="https://www.omdbapi.com/?apikey=4e1e08f0&i=tt9552162&plot=full&type=movie&tomatoes=true";break;default:o="https://www.omdbapi.com/?apikey="+a+"&t="+t.title+"&type=movie&tomatoes=true"}var c=o;n.push(l.a.get(c)),r.push(t),s.push([]),t.list.forEach((function(t){i.push(t);var o="https://www.omdbapi.com/?apikey="+a+"&t="+t+"&type=movie&tomatoes=true";switch(t){case"Eiga: Kakegurui":o="https://www.omdbapi.com/?apikey=4e1e08f0&i=tt9552162&plot=full&type=movie&tomatoes=true";break;case"Detention":o="https://www.omdbapi.com/?apikey=4e1e08f0&i=tt10805432&plot=full&type=movie&tomatoes=true";break;case"Samurai marason":o="https://www.omdbapi.com/?apikey=4e1e08f0&i=tt9311062&plot=full&type=movie&tomatoes=true";break;case"Stolen Identity":o="https://www.omdbapi.com/?apikey=4e1e08f0&i=tt8531044&plot=full&type=movie&tomatoes=true";break;case"City Hunter":o="https://www.omdbapi.com/?apikey=4e1e08f0&i=tt8523334&plot=full&type=movie&tomatoes=true";break;case"Hellboy":case"EXIT":o="https://www.omdbapi.com/?apikey="+a+"&t="+t+"&type=movie&tomatoes=true&y=2019";break;default:o="https://www.omdbapi.com/?apikey="+a+"&t="+t+"&type=movie&tomatoes=true"}s[e].push(l.a.get(o))}))}));var c=Object(p["a"])(i);console.log("total movies:",c.length),l.a.all(n).then(l.a.spread((function(){for(var t=arguments.length,a=new Array(t),n=0;n<t;n++)a[n]=arguments[n];a.forEach((function(t,a){r[a]["imdb"]=t.data.imdbRating,r[a]["tomatoRating"]=t.data.Ratings[1]?t.data.Ratings[1].Value:"",e.push(r[a]),o.push([]),l.a.all(s[a]).then(l.a.spread((function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach((function(t){o[a].push({poster:t.data.Poster,title:t.data.Title})}))})))}))}))).then((function(){a.sections=r,a.lists=o,console.log(o)}))})));case 4:o.sent;case 5:case"end":return o.stop()}}))},api1:function(t){var e="4e1e08f0";return"https://www.omdbapi.com/?apikey="+e+"&t="+t+"&type=movie&tomatoes=true"}}},f=u,d=(a("3ed8"),a("2877")),m=Object(d["a"])(f,r,i,!1,null,"48dd982d",null),h=m.exports,w={name:"app",components:{HelloWorld:h}},v=w,g=(a("034f"),Object(d["a"])(v,n,s,!1,null,null,null)),b=g.exports,y=a("5788"),k=a.n(y),L=a("5f5b"),C=(a("f9e3"),a("2dd8"),a("ecee")),x=a("c074"),_=a("ad3d");o["default"].config.productionTip=!1,o["default"].use(k.a),o["default"].use(L["a"]),C["c"].add(x["b"]),C["c"].add(x["a"]),o["default"].component("font-awesome-icon",_["a"]),new o["default"]({render:function(t){return t(b)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.b7e1e14e.js.map