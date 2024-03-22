import{s as Ae,e as y,h as R,b as I,k as M,j as L,f as m,o as B,m as w,i as P,p as v,v as it,w as at,t as ct,d as te,l as lt,q as se,r as ut,n as Ge,y as ft,z as we,x as ye,J as Xn}from"../chunks/scheduler.CvS8aZFR.js";import{S as $e,i as Oe,c as G,b as J,m as Y,t as x,g as Je,e as Ye,a as K,d as X}from"../chunks/index.BLvvEpyq.js";/* empty css                                                     */import{C as Zn}from"../chunks/Card.Cri-3ssu.js";import{e as ce,u as Qn,d as er}from"../chunks/each.atBuby31.js";import{B as fn}from"../chunks/Button.J0U6XYUM.js";import"../chunks/Map.BFxH1DHB.js";import{G as dn}from"../chunks/Grid.DJULFDiD.js";import{L as tr}from"../chunks/Login.Vg29bVck.js";import{C as nr}from"../chunks/CourseData.Dy675Hqb.js";import{C as rr}from"../chunks/Contact.o_9xg7b3.js";import{n as sr}from"../chunks/not.DNvn3Bfc.js";import{T as or}from"../chunks/TopBar.DimmMICL.js";import{F as ir}from"../chunks/Footer.zbhVd3SN.js";function At(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function $t(t){let e,n;return e=new Zn({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){G(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Y(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function ar(t){let e,n,r,s,o,i,a=ce(t[0]),c=[];for(let l=0;l<a.length;l+=1)c[l]=$t(At(t,a,l));const d=l=>K(c[l],1,1,()=>{c[l]=null});return o=new fn({props:{text:"Show all ",src:"back-icon.png",radius:"40px",clickHandler:t[1]}}),{c(){e=y("div"),n=y("div");for(let l=0;l<c.length;l+=1)c[l].c();r=R(),s=y("div"),G(o.$$.fragment),this.h()},l(l){e=I(l,"DIV",{style:!0,class:!0});var f=M(e);n=I(f,"DIV",{class:!0,id:!0});var u=M(n);for(let $=0;$<c.length;$+=1)c[$].l(u);r=L(u),s=I(u,"DIV",{style:!0});var h=M(s);J(o.$$.fragment,h),h.forEach(m),u.forEach(m),f.forEach(m),this.h()},h(){B(s,"display","grid"),B(s,"place-items","center"),w(n,"class","row svelte-1l32lre"),w(n,"id","row-container"),B(e,"margin-bottom","90px"),B(e,"height","490px"),w(e,"class","row svelte-1l32lre")},m(l,f){P(l,e,f),v(e,n);for(let u=0;u<c.length;u+=1)c[u]&&c[u].m(n,null);v(n,r),v(n,s),Y(o,s,null),i=!0},p(l,[f]){if(f&5){a=ce(l[0]);let h;for(h=0;h<a.length;h+=1){const $=At(l,a,h);c[h]?(c[h].p($,f),x(c[h],1)):(c[h]=$t($),c[h].c(),x(c[h],1),c[h].m(n,r))}for(Je(),h=a.length;h<c.length;h+=1)d(h);Ye()}const u={};f&2&&(u.clickHandler=l[1]),o.$set(u)},i(l){if(!i){for(let f=0;f<a.length;f+=1)x(c[f]);x(o.$$.fragment,l),i=!0}},o(l){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)K(c[f]);K(o.$$.fragment,l),i=!1},d(l){l&&m(e),it(c,l),X(o)}}}function cr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,at(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class Ot extends $e{constructor(e){super(),Oe(this,e,cr,ar,Ae,{cardsData:0,onClick:1,f:2})}}function Bt(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Nt(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function Mt(t){let e,n;return{c(){e=y("img"),this.h()},l(r){e=I(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){ye(e.src,n=t[15].src)||w(e,"src",n),w(e,"alt","Neumorphic Picture"),w(e,"id","blog-image"),w(e,"class","rectangular-image svelte-30d5l1")},m(r,s){P(r,e,s)},p(r,s){s&1&&!ye(e.src,n=r[15].src)&&w(e,"src",n)},d(r){r&&m(e)}}}function Pt(t){let e,n=t[14]==t[2]&&Mt(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),P(r,e,s)},p(r,s){r[14]==r[2]?n?n.p(r,s):(n=Mt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&m(e),n&&n.d(r)}}}function Rt(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=y("div"),r=ct(n),this.h()},l(s){e=I(s,"DIV",{class:!0});var o=M(e);r=lt(o,n),o.forEach(m),this.h()},h(){w(e,"class","black-title svelte-30d5l1")},m(s,o){P(s,e,o),v(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&ut(r,n)},d(s){s&&m(e)}}}function Lt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=y("div"),this.h()},l(a){n=I(a,"DIV",{class:!0}),M(n).forEach(m),this.h()},h(){w(n,"class",r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-30d5l1"),this.first=n},m(a,c){P(a,n,c),s||(o=se(n,"click",i),s=!0)},p(a,c){e=a,c&4&&r!==(r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-30d5l1")&&w(n,"class",r)},d(a){a&&m(n),s=!1,o()}}}function lr(t){let e,n,r,s='<img src="/back-icon.png" class="svelte-30d5l1"/>',o,i,a,c,d,l,f,u,h,$='<img src="/left.png" class="svelte-30d5l1"/>',p,S,H,T='<img src="/right.png" class="svelte-30d5l1"/>',C,A,F,j=[],Z=new Map,z,ne,U=ce(t[0]),O=[];for(let E=0;E<U.length;E+=1)O[E]=Pt(Nt(t,U,E));let g=t[0].length>0&&Rt(t),k=ce([0,1,2]);const W=E=>E[14];for(let E=0;E<3;E+=1){let D=Bt(t,k,E),_=W(D);Z.set(_,j[E]=Lt(_,D))}return{c(){e=y("div"),n=y("div"),r=y("button"),r.innerHTML=s,o=R(),i=y("div"),a=y("div"),c=ct(t[1]),d=R(),l=y("div"),f=y("div"),u=y("div"),h=y("button"),h.innerHTML=$,p=R();for(let E=0;E<O.length;E+=1)O[E].c();S=R(),H=y("button"),H.innerHTML=T,C=R(),g&&g.c(),A=R(),F=y("div");for(let E=0;E<3;E+=1)j[E].c();this.h()},l(E){e=I(E,"DIV",{class:!0});var D=M(e);n=I(D,"DIV",{class:!0});var _=M(n);r=I(_,"BUTTON",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-x4kpjk"&&(r.innerHTML=s),_.forEach(m),o=L(D),i=I(D,"DIV",{style:!0,class:!0});var ae=M(i);a=I(ae,"DIV",{class:!0});var re=M(a);c=lt(re,t[1]),re.forEach(m),ae.forEach(m),d=L(D),l=I(D,"DIV",{class:!0,style:!0});var Ee=M(l);f=I(Ee,"DIV",{style:!0,class:!0});var b=M(f);u=I(b,"DIV",{class:!0,style:!0});var N=M(u);h=I(N,"BUTTON",{class:!0,"data-svelte-h":!0}),te(h)!=="svelte-1fb2q52"&&(h.innerHTML=$),p=L(N);for(let ee=0;ee<O.length;ee+=1)O[ee].l(N);S=L(N),H=I(N,"BUTTON",{class:!0,"data-svelte-h":!0}),te(H)!=="svelte-18ufuno"&&(H.innerHTML=T),N.forEach(m),C=L(b),g&&g.l(b),A=L(b),F=I(b,"DIV",{class:!0});var Q=M(F);for(let ee=0;ee<3;ee+=1)j[ee].l(Q);Q.forEach(m),b.forEach(m),Ee.forEach(m),D.forEach(m),this.h()},h(){w(r,"class","svelte-30d5l1"),w(n,"class","icon svelte-30d5l1"),w(a,"class","navy-title svelte-30d5l1"),B(i,"display","flex"),B(i,"justify-content","space-between"),B(i,"align-items","center"),B(i,"padding","10px"),w(i,"class","svelte-30d5l1"),w(h,"class","svelte-30d5l1"),w(H,"class","svelte-30d5l1"),w(u,"class","row svelte-30d5l1"),B(u,"display","flex"),B(u,"justify-content","space-around"),B(u,"align-items","center"),w(F,"class","dots-container svelte-30d5l1"),B(f,"text-align","center"),w(f,"class","svelte-30d5l1"),w(l,"class","neumorphic-card svelte-30d5l1"),B(l,"padding","20px"),w(e,"class","svelte-30d5l1")},m(E,D){P(E,e,D),v(e,n),v(n,r),v(e,o),v(e,i),v(i,a),v(a,c),v(e,d),v(e,l),v(l,f),v(f,u),v(u,h),v(u,p);for(let _=0;_<O.length;_+=1)O[_]&&O[_].m(u,null);v(u,S),v(u,H),v(f,C),g&&g.m(f,null),v(f,A),v(f,F);for(let _=0;_<3;_+=1)j[_]&&j[_].m(F,null);z||(ne=[se(r,"click",t[5]),se(h,"click",t[6]),se(H,"click",t[7])],z=!0)},p(E,[D]){if(D&2&&ut(c,E[1]),D&5){U=ce(E[0]);let _;for(_=0;_<U.length;_+=1){const ae=Nt(E,U,_);O[_]?O[_].p(ae,D):(O[_]=Pt(ae),O[_].c(),O[_].m(u,S))}for(;_<O.length;_+=1)O[_].d(1);O.length=U.length}E[0].length>0?g?g.p(E,D):(g=Rt(E),g.c(),g.m(f,A)):g&&(g.d(1),g=null),D&12&&(k=ce([0,1,2]),j=Qn(j,D,W,1,E,k,Z,F,er,Lt,null,Bt))},i:Ge,o:Ge,d(E){E&&m(e),it(O,E),g&&g.d();for(let D=0;D<3;D+=1)j[D].d();z=!1,ft(ne)}}}function ur(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(u){console.log(u),n(2,i=u)}at(function(){document.getElementById("blog-image");function h(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}h(),setInterval(h,7e3)});const c=()=>{location.href="/blogs"},d=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},l=()=>{n(2,i=(i+1)%o.length)},f=u=>a(u);return t.$$set=u=>{"firstTitle"in u&&n(1,r=u.firstTitle),"secondTitle"in u&&n(4,s=u.secondTitle),"blogs"in u&&n(0,o=u.blogs)},[o,r,i,a,s,c,d,l,f]}class fr extends $e{constructor(e){super(),Oe(this,e,ur,lr,Ae,{firstTitle:1,secondTitle:4,blogs:0})}}function Ht(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function jt(t){let e,n,r,s;return{c(){e=y("div"),n=y("div"),r=y("img"),this.h()},l(o){e=I(o,"DIV",{class:!0});var i=M(e);n=I(i,"DIV",{class:!0,style:!0});var a=M(n);r=I(a,"IMG",{src:!0,class:!0}),a.forEach(m),i.forEach(m),this.h()},h(){ye(r.src,s=t[0][t[1]%t[0].length].src)||w(r,"src",s),w(r,"class","svelte-av7ac4"),w(n,"class","postCard svelte-av7ac4"),B(n,"width","270px"),B(n,"height","270px"),B(n,"border-radius","10px"),B(n,"background-color","#e6e7ee"),B(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),B(n,"margin-bottom","70px"),w(e,"class","image-card svelte-av7ac4")},m(o,i){P(o,e,i),v(e,n),v(n,r)},p(o,i){i&3&&!ye(r.src,s=o[0][o[1]%o[0].length].src)&&w(r,"src",s)},d(o){o&&m(e)}}}function Vt(t){let e,n=ce(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=xt(Ht(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=we()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=we()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);P(s,e,o)},p(s,o){if(o&3){n=ce(s[0]);let i;for(i=0;i<n.length;i+=1){const a=Ht(s,n,i);r[i]?r[i].p(a,o):(r[i]=xt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&m(e),it(r,s)}}}function Ft(t){let e,n,r,s;return{c(){e=y("div"),n=y("img"),s=R(),this.h()},l(o){e=I(o,"DIV",{class:!0,style:!0});var i=M(e);n=I(i,"IMG",{src:!0,class:!0}),i.forEach(m),s=L(o),this.h()},h(){ye(n.src,r=t[0][(t[1]+1)%t[0].length].src)||w(n,"src",r),w(n,"class","svelte-av7ac4"),w(e,"class","postCard svelte-av7ac4"),B(e,"width","170px"),B(e,"height","170px"),B(e,"border-radius","10px"),B(e,"background-color","#e6e7ee"),B(e,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),B(e,"margin-bottom","70px")},m(o,i){P(o,e,i),v(e,n),P(o,s,i)},p(o,i){i&3&&!ye(n.src,r=o[0][(o[1]+1)%o[0].length].src)&&w(n,"src",r)},d(o){o&&(m(e),m(s))}}}function xt(t){let e,n=t[4]+1!=t[0].length&&Ft(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),P(r,e,s)},p(r,s){r[4]+1!=r[0].length?n?n.p(r,s):(n=Ft(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&m(e),n&&n.d(r)}}}function dr(t){let e,n,r="Products",s,o,i,a,c,d='<div class="black-title svelte-av7ac4">Title</div> <div class="small-note svelte-av7ac4">A small note goes here.</div> <div class="big-text svelte-av7ac4">Big bold black text.</div>',l,f,u,h,$,p,S="",H,T=t[0].length>=1&&jt(t),C=t[0].length>1&&Vt(t);return h=new fn({props:{text:"Show Call",src:"/back-icon.png"}}),{c(){e=y("div"),n=y("div"),n.textContent=r,s=R(),o=y("div"),i=y("div"),T&&T.c(),a=R(),c=y("div"),c.innerHTML=d,l=R(),f=y("div"),C&&C.c(),u=R(),G(h.$$.fragment),$=R(),p=y("div"),p.innerHTML=S,this.h()},l(A){e=I(A,"DIV",{style:!0});var F=M(e);n=I(F,"DIV",{class:!0,"data-svelte-h":!0}),te(n)!=="svelte-dyb2yo"&&(n.textContent=r),s=L(F),o=I(F,"DIV",{class:!0});var j=M(o);i=I(j,"DIV",{class:!0});var Z=M(i);T&&T.l(Z),a=L(Z),c=I(Z,"DIV",{class:!0,"data-svelte-h":!0}),te(c)!=="svelte-1sx5tfn"&&(c.innerHTML=d),Z.forEach(m),l=L(j),f=I(j,"DIV",{class:!0});var z=M(f);C&&C.l(z),u=L(z),J(h.$$.fragment,z),z.forEach(m),$=L(j),p=I(j,"DIV",{class:!0,"data-svelte-h":!0}),te(p)!=="svelte-1866ndo"&&(p.innerHTML=S),j.forEach(m),F.forEach(m),this.h()},h(){w(n,"class","navy-title svelte-av7ac4"),w(c,"class","text-container svelte-av7ac4"),w(i,"class","first-row svelte-av7ac4"),w(f,"class","row-images svelte-av7ac4"),w(p,"class","show-call-button svelte-av7ac4"),w(o,"class","neumorphic-card svelte-av7ac4"),B(e,"margin-top","90px")},m(A,F){P(A,e,F),v(e,n),v(e,s),v(e,o),v(o,i),T&&T.m(i,null),v(i,a),v(i,c),v(o,l),v(o,f),C&&C.m(f,null),v(f,u),Y(h,f,null),v(o,$),v(o,p),H=!0},p(A,[F]){A[0].length>=1?T?T.p(A,F):(T=jt(A),T.c(),T.m(i,a)):T&&(T.d(1),T=null),A[0].length>1?C?C.p(A,F):(C=Vt(A),C.c(),C.m(f,u)):C&&(C.d(1),C=null)},i(A){H||(x(h.$$.fragment,A),H=!0)},o(A){K(h.$$.fragment,A),H=!1},d(A){A&&m(e),T&&T.d(),C&&C.d(),X(h)}}}function hr(t,e,n){let{data:r=[]}=e,s=0;return setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),t.$$set=o=>{"data"in o&&n(0,r=o.data)},[r,s]}class pr extends $e{constructor(e){super(),Oe(this,e,hr,dr,Ae,{data:0})}}var Ut={};/**
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
 */const hn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},pn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,d=c?t[s+2]:0,l=o>>2,f=(o&3)<<4|a>>4;let u=(a&15)<<2|d>>6,h=d&63;c||(h=64,i||(u=64)),r.push(n[l],n[f],n[u],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(hn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||d==null||f==null)throw new mr;const u=o<<2|a>>4;if(r.push(u),d!==64){const h=a<<4&240|d>>2;if(r.push(h),f!==64){const $=d<<6&192|f;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const br=function(t){const e=hn(t);return pn.encodeByteArray(e,!0)},gn=function(t){return br(t).replace(/\./g,"")},_r=function(t){try{return pn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const wr=()=>vr().__FIREBASE_DEFAULTS__,yr=()=>{if(typeof process>"u"||typeof Ut>"u")return;const t=Ut.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ir=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Er=()=>{try{return wr()||yr()||Ir()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},mn=()=>{var t;return(t=Er())===null||t===void 0?void 0:t.config};/**
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
 */class Dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function bn(){try{return typeof indexedDB=="object"}catch{return!1}}function _n(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function kr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Sr="FirebaseError";class Ie extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Sr,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Be.prototype.create)}}class Be{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Tr(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new Ie(s,a,r)}}function Tr(t,e){return t.replace(Cr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cr=/\{\$([^}]+)}/g;function Xe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Kt(o)&&Kt(i)){if(!Xe(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Kt(t){return t!==null&&typeof t=="object"}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class de{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const he="[DEFAULT]";/**
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
 */class Ar{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Or(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$r(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(t){return t===he?void 0:t}function Or(t){return t.instantiationMode==="EAGER"}/**
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
 */class Br{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ar(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const Nr={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},Mr=V.INFO,Pr={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},Rr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lr{constructor(e){this.name=e,this._logLevel=Mr,this._logHandler=Rr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Nr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const Hr=(t,e)=>e.some(n=>t instanceof n);let Wt,qt;function jr(){return Wt||(Wt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vr(){return qt||(qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vn=new WeakMap,Ze=new WeakMap,wn=new WeakMap,Pe=new WeakMap,ht=new WeakMap;function Fr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ie(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&vn.set(n,t)}).catch(()=>{}),ht.set(e,t),e}function xr(t){if(Ze.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Ze.set(t,e)}let Qe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ze.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ur(t){Qe=t(Qe)}function Kr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Re(this),e,...n);return wn.set(r,e.sort?e.sort():[e]),ie(r)}:Vr().includes(t)?function(...e){return t.apply(Re(this),e),ie(vn.get(this))}:function(...e){return ie(t.apply(Re(this),e))}}function Wr(t){return typeof t=="function"?Kr(t):(t instanceof IDBTransaction&&xr(t),Hr(t,jr())?new Proxy(t,Qe):t)}function ie(t){if(t instanceof IDBRequest)return Fr(t);if(Pe.has(t))return Pe.get(t);const e=Wr(t);return e!==t&&(Pe.set(t,e),ht.set(e,t)),e}const Re=t=>ht.get(t);function pt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ie(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ie(i.result),c.oldVersion,c.newVersion,ie(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),a}function Le(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ie(n).then(()=>{})}const qr=["get","getKey","getAll","getAllKeys","count"],zr=["put","add","delete","clear"],He=new Map;function zt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(He.get(e))return He.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qr.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&c.done]))[0]};return He.set(e,o),o}Ur(t=>({...t,get:(e,n,r)=>zt(e,n)||t.get(e,n,r),has:(e,n)=>!!zt(e,n)||t.has(e,n)}));/**
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
 */class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const et="@firebase/app",Gt="0.9.25";/**
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
 */const ge=new Lr("@firebase/app"),Yr="@firebase/app-compat",Xr="@firebase/analytics-compat",Zr="@firebase/analytics",Qr="@firebase/app-check-compat",es="@firebase/app-check",ts="@firebase/auth",ns="@firebase/auth-compat",rs="@firebase/database",ss="@firebase/database-compat",os="@firebase/functions",is="@firebase/functions-compat",as="@firebase/installations",cs="@firebase/installations-compat",ls="@firebase/messaging",us="@firebase/messaging-compat",fs="@firebase/performance",ds="@firebase/performance-compat",hs="@firebase/remote-config",ps="@firebase/remote-config-compat",gs="@firebase/storage",ms="@firebase/storage-compat",bs="@firebase/firestore",_s="@firebase/firestore-compat",vs="firebase";/**
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
 */const tt="[DEFAULT]",ws={[et]:"fire-core",[Yr]:"fire-core-compat",[Zr]:"fire-analytics",[Xr]:"fire-analytics-compat",[es]:"fire-app-check",[Qr]:"fire-app-check-compat",[ts]:"fire-auth",[ns]:"fire-auth-compat",[rs]:"fire-rtdb",[ss]:"fire-rtdb-compat",[os]:"fire-fn",[is]:"fire-fn-compat",[as]:"fire-iid",[cs]:"fire-iid-compat",[ls]:"fire-fcm",[us]:"fire-fcm-compat",[fs]:"fire-perf",[ds]:"fire-perf-compat",[hs]:"fire-rc",[ps]:"fire-rc-compat",[gs]:"fire-gcs",[ms]:"fire-gcs-compat",[bs]:"fire-fst",[_s]:"fire-fst-compat","fire-js":"fire-js",[vs]:"fire-js-all"};/**
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
 */const Te=new Map,nt=new Map;function ys(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function me(t){const e=t.name;if(nt.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;nt.set(e,t);for(const n of Te.values())ys(n,t);return!0}function gt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Is={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},le=new Be("app","Firebase",Is);/**
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
 */class Es{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw le.create("app-deleted",{appName:this._name})}}function yn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw le.create("bad-app-name",{appName:String(s)});if(n||(n=mn()),!n)throw le.create("no-options");const o=Te.get(s);if(o){if(Xe(n,o.options)&&Xe(r,o.config))return o;throw le.create("duplicate-app",{appName:s})}const i=new Br(s);for(const c of nt.values())i.addComponent(c);const a=new Es(n,r,i);return Te.set(s,a),a}function Ds(t=tt){const e=Te.get(t);if(!e&&t===tt&&mn())return yn();if(!e)throw le.create("no-app",{appName:t});return e}function ue(t,e,n){var r;let s=(r=ws[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(a.join(" "));return}me(new de(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ks="firebase-heartbeat-database",Ss=1,De="firebase-heartbeat-store";let je=null;function In(){return je||(je=pt(ks,Ss,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(De)}}}).catch(t=>{throw le.create("idb-open",{originalErrorMessage:t.message})})),je}async function Ts(t){try{return await(await In()).transaction(De).objectStore(De).get(En(t))}catch(e){if(e instanceof Ie)ge.warn(e.message);else{const n=le.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(n.message)}}}async function Jt(t,e){try{const r=(await In()).transaction(De,"readwrite");await r.objectStore(De).put(e,En(t)),await r.done}catch(n){if(n instanceof Ie)ge.warn(n.message);else{const r=le.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ge.warn(r.message)}}}function En(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Cs=1024,As=30*24*60*60*1e3;class $s{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Yt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=As}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Yt(),{heartbeatsToSend:r,unsentEntries:s}=Os(this._heartbeatsCache.heartbeats),o=gn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Yt(){return new Date().toISOString().substring(0,10)}function Os(t,e=Cs){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Xt(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Xt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return bn()?_n().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ts(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Jt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Xt(t){return gn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ns(t){me(new de("platform-logger",e=>new Gr(e),"PRIVATE")),me(new de("heartbeat",e=>new $s(e),"PRIVATE")),ue(et,Gt,t),ue(et,Gt,"esm2017"),ue("fire-js","")}Ns("");var Ms="firebase",Ps="10.7.1";/**
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
 */ue(Ms,Ps,"app");const Rs=(t,e)=>e.some(n=>t instanceof n);let Zt,Qt;function Ls(){return Zt||(Zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hs(){return Qt||(Qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dn=new WeakMap,rt=new WeakMap,kn=new WeakMap,Ve=new WeakMap,mt=new WeakMap;function js(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(fe(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Dn.set(n,t)}).catch(()=>{}),mt.set(e,t),e}function Vs(t){if(rt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});rt.set(t,e)}let st={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fs(t){st=t(st)}function xs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Fe(this),e,...n);return kn.set(r,e.sort?e.sort():[e]),fe(r)}:Hs().includes(t)?function(...e){return t.apply(Fe(this),e),fe(Dn.get(this))}:function(...e){return fe(t.apply(Fe(this),e))}}function Us(t){return typeof t=="function"?xs(t):(t instanceof IDBTransaction&&Vs(t),Rs(t,Ls())?new Proxy(t,st):t)}function fe(t){if(t instanceof IDBRequest)return js(t);if(Ve.has(t))return Ve.get(t);const e=Us(t);return e!==t&&(Ve.set(t,e),mt.set(e,t)),e}const Fe=t=>mt.get(t);function Ks(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=fe(i);return r&&i.addEventListener("upgradeneeded",c=>{r(fe(i.result),c.oldVersion,c.newVersion,fe(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ws=["get","getKey","getAll","getAllKeys","count"],qs=["put","add","delete","clear"],xe=new Map;function en(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xe.get(e))return xe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ws.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let d=c.store;return r&&(d=d.index(a.shift())),(await Promise.all([d[n](...a),s&&c.done]))[0]};return xe.set(e,o),o}Fs(t=>({...t,get:(e,n,r)=>en(e,n)||t.get(e,n,r),has:(e,n)=>!!en(e,n)||t.has(e,n)}));const Sn="@firebase/installations",bt="0.6.4";/**
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
 */const Tn=1e4,Cn=`w:${bt}`,An="FIS_v2",zs="https://firebaseinstallations.googleapis.com/v1",Gs=60*60*1e3,Js="installations",Ys="Installations";/**
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
 */const Xs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},be=new Be(Js,Ys,Xs);function $n(t){return t instanceof Ie&&t.code.includes("request-failed")}/**
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
 */function On({projectId:t}){return`${zs}/projects/${t}/installations`}function Bn(t){return{token:t.token,requestStatus:2,expiresIn:Qs(t.expiresIn),creationTime:Date.now()}}async function Nn(t,e){const r=(await e.json()).error;return be.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zs(t,{refreshToken:e}){const n=Mn(t);return n.append("Authorization",eo(e)),n}async function Pn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qs(t){return Number(t.replace("s","000"))}function eo(t){return`${An} ${t}`}/**
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
 */async function to({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=On(t),s=Mn(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const i={fid:n,authVersion:An,appId:t.appId,sdkVersion:Cn},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Pn(()=>fetch(r,a));if(c.ok){const d=await c.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Bn(d.authToken)}}else throw await Nn("Create Installation",c)}/**
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
 */function Rn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function no(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const ro=/^[cdef][\w-]{21}$/,ot="";function so(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=oo(t);return ro.test(n)?n:ot}catch{return ot}}function oo(t){return no(t).substr(0,22)}/**
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
 */function Ne(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ln=new Map;function Hn(t,e){const n=Ne(t);jn(n,e),io(n,e)}function jn(t,e){const n=Ln.get(t);if(n)for(const r of n)r(e)}function io(t,e){const n=ao();n&&n.postMessage({key:t,fid:e}),co()}let pe=null;function ao(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=t=>{jn(t.data.key,t.data.fid)}),pe}function co(){Ln.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const lo="firebase-installations-database",uo=1,_e="firebase-installations-store";let Ue=null;function _t(){return Ue||(Ue=Ks(lo,uo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_e)}}})),Ue}async function Ce(t,e){const n=Ne(t),s=(await _t()).transaction(_e,"readwrite"),o=s.objectStore(_e),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Hn(t,e.fid),e}async function Vn(t){const e=Ne(t),r=(await _t()).transaction(_e,"readwrite");await r.objectStore(_e).delete(e),await r.done}async function Me(t,e){const n=Ne(t),s=(await _t()).transaction(_e,"readwrite"),o=s.objectStore(_e),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Hn(t,a.fid),a}/**
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
 */async function vt(t){let e;const n=await Me(t.appConfig,r=>{const s=fo(r),o=ho(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ot?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fo(t){const e=t||{fid:so(),registrationStatus:0};return Fn(e)}function ho(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(be.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=po(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:go(t)}:{installationEntry:e}}async function po(t,e){try{const n=await to(t,e);return Ce(t.appConfig,n)}catch(n){throw $n(n)&&n.customData.serverCode===409?await Vn(t.appConfig):await Ce(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function go(t){let e=await tn(t.appConfig);for(;e.registrationStatus===1;)await Rn(100),e=await tn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vt(t);return r||n}return e}function tn(t){return Me(t,e=>{if(!e)throw be.create("installation-not-found");return Fn(e)})}function Fn(t){return mo(t)?{fid:t.fid,registrationStatus:0}:t}function mo(t){return t.registrationStatus===1&&t.registrationTime+Tn<Date.now()}/**
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
 */async function bo({appConfig:t,heartbeatServiceProvider:e},n){const r=_o(t,n),s=Zs(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const i={installation:{sdkVersion:Cn,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Pn(()=>fetch(r,a));if(c.ok){const d=await c.json();return Bn(d)}else throw await Nn("Generate Auth Token",c)}function _o(t,{fid:e}){return`${On(t)}/${e}/authTokens:generate`}/**
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
 */async function wt(t,e=!1){let n;const r=await Me(t.appConfig,o=>{if(!xn(o))throw be.create("not-registered");const i=o.authToken;if(!e&&yo(i))return o;if(i.requestStatus===1)return n=vo(t,e),o;{if(!navigator.onLine)throw be.create("app-offline");const a=Eo(o);return n=wo(t,a),a}});return n?await n:r.authToken}async function vo(t,e){let n=await nn(t.appConfig);for(;n.authToken.requestStatus===1;)await Rn(100),n=await nn(t.appConfig);const r=n.authToken;return r.requestStatus===0?wt(t,e):r}function nn(t){return Me(t,e=>{if(!xn(e))throw be.create("not-registered");const n=e.authToken;return Do(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wo(t,e){try{const n=await bo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Ce(t.appConfig,r),n}catch(n){if($n(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Ce(t.appConfig,r)}throw n}}function xn(t){return t!==void 0&&t.registrationStatus===2}function yo(t){return t.requestStatus===2&&!Io(t)}function Io(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gs}function Eo(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Do(t){return t.requestStatus===1&&t.requestTime+Tn<Date.now()}/**
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
 */async function ko(t){const e=t,{installationEntry:n,registrationPromise:r}=await vt(e);return r?r.catch(console.error):wt(e).catch(console.error),n.fid}/**
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
 */async function So(t,e=!1){const n=t;return await To(n),(await wt(n,e)).token}async function To(t){const{registrationPromise:e}=await vt(t);e&&await e}/**
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
 */function Co(t){if(!t||!t.options)throw Ke("App Configuration");if(!t.name)throw Ke("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ke(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ke(t){return be.create("missing-app-config-values",{valueName:t})}/**
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
 */const Un="installations",Ao="installations-internal",$o=t=>{const e=t.getProvider("app").getImmediate(),n=Co(e),r=gt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oo=t=>{const e=t.getProvider("app").getImmediate(),n=gt(e,Un).getImmediate();return{getId:()=>ko(n),getToken:s=>So(n,s)}};function Bo(){me(new de(Un,$o,"PUBLIC")),me(new de(Ao,Oo,"PRIVATE"))}Bo();ue(Sn,bt);ue(Sn,bt,"esm2017");/**
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
 */const No="/firebase-messaging-sw.js",Mo="/firebase-cloud-messaging-push-scope",Kn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Po="https://fcmregistrations.googleapis.com/v1",Wn="google.c.a.c_id",Ro="google.c.a.c_l",Lo="google.c.a.ts",Ho="google.c.a.e";var rn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(rn||(rn={}));/**
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
 */function oe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function jo(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const We="fcm_token_details_db",Vo=5,sn="fcm_token_object_Store";async function Fo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(We))return null;let e=null;return(await pt(We,Vo,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(sn))return;const c=i.objectStore(sn),d=await c.index("fcmSenderId").get(t);if(await c.clear(),!!d){if(s===2){const l=d;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:oe(l.vapidKey)}}}else if(s===3){const l=d;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}else if(s===4){const l=d;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}}}})).close(),await Le(We),await Le("fcm_vapid_details_db"),await Le("undefined"),xo(e)?e:null}function xo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Uo="firebase-messaging-database",Ko=1,ve="firebase-messaging-store";let qe=null;function yt(){return qe||(qe=pt(Uo,Ko,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ve)}}})),qe}async function qn(t){const e=Et(t),r=await(await yt()).transaction(ve).objectStore(ve).get(e);if(r)return r;{const s=await Fo(t.appConfig.senderId);if(s)return await It(t,s),s}}async function It(t,e){const n=Et(t),s=(await yt()).transaction(ve,"readwrite");return await s.objectStore(ve).put(e,n),await s.done,e}async function Wo(t){const e=Et(t),r=(await yt()).transaction(ve,"readwrite");await r.objectStore(ve).delete(e),await r.done}function Et({appConfig:t}){return t.appId}/**
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
 */const qo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},q=new Be("messaging","Messaging",qo);/**
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
 */async function zo(t,e){const n=await kt(t),r=Gn(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Dt(t.appConfig),s)).json()}catch(i){throw q.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw q.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw q.create("token-subscribe-no-token");return o.token}async function Go(t,e){const n=await kt(t),r=Gn(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Dt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw q.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw q.create("token-update-failed",{errorInfo:i})}if(!o.token)throw q.create("token-update-no-token");return o.token}async function zn(t,e){const r={method:"DELETE",headers:await kt(t)};try{const o=await(await fetch(`${Dt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw q.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw q.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Dt({projectId:t}){return`${Po}/projects/${t}/registrations`}async function kt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Gn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Kn&&(s.web.applicationPubKey=r),s}/**
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
 */const Jo=7*24*60*60*1e3;async function Yo(t){const e=await Qo(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:oe(e.getKey("auth")),p256dh:oe(e.getKey("p256dh"))},r=await qn(t.firebaseDependencies);if(r){if(ei(r.subscriptionOptions,n))return Date.now()>=r.createTime+Jo?Zo(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await zn(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return on(t.firebaseDependencies,n)}else return on(t.firebaseDependencies,n)}async function Xo(t){const e=await qn(t.firebaseDependencies);e&&(await zn(t.firebaseDependencies,e.token),await Wo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Zo(t,e){try{const n=await Go(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await It(t.firebaseDependencies,r),n}catch(n){throw await Xo(t),n}}async function on(t,e){const r={token:await zo(t,e),createTime:Date.now(),subscriptionOptions:e};return await It(t,r),r.token}async function Qo(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:jo(e)})}function ei(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function an(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ti(e,t),ni(e,t),ri(e,t),e}function ti(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ni(t,e){e.data&&(t.data=e.data)}function ri(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const c=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function si(t){return typeof t=="object"&&!!t&&Wn in t}/**
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
 */Jn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Jn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Jn(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function oi(t){if(!t||!t.options)throw ze("App Configuration Object");if(!t.name)throw ze("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ze(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ze(t){return q.create("missing-app-config-values",{valueName:t})}/**
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
 */class ii{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=oi(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function ai(t){try{t.swRegistration=await navigator.serviceWorker.register(No,{scope:Mo}),t.swRegistration.update().catch(()=>{})}catch(e){throw q.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function ci(t,e){if(!e&&!t.swRegistration&&await ai(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw q.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function li(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Kn)}/**
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
 */async function Yn(t,e){if(!navigator)throw q.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw q.create("permission-blocked");return await li(t,e==null?void 0:e.vapidKey),await ci(t,e==null?void 0:e.serviceWorkerRegistration),Yo(t)}/**
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
 */async function ui(t,e,n){const r=fi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Wn],message_name:n[Ro],message_time:n[Lo],message_device_time:Math.floor(Date.now()/1e3)})}function fi(t){switch(t){case ke.NOTIFICATION_CLICKED:return"notification_open";case ke.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function di(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ke.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(an(n)):t.onMessageHandler.next(an(n)));const r=n.data;si(r)&&r[Ho]==="1"&&await ui(t,n.messageType,r)}const cn="@firebase/messaging",ln="0.12.5";/**
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
 */const hi=t=>{const e=new ii(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>di(e,n)),e},pi=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Yn(e,r)}};function gi(){me(new de("messaging",hi,"PUBLIC")),me(new de("messaging-internal",pi,"PRIVATE")),ue(cn,ln),ue(cn,ln,"esm2017")}/**
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
 */async function mi(){try{await _n()}catch{return!1}return typeof window<"u"&&bn()&&kr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bi(t,e){if(!navigator)throw q.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function _i(t=Ds()){return mi().then(e=>{if(!e)throw q.create("unsupported-browser")},e=>{throw q.create("indexed-db-unsupported")}),gt(dt(t),"messaging").getImmediate()}async function vi(t,e){return t=dt(t),Yn(t,e)}function wi(t,e){return t=dt(t),bi(t,e)}gi();function un(t){let e,n,r,s="×",o,i,a,c,d,l;return a=new tr({props:{func:t[12]}}),{c(){e=y("div"),n=y("div"),r=y("button"),r.textContent=s,o=R(),i=y("div"),G(a.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0});var u=M(e);n=I(u,"DIV",{class:!0});var h=M(n);r=I(h,"BUTTON",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-1vf4byn"&&(r.textContent=s),o=L(h),i=I(h,"DIV",{class:!0});var $=M(i);J(a.$$.fragment,$),$.forEach(m),h.forEach(m),u.forEach(m),this.h()},h(){w(r,"class","close-button svelte-1bmw3nn"),w(i,"class","content svelte-1bmw3nn"),w(n,"class","dialog-box svelte-1bmw3nn"),w(e,"class","overlay svelte-1bmw3nn")},m(f,u){P(f,e,u),v(e,n),v(n,r),v(n,o),v(n,i),Y(a,i,null),c=!0,d||(l=[se(r,"click",t[11]),se(n,"click",Ci),se(e,"click",t[11])],d=!0)},p(f,u){const h={};u&2&&(h.func=f[12]),a.$set(h)},i(f){c||(x(a.$$.fragment,f),c=!0)},o(f){K(a.$$.fragment,f),c=!1},d(f){f&&m(e),X(a),d=!1,ft(l)}}}function yi(t){let e,n;return e=new rr({}),{c(){G(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Y(e,r,s),n=!0},p:Ge,i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Ii(t){let e,n;return e=new nr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[18]}}),{c(){G(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Y(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Ei(t){let e,n;return e=new dn({props:{f:!0,cardsData:[...t[5]]}}),{c(){G(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Y(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Di(t){let e,n;return e=new dn({props:{f:!1,cardsData:[...t[4]]}}),{c(){G(e.$$.fragment)},l(r){J(e.$$.fragment,r)},m(r,s){Y(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){K(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function ki(t){let e,n="Fellowships",r,s,o,i,a="Courses",c,d,l,f,u,h,$;return s=new Ot({props:{f:!0,onClick:t[16],cardsData:[...t[5]]}}),d=new Ot({props:{f:!1,onClick:t[17],cardsData:[...t[4]]}}),f=new fr({props:{blogs:t[7]}}),h=new pr({props:{data:t[6]}}),{c(){e=y("div"),e.textContent=n,r=R(),G(s.$$.fragment),o=R(),i=y("div"),i.textContent=a,c=R(),G(d.$$.fragment),l=R(),G(f.$$.fragment),u=R(),G(h.$$.fragment),this.h()},l(p){e=I(p,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-9rjion"&&(e.textContent=n),r=L(p),J(s.$$.fragment,p),o=L(p),i=I(p,"DIV",{class:!0,"data-svelte-h":!0}),te(i)!=="svelte-4wj5r"&&(i.textContent=a),c=L(p),J(d.$$.fragment,p),l=L(p),J(f.$$.fragment,p),u=L(p),J(h.$$.fragment,p),this.h()},h(){w(e,"class","title"),w(i,"class","title")},m(p,S){P(p,e,S),P(p,r,S),Y(s,p,S),P(p,o,S),P(p,i,S),P(p,c,S),Y(d,p,S),P(p,l,S),Y(f,p,S),P(p,u,S),Y(h,p,S),$=!0},p(p,S){const H={};S&32&&(H.cardsData=[...p[5]]),s.$set(H);const T={};S&16&&(T.cardsData=[...p[4]]),d.$set(T);const C={};S&128&&(C.blogs=p[7]),f.$set(C);const A={};S&64&&(A.data=p[6]),h.$set(A)},i(p){$||(x(s.$$.fragment,p),x(d.$$.fragment,p),x(f.$$.fragment,p),x(h.$$.fragment,p),$=!0)},o(p){K(s.$$.fragment,p),K(d.$$.fragment,p),K(f.$$.fragment,p),K(h.$$.fragment,p),$=!1},d(p){p&&(m(e),m(r),m(o),m(i),m(c),m(l),m(u)),X(s,p),X(d,p),X(f,p),X(h,p)}}}function Si(t){let e,n,r,s,o,i,a="Courses",c,d,l="Fellowships",f,u,h="Contact us",$,p,S,H,T,C,A="About us",F,j,Z,z,ne,U,O,g,k,W,E,D,_=t[9]&&un(t);n=new or({});const ae=[ki,Di,Ei,Ii,yi],re=[];function Ee(b,N){return b[1]==0?0:b[1]==1?1:b[1]==2?2:b[1]==3?3:4}return U=Ee(t),O=re[U]=ae[U](t),k=new ir({props:{scrollBoxHeight:t[8]}}),{c(){_&&_.c(),e=R(),G(n.$$.fragment),r=R(),s=y("div"),o=y("ul"),i=y("li"),i.textContent=a,c=R(),d=y("li"),d.textContent=l,f=R(),u=y("li"),u.textContent=h,p=R(),S=y("div"),H=y("div"),T=y("div"),C=y("p"),C.textContent=A,F=R(),j=y("p"),Z=ct(t[0]),z=R(),ne=y("div"),O.c(),g=R(),G(k.$$.fragment),this.h()},l(b){_&&_.l(b),e=L(b),J(n.$$.fragment,b),r=L(b),s=I(b,"DIV",{class:!0,id:!0,style:!0});var N=M(s);o=I(N,"UL",{});var Q=M(o);i=I(Q,"LI",{"data-svelte-h":!0}),te(i)!=="svelte-15gd3eg"&&(i.textContent=a),c=L(Q),d=I(Q,"LI",{"data-svelte-h":!0}),te(d)!=="svelte-1w3oh8g"&&(d.textContent=l),f=L(Q),u=I(Q,"LI",{"data-svelte-h":!0}),te(u)!=="svelte-1pessln"&&(u.textContent=h),Q.forEach(m),N.forEach(m),p=L(b),S=I(b,"DIV",{class:!0});var ee=M(S);H=I(ee,"DIV",{class:!0});var St=M(H);T=I(St,"DIV",{class:!0});var Se=M(T);C=I(Se,"P",{style:!0,"data-svelte-h":!0}),te(C)!=="svelte-1mkz37p"&&(C.textContent=A),F=L(Se),j=I(Se,"P",{style:!0});var Tt=M(j);Z=lt(Tt,t[0]),Tt.forEach(m),Se.forEach(m),St.forEach(m),ee.forEach(m),z=L(b),ne=I(b,"DIV",{class:!0});var Ct=M(ne);O.l(Ct),Ct.forEach(m),g=L(b),J(k.$$.fragment,b),this.h()},h(){w(s,"class","side-menu svelte-1bmw3nn"),w(s,"id","menuu"),w(s,"style",$=`display: ${t[10]?"block":"none"};`),B(C,"position","relative"),B(C,"right","70px"),B(j,"font-weight","300"),B(j,"text-align","left"),B(j,"font-size","20px"),w(T,"class","image-text svelte-1bmw3nn"),w(H,"class","image-overlay svelte-1bmw3nn"),w(S,"class","header-image svelte-1bmw3nn"),w(ne,"class","scroll-box svelte-1bmw3nn")},m(b,N){_&&_.m(b,N),P(b,e,N),Y(n,b,N),P(b,r,N),P(b,s,N),v(s,o),v(o,i),v(o,c),v(o,d),v(o,f),v(o,u),P(b,p,N),P(b,S,N),v(S,H),v(H,T),v(T,C),v(T,F),v(T,j),v(j,Z),P(b,z,N),P(b,ne,N),re[U].m(ne,null),P(b,g,N),Y(k,b,N),W=!0,E||(D=[se(i,"click",t[13]),se(d,"click",t[14]),se(u,"click",t[15])],E=!0)},p(b,[N]){b[9]?_?(_.p(b,N),N&512&&x(_,1)):(_=un(b),_.c(),x(_,1),_.m(e.parentNode,e)):_&&(Je(),K(_,1,1,()=>{_=null}),Ye()),(!W||N&1024&&$!==($=`display: ${b[10]?"block":"none"};`))&&w(s,"style",$),(!W||N&1)&&ut(Z,b[0]);let Q=U;U=Ee(b),U===Q?re[U].p(b,N):(Je(),K(re[Q],1,1,()=>{re[Q]=null}),Ye(),O=re[U],O?O.p(b,N):(O=re[U]=ae[U](b),O.c()),x(O,1),O.m(ne,null));const ee={};N&256&&(ee.scrollBoxHeight=b[8]),k.$set(ee)},i(b){W||(x(_),x(n.$$.fragment,b),x(O),x(k.$$.fragment,b),W=!0)},o(b){K(_),K(n.$$.fragment,b),K(O),K(k.$$.fragment,b),W=!1},d(b){b&&(m(e),m(r),m(s),m(p),m(S),m(z),m(ne),m(g)),_&&_.d(b),X(n,b),re[U].d(),X(k,b),E=!1,ft(D)}}}function Ti(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ci=t=>t.stopPropagation();function Ai(t,e,n){let r="",s=0;async function o(g,k,W){const E=await fetch("https://dentists-backend.onrender.com/api/"+g,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(!E.ok)throw sr("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${E.status}`);const D=await E.json();return W&&W(),D}let i=!1;async function a(){o("n/gp").then(g=>{g=g.d,n(6,$=g.map(k=>Object({title:k.productName,text:"Price : "+k.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+k.productID+"/0",discount:k.discount})))})}async function c(){o("n/gc").then(g=>{g=g.d,n(4,u=g.map(k=>Object({title:k.courseName,id:k.courseID,text:k.courseDetails,duration:k.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+k.courseID,clickHandler:()=>{const W=document.createElement("a");W.href="/courses/"+k.courseID,W.click(),k.courseID,n(2,i=!1)}}))),console.log(u)})}let d;async function l(){o("n/gf").then(g=>{g=g.d,n(5,h=g.map(k=>Object({id:k.fellowshipID,title:k.fellowshipName,duration:k.fellowshipDuration,text:k.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+k.fellowshipID,clickHandler:()=>{k.fellowshipID,n(2,i=!0)}})))})}async function f(){o("n/gb").then(g=>{g=g.d,n(7,p=g.map(k=>Object({id:k.blogID,text:k.blogDetails,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+k.blogID,clickHandler:()=>{}})))})}let u=[],h=[],$=[],p=[];function S(){const g=document.querySelector(".scroll-box");g&&n(8,H=Number(getComputedStyle(g).height.split("px")[0]))}let H=0;at(()=>{document.body.addEventListener("click",function(D){console.log(D.target.id),console.log(A),D.target.id!="menuuu"&&D.target.id!="menuio"&&A&&n(10,A=!1)}),setInterval(()=>{S()},500),o("aus").then(D=>{n(0,r=D.d)}),window.addEventListener("resize",S),S();const k=yn({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),W=_i(k);vi(W,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(D=>{console.log(D)}),wi(W,D=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(D)}),Promise.all([c(),l(),f(),a()]).then(()=>{addEventListener("ocd",D=>{console.log(D.detail),D.detail.f?(console.log(h),console.log(D.detail.id),n(3,d=h.filter(_=>_.id==D.detail.id)[0])):n(3,d=u.filter(_=>_.id==D.detail.id)[0])})});const E=()=>{};return window.addEventListener("scroll",E),document.body.style.overflow=T?"hidden":"auto",()=>{window.removeEventListener("scroll",E),window.removeEventListener("resize",S),document.body.style.overflow="auto"}}),Xn(()=>{S()});let T=!1;function C(){n(9,T=!1)}Ti().then(g=>{g||console.log("Developer tools are closed.")});let A=!1;return[r,s,i,d,u,h,$,p,H,T,A,C,()=>{n(1,s=4),C()},function(){console.log("CLICKED HERE");const g=document.createElement("a");g.href="/courses",g.click()},function(){console.log("clicked here");const g=document.createElement("a");g.href="/fellowships",g.click()},function(){const g=document.createElement("a");g.href="/contact-us",g.click()},function(){const g=document.createElement("a");g.href="/fellowships",g.click()},function(){const g=document.createElement("a");g.href="/courses",g.click()},function(){const g=document.createElement("a");g.href="/contact-us",g.click()}]}class Ki extends $e{constructor(e){super(),Oe(this,e,Ai,Si,Ae,{})}}export{Ki as component};
