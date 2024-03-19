import{s as Fe,e as w,h as $,b as y,k,f as g,j as O,m as h,o as j,i as R,p,v as qn,w as Ot,t as Bt,d as x,l as Mt,x as yt,r as Nt,n as He,q as Q,z as Ze,H as ln,I as un,y as Kn,J as Mr}from"../chunks/scheduler.Cin9khNl.js";import{S as ze,i as xe,c as W,b as G,m as J,t as C,g as Ce,e as Se,a as L,d as Y}from"../chunks/index.DcF4-v1J.js";/* empty css                                                     */import{C as Un}from"../chunks/Card.CmEgfiDj.js";import{e as Pe,u as Nr,d as Lr}from"../chunks/each.B9raO-7B.js";import{B as Wn}from"../chunks/Button.SRw4N8aE.js";import{M as Pr}from"../chunks/Map.ztLTGbLs.js";import{G as Gn}from"../chunks/Grid.CGbv0FAg.js";import{L as Rr}from"../chunks/Login.dNz2CO_f.js";import{C as Hr}from"../chunks/CourseData.BN_bratn.js";import{C as Vr}from"../chunks/Contact.DNu9AsP4.js";import{n as jr}from"../chunks/not.DNvn3Bfc.js";function fn(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function dn(t){let e,n;return e=new Un({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Fr(t){let e,n,r,s,o,i,c=Pe(t[0]),a=[];for(let l=0;l<c.length;l+=1)a[l]=dn(fn(t,c,l));const u=l=>L(a[l],1,1,()=>{a[l]=null});return o=new Wn({props:{text:"Show all ",src:"back-icon.png",radius:"40px",clickHandler:t[1]}}),{c(){e=w("div"),n=w("div");for(let l=0;l<a.length;l+=1)a[l].c();r=$(),s=w("div"),W(o.$$.fragment),this.h()},l(l){e=y(l,"DIV",{style:!0});var f=k(e);n=y(f,"DIV",{class:!0,id:!0});var I=k(n);for(let S=0;S<a.length;S+=1)a[S].l(I);I.forEach(g),r=O(f),s=y(f,"DIV",{style:!0});var b=k(s);G(o.$$.fragment,b),b.forEach(g),f.forEach(g),this.h()},h(){h(n,"class","row svelte-1l32lre"),h(n,"id","row-container"),j(s,"display","grid"),j(s,"place-items","center"),j(e,"margin-bottom","90px")},m(l,f){R(l,e,f),p(e,n);for(let I=0;I<a.length;I+=1)a[I]&&a[I].m(n,null);p(e,r),p(e,s),J(o,s,null),i=!0},p(l,[f]){if(f&5){c=Pe(l[0]);let b;for(b=0;b<c.length;b+=1){const S=fn(l,c,b);a[b]?(a[b].p(S,f),C(a[b],1)):(a[b]=dn(S),a[b].c(),C(a[b],1),a[b].m(n,null))}for(Ce(),b=c.length;b<a.length;b+=1)u(b);Se()}const I={};f&2&&(I.clickHandler=l[1]),o.$set(I)},i(l){if(!i){for(let f=0;f<c.length;f+=1)C(a[f]);C(o.$$.fragment,l),i=!0}},o(l){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)L(a[f]);L(o.$$.fragment,l),i=!1},d(l){l&&g(e),qn(a,l),Y(o)}}}function zr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,Ot(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class hn extends ze{constructor(e){super(),xe(this,e,zr,Fr,Fe,{cardsData:0,onClick:1,f:2})}}function pn(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}function gn(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=w("div"),r=Bt(n),this.h()},l(s){e=y(s,"DIV",{class:!0});var o=k(e);r=Mt(o,n),o.forEach(g),this.h()},h(){h(e,"class","black-title svelte-sumc1k")},m(s,o){R(s,e,o),p(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&Nt(r,n)},d(s){s&&g(e)}}}function mn(t,e){let n,r,s,o;function i(){return e[5](e[11])}return{key:t,first:null,c(){n=w("div"),this.h()},l(c){n=y(c,"DIV",{class:!0}),k(n).forEach(g),this.h()},h(){h(n,"class",r="dot "+(e[11]===e[2]?"light-dot":"dark-dot")+" svelte-sumc1k"),this.first=n},m(c,a){R(c,n,a),s||(o=Q(n,"click",i),s=!0)},p(c,a){e=c,a&4&&r!==(r="dot "+(e[11]===e[2]?"light-dot":"dark-dot")+" svelte-sumc1k")&&h(n,"class",r)},d(c){c&&g(n),s=!1,o()}}}function xr(t){let e,n,r='<img src="" class="svelte-sumc1k"/>',s,o,i,c,a,u,l,f,I,b,S,d,D=[],q=new Map,_=t[0].length>0&&gn(t),T=Pe([0,1,2]);const M=v=>v[11];for(let v=0;v<3;v+=1){let A=pn(t,T,v),F=M(A);q.set(F,D[v]=mn(F,A))}return{c(){e=w("div"),n=w("div"),n.innerHTML=r,s=$(),o=w("div"),i=w("div"),c=Bt(t[1]),a=$(),u=w("div"),l=w("div"),f=w("img"),b=$(),_&&_.c(),S=$(),d=w("div");for(let v=0;v<3;v+=1)D[v].c();this.h()},l(v){e=y(v,"DIV",{class:!0});var A=k(e);n=y(A,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-17y3p76"&&(n.innerHTML=r),s=O(A),o=y(A,"DIV",{style:!0,class:!0});var F=k(o);i=y(F,"DIV",{class:!0});var V=k(i);c=Mt(V,t[1]),V.forEach(g),F.forEach(g),a=O(A),u=y(A,"DIV",{class:!0,style:!0});var ce=k(u);l=y(ce,"DIV",{style:!0,class:!0});var te=k(l);f=y(te,"IMG",{src:!0,alt:!0,id:!0,class:!0}),b=O(te),_&&_.l(te),S=O(te),d=y(te,"DIV",{class:!0});var Z=k(d);for(let U=0;U<3;U+=1)D[U].l(Z);Z.forEach(g),te.forEach(g),ce.forEach(g),A.forEach(g),this.h()},h(){h(n,"class","icon svelte-sumc1k"),h(i,"class","navy-title svelte-sumc1k"),j(o,"display","flex"),j(o,"justify-content","space-between"),j(o,"align-items","center"),j(o,"padding","10px"),h(o,"class","svelte-sumc1k"),yt(f.src,I="https://picsum.photos/200/300")||h(f,"src",I),h(f,"alt","Neumorphic Picture"),h(f,"id","blog-image"),h(f,"class","rectangular-image svelte-sumc1k"),h(d,"class","dots-container svelte-sumc1k"),j(l,"text-align","center"),h(l,"class","svelte-sumc1k"),h(u,"class","neumorphic-card svelte-sumc1k"),j(u,"padding","20px"),h(e,"class","svelte-sumc1k")},m(v,A){R(v,e,A),p(e,n),p(e,s),p(e,o),p(o,i),p(i,c),p(e,a),p(e,u),p(u,l),p(l,f),p(l,b),_&&_.m(l,null),p(l,S),p(l,d);for(let F=0;F<3;F+=1)D[F]&&D[F].m(d,null)},p(v,[A]){A&2&&Nt(c,v[1]),v[0].length>0?_?_.p(v,A):(_=gn(v),_.c(),_.m(l,S)):_&&(_.d(1),_=null),A&12&&(T=Pe([0,1,2]),D=Nr(D,A,M,1,v,T,q,d,Lr,mn,null,pn))},i:He,o:He,d(v){v&&g(e),_&&_.d();for(let A=0;A<3;A+=1)D[A].d()}}}function qr(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>3&&(o=o.slice(0,4));let i=0,c;function a(l){console.log(l),n(2,i=l),c.src=o[i].src}Ot(function(){c=document.getElementById("blog-image");function f(){console.log("wack wack"),!(o.length<1)&&(n(2,i=(i+1)%o.length),c.src=o[i].src,console.log(i))}f(),setInterval(f,7e3)});const u=l=>a(l);return t.$$set=l=>{"firstTitle"in l&&n(1,r=l.firstTitle),"secondTitle"in l&&n(4,s=l.secondTitle),"blogs"in l&&n(0,o=l.blogs)},[o,r,i,a,s,u]}class Kr extends ze{constructor(e){super(),xe(this,e,qr,xr,Fe,{firstTitle:1,secondTitle:4,blogs:0})}}function bn(t){let e,n,r,s;return{c(){e=w("img"),this.h()},l(o){e=y(o,"IMG",{src:!0,width:!0,height:!0,class:!0}),this.h()},h(){yt(e.src,n=t[0])||h(e,"src",n),h(e,"width",r=t[1]!=null?t[1].w:120),h(e,"height",s=t[1]!=null?t[1].h:80),h(e,"class","svelte-104p3ks")},m(o,i){R(o,e,i)},p(o,i){i&1&&!yt(e.src,n=o[0])&&h(e,"src",n),i&2&&r!==(r=o[1]!=null?o[1].w:120)&&h(e,"width",r),i&2&&s!==(s=o[1]!=null?o[1].h:80)&&h(e,"height",s)},d(o){o&&g(e)}}}function Ur(t){let e,n=t[0]!=""&&bn(t);return{c(){e=w("div"),n&&n.c(),this.h()},l(r){e=y(r,"DIV",{class:!0});var s=k(e);n&&n.l(s),s.forEach(g),this.h()},h(){h(e,"class","card svelte-104p3ks")},m(r,s){R(r,e,s),n&&n.m(e,null)},p(r,[s]){r[0]!=""?n?n.p(r,s):(n=bn(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:He,o:He,d(r){r&&g(e),n&&n.d()}}}function Wr(t,e,n){let{src:r}=e,{size:s}=e;return t.$$set=o=>{"src"in o&&n(0,r=o.src),"size"in o&&n(1,s=o.size)},[r,s]}class Gr extends ze{constructor(e){super(),xe(this,e,Wr,Ur,Fe,{src:0,size:1})}}function vn(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function _n(t){let e,n,r;return n=new Gr({props:{src:t[0][t[1]%t[0].length].src,size:{w:290,h:280}}}),{c(){e=w("div"),W(n.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var o=k(e);G(n.$$.fragment,o),o.forEach(g),this.h()},h(){h(e,"class","image-card svelte-1qyvrcm")},m(s,o){R(s,e,o),J(n,e,null),r=!0},p(s,o){const i={};o&3&&(i.src=s[0][s[1]%s[0].length].src),n.$set(i)},i(s){r||(C(n.$$.fragment,s),r=!0)},o(s){L(n.$$.fragment,s),r=!1},d(s){s&&g(e),Y(n)}}}function wn(t){let e,n,r=Pe(t[0]),s=[];for(let i=0;i<r.length;i+=1)s[i]=In(vn(t,r,i));const o=i=>L(s[i],1,1,()=>{s[i]=null});return{c(){for(let i=0;i<s.length;i+=1)s[i].c();e=Ze()},l(i){for(let c=0;c<s.length;c+=1)s[c].l(i);e=Ze()},m(i,c){for(let a=0;a<s.length;a+=1)s[a]&&s[a].m(i,c);R(i,e,c),n=!0},p(i,c){if(c&3){r=Pe(i[0]);let a;for(a=0;a<r.length;a+=1){const u=vn(i,r,a);s[a]?(s[a].p(u,c),C(s[a],1)):(s[a]=In(u),s[a].c(),C(s[a],1),s[a].m(e.parentNode,e))}for(Ce(),a=r.length;a<s.length;a+=1)o(a);Se()}},i(i){if(!n){for(let c=0;c<r.length;c+=1)C(s[c]);n=!0}},o(i){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)L(s[c]);n=!1},d(i){i&&g(e),qn(s,i)}}}function yn(t){let e,n;return e=new Un({props:{src:t[0][(t[1]+1)%t[0].length].src,title:t[0][(t[1]+1)%t[0].length].title,text:t[0][(t[1]+1)%t[0].length].text+(t[0][(t[1]+1)%t[0].length].discount?t[0][(t[1]+1)%t[0].length].discount:" "),disableBtn:1,size:{w:300,h:200}}}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&3&&(o.src=r[0][(r[1]+1)%r[0].length].src),s&3&&(o.title=r[0][(r[1]+1)%r[0].length].title),s&3&&(o.text=r[0][(r[1]+1)%r[0].length].text+(r[0][(r[1]+1)%r[0].length].discount?r[0][(r[1]+1)%r[0].length].discount:" ")),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function In(t){let e,n,r=t[4]+1!=t[0].length&&yn(t);return{c(){r&&r.c(),e=Ze()},l(s){r&&r.l(s),e=Ze()},m(s,o){r&&r.m(s,o),R(s,e,o),n=!0},p(s,o){s[4]+1!=s[0].length?r?(r.p(s,o),o&1&&C(r,1)):(r=yn(s),r.c(),C(r,1),r.m(e.parentNode,e)):r&&(Ce(),L(r,1,1,()=>{r=null}),Se())},i(s){n||(C(r),n=!0)},o(s){L(r),n=!1},d(s){s&&g(e),r&&r.d(s)}}}function Jr(t){let e,n,r="Products",s,o,i,c,a,u='<div class="black-title svelte-1qyvrcm">Title</div> <div class="small-note svelte-1qyvrcm">A small note goes here.</div> <div class="big-text svelte-1qyvrcm">Big bold black text.</div>',l,f,I,b,S,d,D="",q,_=t[0].length>=1&&_n(t),T=t[0].length>1&&wn(t);return b=new Wn({props:{text:"Show Call"}}),{c(){e=w("div"),n=w("div"),n.textContent=r,s=$(),o=w("div"),i=w("div"),_&&_.c(),c=$(),a=w("div"),a.innerHTML=u,l=$(),f=w("div"),T&&T.c(),I=$(),W(b.$$.fragment),S=$(),d=w("div"),d.innerHTML=D,this.h()},l(M){e=y(M,"DIV",{style:!0});var v=k(e);n=y(v,"DIV",{class:!0,"data-svelte-h":!0}),x(n)!=="svelte-dyb2yo"&&(n.textContent=r),s=O(v),o=y(v,"DIV",{class:!0});var A=k(o);i=y(A,"DIV",{class:!0});var F=k(i);_&&_.l(F),c=O(F),a=y(F,"DIV",{class:!0,"data-svelte-h":!0}),x(a)!=="svelte-1sx5tfn"&&(a.innerHTML=u),F.forEach(g),l=O(A),f=y(A,"DIV",{class:!0});var V=k(f);T&&T.l(V),I=O(V),G(b.$$.fragment,V),V.forEach(g),S=O(A),d=y(A,"DIV",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-1866ndo"&&(d.innerHTML=D),A.forEach(g),v.forEach(g),this.h()},h(){h(n,"class","navy-title svelte-1qyvrcm"),h(a,"class","text-container svelte-1qyvrcm"),h(i,"class","first-row svelte-1qyvrcm"),h(f,"class","row-images svelte-1qyvrcm"),h(d,"class","show-call-button svelte-1qyvrcm"),h(o,"class","neumorphic-card svelte-1qyvrcm"),j(e,"margin-top","90px")},m(M,v){R(M,e,v),p(e,n),p(e,s),p(e,o),p(o,i),_&&_.m(i,null),p(i,c),p(i,a),p(o,l),p(o,f),T&&T.m(f,null),p(f,I),J(b,f,null),p(o,S),p(o,d),q=!0},p(M,[v]){M[0].length>=1?_?(_.p(M,v),v&1&&C(_,1)):(_=_n(M),_.c(),C(_,1),_.m(i,c)):_&&(Ce(),L(_,1,1,()=>{_=null}),Se()),M[0].length>1?T?(T.p(M,v),v&1&&C(T,1)):(T=wn(M),T.c(),C(T,1),T.m(f,I)):T&&(Ce(),L(T,1,1,()=>{T=null}),Se())},i(M){q||(C(_),C(T),C(b.$$.fragment,M),q=!0)},o(M){L(_),L(T),L(b.$$.fragment,M),q=!1},d(M){M&&g(e),_&&_.d(),T&&T.d(),Y(b)}}}function Yr(t,e,n){let{data:r=[]}=e,s=0;return setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),t.$$set=o=>{"data"in o&&n(0,r=o.data)},[r,s]}class Zr extends ze{constructor(e){super(),xe(this,e,Yr,Jr,Fe,{data:0})}}var En={};/**
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
 */const Jn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Xr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],c=t[n++],a=((s&7)<<18|(o&63)<<12|(i&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},Yn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,c=i?t[s+1]:0,a=s+2<t.length,u=a?t[s+2]:0,l=o>>2,f=(o&3)<<4|c>>4;let I=(c&15)<<2|u>>6,b=u&63;a||(b=64,i||(I=64)),r.push(n[l],n[f],n[I],n[b])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Jn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Xr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||u==null||f==null)throw new Qr;const I=o<<2|c>>4;if(r.push(I),u!==64){const b=c<<4&240|u>>2;if(r.push(b),f!==64){const S=u<<6&192|f;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Qr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const es=function(t){const e=Jn(t);return Yn.encodeByteArray(e,!0)},Zn=function(t){return es(t).replace(/\./g,"")},ts=function(t){try{return Yn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ns(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const rs=()=>ns().__FIREBASE_DEFAULTS__,ss=()=>{if(typeof process>"u"||typeof En>"u")return;const t=En.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},os=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ts(t[1]);return e&&JSON.parse(e)},is=()=>{try{return rs()||ss()||os()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Xn=()=>{var t;return(t=is())===null||t===void 0?void 0:t.config};/**
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
 */class as{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Qn(){try{return typeof indexedDB=="object"}catch{return!1}}function er(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function cs(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ls="FirebaseError";class Re extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ls,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,et.prototype.create)}}class et{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?us(o,r):"Error",c=`${this.serviceName}: ${i} (${s}).`;return new Re(s,c,r)}}function us(t,e){return t.replace(fs,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fs=/\{\$([^}]+)}/g;function It(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Dn(o)&&Dn(i)){if(!It(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dn(t){return t!==null&&typeof t=="object"}/**
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
 */function Lt(t){return t&&t._delegate?t._delegate:t}class we{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const De="[DEFAULT]";/**
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
 */class ds{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new as;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ps(e))try{this.getOrInitializeService({instanceIdentifier:De})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=De){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=De){return this.instances.has(e)}getOptions(e=De){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:hs(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=De){return this.component?this.component.multipleInstances?e:De:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function hs(t){return t===De?void 0:t}function ps(t){return t.instantiationMode==="EAGER"}/**
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
 */class gs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ds(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const ms={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},bs=H.INFO,vs={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},_s=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vs[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ws{constructor(e){this.name=e,this._logLevel=bs,this._logHandler=_s,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ms[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const ys=(t,e)=>e.some(n=>t instanceof n);let kn,Cn;function Is(){return kn||(kn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Es(){return Cn||(Cn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const tr=new WeakMap,Et=new WeakMap,nr=new WeakMap,ct=new WeakMap,Pt=new WeakMap;function Ds(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(de(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&tr.set(n,t)}).catch(()=>{}),Pt.set(e,t),e}function ks(t){if(Et.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Et.set(t,e)}let Dt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Et.get(t);if(e==="objectStoreNames")return t.objectStoreNames||nr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return de(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Cs(t){Dt=t(Dt)}function Ss(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(lt(this),e,...n);return nr.set(r,e.sort?e.sort():[e]),de(r)}:Es().includes(t)?function(...e){return t.apply(lt(this),e),de(tr.get(this))}:function(...e){return de(t.apply(lt(this),e))}}function Ts(t){return typeof t=="function"?Ss(t):(t instanceof IDBTransaction&&ks(t),ys(t,Is())?new Proxy(t,Dt):t)}function de(t){if(t instanceof IDBRequest)return Ds(t);if(ct.has(t))return ct.get(t);const e=Ts(t);return e!==t&&(ct.set(t,e),Pt.set(e,t)),e}const lt=t=>Pt.get(t);function Rt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),c=de(i);return r&&i.addEventListener("upgradeneeded",a=>{r(de(i.result),a.oldVersion,a.newVersion,de(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{o&&a.addEventListener("close",()=>o()),s&&a.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function ut(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),de(n).then(()=>{})}const As=["get","getKey","getAll","getAllKeys","count"],$s=["put","add","delete","clear"],ft=new Map;function Sn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ft.get(e))return ft.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$s.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||As.includes(n)))return;const o=async function(i,...c){const a=this.transaction(i,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return ft.set(e,o),o}Cs(t=>({...t,get:(e,n,r)=>Sn(e,n)||t.get(e,n,r),has:(e,n)=>!!Sn(e,n)||t.has(e,n)}));/**
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
 */class Os{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Bs(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Bs(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const kt="@firebase/app",Tn="0.9.25";/**
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
 */const Te=new ws("@firebase/app"),Ms="@firebase/app-compat",Ns="@firebase/analytics-compat",Ls="@firebase/analytics",Ps="@firebase/app-check-compat",Rs="@firebase/app-check",Hs="@firebase/auth",Vs="@firebase/auth-compat",js="@firebase/database",Fs="@firebase/database-compat",zs="@firebase/functions",xs="@firebase/functions-compat",qs="@firebase/installations",Ks="@firebase/installations-compat",Us="@firebase/messaging",Ws="@firebase/messaging-compat",Gs="@firebase/performance",Js="@firebase/performance-compat",Ys="@firebase/remote-config",Zs="@firebase/remote-config-compat",Xs="@firebase/storage",Qs="@firebase/storage-compat",eo="@firebase/firestore",to="@firebase/firestore-compat",no="firebase";/**
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
 */const Ct="[DEFAULT]",ro={[kt]:"fire-core",[Ms]:"fire-core-compat",[Ls]:"fire-analytics",[Ns]:"fire-analytics-compat",[Rs]:"fire-app-check",[Ps]:"fire-app-check-compat",[Hs]:"fire-auth",[Vs]:"fire-auth-compat",[js]:"fire-rtdb",[Fs]:"fire-rtdb-compat",[zs]:"fire-fn",[xs]:"fire-fn-compat",[qs]:"fire-iid",[Ks]:"fire-iid-compat",[Us]:"fire-fcm",[Ws]:"fire-fcm-compat",[Gs]:"fire-perf",[Js]:"fire-perf-compat",[Ys]:"fire-rc",[Zs]:"fire-rc-compat",[Xs]:"fire-gcs",[Qs]:"fire-gcs-compat",[eo]:"fire-fst",[to]:"fire-fst-compat","fire-js":"fire-js",[no]:"fire-js-all"};/**
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
 */const Xe=new Map,St=new Map;function so(t,e){try{t.container.addComponent(e)}catch(n){Te.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ae(t){const e=t.name;if(St.has(e))return Te.debug(`There were multiple attempts to register component ${e}.`),!1;St.set(e,t);for(const n of Xe.values())so(n,t);return!0}function Ht(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const oo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},be=new et("app","Firebase",oo);/**
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
 */class io{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new we("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw be.create("app-deleted",{appName:this._name})}}function rr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ct,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw be.create("bad-app-name",{appName:String(s)});if(n||(n=Xn()),!n)throw be.create("no-options");const o=Xe.get(s);if(o){if(It(n,o.options)&&It(r,o.config))return o;throw be.create("duplicate-app",{appName:s})}const i=new gs(s);for(const a of St.values())i.addComponent(a);const c=new io(n,r,i);return Xe.set(s,c),c}function ao(t=Ct){const e=Xe.get(t);if(!e&&t===Ct&&Xn())return rr();if(!e)throw be.create("no-app",{appName:t});return e}function ve(t,e,n){var r;let s=(r=ro[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Te.warn(c.join(" "));return}Ae(new we(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const co="firebase-heartbeat-database",lo=1,Ve="firebase-heartbeat-store";let dt=null;function sr(){return dt||(dt=Rt(co,lo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ve)}}}).catch(t=>{throw be.create("idb-open",{originalErrorMessage:t.message})})),dt}async function uo(t){try{return await(await sr()).transaction(Ve).objectStore(Ve).get(or(t))}catch(e){if(e instanceof Re)Te.warn(e.message);else{const n=be.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Te.warn(n.message)}}}async function An(t,e){try{const r=(await sr()).transaction(Ve,"readwrite");await r.objectStore(Ve).put(e,or(t)),await r.done}catch(n){if(n instanceof Re)Te.warn(n.message);else{const r=be.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Te.warn(r.message)}}}function or(t){return`${t.name}!${t.options.appId}`}/**
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
 */const fo=1024,ho=30*24*60*60*1e3;class po{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new mo(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=$n();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=ho}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$n(),{heartbeatsToSend:r,unsentEntries:s}=go(this._heartbeatsCache.heartbeats),o=Zn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function $n(){return new Date().toISOString().substring(0,10)}function go(t,e=fo){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),On(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),On(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class mo{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qn()?er().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uo(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return An(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return An(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function On(t){return Zn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function bo(t){Ae(new we("platform-logger",e=>new Os(e),"PRIVATE")),Ae(new we("heartbeat",e=>new po(e),"PRIVATE")),ve(kt,Tn,t),ve(kt,Tn,"esm2017"),ve("fire-js","")}bo("");var vo="firebase",_o="10.7.1";/**
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
 */ve(vo,_o,"app");const wo=(t,e)=>e.some(n=>t instanceof n);let Bn,Mn;function yo(){return Bn||(Bn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Io(){return Mn||(Mn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ir=new WeakMap,Tt=new WeakMap,ar=new WeakMap,ht=new WeakMap,Vt=new WeakMap;function Eo(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(_e(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&ir.set(n,t)}).catch(()=>{}),Vt.set(e,t),e}function Do(t){if(Tt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Tt.set(t,e)}let At={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Tt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ar.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _e(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ko(t){At=t(At)}function Co(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(pt(this),e,...n);return ar.set(r,e.sort?e.sort():[e]),_e(r)}:Io().includes(t)?function(...e){return t.apply(pt(this),e),_e(ir.get(this))}:function(...e){return _e(t.apply(pt(this),e))}}function So(t){return typeof t=="function"?Co(t):(t instanceof IDBTransaction&&Do(t),wo(t,yo())?new Proxy(t,At):t)}function _e(t){if(t instanceof IDBRequest)return Eo(t);if(ht.has(t))return ht.get(t);const e=So(t);return e!==t&&(ht.set(t,e),Vt.set(e,t)),e}const pt=t=>Vt.get(t);function To(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),c=_e(i);return r&&i.addEventListener("upgradeneeded",a=>{r(_e(i.result),a.oldVersion,a.newVersion,_e(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),c.then(a=>{o&&a.addEventListener("close",()=>o()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Ao=["get","getKey","getAll","getAllKeys","count"],$o=["put","add","delete","clear"],gt=new Map;function Nn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(gt.get(e))return gt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$o.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ao.includes(n)))return;const o=async function(i,...c){const a=this.transaction(i,s?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&a.done]))[0]};return gt.set(e,o),o}ko(t=>({...t,get:(e,n,r)=>Nn(e,n)||t.get(e,n,r),has:(e,n)=>!!Nn(e,n)||t.has(e,n)}));const cr="@firebase/installations",jt="0.6.4";/**
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
 */const lr=1e4,ur=`w:${jt}`,fr="FIS_v2",Oo="https://firebaseinstallations.googleapis.com/v1",Bo=60*60*1e3,Mo="installations",No="Installations";/**
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
 */const Lo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$e=new et(Mo,No,Lo);function dr(t){return t instanceof Re&&t.code.includes("request-failed")}/**
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
 */function hr({projectId:t}){return`${Oo}/projects/${t}/installations`}function pr(t){return{token:t.token,requestStatus:2,expiresIn:Ro(t.expiresIn),creationTime:Date.now()}}async function gr(t,e){const r=(await e.json()).error;return $e.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function mr({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Po(t,{refreshToken:e}){const n=mr(t);return n.append("Authorization",Ho(e)),n}async function br(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ro(t){return Number(t.replace("s","000"))}function Ho(t){return`${fr} ${t}`}/**
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
 */async function Vo({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=hr(t),s=mr(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={fid:n,authVersion:fr,appId:t.appId,sdkVersion:ur},c={method:"POST",headers:s,body:JSON.stringify(i)},a=await br(()=>fetch(r,c));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:pr(u.authToken)}}else throw await gr("Create Installation",a)}/**
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
 */function vr(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function jo(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Fo=/^[cdef][\w-]{21}$/,$t="";function zo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=xo(t);return Fo.test(n)?n:$t}catch{return $t}}function xo(t){return jo(t).substr(0,22)}/**
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
 */function tt(t){return`${t.appName}!${t.appId}`}/**
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
 */const _r=new Map;function wr(t,e){const n=tt(t);yr(n,e),qo(n,e)}function yr(t,e){const n=_r.get(t);if(n)for(const r of n)r(e)}function qo(t,e){const n=Ko();n&&n.postMessage({key:t,fid:e}),Uo()}let ke=null;function Ko(){return!ke&&"BroadcastChannel"in self&&(ke=new BroadcastChannel("[Firebase] FID Change"),ke.onmessage=t=>{yr(t.data.key,t.data.fid)}),ke}function Uo(){_r.size===0&&ke&&(ke.close(),ke=null)}/**
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
 */const Wo="firebase-installations-database",Go=1,Oe="firebase-installations-store";let mt=null;function Ft(){return mt||(mt=To(Wo,Go,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Oe)}}})),mt}async function Qe(t,e){const n=tt(t),s=(await Ft()).transaction(Oe,"readwrite"),o=s.objectStore(Oe),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&wr(t,e.fid),e}async function Ir(t){const e=tt(t),r=(await Ft()).transaction(Oe,"readwrite");await r.objectStore(Oe).delete(e),await r.done}async function nt(t,e){const n=tt(t),s=(await Ft()).transaction(Oe,"readwrite"),o=s.objectStore(Oe),i=await o.get(n),c=e(i);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!i||i.fid!==c.fid)&&wr(t,c.fid),c}/**
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
 */async function zt(t){let e;const n=await nt(t.appConfig,r=>{const s=Jo(r),o=Yo(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===$t?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Jo(t){const e=t||{fid:zo(),registrationStatus:0};return Er(e)}function Yo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject($e.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Zo(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Xo(t)}:{installationEntry:e}}async function Zo(t,e){try{const n=await Vo(t,e);return Qe(t.appConfig,n)}catch(n){throw dr(n)&&n.customData.serverCode===409?await Ir(t.appConfig):await Qe(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Xo(t){let e=await Ln(t.appConfig);for(;e.registrationStatus===1;)await vr(100),e=await Ln(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await zt(t);return r||n}return e}function Ln(t){return nt(t,e=>{if(!e)throw $e.create("installation-not-found");return Er(e)})}function Er(t){return Qo(t)?{fid:t.fid,registrationStatus:0}:t}function Qo(t){return t.registrationStatus===1&&t.registrationTime+lr<Date.now()}/**
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
 */async function ei({appConfig:t,heartbeatServiceProvider:e},n){const r=ti(t,n),s=Po(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={installation:{sdkVersion:ur,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(i)},a=await br(()=>fetch(r,c));if(a.ok){const u=await a.json();return pr(u)}else throw await gr("Generate Auth Token",a)}function ti(t,{fid:e}){return`${hr(t)}/${e}/authTokens:generate`}/**
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
 */async function xt(t,e=!1){let n;const r=await nt(t.appConfig,o=>{if(!Dr(o))throw $e.create("not-registered");const i=o.authToken;if(!e&&si(i))return o;if(i.requestStatus===1)return n=ni(t,e),o;{if(!navigator.onLine)throw $e.create("app-offline");const c=ii(o);return n=ri(t,c),c}});return n?await n:r.authToken}async function ni(t,e){let n=await Pn(t.appConfig);for(;n.authToken.requestStatus===1;)await vr(100),n=await Pn(t.appConfig);const r=n.authToken;return r.requestStatus===0?xt(t,e):r}function Pn(t){return nt(t,e=>{if(!Dr(e))throw $e.create("not-registered");const n=e.authToken;return ai(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ri(t,e){try{const n=await ei(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Qe(t.appConfig,r),n}catch(n){if(dr(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ir(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Qe(t.appConfig,r)}throw n}}function Dr(t){return t!==void 0&&t.registrationStatus===2}function si(t){return t.requestStatus===2&&!oi(t)}function oi(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Bo}function ii(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ai(t){return t.requestStatus===1&&t.requestTime+lr<Date.now()}/**
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
 */async function ci(t){const e=t,{installationEntry:n,registrationPromise:r}=await zt(e);return r?r.catch(console.error):xt(e).catch(console.error),n.fid}/**
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
 */async function li(t,e=!1){const n=t;return await ui(n),(await xt(n,e)).token}async function ui(t){const{registrationPromise:e}=await zt(t);e&&await e}/**
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
 */function fi(t){if(!t||!t.options)throw bt("App Configuration");if(!t.name)throw bt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw bt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function bt(t){return $e.create("missing-app-config-values",{valueName:t})}/**
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
 */const kr="installations",di="installations-internal",hi=t=>{const e=t.getProvider("app").getImmediate(),n=fi(e),r=Ht(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pi=t=>{const e=t.getProvider("app").getImmediate(),n=Ht(e,kr).getImmediate();return{getId:()=>ci(n),getToken:s=>li(n,s)}};function gi(){Ae(new we(kr,hi,"PUBLIC")),Ae(new we(di,pi,"PRIVATE"))}gi();ve(cr,jt);ve(cr,jt,"esm2017");/**
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
 */const mi="/firebase-messaging-sw.js",bi="/firebase-cloud-messaging-push-scope",Cr="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",vi="https://fcmregistrations.googleapis.com/v1",Sr="google.c.a.c_id",_i="google.c.a.c_l",wi="google.c.a.ts",yi="google.c.a.e";var Rn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Rn||(Rn={}));/**
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
 */var je;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(je||(je={}));/**
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
 */function fe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ii(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const vt="fcm_token_details_db",Ei=5,Hn="fcm_token_object_Store";async function Di(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(vt))return null;let e=null;return(await Rt(vt,Ei,{upgrade:async(r,s,o,i)=>{var c;if(s<2||!r.objectStoreNames.contains(Hn))return;const a=i.objectStore(Hn),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(s===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:fe(l.vapidKey)}}}else if(s===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:fe(l.auth),p256dh:fe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:fe(l.vapidKey)}}}else if(s===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:fe(l.auth),p256dh:fe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:fe(l.vapidKey)}}}}}})).close(),await ut(vt),await ut("fcm_vapid_details_db"),await ut("undefined"),ki(e)?e:null}function ki(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Ci="firebase-messaging-database",Si=1,Be="firebase-messaging-store";let _t=null;function qt(){return _t||(_t=Rt(Ci,Si,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Be)}}})),_t}async function Tr(t){const e=Ut(t),r=await(await qt()).transaction(Be).objectStore(Be).get(e);if(r)return r;{const s=await Di(t.appConfig.senderId);if(s)return await Kt(t,s),s}}async function Kt(t,e){const n=Ut(t),s=(await qt()).transaction(Be,"readwrite");return await s.objectStore(Be).put(e,n),await s.done,e}async function Ti(t){const e=Ut(t),r=(await qt()).transaction(Be,"readwrite");await r.objectStore(Be).delete(e),await r.done}function Ut({appConfig:t}){return t.appId}/**
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
 */const Ai={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},K=new et("messaging","Messaging",Ai);/**
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
 */async function $i(t,e){const n=await Gt(t),r=$r(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Wt(t.appConfig),s)).json()}catch(i){throw K.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw K.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw K.create("token-subscribe-no-token");return o.token}async function Oi(t,e){const n=await Gt(t),r=$r(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Wt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw K.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw K.create("token-update-failed",{errorInfo:i})}if(!o.token)throw K.create("token-update-no-token");return o.token}async function Ar(t,e){const r={method:"DELETE",headers:await Gt(t)};try{const o=await(await fetch(`${Wt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw K.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw K.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Wt({projectId:t}){return`${vi}/projects/${t}/registrations`}async function Gt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function $r({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Cr&&(s.web.applicationPubKey=r),s}/**
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
 */const Bi=7*24*60*60*1e3;async function Mi(t){const e=await Pi(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:fe(e.getKey("auth")),p256dh:fe(e.getKey("p256dh"))},r=await Tr(t.firebaseDependencies);if(r){if(Ri(r.subscriptionOptions,n))return Date.now()>=r.createTime+Bi?Li(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ar(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Vn(t.firebaseDependencies,n)}else return Vn(t.firebaseDependencies,n)}async function Ni(t){const e=await Tr(t.firebaseDependencies);e&&(await Ar(t.firebaseDependencies,e.token),await Ti(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Li(t,e){try{const n=await Oi(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Kt(t.firebaseDependencies,r),n}catch(n){throw await Ni(t),n}}async function Vn(t,e){const r={token:await $i(t,e),createTime:Date.now(),subscriptionOptions:e};return await Kt(t,r),r.token}async function Pi(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ii(e)})}function Ri(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function jn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Hi(e,t),Vi(e,t),ji(e,t),e}function Hi(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function Vi(t,e){e.data&&(t.data=e.data)}function ji(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;c&&(t.fcmOptions.link=c);const a=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(t.fcmOptions.analyticsLabel=a)}/**
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
 */function Fi(t){return typeof t=="object"&&!!t&&Sr in t}/**
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
 */Or("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Or("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Or(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function zi(t){if(!t||!t.options)throw wt("App Configuration Object");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw wt(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function wt(t){return K.create("missing-app-config-values",{valueName:t})}/**
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
 */class xi{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=zi(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function qi(t){try{t.swRegistration=await navigator.serviceWorker.register(mi,{scope:bi}),t.swRegistration.update().catch(()=>{})}catch(e){throw K.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Ki(t,e){if(!e&&!t.swRegistration&&await qi(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw K.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Ui(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Cr)}/**
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
 */async function Br(t,e){if(!navigator)throw K.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw K.create("permission-blocked");return await Ui(t,e==null?void 0:e.vapidKey),await Ki(t,e==null?void 0:e.serviceWorkerRegistration),Mi(t)}/**
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
 */async function Wi(t,e,n){const r=Gi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Sr],message_name:n[_i],message_time:n[wi],message_device_time:Math.floor(Date.now()/1e3)})}function Gi(t){switch(t){case je.NOTIFICATION_CLICKED:return"notification_open";case je.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Ji(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===je.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(jn(n)):t.onMessageHandler.next(jn(n)));const r=n.data;Fi(r)&&r[yi]==="1"&&await Wi(t,n.messageType,r)}const Fn="@firebase/messaging",zn="0.12.5";/**
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
 */const Yi=t=>{const e=new xi(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ji(e,n)),e},Zi=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Br(e,r)}};function Xi(){Ae(new we("messaging",Yi,"PUBLIC")),Ae(new we("messaging-internal",Zi,"PRIVATE")),ve(Fn,zn),ve(Fn,zn,"esm2017")}/**
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
 */async function Qi(){try{await er()}catch{return!1}return typeof window<"u"&&Qn()&&cs()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ea(t,e){if(!navigator)throw K.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function ta(t=ao()){return Qi().then(e=>{if(!e)throw K.create("unsupported-browser")},e=>{throw K.create("indexed-db-unsupported")}),Ht(Lt(t),"messaging").getImmediate()}async function na(t,e){return t=Lt(t),Br(t,e)}function ra(t,e){return t=Lt(t),ea(t,e)}Xi();function xn(t){let e,n,r,s="×",o,i,c,a,u,l;return c=new Rr({props:{func:t[13]}}),{c(){e=w("div"),n=w("div"),r=w("button"),r.textContent=s,o=$(),i=w("div"),W(c.$$.fragment),this.h()},l(f){e=y(f,"DIV",{class:!0});var I=k(e);n=y(I,"DIV",{class:!0});var b=k(n);r=y(b,"BUTTON",{class:!0,"data-svelte-h":!0}),x(r)!=="svelte-1vf4byn"&&(r.textContent=s),o=O(b),i=y(b,"DIV",{class:!0});var S=k(i);G(c.$$.fragment,S),S.forEach(g),b.forEach(g),I.forEach(g),this.h()},h(){h(r,"class","close-button svelte-z94g8o"),h(i,"class","content svelte-z94g8o"),h(n,"class","dialog-box svelte-z94g8o"),h(e,"class","overlay svelte-z94g8o")},m(f,I){R(f,e,I),p(e,n),p(n,r),p(n,o),p(n,i),J(c,i,null),a=!0,u||(l=[Q(r,"click",t[12]),Q(n,"click",fa),Q(e,"click",t[12])],u=!0)},p(f,I){const b={};I[0]&2&&(b.func=f[13]),c.$set(b)},i(f){a||(C(c.$$.fragment,f),a=!0)},o(f){L(c.$$.fragment,f),a=!1},d(f){f&&g(e),Y(c),u=!1,Kn(l)}}}function sa(t){let e,n;return e=new Vr({}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p:He,i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function oa(t){let e,n;return e=new Hr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[25]}}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s[0]&8&&(o.ID=r[3].id),s[0]&4&&(o.c=!r[2]),s[0]&8&&(o.description=r[3].text?r[3].text:""),s[0]&8&&(o.title=r[3].title),s[0]&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function ia(t){let e,n;return e=new Gn({props:{f:!0,cardsData:[...t[5]]}}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s[0]&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function aa(t){let e,n;return e=new Gn({props:{f:!1,cardsData:[...t[4]]}}),{c(){W(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s[0]&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(C(e.$$.fragment,r),n=!0)},o(r){L(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function ca(t){let e,n="Fellowships",r,s,o,i,c="Courses",a,u,l,f,I,b,S;return s=new hn({props:{f:!0,onClick:t[23],cardsData:[...t[5]]}}),u=new hn({props:{f:!1,onClick:t[24],cardsData:[...t[4]]}}),f=new Kr({props:{blogs:t[7]}}),b=new Zr({props:{data:t[6]}}),{c(){e=w("div"),e.textContent=n,r=$(),W(s.$$.fragment),o=$(),i=w("div"),i.textContent=c,a=$(),W(u.$$.fragment),l=$(),W(f.$$.fragment),I=$(),W(b.$$.fragment),this.h()},l(d){e=y(d,"DIV",{class:!0,"data-svelte-h":!0}),x(e)!=="svelte-9rjion"&&(e.textContent=n),r=O(d),G(s.$$.fragment,d),o=O(d),i=y(d,"DIV",{class:!0,"data-svelte-h":!0}),x(i)!=="svelte-4wj5r"&&(i.textContent=c),a=O(d),G(u.$$.fragment,d),l=O(d),G(f.$$.fragment,d),I=O(d),G(b.$$.fragment,d),this.h()},h(){h(e,"class","title"),h(i,"class","title")},m(d,D){R(d,e,D),R(d,r,D),J(s,d,D),R(d,o,D),R(d,i,D),R(d,a,D),J(u,d,D),R(d,l,D),J(f,d,D),R(d,I,D),J(b,d,D),S=!0},p(d,D){const q={};D[0]&32&&(q.cardsData=[...d[5]]),s.$set(q);const _={};D[0]&16&&(_.cardsData=[...d[4]]),u.$set(_);const T={};D[0]&128&&(T.blogs=d[7]),f.$set(T);const M={};D[0]&64&&(M.data=d[6]),b.$set(M)},i(d){S||(C(s.$$.fragment,d),C(u.$$.fragment,d),C(f.$$.fragment,d),C(b.$$.fragment,d),S=!0)},o(d){L(s.$$.fragment,d),L(u.$$.fragment,d),L(f.$$.fragment,d),L(b.$$.fragment,d),S=!1},d(d){d&&(g(e),g(r),g(o),g(i),g(a),g(l),g(I)),Y(s,d),Y(u,d),Y(f,d),Y(b,d)}}}function la(t){let e,n,r,s,o='<img src="Logo.png" width="80px" style="display: relative; top:20px;"/>',i,c,a,u,l="Courses",f,I,b="Fellowships",S,d,D="products",q,_,T="Contact us",M,v,A="Login",F,V,ce,te,Z,U,le,rt="Courses",qe,ue,st="Fellowships",Ke,m,B="Contact us",ee,ne,re,P,X,ae,Jt="About us",ot,he,Ue,We,pe,se,oe,Ge,ie,Me,ye,it,Ie,Yt='<a href="#" class="social-icon svelte-z94g8o">Facebook</a> <a href="#" class="social-icon svelte-z94g8o">Twitter</a> <a href="#" class="social-icon svelte-z94g8o">Instagram</a> <a href="#" class="social-icon svelte-z94g8o">YouTube</a> <a href="#" class="social-icon svelte-z94g8o">LinkedIn</a>',Ee,at,Zt,z=t[9]&&xn(t);const Xt=[ca,aa,ia,oa,sa],ge=[];function Qt(E,N){return E[1]==0?0:E[1]==1?1:E[1]==2?2:E[1]==3?3:4}return se=Qt(t),oe=ge[se]=Xt[se](t),ye=new Pr({}),{c(){z&&z.c(),e=$(),n=w("header"),r=w("div"),s=w("h1"),s.innerHTML=o,i=$(),c=w("nav"),a=w("ul"),u=w("li"),u.textContent=l,f=$(),I=w("li"),I.textContent=b,S=$(),d=w("li"),d.textContent=D,q=$(),_=w("li"),_.textContent=T,M=$(),v=w("div"),v.textContent=A,F=$(),V=ln("svg"),ce=ln("path"),te=$(),Z=w("div"),U=w("ul"),le=w("li"),le.textContent=rt,qe=$(),ue=w("li"),ue.textContent=st,Ke=$(),m=w("li"),m.textContent=B,ne=$(),re=w("div"),P=w("div"),X=w("div"),ae=w("p"),ae.textContent=Jt,ot=$(),he=w("p"),Ue=Bt(t[0]),We=$(),pe=w("div"),oe.c(),Ge=$(),ie=w("div"),Me=w("div"),W(ye.$$.fragment),it=$(),Ie=w("div"),Ie.innerHTML=Yt,this.h()},l(E){z&&z.l(E),e=O(E),n=y(E,"HEADER",{id:!0,class:!0});var N=k(n);r=y(N,"DIV",{style:!0});var Ne=k(r);s=y(Ne,"H1",{"data-svelte-h":!0}),x(s)!=="svelte-16z141n"&&(s.innerHTML=o),Ne.forEach(g),i=O(N),c=y(N,"NAV",{class:!0});var en=k(c);a=y(en,"UL",{class:!0});var me=k(a);u=y(me,"LI",{class:!0,"data-svelte-h":!0}),x(u)!=="svelte-1qsl060"&&(u.textContent=l),f=O(me),I=y(me,"LI",{class:!0,"data-svelte-h":!0}),x(I)!=="svelte-1my9ef0"&&(I.textContent=b),S=O(me),d=y(me,"LI",{class:!0,"data-svelte-h":!0}),x(d)!=="svelte-a5qvis"&&(d.textContent=D),q=O(me),_=y(me,"LI",{class:!0,"data-svelte-h":!0}),x(_)!=="svelte-12veshn"&&(_.textContent=T),me.forEach(g),en.forEach(g),M=O(N),v=y(N,"DIV",{class:!0,id:!0,text:!0,style:!0,"data-svelte-h":!0}),x(v)!=="svelte-4s12t"&&(v.textContent=A),F=O(N),V=un(N,"svg",{id:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,class:!0,viewBox:!0});var tn=k(V);ce=un(tn,"path",{d:!0}),k(ce).forEach(g),tn.forEach(g),N.forEach(g),te=O(E),Z=y(E,"DIV",{class:!0,id:!0,style:!0});var nn=k(Z);U=y(nn,"UL",{class:!0});var Le=k(U);le=y(Le,"LI",{class:!0,"data-svelte-h":!0}),x(le)!=="svelte-15gd3eg"&&(le.textContent=rt),qe=O(Le),ue=y(Le,"LI",{class:!0,"data-svelte-h":!0}),x(ue)!=="svelte-1w3oh8g"&&(ue.textContent=st),Ke=O(Le),m=y(Le,"LI",{class:!0,"data-svelte-h":!0}),x(m)!=="svelte-1pessln"&&(m.textContent=B),Le.forEach(g),nn.forEach(g),ne=O(E),re=y(E,"DIV",{class:!0});var rn=k(re);P=y(rn,"DIV",{class:!0});var sn=k(P);X=y(sn,"DIV",{class:!0});var Je=k(X);ae=y(Je,"P",{style:!0,"data-svelte-h":!0}),x(ae)!=="svelte-1mkz37p"&&(ae.textContent=Jt),ot=O(Je),he=y(Je,"P",{style:!0});var on=k(he);Ue=Mt(on,t[0]),on.forEach(g),Je.forEach(g),sn.forEach(g),rn.forEach(g),We=O(E),pe=y(E,"DIV",{class:!0});var an=k(pe);oe.l(an),an.forEach(g),Ge=O(E),ie=y(E,"DIV",{class:!0,style:!0});var Ye=k(ie);Me=y(Ye,"DIV",{class:!0});var cn=k(Me);G(ye.$$.fragment,cn),cn.forEach(g),it=O(Ye),Ie=y(Ye,"DIV",{class:!0,"data-svelte-h":!0}),x(Ie)!=="svelte-112zi31"&&(Ie.innerHTML=Yt),Ye.forEach(g),this.h()},h(){j(r,"position","absolute"),j(r,"top","-15px"),j(r,"left","15px"),h(u,"class","svelte-z94g8o"),h(I,"class","svelte-z94g8o"),h(d,"class","svelte-z94g8o"),h(_,"class","svelte-z94g8o"),h(a,"class","header-list svelte-z94g8o"),h(c,"class","svelte-z94g8o"),h(v,"class","button svelte-z94g8o"),h(v,"id","loginbtn"),h(v,"text","Login"),j(v,"position","absolute"),j(v,"right","30px"),j(v,"top","20"),h(ce,"d","M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"),h(V,"id","menuio"),h(V,"xmlns","http://www.w3.org/2000/svg"),h(V,"x","0px"),h(V,"y","0px"),h(V,"width","50"),h(V,"height","50"),h(V,"class","menu svelte-z94g8o"),h(V,"viewBox","0 0 50 50"),h(n,"id","header"),h(n,"class","svelte-z94g8o"),h(le,"class","svelte-z94g8o"),h(ue,"class","svelte-z94g8o"),h(m,"class","svelte-z94g8o"),h(U,"class","svelte-z94g8o"),h(Z,"class","side-menu svelte-z94g8o"),h(Z,"id","menuu"),h(Z,"style",ee=`display: ${t[10]?"block":"none"};`),j(ae,"position","relative"),j(ae,"right","70px"),j(he,"font-weight","300"),j(he,"text-align","left"),j(he,"font-size","20px"),h(X,"class","image-text svelte-z94g8o"),h(P,"class","image-overlay svelte-z94g8o"),h(re,"class","header-image svelte-z94g8o"),h(pe,"class","scroll-box svelte-z94g8o"),h(Me,"class","map-box svelte-z94g8o"),h(Ie,"class","social-media-box svelte-z94g8o"),h(ie,"class","footer-container svelte-z94g8o"),j(ie,"top",t[8]+690+"px")},m(E,N){z&&z.m(E,N),R(E,e,N),R(E,n,N),p(n,r),p(r,s),p(n,i),p(n,c),p(c,a),p(a,u),p(a,f),p(a,I),p(a,S),p(a,d),p(a,q),p(a,_),p(n,M),p(n,v),p(n,F),p(n,V),p(V,ce),R(E,te,N),R(E,Z,N),p(Z,U),p(U,le),p(U,qe),p(U,ue),p(U,Ke),p(U,m),R(E,ne,N),R(E,re,N),p(re,P),p(P,X),p(X,ae),p(X,ot),p(X,he),p(he,Ue),R(E,We,N),R(E,pe,N),ge[se].m(pe,null),R(E,Ge,N),R(E,ie,N),p(ie,Me),J(ye,Me,null),p(ie,it),p(ie,Ie),Ee=!0,at||(Zt=[Q(s,"click",t[14]),Q(u,"click",t[15]),Q(I,"click",t[16]),Q(d,"click",t[17]),Q(_,"click",t[18]),Q(v,"click",t[11]),Q(V,"click",t[19]),Q(le,"click",t[20]),Q(ue,"click",t[21]),Q(m,"click",t[22])],at=!0)},p(E,N){E[9]?z?(z.p(E,N),N[0]&512&&C(z,1)):(z=xn(E),z.c(),C(z,1),z.m(e.parentNode,e)):z&&(Ce(),L(z,1,1,()=>{z=null}),Se()),(!Ee||N[0]&1024&&ee!==(ee=`display: ${E[10]?"block":"none"};`))&&h(Z,"style",ee),(!Ee||N[0]&1)&&Nt(Ue,E[0]);let Ne=se;se=Qt(E),se===Ne?ge[se].p(E,N):(Ce(),L(ge[Ne],1,1,()=>{ge[Ne]=null}),Se(),oe=ge[se],oe?oe.p(E,N):(oe=ge[se]=Xt[se](E),oe.c()),C(oe,1),oe.m(pe,null)),(!Ee||N[0]&256)&&j(ie,"top",E[8]+690+"px")},i(E){Ee||(C(z),C(oe),C(ye.$$.fragment,E),Ee=!0)},o(E){L(z),L(oe),L(ye.$$.fragment,E),Ee=!1},d(E){E&&(g(e),g(n),g(te),g(Z),g(ne),g(re),g(We),g(pe),g(Ge),g(ie)),z&&z.d(E),ge[se].d(),Y(ye),at=!1,Kn(Zt)}}}function ua(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const fa=t=>t.stopPropagation();function da(t,e,n){let r="",s=0;async function o(m,B,ee){const ne=await fetch("https://dentists-backend.onrender.com/api/"+m,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)});if(!ne.ok)throw jr("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${ne.status}`);const re=await ne.json();return ee&&ee(),re}let i=!1;async function c(){o("n/gp").then(m=>{m=m.d,n(6,S=m.map(B=>Object({title:B.productName,text:"Price : "+B.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+B.productID+"/0",discount:B.discount})))})}async function a(){o("n/gc").then(m=>{m=m.d,n(4,I=m.map(B=>Object({title:B.courseName,id:B.courseID,text:B.courseDetails,duration:B.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+B.courseID,clickHandler:()=>{const ee=document.createElement("a");ee.href="/courses/"+B.courseID,ee.click(),B.courseID,n(2,i=!1)}}))),console.log(I)})}let u;async function l(){o("n/gf").then(m=>{m=m.d,n(5,b=m.map(B=>Object({id:B.fellowshipID,title:B.fellowshipName,duration:B.fellowshipDuration,text:B.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+B.fellowshipID,clickHandler:()=>{B.fellowshipID,n(2,i=!0)}})))})}async function f(){o("n/gb").then(m=>{m=m.d,n(7,d=m.map(B=>Object({id:B.blogID,text:B.blogDetails,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+B.blogID,clickHandler:()=>{}})))})}let I=[],b=[],S=[],d=[];function D(){const m=document.querySelector(".scroll-box");m&&n(8,q=Number(getComputedStyle(m).height.split("px")[0]))}let q=0;Ot(()=>{document.body.addEventListener("click",function(P){console.log(P.target.id),console.log(v),P.target.id!="menuuu"&&P.target.id!="menuio"&&v&&n(10,v=!1)}),setInterval(()=>{D()},500),o("aus").then(P=>{n(0,r=P.d)}),window.addEventListener("resize",D),D();const B=rr({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),ee=ta(B);na(ee,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(P=>{console.log(P)}),ra(ee,P=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(P)}),Promise.all([a(),l(),f(),c()]).then(()=>{addEventListener("ocd",P=>{console.log(P.detail),P.detail.f?(console.log(b),console.log(P.detail.id),n(3,u=b.filter(X=>X.id==P.detail.id)[0])):n(3,u=I.filter(X=>X.id==P.detail.id)[0])})});function ne(){var P=window.scrollY||document.documentElement.scrollTop,X=document.documentElement.scrollHeight-window.innerHeight,ae=P/X*100;return ae}const re=()=>{var P=document.getElementById("header");window.scrollY||document.documentElement.scrollTop,document.documentElement.hei,P.style.borderBottomLeftRadius=ne()-70+"px",P.style.borderBottomRightRadius=ne()-70+"px",P.style.backgroundColor="rgba(46, 59, 111, "+ne()/20+")"};return window.addEventListener("scroll",re),document.body.style.overflow=_?"hidden":"auto",()=>{window.removeEventListener("scroll",re),window.removeEventListener("resize",D),document.body.style.overflow="auto"}}),Mr(()=>{D()});let _=!1;function T(){n(9,_=!0)}function M(){n(9,_=!1)}ua().then(m=>{m||console.log("Developer tools are closed.")});let v=!1;return[r,s,i,u,I,b,S,d,q,_,v,T,M,()=>{n(1,s=4),M()},function(){n(1,s=0)},function(){const m=document.createElement("a");m.href="/courses",m.click()},function(){const m=document.createElement("a");m.href="/fellowships",m.click()},function(){const m=document.createElement("a");m.href="/products",m.click()},function(){const m=document.createElement("a");m.href="/contact-us",m.click()},()=>{n(10,v=!v)},function(){console.log("CLICKED HERE");const m=document.createElement("a");m.href="/courses",m.click()},function(){console.log("clicked here");const m=document.createElement("a");m.href="/fellowships",m.click()},function(){const m=document.createElement("a");m.href="/contact-us",m.click()},function(){const m=document.createElement("a");m.href="/fellowships",m.click()},function(){const m=document.createElement("a");m.href="/courses",m.click()},function(){const m=document.createElement("a");m.href="/contact-us",m.click()}]}class ka extends ze{constructor(e){super(),xe(this,e,da,la,Fe,{},null,[-1,-1])}}export{ka as component};
