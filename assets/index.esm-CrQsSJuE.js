import{w as pe,e as fe,o as he,L as ge,F as me,h as Ee,k as Oe,Q as Re,r as Y,V as _e}from"./index.esm-hEz25Bw9.js";var K="@firebase/ai",F="2.16.0";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A="AI",ye="us-central1",Ie="global",Se="firebasevertexai.googleapis.com",N="v1beta",W=F,Te="gl-js",Ae="hybrid",we=180*1e3,Ce="gemini-2.5-flash-lite";/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l extends me{constructor(e,n,s){const o=A,i=`${o}/${e}`,a=`${o}: ${n} (${i})`;super(e,a),this.code=e,this.customErrorData=s,Error.captureStackTrace&&Error.captureStackTrace(this,l),Object.setPrototypeOf(this,l.prototype),this.toString=()=>a}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=["user","model","function","system"],oe={HARM_SEVERITY_UNSUPPORTED:"HARM_SEVERITY_UNSUPPORTED"},E={SAFETY:"SAFETY",RECITATION:"RECITATION",BLOCKLIST:"BLOCKLIST",PROHIBITED_CONTENT:"PROHIBITED_CONTENT",SPII:"SPII",MALFORMED_FUNCTION_CALL:"MALFORMED_FUNCTION_CALL",IMAGE_SAFETY:"IMAGE_SAFETY",IMAGE_PROHIBITED_CONTENT:"IMAGE_PROHIBITED_CONTENT",IMAGE_OTHER:"IMAGE_OTHER",NO_IMAGE:"NO_IMAGE",IMAGE_RECITATION:"IMAGE_RECITATION",LANGUAGE:"LANGUAGE",UNEXPECTED_TOOL_CALL:"UNEXPECTED_TOOL_CALL",TOO_MANY_TOOL_CALLS:"TOO_MANY_TOOL_CALLS",MISSING_THOUGHT_SIGNATURE:"MISSING_THOUGHT_SIGNATURE",MALFORMED_RESPONSE:"MALFORMED_RESPONSE"},_={PREFER_ON_DEVICE:"prefer_on_device",ONLY_ON_DEVICE:"only_on_device",ONLY_IN_CLOUD:"only_in_cloud",PREFER_IN_CLOUD:"prefer_in_cloud"},S={ON_DEVICE:"on_device",IN_CLOUD:"in_cloud"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={ERROR:"error",REQUEST_ERROR:"request-error",RESPONSE_ERROR:"response-error",FETCH_ERROR:"fetch-error",SESSION_CLOSED:"session-closed",INVALID_CONTENT:"invalid-content",API_NOT_ENABLED:"api-not-enabled",INVALID_SCHEMA:"invalid-schema",NO_API_KEY:"no-api-key",NO_APP_ID:"no-app-id",NO_MODEL:"no-model",NO_PROJECT_ID:"no-project-id",PARSE_FAILED:"parse-failed",UNSUPPORTED:"unsupported"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={STRING:"string",NUMBER:"number",INTEGER:"integer",BOOLEAN:"boolean",ARRAY:"array",OBJECT:"object"};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y={AGENT_PLATFORM:"AGENT_PLATFORM",VERTEX_AI:"VERTEX_AI",GOOGLE_AI:"GOOGLE_AI"};/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.backendType=e}}class $ extends G{constructor(){super(y.GOOGLE_AI)}_getModelPath(e,n){return`/${N}/projects/${e}/${n}`}_getTemplatePath(e,n){return`/${N}/projects/${e}/templates/${n}`}}class U extends G{constructor(e){super(y.VERTEX_AI),this.location=ye,e&&(this.location=e)}_getModelPath(e,n){return`/${N}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${N}/projects/${e}/locations/${this.location}/templates/${n}`}}class V extends G{constructor(e){super(y.AGENT_PLATFORM),this.location=Ie,e&&(this.location=e)}_getModelPath(e,n){return`/${N}/projects/${e}/locations/${this.location}/${n}`}_getTemplatePath(e,n){return`/${N}/projects/${e}/locations/${this.location}/templates/${n}`}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(t){if(t instanceof $)return`${A}/googleai`;if(t instanceof U)return`${A}/vertexai/${t.location}`;if(t instanceof V)return`${A}/agentplatform/${t.location}`;throw new l(c.ERROR,`Invalid backend: ${JSON.stringify(t.backendType)}`)}function be(t){const e=t.split("/");if(e[0]!==A)throw new l(c.ERROR,`Invalid instance identifier, unknown prefix '${e[0]}'`);switch(e[1]){case"vertexai":const s=e[2];if(!s)throw new l(c.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new U(s);case"agentplatform":const o=e[2];if(!o)throw new l(c.ERROR,`Invalid instance identifier, unknown location '${t}'`);return new V(o);case"googleai":return new $;default:throw new l(c.ERROR,`Invalid instance identifier string: '${t}'`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=new ge("@firebase/vertexai");var I;(function(t){t.UNAVAILABLE="unavailable",t.DOWNLOADABLE="downloadable",t.DOWNLOADING="downloading",t.AVAILABLE="available"})(I||(I={}));/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={type:"text",languages:["en"]},M=[ie,{type:"image"}],v=[ie];class R{constructor(e,n,s){this.languageModelProvider=e,this.mode=n,this.downloadPromise=null,this.onDeviceParams={createOptions:{expectedInputs:M,expectedOutputs:v}},s&&(this.onDeviceParams=s,this.onDeviceParams.createOptions?(this.onDeviceParams.createOptions.expectedInputs||(this.onDeviceParams.createOptions.expectedInputs=M),this.onDeviceParams.createOptions.expectedOutputs||(this.onDeviceParams.createOptions.expectedOutputs=v)):this.onDeviceParams.createOptions={expectedInputs:M,expectedOutputs:v})}async isAvailable(e){var s;if(!this.mode)return h.debug("On-device inference unavailable because mode is undefined."),!1;if(this.mode===_.ONLY_IN_CLOUD)return h.debug('On-device inference unavailable because mode is "only_in_cloud".'),!1;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));if(this.mode===_.ONLY_ON_DEVICE){if(n===I.UNAVAILABLE)throw new l(c.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(n===I.DOWNLOADABLE||n===I.DOWNLOADING){h.debug("Waiting for download of LanguageModel to complete.");try{await this.downloadPromise}catch(o){throw new l(c.ERROR,o.message)}return!0}return!0}return n!==I.AVAILABLE?(h.debug(`On-device inference unavailable because availability is "${n}".`),!1):R.isOnDeviceRequest(e)?!0:(h.debug("On-device inference unavailable because request is incompatible."),!1)}async generateContent(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(R.toLanguageModelMessage)),o=await n.prompt(s,this.onDeviceParams.promptOptions);return R.toResponse(o)}async generateContentStream(e){const n=await this.createSession(),s=await Promise.all(e.contents.map(R.toLanguageModelMessage)),o=n.promptStreaming(s,this.onDeviceParams.promptOptions);return R.toStreamResponse(o)}async countTokens(e){throw new l(c.REQUEST_ERROR,"Count Tokens is not yet available for on-device model.")}static isOnDeviceRequest(e){if(e.contents.length===0)return h.debug("Empty prompt rejected for on-device inference."),!1;for(const n of e.contents){if(n.parts.some(s=>"functionResponse"in s))return h.debug("Content with a function response part rejected for on-device inference."),!1;for(const s of n.parts)if(s.inlineData&&R.SUPPORTED_MIME_TYPES.indexOf(s.inlineData.mimeType)===-1)return h.debug(`Unsupported mime type "${s.inlineData.mimeType}" rejected for on-device inference.`),!1}return!0}async downloadIfAvailable(e){var s;const n=await((s=this.languageModelProvider)==null?void 0:s.availability(this.onDeviceParams.createOptions));return(n===I.DOWNLOADABLE||n===I.DOWNLOADING)&&this.download(e),n}download(e){var s;if(this.downloadPromise)return;const n={...this.onDeviceParams.createOptions};n&&!n.monitor&&e&&(n.monitor=o=>{o.addEventListener("downloadprogress",i=>{e(i.loaded)})}),this.downloadPromise=(s=this.languageModelProvider)==null?void 0:s.create(n).finally(()=>{this.downloadPromise=null})}static async toLanguageModelMessage(e){const n=await Promise.all(e.parts.map(R.toLanguageModelMessageContent));return{role:R.toLanguageModelMessageRole(e.role),content:n}}static async toLanguageModelMessageContent(e){if(e.text)return{type:"text",value:e.text};if(e.inlineData){const s=await(await fetch(`data:${e.inlineData.mimeType};base64,${e.inlineData.data}`)).blob();return{type:"image",value:await createImageBitmap(s)}}throw new l(c.REQUEST_ERROR,"Processing of this Part type is not currently supported.")}static toLanguageModelMessageRole(e){return e==="model"?"assistant":"user"}async createSession(){if(!this.languageModelProvider)throw new l(c.UNSUPPORTED,"Chrome AI requested for unsupported browser version.");const e=await this.languageModelProvider.create(this.onDeviceParams.createOptions);return this.oldSession&&this.oldSession.destroy(),this.oldSession=e,e}static toResponse(e){return{json:async()=>({candidates:[{content:{parts:[{text:e}]}}]})}}static toStreamResponse(e){const n=new TextEncoder;return{body:e.pipeThrough(new TransformStream({transform(s,o){const i=JSON.stringify({candidates:[{content:{role:"model",parts:[{text:s}]}}]});o.enqueue(n.encode(`data: ${i}

`))}}))}}}R.SUPPORTED_MIME_TYPES=["image/jpeg","image/png"];function Pe(t,e,n){const o=(e||_e()).LanguageModel;if(o&&t)return new R(o,t,n)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,s,o,i){this.app=e,this.backend=n,this.chromeAdapterFactory=i;const a=o==null?void 0:o.getImmediate({optional:!0}),r=s==null?void 0:s.getImmediate({optional:!0});this.auth=r||null,this.appCheck=a||null,n instanceof U||n instanceof V?this.location=n.location:this.location=""}_delete(){return Promise.resolve()}set options(e){this._options=e}get options(){return this._options}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,{instanceIdentifier:e}){if(!e)throw new l(c.ERROR,"AIService instance identifier is undefined.");const n=be(e),s=t.getProvider("app").getImmediate(),o=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new Le(s,n,o,i,Pe)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(t){var n,s,o,i,a,r,u;if((s=(n=t.app)==null?void 0:n.options)!=null&&s.apiKey)if((i=(o=t.app)==null?void 0:o.options)!=null&&i.projectId){if(!((r=(a=t.app)==null?void 0:a.options)!=null&&r.appId))throw new l(c.NO_APP_ID,'The "appId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid app ID.')}else throw new l(c.NO_PROJECT_ID,'The "projectId" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid project ID.');else throw new l(c.NO_API_KEY,'The "apiKey" field is empty in the local Firebase config. Firebase AI requires this field to contain a valid API key.');const e={apiKey:t.app.options.apiKey,project:t.app.options.projectId,appId:t.app.options.appId,automaticDataCollectionEnabled:t.app.automaticDataCollectionEnabled,location:t.location,backend:t.backend};if(Ee(t.app)&&t.app.settings.appCheckToken){const d=t.app.settings.appCheckToken;e.getAppCheckToken=()=>Promise.resolve({token:d})}else t.appCheck&&((u=t.options)!=null&&u.useLimitedUseAppCheckTokens?e.getAppCheckToken=()=>t.appCheck.getLimitedUseToken():e.getAppCheckToken=()=>t.appCheck.getToken());return t.auth&&(e.getAuthToken=()=>t.auth.getToken()),e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{constructor(e,n){this._apiSettings=Me(e),this.model=P.normalizeModelName(n,this._apiSettings.backend.backendType)}static normalizeModelName(e,n){return n===y.GOOGLE_AI?P.normalizeGoogleAIModelName(e):P.normalizeVertexAIModelName(e)}static normalizeGoogleAIModelName(e){return`models/${e}`}static normalizeVertexAIModelName(e){let n;return e.includes("/")?e.startsWith("models/")?n=`publishers/google/${e}`:n=e:n=`publishers/google/models/${e}`,n}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ve="Timeout has expired.",k="AbortError";class ke{constructor(e){this.params=e}toString(){const e=new URL(this.baseUrl);return e.pathname=this.pathname,e.search=this.queryParams.toString(),e.toString()}get pathname(){return this.params.templateId?`${this.params.apiSettings.backend._getTemplatePath(this.params.apiSettings.project,this.params.templateId)}:${this.params.task}`:`${this.params.apiSettings.backend._getModelPath(this.params.apiSettings.project,this.params.model)}:${this.params.task}`}get baseUrl(){var e;return((e=this.params.singleRequestOptions)==null?void 0:e.baseUrl)??`https://${Se}`}get queryParams(){const e=new URLSearchParams;return this.params.stream&&e.set("alt","sse"),e}}function xe(t){const e=[];return e.push(`${Te}/${W}`),e.push(`fire/${W}`),(t.params.apiSettings.inferenceMode===_.PREFER_ON_DEVICE||t.params.apiSettings.inferenceMode===_.PREFER_IN_CLOUD)&&e.push(Ae),e.join(" ")}async function Fe(t){const e=new Headers;if(e.append("Content-Type","application/json"),e.append("x-goog-api-client",xe(t)),e.append("x-goog-api-key",t.params.apiSettings.apiKey),t.params.apiSettings.automaticDataCollectionEnabled&&e.append("X-Firebase-Appid",t.params.apiSettings.appId),t.params.apiSettings.getAppCheckToken){const n=await t.params.apiSettings.getAppCheckToken();n&&(e.append("X-Firebase-AppCheck",n.token),n.error&&h.warn(`Unable to obtain a valid App Check token: ${n.error.message}`))}if(t.params.apiSettings.getAuthToken){const n=await t.params.apiSettings.getAuthToken();n&&e.append("Authorization",`Firebase ${n.accessToken}`)}return e}async function B(t,e){var d,g;const n=new ke(t);let s;const o=(d=t.singleRequestOptions)==null?void 0:d.signal,i=((g=t.singleRequestOptions)==null?void 0:g.timeout)!=null&&t.singleRequestOptions.timeout>=0?t.singleRequestOptions.timeout:we,a=new AbortController,r=setTimeout(()=>{a.abort(new DOMException(ve,k)),h.debug(`Aborting request to ${n} due to timeout (${i}ms)`)},i),u=AbortSignal.any(o?[o,a.signal]:[a.signal]);if(o&&o.aborted)throw clearTimeout(r),new DOMException(o.reason??"Aborted externally before fetch",k);try{const p={method:"POST",headers:await Fe(n),signal:u,body:e};if(s=await fetch(n.toString(),p),!s.ok){let O="",f;try{const m=await s.json();O=m.error.message,m.error.details&&(O+=` ${JSON.stringify(m.error.details)}`,f=m.error.details)}catch{}throw s.status===403&&f&&f.some(m=>m.reason==="SERVICE_DISABLED")&&f.some(m=>{var q,J;return(J=(q=m.links)==null?void 0:q[0])==null?void 0:J.description.includes("Google developers console API activation")})?new l(c.API_NOT_ENABLED,`The Firebase AI SDK requires the Firebase AI API ('firebasevertexai.googleapis.com') to be enabled in your Firebase project. Enable this API by visiting the Firebase Console at https://console.firebase.google.com/project/${n.params.apiSettings.project}/ailogic/ and clicking "Get started". If you enabled this API recently, wait a few minutes for the action to propagate to our systems and then retry.`,{status:s.status,statusText:s.statusText,errorDetails:f}):new l(c.FETCH_ERROR,`Error fetching from ${n}: [${s.status} ${s.statusText}] ${O}`,{status:s.status,statusText:s.statusText,errorDetails:f})}}catch(p){let O=p;throw p.code!==c.FETCH_ERROR&&p.code!==c.API_NOT_ENABLED&&p instanceof Error&&p.name!==k&&(O=new l(c.ERROR,`Error fetching from ${n.toString()}: ${p.message}`),O.stack=p.stack),O}finally{clearTimeout(r)}return s}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t){if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&h.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),re(t.candidates[0]))throw new l(c.RESPONSE_ERROR,`Response error: ${T(t)}. Response body stored in error.response`,{response:t});return!0}else return!1}function D(t,e=S.IN_CLOUD){t.candidates&&!t.candidates[0].hasOwnProperty("index")&&(t.candidates[0].index=0);const n=Ge(t);return n.inferenceSource=e,n}function Ge(t){return t.text=()=>{if(L(t))return z(t,e=>!e.thought);if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Text not available. ${T(t)}`,{response:t});return""},t.thoughtSummary=()=>{if(L(t)){const e=z(t,n=>!!n.thought);return e===""?void 0:e}else if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Thought summary not available. ${T(t)}`,{response:t})},t.inlineDataParts=()=>{if(L(t))return $e(t);if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Data not available. ${T(t)}`,{response:t})},t.functionCalls=()=>{if(L(t))return ae(t);if(t.promptFeedback)throw new l(c.RESPONSE_ERROR,`Function call not available. ${T(t)}`,{response:t})},t}function z(t,e){var s,o,i,a;const n=[];if((o=(s=t.candidates)==null?void 0:s[0].content)!=null&&o.parts)for(const r of(a=(i=t.candidates)==null?void 0:i[0].content)==null?void 0:a.parts)r.text&&e(r)&&n.push(r.text);return n.length>0?n.join(""):""}function ae(t){var n,s,o,i;if(!t)return;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(i=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:i.parts)a.functionCall&&e.push(a.functionCall);if(e.length>0)return e}function $e(t){var n,s,o,i;const e=[];if((s=(n=t.candidates)==null?void 0:n[0].content)!=null&&s.parts)for(const a of(i=(o=t.candidates)==null?void 0:o[0].content)==null?void 0:i.parts)a.inlineData&&e.push(a);if(e.length>0)return e}const Ue=[E.RECITATION,E.SAFETY,E.BLOCKLIST,E.PROHIBITED_CONTENT,E.SPII,E.MALFORMED_FUNCTION_CALL,E.IMAGE_SAFETY,E.IMAGE_PROHIBITED_CONTENT,E.IMAGE_OTHER,E.NO_IMAGE,E.IMAGE_RECITATION,E.LANGUAGE,E.UNEXPECTED_TOOL_CALL,E.TOO_MANY_TOOL_CALLS,E.MISSING_THOUGHT_SIGNATURE,E.MALFORMED_RESPONSE];function re(t){return!!t.finishReason&&Ue.some(e=>e===t.finishReason)}function T(t){var n,s,o;let e="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)e+="Response was blocked",(n=t.promptFeedback)!=null&&n.blockReason&&(e+=` due to ${t.promptFeedback.blockReason}`),(s=t.promptFeedback)!=null&&s.blockReasonMessage&&(e+=`: ${t.promptFeedback.blockReasonMessage}`);else if((o=t.candidates)!=null&&o[0]){const i=t.candidates[0];re(i)&&(e+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(e+=`: ${i.finishMessage}`))}return e}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(t){var e,n;if((e=t.safetySettings)==null||e.forEach(s=>{if(s.method)throw new l(c.UNSUPPORTED,"SafetySetting.method is not supported in the the Gemini Developer API. Please remove this property.")}),(n=t.generationConfig)!=null&&n.topK){const s=Math.round(t.generationConfig.topK);s!==t.generationConfig.topK&&(h.warn("topK in GenerationConfig has been rounded to the nearest integer to match the format for requests to the Gemini Developer API."),t.generationConfig.topK=s)}return t}function j(t){return{candidates:t.candidates?Be(t.candidates):void 0,prompt:t.promptFeedback?je(t.promptFeedback):void 0,usageMetadata:t.usageMetadata}}function Ve(t,e){return{generateContentRequest:{model:e,...t}}}function Be(t){const e=[];let n;return e&&t.forEach(s=>{var a,r;let o;if(s.citationMetadata&&(o={citations:s.citationMetadata.citationSources}),s.safetyRatings&&(n=s.safetyRatings.map(u=>({...u,severity:u.severity??oe.HARM_SEVERITY_UNSUPPORTED,probabilityScore:u.probabilityScore??0,severityScore:u.severityScore??0}))),(r=(a=s.content)==null?void 0:a.parts)!=null&&r.some(u=>u==null?void 0:u.videoMetadata))throw new l(c.UNSUPPORTED,"Part.videoMetadata is not supported in the Gemini Developer API. Please remove this property.");const i={index:s.index,content:s.content,finishReason:s.finishReason,finishMessage:s.finishMessage,safetyRatings:n,citationMetadata:o,groundingMetadata:s.groundingMetadata,urlContextMetadata:s.urlContextMetadata};e.push(i)}),e}function je(t){const e=[];return t.safetyRatings.forEach(s=>{e.push({category:s.category,probability:s.probability,severity:s.severity??oe.HARM_SEVERITY_UNSUPPORTED,probabilityScore:s.probabilityScore??0,severityScore:s.severityScore??0,blocked:s.blocked})}),{blockReason:t.blockReason,safetyRatings:e,blockReasonMessage:t.blockReasonMessage}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;async function He(t,e,n){const s=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),o=Ke(s),[i,a]=o.tee(),{response:r,firstValue:u}=await qe(a,e,n);return{stream:Ye(i,e,n),response:r,firstValue:u}}async function qe(t,e,n){const[s,o]=t.tee(),i=s.getReader(),{value:a}=await i.read();return{firstValue:a,response:Je(o,e,n)}}async function Je(t,e,n){const s=[],o=t.getReader();for(;;){const{done:i,value:a}=await o.read();if(i){let r=We(s);return e.backend.backendType===y.GOOGLE_AI&&(r=j(r)),D(r,n)}s.push(a)}}async function*Ye(t,e,n){var o,i;const s=t.getReader();for(;;){const{value:a,done:r}=await s.read();if(r)break;let u;e.backend.backendType===y.GOOGLE_AI?u=D(j(a),n):u=D(a,n);const d=(o=u.candidates)==null?void 0:o[0];!((i=d==null?void 0:d.content)!=null&&i.parts)&&!(d!=null&&d.finishReason)&&!(d!=null&&d.citationMetadata)&&!(d!=null&&d.urlContextMetadata)||(yield u)}}function Ke(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new l(c.PARSE_FAILED,"Failed to parse stream"));return}s.close();return}o+=a;let u=o.match(Q),d;for(;u;){try{d=JSON.parse(u[1])}catch{s.error(new l(c.PARSE_FAILED,`Error parsing JSON response: "${u[1]}`));return}s.enqueue(d),o=o.substring(u[0].length),u=o.match(Q)}return i()})}}})}function We(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t)if(s.candidates)for(const o of s.candidates){const i=o.index||0;n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,n.candidates[i].groundingMetadata=o.groundingMetadata;const a=o.urlContextMetadata;if(typeof a=="object"&&a!==null&&Object.keys(a).length>0&&(n.candidates[i].urlContextMetadata=a),o.content){if(!o.content.parts)continue;n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});for(const r of o.content.parts){const u={...r};r.text!==""&&Object.keys(u).length>0&&n.candidates[i].content.parts.push(u)}}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=[c.FETCH_ERROR,c.ERROR,c.API_NOT_ENABLED];async function le(t,e,n,s){if(!e)return{response:await s(),inferenceSource:S.IN_CLOUD};switch(e.mode){case _.ONLY_ON_DEVICE:if(await e.isAvailable(t))return{response:await n(),inferenceSource:S.ON_DEVICE};throw new l(c.UNSUPPORTED,"Inference mode is ONLY_ON_DEVICE, but an on-device model is not available.");case _.ONLY_IN_CLOUD:return{response:await s(),inferenceSource:S.IN_CLOUD};case _.PREFER_IN_CLOUD:try{return{response:await s(),inferenceSource:S.IN_CLOUD}}catch(o){if(o instanceof l&&Xe.includes(o.code)&&await e.isAvailable(t))return{response:await n(),inferenceSource:S.ON_DEVICE};throw o}case _.PREFER_ON_DEVICE:return await e.isAvailable(t)?{response:await n(),inferenceSource:S.ON_DEVICE}:{response:await s(),inferenceSource:S.IN_CLOUD};default:throw new l(c.ERROR,`Unexpected infererence mode: ${e.mode}`)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ze(t,e,n,s){return t.backend.backendType===y.GOOGLE_AI&&(n=ce(n)),B({task:"streamGenerateContent",model:e,apiSettings:t,stream:!0,singleRequestOptions:s},JSON.stringify(n))}async function ue(t,e,n,s,o){const i=await le(n,s,()=>s.generateContentStream(n),()=>ze(t,e,n,o));return He(i.response,t,i.inferenceSource)}async function Qe(t,e,n,s){return t.backend.backendType===y.GOOGLE_AI&&(n=ce(n)),B({model:e,task:"generateContent",apiSettings:t,stream:!1,singleRequestOptions:s},JSON.stringify(n))}async function de(t,e,n,s,o){const i=await le(n,s,()=>s.generateContent(n),()=>Qe(t,e,n,o)),a=await Ze(i.response,t);return{response:D(a,i.inferenceSource)}}async function Ze(t,e){const n=await t.json();return e.backend.backendType===y.GOOGLE_AI?j(n):n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function b(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return et(e)}function et(t){const e={role:"user",parts:[]};let n=!1,s=!1;for(const o of t)"functionResponse"in o?s=!0:n=!0,e.parts.push(o);if(n&&s)throw new l(c.INVALID_CONTENT,"Within a single message, FunctionResponse cannot be mixed with other type of Part in the request for sending chat message.");if(!n&&!s)throw new l(c.INVALID_CONTENT,"No Content is provided for sending chat message.");return e}function x(t){let e;return t.contents?e=t:e={contents:[b(t)]},t.systemInstruction&&(e.systemInstruction=H(t.systemInstruction)),e}/**
 * @license
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z="SILENT_ERROR",ee=10;class tt{constructor(e,n,s){this.params=n,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiSettings=e}async getHistory(){return await this._sendPromise,this._history}async _sendMessage(e,n){let s={};await this._sendPromise;const o=[];return this._sendPromise=this._sendPromise.then(async()=>{var u,d,g;let i,a=0;const r=((u=this.requestOptions)==null?void 0:u.maxSequentialFunctionCalls)??ee;do{let p;if(i){a++;const m=await this._callFunctionsAsNeeded(i);p=b(m)}else p=b(e);const O=this._formatRequest(p,[...o]);o.push(p);const f=await this._callGenerateContent(O,n);if(f)if(s=f,i=this._getCallableFunctionCalls(f.response),f.response.candidates&&f.response.candidates.length>0){const m={parts:((d=f.response.candidates)==null?void 0:d[0].content.parts)||[],role:((g=f.response.candidates)==null?void 0:g[0].content.role)||"model"};o.push(m)}else{const m=T(f.response);m&&h.warn(`sendMessage() was unsuccessful. ${m}. Inspect response object for details.`)}else i=void 0}while(i&&a<r);i&&a>=r&&h.warn(`Automatic function calling exceeded the limit of ${r} function calls. Returning last model response.`)}),await this._sendPromise,this._history=this._history.concat(o),s}async _sendMessageStream(e,n){await this._sendPromise;const s=[],i=(async()=>{var g;let a,r=0;const u=((g=this.requestOptions)==null?void 0:g.maxSequentialFunctionCalls)??ee;let d;do{let p;if(a){r++;const f=await this._callFunctionsAsNeeded(a);p=b(f)}else p=b(e);const O=this._formatRequest(p,[...s]);if(s.push(p),d=await this._callGenerateContentStream(O,n),a=this._getCallableFunctionCalls(d.firstValue),a&&d.firstValue&&d.firstValue.candidates&&d.firstValue.candidates.length>0){const f={...d.firstValue.candidates[0].content};f.role||(f.role="model"),s.push(f)}}while(a&&r<u);return a&&r>=u&&h.warn(`Automatic function calling exceeded the limit of ${u} function calls. Returning last model response.`),{stream:d.stream,response:d.response}})();return this._sendPromise=this._sendPromise.then(async()=>i).catch(a=>{throw new Error(Z)}).then(a=>a.response).then(a=>{if(a.candidates&&a.candidates.length>0){this._history=this._history.concat(s);const r={...a.candidates[0].content};r.role||(r.role="model"),this._history.push(r)}else{const r=T(a);r&&h.warn(`sendMessageStream() was unsuccessful. ${r}. Inspect response object for details.`)}}).catch(a=>{a.message!==Z&&a.name!=="AbortError"&&h.error(a)}),i}_getCallableFunctionCalls(e){var o,i,a;const n=(i=(o=this.params)==null?void 0:o.tools)==null?void 0:i.find(r=>r.functionDeclarations);if(!(n!=null&&n.functionDeclarations))return;const s=ae(e);if(s){for(const r of s)if(!((a=n.functionDeclarations)==null?void 0:a.some(d=>d.name===r.name&&typeof d.functionReference=="function")))return;return s}}async _callFunctionsAsNeeded(e){var i,a;const n=[],s=[],o=(a=(i=this.params)==null?void 0:i.tools)==null?void 0:a.find(r=>r.functionDeclarations);if(o&&o.functionDeclarations){for(const u of e){const d=o.functionDeclarations.find(g=>g.name===u.name);if(d!=null&&d.functionReference){const g=Promise.resolve(d.functionReference(u.args)).catch(p=>{const O=new l(c.ERROR,`Error in user-defined function "${d.name}": ${p.message}`);throw O.stack=p.stack,O});n.push({name:u.name,id:u.id,results:g}),s.push(g)}}await Promise.all(s);const r=[];for(const{name:u,id:d,results:g}of n){const p={name:u,response:await g};d&&(p.id=d),r.push({functionResponse:p})}return r}else throw new l(c.REQUEST_ERROR,'No function declarations were provided in "tools".')}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const te=["text","inlineData","functionCall","functionResponse","thought","thoughtSignature"],nt={user:["text","inlineData","functionResponse"],function:["functionResponse"],model:["text","functionCall","thought","thoughtSignature"],system:["text"]},ne={user:["model"],function:["model"],model:["user","function"],system:[]};function st(t){let e=null;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new l(c.INVALID_CONTENT,`First Content should be with role 'user', got ${s}`);if(!X.includes(s))throw new l(c.INVALID_CONTENT,`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(X)}`);if(!Array.isArray(o))throw new l(c.INVALID_CONTENT,"Content should have 'parts' property with an array of Parts");if(o.length===0)throw new l(c.INVALID_CONTENT,"Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,thought:0,thoughtSignature:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const u of te)u in r&&(i[u]+=1);const a=nt[s];for(const r of te)if(!a.includes(r)&&i[r]>0)throw new l(c.INVALID_CONTENT,`Content with role '${s}' can't contain '${r}' part`);if(e&&!ne[s].includes(e.role))throw new l(c.INVALID_CONTENT,`Content with role '${s}' can't follow '${e.role}'. Valid previous roles: ${JSON.stringify(ne)}`);e=n}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot extends tt{constructor(e,n,s,o,i){var a;super(e,o,i),this.model=n,this.chromeAdapter=s,this.params=o,this.requestOptions=i,o!=null&&o.history&&(st(o.history),this._history=o.history),((a=this.params)==null?void 0:a.systemInstruction)!=null&&(this.params={...this.params,systemInstruction:H(this.params.systemInstruction)})}_formatRequest(e,n){var s,o,i,a,r;return{safetySettings:(s=this.params)==null?void 0:s.safetySettings,generationConfig:(o=this.params)==null?void 0:o.generationConfig,tools:(i=this.params)==null?void 0:i.tools,toolConfig:(a=this.params)==null?void 0:a.toolConfig,systemInstruction:(r=this.params)==null?void 0:r.systemInstruction,contents:[...this._history,...n,e]}}_callGenerateContent(e,n){return de(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}_callGenerateContentStream(e,n){return ue(this._apiSettings,this.model,e,this.chromeAdapter,{...this.requestOptions,...n})}async sendMessage(e,n){return this._sendMessage(e,n)}async sendMessageStream(e,n){return this._sendMessageStream(e,n)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it(t,e,n,s){let o="";if(t.backend.backendType===y.GOOGLE_AI){const a=Ve(n,e);o=JSON.stringify(a)}else o=JSON.stringify(n);return(await B({model:e,task:"countTokens",apiSettings:t,stream:!1,singleRequestOptions:s},o)).json()}async function at(t,e,n,s,o){if((s==null?void 0:s.mode)===_.ONLY_ON_DEVICE)throw new l(c.UNSUPPORTED,"countTokens() is not supported for on-device models.");return it(t,e,n,o)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends P{constructor(e,n,s,o){super(e,n.model),this.chromeAdapter=o,this.generationConfig=n.generationConfig||{},ct(this.generationConfig),this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=H(n.systemInstruction),this.requestOptions=s||{}}async initializeDeviceModel(e){if(!this.chromeAdapter||this.chromeAdapter.mode===_.ONLY_IN_CLOUD)return;if(await this.chromeAdapter.downloadIfAvailable(e)===I.UNAVAILABLE){const s=new l(c.API_NOT_ENABLED,"Local LanguageModel API not available in this environment.");if(this.chromeAdapter.mode===_.ONLY_ON_DEVICE)throw s;h.debug(s.message)}await this.chromeAdapter.downloadPromise}async generateContent(e,n){const s=x(e);return de(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n})}async generateContentStream(e,n){const s=x(e),{stream:o,response:i}=await ue(this._apiSettings,this.model,{generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,...s},this.chromeAdapter,{...this.requestOptions,...n});return{stream:o,response:i}}startChat(e){return new ot(this._apiSettings,this.model,this.chromeAdapter,{tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,generationConfig:this.generationConfig,safetySettings:this.safetySettings,...e},this.requestOptions)}async countTokens(e,n){const s=x(e);return at(this._apiSettings,this.model,s,this.chromeAdapter,{...this.requestOptions,...n})}}function ct(t){var e,n;if(((e=t.thinkingConfig)==null?void 0:e.thinkingBudget)!=null&&((n=t.thinkingConfig)!=null&&n.thinkingLevel))throw new l(c.UNSUPPORTED,"Cannot set both thinkingBudget and thinkingLevel in a config.");if(t.responseSchema!=null&&t.responseJsonSchema!=null)throw new l(c.UNSUPPORTED,"Cannot set both responseSchema and responseJsonSchema in a config.");if((t.responseSchema!=null||t.responseJsonSchema!=null)&&t.responseMimeType!=="application/json"&&t.responseMimeType!=="text/x.enum")throw new l(c.UNSUPPORTED,'responseMimeType must be set to "application/json" or "text/x.enum" if responseSchema or responseJsonSchema are set.')}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e){if(!e.type&&!e.anyOf)throw new l(c.INVALID_SCHEMA,"A schema must have either a 'type' or an 'anyOf' array of sub-schemas.");for(const n in e)this[n]=e[n];this.type=e.type,this.format=e.hasOwnProperty("format")?e.format:void 0,this.nullable=e.hasOwnProperty("nullable")?!!e.nullable:!1}toJSON(){const e={type:this.type};for(const n in this)this.hasOwnProperty(n)&&this[n]!==void 0&&(n!=="required"||this.type===w.OBJECT)&&(e[n]=this[n]);return e}static array(e){return new pt(e,e.items)}static object(e){return new ft(e,e.properties,e.optionalProperties)}static string(e){return new se(e)}static enumString(e){return new se(e,e.enum)}static integer(e){return new lt(e)}static number(e){return new ut(e)}static boolean(e){return new dt(e)}static anyOf(e){return new ht(e)}}class lt extends C{constructor(e){super({type:w.INTEGER,...e})}}class ut extends C{constructor(e){super({type:w.NUMBER,...e})}}class dt extends C{constructor(e){super({type:w.BOOLEAN,...e})}}class se extends C{constructor(e,n){super({type:w.STRING,...e}),this.enum=n}toJSON(){const e=super.toJSON();return this.enum&&(e.enum=this.enum),e}}class pt extends C{constructor(e,n){super({type:w.ARRAY,...e}),this.items=n}toJSON(){const e=super.toJSON();return e.items=this.items.toJSON(),e}}class ft extends C{constructor(e,n,s=[]){super({type:w.OBJECT,...e}),this.properties=n,this.optionalProperties=s}toJSON(){const e=super.toJSON();e.properties={...this.properties};const n=[];if(this.optionalProperties){for(const s of this.optionalProperties)if(!this.properties.hasOwnProperty(s))throw new l(c.INVALID_SCHEMA,`Property "${s}" specified in "optionalProperties" does not exist.`)}for(const s in this.properties)this.properties.hasOwnProperty(s)&&(e.properties[s]=this.properties[s].toJSON(),this.optionalProperties.includes(s)||n.push(s));return n.length>0&&(e.required=n),delete e.optionalProperties,e}}class ht extends C{constructor(e){if(e.anyOf.length===0)throw new l(c.INVALID_SCHEMA,"The 'anyOf' array must not be empty.");super({...e,type:void 0}),this.anyOf=e.anyOf}toJSON(){const e=super.toJSON();return this.anyOf&&Array.isArray(this.anyOf)&&(e.anyOf=this.anyOf.map(n=>n.toJSON())),e}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(t=he(),e){t=pe(t);const n=fe(t,A),s=(e==null?void 0:e.backend)??new $,o={useLimitedUseAppCheckTokens:(e==null?void 0:e.useLimitedUseAppCheckTokens)??!1},i=Ne(s),a=n.getImmediate({identifier:i});return a.options=o,a}const gt=["mode","onDeviceParams","inCloudParams"];function Rt(t,e,n){var r;const s=e;let o;if(s.mode){for(const u of Object.keys(e))gt.includes(u)||h.warn(`When a hybrid inference mode is specified (mode is currently set to ${s.mode}), "${u}" cannot be configured at the top level. Configuration for in-cloud and on-device must be done separately in inCloudParams and onDeviceParams. Configuration values set outside of inCloudParams and onDeviceParams will be ignored.`);o=s.inCloudParams||{model:Ce}}else o=e;if(!o.model)throw new l(c.NO_MODEL,"Must provide a model name. Example: getGenerativeModel({ model: 'my-model-name' })");const i=(r=t.chromeAdapterFactory)==null?void 0:r.call(t,s.mode,typeof window>"u"?void 0:window,s.onDeviceParams),a=new rt(t,o,n,i);return a._apiSettings.inferenceMode=s.mode,a}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(){Oe(new Re(A,De,"PUBLIC").setMultipleInstances(!0)),Y(K,F),Y(K,F,"esm2020")}mt();export{l as AIError,c as AIErrorCode,P as AIModel,V as AgentPlatformBackend,ht as AnyOfSchema,pt as ArraySchema,G as Backend,y as BackendType,dt as BooleanSchema,ot as ChatSession,tt as ChatSessionBase,E as FinishReason,rt as GenerativeModel,$ as GoogleAIBackend,oe as HarmSeverity,_ as InferenceMode,S as InferenceSource,lt as IntegerSchema,ut as NumberSchema,ft as ObjectSchema,X as POSSIBLE_ROLES,C as Schema,w as SchemaType,se as StringSchema,U as VertexAIBackend,Ot as getAI,Rt as getGenerativeModel};
