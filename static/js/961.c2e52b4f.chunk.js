(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[961],{877:function(n,t,e){"use strict";e.d(t,{$_:function(){return o},$m:function(){return l},B8:function(){return c},Cf:function(){return f},n:function(){return d}});var r=e(5861),i=e(7757),s=e.n(i),a=e(1243);a.Z.defaults.baseURL="https://api.themoviedb.org/3/";var u="992758a4802a699e8df27d4d6efc34fb",c=function(){var n=(0,r.Z)(s().mark((function n(){var t;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("trending/movie/day?api_key=".concat(u));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("search/movie?api_key=".concat(u,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(s().mark((function n(t){var e;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,a.Z.get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},7961:function(n,t,e){"use strict";e.r(t);var r=e(5861),i=e(9439),s=e(7757),a=e.n(s),u=e(2791),c=e(7892),o=e.n(c),f=e(7689),d=e(1087),l=e(1578),h=e(9014),p=e(877),x=e(5510),m=e(6454),v=e(184);t.default=function(){var n,t,e=(0,f.UO)().movieId,s=(0,u.useState)(!1),c=(0,i.Z)(s,2),g=c[0],$=c[1],y=(0,u.useState)(null),w=(0,i.Z)(y,2),b=w[0],j=w[1],Z=(0,u.useState)(!1),M=(0,i.Z)(Z,2),_=M[0],S=M[1],D=(0,f.TH)();if((0,u.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,$(!1),S(!0),n.next=5,(0,p.Cf)(e);case 5:t=n.sent,j(t),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),h.ZP.error("Sorry, nothing found");case 12:return n.prev=12,S(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[0,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[e]),b){var k=b.title,P=b.release_date,z=b.vote_average,O=b.overview,Y=b.genres,U=b.poster_path,C=b.original_title,H=b.runtime;return(0,v.jsx)("main",{children:(0,v.jsxs)(m.W2,{children:[(0,v.jsx)("div",{children:(0,v.jsx)(m.Ei,{width:"400px",src:U?"".concat("https://image.tmdb.org/t/p/w500").concat(U):"".concat("https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg"," }"),alt:C})}),(0,v.jsxs)(m.de,{children:[(0,v.jsxs)(m.K_,{children:[(0,v.jsx)(m.Dx,{children:(0,v.jsxs)("b",{children:[k," (",P.slice(0,4)||"Invalid Date",")"]})}),(0,v.jsx)(m.Gb,{})]}),(0,v.jsxs)(m.K_,{children:[(0,v.jsx)(m.PJ,{children:"Release Date \xb7"}),(0,v.jsx)(m.Pz,{children:o()(P).format("DD. MM. YYYY")})]}),(0,v.jsx)(m.PJ,{children:(0,v.jsx)("b",{children:"Overview \xb7"})}),(0,v.jsx)(m.Pz,{children:0===O.length?(0,v.jsx)(m.Pz,{children:"No plot found"}):(0,v.jsx)("b",{children:(0,v.jsx)(m.aL,{children:O})})}),(0,v.jsxs)(m.K_,{children:[(0,v.jsx)(m.PJ,{children:"Run time \xb7"}),(0,v.jsxs)(m.Pz,{children:[function(n){var t=Math.floor(n/60),e=n%60;return 0===t?e+"m":0===e?t+"h":" ".concat(t,"h ").concat(e,"m")}(H)," (duration)"]})]}),(0,v.jsxs)(m.K_,{children:[(0,v.jsx)(m.PJ,{children:"User score \xb7"}),(0,v.jsx)(m.Pz,{children:z>0?(0,v.jsxs)(m.Pz,{children:[Math.round(10*z)," % (average vote)"]}):(0,v.jsx)(m.Pz,{children:"Unknown rating"})})]}),(0,v.jsxs)(m.K_,{children:[(0,v.jsx)(m.PJ,{children:(0,v.jsx)("b",{children:"Genres \xb7"})}),(0,v.jsx)(m.Pz,{children:(0,v.jsx)(m.Pz,{children:Y.length>0?(0,v.jsx)(m.Pz,{children:Y.map((function(n){return n.name})).join(", ")}):(0,v.jsx)(m.Pz,{children:"Unknown genres"})})})]}),(0,v.jsx)(m.K_,{children:(0,v.jsx)(m.PJ,{children:(0,v.jsx)("b",{children:"Additonal information \xb7"})})}),(0,v.jsx)(m.aV,{children:(0,v.jsxs)("div",{children:[(0,v.jsxs)(m.Jh,{children:[(0,v.jsx)(m.lP,{to:"cast",children:"Actors \xb7"}),(0,v.jsx)(m.n4,{children:(0,v.jsx)(m.lP,{to:"reviews",children:"Reviews \xb7"})})]}),(0,v.jsx)(f.j3,{})]})})]}),(0,v.jsx)(d.rU,{to:null!==(n=null===(t=D.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/",children:(0,v.jsx)(m.ZP,{type:"button",children:(0,v.jsx)(l.bUY,{size:50,style:{position:"fixed",top:"193px"}})})}),_&&(0,v.jsx)(x.Z,{}),g&&h.ZP.error("Sorry,we didnt find anything")]})})}}},6454:function(n,t,e){"use strict";e.d(t,{Dx:function(){return O},Ei:function(){return Y},Gb:function(){return z},Jh:function(){return j},K_:function(){return P},PJ:function(){return k},Pz:function(){return _},W2:function(){return w},ZP:function(){return S},aL:function(){return U},aV:function(){return b},de:function(){return D},lP:function(){return Z},n4:function(){return M}});var r,i,s,a,u,c,o,f,d,l,h,p,x,m,v,g=e(168),$=e(5867),y=e(1087),w=$.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  margin: 32px;\n  gap: 11px;\n  align-items: flex-start;\n  margin-top: 100px;\n\n  @media (max-width: 1220px) {\n    margin-top: 201px;\n    margin-left: -218px;\n    display: flex;\n    flex-direction: column;\n  }\n"]))),b=$.ZP.ul(i||(i=(0,g.Z)(["\n  gap: 12px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n"]))),j=$.ZP.ul(s||(s=(0,g.Z)(["\n  display: flex;\n  flex-direction: row;\n  gap: 50px;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),Z=(0,$.ZP)(y.rU)(a||(a=(0,g.Z)(["\n  text-decoration: none;\n  font-weight: 400;\n  font-size: 18px;\n  color: red;\n  font-family: 'Marck Script';\n\n  &:hover {\n    transform: scale(1, 2);\n    transition: transform 350ms;\n  }\n"]))),M=$.ZP.li(u||(u=(0,g.Z)(["\n  display: flex;\n"]))),_=$.ZP.p(c||(c=(0,g.Z)(["\n  max-width: 227px;\n  color: red;\n  font-family: 'Marck Script';\n  font-size: 18px;\n"]))),S=$.ZP.li(o||(o=(0,g.Z)(["\n  position: fixed;\n  left: 19px;\n  font-weight: 500;\n  font-size: 22px;\n  color: yellowgreen;\n  cursor: pointer;\n  list-style-type: none;\n  top: 135px;\n\n  @media (max-width: 540px) {\n    top: 139px;\n  }\n\n  &:hover {\n    color: red;\n  }\n"]))),D=$.ZP.div(f||(f=(0,g.Z)(["\n  margin-top: -2px;\n"]))),k=($.ZP.h2(d||(d=(0,g.Z)(["\n  color: red;\n  /* animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both; */\n"]))),$.ZP.h3(l||(l=(0,g.Z)(["\n  color: red;\n  font-size: 15px;\n  font-family: 'Marck Script';\n  font-size: 20px;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n"])))),P=$.ZP.div(h||(h=(0,g.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: -22px;\n"]))),z=$.ZP.p(p||(p=(0,g.Z)(["\n  font-size: 25px;\n  color: red;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n"]))),O=$.ZP.h1(x||(x=(0,g.Z)(["\n  color: red;\n  margin-top: -81px;\n  margin-left: -414px;\n  font-size: 35px;\n  max-width: 600px;\n  font-family: 'Courgette';\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n\n  @media (max-width: 1220px) {\n    margin-top: 52px;\n    margin-left: 0;\n    display: flex;\n    flex-direction: column;\n    animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1)\n      700ms both;\n  }\n"]))),Y=$.ZP.img(m||(m=(0,g.Z)(["\n  border: thick double red;\n  border-color: yellowgreen;\n"]))),U=$.ZP.p(v||(v=(0,g.Z)(["\n  color: red;\n  font-size: 17px;\n  animation: tracking-in-expand 700ms cubic-bezier(0.215, 0.61, 0.355, 1) 700ms\n    both;\n"])))},7892:function(n){n.exports=function(){"use strict";var n=1e3,t=6e4,e=36e5,r="millisecond",i="second",s="minute",a="hour",u="day",c="week",o="month",f="quarter",d="year",l="date",h="Invalid Date",p=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,x=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(n){var t=["th","st","nd","rd"],e=n%100;return"["+n+(t[(e-20)%10]||t[e]||t[0])+"]"}},v=function(n,t,e){var r=String(n);return!r||r.length>=t?n:""+Array(t+1-r.length).join(e)+n},g={s:v,z:function(n){var t=-n.utcOffset(),e=Math.abs(t),r=Math.floor(e/60),i=e%60;return(t<=0?"+":"-")+v(r,2,"0")+":"+v(i,2,"0")},m:function n(t,e){if(t.date()<e.date())return-n(e,t);var r=12*(e.year()-t.year())+(e.month()-t.month()),i=t.clone().add(r,o),s=e-i<0,a=t.clone().add(r+(s?-1:1),o);return+(-(r+(e-i)/(s?i-a:a-i))||0)},a:function(n){return n<0?Math.ceil(n)||0:Math.floor(n)},p:function(n){return{M:o,y:d,w:c,d:u,D:l,h:a,m:s,s:i,ms:r,Q:f}[n]||String(n||"").toLowerCase().replace(/s$/,"")},u:function(n){return void 0===n}},$="en",y={};y[$]=m;var w="$isDayjsObject",b=function(n){return n instanceof _||!(!n||!n[w])},j=function n(t,e,r){var i;if(!t)return $;if("string"==typeof t){var s=t.toLowerCase();y[s]&&(i=s),e&&(y[s]=e,i=s);var a=t.split("-");if(!i&&a.length>1)return n(a[0])}else{var u=t.name;y[u]=t,i=u}return!r&&i&&($=i),i||!r&&$},Z=function(n,t){if(b(n))return n.clone();var e="object"==typeof t?t:{};return e.date=n,e.args=arguments,new _(e)},M=g;M.l=j,M.i=b,M.w=function(n,t){return Z(n,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var _=function(){function m(n){this.$L=j(n.locale,null,!0),this.parse(n),this.$x=this.$x||n.x||{},this[w]=!0}var v=m.prototype;return v.parse=function(n){this.$d=function(n){var t=n.date,e=n.utc;if(null===t)return new Date(NaN);if(M.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var r=t.match(p);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return e?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(t)}(n),this.init()},v.init=function(){var n=this.$d;this.$y=n.getFullYear(),this.$M=n.getMonth(),this.$D=n.getDate(),this.$W=n.getDay(),this.$H=n.getHours(),this.$m=n.getMinutes(),this.$s=n.getSeconds(),this.$ms=n.getMilliseconds()},v.$utils=function(){return M},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(n,t){var e=Z(n);return this.startOf(t)<=e&&e<=this.endOf(t)},v.isAfter=function(n,t){return Z(n)<this.startOf(t)},v.isBefore=function(n,t){return this.endOf(t)<Z(n)},v.$g=function(n,t,e){return M.u(n)?this[t]:this.set(e,n)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(n,t){var e=this,r=!!M.u(t)||t,f=M.p(n),h=function(n,t){var i=M.w(e.$u?Date.UTC(e.$y,t,n):new Date(e.$y,t,n),e);return r?i:i.endOf(u)},p=function(n,t){return M.w(e.toDate()[n].apply(e.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(t)),e)},x=this.$W,m=this.$M,v=this.$D,g="set"+(this.$u?"UTC":"");switch(f){case d:return r?h(1,0):h(31,11);case o:return r?h(1,m):h(0,m+1);case c:var $=this.$locale().weekStart||0,y=(x<$?x+7:x)-$;return h(r?v-y:v+(6-y),m);case u:case l:return p(g+"Hours",0);case a:return p(g+"Minutes",1);case s:return p(g+"Seconds",2);case i:return p(g+"Milliseconds",3);default:return this.clone()}},v.endOf=function(n){return this.startOf(n,!1)},v.$set=function(n,t){var e,c=M.p(n),f="set"+(this.$u?"UTC":""),h=(e={},e[u]=f+"Date",e[l]=f+"Date",e[o]=f+"Month",e[d]=f+"FullYear",e[a]=f+"Hours",e[s]=f+"Minutes",e[i]=f+"Seconds",e[r]=f+"Milliseconds",e)[c],p=c===u?this.$D+(t-this.$W):t;if(c===o||c===d){var x=this.clone().set(l,1);x.$d[h](p),x.init(),this.$d=x.set(l,Math.min(this.$D,x.daysInMonth())).$d}else h&&this.$d[h](p);return this.init(),this},v.set=function(n,t){return this.clone().$set(n,t)},v.get=function(n){return this[M.p(n)]()},v.add=function(r,f){var l,h=this;r=Number(r);var p=M.p(f),x=function(n){var t=Z(h);return M.w(t.date(t.date()+Math.round(n*r)),h)};if(p===o)return this.set(o,this.$M+r);if(p===d)return this.set(d,this.$y+r);if(p===u)return x(1);if(p===c)return x(7);var m=(l={},l[s]=t,l[a]=e,l[i]=n,l)[p]||1,v=this.$d.getTime()+r*m;return M.w(v,this)},v.subtract=function(n,t){return this.add(-1*n,t)},v.format=function(n){var t=this,e=this.$locale();if(!this.isValid())return e.invalidDate||h;var r=n||"YYYY-MM-DDTHH:mm:ssZ",i=M.z(this),s=this.$H,a=this.$m,u=this.$M,c=e.weekdays,o=e.months,f=e.meridiem,d=function(n,e,i,s){return n&&(n[e]||n(t,r))||i[e].slice(0,s)},l=function(n){return M.s(s%12||12,n,"0")},p=f||function(n,t,e){var r=n<12?"AM":"PM";return e?r.toLowerCase():r};return r.replace(x,(function(n,r){return r||function(n){switch(n){case"YY":return String(t.$y).slice(-2);case"YYYY":return M.s(t.$y,4,"0");case"M":return u+1;case"MM":return M.s(u+1,2,"0");case"MMM":return d(e.monthsShort,u,o,3);case"MMMM":return d(o,u);case"D":return t.$D;case"DD":return M.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(e.weekdaysMin,t.$W,c,2);case"ddd":return d(e.weekdaysShort,t.$W,c,3);case"dddd":return c[t.$W];case"H":return String(s);case"HH":return M.s(s,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return p(s,a,!0);case"A":return p(s,a,!1);case"m":return String(a);case"mm":return M.s(a,2,"0");case"s":return String(t.$s);case"ss":return M.s(t.$s,2,"0");case"SSS":return M.s(t.$ms,3,"0");case"Z":return i}return null}(n)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(r,l,h){var p,x=this,m=M.p(l),v=Z(r),g=(v.utcOffset()-this.utcOffset())*t,$=this-v,y=function(){return M.m(x,v)};switch(m){case d:p=y()/12;break;case o:p=y();break;case f:p=y()/3;break;case c:p=($-g)/6048e5;break;case u:p=($-g)/864e5;break;case a:p=$/e;break;case s:p=$/t;break;case i:p=$/n;break;default:p=$}return h?p:M.a(p)},v.daysInMonth=function(){return this.endOf(o).$D},v.$locale=function(){return y[this.$L]},v.locale=function(n,t){if(!n)return this.$L;var e=this.clone(),r=j(n,t,!0);return r&&(e.$L=r),e},v.clone=function(){return M.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),S=_.prototype;return Z.prototype=S,[["$ms",r],["$s",i],["$m",s],["$H",a],["$W",u],["$M",o],["$y",d],["$D",l]].forEach((function(n){S[n[1]]=function(t){return this.$g(t,n[0],n[1])}})),Z.extend=function(n,t){return n.$i||(n(t,_,Z),n.$i=!0),Z},Z.locale=j,Z.isDayjs=b,Z.unix=function(n){return Z(1e3*n)},Z.en=y[$],Z.Ls=y,Z.p={},Z}()}}]);
//# sourceMappingURL=961.c2e52b4f.chunk.js.map