import{s as Fn,e as p,a as E,t as et,c as g,b as M,f as S,g as ce,d as T,m as tt,v as he,p as u,h as O,i as Zt,j as f,w as ve,q as le,y as jn,r as xn}from"./scheduler.CiUN_2Ko.js";import{S as Hn,i as zn,c as Vn,a as Un,m as Kn,t as Wn,b as qn,e as Gn}from"./index.koTVZFH-.js";import{B as Jn}from"./Button.DaX0Hw9h.js";import{f as xe}from"./not.BjEzKfTd.js";var Bt={};/**
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
 */const Qt=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Yn=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],a=e[n++],c=e[n++],i=((s&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-65536;t[r++]=String.fromCharCode(55296+(i>>10)),t[r++]=String.fromCharCode(56320+(i&1023))}else{const o=e[n++],a=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|a&63)}}return t.join("")},en={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],a=s+1<e.length,c=a?e[s+1]:0,i=s+2<e.length,l=i?e[s+2]:0,d=o>>2,A=(o&3)<<4|c>>4;let _=(c&15)<<2|l>>6,$=l&63;i||($=64,a||(_=64)),r.push(n[d],n[A],n[_],n[$])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Qt(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Yn(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],c=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const A=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||c==null||l==null||A==null)throw new Xn;const _=o<<2|c>>4;if(r.push(_),l!==64){const $=c<<4&240|l>>2;if(r.push($),A!==64){const q=l<<6&192|A;r.push(q)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Xn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zn=function(e){const t=Qt(e);return en.encodeByteArray(t,!0)},tn=function(e){return Zn(e).replace(/\./g,"")},Qn=function(e){try{return en.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function er(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tr=()=>er().__FIREBASE_DEFAULTS__,nr=()=>{if(typeof process>"u"||typeof Bt>"u")return;const e=Bt.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},rr=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Qn(e[1]);return t&&JSON.parse(t)},sr=()=>{try{return tr()||nr()||rr()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},nn=()=>{var e;return(e=sr())===null||e===void 0?void 0:e.config};/**
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
 */class or{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function rn(){try{return typeof indexedDB=="object"}catch{return!1}}function sn(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function ar(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const ir="FirebaseError";class ue extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ir,Object.setPrototypeOf(this,ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ee.prototype.create)}}class Ee{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],a=o?cr(o,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new ue(s,c,r)}}function cr(e,t){return e.replace(lr,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const lr=/\{\$([^}]+)}/g;function nt(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],a=t[s];if(Nt(o)&&Nt(a)){if(!nt(o,a))return!1}else if(o!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Nt(e){return e!==null&&typeof e=="object"}/**
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
 */function dt(e){return e&&e._delegate?e._delegate:e}class W{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const Q="[DEFAULT]";/**
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
 */class ur{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new or;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(fr(t))try{this.getOrInitializeService({instanceIdentifier:Q})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=Q){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Q){return this.instances.has(t)}getOptions(t=Q){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(o);r===c&&a.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const a=this.instances.get(s);return a&&t(a,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dr(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Q){return this.component?this.component.multipleInstances?t:Q:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dr(e){return e===Q?void 0:e}function fr(e){return e.instantiationMode==="EAGER"}/**
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
 */class hr{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new ur(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var h;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(h||(h={}));const pr={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},gr=h.INFO,mr={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},br=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=mr[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class wr{constructor(t){this.name=t,this._logLevel=gr,this._logHandler=br,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in h))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?pr[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...t),this._logHandler(this,h.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...t),this._logHandler(this,h.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,h.INFO,...t),this._logHandler(this,h.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,h.WARN,...t),this._logHandler(this,h.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...t),this._logHandler(this,h.ERROR,...t)}}const yr=(e,t)=>t.some(n=>e instanceof n);let Mt,$t;function vr(){return Mt||(Mt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function _r(){return $t||($t=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const on=new WeakMap,rt=new WeakMap,an=new WeakMap,He=new WeakMap,ft=new WeakMap;function Ir(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(F(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&on.set(n,e)}).catch(()=>{}),ft.set(t,e),t}function Er(e){if(rt.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});rt.set(e,t)}let st={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return rt.get(e);if(t==="objectStoreNames")return e.objectStoreNames||an.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return F(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Sr(e){st=e(st)}function Dr(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(ze(this),t,...n);return an.set(r,t.sort?t.sort():[t]),F(r)}:_r().includes(e)?function(...t){return e.apply(ze(this),t),F(on.get(this))}:function(...t){return F(e.apply(ze(this),t))}}function Tr(e){return typeof e=="function"?Dr(e):(e instanceof IDBTransaction&&Er(e),yr(e,vr())?new Proxy(e,st):e)}function F(e){if(e instanceof IDBRequest)return Ir(e);if(He.has(e))return He.get(e);const t=Tr(e);return t!==e&&(He.set(e,t),ft.set(t,e)),t}const ze=e=>ft.get(e);function ht(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),c=F(a);return r&&a.addEventListener("upgradeneeded",i=>{r(F(a.result),i.oldVersion,i.newVersion,F(a.transaction),i)}),n&&a.addEventListener("blocked",i=>n(i.oldVersion,i.newVersion,i)),c.then(i=>{o&&i.addEventListener("close",()=>o()),s&&i.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),c}function Ve(e,{blocked:t}={}){const n=indexedDB.deleteDatabase(e);return t&&n.addEventListener("blocked",r=>t(r.oldVersion,r)),F(n).then(()=>{})}const Ar=["get","getKey","getAll","getAllKeys","count"],Cr=["put","add","delete","clear"],Ue=new Map;function Pt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ue.get(t))return Ue.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Cr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ar.includes(n)))return;const o=async function(a,...c){const i=this.transaction(a,s?"readwrite":"readonly");let l=i.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&i.done]))[0]};return Ue.set(t,o),o}Sr(e=>({...e,get:(t,n,r)=>Pt(t,n)||e.get(t,n,r),has:(t,n)=>!!Pt(t,n)||e.has(t,n)}));/**
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
 */class kr{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Or(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Or(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ot="@firebase/app",Rt="0.9.25";/**
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
 */const te=new wr("@firebase/app"),Br="@firebase/app-compat",Nr="@firebase/analytics-compat",Mr="@firebase/analytics",$r="@firebase/app-check-compat",Pr="@firebase/app-check",Rr="@firebase/auth",Lr="@firebase/auth-compat",Fr="@firebase/database",jr="@firebase/database-compat",xr="@firebase/functions",Hr="@firebase/functions-compat",zr="@firebase/installations",Vr="@firebase/installations-compat",Ur="@firebase/messaging",Kr="@firebase/messaging-compat",Wr="@firebase/performance",qr="@firebase/performance-compat",Gr="@firebase/remote-config",Jr="@firebase/remote-config-compat",Yr="@firebase/storage",Xr="@firebase/storage-compat",Zr="@firebase/firestore",Qr="@firebase/firestore-compat",es="firebase";/**
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
 */const at="[DEFAULT]",ts={[ot]:"fire-core",[Br]:"fire-core-compat",[Mr]:"fire-analytics",[Nr]:"fire-analytics-compat",[Pr]:"fire-app-check",[$r]:"fire-app-check-compat",[Rr]:"fire-auth",[Lr]:"fire-auth-compat",[Fr]:"fire-rtdb",[jr]:"fire-rtdb-compat",[xr]:"fire-fn",[Hr]:"fire-fn-compat",[zr]:"fire-iid",[Vr]:"fire-iid-compat",[Ur]:"fire-fcm",[Kr]:"fire-fcm-compat",[Wr]:"fire-perf",[qr]:"fire-perf-compat",[Gr]:"fire-rc",[Jr]:"fire-rc-compat",[Yr]:"fire-gcs",[Xr]:"fire-gcs-compat",[Zr]:"fire-fst",[Qr]:"fire-fst-compat","fire-js":"fire-js",[es]:"fire-js-all"};/**
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
 */const _e=new Map,it=new Map;function ns(e,t){try{e.container.addComponent(t)}catch(n){te.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ne(e){const t=e.name;if(it.has(t))return te.debug(`There were multiple attempts to register component ${t}.`),!1;it.set(t,e);for(const n of _e.values())ns(n,e);return!0}function pt(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const rs={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},V=new Ee("app","Firebase",rs);/**
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
 */class ss{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new W("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw V.create("app-deleted",{appName:this._name})}}function os(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:at,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw V.create("bad-app-name",{appName:String(s)});if(n||(n=nn()),!n)throw V.create("no-options");const o=_e.get(s);if(o){if(nt(n,o.options)&&nt(r,o.config))return o;throw V.create("duplicate-app",{appName:s})}const a=new hr(s);for(const i of it.values())a.addComponent(i);const c=new ss(n,r,a);return _e.set(s,c),c}function cn(e=at){const t=_e.get(e);if(!t&&e===at&&nn())return os();if(!t)throw V.create("no-app",{appName:e});return t}function U(e,t,n){var r;let s=(r=ts[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const c=[`Unable to register library "${s}" with version "${t}":`];o&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&c.push("and"),a&&c.push(`version name "${t}" contains illegal characters (whitespace or "/")`),te.warn(c.join(" "));return}ne(new W(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const as="firebase-heartbeat-database",is=1,pe="firebase-heartbeat-store";let Ke=null;function ln(){return Ke||(Ke=ht(as,is,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(pe)}}}).catch(e=>{throw V.create("idb-open",{originalErrorMessage:e.message})})),Ke}async function cs(e){try{return await(await ln()).transaction(pe).objectStore(pe).get(un(e))}catch(t){if(t instanceof ue)te.warn(t.message);else{const n=V.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});te.warn(n.message)}}}async function Lt(e,t){try{const r=(await ln()).transaction(pe,"readwrite");await r.objectStore(pe).put(t,un(e)),await r.done}catch(n){if(n instanceof ue)te.warn(n.message);else{const r=V.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});te.warn(r.message)}}}function un(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ls=1024,us=30*24*60*60*1e3;class ds{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new hs(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),o=Ft();if(!(((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===o||this._heartbeatsCache.heartbeats.some(a=>a.date===o)))return this._heartbeatsCache.heartbeats.push({date:o,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const c=new Date(a.date).valueOf();return Date.now()-c<=us}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Ft(),{heartbeatsToSend:r,unsentEntries:s}=fs(this._heartbeatsCache.heartbeats),o=tn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}}function Ft(){return new Date().toISOString().substring(0,10)}function fs(e,t=ls){const n=[];let r=e.slice();for(const s of e){const o=n.find(a=>a.agent===s.agent);if(o){if(o.dates.push(s.date),jt(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),jt(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class hs{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return rn()?sn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await cs(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Lt(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function jt(e){return tn(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function ps(e){ne(new W("platform-logger",t=>new kr(t),"PRIVATE")),ne(new W("heartbeat",t=>new ds(t),"PRIVATE")),U(ot,Rt,e),U(ot,Rt,"esm2017"),U("fire-js","")}ps("");var gs="firebase",ms="10.7.1";/**
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
 */U(gs,ms,"app");const bs=(e,t)=>t.some(n=>e instanceof n);let xt,Ht;function ws(){return xt||(xt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ys(){return Ht||(Ht=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const dn=new WeakMap,ct=new WeakMap,fn=new WeakMap,We=new WeakMap,gt=new WeakMap;function vs(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{n(K(e.result)),s()},a=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&dn.set(n,e)}).catch(()=>{}),gt.set(t,e),t}function _s(e){if(ct.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{n(),s()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)});ct.set(e,t)}let lt={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ct.get(e);if(t==="objectStoreNames")return e.objectStoreNames||fn.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return K(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Is(e){lt=e(lt)}function Es(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(qe(this),t,...n);return fn.set(r,t.sort?t.sort():[t]),K(r)}:ys().includes(e)?function(...t){return e.apply(qe(this),t),K(dn.get(this))}:function(...t){return K(e.apply(qe(this),t))}}function Ss(e){return typeof e=="function"?Es(e):(e instanceof IDBTransaction&&_s(e),bs(e,ws())?new Proxy(e,lt):e)}function K(e){if(e instanceof IDBRequest)return vs(e);if(We.has(e))return We.get(e);const t=Ss(e);return t!==e&&(We.set(e,t),gt.set(t,e)),t}const qe=e=>gt.get(e);function Ds(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const a=indexedDB.open(e,t),c=K(a);return r&&a.addEventListener("upgradeneeded",i=>{r(K(a.result),i.oldVersion,i.newVersion,K(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),c.then(i=>{o&&i.addEventListener("close",()=>o()),s&&i.addEventListener("versionchange",()=>s())}).catch(()=>{}),c}const Ts=["get","getKey","getAll","getAllKeys","count"],As=["put","add","delete","clear"],Ge=new Map;function zt(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ge.get(t))return Ge.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=As.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ts.includes(n)))return;const o=async function(a,...c){const i=this.transaction(a,s?"readwrite":"readonly");let l=i.store;return r&&(l=l.index(c.shift())),(await Promise.all([l[n](...c),s&&i.done]))[0]};return Ge.set(t,o),o}Is(e=>({...e,get:(t,n,r)=>zt(t,n)||e.get(t,n,r),has:(t,n)=>!!zt(t,n)||e.has(t,n)}));const hn="@firebase/installations",mt="0.6.4";/**
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
 */const pn=1e4,gn=`w:${mt}`,mn="FIS_v2",Cs="https://firebaseinstallations.googleapis.com/v1",ks=60*60*1e3,Os="installations",Bs="Installations";/**
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
 */const Ns={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},re=new Ee(Os,Bs,Ns);function bn(e){return e instanceof ue&&e.code.includes("request-failed")}/**
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
 */function wn({projectId:e}){return`${Cs}/projects/${e}/installations`}function yn(e){return{token:e.token,requestStatus:2,expiresIn:$s(e.expiresIn),creationTime:Date.now()}}async function vn(e,t){const r=(await t.json()).error;return re.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function _n({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Ms(e,{refreshToken:t}){const n=_n(e);return n.append("Authorization",Ps(t)),n}async function In(e){const t=await e();return t.status>=500&&t.status<600?e():t}function $s(e){return Number(e.replace("s","000"))}function Ps(e){return`${mn} ${e}`}/**
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
 */async function Rs({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=wn(e),s=_n(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={fid:n,authVersion:mn,appId:e.appId,sdkVersion:gn},c={method:"POST",headers:s,body:JSON.stringify(a)},i=await In(()=>fetch(r,c));if(i.ok){const l=await i.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:yn(l.authToken)}}else throw await vn("Create Installation",i)}/**
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
 */function En(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function Ls(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Fs=/^[cdef][\w-]{21}$/,ut="";function js(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=xs(e);return Fs.test(n)?n:ut}catch{return ut}}function xs(e){return Ls(e).substr(0,22)}/**
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
 */const Sn=new Map;function Dn(e,t){const n=Se(e);Tn(n,t),Hs(n,t)}function Tn(e,t){const n=Sn.get(e);if(n)for(const r of n)r(t)}function Hs(e,t){const n=zs();n&&n.postMessage({key:e,fid:t}),Vs()}let ee=null;function zs(){return!ee&&"BroadcastChannel"in self&&(ee=new BroadcastChannel("[Firebase] FID Change"),ee.onmessage=e=>{Tn(e.data.key,e.data.fid)}),ee}function Vs(){Sn.size===0&&ee&&(ee.close(),ee=null)}/**
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
 */const Us="firebase-installations-database",Ks=1,se="firebase-installations-store";let Je=null;function bt(){return Je||(Je=Ds(Us,Ks,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(se)}}})),Je}async function Ie(e,t){const n=Se(e),s=(await bt()).transaction(se,"readwrite"),o=s.objectStore(se),a=await o.get(n);return await o.put(t,n),await s.done,(!a||a.fid!==t.fid)&&Dn(e,t.fid),t}async function An(e){const t=Se(e),r=(await bt()).transaction(se,"readwrite");await r.objectStore(se).delete(t),await r.done}async function De(e,t){const n=Se(e),s=(await bt()).transaction(se,"readwrite"),o=s.objectStore(se),a=await o.get(n),c=t(a);return c===void 0?await o.delete(n):await o.put(c,n),await s.done,c&&(!a||a.fid!==c.fid)&&Dn(e,c.fid),c}/**
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
 */async function wt(e){let t;const n=await De(e.appConfig,r=>{const s=Ws(r),o=qs(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===ut?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Ws(e){const t=e||{fid:js(),registrationStatus:0};return Cn(t)}function qs(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(re.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Gs(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Js(e)}:{installationEntry:t}}async function Gs(e,t){try{const n=await Rs(e,t);return Ie(e.appConfig,n)}catch(n){throw bn(n)&&n.customData.serverCode===409?await An(e.appConfig):await Ie(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Js(e){let t=await Vt(e.appConfig);for(;t.registrationStatus===1;)await En(100),t=await Vt(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await wt(e);return r||n}return t}function Vt(e){return De(e,t=>{if(!t)throw re.create("installation-not-found");return Cn(t)})}function Cn(e){return Ys(e)?{fid:e.fid,registrationStatus:0}:e}function Ys(e){return e.registrationStatus===1&&e.registrationTime+pn<Date.now()}/**
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
 */async function Xs({appConfig:e,heartbeatServiceProvider:t},n){const r=Zs(e,n),s=Ms(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={installation:{sdkVersion:gn,appId:e.appId}},c={method:"POST",headers:s,body:JSON.stringify(a)},i=await In(()=>fetch(r,c));if(i.ok){const l=await i.json();return yn(l)}else throw await vn("Generate Auth Token",i)}function Zs(e,{fid:t}){return`${wn(e)}/${t}/authTokens:generate`}/**
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
 */async function yt(e,t=!1){let n;const r=await De(e.appConfig,o=>{if(!kn(o))throw re.create("not-registered");const a=o.authToken;if(!t&&to(a))return o;if(a.requestStatus===1)return n=Qs(e,t),o;{if(!navigator.onLine)throw re.create("app-offline");const c=ro(o);return n=eo(e,c),c}});return n?await n:r.authToken}async function Qs(e,t){let n=await Ut(e.appConfig);for(;n.authToken.requestStatus===1;)await En(100),n=await Ut(e.appConfig);const r=n.authToken;return r.requestStatus===0?yt(e,t):r}function Ut(e){return De(e,t=>{if(!kn(t))throw re.create("not-registered");const n=t.authToken;return so(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function eo(e,t){try{const n=await Xs(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Ie(e.appConfig,r),n}catch(n){if(bn(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await An(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Ie(e.appConfig,r)}throw n}}function kn(e){return e!==void 0&&e.registrationStatus===2}function to(e){return e.requestStatus===2&&!no(e)}function no(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+ks}function ro(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function so(e){return e.requestStatus===1&&e.requestTime+pn<Date.now()}/**
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
 */async function oo(e){const t=e,{installationEntry:n,registrationPromise:r}=await wt(t);return r?r.catch(console.error):yt(t).catch(console.error),n.fid}/**
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
 */async function ao(e,t=!1){const n=e;return await io(n),(await yt(n,t)).token}async function io(e){const{registrationPromise:t}=await wt(e);t&&await t}/**
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
 */function co(e){if(!e||!e.options)throw Ye("App Configuration");if(!e.name)throw Ye("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Ye(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Ye(e){return re.create("missing-app-config-values",{valueName:e})}/**
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
 */const On="installations",lo="installations-internal",uo=e=>{const t=e.getProvider("app").getImmediate(),n=co(t),r=pt(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},fo=e=>{const t=e.getProvider("app").getImmediate(),n=pt(t,On).getImmediate();return{getId:()=>oo(n),getToken:s=>ao(n,s)}};function ho(){ne(new W(On,uo,"PUBLIC")),ne(new W(lo,fo,"PRIVATE"))}ho();U(hn,mt);U(hn,mt,"esm2017");/**
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
 */const po="/firebase-messaging-sw.js",go="/firebase-cloud-messaging-push-scope",Bn="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",mo="https://fcmregistrations.googleapis.com/v1",Nn="google.c.a.c_id",bo="google.c.a.c_l",wo="google.c.a.ts",yo="google.c.a.e";var Kt;(function(e){e[e.DATA_MESSAGE=1]="DATA_MESSAGE",e[e.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(Kt||(Kt={}));/**
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
 */var ge;(function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"})(ge||(ge={}));/**
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
 */function L(e){const t=new Uint8Array(e);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function vo(e){const t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let o=0;o<r.length;++o)s[o]=r.charCodeAt(o);return s}/**
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
 */const Xe="fcm_token_details_db",_o=5,Wt="fcm_token_object_Store";async function Io(e){if("databases"in indexedDB&&!(await indexedDB.databases()).map(o=>o.name).includes(Xe))return null;let t=null;return(await ht(Xe,_o,{upgrade:async(r,s,o,a)=>{var c;if(s<2||!r.objectStoreNames.contains(Wt))return;const i=a.objectStore(Wt),l=await i.index("fcmSenderId").get(e);if(await i.clear(),!!l){if(s===2){const d=l;if(!d.auth||!d.p256dh||!d.endpoint)return;t={token:d.fcmToken,createTime:(c=d.createTime)!==null&&c!==void 0?c:Date.now(),subscriptionOptions:{auth:d.auth,p256dh:d.p256dh,endpoint:d.endpoint,swScope:d.swScope,vapidKey:typeof d.vapidKey=="string"?d.vapidKey:L(d.vapidKey)}}}else if(s===3){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:L(d.auth),p256dh:L(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:L(d.vapidKey)}}}else if(s===4){const d=l;t={token:d.fcmToken,createTime:d.createTime,subscriptionOptions:{auth:L(d.auth),p256dh:L(d.p256dh),endpoint:d.endpoint,swScope:d.swScope,vapidKey:L(d.vapidKey)}}}}}})).close(),await Ve(Xe),await Ve("fcm_vapid_details_db"),await Ve("undefined"),Eo(t)?t:null}function Eo(e){if(!e||!e.subscriptionOptions)return!1;const{subscriptionOptions:t}=e;return typeof e.createTime=="number"&&e.createTime>0&&typeof e.token=="string"&&e.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
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
 */const So="firebase-messaging-database",Do=1,oe="firebase-messaging-store";let Ze=null;function vt(){return Ze||(Ze=ht(So,Do,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(oe)}}})),Ze}async function Mn(e){const t=It(e),r=await(await vt()).transaction(oe).objectStore(oe).get(t);if(r)return r;{const s=await Io(e.appConfig.senderId);if(s)return await _t(e,s),s}}async function _t(e,t){const n=It(e),s=(await vt()).transaction(oe,"readwrite");return await s.objectStore(oe).put(t,n),await s.done,t}async function To(e){const t=It(e),r=(await vt()).transaction(oe,"readwrite");await r.objectStore(oe).delete(t),await r.done}function It({appConfig:e}){return e.appId}/**
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
 */const Ao={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},v=new Ee("messaging","Messaging",Ao);/**
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
 */async function Co(e,t){const n=await St(e),r=Pn(t),s={method:"POST",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(Et(e.appConfig),s)).json()}catch(a){throw v.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw v.create("token-subscribe-failed",{errorInfo:a})}if(!o.token)throw v.create("token-subscribe-no-token");return o.token}async function ko(e,t){const n=await St(e),r=Pn(t.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let o;try{o=await(await fetch(`${Et(e.appConfig)}/${t.token}`,s)).json()}catch(a){throw v.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(o.error){const a=o.error.message;throw v.create("token-update-failed",{errorInfo:a})}if(!o.token)throw v.create("token-update-no-token");return o.token}async function $n(e,t){const r={method:"DELETE",headers:await St(e)};try{const o=await(await fetch(`${Et(e.appConfig)}/${t}`,r)).json();if(o.error){const a=o.error.message;throw v.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw v.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Et({projectId:e}){return`${mo}/projects/${e}/registrations`}async function St({appConfig:e,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Pn({p256dh:e,auth:t,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:t,p256dh:e}};return r!==Bn&&(s.web.applicationPubKey=r),s}/**
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
 */const Oo=7*24*60*60*1e3;async function Bo(e){const t=await $o(e.swRegistration,e.vapidKey),n={vapidKey:e.vapidKey,swScope:e.swRegistration.scope,endpoint:t.endpoint,auth:L(t.getKey("auth")),p256dh:L(t.getKey("p256dh"))},r=await Mn(e.firebaseDependencies);if(r){if(Po(r.subscriptionOptions,n))return Date.now()>=r.createTime+Oo?Mo(e,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await $n(e.firebaseDependencies,r.token)}catch(s){console.warn(s)}return qt(e.firebaseDependencies,n)}else return qt(e.firebaseDependencies,n)}async function No(e){const t=await Mn(e.firebaseDependencies);t&&(await $n(e.firebaseDependencies,t.token),await To(e.firebaseDependencies));const n=await e.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Mo(e,t){try{const n=await ko(e.firebaseDependencies,t),r=Object.assign(Object.assign({},t),{token:n,createTime:Date.now()});return await _t(e.firebaseDependencies,r),n}catch(n){throw await No(e),n}}async function qt(e,t){const r={token:await Co(e,t),createTime:Date.now(),subscriptionOptions:t};return await _t(e,r),r.token}async function $o(e,t){const n=await e.pushManager.getSubscription();return n||e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:vo(t)})}function Po(e,t){const n=t.vapidKey===e.vapidKey,r=t.endpoint===e.endpoint,s=t.auth===e.auth,o=t.p256dh===e.p256dh;return n&&r&&s&&o}/**
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
 */function Gt(e){const t={from:e.from,collapseKey:e.collapse_key,messageId:e.fcmMessageId};return Ro(t,e),Lo(t,e),Fo(t,e),t}function Ro(e,t){if(!t.notification)return;e.notification={};const n=t.notification.title;n&&(e.notification.title=n);const r=t.notification.body;r&&(e.notification.body=r);const s=t.notification.image;s&&(e.notification.image=s);const o=t.notification.icon;o&&(e.notification.icon=o)}function Lo(e,t){t.data&&(e.data=t.data)}function Fo(e,t){var n,r,s,o,a;if(!t.fcmOptions&&!(!((n=t.notification)===null||n===void 0)&&n.click_action))return;e.fcmOptions={};const c=(s=(r=t.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(o=t.notification)===null||o===void 0?void 0:o.click_action;c&&(e.fcmOptions.link=c);const i=(a=t.fcmOptions)===null||a===void 0?void 0:a.analytics_label;i&&(e.fcmOptions.analyticsLabel=i)}/**
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
 */function jo(e){return typeof e=="object"&&!!e&&Nn in e}/**
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
 */Rn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Rn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function Rn(e,t){const n=[];for(let r=0;r<e.length;r++)n.push(e.charAt(r)),r<t.length&&n.push(t.charAt(r));return n.join("")}/**
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
 */function xo(e){if(!e||!e.options)throw Qe("App Configuration Object");if(!e.name)throw Qe("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=e;for(const r of t)if(!n[r])throw Qe(r);return{appName:e.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Qe(e){return v.create("missing-app-config-values",{valueName:e})}/**
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
 */class Ho{constructor(t,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=xo(t);this.firebaseDependencies={app:t,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function zo(e){try{e.swRegistration=await navigator.serviceWorker.register(po,{scope:go}),e.swRegistration.update().catch(()=>{})}catch(t){throw v.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}/**
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
 */async function Vo(e,t){if(!t&&!e.swRegistration&&await zo(e),!(!t&&e.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw v.create("invalid-sw-registration");e.swRegistration=t}}/**
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
 */async function Uo(e,t){t?e.vapidKey=t:e.vapidKey||(e.vapidKey=Bn)}/**
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
 */async function Ln(e,t){if(!navigator)throw v.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw v.create("permission-blocked");return await Uo(e,t==null?void 0:t.vapidKey),await Vo(e,t==null?void 0:t.serviceWorkerRegistration),Bo(e)}/**
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
 */async function Ko(e,t,n){const r=Wo(t);(await e.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[Nn],message_name:n[bo],message_time:n[wo],message_device_time:Math.floor(Date.now()/1e3)})}function Wo(e){switch(e){case ge.NOTIFICATION_CLICKED:return"notification_open";case ge.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function qo(e,t){const n=t.data;if(!n.isFirebaseMessaging)return;e.onMessageHandler&&n.messageType===ge.PUSH_RECEIVED&&(typeof e.onMessageHandler=="function"?e.onMessageHandler(Gt(n)):e.onMessageHandler.next(Gt(n)));const r=n.data;jo(r)&&r[yo]==="1"&&await Ko(e,n.messageType,r)}const Jt="@firebase/messaging",Yt="0.12.5";/**
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
 */const Go=e=>{const t=new Ho(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),e.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>qo(t,n)),t},Jo=e=>{const t=e.getProvider("messaging").getImmediate();return{getToken:r=>Ln(t,r)}};function Yo(){ne(new W("messaging",Go,"PUBLIC")),ne(new W("messaging-internal",Jo,"PRIVATE")),U(Jt,Yt),U(Jt,Yt,"esm2017")}/**
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
 */async function Xo(){try{await sn()}catch{return!1}return typeof window<"u"&&rn()&&ar()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Zo(e,t){if(!navigator)throw v.create("only-available-in-window");return e.onMessageHandler=t,()=>{e.onMessageHandler=null}}/**
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
 */function Qo(e=cn()){return Xo().then(t=>{if(!t)throw v.create("unsupported-browser")},t=>{throw v.create("indexed-db-unsupported")}),pt(dt(e),"messaging").getImmediate()}async function ea(e,t){return e=dt(e),Ln(e,t)}function ia(e,t){return e=dt(e),Zo(e,t)}Yo();function Xt(e){let t,n;return{c(){t=p("p"),n=et(e[3]),this.h()},l(r){t=g(r,"P",{class:!0});var s=M(t);n=tt(s,e[3]),s.forEach(T),this.h()},h(){u(t,"class","error-message svelte-yl5zze")},m(r,s){Zt(r,t,s),f(t,n)},p(r,s){s&8&&xn(n,r[3])},d(r){r&&T(t)}}}function ta(e){let t,n,r,s,o,a="Echo Dental Training Unit",c,i,l,d="LOG IN",A,_,$="Your email",q,j,b,B,de,ae,C,Te,G,Dt="Your password",Ae,P,N,J,Tt,Ce,k,ke,D,me,Oe,Be,x,Y,H,Ne,Me,R,At="Lost password?",$e,X,Pe,Z,Re,z,Ct="Contacting us",fe,Le,kt,w=e[3]&&Xt(e);return X=new Jn({props:{clickHandler:e[5],useTJ:!0,text:"Log in",width:"100%"}}),{c(){t=p("div"),n=p("img"),s=E(),o=p("h1"),o.textContent=a,c=E(),i=p("div"),l=p("h2"),l.textContent=d,A=E(),_=p("label"),_.textContent=$,q=E(),j=p("div"),b=p("div"),B=p("img"),ae=E(),C=p("input"),Te=E(),G=p("label"),G.textContent=Dt,Ae=E(),P=p("div"),N=p("div"),J=p("img"),Ce=E(),k=p("input"),ke=E(),D=p("img"),Oe=E(),w&&w.c(),Be=E(),x=p("div"),Y=p("label"),H=p("input"),Ne=et(`\r
          Remember me`),Me=E(),R=p("a"),R.textContent=At,$e=E(),Vn(X.$$.fragment),Pe=E(),Z=p("p"),Re=et("Not registered? Create an account by "),z=p("u"),z.textContent=Ct,this.h()},l(m){t=g(m,"DIV",{class:!0});var I=M(t);n=g(I,"IMG",{src:!0,alt:!0,width:!0,class:!0,style:!0}),s=S(I),o=g(I,"H1",{class:!0,style:!0,"data-svelte-h":!0}),ce(o)!=="svelte-wstfby"&&(o.textContent=a),c=S(I),i=g(I,"DIV",{class:!0,style:!0});var y=M(i);l=g(y,"H2",{class:!0,style:!0,"data-svelte-h":!0}),ce(l)!=="svelte-17ss5ox"&&(l.textContent=d),A=S(y),_=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),ce(_)!=="svelte-9v1dp9"&&(_.textContent=$),q=S(y),j=g(y,"DIV",{class:!0});var Ot=M(j);b=g(Ot,"DIV",{class:!0});var be=M(b);B=g(be,"IMG",{src:!0,alt:!0,class:!0}),ae=S(be),C=g(be,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),be.forEach(T),Ot.forEach(T),Te=S(y),G=g(y,"LABEL",{class:!0,"data-svelte-h":!0}),ce(G)!=="svelte-15gn3f4"&&(G.textContent=Dt),Ae=S(y),P=g(y,"DIV",{class:!0});var we=M(P);N=g(we,"DIV",{class:!0});var ie=M(N);J=g(ie,"IMG",{src:!0,alt:!0,class:!0}),Ce=S(ie),k=g(ie,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),ke=S(ie),D=g(ie,"IMG",{src:!0,style:!0,class:!0}),ie.forEach(T),Oe=S(we),w&&w.l(we),we.forEach(T),Be=S(y),x=g(y,"DIV",{class:!0});var ye=M(x);Y=g(ye,"LABEL",{class:!0});var Fe=M(Y);H=g(Fe,"INPUT",{type:!0,class:!0}),Ne=tt(Fe,`\r
          Remember me`),Fe.forEach(T),Me=S(ye),R=g(ye,"A",{href:!0,class:!0,"data-svelte-h":!0}),ce(R)!=="svelte-1y00aro"&&(R.textContent=At),ye.forEach(T),$e=S(y),Un(X.$$.fragment,y),Pe=S(y),Z=g(y,"P",{class:!0});var je=M(Z);Re=tt(je,"Not registered? Create an account by "),z=g(je,"U",{style:!0,"data-svelte-h":!0}),ce(z)!=="svelte-1wiuusi"&&(z.textContent=Ct),je.forEach(T),y.forEach(T),I.forEach(T),this.h()},h(){he(n.src,r="/Logo.png")||u(n,"src",r),u(n,"alt","Logo"),u(n,"width","90"),u(n,"class","logo svelte-yl5zze"),O(n,"bottom","10px"),O(n,"position","relative"),u(o,"class","main-title svelte-yl5zze"),O(o,"bottom","15px"),O(o,"position","relative"),u(l,"class","login-title svelte-yl5zze"),O(l,"margin","0 0 30px"),u(_,"class","svelte-yl5zze"),he(B.src,de="/at.png")||u(B,"src",de),u(B,"alt","name icon"),u(B,"class","svelte-yl5zze"),u(C,"class","inputField svelte-yl5zze"),u(C,"type","email"),u(C,"id","email"),u(C,"placeholder","Enter your email"),u(b,"class","inputFieldCon svelte-yl5zze"),u(j,"class","input-container svelte-yl5zze"),u(G,"class","svelte-yl5zze"),he(J.src,Tt="/password.png")||u(J,"src",Tt),u(J,"alt","name icon"),u(J,"class","svelte-yl5zze"),u(k,"class","inputField svelte-yl5zze"),u(k,"type","password"),u(k,"id","password"),u(k,"placeholder","Enter your password"),he(D.src,me=e[4]?"/show.png":"/hide.png")||u(D,"src",me),O(D,"width","20px"),O(D,"height","20px"),O(D,"position","absolute"),O(D,"left","79%"),u(D,"class","svelte-yl5zze"),u(N,"class","inputFieldCon svelte-yl5zze"),u(P,"class","input-container svelte-yl5zze"),u(H,"type","checkbox"),u(H,"class","svelte-yl5zze"),u(Y,"class","svelte-yl5zze"),u(R,"href","#"),u(R,"class","lost-password svelte-yl5zze"),u(x,"class","remember-lost-row svelte-yl5zze"),O(z,"cursor","pointer"),u(Z,"class","not-registered svelte-yl5zze"),u(i,"class","neumorphic-box svelte-yl5zze"),O(i,"margin","0 0 30px"),u(t,"class","login-container svelte-yl5zze")},m(m,I){Zt(m,t,I),f(t,n),f(t,s),f(t,o),f(t,c),f(t,i),f(i,l),f(i,A),f(i,_),f(i,q),f(i,j),f(j,b),f(b,B),f(b,ae),f(b,C),ve(C,e[0]),f(i,Te),f(i,G),f(i,Ae),f(i,P),f(P,N),f(N,J),f(N,Ce),f(N,k),ve(k,e[1]),f(N,ke),f(N,D),f(P,Oe),w&&w.m(P,null),f(i,Be),f(i,x),f(x,Y),f(Y,H),H.checked=e[2],f(Y,Ne),f(x,Me),f(x,R),f(i,$e),Kn(X,i,null),f(i,Pe),f(i,Z),f(Z,Re),f(Z,z),fe=!0,Le||(kt=[le(C,"input",e[7]),le(k,"input",e[8]),le(D,"click",e[9]),le(H,"change",e[10]),le(R,"click",e[11]),le(z,"click",e[12])],Le=!0)},p(m,[I]){I&1&&C.value!==m[0]&&ve(C,m[0]),I&2&&k.value!==m[1]&&ve(k,m[1]),(!fe||I&16&&!he(D.src,me=m[4]?"/show.png":"/hide.png"))&&u(D,"src",me),m[3]?w?w.p(m,I):(w=Xt(m),w.c(),w.m(P,null)):w&&(w.d(1),w=null),I&4&&(H.checked=m[2])},i(m){fe||(Wn(X.$$.fragment,m),fe=!0)},o(m){qn(X.$$.fragment,m),fe=!1},d(m){m&&T(t),w&&w.d(),Gn(X),Le=!1,jn(kt)}}}function na(e,t,n){let r="",s="",o=!1,a="",c=!1,{func:i}=t;function l(){r.length>7&&s.length>3?xe("n/si/",{email:r,p:s}).then(b=>{const B=cn(),de=Qo(B);console.log(B),console.log(de),ea(de,{vapidKey:"BEoyvDKJRZk0w9MFzs_VZ6SWfUmjD7E-vNDzsqh_VQFyxPukZjYE2UPcC9mHcs4KaGWDp5zu1Gl_iSrJjL4Hk9U"}).then(ae=>{ae&&xe("u/un",{token:ae}).then(()=>{localStorage.setItem("li",!0),localStorage.setItem("t",b.t),localStorage.setItem("aslklx20002k,777",b.t==0?5:0),b.t==0&&(location.href="/admin")})})}).catch(b=>{n(3,a="Incorrect email or password")}):n(3,a="Incorrect email or password")}function d(){r=this.value,n(0,r)}function A(){s=this.value,n(1,s)}const _=()=>{document.getElementById("password").type=c?"password":"text",n(4,c=!c)};function $(){o=this.checked,n(2,o)}const q=()=>{console.log(r),r&&r.includes("@echo")&&xe("u/fop",{email:r})},j=()=>{location.href="/contact-us"};return e.$$set=b=>{"func"in b&&n(6,i=b.func)},[r,s,o,a,c,l,i,d,A,_,$,q,j]}class ca extends Hn{constructor(t){super(),zn(this,t,na,ta,Fn,{func:6})}}export{ca as L,ea as a,Qo as g,os as i,ia as o};
