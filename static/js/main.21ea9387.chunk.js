(this["webpackJsonpuser-cards"]=this["webpackJsonpuser-cards"]||[]).push([[0],{16:function(e,c,t){},26:function(e,c,t){},29:function(e,c,t){},38:function(e,c,t){"use strict";t.r(c);var a=t(1),s=t.n(a),n=t(18),r=t.n(n),i=(t(26),t(14)),l=t.n(i),o=t(19),j=t(8),d=t(21),u=t.n(d),b=(t(16),t(0)),O=function(e){var c=e.userData,t=Object(a.useState)(!1),s=Object(j.a)(t,2),n=s[0],r=s[1],i=Object(a.useState)("vertical"),l=Object(j.a)(i,2),o=l[0],d=l[1],O=function(){d("vertical"==o?"horizontal":"vertical"),r(1!=n)};return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)("div",{className:"mainCard",children:Object(b.jsxs)(u.a,{isFlipped:n,flipDirection:o,children:[Object(b.jsxs)("div",{className:"card",onMouseOver:function(){r(!0)},onClick:O,children:[Object(b.jsx)("img",{className:"card_image",src:c.picture.large}),Object(b.jsxs)("h1",{className:"card_title",children:["  ",c.name.first,"  "]}),Object(b.jsxs)("h1",{className:"card_age",children:[" ",Object(b.jsx)("i",{class:"fa-solid fa-user"})," ",c.name.first," ",c.name.last,"  "]}),Object(b.jsxs)("h3",{className:"card_cell",children:[" ",Object(b.jsx)("i",{class:"fa-solid fa-phone"})," ",c.cell,"  "]})]}),Object(b.jsxs)("div",{className:"card",onMouseOut:function(){r(!1)},onClick:O,children:[Object(b.jsx)("i",{class:"fa-brands fa-audible fa-3x"}),Object(b.jsxs)("h3",{className:"card_email",children:["  ",c.email,"  "]}),Object(b.jsxs)("h3",{className:"card_location",children:[Object(b.jsx)("i",{class:"fa-solid fa-location-dot"})," ",c.location.street.name,"  "]})]})]})})})},f=(t(29),t(10)),h=(t(36),t(40)),m=t(41);var x=function(){var e=Object(a.useState)([]),c=Object(j.a)(e,2),t=c[0],s=c[1],n=Object(a.useState)([]),r=Object(j.a)(n,2),i=r[0],d=r[1];return Object(a.useEffect)((function(){Object(o.a)(l.a.mark((function e(){var c,t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://randomuser.me/api/?results=18");case 3:return t=e.sent,e.next=6,t.json();case 6:c=e.sent.results,e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0),c=[];case 13:s(c),d(c);case 15:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(b.jsx)("div",{children:Object(b.jsxs)("div",{className:"User",children:[Object(b.jsx)("h1",{className:"title",children:"User Cards  "}),Object(b.jsx)(h.a,{className:"mb-3",children:Object(b.jsx)(m.a,{placeholder:"Search by name or email...","aria-label":"Username","aria-describedby":"basic-addon1",onInput:function(e){var c=e.target.value.toLowerCase(),t=i.filter((function(e){return"".concat(e.name.first," ").concat(e.name.last).toLowerCase().includes(c)||"".concat(e.email).toLowerCase().includes(c)}));s(t)}})}),Object(b.jsx)(f.Grid,{fluid:!0,children:Object(b.jsx)(f.Row,{children:t.map((function(e,c){return Object(b.jsx)(f.Col,{sm:!0,children:Object(b.jsx)(O,{userData:e},c)})}))})})]})})},p=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,42)).then((function(c){var t=c.getCLS,a=c.getFID,s=c.getFCP,n=c.getLCP,r=c.getTTFB;t(e),a(e),s(e),n(e),r(e)}))};r.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(x,{})}),document.getElementById("root")),p()}},[[38,1,2]]]);
//# sourceMappingURL=main.21ea9387.chunk.js.map