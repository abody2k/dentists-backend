import{s as d,e as f,H as m,b as h,k as _,F as b,f as c,m as u,i as y,q as H,G as k,n as o}from"./scheduler.BbzLVxRS.js";import{S as g,i as B}from"./index.hWlefRDD.js";/* empty css                                                  */function T(i){let t,a,l,n,r;return{c(){t=f("button"),a=new m(!1),this.h()},l(e){t=h(e,"BUTTON",{class:!0,style:!0});var s=_(t);a=b(s,!1),s.forEach(c),this.h()},h(){a.a=null,u(t,"class","button svelte-f28xyr"),u(t,"style",l="border-radius:"+i[1])},m(e,s){y(e,t,s),a.m(i[2],t),n||(r=H(t,"click",function(){k(i[0])&&i[0].apply(this,arguments)}),n=!0)},p(e,[s]){i=e,s&4&&a.p(i[2]),s&2&&l!==(l="border-radius:"+i[1])&&u(t,"style",l)},i:o,o,d(e){e&&c(t),n=!1,r()}}}function q(i,t,a){let{clickHandler:l}=t,{radius:n="10px"}=t,{child:r}=t;return i.$$set=e=>{"clickHandler"in e&&a(0,l=e.clickHandler),"radius"in e&&a(1,n=e.radius),"child"in e&&a(2,r=e.child)},[l,n,r]}class w extends g{constructor(t){super(),B(this,t,q,T,d,{clickHandler:0,radius:1,child:2})}}export{w as B};
