import{s as j,e as p,a as H,c as g,b as T,g as C,f as I,d as v,m as q,i as N,j as _,p as z,n as L,l as $,o as J,t as M,q as O,r as A}from"../chunks/scheduler.BM2JUaET.js";import{e as X}from"../chunks/each.6y9O-auE.js";import{S as P,i as R}from"../chunks/index.DjdkDzVp.js";import{u as x,w as U}from"../chunks/xlsx.CqXLKV2Q.js";import{f as Y}from"../chunks/not.CMbolwtH.js";function B(c,e,o){const n=c.slice();return n[4]=e[o],n}function F(c){let e,o,n=c[1].find(l).n+"",u,h,m,a=c[4].g+"",i;function l(...f){return c[3](c[4],...f)}return{c(){e=p("tr"),o=p("td"),u=M(n),h=H(),m=p("td"),i=M(a)},l(f){e=g(f,"TR",{});var d=T(e);o=g(d,"TD",{});var S=T(o);u=O(S,n),S.forEach(v),h=I(d),m=g(d,"TD",{});var b=T(m);i=O(b,a),b.forEach(v),d.forEach(v)},m(f,d){N(f,e,d),_(e,o),_(o,u),_(e,h),_(e,m),_(m,i)},p(f,d){c=f,d&3&&n!==(n=c[1].find(l).n+"")&&A(u,n),d&1&&a!==(a=c[4].g+"")&&A(i,a)},d(f){f&&v(e)}}}function G(c){let e,o,n,u="<tr><th>Name</th><th>Mark</th></tr>",h,m,a,i,l,f="Export XLSX",d,S,b=X(c[0]),r=[];for(let s=0;s<b.length;s+=1)r[s]=F(B(c,b,s));return{c(){e=p("main"),o=p("table"),n=p("thead"),n.innerHTML=u,h=p("tbody");for(let s=0;s<r.length;s+=1)r[s].c();m=H(),a=p("tfoot"),i=p("td"),l=p("button"),l.textContent=f,this.h()},l(s){e=g(s,"MAIN",{});var E=T(e);o=g(E,"TABLE",{});var t=T(o);n=g(t,"THEAD",{"data-svelte-h":!0}),C(n)!=="svelte-12zzm8p"&&(n.innerHTML=u),h=g(t,"TBODY",{});var D=T(h);for(let k=0;k<r.length;k+=1)r[k].l(D);m=I(D),D.forEach(v),a=g(t,"TFOOT",{});var y=T(a);i=g(y,"TD",{colspan:!0});var w=T(i);l=g(w,"BUTTON",{"data-svelte-h":!0}),C(l)!=="svelte-g3l2ov"&&(l.textContent=f),w.forEach(v),y.forEach(v),t.forEach(v),E.forEach(v),this.h()},h(){q(i,"colspan",2)},m(s,E){N(s,e,E),_(e,o),_(o,n),_(o,h);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(h,null);_(h,m),_(o,a),_(a,i),_(i,l),d||(S=z(l,"click",c[2]),d=!0)},p(s,[E]){if(E&3){b=X(s[0]);let t;for(t=0;t<b.length;t+=1){const D=B(s,b,t);r[t]?r[t].p(D,E):(r[t]=F(D),r[t].c(),r[t].m(h,m))}for(;t<r.length;t+=1)r[t].d(1);r.length=b.length}},i:L,o:L,d(s){s&&v(e),$(r,s),d=!1,S()}}}function K(c,e,o){let n=[],u=[];J(async()=>{Y("a/gsrs",{examID:23,ID:43,t:1,ac:0}).then(a=>{console.log(a),o(0,n=a.r),o(1,u=a.n)})});function h(){const a=x.json_to_sheet(n.map(l=>(l.name=u.find(f=>f.i==l.i).n,delete l.i,l.grade=l.g,delete l.g,l))),i=x.book_new();x.book_append_sheet(i,a,"Data"),U(i,"SheetJSSvelteAoO.xlsx")}return[n,u,h,(a,i)=>i.i==a.i]}class et extends P{constructor(e){super(),R(this,e,K,G,j,{})}}export{et as component};
