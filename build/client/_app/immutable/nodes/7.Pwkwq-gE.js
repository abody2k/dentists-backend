const __vite__fileDeps=["../chunks/Loading.qKoqzdDZ.js","../chunks/scheduler.C7Xo_3aa.js","../chunks/index.NYh16Rov.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as X}from"../chunks/preload-helper.D6kgxu3v.js";import{s as G,b as H,e as k,h as N,c as B,f as O,g as K,d as D,j as E,r as m,i as j,k as y,l as Q,o as Y,a as J,m as Z}from"../chunks/scheduler.C7Xo_3aa.js";import{S as x,i as ee,c as C,a as L,m as V,t as h,b as w,e as S,d as z,g as P}from"../chunks/index.NYh16Rov.js";import{e as M}from"../chunks/each.DGNUWULW.js";import{B as te}from"../chunks/Bar.BCgXY4Hk.js";import{B as U}from"../chunks/BlogCard.CY8HnhA4.js";/* empty css                                                   */import{s as T,a as ne}from"../chunks/not.CMcaOXzY.js";/* empty css                                                     */import le from"../chunks/NotificationBubble.DP7fIY4U.js";function W(a,o,r){const n=a.slice();return n[10]=o[r],n}function A(a){let o,r;return o=new U({props:{makeNew:a[1],uploadHandler:a[5],cancelHandler:a[6]}}),{c(){C(o.$$.fragment)},l(n){L(o.$$.fragment,n)},m(n,e){V(o,n,e),r=!0},p(n,e){const l={};e&2&&(l.makeNew=n[1]),e&3&&(l.uploadHandler=n[5]),e&2&&(l.cancelHandler=n[6]),o.$set(l)},i(n){r||(h(o.$$.fragment,n),r=!0)},o(n){w(o.$$.fragment,n),r=!1},d(n){z(o,n)}}}function q(a){let o,r,n=M(a[0].reverse()),e=[];for(let t=0;t<n.length;t+=1)e[t]=R(W(a,n,t));const l=t=>w(e[t],1,1,()=>{e[t]=null});return{c(){for(let t=0;t<e.length;t+=1)e[t].c();o=J()},l(t){for(let s=0;s<e.length;s+=1)e[s].l(t);o=J()},m(t,s){for(let c=0;c<e.length;c+=1)e[c]&&e[c].m(t,s);j(t,o,s),r=!0},p(t,s){if(s&5){n=M(t[0].reverse());let c;for(c=0;c<n.length;c+=1){const b=W(t,n,c);e[c]?(e[c].p(b,s),h(e[c],1)):(e[c]=R(b),e[c].c(),h(e[c],1),e[c].m(o.parentNode,o))}for(P(),c=n.length;c<e.length;c+=1)l(c);S()}},i(t){if(!r){for(let s=0;s<n.length;s+=1)h(e[s]);r=!0}},o(t){e=e.filter(Boolean);for(let s=0;s<e.length;s+=1)w(e[s]);r=!1},d(t){t&&D(o),Z(e,t)}}}function R(a){let o,r;function n(...l){return a[7](a[10],...l)}function e(...l){return a[8](a[10],...l)}return o=new U({props:{state:1,title:a[10].title,ID:a[10].ID,date:new Date(a[10].date),saveHandler:n,deleteHandler:e,details:a[10].blogDetails,url:"https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+a[10].blogID,cancelHandler:ae}}),{c(){C(o.$$.fragment)},l(l){L(o.$$.fragment,l)},m(l,t){V(o,l,t),r=!0},p(l,t){a=l;const s={};t&1&&(s.title=a[10].title),t&1&&(s.ID=a[10].ID),t&1&&(s.date=new Date(a[10].date)),t&1&&(s.saveHandler=n),t&1&&(s.deleteHandler=e),t&1&&(s.details=a[10].blogDetails),t&1&&(s.url="https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+a[10].blogID),o.$set(s)},i(l){r||(h(o.$$.fragment,l),r=!0)},o(l){w(o.$$.fragment,l),r=!1},d(l){z(o,l)}}}function oe(a){let o,r,n,e,l,t,s='Add New Post <span style="font-size: 20px;" class="svelte-13vb4iy">+</span>',c,b,$,I,d,_,g;o=new te({props:{title:"Blog"}});let i=a[1]&&A(a),f=a[0].length>0&&q(a);return{c(){C(o.$$.fragment),r=H(),n=k("div"),e=k("div"),l=k("div"),t=k("button"),t.innerHTML=s,c=H(),b=k("div"),$=H(),i&&i.c(),I=H(),f&&f.c(),this.h()},l(u){L(o.$$.fragment,u),r=N(u),n=B(u,"DIV",{class:!0});var p=O(n);e=B(p,"DIV",{style:!0,class:!0});var v=O(e);l=B(v,"DIV",{style:!0,class:!0});var F=O(l);t=B(F,"BUTTON",{class:!0,style:!0,"data-svelte-h":!0}),K(t)!=="svelte-tobbdy"&&(t.innerHTML=s),F.forEach(D),c=N(v),b=B(v,"DIV",{style:!0,class:!0}),O(b).forEach(D),$=N(v),i&&i.l(v),I=N(v),f&&f.l(v),v.forEach(D),p.forEach(D),this.h()},h(){E(t,"class","blogBtn svelte-13vb4iy"),m(t,"width","fit-content"),m(l,"width","100%"),m(l,"margin","50px 0"),m(l,"display","flex"),m(l,"justify-content","center"),E(l,"class","svelte-13vb4iy"),m(b,"margin-top","120px"),E(b,"class","svelte-13vb4iy"),m(e,"display","flex"),m(e,"justify-content","center"),m(e,"flex-direction","column"),m(e,"gap","40px"),m(e,"align-items","center"),m(e,"justify-content","center"),m(e,"width","100%"),m(e,"display","flex"),m(e,"flex-direction","column"),m(e,"align-items","center"),E(e,"class","svelte-13vb4iy"),E(n,"class","postesCont svelte-13vb4iy")},m(u,p){V(o,u,p),j(u,r,p),j(u,n,p),y(n,e),y(e,l),y(l,t),y(e,c),y(e,b),y(e,$),i&&i.m(e,null),y(e,I),f&&f.m(e,null),d=!0,_||(g=Q(t,"click",a[4]),_=!0)},p(u,[p]){u[1]?i?(i.p(u,p),p&2&&h(i,1)):(i=A(u),i.c(),h(i,1),i.m(e,I)):i&&(P(),w(i,1,1,()=>{i=null}),S()),u[0].length>0?f?(f.p(u,p),p&1&&h(f,1)):(f=q(u),f.c(),h(f,1),f.m(e,null)):f&&(P(),w(f,1,1,()=>{f=null}),S())},i(u){d||(h(o.$$.fragment,u),h(i),h(f),d=!0)},o(u){w(o.$$.fragment,u),w(i),w(f),d=!1},d(u){u&&(D(r),D(n)),z(o,u),i&&i.d(),f&&f.d(),_=!1,g()}}}const ae=()=>{};function se(a,o,r){async function n(d,_,g){const{default:i}=await X(async()=>{const{default:p}=await import("../chunks/Loading.qKoqzdDZ.js");return{default:p}},__vite__mapDeps([0,1,2]),import.meta.url);new i({target:document.getElementById("nots")});const f=await fetch("https://echo-dent.net/api/"+d,{method:"POST",mode:"cors",credentials:"include",headers:{},body:_});if(!f.ok)throw new le({props:{duration:10,msg:"حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"},target:document.getElementById("nots")}),document.getElementById("loadingWindow").remove(),new Error(`HTTP error! Status: ${f.status}`);let u="";try{return u=await f.json(),document.getElementById("loadingWindow").remove(),u}catch{}return g&&g(),document.getElementById("loadingWindow").remove(),u}let{data:e={blogs:[]}}=o,l=[],t=!1;Y(()=>{document.body.style.overflowX="hidden",r(0,l=e.blogs),console.log(l)});const s=()=>{console.log("making new blog"),r(1,t=!0)},c=(d,_,g)=>{let i=new FormData;i.append("body",JSON.stringify({bd:g,title:_})),i.append("files",d),n("a/nb",i).then(f=>{l.push({blogID:f.i,blogDetails:g,title:_,date:new Date}),T("تم انشاء منشور جديد","cornflowerblue")}),r(1,t=!1)},b=()=>{r(1,t=!1)},$=(d,_)=>{let g=new FormData;g.append("body",JSON.stringify(Object({id:d.blogID,bd:d.blogDetails,title:d.title}))),console.log(_),g.append("files",_),n("a/ub",g).then(()=>{T("تم تحديث المنشور","cornflowerblue")})},I=(d,_)=>{let g=new FormData;g.append("body",JSON.stringify(Object({bid:d.blogID}))),console.log(d),ne("هل انت متأكد من حذف المنشور؟",async()=>{await n("a/db",g).then(()=>{T("تم حذف المنشور","cornflowerblue"),r(0,l=l.filter(i=>i!=d))})})};return a.$$set=d=>{"data"in d&&r(3,e=d.data)},[l,t,n,e,s,c,b,$,I]}class he extends x{constructor(o){super(),ee(this,o,se,oe,G,{data:3})}}export{he as component};
