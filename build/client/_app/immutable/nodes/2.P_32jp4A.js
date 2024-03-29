import{s as Ae,e as _,h as j,b as w,k as T,f as v,j as R,m as g,o as B,i as P,p as b,v as dt,w as $e,t as je,d as ne,l as Re,q as te,r as He,n as Ne,y as Ve,z as ye,x as ue,F as Ot,G as Bt,H as we,K as sr}from"../chunks/scheduler.BXmKrZtQ.js";import{S as Oe,i as Be,c as J,b as Y,m as Z,t as x,g as ke,e as Se,a as W,d as X}from"../chunks/index.TwpJmkAI.js";/* empty css                                                     */import{C as or}from"../chunks/Card.BupipO3y.js";import{e as ae,u as ir,d as ar}from"../chunks/each.nhu_Gb8S.js";import{B as ht}from"../chunks/Button.CwPZNv_D.js";import"../chunks/Map.BULFna2g.js";import{G as bn}from"../chunks/Grid.CNv7r3iI.js";import{L as _n}from"../chunks/Login.kxBpBqJZ.js";import{C as cr}from"../chunks/CourseData.BoUJp8-C.js";import{C as lr}from"../chunks/Contact.CW7ou_cY.js";import{n as fr}from"../chunks/not.DNvn3Bfc.js";/* empty css                                                     */import{F as ur}from"../chunks/Footer.rW2m0jBm.js";function Mt(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function Nt(t){let e,n;return e=new or({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){J(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function dr(t){let e,n,r,s,o,i,c=ae([...t[0],...t[0],...t[0],...t[0]]),a=[];for(let l=0;l<c.length;l+=1)a[l]=Nt(Mt(t,c,l));const d=l=>W(a[l],1,1,()=>{a[l]=null});return o=new ht({props:{text:"Show all ",useTJ:!0,src:"back-icon.png",padding:!1,marginL:"5px",clickHandler:t[1]}}),{c(){e=_("div"),n=_("div");for(let l=0;l<a.length;l+=1)a[l].c();r=j(),s=_("div"),J(o.$$.fragment),this.h()},l(l){e=w(l,"DIV",{style:!0,class:!0});var f=T(e);n=w(f,"DIV",{class:!0,id:!0});var h=T(n);for(let y=0;y<a.length;y+=1)a[y].l(h);h.forEach(v),f.forEach(v),r=R(l),s=w(l,"DIV",{style:!0});var m=T(s);Y(o.$$.fragment,m),m.forEach(v),this.h()},h(){g(n,"class","row svelte-1l32lre"),g(n,"id","row-container"),B(e,"margin-bottom","0"),B(e,"height","406px"),g(e,"class","row svelte-1l32lre"),B(s,"display","grid"),B(s,"place-items","center"),B(s,"margin-bottom","90px"),B(s,"margin-top","20px")},m(l,f){P(l,e,f),b(e,n);for(let h=0;h<a.length;h+=1)a[h]&&a[h].m(n,null);P(l,r,f),P(l,s,f),Z(o,s,null),i=!0},p(l,[f]){if(f&5){c=ae([...l[0],...l[0],...l[0],...l[0]]);let m;for(m=0;m<c.length;m+=1){const y=Mt(l,c,m);a[m]?(a[m].p(y,f),x(a[m],1)):(a[m]=Nt(y),a[m].c(),x(a[m],1),a[m].m(n,null))}for(ke(),m=c.length;m<a.length;m+=1)d(m);Se()}const h={};f&2&&(h.clickHandler=l[1]),o.$set(h)},i(l){if(!i){for(let f=0;f<c.length;f+=1)x(a[f]);x(o.$$.fragment,l),i=!0}},o(l){a=a.filter(Boolean);for(let f=0;f<a.length;f+=1)W(a[f]);W(o.$$.fragment,l),i=!1},d(l){l&&(v(e),v(r),v(s)),dt(a,l),X(o)}}}function hr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,$e(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class Lt extends Oe{constructor(e){super(),Be(this,e,hr,dr,Ae,{cardsData:0,onClick:1,f:2})}}function Pt(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function jt(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function Rt(t){let e,n;return{c(){e=_("img"),this.h()},l(r){e=w(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){ue(e.src,n=t[15].src)||g(e,"src",n),g(e,"alt","Neumorphic Picture"),g(e,"id","blog-image"),g(e,"class","rectangular-image svelte-14rovze")},m(r,s){P(r,e,s)},p(r,s){s&1&&!ue(e.src,n=r[15].src)&&g(e,"src",n)},d(r){r&&v(e)}}}function Ht(t){let e,n=t[14]==t[2]&&Rt(t);return{c(){n&&n.c(),e=ye()},l(r){n&&n.l(r),e=ye()},m(r,s){n&&n.m(r,s),P(r,e,s)},p(r,s){r[14]==r[2]?n?n.p(r,s):(n=Rt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&v(e),n&&n.d(r)}}}function Vt(t){let e,n,r=t[0][t[2]].title+"",s,o,i=t[0].length>0&&Ft(t);return{c(){e=_("div"),n=_("h2"),s=je(r),o=j(),i&&i.c(),this.h()},l(c){e=w(c,"DIV",{class:!0});var a=T(e);n=w(a,"H2",{style:!0,class:!0});var d=T(n);s=Re(d,r),d.forEach(v),o=R(a),i&&i.l(a),a.forEach(v),this.h()},h(){B(n,"margin","-2px 0 -10px 0"),g(n,"class","svelte-14rovze"),g(e,"class","captionCont svelte-14rovze")},m(c,a){P(c,e,a),b(e,n),b(n,s),b(e,o),i&&i.m(e,null)},p(c,a){a&5&&r!==(r=c[0][c[2]].title+"")&&He(s,r),c[0].length>0?i?i.p(c,a):(i=Ft(c),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(c){c&&v(e),i&&i.d()}}}function Ft(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=_("p"),r=je(n),this.h()},l(s){e=w(s,"P",{class:!0});var o=T(e);r=Re(o,n),o.forEach(v),this.h()},h(){g(e,"class","svelte-14rovze")},m(s,o){P(s,e,o),b(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&He(r,n)},d(s){s&&v(e)}}}function zt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=_("div"),this.h()},l(c){n=w(c,"DIV",{style:!0,class:!0}),T(n).forEach(v),this.h()},h(){B(n,"margin-top","10px"),B(n,"margin-bottom","10px"),g(n,"class",r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze"),this.first=n},m(c,a){P(c,n,a),s||(o=te(n,"click",i),s=!0)},p(c,a){e=c,a&4&&r!==(r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze")&&g(n,"class",r)},d(c){c&&v(n),s=!1,o()}}}function pr(t){let e,n,r,s='<img src="/open.png" style="right: 10%; width: 33px;" class="svelte-14rovze"/>',o,i,c,a,d,l,f,h,m,y="<",u,p,C=">",N,L,U,H=[],k=new Map,A,G,K=ae(t[0]),O=[];for(let E=0;E<K.length;E+=1)O[E]=Ht(jt(t,K,E));let M=t[0].length>0&&Vt(t),I=ae([0,1,2]);const $=E=>E[14];for(let E=0;E<3;E+=1){let V=Pt(t,I,E),S=$(V);k.set(S,H[E]=zt(S,V))}return{c(){e=_("div"),n=_("div"),r=_("button"),r.innerHTML=s,o=j(),i=_("div"),c=_("div"),a=je(t[1]),d=j(),l=_("div"),f=_("div");for(let E=0;E<O.length;E+=1)O[E].c();h=j(),m=_("div"),m.textContent=y,u=j(),p=_("div"),p.textContent=C,N=j(),M&&M.c(),L=j(),U=_("div");for(let E=0;E<3;E+=1)H[E].c();this.h()},l(E){e=w(E,"DIV",{class:!0});var V=T(e);n=w(V,"DIV",{class:!0});var S=T(n);r=w(S,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),ne(r)!=="svelte-hwduld"&&(r.innerHTML=s),S.forEach(v),o=R(V),i=w(V,"DIV",{style:!0,class:!0});var z=T(i);c=w(z,"DIV",{class:!0});var Ee=T(c);a=Re(Ee,t[1]),Ee.forEach(v),z.forEach(v),d=R(V),l=w(V,"DIV",{class:!0});var ee=T(l);f=w(ee,"DIV",{class:!0});var se=T(f);for(let F=0;F<O.length;F+=1)O[F].l(se);h=R(se),m=w(se,"DIV",{class:!0,"data-svelte-h":!0}),ne(m)!=="svelte-nl1vs9"&&(m.textContent=y),u=R(se),p=w(se,"DIV",{class:!0,"data-svelte-h":!0}),ne(p)!=="svelte-dra8cl"&&(p.textContent=C),se.forEach(v),N=R(ee),M&&M.l(ee),L=R(ee),U=w(ee,"DIV",{class:!0});var D=T(U);for(let F=0;F<3;F+=1)H[F].l(D);D.forEach(v),ee.forEach(v),V.forEach(v),this.h()},h(){B(r,"padding","3px 4px"),B(r,"float","inline-end"),B(r,"right","10%"),B(r,"bottom","13px"),g(r,"class","svelte-14rovze"),g(n,"class","icon svelte-14rovze"),g(c,"class","#2e3b6f-title svelte-14rovze"),B(i,"display","flex"),B(i,"justify-content","space-between"),B(i,"align-items","center"),B(i,"padding","10px"),g(i,"class","svelte-14rovze"),g(m,"class","nextImageBtn svelte-14rovze"),g(p,"class","previousImageBtn svelte-14rovze"),g(f,"class","imageCont svelte-14rovze"),g(U,"class","dots-container svelte-14rovze"),g(l,"class","postCard svelte-14rovze"),g(e,"class","svelte-14rovze")},m(E,V){P(E,e,V),b(e,n),b(n,r),b(e,o),b(e,i),b(i,c),b(c,a),b(e,d),b(e,l),b(l,f);for(let S=0;S<O.length;S+=1)O[S]&&O[S].m(f,null);b(f,h),b(f,m),b(f,u),b(f,p),b(l,N),M&&M.m(l,null),b(l,L),b(l,U);for(let S=0;S<3;S+=1)H[S]&&H[S].m(U,null);A||(G=[te(r,"click",t[5]),te(m,"click",t[6]),te(p,"click",t[7])],A=!0)},p(E,[V]){if(V&2&&He(a,E[1]),V&5){K=ae(E[0]);let S;for(S=0;S<K.length;S+=1){const z=jt(E,K,S);O[S]?O[S].p(z,V):(O[S]=Ht(z),O[S].c(),O[S].m(f,h))}for(;S<O.length;S+=1)O[S].d(1);O.length=K.length}E[0].length>0?M?M.p(E,V):(M=Vt(E),M.c(),M.m(l,L)):M&&(M.d(1),M=null),V&12&&(I=ae([0,1,2]),H=ir(H,V,$,1,E,I,k,U,ar,zt,null,Pt))},i:Ne,o:Ne,d(E){E&&v(e),dt(O,E),M&&M.d();for(let V=0;V<3;V+=1)H[V].d();A=!1,Ve(G)}}}function gr(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function c(h){console.log(h),n(2,i=h)}$e(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function m(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}m(),setInterval(m,7e3)});const a=()=>{location.href="/blogs"},d=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},l=()=>{n(2,i=(i+1)%o.length)},f=h=>c(h);return t.$$set=h=>{"firstTitle"in h&&n(1,r=h.firstTitle),"secondTitle"in h&&n(4,s=h.secondTitle),"blogs"in h&&n(0,o=h.blogs)},[o,r,i,c,s,a,d,l,f]}class mr extends Oe{constructor(e){super(),Be(this,e,gr,pr,Ae,{firstTitle:1,secondTitle:4,blogs:0})}}function xt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Ut(t){let e,n,r,s;return{c(){e=_("div"),n=_("div"),r=_("img"),this.h()},l(o){e=w(o,"DIV",{class:!0});var i=T(e);n=w(i,"DIV",{class:!0,style:!0});var c=T(n);r=w(c,"IMG",{src:!0,style:!0,class:!0}),c.forEach(v),i.forEach(v),this.h()},h(){ue(r.src,s=t[0][t[1]%t[0].length].src)||g(r,"src",s),B(r,"border-radius","10px"),g(r,"class","svelte-f7fgfc"),g(n,"class","postCard svelte-f7fgfc"),B(n,"width","270px"),B(n,"height","270px"),B(n,"border-radius","10px"),B(n,"background-color","#e6e7ee"),B(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),B(n,"margin-bottom","50px"),g(e,"class","image-card svelte-f7fgfc")},m(o,i){P(o,e,i),b(e,n),b(n,r)},p(o,i){i&3&&!ue(r.src,s=o[0][o[1]%o[0].length].src)&&g(r,"src",s)},d(o){o&&v(e)}}}function Kt(t){let e,n=ae(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=qt(xt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ye()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=ye()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);P(s,e,o)},p(s,o){if(o&1){n=ae(s[0]);let i;for(i=0;i<n.length;i+=1){const c=xt(s,n,i);r[i]?r[i].p(c,o):(r[i]=qt(c),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&v(e),dt(r,s)}}}function Wt(t){let e,n,r,s;return{c(){e=_("div"),n=_("img"),s=j(),this.h()},l(o){e=w(o,"DIV",{class:!0,style:!0});var i=T(e);n=w(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(v),s=R(o),this.h()},h(){ue(n.src,r=t[0][(t[5]+1)%t[0].length].src)||g(n,"src",r),B(n,"border-radius","10px"),g(n,"class","svelte-f7fgfc"),g(e,"class","postCard svelte-f7fgfc"),g(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){P(o,e,i),b(e,n),P(o,s,i)},p(o,i){i&1&&!ue(n.src,r=o[0][(o[5]+1)%o[0].length].src)&&g(n,"src",r)},d(o){o&&(v(e),v(s))}}}function qt(t){let e,n=t[5]+1!=t[0].length&&Wt(t);return{c(){n&&n.c(),e=ye()},l(r){n&&n.l(r),e=ye()},m(r,s){n&&n.m(r,s),P(r,e,s)},p(r,s){r[5]+1!=r[0].length?n?n.p(r,s):(n=Wt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&v(e),n&&n.d(r)}}}function vr(t){let e,n,r="Products",s,o,i,c,a,d='<div class="black-title svelte-f7fgfc">Title</div> <div class="small-note svelte-f7fgfc">A small note goes here.</div> <div class="big-text svelte-f7fgfc">Big bold black text.</div>',l,f,h,m,y,u,p,C,N,L="",U,H=t[0].length>=1&&Ut(t),k=t[0].length>1&&Kt(t);return p=new ht({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=_("div"),n=_("div"),n.textContent=r,s=j(),o=_("div"),i=_("div"),H&&H.c(),c=j(),a=_("div"),a.innerHTML=d,l=j(),f=_("div"),h=_("div"),m=_("div"),k&&k.c(),y=j(),u=_("div"),J(p.$$.fragment),C=j(),N=_("div"),N.innerHTML=L,this.h()},l(A){e=w(A,"DIV",{style:!0});var G=T(e);n=w(G,"DIV",{class:!0,"data-svelte-h":!0}),ne(n)!=="svelte-t04v0b"&&(n.textContent=r),s=R(G),o=w(G,"DIV",{class:!0});var K=T(o);i=w(K,"DIV",{class:!0});var O=T(i);H&&H.l(O),c=R(O),a=w(O,"DIV",{class:!0,"data-svelte-h":!0}),ne(a)!=="svelte-1sx5tfn"&&(a.innerHTML=d),O.forEach(v),l=R(K),f=w(K,"DIV",{style:!0});var M=T(f);h=w(M,"DIV",{style:!0});var I=T(h);m=w(I,"DIV",{class:!0});var $=T(m);k&&k.l($),$.forEach(v),I.forEach(v),y=R(M),u=w(M,"DIV",{style:!0});var E=T(u);Y(p.$$.fragment,E),E.forEach(v),M.forEach(v),C=R(K),N=w(K,"DIV",{class:!0,"data-svelte-h":!0}),ne(N)!=="svelte-cpoj1k"&&(N.innerHTML=L),K.forEach(v),G.forEach(v),this.h()},h(){g(n,"class","#2e3b6f-title"),g(a,"class","text-container svelte-f7fgfc"),g(i,"class","first-row svelte-f7fgfc"),g(m,"class","row-images svelte-f7fgfc"),B(h,"overflow-x","scroll"),g(u,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),B(f,"display","flex"),g(N,"class","show-call-button svelte-f7fgfc"),g(o,"class","neumorphic-card svelte-f7fgfc"),B(e,"margin-top","90px"),B(e,"height","560px")},m(A,G){P(A,e,G),b(e,n),b(e,s),b(e,o),b(o,i),H&&H.m(i,null),b(i,c),b(i,a),b(o,l),b(o,f),b(f,h),b(h,m),k&&k.m(m,null),b(f,y),b(f,u),Z(p,u,null),b(o,C),b(o,N),U=!0},p(A,[G]){A[0].length>=1?H?H.p(A,G):(H=Ut(A),H.c(),H.m(i,c)):H&&(H.d(1),H=null),A[0].length>1?k?k.p(A,G):(k=Kt(A),k.c(),k.m(m,null)):k&&(k.d(1),k=null)},i(A){U||(x(p.$$.fragment,A),U=!0)},o(A){W(p.$$.fragment,A),U=!1},d(A){A&&v(e),H&&H.d(),k&&k.d(),X(p)}}}function br(t,e,n){let{data:r=[]}=e,s=0;setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),$e(()=>{console.log(r)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,r=i.data)},[r,s,o]}class _r extends Oe{constructor(e){super(),Be(this,e,br,vr,Ae,{data:0})}}var Gt={};/**
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
 */const wn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],c=t[n++],a=((s&7)<<18|(o&63)<<12|(i&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},yn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,c=i?t[s+1]:0,a=s+2<t.length,d=a?t[s+2]:0,l=o>>2,f=(o&3)<<4|c>>4;let h=(c&15)<<2|d>>6,m=d&63;a||(m=64,i||(h=64)),r.push(n[l],n[f],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const d=s<t.length?n[t.charAt(s)]:64;++s;const f=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||c==null||d==null||f==null)throw new yr;const h=o<<2|c>>4;if(r.push(h),d!==64){const m=c<<4&240|d>>2;if(r.push(m),f!==64){const y=d<<6&192|f;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(t){const e=wn(t);return yn.encodeByteArray(e,!0)},In=function(t){return Ir(t).replace(/\./g,"")},Er=function(t){try{return yn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Dr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const kr=()=>Dr().__FIREBASE_DEFAULTS__,Sr=()=>{if(typeof process>"u"||typeof Gt>"u")return;const t=Gt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Tr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Er(t[1]);return e&&JSON.parse(e)},Cr=()=>{try{return kr()||Sr()||Tr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},En=()=>{var t;return(t=Cr())===null||t===void 0?void 0:t.config};/**
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
 */class Ar{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function Dn(){try{return typeof indexedDB=="object"}catch{return!1}}function kn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function $r(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Or="FirebaseError";class Ie extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Or,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fe.prototype.create)}}class Fe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Br(o,r):"Error",c=`${this.serviceName}: ${i} (${s}).`;return new Ie(s,c,r)}}function Br(t,e){return t.replace(Mr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mr=/\{\$([^}]+)}/g;function rt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Jt(o)&&Jt(i)){if(!rt(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Jt(t){return t!==null&&typeof t=="object"}/**
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
 */function pt(t){return t&&t._delegate?t._delegate:t}class de{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Nr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ar;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pr(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lr(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lr(t){return t===he?void 0:t}function Pr(t){return t.instantiationMode==="EAGER"}/**
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
 */class jr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Rr={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Hr=q.INFO,Vr={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Fr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Vr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zr{constructor(e){this.name=e,this._logLevel=Hr,this._logHandler=Fr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Rr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const xr=(t,e)=>e.some(n=>t instanceof n);let Yt,Zt;function Ur(){return Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kr(){return Zt||(Zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sn=new WeakMap,st=new WeakMap,Tn=new WeakMap,Ue=new WeakMap,gt=new WeakMap;function Wr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ie(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Sn.set(n,t)}).catch(()=>{}),gt.set(e,t),e}function qr(t){if(st.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});st.set(t,e)}let ot={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return st.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Tn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gr(t){ot=t(ot)}function Jr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ke(this),e,...n);return Tn.set(r,e.sort?e.sort():[e]),ie(r)}:Kr().includes(t)?function(...e){return t.apply(Ke(this),e),ie(Sn.get(this))}:function(...e){return ie(t.apply(Ke(this),e))}}function Yr(t){return typeof t=="function"?Jr(t):(t instanceof IDBTransaction&&qr(t),xr(t,Ur())?new Proxy(t,ot):t)}function ie(t){if(t instanceof IDBRequest)return Wr(t);if(Ue.has(t))return Ue.get(t);const e=Yr(t);return e!==t&&(Ue.set(t,e),gt.set(e,t)),e}const Ke=t=>gt.get(t);function mt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),c=ie(i);return r&&i.addEventListener("upgradeneeded",a=>{r(ie(i.result),a.oldVersion,a.newVersion,ie(i.transaction),a)}),n&&i.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),c.then(a=>{o&&a.addEventListener("close",()=>o()),s&&a.addEventListener("versionchange",d=>s(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}function We(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ie(n).then(()=>{})}const Zr=["get","getKey","getAll","getAllKeys","count"],Xr=["put","add","delete","clear"],qe=new Map;function Xt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qe.get(e))return qe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zr.includes(n)))return;const o=async function(i,...c){const a=this.transaction(i,s?"readwrite":"readonly");let d=a.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&a.done]))[0]};return qe.set(e,o),o}Gr(t=>({...t,get:(e,n,r)=>Xt(e,n)||t.get(e,n,r),has:(e,n)=>!!Xt(e,n)||t.has(e,n)}));/**
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
 */class Qr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(es(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function es(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const it="@firebase/app",Qt="0.9.25";/**
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
 */const ge=new zr("@firebase/app"),ts="@firebase/app-compat",ns="@firebase/analytics-compat",rs="@firebase/analytics",ss="@firebase/app-check-compat",os="@firebase/app-check",is="@firebase/auth",as="@firebase/auth-compat",cs="@firebase/database",ls="@firebase/database-compat",fs="@firebase/functions",us="@firebase/functions-compat",ds="@firebase/installations",hs="@firebase/installations-compat",ps="@firebase/messaging",gs="@firebase/messaging-compat",ms="@firebase/performance",vs="@firebase/performance-compat",bs="@firebase/remote-config",_s="@firebase/remote-config-compat",ws="@firebase/storage",ys="@firebase/storage-compat",Is="@firebase/firestore",Es="@firebase/firestore-compat",Ds="firebase";/**
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
 */const at="[DEFAULT]",ks={[it]:"fire-core",[ts]:"fire-core-compat",[rs]:"fire-analytics",[ns]:"fire-analytics-compat",[os]:"fire-app-check",[ss]:"fire-app-check-compat",[is]:"fire-auth",[as]:"fire-auth-compat",[cs]:"fire-rtdb",[ls]:"fire-rtdb-compat",[fs]:"fire-fn",[us]:"fire-fn-compat",[ds]:"fire-iid",[hs]:"fire-iid-compat",[ps]:"fire-fcm",[gs]:"fire-fcm-compat",[ms]:"fire-perf",[vs]:"fire-perf-compat",[bs]:"fire-rc",[_s]:"fire-rc-compat",[ws]:"fire-gcs",[ys]:"fire-gcs-compat",[Is]:"fire-fst",[Es]:"fire-fst-compat","fire-js":"fire-js",[Ds]:"fire-js-all"};/**
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
 */const Le=new Map,ct=new Map;function Ss(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function me(t){const e=t.name;if(ct.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of Le.values())Ss(n,t);return!0}function vt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Ts={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new Fe("app","Firebase",Ts);/**
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
 */class Cs{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function Cn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(n||(n=En()),!n)throw ce.create("no-options");const o=Le.get(s);if(o){if(rt(n,o.options)&&rt(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const i=new jr(s);for(const a of ct.values())i.addComponent(a);const c=new Cs(n,r,i);return Le.set(s,c),c}function As(t=at){const e=Le.get(t);if(!e&&t===at&&En())return Cn();if(!e)throw ce.create("no-app",{appName:t});return e}function le(t,e,n){var r;let s=(r=ks[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const c=[`Unable to register library "${s}" with version "${e}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&c.push("and"),i&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(c.join(" "));return}me(new de(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $s="firebase-heartbeat-database",Os=1,Te="firebase-heartbeat-store";let Ge=null;function An(){return Ge||(Ge=mt($s,Os,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Te)}}}).catch(t=>{throw ce.create("idb-open",{originalErrorMessage:t.message})})),Ge}async function Bs(t){try{return await(await An()).transaction(Te).objectStore(Te).get($n(t))}catch(e){if(e instanceof Ie)ge.warn(e.message);else{const n=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(n.message)}}}async function en(t,e){try{const r=(await An()).transaction(Te,"readwrite");await r.objectStore(Te).put(e,$n(t)),await r.done}catch(n){if(n instanceof Ie)ge.warn(n.message);else{const r=ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ge.warn(r.message)}}}function $n(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ms=1024,Ns=30*24*60*60*1e3;class Ls{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new js(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=tn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=Ns}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tn(),{heartbeatsToSend:r,unsentEntries:s}=Ps(this._heartbeatsCache.heartbeats),o=In(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function tn(){return new Date().toISOString().substring(0,10)}function Ps(t,e=Ms){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),nn(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class js{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dn()?kn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return en(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return en(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nn(t){return In(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Rs(t){me(new de("platform-logger",e=>new Qr(e),"PRIVATE")),me(new de("heartbeat",e=>new Ls(e),"PRIVATE")),le(it,Qt,t),le(it,Qt,"esm2017"),le("fire-js","")}Rs("");var Hs="firebase",Vs="10.7.1";/**
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
 */le(Hs,Vs,"app");const Fs=(t,e)=>e.some(n=>t instanceof n);let rn,sn;function zs(){return rn||(rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xs(){return sn||(sn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const On=new WeakMap,lt=new WeakMap,Bn=new WeakMap,Je=new WeakMap,bt=new WeakMap;function Us(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(fe(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&On.set(n,t)}).catch(()=>{}),bt.set(e,t),e}function Ks(t){if(lt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});lt.set(t,e)}let ft={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return fe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ws(t){ft=t(ft)}function qs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ye(this),e,...n);return Bn.set(r,e.sort?e.sort():[e]),fe(r)}:xs().includes(t)?function(...e){return t.apply(Ye(this),e),fe(On.get(this))}:function(...e){return fe(t.apply(Ye(this),e))}}function Gs(t){return typeof t=="function"?qs(t):(t instanceof IDBTransaction&&Ks(t),Fs(t,zs())?new Proxy(t,ft):t)}function fe(t){if(t instanceof IDBRequest)return Us(t);if(Je.has(t))return Je.get(t);const e=Gs(t);return e!==t&&(Je.set(t,e),bt.set(e,t)),e}const Ye=t=>bt.get(t);function Js(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),c=fe(i);return r&&i.addEventListener("upgradeneeded",a=>{r(fe(i.result),a.oldVersion,a.newVersion,fe(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),c.then(a=>{o&&a.addEventListener("close",()=>o()),s&&a.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Ys=["get","getKey","getAll","getAllKeys","count"],Zs=["put","add","delete","clear"],Ze=new Map;function on(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ze.get(e))return Ze.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ys.includes(n)))return;const o=async function(i,...c){const a=this.transaction(i,s?"readwrite":"readonly");let d=a.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),s&&a.done]))[0]};return Ze.set(e,o),o}Ws(t=>({...t,get:(e,n,r)=>on(e,n)||t.get(e,n,r),has:(e,n)=>!!on(e,n)||t.has(e,n)}));const Mn="@firebase/installations",_t="0.6.4";/**
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
 */const Nn=1e4,Ln=`w:${_t}`,Pn="FIS_v2",Xs="https://firebaseinstallations.googleapis.com/v1",Qs=60*60*1e3,eo="installations",to="Installations";/**
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
 */const no={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ve=new Fe(eo,to,no);function jn(t){return t instanceof Ie&&t.code.includes("request-failed")}/**
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
 */function Rn({projectId:t}){return`${Xs}/projects/${t}/installations`}function Hn(t){return{token:t.token,requestStatus:2,expiresIn:so(t.expiresIn),creationTime:Date.now()}}async function Vn(t,e){const r=(await e.json()).error;return ve.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ro(t,{refreshToken:e}){const n=Fn(t);return n.append("Authorization",oo(e)),n}async function zn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function so(t){return Number(t.replace("s","000"))}function oo(t){return`${Pn} ${t}`}/**
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
 */async function io({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Rn(t),s=Fn(t),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const i={fid:n,authVersion:Pn,appId:t.appId,sdkVersion:Ln},c={method:"POST",headers:s,body:JSON.stringify(i)},a=await zn(()=>fetch(r,c));if(a.ok){const d=await a.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Hn(d.authToken)}}else throw await Vn("Create Installation",a)}/**
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
 */function xn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ao(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const co=/^[cdef][\w-]{21}$/,ut="";function lo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=fo(t);return co.test(n)?n:ut}catch{return ut}}function fo(t){return ao(t).substr(0,22)}/**
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
 */function ze(t){return`${t.appName}!${t.appId}`}/**
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
 */const Un=new Map;function Kn(t,e){const n=ze(t);Wn(n,e),uo(n,e)}function Wn(t,e){const n=Un.get(t);if(n)for(const r of n)r(e)}function uo(t,e){const n=ho();n&&n.postMessage({key:t,fid:e}),po()}let pe=null;function ho(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=t=>{Wn(t.data.key,t.data.fid)}),pe}function po(){Un.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const go="firebase-installations-database",mo=1,be="firebase-installations-store";let Xe=null;function wt(){return Xe||(Xe=Js(go,mo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(be)}}})),Xe}async function Pe(t,e){const n=ze(t),s=(await wt()).transaction(be,"readwrite"),o=s.objectStore(be),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Kn(t,e.fid),e}async function qn(t){const e=ze(t),r=(await wt()).transaction(be,"readwrite");await r.objectStore(be).delete(e),await r.done}async function xe(t,e){const n=ze(t),s=(await wt()).transaction(be,"readwrite"),o=s.objectStore(be),i=await o.get(n),c=e(i);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!i||i.fid!==c.fid)&&Kn(t,c.fid),c}/**
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
 */async function yt(t){let e;const n=await xe(t.appConfig,r=>{const s=vo(r),o=bo(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ut?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function vo(t){const e=t||{fid:lo(),registrationStatus:0};return Gn(e)}function bo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ve.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_o(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wo(t)}:{installationEntry:e}}async function _o(t,e){try{const n=await io(t,e);return Pe(t.appConfig,n)}catch(n){throw jn(n)&&n.customData.serverCode===409?await qn(t.appConfig):await Pe(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wo(t){let e=await an(t.appConfig);for(;e.registrationStatus===1;)await xn(100),e=await an(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yt(t);return r||n}return e}function an(t){return xe(t,e=>{if(!e)throw ve.create("installation-not-found");return Gn(e)})}function Gn(t){return yo(t)?{fid:t.fid,registrationStatus:0}:t}function yo(t){return t.registrationStatus===1&&t.registrationTime+Nn<Date.now()}/**
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
 */async function Io({appConfig:t,heartbeatServiceProvider:e},n){const r=Eo(t,n),s=ro(t,n),o=e.getImmediate({optional:!0});if(o){const d=await o.getHeartbeatsHeader();d&&s.append("x-firebase-client",d)}const i={installation:{sdkVersion:Ln,appId:t.appId}},c={method:"POST",headers:s,body:JSON.stringify(i)},a=await zn(()=>fetch(r,c));if(a.ok){const d=await a.json();return Hn(d)}else throw await Vn("Generate Auth Token",a)}function Eo(t,{fid:e}){return`${Rn(t)}/${e}/authTokens:generate`}/**
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
 */async function It(t,e=!1){let n;const r=await xe(t.appConfig,o=>{if(!Jn(o))throw ve.create("not-registered");const i=o.authToken;if(!e&&So(i))return o;if(i.requestStatus===1)return n=Do(t,e),o;{if(!navigator.onLine)throw ve.create("app-offline");const c=Co(o);return n=ko(t,c),c}});return n?await n:r.authToken}async function Do(t,e){let n=await cn(t.appConfig);for(;n.authToken.requestStatus===1;)await xn(100),n=await cn(t.appConfig);const r=n.authToken;return r.requestStatus===0?It(t,e):r}function cn(t){return xe(t,e=>{if(!Jn(e))throw ve.create("not-registered");const n=e.authToken;return Ao(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ko(t,e){try{const n=await Io(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Pe(t.appConfig,r),n}catch(n){if(jn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Pe(t.appConfig,r)}throw n}}function Jn(t){return t!==void 0&&t.registrationStatus===2}function So(t){return t.requestStatus===2&&!To(t)}function To(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qs}function Co(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ao(t){return t.requestStatus===1&&t.requestTime+Nn<Date.now()}/**
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
 */async function $o(t){const e=t,{installationEntry:n,registrationPromise:r}=await yt(e);return r?r.catch(console.error):It(e).catch(console.error),n.fid}/**
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
 */async function Oo(t,e=!1){const n=t;return await Bo(n),(await It(n,e)).token}async function Bo(t){const{registrationPromise:e}=await yt(t);e&&await e}/**
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
 */function Mo(t){if(!t||!t.options)throw Qe("App Configuration");if(!t.name)throw Qe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qe(t){return ve.create("missing-app-config-values",{valueName:t})}/**
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
 */const Yn="installations",No="installations-internal",Lo=t=>{const e=t.getProvider("app").getImmediate(),n=Mo(e),r=vt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Po=t=>{const e=t.getProvider("app").getImmediate(),n=vt(e,Yn).getImmediate();return{getId:()=>$o(n),getToken:s=>Oo(n,s)}};function jo(){me(new de(Yn,Lo,"PUBLIC")),me(new de(No,Po,"PRIVATE"))}jo();le(Mn,_t);le(Mn,_t,"esm2017");/**
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
 */const Ro="/firebase-messaging-sw.js",Ho="/firebase-cloud-messaging-push-scope",Zn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Vo="https://fcmregistrations.googleapis.com/v1",Xn="google.c.a.c_id",Fo="google.c.a.c_l",zo="google.c.a.ts",xo="google.c.a.e";var ln;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ln||(ln={}));/**
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
 */var Ce;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Ce||(Ce={}));/**
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
 */function oe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Uo(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const et="fcm_token_details_db",Ko=5,fn="fcm_token_object_Store";async function Wo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(et))return null;let e=null;return(await mt(et,Ko,{upgrade:async(r,s,o,i)=>{var c;if(s<2||!r.objectStoreNames.contains(fn))return;const a=i.objectStore(fn),d=await a.index("fcmSenderId").get(t);if(await a.clear(),!!d){if(s===2){const l=d;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(c=l.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:oe(l.vapidKey)}}}else if(s===3){const l=d;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}else if(s===4){const l=d;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}}}})).close(),await We(et),await We("fcm_vapid_details_db"),await We("undefined"),qo(e)?e:null}function qo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Go="firebase-messaging-database",Jo=1,_e="firebase-messaging-store";let tt=null;function Et(){return tt||(tt=mt(Go,Jo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_e)}}})),tt}async function Qn(t){const e=kt(t),r=await(await Et()).transaction(_e).objectStore(_e).get(e);if(r)return r;{const s=await Wo(t.appConfig.senderId);if(s)return await Dt(t,s),s}}async function Dt(t,e){const n=kt(t),s=(await Et()).transaction(_e,"readwrite");return await s.objectStore(_e).put(e,n),await s.done,e}async function Yo(t){const e=kt(t),r=(await Et()).transaction(_e,"readwrite");await r.objectStore(_e).delete(e),await r.done}function kt({appConfig:t}){return t.appId}/**
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
 */const Zo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},Q=new Fe("messaging","Messaging",Zo);/**
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
 */async function Xo(t,e){const n=await Tt(t),r=tr(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(St(t.appConfig),s)).json()}catch(i){throw Q.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw Q.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw Q.create("token-subscribe-no-token");return o.token}async function Qo(t,e){const n=await Tt(t),r=tr(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${St(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw Q.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw Q.create("token-update-failed",{errorInfo:i})}if(!o.token)throw Q.create("token-update-no-token");return o.token}async function er(t,e){const r={method:"DELETE",headers:await Tt(t)};try{const o=await(await fetch(`${St(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw Q.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw Q.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function St({projectId:t}){return`${Vo}/projects/${t}/registrations`}async function Tt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function tr({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Zn&&(s.web.applicationPubKey=r),s}/**
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
 */const ei=7*24*60*60*1e3;async function ti(t){const e=await si(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:oe(e.getKey("auth")),p256dh:oe(e.getKey("p256dh"))},r=await Qn(t.firebaseDependencies);if(r){if(oi(r.subscriptionOptions,n))return Date.now()>=r.createTime+ei?ri(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await er(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return un(t.firebaseDependencies,n)}else return un(t.firebaseDependencies,n)}async function ni(t){const e=await Qn(t.firebaseDependencies);e&&(await er(t.firebaseDependencies,e.token),await Yo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ri(t,e){try{const n=await Qo(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Dt(t.firebaseDependencies,r),n}catch(n){throw await ni(t),n}}async function un(t,e){const r={token:await Xo(t,e),createTime:Date.now(),subscriptionOptions:e};return await Dt(t,r),r.token}async function si(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Uo(e)})}function oi(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function dn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ii(e,t),ai(e,t),ci(e,t),e}function ii(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ai(t,e){e.data&&(t.data=e.data)}function ci(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const c=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;c&&(t.fcmOptions.link=c);const a=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;a&&(t.fcmOptions.analyticsLabel=a)}/**
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
 */function li(t){return typeof t=="object"&&!!t&&Xn in t}/**
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
 */nr("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");nr("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function nr(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function fi(t){if(!t||!t.options)throw nt("App Configuration Object");if(!t.name)throw nt("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw nt(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function nt(t){return Q.create("missing-app-config-values",{valueName:t})}/**
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
 */class ui{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=fi(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function di(t){try{t.swRegistration=await navigator.serviceWorker.register(Ro,{scope:Ho}),t.swRegistration.update().catch(()=>{})}catch(e){throw Q.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function hi(t,e){if(!e&&!t.swRegistration&&await di(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw Q.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function pi(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Zn)}/**
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
 */async function rr(t,e){if(!navigator)throw Q.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw Q.create("permission-blocked");return await pi(t,e==null?void 0:e.vapidKey),await hi(t,e==null?void 0:e.serviceWorkerRegistration),ti(t)}/**
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
 */async function gi(t,e,n){const r=mi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Xn],message_name:n[Fo],message_time:n[zo],message_device_time:Math.floor(Date.now()/1e3)})}function mi(t){switch(t){case Ce.NOTIFICATION_CLICKED:return"notification_open";case Ce.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function vi(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ce.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(dn(n)):t.onMessageHandler.next(dn(n)));const r=n.data;li(r)&&r[xo]==="1"&&await gi(t,n.messageType,r)}const hn="@firebase/messaging",pn="0.12.5";/**
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
 */const bi=t=>{const e=new ui(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>vi(e,n)),e},_i=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>rr(e,r)}};function wi(){me(new de("messaging",bi,"PUBLIC")),me(new de("messaging-internal",_i,"PRIVATE")),le(hn,pn),le(hn,pn,"esm2017")}/**
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
 */async function yi(){try{await kn()}catch{return!1}return typeof window<"u"&&Dn()&&$r()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Ii(t,e){if(!navigator)throw Q.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Ei(t=As()){return yi().then(e=>{if(!e)throw Q.create("unsupported-browser")},e=>{throw Q.create("indexed-db-unsupported")}),vt(pt(t),"messaging").getImmediate()}async function Di(t,e){return t=pt(t),rr(t,e)}function ki(t,e){return t=pt(t),Ii(t,e)}wi();function gn(t){let e,n,r,s,o,i,c,a,d,l;return c=new _n({props:{func:t[9]}}),{c(){e=_("div"),n=_("div"),r=_("img"),o=j(),i=_("div"),J(c.$$.fragment),this.h()},l(f){e=w(f,"DIV",{class:!0});var h=T(e);n=w(h,"DIV",{class:!0});var m=T(n);r=w(m,"IMG",{src:!0,width:!0,style:!0}),o=R(m),i=w(m,"DIV",{class:!0});var y=T(i);Y(c.$$.fragment,y),y.forEach(v),m.forEach(v),h.forEach(v),this.h()},h(){ue(r.src,s="/cancel.png")||g(r,"src",s),g(r,"width","40"),B(r,"float","right"),g(i,"class","content"),g(n,"class","dialog-box svelte-1v8lvjf"),g(e,"class","overlay svelte-1v8lvjf")},m(f,h){P(f,e,h),b(e,n),b(n,r),b(n,o),b(n,i),Z(c,i,null),a=!0,d||(l=[te(r,"click",t[7]),te(n,"click",Ti),te(e,"click",t[7])],d=!0)},p:Ne,i(f){a||(x(c.$$.fragment,f),a=!0)},o(f){W(c.$$.fragment,f),a=!1},d(f){f&&v(e),X(c),d=!1,Ve(l)}}}function mn(t){let e,n,r='<li class="svelte-1v8lvjf"><a href="/" class="svelte-1v8lvjf">Home</a></li> <li class="svelte-1v8lvjf"><a href="/courses" class="svelte-1v8lvjf">courses</a></li> <li class="svelte-1v8lvjf"><a href="/fellowships" class="svelte-1v8lvjf">fellowships</a></li> <li class="svelte-1v8lvjf"><a href="/blogs" class="svelte-1v8lvjf">Blog</a></li> <li class="svelte-1v8lvjf"><a href="/products" class="svelte-1v8lvjf">products</a></li> <li class="svelte-1v8lvjf"><a href="/contact-us" class="svelte-1v8lvjf">Contact us</a></li>',s,o,i,c,a,d,l,f,h,m,y,u,p,C,N,L,U,H;return i=new ht({props:{text:"Login",clickHandler:t[6]}}),{c(){e=_("nav"),n=_("ul"),n.innerHTML=r,s=j(),o=_("div"),J(i.$$.fragment),c=j(),a=Ot("svg"),d=Ot("path"),l=j(),f=_("div"),h=_("div"),m=_("button"),this.h()},l(k){e=w(k,"NAV",{id:!0,style:!0,class:!0});var A=T(e);n=w(A,"UL",{class:!0,"data-svelte-h":!0}),ne(n)!=="svelte-1iz39pt"&&(n.innerHTML=r),s=R(A),o=w(A,"DIV",{style:!0});var G=T(o);Y(i.$$.fragment,G),G.forEach(v),c=R(A),a=Bt(A,"svg",{id:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,class:!0,viewBox:!0});var K=T(a);d=Bt(K,"path",{d:!0}),T(d).forEach(v),K.forEach(v),l=R(A),f=w(A,"DIV",{id:!0,class:!0});var O=T(f);h=w(O,"DIV",{id:!0,class:!0});var M=T(h);m=w(M,"BUTTON",{id:!0,class:!0}),T(m).forEach(v),M.forEach(v),O.forEach(v),A.forEach(v),this.h()},h(){g(n,"class","svelte-1v8lvjf"),B(o,"right","0"),g(d,"d","M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"),g(a,"id","menuio"),g(a,"xmlns","http://www.w3.org/2000/svg"),g(a,"x","0px"),g(a,"y","0px"),g(a,"width","50"),g(a,"height","50"),g(a,"class","menu svelte-1v8lvjf"),g(a,"viewBox","0 0 50 50"),g(m,"id","circle3LOGO"),g(m,"class",y=we(t[2]?"not scrolled":"not")+" svelte-1v8lvjf"),g(h,"id","circle2"),g(h,"class",u=we(t[2]?"not scrolled":"not")+" svelte-1v8lvjf"),g(f,"id","circle1"),g(f,"class",p=we(t[2]?"not scrolled":"not")+" svelte-1v8lvjf"),g(e,"id",C=t[0]?t[2]?"scrolledT":"T":t[2]?"scrolled":""),g(e,"style",N=t[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${t[4]}), rgba(57, 135, 155,${t[4]}));`:""),g(e,"class","svelte-1v8lvjf")},m(k,A){P(k,e,A),b(e,n),b(e,s),b(e,o),Z(i,o,null),b(e,c),b(e,a),b(a,d),b(e,l),b(e,f),b(f,h),b(h,m),L=!0,U||(H=te(a,"click",t[11]),U=!0)},p(k,A){(!L||A&4&&y!==(y=we(k[2]?"not scrolled":"not")+" svelte-1v8lvjf"))&&g(m,"class",y),(!L||A&4&&u!==(u=we(k[2]?"not scrolled":"not")+" svelte-1v8lvjf"))&&g(h,"class",u),(!L||A&4&&p!==(p=we(k[2]?"not scrolled":"not")+" svelte-1v8lvjf"))&&g(f,"class",p),(!L||A&5&&C!==(C=k[0]?k[2]?"scrolledT":"T":k[2]?"scrolled":""))&&g(e,"id",C),(!L||A&17&&N!==(N=k[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${k[4]}), rgba(57, 135, 155,${k[4]}));`:""))&&g(e,"style",N)},i(k){L||(x(i.$$.fragment,k),L=!0)},o(k){W(i.$$.fragment,k),L=!1},d(k){k&&v(e),X(i),U=!1,H()}}}function Si(t){let e,n,r,s,o,i,c,a,d='<li class="svelte-1v8lvjf"><a href="/" class="svelte-1v8lvjf">Home</a></li> <li class="svelte-1v8lvjf"><a href="/courses" class="svelte-1v8lvjf">courses</a></li> <li class="svelte-1v8lvjf"><a href="/fellowships" class="svelte-1v8lvjf">fellowships</a></li> <li class="svelte-1v8lvjf"><a href="/blogs" class="svelte-1v8lvjf">Blog</a></li> <li class="svelte-1v8lvjf"><a href="/products" class="svelte-1v8lvjf">products</a></li> <li class="svelte-1v8lvjf"><a href="/contact-us" class="svelte-1v8lvjf">Contact us</a></li>',l,f,h,m,y=t[1]&&gn(t),u=t[3]&&mn(t);return{c(){y&&y.c(),e=j(),n=_("header"),r=_("div"),s=_("h1"),o=j(),u&&u.c(),i=j(),c=_("div"),a=_("ul"),a.innerHTML=d,this.h()},l(p){y&&y.l(p),e=R(p),n=w(p,"HEADER",{class:!0});var C=T(n);r=w(C,"DIV",{style:!0});var N=T(r);s=w(N,"H1",{}),T(s).forEach(v),N.forEach(v),o=R(C),u&&u.l(C),C.forEach(v),i=R(p),c=w(p,"DIV",{class:!0,id:!0,style:!0});var L=T(c);a=w(L,"UL",{class:!0,"data-svelte-h":!0}),ne(a)!=="svelte-16vnmy9"&&(a.innerHTML=d),L.forEach(v),this.h()},h(){B(r,"position","absolute"),B(r,"top","-15px"),B(r,"left","15px"),g(n,"class","svelte-1v8lvjf"),g(a,"class","svelte-1v8lvjf"),g(c,"class","side-menu svelte-1v8lvjf"),g(c,"id","menuu"),g(c,"style",l=`display: ${t[5]?"block":"none"};`)},m(p,C){y&&y.m(p,C),P(p,e,C),P(p,n,C),b(n,r),b(r,s),b(n,o),u&&u.m(n,null),P(p,i,C),P(p,c,C),b(c,a),f=!0,h||(m=te(s,"click",t[10]),h=!0)},p(p,[C]){p[1]?y?(y.p(p,C),C&2&&x(y,1)):(y=gn(p),y.c(),x(y,1),y.m(e.parentNode,e)):y&&(ke(),W(y,1,1,()=>{y=null}),Se()),p[3]?u?(u.p(p,C),C&8&&x(u,1)):(u=mn(p),u.c(),x(u,1),u.m(n,null)):u&&(ke(),W(u,1,1,()=>{u=null}),Se()),(!f||C&32&&l!==(l=`display: ${p[5]?"block":"none"};`))&&g(c,"style",l)},i(p){f||(x(y),x(u),f=!0)},o(p){W(y),W(u),f=!1},d(p){p&&(v(e),v(n),v(i),v(c)),y&&y.d(p),u&&u.d(),h=!1,m()}}}const Ti=t=>t.stopPropagation();function Ci(t,e,n){let{disableTransparent:r}=e,{enableTransparency:s}=e,o=!1;function i(){n(1,o=!0)}function c(){n(1,o=!1)}let a=!1,d,l=!1,f=0;$e(()=>{document.body.addEventListener("click",function(C){console.log(C.target.id),console.log(h),C.target.id!="menuuu"&&C.target.id!="menuio"&&h&&n(5,h=!1)}),d=function(){var C=window.scrollY||document.documentElement.scrollTop,N=document.documentElement.scrollHeight-window.innerHeight,L=C/N*100;return L},n(3,l=!0);const p=()=>{n(2,a=window.scrollY>0),console.log(d()*.01),d()>20?n(4,f=d()*.01+.7):n(4,f=d()*.01)};return window.addEventListener("scroll",p),r||window.addEventListener("scroll",p),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",p),document.body.style.overflow="auto"}});let h=!1;const m=()=>{c()},y=function(){const p=document.createElement("a");p.href="/",p.click()},u=()=>{n(5,h=!h)};return t.$$set=p=>{"disableTransparent"in p&&n(8,r=p.disableTransparent),"enableTransparency"in p&&n(0,s=p.enableTransparency)},[s,o,a,l,f,h,i,c,r,m,y,u]}class Ai extends Oe{constructor(e){super(),Be(this,e,Ci,Si,Ae,{disableTransparent:8,enableTransparency:0})}}function vn(t){let e,n,r,s,o,i,c,a,d,l;return c=new _n({props:{func:t[12]}}),{c(){e=_("div"),n=_("div"),r=_("img"),o=j(),i=_("div"),J(c.$$.fragment),this.h()},l(f){e=w(f,"DIV",{class:!0});var h=T(e);n=w(h,"DIV",{class:!0});var m=T(n);r=w(m,"IMG",{src:!0}),o=R(m),i=w(m,"DIV",{class:!0});var y=T(i);Y(c.$$.fragment,y),y.forEach(v),m.forEach(v),h.forEach(v),this.h()},h(){ue(r.src,s="/close.png")||g(r,"src",s),g(i,"class","content svelte-113rlvd"),g(n,"class","dialog-box svelte-113rlvd"),g(e,"class","overlay svelte-113rlvd")},m(f,h){P(f,e,h),b(e,n),b(n,r),b(n,o),b(n,i),Z(c,i,null),a=!0,d||(l=[te(r,"click",t[11]),te(n,"click",ji),te(e,"click",t[11])],d=!0)},p(f,h){const m={};h&2&&(m.func=f[12]),c.$set(m)},i(f){a||(x(c.$$.fragment,f),a=!0)},o(f){W(c.$$.fragment,f),a=!1},d(f){f&&v(e),X(c),d=!1,Ve(l)}}}function $i(t){let e,n;return e=new lr({}),{c(){J(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p:Ne,i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Oi(t){let e,n;return e=new cr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[18]}}),{c(){J(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Bi(t){let e,n;return e=new bn({props:{f:!0,cardsData:[...t[5]]}}),{c(){J(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Mi(t){let e,n;return e=new bn({props:{f:!1,cardsData:[...t[4]]}}),{c(){J(e.$$.fragment)},l(r){Y(e.$$.fragment,r)},m(r,s){Z(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(x(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){X(e,r)}}}function Ni(t){let e,n="Fellowships",r,s,o,i,c="Courses",a,d,l,f,h,m,y;return s=new Lt({props:{f:!0,onClick:t[16],cardsData:[...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4]]}}),d=new Lt({props:{f:!1,onClick:t[17],cardsData:[...t[4]]}}),f=new mr({props:{blogs:t[7]}}),m=new _r({props:{data:t[6]}}),{c(){e=_("div"),e.textContent=n,r=j(),J(s.$$.fragment),o=j(),i=_("div"),i.textContent=c,a=j(),J(d.$$.fragment),l=j(),J(f.$$.fragment),h=j(),J(m.$$.fragment),this.h()},l(u){e=w(u,"DIV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-9rjion"&&(e.textContent=n),r=R(u),Y(s.$$.fragment,u),o=R(u),i=w(u,"DIV",{class:!0,"data-svelte-h":!0}),ne(i)!=="svelte-4wj5r"&&(i.textContent=c),a=R(u),Y(d.$$.fragment,u),l=R(u),Y(f.$$.fragment,u),h=R(u),Y(m.$$.fragment,u),this.h()},h(){g(e,"class","title"),g(i,"class","title")},m(u,p){P(u,e,p),P(u,r,p),Z(s,u,p),P(u,o,p),P(u,i,p),P(u,a,p),Z(d,u,p),P(u,l,p),Z(f,u,p),P(u,h,p),Z(m,u,p),y=!0},p(u,p){const C={};p&16&&(C.cardsData=[...u[4],...u[4],...u[4],...u[4],...u[4],...u[4],...u[4],...u[4]]),s.$set(C);const N={};p&16&&(N.cardsData=[...u[4]]),d.$set(N);const L={};p&128&&(L.blogs=u[7]),f.$set(L);const U={};p&64&&(U.data=u[6]),m.$set(U)},i(u){y||(x(s.$$.fragment,u),x(d.$$.fragment,u),x(f.$$.fragment,u),x(m.$$.fragment,u),y=!0)},o(u){W(s.$$.fragment,u),W(d.$$.fragment,u),W(f.$$.fragment,u),W(m.$$.fragment,u),y=!1},d(u){u&&(v(e),v(r),v(o),v(i),v(a),v(l),v(h)),X(s,u),X(d,u),X(f,u),X(m,u)}}}function Li(t){let e,n,r,s,o,i,c="Courses",a,d,l="Fellowships",f,h,m="Contact us",y,u,p,C,N,L,U="About us",H,k,A,G,K,O,M,I,$,E,V,S,z=t[9]&&vn(t);n=new Ai({props:{enableTransparency:!0}});const Ee=[Ni,Mi,Bi,Oi,$i],ee=[];function se(D,F){return D[1]==0?0:D[1]==1?1:D[1]==2?2:D[1]==3?3:4}return O=se(t),M=ee[O]=Ee[O](t),$=new ur({props:{scrollBoxHeight:t[8]}}),{c(){z&&z.c(),e=j(),J(n.$$.fragment),r=j(),s=_("div"),o=_("ul"),i=_("li"),i.textContent=c,a=j(),d=_("li"),d.textContent=l,f=j(),h=_("li"),h.textContent=m,u=j(),p=_("div"),C=_("div"),N=_("div"),L=_("p"),L.textContent=U,H=j(),k=_("p"),A=je(t[0]),G=j(),K=_("div"),M.c(),I=j(),J($.$$.fragment),this.h()},l(D){z&&z.l(D),e=R(D),Y(n.$$.fragment,D),r=R(D),s=w(D,"DIV",{class:!0,id:!0,style:!0});var F=T(s);o=w(F,"UL",{});var re=T(o);i=w(re,"LI",{"data-svelte-h":!0}),ne(i)!=="svelte-15gd3eg"&&(i.textContent=c),a=R(re),d=w(re,"LI",{"data-svelte-h":!0}),ne(d)!=="svelte-1w3oh8g"&&(d.textContent=l),f=R(re),h=w(re,"LI",{"data-svelte-h":!0}),ne(h)!=="svelte-1pessln"&&(h.textContent=m),re.forEach(v),F.forEach(v),u=R(D),p=w(D,"DIV",{class:!0});var De=T(p);C=w(De,"DIV",{class:!0});var Ct=T(C);N=w(Ct,"DIV",{class:!0});var Me=T(N);L=w(Me,"P",{style:!0,"data-svelte-h":!0}),ne(L)!=="svelte-1mkz37p"&&(L.textContent=U),H=R(Me),k=w(Me,"P",{style:!0});var At=T(k);A=Re(At,t[0]),At.forEach(v),Me.forEach(v),Ct.forEach(v),De.forEach(v),G=R(D),K=w(D,"DIV",{class:!0});var $t=T(K);M.l($t),$t.forEach(v),I=R(D),Y($.$$.fragment,D),this.h()},h(){g(s,"class","side-menu svelte-113rlvd"),g(s,"id","menuu"),g(s,"style",y=`display: ${t[10]?"block":"none"};`),B(L,"position","relative"),B(L,"right","70px"),B(k,"font-weight","300"),B(k,"text-align","left"),B(k,"font-size","20px"),g(N,"class","image-text svelte-113rlvd"),g(C,"class","image-overlay svelte-113rlvd"),g(p,"class","header-image svelte-113rlvd"),g(K,"class","scroll-box svelte-113rlvd")},m(D,F){z&&z.m(D,F),P(D,e,F),Z(n,D,F),P(D,r,F),P(D,s,F),b(s,o),b(o,i),b(o,a),b(o,d),b(o,f),b(o,h),P(D,u,F),P(D,p,F),b(p,C),b(C,N),b(N,L),b(N,H),b(N,k),b(k,A),P(D,G,F),P(D,K,F),ee[O].m(K,null),P(D,I,F),Z($,D,F),E=!0,V||(S=[te(i,"click",t[13]),te(d,"click",t[14]),te(h,"click",t[15])],V=!0)},p(D,[F]){D[9]?z?(z.p(D,F),F&512&&x(z,1)):(z=vn(D),z.c(),x(z,1),z.m(e.parentNode,e)):z&&(ke(),W(z,1,1,()=>{z=null}),Se()),(!E||F&1024&&y!==(y=`display: ${D[10]?"block":"none"};`))&&g(s,"style",y),(!E||F&1)&&He(A,D[0]);let re=O;O=se(D),O===re?ee[O].p(D,F):(ke(),W(ee[re],1,1,()=>{ee[re]=null}),Se(),M=ee[O],M?M.p(D,F):(M=ee[O]=Ee[O](D),M.c()),x(M,1),M.m(K,null));const De={};F&256&&(De.scrollBoxHeight=D[8]),$.$set(De)},i(D){E||(x(z),x(n.$$.fragment,D),x(M),x($.$$.fragment,D),E=!0)},o(D){W(z),W(n.$$.fragment,D),W(M),W($.$$.fragment,D),E=!1},d(D){D&&(v(e),v(r),v(s),v(u),v(p),v(G),v(K),v(I)),z&&z.d(D),X(n,D),ee[O].d(),X($,D),V=!1,Ve(S)}}}function Pi(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const ji=t=>t.stopPropagation();function Ri(t,e,n){let r="",s=0;async function o(I,$,E){const V=await fetch("https://dentists-backend.onrender.com/api/"+I,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify($)});if(!V.ok)throw fr("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${V.status}`);const S=await V.json();return E&&E(),S}let i=!1;async function c(){o("n/gp").then(I=>{I=I.d,n(6,y=I.map($=>Object({title:$.productName,text:"Price : "+$.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+$.productID+"/0",discount:$.discount})))})}async function a(){o("n/gc").then(I=>{I=I.d,n(4,h=I.map($=>Object({title:$.courseName,id:$.courseID,text:$.courseDetails,duration:$.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+$.courseID,clickHandler:()=>{const E=document.createElement("a");E.href="/courses/"+$.courseID,E.click(),$.courseID,n(2,i=!1)}}))),console.log(h)})}let d;async function l(){o("n/gf").then(I=>{I=I.d,n(5,m=I.map($=>Object({id:$.fellowshipID,title:$.fellowshipName,duration:$.fellowshipDuration,text:$.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+$.fellowshipID,clickHandler:()=>{$.fellowshipID,n(2,i=!0)}})))})}async function f(){o("n/gb").then(I=>{I=I.d,n(7,u=I.map($=>Object({id:$.blogID,text:$.blogDetails,title:$.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+$.blogID,clickHandler:()=>{}})))})}let h=[],m=[],y=[],u=[];function p(){const I=document.querySelector(".scroll-box");I&&n(8,C=Number(getComputedStyle(I).height.split("px")[0]))}let C=0;$e(()=>{document.body.addEventListener("click",function(S){console.log(S.target.id),console.log(U),S.target.id!="menuuu"&&S.target.id!="menuio"&&U&&n(10,U=!1)}),setInterval(()=>{p()},500),o("aus").then(S=>{n(0,r=S.d)}),window.addEventListener("resize",p),p();const $=Cn({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),E=Ei($);Di(E,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(S=>{console.log(S)}),ki(E,S=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(S)}),Promise.all([a(),l(),f(),c()]).then(()=>{addEventListener("ocd",S=>{console.log(S.detail),S.detail.f?(console.log(m),console.log(S.detail.id),n(3,d=m.filter(z=>z.id==S.detail.id)[0])):n(3,d=h.filter(z=>z.id==S.detail.id)[0])})});const V=()=>{};return window.addEventListener("scroll",V),document.body.style.overflow=N?"hidden":"auto",()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",p),document.body.style.overflow="auto"}}),sr(()=>{p()});let N=!1;function L(){n(9,N=!1)}Pi().then(I=>{I||console.log("Developer tools are closed.")});let U=!1;return[r,s,i,d,h,m,y,u,C,N,U,L,()=>{n(1,s=4),L()},function(){console.log("CLICKED HERE");const I=document.createElement("a");I.href="/courses",I.click()},function(){console.log("clicked here");const I=document.createElement("a");I.href="/fellowships",I.click()},function(){const I=document.createElement("a");I.href="/contact-us",I.click()},function(){const I=document.createElement("a");I.href="/fellowships",I.click()},function(){const I=document.createElement("a");I.href="/courses",I.click()},function(){const I=document.createElement("a");I.href="/contact-us",I.click()}]}class Qi extends Oe{constructor(e){super(),Be(this,e,Ri,Li,Ae,{})}}export{Qi as component};
