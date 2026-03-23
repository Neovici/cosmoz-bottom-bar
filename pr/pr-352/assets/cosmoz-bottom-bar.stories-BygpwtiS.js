import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./iframe-CA4cnp0E.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f,p=t((()=>{f=0})),m,h,g,_,v,y,b,x=t((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),_=Symbol(`haunted.commit`),v=Symbol(`haunted.effects`),y=Symbol(`haunted.layoutEffects`),b=`haunted.context`})),ee,te=t((()=>{p(),x(),ee=class{update;host;virtual;[h];[v];[y];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[v]=[],this[y]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(y)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}}));function ne(){let e=[];function t(){let t=e;e=[];for(var n=0,r=t.length;n<r;n++)t[n]()}return function(n){e.push(n),re(t)}}var re,ie,ae,oe,se=t((()=>{te(),x(),re=Promise.resolve().then.bind(Promise.resolve()),ie=ne(),ae=ne(),oe=class{renderer;host;state;[m];_updateQueued;_active;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||=(ie(()=>{let e=this.handlePhase(g);ae(()=>{this.handlePhase(_,e),ae(()=>{this.handlePhase(v)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case _:this.commit(t),this.runEffects(y);return;case g:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}})),ce,le,ue,de,fe=t((()=>{ce=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?ce(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),de=ue}));function pe(e){class t extends oe{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,me(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var me,he=t((()=>{se(),fe(),me=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function ge(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function _e(e){return ge.bind(null,e)}var S,ve=t((()=>{p(),x(),S=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ye(e){return _e(class extends S{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var be=t((()=>{ve()}));function xe(e,t){e[v].push(t)}var C,Se=t((()=>{x(),be(),C=ye(xe)})),Ce,we,Te=t((()=>{ve(),x(),Se(),Ce=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,we=_e(class extends S{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,xe(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Ce(this.state.host).dispatchEvent(new CustomEvent(b,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Ee(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(b,this)}disconnectedCallback(){this.removeEventListener(b,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(we(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var De=t((()=>{x(),Te()})),Oe,ke=t((()=>{ve(),Oe=_e(class extends S{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),w,Ae=t((()=>{ke(),w=(e,t)=>Oe(()=>e,t)}));function je(e,t){e[y].push(t)}var Me,Ne=t((()=>{x(),be(),Me=ye(je)})),Pe,Fe=t((()=>{ve(),Pe=_e(class extends S{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ie=t((()=>{ve(),_e(class extends S{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Le,Re,ze=t((()=>{ve(),Le=/([A-Z])/gu,Re=_e(class extends S{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Le,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updateProp(r))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){let t=this.state.host[this.property];typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){let t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}})}));function Be(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Ve(e){return Oe(()=>Be(e),[])}var He=t((()=>{ke()})),Ue=t((()=>{ve(),_e(class extends S{update(){return this.state.host}})}));function We({render:e}){let t=pe(e);return{component:t,createContext:Ee(t)}}var Ge=t((()=>{he(),De(),Ae(),Se(),Ne(),Fe(),Ie(),ke(),Te(),ze(),He(),Ue(),se(),te()})),Ke,qe,Je,Ye=t((()=>{Ke={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},qe=e=>(...t)=>({_$litDirective$:e,values:t}),Je=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Xe(e){this._$AN===void 0?this._$AM=e:($e(this),this._$AM=e,et(this))}function Ze(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Qe(r[e],!1),$e(r[e]);else r!=null&&(Qe(r,!1),$e(r));else Qe(this,e)}var Qe,$e,et,tt,nt,rt=t((()=>{s(),Ye(),Qe=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Qe(e,t);return!0},$e=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},et=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),tt(t)}},tt=e=>{e.type==Ke.CHILD&&(e._$AP??=Ze,e._$AQ??=Xe)},nt=class extends Je{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),et(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Qe(this,e),$e(this))}setValue(e){if(r(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function it(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(at.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?it(e,t):e.teardown();break}else if(at.call(a.addedNodes,n.nextSibling)){i.disconnect(),it(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var at,ot=t((()=>{Ye(),o(),rt(),se(),at=Array.prototype.includes})),st,ct,lt=t((()=>{o(),Ge(),ot(),{component:st,createContext:ct}=We({render:n})})),T=t((()=>{lt(),Ge(),fe(),Ge()}));function ut(e){ft=e&&e.shimcssproperties?!1:dt||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports(`box-shadow`,`0 0 0 var(--foo)`))}var dt,ft,pt,mt,ht,gt=t((()=>{dt=!(window.ShadyDOM&&window.ShadyDOM.inUse),window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(pt=window.ShadyCSS.cssBuild),mt=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime),window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?ft=window.ShadyCSS.nativeCss:window.ShadyCSS?(ut(window.ShadyCSS),window.ShadyCSS=void 0):ut(window.WebComponents&&window.WebComponents.flags),ht=ft}));function _t(e){return e=vt(e),bt(yt(e),e)}function vt(e){return e.replace(D.comments,``).replace(D.port,``)}function yt(e){let t=new Dt;t.start=0,t.end=e.length;let n=t;for(let r=0,i=e.length;r<i;r++)if(e[r]===Ot){n.rules||=[];let e=n,t=e.rules[e.rules.length-1]||null;n=new Dt,n.start=r+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[r]===kt&&(n.end=r+1,n=n.parent||t);return t}function bt(e,t){let n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let r=e.previous?e.previous.end:e.parent.start;n=t.substring(r,e.start-1),n=xt(n),n=n.replace(D.multipleSpaces,` `),n=n.substring(n.lastIndexOf(`;`)+1);let i=e.parsedSelector=e.selector=n.trim();e.atRule=i.indexOf(Mt)===0,e.atRule?i.indexOf(jt)===0?e.type=E.MEDIA_RULE:i.match(D.keyframesRule)&&(e.type=E.KEYFRAMES_RULE,e.keyframesName=e.selector.split(D.multipleSpaces).pop()):i.indexOf(At)===0?e.type=E.MIXIN_RULE:e.type=E.STYLE_RULE}let r=e.rules;if(r)for(let e=0,n=r.length,i;e<n&&(i=r[e]);e++)bt(i,t);return e}function xt(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e=`0`+e;return`\\`+e})}function St(e,t,n=``){let r=``;if(e.cssText||e.rules){let n=e.rules;if(n&&!Ct(n))for(let e=0,i=n.length,a;e<i&&(a=n[e]);e++)r=St(a,t,r);else r=t?e.cssText:wt(e.cssText),r=r.trim(),r&&=`  `+r+`
`}return r&&(e.selector&&(n+=e.selector+` `+Ot+`
`),n+=r,e.selector&&(n+=kt+`

`)),n}function Ct(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(At)===0}function wt(e){return e=Tt(e),Et(e)}function Tt(e){return e.replace(D.customProp,``).replace(D.mixinProp,``)}function Et(e){return e.replace(D.mixinApply,``).replace(D.varApply,``)}var Dt,E,Ot,kt,D,At,jt,Mt,Nt=t((()=>{Dt=class{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText=``,this.cssText=``,this.atRule=!1,this.type=0,this.keyframesName=``,this.selector=``,this.parsedSelector=``}},E={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Ot=`{`,kt=`}`,D={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},At=`--`,jt=`@media`,Mt=`@`})),Pt,Ft,It,Lt=t((()=>{Pt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,Ft=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,It=/@media\s(.*)/}));function Rt(e){let t=e.textContent;if(!Bt.has(t)){Bt.add(t);let e=document.createElement(`style`);e.setAttribute(`shady-unscoped`,``),e.textContent=t,document.head.appendChild(e)}}function zt(e){return e.hasAttribute(Vt)}var Bt,Vt,Ht=t((()=>{Bt=new Set,Vt=`shady-unscoped`}));function Ut(e,t){return e?(typeof e==`string`&&(e=_t(e)),t&&Gt(e,t),St(e,ht)):``}function Wt(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=_t(e.textContent)),e.__cssRules||null}function Gt(e,t,n,r){if(!e)return;let i=!1,a=e.type;if(r&&a===E.MEDIA_RULE){let t=e.selector.match(It);t&&(window.matchMedia(t[1]).matches||(i=!0))}a===E.STYLE_RULE?t(e):n&&a===E.KEYFRAMES_RULE?n(e):a===E.MIXIN_RULE&&(i=!0);let o=e.rules;if(o&&!i)for(let e=0,i=o.length,a;e<i&&(a=o[e]);e++)Gt(a,t,n,r)}function Kt(e,t){let n=0;for(let r=t,i=e.length;r<i;r++)if(e[r]===`(`)n++;else if(e[r]===`)`&&--n===0)return r;return-1}function qt(e,t){let n=e.indexOf(`var(`);if(n===-1)return t(e,``,``,``);let r=Kt(e,n+3),i=e.substring(n+4,r),a=e.substring(0,n),o=qt(e.substring(r+1),t),s=i.indexOf(`,`);return s===-1?t(a,i.trim(),``,o):t(a,i.substring(0,s).trim(),i.substring(s+1).trim(),o)}function Jt(e){let t=e.localName,n=``,r=``;return t?t.indexOf(`-`)>-1?n=t:(r=t,n=e.getAttribute&&e.getAttribute(`is`)||``):(n=e.is,r=e.extends),{is:n,typeExtension:r}}function Yt(e){let t=[],n=e.querySelectorAll(`style`);for(let e=0;e<n.length;e++){let r=n[e];zt(r)?dt||(Rt(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join(``).trim()}function Xt(e){if(pt!==void 0)return pt;if(e.__cssBuild===void 0){let t=e.getAttribute(en);if(t)e.__cssBuild=t;else{let t=Qt(e);t!==``&&$t(e),e.__cssBuild=t}}return e.__cssBuild||``}function Zt(e){return Xt(e)!==``}function Qt(e){let t=e.localName===`template`?e.content.firstChild:e.firstChild;if(t instanceof Comment){let e=t.textContent.trim().split(`:`);if(e[0]===en)return e[1]}return``}function $t(e){let t=e.localName===`template`?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}var en,tn=t((()=>{gt(),Nt(),Lt(),Ht(),window.ShadyDOM&&window.ShadyDOM.wrap,en=`css-build`}));function nn(e,t){for(let n in t)n===null?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function rn(e,t){let n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():``}function an(e){let t=Ft.test(e)||Pt.test(e);return Ft.lastIndex=0,Pt.lastIndex=0,t}var on=t((()=>{Lt()})),sn,cn,ln,un,dn,fn,O,pn=t((()=>{tn(),Lt(),on(),sn=/;\s*/m,cn=/^\s*(initial)|(inherit)\s*$/,ln=/\s*!important/,un=`_-_`,dn=class{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}},fn=null,O=class{constructor(){this._currentElement=null,this._measureElement=null,this._map=new dn}detectMixin(e){return an(e)}gatherStyles(e){let t=Yt(e.content);if(t){let n=document.createElement(`style`);return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));let n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=``){let n=Wt(e);return this.transformRules(n,t),e.textContent=Ut(n),n}transformCustomStyle(e){let t=Wt(e);return Gt(t,e=>{e.selector===`:root`&&(e.selector=`html`),this.transformRule(e)}),e.textContent=Ut(t),t}transformRules(e,t){this._currentElement=t,Gt(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===`:root`&&(e.selector=`:host > *`)}transformCssText(e,t){return e=e.replace(Pt,(e,n,r,i)=>this._produceCssProperties(e,n,r,i,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement(`meta`),this._measureElement.setAttribute(`apply-shim-measure`,``),this._measureElement.style.all=`initial`,document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;let n={},r=!1;return Gt(t,t=>{r||=t===e,!r&&t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=Ft.exec(e);){let r=n[0],i=n[1],a=n.index,o=a+r.indexOf(`@apply`),s=a+r.length,c=e.slice(0,o),l=e.slice(s),u=t?this._fallbacksFromPreviousRules(t):{};Object.assign(u,this._cssTextToMap(c));let d=this._atApplyToCssProperties(i,u);e=`${c}${d}${l}`,Ft.lastIndex=a+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(sn,``);let n=[],r=this._map.get(e);if(r||=(this._map.set(e,{}),this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let i,a,o,s=r.properties;for(i in s)o=t&&t[i],a=[i,`: var(`,e,un,i],o&&a.push(`,`,o.replace(ln,``)),a.push(`)`),ln.test(s[i])&&a.push(` !important`),n.push(a.join(``))}return n.join(`; `)}_replaceInitialOrInherit(e,t){let n=cn.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):`apply-shim-inherit`),t}_cssTextToMap(e,t=!1){let n=e.split(`;`),r,i,a={};for(let e=0,o,s;e<n.length;e++)o=n[e],o&&(s=o.split(`:`),s.length>1&&(r=s[0].trim(),i=s.slice(1).join(`:`),t&&(i=this._replaceInitialOrInherit(r,i)),a[r]=i));return a}_invalidateMixinEntry(e){if(fn)for(let t in e.dependants)t!==this._currentElement&&fn(t)}_produceCssProperties(e,t,n,r,i){if(n&&qt(n,(e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)}),!r)return e;let a=this._consumeCssProperties(``+r,i),o=e.slice(0,e.indexOf(`--`)),s=this._cssTextToMap(a,!0),c=s,l=this._map.get(t),u=l&&l.properties;u?c=Object.assign(Object.create(u),s):this._map.set(t,c);let d=[],f,p,m=!1;for(f in c)p=s[f],p===void 0&&(p=`initial`),u&&!(f in u)&&(m=!0),d.push(`${t}${un}${f}: ${p}`);return m&&this._invalidateMixinEntry(l),l&&(l.properties=c),n&&(o=`${e};${o}`),`${o}${d.join(`; `)};`}},O.prototype.detectMixin=O.prototype.detectMixin,O.prototype.transformStyle=O.prototype.transformStyle,O.prototype.transformCustomStyle=O.prototype.transformCustomStyle,O.prototype.transformRules=O.prototype.transformRules,O.prototype.transformRule=O.prototype.transformRule,O.prototype.transformTemplate=O.prototype.transformTemplate,O.prototype._separator=un,Object.defineProperty(O.prototype,`invalidCallback`,{get(){return fn},set(e){fn=e}})})),mn,hn=t((()=>{mn={}}));function gn(e){let t=mn[e];t&&_n(t)}function _n(e){e[xn]=e[xn]||0,e[Cn]=e[Cn]||0,e[Sn]=(e[Sn]||0)+1}function vn(e){return e[xn]===e[Sn]}function yn(e){return!vn(e)&&e[Cn]===e[Sn]}function bn(e){e[Cn]=e[Sn],e._validating||(e._validating=!0,wn.then(function(){e[xn]=e[Sn],e._validating=!1}))}var xn,Sn,Cn,wn,Tn=t((()=>{hn(),xn=`_applyShimCurrentVersion`,Sn=`_applyShimNextVersion`,Cn=`_applyShimValidatingVersion`,wn=Promise.resolve()}));function En(e){requestAnimationFrame(function(){On?On(e):(Dn||(Dn=new Promise(e=>{kn=e}),document.readyState===`complete`?kn():document.addEventListener(`readystatechange`,()=>{document.readyState===`complete`&&kn()})),Dn.then(function(){e&&e()}))})}var Dn,On,kn,An=t((()=>{Dn=null,On=window.HTMLImports&&window.HTMLImports.whenReady||null})),jn,Mn,Nn,Pn,k,Fn=t((()=>{An(),jn=`__seenByShadyCSS`,Mn=`__shadyCSSCachedStyle`,Nn=null,Pn=null,k=class{constructor(){this.customStyles=[],this.enqueued=!1,En(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Pn||(this.enqueued=!0,En(Pn))}addCustomStyle(e){e[jn]||(e[jn]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Mn])return e[Mn];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){let e=this.customStyles;for(let t=0;t<e.length;t++){let n=e[t];if(n[Mn])continue;let r=this.getStyleForCustomStyle(n);if(r){let e=r.__appliedElement||r;Nn&&Nn(e),n[Mn]=e}}return e}},k.prototype.addCustomStyle=k.prototype.addCustomStyle,k.prototype.getStyleForCustomStyle=k.prototype.getStyleForCustomStyle,k.prototype.processStyles=k.prototype.processStyles,Object.defineProperties(k.prototype,{transformCallback:{get(){return Nn},set(e){Nn=e}},validateCallback:{get(){return Pn},set(e){let t=!1;Pn||(t=!0),Pn=e,t&&this.enqueueDocumentValidation()}}})})),In,Ln,Rn=t((()=>{if(pn(),hn(),tn(),Tn(),on(),Fn(),gt(),In=new O,Ln=class{constructor(){this.customStyleInterface=null,In.invalidCallback=gn}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{In.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){this.ensure(),!Zt(e)&&(mn[t]=e,e._styleAst=In.transformTemplate(e,t))}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&In.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&nn(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=Jt(e),n=mn[t];if(!(n&&Zt(n))&&n&&!vn(n)){yn(n)||(this.prepareTemplate(n,t),bn(n));let r=e.shadowRoot;if(r){let e=r.querySelector(`style`);e&&(e.__cssRules=n._styleAst,e.textContent=Ut(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}},!window.ShadyCSS||!window.ShadyCSS.ScopingShim){let e=new Ln,t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,r){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue(e,t){return rn(e,t)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:ht,nativeShadow:dt,cssBuild:pt,disableRuntime:mt},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=In})),A=t((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function zn(e,t){if(e&&Un.test(e)||e===`//`)return e;if(Wn===void 0){Wn=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,Wn=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,Wn)try{return new URL(e,t).href}catch{return e}return j||(j=document.implementation.createHTMLDocument(`temp`),j.base=j.createElement(`base`),j.head.appendChild(j.base),j.anchor=j.createElement(`a`),j.body.appendChild(j.anchor)),j.base.href=t,j.anchor.href=e,j.anchor.href||e}function Bn(e,t){return e.replace(Hn,function(e,n,r,i){return n+`'`+zn(r.replace(/["']/g,``),t)+`'`+i})}function Vn(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var Hn,Un,Wn,j,Gn=t((()=>{A(),Hn=/(url\()([^)]*)(\))/g,Un=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,M=t((()=>{A(),Gn(),Kn=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,qn=Kn&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),Jn=window.Polymer&&window.Polymer.rootPath||Vn(document.baseURI||window.location.href),Yn=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Xn=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,Zn=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Qn=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,$n=window.Polymer&&window.Polymer.legacyOptimizations||!1,er=window.Polymer&&window.Polymer.legacyWarnings||!1,tr=window.Polymer&&window.Polymer.syncInitialRender||!1,nr=window.Polymer&&window.Polymer.legacyUndefined||!1,rr=window.Polymer&&window.Polymer.orderedComputed||!1,ir=!0,ar=window.Polymer&&window.Polymer.removeNestedTemplates||!1,or=window.Polymer&&window.Polymer.fastDomIf||!1,sr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,cr=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,lr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function ur(){}var dr,N,P=t((()=>{A(),dr=0,ur.prototype.__mixinApplications,ur.prototype.__mixinSet,N=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=dr++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function fr(e,t){hr[e]=gr[e.toLowerCase()]=t}function pr(e){return hr[e]||gr[e.toLowerCase()]}function mr(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var hr,gr,_r,vr=t((()=>{A(),Gn(),M(),hr={},gr={},_r=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=pr(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument;this.__assetpath=Vn(zn(this.getAttribute(`assetpath`)||``,e.baseURI))}return this.__assetpath}register(e){if(e||=this.id,e){if(Zn&&pr(e)!==void 0)throw fr(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,fr(e,this),mr(this)}}},_r.prototype.modules=hr,customElements.define(`dom-module`,_r)}));function yr(e){return _r.import(e)}function br(e){let t=Bn((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function xr(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...Sr(t[e]));return n}function Sr(e){let t=yr(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...Tr(t));let n=t.querySelector(`template`);n&&e.push(...Cr(n,t.assetpath)),t._styles=e}return t._styles}function Cr(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(jr);a&&n.push(...xr(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Bn(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function wr(e){let t=yr(e);return t?Tr(t):[]}function Tr(e){let t=[],n=e.querySelectorAll(Ar);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(Mr);if(n&&!e._unscopedStyle){let t=br(e);t.setAttribute(Mr,``),e._unscopedStyle=t}else e._style||=br(e);t.push(n?e._unscopedStyle:e._style)}}return t}function Er(e){let t=e.trim().split(/\s+/),n=``;for(let e=0;e<t.length;e++)n+=Dr(t[e]);return n}function Dr(e){let t=yr(e);if(t&&t._cssText===void 0){let e=kr(t),n=t.querySelector(`template`);n&&(e+=Or(n,t.assetpath)),t._cssText=e||null}return t||console.warn(`Could not find style data in module named`,e),t&&t._cssText||``}function Or(e,t){let n=``,r=Cr(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}function kr(e){let t=``,n=Tr(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}var Ar,jr,Mr,Nr=t((()=>{vr(),Gn(),Ar=`link[rel=import][type~=css]`,jr=`include`,Mr=`shady-unscoped`})),F,I=t((()=>{F=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function Pr(e){return e.indexOf(`.`)>=0}function L(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function Fr(e,t){return e.indexOf(t+`.`)===0}function Ir(e,t){return t.indexOf(e+`.`)===0}function Lr(e,t,n){return t+n.slice(e.length)}function Rr(e,t){return e===t||Fr(e,t)||Ir(e,t)}function zr(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function Br(e){return Array.isArray(e)?zr(e).split(`.`):e.toString().split(`.`)}function R(e,t,n){let r=e,i=Br(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function Vr(e,t,n){let r=e,i=Br(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var Hr=t((()=>{A()}));function Ur(e){return Gr[e]||(Gr[e]=e.indexOf(`-`)<0?e:e.replace(Kr,e=>e[1].toUpperCase()))}function Wr(e){return Gr[e]||(Gr[e]=e.replace(qr,`-$1`).toLowerCase())}var Gr,Kr,qr,Jr=t((()=>{A(),Gr={},Kr=/-[a-z]/g,qr=/([A-Z])/g}));function Yr(){ei=!1;let e=Qr.length;for(let t=0;t<e;t++){let e=Qr[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Qr.splice(0,e),Zr+=e}var Xr,Zr,Qr,$r,ei,ti,ni,z,ri=t((()=>{A(),Xr=0,Zr=0,Qr=[],$r=0,ei=!1,ti=document.createTextNode(``),new window.MutationObserver(Yr).observe(ti,{characterData:!0}),ni={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},z={run(e){return ei||(ei=!0,ti.textContent=$r++),Qr.push(e),Xr++},cancel(e){let t=e-Zr;if(t>=0){if(!Qr[t])throw Error(`invalid async handle: `+e);Qr[t]=null}}}})),ii,ai,oi=t((()=>{A(),P(),ri(),I(),ii=z,ai=N(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ii.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=F(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function si(e,t){if(!ci[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var ci,li,ui,di,fi=t((()=>{for(A(),P(),Jr(),oi(),ci={},li=HTMLElement.prototype;li;){let e=Object.getOwnPropertyNames(li);for(let t=0;t<e.length;t++)ci[e[t]]=!0;li=Object.getPrototypeOf(li)}ui=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,di=N(e=>{let t=ai(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Ur(e[t]))}static attributeNameForProperty(e){return Wr(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(ui(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){si(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function pi(){if(!Si){Si=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,Ci=e.placeholder===e.textContent}return Ci}function mi(e){pi()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function hi(e){let t=e.getAttribute(`is`);if(t&&xi[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];wi(e,n,t),n.removeAttribute(t)}}return e}function gi(e,t){let n=t.parentInfo&&gi(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function _i(e,t,n,r){r.id&&(t[r.id]=n)}function vi(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function yi(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function bi(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var xi,Si,Ci,wi,Ti,Ei=t((()=>{A(),P(),xi={"dom-if":!0,"dom-repeat":!0},Si=!1,Ci=!1,wi=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),Ti=N(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),mi(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=hi(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=gi(i,o);_i(this,i.$,n,o),yi(this,n,o,t),vi(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=bi(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function Di(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function Oi(e,t,n,r,i,a){if(t){let o=!1,s=ca++;for(let c in n){let l=t[i?L(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||Ai(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function ki(e,t,n,r,i,a,o,s){let c=!1,l=t[o?L(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||Ai(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function Ai(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&Fr(n,e))||!!(t.wildcard&&Ir(n,e))}else return!0}function ji(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Mi(e,t,n,r,i){let a=e[B.NOTIFY],o,s=ca++;for(let c in t)t[c]&&(a&&ki(e,a,s,c,n,r,i)||i&&Ni(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function Ni(e,t,n){let r=L(t);return r===t?!1:(Pi(e,Wr(r)+`-changed`,n[t],t),!0)}function Pi(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),F(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function Fi(e,t,n,r,i,a){let o=(a?L(t):t)==t?null:t,s=o?R(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),Pi(e,i.eventName,s,o)}function Ii(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=Lr(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[B.READ_ONLY]||!t[B.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Li(e,t,n,r,i){let a=e.__data[t];Yn&&(a=Yn(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function Ri(e,t,n,r){let i=e[B.COMPUTE];if(i)if(rr){ca++;let a=zi(e),o=[];for(let e in t)pa(e,i,o,a,r);let s;for(;s=o.shift();)Vi(e,``,t,n,s)&&pa(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;Oi(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function zi(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[B.COMPUTE],{counts:r,ready:i,total:a}=Bi(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Bi(e){let t=e[ua],n={},r=e[B.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+(r.dynamicFn?1:0)}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function Vi(e,t,n,r,i){let a=$i(e,t,n,r,i);if(a===la)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Hi(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];Ir(a,t)?(i=Lr(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):Ir(o,t)&&(i=Lr(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ui(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Ji(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||Wr(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,Wi(e,t,s,r,c)}}function Wi(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=ra(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Gi,info:o,trigger:r})}}}function Gi(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=Lr(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==la&&Ki(e,s,c,l,o)}}function Ki(e,t,n,r,i){if(i=qi(t,i,n,r),Yn&&(i=Yn(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[B.READ_ONLY]||!t[B.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function qi(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Ji(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function Yi(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];Xi(a,n),Zi(a,e,n)}a.__dataHost=e}}function Xi(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=F(e)),e[a]=t.literal)}}function Zi(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){Ii(e,t,n.target,r.source,r.negate)})}}function Qi(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function $i(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===la?la:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function ea(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function ta(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:ma};return t[2].trim()?na(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function na(e,t){return t.args=e.map(function(e){let n=ra(e);return n.literal||(t.static=!1),n},this),t}function ra(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=L(t),n.structured=Pr(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function ia(e,t,n){let r=R(e,n);return r===void 0&&(r=t[n]),r}function aa(e,t,n,r){let i={indexSplices:r};nr&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),nr&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function oa(e,t,n,r,i,a){aa(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function sa(e){return e[0].toUpperCase()+e.substring(1)}var ca,la,B,ua,da,fa,pa,ma,ha,ga,_a,va,ya,ba=t((()=>{A(),I(),P(),Hr(),Jr(),fi(),Ei(),M(),ca=0,la=[],B={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},ua=`__computeInfo`,da=/[A-Z]/,fa=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},pa=(e,t,n,r,i)=>{let a=t[i?L(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==ca&&(!i||Ai(e,o.trigger))&&(o.info.lastRun=ca,fa(o.info,n,r))}},ma=[],ha=`(?:[a-zA-Z_$][\\w.:$\\-*]*)`,``+ha,ga=`(\\[\\[|{{)\\s*(?:(!)\\s*)?`+(`(`+ha+`\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)`)+`(?:]]|}})`,_a=new RegExp(ga,`g`),va=N(e=>{let t=Ti(di(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return B}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(ya.length){let e=ya[ya.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[B.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==B.READ_ONLY);let r=Di(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=Di(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,B.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,B.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,B.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,B.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||L(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=R(this,e);if(e=Vr(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Hi(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=F(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&Pr(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[B.NOTIFY]&&this[B.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[B.READ_ONLY]||!this[B.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;Ri(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Oi(this,this[B.REFLECT],t,n,r),Oi(this,this[B.OBSERVE],t,n,r),i&&Mi(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[B.PROPAGATE]&&Oi(this,this[B.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{Oi(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=zr(e),t=zr(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=zr(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=R(this,e,n);aa(this,r,n.path,t)}get(e,t){return R(t||this,e)}set(e,t,n){n?Vr(n,e,t):(!this[B.READ_ONLY]||!this[B.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=R(this,e,n),i=r.length,a=r.push(...t);return t.length&&oa(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=R(this,e,t),r=!!n.length,i=n.pop();return r&&oa(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=R(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&oa(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=R(this,e,t),r=!!n.length,i=n.shift();return r&&oa(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=R(this,e,n),i=r.unshift(...t);return t.length&&oa(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=R(this,e,r),n=r.path}else n=Array.isArray(e)?zr(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,B.READ_ONLY),t&&(this[`_set`+sa(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,B.OBSERVE,{fn:ji,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,B.OBSERVE,{fn:ji,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=ta(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);Qi(this,n,B.OBSERVE,$i,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,B.NOTIFY,{fn:Fi,info:{eventName:Wr(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,B.REFLECT,{fn:Li,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=ta(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=Qi(this,r,B.COMPUTE,Vi,e,n);Di(this,ua)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=Ir(o,t),i=ia(r,n,e?t:o);l={path:e?t:o,value:i,base:e?R(r,o):i}}else l=s?ia(r,n,o):r[o];if(nr&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return la;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),ya.push(this);let n=super._stampTemplate(e,t);if(ya.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,Yi(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];F(F(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=ea(t)||` `,Ui(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;da.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=ea(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=Ur(i)),Ui(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;ar&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(or&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),ar||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];Ui(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=_a.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=ta(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=_a.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?$i(e,n,r,i,t.signature):n==t.source?a&&Pr(n)?R(e,n):e.__data[n]:R(e,t.source),t.negate&&(o=!o),o}}return n}),ya=[]}));function xa(){Ca++}function Sa(e){wa.push(e)}var Ca,wa,Ta=t((()=>{Ca=0,wa=[]}));function Ea(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var Da,Oa=t((()=>{A(),P(),Ta(),oi(),Da=N(e=>{let t=ai(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=Ea(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){Sa(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){xa(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),ka,Aa,ja,Ma=t((()=>{A(),M(),P(),Nr(),Gn(),vr(),ba(),Oa(),I(),ka=`3.5.2`,Aa=window.ShadyCSS&&window.ShadyCSS.cssBuild,ja=N(e=>{let t=Da(va(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!Aa){let i=t.content.querySelectorAll(`style`),a=Cr(t),o=wr(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),lr&&Aa&&qn){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!Zn||Qn)&&(t=_r.import(e,`template`),Zn&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return ka}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):$n||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=Vn(e.url);else{let e=_r.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Jn,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Bn(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?zn(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=F(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),tr&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=zn(this.importPath)),zn(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return er&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})),Na,Pa,Fa,Ia,La=t((()=>{A(),P(),ri(),Na=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Pa.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Pa.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},Pa=new Set,Fa=function(e){Pa.add(e)},Ia=function(){let e=!!Pa.size;return Pa.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}}));function Ra(e){return bo.indexOf(e)>-1}function za(e){if(!(Ra(e)||e===`touchend`)&&fo&&Co&&Xn)return{passive:!0}}function Ba(e){return Eo[e.localName]||!1}function Va(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let n=e.getRootNode();if(e.id){let r=n.querySelectorAll(`label[for = '${e.id}']`);for(let e=0;e<r.length;e++)t.push(r[e])}}catch{}}return t}function Ha(e){let t=wo?[`click`]:bo;for(let n=0,r;n<t.length;n++)r=t[n],e?(To.length=0,document.addEventListener(r,Oo,!0)):document.removeEventListener(r,Oo,!0)}function Ua(e){if(!ir)return;H.mouse.mouseIgnoreJob||Ha(!0);let t=function(){Ha(),H.mouse.target=null,H.mouse.mouseIgnoreJob=null};H.mouse.target=ko(e)[0],H.mouse.mouseIgnoreJob=Na.debounce(H.mouse.mouseIgnoreJob,ni.after(yo),t)}function Wa(e){let t=e.type;if(!Ra(t))return!1;if(t===`mousemove`){let t=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!So&&(t=xo[e.which]||0),!!(t&1)}else return(e.button===void 0?0:e.button)===0}function Ga(e){if(e.type===`click`){if(e.detail===0)return!0;let t=V(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),r=e.pageX,i=e.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}function Ka(e){let t=`auto`,n=ko(e);for(let e=0,r;e<n.length;e++)if(r=n[e],r[ho]){t=r[ho];break}return t}function qa(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener(`mousemove`,t),document.addEventListener(`mouseup`,n)}function Ja(e){document.removeEventListener(`mousemove`,e.movefn),document.removeEventListener(`mouseup`,e.upfn),e.movefn=null,e.upfn=null}function Ya(e,t){let n=document.elementFromPoint(e,t),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let i=r;if(r=r.shadowRoot.elementFromPoint(e,t),i===r)break;r&&(n=r)}return n}function V(e){let t=ko(e);return t.length>0?t[0]:e.target}function Xa(e){let t,n=e.type,r=e.currentTarget[po];if(!r)return;let i=r[n];if(i){if(!e[mo]&&(e[mo]={},n.slice(0,5)===`touch`)){e=e;let t=e.changedTouches[0];if(n===`touchstart`&&e.touches.length===1&&(H.touch.id=t.identifier),H.touch.id!==t.identifier)return;fo||(n===`touchstart`||n===`touchmove`)&&Za(e)}if(t=e[mo],!t.skip){for(let n=0,r;n<jo.length;n++)r=jo[n],i[r.name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(let r=0,a;r<jo.length;r++)a=jo[r],i[a.name]&&!t[a.name]&&(t[a.name]=!0,a[n](e))}}}function Za(e){let t=e.changedTouches[0],n=e.type;if(n===`touchstart`)H.touch.x=t.clientX,H.touch.y=t.clientY,H.touch.scrollDecided=!1;else if(n===`touchmove`){if(H.touch.scrollDecided)return;H.touch.scrollDecided=!0;let n=Ka(e),r=!1,i=Math.abs(H.touch.x-t.clientX),a=Math.abs(H.touch.y-t.clientY);e.cancelable&&(n===`none`?r=!0:n===`pan-x`?r=a>i:n===`pan-y`&&(r=i>a)),r?e.preventDefault():oo(`track`)}}function Qa(e,t,n){return Ao[t]?(eo(e,t,n),!0):!1}function $a(e,t,n){return Ao[t]?(to(e,t,n),!0):!1}function eo(e,t,n){let r=Ao[t],i=r.deps,a=r.name,o=e[po];o||(e[po]=o={});for(let t=0,n,r;t<i.length;t++)n=i[t],!(wo&&Ra(n)&&n!==`click`)&&(r=o[n],r||(o[n]=r={_count:0}),r._count===0&&e.addEventListener(n,Xa,za(n)),r[a]=(r[a]||0)+1,r._count=(r._count||0)+1);e.addEventListener(t,n),r.touchAction&&io(e,r.touchAction)}function to(e,t,n){let r=Ao[t],i=r.deps,a=r.name,o=e[po];if(o)for(let t=0,n,r;t<i.length;t++)n=i[t],r=o[n],r&&r[a]&&(r[a]=(r[a]||1)-1,r._count=(r._count||1)-1,r._count===0&&e.removeEventListener(n,Xa,za(n)));e.removeEventListener(t,n)}function no(e){jo.push(e);for(let t=0;t<e.emits.length;t++)Ao[e.emits[t]]=e}function ro(e){for(let t=0,n;t<jo.length;t++){n=jo[t];for(let t=0,r;t<n.emits.length;t++)if(r=n.emits[t],r===e)return n}return null}function io(e,t){fo&&e instanceof HTMLElement&&z.run(()=>{e.style.touchAction=t}),e[ho]=t}function ao(e,t,n){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,F(e).dispatchEvent(r),r.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function oo(e){let t=ro(e);t.info&&(t.info.prevent=!0)}function so(e,t,n,r){t&&ao(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(e){return oo(e)}})}function co(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),i=Math.abs(e.y-n);return r>=_o||i>=_o}function lo(e,t,n){if(!t)return;let r=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],a=i.x-e.x,o=i.y-e.y,s,c=0;r&&(s=i.x-r.x,c=i.y-r.y),ao(t,`track`,{state:e.state,x:n.clientX,y:n.clientY,dx:a,dy:o,ddx:s,ddy:c,sourceEvent:n,hover:function(){return Ya(n.clientX,n.clientY)}})}function uo(e,t,n){let r=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),a=V(n||t);!a||Do[a.localName]&&a.hasAttribute(`disabled`)||(isNaN(r)||isNaN(i)||r<=go&&i<=go||Ga(t))&&(e.prevent||ao(a,`tap`,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}var fo,po,mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,H,ko,Ao,jo,Mo=t((()=>{A(),ri(),La(),M(),I(),fo=typeof document.head.style.touchAction==`string`,po=`__polymerGestures`,mo=`__polymerGesturesHandled`,ho=`__polymerGesturesTouchAction`,go=25,_o=5,vo=2,yo=2500,bo=[`mousedown`,`mousemove`,`mouseup`,`click`],xo=[0,1,4,2],So=(function(){try{return new MouseEvent(`test`,{buttons:1}).buttons===1}catch{return!1}})(),Co=!1,(function(){try{let e=Object.defineProperty({},`passive`,{get(){Co=!0}});window.addEventListener(`test`,null,e),window.removeEventListener(`test`,null,e)}catch{}})(),wo=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),To=[],Eo={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Do={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0},Oo=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[mo]={skip:!0},e.type===`click`)){let t=!1,n=ko(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE){if(n[e].localName===`label`)To.push(n[e]);else if(Ba(n[e])){let r=Va(n[e]);for(let e=0;e<r.length;e++)t||=To.indexOf(r[e])>-1}}if(n[e]===H.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}},H={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}},ir&&document.addEventListener(`touchend`,Ua,Co?{passive:!0}:!1),ko=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Ao={},jo=[],no({name:`downup`,deps:[`mousedown`,`touchstart`,`touchend`],flow:{start:[`mousedown`,`touchstart`],end:[`mouseup`,`touchend`]},emits:[`down`,`up`],info:{movefn:null,upfn:null},reset:function(){Ja(this.info)},mousedown:function(e){if(!Wa(e))return;let t=V(e),n=this;qa(this.info,function(e){Wa(e)||(so(`up`,t,e),Ja(n.info))},function(e){Wa(e)&&so(`up`,t,e),Ja(n.info)}),so(`down`,t,e)},touchstart:function(e){so(`down`,V(e),e.changedTouches[0],e)},touchend:function(e){so(`up`,V(e),e.changedTouches[0],e)}}),no({name:`track`,touchAction:`none`,deps:[`mousedown`,`touchstart`,`touchmove`,`touchend`],flow:{start:[`mousedown`,`touchstart`],end:[`mouseup`,`touchend`]},emits:[`track`],info:{x:0,y:0,state:`start`,started:!1,moves:[],addMove:function(e){this.moves.length>vo&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state=`start`,this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Ja(this.info)},mousedown:function(e){if(!Wa(e))return;let t=V(e),n=this,r=function(e){let r=e.clientX,i=e.clientY;co(n.info,r,i)&&(n.info.state=n.info.started?e.type===`mouseup`?`end`:`track`:`start`,n.info.state===`start`&&oo(`tap`),n.info.addMove({x:r,y:i}),Wa(e)||(n.info.state=`end`,Ja(n.info)),t&&lo(n.info,t,e),n.info.started=!0)};qa(this.info,r,function(e){n.info.started&&r(e),Ja(n.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=V(e),n=e.changedTouches[0],r=n.clientX,i=n.clientY;co(this.info,r,i)&&(this.info.state===`start`&&oo(`tap`),this.info.addMove({x:r,y:i}),lo(this.info,t,n),this.info.state=`track`,this.info.started=!0)},touchend:function(e){let t=V(e),n=e.changedTouches[0];this.info.started&&(this.info.state=`end`,this.info.addMove({x:n.clientX,y:n.clientY}),lo(this.info,t,n))}}),no({name:`tap`,deps:[`mousedown`,`click`,`touchstart`,`touchend`],flow:{start:[`mousedown`,`touchstart`],end:[`click`,`touchend`]},emits:[`tap`],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Wa(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Wa(e)&&uo(this.info,e)},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){uo(this.info,e.changedTouches[0],e)}})})),No,Po=t((()=>{A(),P(),Mo(),No=N(e=>{class t extends e{_addEventListenerToNode(e,t,n){Qa(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){$a(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}return t})}));function Fo(){qo=document.documentElement.getAttribute(`dir`)}function Io(e){e.__autoDirOptOut||e.setAttribute(`dir`,qo)}function Lo(){Fo(),qo=document.documentElement.getAttribute(`dir`);for(let e=0;e<Go.length;e++)Io(Go[e])}function Ro(){Ko&&Ko.takeRecords().length&&Lo()}var zo,Bo,Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo=t((()=>{fi(),P(),zo=/:host\(:dir\((ltr|rtl)\)\)/g,Bo=`:host([dir="$1"])`,Vo=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Ho=`:host([dir="$2"]) $1`,Uo=/:dir\((?:ltr|rtl)\)/,Wo=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Go=[],Ko=null,qo=``,Jo=N(e=>{Wo||Ko||(Fo(),Ko=new MutationObserver(Lo),Ko.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`]}));let t=di(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!Wo&&Uo.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(zo,Bo),t=t.replace(Vo,Ho),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute(`dir`)}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ro(),Go.push(this),Io(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){let e=Go.indexOf(this);e>-1&&Go.splice(e,1)}}}return n.__activateDir=!1,n})})),Xo=t((()=>{A()}));function Zo(){document.body.removeAttribute(`unresolved`)}var Qo=t((()=>{document.readyState===`interactive`||document.readyState===`complete`?Zo():window.addEventListener(`DOMContentLoaded`,Zo)}));function $o(e,t,n){return{index:e,removed:t,addedCount:n}}function es(e,t,n,r,i,a){let o=a-i+1,s=n-t+1,c=Array(o);for(let e=0;e<o;e++)c[e]=Array(s),c[e][0]=e;for(let e=0;e<s;e++)c[0][e]=e;for(let n=1;n<o;n++)for(let a=1;a<s;a++)if(os(e[t+a-1],r[i+n-1]))c[n][a]=c[n-1][a-1];else{let e=c[n-1][a]+1,t=c[n][a-1]+1;c[n][a]=e<t?e:t}return c}function ts(e){let t=e.length-1,n=e[0].length-1,r=e[t][n],i=[];for(;t>0||n>0;){if(t==0){i.push(ls),n--;continue}if(n==0){i.push(us),t--;continue}let a=e[t-1][n-1],o=e[t-1][n],s=e[t][n-1],c;c=o<s?o<a?o:a:s<a?s:a,c==a?(a==r?i.push(ss):(i.push(cs),r=a),t--,n--):c==o?(i.push(us),t--,r=o):(i.push(ls),n--,r=s)}return i.reverse(),i}function ns(e,t,n,r,i,a){let o=0,s=0,c,l=Math.min(n-t,a-i);if(t==0&&i==0&&(o=rs(e,r,l)),n==e.length&&a==r.length&&(s=is(e,r,l-o)),t+=o,i+=o,n-=s,a-=s,n-t==0&&a-i==0)return[];if(t==n){for(c=$o(t,[],0);i<a;)c.removed.push(r[i++]);return[c]}else if(i==a)return[$o(t,[],n-t)];let u=ts(es(e,t,n,r,i,a));c=void 0;let d=[],f=t,p=i;for(let e=0;e<u.length;e++)switch(u[e]){case ss:c&&=(d.push(c),void 0),f++,p++;break;case cs:c||=$o(f,[],0),c.addedCount++,f++,c.removed.push(r[p]),p++;break;case ls:c||=$o(f,[],0),c.addedCount++,f++;break;case us:c||=$o(f,[],0),c.removed.push(r[p]),p++;break}return c&&d.push(c),d}function rs(e,t,n){for(let r=0;r<n;r++)if(!os(e[r],t[r]))return r;return n}function is(e,t,n){let r=e.length,i=t.length,a=0;for(;a<n&&os(e[--r],t[--i]);)a++;return a}function as(e,t){return ns(e,0,e.length,t,0,t.length)}function os(e,t){return e===t}var ss,cs,ls,us,ds=t((()=>{A(),ss=0,cs=1,ls=2,us=3}));function fs(e){return e.localName===`slot`}var ps,ms=t((()=>{A(),ds(),ri(),I(),ps=class{static getFlattenedNodes(e){let t=F(e);if(fs(e))return e=e,t.assignedNodes({flatten:!0});{let e=[];for(let n=0;n<t.childNodes.length;n++){let r=t.childNodes[n];if(fs(r)){let t=r;e.push(...F(t).assignedNodes({flatten:!0}))}else e.push(r)}return e}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){fs(this._target)?this._listenSlots([this._target]):F(this._target).children&&(this._listenSlots(F(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){fs(this._target)?this._unlistenSlots([this._target]):F(this._target).children&&(this._unlistenSlots(F(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&=(this._nativeChildrenObserver.disconnect(),null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,z.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=as(t,this._effectiveNodes);for(let t=0,r;t<n.length&&(r=n[t]);t++)for(let t=0,n;t<r.removed.length&&(n=r.removed[t]);t++)e.removedNodes.push(n);for(let r=0,i;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];fs(n)&&n.addEventListener(`slotchange`,this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];fs(n)&&n.removeEventListener(`slotchange`,this._boundSchedule)}}}})),hs,gs=t((()=>{A(),La(),hs=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Ia();while(e||t)}}));function _s(e,t){for(let n=0;n<t.length;n++){let r=t[n];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}function vs(e,t){for(let n=0;n<t.length;n++){let r=t[n];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}function ys(e,t){for(let n=0;n<t.length;n++){let r=t[n];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}var bs,xs,Ss,U,Cs,ws,W,Ts=t((()=>{if(A(),I(),M(),ms(),gs(),La(),bs=Element.prototype,xs=bs.matches||bs.matchesSelector||bs.mozMatchesSelector||bs.msMatchesSelector||bs.oMatchesSelector||bs.webkitMatchesSelector,Ss=function(e,t){return xs.call(e,t)},U=class{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new ps(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(F(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=F(t).parentNode||F(t).host;return t===this.node}getOwnerRoot(){return F(this.node).getRootNode()}getDistributedNodes(){return this.node.localName===`slot`?F(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=F(this.node).assignedSlot;for(;t;)e.push(t),t=F(t).assignedSlot;return e}importNode(e,t){return F(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(e,t)}getEffectiveChildNodes(){return ps.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let r=0,i=t.length,a;r<i&&(a=t[r]);r++)a.nodeType===Node.ELEMENT_NODE&&Ss(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement===void 0?e.activeElement:e._activeElement}},Cs=class{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}},U.prototype.cloneNode,U.prototype.appendChild,U.prototype.insertBefore,U.prototype.removeChild,U.prototype.replaceChild,U.prototype.setAttribute,U.prototype.removeAttribute,U.prototype.querySelector,U.prototype.querySelectorAll,U.prototype.parentNode,U.prototype.firstChild,U.prototype.lastChild,U.prototype.nextSibling,U.prototype.previousSibling,U.prototype.firstElementChild,U.prototype.lastElementChild,U.prototype.nextElementSibling,U.prototype.previousElementSibling,U.prototype.childNodes,U.prototype.children,U.prototype.classList,U.prototype.textContent,U.prototype.innerHTML,ws=U,window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(U.prototype).forEach(t=>{t!=`activeElement`&&(e.prototype[t]=U.prototype[t])}),vs(e.prototype,[`classList`]),ws=e,Object.defineProperties(Cs.prototype,{localTarget:{get(){let e=this.event.currentTarget,t=e&&W(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){let r=n[e];if(W(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else _s(U.prototype,[`cloneNode`,`appendChild`,`insertBefore`,`removeChild`,`replaceChild`,`setAttribute`,`removeAttribute`,`querySelector`,`querySelectorAll`,`attachShadow`]),vs(U.prototype,[`parentNode`,`firstChild`,`lastChild`,`nextSibling`,`previousSibling`,`firstElementChild`,`lastElementChild`,`nextElementSibling`,`previousElementSibling`,`childNodes`,`children`,`classList`,`shadowRoot`]),ys(U.prototype,[`textContent`,`innerHTML`,`className`]);W=function(e){if(e||=document,e instanceof ws||e instanceof Cs)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Cs(e):new ws(e),e.__domApi=t),t}}));function Es(e,t){return F(e).getRootNode()===t}function Ds(e,t=!1){if(!Os||!ks||!Os.handlesDynamicScoping)return null;let n=ks.ScopingShim;if(!n)return null;let r=n.scopeForNode(e),i=F(e).getRootNode(),a=e=>{if(!Es(e,i))return;let t=Array.from(Os.nativeMethods.querySelectorAll.call(e,`*`));t.push(e);for(let e=0;e<t.length;e++){let a=t[e];if(!Es(a,i))continue;let o=n.currentScopeForNode(a);o!==r&&(o!==``&&n.unscopeNode(a,o),n.scopeNode(a,r))}};if(a(e),t){let t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){let n=e[t];for(let e=0;e<n.addedNodes.length;e++){let t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&a(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}else return null}var Os,ks,As=t((()=>{A(),I(),Os=window.ShadyDOM,ks=window.ShadyCSS})),js,Ms,Ns=t((()=>{Ma(),P(),I(),js=`disable-upgrade`,Ms=e=>{for(;e;){let t=Object.getOwnPropertyDescriptor(e,`observedAttributes`);if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]},N(e=>{let t=ja(e),n=Ms(t);class r extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return n.call(this).concat(js)}_initializeProperties(){this.hasAttribute(js)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,n,r){e==js?this.__isUpgradeDisabled&&n==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,F(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,n,r)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return r})})),Ps,Fs,Is,Ls=t((()=>{Rn(),Ma(),Po(),Yo(),P(),Xo(),Qo(),Ts(),Mo(),La(),ri(),Hr(),I(),As(),M(),Ns(),Ta(),Ps=`disable-upgrade`,Fs=window.ShadyCSS,Is=N(e=>{let t=No(ja(e)),n=Aa?t:Jo(t),r=Ms(n),i={x:`pan-x`,y:`pan-y`,none:`none`,all:`auto`};class a extends n{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,n){(this.__dataAttributes&&this.__dataAttributes[e]||e===Ps)&&this.attributeChangedCallback(e,t,n,null)}setAttribute(e,t){if(cr&&!this._legacyForceObservedAttributes){let n=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,n,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(cr&&!this._legacyForceObservedAttributes){let t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return cr&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))||(this.__observedAttributes=[],Sa(this.prototype)),this.__observedAttributes):r.call(this).concat(Ps)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,n,r){t!==n&&(e==Ps?this.__isUpgradeDisabled&&n==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,F(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,n,r),this.attributeChanged(e,t,n)))}attributeChanged(e,t,n){}_initializeProperties(){if($n&&this.hasAttribute(Ps))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty(`__hasRegisterFinished`,e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),cr&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){let e=this.attributes;for(let t=0,n=e.length;t<n;t++){let n=e[t];this.__attributeReaction(n.name,null,n.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!(e&&t))return e||t;let n=Object.getOwnPropertyNames(t);for(let r=0,i;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n||={},t??={};let r=new Event(e,{bubbles:n.bubbles===void 0?!0:n.bubbles,cancelable:!!n.cancelable,composed:n.composed===void 0?!0:n.composed});return r.detail=t,F(n.node||this).dispatchEvent(r),r}listen(e,t,n){e||=this;let r=this.__boundListeners||=new WeakMap,i=r.get(e);i||(i={},r.set(e,i));let a=t+n;i[a]||(i[a]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e||=this;let r=this.__boundListeners&&this.__boundListeners.get(e),i=t+n,a=r&&r[i];a&&(this._removeEventListenerFromNode(e,t,a),r[i]=null)}setScrollDirection(e,t){io(t||this,i[e]||`auto`)}$$(e){return this.root.querySelector(e)}get domHost(){let e=F(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){let e=W(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return W(this).getEffectiveChildNodes()}queryDistributedElements(e){return W(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n=0,r;r=e[n];n++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join(``)}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||`slot`);return t?W(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){let t=this;return t!==e&&F(t).contains(e)&&F(t).getRootNode()===F(e).getRootNode()}isLocalDescendant(e){return this.root===F(e).getRootNode()}scopeSubtree(e,t=!1){return Ds(e,t)}getComputedStyleValue(e){return Fs.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=Na.debounce(this._debouncers[e],n>0?ni.after(n):z,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!!(t&&t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?ni.run(e.bind(this),t):~z.run(e.bind(this))}cancelAsync(e){e<0?z.cancel(~e):ni.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return Ss(t||this,e)}toggleAttribute(e,t){let n=this;return arguments.length===3&&(n=arguments[2]),arguments.length==1&&(t=!n.hasAttribute(e)),t?(F(n).setAttribute(e,``),!0):(F(n).removeAttribute(e),!1)}toggleClass(e,t,n){n||=this,arguments.length==1&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){t||=this,t.style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,r){r||=this,this.transform(`translate3d(`+e+`,`+t+`,`+n+`)`,r)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else if(n=R(this,e).indexOf(t),n>=0)return this.splice(e,n,1);return null}_logger(e,t){switch(Array.isArray(t)&&t.length===1&&Array.isArray(t[0])&&(t=t[0]),e){case`log`:case`warn`:case`error`:console[e](...t)}}_log(...e){this._logger(`log`,e)}_warn(...e){this._logger(`warn`,e)}_error(...e){this._logger(`error`,e)}_logf(e,...t){return[`[%s::%s]`,this.is,e,...t]}}return a.prototype.is=``,a})}));function Rs(e,t,n){let r=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let a=0;a<i.length;a++){let o=i[a];if(!(o in n))if(r)t[o]=e[o];else{let n=Object.getOwnPropertyDescriptor(e,o);n&&(n.configurable=!0,Object.defineProperty(t,o,n))}}}function zs(e,t,n){for(let r=0;r<t.length;r++)Bs(e,t[r],n,Ks)}function Bs(e,t,n,r){Rs(t,e,r);for(let e in Ws)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function Vs(e,t,n){t||=[];for(let r=e.length-1;r>=0;r--){let i=e[r];i?Array.isArray(i)?Vs(i,t):t.indexOf(i)<0&&(!n||n.indexOf(i)<0)&&t.unshift(i):console.warn(`behavior is null, check for missing or 404 import`)}return t}function Hs(e,t){for(let n in t){let r=e[n],i=t[n];!(`value`in i)&&r&&`value`in r?e[n]=Object.assign({value:r.value},i):e[n]=i}}function Us(e,t,n){let r,i={};class a extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`generatedFrom`,this)))t._finalizeClass.call(this);else{if(r)for(let e=0,t;e<r.length;e++)t=r[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){let t={};if(r)for(let e=0;e<r.length;e++)Hs(t,r[e].properties);return Hs(t,e.properties),t}static get observers(){let t=[];if(r)for(let e=0,n;e<r.length;e++)n=r[e],n.observers&&(t=t.concat(n.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();let e=i.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){let e=a.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty(`__hasRegisterFinished`,e))){e.__hasRegisterFinished=!0,super._registered(),$n&&o(e);let t=Object.getPrototypeOf(this),n=i.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=i.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();let e=i.listeners;if(e)for(let t=0;t<e.length;t++){let n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){let e=i.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){let n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=i.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=i.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=i.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let r=i.attributeChanged;if(r)for(let i=0;i<r.length;i++)r[i].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;r=Vs(n,null,e),a.prototype.behaviors=e?e.concat(n):r}let o=t=>{r&&zs(t,r,i),Bs(t,e,i,Gs)};return $n||o(a.prototype),a.generatedFrom=e,a}var Ws,Gs,Ks,qs,Js,Ys=t((()=>{Ls(),M(),Ws={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},Gs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Ks=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},Gs),qs=Is(HTMLElement),Js=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(qs):qs;return n=Us(e,n,e.behaviors),n.is=n.prototype.is=e.is,n}})),Xs,Zs=t((()=>{Ys(),A(),Xs=function(e){let t;return t=typeof e==`function`?e:Xs.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t},Xs.Class=Js}));function Qs(e,t,n,r,i){let a;i&&(a=typeof n==`object`&&!!n,a&&(r=e.__dataTemp[t]));let o=r!==n&&(r===r||n===n);return a&&o&&(e.__dataTemp[t]=n),o}var $s,ec,tc=t((()=>{P(),$s=N(e=>{class t extends e{_shouldPropertyChange(e,t,n){return Qs(this,e,t,n,!0)}}return t}),ec=N(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return Qs(this,e,t,n,this.mutableData)}}return t}),$s._mutablePropertyChange=Qs}));function nc(){return hc}function rc(e,t){hc=e,Object.setPrototypeOf(e,t.prototype),new t,hc=null}function ic(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(!!e!=!!r.__hideTemplateChildren__)if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=``):r.textContent=r.__polymerTextContent__;else if(r.localName===`slot`)if(e)r.__polymerReplaced__=document.createComment(`hidden-slot`),F(F(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{let e=r.__polymerReplaced__;e&&F(F(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display=`none`):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}function ac(e){let t=e.__dataHost;return t&&t._methodHost||t}function oc(e,t,n){let r=n.mutableData?yc:G;fc.mixin&&(r=fc.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(e),lc(i,e,t,n),i}function sc(e,t,n,r){let i=n.forwardHostProp;if(i&&t.hasHostProps){let a=e.localName==`template`,o=t.templatizeTemplateClass;if(!o){if(a){let e=n.mutableData?_c:gc;class r extends e{}o=t.templatizeTemplateClass=r}else{let n=e.constructor;class r extends n{}o=t.templatizeTemplateClass=r}let s=t.hostProps;for(let e in s)o.prototype._addPropertyEffect(`_host_`+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:cc(e,i)}),o.prototype._createNotifyingProperty(`_host_`+e);er&&r&&pc(t,n,r)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),a)rc(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);let n=t.hostProps;for(let t in n)if(t=`_host_`+t,t in e){let n=e[t];delete e[t],e.__data[t]=n}}}}function cc(e,t){return function(e,n,r){t.call(e.__templatizeOwner,n.substring(6),r[n])}}function lc(e,t,n,r){let i=n.hostProps||{};for(let t in r.instanceProps){delete i[t];let n=r.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:uc(t,n)})}if(r.forwardHostProp&&t.__dataHost)for(let t in i)n.hasHostProps||=!0,e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:dc()})}function uc(e,t){return function(e,n,r){t.call(e.__templatizeOwner,e,n,r[n])}}function dc(){return function(e,t,n){e.__dataHost._setPendingPropertyOrPath(`_host_`+t,n[t],!0,!0)}}function fc(e,t,n){if(Zn&&!ac(e))throw Error(`strictTemplatePolicy: template owner not trusted`);if(n||={},e.__templatizeOwner)throw Error(`A <template> can only be templatized once`);e.__templatizeOwner=t;let r=(t?t.constructor:G)._parseTemplate(e),i=r.templatizeInstanceClass;i||(i=oc(e,r,n),r.templatizeInstanceClass=i);let a=ac(e);sc(e,r,n,a);let o=class extends i{};return o.prototype._methodHost=a,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=r.hostProps,o=o,o}function pc(e,t,n){let r=n.constructor._properties,{propertyEffects:i}=e,{instanceProps:a}=t;for(let e in i)if(!r[e]&&!(a&&a[e])){let t=i[e];for(let n=0;n<t.length;n++){let{part:r}=t[n].info;if(!(r.signature&&r.signature.static)){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function mc(e,t){let n;for(;t;)if(n=t.__dataHost?t:t.__templatizeInstance)if(n.__dataHost!=e)t=n.__dataHost;else return n;else t=F(t).parentNode;return null}var hc,gc,_c,vc,G,yc,bc=t((()=>{A(),ba(),tc(),M(),I(),hc=null,nc.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:nc,writable:!0}}),gc=va(nc),_c=$s(gc),vc=va(class{}),G=class extends vc{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost[`_host_`+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,n)}}_showHideChildren(e){ic(e,this.children)}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&t==`textContent`?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}},G.prototype.__dataHost,G.prototype.__templatizeOptions,G.prototype._methodHost,G.prototype.__templatizeOwner,G.prototype.__hostProps,yc=$s(G)})),xc=t((()=>{bc()}));function Sc(){if($n&&!Kn){if(!Cc){Cc=!0;let e=document.createElement(`style`);e.textContent=`dom-bind,dom-if,dom-repeat{display:none;}`,document.head.appendChild(e)}return!0}return!1}var Cc,wc=t((()=>{M(),Cc=!1})),Tc,Ec,Dc=t((()=>{A(),ba(),tc(),Po(),M(),I(),wc(),Tc=No(ec(va(HTMLElement))),Ec=class extends Tc{static get observedAttributes(){return[`mutable-data`]}constructor(){if(super(),Zn)throw Error(`strictTemplatePolicy: dom-bind not allowed`);this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,r){this.mutableData=!0}connectedCallback(){Sc()||(this.style.display=`none`),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){F(F(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e||=this.querySelector(`template`),!e){let t=new MutationObserver(()=>{if(e=this.querySelector(`template`),e)t.disconnect(),this.render();else throw Error(`dom-bind requires a <template> child`)});t.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent(`dom-change`,{bubbles:!0,composed:!0}))}},customElements.define(`dom-bind`,Ec)}));function Oc(e){if(e instanceof jc)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function kc(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof jc)return Oc(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var Ac,jc,Mc,Nc,Pc=t((()=>{A(),Ac=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),jc=class{constructor(e,t){Nc(e,t),this.value=t.reduce((t,n,r)=>t+Oc(n)+e[r+1],e[0]).toString()}toString(){return this.value}},Mc=function(e,...t){Nc(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+kc(n)+e[r+1],e[0]);return Ac&&(r=Ac.createHTML(r)),n.innerHTML=r,n},Nc=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),Fc,Ic=t((()=>{Ma(),Pc(),Fc=ja(HTMLElement)})),Lc,Rc,zc=t((()=>{Ic(),bc(),La(),gs(),tc(),Hr(),ri(),I(),wc(),M(),Lc=ec(Fc),Rc=class extends Lc{static get is(){return`dom-repeat`}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:`item`},indexAs:{type:String,value:`index`},itemsIndexAs:{type:String,value:`itemsIndex`},sort:{type:Function,observer:`__sortChanged`},filter:{type:Function,observer:`__filterChanged`},observe:{type:String,observer:`__observeChanged`},delay:Number,renderedItemCount:{type:Number,notify:!sr,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:`__computeFrameTime(targetFramerate)`},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return[`__itemsChanged(items.*)`]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Sc()||(this.style.display=`none`),this.__isDetached){this.__isDetached=!1;let e=F(F(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){let e=this,t=this.template=e._templateInfo?e:this.querySelector(`template`);if(!t){let e=new MutationObserver(()=>{if(this.querySelector(`template`))e.disconnect(),this.__render();else throw Error(`dom-repeat requires a <template> child`)});return e.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=fc(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(e,t){let n=this.__instances;for(let r=0,i;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if(Rr(this.as,t)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=n);let i=Lr(this.as,`${JSCompiler_renameProperty(`items`,this)}.${r}`,t);this.notifyPath(i,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e==`string`){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(`.*`,`.`).split(` `)}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)e.indexOf(t[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path===`items`&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Na.debounce(this.__renderDebouncer,t>0?ni.after(t):z,e.bind(this)),Fa(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),hs()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[],t=this.__sortAndFilterItems(e),n=this.__calculateLimit(t.length);this.__updateInstances(e,n,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!sr||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent(`dom-change`,{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;return this.__filterFn&&(t=t.filter((t,n,r)=>this.__filterFn(e[t],n,r))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n])),t}__calculateLimit(e){let t=e,n=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),r=Math.max(t-n,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-n,0),this.__chunkCount),t=Math.min(n+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){let e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,n){let r=this.__itemsIdxToInstIdx={},i;for(i=0;i<t;i++){let t=this.__instances[i],a=n[i],o=e[a];r[a]=i,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,i),t._setPendingProperty(this.itemsIndexAs,a),t._flushProperties()):this.__insertInstance(o,i,a)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e],n=F(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];n.appendChild(r)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,n){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(e,t,n){let r=this.__stampInstance(e,t,n),i=this.__instances[t+1],a=i?i.children[0]:this;return F(F(this).parentNode).insertBefore(r.root,a),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),r=n.indexOf(`.`),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){let e=r<0?``:n.substring(r+1);this.__handleObservedPaths(e);let a=this.__itemsIdxToInstIdx[i],o=this.__instances[a];if(o){let n=this.as+(e?`.`+e:``);o._setPendingPropertyOrPath(n,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return mc(this.template,e)}},customElements.define(Rc.is,Rc)})),Bc,Vc,Hc,Uc,Wc=t((()=>{Ic(),La(),gs(),ri(),Hr(),I(),wc(),M(),bc(),Bc=class extends Fc{static get is(){return`dom-if`}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:`__debounceRender`},restamp:{type:Boolean,observer:`__debounceRender`},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Na.debounce(this.__renderDebouncer,z,()=>this.__render()),Fa(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();let e=F(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!F(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Sc()||(this.style.display=`none`),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){let e=this,t=e._templateInfo?e:F(e).querySelector(`template`);if(!t){let e=new MutationObserver(()=>{if(F(this).querySelector(`template`))e.disconnect(),this.__render();else throw Error(`dom-if requires a <template> child`)});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=F(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&F(this).previousSibling!==t[t.length-1])for(let n=0,r;n<t.length&&(r=t[n]);n++)F(e).insertBefore(r,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){hs()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!sr||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent(`dom-change`,{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}},Vc=class extends Bc{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){let t=this.__dataHost||this;if(Zn&&!this.__dataHost)throw Error(`strictTemplatePolicy: template owner not trusted`);let n=t._bindTemplate(this.__template,!0);n.runEffects=(e,t,n)=>{let r=this.__syncInfo;if(this.if)r&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(r.changedProps,t)),e(t,n);else if(this.__instance)if(r||=this.__syncInfo={runEffects:e,changedProps:{}},n)for(let e in t){let t=L(e);r.changedProps[t]=this.__dataHost[t]}else Object.assign(r.changedProps,t)},this.__instance=t._stampTemplate(this.__template,n),F(e).insertBefore(this.__instance,this)}__syncHostProperties(){let e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){let e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,ic(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}},Hc=class extends Bc{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||=fc(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[L(e)]=!0))}}),this.__instance=new this.__ctor,F(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=F(e[0]).parentNode;if(t){t=F(t);for(let n=0,r;n<e.length&&(r=e[n]);n++)t.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}},Uc=or?Vc:Hc,customElements.define(Uc.is,Uc)})),Gc,Kc,qc,Jc=t((()=>{Ic(),P(),ds(),Ma(),Gc=N(e=>{let t=ja(e);class n extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return[`__updateSelection(multi, items.*)`]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty(`items`,this)){let n=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=as(n,r);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty(`items`,this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty(`items`,this)}.`.length),t=parseInt(e,10);e.indexOf(`.`)<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let r=e[n];t.forEach((e,n)=>{e<r.index||(e>=r.index+r.removed.length?t.set(n,e+r.addedCount-r.removed.length):t.set(n,-1))});for(let e=0;e<r.addedCount;e++){let n=r.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty(`selected`,this),n,1):this.selected=this.selectedItem=null,t.delete(r)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty(`items`,this)}.${t}`,`${JSCompiler_renameProperty(`selected`,this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty(`selected`,this),`${JSCompiler_renameProperty(`items`,this)}.${e}`),this.linkPaths(JSCompiler_renameProperty(`selectedItem`,this),`${JSCompiler_renameProperty(`items`,this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,r)=>{t==e++&&this.deselect(r)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty(`items`,this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty(`selected`,this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){this.__selectedMap.delete(e);let n;this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty(`selected`,this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty(`selected`,this),t):this.selected=this.selectedItem=t)}}return n}),Kc=Gc(Fc),qc=class extends Kc{static get is(){return`array-selector`}static get template(){return null}},customElements.define(qc.is,qc)})),Yc,Xc=t((()=>{Fn(),on(),gt(),Yc=new k,window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){Yc.processStyles(),nn(e,t)},styleElement(e){Yc.processStyles()},styleDocument(e){Yc.processStyles(),nn(document.body,e)},getComputedStyleValue(e,t){return rn(e,t)},flushCustomStyles(){},nativeCss:ht,nativeShadow:dt,cssBuild:pt,disableRuntime:mt}),window.ShadyCSS.CustomStyleInterface=Yc})),Zc,Qc,$c,el=t((()=>{Xc(),Nr(),Zc=`include`,Qc=window.ShadyCSS.CustomStyleInterface,$c=class extends HTMLElement{constructor(){super(),this._style=null,Qc.addCustomStyle(this)}getStyle(){if(this._style)return this._style;let e=this.querySelector(`style`);if(!e)return null;this._style=e;let t=e.getAttribute(Zc);return t&&(e.removeAttribute(Zc),e.textContent=Er(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}},window.customElements.define(`custom-style`,$c)})),tl=t((()=>{tc(),$s._mutablePropertyChange})),K=t((()=>{Ls(),Zs(),xc(),Dc(),zc(),Wc(),Jc(),el(),tl(),Pc(),Is(HTMLElement).prototype})),nl,rl,il=t((()=>{K(),Pc(),nl=Mc`
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
</custom-style>`,nl.setAttribute(`style`,`display: none;`),document.head.appendChild(nl.content),rl=document.createElement(`style`),rl.textContent=`[hidden] { display: none !important; }`,document.head.appendChild(rl)})),al,ol=t((()=>{K(),Pc(),al=Mc`
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
</custom-style>`,al.setAttribute(`style`,`display: none;`),document.head.appendChild(al.content)})),sl,cl=t((()=>{K(),ol(),Pc(),sl=Mc`
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
</dom-module>`,sl.setAttribute(`style`,`display: none;`),document.head.appendChild(sl.content)})),ll,ul=t((()=>{K(),Ts(),ll={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:`_disabledChanged`,reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:[`_changedControlState(focused, disabled)`],ready:function(){this.addEventListener(`focus`,this._boundFocusBlurHandler,!0),this.addEventListener(`blur`,this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused(e.type===`focus`)},_disabledChanged:function(e,t){this.setAttribute(`aria-disabled`,e?`true`:`false`),this.style.pointerEvents=e?`none`:``,e?(this._oldTabIndex=this.getAttribute(`tabindex`),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute(`tabindex`):this.setAttribute(`tabindex`,this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}}));function dl(e,t){var n=``;if(e){var r=e.toLowerCase();r===` `||wl.test(r)?n=`space`:Tl.test(r)?n=`esc`:r.length==1?(!t||xl.test(r))&&(n=r):n=Cl.test(r)?r.replace(`arrow`,``):r==`multiply`?`*`:r}return n}function fl(e){var t=``;return e&&(e in vl?t=vl[e]:Sl.test(e)?(e=parseInt(e.replace(`U+`,`0x`),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function pl(e){var t=``;return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?`f`+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):yl[e]),t}function ml(e,t){return e.key?dl(e.key,t):e.detail&&e.detail.key?dl(e.detail.key,t):fl(e.keyIdentifier)||pl(e.keyCode)||``}function hl(e,t){return ml(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function gl(e){return e.length===1?{combo:e,key:e,event:`keydown`}:e.split(`+`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n[1];return r in bl?(e[bl[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=i||`keydown`),e},{combo:e.split(`:`).shift()})}function _l(e){return e.trim().split(` `).map(function(e){return gl(e)})}var vl,yl,bl,xl,Sl,Cl,wl,Tl,El,Dl=t((()=>{K(),vl={"U+0008":`backspace`,"U+0009":`tab`,"U+001B":`esc`,"U+0020":`space`,"U+007F":`del`},yl={8:`backspace`,9:`tab`,13:`enter`,27:`esc`,33:`pageup`,34:`pagedown`,35:`end`,36:`home`,32:`space`,37:`left`,38:`up`,39:`right`,40:`down`,46:`del`,106:`*`},bl={shift:`shiftKey`,ctrl:`ctrlKey`,alt:`altKey`,meta:`metaKey`},xl=/[a-z0-9*]/,Sl=/U\+/,Cl=/^arrow/,wl=/^space(bar)?/,Tl=/^escape$/,El={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:[`_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)`],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=_l(t),r=0;r<n.length;++r)if(hl(n[r],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return e.indexOf(this.keyBindings)===-1&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1})},_addKeyBinding:function(e,t){_l(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)},this)},_unlistenKeyEventListeners:function(){for(var e,t,n,r;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],n=e[1],r=e[2],t.removeEventListener(n,r)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var r=e[n][0],i=e[n][1];if(hl(r,t)&&(this._triggerKeyHandler(r,i,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var r=Object.create(e);r.keyboardEvent=n;var i=new CustomEvent(e.event,{detail:r,cancelable:!0});this[t].call(this,i),i.defaultPrevented&&n.preventDefault()}}})),Ol,kl,Al=t((()=>{K(),ul(),Dl(),Ts(),Ol={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:`_pressedChanged`},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:`aria-pressed`,observer:`_ariaActiveAttributeChanged`}},listeners:{down:`_downHandler`,up:`_upHandler`,tap:`_tapHandler`},observers:[`_focusChanged(focused)`,`_activeChanged(active, ariaActiveAttribute)`],keyBindings:{"enter:keydown":`_asyncClick`,"space:keydown":`_spaceKeyDownHandler`,"space:keyup":`_spaceKeyUpHandler`},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire(`change`))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=W(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=W(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?`true`:`false`):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},kl=[El,Ol]}));function jl(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Ml(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement(`div`),this.waveContainer=document.createElement(`div`),this.wave.style.backgroundColor=this.color,this.wave.classList.add(`wave`),this.waveContainer.classList.add(`wave-container`),W(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}var q,Nl=t((()=>{K(),Dl(),Zs(),Ts(),Pc(),q={distance:function(e,t,n,r){var i=e-n,a=t-r;return Math.sqrt(i*i+a*a)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now},jl.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=q.distance(e,t,0,0),r=q.distance(e,t,this.width,0),i=q.distance(e,t,0,this.height),a=q.distance(e,t,this.width,this.height);return Math.max(n,r,i,a)}},Ml.MAX_RADIUS=300,Ml.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=q.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?q.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=Math.min(Math.sqrt(e+t),Ml.MAX_RADIUS)*1.1+5,r=1.1-.2*(n/Ml.MAX_RADIUS),i=n*(1-80**-(this.mouseInteractionSeconds/r));return Math.abs(i)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=this.mouseUpElapsedSeconds*.3,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Ml.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ml.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new jl(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform=`translate(`+t+`px, `+n+`px)`,this.waveContainer.style.transform=`translate3d(`+t+`px, `+n+`px, 0)`,this.wave.style.webkitTransform=`scale(`+e+`,`+e+`)`,this.wave.style.transform=`scale3d(`+e+`,`+e+`,1)`},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=q.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=q.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=q.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+`px`,this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+`px`,this.waveContainer.style.width=this.containerMetrics.size+`px`,this.waveContainer.style.height=this.containerMetrics.size+`px`},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=q.now())},remove:function(){W(W(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Xs({_template:Mc`
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
`,is:`paper-ripple`,behaviors:[El],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:`_holdDownChanged`},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":`_onEnterKeydown`,"space:keydown":`_onSpaceKeydown`,"space:keyup":`_onSpaceKeyup`},attached:function(){W(this).parentNode.nodeType==11?this.keyEventTarget=W(this).getOwnerRoot().host:this.keyEventTarget=W(this).parentNode;var e=this.keyEventTarget;this.listen(e,`up`,`uiUpAction`),this.listen(e,`down`,`uiDownAction`)},detached:function(){this.unlisten(this.keyEventTarget,`up`,`uiUpAction`),this.unlisten(this.keyEventTarget,`down`,`uiDownAction`),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=``,this.fire(`transitionend`)},addRipple:function(){var e=new Ml(this);return W(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){t!==void 0&&(e?this.downAction():this.upAction())}})})),Pl,Fl=t((()=>{K(),Nl(),Al(),Ts(),Pl={properties:{noink:{type:Boolean,observer:`_noinkChanged`},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Ol._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&W(t).appendChild(this._ripple),e){var n=W(this._rippleContainer||this),r=W(e).rootTarget;n.deepContains(r)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){return document.createElement(`paper-ripple`)},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}})),Il,Ll,Rl=t((()=>{K(),Al(),ul(),Fl(),Il={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:[`_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)`,`_computeKeyboardClass(receivedFocusFromKeyboard)`],hostAttributes:{role:`button`,tabindex:`0`,animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass(`keyboard-focus`,e)},_spaceKeyDownHandler:function(e){Ol._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Ol._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},Ll=[kl,ll,Pl,Il]})),zl,Bl=t((()=>{il(),cl(),Rl(),Zs(),K(),zl=Mc`
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

  <slot></slot>`,zl.setAttribute(`strip-whitespace`,``),Xs({_template:zl,is:`paper-button`,behaviors:[Ll],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:`_calculateElevation`}},_calculateElevation:function(){this.raised?Il._calculateElevation.apply(this):this._setElevation(0)}})})),Vl,Hl=t((()=>{o(),Vl=e=>e??a}));function*Ul(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var Wl=t((()=>{})),Gl,Kl,ql=t((()=>{Gl={duration:250},Kl=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Gl,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`})}})),Jl,Yl,Xl=t((()=>{o(),Ye(),Jl={},Yl=qe(class extends Je{constructor(){super(...arguments),this.ot=Jl}render(e,t){return t()}update(t,[n,r]){if(Array.isArray(n)){if(Array.isArray(this.ot)&&this.ot.length===n.length&&n.every((e,t)=>e===this.ot[t]))return e}else if(this.ot===n)return e;return this.ot=Array.isArray(n)?Array.from(n):n,this.render(n,r)}})})),Zl,Ql,$l=t((()=>{o(),rt(),Ye(),Zl=new WeakMap,Ql=qe(class extends nt{render(e){return a}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Zl.get(t);n===void 0&&(n=new WeakMap,Zl.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Zl.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),eu,tu,nu,ru=t((()=>{o(),Ye(),eu=`important`,tu=` !`+eu,nu=qe(class extends Je{constructor(e){if(super(e),e.type!==Ke.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(t,[n]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in n){let t=n[e];if(t!=null){this.ft.add(e);let n=typeof t==`string`&&t.endsWith(tu);e.includes(`-`)||n?r.setProperty(e,n?t.slice(0,-11):t,n?eu:``):r[e]=t}}return e}})}));function iu(e,t,n){return e?t(e):n?.(e)}var au=t((()=>{})),ou,su=t((()=>{ou=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),cu=t((()=>{su()})),lu,uu,du=t((()=>{T(),o(),cu(),lu=de`
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
`,uu=()=>i`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,ou(st(uu,{styleSheets:[lu]})))}));function fu(e,t,n){return Au(e,ku(t,n))}function pu(e,t){return typeof e==`function`?e(t):e}function mu(e){return e.split(`-`)[0]}function hu(e){return e.split(`-`)[1]}function gu(e){return e===`x`?`y`:`x`}function _u(e){return e===`y`?`height`:`width`}function vu(e){return Fu.has(mu(e))?`y`:`x`}function yu(e){return gu(vu(e))}function bu(e,t,n){n===void 0&&(n=!1);let r=hu(e),i=yu(e),a=_u(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Tu(o)),[o,Tu(o)]}function xu(e){let t=Tu(e);return[Su(e),t,Su(t)]}function Su(e){return e.replace(/start|end/g,e=>Pu[e])}function Cu(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Lu:Iu:t?Iu:Lu;case`left`:case`right`:return t?Ru:zu;default:return[]}}function wu(e,t,n,r){let i=hu(e),a=Cu(mu(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Su)))),a}function Tu(e){return e.replace(/left|right|bottom|top/g,e=>Nu[e])}function Eu(e){return{top:0,right:0,bottom:0,left:0,...e}}function Du(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Eu(e)}function Ou(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var ku,Au,ju,Mu,J,Nu,Pu,Fu,Iu,Lu,Ru,zu,Bu=t((()=>{ku=Math.min,Au=Math.max,ju=Math.round,Mu=Math.floor,J=e=>({x:e,y:e}),Nu={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Pu={start:`end`,end:`start`},Fu=new Set([`top`,`bottom`]),Iu=[`left`,`right`],Lu=[`right`,`left`],Ru=[`top`,`bottom`],zu=[`bottom`,`top`]}));function Vu(e,t,n){let{reference:r,floating:i}=e,a=vu(t),o=yu(t),s=_u(o),c=mu(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(hu(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Hu(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=pu(t,e),p=Du(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Ou(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Ou(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Uu,Wu,Gu,Ku=t((()=>{Bu(),Uu=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Vu(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=Vu(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},Wu=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=pu(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=mu(r),_=vu(o),v=mu(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Tu(o)]:xu(o)),x=p!==`none`;!d&&x&&b.push(...wu(o,m,p,y));let ee=[o,...b],te=await Hu(t,h),ne=[],re=i.flip?.overflows||[];if(l&&ne.push(te[g]),u){let e=bu(r,a,y);ne.push(te[e[0]],te[e[1]])}if(re=[...re,{placement:r,overflows:ne}],!ne.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=ee[e];if(t&&(!(u===`alignment`&&_!==vu(t))||re.every(e=>vu(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:re},reset:{placement:t}};let n=re.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=re.filter(e=>{if(x){let t=vu(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Gu=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=pu(e,t),l={x:n,y:r},u=await Hu(t,c),d=vu(mu(i)),f=gu(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=fu(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=fu(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}}}));function qu(){return typeof window<`u`}function Ju(e){return Yu(e)?(e.nodeName||``).toLowerCase():`#document`}function Y(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function X(e){return((Yu(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Yu(e){return qu()?e instanceof Node||e instanceof Y(e).Node:!1}function Z(e){return qu()?e instanceof Element||e instanceof Y(e).Element:!1}function Q(e){return qu()?e instanceof HTMLElement||e instanceof Y(e).HTMLElement:!1}function Xu(e){return!qu()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof Y(e).ShadowRoot}function Zu(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=$(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!ld.has(i)}function Qu(e){return ud.has(Ju(e))}function $u(e){return dd.some(t=>{try{return e.matches(t)}catch{return!1}})}function ed(e){let t=nd(),n=Z(e)?$(e):e;return fd.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||pd.some(e=>(n.willChange||``).includes(e))||md.some(e=>(n.contain||``).includes(e))}function td(e){let t=ad(e);for(;Q(t)&&!rd(t);){if(ed(t))return t;if($u(t))return null;t=ad(t)}return null}function nd(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}function rd(e){return hd.has(Ju(e))}function $(e){return Y(e).getComputedStyle(e)}function id(e){return Z(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function ad(e){if(Ju(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Xu(e)&&e.host||X(e);return Xu(t)?t.host:t}function od(e){let t=ad(e);return rd(t)?e.ownerDocument?e.ownerDocument.body:e.body:Q(t)&&Zu(t)?t:od(t)}function sd(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=od(e),i=r===e.ownerDocument?.body,a=Y(r);if(i){let e=cd(a);return t.concat(a,a.visualViewport||[],Zu(r)?r:[],e&&n?sd(e):[])}return t.concat(r,sd(r,[],n))}function cd(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var ld,ud,dd,fd,pd,md,hd,gd=t((()=>{ld=new Set([`inline`,`contents`]),ud=new Set([`table`,`td`,`th`]),dd=[`:popover-open`,`:modal`],fd=[`transform`,`translate`,`scale`,`rotate`,`perspective`],pd=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],md=[`paint`,`layout`,`strict`,`content`],hd=new Set([`html`,`body`,`#document`])}));function _d(e){let t=$(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Q(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=ju(n)!==a||ju(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function vd(e){return Z(e)?e:e.contextElement}function yd(e){let t=vd(e);if(!Q(t))return J(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=_d(t),o=(a?ju(n.width):n.width)/r,s=(a?ju(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function bd(e){let t=Y(e);return!nd()||!t.visualViewport?Ud:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function xd(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Y(e)?!1:t}function Sd(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=vd(e),o=J(1);t&&(r?Z(r)&&(o=yd(r)):o=yd(e));let s=xd(a,n,r)?bd(a):J(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=Y(a),t=r&&Z(r)?Y(r):r,n=e,i=cd(n);for(;i&&r&&t!==n;){let e=yd(i),t=i.getBoundingClientRect(),r=$(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=Y(i),i=cd(n)}}return Ou({width:u,height:d,x:c,y:l})}function Cd(e,t){let n=id(e).scrollLeft;return t?t.left+n:Sd(X(e)).left+n}function wd(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Cd(e,n),y:n.top+t.scrollTop}}function Td(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=X(r),s=t?$u(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=J(1),u=J(0),d=Q(r);if((d||!d&&!a)&&((Ju(r)!==`body`||Zu(o))&&(c=id(r)),Q(r))){let e=Sd(r);l=yd(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?wd(o,c):J(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Ed(e){return Array.from(e.getClientRects())}function Dd(e){let t=X(e),n=id(e),r=e.ownerDocument.body,i=Au(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Au(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Cd(e),s=-n.scrollTop;return $(r).direction===`rtl`&&(o+=Au(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function Od(e,t){let n=Y(e),r=X(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=nd();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Cd(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=Wd&&(a-=o)}else l<=Wd&&(a+=l);return{width:a,height:o,x:s,y:c}}function kd(e,t){let n=Sd(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Q(e)?yd(e):J(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Ad(e,t,n){let r;if(t===`viewport`)r=Od(e,n);else if(t===`document`)r=Dd(X(e));else if(Z(t))r=kd(t,n);else{let n=bd(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ou(r)}function jd(e,t){let n=ad(e);return n===t||!Z(n)||rd(n)?!1:$(n).position===`fixed`||jd(n,t)}function Md(e,t){let n=t.get(e);if(n)return n;let r=sd(e,[],!1).filter(e=>Z(e)&&Ju(e)!==`body`),i=null,a=$(e).position===`fixed`,o=a?ad(e):e;for(;Z(o)&&!rd(o);){let t=$(o),n=ed(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&Gd.has(i.position)||Zu(o)&&!n&&jd(e,o))?r=r.filter(e=>e!==o):i=t,o=ad(o)}return t.set(e,r),r}function Nd(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?$u(t)?[]:Md(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=Ad(t,n,i);return e.top=Au(r.top,e.top),e.right=ku(r.right,e.right),e.bottom=ku(r.bottom,e.bottom),e.left=Au(r.left,e.left),e},Ad(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Pd(e){let{width:t,height:n}=_d(e);return{width:t,height:n}}function Fd(e,t,n){let r=Q(t),i=X(t),a=n===`fixed`,o=Sd(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=J(0);function l(){c.x=Cd(i)}if(r||!r&&!a)if((Ju(t)!==`body`||Zu(i))&&(s=id(t)),r){let e=Sd(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?wd(i,s):J(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Id(e){return $(e).position===`static`}function Ld(e,t){if(!Q(e)||$(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return X(e)===n&&(n=n.ownerDocument.body),n}function Rd(e,t){let n=Y(e);if($u(e))return n;if(!Q(e)){let t=ad(e);for(;t&&!rd(t);){if(Z(t)&&!Id(t))return t;t=ad(t)}return n}let r=Ld(e,t);for(;r&&Qu(r)&&Id(r);)r=Ld(r,t);return r&&rd(r)&&Id(r)&&!ed(r)?n:r||td(e)||n}function zd(e){return $(e).direction===`rtl`}function Bd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Vd(e,t){let n=null,r,i=X(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Mu(d),h=Mu(i.clientWidth-(u+f)),g=Mu(i.clientHeight-(d+p)),_=Mu(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Au(0,ku(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Bd(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(b,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,v)}n.observe(e)}return o(!0),a}function Hd(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=vd(e),u=i||a?[...l?sd(l):[],...sd(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Vd(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Sd(e):null;c&&g();function g(){let t=Sd(e);h&&!Bd(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Ud,Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd=t((()=>{Ku(),Bu(),gd(),Ud=J(0),Wd=25,Gd=new Set([`absolute`,`fixed`]),Kd=async function(e){let t=this.getOffsetParent||Rd,n=this.getDimensions,r=await n(e.floating);return{reference:Fd(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},qd={convertOffsetParentRelativeRectToViewportRelativeRect:Td,getDocumentElement:X,getClippingRect:Nd,getOffsetParent:Rd,getElementRects:Kd,getClientRects:Ed,getDimensions:Pd,getScale:yd,isElement:Z,isRTL:zd},Jd=Gu,Yd=Wu,Xd=(e,t,n)=>{let r=new Map,i={platform:qd,...n},a={...i.platform,_c:r};return Uu(e,t,{...i,platform:a})}})),Qd,$d,ef=t((()=>{T(),Zd(),Qd=[Yd({fallbackAxisSideDirection:`start`,crossAxis:!1}),Jd()],$d=({placement:e=`bottom-start`,strategy:t,middleware:n=Qd}={})=>{let[r,i]=Pe(),[a,o]=Pe(),[s,c]=Pe();return C(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return Hd(r,a,()=>Xd(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:Oe(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),tf,nf=t((()=>{T(),tf=e=>{let t=Oe(()=>({}),[]);return Oe(()=>Object.assign(t,e),[t,...Object.values(e)])}})),rf,af,of,sf,cf=t((()=>{T(),nf(),rf=e=>e.matches(`:focus-within`),af=({disabled:e,onFocus:t})=>{let[n,r]=Pe(),{focused:i,closed:a}=n||{},o=i&&!e,s=tf({closed:a,onFocus:t}),c=w(e=>r(t=>({...t,closed:e})),[]),l=w(e=>{let t=e.currentTarget;return rf(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return C(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:w(e=>{let t=rf(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},of=[`focusin`,`focusout`],sf=e=>{let t=af(e),{onFocus:n}=t;return C(()=>(e.setAttribute(`tabindex`,`0`),of.forEach(t=>e.addEventListener(t,n)),()=>{of.forEach(t=>e.removeEventListener(t,n))}),[]),t}})),lf,uf,df,ff=t((()=>{T(),o(),Xl(),$l(),ru(),au(),du(),ef(),cf(),lf=e=>e.preventDefault(),uf=de`
	.anchor {
		pointer-events: none;
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}
	button {
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;
	}
	::slotted(svg) {
		pointer-events: none;
	}
	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,df=e=>{let{placement:t,strategy:n,middleware:r,render:o}=e,{active:s,onToggle:c}=sf(e),{styles:l,setReference:u,setFloating:d}=$d({placement:t,strategy:n,middleware:r});return i` <div class="anchor" part="anchor" ${Ql(u)}>
			<button
				@mousedown=${lf}
				@click=${c}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${iu(s,()=>i`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${nu(l)}"
					@connected=${e=>e.target.showPopover?.()}
					${Ql(d)}
					><slot></slot>${Yl([o],()=>o?.()||a)}</cosmoz-dropdown-content
				> `)}`},customElements.define(`cosmoz-dropdown`,st(df,{styleSheets:[uf]}))})),pf,mf,hf,gf=t((()=>{T(),o(),pf=de`
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
`,mf=()=>i` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,st(mf,{styleSheets:[pf]})),hf=({placement:e})=>i` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,st(hf))})),_f,vf=t((()=>{T(),_f=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=Ve(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return C(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),C(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),yf,bf,xf,Sf=t((()=>{T(),o(),$l(),vf(),yf=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},bf=de`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin: var(--cz-spacing, 0.25rem);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		border: none;
		padding: 0;
		background: transparent;
		overflow: visible;
		min-width: anchor-size(width);

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		/* Transitions for smooth open/close animation */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	/* Starting state when popover opens */
	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	/* Closing state */
	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,xf=e=>{let{placement:t=`bottom span-right`,disabled:n,openOnHover:r,openOnFocus:a}=e,o=Ve(),[s,c]=Re(`opened`,!1),l=w(()=>{n||(c(!0),o.current?.showPopover())},[n]),u=w(()=>{c(!1),o.current?.hidePopover()},[]),d=w(()=>{n||(o.current?.matches(`:popover-open`)?u():l())},[n]);C(()=>{let e=o.current;e&&(s?e.showPopover():e.hidePopover())},[s]),C(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:f,cancelClose:p}=_f({host:e,popoverRef:o,disabled:n,openOnHover:r,openOnFocus:a,open:l,close:u});return i`
		<slot name="button" @click=${a?l:d}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${w(t=>{yf(t),c(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[])}
			@select=${u}
			@focusout=${f}
			@focusin=${p}
			${Ql(e=>e&&(o.current=e))}
		>
			<slot></slot>
		</div>
	`},customElements.define(`cosmoz-dropdown-next`,st(xf,{styleSheets:[bf],observedAttributes:[`placement`,`disabled`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Cf=t((()=>{ff(),gf(),cf(),Sf()}));function wf(e){return()=>e}var Tf,Ef,Df=t((()=>{Tf=wf(),Ef=Tf})),Of,kf=t((()=>{T(),Df(),Of=ct(()=>Ef),customElements.define(`cosmoz-keybinding-provider`,Of.Provider)})),Af,jf=t((()=>{T(),kf(),nf(),Af=(e,t)=>{let n=we(Of),r=tf(e);C(()=>n(r),t)}})),Mf,Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf=t((()=>{ql(),Cf(),jf(),T(),Ic(),o(),Mf=`bottom-bar-toolbar`,Nf=`bottom-bar-menu`,Pf=de`
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
		min-width: 5px;
		padding-right: 3%;
		margin-right: auto;
		white-space: nowrap;
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
		border-color: transparent;
		padding: 0 18px;
		font-size: 14px;
		font-weight: 500;
		line-height: 40px;
		overflow: hidden;
		flex: 0 0 auto;
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

	#dropdown::part(button) {
		border: none;
		cursor: pointer;
		outline: none;
		background: var(
			--cosmoz-bottom-bar-button-bg-color,
			var(--cosmoz-button-bg-color, #101010)
		);
		color: var(
			--cosmoz-bottom-bar-button-color,
			var(--cosmoz-button-color, #fff)
		);
		border-radius: 2px;
		width: 40px;
		height: 40px;
	}

	#dropdown::part(button):hover {
		background: var(
			--cosmoz-bottom-bar-button-hover-bg-color,
			var(--cosmoz-button-hover-bg-color, #3a3f44)
		);
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,Ff=Symbol(`openMenu`),If=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},Lf=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,Rf=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},zf=e=>{let t=Rf(e).filter(Lf).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Bf=(e,t,n,r)=>{let i=t?Mf:Nf;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},Vf=(e,t,n)=>{let r=zf(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Bf(e,!0,t,n)),o.forEach(e=>Bf(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},Hf=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=Ve(!1);Af({activity:Ff,callback:()=>If(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let a=Oe(()=>Kl(`height`),[]);Me(()=>{r.current?a(e,t):a(e,t,{duration:0}),r.current=!0},[t]);let o=w(()=>Vf(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),s=Ve(null),c=w(()=>{let t=s.current;t&&(t.disconnect(),Rf(e).filter(Lf).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);C(()=>{s.current=new MutationObserver(()=>{c(),o()}),c();let t=new MutationObserver(()=>{c(),o()});return t.observe(e,{childList:!0}),()=>{s.current?.disconnect(),s.current=null,t.disconnect()}},[o]);let l=w(()=>{c(),o()},[o]);return i` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${l}
			></slot>
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
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${l}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,st(Hf,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[Pf]})),Uf=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,i(Object.assign([Uf],{raw:[Uf]})),Mc(Object.assign([Uf],{raw:[Uf]}))}));function Gf(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var Kf,qf,Jf,Yf,Xf,Zf,Qf;t((()=>{T(),Bl(),o(),Hl(),Wl(),Wf(),Kf=e=>{let{active:t,maxToolbarItems:n}=e,[r,a]=Pe(``),[o,s]=Pe(Gf([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),c=e=>{let t=e.target;a(t.value)},l=e=>{let t=e?e.trim():``;s([...o,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&a(``)};return i`
        <input
            .value=${r}
            placeholder="priority"
            type="number"
            @input=${c}
            @keypress=${e=>e.key===`Enter`&&l(r)}
        />
        <paper-button @click=${()=>l(r)}>Add btn</paper-button>
        <paper-button @click=${()=>l(void 0)}
            >Add noprio btn</paper-button
        >
        <paper-button @click=${()=>{let t=e.shadowRoot.querySelector(`cosmoz-bottom-bar`);e.shadowRoot.appendChild(t)}}>Test reconnect</paper-button>

        <cosmoz-bottom-bar
            id="bottomBar"
            ?active=${t}
            .maxToolbarItems=${n}
        >
            <span slot="info">Bottom bar demo</span>
            ${Ul(o,e=>i`<paper-button
                        @click=${e.onClick}
                        data-priority=${Vl(e.priority)}
                        >${e.text}</paper-button
                    >`)}
        </cosmoz-bottom-bar>
    `},customElements.define(`cosmoz-bottom-bar-story`,st(Kf,{observedAttributes:[`active`,`max-toolbar-items`]})),qf=e=>i`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,Jf=({active:e,maxToolbarItems:t})=>i`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,Yf={title:`Cosmoz Bottom Bar`,render:qf,argTypes:{active:{control:`boolean`},maxToolbarItems:{control:`number`}},parameters:{docs:{description:{component:`The Cosmoz Bottom Bar web component`}}}},Xf={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The basic version`}}}},Zf={render:Jf,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The empty cosmoz-bottom-bar`}}}},Xf.parameters={...Xf.parameters,docs:{...Xf.parameters?.docs,source:{originalSource:`{
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
}`,...Xf.parameters?.docs?.source}}},Zf.parameters={...Zf.parameters,docs:{...Zf.parameters?.docs,source:{originalSource:`{
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
}`,...Zf.parameters?.docs?.source}}},Qf=[`Basic`,`Empty`]}))();export{Xf as Basic,Zf as Empty,Qf as __namedExportsOrder,Yf as default};