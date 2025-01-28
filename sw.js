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
 */const St=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let o=t.charCodeAt(r);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},En=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const o=t[n++];if(o<128)e[r++]=String.fromCharCode(o);else if(o>191&&o<224){const i=t[n++];e[r++]=String.fromCharCode((o&31)<<6|i&63)}else if(o>239&&o<365){const i=t[n++],s=t[n++],a=t[n++],c=((o&7)<<18|(i&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],s=t[n++];e[r++]=String.fromCharCode((o&15)<<12|(i&63)<<6|s&63)}}return e.join("")},Tt={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<t.length;o+=3){const i=t[o],s=o+1<t.length,a=s?t[o+1]:0,c=o+2<t.length,u=c?t[o+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let C=(a&15)<<2|u>>6,V=u&63;c||(V=64,s||(C=64)),r.push(n[l],n[h],n[C],n[V])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(St(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):En(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<t.length;){const i=n[t.charAt(o++)],a=o<t.length?n[t.charAt(o)]:0;++o;const u=o<t.length?n[t.charAt(o)]:64;++o;const h=o<t.length?n[t.charAt(o)]:64;if(++o,i==null||a==null||u==null||h==null)throw new Sn;const C=i<<2|a>>4;if(r.push(C),u!==64){const V=a<<4&240|u>>2;if(r.push(V),h!==64){const In=u<<6&192|h;r.push(In)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Sn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Tn=function(t){const e=St(t);return Tt.encodeByteArray(e,!0)},kt=function(t){return Tn(t).replace(/\./g,"")},kn=function(t){try{return Tt.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Cn(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dn=()=>Cn().__FIREBASE_DEFAULTS__,An=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Rn=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&kn(t[1]);return e&&JSON.parse(e)},On=()=>{try{return Dn()||An()||Rn()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Ct=()=>{var t;return(t=On())===null||t===void 0?void 0:t.config};/**
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
 */let Mn=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}};function $e(){try{return typeof indexedDB=="object"}catch{return!1}}function Pe(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var i;e(((i=o.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function Nn(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const $n="FirebaseError";class B extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=$n,Object.setPrototypeOf(this,B.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,H.prototype.create)}}class H{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},o=`${this.service}/${e}`,i=this.errors[e],s=i?Pn(i,r):"Error",a=`${this.serviceName}: ${s} (${o}).`;return new B(o,a,r)}}function Pn(t,e){return t.replace(Ln,(n,r)=>{const o=e[r];return o!=null?String(o):`<${r}?>`})}const Ln=/\{\$([^}]+)}/g;function Se(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const o of n){if(!r.includes(o))return!1;const i=t[o],s=e[o];if(tt(i)&&tt(s)){if(!Se(i,s))return!1}else if(i!==s)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function tt(t){return t!==null&&typeof t=="object"}/**
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
 */function x(t){return t&&t._delegate?t._delegate:t}class v{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const D="[DEFAULT]";/**
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
 */class Bn{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Mn;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),o=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(o)return null;throw i}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jn(e))try{this.getOrInitializeService({instanceIdentifier:D})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:o});r.resolve(i)}catch{}}}}clearInstance(e=D){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=D){return this.instances.has(e)}getOptions(e=D){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&s.resolve(o)}return o}onInit(e,n){var r;const o=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(o))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(o,i);const s=this.instances.get(o);return s&&e(s,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:xn(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=D){return this.component?this.component.multipleInstances?e:D:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function xn(t){return t===D?void 0:t}function jn(t){return t.instantiationMode==="EAGER"}/**
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
 */class Fn{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Bn(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var d;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(d||(d={}));const Un={debug:d.DEBUG,verbose:d.VERBOSE,info:d.INFO,warn:d.WARN,error:d.ERROR,silent:d.SILENT},Kn=d.INFO,Hn={[d.DEBUG]:"log",[d.VERBOSE]:"log",[d.INFO]:"info",[d.WARN]:"warn",[d.ERROR]:"error"},Wn=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),o=Hn[e];if(o)console[o](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vn{constructor(e){this.name=e,this._logLevel=Kn,this._logHandler=Wn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in d))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Un[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,d.DEBUG,...e),this._logHandler(this,d.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,d.VERBOSE,...e),this._logHandler(this,d.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,d.INFO,...e),this._logHandler(this,d.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,d.WARN,...e),this._logHandler(this,d.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,d.ERROR,...e),this._logHandler(this,d.ERROR,...e)}}const qn=(t,e)=>e.some(n=>t instanceof n);let nt,rt;function Gn(){return nt||(nt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function zn(){return rt||(rt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Dt=new WeakMap,Te=new WeakMap,At=new WeakMap,se=new WeakMap,Le=new WeakMap;function Jn(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(y(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Dt.set(n,t)}).catch(()=>{}),Le.set(e,t),e}function Yn(t){if(Te.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Te.set(t,e)}let ke={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Te.get(t);if(e==="objectStoreNames")return t.objectStoreNames||At.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return y(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Xn(t){ke=t(ke)}function Qn(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ae(this),e,...n);return At.set(r,e.sort?e.sort():[e]),y(r)}:zn().includes(t)?function(...e){return t.apply(ae(this),e),y(Dt.get(this))}:function(...e){return y(t.apply(ae(this),e))}}function Zn(t){return typeof t=="function"?Qn(t):(t instanceof IDBTransaction&&Yn(t),qn(t,Gn())?new Proxy(t,ke):t)}function y(t){if(t instanceof IDBRequest)return Jn(t);if(se.has(t))return se.get(t);const e=Zn(t);return e!==t&&(se.set(t,e),Le.set(e,t)),e}const ae=t=>Le.get(t);function W(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=y(s);return r&&s.addEventListener("upgradeneeded",c=>{r(y(s.result),c.oldVersion,c.newVersion,y(s.transaction),c)}),n&&s.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",u=>o(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}function P(t,{blocked:e}={}){const n=indexedDB.deleteDatabase(t);return e&&n.addEventListener("blocked",r=>e(r.oldVersion,r)),y(n).then(()=>{})}const er=["get","getKey","getAll","getAllKeys","count"],tr=["put","add","delete","clear"],ce=new Map;function ot(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ce.get(e))return ce.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=tr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||er.includes(n)))return;const i=async function(s,...a){const c=this.transaction(s,o?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),o&&c.done]))[0]};return ce.set(e,i),i}Xn(t=>({...t,get:(e,n,r)=>ot(e,n)||t.get(e,n,r),has:(e,n)=>!!ot(e,n)||t.has(e,n)}));/**
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
 */class nr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rr(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function rr(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ce="@firebase/app",it="0.9.24";/**
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
 */const R=new Vn("@firebase/app"),or="@firebase/app-compat",ir="@firebase/analytics-compat",sr="@firebase/analytics",ar="@firebase/app-check-compat",cr="@firebase/app-check",lr="@firebase/auth",ur="@firebase/auth-compat",dr="@firebase/database",fr="@firebase/database-compat",hr="@firebase/functions",pr="@firebase/functions-compat",gr="@firebase/installations",br="@firebase/installations-compat",mr="@firebase/messaging",wr="@firebase/messaging-compat",yr="@firebase/performance",_r="@firebase/performance-compat",vr="@firebase/remote-config",Ir="@firebase/remote-config-compat",Er="@firebase/storage",Sr="@firebase/storage-compat",Tr="@firebase/firestore",kr="@firebase/firestore-compat",Cr="firebase";/**
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
 */const De="[DEFAULT]",Dr={[Ce]:"fire-core",[or]:"fire-core-compat",[sr]:"fire-analytics",[ir]:"fire-analytics-compat",[cr]:"fire-app-check",[ar]:"fire-app-check-compat",[lr]:"fire-auth",[ur]:"fire-auth-compat",[dr]:"fire-rtdb",[fr]:"fire-rtdb-compat",[hr]:"fire-fn",[pr]:"fire-fn-compat",[gr]:"fire-iid",[br]:"fire-iid-compat",[mr]:"fire-fcm",[wr]:"fire-fcm-compat",[yr]:"fire-perf",[_r]:"fire-perf-compat",[vr]:"fire-rc",[Ir]:"fire-rc-compat",[Er]:"fire-gcs",[Sr]:"fire-gcs-compat",[Tr]:"fire-fst",[kr]:"fire-fst-compat","fire-js":"fire-js",[Cr]:"fire-js-all"};/**
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
 */const G=new Map,Ae=new Map;function Ar(t,e){try{t.container.addComponent(e)}catch(n){R.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function k(t){const e=t.name;if(Ae.has(e))return R.debug(`There were multiple attempts to register component ${e}.`),!1;Ae.set(e,t);for(const n of G.values())Ar(n,t);return!0}function ne(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const Rr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},E=new H("app","Firebase",Rr);/**
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
 */class Or{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new v("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw E.create("app-deleted",{appName:this._name})}}function Rt(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:De,automaticDataCollectionEnabled:!1},e),o=r.name;if(typeof o!="string"||!o)throw E.create("bad-app-name",{appName:String(o)});if(n||(n=Ct()),!n)throw E.create("no-options");const i=G.get(o);if(i){if(Se(n,i.options)&&Se(r,i.config))return i;throw E.create("duplicate-app",{appName:o})}const s=new Fn(o);for(const c of Ae.values())s.addComponent(c);const a=new Or(n,r,s);return G.set(o,a),a}function Ot(t=De){const e=G.get(t);if(!e&&t===De&&Ct())return Rt();if(!e)throw E.create("no-app",{appName:t});return e}function S(t,e,n){var r;let o=(r=Dr[t])!==null&&r!==void 0?r:t;n&&(o+=`-${n}`);const i=o.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const a=[`Unable to register library "${o}" with version "${e}":`];i&&a.push(`library name "${o}" contains illegal characters (whitespace or "/")`),i&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),R.warn(a.join(" "));return}k(new v(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const Mr="firebase-heartbeat-database",Nr=1,U="firebase-heartbeat-store";let le=null;function Mt(){return le||(le=W(Mr,Nr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(U)}}}).catch(t=>{throw E.create("idb-open",{originalErrorMessage:t.message})})),le}async function $r(t){try{return await(await Mt()).transaction(U).objectStore(U).get(Nt(t))}catch(e){if(e instanceof B)R.warn(e.message);else{const n=E.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});R.warn(n.message)}}}async function st(t,e){try{const r=(await Mt()).transaction(U,"readwrite");await r.objectStore(U).put(e,Nt(t)),await r.done}catch(n){if(n instanceof B)R.warn(n.message);else{const r=E.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});R.warn(r.message)}}}function Nt(t){return`${t.name}!${t.options.appId}`}/**
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
 */const Pr=1024,Lr=30*24*60*60*1e3;class Br{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new jr(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=at();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:o}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=Lr}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=at(),{heartbeatsToSend:r,unsentEntries:o}=xr(this._heartbeatsCache.heartbeats),i=kt(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function at(){return new Date().toISOString().substring(0,10)}function xr(t,e=Pr){const n=[];let r=t.slice();for(const o of t){const i=n.find(s=>s.agent===o.agent);if(i){if(i.dates.push(o.date),ct(n)>e){i.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ct(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class jr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $e()?Pe().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $r(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return st(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return st(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}}function ct(t){return kt(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Fr(t){k(new v("platform-logger",e=>new nr(e),"PRIVATE")),k(new v("heartbeat",e=>new Br(e),"PRIVATE")),S(Ce,it,t),S(Ce,it,"esm2017"),S("fire-js","")}Fr("");const Ur=(t,e)=>e.some(n=>t instanceof n);let lt,ut;function Kr(){return lt||(lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Hr(){return ut||(ut=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const $t=new WeakMap,Re=new WeakMap,Pt=new WeakMap,ue=new WeakMap,Be=new WeakMap;function Wr(t){const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{n(T(t.result)),o()},s=()=>{r(t.error),o()};t.addEventListener("success",i),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&$t.set(n,t)}).catch(()=>{}),Be.set(e,t),e}function Vr(t){if(Re.has(t))return;const e=new Promise((n,r)=>{const o=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{n(),o()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)});Re.set(t,e)}let Oe={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Re.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Pt.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return T(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qr(t){Oe=t(Oe)}function Gr(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(de(this),e,...n);return Pt.set(r,e.sort?e.sort():[e]),T(r)}:Hr().includes(t)?function(...e){return t.apply(de(this),e),T($t.get(this))}:function(...e){return T(t.apply(de(this),e))}}function zr(t){return typeof t=="function"?Gr(t):(t instanceof IDBTransaction&&Vr(t),Ur(t,Kr())?new Proxy(t,Oe):t)}function T(t){if(t instanceof IDBRequest)return Wr(t);if(ue.has(t))return ue.get(t);const e=zr(t);return e!==t&&(ue.set(t,e),Be.set(e,t)),e}const de=t=>Be.get(t);function Jr(t,e,{blocked:n,upgrade:r,blocking:o,terminated:i}={}){const s=indexedDB.open(t,e),a=T(s);return r&&s.addEventListener("upgradeneeded",c=>{r(T(s.result),c.oldVersion,c.newVersion,T(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),o&&c.addEventListener("versionchange",()=>o())}).catch(()=>{}),a}const Yr=["get","getKey","getAll","getAllKeys","count"],Xr=["put","add","delete","clear"],fe=new Map;function dt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fe.get(e))return fe.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,o=Xr.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Yr.includes(n)))return;const i=async function(s,...a){const c=this.transaction(s,o?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),o&&c.done]))[0]};return fe.set(e,i),i}qr(t=>({...t,get:(e,n,r)=>dt(e,n)||t.get(e,n,r),has:(e,n)=>!!dt(e,n)||t.has(e,n)}));const Lt="@firebase/installations",xe="0.6.4";/**
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
 */const Bt=1e4,xt=`w:${xe}`,jt="FIS_v2",Qr="https://firebaseinstallations.googleapis.com/v1",Zr=60*60*1e3,eo="installations",to="Installations";/**
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
 */const no={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},O=new H(eo,to,no);function Ft(t){return t instanceof B&&t.code.includes("request-failed")}/**
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
 */function Ut({projectId:t}){return`${Qr}/projects/${t}/installations`}function Kt(t){return{token:t.token,requestStatus:2,expiresIn:oo(t.expiresIn),creationTime:Date.now()}}async function Ht(t,e){const r=(await e.json()).error;return O.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Wt({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function ro(t,{refreshToken:e}){const n=Wt(t);return n.append("Authorization",io(e)),n}async function Vt(t){const e=await t();return e.status>=500&&e.status<600?t():e}function oo(t){return Number(t.replace("s","000"))}function io(t){return`${jt} ${t}`}/**
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
 */async function so({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Ut(t),o=Wt(t),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={fid:n,authVersion:jt,appId:t.appId,sdkVersion:xt},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await Vt(()=>fetch(r,a));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:Kt(u.authToken)}}else throw await Ht("Create Installation",c)}/**
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
 */function qt(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function ao(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const co=/^[cdef][\w-]{21}$/,Me="";function lo(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=uo(t);return co.test(n)?n:Me}catch{return Me}}function uo(t){return ao(t).substr(0,22)}/**
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
 */function re(t){return`${t.appName}!${t.appId}`}/**
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
 */const Gt=new Map;function zt(t,e){const n=re(t);Jt(n,e),fo(n,e)}function Jt(t,e){const n=Gt.get(t);if(n)for(const r of n)r(e)}function fo(t,e){const n=ho();n&&n.postMessage({key:t,fid:e}),po()}let A=null;function ho(){return!A&&"BroadcastChannel"in self&&(A=new BroadcastChannel("[Firebase] FID Change"),A.onmessage=t=>{Jt(t.data.key,t.data.fid)}),A}function po(){Gt.size===0&&A&&(A.close(),A=null)}/**
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
 */const go="firebase-installations-database",bo=1,M="firebase-installations-store";let he=null;function je(){return he||(he=Jr(go,bo,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(M)}}})),he}async function z(t,e){const n=re(t),o=(await je()).transaction(M,"readwrite"),i=o.objectStore(M),s=await i.get(n);return await i.put(e,n),await o.done,(!s||s.fid!==e.fid)&&zt(t,e.fid),e}async function Yt(t){const e=re(t),r=(await je()).transaction(M,"readwrite");await r.objectStore(M).delete(e),await r.done}async function oe(t,e){const n=re(t),o=(await je()).transaction(M,"readwrite"),i=o.objectStore(M),s=await i.get(n),a=e(s);return a===void 0?await i.delete(n):await i.put(a,n),await o.done,a&&(!s||s.fid!==a.fid)&&zt(t,a.fid),a}/**
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
 */async function Fe(t){let e;const n=await oe(t.appConfig,r=>{const o=mo(r),i=wo(t,o);return e=i.registrationPromise,i.installationEntry});return n.fid===Me?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function mo(t){const e=t||{fid:lo(),registrationStatus:0};return Xt(e)}function wo(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(O.create("app-offline"));return{installationEntry:e,registrationPromise:o}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=yo(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:_o(t)}:{installationEntry:e}}async function yo(t,e){try{const n=await so(t,e);return z(t.appConfig,n)}catch(n){throw Ft(n)&&n.customData.serverCode===409?await Yt(t.appConfig):await z(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function _o(t){let e=await ft(t.appConfig);for(;e.registrationStatus===1;)await qt(100),e=await ft(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Fe(t);return r||n}return e}function ft(t){return oe(t,e=>{if(!e)throw O.create("installation-not-found");return Xt(e)})}function Xt(t){return vo(t)?{fid:t.fid,registrationStatus:0}:t}function vo(t){return t.registrationStatus===1&&t.registrationTime+Bt<Date.now()}/**
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
 */async function Io({appConfig:t,heartbeatServiceProvider:e},n){const r=Eo(t,n),o=ro(t,n),i=e.getImmediate({optional:!0});if(i){const u=await i.getHeartbeatsHeader();u&&o.append("x-firebase-client",u)}const s={installation:{sdkVersion:xt,appId:t.appId}},a={method:"POST",headers:o,body:JSON.stringify(s)},c=await Vt(()=>fetch(r,a));if(c.ok){const u=await c.json();return Kt(u)}else throw await Ht("Generate Auth Token",c)}function Eo(t,{fid:e}){return`${Ut(t)}/${e}/authTokens:generate`}/**
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
 */async function Ue(t,e=!1){let n;const r=await oe(t.appConfig,i=>{if(!Qt(i))throw O.create("not-registered");const s=i.authToken;if(!e&&ko(s))return i;if(s.requestStatus===1)return n=So(t,e),i;{if(!navigator.onLine)throw O.create("app-offline");const a=Do(i);return n=To(t,a),a}});return n?await n:r.authToken}async function So(t,e){let n=await ht(t.appConfig);for(;n.authToken.requestStatus===1;)await qt(100),n=await ht(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ue(t,e):r}function ht(t){return oe(t,e=>{if(!Qt(e))throw O.create("not-registered");const n=e.authToken;return Ao(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function To(t,e){try{const n=await Io(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await z(t.appConfig,r),n}catch(n){if(Ft(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Yt(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await z(t.appConfig,r)}throw n}}function Qt(t){return t!==void 0&&t.registrationStatus===2}function ko(t){return t.requestStatus===2&&!Co(t)}function Co(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Zr}function Do(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Ao(t){return t.requestStatus===1&&t.requestTime+Bt<Date.now()}/**
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
 */async function Ro(t){const e=t,{installationEntry:n,registrationPromise:r}=await Fe(e);return r?r.catch(console.error):Ue(e).catch(console.error),n.fid}/**
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
 */async function Oo(t,e=!1){const n=t;return await Mo(n),(await Ue(n,e)).token}async function Mo(t){const{registrationPromise:e}=await Fe(t);e&&await e}/**
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
 */function No(t){if(!t||!t.options)throw pe("App Configuration");if(!t.name)throw pe("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw pe(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function pe(t){return O.create("missing-app-config-values",{valueName:t})}/**
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
 */const Zt="installations",$o="installations-internal",Po=t=>{const e=t.getProvider("app").getImmediate(),n=No(e),r=ne(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lo=t=>{const e=t.getProvider("app").getImmediate(),n=ne(e,Zt).getImmediate();return{getId:()=>Ro(n),getToken:o=>Oo(n,o)}};function Bo(){k(new v(Zt,Po,"PUBLIC")),k(new v($o,Lo,"PRIVATE"))}Bo();S(Lt,xe);S(Lt,xe,"esm2017");/**
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
 */const en="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",xo="https://fcmregistrations.googleapis.com/v1",tn="FCM_MSG",jo="google.c.a.c_id",Fo=3,Uo=1;var J;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(J||(J={}));/**
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
 */var Y;(function(t){t.PUSH_RECEIVED="push-received",t.NOTIFICATION_CLICKED="notification-clicked"})(Y||(Y={}));/**
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
 */function b(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function Ko(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}/**
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
 */const ge="fcm_token_details_db",Ho=5,pt="fcm_token_object_Store";async function Wo(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(ge))return null;let e=null;return(await W(ge,Ho,{upgrade:async(r,o,i,s)=>{var a;if(o<2||!r.objectStoreNames.contains(pt))return;const c=s.objectStore(pt),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(o===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:b(l.vapidKey)}}}else if(o===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:b(l.auth),p256dh:b(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:b(l.vapidKey)}}}else if(o===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:b(l.auth),p256dh:b(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:b(l.vapidKey)}}}}}})).close(),await P(ge),await P("fcm_vapid_details_db"),await P("undefined"),Vo(e)?e:null}function Vo(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const qo="firebase-messaging-database",Go=1,N="firebase-messaging-store";let be=null;function Ke(){return be||(be=W(qo,Go,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(N)}}})),be}async function He(t){const e=Ve(t),r=await(await Ke()).transaction(N).objectStore(N).get(e);if(r)return r;{const o=await Wo(t.appConfig.senderId);if(o)return await We(t,o),o}}async function We(t,e){const n=Ve(t),o=(await Ke()).transaction(N,"readwrite");return await o.objectStore(N).put(e,n),await o.done,e}async function zo(t){const e=Ve(t),r=(await Ke()).transaction(N,"readwrite");await r.objectStore(N).delete(e),await r.done}function Ve({appConfig:t}){return t.appId}/**
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
 */const Jo={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},g=new H("messaging","Messaging",Jo);/**
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
 */async function Yo(t,e){const n=await Ge(t),r=rn(e),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(qe(t.appConfig),o)).json()}catch(s){throw g.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw g.create("token-subscribe-failed",{errorInfo:s})}if(!i.token)throw g.create("token-subscribe-no-token");return i.token}async function Xo(t,e){const n=await Ge(t),r=rn(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${qe(t.appConfig)}/${e.token}`,o)).json()}catch(s){throw g.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw g.create("token-update-failed",{errorInfo:s})}if(!i.token)throw g.create("token-update-no-token");return i.token}async function nn(t,e){const r={method:"DELETE",headers:await Ge(t)};try{const i=await(await fetch(`${qe(t.appConfig)}/${e}`,r)).json();if(i.error){const s=i.error.message;throw g.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw g.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function qe({projectId:t}){return`${xo}/projects/${t}/registrations`}async function Ge({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function rn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:e,p256dh:t}};return r!==en&&(o.web.applicationPubKey=r),o}/**
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
 */const Qo=7*24*60*60*1e3;async function Zo(t){const e=await ti(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:b(e.getKey("auth")),p256dh:b(e.getKey("p256dh"))},r=await He(t.firebaseDependencies);if(r){if(ni(r.subscriptionOptions,n))return Date.now()>=r.createTime+Qo?ei(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await nn(t.firebaseDependencies,r.token)}catch(o){console.warn(o)}return gt(t.firebaseDependencies,n)}else return gt(t.firebaseDependencies,n)}async function Ne(t){const e=await He(t.firebaseDependencies);e&&(await nn(t.firebaseDependencies,e.token),await zo(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function ei(t,e){try{const n=await Xo(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await We(t.firebaseDependencies,r),n}catch(n){throw await Ne(t),n}}async function gt(t,e){const r={token:await Yo(t,e),createTime:Date.now(),subscriptionOptions:e};return await We(t,r),r.token}async function ti(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:Ko(e)})}function ni(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,o=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&o&&i}/**
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
 */function ri(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return oi(e,t),ii(e,t),si(e,t),e}function oi(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const o=e.notification.image;o&&(t.notification.image=o);const i=e.notification.icon;i&&(t.notification.icon=i)}function ii(t,e){e.data&&(t.data=e.data)}function si(t,e){var n,r,o,i,s;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(o=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function ai(t){return typeof t=="object"&&!!t&&jo in t}/**
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
 */function ci(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */on("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");on("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");async function li(t,e){const n=ui(e,await t.firebaseDependencies.installations.getId());di(t,n,e.productId)}function ui(t,e){var n,r;const o={};return t.from&&(o.project_number=t.from),t.fcmMessageId&&(o.message_id=t.fcmMessageId),o.instance_id=e,t.notification?o.message_type=J.DISPLAY_NOTIFICATION.toString():o.message_type=J.DATA_MESSAGE.toString(),o.sdk_platform=Fo.toString(),o.package_name=self.origin.replace(/(^\w+:|^)\/\//,""),t.collapse_key&&(o.collapse_key=t.collapse_key),o.event=Uo.toString(),!((n=t.fcmOptions)===null||n===void 0)&&n.analytics_label&&(o.analytics_label=(r=t.fcmOptions)===null||r===void 0?void 0:r.analytics_label),o}function di(t,e,n){const r={};r.event_time_ms=Math.floor(Date.now()).toString(),r.source_extension_json_proto3=JSON.stringify(e),n&&(r.compliance_data=fi(n)),t.logEvents.push(r)}function fi(t){return{privacy_context:{prequest:{origin_associated_product_id:t}}}}function on(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */async function hi(t,e){var n,r;const{newSubscription:o}=t;if(!o){await Ne(e);return}const i=await He(e.firebaseDependencies);await Ne(e),e.vapidKey=(r=(n=i==null?void 0:i.subscriptionOptions)===null||n===void 0?void 0:n.vapidKey)!==null&&r!==void 0?r:en,await Zo(e)}async function pi(t,e){const n=mi(t);if(!n)return;e.deliveryMetricsExportedToBigQueryEnabled&&await li(e,n);const r=await sn();if(yi(r))return _i(r,n);if(n.notification&&await vi(bi(n)),!!e&&e.onBackgroundMessageHandler){const o=ri(n);typeof e.onBackgroundMessageHandler=="function"?await e.onBackgroundMessageHandler(o):e.onBackgroundMessageHandler.next(o)}}async function gi(t){var e,n;const r=(n=(e=t.notification)===null||e===void 0?void 0:e.data)===null||n===void 0?void 0:n[tn];if(r){if(t.action)return}else return;t.stopImmediatePropagation(),t.notification.close();const o=Ii(r);if(!o)return;const i=new URL(o,self.location.href),s=new URL(self.location.origin);if(i.host!==s.host)return;let a=await wi(i);if(a?a=await a.focus():(a=await self.clients.openWindow(o),await ci(3e3)),!!a)return r.messageType=Y.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,a.postMessage(r)}function bi(t){const e=Object.assign({},t.notification);return e.data={[tn]:t},e}function mi({data:t}){if(!t)return null;try{return t.json()}catch{return null}}async function wi(t){const e=await sn();for(const n of e){const r=new URL(n.url,self.location.href);if(t.host===r.host)return n}return null}function yi(t){return t.some(e=>e.visibilityState==="visible"&&!e.url.startsWith("chrome-extension://"))}function _i(t,e){e.isFirebaseMessaging=!0,e.messageType=Y.PUSH_RECEIVED;for(const n of t)n.postMessage(e)}function sn(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function vi(t){var e;const{actions:n}=t,{maxActions:r}=Notification;return n&&r&&n.length>r&&console.warn(`This browser only supports ${r} actions. The remaining actions will not be displayed.`),self.registration.showNotification((e=t.title)!==null&&e!==void 0?e:"",t)}function Ii(t){var e,n,r;const o=(n=(e=t.fcmOptions)===null||e===void 0?void 0:e.link)!==null&&n!==void 0?n:(r=t.notification)===null||r===void 0?void 0:r.click_action;return o||(ai(t.data)?self.location.origin:null)}/**
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
 */function Ei(t){if(!t||!t.options)throw me("App Configuration Object");if(!t.name)throw me("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw me(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function me(t){return g.create("missing-app-config-values",{valueName:t})}/**
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
 */let Si=class{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Ei(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}};/**
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
 */const Ti=t=>{const e=new Si(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return self.addEventListener("push",n=>{n.waitUntil(pi(n,e))}),self.addEventListener("pushsubscriptionchange",n=>{n.waitUntil(hi(n,e))}),self.addEventListener("notificationclick",n=>{n.waitUntil(gi(n))}),e};function ki(){k(new v("messaging-sw",Ti,"PUBLIC"))}/**
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
 */async function Ci(){return $e()&&await Pe()&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function Di(t,e){if(self.document!==void 0)throw g.create("only-available-in-sw");return t.onBackgroundMessageHandler=e,()=>{t.onBackgroundMessageHandler=null}}/**
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
 */function Ai(t=Ot()){return Ci().then(e=>{if(!e)throw g.create("unsupported-browser")},e=>{throw g.create("indexed-db-unsupported")}),ne(x(t),"messaging-sw").getImmediate()}function Ri(t,e){return t=x(t),Di(t,e)}/**
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
 */ki();try{self["workbox:core:7.2.0"]&&_()}catch{}const Oi=(t,...e)=>{let n=t;return e.length>0&&(n+=` :: ${JSON.stringify(e)}`),n},Mi=Oi;class p extends Error{constructor(e,n){const r=Mi(e,n);super(r),this.name=e,this.details=n}}const Ni=new Set,w={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:typeof registration<"u"?registration.scope:""},we=t=>[w.prefix,t,w.suffix].filter(e=>e&&e.length>0).join("-"),$i=t=>{for(const e of Object.keys(w))t(e)},ie={updateDetails:t=>{$i(e=>{typeof t[e]=="string"&&(w[e]=t[e])})},getGoogleAnalyticsName:t=>t||we(w.googleAnalytics),getPrecacheName:t=>t||we(w.precache),getPrefix:()=>w.prefix,getRuntimeName:t=>t||we(w.runtime),getSuffix:()=>w.suffix};function bt(t,e){const n=new URL(t);for(const r of e)n.searchParams.delete(r);return n.href}async function Pi(t,e,n,r){const o=bt(e.url,n);if(e.url===o)return t.match(e,r);const i=Object.assign(Object.assign({},r),{ignoreSearch:!0}),s=await t.keys(e,i);for(const a of s){const c=bt(a.url,n);if(o===c)return t.match(a,r)}}let j;function Li(){if(j===void 0){const t=new Response("");if("body"in t)try{new Response(t.body),j=!0}catch{j=!1}j=!1}return j}class Bi{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}async function xi(){for(const t of Ni)await t()}const ji=t=>new URL(String(t),location.href).href.replace(new RegExp(`^${location.origin}`),"");function Fi(t){return new Promise(e=>setTimeout(e,t))}function mt(t,e){const n=e();return t.waitUntil(n),n}async function Ui(t,e){let n=null;if(t.url&&(n=new URL(t.url).origin),n!==self.location.origin)throw new p("cross-origin-copy-response",{origin:n});const r=t.clone(),o={headers:new Headers(r.headers),status:r.status,statusText:r.statusText},i=e?e(o):o,s=Li()?r.body:await r.blob();return new Response(s,i)}function Ki(){self.addEventListener("activate",()=>self.clients.claim())}try{self["workbox:precaching:7.2.0"]&&_()}catch{}const Hi="__WB_REVISION__";function Wi(t){if(!t)throw new p("add-to-cache-list-unexpected-type",{entry:t});if(typeof t=="string"){const i=new URL(t,location.href);return{cacheKey:i.href,url:i.href}}const{revision:e,url:n}=t;if(!n)throw new p("add-to-cache-list-unexpected-type",{entry:t});if(!e){const i=new URL(n,location.href);return{cacheKey:i.href,url:i.href}}const r=new URL(n,location.href),o=new URL(n,location.href);return r.searchParams.set(Hi,e),{cacheKey:r.href,url:o.href}}class Vi{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:n})=>{n&&(n.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:n,cachedResponse:r})=>{if(e.type==="install"&&n&&n.originalRequest&&n.originalRequest instanceof Request){const o=n.originalRequest.url;r?this.notUpdatedURLs.push(o):this.updatedURLs.push(o)}return r}}}class qi{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:n,params:r})=>{const o=(r==null?void 0:r.cacheKey)||this._precacheController.getCacheKeyForURL(n.url);return o?new Request(o,{headers:n.headers}):n},this._precacheController=e}}try{self["workbox:strategies:7.2.0"]&&_()}catch{}function q(t){return typeof t=="string"?new Request(t):t}class Gi{constructor(e,n){this._cacheKeys={},Object.assign(this,n),this.event=n.event,this._strategy=e,this._handlerDeferred=new Bi,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const r of this._plugins)this._pluginStateMap.set(r,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:n}=this;let r=q(e);if(r.mode==="navigate"&&n instanceof FetchEvent&&n.preloadResponse){const s=await n.preloadResponse;if(s)return s}const o=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const s of this.iterateCallbacks("requestWillFetch"))r=await s({request:r.clone(),event:n})}catch(s){if(s instanceof Error)throw new p("plugin-error-request-will-fetch",{thrownErrorMessage:s.message})}const i=r.clone();try{let s;s=await fetch(r,r.mode==="navigate"?void 0:this._strategy.fetchOptions);for(const a of this.iterateCallbacks("fetchDidSucceed"))s=await a({event:n,request:i,response:s});return s}catch(s){throw o&&await this.runCallbacks("fetchDidFail",{error:s,event:n,originalRequest:o.clone(),request:i.clone()}),s}}async fetchAndCachePut(e){const n=await this.fetch(e),r=n.clone();return this.waitUntil(this.cachePut(e,r)),n}async cacheMatch(e){const n=q(e);let r;const{cacheName:o,matchOptions:i}=this._strategy,s=await this.getCacheKey(n,"read"),a=Object.assign(Object.assign({},i),{cacheName:o});r=await caches.match(s,a);for(const c of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await c({cacheName:o,matchOptions:i,cachedResponse:r,request:s,event:this.event})||void 0;return r}async cachePut(e,n){const r=q(e);await Fi(0);const o=await this.getCacheKey(r,"write");if(!n)throw new p("cache-put-with-no-response",{url:ji(o.url)});const i=await this._ensureResponseSafeToCache(n);if(!i)return!1;const{cacheName:s,matchOptions:a}=this._strategy,c=await self.caches.open(s),u=this.hasCallback("cacheDidUpdate"),l=u?await Pi(c,o.clone(),["__WB_REVISION__"],a):null;try{await c.put(o,u?i.clone():i)}catch(h){if(h instanceof Error)throw h.name==="QuotaExceededError"&&await xi(),h}for(const h of this.iterateCallbacks("cacheDidUpdate"))await h({cacheName:s,oldResponse:l,newResponse:i.clone(),request:o,event:this.event});return!0}async getCacheKey(e,n){const r=`${e.url} | ${n}`;if(!this._cacheKeys[r]){let o=e;for(const i of this.iterateCallbacks("cacheKeyWillBeUsed"))o=q(await i({mode:n,request:o,event:this.event,params:this.params}));this._cacheKeys[r]=o}return this._cacheKeys[r]}hasCallback(e){for(const n of this._strategy.plugins)if(e in n)return!0;return!1}async runCallbacks(e,n){for(const r of this.iterateCallbacks(e))await r(n)}*iterateCallbacks(e){for(const n of this._strategy.plugins)if(typeof n[e]=="function"){const r=this._pluginStateMap.get(n);yield i=>{const s=Object.assign(Object.assign({},i),{state:r});return n[e](s)}}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve(null)}async _ensureResponseSafeToCache(e){let n=e,r=!1;for(const o of this.iterateCallbacks("cacheWillUpdate"))if(n=await o({request:this.request,response:n,event:this.event})||void 0,r=!0,!n)break;return r||n&&n.status!==200&&(n=void 0),n}}class zi{constructor(e={}){this.cacheName=ie.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[n]=this.handleAll(e);return n}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const n=e.event,r=typeof e.request=="string"?new Request(e.request):e.request,o="params"in e?e.params:void 0,i=new Gi(this,{event:n,request:r,params:o}),s=this._getResponse(i,r,n),a=this._awaitComplete(s,i,r,n);return[s,a]}async _getResponse(e,n,r){await e.runCallbacks("handlerWillStart",{event:r,request:n});let o;try{if(o=await this._handle(n,e),!o||o.type==="error")throw new p("no-response",{url:n.url})}catch(i){if(i instanceof Error){for(const s of e.iterateCallbacks("handlerDidError"))if(o=await s({error:i,event:r,request:n}),o)break}if(!o)throw i}for(const i of e.iterateCallbacks("handlerWillRespond"))o=await i({event:r,request:n,response:o});return o}async _awaitComplete(e,n,r,o){let i,s;try{i=await e}catch{}try{await n.runCallbacks("handlerDidRespond",{event:o,request:r,response:i}),await n.doneWaiting()}catch(a){a instanceof Error&&(s=a)}if(await n.runCallbacks("handlerDidComplete",{event:o,request:r,response:i,error:s}),n.destroy(),s)throw s}}class I extends zi{constructor(e={}){e.cacheName=ie.getPrecacheName(e.cacheName),super(e),this._fallbackToNetwork=e.fallbackToNetwork!==!1,this.plugins.push(I.copyRedirectedCacheableResponsesPlugin)}async _handle(e,n){const r=await n.cacheMatch(e);return r||(n.event&&n.event.type==="install"?await this._handleInstall(e,n):await this._handleFetch(e,n))}async _handleFetch(e,n){let r;const o=n.params||{};if(this._fallbackToNetwork){const i=o.integrity,s=e.integrity,a=!s||s===i;r=await n.fetch(new Request(e,{integrity:e.mode!=="no-cors"?s||i:void 0})),i&&a&&e.mode!=="no-cors"&&(this._useDefaultCacheabilityPluginIfNeeded(),await n.cachePut(e,r.clone()))}else throw new p("missing-precache-entry",{cacheName:this.cacheName,url:e.url});return r}async _handleInstall(e,n){this._useDefaultCacheabilityPluginIfNeeded();const r=await n.fetch(e);if(!await n.cachePut(e,r.clone()))throw new p("bad-precaching-response",{url:e.url,status:r.status});return r}_useDefaultCacheabilityPluginIfNeeded(){let e=null,n=0;for(const[r,o]of this.plugins.entries())o!==I.copyRedirectedCacheableResponsesPlugin&&(o===I.defaultPrecacheCacheabilityPlugin&&(e=r),o.cacheWillUpdate&&n++);n===0?this.plugins.push(I.defaultPrecacheCacheabilityPlugin):n>1&&e!==null&&this.plugins.splice(e,1)}}I.defaultPrecacheCacheabilityPlugin={async cacheWillUpdate({response:t}){return!t||t.status>=400?null:t}};I.copyRedirectedCacheableResponsesPlugin={async cacheWillUpdate({response:t}){return t.redirected?await Ui(t):t}};class Ji{constructor({cacheName:e,plugins:n=[],fallbackToNetwork:r=!0}={}){this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map,this._strategy=new I({cacheName:ie.getPrecacheName(e),plugins:[...n,new qi({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this._strategy}precache(e){this.addToCacheList(e),this._installAndActiveListenersAdded||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this._installAndActiveListenersAdded=!0)}addToCacheList(e){const n=[];for(const r of e){typeof r=="string"?n.push(r):r&&r.revision===void 0&&n.push(r.url);const{cacheKey:o,url:i}=Wi(r),s=typeof r!="string"&&r.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==o)throw new p("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:o});if(typeof r!="string"&&r.integrity){if(this._cacheKeysToIntegrities.has(o)&&this._cacheKeysToIntegrities.get(o)!==r.integrity)throw new p("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(o,r.integrity)}if(this._urlsToCacheKeys.set(i,o),this._urlsToCacheModes.set(i,s),n.length>0){const a=`Workbox is precaching URLs without revision info: ${n.join(", ")}
This is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(a)}}}install(e){return mt(e,async()=>{const n=new Vi;this.strategy.plugins.push(n);for(const[i,s]of this._urlsToCacheKeys){const a=this._cacheKeysToIntegrities.get(s),c=this._urlsToCacheModes.get(i),u=new Request(i,{integrity:a,cache:c,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:s},request:u,event:e}))}const{updatedURLs:r,notUpdatedURLs:o}=n;return{updatedURLs:r,notUpdatedURLs:o}})}activate(e){return mt(e,async()=>{const n=await self.caches.open(this.strategy.cacheName),r=await n.keys(),o=new Set(this._urlsToCacheKeys.values()),i=[];for(const s of r)o.has(s.url)||(await n.delete(s),i.push(s.url));return{deletedURLs:i}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const n=new URL(e,location.href);return this._urlsToCacheKeys.get(n.href)}getIntegrityForCacheKey(e){return this._cacheKeysToIntegrities.get(e)}async matchPrecache(e){const n=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(n);if(r)return(await self.caches.open(this.strategy.cacheName)).match(r)}createHandlerBoundToURL(e){const n=this.getCacheKeyForURL(e);if(!n)throw new p("non-precached-url",{url:e});return r=>(r.request=new Request(e),r.params=Object.assign({cacheKey:n},r.params),this.strategy.handle(r))}}let ye;const ze=()=>(ye||(ye=new Ji),ye);try{self["workbox:routing:7.2.0"]&&_()}catch{}const an="GET",X=t=>t&&typeof t=="object"?t:{handle:t};class L{constructor(e,n,r=an){this.handler=X(n),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=X(e)}}class Yi extends L{constructor(e,n,r){const o=({url:i})=>{const s=e.exec(i.href);if(s&&!(i.origin!==location.origin&&s.index!==0))return s.slice(1)};super(o,n,r)}}class Xi{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",e=>{const{request:n}=e,r=this.handleRequest({request:n,event:e});r&&e.respondWith(r)})}addCacheListener(){self.addEventListener("message",e=>{if(e.data&&e.data.type==="CACHE_URLS"){const{payload:n}=e.data,r=Promise.all(n.urlsToCache.map(o=>{typeof o=="string"&&(o=[o]);const i=new Request(...o);return this.handleRequest({request:i,event:e})}));e.waitUntil(r),e.ports&&e.ports[0]&&r.then(()=>e.ports[0].postMessage(!0))}})}handleRequest({request:e,event:n}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const o=r.origin===location.origin,{params:i,route:s}=this.findMatchingRoute({event:n,request:e,sameOrigin:o,url:r});let a=s&&s.handler;const c=e.method;if(!a&&this._defaultHandlerMap.has(c)&&(a=this._defaultHandlerMap.get(c)),!a)return;let u;try{u=a.handle({url:r,request:e,event:n,params:i})}catch(h){u=Promise.reject(h)}const l=s&&s.catchHandler;return u instanceof Promise&&(this._catchHandler||l)&&(u=u.catch(async h=>{if(l)try{return await l.handle({url:r,request:e,event:n,params:i})}catch(C){C instanceof Error&&(h=C)}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:n});throw h})),u}findMatchingRoute({url:e,sameOrigin:n,request:r,event:o}){const i=this._routes.get(r.method)||[];for(const s of i){let a;const c=s.match({url:e,sameOrigin:n,request:r,event:o});if(c)return a=c,(Array.isArray(a)&&a.length===0||c.constructor===Object&&Object.keys(c).length===0||typeof c=="boolean")&&(a=void 0),{route:s,params:a}}return{}}setDefaultHandler(e,n=an){this._defaultHandlerMap.set(n,X(e))}setCatchHandler(e){this._catchHandler=X(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new p("unregister-route-but-not-found-with-method",{method:e.method});const n=this._routes.get(e.method).indexOf(e);if(n>-1)this._routes.get(e.method).splice(n,1);else throw new p("unregister-route-route-not-registered")}}let F;const Qi=()=>(F||(F=new Xi,F.addFetchListener(),F.addCacheListener()),F);function cn(t,e,n){let r;if(typeof t=="string"){const i=new URL(t,location.href),s=({url:a})=>a.href===i.href;r=new L(s,e,n)}else if(t instanceof RegExp)r=new Yi(t,e,n);else if(typeof t=="function")r=new L(t,e,n);else if(t instanceof L)r=t;else throw new p("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});return Qi().registerRoute(r),r}function Zi(t,e=[]){for(const n of[...t.searchParams.keys()])e.some(r=>r.test(n))&&t.searchParams.delete(n);return t}function*es(t,{ignoreURLParametersMatching:e=[/^utm_/,/^fbclid$/],directoryIndex:n="index.html",cleanURLs:r=!0,urlManipulation:o}={}){const i=new URL(t,location.href);i.hash="",yield i.href;const s=Zi(i,e);if(yield s.href,n&&s.pathname.endsWith("/")){const a=new URL(s.href);a.pathname+=n,yield a.href}if(r){const a=new URL(s.href);a.pathname+=".html",yield a.href}if(o){const a=o({url:i});for(const c of a)yield c.href}}class ts extends L{constructor(e,n){const r=({request:o})=>{const i=e.getURLsToCacheKeys();for(const s of es(o.url,n)){const a=i.get(s);if(a){const c=e.getIntegrityForCacheKey(a);return{cacheKey:a,integrity:c}}}};super(r,e.strategy)}}function ns(t){const e=ze(),n=new ts(e,t);cn(n)}const rs="-precache-",os=async(t,e=rs)=>{const r=(await self.caches.keys()).filter(o=>o.includes(e)&&o.includes(self.registration.scope)&&o!==t);return await Promise.all(r.map(o=>self.caches.delete(o))),r};function is(){self.addEventListener("activate",t=>{const e=ie.getPrecacheName();t.waitUntil(os(e).then(n=>{}))})}function ss(t){return ze().createHandlerBoundToURL(t)}function as(t){ze().precache(t)}function cs(t,e){as(t),ns(e)}class ls extends L{constructor(e,{allowlist:n=[/./],denylist:r=[]}={}){super(o=>this._match(o),e),this._allowlist=n,this._denylist=r}_match({url:e,request:n}){if(n&&n.mode!=="navigate")return!1;const r=e.pathname+e.search;for(const o of this._denylist)if(o.test(r))return!1;return!!this._allowlist.some(o=>o.test(r))}}var us="firebase",ds="10.7.0";/**
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
 */S(us,ds,"app");/**
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
 */const fs="/firebase-messaging-sw.js",hs="/firebase-cloud-messaging-push-scope",ln="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",ps="https://fcmregistrations.googleapis.com/v1",un="google.c.a.c_id",gs="google.c.a.c_l",bs="google.c.a.ts",ms="google.c.a.e";var wt;(function(t){t[t.DATA_MESSAGE=1]="DATA_MESSAGE",t[t.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(wt||(wt={}));/**
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
 */function m(t){const e=new Uint8Array(t);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function ws(t){const e="=".repeat((4-t.length%4)%4),n=(t+e).replace(/\-/g,"+").replace(/_/g,"/"),r=atob(n),o=new Uint8Array(r.length);for(let i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}/**
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
 */const _e="fcm_token_details_db",ys=5,yt="fcm_token_object_Store";async function _s(t){if("databases"in indexedDB&&!(await indexedDB.databases()).map(i=>i.name).includes(_e))return null;let e=null;return(await W(_e,ys,{upgrade:async(r,o,i,s)=>{var a;if(o<2||!r.objectStoreNames.contains(yt))return;const c=s.objectStore(yt),u=await c.index("fcmSenderId").get(t);if(await c.clear(),!!u){if(o===2){const l=u;if(!l.auth||!l.p256dh||!l.endpoint)return;e={token:l.fcmToken,createTime:(a=l.createTime)!==null&&a!==void 0?a:Date.now(),subscriptionOptions:{auth:l.auth,p256dh:l.p256dh,endpoint:l.endpoint,swScope:l.swScope,vapidKey:typeof l.vapidKey=="string"?l.vapidKey:m(l.vapidKey)}}}else if(o===3){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:m(l.auth),p256dh:m(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:m(l.vapidKey)}}}else if(o===4){const l=u;e={token:l.fcmToken,createTime:l.createTime,subscriptionOptions:{auth:m(l.auth),p256dh:m(l.p256dh),endpoint:l.endpoint,swScope:l.swScope,vapidKey:m(l.vapidKey)}}}}}})).close(),await P(_e),await P("fcm_vapid_details_db"),await P("undefined"),vs(e)?e:null}function vs(t){if(!t||!t.subscriptionOptions)return!1;const{subscriptionOptions:e}=t;return typeof t.createTime=="number"&&t.createTime>0&&typeof t.token=="string"&&t.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const Is="firebase-messaging-database",Es=1,$="firebase-messaging-store";let ve=null;function Je(){return ve||(ve=W(Is,Es,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore($)}}})),ve}async function dn(t){const e=Xe(t),r=await(await Je()).transaction($).objectStore($).get(e);if(r)return r;{const o=await _s(t.appConfig.senderId);if(o)return await Ye(t,o),o}}async function Ye(t,e){const n=Xe(t),o=(await Je()).transaction($,"readwrite");return await o.objectStore($).put(e,n),await o.done,e}async function Ss(t){const e=Xe(t),r=(await Je()).transaction($,"readwrite");await r.objectStore($).delete(e),await r.done}function Xe({appConfig:t}){return t.appId}/**
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
 */const Ts={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},f=new H("messaging","Messaging",Ts);/**
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
 */async function ks(t,e){const n=await Ze(t),r=hn(e),o={method:"POST",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(Qe(t.appConfig),o)).json()}catch(s){throw f.create("token-subscribe-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw f.create("token-subscribe-failed",{errorInfo:s})}if(!i.token)throw f.create("token-subscribe-no-token");return i.token}async function Cs(t,e){const n=await Ze(t),r=hn(e.subscriptionOptions),o={method:"PATCH",headers:n,body:JSON.stringify(r)};let i;try{i=await(await fetch(`${Qe(t.appConfig)}/${e.token}`,o)).json()}catch(s){throw f.create("token-update-failed",{errorInfo:s==null?void 0:s.toString()})}if(i.error){const s=i.error.message;throw f.create("token-update-failed",{errorInfo:s})}if(!i.token)throw f.create("token-update-no-token");return i.token}async function fn(t,e){const r={method:"DELETE",headers:await Ze(t)};try{const i=await(await fetch(`${Qe(t.appConfig)}/${e}`,r)).json();if(i.error){const s=i.error.message;throw f.create("token-unsubscribe-failed",{errorInfo:s})}}catch(o){throw f.create("token-unsubscribe-failed",{errorInfo:o==null?void 0:o.toString()})}}function Qe({projectId:t}){return`${ps}/projects/${t}/registrations`}async function Ze({appConfig:t,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function hn({p256dh:t,auth:e,endpoint:n,vapidKey:r}){const o={web:{endpoint:n,auth:e,p256dh:t}};return r!==ln&&(o.web.applicationPubKey=r),o}/**
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
 */const Ds=7*24*60*60*1e3;async function As(t){const e=await Os(t.swRegistration,t.vapidKey),n={vapidKey:t.vapidKey,swScope:t.swRegistration.scope,endpoint:e.endpoint,auth:m(e.getKey("auth")),p256dh:m(e.getKey("p256dh"))},r=await dn(t.firebaseDependencies);if(r){if(Ms(r.subscriptionOptions,n))return Date.now()>=r.createTime+Ds?Rs(t,{token:r.token,createTime:Date.now(),subscriptionOptions:n}):r.token;try{await fn(t.firebaseDependencies,r.token)}catch(o){console.warn(o)}return _t(t.firebaseDependencies,n)}else return _t(t.firebaseDependencies,n)}async function pn(t){const e=await dn(t.firebaseDependencies);e&&(await fn(t.firebaseDependencies,e.token),await Ss(t.firebaseDependencies));const n=await t.swRegistration.pushManager.getSubscription();return n?n.unsubscribe():!0}async function Rs(t,e){try{const n=await Cs(t.firebaseDependencies,e),r=Object.assign(Object.assign({},e),{token:n,createTime:Date.now()});return await Ye(t.firebaseDependencies,r),n}catch(n){throw await pn(t),n}}async function _t(t,e){const r={token:await ks(t,e),createTime:Date.now(),subscriptionOptions:e};return await Ye(t,r),r.token}async function Os(t,e){const n=await t.pushManager.getSubscription();return n||t.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:ws(e)})}function Ms(t,e){const n=e.vapidKey===t.vapidKey,r=e.endpoint===t.endpoint,o=e.auth===t.auth,i=e.p256dh===t.p256dh;return n&&r&&o&&i}/**
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
 */function vt(t){const e={from:t.from,collapseKey:t.collapse_key,messageId:t.fcmMessageId};return Ns(e,t),$s(e,t),Ps(e,t),e}function Ns(t,e){if(!e.notification)return;t.notification={};const n=e.notification.title;n&&(t.notification.title=n);const r=e.notification.body;r&&(t.notification.body=r);const o=e.notification.image;o&&(t.notification.image=o);const i=e.notification.icon;i&&(t.notification.icon=i)}function $s(t,e){e.data&&(t.data=e.data)}function Ps(t,e){var n,r,o,i,s;if(!e.fcmOptions&&!(!((n=e.notification)===null||n===void 0)&&n.click_action))return;t.fcmOptions={};const a=(o=(r=e.fcmOptions)===null||r===void 0?void 0:r.link)!==null&&o!==void 0?o:(i=e.notification)===null||i===void 0?void 0:i.click_action;a&&(t.fcmOptions.link=a);const c=(s=e.fcmOptions)===null||s===void 0?void 0:s.analytics_label;c&&(t.fcmOptions.analyticsLabel=c)}/**
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
 */function Ls(t){return typeof t=="object"&&!!t&&un in t}/**
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
 */gn("hts/frbslgigp.ogepscmv/ieo/eaylg","tp:/ieaeogn-agolai.o/1frlglgc/o");gn("AzSCbw63g1R0nCw85jG8","Iaya3yLKwmgvh7cF0q4");function gn(t,e){const n=[];for(let r=0;r<t.length;r++)n.push(t.charAt(r)),r<e.length&&n.push(e.charAt(r));return n.join("")}/**
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
 */function Bs(t){if(!t||!t.options)throw Ie("App Configuration Object");if(!t.name)throw Ie("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=t;for(const r of e)if(!n[r])throw Ie(r);return{appName:t.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Ie(t){return f.create("missing-app-config-values",{valueName:t})}/**
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
 */class xs{constructor(e,n,r){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const o=Bs(e);this.firebaseDependencies={app:e,appConfig:o,installations:n,analyticsProvider:r}}_delete(){return Promise.resolve()}}/**
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
 */async function bn(t){try{t.swRegistration=await navigator.serviceWorker.register(fs,{scope:hs}),t.swRegistration.update().catch(()=>{})}catch(e){throw f.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}/**
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
 */async function js(t,e){if(!e&&!t.swRegistration&&await bn(t),!(!e&&t.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration");t.swRegistration=e}}/**
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
 */async function Fs(t,e){e?t.vapidKey=e:t.vapidKey||(t.vapidKey=ln)}/**
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
 */async function mn(t,e){if(!navigator)throw f.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw f.create("permission-blocked");return await Fs(t,e==null?void 0:e.vapidKey),await js(t,e==null?void 0:e.serviceWorkerRegistration),As(t)}/**
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
 */async function Us(t,e,n){const r=Ks(e);(await t.firebaseDependencies.analyticsProvider.get()).logEvent(r,{message_id:n[un],message_name:n[gs],message_time:n[bs],message_device_time:Math.floor(Date.now()/1e3)})}function Ks(t){switch(t){case K.NOTIFICATION_CLICKED:return"notification_open";case K.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function Hs(t,e){const n=e.data;if(!n.isFirebaseMessaging)return;t.onMessageHandler&&n.messageType===K.PUSH_RECEIVED&&(typeof t.onMessageHandler=="function"?t.onMessageHandler(vt(n)):t.onMessageHandler.next(vt(n)));const r=n.data;Ls(r)&&r[ms]==="1"&&await Us(t,n.messageType,r)}const It="@firebase/messaging",Et="0.12.5";/**
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
 */const Ws=t=>{const e=new xs(t.getProvider("app").getImmediate(),t.getProvider("installations-internal").getImmediate(),t.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>Hs(e,n)),e},Vs=t=>{const e=t.getProvider("messaging").getImmediate();return{getToken:r=>mn(e,r)}};function qs(){k(new v("messaging",Ws,"PUBLIC")),k(new v("messaging-internal",Vs,"PRIVATE")),S(It,Et),S(It,Et,"esm2017")}/**
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
 */async function Gs(){try{await Pe()}catch{return!1}return typeof window<"u"&&$e()&&Nn()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */async function zs(t){if(!navigator)throw f.create("only-available-in-window");return t.swRegistration||await bn(t),pn(t)}/**
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
 */function Js(t,e){if(!navigator)throw f.create("only-available-in-window");return t.onMessageHandler=e,()=>{t.onMessageHandler=null}}/**
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
 */function Ys(t=Ot()){return Gs().then(e=>{if(!e)throw f.create("unsupported-browser")},e=>{throw f.create("indexed-db-unsupported")}),ne(x(t),"messaging").getImmediate()}async function wn(t,e){return t=x(t),mn(t,e)}function Xs(t){return t=x(t),zs(t)}function Qs(t,e){return t=x(t),Js(t,e)}qs();const Zs={apiKey:"AIzaSyAH2JIEEwn9GfYpfzlTpvUW4s0LD_iRwJQ",authDomain:"silbo-patient-transport.firebaseapp.com",projectId:"silbo-patient-transport",storageBucket:"silbo-patient-transport.firebasestorage.app",messagingSenderId:"27523190820",appId:"1:27523190820:web:6dcd16ac7bf6ff72e008b1"},ea="BFs1O-6MsXDwy0GEZwqDZiKaToqjiAJ23MIuZTYBtj8k0Psr9NqTv4CTwlQJY5oCJYR4RmO7FhsMfeS0k0iMaBs";let Ee;function yn(){return Ee||(Ee=Rt(Zs)),Ee}yn();const Q=Ys(),_n="token_div",vn="permission_div";Qs(Q,t=>{console.log("Message received. ",t),ia(t)});async function et(){sa(),Z("loading..."),wn(Q,{vapidKey:ea,serviceWorkerRegistration:await navigator.serviceWorker.ready}).then(t=>{t?(ta(t),aa(t)):(console.log("No registration token available. Request permission to generate one."),ca(),ee(!1))}).catch(t=>{console.log("An error occurred while retrieving token. ",t),Z("Error retrieving registration token."),ee(!1)})}function Z(t){const e=document.querySelector("#token");e.textContent=t}function ta(t){na()?console.log("Token already sent to server so won't send it again unless it changes"):(console.log("Sending token to server...",t),ee(!0))}function na(){return window.localStorage.getItem("sentToServer")==="1"}function ee(t){window.localStorage.setItem("sentToServer",t?"1":"0")}function te(t,e){const n=document.querySelector("#"+t);e?n.style.display="block":n.style.display="none"}function ra(){console.log("Requesting permission..."),Notification.requestPermission().then(t=>{console.log("Permission: ",t),t==="granted"?(console.log("Notification permission granted."),et()):console.log("Unable to get permission to notify.")})}function oa(){wn(Q).then(t=>{Xs(Q).then(()=>{console.log("Token deleted.",t),ee(!1),et()}).catch(e=>{console.log("Unable to delete token. ",e)})}).catch(t=>{console.log("Error retrieving registration token. ",t),Z("Error retrieving registration token.")})}function ia(t){const e=document.querySelector("#messages"),n=document.createElement("h5"),r=document.createElement("pre");r.style.overflowX="hidden;",n.textContent="Received message:",r.textContent=JSON.stringify(t,null,2),e.appendChild(n),e.appendChild(r)}function sa(){const t=document.querySelector("#messages");for(;t.hasChildNodes();)t.removeChild(t.lastChild)}function aa(t){te(_n,!0),te(vn,!1),Z(t)}function ca(){te(_n,!1),te(vn,!0)}document.getElementById("request-permission-button").addEventListener("click",ra);document.getElementById("delete-token-button").addEventListener("click",oa);et();self.skipWaiting();Ki();cs([{"revision":null,"url":"assets/index-c0a81165.css"},{"revision":"d5df3019e38f02a41c6753a07967a7f7","url":"firebase-messaging-sw.js"},{"revision":"f49e7da675b9ddb49420d5c58d8e6f8c","url":"index.html"},{"revision":"68248e7b87ffed573c12aa996436d7d0","url":"index.js"},{"revision":"1872c500de691dce40960bb85481de07","url":"registerSW.js"},{"revision":"4b092b9b8ffb068aa2367cca69f33cba","url":"manifest.webmanifest"}]);is();try{cn(new ls(ss("index.html"),{allowlist:[/^\/$/]}))}catch(t){console.warn("Error while registering cache route (this error is expected in dev mode)",{error:t})}yn();const la=Ai();Ri(la,t=>{t.notification||self.registration.showNotification("Background Message Title",{body:"Background Message body.",icon:"/firebase-logo.png"})});
