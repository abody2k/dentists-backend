import{s as y,e as b,t as H,h as q,b as k,k as v,l as B,j as C,f as o,m as f,i as g,p as m,q as S,F as T,r as j,n as d,x as _}from"./scheduler.QnGaJ3C6.js";import{S as z,i as E}from"./index.CP1mFRt2.js";/* empty css                                             */function h(s){let e,i;return{c(){e=b("img"),this.h()},l(l){e=k(l,"IMG",{src:!0}),this.h()},h(){_(e.src,i=s[3])||f(e,"src",i)},m(l,a){g(l,e,a)},p(l,a){a&8&&!_(e.src,i=l[3])&&f(e,"src",i)},d(l){l&&o(e)}}}function F(s){let e,i,l,a,c,u,t=s[3]&&h(s);return{c(){e=b("button"),i=H(s[0]),l=q(),t&&t.c(),this.h()},l(r){e=k(r,"BUTTON",{class:!0,style:!0});var n=v(e);i=B(n,s[0]),l=C(n),t&&t.l(n),n.forEach(o),this.h()},h(){f(e,"class","button svelte-vzduap"),f(e,"style",a="border-radius:"+s[2])},m(r,n){g(r,e,n),m(e,i),m(e,l),t&&t.m(e,null),c||(u=S(e,"click",function(){T(s[1])&&s[1].apply(this,arguments)}),c=!0)},p(r,[n]){s=r,n&1&&j(i,s[0]),s[3]?t?t.p(s,n):(t=h(s),t.c(),t.m(e,null)):t&&(t.d(1),t=null),n&4&&a!==(a="border-radius:"+s[2])&&f(e,"style",a)},i:d,o:d,d(r){r&&o(e),t&&t.d(),c=!1,u()}}}function G(s,e,i){let{text:l="Click me"}=e,{clickHandler:a}=e,{radius:c="10px"}=e,{src:u}=e;return s.$$set=t=>{"text"in t&&i(0,l=t.text),"clickHandler"in t&&i(1,a=t.clickHandler),"radius"in t&&i(2,c=t.radius),"src"in t&&i(3,u=t.src)},[l,a,c,u]}class O extends z{constructor(e){super(),E(this,e,G,F,y,{text:0,clickHandler:1,radius:2,src:3})}}export{O as B};
