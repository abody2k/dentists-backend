import{s as K,a as E,e as C,f as L,c as b,b as V,g as q,d as w,p,i as j,j as _,q as H,y as G,o as Q,I as R}from"../chunks/scheduler.BVAlSgfp.js";import{S as W,i as X,c as N,a as z,m as F,t as S,b as B,d as Y,e as U,g as Z}from"../chunks/index.B7Z5KU1K.js";/* empty css                                                  */import{L as ee}from"../chunks/Login.C3Rvx3o_.js";import{C as te}from"../chunks/Contact.BLDLQWoh.js";import{n as ne}from"../chunks/not.DlsTAyDt.js";import{T as oe}from"../chunks/TopBar.BEp2WrXN.js";import{F as se}from"../chunks/Footer.4NqE2Xnf.js";function A(r){let s,n,f,m="×",i,l,o,g,y,v;return o=new ee({props:{func:r[5]}}),{c(){s=C("div"),n=C("div"),f=C("button"),f.textContent=m,i=E(),l=C("div"),N(o.$$.fragment),this.h()},l(d){s=b(d,"DIV",{class:!0});var $=V(s);n=b($,"DIV",{class:!0});var c=V(n);f=b(c,"BUTTON",{class:!0,"data-svelte-h":!0}),q(f)!=="svelte-1vf4byn"&&(f.textContent=m),i=L(c),l=b(c,"DIV",{class:!0});var t=V(l);z(o.$$.fragment,t),t.forEach(w),c.forEach(w),$.forEach(w),this.h()},h(){p(f,"class","close-button svelte-dux7tv"),p(l,"class","content svelte-dux7tv"),p(n,"class","dialog-box svelte-dux7tv"),p(s,"class","overlay svelte-dux7tv")},m(d,$){j(d,s,$),_(s,n),_(n,f),_(n,i),_(n,l),F(o,l,null),g=!0,y||(v=[H(f,"click",r[4]),H(n,"click",ie),H(s,"click",r[4])],y=!0)},p(d,$){const c={};$&1&&(c.func=d[5]),o.$set(c)},i(d){g||(S(o.$$.fragment,d),g=!0)},o(d){B(o.$$.fragment,d),g=!1},d(d){d&&w(s),U(o),y=!1,G(v)}}}function le(r){let s,n,f,m,i,l,o,g="Courses",y,v,d="Fellowships",$,c,t="Contact us",h,D,k,I,x,O,M,J,a=r[3]&&A(r);return n=new oe({}),k=new te({}),x=new se({props:{scrollBoxHeight:r[1]}}),{c(){a&&a.c(),s=E(),N(n.$$.fragment),f=E(),m=C("div"),i=C("div"),l=C("ul"),o=C("li"),o.textContent=g,y=E(),v=C("li"),v.textContent=d,$=E(),c=C("li"),c.textContent=t,D=E(),N(k.$$.fragment),I=E(),N(x.$$.fragment),this.h()},l(e){a&&a.l(e),s=L(e),z(n.$$.fragment,e),f=L(e),m=b(e,"DIV",{id:!0});var u=V(m);i=b(u,"DIV",{class:!0,id:!0,style:!0});var P=V(i);l=b(P,"UL",{class:!0});var T=V(l);o=b(T,"LI",{class:!0,"data-svelte-h":!0}),q(o)!=="svelte-1btzhvq"&&(o.textContent=g),y=L(T),v=b(T,"LI",{class:!0,"data-svelte-h":!0}),q(v)!=="svelte-1mhff88"&&(v.textContent=d),$=L(T),c=b(T,"LI",{class:!0,"data-svelte-h":!0}),q(c)!=="svelte-1j80rm3"&&(c.textContent=t),T.forEach(w),P.forEach(w),D=L(u),z(k.$$.fragment,u),u.forEach(w),I=L(e),z(x.$$.fragment,e),this.h()},h(){p(o,"class","svelte-dux7tv"),p(v,"class","svelte-dux7tv"),p(c,"class","svelte-dux7tv"),p(l,"class","svelte-dux7tv"),p(i,"class","side-menu"),p(i,"id","menuu"),p(i,"style",h=`display: ${r[2]?"block":"none"};`),p(m,"id","main")},m(e,u){a&&a.m(e,u),j(e,s,u),F(n,e,u),j(e,f,u),j(e,m,u),_(m,i),_(i,l),_(l,o),_(l,y),_(l,v),_(l,$),_(l,c),_(m,D),F(k,m,null),j(e,I,u),F(x,e,u),O=!0,M||(J=[H(o,"click",r[6]),H(v,"click",r[7]),H(c,"click",r[8])],M=!0)},p(e,[u]){e[3]?a?(a.p(e,u),u&8&&S(a,1)):(a=A(e),a.c(),S(a,1),a.m(s.parentNode,s)):a&&(Z(),B(a,1,1,()=>{a=null}),Y()),(!O||u&4&&h!==(h=`display: ${e[2]?"block":"none"};`))&&p(i,"style",h);const P={};u&2&&(P.scrollBoxHeight=e[1]),x.$set(P)},i(e){O||(S(a),S(n.$$.fragment,e),S(k.$$.fragment,e),S(x.$$.fragment,e),O=!0)},o(e){B(a),B(n.$$.fragment,e),B(k.$$.fragment,e),B(x.$$.fragment,e),O=!1},d(e){e&&(w(s),w(f),w(m),w(I)),a&&a.d(e),U(n,e),U(k),U(x,e),M=!1,G(J)}}}function ae(){return new Promise(r=>{const s=/./;s.toString=function(){r(!0)},console.log("%c",s)})}const ie=r=>r.stopPropagation();function re(r,s,n){let f=0;async function m(t,h,D){const k=await fetch("http://3.29.235.228:3000/api/"+t,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(h)});if(!k.ok)throw ne("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${k.status}`);const I=await k.json();return D&&D(),I}function i(){const t=document.querySelector("#main");t&&(console.log(getComputedStyle(t).height.split("px")[0]),n(1,l=Number(getComputedStyle(t).height.split("px")[0])))}let l=0,o=!1;Q(async()=>{document.body.addEventListener("click",function(h){console.log(h.target.id),console.log(o),h.target.id!="menuuu"&&h.target.id!="menuio"&&o&&n(2,o=!1)}),m("aus").then(h=>{h.d}),window.addEventListener("resize",i),i();const t=()=>{};return window.addEventListener("scroll",t),document.body.style.overflow=g?"hidden":"auto",()=>{window.removeEventListener("scroll",t),window.removeEventListener("resize",i),document.body.style.overflow="auto"}}),R(()=>{i()});let g=!1;function y(){n(3,g=!1)}return ae().then(t=>{t||console.log("Developer tools are closed.")}),[f,l,o,g,y,()=>{n(0,f=4),y()},function(){console.log("clicked on a");const t=document.createElement("a");t.href="/courses",t.click()},function(){const t=document.createElement("a");t.href="/fellowships",t.click()},function(){const t=document.createElement("a");t.href="/contact-us",t.click()}]}class _e extends W{constructor(s){super(),X(this,s,re,le,K,{})}}export{_e as component};