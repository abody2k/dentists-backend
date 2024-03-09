import{s as tt,e as y,h as R,b as I,k as C,f as g,j as L,m as p,o as H,i as B,p as v,v as Rr,w as en,t as tn,d as q,l as nn,x as xt,r as rn,n as Xe,q as re,z as ht,H as $n,I as Un,y as Lr,J as Hi}from"../chunks/scheduler.Cin9khNl.js";import{S as nt,i as rt,c as Y,b as X,m as Q,t as D,g as Re,e as Le,a as U,d as Z}from"../chunks/index.DcF4-v1J.js";/* empty css                                                     */import{C as Mr}from"../chunks/Card.CmEgfiDj.js";import{e as We,u as ji,d as xi}from"../chunks/each.B9raO-7B.js";import{B as $r}from"../chunks/Button.SRw4N8aE.js";import{M as zi}from"../chunks/Map.ztLTGbLs.js";import{G as Ur}from"../chunks/Grid.CGbv0FAg.js";import{L as Ki}from"../chunks/Login.Y8nlQC0L.js";import{C as Wi}from"../chunks/CourseData.0a_4_UOh.js";import{C as qi}from"../chunks/Contact.BJaQM1T6.js";import{n as Gi}from"../chunks/not.BORTzk5v.js";function Bn(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function Fn(t){let e,n;return e=new Mr({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){Q(e,r,i),n=!0},p(r,i){const s={};i&4&&(s.f=r[2]),i&1&&(s.id=r[9]),i&1&&(s.title=r[6]),i&1&&(s.text=r[7]),i&1&&(s.src=r[8]),i&1&&(s.clickHandler=r[10]),i&1&&(s.key=r[6]+r[7]),e.$set(s)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function Ji(t){let e,n,r,i,s,o,c=We(t[0]),a=[];for(let l=0;l<c.length;l+=1)a[l]=Fn(Bn(t,c,l));const u=l=>U(a[l],1,1,()=>{a[l]=null});return s=new $r({props:{text:"Show all ",src:"back-icon.png",radius:"40px",clickHandler:t[1]}}),{c(){e=y("div"),n=y("div");for(let l=0;l<a.length;l+=1)a[l].c();r=R(),i=y("div"),Y(s.$$.fragment),this.h()},l(l){e=I(l,"DIV",{style:!0});var d=C(e);n=I(d,"DIV",{class:!0,id:!0});var b=C(n);for(let A=0;A<a.length;A+=1)a[A].l(b);b.forEach(g),r=L(d),i=I(d,"DIV",{style:!0});var h=C(i);X(s.$$.fragment,h),h.forEach(g),d.forEach(g),this.h()},h(){p(n,"class","row svelte-1l32lre"),p(n,"id","row-container"),H(i,"display","grid"),H(i,"place-items","center"),H(e,"margin-bottom","90px")},m(l,d){B(l,e,d),v(e,n);for(let b=0;b<a.length;b+=1)a[b]&&a[b].m(n,null);v(e,r),v(e,i),Q(s,i,null),o=!0},p(l,[d]){if(d&5){c=We(l[0]);let h;for(h=0;h<c.length;h+=1){const A=Bn(l,c,h);a[h]?(a[h].p(A,d),D(a[h],1)):(a[h]=Fn(A),a[h].c(),D(a[h],1),a[h].m(n,null))}for(Re(),h=c.length;h<a.length;h+=1)u(h);Le()}const b={};d&2&&(b.clickHandler=l[1]),s.$set(b)},i(l){if(!o){for(let d=0;d<c.length;d+=1)D(a[d]);D(s.$$.fragment,l),o=!0}},o(l){a=a.filter(Boolean);for(let d=0;d<a.length;d+=1)U(a[d]);U(s.$$.fragment,l),o=!1},d(l){l&&g(e),Rr(a,l),Z(s)}}}function Yi(t,e,n){let{cardsData:r=[]}=e,{onClick:i}=e,{f:s}=e;return r.length*340,en(()=>{document.getElementById("row-container")}),t.$$set=o=>{"cardsData"in o&&n(0,r=o.cardsData),"onClick"in o&&n(1,i=o.onClick),"f"in o&&n(2,s=o.f)},[r,i,s]}class Vn extends nt{constructor(e){super(),rt(this,e,Yi,Ji,tt,{cardsData:0,onClick:1,f:2})}}function Hn(t,e,n){const r=t.slice();return r[9]=e[n],r[11]=n,r}function jn(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=y("div"),r=tn(n),this.h()},l(i){e=I(i,"DIV",{class:!0});var s=C(e);r=nn(s,n),s.forEach(g),this.h()},h(){p(e,"class","black-title svelte-sumc1k")},m(i,s){B(i,e,s),v(e,r)},p(i,s){s&5&&n!==(n=i[0][i[2]].text+"")&&rn(r,n)},d(i){i&&g(e)}}}function xn(t,e){let n,r,i,s;function o(){return e[5](e[11])}return{key:t,first:null,c(){n=y("div"),this.h()},l(c){n=I(c,"DIV",{class:!0}),C(n).forEach(g),this.h()},h(){p(n,"class",r="dot "+(e[11]===e[2]?"light-dot":"dark-dot")+" svelte-sumc1k"),this.first=n},m(c,a){B(c,n,a),i||(s=re(n,"click",o),i=!0)},p(c,a){e=c,a&4&&r!==(r="dot "+(e[11]===e[2]?"light-dot":"dark-dot")+" svelte-sumc1k")&&p(n,"class",r)},d(c){c&&g(n),i=!1,s()}}}function Xi(t){let e,n,r='<img src="" class="svelte-sumc1k"/>',i,s,o,c,a,u,l,d,b,h,A,f,T=[],x=new Map,m=t[0].length>0&&jn(t),S=We([0,1,2]);const O=_=>_[11];for(let _=0;_<3;_+=1){let k=Hn(t,S,_),V=O(k);x.set(V,T[_]=xn(V,k))}return{c(){e=y("div"),n=y("div"),n.innerHTML=r,i=R(),s=y("div"),o=y("div"),c=tn(t[1]),a=R(),u=y("div"),l=y("div"),d=y("img"),h=R(),m&&m.c(),A=R(),f=y("div");for(let _=0;_<3;_+=1)T[_].c();this.h()},l(_){e=I(_,"DIV",{class:!0});var k=C(e);n=I(k,"DIV",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-17y3p76"&&(n.innerHTML=r),i=L(k),s=I(k,"DIV",{style:!0,class:!0});var V=C(s);o=I(V,"DIV",{class:!0});var j=C(o);c=nn(j,t[1]),j.forEach(g),V.forEach(g),a=L(k),u=I(k,"DIV",{class:!0,style:!0});var K=C(u);l=I(K,"DIV",{style:!0,class:!0});var W=C(l);d=I(W,"IMG",{src:!0,alt:!0,id:!0,class:!0}),h=L(W),m&&m.l(W),A=L(W),f=I(W,"DIV",{class:!0});var Fe=C(f);for(let ve=0;ve<3;ve+=1)T[ve].l(Fe);Fe.forEach(g),W.forEach(g),K.forEach(g),k.forEach(g),this.h()},h(){p(n,"class","icon svelte-sumc1k"),p(o,"class","navy-title svelte-sumc1k"),H(s,"display","flex"),H(s,"justify-content","space-between"),H(s,"align-items","center"),H(s,"padding","10px"),p(s,"class","svelte-sumc1k"),xt(d.src,b="https://picsum.photos/200/300")||p(d,"src",b),p(d,"alt","Neumorphic Picture"),p(d,"id","blog-image"),p(d,"class","rectangular-image svelte-sumc1k"),p(f,"class","dots-container svelte-sumc1k"),H(l,"text-align","center"),p(l,"class","svelte-sumc1k"),p(u,"class","neumorphic-card svelte-sumc1k"),H(u,"padding","20px"),p(e,"class","svelte-sumc1k")},m(_,k){B(_,e,k),v(e,n),v(e,i),v(e,s),v(s,o),v(o,c),v(e,a),v(e,u),v(u,l),v(l,d),v(l,h),m&&m.m(l,null),v(l,A),v(l,f);for(let V=0;V<3;V+=1)T[V]&&T[V].m(f,null)},p(_,[k]){k&2&&rn(c,_[1]),_[0].length>0?m?m.p(_,k):(m=jn(_),m.c(),m.m(l,A)):m&&(m.d(1),m=null),k&12&&(S=We([0,1,2]),T=ji(T,k,O,1,_,S,x,f,xi,xn,null,Hn))},i:Xe,o:Xe,d(_){_&&g(e),m&&m.d();for(let k=0;k<3;k+=1)T[k].d()}}}function Qi(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:i="Default Second Title"}=e,{blogs:s=[]}=e;s.length>3&&(s=s.slice(0,4));let o=0,c;function a(l){console.log(l),n(2,o=l),c.src=s[o].src}en(function(){c=document.getElementById("blog-image");function d(){console.log("wack wack"),!(s.length<1)&&(n(2,o=(o+1)%s.length),c.src=s[o].src,console.log(o))}d(),setInterval(d,7e3)});const u=l=>a(l);return t.$$set=l=>{"firstTitle"in l&&n(1,r=l.firstTitle),"secondTitle"in l&&n(4,i=l.secondTitle),"blogs"in l&&n(0,s=l.blogs)},[s,r,o,a,i,u]}class Zi extends nt{constructor(e){super(),rt(this,e,Qi,Xi,tt,{firstTitle:1,secondTitle:4,blogs:0})}}function zn(t){let e,n,r,i;return{c(){e=y("img"),this.h()},l(s){e=I(s,"IMG",{src:!0,width:!0,height:!0,class:!0}),this.h()},h(){xt(e.src,n=t[0])||p(e,"src",n),p(e,"width",r=t[1]!=null?t[1].w:120),p(e,"height",i=t[1]!=null?t[1].h:80),p(e,"class","svelte-104p3ks")},m(s,o){B(s,e,o)},p(s,o){o&1&&!xt(e.src,n=s[0])&&p(e,"src",n),o&2&&r!==(r=s[1]!=null?s[1].w:120)&&p(e,"width",r),o&2&&i!==(i=s[1]!=null?s[1].h:80)&&p(e,"height",i)},d(s){s&&g(e)}}}function es(t){let e,n=t[0]!=""&&zn(t);return{c(){e=y("div"),n&&n.c(),this.h()},l(r){e=I(r,"DIV",{class:!0});var i=C(e);n&&n.l(i),i.forEach(g),this.h()},h(){p(e,"class","card svelte-104p3ks")},m(r,i){B(r,e,i),n&&n.m(e,null)},p(r,[i]){r[0]!=""?n?n.p(r,i):(n=zn(r),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:Xe,o:Xe,d(r){r&&g(e),n&&n.d()}}}function ts(t,e,n){let{src:r}=e,{size:i}=e;return t.$$set=s=>{"src"in s&&n(0,r=s.src),"size"in s&&n(1,i=s.size)},[r,i]}class ns extends nt{constructor(e){super(),rt(this,e,ts,es,tt,{src:0,size:1})}}function Kn(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function Wn(t){let e,n,r;return n=new ns({props:{src:t[0][t[1]%t[0].length].src,size:{w:290,h:280}}}),{c(){e=y("div"),Y(n.$$.fragment),this.h()},l(i){e=I(i,"DIV",{class:!0});var s=C(e);X(n.$$.fragment,s),s.forEach(g),this.h()},h(){p(e,"class","image-card svelte-1qyvrcm")},m(i,s){B(i,e,s),Q(n,e,null),r=!0},p(i,s){const o={};s&3&&(o.src=i[0][i[1]%i[0].length].src),n.$set(o)},i(i){r||(D(n.$$.fragment,i),r=!0)},o(i){U(n.$$.fragment,i),r=!1},d(i){i&&g(e),Z(n)}}}function qn(t){let e,n,r=We(t[0]),i=[];for(let o=0;o<r.length;o+=1)i[o]=Jn(Kn(t,r,o));const s=o=>U(i[o],1,1,()=>{i[o]=null});return{c(){for(let o=0;o<i.length;o+=1)i[o].c();e=ht()},l(o){for(let c=0;c<i.length;c+=1)i[c].l(o);e=ht()},m(o,c){for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(o,c);B(o,e,c),n=!0},p(o,c){if(c&3){r=We(o[0]);let a;for(a=0;a<r.length;a+=1){const u=Kn(o,r,a);i[a]?(i[a].p(u,c),D(i[a],1)):(i[a]=Jn(u),i[a].c(),D(i[a],1),i[a].m(e.parentNode,e))}for(Re(),a=r.length;a<i.length;a+=1)s(a);Le()}},i(o){if(!n){for(let c=0;c<r.length;c+=1)D(i[c]);n=!0}},o(o){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)U(i[c]);n=!1},d(o){o&&g(e),Rr(i,o)}}}function Gn(t){let e,n;return e=new Mr({props:{src:t[0][(t[1]+1)%t[0].length].src,title:t[0][(t[1]+1)%t[0].length].title,text:t[0][(t[1]+1)%t[0].length].text+(t[0][(t[1]+1)%t[0].length].discount?t[0][(t[1]+1)%t[0].length].discount:" "),disableBtn:1,size:{w:300,h:200}}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){Q(e,r,i),n=!0},p(r,i){const s={};i&3&&(s.src=r[0][(r[1]+1)%r[0].length].src),i&3&&(s.title=r[0][(r[1]+1)%r[0].length].title),i&3&&(s.text=r[0][(r[1]+1)%r[0].length].text+(r[0][(r[1]+1)%r[0].length].discount?r[0][(r[1]+1)%r[0].length].discount:" ")),e.$set(s)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function Jn(t){let e,n,r=t[4]+1!=t[0].length&&Gn(t);return{c(){r&&r.c(),e=ht()},l(i){r&&r.l(i),e=ht()},m(i,s){r&&r.m(i,s),B(i,e,s),n=!0},p(i,s){i[4]+1!=i[0].length?r?(r.p(i,s),s&1&&D(r,1)):(r=Gn(i),r.c(),D(r,1),r.m(e.parentNode,e)):r&&(Re(),U(r,1,1,()=>{r=null}),Le())},i(i){n||(D(r),n=!0)},o(i){U(r),n=!1},d(i){i&&g(e),r&&r.d(i)}}}function rs(t){let e,n,r="Products",i,s,o,c,a,u='<div class="black-title svelte-1qyvrcm">Title</div> <div class="small-note svelte-1qyvrcm">A small note goes here.</div> <div class="big-text svelte-1qyvrcm">Big bold black text.</div>',l,d,b,h,A,f,T="",x,m=t[0].length>=1&&Wn(t),S=t[0].length>1&&qn(t);return h=new $r({props:{text:"Show Call"}}),{c(){e=y("div"),n=y("div"),n.textContent=r,i=R(),s=y("div"),o=y("div"),m&&m.c(),c=R(),a=y("div"),a.innerHTML=u,l=R(),d=y("div"),S&&S.c(),b=R(),Y(h.$$.fragment),A=R(),f=y("div"),f.innerHTML=T,this.h()},l(O){e=I(O,"DIV",{style:!0});var _=C(e);n=I(_,"DIV",{class:!0,"data-svelte-h":!0}),q(n)!=="svelte-dyb2yo"&&(n.textContent=r),i=L(_),s=I(_,"DIV",{class:!0});var k=C(s);o=I(k,"DIV",{class:!0});var V=C(o);m&&m.l(V),c=L(V),a=I(V,"DIV",{class:!0,"data-svelte-h":!0}),q(a)!=="svelte-1sx5tfn"&&(a.innerHTML=u),V.forEach(g),l=L(k),d=I(k,"DIV",{class:!0});var j=C(d);S&&S.l(j),b=L(j),X(h.$$.fragment,j),j.forEach(g),A=L(k),f=I(k,"DIV",{class:!0,"data-svelte-h":!0}),q(f)!=="svelte-1866ndo"&&(f.innerHTML=T),k.forEach(g),_.forEach(g),this.h()},h(){p(n,"class","navy-title svelte-1qyvrcm"),p(a,"class","text-container svelte-1qyvrcm"),p(o,"class","first-row svelte-1qyvrcm"),p(d,"class","row-images svelte-1qyvrcm"),p(f,"class","show-call-button svelte-1qyvrcm"),p(s,"class","neumorphic-card svelte-1qyvrcm"),H(e,"margin-top","90px")},m(O,_){B(O,e,_),v(e,n),v(e,i),v(e,s),v(s,o),m&&m.m(o,null),v(o,c),v(o,a),v(s,l),v(s,d),S&&S.m(d,null),v(d,b),Q(h,d,null),v(s,A),v(s,f),x=!0},p(O,[_]){O[0].length>=1?m?(m.p(O,_),_&1&&D(m,1)):(m=Wn(O),m.c(),D(m,1),m.m(o,c)):m&&(Re(),U(m,1,1,()=>{m=null}),Le()),O[0].length>1?S?(S.p(O,_),_&1&&D(S,1)):(S=qn(O),S.c(),D(S,1),S.m(d,b)):S&&(Re(),U(S,1,1,()=>{S=null}),Le())},i(O){x||(D(m),D(S),D(h.$$.fragment,O),x=!0)},o(O){U(m),U(S),U(h.$$.fragment,O),x=!1},d(O){O&&g(e),m&&m.d(),S&&S.d(),Z(h)}}}function is(t,e,n){let{data:r=[]}=e,i=0;return setInterval(()=>{r.length>1&&n(1,i=(i+1)%r.length)},7e3),t.$$set=s=>{"data"in s&&n(0,r=s.data)},[r,i]}class ss extends nt{constructor(e){super(),rt(this,e,is,rs,tt,{data:0})}}var Yn={};/**
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
 */const Br=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},os=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Fr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,l=s>>2,d=(s&3)<<4|c>>4;let b=(c&15)<<2|u>>6,h=u&63;a||(h=64,o||(b=64)),r.push(n[l],n[d],n[b],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Br(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):os(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||u==null||d==null)throw new as;const b=s<<2|c>>4;if(r.push(b),u!==64){const h=c<<4&240|u>>2;if(r.push(h),d!==64){const A=u<<6&192|d;r.push(A)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class as extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cs=function(t){const e=Br(t);return Fr.encodeByteArray(e,!0)},Vr=function(t){return cs(t).replace(/\./g,"")},Hr=function(t){try{return Fr.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ls(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const us=()=>ls().__FIREBASE_DEFAULTS__,ds=()=>{if(typeof process>"u"||typeof Yn>"u")return;const t=Yn.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},fs=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hr(t[1]);return e&&JSON.parse(e)},jr=()=>{try{return us()||ds()||fs()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},xr=()=>{var t;return(t=jr())===null||t===void 0?void 0:t.config},hs=t=>{var e;return(e=jr())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ps{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function de(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(de())}function zr(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ms(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function sn(){try{return typeof indexedDB=="object"}catch{return!1}}function on(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}function Kr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const vs="FirebaseError";class me extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=vs,Object.setPrototypeOf(this,me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ke.prototype.create)}}class ke{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?_s(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new me(i,c,r)}}function _s(t,e){return t.replace(bs,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bs=/\{\$([^}]+)}/g;function zt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Xn(s)&&Xn(o)){if(!zt(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Xn(t){return t!==null&&typeof t=="object"}/**
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
 */function Wr(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ws(t,e){const n=new ys(t,e);return n.subscribe.bind(n)}class ys{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Is(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=St),i.error===void 0&&(i.error=St),i.complete===void 0&&(i.complete=St);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Is(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function St(){}/**
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
 */const Es=1e3,Ts=2,ks=4*60*60*1e3,Ss=.5;function Qn(t,e=Es,n=Ts){const r=e*Math.pow(n,t),i=Math.round(Ss*r*(Math.random()-.5)*2);return Math.min(ks,r+i)}/**
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
 */function Se(t){return t&&t._delegate?t._delegate:t}class ce{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Oe="[DEFAULT]";/**
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
 */class As{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ps;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ds(e))try{this.getOrInitializeService({instanceIdentifier:Oe})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Oe){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oe){return this.instances.has(e)}getOptions(e=Oe){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Cs(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Oe){return this.component?this.component.multipleInstances?e:Oe:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Cs(t){return t===Oe?void 0:t}function Ds(t){return t.instantiationMode==="EAGER"}/**
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
 */class Os{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new As(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Ns={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Ps=F.INFO,Rs={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Ls=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Rs[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class an{constructor(e){this.name=e,this._logLevel=Ps,this._logHandler=Ls,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ns[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Ms=(t,e)=>e.some(n=>t instanceof n);let Zn,er;function $s(){return Zn||(Zn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Us(){return er||(er=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qr=new WeakMap,Kt=new WeakMap,Gr=new WeakMap,At=new WeakMap,cn=new WeakMap;function Bs(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ge(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&qr.set(n,t)}).catch(()=>{}),cn.set(e,t),e}function Fs(t){if(Kt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Kt.set(t,e)}let Wt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Gr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ge(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vs(t){Wt=t(Wt)}function Hs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ct(this),e,...n);return Gr.set(r,e.sort?e.sort():[e]),ge(r)}:Us().includes(t)?function(...e){return t.apply(Ct(this),e),ge(qr.get(this))}:function(...e){return ge(t.apply(Ct(this),e))}}function js(t){return typeof t=="function"?Hs(t):(t instanceof IDBTransaction&&Fs(t),Ms(t,$s())?new Proxy(t,Wt):t)}function ge(t){if(t instanceof IDBRequest)return Bs(t);if(At.has(t))return At.get(t);const e=js(t);return e!==t&&(At.set(t,e),cn.set(e,t)),e}const Ct=t=>cn.get(t);function ln(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=ge(o);return r&&o.addEventListener("upgradeneeded",a=>{r(ge(o.result),a.oldVersion,a.newVersion,ge(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}function Dt(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ge(n).then(()=>{})}const xs=["get","getKey","getAll","getAllKeys","count"],zs=["put","add","delete","clear"],Ot=new Map;function tr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ot.get(e))return Ot.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=zs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||xs.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),i&&a.done]))[0]};return Ot.set(e,s),s}Vs(t=>({...t,get:(e,n,r)=>tr(e,n)||t.get(e,n,r),has:(e,n)=>!!tr(e,n)||t.has(e,n)}));/**
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
 */class Ks{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ws(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Ws(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qt="@firebase/app",nr="0.9.25";/**
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
 */const Me=new an("@firebase/app"),qs="@firebase/app-compat",Gs="@firebase/analytics-compat",Js="@firebase/analytics",Ys="@firebase/app-check-compat",Xs="@firebase/app-check",Qs="@firebase/auth",Zs="@firebase/auth-compat",eo="@firebase/database",to="@firebase/database-compat",no="@firebase/functions",ro="@firebase/functions-compat",io="@firebase/installations",so="@firebase/installations-compat",oo="@firebase/messaging",ao="@firebase/messaging-compat",co="@firebase/performance",lo="@firebase/performance-compat",uo="@firebase/remote-config",fo="@firebase/remote-config-compat",ho="@firebase/storage",po="@firebase/storage-compat",go="@firebase/firestore",mo="@firebase/firestore-compat",vo="firebase",_o="10.7.1";/**
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
 */const Gt="[DEFAULT]",bo={[qt]:"fire-core",[qs]:"fire-core-compat",[Js]:"fire-analytics",[Gs]:"fire-analytics-compat",[Xs]:"fire-app-check",[Ys]:"fire-app-check-compat",[Qs]:"fire-auth",[Zs]:"fire-auth-compat",[eo]:"fire-rtdb",[to]:"fire-rtdb-compat",[no]:"fire-fn",[ro]:"fire-fn-compat",[io]:"fire-iid",[so]:"fire-iid-compat",[oo]:"fire-fcm",[ao]:"fire-fcm-compat",[co]:"fire-perf",[lo]:"fire-perf-compat",[uo]:"fire-rc",[fo]:"fire-rc-compat",[ho]:"fire-gcs",[po]:"fire-gcs-compat",[go]:"fire-fst",[mo]:"fire-fst-compat","fire-js":"fire-js",[vo]:"fire-js-all"};/**
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
 */const pt=new Map,Jt=new Map;function wo(t,e){try{t.container.addComponent(e)}catch(n){Me.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ue(t){const e=t.name;if(Jt.has(e))return Me.debug(`There were multiple attempts to register component ${e}.`),!1;Jt.set(e,t);for(const n of pt.values())wo(n,t);return!0}function un(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const yo={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ee=new ke("app","Firebase",yo);/**
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
 */class Io{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ce("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ee.create("app-deleted",{appName:this._name})}}/**
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
 */const dn=_o;function Jr(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Gt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Ee.create("bad-app-name",{appName:String(i)});if(n||(n=xr()),!n)throw Ee.create("no-options");const s=pt.get(i);if(s){if(zt(n,s.options)&&zt(r,s.config))return s;throw Ee.create("duplicate-app",{appName:i})}const o=new Os(i);for(const a of Jt.values())o.addComponent(a);const c=new Io(n,r,o);return pt.set(i,c),c}function Eo(t=Gt){const e=pt.get(t);if(!e&&t===Gt&&xr())return Jr();if(!e)throw Ee.create("no-app",{appName:t});return e}function oe(t,e,n){var r;let i=(r=bo[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const c=[`Unable to register library "${i}" with version "${e}":`];s&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Me.warn(c.join(" "));return}ue(new ce(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const To="firebase-heartbeat-database",ko=1,Qe="firebase-heartbeat-store";let Nt=null;function Yr(){return Nt||(Nt=ln(To,ko,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qe)}}}).catch(t=>{throw Ee.create("idb-open",{originalErrorMessage:t.message})})),Nt}async function So(t){try{return await(await Yr()).transaction(Qe).objectStore(Qe).get(Xr(t))}catch(e){if(e instanceof me)Me.warn(e.message);else{const n=Ee.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Me.warn(n.message)}}}async function rr(t,e){try{const r=(await Yr()).transaction(Qe,"readwrite");await r.objectStore(Qe).put(e,Xr(t)),await r.done}catch(n){if(n instanceof me)Me.warn(n.message);else{const r=Ee.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Me.warn(r.message)}}}function Xr(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ao=1024,Co=30*24*60*60*1e3;class Do{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new No(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ir();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Co}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ir(),{heartbeatsToSend:r,unsentEntries:i}=Oo(this._heartbeatsCache.heartbeats),s=Vr(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ir(){return new Date().toISOString().substring(0,10)}function Oo(t,e=Ao){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class No{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sn()?on().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await So(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sr(t){return Vr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Po(t){ue(new ce("platform-logger",e=>new Ks(e),"PRIVATE")),ue(new ce("heartbeat",e=>new Do(e),"PRIVATE")),oe(qt,nr,t),oe(qt,nr,"esm2017"),oe("fire-js","")}Po("");var Ro="firebase",Lo="10.7.1";/**
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
 */oe(Ro,Lo,"app");const Mo=(t,e)=>e.some(n=>t instanceof n);let or,ar;function $o(){return or||(or=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Uo(){return ar||(ar=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qr=new WeakMap,Yt=new WeakMap,Zr=new WeakMap,Pt=new WeakMap,fn=new WeakMap;function Bo(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Te(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Qr.set(n,t)}).catch(()=>{}),fn.set(e,t),e}function Fo(t){if(Yt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Yt.set(t,e)}let Xt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Yt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zr.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Te(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Vo(t){Xt=t(Xt)}function Ho(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rt(this),e,...n);return Zr.set(r,e.sort?e.sort():[e]),Te(r)}:Uo().includes(t)?function(...e){return t.apply(Rt(this),e),Te(Qr.get(this))}:function(...e){return Te(t.apply(Rt(this),e))}}function jo(t){return typeof t=="function"?Ho(t):(t instanceof IDBTransaction&&Fo(t),Mo(t,$o())?new Proxy(t,Xt):t)}function Te(t){if(t instanceof IDBRequest)return Bo(t);if(Pt.has(t))return Pt.get(t);const e=jo(t);return e!==t&&(Pt.set(t,e),fn.set(e,t)),e}const Rt=t=>fn.get(t);function xo(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=Te(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Te(o.result),a.oldVersion,a.newVersion,Te(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",()=>i())}).catch(()=>{}),c}const zo=["get","getKey","getAll","getAllKeys","count"],Ko=["put","add","delete","clear"],Lt=new Map;function cr(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lt.get(e))return Lt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Ko.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||zo.includes(n)))return;const s=async function(o,...c){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),i&&a.done]))[0]};return Lt.set(e,s),s}Vo(t=>({...t,get:(e,n,r)=>cr(e,n)||t.get(e,n,r),has:(e,n)=>!!cr(e,n)||t.has(e,n)}));const ei="@firebase/installations",hn="0.6.4";/**
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
 */const ti=1e4,ni=`w:${hn}`,ri="FIS_v2",Wo="https://firebaseinstallations.googleapis.com/v1",qo=60*60*1e3,Go="installations",Jo="Installations";/**
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
 */const Yo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},$e=new ke(Go,Jo,Yo);function ii(t){return t instanceof me&&t.code.includes("request-failed")}/**
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
 */function si({projectId:t}){return`${Wo}/projects/${t}/installations`}function oi(t){return{token:t.token,requestStatus:2,expiresIn:Qo(t.expiresIn),creationTime:Date.now()}}async function ai(t,e){const r=(await e.json()).error;return $e.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ci({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Xo(t,{refreshToken:e}){const n=ci(t);return n.append("Authorization",Zo(e)),n}async function li(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qo(t){return Number(t.replace("s","000"))}function Zo(t){return`${ri} ${t}`}/**
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
 */async function ea({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=si(t),i=ci(t),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={fid:n,authVersion:ri,appId:t.appId,sdkVersion:ni},c={method:"POST",headers:i,body:JSON.stringify(o)},a=await li(()=>fetch(r,c));if(a.ok){const u=await a.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:oi(u.authToken)}}else throw await ai("Create Installation",a)}/**
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
 */function ui(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ta(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const na=/^[cdef][\w-]{21}$/,Qt="";function ra(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ia(t);return na.test(n)?n:Qt}catch{return Qt}}function ia(t){return ta(t).substr(0,22)}/**
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
 */function bt(t){return`${t.appName}!${t.appId}`}/**
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
 */const di=new Map;function fi(t,e){const n=bt(t);hi(n,e),sa(n,e)}function hi(t,e){const n=di.get(t);if(n)for(const r of n)r(e)}function sa(t,e){const n=oa();n&&n.postMessage({key:t,fid:e}),aa()}let Ne=null;function oa(){return!Ne&&"BroadcastChannel"in self&&(Ne=new BroadcastChannel("[Firebase] FID Change"),Ne.onmessage=t=>{hi(t.data.key,t.data.fid)}),Ne}function aa(){di.size===0&&Ne&&(Ne.close(),Ne=null)}/**
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
 */const ca="firebase-installations-database",la=1,Ue="firebase-installations-store";let Mt=null;function pn(){return Mt||(Mt=xo(ca,la,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ue)}}})),Mt}async function gt(t,e){const n=bt(t),i=(await pn()).transaction(Ue,"readwrite"),s=i.objectStore(Ue),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&fi(t,e.fid),e}async function pi(t){const e=bt(t),r=(await pn()).transaction(Ue,"readwrite");await r.objectStore(Ue).delete(e),await r.done}async function wt(t,e){const n=bt(t),i=(await pn()).transaction(Ue,"readwrite"),s=i.objectStore(Ue),o=await s.get(n),c=e(o);return c===void 0?await s.delete(n):await s.put(c,n),await i.done,c&&(!o||o.fid!==c.fid)&&fi(t,c.fid),c}/**
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
 */async function gn(t){let e;const n=await wt(t.appConfig,r=>{const i=ua(r),s=da(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Qt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ua(t){const e=t||{fid:ra(),registrationStatus:0};return gi(e)}function da(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject($e.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=fa(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:ha(t)}:{installationEntry:e}}async function fa(t,e){try{const n=await ea(t,e);return gt(t.appConfig,n)}catch(n){throw ii(n)&&n.customData.serverCode===409?await pi(t.appConfig):await gt(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function ha(t){let e=await lr(t.appConfig);for(;e.registrationStatus===1;)await ui(100),e=await lr(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await gn(t);return r||n}return e}function lr(t){return wt(t,e=>{if(!e)throw $e.create("installation-not-found");return gi(e)})}function gi(t){return pa(t)?{fid:t.fid,registrationStatus:0}:t}function pa(t){return t.registrationStatus===1&&t.registrationTime+ti<Date.now()}/**
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
 */async function ga({appConfig:t,heartbeatServiceProvider:e},n){const r=ma(t,n),i=Xo(t,n),s=e.getImmediate({optional:!0});if(s){const u=await s.getHeartbeatsHeader();u&&i.append("x-firebase-client",u)}const o={installation:{sdkVersion:ni,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},a=await li(()=>fetch(r,c));if(a.ok){const u=await a.json();return oi(u)}else throw await ai("Generate Auth Token",a)}function ma(t,{fid:e}){return`${si(t)}/${e}/authTokens:generate`}/**
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
 */async function mn(t,e=!1){let n;const r=await wt(t.appConfig,s=>{if(!mi(s))throw $e.create("not-registered");const o=s.authToken;if(!e&&ba(o))return s;if(o.requestStatus===1)return n=va(t,e),s;{if(!navigator.onLine)throw $e.create("app-offline");const c=ya(s);return n=_a(t,c),c}});return n?await n:r.authToken}async function va(t,e){let n=await ur(t.appConfig);for(;n.authToken.requestStatus===1;)await ui(100),n=await ur(t.appConfig);const r=n.authToken;return r.requestStatus===0?mn(t,e):r}function ur(t){return wt(t,e=>{if(!mi(e))throw $e.create("not-registered");const n=e.authToken;return Ia(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function _a(t,e){try{const n=await ga(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await gt(t.appConfig,r),n}catch(n){if(ii(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pi(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await gt(t.appConfig,r)}throw n}}function mi(t){return t!==void 0&&t.registrationStatus===2}function ba(t){return t.requestStatus===2&&!wa(t)}function wa(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+qo}function ya(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ia(t){return t.requestStatus===1&&t.requestTime+ti<Date.now()}/**
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
 */async function Ea(t){const e=t,{installationEntry:n,registrationPromise:r}=await gn(e);return r?r.catch(console.error):mn(e).catch(console.error),n.fid}/**
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
 */async function Ta(t,e=!1){const n=t;return await ka(n),(await mn(n,e)).token}async function ka(t){const{registrationPromise:e}=await gn(t);e&&await e}/**
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
 */function Sa(t){if(!t||!t.options)throw $t("App Configuration");if(!t.name)throw $t("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw $t(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function $t(t){return $e.create("missing-app-config-values",{valueName:t})}/**
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
 */const vi="installations",Aa="installations-internal",Ca=t=>{const e=t.getProvider("app").getImmediate(),n=Sa(e),r=un(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Da=t=>{const e=t.getProvider("app").getImmediate(),n=un(e,vi).getImmediate();return{getId:()=>Ea(n),getToken:i=>Ta(n,i)}};function Oa(){ue(new ce(vi,Ca,"PUBLIC")),ue(new ce(Aa,Da,"PRIVATE"))}Oa();oe(ei,hn);oe(ei,hn,"esm2017");/**
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
 */const dr="analytics",Na="firebase_id",Pa="origin",Ra=60*1e3,La="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",vn="https://www.googletagmanager.com/gtag/js";/**
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
 */const te=new an("@firebase/analytics");/**
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
 */const Ma={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},ae=new ke("analytics","Analytics",Ma);/**
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
 */function $a(t){if(!t.startsWith(vn)){const e=ae.create("invalid-gtag-resource",{gtagURL:t});return te.warn(e.message),""}return t}function _i(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function Ua(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Ba(t,e){const n=Ua("firebase-js-sdk-policy",{createScriptURL:$a}),r=document.createElement("script"),i=`${vn}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Fa(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Va(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const a=(await _i(n)).find(u=>u.measurementId===i);a&&await e[a.appId]}}catch(c){te.error(c)}t("config",i,s)}async function Ha(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await _i(n);for(const a of o){const u=c.find(d=>d.measurementId===a),l=u&&e[u.appId];if(l)s.push(l);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){te.error(s)}}function ja(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[c,a]=o;await Ha(t,e,n,c,a)}else if(s==="config"){const[c,a]=o;await Va(t,e,n,r,c,a)}else if(s==="consent"){const[c]=o;t("consent","update",c)}else if(s==="get"){const[c,a,u]=o;t("get",c,a,u)}else if(s==="set"){const[c]=o;t("set",c)}else t(s,...o)}catch(c){te.error(c)}}return i}function xa(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=ja(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function za(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(vn)&&n.src.includes(t))return n;return null}/**
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
 */const Ka=30,Wa=1e3;class qa{constructor(e={},n=Wa){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const bi=new qa;function Ga(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Ja(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Ga(r)},s=La.replace("{app-id}",n),o=await fetch(s,i);if(o.status!==200&&o.status!==304){let c="";try{const a=await o.json();!((e=a.error)===null||e===void 0)&&e.message&&(c=a.error.message)}catch{}throw ae.create("config-fetch-failed",{httpStatus:o.status,responseMessage:c})}return o.json()}async function Ya(t,e=bi,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw ae.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw ae.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new Za;return setTimeout(async()=>{c.abort()},n!==void 0?n:Ra),wi({appId:r,apiKey:i,measurementId:s},o,c,e)}async function wi(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=bi){var s;const{appId:o,measurementId:c}=t;try{await Xa(r,e)}catch(a){if(c)return te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${a==null?void 0:a.message}]`),{appId:o,measurementId:c};throw a}try{const a=await Ja(t);return i.deleteThrottleMetadata(o),a}catch(a){const u=a;if(!Qa(u)){if(i.deleteThrottleMetadata(o),c)return te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:o,measurementId:c};throw a}const l=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Qn(n,i.intervalMillis,Ka):Qn(n,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return i.setThrottleMetadata(o,d),te.debug(`Calling attemptFetch again in ${l} millis`),wi(t,d,r,i)}}function Xa(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(ae.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Qa(t){if(!(t instanceof me)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Za{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function ec(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o=Object.assign(Object.assign({},r),{send_to:s});t("event",n,o)}}/**
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
 */async function tc(){if(sn())try{await on()}catch(t){return te.warn(ae.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return te.warn(ae.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function nc(t,e,n,r,i,s,o){var c;const a=Ya(t);a.then(h=>{n[h.measurementId]=h.appId,t.options.measurementId&&h.measurementId!==t.options.measurementId&&te.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(h=>te.error(h)),e.push(a);const u=tc().then(h=>{if(h)return r.getId()}),[l,d]=await Promise.all([a,u]);za(s)||Ba(s,l.measurementId),i("js",new Date);const b=(c=o==null?void 0:o.config)!==null&&c!==void 0?c:{};return b[Pa]="firebase",b.update=!0,d!=null&&(b[Na]=d),i("config",l.measurementId,b),l.measurementId}/**
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
 */class rc{constructor(e){this.app=e}_delete(){return delete Ge[this.app.options.appId],Promise.resolve()}}let Ge={},fr=[];const hr={};let Ut="dataLayer",ic="gtag",pr,yi,gr=!1;function sc(){const t=[];if(zr()&&t.push("This is a browser extension environment."),Kr()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=ae.create("invalid-analytics-context",{errorInfo:e});te.warn(n.message)}}function oc(t,e,n){sc();const r=t.options.appId;if(!r)throw ae.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw ae.create("no-api-key");if(Ge[r]!=null)throw ae.create("already-exists",{id:r});if(!gr){Fa(Ut);const{wrappedGtag:s,gtagCore:o}=xa(Ge,fr,hr,Ut,ic);yi=s,pr=o,gr=!0}return Ge[r]=nc(t,fr,hr,e,pr,Ut,n),new rc(t)}function ac(t,e,n,r){t=Se(t),ec(yi,Ge[t.app.options.appId],e,n,r).catch(i=>te.error(i))}const mr="@firebase/analytics",vr="0.10.0";function cc(){ue(new ce(dr,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return oc(r,i,n)},"PUBLIC")),ue(new ce("analytics-internal",t,"PRIVATE")),oe(mr,vr),oe(mr,vr,"esm2017");function t(e){try{const n=e.getProvider(dr).getImmediate();return{logEvent:(r,i,s)=>ac(n,r,i,s)}}catch(n){throw ae.create("interop-component-reg-failed",{reason:n})}}}cc();/**
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
 */const lc="/firebase-messaging-sw.js",uc="/firebase-cloud-messaging-push-scope",Ii="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",dc="https://fcmregistrations.googleapis.com/v1",Ei="google.c.a.c_id",fc="google.c.a.c_l",hc="google.c.a.ts",pc="google.c.a.e";var _r;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(_r||(_r={}));/**
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
 */var Ze;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ze||(Ze={}));/**
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
 */function pe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function gc(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),i=new Uint8Array(r.length);for(let s=0;s<r.length;++s)i[s]=r.charCodeAt(s);return i}/**
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
 */const Bt="fcm_token_details_db",mc=5,br="fcm_token_object_Store";async function vc(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(Bt))return null;let e=null;return(await ln(Bt,mc,{upgrade:async(r,i,s,o)=>{var c;if(i<2||!r.objectStoreNames.contains(br))return;const a=o.objectStore(br),u=await a.index("fcmSenderId").get(t);if(await a.clear(),!!u){if(i===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:pe(l.vapidKey)}}}else if(i===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:pe(l.auth),p256dh:pe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:pe(l.vapidKey)}}}else if(i===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:pe(l.auth),p256dh:pe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:pe(l.vapidKey)}}}}}})).close(),await Dt(Bt),await Dt("fcm_vapid_details_db"),await Dt("undefined"),_c(e)?e:null}function _c(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const bc="firebase-messaging-database",wc=1,Be="firebase-messaging-store";let Ft=null;function _n(){return Ft||(Ft=ln(bc,wc,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Be)}}})),Ft}async function Ti(t){const e=wn(t),r=await(await _n()).transaction(Be).objectStore(Be).get(e);if(r)return r;{const i=await vc(t.appConfig.senderId);if(i)return await bn(t,i),i}}async function bn(t,e){const n=wn(t),i=(await _n()).transaction(Be,"readwrite");return await i.objectStore(Be).put(e,n),await i.done,e}async function yc(t){const e=wn(t),r=(await _n()).transaction(Be,"readwrite");await r.objectStore(Be).delete(e),await r.done}function wn({appConfig:t}){return t.appId}/**
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
 */const Ic={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},J=new ke("messaging","Messaging",Ic);/**
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
 */async function Ec(t,e){const n=await In(t),r=Si(e),i={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(yn(t.appConfig),i)).json()}catch(o){throw J.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw J.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw J.create("token-subscribe-no-token");return s.token}async function Tc(t,e){const n=await In(t),r=Si(e.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${yn(t.appConfig)}/${e.token}`,i)).json()}catch(o){throw J.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw J.create("token-update-failed",{errorInfo:o})}if(!s.token)throw J.create("token-update-no-token");return s.token}async function ki(t,e){const r={method:"DELETE",headers:await In(t)};try{const s=await(await fetch(`${yn(t.appConfig)}/${e}`,r)).json();if(s.error){const o=s.error.message;throw J.create("token-unsubscribe-failed",{errorInfo:o})}}catch(i){throw J.create("token-unsubscribe-failed",{errorInfo:i==null?void 0:i.toString()})}}function yn({projectId:t}){return`${dc}/projects/${t}/registrations`}async function In({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Si({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const i={web:{endpoint:n,auth:e,p256dh:t}};return r!==Ii&&(i.web.applicationPubKey=r),i}/**
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
 */const kc=7*24*60*60*1e3;async function Sc(t){const e=await Dc(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:pe(e.getKey("auth")),p256dh:pe(e.getKey("p256dh"))},r=await Ti(t.firebaseDependencies);if(r){if(Oc(r.subscriptionOptions,n))return Date.now()>=r.createTime+kc?Cc(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ki(t.firebaseDependencies,r.token)}catch(i){console.warn(i)}return wr(t.firebaseDependencies,n)}else return wr(t.firebaseDependencies,n)}async function Ac(t){const e=await Ti(t.firebaseDependencies);e&&(await ki(t.firebaseDependencies,e.token),await yc(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Cc(t,e){try{const n=await Tc(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await bn(t.firebaseDependencies,r),n}catch(n){throw await Ac(t),n}}async function wr(t,e){const r={token:await Ec(t,e),createTime:Date.now(),subscriptionOptions:e};return await bn(t,r),r.token}async function Dc(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:gc(e)})}function Oc(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,i=e.auth===t.auth,s=e.p256dh===t.p256dh;return n&&r&&i&&s}/**
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
 */function yr(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Nc(e,t),Pc(e,t),Rc(e,t),e}function Nc(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const i=e.notification.image;i&&(t.notification.image=i);const s=e.notification.icon;s&&(t.notification.icon=s)}function Pc(t,e){e.data&&(t.data=e.data)}function Rc(t,e){var n,r,i,s,o;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const c=(i=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&i!==void 0?i:(s=e.notification)===null||s===void 0?void 0:s.click_action;c&&(t.fcmOptions.link=c);const a=(o=e.fcmOptions)===null||o===void 0?void 0:o.analytics_label;a&&(t.fcmOptions.analyticsLabel=a)}/**
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
 */function Lc(t){return typeof t=="object"&&!!t&&Ei in t}/**
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
 */Ai("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Ai("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Ai(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function Mc(t){if(!t||!t.options)throw Vt("App Configuration Object");if(!t.name)throw Vt("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Vt(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Vt(t){return J.create("missing-app-config-values",{valueName:t})}/**
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
 */class $c{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const i=Mc(e);this.firebaseDependencies={app:e,appConfig:i,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function Uc(t){try{t.swRegistration=await navigator.serviceWorker.register(lc,{scope:uc}),t.swRegistration.update().catch(()=>{})}catch(e){throw J.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function Bc(t,e){if(!e&&!t.swRegistration&&await Uc(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw J.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Fc(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Ii)}/**
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
 */async function Ci(t,e){if(!navigator)throw J.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw J.create("permission-blocked");return await Fc(t,e==null?void 0:e.vapidKey),await Bc(t,e==null?void 0:e.serviceWorkerRegistration),Sc(t)}/**
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
 */async function Vc(t,e,n){const r=Hc(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Ei],message_name:n[fc],message_time:n[hc],message_device_time:Math.floor(Date.now()/1e3)})}function Hc(t){switch(t){case Ze.NOTIFICATION_CLICKED:return"notification_open";case Ze.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function jc(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ze.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(yr(n)):t.onMessageHandler.next(yr(n)));const r=n.data;Lc(r)&&r[pc]==="1"&&await Vc(t,n.messageType,r)}const Ir="@firebase/messaging",Er="0.12.5";/**
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
 */const xc=t=>{const e=new $c(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>jc(e,n)),e},zc=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Ci(e,r)}};function Kc(){ue(new ce("messaging",xc,"PUBLIC")),ue(new ce("messaging-internal",zc,"PRIVATE")),oe(Ir,Er),oe(Ir,Er,"esm2017")}/**
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
 */async function Wc(){try{await on()}catch{return!1}return typeof window<"u"&&sn()&&Kr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function qc(t,e){if(!navigator)throw J.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Gc(t=Eo()){return Wc().then(e=>{if(!e)throw J.create("unsupported-browser")},e=>{throw J.create("indexed-db-unsupported")}),un(Se(t),"messaging").getImmediate()}async function Jc(t,e){return t=Se(t),Ci(t,e)}function Yc(t,e){return t=Se(t),qc(t,e)}Kc();function Di(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Oi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xc=Oi,Ni=new ke("auth","Firebase",Oi());/**
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
 */const mt=new an("@firebase/auth");function Qc(t,...e){mt.logLevel<=F.WARN&&mt.warn(`Auth (${dn}): ${t}`,...e)}function ft(t,...e){mt.logLevel<=F.ERROR&&mt.error(`Auth (${dn}): ${t}`,...e)}/**
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
 */function Tr(t,...e){throw En(t,...e)}function Pi(t,...e){return En(t,...e)}function Zc(t,e,n){const r=Object.assign(Object.assign({},Xc()),{[e]:n});return new ke("auth","Firebase",r).create(e,{appName:t.name})}function En(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Ni.create(t,...e)}function $(t,e,...n){if(!t)throw En(e,...n)}function Je(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ft(e),new Error(e)}function vt(t,e){t||Je(e)}function el(){return kr()==="http:"||kr()==="https:"}function kr(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tl(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(el()||zr()||"connection"in navigator)?navigator.onLine:!0}function nl(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class it{constructor(e,n){this.shortDelay=e,this.longDelay=n,vt(n>e,"Short delay should be less than long delay!"),this.isMobile=gs()||ms()}get(){return tl()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function rl(t,e){vt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Ri{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Je("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Je("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Je("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const il={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sl=new it(3e4,6e4);function Li(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function yt(t,e,n,r,i={}){return Mi(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=Wr(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode),Ri.fetch()($i(t,t.config.apiHost,n,c),Object.assign({method:e,headers:a,referrerPolicy:"no-referrer"},s))})}async function Mi(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},il),e);try{const i=new ol(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw dt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[a,u]=c.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw dt(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw dt(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw dt(t,"user-disabled",o);const l=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Zc(t,l,u);Tr(t,l)}}catch(i){if(i instanceof me)throw i;Tr(t,"network-request-failed",{message:String(i)})}}function $i(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?rl(t.config,i):`${t.config.apiScheme}://${i}`}class ol{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Pi(this.auth,"network-request-failed")),sl.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function dt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Pi(t,e,r);return i.customData._tokenResponse=n,i}/**
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
 */async function al(t,e){return yt(t,"POST","/v1/accounts:delete",e)}async function cl(t,e){return yt(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ye(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ll(t,e=!1){const n=Se(t),r=await n.getIdToken(e),i=Ui(r);$(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ye(Ht(i.auth_time)),issuedAtTime:Ye(Ht(i.iat)),expirationTime:Ye(Ht(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ht(t){return Number(t)*1e3}function Ui(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ft("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hr(n);return i?JSON.parse(i):(ft("Failed to decode base64 JWT payload"),null)}catch(i){return ft("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ul(t){const e=Ui(t);return $(e,"internal-error"),$(typeof e.exp<"u","internal-error"),$(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zt(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof me&&dl(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dl({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class fl{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Bi{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ye(this.lastLoginAt),this.creationTime=Ye(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function _t(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zt(t,cl(n,{idToken:r}));$(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?gl(s.providerUserInfo):[],c=pl(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(c!=null&&c.length),l=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new Bi(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function hl(t){const e=Se(t);await _t(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pl(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function gl(t){return t.map(e=>{var{providerId:n}=e,r=Di(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function ml(t,e){const n=await Mi(t,{},async()=>{const r=Wr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=$i(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Ri.fetch()(o,{method:"POST",headers:c,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vl(t,e){return yt(t,"POST","/v2/accounts:revokeToken",Li(t,e))}/**
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
 */class et{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){$(e.idToken,"internal-error"),$(typeof e.idToken<"u","internal-error"),$(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ul(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return $(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await ml(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new et;return r&&($(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&($(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&($(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new et,this.toJSON())}_performRefresh(){return Je("not implemented")}}/**
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
 */function Ie(t,e){$(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ze{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Di(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fl(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Bi(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zt(this,this.stsTokenManager.getToken(this.auth,e));return $(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ll(this,e)}reload(){return hl(this)}_assign(e){this!==e&&($(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ze(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){$(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await _t(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zt(this,al(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,c,a,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,b=(i=n.email)!==null&&i!==void 0?i:void 0,h=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,A=(o=n.photoURL)!==null&&o!==void 0?o:void 0,f=(c=n.tenantId)!==null&&c!==void 0?c:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,x=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:S,emailVerified:O,isAnonymous:_,providerData:k,stsTokenManager:V}=n;$(S&&V,e,"internal-error");const j=et.fromJSON(this.name,V);$(typeof S=="string",e,"internal-error"),Ie(d,e.name),Ie(b,e.name),$(typeof O=="boolean",e,"internal-error"),$(typeof _=="boolean",e,"internal-error"),Ie(h,e.name),Ie(A,e.name),Ie(f,e.name),Ie(T,e.name),Ie(x,e.name),Ie(m,e.name);const K=new ze({uid:S,auth:e,email:b,emailVerified:O,displayName:d,isAnonymous:_,photoURL:A,phoneNumber:h,tenantId:f,stsTokenManager:j,createdAt:x,lastLoginAt:m});return k&&Array.isArray(k)&&(K.providerData=k.map(W=>Object.assign({},W))),T&&(K._redirectEventId=T),K}static async _fromIdTokenResponse(e,n,r=!1){const i=new et;i.updateFromServerResponse(n);const s=new ze({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _t(s),s}}/**
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
 */const Sr=new Map;function Pe(t){vt(t instanceof Function,"Expected a class definition");let e=Sr.get(t);return e?(vt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sr.set(t,e),e)}/**
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
 */class Fi{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fi.type="NONE";const Ar=Fi;/**
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
 */function jt(t,e,n){return`firebase:${t}:${e}:${n}`}class Ke{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=jt(this.userKey,i.apiKey,s),this.fullPersistenceKey=jt("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ze._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ke(Pe(Ar),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Pe(Ar);const o=jt(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const l=await u._get(o);if(l){const d=ze._fromJSON(e,l);u!==s&&(c=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ke(s,e,r):(s=a[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ke(s,e,r))}}/**
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
 */function Cr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(yl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_l(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(El(e))return"Blackberry";if(Tl(e))return"Webos";if(bl(e))return"Safari";if((e.includes("chrome/")||wl(e))&&!e.includes("edge/"))return"Chrome";if(Il(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function _l(t=de()){return/firefox\//i.test(t)}function bl(t=de()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function wl(t=de()){return/crios\//i.test(t)}function yl(t=de()){return/iemobile/i.test(t)}function Il(t=de()){return/android/i.test(t)}function El(t=de()){return/blackberry/i.test(t)}function Tl(t=de()){return/webos/i.test(t)}/**
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
 */function Vi(t,e=[]){let n;switch(t){case"Browser":n=Cr(de());break;case"Worker":n=`${Cr(de())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${dn}/${r}`}/**
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
 */class kl{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const a=e(s);o(a)}catch(a){c(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function Sl(t,e={}){return yt(t,"GET","/v2/passwordPolicy",Li(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const Al=6;class Cl{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Al,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,c;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(c=a.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Dl{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dr(this),this.idTokenSubscription=new Dr(this),this.beforeStateQueue=new kl(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ni,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Pe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ke.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===c)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return $(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await _t(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nl()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&$(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&$(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Pe(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Sl(this),n=new Cl(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ke("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vl(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Pe(e)||this._popupRedirectResolver;$(n,this,"argument-error"),this.redirectPersistenceManager=await Ke.create(this,[Pe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if($(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return $(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Qc(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ol(t){return Se(t)}class Dr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ws(n=>this.observer=n)}get next(){return $(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Nl(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Pe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}new it(3e4,6e4);/**
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
 */new it(2e3,1e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new it(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC.
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
 */new it(5e3,15e3);var Or="@firebase/auth",Nr="1.5.1";/**
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
 */class Pl{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){$(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Rl(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ll(t){ue(new ce("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;$(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vi(t)},u=new Dl(r,i,s,a);return Nl(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ue(new ce("auth-internal",e=>{const n=Ol(e.getProvider("auth").getImmediate());return(r=>new Pl(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),oe(Or,Nr,Rl(t)),oe(Or,Nr,"esm2017")}/**
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
 */const Ml=5*60;hs("authIdTokenMaxAge");Ll("Browser");function Pr(t){let e,n,r,i="×",s,o,c,a,u,l;return c=new Ki({props:{func:t[13]}}),{c(){e=y("div"),n=y("div"),r=y("button"),r.textContent=i,s=R(),o=y("div"),Y(c.$$.fragment),this.h()},l(d){e=I(d,"DIV",{class:!0});var b=C(e);n=I(b,"DIV",{class:!0});var h=C(n);r=I(h,"BUTTON",{class:!0,"data-svelte-h":!0}),q(r)!=="svelte-1vf4byn"&&(r.textContent=i),s=L(h),o=I(h,"DIV",{class:!0});var A=C(o);X(c.$$.fragment,A),A.forEach(g),h.forEach(g),b.forEach(g),this.h()},h(){p(r,"class","close-button svelte-z94g8o"),p(o,"class","content svelte-z94g8o"),p(n,"class","dialog-box svelte-z94g8o"),p(e,"class","overlay svelte-z94g8o")},m(d,b){B(d,e,b),v(e,n),v(n,r),v(n,s),v(n,o),Q(c,o,null),a=!0,u||(l=[re(r,"click",t[12]),re(n,"click",xl),re(e,"click",t[12])],u=!0)},p(d,b){const h={};b[0]&2&&(h.func=d[13]),c.$set(h)},i(d){a||(D(c.$$.fragment,d),a=!0)},o(d){U(c.$$.fragment,d),a=!1},d(d){d&&g(e),Z(c),u=!1,Lr(l)}}}function $l(t){let e,n;return e=new qi({}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){Q(e,r,i),n=!0},p:Xe,i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function Ul(t){let e,n;return e=new Wi({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[24]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){Q(e,r,i),n=!0},p(r,i){const s={};i[0]&8&&(s.ID=r[3].id),i[0]&4&&(s.c=!r[2]),i[0]&8&&(s.description=r[3].text?r[3].text:""),i[0]&8&&(s.title=r[3].title),i[0]&8&&(s.duration=r[3].duration),e.$set(s)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function Bl(t){let e,n;return e=new Ur({props:{f:!0,cardsData:[...t[5]]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){Q(e,r,i),n=!0},p(r,i){const s={};i[0]&32&&(s.cardsData=[...r[5]]),e.$set(s)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function Fl(t){let e,n;return e=new Ur({props:{f:!1,cardsData:[...t[4]]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,i){Q(e,r,i),n=!0},p(r,i){const s={};i[0]&16&&(s.cardsData=[...r[4]]),e.$set(s)},i(r){n||(D(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Z(e,r)}}}function Vl(t){let e,n="Fellowships",r,i,s,o,c="Courses",a,u,l,d,b,h,A;return i=new Vn({props:{f:!0,onClick:t[22],cardsData:[...t[5]]}}),u=new Vn({props:{f:!1,onClick:t[23],cardsData:[...t[4]]}}),d=new Zi({props:{blogs:t[7]}}),h=new ss({props:{data:t[6]}}),{c(){e=y("div"),e.textContent=n,r=R(),Y(i.$$.fragment),s=R(),o=y("div"),o.textContent=c,a=R(),Y(u.$$.fragment),l=R(),Y(d.$$.fragment),b=R(),Y(h.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0,"data-svelte-h":!0}),q(e)!=="svelte-9rjion"&&(e.textContent=n),r=L(f),X(i.$$.fragment,f),s=L(f),o=I(f,"DIV",{class:!0,"data-svelte-h":!0}),q(o)!=="svelte-4wj5r"&&(o.textContent=c),a=L(f),X(u.$$.fragment,f),l=L(f),X(d.$$.fragment,f),b=L(f),X(h.$$.fragment,f),this.h()},h(){p(e,"class","title"),p(o,"class","title")},m(f,T){B(f,e,T),B(f,r,T),Q(i,f,T),B(f,s,T),B(f,o,T),B(f,a,T),Q(u,f,T),B(f,l,T),Q(d,f,T),B(f,b,T),Q(h,f,T),A=!0},p(f,T){const x={};T[0]&32&&(x.cardsData=[...f[5]]),i.$set(x);const m={};T[0]&16&&(m.cardsData=[...f[4]]),u.$set(m);const S={};T[0]&128&&(S.blogs=f[7]),d.$set(S);const O={};T[0]&64&&(O.data=f[6]),h.$set(O)},i(f){A||(D(i.$$.fragment,f),D(u.$$.fragment,f),D(d.$$.fragment,f),D(h.$$.fragment,f),A=!0)},o(f){U(i.$$.fragment,f),U(u.$$.fragment,f),U(d.$$.fragment,f),U(h.$$.fragment,f),A=!1},d(f){f&&(g(e),g(r),g(s),g(o),g(a),g(l),g(b)),Z(i,f),Z(u,f),Z(d,f),Z(h,f)}}}function Hl(t){let e,n,r,i,s='<img src="Logo.png" width="80px" style="display: relative; top:20px;"/>',o,c,a,u,l="Courses",d,b,h="Fellowships",A,f,T="Contact us",x,m,S="Login",O,_,k,V,j,K,W,Fe="Courses",ve,fe,It="Fellowships",st,he,Et="Contact us",w,N,G,ee,ne,P,_e="About us",qe,be,ot,at,we,ie,se,ct,le,Ve,Ae,Tt,Ce,Tn='<a href="#" class="social-icon svelte-z94g8o">Facebook</a> <a href="#" class="social-icon svelte-z94g8o">Twitter</a> <a href="#" class="social-icon svelte-z94g8o">Instagram</a> <a href="#" class="social-icon svelte-z94g8o">YouTube</a> <a href="#" class="social-icon svelte-z94g8o">LinkedIn</a>',De,kt,kn,z=t[9]&&Pr(t);const Sn=[Vl,Fl,Bl,Ul,$l],ye=[];function An(E,M){return E[1]==0?0:E[1]==1?1:E[1]==2?2:E[1]==3?3:4}return ie=An(t),se=ye[ie]=Sn[ie](t),Ae=new zi({}),{c(){z&&z.c(),e=R(),n=y("header"),r=y("div"),i=y("h1"),i.innerHTML=s,o=R(),c=y("nav"),a=y("ul"),u=y("li"),u.textContent=l,d=R(),b=y("li"),b.textContent=h,A=R(),f=y("li"),f.textContent=T,x=R(),m=y("div"),m.textContent=S,O=R(),_=$n("svg"),k=$n("path"),V=R(),j=y("div"),K=y("ul"),W=y("li"),W.textContent=Fe,ve=R(),fe=y("li"),fe.textContent=It,st=R(),he=y("li"),he.textContent=Et,N=R(),G=y("div"),ee=y("div"),ne=y("div"),P=y("p"),P.textContent=_e,qe=R(),be=y("p"),ot=tn(t[0]),at=R(),we=y("div"),se.c(),ct=R(),le=y("div"),Ve=y("div"),Y(Ae.$$.fragment),Tt=R(),Ce=y("div"),Ce.innerHTML=Tn,this.h()},l(E){z&&z.l(E),e=L(E),n=I(E,"HEADER",{id:!0,class:!0});var M=C(n);r=I(M,"DIV",{style:!0});var He=C(r);i=I(He,"H1",{"data-svelte-h":!0}),q(i)!=="svelte-16z141n"&&(i.innerHTML=s),He.forEach(g),o=L(M),c=I(M,"NAV",{class:!0});var Cn=C(c);a=I(Cn,"UL",{class:!0});var je=C(a);u=I(je,"LI",{class:!0,"data-svelte-h":!0}),q(u)!=="svelte-f1crxg"&&(u.textContent=l),d=L(je),b=I(je,"LI",{class:!0,"data-svelte-h":!0}),q(b)!=="svelte-1my9ef0"&&(b.textContent=h),A=L(je),f=I(je,"LI",{class:!0,"data-svelte-h":!0}),q(f)!=="svelte-12veshn"&&(f.textContent=T),je.forEach(g),Cn.forEach(g),x=L(M),m=I(M,"DIV",{class:!0,id:!0,text:!0,style:!0,"data-svelte-h":!0}),q(m)!=="svelte-4s12t"&&(m.textContent=S),O=L(M),_=Un(M,"svg",{id:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,class:!0,viewBox:!0});var Dn=C(_);k=Un(Dn,"path",{d:!0}),C(k).forEach(g),Dn.forEach(g),M.forEach(g),V=L(E),j=I(E,"DIV",{class:!0,id:!0,style:!0});var On=C(j);K=I(On,"UL",{class:!0});var xe=C(K);W=I(xe,"LI",{class:!0,"data-svelte-h":!0}),q(W)!=="svelte-15gd3eg"&&(W.textContent=Fe),ve=L(xe),fe=I(xe,"LI",{class:!0,"data-svelte-h":!0}),q(fe)!=="svelte-1w3oh8g"&&(fe.textContent=It),st=L(xe),he=I(xe,"LI",{class:!0,"data-svelte-h":!0}),q(he)!=="svelte-1pessln"&&(he.textContent=Et),xe.forEach(g),On.forEach(g),N=L(E),G=I(E,"DIV",{class:!0});var Nn=C(G);ee=I(Nn,"DIV",{class:!0});var Pn=C(ee);ne=I(Pn,"DIV",{class:!0});var lt=C(ne);P=I(lt,"P",{style:!0,"data-svelte-h":!0}),q(P)!=="svelte-1mkz37p"&&(P.textContent=_e),qe=L(lt),be=I(lt,"P",{style:!0});var Rn=C(be);ot=nn(Rn,t[0]),Rn.forEach(g),lt.forEach(g),Pn.forEach(g),Nn.forEach(g),at=L(E),we=I(E,"DIV",{class:!0});var Ln=C(we);se.l(Ln),Ln.forEach(g),ct=L(E),le=I(E,"DIV",{class:!0,style:!0});var ut=C(le);Ve=I(ut,"DIV",{class:!0});var Mn=C(Ve);X(Ae.$$.fragment,Mn),Mn.forEach(g),Tt=L(ut),Ce=I(ut,"DIV",{class:!0,"data-svelte-h":!0}),q(Ce)!=="svelte-112zi31"&&(Ce.innerHTML=Tn),ut.forEach(g),this.h()},h(){H(r,"position","absolute"),H(r,"top","-15px"),H(r,"left","15px"),p(u,"class","svelte-z94g8o"),p(b,"class","svelte-z94g8o"),p(f,"class","svelte-z94g8o"),p(a,"class","header-list svelte-z94g8o"),p(c,"class","svelte-z94g8o"),p(m,"class","button svelte-z94g8o"),p(m,"id","loginbtn"),p(m,"text","Login"),H(m,"position","absolute"),H(m,"right","30px"),H(m,"top","20"),p(k,"d","M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"),p(_,"id","menuio"),p(_,"xmlns","http://www.w3.org/2000/svg"),p(_,"x","0px"),p(_,"y","0px"),p(_,"width","50"),p(_,"height","50"),p(_,"class","menu svelte-z94g8o"),p(_,"viewBox","0 0 50 50"),p(n,"id","header"),p(n,"class","svelte-z94g8o"),p(W,"class","svelte-z94g8o"),p(fe,"class","svelte-z94g8o"),p(he,"class","svelte-z94g8o"),p(K,"class","svelte-z94g8o"),p(j,"class","side-menu svelte-z94g8o"),p(j,"id","menuu"),p(j,"style",w=`display: ${t[10]?"block":"none"};`),H(P,"position","relative"),H(P,"right","70px"),H(be,"font-weight","300"),H(be,"text-align","left"),H(be,"font-size","20px"),p(ne,"class","image-text svelte-z94g8o"),p(ee,"class","image-overlay svelte-z94g8o"),p(G,"class","header-image svelte-z94g8o"),p(we,"class","scroll-box svelte-z94g8o"),p(Ve,"class","map-box svelte-z94g8o"),p(Ce,"class","social-media-box svelte-z94g8o"),p(le,"class","footer-container svelte-z94g8o"),H(le,"top",t[8]+690+"px")},m(E,M){z&&z.m(E,M),B(E,e,M),B(E,n,M),v(n,r),v(r,i),v(n,o),v(n,c),v(c,a),v(a,u),v(a,d),v(a,b),v(a,A),v(a,f),v(n,x),v(n,m),v(n,O),v(n,_),v(_,k),B(E,V,M),B(E,j,M),v(j,K),v(K,W),v(K,ve),v(K,fe),v(K,st),v(K,he),B(E,N,M),B(E,G,M),v(G,ee),v(ee,ne),v(ne,P),v(ne,qe),v(ne,be),v(be,ot),B(E,at,M),B(E,we,M),ye[ie].m(we,null),B(E,ct,M),B(E,le,M),v(le,Ve),Q(Ae,Ve,null),v(le,Tt),v(le,Ce),De=!0,kt||(kn=[re(i,"click",t[14]),re(u,"click",{function:t[15]}),re(b,"click",t[16]),re(f,"click",t[17]),re(m,"click",t[11]),re(_,"click",t[18]),re(W,"click",t[19]),re(fe,"click",t[20]),re(he,"click",t[21])],kt=!0)},p(E,M){E[9]?z?(z.p(E,M),M[0]&512&&D(z,1)):(z=Pr(E),z.c(),D(z,1),z.m(e.parentNode,e)):z&&(Re(),U(z,1,1,()=>{z=null}),Le()),(!De||M[0]&1024&&w!==(w=`display: ${E[10]?"block":"none"};`))&&p(j,"style",w),(!De||M[0]&1)&&rn(ot,E[0]);let He=ie;ie=An(E),ie===He?ye[ie].p(E,M):(Re(),U(ye[He],1,1,()=>{ye[He]=null}),Le(),se=ye[ie],se?se.p(E,M):(se=ye[ie]=Sn[ie](E),se.c()),D(se,1),se.m(we,null)),(!De||M[0]&256)&&H(le,"top",E[8]+690+"px")},i(E){De||(D(z),D(se),D(Ae.$$.fragment,E),De=!0)},o(E){U(z),U(se),U(Ae.$$.fragment,E),De=!1},d(E){E&&(g(e),g(n),g(V),g(j),g(N),g(G),g(at),g(we),g(ct),g(le)),z&&z.d(E),ye[ie].d(),Z(Ae),kt=!1,Lr(kn)}}}function jl(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const xl=t=>t.stopPropagation();function zl(t,e,n){let r="",i=0;async function s(w,N,G){const ee=await fetch("http://localhost:3000/"+w,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(N)});if(!ee.ok)throw Gi("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${ee.status}`);const ne=await ee.json();return G&&G(),ne}let o=!1;async function c(){s("n/gp").then(w=>{w=w.d,n(6,A=w.map(N=>Object({title:N.productName,text:"Price : "+N.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+N.productID+"/0",discount:N.discount})))})}async function a(){s("n/gc").then(w=>{w=w.d,n(4,b=w.map(N=>Object({title:N.courseName,id:N.courseID,text:N.courseDetails,duration:N.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+N.courseID,clickHandler:()=>{const G=document.createElement("a");G.href="/courses/"+N.courseID,G.click(),N.courseID,n(2,o=!1)}}))),console.log(b)})}let u;async function l(){s("n/gf").then(w=>{w=w.d,n(5,h=w.map(N=>Object({id:N.fellowshipID,title:N.fellowshipName,duration:N.fellowshipDuration,text:N.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+N.fellowshipID,clickHandler:()=>{N.fellowshipID,n(2,o=!0)}})))})}async function d(){s("n/gb").then(w=>{w=w.d,n(7,f=w.map(N=>Object({id:N.blogID,text:N.blogDetails,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+N.blogID,clickHandler:()=>{}})))})}let b=[],h=[],A=[],f=[];function T(){const w=document.querySelector(".scroll-box");w&&n(8,x=Number(getComputedStyle(w).height.split("px")[0]))}let x=0;en(()=>{document.body.addEventListener("click",function(P){console.log(P.target.id),console.log(_),P.target.id!="menuuu"&&P.target.id!="menuio"&&_&&n(10,_=!1)}),setInterval(()=>{T()},500),s("aus").then(P=>{n(0,r=P.d)}),window.addEventListener("resize",T),T();const N=Jr({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),G=Gc(N);Jc(G,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(P=>{console.log(P)}),Yc(G,P=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(P)}),Promise.all([a(),l(),d(),c()]).then(()=>{addEventListener("ocd",P=>{console.log(P.detail),P.detail.f?(console.log(h),console.log(P.detail.id),n(3,u=h.filter(_e=>_e.id==P.detail.id)[0])):n(3,u=b.filter(_e=>_e.id==P.detail.id)[0])})});function ee(){var P=window.scrollY||document.documentElement.scrollTop,_e=document.documentElement.scrollHeight-window.innerHeight,qe=P/_e*100;return qe}const ne=()=>{var P=document.getElementById("header");window.scrollY||document.documentElement.scrollTop,document.documentElement.hei,P.style.borderBottomLeftRadius=ee()-70+"px",P.style.borderBottomRightRadius=ee()-70+"px",P.style.backgroundColor="rgba(46, 59, 111, "+ee()/20+")"};return window.addEventListener("scroll",ne),document.body.style.overflow=m?"hidden":"auto",()=>{window.removeEventListener("scroll",ne),window.removeEventListener("resize",T),document.body.style.overflow="auto"}}),Hi(()=>{T()});let m=!1;function S(){n(9,m=!0)}function O(){n(9,m=!1)}jl().then(w=>{w||console.log("Developer tools are closed.")});let _=!1;return[r,i,o,u,b,h,A,f,x,m,_,S,O,()=>{n(1,i=4),O()},function(){n(1,i=0)},function(){const w=document.createElement("a");w.href="/courses",w.click()},function(){const w=document.createElement("a");w.href="/fellowships",w.click()},function(){const w=document.createElement("a");w.href="/contact-us",w.click()},()=>{n(10,_=!_)},function(){console.log("CLICKED HERE");const w=document.createElement("a");w.href="/courses",w.click()},function(){console.log("clicked here");const w=document.createElement("a");w.href="/fellowships",w.click()},function(){const w=document.createElement("a");w.href="/contact-us",w.click()},function(){const w=document.createElement("a");w.href="/fellowships",w.click()},function(){const w=document.createElement("a");w.href="/courses",w.click()},function(){const w=document.createElement("a");w.href="/contact-us",w.click()}]}class ru extends nt{constructor(e){super(),rt(this,e,zl,Hl,tt,{},null,[-1,-1])}}export{ru as component};
