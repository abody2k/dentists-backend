var D=Object.defineProperty;var q=(t,n,e)=>n in t?D(t,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[n]=e;var f=(t,n,e)=>q(t,typeof n!="symbol"?n+"":n,e);function O(){}const rt=t=>t;function B(t,n){for(const e in n)t[e]=n[e];return t}function I(t){return t()}function ot(){return Object.create(null)}function R(t){t.forEach(I)}function ut(t){return typeof t=="function"}function at(t,n){return t!=t?n==n:t!==n||t&&typeof t=="object"||typeof t=="function"}let m;function ft(t,n){return t===n?!0:(m||(m=document.createElement("a")),m.href=n,t===m.href)}function _t(t){return Object.keys(t).length===0}function G(t,...n){if(t==null){for(const i of n)i(void 0);return O}const e=t.subscribe(...n);return e.unsubscribe?()=>e.unsubscribe():e}function ht(t,n,e){t.$$.on_destroy.push(G(n,e))}function dt(t,n,e,i){if(t){const c=C(t,n,e,i);return t[0](c)}}function C(t,n,e,i){return t[1]&&i?B(e.ctx.slice(),t[1](i(n))):e.ctx}function mt(t,n,e,i){if(t[2]&&i){const c=t[2](i(e));if(n.dirty===void 0)return c;if(typeof c=="object"){const o=[],l=Math.max(n.dirty.length,c.length);for(let s=0;s<l;s+=1)o[s]=n.dirty[s]|c[s];return o}return n.dirty|c}return n.dirty}function pt(t,n,e,i,c,o){if(c){const l=C(n,e,i,o);t.p(l,c)}}function yt(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let i=0;i<e;i++)n[i]=-1;return n}return-1}function bt(t){const n={};for(const e in t)n[e]=!0;return n}function gt(t){return t??""}function xt(t,n,e){return t.set(e),n}let y=!1;function Et(){y=!0}function wt(){y=!1}function z(t,n,e,i){for(;t<n;){const c=t+(n-t>>1);e(c)<=i?t=c+1:n=c}return t}function F(t){if(t.hydrate_init)return;t.hydrate_init=!0;let n=t.childNodes;if(t.nodeName==="HEAD"){const r=[];for(let u=0;u<n.length;u++){const a=n[u];a.claim_order!==void 0&&r.push(a)}n=r}const e=new Int32Array(n.length+1),i=new Int32Array(n.length);e[0]=-1;let c=0;for(let r=0;r<n.length;r++){const u=n[r].claim_order,a=(c>0&&n[e[c]].claim_order<=u?c+1:z(1,c,P=>n[e[P]].claim_order,u))-1;i[r]=e[a]+1;const A=a+1;e[A]=r,c=Math.max(A,c)}const o=[],l=[];let s=n.length-1;for(let r=e[c]+1;r!=0;r=i[r-1]){for(o.push(n[r-1]);s>=r;s--)l.push(n[s]);s--}for(;s>=0;s--)l.push(n[s]);o.reverse(),l.sort((r,u)=>r.claim_order-u.claim_order);for(let r=0,u=0;r<l.length;r++){for(;u<o.length&&l[r].claim_order>=o[u].claim_order;)u++;const a=u<o.length?o[u]:null;t.insertBefore(l[r],a)}}function U(t,n){t.appendChild(n)}function W(t){if(!t)return document;const n=t.getRootNode?t.getRootNode():t.ownerDocument;return n&&n.host?n:t.ownerDocument}function Nt(t){const n=v("style");return n.textContent="/* empty */",J(W(t),n),n.sheet}function J(t,n){return U(t.head||t,n),n.sheet}function K(t,n){if(y){for(F(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;n!==t.actual_end_child?(n.claim_order!==void 0||n.parentNode!==t)&&t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling}else(n.parentNode!==t||n.nextSibling!==null)&&t.appendChild(n)}function Q(t,n,e){t.insertBefore(n,e||null)}function V(t,n,e){y&&!e?K(t,n):(n.parentNode!==t||n.nextSibling!=e)&&t.insertBefore(n,e||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function Tt(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function v(t){return document.createElement(t)}function X(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function k(t){return document.createTextNode(t)}function vt(){return k(" ")}function kt(){return k("")}function At(t,n,e,i){return t.addEventListener(n,e,i),()=>t.removeEventListener(n,e,i)}function Y(t,n,e){e==null?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function Lt(t,n,e){const i=n.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&e===""?!0:e:n in t?t[n]=typeof t[n]=="boolean"&&e===""?!0:e:Y(t,n,e)}function Mt(t){return t.dataset.svelteH}function Ct(t){let n;return{p(...e){n=e,n.forEach(i=>t.push(i))},r(){n.forEach(e=>t.splice(t.indexOf(e),1))}}}function Ht(t,n){let e=c(t),i;function c(s){for(let r=0;r<n.length;r++)s=s[n[r]]=s[n[r]]||[];return s}function o(){i.forEach(s=>e.push(s))}function l(){i.forEach(s=>e.splice(e.indexOf(s),1))}return{u(s){n=s;const r=c(t);r!==e&&(l(),e=r,o())},p(...s){i=s,o()},r:l}}function St(t){return t===""?null:+t}function jt(t){return Array.from(t.childNodes)}function H(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,n,e,i,c=!1){H(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const s=t[l];if(n(s)){const r=e(s);return r===void 0?t.splice(l,1):t[l]=r,c||(t.claim_info.last_index=l),s}}for(let l=t.claim_info.last_index-1;l>=0;l--){const s=t[l];if(n(s)){const r=e(s);return r===void 0?t.splice(l,1):t[l]=r,c?r===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,s}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function Z(t,n,e,i){return S(t,c=>c.nodeName===n,c=>{const o=[];for(let l=0;l<c.attributes.length;l++){const s=c.attributes[l];e[s.name]||o.push(s.name)}o.forEach(l=>c.removeAttribute(l))},()=>i(n))}function Pt(t,n,e){return Z(t,n,e,v)}function $(t,n){return S(t,e=>e.nodeType===3,e=>{const i=""+n;if(e.data.startsWith(i)){if(e.data.length!==i.length)return e.splitText(i.length)}else e.data=i},()=>k(n),!0)}function Dt(t){return $(t," ")}function L(t,n,e){for(let i=e;i<t.length;i+=1){const c=t[i];if(c.nodeType===8&&c.textContent.trim()===n)return i}return-1}function qt(t,n){const e=L(t,"HTML_TAG_START",0),i=L(t,"HTML_TAG_END",e+1);if(e===-1||i===-1)return new g(n);H(t);const c=t.splice(e,i-e+1);w(c[0]),w(c[c.length-1]);const o=c.slice(1,c.length-1);if(o.length===0)return new g(n);for(const l of o)l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new g(n,o)}function Ot(t,n){n=""+n,t.data!==n&&(t.data=n)}function Bt(t,n){t.value=n??""}function It(t,n,e,i){e==null?t.style.removeProperty(n):t.style.setProperty(n,e,"")}function Rt(t,n,e){for(let i=0;i<t.options.length;i+=1){const c=t.options[i];if(c.__value===n){c.selected=!0;return}}(!e||n!==void 0)&&(t.selectedIndex=-1)}function Gt(t){const n=t.querySelector(":checked");return n&&n.__value}function zt(t,n,e){t.classList.toggle(n,!!e)}function tt(t,n,{bubbles:e=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:n,bubbles:e,cancelable:i})}class nt{constructor(n=!1){f(this,"is_svg",!1);f(this,"e");f(this,"n");f(this,"t");f(this,"a");this.is_svg=n,this.e=this.n=null}c(n){this.h(n)}m(n,e,i=null){this.e||(this.is_svg?this.e=X(e.nodeName):this.e=v(e.nodeType===11?"TEMPLATE":e.nodeName),this.t=e.tagName!=="TEMPLATE"?e:e.content,this.c(n)),this.i(i)}h(n){this.e.innerHTML=n,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(n){for(let e=0;e<this.n.length;e+=1)Q(this.t,this.n[e],n)}p(n){this.d(),this.h(n),this.i(this.a)}d(){this.n.forEach(w)}}class g extends nt{constructor(e=!1,i){super(e);f(this,"l");this.e=this.n=null,this.l=i}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let i=0;i<this.n.length;i+=1)V(this.t,this.n[i],e)}}function Ft(t,n){return new t(n)}let p;function x(t){p=t}function b(){if(!p)throw new Error("Function called outside component initialization");return p}function Ut(t){b().$$.on_mount.push(t)}function Wt(t){b().$$.after_update.push(t)}function Jt(t){b().$$.on_destroy.push(t)}function Kt(){const t=b();return(n,e,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[n];if(c){const o=tt(n,e,{cancelable:i});return c.slice().forEach(l=>{l.call(t,o)}),!o.defaultPrevented}return!0}}function Qt(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(i=>i.call(this,n))}const d=[],M=[];let h=[];const N=[],j=Promise.resolve();let T=!1;function et(){T||(T=!0,j.then(ct))}function Vt(){return et(),j}function it(t){h.push(t)}function Xt(t){N.push(t)}const E=new Set;let _=0;function ct(){if(_!==0)return;const t=p;do{try{for(;_<d.length;){const n=d[_];_++,x(n),lt(n.$$)}}catch(n){throw d.length=0,_=0,n}for(x(null),d.length=0,_=0;M.length;)M.pop()();for(let n=0;n<h.length;n+=1){const e=h[n];E.has(e)||(E.add(e),e())}h.length=0}while(d.length);for(;N.length;)N.pop()();T=!1,E.clear(),x(t)}function lt(t){if(t.fragment!==null){t.update(),R(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(it)}}function Yt(t){const n=[],e=[];h.forEach(i=>t.indexOf(i)===-1?n.push(i):e.push(i)),e.forEach(i=>i()),h=n}export{Et as $,Gt as A,Ct as B,it as C,qt as D,ut as E,Jt as F,M as G,g as H,ht as I,Wt as J,Qt as K,Kt as L,Ft as M,Vt as N,W as O,Nt as P,tt as Q,rt as R,ot as S,ct as T,_t as U,Yt as V,p as W,x as X,I as Y,d as Z,et as _,kt as a,wt as a0,Ht as a1,dt as a2,zt as a3,pt as a4,yt as a5,mt as a6,Lt as a7,Xt as a8,bt as a9,xt as aa,vt as b,Pt as c,w as d,v as e,jt as f,Mt as g,Dt as h,V as i,Y as j,K as k,At as l,Tt as m,O as n,Ut as o,$ as p,Ot as q,It as r,at as s,k as t,gt as u,ft as v,Bt as w,St as x,R as y,Rt as z};