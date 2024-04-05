import{s as Se,e as E,h as L,b as k,k as O,f as p,j as R,d as X,m,o as T,i as B,p as I,q as Z,F as Yn,v as it,w as Ce,t as Me,l as Ne,n as _e,y as at,z as we,r as ct,x as ie,I as ve,M as Xn}from"../chunks/scheduler.DkkY9i-5.js";import{S as Ae,i as $e,t as j,g as Ee,e as ke,a as z,c as q,b as G,m as J,d as Y}from"../chunks/index.D9rRt9oS.js";/* empty css                                                     */import{C as Zn}from"../chunks/Card.BWdwHnzb.js";import{e as ne,u as Qn,d as er}from"../chunks/each.B4zj3C_D.js";import{B as tr}from"../chunks/Button.BV-MtdzY.js";import"../chunks/Map.pJQpoZ4a.js";import{G as un}from"../chunks/Grid.DwKmeoG4.js";import{L as fn}from"../chunks/Login.DYr9JOov.js";import{C as nr}from"../chunks/CourseData.DoA_hr1S.js";import{C as rr}from"../chunks/Contact.BsLWppQh.js";import{n as sr}from"../chunks/not.DNvn3Bfc.js";import{S as or}from"../chunks/TopBar.svelte_svelte_type_style_lang.BYym3Kme.js";import{F as ir}from"../chunks/Footer.C43TtymX.js";function Dt(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function Tt(t){let e,n;return e=new Zn({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function ar(t){let e,n,r,s,o,i='<div>Show all</div> <img src="/back-icon.png"/>',a,c,u,h=ne([...t[0]]),l=[];for(let f=0;f<h.length;f+=1)l[f]=Tt(Dt(t,h,f));const _=f=>z(l[f],1,1,()=>{l[f]=null});return{c(){e=E("div"),n=E("div");for(let f=0;f<l.length;f+=1)l[f].c();r=L(),s=E("div"),o=E("button"),o.innerHTML=i,this.h()},l(f){e=k(f,"DIV",{style:!0,class:!0});var d=O(e);n=k(d,"DIV",{class:!0,id:!0});var g=O(n);for(let y=0;y<l.length;y+=1)l[y].l(g);g.forEach(p),d.forEach(p),r=R(f),s=k(f,"DIV",{style:!0});var b=O(s);o=k(b,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),X(o)!=="svelte-2n4iru"&&(o.innerHTML=i),b.forEach(p),this.h()},h(){m(n,"class","row svelte-8t36q7"),m(n,"id","row-container"),T(e,"margin-bottom","0"),T(e,"height","406px"),m(e,"class","row svelte-8t36q7"),m(o,"class","button svelte-8t36q7"),T(o,"display","flex"),T(o,"align-items","center"),T(s,"display","grid"),T(s,"place-items","center"),T(s,"margin-bottom","90px"),T(s,"margin-top","20px")},m(f,d){B(f,e,d),I(e,n);for(let g=0;g<l.length;g+=1)l[g]&&l[g].m(n,null);B(f,r,d),B(f,s,d),I(s,o),a=!0,c||(u=Z(o,"click",function(){Yn(t[1])&&t[1].apply(this,arguments)}),c=!0)},p(f,[d]){if(t=f,d&5){h=ne([...t[0]]);let g;for(g=0;g<h.length;g+=1){const b=Dt(t,h,g);l[g]?(l[g].p(b,d),j(l[g],1)):(l[g]=Tt(b),l[g].c(),j(l[g],1),l[g].m(n,null))}for(Ee(),g=h.length;g<l.length;g+=1)_(g);ke()}},i(f){if(!a){for(let d=0;d<h.length;d+=1)j(l[d]);a=!0}},o(f){l=l.filter(Boolean);for(let d=0;d<l.length;d+=1)z(l[d]);a=!1},d(f){f&&(p(e),p(r),p(s)),it(l,f),c=!1,u()}}}function cr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,Ce(()=>{console.log("THIS IS THE SOURCE"),console.log(r),document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class St extends Ae{constructor(e){super(),$e(this,e,cr,ar,Se,{cardsData:0,onClick:1,f:2})}}function Ct(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function At(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function $t(t){let e,n;return{c(){e=E("img"),this.h()},l(r){e=k(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){ie(e.src,n=t[15].src)||m(e,"src",n),m(e,"alt","Neumorphic Picture"),m(e,"id","blog-image"),m(e,"class","rectangular-image svelte-14rovze")},m(r,s){B(r,e,s)},p(r,s){s&1&&!ie(e.src,n=r[15].src)&&m(e,"src",n)},d(r){r&&p(e)}}}function Ot(t){let e,n=t[14]==t[1]&&$t(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),B(r,e,s)},p(r,s){r[14]==r[1]?n?n.p(r,s):(n=$t(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&p(e),n&&n.d(r)}}}function Bt(t){let e,n,r=t[0][t[1]].title+"",s,o,i=t[0].length>0&&Mt(t);return{c(){e=E("div"),n=E("h2"),s=Me(r),o=L(),i&&i.c(),this.h()},l(a){e=k(a,"DIV",{class:!0});var c=O(e);n=k(c,"H2",{style:!0,class:!0});var u=O(n);s=Ne(u,r),u.forEach(p),o=R(c),i&&i.l(c),c.forEach(p),this.h()},h(){T(n,"margin","-2px 0 -10px 0"),m(n,"class","svelte-14rovze"),m(e,"class","captionCont svelte-14rovze")},m(a,c){B(a,e,c),I(e,n),I(n,s),I(e,o),i&&i.m(e,null)},p(a,c){c&3&&r!==(r=a[0][a[1]].title+"")&&ct(s,r),a[0].length>0?i?i.p(a,c):(i=Mt(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&p(e),i&&i.d()}}}function Mt(t){let e,n=t[0][t[1]].text+"",r;return{c(){e=E("p"),r=Me(n),this.h()},l(s){e=k(s,"P",{class:!0});var o=O(e);r=Ne(o,n),o.forEach(p),this.h()},h(){m(e,"class","svelte-14rovze")},m(s,o){B(s,e,o),I(e,r)},p(s,o){o&3&&n!==(n=s[0][s[1]].text+"")&&ct(r,n)},d(s){s&&p(e)}}}function Nt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=E("div"),this.h()},l(a){n=k(a,"DIV",{style:!0,class:!0}),O(n).forEach(p),this.h()},h(){T(n,"margin-top","10px"),T(n,"margin-bottom","10px"),m(n,"class",r="dot "+(e[14]===e[1]?"light-dot":"dark-dot")+" svelte-14rovze"),this.first=n},m(a,c){B(a,n,c),s||(o=Z(n,"click",i),s=!0)},p(a,c){e=a,c&2&&r!==(r="dot "+(e[14]===e[1]?"light-dot":"dark-dot")+" svelte-14rovze")&&m(n,"class",r)},d(a){a&&p(n),s=!1,o()}}}function lr(t){let e,n,r,s='<img src="/open.png" style="right: 10%;width: 33px; width: 33px;" class="svelte-14rovze"/>',o,i,a,c=" , ",u,h,l,_,f,d,g="<",b,y,v=">",S,H,D,A=[],w=new Map,M,C,$=ne(t[0]),N=[];for(let P=0;P<$.length;P+=1)N[P]=Ot(At(t,$,P));let V=t[0].length>0&&Bt(t),U=ne([0,1,2]);const Q=P=>P[14];for(let P=0;P<3;P+=1){let W=Ct(t,U,P),F=Q(W);w.set(F,A[P]=Nt(F,W))}return{c(){e=E("div"),n=E("div"),r=E("button"),r.innerHTML=s,o=L(),i=E("div"),a=E("div"),u=Me(c),h=L(),l=E("div"),_=E("div");for(let P=0;P<N.length;P+=1)N[P].c();f=L(),d=E("div"),d.textContent=g,b=L(),y=E("div"),y.textContent=v,S=L(),V&&V.c(),H=L(),D=E("div");for(let P=0;P<3;P+=1)A[P].c();this.h()},l(P){e=k(P,"DIV",{class:!0});var W=O(e);n=k(W,"DIV",{class:!0});var F=O(n);r=k(F,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),X(r)!=="svelte-d8n0jw"&&(r.innerHTML=s),F.forEach(p),o=R(W),i=k(W,"DIV",{style:!0,class:!0});var Ie=O(i);a=k(Ie,"DIV",{class:!0,style:!0});var Et=O(a);u=Ne(Et,c),Et.forEach(p),Ie.forEach(p),h=R(W),l=k(W,"DIV",{class:!0});var me=O(l);_=k(me,"DIV",{class:!0});var be=O(_);for(let ce=0;ce<N.length;ce+=1)N[ce].l(be);f=R(be),d=k(be,"DIV",{class:!0,"data-svelte-h":!0}),X(d)!=="svelte-nl1vs9"&&(d.textContent=g),b=R(be),y=k(be,"DIV",{class:!0,"data-svelte-h":!0}),X(y)!=="svelte-dra8cl"&&(y.textContent=v),be.forEach(p),S=R(me),V&&V.l(me),H=R(me),D=k(me,"DIV",{class:!0});var kt=O(D);for(let ce=0;ce<3;ce+=1)A[ce].l(kt);kt.forEach(p),me.forEach(p),W.forEach(p),this.h()},h(){T(r,"padding","4px 4px 0px 4px"),T(r,"float","inline-end"),T(r,"right","10%"),T(r,"bottom","7px"),m(r,"class","svelte-14rovze"),m(n,"class","icon svelte-14rovze"),m(a,"class","#2e3b6f-title svelte-14rovze"),T(a,"color","transparent"),T(i,"display","flex"),T(i,"justify-content","space-between"),T(i,"align-items","center"),T(i,"padding","10px"),m(i,"class","svelte-14rovze"),m(d,"class","nextImageBtn svelte-14rovze"),m(y,"class","previousImageBtn svelte-14rovze"),m(_,"class","imageCont svelte-14rovze"),m(D,"class","dots-container svelte-14rovze"),m(l,"class","postCard svelte-14rovze"),m(e,"class","svelte-14rovze")},m(P,W){B(P,e,W),I(e,n),I(n,r),I(e,o),I(e,i),I(i,a),I(a,u),I(e,h),I(e,l),I(l,_);for(let F=0;F<N.length;F+=1)N[F]&&N[F].m(_,null);I(_,f),I(_,d),I(_,b),I(_,y),I(l,S),V&&V.m(l,null),I(l,H),I(l,D);for(let F=0;F<3;F+=1)A[F]&&A[F].m(D,null);M||(C=[Z(r,"click",t[5]),Z(d,"click",t[6]),Z(y,"click",t[7])],M=!0)},p(P,[W]){if(W&3){$=ne(P[0]);let F;for(F=0;F<$.length;F+=1){const Ie=At(P,$,F);N[F]?N[F].p(Ie,W):(N[F]=Ot(Ie),N[F].c(),N[F].m(_,f))}for(;F<N.length;F+=1)N[F].d(1);N.length=$.length}P[0].length>0?V?V.p(P,W):(V=Bt(P),V.c(),V.m(l,H)):V&&(V.d(1),V=null),W&6&&(U=ne([0,1,2]),A=Qn(A,W,Q,1,P,U,w,D,er,Nt,null,Ct))},i:_e,o:_e,d(P){P&&p(e),it(N,P),V&&V.d();for(let W=0;W<3;W+=1)A[W].d();M=!1,at(C)}}}function ur(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(_){console.log(_),n(1,i=_)}Ce(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function f(){console.log("wack wack"),!(o.length<1)&&n(1,i=(i+1)%o.length)}f(),setInterval(f,7e3)});const c=()=>{location.href="/blogs"},u=()=>{console.log(i),n(1,i=o.indexOf(o.at(i-1))),console.log(i)},h=()=>{n(1,i=(i+1)%o.length)},l=_=>a(_);return t.$$set=_=>{"firstTitle"in _&&n(3,r=_.firstTitle),"secondTitle"in _&&n(4,s=_.secondTitle),"blogs"in _&&n(0,o=_.blogs)},[o,i,a,r,s,c,u,h,l]}class fr extends Ae{constructor(e){super(),$e(this,e,ur,lr,Se,{firstTitle:3,secondTitle:4,blogs:0})}}function Pt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Lt(t){let e,n,r,s;return{c(){e=E("div"),n=E("div"),r=E("img"),this.h()},l(o){e=k(o,"DIV",{class:!0});var i=O(e);n=k(i,"DIV",{class:!0,style:!0});var a=O(n);r=k(a,"IMG",{src:!0,style:!0,class:!0}),a.forEach(p),i.forEach(p),this.h()},h(){ie(r.src,s=t[0][t[1]%t[0].length].src)||m(r,"src",s),T(r,"border-radius","10px"),m(r,"class","svelte-1pblhl6"),m(n,"class","postCard svelte-1pblhl6"),T(n,"width","270px"),T(n,"height","270px"),T(n,"border-radius","10px"),T(n,"background-color","#e6e7ee"),T(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),T(n,"margin-bottom","50px"),m(e,"class","image-card svelte-1pblhl6")},m(o,i){B(o,e,i),I(e,n),I(n,r)},p(o,i){i&3&&!ie(r.src,s=o[0][o[1]%o[0].length].src)&&m(r,"src",s)},d(o){o&&p(e)}}}function Rt(t){let e,n=ne(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=Vt(Pt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=we()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=we()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);B(s,e,o)},p(s,o){if(o&1){n=ne(s[0]);let i;for(i=0;i<n.length;i+=1){const a=Pt(s,n,i);r[i]?r[i].p(a,o):(r[i]=Vt(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&p(e),it(r,s)}}}function Ht(t){let e,n,r,s;return{c(){e=E("div"),n=E("img"),s=L(),this.h()},l(o){e=k(o,"DIV",{class:!0,style:!0});var i=O(e);n=k(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(p),s=R(o),this.h()},h(){ie(n.src,r=t[0][(t[5]+1)%t[0].length].src)||m(n,"src",r),T(n,"border-radius","10px"),m(n,"class","svelte-1pblhl6"),m(e,"class","postCard svelte-1pblhl6"),m(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){B(o,e,i),I(e,n),B(o,s,i)},p(o,i){i&1&&!ie(n.src,r=o[0][(o[5]+1)%o[0].length].src)&&m(n,"src",r)},d(o){o&&(p(e),p(s))}}}function Vt(t){let e,n=t[5]+1!=t[0].length&&Ht(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),B(r,e,s)},p(r,s){r[5]+1!=r[0].length?n?n.p(r,s):(n=Ht(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&p(e),n&&n.d(r)}}}function dr(t){let e,n,r="Products",s,o,i,a,c,u='<div class="black-title svelte-1pblhl6">Title</div> <div class="small-note svelte-1pblhl6">A small note goes here.</div> <div class="big-text svelte-1pblhl6">Big bold black text.</div>',h,l,_,f,d,g,b,y,v,S="",H,D=t[0].length>=1&&Lt(t),A=t[0].length>1&&Rt(t);return b=new tr({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=E("div"),n=E("div"),n.textContent=r,s=L(),o=E("div"),i=E("div"),D&&D.c(),a=L(),c=E("div"),c.innerHTML=u,h=L(),l=E("div"),_=E("div"),f=E("div"),A&&A.c(),d=L(),g=E("div"),q(b.$$.fragment),y=L(),v=E("div"),v.innerHTML=S,this.h()},l(w){e=k(w,"DIV",{style:!0});var M=O(e);n=k(M,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(n)!=="svelte-gh7rxu"&&(n.textContent=r),s=R(M),o=k(M,"DIV",{class:!0,style:!0});var C=O(o);i=k(C,"DIV",{class:!0});var $=O(i);D&&D.l($),a=R($),c=k($,"DIV",{class:!0,"data-svelte-h":!0}),X(c)!=="svelte-1sx5tfn"&&(c.innerHTML=u),$.forEach(p),h=R(C),l=k(C,"DIV",{style:!0});var N=O(l);_=k(N,"DIV",{style:!0});var V=O(_);f=k(V,"DIV",{class:!0});var U=O(f);A&&A.l(U),U.forEach(p),V.forEach(p),d=R(N),g=k(N,"DIV",{style:!0});var Q=O(g);G(b.$$.fragment,Q),Q.forEach(p),N.forEach(p),y=R(C),v=k(C,"DIV",{class:!0,"data-svelte-h":!0}),X(v)!=="svelte-cpoj1k"&&(v.innerHTML=S),C.forEach(p),M.forEach(p),this.h()},h(){m(n,"class","#2e3b6f-title"),T(n,"font-size","30px"),T(n,"margin","auto"),T(n,"text-align","center"),T(n,"position","relative"),T(n,"color","#2e3b6f"),T(n,"font-weight","bolder"),T(n,"margin-bottom","20px"),m(c,"class","text-container svelte-1pblhl6"),m(i,"class","first-row svelte-1pblhl6"),m(f,"class","row-images svelte-1pblhl6"),T(_,"overflow-x","scroll"),m(g,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),T(l,"display","flex"),m(v,"class","show-call-button svelte-1pblhl6"),m(o,"class","neumorphic-card svelte-1pblhl6"),T(o,"height","560px"),T(e,"margin-top","90px")},m(w,M){B(w,e,M),I(e,n),I(e,s),I(e,o),I(o,i),D&&D.m(i,null),I(i,a),I(i,c),I(o,h),I(o,l),I(l,_),I(_,f),A&&A.m(f,null),I(l,d),I(l,g),J(b,g,null),I(o,y),I(o,v),H=!0},p(w,[M]){w[0].length>=1?D?D.p(w,M):(D=Lt(w),D.c(),D.m(i,a)):D&&(D.d(1),D=null),w[0].length>1?A?A.p(w,M):(A=Rt(w),A.c(),A.m(f,null)):A&&(A.d(1),A=null)},i(w){H||(j(b.$$.fragment,w),H=!0)},o(w){z(b.$$.fragment,w),H=!1},d(w){w&&p(e),D&&D.d(),A&&A.d(),Y(b)}}}function hr(t,e,n){let{data:r=[]}=e,s=0;setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),Ce(()=>{console.log(r)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,r=i.data)},[r,s,o]}class pr extends Ae{constructor(e){super(),$e(this,e,hr,dr,Se,{data:0})}}var jt={};/**
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
 */const dn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,c=s+2<t.length,u=c?t[s+2]:0,h=o>>2,l=(o&3)<<4|a>>4;let _=(a&15)<<2|u>>6,f=u&63;c||(f=64,i||(_=64)),r.push(n[h],n[l],n[_],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const l=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||u==null||l==null)throw new mr;const _=o<<2|a>>4;if(r.push(_),u!==64){const f=a<<4&240|u>>2;if(r.push(f),l!==64){const d=u<<6&192|l;r.push(d)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const br=function(t){const e=dn(t);return hn.encodeByteArray(e,!0)},pn=function(t){return br(t).replace(/\./g,"")},vr=function(t){try{return hn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function _r(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const wr=()=>_r().__FIREBASE_DEFAULTS__,yr=()=>{if(typeof process>"u"||typeof jt>"u")return;const t=jt.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Ir=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vr(t[1]);return e&&JSON.parse(e)},Er=()=>{try{return wr()||yr()||Ir()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gn=()=>{var t;return(t=Er())===null||t===void 0?void 0:t.config};/**
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
 */class kr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function mn(){try{return typeof indexedDB=="object"}catch{return!1}}function bn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function Dr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tr="FirebaseError";class ye extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tr,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}}class Pe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Sr(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new ye(s,a,r)}}function Sr(t,e){return t.replace(Cr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cr=/\{\$([^}]+)}/g;function Xe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(Ft(o)&&Ft(i)){if(!Xe(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ft(t){return t!==null&&typeof t=="object"}/**
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
 */function lt(t){return t&&t._delegate?t._delegate:t}class ae{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Or(e))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=le){return this.instances.has(e)}getOptions(e=le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$r(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=le){return this.component?this.component.multipleInstances?e:le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(t){return t===le?void 0:t}function Or(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var x;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(x||(x={}));const Mr={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},Nr=x.INFO,Pr={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},Lr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rr{constructor(e){this.name=e,this._logLevel=Nr,this._logHandler=Lr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Hr=(t,e)=>e.some(n=>t instanceof n);let xt,zt;function Vr(){return xt||(xt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jr(){return zt||(zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vn=new WeakMap,Ze=new WeakMap,_n=new WeakMap,He=new WeakMap,ut=new WeakMap;function Fr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(te(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&vn.set(n,t)}).catch(()=>{}),ut.set(e,t),e}function xr(t){if(Ze.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Ze.set(t,e)}let Qe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ze.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_n.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zr(t){Qe=t(Qe)}function Ur(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ve(this),e,...n);return _n.set(r,e.sort?e.sort():[e]),te(r)}:jr().includes(t)?function(...e){return t.apply(Ve(this),e),te(vn.get(this))}:function(...e){return te(t.apply(Ve(this),e))}}function Wr(t){return typeof t=="function"?Ur(t):(t instanceof IDBTransaction&&xr(t),Hr(t,Vr())?new Proxy(t,Qe):t)}function te(t){if(t instanceof IDBRequest)return Fr(t);if(He.has(t))return He.get(t);const e=Wr(t);return e!==t&&(He.set(t,e),ut.set(e,t)),e}const Ve=t=>ut.get(t);function ft(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=te(i);return r&&i.addEventListener("upgradeneeded",c=>{r(te(i.result),c.oldVersion,c.newVersion,te(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function je(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),te(n).then(()=>{})}const Kr=["get","getKey","getAll","getAllKeys","count"],qr=["put","add","delete","clear"],Fe=new Map;function Ut(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fe.get(e))return Fe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=qr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Kr.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return Fe.set(e,o),o}zr(t=>({...t,get:(e,n,r)=>Ut(e,n)||t.get(e,n,r),has:(e,n)=>!!Ut(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const et="@firebase/app",Wt="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Rr("@firebase/app"),Yr="@firebase/app-compat",Xr="@firebase/analytics-compat",Zr="@firebase/analytics",Qr="@firebase/app-check-compat",es="@firebase/app-check",ts="@firebase/auth",ns="@firebase/auth-compat",rs="@firebase/database",ss="@firebase/database-compat",os="@firebase/functions",is="@firebase/functions-compat",as="@firebase/installations",cs="@firebase/installations-compat",ls="@firebase/messaging",us="@firebase/messaging-compat",fs="@firebase/performance",ds="@firebase/performance-compat",hs="@firebase/remote-config",ps="@firebase/remote-config-compat",gs="@firebase/storage",ms="@firebase/storage-compat",bs="@firebase/firestore",vs="@firebase/firestore-compat",_s="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tt="[DEFAULT]",ws={[et]:"fire-core",[Yr]:"fire-core-compat",[Zr]:"fire-analytics",[Xr]:"fire-analytics-compat",[es]:"fire-app-check",[Qr]:"fire-app-check-compat",[ts]:"fire-auth",[ns]:"fire-auth-compat",[rs]:"fire-rtdb",[ss]:"fire-rtdb-compat",[os]:"fire-fn",[is]:"fire-fn-compat",[as]:"fire-iid",[cs]:"fire-iid-compat",[ls]:"fire-fcm",[us]:"fire-fcm-compat",[fs]:"fire-perf",[ds]:"fire-perf-compat",[hs]:"fire-rc",[ps]:"fire-rc-compat",[gs]:"fire-gcs",[ms]:"fire-gcs-compat",[bs]:"fire-fst",[vs]:"fire-fst-compat","fire-js":"fire-js",[_s]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=new Map,nt=new Map;function ys(t,e){try{t.container.addComponent(e)}catch(n){fe.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function de(t){const e=t.name;if(nt.has(e))return fe.debug(`There were multiple attempts to register component ${e}.`),!1;nt.set(e,t);for(const n of Oe.values())ys(n,t);return!0}function dt(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},re=new Pe("app","Firebase",Is);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Es{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}function wn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw re.create("bad-app-name",{appName:String(s)});if(n||(n=gn()),!n)throw re.create("no-options");const o=Oe.get(s);if(o){if(Xe(n,o.options)&&Xe(r,o.config))return o;throw re.create("duplicate-app",{appName:s})}const i=new Br(s);for(const c of nt.values())i.addComponent(c);const a=new Es(n,r,i);return Oe.set(s,a),a}function ks(t=tt){const e=Oe.get(t);if(!e&&t===tt&&gn())return wn();if(!e)throw re.create("no-app",{appName:t});return e}function se(t,e,n){var r;let s=(r=ws[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(a.join(" "));return}de(new ae(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Ds="firebase-heartbeat-database",Ts=1,De="firebase-heartbeat-store";let xe=null;function yn(){return xe||(xe=ft(Ds,Ts,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(De)}}}).catch(t=>{throw re.create("idb-open",{originalErrorMessage:t.message})})),xe}async function Ss(t){try{return await(await yn()).transaction(De).objectStore(De).get(In(t))}catch(e){if(e instanceof ye)fe.warn(e.message);else{const n=re.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function Kt(t,e){try{const r=(await yn()).transaction(De,"readwrite");await r.objectStore(De).put(e,In(t)),await r.done}catch(n){if(n instanceof ye)fe.warn(n.message);else{const r=re.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function In(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Cs=1024,As=30*24*60*60*1e3;class $s{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=qt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=As}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qt(),{heartbeatsToSend:r,unsentEntries:s}=Os(this._heartbeatsCache.heartbeats),o=pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function qt(){return new Date().toISOString().substring(0,10)}function Os(t,e=Cs){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Gt(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mn()?bn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ss(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gt(t){return pn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){de(new ae("platform-logger",e=>new Gr(e),"PRIVATE")),de(new ae("heartbeat",e=>new $s(e),"PRIVATE")),se(et,Wt,t),se(et,Wt,"esm2017"),se("fire-js","")}Ms("");var Ns="firebase",Ps="10.7.1";/**
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
 */se(Ns,Ps,"app");const Ls=(t,e)=>e.some(n=>t instanceof n);let Jt,Yt;function Rs(){return Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hs(){return Yt||(Yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const En=new WeakMap,rt=new WeakMap,kn=new WeakMap,ze=new WeakMap,ht=new WeakMap;function Vs(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(oe(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&En.set(n,t)}).catch(()=>{}),ht.set(e,t),e}function js(t){if(rt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});rt.set(t,e)}let st={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Fs(t){st=t(st)}function xs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ue(this),e,...n);return kn.set(r,e.sort?e.sort():[e]),oe(r)}:Hs().includes(t)?function(...e){return t.apply(Ue(this),e),oe(En.get(this))}:function(...e){return oe(t.apply(Ue(this),e))}}function zs(t){return typeof t=="function"?xs(t):(t instanceof IDBTransaction&&js(t),Ls(t,Rs())?new Proxy(t,st):t)}function oe(t){if(t instanceof IDBRequest)return Vs(t);if(ze.has(t))return ze.get(t);const e=zs(t);return e!==t&&(ze.set(t,e),ht.set(e,t)),e}const Ue=t=>ht.get(t);function Us(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=oe(i);return r&&i.addEventListener("upgradeneeded",c=>{r(oe(i.result),c.oldVersion,c.newVersion,oe(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Ws=["get","getKey","getAll","getAllKeys","count"],Ks=["put","add","delete","clear"],We=new Map;function Xt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(We.get(e))return We.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ks.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ws.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),s&&c.done]))[0]};return We.set(e,o),o}Fs(t=>({...t,get:(e,n,r)=>Xt(e,n)||t.get(e,n,r),has:(e,n)=>!!Xt(e,n)||t.has(e,n)}));const Dn="@firebase/installations",pt="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=1e4,Sn=`w:${pt}`,Cn="FIS_v2",qs="https://firebaseinstallations.googleapis.com/v1",Gs=60*60*1e3,Js="installations",Ys="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},he=new Pe(Js,Ys,Xs);function An(t){return t instanceof ye&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n({projectId:t}){return`${qs}/projects/${t}/installations`}function On(t){return{token:t.token,requestStatus:2,expiresIn:Qs(t.expiresIn),creationTime:Date.now()}}async function Bn(t,e){const r=(await e.json()).error;return he.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zs(t,{refreshToken:e}){const n=Mn(t);return n.append("Authorization",eo(e)),n}async function Nn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qs(t){return Number(t.replace("s","000"))}function eo(t){return`${Cn} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$n(t),s=Mn(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={fid:n,authVersion:Cn,appId:t.appId,sdkVersion:Sn},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Nn(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:On(u.authToken)}}else throw await Bn("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Ln=new Map;function Rn(t,e){const n=Le(t);Hn(n,e),io(n,e)}function Hn(t,e){const n=Ln.get(t);if(n)for(const r of n)r(e)}function io(t,e){const n=ao();n&&n.postMessage({key:t,fid:e}),co()}let ue=null;function ao(){return!ue&&"BroadcastChannel"in self&&(ue=new BroadcastChannel("[Firebase] FID Change"),ue.onmessage=t=>{Hn(t.data.key,t.data.fid)}),ue}function co(){Ln.size===0&&ue&&(ue.close(),ue=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="firebase-installations-database",uo=1,pe="firebase-installations-store";let Ke=null;function gt(){return Ke||(Ke=Us(lo,uo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pe)}}})),Ke}async function Be(t,e){const n=Le(t),s=(await gt()).transaction(pe,"readwrite"),o=s.objectStore(pe),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Rn(t,e.fid),e}async function Vn(t){const e=Le(t),r=(await gt()).transaction(pe,"readwrite");await r.objectStore(pe).delete(e),await r.done}async function Re(t,e){const n=Le(t),s=(await gt()).transaction(pe,"readwrite"),o=s.objectStore(pe),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Rn(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){let e;const n=await Re(t.appConfig,r=>{const s=fo(r),o=ho(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ot?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fo(t){const e=t||{fid:so(),registrationStatus:0};return jn(e)}function ho(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(he.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=po(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:go(t)}:{installationEntry:e}}async function po(t,e){try{const n=await to(t,e);return Be(t.appConfig,n)}catch(n){throw An(n)&&n.customData.serverCode===409?await Vn(t.appConfig):await Be(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function go(t){let e=await Zt(t.appConfig);for(;e.registrationStatus===1;)await Pn(100),e=await Zt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mt(t);return r||n}return e}function Zt(t){return Re(t,e=>{if(!e)throw he.create("installation-not-found");return jn(e)})}function jn(t){return mo(t)?{fid:t.fid,registrationStatus:0}:t}function mo(t){return t.registrationStatus===1&&t.registrationTime+Tn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo({appConfig:t,heartbeatServiceProvider:e},n){const r=vo(t,n),s=Zs(t,n),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&s.append("x-firebase-client",u)}const i={installation:{sdkVersion:Sn,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await Nn(()=>fetch(r,a));if(c.ok){const u=await c.json();return On(u)}else throw await Bn("Generate Auth Token",c)}function vo(t,{fid:e}){return`${$n(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(t,e=!1){let n;const r=await Re(t.appConfig,o=>{if(!Fn(o))throw he.create("not-registered");const i=o.authToken;if(!e&&yo(i))return o;if(i.requestStatus===1)return n=_o(t,e),o;{if(!navigator.onLine)throw he.create("app-offline");const a=Eo(o);return n=wo(t,a),a}});return n?await n:r.authToken}async function _o(t,e){let n=await Qt(t.appConfig);for(;n.authToken.requestStatus===1;)await Pn(100),n=await Qt(t.appConfig);const r=n.authToken;return r.requestStatus===0?bt(t,e):r}function Qt(t){return Re(t,e=>{if(!Fn(e))throw he.create("not-registered");const n=e.authToken;return ko(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wo(t,e){try{const n=await bo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Be(t.appConfig,r),n}catch(n){if(An(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Be(t.appConfig,r)}throw n}}function Fn(t){return t!==void 0&&t.registrationStatus===2}function yo(t){return t.requestStatus===2&&!Io(t)}function Io(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gs}function Eo(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function ko(t){return t.requestStatus===1&&t.requestTime+Tn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(t){const e=t,{installationEntry:n,registrationPromise:r}=await mt(e);return r?r.catch(console.error):bt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function To(t,e=!1){const n=t;return await So(n),(await bt(n,e)).token}async function So(t){const{registrationPromise:e}=await mt(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(t){if(!t||!t.options)throw qe("App Configuration");if(!t.name)throw qe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw qe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function qe(t){return he.create("missing-app-config-values",{valueName:t})}/**
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
 */const xn="installations",Ao="installations-internal",$o=t=>{const e=t.getProvider("app").getImmediate(),n=Co(e),r=dt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oo=t=>{const e=t.getProvider("app").getImmediate(),n=dt(e,xn).getImmediate();return{getId:()=>Do(n),getToken:s=>To(n,s)}};function Bo(){de(new ae(xn,$o,"PUBLIC")),de(new ae(Ao,Oo,"PRIVATE"))}Bo();se(Dn,pt);se(Dn,pt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="/firebase-messaging-sw.js",No="/firebase-cloud-messaging-push-scope",zn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Po="https://fcmregistrations.googleapis.com/v1",Un="google.c.a.c_id",Lo="google.c.a.c_l",Ro="google.c.a.ts",Ho="google.c.a.e";var en;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(en||(en={}));/**
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
 */function ee(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Vo(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="fcm_token_details_db",jo=5,tn="fcm_token_object_Store";async function Fo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ge))return null;let e=null;return(await ft(Ge,jo,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(tn))return;const c=i.objectStore(tn),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(s===2){const h=u;if(!h.auth||!h.p256dh||!h.endpoint)return;e={token:h.fcmToken,createTime:(a=h.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:h.auth,p256dh:h.p256dh,endpoint:h.endpoint,swScope:h.swScope,vapidKey:typeof h.vapidKey=="string"?h.vapidKey:ee(h.vapidKey)}}}else if(s===3){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ee(h.auth),p256dh:ee(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ee(h.vapidKey)}}}else if(s===4){const h=u;e={token:h.fcmToken,createTime:h.createTime,subscriptionOptions:{auth:ee(h.auth),p256dh:ee(h.p256dh),endpoint:h.endpoint,swScope:h.swScope,vapidKey:ee(h.vapidKey)}}}}}})).close(),await je(Ge),await je("fcm_vapid_details_db"),await je("undefined"),xo(e)?e:null}function xo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="firebase-messaging-database",Uo=1,ge="firebase-messaging-store";let Je=null;function vt(){return Je||(Je=ft(zo,Uo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ge)}}})),Je}async function Wn(t){const e=wt(t),r=await(await vt()).transaction(ge).objectStore(ge).get(e);if(r)return r;{const s=await Fo(t.appConfig.senderId);if(s)return await _t(t,s),s}}async function _t(t,e){const n=wt(t),s=(await vt()).transaction(ge,"readwrite");return await s.objectStore(ge).put(e,n),await s.done,e}async function Wo(t){const e=wt(t),r=(await vt()).transaction(ge,"readwrite");await r.objectStore(ge).delete(e),await r.done}function wt({appConfig:t}){return t.appId}/**
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
 */const Ko={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},K=new Pe("messaging","Messaging",Ko);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qo(t,e){const n=await It(t),r=qn(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(yt(t.appConfig),s)).json()}catch(i){throw K.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw K.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw K.create("token-subscribe-no-token");return o.token}async function Go(t,e){const n=await It(t),r=qn(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${yt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw K.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw K.create("token-update-failed",{errorInfo:i})}if(!o.token)throw K.create("token-update-no-token");return o.token}async function Kn(t,e){const r={method:"DELETE",headers:await It(t)};try{const o=await(await fetch(`${yt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw K.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw K.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function yt({projectId:t}){return`${Po}/projects/${t}/registrations`}async function It({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function qn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==zn&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=7*24*60*60*1e3;async function Yo(t){const e=await Qo(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ee(e.getKey("auth")),p256dh:ee(e.getKey("p256dh"))},r=await Wn(t.firebaseDependencies);if(r){if(ei(r.subscriptionOptions,n))return Date.now()>=r.createTime+Jo?Zo(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Kn(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return nn(t.firebaseDependencies,n)}else return nn(t.firebaseDependencies,n)}async function Xo(t){const e=await Wn(t.firebaseDependencies);e&&(await Kn(t.firebaseDependencies,e.token),await Wo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Zo(t,e){try{const n=await Go(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await _t(t.firebaseDependencies,r),n}catch(n){throw await Xo(t),n}}async function nn(t,e){const r={token:await qo(t,e),createTime:Date.now(),subscriptionOptions:e};return await _t(t,r),r.token}async function Qo(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Vo(e)})}function ei(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function rn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ti(e,t),ni(e,t),ri(e,t),e}function ti(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ni(t,e){e.data&&(t.data=e.data)}function ri(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const c=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){return typeof t=="object"&&!!t&&Un in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Gn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Gn(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){if(!t||!t.options)throw Ye("App Configuration Object");if(!t.name)throw Ye("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ye(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ye(t){return K.create("missing-app-config-values",{valueName:t})}/**
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
 */async function ai(t){try{t.swRegistration=await navigator.serviceWorker.register(Mo,{scope:No}),t.swRegistration.update().catch(()=>{})}catch(e){throw K.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function ci(t,e){if(!e&&!t.swRegistration&&await ai(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw K.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function li(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=zn)}/**
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
 */async function Jn(t,e){if(!navigator)throw K.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw K.create("permission-blocked");return await li(t,e==null?void 0:e.vapidKey),await ci(t,e==null?void 0:e.serviceWorkerRegistration),Yo(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n){const r=fi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Un],message_name:n[Lo],message_time:n[Ro],message_device_time:Math.floor(Date.now()/1e3)})}function fi(t){switch(t){case Te.NOTIFICATION_CLICKED:return"notification_open";case Te.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function di(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Te.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(rn(n)):t.onMessageHandler.next(rn(n)));const r=n.data;si(r)&&r[Ho]==="1"&&await ui(t,n.messageType,r)}const sn="@firebase/messaging",on="0.12.5";/**
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
 */const hi=t=>{const e=new ii(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>di(e,n)),e},pi=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>Jn(e,r)}};function gi(){de(new ae("messaging",hi,"PUBLIC")),de(new ae("messaging-internal",pi,"PRIVATE")),se(sn,on),se(sn,on,"esm2017")}/**
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
 */async function mi(){try{await bn()}catch{return!1}return typeof window<"u"&&mn()&&Dr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bi(t,e){if(!navigator)throw K.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function vi(t=ks()){return mi().then(e=>{if(!e)throw K.create("unsupported-browser")},e=>{throw K.create("indexed-db-unsupported")}),dt(lt(t),"messaging").getImmediate()}async function _i(t,e){return t=lt(t),Jn(t,e)}function wi(t,e){return t=lt(t),bi(t,e)}gi();function an(t){let e,n,r,s,o,i,a,c,u,h;return a=new fn({props:{func:t[10]}}),{c(){e=E("div"),n=E("div"),r=E("img"),o=L(),i=E("div"),q(a.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0});var _=O(e);n=k(_,"DIV",{class:!0});var f=O(n);r=k(f,"IMG",{src:!0,width:!0,style:!0}),o=R(f),i=k(f,"DIV",{class:!0});var d=O(i);G(a.$$.fragment,d),d.forEach(p),f.forEach(p),_.forEach(p),this.h()},h(){ie(r.src,s="/cancel.png")||m(r,"src",s),m(r,"width","40"),T(r,"float","right"),m(i,"class","content"),m(n,"class","dialog-box svelte-unpsak"),m(e,"class","overlay svelte-unpsak")},m(l,_){B(l,e,_),I(e,n),I(n,r),I(n,o),I(n,i),J(a,i,null),c=!0,u||(h=[Z(r,"click",t[8]),Z(n,"click",ki),Z(e,"click",t[8])],u=!0)},p:_e,i(l){c||(j(a.$$.fragment,l),c=!0)},o(l){z(a.$$.fragment,l),c=!1},d(l){l&&p(e),Y(a),u=!1,at(h)}}}function cn(t){let e,n,r='<li class="svelte-unpsak"><a href="/" class="svelte-unpsak">Home</a></li> <li class="svelte-unpsak"><a href="/courses" class="svelte-unpsak">courses</a></li> <li class="svelte-unpsak"><a href="/fellowships" class="svelte-unpsak">fellowships</a></li> <li class="svelte-unpsak"><a href="/blogs" class="svelte-unpsak">Blog</a></li> <li class="svelte-unpsak"><a href="/products" class="svelte-unpsak">products</a></li> <li class="svelte-unpsak"><a href="/contact-us" class="svelte-unpsak">Contact us</a></li>',s,o,i,a,c,u,h,l,_,f,d,g,b,y;function v(D,A){return D[5]?Ii:yi}let S=v(t),H=S(t);return a=new or({}),{c(){e=E("nav"),n=E("ul"),n.innerHTML=r,s=L(),H.c(),o=L(),i=E("div"),q(a.$$.fragment),c=L(),u=E("div"),h=E("div"),l=E("button"),this.h()},l(D){e=k(D,"NAV",{id:!0,style:!0,class:!0});var A=O(e);n=k(A,"UL",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-1iz39pt"&&(n.innerHTML=r),s=R(A),H.l(A),o=R(A),i=k(A,"DIV",{class:!0});var w=O(i);G(a.$$.fragment,w),w.forEach(p),c=R(A),u=k(A,"DIV",{id:!0,class:!0});var M=O(u);h=k(M,"DIV",{id:!0,class:!0});var C=O(h);l=k(C,"BUTTON",{id:!0,class:!0}),O(l).forEach(p),C.forEach(p),M.forEach(p),A.forEach(p),this.h()},h(){m(n,"class","svelte-unpsak"),m(i,"class","mmm svelte-unpsak"),m(l,"id","circle3LOGO"),m(l,"class",_=ve(t[2]?"not scrolled":"not")+" svelte-unpsak"),m(h,"id","circle2"),m(h,"class",f=ve(t[2]?"not scrolled":"not")+" svelte-unpsak"),m(u,"id","circle1"),m(u,"class",d=ve(t[2]?"not scrolled":"not")+" svelte-unpsak"),m(e,"id",g=t[0]?t[2]?"scrolledT":"T":t[2]?"scrolled":""),m(e,"style",b=t[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${t[4]}), rgba(57, 135, 155,${t[4]}));`:""),m(e,"class","svelte-unpsak")},m(D,A){B(D,e,A),I(e,n),I(e,s),H.m(e,null),I(e,o),I(e,i),J(a,i,null),I(e,c),I(e,u),I(u,h),I(h,l),y=!0},p(D,A){S===(S=v(D))&&H?H.p(D,A):(H.d(1),H=S(D),H&&(H.c(),H.m(e,o))),(!y||A&4&&_!==(_=ve(D[2]?"not scrolled":"not")+" svelte-unpsak"))&&m(l,"class",_),(!y||A&4&&f!==(f=ve(D[2]?"not scrolled":"not")+" svelte-unpsak"))&&m(h,"class",f),(!y||A&4&&d!==(d=ve(D[2]?"not scrolled":"not")+" svelte-unpsak"))&&m(u,"class",d),(!y||A&5&&g!==(g=D[0]?D[2]?"scrolledT":"T":D[2]?"scrolled":""))&&m(e,"id",g),(!y||A&17&&b!==(b=D[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${D[4]}), rgba(57, 135, 155,${D[4]}));`:""))&&m(e,"style",b)},i(D){y||(j(a.$$.fragment,D),y=!0)},o(D){z(a.$$.fragment,D),y=!1},d(D){D&&p(e),H.d(),Y(a)}}}function yi(t){let e,n,r="Login",s,o;return{c(){e=E("div"),n=E("button"),n.textContent=r,this.h()},l(i){e=k(i,"DIV",{style:!0});var a=O(e);n=k(a,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),X(n)!=="svelte-fxc53u"&&(n.textContent=r),a.forEach(p),this.h()},h(){m(n,"class","button svelte-unpsak"),T(n,"background-color","transparent"),T(n,"color","white"),T(n,"border","1px solid white"),T(e,"position","relative"),T(e,"right","20px")},m(i,a){B(i,e,a),I(e,n),s||(o=Z(n,"click",t[7]),s=!0)},p:_e,d(i){i&&p(e),s=!1,o()}}}function Ii(t){let e,n='<img src="/username.png" width="30"/> <img src="/bell.png" width="30"/>';return{c(){e=E("div"),e.innerHTML=n,this.h()},l(r){e=k(r,"DIV",{class:!0,"data-svelte-h":!0}),X(e)!=="svelte-1x0nf6o"&&(e.innerHTML=n),this.h()},h(){m(e,"class","row")},m(r,s){B(r,e,s)},p:_e,d(r){r&&p(e)}}}function Ei(t){let e,n,r,s,o,i,a,c,u='<li class="svelte-unpsak"><a href="/" class="svelte-unpsak">Home</a></li> <li class="svelte-unpsak"><a href="/courses" class="svelte-unpsak">courses</a></li> <li class="svelte-unpsak"><a href="/fellowships" class="svelte-unpsak">fellowships</a></li> <li class="svelte-unpsak"><a href="/blogs" class="svelte-unpsak">Blog</a></li> <li class="svelte-unpsak"><a href="/products" class="svelte-unpsak">products</a></li> <li class="svelte-unpsak"><a href="/contact-us" class="svelte-unpsak">Contact us</a></li>',h,l,_,f,d=t[1]&&an(t),g=t[3]&&cn(t);return{c(){d&&d.c(),e=L(),n=E("header"),r=E("div"),s=E("h1"),o=L(),g&&g.c(),i=L(),a=E("div"),c=E("ul"),c.innerHTML=u,this.h()},l(b){d&&d.l(b),e=R(b),n=k(b,"HEADER",{class:!0});var y=O(n);r=k(y,"DIV",{style:!0});var v=O(r);s=k(v,"H1",{}),O(s).forEach(p),v.forEach(p),o=R(y),g&&g.l(y),y.forEach(p),i=R(b),a=k(b,"DIV",{class:!0,id:!0,style:!0});var S=O(a);c=k(S,"UL",{class:!0,"data-svelte-h":!0}),X(c)!=="svelte-16vnmy9"&&(c.innerHTML=u),S.forEach(p),this.h()},h(){T(r,"position","absolute"),T(r,"top","-15px"),T(r,"left","15px"),m(n,"class","svelte-unpsak"),m(c,"class","svelte-unpsak"),m(a,"class","side-menu"),m(a,"id","menuu"),m(a,"style",h=`display: ${t[6]?"block":"none"};`)},m(b,y){d&&d.m(b,y),B(b,e,y),B(b,n,y),I(n,r),I(r,s),I(n,o),g&&g.m(n,null),B(b,i,y),B(b,a,y),I(a,c),l=!0,_||(f=Z(s,"click",t[11]),_=!0)},p(b,[y]){b[1]?d?(d.p(b,y),y&2&&j(d,1)):(d=an(b),d.c(),j(d,1),d.m(e.parentNode,e)):d&&(Ee(),z(d,1,1,()=>{d=null}),ke()),b[3]?g?(g.p(b,y),y&8&&j(g,1)):(g=cn(b),g.c(),j(g,1),g.m(n,null)):g&&(Ee(),z(g,1,1,()=>{g=null}),ke()),(!l||y&64&&h!==(h=`display: ${b[6]?"block":"none"};`))&&m(a,"style",h)},i(b){l||(j(d),j(g),l=!0)},o(b){z(d),z(g),l=!1},d(b){b&&(p(e),p(n),p(i),p(a)),d&&d.d(b),g&&g.d(),_=!1,f()}}}const ki=t=>t.stopPropagation();function Di(t,e,n){let{disableTransparent:r}=e,{enableTransparency:s}=e,o=!1;function i(){n(1,o=!0)}function a(){n(1,o=!1)}let c=!1,u,h=!1,l=0,_=!1;Ce(()=>{n(5,_=!!localStorage.getItem("li")),document.body.addEventListener("click",function(y){console.log(y.target.id),console.log(f),y.target.id!="menuuu"&&y.target.id!="menuio"&&f&&n(6,f=!1)}),u=function(){var y=window.scrollY||document.documentElement.scrollTop,v=document.documentElement.scrollHeight-window.innerHeight,S=y/v*100;return S},n(3,h=!0);const b=()=>{n(2,c=window.scrollY>0),console.log(u()*.01),u()>20?n(4,l=u()*.01+.7):n(4,l=u()*.01)};return window.addEventListener("scroll",b),r||window.addEventListener("scroll",b),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",b),document.body.style.overflow="auto"}});let f=!1;const d=()=>{a()},g=function(){const b=document.createElement("a");b.href="/",b.click()};return t.$$set=b=>{"disableTransparent"in b&&n(9,r=b.disableTransparent),"enableTransparency"in b&&n(0,s=b.enableTransparency)},[s,o,c,h,l,_,f,i,a,r,d,g]}class Ti extends Ae{constructor(e){super(),$e(this,e,Di,Ei,Se,{disableTransparent:9,enableTransparency:0})}}function ln(t){let e,n,r,s,o,i,a,c,u,h;return a=new fn({props:{func:t[11]}}),{c(){e=E("div"),n=E("div"),r=E("img"),o=L(),i=E("div"),q(a.$$.fragment),this.h()},l(l){e=k(l,"DIV",{class:!0});var _=O(e);n=k(_,"DIV",{class:!0});var f=O(n);r=k(f,"IMG",{src:!0}),o=R(f),i=k(f,"DIV",{class:!0});var d=O(i);G(a.$$.fragment,d),d.forEach(p),f.forEach(p),_.forEach(p),this.h()},h(){ie(r.src,s="/close.png")||m(r,"src",s),m(i,"class","content svelte-1eg9cy6"),m(n,"class","dialog-box svelte-1eg9cy6"),m(e,"class","overlay svelte-1eg9cy6")},m(l,_){B(l,e,_),I(e,n),I(n,r),I(n,o),I(n,i),J(a,i,null),c=!0,u||(h=[Z(r,"click",t[10]),Z(n,"click",Ni),Z(e,"click",t[10])],u=!0)},p(l,_){const f={};_&2&&(f.func=l[11]),a.$set(f)},i(l){c||(j(a.$$.fragment,l),c=!0)},o(l){z(a.$$.fragment,l),c=!1},d(l){l&&p(e),Y(a),u=!1,at(h)}}}function Si(t){let e,n;return e=new rr({}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p:_e,i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Ci(t){let e,n;return e=new nr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[14]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Ai(t){let e,n;return e=new un({props:{f:!0,cardsData:[...t[5]]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function $i(t){let e,n;return e=new un({props:{f:!1,cardsData:[...t[4]]}}),{c(){q(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Oi(t){let e,n="Fellowships",r,s,o,i,a="Courses",c,u,h,l,_="Blogs",f,d,g,b,y;return s=new St({props:{f:!0,onClick:t[12],cardsData:[...t[5]]}}),u=new St({props:{f:!1,onClick:t[13],cardsData:[...t[4]]}}),d=new fr({props:{blogs:t[7]}}),b=new pr({props:{data:t[6]}}),{c(){e=E("div"),e.textContent=n,r=L(),q(s.$$.fragment),o=L(),i=E("div"),i.textContent=a,c=L(),q(u.$$.fragment),h=L(),l=E("div"),l.textContent=_,f=L(),q(d.$$.fragment),g=L(),q(b.$$.fragment),this.h()},l(v){e=k(v,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(e)!=="svelte-1d5amtm"&&(e.textContent=n),r=R(v),G(s.$$.fragment,v),o=R(v),i=k(v,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(i)!=="svelte-1qkyua"&&(i.textContent=a),c=R(v),G(u.$$.fragment,v),h=R(v),l=k(v,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(l)!=="svelte-163eaxn"&&(l.textContent=_),f=R(v),G(d.$$.fragment,v),g=R(v),G(b.$$.fragment,v),this.h()},h(){m(e,"class","title"),T(e,"font-size","30px"),T(e,"margin-left","50px"),m(i,"class","title"),T(i,"font-size","30px"),T(i,"margin-left","50px"),m(l,"class","title"),T(l,"font-size","30px"),T(l,"margin","auto"),T(l,"text-align","center"),T(l,"position","relative"),T(l,"top","27px")},m(v,S){B(v,e,S),B(v,r,S),J(s,v,S),B(v,o,S),B(v,i,S),B(v,c,S),J(u,v,S),B(v,h,S),B(v,l,S),B(v,f,S),J(d,v,S),B(v,g,S),J(b,v,S),y=!0},p(v,S){const H={};S&32&&(H.cardsData=[...v[5]]),s.$set(H);const D={};S&16&&(D.cardsData=[...v[4]]),u.$set(D);const A={};S&128&&(A.blogs=v[7]),d.$set(A);const w={};S&64&&(w.data=v[6]),b.$set(w)},i(v){y||(j(s.$$.fragment,v),j(u.$$.fragment,v),j(d.$$.fragment,v),j(b.$$.fragment,v),y=!0)},o(v){z(s.$$.fragment,v),z(u.$$.fragment,v),z(d.$$.fragment,v),z(b.$$.fragment,v),y=!1},d(v){v&&(p(e),p(r),p(o),p(i),p(c),p(h),p(l),p(f),p(g)),Y(s,v),Y(u,v),Y(d,v),Y(b,v)}}}function Bi(t){let e,n,r,s,o,i,a,c="Echo Dental Training Unit",u,h,l,_,f,d,g,b,y,v,S=t[9]&&ln(t);n=new Ti({props:{enableTransparency:!0}});const H=[Oi,$i,Ai,Ci,Si],D=[];function A(w,M){return w[1]==0?0:w[1]==1?1:w[1]==2?2:w[1]==3?3:4}return d=A(t),g=D[d]=H[d](t),y=new ir({props:{scrollBoxHeight:t[8]+160}}),{c(){S&&S.c(),e=L(),q(n.$$.fragment),r=L(),s=E("div"),o=E("div"),i=E("div"),a=E("p"),a.textContent=c,u=L(),h=E("p"),l=Me(t[0]),_=L(),f=E("div"),g.c(),b=L(),q(y.$$.fragment),this.h()},l(w){S&&S.l(w),e=R(w),G(n.$$.fragment,w),r=R(w),s=k(w,"DIV",{class:!0});var M=O(s);o=k(M,"DIV",{class:!0});var C=O(o);i=k(C,"DIV",{class:!0});var $=O(i);a=k($,"P",{style:!0,"data-svelte-h":!0}),X(a)!=="svelte-bjo1x6"&&(a.textContent=c),u=R($),h=k($,"P",{style:!0});var N=O(h);l=Ne(N,t[0]),N.forEach(p),$.forEach(p),C.forEach(p),M.forEach(p),_=R(w),f=k(w,"DIV",{class:!0});var V=O(f);g.l(V),V.forEach(p),b=R(w),G(y.$$.fragment,w),this.h()},h(){T(a,"position","relative"),T(a,"right","70px"),T(a,"font-size","2.5em"),T(a,"margin-bottom","-15px"),m(h,"style","font-weight: 300; text-align: left; width: 70vw; font-size: 20px; /* height: 14vh; */ text-overflow: ellipsis; height: 257px; overflow-y: scroll;"),m(i,"class","image-text svelte-1eg9cy6"),m(o,"class","image-overlay svelte-1eg9cy6"),m(s,"class","header-image svelte-1eg9cy6"),m(f,"class","scroll-box svelte-1eg9cy6")},m(w,M){S&&S.m(w,M),B(w,e,M),J(n,w,M),B(w,r,M),B(w,s,M),I(s,o),I(o,i),I(i,a),I(i,u),I(i,h),I(h,l),B(w,_,M),B(w,f,M),D[d].m(f,null),B(w,b,M),J(y,w,M),v=!0},p(w,[M]){w[9]?S?(S.p(w,M),M&512&&j(S,1)):(S=ln(w),S.c(),j(S,1),S.m(e.parentNode,e)):S&&(Ee(),z(S,1,1,()=>{S=null}),ke()),(!v||M&1)&&ct(l,w[0]);let C=d;d=A(w),d===C?D[d].p(w,M):(Ee(),z(D[C],1,1,()=>{D[C]=null}),ke(),g=D[d],g?g.p(w,M):(g=D[d]=H[d](w),g.c()),j(g,1),g.m(f,null));const $={};M&256&&($.scrollBoxHeight=w[8]+160),y.$set($)},i(w){v||(j(S),j(n.$$.fragment,w),j(g),j(y.$$.fragment,w),v=!0)},o(w){z(S),z(n.$$.fragment,w),z(g),z(y.$$.fragment,w),v=!1},d(w){w&&(p(e),p(r),p(s),p(_),p(f),p(b)),S&&S.d(w),Y(n,w),D[d].d(),Y(y,w)}}}function Mi(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ni=t=>t.stopPropagation();function Pi(t,e,n){let r="",s=0;async function o(C,$,N){const V=await fetch("https://dentists-backend.onrender.com/api/"+C,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify($)});if(!V.ok)throw sr("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${V.status}`);const U=await V.json();return N&&N(),U}let i=!1;async function a(){o("n/gp").then(C=>{C=C.d,n(6,d=C.map($=>Object({title:$.productName,text:"Price : "+$.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+$.productID+"/0",discount:$.discount})))})}async function c(){o("n/gc").then(C=>{C=C.d,n(4,_=C.map($=>Object({title:$.courseName,id:$.courseID,text:$.courseDetails,duration:$.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+$.courseID+"/0",clickHandler:()=>{const N=document.createElement("a");N.href="/courses/"+$.courseID,N.click(),$.courseID,n(2,i=!1)}}))),console.log(_)})}let u;async function h(){o("n/gf").then(C=>{C=C.d,n(5,f=C.map($=>Object({id:$.fellowshipID,title:$.fellowshipName,duration:$.fellowshipDuration,text:$.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+$.fellowshipID+"/0",clickHandler:()=>{$.fellowshipID,n(2,i=!0)}})))})}async function l(){o("n/gb").then(C=>{C=C.d,n(7,g=C.map($=>Object({id:$.blogID,text:$.blogDetails,title:$.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+$.blogID,clickHandler:()=>{}})))})}let _=[],f=[],d=[],g=[];function b(){const C=document.querySelector(".scroll-box");C&&n(8,y=Number(getComputedStyle(C).height.split("px")[0]))}let y=0;Ce(()=>{document.body.addEventListener("click",function(U){console.log(U.target.id),console.log(H),U.target.id!="menuuu"&&U.target.id!="menuio"&&H&&(H=!1)}),setInterval(()=>{b()},500),o("aus").then(U=>{n(0,r=U.d)}),window.addEventListener("resize",b),b();const $=wn({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),N=vi($);_i(N,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(U=>{console.log(U)}),wi(N,U=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(U)}),Promise.all([c(),h(),l(),a()]).then(()=>{addEventListener("ocd",U=>{console.log(U.detail),U.detail.f?(console.log(f),console.log(U.detail.id),n(3,u=f.filter(Q=>Q.id==U.detail.id)[0])):n(3,u=_.filter(Q=>Q.id==U.detail.id)[0])})});const V=()=>{};return window.addEventListener("scroll",V),document.body.style.overflow=v?"hidden":"auto",()=>{window.removeEventListener("scroll",V),window.removeEventListener("resize",b),document.body.style.overflow="auto"}}),Xn(()=>{b()});let v=!1;function S(){n(9,v=!1)}Mi().then(C=>{C||console.log("Developer tools are closed.")});let H=!1;return[r,s,i,u,_,f,d,g,y,v,S,()=>{n(1,s=4),S()},function(){const C=document.createElement("a");C.href="/fellowships",C.click()},function(){const C=document.createElement("a");C.href="/courses",C.click()},function(){const C=document.createElement("a");C.href="/contact-us",C.click()}]}class Yi extends Ae{constructor(e){super(),$e(this,e,Pi,Bi,Se,{})}}export{Yi as component};
