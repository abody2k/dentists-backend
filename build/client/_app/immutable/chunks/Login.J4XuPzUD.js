import{s as An,e as g,b as E,t as Xe,c as m,f as B,h as S,g as oe,d as C,p as Ze,v as de,j as u,r as O,i as jt,k as f,w as ye,l as ie,y as Tn,q as Cn}from"./scheduler._qeGDSQ8.js";import{S as Dn,i as kn,c as On,a as Nn,m as Bn,t as Mn,b as Rn,d as Pn}from"./index.CYIwKu5b.js";import{B as $n}from"./Button.N_njOHxt.js";import{f as je}from"./not.D11_haEW.js";var _t={};/**
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
 */const zt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Ln=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=e[n++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=e[n++],o=e[n++],c=e[n++],i=((s&7)<<18|(a&63)<<12|(o&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(i&1023))}else{const a=e[n++],o=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|o&63)}}return t.join("")},Ht={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const a=e[s],o=s+1<e.length,c=o?e[s+1]:0,i=s+2<e.length,l=i?e[s+2]:0,d=a>>2,D=(a&3)<<4|c>>4;let _=(c&15)<<2|l>>6,M=l&63;i||(M=64,o||(_=64)),r.push(n[d],n[D],n[_],n[M])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(zt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Ln(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const a=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const D=s<e.length?n[e.charAt(s)]:64;if(++s,a==null||c==null||l==null||D==null)throw new Fn;const _=a<<2|c>>4;if(r.push(_),l!==64){const M=c<<4&240|l>>2;if(r.push(M),D!==64){const W=l<<6&192|D;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Fn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xn=function(e){const t=zt(e);return Ht.encodeByteArray(t,!0)},Vt=function(e){return xn(e).replace(/\./g,"")},jn=function(e){try{return Ht.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
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
 */function zn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
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
 */const Hn=()=>zn().__FIREBASE_DEFAULTS__,Vn=()=>{if(typeof process>"u"||typeof _t>"u")return;const e=_t.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Un=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&jn(e[1]);return t&&JSON.parse(t)},Kn=()=>{try{return Hn()||Vn()||Un()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ut=()=>{var e;return(e=Kn())===null||e===void 0?void 0:e.config};/**
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
 */class Wn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Kt(){try{return typeof indexedDB=="object"}catch{return!1}}function Wt(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function qn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Gn="FirebaseError";class ce extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Gn,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ie.prototype.create)}}class Ie{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,a=this.errors[t],o=a?Jn(a,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ce(s,c,r)}}function Jn(e,t){return e.replace(Yn,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Yn=/\{\$([^}]+)}/g;function Qe(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const a=e[s],o=t[s];if(It(a)&&It(o)){if(!Qe(a,o))return!1}else if(a!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function It(e){return e!==null&&typeof e=="object"}/**
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
 */function qt(e){return e&&e._delegate?e._delegate:e}class K{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Z="[DEFAULT]";/**
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
 */class Xn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Wn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Qn(t))try{this.getOrInitializeService({instanceIdentifier:Z})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=Z){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Z){return this.instances.has(t)}getOptions(t=Z){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&o.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(s,a);const o=this.instances.get(s);return o&&t(o,s),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Z){return this.component?this.component.multipleInstances?t:Z:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zn(e){return e===Z?void 0:e}function Qn(e){return e.instantiationMode==="EAGER"}/**
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
 */class er{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Xn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const tr={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},nr=h.INFO,rr={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},sr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=rr[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ar{constructor(t){this.name=t,this._logLevel=nr,this._logHandler=sr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?tr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const or=(e,t)=>t.some(n=>e instanceof n);let Et,St;function ir(){return Et||(Et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cr(){return St||(St=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gt=new WeakMap,et=new WeakMap,Jt=new WeakMap,ze=new WeakMap,ot=new WeakMap;function lr(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",o)},a=()=>{n(F(e.result)),s()},o=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&Gt.set(n,e)}).catch(()=>{}),ot.set(t,e),t}function ur(e){if(et.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",o),e.removeEventListener("abort",o)},a=()=>{n(),s()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",o),e.addEventListener("abort",o)});et.set(e,t)}let tt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return et.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function dr(e){tt=e(tt)}function fr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(He(this),t,...n);return Jt.set(r,t.sort?t.sort():[t]),F(r)}:cr().includes(e)?function(...t){return e.apply(He(this),t),F(Gt.get(this))}:function(...t){return F(e.apply(He(this),t))}}function hr(e){return typeof e=="function"?fr(e):(e instanceof IDBTransaction&&ur(e),or(e,ir())?new Proxy(e,tt):e)}function F(e){if(e instanceof IDBRequest)return lr(e);if(ze.has(e))return ze.get(e);const t=hr(e);return t!==e&&(ze.set(e,t),ot.set(t,e)),t}const He=e=>ot.get(e);function Ee(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const o=indexedDB.open(e,t),c=F(o);return r&&o.addEventListener("upgradeneeded",i=>{r(F(o.result),i.oldVersion,i.newVersion,F(o.transaction),i)}),n&&o.addEventListener("blocked",i=>n(i.oldVersion,i.newVersion,i)),c.then(i=>{a&&i.addEventListener("close",()=>a()),s&&i.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Ve(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),F(n).then(()=>{})}const pr=["get","getKey","getAll","getAllKeys","count"],gr=["put","add","delete","clear"],Ue=new Map;function At(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ue.get(t))return Ue.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=gr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||pr.includes(n)))return;const a=async function(o,...c){const i=this.transaction(o,s?"readwrite":"readonly");let l=i.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&i.done]))[0]};return Ue.set(t,a),a}dr(e=>({...e,get:(t,n,r)=>At(t,n)||e.get(t,n,r),has:(t,n)=>!!At(t,n)||e.has(t,n)}));/**
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
 */class mr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(br(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function br(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nt="@firebase/app",Tt="0.10.5";/**
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
 */const ee=new ar("@firebase/app"),wr="@firebase/app-compat",yr="@firebase/analytics-compat",vr="@firebase/analytics",_r="@firebase/app-check-compat",Ir="@firebase/app-check",Er="@firebase/auth",Sr="@firebase/auth-compat",Ar="@firebase/database",Tr="@firebase/database-compat",Cr="@firebase/functions",Dr="@firebase/functions-compat",kr="@firebase/installations",Or="@firebase/installations-compat",Nr="@firebase/messaging",Br="@firebase/messaging-compat",Mr="@firebase/performance",Rr="@firebase/performance-compat",Pr="@firebase/remote-config",$r="@firebase/remote-config-compat",Lr="@firebase/storage",Fr="@firebase/storage-compat",xr="@firebase/firestore",jr="@firebase/vertexai-preview",zr="@firebase/firestore-compat",Hr="firebase";/**
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
 */const rt="[DEFAULT]",Vr={[nt]:"fire-core",[wr]:"fire-core-compat",[vr]:"fire-analytics",[yr]:"fire-analytics-compat",[Ir]:"fire-app-check",[_r]:"fire-app-check-compat",[Er]:"fire-auth",[Sr]:"fire-auth-compat",[Ar]:"fire-rtdb",[Tr]:"fire-rtdb-compat",[Cr]:"fire-fn",[Dr]:"fire-fn-compat",[kr]:"fire-iid",[Or]:"fire-iid-compat",[Nr]:"fire-fcm",[Br]:"fire-fcm-compat",[Mr]:"fire-perf",[Rr]:"fire-perf-compat",[Pr]:"fire-rc",[$r]:"fire-rc-compat",[Lr]:"fire-gcs",[Fr]:"fire-gcs-compat",[xr]:"fire-fst",[zr]:"fire-fst-compat",[jr]:"fire-vertex","fire-js":"fire-js",[Hr]:"fire-js-all"};/**
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
 */const ve=new Map,Ur=new Map,st=new Map;function Ct(e,t){try{e.container.addComponent(t)}catch(n){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function te(e){const t=e.name;if(st.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;st.set(t,e);for(const n of ve.values())Ct(n,e);for(const n of Ur.values())Ct(n,e);return!0}function it(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Kr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},V=new Ie("app","Firebase",Kr);/**
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
 */class Wr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}function Yt(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rt,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw V.create("bad-app-name",{appName:String(s)});if(n||(n=Ut()),!n)throw V.create("no-options");const a=ve.get(s);if(a){if(Qe(n,a.options)&&Qe(r,a.config))return a;throw V.create("duplicate-app",{appName:s})}const o=new er(s);for(const i of st.values())o.addComponent(i);const c=new Wr(n,r,o);return ve.set(s,c),c}function qr(e=rt){const t=ve.get(e);if(!t&&e===rt&&Ut())return Yt();if(!t)throw V.create("no-app",{appName:e});return t}function U(e,t,n){var r;let s=(r=Vr[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),o=t.match(/\s|\//);if(a||o){const c=[`Unable to register library "${s}" with version "${t}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&o&&c.push("and"),o&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(c.join(" "));return}te(new K(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Gr="firebase-heartbeat-database",Jr=1,fe="firebase-heartbeat-store";let Ke=null;function Xt(){return Ke||(Ke=Ee(Gr,Jr,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fe)}catch(n){console.warn(n)}}}}).catch(e=>{throw V.create("idb-open",{originalErrorMessage:e.message})})),Ke}async function Yr(e){try{const n=(await Xt()).transaction(fe),r=await n.objectStore(fe).get(Zt(e));return await n.done,r}catch(t){if(t instanceof ce)ee.warn(t.message);else{const n=V.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(n.message)}}}async function Dt(e,t){try{const r=(await Xt()).transaction(fe,"readwrite");await r.objectStore(fe).put(t,Zt(e)),await r.done}catch(n){if(n instanceof ce)ee.warn(n.message);else{const r=V.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ee.warn(r.message)}}}function Zt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xr=1024,Zr=30*24*60*60*1e3;class Qr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ts(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=kt();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(o=>o.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const c=new Date(o.date).valueOf();return Date.now()-c<=Zr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kt(),{heartbeatsToSend:r,unsentEntries:s}=es(this._heartbeatsCache.heartbeats),a=Vt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function kt(){return new Date().toISOString().substring(0,10)}function es(e,t=Xr){const n=[];let r=e.slice();for(const s of e){const a=n.find(o=>o.agent===s.agent);if(a){if(a.dates.push(s.date),Ot(n)>t){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ot(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ts{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kt()?Wt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ot(e){return Vt(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ns(e){te(new K("platform-logger",t=>new mr(t),"PRIVATE")),te(new K("heartbeat",t=>new Qr(t),"PRIVATE")),U(nt,Tt,e),U(nt,Tt,"esm2017"),U("fire-js","")}ns("");var rs="firebase",ss="10.12.2";/**
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
 */U(rs,ss,"app");const Qt="@firebase/installations",ct="0.6.7";/**
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
 */const en=1e4,tn=`w:${ct}`,nn="FIS_v2",as="https://firebaseinstallations.googleapis.com/v1",os=60*60*1e3,is="installations",cs="Installations";/**
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
 */const ls={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ne=new Ie(is,cs,ls);function rn(e){return e instanceof ce&&e.code.includes("request-failed")}/**
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
 */function sn({projectId:e}){return`${as}/projects/${e}/installations`}function an(e){return{token:e.token,requestStatus:2,expiresIn:ds(e.expiresIn),creationTime:Date.now()}}async function on(e,t){const r=(await t.json()).error;return ne.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function cn({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function us(e,{refreshToken:t}){const n=cn(e);return n.append("Authorization",fs(t)),n}async function ln(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ds(e){return Number(e.replace("s","000"))}function fs(e){return`${nn} ${e}`}/**
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
 */async function hs({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sn(e),s=cn(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:nn,appId:e.appId,sdkVersion:tn},c={method:"POST",headers:s,body:JSON.stringify(o)},i=await ln(()=>fetch(r,c));if(i.ok){const l=await i.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:an(l.authToken)}}else throw await on("Create Installation",i)}/**
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
 */function un(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const gs=/^[cdef][\w-]{21}$/,at="";function ms(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=bs(e);return gs.test(n)?n:at}catch{return at}}function bs(e){return ps(e).substr(0,22)}/**
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
 */function Se(e){return`${e.appName}!${e.appId}`}/**
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
 */const dn=new Map;function fn(e,t){const n=Se(e);hn(n,t),ws(n,t)}function hn(e,t){const n=dn.get(e);if(n)for(const r of n)r(t)}function ws(e,t){const n=ys();n&&n.postMessage({key:e,fid:t}),vs()}let Q=null;function ys(){return!Q&&"BroadcastChannel"in self&&(Q=new BroadcastChannel("[Firebase] FID Change"),Q.onmessage=e=>{hn(e.data.key,e.data.fid)}),Q}function vs(){dn.size===0&&Q&&(Q.close(),Q=null)}/**
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
 */const _s="firebase-installations-database",Is=1,re="firebase-installations-store";let We=null;function lt(){return We||(We=Ee(_s,Is,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(re)}}})),We}async function _e(e,t){const n=Se(e),s=(await lt()).transaction(re,"readwrite"),a=s.objectStore(re),o=await a.get(n);return await a.put(t,n),await s.done,(!o||o.fid!==t.fid)&&fn(e,t.fid),t}async function pn(e){const t=Se(e),r=(await lt()).transaction(re,"readwrite");await r.objectStore(re).delete(t),await r.done}async function Ae(e,t){const n=Se(e),s=(await lt()).transaction(re,"readwrite"),a=s.objectStore(re),o=await a.get(n),c=t(o);return c===void 0?await a.delete(n):await a.put(c,n),await s.done,c&&(!o||o.fid!==c.fid)&&fn(e,c.fid),c}/**
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
 */async function ut(e){let t;const n=await Ae(e.appConfig,r=>{const s=Es(r),a=Ss(e,s);return t=a.registrationPromise,a.installationEntry});return n.fid===at?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Es(e){const t=e||{fid:ms(),registrationStatus:0};return gn(t)}function Ss(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ne.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=As(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ts(e)}:{installationEntry:t}}async function As(e,t){try{const n=await hs(e,t);return _e(e.appConfig,n)}catch(n){throw rn(n)&&n.customData.serverCode===409?await pn(e.appConfig):await _e(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ts(e){let t=await Nt(e.appConfig);for(;t.registrationStatus===1;)await un(100),t=await Nt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ut(e);return r||n}return t}function Nt(e){return Ae(e,t=>{if(!t)throw ne.create("installation-not-found");return gn(t)})}function gn(e){return Cs(e)?{fid:e.fid,registrationStatus:0}:e}function Cs(e){return e.registrationStatus===1&&e.registrationTime+en<Date.now()}/**
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
 */async function Ds({appConfig:e,heartbeatServiceProvider:t},n){const r=ks(e,n),s=us(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:tn,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(o)},i=await ln(()=>fetch(r,c));if(i.ok){const l=await i.json();return an(l)}else throw await on("Generate Auth Token",i)}function ks(e,{fid:t}){return`${sn(e)}/${t}/authTokens:generate`}/**
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
 */async function dt(e,t=!1){let n;const r=await Ae(e.appConfig,a=>{if(!mn(a))throw ne.create("not-registered");const o=a.authToken;if(!t&&Bs(o))return a;if(o.requestStatus===1)return n=Os(e,t),a;{if(!navigator.onLine)throw ne.create("app-offline");const c=Rs(a);return n=Ns(e,c),c}});return n?await n:r.authToken}async function Os(e,t){let n=await Bt(e.appConfig);for(;n.authToken.requestStatus===1;)await un(100),n=await Bt(e.appConfig);const r=n.authToken;return r.requestStatus===0?dt(e,t):r}function Bt(e){return Ae(e,t=>{if(!mn(t))throw ne.create("not-registered");const n=t.authToken;return Ps(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ns(e,t){try{const n=await Ds(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _e(e.appConfig,r),n}catch(n){if(rn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _e(e.appConfig,r)}throw n}}function mn(e){return e!==void 0&&e.registrationStatus===2}function Bs(e){return e.requestStatus===2&&!Ms(e)}function Ms(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+os}function Rs(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ps(e){return e.requestStatus===1&&e.requestTime+en<Date.now()}/**
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
 */async function $s(e){const t=e,{installationEntry:n,registrationPromise:r}=await ut(t);return r?r.catch(console.error):dt(t).catch(console.error),n.fid}/**
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
 */async function Ls(e,t=!1){const n=e;return await Fs(n),(await dt(n,t)).token}async function Fs(e){const{registrationPromise:t}=await ut(e);t&&await t}/**
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
 */function xs(e){if(!e||!e.options)throw qe("App Configuration");if(!e.name)throw qe("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw qe(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function qe(e){return ne.create("missing-app-config-values",{valueName:e})}/**
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
 */const bn="installations",js="installations-internal",zs=e=>{const t=e.getProvider("app").getImmediate(),n=xs(t),r=it(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hs=e=>{const t=e.getProvider("app").getImmediate(),n=it(t,bn).getImmediate();return{getId:()=>$s(n),getToken:s=>Ls(n,s)}};function Vs(){te(new K(bn,zs,"PUBLIC")),te(new K(js,Hs,"PRIVATE"))}Vs();U(Qt,ct);U(Qt,ct,"esm2017");/**
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
 */const Us="/firebase-messaging-sw.js",Ks="/firebase-cloud-messaging-push-scope",wn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ws="https://fcmregistrations.googleapis.com/v1",yn="google.c.a.c_id",qs="google.c.a.c_l",Gs="google.c.a.ts",Js="google.c.a.e";var Mt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mt||(Mt={}));/**
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
 */var he;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(he||(he={}));/**
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
 */function L(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ys(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let a=0;a<r.length;++a)s[a]=r.charCodeAt(a);return s}/**
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
 */const Ge="fcm_token_details_db",Xs=5,Rt="fcm_token_object_Store";async function Zs(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(Ge))return null;let t=null;return(await Ee(Ge,Xs,{upgrade:async(r,s,a,o)=>{var c;if(s<2||!r.objectStoreNames.contains(Rt))return;const i=o.objectStore(Rt),l=await i.index("fcmSenderId").get(e);if(await i.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(c=d.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:L(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:L(d.auth),p256dh:L(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:L(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:L(d.auth),p256dh:L(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:L(d.vapidKey)}}}}}})).close(),await Ve(Ge),await Ve("fcm_vapid_details_db"),await Ve("undefined"),Qs(t)?t:null}function Qs(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ea="firebase-messaging-database",ta=1,pe="firebase-messaging-store";let Je=null;function vn(){return Je||(Je=Ee(ea,ta,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}})),Je}async function na(e){const t=_n(e),r=await(await vn()).transaction(pe).objectStore(pe).get(t);if(r)return r;{const s=await Zs(e.appConfig.senderId);if(s)return await ft(e,s),s}}async function ft(e,t){const n=_n(e),s=(await vn()).transaction(pe,"readwrite");return await s.objectStore(pe).put(t,n),await s.done,t}function _n({appConfig:e}){return e.appId}/**
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
 */const ra={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},v=new Ie("messaging","Messaging",ra);/**
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
 */async function sa(e,t){const n=await pt(e),r=In(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(ht(e.appConfig),s)).json()}catch(o){throw v.create("token-subscribe-failed",{errorInfo:o==null?void 0:o.toString()})}if(a.error){const o=a.error.message;throw v.create("token-subscribe-failed",{errorInfo:o})}if(!a.token)throw v.create("token-subscribe-no-token");return a.token}async function aa(e,t){const n=await pt(e),r=In(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${ht(e.appConfig)}/${t.token}`,s)).json()}catch(o){throw v.create("token-update-failed",{errorInfo:o==null?void 0:o.toString()})}if(a.error){const o=a.error.message;throw v.create("token-update-failed",{errorInfo:o})}if(!a.token)throw v.create("token-update-no-token");return a.token}async function oa(e,t){const r={method:"DELETE",headers:await pt(e)};try{const a=await(await fetch(`${ht(e.appConfig)}/${t}`,r)).json();if(a.error){const o=a.error.message;throw v.create("token-unsubscribe-failed",{errorInfo:o})}}catch(s){throw v.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function ht({projectId:e}){return`${Ws}/projects/${e}/registrations`}async function pt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function In({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==wn&&(s.web.applicationPubKey=r),s}/**
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
 */const ia=7*24*60*60*1e3;async function ca(e){const t=await ua(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:L(t.getKey("auth")),p256dh:L(t.getKey("p256dh"))},r=await na(e.firebaseDependencies);if(r){if(da(r.subscriptionOptions,n))return Date.now()>=r.createTime+ia?la(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await oa(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Pt(e.firebaseDependencies,n)}else return Pt(e.firebaseDependencies,n)}async function la(e,t){try{const n=await aa(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ft(e.firebaseDependencies,r),n}catch(n){throw n}}async function Pt(e,t){const r={token:await sa(e,t),createTime:Date.now(),subscriptionOptions:t};return await ft(e,r),r.token}async function ua(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ys(t)})}function da(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&s&&a}/**
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
 */function $t(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return fa(t,e),ha(t,e),pa(t,e),t}function fa(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const a=t.notification.icon;a&&(e.notification.icon=a)}function ha(e,t){t.data&&(e.data=t.data)}function pa(e,t){var n,r,s,a,o;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(a=t.notification)===null||a===void 0?void 0:a.click_action;c&&(e.fcmOptions.link=c);const i=(o=t.fcmOptions)===null||o===void 0?void 0:o.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function ga(e){return typeof e=="object"&&!!e&&yn in e}/**
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
 */En("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");En("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function En(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function ma(e){if(!e||!e.options)throw Ye("App Configuration Object");if(!e.name)throw Ye("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Ye(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ye(e){return v.create("missing-app-config-values",{valueName:e})}/**
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
 */class ba{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=ma(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function wa(e){try{e.swRegistration=await navigator.serviceWorker.register(Us,{scope:Ks}),e.swRegistration.update().catch(()=>{})}catch(t){throw v.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function ya(e,t){if(!t&&!e.swRegistration&&await wa(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw v.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function va(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=wn)}/**
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
 */async function Sn(e,t){if(!navigator)throw v.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw v.create("permission-blocked");return await va(e,t==null?void 0:t.vapidKey),await ya(e,t==null?void 0:t.serviceWorkerRegistration),ca(e)}/**
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
 */async function _a(e,t,n){const r=Ia(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[yn],message_name:n[qs],message_time:n[Gs],message_device_time:Math.floor(Date.now()/1e3)})}function Ia(e){switch(e){case he.NOTIFICATION_CLICKED:return"notification_open";case he.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Ea(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===he.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler($t(n)):e.onMessageHandler.next($t(n)));const r=n.data;ga(r)&&r[Js]==="1"&&await _a(e,n.messageType,r)}const Lt="@firebase/messaging",Ft="0.12.9";/**
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
 */const Sa=e=>{const t=new ba(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ea(t,n)),t},Aa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Sn(t,r)}};function Ta(){te(new K("messaging",Sa,"PUBLIC")),te(new K("messaging-internal",Aa,"PRIVATE")),U(Lt,Ft),U(Lt,Ft,"esm2017")}/**
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
 */async function Ca(){try{await Wt()}catch{return!1}return typeof window<"u"&&Kt()&&qn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Da(e=qr()){return Ca().then(t=>{if(!t)throw v.create("unsupported-browser")},t=>{throw v.create("indexed-db-unsupported")}),it(qt(e),"messaging").getImmediate()}async function ka(e,t){return e=qt(e),Sn(e,t)}Ta();function xt(e){let t,n;return{c(){t=g("p"),n=Xe(e[3]),this.h()},l(r){t=m(r,"P",{class:!0});var s=B(t);n=Ze(s,e[3]),s.forEach(C),this.h()},h(){u(t,"class","error-message svelte-yl5zze")},m(r,s){jt(r,t,s),f(t,n)},p(r,s){s&8&&Cn(n,r[3])},d(r){r&&C(t)}}}function Oa(e){let t,n,r,s,a,o="Echo Dental Training Unit",c,i,l,d="LOG IN",D,_,M="Your email",W,x,p,R,Te,le,A,se,q,gt="Your password",Ce,P,N,G,mt,De,k,ke,T,ge,Oe,Ne,j,J,z,Be,Me,$,bt="Lost password?",Re,Y,Pe,X,$e,H,wt="Contacting us",ue,Le,yt,w=e[3]&&xt(e);return Y=new $n({props:{clickHandler:e[5],useTJ:!0,text:"Log in",width:"100%"}}),{c(){t=g("div"),n=g("img"),s=E(),a=g("h1"),a.textContent=o,c=E(),i=g("div"),l=g("h2"),l.textContent=d,D=E(),_=g("label"),_.textContent=M,W=E(),x=g("div"),p=g("div"),R=g("img"),le=E(),A=g("input"),se=E(),q=g("label"),q.textContent=gt,Ce=E(),P=g("div"),N=g("div"),G=g("img"),De=E(),k=g("input"),ke=E(),T=g("img"),Oe=E(),w&&w.c(),Ne=E(),j=g("div"),J=g("label"),z=g("input"),Be=Xe(`\r
          Remember me`),Me=E(),$=g("a"),$.textContent=bt,Re=E(),On(Y.$$.fragment),Pe=E(),X=g("p"),$e=Xe("Not registered? Create an account by "),H=g("u"),H.textContent=wt,this.h()},l(b){t=m(b,"DIV",{class:!0});var I=B(t);n=m(I,"IMG",{src:!0,alt:!0,width:!0,class:!0,style:!0}),s=S(I),a=m(I,"H1",{class:!0,style:!0,"data-svelte-h":!0}),oe(a)!=="svelte-wstfby"&&(a.textContent=o),c=S(I),i=m(I,"DIV",{class:!0,style:!0});var y=B(i);l=m(y,"H2",{class:!0,style:!0,"data-svelte-h":!0}),oe(l)!=="svelte-17ss5ox"&&(l.textContent=d),D=S(y),_=m(y,"LABEL",{class:!0,"data-svelte-h":!0}),oe(_)!=="svelte-9v1dp9"&&(_.textContent=M),W=S(y),x=m(y,"DIV",{class:!0});var vt=B(x);p=m(vt,"DIV",{class:!0});var me=B(p);R=m(me,"IMG",{src:!0,alt:!0,class:!0}),le=S(me),A=m(me,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),me.forEach(C),vt.forEach(C),se=S(y),q=m(y,"LABEL",{class:!0,"data-svelte-h":!0}),oe(q)!=="svelte-15gn3f4"&&(q.textContent=gt),Ce=S(y),P=m(y,"DIV",{class:!0});var be=B(P);N=m(be,"DIV",{class:!0});var ae=B(N);G=m(ae,"IMG",{src:!0,alt:!0,class:!0}),De=S(ae),k=m(ae,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),ke=S(ae),T=m(ae,"IMG",{src:!0,style:!0,class:!0}),ae.forEach(C),Oe=S(be),w&&w.l(be),be.forEach(C),Ne=S(y),j=m(y,"DIV",{class:!0});var we=B(j);J=m(we,"LABEL",{class:!0});var Fe=B(J);z=m(Fe,"INPUT",{type:!0,class:!0}),Be=Ze(Fe,`\r
          Remember me`),Fe.forEach(C),Me=S(we),$=m(we,"A",{href:!0,class:!0,"data-svelte-h":!0}),oe($)!=="svelte-1y00aro"&&($.textContent=bt),we.forEach(C),Re=S(y),Nn(Y.$$.fragment,y),Pe=S(y),X=m(y,"P",{class:!0});var xe=B(X);$e=Ze(xe,"Not registered? Create an account by "),H=m(xe,"U",{style:!0,"data-svelte-h":!0}),oe(H)!=="svelte-1wiuusi"&&(H.textContent=wt),xe.forEach(C),y.forEach(C),I.forEach(C),this.h()},h(){de(n.src,r="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")||u(n,"src",r),u(n,"alt","Logo"),u(n,"width","90"),u(n,"class","logo svelte-yl5zze"),O(n,"bottom","10px"),O(n,"position","relative"),u(a,"class","main-title svelte-yl5zze"),O(a,"bottom","15px"),O(a,"position","relative"),u(l,"class","login-title svelte-yl5zze"),O(l,"margin","0 0 30px"),u(_,"class","svelte-yl5zze"),de(R.src,Te="/at.png")||u(R,"src",Te),u(R,"alt","name icon"),u(R,"class","svelte-yl5zze"),u(A,"class","inputField svelte-yl5zze"),u(A,"type","email"),u(A,"id","email"),u(A,"placeholder","Enter your email"),u(p,"class","inputFieldCon svelte-yl5zze"),u(x,"class","input-container svelte-yl5zze"),u(q,"class","svelte-yl5zze"),de(G.src,mt="/password.png")||u(G,"src",mt),u(G,"alt","name icon"),u(G,"class","svelte-yl5zze"),u(k,"class","inputField svelte-yl5zze"),u(k,"type","password"),u(k,"id","password"),u(k,"placeholder","Enter your password"),de(T.src,ge=e[4]?"/show.png":"/hide.png")||u(T,"src",ge),O(T,"width","20px"),O(T,"height","20px"),O(T,"position","absolute"),O(T,"left","79%"),u(T,"class","svelte-yl5zze"),u(N,"class","inputFieldCon svelte-yl5zze"),u(P,"class","input-container svelte-yl5zze"),u(z,"type","checkbox"),u(z,"class","svelte-yl5zze"),u(J,"class","svelte-yl5zze"),u($,"href","#"),u($,"class","lost-password svelte-yl5zze"),u(j,"class","remember-lost-row svelte-yl5zze"),O(H,"cursor","pointer"),u(X,"class","not-registered svelte-yl5zze"),u(i,"class","neumorphic-box svelte-yl5zze"),O(i,"margin","0 0 30px"),u(t,"class","login-container svelte-yl5zze")},m(b,I){jt(b,t,I),f(t,n),f(t,s),f(t,a),f(t,c),f(t,i),f(i,l),f(i,D),f(i,_),f(i,W),f(i,x),f(x,p),f(p,R),f(p,le),f(p,A),ye(A,e[0]),f(i,se),f(i,q),f(i,Ce),f(i,P),f(P,N),f(N,G),f(N,De),f(N,k),ye(k,e[1]),f(N,ke),f(N,T),f(P,Oe),w&&w.m(P,null),f(i,Ne),f(i,j),f(j,J),f(J,z),z.checked=e[2],f(J,Be),f(j,Me),f(j,$),f(i,Re),Bn(Y,i,null),f(i,Pe),f(i,X),f(X,$e),f(X,H),ue=!0,Le||(yt=[ie(A,"input",e[7]),ie(k,"input",e[8]),ie(T,"click",e[9]),ie(z,"change",e[10]),ie($,"click",e[11]),ie(H,"click",e[12])],Le=!0)},p(b,[I]){I&1&&A.value!==b[0]&&ye(A,b[0]),I&2&&k.value!==b[1]&&ye(k,b[1]),(!ue||I&16&&!de(T.src,ge=b[4]?"/show.png":"/hide.png"))&&u(T,"src",ge),b[3]?w?w.p(b,I):(w=xt(b),w.c(),w.m(P,null)):w&&(w.d(1),w=null),I&4&&(z.checked=b[2])},i(b){ue||(Mn(Y.$$.fragment,b),ue=!0)},o(b){Rn(Y.$$.fragment,b),ue=!1},d(b){b&&C(t),w&&w.d(),Pn(Y),Le=!1,Tn(yt)}}}function Na(e,t,n){let r="",s="",a=!1,o="",c=!1,{func:i}=t;function l(){r.length>7&&s.length>3?je("n/si/",{email:r,p:s}).then(p=>{if(localStorage.setItem("li",!0),localStorage.setItem("t",p.t),localStorage.setItem("aslklx20002k,777",p.t==0||p.t==2?5:0),localStorage.setItem("n",p.n),localStorage.setItem("i",p.i),localStorage.setItem("c",p.c),localStorage.setItem("pn",p.pn),p.t==0){location.href="/admin",location.reload();return}if(p.t==2){location.href="/admin/store",location.reload();return}const R={apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"};Notification.requestPermission().then(function(Te){const le=Yt(R),A=Da(le);ka(A,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(se=>{se&&je("u/un",{token:se}).then(()=>{(p.t==0||p.t==2)&&(location.href="/admin"),location.reload()})})})}).catch(p=>{n(3,o="Incorrect email or password")}):n(3,o="Incorrect email or password")}function d(){r=this.value,n(0,r)}function D(){s=this.value,n(1,s)}const _=()=>{document.getElementById("password").type=c?"password":"text",n(4,c=!c)};function M(){a=this.checked,n(2,a)}const W=()=>{console.log(r),r&&r.includes("@echo")&&je("u/fop",{email:r})},x=()=>{location.href="/contact-us"};return e.$$set=p=>{"func"in p&&n(6,i=p.func)},[r,s,a,o,c,l,i,d,D,_,M,W,x]}class $a extends Dn{constructor(t){super(),kn(this,t,Na,Oa,An,{func:6})}}export{$a as L,Da as g,Yt as i};
