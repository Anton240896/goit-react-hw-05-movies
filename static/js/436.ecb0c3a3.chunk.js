"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[436],{877:function(n,t,e){e.d(t,{$_:function(){return c},$m:function(){return f},B8:function(){return p},Cf:function(){return s},n:function(){return l}});var r=e(5861),i=e(7757),o=e.n(i),a=e(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="992758a4802a699e8df27d4d6efc34fb",p=function(){var n=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},6378:function(n,t,e){e.d(t,{Z:function(){return g}});var r,i,o,a,u=e(7689),p=e(168),c=e(5867),s=e(1087),l=c.ZP.ul(r||(r=(0,p.Z)(["\n  list-style-type: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n"]))),f=c.ZP.p(i||(i=(0,p.Z)(["\n  position: absolute;\n  font-size: 15px;\n  background-color: #ff000096;\n  color: white;\n  font-weight: 500;\n  margin-left: 6px;\n  margin-top: 5px;\n\n  @media (min-width: 122px) {\n    width: 138px;\n    font-size: 10px;\n  }\n\n  @media (min-width: 1288px) {\n    width: 138px;\n    font-size: 15px;\n    font-weight: 500;\n  }\n"]))),x=c.ZP.li(o||(o=(0,p.Z)(["\n  font-weight: 600;\n  font-size: 18px;\n  margin-bottom: 10px;\n\n  &:hover {\n    transform: rotate(5deg);\n    transition: transform 550ms;\n\n    & "," {\n      display: none;\n    }\n  }\n"])),f),d=(0,c.ZP)(s.rU)(a||(a=(0,p.Z)(["\n  text-decoration: none;\n  color: #191d1e;\n\n  &:hover {\n    color: #ffffff;\n  }\n"]))),m=e(184),g=function(n){var t=n.films,e=(0,u.TH)();return(0,m.jsx)("section",{children:(0,m.jsx)(l,{children:t.map((function(n){var t=n.id,r=n.title,i=n.poster_path;return(0,m.jsx)(x,{children:(0,m.jsxs)(d,{to:"/movies/".concat(t),state:{from:e},children:[(0,m.jsxs)(f,{children:[" ",r]}),(0,m.jsx)("img",{src:i?"".concat("https://image.tmdb.org/t/p/w500").concat(i):"https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg",alt:r,width:"150px",height:"220px"})]})},t)}))})})}},6454:function(n,t,e){e.d(t,{Dx:function(){return T},Gb:function(){return q},Jh:function(){return P},K_:function(){return U},PJ:function(){return S},Pz:function(){return _},Tk:function(){return C},W2:function(){return y},ZP:function(){return k},aV:function(){return w},de:function(){return z},lP:function(){return b},n4:function(){return j}});var r,i,o,a,u,p,c,s,l,f,x,d,m,g,h=e(168),Z=e(5867),v=e(1087),y=Z.ZP.div(r||(r=(0,h.Z)(["\n  display: flex;\n  margin: 32px;\n  gap: 11px;\n  align-items: flex-start;\n  margin-top: 107px;\n\n  @media (max-width: 1220px) {\n    margin-top: 201px;\n    margin-left: -158px;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),w=Z.ZP.ul(i||(i=(0,h.Z)(["\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),P=Z.ZP.ul(o||(o=(0,h.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),b=(0,Z.ZP)(v.rU)(a||(a=(0,h.Z)(["\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 18px;\n  color: red;\n\n  &:hover {\n    color: yellowgreen;\n    transition: color 350ms;\n  }\n"]))),j=Z.ZP.li(u||(u=(0,h.Z)(["\n  display: flex;\n"]))),_=Z.ZP.p(p||(p=(0,h.Z)(["\n  max-width: 287px;\n  color: red;\n"]))),k=Z.ZP.li(c||(c=(0,h.Z)(["\n  position: absolute;\n  top: 40px;\n  left: 19px;\n  font-weight: 500;\n  font-size: 22px;\n  color: yellowgreen;\n  cursor: pointer;\n  list-style-type: none;\n  top: 135px;\n\n  @media (max-width: 540px) {\n    top: 139px;\n  }\n\n  &:hover {\n    color: red;\n  }\n"]))),z=Z.ZP.div(s||(s=(0,h.Z)(["\n  margin-top: -2px;\n"]))),S=(Z.ZP.h2(l||(l=(0,h.Z)(["\n  color: red;\n"]))),Z.ZP.h3(f||(f=(0,h.Z)(["\n  color: red;\n"])))),U=Z.ZP.div(x||(x=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: -18px;\n"]))),q=Z.ZP.p(d||(d=(0,h.Z)(["\n  font-size: 25px;\n  color: red;\n"]))),T=Z.ZP.h1(m||(m=(0,h.Z)(["\n  color: red;\n  margin-top: -82px;\n  margin-left: -384px;\n  font-size: 35px;\n\n  @media (max-width: 1220px) {\n    margin-top: 52px;\n    margin-left: 0;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),C=Z.ZP.p(g||(g=(0,h.Z)(["\n  color: red;\n  margin-top: -45px;\n  margin-left: 373px;\n"])))},9436:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,i,o,a=e(5861),u=e(9439),p=e(7757),c=e.n(p),s=e(2791),l=e(1087),f=e(7689),x=e(1578),d=e(6378),m=e(168),g=e(5867),h=g.ZP.form(r||(r=(0,m.Z)(["\n  display: flex;\n  margin-top: 238px;\n  margin-left: -177px;\n\n  @media (min-width: 1200px) {\n    margin-top: 119px;\n    margin-left: -327px;\n  }\n"]))),Z=g.ZP.input(i||(i=(0,m.Z)(["\n  padding: 10px 15px;\n  border: 2px solid #191d1e;\n  font-weight: 600;\n  font-size: 20px;\n  margin-right: 10px;\n  border-radius: 4px 8px;\n  outline: none;\n\n  &:hover {\n    color: yellowgreen;\n    border: 2px solid yellowgreen;\n  }\n"]))),v=e(9014),y=e(184),w=function(n){var t=n.submitAction,e=n.startInputText;return(0,y.jsx)(h,{onSubmit:function(n){n.preventDefault();var e=n.target.elements.query.value.trim();if(!e)return v.ZP.error("Sorry we didnt find anything");t(e)},children:(0,y.jsx)(Z,{defaultValue:e,name:"query",type:"text",autoComplete:"off",placeholder:"Search films"})})},P=e(5510),b=e(877),j=e(6454),_=g.ZP.p(o||(o=(0,m.Z)(["\n  margin-top: -28px;\n  margin-left: -263px;\n  color: red;\n  font-size: '20px';\n\n  @media (max-width: 1220px) {\n    margin-left: -121px;\n  }\n"]))),k=function(){var n,t,e=(0,l.lr)(),r=(0,u.Z)(e,2),i=r[0],o=r[1],p=(0,s.useState)(!1),m=(0,u.Z)(p,2),g=m[0],h=m[1],Z=(0,s.useState)([]),k=(0,u.Z)(Z,2),z=k[0],S=k[1],U=i.get("query"),q=(0,f.TH)();(0,s.useEffect)((function(){if(U){var n=function(){var n=(0,a.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,h(!0),n.next=4,(0,b.$_)(U);case 4:t=n.sent,S(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),v.ZP.error("Sorry, we didnt find anything");case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();n()}}),[U]);return(0,y.jsxs)("div",{children:[(0,y.jsx)(w,{submitAction:function(n){o({query:n})},startInputText:U}),(0,y.jsx)(l.rU,{to:null!==(n=null===(t=q.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,y.jsx)(j.ZP,{type:"button",children:(0,y.jsx)(x.bUY,{size:50,style:{color:"yellowgreen",position:"fixed",top:"193px"}})})}),null!==g&&void 0!==g?g:(0,y.jsx)(P.a,{}),(0,y.jsx)(d.Z,{films:z}),(0,y.jsx)(f.j3,{}),z.length>0&&(0,y.jsx)(d.Z,{films:z}),0===z.length&&(0,y.jsx)(_,{children:"No films, enter your request"})]})}}}]);
//# sourceMappingURL=436.ecb0c3a3.chunk.js.map