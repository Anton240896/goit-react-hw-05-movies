"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[387],{877:function(n,e,t){t.d(e,{$_:function(){return o},$m:function(){return l},B8:function(){return s},Cf:function(){return p},n:function(){return f}});var r=t(5861),a=t(7757),c=t.n(a),u=t(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="992758a4802a699e8df27d4d6efc34fb",s=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},3387:function(n,e,t){t.r(e),t.d(e,{default:function(){return k}});var r,a,c,u,i=t(5861),s=t(9439),o=t(7757),p=t.n(o),f=t(7689),l=t(2791),d=t(9014),h=t(877),v=t(5510),x=t(168),g=t(5867),m=g.ZP.ul(r||(r=(0,x.Z)(["\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 172px;\n  margin-left: -720px;\n  gap: 10px;\n\n  @media (max-width: 1220px) {\n    display: flex;\n    margin-left: -122px;\n    flex-wrap: wrap;\n  }\n"]))),w=g.ZP.p(a||(a=(0,x.Z)(["\n  color: red;\n"]))),Z=g.ZP.li(c||(c=(0,x.Z)(["\n  border: thick double yellowgreen;\n  text-align: center;\n"]))),y=g.ZP.p(u||(u=(0,x.Z)(["\n  color: red;\n  margin-top: -164px;\n  margin-left: -44px;\n"]))),_=t(184),k=function(){var n=(0,f.UO)().movieId,e=(0,l.useState)([]),t=(0,s.Z)(e,2),r=t[0],a=t[1],c=(0,l.useState)(!1),u=(0,s.Z)(c,2),o=u[0],x=u[1],g=(0,l.useState)(!1),k=(0,s.Z)(g,2),b=k[0],j=k[1];return(0,l.useEffect)((function(){var e=function(){var e=(0,i.Z)(p().mark((function e(){var t;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,x(!1),j(!0),e.next=5,(0,h.n)(n);case 5:t=e.sent,a(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),d.ZP.error("Sorry, we didnt find anything");case 12:return e.prev=12,j(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,_.jsxs)("ul",{children:[b&&(0,_.jsx)(v.Z,{}),o&&d.ZP.error("Sorry,we didnt find anything"),(0,_.jsx)(m,{children:r.map((function(n){var e=n.id,t=n.name,r=n.profile_path,a=n.character;return(0,_.jsxs)(Z,{children:[(0,_.jsx)("img",{width:"300px",height:"400px",src:r?"https://image.tmdb.org/t/p/w500".concat(r):"".concat("https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"),alt:t}),(0,_.jsxs)(w,{children:[(0,_.jsx)("b",{children:" Actor:"})," ",t]}),(0,_.jsxs)(w,{children:[(0,_.jsx)("b",{children:"Role:"})," ",a]})]},e)}))}),(0,_.jsx)("div",{children:0===r.length&&(0,_.jsx)(y,{children:"\xaf\\_(\u30c4)_/\xaf Sorry. No actors found"})})]})}}}]);
//# sourceMappingURL=387.7658aa39.chunk.js.map