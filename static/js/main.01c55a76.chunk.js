(this["webpackJsonpmath-magician"]=this["webpackJsonpmath-magician"]||[]).push([[0],{28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},32:function(t,e,n){},33:function(t,e,n){},34:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),c=n(16),o=n.n(c),l=(n(28),n(8)),r=n(17),s=n(18),u=n(23),j=n(21),d=n(2),b=(n(29),n(22)),x=(n(30),n(4)),p=n(13),m=n.n(p);function O(t,e,n){var a=m()(t),i=m()(e);if("+"===n)return a.plus(i).toString();if("-"===n)return a.minus(i).toString();if("x"===n)return a.times(i).toString();if("\xf7"===n)try{return a.div(i).toString()}catch(c){return"Can't divide by 0."}if("%"===n)return a.mod(i).toString();throw Error("Unknown operation '".concat(n,"'"))}var h=n(0),v=function(t){var e=t.items,n=t.onClick;return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"button",value:e[0],onClick:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"button",value:e[1],onClick:n})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"button",value:e[2],onClick:n})}),Object(h.jsx)("td",{className:"orange-colour",children:Object(h.jsx)("input",{type:"button",value:e[3],onClick:n})})]})},g=[["AC","+/-","%","\xf7"],["7","8","9","x"],["4","5","6","-"],["1","2","3","+"]],f=function(){var t=Object(a.useState)({total:0,operation:""}),e=Object(b.a)(t,2),n=e[0],i=e[1],c=function(t){i(function(t,e){return"AC"===e?{total:0,next:null,operation:null}:e.match(/[0-9]+/)?"0"===e&&"0"===t.next?{}:t.operation?t.next?Object(x.a)(Object(x.a)({},t),{},{next:t.next+e}):Object(x.a)(Object(x.a)({},t),{},{next:e}):t.next?{next:t.next+e,total:null}:{next:e,total:null}:"."===e?t.next?t.next.includes(".")?Object(x.a)({},t):Object(x.a)(Object(x.a)({},t),{},{next:"".concat(t.next,".")}):t.operation?{next:"0."}:t.total?t.total.includes(".")?{}:{total:"".concat(t.total,".")}:{total:"0."}:"="===e?t.next&&t.operation?{total:O(t.total,t.next,t.operation),next:null,operation:null}:{}:"+/-"===e?t.next?Object(x.a)(Object(x.a)({},t),{},{next:(-1*parseFloat(t.next)).toString()}):t.total?Object(x.a)(Object(x.a)({},t),{},{total:(-1*parseFloat(t.total)).toString()}):{}:t.next||!t.total||t.operation?t.operation?t.total&&!t.next?Object(x.a)(Object(x.a)({},t),{},{operation:e}):{total:O(t.total,t.next,t.operation),next:null,operation:e}:t.next?{total:t.next,next:null,operation:e}:{operation:e}:Object(x.a)(Object(x.a)({},t),{},{operation:e})}(n,t.target.value))};return Object(h.jsxs)("div",{className:"calculator-page",children:[Object(h.jsx)("h2",{className:"calculator-heading",children:"Let's do some math!"}),Object(h.jsx)("table",{className:"calculator table-bordered",children:Object(h.jsxs)("tbody",{children:[Object(h.jsx)("tr",{className:"output",children:Object(h.jsxs)("td",{colSpan:"4",children:[n.total,n.operation,n.next]})}),Object(h.jsx)(v,{items:g[0],onClick:c}),Object(h.jsx)(v,{items:g[1],onClick:c}),Object(h.jsx)(v,{items:g[2],onClick:c}),Object(h.jsx)(v,{items:g[3],onClick:c}),Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{colSpan:"2",children:Object(h.jsx)("input",{type:"button",onClick:c,value:"0"})}),Object(h.jsx)("td",{children:Object(h.jsx)("input",{type:"button",onClick:c,value:"."})}),Object(h.jsx)("td",{className:"orange-colour",children:Object(h.jsx)("input",{type:"button",onClick:c,value:"="})})]})]})})]})},C=(n(32),function(){return Object(h.jsxs)("div",{className:"home-page",children:[Object(h.jsx)("h2",{children:"Welcome to our page!"}),Object(h.jsxs)("div",{className:"welcome-msg",children:[Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),Object(h.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]})]})}),k=(n(33),function(){return Object(h.jsx)("div",{className:"quotes-page",children:Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{children:["Mathematics knows no races or geographic boundaries; for mathematics, the cultural world is one country.",Object(h.jsx)("span",{children:"\u2014 David Hilbert"})]}),Object(h.jsxs)("p",{children:["Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding.",Object(h.jsx)("span",{children:"\u2014 William Paul Thurston"})]})]})})}),N=(n(34),function(){return Object(h.jsxs)("nav",{className:"navbar",children:[Object(h.jsx)("a",{href:"/",className:"nav-brand",children:"Math Magicians"}),Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/",activeClassName:"active-link",exact:!0,children:"Home"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/calculator",activeClassName:"active-link",exact:!0,children:"Calculator"})}),Object(h.jsx)("li",{children:Object(h.jsx)(l.b,{to:"/quote",activeClassName:"active-link",exact:!0,children:"Quote"})})]})]})}),q=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).state={},a}return Object(s.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("fragment",{children:[Object(h.jsx)(N,{}),Object(h.jsxs)(d.c,{children:[Object(h.jsx)(d.a,{exact:!0,path:"/",children:Object(h.jsx)(C,{})}),Object(h.jsx)(d.a,{path:"/calculator",children:Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(f,{})})}),Object(h.jsx)(d.a,{path:"*",children:Object(h.jsx)(k,{})})]})]})}}]),n}(i.a.Component),y=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),i(t),c(t),o(t)}))};o.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(l.a,{children:Object(h.jsx)(q,{})})}),document.getElementById("root")),y()}},[[40,1,2]]]);
//# sourceMappingURL=main.01c55a76.chunk.js.map