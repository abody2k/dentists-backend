import{s as O,e as d,t as T,b as y,c as m,f as z,p as L,d as v,h as E,g as S,j as _,r as B,i as D,k as c,l as C,q as H,n as I,y as M,o as N}from"./scheduler.C7Xo_3aa.js";import{S as q,i as A}from"./index.NYh16Rov.js";/* empty css                                          */function G(i){let t,e,l,s,u,a,r="رجوع ›",g,n,b='<img src="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png" class="circle3LOGO svelte-ivf8z0"/>',p,k;return{c(){t=d("header"),e=d("nav"),l=d("p"),s=T(i[0]),u=y(),a=d("button"),a.textContent=r,g=y(),n=d("div"),n.innerHTML=b,this.h()},l(o){t=m(o,"HEADER",{style:!0,class:!0});var h=z(t);e=m(h,"NAV",{class:!0});var f=z(e);l=m(f,"P",{});var x=z(l);s=L(x,i[0]),x.forEach(v),u=E(f),a=m(f,"BUTTON",{class:!0,"data-svelte-h":!0}),S(a)!=="svelte-1nna8zf"&&(a.textContent=r),g=E(f),n=m(f,"DIV",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-8c1u53"&&(n.innerHTML=b),f.forEach(v),h.forEach(v),this.h()},h(){_(a,"class","svelte-ivf8z0"),_(n,"class","circle1 svelte-ivf8z0"),_(e,"class","svelte-ivf8z0"),B(t,"margin-bottom","20px"),_(t,"class","svelte-ivf8z0")},m(o,h){D(o,t,h),c(t,e),c(e,l),c(l,s),c(e,u),c(e,a),c(e,g),c(e,n),p||(k=[C(a,"click",i[2]),C(n,"click",i[3])],p=!0)},p(o,[h]){h&1&&H(s,o[0])},i:I,o:I,d(o){o&&v(t),p=!1,M(k)}}}function U(i,t,e){let{title:l}=t,{auth:s=0}=t;N(()=>{if(s==12){if(localStorage.getItem("t")==null||localStorage.getItem("t")==null){location.href="/";return}if(s!=Number(localStorage.getItem("t"))){location.href=path||"/";return}}});const u=()=>{history.back()},a=()=>{location.href=localStorage.getItem("t")==0?"/admin":"/"};return i.$$set=r=>{"title"in r&&e(0,l=r.title),"auth"in r&&e(1,s=r.auth)},[l,s,u,a]}class P extends q{constructor(t){super(),A(this,t,U,G,O,{title:0,auth:1})}}export{P as B};
