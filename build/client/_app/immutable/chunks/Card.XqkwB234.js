import{s as j,e as w,h as y,t as F,H as G,b as B,k as C,j as E,l as M,f as v,F as N,m as h,i as T,p as b,q as A,r as J,x as D,n as K}from"./scheduler.BbzLVxRS.js";import{S as L,i as O,t as H,g as P,a as I,e as Q,c as R,b as U,m as W,d as X}from"./index.hWlefRDD.js";import{B as Y}from"./Button.BgdUcxJ0.js";function V(n){let e,l,i;return{c(){e=w("img"),this.h()},l(s){e=B(s,"IMG",{src:!0,alt:!0,class:!0,style:!0}),this.h()},h(){D(e.src,l=n[2])||h(e,"src",l),h(e,"alt","Card Image"),h(e,"class","image svelte-1lruhy4"),h(e,"style",i=n[4]?`width:${n[4].w}px;height:${n[4].h}px`:"width:220px;")},m(s,r){T(s,e,r)},p(s,r){r&4&&!D(e.src,l=s[2])&&h(e,"src",l),r&16&&i!==(i=s[4]?`width:${s[4].w}px;height:${s[4].h}px`:"width:220px;")&&h(e,"style",i)},d(s){s&&v(e)}}}function S(n){let e,l;return e=new Y({props:{text:"open",clickHandler:n[6]}}),{c(){R(e.$$.fragment)},l(i){U(e.$$.fragment,i)},m(i,s){W(e,i,s),l=!0},p:K,i(i){l||(H(e.$$.fragment,i),l=!0)},o(i){I(e.$$.fragment,i),l=!1},d(i){X(e,i)}}}function Z(n){let e,l=n[2]&&n[2].trim()!=="",i,s,r,_,o,m,g,u,d,k,a=l&&V(n),t=n[3]!=1&&S(n);return{c(){e=w("div"),a&&a.c(),i=y(),s=w("div"),r=F(n[0]),_=y(),o=w("div"),m=new G(!1),g=y(),t&&t.c(),this.h()},l(c){e=B(c,"DIV",{class:!0});var f=C(e);a&&a.l(f),i=E(f),s=B(f,"DIV",{class:!0});var z=C(s);r=M(z,n[0]),z.forEach(v),_=E(f),o=B(f,"DIV",{class:!0});var q=C(o);m=N(q,!1),q.forEach(v),g=E(f),t&&t.l(f),f.forEach(v),this.h()},h(){h(s,"class","title svelte-1lruhy4"),m.a=null,h(o,"class","text svelte-1lruhy4"),h(e,"class","card svelte-1lruhy4")},m(c,f){T(c,e,f),a&&a.m(e,null),b(e,i),b(e,s),b(s,r),b(e,_),b(e,o),m.m(n[1],o),b(e,g),t&&t.m(e,null),u=!0,d||(k=A(e,"click",n[10]),d=!0)},p(c,[f]){f&4&&(l=c[2]&&c[2].trim()!==""),l?a?a.p(c,f):(a=V(c),a.c(),a.m(e,i)):a&&(a.d(1),a=null),(!u||f&1)&&J(r,c[0]),(!u||f&2)&&m.p(c[1]),c[3]!=1?t?(t.p(c,f),f&8&&H(t,1)):(t=S(c),t.c(),H(t,1),t.m(e,null)):t&&(P(),I(t,1,1,()=>{t=null}),Q())},i(c){u||(H(t),u=!0)},o(c){I(t),u=!1},d(c){c&&v(e),a&&a.d(),t&&t.d(),d=!1,k()}}}function x(n,e,l){let{title:i="Neumorphic Card"}=e,{text:s="This is some sample text inside the neumorphic card."}=e,{id:r}=e,{src:_=""}=e,{clickHandler:o}=e,{disableBtn:m=0}=e,{size:g={}}=e,{noBtn:u}=e,{f:d}=e;function k(){dispatchEvent(new CustomEvent("ocd",{bubbles:!0,detail:{id:r,f:d}})),console.log("dispatched an event"),console.log([r,_,o]),m&&(location.href="/"+(d?"fellowships":"courses")+"/"+r),o()}const a=()=>{u&&k()};return n.$$set=t=>{"title"in t&&l(0,i=t.title),"text"in t&&l(1,s=t.text),"id"in t&&l(7,r=t.id),"src"in t&&l(2,_=t.src),"clickHandler"in t&&l(8,o=t.clickHandler),"disableBtn"in t&&l(3,m=t.disableBtn),"size"in t&&l(4,g=t.size),"noBtn"in t&&l(5,u=t.noBtn),"f"in t&&l(9,d=t.f)},[i,s,_,m,g,u,k,r,o,d,a]}class te extends L{constructor(e){super(),O(this,e,x,Z,j,{title:0,text:1,id:7,src:2,clickHandler:8,disableBtn:3,size:4,noBtn:5,f:9})}}export{te as C};
