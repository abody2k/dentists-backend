import{s as Q,a as B,e as w,t as R,f as O,c as E,b as C,m as W,d as y,h as L,p as S,i as T,j as $,q as N,r as X,o as Y,I as Z,g as ee,y as te,n as se}from"../chunks/scheduler.BVAlSgfp.js";import{S as oe,i as ne,c as j,a as q,m as A,t as D,b as V,d as U,e as P,g as F}from"../chunks/index.B7Z5KU1K.js";/* empty css                                                  */import{G as le}from"../chunks/Grid.CEvfXpI-.js";import{f as ie}from"../chunks/not.BJnHWghe.js";import{L as re}from"../chunks/Login.Brqu25dq.js";import{B as ae}from"../chunks/ButtonChild.CNyNlapg.js";import{B as ce}from"../chunks/Bar.CdutgMKg.js";function J(l){let t,s,o,u="×",i,p,r,a,b,k;return r=new re({props:{func:l[5]}}),{c(){t=w("div"),s=w("div"),o=w("button"),o.textContent=u,i=B(),p=w("div"),j(r.$$.fragment),this.h()},l(d){t=E(d,"DIV",{class:!0});var h=C(t);s=E(h,"DIV",{class:!0});var v=C(s);o=E(v,"BUTTON",{class:!0,"data-svelte-h":!0}),ee(o)!=="svelte-1vf4byn"&&(o.textContent=u),i=O(v),p=E(v,"DIV",{class:!0});var n=C(p);q(r.$$.fragment,n),n.forEach(y),v.forEach(y),h.forEach(y),this.h()},h(){S(o,"class","close-button svelte-ir49g4"),S(p,"class","content svelte-ir49g4"),S(s,"class","dialog-box svelte-ir49g4"),S(t,"class","overlay svelte-ir49g4")},m(d,h){T(d,t,h),$(t,s),$(s,o),$(s,i),$(s,p),A(r,p,null),a=!0,b||(k=[N(o,"click",l[4]),N(s,"click",de),N(t,"click",l[4])],b=!0)},p(d,h){const v={};h&1&&(v.func=d[5]),r.$set(v)},i(d){a||(D(r.$$.fragment,d),a=!0)},o(d){V(r.$$.fragment,d),a=!1},d(d){d&&y(t),P(r),b=!1,te(k)}}}function K(l){let t,s;return t=new ae({props:{child:`
              <div style="display:flex;gap:10px;">
                <img src ="/add.png" width="20">
                <div>إنشاء كورس</div>
                </div>
              
              `,clickHandler:l[6]}}),{c(){j(t.$$.fragment)},l(o){q(t.$$.fragment,o)},m(o,u){A(t,o,u),s=!0},p:se,i(o){s||(D(t.$$.fragment,o),s=!0)},o(o){V(t.$$.fragment,o),s=!1},d(o){P(t,o)}}}function fe(l){let t,s,o,u,i,p,r,a,b,k,d,h=l[2]?"الكورسات غير المؤرشفة":"عرض الكورسات المؤرشفة",v,n,g,_,x,G,c=l[3]&&J(l);s=new ce({props:{title:"courses"}});let f=!l[2]&&K(l);return g=new le({props:{f:!1,showArchivedOnly:l[2],disablePages:!0,cardsData:[...l[1]]}}),{c(){c&&c.c(),t=B(),j(s.$$.fragment),o=B(),u=w("div"),i=w("div"),f&&f.c(),p=B(),r=w("div"),a=w("div"),b=w("img"),k=B(),d=w("div"),v=R(h),n=B(),j(g.$$.fragment),this.h()},l(e){c&&c.l(e),t=O(e),q(s.$$.fragment,e),o=O(e),u=E(e,"DIV",{class:!0});var m=C(u);i=E(m,"DIV",{style:!0});var I=C(i);f&&f.l(I),p=O(I),r=E(I,"DIV",{id:!0,class:!0});var M=C(r);a=E(M,"DIV",{style:!0});var H=C(a);b=E(H,"IMG",{}),k=O(H),d=E(H,"DIV",{});var z=C(d);v=W(z,h),z.forEach(y),H.forEach(y),M.forEach(y),I.forEach(y),n=O(m),q(g.$$.fragment,m),m.forEach(y),this.h()},h(){L(a,"display","flex"),L(a,"gap","30px"),L(a,"justify-content","right"),L(a,"margin","30px"),S(r,"id","arch"),S(r,"class","svelte-ir49g4"),L(i,"display","flex"),L(i,"gap","30px"),L(i,"justify-content","right"),S(u,"class","")},m(e,m){c&&c.m(e,m),T(e,t,m),A(s,e,m),T(e,o,m),T(e,u,m),$(u,i),f&&f.m(i,null),$(i,p),$(i,r),$(r,a),$(a,b),$(a,k),$(a,d),$(d,v),$(u,n),A(g,u,null),_=!0,x||(G=N(r,"click",l[7]),x=!0)},p(e,[m]){e[3]?c?(c.p(e,m),m&8&&D(c,1)):(c=J(e),c.c(),D(c,1),c.m(t.parentNode,t)):c&&(F(),V(c,1,1,()=>{c=null}),U()),e[2]?f&&(F(),V(f,1,1,()=>{f=null}),U()):f?(f.p(e,m),m&4&&D(f,1)):(f=K(e),f.c(),D(f,1),f.m(i,p)),(!_||m&4)&&h!==(h=e[2]?"الكورسات غير المؤرشفة":"عرض الكورسات المؤرشفة")&&X(v,h);const I={};m&4&&(I.showArchivedOnly=e[2]),m&2&&(I.cardsData=[...e[1]]),g.$set(I)},i(e){_||(D(c),D(s.$$.fragment,e),D(f),D(g.$$.fragment,e),_=!0)},o(e){V(c),V(s.$$.fragment,e),V(f),V(g.$$.fragment,e),_=!1},d(e){e&&(y(t),y(o),y(u)),c&&c.d(e),P(s,e),f&&f.d(),P(g),x=!1,G()}}}function ue(){return new Promise(l=>{const t=/./;t.toString=function(){l(!0)},console.log("%c",t)})}const de=l=>l.stopPropagation();function me(l,t,s){let o=0,u=0,i=[{title:"nice course",id:1,text:"THE DEVIL IN THE DETAIL",duration:"10:12",src:"https://source.unsplash.com/random/200x200?sig=1",clickHandler:()=>{u=1;const n=document.createElement("a");n.href="/admin/courses/"+u,n.click()}}],p=!1;function r(){const n=document.querySelector(".scroll-box");n&&(console.log(getComputedStyle(n).height.split("px")[0]),Number(getComputedStyle(n).height.split("px")[0]))}let a=!1;Y(async()=>(async function(){ie("a/gc").then(g=>{g=g.d,s(1,i=g.map(_=>Object({title:_.courseName,id:_.courseID,text:_.courseDetails,duration:_.courseDuration,archived:_.archived,src:"https://dentists-iq.s3.amazonaws.com/courses/"+_.courseID+"/0",clickHandler:()=>{u=_.courseID;const x=document.createElement("a");x.href="/admin/courses/"+u,x.click()}}))),console.log(i)},()=>{window.href="/404"})}(),document.body.addEventListener("click",function(n){console.log(n.target.id),console.log(a),n.target.id!="menuuu"&&n.target.id!="menuio"&&a&&(a=!1)}),addEventListener("ocd",n=>{i.filter(g=>g.id==n.detail.id)[0]}),document.body.style.overflow=b?"hidden":"auto",()=>{window.removeEventListener("scroll",handleScroll),window.removeEventListener("resize",r),document.body.style.overflow="auto"})),Z(()=>{r()});let b=!1;function k(){s(3,b=!1)}return ue().then(n=>{n||console.log("Developer tools are closed.")}),[o,i,p,b,k,()=>{s(0,o=4),k()},()=>{location.href="/admin/courses/new"},()=>{s(2,p=!p)}]}class De extends oe{constructor(t){super(),ne(this,t,me,fe,Q,{})}}export{De as component};
