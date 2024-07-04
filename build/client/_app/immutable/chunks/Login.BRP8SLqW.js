import{s as fn,e as p,b as E,t as We,c as g,f as B,h as I,g as re,d as A,p as qe,v as ie,j as u,r as O,i as Mt,k as f,w as ge,l as ae,y as hn,q as pn}from"./scheduler.-UlM-m53.js";import{S as gn,i as bn,c as mn,a as wn,m as yn,t as vn,b as _n,d as En}from"./index.UV4btmqA.js";import{B as In}from"./Button.D4IuMFKE.js";import{f as pt}from"./not.CKuSUAlB.js";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let a=e.charCodeAt(r);a<128?t[n++]=a:a<2048?(t[n++]=a>>6|192,t[n++]=a&63|128):(a&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(a=65536+((a&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=a>>18|240,t[n++]=a>>12&63|128,t[n++]=a>>6&63|128,t[n++]=a&63|128):(t[n++]=a>>12|224,t[n++]=a>>6&63|128,t[n++]=a&63|128)}return t},Sn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const a=e[n++];if(a<128)t[r++]=String.fromCharCode(a);else if(a>191&&a<224){const s=e[n++];t[r++]=String.fromCharCode((a&31)<<6|s&63)}else if(a>239&&a<365){const s=e[n++],o=e[n++],c=e[n++],i=((a&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(i&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((a&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Tn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let a=0;a<e.length;a+=3){const s=e[a],o=a+1<e.length,c=o?e[a+1]:0,i=a+2<e.length,l=i?e[a+2]:0,d=s>>2,C=(s&3)<<4|c>>4;let v=(c&15)<<2|l>>6,M=l&63;i||(M=64,o||(v=64)),r.push(n[d],n[C],n[v],n[M])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Rt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Sn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let a=0;a<e.length;){const s=n[e.charAt(a++)],c=a<e.length?n[e.charAt(a)]:0;++a;const l=a<e.length?n[e.charAt(a)]:64;++a;const C=a<e.length?n[e.charAt(a)]:64;if(++a,s==null||c==null||l==null||C==null)throw new An;const v=s<<2|c>>4;if(r.push(v),l!==64){const M=c<<4&240|l>>2;if(r.push(M),C!==64){const z=l<<6&192|C;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class An extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Cn=function(e){const t=Rt(e);return Tn.encodeByteArray(t,!0)},Pt=function(e){return Cn(e).replace(/\./g,"")};function Dn(){try{return typeof indexedDB=="object"}catch{return!1}}function kn(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(r);a.onsuccess=()=>{a.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},a.onupgradeneeded=()=>{n=!1},a.onerror=()=>{var s;t(((s=a.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On="FirebaseError";class se extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=On,Object.setPrototypeOf(this,se.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,me.prototype.create)}}class me{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},a=`${this.service}/${t}`,s=this.errors[t],o=s?Nn(s,r):"Error",c=`${this.serviceName}: ${o} (${a}).`;return new se(a,c,r)}}function Nn(e,t){return e.replace(Bn,(n,r)=>{const a=t[r];return a!=null?String(a):`<${r}?>`})}const Bn=/\{\$([^}]+)}/g;class X{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const Mn={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},Rn=h.INFO,Pn={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},$n=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),a=Pn[t];if(a)console[a](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ln{constructor(t){this.name=t,this._logLevel=Rn,this._logHandler=$n,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Mn[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const xn=(e,t)=>t.some(n=>e instanceof n);let gt,bt;function Hn(){return gt||(gt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Fn(){return bt||(bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $t=new WeakMap,Ge=new WeakMap,Lt=new WeakMap,$e=new WeakMap,Qe=new WeakMap;function Vn(e){const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(L(e.result)),a()},o=()=>{r(e.error),a()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&$t.set(n,e)}).catch(()=>{}),Qe.set(t,e),t}function jn(e){if(Ge.has(e))return;const t=new Promise((n,r)=>{const a=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),a()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});Ge.set(e,t)}let Je={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Ge.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Lt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function zn(e){Je=e(Je)}function Kn(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Le(this),t,...n);return Lt.set(r,t.sort?t.sort():[t]),L(r)}:Fn().includes(e)?function(...t){return e.apply(Le(this),t),L($t.get(this))}:function(...t){return L(e.apply(Le(this),t))}}function Un(e){return typeof e=="function"?Kn(e):(e instanceof IDBTransaction&&jn(e),xn(e,Hn())?new Proxy(e,Je):e)}function L(e){if(e instanceof IDBRequest)return Vn(e);if($e.has(e))return $e.get(e);const t=Un(e);return t!==e&&($e.set(e,t),Qe.set(t,e)),t}const Le=e=>Qe.get(e);function we(e,t,{blocked:n,upgrade:r,blocking:a,terminated:s}={}){const o=indexedDB.open(e,t),c=L(o);return r&&o.addEventListener("upgradeneeded",i=>{r(L(o.result),i.oldVersion,i.newVersion,L(o.transaction),i)}),n&&o.addEventListener("blocked",i=>n(i.oldVersion,i.newVersion,i)),c.then(i=>{s&&i.addEventListener("close",()=>s()),a&&i.addEventListener("versionchange",l=>a(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function xe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),L(n).then(()=>{})}const Wn=["get","getKey","getAll","getAllKeys","count"],qn=["put","add","delete","clear"],He=new Map;function mt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(He.get(t))return He.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,a=qn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(a||Wn.includes(n)))return;const s=async function(o,...c){const i=this.transaction(o,a?"readwrite":"readonly");let l=i.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),a&&i.done]))[0]};return He.set(t,s),s}zn(e=>({...e,get:(t,n,r)=>mt(t,n)||e.get(t,n,r),has:(t,n)=>!!mt(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Jn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Jn(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ye="@firebase/app",wt="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=new Ln("@firebase/app"),Yn="@firebase/app-compat",Xn="@firebase/analytics-compat",Qn="@firebase/analytics",Zn="@firebase/app-check-compat",er="@firebase/app-check",tr="@firebase/auth",nr="@firebase/auth-compat",rr="@firebase/database",ar="@firebase/database-compat",sr="@firebase/functions",or="@firebase/functions-compat",ir="@firebase/installations",cr="@firebase/installations-compat",lr="@firebase/messaging",ur="@firebase/messaging-compat",dr="@firebase/performance",fr="@firebase/performance-compat",hr="@firebase/remote-config",pr="@firebase/remote-config-compat",gr="@firebase/storage",br="@firebase/storage-compat",mr="@firebase/firestore",wr="@firebase/vertexai-preview",yr="@firebase/firestore-compat",vr="firebase",_r={[Ye]:"fire-core",[Yn]:"fire-core-compat",[Qn]:"fire-analytics",[Xn]:"fire-analytics-compat",[er]:"fire-app-check",[Zn]:"fire-app-check-compat",[tr]:"fire-auth",[nr]:"fire-auth-compat",[rr]:"fire-rtdb",[ar]:"fire-rtdb-compat",[sr]:"fire-fn",[or]:"fire-fn-compat",[ir]:"fire-iid",[cr]:"fire-iid-compat",[lr]:"fire-fcm",[ur]:"fire-fcm-compat",[dr]:"fire-perf",[fr]:"fire-perf-compat",[hr]:"fire-rc",[pr]:"fire-rc-compat",[gr]:"fire-gcs",[br]:"fire-gcs-compat",[mr]:"fire-fst",[yr]:"fire-fst-compat",[wr]:"fire-vertex","fire-js":"fire-js",[vr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new Map,Ir=new Map,yt=new Map;function vt(e,t){try{e.container.addComponent(t)}catch(n){Q.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Z(e){const t=e.name;if(yt.has(t))return Q.debug(`There were multiple attempts to register component ${t}.`),!1;yt.set(t,e);for(const n of Er.values())vt(n,e);for(const n of Ir.values())vt(n,e);return!0}function xt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ze=new me("app","Firebase",Sr);function j(e,t,n){var r;let a=(r=_r[e])!==null&&r!==void 0?r:e;n&&(a+=`-${n}`);const s=a.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const c=[`Unable to register library "${a}" with version "${t}":`];s&&c.push(`library name "${a}" contains illegal characters (whitespace or "/")`),s&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Q.warn(c.join(" "));return}Z(new X(`${a}-version`,()=>({library:a,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="firebase-heartbeat-database",Ar=1,ce="firebase-heartbeat-store";let Fe=null;function Ht(){return Fe||(Fe=we(Tr,Ar,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(ce)}catch(n){console.warn(n)}}}}).catch(e=>{throw Ze.create("idb-open",{originalErrorMessage:e.message})})),Fe}async function Cr(e){try{const n=(await Ht()).transaction(ce),r=await n.objectStore(ce).get(Ft(e));return await n.done,r}catch(t){if(t instanceof se)Q.warn(t.message);else{const n=Ze.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Q.warn(n.message)}}}async function _t(e,t){try{const r=(await Ht()).transaction(ce,"readwrite");await r.objectStore(ce).put(t,Ft(e)),await r.done}catch(n){if(n instanceof se)Q.warn(n.message);else{const r=Ze.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Q.warn(r.message)}}}function Ft(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=1024,kr=30*24*60*60*1e3;class Or{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Br(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Et();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=kr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Et(),{heartbeatsToSend:r,unsentEntries:a}=Nr(this._heartbeatsCache.heartbeats),s=Pt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Et(){return new Date().toISOString().substring(0,10)}function Nr(e,t=Dr){const n=[];let r=e.slice();for(const a of e){const s=n.find(o=>o.agent===a.agent);if(s){if(s.dates.push(a.date),It(n)>t){s.dates.pop();break}}else if(n.push({agent:a.agent,dates:[a.date]}),It(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Br{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Dn()?kn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Cr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return _t(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const a=await this.read();return _t(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...t.heartbeats]})}else return}}function It(e){return Pt(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(e){Z(new X("platform-logger",t=>new Gn(t),"PRIVATE")),Z(new X("heartbeat",t=>new Or(t),"PRIVATE")),j(Ye,wt,e),j(Ye,wt,"esm2017"),j("fire-js","")}Mr("");var Rr="firebase",Pr="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */j(Rr,Pr,"app");const Vt="@firebase/installations",et="0.6.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt=1e4,zt=`w:${et}`,Kt="FIS_v2",$r="https://firebaseinstallations.googleapis.com/v1",Lr=60*60*1e3,xr="installations",Hr="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ee=new me(xr,Hr,Fr);function Ut(e){return e instanceof se&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt({projectId:e}){return`${$r}/projects/${e}/installations`}function qt(e){return{token:e.token,requestStatus:2,expiresIn:jr(e.expiresIn),creationTime:Date.now()}}async function Gt(e,t){const r=(await t.json()).error;return ee.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Jt({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Vr(e,{refreshToken:t}){const n=Jt(e);return n.append("Authorization",zr(t)),n}async function Yt(e){const t=await e();return t.status>=500&&t.status<600?e():t}function jr(e){return Number(e.replace("s","000"))}function zr(e){return`${Kt} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kr({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=Wt(e),a=Jt(e),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const o={fid:n,authVersion:Kt,appId:e.appId,sdkVersion:zt},c={method:"POST",headers:a,body:JSON.stringify(o)},i=await Yt(()=>fetch(r,c));if(i.ok){const l=await i.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:qt(l.authToken)}}else throw await Gt("Create Installation",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr=/^[cdef][\w-]{21}$/,Xe="";function qr(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Gr(e);return Wr.test(n)?n:Xe}catch{return Xe}}function Gr(e){return Ur(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt=new Map;function Zt(e,t){const n=ye(e);en(n,t),Jr(n,t)}function en(e,t){const n=Qt.get(e);if(n)for(const r of n)r(t)}function Jr(e,t){const n=Yr();n&&n.postMessage({key:e,fid:t}),Xr()}let Y=null;function Yr(){return!Y&&"BroadcastChannel"in self&&(Y=new BroadcastChannel("[Firebase] FID Change"),Y.onmessage=e=>{en(e.data.key,e.data.fid)}),Y}function Xr(){Qt.size===0&&Y&&(Y.close(),Y=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr="firebase-installations-database",Zr=1,te="firebase-installations-store";let Ve=null;function tt(){return Ve||(Ve=we(Qr,Zr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(te)}}})),Ve}async function be(e,t){const n=ye(e),a=(await tt()).transaction(te,"readwrite"),s=a.objectStore(te),o=await s.get(n);return await s.put(t,n),await a.done,(!o||o.fid!==t.fid)&&Zt(e,t.fid),t}async function tn(e){const t=ye(e),r=(await tt()).transaction(te,"readwrite");await r.objectStore(te).delete(t),await r.done}async function ve(e,t){const n=ye(e),a=(await tt()).transaction(te,"readwrite"),s=a.objectStore(te),o=await s.get(n),c=t(o);return c===void 0?await s.delete(n):await s.put(c,n),await a.done,c&&(!o||o.fid!==c.fid)&&Zt(e,c.fid),c}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e){let t;const n=await ve(e.appConfig,r=>{const a=ea(r),s=ta(e,a);return t=s.registrationPromise,s.installationEntry});return n.fid===Xe?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function ea(e){const t=e||{fid:qr(),registrationStatus:0};return nn(t)}function ta(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(ee.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=na(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ra(e)}:{installationEntry:t}}async function na(e,t){try{const n=await Kr(e,t);return be(e.appConfig,n)}catch(n){throw Ut(n)&&n.customData.serverCode===409?await tn(e.appConfig):await be(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ra(e){let t=await St(e.appConfig);for(;t.registrationStatus===1;)await Xt(100),t=await St(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await nt(e);return r||n}return t}function St(e){return ve(e,t=>{if(!t)throw ee.create("installation-not-found");return nn(t)})}function nn(e){return aa(e)?{fid:e.fid,registrationStatus:0}:e}function aa(e){return e.registrationStatus===1&&e.registrationTime+jt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa({appConfig:e,heartbeatServiceProvider:t},n){const r=oa(e,n),a=Vr(e,n),s=t.getImmediate({optional:!0});if(s){const l=await s.getHeartbeatsHeader();l&&a.append("x-firebase-client",l)}const o={installation:{sdkVersion:zt,appId:e.appId}},c={method:"POST",headers:a,body:JSON.stringify(o)},i=await Yt(()=>fetch(r,c));if(i.ok){const l=await i.json();return qt(l)}else throw await Gt("Generate Auth Token",i)}function oa(e,{fid:t}){return`${Wt(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t=!1){let n;const r=await ve(e.appConfig,s=>{if(!rn(s))throw ee.create("not-registered");const o=s.authToken;if(!t&&la(o))return s;if(o.requestStatus===1)return n=ia(e,t),s;{if(!navigator.onLine)throw ee.create("app-offline");const c=da(s);return n=ca(e,c),c}});return n?await n:r.authToken}async function ia(e,t){let n=await Tt(e.appConfig);for(;n.authToken.requestStatus===1;)await Xt(100),n=await Tt(e.appConfig);const r=n.authToken;return r.requestStatus===0?rt(e,t):r}function Tt(e){return ve(e,t=>{if(!rn(t))throw ee.create("not-registered");const n=t.authToken;return fa(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function ca(e,t){try{const n=await sa(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await be(e.appConfig,r),n}catch(n){if(Ut(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await tn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await be(e.appConfig,r)}throw n}}function rn(e){return e!==void 0&&e.registrationStatus===2}function la(e){return e.requestStatus===2&&!ua(e)}function ua(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Lr}function da(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function fa(e){return e.requestStatus===1&&e.requestTime+jt<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(e){const t=e,{installationEntry:n,registrationPromise:r}=await nt(t);return r?r.catch(console.error):rt(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(e,t=!1){const n=e;return await ga(n),(await rt(n,t)).token}async function ga(e){const{registrationPromise:t}=await nt(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ba(e){if(!e||!e.options)throw je("App Configuration");if(!e.name)throw je("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw je(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function je(e){return ee.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an="installations",ma="installations-internal",wa=e=>{const t=e.getProvider("app").getImmediate(),n=ba(t),r=xt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},ya=e=>{const t=e.getProvider("app").getImmediate(),n=xt(t,an).getImmediate();return{getId:()=>ha(n),getToken:a=>pa(n,a)}};function va(){Z(new X(an,wa,"PUBLIC")),Z(new X(ma,ya,"PRIVATE"))}va();j(Vt,et);j(Vt,et,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="/firebase-messaging-sw.js",Ea="/firebase-cloud-messaging-push-scope",sn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ia="https://fcmregistrations.googleapis.com/v1",on="google.c.a.c_id",Sa="google.c.a.c_l",Ta="google.c.a.ts",Aa="google.c.a.e";var At;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(At||(At={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var le;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(le||(le={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ca(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),a=new Uint8Array(r.length);for(let s=0;s<r.length;++s)a[s]=r.charCodeAt(s);return a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="fcm_token_details_db",Da=5,Ct="fcm_token_object_Store";async function ka(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(s=>s.name).includes(ze))return null;let t=null;return(await we(ze,Da,{upgrade:async(r,a,s,o)=>{var c;if(a<2||!r.objectStoreNames.contains(Ct))return;const i=o.objectStore(Ct),l=await i.index("fcmSenderId").get(e);if(await i.clear(),!!l){if(a===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(c=d.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:$(d.vapidKey)}}}else if(a===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:$(d.auth),p256dh:$(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:$(d.vapidKey)}}}else if(a===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:$(d.auth),p256dh:$(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:$(d.vapidKey)}}}}}})).close(),await xe(ze),await xe("fcm_vapid_details_db"),await xe("undefined"),Oa(t)?t:null}function Oa(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="firebase-messaging-database",Ba=1,ue="firebase-messaging-store";let Ke=null;function cn(){return Ke||(Ke=we(Na,Ba,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ue)}}})),Ke}async function Ma(e){const t=ln(e),r=await(await cn()).transaction(ue).objectStore(ue).get(t);if(r)return r;{const a=await ka(e.appConfig.senderId);if(a)return await at(e,a),a}}async function at(e,t){const n=ln(e),a=(await cn()).transaction(ue,"readwrite");return await a.objectStore(ue).put(t,n),await a.done,t}function ln({appConfig:e}){return e.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},T=new me("messaging","Messaging",Ra);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pa(e,t){const n=await ot(e),r=un(t),a={method:"POST",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(st(e.appConfig),a)).json()}catch(o){throw T.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw T.create("token-subscribe-failed",{errorInfo:o})}if(!s.token)throw T.create("token-subscribe-no-token");return s.token}async function $a(e,t){const n=await ot(e),r=un(t.subscriptionOptions),a={method:"PATCH",headers:n,body:JSON.stringify(r)};let s;try{s=await(await fetch(`${st(e.appConfig)}/${t.token}`,a)).json()}catch(o){throw T.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(s.error){const o=s.error.message;throw T.create("token-update-failed",{errorInfo:o})}if(!s.token)throw T.create("token-update-no-token");return s.token}async function La(e,t){const r={method:"DELETE",headers:await ot(e)};try{const s=await(await fetch(`${st(e.appConfig)}/${t}`,r)).json();if(s.error){const o=s.error.message;throw T.create("token-unsubscribe-failed",{errorInfo:o})}}catch(a){throw T.create("token-unsubscribe-failed",{errorInfo:a==null?void 0:a.toString()})}}function st({projectId:e}){return`${Ia}/projects/${e}/registrations`}async function ot({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function un({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const a={web:{endpoint:n,auth:t,p256dh:e}};return r!==sn&&(a.web.applicationPubKey=r),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=7*24*60*60*1e3;async function Ha(e){const t=await Va(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:$(t.getKey("auth")),p256dh:$(t.getKey("p256dh"))},r=await Ma(e.firebaseDependencies);if(r){if(ja(r.subscriptionOptions,n))return Date.now()>=r.createTime+xa?Fa(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await La(e.firebaseDependencies,r.token)}catch(a){console.warn(a)}return Dt(e.firebaseDependencies,n)}else return Dt(e.firebaseDependencies,n)}async function Fa(e,t){try{const n=await $a(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await at(e.firebaseDependencies,r),n}catch(n){throw n}}async function Dt(e,t){const r={token:await Pa(e,t),createTime:Date.now(),subscriptionOptions:t};return await at(e,r),r.token}async function Va(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ca(t)})}function ja(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,a=t.auth===e.auth,s=t.p256dh===e.p256dh;return n&&r&&a&&s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return za(t,e),Ka(t,e),Ua(t,e),t}function za(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const a=t.notification.image;a&&(e.notification.image=a);const s=t.notification.icon;s&&(e.notification.icon=s)}function Ka(e,t){t.data&&(e.data=t.data)}function Ua(e,t){var n,r,a,s,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(a=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&a!==void 0?a:(s=t.notification)===null||s===void 0?void 0:s.click_action;c&&(e.fcmOptions.link=c);const i=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wa(e){return typeof e=="object"&&!!e&&on in e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");dn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function dn(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(e){if(!e||!e.options)throw Ue("App Configuration Object");if(!e.name)throw Ue("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Ue(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ue(e){return T.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const a=qa(t);this.firebaseDependencies={app:t,appConfig:a,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ja(e){try{e.swRegistration=await navigator.serviceWorker.register(_a,{scope:Ea}),e.swRegistration.update().catch(()=>{})}catch(t){throw T.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ya(e,t){if(!t&&!e.swRegistration&&await Ja(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw T.create("invalid-sw-registration");e.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xa(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=sn)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qa(e,t){if(!navigator)throw T.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw T.create("permission-blocked");return await Xa(e,t==null?void 0:t.vapidKey),await Ya(e,t==null?void 0:t.serviceWorkerRegistration),Ha(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Za(e,t,n){const r=es(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[on],message_name:n[Sa],message_time:n[Ta],message_device_time:Math.floor(Date.now()/1e3)})}function es(e){switch(e){case le.NOTIFICATION_CLICKED:return"notification_open";case le.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ts(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===le.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(kt(n)):e.onMessageHandler.next(kt(n)));const r=n.data;Wa(r)&&r[Aa]==="1"&&await Za(e,n.messageType,r)}const Ot="@firebase/messaging",Nt="0.12.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=e=>{const t=new Ga(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>ts(t,n)),t},rs=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Qa(t,r)}};function as(){Z(new X("messaging",ns,"PUBLIC")),Z(new X("messaging-internal",rs,"PRIVATE")),j(Ot,Nt),j(Ot,Nt,"esm2017")}as();function Bt(e){let t,n;return{c(){t=p("p"),n=We(e[3]),this.h()},l(r){t=g(r,"P",{class:!0});var a=B(t);n=qe(a,e[3]),a.forEach(A),this.h()},h(){u(t,"class","error-message svelte-yl5zze")},m(r,a){Mt(r,t,a),f(t,n)},p(r,a){a&8&&pn(n,r[3])},d(r){r&&A(t)}}}function ss(e){let t,n,r,a,s,o="Echo Dental Training Unit",c,i,l,d="LOG IN",C,v,M="Your email",z,x,b,K,it,_e,D,Ee,U,ct="Your password",Ie,R,N,W,lt,Se,k,Te,S,de,Ae,Ce,H,q,F,De,ke,P,ut="Lost password?",Oe,G,Ne,J,Be,V,dt="Contacting us",oe,Me,ft,w=e[3]&&Bt(e);return G=new In({props:{clickHandler:e[5],useTJ:!0,text:"Log in",width:"100%"}}),{c(){t=p("div"),n=p("img"),a=E(),s=p("h1"),s.textContent=o,c=E(),i=p("div"),l=p("h2"),l.textContent=d,C=E(),v=p("label"),v.textContent=M,z=E(),x=p("div"),b=p("div"),K=p("img"),_e=E(),D=p("input"),Ee=E(),U=p("label"),U.textContent=ct,Ie=E(),R=p("div"),N=p("div"),W=p("img"),Se=E(),k=p("input"),Te=E(),S=p("img"),Ae=E(),w&&w.c(),Ce=E(),H=p("div"),q=p("label"),F=p("input"),De=We(`\r
          Remember me`),ke=E(),P=p("a"),P.textContent=ut,Oe=E(),mn(G.$$.fragment),Ne=E(),J=p("p"),Be=We("Not registered? Create an account by "),V=p("u"),V.textContent=dt,this.h()},l(m){t=g(m,"DIV",{class:!0});var _=B(t);n=g(_,"IMG",{src:!0,alt:!0,width:!0,class:!0,style:!0}),a=I(_),s=g(_,"H1",{class:!0,style:!0,"data-svelte-h":!0}),re(s)!=="svelte-wstfby"&&(s.textContent=o),c=I(_),i=g(_,"DIV",{class:!0,style:!0});var y=B(i);l=g(y,"H2",{class:!0,style:!0,"data-svelte-h":!0}),re(l)!=="svelte-17ss5ox"&&(l.textContent=d),C=I(y),v=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),re(v)!=="svelte-9v1dp9"&&(v.textContent=M),z=I(y),x=g(y,"DIV",{class:!0});var ht=B(x);b=g(ht,"DIV",{class:!0});var fe=B(b);K=g(fe,"IMG",{src:!0,alt:!0,class:!0}),_e=I(fe),D=g(fe,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),fe.forEach(A),ht.forEach(A),Ee=I(y),U=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),re(U)!=="svelte-15gn3f4"&&(U.textContent=ct),Ie=I(y),R=g(y,"DIV",{class:!0});var he=B(R);N=g(he,"DIV",{class:!0});var ne=B(N);W=g(ne,"IMG",{src:!0,alt:!0,class:!0}),Se=I(ne),k=g(ne,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),Te=I(ne),S=g(ne,"IMG",{src:!0,style:!0,class:!0}),ne.forEach(A),Ae=I(he),w&&w.l(he),he.forEach(A),Ce=I(y),H=g(y,"DIV",{class:!0});var pe=B(H);q=g(pe,"LABEL",{class:!0});var Re=B(q);F=g(Re,"INPUT",{type:!0,class:!0}),De=qe(Re,`\r
          Remember me`),Re.forEach(A),ke=I(pe),P=g(pe,"A",{href:!0,class:!0,"data-svelte-h":!0}),re(P)!=="svelte-1y00aro"&&(P.textContent=ut),pe.forEach(A),Oe=I(y),wn(G.$$.fragment,y),Ne=I(y),J=g(y,"P",{class:!0});var Pe=B(J);Be=qe(Pe,"Not registered? Create an account by "),V=g(Pe,"U",{style:!0,"data-svelte-h":!0}),re(V)!=="svelte-1wiuusi"&&(V.textContent=dt),Pe.forEach(A),y.forEach(A),_.forEach(A),this.h()},h(){ie(n.src,r="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")||u(n,"src",r),u(n,"alt","Logo"),u(n,"width","90"),u(n,"class","logo svelte-yl5zze"),O(n,"bottom","10px"),O(n,"position","relative"),u(s,"class","main-title svelte-yl5zze"),O(s,"bottom","15px"),O(s,"position","relative"),u(l,"class","login-title svelte-yl5zze"),O(l,"margin","0 0 30px"),u(v,"class","svelte-yl5zze"),ie(K.src,it="/at.png")||u(K,"src",it),u(K,"alt","name icon"),u(K,"class","svelte-yl5zze"),u(D,"class","inputField svelte-yl5zze"),u(D,"type","email"),u(D,"id","email"),u(D,"placeholder","Enter your email"),u(b,"class","inputFieldCon svelte-yl5zze"),u(x,"class","input-container svelte-yl5zze"),u(U,"class","svelte-yl5zze"),ie(W.src,lt="/password.png")||u(W,"src",lt),u(W,"alt","name icon"),u(W,"class","svelte-yl5zze"),u(k,"class","inputField svelte-yl5zze"),u(k,"type","password"),u(k,"id","password"),u(k,"placeholder","Enter your password"),ie(S.src,de=e[4]?"/show.png":"/hide.png")||u(S,"src",de),O(S,"width","20px"),O(S,"height","20px"),O(S,"position","absolute"),O(S,"left","79%"),u(S,"class","svelte-yl5zze"),u(N,"class","inputFieldCon svelte-yl5zze"),u(R,"class","input-container svelte-yl5zze"),u(F,"type","checkbox"),u(F,"class","svelte-yl5zze"),u(q,"class","svelte-yl5zze"),u(P,"href","#"),u(P,"class","lost-password svelte-yl5zze"),u(H,"class","remember-lost-row svelte-yl5zze"),O(V,"cursor","pointer"),u(J,"class","not-registered svelte-yl5zze"),u(i,"class","neumorphic-box svelte-yl5zze"),O(i,"margin","0 0 30px"),u(t,"class","login-container svelte-yl5zze")},m(m,_){Mt(m,t,_),f(t,n),f(t,a),f(t,s),f(t,c),f(t,i),f(i,l),f(i,C),f(i,v),f(i,z),f(i,x),f(x,b),f(b,K),f(b,_e),f(b,D),ge(D,e[0]),f(i,Ee),f(i,U),f(i,Ie),f(i,R),f(R,N),f(N,W),f(N,Se),f(N,k),ge(k,e[1]),f(N,Te),f(N,S),f(R,Ae),w&&w.m(R,null),f(i,Ce),f(i,H),f(H,q),f(q,F),F.checked=e[2],f(q,De),f(H,ke),f(H,P),f(i,Oe),yn(G,i,null),f(i,Ne),f(i,J),f(J,Be),f(J,V),oe=!0,Me||(ft=[ae(D,"input",e[7]),ae(k,"input",e[8]),ae(S,"click",e[9]),ae(F,"change",e[10]),ae(P,"click",e[11]),ae(V,"click",e[12])],Me=!0)},p(m,[_]){_&1&&D.value!==m[0]&&ge(D,m[0]),_&2&&k.value!==m[1]&&ge(k,m[1]),(!oe||_&16&&!ie(S.src,de=m[4]?"/show.png":"/hide.png"))&&u(S,"src",de),m[3]?w?w.p(m,_):(w=Bt(m),w.c(),w.m(R,null)):w&&(w.d(1),w=null),_&4&&(F.checked=m[2])},i(m){oe||(vn(G.$$.fragment,m),oe=!0)},o(m){_n(G.$$.fragment,m),oe=!1},d(m){m&&A(t),w&&w.d(),En(G),Me=!1,hn(ft)}}}function os(e,t,n){let r="",a="",s=!1,o="",c=!1,{func:i}=t;function l(){r.length>7&&a.length>3?pt("n/si/",{email:r,p:a}).then(b=>{localStorage.setItem("li",!0),localStorage.setItem("t",b.t),localStorage.setItem("aslklx20002k,777",b.t==0||b.t==2?5:0),localStorage.setItem("n",b.n),localStorage.setItem("i",b.i),(b.t==0||b.t==2)&&(location.href="/admin"),location.reload()}).catch(b=>{n(3,o="Incorrect email or password")}):n(3,o="Incorrect email or password")}function d(){r=this.value,n(0,r)}function C(){a=this.value,n(1,a)}const v=()=>{document.getElementById("password").type=c?"password":"text",n(4,c=!c)};function M(){s=this.checked,n(2,s)}const z=()=>{console.log(r),r&&r.includes("@echo")&&pt("u/fop",{email:r})},x=()=>{location.href="/contact-us"};return e.$$set=b=>{"func"in b&&n(6,i=b.func)},[r,a,s,o,c,l,i,d,C,v,M,z,x]}class ds extends gn{constructor(t){super(),bn(this,t,os,ss,fn,{func:6})}}export{ds as L};
