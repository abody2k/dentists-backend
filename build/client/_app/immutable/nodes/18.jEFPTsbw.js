import{s as F,a as j,k as z,f as D,i as E,d as _,o as G,e as q,c as A,b as I,h as B,p as J,j as w,t as O,m as P,q as K,n as T}from"../chunks/scheduler.CiUN_2Ko.js";import{S as L,i as Q,c as $,a as k,m as v,b as h,d as R,t as g,e as b,g as W}from"../chunks/index.koTVZFH-.js";import{C as X}from"../chunks/Course.DhEEK-1r.js";import{n as Y}from"../chunks/not.CVT2I458.js";import{B as S}from"../chunks/ButtonChild.BN5LqL12.js";function Z(r){let t,l,i,s,f,c,u,o,p;return l=new S({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/videos.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المحاضرات</div>
  </div>`,clickHandler:r[9]}}),s=new S({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/sources.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المصادر</div>
  </div>`,clickHandler:r[10]}}),c=new S({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/exams.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">الإمتحانات</div>
  </div>`,clickHandler:r[11]}}),o=new S({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/ppl.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المشتركين</div>
  </div>`,clickHandler:r[12]}}),{c(){t=q("div"),$(l.$$.fragment),i=j(),$(s.$$.fragment),f=j(),$(c.$$.fragment),u=j(),$(o.$$.fragment),this.h()},l(e){t=A(e,"DIV",{style:!0,class:!0});var n=I(t);k(l.$$.fragment,n),i=D(n),k(s.$$.fragment,n),f=D(n),k(c.$$.fragment,n),u=D(n),k(o.$$.fragment,n),n.forEach(_),this.h()},h(){B(t,"display","flex"),B(t,"justify-content","space-around"),J(t,"class","svelte-1op1ils")},m(e,n){E(e,t,n),v(l,t,null),w(t,i),v(s,t,null),w(t,f),v(c,t,null),w(t,u),v(o,t,null),p=!0},p(e,n){const d={};n&1&&(d.clickHandler=e[9]),l.$set(d);const m={};n&1&&(m.clickHandler=e[10]),s.$set(m);const y={};n&1&&(y.clickHandler=e[11]),c.$set(y);const H={};n&1&&(H.clickHandler=e[12]),o.$set(H)},i(e){p||(g(l.$$.fragment,e),g(s.$$.fragment,e),g(c.$$.fragment,e),g(o.$$.fragment,e),p=!0)},o(e){h(l.$$.fragment,e),h(s.$$.fragment,e),h(c.$$.fragment,e),h(o.$$.fragment,e),p=!1},d(e){e&&_(t),b(l),b(s),b(c),b(o)}}}function x(r){let t,l,i="fellowship",s,f,c;return{c(){t=q("button"),l=O("edit current "),s=O(i),this.h()},l(u){t=A(u,"BUTTON",{class:!0});var o=I(t);l=P(o,"edit current "),s=P(o,i),o.forEach(_),this.h()},h(){J(t,"class","svelte-1op1ils")},m(u,o){E(u,t,o),w(t,l),w(t,s),f||(c=K(t,"click",r[8]),f=!0)},p:T,i:T,o:T,d(u){u&&_(t),f=!1,c()}}}function ee(r){let t,l,i,s,f,c;t=new X({props:{data:r[0],expDate:r[7],levels:r[6],archived:r[5],makeAnew:r[4],title:r[1],description:r[2],duration:r[3],duration1:r[3].toString().split(":")[0],duration2:r[3].toString().split(":")[1]}});const u=[x,Z],o=[];function p(e,n){return e[4]?0:1}return i=p(r),s=o[i]=u[i](r),{c(){$(t.$$.fragment),l=j(),s.c(),f=z()},l(e){k(t.$$.fragment,e),l=D(e),s.l(e),f=z()},m(e,n){v(t,e,n),E(e,l,n),o[i].m(e,n),E(e,f,n),c=!0},p(e,[n]){const d={};n&1&&(d.data=e[0]),n&128&&(d.expDate=e[7]),n&64&&(d.levels=e[6]),n&32&&(d.archived=e[5]),n&16&&(d.makeAnew=e[4]),n&2&&(d.title=e[1]),n&4&&(d.description=e[2]),n&8&&(d.duration=e[3]),n&8&&(d.duration1=e[3].toString().split(":")[0]),n&8&&(d.duration2=e[3].toString().split(":")[1]),t.$set(d);let m=i;i=p(e),i===m?o[i].p(e,n):(W(),h(o[m],1,1,()=>{o[m]=null}),R(),s=o[i],s?s.p(e,n):(s=o[i]=u[i](e),s.c()),g(s,1),s.m(f.parentNode,f))},i(e){c||(g(t.$$.fragment,e),g(s),c=!0)},o(e){h(t.$$.fragment,e),h(s),c=!1},d(e){e&&(_(l),_(f)),b(t,e),o[i].d(e)}}}function te(r,t,l){let{data:i}=t,s="",f="",c="",u=!1,o=!1,p=1,e="";G(()=>{(async function(M,U,N){const C=await fetch("http://localhost:3000/api/"+M,{method:"POST",mode:"cors",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify(U)});if(!C.ok)throw Y("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${C.status}`);const V=await C.json();return N&&N(),V})("a/gcf",{id:i.id}).then(a=>{console.log("this is where we are"),console.log(a),l(1,s=a.d.fellowshipName),l(3,c=a.d.fellowshipDuration),l(2,f=a.d.fellowshipDetails),l(5,o=a.d.archived),l(7,e=a.d.expDate),l(6,p=a.d.levels)})});const n=()=>{l(4,u=!1)},d=()=>{const a=document.createElement("a");a.href=`/admin/fellowships/${i.id}/lectures`,a.click()},m=()=>{const a=document.createElement("a");a.href=`/admin/fellowships/${i.id}/chapters`,a.click()},y=()=>{const a=document.createElement("a");a.href=`/admin/fellowships/${i.id}/exams`,a.click()},H=()=>{const a=document.createElement("a");a.href=`/admin/fellowships/${i.id}/users`,a.click()};return r.$$set=a=>{"data"in a&&l(0,i=a.data)},[i,s,f,c,u,o,p,e,n,d,m,y,H]}class ae extends L{constructor(t){super(),Q(this,t,te,ee,F,{data:0})}}export{ae as component};
