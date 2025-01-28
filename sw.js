/**
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
 *//**
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
 */const Xe=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},xt=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],a=t[n++],o=t[n++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|o&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],a=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},Qe={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],a=s+1<t.length,o=a?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,d=(i&3)<<4|o>>4;let E=(o&15)<<2|l>>6,$=l&63;c||($=64,a||(E=64)),r.push(n[u],n[d],n[E],n[$])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Xe(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):xt(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],o=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||o==null||l==null||d==null)throw new Ut;const E=i<<2|o>>4;if(r.push(E),l!==64){const $=o<<4&240|l>>2;if(r.push($),d!==64){const $t=l<<6&192|d;r.push($t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Ut extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jt=function(t){const e=Xe(t);return Qe.encodeByteArray(e,!0)},Ze=function(t){return jt(t).replace(/\./g,"")},Ft=function(t){try{return Qe.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Kt(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ht=()=>Kt().__FIREBASE_DEFAULTS__,Vt=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Wt=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ft(t[1]);return e&&JSON.parse(e)},qt=()=>{try{return Ht()||Vt()||Wt()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},et=()=>{var t;return(t=qt())===null||t===void 0?void 0:t.config};/**
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
 */let zt=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function tt(){try{return typeof indexedDB=="object"}catch{return!1}}function nt(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const Gt="FirebaseError";class M extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Gt,Object.setPrototypeOf(this,M.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,V.prototype.create)}}class V{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Jt(i,r):"Error",o=`${this.serviceName}: ${a} (${s}).`;return new M(s,o,r)}}function Jt(t,e){return t.replace(Yt,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Yt=/\{\$([^}]+)}/g;function le(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],a=e[s];if(Be(i)&&Be(a)){if(!le(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Be(t){return t!==null&&typeof t=="object"}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class S{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const C="[DEFAULT]";/**
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
 */class Xt{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new zt;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Zt(e))try{this.getOrInitializeService({instanceIdentifier:C})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=C){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=C){return this.instances.has(e)}getOptions(e=C){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(i);r===o&&a.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Qt(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=C){return this.component?this.component.multipleInstances?e:C:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Qt(t){return t===C?void 0:t}function Zt(t){return t.instantiationMode==="EAGER"}/**
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
 */class en{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Xt(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var h;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(h||(h={}));const tn={debug:h.DEBUG,verbose:h.VERBOSE,info:h.INFO,warn:h.WARN,error:h.ERROR,silent:h.SILENT},nn=h.INFO,rn={[h.DEBUG]:"log",[h.VERBOSE]:"log",[h.INFO]:"info",[h.WARN]:"warn",[h.ERROR]:"error"},sn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=rn[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class an{constructor(e){this.name=e,this._logLevel=nn,this._logHandler=sn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in h))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,h.DEBUG,...e),this._logHandler(this,h.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,h.VERBOSE,...e),this._logHandler(this,h.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,h.INFO,...e),this._logHandler(this,h.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,h.WARN,...e),this._logHandler(this,h.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,h.ERROR,...e),this._logHandler(this,h.ERROR,...e)}}const on=(t,e)=>e.some(n=>t instanceof n);let Le,Pe;function cn(){return Le||(Le=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ln(){return Pe||(Pe=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const st=new WeakMap,ue=new WeakMap,it=new WeakMap,G=new WeakMap,ye=new WeakMap;function un(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(b(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&st.set(n,t)}).catch(()=>{}),ye.set(e,t),e}function hn(t){if(ue.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ue.set(t,e)}let he={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ue.get(t);if(e==="objectStoreNames")return t.objectStoreNames||it.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function dn(t){he=t(he)}function fn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(J(this),e,...n);return it.set(r,e.sort?e.sort():[e]),b(r)}:ln().includes(t)?function(...e){return t.apply(J(this),e),b(st.get(this))}:function(...e){return b(t.apply(J(this),e))}}function pn(t){return typeof t=="function"?fn(t):(t instanceof IDBTransaction&&hn(t),on(t,cn())?new Proxy(t,he):t)}function b(t){if(t instanceof IDBRequest)return un(t);if(G.has(t))return G.get(t);const e=pn(t);return e!==t&&(G.set(t,e),ye.set(e,t)),e}const J=t=>ye.get(t);function _e(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=b(a);return r&&a.addEventListener("upgradeneeded",c=>{r(b(a.result),c.oldVersion,c.newVersion,b(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}function Y(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),b(n).then(()=>{})}const gn=["get","getKey","getAll","getAllKeys","count"],mn=["put","add","delete","clear"],X=new Map;function $e(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(X.get(e))return X.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=mn.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gn.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),s&&c.done]))[0]};return X.set(e,i),i}dn(t=>({...t,get:(e,n,r)=>$e(e,n)||t.get(e,n,r),has:(e,n)=>!!$e(e,n)||t.has(e,n)}));/**
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
 */class bn{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(wn(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function wn(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const de="@firebase/app",xe="0.9.24";/**
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
 */const T=new an("@firebase/app"),yn="@firebase/app-compat",_n="@firebase/analytics-compat",In="@firebase/analytics",En="@firebase/app-check-compat",Cn="@firebase/app-check",vn="@firebase/auth",Sn="@firebase/auth-compat",Tn="@firebase/database",Dn="@firebase/database-compat",An="@firebase/functions",Rn="@firebase/functions-compat",kn="@firebase/installations",On="@firebase/installations-compat",Nn="@firebase/messaging",Mn="@firebase/messaging-compat",Bn="@firebase/performance",Ln="@firebase/performance-compat",Pn="@firebase/remote-config",$n="@firebase/remote-config-compat",xn="@firebase/storage",Un="@firebase/storage-compat",jn="@firebase/firestore",Fn="@firebase/firestore-compat",Kn="firebase";/**
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
 */const fe="[DEFAULT]",Hn={[de]:"fire-core",[yn]:"fire-core-compat",[In]:"fire-analytics",[_n]:"fire-analytics-compat",[Cn]:"fire-app-check",[En]:"fire-app-check-compat",[vn]:"fire-auth",[Sn]:"fire-auth-compat",[Tn]:"fire-rtdb",[Dn]:"fire-rtdb-compat",[An]:"fire-fn",[Rn]:"fire-fn-compat",[kn]:"fire-iid",[On]:"fire-iid-compat",[Nn]:"fire-fcm",[Mn]:"fire-fcm-compat",[Bn]:"fire-perf",[Ln]:"fire-perf-compat",[Pn]:"fire-rc",[$n]:"fire-rc-compat",[xn]:"fire-gcs",[Un]:"fire-gcs-compat",[jn]:"fire-fst",[Fn]:"fire-fst-compat","fire-js":"fire-js",[Kn]:"fire-js-all"};/**
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
 */const U=new Map,pe=new Map;function Vn(t,e){try{t.container.addComponent(e)}catch(n){T.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function N(t){const e=t.name;if(pe.has(e))return T.debug(`There were multiple attempts to register component ${e}.`),!1;pe.set(e,t);for(const n of U.values())Vn(n,t);return!0}function Ie(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Wn={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},y=new V("app","Firebase",Wn);/**
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
 */class qn{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new S("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw y.create("app-deleted",{appName:this._name})}}function at(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:fe,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw y.create("bad-app-name",{appName:String(s)});if(n||(n=et()),!n)throw y.create("no-options");const i=U.get(s);if(i){if(le(n,i.options)&&le(r,i.config))return i;throw y.create("duplicate-app",{appName:s})}const a=new en(s);for(const c of pe.values())a.addComponent(c);const o=new qn(n,r,a);return U.set(s,o),o}function zn(t=fe){const e=U.get(t);if(!e&&t===fe&&et())return at();if(!e)throw y.create("no-app",{appName:t});return e}function k(t,e,n){var r;let s=(r=Hn[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),T.warn(o.join(" "));return}N(new S(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Gn="firebase-heartbeat-database",Jn=1,P="firebase-heartbeat-store";let Q=null;function ot(){return Q||(Q=_e(Gn,Jn,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(P)}}}).catch(t=>{throw y.create("idb-open",{originalErrorMessage:t.message})})),Q}async function Yn(t){try{return await(await ot()).transaction(P).objectStore(P).get(ct(t))}catch(e){if(e instanceof M)T.warn(e.message);else{const n=y.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});T.warn(n.message)}}}async function Ue(t,e){try{const r=(await ot()).transaction(P,"readwrite");await r.objectStore(P).put(e,ct(t)),await r.done}catch(n){if(n instanceof M)T.warn(n.message);else{const r=y.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});T.warn(r.message)}}}function ct(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Xn=1024,Qn=30*24*60*60*1e3;class Zn{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new tr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=je();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=Qn}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=je(),{heartbeatsToSend:r,unsentEntries:s}=er(this._heartbeatsCache.heartbeats),i=Ze(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function je(){return new Date().toISOString().substring(0,10)}function er(t,e=Xn){const n=[];let r=t.slice();for(const s of t){const i=n.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Fe(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Fe(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class tr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return tt()?nt().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Yn(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ue(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ue(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Fe(t){return Ze(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function nr(t){N(new S("platform-logger",e=>new bn(e),"PRIVATE")),N(new S("heartbeat",e=>new Zn(e),"PRIVATE")),k(de,xe,t),k(de,xe,"esm2017"),k("fire-js","")}nr("");const rr=(t,e)=>e.some(n=>t instanceof n);let Ke,He;function sr(){return Ke||(Ke=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ir(){return He||(He=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const lt=new WeakMap,ge=new WeakMap,ut=new WeakMap,Z=new WeakMap,Ee=new WeakMap;function ar(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",a)},i=()=>{n(I(t.result)),s()},a=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&lt.set(n,t)}).catch(()=>{}),Ee.set(e,t),e}function or(t){if(ge.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",a),t.removeEventListener("abort",a)},i=()=>{n(),s()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",a),t.addEventListener("abort",a)});ge.set(t,e)}let me={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ge.get(t);if(e==="objectStoreNames")return t.objectStoreNames||ut.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cr(t){me=t(me)}function lr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ee(this),e,...n);return ut.set(r,e.sort?e.sort():[e]),I(r)}:ir().includes(t)?function(...e){return t.apply(ee(this),e),I(lt.get(this))}:function(...e){return I(t.apply(ee(this),e))}}function ur(t){return typeof t=="function"?lr(t):(t instanceof IDBTransaction&&or(t),rr(t,sr())?new Proxy(t,me):t)}function I(t){if(t instanceof IDBRequest)return ar(t);if(Z.has(t))return Z.get(t);const e=ur(t);return e!==t&&(Z.set(t,e),Ee.set(e,t)),e}const ee=t=>Ee.get(t);function hr(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(t,e),o=I(a);return r&&a.addEventListener("upgradeneeded",c=>{r(I(a.result),c.oldVersion,c.newVersion,I(a.transaction))}),n&&a.addEventListener("blocked",()=>n()),o.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),o}const dr=["get","getKey","getAll","getAllKeys","count"],fr=["put","add","delete","clear"],te=new Map;function Ve(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(te.get(e))return te.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=fr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||dr.includes(n)))return;const i=async function(a,...o){const c=this.transaction(a,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),s&&c.done]))[0]};return te.set(e,i),i}cr(t=>({...t,get:(e,n,r)=>Ve(e,n)||t.get(e,n,r),has:(e,n)=>!!Ve(e,n)||t.has(e,n)}));const ht="@firebase/installations",Ce="0.6.4";/**
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
 */const dt=1e4,ft=`w:${Ce}`,pt="FIS_v2",pr="https://firebaseinstallations.googleapis.com/v1",gr=60*60*1e3,mr="installations",br="Installations";/**
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
 */const wr={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},D=new V(mr,br,wr);function gt(t){return t instanceof M&&t.code.includes("request-failed")}/**
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
 */function mt({projectId:t}){return`${pr}/projects/${t}/installations`}function bt(t){return{token:t.token,requestStatus:2,expiresIn:_r(t.expiresIn),creationTime:Date.now()}}async function wt(t,e){const r=(await e.json()).error;return D.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function yt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function yr(t,{refreshToken:e}){const n=yt(t);return n.append("Authorization",Ir(e)),n}async function _t(t){const e=await t();return e.status>=500&&e.status<600?t():e}function _r(t){return Number(t.replace("s","000"))}function Ir(t){return`${pt} ${t}`}/**
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
 */async function Er({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=mt(t),s=yt(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={fid:n,authVersion:pt,appId:t.appId,sdkVersion:ft},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await _t(()=>fetch(r,o));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:bt(l.authToken)}}else throw await wt("Create Installation",c)}/**
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
 */function It(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Cr(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const vr=/^[cdef][\w-]{21}$/,be="";function Sr(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Tr(t);return vr.test(n)?n:be}catch{return be}}function Tr(t){return Cr(t).substr(0,22)}/**
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
 */function W(t){return`${t.appName}!${t.appId}`}/**
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
 */const Et=new Map;function Ct(t,e){const n=W(t);vt(n,e),Dr(n,e)}function vt(t,e){const n=Et.get(t);if(n)for(const r of n)r(e)}function Dr(t,e){const n=Ar();n&&n.postMessage({key:t,fid:e}),Rr()}let v=null;function Ar(){return!v&&"BroadcastChannel"in self&&(v=new BroadcastChannel("[Firebase] FID Change"),v.onmessage=t=>{vt(t.data.key,t.data.fid)}),v}function Rr(){Et.size===0&&v&&(v.close(),v=null)}/**
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
 */const kr="firebase-installations-database",Or=1,A="firebase-installations-store";let ne=null;function ve(){return ne||(ne=hr(kr,Or,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(A)}}})),ne}async function j(t,e){const n=W(t),s=(await ve()).transaction(A,"readwrite"),i=s.objectStore(A),a=await i.get(n);return await i.put(e,n),await s.done,(!a||a.fid!==e.fid)&&Ct(t,e.fid),e}async function St(t){const e=W(t),r=(await ve()).transaction(A,"readwrite");await r.objectStore(A).delete(e),await r.done}async function q(t,e){const n=W(t),s=(await ve()).transaction(A,"readwrite"),i=s.objectStore(A),a=await i.get(n),o=e(a);return o===void 0?await i.delete(n):await i.put(o,n),await s.done,o&&(!a||a.fid!==o.fid)&&Ct(t,o.fid),o}/**
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
 */async function Se(t){let e;const n=await q(t.appConfig,r=>{const s=Nr(r),i=Mr(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===be?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Nr(t){const e=t||{fid:Sr(),registrationStatus:0};return Tt(e)}function Mr(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(D.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Br(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Lr(t)}:{installationEntry:e}}async function Br(t,e){try{const n=await Er(t,e);return j(t.appConfig,n)}catch(n){throw gt(n)&&n.customData.serverCode===409?await St(t.appConfig):await j(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function Lr(t){let e=await We(t.appConfig);for(;e.registrationStatus===1;)await It(100),e=await We(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Se(t);return r||n}return e}function We(t){return q(t,e=>{if(!e)throw D.create("installation-not-found");return Tt(e)})}function Tt(t){return Pr(t)?{fid:t.fid,registrationStatus:0}:t}function Pr(t){return t.registrationStatus===1&&t.registrationTime+dt<Date.now()}/**
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
 */async function $r({appConfig:t,heartbeatServiceProvider:e},n){const r=xr(t,n),s=yr(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const a={installation:{sdkVersion:ft,appId:t.appId}},o={method:"POST",headers:s,body:JSON.stringify(a)},c=await _t(()=>fetch(r,o));if(c.ok){const l=await c.json();return bt(l)}else throw await wt("Generate Auth Token",c)}function xr(t,{fid:e}){return`${mt(t)}/${e}/authTokens:generate`}/**
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
 */async function Te(t,e=!1){let n;const r=await q(t.appConfig,i=>{if(!Dt(i))throw D.create("not-registered");const a=i.authToken;if(!e&&Fr(a))return i;if(a.requestStatus===1)return n=Ur(t,e),i;{if(!navigator.onLine)throw D.create("app-offline");const o=Hr(i);return n=jr(t,o),o}});return n?await n:r.authToken}async function Ur(t,e){let n=await qe(t.appConfig);for(;n.authToken.requestStatus===1;)await It(100),n=await qe(t.appConfig);const r=n.authToken;return r.requestStatus===0?Te(t,e):r}function qe(t){return q(t,e=>{if(!Dt(e))throw D.create("not-registered");const n=e.authToken;return Vr(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function jr(t,e){try{const n=await $r(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await j(t.appConfig,r),n}catch(n){if(gt(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await St(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await j(t.appConfig,r)}throw n}}function Dt(t){return t!==void 0&&t.registrationStatus===2}function Fr(t){return t.requestStatus===2&&!Kr(t)}function Kr(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+gr}function Hr(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Vr(t){return t.requestStatus===1&&t.requestTime+dt<Date.now()}/**
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
 */async function Wr(t){const e=t,{installationEntry:n,registrationPromise:r}=await Se(e);return r?r.catch(console.error):Te(e).catch(console.error),n.fid}/**
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
 */async function qr(t,e=!1){const n=t;return await zr(n),(await Te(n,e)).token}async function zr(t){const{registrationPromise:e}=await Se(t);e&&await e}/**
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
 */function Gr(t){if(!t||!t.options)throw re("App Configuration");if(!t.name)throw re("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw re(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function re(t){return D.create("missing-app-config-values",{valueName:t})}/**
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
 */const At="installations",Jr="installations-internal",Yr=t=>{const e=t.getProvider("app").getImmediate(),n=Gr(e),r=Ie(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Xr=t=>{const e=t.getProvider("app").getImmediate(),n=Ie(e,At).getImmediate();return{getId:()=>Wr(n),getToken:s=>qr(n,s)}};function Qr(){N(new S(At,Yr,"PUBLIC")),N(new S(Jr,Xr,"PRIVATE"))}Qr();k(ht,Ce);k(ht,Ce,"esm2017");/**
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
 */const Rt="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",Zr="https://fcmregistrations.googleapis.com/v1",kt="FCM_MSG",es="google.c.a.c_id",ts=3,ns=1;var F;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(F||(F={}));/**
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
 */var K;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(K||(K={}));/**
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
 */function g(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function rs(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),s=new Uint8Array(r.length);for(let i=0;i<r.length;++i)s[i]=r.charCodeAt(i);return s}/**
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
 */const se="fcm_token_details_db",ss=5,ze="fcm_token_object_Store";async function is(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(se))return null;let e=null;return(await _e(se,ss,{upgrade:async(r,s,i,a)=>{var o;if(s<2||!r.objectStoreNames.contains(ze))return;const c=a.objectStore(ze),l=await c.index("fcmSenderId").get(t);if(await c.clear(),!!l){if(s===2){const u=l;if(!u.auth||!u.p256dh||!u.endpoint)return;e={token:u.fcmToken,createTime:(o=u.createTime)!==null&&o!==void 0?o:Date.now(),subscriptionOptions:{auth:u.auth,p256dh:u.p256dh,endpoint:u.endpoint,swScope:u.swScope,vapidKey:typeof u.vapidKey=="string"?u.vapidKey:g(u.vapidKey)}}}else if(s===3){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:g(u.auth),p256dh:g(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:g(u.vapidKey)}}}else if(s===4){const u=l;e={token:u.fcmToken,createTime:u.createTime,subscriptionOptions:{auth:g(u.auth),p256dh:g(u.p256dh),endpoint:u.endpoint,swScope:u.swScope,vapidKey:g(u.vapidKey)}}}}}})).close(),await Y(se),await Y("fcm_vapid_details_db"),await Y("undefined"),as(e)?e:null}function as(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const os="firebase-messaging-database",cs=1,R="firebase-messaging-store";let ie=null;function De(){return ie||(ie=_e(os,cs,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(R)}}})),ie}async function Ae(t){const e=ke(t),r=await(await De()).transaction(R).objectStore(R).get(e);if(r)return r;{const s=await is(t.appConfig.senderId);if(s)return await Re(t,s),s}}async function Re(t,e){const n=ke(t),s=(await De()).transaction(R,"readwrite");return await s.objectStore(R).put(e,n),await s.done,e}async function ls(t){const e=ke(t),r=(await De()).transaction(R,"readwrite");await r.objectStore(R).delete(e),await r.done}function ke({appConfig:t}){return t.appId}/**
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
 */const us={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},p=new V("messaging","Messaging",us);/**
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
 */async function hs(t,e){const n=await Ne(t),r=Nt(e),s={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Oe(t.appConfig),s)).json()}catch(a){throw p.create("token-subscribe-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw p.create("token-subscribe-failed",{errorInfo:a})}if(!i.token)throw p.create("token-subscribe-no-token");return i.token}async function ds(t,e){const n=await Ne(t),r=Nt(e.subscriptionOptions),s={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Oe(t.appConfig)}/${e.token}`,s)).json()}catch(a){throw p.create("token-update-failed",{errorInfo:a==null?void 0:a.toString()})}if(i.error){const a=i.error.message;throw p.create("token-update-failed",{errorInfo:a})}if(!i.token)throw p.create("token-update-no-token");return i.token}async function Ot(t,e){const r={method:"DELETE",headers:await Ne(t)};try{const i=await(await fetch(`${Oe(t.appConfig)}/${e}`,r)).json();if(i.error){const a=i.error.message;throw p.create("token-unsubscribe-failed",{errorInfo:a})}}catch(s){throw p.create("token-unsubscribe-failed",{errorInfo:s==null?void 0:s.toString()})}}function Oe({projectId:t}){return`${Zr}/projects/${t}/registrations`}async function Ne({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function Nt({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const s={web:{endpoint:n,auth:e,p256dh:t}};return r!==Rt&&(s.web.applicationPubKey=r),s}/**
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
 */const fs=7*24*60*60*1e3;async function ps(t){const e=await ms(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:g(e.getKey("auth")),p256dh:g(e.getKey("p256dh"))},r=await Ae(t.firebaseDependencies);if(r){if(bs(r.subscriptionOptions,n))return Date.now()>=r.createTime+fs?gs(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await Ot(t.firebaseDependencies,r.token)}catch(s){console.warn(s)}return Ge(t.firebaseDependencies,n)}else return Ge(t.firebaseDependencies,n)}async function we(t){const e=await Ae(t.firebaseDependencies);e&&(await Ot(t.firebaseDependencies,e.token),await ls(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function gs(t,e){try{const n=await ds(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Re(t.firebaseDependencies,r),n}catch(n){throw await we(t),n}}async function Ge(t,e){const r={token:await hs(t,e),createTime:Date.now(),subscriptionOptions:e};return await Re(t,r),r.token}async function ms(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:rs(e)})}function bs(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,s=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&s&&i}/**
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
 */function ws(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return ys(e,t),_s(e,t),Is(e,t),e}function ys(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const s=e.notification.image;s&&(t.notification.image=s);const i=e.notification.icon;i&&(t.notification.icon=i)}function _s(t,e){e.data&&(t.data=e.data)}function Is(t,e){var n,r,s,i,a;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const o=(s=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&s!==void 0?s:(i=e.notification)===null||i===void 0?void 0:i.click_action;o&&(t.fcmOptions.link=o);const c=(a=e.fcmOptions)===null||a===void 0?void 0:a.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function Es(t){return typeof t=="object"&&!!t&&es in t}/**
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
 */function Cs(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */Mt("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");Mt("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function vs(t,e){const n=Ss(e,await t.firebaseDependencies.installations.getId());Ts(t,n,e.productId)}function Ss(t,e){var n,r;const s={};return t.from&&(s.project_number=t.from),t.fcmMessageId&&(s.message_id=t.fcmMessageId),s.instance_id=e,t.notification?s.message_type=F.DISPLAY_NOTIFICATION.toString():s.message_type=F.DATA_MESSAGE.toString(),s.sdk_platform=ts.toString(),s.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(s.collapse_key=t.collapse_key),s.event=ns.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(s.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),s}function Ts(t,e,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify(e),n&&(r.compliance_data=Ds(n)),t.logEvents.push(r)}function Ds(t){return{privacy_context:{prequest:{origin_associated_product_id:t}}}}function Mt(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */async function As(t,e){var n,r;const{newSubscription:s}=t;if(!s){await we(e);return}const i=await Ae(e.firebaseDependencies);await we(e),e.vapidKey=(r=(n=i==null?void 0:i.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:Rt,await ps(e)}async function Rs(t,e){const n=Ns(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await vs(e,n);const r=await Bt();if(Bs(r))return Ls(r,n);if(n.notification&&await Ps(Os(n)),!!e&&e.onBackgroundMessageHandler){const s=ws(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(s):e.onBackgroundMessageHandler.next(s)}}async function ks(t){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[kt];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const s=$s(r);if(!s)return;const i=new URL(s,self.location.href),a=new URL(self.location.origin);if(i.host!==a.host)return;let o=await Ms(i);if(o?o=await o.focus():(o=await self.clients.openWindow(s),await Cs(3e3)),!!o)return r.messageType=K.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,o.postMessage(r)}function Os(t){const e=Object.assign({},t.notification);return e.data={[kt]:t},e}function Ns({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function Ms(t){const e=await Bt();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function Bs(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function Ls(t,e){e.isFirebaseMessaging=!0,e.messageType=K.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function Bt(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function Ps(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function $s(t){var e,n,r;const s=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return s||(Es(t.data)?self.location.origin:null)}/**
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
 */function xs(t){if(!t||!t.options)throw ae("App Configuration Object");if(!t.name)throw ae("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw ae(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ae(t){return p.create("missing-app-config-values",{valueName:t})}/**
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
 */class Us{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const s=xs(e);this.firebaseDependencies={app:e,appConfig:s,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */const js=t=>{const e=new Us(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(Rs(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(As(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(ks(n))}),e};function Fs(){N(new S("messaging-sw",js,"PUBLIC"))}/**
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
 */async function Ks(){return tt()&&await nt()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Hs(t,e){if(self.document!==void 0)throw p.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}/**
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
 */function Vs(t=zn()){return Ks().then(e=>{if(!e)throw p.create("unsupported-browser")},e=>{throw p.create("indexed-db-unsupported")}),Ie(rt(t),"messaging-sw").getImmediate()}function Ws(t,e){return t=rt(t),Hs(t,e)}/**
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
 */Fs();try{self["workbox:core:7.2.0"]&&_()}catch{}const qs=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},zs=qs;class f extends Error{constructor(e,n){const r=zs(e,n);super(r),this.name=e,this.details=n}}const Gs=new Set,m={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},oe=t=>[m.prefix,t,m.suffix].filter(e=>e&&e.length>0).join("-"),Js=t=>{for(const e of Object.keys(m))t(e)},z={updateDetails:t=>{Js(e=>{typeof t[e]=="string"&&(m[e]=t[e])})},getGoogleAnalyticsName:t=>t||oe(m.googleAnalytics),getPrecacheName:t=>t||oe(m.precache),getPrefix:()=>m.prefix,getRuntimeName:t=>t||oe(m.runtime),getSuffix:()=>m.suffix};function Je(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function Ys(t,e,n,r){const s=Je(e.url,n);if(e.url===s)return t.match(e,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),a=await t.keys(e,i);for(const o of a){const c=Je(o.url,n);if(s===c)return t.match(o,r)}}let B;function Xs(){if(B===void 0){const t=new Response("");if("body"in t)try{new Response(t.body),B=!0}catch{B=!1}B=!1}return B}class Qs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}async function Zs(){for(const t of Gs)await t()}const ei=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");function ti(t){return new Promise(e=>setTimeout(e,t))}function Ye(t,e){const n=e();return t.waitUntil(n),n}async function ni(t,e){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new f("cross-origin-copy-response",{origin:n});const r=t.clone(),s={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=e?e(s):s,a=Xs()?r.body:await r.blob();return new Response(a,i)}function ri(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:7.2.0"]&&_()}catch{}const si="__WB_REVISION__";function ii(t){if(!t)throw new f("add-to-cache-list-unexpected-type",{entry:t});if(typeof t=="string"){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:n}=t;if(!n)throw new f("add-to-cache-list-unexpected-type",{entry:t});if(!e){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const r=new URL(n,location.href),s=new URL(n,location.href);return r.searchParams.set(si,e),{cacheKey:r.href,url:s.href}}class ai{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:n})=>{n&&(n.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:n,cachedResponse:r})=>{if(e.type==="install"&&n&&n.originalRequest&&n.originalRequest instanceof Request){const s=n.originalRequest.url;r?this.notUpdatedURLs.push(s):this.updatedURLs.push(s)}return r}}}class oi{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:n,params:r})=>{const s=(r==null?void 0:r.cacheKey)||this._precacheController.getCacheKeyForURL(n.url);return s?new Request(s,{headers:n.headers}):n},this._precacheController=e}}try{self["workbox:strategies:7.2.0"]&&_()}catch{}function x(t){return typeof t=="string"?new Request(t):t}class ci{constructor(e,n){this._cacheKeys={},Object.assign(this,n),this.event=n.event,this._strategy=e,this._handlerDeferred=new Qs,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:n}=this;let r=x(e);if(r.mode==="navigate"&&n instanceof FetchEvent&&n.preloadResponse){const a=await n.preloadResponse;if(a)return a}const s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const a of this.iterateCallbacks("requestWillFetch"))r=await a({request:r.clone(),event:n})}catch(a){if(a instanceof Error)throw new f("plugin-error-request-will-fetch",{thrownErrorMessage:a.message})}const i=r.clone();try{let a;a=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const o of this.iterateCallbacks("fetchDidSucceed"))a=await o({event:n,request:i,response:a});return a}catch(a){throw s&&await this.runCallbacks("fetchDidFail",{error:a,event:n,originalRequest:s.clone(),request:i.clone()}),a}}async fetchAndCachePut(e){const n=await this.fetch(e),r=n.clone();return this.waitUntil(this.cachePut(e,r)),n}async cacheMatch(e){const n=x(e);let r;const{cacheName:s,matchOptions:i}=this._strategy,a=await this.getCacheKey(n,"read"),o=Object.assign(Object.assign({},i),{cacheName:s});r=await caches.match(a,o);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await c({cacheName:s,matchOptions:i,cachedResponse:r,request:a,event:this.event})||void 0;return r}async cachePut(e,n){const r=x(e);await ti(0);const s=await this.getCacheKey(r,"write");if(!n)throw new f("cache-put-with-no-response",{url:ei(s.url)});const i=await this._ensureResponseSafeToCache(n);if(!i)return!1;const{cacheName:a,matchOptions:o}=this._strategy,c=await self.caches.open(a),l=this.hasCallback("cacheDidUpdate"),u=l?await Ys(c,s.clone(),["__WB_REVISION__"],o):null;try{await c.put(s,l?i.clone():i)}catch(d){if(d instanceof Error)throw d.name==="QuotaExceededError"&&await Zs(),d}for(const d of this.iterateCallbacks("cacheDidUpdate"))await d({cacheName:a,oldResponse:u,newResponse:i.clone(),request:s,event:this.event});return!0}async getCacheKey(e,n){const r=`${e.url} | ${n}`;if(!this._cacheKeys[r]){let s=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))s=x(await i({mode:n,request:s,event:this.event,params:this.params}));this._cacheKeys[r]=s}return this._cacheKeys[r]}hasCallback(e){for(const n of this._strategy.plugins)if(e in n)return!0;return!1}async runCallbacks(e,n){for(const r of this.iterateCallbacks(e))await r(n)}*iterateCallbacks(e){for(const n of this._strategy.plugins)if(typeof n[e]=="function"){const r=this._pluginStateMap.get(n);yield i=>{const a=Object.assign(Object.assign({},i),{state:r});return n[e](a)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let n=e,r=!1;for(const s of this.iterateCallbacks("cacheWillUpdate"))if(n=await s({request:this.request,response:n,event:this.event})||void 0,r=!0,!n)break;return r||n&&n.status!==200&&(n=void 0),n}}class li{constructor(e={}){this.cacheName=z.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[n]=this.handleAll(e);return n}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const n=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,s="params"in e?e.params:void 0,i=new ci(this,{event:n,request:r,params:s}),a=this._getResponse(i,r,n),o=this._awaitComplete(a,i,r,n);return[a,o]}async _getResponse(e,n,r){await e.runCallbacks("handlerWillStart",{event:r,request:n});let s;try{if(s=await this._handle(n,e),!s||s.type==="error")throw new f("no-response",{url:n.url})}catch(i){if(i instanceof Error){for(const a of e.iterateCallbacks("handlerDidError"))if(s=await a({error:i,event:r,request:n}),s)break}if(!s)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))s=await i({event:r,request:n,response:s});return s}async _awaitComplete(e,n,r,s){let i,a;try{i=await e}catch{}try{await n.runCallbacks("handlerDidRespond",{event:s,request:r,response:i}),await n.doneWaiting()}catch(o){o instanceof Error&&(a=o)}if(await n.runCallbacks("handlerDidComplete",{event:s,request:r,response:i,error:a}),n.destroy(),a)throw a}}class w extends li{constructor(e={}){e.cacheName=z.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(w.copyRedirectedCacheableResponsesPlugin)}async _handle(e,n){const r=await n.cacheMatch(e);return r||(n.event&&n.event.type==="install"?await this._handleInstall(e,n):await this._handleFetch(e,n))}async _handleFetch(e,n){let r;const s=n.params||{};if(this._fallbackToNetwork){const i=s.integrity,a=e.integrity,o=!a||a===i;r=await n.fetch(new Request(e,{integrity:e.mode!=="no-cors"?a||i:void 0})),i&&o&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await n.cachePut(e,r.clone()))}else throw new f("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,n){this._useDefaultCacheabilityPluginIfNeeded();const r=await n.fetch(e);if(!await n.cachePut(e,r.clone()))throw new f("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,n=0;for(const[r,s]of this.plugins.entries())s!==w.copyRedirectedCacheableResponsesPlugin&&(s===w.defaultPrecacheCacheabilityPlugin&&(e=r),s.cacheWillUpdate&&n++);n===0?this.plugins.push(w.defaultPrecacheCacheabilityPlugin):n>1&&e!==null&&this.plugins.splice(e,1)}}w.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:t}){return!t||t.status>=400?null:t}};w.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await ni(t):t}};class ui{constructor({cacheName:e,plugins:n=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new w({cacheName:z.getPrecacheName(e),plugins:[...n,new oi({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const n=[];for(const r of e){typeof r=="string"?n.push(r):r&&r.revision===void 0&&n.push(r.url);const{cacheKey:s,url:i}=ii(r),a=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==s)throw new f("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:s});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(s)&&this._cacheKeysToIntegrities.get(s)!==r.integrity)throw new f("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(s,r.integrity)}if(this._urlsToCacheKeys.set(i,s),this._urlsToCacheModes.set(i,a),n.length>0){const o=`Workbox is precaching URLs without revision info: ${n.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(o)}}}install(e){return Ye(e,async()=>{const n=new ai;this.strategy.plugins.push(n);for(const[i,a]of this._urlsToCacheKeys){const o=this._cacheKeysToIntegrities.get(a),c=this._urlsToCacheModes.get(i),l=new Request(i,{integrity:o,cache:c,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:a},request:l,event:e}))}const{updatedURLs:r,notUpdatedURLs:s}=n;return{updatedURLs:r,notUpdatedURLs:s}})}activate(e){return Ye(e,async()=>{const n=await self.caches.open(this.strategy.cacheName),r=await n.keys(),s=new Set(this._urlsToCacheKeys.values()),i=[];for(const a of r)s.has(a.url)||(await n.delete(a),i.push(a.url));return{deletedURLs:i}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const n=new URL(e,location.href);return this._urlsToCacheKeys.get(n.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const n=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(n);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const n=this.getCacheKeyForURL(e);if(!n)throw new f("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:n},r.params),this.strategy.handle(r))}}let ce;const Me=()=>(ce||(ce=new ui),ce);try{self["workbox:routing:7.2.0"]&&_()}catch{}const Lt="GET",H=t=>t&&typeof t=="object"?t:{handle:t};class O{constructor(e,n,r=Lt){this.handler=H(n),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=H(e)}}class hi extends O{constructor(e,n,r){const s=({url:i})=>{const a=e.exec(i.href);if(a&&!(i.origin!==location.origin&&a.index!==0))return a.slice(1)};super(s,n,r)}}class di{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:n}=e,r=this.handleRequest({request:n,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:n}=e.data,r=Promise.all(n.urlsToCache.map(s=>{typeof s=="string"&&(s=[s]);const i=new Request(...s);return this.handleRequest({request:i,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:n}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const s=r.origin===location.origin,{params:i,route:a}=this.findMatchingRoute({event:n,request:e,sameOrigin:s,url:r});let o=a&&a.handler;const c=e.method;if(!o&&this._defaultHandlerMap.has(c)&&(o=this._defaultHandlerMap.get(c)),!o)return;let l;try{l=o.handle({url:r,request:e,event:n,params:i})}catch(d){l=Promise.reject(d)}const u=a&&a.catchHandler;return l instanceof Promise&&(this._catchHandler||u)&&(l=l.catch(async d=>{if(u)try{return await u.handle({url:r,request:e,event:n,params:i})}catch(E){E instanceof Error&&(d=E)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:n});throw d})),l}findMatchingRoute({url:e,sameOrigin:n,request:r,event:s}){const i=this._routes.get(r.method)||[];for(const a of i){let o;const c=a.match({url:e,sameOrigin:n,request:r,event:s});if(c)return o=c,(Array.isArray(o)&&o.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(o=void 0),{route:a,params:o}}return{}}setDefaultHandler(e,n=Lt){this._defaultHandlerMap.set(n,H(e))}setCatchHandler(e){this._catchHandler=H(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new f("unregister-route-but-not-found-with-method",{method:e.method});const n=this._routes.get(e.method).indexOf(e);if(n>-1)this._routes.get(e.method).splice(n,1);else throw new f("unregister-route-route-not-registered")}}let L;const fi=()=>(L||(L=new di,L.addFetchListener(),L.addCacheListener()),L);function Pt(t,e,n){let r;if(typeof t=="string"){const i=new URL(t,location.href),a=({url:o})=>o.href===i.href;r=new O(a,e,n)}else if(t instanceof RegExp)r=new hi(t,e,n);else if(typeof t=="function")r=new O(t,e,n);else if(t instanceof O)r=t;else throw new f("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return fi().registerRoute(r),r}function pi(t,e=[]){for(const n of[...t.searchParams.keys()])e.some(r=>r.test(n))&&t.searchParams.delete(n);return t}function*gi(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:s}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const a=pi(i,e);if(yield a.href,n&&a.pathname.endsWith("/")){const o=new URL(a.href);o.pathname+=n,yield o.href}if(r){const o=new URL(a.href);o.pathname+=".html",yield o.href}if(s){const o=s({url:i});for(const c of o)yield c.href}}class mi extends O{constructor(e,n){const r=({request:s})=>{const i=e.getURLsToCacheKeys();for(const a of gi(s.url,n)){const o=i.get(a);if(o){const c=e.getIntegrityForCacheKey(o);return{cacheKey:o,integrity:c}}}};super(r,e.strategy)}}function bi(t){const e=Me(),n=new mi(e,t);Pt(n)}const wi="-precache-",yi=async(t,e=wi)=>{const r=(await self.caches.keys()).filter(s=>s.includes(e)&&s.includes(self.registration.scope)&&s!==t);return await Promise.all(r.map(s=>self.caches.delete(s))),r};function _i(){self.addEventListener("activate",t=>{const e=z.getPrecacheName();t.waitUntil(yi(e).then(n=>{}))})}function Ii(t){return Me().createHandlerBoundToURL(t)}function Ei(t){Me().precache(t)}function Ci(t,e){Ei(t),bi(e)}class vi extends O{constructor(e,{allowlist:n=[/./],denylist:r=[]}={}){super(s=>this._match(s),e),this._allowlist=n,this._denylist=r}_match({url:e,request:n}){if(n&&n.mode!=="navigate")return!1;const r=e.pathname+e.search;for(const s of this._denylist)if(s.test(r))return!1;return!!this._allowlist.some(s=>s.test(r))}}var Si="firebase",Ti="10.7.0";/**
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
 */k(Si,Ti,"app");const Di={apiKey:"AIzaSyALas5seudUODEpU_fS9mq_rj4kGRV3Ipk",authDomain:"hello-silbo.firebaseapp.com",projectId:"hello-silbo",storageBucket:"hello-silbo.firebasestorage.app",messagingSenderId:"388253311039",appId:"1:388253311039:web:371106f28bd330bd7b988a",measurementId:"G-9C78TZZPFC"};function Ai(){return at(Di)}self.skipWaiting();ri();Ci([{"revision":null,"url":"assets/index-c0a81165.css"},{"revision":"d5df3019e38f02a41c6753a07967a7f7","url":"firebase-messaging-sw.js"},{"revision":"f49e7da675b9ddb49420d5c58d8e6f8c","url":"index.html"},{"revision":"580af3b581c8b2c7574f1bc63aaeb581","url":"index.js"},{"revision":"1872c500de691dce40960bb85481de07","url":"registerSW.js"},{"revision":"4b092b9b8ffb068aa2367cca69f33cba","url":"manifest.webmanifest"}]);_i();try{Pt(new vi(Ii("index.html"),{allowlist:[/^\/$/]}))}catch(t){console.warn("Error while registering cache route (this error is expected in dev mode)",{error:t})}const Ri=Ai(),ki=Vs(Ri);Ws(ki,t=>{t.notification||self.registration.showNotification("Background Message Title",{body:"Background Message body.",icon:"/firebase-logo.png"})});
