import{s as P,h as E,e as $,j as k,b,k as C,f as g,m as y,i as D,w as H,K as V,d as z,p as S,q as N,y as j}from"../chunks/scheduler.DNJrJgMj.js";import{S as F,i as x,c as B,b as T,m as I,t as h,a as v,e as M,d as L,g as U}from"../chunks/index.BOq-2PnM.js";/* empty css                                                  */import{L as J}from"../chunks/Login.X-j8pFSe.js";import{C as K}from"../chunks/CourseData.D_pVU0s7.js";import{n as A}from"../chunks/not.DyS5IBO6.js";import{T as G}from"../chunks/TopBar.CoVlo9HB.js";import{F as Q}from"../chunks/Footer.Bw4COTZw.js";function q(r){let l,n,i,d="×",u,f,a,m,o,e;return a=new J({props:{func:r[7]}}),{c(){l=$("div"),n=$("div"),i=$("button"),i.textContent=d,u=E(),f=$("div"),B(a.$$.fragment),this.h()},l(t){l=b(t,"DIV",{class:!0});var p=C(l);n=b(p,"DIV",{class:!0});var s=C(n);i=b(s,"BUTTON",{class:!0,"data-svelte-h":!0}),z(i)!=="svelte-1vf4byn"&&(i.textContent=d),u=k(s),f=b(s,"DIV",{class:!0});var c=C(f);T(a.$$.fragment,c),c.forEach(g),s.forEach(g),p.forEach(g),this.h()},h(){y(i,"class","close-button svelte-1l1p0ba"),y(f,"class","content svelte-1l1p0ba"),y(n,"class","dialog-box svelte-1l1p0ba"),y(l,"class","overlay svelte-1l1p0ba")},m(t,p){D(t,l,p),S(l,n),S(n,i),S(n,u),S(n,f),I(a,f,null),m=!0,o||(e=[N(i,"click",r[6]),N(n,"click",X),N(l,"click",r[6])],o=!0)},p(t,p){const s={};p&2&&(s.func=t[7]),a.$set(s)},i(t){m||(h(a.$$.fragment,t),m=!0)},o(t){v(a.$$.fragment,t),m=!1},d(t){t&&g(l),L(a),o=!1,j(e)}}}function R(r){let l,n,i,d,u,f,a,m,o=r[3]&&q(r);return n=new G({}),u=new K({props:{ID:r[4].courseID,onSize:r[5],c:!0,description:r[0].courseDetails?r[0].courseDetails:"",title:r[0].courseName,duration:r[0].courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+r[4].courseID+"/0",func:Y}}),a=new Q({props:{scrollBoxHeight:r[2]}}),{c(){o&&o.c(),l=E(),B(n.$$.fragment),i=E(),d=$("div"),B(u.$$.fragment),f=E(),B(a.$$.fragment),this.h()},l(e){o&&o.l(e),l=k(e),T(n.$$.fragment,e),i=k(e),d=b(e,"DIV",{class:!0});var t=C(d);T(u.$$.fragment,t),t.forEach(g),f=k(e),T(a.$$.fragment,e),this.h()},h(){y(d,"class","scroll-box svelte-1l1p0ba")},m(e,t){o&&o.m(e,t),D(e,l,t),I(n,e,t),D(e,i,t),D(e,d,t),I(u,d,null),D(e,f,t),I(a,e,t),m=!0},p(e,[t]){e[3]?o?(o.p(e,t),t&8&&h(o,1)):(o=q(e),o.c(),h(o,1),o.m(l.parentNode,l)):o&&(U(),v(o,1,1,()=>{o=null}),M());const p={};t&1&&(p.description=e[0].courseDetails?e[0].courseDetails:""),t&1&&(p.title=e[0].courseName),t&1&&(p.duration=e[0].courseDuration),u.$set(p);const s={};t&4&&(s.scrollBoxHeight=e[2]),a.$set(s)},i(e){m||(h(o),h(n.$$.fragment,e),h(u.$$.fragment,e),h(a.$$.fragment,e),m=!0)},o(e){v(o),v(n.$$.fragment,e),v(u.$$.fragment,e),v(a.$$.fragment,e),m=!1},d(e){e&&(g(l),g(i),g(d),g(f)),o&&o.d(e),L(n,e),L(u),L(a,e)}}}function W(){return new Promise(r=>{const l=/./;l.toString=function(){r(!0)},console.log("%c",l)})}const X=r=>r.stopPropagation(),Y=function(){};function Z(r,l,n){let{data:i}=l,d={...i};console.log("this is meta "),console.log(d);let u=0;H(()=>{i.err&&(location.href="/404")});async function f(s,c,_){const w=await fetch("http://18.207.0.24:3000/api/"+s,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});if(!w.ok)throw A("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${w.status}`);const O=await w.json();return _&&_(),O}let a=0;function m(){const s=document.querySelector(".scroll-box");s&&(console.log(getComputedStyle(s).height.split("px")[0]),n(2,a=Number(getComputedStyle(s).height.split("px")[0])))}let o=!1;H(async()=>{localStorage.getItem("li"),document.body.addEventListener("click",function(c){console.log(c.target.id),console.log(o),c.target.id!="menuuu"&&c.target.id!="menuio"&&o&&(o=!1)}),await f("mmu"),f("aus").then(c=>{c.d}),window.addEventListener("resize",m),m(),addEventListener("ocd",c=>{n(0,i=fellowships.filter(w=>w.id==c.detail.id)[0]);const _=document.createElement("a");_.href="/fellowships/"+c.detail.id,_.click()});const s=()=>{};return window.addEventListener("scroll",s),document.body.style.overflow=e?"hidden":"auto",()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",m),document.body.style.overflow="auto"}}),V(()=>{function s(){const c=document.querySelector(".scroll-box");c&&(console.log(getComputedStyle(c).height.split("px")[0]),n(2,a=Number(getComputedStyle(c).height.split("px")[0])))}s()});let e=!1;function t(){n(3,e=!1)}W().then(s=>{s||console.log("Developer tools are closed.")});const p=()=>{n(1,u=4),t()};return r.$$set=s=>{"data"in s&&n(0,i=s.data)},[i,u,a,e,d,m,t,p]}class ie extends F{constructor(l){super(),x(this,l,Z,R,P,{data:0})}}export{ie as component};
