import{s as Ae,e as w,h as L,b as y,k as S,f as g,j as R,d as J,m,o as A,i as N,p as _,q as Y,G as ts,v as dt,w as $e,t as Re,l as Ve,r as He,n as Ne,y as je,z as ye,x as fe,F as we,K as ns}from"../chunks/scheduler.Cl0VmwpT.js";import{S as Oe,i as Be,t as K,g as De,e as Te,a as G,c as Q,b as ee,m as te,d as ne}from"../chunks/index.9DdFkufZ.js";/* empty css                                                     */import{C as ss}from"../chunks/Card.DsZVdls4.js";import{e as ae,u as rs,d as os}from"../chunks/each.DTRCTIt3.js";import{B as is}from"../chunks/Button.BODDoA1H.js";import"../chunks/Map.C3nbod2v.js";import{G as gn}from"../chunks/Grid.B9w0s_oV.js";import{L as mn}from"../chunks/Login.CumFLGQv.js";import{C as as}from"../chunks/CourseData.CV0Z69P9.js";import{C as cs}from"../chunks/Contact.Cifo0AiQ.js";import{n as ls}from"../chunks/not.DNvn3Bfc.js";import{S as us}from"../chunks/TopBar.svelte_svelte_type_style_lang.VgKLrJKv.js";import{F as fs}from"../chunks/Footer.WJINXk50.js";function $t(t,e,n){const s=t.slice();return s[6]=e[n].title,s[7]=e[n].text,s[8]=e[n].src,s[9]=e[n].id,s[10]=e[n].clickHandler,s}function Ot(t){let e,n;return e=new ss({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){Q(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,r){te(e,s,r),n=!0},p(s,r){const o={};r&4&&(o.f=s[2]),r&1&&(o.id=s[9]),r&1&&(o.title=s[6]),r&1&&(o.text=s[7]),r&1&&(o.src=s[8]),r&1&&(o.clickHandler=s[10]),r&1&&(o.key=s[6]+s[7]),e.$set(o)},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function ds(t){let e,n,s,r,o,i='<div>Show all</div> <img src="/back-icon.png"/>',a,l,f,h=ae([...t[0],...t[0],...t[0],...t[0]]),u=[];for(let d=0;d<h.length;d+=1)u[d]=Ot($t(t,h,d));const b=d=>G(u[d],1,1,()=>{u[d]=null});return{c(){e=w("div"),n=w("div");for(let d=0;d<u.length;d+=1)u[d].c();s=L(),r=w("div"),o=w("button"),o.innerHTML=i,this.h()},l(d){e=y(d,"DIV",{style:!0,class:!0});var v=S(e);n=y(v,"DIV",{class:!0,id:!0});var c=S(n);for(let T=0;T<u.length;T+=1)u[T].l(c);c.forEach(g),v.forEach(g),s=R(d),r=y(d,"DIV",{style:!0});var p=S(r);o=y(p,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),J(o)!=="svelte-2n4iru"&&(o.innerHTML=i),p.forEach(g),this.h()},h(){m(n,"class","row svelte-8t36q7"),m(n,"id","row-container"),A(e,"margin-bottom","0"),A(e,"height","406px"),m(e,"class","row svelte-8t36q7"),m(o,"class","button svelte-8t36q7"),A(o,"display","flex"),A(o,"align-items","center"),A(r,"display","grid"),A(r,"place-items","center"),A(r,"margin-bottom","90px"),A(r,"margin-top","20px")},m(d,v){N(d,e,v),_(e,n);for(let c=0;c<u.length;c+=1)u[c]&&u[c].m(n,null);N(d,s,v),N(d,r,v),_(r,o),a=!0,l||(f=Y(o,"click",function(){ts(t[1])&&t[1].apply(this,arguments)}),l=!0)},p(d,[v]){if(t=d,v&5){h=ae([...t[0],...t[0],...t[0],...t[0]]);let c;for(c=0;c<h.length;c+=1){const p=$t(t,h,c);u[c]?(u[c].p(p,v),K(u[c],1)):(u[c]=Ot(p),u[c].c(),K(u[c],1),u[c].m(n,null))}for(De(),c=h.length;c<u.length;c+=1)b(c);Te()}},i(d){if(!a){for(let v=0;v<h.length;v+=1)K(u[v]);a=!0}},o(d){u=u.filter(Boolean);for(let v=0;v<u.length;v+=1)G(u[v]);a=!1},d(d){d&&(g(e),g(s),g(r)),dt(u,d),l=!1,f()}}}function hs(t,e,n){let{cardsData:s=[]}=e,{onClick:r}=e,{f:o}=e;return s.length*340,$e(()=>{document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,s=i.cardsData),"onClick"in i&&n(1,r=i.onClick),"f"in i&&n(2,o=i.f)},[s,r,o]}class Bt extends Oe{constructor(e){super(),Be(this,e,hs,ds,Ae,{cardsData:0,onClick:1,f:2})}}function Mt(t,e,n){const s=t.slice();return s[12]=e[n],s[14]=n,s}function Nt(t,e,n){const s=t.slice();return s[15]=e[n],s[14]=n,s}function Pt(t){let e,n;return{c(){e=w("img"),this.h()},l(s){e=y(s,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){fe(e.src,n=t[15].src)||m(e,"src",n),m(e,"alt","Neumorphic Picture"),m(e,"id","blog-image"),m(e,"class","rectangular-image svelte-14rovze")},m(s,r){N(s,e,r)},p(s,r){r&1&&!fe(e.src,n=s[15].src)&&m(e,"src",n)},d(s){s&&g(e)}}}function Lt(t){let e,n=t[14]==t[2]&&Pt(t);return{c(){n&&n.c(),e=ye()},l(s){n&&n.l(s),e=ye()},m(s,r){n&&n.m(s,r),N(s,e,r)},p(s,r){s[14]==s[2]?n?n.p(s,r):(n=Pt(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){s&&g(e),n&&n.d(s)}}}function Rt(t){let e,n,s=t[0][t[2]].title+"",r,o,i=t[0].length>0&&Vt(t);return{c(){e=w("div"),n=w("h2"),r=Re(s),o=L(),i&&i.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var l=S(e);n=y(l,"H2",{style:!0,class:!0});var f=S(n);r=Ve(f,s),f.forEach(g),o=R(l),i&&i.l(l),l.forEach(g),this.h()},h(){A(n,"margin","-2px 0 -10px 0"),m(n,"class","svelte-14rovze"),m(e,"class","captionCont svelte-14rovze")},m(a,l){N(a,e,l),_(e,n),_(n,r),_(e,o),i&&i.m(e,null)},p(a,l){l&5&&s!==(s=a[0][a[2]].title+"")&&He(r,s),a[0].length>0?i?i.p(a,l):(i=Vt(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&g(e),i&&i.d()}}}function Vt(t){let e,n=t[0][t[2]].text+"",s;return{c(){e=w("p"),s=Re(n),this.h()},l(r){e=y(r,"P",{class:!0});var o=S(e);s=Ve(o,n),o.forEach(g),this.h()},h(){m(e,"class","svelte-14rovze")},m(r,o){N(r,e,o),_(e,s)},p(r,o){o&5&&n!==(n=r[0][r[2]].text+"")&&He(s,n)},d(r){r&&g(e)}}}function Ht(t,e){let n,s,r,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=w("div"),this.h()},l(a){n=y(a,"DIV",{style:!0,class:!0}),S(n).forEach(g),this.h()},h(){A(n,"margin-top","10px"),A(n,"margin-bottom","10px"),m(n,"class",s="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze"),this.first=n},m(a,l){N(a,n,l),r||(o=Y(n,"click",i),r=!0)},p(a,l){e=a,l&4&&s!==(s="dot "+(e[14]===e[2]?"light-dot":"dark-dot")+" svelte-14rovze")&&m(n,"class",s)},d(a){a&&g(n),r=!1,o()}}}function ps(t){let e,n,s,r='<img src="/open.png" style="right: 10%; width: 33px;" class="svelte-14rovze"/>',o,i,a,l,f,h,u,b,d,v="<",c,p,T=">",M,U,H,V=[],F=new Map,C,P,W=ae(t[0]),O=[];for(let E=0;E<W.length;E+=1)O[E]=Lt(Nt(t,W,E));let B=t[0].length>0&&Rt(t),I=ae([0,1,2]);const $=E=>E[14];for(let E=0;E<3;E+=1){let j=Mt(t,I,E),D=$(j);F.set(D,V[E]=Ht(D,j))}return{c(){e=w("div"),n=w("div"),s=w("button"),s.innerHTML=r,o=L(),i=w("div"),a=w("div"),l=Re(t[1]),f=L(),h=w("div"),u=w("div");for(let E=0;E<O.length;E+=1)O[E].c();b=L(),d=w("div"),d.textContent=v,c=L(),p=w("div"),p.textContent=T,M=L(),B&&B.c(),U=L(),H=w("div");for(let E=0;E<3;E+=1)V[E].c();this.h()},l(E){e=y(E,"DIV",{class:!0});var j=S(e);n=y(j,"DIV",{class:!0});var D=S(n);s=y(D,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),J(s)!=="svelte-hwduld"&&(s.innerHTML=r),D.forEach(g),o=R(j),i=y(j,"DIV",{style:!0,class:!0});var x=S(i);a=y(x,"DIV",{class:!0});var Ee=S(a);l=Ve(Ee,t[1]),Ee.forEach(g),x.forEach(g),f=R(j),h=y(j,"DIV",{class:!0});var Z=S(h);u=y(Z,"DIV",{class:!0});var re=S(u);for(let z=0;z<O.length;z+=1)O[z].l(re);b=R(re),d=y(re,"DIV",{class:!0,"data-svelte-h":!0}),J(d)!=="svelte-nl1vs9"&&(d.textContent=v),c=R(re),p=y(re,"DIV",{class:!0,"data-svelte-h":!0}),J(p)!=="svelte-dra8cl"&&(p.textContent=T),re.forEach(g),M=R(Z),B&&B.l(Z),U=R(Z),H=y(Z,"DIV",{class:!0});var k=S(H);for(let z=0;z<3;z+=1)V[z].l(k);k.forEach(g),Z.forEach(g),j.forEach(g),this.h()},h(){A(s,"padding","3px 4px"),A(s,"float","inline-end"),A(s,"right","10%"),A(s,"bottom","13px"),m(s,"class","svelte-14rovze"),m(n,"class","icon svelte-14rovze"),m(a,"class","#2e3b6f-title svelte-14rovze"),A(i,"display","flex"),A(i,"justify-content","space-between"),A(i,"align-items","center"),A(i,"padding","10px"),m(i,"class","svelte-14rovze"),m(d,"class","nextImageBtn svelte-14rovze"),m(p,"class","previousImageBtn svelte-14rovze"),m(u,"class","imageCont svelte-14rovze"),m(H,"class","dots-container svelte-14rovze"),m(h,"class","postCard svelte-14rovze"),m(e,"class","svelte-14rovze")},m(E,j){N(E,e,j),_(e,n),_(n,s),_(e,o),_(e,i),_(i,a),_(a,l),_(e,f),_(e,h),_(h,u);for(let D=0;D<O.length;D+=1)O[D]&&O[D].m(u,null);_(u,b),_(u,d),_(u,c),_(u,p),_(h,M),B&&B.m(h,null),_(h,U),_(h,H);for(let D=0;D<3;D+=1)V[D]&&V[D].m(H,null);C||(P=[Y(s,"click",t[5]),Y(d,"click",t[6]),Y(p,"click",t[7])],C=!0)},p(E,[j]){if(j&2&&He(l,E[1]),j&5){W=ae(E[0]);let D;for(D=0;D<W.length;D+=1){const x=Nt(E,W,D);O[D]?O[D].p(x,j):(O[D]=Lt(x),O[D].c(),O[D].m(u,b))}for(;D<O.length;D+=1)O[D].d(1);O.length=W.length}E[0].length>0?B?B.p(E,j):(B=Rt(E),B.c(),B.m(h,U)):B&&(B.d(1),B=null),j&12&&(I=ae([0,1,2]),V=rs(V,j,$,1,E,I,F,H,os,Ht,null,Mt))},i:Ne,o:Ne,d(E){E&&g(e),dt(O,E),B&&B.d();for(let j=0;j<3;j+=1)V[j].d();C=!1,je(P)}}}function gs(t,e,n){let{firstTitle:s="Default Title"}=e,{secondTitle:r="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(b){console.log(b),n(2,i=b)}$e(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function d(){console.log("wack wack"),!(o.length<1)&&n(2,i=(i+1)%o.length)}d(),setInterval(d,7e3)});const l=()=>{location.href="/blogs"},f=()=>{console.log(i),n(2,i=o.indexOf(o.at(i-1))),console.log(i)},h=()=>{n(2,i=(i+1)%o.length)},u=b=>a(b);return t.$$set=b=>{"firstTitle"in b&&n(1,s=b.firstTitle),"secondTitle"in b&&n(4,r=b.secondTitle),"blogs"in b&&n(0,o=b.blogs)},[o,s,i,a,r,l,f,h,u]}class ms extends Oe{constructor(e){super(),Be(this,e,gs,ps,Ae,{firstTitle:1,secondTitle:4,blogs:0})}}function jt(t,e,n){const s=t.slice();return s[3]=e[n],s[5]=n,s}function Ft(t){let e,n,s,r;return{c(){e=w("div"),n=w("div"),s=w("img"),this.h()},l(o){e=y(o,"DIV",{class:!0});var i=S(e);n=y(i,"DIV",{class:!0,style:!0});var a=S(n);s=y(a,"IMG",{src:!0,style:!0,class:!0}),a.forEach(g),i.forEach(g),this.h()},h(){fe(s.src,r=t[0][t[1]%t[0].length].src)||m(s,"src",r),A(s,"border-radius","10px"),m(s,"class","svelte-f7fgfc"),m(n,"class","postCard svelte-f7fgfc"),A(n,"width","270px"),A(n,"height","270px"),A(n,"border-radius","10px"),A(n,"background-color","#e6e7ee"),A(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),A(n,"margin-bottom","50px"),m(e,"class","image-card svelte-f7fgfc")},m(o,i){N(o,e,i),_(e,n),_(n,s)},p(o,i){i&3&&!fe(s.src,r=o[0][o[1]%o[0].length].src)&&m(s,"src",r)},d(o){o&&g(e)}}}function zt(t){let e,n=ae(t[0]),s=[];for(let r=0;r<n.length;r+=1)s[r]=xt(jt(t,n,r));return{c(){for(let r=0;r<s.length;r+=1)s[r].c();e=ye()},l(r){for(let o=0;o<s.length;o+=1)s[o].l(r);e=ye()},m(r,o){for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(r,o);N(r,e,o)},p(r,o){if(o&1){n=ae(r[0]);let i;for(i=0;i<n.length;i+=1){const a=jt(r,n,i);s[i]?s[i].p(a,o):(s[i]=xt(a),s[i].c(),s[i].m(e.parentNode,e))}for(;i<s.length;i+=1)s[i].d(1);s.length=n.length}},d(r){r&&g(e),dt(s,r)}}}function Ut(t){let e,n,s,r;return{c(){e=w("div"),n=w("img"),r=L(),this.h()},l(o){e=y(o,"DIV",{class:!0,style:!0});var i=S(e);n=y(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(g),r=R(o),this.h()},h(){fe(n.src,s=t[0][(t[5]+1)%t[0].length].src)||m(n,"src",s),A(n,"border-radius","10px"),m(n,"class","svelte-f7fgfc"),m(e,"class","postCard svelte-f7fgfc"),m(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){N(o,e,i),_(e,n),N(o,r,i)},p(o,i){i&1&&!fe(n.src,s=o[0][(o[5]+1)%o[0].length].src)&&m(n,"src",s)},d(o){o&&(g(e),g(r))}}}function xt(t){let e,n=t[5]+1!=t[0].length&&Ut(t);return{c(){n&&n.c(),e=ye()},l(s){n&&n.l(s),e=ye()},m(s,r){n&&n.m(s,r),N(s,e,r)},p(s,r){s[5]+1!=s[0].length?n?n.p(s,r):(n=Ut(s),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(s){s&&g(e),n&&n.d(s)}}}function bs(t){let e,n,s="Products",r,o,i,a,l,f='<div class="black-title svelte-f7fgfc">Title</div> <div class="small-note svelte-f7fgfc">A small note goes here.</div> <div class="big-text svelte-f7fgfc">Big bold black text.</div>',h,u,b,d,v,c,p,T,M,U="",H,V=t[0].length>=1&&Ft(t),F=t[0].length>1&&zt(t);return p=new is({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=w("div"),n=w("div"),n.textContent=s,r=L(),o=w("div"),i=w("div"),V&&V.c(),a=L(),l=w("div"),l.innerHTML=f,h=L(),u=w("div"),b=w("div"),d=w("div"),F&&F.c(),v=L(),c=w("div"),Q(p.$$.fragment),T=L(),M=w("div"),M.innerHTML=U,this.h()},l(C){e=y(C,"DIV",{style:!0});var P=S(e);n=y(P,"DIV",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-t04v0b"&&(n.textContent=s),r=R(P),o=y(P,"DIV",{class:!0,style:!0});var W=S(o);i=y(W,"DIV",{class:!0});var O=S(i);V&&V.l(O),a=R(O),l=y(O,"DIV",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-1sx5tfn"&&(l.innerHTML=f),O.forEach(g),h=R(W),u=y(W,"DIV",{style:!0});var B=S(u);b=y(B,"DIV",{style:!0});var I=S(b);d=y(I,"DIV",{class:!0});var $=S(d);F&&F.l($),$.forEach(g),I.forEach(g),v=R(B),c=y(B,"DIV",{style:!0});var E=S(c);ee(p.$$.fragment,E),E.forEach(g),B.forEach(g),T=R(W),M=y(W,"DIV",{class:!0,"data-svelte-h":!0}),J(M)!=="svelte-cpoj1k"&&(M.innerHTML=U),W.forEach(g),P.forEach(g),this.h()},h(){m(n,"class","#2e3b6f-title"),m(l,"class","text-container svelte-f7fgfc"),m(i,"class","first-row svelte-f7fgfc"),m(d,"class","row-images svelte-f7fgfc"),A(b,"overflow-x","scroll"),m(c,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),A(u,"display","flex"),m(M,"class","show-call-button svelte-f7fgfc"),m(o,"class","neumorphic-card svelte-f7fgfc"),A(o,"height","560px"),A(e,"margin-top","90px")},m(C,P){N(C,e,P),_(e,n),_(e,r),_(e,o),_(o,i),V&&V.m(i,null),_(i,a),_(i,l),_(o,h),_(o,u),_(u,b),_(b,d),F&&F.m(d,null),_(u,v),_(u,c),te(p,c,null),_(o,T),_(o,M),H=!0},p(C,[P]){C[0].length>=1?V?V.p(C,P):(V=Ft(C),V.c(),V.m(i,a)):V&&(V.d(1),V=null),C[0].length>1?F?F.p(C,P):(F=zt(C),F.c(),F.m(d,null)):F&&(F.d(1),F=null)},i(C){H||(K(p.$$.fragment,C),H=!0)},o(C){G(p.$$.fragment,C),H=!1},d(C){C&&g(e),V&&V.d(),F&&F.d(),ne(p)}}}function vs(t,e,n){let{data:s=[]}=e,r=0;setInterval(()=>{s.length>1&&n(1,r=(r+1)%s.length)},7e3),$e(()=>{console.log(s)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,s=i.data)},[s,r,o]}class _s extends Oe{constructor(e){super(),Be(this,e,vs,bs,Ae,{data:0})}}var Kt={};/**
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
 */const bn=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},ws=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const o=t[n++];e[s++]=String.fromCharCode((r&31)<<6|o&63)}else if(r>239&&r<365){const o=t[n++],i=t[n++],a=t[n++],l=((r&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],i=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(o&63)<<6|i&63)}}return e.join("")},vn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const o=t[r],i=r+1<t.length,a=i?t[r+1]:0,l=r+2<t.length,f=l?t[r+2]:0,h=o>>2,u=(o&3)<<4|a>>4;let b=(a&15)<<2|f>>6,d=f&63;l||(d=64,i||(b=64)),s.push(n[h],n[u],n[b],n[d])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(bn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):ws(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const o=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const f=r<t.length?n[t.charAt(r)]:64;++r;const u=r<t.length?n[t.charAt(r)]:64;if(++r,o==null||a==null||f==null||u==null)throw new ys;const b=o<<2|a>>4;if(s.push(b),f!==64){const d=a<<4&240|f>>2;if(s.push(d),u!==64){const v=f<<6&192|u;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ys extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Is=function(t){const e=bn(t);return vn.encodeByteArray(e,!0)},_n=function(t){return Is(t).replace(/\./g,"")},Es=function(t){try{return vn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function ks(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ds=()=>ks().__FIREBASE_DEFAULTS__,Ts=()=>{if(typeof process>"u"||typeof Kt>"u")return;const t=Kt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ss=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Es(t[1]);return e&&JSON.parse(e)},Cs=()=>{try{return Ds()||Ts()||Ss()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},wn=()=>{var t;return(t=Cs())===null||t===void 0?void 0:t.config};/**
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
 */class As{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}function yn(){try{return typeof indexedDB=="object"}catch{return!1}}function In(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var o;e(((o=r.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function $s(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Os="FirebaseError";class Ie extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Os,Object.setPrototypeOf(this,Ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Fe.prototype.create)}}class Fe{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,o=this.errors[e],i=o?Bs(o,s):"Error",a=`${this.serviceName}: ${i} (${r}).`;return new Ie(r,a,s)}}function Bs(t,e){return t.replace(Ms,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const Ms=/\{\$([^}]+)}/g;function st(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const o=t[r],i=e[r];if(Wt(o)&&Wt(i)){if(!st(o,i))return!1}else if(o!==i)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function Wt(t){return t!==null&&typeof t=="object"}/**
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
 */function ht(t){return t&&t._delegate?t._delegate:t}class de{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Ns{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new As;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ls(e))try{this.getOrInitializeService({instanceIdentifier:he})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:r});s.resolve(o)}catch{}}}}clearInstance(e=he){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=he){return this.instances.has(e)}getOptions(e=he){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);s===a&&i.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),o=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;o.add(e),this.onInitCallbacks.set(r,o);const i=this.instances.get(r);return i&&e(i,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ps(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=he){return this.component?this.component.multipleInstances?e:he:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ps(t){return t===he?void 0:t}function Ls(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Ns(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var q;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(q||(q={}));const Vs={debug:q.DEBUG,verbose:q.VERBOSE,info:q.INFO,warn:q.WARN,error:q.ERROR,silent:q.SILENT},Hs=q.INFO,js={[q.DEBUG]:"log",[q.VERBOSE]:"log",[q.INFO]:"info",[q.WARN]:"warn",[q.ERROR]:"error"},Fs=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=js[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class zs{constructor(e){this.name=e,this._logLevel=Hs,this._logHandler=Fs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in q))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Vs[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,q.DEBUG,...e),this._logHandler(this,q.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,q.VERBOSE,...e),this._logHandler(this,q.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,q.INFO,...e),this._logHandler(this,q.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,q.WARN,...e),this._logHandler(this,q.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,q.ERROR,...e),this._logHandler(this,q.ERROR,...e)}}const Us=(t,e)=>e.some(n=>t instanceof n);let qt,Gt;function xs(){return qt||(qt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ks(){return Gt||(Gt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const En=new WeakMap,rt=new WeakMap,kn=new WeakMap,xe=new WeakMap,pt=new WeakMap;function Ws(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ie(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&En.set(n,t)}).catch(()=>{}),pt.set(e,t),e}function qs(t){if(rt.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});rt.set(t,e)}let ot={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ie(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Gs(t){ot=t(ot)}function Js(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ke(this),e,...n);return kn.set(s,e.sort?e.sort():[e]),ie(s)}:Ks().includes(t)?function(...e){return t.apply(Ke(this),e),ie(En.get(this))}:function(...e){return ie(t.apply(Ke(this),e))}}function Ys(t){return typeof t=="function"?Js(t):(t instanceof IDBTransaction&&qs(t),Us(t,xs())?new Proxy(t,ot):t)}function ie(t){if(t instanceof IDBRequest)return Ws(t);if(xe.has(t))return xe.get(t);const e=Ys(t);return e!==t&&(xe.set(t,e),pt.set(e,t)),e}const Ke=t=>pt.get(t);function gt(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),a=ie(i);return s&&i.addEventListener("upgradeneeded",l=>{s(ie(i.result),l.oldVersion,l.newVersion,ie(i.transaction),l)}),n&&i.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",f=>r(f.oldVersion,f.newVersion,f))}).catch(()=>{}),a}function We(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),ie(n).then(()=>{})}const Xs=["get","getKey","getAll","getAllKeys","count"],Zs=["put","add","delete","clear"],qe=new Map;function Jt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(qe.get(e))return qe.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Zs.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Xs.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,r?"readwrite":"readonly");let f=l.store;return s&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),r&&l.done]))[0]};return qe.set(e,o),o}Gs(t=>({...t,get:(e,n,s)=>Jt(e,n)||t.get(e,n,s),has:(e,n)=>!!Jt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(er(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function er(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const it="@firebase/app",Yt="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ge=new zs("@firebase/app"),tr="@firebase/app-compat",nr="@firebase/analytics-compat",sr="@firebase/analytics",rr="@firebase/app-check-compat",or="@firebase/app-check",ir="@firebase/auth",ar="@firebase/auth-compat",cr="@firebase/database",lr="@firebase/database-compat",ur="@firebase/functions",fr="@firebase/functions-compat",dr="@firebase/installations",hr="@firebase/installations-compat",pr="@firebase/messaging",gr="@firebase/messaging-compat",mr="@firebase/performance",br="@firebase/performance-compat",vr="@firebase/remote-config",_r="@firebase/remote-config-compat",wr="@firebase/storage",yr="@firebase/storage-compat",Ir="@firebase/firestore",Er="@firebase/firestore-compat",kr="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at="[DEFAULT]",Dr={[it]:"fire-core",[tr]:"fire-core-compat",[sr]:"fire-analytics",[nr]:"fire-analytics-compat",[or]:"fire-app-check",[rr]:"fire-app-check-compat",[ir]:"fire-auth",[ar]:"fire-auth-compat",[cr]:"fire-rtdb",[lr]:"fire-rtdb-compat",[ur]:"fire-fn",[fr]:"fire-fn-compat",[dr]:"fire-iid",[hr]:"fire-iid-compat",[pr]:"fire-fcm",[gr]:"fire-fcm-compat",[mr]:"fire-perf",[br]:"fire-perf-compat",[vr]:"fire-rc",[_r]:"fire-rc-compat",[wr]:"fire-gcs",[yr]:"fire-gcs-compat",[Ir]:"fire-fst",[Er]:"fire-fst-compat","fire-js":"fire-js",[kr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new Map,ct=new Map;function Tr(t,e){try{t.container.addComponent(e)}catch(n){ge.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function me(t){const e=t.name;if(ct.has(e))return ge.debug(`There were multiple attempts to register component ${e}.`),!1;ct.set(e,t);for(const n of Pe.values())Tr(n,t);return!0}function mt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ce=new Fe("app","Firebase",Sr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new de("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ce.create("app-deleted",{appName:this._name})}}function Dn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:at,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw ce.create("bad-app-name",{appName:String(r)});if(n||(n=wn()),!n)throw ce.create("no-options");const o=Pe.get(r);if(o){if(st(n,o.options)&&st(s,o.config))return o;throw ce.create("duplicate-app",{appName:r})}const i=new Rs(r);for(const l of ct.values())i.addComponent(l);const a=new Cr(n,s,i);return Pe.set(r,a),a}function Ar(t=at){const e=Pe.get(t);if(!e&&t===at&&wn())return Dn();if(!e)throw ce.create("no-app",{appName:t});return e}function le(t,e,n){var s;let r=(s=Dr[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const o=r.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${r}" with version "${e}":`];o&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ge.warn(a.join(" "));return}me(new de(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const $r="firebase-heartbeat-database",Or=1,Se="firebase-heartbeat-store";let Ge=null;function Tn(){return Ge||(Ge=gt($r,Or,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Se)}}}).catch(t=>{throw ce.create("idb-open",{originalErrorMessage:t.message})})),Ge}async function Br(t){try{return await(await Tn()).transaction(Se).objectStore(Se).get(Sn(t))}catch(e){if(e instanceof Ie)ge.warn(e.message);else{const n=ce.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ge.warn(n.message)}}}async function Xt(t,e){try{const s=(await Tn()).transaction(Se,"readwrite");await s.objectStore(Se).put(e,Sn(t)),await s.done}catch(n){if(n instanceof Ie)ge.warn(n.message);else{const s=ce.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ge.warn(s.message)}}}function Sn(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Mr=1024,Nr=30*24*60*60*1e3;class Pr{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Rr(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Zt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=Nr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Zt(),{heartbeatsToSend:s,unsentEntries:r}=Lr(this._heartbeatsCache.heartbeats),o=_n(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Zt(){return new Date().toISOString().substring(0,10)}function Lr(t,e=Mr){const n=[];let s=t.slice();for(const r of t){const o=n.find(i=>i.agent===r.agent);if(o){if(o.dates.push(r.date),Qt(n)>e){o.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Qt(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Rr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return yn()?In().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Br(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Qt(t){return _n(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){me(new de("platform-logger",e=>new Qs(e),"PRIVATE")),me(new de("heartbeat",e=>new Pr(e),"PRIVATE")),le(it,Yt,t),le(it,Yt,"esm2017"),le("fire-js","")}Vr("");var Hr="firebase",jr="10.7.1";/**
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
 */le(Hr,jr,"app");const Fr=(t,e)=>e.some(n=>t instanceof n);let en,tn;function zr(){return en||(en=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ur(){return tn||(tn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cn=new WeakMap,lt=new WeakMap,An=new WeakMap,Je=new WeakMap,bt=new WeakMap;function xr(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(ue(t.result)),r()},i=()=>{s(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&Cn.set(n,t)}).catch(()=>{}),bt.set(e,t),e}function Kr(t){if(lt.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),r()},i=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});lt.set(t,e)}let ut={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return lt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||An.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ue(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Wr(t){ut=t(ut)}function qr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Ye(this),e,...n);return An.set(s,e.sort?e.sort():[e]),ue(s)}:Ur().includes(t)?function(...e){return t.apply(Ye(this),e),ue(Cn.get(this))}:function(...e){return ue(t.apply(Ye(this),e))}}function Gr(t){return typeof t=="function"?qr(t):(t instanceof IDBTransaction&&Kr(t),Fr(t,zr())?new Proxy(t,ut):t)}function ue(t){if(t instanceof IDBRequest)return xr(t);if(Je.has(t))return Je.get(t);const e=Gr(t);return e!==t&&(Je.set(t,e),bt.set(e,t)),e}const Ye=t=>bt.get(t);function Jr(t,e,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const i=indexedDB.open(t,e),a=ue(i);return s&&i.addEventListener("upgradeneeded",l=>{s(ue(i.result),l.oldVersion,l.newVersion,ue(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(l=>{o&&l.addEventListener("close",()=>o()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}const Yr=["get","getKey","getAll","getAllKeys","count"],Xr=["put","add","delete","clear"],Xe=new Map;function nn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xe.get(e))return Xe.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=Xr.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Yr.includes(n)))return;const o=async function(i,...a){const l=this.transaction(i,r?"readwrite":"readonly");let f=l.store;return s&&(f=f.index(a.shift())),(await Promise.all([f[n](...a),r&&l.done]))[0]};return Xe.set(e,o),o}Wr(t=>({...t,get:(e,n,s)=>nn(e,n)||t.get(e,n,s),has:(e,n)=>!!nn(e,n)||t.has(e,n)}));const $n="@firebase/installations",vt="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=1e4,Bn=`w:${vt}`,Mn="FIS_v2",Zr="https://firebaseinstallations.googleapis.com/v1",Qr=60*60*1e3,eo="installations",to="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},be=new Fe(eo,to,no);function Nn(t){return t instanceof Ie&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn({projectId:t}){return`${Zr}/projects/${t}/installations`}function Ln(t){return{token:t.token,requestStatus:2,expiresIn:ro(t.expiresIn),creationTime:Date.now()}}async function Rn(t,e){const s=(await e.json()).error;return be.create("request-failed",{requestName:t,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function Vn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function so(t,{refreshToken:e}){const n=Vn(t);return n.append("Authorization",oo(e)),n}async function Hn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function ro(t){return Number(t.replace("s","000"))}function oo(t){return`${Mn} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function io({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const s=Pn(t),r=Vn(t),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const i={fid:n,authVersion:Mn,appId:t.appId,sdkVersion:Bn},a={method:"POST",headers:r,body:JSON.stringify(i)},l=await Hn(()=>fetch(s,a));if(l.ok){const f=await l.json();return{fid:f.fid||n,registrationStatus:2,refreshToken:f.refreshToken,authToken:Ln(f.authToken)}}else throw await Rn("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Fn=new Map;function zn(t,e){const n=ze(t);Un(n,e),fo(n,e)}function Un(t,e){const n=Fn.get(t);if(n)for(const s of n)s(e)}function fo(t,e){const n=ho();n&&n.postMessage({key:t,fid:e}),po()}let pe=null;function ho(){return!pe&&"BroadcastChannel"in self&&(pe=new BroadcastChannel("[Firebase] FID Change"),pe.onmessage=t=>{Un(t.data.key,t.data.fid)}),pe}function po(){Fn.size===0&&pe&&(pe.close(),pe=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const go="firebase-installations-database",mo=1,ve="firebase-installations-store";let Ze=null;function _t(){return Ze||(Ze=Jr(go,mo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ve)}}})),Ze}async function Le(t,e){const n=ze(t),r=(await _t()).transaction(ve,"readwrite"),o=r.objectStore(ve),i=await o.get(n);return await o.put(e,n),await r.done,(!i||i.fid!==e.fid)&&zn(t,e.fid),e}async function xn(t){const e=ze(t),s=(await _t()).transaction(ve,"readwrite");await s.objectStore(ve).delete(e),await s.done}async function Ue(t,e){const n=ze(t),r=(await _t()).transaction(ve,"readwrite"),o=r.objectStore(ve),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await r.done,a&&(!i||i.fid!==a.fid)&&zn(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wt(t){let e;const n=await Ue(t.appConfig,s=>{const r=bo(s),o=vo(t,r);return e=o.registrationPromise,o.installationEntry});return n.fid===ft?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function bo(t){const e=t||{fid:lo(),registrationStatus:0};return Kn(e)}function vo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(be.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=_o(t,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wo(t)}:{installationEntry:e}}async function _o(t,e){try{const n=await io(t,e);return Le(t.appConfig,n)}catch(n){throw Nn(n)&&n.customData.serverCode===409?await xn(t.appConfig):await Le(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function wo(t){let e=await sn(t.appConfig);for(;e.registrationStatus===1;)await jn(100),e=await sn(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await wt(t);return s||n}return e}function sn(t){return Ue(t,e=>{if(!e)throw be.create("installation-not-found");return Kn(e)})}function Kn(t){return yo(t)?{fid:t.fid,registrationStatus:0}:t}function yo(t){return t.registrationStatus===1&&t.registrationTime+On<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io({appConfig:t,heartbeatServiceProvider:e},n){const s=Eo(t,n),r=so(t,n),o=e.getImmediate({optional:!0});if(o){const f=await o.getHeartbeatsHeader();f&&r.append("x-firebase-client",f)}const i={installation:{sdkVersion:Bn,appId:t.appId}},a={method:"POST",headers:r,body:JSON.stringify(i)},l=await Hn(()=>fetch(s,a));if(l.ok){const f=await l.json();return Ln(f)}else throw await Rn("Generate Auth Token",l)}function Eo(t,{fid:e}){return`${Pn(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e=!1){let n;const s=await Ue(t.appConfig,o=>{if(!Wn(o))throw be.create("not-registered");const i=o.authToken;if(!e&&To(i))return o;if(i.requestStatus===1)return n=ko(t,e),o;{if(!navigator.onLine)throw be.create("app-offline");const a=Co(o);return n=Do(t,a),a}});return n?await n:s.authToken}async function ko(t,e){let n=await rn(t.appConfig);for(;n.authToken.requestStatus===1;)await jn(100),n=await rn(t.appConfig);const s=n.authToken;return s.requestStatus===0?yt(t,e):s}function rn(t){return Ue(t,e=>{if(!Wn(e))throw be.create("not-registered");const n=e.authToken;return Ao(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Do(t,e){try{const n=await Io(t,e),s=Object.assign(Object.assign({},e),{authToken:n});return await Le(t.appConfig,s),n}catch(n){if(Nn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await xn(t.appConfig);else{const s=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Le(t.appConfig,s)}throw n}}function Wn(t){return t!==void 0&&t.registrationStatus===2}function To(t){return t.requestStatus===2&&!So(t)}function So(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Qr}function Co(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ao(t){return t.requestStatus===1&&t.requestTime+On<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $o(t){const e=t,{installationEntry:n,registrationPromise:s}=await wt(e);return s?s.catch(console.error):yt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(t,e=!1){const n=t;return await Bo(n),(await yt(n,e)).token}async function Bo(t){const{registrationPromise:e}=await wt(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const qn="installations",No="installations-internal",Po=t=>{const e=t.getProvider("app").getImmediate(),n=Mo(e),s=mt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},Lo=t=>{const e=t.getProvider("app").getImmediate(),n=mt(e,qn).getImmediate();return{getId:()=>$o(n),getToken:r=>Oo(n,r)}};function Ro(){me(new de(qn,Po,"PUBLIC")),me(new de(No,Lo,"PRIVATE"))}Ro();le($n,vt);le($n,vt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo="/firebase-messaging-sw.js",Ho="/firebase-cloud-messaging-push-scope",Gn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",jo="https://fcmregistrations.googleapis.com/v1",Jn="google.c.a.c_id",Fo="google.c.a.c_l",zo="google.c.a.ts",Uo="google.c.a.e";var on;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(on||(on={}));/**
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
 */function oe(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function xo(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),r=new Uint8Array(s.length);for(let o=0;o<s.length;++o)r[o]=s.charCodeAt(o);return r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="fcm_token_details_db",Ko=5,an="fcm_token_object_Store";async function Wo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(et))return null;let e=null;return(await gt(et,Ko,{upgrade:async(s,r,o,i)=>{var a;if(r<2||!s.objectStoreNames.contains(an))return;const l=i.objectStore(an),f=await l.index("fcmSenderId").get(t);if(await l.clear(),!!f){if(r===2){const h=f;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:oe(h.vapidKey)}}}else if(r===3){const h=f;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:oe(h.auth),p256dh:oe(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:oe(h.vapidKey)}}}else if(r===4){const h=f;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:oe(h.auth),p256dh:oe(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:oe(h.vapidKey)}}}}}})).close(),await We(et),await We("fcm_vapid_details_db"),await We("undefined"),qo(e)?e:null}function qo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Go="firebase-messaging-database",Jo=1,_e="firebase-messaging-store";let tt=null;function It(){return tt||(tt=gt(Go,Jo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(_e)}}})),tt}async function Yn(t){const e=kt(t),s=await(await It()).transaction(_e).objectStore(_e).get(e);if(s)return s;{const r=await Wo(t.appConfig.senderId);if(r)return await Et(t,r),r}}async function Et(t,e){const n=kt(t),r=(await It()).transaction(_e,"readwrite");return await r.objectStore(_e).put(e,n),await r.done,e}async function Yo(t){const e=kt(t),s=(await It()).transaction(_e,"readwrite");await s.objectStore(_e).delete(e),await s.done}function kt({appConfig:t}){return t.appId}/**
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
 */const Xo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},X=new Fe("messaging","Messaging",Xo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zo(t,e){const n=await Tt(t),s=Zn(e),r={method:"POST",headers:n,body:JSON.stringify(s)};let o;try{o=await(await fetch(Dt(t.appConfig),r)).json()}catch(i){throw X.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw X.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw X.create("token-subscribe-no-token");return o.token}async function Qo(t,e){const n=await Tt(t),s=Zn(e.subscriptionOptions),r={method:"PATCH",headers:n,body:JSON.stringify(s)};let o;try{o=await(await fetch(`${Dt(t.appConfig)}/${e.token}`,r)).json()}catch(i){throw X.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw X.create("token-update-failed",{errorInfo:i})}if(!o.token)throw X.create("token-update-no-token");return o.token}async function Xn(t,e){const s={method:"DELETE",headers:await Tt(t)};try{const o=await(await fetch(`${Dt(t.appConfig)}/${e}`,s)).json();if(o.error){const i=o.error.message;throw X.create("token-unsubscribe-failed",{errorInfo:i})}}catch(r){throw X.create("token-unsubscribe-failed",{errorInfo:r==null?void 0:r.toString()})}}function Dt({projectId:t}){return`${jo}/projects/${t}/registrations`}async function Tt({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Zn({p256dh:t,auth:e,endpoint:n,vapidKey:s}){const r={web:{endpoint:n,auth:e,p256dh:t}};return s!==Gn&&(r.web.applicationPubKey=s),r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ei=7*24*60*60*1e3;async function ti(t){const e=await ri(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:oe(e.getKey("auth")),p256dh:oe(e.getKey("p256dh"))},s=await Yn(t.firebaseDependencies);if(s){if(oi(s.subscriptionOptions,n))return Date.now()>=s.createTime+ei?si(t,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await Xn(t.firebaseDependencies,s.token)}catch(r){console.warn(r)}return cn(t.firebaseDependencies,n)}else return cn(t.firebaseDependencies,n)}async function ni(t){const e=await Yn(t.firebaseDependencies);e&&(await Xn(t.firebaseDependencies,e.token),await Yo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function si(t,e){try{const n=await Qo(t.firebaseDependencies,e),s=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Et(t.firebaseDependencies,s),n}catch(n){throw await ni(t),n}}async function cn(t,e){const s={token:await Zo(t,e),createTime:Date.now(),subscriptionOptions:e};return await Et(t,s),s.token}async function ri(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:xo(e)})}function oi(t,e){const n=e.vapidKey===t.vapidKey,s=e.endpoint===t.endpoint,r=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&s&&r&&o}/**
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
 */function ln(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ii(e,t),ai(e,t),ci(e,t),e}function ii(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const s=e.notification.body;s&&(t.notification.body=s);const r=e.notification.image;r&&(t.notification.image=r);const o=e.notification.icon;o&&(t.notification.icon=o)}function ai(t,e){e.data&&(t.data=e.data)}function ci(t,e){var n,s,r,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(r=(s=e.fcmOptions)===null||s===void 0?void 0:s.link)!==null&&r!==void 0?r:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const l=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;l&&(t.fcmOptions.analyticsLabel=l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(t){return typeof t=="object"&&!!t&&Jn in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Qn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Qn(t,e){const n=[];for(let s=0;s<t.length;s++)n.push(t.charAt(s)),s<e.length&&n.push(e.charAt(s));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(t){if(!t||!t.options)throw nt("App Configuration Object");if(!t.name)throw nt("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const s of e)if(!n[s])throw nt(s);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function nt(t){return X.create("missing-app-config-values",{valueName:t})}/**
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
 */class fi{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const r=ui(e);this.firebaseDependencies={app:e,appConfig:r,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function di(t){try{t.swRegistration=await navigator.serviceWorker.register(Vo,{scope:Ho}),t.swRegistration.update().catch(()=>{})}catch(e){throw X.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function hi(t,e){if(!e&&!t.swRegistration&&await di(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw X.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function pi(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=Gn)}/**
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
 */async function es(t,e){if(!navigator)throw X.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw X.create("permission-blocked");return await pi(t,e==null?void 0:e.vapidKey),await hi(t,e==null?void 0:e.serviceWorkerRegistration),ti(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gi(t,e,n){const s=mi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[Jn],message_name:n[Fo],message_time:n[zo],message_device_time:Math.floor(Date.now()/1e3)})}function mi(t){switch(t){case Ce.NOTIFICATION_CLICKED:return"notification_open";case Ce.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function bi(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Ce.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(ln(n)):t.onMessageHandler.next(ln(n)));const s=n.data;li(s)&&s[Uo]==="1"&&await gi(t,n.messageType,s)}const un="@firebase/messaging",fn="0.12.5";/**
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
 */const vi=t=>{const e=new fi(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>bi(e,n)),e},_i=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:s=>es(e,s)}};function wi(){me(new de("messaging",vi,"PUBLIC")),me(new de("messaging-internal",_i,"PRIVATE")),le(un,fn),le(un,fn,"esm2017")}/**
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
 */async function yi(){try{await In()}catch{return!1}return typeof window<"u"&&yn()&&$s()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Ii(t,e){if(!navigator)throw X.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Ei(t=Ar()){return yi().then(e=>{if(!e)throw X.create("unsupported-browser")},e=>{throw X.create("indexed-db-unsupported")}),mt(ht(t),"messaging").getImmediate()}async function ki(t,e){return t=ht(t),es(t,e)}function Di(t,e){return t=ht(t),Ii(t,e)}wi();function dn(t){let e,n,s,r,o,i,a,l,f,h;return a=new mn({props:{func:t[9]}}),{c(){e=w("div"),n=w("div"),s=w("img"),o=L(),i=w("div"),Q(a.$$.fragment),this.h()},l(u){e=y(u,"DIV",{class:!0});var b=S(e);n=y(b,"DIV",{class:!0});var d=S(n);s=y(d,"IMG",{src:!0,width:!0,style:!0}),o=R(d),i=y(d,"DIV",{class:!0});var v=S(i);ee(a.$$.fragment,v),v.forEach(g),d.forEach(g),b.forEach(g),this.h()},h(){fe(s.src,r="/cancel.png")||m(s,"src",r),m(s,"width","40"),A(s,"float","right"),m(i,"class","content"),m(n,"class","dialog-box svelte-unpsak"),m(e,"class","overlay svelte-unpsak")},m(u,b){N(u,e,b),_(e,n),_(n,s),_(n,o),_(n,i),te(a,i,null),l=!0,f||(h=[Y(s,"click",t[7]),Y(n,"click",Si),Y(e,"click",t[7])],f=!0)},p:Ne,i(u){l||(K(a.$$.fragment,u),l=!0)},o(u){G(a.$$.fragment,u),l=!1},d(u){u&&g(e),ne(a),f=!1,je(h)}}}function hn(t){let e,n,s='<li class="svelte-unpsak"><a href="/" class="svelte-unpsak">Home</a></li> <li class="svelte-unpsak"><a href="/courses" class="svelte-unpsak">courses</a></li> <li class="svelte-unpsak"><a href="/fellowships" class="svelte-unpsak">fellowships</a></li> <li class="svelte-unpsak"><a href="/blogs" class="svelte-unpsak">Blog</a></li> <li class="svelte-unpsak"><a href="/products" class="svelte-unpsak">products</a></li> <li class="svelte-unpsak"><a href="/contact-us" class="svelte-unpsak">Contact us</a></li>',r,o,i,a="Login",l,f,h,u,b,d,v,c,p,T,M,U,H,V,F;return h=new us({}),{c(){e=w("nav"),n=w("ul"),n.innerHTML=s,r=L(),o=w("div"),i=w("button"),i.textContent=a,l=L(),f=w("div"),Q(h.$$.fragment),u=L(),b=w("div"),d=w("div"),v=w("button"),this.h()},l(C){e=y(C,"NAV",{id:!0,style:!0,class:!0});var P=S(e);n=y(P,"UL",{class:!0,"data-svelte-h":!0}),J(n)!=="svelte-1iz39pt"&&(n.innerHTML=s),r=R(P),o=y(P,"DIV",{style:!0});var W=S(o);i=y(W,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),J(i)!=="svelte-fxc53u"&&(i.textContent=a),W.forEach(g),l=R(P),f=y(P,"DIV",{class:!0});var O=S(f);ee(h.$$.fragment,O),O.forEach(g),u=R(P),b=y(P,"DIV",{id:!0,class:!0});var B=S(b);d=y(B,"DIV",{id:!0,class:!0});var I=S(d);v=y(I,"BUTTON",{id:!0,class:!0}),S(v).forEach(g),I.forEach(g),B.forEach(g),P.forEach(g),this.h()},h(){m(n,"class","svelte-unpsak"),m(i,"class","button svelte-unpsak"),A(i,"background-color","transparent"),A(i,"color","white"),A(i,"border","1px solid white"),A(o,"position","relative"),A(o,"right","20px"),m(f,"class","mmm svelte-unpsak"),m(v,"id","circle3LOGO"),m(v,"class",c=we(t[2]?"not scrolled":"not")+" svelte-unpsak"),m(d,"id","circle2"),m(d,"class",p=we(t[2]?"not scrolled":"not")+" svelte-unpsak"),m(b,"id","circle1"),m(b,"class",T=we(t[2]?"not scrolled":"not")+" svelte-unpsak"),m(e,"id",M=t[0]?t[2]?"scrolledT":"T":t[2]?"scrolled":""),m(e,"style",U=t[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${t[4]}), rgba(57, 135, 155,${t[4]}));`:""),m(e,"class","svelte-unpsak")},m(C,P){N(C,e,P),_(e,n),_(e,r),_(e,o),_(o,i),_(e,l),_(e,f),te(h,f,null),_(e,u),_(e,b),_(b,d),_(d,v),H=!0,V||(F=Y(i,"click",t[6]),V=!0)},p(C,P){(!H||P&4&&c!==(c=we(C[2]?"not scrolled":"not")+" svelte-unpsak"))&&m(v,"class",c),(!H||P&4&&p!==(p=we(C[2]?"not scrolled":"not")+" svelte-unpsak"))&&m(d,"class",p),(!H||P&4&&T!==(T=we(C[2]?"not scrolled":"not")+" svelte-unpsak"))&&m(b,"class",T),(!H||P&5&&M!==(M=C[0]?C[2]?"scrolledT":"T":C[2]?"scrolled":""))&&m(e,"id",M),(!H||P&17&&U!==(U=C[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${C[4]}), rgba(57, 135, 155,${C[4]}));`:""))&&m(e,"style",U)},i(C){H||(K(h.$$.fragment,C),H=!0)},o(C){G(h.$$.fragment,C),H=!1},d(C){C&&g(e),ne(h),V=!1,F()}}}function Ti(t){let e,n,s,r,o,i,a,l,f='<li class="svelte-unpsak"><a href="/" class="svelte-unpsak">Home</a></li> <li class="svelte-unpsak"><a href="/courses" class="svelte-unpsak">courses</a></li> <li class="svelte-unpsak"><a href="/fellowships" class="svelte-unpsak">fellowships</a></li> <li class="svelte-unpsak"><a href="/blogs" class="svelte-unpsak">Blog</a></li> <li class="svelte-unpsak"><a href="/products" class="svelte-unpsak">products</a></li> <li class="svelte-unpsak"><a href="/contact-us" class="svelte-unpsak">Contact us</a></li>',h,u,b,d,v=t[1]&&dn(t),c=t[3]&&hn(t);return{c(){v&&v.c(),e=L(),n=w("header"),s=w("div"),r=w("h1"),o=L(),c&&c.c(),i=L(),a=w("div"),l=w("ul"),l.innerHTML=f,this.h()},l(p){v&&v.l(p),e=R(p),n=y(p,"HEADER",{class:!0});var T=S(n);s=y(T,"DIV",{style:!0});var M=S(s);r=y(M,"H1",{}),S(r).forEach(g),M.forEach(g),o=R(T),c&&c.l(T),T.forEach(g),i=R(p),a=y(p,"DIV",{class:!0,id:!0,style:!0});var U=S(a);l=y(U,"UL",{class:!0,"data-svelte-h":!0}),J(l)!=="svelte-16vnmy9"&&(l.innerHTML=f),U.forEach(g),this.h()},h(){A(s,"position","absolute"),A(s,"top","-15px"),A(s,"left","15px"),m(n,"class","svelte-unpsak"),m(l,"class","svelte-unpsak"),m(a,"class","side-menu"),m(a,"id","menuu"),m(a,"style",h=`display: ${t[5]?"block":"none"};`)},m(p,T){v&&v.m(p,T),N(p,e,T),N(p,n,T),_(n,s),_(s,r),_(n,o),c&&c.m(n,null),N(p,i,T),N(p,a,T),_(a,l),u=!0,b||(d=Y(r,"click",t[10]),b=!0)},p(p,[T]){p[1]?v?(v.p(p,T),T&2&&K(v,1)):(v=dn(p),v.c(),K(v,1),v.m(e.parentNode,e)):v&&(De(),G(v,1,1,()=>{v=null}),Te()),p[3]?c?(c.p(p,T),T&8&&K(c,1)):(c=hn(p),c.c(),K(c,1),c.m(n,null)):c&&(De(),G(c,1,1,()=>{c=null}),Te()),(!u||T&32&&h!==(h=`display: ${p[5]?"block":"none"};`))&&m(a,"style",h)},i(p){u||(K(v),K(c),u=!0)},o(p){G(v),G(c),u=!1},d(p){p&&(g(e),g(n),g(i),g(a)),v&&v.d(p),c&&c.d(),b=!1,d()}}}const Si=t=>t.stopPropagation();function Ci(t,e,n){let{disableTransparent:s}=e,{enableTransparency:r}=e,o=!1;function i(){n(1,o=!0)}function a(){n(1,o=!1)}let l=!1,f,h=!1,u=0;$e(()=>{document.body.addEventListener("click",function(p){console.log(p.target.id),console.log(b),p.target.id!="menuuu"&&p.target.id!="menuio"&&b&&n(5,b=!1)}),f=function(){var p=window.scrollY||document.documentElement.scrollTop,T=document.documentElement.scrollHeight-window.innerHeight,M=p/T*100;return M},n(3,h=!0);const c=()=>{n(2,l=window.scrollY>0),console.log(f()*.01),f()>20?n(4,u=f()*.01+.7):n(4,u=f()*.01)};return window.addEventListener("scroll",c),s||window.addEventListener("scroll",c),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",c),document.body.style.overflow="auto"}});let b=!1;const d=()=>{a()},v=function(){const c=document.createElement("a");c.href="/",c.click()};return t.$$set=c=>{"disableTransparent"in c&&n(8,s=c.disableTransparent),"enableTransparency"in c&&n(0,r=c.enableTransparency)},[r,o,l,h,u,b,i,a,s,d,v]}class Ai extends Oe{constructor(e){super(),Be(this,e,Ci,Ti,Ae,{disableTransparent:8,enableTransparency:0})}}function pn(t){let e,n,s,r,o,i,a,l,f,h;return a=new mn({props:{func:t[12]}}),{c(){e=w("div"),n=w("div"),s=w("img"),o=L(),i=w("div"),Q(a.$$.fragment),this.h()},l(u){e=y(u,"DIV",{class:!0});var b=S(e);n=y(b,"DIV",{class:!0});var d=S(n);s=y(d,"IMG",{src:!0}),o=R(d),i=y(d,"DIV",{class:!0});var v=S(i);ee(a.$$.fragment,v),v.forEach(g),d.forEach(g),b.forEach(g),this.h()},h(){fe(s.src,r="/close.png")||m(s,"src",r),m(i,"class","content svelte-1eg9cy6"),m(n,"class","dialog-box svelte-1eg9cy6"),m(e,"class","overlay svelte-1eg9cy6")},m(u,b){N(u,e,b),_(e,n),_(n,s),_(n,o),_(n,i),te(a,i,null),l=!0,f||(h=[Y(s,"click",t[11]),Y(n,"click",Ri),Y(e,"click",t[11])],f=!0)},p(u,b){const d={};b&2&&(d.func=u[12]),a.$set(d)},i(u){l||(K(a.$$.fragment,u),l=!0)},o(u){G(a.$$.fragment,u),l=!1},d(u){u&&g(e),ne(a),f=!1,je(h)}}}function $i(t){let e,n;return e=new cs({}),{c(){Q(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,r){te(e,s,r),n=!0},p:Ne,i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function Oi(t){let e,n;return e=new as({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[18]}}),{c(){Q(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,r){te(e,s,r),n=!0},p(s,r){const o={};r&8&&(o.ID=s[3].id),r&4&&(o.c=!s[2]),r&8&&(o.description=s[3].text?s[3].text:""),r&8&&(o.title=s[3].title),r&8&&(o.duration=s[3].duration),e.$set(o)},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function Bi(t){let e,n;return e=new gn({props:{f:!0,cardsData:[...t[5]]}}),{c(){Q(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,r){te(e,s,r),n=!0},p(s,r){const o={};r&32&&(o.cardsData=[...s[5]]),e.$set(o)},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function Mi(t){let e,n;return e=new gn({props:{f:!1,cardsData:[...t[4]]}}),{c(){Q(e.$$.fragment)},l(s){ee(e.$$.fragment,s)},m(s,r){te(e,s,r),n=!0},p(s,r){const o={};r&16&&(o.cardsData=[...s[4]]),e.$set(o)},i(s){n||(K(e.$$.fragment,s),n=!0)},o(s){G(e.$$.fragment,s),n=!1},d(s){ne(e,s)}}}function Ni(t){let e,n="Fellowships",s,r,o,i,a="Courses",l,f,h,u,b,d,v;return r=new Bt({props:{f:!0,onClick:t[16],cardsData:[...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4],...t[4]]}}),f=new Bt({props:{f:!1,onClick:t[17],cardsData:[...t[4]]}}),u=new ms({props:{blogs:t[7]}}),d=new _s({props:{data:t[6]}}),{c(){e=w("div"),e.textContent=n,s=L(),Q(r.$$.fragment),o=L(),i=w("div"),i.textContent=a,l=L(),Q(f.$$.fragment),h=L(),Q(u.$$.fragment),b=L(),Q(d.$$.fragment),this.h()},l(c){e=y(c,"DIV",{class:!0,"data-svelte-h":!0}),J(e)!=="svelte-9rjion"&&(e.textContent=n),s=R(c),ee(r.$$.fragment,c),o=R(c),i=y(c,"DIV",{class:!0,"data-svelte-h":!0}),J(i)!=="svelte-4wj5r"&&(i.textContent=a),l=R(c),ee(f.$$.fragment,c),h=R(c),ee(u.$$.fragment,c),b=R(c),ee(d.$$.fragment,c),this.h()},h(){m(e,"class","title"),m(i,"class","title")},m(c,p){N(c,e,p),N(c,s,p),te(r,c,p),N(c,o,p),N(c,i,p),N(c,l,p),te(f,c,p),N(c,h,p),te(u,c,p),N(c,b,p),te(d,c,p),v=!0},p(c,p){const T={};p&16&&(T.cardsData=[...c[4],...c[4],...c[4],...c[4],...c[4],...c[4],...c[4],...c[4]]),r.$set(T);const M={};p&16&&(M.cardsData=[...c[4]]),f.$set(M);const U={};p&128&&(U.blogs=c[7]),u.$set(U);const H={};p&64&&(H.data=c[6]),d.$set(H)},i(c){v||(K(r.$$.fragment,c),K(f.$$.fragment,c),K(u.$$.fragment,c),K(d.$$.fragment,c),v=!0)},o(c){G(r.$$.fragment,c),G(f.$$.fragment,c),G(u.$$.fragment,c),G(d.$$.fragment,c),v=!1},d(c){c&&(g(e),g(s),g(o),g(i),g(l),g(h),g(b)),ne(r,c),ne(f,c),ne(u,c),ne(d,c)}}}function Pi(t){let e,n,s,r,o,i,a="Courses",l,f,h="Fellowships",u,b,d="Contact us",v,c,p,T,M,U,H="About us",V,F,C,P,W,O,B,I,$,E,j,D,x=t[9]&&pn(t);n=new Ai({props:{enableTransparency:!0}});const Ee=[Ni,Mi,Bi,Oi,$i],Z=[];function re(k,z){return k[1]==0?0:k[1]==1?1:k[1]==2?2:k[1]==3?3:4}return O=re(t),B=Z[O]=Ee[O](t),$=new fs({props:{scrollBoxHeight:t[8]+160}}),{c(){x&&x.c(),e=L(),Q(n.$$.fragment),s=L(),r=w("div"),o=w("ul"),i=w("li"),i.textContent=a,l=L(),f=w("li"),f.textContent=h,u=L(),b=w("li"),b.textContent=d,c=L(),p=w("div"),T=w("div"),M=w("div"),U=w("p"),U.textContent=H,V=L(),F=w("p"),C=Re(t[0]),P=L(),W=w("div"),B.c(),I=L(),Q($.$$.fragment),this.h()},l(k){x&&x.l(k),e=R(k),ee(n.$$.fragment,k),s=R(k),r=y(k,"DIV",{class:!0,id:!0,style:!0});var z=S(r);o=y(z,"UL",{});var se=S(o);i=y(se,"LI",{"data-svelte-h":!0}),J(i)!=="svelte-15gd3eg"&&(i.textContent=a),l=R(se),f=y(se,"LI",{"data-svelte-h":!0}),J(f)!=="svelte-1w3oh8g"&&(f.textContent=h),u=R(se),b=y(se,"LI",{"data-svelte-h":!0}),J(b)!=="svelte-1pessln"&&(b.textContent=d),se.forEach(g),z.forEach(g),c=R(k),p=y(k,"DIV",{class:!0});var ke=S(p);T=y(ke,"DIV",{class:!0});var St=S(T);M=y(St,"DIV",{class:!0});var Me=S(M);U=y(Me,"P",{style:!0,"data-svelte-h":!0}),J(U)!=="svelte-1mkz37p"&&(U.textContent=H),V=R(Me),F=y(Me,"P",{style:!0});var Ct=S(F);C=Ve(Ct,t[0]),Ct.forEach(g),Me.forEach(g),St.forEach(g),ke.forEach(g),P=R(k),W=y(k,"DIV",{class:!0});var At=S(W);B.l(At),At.forEach(g),I=R(k),ee($.$$.fragment,k),this.h()},h(){m(r,"class","side-menu svelte-1eg9cy6"),m(r,"id","menuu"),m(r,"style",v=`display: ${t[10]?"block":"none"};`),A(U,"position","relative"),A(U,"right","70px"),A(F,"font-weight","300"),A(F,"text-align","left"),A(F,"font-size","20px"),m(M,"class","image-text svelte-1eg9cy6"),m(T,"class","image-overlay svelte-1eg9cy6"),m(p,"class","header-image svelte-1eg9cy6"),m(W,"class","scroll-box svelte-1eg9cy6")},m(k,z){x&&x.m(k,z),N(k,e,z),te(n,k,z),N(k,s,z),N(k,r,z),_(r,o),_(o,i),_(o,l),_(o,f),_(o,u),_(o,b),N(k,c,z),N(k,p,z),_(p,T),_(T,M),_(M,U),_(M,V),_(M,F),_(F,C),N(k,P,z),N(k,W,z),Z[O].m(W,null),N(k,I,z),te($,k,z),E=!0,j||(D=[Y(i,"click",t[13]),Y(f,"click",t[14]),Y(b,"click",t[15])],j=!0)},p(k,[z]){k[9]?x?(x.p(k,z),z&512&&K(x,1)):(x=pn(k),x.c(),K(x,1),x.m(e.parentNode,e)):x&&(De(),G(x,1,1,()=>{x=null}),Te()),(!E||z&1024&&v!==(v=`display: ${k[10]?"block":"none"};`))&&m(r,"style",v),(!E||z&1)&&He(C,k[0]);let se=O;O=re(k),O===se?Z[O].p(k,z):(De(),G(Z[se],1,1,()=>{Z[se]=null}),Te(),B=Z[O],B?B.p(k,z):(B=Z[O]=Ee[O](k),B.c()),K(B,1),B.m(W,null));const ke={};z&256&&(ke.scrollBoxHeight=k[8]+160),$.$set(ke)},i(k){E||(K(x),K(n.$$.fragment,k),K(B),K($.$$.fragment,k),E=!0)},o(k){G(x),G(n.$$.fragment,k),G(B),G($.$$.fragment,k),E=!1},d(k){k&&(g(e),g(s),g(r),g(c),g(p),g(P),g(W),g(I)),x&&x.d(k),ne(n,k),Z[O].d(),ne($,k),j=!1,je(D)}}}function Li(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ri=t=>t.stopPropagation();function Vi(t,e,n){let s="",r=0;async function o(I,$,E){const j=await fetch("https://dentists-backend.onrender.com/api/"+I,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify($)});if(!j.ok)throw ls("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${j.status}`);const D=await j.json();return E&&E(),D}let i=!1;async function a(){o("n/gp").then(I=>{I=I.d,n(6,v=I.map($=>Object({title:$.productName,text:"Price : "+$.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+$.productID+"/0",discount:$.discount})))})}async function l(){o("n/gc").then(I=>{I=I.d,n(4,b=I.map($=>Object({title:$.courseName,id:$.courseID,text:$.courseDetails,duration:$.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+$.courseID,clickHandler:()=>{const E=document.createElement("a");E.href="/courses/"+$.courseID,E.click(),$.courseID,n(2,i=!1)}}))),console.log(b)})}let f;async function h(){o("n/gf").then(I=>{I=I.d,n(5,d=I.map($=>Object({id:$.fellowshipID,title:$.fellowshipName,duration:$.fellowshipDuration,text:$.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+$.fellowshipID,clickHandler:()=>{$.fellowshipID,n(2,i=!0)}})))})}async function u(){o("n/gb").then(I=>{I=I.d,n(7,c=I.map($=>Object({id:$.blogID,text:$.blogDetails,title:$.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+$.blogID,clickHandler:()=>{}})))})}let b=[],d=[],v=[],c=[];function p(){const I=document.querySelector(".scroll-box");I&&n(8,T=Number(getComputedStyle(I).height.split("px")[0]))}let T=0;$e(()=>{document.body.addEventListener("click",function(D){console.log(D.target.id),console.log(H),D.target.id!="menuuu"&&D.target.id!="menuio"&&H&&n(10,H=!1)}),setInterval(()=>{p()},500),o("aus").then(D=>{n(0,s=D.d)}),window.addEventListener("resize",p),p();const $=Dn({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),E=Ei($);ki(E,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(D=>{console.log(D)}),Di(E,D=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(D)}),Promise.all([l(),h(),u(),a()]).then(()=>{addEventListener("ocd",D=>{console.log(D.detail),D.detail.f?(console.log(d),console.log(D.detail.id),n(3,f=d.filter(x=>x.id==D.detail.id)[0])):n(3,f=b.filter(x=>x.id==D.detail.id)[0])})});const j=()=>{};return window.addEventListener("scroll",j),document.body.style.overflow=M?"hidden":"auto",()=>{window.removeEventListener("scroll",j),window.removeEventListener("resize",p),document.body.style.overflow="auto"}}),ns(()=>{p()});let M=!1;function U(){n(9,M=!1)}Li().then(I=>{I||console.log("Developer tools are closed.")});let H=!1;return[s,r,i,f,b,d,v,c,T,M,H,U,()=>{n(1,r=4),U()},function(){console.log("CLICKED HERE");const I=document.createElement("a");I.href="/courses",I.click()},function(){console.log("clicked here");const I=document.createElement("a");I.href="/fellowships",I.click()},function(){const I=document.createElement("a");I.href="/contact-us",I.click()},function(){const I=document.createElement("a");I.href="/fellowships",I.click()},function(){const I=document.createElement("a");I.href="/courses",I.click()},function(){const I=document.createElement("a");I.href="/contact-us",I.click()}]}class Qi extends Oe{constructor(e){super(),Be(this,e,Vi,Pi,Ae,{})}}export{Qi as component};
