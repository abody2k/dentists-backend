import{s as w,e as p,h as T,b as h,k as B,f as y,j as H,d as E,m as c,i as I,p as u,q as M,w as k}from"./scheduler.C4tHwGv5.js";import{S as L,i as F,c as C,b as D,m as V,t as q,a as S,d as $}from"./index.CJfZO0_H.js";import{M as j}from"./Map.luQdoRzM.js";function z(r){let t,a,o,d,l,i='<a href="#" class="social-icon">Facebook</a> <a href="#" class="social-icon">Twitter</a> <a href="#" class="social-icon">Instagram</a> <a href="#" class="social-icon">YouTube</a> <a href="#" class="social-icon">LinkedIn</a>',_,n,g='<img src="/up-arrow.png" width="30"/>',f,m,v,x;return o=new j({}),{c(){t=p("div"),a=p("div"),C(o.$$.fragment),d=T(),l=p("div"),l.innerHTML=i,_=T(),n=p("button"),n.innerHTML=g,this.h()},l(e){t=h(e,"DIV",{class:!0,style:!0});var s=B(t);a=h(s,"DIV",{class:!0});var b=B(a);D(o.$$.fragment,b),b.forEach(y),d=H(s),l=h(s,"DIV",{class:!0,"data-svelte-h":!0}),E(l)!=="svelte-1yzdxh9"&&(l.innerHTML=i),_=H(s),n=h(s,"BUTTON",{id:!0,title:!0,class:!0,"data-svelte-h":!0}),E(n)!=="svelte-xxr1l4"&&(n.innerHTML=g),s.forEach(y),this.h()},h(){c(a,"class","map-box"),c(l,"class","social-media-box"),c(n,"id","myBtn"),c(n,"title","Go to top"),c(n,"class","svelte-gcao8r"),c(t,"class","footer-container"),c(t,"style",f=r[1]?"position:relative;bottom:0px;top:0px;":`top:${r[0]+690}px;`)},m(e,s){I(e,t,s),u(t,a),V(o,a,null),u(t,d),u(t,l),u(t,_),u(t,n),m=!0,v||(x=M(n,"click",r[2]),v=!0)},p(e,[s]){(!m||s&3&&f!==(f=e[1]?"position:relative;bottom:0px;top:0px;":`top:${e[0]+690}px;`))&&c(t,"style",f)},i(e){m||(q(o.$$.fragment,e),m=!0)},o(e){S(o.$$.fragment,e),m=!1},d(e){e&&y(t),$(o),v=!1,x()}}}function G(r,t,a){let{scrollBoxHeight:o}=t,{outsider:d}=t;k(()=>{window.onscroll=function(){i()};function i(){document.body.scrollTop>document.documentElement.clientHeight*.7||document.documentElement.scrollTop>document.documentElement.clientHeight*.7?document.getElementById("myBtn").style.display="block":document.getElementById("myBtn").style.display="none"}});const l=()=>{document.body.scrollTop=0,document.documentElement.scrollTop=0};return r.$$set=i=>{"scrollBoxHeight"in i&&a(0,o=i.scrollBoxHeight),"outsider"in i&&a(1,d=i.outsider)},[o,d,l]}class Y extends L{constructor(t){super(),F(this,t,G,z,w,{scrollBoxHeight:0,outsider:1})}}export{Y as F};