import{s as Y,b as S,e as E,t as J,h as q,c as k,f as L,p as X,d as w,r as g,j,i as C,k as _,l as H,q as K,o as Q,J as W,g as U,y as Z,n as ee}from"../chunks/scheduler.C7Xo_3aa.js";import{S as te,i as le,c as P,a as M,m as z,t as T,b as B,e as oe,d as F,g as se}from"../chunks/index.NYh16Rov.js";import{L as ne}from"../chunks/Login.1pTKjR1K.js";import{f as ie}from"../chunks/not.CMcaOXzY.js";import{G as re}from"../chunks/Grid.C5CUwy3L.js";/* empty css                                                  *//* empty css                                                          */import"../chunks/TopBar.svelte_svelte_type_style_lang.BktzVClu.js";/* empty css                                                                 *//* empty css                                                          */import{B as ae}from"../chunks/Bar.BCgXY4Hk.js";function A(r){let l,e,a,f="×",s,i,o,c,D,x;return o=new ne({props:{func:r[5]}}),{c(){l=E("div"),e=E("div"),a=E("button"),a.textContent=f,s=S(),i=E("div"),P(o.$$.fragment),this.h()},l(u){l=k(u,"DIV",{class:!0});var y=L(l);e=k(y,"DIV",{class:!0});var b=L(e);a=k(b,"BUTTON",{class:!0,"data-svelte-h":!0}),U(a)!=="svelte-1vf4byn"&&(a.textContent=f),s=q(b),i=k(b,"DIV",{class:!0});var p=L(i);M(o.$$.fragment,p),p.forEach(w),b.forEach(w),y.forEach(w),this.h()},h(){j(a,"class","close-button svelte-gj8pq3"),j(i,"class","content svelte-gj8pq3"),j(e,"class","dialog-box svelte-gj8pq3"),j(l,"class","overlay svelte-gj8pq3")},m(u,y){C(u,l,y),_(l,e),_(e,a),_(e,s),_(e,i),z(o,i,null),c=!0,D||(x=[H(a,"click",r[4]),H(e,"click",fe),H(l,"click",r[4])],D=!0)},p(u,y){const b={};y&2&&(b.func=u[5]),o.$set(b)},i(u){c||(T(o.$$.fragment,u),c=!0)},o(u){B(o.$$.fragment,u),c=!1},d(u){u&&w(l),F(o),D=!1,Z(x)}}}function R(r){let l,e,a='<img src="/add.png" width="20" height="20"/> <span>إنشاء زمالة</span>',f,s;return{c(){l=E("div"),e=E("div"),e.innerHTML=a,this.h()},l(i){l=k(i,"DIV",{style:!0});var o=L(l);e=k(o,"DIV",{class:!0,style:!0,"data-svelte-h":!0}),U(e)!=="svelte-1ace5w2"&&(e.innerHTML=a),o.forEach(w),this.h()},h(){j(e,"class","Xtabs svelte-gj8pq3"),g(e,"height","120px"),g(e,"display","flex"),g(e,"flex-direction","row"),g(e,"gap","10px"),g(e,"font-size","17px"),g(l,"display","flex"),g(l,"gap","10px")},m(i,o){C(i,l,o),_(l,e),f||(s=H(e,"click",r[6]),f=!0)},p:ee,d(i){i&&w(l),f=!1,s()}}}function ce(r){let l,e,a,f,s,i,o,c,D,x,u,y=r[0]?"الزمالات غير المؤرشفة":"عرض الزمالات المؤرشفة",b,p,I,d,$,v,n=r[3]&&A(r);e=new ae({props:{title:"Fellowships"}});let h=!r[0]&&R(r);return I=new re({props:{f:!0,disablePages:!0,showArchivedOnly:r[0],cardsData:[...r[2]]}}),{c(){n&&n.c(),l=S(),P(e.$$.fragment),a=S(),f=E("div"),s=E("div"),h&&h.c(),i=S(),o=E("div"),c=E("div"),D=E("img"),x=S(),u=E("div"),b=J(y),p=S(),P(I.$$.fragment),this.h()},l(t){n&&n.l(t),l=q(t),M(e.$$.fragment,t),a=q(t),f=k(t,"DIV",{class:!0});var m=L(f);s=k(m,"DIV",{style:!0});var V=L(s);h&&h.l(V),i=q(V),o=k(V,"DIV",{id:!0,class:!0});var G=L(o);c=k(G,"DIV",{style:!0});var O=L(c);D=k(O,"IMG",{}),x=q(O),u=k(O,"DIV",{});var N=L(u);b=X(N,y),N.forEach(w),O.forEach(w),G.forEach(w),V.forEach(w),p=q(m),M(I.$$.fragment,m),m.forEach(w),this.h()},h(){g(c,"display","flex"),g(c,"gap","30px"),g(c,"justify-content","right"),g(c,"margin","30px"),j(o,"id","arch"),j(o,"class","svelte-gj8pq3"),g(s,"display","flex"),g(s,"gap","30px"),g(s,"justify-content","right"),g(s,"margin","20px"),g(s,"height","120px"),j(f,"class","")},m(t,m){n&&n.m(t,m),C(t,l,m),z(e,t,m),C(t,a,m),C(t,f,m),_(f,s),h&&h.m(s,null),_(s,i),_(s,o),_(o,c),_(c,D),_(c,x),_(c,u),_(u,b),_(f,p),z(I,f,null),d=!0,$||(v=H(o,"click",r[7]),$=!0)},p(t,[m]){t[3]?n?(n.p(t,m),m&8&&T(n,1)):(n=A(t),n.c(),T(n,1),n.m(l.parentNode,l)):n&&(se(),B(n,1,1,()=>{n=null}),oe()),t[0]?h&&(h.d(1),h=null):h?h.p(t,m):(h=R(t),h.c(),h.m(s,i)),(!d||m&1)&&y!==(y=t[0]?"الزمالات غير المؤرشفة":"عرض الزمالات المؤرشفة")&&K(b,y);const V={};m&1&&(V.showArchivedOnly=t[0]),m&4&&(V.cardsData=[...t[2]]),I.$set(V)},i(t){d||(T(n),T(e.$$.fragment,t),T(I.$$.fragment,t),d=!0)},o(t){B(n),B(e.$$.fragment,t),B(I.$$.fragment,t),d=!1},d(t){t&&(w(l),w(a),w(f)),n&&n.d(t),F(e,t),h&&h.d(),F(I),$=!1,v()}}}function de(){return new Promise(r=>{const l=/./;l.toString=function(){r(!0)},console.log("%c",l)})}const fe=r=>r.stopPropagation();function ue(r,l,e){let a=!1,f=0,s=0,i=[];function o(){const p=document.querySelector(".scroll-box");p&&(console.log(getComputedStyle(p).height.split("px")[0]),Number(getComputedStyle(p).height.split("px")[0]))}let c=!1;Q(async()=>{(async function(){ie("a/gf").then($=>{console.log("TH IS GF"),console.log($),$=$.d,e(2,i=$.map(v=>Object({id:v.fellowshipID,title:v.fellowshipName,duration:v.fellowshipDuration,text:v.fellowshipDetails,archived:v.archived,src:"https://echo-dentists.s3.me-central-1.amazonaws.com/fellowships/"+v.fellowshipID+"/0",clickHandler:()=>{s=v.fellowshipID;const n=document.createElement("a");n.href="/admin/fellowships/"+s,n.click()}})))})})(),document.body.addEventListener("click",function(d){console.log(d.target.id),console.log(c),d.target.id!="menuuu"&&d.target.id!="menuio"&&c&&(c=!1)}),window.addEventListener("resize",o),o(),addEventListener("ocd",d=>{i.filter(v=>v.id==d.detail.id)[0];const $=document.createElement("a");$.href="/fellowships/"+d.detail.id,$.click()});function p(){var d=window.scrollY||document.documentElement.scrollTop,$=document.documentElement.scrollHeight-window.innerHeight,v=d/$*100;return v}const I=()=>{var d=document.getElementById("header");window.scrollY||document.documentElement.scrollTop,document.documentElement.hei,console.log(p()),d.style.borderBottomLeftRadius=p()-70+"px",d.style.borderBottomRightRadius=p()-70+"px",d.style.backgroundColor="rgba(46, 59, 111, "+p()/20+")"};return window.addEventListener("scroll",I),document.body.style.overflow=D?"hidden":"auto",()=>{window.removeEventListener("scroll",I),window.removeEventListener("resize",o),document.body.style.overflow="auto"}}),W(()=>{o()});let D=!1;function x(){e(3,D=!1)}return de().then(p=>{p||console.log("Developer tools are closed.")}),[a,f,i,D,x,()=>{e(1,f=4),x()},()=>{location.href="/admin/fellowships/new"},()=>{e(0,a=!a)}]}class ke extends te{constructor(l){super(),le(this,l,ue,ce,Y,{})}}export{ke as component};
