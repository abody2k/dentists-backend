import{_ as X}from"../chunks/preload-helper.BQ24v_F8.js";import{s as G,e as P,a as I,c as S,b as j,f as B,d as y,h as d,i as M,j as $,o as K,k as F,l as Q}from"../chunks/scheduler.-OUPI9FG.js";import{S as U,i as Y,c as H,a as E,m as N,t as p,b as h,d as T,e as O,g as C}from"../chunks/index.jRfWhGhs.js";import{e as J}from"../chunks/each.CDLVB7Rj.js";import{B as Z}from"../chunks/Bar.Dm7ARcL5.js";import{B as R}from"../chunks/BlogCard.DKuDiHTV.js";import{P as x}from"../chunks/Path.BSGNOJd8.js";import{n as ee,s as W,a as te}from"../chunks/not.Dcz1yJl1.js";import{B as ne}from"../chunks/Button.DI0ciwgW.js";function z(l,n,r){const i=l.slice();return i[10]=n[r],i}function L(l){let n,r;return n=new R({props:{makeNew:!0,uploadHandler:l[4],cancelHandler:l[5]}}),{c(){H(n.$$.fragment)},l(i){E(n.$$.fragment,i)},m(i,e){N(n,i,e),r=!0},p(i,e){const a={};e&2&&(a.uploadHandler=i[4]),e&2&&(a.cancelHandler=i[5]),n.$set(a)},i(i){r||(p(n.$$.fragment,i),r=!0)},o(i){h(n.$$.fragment,i),r=!1},d(i){O(n,i)}}}function q(l){let n,r,i=J(l[0]),e=[];for(let o=0;o<i.length;o+=1)e[o]=A(z(l,i,o));const a=o=>h(e[o],1,1,()=>{e[o]=null});return{c(){for(let o=0;o<e.length;o+=1)e[o].c();n=F()},l(o){for(let t=0;t<e.length;t+=1)e[t].l(o);n=F()},m(o,t){for(let s=0;s<e.length;s+=1)e[s]&&e[s].m(o,t);M(o,n,t),r=!0},p(o,t){if(t&3){i=J(o[0]);let s;for(s=0;s<i.length;s+=1){const b=z(o,i,s);e[s]?(e[s].p(b,t),p(e[s],1)):(e[s]=A(b),e[s].c(),p(e[s],1),e[s].m(n.parentNode,n))}for(C(),s=i.length;s<e.length;s+=1)a(s);T()}},i(o){if(!r){for(let t=0;t<i.length;t+=1)p(e[t]);r=!0}},o(o){e=e.filter(Boolean);for(let t=0;t<e.length;t+=1)h(e[t]);r=!1},d(o){o&&y(n),Q(e,o)}}}function A(l){let n,r;function i(...a){return l[6](l[10],...a)}function e(...a){return l[7](l[10],...a)}return n=new R({props:{title:l[10].title,ID:l[10].ID,date:new Date(l[10].date),saveHandler:i,deleteHandler:e,details:l[10].blogDetails,url:"https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+l[10].blogID,cancelHandler:l[8]}}),{c(){H(n.$$.fragment)},l(a){E(n.$$.fragment,a)},m(a,o){N(n,a,o),r=!0},p(a,o){l=a;const t={};o&1&&(t.title=l[10].title),o&1&&(t.ID=l[10].ID),o&1&&(t.date=new Date(l[10].date)),o&1&&(t.saveHandler=i),o&1&&(t.deleteHandler=e),o&1&&(t.details=l[10].blogDetails),o&1&&(t.url="https://echo-dentists.s3.me-central-1.amazonaws.com/blogs/"+l[10].blogID),o&2&&(t.cancelHandler=l[8]),n.$set(t)},i(a){r||(p(n.$$.fragment,a),r=!0)},o(a){h(n.$$.fragment,a),r=!1},d(a){O(n,a)}}}function oe(l){let n,r,i,e,a,o,t,s,b,D,k,u,_;r=new Z({props:{title:"Blogs"}}),a=new x({props:{links:[{link:"/",txt:"Home"},{link:"/blogs",txt:"Blogs"}]}}),s=new ne({props:{text:"منشور جديد",clickHandler:l[3]}});let f=l[1]&&L(l),c=l[0].length>0&&q(l);return{c(){n=P("div"),H(r.$$.fragment),i=I(),e=P("div"),H(a.$$.fragment),o=I(),t=P("div"),H(s.$$.fragment),b=I(),D=P("div"),k=I(),f&&f.c(),u=I(),c&&c.c(),this.h()},l(m){n=S(m,"DIV",{style:!0});var g=j(n);E(r.$$.fragment,g),i=B(g),e=S(g,"DIV",{style:!0});var v=j(e);E(a.$$.fragment,v),v.forEach(y),o=B(g),t=S(g,"DIV",{style:!0});var w=j(t);E(s.$$.fragment,w),b=B(w),D=S(w,"DIV",{style:!0}),j(D).forEach(y),k=B(w),f&&f.l(w),u=B(w),c&&c.l(w),w.forEach(y),g.forEach(y),this.h()},h(){d(e,"width","100%"),d(e,"display","inline-table"),d(e,"margin","auto"),d(e,"margin-top","141px"),d(D,"margin-top","120px"),d(t,"display","flex"),d(t,"justify-content","center"),d(t,"flex-direction","column"),d(t,"gap","40px"),d(t,"align-items","center"),d(t,"justify-content","center"),d(t,"width","100%"),d(t,"display","flex"),d(t,"flex-direction","column"),d(t,"align-items","center"),d(n,"width","100vw")},m(m,g){M(m,n,g),N(r,n,null),$(n,i),$(n,e),N(a,e,null),$(n,o),$(n,t),N(s,t,null),$(t,b),$(t,D),$(t,k),f&&f.m(t,null),$(t,u),c&&c.m(t,null),_=!0},p(m,[g]){const v={};g&2&&(v.clickHandler=m[3]),s.$set(v),m[1]?f?(f.p(m,g),g&2&&p(f,1)):(f=L(m),f.c(),p(f,1),f.m(t,u)):f&&(C(),h(f,1,1,()=>{f=null}),T()),m[0].length>0?c?(c.p(m,g),g&1&&p(c,1)):(c=q(m),c.c(),p(c,1),c.m(t,null)):c&&(C(),h(c,1,1,()=>{c=null}),T())},i(m){_||(p(r.$$.fragment,m),p(a.$$.fragment,m),p(s.$$.fragment,m),p(f),p(c),_=!0)},o(m){h(r.$$.fragment,m),h(a.$$.fragment,m),h(s.$$.fragment,m),h(f),h(c),_=!1},d(m){m&&y(n),O(r),O(a),O(s),f&&f.d(),c&&c.d()}}}async function V(l,n,r){const{default:i}=await X(()=>import("../chunks/Loading.BhgbxxH0.js"),__vite__mapDeps([0,1,2]),import.meta.url);new i({target:document.getElementById("nots")});const e=await fetch("http://3.29.235.228:3000/api/"+l,{method:"POST",mode:"cors",credentials:"include",headers:{},body:n});if(!e.ok)throw new NotificationBubble({props:{duration:10,msg:"حدثت مشكلة اثناء الاتصال بالسيرفر الرجاء اعادة تحميل الصفحة"},target:document.getElementById("nots")}),document.getElementById("loadingWindow").remove(),new Error(`HTTP error! Status: ${e.status}`);let a="";try{return a=await e.json(),document.getElementById("loadingWindow").remove(),a}catch{}return r&&r(),document.getElementById("loadingWindow").remove(),a}function ae(l,n,r){let{data:i={blogs:[]}}=n,e=[],a=!1;K(()=>{document.body.style.overflowX="hidden",r(0,e=i.blogs),console.log(e)});const o=()=>{console.log("making new blog"),r(1,a=!0)},t=(u,_,f)=>{let c=new FormData;c.append("body",JSON.stringify({bd:f,title:_})),c.append("files",u),V("a/nb",c).then(()=>{ee("تم انشاء منشور جديد")}),r(1,a=!1)},s=()=>{r(1,a=!1)},b=(u,_)=>{let f=new FormData;f.append("body",JSON.stringify(Object({id:u.blogID,bd:u.blogDetails,title:u.title}))),console.log(_),f.append("files",_),V("a/ub",f).then(()=>{W("تم حذف المنشور","cornflowerblue"),r(0,e=e.filter(c=>c!=u))})},D=(u,_)=>{let f=new FormData;f.append("body",JSON.stringify(Object({bid:u.blogID}))),console.log(u),te("هل انت متأكد من حذف المنشور؟",async()=>{await V("a/db",f).then(()=>{W("تم حذف المنشور","cornflowerblue"),r(0,e=e.filter(c=>c!=u))})})},k=()=>{r(1,a=!1)};return l.$$set=u=>{"data"in u&&r(2,i=u.data)},[e,a,i,o,t,s,b,D,k]}class ge extends U{constructor(n){super(),Y(this,n,ae,oe,G,{data:2})}}export{ge as component};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/Loading.BhgbxxH0.js","../chunks/scheduler.-OUPI9FG.js","../chunks/index.jRfWhGhs.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
