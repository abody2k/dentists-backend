import{s as V,b as y,e as h,h as k,c as _,f as E,d as g,j as $,i as w,o as N,J as j,g as q,k as b,l as L,y as z,n as F}from"../chunks/scheduler._qeGDSQ8.js";import{S as J,i as M,c as S,a as C,m as T,t as p,b as v,e as x,d as D,g as H}from"../chunks/index.CYIwKu5b.js";/* empty css                                                  */import{L as U}from"../chunks/Login.J4XuPzUD.js";import{C as A}from"../chunks/Contact.Bscm2vAf.js";import{n as G}from"../chunks/not.D11_haEW.js";import{T as K}from"../chunks/TopBar.roG485J5.js";import{F as Q}from"../chunks/Footer.BVYkRAc6.js";function O(f){let o,l,n,i="×",d,u,r,m,s,c;return r=new U({props:{func:f[5]}}),{c(){o=h("div"),l=h("div"),n=h("button"),n.textContent=i,d=y(),u=h("div"),S(r.$$.fragment),this.h()},l(e){o=_(e,"DIV",{class:!0});var t=E(o);l=_(t,"DIV",{class:!0});var a=E(l);n=_(a,"BUTTON",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-1vf4byn"&&(n.textContent=i),d=k(a),u=_(a,"DIV",{class:!0});var B=E(u);C(r.$$.fragment,B),B.forEach(g),a.forEach(g),t.forEach(g),this.h()},h(){$(n,"class","close-button svelte-dux7tv"),$(u,"class","content svelte-dux7tv"),$(l,"class","dialog-box svelte-dux7tv"),$(o,"class","overlay svelte-dux7tv")},m(e,t){w(e,o,t),b(o,l),b(l,n),b(l,d),b(l,u),T(r,u,null),m=!0,s||(c=[L(n,"click",f[4]),L(l,"click",X),L(o,"click",f[4])],s=!0)},p(e,t){const a={};t&1&&(a.func=e[5]),r.$set(a)},i(e){m||(p(r.$$.fragment,e),m=!0)},o(e){v(r.$$.fragment,e),m=!1},d(e){e&&g(o),D(r),s=!1,z(c)}}}function P(f){let o,l;return o=new A({props:{allInfo:f[1]}}),{c(){S(o.$$.fragment)},l(n){C(o.$$.fragment,n)},m(n,i){T(o,n,i),l=!0},p(n,i){const d={};i&2&&(d.allInfo=n[1]),o.$set(d)},i(n){l||(p(o.$$.fragment,n),l=!0)},o(n){v(o.$$.fragment,n),l=!1},d(n){D(o,n)}}}function R(f){let o,l,n,i,d=f[1],u,r,m,s=f[3]&&O(f);l=new K({});let c=P(f);return r=new Q({props:{scrollBoxHeight:f[2]}}),{c(){s&&s.c(),o=y(),S(l.$$.fragment),n=y(),i=h("div"),c.c(),u=y(),S(r.$$.fragment),this.h()},l(e){s&&s.l(e),o=k(e),C(l.$$.fragment,e),n=k(e),i=_(e,"DIV",{id:!0});var t=E(i);c.l(t),t.forEach(g),u=k(e),C(r.$$.fragment,e),this.h()},h(){$(i,"id","main")},m(e,t){s&&s.m(e,t),w(e,o,t),T(l,e,t),w(e,n,t),w(e,i,t),c.m(i,null),w(e,u,t),T(r,e,t),m=!0},p(e,[t]){e[3]?s?(s.p(e,t),t&8&&p(s,1)):(s=O(e),s.c(),p(s,1),s.m(o.parentNode,o)):s&&(H(),v(s,1,1,()=>{s=null}),x()),t&2&&V(d,d=e[1])?(H(),v(c,1,1,F),x(),c=P(e),c.c(),p(c,1),c.m(i,null)):c.p(e,t);const a={};t&4&&(a.scrollBoxHeight=e[2]),r.$set(a)},i(e){m||(p(s),p(l.$$.fragment,e),p(c),p(r.$$.fragment,e),m=!0)},o(e){v(s),v(l.$$.fragment,e),v(c),v(r.$$.fragment,e),m=!1},d(e){e&&(g(o),g(n),g(i),g(u)),s&&s.d(e),D(l,e),c.d(e),D(r,e)}}}function W(){return new Promise(f=>{const o=/./;o.toString=function(){f(!0)},console.log("%c",o)})}const X=f=>f.stopPropagation();function Y(f,o,l){let n=0,i={};async function d(t,a,B){const I=await fetch("https://echo-dent.net/api/"+t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)});if(!I.ok)throw G("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${I.status}`);return await I.json()}function u(){const t=document.querySelector("#main");t&&(console.log(getComputedStyle(t).height.split("px")[0]),l(2,r=Number(getComputedStyle(t).height.split("px")[0])))}let r=0,m=!1;N(async()=>{document.body.addEventListener("click",function(a){console.log(a.target.id),console.log(m),a.target.id!="menuuu"&&a.target.id!="menuio"&&m&&(m=!1)}),d("aus").then(a=>{a.d,l(1,i=a)}),window.addEventListener("resize",u),u();const t=()=>{};return window.addEventListener("scroll",t),document.body.style.overflow=s?"hidden":"auto",()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",u),document.body.style.overflow="auto"}}),j(()=>{u()});let s=!1;function c(){l(3,s=!1)}return W().then(t=>{t||console.log("Developer tools are closed.")}),[n,i,r,s,c,()=>{l(0,n=4),c()}]}class ie extends J{constructor(o){super(),M(this,o,Y,R,V,{})}}export{ie as component};