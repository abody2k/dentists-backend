import{s as z,a as E,e as w,f as k,c as $,b as S,d as g,p as b,i as y,o as H,G as N,g as F,j as D,q as j,y as O}from"../chunks/scheduler.CiUN_2Ko.js";import{S as P,i as M,c as C,a as L,m as B,t as v,b as _,d as U,e as I,g as G}from"../chunks/index.koTVZFH-.js";/* empty css                                                  */import{L as x}from"../chunks/Login.FjRI--rh.js";import{C as A}from"../chunks/CourseData.B0ds55Es.js";import{T as J}from"../chunks/TopBar.C-0jlrrX.js";import{F as K}from"../chunks/Footer.GshFUkh9.js";function V(l){let i,s,a,u="×",c,f,n,m,o,e;return n=new x({props:{func:l[7]}}),{c(){i=w("div"),s=w("div"),a=w("button"),a.textContent=u,c=E(),f=w("div"),C(n.$$.fragment),this.h()},l(t){i=$(t,"DIV",{class:!0});var d=S(i);s=$(d,"DIV",{class:!0});var p=S(s);a=$(p,"BUTTON",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-1vf4byn"&&(a.textContent=u),c=k(p),f=$(p,"DIV",{class:!0});var r=S(f);L(n.$$.fragment,r),r.forEach(g),p.forEach(g),d.forEach(g),this.h()},h(){b(a,"class","close-button svelte-1gjvtnn"),b(f,"class","content svelte-1gjvtnn"),b(s,"class","dialog-box svelte-1gjvtnn"),b(i,"class","overlay svelte-1gjvtnn")},m(t,d){y(t,i,d),D(i,s),D(s,a),D(s,c),D(s,f),B(n,f,null),m=!0,o||(e=[j(a,"click",l[5]),j(s,"click",W),j(i,"click",l[5])],o=!0)},p(t,d){const p={};d&1&&(p.func=t[7]),n.$set(p)},i(t){m||(v(n.$$.fragment,t),m=!0)},o(t){_(n.$$.fragment,t),m=!1},d(t){t&&g(i),I(n),o=!1,O(e)}}}function Q(l){let i,s,a,u,c,f,n,m,o=l[2]&&V(l);return s=new J({}),c=new A({props:{ID:l[3].fellowshipID,onSize:l[4],c:!1,description:l[3].fellowshipDetails?l[3].fellowshipDetails:"",title:l[3].fellowshipName,duration:l[3].fellowshipDuration,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+l[3].fellowshipID+"/0",func:l[8]}}),n=new K({props:{scrollBoxHeight:l[1]+200}}),{c(){o&&o.c(),i=E(),C(s.$$.fragment),a=E(),u=w("div"),C(c.$$.fragment),f=E(),C(n.$$.fragment),this.h()},l(e){o&&o.l(e),i=k(e),L(s.$$.fragment,e),a=k(e),u=$(e,"DIV",{class:!0});var t=S(u);L(c.$$.fragment,t),t.forEach(g),f=k(e),L(n.$$.fragment,e),this.h()},h(){b(u,"class","scroll-box svelte-1gjvtnn")},m(e,t){o&&o.m(e,t),y(e,i,t),B(s,e,t),y(e,a,t),y(e,u,t),B(c,u,null),y(e,f,t),B(n,e,t),m=!0},p(e,[t]){e[2]?o?(o.p(e,t),t&4&&v(o,1)):(o=V(e),o.c(),v(o,1),o.m(i.parentNode,i)):o&&(G(),_(o,1,1,()=>{o=null}),U());const d={};t&2&&(d.scrollBoxHeight=e[1]+200),n.$set(d)},i(e){m||(v(o),v(s.$$.fragment,e),v(c.$$.fragment,e),v(n.$$.fragment,e),m=!0)},o(e){_(o),_(s.$$.fragment,e),_(c.$$.fragment,e),_(n.$$.fragment,e),m=!1},d(e){e&&(g(i),g(a),g(u),g(f)),o&&o.d(e),I(s,e),I(c),I(n,e)}}}function R(){return new Promise(l=>{const i=/./;i.toString=function(){l(!0)},console.log("%c",i)})}const W=l=>l.stopPropagation();function X(l,i,s){let{data:a}=i,u={...a};console.log("this is meta "),console.log(a);let c=0,f=[];function n(){const r=document.querySelector(".scroll-box");r&&(console.log(getComputedStyle(r).height.split("px")[0]),s(1,m=Number(getComputedStyle(r).height.split("px")[0])))}let m=0,o=!1;H(async()=>{document.body.addEventListener("click",function(h){console.log(h.target.id),console.log(o),h.target.id!="menuuu"&&h.target.id!="menuio"&&o&&(o=!1)}),window.addEventListener("resize",n),n(),addEventListener("ocd",h=>{s(6,a=f.filter(q=>q.id==h.detail.id)[0]);const T=document.createElement("a");T.href="/fellowships/"+h.detail.id,T.click()});const r=()=>{};return window.addEventListener("scroll",r),document.body.style.overflow=e?"hidden":"auto",()=>{window.removeEventListener("scroll",r),window.removeEventListener("resize",n),document.body.style.overflow="auto"}}),N(()=>{n()});let e=!1;function t(){s(2,e=!1)}R().then(r=>{r||console.log("Developer tools are closed.")});const d=()=>{s(0,c=4),t()},p=function(){const r=document.createElement("a");r.href="/contact-us",r.click()};return l.$$set=r=>{"data"in r&&s(6,a=r.data)},[c,m,e,u,n,t,a,d,p]}class le extends P{constructor(i){super(),M(this,i,X,Q,z,{data:6})}}export{le as component};
