import{s as B,e as _,b,c as h,h as k,f as D,d as p,j as y,i as c,w,l as g,y as H,g as I,r as j}from"../chunks/scheduler.-UlM-m53.js";import{S as N,i as S,c as T,a as U,m as q,t as z,b as E,d as R}from"../chunks/index.UV4btmqA.js";import{B as V}from"../chunks/Button.D4IuMFKE.js";import{f as A}from"../chunks/not.CKuSUAlB.js";function F(r){let e,a="Passwords do match";return{c(){e=_("p"),e.textContent=a,this.h()},l(n){e=h(n,"P",{style:!0,"data-svelte-h":!0}),I(e)!=="svelte-4hj10z"&&(e.textContent=a),this.h()},h(){j(e,"color","cadetblue")},m(n,l){c(n,e,l)},d(n){n&&p(e)}}}function G(r){let e,a="Passwords do not match!";return{c(){e=_("p"),e.textContent=a,this.h()},l(n){e=h(n,"P",{style:!0,"data-svelte-h":!0}),I(e)!=="svelte-1i6vce7"&&(e.textContent=a),this.h()},h(){j(e,"color","crimson")},m(n,l){c(n,e,l)},d(n){n&&p(e)}}}function J(r){let e,a,n,l,o,f,i,d,m,P;function C(t,s){return t[1]!=t[2]?G:F}let v=C(r),u=v(r);return i=new V({props:{text:"Reset password",clickHandler:r[5]}}),{c(){e=_("input"),a=b(),n=_("input"),l=b(),o=_("div"),u.c(),f=b(),T(i.$$.fragment),this.h()},l(t){e=h(t,"INPUT",{type:!0,placeholder:!0}),a=k(t),n=h(t,"INPUT",{type:!0,placeholder:!0}),l=k(t),o=h(t,"DIV",{});var s=D(o);u.l(s),s.forEach(p),f=k(t),U(i.$$.fragment,t),this.h()},h(){y(e,"type","password"),y(e,"placeholder","enter your password"),y(n,"type","password"),y(n,"placeholder","enter your password again")},m(t,s){c(t,e,s),w(e,r[1]),c(t,a,s),c(t,n,s),w(n,r[2]),c(t,l,s),c(t,o,s),u.m(o,null),c(t,f,s),q(i,t,s),d=!0,m||(P=[g(e,"input",r[3]),g(n,"input",r[4])],m=!0)},p(t,[s]){s&2&&e.value!==t[1]&&w(e,t[1]),s&4&&n.value!==t[2]&&w(n,t[2]),v!==(v=C(t))&&(u.d(1),u=v(t),u&&(u.c(),u.m(o,null)));const $={};s&3&&($.clickHandler=t[5]),i.$set($)},i(t){d||(z(i.$$.fragment,t),d=!0)},o(t){E(i.$$.fragment,t),d=!1},d(t){t&&(p(e),p(a),p(n),p(l),p(o),p(f)),u.d(),R(i,t),m=!1,H(P)}}}function K(r,e,a){let{data:n}=e,l="",o="";function f(){l=this.value,a(1,l)}function i(){o=this.value,a(2,o)}const d=()=>{A("u/chngp",{token:n.token,password:l})};return r.$$set=m=>{"data"in m&&a(0,n=m.data)},[n,l,o,f,i,d]}class W extends N{constructor(e){super(),S(this,e,K,J,B,{data:0})}}export{W as component};
