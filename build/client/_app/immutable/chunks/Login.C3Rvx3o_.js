import{s as Tn,e as p,a as E,t as Je,c as g,b as N,f as I,g as ae,d as A,m as Ye,v as le,p as u,h as B,i as Kt,j as f,w as be,q as oe,y as An,r as Dn}from"./scheduler.BVAlSgfp.js";import{S as Cn,i as kn,c as Bn,a as On,m as Nn,t as Mn,b as $n,e as Rn}from"./index.B7Z5KU1K.js";import{B as Pn}from"./Button.i6syXr_6.js";import{f as It}from"./not.DlsTAyDt.js";/**
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
 */const Wt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ln=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=e[n++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=e[n++],o=e[n++],c=e[n++],i=((s&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(i&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|o&63)}}return t.join("")},xn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const a=e[s],o=s+1<e.length,c=o?e[s+1]:0,i=s+2<e.length,l=i?e[s+2]:0,d=a>>2,D=(a&3)<<4|c>>4;let _=(c&15)<<2|l>>6,M=l&63;i||(M=64,o||(_=64)),r.push(n[d],n[D],n[_],n[M])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Wt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ln(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const a=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const D=s<e.length?n[e.charAt(s)]:64;if(++s,a==null||c==null||l==null||D==null)throw new Hn;const _=a<<2|c>>4;if(r.push(_),l!==64){const M=c<<4&240|l>>2;if(r.push(M),D!==64){const K=l<<6&192|D;r.push(K)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Hn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jn=function(e){const t=Wt(e);return xn.encodeByteArray(t,!0)},Ut=function(e){return jn(e).replace(/\./g,"")};function Vn(){try{return typeof indexedDB=="object"}catch{return!1}}function Fn(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}/**
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
 */const zn="FirebaseError";class ie extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=zn,Object.setPrototypeOf(this,ie.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,we.prototype.create)}}class we{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,a=this.errors[t],o=a?Kn(a,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ie(s,c,r)}}function Kn(e,t){return e.replace(Wn,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Wn=/\{\$([^}]+)}/g;class Q{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const Un={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},qn=h.INFO,Gn={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},Jn=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=Gn[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Yn{constructor(t){this.name=t,this._logLevel=qn,this._logHandler=Jn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Un[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const Xn=(e,t)=>t.some(n=>e instanceof n);let St,Tt;function Qn(){return St||(St=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zn(){return Tt||(Tt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qt=new WeakMap,Xe=new WeakMap,Gt=new WeakMap,Pe=new WeakMap,rt=new WeakMap;function er(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(L(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&qt.set(n,e)}).catch(()=>{}),rt.set(t,e),t}function tr(e){if(Xe.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});Xe.set(e,t)}let Qe={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xe.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return L(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function nr(e){Qe=e(Qe)}function rr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Le(this),t,...n);return Gt.set(r,t.sort?t.sort():[t]),L(r)}:Zn().includes(e)?function(...t){return e.apply(Le(this),t),L(qt.get(this))}:function(...t){return L(e.apply(Le(this),t))}}function sr(e){return typeof e=="function"?rr(e):(e instanceof IDBTransaction&&tr(e),Xn(e,Qn())?new Proxy(e,Qe):e)}function L(e){if(e instanceof IDBRequest)return er(e);if(Pe.has(e))return Pe.get(e);const t=sr(e);return t!==e&&(Pe.set(e,t),rt.set(t,e)),t}const Le=e=>rt.get(e);function st(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const o=indexedDB.open(e,t),c=L(o);return r&&o.addEventListener("upgradeneeded",i=>{r(L(o.result),i.oldVersion,i.newVersion,L(o.transaction),i)}),n&&o.addEventListener("blocked",i=>n(i.oldVersion,i.newVersion,i)),c.then(i=>{a&&i.addEventListener("close",()=>a()),s&&i.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function xe(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),L(n).then(()=>{})}const ar=["get","getKey","getAll","getAllKeys","count"],or=["put","add","delete","clear"],He=new Map;function At(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(He.get(t))return He.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=or.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||ar.includes(n)))return;const a=async function(o,...c){const i=this.transaction(o,s?"readwrite":"readonly");let l=i.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&i.done]))[0]};return He.set(t,a),a}nr(e=>({...e,get:(t,n,r)=>At(t,n)||e.get(t,n,r),has:(t,n)=>!!At(t,n)||e.has(t,n)}));/**
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
 */class ir{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function cr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Ze="@firebase/app",Dt="0.9.25";/**
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
 */const Z=new Yn("@firebase/app"),lr="@firebase/app-compat",ur="@firebase/analytics-compat",dr="@firebase/analytics",fr="@firebase/app-check-compat",hr="@firebase/app-check",pr="@firebase/auth",gr="@firebase/auth-compat",br="@firebase/database",mr="@firebase/database-compat",wr="@firebase/functions",yr="@firebase/functions-compat",_r="@firebase/installations",vr="@firebase/installations-compat",Er="@firebase/messaging",Ir="@firebase/messaging-compat",Sr="@firebase/performance",Tr="@firebase/performance-compat",Ar="@firebase/remote-config",Dr="@firebase/remote-config-compat",Cr="@firebase/storage",kr="@firebase/storage-compat",Br="@firebase/firestore",Or="@firebase/firestore-compat",Nr="firebase",Mr={[Ze]:"fire-core",[lr]:"fire-core-compat",[dr]:"fire-analytics",[ur]:"fire-analytics-compat",[hr]:"fire-app-check",[fr]:"fire-app-check-compat",[pr]:"fire-auth",[gr]:"fire-auth-compat",[br]:"fire-rtdb",[mr]:"fire-rtdb-compat",[wr]:"fire-fn",[yr]:"fire-fn-compat",[_r]:"fire-iid",[vr]:"fire-iid-compat",[Er]:"fire-fcm",[Ir]:"fire-fcm-compat",[Sr]:"fire-perf",[Tr]:"fire-perf-compat",[Ar]:"fire-rc",[Dr]:"fire-rc-compat",[Cr]:"fire-gcs",[kr]:"fire-gcs-compat",[Br]:"fire-fst",[Or]:"fire-fst-compat","fire-js":"fire-js",[Nr]:"fire-js-all"};/**
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
 */const $r=new Map,Ct=new Map;function Rr(e,t){try{e.container.addComponent(t)}catch(n){Z.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ee(e){const t=e.name;if(Ct.has(t))return Z.debug(`There were multiple attempts to register component ${t}.`),!1;Ct.set(t,e);for(const n of $r.values())Rr(n,e);return!0}function Jt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Pr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},at=new we("app","Firebase",Pr);function F(e,t,n){var r;let s=(r=Mr[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const c=[`Unable to register library "${s}" with version "${t}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),Z.warn(c.join(" "));return}ee(new Q(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Lr="firebase-heartbeat-database",xr=1,ue="firebase-heartbeat-store";let je=null;function Yt(){return je||(je=st(Lr,xr,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ue)}}}).catch(e=>{throw at.create("idb-open",{originalErrorMessage:e.message})})),je}async function Hr(e){try{return await(await Yt()).transaction(ue).objectStore(ue).get(Xt(e))}catch(t){if(t instanceof ie)Z.warn(t.message);else{const n=at.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});Z.warn(n.message)}}}async function kt(e,t){try{const r=(await Yt()).transaction(ue,"readwrite");await r.objectStore(ue).put(t,Xt(e)),await r.done}catch(n){if(n instanceof ie)Z.warn(n.message);else{const r=at.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Z.warn(r.message)}}}function Xt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const jr=1024,Vr=30*24*60*60*1e3;class Fr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=Bt();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Vr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Bt(),{heartbeatsToSend:r,unsentEntries:s}=zr(this._heartbeatsCache.heartbeats),a=Ut(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function Bt(){return new Date().toISOString().substring(0,10)}function zr(e,t=jr){const n=[];let r=e.slice();for(const s of e){const a=n.find(o=>o.agent===s.agent);if(a){if(a.dates.push(s.date),Ot(n)>t){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ot(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Kr{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Vn()?Fn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return kt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ot(e){return Ut(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Wr(e){ee(new Q("platform-logger",t=>new ir(t),"PRIVATE")),ee(new Q("heartbeat",t=>new Fr(t),"PRIVATE")),F(Ze,Dt,e),F(Ze,Dt,"esm2017"),F("fire-js","")}Wr("");var Ur="firebase",qr="10.7.1";/**
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
 */F(Ur,qr,"app");const Gr=(e,t)=>t.some(n=>e instanceof n);let Nt,Mt;function Jr(){return Nt||(Nt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Yr(){return Mt||(Mt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Qt=new WeakMap,et=new WeakMap,Zt=new WeakMap,Ve=new WeakMap,ot=new WeakMap;function Xr(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(z(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Qt.set(n,e)}).catch(()=>{}),ot.set(t,e),t}function Qr(e){if(et.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});et.set(e,t)}let tt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return et.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Zt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return z(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Zr(e){tt=e(tt)}function es(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Fe(this),t,...n);return Zt.set(r,t.sort?t.sort():[t]),z(r)}:Yr().includes(e)?function(...t){return e.apply(Fe(this),t),z(Qt.get(this))}:function(...t){return z(e.apply(Fe(this),t))}}function ts(e){return typeof e=="function"?es(e):(e instanceof IDBTransaction&&Qr(e),Gr(e,Jr())?new Proxy(e,tt):e)}function z(e){if(e instanceof IDBRequest)return Xr(e);if(Ve.has(e))return Ve.get(e);const t=ts(e);return t!==e&&(Ve.set(e,t),ot.set(t,e)),t}const Fe=e=>ot.get(e);function ns(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const o=indexedDB.open(e,t),c=z(o);return r&&o.addEventListener("upgradeneeded",i=>{r(z(o.result),i.oldVersion,i.newVersion,z(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(i=>{a&&i.addEventListener("close",()=>a()),s&&i.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const rs=["get","getKey","getAll","getAllKeys","count"],ss=["put","add","delete","clear"],ze=new Map;function $t(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ze.get(t))return ze.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=ss.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||rs.includes(n)))return;const a=async function(o,...c){const i=this.transaction(o,s?"readwrite":"readonly");let l=i.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&i.done]))[0]};return ze.set(t,a),a}Zr(e=>({...e,get:(t,n,r)=>$t(t,n)||e.get(t,n,r),has:(t,n)=>!!$t(t,n)||e.has(t,n)}));const en="@firebase/installations",it="0.6.4";/**
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
 */const tn=1e4,nn=`w:${it}`,rn="FIS_v2",as="https://firebaseinstallations.googleapis.com/v1",os=60*60*1e3,is="installations",cs="Installations";/**
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
 */const ls={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},te=new we(is,cs,ls);function sn(e){return e instanceof ie&&e.code.includes("request-failed")}/**
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
 */function an({projectId:e}){return`${as}/projects/${e}/installations`}function on(e){return{token:e.token,requestStatus:2,expiresIn:ds(e.expiresIn),creationTime:Date.now()}}async function cn(e,t){const r=(await t.json()).error;return te.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ln({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function us(e,{refreshToken:t}){const n=ln(e);return n.append("Authorization",fs(t)),n}async function un(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ds(e){return Number(e.replace("s","000"))}function fs(e){return`${rn} ${e}`}/**
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
 */async function hs({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=an(e),s=ln(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:rn,appId:e.appId,sdkVersion:nn},c={method:"POST",headers:s,body:JSON.stringify(o)},i=await un(()=>fetch(r,c));if(i.ok){const l=await i.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:on(l.authToken)}}else throw await cn("Create Installation",i)}/**
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
 */function dn(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function ps(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const gs=/^[cdef][\w-]{21}$/,nt="";function bs(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ms(e);return gs.test(n)?n:nt}catch{return nt}}function ms(e){return ps(e).substr(0,22)}/**
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
 */const fn=new Map;function hn(e,t){const n=ye(e);pn(n,t),ws(n,t)}function pn(e,t){const n=fn.get(e);if(n)for(const r of n)r(t)}function ws(e,t){const n=ys();n&&n.postMessage({key:e,fid:t}),_s()}let X=null;function ys(){return!X&&"BroadcastChannel"in self&&(X=new BroadcastChannel("[Firebase] FID Change"),X.onmessage=e=>{pn(e.data.key,e.data.fid)}),X}function _s(){fn.size===0&&X&&(X.close(),X=null)}/**
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
 */const vs="firebase-installations-database",Es=1,ne="firebase-installations-store";let Ke=null;function ct(){return Ke||(Ke=ns(vs,Es,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(ne)}}})),Ke}async function me(e,t){const n=ye(e),s=(await ct()).transaction(ne,"readwrite"),a=s.objectStore(ne),o=await a.get(n);return await a.put(t,n),await s.done,(!o||o.fid!==t.fid)&&hn(e,t.fid),t}async function gn(e){const t=ye(e),r=(await ct()).transaction(ne,"readwrite");await r.objectStore(ne).delete(t),await r.done}async function _e(e,t){const n=ye(e),s=(await ct()).transaction(ne,"readwrite"),a=s.objectStore(ne),o=await a.get(n),c=t(o);return c===void 0?await a.delete(n):await a.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&hn(e,c.fid),c}/**
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
 */async function lt(e){let t;const n=await _e(e.appConfig,r=>{const s=Is(r),a=Ss(e,s);return t=a.registrationPromise,a.installationEntry});return n.fid===nt?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Is(e){const t=e||{fid:bs(),registrationStatus:0};return bn(t)}function Ss(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(te.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ts(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:As(e)}:{installationEntry:t}}async function Ts(e,t){try{const n=await hs(e,t);return me(e.appConfig,n)}catch(n){throw sn(n)&&n.customData.serverCode===409?await gn(e.appConfig):await me(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function As(e){let t=await Rt(e.appConfig);for(;t.registrationStatus===1;)await dn(100),t=await Rt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await lt(e);return r||n}return t}function Rt(e){return _e(e,t=>{if(!t)throw te.create("installation-not-found");return bn(t)})}function bn(e){return Ds(e)?{fid:e.fid,registrationStatus:0}:e}function Ds(e){return e.registrationStatus===1&&e.registrationTime+tn<Date.now()}/**
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
 */async function Cs({appConfig:e,heartbeatServiceProvider:t},n){const r=ks(e,n),s=us(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:nn,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},i=await un(()=>fetch(r,c));if(i.ok){const l=await i.json();return on(l)}else throw await cn("Generate Auth Token",i)}function ks(e,{fid:t}){return`${an(e)}/${t}/authTokens:generate`}/**
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
 */async function ut(e,t=!1){let n;const r=await _e(e.appConfig,a=>{if(!mn(a))throw te.create("not-registered");const o=a.authToken;if(!t&&Ns(o))return a;if(o.requestStatus===1)return n=Bs(e,t),a;{if(!navigator.onLine)throw te.create("app-offline");const c=$s(a);return n=Os(e,c),c}});return n?await n:r.authToken}async function Bs(e,t){let n=await Pt(e.appConfig);for(;n.authToken.requestStatus===1;)await dn(100),n=await Pt(e.appConfig);const r=n.authToken;return r.requestStatus===0?ut(e,t):r}function Pt(e){return _e(e,t=>{if(!mn(t))throw te.create("not-registered");const n=t.authToken;return Rs(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Os(e,t){try{const n=await Cs(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await me(e.appConfig,r),n}catch(n){if(sn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await gn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await me(e.appConfig,r)}throw n}}function mn(e){return e!==void 0&&e.registrationStatus===2}function Ns(e){return e.requestStatus===2&&!Ms(e)}function Ms(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+os}function $s(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Rs(e){return e.requestStatus===1&&e.requestTime+tn<Date.now()}/**
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
 */async function Ps(e){const t=e,{installationEntry:n,registrationPromise:r}=await lt(t);return r?r.catch(console.error):ut(t).catch(console.error),n.fid}/**
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
 */async function Ls(e,t=!1){const n=e;return await xs(n),(await ut(n,t)).token}async function xs(e){const{registrationPromise:t}=await lt(e);t&&await t}/**
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
 */function Hs(e){if(!e||!e.options)throw We("App Configuration");if(!e.name)throw We("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw We(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function We(e){return te.create("missing-app-config-values",{valueName:e})}/**
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
 */const wn="installations",js="installations-internal",Vs=e=>{const t=e.getProvider("app").getImmediate(),n=Hs(t),r=Jt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Fs=e=>{const t=e.getProvider("app").getImmediate(),n=Jt(t,wn).getImmediate();return{getId:()=>Ps(n),getToken:s=>Ls(n,s)}};function zs(){ee(new Q(wn,Vs,"PUBLIC")),ee(new Q(js,Fs,"PRIVATE"))}zs();F(en,it);F(en,it,"esm2017");/**
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
 */const Ks="/firebase-messaging-sw.js",Ws="/firebase-cloud-messaging-push-scope",yn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Us="https://fcmregistrations.googleapis.com/v1",_n="google.c.a.c_id",qs="google.c.a.c_l",Gs="google.c.a.ts",Js="google.c.a.e";var Lt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Lt||(Lt={}));/**
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
 */var de;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(de||(de={}));/**
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
 */function P(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ys(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let a=0;a<r.length;++a)s[a]=r.charCodeAt(a);return s}/**
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
 */const Ue="fcm_token_details_db",Xs=5,xt="fcm_token_object_Store";async function Qs(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(Ue))return null;let t=null;return(await st(Ue,Xs,{upgrade:async(r,s,a,o)=>{var c;if(s<2||!r.objectStoreNames.contains(xt))return;const i=o.objectStore(xt),l=await i.index("fcmSenderId").get(e);if(await i.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(c=d.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:P(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:P(d.auth),p256dh:P(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:P(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:P(d.auth),p256dh:P(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:P(d.vapidKey)}}}}}})).close(),await xe(Ue),await xe("fcm_vapid_details_db"),await xe("undefined"),Zs(t)?t:null}function Zs(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ea="firebase-messaging-database",ta=1,re="firebase-messaging-store";let qe=null;function dt(){return qe||(qe=st(ea,ta,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(re)}}})),qe}async function vn(e){const t=ht(e),r=await(await dt()).transaction(re).objectStore(re).get(t);if(r)return r;{const s=await Qs(e.appConfig.senderId);if(s)return await ft(e,s),s}}async function ft(e,t){const n=ht(e),s=(await dt()).transaction(re,"readwrite");return await s.objectStore(re).put(t,n),await s.done,t}async function na(e){const t=ht(e),r=(await dt()).transaction(re,"readwrite");await r.objectStore(re).delete(t),await r.done}function ht({appConfig:e}){return e.appId}/**
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
 */const ra={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},T=new we("messaging","Messaging",ra);/**
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
 */async function sa(e,t){const n=await gt(e),r=In(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(pt(e.appConfig),s)).json()}catch(o){throw T.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(a.error){const o=a.error.message;throw T.create("token-subscribe-failed",{errorInfo:o})}if(!a.token)throw T.create("token-subscribe-no-token");return a.token}async function aa(e,t){const n=await gt(e),r=In(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${pt(e.appConfig)}/${t.token}`,s)).json()}catch(o){throw T.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(a.error){const o=a.error.message;throw T.create("token-update-failed",{errorInfo:o})}if(!a.token)throw T.create("token-update-no-token");return a.token}async function En(e,t){const r={method:"DELETE",headers:await gt(e)};try{const a=await(await fetch(`${pt(e.appConfig)}/${t}`,r)).json();if(a.error){const o=a.error.message;throw T.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw T.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function pt({projectId:e}){return`${Us}/projects/${e}/registrations`}async function gt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function In({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==yn&&(s.web.applicationPubKey=r),s}/**
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
 */const oa=7*24*60*60*1e3;async function ia(e){const t=await ua(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:P(t.getKey("auth")),p256dh:P(t.getKey("p256dh"))},r=await vn(e.firebaseDependencies);if(r){if(da(r.subscriptionOptions,n))return Date.now()>=r.createTime+oa?la(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await En(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ht(e.firebaseDependencies,n)}else return Ht(e.firebaseDependencies,n)}async function ca(e){const t=await vn(e.firebaseDependencies);t&&(await En(e.firebaseDependencies,t.token),await na(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function la(e,t){try{const n=await aa(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ft(e.firebaseDependencies,r),n}catch(n){throw await ca(e),n}}async function Ht(e,t){const r={token:await sa(e,t),createTime:Date.now(),subscriptionOptions:t};return await ft(e,r),r.token}async function ua(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ys(t)})}function da(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&s&&a}/**
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
 */function jt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return fa(t,e),ha(t,e),pa(t,e),t}function fa(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const a=t.notification.icon;a&&(e.notification.icon=a)}function ha(e,t){t.data&&(e.data=t.data)}function pa(e,t){var n,r,s,a,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(a=t.notification)===null||a===void 0?void 0:a.click_action;c&&(e.fcmOptions.link=c);const i=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function ga(e){return typeof e=="object"&&!!e&&_n in e}/**
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
 */Sn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Sn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Sn(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function ba(e){if(!e||!e.options)throw Ge("App Configuration Object");if(!e.name)throw Ge("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Ge(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ge(e){return T.create("missing-app-config-values",{valueName:e})}/**
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
 */class ma{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ba(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function wa(e){try{e.swRegistration=await navigator.serviceWorker.register(Ks,{scope:Ws}),e.swRegistration.update().catch(()=>{})}catch(t){throw T.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function ya(e,t){if(!t&&!e.swRegistration&&await wa(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw T.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function _a(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=yn)}/**
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
 */async function va(e,t){if(!navigator)throw T.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw T.create("permission-blocked");return await _a(e,t==null?void 0:t.vapidKey),await ya(e,t==null?void 0:t.serviceWorkerRegistration),ia(e)}/**
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
 */async function Ea(e,t,n){const r=Ia(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[_n],message_name:n[qs],message_time:n[Gs],message_device_time:Math.floor(Date.now()/1e3)})}function Ia(e){switch(e){case de.NOTIFICATION_CLICKED:return"notification_open";case de.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Sa(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===de.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(jt(n)):e.onMessageHandler.next(jt(n)));const r=n.data;ga(r)&&r[Js]==="1"&&await Ea(e,n.messageType,r)}const Vt="@firebase/messaging",Ft="0.12.5";/**
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
 */const Ta=e=>{const t=new ma(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Sa(t,n)),t},Aa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>va(t,r)}};function Da(){ee(new Q("messaging",Ta,"PUBLIC")),ee(new Q("messaging-internal",Aa,"PRIVATE")),F(Vt,Ft),F(Vt,Ft,"esm2017")}Da();function zt(e){let t,n;return{c(){t=p("p"),n=Je(e[3]),this.h()},l(r){t=g(r,"P",{class:!0});var s=N(t);n=Ye(s,e[3]),s.forEach(A),this.h()},h(){u(t,"class","error-message svelte-yl5zze")},m(r,s){Kt(r,t,s),f(t,n)},p(r,s){s&8&&Dn(n,r[3])},d(r){r&&A(t)}}}function Ca(e){let t,n,r,s,a,o="Echo Dental Training Unit",c,i,l,d="LOG IN",D,_,M="Your email",K,x,m,W,bt,ve,C,Ee,U,mt="Your password",Ie,$,O,q,wt,Se,k,Te,S,fe,Ae,De,H,G,j,Ce,ke,R,yt="Lost password?",Be,J,Oe,Y,Ne,V,_t="Contacting us",ce,Me,vt,w=e[3]&&zt(e);return J=new Pn({props:{clickHandler:e[5],useTJ:!0,text:"Log in",width:"100%"}}),{c(){t=p("div"),n=p("img"),s=E(),a=p("h1"),a.textContent=o,c=E(),i=p("div"),l=p("h2"),l.textContent=d,D=E(),_=p("label"),_.textContent=M,K=E(),x=p("div"),m=p("div"),W=p("img"),ve=E(),C=p("input"),Ee=E(),U=p("label"),U.textContent=mt,Ie=E(),$=p("div"),O=p("div"),q=p("img"),Se=E(),k=p("input"),Te=E(),S=p("img"),Ae=E(),w&&w.c(),De=E(),H=p("div"),G=p("label"),j=p("input"),Ce=Je(`\r
          Remember me`),ke=E(),R=p("a"),R.textContent=yt,Be=E(),Bn(J.$$.fragment),Oe=E(),Y=p("p"),Ne=Je("Not registered? Create an account by "),V=p("u"),V.textContent=_t,this.h()},l(b){t=g(b,"DIV",{class:!0});var v=N(t);n=g(v,"IMG",{src:!0,alt:!0,width:!0,class:!0,style:!0}),s=I(v),a=g(v,"H1",{class:!0,style:!0,"data-svelte-h":!0}),ae(a)!=="svelte-wstfby"&&(a.textContent=o),c=I(v),i=g(v,"DIV",{class:!0,style:!0});var y=N(i);l=g(y,"H2",{class:!0,style:!0,"data-svelte-h":!0}),ae(l)!=="svelte-17ss5ox"&&(l.textContent=d),D=I(y),_=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),ae(_)!=="svelte-9v1dp9"&&(_.textContent=M),K=I(y),x=g(y,"DIV",{class:!0});var Et=N(x);m=g(Et,"DIV",{class:!0});var he=N(m);W=g(he,"IMG",{src:!0,alt:!0,class:!0}),ve=I(he),C=g(he,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),he.forEach(A),Et.forEach(A),Ee=I(y),U=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),ae(U)!=="svelte-15gn3f4"&&(U.textContent=mt),Ie=I(y),$=g(y,"DIV",{class:!0});var pe=N($);O=g(pe,"DIV",{class:!0});var se=N(O);q=g(se,"IMG",{src:!0,alt:!0,class:!0}),Se=I(se),k=g(se,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),Te=I(se),S=g(se,"IMG",{src:!0,style:!0,class:!0}),se.forEach(A),Ae=I(pe),w&&w.l(pe),pe.forEach(A),De=I(y),H=g(y,"DIV",{class:!0});var ge=N(H);G=g(ge,"LABEL",{class:!0});var $e=N(G);j=g($e,"INPUT",{type:!0,class:!0}),Ce=Ye($e,`\r
          Remember me`),$e.forEach(A),ke=I(ge),R=g(ge,"A",{href:!0,class:!0,"data-svelte-h":!0}),ae(R)!=="svelte-1y00aro"&&(R.textContent=yt),ge.forEach(A),Be=I(y),On(J.$$.fragment,y),Oe=I(y),Y=g(y,"P",{class:!0});var Re=N(Y);Ne=Ye(Re,"Not registered? Create an account by "),V=g(Re,"U",{style:!0,"data-svelte-h":!0}),ae(V)!=="svelte-1wiuusi"&&(V.textContent=_t),Re.forEach(A),y.forEach(A),v.forEach(A),this.h()},h(){le(n.src,r="/Logo.png")||u(n,"src",r),u(n,"alt","Logo"),u(n,"width","90"),u(n,"class","logo svelte-yl5zze"),B(n,"bottom","10px"),B(n,"position","relative"),u(a,"class","main-title svelte-yl5zze"),B(a,"bottom","15px"),B(a,"position","relative"),u(l,"class","login-title svelte-yl5zze"),B(l,"margin","0 0 30px"),u(_,"class","svelte-yl5zze"),le(W.src,bt="/at.png")||u(W,"src",bt),u(W,"alt","name icon"),u(W,"class","svelte-yl5zze"),u(C,"class","inputField svelte-yl5zze"),u(C,"type","email"),u(C,"id","email"),u(C,"placeholder","Enter your email"),u(m,"class","inputFieldCon svelte-yl5zze"),u(x,"class","input-container svelte-yl5zze"),u(U,"class","svelte-yl5zze"),le(q.src,wt="/password.png")||u(q,"src",wt),u(q,"alt","name icon"),u(q,"class","svelte-yl5zze"),u(k,"class","inputField svelte-yl5zze"),u(k,"type","password"),u(k,"id","password"),u(k,"placeholder","Enter your password"),le(S.src,fe=e[4]?"/show.png":"/hide.png")||u(S,"src",fe),B(S,"width","20px"),B(S,"height","20px"),B(S,"position","absolute"),B(S,"left","79%"),u(S,"class","svelte-yl5zze"),u(O,"class","inputFieldCon svelte-yl5zze"),u($,"class","input-container svelte-yl5zze"),u(j,"type","checkbox"),u(j,"class","svelte-yl5zze"),u(G,"class","svelte-yl5zze"),u(R,"href","#"),u(R,"class","lost-password svelte-yl5zze"),u(H,"class","remember-lost-row svelte-yl5zze"),B(V,"cursor","pointer"),u(Y,"class","not-registered svelte-yl5zze"),u(i,"class","neumorphic-box svelte-yl5zze"),B(i,"margin","0 0 30px"),u(t,"class","login-container svelte-yl5zze")},m(b,v){Kt(b,t,v),f(t,n),f(t,s),f(t,a),f(t,c),f(t,i),f(i,l),f(i,D),f(i,_),f(i,K),f(i,x),f(x,m),f(m,W),f(m,ve),f(m,C),be(C,e[0]),f(i,Ee),f(i,U),f(i,Ie),f(i,$),f($,O),f(O,q),f(O,Se),f(O,k),be(k,e[1]),f(O,Te),f(O,S),f($,Ae),w&&w.m($,null),f(i,De),f(i,H),f(H,G),f(G,j),j.checked=e[2],f(G,Ce),f(H,ke),f(H,R),f(i,Be),Nn(J,i,null),f(i,Oe),f(i,Y),f(Y,Ne),f(Y,V),ce=!0,Me||(vt=[oe(C,"input",e[7]),oe(k,"input",e[8]),oe(S,"click",e[9]),oe(j,"change",e[10]),oe(R,"click",e[11]),oe(V,"click",e[12])],Me=!0)},p(b,[v]){v&1&&C.value!==b[0]&&be(C,b[0]),v&2&&k.value!==b[1]&&be(k,b[1]),(!ce||v&16&&!le(S.src,fe=b[4]?"/show.png":"/hide.png"))&&u(S,"src",fe),b[3]?w?w.p(b,v):(w=zt(b),w.c(),w.m($,null)):w&&(w.d(1),w=null),v&4&&(j.checked=b[2])},i(b){ce||(Mn(J.$$.fragment,b),ce=!0)},o(b){$n(J.$$.fragment,b),ce=!1},d(b){b&&A(t),w&&w.d(),Rn(J),Me=!1,An(vt)}}}function ka(e,t,n){let r="",s="",a=!1,o="",c=!1,{func:i}=t;function l(){r.length>7&&s.length>3?It("n/si/",{email:r,p:s}).then(m=>{localStorage.setItem("li",!0),localStorage.setItem("t",m.t),localStorage.setItem("aslklx20002k,777",m.t==0?5:0),m.t==0&&(location.href="/admin")}).catch(m=>{n(3,o="Incorrect email or password")}):n(3,o="Incorrect email or password")}function d(){r=this.value,n(0,r)}function D(){s=this.value,n(1,s)}const _=()=>{document.getElementById("password").type=c?"password":"text",n(4,c=!c)};function M(){a=this.checked,n(2,a)}const K=()=>{console.log(r),r&&r.includes("@echo")&&It("u/fop",{email:r})},x=()=>{location.href="/contact-us"};return e.$$set=m=>{"func"in m&&n(6,i=m.func)},[r,s,a,o,c,l,i,d,D,_,M,K,x]}class $a extends Cn{constructor(t){super(),kn(this,t,ka,Ca,Tn,{func:6})}}export{$a as L};
