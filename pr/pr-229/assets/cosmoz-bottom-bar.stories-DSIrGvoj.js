import{f as Vr,B as qr,E as ut,x as M,T as Fe}from"./iframe-Bn5Mm7E3.js";let dt,ln=0;function Qi(e){dt=e}function Zi(){dt=null,ln=0}function Yr(){return ln++}const Ut=Symbol("haunted.phase"),ot=Symbol("haunted.hook"),es=Symbol("haunted.update"),ts=Symbol("haunted.commit"),Q=Symbol("haunted.effects"),Ne=Symbol("haunted.layoutEffects"),ei="haunted.context";class Wr{update;host;virtual;[ot];[Q];[Ne];constructor(t,i){this.update=t,this.host=i,this[ot]=new Map,this[Q]=[],this[Ne]=[]}run(t){Qi(this);let i=t();return Zi(),i}_runEffects(t){let i=this[t];Qi(this);for(let n of i)n.call(this);Zi()}runEffects(){this._runEffects(Q)}runLayoutEffects(){this._runEffects(Ne)}teardown(){this[ot].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const Jr=Promise.resolve().then.bind(Promise.resolve());function cn(){let e=[],t;function i(){t=null;let n=e;e=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){e.push(n),t==null&&(t=Jr(i))}}const Gr=cn(),is=cn();class Xr{renderer;host;state;[Ut];_updateQueued;_active;constructor(t,i){this.renderer=t,this.host=i,this.state=new Wr(this.update.bind(this),i),this[Ut]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(Gr(()=>{let t=this.handlePhase(es);is(()=>{this.handlePhase(ts,t),is(()=>{this.handlePhase(Q)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,i){switch(this[Ut]=t,t){case ts:this.commit(i),this.runEffects(Ne);return;case es:return this.render();case Q:return this.runEffects(Q)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const Qr=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},Zr=e=>e?.map(t=>typeof t=="string"?Qr(t):t),eo=(e,...t)=>e.flatMap((i,n)=>[i,t[n]||""]).join(""),kt=eo,to=(e="")=>e.replace(/-+([a-z])?/g,(t,i)=>i?i.toUpperCase():"");function io(e){class t extends Xr{frag;renderResult;constructor(s,r,a){super(s,a||r),this.frag=r}commit(s){this.renderResult=e(s,this.frag)}}function i(n,s,r){const a=(r||s||{}).baseElement||HTMLElement,{observedAttributes:o=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||s||{},d=Zr(n.styleSheets||u);class h extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||o||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const y=this.attachShadow({mode:"open",...c});d&&(y.adoptedStyleSheets=d),this._scheduler=new t(n,y,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(y,f,b){if(f===b)return;let w=b===""?!0:b;Reflect.set(this,to(y),w)}}function p(g){let y=g,f=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return y},set(b){f&&y===b||(f=!0,y=b,this._scheduler&&this._scheduler.update())}})}const _=new Proxy(a.prototype,{getPrototypeOf(g){return g},set(g,y,f,b){let w;return y in g?(w=Object.getOwnPropertyDescriptor(g,y),w&&w.set?(w.set.call(b,f),!0):(Reflect.set(g,y,f,b),!0)):(typeof y=="symbol"||y[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:f}:w=p(f),Object.defineProperty(b,y,w),w.set&&w.set.call(b,f),!0)}});return Object.setPrototypeOf(h.prototype,_),h}return i}class ye{id;state;constructor(t,i){this.id=t,this.state=i}}function so(e,...t){let i=Yr(),n=dt[ot],s=n.get(i);return s||(s=new e(i,dt,...t),n.set(i,s)),s.update(...t)}function ge(e){return so.bind(null,e)}function un(e){return ge(class extends ye{callback;lastValues;values;_teardown;constructor(t,i,n,s){super(t,i),e(i,this)}update(t,i){this.callback=t,this.values=i}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,i)=>this.lastValues[i]!==t)}})}function dn(e,t){e[Q].push(t)}const Z=un(dn),no=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,hn=ge(class extends ye{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,dn(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};no(this.state.host).dispatchEvent(new CustomEvent(ei,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=t;this.value=n?s:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function ro(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ei,this)}disconnectedCallback(){this.removeEventListener(ei,this)}handleEvent(n){const{detail:s}=n;s.Context===i&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:e(function({render:n}){const s=hn(i);return n(s)},{useShadowDOM:!1}),defaultValue:t};return i}}const j=ge(class extends ye{value;values;constructor(e,t,i,n){super(e,t),this.value=i(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),jt=(e,t)=>j(()=>e,t);function oo(e,t){e[Ne].push(t)}const ao=un(oo),ee=ge(class extends ye{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});ge(class extends ye{reducer;currentState;constructor(e,t,i,n,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const lo=/([A-Z])/gu;ge(class extends ye{property;eventName;constructor(e,t,i,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(lo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function co({render:e}){const t=io(e),i=ro(t);return{component:t,createContext:i}}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const pn={ATTRIBUTE:1,CHILD:2},Nt=e=>(...t)=>({_$litDirective$:e,values:t});let Ci=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Me=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(t,!1),Me(n,t);return!0},ht=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},fn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),po(t)}};function uo(e){this._$AN!==void 0?(ht(this),this._$AM=e,fn(this)):this._$AM=e}function ho(e,t=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let r=i;r<n.length;r++)Me(n[r],!1),ht(n[r]);else n!=null&&(Me(n,!1),ht(n));else Me(this,e)}const po=e=>{e.type==pn.CHILD&&(e._$AP??=ho,e._$AQ??=uo)};class _n extends Ci{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),fn(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(Me(this,t),ht(this))}setValue(t){if(Vr(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:be,createContext:fo}=co({render:qr});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Mt=!(window.ShadyDOM&&window.ShadyDOM.inUse);let pt;function ss(e){e&&e.shimcssproperties?pt=!1:pt=Mt||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let ze;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(ze=window.ShadyCSS.cssBuild);const mn=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?pt=window.ShadyCSS.nativeCss:window.ShadyCSS?(ss(window.ShadyCSS),window.ShadyCSS=void 0):ss(window.WebComponents&&window.WebComponents.flags);const xi=pt;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class ns{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function yn(e){return e=_o(e),gn(mo(e),e)}function _o(e){return e.replace(z.comments,"").replace(z.port,"")}function mo(e){let t=new ns;t.start=0,t.end=e.length;let i=t;for(let n=0,s=e.length;n<s;n++)if(e[n]===wn){i.rules||(i.rules=[]);let r=i,a=r.rules[r.rules.length-1]||null;i=new ns,i.start=n+1,i.parent=r,i.previous=a,r.rules.push(i)}else e[n]===vn&&(i.end=n+1,i=i.parent||t);return t}function gn(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let s=e.previous?e.previous.end:e.parent.start;i=t.substring(s,e.start-1),i=yo(i),i=i.replace(z.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=i.trim();e.atRule=r.indexOf(xo)===0,e.atRule?r.indexOf(Co)===0?e.type=ce.MEDIA_RULE:r.match(z.keyframesRule)&&(e.type=ce.KEYFRAMES_RULE,e.keyframesName=e.selector.split(z.multipleSpaces).pop()):r.indexOf(Cn)===0?e.type=ce.MIXIN_RULE:e.type=ce.STYLE_RULE}let n=e.rules;if(n)for(let s=0,r=n.length,a;s<r&&(a=n[s]);s++)gn(a,t);return e}function yo(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],i=6-t.length;for(;i--;)t="0"+t;return"\\"+t})}function bn(e,t,i=""){let n="";if(e.cssText||e.rules){let s=e.rules;if(s&&!go(s))for(let r=0,a=s.length,o;r<a&&(o=s[r]);r++)n=bn(o,t,n);else n=t?e.cssText:bo(e.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(e.selector&&(i+=e.selector+" "+wn+`
`),i+=n,e.selector&&(i+=vn+`

`)),i}function go(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(Cn)===0}function bo(e){return e=wo(e),vo(e)}function wo(e){return e.replace(z.customProp,"").replace(z.mixinProp,"")}function vo(e){return e.replace(z.mixinApply,"").replace(z.varApply,"")}const ce={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},wn="{",vn="}",z={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Cn="--",Co="@media",xo="@";/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ti=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,ft=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const rs=new Set,So="shady-unscoped";function Po(e){const t=e.textContent;if(!rs.has(t)){rs.add(t);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=t,document.head.appendChild(i)}}function Eo(e){return e.hasAttribute(So)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ii(e,t){return e?(typeof e=="string"&&(e=yn(e)),bn(e,xi)):""}function os(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=yn(e.textContent)),e.__cssRules||null}function at(e,t,i,n){if(!e)return;let s=!1,r=e.type;r===ce.STYLE_RULE?t(e):r===ce.MIXIN_RULE&&(s=!0);let a=e.rules;if(a&&!s)for(let o=0,l=a.length,c;o<l&&(c=a[o]);o++)at(c,t)}function Ao(e,t){let i=0;for(let n=t,s=e.length;n<s;n++)if(e[n]==="(")i++;else if(e[n]===")"&&--i===0)return n;return-1}function xn(e,t){let i=e.indexOf("var(");if(i===-1)return t(e,"","","");let n=Ao(e,i+3),s=e.substring(i+4,n),r=e.substring(0,i),a=xn(e.substring(n+1),t),o=s.indexOf(",");if(o===-1)return t(r,s.trim(),"",a);let l=s.substring(0,o).trim(),c=s.substring(o+1).trim();return t(r,l,c,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function To(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}function Oo(e){const t=[],i=e.querySelectorAll("style");for(let n=0;n<i.length;n++){const s=i[n];Eo(s)?Mt||(Po(s),s.parentNode.removeChild(s)):(t.push(s.textContent),s.parentNode.removeChild(s))}return t.join("").trim()}const Sn="css-build";function ko(e){if(ze!==void 0)return ze;if(e.__cssBuild===void 0){const t=e.getAttribute(Sn);if(t)e.__cssBuild=t;else{const i=No(e);i!==""&&Mo(e),e.__cssBuild=i}}return e.__cssBuild||""}function as(e){return ko(e)!==""}function No(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const i=t.textContent.trim().split(":");if(i[0]===Sn)return i[1]}return""}function Mo(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function si(e,t){for(let i in t)i===null?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function Pn(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function Do(e){const t=ft.test(e)||ti.test(e);return ft.lastIndex=0,ti.lastIndex=0,t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ro=/;\s*/m,Io=/^\s*(initial)|(inherit)\s*$/,ls=/\s*!important/,ni="_-_";class Lo{constructor(){this._map={}}set(t,i){t=t.trim(),this._map[t]={properties:i,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let _t=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Lo}detectMixin(t){return Do(t)}gatherStyles(t){const i=Oo(t.content);if(i){const n=document.createElement("style");return n.textContent=i,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,i){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(t,i=""){let n=os(t);return this.transformRules(n,i),t.textContent=ii(n),n}transformCustomStyle(t){let i=os(t);return at(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),t.textContent=ii(i),i}transformRules(t,i){this._currentElement=i,at(t,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,i){return t=t.replace(ti,(n,s,r,a)=>this._produceCssProperties(n,s,r,a,i)),this._consumeCssProperties(t,i)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let i=t;for(;i.parent;)i=i.parent;const n={};let s=!1;return at(i,r=>{s=s||r===t,!s&&r.selector===t.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(t,i){let n=null;for(;n=ft.exec(t);){let s=n[0],r=n[1],a=n.index,o=a+s.indexOf("@apply"),l=a+s.length,c=t.slice(0,o),u=t.slice(l),d=i?this._fallbacksFromPreviousRules(i):{};Object.assign(d,this._cssTextToMap(c));let h=this._atApplyToCssProperties(r,d);t=`${c}${h}${u}`,ft.lastIndex=a+h.length}return t}_atApplyToCssProperties(t,i){t=t.replace(Ro,"");let n=[],s=this._map.get(t);if(s||(this._map.set(t,{}),s=this._map.get(t)),s){this._currentElement&&(s.dependants[this._currentElement]=!0);let r,a,o;const l=s.properties;for(r in l)o=i&&i[r],a=[r,": var(",t,ni,r],o&&a.push(",",o.replace(ls,"")),a.push(")"),ls.test(l[r])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,i){let n=Io.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(t):i="apply-shim-inherit"),i}_cssTextToMap(t,i=!1){let n=t.split(";"),s,r,a={};for(let o=0,l,c;o<n.length;o++)l=n[o],l&&(c=l.split(":"),c.length>1&&(s=c[0].trim(),r=c.slice(1).join(":"),i&&(r=this._replaceInitialOrInherit(s,r)),a[s]=r));return a}_invalidateMixinEntry(t){if(_t)for(let i in t.dependants)i!==this._currentElement&&_t(i)}_produceCssProperties(t,i,n,s,r){if(n&&xn(n,(y,f)=>{f&&this._map.get(f)&&(s=`@apply ${f};`)}),!s)return t;let a=this._consumeCssProperties(""+s,r),o=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,u=this._map.get(i),d=u&&u.properties;d?c=Object.assign(Object.create(d),l):this._map.set(i,c);let h=[],p,_,g=!1;for(p in c)_=l[p],_===void 0&&(_="initial"),d&&!(p in d)&&(g=!0),h.push(`${i}${ni}${p}: ${_}`);return g&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(o=`${t};${o}`),`${o}${h.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin;T.prototype.transformStyle=T.prototype.transformStyle;T.prototype.transformCustomStyle=T.prototype.transformCustomStyle;T.prototype.transformRules=T.prototype.transformRules;T.prototype.transformRule=T.prototype.transformRule;T.prototype.transformTemplate=T.prototype.transformTemplate;T.prototype._separator=ni;Object.defineProperty(T.prototype,"invalidCallback",{get(){return _t},set(e){_t=e}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ri={};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const mt="_applyShimCurrentVersion",pe="_applyShimNextVersion",yt="_applyShimValidatingVersion",Bo=Promise.resolve();function Fo(e){let t=ri[e];t&&zo(t)}function zo(e){e[mt]=e[mt]||0,e[yt]=e[yt]||0,e[pe]=(e[pe]||0)+1}function En(e){return e[mt]===e[pe]}function Ho(e){return!En(e)&&e[yt]===e[pe]}function $o(e){e[yt]=e[pe],e._validating||(e._validating=!0,Bo.then(function(){e[mt]=e[pe],e._validating=!1}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Kt=null,cs=window.HTMLImports&&window.HTMLImports.whenReady||null,Vt;function us(e){requestAnimationFrame(function(){cs?cs(e):(Kt||(Kt=new Promise(t=>{Vt=t}),document.readyState==="complete"?Vt():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Vt()})),Kt.then(function(){e&&e()}))})}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ds="__seenByShadyCSS",Qe="__shadyCSSCachedStyle";let gt=null,De=null,q=class{constructor(){this.customStyles=[],this.enqueued=!1,us(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!De||(this.enqueued=!0,us(De))}addCustomStyle(t){t[ds]||(t[ds]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Qe])return t[Qe];let i;return t.getStyle?i=t.getStyle():i=t,i}processStyles(){const t=this.customStyles;for(let i=0;i<t.length;i++){const n=t[i];if(n[Qe])continue;const s=this.getStyleForCustomStyle(n);if(s){const r=s.__appliedElement||s;gt&&gt(r),n[Qe]=r}}return t}};q.prototype.addCustomStyle=q.prototype.addCustomStyle;q.prototype.getStyleForCustomStyle=q.prototype.getStyleForCustomStyle;q.prototype.processStyles=q.prototype.processStyles;Object.defineProperties(q.prototype,{transformCallback:{get(){return gt},set(e){gt=e}},validateCallback:{get(){return De},set(e){let t=!1;De||(t=!0),De=e,t&&this.enqueueDocumentValidation()}}});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Te=new T;class Uo{constructor(){this.customStyleInterface=null,Te.invalidCallback=Fo}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Te.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,i){if(this.ensure(),as(t))return;ri[i]=t;let n=Te.transformTemplate(t,i);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<t.length;i++){let n=t[i],s=this.customStyleInterface.getStyleForCustomStyle(n);s&&Te.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,i){if(this.ensure(),i&&si(t,i),t.shadowRoot){this.styleElement(t);let n=t.shadowRoot.children||t.shadowRoot.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}else{let n=t.children||t.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}}styleElement(t){this.ensure();let{is:i}=To(t),n=ri[i];if(!(n&&as(n))&&n&&!En(n)){Ho(n)||(this.prepareTemplate(n,i),$o(n));let s=t.shadowRoot;if(s){let r=s.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=ii(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Uo;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,s){e.flushCustomStyles(),e.prepareTemplate(i,n)},prepareTemplateStyles(i,n,s){window.ShadyCSS.prepareTemplate(i,n,s)},prepareTemplateDom(i,n){},styleSubtree(i,n){e.flushCustomStyles(),e.styleSubtree(i,n)},styleElement(i){e.flushCustomStyles(),e.styleElement(i)},styleDocument(i){e.flushCustomStyles(),e.styleDocument(i)},getComputedStyleValue(i,n){return Pn(i,n)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:xi,nativeShadow:Mt,cssBuild:ze,disableRuntime:mn},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Te;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let jo=/(url\()([^)]*)(\))/g,Ko=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,Ze,O;function Re(e,t){if(e&&Ko.test(e)||e==="//")return e;if(Ze===void 0){Ze=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",Ze=i.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),Ze)try{return new URL(e,t).href}catch{return e}return O||(O=document.implementation.createHTMLDocument("temp"),O.base=O.createElement("base"),O.head.appendChild(O.base),O.anchor=O.createElement("a"),O.body.appendChild(O.anchor)),O.base.href=t,O.anchor.href=e,O.anchor.href||e}function Si(e,t){return e.replace(jo,function(i,n,s,r){return n+"'"+Re(s.replace(/["']/g,""),t)+"'"+r})}function Pi(e){return e.substring(0,e.lastIndexOf("/")+1)}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const An=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Vo=An&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let qo=window.Polymer&&window.Polymer.rootPath||Pi(document.baseURI||window.location.href),bt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Yo=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,fe=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Wo=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,He=window.Polymer&&window.Polymer.legacyOptimizations||!1,Tn=window.Polymer&&window.Polymer.legacyWarnings||!1,Jo=window.Polymer&&window.Polymer.syncInitialRender||!1,oi=window.Polymer&&window.Polymer.legacyUndefined||!1,Go=window.Polymer&&window.Polymer.orderedComputed||!1,hs=window.Polymer&&window.Polymer.removeNestedTemplates||!1,On=window.Polymer&&window.Polymer.fastDomIf||!1,ai=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,et=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,Xo=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Qo=0;const N=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=Qo++;function n(s){let r=s.__mixinSet;if(r&&r[i])return s;let a=t,o=a.get(s);if(!o){o=e(s),a.set(s,o);let l=Object.create(o.__mixinSet||r||null);l[i]=!0,o.__mixinSet=l}return o}return n};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ei={},kn={};function ps(e,t){Ei[e]=kn[e.toLowerCase()]=t}function fs(e){return Ei[e]||kn[e.toLowerCase()]}function Zo(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class $e extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,i){if(t){let n=fs(t);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(t,i,n,s){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Re(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Pi(i)}return this.__assetpath}register(t){if(t=t||this.id,t){if(fe&&fs(t)!==void 0)throw ps(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,ps(t,this),Zo(this)}}}$e.prototype.modules=Ei;customElements.define("dom-module",$e);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ea="link[rel=import][type~=css]",ta="include",_s="shady-unscoped";function Ai(e){return $e.import(e)}function ms(e){let t=e.body?e.body:e;const i=Si(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=i,n}function ia(e){const t=e.trim().split(/\s+/),i=[];for(let n=0;n<t.length;n++)i.push(...sa(t[n]));return i}function sa(e){const t=Ai(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const i=[];i.push(...Oi(t));const n=t.querySelector("template");n&&i.push(...Ti(n,t.assetpath)),t._styles=i}return t._styles}function Ti(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let s=0;s<n.length;s++){let r=n[s],a=r.getAttribute(ta);a&&i.push(...ia(a).filter(function(o,l,c){return c.indexOf(o)===l})),t&&(r.textContent=Si(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function na(e){let t=Ai(e);return t?Oi(t):[]}function Oi(e){const t=[],i=e.querySelectorAll(ea);for(let n=0;n<i.length;n++){let s=i[n];if(s.import){const r=s.import,a=s.hasAttribute(_s);if(a&&!r._unscopedStyle){const o=ms(r);o.setAttribute(_s,""),r._unscopedStyle=o}else r._style||(r._style=ms(r));t.push(a?r._unscopedStyle:r._style)}}return t}function ra(e){let t=e.trim().split(/\s+/),i="";for(let n=0;n<t.length;n++)i+=oa(t[n]);return i}function oa(e){let t=Ai(e);if(t&&t._cssText===void 0){let i=la(t),n=t.querySelector("template");n&&(i+=aa(n,t.assetpath)),t._cssText=i||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function aa(e,t){let i="";const n=Ti(e,t);for(let s=0;s<n.length;s++){let r=n[s];r.parentNode&&r.parentNode.removeChild(r),i+=r.textContent}return i}function la(e){let t="",i=Oi(e);for(let n=0;n<i.length;n++)t+=i[n].textContent;return t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const m=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function li(e){return e.indexOf(".")>=0}function H(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Nn(e,t){return e.indexOf(t+".")===0}function Ue(e,t){return t.indexOf(e+".")===0}function je(e,t,i){return t+i.slice(e.length)}function ca(e,t){return e===t||Nn(e,t)||Ue(e,t)}function Oe(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let s=0;s<n.length;s++)t.push(n[s])}return t.join(".")}else return e}function Mn(e){return Array.isArray(e)?Oe(e).split("."):e.toString().split(".")}function A(e,t,i){let n=e,s=Mn(t);for(let r=0;r<s.length;r++){if(!n)return;let a=s[r];n=n[a]}return i&&(i.path=s.join(".")),n}function ys(e,t,i){let n=e,s=Mn(t),r=s[s.length-1];if(s.length>1){for(let a=0;a<s.length-1;a++){let o=s[a];if(n=n[o],!n)return}n[r]=i}else n[t]=i;return s.join(".")}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const wt={},ua=/-[a-z]/g,da=/([A-Z])/g;function Dn(e){return wt[e]||(wt[e]=e.indexOf("-")<0?e:e.replace(ua,t=>t[1].toUpperCase()))}function Dt(e){return wt[e]||(wt[e]=e.replace(da,"-$1").toLowerCase())}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let ha=0,Rn=0,ue=[],pa=0,ci=!1,In=document.createTextNode("");new window.MutationObserver(fa).observe(In,{characterData:!0});function fa(){ci=!1;const e=ue.length;for(let t=0;t<e;t++){let i=ue[t];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}ue.splice(0,e),Rn+=e}const Ie={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},K={run(e){return ci||(ci=!0,In.textContent=pa++),ue.push(e),ha++},cancel(e){const t=e-Rn;if(t>=0){if(!ue[t])throw new Error("invalid async handle: "+e);ue[t]=null}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const _a=K,Ln=N(e=>{class t extends e{static createProperties(n){const s=this.prototype;for(let r in n)r in s||s._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,s){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,s))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[n];return s||(s=this.constructor.attributeNameForProperty(n),this.__dataAttributes[s]=n),s}_definePropertyAccessor(n,s){Object.defineProperty(this,n,{get(){return this.__data[n]},set:s?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,s){this._setPendingProperty(n,s)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,s,r){let a=this.__data[n],o=this._shouldPropertyChange(n,s,a);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=s,this.__dataPending[n]=s),o}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,_a.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,s=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,s,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,s,r)),this.__dataCounter--}_shouldPropertiesChange(n,s,r){return!!s}_propertiesChanged(n,s,r){}_shouldPropertyChange(n,s,r){return r!==s&&(r===r||s===s)}attributeChangedCallback(n,s,r,a){s!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,s,r,a)}_attributeToProperty(n,s,r){if(!this.__serializing){const a=this.__dataAttributes,o=a&&a[n]||n;this[o]=this._deserializeValue(s,r||this.constructor.typeForProperty(o))}}_propertyToAttribute(n,s,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,s||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,s,r){const a=this._serializeValue(s);(r==="class"||r==="name"||r==="slot")&&(n=m(n)),a===void 0?n.removeAttribute(r):n.setAttribute(r,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){switch(typeof n){case"boolean":return n?"":void 0;default:return n?.toString()}}_deserializeValue(n,s){switch(s){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bn={};let tt=HTMLElement.prototype;for(;tt;){let e=Object.getOwnPropertyNames(tt);for(let t=0;t<e.length;t++)Bn[e[t]]=!0;tt=Object.getPrototypeOf(tt)}const ma=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function ya(e,t){if(!Bn[t]){let i=e[t];i!==void 0&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const Fn=N(e=>{const t=Ln(e);class i extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let r=0;r<s.length;r++)this.prototype._createPropertyAccessor(Dn(s[r]))}static attributeNameForProperty(s){return Dt(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let r in s)this._setProperty(r,s[r])}_ensureAttribute(s,r){const a=this;a.hasAttribute(s)||this._valueToNodeAttribute(a,r,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(ma(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,r){let a;switch(r){case Object:try{a=JSON.parse(s)}catch{a=s}break;case Array:try{a=JSON.parse(s)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:a=isNaN(s)?String(s):Number(s),a=new Date(a);break;default:a=super._deserializeValue(s,r);break}return a}_definePropertyAccessor(s,r){ya(this,s),super._definePropertyAccessor(s,r)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ga={"dom-if":!0,"dom-repeat":!0};let gs=!1,bs=!1;function ba(){if(!gs){gs=!0;const e=document.createElement("textarea");e.placeholder="a",bs=e.placeholder===e.textContent}return bs}function wa(e){ba()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const va=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,i,n)=>{const s=i.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(s,n));return}t.setAttribute(n,s)}})();function Ca(e){let t=e.getAttribute("is");if(t&&ga[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];va(e,i,n),i.removeAttribute(n)}}return e}function zn(e,t){let i=t.parentInfo&&zn(e,t.parentInfo);if(i){for(let n=i.firstChild,s=0;n;n=n.nextSibling)if(t.parentIndex===s++)return n}else return e}function xa(e,t,i,n){n.id&&(t[n.id]=i)}function Sa(e,t,i){if(i.events&&i.events.length)for(let n=0,s=i.events,r;n<s.length&&(r=s[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Pa(e,t,i,n){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=n)}function Ea(e,t,i){return e=e._methodHost||e,function(s){e[i]?e[i](s,s.detail):console.warn("listener method `"+i+"` not defined")}}const Aa=N(e=>{class t extends e{static _parseTemplate(n,s){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!s,r.stripWhiteSpace=s&&s.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,s,r){return this._parseTemplateNode(n.content,s,r)}static _parseTemplateNode(n,s,r){let a=!1,o=n;return o.localName=="template"&&!o.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(o,s,r)||a:o.localName==="slot"&&(s.hasInsertionPoint=!0),wa(o),o.firstChild&&this._parseTemplateChildNodes(o,s,r),o.hasAttributes&&o.hasAttributes()&&(a=this._parseTemplateNodeAttributes(o,s,r)||a),a||r.noted}static _parseTemplateChildNodes(n,s,r){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,o=0,l;a;a=l){if(a.localName=="template"&&(a=Ca(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)a.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(s.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let c={parentIndex:o,parentInfo:r};this._parseTemplateNode(a,s,c)&&(c.infoIndex=s.nodeInfoList.push(c)-1),a.parentNode&&o++}}static _parseTemplateNestedTemplate(n,s,r){let a=n,o=this._parseTemplate(a,s);return(o.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),r.templateInfo=o,!0}static _parseTemplateNodeAttributes(n,s,r){let a=!1,o=Array.from(n.attributes);for(let l=o.length-1,c;c=o[l];l--)a=this._parseTemplateNodeAttribute(n,s,r,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(n,s,r,a,o){return a.slice(0,3)==="on-"?(n.removeAttribute(a),r.events=r.events||[],r.events.push({name:a.slice(3),value:o}),!0):a==="id"?(r.id=o,!0):!1}static _contentForTemplate(n){let s=n._templateInfo;return s&&s.content||n.content}_stampTemplate(n,s){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),s=s||this.constructor._parseTemplate(n);let r=s.nodeInfoList,a=s.content||n.content,o=document.importNode(a,!0);o.__noInsertionPoint=!s.hasInsertionPoint;let l=o.nodeList=new Array(r.length);o.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=zn(o,d);xa(this,o.$,h,d),Pa(this,h,d,s),Sa(this,h,d)}return o=o,o}_addMethodEventListenerToNode(n,s,r,a){a=a||n;let o=Ea(a,s,r);return this._addEventListenerToNode(n,s,o),o}_addEventListenerToNode(n,s,r){n.addEventListener(s,r)}_removeEventListenerFromNode(n,s,r){n.removeEventListener(s,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */let Ke=0;const Ve=[],v={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Hn="__computeInfo",Ta=/[A-Z]/;function qt(e,t,i){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),i))for(let s in n){let r=n[s],a=n[s]=Array(r.length);for(let o=0;o<r.length;o++)a[o]=r[o]}return n}function ke(e,t,i,n,s,r){if(t){let a=!1;const o=Ke++;for(let l in i){let c=s?H(l):l,u=t[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==o)&&(!s||ki(l,p.trigger))&&(p.info&&(p.info.lastRun=o),p.fn(e,l,i,n,p.info,s,r),a=!0)}return a}return!1}function Oa(e,t,i,n,s,r,a,o){let l=!1,c=a?H(n):n,u=t[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==i)&&(!a||ki(n,p.trigger))&&(p.info&&(p.info.lastRun=i),p.fn(e,n,s,r,p.info,a,o),l=!0);return l}function ki(e,t){if(t){let i=t.name;return i==e||!!(t.structured&&Nn(i,e))||!!(t.wildcard&&Ue(i,e))}else return!0}function ws(e,t,i,n,s){let r=typeof s.method=="string"?e[s.method]:s.method,a=s.property;r?r.call(e,e.__data[a],n[a]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function ka(e,t,i,n,s){let r=e[v.NOTIFY],a,o=Ke++;for(let c in t)t[c]&&(r&&Oa(e,r,o,c,i,n,s)||s&&Na(e,c,i))&&(a=!0);let l;a&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Na(e,t,i){let n=H(t);if(n!==t){let s=Dt(n)+"-changed";return $n(e,s,i[t],t),!0}return!1}function $n(e,t,i,n){let s={value:i,queueProperty:!0};n&&(s.path=n),m(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function Ma(e,t,i,n,s,r){let o=(r?H(t):t)!=t?t:null,l=o?A(e,o):e.__data[t];o&&l===void 0&&(l=i[t]),$n(e,s.eventName,l,o)}function Da(e,t,i,n,s){let r,a=e.detail,o=a&&a.path;o?(n=je(i,n,o),r=a&&a.value):r=e.currentTarget[i],r=s?!r:r,(!t[v.READ_ONLY]||!t[v.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,r,!0,!!o)&&(!a||!a.queueProperty)&&t._invalidateProperties()}function Ra(e,t,i,n,s){let r=e.__data[t];bt&&(r=bt(r,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,r)}function Ia(e,t,i,n){let s=e[v.COMPUTE];if(s)if(Go){Ke++;const r=Ba(e),a=[];for(let l in t)vs(l,s,a,r,n);let o;for(;o=a.shift();)Un(e,"",t,i,o)&&vs(o.methodInfo,s,a,r,n);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;ke(e,s,r,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const La=(e,t,i)=>{let n=0,s=t.length-1,r=-1;for(;n<=s;){const a=n+s>>1,o=i.get(t[a].methodInfo)-i.get(e.methodInfo);if(o<0)n=a+1;else if(o>0)s=a-1;else{r=a;break}}r<0&&(r=s+1),t.splice(r,0,e)},vs=(e,t,i,n,s)=>{const r=s?H(e):e,a=t[r];if(a)for(let o=0;o<a.length;o++){const l=a[o];l.info.lastRun!==Ke&&(!s||ki(e,l.trigger))&&(l.info.lastRun=Ke,La(l.info,i,n))}};function Ba(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[v.COMPUTE];let{counts:n,ready:s,total:r}=Fa(e),a;for(;a=s.shift();){t.set(a,t.size);const o=i[a];o&&o.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&s.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Fa(e){const t=e[Hn],i={},n=e[v.COMPUTE],s=[];let r=0;for(let a in t){const o=t[a];r+=i[a]=o.args.filter(l=>!l.literal).length+(o.dynamicFn?1:0)}for(let a in n)t[a]||s.push(a);return{counts:i,ready:s,total:r}}function Un(e,t,i,n,s){let r=ui(e,t,i,n,s);if(r===Ve)return!1;let a=s.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,r,!0):(e[a]=r,!1)}function za(e,t,i){let n=e.__dataLinkedPaths;if(n){let s;for(let r in n){let a=n[r];Ue(r,t)?(s=je(r,a,t),e._setPendingPropertyOrPath(s,i,!0,!0)):Ue(a,t)&&(s=je(a,r,t),e._setPendingPropertyOrPath(s,i,!0,!0))}}}function Yt(e,t,i,n,s,r,a){i.bindings=i.bindings||[];let o={kind:n,target:s,parts:r,literal:a,isCompound:r.length!==1};if(i.bindings.push(o),Ka(o)){let{event:c,negate:u}=o.parts[0];o.listenerEvent=c||Dt(s)+"-changed",o.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<o.parts.length;c++){let u=o.parts[c];u.compoundIndex=c,Ha(e,t,o,u,l)}}function Ha(e,t,i,n,s){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,a={index:s,binding:i,part:n,evaluator:e};for(let o=0;o<r.length;o++){let l=r[o];typeof l=="string"&&(l=Kn(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:$a,info:a,trigger:l})}}}function $a(e,t,i,n,s,r,a){let o=a[s.index],l=s.binding,c=s.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let u=i[t];t=je(c.source,l.target,t),o._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(o)}else{let u=s.evaluator._evaluateBinding(e,c,t,i,n,r);u!==Ve&&Ua(e,o,l,c,u)}}function Ua(e,t,i,n,s){if(s=ja(t,s,i,n),bt&&(s=bt(s,i.target,i.kind,t)),i.kind=="attribute")e._valueToNodeAttribute(t,s,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[v.READ_ONLY]||!t[v.READ_ONLY][r])&&t._setPendingProperty(r,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,s)}}function ja(e,t,i,n){if(i.isCompound){let s=e.__dataCompoundStorage[i.target];s[n.compoundIndex]=t,t=s.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Ka(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Va(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let s=0;s<n.length;s++){let r=n[s],a=i[s],o=r.bindings;if(o)for(let l=0;l<o.length;l++){let c=o[l];qa(a,c),Ya(a,e,c)}a.__dataHost=e}}function qa(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,s=new Array(n.length);for(let a=0;a<n.length;a++)s[a]=n[a].literal;let r=t.target;i[r]=s,t.literal&&t.kind=="property"&&(r==="className"&&(e=m(e)),e[r]=t.literal)}}function Ya(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,function(s){Da(s,t,i.target,n.source,n.negate)})}}function Cs(e,t,i,n,s,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:r};for(let o=0,l;o<t.args.length&&(l=t.args[o]);o++)l.literal||e._addPropertyEffect(l.rootProperty,i,{fn:n,info:a,trigger:l});return r&&e._addPropertyEffect(t.methodName,i,{fn:n,info:a}),a}function ui(e,t,i,n,s){let r=e._methodHost||e,a=r[s.methodName];if(a){let o=e._marshalArgs(s.args,t,i);return o===Ve?Ve:a.apply(r,o)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Wa=[],jn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Ja="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",Ga="(?:'(?:[^'\\\\]|\\\\.)*')",Xa='(?:"(?:[^"\\\\]|\\\\.)*")',Qa="(?:"+Ga+"|"+Xa+")",xs="(?:("+jn+"|"+Ja+"|"+Qa+")\\s*)",Za="(?:"+xs+"(?:,\\s*"+xs+")*)",el="(?:\\(\\s*(?:"+Za+"?)\\)\\s*)",tl="("+jn+"\\s*"+el+"?)",il="(\\[\\[|{{)\\s*",sl="(?:]]|}})",nl="(?:(!)\\s*)?",rl=il+nl+tl+sl,Ss=new RegExp(rl,"g");function Ps(e){let t="";for(let i=0;i<e.length;i++){let n=e[i].literal;t+=n||""}return t}function Wt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:Wa};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return ol(s,n)}else return n}return null}function ol(e,t){return t.args=e.map(function(i){let n=Kn(i);return n.literal||(t.static=!1),n},this),t}function Kn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0;break}return i.literal||(i.rootProperty=H(t),i.structured=li(t),i.structured&&(i.wildcard=t.slice(-2)==".*",i.wildcard&&(i.name=t.slice(0,-2)))),i}function Es(e,t,i){let n=A(e,i);return n===void 0&&(n=t[i]),n}function Vn(e,t,i,n){const s={indexSplices:n};oi&&!e._overrideLegacyUndefined&&(t.splices=s),e.notifyPath(i+".splices",s),e.notifyPath(i+".length",t.length),oi&&!e._overrideLegacyUndefined&&(s.indexSplices=[])}function Se(e,t,i,n,s,r){Vn(e,t,i,[{index:n,addedCount:s,removed:r,object:t,type:"splice"}])}function al(e){return e[0].toUpperCase()+e.substring(1)}const Rt=N(e=>{const t=Aa(Fn(e));class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return v}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Pe.length){let s=Pe[Pe.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let r=this[v.READ_ONLY];for(let a in s)(!r||!r[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=s[a])}_addPropertyEffect(s,r,a){this._createPropertyAccessor(s,r==v.READ_ONLY);let o=qt(this,r,!0)[s];o||(o=this[r][s]=[]),o.push(a)}_removePropertyEffect(s,r,a){let o=qt(this,r,!0)[s],l=o.indexOf(a);l>=0&&o.splice(l,1)}_hasPropertyEffect(s,r){let a=this[r];return!!(a&&a[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,v.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,v.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,v.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,v.COMPUTE)}_setPendingPropertyOrPath(s,r,a,o){if(o||H(Array.isArray(s)?s[0]:s)!==s){if(!o){let l=A(this,s);if(s=ys(this,s,r),!s||!super._shouldPropertyChange(s,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,r,a))return za(this,s,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,r,a);this[s]=r}return!1}_setUnmanagedPropertyToNode(s,r,a){(a!==s[r]||typeof a=="object")&&(r==="className"&&(s=m(s)),s[r]=a)}_setPendingProperty(s,r,a){let o=this.__dataHasPaths&&li(s),l=o?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,r,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),o?this.__dataTemp[s]=r:this.__data[s]=r,this.__dataPending[s]=r,(o||this[v.NOTIFY]&&this[v.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=a),!0):!1}_setProperty(s,r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let r=0;r<s.length;r++){let a=s[r];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,r){for(let a in s)(r||!this[v.READ_ONLY]||!this[v.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,s[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,r,a){let o=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ia(this,r,a,o),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,a,o),this._flushClients(),ke(this,this[v.REFLECT],r,a,o),ke(this,this[v.OBSERVE],r,a,o),l&&ka(this,l,r,a,o),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,r,a){this[v.PROPAGATE]&&ke(this,this[v.PROPAGATE],s,r,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,r,a)}_runEffectsForTemplate(s,r,a,o){const l=(c,u)=>{ke(this,s.propertyEffects,c,a,u,s.nodeList);for(let d=s.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,a,u)};s.runEffects?s.runEffects(l,r,o):l(r,o)}linkPaths(s,r){s=Oe(s),r=Oe(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=r}unlinkPaths(s){s=Oe(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,r){let a={path:""},o=A(this,s,a);Vn(this,o,a.path,r)}get(s,r){return A(r||this,s)}set(s,r,a){a?ys(a,s,r):(!this[v.READ_ONLY]||!this[v.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,r,!0)&&this._invalidateProperties()}push(s,...r){let a={path:""},o=A(this,s,a),l=o.length,c=o.push(...r);return r.length&&Se(this,o,a.path,l,r.length,[]),c}pop(s){let r={path:""},a=A(this,s,r),o=!!a.length,l=a.pop();return o&&Se(this,a,r.path,a.length,0,[l]),l}splice(s,r,a,...o){let l={path:""},c=A(this,s,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,a,...o),(o.length||u.length)&&Se(this,c,l.path,r,o.length,u),u}shift(s){let r={path:""},a=A(this,s,r),o=!!a.length,l=a.shift();return o&&Se(this,a,r.path,0,0,[l]),l}unshift(s,...r){let a={path:""},o=A(this,s,a),l=o.unshift(...r);return r.length&&Se(this,o,a.path,0,r.length,[]),l}notifyPath(s,r){let a;if(arguments.length==1){let o={path:""};r=A(this,s,o),a=o.path}else Array.isArray(s)?a=Oe(s):a=s;this._setPendingPropertyOrPath(a,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,r){this._addPropertyEffect(s,v.READ_ONLY),r&&(this["_set"+al(s)]=function(a){this._setProperty(s,a)})}_createPropertyObserver(s,r,a){let o={property:s,method:r,dynamicFn:!!a};this._addPropertyEffect(s,v.OBSERVE,{fn:ws,info:o,trigger:{name:s}}),a&&this._addPropertyEffect(r,v.OBSERVE,{fn:ws,info:o,trigger:{name:r}})}_createMethodObserver(s,r){let a=Wt(s);if(!a)throw new Error("Malformed observer expression '"+s+"'");Cs(this,a,v.OBSERVE,ui,null,r)}_createNotifyingProperty(s){this._addPropertyEffect(s,v.NOTIFY,{fn:Ma,info:{eventName:Dt(s)+"-changed",property:s}})}_createReflectedProperty(s){let r=this.constructor.attributeNameForProperty(s);r[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,v.REFLECT,{fn:Ra,info:{attrName:r}})}_createComputedProperty(s,r,a){let o=Wt(r);if(!o)throw new Error("Malformed computed expression '"+r+"'");const l=Cs(this,o,v.COMPUTE,Un,s,a);qt(this,Hn)[s]=l}_marshalArgs(s,r,a){const o=this.__data,l=[];for(let c=0,u=s.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:_,literal:g}=s[c];if(!g)if(p){const y=Ue(d,r),f=Es(o,a,y?r:d);_={path:y?r:d,value:f,base:y?A(o,d):f}}else _=h?Es(o,a,d):o[d];if(oi&&!this._overrideLegacyUndefined&&_===void 0&&s.length>1)return Ve;l[c]=_}return l}static addPropertyEffect(s,r,a){this.prototype._addPropertyEffect(s,r,a)}static createPropertyObserver(s,r,a){this.prototype._createPropertyObserver(s,r,a)}static createMethodObserver(s,r){this.prototype._createMethodObserver(s,r)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,r){this.prototype._createReadOnlyProperty(s,r)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,r,a){this.prototype._createComputedProperty(s,r,a)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,r){let a=this.constructor._parseTemplate(s),o=this.__preBoundTemplateInfo==a;if(!o)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(r)if(a=Object.create(a),a.wasPreBound=o,!this.__templateInfo)this.__templateInfo=a;else{const l=s._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(s,r,a){let o=s.hostProps=s.hostProps||{};o[r]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[r]=l[r]||[]).push(a)}_stampTemplate(s,r){r=r||this._bindTemplate(s,!0),Pe.push(this);let a=super._stampTemplate(s,r);if(Pe.pop(),r.nodeList=a.nodeList,!r.wasPreBound){let o=r.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)o.push(l)}return a.templateInfo=r,Va(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(s){const r=s.templateInfo,{previousSibling:a,nextSibling:o,parent:l}=r;a?a.nextSibling=o:l&&(l.firstChild=o),o?o.previousSibling=a:l&&(l.lastChild=a),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];m(m(d).parentNode).removeChild(d)}}static _parseTemplateNode(s,r,a){let o=t._parseTemplateNode.call(this,s,r,a);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,r);l&&(s.textContent=Ps(l)||" ",Yt(this,r,a,"text","textContent",l),o=!0)}return o}static _parseTemplateNodeAttribute(s,r,a,o,l){let c=this._parseBindings(l,r);if(c){let u=o,d="property";Ta.test(o)?d="attribute":o[o.length-1]=="$"&&(o=o.slice(0,-1),d="attribute");let h=Ps(c);return h&&d=="attribute"&&(o=="class"&&s.hasAttribute("class")&&(h+=" "+s.getAttribute(o)),s.setAttribute(o,h)),d=="attribute"&&u=="disable-upgrade$"&&s.setAttribute(o,""),s.localName==="input"&&u==="value"&&s.setAttribute(u,""),s.removeAttribute(u),d==="property"&&(o=Dn(o)),Yt(this,r,a,d,o,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,s,r,a,o,l)}static _parseTemplateNestedTemplate(s,r,a){let o=t._parseTemplateNestedTemplate.call(this,s,r,a);const l=s.parentNode,c=a.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";hs&&(u||d)&&(l.removeChild(s),a=a.parentInfo,a.templateInfo=c,a.noted=!0,o=!1);let h=c.hostProps;if(On&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),hs||(a.parentInfo.noted=!0));else{let p="{";for(let _ in h){let g=[{mode:p,source:_,dependencies:[_],hostProp:!0}];Yt(this,r,a,"property","_host_"+_,g)}}return o}static _parseBindings(s,r){let a=[],o=0,l;for(;(l=Ss.exec(s))!==null;){l.index>o&&a.push({literal:s.slice(o,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",_=-1;c=="{"&&(_=d.indexOf("::"))>0&&(p=d.substring(_+2),d=d.substring(0,_),h=!0);let g=Wt(d),y=[];if(g){let{args:f,methodName:b}=g;for(let S=0;S<f.length;S++){let x=f[S];x.literal||y.push(x)}let w=r.dynamicFns;(w&&w[b]||g.static)&&(y.push(b),g.dynamicFn=!0)}else y.push(d);a.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:y,event:p}),o=Ss.lastIndex}if(o&&o<s.length){let c=s.substring(o);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(s,r,a,o,l,c){let u;return r.signature?u=ui(s,a,o,l,r.signature):a!=r.source?u=A(s,r.source):c&&li(a)?u=A(s,a):u=s.__data[a],r.negate&&(u=!u),u}}return i}),Pe=[];/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*//**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ll(e){const t={};for(let i in e){const n=e[i];t[i]=typeof n=="function"?{type:n}:n}return t}const cl=N(e=>{const t=Ln(e);function i(r){const a=Object.getPrototypeOf(r);return a.prototype instanceof s?a:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let a=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const o=r.properties;o&&(a=ll(o))}r.__ownProperties=a}return r.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(o=>this.prototype._addPropertyToAttributeMap(o)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=i(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=i(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){const o=this._properties[a];return o&&o.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const ul="3.5.2",di=window.ShadyCSS&&window.ShadyCSS.cssBuild,It=N(e=>{const t=cl(Rt(e));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!di){const h=c.content.querySelectorAll("style"),p=Ti(c),_=na(u),g=c.content.firstElementChild;for(let f=0;f<_.length;f++){let b=_[f];b.textContent=l._processStyleText(b.textContent,d),c.content.insertBefore(b,g)}let y=0;for(let f=0;f<p.length;f++){let b=p[f],w=h[y];w!==b?(b=b.cloneNode(!0),w.parentNode.insertBefore(b,w)):y++,b.textContent=l._processStyleText(b.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),Xo&&di&&Vo){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(_=>{p+=_.textContent,_.parentNode.removeChild(_)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function a(l){let c=null;if(l&&(!fe||Wo)&&(c=$e.import(l,"template"),fe&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class o extends t{static get polymerElementVersion(){return ul}static _finalizeClass(){t._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):He||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)s(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Pi(c.url);else{const u=$e.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=qo,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return Si(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Re(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=m(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),Jo&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Re(this.importPath)),Re(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Tn&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return o});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class se{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,i){this._asyncModule=t,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,qe.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),qe.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,i,n){return t instanceof se?t._cancelAsync():t=new se,t.setConfig(i,n),t}}let qe=new Set;const qn=function(e){qe.add(e)},dl=function(){const e=!!qe.size;return qe.forEach(t=>{try{t.flush()}catch(i){setTimeout(()=>{throw i})}}),e};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Ni=typeof document.head.style.touchAction=="string",vt="__polymerGestures",lt="__polymerGesturesHandled",hi="__polymerGesturesTouchAction",As=25,Ts=5,hl=2,pl=2500,Yn=["mousedown","mousemove","mouseup","click"],fl=[0,1,4,2],_l=function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}}();function Mi(e){return Yn.indexOf(e)>-1}let Di=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){Di=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Wn(e){if(!(Mi(e)||e==="touchend")&&Ni&&Di&&Yo)return{passive:!0}}let Jn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const pi=[],ml={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},yl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function gl(e){return ml[e.localName]||!1}function bl(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = '${e.id}']`);for(let s=0;s<n.length;s++)t.push(n[s])}}catch{}}return t}let Os=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[lt]={skip:!0},e.type==="click")){let i=!1,n=Lt(e);for(let s=0;s<n.length;s++){if(n[s].nodeType===Node.ELEMENT_NODE){if(n[s].localName==="label")pi.push(n[s]);else if(gl(n[s])){let r=bl(n[s]);for(let a=0;a<r.length;a++)i=i||pi.indexOf(r[a])>-1}}if(n[s]===E.mouse.target)return}if(i)return;e.preventDefault(),e.stopPropagation()}};function ks(e){let t=Jn?["click"]:Yn;for(let i=0,n;i<t.length;i++)n=t[i],e?(pi.length=0,document.addEventListener(n,Os,!0)):document.removeEventListener(n,Os,!0)}function wl(e){E.mouse.mouseIgnoreJob||ks(!0);let t=function(){ks(),E.mouse.target=null,E.mouse.mouseIgnoreJob=null};E.mouse.target=Lt(e)[0],E.mouse.mouseIgnoreJob=se.debounce(E.mouse.mouseIgnoreJob,Ie.after(pl),t)}function te(e){let t=e.type;if(!Mi(t))return!1;if(t==="mousemove"){let i=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!_l&&(i=fl[e.which]||0),!!(i&1)}else return(e.button===void 0?0:e.button)===0}function vl(e){if(e.type==="click"){if(e.detail===0)return!0;let t=V(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,s=e.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}let E={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Cl(e){let t="auto",i=Lt(e);for(let n=0,s;n<i.length;n++)if(s=i[n],s[hi]){t=s[hi];break}return t}function Gn(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function de(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",wl,Di?{passive:!0}:!1);const Lt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Je={},X=[];function xl(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(e,t),s===n)break;n&&(i=n)}return i}function V(e){const t=Lt(e);return t.length>0?t[0]:e.target}function Xn(e){let t,i=e.type,s=e.currentTarget[vt];if(!s)return;let r=s[i];if(r){if(!e[lt]&&(e[lt]={},i.slice(0,5)==="touch")){e=e;let a=e.changedTouches[0];if(i==="touchstart"&&e.touches.length===1&&(E.touch.id=a.identifier),E.touch.id!==a.identifier)return;Ni||(i==="touchstart"||i==="touchmove")&&Sl(e)}if(t=e[lt],!t.skip){for(let a=0,o;a<X.length;a++)o=X[a],r[o.name]&&!t[o.name]&&o.flow&&o.flow.start.indexOf(e.type)>-1&&o.reset&&o.reset();for(let a=0,o;a<X.length;a++)o=X[a],r[o.name]&&!t[o.name]&&(t[o.name]=!0,o[i](e))}}}function Sl(e){let t=e.changedTouches[0],i=e.type;if(i==="touchstart")E.touch.x=t.clientX,E.touch.y=t.clientY,E.touch.scrollDecided=!1;else if(i==="touchmove"){if(E.touch.scrollDecided)return;E.touch.scrollDecided=!0;let n=Cl(e),s=!1,r=Math.abs(E.touch.x-t.clientX),a=Math.abs(E.touch.y-t.clientY);e.cancelable&&(n==="none"?s=!0:n==="pan-x"?s=a>r:n==="pan-y"&&(s=r>a)),s?e.preventDefault():Ct("track")}}function Pl(e,t,i){return Je[t]?(Al(e,t,i),!0):!1}function El(e,t,i){return Je[t]?(Tl(e,t,i),!0):!1}function Al(e,t,i){let n=Je[t],s=n.deps,r=n.name,a=e[vt];a||(e[vt]=a={});for(let o=0,l,c;o<s.length;o++)l=s[o],!(Jn&&Mi(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&e.addEventListener(l,Xn,Wn(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);e.addEventListener(t,i),n.touchAction&&Qn(e,n.touchAction)}function Tl(e,t,i){let n=Je[t],s=n.deps,r=n.name,a=e[vt];if(a)for(let o=0,l,c;o<s.length;o++)l=s[o],c=a[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&e.removeEventListener(l,Xn,Wn(l)));e.removeEventListener(t,i)}function Ri(e){X.push(e);for(let t=0;t<e.emits.length;t++)Je[e.emits[t]]=e}function Ol(e){for(let t=0,i;t<X.length;t++){i=X[t];for(let n=0,s;n<i.emits.length;n++)if(s=i.emits[n],s===e)return i}return null}function Qn(e,t){Ni&&e instanceof HTMLElement&&K.run(()=>{e.style.touchAction=t}),e[hi]=t}function Ii(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,m(e).dispatchEvent(n),n.defaultPrevented){let s=i.preventer||i.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function Ct(e){let t=Ol(e);t.info&&(t.info.prevent=!0)}Ri({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){de(this.info)},mousedown:function(e){if(!te(e))return;let t=V(e),i=this,n=function(a){te(a)||(Ee("up",t,a),de(i.info))},s=function(a){te(a)&&Ee("up",t,a),de(i.info)};Gn(this.info,n,s),Ee("down",t,e)},touchstart:function(e){Ee("down",V(e),e.changedTouches[0],e)},touchend:function(e){Ee("up",V(e),e.changedTouches[0],e)}});function Ee(e,t,i,n){t&&Ii(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(s){return Ct(s)}})}Ri({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>hl&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,de(this.info)},mousedown:function(e){if(!te(e))return;let t=V(e),i=this,n=function(a){let o=a.clientX,l=a.clientY;Ns(i.info,o,l)&&(i.info.state=i.info.started?a.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&Ct("tap"),i.info.addMove({x:o,y:l}),te(a)||(i.info.state="end",de(i.info)),t&&Jt(i.info,t,a),i.info.started=!0)},s=function(a){i.info.started&&n(a),de(i.info)};Gn(this.info,n,s),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=V(e),i=e.changedTouches[0],n=i.clientX,s=i.clientY;Ns(this.info,n,s)&&(this.info.state==="start"&&Ct("tap"),this.info.addMove({x:n,y:s}),Jt(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=V(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Jt(this.info,t,i))}});function Ns(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),s=Math.abs(e.y-i);return n>=Ts||s>=Ts}function Jt(e,t,i){if(!t)return;let n=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],r=s.x-e.x,a=s.y-e.y,o,l=0;n&&(o=s.x-n.x,l=s.y-n.y),Ii(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:r,dy:a,ddx:o,ddy:l,sourceEvent:i,hover:function(){return xl(i.clientX,i.clientY)}})}Ri({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){te(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){te(e)&&Ms(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Ms(this.info,e.changedTouches[0],e)}});function Ms(e,t,i){let n=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),r=V(i||t);!r||yl[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=As&&s<=As||vl(t))&&(e.prevent||Ii(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Zn=N(e=>{class t extends e{_addEventListenerToNode(n,s,r){Pl(n,s,r)||super._addEventListenerToNode(n,s,r)}_removeEventListenerFromNode(n,s,r){El(n,s,r)||super._removeEventListenerFromNode(n,s,r)}}return t});/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const kl=/:host\(:dir\((ltr|rtl)\)\)/g,Nl=':host([dir="$1"])',Ml=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Dl=':host([dir="$2"]) $1',Rl=/:dir\((?:ltr|rtl)\)/,Ds=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Le=[];let Be=null,Li="";function er(){Li=document.documentElement.getAttribute("dir")}function tr(e){e.__autoDirOptOut||e.setAttribute("dir",Li)}function ir(){er(),Li=document.documentElement.getAttribute("dir");for(let e=0;e<Le.length;e++)tr(Le[e])}function Il(){Be&&Be.takeRecords().length&&ir()}const Ll=N(e=>{Ds||Be||(er(),Be=new MutationObserver(ir),Be.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Fn(e);class i extends t{static _processStyleText(s,r){return s=t._processStyleText.call(this,s,r),!Ds&&Rl.test(s)&&(s=this._replaceDirInCssText(s),this.__activateDir=!0),s}static _replaceDirInCssText(s){let r=s;return r=r.replace(kl,Nl),r=r.replace(Ml,Dl),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Il(),Le.push(this),tr(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const s=Le.indexOf(this);s>-1&&Le.splice(s,1)}}}return i.__activateDir=!1,i});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Rs(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Rs():window.addEventListener("DOMContentLoaded",Rs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Ae(e,t,i){return{index:e,removed:t,addedCount:i}}const sr=0,nr=1,fi=2,_i=3;function Bl(e,t,i,n,s,r){let a=r-s+1,o=i-t+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(o),l[c][0]=c;for(let c=0;c<o;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let u=1;u<o;u++)if(Bi(e[t+u-1],n[s+c-1]))l[c][u]=l[c-1][u-1];else{let d=l[c-1][u]+1,h=l[c][u-1]+1;l[c][u]=d<h?d:h}return l}function Fl(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],s=[];for(;t>0||i>0;){if(t==0){s.push(fi),i--;continue}if(i==0){s.push(_i),t--;continue}let r=e[t-1][i-1],a=e[t-1][i],o=e[t][i-1],l;a<o?l=a<r?a:r:l=o<r?o:r,l==r?(r==n?s.push(sr):(s.push(nr),n=r),t--,i--):l==a?(s.push(_i),t--,n=a):(s.push(fi),i--,n=o)}return s.reverse(),s}function zl(e,t,i,n,s,r){let a=0,o=0,l,c=Math.min(i-t,r-s);if(t==0&&s==0&&(a=Hl(e,n,c)),i==e.length&&r==n.length&&(o=$l(e,n,c-a)),t+=a,s+=a,i-=o,r-=o,i-t==0&&r-s==0)return[];if(t==i){for(l=Ae(t,[],0);s<r;)l.removed.push(n[s++]);return[l]}else if(s==r)return[Ae(t,[],i-t)];let u=Fl(Bl(e,t,i,n,s,r));l=void 0;let d=[],h=t,p=s;for(let _=0;_<u.length;_++)switch(u[_]){case sr:l&&(d.push(l),l=void 0),h++,p++;break;case nr:l||(l=Ae(h,[],0)),l.addedCount++,h++,l.removed.push(n[p]),p++;break;case fi:l||(l=Ae(h,[],0)),l.addedCount++,h++;break;case _i:l||(l=Ae(h,[],0)),l.removed.push(n[p]),p++;break}return l&&d.push(l),d}function Hl(e,t,i){for(let n=0;n<i;n++)if(!Bi(e[n],t[n]))return n;return i}function $l(e,t,i){let n=e.length,s=t.length,r=0;for(;r<i&&Bi(e[--n],t[--s]);)r++;return r}function rr(e,t){return zl(e,0,e.length,t,0,t.length)}function Bi(e,t){return e===t}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function ae(e){return e.localName==="slot"}let Is=class{static getFlattenedNodes(e){const t=m(e);if(ae(e))return e=e,t.assignedNodes({flatten:!0});{const i=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];if(ae(s)){const r=s;i.push(...m(r).assignedNodes({flatten:!0}))}else i.push(s)}return i}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ae(this._target)?this._listenSlots([this._target]):m(this._target).children&&(this._listenSlots(m(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ae(this._target)?this._unlistenSlots([this._target]):m(this._target).children&&(this._unlistenSlots(m(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,K.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=rr(t,this._effectiveNodes);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let a=0,o;a<r.removed.length&&(o=r.removed[a]);a++)e.removedNodes.push(o);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let a=r.index;a<r.index+r.addedCount;a++)e.addedNodes.push(t[a]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ae(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ae(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const or=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=dl();while(e||t)};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const le=Element.prototype,Ul=le.matches||le.matchesSelector||le.mozMatchesSelector||le.msMatchesSelector||le.oMatchesSelector||le.webkitMatchesSelector,ar=function(e,t){return Ul.call(e,t)};class C{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Is(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(m(this.node).contains(t))return!0;let i=t,n=t.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=m(i).parentNode||m(i).host;return i===this.node}getOwnerRoot(){return m(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?m(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],i=m(this.node).assignedSlot;for(;i;)t.push(i),i=m(i).assignedSlot;return t}importNode(t,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return m(n).importNode(t,i)}getEffectiveChildNodes(){return Is.getFlattenedNodes(this.node)}queryDistributedElements(t){let i=this.getEffectiveChildNodes(),n=[];for(let s=0,r=i.length,a;s<r&&(a=i[s]);s++)a.nodeType===Node.ELEMENT_NODE&&ar(a,t)&&n.push(a);return n}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function jl(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Ls(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}function Kl(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(s){this.node[n]=s},configurable:!0})}}class mi{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}C.prototype.cloneNode;C.prototype.appendChild;C.prototype.insertBefore;C.prototype.removeChild;C.prototype.replaceChild;C.prototype.setAttribute;C.prototype.removeAttribute;C.prototype.querySelector;C.prototype.querySelectorAll;C.prototype.parentNode;C.prototype.firstChild;C.prototype.lastChild;C.prototype.nextSibling;C.prototype.previousSibling;C.prototype.firstElementChild;C.prototype.lastElementChild;C.prototype.nextElementSibling;C.prototype.previousElementSibling;C.prototype.childNodes;C.prototype.children;C.prototype.classList;C.prototype.textContent;C.prototype.innerHTML;let yi=C;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(C.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=C.prototype[t])}),Ls(e.prototype,["classList"]),yi=e,Object.defineProperties(mi.prototype,{localTarget:{get(){const t=this.event.currentTarget,i=t&&P(t).getOwnerRoot(),n=this.path;for(let s=0;s<n.length;s++){const r=n[s];if(P(r).getOwnerRoot()===i)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else jl(C.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Ls(C.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Kl(C.prototype,["textContent","innerHTML","className"]);const P=function(e){if(e=e||document,e instanceof yi||e instanceof mi)return e;let t=e.__domApi;return t||(e instanceof Event?t=new mi(e):t=new yi(e),e.__domApi=t),t};/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Gt=window.ShadyDOM,Bs=window.ShadyCSS;function Fs(e,t){return m(e).getRootNode()===t}function Vl(e,t=!1){if(!Gt||!Bs||!Gt.handlesDynamicScoping)return null;const i=Bs.ScopingShim;if(!i)return null;const n=i.scopeForNode(e),s=m(e).getRootNode(),r=a=>{if(!Fs(a,s))return;const o=Array.from(Gt.nativeMethods.querySelectorAll.call(a,"*"));o.push(a);for(let l=0;l<o.length;l++){const c=o[l];if(!Fs(c,s))continue;const u=i.currentScopeForNode(c);u!==n&&(u!==""&&i.unscopeNode(c,u),i.scopeNode(c,n))}};if(r(e),t){const a=new MutationObserver(o=>{for(let l=0;l<o.length;l++){const c=o[l];for(let u=0;u<c.addedNodes.length;u++){const d=c.addedNodes[u];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return a.observe(e,{childList:!0,subtree:!0}),a}else return null}/**
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
 */const Xt="disable-upgrade",lr=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};N(e=>{const t=It(e);let i=lr(t);class n extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(Xt)}_initializeProperties(){this.hasAttribute(Xt)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,a,o,l){r==Xt?this.__isUpgradeDisabled&&o==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,m(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,a,o,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const it="disable-upgrade";let ql=window.ShadyCSS;const cr=N(e=>{const t=Zn(It(e)),i=di?t:Ll(t),n=lr(i),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,l,c){(this.__dataAttributes&&this.__dataAttributes[o]||o===it)&&this.attributeChangedCallback(o,l,c,null)}setAttribute(o,l){if(et&&!this._legacyForceObservedAttributes){const c=this.getAttribute(o);super.setAttribute(o,l),this.__attributeReaction(o,c,String(l))}else super.setAttribute(o,l)}removeAttribute(o){if(et&&!this._legacyForceObservedAttributes){const l=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,l,null)}else super.removeAttribute(o)}static get observedAttributes(){return et&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(it)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,l,c,u){l!==c&&(o==it?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,m(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,l,c,u),this.attributeChanged(o,l,c)))}attributeChanged(o,l,c){}_initializeProperties(){if(He&&this.hasAttribute(it))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),et&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const o=this.attributes;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,l){return this._deserializeValue(o,l)}reflectPropertyToAttribute(o,l,c){this._propertyToAttribute(o,l,c)}serializeValueToAttribute(o,l,c){this._valueToNodeAttribute(c||this,o,l)}extend(o,l){if(!(o&&l))return o||l;let c=Object.getOwnPropertyNames(l);for(let u=0,d;u<c.length&&(d=c[u]);u++){let h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(o,d,h)}return o}mixin(o,l){for(let c in l)o[c]=l[c];return o}chainObject(o,l){return o&&l&&o!==l&&(o.__proto__=l),o}instanceTemplate(o){let l=this.constructor._contentForTemplate(o);return document.importNode(l,!0)}fire(o,l,c){c=c||{},l=l??{};let u=new Event(o,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let d=c.node||this;return m(d).dispatchEvent(u),u}listen(o,l,c){o=o||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),d=u.get(o);d||(d={},u.set(o,d));let h=l+c;d[h]||(d[h]=this._addMethodEventListenerToNode(o,l,c,this))}unlisten(o,l,c){o=o||this;let u=this.__boundListeners&&this.__boundListeners.get(o),d=l+c,h=u&&u[d];h&&(this._removeEventListenerFromNode(o,l,h),u[d]=null)}setScrollDirection(o,l){Qn(l||this,s[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=m(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){const l=P(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return P(this).getEffectiveChildNodes()}queryDistributedElements(o){return P(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=o[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(o){let l=this.queryDistributedElements(o);return l&&l[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let l=this.root.querySelector(o||"slot");return l?P(l).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){const l=this;return l!==o&&m(l).contains(o)&&m(l).getRootNode()===m(o).getRootNode()}isLocalDescendant(o){return this.root===m(o).getRootNode()}scopeSubtree(o,l=!1){return Vl(o,l)}getComputedStyleValue(o){return ql.getComputedStyleValue(this,o)}debounce(o,l,c){return this._debouncers=this._debouncers||{},this._debouncers[o]=se.debounce(this._debouncers[o],c>0?Ie.after(c):K,l.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];return!!(l&&l.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.cancel()}async(o,l){return l>0?Ie.run(o.bind(this),l):~K.run(o.bind(this))}cancelAsync(o){o<0?K.cancel(~o):Ie.cancel(o)}create(o,l){let c=document.createElement(o);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(o,l){return ar(l||this,o)}toggleAttribute(o,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(o)),l?(m(c).setAttribute(o,""),!0):(m(c).removeAttribute(o),!1)}toggleClass(o,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(o)),l?c.classList.add(o):c.classList.remove(o)}transform(o,l){l=l||this,l.style.webkitTransform=o,l.style.transform=o}translate3d(o,l,c,u){u=u||this,this.transform("translate3d("+o+","+l+","+c+")",u)}arrayDelete(o,l){let c;if(Array.isArray(o)){if(c=o.indexOf(l),c>=0)return o.splice(c,1)}else if(c=A(this,o).indexOf(l),c>=0)return this.splice(o,c,1);return null}_logger(o,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),o){case"log":case"warn":case"error":console[o](...l)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...l){return["[%s::%s]",this.is,o,...l]}}return r.prototype.is="",r});/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Yl={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},ur={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Wl=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},ur);function Jl(e,t,i){const n=e._noAccessors,s=Object.getOwnPropertyNames(e);for(let r=0;r<s.length;r++){let a=s[r];if(!(a in i))if(n)t[a]=e[a];else{let o=Object.getOwnPropertyDescriptor(e,a);o&&(o.configurable=!0,Object.defineProperty(t,a,o))}}}function Gl(e,t,i){for(let n=0;n<t.length;n++)dr(e,t[n],i,Wl)}function dr(e,t,i,n){Jl(t,e,n);for(let s in Yl)t[s]&&(i[s]=i[s]||[],i[s].push(t[s]))}function hr(e,t,i){t=t||[];for(let n=e.length-1;n>=0;n--){let s=e[n];s?Array.isArray(s)?hr(s,t):t.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&t.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return t}function zs(e,t){for(const i in t){const n=e[i],s=t[i];!("value"in s)&&n&&"value"in n?e[i]=Object.assign({value:n.value},s):e[i]=s}}const Hs=cr(HTMLElement);function Xl(e,t,i){let n;const s={};class r extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)zs(l,n[c].properties);return zs(l,e.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=s.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),He&&a(l);const c=Object.getPrototypeOf(this);let u=s.beforeRegister;if(u)for(let d=0;d<u.length;d++)u[d].call(c);if(u=s.registered,u)for(let d=0;d<u.length;d++)u[d].call(c)}}_applyListeners(){super._applyListeners();const l=s.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let d in u)this._addMethodEventListenerToNode(this,d,u[d])}}_ensureAttributes(){const l=s.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let d in u)this._ensureAttribute(d,u[d])}super._ensureAttributes()}ready(){super.ready();let l=s.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=s.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=s.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let d=s.attributeChanged;if(d)for(let h=0;h<d.length;h++)d[h].call(this,l,c,u)}}if(i){Array.isArray(i)||(i=[i]);let o=t.prototype.behaviors;n=hr(i,null,o),r.prototype.behaviors=o?o.concat(i):n}const a=o=>{n&&Gl(o,n,s),dr(o,e,s,ur)};return He||a(r.prototype),r.generatedFrom=e,r}const Ql=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t(Hs):Hs;return i=Xl(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Bt=function(e){let t;return typeof e=="function"?t=e:t=Bt.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};Bt.Class=Ql;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function Fi(e,t,i,n,s){let r;s&&(r=typeof i=="object"&&i!==null,r&&(n=e.__dataTemp[t]));let a=n!==i&&(n===n||i===i);return r&&a&&(e.__dataTemp[t]=i),a}const zi=N(e=>{class t extends e{_shouldPropertyChange(n,s,r){return Fi(this,n,s,r,!0)}}return t}),pr=N(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,s,r){return Fi(this,n,s,r,this.mutableData)}}return t});zi._mutablePropertyChange=Fi;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let gi=null;function bi(){return gi}bi.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:bi,writable:!0}});const fr=Rt(bi),Zl=zi(fr);function ec(e,t){gi=e,Object.setPrototypeOf(e,t.prototype),new t,gi=null}const tc=Rt(class{});function _r(e,t){for(let i=0;i<t.length;i++){let n=t[i];if(!!e!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),m(m(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const s=n.__polymerReplaced__;s&&m(m(s).parentNode).replaceChild(n,s)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class W extends tc{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let s=this.root.firstChild;s;s=s.nextSibling)i.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,i){this._setPendingPropertyOrPath(t,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,i,s=>{s.model=this,n(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,i,n)}}_showHideChildren(t){_r(t,this.children)}_setUnmanagedPropertyToNode(t,i,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&i=="textContent"?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,i,n)}get parentModel(){let t=this.__parentModel;if(!t){let i;t=this;do t=t.__dataHost.__dataHost;while((i=t.__templatizeOptions)&&!i.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}W.prototype.__dataHost;W.prototype.__templatizeOptions;W.prototype._methodHost;W.prototype.__templatizeOwner;W.prototype.__hostProps;const ic=zi(W);function $s(e){let t=e.__dataHost;return t&&t._methodHost||t}function sc(e,t,i){let n=i.mutableData?ic:W;xt.mixin&&(n=xt.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(e),oc(s,e,t,i),s}function nc(e,t,i,n){let s=i.forwardHostProp;if(s&&t.hasHostProps){const r=e.localName=="template";let a=t.templatizeTemplateClass;if(!a){if(r){let l=i.mutableData?Zl:fr;class c extends l{}a=t.templatizeTemplateClass=c}else{const l=e.constructor;class c extends l{}a=t.templatizeTemplateClass=c}let o=t.hostProps;for(let l in o)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:rc(l,s)}),a.prototype._createNotifyingProperty("_host_"+l);Tn&&n&&cc(t,i,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),r)ec(e,a),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,a.prototype);const o=t.hostProps;for(let l in o)if(l="_host_"+l,l in e){const c=e[l];delete e[l],e.__data[l]=c}}}}function rc(e,t){return function(n,s,r){t.call(n.__templatizeOwner,s.substring(6),r[s])}}function oc(e,t,i,n){let s=i.hostProps||{};for(let r in n.instanceProps){delete s[r];let a=n.notifyInstanceProp;a&&e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:ac(r,a)})}if(n.forwardHostProp&&t.__dataHost)for(let r in s)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:lc()})}function ac(e,t){return function(n,s,r){t.call(n.__templatizeOwner,n,s,r[s])}}function lc(){return function(t,i,n){t.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function xt(e,t,i){if(fe&&!$s(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let s=(t?t.constructor:W)._parseTemplate(e),r=s.templatizeInstanceClass;r||(r=sc(e,s,i),s.templatizeInstanceClass=r);const a=$s(e);nc(e,s,i,a);let o=class extends r{};return o.prototype._methodHost=a,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=s.hostProps,o=o,o}function cc(e,t,i){const n=i.constructor._properties,{propertyEffects:s}=e,{instanceProps:r}=t;for(let a in s)if(!n[a]&&!(r&&r[a])){const o=s[a];for(let l=0;l<o.length;l++){const{part:c}=o[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function uc(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance)if(i.__dataHost!=e)t=i.__dataHost;else return i;else t=m(t).parentNode;return null}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let Us=!1;function Hi(){if(He&&!An){if(!Us){Us=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const dc=Zn(pr(Rt(HTMLElement)));class hc extends dc{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),fe)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,i,n,s){this.mutableData=!0}connectedCallback(){Hi()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){m(m(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let i=new MutationObserver(()=>{if(t=this.querySelector("template"),t)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",hc);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const js=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class mr{constructor(t,i){gr(t,i);const n=i.reduce((s,r,a)=>s+yr(r)+t[a+1],t[0]);this.value=n.toString()}toString(){return this.value}}function yr(e){if(e instanceof mr)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function pc(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof mr)return yr(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const we=function(t,...i){gr(t,i);const n=document.createElement("template");let s=i.reduce((r,a,o)=>r+pc(a)+t[o+1],t[0]);return js&&(s=js.createHTML(s)),n.innerHTML=s,n},gr=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const $i=It(HTMLElement);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const fc=pr($i);class Ks extends fc{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!ai,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Hi()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=m(m(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let i=this.template=t._templateInfo?t:this.querySelector("template");if(!i){let s=new MutationObserver(()=>{if(this.querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return s.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=xt(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(s,r){let a=this.__instances;for(let o=0,l;o<a.length&&(l=a[o]);o++)l.forwardHostProp(s,r)},notifyInstanceProp:function(s,r,a){if(ca(this.as,r)){let o=s[this.itemsIndexAs];r==this.as&&(this.items[o]=a);let l=je(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,r);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let i=t,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)t.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,i=0){this.__renderDebouncer=se.debounce(this.__renderDebouncer,i>0?Ie.after(i):K,t.bind(this)),qn(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),or()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const i=this.__sortAndFilterItems(t),n=this.__calculateLimit(i.length);this.__updateInstances(t,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!ai||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let i=new Array(t.length);for(let n=0;n<t.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,s,r)=>this.__filterFn(t[n],s,r))),this.__sortFn&&i.sort((n,s)=>this.__sortFn(t[n],t[s])),i}__calculateLimit(t){let i=t;const n=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(t,this.initialCount),s=Math.max(i-n,0),this.__chunkCount=s||1):(s=Math.min(Math.max(t-n,0),this.__chunkCount),i=Math.min(n+s,t)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=i<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,i=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,i,n){const s=this.__itemsIdxToInstIdx={};let r;for(r=0;r<i;r++){let a=this.__instances[r],o=n[r],l=t[o];s[o]=r,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,r),a._setPendingProperty(this.itemsIndexAs,o),a._flushProperties()):this.__insertInstance(l,r,o)}for(let a=this.__instances.length-1;a>=r;a--)this.__detachAndRemoveInstance(a)}__detachInstance(t){let i=this.__instances[t];const n=m(i.root);for(let s=0;s<i.children.length;s++){let r=i.children[s];n.appendChild(r)}return i}__attachInstance(t,i){let n=this.__instances[t];i.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,i,n){let s={};return s[this.as]=t,s[this.indexAs]=i,s[this.itemsIndexAs]=n,new this.__ctor(s)}__insertInstance(t,i,n){const s=this.__stampInstance(t,i,n);let r=this.__instances[i+1],a=r?r.children[0]:this;return m(m(this).parentNode).insertBefore(s.root,a),this.__instances[i]=s,s}_showHideChildren(t){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(t)}__handleItemPath(t,i){let n=t.slice(6),s=n.indexOf("."),r=s<0?n:n.substring(0,s);if(r==parseInt(r,10)){let a=s<0?"":n.substring(s+1);this.__handleObservedPaths(a);let o=this.__itemsIdxToInstIdx[r],l=this.__instances[o];if(l){let c=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let i=this.modelForElement(t);return i&&i[this.as]}indexForElement(t){let i=this.modelForElement(t);return i&&i[this.indexAs]}modelForElement(t){return uc(this.template,t)}}customElements.define(Ks.is,Ks);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class br extends $i{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=se.debounce(this.__renderDebouncer,K,()=>this.__render()),qn(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=m(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!m(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Hi()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let i=t._templateInfo?t:m(t).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(m(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let t=m(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&m(this).previousSibling!==i[i.length-1])for(let s=0,r;s<i.length&&(r=i[s]);s++)m(t).insertBefore(r,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){or()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!ai||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class _c extends br{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const i=this.__dataHost||this;if(fe&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(s,r,a)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(o.changedProps,r)),s(r,a);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:s,changedProps:{}}),a)for(const l in r){const c=H(l);o.changedProps[c]=this.__dataHost[c]}else Object.assign(o.changedProps,r)},this.__instance=i._stampTemplate(this.__template,n),m(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,_r(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class mc extends br{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=xt(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[H(i)]=!0))}})),this.__instance=new this.__ctor,m(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let i=m(t[0]).parentNode;if(i){i=m(i);for(let n=0,s;n<t.length&&(s=t[n]);n++)i.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let i in t)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const Vs=On?_c:mc;customElements.define(Vs.is,Vs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/let yc=N(e=>{let t=It(e);class i extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(s,r){let a=r.path;if(a==JSCompiler_renameProperty("items",this)){let o=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(s!==c&&this.clearSelection(),l){let u=rr(o,l);this.__applySplices(u)}this.__lastItems=o,this.__lastMulti=s}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let o=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(o,10);o.indexOf(".")<0&&o==l&&this.__deselectChangedIdx(l)}}__applySplices(s){let r=this.__selectedMap;for(let o=0;o<s.length;o++){let l=s[o];r.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?r.set(u,c+l.addedCount-l.removed.length):r.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;r.has(this.items[u])&&r.set(this.items[u],u)}}this.__updateLinks();let a=0;r.forEach((o,l)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,r.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let s=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${s++}`)})}else this.__selectedMap.forEach(s=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${s}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${s}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(s){return this.__selectedMap.has(s)}isIndexSelected(s){return this.isSelected(this.items[s])}__deselectChangedIdx(s){let r=this.__selectedIndexForItemIndex(s);if(r>=0){let a=0;this.__selectedMap.forEach((o,l)=>{r==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(s){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${s}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(s){let r=this.__selectedMap.get(s);if(r>=0){this.__selectedMap.delete(s);let a;this.multi&&(a=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(s){this.deselect(this.items[s])}select(s){this.selectIndex(this.items.indexOf(s))}selectIndex(s){let r=this.items[s];this.isSelected(r)?this.toggle&&this.deselectIndex(s):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,s),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return i}),gc=yc($i);class qs extends gc{static get is(){return"array-selector"}static get template(){return null}}customElements.define(qs.is,qs);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const ct=new q;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){ct.processStyles(),si(e,t)},styleElement(e){ct.processStyles()},styleDocument(e){ct.processStyles(),si(document.body,e)},getComputedStyleValue(e,t){return Pn(e,t)},flushCustomStyles(){},nativeCss:xi,nativeShadow:Mt,cssBuild:ze,disableRuntime:mn});window.ShadyCSS.CustomStyleInterface=ct;/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/const Ys="include",bc=window.ShadyCSS.CustomStyleInterface;class wc extends HTMLElement{constructor(){super(),this._style=null,bc.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const i=t.getAttribute(Ys);return i&&(t.removeAttribute(Ys),t.textContent=ra(i)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",wc);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/cr(HTMLElement).prototype;/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const wr=we`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;wr.setAttribute("style","display: none;");document.head.appendChild(wr.content);var vr=document.createElement("style");vr.textContent="[hidden] { display: none !important; }";document.head.appendChild(vr);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Cr=we`
<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`;Cr.setAttribute("style","display: none;");document.head.appendChild(Cr.content);/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const xr=we`
<dom-module id="paper-material-styles">
  <template>
    <style>
      html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      .paper-material {
        @apply --paper-material;
      }
      .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }

      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */
      :host {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material) {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]) {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]) {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]) {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]) {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`;xr.setAttribute("style","display: none;");document.head.appendChild(xr.content);/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const vc={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused(e.type==="focus")},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var Ws={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Cc={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Js={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},xc=/[a-z0-9*]/,Sc=/U\+/,Pc=/^arrow/,Ec=/^space(bar)?/,Ac=/^escape$/;function Gs(e,t){var i="";if(e){var n=e.toLowerCase();n===" "||Ec.test(n)?i="space":Ac.test(n)?i="esc":n.length==1?(!t||xc.test(n))&&(i=n):Pc.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function Tc(e){var t="";return e&&(e in Ws?t=Ws[e]:Sc.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function Oc(e){var t="";return Number(e)&&(e>=65&&e<=90?t=String.fromCharCode(32+e):e>=112&&e<=123?t="f"+(e-112+1):e>=48&&e<=57?t=String(e-48):e>=96&&e<=105?t=String(e-96):t=Cc[e]),t}function kc(e,t){return e.key?Gs(e.key,t):e.detail&&e.detail.key?Gs(e.detail.key,t):Tc(e.keyIdentifier)||Oc(e.keyCode)||""}function Xs(e,t){var i=kc(t,e.hasModifiers);return i===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Nc(e){return e.length===1?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(t,i){var n=i.split(":"),s=n[0],r=n[1];return s in Js?(t[Js[s]]=!0,t.hasModifiers=!0):(t.key=s,t.event=r||"keydown"),t},{combo:e.split(":").shift()})}function Qs(e){return e.trim().split(" ").map(function(t){return Nc(t)})}const Sr={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=Qs(t),n=0;n<i.length;++n)if(Xs(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(t){return t.keyBindings});return e.indexOf(this.keyBindings)===-1&&e.push(this.keyBindings),e},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var e in this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(i,n){var s=i[0].hasModifiers,r=n[0].hasModifiers;return s===r?0:s?-1:1})},_addKeyBinding:function(e,t){Qs(e).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)},this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],s=e[i][1];if(Xs(n,t)&&(this._triggerKeyHandler(n,s,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var s=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,s),s.defaultPrevented&&i.preventDefault()}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const St={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=P(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=P(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Mc=[Sr,St];/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var I={distance:function(e,t,i,n){var s=e-i,r=t-n;return Math.sqrt(s*s+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Pr(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Pr.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=I.distance(e,t,0,0),n=I.distance(e,t,this.width,0),s=I.distance(e,t,0,this.height),r=I.distance(e,t,this.width,this.height);return Math.max(i,n,s,r)}};function G(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),P(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}G.MAX_RADIUS=300;G.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=I.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?I.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(e+t),G.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/G.MAX_RADIUS),s=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-s));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=this.mouseUpElapsedSeconds*.3,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,G.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,G.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Pr(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=I.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=I.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=I.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=I.now())},remove:function(){P(P(this.waveContainer).parentNode).removeChild(this.waveContainer)}};Bt({_template:we`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Sr],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){P(this).parentNode.nodeType==11?this.keyEventTarget=P(this).getOwnerRoot().host:this.keyEventTarget=P(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){if(!(this.holdDown&&this.ripples.length>0)){var t=this.addRipple();t.downAction(e),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new G(this);return P(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){t!==void 0&&(e?this.downAction():this.upAction())}});/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Dc={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){St._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&P(t).appendChild(this._ripple),e){var i=P(this._rippleContainer||this),n=P(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var e=document.createElement("paper-ripple");return e},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}};/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Er={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){St._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){St._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},Rc=[Mc,vc,Dc,Er];/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/const Ar=we`
  <style include="paper-material-styles">
    /* Need to specify the same specificity as the styles imported from paper-material. */
    :host {
      @apply --layout-inline;
      @apply --layout-center-center;
      position: relative;
      box-sizing: border-box;
      min-width: 5.14em;
      margin: 0 0.29em;
      background: transparent;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      -webkit-tap-highlight-color: transparent;
      font: inherit;
      text-transform: uppercase;
      outline-width: 0;
      border-radius: 3px;
      -moz-user-select: none;
      -ms-user-select: none;
      -webkit-user-select: none;
      user-select: none;
      cursor: pointer;
      z-index: 0;
      padding: 0.7em 0.57em;

      @apply --paper-font-common-base;
      @apply --paper-button;
    }

    :host([elevation="1"]) {
      @apply --paper-material-elevation-1;
    }

    :host([elevation="2"]) {
      @apply --paper-material-elevation-2;
    }

    :host([elevation="3"]) {
      @apply --paper-material-elevation-3;
    }

    :host([elevation="4"]) {
      @apply --paper-material-elevation-4;
    }

    :host([elevation="5"]) {
      @apply --paper-material-elevation-5;
    }

    :host([hidden]) {
      display: none !important;
    }

    :host([raised].keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-raised-keyboard-focus;
    }

    :host(:not([raised]).keyboard-focus) {
      font-weight: bold;
      @apply --paper-button-flat-keyboard-focus;
    }

    :host([disabled]) {
      background: none;
      color: #a8a8a8;
      cursor: auto;
      pointer-events: none;

      @apply --paper-button-disabled;
    }

    :host([disabled][raised]) {
      background: #eaeaea;
    }


    :host([animated]) {
      @apply --shadow-transition;
    }

    paper-ripple {
      color: var(--paper-button-ink-color);
    }
  </style>

  <slot></slot>`;Ar.setAttribute("strip-whitespace","");Bt({_template:Ar,is:"paper-button",behaviors:[Rc],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Er._calculateElevation.apply(this):this._setElevation(0)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ic=e=>e??ut;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function*Tr(e,t){if(e!==void 0){let i=0;for(const n of e)yield t(n,i++)}}const Lc={duration:250},Bc=e=>(t,i,n)=>{const s="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[s]:"",display:""});const{[e]:r}=t.getBoundingClientRect(),a=[0,r],[o,l]=i?a:a.slice().reverse(),c=t.animate([{[s]:`${o}px`},{[s]:`${l}px`}],{...Lc,...n});c.onfinish=()=>Object.assign(t.style,{[s]:"",display:i?"":"none"})};function Fc(e){return()=>e}const zc=Fc(),Hc=zc,Or=fo(()=>Hc);customElements.define("cosmoz-keybinding-provider",Or.Provider);const kr=e=>{const t=j(()=>({}),[]);return j(()=>Object.assign(t,e),[t,...Object.values(e)])},$c=(e,t)=>{const i=hn(Or),n=kr(e);Z(()=>i(n),t)},Zs=e=>e.matches(":focus-within"),Uc=({disabled:e,onFocus:t})=>{const[i,n]=ee(),{focused:s,closed:r}=i||{},a=s&&!e,o=kr({closed:r,onFocus:t}),l=jt(u=>n(d=>({...d,closed:u})),[]),c=jt(u=>{const d=u.currentTarget;return Zs(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return Z(()=>{if(!a)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=o;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a]),{focused:a,active:a&&!r,setClosed:l,onToggle:c,onFocus:jt(u=>{const d=Zs(u.currentTarget);n({focused:d}),o.onFocus?.(d)},[o])}},en=["focusin","focusout"],jc=e=>{const t=Uc(e),{onFocus:i}=t;return Z(()=>(e.setAttribute("tabindex","0"),en.forEach(n=>e.addEventListener(n,i)),()=>{en.forEach(n=>e.removeEventListener(n,i))}),[]),t},Kc=kt`
	:host {
		display: contents;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96vh - 64px));
		overflow-y: auto;
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: 10px 24px;
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, #101010);
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: 14px;
		line-height: 20px;
		text-align: left;
		margin: 0;
		width: 100%;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cosmoz-selection-color, rgba(58, 145, 226, 0.1))
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}
`,Vc=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",be(Vc,{styleSheets:[Kc]}));const qc=({placement:e})=>M` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",be(qc));/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yc(e,t,i){return e?t(e):i?.(e)}const Qt=new WeakMap,tn=Nt(class extends _n{render(e){return ut}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ut}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=Qt.get(t);i===void 0&&(i=new WeakMap,Qt.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Qt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nr="important",Wc=" !"+Nr,Jc=Nt(class extends Ci{constructor(e){if(super(e),e.type!==pn.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const s=t[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Wc);n.includes("-")||r?i.setProperty(n,r?s.slice(0,-11):s,r?Nr:""):i[n]=s}}return Fe}});/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gc={},Xc=Nt(class extends Ci{constructor(){super(...arguments),this.ot=Gc}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,s)=>n===this.ot[s]))return Fe}else if(this.ot===t)return Fe;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}}),Qc=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Zc=kt`
	:host {
		position: fixed;
		left: -9999999999px;
		min-width: 72px;
		box-sizing: border-box;
		padding: var(--cosmoz-dropdown-spacing, 0px);
		z-index: var(--cosmoz-dropdown-z-index, 2);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	:host(:popover-open) {
		margin: 0;
		border: 0;
		padding: 0;
		overflow: visible;
	}
	.wrap {
		background: var(--cosmoz-dropdown-bg-color, #fff);
		box-shadow: var(
			--cosmoz-dropdown-box-shadow,
			0px 3px 4px 2px rgba(0, 0, 0, 0.1)
		);
		border-radius: var(--cosmoz-dropdown-border-radius, 15px);
	}
	::slotted(*) {
		display: block;
	}
`,eu=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Qc(be(eu,{styleSheets:[Zc]})));const Pt=Math.min,ie=Math.max,Et=Math.round,st=Math.floor,L=e=>({x:e,y:e}),tu={left:"right",right:"left",bottom:"top",top:"bottom"},iu={start:"end",end:"start"};function sn(e,t,i){return ie(e,Pt(t,i))}function Ui(e,t){return typeof e=="function"?e(t):e}function _e(e){return e.split("-")[0]}function ji(e){return e.split("-")[1]}function Mr(e){return e==="x"?"y":"x"}function Dr(e){return e==="y"?"height":"width"}function Ye(e){return["top","bottom"].includes(_e(e))?"y":"x"}function Rr(e){return Mr(Ye(e))}function su(e,t,i){i===void 0&&(i=!1);const n=ji(e),s=Rr(e),r=Dr(s);let a=s==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=At(a)),[a,At(a)]}function nu(e){const t=At(e);return[wi(e),t,wi(t)]}function wi(e){return e.replace(/start|end/g,t=>iu[t])}function ru(e,t,i){const n=["left","right"],s=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return i?t?s:n:t?n:s;case"left":case"right":return t?r:a;default:return[]}}function ou(e,t,i,n){const s=ji(e);let r=ru(_e(e),i==="start",n);return s&&(r=r.map(a=>a+"-"+s),t&&(r=r.concat(r.map(wi)))),r}function At(e){return e.replace(/left|right|bottom|top/g,t=>tu[t])}function au(e){return{top:0,right:0,bottom:0,left:0,...e}}function lu(e){return typeof e!="number"?au(e):{top:e,right:e,bottom:e,left:e}}function Tt(e){const{x:t,y:i,width:n,height:s}=e;return{width:n,height:s,top:i,left:t,right:t+n,bottom:i+s,x:t,y:i}}function nn(e,t,i){let{reference:n,floating:s}=e;const r=Ye(t),a=Rr(t),o=Dr(a),l=_e(t),c=r==="y",u=n.x+n.width/2-s.width/2,d=n.y+n.height/2-s.height/2,h=n[o]/2-s[o]/2;let p;switch(l){case"top":p={x:u,y:n.y-s.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-s.width,y:d};break;default:p={x:n.x,y:n.y}}switch(ji(t)){case"start":p[a]-=h*(i&&c?-1:1);break;case"end":p[a]+=h*(i&&c?-1:1);break}return p}const cu=async(e,t,i)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:a}=i,o=r.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:d}=nn(c,n,l),h=n,p={},_=0;for(let g=0;g<o.length;g++){const{name:y,fn:f}=o[g],{x:b,y:w,data:S,reset:x}=await f({x:u,y:d,initialPlacement:n,placement:h,strategy:s,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=b??u,d=w??d,p={...p,[y]:{...p[y],...S}},x&&_<=50&&(_++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(c=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):x.rects),{x:u,y:d}=nn(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:s,middlewareData:p}};async function Ir(e,t){var i;t===void 0&&(t={});const{x:n,y:s,platform:r,rects:a,elements:o,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=Ui(t,e),_=lu(p),y=o[h?d==="floating"?"reference":"floating":d],f=Tt(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(y)))==null||i?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(o.floating)),boundary:c,rootBoundary:u,strategy:l})),b=d==="floating"?{x:n,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(o.floating)),S=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},x=Tt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:b,offsetParent:w,strategy:l}):b);return{top:(f.top-x.top+_.top)/S.y,bottom:(x.bottom-f.bottom+_.bottom)/S.y,left:(f.left-x.left+_.left)/S.x,right:(x.right-f.right+_.right)/S.x}}const uu=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:s,middlewareData:r,rects:a,initialPlacement:o,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:g=!0,...y}=Ui(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const f=_e(s),b=Ye(o),w=_e(o)===o,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=h||(w||!g?[At(o)]:nu(o)),re=_!=="none";!h&&re&&x.push(...ou(o,g,_,S));const jr=[o,...x],$t=await Ir(t,y),Xe=[];let Ce=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&Xe.push($t[f]),d){const J=su(s,a,S);Xe.push($t[J[0]],$t[J[1]])}if(Ce=[...Ce,{placement:s,overflows:Xe}],!Xe.every(J=>J<=0)){var Wi,Ji;const J=(((Wi=r.flip)==null?void 0:Wi.index)||0)+1,Xi=jr[J];if(Xi)return{data:{index:J,overflows:Ce},reset:{placement:Xi}};let xe=(Ji=Ce.filter(oe=>oe.overflows[0]<=0).sort((oe,$)=>oe.overflows[1]-$.overflows[1])[0])==null?void 0:Ji.placement;if(!xe)switch(p){case"bestFit":{var Gi;const oe=(Gi=Ce.filter($=>{if(re){const U=Ye($.placement);return U===b||U==="y"}return!0}).map($=>[$.placement,$.overflows.filter(U=>U>0).reduce((U,Kr)=>U+Kr,0)]).sort(($,U)=>$[1]-U[1])[0])==null?void 0:Gi[0];oe&&(xe=oe);break}case"initialPlacement":xe=o;break}if(s!==xe)return{reset:{placement:xe}}}return{}}}},du=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:s}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:o={fn:y=>{let{x:f,y:b}=y;return{x:f,y:b}}},...l}=Ui(e,t),c={x:i,y:n},u=await Ir(t,l),d=Ye(_e(s)),h=Mr(d);let p=c[h],_=c[d];if(r){const y=h==="y"?"top":"left",f=h==="y"?"bottom":"right",b=p+u[y],w=p-u[f];p=sn(b,p,w)}if(a){const y=d==="y"?"top":"left",f=d==="y"?"bottom":"right",b=_+u[y],w=_-u[f];_=sn(b,_,w)}const g=o.fn({...t,[h]:p,[d]:_});return{...g,data:{x:g.x-i,y:g.y-n,enabled:{[h]:r,[d]:a}}}}}};function Ft(){return typeof window<"u"}function ve(e){return Lr(e)?(e.nodeName||"").toLowerCase():"#document"}function k(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function F(e){var t;return(t=(Lr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Lr(e){return Ft()?e instanceof Node||e instanceof k(e).Node:!1}function D(e){return Ft()?e instanceof Element||e instanceof k(e).Element:!1}function B(e){return Ft()?e instanceof HTMLElement||e instanceof k(e).HTMLElement:!1}function rn(e){return!Ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof k(e).ShadowRoot}function Ge(e){const{overflow:t,overflowX:i,overflowY:n,display:s}=R(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!["inline","contents"].includes(s)}function hu(e){return["table","td","th"].includes(ve(e))}function zt(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Ki(e){const t=Vi(),i=D(e)?R(e):e;return i.transform!=="none"||i.perspective!=="none"||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(i.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(i.contain||"").includes(n))}function pu(e){let t=Y(e);for(;B(t)&&!me(t);){if(Ki(t))return t;if(zt(t))return null;t=Y(t)}return null}function Vi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function me(e){return["html","body","#document"].includes(ve(e))}function R(e){return k(e).getComputedStyle(e)}function Ht(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Y(e){if(ve(e)==="html")return e;const t=e.assignedSlot||e.parentNode||rn(e)&&e.host||F(e);return rn(t)?t.host:t}function Br(e){const t=Y(e);return me(t)?e.ownerDocument?e.ownerDocument.body:e.body:B(t)&&Ge(t)?t:Br(t)}function We(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const s=Br(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),a=k(s);if(r){const o=vi(a);return t.concat(a,a.visualViewport||[],Ge(s)?s:[],o&&i?We(o):[])}return t.concat(s,We(s,[],i))}function vi(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Fr(e){const t=R(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=B(e),r=s?e.offsetWidth:i,a=s?e.offsetHeight:n,o=Et(i)!==r||Et(n)!==a;return o&&(i=r,n=a),{width:i,height:n,$:o}}function qi(e){return D(e)?e:e.contextElement}function he(e){const t=qi(e);if(!B(t))return L(1);const i=t.getBoundingClientRect(),{width:n,height:s,$:r}=Fr(t);let a=(r?Et(i.width):i.width)/n,o=(r?Et(i.height):i.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const fu=L(0);function zr(e){const t=k(e);return!Vi()||!t.visualViewport?fu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function _u(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==k(e)?!1:t}function ne(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),r=qi(e);let a=L(1);t&&(n?D(n)&&(a=he(n)):a=he(e));const o=_u(r,i,n)?zr(r):L(0);let l=(s.left+o.x)/a.x,c=(s.top+o.y)/a.y,u=s.width/a.x,d=s.height/a.y;if(r){const h=k(r),p=n&&D(n)?k(n):n;let _=h,g=vi(_);for(;g&&n&&p!==_;){const y=he(g),f=g.getBoundingClientRect(),b=R(g),w=f.left+(g.clientLeft+parseFloat(b.paddingLeft))*y.x,S=f.top+(g.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=w,c+=S,_=k(g),g=vi(_)}}return Tt({width:u,height:d,x:l,y:c})}function Yi(e,t){const i=Ht(e).scrollLeft;return t?t.left+i:ne(F(e)).left+i}function Hr(e,t,i){i===void 0&&(i=!1);const n=e.getBoundingClientRect(),s=n.left+t.scrollLeft-(i?0:Yi(e,n)),r=n.top+t.scrollTop;return{x:s,y:r}}function mu(e){let{elements:t,rect:i,offsetParent:n,strategy:s}=e;const r=s==="fixed",a=F(n),o=t?zt(t.floating):!1;if(n===a||o&&r)return i;let l={scrollLeft:0,scrollTop:0},c=L(1);const u=L(0),d=B(n);if((d||!d&&!r)&&((ve(n)!=="body"||Ge(a))&&(l=Ht(n)),B(n))){const p=ne(n);c=he(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const h=a&&!d&&!r?Hr(a,l,!0):L(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:i.y*c.y-l.scrollTop*c.y+u.y+h.y}}function yu(e){return Array.from(e.getClientRects())}function gu(e){const t=F(e),i=Ht(e),n=e.ownerDocument.body,s=ie(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ie(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-i.scrollLeft+Yi(e);const o=-i.scrollTop;return R(n).direction==="rtl"&&(a+=ie(t.clientWidth,n.clientWidth)-s),{width:s,height:r,x:a,y:o}}function bu(e,t){const i=k(e),n=F(e),s=i.visualViewport;let r=n.clientWidth,a=n.clientHeight,o=0,l=0;if(s){r=s.width,a=s.height;const c=Vi();(!c||c&&t==="fixed")&&(o=s.offsetLeft,l=s.offsetTop)}return{width:r,height:a,x:o,y:l}}function wu(e,t){const i=ne(e,!0,t==="fixed"),n=i.top+e.clientTop,s=i.left+e.clientLeft,r=B(e)?he(e):L(1),a=e.clientWidth*r.x,o=e.clientHeight*r.y,l=s*r.x,c=n*r.y;return{width:a,height:o,x:l,y:c}}function on(e,t,i){let n;if(t==="viewport")n=bu(e,i);else if(t==="document")n=gu(F(e));else if(D(t))n=wu(t,i);else{const s=zr(e);n={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Tt(n)}function $r(e,t){const i=Y(e);return i===t||!D(i)||me(i)?!1:R(i).position==="fixed"||$r(i,t)}function vu(e,t){const i=t.get(e);if(i)return i;let n=We(e,[],!1).filter(o=>D(o)&&ve(o)!=="body"),s=null;const r=R(e).position==="fixed";let a=r?Y(e):e;for(;D(a)&&!me(a);){const o=R(a),l=Ki(a);!l&&o.position==="fixed"&&(s=null),(r?!l&&!s:!l&&o.position==="static"&&!!s&&["absolute","fixed"].includes(s.position)||Ge(a)&&!l&&$r(e,a))?n=n.filter(u=>u!==a):s=o,a=Y(a)}return t.set(e,n),n}function Cu(e){let{element:t,boundary:i,rootBoundary:n,strategy:s}=e;const a=[...i==="clippingAncestors"?zt(t)?[]:vu(t,this._c):[].concat(i),n],o=a[0],l=a.reduce((c,u)=>{const d=on(t,u,s);return c.top=ie(d.top,c.top),c.right=Pt(d.right,c.right),c.bottom=Pt(d.bottom,c.bottom),c.left=ie(d.left,c.left),c},on(t,o,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function xu(e){const{width:t,height:i}=Fr(e);return{width:t,height:i}}function Su(e,t,i){const n=B(t),s=F(t),r=i==="fixed",a=ne(e,!0,r,t);let o={scrollLeft:0,scrollTop:0};const l=L(0);if(n||!n&&!r)if((ve(t)!=="body"||Ge(s))&&(o=Ht(t)),n){const h=ne(t,!0,r,t);l.x=h.x+t.clientLeft,l.y=h.y+t.clientTop}else s&&(l.x=Yi(s));const c=s&&!n&&!r?Hr(s,o):L(0),u=a.left+o.scrollLeft-l.x-c.x,d=a.top+o.scrollTop-l.y-c.y;return{x:u,y:d,width:a.width,height:a.height}}function Zt(e){return R(e).position==="static"}function an(e,t){if(!B(e)||R(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return F(e)===i&&(i=i.ownerDocument.body),i}function Ur(e,t){const i=k(e);if(zt(e))return i;if(!B(e)){let s=Y(e);for(;s&&!me(s);){if(D(s)&&!Zt(s))return s;s=Y(s)}return i}let n=an(e,t);for(;n&&hu(n)&&Zt(n);)n=an(n,t);return n&&me(n)&&Zt(n)&&!Ki(n)?i:n||pu(e)||i}const Pu=async function(e){const t=this.getOffsetParent||Ur,i=this.getDimensions,n=await i(e.floating);return{reference:Su(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Eu(e){return R(e).direction==="rtl"}const Au={convertOffsetParentRelativeRectToViewportRelativeRect:mu,getDocumentElement:F,getClippingRect:Cu,getOffsetParent:Ur,getElementRects:Pu,getClientRects:yu,getDimensions:xu,getScale:he,isElement:D,isRTL:Eu};function Tu(e,t){let i=null,n;const s=F(e);function r(){var o;clearTimeout(n),(o=i)==null||o.disconnect(),i=null}function a(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),r();const{left:c,top:u,width:d,height:h}=e.getBoundingClientRect();if(o||t(),!d||!h)return;const p=st(u),_=st(s.clientWidth-(c+d)),g=st(s.clientHeight-(u+h)),y=st(c),b={rootMargin:-p+"px "+-_+"px "+-g+"px "+-y+"px",threshold:ie(0,Pt(1,l))||1};let w=!0;function S(x){const re=x[0].intersectionRatio;if(re!==l){if(!w)return a();re?a(!1,re):n=setTimeout(()=>{a(!1,1e-7)},1e3)}w=!1}try{i=new IntersectionObserver(S,{...b,root:s.ownerDocument})}catch{i=new IntersectionObserver(S,b)}i.observe(e)}return a(!0),r}function Ou(e,t,i,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=qi(e),u=s||r?[...c?We(c):[],...We(t)]:[];u.forEach(f=>{s&&f.addEventListener("scroll",i,{passive:!0}),r&&f.addEventListener("resize",i)});const d=c&&o?Tu(c,i):null;let h=-1,p=null;a&&(p=new ResizeObserver(f=>{let[b]=f;b&&b.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),i()}),c&&!l&&p.observe(c),p.observe(t));let _,g=l?ne(e):null;l&&y();function y(){const f=ne(e);g&&(f.x!==g.x||f.y!==g.y||f.width!==g.width||f.height!==g.height)&&i(),g=f,_=requestAnimationFrame(y)}return i(),()=>{var f;u.forEach(b=>{s&&b.removeEventListener("scroll",i),r&&b.removeEventListener("resize",i)}),d?.(),(f=p)==null||f.disconnect(),p=null,l&&cancelAnimationFrame(_)}}const ku=du,Nu=uu,Mu=(e,t,i)=>{const n=new Map,s={platform:Au,...i},r={...s.platform,_c:n};return cu(e,t,{...s,platform:r})},Du=[Nu({fallbackAxisSideDirection:"start",crossAxis:!1}),ku()],Ru=({placement:e="bottom-start",strategy:t,middleware:i=Du}={})=>{const[n,s]=ee(),[r,a]=ee(),[o,l]=ee();return Z(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return Ou(n,r,()=>Mu(n,r,{placement:e,strategy:t,middleware:i}).then(l))},[n,r,e,t,i]),{setReference:s,setFloating:a,styles:j(()=>o?{left:`${o.x}px`,top:`${o.y}px`}:{},[o?.x,o?.y])}},Iu=e=>e.preventDefault(),Lu=kt`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		border: none;
		cursor: pointer;
		position: relative;
		pointer-events: auto;
		outline: none;
		background: var(
			--cosmoz-dropdown-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		--color: var(
			--cosmoz-dropdown-button-color,
			var(--cosmoz-button-color, #fff)
		);
		color: var(--color);
		border-radius: var(--cosmoz-dropdown-button-radius, 50%);
		width: var(
			--cosmoz-dropdown-button-width,
			var(--cosmoz-dropdown-button-size, 40px)
		);
		height: var(
			--cosmoz-dropdown-button-height,
			var(--cosmoz-dropdown-button-size, 40px)
		);
		padding: var(--cosmoz-dropdown-button-padding);
	}
	button:hover {
		background: var(
			--cosmoz-dropdown-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
		color: var(--cosmoz-dropdown-button-hover-color, var(--color));
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Bu=e=>{const{placement:t,strategy:i,middleware:n,render:s}=e,{active:r,onToggle:a}=jc(e),{styles:o,setReference:l,setFloating:c}=Ru({placement:t,strategy:i,middleware:n});return M` <div class="anchor" part="anchor" ${tn(l)}>
			<button
				@mousedown=${Iu}
				@click=${a}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Yc(r,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Jc(o)}"
					@connected=${u=>u.target.showPopover?.()}
					${tn(c)}
					><slot></slot>${Xc([s],()=>s?.()||ut)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",be(Bu,{styleSheets:[Lu]}));function Fu(e){return e.boundingClientRect.height===0}function zu(e){return e.getBoundingClientRect().height===0}const Hu=e=>{if(e.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function $u(e,t){e.forEach(i=>{zu(i)||(t.add(i),e.delete(i))})}const Uu=(e,t)=>{let i=new Set,n=new Set,s=new Set;const r=new IntersectionObserver(o=>{o.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(i.add(c),n.delete(c),s.delete(c)):Fu(l)?(i.delete(c),n.delete(c),s.add(c)):(i.delete(c),n.add(c),s.delete(c))}),$u(s,n),t({visible:i,overflowing:n,hidden:s})},{root:e.parentElement,threshold:[0,.5,1]}),a=()=>{const o=Array.from(e.assignedElements({flatten:!0})),l=new Set,c=new Set,u=new Set;for(const d of o)i.has(d)?l.add(d):n.has(d)?c.add(d):s.has(d)?u.add(d):r.observe(d);i=l,n=c,s=u,t({visible:i,overflowing:n,hidden:s})};return a(),e.addEventListener("slotchange",a),()=>{e.removeEventListener("slotchange",a),r.disconnect()}};class ju extends _n{observer;slot;cleanup;render(){return Fe}update(t,[i]){return Hu(t),this.slot!==t.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=t.element,this.cleanup=Uu(this.slot,i)),Fe}}const Ku=Nt(ju),Vu=kt`
	:host {
		display: block;
		overflow: hidden;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 100%; /* Firefox fix */
		background-color: inherit;
		transition: max-height 0.3s ease;
		flex: none;
		background-color: var(
			--cosmoz-bottom-bar-bg-color,
			rgba(230, 230, 230, 0.8)
		);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;

		--cosmoz-dropdown-anchor-spacing: 12px 6px;
	}

	:host([force-open]) {
		transition: none;
	}

	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}

	#bar {
		height: 64px;
		padding: 0 3%;
		display: flex;
		align-items: center;
	}

	#info {
		flex: 0 0 auto;
		padding-right: 3%;
		white-space: nowrap;
	}

	#buttonContainer {
		display: flex;
		flex: 1 1 auto;
		overflow: hidden;
		flex-wrap: wrap;
		justify-content: flex-start;
		flex-direction: row-reverse;
		position: relative;
		margin: 0 8px;
		min-width: 0;
		max-height: 40px;
	}

	#bottomBarToolbar::slotted(:not(slot):not([unstyled])) {
		margin: 0 0.29em;
		min-width: 40px;
		min-height: 40px;
		text-overflow: ellipsis;
		white-space: nowrap;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 6px;
		padding: 0 18px;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		overflow: hidden;
		flex: 0 0 auto;
	}
	#bottomBarToolbar::slotted(
			:not(slot):not([unstyled])[data-visibility='hidden']
		) {
		visibility: hidden;
		width: 100%;
		order: 9999;
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,qu=Symbol("openMenu"),Yu=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Wu=e=>{const[t,i]=ee({visible:new Set,overflowing:new Set});Z(()=>{e.dispatchEvent(new CustomEvent("reflow",{detail:t}))},[t]);const n=j(()=>[...t.visible,...t.overflowing],[t]),s=j(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:r=1}=e,a=Math.min(r,t.visible.size);Z(()=>{s.forEach(({element:l,priority:c},u)=>{const d=u<a;l.dataset.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[s,a]);const o=j(()=>s.slice(a).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[s,a]);return Z(()=>{e.toggleAttribute("has-menu-items",o.length>0)},[o.length]),{setButtonStates:i,menuButtons:o}},Ju=e=>{const{active:t=!1}=e;$c({activity:qu,callback:()=>Yu(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const{setButtonStates:i,menuButtons:n}=Wu(e),s=j(()=>Bc("height"),[]);return ao(()=>{s(e,t)},[t]),M` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${Ku(i)}></slot>
		</div>

		<cosmoz-dropdown-menu id="dropdown" part="dropdown">
			<svg
				slot="button"
				width="4"
				height="16"
				viewBox="0 0 4 16"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 2C1.02714e-07 3.10457 0.89543 4 2 4C3.10457 4 4 3.10457 4 2C4 0.89543 3.10457 -3.91405e-08 2 -8.74228e-08C0.895431 -1.35705e-07 1.99278e-07 0.89543 1.50996e-07 2Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 8C1.02714e-07 9.10457 0.89543 10 2 10C3.10457 10 4 9.10457 4 8C4 6.89543 3.10457 6 2 6C0.895431 6 1.99278e-07 6.89543 1.50996e-07 8Z"
					fill="currentColor"
				/>
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M1.50996e-07 14C1.02714e-07 15.1046 0.89543 16 2 16C3.10457 16 4 15.1046 4 14C4 12.8954 3.10457 12 2 12C0.895431 12 1.99278e-07 12.8954 1.50996e-07 14Z"
					fill="currentColor"
				/>
			</svg>
			${Tr(n,r=>M`
					<button @click=${()=>r.element.click()}>
						${r.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",be(Ju,{observedAttributes:["active","max-toolbar-items"],styleSheets:[Vu]}));const Ot=`
	<slot name="extra" slot="extra"></slot>
`;M(Object.assign([Ot],{raw:[Ot]}));we(Object.assign([Ot],{raw:[Ot]}));function Gu(e){const t=[...e];for(let i=t.length-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[t[i],t[n]]=[t[n],t[i]]}return t}const Xu=e=>{const{active:t,maxToolbarItems:i}=e,[n,s]=ee(""),[r,a]=ee(Gu([{onClick:()=>alert("Button 1 clicked"),priority:10,text:"Button 1"},{onClick:()=>alert("Button 2 clicked"),text:"Button 2"},{onClick:()=>alert("Button 3 clicked"),text:"Button 3"},{onClick:()=>alert("Button 4 clicked"),priority:5,text:"Button 4"},{onClick:()=>alert("Button 5 clicked"),text:"Button 5"}].concat(...Array.from({length:100},(u,d)=>{const h=d+6;return{onClick:()=>alert("Button "+h+" clicked"),text:"Button "+h,priority:h}})))),o=u=>{const d=u.target;s(d.value)},l=u=>{const d=u?u.trim():"";a([...r,{onClick:()=>alert("!!Button "+d+" clicked"),priority:d?+d:void 0,text:"Button "+d}]),u&&s("")};return M`
        <input
            .value=${n}
            placeholder="priority"
            type="number"
            @input=${o}
            @keypress=${u=>u.key==="Enter"&&l(n)}
        />
        <paper-button @click=${()=>l(n)}>Add btn</paper-button>
        <paper-button @click=${()=>l(void 0)}
            >Add noprio btn</paper-button
        >
        <paper-button @click=${()=>{const u=e.shadowRoot.querySelector("cosmoz-bottom-bar");e.shadowRoot.appendChild(u)}}>Test reconnect</paper-button>

        <cosmoz-bottom-bar
            id="bottomBar"
            ?active=${t}
            .maxToolbarItems=${i}
        >
            <span slot="info">Bottom bar demo</span>
            ${Tr(r,u=>M`<paper-button
                        @click=${u.onClick}
                        data-priority=${Ic(u.priority)}
                        >${u.text}</paper-button
                    >`)}
        </cosmoz-bottom-bar>
    `};customElements.define("cosmoz-bottom-bar-story",be(Xu,{observedAttributes:["active","max-toolbar-items"]}));const Qu=e=>M`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,Zu=({active:e,maxToolbarItems:t})=>M`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,nd={title:"Cosmoz Bottom Bar",render:Qu,argTypes:{active:{control:"boolean"},maxToolbarItems:{control:"number"}},parameters:{docs:{description:{component:"The Cosmoz Bottom Bar web component"}}}},nt={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The basic version"}}}},rt={render:Zu,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The empty cosmoz-bottom-bar"}}}};nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
  args: {
    active: true,
    maxToolbarItems: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'The basic version'
      }
    }
  }
}`,...nt.parameters?.docs?.source}}};rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
  render: CosmozBottomBarEmptyTemplate,
  args: {
    active: true,
    maxToolbarItems: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'The empty cosmoz-bottom-bar'
      }
    }
  }
}`,...rt.parameters?.docs?.source}}};const rd=["Basic","Empty"];export{nt as Basic,rt as Empty,rd as __namedExportsOrder,nd as default};
