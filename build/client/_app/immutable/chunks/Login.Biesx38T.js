import{s as Sn,e as p,b as E,t as Xe,c as g,f as B,h as S,g as ie,d as C,p as Ze,v as de,j as u,r as O,i as jt,k as f,w as ye,l as oe,y as An,q as Tn}from"./scheduler.C7Xo_3aa.js";import{S as Cn,i as Dn,c as kn,a as On,m as Nn,t as Bn,b as Mn,d as Rn}from"./index.NYh16Rov.js";import{B as Pn}from"./Button.C-vcSyKs.js";import{f as je}from"./not.BGxdCePc.js";var _t={};/**
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
 */const zt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},$n=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=e[n++];t[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=e[n++],i=e[n++],c=e[n++],o=((s&7)<<18|(a&63)<<12|(i&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(o>>10)),t[r++]=String.fromCharCode(56320+(o&1023))}else{const a=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|i&63)}}return t.join("")},Ht={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const a=e[s],i=s+1<e.length,c=i?e[s+1]:0,o=s+2<e.length,l=o?e[s+2]:0,d=a>>2,D=(a&3)<<4|c>>4;let _=(c&15)<<2|l>>6,M=l&63;o||(M=64,i||(_=64)),r.push(n[d],n[D],n[_],n[M])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(zt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):$n(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const a=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const D=s<e.length?n[e.charAt(s)]:64;if(++s,a==null||c==null||l==null||D==null)throw new Ln;const _=a<<2|c>>4;if(r.push(_),l!==64){const M=c<<4&240|l>>2;if(r.push(M),D!==64){const W=l<<6&192|D;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Ln extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Fn=function(e){const t=zt(e);return Ht.encodeByteArray(t,!0)},Vt=function(e){return Fn(e).replace(/\./g,"")},xn=function(e){try{return Ht.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function jn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const zn=()=>jn().__FIREBASE_DEFAULTS__,Hn=()=>{if(typeof process>"u"||typeof _t>"u")return;const e=_t.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Vn=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&xn(e[1]);return t&&JSON.parse(t)},Un=()=>{try{return zn()||Hn()||Vn()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Ut=()=>{var e;return(e=Un())===null||e===void 0?void 0:e.config};/**
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
 */class Kn{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Kt(){try{return typeof indexedDB=="object"}catch{return!1}}function Wt(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;t(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){t(n)}})}function Wn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const qn="FirebaseError";class ce extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=qn,Object.setPrototypeOf(this,ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ie.prototype.create)}}class Ie{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,a=this.errors[t],i=a?Gn(a,r):"Error",c=`${this.serviceName}: ${i} (${s}).`;return new ce(s,c,r)}}function Gn(e,t){return e.replace(Jn,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Jn=/\{\$([^}]+)}/g;function Qe(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const a=e[s],i=t[s];if(It(a)&&It(i)){if(!Qe(a,i))return!1}else if(a!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function It(e){return e!==null&&typeof e=="object"}/**
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
 */class Yn{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Kn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Zn(t))try{this.getOrInitializeService({instanceIdentifier:Z})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(t=Z){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Z){return this.instances.has(t)}getOptions(t=Z){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,i]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(a);r===c&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(t),this.onInitCallbacks.set(s,a);const i=this.instances.get(s);return i&&t(i,s),()=>{a.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Xn(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Z){return this.component?this.component.multipleInstances?t:Z:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Xn(e){return e===Z?void 0:e}function Zn(e){return e.instantiationMode==="EAGER"}/**
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
 */class Qn{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Yn(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const er={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},tr=h.INFO,nr={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},rr=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=nr[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class sr{constructor(t){this.name=t,this._logLevel=tr,this._logHandler=rr,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?er[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const ar=(e,t)=>t.some(n=>e instanceof n);let Et,St;function ir(){return Et||(Et=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function or(){return St||(St=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gt=new WeakMap,et=new WeakMap,Jt=new WeakMap,ze=new WeakMap,it=new WeakMap;function cr(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",a),e.removeEventListener("error",i)},a=()=>{n(F(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",a),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Gt.set(n,e)}).catch(()=>{}),it.set(t,e),t}function lr(e){if(et.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)});et.set(e,t)}let tt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return et.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Jt.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function ur(e){tt=e(tt)}function dr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(He(this),t,...n);return Jt.set(r,t.sort?t.sort():[t]),F(r)}:or().includes(e)?function(...t){return e.apply(He(this),t),F(Gt.get(this))}:function(...t){return F(e.apply(He(this),t))}}function fr(e){return typeof e=="function"?dr(e):(e instanceof IDBTransaction&&lr(e),ar(e,ir())?new Proxy(e,tt):e)}function F(e){if(e instanceof IDBRequest)return cr(e);if(ze.has(e))return ze.get(e);const t=fr(e);return t!==e&&(ze.set(e,t),it.set(t,e)),t}const He=e=>it.get(e);function Ee(e,t,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const i=indexedDB.open(e,t),c=F(i);return r&&i.addEventListener("upgradeneeded",o=>{r(F(i.result),o.oldVersion,o.newVersion,F(i.transaction),o)}),n&&i.addEventListener("blocked",o=>n(o.oldVersion,o.newVersion,o)),c.then(o=>{a&&o.addEventListener("close",()=>a()),s&&o.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Ve(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),F(n).then(()=>{})}const hr=["get","getKey","getAll","getAllKeys","count"],pr=["put","add","delete","clear"],Ue=new Map;function At(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ue.get(t))return Ue.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=pr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||hr.includes(n)))return;const a=async function(i,...c){const o=this.transaction(i,s?"readwrite":"readonly");let l=o.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&o.done]))[0]};return Ue.set(t,a),a}ur(e=>({...e,get:(t,n,r)=>At(t,n)||e.get(t,n,r),has:(t,n)=>!!At(t,n)||e.has(t,n)}));/**
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
 */class gr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(mr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function mr(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const nt="@firebase/app",Tt="0.10.5";/**
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
 */const ee=new sr("@firebase/app"),br="@firebase/app-compat",wr="@firebase/analytics-compat",yr="@firebase/analytics",vr="@firebase/app-check-compat",_r="@firebase/app-check",Ir="@firebase/auth",Er="@firebase/auth-compat",Sr="@firebase/database",Ar="@firebase/database-compat",Tr="@firebase/functions",Cr="@firebase/functions-compat",Dr="@firebase/installations",kr="@firebase/installations-compat",Or="@firebase/messaging",Nr="@firebase/messaging-compat",Br="@firebase/performance",Mr="@firebase/performance-compat",Rr="@firebase/remote-config",Pr="@firebase/remote-config-compat",$r="@firebase/storage",Lr="@firebase/storage-compat",Fr="@firebase/firestore",xr="@firebase/vertexai-preview",jr="@firebase/firestore-compat",zr="firebase";/**
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
 */const rt="[DEFAULT]",Hr={[nt]:"fire-core",[br]:"fire-core-compat",[yr]:"fire-analytics",[wr]:"fire-analytics-compat",[_r]:"fire-app-check",[vr]:"fire-app-check-compat",[Ir]:"fire-auth",[Er]:"fire-auth-compat",[Sr]:"fire-rtdb",[Ar]:"fire-rtdb-compat",[Tr]:"fire-fn",[Cr]:"fire-fn-compat",[Dr]:"fire-iid",[kr]:"fire-iid-compat",[Or]:"fire-fcm",[Nr]:"fire-fcm-compat",[Br]:"fire-perf",[Mr]:"fire-perf-compat",[Rr]:"fire-rc",[Pr]:"fire-rc-compat",[$r]:"fire-gcs",[Lr]:"fire-gcs-compat",[Fr]:"fire-fst",[jr]:"fire-fst-compat",[xr]:"fire-vertex","fire-js":"fire-js",[zr]:"fire-js-all"};/**
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
 */const ve=new Map,Vr=new Map,st=new Map;function Ct(e,t){try{e.container.addComponent(t)}catch(n){ee.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function te(e){const t=e.name;if(st.has(t))return ee.debug(`There were multiple attempts to register component ${t}.`),!1;st.set(t,e);for(const n of ve.values())Ct(n,e);for(const n of Vr.values())Ct(n,e);return!0}function ot(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Ur={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},V=new Ie("app","Firebase",Ur);/**
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
 */class Kr{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new K("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}function Wr(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:rt,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw V.create("bad-app-name",{appName:String(s)});if(n||(n=Ut()),!n)throw V.create("no-options");const a=ve.get(s);if(a){if(Qe(n,a.options)&&Qe(r,a.config))return a;throw V.create("duplicate-app",{appName:s})}const i=new Qn(s);for(const o of st.values())i.addComponent(o);const c=new Kr(n,r,i);return ve.set(s,c),c}function qr(e=rt){const t=ve.get(e);if(!t&&e===rt&&Ut())return Wr();if(!t)throw V.create("no-app",{appName:e});return t}function U(e,t,n){var r;let s=(r=Hr[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const a=s.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const c=[`Unable to register library "${s}" with version "${t}":`];a&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&i&&c.push("and"),i&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ee.warn(c.join(" "));return}te(new K(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const Gr="firebase-heartbeat-database",Jr=1,fe="firebase-heartbeat-store";let Ke=null;function Yt(){return Ke||(Ke=Ee(Gr,Jr,{upgrade:(e,t)=>{switch(t){case 0:try{e.createObjectStore(fe)}catch(n){console.warn(n)}}}}).catch(e=>{throw V.create("idb-open",{originalErrorMessage:e.message})})),Ke}async function Yr(e){try{const n=(await Yt()).transaction(fe),r=await n.objectStore(fe).get(Xt(e));return await n.done,r}catch(t){if(t instanceof ce)ee.warn(t.message);else{const n=V.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ee.warn(n.message)}}}async function Dt(e,t){try{const r=(await Yt()).transaction(fe,"readwrite");await r.objectStore(fe).put(t,Xt(e)),await r.done}catch(n){if(n instanceof ce)ee.warn(n.message);else{const r=V.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ee.warn(r.message)}}}function Xt(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Xr=1024,Zr=30*24*60*60*1e3;class Qr{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ts(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),a=kt();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===a||this._heartbeatsCache.heartbeats.some(i=>i.date===a)))return this._heartbeatsCache.heartbeats.push({date:a,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const c=new Date(i.date).valueOf();return Date.now()-c<=Zr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kt(),{heartbeatsToSend:r,unsentEntries:s}=es(this._heartbeatsCache.heartbeats),a=Vt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),a}}function kt(){return new Date().toISOString().substring(0,10)}function es(e,t=Xr){const n=[];let r=e.slice();for(const s of e){const a=n.find(i=>i.agent===s.agent);if(a){if(a.dates.push(s.date),Ot(n)>t){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Ot(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ts{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kt()?Wt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yr(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Dt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Ot(e){return Vt(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ns(e){te(new K("platform-logger",t=>new gr(t),"PRIVATE")),te(new K("heartbeat",t=>new Qr(t),"PRIVATE")),U(nt,Tt,e),U(nt,Tt,"esm2017"),U("fire-js","")}ns("");var rs="firebase",ss="10.12.2";/**
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
 */U(rs,ss,"app");const Zt="@firebase/installations",ct="0.6.7";/**
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
 */const Qt=1e4,en=`w:${ct}`,tn="FIS_v2",as="https://firebaseinstallations.googleapis.com/v1",is=60*60*1e3,os="installations",cs="Installations";/**
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
 */const ls={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ne=new Ie(os,cs,ls);function nn(e){return e instanceof ce&&e.code.includes("request-failed")}/**
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
 */function rn({projectId:e}){return`${as}/projects/${e}/installations`}function sn(e){return{token:e.token,requestStatus:2,expiresIn:ds(e.expiresIn),creationTime:Date.now()}}async function an(e,t){const r=(await t.json()).error;return ne.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function on({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function us(e,{refreshToken:t}){const n=on(e);return n.append("Authorization",fs(t)),n}async function cn(e){const t=await e();return t.status>=500&&t.status<600?e():t}function ds(e){return Number(e.replace("s","000"))}function fs(e){return`${tn} ${e}`}/**
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
 */async function hs({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=rn(e),s=on(e),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:tn,appId:e.appId,sdkVersion:en},c={method:"POST",headers:s,body:JSON.stringify(i)},o=await cn(()=>fetch(r,c));if(o.ok){const l=await o.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:sn(l.authToken)}}else throw await an("Create Installation",o)}/**
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
 */function ln(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */const un=new Map;function dn(e,t){const n=Se(e);fn(n,t),ws(n,t)}function fn(e,t){const n=un.get(e);if(n)for(const r of n)r(t)}function ws(e,t){const n=ys();n&&n.postMessage({key:e,fid:t}),vs()}let Q=null;function ys(){return!Q&&"BroadcastChannel"in self&&(Q=new BroadcastChannel("[Firebase] FID Change"),Q.onmessage=e=>{fn(e.data.key,e.data.fid)}),Q}function vs(){un.size===0&&Q&&(Q.close(),Q=null)}/**
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
 */const _s="firebase-installations-database",Is=1,re="firebase-installations-store";let We=null;function lt(){return We||(We=Ee(_s,Is,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(re)}}})),We}async function _e(e,t){const n=Se(e),s=(await lt()).transaction(re,"readwrite"),a=s.objectStore(re),i=await a.get(n);return await a.put(t,n),await s.done,(!i||i.fid!==t.fid)&&dn(e,t.fid),t}async function hn(e){const t=Se(e),r=(await lt()).transaction(re,"readwrite");await r.objectStore(re).delete(t),await r.done}async function Ae(e,t){const n=Se(e),s=(await lt()).transaction(re,"readwrite"),a=s.objectStore(re),i=await a.get(n),c=t(i);return c===void 0?await a.delete(n):await a.put(c,n),await s.done,c&&(!i||i.fid!==c.fid)&&dn(e,c.fid),c}/**
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
 */async function ut(e){let t;const n=await Ae(e.appConfig,r=>{const s=Es(r),a=Ss(e,s);return t=a.registrationPromise,a.installationEntry});return n.fid===at?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Es(e){const t=e||{fid:ms(),registrationStatus:0};return pn(t)}function Ss(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ne.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=As(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Ts(e)}:{installationEntry:t}}async function As(e,t){try{const n=await hs(e,t);return _e(e.appConfig,n)}catch(n){throw nn(n)&&n.customData.serverCode===409?await hn(e.appConfig):await _e(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Ts(e){let t=await Nt(e.appConfig);for(;t.registrationStatus===1;)await ln(100),t=await Nt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ut(e);return r||n}return t}function Nt(e){return Ae(e,t=>{if(!t)throw ne.create("installation-not-found");return pn(t)})}function pn(e){return Cs(e)?{fid:e.fid,registrationStatus:0}:e}function Cs(e){return e.registrationStatus===1&&e.registrationTime+Qt<Date.now()}/**
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
 */async function Ds({appConfig:e,heartbeatServiceProvider:t},n){const r=ks(e,n),s=us(e,n),a=t.getImmediate({optional:!0});if(a){const l=await a.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:en,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(i)},o=await cn(()=>fetch(r,c));if(o.ok){const l=await o.json();return sn(l)}else throw await an("Generate Auth Token",o)}function ks(e,{fid:t}){return`${rn(e)}/${t}/authTokens:generate`}/**
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
 */async function dt(e,t=!1){let n;const r=await Ae(e.appConfig,a=>{if(!gn(a))throw ne.create("not-registered");const i=a.authToken;if(!t&&Bs(i))return a;if(i.requestStatus===1)return n=Os(e,t),a;{if(!navigator.onLine)throw ne.create("app-offline");const c=Rs(a);return n=Ns(e,c),c}});return n?await n:r.authToken}async function Os(e,t){let n=await Bt(e.appConfig);for(;n.authToken.requestStatus===1;)await ln(100),n=await Bt(e.appConfig);const r=n.authToken;return r.requestStatus===0?dt(e,t):r}function Bt(e){return Ae(e,t=>{if(!gn(t))throw ne.create("not-registered");const n=t.authToken;return Ps(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Ns(e,t){try{const n=await Ds(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await _e(e.appConfig,r),n}catch(n){if(nn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hn(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await _e(e.appConfig,r)}throw n}}function gn(e){return e!==void 0&&e.registrationStatus===2}function Bs(e){return e.requestStatus===2&&!Ms(e)}function Ms(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+is}function Rs(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Ps(e){return e.requestStatus===1&&e.requestTime+Qt<Date.now()}/**
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
 */const mn="installations",js="installations-internal",zs=e=>{const t=e.getProvider("app").getImmediate(),n=xs(t),r=ot(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Hs=e=>{const t=e.getProvider("app").getImmediate(),n=ot(t,mn).getImmediate();return{getId:()=>$s(n),getToken:s=>Ls(n,s)}};function Vs(){te(new K(mn,zs,"PUBLIC")),te(new K(js,Hs,"PRIVATE"))}Vs();U(Zt,ct);U(Zt,ct,"esm2017");/**
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
 */const Us="/firebase-messaging-sw.js",Ks="/firebase-cloud-messaging-push-scope",bn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Ws="https://fcmregistrations.googleapis.com/v1",wn="google.c.a.c_id",qs="google.c.a.c_l",Gs="google.c.a.ts",Js="google.c.a.e";var Mt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Mt||(Mt={}));/**
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
 */const Ge="fcm_token_details_db",Xs=5,Rt="fcm_token_object_Store";async function Zs(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(a=>a.name).includes(Ge))return null;let t=null;return(await Ee(Ge,Xs,{upgrade:async(r,s,a,i)=>{var c;if(s<2||!r.objectStoreNames.contains(Rt))return;const o=i.objectStore(Rt),l=await o.index("fcmSenderId").get(e);if(await o.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(c=d.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:L(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:L(d.auth),p256dh:L(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:L(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:L(d.auth),p256dh:L(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:L(d.vapidKey)}}}}}})).close(),await Ve(Ge),await Ve("fcm_vapid_details_db"),await Ve("undefined"),Qs(t)?t:null}function Qs(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const ea="firebase-messaging-database",ta=1,pe="firebase-messaging-store";let Je=null;function yn(){return Je||(Je=Ee(ea,ta,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}})),Je}async function na(e){const t=vn(e),r=await(await yn()).transaction(pe).objectStore(pe).get(t);if(r)return r;{const s=await Zs(e.appConfig.senderId);if(s)return await ft(e,s),s}}async function ft(e,t){const n=vn(e),s=(await yn()).transaction(pe,"readwrite");return await s.objectStore(pe).put(t,n),await s.done,t}function vn({appConfig:e}){return e.appId}/**
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
 */async function sa(e,t){const n=await pt(e),r=_n(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(ht(e.appConfig),s)).json()}catch(i){throw v.create("token-subscribe-failed",{errorInfo:i==null?void 0:i.toString()})}if(a.error){const i=a.error.message;throw v.create("token-subscribe-failed",{errorInfo:i})}if(!a.token)throw v.create("token-subscribe-no-token");return a.token}async function aa(e,t){const n=await pt(e),r=_n(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let a;try{a=await(await fetch(`${ht(e.appConfig)}/${t.token}`,s)).json()}catch(i){throw v.create("token-update-failed",{errorInfo:i==null?void 0:i.toString()})}if(a.error){const i=a.error.message;throw v.create("token-update-failed",{errorInfo:i})}if(!a.token)throw v.create("token-update-no-token");return a.token}async function ia(e,t){const r={method:"DELETE",headers:await pt(e)};try{const a=await(await fetch(`${ht(e.appConfig)}/${t}`,r)).json();if(a.error){const i=a.error.message;throw v.create("token-unsubscribe-failed",{errorInfo:i})}}catch(s){throw v.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function ht({projectId:e}){return`${Ws}/projects/${e}/registrations`}async function pt({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function _n({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==bn&&(s.web.applicationPubKey=r),s}/**
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
 */const oa=7*24*60*60*1e3;async function ca(e){const t=await ua(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:L(t.getKey("auth")),p256dh:L(t.getKey("p256dh"))},r=await na(e.firebaseDependencies);if(r){if(da(r.subscriptionOptions,n))return Date.now()>=r.createTime+oa?la(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await ia(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Pt(e.firebaseDependencies,n)}else return Pt(e.firebaseDependencies,n)}async function la(e,t){try{const n=await aa(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await ft(e.firebaseDependencies,r),n}catch(n){throw n}}async function Pt(e,t){const r={token:await sa(e,t),createTime:Date.now(),subscriptionOptions:t};return await ft(e,r),r.token}async function ua(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ys(t)})}function da(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,a=t.p256dh===e.p256dh;return n&&r&&s&&a}/**
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
 */function $t(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return fa(t,e),ha(t,e),pa(t,e),t}function fa(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const a=t.notification.icon;a&&(e.notification.icon=a)}function ha(e,t){t.data&&(e.data=t.data)}function pa(e,t){var n,r,s,a,i;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(a=t.notification)===null||a===void 0?void 0:a.click_action;c&&(e.fcmOptions.link=c);const o=(i=t.fcmOptions)===null||i===void 0?void 0:i.analytics_label;o&&(e.fcmOptions.analyticsLabel=o)}/**
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
 */function ga(e){return typeof e=="object"&&!!e&&wn in e}/**
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
 */In("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");In("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function In(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */async function va(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=bn)}/**
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
 */async function En(e,t){if(!navigator)throw v.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw v.create("permission-blocked");return await va(e,t==null?void 0:t.vapidKey),await ya(e,t==null?void 0:t.serviceWorkerRegistration),ca(e)}/**
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
 */async function _a(e,t,n){const r=Ia(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[wn],message_name:n[qs],message_time:n[Gs],message_device_time:Math.floor(Date.now()/1e3)})}function Ia(e){switch(e){case he.NOTIFICATION_CLICKED:return"notification_open";case he.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */const Sa=e=>{const t=new ba(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Ea(t,n)),t},Aa=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>En(t,r)}};function Ta(){te(new K("messaging",Sa,"PUBLIC")),te(new K("messaging-internal",Aa,"PRIVATE")),U(Lt,Ft),U(Lt,Ft,"esm2017")}/**
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
 */async function Ca(){try{await Wt()}catch{return!1}return typeof window<"u"&&Kt()&&Wn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Da(e=qr()){return Ca().then(t=>{if(!t)throw v.create("unsupported-browser")},t=>{throw v.create("indexed-db-unsupported")}),ot(qt(e),"messaging").getImmediate()}async function ka(e,t){return e=qt(e),En(e,t)}Ta();function xt(e){let t,n;return{c(){t=p("p"),n=Xe(e[3]),this.h()},l(r){t=g(r,"P",{class:!0});var s=B(t);n=Ze(s,e[3]),s.forEach(C),this.h()},h(){u(t,"class","error-message svelte-yl5zze")},m(r,s){jt(r,t,s),f(t,n)},p(r,s){s&8&&Tn(n,r[3])},d(r){r&&C(t)}}}function Oa(e){let t,n,r,s,a,i="Echo Dental Training Unit",c,o,l,d="LOG IN",D,_,M="Your email",W,x,m,R,Te,le,A,se,q,gt="Your password",Ce,P,N,G,mt,De,k,ke,T,ge,Oe,Ne,j,J,z,Be,Me,$,bt="Lost password?",Re,Y,Pe,X,$e,H,wt="Contacting us",ue,Le,yt,w=e[3]&&xt(e);return Y=new Pn({props:{clickHandler:e[5],useTJ:!0,text:"Log in",width:"100%"}}),{c(){t=p("div"),n=p("img"),s=E(),a=p("h1"),a.textContent=i,c=E(),o=p("div"),l=p("h2"),l.textContent=d,D=E(),_=p("label"),_.textContent=M,W=E(),x=p("div"),m=p("div"),R=p("img"),le=E(),A=p("input"),se=E(),q=p("label"),q.textContent=gt,Ce=E(),P=p("div"),N=p("div"),G=p("img"),De=E(),k=p("input"),ke=E(),T=p("img"),Oe=E(),w&&w.c(),Ne=E(),j=p("div"),J=p("label"),z=p("input"),Be=Xe(`\r
          Remember me`),Me=E(),$=p("a"),$.textContent=bt,Re=E(),kn(Y.$$.fragment),Pe=E(),X=p("p"),$e=Xe("Not registered? Create an account by "),H=p("u"),H.textContent=wt,this.h()},l(b){t=g(b,"DIV",{class:!0});var I=B(t);n=g(I,"IMG",{src:!0,alt:!0,width:!0,class:!0,style:!0}),s=S(I),a=g(I,"H1",{class:!0,style:!0,"data-svelte-h":!0}),ie(a)!=="svelte-wstfby"&&(a.textContent=i),c=S(I),o=g(I,"DIV",{class:!0,style:!0});var y=B(o);l=g(y,"H2",{class:!0,style:!0,"data-svelte-h":!0}),ie(l)!=="svelte-17ss5ox"&&(l.textContent=d),D=S(y),_=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),ie(_)!=="svelte-9v1dp9"&&(_.textContent=M),W=S(y),x=g(y,"DIV",{class:!0});var vt=B(x);m=g(vt,"DIV",{class:!0});var me=B(m);R=g(me,"IMG",{src:!0,alt:!0,class:!0}),le=S(me),A=g(me,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),me.forEach(C),vt.forEach(C),se=S(y),q=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),ie(q)!=="svelte-15gn3f4"&&(q.textContent=gt),Ce=S(y),P=g(y,"DIV",{class:!0});var be=B(P);N=g(be,"DIV",{class:!0});var ae=B(N);G=g(ae,"IMG",{src:!0,alt:!0,class:!0}),De=S(ae),k=g(ae,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),ke=S(ae),T=g(ae,"IMG",{src:!0,style:!0,class:!0}),ae.forEach(C),Oe=S(be),w&&w.l(be),be.forEach(C),Ne=S(y),j=g(y,"DIV",{class:!0});var we=B(j);J=g(we,"LABEL",{class:!0});var Fe=B(J);z=g(Fe,"INPUT",{type:!0,class:!0}),Be=Ze(Fe,`\r
          Remember me`),Fe.forEach(C),Me=S(we),$=g(we,"A",{href:!0,class:!0,"data-svelte-h":!0}),ie($)!=="svelte-1y00aro"&&($.textContent=bt),we.forEach(C),Re=S(y),On(Y.$$.fragment,y),Pe=S(y),X=g(y,"P",{class:!0});var xe=B(X);$e=Ze(xe,"Not registered? Create an account by "),H=g(xe,"U",{style:!0,"data-svelte-h":!0}),ie(H)!=="svelte-1wiuusi"&&(H.textContent=wt),xe.forEach(C),y.forEach(C),I.forEach(C),this.h()},h(){de(n.src,r="https://echo-dentists.s3.me-central-1.amazonaws.com/EDTULOGO.png")||u(n,"src",r),u(n,"alt","Logo"),u(n,"width","90"),u(n,"class","logo svelte-yl5zze"),O(n,"bottom","10px"),O(n,"position","relative"),u(a,"class","main-title svelte-yl5zze"),O(a,"bottom","15px"),O(a,"position","relative"),u(l,"class","login-title svelte-yl5zze"),O(l,"margin","0 0 30px"),u(_,"class","svelte-yl5zze"),de(R.src,Te="/at.png")||u(R,"src",Te),u(R,"alt","name icon"),u(R,"class","svelte-yl5zze"),u(A,"class","inputField svelte-yl5zze"),u(A,"type","email"),u(A,"id","email"),u(A,"placeholder","Enter your email"),u(m,"class","inputFieldCon svelte-yl5zze"),u(x,"class","input-container svelte-yl5zze"),u(q,"class","svelte-yl5zze"),de(G.src,mt="/password.png")||u(G,"src",mt),u(G,"alt","name icon"),u(G,"class","svelte-yl5zze"),u(k,"class","inputField svelte-yl5zze"),u(k,"type","password"),u(k,"id","password"),u(k,"placeholder","Enter your password"),de(T.src,ge=e[4]?"/show.png":"/hide.png")||u(T,"src",ge),O(T,"width","20px"),O(T,"height","20px"),O(T,"position","absolute"),O(T,"left","79%"),u(T,"class","svelte-yl5zze"),u(N,"class","inputFieldCon svelte-yl5zze"),u(P,"class","input-container svelte-yl5zze"),u(z,"type","checkbox"),u(z,"class","svelte-yl5zze"),u(J,"class","svelte-yl5zze"),u($,"href","#"),u($,"class","lost-password svelte-yl5zze"),u(j,"class","remember-lost-row svelte-yl5zze"),O(H,"cursor","pointer"),u(X,"class","not-registered svelte-yl5zze"),u(o,"class","neumorphic-box svelte-yl5zze"),O(o,"margin","0 0 30px"),u(t,"class","login-container svelte-yl5zze")},m(b,I){jt(b,t,I),f(t,n),f(t,s),f(t,a),f(t,c),f(t,o),f(o,l),f(o,D),f(o,_),f(o,W),f(o,x),f(x,m),f(m,R),f(m,le),f(m,A),ye(A,e[0]),f(o,se),f(o,q),f(o,Ce),f(o,P),f(P,N),f(N,G),f(N,De),f(N,k),ye(k,e[1]),f(N,ke),f(N,T),f(P,Oe),w&&w.m(P,null),f(o,Ne),f(o,j),f(j,J),f(J,z),z.checked=e[2],f(J,Be),f(j,Me),f(j,$),f(o,Re),Nn(Y,o,null),f(o,Pe),f(o,X),f(X,$e),f(X,H),ue=!0,Le||(yt=[oe(A,"input",e[7]),oe(k,"input",e[8]),oe(T,"click",e[9]),oe(z,"change",e[10]),oe($,"click",e[11]),oe(H,"click",e[12])],Le=!0)},p(b,[I]){I&1&&A.value!==b[0]&&ye(A,b[0]),I&2&&k.value!==b[1]&&ye(k,b[1]),(!ue||I&16&&!de(T.src,ge=b[4]?"/show.png":"/hide.png"))&&u(T,"src",ge),b[3]?w?w.p(b,I):(w=xt(b),w.c(),w.m(P,null)):w&&(w.d(1),w=null),I&4&&(z.checked=b[2])},i(b){ue||(Bn(Y.$$.fragment,b),ue=!0)},o(b){Mn(Y.$$.fragment,b),ue=!1},d(b){b&&C(t),w&&w.d(),Rn(Y),Le=!1,An(yt)}}}function Na(e,t,n){let r="",s="",a=!1,i="",c=!1,{func:o}=t;function l(){r.length>7&&s.length>3?je("n/si/",{email:r,p:s}).then(m=>{localStorage.setItem("li",!0),localStorage.setItem("t",m.t),localStorage.setItem("aslklx20002k,777",m.t==0||m.t==2?5:0),localStorage.setItem("n",m.n),localStorage.setItem("i",m.i),localStorage.setItem("c",m.c),localStorage.setItem("pn",m.pn);const R={apiKey:"AIzaSyAuxbwDeip4-qy99cQBM0Y9A0KNGZ84rWc",authDomain:"dentists-iq.firebaseapp.com",projectId:"dentists-iq",messagingSenderId:"574460671157",appId:"1:574460671157:web:b1b6ca308aa9d8e9b8fafc",measurementId:"G-7FWHC474JJ"};Notification.requestPermission().then(function(Te){const le=initializeApp(R),A=Da(le);ka(A,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(se=>{se&&je("u/un",{token:se}).then(()=>{(m.t==0||m.t==2)&&(location.href="/admin"),location.reload()})})})}).catch(m=>{n(3,i="Incorrect email or password")}):n(3,i="Incorrect email or password")}function d(){r=this.value,n(0,r)}function D(){s=this.value,n(1,s)}const _=()=>{document.getElementById("password").type=c?"password":"text",n(4,c=!c)};function M(){a=this.checked,n(2,a)}const W=()=>{console.log(r),r&&r.includes("@echo")&&je("u/fop",{email:r})},x=()=>{location.href="/contact-us"};return e.$$set=m=>{"func"in m&&n(6,o=m.func)},[r,s,a,i,c,l,o,d,D,_,M,W,x]}class $a extends Cn{constructor(t){super(),Dn(this,t,Na,Oa,Sn,{func:6})}}export{$a as L,Da as g,Wr as i};
