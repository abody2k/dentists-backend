import{s as V,h as D,e as y,j as k,b,k as T,f as h,o as L,m as E,i as _,w as N,K as j,d as z,p as H,q as B,y as F}from"../chunks/scheduler.C4tHwGv5.js";import{S as G,i as M,c as S,b as q,m as C,t as v,a as w,e as U,d as I,g as J}from"../chunks/index.CJfZO0_H.js";import"../chunks/Map.luQdoRzM.js";import{G as K}from"../chunks/Grid.DnF-ia0x.js";import{L as A}from"../chunks/Login.qFaIELi9.js";import{n as Q}from"../chunks/not.DNvn3Bfc.js";import{T as R}from"../chunks/TopBar.D9t-qXuj.js";import{F as W}from"../chunks/Footer.mO6fB1ok.js";import{P as X}from"../chunks/Path.BqA6Bw1H.js";function P(s){let r,n,a,u="×",m,f,l,c,$,d;return l=new A({props:{func:s[5]}}),{c(){r=y("div"),n=y("div"),a=y("button"),a.textContent=u,m=D(),f=y("div"),S(l.$$.fragment),this.h()},l(i){r=b(i,"DIV",{class:!0});var o=T(r);n=b(o,"DIV",{class:!0});var e=T(n);a=b(e,"BUTTON",{class:!0,"data-svelte-h":!0}),z(a)!=="svelte-1vf4byn"&&(a.textContent=u),m=k(e),f=b(e,"DIV",{class:!0});var t=T(f);q(l.$$.fragment,t),t.forEach(h),e.forEach(h),o.forEach(h),this.h()},h(){E(a,"class","close-button svelte-4lom9q"),E(f,"class","content svelte-4lom9q"),E(n,"class","dialog-box svelte-4lom9q"),E(r,"class","overlay svelte-4lom9q")},m(i,o){_(i,r,o),H(r,n),H(n,a),H(n,m),H(n,f),C(l,f,null),c=!0,$||(d=[B(a,"click",s[4]),B(n,"click",x),B(r,"click",s[4])],$=!0)},p(i,o){const e={};o&1&&(e.func=i[5]),l.$set(e)},i(i){c||(v(l.$$.fragment,i),c=!0)},o(i){w(l.$$.fragment,i),c=!1},d(i){i&&h(r),I(l),$=!1,F(d)}}}function Y(s){let r,n,a,u,m,f,l,c,$,d,i,o=s[3]&&P(s);return n=new R({}),m=new X({props:{links:[{link:"/",txt:"Home"},{link:"/courses",txt:"Courses"}]}}),c=new K({props:{f:!1,cardsData:[...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1],...s[1]]}}),d=new W({props:{scrollBoxHeight:s[2]}}),{c(){o&&o.c(),r=D(),S(n.$$.fragment),a=D(),u=y("div"),S(m.$$.fragment),f=D(),l=y("div"),S(c.$$.fragment),$=D(),S(d.$$.fragment),this.h()},l(e){o&&o.l(e),r=k(e),q(n.$$.fragment,e),a=k(e),u=b(e,"DIV",{style:!0});var t=T(u);q(m.$$.fragment,t),t.forEach(h),f=k(e),l=b(e,"DIV",{class:!0});var p=T(l);q(c.$$.fragment,p),p.forEach(h),$=k(e),q(d.$$.fragment,e),this.h()},h(){L(u,"width","90vw"),L(u,"display","inline-table"),L(u,"margin-top","141px"),E(l,"class","scroll-box svelte-4lom9q")},m(e,t){o&&o.m(e,t),_(e,r,t),C(n,e,t),_(e,a,t),_(e,u,t),C(m,u,null),_(e,f,t),_(e,l,t),C(c,l,null),_(e,$,t),C(d,e,t),i=!0},p(e,[t]){e[3]?o?(o.p(e,t),t&8&&v(o,1)):(o=P(e),o.c(),v(o,1),o.m(r.parentNode,r)):o&&(J(),w(o,1,1,()=>{o=null}),U());const p={};t&2&&(p.cardsData=[...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1],...e[1]]),c.$set(p);const g={};t&4&&(g.scrollBoxHeight=e[2]),d.$set(g)},i(e){i||(v(o),v(n.$$.fragment,e),v(m.$$.fragment,e),v(c.$$.fragment,e),v(d.$$.fragment,e),i=!0)},o(e){w(o),w(n.$$.fragment,e),w(m.$$.fragment,e),w(c.$$.fragment,e),w(d.$$.fragment,e),i=!1},d(e){e&&(h(r),h(a),h(u),h(f),h(l),h($)),o&&o.d(e),I(n,e),I(m),I(c),I(d,e)}}}function Z(){return new Promise(s=>{const r=/./;r.toString=function(){s(!0)},console.log("%c",r)})}const x=s=>s.stopPropagation();function ee(s,r,n){let a=0;async function u(e,t,p){const g=await fetch("https://dentists-backend.onrender.com/api/"+e,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(!g.ok)throw Q("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${g.status}`);const O=await g.json();return p&&p(),O}let m,f=[];function l(){const e=document.querySelector(".scroll-box");e&&(console.log(getComputedStyle(e).height.split("px")[0]),n(2,c=Number(getComputedStyle(e).height.split("px")[0])))}let c=0,$=!1;N(async()=>{document.body.addEventListener("click",function(t){console.log(t.target.id),console.log($),t.target.id!="menuuu"&&t.target.id!="menuio"&&$&&($=!1)}),async function(){u("n/gc").then(p=>{p=p.d,n(1,f=p.map(g=>Object({title:g.courseName,id:g.courseID,text:g.courseDetails,duration:g.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+g.courseID,clickHandler:()=>{g.courseID}}))),console.log(f)},()=>{window.href="/404"})}(),u("aus").then(t=>{t.d}),window.addEventListener("resize",l),l(),addEventListener("ocd",t=>{console.log("Heyyyyyyyy"),m=f.filter(p=>p.id==t.detail.id)[0],console.log(m)});const e=()=>{};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e),window.removeEventListener("resize",l),document.body.style.overflow="auto"}}),j(()=>{l()});let d=!1;function i(){n(3,d=!1)}return Z().then(e=>{e||console.log("Developer tools are closed.")}),[a,f,c,d,i,()=>{n(0,a=4),i()}]}class ce extends G{constructor(r){super(),M(this,r,ee,Y,V,{})}}export{ce as component};
