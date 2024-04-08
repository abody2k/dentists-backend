import{s as Se,e as w,h as R,b as y,k as O,f as p,j as L,d as X,m as g,o as E,i as M,p as _,q as Z,G as Yn,v as it,w as Ce,t as Me,l as Ne,n as _e,y as at,z as we,r as ct,x as ie,I as ve,M as Xn}from"../chunks/scheduler.BbzLVxRS.js";import{S as Ae,i as $e,t as j,g as Ee,e as De,a as z,c as K,b as G,m as J,d as Y}from"../chunks/index.hWlefRDD.js";/* empty css                                                     *//* empty css                                                   */import{e as ne,u as Zn,d as Qn}from"../chunks/each.8dtAqtyS.js";import{C as er}from"../chunks/Card.DY6XVpU-.js";import{B as tr}from"../chunks/Button.BPDvwAYX.js";import"../chunks/Map.DTKxp16X.js";import{G as un}from"../chunks/Grid.Cz57oKGZ.js";import{L as fn}from"../chunks/Login.BimfQTcJ.js";import{C as nr}from"../chunks/CourseData.yP6-o7ur.js";import{C as rr}from"../chunks/Contact.CUq7ga7i.js";import{n as sr}from"../chunks/not.DNvn3Bfc.js";import{S as or}from"../chunks/TopBar.svelte_svelte_type_style_lang.Suxsz-v2.js";import{F as ir}from"../chunks/Footer.CX17JNSN.js";function kt(t,e,n){const r=t.slice();return r[6]=e[n].title,r[7]=e[n].text,r[8]=e[n].src,r[9]=e[n].id,r[10]=e[n].clickHandler,r}function Tt(t){let e,n;return e=new er({props:{f:t[2],id:t[9],title:t[6],text:t[7],src:t[8],clickHandler:t[10],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:t[6]+t[7]}}),{c(){K(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&4&&(o.f=r[2]),s&1&&(o.id=r[9]),s&1&&(o.title=r[6]),s&1&&(o.text=r[7]),s&1&&(o.src=r[8]),s&1&&(o.clickHandler=r[10]),s&1&&(o.key=r[6]+r[7]),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function ar(t){let e,n,r,s,o,i='<div>Show all</div> <img src="/back-icon.png"/>',a,u,l,f=ne([...t[0]]),c=[];for(let d=0;d<f.length;d+=1)c[d]=Tt(kt(t,f,d));const h=d=>z(c[d],1,1,()=>{c[d]=null});return{c(){e=w("div"),n=w("div");for(let d=0;d<c.length;d+=1)c[d].c();r=R(),s=w("div"),o=w("button"),o.innerHTML=i,this.h()},l(d){e=y(d,"DIV",{style:!0,class:!0});var v=O(e);n=y(v,"DIV",{class:!0,id:!0});var D=O(n);for(let A=0;A<c.length;A+=1)c[A].l(D);D.forEach(p),v.forEach(p),r=L(d),s=y(d,"DIV",{style:!0});var T=O(s);o=y(T,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),X(o)!=="svelte-2n4iru"&&(o.innerHTML=i),T.forEach(p),this.h()},h(){g(n,"class","row svelte-8t36q7"),g(n,"id","row-container"),E(e,"margin-bottom","0"),E(e,"height","406px"),g(e,"class","row svelte-8t36q7"),g(o,"class","button svelte-8t36q7"),E(o,"display","flex"),E(o,"align-items","center"),E(s,"display","grid"),E(s,"place-items","center"),E(s,"margin-bottom","90px"),E(s,"margin-top","20px")},m(d,v){M(d,e,v),_(e,n);for(let D=0;D<c.length;D+=1)c[D]&&c[D].m(n,null);M(d,r,v),M(d,s,v),_(s,o),a=!0,u||(l=Z(o,"click",function(){Yn(t[1])&&t[1].apply(this,arguments)}),u=!0)},p(d,[v]){if(t=d,v&5){f=ne([...t[0]]);let D;for(D=0;D<f.length;D+=1){const T=kt(t,f,D);c[D]?(c[D].p(T,v),j(c[D],1)):(c[D]=Tt(T),c[D].c(),j(c[D],1),c[D].m(n,null))}for(Ee(),D=f.length;D<c.length;D+=1)h(D);De()}},i(d){if(!a){for(let v=0;v<f.length;v+=1)j(c[v]);a=!0}},o(d){c=c.filter(Boolean);for(let v=0;v<c.length;v+=1)z(c[v]);a=!1},d(d){d&&(p(e),p(r),p(s)),it(c,d),u=!1,l()}}}function cr(t,e,n){let{cardsData:r=[]}=e,{onClick:s}=e,{f:o}=e;return r.length*340,Ce(()=>{console.log("THIS IS THE SOURCE"),console.log(r),document.getElementById("row-container")}),t.$$set=i=>{"cardsData"in i&&n(0,r=i.cardsData),"onClick"in i&&n(1,s=i.onClick),"f"in i&&n(2,o=i.f)},[r,s,o]}class St extends Ae{constructor(e){super(),$e(this,e,cr,ar,Se,{cardsData:0,onClick:1,f:2})}}function Ct(t,e,n){const r=t.slice();return r[12]=e[n],r[14]=n,r}function At(t,e,n){const r=t.slice();return r[15]=e[n],r[14]=n,r}function $t(t){let e,n;return{c(){e=w("img"),this.h()},l(r){e=y(r,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){ie(e.src,n=t[15].src+"/0")||g(e,"src",n),g(e,"alt","Neumorphic Picture"),g(e,"id","blog-image"),g(e,"class","rectangular-image svelte-zd5oyq")},m(r,s){M(r,e,s)},p(r,s){s&1&&!ie(e.src,n=r[15].src+"/0")&&g(e,"src",n)},d(r){r&&p(e)}}}function Ot(t){let e,n=t[14]==t[1]&&$t(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),M(r,e,s)},p(r,s){r[14]==r[1]?n?n.p(r,s):(n=$t(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&p(e),n&&n.d(r)}}}function Bt(t){let e,n,r=t[0][t[1]].title+"",s,o,i=t[0].length>0&&Mt(t);return{c(){e=w("div"),n=w("h2"),s=Me(r),o=R(),i&&i.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var u=O(e);n=y(u,"H2",{style:!0,class:!0});var l=O(n);s=Ne(l,r),l.forEach(p),o=L(u),i&&i.l(u),u.forEach(p),this.h()},h(){E(n,"margin","-2px 0 -10px 0"),g(n,"class","svelte-zd5oyq"),g(e,"class","captionCont svelte-zd5oyq")},m(a,u){M(a,e,u),_(e,n),_(n,s),_(e,o),i&&i.m(e,null)},p(a,u){u&3&&r!==(r=a[0][a[1]].title+"")&&ct(s,r),a[0].length>0?i?i.p(a,u):(i=Mt(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&p(e),i&&i.d()}}}function Mt(t){let e,n=t[0][t[1]].text+"",r;return{c(){e=w("p"),r=Me(n),this.h()},l(s){e=y(s,"P",{class:!0});var o=O(e);r=Ne(o,n),o.forEach(p),this.h()},h(){g(e,"class","svelte-zd5oyq")},m(s,o){M(s,e,o),_(e,r)},p(s,o){o&3&&n!==(n=s[0][s[1]].text+"")&&ct(r,n)},d(s){s&&p(e)}}}function Nt(t,e){let n,r,s,o;function i(){return e[8](e[14])}return{key:t,first:null,c(){n=w("div"),this.h()},l(a){n=y(a,"DIV",{style:!0,class:!0}),O(n).forEach(p),this.h()},h(){E(n,"margin-top","10px"),E(n,"margin-bottom","10px"),g(n,"class",r="dot "+(e[14]===e[1]?"light-dot":"dark-dot")+" svelte-zd5oyq"),this.first=n},m(a,u){M(a,n,u),s||(o=Z(n,"click",i),s=!0)},p(a,u){e=a,u&2&&r!==(r="dot "+(e[14]===e[1]?"light-dot":"dark-dot")+" svelte-zd5oyq")&&g(n,"class",r)},d(a){a&&p(n),s=!1,o()}}}function lr(t){let e,n,r,s='<img src="/open.png" style="right: 10%;width: 33px; width: 33px;" class="svelte-zd5oyq"/>',o,i,a,u=" , ",l,f,c,h,d,v,D="<",T,A,m=">",k,V,I,C=[],b=new Map,B,S,$=ne(t[0]),N=[];for(let P=0;P<$.length;P+=1)N[P]=Ot(At(t,$,P));let H=t[0].length>0&&Bt(t),q=ne([0,1,2]);const Q=P=>P[14];for(let P=0;P<3;P+=1){let U=Ct(t,q,P),x=Q(U);b.set(x,C[P]=Nt(x,U))}return{c(){e=w("div"),n=w("div"),r=w("button"),r.innerHTML=s,o=R(),i=w("div"),a=w("div"),l=Me(u),f=R(),c=w("div"),h=w("div");for(let P=0;P<N.length;P+=1)N[P].c();d=R(),v=w("div"),v.textContent=D,T=R(),A=w("div"),A.textContent=m,k=R(),H&&H.c(),V=R(),I=w("div");for(let P=0;P<3;P+=1)C[P].c();this.h()},l(P){e=y(P,"DIV",{class:!0});var U=O(e);n=y(U,"DIV",{class:!0});var x=O(n);r=y(x,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),X(r)!=="svelte-d8n0jw"&&(r.innerHTML=s),x.forEach(p),o=L(U),i=y(U,"DIV",{style:!0,class:!0});var Ie=O(i);a=y(Ie,"DIV",{class:!0,style:!0});var Et=O(a);l=Ne(Et,u),Et.forEach(p),Ie.forEach(p),f=L(U),c=y(U,"DIV",{class:!0});var me=O(c);h=y(me,"DIV",{class:!0});var be=O(h);for(let ce=0;ce<N.length;ce+=1)N[ce].l(be);d=L(be),v=y(be,"DIV",{class:!0,"data-svelte-h":!0}),X(v)!=="svelte-nl1vs9"&&(v.textContent=D),T=L(be),A=y(be,"DIV",{class:!0,"data-svelte-h":!0}),X(A)!=="svelte-dra8cl"&&(A.textContent=m),be.forEach(p),k=L(me),H&&H.l(me),V=L(me),I=y(me,"DIV",{class:!0});var Dt=O(I);for(let ce=0;ce<3;ce+=1)C[ce].l(Dt);Dt.forEach(p),me.forEach(p),U.forEach(p),this.h()},h(){E(r,"padding","4px 4px 0px 4px"),E(r,"float","inline-end"),E(r,"right","10%"),E(r,"bottom","7px"),g(r,"class","svelte-zd5oyq"),g(n,"class","icon svelte-zd5oyq"),g(a,"class","#2e3b6f-title svelte-zd5oyq"),E(a,"color","transparent"),E(i,"display","flex"),E(i,"justify-content","space-between"),E(i,"align-items","center"),E(i,"padding","10px"),g(i,"class","svelte-zd5oyq"),g(v,"class","nextImageBtn svelte-zd5oyq"),g(A,"class","previousImageBtn svelte-zd5oyq"),g(h,"class","imageCont svelte-zd5oyq"),g(I,"class","dots-container svelte-zd5oyq"),g(c,"class","postCard svelte-zd5oyq"),g(e,"class","svelte-zd5oyq")},m(P,U){M(P,e,U),_(e,n),_(n,r),_(e,o),_(e,i),_(i,a),_(a,l),_(e,f),_(e,c),_(c,h);for(let x=0;x<N.length;x+=1)N[x]&&N[x].m(h,null);_(h,d),_(h,v),_(h,T),_(h,A),_(c,k),H&&H.m(c,null),_(c,V),_(c,I);for(let x=0;x<3;x+=1)C[x]&&C[x].m(I,null);B||(S=[Z(r,"click",t[5]),Z(v,"click",t[6]),Z(A,"click",t[7])],B=!0)},p(P,[U]){if(U&3){$=ne(P[0]);let x;for(x=0;x<$.length;x+=1){const Ie=At(P,$,x);N[x]?N[x].p(Ie,U):(N[x]=Ot(Ie),N[x].c(),N[x].m(h,d))}for(;x<N.length;x+=1)N[x].d(1);N.length=$.length}P[0].length>0?H?H.p(P,U):(H=Bt(P),H.c(),H.m(c,V)):H&&(H.d(1),H=null),U&6&&(q=ne([0,1,2]),C=Zn(C,U,Q,1,P,q,b,I,Qn,Nt,null,Ct))},i:_e,o:_e,d(P){P&&p(e),it(N,P),H&&H.d();for(let U=0;U<3;U+=1)C[U].d();B=!1,at(S)}}}function ur(t,e,n){let{firstTitle:r="Default Title"}=e,{secondTitle:s="Default Second Title"}=e,{blogs:o=[]}=e;o.length>5&&(o=o.slice(0,6));let i=0;function a(h){console.log(h),n(1,i=h)}Ce(function(){console.log("THESE ARE THE BLOGS"),console.log(o),document.getElementById("blog-image");function d(){console.log("wack wack"),!(o.length<1)&&n(1,i=(i+1)%o.length)}d(),setInterval(d,7e3)});const u=()=>{location.href="/blogs"},l=()=>{console.log(i),n(1,i=o.indexOf(o.at(i-1))),console.log(i)},f=()=>{n(1,i=(i+1)%o.length)},c=h=>a(h);return t.$$set=h=>{"firstTitle"in h&&n(3,r=h.firstTitle),"secondTitle"in h&&n(4,s=h.secondTitle),"blogs"in h&&n(0,o=h.blogs)},[o,i,a,r,s,u,l,f,c]}class fr extends Ae{constructor(e){super(),$e(this,e,ur,lr,Se,{firstTitle:3,secondTitle:4,blogs:0})}}function Pt(t,e,n){const r=t.slice();return r[3]=e[n],r[5]=n,r}function Rt(t){let e,n,r,s;return{c(){e=w("div"),n=w("div"),r=w("img"),this.h()},l(o){e=y(o,"DIV",{class:!0});var i=O(e);n=y(i,"DIV",{class:!0,style:!0});var a=O(n);r=y(a,"IMG",{src:!0,style:!0,class:!0}),a.forEach(p),i.forEach(p),this.h()},h(){ie(r.src,s=t[0][t[1]%t[0].length].src)||g(r,"src",s),E(r,"border-radius","10px"),g(r,"class","svelte-1pblhl6"),g(n,"class","postCard svelte-1pblhl6"),E(n,"width","270px"),E(n,"height","270px"),E(n,"border-radius","10px"),E(n,"background-color","#e6e7ee"),E(n,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),E(n,"margin-bottom","50px"),g(e,"class","image-card svelte-1pblhl6")},m(o,i){M(o,e,i),_(e,n),_(n,r)},p(o,i){i&3&&!ie(r.src,s=o[0][o[1]%o[0].length].src)&&g(r,"src",s)},d(o){o&&p(e)}}}function Lt(t){let e,n=ne(t[0]),r=[];for(let s=0;s<n.length;s+=1)r[s]=Ht(Pt(t,n,s));return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=we()},l(s){for(let o=0;o<r.length;o+=1)r[o].l(s);e=we()},m(s,o){for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(s,o);M(s,e,o)},p(s,o){if(o&1){n=ne(s[0]);let i;for(i=0;i<n.length;i+=1){const a=Pt(s,n,i);r[i]?r[i].p(a,o):(r[i]=Ht(a),r[i].c(),r[i].m(e.parentNode,e))}for(;i<r.length;i+=1)r[i].d(1);r.length=n.length}},d(s){s&&p(e),it(r,s)}}}function Vt(t){let e,n,r,s;return{c(){e=w("div"),n=w("img"),s=R(),this.h()},l(o){e=y(o,"DIV",{class:!0,style:!0});var i=O(e);n=y(i,"IMG",{src:!0,style:!0,class:!0}),i.forEach(p),s=L(o),this.h()},h(){ie(n.src,r=t[0][(t[5]+1)%t[0].length].src)||g(n,"src",r),E(n,"border-radius","10px"),g(n,"class","svelte-1pblhl6"),g(e,"class","postCard svelte-1pblhl6"),g(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(o,i){M(o,e,i),_(e,n),M(o,s,i)},p(o,i){i&1&&!ie(n.src,r=o[0][(o[5]+1)%o[0].length].src)&&g(n,"src",r)},d(o){o&&(p(e),p(s))}}}function Ht(t){let e,n=t[5]+1!=t[0].length&&Vt(t);return{c(){n&&n.c(),e=we()},l(r){n&&n.l(r),e=we()},m(r,s){n&&n.m(r,s),M(r,e,s)},p(r,s){r[5]+1!=r[0].length?n?n.p(r,s):(n=Vt(r),n.c(),n.m(e.parentNode,e)):n&&(n.d(1),n=null)},d(r){r&&p(e),n&&n.d(r)}}}function dr(t){let e,n,r="Products",s,o,i,a,u,l=`<div class="black-title svelte-1pblhl6" style="font-size: 20px; position: relative; right: 22px;">Guaranteed or your money back!</div> <div class="small-note svelte-1pblhl6" style="font-size: 15px;">The best marketing doesn&#39;t feel like marketing.
            It’s important to remember your competitor is only one mouse click away.</div> <div class="big-text svelte-1pblhl6" style="font-size: 27px;">Take advantage of this special offer</div>`,f,c,h,d,v,D,T,A,m,k="",V,I=t[0].length>=1&&Rt(t),C=t[0].length>1&&Lt(t);return T=new tr({props:{text:"Show all",height:"200px",clickHandler:t[2],src:"/back-icon.png"}}),{c(){e=w("div"),n=w("div"),n.textContent=r,s=R(),o=w("div"),i=w("div"),I&&I.c(),a=R(),u=w("div"),u.innerHTML=l,f=R(),c=w("div"),h=w("div"),d=w("div"),C&&C.c(),v=R(),D=w("div"),K(T.$$.fragment),A=R(),m=w("div"),m.innerHTML=k,this.h()},l(b){e=y(b,"DIV",{style:!0});var B=O(e);n=y(B,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(n)!=="svelte-gh7rxu"&&(n.textContent=r),s=L(B),o=y(B,"DIV",{class:!0,style:!0});var S=O(o);i=y(S,"DIV",{class:!0});var $=O(i);I&&I.l($),a=L($),u=y($,"DIV",{class:!0,"data-svelte-h":!0}),X(u)!=="svelte-1k0en3v"&&(u.innerHTML=l),$.forEach(p),f=L(S),c=y(S,"DIV",{style:!0});var N=O(c);h=y(N,"DIV",{style:!0});var H=O(h);d=y(H,"DIV",{class:!0});var q=O(d);C&&C.l(q),q.forEach(p),H.forEach(p),v=L(N),D=y(N,"DIV",{style:!0});var Q=O(D);G(T.$$.fragment,Q),Q.forEach(p),N.forEach(p),A=L(S),m=y(S,"DIV",{class:!0,"data-svelte-h":!0}),X(m)!=="svelte-cpoj1k"&&(m.innerHTML=k),S.forEach(p),B.forEach(p),this.h()},h(){g(n,"class","#2e3b6f-title"),E(n,"font-size","30px"),E(n,"margin","auto"),E(n,"text-align","center"),E(n,"position","relative"),E(n,"color","#2e3b6f"),E(n,"font-weight","bolder"),E(n,"margin-bottom","20px"),g(u,"class","text-container svelte-1pblhl6"),g(i,"class","first-row svelte-1pblhl6"),g(d,"class","row-images svelte-1pblhl6"),E(h,"overflow-x","scroll"),g(D,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),E(c,"display","flex"),g(m,"class","show-call-button svelte-1pblhl6"),g(o,"class","neumorphic-card svelte-1pblhl6"),E(o,"height","560px"),E(e,"margin-top","90px")},m(b,B){M(b,e,B),_(e,n),_(e,s),_(e,o),_(o,i),I&&I.m(i,null),_(i,a),_(i,u),_(o,f),_(o,c),_(c,h),_(h,d),C&&C.m(d,null),_(c,v),_(c,D),J(T,D,null),_(o,A),_(o,m),V=!0},p(b,[B]){b[0].length>=1?I?I.p(b,B):(I=Rt(b),I.c(),I.m(i,a)):I&&(I.d(1),I=null),b[0].length>1?C?C.p(b,B):(C=Lt(b),C.c(),C.m(d,null)):C&&(C.d(1),C=null)},i(b){V||(j(T.$$.fragment,b),V=!0)},o(b){z(T.$$.fragment,b),V=!1},d(b){b&&p(e),I&&I.d(),C&&C.d(),Y(T)}}}function hr(t,e,n){let{data:r=[]}=e,s=0;setInterval(()=>{r.length>1&&n(1,s=(s+1)%r.length)},7e3),Ce(()=>{console.log(r)});const o=()=>{location.href="/products"};return t.$$set=i=>{"data"in i&&n(0,r=i.data)},[r,s,o]}class pr extends Ae{constructor(e){super(),$e(this,e,hr,dr,Se,{data:0})}}var jt={};/**
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
 */const dn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},gr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=t[n++];e[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=t[n++],i=t[n++],a=t[n++],u=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const o=t[n++],i=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return e.join("")},hn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const o=t[s],i=s+1<t.length,a=i?t[s+1]:0,u=s+2<t.length,l=u?t[s+2]:0,f=o>>2,c=(o&3)<<4|a>>4;let h=(a&15)<<2|l>>6,d=l&63;u||(d=64,i||(h=64)),r.push(n[f],n[c],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(dn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):gr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const o=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const c=s<t.length?n[t.charAt(s)]:64;if(++s,o==null||a==null||l==null||c==null)throw new mr;const h=o<<2|a>>4;if(r.push(h),l!==64){const d=a<<4&240|l>>2;if(r.push(d),c!==64){const v=l<<6&192|c;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const br=function(t){const e=dn(t);return hn.encodeByteArray(e,!0)},pn=function(t){return br(t).replace(/\./g,"")},vr=function(t){try{return hn.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class Dr{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}function mn(){try{return typeof indexedDB=="object"}catch{return!1}}function bn(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;e(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}function kr(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Tr="FirebaseError";class ye extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Tr,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}}class Pe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,o=this.errors[e],i=o?Sr(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new ye(s,a,r)}}function Sr(t,e){return t.replace(Cr,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Cr=/\{\$([^}]+)}/g;function Xe(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const o=t[s],i=e[s];if(xt(o)&&xt(i)){if(!Xe(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function xt(t){return t!==null&&typeof t=="object"}/**
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
 */class Ar{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Dr;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Or(e))try{this.getOrInitializeService({instanceIdentifier:le})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(e=le){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=le){return this.instances.has(e)}getOptions(e=le){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&e(i,s),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:$r(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=le){return this.component?this.component.multipleInstances?e:le:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function $r(t){return t===le?void 0:t}function Or(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Mr={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Nr=F.INFO,Pr={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Rr=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=Pr[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Lr{constructor(e){this.name=e,this._logLevel=Nr,this._logHandler=Rr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mr[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Vr=(t,e)=>e.some(n=>t instanceof n);let Ft,zt;function Hr(){return Ft||(Ft=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function jr(){return zt||(zt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vn=new WeakMap,Ze=new WeakMap,_n=new WeakMap,Ve=new WeakMap,ut=new WeakMap;function xr(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(te(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&vn.set(n,t)}).catch(()=>{}),ut.set(e,t),e}function Fr(t){if(Ze.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});Ze.set(t,e)}let Qe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ze.get(t);if(e==="objectStoreNames")return t.objectStoreNames||_n.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function zr(t){Qe=t(Qe)}function qr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(He(this),e,...n);return _n.set(r,e.sort?e.sort():[e]),te(r)}:jr().includes(t)?function(...e){return t.apply(He(this),e),te(vn.get(this))}:function(...e){return te(t.apply(He(this),e))}}function Ur(t){return typeof t=="function"?qr(t):(t instanceof IDBTransaction&&Fr(t),Vr(t,Hr())?new Proxy(t,Qe):t)}function te(t){if(t instanceof IDBRequest)return xr(t);if(Ve.has(t))return Ve.get(t);const e=Ur(t);return e!==t&&(Ve.set(t,e),ut.set(e,t)),e}const He=t=>ut.get(t);function ft(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=te(i);return r&&i.addEventListener("upgradeneeded",u=>{r(te(i.result),u.oldVersion,u.newVersion,te(i.transaction),u)}),n&&i.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),a.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}function je(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),te(n).then(()=>{})}const Wr=["get","getKey","getAll","getAllKeys","count"],Kr=["put","add","delete","clear"],xe=new Map;function qt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xe.get(e))return xe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Kr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Wr.includes(n)))return;const o=async function(i,...a){const u=this.transaction(i,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&u.done]))[0]};return xe.set(e,o),o}zr(t=>({...t,get:(e,n,r)=>qt(e,n)||t.get(e,n,r),has:(e,n)=>!!qt(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const et="@firebase/app",Ut="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fe=new Lr("@firebase/app"),Yr="@firebase/app-compat",Xr="@firebase/analytics-compat",Zr="@firebase/analytics",Qr="@firebase/app-check-compat",es="@firebase/app-check",ts="@firebase/auth",ns="@firebase/auth-compat",rs="@firebase/database",ss="@firebase/database-compat",os="@firebase/functions",is="@firebase/functions-compat",as="@firebase/installations",cs="@firebase/installations-compat",ls="@firebase/messaging",us="@firebase/messaging-compat",fs="@firebase/performance",ds="@firebase/performance-compat",hs="@firebase/remote-config",ps="@firebase/remote-config-compat",gs="@firebase/storage",ms="@firebase/storage-compat",bs="@firebase/firestore",vs="@firebase/firestore-compat",_s="firebase";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Es{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ae("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw re.create("app-deleted",{appName:this._name})}}function wn(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:tt,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw re.create("bad-app-name",{appName:String(s)});if(n||(n=gn()),!n)throw re.create("no-options");const o=Oe.get(s);if(o){if(Xe(n,o.options)&&Xe(r,o.config))return o;throw re.create("duplicate-app",{appName:s})}const i=new Br(s);for(const u of nt.values())i.addComponent(u);const a=new Es(n,r,i);return Oe.set(s,a),a}function Ds(t=tt){const e=Oe.get(t);if(!e&&t===tt&&gn())return wn();if(!e)throw re.create("no-app",{appName:t});return e}function se(t,e,n){var r;let s=(r=ws[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=e.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${e}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),fe.warn(a.join(" "));return}de(new ae(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ks="firebase-heartbeat-database",Ts=1,ke="firebase-heartbeat-store";let Fe=null;function yn(){return Fe||(Fe=ft(ks,Ts,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ke)}}}).catch(t=>{throw re.create("idb-open",{originalErrorMessage:t.message})})),Fe}async function Ss(t){try{return await(await yn()).transaction(ke).objectStore(ke).get(In(t))}catch(e){if(e instanceof ye)fe.warn(e.message);else{const n=re.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});fe.warn(n.message)}}}async function Wt(t,e){try{const r=(await yn()).transaction(ke,"readwrite");await r.objectStore(ke).put(e,In(t)),await r.done}catch(n){if(n instanceof ye)fe.warn(n.message);else{const r=re.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});fe.warn(r.message)}}}function In(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Cs=1024,As=30*24*60*60*1e3;class $s{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Bs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Kt();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(i=>i.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const a=new Date(i.date).valueOf();return Date.now()-a<=As}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Kt(),{heartbeatsToSend:r,unsentEntries:s}=Os(this._heartbeatsCache.heartbeats),o=pn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Kt(){return new Date().toISOString().substring(0,10)}function Os(t,e=Cs){const n=[];let r=t.slice();for(const s of t){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Gt(n)>e){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Gt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Bs{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mn()?bn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ss(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Wt(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gt(t){return pn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ms(t){de(new ae("platform-logger",e=>new Gr(e),"PRIVATE")),de(new ae("heartbeat",e=>new $s(e),"PRIVATE")),se(et,Ut,t),se(et,Ut,"esm2017"),se("fire-js","")}Ms("");var Ns="firebase",Ps="10.7.1";/**
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
 */se(Ns,Ps,"app");const Rs=(t,e)=>e.some(n=>t instanceof n);let Jt,Yt;function Ls(){return Jt||(Jt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Vs(){return Yt||(Yt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const En=new WeakMap,rt=new WeakMap,Dn=new WeakMap,ze=new WeakMap,ht=new WeakMap;function Hs(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",o),t.removeEventListener("error",i)},o=()=>{n(oe(t.result)),s()},i=()=>{r(t.error),s()};t.addEventListener("success",o),t.addEventListener("error",i)});return e.then(n=>{n instanceof IDBCursor&&En.set(n,t)}).catch(()=>{}),ht.set(e,t),e}function js(t){if(rt.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",i),t.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",o),t.addEventListener("error",i),t.addEventListener("abort",i)});rt.set(t,e)}let st={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Dn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return oe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xs(t){st=t(st)}function Fs(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(qe(this),e,...n);return Dn.set(r,e.sort?e.sort():[e]),oe(r)}:Vs().includes(t)?function(...e){return t.apply(qe(this),e),oe(En.get(this))}:function(...e){return oe(t.apply(qe(this),e))}}function zs(t){return typeof t=="function"?Fs(t):(t instanceof IDBTransaction&&js(t),Rs(t,Ls())?new Proxy(t,st):t)}function oe(t){if(t instanceof IDBRequest)return Hs(t);if(ze.has(t))return ze.get(t);const e=zs(t);return e!==t&&(ze.set(t,e),ht.set(e,t)),e}const qe=t=>ht.get(t);function qs(t,e,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(t,e),a=oe(i);return r&&i.addEventListener("upgradeneeded",u=>{r(oe(i.result),u.oldVersion,u.newVersion,oe(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(u=>{o&&u.addEventListener("close",()=>o()),s&&u.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Us=["get","getKey","getAll","getAllKeys","count"],Ws=["put","add","delete","clear"],Ue=new Map;function Xt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ue.get(e))return Ue.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Ws.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Us.includes(n)))return;const o=async function(i,...a){const u=this.transaction(i,s?"readwrite":"readonly");let l=u.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&u.done]))[0]};return Ue.set(e,o),o}xs(t=>({...t,get:(e,n,r)=>Xt(e,n)||t.get(e,n,r),has:(e,n)=>!!Xt(e,n)||t.has(e,n)}));const kn="@firebase/installations",pt="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=1e4,Sn=`w:${pt}`,Cn="FIS_v2",Ks="https://firebaseinstallations.googleapis.com/v1",Gs=60*60*1e3,Js="installations",Ys="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function $n({projectId:t}){return`${Ks}/projects/${t}/installations`}function On(t){return{token:t.token,requestStatus:2,expiresIn:Qs(t.expiresIn),creationTime:Date.now()}}async function Bn(t,e){const r=(await e.json()).error;return he.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Mn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Zs(t,{refreshToken:e}){const n=Mn(t);return n.append("Authorization",eo(e)),n}async function Nn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Qs(t){return Number(t.replace("s","000"))}function eo(t){return`${Cn} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=$n(t),s=Mn(t),o=e.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:Cn,appId:t.appId,sdkVersion:Sn},a={method:"POST",headers:s,body:JSON.stringify(i)},u=await Nn(()=>fetch(r,a));if(u.ok){const l=await u.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:On(l.authToken)}}else throw await Bn("Create Installation",u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const Rn=new Map;function Ln(t,e){const n=Re(t);Vn(n,e),io(n,e)}function Vn(t,e){const n=Rn.get(t);if(n)for(const r of n)r(e)}function io(t,e){const n=ao();n&&n.postMessage({key:t,fid:e}),co()}let ue=null;function ao(){return!ue&&"BroadcastChannel"in self&&(ue=new BroadcastChannel("[Firebase] FID Change"),ue.onmessage=t=>{Vn(t.data.key,t.data.fid)}),ue}function co(){Rn.size===0&&ue&&(ue.close(),ue=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="firebase-installations-database",uo=1,pe="firebase-installations-store";let We=null;function gt(){return We||(We=qs(lo,uo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(pe)}}})),We}async function Be(t,e){const n=Re(t),s=(await gt()).transaction(pe,"readwrite"),o=s.objectStore(pe),i=await o.get(n);return await o.put(e,n),await s.done,(!i||i.fid!==e.fid)&&Ln(t,e.fid),e}async function Hn(t){const e=Re(t),r=(await gt()).transaction(pe,"readwrite");await r.objectStore(pe).delete(e),await r.done}async function Le(t,e){const n=Re(t),s=(await gt()).transaction(pe,"readwrite"),o=s.objectStore(pe),i=await o.get(n),a=e(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&Ln(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){let e;const n=await Le(t.appConfig,r=>{const s=fo(r),o=ho(t,s);return e=o.registrationPromise,o.installationEntry});return n.fid===ot?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function fo(t){const e=t||{fid:so(),registrationStatus:0};return jn(e)}function ho(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(he.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=po(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:go(t)}:{installationEntry:e}}async function po(t,e){try{const n=await to(t,e);return Be(t.appConfig,n)}catch(n){throw An(n)&&n.customData.serverCode===409?await Hn(t.appConfig):await Be(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function go(t){let e=await Zt(t.appConfig);for(;e.registrationStatus===1;)await Pn(100),e=await Zt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await mt(t);return r||n}return e}function Zt(t){return Le(t,e=>{if(!e)throw he.create("installation-not-found");return jn(e)})}function jn(t){return mo(t)?{fid:t.fid,registrationStatus:0}:t}function mo(t){return t.registrationStatus===1&&t.registrationTime+Tn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo({appConfig:t,heartbeatServiceProvider:e},n){const r=vo(t,n),s=Zs(t,n),o=e.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:Sn,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},u=await Nn(()=>fetch(r,a));if(u.ok){const l=await u.json();return On(l)}else throw await Bn("Generate Auth Token",u)}function vo(t,{fid:e}){return`${$n(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bt(t,e=!1){let n;const r=await Le(t.appConfig,o=>{if(!xn(o))throw he.create("not-registered");const i=o.authToken;if(!e&&yo(i))return o;if(i.requestStatus===1)return n=_o(t,e),o;{if(!navigator.onLine)throw he.create("app-offline");const a=Eo(o);return n=wo(t,a),a}});return n?await n:r.authToken}async function _o(t,e){let n=await Qt(t.appConfig);for(;n.authToken.requestStatus===1;)await Pn(100),n=await Qt(t.appConfig);const r=n.authToken;return r.requestStatus===0?bt(t,e):r}function Qt(t){return Le(t,e=>{if(!xn(e))throw he.create("not-registered");const n=e.authToken;return Do(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function wo(t,e){try{const n=await bo(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Be(t.appConfig,r),n}catch(n){if(An(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Hn(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Be(t.appConfig,r)}throw n}}function xn(t){return t!==void 0&&t.registrationStatus===2}function yo(t){return t.requestStatus===2&&!Io(t)}function Io(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Gs}function Eo(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Do(t){return t.requestStatus===1&&t.requestTime+Tn<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(t){const e=t,{installationEntry:n,registrationPromise:r}=await mt(e);return r?r.catch(console.error):bt(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function Co(t){if(!t||!t.options)throw Ke("App Configuration");if(!t.name)throw Ke("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Ke(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Ke(t){return he.create("missing-app-config-values",{valueName:t})}/**
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
 */const Fn="installations",Ao="installations-internal",$o=t=>{const e=t.getProvider("app").getImmediate(),n=Co(e),r=dt(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Oo=t=>{const e=t.getProvider("app").getImmediate(),n=dt(e,Fn).getImmediate();return{getId:()=>ko(n),getToken:s=>To(n,s)}};function Bo(){de(new ae(Fn,$o,"PUBLIC")),de(new ae(Ao,Oo,"PRIVATE"))}Bo();se(kn,pt);se(kn,pt,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="/firebase-messaging-sw.js",No="/firebase-cloud-messaging-push-scope",zn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Po="https://fcmregistrations.googleapis.com/v1",qn="google.c.a.c_id",Ro="google.c.a.c_l",Lo="google.c.a.ts",Vo="google.c.a.e";var en;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(en||(en={}));/**
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
 */function ee(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ho(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ge="fcm_token_details_db",jo=5,tn="fcm_token_object_Store";async function xo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Ge))return null;let e=null;return(await ft(Ge,jo,{upgrade:async(r,s,o,i)=>{var a;if(s<2||!r.objectStoreNames.contains(tn))return;const u=i.objectStore(tn),l=await u.index("fcmSenderId").get(t);if(await u.clear(),!!l){if(s===2){const f=l;if(!f.auth||!f.p256dh||!f.endpoint)return;e={token:f.fcmToken,createTime:(a=f.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:f.auth,p256dh:f.p256dh,endpoint:f.endpoint,swScope:f.swScope,vapidKey:typeof f.vapidKey=="string"?f.vapidKey:ee(f.vapidKey)}}}else if(s===3){const f=l;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:ee(f.auth),p256dh:ee(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:ee(f.vapidKey)}}}else if(s===4){const f=l;e={token:f.fcmToken,createTime:f.createTime,subscriptionOptions:{auth:ee(f.auth),p256dh:ee(f.p256dh),endpoint:f.endpoint,swScope:f.swScope,vapidKey:ee(f.vapidKey)}}}}}})).close(),await je(Ge),await je("fcm_vapid_details_db"),await je("undefined"),Fo(e)?e:null}function Fo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zo="firebase-messaging-database",qo=1,ge="firebase-messaging-store";let Je=null;function vt(){return Je||(Je=ft(zo,qo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ge)}}})),Je}async function Un(t){const e=wt(t),r=await(await vt()).transaction(ge).objectStore(ge).get(e);if(r)return r;{const s=await xo(t.appConfig.senderId);if(s)return await _t(t,s),s}}async function _t(t,e){const n=wt(t),s=(await vt()).transaction(ge,"readwrite");return await s.objectStore(ge).put(e,n),await s.done,e}async function Uo(t){const e=wt(t),r=(await vt()).transaction(ge,"readwrite");await r.objectStore(ge).delete(e),await r.done}function wt({appConfig:t}){return t.appId}/**
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
 */const Wo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},W=new Pe("messaging","Messaging",Wo);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(t,e){const n=await It(t),r=Kn(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(yt(t.appConfig),s)).json()}catch(i){throw W.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw W.create("token-subscribe-failed",{errorInfo:i})}if(!o.token)throw W.create("token-subscribe-no-token");return o.token}async function Go(t,e){const n=await It(t),r=Kn(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${yt(t.appConfig)}/${e.token}`,s)).json()}catch(i){throw W.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(o.error){const i=o.error.message;throw W.create("token-update-failed",{errorInfo:i})}if(!o.token)throw W.create("token-update-no-token");return o.token}async function Wn(t,e){const r={method:"DELETE",headers:await It(t)};try{const o=await(await fetch(`${yt(t.appConfig)}/${e}`,r)).json();if(o.error){const i=o.error.message;throw W.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw W.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function yt({projectId:t}){return`${Po}/projects/${t}/registrations`}async function It({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Kn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==zn&&(s.web.applicationPubKey=r),s}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=7*24*60*60*1e3;async function Yo(t){const e=await Qo(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:ee(e.getKey("auth")),p256dh:ee(e.getKey("p256dh"))},r=await Un(t.firebaseDependencies);if(r){if(ei(r.subscriptionOptions,n))return Date.now()>=r.createTime+Jo?Zo(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Wn(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return nn(t.firebaseDependencies,n)}else return nn(t.firebaseDependencies,n)}async function Xo(t){const e=await Un(t.firebaseDependencies);e&&(await Wn(t.firebaseDependencies,e.token),await Uo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Zo(t,e){try{const n=await Go(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await _t(t.firebaseDependencies,r),n}catch(n){throw await Xo(t),n}}async function nn(t,e){const r={token:await Ko(t,e),createTime:Date.now(),subscriptionOptions:e};return await _t(t,r),r.token}async function Qo(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ho(e)})}function ei(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,o=e.p256dh===t.p256dh;return n&&r&&s&&o}/**
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
 */function rn(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ti(e,t),ni(e,t),ri(e,t),e}function ti(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const o=e.notification.icon;o&&(t.notification.icon=o)}function ni(t,e){e.data&&(t.data=e.data)}function ri(t,e){var n,r,s,o,i;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=e.notification)===null||o===void 0?void 0:o.click_action;a&&(t.fcmOptions.link=a);const u=(i=e.fcmOptions)===null||i===void 0?void 0:i.analytics_label;u&&(t.fcmOptions.analyticsLabel=u)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(t){return typeof t=="object"&&!!t&&qn in t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */function oi(t){if(!t||!t.options)throw Ye("App Configuration Object");if(!t.name)throw Ye("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ye(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ye(t){return W.create("missing-app-config-values",{valueName:t})}/**
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
 */async function ai(t){try{t.swRegistration=await navigator.serviceWorker.register(Mo,{scope:No}),t.swRegistration.update().catch(()=>{})}catch(e){throw W.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function ci(t,e){if(!e&&!t.swRegistration&&await ai(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw W.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Jn(t,e){if(!navigator)throw W.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw W.create("permission-blocked");return await li(t,e==null?void 0:e.vapidKey),await ci(t,e==null?void 0:e.serviceWorkerRegistration),Yo(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(t,e,n){const r=fi(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[qn],message_name:n[Ro],message_time:n[Lo],message_device_time:Math.floor(Date.now()/1e3)})}function fi(t){switch(t){case Te.NOTIFICATION_CLICKED:return"notification_open";case Te.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function di(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===Te.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(rn(n)):t.onMessageHandler.next(rn(n)));const r=n.data;si(r)&&r[Vo]==="1"&&await ui(t,n.messageType,r)}const sn="@firebase/messaging",on="0.12.5";/**
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
 */async function mi(){try{await bn()}catch{return!1}return typeof window<"u"&&mn()&&kr()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function bi(t,e){if(!navigator)throw W.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function vi(t=Ds()){return mi().then(e=>{if(!e)throw W.create("unsupported-browser")},e=>{throw W.create("indexed-db-unsupported")}),dt(lt(t),"messaging").getImmediate()}async function _i(t,e){return t=lt(t),Jn(t,e)}function wi(t,e){return t=lt(t),bi(t,e)}gi();function an(t){let e,n,r,s,o,i,a,u,l,f;return a=new fn({props:{func:t[9]}}),{c(){e=w("div"),n=w("div"),r=w("img"),o=R(),i=w("div"),K(a.$$.fragment),this.h()},l(c){e=y(c,"DIV",{class:!0});var h=O(e);n=y(h,"DIV",{class:!0});var d=O(n);r=y(d,"IMG",{src:!0,width:!0,style:!0}),o=L(d),i=y(d,"DIV",{class:!0});var v=O(i);G(a.$$.fragment,v),v.forEach(p),d.forEach(p),h.forEach(p),this.h()},h(){ie(r.src,s="/cancel.png")||g(r,"src",s),g(r,"width","30"),E(r,"float","right"),g(i,"class","content"),g(n,"class","dialog-box svelte-108anuc"),g(e,"class","overlay svelte-108anuc")},m(c,h){M(c,e,h),_(e,n),_(n,r),_(n,o),_(n,i),J(a,i,null),u=!0,l||(f=[Z(r,"click",t[7]),Z(n,"click",Di),Z(e,"click",t[7])],l=!0)},p:_e,i(c){u||(j(a.$$.fragment,c),u=!0)},o(c){z(a.$$.fragment,c),u=!1},d(c){c&&p(e),Y(a),l=!1,at(f)}}}function cn(t){let e,n,r='<li class="svelte-108anuc"><a href="/" class="svelte-108anuc">Home</a></li> <li class="svelte-108anuc"><a href="/courses" class="svelte-108anuc">courses</a></li> <li class="svelte-108anuc"><a href="/fellowships" class="svelte-108anuc">fellowships</a></li> <li class="svelte-108anuc"><a href="/blogs" class="svelte-108anuc">Blog</a></li> <li class="svelte-108anuc"><a href="/products" class="svelte-108anuc">products</a></li> <li class="svelte-108anuc"><a href="/contact-us" class="svelte-108anuc">Contact us</a></li>',s,o,i,a,u,l,f,c,h,d,v,D,T,A;function m(I,C){return I[5]?Ii:yi}let k=m(t),V=k(t);return a=new or({}),{c(){e=w("nav"),n=w("ul"),n.innerHTML=r,s=R(),V.c(),o=R(),i=w("div"),K(a.$$.fragment),u=R(),l=w("div"),f=w("div"),c=w("button"),this.h()},l(I){e=y(I,"NAV",{id:!0,style:!0,class:!0});var C=O(e);n=y(C,"UL",{class:!0,"data-svelte-h":!0}),X(n)!=="svelte-1iz39pt"&&(n.innerHTML=r),s=L(C),V.l(C),o=L(C),i=y(C,"DIV",{class:!0});var b=O(i);G(a.$$.fragment,b),b.forEach(p),u=L(C),l=y(C,"DIV",{id:!0,class:!0});var B=O(l);f=y(B,"DIV",{id:!0,class:!0});var S=O(f);c=y(S,"BUTTON",{id:!0,class:!0}),O(c).forEach(p),S.forEach(p),B.forEach(p),C.forEach(p),this.h()},h(){g(n,"class","svelte-108anuc"),g(i,"class","mmm svelte-108anuc"),g(c,"id","circle3LOGO"),g(c,"class",h=ve(t[2]?"not scrolled":"not")+" svelte-108anuc"),g(f,"id","circle2"),g(f,"class",d=ve(t[2]?"not scrolled":"not")+" svelte-108anuc"),g(l,"id","circle1"),g(l,"class",v=ve(t[2]?"not scrolled":"not")+" svelte-108anuc"),g(e,"id",D=t[0]?t[2]?"scrolledT":"T":t[2]?"scrolled":""),g(e,"style",T=t[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${t[4]}), rgba(57, 135, 155,${t[4]}));`:""),g(e,"class","svelte-108anuc")},m(I,C){M(I,e,C),_(e,n),_(e,s),V.m(e,null),_(e,o),_(e,i),J(a,i,null),_(e,u),_(e,l),_(l,f),_(f,c),A=!0},p(I,C){k===(k=m(I))&&V?V.p(I,C):(V.d(1),V=k(I),V&&(V.c(),V.m(e,o))),(!A||C&4&&h!==(h=ve(I[2]?"not scrolled":"not")+" svelte-108anuc"))&&g(c,"class",h),(!A||C&4&&d!==(d=ve(I[2]?"not scrolled":"not")+" svelte-108anuc"))&&g(f,"class",d),(!A||C&4&&v!==(v=ve(I[2]?"not scrolled":"not")+" svelte-108anuc"))&&g(l,"class",v),(!A||C&5&&D!==(D=I[0]?I[2]?"scrolledT":"T":I[2]?"scrolled":""))&&g(e,"id",D),(!A||C&17&&T!==(T=I[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${I[4]}), rgba(57, 135, 155,${I[4]}));`:""))&&g(e,"style",T)},i(I){A||(j(a.$$.fragment,I),A=!0)},o(I){z(a.$$.fragment,I),A=!1},d(I){I&&p(e),V.d(),Y(a)}}}function yi(t){let e,n,r="Login",s,o;return{c(){e=w("div"),n=w("button"),n.textContent=r,this.h()},l(i){e=y(i,"DIV",{style:!0});var a=O(e);n=y(a,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),X(n)!=="svelte-fxc53u"&&(n.textContent=r),a.forEach(p),this.h()},h(){g(n,"class","button svelte-108anuc"),E(n,"background-color","transparent"),E(n,"color","white"),E(n,"border","1px solid white"),E(e,"position","relative"),E(e,"right","20px")},m(i,a){M(i,e,a),_(e,n),s||(o=Z(n,"click",t[6]),s=!0)},p:_e,d(i){i&&p(e),s=!1,o()}}}function Ii(t){let e,n='<img src="/profs.png" width="30"/> <img src="/nots.png" width="30"/>';return{c(){e=w("div"),e.innerHTML=n,this.h()},l(r){e=y(r,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(e)!=="svelte-1t9hkqi"&&(e.innerHTML=n),this.h()},h(){g(e,"class","row"),E(e,"margin-right","10px")},m(r,s){M(r,e,s)},p:_e,d(r){r&&p(e)}}}function Ei(t){let e,n,r,s,o,i,a,u,l=t[1]&&an(t),f=t[3]&&cn(t);return{c(){l&&l.c(),e=R(),n=w("header"),r=w("div"),s=w("h1"),o=R(),f&&f.c(),this.h()},l(c){l&&l.l(c),e=L(c),n=y(c,"HEADER",{class:!0});var h=O(n);r=y(h,"DIV",{style:!0});var d=O(r);s=y(d,"H1",{}),O(s).forEach(p),d.forEach(p),o=L(h),f&&f.l(h),h.forEach(p),this.h()},h(){E(r,"position","absolute"),E(r,"top","-15px"),E(r,"left","15px"),g(n,"class","svelte-108anuc")},m(c,h){l&&l.m(c,h),M(c,e,h),M(c,n,h),_(n,r),_(r,s),_(n,o),f&&f.m(n,null),i=!0,a||(u=Z(s,"click",t[10]),a=!0)},p(c,[h]){c[1]?l?(l.p(c,h),h&2&&j(l,1)):(l=an(c),l.c(),j(l,1),l.m(e.parentNode,e)):l&&(Ee(),z(l,1,1,()=>{l=null}),De()),c[3]?f?(f.p(c,h),h&8&&j(f,1)):(f=cn(c),f.c(),j(f,1),f.m(n,null)):f&&(Ee(),z(f,1,1,()=>{f=null}),De())},i(c){i||(j(l),j(f),i=!0)},o(c){z(l),z(f),i=!1},d(c){c&&(p(e),p(n)),l&&l.d(c),f&&f.d(),a=!1,u()}}}const Di=t=>t.stopPropagation();function ki(t,e,n){let{disableTransparent:r}=e,{enableTransparency:s}=e,o=!1;function i(){n(1,o=!0)}function a(){n(1,o=!1)}let u=!1,l,f=!1,c=0,h=!1;Ce(()=>{n(5,h=!!localStorage.getItem("li")),document.body.addEventListener("click",function(A){console.log(A.target.id),console.log(d),A.target.id!="menuuu"&&A.target.id!="menuio"&&d&&(d=!1)}),l=function(){var A=window.scrollY||document.documentElement.scrollTop,m=document.documentElement.scrollHeight-window.innerHeight,k=A/m*100;return k},n(3,f=!0);const T=()=>{n(2,u=window.scrollY>0),console.log(l()*.01),l()>20?n(4,c=l()*.01+.7):n(4,c=l()*.01)};return window.addEventListener("scroll",T),r||window.addEventListener("scroll",T),document.body.style.overflow=o?"hidden":"auto",()=>{window.removeEventListener("scroll",T),document.body.style.overflow="auto"}});let d=!1;const v=()=>{a()},D=function(){const T=document.createElement("a");T.href="/",T.click()};return t.$$set=T=>{"disableTransparent"in T&&n(8,r=T.disableTransparent),"enableTransparency"in T&&n(0,s=T.enableTransparency)},[s,o,u,f,c,h,i,a,r,v,D]}class Ti extends Ae{constructor(e){super(),$e(this,e,ki,Ei,Se,{disableTransparent:8,enableTransparency:0})}}function ln(t){let e,n,r,s,o,i,a,u,l,f;return a=new fn({props:{func:t[11]}}),{c(){e=w("div"),n=w("div"),r=w("img"),o=R(),i=w("div"),K(a.$$.fragment),this.h()},l(c){e=y(c,"DIV",{class:!0});var h=O(e);n=y(h,"DIV",{class:!0});var d=O(n);r=y(d,"IMG",{src:!0}),o=L(d),i=y(d,"DIV",{class:!0});var v=O(i);G(a.$$.fragment,v),v.forEach(p),d.forEach(p),h.forEach(p),this.h()},h(){ie(r.src,s="/close.png")||g(r,"src",s),g(i,"class","content svelte-1eg9cy6"),g(n,"class","dialog-box svelte-1eg9cy6"),g(e,"class","overlay svelte-1eg9cy6")},m(c,h){M(c,e,h),_(e,n),_(n,r),_(n,o),_(n,i),J(a,i,null),u=!0,l||(f=[Z(r,"click",t[10]),Z(n,"click",Ni),Z(e,"click",t[10])],l=!0)},p(c,h){const d={};h&2&&(d.func=c[11]),a.$set(d)},i(c){u||(j(a.$$.fragment,c),u=!0)},o(c){z(a.$$.fragment,c),u=!1},d(c){c&&p(e),Y(a),l=!1,at(f)}}}function Si(t){let e,n;return e=new rr({}),{c(){K(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p:_e,i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Ci(t){let e,n;return e=new nr({props:{ID:t[3].id,c:!t[2],description:t[3].text?t[3].text:"",title:t[3].title,duration:t[3].duration,func:t[14]}}),{c(){K(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&8&&(o.ID=r[3].id),s&4&&(o.c=!r[2]),s&8&&(o.description=r[3].text?r[3].text:""),s&8&&(o.title=r[3].title),s&8&&(o.duration=r[3].duration),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Ai(t){let e,n;return e=new un({props:{f:!0,cardsData:[...t[5]]}}),{c(){K(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&32&&(o.cardsData=[...r[5]]),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function $i(t){let e,n;return e=new un({props:{f:!1,cardsData:[...t[4]]}}),{c(){K(e.$$.fragment)},l(r){G(e.$$.fragment,r)},m(r,s){J(e,r,s),n=!0},p(r,s){const o={};s&16&&(o.cardsData=[...r[4]]),e.$set(o)},i(r){n||(j(e.$$.fragment,r),n=!0)},o(r){z(e.$$.fragment,r),n=!1},d(r){Y(e,r)}}}function Oi(t){let e,n="Fellowships",r,s,o,i,a="Courses",u,l,f,c,h="Blogs",d,v,D,T,A;return s=new St({props:{f:!0,onClick:t[12],cardsData:[...t[5]]}}),l=new St({props:{f:!1,onClick:t[13],cardsData:[...t[4]]}}),v=new fr({props:{blogs:t[7]}}),T=new pr({props:{data:t[6]}}),{c(){e=w("div"),e.textContent=n,r=R(),K(s.$$.fragment),o=R(),i=w("div"),i.textContent=a,u=R(),K(l.$$.fragment),f=R(),c=w("div"),c.textContent=h,d=R(),K(v.$$.fragment),D=R(),K(T.$$.fragment),this.h()},l(m){e=y(m,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(e)!=="svelte-1d5amtm"&&(e.textContent=n),r=L(m),G(s.$$.fragment,m),o=L(m),i=y(m,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(i)!=="svelte-1qkyua"&&(i.textContent=a),u=L(m),G(l.$$.fragment,m),f=L(m),c=y(m,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),X(c)!=="svelte-163eaxn"&&(c.textContent=h),d=L(m),G(v.$$.fragment,m),D=L(m),G(T.$$.fragment,m),this.h()},h(){g(e,"class","title"),E(e,"font-size","30px"),E(e,"margin-left","50px"),g(i,"class","title"),E(i,"font-size","30px"),E(i,"margin-left","50px"),g(c,"class","title"),E(c,"font-size","30px"),E(c,"margin","auto"),E(c,"text-align","center"),E(c,"position","relative"),E(c,"top","27px")},m(m,k){M(m,e,k),M(m,r,k),J(s,m,k),M(m,o,k),M(m,i,k),M(m,u,k),J(l,m,k),M(m,f,k),M(m,c,k),M(m,d,k),J(v,m,k),M(m,D,k),J(T,m,k),A=!0},p(m,k){const V={};k&32&&(V.cardsData=[...m[5]]),s.$set(V);const I={};k&16&&(I.cardsData=[...m[4]]),l.$set(I);const C={};k&128&&(C.blogs=m[7]),v.$set(C);const b={};k&64&&(b.data=m[6]),T.$set(b)},i(m){A||(j(s.$$.fragment,m),j(l.$$.fragment,m),j(v.$$.fragment,m),j(T.$$.fragment,m),A=!0)},o(m){z(s.$$.fragment,m),z(l.$$.fragment,m),z(v.$$.fragment,m),z(T.$$.fragment,m),A=!1},d(m){m&&(p(e),p(r),p(o),p(i),p(u),p(f),p(c),p(d),p(D)),Y(s,m),Y(l,m),Y(v,m),Y(T,m)}}}function Bi(t){let e,n,r,s,o,i,a,u="Echo Dental Training Unit",l,f,c,h,d,v,D,T,A,m,k=t[9]&&ln(t);n=new Ti({props:{enableTransparency:!0}});const V=[Oi,$i,Ai,Ci,Si],I=[];function C(b,B){return b[1]==0?0:b[1]==1?1:b[1]==2?2:b[1]==3?3:4}return v=C(t),D=I[v]=V[v](t),A=new ir({props:{scrollBoxHeight:t[8]+160}}),{c(){k&&k.c(),e=R(),K(n.$$.fragment),r=R(),s=w("div"),o=w("div"),i=w("div"),a=w("p"),a.textContent=u,l=R(),f=w("p"),c=Me(t[0]),h=R(),d=w("div"),D.c(),T=R(),K(A.$$.fragment),this.h()},l(b){k&&k.l(b),e=L(b),G(n.$$.fragment,b),r=L(b),s=y(b,"DIV",{class:!0});var B=O(s);o=y(B,"DIV",{class:!0});var S=O(o);i=y(S,"DIV",{class:!0});var $=O(i);a=y($,"P",{style:!0,"data-svelte-h":!0}),X(a)!=="svelte-bjo1x6"&&(a.textContent=u),l=L($),f=y($,"P",{style:!0});var N=O(f);c=Ne(N,t[0]),N.forEach(p),$.forEach(p),S.forEach(p),B.forEach(p),h=L(b),d=y(b,"DIV",{class:!0});var H=O(d);D.l(H),H.forEach(p),T=L(b),G(A.$$.fragment,b),this.h()},h(){E(a,"position","relative"),E(a,"right","70px"),E(a,"font-size","2.5em"),E(a,"margin-bottom","-15px"),g(f,"style","font-weight: 300; text-align: left; width: 70vw; font-size: 20px; /* height: 14vh; */ text-overflow: ellipsis; height: 257px; overflow-y: scroll;"),g(i,"class","image-text svelte-1eg9cy6"),g(o,"class","image-overlay svelte-1eg9cy6"),g(s,"class","header-image svelte-1eg9cy6"),g(d,"class","scroll-box svelte-1eg9cy6")},m(b,B){k&&k.m(b,B),M(b,e,B),J(n,b,B),M(b,r,B),M(b,s,B),_(s,o),_(o,i),_(i,a),_(i,l),_(i,f),_(f,c),M(b,h,B),M(b,d,B),I[v].m(d,null),M(b,T,B),J(A,b,B),m=!0},p(b,[B]){b[9]?k?(k.p(b,B),B&512&&j(k,1)):(k=ln(b),k.c(),j(k,1),k.m(e.parentNode,e)):k&&(Ee(),z(k,1,1,()=>{k=null}),De()),(!m||B&1)&&ct(c,b[0]);let S=v;v=C(b),v===S?I[v].p(b,B):(Ee(),z(I[S],1,1,()=>{I[S]=null}),De(),D=I[v],D?D.p(b,B):(D=I[v]=V[v](b),D.c()),j(D,1),D.m(d,null));const $={};B&256&&($.scrollBoxHeight=b[8]+160),A.$set($)},i(b){m||(j(k),j(n.$$.fragment,b),j(D),j(A.$$.fragment,b),m=!0)},o(b){z(k),z(n.$$.fragment,b),z(D),z(A.$$.fragment,b),m=!1},d(b){b&&(p(e),p(r),p(s),p(h),p(d),p(T)),k&&k.d(b),Y(n,b),I[v].d(),Y(A,b)}}}function Mi(){return new Promise(t=>{const e=/./;e.toString=function(){t(!0)},console.log("%c",e)})}const Ni=t=>t.stopPropagation();function Pi(t,e,n){let r="",s=0;async function o(S,$,N){const H=await fetch("https://dentists-backend.onrender.com/api/"+S,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify($)});if(!H.ok)throw sr("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${H.status}`);const q=await H.json();return N&&N(),q}let i=!1;async function a(){o("n/gp").then(S=>{S=S.d,n(6,v=S.map($=>Object({title:$.productName,text:"Price : "+$.productPrice+" IQD",src:"https://dentists-iq.s3.amazonaws.com/products/"+$.productID+"/0",discount:$.discount})))})}async function u(){o("n/gc").then(S=>{S=S.d,n(4,h=S.map($=>Object({title:$.courseName,id:$.courseID,text:$.courseDetails,duration:$.courseDuration,src:"https://dentists-iq.s3.amazonaws.com/courses/"+$.courseID+"/0",clickHandler:()=>{const N=document.createElement("a");N.href="/courses/"+$.courseID,N.click(),$.courseID,n(2,i=!1)}}))),console.log(h)})}let l;async function f(){o("n/gf").then(S=>{S=S.d,n(5,d=S.map($=>Object({id:$.fellowshipID,title:$.fellowshipName,duration:$.fellowshipDuration,text:$.fellowshipDetails,src:"https://dentists-iq.s3.amazonaws.com/fellowships/"+$.fellowshipID+"/0",clickHandler:()=>{$.fellowshipID,n(2,i=!0)}})))})}async function c(){o("n/gb").then(S=>{S=S.d,n(7,D=S.map($=>Object({id:$.blogID,text:$.blogDetails,title:$.title,src:"https://dentists-iq.s3.amazonaws.com/blogs/"+$.blogID,clickHandler:()=>{}})))})}let h=[],d=[],v=[],D=[];function T(){const S=document.querySelector(".scroll-box");S&&n(8,A=Number(getComputedStyle(S).height.split("px")[0]))}let A=0;Ce(()=>{document.body.addEventListener("click",function(q){console.log(q.target.id),console.log(V),q.target.id!="menuuu"&&q.target.id!="menuio"&&V&&(V=!1)}),setInterval(()=>{T()},500),o("aus").then(q=>{n(0,r=q.d)}),window.addEventListener("resize",T),T();const $=wn({apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"}),N=vi($);_i(N,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(q=>{console.log(q)}),wi(N,q=>{console.log("A NEW NOTIFICATIONS IS HERE"),console.log(q)}),Promise.all([u(),f(),c(),a()]).then(()=>{addEventListener("ocd",q=>{console.log(q.detail),q.detail.f?(console.log(d),console.log(q.detail.id),n(3,l=d.filter(Q=>Q.id==q.detail.id)[0])):n(3,l=h.filter(Q=>Q.id==q.detail.id)[0])})});const H=()=>{};return window.addEventListener("scroll",H),document.body.style.overflow=m?"hidden":"auto",()=>{window.removeEventListener("scroll",H),window.removeEventListener("resize",T),document.body.style.overflow="auto"}}),Xn(()=>{T()});let m=!1;function k(){n(9,m=!1)}Mi().then(S=>{S||console.log("Developer tools are closed.")});let V=!1;return[r,s,i,l,h,d,v,D,A,m,k,()=>{n(1,s=4),k()},function(){const S=document.createElement("a");S.href="/fellowships",S.click()},function(){const S=document.createElement("a");S.href="/courses",S.click()},function(){const S=document.createElement("a");S.href="/contact-us",S.click()}]}class Xi extends Ae{constructor(e){super(),$e(this,e,Pi,Bi,Se,{})}}export{Xi as component};
