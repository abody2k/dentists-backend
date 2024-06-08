import{s as A,e as D,a as H,c as E,b as I,f as B,d as k,h as u,i as G,j as v,l as K,o as L}from"../chunks/scheduler.BVAlSgfp.js";import{S as Q,i as R,c as P,a as S,m as T,t as h,b,d as z,e as j,g as C}from"../chunks/index.B7Z5KU1K.js";import{e as O}from"../chunks/each.D8K876rg.js";import{B as X}from"../chunks/BlogCard.Cb-fCB6d.js";import{n as q}from"../chunks/not.DlsTAyDt.js";import{T as U}from"../chunks/TopBar.BEp2WrXN.js";import{P as W}from"../chunks/Path.Dtu891Bo.js";function F(m,t,o){const e=m.slice();return e[8]=t[o],e}function J(m){let t,o;return t=new X({props:{makeNew:!0,uploadHandler:m[4],cancelHandler:m[5]}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){T(t,e,l),o=!0},p(e,l){const s={};l&2&&(s.uploadHandler=e[4]),l&2&&(s.cancelHandler=e[5]),t.$set(s)},i(e){o||(h(t.$$.fragment,e),o=!0)},o(e){b(t.$$.fragment,e),o=!1},d(e){j(t,e)}}}function M(m){let t,o;return t=new X({props:{title:m[8].title,date:new Date(m[8].date),details:m[8].blogDetails,url:"https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+m[8].blogID,cancelHandler:m[6]}}),{c(){P(t.$$.fragment)},l(e){S(t.$$.fragment,e)},m(e,l){T(t,e,l),o=!0},p(e,l){const s={};l&1&&(s.title=e[8].title),l&1&&(s.date=new Date(e[8].date)),l&1&&(s.details=e[8].blogDetails),l&1&&(s.url="https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+e[8].blogID),l&2&&(s.cancelHandler=e[6]),t.$set(s)},i(e){o||(h(t.$$.fragment,e),o=!0)},o(e){b(t.$$.fragment,e),o=!1},d(e){j(t,e)}}}function Y(m){let t,o,e,l,s,_,i,w,y,g,$;o=new U({}),s=new W({props:{links:[{link:"/",txt:"Home"},{link:"/blogs",txt:"Blogs"}]}});let r=m[1]&&J(m),d=O(m[0]),a=[];for(let n=0;n<d.length;n+=1)a[n]=M(F(m,d,n));const N=n=>b(a[n],1,1,()=>{a[n]=null});return{c(){t=D("div"),P(o.$$.fragment),e=H(),l=D("div"),P(s.$$.fragment),_=H(),i=D("div"),w=D("div"),y=H(),r&&r.c(),g=H();for(let n=0;n<a.length;n+=1)a[n].c();this.h()},l(n){t=E(n,"DIV",{style:!0});var c=I(t);S(o.$$.fragment,c),e=B(c),l=E(c,"DIV",{style:!0});var f=I(l);S(s.$$.fragment,f),f.forEach(k),_=B(c),i=E(c,"DIV",{style:!0});var p=I(i);w=E(p,"DIV",{style:!0}),I(w).forEach(k),y=B(p),r&&r.l(p),g=B(p);for(let V=0;V<a.length;V+=1)a[V].l(p);p.forEach(k),c.forEach(k),this.h()},h(){u(l,"width","100%"),u(l,"display","inline-table"),u(l,"margin","auto"),u(l,"margin-top","141px"),u(w,"margin-top","120px"),u(i,"display","flex"),u(i,"justify-content","center"),u(i,"flex-direction","column"),u(i,"gap","40px"),u(i,"align-items","center"),u(i,"justify-content","center"),u(i,"width","100%"),u(i,"display","flex"),u(i,"flex-direction","column"),u(i,"align-items","center"),u(t,"width","100vw")},m(n,c){G(n,t,c),T(o,t,null),v(t,e),v(t,l),T(s,l,null),v(t,_),v(t,i),v(i,w),v(i,y),r&&r.m(i,null),v(i,g);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(i,null);$=!0},p(n,[c]){if(n[1]?r?(r.p(n,c),c&2&&h(r,1)):(r=J(n),r.c(),h(r,1),r.m(i,g)):r&&(C(),b(r,1,1,()=>{r=null}),z()),c&3){d=O(n[0]);let f;for(f=0;f<d.length;f+=1){const p=F(n,d,f);a[f]?(a[f].p(p,c),h(a[f],1)):(a[f]=M(p),a[f].c(),h(a[f],1),a[f].m(i,null))}for(C(),f=d.length;f<a.length;f+=1)N(f);z()}},i(n){if(!$){h(o.$$.fragment,n),h(s.$$.fragment,n),h(r);for(let c=0;c<d.length;c+=1)h(a[c]);$=!0}},o(n){b(o.$$.fragment,n),b(s.$$.fragment,n),b(r),a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)b(a[c]);$=!1},d(n){n&&k(t),j(o),j(s),r&&r.d(),K(a,n)}}}function Z(m,t,o){async function e(g,$,r){const d=await fetch("http://3.29.235.228:3000/api/"+g,{method:"POST",mode:"cors",credentials:"include",headers:{},body:$});if(!d.ok)throw q("حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"),new Error(`HTTP error! Status: ${d.status}`);let a="";try{return a=await d.json(),a}catch{}return r&&r(),a}let{data:l}=t,s=[],_=!1;L(()=>{document.body.style.overflowX="hidden",o(0,s=l.blogs),console.log(s),s.forEach(g=>{})});const i=(g,$,r)=>{let d=new FormData;d.append("body",JSON.stringify({bd:r,title:$})),d.append("files",g),e("a/nb",d).then(()=>{q("تم انشاء منشور جديد")}),o(1,_=!1)},w=()=>{o(1,_=!1)},y=()=>{o(1,_=!1)};return m.$$set=g=>{"data"in g&&o(3,l=g.data)},[s,_,e,l,i,w,y]}class re extends Q{constructor(t){super(),R(this,t,Z,Y,A,{data:3})}}export{re as component};