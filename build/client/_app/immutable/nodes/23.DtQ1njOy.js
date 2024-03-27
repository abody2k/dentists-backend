import{s as W,h as z,e as $,j as L,b as y,k as D,d as M,f as g,m as v,o as K,i as V,p as k,q as P,y as R,w as X,J as Y}from"../chunks/scheduler.CvS8aZFR.js";import{S as Z,i as ee,c as N,b as q,m as U,t as S,a as O,e as te,d as H,g as se}from"../chunks/index.BLvvEpyq.js";import{M as ne}from"../chunks/Map.BFxH1DHB.js";import{L as le}from"../chunks/Login.Vg29bVck.js";import{C as oe}from"../chunks/Contact.BJyNFqlR.js";import{n as ae}from"../chunks/not.DNvn3Bfc.js";import{T as ie}from"../chunks/TopBar.CLs3f67J.js";/* empty css                                                     */function Q(i){let s,n,r,c="×",a,l,d,w,h,I;return d=new le({props:{func:i[4]}}),{c(){s=$("div"),n=$("div"),r=$("button"),r.textContent=c,a=z(),l=$("div"),N(d.$$.fragment),this.h()},l(u){s=y(u,"DIV",{class:!0});var f=D(s);n=y(f,"DIV",{class:!0});var t=D(n);r=y(t,"BUTTON",{class:!0,"data-svelte-h":!0}),M(r)!=="svelte-1vf4byn"&&(r.textContent=c),a=L(t),l=y(t,"DIV",{class:!0});var m=D(l);q(d.$$.fragment,m),m.forEach(g),t.forEach(g),f.forEach(g),this.h()},h(){v(r,"class","close-button svelte-zewx5k"),v(l,"class","content svelte-zewx5k"),v(n,"class","dialog-box svelte-zewx5k"),v(s,"class","overlay svelte-zewx5k")},m(u,f){V(u,s,f),k(s,n),k(n,r),k(n,a),k(n,l),U(d,l,null),w=!0,h||(I=[P(r,"click",i[3]),P(n,"click",ue),P(s,"click",i[3])],h=!0)},p(u,f){const t={};f&1&&(t.func=u[4]),d.$set(t)},i(u){w||(S(d.$$.fragment,u),w=!0)},o(u){O(d.$$.fragment,u),w=!1},d(u){u&&g(s),H(d),h=!1,R(I)}}}function re(i){let s,n,r,c,a,l,d="Courses",w,h,I="Fellowships",u,f,t="Contact us",m,C,_,x,J,b,E,j,F,A,o=i[2]&&Q(i);return n=new ie({}),x=new oe({}),E=new ne({}),{c(){o&&o.c(),s=z(),N(n.$$.fragment),r=z(),c=$("div"),a=$("ul"),l=$("li"),l.textContent=d,w=z(),h=$("li"),h.textContent=I,u=z(),f=$("li"),f.textContent=t,C=z(),_=$("div"),N(x.$$.fragment),J=z(),b=$("div"),N(E.$$.fragment),this.h()},l(e){o&&o.l(e),s=L(e),q(n.$$.fragment,e),r=L(e),c=y(e,"DIV",{class:!0,id:!0,style:!0});var p=D(c);a=y(p,"UL",{class:!0});var T=D(a);l=y(T,"LI",{class:!0,"data-svelte-h":!0}),M(l)!=="svelte-1k7j4ue"&&(l.textContent=d),w=L(T),h=y(T,"LI",{class:!0,"data-svelte-h":!0}),M(h)!=="svelte-nh4gew"&&(h.textContent=I),u=L(T),f=y(T,"LI",{class:!0,"data-svelte-h":!0}),M(f)!=="svelte-3s5t57"&&(f.textContent=t),T.forEach(g),p.forEach(g),C=L(e),_=y(e,"DIV",{class:!0});var B=D(_);q(x.$$.fragment,B),J=L(B),b=y(B,"DIV",{class:!0,style:!0});var G=D(b);q(E.$$.fragment,G),G.forEach(g),B.forEach(g),this.h()},h(){v(l,"class","svelte-zewx5k"),v(h,"class","svelte-zewx5k"),v(f,"class","svelte-zewx5k"),v(a,"class","svelte-zewx5k"),v(c,"class","side-menu"),v(c,"id","menuu"),v(c,"style",m=`display: ${i[1]?"block":"none"};`),v(b,"class","map-box svelte-zewx5k"),K(b,"width","81%"),K(b,"height","200px"),v(_,"class","scroll-box svelte-zewx5k")},m(e,p){o&&o.m(e,p),V(e,s,p),U(n,e,p),V(e,r,p),V(e,c,p),k(c,a),k(a,l),k(a,w),k(a,h),k(a,u),k(a,f),V(e,C,p),V(e,_,p),U(x,_,null),k(_,J),k(_,b),U(E,b,null),j=!0,F||(A=[P(l,"click",i[5]),P(h,"click",i[6]),P(f,"click",i[7])],F=!0)},p(e,[p]){e[2]?o?(o.p(e,p),p&4&&S(o,1)):(o=Q(e),o.c(),S(o,1),o.m(s.parentNode,s)):o&&(se(),O(o,1,1,()=>{o=null}),te()),(!j||p&2&&m!==(m=`display: ${e[1]?"block":"none"};`))&&v(c,"style",m)},i(e){j||(S(o),S(n.$$.fragment,e),S(x.$$.fragment,e),S(E.$$.fragment,e),j=!0)},o(e){O(o),O(n.$$.fragment,e),O(x.$$.fragment,e),O(E.$$.fragment,e),j=!1},d(e){e&&(g(s),g(r),g(c),g(C),g(_)),o&&o.d(e),H(n,e),H(x),H(E),F=!1,R(A)}}}function ce(){return new Promise(i=>{const s=/./;s.toString=function(){i(!0)},console.log("%c",s)})}const ue=i=>i.stopPropagation();function fe(i,s,n){let r=0;async function c(t,m,C){const _=await fetch("https://dentists-backend.onrender.com/api/"+t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(m)});if(!_.ok)throw ae("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${_.status}`);const x=await _.json();return C&&C(),x}function a(){const t=document.querySelector(".scroll-box");t&&(console.log(getComputedStyle(t).height.split("px")[0]),Number(getComputedStyle(t).height.split("px")[0]))}let l=!1;X(async()=>{document.body.addEventListener("click",function(m){console.log(m.target.id),console.log(l),m.target.id!="menuuu"&&m.target.id!="menuio"&&l&&n(1,l=!1)}),await c("mmu"),c("aus").then(m=>{m.d}),window.addEventListener("resize",a),a();const t=()=>{};return window.addEventListener("scroll",t),document.body.style.overflow=d?"hidden":"auto",()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",a),document.body.style.overflow="auto"}}),Y(()=>{a()});let d=!1;function w(){n(2,d=!1)}return ce().then(t=>{t||console.log("Developer tools are closed.")}),[r,l,d,w,()=>{n(0,r=4),w()},function(){console.log("clicked on a");const t=document.createElement("a");t.href="/courses",t.click()},function(){const t=document.createElement("a");t.href="/fellowships",t.click()},function(){const t=document.createElement("a");t.href="/contact-us",t.click()}]}class we extends Z{constructor(s){super(),ee(this,s,fe,re,W,{})}}export{we as component};