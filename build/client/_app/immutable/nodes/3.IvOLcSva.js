import{s as _e,e as w,t as de,a as x,c as y,b as $,m as he,d as p,f as B,g as W,p as d,h as I,u as ue,i as N,j as v,q as Q,E as tt,l as Ie,y as ge,o as be,n as me,k as pe,r as De,v as ne,I as lt}from"../chunks/scheduler.-OUPI9FG.js";import{S as ke,i as we,t as S,g as ie,d as ae,b as G,c as J,a as K,m as X,e as Z}from"../chunks/index.jRfWhGhs.js";/* empty css                                                     *//* empty css                                                   */import{e as ce,u as st,d as nt}from"../chunks/each.CDLVB7Rj.js";import{C as ot}from"../chunks/Card.D9M49HHQ.js";import{B as rt}from"../chunks/Button.DI0ciwgW.js";/* empty css                                                  */import{G as Ze}from"../chunks/Grid.LT--gKsd.js";import{L as et}from"../chunks/Login.CxH4GpQF.js";import{C as it}from"../chunks/CourseData.CEty4pVx.js";import{C as at}from"../chunks/Contact.bOIySeTF.js";import{n as ct}from"../chunks/not.Dcz1yJl1.js";import"../chunks/TopBar.svelte_svelte_type_style_lang.CqzTktcQ.js";import{F as ft}from"../chunks/Footer.BwO7k7kj.js";import{Q as ut,C as dt,N as ht,S as mt}from"../chunks/CV.CeyziLKJ.js";function He(n,e,t){const l=n.slice();return l[9]=e[t].title,l[10]=e[t].text,l[11]=e[t].src,l[12]=e[t].id,l[13]=e[t].clickHandler,l}function xe(n){let e,t;return e=new ot({props:{f:n[2],id:n[12],title:n[9],text:n[10],src:n[11],clickHandler:n[13],disableBtn:1,noBtn:!0,style:"scroll-snap-align: start;",key:n[9]+n[10]}}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){X(e,l,o),t=!0},p(l,o){const r={};o&4&&(r.f=l[2]),o&1&&(r.id=l[12]),o&1&&(r.title=l[9]),o&1&&(r.text=l[10]),o&1&&(r.src=l[11]),o&1&&(r.clickHandler=l[13]),o&1&&(r.key=l[9]+l[10]),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function vt(n){let e,t,l,o,r,s,a,h,c="All courses   ››",f,i,u,b,T,H,C,L,g='<div>Show all</div> <img src="/back-icon.png"/>',E,R,M,V=ce([...n[0]]),m=[];for(let k=0;k<V.length;k+=1)m[k]=xe(He(n,V,k));const z=k=>G(m[k],1,1,()=>{m[k]=null});return{c(){e=w("div"),t=w("button"),l=de("‹"),r=x(),s=w("div");for(let k=0;k<m.length;k+=1)m[k].c();a=x(),h=w("div"),h.textContent=c,f=x(),i=w("button"),u=de("›"),H=x(),C=w("div"),L=w("button"),L.innerHTML=g,this.h()},l(k){e=y(k,"DIV",{style:!0});var _=$(e);t=y(_,"BUTTON",{class:!0,id:!0});var D=$(t);l=he(D,"‹"),D.forEach(p),r=B(_),s=y(_,"DIV",{class:!0,id:!0});var P=$(s);for(let j=0;j<m.length;j+=1)m[j].l(P);a=B(P),h=y(P,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(h)!=="svelte-bwfjz5"&&(h.textContent=c),f=B(P),i=y(P,"BUTTON",{class:!0,id:!0});var O=$(i);u=he(O,"›"),O.forEach(p),P.forEach(p),_.forEach(p),H=B(k),C=y(k,"DIV",{style:!0});var q=$(C);L=y(q,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),W(L)!=="svelte-2n4iru"&&(L.innerHTML=g),q.forEach(p),this.h()},h(){d(t,"class","scroll-button left hidden svelte-463tgm"),d(t,"id",o="scrollLeftButton"+n[3]),d(h,"class","box svelte-463tgm"),I(h,"font-weight","bold"),d(i,"class",ue("scroll-button right")+" svelte-463tgm"),d(i,"id",b="scrollRightButton"+n[3]),d(s,"class","scroll-container svelte-463tgm"),d(s,"id",T="scrollContainer"+n[3]),I(e,"position","relative"),I(e,"width","100%"),d(L,"class","button svelte-463tgm"),I(L,"display","flex"),I(L,"align-items","center"),I(C,"display","grid"),I(C,"place-items","center"),I(C,"margin-bottom","90px"),I(C,"margin-top","20px")},m(k,_){N(k,e,_),v(e,t),v(t,l),v(e,r),v(e,s);for(let D=0;D<m.length;D+=1)m[D]&&m[D].m(s,null);v(s,a),v(s,h),v(s,f),v(s,i),v(i,u),N(k,H,_),N(k,C,_),v(C,L),E=!0,R||(M=[Q(t,"click",n[4]),Q(i,"click",n[5]),Q(L,"click",function(){tt(n[1])&&n[1].apply(this,arguments)})],R=!0)},p(k,[_]){if(n=k,(!E||_&8&&o!==(o="scrollLeftButton"+n[3]))&&d(t,"id",o),_&5){V=ce([...n[0]]);let D;for(D=0;D<V.length;D+=1){const P=He(n,V,D);m[D]?(m[D].p(P,_),S(m[D],1)):(m[D]=xe(P),m[D].c(),S(m[D],1),m[D].m(s,a))}for(ie(),D=V.length;D<m.length;D+=1)z(D);ae()}(!E||_&8&&b!==(b="scrollRightButton"+n[3]))&&d(i,"id",b),(!E||_&8&&T!==(T="scrollContainer"+n[3]))&&d(s,"id",T)},i(k){if(!E){for(let _=0;_<V.length;_+=1)S(m[_]);E=!0}},o(k){m=m.filter(Boolean);for(let _=0;_<m.length;_+=1)G(m[_]);E=!1},d(k){k&&(p(e),p(H),p(C)),Ie(m,k),R=!1,ge(M)}}}function pt(n){document.getElementById(n).scrollBy({left:-235,behavior:"smooth"})}function gt(n){document.getElementById(n).scrollBy({left:235,behavior:"smooth"})}function _t(n,e,t){let{cardsData:l=[]}=e,{onClick:o}=e,{f:r}=e,{myInd:s}=e;l.length*340,be(()=>{function c(){const f=document.getElementById("scrollContainer"+s),i=document.getElementById("scrollLeftButton"+s),u=document.getElementById("scrollRightButton"+s);f.scrollLeft===0?i.classList.add("hidden"):i.classList.remove("hidden"),f.scrollLeft+f.offsetWidth>=f.scrollWidth?u.classList.add("hidden"):u.classList.remove("hidden")}document.getElementById("scrollContainer"+s).addEventListener("scroll",c),window.onload=c,console.log("THIS IS THE SOURCE"),console.log(l),document.getElementById("row-container")});const a=()=>{pt("scrollContainer"+s),console.log("HAHA")},h=()=>{console.log("haha"),gt("scrollContainer"+s)};return n.$$set=c=>{"cardsData"in c&&t(0,l=c.cardsData),"onClick"in c&&t(1,o=c.onClick),"f"in c&&t(2,r=c.f),"myInd"in c&&t(3,s=c.myInd)},[l,o,r,s,a,h]}class Be extends ke{constructor(e){super(),we(this,e,_t,vt,_e,{cardsData:0,onClick:1,f:2,myInd:3})}}function je(n,e,t){const l=n.slice();return l[12]=e[t],l[14]=t,l}function Me(n,e,t){const l=n.slice();return l[15]=e[t],l[14]=t,l}function Se(n){let e,t;return{c(){e=w("img"),this.h()},l(l){e=y(l,"IMG",{src:!0,alt:!0,id:!0,class:!0}),this.h()},h(){ne(e.src,t=n[15].src+"/0")||d(e,"src",t),d(e,"alt","Neumorphic Picture"),d(e,"id","blog-image"),d(e,"class","rectangular-image svelte-1oyk958")},m(l,o){N(l,e,o)},p(l,o){o&1&&!ne(e.src,t=l[15].src+"/0")&&d(e,"src",t)},d(l){l&&p(e)}}}function ze(n){let e,t=n[14]==n[1]&&Se(n);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,o){t&&t.m(l,o),N(l,e,o)},p(l,o){l[14]==l[1]?t?t.p(l,o):(t=Se(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&p(e),t&&t.d(l)}}}function Pe(n){let e,t,l=n[0][n[1]].title+"",o,r,s=n[0].length>0&&Ne(n);return{c(){e=w("div"),t=w("h2"),o=de(l),r=x(),s&&s.c(),this.h()},l(a){e=y(a,"DIV",{class:!0});var h=$(e);t=y(h,"H2",{style:!0,class:!0});var c=$(t);o=he(c,l),c.forEach(p),r=B(h),s&&s.l(h),h.forEach(p),this.h()},h(){I(t,"margin","-2px 0 -10px 0"),d(t,"class","svelte-1oyk958"),d(e,"class","captionCont svelte-1oyk958")},m(a,h){N(a,e,h),v(e,t),v(t,o),v(e,r),s&&s.m(e,null)},p(a,h){h&3&&l!==(l=a[0][a[1]].title+"")&&De(o,l),a[0].length>0?s?s.p(a,h):(s=Ne(a),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},d(a){a&&p(e),s&&s.d()}}}function Ne(n){let e,t=n[0][n[1]].text+"",l;return{c(){e=w("p"),l=de(t),this.h()},l(o){e=y(o,"P",{class:!0});var r=$(e);l=he(r,t),r.forEach(p),this.h()},h(){d(e,"class","svelte-1oyk958")},m(o,r){N(o,e,r),v(e,l)},p(o,r){r&3&&t!==(t=o[0][o[1]].text+"")&&De(l,t)},d(o){o&&p(e)}}}function Oe(n,e){let t,l,o,r;function s(){return e[8](e[14])}return{key:n,first:null,c(){t=w("div"),this.h()},l(a){t=y(a,"DIV",{style:!0,class:!0}),$(t).forEach(p),this.h()},h(){I(t,"margin-top","10px"),I(t,"margin-bottom","10px"),d(t,"class",l="dot "+(e[14]===e[1]?"light-dot":"dark-dot")+" svelte-1oyk958"),this.first=t},m(a,h){N(a,t,h),o||(r=Q(t,"click",s),o=!0)},p(a,h){e=a,h&2&&l!==(l="dot "+(e[14]===e[1]?"light-dot":"dark-dot")+" svelte-1oyk958")&&d(t,"class",l)},d(a){a&&p(t),o=!1,r()}}}function bt(n){let e,t,l,o='<img src="/open.png" style="right: 10%;width: 33px; width: 33px;" class="svelte-1oyk958"/>',r,s,a,h=" , ",c,f,i,u,b,T,H="<",C,L,g=">",E,R,M,V=[],m=new Map,z,k,_=ce(n[0]),D=[];for(let j=0;j<_.length;j+=1)D[j]=ze(Me(n,_,j));let P=n[0].length>0&&Pe(n),O=ce([0,1,2]);const q=j=>j[14];for(let j=0;j<3;j+=1){let F=je(n,O,j),U=q(F);m.set(U,V[j]=Oe(U,F))}return{c(){e=w("div"),t=w("div"),l=w("button"),l.innerHTML=o,r=x(),s=w("div"),a=w("div"),c=de(h),f=x(),i=w("div"),u=w("div");for(let j=0;j<D.length;j+=1)D[j].c();b=x(),T=w("div"),T.textContent=H,C=x(),L=w("div"),L.textContent=g,E=x(),P&&P.c(),R=x(),M=w("div");for(let j=0;j<3;j+=1)V[j].c();this.h()},l(j){e=y(j,"DIV",{class:!0});var F=$(e);t=y(F,"DIV",{class:!0});var U=$(t);l=y(U,"BUTTON",{style:!0,class:!0,"data-svelte-h":!0}),W(l)!=="svelte-d8n0jw"&&(l.innerHTML=o),U.forEach(p),r=B(F),s=y(F,"DIV",{style:!0,class:!0});var oe=$(s);a=y(oe,"DIV",{class:!0,style:!0});var fe=$(a);c=he(fe,h),fe.forEach(p),oe.forEach(p),f=B(F),i=y(F,"DIV",{class:!0});var le=$(i);u=y(le,"DIV",{class:!0});var te=$(u);for(let re=0;re<D.length;re+=1)D[re].l(te);b=B(te),T=y(te,"DIV",{class:!0,"data-svelte-h":!0}),W(T)!=="svelte-nl1vs9"&&(T.textContent=H),C=B(te),L=y(te,"DIV",{class:!0,"data-svelte-h":!0}),W(L)!=="svelte-dra8cl"&&(L.textContent=g),te.forEach(p),E=B(le),P&&P.l(le),R=B(le),M=y(le,"DIV",{class:!0});var ve=$(M);for(let re=0;re<3;re+=1)V[re].l(ve);ve.forEach(p),le.forEach(p),F.forEach(p),this.h()},h(){I(l,"padding","4px 4px 0px 4px"),I(l,"float","inline-end"),I(l,"right","10%"),I(l,"bottom","7px"),d(l,"class","svelte-1oyk958"),d(t,"class","icon svelte-1oyk958"),d(a,"class","#2e3b6f-title svelte-1oyk958"),I(a,"color","transparent"),I(s,"display","flex"),I(s,"justify-content","space-between"),I(s,"align-items","center"),I(s,"padding","10px"),d(s,"class","svelte-1oyk958"),d(T,"class","nextImageBtn svelte-1oyk958"),d(L,"class","previousImageBtn svelte-1oyk958"),d(u,"class","imageCont svelte-1oyk958"),d(M,"class","dots-container svelte-1oyk958"),d(i,"class","postCard svelte-1oyk958"),d(e,"class","svelte-1oyk958")},m(j,F){N(j,e,F),v(e,t),v(t,l),v(e,r),v(e,s),v(s,a),v(a,c),v(e,f),v(e,i),v(i,u);for(let U=0;U<D.length;U+=1)D[U]&&D[U].m(u,null);v(u,b),v(u,T),v(u,C),v(u,L),v(i,E),P&&P.m(i,null),v(i,R),v(i,M);for(let U=0;U<3;U+=1)V[U]&&V[U].m(M,null);z||(k=[Q(l,"click",n[5]),Q(T,"click",n[6]),Q(L,"click",n[7])],z=!0)},p(j,[F]){if(F&3){_=ce(j[0]);let U;for(U=0;U<_.length;U+=1){const oe=Me(j,_,U);D[U]?D[U].p(oe,F):(D[U]=ze(oe),D[U].c(),D[U].m(u,b))}for(;U<D.length;U+=1)D[U].d(1);D.length=_.length}j[0].length>0?P?P.p(j,F):(P=Pe(j),P.c(),P.m(i,R)):P&&(P.d(1),P=null),F&6&&(O=ce([0,1,2]),V=st(V,F,q,1,j,O,m,M,nt,Oe,null,je))},i:me,o:me,d(j){j&&p(e),Ie(D,j),P&&P.d();for(let F=0;F<3;F+=1)V[F].d();z=!1,ge(k)}}}function kt(n,e,t){let{firstTitle:l="Default Title"}=e,{secondTitle:o="Default Second Title"}=e,{blogs:r=[]}=e;r.length>5&&(r=r.slice(0,6));let s=0;function a(u){console.log(u),t(1,s=u)}be(function(){console.log("THESE ARE THE BLOGS"),console.log(r),document.getElementById("blog-image");function b(){console.log("wack wack"),!(r.length<1)&&t(1,s=(s+1)%r.length)}b(),setInterval(b,7e3)});const h=()=>{location.href="/blogs"},c=()=>{console.log(s),t(1,s=r.indexOf(r.at(s-1))),console.log(s)},f=()=>{t(1,s=(s+1)%r.length)},i=u=>a(u);return n.$$set=u=>{"firstTitle"in u&&t(3,l=u.firstTitle),"secondTitle"in u&&t(4,o=u.secondTitle),"blogs"in u&&t(0,r=u.blogs)},[r,s,a,l,o,h,c,f,i]}class wt extends ke{constructor(e){super(),we(this,e,kt,bt,_e,{firstTitle:3,secondTitle:4,blogs:0})}}function Ge(n,e,t){const l=n.slice();return l[3]=e[t],l[5]=t,l}function Ue(n){let e,t,l,o;return{c(){e=w("div"),t=w("div"),l=w("img"),this.h()},l(r){e=y(r,"DIV",{class:!0});var s=$(e);t=y(s,"DIV",{class:!0,style:!0});var a=$(t);l=y(a,"IMG",{src:!0,style:!0,class:!0}),a.forEach(p),s.forEach(p),this.h()},h(){ne(l.src,o=n[0][n[1]%n[0].length].src)||d(l,"src",o),I(l,"border-radius","10px"),d(l,"class","svelte-1wu1zfy"),d(t,"class","postCard svelte-1wu1zfy"),I(t,"width","270px"),I(t,"height","270px"),I(t,"border-radius","10px"),I(t,"background-color","#e6e7ee"),I(t,"box-shadow","-3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25)"),I(t,"margin-bottom","50px"),d(e,"class","image-card svelte-1wu1zfy")},m(r,s){N(r,e,s),v(e,t),v(t,l)},p(r,s){s&3&&!ne(l.src,o=r[0][r[1]%r[0].length].src)&&d(l,"src",o)},d(r){r&&p(e)}}}function Re(n){let e,t=ce(n[0]),l=[];for(let o=0;o<t.length;o+=1)l[o]=qe(Ge(n,t,o));return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=pe()},l(o){for(let r=0;r<l.length;r+=1)l[r].l(o);e=pe()},m(o,r){for(let s=0;s<l.length;s+=1)l[s]&&l[s].m(o,r);N(o,e,r)},p(o,r){if(r&1){t=ce(o[0]);let s;for(s=0;s<t.length;s+=1){const a=Ge(o,t,s);l[s]?l[s].p(a,r):(l[s]=qe(a),l[s].c(),l[s].m(e.parentNode,e))}for(;s<l.length;s+=1)l[s].d(1);l.length=t.length}},d(o){o&&p(e),Ie(l,o)}}}function Fe(n){let e,t,l,o;return{c(){e=w("div"),t=w("img"),o=x(),this.h()},l(r){e=y(r,"DIV",{class:!0,style:!0});var s=$(e);t=y(s,"IMG",{src:!0,style:!0,class:!0}),s.forEach(p),o=B(r),this.h()},h(){ne(t.src,l=n[0][(n[5]+1)%n[0].length].src)||d(t,"src",l),I(t,"border-radius","10px"),d(t,"class","svelte-1wu1zfy"),d(e,"class","postCard svelte-1wu1zfy"),d(e,"style",`width: 200px;
        height: 200px;
        border-radius: 10px;
        background-color: #e6e7ee;
        box-shadow: -3px -3px 8px 4px rgba(255, 255, 255, 0.9), 3px 3px 8px 4px rgba(0, 0, 0, 0.25);
        margin-bottom: 70px;flex-shrink:0;`)},m(r,s){N(r,e,s),v(e,t),N(r,o,s)},p(r,s){s&1&&!ne(t.src,l=r[0][(r[5]+1)%r[0].length].src)&&d(t,"src",l)},d(r){r&&(p(e),p(o))}}}function qe(n){let e,t=n[5]+1!=n[0].length&&Fe(n);return{c(){t&&t.c(),e=pe()},l(l){t&&t.l(l),e=pe()},m(l,o){t&&t.m(l,o),N(l,e,o)},p(l,o){l[5]+1!=l[0].length?t?t.p(l,o):(t=Fe(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(l){l&&p(e),t&&t.d(l)}}}function yt(n){let e,t,l="Products",o,r,s,a,h,c=`<div class="black-title svelte-1wu1zfy" style="font-size: 20px; position: relative; right: 22px;">Guaranteed or your money back!</div> <div class="small-note svelte-1wu1zfy" style="font-size: 15px;">The best marketing doesn&#39;t feel like marketing.
            It’s important to remember your competitor is only one mouse click away.</div> <div class="big-text svelte-1wu1zfy" style="font-size: 27px;">Take advantage of this special offer</div>`,f,i,u,b,T,H,C,L,g,E="",R,M=n[0].length>=1&&Ue(n),V=n[0].length>1&&Re(n);return C=new rt({props:{text:"Show all",height:"200px",clickHandler:n[2],src:"/back-icon.png"}}),{c(){e=w("div"),t=w("div"),t.textContent=l,o=x(),r=w("div"),s=w("div"),M&&M.c(),a=x(),h=w("div"),h.innerHTML=c,f=x(),i=w("div"),u=w("div"),b=w("div"),V&&V.c(),T=x(),H=w("div"),J(C.$$.fragment),L=x(),g=w("div"),g.innerHTML=E,this.h()},l(m){e=y(m,"DIV",{style:!0});var z=$(e);t=y(z,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(t)!=="svelte-gh7rxu"&&(t.textContent=l),o=B(z),r=y(z,"DIV",{class:!0,style:!0});var k=$(r);s=y(k,"DIV",{class:!0});var _=$(s);M&&M.l(_),a=B(_),h=y(_,"DIV",{class:!0,"data-svelte-h":!0}),W(h)!=="svelte-1k0en3v"&&(h.innerHTML=c),_.forEach(p),f=B(k),i=y(k,"DIV",{style:!0});var D=$(i);u=y(D,"DIV",{style:!0});var P=$(u);b=y(P,"DIV",{class:!0});var O=$(b);V&&V.l(O),O.forEach(p),P.forEach(p),T=B(D),H=y(D,"DIV",{style:!0});var q=$(H);K(C.$$.fragment,q),q.forEach(p),D.forEach(p),L=B(k),g=y(k,"DIV",{class:!0,"data-svelte-h":!0}),W(g)!=="svelte-cpoj1k"&&(g.innerHTML=E),k.forEach(p),z.forEach(p),this.h()},h(){d(t,"class","#2e3b6f-title"),I(t,"font-size","30px"),I(t,"margin","auto"),I(t,"text-align","center"),I(t,"position","relative"),I(t,"color","#2e3b6f"),I(t,"font-weight","bolder"),I(t,"margin-bottom","20px"),d(h,"class","text-container svelte-1wu1zfy"),d(s,"class","first-row svelte-1wu1zfy"),d(b,"class","row-images svelte-1wu1zfy"),I(u,"overflow-x","scroll"),I(u,"scrollbar-width","none"),d(H,"style","/* height: 40px; */ align-self: baseline; margin-left: 10px; position: relative; top: 22px;"),I(i,"display","flex"),d(g,"class","show-call-button svelte-1wu1zfy"),d(r,"class","neumorphic-card svelte-1wu1zfy"),I(r,"height","560px"),I(e,"margin-top","90px")},m(m,z){N(m,e,z),v(e,t),v(e,o),v(e,r),v(r,s),M&&M.m(s,null),v(s,a),v(s,h),v(r,f),v(r,i),v(i,u),v(u,b),V&&V.m(b,null),v(i,T),v(i,H),X(C,H,null),v(r,L),v(r,g),R=!0},p(m,[z]){m[0].length>=1?M?M.p(m,z):(M=Ue(m),M.c(),M.m(s,a)):M&&(M.d(1),M=null),m[0].length>1?V?V.p(m,z):(V=Re(m),V.c(),V.m(b,null)):V&&(V.d(1),V=null)},i(m){R||(S(C.$$.fragment,m),R=!0)},o(m){G(C.$$.fragment,m),R=!1},d(m){m&&p(e),M&&M.d(),V&&V.d(),Z(C)}}}function It(n,e,t){let{data:l=[]}=e,o=0;setInterval(()=>{l.length>1&&t(1,o=(o+1)%l.length)},7e3),be(()=>{console.log(l)});const r=()=>{location.href="/products"};return n.$$set=s=>{"data"in s&&t(0,l=s.data)},[l,o,r]}class Dt extends ke{constructor(e){super(),we(this,e,It,yt,_e,{data:0})}}function Ae(n){let e,t,l,o,r,s,a,h=n[3]&&Qe(n),c=n[4]&&We(n),f=!n[1]&&!n[3]&&!n[4]&&Ye(n),i=n[1]&&Je();return{c(){e=w("div"),h&&h.c(),t=x(),c&&c.c(),l=x(),f&&f.c(),o=x(),i&&i.c(),this.h()},l(u){e=y(u,"DIV",{class:!0});var b=$(e);h&&h.l(b),t=B(b),c&&c.l(b),l=B(b),f&&f.l(b),o=B(b),i&&i.l(b),b.forEach(p),this.h()},h(){d(e,"class","overlay svelte-1fxvopj")},m(u,b){N(u,e,b),h&&h.m(e,null),v(e,t),c&&c.m(e,null),v(e,l),f&&f.m(e,null),v(e,o),i&&i.m(e,null),r=!0,s||(a=Q(e,"click",n[12]),s=!0)},p(u,b){u[3]?h?(h.p(u,b),b&8&&S(h,1)):(h=Qe(u),h.c(),S(h,1),h.m(e,t)):h&&(ie(),G(h,1,1,()=>{h=null}),ae()),u[4]?c?(c.p(u,b),b&16&&S(c,1)):(c=We(u),c.c(),S(c,1),c.m(e,l)):c&&(ie(),G(c,1,1,()=>{c=null}),ae()),!u[1]&&!u[3]&&!u[4]?f?(f.p(u,b),b&26&&S(f,1)):(f=Ye(u),f.c(),S(f,1),f.m(e,o)):f&&(ie(),G(f,1,1,()=>{f=null}),ae()),u[1]?i?b&2&&S(i,1):(i=Je(),i.c(),S(i,1),i.m(e,null)):i&&(ie(),G(i,1,1,()=>{i=null}),ae())},i(u){r||(S(h),S(c),S(f),S(i),r=!0)},o(u){G(h),G(c),G(f),G(i),r=!1},d(u){u&&p(e),h&&h.d(),c&&c.d(),f&&f.d(),i&&i.d(),s=!1,a()}}}function Qe(n){let e,t,l,o,r;return t=new ut({props:{openPDF:n[15],closeDialog:n[16]}}),{c(){e=w("div"),J(t.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var a=$(e);K(t.$$.fragment,a),a.forEach(p),this.h()},h(){d(e,"class","dialog-box svelte-1fxvopj")},m(s,a){N(s,e,a),X(t,e,null),l=!0,o||(r=Q(e,"click",$t),o=!0)},p:me,i(s){l||(S(t.$$.fragment,s),l=!0)},o(s){G(t.$$.fragment,s),l=!1},d(s){s&&p(e),Z(t),o=!1,r()}}}function We(n){let e,t,l,o,r;return t=new dt({props:{username:n[5].username,code:n[5].code,exit:n[17]}}),{c(){e=w("div"),J(t.$$.fragment),this.h()},l(s){e=y(s,"DIV",{class:!0});var a=$(e);K(t.$$.fragment,a),a.forEach(p),this.h()},h(){d(e,"class","dialog-box svelte-1fxvopj")},m(s,a){N(s,e,a),X(t,e,null),l=!0,o||(r=Q(e,"click",Lt),o=!0)},p(s,a){const h={};a&32&&(h.username=s[5].username),a&32&&(h.code=s[5].code),a&56&&(h.exit=s[17]),t.$set(h)},i(s){l||(S(t.$$.fragment,s),l=!0)},o(s){G(t.$$.fragment,s),l=!1},d(s){s&&p(e),Z(t),o=!1,r()}}}function Ye(n){let e,t,l,o,r,s,a,h,c;return s=new et({props:{func:n[18]}}),{c(){e=w("div"),t=w("img"),o=x(),r=w("div"),J(s.$$.fragment),this.h()},l(f){e=y(f,"DIV",{class:!0});var i=$(e);t=y(i,"IMG",{src:!0,width:!0,style:!0}),o=B(i),r=y(i,"DIV",{class:!0});var u=$(r);K(s.$$.fragment,u),u.forEach(p),i.forEach(p),this.h()},h(){ne(t.src,l="/cancel.png")||d(t,"src",l),d(t,"width","30"),I(t,"float","right"),d(r,"class","content"),d(e,"class","dialog-box svelte-1fxvopj")},m(f,i){N(f,e,i),v(e,t),v(e,o),v(e,r),X(s,r,null),a=!0,h||(c=[Q(t,"click",n[12]),Q(e,"click",Vt)],h=!0)},p:me,i(f){a||(S(s.$$.fragment,f),a=!0)},o(f){G(s.$$.fragment,f),a=!1},d(f){f&&p(e),Z(s),h=!1,ge(c)}}}function Je(n){let e,t,l,o,r,s,a="Notifications",h,c,f,i,u='<span style="font-weight: 700;">Note:</span> The notification will be deleted after 10 days.',b,T,H;return c=new ht({}),{c(){e=w("div"),t=w("div"),l=w("img"),r=x(),s=w("h2"),s.textContent=a,h=x(),J(c.$$.fragment),f=x(),i=w("p"),i.innerHTML=u,this.h()},l(C){e=y(C,"DIV",{class:!0});var L=$(e);t=y(L,"DIV",{class:!0});var g=$(t);l=y(g,"IMG",{style:!0,src:!0,alt:!0}),r=B(g),s=y(g,"H2",{style:!0,"data-svelte-h":!0}),W(s)!=="svelte-1c8mtfb"&&(s.textContent=a),h=B(g),K(c.$$.fragment,g),f=B(g),i=y(g,"P",{style:!0,"data-svelte-h":!0}),W(i)!=="svelte-1wvwsu6"&&(i.innerHTML=u),g.forEach(p),L.forEach(p),this.h()},h(){I(l,"position","relative"),I(l,"float","right"),I(l,"margin","5px"),I(l,"width","30px"),ne(l.src,o="/cancel.png")||d(l,"src",o),d(l,"alt","Close"),I(s,"margin","50px 0 5px 5% "),I(i,"font-size","small"),I(i,"margin","5px 5px 5px 5%"),d(t,"class","notificationsWindow svelte-1fxvopj"),d(e,"class","dialog-box svelte-1fxvopj")},m(C,L){N(C,e,L),v(e,t),v(t,l),v(t,r),v(t,s),v(t,h),X(c,t,null),v(t,f),v(t,i),b=!0,T||(H=Q(e,"click",Ht),T=!0)},i(C){b||(S(c.$$.fragment,C),b=!0)},o(C){G(c.$$.fragment,C),b=!1},d(C){C&&p(e),Z(c),T=!1,H()}}}function Ke(n){let e,t,l,o,r,s,a,h='<a href="/courses" class="svelte-1fxvopj">courses</a>',c,f,i='<a href="/fellowships" class="svelte-1fxvopj">fellowships</a>',u,b,T='<a href="/blogs" class="svelte-1fxvopj">Blog</a>',H,C,L='<a href="/products" class="svelte-1fxvopj">products</a>',g,E,R="scanner",M,V,m='<a href="/contact-us" class="svelte-1fxvopj">Contact us</a>',z,k,_,D,P,O,q,j,F,U,oe,fe,le,te,ve,re;function Ee(A,Y){return A[6]?Ct:Et}let ye=Ee(n),se=ye(n);return D=new mt({props:{showScanner:n[23]}}),{c(){e=w("nav"),t=w("ul"),l=w("li"),o=w("a"),r=de("Home"),s=x(),a=w("li"),a.innerHTML=h,c=x(),f=w("li"),f.innerHTML=i,u=x(),b=w("li"),b.innerHTML=T,H=x(),C=w("li"),C.innerHTML=L,g=x(),E=w("li"),E.textContent=R,M=x(),V=w("li"),V.innerHTML=m,z=x(),se.c(),k=x(),_=w("div"),J(D.$$.fragment),P=x(),O=w("div"),q=w("div"),j=w("button"),this.h()},l(A){e=y(A,"NAV",{id:!0,style:!0,class:!0});var Y=$(e);t=y(Y,"UL",{class:!0});var ee=$(t);l=y(ee,"LI",{class:!0});var Ce=$(l);o=y(Ce,"A",{href:!0,class:!0});var Te=$(o);r=he(Te,"Home"),Te.forEach(p),Ce.forEach(p),s=B(ee),a=y(ee,"LI",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-c1pqoy"&&(a.innerHTML=h),c=B(ee),f=y(ee,"LI",{class:!0,"data-svelte-h":!0}),W(f)!=="svelte-bm3nu2"&&(f.innerHTML=i),u=B(ee),b=y(ee,"LI",{class:!0,"data-svelte-h":!0}),W(b)!=="svelte-1u4oy7p"&&(b.innerHTML=T),H=B(ee),C=y(ee,"LI",{class:!0,"data-svelte-h":!0}),W(C)!=="svelte-zhfwvm"&&(C.innerHTML=L),g=B(ee),E=y(ee,"LI",{style:!0,class:!0,"data-svelte-h":!0}),W(E)!=="svelte-410syo"&&(E.textContent=R),M=B(ee),V=y(ee,"LI",{class:!0,"data-svelte-h":!0}),W(V)!=="svelte-1nf3di7"&&(V.innerHTML=m),ee.forEach(p),z=B(Y),se.l(Y),k=B(Y),_=y(Y,"DIV",{class:!0});var $e=$(_);K(D.$$.fragment,$e),$e.forEach(p),P=B(Y),O=y(Y,"DIV",{id:!0,class:!0});var Le=$(O);q=y(Le,"DIV",{id:!0,class:!0});var Ve=$(q);j=y(Ve,"BUTTON",{id:!0,class:!0}),$(j).forEach(p),Ve.forEach(p),Le.forEach(p),Y.forEach(p),this.h()},h(){d(o,"href",localStorage.getItem("t")==0?"/admin":"/"),d(o,"class","svelte-1fxvopj"),d(l,"class","svelte-1fxvopj"),d(a,"class","svelte-1fxvopj"),d(f,"class","svelte-1fxvopj"),d(b,"class","svelte-1fxvopj"),d(C,"class","svelte-1fxvopj"),I(E,"color","white"),d(E,"class","svelte-1fxvopj"),d(V,"class","svelte-1fxvopj"),d(t,"class","svelte-1fxvopj"),d(_,"class","mmm svelte-1fxvopj"),d(j,"id","circle3LOGO"),d(j,"class",F=ue(n[7]?"not scrolled":"not")+" svelte-1fxvopj"),d(q,"id","circle2"),d(q,"class",U=ue(n[7]?"not scrolled":"not")+" svelte-1fxvopj"),d(O,"id","circle1"),d(O,"class",oe=ue(n[7]?"not scrolled":"not")+" svelte-1fxvopj"),d(e,"id",fe=n[0]?n[7]?"scrolledT":"T":n[7]?"scrolled":""),d(e,"style",le=n[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${n[9]}), rgba(57, 135, 155,${n[9]}));`:""),d(e,"class","svelte-1fxvopj")},m(A,Y){N(A,e,Y),v(e,t),v(t,l),v(l,o),v(o,r),v(t,s),v(t,a),v(t,c),v(t,f),v(t,u),v(t,b),v(t,H),v(t,C),v(t,g),v(t,E),v(t,M),v(t,V),v(e,z),se.m(e,null),v(e,k),v(e,_),X(D,_,null),v(e,P),v(e,O),v(O,q),v(q,j),te=!0,ve||(re=[Q(E,"click",n[20]),Q(O,"click",n[24])],ve=!0)},p(A,Y){ye===(ye=Ee(A))&&se?se.p(A,Y):(se.d(1),se=ye(A),se&&(se.c(),se.m(e,k)));const ee={};Y&12&&(ee.showScanner=A[23]),D.$set(ee),(!te||Y&128&&F!==(F=ue(A[7]?"not scrolled":"not")+" svelte-1fxvopj"))&&d(j,"class",F),(!te||Y&128&&U!==(U=ue(A[7]?"not scrolled":"not")+" svelte-1fxvopj"))&&d(q,"class",U),(!te||Y&128&&oe!==(oe=ue(A[7]?"not scrolled":"not")+" svelte-1fxvopj"))&&d(O,"class",oe),(!te||Y&129&&fe!==(fe=A[0]?A[7]?"scrolledT":"T":A[7]?"scrolled":""))&&d(e,"id",fe),(!te||Y&513&&le!==(le=A[0]?`background: linear-gradient(0.25turn, rgba(46, 59, 111,${A[9]}), rgba(57, 135, 155,${A[9]}));`:""))&&d(e,"style",le)},i(A){te||(S(D.$$.fragment,A),te=!0)},o(A){G(D.$$.fragment,A),te=!1},d(A){A&&p(e),se.d(),Z(D),ve=!1,ge(re)}}}function Et(n){let e,t="Login",l,o;return{c(){e=w("button"),e.textContent=t,this.h()},l(r){e=y(r,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),W(e)!=="svelte-ojzc01"&&(e.textContent=t),this.h()},h(){d(e,"class","button svelte-1fxvopj"),I(e,"background-color","transparent"),I(e,"color","white"),I(e,"border","1px solid white"),I(e,"position","relative"),I(e,"right","20px")},m(r,s){N(r,e,s),l||(o=Q(e,"click",n[11]),l=!0)},p:me,d(r){r&&p(e),l=!1,o()}}}function Ct(n){let e,t,l,o,r,s,a,h;return{c(){e=w("div"),t=w("img"),o=x(),r=w("img"),this.h()},l(c){e=y(c,"DIV",{class:!0,style:!0});var f=$(e);t=y(f,"IMG",{src:!0,width:!0}),o=B(f),r=y(f,"IMG",{src:!0,width:!0}),f.forEach(p),this.h()},h(){ne(t.src,l="/nots.png")||d(t,"src",l),d(t,"width","30"),ne(r.src,s="/profs.png")||d(r,"src",s),d(r,"width","30"),d(e,"class","row"),I(e,"margin-right","10px")},m(c,f){N(c,e,f),v(e,t),v(e,o),v(e,r),a||(h=[Q(t,"click",n[21]),Q(r,"click",n[22])],a=!0)},p:me,d(c){c&&p(e),a=!1,ge(h)}}}function Tt(n){let e,t,l,o,r,s,a,h,c=n[2]&&Ae(n),f=n[8]&&!n[10]&&Ke(n);return{c(){c&&c.c(),e=x(),t=w("header"),l=w("div"),o=w("h1"),r=x(),f&&f.c(),this.h()},l(i){c&&c.l(i),e=B(i),t=y(i,"HEADER",{class:!0});var u=$(t);l=y(u,"DIV",{style:!0});var b=$(l);o=y(b,"H1",{}),$(o).forEach(p),b.forEach(p),r=B(u),f&&f.l(u),u.forEach(p),this.h()},h(){I(l,"position","absolute"),I(l,"top","-15px"),I(l,"left","15px"),d(t,"class","svelte-1fxvopj")},m(i,u){c&&c.m(i,u),N(i,e,u),N(i,t,u),v(t,l),v(l,o),v(t,r),f&&f.m(t,null),s=!0,a||(h=Q(o,"click",n[19]),a=!0)},p(i,[u]){i[2]?c?(c.p(i,u),u&4&&S(c,1)):(c=Ae(i),c.c(),S(c,1),c.m(e.parentNode,e)):c&&(ie(),G(c,1,1,()=>{c=null}),ae()),i[8]&&!i[10]?f?(f.p(i,u),u&1280&&S(f,1)):(f=Ke(i),f.c(),S(f,1),f.m(t,null)):f&&(ie(),G(f,1,1,()=>{f=null}),ae())},i(i){s||(S(c),S(f),s=!0)},o(i){G(c),G(f),s=!1},d(i){i&&(p(e),p(t)),c&&c.d(i),f&&f.d(),a=!1,h()}}}const $t=n=>n.stopPropagation(),Lt=n=>n.stopPropagation(),Vt=n=>n.stopPropagation(),Ht=n=>n.stopPropagation();function xt(n,e,t){let{disableTransparent:l}=e,{enableTransparency:o}=e,r=!1,s=!1,a=!1,h=!1,c;function f(){t(2,s=!0),t(1,r=!1)}function i(){t(2,s=!1),t(3,a=!1),t(1,r=!1),t(4,h=!1)}function u(O){t(3,a=!1),t(4,h=!0),t(5,c=O.u)}let b=!1,T=!1,H,C=!1,L=0;be(()=>{t(6,b=!!localStorage.getItem("li")),document.body.addEventListener("click",function(q){console.log(q.target.id),console.log(g),q.target.id!="menuuu"&&q.target.id!="menuio"&&g&&t(10,g=!1)}),H=function(){var q=window.scrollY||document.documentElement.scrollTop,j=document.documentElement.scrollHeight-window.innerHeight,F=q/j*100;return F},t(8,C=!0);const O=()=>{t(7,T=window.scrollY>0),console.log(H()*.01),H()>20?t(9,L=H()*.01+.7):t(9,L=H()*.01)};return window.addEventListener("scroll",O),window.addEventListener("reset",q=>{console.log("screen width has changed"),console.log(q)}),l||window.addEventListener("scroll",O),document.body.style.overflow=s?"hidden":"auto",()=>{window.removeEventListener("scroll",O),document.body.style.overflow="auto"}});let g=!1;const E=O=>{u(O)},R=()=>{i()},M=()=>{t(4,h=!1),t(5,c={}),t(3,a=!1),i()},V=()=>{i()},m=function(){const O=document.createElement("a");O.href="/",O.click()},z=()=>{t(3,a=!0),t(2,s=!0)},k=()=>{t(1,r=!0),t(2,s=!0)},_=()=>{location.href="/profile"},D=()=>{t(3,a=!0),t(2,s=!0)},P=()=>{location.href="/"};return n.$$set=O=>{"disableTransparent"in O&&t(14,l=O.disableTransparent),"enableTransparency"in O&&t(0,o=O.enableTransparency)},[o,r,s,a,h,c,b,T,C,L,g,f,i,u,l,E,R,M,V,m,z,k,_,D,P]}class Bt extends ke{constructor(e){super(),we(this,e,xt,Tt,_e,{disableTransparent:14,enableTransparency:0})}}function Xe(n){let e,t,l,o,r,s,a,h,c,f;return a=new et({props:{func:n[11]}}),{c(){e=w("div"),t=w("div"),l=w("img"),r=x(),s=w("div"),J(a.$$.fragment),this.h()},l(i){e=y(i,"DIV",{class:!0});var u=$(e);t=y(u,"DIV",{class:!0});var b=$(t);l=y(b,"IMG",{src:!0}),r=B(b),s=y(b,"DIV",{class:!0});var T=$(s);K(a.$$.fragment,T),T.forEach(p),b.forEach(p),u.forEach(p),this.h()},h(){ne(l.src,o="/close.png")||d(l,"src",o),d(s,"class","content svelte-1xytnhp"),d(t,"class","dialog-box svelte-1xytnhp"),d(e,"class","overlay svelte-1xytnhp")},m(i,u){N(i,e,u),v(e,t),v(t,l),v(t,r),v(t,s),X(a,s,null),h=!0,c||(f=[Q(l,"click",n[10]),Q(t,"click",Gt),Q(e,"click",n[10])],c=!0)},p(i,u){const b={};u&2&&(b.func=i[11]),a.$set(b)},i(i){h||(S(a.$$.fragment,i),h=!0)},o(i){G(a.$$.fragment,i),h=!1},d(i){i&&p(e),Z(a),c=!1,ge(f)}}}function jt(n){let e,t;return e=new at({}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){X(e,l,o),t=!0},p:me,i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Mt(n){let e,t;return e=new it({props:{ID:n[3].id,c:!n[2],description:n[3].text?n[3].text:"",title:n[3].title,duration:n[3].duration,func:n[14]}}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){X(e,l,o),t=!0},p(l,o){const r={};o&8&&(r.ID=l[3].id),o&4&&(r.c=!l[2]),o&8&&(r.description=l[3].text?l[3].text:""),o&8&&(r.title=l[3].title),o&8&&(r.duration=l[3].duration),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function St(n){let e,t;return e=new Ze({props:{f:!0,cardsData:[...n[5]]}}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){X(e,l,o),t=!0},p(l,o){const r={};o&32&&(r.cardsData=[...l[5]]),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function zt(n){let e,t;return e=new Ze({props:{f:!1,cardsData:[...n[4]]}}),{c(){J(e.$$.fragment)},l(l){K(e.$$.fragment,l)},m(l,o){X(e,l,o),t=!0},p(l,o){const r={};o&16&&(r.cardsData=[...l[4]]),e.$set(r)},i(l){t||(S(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){Z(e,l)}}}function Pt(n){let e,t="Fellowships",l,o,r,s,a="Courses",h,c,f,i,u="Blogs",b,T,H,C,L;return o=new Be({props:{f:!0,myInd:0,onClick:n[12],cardsData:[...n[5]]}}),c=new Be({props:{f:!1,myInd:1,onClick:n[13],cardsData:[...n[4]]}}),T=new wt({props:{blogs:n[7]}}),C=new Dt({props:{data:n[6]}}),{c(){e=w("div"),e.textContent=t,l=x(),J(o.$$.fragment),r=x(),s=w("div"),s.textContent=a,h=x(),J(c.$$.fragment),f=x(),i=w("div"),i.textContent=u,b=x(),J(T.$$.fragment),H=x(),J(C.$$.fragment),this.h()},l(g){e=y(g,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(e)!=="svelte-1d5amtm"&&(e.textContent=t),l=B(g),K(o.$$.fragment,g),r=B(g),s=y(g,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(s)!=="svelte-1qkyua"&&(s.textContent=a),h=B(g),K(c.$$.fragment,g),f=B(g),i=y(g,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),W(i)!=="svelte-163eaxn"&&(i.textContent=u),b=B(g),K(T.$$.fragment,g),H=B(g),K(C.$$.fragment,g),this.h()},h(){d(e,"class","title"),I(e,"font-size","30px"),I(e,"margin-left","50px"),d(s,"class","title"),I(s,"font-size","30px"),I(s,"margin-left","50px"),d(i,"class","title"),I(i,"font-size","30px"),I(i,"margin","auto"),I(i,"text-align","center"),I(i,"position","relative"),I(i,"top","27px")},m(g,E){N(g,e,E),N(g,l,E),X(o,g,E),N(g,r,E),N(g,s,E),N(g,h,E),X(c,g,E),N(g,f,E),N(g,i,E),N(g,b,E),X(T,g,E),N(g,H,E),X(C,g,E),L=!0},p(g,E){const R={};E&32&&(R.cardsData=[...g[5]]),o.$set(R);const M={};E&16&&(M.cardsData=[...g[4]]),c.$set(M);const V={};E&128&&(V.blogs=g[7]),T.$set(V);const m={};E&64&&(m.data=g[6]),C.$set(m)},i(g){L||(S(o.$$.fragment,g),S(c.$$.fragment,g),S(T.$$.fragment,g),S(C.$$.fragment,g),L=!0)},o(g){G(o.$$.fragment,g),G(c.$$.fragment,g),G(T.$$.fragment,g),G(C.$$.fragment,g),L=!1},d(g){g&&(p(e),p(l),p(r),p(s),p(h),p(f),p(i),p(b),p(H)),Z(o,g),Z(c,g),Z(T,g),Z(C,g)}}}function Nt(n){let e,t,l,o,r,s,a,h="Echo Dental Training Unit",c,f,i,u,b,T,H,C,L,g,E=n[9]&&Xe(n);t=new Bt({props:{enableTransparency:!0}});const R=[Pt,zt,St,Mt,jt],M=[];function V(m,z){return m[1]==0?0:m[1]==1?1:m[1]==2?2:m[1]==3?3:4}return T=V(n),H=M[T]=R[T](n),L=new ft({props:{scrollBoxHeight:n[8]+160}}),{c(){E&&E.c(),e=x(),J(t.$$.fragment),l=x(),o=w("div"),r=w("div"),s=w("div"),a=w("p"),a.textContent=h,c=x(),f=w("p"),i=de(n[0]),u=x(),b=w("div"),H.c(),C=x(),J(L.$$.fragment),this.h()},l(m){E&&E.l(m),e=B(m),K(t.$$.fragment,m),l=B(m),o=y(m,"DIV",{class:!0});var z=$(o);r=y(z,"DIV",{class:!0});var k=$(r);s=y(k,"DIV",{class:!0});var _=$(s);a=y(_,"P",{style:!0,"data-svelte-h":!0}),W(a)!=="svelte-bjo1x6"&&(a.textContent=h),c=B(_),f=y(_,"P",{style:!0});var D=$(f);i=he(D,n[0]),D.forEach(p),_.forEach(p),k.forEach(p),z.forEach(p),u=B(m),b=y(m,"DIV",{class:!0});var P=$(b);H.l(P),P.forEach(p),C=B(m),K(L.$$.fragment,m),this.h()},h(){I(a,"position","relative"),I(a,"right","70px"),I(a,"font-size","2.5em"),I(a,"margin-bottom","-15px"),d(f,"style","font-weight: 300; text-align: left; width: 70vw; font-size: 20px; /* height: 14vh; */ text-overflow: ellipsis; height: 257px; overflow-y: scroll; scrollbar-width: none;"),d(s,"class","image-text svelte-1xytnhp"),d(r,"class","image-overlay svelte-1xytnhp"),d(o,"class","header-image svelte-1xytnhp"),d(b,"class","scroll-box svelte-1xytnhp")},m(m,z){E&&E.m(m,z),N(m,e,z),X(t,m,z),N(m,l,z),N(m,o,z),v(o,r),v(r,s),v(s,a),v(s,c),v(s,f),v(f,i),N(m,u,z),N(m,b,z),M[T].m(b,null),N(m,C,z),X(L,m,z),g=!0},p(m,[z]){m[9]?E?(E.p(m,z),z&512&&S(E,1)):(E=Xe(m),E.c(),S(E,1),E.m(e.parentNode,e)):E&&(ie(),G(E,1,1,()=>{E=null}),ae()),(!g||z&1)&&De(i,m[0]);let k=T;T=V(m),T===k?M[T].p(m,z):(ie(),G(M[k],1,1,()=>{M[k]=null}),ae(),H=M[T],H?H.p(m,z):(H=M[T]=R[T](m),H.c()),S(H,1),H.m(b,null));const _={};z&256&&(_.scrollBoxHeight=m[8]+160),L.$set(_)},i(m){g||(S(E),S(t.$$.fragment,m),S(H),S(L.$$.fragment,m),g=!0)},o(m){G(E),G(t.$$.fragment,m),G(H),G(L.$$.fragment,m),g=!1},d(m){m&&(p(e),p(l),p(o),p(u),p(b),p(C)),E&&E.d(m),Z(t,m),M[T].d(),Z(L,m)}}}function Ot(){return new Promise(n=>{const e=/./;e.toString=function(){n(!0)},console.log("%c",e)})}const Gt=n=>n.stopPropagation();function Ut(n,e,t){let l="",o=0;async function r(k,_,D){const P=await fetch("http://3.29.235.228:3000/api/"+k,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(_)});if(!P.ok)throw ct("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${P.status}`);const O=await P.json();return D&&D(),O}let s=!1;async function a(){r("n/gp").then(k=>{k=k.d,t(6,T=k.map(_=>Object({title:_.productName,text:"Price : "+_.productPrice+" IQD",src:"https://echo-dentists.s3.me-central-1.amazonaws.com/products/"+_.productID+"/0",discount:_.discount})))})}async function h(){r("n/gc").then(k=>{k=k.d,t(4,u=k.map(_=>Object({title:_.courseName,id:_.courseID,text:_.courseDetails,duration:_.courseDuration,src:"https://echo-dentists.s3.me-central-1.amazonaws.com/courses/"+_.courseID+"/0",clickHandler:()=>{const D=document.createElement("a");D.href="/courses/"+_.courseID,D.click(),_.courseID,t(2,s=!1)}}))),console.log(u)})}let c;async function f(){r("n/gf").then(k=>{k=k.d,t(5,b=k.map(_=>Object({id:_.fellowshipID,title:_.fellowshipName,duration:_.fellowshipDuration,text:_.fellowshipDetails,src:"https://echo-dentists.s3.me-central-1.amazonaws.com/fellowships/"+_.fellowshipID+"/0",clickHandler:()=>{_.fellowshipID,t(2,s=!0)}})))})}async function i(){r("n/gb").then(k=>{k=k.d,t(7,H=k.map(_=>Object({id:_.blogID,text:_.blogDetails,title:_.title,src:"https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+_.blogID,clickHandler:()=>{}})))})}let u=[],b=[],T=[],H=[];function C(){const k=document.querySelector(".scroll-box");k&&t(8,L=Number(getComputedStyle(k).height.split("px")[0]))}let L=0;be(()=>{localStorage.getItem("li")&&localStorage.getItem("aslklx20002k,777"),document.body.addEventListener("click",function(_){console.log(_.target.id),console.log(R),_.target.id!="menuuu"&&_.target.id!="menuio"&&R&&(R=!1)}),setInterval(()=>{C()},500),r("aus").then(_=>{t(0,l=_.d)}),window.addEventListener("resize",C),C(),Promise.all([h(),f(),i(),a()]).then(()=>{addEventListener("ocd",_=>{console.log(_.detail),_.detail.f?(console.log(b),console.log(_.detail.id),t(3,c=b.filter(D=>D.id==_.detail.id)[0])):t(3,c=u.filter(D=>D.id==_.detail.id)[0])})});const k=()=>{};return window.addEventListener("scroll",k),document.body.style.overflow=g?"hidden":"auto",()=>{window.removeEventListener("scroll",k),window.removeEventListener("resize",C),document.body.style.overflow="auto"}}),lt(()=>{C()});let g=!1;function E(){t(9,g=!1)}Ot().then(k=>{k||console.log("Developer tools are closed.")});let R=!1;return[l,o,s,c,u,b,T,H,L,g,E,()=>{t(1,o=4),E()},function(){const k=document.createElement("a");k.href="/fellowships",k.click()},function(){const k=document.createElement("a");k.href="/courses",k.click()},function(){const k=document.createElement("a");k.href="/contact-us",k.click()}]}class ol extends ke{constructor(e){super(),we(this,e,Ut,Nt,_e,{})}}export{ol as component};