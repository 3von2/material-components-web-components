/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var e=function(t,i){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(t,i)};function t(t,i){function o(){this.constructor=t}e(t,i),t.prototype=null===i?Object.create(i):(o.prototype=i.prototype,new o)}var i=function(){return(i=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++)for(var r in t=arguments[i])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)};function o(e,t,i,o){var r,n=arguments.length,a=n<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,i):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,i,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(n<3?r(a):n>3?r(t,i,a):r(t,i))||a);return n>3&&a&&Object.defineProperty(t,i,a),a
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */}const r="undefined"!=typeof window&&null!=window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,n=(e,t,i=null)=>{for(;t!==i;){const i=t.nextSibling;e.removeChild(t),t=i}},a=`{{lit-${String(Math.random()).slice(2)}}}`,s=`\x3c!--${a}--\x3e`,c=new RegExp(`${a}|${s}`);class d{constructor(e,t){this.parts=[],this.element=t;const i=[],o=[],r=document.createTreeWalker(t.content,133,null,!1);let n=0,s=-1,d=0;const{strings:p,values:{length:u}}=e;for(;d<u;){const e=r.nextNode();if(null!==e){if(s++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:i}=t;let o=0;for(let e=0;e<i;e++)l(t[e].name,"$lit$")&&o++;for(;o-- >0;){const t=p[d],i=m.exec(t)[2],o=i.toLowerCase()+"$lit$",r=e.getAttribute(o);e.removeAttribute(o);const n=r.split(c);this.parts.push({type:"attribute",index:s,name:i,strings:n}),d+=n.length-1}}"TEMPLATE"===e.tagName&&(o.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(a)>=0){const o=e.parentNode,r=t.split(c),n=r.length-1;for(let t=0;t<n;t++){let i,n=r[t];if(""===n)i=h();else{const e=m.exec(n);null!==e&&l(e[2],"$lit$")&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-"$lit$".length)+e[3]),i=document.createTextNode(n)}o.insertBefore(i,e),this.parts.push({type:"node",index:++s})}""===r[n]?(o.insertBefore(h(),e),i.push(e)):e.data=r[n],d+=n}}else if(8===e.nodeType)if(e.data===a){const t=e.parentNode;null!==e.previousSibling&&s!==n||(s++,t.insertBefore(h(),e)),n=s,this.parts.push({type:"node",index:s}),null===e.nextSibling?e.data="":(i.push(e),s--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(a,t+1));)this.parts.push({type:"node",index:-1}),d++}}else r.currentNode=o.pop()}for(const e of i)e.parentNode.removeChild(e)}}const l=(e,t)=>{const i=e.length-t.length;return i>=0&&e.slice(i)===t},p=e=>-1!==e.index,h=()=>document.createComment(""),m=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function u(e,t){const{element:{content:i},parts:o}=e,r=document.createTreeWalker(i,133,null,!1);let n=g(o),a=o[n],s=-1,c=0;const d=[];let l=null;for(;r.nextNode();){s++;const e=r.currentNode;for(e.previousSibling===l&&(l=null),t.has(e)&&(d.push(e),null===l&&(l=e)),null!==l&&c++;void 0!==a&&a.index===s;)a.index=null!==l?-1:a.index-c,n=g(o,n),a=o[n]}d.forEach(e=>e.parentNode.removeChild(e))}const b=e=>{let t=11===e.nodeType?0:1;const i=document.createTreeWalker(e,133,null,!1);for(;i.nextNode();)t++;return t},g=(e,t=-1)=>{for(let i=t+1;i<e.length;i++){const t=e[i];if(p(t))return i}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const _=new WeakMap,f=e=>(...t)=>{const i=e(...t);return _.set(i,!0),i},x=e=>"function"==typeof e&&_.has(e),v={},y={};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class k{constructor(e,t,i){this.__parts=[],this.template=e,this.processor=t,this.options=i}update(e){let t=0;for(const i of this.__parts)void 0!==i&&i.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=r?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],i=this.template.parts,o=document.createTreeWalker(e,133,null,!1);let n,a=0,s=0,c=o.nextNode();for(;a<i.length;)if(n=i[a],p(n)){for(;s<n.index;)s++,"TEMPLATE"===c.nodeName&&(t.push(c),o.currentNode=c.content),null===(c=o.nextNode())&&(o.currentNode=t.pop(),c=o.nextNode());if("node"===n.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,n.name,n.strings,this.options));a++}else this.__parts.push(void 0),a++;return r&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=window.trustedTypes&&trustedTypes.createPolicy("lit-html",{createHTML:e=>e}),S=` ${a} `;class E{constructor(e,t,i,o){this.strings=e,this.values=t,this.type=i,this.processor=o}getHTML(){const e=this.strings.length-1;let t="",i=!1;for(let o=0;o<e;o++){const e=this.strings[o],r=e.lastIndexOf("\x3c!--");i=(r>-1||i)&&-1===e.indexOf("--\x3e",r+1);const n=m.exec(e);t+=null===n?e+(i?S:s):e.substr(0,n.index)+n[1]+n[2]+"$lit$"+n[3]+a}return t+=this.strings[e],t}getTemplateElement(){const e=document.createElement("template");let t=this.getHTML();return void 0!==w&&(t=w.createHTML(t)),e.innerHTML=t,e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=e=>null===e||!("object"==typeof e||"function"==typeof e),R=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class I{constructor(e,t,i){this.dirty=!0,this.element=e,this.name=t,this.strings=i,this.parts=[];for(let e=0;e<i.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new T(this)}_getValue(){const e=this.strings,t=e.length-1,i=this.parts;if(1===t&&""===e[0]&&""===e[1]){const e=i[0].value;if("symbol"==typeof e)return String(e);if("string"==typeof e||!R(e))return e}let o="";for(let r=0;r<t;r++){o+=e[r];const t=i[r];if(void 0!==t){const e=t.value;if(A(e)||!R(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t],o}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class T{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===v||A(e)&&e===this.value||(this.value=e,x(e)||(this.committer.dirty=!0))}commit(){for(;x(this.value);){const e=this.value;this.value=v,e(this)}this.value!==v&&this.committer.commit()}}class C{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(h()),this.endNode=e.appendChild(h())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=h()),e.__insert(this.endNode=h())}insertAfterPart(e){e.__insert(this.startNode=h()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){if(null===this.startNode.parentNode)return;for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}const e=this.__pendingValue;e!==v&&(A(e)?e!==this.value&&this.__commitText(e):e instanceof E?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):R(e)?this.__commitIterable(e):e===y?(this.value=y,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,i="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=i:this.__commitNode(document.createTextNode(i)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof k&&this.value.template===t)this.value.update(e.values);else{const i=new k(t,e.processor,this.options),o=i._clone();i.update(e.values),this.__commitNode(o),this.value=i}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let i,o=0;for(const r of e)i=t[o],void 0===i&&(i=new C(this.options),t.push(i),0===o?i.appendIntoPart(this):i.insertAfterPart(t[o-1])),i.setValue(r),i.commit(),o++;o<t.length&&(t.length=o,this.clear(i&&i.endNode))}clear(e=this.startNode){n(this.startNode.parentNode,e.nextSibling,this.endNode)}}class F{constructor(e,t,i){if(this.value=void 0,this.__pendingValue=void 0,2!==i.length||""!==i[0]||""!==i[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=i}setValue(e){this.__pendingValue=e}commit(){for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=v}}class z extends I{constructor(e,t,i){super(e,t,i),this.single=2===i.length&&""===i[0]&&""===i[1]}_createPart(){return new O(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class O extends T{}let N=!1;(()=>{try{const e={get capture(){return N=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}})();class P{constructor(e,t,i){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=i,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;x(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=v,e(this)}if(this.__pendingValue===v)return;const e=this.__pendingValue,t=this.value,i=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),o=null!=e&&(null==t||i);i&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),o&&(this.__options=D(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=v}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const D=e=>e&&(N?{capture:e.capture,passive:e.passive,once:e.once}:e.capture)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */;function L(e){let t=H.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},H.set(e.type,t));let i=t.stringsArray.get(e.strings);if(void 0!==i)return i;const o=e.strings.join(a);return i=t.keyString.get(o),void 0===i&&(i=new d(e,e.getTemplateElement()),t.keyString.set(o,i)),t.stringsArray.set(e.strings,i),i}const H=new Map,M=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const $=new
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class{handleAttributeExpressions(e,t,i,o){const r=t[0];if("."===r){return new z(e,t.slice(1),i).parts}return"@"===r?[new P(e,t.slice(1),o.eventContext)]:"?"===r?[new F(e,t.slice(1),i)]:new I(e,t,i).parts}handleTextExpression(e){return new C(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */"undefined"!=typeof window&&(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.3.0");const B=(e,...t)=>new E(e,t,"html",$)
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,V=(e,t)=>`${e}--${t}`;let U=!0;void 0===window.ShadyCSS?U=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),U=!1);const j=e=>t=>{const i=V(t.type,e);let o=H.get(i);void 0===o&&(o={stringsArray:new WeakMap,keyString:new Map},H.set(i,o));let r=o.stringsArray.get(t.strings);if(void 0!==r)return r;const n=t.strings.join(a);if(r=o.keyString.get(n),void 0===r){const i=t.getTemplateElement();U&&window.ShadyCSS.prepareTemplateDom(i,e),r=new d(t,i),o.keyString.set(n,r)}return o.stringsArray.set(t.strings,r),r},q=["html","svg"],G=new Set,X=(e,t,i)=>{G.add(e);const o=i?i.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:n}=r;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(o,e);const a=document.createElement("style");for(let e=0;e<n;e++){const t=r[e];t.parentNode.removeChild(t),a.textContent+=t.textContent}(e=>{q.forEach(t=>{const i=H.get(V(t,e));void 0!==i&&i.keyString.forEach(e=>{const{element:{content:t}}=e,i=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{i.add(e)}),u(e,i)})})})(e);const s=o.content;i?function(e,t,i=null){const{element:{content:o},parts:r}=e;if(null==i)return void o.appendChild(t);const n=document.createTreeWalker(o,133,null,!1);let a=g(r),s=0,c=-1;for(;n.nextNode();){for(c++,n.currentNode===i&&(s=b(t),i.parentNode.insertBefore(t,i));-1!==a&&r[a].index===c;){if(s>0){for(;-1!==a;)r[a].index+=s,a=g(r,a);return}a=g(r,a)}}}(i,a,s.firstChild):s.insertBefore(a,s.firstChild),window.ShadyCSS.prepareTemplateStyles(o,e);const c=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(i){s.insertBefore(a,s.firstChild);const e=new Set;e.add(a),u(i,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),K={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Y};class J extends HTMLElement{constructor(){super(),this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,i)=>{const o=this._attributeNameForProperty(i,t);void 0!==o&&(this._attributeToPropertyMap.set(o,i),e.push(o))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=K){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const i="symbol"==typeof e?Symbol():"__"+e,o=this.getPropertyDescriptor(e,i,t);void 0!==o&&Object.defineProperty(this.prototype,e,o)}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(o){const r=this[e];this[t]=o,this.requestUpdateInternal(e,r,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this._classProperties&&this._classProperties.get(e)||K}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty("finalized")||e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const i of t)this.createProperty(i,e[i])}}static _attributeNameForProperty(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,i=Y){return i(e,t)}static _propertyValueFromAttribute(e,t){const i=t.type,o=t.converter||W,r="function"==typeof o?o:o.fromAttribute;return r?r(e,i):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const i=t.type,o=t.converter;return(o&&o.toAttribute||W.toAttribute)(e,i)}initialize(){this._updateState=0,this._updatePromise=new Promise(e=>this._enableUpdatingResolver=e),this._changedProperties=new Map,this._saveInstanceProperties(),this.requestUpdateInternal()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this.enableUpdating()}enableUpdating(){void 0!==this._enableUpdatingResolver&&(this._enableUpdatingResolver(),this._enableUpdatingResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,i){t!==i&&this._attributeToProperty(e,i)}_propertyToAttribute(e,t,i=K){const o=this.constructor,r=o._attributeNameForProperty(e,i);if(void 0!==r){const e=o._propertyValueToAttribute(t,i);if(void 0===e)return;this._updateState=8|this._updateState,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=-9&this._updateState}}_attributeToProperty(e,t){if(8&this._updateState)return;const i=this.constructor,o=i._attributeToPropertyMap.get(e);if(void 0!==o){const e=i.getPropertyOptions(o);this._updateState=16|this._updateState,this[o]=i._propertyValueFromAttribute(t,e),this._updateState=-17&this._updateState}}requestUpdateInternal(e,t,i){let o=!0;if(void 0!==e){const r=this.constructor;i=i||r.getPropertyOptions(e),r._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||16&this._updateState||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&(this._updatePromise=this._enqueueUpdate())}requestUpdate(e,t){return this.requestUpdateInternal(e,t),this.updateComplete}async _enqueueUpdate(){this._updateState=4|this._updateState;try{await this._updatePromise}catch(e){}const e=this.performUpdate();return null!=e&&await e,!this._hasRequestedUpdate}get _hasRequestedUpdate(){return 4&this._updateState}get hasUpdated(){return 1&this._updateState}performUpdate(){if(!this._hasRequestedUpdate)return;this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{e=this.shouldUpdate(t),e?this.update(t):this._markUpdated()}catch(t){throw e=!1,this._markUpdated(),t}e&&(1&this._updateState||(this._updateState=1|this._updateState,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=-5&this._updateState}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0),this._markUpdated()}updated(e){}firstUpdated(e){}}J.finalized=!0;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const Z=e=>t=>"function"==typeof t?((e,t)=>(window.customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:o}=t;return{kind:i,elements:o,finisher(t){window.customElements.define(e,t)}}})(e,t),Q=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?Object.assign(Object.assign({},t),{finisher(i){i.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};function ee(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):Q(e,t)}function te(e){return ee({attribute:!1,hasChanged:null==e?void 0:e.hasChanged})}function ie(e,t){return(i,o)=>{const r={get(){return this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof o?Symbol():"__"+o;r.get=function(){return void 0===this[t]&&(this[t]=this.renderRoot.querySelector(e)),this[t]}}return void 0!==o?re(r,i,o):ne(r,i)}}function oe(e){return(t,i)=>{const o={async get(){return await this.updateComplete,this.renderRoot.querySelector(e)},enumerable:!0,configurable:!0};return void 0!==i?re(o,t,i):ne(o,t)}}const re=(e,t,i)=>{Object.defineProperty(t,i,e)},ne=(e,t)=>({kind:"method",placement:"prototype",key:t.key,descriptor:e});function ae(e){return(t,i)=>void 0!==i?((e,t,i)=>{Object.assign(t[i],e)})(e,t,i):((e,t)=>Object.assign(Object.assign({},t),{finisher(i){Object.assign(i.prototype[t.key],e)}}))(e,t)}
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const se=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ce=Symbol();class de{constructor(e,t){if(t!==ce)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(se?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const le=(e,...t)=>{const i=t.reduce((t,i,o)=>t+(e=>{if(e instanceof de)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(i)+e[o+1],e[0]);return new de(i,ce)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.4.0");const pe={};class he extends J{static getStyles(){return this.styles}static _getUniqueStyles(){if(this.hasOwnProperty(JSCompiler_renameProperty("_styles",this)))return;const e=this.getStyles();if(Array.isArray(e)){const t=(e,i)=>e.reduceRight((e,i)=>Array.isArray(i)?t(i,e):(e.add(i),e),i),i=t(e,new Set),o=[];i.forEach(e=>o.unshift(e)),this._styles=o}else this._styles=void 0===e?[]:[e];this._styles=this._styles.map(e=>{if(e instanceof CSSStyleSheet&&!se){const t=Array.prototype.slice.call(e.cssRules).reduce((e,t)=>e+t.cssText,"");return new de(String(t),ce)}return e})}initialize(){super.initialize(),this.constructor._getUniqueStyles(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?se?this.renderRoot.adoptedStyleSheets=e.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){const t=this.render();super.update(e),t!==pe&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){return pe}}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function me(e,t){return(e.matches||e.webkitMatchesSelector||e.msMatchesSelector).call(e,t)}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/he.finalized=!0,he.render=(e,t,i)=>{if(!i||"object"!=typeof i||!i.scopeName)throw new Error("The `scopeName` option is required.");const o=i.scopeName,r=M.has(t),a=U&&11===t.nodeType&&!!t.host,s=a&&!G.has(o),c=s?document.createDocumentFragment():t;if(((e,t,i)=>{let o=M.get(t);void 0===o&&(n(t,t.firstChild),M.set(t,o=new C(Object.assign({templateFactory:L},i))),o.appendInto(t)),o.setValue(e),o.commit()})(e,c,Object.assign({templateFactory:j(o)},i)),s){const e=M.get(c);M.delete(c);const i=e.value instanceof k?e.value.template:void 0;X(o,c,i),n(t,t.firstChild),t.appendChild(c),M.set(t,e)}!r&&a&&window.ShadyCSS.styleElement(t.host)};const ue=e=>e.nodeType===Node.ELEMENT_NODE;function be(e){return{addClass:t=>{e.classList.add(t)},removeClass:t=>{e.classList.remove(t)},hasClass:t=>e.classList.contains(t)}}let ge=!1;const _e=()=>{},fe={get passive(){return ge=!0,!1}};document.addEventListener("x",_e,fe),document.removeEventListener("x",_e);const xe=ge,ve=(e=window.document)=>{let t=e.activeElement;const i=[];if(!t)return i;for(;t&&(i.push(t),t.shadowRoot);)t=t.shadowRoot.activeElement;return i};
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class ye extends he{click(){if(this.mdcRoot)return this.mdcRoot.focus(),void this.mdcRoot.click();super.click()}createFoundation(){void 0!==this.mdcFoundation&&this.mdcFoundation.destroy(),this.mdcFoundationClass&&(this.mdcFoundation=new this.mdcFoundationClass(this.createAdapter()),this.mdcFoundation.init())}firstUpdated(){this.createFoundation()}}
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const ke=e=>(t,i)=>{if(t.constructor._observers){if(!t.constructor.hasOwnProperty("_observers")){const e=t.constructor._observers;t.constructor._observers=new Map,e.forEach((e,i)=>t.constructor._observers.set(i,e))}}else{t.constructor._observers=new Map;const e=t.updated;t.updated=function(t){e.call(this,t),t.forEach((e,t)=>{const i=this.constructor._observers.get(t);void 0!==i&&i.call(this,this[t],e)})}}t.constructor._observers.set(i,e)}
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */,we=new WeakMap,Se=f(e=>t=>{const i=we.get(t);if(void 0===e&&t instanceof T){if(void 0!==i||!we.has(t)){const e=t.committer.name;t.committer.element.removeAttribute(e)}}else e!==i&&t.setValue(e);we.set(t,e)});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var Ee=function(){function e(e){void 0===e&&(e={}),this.adapter=e}return Object.defineProperty(e,"cssClasses",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return{}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{}},enumerable:!0,configurable:!0}),e.prototype.init=function(){},e.prototype.destroy=function(){},e}(),Ae="Unknown",Re="Backspace",Ie="Enter",Te="Spacebar",Ce="PageUp",Fe="PageDown",ze="End",Oe="Home",Ne="ArrowLeft",Pe="ArrowUp",De="ArrowRight",Le="ArrowDown",He="Delete",Me="Escape",$e=new Set;
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */$e.add(Re),$e.add(Ie),$e.add(Te),$e.add(Ce),$e.add(Fe),$e.add(ze),$e.add(Oe),$e.add(Ne),$e.add(Pe),$e.add(De),$e.add(Le),$e.add(He),$e.add(Me);var Be=8,Ve=13,Ue=32,je=33,qe=34,Ge=35,Xe=36,We=37,Ye=38,Ke=39,Je=40,Ze=46,Qe=27,et=new Map;et.set(Be,Re),et.set(Ve,Ie),et.set(Ue,Te),et.set(je,Ce),et.set(qe,Fe),et.set(Ge,ze),et.set(Xe,Oe),et.set(We,Ne),et.set(Ye,Pe),et.set(Ke,De),et.set(Je,Le),et.set(Ze,He),et.set(Qe,Me);var tt=new Set;function it(e){var t=e.key;if($e.has(t))return t;var i=et.get(e.keyCode);return i||Ae}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */tt.add(Ce),tt.add(Fe),tt.add(ze),tt.add(Oe),tt.add(Ne),tt.add(Pe),tt.add(De),tt.add(Le);var ot="mdc-list-item",rt={ACTION_EVENT:"MDCList:action",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_CURRENT:"aria-current",ARIA_DISABLED:"aria-disabled",ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_SELECTED:"aria-selected",CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"], input[type="radio"]',CHECKBOX_SELECTOR:'input[type="checkbox"]',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"\n    ."+ot+" button:not(:disabled),\n    ."+ot+" a\n  ",FOCUSABLE_CHILD_ELEMENTS:"\n    ."+ot+" button:not(:disabled),\n    ."+ot+" a,\n    ."+ot+' input[type="radio"]:not(:disabled),\n    .'+ot+' input[type="checkbox"]:not(:disabled)\n  ',RADIO_SELECTOR:'input[type="radio"]'},nt={UNSET_INDEX:-1,TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS:300};
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
const at=["input","button","textarea","select"];function st(e){return e instanceof Set}const ct=e=>{const t=e===nt.UNSET_INDEX?new Set:e;return st(t)?new Set(t):new Set([t])};class dt extends Ee{constructor(e){super(Object.assign(Object.assign({},dt.defaultAdapter),e)),this.isMulti_=!1,this.wrapFocus_=!1,this.isVertical_=!0,this.selectedIndex_=nt.UNSET_INDEX,this.focusedItemIndex_=nt.UNSET_INDEX,this.useActivatedClass_=!1,this.ariaCurrentAttrValue_=null}static get strings(){return rt}static get numbers(){return nt}static get defaultAdapter(){return{focusItemAtIndex:()=>{},getFocusedElementIndex:()=>0,getListItemCount:()=>0,isFocusInsideList:()=>!1,isRootFocused:()=>!1,notifyAction:()=>{},notifySelected:()=>{},getSelectedStateForElementIndex:()=>!1,setDisabledStateForElementIndex:()=>{},getDisabledStateForElementIndex:()=>!1,setSelectedStateForElementIndex:()=>{},setActivatedStateForElementIndex:()=>{},setTabIndexForElementIndex:()=>{},setAttributeForElementIndex:()=>{},getAttributeForElementIndex:()=>null}}setWrapFocus(e){this.wrapFocus_=e}setMulti(e){this.isMulti_=e;const t=this.selectedIndex_;if(e){if(!st(t)){const e=t===nt.UNSET_INDEX;this.selectedIndex_=e?new Set:new Set([t])}}else if(st(t))if(t.size){const e=Array.from(t).sort();this.selectedIndex_=e[0]}else this.selectedIndex_=nt.UNSET_INDEX}setVerticalOrientation(e){this.isVertical_=e}setUseActivatedClass(e){this.useActivatedClass_=e}getSelectedIndex(){return this.selectedIndex_}setSelectedIndex(e){this.isIndexValid_(e)&&(this.isMulti_?this.setMultiSelectionAtIndex_(ct(e)):this.setSingleSelectionAtIndex_(e))}handleFocusIn(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,0)}handleFocusOut(e,t){t>=0&&this.adapter.setTabIndexForElementIndex(t,-1),setTimeout(()=>{this.adapter.isFocusInsideList()||this.setTabindexToFirstSelectedItem_()},0)}handleKeydown(e,t,i){const o="ArrowLeft"===it(e),r="ArrowUp"===it(e),n="ArrowRight"===it(e),a="ArrowDown"===it(e),s="Home"===it(e),c="End"===it(e),d="Enter"===it(e),l="Spacebar"===it(e);if(this.adapter.isRootFocused())return void(r||c?(e.preventDefault(),this.focusLastElement()):(a||s)&&(e.preventDefault(),this.focusFirstElement()));let p,h=this.adapter.getFocusedElementIndex();if(!(-1===h&&(h=i,h<0))){if(this.isVertical_&&a||!this.isVertical_&&n)this.preventDefaultEvent(e),p=this.focusNextElement(h);else if(this.isVertical_&&r||!this.isVertical_&&o)this.preventDefaultEvent(e),p=this.focusPrevElement(h);else if(s)this.preventDefaultEvent(e),p=this.focusFirstElement();else if(c)this.preventDefaultEvent(e),p=this.focusLastElement();else if((d||l)&&t){const t=e.target;if(t&&"A"===t.tagName&&d)return;this.preventDefaultEvent(e),this.setSelectedIndexOnAction_(h,!0)}this.focusedItemIndex_=h,void 0!==p&&(this.setTabindexAtIndex_(p),this.focusedItemIndex_=p)}}handleSingleSelection(e,t,i){e!==nt.UNSET_INDEX&&(this.setSelectedIndexOnAction_(e,t,i),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}focusNextElement(e){let t=e+1;if(t>=this.adapter.getListItemCount()){if(!this.wrapFocus_)return e;t=0}return this.adapter.focusItemAtIndex(t),t}focusPrevElement(e){let t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter.getListItemCount()-1}return this.adapter.focusItemAtIndex(t),t}focusFirstElement(){return this.adapter.focusItemAtIndex(0),0}focusLastElement(){const e=this.adapter.getListItemCount()-1;return this.adapter.focusItemAtIndex(e),e}setEnabled(e,t){this.isIndexValid_(e)&&this.adapter.setDisabledStateForElementIndex(e,!t)}preventDefaultEvent(e){const t=(""+e.target.tagName).toLowerCase();-1===at.indexOf(t)&&e.preventDefault()}setSingleSelectionAtIndex_(e,t=!0){this.selectedIndex_!==e&&(this.selectedIndex_!==nt.UNSET_INDEX&&(this.adapter.setSelectedStateForElementIndex(this.selectedIndex_,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(this.selectedIndex_,!1)),t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0),this.setAriaForSingleSelectionAtIndex_(e),this.selectedIndex_=e,this.adapter.notifySelected(e))}setMultiSelectionAtIndex_(e,t=!0){const i=((e,t)=>{const i=Array.from(e),o=Array.from(t),r={added:[],removed:[]},n=i.sort(),a=o.sort();let s=0,c=0;for(;s<n.length||c<a.length;){const e=n[s],t=a[c];e!==t?void 0!==e&&(void 0===t||e<t)?(r.removed.push(e),s++):void 0!==t&&(void 0===e||t<e)&&(r.added.push(t),c++):(s++,c++)}return r})(ct(this.selectedIndex_),e);if(i.removed.length||i.added.length){for(const e of i.removed)t&&this.adapter.setSelectedStateForElementIndex(e,!1),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!1);for(const e of i.added)t&&this.adapter.setSelectedStateForElementIndex(e,!0),this.useActivatedClass_&&this.adapter.setActivatedStateForElementIndex(e,!0);this.selectedIndex_=e,this.adapter.notifySelected(e,i)}}setAriaForSingleSelectionAtIndex_(e){this.selectedIndex_===nt.UNSET_INDEX&&(this.ariaCurrentAttrValue_=this.adapter.getAttributeForElementIndex(e,rt.ARIA_CURRENT));const t=null!==this.ariaCurrentAttrValue_,i=t?rt.ARIA_CURRENT:rt.ARIA_SELECTED;this.selectedIndex_!==nt.UNSET_INDEX&&this.adapter.setAttributeForElementIndex(this.selectedIndex_,i,"false");const o=t?this.ariaCurrentAttrValue_:"true";this.adapter.setAttributeForElementIndex(e,i,o)}setTabindexAtIndex_(e){this.focusedItemIndex_===nt.UNSET_INDEX&&0!==e?this.adapter.setTabIndexForElementIndex(0,-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter.setTabIndexForElementIndex(this.focusedItemIndex_,-1),this.adapter.setTabIndexForElementIndex(e,0)}setTabindexToFirstSelectedItem_(){let e=0;"number"==typeof this.selectedIndex_&&this.selectedIndex_!==nt.UNSET_INDEX?e=this.selectedIndex_:st(this.selectedIndex_)&&this.selectedIndex_.size>0&&(e=Math.min(...this.selectedIndex_)),this.setTabindexAtIndex_(e)}isIndexValid_(e){if(e instanceof Set){if(!this.isMulti_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");if(0===e.size)return!0;{let t=!1;for(const i of e)if(t=this.isIndexInRange_(i),t)break;return t}}if("number"==typeof e){if(this.isMulti_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return e===nt.UNSET_INDEX||this.isIndexInRange_(e)}return!1}isIndexInRange_(e){const t=this.adapter.getListItemCount();return e>=0&&e<t}setSelectedIndexOnAction_(e,t,i){if(this.adapter.getDisabledStateForElementIndex(e))return;let o=e;if(this.isMulti_&&(o=new Set([e])),this.isIndexValid_(o)){if(this.isMulti_)this.toggleMultiAtIndex(e,i,t);else if(t||i)this.setSingleSelectionAtIndex_(e,t);else{this.selectedIndex_===e&&this.setSingleSelectionAtIndex_(nt.UNSET_INDEX)}t&&this.adapter.notifyAction(e)}}toggleMultiAtIndex(e,t,i=!0){let o=!1;o=void 0===t?!this.adapter.getSelectedStateForElementIndex(e):t;const r=ct(this.selectedIndex_);o?r.add(e):r.delete(e),this.setMultiSelectionAtIndex_(r,i)}}
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/const lt=e=>e.hasAttribute("mwc-list-item");class pt extends ye{constructor(){super(...arguments),this.mdcAdapter=null,this.mdcFoundationClass=dt,this.activatable=!1,this.multi=!1,this.wrapFocus=!1,this.itemRoles=null,this.innerRole=null,this.innerAriaLabel=null,this.rootTabbable=!1,this.previousTabindex=null,this.noninteractive=!1,this.items_=[]}get assignedElements(){const e=this.slotElement;return e?e.assignedNodes({flatten:!0}).filter(ue):[]}get items(){return this.items_}updateItems(){const e=this.assignedElements,t=[];for(const i of e)lt(i)&&(t.push(i),i._managingList=this),i.hasAttribute("divider")&&!i.hasAttribute("role")&&i.setAttribute("role","separator");this.items_=t;const i=new Set;if(this.items_.forEach((e,t)=>{this.itemRoles?e.setAttribute("role",this.itemRoles):e.removeAttribute("role"),e.selected&&i.add(t)}),this.multi)this.select(i);else{const e=i.size?i.entries().next().value[1]:-1;this.select(e)}const o=new Event("items-updated",{bubbles:!0,composed:!0});this.dispatchEvent(o)}get selected(){const e=this.index;if(!st(e))return-1===e?null:this.items[e];const t=[];for(const i of e)t.push(this.items[i]);return t}get index(){return this.mdcFoundation?this.mdcFoundation.getSelectedIndex():-1}render(){const e=null===this.innerRole?void 0:this.innerRole,t=null===this.innerAriaLabel?void 0:this.innerAriaLabel,i=this.rootTabbable?"0":"-1";return B`
      <!-- @ts-ignore -->
      <ul
          tabindex=${i}
          role="${Se(e)}"
          aria-label="${Se(t)}"
          class="mdc-list"
          @keydown=${this.onKeydown}
          @focusin=${this.onFocusIn}
          @focusout=${this.onFocusOut}
          @request-selected=${this.onRequestSelected}
          @list-item-rendered=${this.onListItemConnected}>
        <slot></slot>
      </ul>
    `}firstUpdated(){super.firstUpdated(),this.items.length||(this.mdcFoundation.setMulti(this.multi),this.layout())}onFocusIn(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusIn(e,t)}}onFocusOut(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e);this.mdcFoundation.handleFocusOut(e,t)}}onKeydown(e){if(this.mdcFoundation&&this.mdcRoot){const t=this.getIndexOfTarget(e),i=e.target,o=lt(i);this.mdcFoundation.handleKeydown(e,o,t)}}onRequestSelected(e){if(this.mdcFoundation){let t=this.getIndexOfTarget(e);if(-1===t&&(this.layout(),t=this.getIndexOfTarget(e),-1===t))return;if(this.items[t].disabled)return;const i=e.detail.selected,o=e.detail.source;this.mdcFoundation.handleSingleSelection(t,"interaction"===o,i),e.stopPropagation()}}getIndexOfTarget(e){const t=this.items,i=e.composedPath();for(const e of i){let i=-1;if(ue(e)&&lt(e)&&(i=t.indexOf(e)),-1!==i)return i}return-1}createAdapter(){return this.mdcAdapter={getListItemCount:()=>this.mdcRoot?this.items.length:0,getFocusedElementIndex:this.getFocusedItemIndex,getAttributeForElementIndex:(e,t)=>{if(!this.mdcRoot)return"";const i=this.items[e];return i?i.getAttribute(t):""},setAttributeForElementIndex:(e,t,i)=>{if(!this.mdcRoot)return;const o=this.items[e];o&&o.setAttribute(t,i)},focusItemAtIndex:e=>{const t=this.items[e];t&&t.focus()},setTabIndexForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.tabindex=t)},notifyAction:e=>{const t={bubbles:!0,composed:!0};t.detail={index:e};const i=new CustomEvent("action",t);this.dispatchEvent(i)},notifySelected:(e,t)=>{const i={bubbles:!0,composed:!0};i.detail={index:e,diff:t};const o=new CustomEvent("selected",i);this.dispatchEvent(o)},isFocusInsideList:()=>(e=>{const t=ve();if(!t.length)return!1;const i=t[t.length-1],o=new Event("check-if-focused",{bubbles:!0,composed:!0});let r=[];const n=e=>{r=e.composedPath()};return document.body.addEventListener("check-if-focused",n),i.dispatchEvent(o),document.body.removeEventListener("check-if-focused",n),-1!==r.indexOf(e)})(this),isRootFocused:()=>{const e=this.mdcRoot;return e.getRootNode().activeElement===e},setDisabledStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.disabled=t)},getDisabledStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.disabled},setSelectedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.selected=t)},getSelectedStateForElementIndex:e=>{const t=this.items[e];return!!t&&t.selected},setActivatedStateForElementIndex:(e,t)=>{const i=this.items[e];i&&(i.activated=t)}},this.mdcAdapter}selectUi(e,t=!1){const i=this.items[e];i&&(i.selected=!0,i.activated=t)}deselectUi(e){const t=this.items[e];t&&(t.selected=!1,t.activated=!1)}select(e){this.mdcFoundation&&this.mdcFoundation.setSelectedIndex(e)}toggle(e,t){this.multi&&this.mdcFoundation.toggleMultiAtIndex(e,t)}onListItemConnected(e){const t=e.target;this.layout(-1===this.items.indexOf(t))}layout(e=!0){e&&this.updateItems();const t=this.items[0];for(const e of this.items)e.tabindex=-1;t&&(this.noninteractive?this.previousTabindex||(this.previousTabindex=t):t.tabindex=0)}getFocusedItemIndex(){if(!this.mdcRoot)return-1;if(!this.items.length)return-1;const e=ve();if(!e.length)return-1;for(let t=e.length-1;t>=0;t--){const i=e[t];if(lt(i))return this.items.indexOf(i)}return-1}focusItemAtIndex(e){for(const e of this.items)if(0===e.tabindex){e.tabindex=-1;break}this.items[e].tabindex=0,this.items[e].focus()}focus(){const e=this.mdcRoot;e&&e.focus()}blur(){const e=this.mdcRoot;e&&e.blur()}}o([ie(".mdc-list")],pt.prototype,"mdcRoot",void 0),o([ie("slot")],pt.prototype,"slotElement",void 0),o([ee({type:Boolean}),ke((function(e){this.mdcFoundation&&this.mdcFoundation.setUseActivatedClass(e)}))],pt.prototype,"activatable",void 0),o([ee({type:Boolean}),ke((function(e,t){this.mdcFoundation&&this.mdcFoundation.setMulti(e),void 0!==t&&this.layout()}))],pt.prototype,"multi",void 0),o([ee({type:Boolean}),ke((function(e){this.mdcFoundation&&this.mdcFoundation.setWrapFocus(e)}))],pt.prototype,"wrapFocus",void 0),o([ee({type:String}),ke((function(e,t){void 0!==t&&this.updateItems()}))],pt.prototype,"itemRoles",void 0),o([ee({type:String})],pt.prototype,"innerRole",void 0),o([ee({type:String})],pt.prototype,"innerAriaLabel",void 0),o([ee({type:Boolean})],pt.prototype,"rootTabbable",void 0),o([ee({type:Boolean,reflect:!0}),ke((function(e){const t=this.slotElement;if(e&&t){const e=function(e,t){for(const i of e.assignedNodes({flatten:!0}))if(ue(i)){const e=i;if(me(e,t))return e}return null}(t,'[tabindex="0"]');this.previousTabindex=e,e&&e.setAttribute("tabindex","-1")}else!e&&this.previousTabindex&&(this.previousTabindex.setAttribute("tabindex","0"),this.previousTabindex=null)}))],pt.prototype,"noninteractive",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const ht=le`@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host{display:block}.mdc-list{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-subtitle1-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1rem;font-size:var(--mdc-typography-subtitle1-font-size, 1rem);line-height:1.75rem;line-height:var(--mdc-typography-subtitle1-line-height, 1.75rem);font-weight:400;font-weight:var(--mdc-typography-subtitle1-font-weight, 400);letter-spacing:0.009375em;letter-spacing:var(--mdc-typography-subtitle1-letter-spacing, 0.009375em);text-decoration:inherit;text-decoration:var(--mdc-typography-subtitle1-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-subtitle1-text-transform, inherit);line-height:1.5rem;margin:0;padding:8px 0;list-style-type:none;color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87));padding:var(--mdc-list-vertical-padding, 8px) 0}.mdc-list:focus{outline:none}.mdc-list-item{height:48px}.mdc-list--dense{padding-top:4px;padding-bottom:4px;font-size:.812rem}.mdc-list ::slotted([divider]){height:0;margin:0;border:none;border-bottom-width:1px;border-bottom-style:solid;border-bottom-color:rgba(0, 0, 0, 0.12)}.mdc-list ::slotted([divider][padded]){margin:0 var(--mdc-list-side-padding, 16px)}.mdc-list ::slotted([divider][inset]){margin-left:var(--mdc-list-inset-margin, 72px);margin-right:0;width:calc(100% - var(--mdc-list-inset-margin, 72px))}.mdc-list-group[dir=rtl] .mdc-list ::slotted([divider][inset]),[dir=rtl] .mdc-list-group .mdc-list ::slotted([divider][inset]){margin-left:0;margin-right:var(--mdc-list-inset-margin, 72px)}.mdc-list ::slotted([divider][inset][padded]){width:calc(100% - var(--mdc-list-inset-margin, 72px) - var(--mdc-list-side-padding, 16px))}.mdc-list--dense ::slotted([mwc-list-item]){height:40px}.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 20px}.mdc-list--two-line.mdc-list--dense ::slotted([mwc-list-item]),.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list-item]){height:60px}.mdc-list--avatar-list.mdc-list--dense ::slotted([mwc-list]){--mdc-list-item-graphic-size: 36px}:host([noninteractive]){pointer-events:none;cursor:default}.mdc-list--dense ::slotted(.mdc-list-item__primary-text){display:block;margin-top:0;line-height:normal;margin-bottom:-20px}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::before{display:inline-block;width:0;height:24px;content:"";vertical-align:0}.mdc-list--dense ::slotted(.mdc-list-item__primary-text)::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let mt=class extends pt{};mt.styles=ht,mt=o([Z("mwc-list")],mt);
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ut={BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation",ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded"},bt={VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top"},gt={DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,INITIAL_ORIGIN_SCALE:.6,PADDING:10,TAP_DELAY_MS:300};
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var _t=["touchstart","pointerdown","mousedown","keydown"],ft=["touchend","pointerup","mouseup","contextmenu"],xt=[],vt=function(e){function o(t){var r=e.call(this,i(i({},o.defaultAdapter),t))||this;return r.activationAnimationHasEnded_=!1,r.activationTimer_=0,r.fgDeactivationRemovalTimer_=0,r.fgScale_="0",r.frame_={width:0,height:0},r.initialSize_=0,r.layoutFrame_=0,r.maxRadius_=0,r.unboundedCoords_={left:0,top:0},r.activationState_=r.defaultActivationState_(),r.activationTimerCallback_=function(){r.activationAnimationHasEnded_=!0,r.runDeactivationUXLogicIfReady_()},r.activateHandler_=function(e){return r.activate_(e)},r.deactivateHandler_=function(){return r.deactivate_()},r.focusHandler_=function(){return r.handleFocus()},r.blurHandler_=function(){return r.handleBlur()},r.resizeHandler_=function(){return r.layout()},r}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return ut},enumerable:!0,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return bt},enumerable:!0,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return gt},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},browserSupportsCssVars:function(){return!0},computeBoundingRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},containsEventTarget:function(){return!0},deregisterDocumentInteractionHandler:function(){},deregisterInteractionHandler:function(){},deregisterResizeHandler:function(){},getWindowPageOffset:function(){return{x:0,y:0}},isSurfaceActive:function(){return!0},isSurfaceDisabled:function(){return!0},isUnbounded:function(){return!0},registerDocumentInteractionHandler:function(){},registerInteractionHandler:function(){},registerResizeHandler:function(){},removeClass:function(){},updateCssVariable:function(){}}},enumerable:!0,configurable:!0}),o.prototype.init=function(){var e=this,t=this.supportsPressRipple_();if(this.registerRootHandlers_(t),t){var i=o.cssClasses,r=i.ROOT,n=i.UNBOUNDED;requestAnimationFrame((function(){e.adapter.addClass(r),e.adapter.isUnbounded()&&(e.adapter.addClass(n),e.layoutInternal_())}))}},o.prototype.destroy=function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter.removeClass(o.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter.removeClass(o.cssClasses.FG_DEACTIVATION));var t=o.cssClasses,i=t.ROOT,r=t.UNBOUNDED;requestAnimationFrame((function(){e.adapter.removeClass(i),e.adapter.removeClass(r),e.removeCssVars_()}))}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()},o.prototype.activate=function(e){this.activate_(e)},o.prototype.deactivate=function(){this.deactivate_()},o.prototype.layout=function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame((function(){e.layoutInternal_(),e.layoutFrame_=0}))},o.prototype.setUnbounded=function(e){var t=o.cssClasses.UNBOUNDED;e?this.adapter.addClass(t):this.adapter.removeClass(t)},o.prototype.handleFocus=function(){var e=this;requestAnimationFrame((function(){return e.adapter.addClass(o.cssClasses.BG_FOCUSED)}))},o.prototype.handleBlur=function(){var e=this;requestAnimationFrame((function(){return e.adapter.removeClass(o.cssClasses.BG_FOCUSED)}))},o.prototype.supportsPressRipple_=function(){return this.adapter.browserSupportsCssVars()},o.prototype.defaultActivationState_=function(){return{activationEvent:void 0,hasDeactivationUXRun:!1,isActivated:!1,isProgrammatic:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1}},o.prototype.registerRootHandlers_=function(e){var t=this;e&&(_t.forEach((function(e){t.adapter.registerInteractionHandler(e,t.activateHandler_)})),this.adapter.isUnbounded()&&this.adapter.registerResizeHandler(this.resizeHandler_)),this.adapter.registerInteractionHandler("focus",this.focusHandler_),this.adapter.registerInteractionHandler("blur",this.blurHandler_)},o.prototype.registerDeactivationHandlers_=function(e){var t=this;"keydown"===e.type?this.adapter.registerInteractionHandler("keyup",this.deactivateHandler_):ft.forEach((function(e){t.adapter.registerDocumentInteractionHandler(e,t.deactivateHandler_)}))},o.prototype.deregisterRootHandlers_=function(){var e=this;_t.forEach((function(t){e.adapter.deregisterInteractionHandler(t,e.activateHandler_)})),this.adapter.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter.isUnbounded()&&this.adapter.deregisterResizeHandler(this.resizeHandler_)},o.prototype.deregisterDeactivationHandlers_=function(){var e=this;this.adapter.deregisterInteractionHandler("keyup",this.deactivateHandler_),ft.forEach((function(t){e.adapter.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)}))},o.prototype.removeCssVars_=function(){var e=this,t=o.strings;Object.keys(t).forEach((function(i){0===i.indexOf("VAR_")&&e.adapter.updateCssVariable(t[i],null)}))},o.prototype.activate_=function(e){var t=this;if(!this.adapter.isSurfaceDisabled()){var i=this.activationState_;if(!i.isActivated){var o=this.previousActivationEvent_;if(!(o&&void 0!==e&&o.type!==e.type))i.isActivated=!0,i.isProgrammatic=void 0===e,i.activationEvent=e,i.wasActivatedByPointer=!i.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type)),void 0!==e&&xt.length>0&&xt.some((function(e){return t.adapter.containsEventTarget(e)}))?this.resetActivationState_():(void 0!==e&&(xt.push(e.target),this.registerDeactivationHandlers_(e)),i.wasElementMadeActive=this.checkElementMadeActive_(e),i.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame((function(){xt=[],i.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(i.wasElementMadeActive=t.checkElementMadeActive_(e),i.wasElementMadeActive&&t.animateActivation_()),i.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())})))}}},o.prototype.checkElementMadeActive_=function(e){return void 0===e||"keydown"!==e.type||this.adapter.isSurfaceActive()},o.prototype.animateActivation_=function(){var e=this,t=o.strings,i=t.VAR_FG_TRANSLATE_START,r=t.VAR_FG_TRANSLATE_END,n=o.cssClasses,a=n.FG_DEACTIVATION,s=n.FG_ACTIVATION,c=o.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var d="",l="";if(!this.adapter.isUnbounded()){var p=this.getFgTranslationCoordinates_(),h=p.startPoint,m=p.endPoint;d=h.x+"px, "+h.y+"px",l=m.x+"px, "+m.y+"px"}this.adapter.updateCssVariable(i,d),this.adapter.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter.removeClass(a),this.adapter.computeBoundingRect(),this.adapter.addClass(s),this.activationTimer_=setTimeout((function(){return e.activationTimerCallback_()}),c)},o.prototype.getFgTranslationCoordinates_=function(){var e,t=this.activationState_,i=t.activationEvent;return{startPoint:e={x:(e=t.wasActivatedByPointer?function(e,t,i){if(!e)return{x:0,y:0};var o,r,n=t.x,a=t.y,s=n+i.left,c=a+i.top;if("touchstart"===e.type){var d=e;o=d.changedTouches[0].pageX-s,r=d.changedTouches[0].pageY-c}else{var l=e;o=l.pageX-s,r=l.pageY-c}return{x:o,y:r}}(i,this.adapter.getWindowPageOffset(),this.adapter.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2}).x-this.initialSize_/2,y:e.y-this.initialSize_/2},endPoint:{x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2}}},o.prototype.runDeactivationUXLogicIfReady_=function(){var e=this,t=o.cssClasses.FG_DEACTIVATION,i=this.activationState_,r=i.hasDeactivationUXRun,n=i.isActivated;(r||!n)&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter.addClass(t),this.fgDeactivationRemovalTimer_=setTimeout((function(){e.adapter.removeClass(t)}),gt.FG_DEACTIVATION_MS))},o.prototype.rmBoundedActivationClasses_=function(){var e=o.cssClasses.FG_ACTIVATION;this.adapter.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter.computeBoundingRect()},o.prototype.resetActivationState_=function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout((function(){return e.previousActivationEvent_=void 0}),o.numbers.TAP_DELAY_MS)},o.prototype.deactivate_=function(){var e=this,t=this.activationState_;if(t.isActivated){var o=i({},t);t.isProgrammatic?(requestAnimationFrame((function(){return e.animateDeactivation_(o)})),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame((function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(o),e.resetActivationState_()})))}},o.prototype.animateDeactivation_=function(e){var t=e.wasActivatedByPointer,i=e.wasElementMadeActive;(t||i)&&this.runDeactivationUXLogicIfReady_()},o.prototype.layoutInternal_=function(){var e=this;this.frame_=this.adapter.computeBoundingRect();var t=Math.max(this.frame_.height,this.frame_.width);this.maxRadius_=this.adapter.isUnbounded()?t:Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2))+o.numbers.PADDING;var i=Math.floor(t*o.numbers.INITIAL_ORIGIN_SCALE);this.adapter.isUnbounded()&&i%2!=0?this.initialSize_=i-1:this.initialSize_=i,this.fgScale_=""+this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()},o.prototype.updateLayoutCssVars_=function(){var e=o.strings,t=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,n=e.VAR_FG_SCALE;this.adapter.updateCssVariable(t,this.initialSize_+"px"),this.adapter.updateCssVariable(n,this.fgScale_),this.adapter.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter.updateCssVariable(r,this.unboundedCoords_.top+"px"))},o}(Ee);
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class yt{constructor(e){this.classes=new Set,this.changed=!1,this.element=e;const t=(e.getAttribute("class")||"").split(/\s+/);for(const e of t)this.classes.add(e)}add(e){this.classes.add(e),this.changed=!0}remove(e){this.classes.delete(e),this.changed=!0}commit(){if(this.changed){let e="";this.classes.forEach(t=>e+=t+" "),this.element.setAttribute("class",e)}}}const kt=new WeakMap,wt=f(e=>t=>{if(!(t instanceof T)||t instanceof O||"class"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `classMap` directive must be used in the `class` attribute and must be the only part in the attribute.");const{committer:i}=t,{element:o}=i;let r=kt.get(t);void 0===r&&(o.setAttribute("class",i.strings.join(" ")),kt.set(t,r=new Set));const n=o.classList||new yt(o);r.forEach(t=>{t in e||(n.remove(t),r.delete(t))});for(const t in e){const i=e[t];i!=r.has(t)&&(i?(n.add(t),r.add(t)):(n.remove(t),r.delete(t)))}"function"==typeof n.commit&&n.commit()}),St=new WeakMap,Et=f(e=>t=>{if(!(t instanceof T)||t instanceof O||"style"!==t.committer.name||t.committer.parts.length>1)throw new Error("The `styleMap` directive must be used in the style attribute and must be the only part in the attribute.");const{committer:i}=t,{style:o}=i.element;let r=St.get(t);void 0===r&&(o.cssText=i.strings.join(" "),St.set(t,r=new Set)),r.forEach(t=>{t in e||(r.delete(t),-1===t.indexOf("-")?o[t]=null:o.removeProperty(t))});for(const t in e)r.add(t),-1===t.indexOf("-")?o[t]=e[t]:o.setProperty(t,e[t])});class At extends ye{constructor(){super(...arguments),this.primary=!1,this.accent=!1,this.unbounded=!1,this.disabled=!1,this.activated=!1,this.selected=!1,this.hovering=!1,this.bgFocused=!1,this.fgActivation=!1,this.fgDeactivation=!1,this.fgScale="",this.fgSize="",this.translateStart="",this.translateEnd="",this.leftPos="",this.topPos="",this.mdcFoundationClass=vt}get isActive(){return(this.parentElement||this).matches(":active")}createAdapter(){return{browserSupportsCssVars:()=>!0,isUnbounded:()=>this.unbounded,isSurfaceActive:()=>this.isActive,isSurfaceDisabled:()=>this.disabled,addClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!0;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!0;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!0}},removeClass:e=>{switch(e){case"mdc-ripple-upgraded--background-focused":this.bgFocused=!1;break;case"mdc-ripple-upgraded--foreground-activation":this.fgActivation=!1;break;case"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation=!1}},containsEventTarget:()=>!0,registerInteractionHandler:()=>{},deregisterInteractionHandler:()=>{},registerDocumentInteractionHandler:()=>{},deregisterDocumentInteractionHandler:()=>{},registerResizeHandler:()=>{},deregisterResizeHandler:()=>{},updateCssVariable:(e,t)=>{switch(e){case"--mdc-ripple-fg-scale":this.fgScale=t;break;case"--mdc-ripple-fg-size":this.fgSize=t;break;case"--mdc-ripple-fg-translate-end":this.translateEnd=t;break;case"--mdc-ripple-fg-translate-start":this.translateStart=t;break;case"--mdc-ripple-left":this.leftPos=t;break;case"--mdc-ripple-top":this.topPos=t}},computeBoundingRect:()=>(this.parentElement||this).getBoundingClientRect(),getWindowPageOffset:()=>({x:window.pageXOffset,y:window.pageYOffset})}}startPress(e){this.waitForFoundation(()=>{this.mdcFoundation.activate(e)})}endPress(){this.waitForFoundation(()=>{this.mdcFoundation.deactivate()})}startFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleFocus()})}endFocus(){this.waitForFoundation(()=>{this.mdcFoundation.handleBlur()})}startHover(){this.hovering=!0}endHover(){this.hovering=!1}waitForFoundation(e){this.mdcFoundation?e():this.updateComplete.then(e)}render(){const e={"mdc-ripple-upgraded--unbounded":this.unbounded,"mdc-ripple-upgraded--background-focused":this.bgFocused,"mdc-ripple-upgraded--foreground-activation":this.fgActivation,"mdc-ripple-upgraded--foreground-deactivation":this.fgDeactivation,hover:this.hovering,primary:this.primary,accent:this.accent,disabled:this.disabled,activated:this.activated,selected:this.selected};return B`
        <div class="mdc-ripple-surface mdc-ripple-upgraded ${wt(e)}"
          style="${Et({"--mdc-ripple-fg-scale":this.fgScale,"--mdc-ripple-fg-size":this.fgSize,"--mdc-ripple-fg-translate-end":this.translateEnd,"--mdc-ripple-fg-translate-start":this.translateStart,"--mdc-ripple-left":this.leftPos,"--mdc-ripple-top":this.topPos})}"></div>`}}o([ie(".mdc-ripple-surface")],At.prototype,"mdcRoot",void 0),o([ee({type:Boolean})],At.prototype,"primary",void 0),o([ee({type:Boolean})],At.prototype,"accent",void 0),o([ee({type:Boolean})],At.prototype,"unbounded",void 0),o([ee({type:Boolean})],At.prototype,"disabled",void 0),o([ee({type:Boolean})],At.prototype,"activated",void 0),o([ee({type:Boolean})],At.prototype,"selected",void 0),o([te()],At.prototype,"hovering",void 0),o([te()],At.prototype,"bgFocused",void 0),o([te()],At.prototype,"fgActivation",void 0),o([te()],At.prototype,"fgDeactivation",void 0),o([te()],At.prototype,"fgScale",void 0),o([te()],At.prototype,"fgSize",void 0),o([te()],At.prototype,"translateStart",void 0),o([te()],At.prototype,"translateEnd",void 0),o([te()],At.prototype,"leftPos",void 0),o([te()],At.prototype,"topPos",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Rt=le`:host{display:block;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none}@keyframes mdc-ripple-fg-radius-in{from{animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transform:translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1)}to{transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}}@keyframes mdc-ripple-fg-opacity-in{from{animation-timing-function:linear;opacity:0}to{opacity:var(--mdc-ripple-fg-opacity, 0)}}@keyframes mdc-ripple-fg-opacity-out{from{animation-timing-function:linear;opacity:var(--mdc-ripple-fg-opacity, 0)}to{opacity:0}}:host .primary{--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host .accent{--mdc-ripple-color: var( --mdc-theme-secondary, #018786 )}:host .mdc-ripple-surface{top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;--mdc-ripple-fg-size: 0;--mdc-ripple-left: 0;--mdc-ripple-top: 0;--mdc-ripple-fg-scale: 1;--mdc-ripple-fg-translate-end: 0;--mdc-ripple-fg-translate-start: 0;-webkit-tap-highlight-color:rgba(0,0,0,0);will-change:transform,opacity;position:relative;outline:none;overflow:hidden;--mdc-ripple-fg-opacity: var( --mdc-ripple-press-opacity, 0.12 )}:host .mdc-ripple-surface::before,:host .mdc-ripple-surface::after{position:absolute;border-radius:50%;opacity:0;pointer-events:none;content:""}:host .mdc-ripple-surface::before{transition:opacity 15ms linear,background-color 15ms linear;z-index:1}:host .mdc-ripple-surface.mdc-ripple-upgraded::before{transform:scale(var(--mdc-ripple-fg-scale, 1))}:host .mdc-ripple-surface.mdc-ripple-upgraded::after{top:0;left:0;transform:scale(0);transform-origin:center center}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:var(--mdc-ripple-top, 0);left:var(--mdc-ripple-left, 0)}:host .mdc-ripple-surface.mdc-ripple-upgraded--foreground-activation::after{animation:mdc-ripple-fg-radius-in 225ms forwards,mdc-ripple-fg-opacity-in 75ms forwards}:host .mdc-ripple-surface.mdc-ripple-upgraded--foreground-deactivation::after{animation:mdc-ripple-fg-opacity-out 150ms;transform:translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1))}:host .mdc-ripple-surface::before,:host .mdc-ripple-surface::after{top:calc(50% - 100%);left:calc(50% - 100%);width:200%;height:200%}:host .mdc-ripple-surface.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded{overflow:visible}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::before,:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded::after{top:calc(50% - 50%);left:calc(50% - 50%);width:100%;height:100%}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::before,:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{top:var(--mdc-ripple-top, calc(50% - 50%));left:var(--mdc-ripple-left, calc(50% - 50%));width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host .mdc-ripple-surface.mdc-ripple-upgraded--unbounded.mdc-ripple-upgraded::after{width:var(--mdc-ripple-fg-size, 100%);height:var(--mdc-ripple-fg-size, 100%)}:host .mdc-ripple-surface.hover::before{opacity:0.04;opacity:var(--mdc-ripple-hover-opacity, 0.04)}:host .mdc-ripple-surface.mdc-ripple-upgraded--background-focused::before{opacity:0.12;opacity:var(--mdc-ripple-focus-opacity, 0.12)}:host .mdc-ripple-surface::before,:host .mdc-ripple-surface::after{background-color:#000;background-color:var(--mdc-ripple-color, #000)}:host .mdc-ripple-surface.activated{--mdc-ripple-press-opacity: calc( var(--mdc-ripple-press-opacity, 0.12) + 0.12 )}:host .mdc-ripple-surface.activated::before{opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12)}:host .mdc-ripple-surface.activated.hover::before{opacity:.16;opacity:calc( var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-activated-opacity, 0.12) )}:host .mdc-ripple-surface.activated.mdc-ripple-upgraded--background-focused::before{opacity:.24;opacity:calc( var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-activated-opacity, 0.12) )}:host .mdc-ripple-surface.selected{--mdc-ripple-press-opacity: calc( var(--mdc-ripple-press-opacity, 0.12) + 0.08 )}:host .mdc-ripple-surface.selected::before{opacity:0.08;opacity:var(--mdc-ripple-selected-opacity, 0.08)}:host .mdc-ripple-surface.selected.hover::before{opacity:.12;opacity:calc( var(--mdc-ripple-hover-opacity, 0.04) + var(--mdc-ripple-selected-opacity, 0.08) )}:host .mdc-ripple-surface.selected.mdc-ripple-upgraded--background-focused::before{opacity:.2;opacity:calc( var(--mdc-ripple-focus-opacity, 0.12) + var(--mdc-ripple-selected-opacity, 0.08) )}:host .mdc-ripple-surface.disabled{--mdc-ripple-color: transparent}:host .mdc-ripple-surface::before{z-index:1;z-index:var(--m-ripple-z-index, 1)}:host .mdc-ripple-surface::after{z-index:0;z-index:var(--m-ripple-z-index, 0)}`;let It=class extends At{};It.styles=Rt,It=o([Z("mwc-ripple")],It);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Tt{constructor(e){this.startPress=t=>{e().then(e=>{e&&e.startPress(t)})},this.endPress=()=>{e().then(e=>{e&&e.endPress()})},this.startFocus=()=>{e().then(e=>{e&&e.startFocus()})},this.endFocus=()=>{e().then(e=>{e&&e.endFocus()})},this.startHover=()=>{e().then(e=>{e&&e.startHover()})},this.endHover=()=>{e().then(e=>{e&&e.endHover()})}}}
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */class Ct extends he{constructor(){super(...arguments),this.value="",this.group=null,this.tabindex=-1,this.disabled=!1,this.twoline=!1,this.activated=!1,this.graphic=null,this.multipleGraphics=!1,this.hasMeta=!1,this.noninteractive=!1,this.selected=!1,this.shouldRenderRipple=!1,this._managingList=null,this.boundOnClick=this.onClick.bind(this),this._firstChanged=!0,this._skipPropRequest=!1,this.rippleHandlers=new Tt(()=>(this.shouldRenderRipple=!0,this.ripple)),this.listeners=[{target:this,eventNames:["click"],cb:()=>{this.onClick()}},{target:this,eventNames:["mouseenter"],cb:this.rippleHandlers.startHover},{target:this,eventNames:["mouseleave"],cb:this.rippleHandlers.endHover},{target:this,eventNames:["focus"],cb:this.rippleHandlers.startFocus},{target:this,eventNames:["blur"],cb:this.rippleHandlers.endFocus},{target:this,eventNames:["mousedown","touchstart"],cb:e=>{const t=e.type;this.onDown("mousedown"===t?"mouseup":"touchend",e)}}]}get text(){const e=this.textContent;return e?e.trim():""}render(){const e=this.renderText(),t=this.graphic?this.renderGraphic():B``,i=this.hasMeta?this.renderMeta():B``;return B`
      ${this.renderRipple()}
      ${t}
      ${e}
      ${i}`}renderRipple(){return this.shouldRenderRipple?B`
      <mwc-ripple
        .activated=${this.activated}>
      </mwc-ripple>`:this.activated?B`<div class="fake-activated-ripple"></div>`:B``}renderGraphic(){const e={multi:this.multipleGraphics};return B`
      <span class="mdc-list-item__graphic material-icons ${wt(e)}">
        <slot name="graphic"></slot>
      </span>`}renderMeta(){return B`
      <span class="mdc-list-item__meta material-icons">
        <slot name="meta"></slot>
      </span>`}renderText(){const e=this.twoline?this.renderTwoline():this.renderSingleLine();return B`
      <span class="mdc-list-item__text">
        ${e}
      </span>`}renderSingleLine(){return B`<slot></slot>`}renderTwoline(){return B`
      <span class="mdc-list-item__primary-text">
        <slot></slot>
      </span>
      <span class="mdc-list-item__secondary-text">
        <slot name="secondary"></slot>
      </span>
    `}onClick(){this.fireRequestSelected(!this.selected,"interaction")}onDown(e,t){const i=()=>{window.removeEventListener(e,i),this.rippleHandlers.endPress()};window.addEventListener(e,i),this.rippleHandlers.startPress(t)}fireRequestSelected(e,t){if(this.noninteractive)return;const i=new CustomEvent("request-selected",{bubbles:!0,composed:!0,detail:{source:t,selected:e}});this.dispatchEvent(i)}connectedCallback(){super.connectedCallback(),this.noninteractive||this.setAttribute("mwc-list-item","");for(const e of this.listeners)for(const t of e.eventNames)e.target.addEventListener(t,e.cb,{passive:!0})}disconnectedCallback(){super.disconnectedCallback();for(const e of this.listeners)for(const t of e.eventNames)e.target.removeEventListener(t,e.cb);this._managingList&&this._managingList.layout(!0)}firstUpdated(){const e=new Event("list-item-rendered",{bubbles:!0,composed:!0});this.dispatchEvent(e)}}o([ie("slot")],Ct.prototype,"slotElement",void 0),o([oe("mwc-ripple")],Ct.prototype,"ripple",void 0),o([ee({type:String})],Ct.prototype,"value",void 0),o([ee({type:String,reflect:!0})],Ct.prototype,"group",void 0),o([ee({type:Number,reflect:!0})],Ct.prototype,"tabindex",void 0),o([ee({type:Boolean,reflect:!0}),ke((function(e){e?this.setAttribute("aria-disabled","true"):this.setAttribute("aria-disabled","false")}))],Ct.prototype,"disabled",void 0),o([ee({type:Boolean,reflect:!0})],Ct.prototype,"twoline",void 0),o([ee({type:Boolean,reflect:!0})],Ct.prototype,"activated",void 0),o([ee({type:String,reflect:!0})],Ct.prototype,"graphic",void 0),o([ee({type:Boolean})],Ct.prototype,"multipleGraphics",void 0),o([ee({type:Boolean})],Ct.prototype,"hasMeta",void 0),o([ee({type:Boolean,reflect:!0}),ke((function(e){e?(this.removeAttribute("aria-checked"),this.removeAttribute("mwc-list-item"),this.selected=!1,this.activated=!1,this.tabIndex=-1):this.setAttribute("mwc-list-item","")}))],Ct.prototype,"noninteractive",void 0),o([ee({type:Boolean,reflect:!0}),ke((function(e){const t=this.getAttribute("role"),i="gridcell"===t||"option"===t||"row"===t||"tab"===t;i&&e?this.setAttribute("aria-selected","true"):i&&this.setAttribute("aria-selected","false"),this._firstChanged?this._firstChanged=!1:this._skipPropRequest||this.fireRequestSelected(e,"property")}))],Ct.prototype,"selected",void 0),o([te()],Ct.prototype,"shouldRenderRipple",void 0),o([te()],Ct.prototype,"_managingList",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ft=le`:host{cursor:pointer;user-select:none;-webkit-tap-highlight-color:transparent;height:48px;display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:var(--mdc-list-side-padding, 16px);padding-right:var(--mdc-list-side-padding, 16px);outline:none;height:48px;color:rgba(0,0,0,.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host:focus{outline:none}:host([activated]){color:#6200ee;color:var(--mdc-theme-primary, #6200ee);--mdc-ripple-color: var(--mdc-theme-primary, #6200ee)}:host([activated]) .mdc-list-item__graphic{color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}:host([activated]) .fake-activated-ripple::before{position:absolute;display:block;top:0;bottom:0;left:0;right:0;width:100%;height:100%;pointer-events:none;z-index:1;content:"";opacity:0.12;opacity:var(--mdc-ripple-activated-opacity, 0.12);background-color:#6200ee;background-color:var(--mdc-ripple-color, var(--mdc-theme-primary, #6200ee))}.mdc-list-item__graphic{flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;display:inline-flex}.mdc-list-item__graphic ::slotted(*){flex-shrink:0;align-items:center;justify-content:center;fill:currentColor;width:100%;height:100%;text-align:center}.mdc-list-item__meta{width:var(--mdc-list-item-meta-size, 24px);height:var(--mdc-list-item-meta-size, 24px);margin-left:auto;margin-right:0;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-item__meta.multi{width:auto}.mdc-list-item__meta ::slotted(*){width:var(--mdc-list-item-meta-size, 24px);line-height:var(--mdc-list-item-meta-size, 24px)}.mdc-list-item__meta ::slotted(.material-icons),.mdc-list-item__meta ::slotted(mwc-icon){line-height:var(--mdc-list-item-meta-size, 24px) !important}.mdc-list-item__meta ::slotted(:not(.material-icons):not(mwc-icon)){-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-caption-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.75rem;font-size:var(--mdc-typography-caption-font-size, 0.75rem);line-height:1.25rem;line-height:var(--mdc-typography-caption-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-caption-font-weight, 400);letter-spacing:0.0333333333em;letter-spacing:var(--mdc-typography-caption-letter-spacing, 0.0333333333em);text-decoration:inherit;text-decoration:var(--mdc-typography-caption-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-caption-text-transform, inherit)}:host[dir=rtl] .mdc-list-item__meta,[dir=rtl] :host .mdc-list-item__meta{margin-left:0;margin-right:auto}.mdc-list-item__meta ::slotted(*){width:100%;height:100%}.mdc-list-item__text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.mdc-list-item__text ::slotted([for]),.mdc-list-item__text[for]{pointer-events:none}.mdc-list-item__primary-text{text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;margin-bottom:-20px;display:block}.mdc-list-item__primary-text::before{display:inline-block;width:0;height:32px;content:"";vertical-align:0}.mdc-list-item__primary-text::after{display:inline-block;width:0;height:20px;content:"";vertical-align:-20px}.mdc-list-item__secondary-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-body2-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-body2-font-size, 0.875rem);line-height:1.25rem;line-height:var(--mdc-typography-body2-line-height, 1.25rem);font-weight:400;font-weight:var(--mdc-typography-body2-font-weight, 400);letter-spacing:0.0178571429em;letter-spacing:var(--mdc-typography-body2-letter-spacing, 0.0178571429em);text-decoration:inherit;text-decoration:var(--mdc-typography-body2-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-body2-text-transform, inherit);text-overflow:ellipsis;white-space:nowrap;overflow:hidden;display:block;margin-top:0;line-height:normal;display:block}.mdc-list-item__secondary-text::before{display:inline-block;width:0;height:20px;content:"";vertical-align:0}.mdc-list--dense .mdc-list-item__secondary-text{font-size:inherit}* ::slotted(a),a{color:inherit;text-decoration:none}:host([twoline]){height:72px}:host([twoline]) .mdc-list-item__text{align-self:flex-start}:host([disabled]),:host([noninteractive]){cursor:default;pointer-events:none}:host([disabled]) .mdc-list-item__text ::slotted(*){opacity:.38}:host([disabled]) .mdc-list-item__text ::slotted(*),:host([disabled]) .mdc-list-item__primary-text ::slotted(*),:host([disabled]) .mdc-list-item__secondary-text ::slotted(*){color:#000;color:var(--mdc-theme-on-surface, #000)}.mdc-list-item__secondary-text ::slotted(*){color:rgba(0, 0, 0, 0.54);color:var(--mdc-theme-text-secondary-on-background, rgba(0, 0, 0, 0.54))}.mdc-list-item__graphic ::slotted(*){background-color:transparent;color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-icon-on-background, rgba(0, 0, 0, 0.38))}.mdc-list-group__subheader ::slotted(*){color:rgba(0, 0, 0, 0.87);color:var(--mdc-theme-text-primary-on-background, rgba(0, 0, 0, 0.87))}:host([graphic=avatar]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 40px);height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 40px);line-height:var(--mdc-list-item-graphic-size, 40px)}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 40px) !important}:host([graphic=avatar]) .mdc-list-item__graphic ::slotted(*){border-radius:50%}:host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 16px)}:host[dir=rtl] :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=avatar],[graphic=medium],[graphic=large],[graphic=control]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 16px);margin-right:0}:host([graphic=icon]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 24px);height:var(--mdc-list-item-graphic-size, 24px);margin-left:0;margin-right:var(--mdc-list-item-graphic-margin, 32px)}:host([graphic=icon]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 24px);line-height:var(--mdc-list-item-graphic-size, 24px)}:host([graphic=icon]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=icon]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 24px) !important}:host[dir=rtl] :host([graphic=icon]) .mdc-list-item__graphic,[dir=rtl] :host :host([graphic=icon]) .mdc-list-item__graphic{margin-left:var(--mdc-list-item-graphic-margin, 32px);margin-right:0}:host([graphic=avatar]:not([twoLine])),:host([graphic=icon]:not([twoLine])){height:56px}:host([graphic=medium]:not([twoLine])),:host([graphic=large]:not([twoLine])){height:72px}:host([graphic=medium]) .mdc-list-item__graphic,:host([graphic=large]) .mdc-list-item__graphic{width:var(--mdc-list-item-graphic-size, 56px);height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic.multi,:host([graphic=large]) .mdc-list-item__graphic.multi{width:auto}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(*),:host([graphic=large]) .mdc-list-item__graphic ::slotted(*){width:var(--mdc-list-item-graphic-size, 56px);line-height:var(--mdc-list-item-graphic-size, 56px)}:host([graphic=medium]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=medium]) .mdc-list-item__graphic ::slotted(mwc-icon),:host([graphic=large]) .mdc-list-item__graphic ::slotted(.material-icons),:host([graphic=large]) .mdc-list-item__graphic ::slotted(mwc-icon){line-height:var(--mdc-list-item-graphic-size, 56px) !important}:host([graphic=large]){padding-left:0px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let zt=class extends Ct{};zt.styles=Ft,zt=o([Z("mwc-list-item")],zt);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class Ot extends ye{createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}click(){this.formElement&&(this.formElement.focus(),this.formElement.click())}setAriaLabel(e){this.formElement&&this.formElement.setAttribute("aria-label",e)}firstUpdated(){super.firstUpdated(),this.mdcRoot.addEventListener("change",e=>{this.dispatchEvent(new Event("change",e))})}}class Nt extends Ot{constructor(){super(...arguments),this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="",this.reducedTouchTarget=!1,this.animationClass="",this.shouldRenderRipple=!1,this.focused=!1,this.mdcFoundationClass=void 0,this.mdcFoundation=void 0,this.rippleElement=null,this.rippleHandlers=new Tt(()=>(this.shouldRenderRipple=!0,this.ripple.then(e=>this.rippleElement=e),this.ripple))}createAdapter(){return{}}update(e){const t=e.get("indeterminate"),i=e.get("checked"),o=e.get("disabled");if(void 0!==t||void 0!==i||void 0!==o){const e=this.calculateAnimationStateName(!!i,!!t,!!o),r=this.calculateAnimationStateName(this.checked,this.indeterminate,this.disabled);this.animationClass=`${e}-${r}`}super.update(e)}calculateAnimationStateName(e,t,i){return i?"disabled":t?"indeterminate":e?"checked":"unchecked"}renderRipple(){const e=this.indeterminate||this.checked;return this.shouldRenderRipple?B`
        <mwc-ripple
          .accent="${e}"
          .disabled="${this.disabled}"
          unbounded>
        </mwc-ripple>`:""}render(){const e=this.indeterminate||this.checked,t={"mdc-checkbox--disabled":this.disabled,"mdc-checkbox--selected":e,"mdc-checkbox--touch":!this.reducedTouchTarget,"mdc-checkbox--focused":this.focused,"mdc-checkbox--anim-checked-indeterminate":"checked-indeterminate"==this.animationClass,"mdc-checkbox--anim-checked-unchecked":"checked-unchecked"==this.animationClass,"mdc-checkbox--anim-indeterminate-checked":"indeterminate-checked"==this.animationClass,"mdc-checkbox--anim-indeterminate-unchecked":"indeterminate-unchecked"==this.animationClass,"mdc-checkbox--anim-unchecked-checked":"unchecked-checked"==this.animationClass,"mdc-checkbox--anim-unchecked-indeterminate":"unchecked-indeterminate"==this.animationClass},i=this.indeterminate?"mixed":void 0;return B`
      <div class="mdc-checkbox mdc-checkbox--upgraded ${wt(t)}">
        <input type="checkbox"
              class="mdc-checkbox__native-control"
              aria-checked="${Se(i)}"
              data-indeterminate="${this.indeterminate?"true":"false"}"
              ?disabled="${this.disabled}"
              .indeterminate="${this.indeterminate}"
              .checked="${this.checked}"
              .value="${this.value}"
              @change="${this._changeHandler}"
              @focus="${this._handleFocus}"
              @blur="${this._handleBlur}"
              @mousedown="${this.handleRippleMouseDown}"
              @mouseenter="${this.handleRippleMouseEnter}"
              @mouseleave="${this.handleRippleMouseLeave}"
              @touchstart="${this.handleRippleTouchStart}"
              @touchend="${this.handleRippleDeactivate}"
              @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-checkbox__background"
          @animationend="${this.resetAnimationClass}">
          <svg class="mdc-checkbox__checkmark"
              viewBox="0 0 24 24">
            <path class="mdc-checkbox__checkmark-path"
                  fill="none"
                  d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
          </svg>
          <div class="mdc-checkbox__mixedmark"></div>
        </div>
        ${this.renderRipple()}
      </div>`}_handleFocus(){this.focused=!0,this.handleRippleFocus()}_handleBlur(){this.focused=!1,this.handleRippleBlur()}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}_changeHandler(){this.checked=this.formElement.checked,this.indeterminate=this.formElement.indeterminate}resetAnimationClass(){this.animationClass=""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}}o([ie(".mdc-checkbox")],Nt.prototype,"mdcRoot",void 0),o([ie("input")],Nt.prototype,"formElement",void 0),o([ee({type:Boolean,reflect:!0})],Nt.prototype,"checked",void 0),o([ee({type:Boolean})],Nt.prototype,"indeterminate",void 0),o([ee({type:Boolean,reflect:!0})],Nt.prototype,"disabled",void 0),o([ee({type:String})],Nt.prototype,"value",void 0),o([ee({type:Boolean})],Nt.prototype,"reducedTouchTarget",void 0),o([te()],Nt.prototype,"animationClass",void 0),o([te()],Nt.prototype,"shouldRenderRipple",void 0),o([te()],Nt.prototype,"focused",void 0),o([oe("mwc-ripple")],Nt.prototype,"ripple",void 0),o([ae({passive:!0})],Nt.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Pt=le`.mdc-checkbox{padding:11px;margin-top:0px;margin-bottom:0px;margin-right:0px;margin-left:0px}.mdc-checkbox .mdc-checkbox__ripple::before,.mdc-checkbox .mdc-checkbox__ripple::after{background-color:#000}.mdc-checkbox:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox .mdc-checkbox__native-control:checked~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background::before,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox.mdc-checkbox--selected:hover .mdc-checkbox__ripple::before{opacity:.04}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded--background-focused .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):focus .mdc-checkbox__ripple::before{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded) .mdc-checkbox__ripple::after{transition:opacity 150ms linear}.mdc-checkbox.mdc-checkbox--selected:not(.mdc-ripple-upgraded):active .mdc-checkbox__ripple::after{transition-duration:75ms;opacity:.12}.mdc-checkbox.mdc-checkbox--selected.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.12}.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::before,.mdc-checkbox.mdc-ripple-upgraded--background-focused.mdc-checkbox--selected .mdc-checkbox__ripple::after{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-checkbox .mdc-checkbox__background{top:11px;left:11px}.mdc-checkbox .mdc-checkbox__background::before{top:-13px;left:-13px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-checkbox .mdc-checkbox__native-control:enabled:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true]:enabled~.mdc-checkbox__background{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}@keyframes mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786{0%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}50%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}}@keyframes mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786{0%,80%{border-color:#018786;border-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786));background-color:#018786;background-color:var(--mdc-checkbox-checked-color, var(--mdc-theme-secondary, #018786))}100%{border-color:rgba(0, 0, 0, 0.54);border-color:var(--mdc-checkbox-unchecked-color, rgba(0, 0, 0, 0.54));background-color:transparent}}.mdc-checkbox.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-in-background-8A000000FF01878600000000FF018786}.mdc-checkbox.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__native-control:enabled~.mdc-checkbox__background{animation-name:mdc-checkbox-fade-out-background-8A000000FF01878600000000FF018786}.mdc-checkbox .mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:rgba(0, 0, 0, 0.38);border-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38));background-color:transparent}.mdc-checkbox .mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox .mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:transparent;background-color:rgba(0, 0, 0, 0.38);background-color:var(--mdc-checkbox-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:enabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:#fff;color:var(--mdc-checkbox-ink-color, #fff)}.mdc-checkbox .mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:#fff;border-color:var(--mdc-checkbox-ink-color, #fff)}.mdc-touch-target-wrapper{display:inline}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:mdc-animation-deceleration-curve-timing-function;transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom}@media screen and (-ms-high-contrast: active){.mdc-checkbox__native-control[disabled]:not(:checked):not(:indeterminate):not([data-indeterminate=true])~.mdc-checkbox__background{border-color:GrayText;border-color:var(--mdc-checkbox-disabled-color, GrayText);background-color:transparent}.mdc-checkbox__native-control[disabled]:checked~.mdc-checkbox__background,.mdc-checkbox__native-control[disabled]:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true][disabled]~.mdc-checkbox__background{border-color:GrayText;background-color:transparent;background-color:var(--mdc-checkbox-disabled-color, transparent)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__checkmark{color:GrayText;color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__native-control:disabled~.mdc-checkbox__background .mdc-checkbox__mixedmark{border-color:GrayText;border-color:var(--mdc-checkbox-ink-color, GrayText)}.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:transparent;pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__background .mdc-checkbox__background::before{background-color:#000;background-color:var(--mdc-theme-on-surface, #000)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--upgraded .mdc-checkbox__checkmark{opacity:1}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms 0ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear 0s;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear 0s;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear 0s;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background{transition:border-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark-path,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";will-change:opacity,transform;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:focus~.mdc-checkbox__background::before{transform:scale(1);opacity:.12;transition:opacity 80ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 80ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit}.mdc-checkbox__native-control:disabled{cursor:default;pointer-events:none}.mdc-checkbox--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-checkbox--touch .mdc-checkbox__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__checkmark{transition:opacity 180ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 180ms 0ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__checkmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background .mdc-checkbox__mixedmark,.mdc-checkbox__native-control[data-indeterminate=true]~.mdc-checkbox__background .mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__background,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__checkmark-path,.mdc-checkbox.mdc-checkbox--upgraded .mdc-checkbox__mixedmark{transition:none}:host{outline:none;display:inline-block}.mdc-checkbox .mdc-checkbox__background::before{content:none}`;let Dt=class extends Nt{};Dt.styles=Pt,Dt=o([Z("mwc-checkbox")],Dt);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class Lt extends Ct{constructor(){super(...arguments),this.left=!1,this.graphic="control"}render(){const e={"mdc-list-item__graphic":this.left,"mdc-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():B``,o=this.hasMeta&&this.left?this.renderMeta():B``,r=this.renderRipple();return B`
      ${r}
      ${i}
      ${this.left?"":t}
      <span class=${wt(e)}>
        <mwc-checkbox
            reducedTouchTarget
            tabindex=${this.tabindex}
            .checked=${this.selected}
            ?disabled=${this.disabled}
            @change=${this.onChange}>
        </mwc-checkbox>
      </span>
      ${this.left?t:""}
      ${o}`}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1)}}o([ie("slot")],Lt.prototype,"slotElement",void 0),o([ie("mwc-checkbox")],Lt.prototype,"checkboxElement",void 0),o([ee({type:Boolean})],Lt.prototype,"left",void 0),o([ee({type:String,reflect:!0})],Lt.prototype,"graphic",void 0);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Ht=le`:host(:not([twoline])){height:56px}:host(:not([left])) .mdc-list-item__meta{height:40px;width:40px}`
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let Mt=class extends Lt{};Mt.styles=[Ft,Ht],Mt=o([Z("mwc-check-list-item")],Mt);
/**
 * @license
 *  Copyright 2020 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 *
 *     Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $t=Symbol("selection controller");class Bt{constructor(){this.selected=null,this.ordered=null,this.set=new Set}}class Vt{constructor(e){this.sets={},this.focusedSet=null,this.mouseIsDown=!1,this.updating=!1,e.addEventListener("keydown",e=>{this.keyDownHandler(e)}),e.addEventListener("mousedown",()=>{this.mousedownHandler()}),e.addEventListener("mouseup",()=>{this.mouseupHandler()})}static getController(e){const t=!("global"in e)||"global"in e&&e.global?document:e.getRootNode();let i=t[$t];return void 0===i&&(i=new Vt(t),t[$t]=i),i}keyDownHandler(e){const t=e.target;"checked"in t&&this.has(t)&&("ArrowRight"==e.key||"ArrowDown"==e.key?this.selectNext(t):"ArrowLeft"!=e.key&&"ArrowUp"!=e.key||this.selectPrevious(t))}mousedownHandler(){this.mouseIsDown=!0}mouseupHandler(){this.mouseIsDown=!1}has(e){return this.getSet(e.name).set.has(e)}selectPrevious(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i-1]||t[t.length-1];return this.select(o),o}selectNext(e){const t=this.getOrdered(e),i=t.indexOf(e),o=t[i+1]||t[0];return this.select(o),o}select(e){e.click()}focus(e){if(this.mouseIsDown)return;const t=this.getSet(e.name),i=this.focusedSet;this.focusedSet=t,i!=t&&t.selected&&t.selected!=e&&t.selected.focus()}getOrdered(e){const t=this.getSet(e.name);return t.ordered||(t.ordered=Array.from(t.set),t.ordered.sort((e,t)=>e.compareDocumentPosition(t)==Node.DOCUMENT_POSITION_PRECEDING?1:0)),t.ordered}getSet(e){return this.sets[e]||(this.sets[e]=new Bt),this.sets[e]}register(e){const t=this.getSet(e.name);t.set.add(e),t.ordered=null}unregister(e){const t=this.getSet(e.name);t.set.delete(e),t.ordered=null,t.selected==e&&(t.selected=null)}update(e){if(!this.updating){if(this.updating=!0,e.checked){const t=this.getSet(e.name);for(const i of t.set)i.checked=i==e;t.selected=e}this.updating=!1}}}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ut={NATIVE_CONTROL_SELECTOR:".mdc-radio__native-control"},jt={DISABLED:"mdc-radio--disabled",ROOT:"mdc-radio"},qt=function(e){function o(t){return e.call(this,i(i({},o.defaultAdapter),t))||this}return t(o,e),Object.defineProperty(o,"cssClasses",{get:function(){return jt},enumerable:!0,configurable:!0}),Object.defineProperty(o,"strings",{get:function(){return Ut},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNativeControlDisabled:function(){}}},enumerable:!0,configurable:!0}),o.prototype.setDisabled=function(e){var t=o.cssClasses.DISABLED;this.adapter.setNativeControlDisabled(e),e?this.adapter.addClass(t):this.adapter.removeClass(t)},o}(Ee);class Gt extends Ot{constructor(){super(...arguments),this._checked=!1,this.global=!1,this.disabled=!1,this.value="",this.name="",this.mdcFoundationClass=qt,this.shouldRenderRipple=!1,this.rippleElement=null,this.rippleHandlers=new Tt(()=>(this.shouldRenderRipple=!0,this.ripple.then(e=>{this.rippleElement=e}),this.ripple))}get checked(){return this._checked}set checked(e){const t=this._checked;!!e!=!!t&&(this._checked=e,this.formElement&&(this.formElement.checked=e),void 0!==this._selectionController&&this._selectionController.update(this),this.requestUpdate("checked",t),this.dispatchEvent(new Event("checked",{bubbles:!0,composed:!0})))}_handleUpdatedValue(e){this.formElement.value=e}renderRipple(){return this.shouldRenderRipple?B`<mwc-ripple unbounded accent .disabled="${this.disabled}"></mwc-ripple>`:""}get isRippleActive(){var e;return(null===(e=this.rippleElement)||void 0===e?void 0:e.isActive)||!1}connectedCallback(){super.connectedCallback(),this._selectionController=Vt.getController(this),this._selectionController.register(this),this._selectionController.update(this)}disconnectedCallback(){this._selectionController.unregister(this),this._selectionController=void 0}focus(){this.focusNative()}focusNative(){this.formElement.focus()}createAdapter(){return Object.assign(Object.assign({},be(this.mdcRoot)),{setNativeControlDisabled:e=>{this.formElement.disabled=e}})}handleFocus(){void 0!==this._selectionController&&(this._selectionController.focus(this),this.handleRippleFocus())}handleClick(){this.formElement.focus()}handleBlur(){this.formElement.blur(),this.handleRippleBlur()}render(){return B`
      <div class="mdc-radio">
        <input
          class="mdc-radio__native-control"
          type="radio"
          name="${this.name}"
          .checked="${this.checked}"
          .value="${this.value}"
          @change="${this.changeHandler}"
          @focus="${this.handleFocus}"
          @click="${this.handleClick}"
          @blur="${this.handleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        <div class="mdc-radio__background">
          <div class="mdc-radio__outer-circle"></div>
          <div class="mdc-radio__inner-circle"></div>
        </div>
        ${this.renderRipple()}
      </div>`}firstUpdated(){super.firstUpdated(),this.formElement.checked=this.checked,void 0!==this._selectionController&&this._selectionController.update(this)}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}changeHandler(){this.checked=this.formElement.checked}}o([ie(".mdc-radio")],Gt.prototype,"mdcRoot",void 0),o([ie("input")],Gt.prototype,"formElement",void 0),o([ee({type:Boolean})],Gt.prototype,"global",void 0),o([ee({type:Boolean,reflect:!0})],Gt.prototype,"checked",null),o([ee({type:Boolean}),ke((function(e){this.mdcFoundation.setDisabled(e)}))],Gt.prototype,"disabled",void 0),o([ee({type:String}),ke((function(e){this._handleUpdatedValue(e)}))],Gt.prototype,"value",void 0),o([ee({type:String})],Gt.prototype,"name",void 0),o([te()],Gt.prototype,"shouldRenderRipple",void 0),o([oe("mwc-ripple")],Gt.prototype,"ripple",void 0),o([ae({passive:!0})],Gt.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Xt=le`.mdc-touch-target-wrapper{display:inline}.mdc-radio{padding:10px;display:inline-block;position:relative;flex:0 0 auto;box-sizing:content-box;width:20px;height:20px;cursor:pointer;will-change:opacity,transform,border-color,color}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.54)}.mdc-radio .mdc-radio__native-control:enabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__native-control:enabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:#018786;border-color:var(--mdc-theme-secondary, #018786)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:rgba(0, 0, 0, 0.38)}.mdc-radio .mdc-radio__background::before{background-color:#018786;background-color:var(--mdc-theme-secondary, #018786)}.mdc-radio .mdc-radio__background::before{top:-10px;left:-10px;width:40px;height:40px}.mdc-radio .mdc-radio__native-control{top:0px;right:0px;left:0px;width:40px;height:40px}.mdc-radio__background{display:inline-block;position:relative;box-sizing:border-box;width:20px;height:20px}.mdc-radio__background::before{position:absolute;transform:scale(0, 0);border-radius:50%;opacity:0;pointer-events:none;content:"";transition:opacity 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__outer-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;border-width:2px;border-style:solid;border-radius:50%;transition:border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__inner-circle{position:absolute;top:0;left:0;box-sizing:border-box;width:100%;height:100%;transform:scale(0, 0);border-width:10px;border-style:solid;border-radius:50%;transition:transform 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1),border-color 120ms 0ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-radio__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1}.mdc-radio--touch{margin-top:4px;margin-bottom:4px;margin-right:4px;margin-left:4px}.mdc-radio--touch .mdc-radio__native-control{top:-4px;right:-4px;left:-4px;width:48px;height:48px}.mdc-radio__native-control:checked+.mdc-radio__background,.mdc-radio__native-control:disabled+.mdc-radio__background{transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__outer-circle{transition:border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio--disabled{cursor:default;pointer-events:none}.mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__inner-circle{transform:scale(0.5);transition:transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1),border-color 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-radio__native-control:disabled+.mdc-radio__background,[aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background{cursor:default}.mdc-radio__native-control:focus+.mdc-radio__background::before{transform:scale(1);opacity:.12;transition:opacity 120ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 120ms 0ms cubic-bezier(0, 0, 0.2, 1)}:host{display:inline-block;outline:none}.mdc-radio{vertical-align:bottom}.mdc-radio .mdc-radio__native-control:enabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-unchecked-color, rgba(0, 0, 0, 0.54))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:not(:checked)+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control:checked+.mdc-radio__background .mdc-radio__outer-circle,.mdc-radio .mdc-radio__native-control:disabled:checked+.mdc-radio__background .mdc-radio__outer-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}.mdc-radio [aria-disabled=true] .mdc-radio__native-control+.mdc-radio__background .mdc-radio__inner-circle,.mdc-radio .mdc-radio__native-control:disabled+.mdc-radio__background .mdc-radio__inner-circle{border-color:var(--mdc-radio-disabled-color, rgba(0, 0, 0, 0.38))}`;let Wt=class extends Gt{};Wt.styles=Xt,Wt=o([Z("mwc-radio")],Wt);
/**
 @license
 Copyright 2020 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
class Yt extends Ct{constructor(){super(...arguments),this.left=!1,this.graphic="control",this._changeFromClick=!1}render(){const e={"mdc-list-item__graphic":this.left,"mdc-list-item__meta":!this.left},t=this.renderText(),i=this.graphic&&"control"!==this.graphic&&!this.left?this.renderGraphic():B``,o=this.hasMeta&&this.left?this.renderMeta():B``,r=this.renderRipple();return B`
      ${r}
      ${i}
      ${this.left?"":t}
      <mwc-radio
          global
          class=${wt(e)}
          tabindex=${this.tabindex}
          name=${Se(null===this.group?void 0:this.group)}
          .checked=${this.selected}
          ?disabled=${this.disabled}
          @checked=${this.onChange}>
      </mwc-radio>
      ${this.left?t:""}
      ${o}`}onClick(){this._changeFromClick=!0,super.onClick()}async onChange(e){const t=e.target;this.selected===t.checked||(this._skipPropRequest=!0,this.selected=t.checked,await this.updateComplete,this._skipPropRequest=!1,this._changeFromClick||this.fireRequestSelected(this.selected,"interaction")),this._changeFromClick=!1}}o([ie("slot")],Yt.prototype,"slotElement",void 0),o([ie("mwc-radio")],Yt.prototype,"radioElement",void 0),o([ee({type:Boolean})],Yt.prototype,"left",void 0),o([ee({type:String,reflect:!0})],Yt.prototype,"graphic",void 0);
/**
@license
Copyright 2020 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
let Kt=class extends Yt{};Kt.styles=[Ft,Ht],Kt=o([Z("mwc-radio-list-item")],Kt);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const Jt=le`.mdc-top-app-bar{background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee);color:white;display:flex;position:fixed;flex-direction:column;justify-content:space-between;box-sizing:border-box;width:100%;z-index:4}.mdc-top-app-bar .mdc-top-app-bar__action-item,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon{color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item::before,.mdc-top-app-bar .mdc-top-app-bar__action-item::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon::after{background-color:#fff;background-color:var(--mdc-theme-on-primary, #fff)}.mdc-top-app-bar .mdc-top-app-bar__action-item:hover::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:hover::before{opacity:.08}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):focus::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded--background-focused::before,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):focus::before{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded)::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded)::after{transition:opacity 150ms linear}.mdc-top-app-bar .mdc-top-app-bar__action-item:not(.mdc-ripple-upgraded):active::after,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon:not(.mdc-ripple-upgraded):active::after{transition-duration:75ms;opacity:.24}.mdc-top-app-bar .mdc-top-app-bar__action-item.mdc-ripple-upgraded,.mdc-top-app-bar .mdc-top-app-bar__navigation-icon.mdc-ripple-upgraded{--mdc-ripple-fg-opacity: 0.24}.mdc-top-app-bar__row{display:flex;position:relative;box-sizing:border-box;width:100%;height:64px}.mdc-top-app-bar__section{display:inline-flex;flex:1 1 auto;align-items:center;min-width:0;padding:8px 12px;z-index:1}.mdc-top-app-bar__section--align-start{justify-content:flex-start;order:-1}.mdc-top-app-bar__section--align-end{justify-content:flex-end;order:1}.mdc-top-app-bar__title{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-headline6-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:1.25rem;font-size:var(--mdc-typography-headline6-font-size, 1.25rem);line-height:2rem;line-height:var(--mdc-typography-headline6-line-height, 2rem);font-weight:500;font-weight:var(--mdc-typography-headline6-font-weight, 500);letter-spacing:0.0125em;letter-spacing:var(--mdc-typography-headline6-letter-spacing, 0.0125em);text-decoration:inherit;text-decoration:var(--mdc-typography-headline6-text-decoration, inherit);text-transform:inherit;text-transform:var(--mdc-typography-headline6-text-transform, inherit);padding-left:20px;padding-right:0;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;z-index:1}[dir=rtl] .mdc-top-app-bar__title,.mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--short-collapsed{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:24px;border-bottom-left-radius:0}[dir=rtl] .mdc-top-app-bar--short-collapsed,.mdc-top-app-bar--short-collapsed[dir=rtl]{border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:0;border-bottom-left-radius:24px}.mdc-top-app-bar--short{top:0;right:auto;left:0;width:100%;transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}[dir=rtl] .mdc-top-app-bar--short,.mdc-top-app-bar--short[dir=rtl]{right:0;left:auto}.mdc-top-app-bar--short .mdc-top-app-bar__row{height:56px}.mdc-top-app-bar--short .mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short .mdc-top-app-bar__title{transition:opacity 200ms cubic-bezier(0.4, 0, 0.2, 1);opacity:1}.mdc-top-app-bar--short-collapsed{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);width:56px;transition:width 300ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__title{display:none}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__action-item{transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item{width:112px}.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed.mdc-top-app-bar--short-has-action-item .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--dense .mdc-top-app-bar__row{height:48px}.mdc-top-app-bar--dense .mdc-top-app-bar__section{padding:0 4px}.mdc-top-app-bar--dense .mdc-top-app-bar__title{padding-left:12px;padding-right:0}[dir=rtl] .mdc-top-app-bar--dense .mdc-top-app-bar__title,.mdc-top-app-bar--dense .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:12px}.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:128px}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{align-self:flex-end;padding-bottom:2px}.mdc-top-app-bar--prominent .mdc-top-app-bar__action-item,.mdc-top-app-bar--prominent .mdc-top-app-bar__navigation-icon{align-self:flex-start}.mdc-top-app-bar--fixed{transition:box-shadow 200ms linear}.mdc-top-app-bar--fixed-scrolled{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12);transition:box-shadow 200ms linear}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__row{height:96px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section{padding:0 12px}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-left:20px;padding-right:0;padding-bottom:9px}[dir=rtl] .mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title,.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__title[dir=rtl]{padding-left:0;padding-right:20px}.mdc-top-app-bar--fixed-adjust{padding-top:64px}.mdc-top-app-bar--dense-fixed-adjust{padding-top:48px}.mdc-top-app-bar--short-fixed-adjust{padding-top:56px}.mdc-top-app-bar--prominent-fixed-adjust{padding-top:128px}.mdc-top-app-bar--dense-prominent-fixed-adjust{padding-top:96px}@media(max-width: 599px){.mdc-top-app-bar__row{height:56px}.mdc-top-app-bar__section{padding:4px}.mdc-top-app-bar--short{transition:width 200ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed{transition:width 250ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end{padding-left:0;padding-right:12px}[dir=rtl] .mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end,.mdc-top-app-bar--short-collapsed .mdc-top-app-bar__section--align-end[dir=rtl]{padding-left:12px;padding-right:0}.mdc-top-app-bar--prominent .mdc-top-app-bar__title{padding-bottom:6px}.mdc-top-app-bar--fixed-adjust{padding-top:56px}}:host{display:block}.mdc-top-app-bar{color:#fff;color:var(--mdc-theme-on-primary, #fff);width:100%;width:var(--mdc-top-app-bar-width, 100%)}.mdc-top-app-bar--prominent #navigation ::slotted(*),.mdc-top-app-bar--prominent #actions ::slotted(*){align-self:flex-start}#navigation ::slotted(*),#actions ::slotted(*){--mdc-icon-button-ripple-opacity: 0.24}.mdc-top-app-bar--short-collapsed #actions ::slotted(*){transition:padding 150ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-top-app-bar__section--align-center{justify-content:center}.mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.center-title .mdc-top-app-bar__section--align-start,.center-title .mdc-top-app-bar__section--align-end{flex-basis:0}.mdc-top-app-bar--dense.mdc-top-app-bar--prominent .mdc-top-app-bar__section--align-center .mdc-top-app-bar__title{padding-left:0;padding-right:0}.mdc-top-app-bar--fixed-scrolled{box-shadow:var(--mdc-top-app-bar-fixed-box-shadow, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}`
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;var Zt={FIXED_CLASS:"mdc-top-app-bar--fixed",FIXED_SCROLLED_CLASS:"mdc-top-app-bar--fixed-scrolled",SHORT_CLASS:"mdc-top-app-bar--short",SHORT_COLLAPSED_CLASS:"mdc-top-app-bar--short-collapsed",SHORT_HAS_ACTION_ITEM_CLASS:"mdc-top-app-bar--short-has-action-item"},Qt={DEBOUNCE_THROTTLE_RESIZE_TIME_MS:100,MAX_TOP_APP_BAR_HEIGHT:128},ei={ACTION_ITEM_SELECTOR:".mdc-top-app-bar__action-item",NAVIGATION_EVENT:"MDCTopAppBar:nav",NAVIGATION_ICON_SELECTOR:".mdc-top-app-bar__navigation-icon",ROOT_SELECTOR:".mdc-top-app-bar",TITLE_SELECTOR:".mdc-top-app-bar__title"},ti=function(e){function o(t){return e.call(this,i(i({},o.defaultAdapter),t))||this}return t(o,e),Object.defineProperty(o,"strings",{get:function(){return ei},enumerable:!0,configurable:!0}),Object.defineProperty(o,"cssClasses",{get:function(){return Zt},enumerable:!0,configurable:!0}),Object.defineProperty(o,"numbers",{get:function(){return Qt},enumerable:!0,configurable:!0}),Object.defineProperty(o,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},getTopAppBarHeight:function(){return 0},notifyNavigationIconClicked:function(){},getViewportScrollY:function(){return 0},getTotalActionItems:function(){return 0}}},enumerable:!0,configurable:!0}),o.prototype.handleTargetScroll=function(){},o.prototype.handleWindowResize=function(){},o.prototype.handleNavigationClick=function(){this.adapter.notifyNavigationIconClicked()},o}(Ee),ii=function(e){function i(t){var i=e.call(this,t)||this;return i.wasDocked_=!0,i.isDockedShowing_=!0,i.currentAppBarOffsetTop_=0,i.isCurrentlyBeingResized_=!1,i.resizeThrottleId_=0,i.resizeDebounceId_=0,i.lastScrollPosition_=i.adapter.getViewportScrollY(),i.topAppBarHeight_=i.adapter.getTopAppBarHeight(),i}return t(i,e),i.prototype.destroy=function(){e.prototype.destroy.call(this),this.adapter.setStyle("top","")},i.prototype.handleTargetScroll=function(){var e=Math.max(this.adapter.getViewportScrollY(),0),t=e-this.lastScrollPosition_;this.lastScrollPosition_=e,this.isCurrentlyBeingResized_||(this.currentAppBarOffsetTop_-=t,this.currentAppBarOffsetTop_>0?this.currentAppBarOffsetTop_=0:Math.abs(this.currentAppBarOffsetTop_)>this.topAppBarHeight_&&(this.currentAppBarOffsetTop_=-this.topAppBarHeight_),this.moveTopAppBar_())},i.prototype.handleWindowResize=function(){var e=this;this.resizeThrottleId_||(this.resizeThrottleId_=setTimeout((function(){e.resizeThrottleId_=0,e.throttledResizeHandler_()}),Qt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)),this.isCurrentlyBeingResized_=!0,this.resizeDebounceId_&&clearTimeout(this.resizeDebounceId_),this.resizeDebounceId_=setTimeout((function(){e.handleTargetScroll(),e.isCurrentlyBeingResized_=!1,e.resizeDebounceId_=0}),Qt.DEBOUNCE_THROTTLE_RESIZE_TIME_MS)},i.prototype.checkForUpdate_=function(){var e=-this.topAppBarHeight_,t=this.currentAppBarOffsetTop_<0,i=this.currentAppBarOffsetTop_>e,o=t&&i;if(o)this.wasDocked_=!1;else{if(!this.wasDocked_)return this.wasDocked_=!0,!0;if(this.isDockedShowing_!==i)return this.isDockedShowing_=i,!0}return o},i.prototype.moveTopAppBar_=function(){if(this.checkForUpdate_()){var e=this.currentAppBarOffsetTop_;Math.abs(e)>=this.topAppBarHeight_&&(e=-Qt.MAX_TOP_APP_BAR_HEIGHT),this.adapter.setStyle("top",e+"px")}},i.prototype.throttledResizeHandler_=function(){var e=this.adapter.getTopAppBarHeight();this.topAppBarHeight_!==e&&(this.wasDocked_=!1,this.currentAppBarOffsetTop_-=this.topAppBarHeight_-e,this.topAppBarHeight_=e),this.handleTargetScroll()},i}(ti);const oi=xe?{passive:!0}:void 0;class ri extends ye{constructor(){super(...arguments),this.mdcFoundationClass=ti,this.centerTitle=!1,this.handleTargetScroll=()=>{this.mdcFoundation.handleTargetScroll()},this.handleNavigationClick=()=>{this.mdcFoundation.handleNavigationClick()}}get scrollTarget(){return this._scrollTarget||window}set scrollTarget(e){this.unregisterScrollListener();const t=this.scrollTarget;this._scrollTarget=e,this.updateRootPosition(),this.requestUpdate("scrollTarget",t),this.registerScrollListener()}updateRootPosition(){if(this.mdcRoot){const e=this.scrollTarget===window;this.mdcRoot.style.position=e?"":"absolute"}}render(){let e=B`<span class="mdc-top-app-bar__title"><slot name="title"></slot></span>`;return this.centerTitle&&(e=B`<section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-center">${e}</section>`),B`
      <header class="mdc-top-app-bar ${wt(this.barClasses())}">
      <div class="mdc-top-app-bar__row">
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start" id="navigation">
          <slot name="navigationIcon"
            @click=${this.handleNavigationClick}></slot>
          ${this.centerTitle?null:e}
        </section>
        ${this.centerTitle?e:null}
        <section class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end" id="actions" role="toolbar">
          <slot name="actionItems"></slot>
        </section>
      </div>
    </header>
    <div class="${wt(this.contentClasses())}">
      <slot></slot>
    </div>
    `}createAdapter(){return Object.assign(Object.assign({},be(this.mdcRoot)),{setStyle:(e,t)=>this.mdcRoot.style.setProperty(e,t),getTopAppBarHeight:()=>this.mdcRoot.clientHeight,notifyNavigationIconClicked:()=>{this.dispatchEvent(new Event(ei.NAVIGATION_EVENT,{bubbles:!0,cancelable:!0}))},getViewportScrollY:()=>this.scrollTarget instanceof Window?this.scrollTarget.pageYOffset:this.scrollTarget.scrollTop,getTotalActionItems:()=>this._actionItemsSlot.assignedNodes({flatten:!0}).length})}registerListeners(){this.registerScrollListener()}unregisterListeners(){this.unregisterScrollListener()}registerScrollListener(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,oi)}unregisterScrollListener(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}firstUpdated(){super.firstUpdated(),this.updateRootPosition(),this.registerListeners()}disconnectedCallback(){super.disconnectedCallback(),this.unregisterListeners()}}o([ie(".mdc-top-app-bar")],ri.prototype,"mdcRoot",void 0),o([ie('slot[name="actionItems"]')],ri.prototype,"_actionItemsSlot",void 0),o([ee({type:Boolean})],ri.prototype,"centerTitle",void 0),o([ee()],ri.prototype,"scrollTarget",null);class ni extends ri{constructor(){super(...arguments),this.mdcFoundationClass=ii,this.prominent=!1,this.dense=!1,this.handleResize=()=>{this.mdcFoundation.handleWindowResize()}}barClasses(){return{"mdc-top-app-bar--dense":this.dense,"mdc-top-app-bar--prominent":this.prominent,"center-title":this.centerTitle}}contentClasses(){return{"mdc-top-app-bar--fixed-adjust":!this.dense&&!this.prominent,"mdc-top-app-bar--dense-fixed-adjust":this.dense&&!this.prominent,"mdc-top-app-bar--prominent-fixed-adjust":!this.dense&&this.prominent,"mdc-top-app-bar--dense-prominent-fixed-adjust":this.dense&&this.prominent}}registerListeners(){super.registerListeners(),window.addEventListener("resize",this.handleResize,oi)}unregisterListeners(){super.unregisterListeners(),window.removeEventListener("resize",this.handleResize)}}o([ee({type:Boolean,reflect:!0})],ni.prototype,"prominent",void 0),o([ee({type:Boolean,reflect:!0})],ni.prototype,"dense",void 0);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var ai=function(e){function i(){var t=null!==e&&e.apply(this,arguments)||this;return t.wasScrolled_=!1,t}return t(i,e),i.prototype.handleTargetScroll=function(){this.adapter.getViewportScrollY()<=0?this.wasScrolled_&&(this.adapter.removeClass(Zt.FIXED_SCROLLED_CLASS),this.wasScrolled_=!1):this.wasScrolled_||(this.adapter.addClass(Zt.FIXED_SCROLLED_CLASS),this.wasScrolled_=!0)},i}(ii);
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/class si extends ni{constructor(){super(...arguments),this.mdcFoundationClass=ai}barClasses(){return Object.assign(Object.assign({},super.barClasses()),{"mdc-top-app-bar--fixed":!0})}registerListeners(){this.scrollTarget.addEventListener("scroll",this.handleTargetScroll,oi)}unregisterListeners(){this.scrollTarget.removeEventListener("scroll",this.handleTargetScroll)}}let ci=class extends si{};ci.styles=Jt,ci=o([Z("mwc-top-app-bar-fixed")],ci);class di extends he{constructor(){super(...arguments),this.disabled=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new Tt(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){return B`${this.shouldRenderRipple?B`
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>`:""}`}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){return B`<button
        class="mdc-icon-button"
        aria-label="${this.label||this.icon}"
        ?disabled="${this.disabled}"
        @focus="${this.handleRippleFocus}"
        @blur="${this.handleRippleBlur}"
        @mousedown="${this.handleRippleMouseDown}"
        @mouseenter="${this.handleRippleMouseEnter}"
        @mouseleave="${this.handleRippleMouseLeave}"
        @touchstart="${this.handleRippleTouchStart}"
        @touchend="${this.handleRippleDeactivate}"
        @touchcancel="${this.handleRippleDeactivate}">
      ${this.renderRipple()}
    <i class="material-icons">${this.icon}</i>
    <slot></slot>
  </button>`}handleRippleMouseDown(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleTouchStart(e){this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([ee({type:Boolean,reflect:!0})],di.prototype,"disabled",void 0),o([ee({type:String})],di.prototype,"icon",void 0),o([ee({type:String})],di.prototype,"label",void 0),o([ie("button")],di.prototype,"buttonElement",void 0),o([oe("mwc-ripple")],di.prototype,"ripple",void 0),o([te()],di.prototype,"shouldRenderRipple",void 0),o([ae({passive:!0})],di.prototype,"handleRippleMouseDown",null),o([ae({passive:!0})],di.prototype,"handleRippleTouchStart",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const li=le`.material-icons{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:transparent;fill:currentColor;color:inherit;font-size:24px;text-decoration:none;cursor:pointer;user-select:none;width:48px;height:48px;padding:12px}.mdc-icon-button svg,.mdc-icon-button img{width:24px;height:24px}.mdc-icon-button:disabled{color:rgba(0, 0, 0, 0.38);color:var(--mdc-theme-text-disabled-on-light, rgba(0, 0, 0, 0.38))}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}:host{display:inline-block;outline:none;--mdc-ripple-color: currentcolor}:host([disabled]){pointer-events:none}:host,.mdc-icon-button{vertical-align:top}.mdc-icon-button{width:var(--mdc-icon-button-size, 48px);height:var(--mdc-icon-button-size, 48px);padding:calc((var(--mdc-icon-button-size, 48px) - var(--mdc-icon-size, 24px)) / 2)}.mdc-icon-button>i{position:absolute;top:0;padding-top:inherit}.mdc-icon-button i,.mdc-icon-button svg,.mdc-icon-button img,.mdc-icon-button ::slotted(*){display:block;width:var(--mdc-icon-size, 24px);height:var(--mdc-icon-size, 24px)}`
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/;let pi=class extends di{};pi.styles=li,pi=o([Z("mwc-icon-button")],pi);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const hi=le`:host{font-family:var(--mdc-icon-font, "Material Icons");font-weight:normal;font-style:normal;font-size:var(--mdc-icon-size, 24px);line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}`;let mi=class extends he{render(){return B`<slot></slot>`}};mi.styles=hi,mi=o([Z("mwc-icon")],mi);class ui extends he{constructor(){super(...arguments),this.raised=!1,this.unelevated=!1,this.outlined=!1,this.dense=!1,this.disabled=!1,this.trailingIcon=!1,this.fullwidth=!1,this.icon="",this.label="",this.shouldRenderRipple=!1,this.rippleHandlers=new Tt(()=>(this.shouldRenderRipple=!0,this.ripple))}renderRipple(){const e=this.raised||this.unelevated;return this.shouldRenderRipple?B`<mwc-ripple .primary="${!e}" .disabled="${this.disabled}"></mwc-ripple>`:""}createRenderRoot(){return this.attachShadow({mode:"open",delegatesFocus:!0})}focus(){const e=this.buttonElement;e&&(this.rippleHandlers.startFocus(),e.focus())}blur(){const e=this.buttonElement;e&&(this.rippleHandlers.endFocus(),e.blur())}render(){const e={"mdc-button--raised":this.raised,"mdc-button--unelevated":this.unelevated,"mdc-button--outlined":this.outlined,"mdc-button--dense":this.dense};return B`
      <button
          id="button"
          class="mdc-button ${wt(e)}"
          ?disabled="${this.disabled}"
          aria-label="${this.label||this.icon}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleActivate}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleActivate}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}">
        ${this.renderRipple()}
        <span class="leading-icon">
          <slot name="icon">
            ${this.icon&&!this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
        <span class="mdc-button__label">${this.label}</span>
        <slot></slot>
        <span class="trailing-icon">
          <slot name="trailingIcon">
            ${this.icon&&this.trailingIcon?this.renderIcon():""}
          </slot>
        </span>
      </button>`}renderIcon(){return B`
    <mwc-icon class="mdc-button__icon">
      ${this.icon}
    </mwc-icon>`}handleRippleActivate(e){const t=()=>{window.removeEventListener("mouseup",t),this.handleRippleDeactivate()};window.addEventListener("mouseup",t),this.rippleHandlers.startPress(e)}handleRippleDeactivate(){this.rippleHandlers.endPress()}handleRippleMouseEnter(){this.rippleHandlers.startHover()}handleRippleMouseLeave(){this.rippleHandlers.endHover()}handleRippleFocus(){this.rippleHandlers.startFocus()}handleRippleBlur(){this.rippleHandlers.endFocus()}}o([ee({type:Boolean})],ui.prototype,"raised",void 0),o([ee({type:Boolean})],ui.prototype,"unelevated",void 0),o([ee({type:Boolean})],ui.prototype,"outlined",void 0),o([ee({type:Boolean})],ui.prototype,"dense",void 0),o([ee({type:Boolean,reflect:!0})],ui.prototype,"disabled",void 0),o([ee({type:Boolean,attribute:"trailingicon"})],ui.prototype,"trailingIcon",void 0),o([ee({type:Boolean,reflect:!0})],ui.prototype,"fullwidth",void 0),o([ee({type:String})],ui.prototype,"icon",void 0),o([ee({type:String})],ui.prototype,"label",void 0),o([ie("#button")],ui.prototype,"buttonElement",void 0),o([oe("mwc-ripple")],ui.prototype,"ripple",void 0),o([te()],ui.prototype,"shouldRenderRipple",void 0),o([ae({passive:!0})],ui.prototype,"handleRippleActivate",null);
/**
@license
Copyright 2018 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const bi=le`.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:0;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:#fff;background-color:var(--mdc-elevation-overlay-color, #fff)}.mdc-button{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:Roboto, sans-serif;font-family:var(--mdc-typography-button-font-family, var(--mdc-typography-font-family, Roboto, sans-serif));font-size:0.875rem;font-size:var(--mdc-typography-button-font-size, 0.875rem);line-height:2.25rem;line-height:var(--mdc-typography-button-line-height, 2.25rem);font-weight:500;font-weight:var(--mdc-typography-button-font-weight, 500);letter-spacing:0.0892857143em;letter-spacing:var(--mdc-typography-button-letter-spacing, 0.0892857143em);text-decoration:none;text-decoration:var(--mdc-typography-button-text-decoration, none);text-transform:uppercase;text-transform:var(--mdc-typography-button-text-transform, uppercase);padding:0 8px 0 8px;position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;border-radius:4px;border-radius:var(--mdc-shape-small, 4px);height:36px}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button .mdc-button__ripple{border-radius:4px;border-radius:var(--mdc-shape-small, 4px)}.mdc-button:not(:disabled){background-color:transparent}.mdc-button:disabled{background-color:transparent}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__touch{position:absolute;top:50%;right:0;height:48px;left:0;transform:translateY(-50%)}.mdc-button:not(:disabled){color:#6200ee;color:var(--mdc-theme-primary, #6200ee)}.mdc-button:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--raised .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon,.mdc-button--outlined .mdc-button__icon{margin-left:-4px;margin-right:8px}[dir=rtl] .mdc-button--raised .mdc-button__icon,.mdc-button--raised .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__icon,.mdc-button--unelevated .mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__icon,.mdc-button--outlined .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mdc-button--raised .mdc-button__label+.mdc-button__icon,.mdc-button--raised .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--unelevated .mdc-button__label+.mdc-button__icon,.mdc-button--unelevated .mdc-button__label+.mdc-button__icon[dir=rtl],[dir=rtl] .mdc-button--outlined .mdc-button__label+.mdc-button__icon,.mdc-button--outlined .mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mdc-button--raised,.mdc-button--unelevated{padding:0 16px 0 16px}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){background-color:#6200ee;background-color:var(--mdc-theme-primary, #6200ee)}.mdc-button--raised:not(:disabled),.mdc-button--unelevated:not(:disabled){color:#fff;color:var(--mdc-theme-on-primary, #fff)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{background-color:rgba(0, 0, 0, 0.12)}.mdc-button--raised:disabled,.mdc-button--unelevated:disabled{color:rgba(0, 0, 0, 0.38)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0,0,0,.12);transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0,0,0,.12)}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2),0px 8px 10px 1px rgba(0, 0, 0, 0.14),0px 3px 14px 2px rgba(0,0,0,.12)}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2),0px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 0px 0px rgba(0,0,0,.12)}.mdc-button--outlined{padding:0 15px 0 15px;border-width:1px;border-style:solid}.mdc-button--outlined .mdc-button__ripple{top:-1px;left:-1px;border:1px solid transparent}.mdc-button--outlined .mdc-button__touch{left:-1px;width:calc(100% + 2 * 1px)}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12)}.mdc-button--outlined:disabled{border-color:rgba(0, 0, 0, 0.12)}.mdc-button--touch{margin-top:6px;margin-bottom:6px}:host{display:inline-flex;outline:none;vertical-align:top}:host([fullwidth]){width:100%}:host([raised]),:host([unelevated]){--mdc-ripple-color: #fff;--mdc-ripple-focus-opacity: 0.24;--mdc-ripple-hover-opacity: 0.08;--mdc-ripple-press-opacity: 0.24}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon,.leading-icon ::slotted(*),.leading-icon .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;width:18px;height:18px;font-size:18px;vertical-align:top}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl],[dir=rtl] .leading-icon ::slotted(*),.leading-icon ::slotted(*)[dir=rtl],[dir=rtl] .leading-icon .mdc-button__icon,.leading-icon .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.trailing-icon ::slotted(*),.trailing-icon .mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .trailing-icon ::slotted(*),.trailing-icon ::slotted(*)[dir=rtl],[dir=rtl] .trailing-icon .mdc-button__icon,.trailing-icon .mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}.mdc-button{flex:auto;overflow:hidden;padding-left:8px;padding-left:var(--mdc-button-horizontal-padding, 8px);padding-right:8px;padding-right:var(--mdc-button-horizontal-padding, 8px)}.mdc-button--raised{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:hover,.mdc-button--raised:focus{box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-hover, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised:active{box-shadow:0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-active, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mdc-button--raised:disabled{box-shadow:0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12);box-shadow:var(--mdc-button-raised-box-shadow-disabled, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mdc-button--raised,.mdc-button--unelevated{padding-left:16px;padding-left:var(--mdc-button-horizontal-padding, 16px);padding-right:16px;padding-right:var(--mdc-button-horizontal-padding, 16px)}.mdc-button--outlined{border-width:1px;border-width:var(--mdc-button-outline-width, 1px);padding-left:calc(16px - 1px);padding-left:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px));padding-right:calc(16px - 1px);padding-right:calc(var(--mdc-button-horizontal-padding, 16px) - var(--mdc-button-outline-width, 1px))}.mdc-button--outlined:not(:disabled){border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-outline-color, rgba(0, 0, 0, 0.12))}.mdc-button--outlined mwc-ripple{top:calc(-1 * 1px);top:calc(-1 * var(--mdc-button-outline-width, 1px));left:calc(-1 * 1px);left:calc(-1 * var(--mdc-button-outline-width, 1px));right:initial;border-width:1px;border-width:var(--mdc-button-outline-width, 1px);border-style:solid;border-color:transparent}[dir=rtl] .mdc-button--outlined mwc-ripple,.mdc-button--outlined mwc-ripple[dir=rtl]{left:initial;right:calc(-1 * 1px);right:calc(-1 * var(--mdc-button-outline-width, 1px))}.mdc-button--dense{height:28px;margin-top:0;margin-bottom:0}.mdc-button--dense .mdc-button__touch{display:none}:host([disabled]){pointer-events:none}:host([disabled]) .mdc-button{color:rgba(0, 0, 0, 0.38);color:var(--mdc-button-disabled-ink-color, rgba(0, 0, 0, 0.38))}:host([disabled]) .mdc-button--raised,:host([disabled]) .mdc-button--unelevated{background-color:rgba(0, 0, 0, 0.12);background-color:var(--mdc-button-disabled-fill-color, rgba(0, 0, 0, 0.12))}:host([disabled]) .mdc-button--outlined{border-color:rgba(0, 0, 0, 0.12);border-color:var(--mdc-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}`;let gi=class extends ui{};gi.styles=bi,gi=o([Z("mwc-button")],gi);customElements.define("demo-header",
/**
@license
Copyright 2019 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
class extends he{static get styles(){return[le`
        a {
          text-decoration: none;
        }
        [slot="title"] {
          font-family: "Roboto Mono", monospace;
          -webkit-font-smoothing: antialiased;
          font-size: 1.25rem;
          line-height: 2rem;
          letter-spacing: 0.4px;
        }
        .white {
          --mdc-theme-primary: white;
          color: white;
        }`]}static get properties(){return{component:{type:String},package:{type:String}}}render(){let e=this.package||"";return e.length&&e[e.length-1]&&(e+="/"),B`
      <mwc-top-app-bar-fixed>
        <a href="../" slot="navigationIcon">
          <mwc-icon-button class="white" icon="arrow_back"></mwc-icon-button>
        </a>
        <span slot="title">${this.component}</span>
        <a href="https://github.com/material-components/material-components-web-components/tree/master/demos/${e}index.html" slot="actionItems">
          <mwc-button outlined label="View Source" class="white"></mwc-button>
        </a>
      </mwc-top-app-bar-fixed>
    `}}),addEventListener("load",(function(){document.body.classList.remove("unresolved")}));const _i=document.querySelector("#basic"),fi=document.querySelector("#basicIndex");_i.addEventListener("selected",(function(){fi.innerText=_i.index}));const xi=document.querySelector("#multi"),vi=document.querySelector("#multiIndex");xi.addEventListener("selected",(function(){vi.innerText="{ "+Array.from(xi.index)+" }"}));const yi=document.querySelector("#activatable"),ki=document.querySelector("#activatableIndex");yi.addEventListener("selected",(function(){ki.innerText=yi.index}));const wi=document.querySelector("#checklist"),Si=document.querySelector("#checklistIndex");wi.addEventListener("selected",(function(){Si.innerText="{ "+Array.from(wi.index)+" }"}));const Ei=document.querySelector("#radio"),Ai=document.querySelector("#radioIndex");Ei.addEventListener("selected",(function(){Ai.innerText=Ei.index}));const Ri=document.querySelector("#multiRadio"),Ii=document.querySelector("#multiRadioIndex");Ri.addEventListener("selected",(function(){Ii.innerText="{ "+Array.from(Ri.index)+" }"}));const Ti=document.querySelector("#graphics"),Ci=document.querySelector("#graphicsIndex");Ti.addEventListener("selected",(function(){Ci.innerText="{ "+Array.from(Ti.index)+" }"}));
