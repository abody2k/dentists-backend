import{s as P,e as b,c as y,b as q,d as h,p as _,i as o,n as u,l as S,t as x,a as m,m as E,f as d,j,r as A}from"./scheduler.BVAlSgfp.js";import{e as p}from"./each.D8K876rg.js";import{S as C,i as D}from"./index.B7Z5KU1K.js";function k(f,t,s){const e=f.slice();return e[1]=t[s],e[3]=s,e}function v(f){let t;return{c(){t=x(">>")},l(s){t=E(s,">>")},m(s,e){o(s,t,e)},d(s){s&&h(t)}}}function g(f){let t,s=f[1].txt+"",e,i,r,l,a=f[3]+1!=f[0].length&&v();return{c(){t=b("a"),e=x(s),r=m(),a&&a.c(),l=m(),this.h()},l(n){t=y(n,"A",{href:!0,class:!0});var c=q(t);e=E(c,s),c.forEach(h),r=d(n),a&&a.l(n),l=d(n),this.h()},h(){_(t,"href",i=f[1].link),_(t,"class","svelte-12qufyc")},m(n,c){o(n,t,c),j(t,e),o(n,r,c),a&&a.m(n,c),o(n,l,c)},p(n,c){c&1&&s!==(s=n[1].txt+"")&&A(e,s),c&1&&i!==(i=n[1].link)&&_(t,"href",i),n[3]+1!=n[0].length?a||(a=v(),a.c(),a.m(l.parentNode,l)):a&&(a.d(1),a=null)},d(n){n&&(h(t),h(r),h(l)),a&&a.d(n)}}}function I(f){let t,s=p(f[0]),e=[];for(let i=0;i<s.length;i+=1)e[i]=g(k(f,s,i));return{c(){t=b("div");for(let i=0;i<e.length;i+=1)e[i].c();this.h()},l(i){t=y(i,"DIV",{class:!0});var r=q(t);for(let l=0;l<e.length;l+=1)e[l].l(r);r.forEach(h),this.h()},h(){_(t,"class","path svelte-12qufyc")},m(i,r){o(i,t,r);for(let l=0;l<e.length;l+=1)e[l]&&e[l].m(t,null)},p(i,[r]){if(r&1){s=p(i[0]);let l;for(l=0;l<s.length;l+=1){const a=k(i,s,l);e[l]?e[l].p(a,r):(e[l]=g(a),e[l].c(),e[l].m(t,null))}for(;l<e.length;l+=1)e[l].d(1);e.length=s.length}},i:u,o:u,d(i){i&&h(t),S(e,i)}}}function N(f,t,s){let{links:e}=t;return f.$$set=i=>{"links"in i&&s(0,e=i.links)},[e]}class B extends C{constructor(t){super(),D(this,t,N,I,P,{links:0})}}export{B as P};