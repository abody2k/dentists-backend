import{s as Ae,e as y,h as L,b as I,k as T,f as g,j,m as b,o as $,i as N,p as m,v as ut,w as $e,t as Oe,d as te,l as Be,q as re,r as Ne,n as Ze,y as ft,z as we,x as pe,J as Zn}from"../chunks/scheduler.CvS8aZFR.js";import{S as Me,i as Pe,c as X,b as Z,m as Q,t as W,g as Qe,e as et,a as U,d as ee}from"../chunks/index.BLvvEpyq.js";/* empty css                                                     */import{C as Qn}from"../chunks/Card.16y5p4ly.js";import{e as ae,u as er,d as tr}from"../chunks/each.atBuby31.js";import{B as dn}from"../chunks/Button.CxrZDlc0.js";import"../chunks/Map.BFxH1DHB.js";import{G as hn}from"../chunks/Grid.BjBt8Not.js";import{L as nr}from"../chunks/Login.DxdQqImK.js";import{C as rr}from"../chunks/CourseData.DR_pThqp.js";import{C as sr}from"../chunks/Contact.2EV3xzU-.js";import{n as or}from"../chunks/not.DNvn3Bfc.js";import{T as ir}from"../chunks/TopBar.9kEgN9-K.js";import{F as ar}from"../chunks/Footer.BdFhdAVi.js";function At(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function $t(t){let e,n;return e=new Qn({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){X(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function cr(t){let e,n,r,s,o,i,a=ae([...t[0],...t[0],...t[0],...t[0]]),c=[];for(let l=0;l<a.length;l+=1)c[l]=$t(At(t,a,l));const u=l=>U(c[l],1,1,()=>{c[l]=null});return o=new dn({props:{text:"Show all ",useTJ:!0,src:"back-icon.png",padding:!1,marginL:"5px",clickHandler:t[1]}}),{c(){e=y("div"),n=y("div");for(let l=0;l<c.length;l+=1)c[l].c();r=L(),s=y("div"),X(o.$$.fragment),this.h()},l(l){e=I(l,"DIV",{style:!0,class:!0});var f=T(e);n=I(f,"DIV",{class:!0,id:!0});var p=T(n);for(let O=0;O<c.length;O+=1)c[O].l(p);p.forEach(g),f.forEach(g),r=j(l),s=I(l,"DIV",{style:!0});var h=T(s);Z(o.$$.fragment,h),h.forEach(g),this.h()},h(){b(n,"class","row svelte-1l32lre"),b(n,"id","row-container"),$(e,"margin-bottom","0"),$(e,"height","406px"),b(e,"class","row svelte-1l32lre"),$(s,"display","grid"),$(s,"place-items","center"),$(s,"margin-bottom","90px"),$(s,"margin-top","20px")},m(l,f){N(l,e,f),m(e,n);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(n,null);N(l,r,f),N(l,s,f),Q(o,s,null),i=!0},p(l,[f]){if(f&5){a=ae([...l[0],...l[0],...l[0],...l[0]]);let h;for(h=0;h<a.length;h+=1){const O=At(l,a,h);c[h]?(c[h].p(O,f),W(c[h],1)):(c[h]=$t(O),c[h].c(),W(c[h],1),c[h].m(n,null))}for(Qe(),h=a.length;h<c.length;h+=1)u(h);et()}const p={};f&2&&(p.clickHandler=l[1]),o.$set(p)},i(l){if(!i){for(let f=0;f<a.length;f+=1)W(c[f]);W(o.$$.fragment,l),i=!0}},o(l){c=c.filter(Boolean);for(let f=0;f<c.length;f+=1)U(c[f]);U(o.$$.fragment,l),i=!1},d(l){l&&(g(e),g(r),g(s)),ut(c,l),ee(o)}}}function lr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,$e(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class Ot extends Me{constructor(e){super(),Pe(this,e,lr,cr,Ae,{cardsData:0,onClick:1,f:2})}}function Bt(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Nt(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function Mt(t){let e,n;return{c(){e=y("img"),this.h()},l(r){e=I(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){pe(e.src,n=t[15].src)||b(e,"src",n),b(e,"alt","Neumorphic Picture"),b(e,"id","blog-image"),b(e,"class","rectangular-image svelte-14rovze")},m(r,s){N(r,e,s)},p(r,s){s&1&&!pe(e.src,n=r[15].src)&&b(e,"src",n)},d(r){r&&g(e)}}}function Pt(t){let e,n=t[14]==t[2]&&Mt(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),N(r,e,s)},p(r,s){r[14]==r[2]?n?n.p(r,s):(n=Mt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d(r)}}}function Rt(t){let e,n,r=t[0][t[2]].title+"",s,o,i=t[0].length>0&&Lt(t);return{c(){e=y("div"),n=y("h2"),s=Oe(r),o=L(),i&&i.c(),this.h()},l(a){e=I(a,"DIV",{class:!0});var c=T(e);n=I(c,"H2",{style:!0,class:!0});var u=T(n);s=Be(u,r),u.forEach(g),o=j(c),i&&i.l(c),c.forEach(g),this.h()},h(){$(n,"margin","-2px 0 -10px 0"),b(n,"class","svelte-14rovze"),b(e,"class","captionCont svelte-14rovze")},m(a,c){N(a,e,c),m(e,n),m(n,s),m(e,o),i&&i.m(e,null)},p(a,c){c&5&&r!==(r=a[0][a[2]].title+"")&&Ne(s,r),a[0].length>0?i?i.p(a,c):(i=Lt(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&g(e),i&&i.d()}}}function Lt(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=y("p"),r=Oe(n),this.h()},l(s){e=I(s,"P",{class:!0});var o=T(e);r=Be(o,n),o.forEach(g),this.h()},h(){b(e,"class","svelte-14rovze")},m(s,o){N(s,e,o),m(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&Ne(r,n)},d(s){s&&g(e)}}}function jt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=y("div"),this.h()},l(a){n=I(a,"DIV",{style:!0,class:!0}),T(n).forEach(g),this.h()},h(){$(n,"margin-top","10px"),$(n,"margin-bottom","10px"),b(n,"class",r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze"),this.first=n},m(a,c){N(a,n,c),s||(o=re(n,"click",i),s=!0)},p(a,c){e=a,c&4&&r!==(r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze")&&b(n,"class",r)},d(a){a&&g(n),s=!1,o()}}}function ur(t){let e,n,r,s='<img src="/open.png" style="right: 10%; width: 33px;" class="svelte-14rovze"/>',o,i,a,c,u,l,f,p,h,O="<",d,D,q=">",V,K,x,M=[],R=new Map,H,G,z=ae(t[0]),S=[];for(let _=0;_<z.length;_+=1)S[_]=Pt(Nt(t,z,_));let C=t[0].length>0&&Rt(t),v=ae([0,1,2]);const k=_=>_[14];for(let _=0;_<3;_+=1){let A=Bt(t,v,_),E=k(A);R.set(E,M[_]=jt(E,A))}return{c(){e=y("div"),n=y("div"),r=y("button"),r.innerHTML=s,o=L(),i=y("div"),a=y("div"),c=Oe(t[1]),u=L(),l=y("div"),f=y("div");for(let _=0;_<S.length;_+=1)S[_].c();p=L(),h=y("div"),h.textContent=O,d=L(),D=y("div"),D.textContent=q,V=L(),C&&C.c(),K=L(),x=y("div");for(let _=0;_<3;_+=1)M[_].c();this.h()},l(_){e=I(_,"DIV",{class:!0});var A=T(e);n=I(A,"DIV",{class:!0});var E=T(n);r=I(E,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),te(r)!=="svelte-hwduld"&&(r.innerHTML=s),E.forEach(g),o=j(A),i=I(A,"DIV",{style:!0,class:!0});var P=T(i);a=I(P,"DIV",{class:!0});var Ie=T(a);c=Be(Ie,t[1]),Ie.forEach(g),P.forEach(g),u=j(A),l=I(A,"DIV",{class:!0});var Y=T(l);f=I(Y,"DIV",{class:!0});var se=T(f);for(let B=0;B<S.length;B+=1)S[B].l(se);p=j(se),h=I(se,"DIV",{class:!0,"data-svelte-h":!0}),te(h)!=="svelte-nl1vs9"&&(h.textContent=O),d=j(se),D=I(se,"DIV",{class:!0,"data-svelte-h":!0}),te(D)!=="svelte-dra8cl"&&(D.textContent=q),se.forEach(g),V=j(Y),C&&C.l(Y),K=j(Y),x=I(Y,"DIV",{class:!0});var w=T(x);for(let B=0;B<3;B+=1)M[B].l(w);w.forEach(g),Y.forEach(g),A.forEach(g),this.h()},h(){$(r,"padding","3px 4px"),$(r,"float","inline-end"),$(r,"right","10%"),$(r,"bottom","13px"),b(r,"class","svelte-14rovze"),b(n,"class","icon svelte-14rovze"),b(a,"class","#2e3b6f-title svelte-14rovze"),$(i,"display","flex"),$(i,"justify-content","space-between"),$(i,"align-items","center"),$(i,"padding","10px"),b(i,"class","svelte-14rovze"),b(h,"class","nextImageBtn svelte-14rovze"),b(D,"class","previousImageBtn svelte-14rovze"),b(f,"class","imageCont svelte-14rovze"),b(x,"class","dots-container svelte-14rovze"),b(l,"class","postCard svelte-14rovze"),b(e,"class","svelte-14rovze")},m(_,A){N(_,e,A),m(e,n),m(n,r),m(e,o),m(e,i),m(i,a),m(a,c),m(e,u),m(e,l),m(l,f);for(let E=0;E<S.length;E+=1)S[E]&&S[E].m(f,null);m(f,p),m(f,h),m(f,d),m(f,D),m(l,V),C&&C.m(l,null),m(l,K),m(l,x);for(let E=0;E<3;E+=1)M[E]&&M[E].m(x,null);H||(G=[re(r,"click",t[5]),re(h,"click",t[6]),re(D,"click",t[7])],H=!0)},p(_,[A]){if(A&2&&Ne(c,_[1]),A&5){z=ae(_[0]);let E;for(E=0;E<z.length;E+=1){const P=Nt(_,z,E);S[E]?S[E].p(P,A):(S[E]=Pt(P),S[E].c(),S[E].m(f,p))}for(;E<S.length;E+=1)S[E].d(1);S.length=z.length}_[0].length>0?C?C.p(_,A):(C=Rt(_),C.c(),C.m(l,K)):C&&(C.d(1),C=null),A&12&&(v=ae([0,1,2]),M=er(M,A,k,1,_,v,R,x,tr,jt,null,Bt))},i:Ze,o:Ze,d(_){_&&g(e),ut(S,_),C&&C.d();for(let A=0;A<3;A+=1)M[A].d();H=!1,ft(G)}}}function fr(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(p){console.log(p),n(2,i=p)}$e(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function h(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}h(),setInterval(h,7e3)});const c=()=>{location.href="/blogs"},u=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},l=()=>{n(2,i=(i+1)%o.length)},f=p=>a(p);return t.$$set=p=>{"firstTitle"in p&&n(1,r=p.firstTitle),"secondTitle"in p&&n(4,s=p.secondTitle),"blogs"in p&&n(0,o=p.blogs)},[o,r,i,a,s,c,u,l,f]}class dr extends Me{constructor(e){super(),Pe(this,e,fr,ur,Ae,{firstTitle:1,secondTitle:4,blogs:0})}}function Vt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Ht(t){let e,n,r,s;return{c(){e=y("div"),n=y("div"),r=y("img"),this.h()},l(o){e=I(o,"DIV",{class:!0});var i=T(e);n=I(i,"DIV",{class:!0,style:!0});var a=T(n);r=I(a,"IMG",{src:!0,class:!0}),a.forEach(g),i.forEach(g),this.h()},h(){pe(r.src,s=t[0][t[1]%t[0].length].src)||b(r,"src",s),b(r,"class","svelte-1kie870"),b(n,"class","postCard svelte-1kie870"),$(n,"width","270px"),$(n,"height","270px"),$(n,"border-radius","10px"),$(n,"background-color","#e6e7ee"),$(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),$(n,"margin-bottom","50px"),b(e,"class","image-card svelte-1kie870")},m(o,i){N(o,e,i),m(e,n),m(n,r)},p(o,i){i&3&&!pe(r.src,s=o[0][o[1]%o[0].length].src)&&b(r,"src",s)},d(o){o&&g(e)}}}function Ft(t){let e,n=ae(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=zt(Vt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=we()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=we()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);N(s,e,o)},p(s,o){if(o&1){n=ae(s[0]);let i;for(i=0;i<n.length;i+=1){const a=Vt(s,n,i);r[i]?r[i].p(a,o):(r[i]=zt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&g(e),ut(r,s)}}}function xt(t){let e,n,r,s;return{c(){e=y("div"),n=y("img"),s=L(),this.h()},l(o){e=I(o,"DIV",{class:!0,style:!0});var i=T(e);n=I(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(g),s=j(o),this.h()},h(){pe(n.src,r=t[0][(t[5]+1)%t[0].length].src)||b(n,"src",r),$(n,"border-radius","10px"),b(n,"class","svelte-1kie870"),b(e,"class","postCard svelte-1kie870"),b(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){N(o,e,i),m(e,n),N(o,s,i)},p(o,i){i&1&&!pe(n.src,r=o[0][(o[5]+1)%o[0].length].src)&&b(n,"src",r)},d(o){o&&(g(e),g(s))}}}function zt(t){let e,n=t[5]+1!=t[0].length&&xt(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),N(r,e,s)},p(r,s){r[5]+1!=r[0].length?n?n.p(r,s):(n=xt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d(r)}}}function hr(t){let e,n,r="Products",s,o,i,a,c,u='<div class="black-title svelte-1kie870">Title</div> <div class="small-note svelte-1kie870">A small note goes here.</div> <div class="big-text svelte-1kie870">Big bold black text.</div>',l,f,p,h,O,d,D,q,V,K="",x,M=t[0].length>=1&&Ht(t),R=t[0].length>1&&Ft(t);return D=new dn({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=y("div"),n=y("div"),n.textContent=r,s=L(),o=y("div"),i=y("div"),M&&M.c(),a=L(),c=y("div"),c.innerHTML=u,l=L(),f=y("div"),p=y("div"),h=y("div"),R&&R.c(),O=L(),d=y("div"),X(D.$$.fragment),q=L(),V=y("div"),V.innerHTML=K,this.h()},l(H){e=I(H,"DIV",{style:!0});var G=T(e);n=I(G,"DIV",{class:!0,"data-svelte-h":!0}),te(n)!=="svelte-t04v0b"&&(n.textContent=r),s=j(G),o=I(G,"DIV",{class:!0});var z=T(o);i=I(z,"DIV",{class:!0});var S=T(i);M&&M.l(S),a=j(S),c=I(S,"DIV",{class:!0,"data-svelte-h":!0}),te(c)!=="svelte-1sx5tfn"&&(c.innerHTML=u),S.forEach(g),l=j(z),f=I(z,"DIV",{style:!0});var C=T(f);p=I(C,"DIV",{style:!0});var v=T(p);h=I(v,"DIV",{class:!0});var k=T(h);R&&R.l(k),k.forEach(g),v.forEach(g),O=j(C),d=I(C,"DIV",{style:!0});var _=T(d);Z(D.$$.fragment,_),_.forEach(g),C.forEach(g),q=j(z),V=I(z,"DIV",{class:!0,"data-svelte-h":!0}),te(V)!=="svelte-cpoj1k"&&(V.innerHTML=K),z.forEach(g),G.forEach(g),this.h()},h(){b(n,"class","#2e3b6f-title"),b(c,"class","text-container svelte-1kie870"),b(i,"class","first-row svelte-1kie870"),b(h,"class","row-images svelte-1kie870"),$(p,"overflow-x","scroll"),b(d,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),$(f,"display","flex"),b(V,"class","show-call-button svelte-1kie870"),b(o,"class","neumorphic-card svelte-1kie870"),$(e,"margin-top","90px")},m(H,G){N(H,e,G),m(e,n),m(e,s),m(e,o),m(o,i),M&&M.m(i,null),m(i,a),m(i,c),m(o,l),m(o,f),m(f,p),m(p,h),R&&R.m(h,null),m(f,O),m(f,d),Q(D,d,null),m(o,q),m(o,V),x=!0},p(H,[G]){H[0].length>=1?M?M.p(H,G):(M=Ht(H),M.c(),M.m(i,a)):M&&(M.d(1),M=null),H[0].length>1?R?R.p(H,G):(R=Ft(H),R.c(),R.m(h,null)):R&&(R.d(1),R=null)},i(H){x||(W(D.$$.fragment,H),x=!0)},o(H){U(D.$$.fragment,H),x=!1},d(H){H&&g(e),M&&M.d(),R&&R.d(),ee(D)}}}function pr(t,e,n){let{data:r=[]}=e,s=0;setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),$e(()=>{console.log(r)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,r=i.data)},[r,s,o]}class gr extends Me{constructor(e){super(),Pe(this,e,pr,hr,Ae,{data:0})}}var Kt={};/**
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
 */const pn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},mr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},gn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,l=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|u>>6,h=u&63;c||(h=64,i||(p=64)),r.push(n[l],n[f],n[p],n[h])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):mr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||u==null||f==null)throw new br;const p=o<<2|a>>4;if(r.push(p),u!==64){const h=a<<4&240|u>>2;if(r.push(h),f!==64){const O=u<<6&192|f;r.push(O)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class br extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vr=function(t){const e=pn(t);return gn.encodeByteArray(e,!0)},mn=function(t){return vr(t).replace(/\./g,"")},_r=function(t){try{return gn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const yr=()=>wr().__FIREBASE_DEFAULTS__,Ir=()=>{if(typeof process>"u"||typeof Kt>"u")return;const t=Kt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Er=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_r(t[1]);return e&&JSON.parse(e)},Dr=()=>{try{return yr()||Ir()||Er()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bn=()=>{var t;return(t=Dr())===null||t===void 0?void 0:t.config};/**
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
 */const Cr="FirebaseError";class ye extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Cr,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Re.prototype.create)}}class Re{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Tr(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new ye(s,a,r)}}function Tr(t,e){return t.replace(Ar,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Ar=/\{\$([^}]+)}/g;function tt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Wt(o)&&Wt(i)){if(!tt(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wt(t){return t!==null&&typeof t=="object"}/**
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Mr={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Pr=F.INFO,Rr={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Lr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Rr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class jr{constructor(e){this.name=e,this._logLevel=Pr,this._logHandler=Lr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Vr=(t,e)=>e.some(n=>t instanceof n);let Ut,qt;function Hr(){return Ut||(Ut=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fr(){return qt||(qt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const wn=new WeakMap,nt=new WeakMap,yn=new WeakMap,Ve=new WeakMap,ht=new WeakMap;function xr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ie(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&wn.set(n,t)}).catch(()=>{}),ht.set(e,t),e}function zr(t){if(nt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});nt.set(t,e)}let rt={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return nt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Kr(t){rt=t(rt)}function Wr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(He(this),e,...n);return yn.set(r,e.sort?e.sort():[e]),ie(r)}:Fr().includes(t)?function(...e){return t.apply(He(this),e),ie(wn.get(this))}:function(...e){return ie(t.apply(He(this),e))}}function Ur(t){return typeof t=="function"?Wr(t):(t instanceof IDBTransaction&&zr(t),Vr(t,Hr())?new Proxy(t,rt):t)}function ie(t){if(t instanceof IDBRequest)return xr(t);if(Ve.has(t))return Ve.get(t);const e=Ur(t);return e!==t&&(Ve.set(t,e),ht.set(e,t)),e}const He=t=>ht.get(t);function pt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ie(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ie(i.result),c.oldVersion,c.newVersion,ie(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function Fe(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ie(n).then(()=>{})}const qr=["get","getKey","getAll","getAllKeys","count"],Gr=["put","add","delete","clear"],xe=new Map;function Gt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xe.get(e))return xe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Gr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||qr.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return xe.set(e,o),o}Kr(t=>({...t,get:(e,n,r)=>Gt(e,n)||t.get(e,n,r),has:(e,n)=>!!Gt(e,n)||t.has(e,n)}));/**
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
 */class Jr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Yr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Yr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const st="@firebase/app",Jt="0.9.25";/**
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
 */const ge=new jr("@firebase/app"),Xr="@firebase/app-compat",Zr="@firebase/analytics-compat",Qr="@firebase/analytics",es="@firebase/app-check-compat",ts="@firebase/app-check",ns="@firebase/auth",rs="@firebase/auth-compat",ss="@firebase/database",os="@firebase/database-compat",is="@firebase/functions",as="@firebase/functions-compat",cs="@firebase/installations",ls="@firebase/installations-compat",us="@firebase/messaging",fs="@firebase/messaging-compat",ds="@firebase/performance",hs="@firebase/performance-compat",ps="@firebase/remote-config",gs="@firebase/remote-config-compat",ms="@firebase/storage",bs="@firebase/storage-compat",vs="@firebase/firestore",_s="@firebase/firestore-compat",ws="firebase";/**
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
 */const ot="[DEFAULT]",ys={[st]:"fire-core",[Xr]:"fire-core-compat",[Qr]:"fire-analytics",[Zr]:"fire-analytics-compat",[ts]:"fire-app-check",[es]:"fire-app-check-compat",[ns]:"fire-auth",[rs]:"fire-auth-compat",[ss]:"fire-rtdb",[os]:"fire-rtdb-compat",[is]:"fire-fn",[as]:"fire-fn-compat",[cs]:"fire-iid",[ls]:"fire-iid-compat",[us]:"fire-fcm",[fs]:"fire-fcm-compat",[ds]:"fire-perf",[hs]:"fire-perf-compat",[ps]:"fire-rc",[gs]:"fire-rc-compat",[ms]:"fire-gcs",[bs]:"fire-gcs-compat",[vs]:"fire-fst",[_s]:"fire-fst-compat","fire-js":"fire-js",[ws]:"fire-js-all"};/**
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
 */const Ce=new Map,it=new Map;function Is(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function me(t){const e=t.name;if(it.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;it.set(e,t);for(const n of Ce.values())Is(n,t);return!0}function gt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Es={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new Re("app","Firebase",Es);/**
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
 */class Ds{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new fe("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function In(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ot,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(n||(n=bn()),!n)throw ce.create("no-options");const o=Ce.get(s);if(o){if(tt(n,o.options)&&tt(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const i=new Nr(s);for(const c of it.values())i.addComponent(c);const a=new Ds(n,r,i);return Ce.set(s,a),a}function ks(t=ot){const e=Ce.get(t);if(!e&&t===ot&&bn())return In();if(!e)throw ce.create("no-app",{appName:t});return e}function le(t,e,n){var r;let s=(r=ys[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(a.join(" "));return}me(new fe(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ss="firebase-heartbeat-database",Cs=1,De="firebase-heartbeat-store";let ze=null;function En(){return ze||(ze=pt(Ss,Cs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(De)}}}).catch(t=>{throw ce.create("idb-open",{originalErrorMessage:t.message})})),ze}async function Ts(t){try{return await(await En()).transaction(De).objectStore(De).get(Dn(t))}catch(e){if(e instanceof ye)ge.warn(e.message);else{const n=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(n.message)}}}async function Yt(t,e){try{const r=(await En()).transaction(De,"readwrite");await r.objectStore(De).put(e,Dn(t)),await r.done}catch(n){if(n instanceof ye)ge.warn(n.message);else{const r=ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ge.warn(r.message)}}}function Dn(t){return`${t.name}!${t.options.appId}`}/**
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
 */function Ms(t){me(new fe("platform-logger",e=>new Jr(e),"PRIVATE")),me(new fe("heartbeat",e=>new Os(e),"PRIVATE")),le(st,Jt,t),le(st,Jt,"esm2017"),le("fire-js","")}Ms("");var Ps="firebase",Rs="10.7.1";/**
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
 */le(Ps,Rs,"app");const Ls=(t,e)=>e.some(n=>t instanceof n);let Qt,en;function js(){return Qt||(Qt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vs(){return en||(en=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kn=new WeakMap,at=new WeakMap,Sn=new WeakMap,Ke=new WeakMap,mt=new WeakMap;function Hs(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ue(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&kn.set(n,t)}).catch(()=>{}),mt.set(e,t),e}function Fs(t){if(at.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});at.set(t,e)}let ct={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return at.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Sn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xs(t){ct=t(ct)}function zs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(We(this),e,...n);return Sn.set(r,e.sort?e.sort():[e]),ue(r)}:Vs().includes(t)?function(...e){return t.apply(We(this),e),ue(kn.get(this))}:function(...e){return ue(t.apply(We(this),e))}}function Ks(t){return typeof t=="function"?zs(t):(t instanceof IDBTransaction&&Fs(t),Ls(t,js())?new Proxy(t,ct):t)}function ue(t){if(t instanceof IDBRequest)return Hs(t);if(Ke.has(t))return Ke.get(t);const e=Ks(t);return e!==t&&(Ke.set(t,e),mt.set(e,t)),e}const We=t=>mt.get(t);function Ws(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ue(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ue(i.result),c.oldVersion,c.newVersion,ue(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Us=["get","getKey","getAll","getAllKeys","count"],qs=["put","add","delete","clear"],Ue=new Map;function tn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ue.get(e))return Ue.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Us.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Ue.set(e,o),o}xs(t=>({...t,get:(e,n,r)=>tn(e,n)||t.get(e,n,r),has:(e,n)=>!!tn(e,n)||t.has(e,n)}));const Cn="@firebase/installations",bt="0.6.4";/**
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
 */const Zs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},be=new Re(Ys,Xs,Zs);function On(t){return t instanceof ye&&t.code.includes("request-failed")}/**
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
 */function Bn({projectId:t}){return`${Gs}/projects/${t}/installations`}function Nn(t){return{token:t.token,requestStatus:2,expiresIn:eo(t.expiresIn),creationTime:Date.now()}}async function Mn(t,e){const r=(await e.json()).error;return be.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Pn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Qs(t,{refreshToken:e}){const n=Pn(t);return n.append("Authorization",to(e)),n}async function Rn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function eo(t){return Number(t.replace("s","000"))}function to(t){return`${$n} ${t}`}/**
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
 */const so=/^[cdef][\w-]{21}$/,lt="";function oo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=io(t);return so.test(n)?n:lt}catch{return lt}}function io(t){return ro(t).substr(0,22)}/**
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
 */const jn=new Map;function Vn(t,e){const n=Le(t);Hn(n,e),ao(n,e)}function Hn(t,e){const n=jn.get(t);if(n)for(const r of n)r(e)}function ao(t,e){const n=co();n&&n.postMessage({key:t,fid:e}),lo()}let he=null;function co(){return!he&&"BroadcastChannel"in self&&(he=new BroadcastChannel("[Firebase] FID Change"),he.onmessage=t=>{Hn(t.data.key,t.data.fid)}),he}function lo(){jn.size===0&&he&&(he.close(),he=null)}/**
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
 */const uo="firebase-installations-database",fo=1,ve="firebase-installations-store";let qe=null;function vt(){return qe||(qe=Ws(uo,fo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ve)}}})),qe}async function Te(t,e){const n=Le(t),s=(await vt()).transaction(ve,"readwrite"),o=s.objectStore(ve),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Vn(t,e.fid),e}async function Fn(t){const e=Le(t),r=(await vt()).transaction(ve,"readwrite");await r.objectStore(ve).delete(e),await r.done}async function je(t,e){const n=Le(t),s=(await vt()).transaction(ve,"readwrite"),o=s.objectStore(ve),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Vn(t,a.fid),a}/**
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
 */async function _t(t){let e;const n=await je(t.appConfig,r=>{const s=ho(r),o=po(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===lt?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function ho(t){const e=t||{fid:oo(),registrationStatus:0};return xn(e)}function po(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(be.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=go(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:mo(t)}:{installationEntry:e}}async function go(t,e){try{const n=await no(t,e);return Te(t.appConfig,n)}catch(n){throw On(n)&&n.customData.serverCode===409?await Fn(t.appConfig):await Te(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function mo(t){let e=await nn(t.appConfig);for(;e.registrationStatus===1;)await Ln(100),e=await nn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await _t(t);return r||n}return e}function nn(t){return je(t,e=>{if(!e)throw be.create("installation-not-found");return xn(e)})}function xn(t){return bo(t)?{fid:t.fid,registrationStatus:0}:t}function bo(t){return t.registrationStatus===1&&t.registrationTime+Tn<Date.now()}/**
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
 */async function wt(t,e=!1){let n;const r=await je(t.appConfig,o=>{if(!zn(o))throw be.create("not-registered");const i=o.authToken;if(!e&&Io(i))return o;if(i.requestStatus===1)return n=wo(t,e),o;{if(!navigator.onLine)throw be.create("app-offline");const a=Do(o);return n=yo(t,a),a}});return n?await n:r.authToken}async function wo(t,e){let n=await rn(t.appConfig);for(;n.authToken.requestStatus===1;)await Ln(100),n=await rn(t.appConfig);const r=n.authToken;return r.requestStatus===0?wt(t,e):r}function rn(t){return je(t,e=>{if(!zn(e))throw be.create("not-registered");const n=e.authToken;return ko(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function yo(t,e){try{const n=await vo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Te(t.appConfig,r),n}catch(n){if(On(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Fn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Te(t.appConfig,r)}throw n}}function zn(t){return t!==void 0&&t.registrationStatus===2}function Io(t){return t.requestStatus===2&&!Eo(t)}function Eo(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Js}function Do(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ko(t){return t.requestStatus===1&&t.requestTime+Tn<Date.now()}/**
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
 */function Ao(t){if(!t||!t.options)throw Ge("App Configuration");if(!t.name)throw Ge("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ge(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ge(t){return be.create("missing-app-config-values",{valueName:t})}/**
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
 */const Kn="installations",$o="installations-internal",Oo=t=>{const e=t.getProvider("app").getImmediate(),n=Ao(e),r=gt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Bo=t=>{const e=t.getProvider("app").getImmediate(),n=gt(e,Kn).getImmediate();return{getId:()=>So(n),getToken:s=>Co(n,s)}};function No(){me(new fe(Kn,Oo,"PUBLIC")),me(new fe($o,Bo,"PRIVATE"))}No();le(Cn,bt);le(Cn,bt,"esm2017");/**
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
 */const Mo="/firebase-messaging-sw.js",Po="/firebase-cloud-messaging-push-scope",Wn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ro="https://fcmregistrations.googleapis.com/v1",Un="google.c.a.c_id",Lo="google.c.a.c_l",jo="google.c.a.ts",Vo="google.c.a.e";var sn;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(sn||(sn={}));/**
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
 */function oe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ho(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const Je="fcm_token_details_db",Fo=5,on="fcm_token_object_Store";async function xo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Je))return null;let e=null;return(await pt(Je,Fo,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(on))return;const c=i.objectStore(on),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(s===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:oe(l.vapidKey)}}}else if(s===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}else if(s===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}}}})).close(),await Fe(Je),await Fe("fcm_vapid_details_db"),await Fe("undefined"),zo(e)?e:null}function zo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Ko="firebase-messaging-database",Wo=1,_e="firebase-messaging-store";let Ye=null;function yt(){return Ye||(Ye=pt(Ko,Wo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_e)}}})),Ye}async function qn(t){const e=Et(t),r=await(await yt()).transaction(_e).objectStore(_e).get(e);if(r)return r;{const s=await xo(t.appConfig.senderId);if(s)return await It(t,s),s}}async function It(t,e){const n=Et(t),s=(await yt()).transaction(_e,"readwrite");return await s.objectStore(_e).put(e,n),await s.done,e}async function Uo(t){const e=Et(t),r=(await yt()).transaction(_e,"readwrite");await r.objectStore(_e).delete(e),await r.done}function Et({appConfig:t}){return t.appId}/**
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
 */const qo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},J=new Re("messaging","Messaging",qo);/**
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
 */async function Go(t,e){const n=await kt(t),r=Jn(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Dt(t.appConfig),s)).json()}catch(i){throw J.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw J.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw J.create("token-subscribe-no-token");return o.token}async function Jo(t,e){const n=await kt(t),r=Jn(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Dt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw J.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw J.create("token-update-failed",{errorInfo:i})}if(!o.token)throw J.create("token-update-no-token");return o.token}async function Gn(t,e){const r={method:"DELETE",headers:await kt(t)};try{const o=await(await fetch(`${Dt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw J.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw J.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Dt({projectId:t}){return`${Ro}/projects/${t}/registrations`}async function kt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Jn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Wn&&(s.web.applicationPubKey=r),s}/**
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
 */const Yo=7*24*60*60*1e3;async function Xo(t){const e=await ei(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:oe(e.getKey("auth")),p256dh:oe(e.getKey("p256dh"))},r=await qn(t.firebaseDependencies);if(r){if(ti(r.subscriptionOptions,n))return Date.now()>=r.createTime+Yo?Qo(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Gn(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return an(t.firebaseDependencies,n)}else return an(t.firebaseDependencies,n)}async function Zo(t){const e=await qn(t.firebaseDependencies);e&&(await Gn(t.firebaseDependencies,e.token),await Uo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Qo(t,e){try{const n=await Jo(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await It(t.firebaseDependencies,r),n}catch(n){throw await Zo(t),n}}async function an(t,e){const r={token:await Go(t,e),createTime:Date.now(),subscriptionOptions:e};return await It(t,r),r.token}async function ei(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ho(e)})}function ti(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function oi(t){return typeof t=="object"&&!!t&&Un in t}/**
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
 */function ii(t){if(!t||!t.options)throw Xe("App Configuration Object");if(!t.name)throw Xe("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Xe(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Xe(t){return J.create("missing-app-config-values",{valueName:t})}/**
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
 */async function ci(t){try{t.swRegistration=await navigator.serviceWorker.register(Mo,{scope:Po}),t.swRegistration.update().catch(()=>{})}catch(e){throw J.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function li(t,e){if(!e&&!t.swRegistration&&await ci(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw J.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Xn(t,e){if(!navigator)throw J.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw J.create("permission-blocked");return await ui(t,e==null?void 0:e.vapidKey),await li(t,e==null?void 0:e.serviceWorkerRegistration),Xo(t)}/**
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
 */async function fi(t,e,n){const r=di(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Un],message_name:n[Lo],message_time:n[jo],message_device_time:Math.floor(Date.now()/1e3)})}function di(t){switch(t){case ke.NOTIFICATION_CLICKED:return"notification_open";case ke.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */const pi=t=>{const e=new ai(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>hi(e,n)),e},gi=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Xn(e,r)}};function mi(){me(new fe("messaging",pi,"PUBLIC")),me(new fe("messaging-internal",gi,"PRIVATE")),le(ln,un),le(ln,un,"esm2017")}/**
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
 */function vi(t,e){if(!navigator)throw J.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function _i(t=ks()){return bi().then(e=>{if(!e)throw J.create("unsupported-browser")},e=>{throw J.create("indexed-db-unsupported")}),gt(dt(t),"messaging").getImmediate()}async function wi(t,e){return t=dt(t),Xn(t,e)}function yi(t,e){return t=dt(t),vi(t,e)}mi();function fn(t){let e,n,r,s,o,i,a,c,u,l;return a=new nr({props:{func:t[12]}}),{c(){e=y("div"),n=y("div"),r=y("img"),o=L(),i=y("div"),X(a.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0});var p=T(e);n=I(p,"DIV",{class:!0});var h=T(n);r=I(h,"IMG",{src:!0}),o=j(h),i=I(h,"DIV",{class:!0});var O=T(i);Z(a.$$.fragment,O),O.forEach(g),h.forEach(g),p.forEach(g),this.h()},h(){pe(r.src,s="/close.png")||b(r,"src",s),b(i,"class","content svelte-1oj95kd"),b(n,"class","dialog-box svelte-1oj95kd"),b(e,"class","overlay svelte-1oj95kd")},m(f,p){N(f,e,p),m(e,n),m(n,r),m(n,o),m(n,i),Q(a,i,null),c=!0,u||(l=[re(r,"click",t[11]),re(n,"click",Ai),re(e,"click",t[11])],u=!0)},p(f,p){const h={};p&2&&(h.func=f[12]),a.$set(h)},i(f){c||(W(a.$$.fragment,f),c=!0)},o(f){U(a.$$.fragment,f),c=!1},d(f){f&&g(e),ee(a),u=!1,ft(l)}}}function Ii(t){let e,n;return e=new sr({}),{c(){X(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p:Ze,i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Ei(t){let e,n;return e=new rr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[18]}}),{c(){X(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Di(t){let e,n;return e=new hn({props:{f:!0,cardsData:[...t[5]]}}),{c(){X(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function ki(t){let e,n;return e=new hn({props:{f:!1,cardsData:[...t[4]]}}),{c(){X(e.$$.fragment)},l(r){Z(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(W(e.$$.fragment,r),n=!0)},o(r){U(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Si(t){let e,n="Fellowships",r,s,o,i,a="Courses",c,u,l,f,p,h,O;return s=new Ot({props:{f:!0,onClick:t[16],cardsData:[...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4]]}}),u=new Ot({props:{f:!1,onClick:t[17],cardsData:[...t[4]]}}),f=new dr({props:{blogs:t[7]}}),h=new gr({props:{data:t[6]}}),{c(){e=y("div"),e.textContent=n,r=L(),X(s.$$.fragment),o=L(),i=y("div"),i.textContent=a,c=L(),X(u.$$.fragment),l=L(),X(f.$$.fragment),p=L(),X(h.$$.fragment),this.h()},l(d){e=I(d,"DIV",{class:!0,"data-svelte-h":!0}),te(e)!=="svelte-9rjion"&&(e.textContent=n),r=j(d),Z(s.$$.fragment,d),o=j(d),i=I(d,"DIV",{class:!0,"data-svelte-h":!0}),te(i)!=="svelte-4wj5r"&&(i.textContent=a),c=j(d),Z(u.$$.fragment,d),l=j(d),Z(f.$$.fragment,d),p=j(d),Z(h.$$.fragment,d),this.h()},h(){b(e,"class","title"),b(i,"class","title")},m(d,D){N(d,e,D),N(d,r,D),Q(s,d,D),N(d,o,D),N(d,i,D),N(d,c,D),Q(u,d,D),N(d,l,D),Q(f,d,D),N(d,p,D),Q(h,d,D),O=!0},p(d,D){const q={};D&16&&(q.cardsData=[...d[4],...d[4],...d[4],...d[4],...d[4],...d[4],...d[4],...d[4]]),s.$set(q);const V={};D&16&&(V.cardsData=[...d[4]]),u.$set(V);const K={};D&128&&(K.blogs=d[7]),f.$set(K);const x={};D&64&&(x.data=d[6]),h.$set(x)},i(d){O||(W(s.$$.fragment,d),W(u.$$.fragment,d),W(f.$$.fragment,d),W(h.$$.fragment,d),O=!0)},o(d){U(s.$$.fragment,d),U(u.$$.fragment,d),U(f.$$.fragment,d),U(h.$$.fragment,d),O=!1},d(d){d&&(g(e),g(r),g(o),g(i),g(c),g(l),g(p)),ee(s,d),ee(u,d),ee(f,d),ee(h,d)}}}function Ci(t){let e,n,r,s,o,i,a="Courses",c,u,l="Fellowships",f,p,h="Contact us",O,d,D,q,V,K,x="About us",M,R,H,G,z,S,C,v,k,_,A,E,P=t[9]&&fn(t);n=new ir({props:{enableTransparency:!0}});const Ie=[Si,ki,Di,Ei,Ii],Y=[];function se(w,B){return w[1]==0?0:w[1]==1?1:w[1]==2?2:w[1]==3?3:4}return S=se(t),C=Y[S]=Ie[S](t),k=new ar({props:{scrollBoxHeight:t[8]}}),{c(){P&&P.c(),e=L(),X(n.$$.fragment),r=L(),s=y("div"),o=y("ul"),i=y("li"),i.textContent=a,c=L(),u=y("li"),u.textContent=l,f=L(),p=y("li"),p.textContent=h,d=L(),D=y("div"),q=y("div"),V=y("div"),K=y("p"),K.textContent=x,M=L(),R=y("p"),H=Oe(t[0]),G=L(),z=y("div"),C.c(),v=L(),X(k.$$.fragment),this.h()},l(w){P&&P.l(w),e=j(w),Z(n.$$.fragment,w),r=j(w),s=I(w,"DIV",{class:!0,id:!0,style:!0});var B=T(s);o=I(B,"UL",{});var ne=T(o);i=I(ne,"LI",{"data-svelte-h":!0}),te(i)!=="svelte-15gd3eg"&&(i.textContent=a),c=j(ne),u=I(ne,"LI",{"data-svelte-h":!0}),te(u)!=="svelte-1w3oh8g"&&(u.textContent=l),f=j(ne),p=I(ne,"LI",{"data-svelte-h":!0}),te(p)!=="svelte-1pessln"&&(p.textContent=h),ne.forEach(g),B.forEach(g),d=j(w),D=I(w,"DIV",{class:!0});var Ee=T(D);q=I(Ee,"DIV",{class:!0});var St=T(q);V=I(St,"DIV",{class:!0});var Se=T(V);K=I(Se,"P",{style:!0,"data-svelte-h":!0}),te(K)!=="svelte-1mkz37p"&&(K.textContent=x),M=j(Se),R=I(Se,"P",{style:!0});var Ct=T(R);H=Be(Ct,t[0]),Ct.forEach(g),Se.forEach(g),St.forEach(g),Ee.forEach(g),G=j(w),z=I(w,"DIV",{class:!0});var Tt=T(z);C.l(Tt),Tt.forEach(g),v=j(w),Z(k.$$.fragment,w),this.h()},h(){b(s,"class","side-menu svelte-1oj95kd"),b(s,"id","menuu"),b(s,"style",O=`display: ${t[10]?"block":"none"};`),$(K,"position","relative"),$(K,"right","70px"),$(R,"font-weight","300"),$(R,"text-align","left"),$(R,"font-size","20px"),b(V,"class","image-text svelte-1oj95kd"),b(q,"class","image-overlay svelte-1oj95kd"),b(D,"class","header-image svelte-1oj95kd"),b(z,"class","scroll-box svelte-1oj95kd")},m(w,B){P&&P.m(w,B),N(w,e,B),Q(n,w,B),N(w,r,B),N(w,s,B),m(s,o),m(o,i),m(o,c),m(o,u),m(o,f),m(o,p),N(w,d,B),N(w,D,B),m(D,q),m(q,V),m(V,K),m(V,M),m(V,R),m(R,H),N(w,G,B),N(w,z,B),Y[S].m(z,null),N(w,v,B),Q(k,w,B),_=!0,A||(E=[re(i,"click",t[13]),re(u,"click",t[14]),re(p,"click",t[15])],A=!0)},p(w,[B]){w[9]?P?(P.p(w,B),B&512&&W(P,1)):(P=fn(w),P.c(),W(P,1),P.m(e.parentNode,e)):P&&(Qe(),U(P,1,1,()=>{P=null}),et()),(!_||B&1024&&O!==(O=`display: ${w[10]?"block":"none"};`))&&b(s,"style",O),(!_||B&1)&&Ne(H,w[0]);let ne=S;S=se(w),S===ne?Y[S].p(w,B):(Qe(),U(Y[ne],1,1,()=>{Y[ne]=null}),et(),C=Y[S],C?C.p(w,B):(C=Y[S]=Ie[S](w),C.c()),W(C,1),C.m(z,null));const Ee={};B&256&&(Ee.scrollBoxHeight=w[8]),k.$set(Ee)},i(w){_||(W(P),W(n.$$.fragment,w),W(C),W(k.$$.fragment,w),_=!0)},o(w){U(P),U(n.$$.fragment,w),U(C),U(k.$$.fragment,w),_=!1},d(w){w&&(g(e),g(r),g(s),g(d),g(D),g(G),g(z),g(v)),P&&P.d(w),ee(n,w),Y[S].d(),ee(k,w),A=!1,ft(E)}}}function Ti(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ai=t=>t.stopPropagation();function $i(t,e,n){let r="",s=0;async function o(v,k,_){const A=await fetch("https://dentists-backend.onrender.com/api/"+v,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(k)});if(!A.ok)throw or("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${A.status}`);const E=await A.json();return _&&_(),E}let i=!1;async function a(){o("n/gp").then(v=>{v=v.d,n(6,O=v.map(k=>Object({title:k.productName,text:"Price : "+k.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+k.productID+"/0",discount:k.discount})))})}async function c(){o("n/gc").then(v=>{v=v.d,n(4,p=v.map(k=>Object({title:k.courseName,id:k.courseID,text:k.courseDetails,duration:k.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+k.courseID,clickHandler:()=>{const _=document.createElement("a");_.href="/courses/"+k.courseID,_.click(),k.courseID,n(2,i=!1)}}))),console.log(p)})}let u;async function l(){o("n/gf").then(v=>{v=v.d,n(5,h=v.map(k=>Object({id:k.fellowshipID,title:k.fellowshipName,duration:k.fellowshipDuration,text:k.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+k.fellowshipID,clickHandler:()=>{k.fellowshipID,n(2,i=!0)}})))})}async function f(){o("n/gb").then(v=>{v=v.d,n(7,d=v.map(k=>Object({id:k.blogID,text:k.blogDetails,title:k.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+k.blogID,clickHandler:()=>{}})))})}let p=[],h=[],O=[],d=[];function D(){const v=document.querySelector(".scroll-box");v&&n(8,q=Number(getComputedStyle(v).height.split("px")[0]))}let q=0;$e(()=>{document.body.addEventListener("click",function(E){console.log(E.target.id),console.log(x),E.target.id!="menuuu"&&E.target.id!="menuio"&&x&&n(10,x=!1)}),setInterval(()=>{D()},500),o("aus").then(E=>{n(0,r=E.d)}),window.addEventListener("resize",D),D();const k=In({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),_=_i(k);wi(_,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(E=>{console.log(E)}),yi(_,E=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(E)}),Promise.all([c(),l(),f(),a()]).then(()=>{addEventListener("ocd",E=>{console.log(E.detail),E.detail.f?(console.log(h),console.log(E.detail.id),n(3,u=h.filter(P=>P.id==E.detail.id)[0])):n(3,u=p.filter(P=>P.id==E.detail.id)[0])})});const A=()=>{};return window.addEventListener("scroll",A),document.body.style.overflow=V?"hidden":"auto",()=>{window.removeEventListener("scroll",A),window.removeEventListener("resize",D),document.body.style.overflow="auto"}}),Zn(()=>{D()});let V=!1;function K(){n(9,V=!1)}Ti().then(v=>{v||console.log("Developer tools are closed.")});let x=!1;return[r,s,i,u,p,h,O,d,q,V,x,K,()=>{n(1,s=4),K()},function(){console.log("CLICKED HERE");const v=document.createElement("a");v.href="/courses",v.click()},function(){console.log("clicked here");const v=document.createElement("a");v.href="/fellowships",v.click()},function(){const v=document.createElement("a");v.href="/contact-us",v.click()},function(){const v=document.createElement("a");v.href="/fellowships",v.click()},function(){const v=document.createElement("a");v.href="/courses",v.click()},function(){const v=document.createElement("a");v.href="/contact-us",v.click()}]}class Wi extends Me{constructor(e){super(),Pe(this,e,$i,Ci,Ae,{})}}export{Wi as component};
