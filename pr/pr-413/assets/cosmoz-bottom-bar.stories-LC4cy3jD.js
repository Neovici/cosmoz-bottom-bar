import{a as e,c as t,i as n,n as r,o as i,r as a,s as o,t as s}from"./iframe--R9_SS1B.js";function c(e){d=e}function l(){d=null,f=0}function u(){return f++}var d,f,p=t((()=>{f=0})),m,h,g,_,v,y,ee,b=t((()=>{m=Symbol(`haunted.phase`),h=Symbol(`haunted.hook`),g=Symbol(`haunted.update`),_=Symbol(`haunted.commit`),v=Symbol(`haunted.effects`),y=Symbol(`haunted.layoutEffects`),ee=`haunted.context`})),te,ne=t((()=>{p(),b(),te=class{update;host;virtual;[h];[v];[y];constructor(e,t){this.update=e,this.host=t,this[h]=new Map,this[v]=[],this[y]=[]}run(e){c(this);let t=e();return l(),t}_runEffects(e){let t=this[e];c(this);for(let e of t)e.call(this);l()}runEffects(){this._runEffects(v)}runLayoutEffects(){this._runEffects(y)}teardown(){this[h].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),re,ie=t((()=>{re=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function ae(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=se(n)}}var oe,se,ce,le,ue,de=t((()=>{ne(),b(),ie(),oe=100,se=Promise.resolve().then.bind(Promise.resolve()),ce=ae(),le=ae(),ue=class e{renderer;host;state;[m];_updateQueued;_active;_updateCount;_processing;static maxUpdates=oe;constructor(e,t){this.renderer=e,this.host=t,this.state=new te(this.update.bind(this),t),this[m]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new re(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,ce(()=>{let e=this.handlePhase(g);le(()=>{this.handlePhase(_,e),le(()=>{this.handlePhase(v),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[m]=e,e){case _:this.commit(t),this.runEffects(y);return;case g:return this.render();case v:return this.runEffects(v)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),fe,pe,me,he,ge=t((()=>{fe=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},pe=e=>e?.map(e=>typeof e==`string`?fe(e):e),me=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),he=me}));function _e(e){class t extends ue{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=pe(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``?!0:n;Reflect.set(this,ve(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var ve,ye=t((()=>{de(),ge(),ve=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function be(e,...t){let n=u(),r=d[h],i=r.get(n);return i||(i=new e(n,d,...t),r.set(n,i)),i.update(...t)}function xe(e){return be.bind(null,e)}var x,Se=t((()=>{p(),b(),x=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function Ce(e){return xe(class extends x{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var we=t((()=>{Se()}));function Te(e,t){e[v].push(t)}var S,Ee=t((()=>{b(),we(),S=Ce(Te)})),De,Oe,ke=t((()=>{Se(),b(),Ee(),De=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Oe=xe(class extends x{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,Te(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};De(this.state.host).dispatchEvent(new CustomEvent(ee,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Ae(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(ee,this)}disconnectedCallback(){this.removeEventListener(ee,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Oe(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var je=t((()=>{b(),ke()})),Me,Ne=t((()=>{Se(),Me=xe(class extends x{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),C,Pe=t((()=>{Ne(),C=(e,t)=>Me(()=>e,t)}));function Fe(e,t){e[y].push(t)}var Ie,Le=t((()=>{b(),we(),Ie=Ce(Fe)})),Re,ze=t((()=>{Se(),Re=xe(class extends x{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Be=t((()=>{Se(),xe(class extends x{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Ve,He,Ue=t((()=>{Se(),Ve=/([A-Z])/gu,He=xe(class extends x{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Ve,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e){let[t,n,r]=this.resolve(e);this.notify(n,r).defaultPrevented||Object.is(t,n)||(this.state.host[this.property]=n)}})}));function We(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Ge(e){return Me(()=>We(e),[])}var Ke=t((()=>{Ne()})),qe=t((()=>{Se(),xe(class extends x{update(){return this.state.host}})}));function Je({render:e}){let t=_e(e);return{component:t,createContext:Ae(t)}}var Ye=t((()=>{ye(),je(),Pe(),Ee(),Le(),ze(),Be(),Ne(),ke(),Ue(),Ke(),qe(),Se(),de(),ne(),ie()})),Xe,Ze,Qe,$e=t((()=>{Xe={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ze=e=>(...t)=>({_$litDirective$:e,values:t}),Qe=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function et(e){this._$AN===void 0?this._$AM=e:(rt(this),this._$AM=e,it(this))}function tt(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)nt(r[e],!1),rt(r[e]);else r!=null&&(nt(r,!1),rt(r));else nt(this,e)}var nt,rt,it,at,ot,st=t((()=>{s(),$e(),nt=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),nt(e,t);return!0},rt=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},it=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),at(t)}},at=e=>{e.type==Xe.CHILD&&(e._$AP??=tt,e._$AQ??=et)},ot=class extends Qe{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),it(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(nt(this,e),rt(this))}setValue(e){if(r(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function ct(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(lt.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?ct(e,t):e.teardown();break}else if(lt.call(a.addedNodes,n.nextSibling)){i.disconnect(),ct(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var lt,ut=t((()=>{$e(),o(),st(),de(),lt=Array.prototype.includes})),dt,ft,pt=t((()=>{o(),Ye(),ut(),{component:dt,createContext:ft}=Je({render:n})})),w=t((()=>{pt(),Ye(),ge(),Ye()}));function mt(e){gt=e&&e.shimcssproperties?!1:ht||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports(`box-shadow`,`0 0 0 var(--foo)`))}var ht,gt,_t,vt,yt,bt=t((()=>{ht=!(window.ShadyDOM&&window.ShadyDOM.inUse),window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(_t=window.ShadyCSS.cssBuild),vt=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime),window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?gt=window.ShadyCSS.nativeCss:window.ShadyCSS?(mt(window.ShadyCSS),window.ShadyCSS=void 0):mt(window.WebComponents&&window.WebComponents.flags),yt=gt}));function xt(e){return e=St(e),wt(Ct(e),e)}function St(e){return e.replace(E.comments,``).replace(E.port,``)}function Ct(e){let t=new jt;t.start=0,t.end=e.length;let n=t;for(let r=0,i=e.length;r<i;r++)if(e[r]===Mt){n.rules||=[];let e=n,t=e.rules[e.rules.length-1]||null;n=new jt,n.start=r+1,n.parent=e,n.previous=t,e.rules.push(n)}else e[r]===Nt&&(n.end=r+1,n=n.parent||t);return t}function wt(e,t){let n=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let r=e.previous?e.previous.end:e.parent.start;n=t.substring(r,e.start-1),n=Tt(n),n=n.replace(E.multipleSpaces,` `),n=n.substring(n.lastIndexOf(`;`)+1);let i=e.parsedSelector=e.selector=n.trim();e.atRule=i.indexOf(It)===0,e.atRule?i.indexOf(Ft)===0?e.type=T.MEDIA_RULE:i.match(E.keyframesRule)&&(e.type=T.KEYFRAMES_RULE,e.keyframesName=e.selector.split(E.multipleSpaces).pop()):i.indexOf(Pt)===0?e.type=T.MIXIN_RULE:e.type=T.STYLE_RULE}let r=e.rules;if(r)for(let e=0,n=r.length,i;e<n&&(i=r[e]);e++)wt(i,t);return e}function Tt(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e=`0`+e;return`\\`+e})}function Et(e,t,n=``){let r=``;if(e.cssText||e.rules){let n=e.rules;if(n&&!Dt(n))for(let e=0,i=n.length,a;e<i&&(a=n[e]);e++)r=Et(a,t,r);else r=t?e.cssText:Ot(e.cssText),r=r.trim(),r&&=`  `+r+`
`}return r&&(e.selector&&(n+=e.selector+` `+Mt+`
`),n+=r,e.selector&&(n+=Nt+`

`)),n}function Dt(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(Pt)===0}function Ot(e){return e=kt(e),At(e)}function kt(e){return e.replace(E.customProp,``).replace(E.mixinProp,``)}function At(e){return e.replace(E.mixinApply,``).replace(E.varApply,``)}var jt,T,Mt,Nt,E,Pt,Ft,It,Lt=t((()=>{jt=class{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText=``,this.cssText=``,this.atRule=!1,this.type=0,this.keyframesName=``,this.selector=``,this.parsedSelector=``}},T={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Mt=`{`,Nt=`}`,E={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Pt=`--`,Ft=`@media`,It=`@`})),Rt,zt,Bt,Vt=t((()=>{Rt=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,zt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,Bt=/@media\s(.*)/}));function Ht(e){let t=e.textContent;if(!Wt.has(t)){Wt.add(t);let e=document.createElement(`style`);e.setAttribute(`shady-unscoped`,``),e.textContent=t,document.head.appendChild(e)}}function Ut(e){return e.hasAttribute(Gt)}var Wt,Gt,Kt=t((()=>{Wt=new Set,Gt=`shady-unscoped`}));function qt(e,t){return e?(typeof e==`string`&&(e=xt(e)),t&&Yt(e,t),Et(e,yt)):``}function Jt(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=xt(e.textContent)),e.__cssRules||null}function Yt(e,t,n,r){if(!e)return;let i=!1,a=e.type;if(r&&a===T.MEDIA_RULE){let t=e.selector.match(Bt);t&&(window.matchMedia(t[1]).matches||(i=!0))}a===T.STYLE_RULE?t(e):n&&a===T.KEYFRAMES_RULE?n(e):a===T.MIXIN_RULE&&(i=!0);let o=e.rules;if(o&&!i)for(let e=0,i=o.length,a;e<i&&(a=o[e]);e++)Yt(a,t,n,r)}function Xt(e,t){let n=0;for(let r=t,i=e.length;r<i;r++)if(e[r]===`(`)n++;else if(e[r]===`)`&&--n===0)return r;return-1}function Zt(e,t){let n=e.indexOf(`var(`);if(n===-1)return t(e,``,``,``);let r=Xt(e,n+3),i=e.substring(n+4,r),a=e.substring(0,n),o=Zt(e.substring(r+1),t),s=i.indexOf(`,`);return s===-1?t(a,i.trim(),``,o):t(a,i.substring(0,s).trim(),i.substring(s+1).trim(),o)}function Qt(e){let t=e.localName,n=``,r=``;return t?t.indexOf(`-`)>-1?n=t:(r=t,n=e.getAttribute&&e.getAttribute(`is`)||``):(n=e.is,r=e.extends),{is:n,typeExtension:r}}function $t(e){let t=[],n=e.querySelectorAll(`style`);for(let e=0;e<n.length;e++){let r=n[e];Ut(r)?ht||(Ht(r),r.parentNode.removeChild(r)):(t.push(r.textContent),r.parentNode.removeChild(r))}return t.join(``).trim()}function en(e){if(_t!==void 0)return _t;if(e.__cssBuild===void 0){let t=e.getAttribute(an);if(t)e.__cssBuild=t;else{let t=nn(e);t!==``&&rn(e),e.__cssBuild=t}}return e.__cssBuild||``}function tn(e){return en(e)!==``}function nn(e){let t=e.localName===`template`?e.content.firstChild:e.firstChild;if(t instanceof Comment){let e=t.textContent.trim().split(`:`);if(e[0]===an)return e[1]}return``}function rn(e){let t=e.localName===`template`?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}var an,on=t((()=>{bt(),Lt(),Vt(),Kt(),window.ShadyDOM&&window.ShadyDOM.wrap,an=`css-build`}));function sn(e,t){for(let n in t)n===null?e.style.removeProperty(n):e.style.setProperty(n,t[n])}function cn(e,t){let n=window.getComputedStyle(e).getPropertyValue(t);return n?n.trim():``}function ln(e){let t=zt.test(e)||Rt.test(e);return zt.lastIndex=0,Rt.lastIndex=0,t}var un=t((()=>{Vt()})),dn,fn,pn,mn,hn,gn,D,_n=t((()=>{on(),Vt(),un(),dn=/;\s*/m,fn=/^\s*(initial)|(inherit)\s*$/,pn=/\s*!important/,mn=`_-_`,hn=class{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}},gn=null,D=class{constructor(){this._currentElement=null,this._measureElement=null,this._map=new hn}detectMixin(e){return ln(e)}gatherStyles(e){let t=$t(e.content);if(t){let n=document.createElement(`style`);return n.textContent=t,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));let n=e._gatheredStyle;return n?this.transformStyle(n,t):null}transformStyle(e,t=``){let n=Jt(e);return this.transformRules(n,t),e.textContent=qt(n),n}transformCustomStyle(e){let t=Jt(e);return Yt(t,e=>{e.selector===`:root`&&(e.selector=`html`),this.transformRule(e)}),e.textContent=qt(t),t}transformRules(e,t){this._currentElement=t,Yt(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===`:root`&&(e.selector=`:host > *`)}transformCssText(e,t){return e=e.replace(Rt,(e,n,r,i)=>this._produceCssProperties(e,n,r,i,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement(`meta`),this._measureElement.setAttribute(`apply-shim-measure`,``),this._measureElement.style.all=`initial`,document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let t=e;for(;t.parent;)t=t.parent;let n={},r=!1;return Yt(t,t=>{r||=t===e,!r&&t.selector===e.selector&&Object.assign(n,this._cssTextToMap(t.parsedCssText))}),n}_consumeCssProperties(e,t){let n=null;for(;n=zt.exec(e);){let r=n[0],i=n[1],a=n.index,o=a+r.indexOf(`@apply`),s=a+r.length,c=e.slice(0,o),l=e.slice(s),u=t?this._fallbacksFromPreviousRules(t):{};Object.assign(u,this._cssTextToMap(c));let d=this._atApplyToCssProperties(i,u);e=`${c}${d}${l}`,zt.lastIndex=a+d.length}return e}_atApplyToCssProperties(e,t){e=e.replace(dn,``);let n=[],r=this._map.get(e);if(r||=(this._map.set(e,{}),this._map.get(e)),r){this._currentElement&&(r.dependants[this._currentElement]=!0);let i,a,o,s=r.properties;for(i in s)o=t&&t[i],a=[i,`: var(`,e,mn,i],o&&a.push(`,`,o.replace(pn,``)),a.push(`)`),pn.test(s[i])&&a.push(` !important`),n.push(a.join(``))}return n.join(`; `)}_replaceInitialOrInherit(e,t){let n=fn.exec(t);return n&&(t=n[1]?this._getInitialValueForProperty(e):`apply-shim-inherit`),t}_cssTextToMap(e,t=!1){let n=e.split(`;`),r,i,a={};for(let e=0,o,s;e<n.length;e++)o=n[e],o&&(s=o.split(`:`),s.length>1&&(r=s[0].trim(),i=s.slice(1).join(`:`),t&&(i=this._replaceInitialOrInherit(r,i)),a[r]=i));return a}_invalidateMixinEntry(e){if(gn)for(let t in e.dependants)t!==this._currentElement&&gn(t)}_produceCssProperties(e,t,n,r,i){if(n&&Zt(n,(e,t)=>{t&&this._map.get(t)&&(r=`@apply ${t};`)}),!r)return e;let a=this._consumeCssProperties(``+r,i),o=e.slice(0,e.indexOf(`--`)),s=this._cssTextToMap(a,!0),c=s,l=this._map.get(t),u=l&&l.properties;u?c=Object.assign(Object.create(u),s):this._map.set(t,c);let d=[],f,p,m=!1;for(f in c)p=s[f],p===void 0&&(p=`initial`),u&&!(f in u)&&(m=!0),d.push(`${t}${mn}${f}: ${p}`);return m&&this._invalidateMixinEntry(l),l&&(l.properties=c),n&&(o=`${e};${o}`),`${o}${d.join(`; `)};`}},D.prototype.detectMixin=D.prototype.detectMixin,D.prototype.transformStyle=D.prototype.transformStyle,D.prototype.transformCustomStyle=D.prototype.transformCustomStyle,D.prototype.transformRules=D.prototype.transformRules,D.prototype.transformRule=D.prototype.transformRule,D.prototype.transformTemplate=D.prototype.transformTemplate,D.prototype._separator=mn,Object.defineProperty(D.prototype,"invalidCallback",{get(){return gn},set(e){gn=e}})})),vn,yn=t((()=>{vn={}}));function bn(e){let t=vn[e];t&&xn(t)}function xn(e){e[Tn]=e[Tn]||0,e[Dn]=e[Dn]||0,e[En]=(e[En]||0)+1}function Sn(e){return e[Tn]===e[En]}function Cn(e){return!Sn(e)&&e[Dn]===e[En]}function wn(e){e[Dn]=e[En],e._validating||(e._validating=!0,On.then(function(){e[Tn]=e[En],e._validating=!1}))}var Tn,En,Dn,On,kn=t((()=>{yn(),Tn=`_applyShimCurrentVersion`,En=`_applyShimNextVersion`,Dn=`_applyShimValidatingVersion`,On=Promise.resolve()}));function An(e){requestAnimationFrame(function(){Mn?Mn(e):(jn||(jn=new Promise(e=>{Nn=e}),document.readyState===`complete`?Nn():document.addEventListener(`readystatechange`,()=>{document.readyState===`complete`&&Nn()})),jn.then(function(){e&&e()}))})}var jn,Mn,Nn,Pn=t((()=>{jn=null,Mn=window.HTMLImports&&window.HTMLImports.whenReady||null})),Fn,In,Ln,Rn,O,zn=t((()=>{Pn(),Fn=`__seenByShadyCSS`,In=`__shadyCSSCachedStyle`,Ln=null,Rn=null,O=class{constructor(){this.customStyles=[],this.enqueued=!1,An(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Rn||(this.enqueued=!0,An(Rn))}addCustomStyle(e){e[Fn]||(e[Fn]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[In])return e[In];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){let e=this.customStyles;for(let t=0;t<e.length;t++){let n=e[t];if(n[In])continue;let r=this.getStyleForCustomStyle(n);if(r){let e=r.__appliedElement||r;Ln&&Ln(e),n[In]=e}}return e}},O.prototype.addCustomStyle=O.prototype.addCustomStyle,O.prototype.getStyleForCustomStyle=O.prototype.getStyleForCustomStyle,O.prototype.processStyles=O.prototype.processStyles,Object.defineProperties(O.prototype,{transformCallback:{get(){return Ln},set(e){Ln=e}},validateCallback:{get(){return Rn},set(e){let t=!1;Rn||(t=!0),Rn=e,t&&this.enqueueDocumentValidation()}}})})),Bn,Vn,Hn=t((()=>{if(_n(),yn(),on(),kn(),un(),zn(),bt(),Bn=new D,Vn=class{constructor(){this.customStyleInterface=null,Bn.invalidCallback=bn}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Bn.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){this.ensure(),!tn(e)&&(vn[t]=e,e._styleAst=Bn.transformTemplate(e,t))}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let n=e[t],r=this.customStyleInterface.getStyleForCustomStyle(n);r&&Bn.transformCustomStyle(r)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,t){if(this.ensure(),t&&sn(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=Qt(e),n=vn[t];if(!(n&&tn(n))&&n&&!Sn(n)){Cn(n)||(this.prepareTemplate(n,t),wn(n));let r=e.shadowRoot;if(r){let e=r.querySelector(`style`);e&&(e.__cssRules=n._styleAst,e.textContent=qt(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}},!window.ShadyCSS||!window.ShadyCSS.ScopingShim){let e=new Vn,t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,n,r){e.flushCustomStyles(),e.prepareTemplate(t,n)},prepareTemplateStyles(e,t,n){window.ShadyCSS.prepareTemplate(e,t,n)},prepareTemplateDom(e,t){},styleSubtree(t,n){e.flushCustomStyles(),e.styleSubtree(t,n)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue(e,t){return cn(e,t)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:yt,nativeShadow:ht,cssBuild:_t,disableRuntime:vt},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Bn})),k=t((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function Un(e,t){if(e&&qn.test(e)||e===`//`)return e;if(Jn===void 0){Jn=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,Jn=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,Jn)try{return new URL(e,t).href}catch{return e}return A||(A=document.implementation.createHTMLDocument(`temp`),A.base=A.createElement(`base`),A.head.appendChild(A.base),A.anchor=A.createElement(`a`),A.body.appendChild(A.anchor)),A.base.href=t,A.anchor.href=e,A.anchor.href||e}function Wn(e,t){return e.replace(Kn,function(e,n,r,i){return n+`'`+Un(r.replace(/["']/g,``),t)+`'`+i})}function Gn(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var Kn,qn,Jn,A,Yn=t((()=>{k(),Kn=/(url\()([^)]*)(\))/g,qn=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),Xn,Zn,Qn,$n,er,tr,nr,rr,ir,ar,or,sr,cr,lr,ur,dr,fr,pr,j=t((()=>{k(),Yn(),Xn=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,Zn=Xn&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),Qn=window.Polymer&&window.Polymer.rootPath||Gn(document.baseURI||window.location.href),$n=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,er=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,tr=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,nr=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,rr=window.Polymer&&window.Polymer.legacyOptimizations||!1,ir=window.Polymer&&window.Polymer.legacyWarnings||!1,ar=window.Polymer&&window.Polymer.syncInitialRender||!1,or=window.Polymer&&window.Polymer.legacyUndefined||!1,sr=window.Polymer&&window.Polymer.orderedComputed||!1,cr=!0,lr=window.Polymer&&window.Polymer.removeNestedTemplates||!1,ur=window.Polymer&&window.Polymer.fastDomIf||!1,dr=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,fr=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,pr=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function mr(){}var hr,M,N=t((()=>{k(),hr=0,mr.prototype.__mixinApplications,mr.prototype.__mixinSet,M=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=hr++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function gr(e,t){yr[e]=br[e.toLowerCase()]=t}function _r(e){return yr[e]||br[e.toLowerCase()]}function vr(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var yr,br,xr,Sr=t((()=>{k(),Yn(),j(),yr={},br={},xr=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=_r(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Un(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=Gn(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(tr&&_r(e)!==void 0)throw gr(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,gr(e,this),vr(this)}}},xr.prototype.modules=yr,customElements.define(`dom-module`,xr)}));function Cr(e){return xr.import(e)}function wr(e){let t=Wn((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function Tr(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...Er(t[e]));return n}function Er(e){let t=Cr(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...kr(t));let n=t.querySelector(`template`);n&&e.push(...Dr(n,t.assetpath)),t._styles=e}return t._styles}function Dr(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(Fr);a&&n.push(...Tr(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=Wn(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function Or(e){let t=Cr(e);return t?kr(t):[]}function kr(e){let t=[],n=e.querySelectorAll(Pr);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(Ir);if(n&&!e._unscopedStyle){let t=wr(e);t.setAttribute(Ir,``),e._unscopedStyle=t}else e._style||=wr(e);t.push(n?e._unscopedStyle:e._style)}}return t}function Ar(e){let t=e.trim().split(/\s+/),n=``;for(let e=0;e<t.length;e++)n+=jr(t[e]);return n}function jr(e){let t=Cr(e);if(t&&t._cssText===void 0){let e=Nr(t),n=t.querySelector(`template`);n&&(e+=Mr(n,t.assetpath)),t._cssText=e||null}return t||console.warn(`Could not find style data in module named`,e),t&&t._cssText||``}function Mr(e,t){let n=``,r=Dr(e,t);for(let e=0;e<r.length;e++){let t=r[e];t.parentNode&&t.parentNode.removeChild(t),n+=t.textContent}return n}function Nr(e){let t=``,n=kr(e);for(let e=0;e<n.length;e++)t+=n[e].textContent;return t}var Pr,Fr,Ir,Lr=t((()=>{Sr(),Yn(),Pr=`link[rel=import][type~=css]`,Fr=`include`,Ir=`shady-unscoped`})),P,F=t((()=>{P=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function Rr(e){return e.indexOf(`.`)>=0}function I(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function zr(e,t){return e.indexOf(t+`.`)===0}function Br(e,t){return t.indexOf(e+`.`)===0}function Vr(e,t,n){return t+n.slice(e.length)}function Hr(e,t){return e===t||zr(e,t)||Br(e,t)}function Ur(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function Wr(e){return Array.isArray(e)?Ur(e).split(`.`):e.toString().split(`.`)}function L(e,t,n){let r=e,i=Wr(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function Gr(e,t,n){let r=e,i=Wr(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var Kr=t((()=>{k()}));function qr(e){return Yr[e]||(Yr[e]=e.indexOf(`-`)<0?e:e.replace(Xr,e=>e[1].toUpperCase()))}function Jr(e){return Yr[e]||(Yr[e]=e.replace(Zr,`-$1`).toLowerCase())}var Yr,Xr,Zr,Qr=t((()=>{k(),Yr={},Xr=/-[a-z]/g,Zr=/([A-Z])/g}));function $r(){ii=!1;let e=ni.length;for(let t=0;t<e;t++){let e=ni[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}ni.splice(0,e),ti+=e}var ei,ti,ni,ri,ii,ai,oi,R,si=t((()=>{k(),ei=0,ti=0,ni=[],ri=0,ii=!1,ai=document.createTextNode(``),new window.MutationObserver($r).observe(ai,{characterData:!0}),oi={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},R={run(e){return ii||(ii=!0,ai.textContent=ri++),ni.push(e),ei++},cancel(e){let t=e-ti;if(t>=0){if(!ni[t])throw Error(`invalid async handle: `+e);ni[t]=null}}}})),ci,li,ui=t((()=>{k(),N(),si(),F(),ci=R,li=M(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,ci.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=P(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function di(e,t){if(!fi[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var fi,pi,mi,hi,gi=t((()=>{for(k(),N(),Qr(),ui(),fi={},pi=HTMLElement.prototype;pi;){let e=Object.getOwnPropertyNames(pi);for(let t=0;t<e.length;t++)fi[e[t]]=!0;pi=Object.getPrototypeOf(pi)}mi=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,hi=M(e=>{let t=li(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(qr(e[t]))}static attributeNameForProperty(e){return Jr(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(mi(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){di(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function _i(){if(!Ei){Ei=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,Di=e.placeholder===e.textContent}return Di}function vi(e){_i()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function yi(e){let t=e.getAttribute(`is`);if(t&&Ti[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];Oi(e,n,t),n.removeAttribute(t)}}return e}function bi(e,t){let n=t.parentInfo&&bi(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function xi(e,t,n,r){r.id&&(t[r.id]=n)}function Si(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function Ci(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function wi(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var Ti,Ei,Di,Oi,ki,Ai=t((()=>{k(),N(),Ti={"dom-if":!0,"dom-repeat":!0},Ei=!1,Di=!1,Oi=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),ki=M(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),vi(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=yi(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=bi(i,o);xi(this,i.$,n,o),Ci(this,n,o,t),Si(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=wi(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function ji(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function Mi(e,t,n,r,i,a){if(t){let o=!1,s=fa++;for(let c in n){let l=t[i?I(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||Pi(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function Ni(e,t,n,r,i,a,o,s){let c=!1,l=t[o?I(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||Pi(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function Pi(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&zr(n,e))||!!(t.wildcard&&Br(n,e))}else return!0}function Fi(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Ii(e,t,n,r,i){let a=e[z.NOTIFY],o,s=fa++;for(let c in t)t[c]&&(a&&Ni(e,a,s,c,n,r,i)||i&&Li(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function Li(e,t,n){let r=I(t);return r===t?!1:(Ri(e,Jr(r)+`-changed`,n[t],t),!0)}function Ri(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),P(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function zi(e,t,n,r,i,a){let o=(a?I(t):t)==t?null:t,s=o?L(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),Ri(e,i.eventName,s,o)}function Bi(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=Vr(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[z.READ_ONLY]||!t[z.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function Vi(e,t,n,r,i){let a=e.__data[t];$n&&(a=$n(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function Hi(e,t,n,r){let i=e[z.COMPUTE];if(i)if(sr){fa++;let a=Ui(e),o=[];for(let e in t)_a(e,i,o,a,r);let s;for(;s=o.shift();)Gi(e,``,t,n,s)&&_a(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;Mi(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function Ui(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[z.COMPUTE],{counts:r,ready:i,total:a}=Wi(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Wi(e){let t=e[ma],n={},r=e[z.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function Gi(e,t,n,r,i){let a=ra(e,t,n,r,i);if(a===pa)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function Ki(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];Br(a,t)?(i=Vr(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):Br(o,t)&&(i=Vr(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function qi(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),Qi(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||Jr(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,Ji(e,t,s,r,c)}}function Ji(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=sa(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:Yi,info:o,trigger:r})}}}function Yi(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=Vr(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==pa&&Xi(e,s,c,l,o)}}function Xi(e,t,n,r,i){if(i=Zi(t,i,n,r),$n&&(i=$n(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[z.READ_ONLY]||!t[z.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Zi(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function Qi(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function $i(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];ea(a,n),ta(a,e,n)}a.__dataHost=e}}function ea(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=P(e)),e[a]=t.literal)}}function ta(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){Bi(e,t,n.target,r.source,r.negate)})}}function na(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function ra(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===pa?pa:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function ia(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function aa(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:va};return t[2].trim()?oa(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function oa(e,t){return t.args=e.map(function(e){let n=sa(e);return n.literal||(t.static=!1),n},this),t}function sa(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=I(t),n.structured=Rr(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function ca(e,t,n){let r=L(e,n);return r===void 0&&(r=t[n]),r}function la(e,t,n,r){let i={indexSplices:r};or&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),or&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function ua(e,t,n,r,i,a){la(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function da(e){return e[0].toUpperCase()+e.substring(1)}var fa,pa,z,ma,ha,ga,_a,va,ya,ba,xa,Sa=t((()=>{k(),F(),N(),Kr(),Qr(),gi(),Ai(),j(),fa=0,pa=[],z={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},ma=`__computeInfo`,ha=/[A-Z]/,ga=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},_a=(e,t,n,r,i)=>{let a=t[i?I(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==fa&&(!i||Pi(e,o.trigger))&&(o.info.lastRun=fa,ga(o.info,n,r))}},va=[],ya=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),ba=M(e=>{let t=ki(hi(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return z}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(xa.length){let e=xa[xa.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[z.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==z.READ_ONLY);let r=ji(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=ji(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,z.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,z.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,z.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,z.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||I(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=L(this,e);if(e=Gr(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return Ki(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=P(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&Rr(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[z.NOTIFY]&&this[z.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[z.READ_ONLY]||!this[z.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;Hi(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),Mi(this,this[z.REFLECT],t,n,r),Mi(this,this[z.OBSERVE],t,n,r),i&&Ii(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[z.PROPAGATE]&&Mi(this,this[z.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{Mi(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=Ur(e),t=Ur(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Ur(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=L(this,e,n);la(this,r,n.path,t)}get(e,t){return L(t||this,e)}set(e,t,n){n?Gr(n,e,t):(!this[z.READ_ONLY]||!this[z.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=L(this,e,n),i=r.length,a=r.push(...t);return t.length&&ua(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=L(this,e,t),r=!!n.length,i=n.pop();return r&&ua(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=L(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&ua(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=L(this,e,t),r=!!n.length,i=n.shift();return r&&ua(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=L(this,e,n),i=r.unshift(...t);return t.length&&ua(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=L(this,e,r),n=r.path}else n=Array.isArray(e)?Ur(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,z.READ_ONLY),t&&(this[`_set`+da(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,z.OBSERVE,{fn:Fi,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,z.OBSERVE,{fn:Fi,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=aa(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);na(this,n,z.OBSERVE,ra,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,z.NOTIFY,{fn:zi,info:{eventName:Jr(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,z.REFLECT,{fn:Vi,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=aa(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=na(this,r,z.COMPUTE,Gi,e,n);ji(this,ma)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=Br(o,t),i=ca(r,n,e?t:o);l={path:e?t:o,value:i,base:e?L(r,o):i}}else l=s?ca(r,n,o):r[o];if(or&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return pa;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),xa.push(this);let n=super._stampTemplate(e,t);if(xa.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,$i(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];P(P(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=ia(t)||` `,qi(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;ha.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=ia(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=qr(i)),qi(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;lr&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(ur&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),lr||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];qi(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=ya.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=aa(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=ya.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?ra(e,n,r,i,t.signature):n==t.source?a&&Rr(n)?L(e,n):e.__data[n]:L(e,t.source),t.negate&&(o=!o),o}}return n}),xa=[]}));function Ca(){Ta++}function wa(e){Ea.push(e)}var Ta,Ea,Da=t((()=>{Ta=0,Ea=[]}));function Oa(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var ka,Aa=t((()=>{k(),N(),Da(),ui(),ka=M(e=>{let t=li(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=Oa(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){wa(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){Ca(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),ja,Ma,Na,Pa=t((()=>{k(),j(),N(),Lr(),Yn(),Sr(),Sa(),Aa(),F(),ja=`3.5.2`,Ma=window.ShadyCSS&&window.ShadyCSS.cssBuild,Na=M(e=>{let t=ka(ba(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!Ma){let i=t.content.querySelectorAll(`style`),a=Dr(t),o=Or(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),pr&&Ma&&Zn){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!tr||nr)&&(t=xr.import(e,`template`),tr&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return ja}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):rr||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=Gn(e.url);else{let e=xr.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Qn,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return Wn(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?Un(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=P(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ar&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Un(this.importPath)),Un(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return ir&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})),Fa,Ia,La,Ra,za=t((()=>{k(),N(),si(),Fa=class e{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,Ia.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Ia.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,n,r){return t instanceof e?t._cancelAsync():t=new e,t.setConfig(n,r),t}},Ia=new Set,La=function(e){Ia.add(e)},Ra=function(){let e=!!Ia.size;return Ia.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}}));function Ba(e){return So.indexOf(e)>-1}function Va(e){if(!(Ba(e)||e===`touchend`)&&mo&&To&&er)return{passive:!0}}function Ha(e){return Oo[e.localName]||!1}function Ua(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let n=e.getRootNode();if(e.id){let r=n.querySelectorAll(`label[for = '${e.id}']`);for(let e=0;e<r.length;e++)t.push(r[e])}}catch{}}return t}function Wa(e){let t=Eo?[`click`]:So;for(let n=0,r;n<t.length;n++)r=t[n],e?(Do.length=0,document.addEventListener(r,Ao,!0)):document.removeEventListener(r,Ao,!0)}function Ga(e){if(!cr)return;V.mouse.mouseIgnoreJob||Wa(!0);let t=function(){Wa(),V.mouse.target=null,V.mouse.mouseIgnoreJob=null};V.mouse.target=jo(e)[0],V.mouse.mouseIgnoreJob=Fa.debounce(V.mouse.mouseIgnoreJob,oi.after(xo),t)}function Ka(e){let t=e.type;if(!Ba(t))return!1;if(t===`mousemove`){let t=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!wo&&(t=Co[e.which]||0),!!(t&1)}else return(e.button===void 0?0:e.button)===0}function qa(e){if(e.type===`click`){if(e.detail===0)return!0;let t=B(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let n=t.getBoundingClientRect(),r=e.pageX,i=e.pageY;return!(r>=n.left&&r<=n.right&&i>=n.top&&i<=n.bottom)}return!1}function Ja(e){let t=`auto`,n=jo(e);for(let e=0,r;e<n.length;e++)if(r=n[e],r[_o]){t=r[_o];break}return t}function Ya(e,t,n){e.movefn=t,e.upfn=n,document.addEventListener(`mousemove`,t),document.addEventListener(`mouseup`,n)}function Xa(e){document.removeEventListener(`mousemove`,e.movefn),document.removeEventListener(`mouseup`,e.upfn),e.movefn=null,e.upfn=null}function Za(e,t){let n=document.elementFromPoint(e,t),r=n;for(;r&&r.shadowRoot&&!window.ShadyDOM;){let i=r;if(r=r.shadowRoot.elementFromPoint(e,t),i===r)break;r&&(n=r)}return n}function B(e){let t=jo(e);return t.length>0?t[0]:e.target}function Qa(e){let t,n=e.type,r=e.currentTarget[ho];if(!r)return;let i=r[n];if(i){if(!e[go]&&(e[go]={},n.slice(0,5)===`touch`)){e=e;let t=e.changedTouches[0];if(n===`touchstart`&&e.touches.length===1&&(V.touch.id=t.identifier),V.touch.id!==t.identifier)return;mo||(n===`touchstart`||n===`touchmove`)&&$a(e)}if(t=e[go],!t.skip){for(let n=0,r;n<No.length;n++)r=No[n],i[r.name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(let r=0,a;r<No.length;r++)a=No[r],i[a.name]&&!t[a.name]&&(t[a.name]=!0,a[n](e))}}}function $a(e){let t=e.changedTouches[0],n=e.type;if(n===`touchstart`)V.touch.x=t.clientX,V.touch.y=t.clientY,V.touch.scrollDecided=!1;else if(n===`touchmove`){if(V.touch.scrollDecided)return;V.touch.scrollDecided=!0;let n=Ja(e),r=!1,i=Math.abs(V.touch.x-t.clientX),a=Math.abs(V.touch.y-t.clientY);e.cancelable&&(n===`none`?r=!0:n===`pan-x`?r=a>i:n===`pan-y`&&(r=i>a)),r?e.preventDefault():co(`track`)}}function eo(e,t,n){return Mo[t]?(no(e,t,n),!0):!1}function to(e,t,n){return Mo[t]?(ro(e,t,n),!0):!1}function no(e,t,n){let r=Mo[t],i=r.deps,a=r.name,o=e[ho];o||(e[ho]=o={});for(let t=0,n,r;t<i.length;t++)n=i[t],!(Eo&&Ba(n)&&n!==`click`)&&(r=o[n],r||(o[n]=r={_count:0}),r._count===0&&e.addEventListener(n,Qa,Va(n)),r[a]=(r[a]||0)+1,r._count=(r._count||0)+1);e.addEventListener(t,n),r.touchAction&&oo(e,r.touchAction)}function ro(e,t,n){let r=Mo[t],i=r.deps,a=r.name,o=e[ho];if(o)for(let t=0,n,r;t<i.length;t++)n=i[t],r=o[n],r&&r[a]&&(r[a]=(r[a]||1)-1,r._count=(r._count||1)-1,r._count===0&&e.removeEventListener(n,Qa,Va(n)));e.removeEventListener(t,n)}function io(e){No.push(e);for(let t=0;t<e.emits.length;t++)Mo[e.emits[t]]=e}function ao(e){for(let t=0,n;t<No.length;t++){n=No[t];for(let t=0,r;t<n.emits.length;t++)if(r=n.emits[t],r===e)return n}return null}function oo(e,t){mo&&e instanceof HTMLElement&&R.run(()=>{e.style.touchAction=t}),e[_o]=t}function so(e,t,n){let r=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(r.detail=n,P(e).dispatchEvent(r),r.defaultPrevented){let e=n.preventer||n.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function co(e){let t=ao(e);t.info&&(t.info.prevent=!0)}function lo(e,t,n,r){t&&so(t,e,{x:n.clientX,y:n.clientY,sourceEvent:n,preventer:r,prevent:function(e){return co(e)}})}function uo(e,t,n){if(e.prevent)return!1;if(e.started)return!0;let r=Math.abs(e.x-t),i=Math.abs(e.y-n);return r>=yo||i>=yo}function fo(e,t,n){if(!t)return;let r=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],a=i.x-e.x,o=i.y-e.y,s,c=0;r&&(s=i.x-r.x,c=i.y-r.y),so(t,`track`,{state:e.state,x:n.clientX,y:n.clientY,dx:a,dy:o,ddx:s,ddy:c,sourceEvent:n,hover:function(){return Za(n.clientX,n.clientY)}})}function po(e,t,n){let r=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),a=B(n||t);!a||ko[a.localName]&&a.hasAttribute(`disabled`)||(isNaN(r)||isNaN(i)||r<=vo&&i<=vo||qa(t))&&(e.prevent||so(a,`tap`,{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:n}))}var mo,ho,go,_o,vo,yo,bo,xo,So,Co,wo,To,Eo,Do,Oo,ko,Ao,V,jo,Mo,No,Po=t((()=>{k(),si(),za(),j(),F(),mo=typeof document.head.style.touchAction==`string`,ho=`__polymerGestures`,go=`__polymerGesturesHandled`,_o=`__polymerGesturesTouchAction`,vo=25,yo=5,bo=2,xo=2500,So=[`mousedown`,`mousemove`,`mouseup`,`click`],Co=[0,1,4,2],wo=(function(){try{return new MouseEvent(`test`,{buttons:1}).buttons===1}catch{return!1}})(),To=!1,(function(){try{let e=Object.defineProperty({},"passive",{get(){To=!0}});window.addEventListener(`test`,null,e),window.removeEventListener(`test`,null,e)}catch{}})(),Eo=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Do=[],Oo={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},ko={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0},Ao=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[go]={skip:!0},e.type===`click`)){let t=!1,n=jo(e);for(let e=0;e<n.length;e++){if(n[e].nodeType===Node.ELEMENT_NODE){if(n[e].localName===`label`)Do.push(n[e]);else if(Ha(n[e])){let r=Ua(n[e]);for(let e=0;e<r.length;e++)t||=Do.indexOf(r[e])>-1}}if(n[e]===V.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}},V={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}},cr&&document.addEventListener(`touchend`,Ga,To?{passive:!0}:!1),jo=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Mo={},No=[],io({name:`downup`,deps:[`mousedown`,`touchstart`,`touchend`],flow:{start:[`mousedown`,`touchstart`],end:[`mouseup`,`touchend`]},emits:[`down`,`up`],info:{movefn:null,upfn:null},reset:function(){Xa(this.info)},mousedown:function(e){if(!Ka(e))return;let t=B(e),n=this;Ya(this.info,function(e){Ka(e)||(lo(`up`,t,e),Xa(n.info))},function(e){Ka(e)&&lo(`up`,t,e),Xa(n.info)}),lo(`down`,t,e)},touchstart:function(e){lo(`down`,B(e),e.changedTouches[0],e)},touchend:function(e){lo(`up`,B(e),e.changedTouches[0],e)}}),io({name:`track`,touchAction:`none`,deps:[`mousedown`,`touchstart`,`touchmove`,`touchend`],flow:{start:[`mousedown`,`touchstart`],end:[`mouseup`,`touchend`]},emits:[`track`],info:{x:0,y:0,state:`start`,started:!1,moves:[],addMove:function(e){this.moves.length>bo&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state=`start`,this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,Xa(this.info)},mousedown:function(e){if(!Ka(e))return;let t=B(e),n=this,r=function(e){let r=e.clientX,i=e.clientY;uo(n.info,r,i)&&(n.info.state=n.info.started?e.type===`mouseup`?`end`:`track`:`start`,n.info.state===`start`&&co(`tap`),n.info.addMove({x:r,y:i}),Ka(e)||(n.info.state=`end`,Xa(n.info)),t&&fo(n.info,t,e),n.info.started=!0)};Ya(this.info,r,function(e){n.info.started&&r(e),Xa(n.info)}),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=B(e),n=e.changedTouches[0],r=n.clientX,i=n.clientY;uo(this.info,r,i)&&(this.info.state===`start`&&co(`tap`),this.info.addMove({x:r,y:i}),fo(this.info,t,n),this.info.state=`track`,this.info.started=!0)},touchend:function(e){let t=B(e),n=e.changedTouches[0];this.info.started&&(this.info.state=`end`,this.info.addMove({x:n.clientX,y:n.clientY}),fo(this.info,t,n))}}),io({name:`tap`,deps:[`mousedown`,`click`,`touchstart`,`touchend`],flow:{start:[`mousedown`,`touchstart`],end:[`click`,`touchend`]},emits:[`tap`],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){Ka(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){Ka(e)&&po(this.info,e)},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){po(this.info,e.changedTouches[0],e)}})})),Fo,Io=t((()=>{k(),N(),Po(),Fo=M(e=>{class t extends e{_addEventListenerToNode(e,t,n){eo(e,t,n)||super._addEventListenerToNode(e,t,n)}_removeEventListenerFromNode(e,t,n){to(e,t,n)||super._removeEventListenerFromNode(e,t,n)}}return t})}));function Lo(){Yo=document.documentElement.getAttribute(`dir`)}function Ro(e){e.__autoDirOptOut||e.setAttribute(`dir`,Yo)}function zo(){Lo(),Yo=document.documentElement.getAttribute(`dir`);for(let e=0;e<qo.length;e++)Ro(qo[e])}function Bo(){Jo&&Jo.takeRecords().length&&zo()}var Vo,Ho,Uo,Wo,Go,Ko,qo,Jo,Yo,Xo,Zo=t((()=>{gi(),N(),Vo=/:host\(:dir\((ltr|rtl)\)\)/g,Ho=`:host([dir="$1"])`,Uo=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Wo=`:host([dir="$2"]) $1`,Go=/:dir\((?:ltr|rtl)\)/,Ko=!!(window.ShadyDOM&&window.ShadyDOM.inUse),qo=[],Jo=null,Yo=``,Xo=M(e=>{Ko||Jo||(Lo(),Jo=new MutationObserver(zo),Jo.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`]}));let t=hi(e);class n extends t{static _processStyleText(e,n){return e=t._processStyleText.call(this,e,n),!Ko&&Go.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(Vo,Ho),t=t.replace(Uo,Wo),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute(`dir`)}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Bo(),qo.push(this),Ro(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){let e=qo.indexOf(this);e>-1&&qo.splice(e,1)}}}return n.__activateDir=!1,n})})),Qo=t((()=>{k()}));function $o(){document.body.removeAttribute(`unresolved`)}var es=t((()=>{document.readyState===`interactive`||document.readyState===`complete`?$o():window.addEventListener(`DOMContentLoaded`,$o)}));function ts(e,t,n){return{index:e,removed:t,addedCount:n}}function ns(e,t,n,r,i,a){let o=a-i+1,s=n-t+1,c=Array(o);for(let e=0;e<o;e++)c[e]=Array(s),c[e][0]=e;for(let e=0;e<s;e++)c[0][e]=e;for(let n=1;n<o;n++)for(let a=1;a<s;a++)if(cs(e[t+a-1],r[i+n-1]))c[n][a]=c[n-1][a-1];else{let e=c[n-1][a]+1,t=c[n][a-1]+1;c[n][a]=e<t?e:t}return c}function rs(e){let t=e.length-1,n=e[0].length-1,r=e[t][n],i=[];for(;t>0||n>0;){if(t==0){i.push(ds),n--;continue}if(n==0){i.push(fs),t--;continue}let a=e[t-1][n-1],o=e[t-1][n],s=e[t][n-1],c;c=o<s?o<a?o:a:s<a?s:a,c==a?(a==r?i.push(ls):(i.push(us),r=a),t--,n--):c==o?(i.push(fs),t--,r=o):(i.push(ds),n--,r=s)}return i.reverse(),i}function is(e,t,n,r,i,a){let o=0,s=0,c,l=Math.min(n-t,a-i);if(t==0&&i==0&&(o=as(e,r,l)),n==e.length&&a==r.length&&(s=os(e,r,l-o)),t+=o,i+=o,n-=s,a-=s,n-t==0&&a-i==0)return[];if(t==n){for(c=ts(t,[],0);i<a;)c.removed.push(r[i++]);return[c]}else if(i==a)return[ts(t,[],n-t)];let u=rs(ns(e,t,n,r,i,a));c=void 0;let d=[],f=t,p=i;for(let e=0;e<u.length;e++)switch(u[e]){case ls:c&&=(d.push(c),void 0),f++,p++;break;case us:c||=ts(f,[],0),c.addedCount++,f++,c.removed.push(r[p]),p++;break;case ds:c||=ts(f,[],0),c.addedCount++,f++;break;case fs:c||=ts(f,[],0),c.removed.push(r[p]),p++;break}return c&&d.push(c),d}function as(e,t,n){for(let r=0;r<n;r++)if(!cs(e[r],t[r]))return r;return n}function os(e,t,n){let r=e.length,i=t.length,a=0;for(;a<n&&cs(e[--r],t[--i]);)a++;return a}function ss(e,t){return is(e,0,e.length,t,0,t.length)}function cs(e,t){return e===t}var ls,us,ds,fs,ps=t((()=>{k(),ls=0,us=1,ds=2,fs=3}));function ms(e){return e.localName===`slot`}var hs,gs=t((()=>{k(),ps(),si(),F(),hs=class{static getFlattenedNodes(e){let t=P(e);if(ms(e))return e=e,t.assignedNodes({flatten:!0});{let e=[];for(let n=0;n<t.childNodes.length;n++){let r=t.childNodes[n];if(ms(r)){let t=r;e.push(...P(t).assignedNodes({flatten:!0}))}else e.push(r)}return e}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ms(this._target)?this._listenSlots([this._target]):P(this._target).children&&(this._listenSlots(P(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ms(this._target)?this._unlistenSlots([this._target]):P(this._target).children&&(this._unlistenSlots(P(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&=(this._nativeChildrenObserver.disconnect(),null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,R.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let n=e[t];n.addedNodes&&this._listenSlots(n.addedNodes),n.removedNodes&&this._unlistenSlots(n.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),n=ss(t,this._effectiveNodes);for(let t=0,r;t<n.length&&(r=n[t]);t++)for(let t=0,n;t<r.removed.length&&(n=r.removed[t]);t++)e.removedNodes.push(n);for(let r=0,i;r<n.length&&(i=n[r]);r++)for(let n=i.index;n<i.index+i.addedCount;n++)e.addedNodes.push(t[n]);this._effectiveNodes=t;let r=!1;return(e.addedNodes.length||e.removedNodes.length)&&(r=!0,this.callback.call(this._target,e)),r}_listenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];ms(n)&&n.addEventListener(`slotchange`,this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let n=e[t];ms(n)&&n.removeEventListener(`slotchange`,this._boundSchedule)}}}})),_s,vs=t((()=>{k(),za(),_s=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Ra();while(e||t)}}));function ys(e,t){for(let n=0;n<t.length;n++){let r=t[n];e[r]=function(){return this.node[r].apply(this.node,arguments)}}}function bs(e,t){for(let n=0;n<t.length;n++){let r=t[n];Object.defineProperty(e,r,{get:function(){return this.node[r]},configurable:!0})}}function xs(e,t){for(let n=0;n<t.length;n++){let r=t[n];Object.defineProperty(e,r,{get:function(){return this.node[r]},set:function(e){this.node[r]=e},configurable:!0})}}var Ss,Cs,ws,H,Ts,Es,U,Ds=t((()=>{if(k(),F(),j(),gs(),vs(),za(),Ss=Element.prototype,Cs=Ss.matches||Ss.matchesSelector||Ss.mozMatchesSelector||Ss.msMatchesSelector||Ss.oMatchesSelector||Ss.webkitMatchesSelector,ws=function(e,t){return Cs.call(e,t)},H=class{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new hs(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(P(this.node).contains(e))return!0;let t=e,n=e.ownerDocument;for(;t&&t!==n&&t!==this.node;)t=P(t).parentNode||P(t).host;return t===this.node}getOwnerRoot(){return P(this.node).getRootNode()}getDistributedNodes(){return this.node.localName===`slot`?P(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=P(this.node).assignedSlot;for(;t;)e.push(t),t=P(t).assignedSlot;return e}importNode(e,t){return P(this.node instanceof Document?this.node:this.node.ownerDocument).importNode(e,t)}getEffectiveChildNodes(){return hs.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),n=[];for(let r=0,i=t.length,a;r<i&&(a=t[r]);r++)a.nodeType===Node.ELEMENT_NODE&&ws(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement===void 0?e.activeElement:e._activeElement}},Ts=class{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}},H.prototype.cloneNode,H.prototype.appendChild,H.prototype.insertBefore,H.prototype.removeChild,H.prototype.replaceChild,H.prototype.setAttribute,H.prototype.removeAttribute,H.prototype.querySelector,H.prototype.querySelectorAll,H.prototype.parentNode,H.prototype.firstChild,H.prototype.lastChild,H.prototype.nextSibling,H.prototype.previousSibling,H.prototype.firstElementChild,H.prototype.lastElementChild,H.prototype.nextElementSibling,H.prototype.previousElementSibling,H.prototype.childNodes,H.prototype.children,H.prototype.classList,H.prototype.textContent,H.prototype.innerHTML,Es=H,window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(H.prototype).forEach(t=>{t!=`activeElement`&&(e.prototype[t]=H.prototype[t])}),bs(e.prototype,[`classList`]),Es=e,Object.defineProperties(Ts.prototype,{localTarget:{get(){let e=this.event.currentTarget,t=e&&U(e).getOwnerRoot(),n=this.path;for(let e=0;e<n.length;e++){let r=n[e];if(U(r).getOwnerRoot()===t)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else ys(H.prototype,[`cloneNode`,`appendChild`,`insertBefore`,`removeChild`,`replaceChild`,`setAttribute`,`removeAttribute`,`querySelector`,`querySelectorAll`,`attachShadow`]),bs(H.prototype,[`parentNode`,`firstChild`,`lastChild`,`nextSibling`,`previousSibling`,`firstElementChild`,`lastElementChild`,`nextElementSibling`,`previousElementSibling`,`childNodes`,`children`,`classList`,`shadowRoot`]),xs(H.prototype,[`textContent`,`innerHTML`,`className`]);U=function(e){if(e||=document,e instanceof Es||e instanceof Ts)return e;let t=e.__domApi;return t||(t=e instanceof Event?new Ts(e):new Es(e),e.__domApi=t),t}}));function Os(e,t){return P(e).getRootNode()===t}function ks(e,t=!1){if(!As||!js||!As.handlesDynamicScoping)return null;let n=js.ScopingShim;if(!n)return null;let r=n.scopeForNode(e),i=P(e).getRootNode(),a=e=>{if(!Os(e,i))return;let t=Array.from(As.nativeMethods.querySelectorAll.call(e,`*`));t.push(e);for(let e=0;e<t.length;e++){let a=t[e];if(!Os(a,i))continue;let o=n.currentScopeForNode(a);o!==r&&(o!==``&&n.unscopeNode(a,o),n.scopeNode(a,r))}};if(a(e),t){let t=new MutationObserver(e=>{for(let t=0;t<e.length;t++){let n=e[t];for(let e=0;e<n.addedNodes.length;e++){let t=n.addedNodes[e];t.nodeType===Node.ELEMENT_NODE&&a(t)}}});return t.observe(e,{childList:!0,subtree:!0}),t}else return null}var As,js,Ms=t((()=>{k(),F(),As=window.ShadyDOM,js=window.ShadyCSS})),Ns,Ps,Fs=t((()=>{Pa(),N(),F(),Ns=`disable-upgrade`,Ps=e=>{for(;e;){let t=Object.getOwnPropertyDescriptor(e,`observedAttributes`);if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]},M(e=>{let t=Na(e),n=Ps(t);class r extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return n.call(this).concat(Ns)}_initializeProperties(){this.hasAttribute(Ns)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}attributeChangedCallback(e,t,n,r){e==Ns?this.__isUpgradeDisabled&&n==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,P(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(e,t,n,r)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return r})})),Is,Ls,Rs,zs=t((()=>{Hn(),Pa(),Io(),Zo(),N(),Qo(),es(),Ds(),Po(),za(),si(),Kr(),F(),Ms(),j(),Fs(),Da(),Is=`disable-upgrade`,Ls=window.ShadyCSS,Rs=M(e=>{let t=Fo(Na(e)),n=Ma?t:Xo(t),r=Ps(n),i={x:`pan-x`,y:`pan-y`,none:`none`,all:`auto`};class a extends n{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(e,t,n){(this.__dataAttributes&&this.__dataAttributes[e]||e===Is)&&this.attributeChangedCallback(e,t,n,null)}setAttribute(e,t){if(fr&&!this._legacyForceObservedAttributes){let n=this.getAttribute(e);super.setAttribute(e,t),this.__attributeReaction(e,n,String(t))}else super.setAttribute(e,t)}removeAttribute(e){if(fr&&!this._legacyForceObservedAttributes){let t=this.getAttribute(e);super.removeAttribute(e),this.__attributeReaction(e,t,null)}else super.removeAttribute(e)}static get observedAttributes(){return fr&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))||(this.__observedAttributes=[],wa(this.prototype)),this.__observedAttributes):r.call(this).concat(Is)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(e){return super._canApplyPropertyDefault(e)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(e))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(e,t,n,r){t!==n&&(e==Is?this.__isUpgradeDisabled&&n==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,P(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(e,t,n,r),this.attributeChanged(e,t,n)))}attributeChanged(e,t,n){}_initializeProperties(){if(rr&&this.hasAttribute(Is))this.__isUpgradeDisabled=!0;else{let e=Object.getPrototypeOf(this);e.hasOwnProperty(JSCompiler_renameProperty(`__hasRegisterFinished`,e))||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),fr&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){let e=this.attributes;for(let t=0,n=e.length;t<n;t++){let n=e[t];this.__attributeReaction(n.name,null,n.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,n){this._propertyToAttribute(e,t,n)}serializeValueToAttribute(e,t,n){this._valueToNodeAttribute(n||this,e,t)}extend(e,t){if(!(e&&t))return e||t;let n=Object.getOwnPropertyNames(t);for(let r=0,i;r<n.length&&(i=n[r]);r++){let n=Object.getOwnPropertyDescriptor(t,i);n&&Object.defineProperty(e,i,n)}return e}mixin(e,t){for(let n in t)e[n]=t[n];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,n){n||={},t??={};let r=new Event(e,{bubbles:n.bubbles===void 0?!0:n.bubbles,cancelable:!!n.cancelable,composed:n.composed===void 0?!0:n.composed});return r.detail=t,P(n.node||this).dispatchEvent(r),r}listen(e,t,n){e||=this;let r=this.__boundListeners||=new WeakMap,i=r.get(e);i||(i={},r.set(e,i));let a=t+n;i[a]||(i[a]=this._addMethodEventListenerToNode(e,t,n,this))}unlisten(e,t,n){e||=this;let r=this.__boundListeners&&this.__boundListeners.get(e),i=t+n,a=r&&r[i];a&&(this._removeEventListenerFromNode(e,t,a),r[i]=null)}setScrollDirection(e,t){oo(t||this,i[e]||`auto`)}$$(e){return this.root.querySelector(e)}get domHost(){let e=P(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){let e=U(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return U(this).getEffectiveChildNodes()}queryDistributedElements(e){return U(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let n=0,r;r=e[n];n++)r.nodeType!==Node.COMMENT_NODE&&t.push(r.textContent);return t.join(``)}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||`slot`);return t?U(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}isLightDescendant(e){let t=this;return t!==e&&P(t).contains(e)&&P(t).getRootNode()===P(e).getRootNode()}isLocalDescendant(e){return this.root===P(e).getRootNode()}scopeSubtree(e,t=!1){return ks(e,t)}getComputedStyleValue(e){return Ls.getComputedStyleValue(this,e)}debounce(e,t,n){return this._debouncers=this._debouncers||{},this._debouncers[e]=Fa.debounce(this._debouncers[e],n>0?oi.after(n):R,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!!(t&&t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?oi.run(e.bind(this),t):~R.run(e.bind(this))}cancelAsync(e){e<0?R.cancel(~e):oi.cancel(e)}create(e,t){let n=document.createElement(e);if(t)if(n.setProperties)n.setProperties(t);else for(let e in t)n[e]=t[e];return n}elementMatches(e,t){return ws(t||this,e)}toggleAttribute(e,t){let n=this;return arguments.length===3&&(n=arguments[2]),arguments.length==1&&(t=!n.hasAttribute(e)),t?(P(n).setAttribute(e,``),!0):(P(n).removeAttribute(e),!1)}toggleClass(e,t,n){n||=this,arguments.length==1&&(t=!n.classList.contains(e)),t?n.classList.add(e):n.classList.remove(e)}transform(e,t){t||=this,t.style.webkitTransform=e,t.style.transform=e}translate3d(e,t,n,r){r||=this,this.transform(`translate3d(`+e+`,`+t+`,`+n+`)`,r)}arrayDelete(e,t){let n;if(Array.isArray(e)){if(n=e.indexOf(t),n>=0)return e.splice(n,1)}else if(n=L(this,e).indexOf(t),n>=0)return this.splice(e,n,1);return null}_logger(e,t){switch(Array.isArray(t)&&t.length===1&&Array.isArray(t[0])&&(t=t[0]),e){case`log`:case`warn`:case`error`:console[e](...t)}}_log(...e){this._logger(`log`,e)}_warn(...e){this._logger(`warn`,e)}_error(...e){this._logger(`error`,e)}_logf(e,...t){return[`[%s::%s]`,this.is,e,...t]}}return a.prototype.is=``,a})}));function Bs(e,t,n){let r=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let a=0;a<i.length;a++){let o=i[a];if(!(o in n))if(r)t[o]=e[o];else{let n=Object.getOwnPropertyDescriptor(e,o);n&&(n.configurable=!0,Object.defineProperty(t,o,n))}}}function Vs(e,t,n){for(let r=0;r<t.length;r++)Hs(e,t[r],n,Js)}function Hs(e,t,n,r){Bs(t,e,r);for(let e in Ks)t[e]&&(n[e]=n[e]||[],n[e].push(t[e]))}function Us(e,t,n){t||=[];for(let r=e.length-1;r>=0;r--){let i=e[r];i?Array.isArray(i)?Us(i,t):t.indexOf(i)<0&&(!n||n.indexOf(i)<0)&&t.unshift(i):console.warn(`behavior is null, check for missing or 404 import`)}return t}function Ws(e,t){for(let n in t){let r=e[n],i=t[n];!(`value`in i)&&r&&`value`in r?e[n]=Object.assign({value:r.value},i):e[n]=i}}function Gs(e,t,n){let r,i={};class a extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`generatedFrom`,this)))t._finalizeClass.call(this);else{if(r)for(let e=0,t;e<r.length;e++)t=r[e],t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){let t={};if(r)for(let e=0;e<r.length;e++)Ws(t,r[e].properties);return Ws(t,e.properties),t}static get observers(){let t=[];if(r)for(let e=0,n;e<r.length;e++)n=r[e],n.observers&&(t=t.concat(n.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();let e=i.created;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}_registered(){let e=a.prototype;if(!e.hasOwnProperty(JSCompiler_renameProperty(`__hasRegisterFinished`,e))){e.__hasRegisterFinished=!0,super._registered(),rr&&o(e);let t=Object.getPrototypeOf(this),n=i.beforeRegister;if(n)for(let e=0;e<n.length;e++)n[e].call(t);if(n=i.registered,n)for(let e=0;e<n.length;e++)n[e].call(t)}}_applyListeners(){super._applyListeners();let e=i.listeners;if(e)for(let t=0;t<e.length;t++){let n=e[t];if(n)for(let e in n)this._addMethodEventListenerToNode(this,e,n[e])}}_ensureAttributes(){let e=i.hostAttributes;if(e)for(let t=e.length-1;t>=0;t--){let n=e[t];for(let e in n)this._ensureAttribute(e,n[e])}super._ensureAttributes()}ready(){super.ready();let e=i.ready;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();let e=i.attached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();let e=i.detached;if(e)for(let t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,n){super.attributeChanged();let r=i.attributeChanged;if(r)for(let i=0;i<r.length;i++)r[i].call(this,e,t,n)}}if(n){Array.isArray(n)||(n=[n]);let e=t.prototype.behaviors;r=Us(n,null,e),a.prototype.behaviors=e?e.concat(n):r}let o=t=>{r&&Vs(t,r,i),Hs(t,e,i,qs)};return rr||o(a.prototype),a.generatedFrom=e,a}var Ks,qs,Js,Ys,Xs,Zs=t((()=>{zs(),j(),Ks={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},qs={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Js=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},qs),Ys=Rs(HTMLElement),Xs=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let n=t?t(Ys):Ys;return n=Gs(e,n,e.behaviors),n.is=n.prototype.is=e.is,n}})),Qs,$s=t((()=>{Zs(),k(),Qs=function(e){let t;return t=typeof e==`function`?e:Qs.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t},Qs.Class=Xs}));function ec(e,t,n,r,i){let a;i&&(a=typeof n==`object`&&!!n,a&&(r=e.__dataTemp[t]));let o=r!==n&&(r===r||n===n);return a&&o&&(e.__dataTemp[t]=n),o}var tc,nc,rc=t((()=>{N(),tc=M(e=>{class t extends e{_shouldPropertyChange(e,t,n){return ec(this,e,t,n,!0)}}return t}),nc=M(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,n){return ec(this,e,t,n,this.mutableData)}}return t}),tc._mutablePropertyChange=ec}));function ic(){return _c}function ac(e,t){_c=e,Object.setPrototypeOf(e,t.prototype),new t,_c=null}function oc(e,t){for(let n=0;n<t.length;n++){let r=t[n];if(!!e!=!!r.__hideTemplateChildren__)if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=``):r.textContent=r.__polymerTextContent__;else if(r.localName===`slot`)if(e)r.__polymerReplaced__=document.createComment(`hidden-slot`),P(P(r).parentNode).replaceChild(r.__polymerReplaced__,r);else{let e=r.__polymerReplaced__;e&&P(P(e).parentNode).replaceChild(r,e)}else r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display=`none`):r.style.display=r.__polymerDisplay__);r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}function sc(e){let t=e.__dataHost;return t&&t._methodHost||t}function cc(e,t,n){let r=n.mutableData?xc:W;mc.mixin&&(r=mc.mixin(r));let i=class extends r{};return i.prototype.__templatizeOptions=n,i.prototype._bindTemplate(e),dc(i,e,t,n),i}function lc(e,t,n,r){let i=n.forwardHostProp;if(i&&t.hasHostProps){let a=e.localName==`template`,o=t.templatizeTemplateClass;if(!o){if(a){let e=n.mutableData?yc:vc;class r extends e{}o=t.templatizeTemplateClass=r}else{let n=e.constructor;class r extends n{}o=t.templatizeTemplateClass=r}let s=t.hostProps;for(let e in s)o.prototype._addPropertyEffect(`_host_`+e,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:uc(e,i)}),o.prototype._createNotifyingProperty(`_host_`+e);ir&&r&&hc(t,n,r)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),a)ac(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);let n=t.hostProps;for(let t in n)if(t=`_host_`+t,t in e){let n=e[t];delete e[t],e.__data[t]=n}}}}function uc(e,t){return function(e,n,r){t.call(e.__templatizeOwner,n.substring(6),r[n])}}function dc(e,t,n,r){let i=n.hostProps||{};for(let t in r.instanceProps){delete i[t];let n=r.notifyInstanceProp;n&&e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:fc(t,n)})}if(r.forwardHostProp&&t.__dataHost)for(let t in i)n.hasHostProps||=!0,e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:pc()})}function fc(e,t){return function(e,n,r){t.call(e.__templatizeOwner,e,n,r[n])}}function pc(){return function(e,t,n){e.__dataHost._setPendingPropertyOrPath(`_host_`+t,n[t],!0,!0)}}function mc(e,t,n){if(tr&&!sc(e))throw Error(`strictTemplatePolicy: template owner not trusted`);if(n||={},e.__templatizeOwner)throw Error(`A <template> can only be templatized once`);e.__templatizeOwner=t;let r=(t?t.constructor:W)._parseTemplate(e),i=r.templatizeInstanceClass;i||(i=cc(e,r,n),r.templatizeInstanceClass=i);let a=sc(e);lc(e,r,n,a);let o=class extends i{};return o.prototype._methodHost=a,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=r.hostProps,o=o,o}function hc(e,t,n){let r=n.constructor._properties,{propertyEffects:i}=e,{instanceProps:a}=t;for(let e in i)if(!r[e]&&!(a&&a[e])){let t=i[e];for(let n=0;n<t.length;n++){let{part:r}=t[n].info;if(!(r.signature&&r.signature.static)){console.warn(`Property '${e}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function gc(e,t){let n;for(;t;)if(n=t.__dataHost?t:t.__templatizeInstance)if(n.__dataHost!=e)t=n.__dataHost;else return n;else t=P(t).parentNode;return null}var _c,vc,yc,bc,W,xc,Sc=t((()=>{k(),Sa(),rc(),j(),F(),_c=null,ic.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:ic,writable:!0}}),vc=ba(ic),yc=tc(vc),bc=ba(class{}),W=class extends bc{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=[];this.children=t;for(let e=this.root.firstChild;e;e=e.nextSibling)t.push(e),e.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost[`_host_`+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,n(e)});else{let r=this.__dataHost.__dataHost;r&&r._addEventListenerToNode(e,t,n)}}_showHideChildren(e){oc(e,this.children)}_setUnmanagedPropertyToNode(e,t,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&t==`textContent`?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,t,n)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}},W.prototype.__dataHost,W.prototype.__templatizeOptions,W.prototype._methodHost,W.prototype.__templatizeOwner,W.prototype.__hostProps,xc=tc(W)})),Cc=t((()=>{Sc()}));function wc(){if(rr&&!Xn){if(!Tc){Tc=!0;let e=document.createElement(`style`);e.textContent=`dom-bind,dom-if,dom-repeat{display:none;}`,document.head.appendChild(e)}return!0}return!1}var Tc,Ec=t((()=>{j(),Tc=!1})),Dc,Oc,kc=t((()=>{k(),Sa(),rc(),Io(),j(),F(),Ec(),Dc=Fo(nc(ba(HTMLElement))),Oc=class extends Dc{static get observedAttributes(){return[`mutable-data`]}constructor(){if(super(),tr)throw Error(`strictTemplatePolicy: dom-bind not allowed`);this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,t,n,r){this.mutableData=!0}connectedCallback(){wc()||(this.style.display=`none`),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){P(P(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e||=this.querySelector(`template`),!e){let t=new MutationObserver(()=>{if(e=this.querySelector(`template`),e)t.disconnect(),this.render();else throw Error(`dom-bind requires a <template> child`)});t.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent(`dom-change`,{bubbles:!0,composed:!0}))}},customElements.define(`dom-bind`,Oc)}));function Ac(e){if(e instanceof Nc)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function jc(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Nc)return Ac(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var Mc,Nc,Pc,Fc,Ic=t((()=>{k(),Mc=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),Nc=class{constructor(e,t){Fc(e,t);let n=t.reduce((t,n,r)=>t+Ac(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},Pc=function(e,...t){Fc(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+jc(n)+e[r+1],e[0]);return Mc&&(r=Mc.createHTML(r)),n.innerHTML=r,n},Fc=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),Lc,Rc=t((()=>{Pa(),Ic(),Lc=Na(HTMLElement)})),zc,Bc,Vc=t((()=>{Rc(),Sc(),za(),vs(),rc(),Kr(),si(),F(),Ec(),j(),zc=nc(Lc),Bc=class extends zc{static get is(){return`dom-repeat`}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:`item`},indexAs:{type:String,value:`index`},itemsIndexAs:{type:String,value:`itemsIndex`},sort:{type:Function,observer:`__sortChanged`},filter:{type:Function,observer:`__filterChanged`},observe:{type:String,observer:`__observeChanged`},delay:Number,renderedItemCount:{type:Number,notify:!dr,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:`__computeFrameTime(targetFramerate)`},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return[`__itemsChanged(items.*)`]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),wc()||(this.style.display=`none`),this.__isDetached){this.__isDetached=!1;let e=P(P(this).parentNode);for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){let e=this,t=this.template=e._templateInfo?e:this.querySelector(`template`);if(!t){let e=new MutationObserver(()=>{if(this.querySelector(`template`))e.disconnect(),this.__render();else throw Error(`dom-repeat requires a <template> child`)});return e.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=mc(t,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(e,t){let n=this.__instances;for(let r=0,i;r<n.length&&(i=n[r]);r++)i.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,n){if(Hr(this.as,t)){let r=e[this.itemsIndexAs];t==this.as&&(this.items[r]=n);let i=Vr(this.as,`${JSCompiler_renameProperty(`items`,this)}.${r}`,t);this.notifyPath(i,n)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e==`string`){let t=e,n=this.__getMethodHost();return function(){return n[t].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(`.*`,`.`).split(` `)}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let n=0;n<t.length;n++)e.indexOf(t[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path===`items`&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,t=0){this.__renderDebouncer=Fa.debounce(this.__renderDebouncer,t>0?oi.after(t):R,e.bind(this)),La(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),_s()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[],t=this.__sortAndFilterItems(e),n=this.__calculateLimit(t.length);this.__updateInstances(e,n,t),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!dr||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent(`dom-change`,{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let t=Array(e.length);for(let n=0;n<e.length;n++)t[n]=n;return this.__filterFn&&(t=t.filter((t,n,r)=>this.__filterFn(e[t],n,r))),this.__sortFn&&t.sort((t,n)=>this.__sortFn(e[t],e[n])),t}__calculateLimit(e){let t=e,n=this.__instances.length;if(this.initialCount){let r;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(t=Math.min(e,this.initialCount),r=Math.max(t-n,0),this.__chunkCount=r||1):(r=Math.min(Math.max(e-n,0),this.__chunkCount),t=Math.min(n+r,e)),this.__shouldMeasureChunk=r===this.__chunkCount,this.__shouldContinueChunking=t<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,t}__continueChunking(){if(this.__shouldMeasureChunk){let e=performance.now()-this.__renderStartTime,t=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*t)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,t,n){let r=this.__itemsIdxToInstIdx={},i;for(i=0;i<t;i++){let t=this.__instances[i],a=n[i],o=e[a];r[a]=i,t?(t._setPendingProperty(this.as,o),t._setPendingProperty(this.indexAs,i),t._setPendingProperty(this.itemsIndexAs,a),t._flushProperties()):this.__insertInstance(o,i,a)}for(let e=this.__instances.length-1;e>=i;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e],n=P(t.root);for(let e=0;e<t.children.length;e++){let r=t.children[e];n.appendChild(r)}return t}__attachInstance(e,t){let n=this.__instances[e];t.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,t,n){let r={};return r[this.as]=e,r[this.indexAs]=t,r[this.itemsIndexAs]=n,new this.__ctor(r)}__insertInstance(e,t,n){let r=this.__stampInstance(e,t,n),i=this.__instances[t+1],a=i?i.children[0]:this;return P(P(this).parentNode).insertBefore(r.root,a),this.__instances[t]=r,r}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let n=e.slice(6),r=n.indexOf(`.`),i=r<0?n:n.substring(0,r);if(i==parseInt(i,10)){let e=r<0?``:n.substring(r+1);this.__handleObservedPaths(e);let a=this.__itemsIdxToInstIdx[i],o=this.__instances[a];if(o){let n=this.as+(e?`.`+e:``);o._setPendingPropertyOrPath(n,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return gc(this.template,e)}},customElements.define(Bc.is,Bc)})),Hc,Uc,Wc,Gc,Kc=t((()=>{Rc(),za(),vs(),si(),Kr(),F(),Ec(),j(),Sc(),Hc=class extends Lc{static get is(){return`dom-if`}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:`__debounceRender`},restamp:{type:Boolean,observer:`__debounceRender`},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=Fa.debounce(this.__renderDebouncer,R,()=>this.__render()),La(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();let e=P(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!P(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),wc()||(this.style.display=`none`),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){let e=this,t=e._templateInfo?e:P(e).querySelector(`template`);if(!t){let e=new MutationObserver(()=>{if(P(this).querySelector(`template`))e.disconnect(),this.__render();else throw Error(`dom-if requires a <template> child`)});return e.observe(this,{childList:!0}),!1}this.__template=t}return!0}__ensureInstance(){let e=P(this).parentNode;if(this.__hasInstance()){let t=this.__getInstanceNodes();if(t&&t.length&&P(this).previousSibling!==t[t.length-1])for(let n=0,r;n<t.length&&(r=t[n]);n++)P(e).insertBefore(r,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){_s()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!dr||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent(`dom-change`,{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}},Uc=class extends Hc{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){let t=this.__dataHost||this;if(tr&&!this.__dataHost)throw Error(`strictTemplatePolicy: template owner not trusted`);let n=t._bindTemplate(this.__template,!0);n.runEffects=(e,t,n)=>{let r=this.__syncInfo;if(this.if)r&&(this.__syncInfo=null,this._showHideChildren(),t=Object.assign(r.changedProps,t)),e(t,n);else if(this.__instance)if(r||=this.__syncInfo={runEffects:e,changedProps:{}},n)for(let e in t){let t=I(e);r.changedProps[t]=this.__dataHost[t]}else Object.assign(r.changedProps,t)},this.__instance=t._stampTemplate(this.__template,n),P(e).insertBefore(this.__instance,this)}__syncHostProperties(){let e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){let e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,oc(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}},Wc=class extends Hc{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||=mc(this.__template,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[I(e)]=!0))}}),this.__instance=new this.__ctor,P(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=P(e[0]).parentNode;if(t){t=P(t);for(let n=0,r;n<e.length&&(r=e[n]);n++)t.removeChild(r)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__instance._flushProperties()}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}},Gc=ur?Uc:Wc,customElements.define(Gc.is,Gc)})),qc,Jc,Yc,Xc=t((()=>{Rc(),N(),ps(),Pa(),qc=M(e=>{let t=Na(e);class n extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return[`__updateSelection(multi, items.*)`]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let n=t.path;if(n==JSCompiler_renameProperty(`items`,this)){let n=t.base||[],r=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),r){let e=ss(n,r);this.__applySplices(e)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==`${JSCompiler_renameProperty(`items`,this)}.splices`)this.__applySplices(t.value.indexSplices);else{let e=n.slice(`${JSCompiler_renameProperty(`items`,this)}.`.length),t=parseInt(e,10);e.indexOf(`.`)<0&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let n=0;n<e.length;n++){let r=e[n];t.forEach((e,n)=>{e<r.index||(e>=r.index+r.removed.length?t.set(n,e+r.addedCount-r.removed.length):t.set(n,-1))});for(let e=0;e<r.addedCount;e++){let n=r.index+e;t.has(this.items[n])&&t.set(this.items[n],n)}}this.__updateLinks();let n=0;t.forEach((e,r)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty(`selected`,this),n,1):this.selected=this.selectedItem=null,t.delete(r)):n++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty(`items`,this)}.${t}`,`${JSCompiler_renameProperty(`selected`,this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty(`selected`,this),`${JSCompiler_renameProperty(`items`,this)}.${e}`),this.linkPaths(JSCompiler_renameProperty(`selectedItem`,this),`${JSCompiler_renameProperty(`items`,this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(t>=0){let e=0;this.__selectedMap.forEach((n,r)=>{t==e++&&this.deselect(r)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths[`${JSCompiler_renameProperty(`items`,this)}.${e}`];if(t)return parseInt(t.slice(`${JSCompiler_renameProperty(`selected`,this)}.`.length),10)}deselect(e){let t=this.__selectedMap.get(e);if(t>=0){this.__selectedMap.delete(e);let n;this.multi&&(n=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty(`selected`,this),n,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty(`selected`,this),t):this.selected=this.selectedItem=t)}}return n}),Jc=qc(Lc),Yc=class extends Jc{static get is(){return`array-selector`}static get template(){return null}},customElements.define(Yc.is,Yc)})),Zc,Qc=t((()=>{zn(),un(),bt(),Zc=new O,window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,n){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,n){},styleSubtree(e,t){Zc.processStyles(),sn(e,t)},styleElement(e){Zc.processStyles()},styleDocument(e){Zc.processStyles(),sn(document.body,e)},getComputedStyleValue(e,t){return cn(e,t)},flushCustomStyles(){},nativeCss:yt,nativeShadow:ht,cssBuild:_t,disableRuntime:vt}),window.ShadyCSS.CustomStyleInterface=Zc})),$c,el,tl,nl=t((()=>{Qc(),Lr(),$c=`include`,el=window.ShadyCSS.CustomStyleInterface,tl=class extends HTMLElement{constructor(){super(),this._style=null,el.addCustomStyle(this)}getStyle(){if(this._style)return this._style;let e=this.querySelector(`style`);if(!e)return null;this._style=e;let t=e.getAttribute($c);return t&&(e.removeAttribute($c),e.textContent=Ar(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}},window.customElements.define(`custom-style`,tl)})),rl=t((()=>{rc(),tc._mutablePropertyChange})),G=t((()=>{zs(),$s(),Cc(),kc(),Vc(),Kc(),Xc(),nl(),rl(),Ic(),Rs(HTMLElement).prototype})),il,al,ol=t((()=>{G(),Ic(),il=Pc`
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
</custom-style>`,il.setAttribute(`style`,`display: none;`),document.head.appendChild(il.content),al=document.createElement(`style`),al.textContent=`[hidden] { display: none !important; }`,document.head.appendChild(al)})),sl,cl=t((()=>{G(),Ic(),sl=Pc`
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
</custom-style>`,sl.setAttribute(`style`,`display: none;`),document.head.appendChild(sl.content)})),ll,ul=t((()=>{G(),cl(),Ic(),ll=Pc`
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
</dom-module>`,ll.setAttribute(`style`,`display: none;`),document.head.appendChild(ll.content)})),dl,fl=t((()=>{G(),Ds(),dl={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:`_disabledChanged`,reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:[`_changedControlState(focused, disabled)`],ready:function(){this.addEventListener(`focus`,this._boundFocusBlurHandler,!0),this.addEventListener(`blur`,this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused(e.type===`focus`)},_disabledChanged:function(e,t){this.setAttribute(`aria-disabled`,e?`true`:`false`),this.style.pointerEvents=e?`none`:``,e?(this._oldTabIndex=this.getAttribute(`tabindex`),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute(`tabindex`):this.setAttribute(`tabindex`,this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}}}));function pl(e,t){var n=``;if(e){var r=e.toLowerCase();r===` `||El.test(r)?n=`space`:Dl.test(r)?n=`esc`:r.length==1?(!t||Cl.test(r))&&(n=r):n=Tl.test(r)?r.replace(`arrow`,``):r==`multiply`?`*`:r}return n}function ml(e){var t=``;return e&&(e in bl?t=bl[e]:wl.test(e)?(e=parseInt(e.replace(`U+`,`0x`),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function hl(e){var t=``;return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?`f`+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):xl[e]),t}function gl(e,t){return e.key?pl(e.key,t):e.detail&&e.detail.key?pl(e.detail.key,t):ml(e.keyIdentifier)||hl(e.keyCode)||``}function _l(e,t){return gl(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function vl(e){return e.length===1?{combo:e,key:e,event:`keydown`}:e.split(`+`).reduce(function(e,t){var n=t.split(`:`),r=n[0],i=n[1];return r in Sl?(e[Sl[r]]=!0,e.hasModifiers=!0):(e.key=r,e.event=i||`keydown`),e},{combo:e.split(`:`).shift()})}function yl(e){return e.trim().split(` `).map(function(e){return vl(e)})}var bl,xl,Sl,Cl,wl,Tl,El,Dl,Ol,kl=t((()=>{G(),bl={"U+0008":`backspace`,"U+0009":`tab`,"U+001B":`esc`,"U+0020":`space`,"U+007F":`del`},xl={8:`backspace`,9:`tab`,13:`enter`,27:`esc`,33:`pageup`,34:`pagedown`,35:`end`,36:`home`,32:`space`,37:`left`,38:`up`,39:`right`,40:`down`,46:`del`,106:`*`},Sl={shift:`shiftKey`,ctrl:`ctrlKey`,alt:`altKey`,meta:`metaKey`},Cl=/[a-z0-9*]/,wl=/U\+/,Tl=/^arrow/,El=/^space(bar)?/,Dl=/^escape$/,Ol={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:[`_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)`],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var n=yl(t),r=0;r<n.length;++r)if(_l(n[r],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return e.indexOf(this.keyBindings)===-1&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var n=e[0].hasModifiers;return n===t[0].hasModifiers?0:n?-1:1})},_addKeyBinding:function(e,t){yl(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],n=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,n]),this.keyEventTarget.addEventListener(e,n)},this)},_unlistenKeyEventListeners:function(){for(var e,t,n,r;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],n=e[1],r=e[2],t.removeEventListener(n,r)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var n=0;n<e.length;n++){var r=e[n][0],i=e[n][1];if(_l(r,t)&&(this._triggerKeyHandler(r,i,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,n){var r=Object.create(e);r.keyboardEvent=n;var i=new CustomEvent(e.event,{detail:r,cancelable:!0});this[t].call(this,i),i.defaultPrevented&&n.preventDefault()}}})),Al,jl,Ml=t((()=>{G(),fl(),kl(),Ds(),Al={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:`_pressedChanged`},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:`aria-pressed`,observer:`_ariaActiveAttributeChanged`}},listeners:{down:`_downHandler`,up:`_upHandler`,tap:`_tapHandler`},observers:[`_focusChanged(focused)`,`_activeChanged(active, ariaActiveAttribute)`],keyBindings:{"enter:keydown":`_asyncClick`,"space:keydown":`_spaceKeyDownHandler`,"space:keyup":`_spaceKeyUpHandler`},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire(`change`))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,n=U(t).localTarget;this.isLightDescendant(n)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,n=U(t).localTarget;this.isLightDescendant(n)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?`true`:`false`):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},jl=[Ol,Al]}));function Nl(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}function Pl(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement(`div`),this.waveContainer=document.createElement(`div`),this.wave.style.backgroundColor=this.color,this.wave.classList.add(`wave`),this.waveContainer.classList.add(`wave-container`),U(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}var K,Fl=t((()=>{G(),kl(),$s(),Ds(),Ic(),K={distance:function(e,t,n,r){var i=e-n,a=t-r;return Math.sqrt(i*i+a*a)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now},Nl.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var n=K.distance(e,t,0,0),r=K.distance(e,t,this.width,0),i=K.distance(e,t,0,this.height),a=K.distance(e,t,this.width,this.height);return Math.max(n,r,i,a)}},Pl.MAX_RADIUS=300,Pl.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=K.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?K.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,n=Math.min(Math.sqrt(e+t),Pl.MAX_RADIUS)*1.1+5,r=1.1-.2*(n/Pl.MAX_RADIUS),i=n*(1-80**-(this.mouseInteractionSeconds/r));return Math.abs(i)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=this.mouseUpElapsedSeconds*.3,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Pl.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Pl.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Nl(this.element)},draw:function(){var e,t,n;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,n=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform=`translate(`+t+`px, `+n+`px)`,this.waveContainer.style.transform=`translate3d(`+t+`px, `+n+`px, 0)`,this.wave.style.webkitTransform=`scale(`+e+`,`+e+`)`,this.wave.style.transform=`scale3d(`+e+`,`+e+`,1)`},downAction:function(e){var t=this.containerMetrics.width/2,n=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=K.now(),this.center?(this.xStart=t,this.yStart=n,this.slideDistance=K.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=n,this.slideDistance=K.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+`px`,this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+`px`,this.waveContainer.style.width=this.containerMetrics.size+`px`,this.waveContainer.style.height=this.containerMetrics.size+`px`},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=K.now())},remove:function(){U(U(this.waveContainer).parentNode).removeChild(this.waveContainer)}},Qs({_template:Pc`
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
`,is:`paper-ripple`,behaviors:[Ol],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:`_holdDownChanged`},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":`_onEnterKeydown`,"space:keydown":`_onSpaceKeydown`,"space:keyup":`_onSpaceKeyup`},attached:function(){U(this).parentNode.nodeType==11?this.keyEventTarget=U(this).getOwnerRoot().host:this.keyEventTarget=U(this).parentNode;var e=this.keyEventTarget;this.listen(e,`up`,`uiUpAction`),this.listen(e,`down`,`uiDownAction`)},detached:function(){this.unlisten(this.keyEventTarget,`up`,`uiUpAction`),this.unlisten(this.keyEventTarget,`down`,`uiDownAction`),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){this.holdDown&&this.ripples.length>0||(this.addRipple().downAction(e),this._animating||(this._animating=!0,this.animate()))},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=``,this.fire(`transitionend`)},addRipple:function(){var e=new Pl(this);return U(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){t!==void 0&&(e?this.downAction():this.upAction())}})})),Il,Ll=t((()=>{G(),Fl(),Ml(),Ds(),Il={properties:{noink:{type:Boolean,observer:`_noinkChanged`},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Al._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&U(t).appendChild(this._ripple),e){var n=U(this._rippleContainer||this),r=U(e).rootTarget;n.deepContains(r)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){return document.createElement(`paper-ripple`)},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}}})),Rl,zl,Bl=t((()=>{G(),Ml(),fl(),Ll(),Rl={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:[`_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)`,`_computeKeyboardClass(receivedFocusFromKeyboard)`],hostAttributes:{role:`button`,tabindex:`0`,animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass(`keyboard-focus`,e)},_spaceKeyDownHandler:function(e){Al._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Al._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},zl=[jl,dl,Il,Rl]})),Vl,Hl=t((()=>{ol(),ul(),Bl(),$s(),G(),Vl=Pc`
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

  <slot></slot>`,Vl.setAttribute(`strip-whitespace`,``),Qs({_template:Vl,is:`paper-button`,behaviors:[zl],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:`_calculateElevation`}},_calculateElevation:function(){this.raised?Rl._calculateElevation.apply(this):this._setElevation(0)}})})),Ul,Wl=t((()=>{o(),Ul=e=>e??a}));function*Gl(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var Kl=t((()=>{})),ql,Jl,Yl=t((()=>{ql={duration:250},Jl=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...ql,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`})}})),Xl,Zl,Ql=t((()=>{o(),$e(),Xl={},Zl=Ze(class extends Qe{constructor(){super(...arguments),this.ot=Xl}render(e,t){return t()}update(t,[n,r]){if(Array.isArray(n)){if(Array.isArray(this.ot)&&this.ot.length===n.length&&n.every((e,t)=>e===this.ot[t]))return e}else if(this.ot===n)return e;return this.ot=Array.isArray(n)?Array.from(n):n,this.render(n,r)}})})),$l,eu,tu=t((()=>{o(),st(),$e(),$l=new WeakMap,eu=Ze(class extends ot{render(e){return a}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),a}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=$l.get(t);n===void 0&&(n=new WeakMap,$l.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?$l.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),nu,ru,iu,au=t((()=>{o(),$e(),nu=`important`,ru=` !important`,iu=Ze(class extends Qe{constructor(e){if(super(e),e.type!==Xe.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(t,[n]){let{style:r}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in n){let t=n[e];if(t!=null){this.ft.add(e);let n=typeof t==`string`&&t.endsWith(ru);e.includes(`-`)||n?r.setProperty(e,n?t.slice(0,-11):t,n?nu:``):r[e]=t}}return e}})}));function ou(e,t,n){return e?t(e):n?.(e)}var su=t((()=>{})),cu,lu=t((()=>{cu=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),uu=t((()=>{lu()})),du,fu,pu=t((()=>{w(),o(),uu(),du=he`
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
`,fu=()=>i`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,cu(dt(fu,{styleSheets:[du]})))}));function mu(e,t,n){return Mu(e,ju(t,n))}function hu(e,t){return typeof e==`function`?e(t):e}function gu(e){return e.split(`-`)[0]}function _u(e){return e.split(`-`)[1]}function vu(e){return e===`x`?`y`:`x`}function yu(e){return e===`y`?`height`:`width`}function bu(e){return Lu.has(gu(e))?`y`:`x`}function xu(e){return vu(bu(e))}function Su(e,t,n){n===void 0&&(n=!1);let r=_u(e),i=xu(e),a=yu(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Du(o)),[o,Du(o)]}function Cu(e){let t=Du(e);return[wu(e),t,wu(t)]}function wu(e){return e.replace(/start|end/g,e=>Iu[e])}function Tu(e,t,n){switch(e){case`top`:case`bottom`:return n?t?zu:Ru:t?Ru:zu;case`left`:case`right`:return t?Bu:Vu;default:return[]}}function Eu(e,t,n,r){let i=_u(e),a=Tu(gu(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(wu)))),a}function Du(e){return e.replace(/left|right|bottom|top/g,e=>Fu[e])}function Ou(e){return{top:0,right:0,bottom:0,left:0,...e}}function ku(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Ou(e)}function Au(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var ju,Mu,Nu,Pu,q,Fu,Iu,Lu,Ru,zu,Bu,Vu,Hu=t((()=>{ju=Math.min,Mu=Math.max,Nu=Math.round,Pu=Math.floor,q=e=>({x:e,y:e}),Fu={left:`right`,right:`left`,bottom:`top`,top:`bottom`},Iu={start:`end`,end:`start`},Lu=new Set([`top`,`bottom`]),Ru=[`left`,`right`],zu=[`right`,`left`],Bu=[`top`,`bottom`],Vu=[`bottom`,`top`]}));function Uu(e,t,n){let{reference:r,floating:i}=e,a=bu(t),o=xu(t),s=yu(o),c=gu(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(_u(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function Wu(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=hu(t,e),p=ku(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Au(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Au(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Gu,Ku,qu,Ju=t((()=>{Hu(),Gu=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=a.filter(Boolean),c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Uu(l,r,c),f=r,p={},m=0;for(let n=0;n<s.length;n++){let{name:a,fn:h}=s[n],{x:g,y:_,data:v,reset:y}=await h({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:p,rects:l,platform:o,elements:{reference:e,floating:t}});u=g??u,d=_??d,p={...p,[a]:{...p[a],...v}},y&&m<=50&&(m++,typeof y==`object`&&(y.placement&&(f=y.placement),y.rects&&(l=y.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):y.rects),{x:u,y:d}=Uu(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:p}},Ku=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=hu(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=gu(r),_=bu(o),v=gu(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[Du(o)]:Cu(o)),b=p!==`none`;!d&&b&&ee.push(...Eu(o,m,p,y));let te=[o,...ee],ne=await Wu(t,h),re=[],ie=i.flip?.overflows||[];if(l&&re.push(ne[g]),u){let e=Su(r,a,y);re.push(ne[e[0]],ne[e[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==bu(t))||ie.every(e=>bu(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ie},reset:{placement:t}};let n=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ie.filter(e=>{if(b){let t=bu(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},qu=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...c}=hu(e,t),l={x:n,y:r},u=await Wu(t,c),d=bu(gu(i)),f=vu(d),p=l[f],m=l[d];if(a){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=p+u[e],r=p-u[t];p=mu(n,p,r)}if(o){let e=d===`y`?`top`:`left`,t=d===`y`?`bottom`:`right`,n=m+u[e],r=m-u[t];m=mu(n,m,r)}let h=s.fn({...t,[f]:p,[d]:m});return{...h,data:{x:h.x-n,y:h.y-r,enabled:{[f]:a,[d]:o}}}}}}}));function Yu(){return typeof window<`u`}function Xu(e){return Zu(e)?(e.nodeName||``).toLowerCase():`#document`}function J(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Y(e){return((Zu(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Zu(e){return Yu()?e instanceof Node||e instanceof J(e).Node:!1}function X(e){return Yu()?e instanceof Element||e instanceof J(e).Element:!1}function Z(e){return Yu()?e instanceof HTMLElement||e instanceof J(e).HTMLElement:!1}function Qu(e){return!Yu()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof J(e).ShadowRoot}function $u(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Q(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!ud.has(i)}function ed(e){return dd.has(Xu(e))}function td(e){return fd.some(t=>{try{return e.matches(t)}catch{return!1}})}function nd(e){let t=id(),n=X(e)?Q(e):e;return pd.some(e=>n[e]?n[e]!==`none`:!1)||(n.containerType?n.containerType!==`normal`:!1)||!t&&(n.backdropFilter?n.backdropFilter!==`none`:!1)||!t&&(n.filter?n.filter!==`none`:!1)||md.some(e=>(n.willChange||``).includes(e))||hd.some(e=>(n.contain||``).includes(e))}function rd(e){let t=$(e);for(;Z(t)&&!ad(t);){if(nd(t))return t;if(td(t))return null;t=$(t)}return null}function id(){return typeof CSS>`u`||!CSS.supports?!1:CSS.supports(`-webkit-backdrop-filter`,`none`)}function ad(e){return gd.has(Xu(e))}function Q(e){return J(e).getComputedStyle(e)}function od(e){return X(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function $(e){if(Xu(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Qu(e)&&e.host||Y(e);return Qu(t)?t.host:t}function sd(e){let t=$(e);return ad(t)?e.ownerDocument?e.ownerDocument.body:e.body:Z(t)&&$u(t)?t:sd(t)}function cd(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=sd(e),i=r===e.ownerDocument?.body,a=J(r);if(i){let e=ld(a);return t.concat(a,a.visualViewport||[],$u(r)?r:[],e&&n?cd(e):[])}return t.concat(r,cd(r,[],n))}function ld(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var ud,dd,fd,pd,md,hd,gd,_d=t((()=>{ud=new Set([`inline`,`contents`]),dd=new Set([`table`,`td`,`th`]),fd=[`:popover-open`,`:modal`],pd=[`transform`,`translate`,`scale`,`rotate`,`perspective`],md=[`transform`,`translate`,`scale`,`rotate`,`perspective`,`filter`],hd=[`paint`,`layout`,`strict`,`content`],gd=new Set([`html`,`body`,`#document`])}));function vd(e){let t=Q(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Z(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Nu(n)!==a||Nu(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function yd(e){return X(e)?e:e.contextElement}function bd(e){let t=yd(e);if(!Z(t))return q(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=vd(t),o=(a?Nu(n.width):n.width)/r,s=(a?Nu(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function xd(e){let t=J(e);return!id()||!t.visualViewport?Wd:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Sd(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==J(e)?!1:t}function Cd(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=yd(e),o=q(1);t&&(r?X(r)&&(o=bd(r)):o=bd(e));let s=Sd(a,n,r)?xd(a):q(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=J(a),t=r&&X(r)?J(r):r,n=e,i=ld(n);for(;i&&r&&t!==n;){let e=bd(i),t=i.getBoundingClientRect(),r=Q(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=J(i),i=ld(n)}}return Au({width:u,height:d,x:c,y:l})}function wd(e,t){let n=od(e).scrollLeft;return t?t.left+n:Cd(Y(e)).left+n}function Td(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-wd(e,n),y:n.top+t.scrollTop}}function Ed(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=Y(r),s=t?td(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=q(1),u=q(0),d=Z(r);if((d||!d&&!a)&&((Xu(r)!==`body`||$u(o))&&(c=od(r)),Z(r))){let e=Cd(r);l=bd(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Td(o,c):q(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Dd(e){return Array.from(e.getClientRects())}function Od(e){let t=Y(e),n=od(e),r=e.ownerDocument.body,i=Mu(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Mu(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+wd(e),s=-n.scrollTop;return Q(r).direction===`rtl`&&(o+=Mu(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}function kd(e,t){let n=J(e),r=Y(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=id();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=wd(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=Gd&&(a-=o)}else l<=Gd&&(a+=l);return{width:a,height:o,x:s,y:c}}function Ad(e,t){let n=Cd(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Z(e)?bd(e):q(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function jd(e,t,n){let r;if(t===`viewport`)r=kd(e,n);else if(t===`document`)r=Od(Y(e));else if(X(t))r=Ad(t,n);else{let n=xd(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Au(r)}function Md(e,t){let n=$(e);return n===t||!X(n)||ad(n)?!1:Q(n).position===`fixed`||Md(n,t)}function Nd(e,t){let n=t.get(e);if(n)return n;let r=cd(e,[],!1).filter(e=>X(e)&&Xu(e)!==`body`),i=null,a=Q(e).position===`fixed`,o=a?$(e):e;for(;X(o)&&!ad(o);){let t=Q(o),n=nd(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&Kd.has(i.position)||$u(o)&&!n&&Md(e,o))?r=r.filter(e=>e!==o):i=t,o=$(o)}return t.set(e,r),r}function Pd(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?td(t)?[]:Nd(t,this._c):[].concat(n),r],o=a[0],s=a.reduce((e,n)=>{let r=jd(t,n,i);return e.top=Mu(r.top,e.top),e.right=ju(r.right,e.right),e.bottom=ju(r.bottom,e.bottom),e.left=Mu(r.left,e.left),e},jd(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}}function Fd(e){let{width:t,height:n}=vd(e);return{width:t,height:n}}function Id(e,t,n){let r=Z(t),i=Y(t),a=n===`fixed`,o=Cd(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=q(0);function l(){c.x=wd(i)}if(r||!r&&!a)if((Xu(t)!==`body`||$u(i))&&(s=od(t)),r){let e=Cd(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Td(i,s):q(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function Ld(e){return Q(e).position===`static`}function Rd(e,t){if(!Z(e)||Q(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return Y(e)===n&&(n=n.ownerDocument.body),n}function zd(e,t){let n=J(e);if(td(e))return n;if(!Z(e)){let t=$(e);for(;t&&!ad(t);){if(X(t)&&!Ld(t))return t;t=$(t)}return n}let r=Rd(e,t);for(;r&&ed(r)&&Ld(r);)r=Rd(r,t);return r&&ad(r)&&Ld(r)&&!nd(r)?n:r||rd(e)||n}function Bd(e){return Q(e).direction===`rtl`}function Vd(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Hd(e,t){let n=null,r,i=Y(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=Pu(d),h=Pu(i.clientWidth-(u+f)),g=Pu(i.clientHeight-(d+p)),_=Pu(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Mu(0,ju(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!Vd(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function Ud(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=yd(e),u=i||a?[...l?cd(l):[],...cd(t)]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?Hd(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),p.observe(t));let m,h=c?Cd(e):null;c&&g();function g(){let t=Cd(e);h&&!Vd(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var Wd,Gd,Kd,qd,Jd,Yd,Xd,Zd,Qd=t((()=>{Ju(),Hu(),_d(),Wd=q(0),Gd=25,Kd=new Set([`absolute`,`fixed`]),qd=async function(e){let t=this.getOffsetParent||zd,n=this.getDimensions,r=await n(e.floating);return{reference:Id(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},Jd={convertOffsetParentRelativeRectToViewportRelativeRect:Ed,getDocumentElement:Y,getClippingRect:Pd,getOffsetParent:zd,getElementRects:qd,getClientRects:Dd,getDimensions:Fd,getScale:bd,isElement:X,isRTL:Bd},Yd=qu,Xd=Ku,Zd=(e,t,n)=>{let r=new Map,i={platform:Jd,...n},a={...i.platform,_c:r};return Gu(e,t,{...i,platform:a})}})),$d,ef,tf=t((()=>{w(),Qd(),$d=[Xd({fallbackAxisSideDirection:`start`,crossAxis:!1}),Yd()],ef=({placement:e=`bottom-start`,strategy:t,middleware:n=$d}={})=>{let[r,i]=Re(),[a,o]=Re(),[s,c]=Re();return S(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return Ud(r,a,()=>Zd(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:Me(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),nf,rf=t((()=>{w(),nf=e=>{let t=Me(()=>({}),[]);return Me(()=>Object.assign(t,e),[t,...Object.values(e)])}})),af,of,sf,cf,lf=t((()=>{w(),rf(),af=e=>e.matches(`:focus-within`),of=({disabled:e,onFocus:t})=>{let[n,r]=Re(),{focused:i,closed:a}=n||{},o=i&&!e,s=nf({closed:a,onFocus:t}),c=C(e=>r(t=>({...t,closed:e})),[]),l=C(e=>{let t=e.currentTarget;return af(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return S(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:C(e=>{let t=af(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},sf=[`focusin`,`focusout`],cf=e=>{let t=of(e),{onFocus:n}=t;return S(()=>(e.setAttribute(`tabindex`,`0`),sf.forEach(t=>e.addEventListener(t,n)),()=>{sf.forEach(t=>e.removeEventListener(t,n))}),[]),t}})),uf,df,ff,pf=t((()=>{w(),o(),Ql(),tu(),au(),su(),pu(),tf(),lf(),uf=e=>e.preventDefault(),df=he`
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
`,ff=e=>{let{placement:t,strategy:n,middleware:r,render:o}=e,{active:s,onToggle:c}=cf(e),{styles:l,setReference:u,setFloating:d}=ef({placement:t,strategy:n,middleware:r});return i` <div class="anchor" part="anchor" ${eu(u)}>
			<button
				@mousedown=${uf}
				@click=${c}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${ou(s,()=>i`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${iu(l)}"
					@connected=${e=>e.target.showPopover?.()}
					${eu(d)}
					><slot></slot>${Zl([o],()=>o?.()||a)}</cosmoz-dropdown-content
				> `)}`},customElements.define(`cosmoz-dropdown`,dt(ff,{styleSheets:[df]}))})),mf,hf,gf,_f=t((()=>{w(),o(),mf=he`
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
`,hf=()=>i` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,dt(hf,{styleSheets:[mf]})),gf=({placement:e})=>i` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,dt(gf))})),vf,yf=t((()=>{w(),vf=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=Ge(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return S(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),S(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),bf,xf,Sf,Cf=t((()=>{w(),o(),tu(),yf(),bf=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},xf=he`
	:host {
		display: inline-block;
		anchor-name: --dropdown-anchor;
	}

	[popover] {
		position: fixed;
		position-anchor: --dropdown-anchor;
		inset: unset;
		margin-block: var(--cz-spacing, 0.25rem);
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
`,Sf=e=>{let{placement:t=`bottom span-right`,disabled:n,openOnHover:r,openOnFocus:a}=e,o=Ge(),[s,c]=He(`opened`,!1),l=C(()=>{n||(c(!0),o.current?.showPopover())},[n]),u=C(()=>{c(!1),o.current?.hidePopover()},[]),d=C(()=>{n||(o.current?.matches(`:popover-open`)?u():l())},[n]);S(()=>{let e=o.current;e&&(s?e.showPopover():e.hidePopover())},[s]),S(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:f,cancelClose:p}=vf({host:e,popoverRef:o,disabled:n,openOnHover:r,openOnFocus:a,open:l,close:u});return i`
		<slot name="button" @click=${a?l:d}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${C(t=>{bf(t),c(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[])}
			@select=${u}
			@focusout=${f}
			@focusin=${p}
			${eu(e=>e&&(o.current=e))}
		>
			<slot></slot>
		</div>
	`},customElements.define(`cosmoz-dropdown-next`,dt(Sf,{styleSheets:[xf],observedAttributes:[`placement`,`disabled`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),wf=t((()=>{pf(),_f(),lf(),Cf()}));function Tf(e){return()=>e}var Ef,Df,Of=t((()=>{Ef=Tf(),Df=Ef})),kf,Af=t((()=>{w(),Of(),kf=ft(()=>Df),customElements.define(`cosmoz-keybinding-provider`,kf.Provider)})),jf,Mf=t((()=>{w(),Af(),rf(),jf=(e,t)=>{let n=Oe(kf),r=nf(e);S(()=>n(r),t)}})),Nf,Pf,Ff,If,Lf,Rf,zf,Bf,Vf,Hf,Uf,Wf,Gf=t((()=>{Yl(),wf(),Mf(),w(),Rc(),o(),Nf=`bottom-bar-toolbar`,Pf=`bottom-bar-menu`,Ff=he`
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
`,If=Symbol(`openMenu`),Lf=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},Rf=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,zf=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},Bf=e=>{let t=zf(e).filter(Rf).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},Vf=(e,t,n,r)=>{let i=t?Nf:Pf;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},Hf=(e,t,n)=>{let r=Bf(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>Vf(e,!0,t,n)),o.forEach(e=>Vf(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},Uf=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=Ge(!1);jf({activity:If,callback:()=>Lf(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let a=Me(()=>Jl(`height`),[]);Ie(()=>{r.current?a(e,t):a(e,t,{duration:0}),r.current=!0},[t]);let o=C(()=>Hf(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),s=Ge(null),c=C(()=>{let t=s.current;t&&(t.disconnect(),zf(e).filter(Rf).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);S(()=>{s.current=new MutationObserver(()=>{c(),o()}),c();let t=new MutationObserver(()=>{c(),o()});return t.observe(e,{childList:!0}),()=>{s.current?.disconnect(),s.current=null,t.disconnect()}},[o]);let l=C(()=>{c(),o()},[o]);return i` <div id="bar" part="bar">
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
		</div>`},customElements.define(`cosmoz-bottom-bar`,dt(Uf,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[Ff]})),Wf=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,i(Object.assign([Wf],{raw:[Wf]})),Pc(Object.assign([Wf],{raw:[Wf]}))}));function Kf(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var qf,Jf,Yf,Xf,Zf,Qf,$f;t((()=>{w(),Hl(),o(),Wl(),Kl(),Gf(),qf=e=>{let{active:t,maxToolbarItems:n}=e,[r,a]=Re(``),[o,s]=Re(Kf([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),c=e=>{let t=e.target;a(t.value)},l=e=>{let t=e?e.trim():``;s([...o,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&a(``)};return i`
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
            ${Gl(o,e=>i`<paper-button
                        @click=${e.onClick}
                        data-priority=${Ul(e.priority)}
                        >${e.text}</paper-button
                    >`)}
        </cosmoz-bottom-bar>
    `},customElements.define(`cosmoz-bottom-bar-story`,dt(qf,{observedAttributes:[`active`,`max-toolbar-items`]})),Jf=e=>i`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,Yf=({active:e,maxToolbarItems:t})=>i`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,Xf={title:`Cosmoz Bottom Bar`,render:Jf,argTypes:{active:{control:`boolean`},maxToolbarItems:{control:`number`}},parameters:{docs:{description:{component:`The Cosmoz Bottom Bar web component`}}}},Zf={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The basic version`}}}},Qf={render:Yf,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The empty cosmoz-bottom-bar`}}}},Zf.parameters={...Zf.parameters,docs:{...Zf.parameters?.docs,source:{originalSource:`{
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
}`,...Zf.parameters?.docs?.source}}},Qf.parameters={...Qf.parameters,docs:{...Qf.parameters?.docs,source:{originalSource:`{
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
}`,...Qf.parameters?.docs?.source}}},$f=[`Basic`,`Empty`]}))();export{Zf as Basic,Qf as Empty,$f as __namedExportsOrder,Xf as default};