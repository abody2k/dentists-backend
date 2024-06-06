import{s as V,a as y,e as _,f as S,c as $,b as E,d as p,p as D,i as w,o as N,I as q,g as x,j as b,q as L,y as z}from"../chunks/scheduler.BVAlSgfp.js";import{S as F,i as O,c as C,a as k,m as B,t as g,b as h,d as P,e as I,g as M}from"../chunks/index.B7Z5KU1K.js";/* empty css                                                  */import{L as U}from"../chunks/Login.C3Rvx3o_.js";import{C as j}from"../chunks/CourseData.C6qg16eW.js";import{T as A}from"../chunks/TopBar.BEp2WrXN.js";import{F as G}from"../chunks/Footer.4NqE2Xnf.js";function H(l){let r,n,c,m="×",u,f,i,d,o,e;return i=new U({props:{func:l[7]}}),{c(){r=_("div"),n=_("div"),c=_("button"),c.textContent=m,u=y(),f=_("div"),C(i.$$.fragment),this.h()},l(t){r=$(t,"DIV",{class:!0});var s=E(r);n=$(s,"DIV",{class:!0});var a=E(n);c=$(a,"BUTTON",{class:!0,"data-svelte-h":!0}),x(c)!=="svelte-1vf4byn"&&(c.textContent=m),u=S(a),f=$(a,"DIV",{class:!0});var v=E(f);k(i.$$.fragment,v),v.forEach(p),a.forEach(p),s.forEach(p),this.h()},h(){D(c,"class","close-button svelte-3nttyt"),D(f,"class","content svelte-3nttyt"),D(n,"class","dialog-box svelte-3nttyt"),D(r,"class","overlay svelte-3nttyt")},m(t,s){w(t,r,s),b(r,n),b(n,c),b(n,u),b(n,f),B(i,f,null),d=!0,o||(e=[L(c,"click",l[6]),L(n,"click",Q),L(r,"click",l[6])],o=!0)},p(t,s){const a={};s&2&&(a.func=t[7]),i.$set(a)},i(t){d||(g(i.$$.fragment,t),d=!0)},o(t){h(i.$$.fragment,t),d=!1},d(t){t&&p(r),I(i),o=!1,z(e)}}}function J(l){let r,n,c,m,u,f,i,d,o=l[3]&&H(l);return n=new A({}),u=new j({props:{ID:l[4].courseID,expDate:l[0].expDate,onSize:l[5],c:!0,description:l[0].courseDetails?l[0].courseDetails:"",title:l[0].courseName,duration:l[0].courseDuration,src:"https://echo-dentists.s3.me-central-1.amazonaws.com/courses/"+l[4].courseID+"/0",func:R}}),i=new G({props:{scrollBoxHeight:l[2]}}),{c(){o&&o.c(),r=y(),C(n.$$.fragment),c=y(),m=_("div"),C(u.$$.fragment),f=y(),C(i.$$.fragment),this.h()},l(e){o&&o.l(e),r=S(e),k(n.$$.fragment,e),c=S(e),m=$(e,"DIV",{class:!0});var t=E(m);k(u.$$.fragment,t),t.forEach(p),f=S(e),k(i.$$.fragment,e),this.h()},h(){D(m,"class","scroll-box svelte-3nttyt")},m(e,t){o&&o.m(e,t),w(e,r,t),B(n,e,t),w(e,c,t),w(e,m,t),B(u,m,null),w(e,f,t),B(i,e,t),d=!0},p(e,[t]){e[3]?o?(o.p(e,t),t&8&&g(o,1)):(o=H(e),o.c(),g(o,1),o.m(r.parentNode,r)):o&&(M(),h(o,1,1,()=>{o=null}),P());const s={};t&1&&(s.expDate=e[0].expDate),t&1&&(s.description=e[0].courseDetails?e[0].courseDetails:""),t&1&&(s.title=e[0].courseName),t&1&&(s.duration=e[0].courseDuration),u.$set(s);const a={};t&4&&(a.scrollBoxHeight=e[2]),i.$set(a)},i(e){d||(g(o),g(n.$$.fragment,e),g(u.$$.fragment,e),g(i.$$.fragment,e),d=!0)},o(e){h(o),h(n.$$.fragment,e),h(u.$$.fragment,e),h(i.$$.fragment,e),d=!1},d(e){e&&(p(r),p(c),p(m),p(f)),o&&o.d(e),I(n,e),I(u),I(i,e)}}}function K(){return new Promise(l=>{const r=/./;r.toString=function(){l(!0)},console.log("%c",r)})}const Q=l=>l.stopPropagation(),R=function(){};function W(l,r,n){let{data:c}=r,m={...c};console.log("this is meta "),console.log(m);let u=0;N(()=>{c.err&&(location.href="/404")});let f=0;function i(){const s=document.querySelector(".scroll-box");s&&(console.log(getComputedStyle(s).height.split("px")[0]),n(2,f=Number(getComputedStyle(s).height.split("px")[0])))}let d=!1;N(async()=>{localStorage.getItem("li"),document.body.addEventListener("click",function(a){console.log(a.target.id),console.log(d),a.target.id!="menuuu"&&a.target.id!="menuio"&&d&&(d=!1)}),window.addEventListener("resize",i),i(),addEventListener("ocd",a=>{n(0,c=fellowships.filter(T=>T.id==a.detail.id)[0]);const v=document.createElement("a");v.href="/fellowships/"+a.detail.id,v.click()});const s=()=>{};return window.addEventListener("scroll",s),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",s),window.removeEventListener("resize",i),document.body.style.overflow="auto"}}),q(()=>{function s(){const a=document.querySelector(".scroll-box");a&&(console.log(getComputedStyle(a).height.split("px")[0]),n(2,f=Number(getComputedStyle(a).height.split("px")[0])))}s()});let o=!1;function e(){n(3,o=!1)}K().then(s=>{s||console.log("Developer tools are closed.")});const t=()=>{n(1,u=4),e()};return l.$$set=s=>{"data"in s&&n(0,c=s.data)},[c,u,f,o,m,i,e,t]}class ne extends F{constructor(r){super(),O(this,r,W,J,V,{data:0})}}export{ne as component};
