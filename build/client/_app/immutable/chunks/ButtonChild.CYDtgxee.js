import{s as d,e as f,N as h,b as m,k as _,O as b,f as c,m as u,i as y,q as k,I as H,n as o}from"./scheduler.C4tHwGv5.js";import{S as g,i as B}from"./index.CJfZO0_H.js";function T(a){let t,i,l,n,r;return{c(){t=f("button"),i=new h(!1),this.h()},l(e){t=m(e,"BUTTON",{class:!0,style:!0});var s=_(t);i=b(s,!1),s.forEach(c),this.h()},h(){i.a=null,u(t,"class","button svelte-f28xyr"),u(t,"style",l="border-radius:"+a[1])},m(e,s){y(e,t,s),i.m(a[2],t),n||(r=k(t,"click",function(){H(a[0])&&a[0].apply(this,arguments)}),n=!0)},p(e,[s]){a=e,s&4&&i.p(a[2]),s&2&&l!==(l="border-radius:"+a[1])&&u(t,"style",l)},i:o,o,d(e){e&&c(t),n=!1,r()}}}function q(a,t,i){let{clickHandler:l}=t,{radius:n="10px"}=t,{child:r}=t;return a.$$set=e=>{"clickHandler"in e&&i(0,l=e.clickHandler),"radius"in e&&i(1,n=e.radius),"child"in e&&i(2,r=e.child)},[l,n,r]}class N extends g{constructor(t){super(),B(this,t,q,T,d,{clickHandler:0,radius:1,child:2})}}export{N as B};