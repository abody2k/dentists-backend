import{s as Ae,e as w,h as R,b as y,k as A,f as g,j as H,m as d,o as P,i as V,p as b,v as dt,w as $e,t as He,d as Y,l as Ve,q as J,r as je,n as Le,y as Oe,z as ye,x as fe,F as Ot,G as Bt,H as we,K as sr}from"../chunks/scheduler.C4tHwGv5.js";import{S as Be,i as Me,c as Z,b as X,m as Q,t as U,g as ke,e as Se,a as q,d as ee}from"../chunks/index.CJfZO0_H.js";/* empty css                                                     */import{C as or}from"../chunks/Card.B9lT5P6R.js";import{e as ae,u as ir,d as ar}from"../chunks/each.DCfAADOs.js";import{B as ht}from"../chunks/Button.CNEXt203.js";import"../chunks/Map.luQdoRzM.js";import{G as vn}from"../chunks/Grid.DnF-ia0x.js";import{L as _n}from"../chunks/Login.qFaIELi9.js";import{C as cr}from"../chunks/CourseData.BtaXlcLZ.js";import{C as lr}from"../chunks/Contact.DcY_CpMq.js";import{n as ur}from"../chunks/not.DNvn3Bfc.js";/* empty css                                                     */import{F as fr}from"../chunks/Footer.mO6fB1ok.js";function Mt(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function Nt(t){let e,n;return e=new or({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){Z(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function dr(t){let e,n,r,s,o,i,a=ae([...t[0],...t[0],...t[0],...t[0]]),c=[];for(let l=0;l<a.length;l+=1)c[l]=Nt(Mt(t,a,l));const f=l=>q(c[l],1,1,()=>{c[l]=null});return o=new ht({props:{text:"Show all ",useTJ:!0,src:"back-icon.png",padding:!1,marginL:"5px",clickHandler:t[1]}}),{c(){e=w("div"),n=w("div");for(let l=0;l<c.length;l+=1)c[l].c();r=R(),s=w("div"),Z(o.$$.fragment),this.h()},l(l){e=y(l,"DIV",{style:!0,class:!0});var u=A(e);n=y(u,"DIV",{class:!0,id:!0});var h=A(n);for(let $=0;$<c.length;$+=1)c[$].l(h);h.forEach(g),u.forEach(g),r=H(l),s=y(l,"DIV",{style:!0});var m=A(s);X(o.$$.fragment,m),m.forEach(g),this.h()},h(){d(n,"class","row svelte-1l32lre"),d(n,"id","row-container"),P(e,"margin-bottom","0"),P(e,"height","406px"),d(e,"class","row svelte-1l32lre"),P(s,"display","grid"),P(s,"place-items","center"),P(s,"margin-bottom","90px"),P(s,"margin-top","20px")},m(l,u){V(l,e,u),b(e,n);for(let h=0;h<c.length;h+=1)c[h]&&c[h].m(n,null);V(l,r,u),V(l,s,u),Q(o,s,null),i=!0},p(l,[u]){if(u&5){a=ae([...l[0],...l[0],...l[0],...l[0]]);let m;for(m=0;m<a.length;m+=1){const $=Mt(l,a,m);c[m]?(c[m].p($,u),U(c[m],1)):(c[m]=Nt($),c[m].c(),U(c[m],1),c[m].m(n,null))}for(ke(),m=a.length;m<c.length;m+=1)f(m);Se()}const h={};u&2&&(h.clickHandler=l[1]),o.$set(h)},i(l){if(!i){for(let u=0;u<a.length;u+=1)U(c[u]);U(o.$$.fragment,l),i=!0}},o(l){c=c.filter(Boolean);for(let u=0;u<c.length;u+=1)q(c[u]);q(o.$$.fragment,l),i=!1},d(l){l&&(g(e),g(r),g(s)),dt(c,l),ee(o)}}}function hr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,$e(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class Lt extends Be{constructor(e){super(),Me(this,e,hr,dr,Ae,{cardsData:0,onClick:1,f:2})}}function Pt(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function Rt(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function Ht(t){let e,n;return{c(){e=w("img"),this.h()},l(r){e=y(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){fe(e.src,n=t[15].src)||d(e,"src",n),d(e,"alt","Neumorphic Picture"),d(e,"id","blog-image"),d(e,"class","rectangular-image svelte-14rovze")},m(r,s){V(r,e,s)},p(r,s){s&1&&!fe(e.src,n=r[15].src)&&d(e,"src",n)},d(r){r&&g(e)}}}function Vt(t){let e,n=t[14]==t[2]&&Ht(t);return{c(){n&&n.c(),e=ye()},l(r){n&&n.l(r),e=ye()},m(r,s){n&&n.m(r,s),V(r,e,s)},p(r,s){r[14]==r[2]?n?n.p(r,s):(n=Ht(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d(r)}}}function jt(t){let e,n,r=t[0][t[2]].title+"",s,o,i=t[0].length>0&&Ft(t);return{c(){e=w("div"),n=w("h2"),s=He(r),o=R(),i&&i.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var c=A(e);n=y(c,"H2",{style:!0,class:!0});var f=A(n);s=Ve(f,r),f.forEach(g),o=H(c),i&&i.l(c),c.forEach(g),this.h()},h(){P(n,"margin","-2px 0 -10px 0"),d(n,"class","svelte-14rovze"),d(e,"class","captionCont svelte-14rovze")},m(a,c){V(a,e,c),b(e,n),b(n,s),b(e,o),i&&i.m(e,null)},p(a,c){c&5&&r!==(r=a[0][a[2]].title+"")&&je(s,r),a[0].length>0?i?i.p(a,c):(i=Ft(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&g(e),i&&i.d()}}}function Ft(t){let e,n=t[0][t[2]].text+"",r;return{c(){e=w("p"),r=He(n),this.h()},l(s){e=y(s,"P",{class:!0});var o=A(e);r=Ve(o,n),o.forEach(g),this.h()},h(){d(e,"class","svelte-14rovze")},m(s,o){V(s,e,o),b(e,r)},p(s,o){o&5&&n!==(n=s[0][s[2]].text+"")&&je(r,n)},d(s){s&&g(e)}}}function xt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=w("div"),this.h()},l(a){n=y(a,"DIV",{style:!0,class:!0}),A(n).forEach(g),this.h()},h(){P(n,"margin-top","10px"),P(n,"margin-bottom","10px"),d(n,"class",r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze"),this.first=n},m(a,c){V(a,n,c),s||(o=J(n,"click",i),s=!0)},p(a,c){e=a,c&4&&r!==(r="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze")&&d(n,"class",r)},d(a){a&&g(n),s=!1,o()}}}function pr(t){let e,n,r,s='<img src="/open.png" style="right: 10%; width: 33px;" class="svelte-14rovze"/>',o,i,a,c,f,l,u,h,m,$="<",p,I,F=">",O,C,x,v=[],_=new Map,E,L,W=ae(t[0]),N=[];for(let k=0;k<W.length;k+=1)N[k]=Vt(Rt(t,W,k));let M=t[0].length>0&&jt(t),D=ae([0,1,2]);const B=k=>k[14];for(let k=0;k<3;k+=1){let j=Pt(t,D,k),T=B(j);_.set(T,v[k]=xt(T,j))}return{c(){e=w("div"),n=w("div"),r=w("button"),r.innerHTML=s,o=R(),i=w("div"),a=w("div"),c=He(t[1]),f=R(),l=w("div"),u=w("div");for(let k=0;k<N.length;k+=1)N[k].c();h=R(),m=w("div"),m.textContent=$,p=R(),I=w("div"),I.textContent=F,O=R(),M&&M.c(),C=R(),x=w("div");for(let k=0;k<3;k+=1)v[k].c();this.h()},l(k){e=y(k,"DIV",{class:!0});var j=A(e);n=y(j,"DIV",{class:!0});var T=A(n);r=y(T,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),Y(r)!=="svelte-hwduld"&&(r.innerHTML=s),T.forEach(g),o=H(j),i=y(j,"DIV",{style:!0,class:!0});var K=A(i);a=y(K,"DIV",{class:!0});var Ee=A(a);c=Ve(Ee,t[1]),Ee.forEach(g),K.forEach(g),f=H(j),l=y(j,"DIV",{class:!0});var ne=A(l);u=y(ne,"DIV",{class:!0});var se=A(u);for(let z=0;z<N.length;z+=1)N[z].l(se);h=H(se),m=y(se,"DIV",{class:!0,"data-svelte-h":!0}),Y(m)!=="svelte-nl1vs9"&&(m.textContent=$),p=H(se),I=y(se,"DIV",{class:!0,"data-svelte-h":!0}),Y(I)!=="svelte-dra8cl"&&(I.textContent=F),se.forEach(g),O=H(ne),M&&M.l(ne),C=H(ne),x=y(ne,"DIV",{class:!0});var S=A(x);for(let z=0;z<3;z+=1)v[z].l(S);S.forEach(g),ne.forEach(g),j.forEach(g),this.h()},h(){P(r,"padding","3px 4px"),P(r,"float","inline-end"),P(r,"right","10%"),P(r,"bottom","13px"),d(r,"class","svelte-14rovze"),d(n,"class","icon svelte-14rovze"),d(a,"class","#2e3b6f-title svelte-14rovze"),P(i,"display","flex"),P(i,"justify-content","space-between"),P(i,"align-items","center"),P(i,"padding","10px"),d(i,"class","svelte-14rovze"),d(m,"class","nextImageBtn svelte-14rovze"),d(I,"class","previousImageBtn svelte-14rovze"),d(u,"class","imageCont svelte-14rovze"),d(x,"class","dots-container svelte-14rovze"),d(l,"class","postCard svelte-14rovze"),d(e,"class","svelte-14rovze")},m(k,j){V(k,e,j),b(e,n),b(n,r),b(e,o),b(e,i),b(i,a),b(a,c),b(e,f),b(e,l),b(l,u);for(let T=0;T<N.length;T+=1)N[T]&&N[T].m(u,null);b(u,h),b(u,m),b(u,p),b(u,I),b(l,O),M&&M.m(l,null),b(l,C),b(l,x);for(let T=0;T<3;T+=1)v[T]&&v[T].m(x,null);E||(L=[J(r,"click",t[5]),J(m,"click",t[6]),J(I,"click",t[7])],E=!0)},p(k,[j]){if(j&2&&je(c,k[1]),j&5){W=ae(k[0]);let T;for(T=0;T<W.length;T+=1){const K=Rt(k,W,T);N[T]?N[T].p(K,j):(N[T]=Vt(K),N[T].c(),N[T].m(u,h))}for(;T<N.length;T+=1)N[T].d(1);N.length=W.length}k[0].length>0?M?M.p(k,j):(M=jt(k),M.c(),M.m(l,C)):M&&(M.d(1),M=null),j&12&&(D=ae([0,1,2]),v=ir(v,j,B,1,k,D,_,x,ar,xt,null,Pt))},i:Le,o:Le,d(k){k&&g(e),dt(N,k),M&&M.d();for(let j=0;j<3;j+=1)v[j].d();E=!1,Oe(L)}}}function gr(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(h){console.log(h),n(2,i=h)}$e(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function m(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}m(),setInterval(m,7e3)});const c=()=>{location.href="/blogs"},f=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},l=()=>{n(2,i=(i+1)%o.length)},u=h=>a(h);return t.$$set=h=>{"firstTitle"in h&&n(1,r=h.firstTitle),"secondTitle"in h&&n(4,s=h.secondTitle),"blogs"in h&&n(0,o=h.blogs)},[o,r,i,a,s,c,f,l,u]}class mr extends Be{constructor(e){super(),Me(this,e,gr,pr,Ae,{firstTitle:1,secondTitle:4,blogs:0})}}function zt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Kt(t){let e,n,r,s;return{c(){e=w("div"),n=w("div"),r=w("img"),this.h()},l(o){e=y(o,"DIV",{class:!0});var i=A(e);n=y(i,"DIV",{class:!0,style:!0});var a=A(n);r=y(a,"IMG",{src:!0,style:!0,class:!0}),a.forEach(g),i.forEach(g),this.h()},h(){fe(r.src,s=t[0][t[1]%t[0].length].src)||d(r,"src",s),P(r,"border-radius","10px"),d(r,"class","svelte-f7fgfc"),d(n,"class","postCard svelte-f7fgfc"),P(n,"width","270px"),P(n,"height","270px"),P(n,"border-radius","10px"),P(n,"background-color","#e6e7ee"),P(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),P(n,"margin-bottom","50px"),d(e,"class","image-card svelte-f7fgfc")},m(o,i){V(o,e,i),b(e,n),b(n,r)},p(o,i){i&3&&!fe(r.src,s=o[0][o[1]%o[0].length].src)&&d(r,"src",s)},d(o){o&&g(e)}}}function Ut(t){let e,n=ae(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=qt(zt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=ye()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=ye()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);V(s,e,o)},p(s,o){if(o&1){n=ae(s[0]);let i;for(i=0;i<n.length;i+=1){const a=zt(s,n,i);r[i]?r[i].p(a,o):(r[i]=qt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&g(e),dt(r,s)}}}function Wt(t){let e,n,r,s;return{c(){e=w("div"),n=w("img"),s=R(),this.h()},l(o){e=y(o,"DIV",{class:!0,style:!0});var i=A(e);n=y(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(g),s=H(o),this.h()},h(){fe(n.src,r=t[0][(t[5]+1)%t[0].length].src)||d(n,"src",r),P(n,"border-radius","10px"),d(n,"class","svelte-f7fgfc"),d(e,"class","postCard svelte-f7fgfc"),d(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){V(o,e,i),b(e,n),V(o,s,i)},p(o,i){i&1&&!fe(n.src,r=o[0][(o[5]+1)%o[0].length].src)&&d(n,"src",r)},d(o){o&&(g(e),g(s))}}}function qt(t){let e,n=t[5]+1!=t[0].length&&Wt(t);return{c(){n&&n.c(),e=ye()},l(r){n&&n.l(r),e=ye()},m(r,s){n&&n.m(r,s),V(r,e,s)},p(r,s){r[5]+1!=r[0].length?n?n.p(r,s):(n=Wt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&g(e),n&&n.d(r)}}}function br(t){let e,n,r="Products",s,o,i,a,c,f='<div class="black-title svelte-f7fgfc">Title</div> <div class="small-note svelte-f7fgfc">A small note goes here.</div> <div class="big-text svelte-f7fgfc">Big bold black text.</div>',l,u,h,m,$,p,I,F,O,C="",x,v=t[0].length>=1&&Kt(t),_=t[0].length>1&&Ut(t);return I=new ht({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=w("div"),n=w("div"),n.textContent=r,s=R(),o=w("div"),i=w("div"),v&&v.c(),a=R(),c=w("div"),c.innerHTML=f,l=R(),u=w("div"),h=w("div"),m=w("div"),_&&_.c(),$=R(),p=w("div"),Z(I.$$.fragment),F=R(),O=w("div"),O.innerHTML=C,this.h()},l(E){e=y(E,"DIV",{style:!0});var L=A(e);n=y(L,"DIV",{class:!0,"data-svelte-h":!0}),Y(n)!=="svelte-t04v0b"&&(n.textContent=r),s=H(L),o=y(L,"DIV",{class:!0});var W=A(o);i=y(W,"DIV",{class:!0});var N=A(i);v&&v.l(N),a=H(N),c=y(N,"DIV",{class:!0,"data-svelte-h":!0}),Y(c)!=="svelte-1sx5tfn"&&(c.innerHTML=f),N.forEach(g),l=H(W),u=y(W,"DIV",{style:!0});var M=A(u);h=y(M,"DIV",{style:!0});var D=A(h);m=y(D,"DIV",{class:!0});var B=A(m);_&&_.l(B),B.forEach(g),D.forEach(g),$=H(M),p=y(M,"DIV",{style:!0});var k=A(p);X(I.$$.fragment,k),k.forEach(g),M.forEach(g),F=H(W),O=y(W,"DIV",{class:!0,"data-svelte-h":!0}),Y(O)!=="svelte-cpoj1k"&&(O.innerHTML=C),W.forEach(g),L.forEach(g),this.h()},h(){d(n,"class","#2e3b6f-title"),d(c,"class","text-container svelte-f7fgfc"),d(i,"class","first-row svelte-f7fgfc"),d(m,"class","row-images svelte-f7fgfc"),P(h,"overflow-x","scroll"),d(p,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),P(u,"display","flex"),d(O,"class","show-call-button svelte-f7fgfc"),d(o,"class","neumorphic-card svelte-f7fgfc"),P(e,"margin-top","90px"),P(e,"height","560px")},m(E,L){V(E,e,L),b(e,n),b(e,s),b(e,o),b(o,i),v&&v.m(i,null),b(i,a),b(i,c),b(o,l),b(o,u),b(u,h),b(h,m),_&&_.m(m,null),b(u,$),b(u,p),Q(I,p,null),b(o,F),b(o,O),x=!0},p(E,[L]){E[0].length>=1?v?v.p(E,L):(v=Kt(E),v.c(),v.m(i,a)):v&&(v.d(1),v=null),E[0].length>1?_?_.p(E,L):(_=Ut(E),_.c(),_.m(m,null)):_&&(_.d(1),_=null)},i(E){x||(U(I.$$.fragment,E),x=!0)},o(E){q(I.$$.fragment,E),x=!1},d(E){E&&g(e),v&&v.d(),_&&_.d(),ee(I)}}}function vr(t,e,n){let{data:r=[]}=e,s=0;setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),$e(()=>{console.log(r)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,r=i.data)},[r,s,o]}class _r extends Be{constructor(e){super(),Me(this,e,vr,br,Ae,{data:0})}}var Gt={};/**
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
 */const wn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},wr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},yn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,f=c?t[s+2]:0,l=o>>2,u=(o&3)<<4|a>>4;let h=(a&15)<<2|f>>6,m=f&63;c||(m=64,i||(h=64)),r.push(n[l],n[u],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(wn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):wr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const f=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||f==null||u==null)throw new yr;const h=o<<2|a>>4;if(r.push(h),f!==64){const m=a<<4&240|f>>2;if(r.push(m),u!==64){const $=f<<6&192|u;r.push($)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ir=function(t){const e=wn(t);return yn.encodeByteArray(e,!0)},In=function(t){return Ir(t).replace(/\./g,"")},Er=function(t){try{return yn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */const kr=()=>Dr().__FIREBASE_DEFAULTS__,Sr=()=>{if(typeof process>"u"||typeof Gt>"u")return;const t=Gt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Cr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Er(t[1]);return e&&JSON.parse(e)},Tr=()=>{try{return kr()||Sr()||Cr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},En=()=>{var t;return(t=Tr())===null||t===void 0?void 0:t.config};/**
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
 */const Or="FirebaseError";class Ie extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Or,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fe.prototype.create)}}class Fe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Br(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new Ie(s,a,r)}}function Br(t,e){return t.replace(Mr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Mr=/\{\$([^}]+)}/g;function rt(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Jt(o)&&Jt(i)){if(!rt(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Jt(t){return t!==null&&typeof t=="object"}/**
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
 */class Nr{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ar;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pr(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Lr(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Lr(t){return t===he?void 0:t}function Pr(t){return t.instantiationMode==="EAGER"}/**
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
 */class Rr{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nr(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var G;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(G||(G={}));const Hr={debug:G.DEBUG,verbose:G.VERBOSE,info:G.INFO,warn:G.WARN,error:G.ERROR,silent:G.SILENT},Vr=G.INFO,jr={[G.DEBUG]:"log",[G.VERBOSE]:"log",[G.INFO]:"info",[G.WARN]:"warn",[G.ERROR]:"error"},Fr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=jr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xr{constructor(e){this.name=e,this._logLevel=Vr,this._logHandler=Fr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in G))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Hr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,G.DEBUG,...e),this._logHandler(this,G.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,G.VERBOSE,...e),this._logHandler(this,G.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,G.INFO,...e),this._logHandler(this,G.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,G.WARN,...e),this._logHandler(this,G.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,G.ERROR,...e),this._logHandler(this,G.ERROR,...e)}}const zr=(t,e)=>e.some(n=>t instanceof n);let Yt,Zt;function Kr(){return Yt||(Yt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ur(){return Zt||(Zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sn=new WeakMap,st=new WeakMap,Cn=new WeakMap,Ke=new WeakMap,gt=new WeakMap;function Wr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ie(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Sn.set(n,t)}).catch(()=>{}),gt.set(e,t),e}function qr(t){if(st.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});st.set(t,e)}let ot={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return st.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gr(t){ot=t(ot)}function Jr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ue(this),e,...n);return Cn.set(r,e.sort?e.sort():[e]),ie(r)}:Ur().includes(t)?function(...e){return t.apply(Ue(this),e),ie(Sn.get(this))}:function(...e){return ie(t.apply(Ue(this),e))}}function Yr(t){return typeof t=="function"?Jr(t):(t instanceof IDBTransaction&&qr(t),zr(t,Kr())?new Proxy(t,ot):t)}function ie(t){if(t instanceof IDBRequest)return Wr(t);if(Ke.has(t))return Ke.get(t);const e=Yr(t);return e!==t&&(Ke.set(t,e),gt.set(e,t)),e}const Ue=t=>gt.get(t);function mt(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ie(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ie(i.result),c.oldVersion,c.newVersion,ie(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}function We(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),ie(n).then(()=>{})}const Zr=["get","getKey","getAll","getAllKeys","count"],Xr=["put","add","delete","clear"],qe=new Map;function Xt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qe.get(e))return qe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Xr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Zr.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return qe.set(e,o),o}Gr(t=>({...t,get:(e,n,r)=>Xt(e,n)||t.get(e,n,r),has:(e,n)=>!!Xt(e,n)||t.has(e,n)}));/**
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
 */const ge=new xr("@firebase/app"),ts="@firebase/app-compat",ns="@firebase/analytics-compat",rs="@firebase/analytics",ss="@firebase/app-check-compat",os="@firebase/app-check",is="@firebase/auth",as="@firebase/auth-compat",cs="@firebase/database",ls="@firebase/database-compat",us="@firebase/functions",fs="@firebase/functions-compat",ds="@firebase/installations",hs="@firebase/installations-compat",ps="@firebase/messaging",gs="@firebase/messaging-compat",ms="@firebase/performance",bs="@firebase/performance-compat",vs="@firebase/remote-config",_s="@firebase/remote-config-compat",ws="@firebase/storage",ys="@firebase/storage-compat",Is="@firebase/firestore",Es="@firebase/firestore-compat",Ds="firebase";/**
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
 */const at="[DEFAULT]",ks={[it]:"fire-core",[ts]:"fire-core-compat",[rs]:"fire-analytics",[ns]:"fire-analytics-compat",[os]:"fire-app-check",[ss]:"fire-app-check-compat",[is]:"fire-auth",[as]:"fire-auth-compat",[cs]:"fire-rtdb",[ls]:"fire-rtdb-compat",[us]:"fire-fn",[fs]:"fire-fn-compat",[ds]:"fire-iid",[hs]:"fire-iid-compat",[ps]:"fire-fcm",[gs]:"fire-fcm-compat",[ms]:"fire-perf",[bs]:"fire-perf-compat",[vs]:"fire-rc",[_s]:"fire-rc-compat",[ws]:"fire-gcs",[ys]:"fire-gcs-compat",[Is]:"fire-fst",[Es]:"fire-fst-compat","fire-js":"fire-js",[Ds]:"fire-js-all"};/**
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
 */const Pe=new Map,ct=new Map;function Ss(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function me(t){const e=t.name;if(ct.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of Pe.values())Ss(n,t);return!0}function bt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Cs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new Fe("app","Firebase",Cs);/**
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
 */class Ts{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function Tn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw ce.create("bad-app-name",{appName:String(s)});if(n||(n=En()),!n)throw ce.create("no-options");const o=Pe.get(s);if(o){if(rt(n,o.options)&&rt(r,o.config))return o;throw ce.create("duplicate-app",{appName:s})}const i=new Rr(s);for(const c of ct.values())i.addComponent(c);const a=new Ts(n,r,i);return Pe.set(s,a),a}function As(t=at){const e=Pe.get(t);if(!e&&t===at&&En())return Tn();if(!e)throw ce.create("no-app",{appName:t});return e}function le(t,e,n){var r;let s=(r=ks[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(a.join(" "));return}me(new de(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const $s="firebase-heartbeat-database",Os=1,Ce="firebase-heartbeat-store";let Ge=null;function An(){return Ge||(Ge=mt($s,Os,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ce)}}}).catch(t=>{throw ce.create("idb-open",{originalErrorMessage:t.message})})),Ge}async function Bs(t){try{return await(await An()).transaction(Ce).objectStore(Ce).get($n(t))}catch(e){if(e instanceof Ie)ge.warn(e.message);else{const n=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(n.message)}}}async function en(t,e){try{const r=(await An()).transaction(Ce,"readwrite");await r.objectStore(Ce).put(e,$n(t)),await r.done}catch(n){if(n instanceof Ie)ge.warn(n.message);else{const r=ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ge.warn(r.message)}}}function $n(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Ms=1024,Ns=30*24*60*60*1e3;class Ls{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=tn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Ns}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=tn(),{heartbeatsToSend:r,unsentEntries:s}=Ps(this._heartbeatsCache.heartbeats),o=In(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function tn(){return new Date().toISOString().substring(0,10)}function Ps(t,e=Ms){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),nn(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),nn(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Rs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dn()?kn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return en(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return en(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nn(t){return In(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Hs(t){me(new de("platform-logger",e=>new Qr(e),"PRIVATE")),me(new de("heartbeat",e=>new Ls(e),"PRIVATE")),le(it,Qt,t),le(it,Qt,"esm2017"),le("fire-js","")}Hs("");var Vs="firebase",js="10.7.1";/**
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
 */le(Vs,js,"app");const Fs=(t,e)=>e.some(n=>t instanceof n);let rn,sn;function xs(){return rn||(rn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zs(){return sn||(sn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const On=new WeakMap,lt=new WeakMap,Bn=new WeakMap,Je=new WeakMap,vt=new WeakMap;function Ks(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ue(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&On.set(n,t)}).catch(()=>{}),vt.set(e,t),e}function Us(t){if(lt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});lt.set(t,e)}let ut={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Bn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ws(t){ut=t(ut)}function qs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ye(this),e,...n);return Bn.set(r,e.sort?e.sort():[e]),ue(r)}:zs().includes(t)?function(...e){return t.apply(Ye(this),e),ue(On.get(this))}:function(...e){return ue(t.apply(Ye(this),e))}}function Gs(t){return typeof t=="function"?qs(t):(t instanceof IDBTransaction&&Us(t),Fs(t,xs())?new Proxy(t,ut):t)}function ue(t){if(t instanceof IDBRequest)return Ks(t);if(Je.has(t))return Je.get(t);const e=Gs(t);return e!==t&&(Je.set(t,e),vt.set(e,t)),e}const Ye=t=>vt.get(t);function Js(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=ue(i);return r&&i.addEventListener("upgradeneeded",c=>{r(ue(i.result),c.oldVersion,c.newVersion,ue(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ys=["get","getKey","getAll","getAllKeys","count"],Zs=["put","add","delete","clear"],Ze=new Map;function on(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ze.get(e))return Ze.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Zs.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ys.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),s&&c.done]))[0]};return Ze.set(e,o),o}Ws(t=>({...t,get:(e,n,r)=>on(e,n)||t.get(e,n,r),has:(e,n)=>!!on(e,n)||t.has(e,n)}));const Mn="@firebase/installations",_t="0.6.4";/**
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
 */const no={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},be=new Fe(eo,to,no);function Rn(t){return t instanceof Ie&&t.code.includes("request-failed")}/**
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
 */function Hn({projectId:t}){return`${Xs}/projects/${t}/installations`}function Vn(t){return{token:t.token,requestStatus:2,expiresIn:so(t.expiresIn),creationTime:Date.now()}}async function jn(t,e){const r=(await e.json()).error;return be.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Fn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ro(t,{refreshToken:e}){const n=Fn(t);return n.append("Authorization",oo(e)),n}async function xn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function so(t){return Number(t.replace("s","000"))}function oo(t){return`${Pn} ${t}`}/**
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
 */async function io({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Hn(t),s=Fn(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={fid:n,authVersion:Pn,appId:t.appId,sdkVersion:Ln},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await xn(()=>fetch(r,a));if(c.ok){const f=await c.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Vn(f.authToken)}}else throw await jn("Create Installation",c)}/**
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
 */function zn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const co=/^[cdef][\w-]{21}$/,ft="";function lo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uo(t);return co.test(n)?n:ft}catch{return ft}}function uo(t){return ao(t).substr(0,22)}/**
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
 */function xe(t){return`${t.appName}!${t.appId}`}/**
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
 */const Kn=new Map;function Un(t,e){const n=xe(t);Wn(n,e),fo(n,e)}function Wn(t,e){const n=Kn.get(t);if(n)for(const r of n)r(e)}function fo(t,e){const n=ho();n&&n.postMessage({key:t,fid:e}),po()}let pe=null;function ho(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=t=>{Wn(t.data.key,t.data.fid)}),pe}function po(){Kn.size===0&&pe&&(pe.close(),pe=null)}/**
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
 */const go="firebase-installations-database",mo=1,ve="firebase-installations-store";let Xe=null;function wt(){return Xe||(Xe=Js(go,mo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ve)}}})),Xe}async function Re(t,e){const n=xe(t),s=(await wt()).transaction(ve,"readwrite"),o=s.objectStore(ve),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Un(t,e.fid),e}async function qn(t){const e=xe(t),r=(await wt()).transaction(ve,"readwrite");await r.objectStore(ve).delete(e),await r.done}async function ze(t,e){const n=xe(t),s=(await wt()).transaction(ve,"readwrite"),o=s.objectStore(ve),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Un(t,a.fid),a}/**
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
 */async function yt(t){let e;const n=await ze(t.appConfig,r=>{const s=bo(r),o=vo(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ft?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bo(t){const e=t||{fid:lo(),registrationStatus:0};return Gn(e)}function vo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(be.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=_o(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wo(t)}:{installationEntry:e}}async function _o(t,e){try{const n=await io(t,e);return Re(t.appConfig,n)}catch(n){throw Rn(n)&&n.customData.serverCode===409?await qn(t.appConfig):await Re(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wo(t){let e=await an(t.appConfig);for(;e.registrationStatus===1;)await zn(100),e=await an(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await yt(t);return r||n}return e}function an(t){return ze(t,e=>{if(!e)throw be.create("installation-not-found");return Gn(e)})}function Gn(t){return yo(t)?{fid:t.fid,registrationStatus:0}:t}function yo(t){return t.registrationStatus===1&&t.registrationTime+Nn<Date.now()}/**
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
 */async function Io({appConfig:t,heartbeatServiceProvider:e},n){const r=Eo(t,n),s=ro(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&s.append("x-firebase-client",f)}const i={installation:{sdkVersion:Ln,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await xn(()=>fetch(r,a));if(c.ok){const f=await c.json();return Vn(f)}else throw await jn("Generate Auth Token",c)}function Eo(t,{fid:e}){return`${Hn(t)}/${e}/authTokens:generate`}/**
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
 */async function It(t,e=!1){let n;const r=await ze(t.appConfig,o=>{if(!Jn(o))throw be.create("not-registered");const i=o.authToken;if(!e&&So(i))return o;if(i.requestStatus===1)return n=Do(t,e),o;{if(!navigator.onLine)throw be.create("app-offline");const a=To(o);return n=ko(t,a),a}});return n?await n:r.authToken}async function Do(t,e){let n=await cn(t.appConfig);for(;n.authToken.requestStatus===1;)await zn(100),n=await cn(t.appConfig);const r=n.authToken;return r.requestStatus===0?It(t,e):r}function cn(t){return ze(t,e=>{if(!Jn(e))throw be.create("not-registered");const n=e.authToken;return Ao(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function ko(t,e){try{const n=await Io(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Re(t.appConfig,r),n}catch(n){if(Rn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await qn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Re(t.appConfig,r)}throw n}}function Jn(t){return t!==void 0&&t.registrationStatus===2}function So(t){return t.requestStatus===2&&!Co(t)}function Co(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qs}function To(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ao(t){return t.requestStatus===1&&t.requestTime+Nn<Date.now()}/**
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
 */function Mo(t){if(!t||!t.options)throw Qe("App Configuration");if(!t.name)throw Qe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Qe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Qe(t){return be.create("missing-app-config-values",{valueName:t})}/**
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
 */const Yn="installations",No="installations-internal",Lo=t=>{const e=t.getProvider("app").getImmediate(),n=Mo(e),r=bt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Po=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e,Yn).getImmediate();return{getId:()=>$o(n),getToken:s=>Oo(n,s)}};function Ro(){me(new de(Yn,Lo,"PUBLIC")),me(new de(No,Po,"PRIVATE"))}Ro();le(Mn,_t);le(Mn,_t,"esm2017");/**
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
 */const Ho="/firebase-messaging-sw.js",Vo="/firebase-cloud-messaging-push-scope",Zn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",jo="https://fcmregistrations.googleapis.com/v1",Xn="google.c.a.c_id",Fo="google.c.a.c_l",xo="google.c.a.ts",zo="google.c.a.e";var ln;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(ln||(ln={}));/**
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
 */var Te;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Te||(Te={}));/**
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
 */function oe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ko(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const et="fcm_token_details_db",Uo=5,un="fcm_token_object_Store";async function Wo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(et))return null;let e=null;return(await mt(et,Uo,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(un))return;const c=i.objectStore(un),f=await c.index("fcmSenderId").get(t);if(await c.clear(),!!f){if(s===2){const l=f;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:oe(l.vapidKey)}}}else if(s===3){const l=f;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}else if(s===4){const l=f;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:oe(l.auth),p256dh:oe(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:oe(l.vapidKey)}}}}}})).close(),await We(et),await We("fcm_vapid_details_db"),await We("undefined"),qo(e)?e:null}function qo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Zo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},te=new Fe("messaging","Messaging",Zo);/**
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
 */async function Xo(t,e){const n=await Ct(t),r=tr(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(St(t.appConfig),s)).json()}catch(i){throw te.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw te.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw te.create("token-subscribe-no-token");return o.token}async function Qo(t,e){const n=await Ct(t),r=tr(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${St(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw te.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw te.create("token-update-failed",{errorInfo:i})}if(!o.token)throw te.create("token-update-no-token");return o.token}async function er(t,e){const r={method:"DELETE",headers:await Ct(t)};try{const o=await(await fetch(`${St(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw te.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw te.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function St({projectId:t}){return`${jo}/projects/${t}/registrations`}async function Ct({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function tr({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Zn&&(s.web.applicationPubKey=r),s}/**
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
 */const ei=7*24*60*60*1e3;async function ti(t){const e=await si(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:oe(e.getKey("auth")),p256dh:oe(e.getKey("p256dh"))},r=await Qn(t.firebaseDependencies);if(r){if(oi(r.subscriptionOptions,n))return Date.now()>=r.createTime+ei?ri(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await er(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return fn(t.firebaseDependencies,n)}else return fn(t.firebaseDependencies,n)}async function ni(t){const e=await Qn(t.firebaseDependencies);e&&(await er(t.firebaseDependencies,e.token),await Yo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ri(t,e){try{const n=await Qo(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Dt(t.firebaseDependencies,r),n}catch(n){throw await ni(t),n}}async function fn(t,e){const r={token:await Xo(t,e),createTime:Date.now(),subscriptionOptions:e};return await Dt(t,r),r.token}async function si(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ko(e)})}function oi(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function dn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ii(e,t),ai(e,t),ci(e,t),e}function ii(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ai(t,e){e.data&&(t.data=e.data)}function ci(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const c=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function ui(t){if(!t||!t.options)throw nt("App Configuration Object");if(!t.name)throw nt("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw nt(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function nt(t){return te.create("missing-app-config-values",{valueName:t})}/**
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
 */class fi{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ui(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function di(t){try{t.swRegistration=await navigator.serviceWorker.register(Ho,{scope:Vo}),t.swRegistration.update().catch(()=>{})}catch(e){throw te.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function hi(t,e){if(!e&&!t.swRegistration&&await di(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw te.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function rr(t,e){if(!navigator)throw te.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw te.create("permission-blocked");return await pi(t,e==null?void 0:e.vapidKey),await hi(t,e==null?void 0:e.serviceWorkerRegistration),ti(t)}/**
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
 */async function gi(t,e,n){const r=mi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Xn],message_name:n[Fo],message_time:n[xo],message_device_time:Math.floor(Date.now()/1e3)})}function mi(t){switch(t){case Te.NOTIFICATION_CLICKED:return"notification_open";case Te.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function bi(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Te.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(dn(n)):t.onMessageHandler.next(dn(n)));const r=n.data;li(r)&&r[zo]==="1"&&await gi(t,n.messageType,r)}const hn="@firebase/messaging",pn="0.12.5";/**
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
 */const vi=t=>{const e=new fi(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>bi(e,n)),e},_i=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>rr(e,r)}};function wi(){me(new de("messaging",vi,"PUBLIC")),me(new de("messaging-internal",_i,"PRIVATE")),le(hn,pn),le(hn,pn,"esm2017")}/**
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
 */function Ii(t,e){if(!navigator)throw te.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Ei(t=As()){return yi().then(e=>{if(!e)throw te.create("unsupported-browser")},e=>{throw te.create("indexed-db-unsupported")}),bt(pt(t),"messaging").getImmediate()}async function Di(t,e){return t=pt(t),rr(t,e)}function ki(t,e){return t=pt(t),Ii(t,e)}wi();function gn(t){let e,n,r,s,o,i,a,c,f,l;return a=new _n({props:{func:t[9]}}),{c(){e=w("div"),n=w("div"),r=w("img"),o=R(),i=w("div"),Z(a.$$.fragment),this.h()},l(u){e=y(u,"DIV",{class:!0});var h=A(e);n=y(h,"DIV",{class:!0});var m=A(n);r=y(m,"IMG",{src:!0,width:!0,style:!0}),o=H(m),i=y(m,"DIV",{class:!0});var $=A(i);X(a.$$.fragment,$),$.forEach(g),m.forEach(g),h.forEach(g),this.h()},h(){fe(r.src,s="/cancel.png")||d(r,"src",s),d(r,"width","40"),P(r,"float","right"),d(i,"class","content"),d(n,"class","dialog-box svelte-xdew17"),d(e,"class","overlay svelte-xdew17")},m(u,h){V(u,e,h),b(e,n),b(n,r),b(n,o),b(n,i),Q(a,i,null),c=!0,f||(l=[J(r,"click",t[7]),J(n,"click",Ci),J(e,"click",t[7])],f=!0)},p:Le,i(u){c||(U(a.$$.fragment,u),c=!0)},o(u){q(a.$$.fragment,u),c=!1},d(u){u&&g(e),ee(a),f=!1,Oe(l)}}}function mn(t){let e,n,r='<li class="svelte-xdew17"><a href="/" class="svelte-xdew17">Home</a></li> <li class="svelte-xdew17"><a href="/courses" class="svelte-xdew17">courses</a></li> <li class="svelte-xdew17"><a href="/fellowships" class="svelte-xdew17">fellowships</a></li> <li class="svelte-xdew17"><a href="/blogs" class="svelte-xdew17">Blog</a></li> <li class="svelte-xdew17"><a href="/products" class="svelte-xdew17">products</a></li> <li class="svelte-xdew17"><a href="/contact-us" class="svelte-xdew17">Contact us</a></li>',s,o,i,a,c,f,l,u,h,m,$,p,I,F,O,C,x;return o=new ht({props:{text:"Login",clickHandler:t[6]}}),{c(){e=w("nav"),n=w("ul"),n.innerHTML=r,s=R(),Z(o.$$.fragment),i=R(),a=Ot("svg"),c=Ot("path"),f=R(),l=w("div"),u=w("div"),h=w("button"),this.h()},l(v){e=y(v,"NAV",{id:!0,style:!0,class:!0});var _=A(e);n=y(_,"UL",{class:!0,"data-svelte-h":!0}),Y(n)!=="svelte-1iz39pt"&&(n.innerHTML=r),s=H(_),X(o.$$.fragment,_),i=H(_),a=Bt(_,"svg",{id:!0,xmlns:!0,x:!0,y:!0,width:!0,height:!0,class:!0,viewBox:!0});var E=A(a);c=Bt(E,"path",{d:!0}),A(c).forEach(g),E.forEach(g),f=H(_),l=y(_,"DIV",{id:!0,class:!0});var L=A(l);u=y(L,"DIV",{id:!0,class:!0});var W=A(u);h=y(W,"BUTTON",{id:!0,class:!0}),A(h).forEach(g),W.forEach(g),L.forEach(g),_.forEach(g),this.h()},h(){d(n,"class","svelte-xdew17"),d(c,"d","M 0 7.5 L 0 12.5 L 50 12.5 L 50 7.5 Z M 0 22.5 L 0 27.5 L 50 27.5 L 50 22.5 Z M 0 37.5 L 0 42.5 L 50 42.5 L 50 37.5 Z"),d(a,"id","menuio"),d(a,"xmlns","http://www.w3.org/2000/svg"),d(a,"x","0px"),d(a,"y","0px"),d(a,"width","50"),d(a,"height","50"),d(a,"class","menu svelte-xdew17"),d(a,"viewBox","0 0 50 50"),d(h,"id","circle3LOGO"),d(h,"class",m=we(t[2]?"not scrolled":"not")+" svelte-xdew17"),d(u,"id","circle2"),d(u,"class",$=we(t[2]?"not scrolled":"not")+" svelte-xdew17"),d(l,"id","circle1"),d(l,"class",p=we(t[2]?"not scrolled":"not")+" svelte-xdew17"),d(e,"id",I=t[0]?t[2]?"scrolledT":"T":t[2]?"scrolled":""),d(e,"style",F=t[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${t[4]}), rgba(57, 135, 155,${t[4]}));`:""),d(e,"class","svelte-xdew17")},m(v,_){V(v,e,_),b(e,n),b(e,s),Q(o,e,null),b(e,i),b(e,a),b(a,c),b(e,f),b(e,l),b(l,u),b(u,h),O=!0,C||(x=J(a,"click",t[11]),C=!0)},p(v,_){(!O||_&4&&m!==(m=we(v[2]?"not scrolled":"not")+" svelte-xdew17"))&&d(h,"class",m),(!O||_&4&&$!==($=we(v[2]?"not scrolled":"not")+" svelte-xdew17"))&&d(u,"class",$),(!O||_&4&&p!==(p=we(v[2]?"not scrolled":"not")+" svelte-xdew17"))&&d(l,"class",p),(!O||_&5&&I!==(I=v[0]?v[2]?"scrolledT":"T":v[2]?"scrolled":""))&&d(e,"id",I),(!O||_&17&&F!==(F=v[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${v[4]}), rgba(57, 135, 155,${v[4]}));`:""))&&d(e,"style",F)},i(v){O||(U(o.$$.fragment,v),O=!0)},o(v){q(o.$$.fragment,v),O=!1},d(v){v&&g(e),ee(o),C=!1,x()}}}function Si(t){let e,n,r,s,o,i,a,c,f,l="Courses",u,h,m="Fellowships",$,p,I="Contact us",F,O,C,x,v=t[1]&&gn(t),_=t[3]&&mn(t);return{c(){v&&v.c(),e=R(),n=w("header"),r=w("div"),s=w("h1"),o=R(),_&&_.c(),i=R(),a=w("div"),c=w("ul"),f=w("li"),f.textContent=l,u=R(),h=w("li"),h.textContent=m,$=R(),p=w("li"),p.textContent=I,this.h()},l(E){v&&v.l(E),e=H(E),n=y(E,"HEADER",{class:!0});var L=A(n);r=y(L,"DIV",{style:!0});var W=A(r);s=y(W,"H1",{}),A(s).forEach(g),W.forEach(g),o=H(L),_&&_.l(L),L.forEach(g),i=H(E),a=y(E,"DIV",{class:!0,id:!0,style:!0});var N=A(a);c=y(N,"UL",{class:!0});var M=A(c);f=y(M,"LI",{class:!0,"data-svelte-h":!0}),Y(f)!=="svelte-1cy3qw"&&(f.textContent=l),u=H(M),h=y(M,"LI",{class:!0,"data-svelte-h":!0}),Y(h)!=="svelte-19eux1c"&&(h.textContent=m),$=H(M),p=y(M,"LI",{class:!0,"data-svelte-h":!0}),Y(p)!=="svelte-1j80rm3"&&(p.textContent=I),M.forEach(g),N.forEach(g),this.h()},h(){P(r,"position","absolute"),P(r,"top","-15px"),P(r,"left","15px"),d(n,"class","svelte-xdew17"),d(f,"class","svelte-xdew17"),d(h,"class","svelte-xdew17"),d(p,"class","svelte-xdew17"),d(c,"class","svelte-xdew17"),d(a,"class","side-menu svelte-xdew17"),d(a,"id","menuu"),d(a,"style",F=`display: ${t[5]?"block":"none"};`)},m(E,L){v&&v.m(E,L),V(E,e,L),V(E,n,L),b(n,r),b(r,s),b(n,o),_&&_.m(n,null),V(E,i,L),V(E,a,L),b(a,c),b(c,f),b(c,u),b(c,h),b(c,$),b(c,p),O=!0,C||(x=[J(s,"click",t[10]),J(f,"click",t[12]),J(h,"click",t[13]),J(p,"click",t[14])],C=!0)},p(E,[L]){E[1]?v?(v.p(E,L),L&2&&U(v,1)):(v=gn(E),v.c(),U(v,1),v.m(e.parentNode,e)):v&&(ke(),q(v,1,1,()=>{v=null}),Se()),E[3]?_?(_.p(E,L),L&8&&U(_,1)):(_=mn(E),_.c(),U(_,1),_.m(n,null)):_&&(ke(),q(_,1,1,()=>{_=null}),Se()),(!O||L&32&&F!==(F=`display: ${E[5]?"block":"none"};`))&&d(a,"style",F)},i(E){O||(U(v),U(_),O=!0)},o(E){q(v),q(_),O=!1},d(E){E&&(g(e),g(n),g(i),g(a)),v&&v.d(E),_&&_.d(),C=!1,Oe(x)}}}const Ci=t=>t.stopPropagation();function Ti(t,e,n){let{disableTransparent:r}=e,{enableTransparency:s}=e,o=!1;function i(){n(1,o=!0)}function a(){n(1,o=!1)}let c=!1,f,l=!1,u=0;$e(()=>{f=function(){var x=window.scrollY||document.documentElement.scrollTop,v=document.documentElement.scrollHeight-window.innerHeight,_=x/v*100;return _},n(3,l=!0);const C=()=>{n(2,c=window.scrollY>0),console.log(f()*.01),f()>20?n(4,u=f()*.01+.7):n(4,u=f()*.01)};return window.addEventListener("scroll",C),r||window.addEventListener("scroll",C),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",C),document.body.style.overflow="auto"}});let h=!1;const m=()=>{a()},$=function(){const C=document.createElement("a");C.href="/",C.click()},p=()=>{n(5,h=!h)},I=function(){console.log("CLICKED HERE");const C=document.createElement("a");C.href="/courses",C.click()},F=function(){console.log("clicked here");const C=document.createElement("a");C.href="/fellowships",C.click()},O=function(){const C=document.createElement("a");C.href="/contact-us",C.click()};return t.$$set=C=>{"disableTransparent"in C&&n(8,r=C.disableTransparent),"enableTransparency"in C&&n(0,s=C.enableTransparency)},[s,o,c,l,u,h,i,a,r,m,$,p,I,F,O]}class Ai extends Be{constructor(e){super(),Me(this,e,Ti,Si,Ae,{disableTransparent:8,enableTransparency:0})}}function bn(t){let e,n,r,s,o,i,a,c,f,l;return a=new _n({props:{func:t[12]}}),{c(){e=w("div"),n=w("div"),r=w("img"),o=R(),i=w("div"),Z(a.$$.fragment),this.h()},l(u){e=y(u,"DIV",{class:!0});var h=A(e);n=y(h,"DIV",{class:!0});var m=A(n);r=y(m,"IMG",{src:!0}),o=H(m),i=y(m,"DIV",{class:!0});var $=A(i);X(a.$$.fragment,$),$.forEach(g),m.forEach(g),h.forEach(g),this.h()},h(){fe(r.src,s="/close.png")||d(r,"src",s),d(i,"class","content svelte-1oj95kd"),d(n,"class","dialog-box svelte-1oj95kd"),d(e,"class","overlay svelte-1oj95kd")},m(u,h){V(u,e,h),b(e,n),b(n,r),b(n,o),b(n,i),Q(a,i,null),c=!0,f||(l=[J(r,"click",t[11]),J(n,"click",Ri),J(e,"click",t[11])],f=!0)},p(u,h){const m={};h&2&&(m.func=u[12]),a.$set(m)},i(u){c||(U(a.$$.fragment,u),c=!0)},o(u){q(a.$$.fragment,u),c=!1},d(u){u&&g(e),ee(a),f=!1,Oe(l)}}}function $i(t){let e,n;return e=new lr({}),{c(){Z(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p:Le,i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Oi(t){let e,n;return e=new cr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[18]}}),{c(){Z(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Bi(t){let e,n;return e=new vn({props:{f:!0,cardsData:[...t[5]]}}),{c(){Z(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Mi(t){let e,n;return e=new vn({props:{f:!1,cardsData:[...t[4]]}}),{c(){Z(e.$$.fragment)},l(r){X(e.$$.fragment,r)},m(r,s){Q(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(U(e.$$.fragment,r),n=!0)},o(r){q(e.$$.fragment,r),n=!1},d(r){ee(e,r)}}}function Ni(t){let e,n="Fellowships",r,s,o,i,a="Courses",c,f,l,u,h,m,$;return s=new Lt({props:{f:!0,onClick:t[16],cardsData:[...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4]]}}),f=new Lt({props:{f:!1,onClick:t[17],cardsData:[...t[4]]}}),u=new mr({props:{blogs:t[7]}}),m=new _r({props:{data:t[6]}}),{c(){e=w("div"),e.textContent=n,r=R(),Z(s.$$.fragment),o=R(),i=w("div"),i.textContent=a,c=R(),Z(f.$$.fragment),l=R(),Z(u.$$.fragment),h=R(),Z(m.$$.fragment),this.h()},l(p){e=y(p,"DIV",{class:!0,"data-svelte-h":!0}),Y(e)!=="svelte-9rjion"&&(e.textContent=n),r=H(p),X(s.$$.fragment,p),o=H(p),i=y(p,"DIV",{class:!0,"data-svelte-h":!0}),Y(i)!=="svelte-4wj5r"&&(i.textContent=a),c=H(p),X(f.$$.fragment,p),l=H(p),X(u.$$.fragment,p),h=H(p),X(m.$$.fragment,p),this.h()},h(){d(e,"class","title"),d(i,"class","title")},m(p,I){V(p,e,I),V(p,r,I),Q(s,p,I),V(p,o,I),V(p,i,I),V(p,c,I),Q(f,p,I),V(p,l,I),Q(u,p,I),V(p,h,I),Q(m,p,I),$=!0},p(p,I){const F={};I&16&&(F.cardsData=[...p[4],...p[4],...p[4],...p[4],...p[4],...p[4],...p[4],...p[4]]),s.$set(F);const O={};I&16&&(O.cardsData=[...p[4]]),f.$set(O);const C={};I&128&&(C.blogs=p[7]),u.$set(C);const x={};I&64&&(x.data=p[6]),m.$set(x)},i(p){$||(U(s.$$.fragment,p),U(f.$$.fragment,p),U(u.$$.fragment,p),U(m.$$.fragment,p),$=!0)},o(p){q(s.$$.fragment,p),q(f.$$.fragment,p),q(u.$$.fragment,p),q(m.$$.fragment,p),$=!1},d(p){p&&(g(e),g(r),g(o),g(i),g(c),g(l),g(h)),ee(s,p),ee(f,p),ee(u,p),ee(m,p)}}}function Li(t){let e,n,r,s,o,i,a="Courses",c,f,l="Fellowships",u,h,m="Contact us",$,p,I,F,O,C,x="About us",v,_,E,L,W,N,M,D,B,k,j,T,K=t[9]&&bn(t);n=new Ai({props:{enableTransparency:!0}});const Ee=[Ni,Mi,Bi,Oi,$i],ne=[];function se(S,z){return S[1]==0?0:S[1]==1?1:S[1]==2?2:S[1]==3?3:4}return N=se(t),M=ne[N]=Ee[N](t),B=new fr({props:{scrollBoxHeight:t[8]}}),{c(){K&&K.c(),e=R(),Z(n.$$.fragment),r=R(),s=w("div"),o=w("ul"),i=w("li"),i.textContent=a,c=R(),f=w("li"),f.textContent=l,u=R(),h=w("li"),h.textContent=m,p=R(),I=w("div"),F=w("div"),O=w("div"),C=w("p"),C.textContent=x,v=R(),_=w("p"),E=He(t[0]),L=R(),W=w("div"),M.c(),D=R(),Z(B.$$.fragment),this.h()},l(S){K&&K.l(S),e=H(S),X(n.$$.fragment,S),r=H(S),s=y(S,"DIV",{class:!0,id:!0,style:!0});var z=A(s);o=y(z,"UL",{});var re=A(o);i=y(re,"LI",{"data-svelte-h":!0}),Y(i)!=="svelte-15gd3eg"&&(i.textContent=a),c=H(re),f=y(re,"LI",{"data-svelte-h":!0}),Y(f)!=="svelte-1w3oh8g"&&(f.textContent=l),u=H(re),h=y(re,"LI",{"data-svelte-h":!0}),Y(h)!=="svelte-1pessln"&&(h.textContent=m),re.forEach(g),z.forEach(g),p=H(S),I=y(S,"DIV",{class:!0});var De=A(I);F=y(De,"DIV",{class:!0});var Tt=A(F);O=y(Tt,"DIV",{class:!0});var Ne=A(O);C=y(Ne,"P",{style:!0,"data-svelte-h":!0}),Y(C)!=="svelte-1mkz37p"&&(C.textContent=x),v=H(Ne),_=y(Ne,"P",{style:!0});var At=A(_);E=Ve(At,t[0]),At.forEach(g),Ne.forEach(g),Tt.forEach(g),De.forEach(g),L=H(S),W=y(S,"DIV",{class:!0});var $t=A(W);M.l($t),$t.forEach(g),D=H(S),X(B.$$.fragment,S),this.h()},h(){d(s,"class","side-menu svelte-1oj95kd"),d(s,"id","menuu"),d(s,"style",$=`display: ${t[10]?"block":"none"};`),P(C,"position","relative"),P(C,"right","70px"),P(_,"font-weight","300"),P(_,"text-align","left"),P(_,"font-size","20px"),d(O,"class","image-text svelte-1oj95kd"),d(F,"class","image-overlay svelte-1oj95kd"),d(I,"class","header-image svelte-1oj95kd"),d(W,"class","scroll-box svelte-1oj95kd")},m(S,z){K&&K.m(S,z),V(S,e,z),Q(n,S,z),V(S,r,z),V(S,s,z),b(s,o),b(o,i),b(o,c),b(o,f),b(o,u),b(o,h),V(S,p,z),V(S,I,z),b(I,F),b(F,O),b(O,C),b(O,v),b(O,_),b(_,E),V(S,L,z),V(S,W,z),ne[N].m(W,null),V(S,D,z),Q(B,S,z),k=!0,j||(T=[J(i,"click",t[13]),J(f,"click",t[14]),J(h,"click",t[15])],j=!0)},p(S,[z]){S[9]?K?(K.p(S,z),z&512&&U(K,1)):(K=bn(S),K.c(),U(K,1),K.m(e.parentNode,e)):K&&(ke(),q(K,1,1,()=>{K=null}),Se()),(!k||z&1024&&$!==($=`display: ${S[10]?"block":"none"};`))&&d(s,"style",$),(!k||z&1)&&je(E,S[0]);let re=N;N=se(S),N===re?ne[N].p(S,z):(ke(),q(ne[re],1,1,()=>{ne[re]=null}),Se(),M=ne[N],M?M.p(S,z):(M=ne[N]=Ee[N](S),M.c()),U(M,1),M.m(W,null));const De={};z&256&&(De.scrollBoxHeight=S[8]),B.$set(De)},i(S){k||(U(K),U(n.$$.fragment,S),U(M),U(B.$$.fragment,S),k=!0)},o(S){q(K),q(n.$$.fragment,S),q(M),q(B.$$.fragment,S),k=!1},d(S){S&&(g(e),g(r),g(s),g(p),g(I),g(L),g(W),g(D)),K&&K.d(S),ee(n,S),ne[N].d(),ee(B,S),j=!1,Oe(T)}}}function Pi(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ri=t=>t.stopPropagation();function Hi(t,e,n){let r="",s=0;async function o(D,B,k){const j=await fetch("https://dentists-backend.onrender.com/api/"+D,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(B)});if(!j.ok)throw ur("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${j.status}`);const T=await j.json();return k&&k(),T}let i=!1;async function a(){o("n/gp").then(D=>{D=D.d,n(6,$=D.map(B=>Object({title:B.productName,text:"Price : "+B.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+B.productID+"/0",discount:B.discount})))})}async function c(){o("n/gc").then(D=>{D=D.d,n(4,h=D.map(B=>Object({title:B.courseName,id:B.courseID,text:B.courseDetails,duration:B.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+B.courseID,clickHandler:()=>{const k=document.createElement("a");k.href="/courses/"+B.courseID,k.click(),B.courseID,n(2,i=!1)}}))),console.log(h)})}let f;async function l(){o("n/gf").then(D=>{D=D.d,n(5,m=D.map(B=>Object({id:B.fellowshipID,title:B.fellowshipName,duration:B.fellowshipDuration,text:B.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+B.fellowshipID,clickHandler:()=>{B.fellowshipID,n(2,i=!0)}})))})}async function u(){o("n/gb").then(D=>{D=D.d,n(7,p=D.map(B=>Object({id:B.blogID,text:B.blogDetails,title:B.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+B.blogID,clickHandler:()=>{}})))})}let h=[],m=[],$=[],p=[];function I(){const D=document.querySelector(".scroll-box");D&&n(8,F=Number(getComputedStyle(D).height.split("px")[0]))}let F=0;$e(()=>{document.body.addEventListener("click",function(T){console.log(T.target.id),console.log(x),T.target.id!="menuuu"&&T.target.id!="menuio"&&x&&n(10,x=!1)}),setInterval(()=>{I()},500),o("aus").then(T=>{n(0,r=T.d)}),window.addEventListener("resize",I),I();const B=Tn({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),k=Ei(B);Di(k,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(T=>{console.log(T)}),ki(k,T=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(T)}),Promise.all([c(),l(),u(),a()]).then(()=>{addEventListener("ocd",T=>{console.log(T.detail),T.detail.f?(console.log(m),console.log(T.detail.id),n(3,f=m.filter(K=>K.id==T.detail.id)[0])):n(3,f=h.filter(K=>K.id==T.detail.id)[0])})});const j=()=>{};return window.addEventListener("scroll",j),document.body.style.overflow=O?"hidden":"auto",()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",I),document.body.style.overflow="auto"}}),sr(()=>{I()});let O=!1;function C(){n(9,O=!1)}Pi().then(D=>{D||console.log("Developer tools are closed.")});let x=!1;return[r,s,i,f,h,m,$,p,F,O,x,C,()=>{n(1,s=4),C()},function(){console.log("CLICKED HERE");const D=document.createElement("a");D.href="/courses",D.click()},function(){console.log("clicked here");const D=document.createElement("a");D.href="/fellowships",D.click()},function(){const D=document.createElement("a");D.href="/contact-us",D.click()},function(){const D=document.createElement("a");D.href="/fellowships",D.click()},function(){const D=document.createElement("a");D.href="/courses",D.click()},function(){const D=document.createElement("a");D.href="/contact-us",D.click()}]}class Qi extends Be{constructor(e){super(),Me(this,e,Hi,Li,Ae,{})}}export{Qi as component};
