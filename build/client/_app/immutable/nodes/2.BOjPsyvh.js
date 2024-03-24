import{s as Ae,e as I,h as H,b as E,k as P,f as g,j as V,m as b,o as A,i as M,p as v,v as lt,w as ut,t as $e,d as te,l as Oe,q as re,r as Be,n as Xe,y as ft,z as _e,x as we,J as Zn}from"../chunks/scheduler.CvS8aZFR.js";import{S as Ne,i as Me,c as Y,b as X,m as Z,t as x,g as Ze,e as Qe,a as U,d as Q}from"../chunks/index.BLvvEpyq.js";/* empty css                                                     */import{C as Qn}from"../chunks/Card.D96PJUQ_.js";import{e as ae,u as er,d as tr}from"../chunks/each.atBuby31.js";import{B as dn}from"../chunks/Button.CFN36tYL.js";import"../chunks/Map.BFxH1DHB.js";import{G as hn}from"../chunks/Grid.NwZ_fUB7.js";import{L as nr}from"../chunks/Login.Vg29bVck.js";import{C as rr}from"../chunks/CourseData.Dy675Hqb.js";import{C as sr}from"../chunks/Contact.BjX5Srf9.js";import{n as or}from"../chunks/not.DNvn3Bfc.js";import{T as ir}from"../chunks/TopBar.CE0CjEVT.js";import{F as ar}from"../chunks/Footer.BdFhdAVi.js";function At(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function $t(t){let e,n;return e=new Qn({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function cr(t){let e,n,r,s,o,i,a=ae([...t[0],...t[0],...t[0],...t[0]]),c=[];for(let l=0;l<a.length;l+=1)c[l]=$t(At(t,a,l));const u=l=>U(c[l],1,1,()=>{c[l]=null});return o=new dn({props:{text:"Show all ",src:"back-icon.png",radius:"10px",clickHandler:t[1]}}),{c(){e=I("div"),n=I("div");for(let l=0;l<c.length;l+=1)c[l].c();r=H(),s=I("div"),Y(o.$$.fragment),this.h()},l(l){e=E(l,"DIV",{style:!0,class:!0});var f=P(e);n=E(f,"DIV",{class:!0,id:!0});var p=P(n);for(let O=0;O<c.length;O+=1)c[O].l(p);p.forEach(g),f.forEach(g),r=V(l),s=E(l,"DIV",{style:!0});var d=P(s);X(o.$$.fragment,d),d.forEach(g),this.h()},h(){b(n,"class","row svelte-1l32lre"),b(n,"id","row-container"),A(e,"margin-bottom","0"),A(e,"height","406px"),b(e,"class","row svelte-1l32lre"),A(s,"display","grid"),A(s,"place-items","center"),A(s,"margin-bottom","90px"),A(s,"margin-top","20px")},m(l,f){M(l,e,f),v(e,n);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(n,null);M(l,r,f),M(l,s,f),Z(o,s,null),i=!0},p(l,[f]){if(f&5){a=ae([...l[0],...l[0],...l[0],...l[0]]);let d;for(d=0;d<a.length;d+=1){const O=At(l,a,d);c[d]?(c[d].p(O,f),x(c[d],1)):(c[d]=$t(O),c[d].c(),x(c[d],1),c[d].m(n,null))}for(Ze(),d=a.length;d<c.length;d+=1)u(d);Qe()}const p={};f&2&&(p.clickHandler=l[1]),o.$set(p)},i(l){if(!i){for(let f=0;f<a.length;f+=1)x(c[f]);x(o.$$.fragment,l),i=!0}},o(l){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)U(c[f]);U(o.$$.fragment,l),i=!1},d(l){l&&(g(e),g(r),g(s)),lt(c,l),Q(o)}}}function lr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,ut(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class Ot extends Ne{constructor(e){super(),Me(this,e,lr,cr,Ae,{cardsData:0,onClick:1,f:2})}}function Bt(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Nt(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function Mt(t){let e,n;return{c(){e=I("img"),this.h()},l(r){e=E(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){we(e.src,n=t[15].src)||b(e,"src",n),b(e,"alt","Neumorphic Picture"),b(e,"id","blog-image"),b(e,"class","rectangular-image svelte-1tagfac")},m(r,s){M(r,e,s)},p(r,s){s&1&&!we(e.src,n=r[15].src)&&b(e,"src",n)},d(r){r&&g(e)}}}function Pt(t){let e,n=t[14]==t[2]&&Mt(t);return{c(){n&&n.c(),e=_e()},l(r){n&&n.l(r),e=_e()},m(r,s){n&&n.m(r,s),M(r,e,s)},p(r,s){r[14]==r[2]?n?n.p(r,s):(n=Mt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d(r)}}}function Rt(t){let e,n,r=t[0][t[2]].title+"",s,o,i=t[0].length>0&&Lt(t);return{c(){e=I("div"),n=I("h2"),s=$e(r),o=H(),i&&i.c(),this.h()},l(a){e=E(a,"DIV",{class:!0});var c=P(e);n=E(c,"H2",{style:!0,class:!0});var u=P(n);s=Oe(u,r),u.forEach(g),o=V(c),i&&i.l(c),c.forEach(g),this.h()},h(){A(n,"margin","-2px 0 -10px 0"),b(n,"class","svelte-1tagfac"),b(e,"class","captionCont svelte-1tagfac")},m(a,c){M(a,e,c),v(e,n),v(n,s),v(e,o),i&&i.m(e,null)},p(a,c){c&5&&r!==(r=a[0][a[2]].title+"")&&Be(s,r),a[0].length>0?i?i.p(a,c):(i=Lt(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&g(e),i&&i.d()}}}function Lt(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=I("p"),r=$e(n),this.h()},l(s){e=E(s,"P",{class:!0});var o=P(e);r=Oe(o,n),o.forEach(g),this.h()},h(){b(e,"class","svelte-1tagfac")},m(s,o){M(s,e,o),v(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&Be(r,n)},d(s){s&&g(e)}}}function Ht(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=I("div"),this.h()},l(a){n=E(a,"DIV",{style:!0,class:!0}),P(n).forEach(g),this.h()},h(){A(n,"margin-top","10px"),A(n,"margin-bottom","10px"),b(n,"class",r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-1tagfac"),this.first=n},m(a,c){M(a,n,c),s||(o=re(n,"click",i),s=!0)},p(a,c){e=a,c&4&&r!==(r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-1tagfac")&&b(n,"class",r)},d(a){a&&g(n),s=!1,o()}}}function ur(t){let e,n,r,s='<img src="/open.png" style="right: 10%; width: 33px;" class="svelte-1tagfac"/>',o,i,a,c,u,l,f,p,d,O="<",h,D,K=">",S,C,T,F=[],W=new Map,J,ee,z=ae(t[0]),B=[];for(let w=0;w<z.length;w+=1)B[w]=Pt(Nt(t,z,w));let R=t[0].length>0&&Rt(t),_=ae([0,1,2]);const k=w=>w[14];for(let w=0;w<3;w+=1){let $=Bt(t,_,w),y=k($);W.set(y,F[w]=Ht(y,$))}return{c(){e=I("div"),n=I("div"),r=I("button"),r.innerHTML=s,o=H(),i=I("div"),a=I("div"),c=$e(t[1]),u=H(),l=I("div"),f=I("div");for(let w=0;w<B.length;w+=1)B[w].c();p=H(),d=I("div"),d.textContent=O,h=H(),D=I("div"),D.textContent=K,S=H(),R&&R.c(),C=H(),T=I("div");for(let w=0;w<3;w+=1)F[w].c();this.h()},l(w){e=E(w,"DIV",{class:!0});var $=P(e);n=E($,"DIV",{class:!0});var y=P(n);r=E(y,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),te(r)!=="svelte-hwduld"&&(r.innerHTML=s),y.forEach(g),o=V($),i=E($,"DIV",{style:!0,class:!0});var L=P(i);a=E(L,"DIV",{class:!0});var Ie=P(a);c=Oe(Ie,t[1]),Ie.forEach(g),L.forEach(g),u=V($),l=E($,"DIV",{class:!0});var G=P(l);f=E(G,"DIV",{class:!0});var se=P(f);for(let N=0;N<B.length;N+=1)B[N].l(se);p=V(se),d=E(se,"DIV",{class:!0,"data-svelte-h":!0}),te(d)!=="svelte-nl1vs9"&&(d.textContent=O),h=V(se),D=E(se,"DIV",{class:!0,"data-svelte-h":!0}),te(D)!=="svelte-dra8cl"&&(D.textContent=K),se.forEach(g),S=V(G),R&&R.l(G),C=V(G),T=E(G,"DIV",{class:!0});var m=P(T);for(let N=0;N<3;N+=1)F[N].l(m);m.forEach(g),G.forEach(g),$.forEach(g),this.h()},h(){A(r,"padding","3px 4px"),A(r,"float","inline-end"),A(r,"right","10%"),A(r,"bottom","13px"),b(r,"class","svelte-1tagfac"),b(n,"class","icon svelte-1tagfac"),b(a,"class","navy-title svelte-1tagfac"),A(i,"display","flex"),A(i,"justify-content","space-between"),A(i,"align-items","center"),A(i,"padding","10px"),b(i,"class","svelte-1tagfac"),b(d,"class","nextImageBtn svelte-1tagfac"),b(D,"class","previousImageBtn svelte-1tagfac"),b(f,"class","imageCont svelte-1tagfac"),b(T,"class","dots-container svelte-1tagfac"),b(l,"class","postCard svelte-1tagfac"),b(e,"class","svelte-1tagfac")},m(w,$){M(w,e,$),v(e,n),v(n,r),v(e,o),v(e,i),v(i,a),v(a,c),v(e,u),v(e,l),v(l,f);for(let y=0;y<B.length;y+=1)B[y]&&B[y].m(f,null);v(f,p),v(f,d),v(f,h),v(f,D),v(l,S),R&&R.m(l,null),v(l,C),v(l,T);for(let y=0;y<3;y+=1)F[y]&&F[y].m(T,null);J||(ee=[re(r,"click",t[5]),re(d,"click",t[6]),re(D,"click",t[7])],J=!0)},p(w,[$]){if($&2&&Be(c,w[1]),$&5){z=ae(w[0]);let y;for(y=0;y<z.length;y+=1){const L=Nt(w,z,y);B[y]?B[y].p(L,$):(B[y]=Pt(L),B[y].c(),B[y].m(f,p))}for(;y<B.length;y+=1)B[y].d(1);B.length=z.length}w[0].length>0?R?R.p(w,$):(R=Rt(w),R.c(),R.m(l,C)):R&&(R.d(1),R=null),$&12&&(_=ae([0,1,2]),F=er(F,$,k,1,w,_,W,T,tr,Ht,null,Bt))},i:Xe,o:Xe,d(w){w&&g(e),lt(B,w),R&&R.d();for(let $=0;$<3;$+=1)F[$].d();J=!1,ft(ee)}}}function fr(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(p){console.log(p),n(2,i=p)}ut(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function d(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}d(),setInterval(d,7e3)});const c=()=>{location.href="/blogs"},u=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},l=()=>{n(2,i=(i+1)%o.length)},f=p=>a(p);return t.$$set=p=>{"firstTitle"in p&&n(1,r=p.firstTitle),"secondTitle"in p&&n(4,s=p.secondTitle),"blogs"in p&&n(0,o=p.blogs)},[o,r,i,a,s,c,u,l,f]}class dr extends Ne{constructor(e){super(),Me(this,e,fr,ur,Ae,{firstTitle:1,secondTitle:4,blogs:0})}}function Vt(t,e,n){const r=t.slice();return r[2]=e[n],r[4]=n,r}function jt(t){let e,n,r,s;return{c(){e=I("div"),n=I("div"),r=I("img"),this.h()},l(o){e=E(o,"DIV",{class:!0});var i=P(e);n=E(i,"DIV",{class:!0,style:!0});var a=P(n);r=E(a,"IMG",{src:!0,class:!0}),a.forEach(g),i.forEach(g),this.h()},h(){we(r.src,s=t[0][t[1]%t[0].length].src)||b(r,"src",s),b(r,"class","svelte-av7ac4"),b(n,"class","postCard svelte-av7ac4"),A(n,"width","270px"),A(n,"height","270px"),A(n,"border-radius","10px"),A(n,"background-color","#e6e7ee"),A(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),A(n,"margin-bottom","70px"),b(e,"class","image-card svelte-av7ac4")},m(o,i){M(o,e,i),v(e,n),v(n,r)},p(o,i){i&3&&!we(r.src,s=o[0][o[1]%o[0].length].src)&&b(r,"src",s)},d(o){o&&g(e)}}}function Ft(t){let e,n=ae(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=Kt(Vt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=_e()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=_e()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);M(s,e,o)},p(s,o){if(o&3){n=ae(s[0]);let i;for(i=0;i<n.length;i+=1){const a=Vt(s,n,i);r[i]?r[i].p(a,o):(r[i]=Kt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&g(e),lt(r,s)}}}function xt(t){let e,n,r,s;return{c(){e=I("div"),n=I("img"),s=H(),this.h()},l(o){e=E(o,"DIV",{class:!0,style:!0});var i=P(e);n=E(i,"IMG",{src:!0,class:!0}),i.forEach(g),s=V(o),this.h()},h(){we(n.src,r=t[0][(t[1]+1)%t[0].length].src)||b(n,"src",r),b(n,"class","svelte-av7ac4"),b(e,"class","postCard svelte-av7ac4"),A(e,"width","170px"),A(e,"height","170px"),A(e,"border-radius","10px"),A(e,"background-color","#e6e7ee"),A(e,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),A(e,"margin-bottom","70px")},m(o,i){M(o,e,i),v(e,n),M(o,s,i)},p(o,i){i&3&&!we(n.src,r=o[0][(o[1]+1)%o[0].length].src)&&b(n,"src",r)},d(o){o&&(g(e),g(s))}}}function Kt(t){let e,n=t[4]+1!=t[0].length&&xt(t);return{c(){n&&n.c(),e=_e()},l(r){n&&n.l(r),e=_e()},m(r,s){n&&n.m(r,s),M(r,e,s)},p(r,s){r[4]+1!=r[0].length?n?n.p(r,s):(n=xt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d(r)}}}function hr(t){let e,n,r="Products",s,o,i,a,c,u='<div class="black-title svelte-av7ac4">Title</div> <div class="small-note svelte-av7ac4">A small note goes here.</div> <div class="big-text svelte-av7ac4">Big bold black text.</div>',l,f,p,d,O,h,D="",K,S=t[0].length>=1&&jt(t),C=t[0].length>1&&Ft(t);return d=new dn({props:{text:"Show Call",src:"/back-icon.png"}}),{c(){e=I("div"),n=I("div"),n.textContent=r,s=H(),o=I("div"),i=I("div"),S&&S.c(),a=H(),c=I("div"),c.innerHTML=u,l=H(),f=I("div"),C&&C.c(),p=H(),Y(d.$$.fragment),O=H(),h=I("div"),h.innerHTML=D,this.h()},l(T){e=E(T,"DIV",{style:!0});var F=P(e);n=E(F,"DIV",{class:!0,"data-svelte-h":!0}),te(n)!=="svelte-dyb2yo"&&(n.textContent=r),s=V(F),o=E(F,"DIV",{class:!0});var W=P(o);i=E(W,"DIV",{class:!0});var J=P(i);S&&S.l(J),a=V(J),c=E(J,"DIV",{class:!0,"data-svelte-h":!0}),te(c)!=="svelte-1sx5tfn"&&(c.innerHTML=u),J.forEach(g),l=V(W),f=E(W,"DIV",{class:!0});var ee=P(f);C&&C.l(ee),p=V(ee),X(d.$$.fragment,ee),ee.forEach(g),O=V(W),h=E(W,"DIV",{class:!0,"data-svelte-h":!0}),te(h)!=="svelte-1866ndo"&&(h.innerHTML=D),W.forEach(g),F.forEach(g),this.h()},h(){b(n,"class","navy-title svelte-av7ac4"),b(c,"class","text-container svelte-av7ac4"),b(i,"class","first-row svelte-av7ac4"),b(f,"class","row-images svelte-av7ac4"),b(h,"class","show-call-button svelte-av7ac4"),b(o,"class","neumorphic-card svelte-av7ac4"),A(e,"margin-top","90px")},m(T,F){M(T,e,F),v(e,n),v(e,s),v(e,o),v(o,i),S&&S.m(i,null),v(i,a),v(i,c),v(o,l),v(o,f),C&&C.m(f,null),v(f,p),Z(d,f,null),v(o,O),v(o,h),K=!0},p(T,[F]){T[0].length>=1?S?S.p(T,F):(S=jt(T),S.c(),S.m(i,a)):S&&(S.d(1),S=null),T[0].length>1?C?C.p(T,F):(C=Ft(T),C.c(),C.m(f,p)):C&&(C.d(1),C=null)},i(T){K||(x(d.$$.fragment,T),K=!0)},o(T){U(d.$$.fragment,T),K=!1},d(T){T&&g(e),S&&S.d(),C&&C.d(),Q(d)}}}function pr(t,e,n){let{data:r=[]}=e,s=0;return setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),t.$$set=o=>{"data"in o&&n(0,r=o.data)},[r,s]}class gr extends Ne{constructor(e){super(),Me(this,e,pr,hr,Ae,{data:0})}}var Ut={};/**
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
 */const pn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,d=u&63;c||(d=64,i||(p=64)),r.push(n[l],n[f],n[p],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||u==null||f==null)throw new br;const p=o<<2|a>>4;if(r.push(p),u!==64){const d=a<<4&240|u>>2;if(r.push(d),f!==64){const O=u<<6&192|f;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vr=function(t){const e=pn(t);return gn.encodeByteArray(e,!0)},mn=function(t){return vr(t).replace(/\./g,"")},_r=function(t){try{return gn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function wr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yr=()=>wr().__FIREBASE_DEFAULTS__,Ir=()=>{if(typeof process>"u"||typeof Ut>"u")return;const t=Ut.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Er=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Dr=()=>{try{return yr()||Ir()||Er()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bn=()=>{var t;return(t=Dr())===null||t===void 0?void 0:t.config};/**
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
 */class kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function vn(){try{return typeof indexedDB=="object"}catch{return!1}}function _n(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Sr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Cr="FirebaseError";class ye extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cr,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}}class Pe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Tr(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new ye(s,a,r)}}function Tr(t,e){return t.replace(Ar,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ar=/\{\$([^}]+)}/g;function et(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Wt(o)&&Wt(i)){if(!et(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wt(t){return t!==null&&typeof t=="object"}/**
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
 */function dt(t){return t&&t._delegate?t._delegate:t}class fe{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const de="[DEFAULT]";/**
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
 */class $r{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Br(e))try{this.getOrInitializeService({instanceIdentifier:de})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=de){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=de){return this.instances.has(e)}getOptions(e=de){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Or(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=de){return this.component?this.component.multipleInstances?e:de:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Or(t){return t===de?void 0:t}function Br(t){return t.instantiationMode==="EAGER"}/**
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
 */class Nr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new $r(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var j;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(j||(j={}));const Mr={debug:j.DEBUG,verbose:j.VERBOSE,info:j.INFO,warn:j.WARN,error:j.ERROR,silent:j.SILENT},Pr=j.INFO,Rr={[j.DEBUG]:"log",[j.VERBOSE]:"log",[j.INFO]:"info",[j.WARN]:"warn",[j.ERROR]:"error"},Lr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Hr{constructor(e){this.name=e,this._logLevel=Pr,this._logHandler=Lr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in j))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,j.DEBUG,...e),this._logHandler(this,j.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,j.VERBOSE,...e),this._logHandler(this,j.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,j.INFO,...e),this._logHandler(this,j.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,j.WARN,...e),this._logHandler(this,j.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,j.ERROR,...e),this._logHandler(this,j.ERROR,...e)}}const Vr=(t,e)=>e.some(n=>t instanceof n);let zt,qt;function jr(){return zt||(zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fr(){return qt||(qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wn=new WeakMap,tt=new WeakMap,yn=new WeakMap,He=new WeakMap,ht=new WeakMap;function xr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ie(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&wn.set(n,t)}).catch(()=>{}),ht.set(e,t),e}function Kr(t){if(tt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});tt.set(t,e)}let nt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return tt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ur(t){nt=t(nt)}function Wr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ve(this),e,...n);return yn.set(r,e.sort?e.sort():[e]),ie(r)}:Fr().includes(t)?function(...e){return t.apply(Ve(this),e),ie(wn.get(this))}:function(...e){return ie(t.apply(Ve(this),e))}}function zr(t){return typeof t=="function"?Wr(t):(t instanceof IDBTransaction&&Kr(t),Vr(t,jr())?new Proxy(t,nt):t)}function ie(t){if(t instanceof IDBRequest)return xr(t);if(He.has(t))return He.get(t);const e=zr(t);return e!==t&&(He.set(t,e),ht.set(e,t)),e}const Ve=t=>ht.get(t);function pt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ie(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ie(i.result),c.oldVersion,c.newVersion,ie(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function je(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ie(n).then(()=>{})}const qr=["get","getKey","getAll","getAllKeys","count"],Gr=["put","add","delete","clear"],Fe=new Map;function Gt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fe.get(e))return Fe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qr.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Fe.set(e,o),o}Ur(t=>({...t,get:(e,n,r)=>Gt(e,n)||t.get(e,n,r),has:(e,n)=>!!Gt(e,n)||t.has(e,n)}));/**
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
 */class Jr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rt="@firebase/app",Jt="0.9.25";/**
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
 */const pe=new Hr("@firebase/app"),Xr="@firebase/app-compat",Zr="@firebase/analytics-compat",Qr="@firebase/analytics",es="@firebase/app-check-compat",ts="@firebase/app-check",ns="@firebase/auth",rs="@firebase/auth-compat",ss="@firebase/database",os="@firebase/database-compat",is="@firebase/functions",as="@firebase/functions-compat",cs="@firebase/installations",ls="@firebase/installations-compat",us="@firebase/messaging",fs="@firebase/messaging-compat",ds="@firebase/performance",hs="@firebase/performance-compat",ps="@firebase/remote-config",gs="@firebase/remote-config-compat",ms="@firebase/storage",bs="@firebase/storage-compat",vs="@firebase/firestore",_s="@firebase/firestore-compat",ws="firebase";/**
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
 */const st="[DEFAULT]",ys={[rt]:"fire-core",[Xr]:"fire-core-compat",[Qr]:"fire-analytics",[Zr]:"fire-analytics-compat",[ts]:"fire-app-check",[es]:"fire-app-check-compat",[ns]:"fire-auth",[rs]:"fire-auth-compat",[ss]:"fire-rtdb",[os]:"fire-rtdb-compat",[is]:"fire-fn",[as]:"fire-fn-compat",[cs]:"fire-iid",[ls]:"fire-iid-compat",[us]:"fire-fcm",[fs]:"fire-fcm-compat",[ds]:"fire-perf",[hs]:"fire-perf-compat",[ps]:"fire-rc",[gs]:"fire-rc-compat",[ms]:"fire-gcs",[bs]:"fire-gcs-compat",[vs]:"fire-fst",[_s]:"fire-fst-compat","fire-js":"fire-js",[ws]:"fire-js-all"};/**
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
 */const Ce=new Map,ot=new Map;function Is(t,e){try{t.container.addComponent(e)}catch(n){pe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ge(t){const e=t.name;if(ot.has(e))return pe.debug(`There were multiple attempts to register component ${e}.`),!1;ot.set(e,t);for(const n of Ce.values())Is(n,t);return!0}function gt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Es={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new Pe("app","Firebase",Es);/**
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
 */class Ds{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function In(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:st,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(n||(n=bn()),!n)throw ce.create("no-options");const o=Ce.get(s);if(o){if(et(n,o.options)&&et(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const i=new Nr(s);for(const c of ot.values())i.addComponent(c);const a=new Ds(n,r,i);return Ce.set(s,a),a}function ks(t=st){const e=Ce.get(t);if(!e&&t===st&&bn())return In();if(!e)throw ce.create("no-app",{appName:t});return e}function le(t,e,n){var r;let s=(r=ys[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pe.warn(a.join(" "));return}ge(new fe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ss="firebase-heartbeat-database",Cs=1,De="firebase-heartbeat-store";let xe=null;function En(){return xe||(xe=pt(Ss,Cs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(De)}}}).catch(t=>{throw ce.create("idb-open",{originalErrorMessage:t.message})})),xe}async function Ts(t){try{return await(await En()).transaction(De).objectStore(De).get(Dn(t))}catch(e){if(e instanceof ye)pe.warn(e.message);else{const n=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pe.warn(n.message)}}}async function Yt(t,e){try{const r=(await En()).transaction(De,"readwrite");await r.objectStore(De).put(e,Dn(t)),await r.done}catch(n){if(n instanceof ye)pe.warn(n.message);else{const r=ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pe.warn(r.message)}}}function Dn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const As=1024,$s=30*24*60*60*1e3;class Os{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ns(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Xt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=$s}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xt(),{heartbeatsToSend:r,unsentEntries:s}=Bs(this._heartbeatsCache.heartbeats),o=mn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Xt(){return new Date().toISOString().substring(0,10)}function Bs(t,e=As){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Zt(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Ns{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vn()?_n().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ts(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zt(t){return mn(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Ms(t){ge(new fe("platform-logger",e=>new Jr(e),"PRIVATE")),ge(new fe("heartbeat",e=>new Os(e),"PRIVATE")),le(rt,Jt,t),le(rt,Jt,"esm2017"),le("fire-js","")}Ms("");var Ps="firebase",Rs="10.7.1";/**
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
 */le(Ps,Rs,"app");const Ls=(t,e)=>e.some(n=>t instanceof n);let Qt,en;function Hs(){return Qt||(Qt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vs(){return en||(en=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kn=new WeakMap,it=new WeakMap,Sn=new WeakMap,Ke=new WeakMap,mt=new WeakMap;function js(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ue(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&kn.set(n,t)}).catch(()=>{}),mt.set(e,t),e}function Fs(t){if(it.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});it.set(t,e)}let at={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return it.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xs(t){at=t(at)}function Ks(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ue(this),e,...n);return Sn.set(r,e.sort?e.sort():[e]),ue(r)}:Vs().includes(t)?function(...e){return t.apply(Ue(this),e),ue(kn.get(this))}:function(...e){return ue(t.apply(Ue(this),e))}}function Us(t){return typeof t=="function"?Ks(t):(t instanceof IDBTransaction&&Fs(t),Ls(t,Hs())?new Proxy(t,at):t)}function ue(t){if(t instanceof IDBRequest)return js(t);if(Ke.has(t))return Ke.get(t);const e=Us(t);return e!==t&&(Ke.set(t,e),mt.set(e,t)),e}const Ue=t=>mt.get(t);function Ws(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ue(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ue(i.result),c.oldVersion,c.newVersion,ue(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const zs=["get","getKey","getAll","getAllKeys","count"],qs=["put","add","delete","clear"],We=new Map;function tn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(We.get(e))return We.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||zs.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return We.set(e,o),o}xs(t=>({...t,get:(e,n,r)=>tn(e,n)||t.get(e,n,r),has:(e,n)=>!!tn(e,n)||t.has(e,n)}));const Cn="@firebase/installations",bt="0.6.4";/**
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
 */const Tn=1e4,An=`w:${bt}`,$n="FIS_v2",Gs="https://firebaseinstallations.googleapis.com/v1",Js=60*60*1e3,Ys="installations",Xs="Installations";/**
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
 */const Zs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},me=new Pe(Ys,Xs,Zs);function On(t){return t instanceof ye&&t.code.includes("request-failed")}/**
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
 */function Bn({projectId:t}){return`${Gs}/projects/${t}/installations`}function Nn(t){return{token:t.token,requestStatus:2,expiresIn:eo(t.expiresIn),creationTime:Date.now()}}async function Mn(t,e){const r=(await e.json()).error;return me.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Pn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Qs(t,{refreshToken:e}){const n=Pn(t);return n.append("Authorization",to(e)),n}async function Rn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eo(t){return Number(t.replace("s","000"))}function to(t){return`${$n} ${t}`}/**
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
 */async function no({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Bn(t),s=Pn(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={fid:n,authVersion:$n,appId:t.appId,sdkVersion:An},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Rn(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Nn(u.authToken)}}else throw await Mn("Create Installation",c)}/**
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
 */function Ln(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ro(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const so=/^[cdef][\w-]{21}$/,ct="";function oo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=io(t);return so.test(n)?n:ct}catch{return ct}}function io(t){return ro(t).substr(0,22)}/**
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
 */function Re(t){return`${t.appName}!${t.appId}`}/**
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
 */const Hn=new Map;function Vn(t,e){const n=Re(t);jn(n,e),ao(n,e)}function jn(t,e){const n=Hn.get(t);if(n)for(const r of n)r(e)}function ao(t,e){const n=co();n&&n.postMessage({key:t,fid:e}),lo()}let he=null;function co(){return!he&&"BroadcastChannel"in self&&(he=new BroadcastChannel("[Firebase] FID Change"),he.onmessage=t=>{jn(t.data.key,t.data.fid)}),he}function lo(){Hn.size===0&&he&&(he.close(),he=null)}/**
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
 */const uo="firebase-installations-database",fo=1,be="firebase-installations-store";let ze=null;function vt(){return ze||(ze=Ws(uo,fo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(be)}}})),ze}async function Te(t,e){const n=Re(t),s=(await vt()).transaction(be,"readwrite"),o=s.objectStore(be),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Vn(t,e.fid),e}async function Fn(t){const e=Re(t),r=(await vt()).transaction(be,"readwrite");await r.objectStore(be).delete(e),await r.done}async function Le(t,e){const n=Re(t),s=(await vt()).transaction(be,"readwrite"),o=s.objectStore(be),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Vn(t,a.fid),a}/**
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
 */async function _t(t){let e;const n=await Le(t.appConfig,r=>{const s=ho(r),o=po(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ct?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ho(t){const e=t||{fid:oo(),registrationStatus:0};return xn(e)}function po(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(me.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=go(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mo(t)}:{installationEntry:e}}async function go(t,e){try{const n=await no(t,e);return Te(t.appConfig,n)}catch(n){throw On(n)&&n.customData.serverCode===409?await Fn(t.appConfig):await Te(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mo(t){let e=await nn(t.appConfig);for(;e.registrationStatus===1;)await Ln(100),e=await nn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _t(t);return r||n}return e}function nn(t){return Le(t,e=>{if(!e)throw me.create("installation-not-found");return xn(e)})}function xn(t){return bo(t)?{fid:t.fid,registrationStatus:0}:t}function bo(t){return t.registrationStatus===1&&t.registrationTime+Tn<Date.now()}/**
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
 */async function vo({appConfig:t,heartbeatServiceProvider:e},n){const r=_o(t,n),s=Qs(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={installation:{sdkVersion:An,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Rn(()=>fetch(r,a));if(c.ok){const u=await c.json();return Nn(u)}else throw await Mn("Generate Auth Token",c)}function _o(t,{fid:e}){return`${Bn(t)}/${e}/authTokens:generate`}/**
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
 */async function wt(t,e=!1){let n;const r=await Le(t.appConfig,o=>{if(!Kn(o))throw me.create("not-registered");const i=o.authToken;if(!e&&Io(i))return o;if(i.requestStatus===1)return n=wo(t,e),o;{if(!navigator.onLine)throw me.create("app-offline");const a=Do(o);return n=yo(t,a),a}});return n?await n:r.authToken}async function wo(t,e){let n=await rn(t.appConfig);for(;n.authToken.requestStatus===1;)await Ln(100),n=await rn(t.appConfig);const r=n.authToken;return r.requestStatus===0?wt(t,e):r}function rn(t){return Le(t,e=>{if(!Kn(e))throw me.create("not-registered");const n=e.authToken;return ko(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yo(t,e){try{const n=await vo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Te(t.appConfig,r),n}catch(n){if(On(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Te(t.appConfig,r)}throw n}}function Kn(t){return t!==void 0&&t.registrationStatus===2}function Io(t){return t.requestStatus===2&&!Eo(t)}function Eo(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Js}function Do(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ko(t){return t.requestStatus===1&&t.requestTime+Tn<Date.now()}/**
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
 */async function So(t){const e=t,{installationEntry:n,registrationPromise:r}=await _t(e);return r?r.catch(console.error):wt(e).catch(console.error),n.fid}/**
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
 */async function Co(t,e=!1){const n=t;return await To(n),(await wt(n,e)).token}async function To(t){const{registrationPromise:e}=await _t(t);e&&await e}/**
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
 */function Ao(t){if(!t||!t.options)throw qe("App Configuration");if(!t.name)throw qe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qe(t){return me.create("missing-app-config-values",{valueName:t})}/**
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
 */const Un="installations",$o="installations-internal",Oo=t=>{const e=t.getProvider("app").getImmediate(),n=Ao(e),r=gt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Bo=t=>{const e=t.getProvider("app").getImmediate(),n=gt(e,Un).getImmediate();return{getId:()=>So(n),getToken:s=>Co(n,s)}};function No(){ge(new fe(Un,Oo,"PUBLIC")),ge(new fe($o,Bo,"PRIVATE"))}No();le(Cn,bt);le(Cn,bt,"esm2017");/**
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
 */const Mo="/firebase-messaging-sw.js",Po="/firebase-cloud-messaging-push-scope",Wn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ro="https://fcmregistrations.googleapis.com/v1",zn="google.c.a.c_id",Lo="google.c.a.c_l",Ho="google.c.a.ts",Vo="google.c.a.e";var sn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(sn||(sn={}));/**
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
 */const Ge="fcm_token_details_db",Fo=5,on="fcm_token_object_Store";async function xo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ge))return null;let e=null;return(await pt(Ge,Fo,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(on))return;const c=i.objectStore(on),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(s===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:oe(l.vapidKey)}}}else if(s===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}else if(s===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}}}})).close(),await je(Ge),await je("fcm_vapid_details_db"),await je("undefined"),Ko(e)?e:null}function Ko(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Uo="firebase-messaging-database",Wo=1,ve="firebase-messaging-store";let Je=null;function yt(){return Je||(Je=pt(Uo,Wo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ve)}}})),Je}async function qn(t){const e=Et(t),r=await(await yt()).transaction(ve).objectStore(ve).get(e);if(r)return r;{const s=await xo(t.appConfig.senderId);if(s)return await It(t,s),s}}async function It(t,e){const n=Et(t),s=(await yt()).transaction(ve,"readwrite");return await s.objectStore(ve).put(e,n),await s.done,e}async function zo(t){const e=Et(t),r=(await yt()).transaction(ve,"readwrite");await r.objectStore(ve).delete(e),await r.done}function Et({appConfig:t}){return t.appId}/**
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
 */const qo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},q=new Pe("messaging","Messaging",qo);/**
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
 */async function Go(t,e){const n=await kt(t),r=Jn(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Dt(t.appConfig),s)).json()}catch(i){throw q.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw q.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw q.create("token-subscribe-no-token");return o.token}async function Jo(t,e){const n=await kt(t),r=Jn(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Dt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw q.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw q.create("token-update-failed",{errorInfo:i})}if(!o.token)throw q.create("token-update-no-token");return o.token}async function Gn(t,e){const r={method:"DELETE",headers:await kt(t)};try{const o=await(await fetch(`${Dt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw q.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw q.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Dt({projectId:t}){return`${Ro}/projects/${t}/registrations`}async function kt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Jn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Wn&&(s.web.applicationPubKey=r),s}/**
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
 */const Yo=7*24*60*60*1e3;async function Xo(t){const e=await ei(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:oe(e.getKey("auth")),p256dh:oe(e.getKey("p256dh"))},r=await qn(t.firebaseDependencies);if(r){if(ti(r.subscriptionOptions,n))return Date.now()>=r.createTime+Yo?Qo(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Gn(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return an(t.firebaseDependencies,n)}else return an(t.firebaseDependencies,n)}async function Zo(t){const e=await qn(t.firebaseDependencies);e&&(await Gn(t.firebaseDependencies,e.token),await zo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Qo(t,e){try{const n=await Jo(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await It(t.firebaseDependencies,r),n}catch(n){throw await Zo(t),n}}async function an(t,e){const r={token:await Go(t,e),createTime:Date.now(),subscriptionOptions:e};return await It(t,r),r.token}async function ei(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:jo(e)})}function ti(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function cn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ni(e,t),ri(e,t),si(e,t),e}function ni(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ri(t,e){e.data&&(t.data=e.data)}function si(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const c=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function oi(t){return typeof t=="object"&&!!t&&zn in t}/**
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
 */Yn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Yn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Yn(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function ii(t){if(!t||!t.options)throw Ye("App Configuration Object");if(!t.name)throw Ye("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ye(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ye(t){return q.create("missing-app-config-values",{valueName:t})}/**
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
 */class ai{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ii(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function ci(t){try{t.swRegistration=await navigator.serviceWorker.register(Mo,{scope:Po}),t.swRegistration.update().catch(()=>{})}catch(e){throw q.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function li(t,e){if(!e&&!t.swRegistration&&await ci(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw q.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function ui(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Wn)}/**
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
 */async function Xn(t,e){if(!navigator)throw q.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw q.create("permission-blocked");return await ui(t,e==null?void 0:e.vapidKey),await li(t,e==null?void 0:e.serviceWorkerRegistration),Xo(t)}/**
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
 */async function fi(t,e,n){const r=di(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[zn],message_name:n[Lo],message_time:n[Ho],message_device_time:Math.floor(Date.now()/1e3)})}function di(t){switch(t){case ke.NOTIFICATION_CLICKED:return"notification_open";case ke.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function hi(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===ke.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(cn(n)):t.onMessageHandler.next(cn(n)));const r=n.data;oi(r)&&r[Vo]==="1"&&await fi(t,n.messageType,r)}const ln="@firebase/messaging",un="0.12.5";/**
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
 */const pi=t=>{const e=new ai(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>hi(e,n)),e},gi=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Xn(e,r)}};function mi(){ge(new fe("messaging",pi,"PUBLIC")),ge(new fe("messaging-internal",gi,"PRIVATE")),le(ln,un),le(ln,un,"esm2017")}/**
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
 */async function bi(){try{await _n()}catch{return!1}return typeof window<"u"&&vn()&&Sr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function vi(t,e){if(!navigator)throw q.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function _i(t=ks()){return bi().then(e=>{if(!e)throw q.create("unsupported-browser")},e=>{throw q.create("indexed-db-unsupported")}),gt(dt(t),"messaging").getImmediate()}async function wi(t,e){return t=dt(t),Xn(t,e)}function yi(t,e){return t=dt(t),vi(t,e)}mi();function fn(t){let e,n,r,s="×",o,i,a,c,u,l;return a=new nr({props:{func:t[12]}}),{c(){e=I("div"),n=I("div"),r=I("button"),r.textContent=s,o=H(),i=I("div"),Y(a.$$.fragment),this.h()},l(f){e=E(f,"DIV",{class:!0});var p=P(e);n=E(p,"DIV",{class:!0});var d=P(n);r=E(d,"BUTTON",{class:!0,"data-svelte-h":!0}),te(r)!=="svelte-1vf4byn"&&(r.textContent=s),o=V(d),i=E(d,"DIV",{class:!0});var O=P(i);X(a.$$.fragment,O),O.forEach(g),d.forEach(g),p.forEach(g),this.h()},h(){b(r,"class","close-button svelte-12dorve"),b(i,"class","content svelte-12dorve"),b(n,"class","dialog-box svelte-12dorve"),b(e,"class","overlay svelte-12dorve")},m(f,p){M(f,e,p),v(e,n),v(n,r),v(n,o),v(n,i),Z(a,i,null),c=!0,u||(l=[re(r,"click",t[11]),re(n,"click",Ai),re(e,"click",t[11])],u=!0)},p(f,p){const d={};p&2&&(d.func=f[12]),a.$set(d)},i(f){c||(x(a.$$.fragment,f),c=!0)},o(f){U(a.$$.fragment,f),c=!1},d(f){f&&g(e),Q(a),u=!1,ft(l)}}}function Ii(t){let e,n;return e=new sr({}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p:Xe,i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function Ei(t){let e,n;return e=new rr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[18]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function Di(t){let e,n;return e=new hn({props:{f:!0,cardsData:[...t[5]]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function ki(t){let e,n;return e=new hn({props:{f:!1,cardsData:[...t[4]]}}),{c(){Y(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){Q(e,r)}}}function Si(t){let e,n="Fellowships",r,s,o,i,a="Courses",c,u,l,f,p,d,O;return s=new Ot({props:{f:!0,onClick:t[16],cardsData:[...t[5]]}}),u=new Ot({props:{f:!1,onClick:t[17],cardsData:[...t[4]]}}),f=new dr({props:{blogs:t[7]}}),d=new gr({props:{data:t[6]}}),{c(){e=I("div"),e.textContent=n,r=H(),Y(s.$$.fragment),o=H(),i=I("div"),i.textContent=a,c=H(),Y(u.$$.fragment),l=H(),Y(f.$$.fragment),p=H(),Y(d.$$.fragment),this.h()},l(h){e=E(h,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-9rjion"&&(e.textContent=n),r=V(h),X(s.$$.fragment,h),o=V(h),i=E(h,"DIV",{class:!0,"data-svelte-h":!0}),te(i)!=="svelte-4wj5r"&&(i.textContent=a),c=V(h),X(u.$$.fragment,h),l=V(h),X(f.$$.fragment,h),p=V(h),X(d.$$.fragment,h),this.h()},h(){b(e,"class","title"),b(i,"class","title")},m(h,D){M(h,e,D),M(h,r,D),Z(s,h,D),M(h,o,D),M(h,i,D),M(h,c,D),Z(u,h,D),M(h,l,D),Z(f,h,D),M(h,p,D),Z(d,h,D),O=!0},p(h,D){const K={};D&32&&(K.cardsData=[...h[5]]),s.$set(K);const S={};D&16&&(S.cardsData=[...h[4]]),u.$set(S);const C={};D&128&&(C.blogs=h[7]),f.$set(C);const T={};D&64&&(T.data=h[6]),d.$set(T)},i(h){O||(x(s.$$.fragment,h),x(u.$$.fragment,h),x(f.$$.fragment,h),x(d.$$.fragment,h),O=!0)},o(h){U(s.$$.fragment,h),U(u.$$.fragment,h),U(f.$$.fragment,h),U(d.$$.fragment,h),O=!1},d(h){h&&(g(e),g(r),g(o),g(i),g(c),g(l),g(p)),Q(s,h),Q(u,h),Q(f,h),Q(d,h)}}}function Ci(t){let e,n,r,s,o,i,a="Courses",c,u,l="Fellowships",f,p,d="Contact us",O,h,D,K,S,C,T="About us",F,W,J,ee,z,B,R,_,k,w,$,y,L=t[9]&&fn(t);n=new ir({});const Ie=[Si,ki,Di,Ei,Ii],G=[];function se(m,N){return m[1]==0?0:m[1]==1?1:m[1]==2?2:m[1]==3?3:4}return B=se(t),R=G[B]=Ie[B](t),k=new ar({props:{scrollBoxHeight:t[8]}}),{c(){L&&L.c(),e=H(),Y(n.$$.fragment),r=H(),s=I("div"),o=I("ul"),i=I("li"),i.textContent=a,c=H(),u=I("li"),u.textContent=l,f=H(),p=I("li"),p.textContent=d,h=H(),D=I("div"),K=I("div"),S=I("div"),C=I("p"),C.textContent=T,F=H(),W=I("p"),J=$e(t[0]),ee=H(),z=I("div"),R.c(),_=H(),Y(k.$$.fragment),this.h()},l(m){L&&L.l(m),e=V(m),X(n.$$.fragment,m),r=V(m),s=E(m,"DIV",{class:!0,id:!0,style:!0});var N=P(s);o=E(N,"UL",{});var ne=P(o);i=E(ne,"LI",{"data-svelte-h":!0}),te(i)!=="svelte-15gd3eg"&&(i.textContent=a),c=V(ne),u=E(ne,"LI",{"data-svelte-h":!0}),te(u)!=="svelte-1w3oh8g"&&(u.textContent=l),f=V(ne),p=E(ne,"LI",{"data-svelte-h":!0}),te(p)!=="svelte-1pessln"&&(p.textContent=d),ne.forEach(g),N.forEach(g),h=V(m),D=E(m,"DIV",{class:!0});var Ee=P(D);K=E(Ee,"DIV",{class:!0});var St=P(K);S=E(St,"DIV",{class:!0});var Se=P(S);C=E(Se,"P",{style:!0,"data-svelte-h":!0}),te(C)!=="svelte-1mkz37p"&&(C.textContent=T),F=V(Se),W=E(Se,"P",{style:!0});var Ct=P(W);J=Oe(Ct,t[0]),Ct.forEach(g),Se.forEach(g),St.forEach(g),Ee.forEach(g),ee=V(m),z=E(m,"DIV",{class:!0});var Tt=P(z);R.l(Tt),Tt.forEach(g),_=V(m),X(k.$$.fragment,m),this.h()},h(){b(s,"class","side-menu svelte-12dorve"),b(s,"id","menuu"),b(s,"style",O=`display: ${t[10]?"block":"none"};`),A(C,"position","relative"),A(C,"right","70px"),A(W,"font-weight","300"),A(W,"text-align","left"),A(W,"font-size","20px"),b(S,"class","image-text svelte-12dorve"),b(K,"class","image-overlay svelte-12dorve"),b(D,"class","header-image svelte-12dorve"),b(z,"class","scroll-box svelte-12dorve")},m(m,N){L&&L.m(m,N),M(m,e,N),Z(n,m,N),M(m,r,N),M(m,s,N),v(s,o),v(o,i),v(o,c),v(o,u),v(o,f),v(o,p),M(m,h,N),M(m,D,N),v(D,K),v(K,S),v(S,C),v(S,F),v(S,W),v(W,J),M(m,ee,N),M(m,z,N),G[B].m(z,null),M(m,_,N),Z(k,m,N),w=!0,$||(y=[re(i,"click",t[13]),re(u,"click",t[14]),re(p,"click",t[15])],$=!0)},p(m,[N]){m[9]?L?(L.p(m,N),N&512&&x(L,1)):(L=fn(m),L.c(),x(L,1),L.m(e.parentNode,e)):L&&(Ze(),U(L,1,1,()=>{L=null}),Qe()),(!w||N&1024&&O!==(O=`display: ${m[10]?"block":"none"};`))&&b(s,"style",O),(!w||N&1)&&Be(J,m[0]);let ne=B;B=se(m),B===ne?G[B].p(m,N):(Ze(),U(G[ne],1,1,()=>{G[ne]=null}),Qe(),R=G[B],R?R.p(m,N):(R=G[B]=Ie[B](m),R.c()),x(R,1),R.m(z,null));const Ee={};N&256&&(Ee.scrollBoxHeight=m[8]),k.$set(Ee)},i(m){w||(x(L),x(n.$$.fragment,m),x(R),x(k.$$.fragment,m),w=!0)},o(m){U(L),U(n.$$.fragment,m),U(R),U(k.$$.fragment,m),w=!1},d(m){m&&(g(e),g(r),g(s),g(h),g(D),g(ee),g(z),g(_)),L&&L.d(m),Q(n,m),G[B].d(),Q(k,m),$=!1,ft(y)}}}function Ti(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ai=t=>t.stopPropagation();function $i(t,e,n){let r="",s=0;async function o(_,k,w){const $=await fetch("https://dentists-backend.onrender.com/api/"+_,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(!$.ok)throw or("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${$.status}`);const y=await $.json();return w&&w(),y}let i=!1;async function a(){o("n/gp").then(_=>{_=_.d,n(6,O=_.map(k=>Object({title:k.productName,text:"Price : "+k.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+k.productID+"/0",discount:k.discount})))})}async function c(){o("n/gc").then(_=>{_=_.d,n(4,p=_.map(k=>Object({title:k.courseName,id:k.courseID,text:k.courseDetails,duration:k.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+k.courseID,clickHandler:()=>{const w=document.createElement("a");w.href="/courses/"+k.courseID,w.click(),k.courseID,n(2,i=!1)}}))),console.log(p)})}let u;async function l(){o("n/gf").then(_=>{_=_.d,n(5,d=_.map(k=>Object({id:k.fellowshipID,title:k.fellowshipName,duration:k.fellowshipDuration,text:k.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+k.fellowshipID,clickHandler:()=>{k.fellowshipID,n(2,i=!0)}})))})}async function f(){o("n/gb").then(_=>{_=_.d,n(7,h=_.map(k=>Object({id:k.blogID,text:k.blogDetails,title:k.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+k.blogID,clickHandler:()=>{}})))})}let p=[],d=[],O=[],h=[];function D(){const _=document.querySelector(".scroll-box");_&&n(8,K=Number(getComputedStyle(_).height.split("px")[0]))}let K=0;ut(()=>{document.body.addEventListener("click",function(y){console.log(y.target.id),console.log(T),y.target.id!="menuuu"&&y.target.id!="menuio"&&T&&n(10,T=!1)}),setInterval(()=>{D()},500),o("aus").then(y=>{n(0,r=y.d)}),window.addEventListener("resize",D),D();const k=In({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),w=_i(k);wi(w,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(y=>{console.log(y)}),yi(w,y=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(y)}),Promise.all([c(),l(),f(),a()]).then(()=>{addEventListener("ocd",y=>{console.log(y.detail),y.detail.f?(console.log(d),console.log(y.detail.id),n(3,u=d.filter(L=>L.id==y.detail.id)[0])):n(3,u=p.filter(L=>L.id==y.detail.id)[0])})});const $=()=>{};return window.addEventListener("scroll",$),document.body.style.overflow=S?"hidden":"auto",()=>{window.removeEventListener("scroll",$),window.removeEventListener("resize",D),document.body.style.overflow="auto"}}),Zn(()=>{D()});let S=!1;function C(){n(9,S=!1)}Ti().then(_=>{_||console.log("Developer tools are closed.")});let T=!1;return[r,s,i,u,p,d,O,h,K,S,T,C,()=>{n(1,s=4),C()},function(){console.log("CLICKED HERE");const _=document.createElement("a");_.href="/courses",_.click()},function(){console.log("clicked here");const _=document.createElement("a");_.href="/fellowships",_.click()},function(){const _=document.createElement("a");_.href="/contact-us",_.click()},function(){const _=document.createElement("a");_.href="/fellowships",_.click()},function(){const _=document.createElement("a");_.href="/courses",_.click()},function(){const _=document.createElement("a");_.href="/contact-us",_.click()}]}class Wi extends Ne{constructor(e){super(),Me(this,e,$i,Ci,Ae,{})}}export{Wi as component};
