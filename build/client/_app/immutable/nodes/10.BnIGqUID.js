import{s as F,a as j,k as N,f as E,i as S,d as _,o as G,e as M,c as O,b as P,h as z,p as U,j as v,t as B,m as q,q as J,n as C}from"../chunks/scheduler.BVAlSgfp.js";import{S as K,i as L,t as d,b as p,d as A,c as g,a as $,m as k,e as b,g as T}from"../chunks/index.B7Z5KU1K.js";/* empty css                                                     */import{f as Q}from"../chunks/not.DlsTAyDt.js";import"../chunks/Bar.CdutgMKg.js";/* empty css                                                       */import{C as R}from"../chunks/Course.VvoLPrby.js";/* empty css                                                     *//* empty css                                                   */import{B as H}from"../chunks/ButtonChild.CNyNlapg.js";function I(c){let n,i;return n=new R({props:{expDate:c[6],archived:c[5],data:c[0],makeAnew:c[4],title:c[1],description:c[2],duration:c[3],duration1:c[3].toString().split(":")[0],levels:c[7],duration2:c[3].toString().split(":")[1]}}),{c(){g(n.$$.fragment)},l(e){$(n.$$.fragment,e)},m(e,s){k(n,e,s),i=!0},p(e,s){const o={};s&64&&(o.expDate=e[6]),s&32&&(o.archived=e[5]),s&1&&(o.data=e[0]),s&16&&(o.makeAnew=e[4]),s&2&&(o.title=e[1]),s&4&&(o.description=e[2]),s&8&&(o.duration=e[3]),s&8&&(o.duration1=e[3].toString().split(":")[0]),s&128&&(o.levels=e[7]),s&8&&(o.duration2=e[3].toString().split(":")[1]),n.$set(o)},i(e){i||(d(n.$$.fragment,e),i=!0)},o(e){p(n.$$.fragment,e),i=!1},d(e){b(n,e)}}}function W(c){let n,i,e,s,o,l,u,a,m;return i=new H({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/videos.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المحاضرات</div>
  </div>`,clickHandler:c[10]}}),s=new H({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/sources.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المصادر</div>
  </div>`,clickHandler:c[11]}}),l=new H({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/exams.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">الإمتحانات</div>
  </div>`,clickHandler:c[12]}}),a=new H({props:{child:`<div style="display: flex;flex-direction:column;gap:30px;justify-content: center;align-items: center;">
    <img src="/ppl.png" width="90">
    <div style="font-size: 26px;color:#2e3b6f">المشتركين</div>
  </div>`,clickHandler:c[13]}}),{c(){n=M("div"),g(i.$$.fragment),e=j(),g(s.$$.fragment),o=j(),g(l.$$.fragment),u=j(),g(a.$$.fragment),this.h()},l(t){n=O(t,"DIV",{style:!0,class:!0});var r=P(n);$(i.$$.fragment,r),e=E(r),$(s.$$.fragment,r),o=E(r),$(l.$$.fragment,r),u=E(r),$(a.$$.fragment,r),r.forEach(_),this.h()},h(){z(n,"display","flex"),z(n,"justify-content","space-around"),U(n,"class","svelte-5m3d92")},m(t,r){S(t,n,r),k(i,n,null),v(n,e),k(s,n,null),v(n,o),k(l,n,null),v(n,u),k(a,n,null),m=!0},p(t,r){const h={};r&1&&(h.clickHandler=t[10]),i.$set(h);const w={};r&1&&(w.clickHandler=t[11]),s.$set(w);const y={};r&1&&(y.clickHandler=t[12]),l.$set(y);const D={};r&1&&(D.clickHandler=t[13]),a.$set(D)},i(t){m||(d(i.$$.fragment,t),d(s.$$.fragment,t),d(l.$$.fragment,t),d(a.$$.fragment,t),m=!0)},o(t){p(i.$$.fragment,t),p(s.$$.fragment,t),p(l.$$.fragment,t),p(a.$$.fragment,t),m=!1},d(t){t&&_(n),b(i),b(s),b(l),b(a)}}}function X(c){let n,i,e="course",s,o,l;return{c(){n=M("button"),i=B("edit current "),s=B(e),this.h()},l(u){n=O(u,"BUTTON",{class:!0});var a=P(n);i=q(a,"edit current "),s=q(a,e),a.forEach(_),this.h()},h(){U(n,"class","svelte-5m3d92")},m(u,a){S(u,n,a),v(n,i),v(n,s),o||(l=J(n,"click",c[9]),o=!0)},p:C,i:C,o:C,d(u){u&&_(n),o=!1,l()}}}function Y(c){let n,i,e,s,o,l=c[8]&&I(c);const u=[X,W],a=[];function m(t,r){return t[4]?0:1}return i=m(c),e=a[i]=u[i](c),{c(){l&&l.c(),n=j(),e.c(),s=N()},l(t){l&&l.l(t),n=E(t),e.l(t),s=N()},m(t,r){l&&l.m(t,r),S(t,n,r),a[i].m(t,r),S(t,s,r),o=!0},p(t,[r]){t[8]?l?(l.p(t,r),r&256&&d(l,1)):(l=I(t),l.c(),d(l,1),l.m(n.parentNode,n)):l&&(T(),p(l,1,1,()=>{l=null}),A());let h=i;i=m(t),i===h?a[i].p(t,r):(T(),p(a[h],1,1,()=>{a[h]=null}),A(),e=a[i],e?e.p(t,r):(e=a[i]=u[i](t),e.c()),d(e,1),e.m(s.parentNode,s))},i(t){o||(d(l),d(e),o=!0)},o(t){p(l),p(e),o=!1},d(t){t&&(_(n),_(s)),l&&l.d(t),a[i].d(t)}}}function Z(c,n,i){let{data:e}=n,s="",o="",l="",u=!1,a=!1,m="",t,r=!1;G(()=>{Q("a/gcc",{id:e.id}).then(f=>{console.log(f),f=f.d,i(8,r=!0),i(1,s=f.courseName),i(3,l=f.courseDuration),i(2,o=f.courseDetails),i(5,a=f.archived),i(6,m=f.expDate),i(7,t=f.levels)})});const h=()=>{i(4,u=!1)},w=()=>{const f=document.createElement("a");f.href=`/admin/courses/${e.id}/lectures`,f.click()},y=()=>{const f=document.createElement("a");f.href=`/admin/courses/${e.id}/chapters`,f.click()},D=()=>{const f=document.createElement("a");f.href=`/admin/courses/${e.id}/exams`,f.click()},V=()=>{const f=document.createElement("a");f.href=`/admin/courses/${e.id}/users`,f.click()};return c.$$set=f=>{"data"in f&&i(0,e=f.data)},[e,s,o,l,u,a,m,t,r,h,w,y,D,V]}class ce extends K{constructor(n){super(),L(this,n,Z,Y,F,{data:0})}}export{ce as component};