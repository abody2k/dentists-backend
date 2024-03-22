import{s as G,h as T,e as w,t as J,j as B,b as $,k as x,d as F,l as M,f as g,o as P,m as k,i as C,p as E,r as Y,w as A,J as K,q as j,y as Q}from"../chunks/scheduler.CvS8aZFR.js";import{S as W,i as X,c as V,b as O,m as z,t as I,a as H,e as Z,d as N,g as ee}from"../chunks/index.BLvvEpyq.js";import"../chunks/Map.BFxH1DHB.js";import{G as te}from"../chunks/Grid.DJULFDiD.js";import{L as oe}from"../chunks/Login.Vg29bVck.js";import{n as se}from"../chunks/not.DNvn3Bfc.js";import{T as ne}from"../chunks/TopBar.DimmMICL.js";import{F as le}from"../chunks/Footer.zbhVd3SN.js";function U(d){let r,n,f,y="×",v,i,l,_,b,p;return l=new oe({props:{func:d[6]}}),{c(){r=w("div"),n=w("div"),f=w("button"),f.textContent=y,v=T(),i=w("div"),V(l.$$.fragment),this.h()},l(a){r=$(a,"DIV",{class:!0});var h=x(r);n=$(h,"DIV",{class:!0});var m=x(n);f=$(m,"BUTTON",{class:!0,"data-svelte-h":!0}),F(f)!=="svelte-1vf4byn"&&(f.textContent=y),v=B(m),i=$(m,"DIV",{class:!0});var s=x(i);O(l.$$.fragment,s),s.forEach(g),m.forEach(g),h.forEach(g),this.h()},h(){k(f,"class","close-button svelte-7ay39b"),k(i,"class","content svelte-7ay39b"),k(n,"class","dialog-box svelte-7ay39b"),k(r,"class","overlay svelte-7ay39b")},m(a,h){C(a,r,h),E(r,n),E(n,f),E(n,v),E(n,i),z(l,i,null),_=!0,b||(p=[j(f,"click",d[5]),j(n,"click",ie),j(r,"click",d[5])],b=!0)},p(a,h){const m={};h&2&&(m.func=a[6]),l.$set(m)},i(a){_||(I(l.$$.fragment,a),_=!0)},o(a){H(l.$$.fragment,a),_=!1},d(a){a&&g(r),N(l),b=!1,Q(p)}}}function re(d){let r,n,f,y,v,i,l,_="About us",b,p,a,h,m,s,D,o,u,t=d[4]&&U(d);return n=new ne({}),s=new te({props:{f:!1,cardsData:[...d[2]]}}),o=new le({props:{scrollBoxHeight:d[3]}}),{c(){t&&t.c(),r=T(),V(n.$$.fragment),f=T(),y=w("div"),v=w("div"),i=w("div"),l=w("p"),l.textContent=_,b=T(),p=w("p"),a=J(d[0]),h=T(),m=w("div"),V(s.$$.fragment),D=T(),V(o.$$.fragment),this.h()},l(e){t&&t.l(e),r=B(e),O(n.$$.fragment,e),f=B(e),y=$(e,"DIV",{class:!0});var c=x(y);v=$(c,"DIV",{class:!0});var L=x(v);i=$(L,"DIV",{class:!0});var S=x(i);l=$(S,"P",{style:!0,"data-svelte-h":!0}),F(l)!=="svelte-1mkz37p"&&(l.textContent=_),b=B(S),p=$(S,"P",{style:!0});var q=x(p);a=M(q,d[0]),q.forEach(g),S.forEach(g),L.forEach(g),c.forEach(g),h=B(e),m=$(e,"DIV",{class:!0});var R=x(m);O(s.$$.fragment,R),R.forEach(g),D=B(e),O(o.$$.fragment,e),this.h()},h(){P(l,"position","relative"),P(l,"right","70px"),P(p,"font-weight","300"),P(p,"text-align","left"),P(p,"font-size","20px"),k(i,"class","image-text svelte-7ay39b"),k(v,"class","image-overlay svelte-7ay39b"),k(y,"class","header-image svelte-7ay39b"),k(m,"class","scroll-box svelte-7ay39b")},m(e,c){t&&t.m(e,c),C(e,r,c),z(n,e,c),C(e,f,c),C(e,y,c),E(y,v),E(v,i),E(i,l),E(i,b),E(i,p),E(p,a),C(e,h,c),C(e,m,c),z(s,m,null),C(e,D,c),z(o,e,c),u=!0},p(e,[c]){e[4]?t?(t.p(e,c),c&16&&I(t,1)):(t=U(e),t.c(),I(t,1),t.m(r.parentNode,r)):t&&(ee(),H(t,1,1,()=>{t=null}),Z()),(!u||c&1)&&Y(a,e[0]);const L={};c&4&&(L.cardsData=[...e[2]]),s.$set(L);const S={};c&8&&(S.scrollBoxHeight=e[3]),o.$set(S)},i(e){u||(I(t),I(n.$$.fragment,e),I(s.$$.fragment,e),I(o.$$.fragment,e),u=!0)},o(e){H(t),H(n.$$.fragment,e),H(s.$$.fragment,e),H(o.$$.fragment,e),u=!1},d(e){e&&(g(r),g(f),g(y),g(h),g(m),g(D)),t&&t.d(e),N(n,e),N(s),N(o,e)}}}function ae(){return new Promise(d=>{const r=/./;r.toString=function(){d(!0)},console.log("%c",r)})}const ie=d=>d.stopPropagation();function ce(d,r,n){let f="",y=0;async function v(s,D,o){const u=await fetch("https://dentists-backend.onrender.com/api/"+s,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(D)});if(!u.ok)throw se("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${u.status}`);const t=await u.json();return o&&o(),t}let i,l=[];function _(){const s=document.querySelector(".scroll-box");s&&(console.log(getComputedStyle(s).height.split("px")[0]),n(3,b=Number(getComputedStyle(s).height.split("px")[0])))}let b=0,p=!1;A(async()=>{document.body.addEventListener("click",function(o){console.log(o.target.id),console.log(p),o.target.id!="menuuu"&&o.target.id!="menuio"&&p&&(p=!1)}),await v("mmu"),async function(){v("n/gc").then(u=>{u=u.d,n(2,l=u.map(t=>Object({title:t.courseName,id:t.courseID,text:t.courseDetails,duration:t.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+t.courseID,clickHandler:()=>{t.courseID}}))),console.log(l)},()=>{window.href="/404"})}(),v("aus").then(o=>{n(0,f=o.d)}),window.addEventListener("resize",_),_(),addEventListener("ocd",o=>{console.log("Heyyyyyyyy"),i=l.filter(u=>u.id==o.detail.id)[0],console.log(i)});function s(){var o=window.scrollY||document.documentElement.scrollTop,u=document.documentElement.scrollHeight-window.innerHeight,t=o/u*100;return t}const D=()=>{var o=document.getElementById("header");window.scrollY||document.documentElement.scrollTop,document.documentElement.hei,console.log(s()),o.style.borderBottomLeftRadius=s()-70+"px",o.style.borderBottomRightRadius=s()-70+"px",o.style.backgroundColor="rgba(46, 59, 111, "+s()/20+")"};return window.addEventListener("scroll",D),document.body.style.overflow=a?"hidden":"auto",()=>{window.removeEventListener("scroll",D),window.removeEventListener("resize",_),document.body.style.overflow="auto"}}),K(()=>{_()});let a=!1;function h(){n(4,a=!1)}return ae().then(s=>{s||console.log("Developer tools are closed.")}),[f,y,l,b,a,h,()=>{n(1,y=4),h()}]}class ye extends W{constructor(r){super(),X(this,r,ce,re,G,{})}}export{ye as component};