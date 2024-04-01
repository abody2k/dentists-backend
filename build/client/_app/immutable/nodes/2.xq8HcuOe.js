import{s as De,e as y,h as L,b as I,k as C,f as b,j as R,d as X,m as v,o as S,i as M,p as w,q as Z,G as Jn,v as it,w as Te,t as Be,l as Me,r as Ne,n as Ae,y as at,z as ve,x as oe,I as be,M as Yn}from"../chunks/scheduler.BbzLVxRS.js";import{S as Se,i as Ce,t as V,g as ye,e as Ie,a as x,c as q,b as G,m as J,d as Y}from"../chunks/index.hWlefRDD.js";/* empty css                                                     */import{C as Xn}from"../chunks/Card.XqkwB234.js";import{e as te,u as Zn,d as Qn}from"../chunks/each.8dtAqtyS.js";import{B as er}from"../chunks/Button.BgdUcxJ0.js";import"../chunks/Map.DTKxp16X.js";import{G as ln}from"../chunks/Grid.sAPsgqix.js";import{L as un}from"../chunks/Login.C97qNtR_.js";import{C as tr}from"../chunks/CourseData.AbcP4s0z.js";import{C as nr}from"../chunks/Contact.DIzIXCnK.js";import{n as rr}from"../chunks/not.DNvn3Bfc.js";import{S as sr}from"../chunks/TopBar.svelte_svelte_type_style_lang.6dgiQTiv.js";import{F as or}from"../chunks/Footer.D7712H6E.js";function kt(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function Dt(t){let e,n;return e=new Xn({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function ir(t){let e,n,r,s,o,i='<div>Show all</div> <img src="/back-icon.png"/>',a,l,h,d=te([...t[0]]),u=[];for(let f=0;f<d.length;f+=1)u[f]=Dt(kt(t,d,f));const _=f=>x(u[f],1,1,()=>{u[f]=null});return{c(){e=y("div"),n=y("div");for(let f=0;f<u.length;f+=1)u[f].c();r=L(),s=y("div"),o=y("button"),o.innerHTML=i,this.h()},l(f){e=I(f,"DIV",{style:!0,class:!0});var m=C(e);n=I(m,"DIV",{class:!0,id:!0});var c=C(n);for(let T=0;T<u.length;T+=1)u[T].l(c);c.forEach(b),m.forEach(b),r=R(f),s=I(f,"DIV",{style:!0});var g=C(s);o=I(g,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),X(o)!=="svelte-2n4iru"&&(o.innerHTML=i),g.forEach(b),this.h()},h(){v(n,"class","row svelte-8t36q7"),v(n,"id","row-container"),S(e,"margin-bottom","0"),S(e,"height","406px"),v(e,"class","row svelte-8t36q7"),v(o,"class","button svelte-8t36q7"),S(o,"display","flex"),S(o,"align-items","center"),S(s,"display","grid"),S(s,"place-items","center"),S(s,"margin-bottom","90px"),S(s,"margin-top","20px")},m(f,m){M(f,e,m),w(e,n);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(n,null);M(f,r,m),M(f,s,m),w(s,o),a=!0,l||(h=Z(o,"click",function(){Jn(t[1])&&t[1].apply(this,arguments)}),l=!0)},p(f,[m]){if(t=f,m&5){d=te([...t[0]]);let c;for(c=0;c<d.length;c+=1){const g=kt(t,d,c);u[c]?(u[c].p(g,m),V(u[c],1)):(u[c]=Dt(g),u[c].c(),V(u[c],1),u[c].m(n,null))}for(ye(),c=d.length;c<u.length;c+=1)_(c);Ie()}},i(f){if(!a){for(let m=0;m<d.length;m+=1)V(u[m]);a=!0}},o(f){u=u.filter(Boolean);for(let m=0;m<u.length;m+=1)x(u[m]);a=!1},d(f){f&&(b(e),b(r),b(s)),it(u,f),l=!1,h()}}}function ar(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,Te(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class Tt extends Se{constructor(e){super(),Ce(this,e,ar,ir,De,{cardsData:0,onClick:1,f:2})}}function St(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Ct(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function At(t){let e,n;return{c(){e=y("img"),this.h()},l(r){e=I(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){oe(e.src,n=t[15].src)||v(e,"src",n),v(e,"alt","Neumorphic Picture"),v(e,"id","blog-image"),v(e,"class","rectangular-image svelte-14rovze")},m(r,s){M(r,e,s)},p(r,s){s&1&&!oe(e.src,n=r[15].src)&&v(e,"src",n)},d(r){r&&b(e)}}}function $t(t){let e,n=t[14]==t[2]&&At(t);return{c(){n&&n.c(),e=ve()},l(r){n&&n.l(r),e=ve()},m(r,s){n&&n.m(r,s),M(r,e,s)},p(r,s){r[14]==r[2]?n?n.p(r,s):(n=At(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&b(e),n&&n.d(r)}}}function Ot(t){let e,n,r=t[0][t[2]].title+"",s,o,i=t[0].length>0&&Bt(t);return{c(){e=y("div"),n=y("h2"),s=Be(r),o=L(),i&&i.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var l=C(e);n=I(l,"H2",{style:!0,class:!0});var h=C(n);s=Me(h,r),h.forEach(b),o=R(l),i&&i.l(l),l.forEach(b),this.h()},h(){S(n,"margin","-2px 0 -10px 0"),v(n,"class","svelte-14rovze"),v(e,"class","captionCont svelte-14rovze")},m(a,l){M(a,e,l),w(e,n),w(n,s),w(e,o),i&&i.m(e,null)},p(a,l){l&5&&r!==(r=a[0][a[2]].title+"")&&Ne(s,r),a[0].length>0?i?i.p(a,l):(i=Bt(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&b(e),i&&i.d()}}}function Bt(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=y("p"),r=Be(n),this.h()},l(s){e=I(s,"P",{class:!0});var o=C(e);r=Me(o,n),o.forEach(b),this.h()},h(){v(e,"class","svelte-14rovze")},m(s,o){M(s,e,o),w(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&Ne(r,n)},d(s){s&&b(e)}}}function Mt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=y("div"),this.h()},l(a){n=I(a,"DIV",{style:!0,class:!0}),C(n).forEach(b),this.h()},h(){S(n,"margin-top","10px"),S(n,"margin-bottom","10px"),v(n,"class",r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze"),this.first=n},m(a,l){M(a,n,l),s||(o=Z(n,"click",i),s=!0)},p(a,l){e=a,l&4&&r!==(r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze")&&v(n,"class",r)},d(a){a&&b(n),s=!1,o()}}}function cr(t){let e,n,r,s='<img src="/open.png" style="right: 10%; width: 33px;" class="svelte-14rovze"/>',o,i,a,l,h,d,u,_,f,m="<",c,g,T=">",N,A,P,O=[],j=new Map,p,D,k=te(t[0]),E=[];for(let $=0;$<k.length;$+=1)E[$]=$t(Ct(t,k,$));let B=t[0].length>0&&Ot(t),W=te([0,1,2]);const z=$=>$[14];for(let $=0;$<3;$+=1){let U=St(t,W,$),H=z(U);j.set(H,O[$]=Mt(H,U))}return{c(){e=y("div"),n=y("div"),r=y("button"),r.innerHTML=s,o=L(),i=y("div"),a=y("div"),l=Be(t[1]),h=L(),d=y("div"),u=y("div");for(let $=0;$<E.length;$+=1)E[$].c();_=L(),f=y("div"),f.textContent=m,c=L(),g=y("div"),g.textContent=T,N=L(),B&&B.c(),A=L(),P=y("div");for(let $=0;$<3;$+=1)O[$].c();this.h()},l($){e=I($,"DIV",{class:!0});var U=C(e);n=I(U,"DIV",{class:!0});var H=C(n);r=I(H,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),X(r)!=="svelte-hwduld"&&(r.innerHTML=s),H.forEach(b),o=R(U),i=I(U,"DIV",{style:!0,class:!0});var we=C(i);a=I(we,"DIV",{class:!0});var It=C(a);l=Me(It,t[1]),It.forEach(b),we.forEach(b),h=R(U),d=I(U,"DIV",{class:!0});var ge=C(d);u=I(ge,"DIV",{class:!0});var me=C(u);for(let ae=0;ae<E.length;ae+=1)E[ae].l(me);_=R(me),f=I(me,"DIV",{class:!0,"data-svelte-h":!0}),X(f)!=="svelte-nl1vs9"&&(f.textContent=m),c=R(me),g=I(me,"DIV",{class:!0,"data-svelte-h":!0}),X(g)!=="svelte-dra8cl"&&(g.textContent=T),me.forEach(b),N=R(ge),B&&B.l(ge),A=R(ge),P=I(ge,"DIV",{class:!0});var Et=C(P);for(let ae=0;ae<3;ae+=1)O[ae].l(Et);Et.forEach(b),ge.forEach(b),U.forEach(b),this.h()},h(){S(r,"padding","3px 4px"),S(r,"float","inline-end"),S(r,"right","10%"),S(r,"bottom","13px"),v(r,"class","svelte-14rovze"),v(n,"class","icon svelte-14rovze"),v(a,"class","#2e3b6f-title svelte-14rovze"),S(i,"display","flex"),S(i,"justify-content","space-between"),S(i,"align-items","center"),S(i,"padding","10px"),v(i,"class","svelte-14rovze"),v(f,"class","nextImageBtn svelte-14rovze"),v(g,"class","previousImageBtn svelte-14rovze"),v(u,"class","imageCont svelte-14rovze"),v(P,"class","dots-container svelte-14rovze"),v(d,"class","postCard svelte-14rovze"),v(e,"class","svelte-14rovze")},m($,U){M($,e,U),w(e,n),w(n,r),w(e,o),w(e,i),w(i,a),w(a,l),w(e,h),w(e,d),w(d,u);for(let H=0;H<E.length;H+=1)E[H]&&E[H].m(u,null);w(u,_),w(u,f),w(u,c),w(u,g),w(d,N),B&&B.m(d,null),w(d,A),w(d,P);for(let H=0;H<3;H+=1)O[H]&&O[H].m(P,null);p||(D=[Z(r,"click",t[5]),Z(f,"click",t[6]),Z(g,"click",t[7])],p=!0)},p($,[U]){if(U&2&&Ne(l,$[1]),U&5){k=te($[0]);let H;for(H=0;H<k.length;H+=1){const we=Ct($,k,H);E[H]?E[H].p(we,U):(E[H]=$t(we),E[H].c(),E[H].m(u,_))}for(;H<E.length;H+=1)E[H].d(1);E.length=k.length}$[0].length>0?B?B.p($,U):(B=Ot($),B.c(),B.m(d,A)):B&&(B.d(1),B=null),U&12&&(W=te([0,1,2]),O=Zn(O,U,z,1,$,W,j,P,Qn,Mt,null,St))},i:Ae,o:Ae,d($){$&&b(e),it(E,$),B&&B.d();for(let U=0;U<3;U+=1)O[U].d();p=!1,at(D)}}}function lr(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(_){console.log(_),n(2,i=_)}Te(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function f(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}f(),setInterval(f,7e3)});const l=()=>{location.href="/blogs"},h=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},d=()=>{n(2,i=(i+1)%o.length)},u=_=>a(_);return t.$$set=_=>{"firstTitle"in _&&n(1,r=_.firstTitle),"secondTitle"in _&&n(4,s=_.secondTitle),"blogs"in _&&n(0,o=_.blogs)},[o,r,i,a,s,l,h,d,u]}class ur extends Se{constructor(e){super(),Ce(this,e,lr,cr,De,{firstTitle:1,secondTitle:4,blogs:0})}}function Nt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Pt(t){let e,n,r,s;return{c(){e=y("div"),n=y("div"),r=y("img"),this.h()},l(o){e=I(o,"DIV",{class:!0});var i=C(e);n=I(i,"DIV",{class:!0,style:!0});var a=C(n);r=I(a,"IMG",{src:!0,style:!0,class:!0}),a.forEach(b),i.forEach(b),this.h()},h(){oe(r.src,s=t[0][t[1]%t[0].length].src)||v(r,"src",s),S(r,"border-radius","10px"),v(r,"class","svelte-f7fgfc"),v(n,"class","postCard svelte-f7fgfc"),S(n,"width","270px"),S(n,"height","270px"),S(n,"border-radius","10px"),S(n,"background-color","#e6e7ee"),S(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),S(n,"margin-bottom","50px"),v(e,"class","image-card svelte-f7fgfc")},m(o,i){M(o,e,i),w(e,n),w(n,r)},p(o,i){i&3&&!oe(r.src,s=o[0][o[1]%o[0].length].src)&&v(r,"src",s)},d(o){o&&b(e)}}}function Lt(t){let e,n=te(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=Vt(Nt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ve()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=ve()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);M(s,e,o)},p(s,o){if(o&1){n=te(s[0]);let i;for(i=0;i<n.length;i+=1){const a=Nt(s,n,i);r[i]?r[i].p(a,o):(r[i]=Vt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&b(e),it(r,s)}}}function Rt(t){let e,n,r,s;return{c(){e=y("div"),n=y("img"),s=L(),this.h()},l(o){e=I(o,"DIV",{class:!0,style:!0});var i=C(e);n=I(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(b),s=R(o),this.h()},h(){oe(n.src,r=t[0][(t[5]+1)%t[0].length].src)||v(n,"src",r),S(n,"border-radius","10px"),v(n,"class","svelte-f7fgfc"),v(e,"class","postCard svelte-f7fgfc"),v(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){M(o,e,i),w(e,n),M(o,s,i)},p(o,i){i&1&&!oe(n.src,r=o[0][(o[5]+1)%o[0].length].src)&&v(n,"src",r)},d(o){o&&(b(e),b(s))}}}function Vt(t){let e,n=t[5]+1!=t[0].length&&Rt(t);return{c(){n&&n.c(),e=ve()},l(r){n&&n.l(r),e=ve()},m(r,s){n&&n.m(r,s),M(r,e,s)},p(r,s){r[5]+1!=r[0].length?n?n.p(r,s):(n=Rt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&b(e),n&&n.d(r)}}}function fr(t){let e,n,r="Products",s,o,i,a,l,h='<div class="black-title svelte-f7fgfc">Title</div> <div class="small-note svelte-f7fgfc">A small note goes here.</div> <div class="big-text svelte-f7fgfc">Big bold black text.</div>',d,u,_,f,m,c,g,T,N,A="",P,O=t[0].length>=1&&Pt(t),j=t[0].length>1&&Lt(t);return g=new er({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=y("div"),n=y("div"),n.textContent=r,s=L(),o=y("div"),i=y("div"),O&&O.c(),a=L(),l=y("div"),l.innerHTML=h,d=L(),u=y("div"),_=y("div"),f=y("div"),j&&j.c(),m=L(),c=y("div"),q(g.$$.fragment),T=L(),N=y("div"),N.innerHTML=A,this.h()},l(p){e=I(p,"DIV",{style:!0});var D=C(e);n=I(D,"DIV",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-t04v0b"&&(n.textContent=r),s=R(D),o=I(D,"DIV",{class:!0,style:!0});var k=C(o);i=I(k,"DIV",{class:!0});var E=C(i);O&&O.l(E),a=R(E),l=I(E,"DIV",{class:!0,"data-svelte-h":!0}),X(l)!=="svelte-1sx5tfn"&&(l.innerHTML=h),E.forEach(b),d=R(k),u=I(k,"DIV",{style:!0});var B=C(u);_=I(B,"DIV",{style:!0});var W=C(_);f=I(W,"DIV",{class:!0});var z=C(f);j&&j.l(z),z.forEach(b),W.forEach(b),m=R(B),c=I(B,"DIV",{style:!0});var $=C(c);G(g.$$.fragment,$),$.forEach(b),B.forEach(b),T=R(k),N=I(k,"DIV",{class:!0,"data-svelte-h":!0}),X(N)!=="svelte-cpoj1k"&&(N.innerHTML=A),k.forEach(b),D.forEach(b),this.h()},h(){v(n,"class","#2e3b6f-title"),v(l,"class","text-container svelte-f7fgfc"),v(i,"class","first-row svelte-f7fgfc"),v(f,"class","row-images svelte-f7fgfc"),S(_,"overflow-x","scroll"),v(c,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),S(u,"display","flex"),v(N,"class","show-call-button svelte-f7fgfc"),v(o,"class","neumorphic-card svelte-f7fgfc"),S(o,"height","560px"),S(e,"margin-top","90px")},m(p,D){M(p,e,D),w(e,n),w(e,s),w(e,o),w(o,i),O&&O.m(i,null),w(i,a),w(i,l),w(o,d),w(o,u),w(u,_),w(_,f),j&&j.m(f,null),w(u,m),w(u,c),J(g,c,null),w(o,T),w(o,N),P=!0},p(p,[D]){p[0].length>=1?O?O.p(p,D):(O=Pt(p),O.c(),O.m(i,a)):O&&(O.d(1),O=null),p[0].length>1?j?j.p(p,D):(j=Lt(p),j.c(),j.m(f,null)):j&&(j.d(1),j=null)},i(p){P||(V(g.$$.fragment,p),P=!0)},o(p){x(g.$$.fragment,p),P=!1},d(p){p&&b(e),O&&O.d(),j&&j.d(),Y(g)}}}function dr(t,e,n){let{data:r=[]}=e,s=0;setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),Te(()=>{console.log(r)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,r=i.data)},[r,s,o]}class hr extends Se{constructor(e){super(),Ce(this,e,dr,fr,De,{data:0})}}var Ht={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},pr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],l=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},dn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,d=o>>2,u=(o&3)<<4|a>>4;let _=(a&15)<<2|h>>6,f=h&63;l||(f=64,i||(_=64)),r.push(n[d],n[u],n[_],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(fn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||h==null||u==null)throw new gr;const _=o<<2|a>>4;if(r.push(_),h!==64){const f=a<<4&240|h>>2;if(r.push(f),u!==64){const m=h<<6&192|u;r.push(m)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class gr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const mr=function(t){const e=fn(t);return dn.encodeByteArray(e,!0)},hn=function(t){return mr(t).replace(/\./g,"")},br=function(t){try{return dn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=()=>vr().__FIREBASE_DEFAULTS__,wr=()=>{if(typeof process>"u"||typeof Ht>"u")return;const t=Ht.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},yr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&br(t[1]);return e&&JSON.parse(e)},Ir=()=>{try{return _r()||wr()||yr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},pn=()=>{var t;return(t=Ir())===null||t===void 0?void 0:t.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function gn(){try{return typeof indexedDB=="object"}catch{return!1}}function mn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function kr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr="FirebaseError";class _e extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Dr,Object.setPrototypeOf(this,_e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}}class Pe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Tr(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new _e(s,a,r)}}function Tr(t,e){return t.replace(Sr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Sr=/\{\$([^}]+)}/g;function Xe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(jt(o)&&jt(i)){if(!Xe(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function jt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t){return t&&t._delegate?t._delegate:t}class ie{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Er;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if($r(e))try{this.getOrInitializeService({instanceIdentifier:ce})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=ce){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ce){return this.instances.has(e)}getOptions(e=ce){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ar(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ce){return this.component?this.component.multipleInstances?e:ce:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ar(t){return t===ce?void 0:t}function $r(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Cr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Br={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Mr=F.INFO,Nr={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Pr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Nr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lr{constructor(e){this.name=e,this._logLevel=Mr,this._logHandler=Pr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Br[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Rr=(t,e)=>e.some(n=>t instanceof n);let Ft,xt;function Vr(){return Ft||(Ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hr(){return xt||(xt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bn=new WeakMap,Ze=new WeakMap,vn=new WeakMap,Ve=new WeakMap,lt=new WeakMap;function jr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ee(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&bn.set(n,t)}).catch(()=>{}),lt.set(e,t),e}function Fr(t){if(Ze.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Ze.set(t,e)}let Qe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ze.get(t);if(e==="objectStoreNames")return t.objectStoreNames||vn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ee(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xr(t){Qe=t(Qe)}function zr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(He(this),e,...n);return vn.set(r,e.sort?e.sort():[e]),ee(r)}:Hr().includes(t)?function(...e){return t.apply(He(this),e),ee(bn.get(this))}:function(...e){return ee(t.apply(He(this),e))}}function Ur(t){return typeof t=="function"?zr(t):(t instanceof IDBTransaction&&Fr(t),Rr(t,Vr())?new Proxy(t,Qe):t)}function ee(t){if(t instanceof IDBRequest)return jr(t);if(Ve.has(t))return Ve.get(t);const e=Ur(t);return e!==t&&(Ve.set(t,e),lt.set(e,t)),e}const He=t=>lt.get(t);function ut(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ee(i);return r&&i.addEventListener("upgradeneeded",l=>{r(ee(i.result),l.oldVersion,l.newVersion,ee(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),a}function je(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ee(n).then(()=>{})}const Wr=["get","getKey","getAll","getAllKeys","count"],Kr=["put","add","delete","clear"],Fe=new Map;function zt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fe.get(e))return Fe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wr.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return Fe.set(e,o),o}xr(t=>({...t,get:(e,n,r)=>zt(e,n)||t.get(e,n,r),has:(e,n)=>!!zt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Gr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Gr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const et="@firebase/app",Ut="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue=new Lr("@firebase/app"),Jr="@firebase/app-compat",Yr="@firebase/analytics-compat",Xr="@firebase/analytics",Zr="@firebase/app-check-compat",Qr="@firebase/app-check",es="@firebase/auth",ts="@firebase/auth-compat",ns="@firebase/database",rs="@firebase/database-compat",ss="@firebase/functions",os="@firebase/functions-compat",is="@firebase/installations",as="@firebase/installations-compat",cs="@firebase/messaging",ls="@firebase/messaging-compat",us="@firebase/performance",fs="@firebase/performance-compat",ds="@firebase/remote-config",hs="@firebase/remote-config-compat",ps="@firebase/storage",gs="@firebase/storage-compat",ms="@firebase/firestore",bs="@firebase/firestore-compat",vs="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]",_s={[et]:"fire-core",[Jr]:"fire-core-compat",[Xr]:"fire-analytics",[Yr]:"fire-analytics-compat",[Qr]:"fire-app-check",[Zr]:"fire-app-check-compat",[es]:"fire-auth",[ts]:"fire-auth-compat",[ns]:"fire-rtdb",[rs]:"fire-rtdb-compat",[ss]:"fire-fn",[os]:"fire-fn-compat",[is]:"fire-iid",[as]:"fire-iid-compat",[cs]:"fire-fcm",[ls]:"fire-fcm-compat",[us]:"fire-perf",[fs]:"fire-perf-compat",[ds]:"fire-rc",[hs]:"fire-rc-compat",[ps]:"fire-gcs",[gs]:"fire-gcs-compat",[ms]:"fire-fst",[bs]:"fire-fst-compat","fire-js":"fire-js",[vs]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $e=new Map,nt=new Map;function ws(t,e){try{t.container.addComponent(e)}catch(n){ue.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fe(t){const e=t.name;if(nt.has(e))return ue.debug(`There were multiple attempts to register component ${e}.`),!1;nt.set(e,t);for(const n of $e.values())ws(n,t);return!0}function ft(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ne=new Pe("app","Firebase",ys);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ie("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}function _n(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ne.create("bad-app-name",{appName:String(s)});if(n||(n=pn()),!n)throw ne.create("no-options");const o=$e.get(s);if(o){if(Xe(n,o.options)&&Xe(r,o.config))return o;throw ne.create("duplicate-app",{appName:s})}const i=new Or(s);for(const l of nt.values())i.addComponent(l);const a=new Is(n,r,i);return $e.set(s,a),a}function Es(t=tt){const e=$e.get(t);if(!e&&t===tt&&pn())return _n();if(!e)throw ne.create("no-app",{appName:t});return e}function re(t,e,n){var r;let s=(r=_s[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ue.warn(a.join(" "));return}fe(new ie(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="firebase-heartbeat-database",Ds=1,Ee="firebase-heartbeat-store";let xe=null;function wn(){return xe||(xe=ut(ks,Ds,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ee)}}}).catch(t=>{throw ne.create("idb-open",{originalErrorMessage:t.message})})),xe}async function Ts(t){try{return await(await wn()).transaction(Ee).objectStore(Ee).get(yn(t))}catch(e){if(e instanceof _e)ue.warn(e.message);else{const n=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ue.warn(n.message)}}}async function Wt(t,e){try{const r=(await wn()).transaction(Ee,"readwrite");await r.objectStore(Ee).put(e,yn(t)),await r.done}catch(n){if(n instanceof _e)ue.warn(n.message);else{const r=ne.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ue.warn(r.message)}}}function yn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=1024,Cs=30*24*60*60*1e3;class As{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Os(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Cs}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kt(),{heartbeatsToSend:r,unsentEntries:s}=$s(this._heartbeatsCache.heartbeats),o=hn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Kt(){return new Date().toISOString().substring(0,10)}function $s(t,e=Ss){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),qt(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Os{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return gn()?mn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ts(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function qt(t){return hn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bs(t){fe(new ie("platform-logger",e=>new qr(e),"PRIVATE")),fe(new ie("heartbeat",e=>new As(e),"PRIVATE")),re(et,Ut,t),re(et,Ut,"esm2017"),re("fire-js","")}Bs("");var Ms="firebase",Ns="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */re(Ms,Ns,"app");const Ps=(t,e)=>e.some(n=>t instanceof n);let Gt,Jt;function Ls(){return Gt||(Gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Rs(){return Jt||(Jt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const In=new WeakMap,rt=new WeakMap,En=new WeakMap,ze=new WeakMap,dt=new WeakMap;function Vs(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(se(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&In.set(n,t)}).catch(()=>{}),dt.set(e,t),e}function Hs(t){if(rt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});rt.set(t,e)}let st={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||En.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return se(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function js(t){st=t(st)}function Fs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ue(this),e,...n);return En.set(r,e.sort?e.sort():[e]),se(r)}:Rs().includes(t)?function(...e){return t.apply(Ue(this),e),se(In.get(this))}:function(...e){return se(t.apply(Ue(this),e))}}function xs(t){return typeof t=="function"?Fs(t):(t instanceof IDBTransaction&&Hs(t),Ps(t,Ls())?new Proxy(t,st):t)}function se(t){if(t instanceof IDBRequest)return Vs(t);if(ze.has(t))return ze.get(t);const e=xs(t);return e!==t&&(ze.set(t,e),dt.set(e,t)),e}const Ue=t=>dt.get(t);function zs(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=se(i);return r&&i.addEventListener("upgradeneeded",l=>{r(se(i.result),l.oldVersion,l.newVersion,se(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),s&&l.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Us=["get","getKey","getAll","getAllKeys","count"],Ws=["put","add","delete","clear"],We=new Map;function Yt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(We.get(e))return We.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ws.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Us.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),s&&l.done]))[0]};return We.set(e,o),o}js(t=>({...t,get:(e,n,r)=>Yt(e,n)||t.get(e,n,r),has:(e,n)=>!!Yt(e,n)||t.has(e,n)}));const kn="@firebase/installations",ht="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dn=1e4,Tn=`w:${ht}`,Sn="FIS_v2",Ks="https://firebaseinstallations.googleapis.com/v1",qs=60*60*1e3,Gs="installations",Js="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},de=new Pe(Gs,Js,Ys);function Cn(t){return t instanceof _e&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An({projectId:t}){return`${Ks}/projects/${t}/installations`}function $n(t){return{token:t.token,requestStatus:2,expiresIn:Zs(t.expiresIn),creationTime:Date.now()}}async function On(t,e){const r=(await e.json()).error;return de.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Bn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xs(t,{refreshToken:e}){const n=Bn(t);return n.append("Authorization",Qs(e)),n}async function Mn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Zs(t){return Number(t.replace("s","000"))}function Qs(t){return`${Sn} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eo({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=An(t),s=Bn(t),o=e.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const i={fid:n,authVersion:Sn,appId:t.appId,sdkVersion:Tn},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await Mn(()=>fetch(r,a));if(l.ok){const h=await l.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:$n(h.authToken)}}else throw await On("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=/^[cdef][\w-]{21}$/,ot="";function ro(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=so(t);return no.test(n)?n:ot}catch{return ot}}function so(t){return to(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Map;function Ln(t,e){const n=Le(t);Rn(n,e),oo(n,e)}function Rn(t,e){const n=Pn.get(t);if(n)for(const r of n)r(e)}function oo(t,e){const n=io();n&&n.postMessage({key:t,fid:e}),ao()}let le=null;function io(){return!le&&"BroadcastChannel"in self&&(le=new BroadcastChannel("[Firebase] FID Change"),le.onmessage=t=>{Rn(t.data.key,t.data.fid)}),le}function ao(){Pn.size===0&&le&&(le.close(),le=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const co="firebase-installations-database",lo=1,he="firebase-installations-store";let Ke=null;function pt(){return Ke||(Ke=zs(co,lo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(he)}}})),Ke}async function Oe(t,e){const n=Le(t),s=(await pt()).transaction(he,"readwrite"),o=s.objectStore(he),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Ln(t,e.fid),e}async function Vn(t){const e=Le(t),r=(await pt()).transaction(he,"readwrite");await r.objectStore(he).delete(e),await r.done}async function Re(t,e){const n=Le(t),s=(await pt()).transaction(he,"readwrite"),o=s.objectStore(he),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Ln(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t){let e;const n=await Re(t.appConfig,r=>{const s=uo(r),o=fo(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ot?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function uo(t){const e=t||{fid:ro(),registrationStatus:0};return Hn(e)}function fo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(de.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=ho(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:po(t)}:{installationEntry:e}}async function ho(t,e){try{const n=await eo(t,e);return Oe(t.appConfig,n)}catch(n){throw Cn(n)&&n.customData.serverCode===409?await Vn(t.appConfig):await Oe(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function po(t){let e=await Xt(t.appConfig);for(;e.registrationStatus===1;)await Nn(100),e=await Xt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gt(t);return r||n}return e}function Xt(t){return Re(t,e=>{if(!e)throw de.create("installation-not-found");return Hn(e)})}function Hn(t){return go(t)?{fid:t.fid,registrationStatus:0}:t}function go(t){return t.registrationStatus===1&&t.registrationTime+Dn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo({appConfig:t,heartbeatServiceProvider:e},n){const r=bo(t,n),s=Xs(t,n),o=e.getImmediate({optional:!0});if(o){const h=await o.getHeartbeatsHeader();h&&s.append("x-firebase-client",h)}const i={installation:{sdkVersion:Tn,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},l=await Mn(()=>fetch(r,a));if(l.ok){const h=await l.json();return $n(h)}else throw await On("Generate Auth Token",l)}function bo(t,{fid:e}){return`${An(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t,e=!1){let n;const r=await Re(t.appConfig,o=>{if(!jn(o))throw de.create("not-registered");const i=o.authToken;if(!e&&wo(i))return o;if(i.requestStatus===1)return n=vo(t,e),o;{if(!navigator.onLine)throw de.create("app-offline");const a=Io(o);return n=_o(t,a),a}});return n?await n:r.authToken}async function vo(t,e){let n=await Zt(t.appConfig);for(;n.authToken.requestStatus===1;)await Nn(100),n=await Zt(t.appConfig);const r=n.authToken;return r.requestStatus===0?mt(t,e):r}function Zt(t){return Re(t,e=>{if(!jn(e))throw de.create("not-registered");const n=e.authToken;return Eo(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _o(t,e){try{const n=await mo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Oe(t.appConfig,r),n}catch(n){if(Cn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Oe(t.appConfig,r)}throw n}}function jn(t){return t!==void 0&&t.registrationStatus===2}function wo(t){return t.requestStatus===2&&!yo(t)}function yo(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qs}function Io(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Eo(t){return t.requestStatus===1&&t.requestTime+Dn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t){const e=t,{installationEntry:n,registrationPromise:r}=await gt(e);return r?r.catch(console.error):mt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t,e=!1){const n=t;return await To(n),(await mt(n,e)).token}async function To(t){const{registrationPromise:e}=await gt(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){if(!t||!t.options)throw qe("App Configuration");if(!t.name)throw qe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qe(t){return de.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fn="installations",Co="installations-internal",Ao=t=>{const e=t.getProvider("app").getImmediate(),n=So(e),r=ft(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},$o=t=>{const e=t.getProvider("app").getImmediate(),n=ft(e,Fn).getImmediate();return{getId:()=>ko(n),getToken:s=>Do(n,s)}};function Oo(){fe(new ie(Fn,Ao,"PUBLIC")),fe(new ie(Co,$o,"PRIVATE"))}Oo();re(kn,ht);re(kn,ht,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bo="/firebase-messaging-sw.js",Mo="/firebase-cloud-messaging-push-scope",xn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",No="https://fcmregistrations.googleapis.com/v1",zn="google.c.a.c_id",Po="google.c.a.c_l",Lo="google.c.a.ts",Ro="google.c.a.e";var Qt;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Qt||(Qt={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var ke;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(ke||(ke={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Vo(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="fcm_token_details_db",Ho=5,en="fcm_token_object_Store";async function jo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ge))return null;let e=null;return(await ut(Ge,Ho,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(en))return;const l=i.objectStore(en),h=await l.index("fcmSenderId").get(t);if(await l.clear(),!!h){if(s===2){const d=h;if(!d.auth||!d.p256dh||!d.endpoint)return;e={token:d.fcmToken,createTime:(a=d.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:Q(d.vapidKey)}}}else if(s===3){const d=h;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Q(d.auth),p256dh:Q(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Q(d.vapidKey)}}}else if(s===4){const d=h;e={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:Q(d.auth),p256dh:Q(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:Q(d.vapidKey)}}}}}})).close(),await je(Ge),await je("fcm_vapid_details_db"),await je("undefined"),Fo(e)?e:null}function Fo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo="firebase-messaging-database",zo=1,pe="firebase-messaging-store";let Je=null;function bt(){return Je||(Je=ut(xo,zo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pe)}}})),Je}async function Un(t){const e=_t(t),r=await(await bt()).transaction(pe).objectStore(pe).get(e);if(r)return r;{const s=await jo(t.appConfig.senderId);if(s)return await vt(t,s),s}}async function vt(t,e){const n=_t(t),s=(await bt()).transaction(pe,"readwrite");return await s.objectStore(pe).put(e,n),await s.done,e}async function Uo(t){const e=_t(t),r=(await bt()).transaction(pe,"readwrite");await r.objectStore(pe).delete(e),await r.done}function _t({appConfig:t}){return t.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},K=new Pe("messaging","Messaging",Wo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e){const n=await yt(t),r=Kn(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(wt(t.appConfig),s)).json()}catch(i){throw K.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw K.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw K.create("token-subscribe-no-token");return o.token}async function qo(t,e){const n=await yt(t),r=Kn(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${wt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw K.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw K.create("token-update-failed",{errorInfo:i})}if(!o.token)throw K.create("token-update-no-token");return o.token}async function Wn(t,e){const r={method:"DELETE",headers:await yt(t)};try{const o=await(await fetch(`${wt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw K.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw K.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function wt({projectId:t}){return`${No}/projects/${t}/registrations`}async function yt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Kn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==xn&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go=7*24*60*60*1e3;async function Jo(t){const e=await Zo(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:Q(e.getKey("auth")),p256dh:Q(e.getKey("p256dh"))},r=await Un(t.firebaseDependencies);if(r){if(Qo(r.subscriptionOptions,n))return Date.now()>=r.createTime+Go?Xo(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Wn(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return tn(t.firebaseDependencies,n)}else return tn(t.firebaseDependencies,n)}async function Yo(t){const e=await Un(t.firebaseDependencies);e&&(await Wn(t.firebaseDependencies,e.token),await Uo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Xo(t,e){try{const n=await qo(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await vt(t.firebaseDependencies,r),n}catch(n){throw await Yo(t),n}}async function tn(t,e){const r={token:await Ko(t,e),createTime:Date.now(),subscriptionOptions:e};return await vt(t,r),r.token}async function Zo(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Vo(e)})}function Qo(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ei(e,t),ti(e,t),ni(e,t),e}function ei(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ti(t,e){e.data&&(t.data=e.data)}function ni(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const l=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){return typeof t=="object"&&!!t&&zn in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */qn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");qn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function qn(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){if(!t||!t.options)throw Ye("App Configuration Object");if(!t.name)throw Ye("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ye(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ye(t){return K.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=si(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(t){try{t.swRegistration=await navigator.serviceWorker.register(Bo,{scope:Mo}),t.swRegistration.update().catch(()=>{})}catch(e){throw K.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ai(t,e){if(!e&&!t.swRegistration&&await ii(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw K.create("invalid-sw-registration");t.swRegistration=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=xn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gn(t,e){if(!navigator)throw K.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw K.create("permission-blocked");return await ci(t,e==null?void 0:e.vapidKey),await ai(t,e==null?void 0:e.serviceWorkerRegistration),Jo(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e,n){const r=ui(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[zn],message_name:n[Po],message_time:n[Lo],message_device_time:Math.floor(Date.now()/1e3)})}function ui(t){switch(t){case ke.NOTIFICATION_CLICKED:return"notification_open";case ke.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fi(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ke.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(nn(n)):t.onMessageHandler.next(nn(n)));const r=n.data;ri(r)&&r[Ro]==="1"&&await li(t,n.messageType,r)}const rn="@firebase/messaging",sn="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const di=t=>{const e=new oi(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>fi(e,n)),e},hi=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Gn(e,r)}};function pi(){fe(new ie("messaging",di,"PUBLIC")),fe(new ie("messaging-internal",hi,"PRIVATE")),re(rn,sn),re(rn,sn,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(){try{await mn()}catch{return!1}return typeof window<"u"&&gn()&&kr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mi(t,e){if(!navigator)throw K.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bi(t=Es()){return gi().then(e=>{if(!e)throw K.create("unsupported-browser")},e=>{throw K.create("indexed-db-unsupported")}),ft(ct(t),"messaging").getImmediate()}async function vi(t,e){return t=ct(t),Gn(t,e)}function _i(t,e){return t=ct(t),mi(t,e)}pi();function on(t){let e,n,r,s,o,i,a,l,h,d;return a=new un({props:{func:t[9]}}),{c(){e=y("div"),n=y("div"),r=y("img"),o=L(),i=y("div"),q(a.$$.fragment),this.h()},l(u){e=I(u,"DIV",{class:!0});var _=C(e);n=I(_,"DIV",{class:!0});var f=C(n);r=I(f,"IMG",{src:!0,width:!0,style:!0}),o=R(f),i=I(f,"DIV",{class:!0});var m=C(i);G(a.$$.fragment,m),m.forEach(b),f.forEach(b),_.forEach(b),this.h()},h(){oe(r.src,s="/cancel.png")||v(r,"src",s),v(r,"width","40"),S(r,"float","right"),v(i,"class","content"),v(n,"class","dialog-box svelte-unpsak"),v(e,"class","overlay svelte-unpsak")},m(u,_){M(u,e,_),w(e,n),w(n,r),w(n,o),w(n,i),J(a,i,null),l=!0,h||(d=[Z(r,"click",t[7]),Z(n,"click",yi),Z(e,"click",t[7])],h=!0)},p:Ae,i(u){l||(V(a.$$.fragment,u),l=!0)},o(u){x(a.$$.fragment,u),l=!1},d(u){u&&b(e),Y(a),h=!1,at(d)}}}function an(t){let e,n,r='<li class="svelte-unpsak"><a href="/" class="svelte-unpsak">Home</a></li> <li class="svelte-unpsak"><a href="/courses" class="svelte-unpsak">courses</a></li> <li class="svelte-unpsak"><a href="/fellowships" class="svelte-unpsak">fellowships</a></li> <li class="svelte-unpsak"><a href="/blogs" class="svelte-unpsak">Blog</a></li> <li class="svelte-unpsak"><a href="/products" class="svelte-unpsak">products</a></li> <li class="svelte-unpsak"><a href="/contact-us" class="svelte-unpsak">Contact us</a></li>',s,o,i,a="Login",l,h,d,u,_,f,m,c,g,T,N,A,P,O,j;return d=new sr({}),{c(){e=y("nav"),n=y("ul"),n.innerHTML=r,s=L(),o=y("div"),i=y("button"),i.textContent=a,l=L(),h=y("div"),q(d.$$.fragment),u=L(),_=y("div"),f=y("div"),m=y("button"),this.h()},l(p){e=I(p,"NAV",{id:!0,style:!0,class:!0});var D=C(e);n=I(D,"UL",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-1iz39pt"&&(n.innerHTML=r),s=R(D),o=I(D,"DIV",{style:!0});var k=C(o);i=I(k,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),X(i)!=="svelte-fxc53u"&&(i.textContent=a),k.forEach(b),l=R(D),h=I(D,"DIV",{class:!0});var E=C(h);G(d.$$.fragment,E),E.forEach(b),u=R(D),_=I(D,"DIV",{id:!0,class:!0});var B=C(_);f=I(B,"DIV",{id:!0,class:!0});var W=C(f);m=I(W,"BUTTON",{id:!0,class:!0}),C(m).forEach(b),W.forEach(b),B.forEach(b),D.forEach(b),this.h()},h(){v(n,"class","svelte-unpsak"),v(i,"class","button svelte-unpsak"),S(i,"background-color","transparent"),S(i,"color","white"),S(i,"border","1px solid white"),S(o,"position","relative"),S(o,"right","20px"),v(h,"class","mmm svelte-unpsak"),v(m,"id","circle3LOGO"),v(m,"class",c=be(t[2]?"not scrolled":"not")+" svelte-unpsak"),v(f,"id","circle2"),v(f,"class",g=be(t[2]?"not scrolled":"not")+" svelte-unpsak"),v(_,"id","circle1"),v(_,"class",T=be(t[2]?"not scrolled":"not")+" svelte-unpsak"),v(e,"id",N=t[0]?t[2]?"scrolledT":"T":t[2]?"scrolled":""),v(e,"style",A=t[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${t[4]}), rgba(57, 135, 155,${t[4]}));`:""),v(e,"class","svelte-unpsak")},m(p,D){M(p,e,D),w(e,n),w(e,s),w(e,o),w(o,i),w(e,l),w(e,h),J(d,h,null),w(e,u),w(e,_),w(_,f),w(f,m),P=!0,O||(j=Z(i,"click",t[6]),O=!0)},p(p,D){(!P||D&4&&c!==(c=be(p[2]?"not scrolled":"not")+" svelte-unpsak"))&&v(m,"class",c),(!P||D&4&&g!==(g=be(p[2]?"not scrolled":"not")+" svelte-unpsak"))&&v(f,"class",g),(!P||D&4&&T!==(T=be(p[2]?"not scrolled":"not")+" svelte-unpsak"))&&v(_,"class",T),(!P||D&5&&N!==(N=p[0]?p[2]?"scrolledT":"T":p[2]?"scrolled":""))&&v(e,"id",N),(!P||D&17&&A!==(A=p[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${p[4]}), rgba(57, 135, 155,${p[4]}));`:""))&&v(e,"style",A)},i(p){P||(V(d.$$.fragment,p),P=!0)},o(p){x(d.$$.fragment,p),P=!1},d(p){p&&b(e),Y(d),O=!1,j()}}}function wi(t){let e,n,r,s,o,i,a,l,h='<li class="svelte-unpsak"><a href="/" class="svelte-unpsak">Home</a></li> <li class="svelte-unpsak"><a href="/courses" class="svelte-unpsak">courses</a></li> <li class="svelte-unpsak"><a href="/fellowships" class="svelte-unpsak">fellowships</a></li> <li class="svelte-unpsak"><a href="/blogs" class="svelte-unpsak">Blog</a></li> <li class="svelte-unpsak"><a href="/products" class="svelte-unpsak">products</a></li> <li class="svelte-unpsak"><a href="/contact-us" class="svelte-unpsak">Contact us</a></li>',d,u,_,f,m=t[1]&&on(t),c=t[3]&&an(t);return{c(){m&&m.c(),e=L(),n=y("header"),r=y("div"),s=y("h1"),o=L(),c&&c.c(),i=L(),a=y("div"),l=y("ul"),l.innerHTML=h,this.h()},l(g){m&&m.l(g),e=R(g),n=I(g,"HEADER",{class:!0});var T=C(n);r=I(T,"DIV",{style:!0});var N=C(r);s=I(N,"H1",{}),C(s).forEach(b),N.forEach(b),o=R(T),c&&c.l(T),T.forEach(b),i=R(g),a=I(g,"DIV",{class:!0,id:!0,style:!0});var A=C(a);l=I(A,"UL",{class:!0,"data-svelte-h":!0}),X(l)!=="svelte-16vnmy9"&&(l.innerHTML=h),A.forEach(b),this.h()},h(){S(r,"position","absolute"),S(r,"top","-15px"),S(r,"left","15px"),v(n,"class","svelte-unpsak"),v(l,"class","svelte-unpsak"),v(a,"class","side-menu"),v(a,"id","menuu"),v(a,"style",d=`display: ${t[5]?"block":"none"};`)},m(g,T){m&&m.m(g,T),M(g,e,T),M(g,n,T),w(n,r),w(r,s),w(n,o),c&&c.m(n,null),M(g,i,T),M(g,a,T),w(a,l),u=!0,_||(f=Z(s,"click",t[10]),_=!0)},p(g,[T]){g[1]?m?(m.p(g,T),T&2&&V(m,1)):(m=on(g),m.c(),V(m,1),m.m(e.parentNode,e)):m&&(ye(),x(m,1,1,()=>{m=null}),Ie()),g[3]?c?(c.p(g,T),T&8&&V(c,1)):(c=an(g),c.c(),V(c,1),c.m(n,null)):c&&(ye(),x(c,1,1,()=>{c=null}),Ie()),(!u||T&32&&d!==(d=`display: ${g[5]?"block":"none"};`))&&v(a,"style",d)},i(g){u||(V(m),V(c),u=!0)},o(g){x(m),x(c),u=!1},d(g){g&&(b(e),b(n),b(i),b(a)),m&&m.d(g),c&&c.d(),_=!1,f()}}}const yi=t=>t.stopPropagation();function Ii(t,e,n){let{disableTransparent:r}=e,{enableTransparency:s}=e,o=!1;function i(){n(1,o=!0)}function a(){n(1,o=!1)}let l=!1,h,d=!1,u=0;Te(()=>{document.body.addEventListener("click",function(g){console.log(g.target.id),console.log(_),g.target.id!="menuuu"&&g.target.id!="menuio"&&_&&n(5,_=!1)}),h=function(){var g=window.scrollY||document.documentElement.scrollTop,T=document.documentElement.scrollHeight-window.innerHeight,N=g/T*100;return N},n(3,d=!0);const c=()=>{n(2,l=window.scrollY>0),console.log(h()*.01),h()>20?n(4,u=h()*.01+.7):n(4,u=h()*.01)};return window.addEventListener("scroll",c),r||window.addEventListener("scroll",c),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",c),document.body.style.overflow="auto"}});let _=!1;const f=()=>{a()},m=function(){const c=document.createElement("a");c.href="/",c.click()};return t.$$set=c=>{"disableTransparent"in c&&n(8,r=c.disableTransparent),"enableTransparency"in c&&n(0,s=c.enableTransparency)},[s,o,l,d,u,_,i,a,r,f,m]}class Ei extends Se{constructor(e){super(),Ce(this,e,Ii,wi,De,{disableTransparent:8,enableTransparency:0})}}function cn(t){let e,n,r,s,o,i,a,l,h,d;return a=new un({props:{func:t[11]}}),{c(){e=y("div"),n=y("div"),r=y("img"),o=L(),i=y("div"),q(a.$$.fragment),this.h()},l(u){e=I(u,"DIV",{class:!0});var _=C(e);n=I(_,"DIV",{class:!0});var f=C(n);r=I(f,"IMG",{src:!0}),o=R(f),i=I(f,"DIV",{class:!0});var m=C(i);G(a.$$.fragment,m),m.forEach(b),f.forEach(b),_.forEach(b),this.h()},h(){oe(r.src,s="/close.png")||v(r,"src",s),v(i,"class","content svelte-1eg9cy6"),v(n,"class","dialog-box svelte-1eg9cy6"),v(e,"class","overlay svelte-1eg9cy6")},m(u,_){M(u,e,_),w(e,n),w(n,r),w(n,o),w(n,i),J(a,i,null),l=!0,h||(d=[Z(r,"click",t[10]),Z(n,"click",Oi),Z(e,"click",t[10])],h=!0)},p(u,_){const f={};_&2&&(f.func=u[11]),a.$set(f)},i(u){l||(V(a.$$.fragment,u),l=!0)},o(u){x(a.$$.fragment,u),l=!1},d(u){u&&b(e),Y(a),h=!1,at(d)}}}function ki(t){let e,n;return e=new nr({}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p:Ae,i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Di(t){let e,n;return e=new tr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[14]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Ti(t){let e,n;return e=new ln({props:{f:!0,cardsData:[...t[5]]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Si(t){let e,n;return e=new ln({props:{f:!1,cardsData:[...t[4]]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(V(e.$$.fragment,r),n=!0)},o(r){x(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Ci(t){let e,n="Fellowships",r,s,o,i,a="Courses",l,h,d,u,_,f,m;return s=new Tt({props:{f:!0,onClick:t[12],cardsData:[...t[5]]}}),h=new Tt({props:{f:!1,onClick:t[13],cardsData:[...t[4]]}}),u=new ur({props:{blogs:t[7]}}),f=new hr({props:{data:t[6]}}),{c(){e=y("div"),e.textContent=n,r=L(),q(s.$$.fragment),o=L(),i=y("div"),i.textContent=a,l=L(),q(h.$$.fragment),d=L(),q(u.$$.fragment),_=L(),q(f.$$.fragment),this.h()},l(c){e=I(c,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-9rjion"&&(e.textContent=n),r=R(c),G(s.$$.fragment,c),o=R(c),i=I(c,"DIV",{class:!0,"data-svelte-h":!0}),X(i)!=="svelte-4wj5r"&&(i.textContent=a),l=R(c),G(h.$$.fragment,c),d=R(c),G(u.$$.fragment,c),_=R(c),G(f.$$.fragment,c),this.h()},h(){v(e,"class","title"),v(i,"class","title")},m(c,g){M(c,e,g),M(c,r,g),J(s,c,g),M(c,o,g),M(c,i,g),M(c,l,g),J(h,c,g),M(c,d,g),J(u,c,g),M(c,_,g),J(f,c,g),m=!0},p(c,g){const T={};g&32&&(T.cardsData=[...c[5]]),s.$set(T);const N={};g&16&&(N.cardsData=[...c[4]]),h.$set(N);const A={};g&128&&(A.blogs=c[7]),u.$set(A);const P={};g&64&&(P.data=c[6]),f.$set(P)},i(c){m||(V(s.$$.fragment,c),V(h.$$.fragment,c),V(u.$$.fragment,c),V(f.$$.fragment,c),m=!0)},o(c){x(s.$$.fragment,c),x(h.$$.fragment,c),x(u.$$.fragment,c),x(f.$$.fragment,c),m=!1},d(c){c&&(b(e),b(r),b(o),b(i),b(l),b(d),b(_)),Y(s,c),Y(h,c),Y(u,c),Y(f,c)}}}function Ai(t){let e,n,r,s,o,i,a,l="About us",h,d,u,_,f,m,c,g,T,N,A=t[9]&&cn(t);n=new Ei({props:{enableTransparency:!0}});const P=[Ci,Si,Ti,Di,ki],O=[];function j(p,D){return p[1]==0?0:p[1]==1?1:p[1]==2?2:p[1]==3?3:4}return m=j(t),c=O[m]=P[m](t),T=new or({props:{scrollBoxHeight:t[8]+160}}),{c(){A&&A.c(),e=L(),q(n.$$.fragment),r=L(),s=y("div"),o=y("div"),i=y("div"),a=y("p"),a.textContent=l,h=L(),d=y("p"),u=Be(t[0]),_=L(),f=y("div"),c.c(),g=L(),q(T.$$.fragment),this.h()},l(p){A&&A.l(p),e=R(p),G(n.$$.fragment,p),r=R(p),s=I(p,"DIV",{class:!0});var D=C(s);o=I(D,"DIV",{class:!0});var k=C(o);i=I(k,"DIV",{class:!0});var E=C(i);a=I(E,"P",{style:!0,"data-svelte-h":!0}),X(a)!=="svelte-1mkz37p"&&(a.textContent=l),h=R(E),d=I(E,"P",{style:!0});var B=C(d);u=Me(B,t[0]),B.forEach(b),E.forEach(b),k.forEach(b),D.forEach(b),_=R(p),f=I(p,"DIV",{class:!0});var W=C(f);c.l(W),W.forEach(b),g=R(p),G(T.$$.fragment,p),this.h()},h(){S(a,"position","relative"),S(a,"right","70px"),S(d,"font-weight","300"),S(d,"text-align","left"),S(d,"font-size","20px"),v(i,"class","image-text svelte-1eg9cy6"),v(o,"class","image-overlay svelte-1eg9cy6"),v(s,"class","header-image svelte-1eg9cy6"),v(f,"class","scroll-box svelte-1eg9cy6")},m(p,D){A&&A.m(p,D),M(p,e,D),J(n,p,D),M(p,r,D),M(p,s,D),w(s,o),w(o,i),w(i,a),w(i,h),w(i,d),w(d,u),M(p,_,D),M(p,f,D),O[m].m(f,null),M(p,g,D),J(T,p,D),N=!0},p(p,[D]){p[9]?A?(A.p(p,D),D&512&&V(A,1)):(A=cn(p),A.c(),V(A,1),A.m(e.parentNode,e)):A&&(ye(),x(A,1,1,()=>{A=null}),Ie()),(!N||D&1)&&Ne(u,p[0]);let k=m;m=j(p),m===k?O[m].p(p,D):(ye(),x(O[k],1,1,()=>{O[k]=null}),Ie(),c=O[m],c?c.p(p,D):(c=O[m]=P[m](p),c.c()),V(c,1),c.m(f,null));const E={};D&256&&(E.scrollBoxHeight=p[8]+160),T.$set(E)},i(p){N||(V(A),V(n.$$.fragment,p),V(c),V(T.$$.fragment,p),N=!0)},o(p){x(A),x(n.$$.fragment,p),x(c),x(T.$$.fragment,p),N=!1},d(p){p&&(b(e),b(r),b(s),b(_),b(f),b(g)),A&&A.d(p),Y(n,p),O[m].d(),Y(T,p)}}}function $i(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Oi=t=>t.stopPropagation();function Bi(t,e,n){let r="",s=0;async function o(k,E,B){const W=await fetch("https://dentists-backend.onrender.com/api/"+k,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(E)});if(!W.ok)throw rr("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${W.status}`);const z=await W.json();return B&&B(),z}let i=!1;async function a(){o("n/gp").then(k=>{k=k.d,n(6,m=k.map(E=>Object({title:E.productName,text:"Price : "+E.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+E.productID+"/0",discount:E.discount})))})}async function l(){o("n/gc").then(k=>{k=k.d,n(4,_=k.map(E=>Object({title:E.courseName,id:E.courseID,text:E.courseDetails,duration:E.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+E.courseID,clickHandler:()=>{const B=document.createElement("a");B.href="/courses/"+E.courseID,B.click(),E.courseID,n(2,i=!1)}}))),console.log(_)})}let h;async function d(){o("n/gf").then(k=>{k=k.d,n(5,f=k.map(E=>Object({id:E.fellowshipID,title:E.fellowshipName,duration:E.fellowshipDuration,text:E.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+E.fellowshipID+"/0",clickHandler:()=>{E.fellowshipID,n(2,i=!0)}})))})}async function u(){o("n/gb").then(k=>{k=k.d,n(7,c=k.map(E=>Object({id:E.blogID,text:E.blogDetails,title:E.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+E.blogID,clickHandler:()=>{}})))})}let _=[],f=[],m=[],c=[];function g(){const k=document.querySelector(".scroll-box");k&&n(8,T=Number(getComputedStyle(k).height.split("px")[0]))}let T=0;Te(()=>{document.body.addEventListener("click",function(z){console.log(z.target.id),console.log(P),z.target.id!="menuuu"&&z.target.id!="menuio"&&P&&(P=!1)}),setInterval(()=>{g()},500),o("aus").then(z=>{n(0,r=z.d)}),window.addEventListener("resize",g),g();const E=_n({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),B=bi(E);vi(B,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(z=>{console.log(z)}),_i(B,z=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(z)}),Promise.all([l(),d(),u(),a()]).then(()=>{addEventListener("ocd",z=>{console.log(z.detail),z.detail.f?(console.log(f),console.log(z.detail.id),n(3,h=f.filter($=>$.id==z.detail.id)[0])):n(3,h=_.filter($=>$.id==z.detail.id)[0])})});const W=()=>{};return window.addEventListener("scroll",W),document.body.style.overflow=N?"hidden":"auto",()=>{window.removeEventListener("scroll",W),window.removeEventListener("resize",g),document.body.style.overflow="auto"}}),Yn(()=>{g()});let N=!1;function A(){n(9,N=!1)}$i().then(k=>{k||console.log("Developer tools are closed.")});let P=!1;return[r,s,i,h,_,f,m,c,T,N,A,()=>{n(1,s=4),A()},function(){const k=document.createElement("a");k.href="/fellowships",k.click()},function(){const k=document.createElement("a");k.href="/courses",k.click()},function(){const k=document.createElement("a");k.href="/contact-us",k.click()}]}class qi extends Se{constructor(e){super(),Ce(this,e,Bi,Ai,De,{})}}export{qi as component};
