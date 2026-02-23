import{r as Gr,D as Xr,A as ht,E as ts,b as M}from"./iframe-XAG278ij.js";let pt,fn=0;function ti(e){pt=e}function si(){pt=null,fn=0}function Qr(){return fn++}const Kt=Symbol("haunted.phase"),lt=Symbol("haunted.hook"),ii=Symbol("haunted.update"),ni=Symbol("haunted.commit"),te=Symbol("haunted.effects"),De=Symbol("haunted.layoutEffects"),ss="haunted.context";class Zr{update;host;virtual;[lt];[te];[De];constructor(t,s){this.update=t,this.host=s,this[lt]=new Map,this[te]=[],this[De]=[]}run(t){ti(this);let s=t();return si(),s}_runEffects(t){let s=this[t];ti(this);for(let n of s)n.call(this);si()}runEffects(){this._runEffects(te)}runLayoutEffects(){this._runEffects(De)}teardown(){this[lt].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const eo=Promise.resolve().then.bind(Promise.resolve());function _n(){let e=[],t;function s(){t=null;let n=e;e=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){e.push(n),t==null&&(t=eo(s))}}const to=_n(),ri=_n();class so{renderer;host;state;[Kt];_updateQueued;_active;constructor(t,s){this.renderer=t,this.host=s,this.state=new Zr(this.update.bind(this),s),this[Kt]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(to(()=>{let t=this.handlePhase(ii);ri(()=>{this.handlePhase(ni,t),ri(()=>{this.handlePhase(te)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,s){switch(this[Kt]=t,t){case ni:this.commit(s),this.runEffects(De);return;case ii:return this.render();case te:return this.runEffects(te)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const io=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},no=e=>e?.map(t=>typeof t=="string"?io(t):t),ro=(e,...t)=>e.flatMap((s,n)=>[s,t[n]||""]).join(""),Ge=ro,oo=(e="")=>e.replace(/-+([a-z])?/g,(t,s)=>s?s.toUpperCase():"");function ao(e){class t extends so{frag;renderResult;constructor(i,r,a){super(i,a||r),this.frag=r}commit(i){this.renderResult=e(i,this.frag)}}function s(n,i,r){const a=(r||i||{}).baseElement||HTMLElement,{observedAttributes:o=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=no(n.styleSheets||u);class h extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||o||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const g=this.attachShadow({mode:"open",...c});d&&(g.adoptedStyleSheets=d),this._scheduler=new t(n,g,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(g,m,b){if(m===b)return;let w=b===""?!0:b;Reflect.set(this,oo(g),w)}}function p(f){let g=f,m=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return g},set(b){m&&g===b||(m=!0,g=b,this._scheduler&&this._scheduler.update())}})}const _=new Proxy(a.prototype,{getPrototypeOf(f){return f},set(f,g,m,b){let w;return g in f?(w=Object.getOwnPropertyDescriptor(f,g),w&&w.set?(w.set.call(b,m),!0):(Reflect.set(f,g,m,b),!0)):(typeof g=="symbol"||g[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:m}:w=p(m),Object.defineProperty(b,g,w),w.set&&w.set.call(b,m),!0)}});return Object.setPrototypeOf(h.prototype,_),h}return s}class oe{id;state;constructor(t,s){this.id=t,this.state=s}}function lo(e,...t){let s=Qr(),n=pt[lt],i=n.get(s);return i||(i=new e(s,pt,...t),n.set(s,i)),i.update(...t)}function ae(e){return lo.bind(null,e)}function mn(e){return ae(class extends oe{callback;lastValues;values;_teardown;constructor(t,s,n,i){super(t,s),e(s,this)}update(t,s){this.callback=t,this.values=s}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,s)=>this.lastValues[s]!==t)}})}function yn(e,t){e[te].push(t)}const U=mn(yn),co=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,gn=ae(class extends oe{Context;value;_ranEffect;_unsubscribe;constructor(e,t,s){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,yn(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};co(this.state.host).dispatchEvent(new CustomEvent(ss,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=t;this.value=n?i:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function uo(e){return t=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ss,this)}disconnectedCallback(){this.removeEventListener(ss,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:e(function({render:n}){const i=gn(s);return n(i)},{useShadowDOM:!1}),defaultValue:t};return s}}const ge=ae(class extends oe{value;values;constructor(e,t,s,n){super(e,t),this.value=s(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,s)=>this.values[s]!==t)}}),H=(e,t)=>ge(()=>e,t);function ho(e,t){e[De].push(t)}const po=mn(ho),fe=ae(class extends oe{args;constructor(e,t,s){super(e,t),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});ae(class extends oe{reducer;currentState;constructor(e,t,s,n,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const fo=/([A-Z])/gu,_o=ae(class extends oe{property;eventName;constructor(e,t,s,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(fo,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function Ps(e){return ge(()=>({current:e}),[])}ae(class extends oe{update(){return this.state.host}});function mo({render:e}){const t=ao(e),s=uo(t);return{component:t,createContext:s}}const bn={ATTRIBUTE:1,CHILD:2},Es=e=>(...t)=>({_$litDirective$:e,values:t});let As=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,n){this._$Ct=t,this._$AM=s,this._$Ci=n}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}};const Ie=(e,t)=>{const s=e._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(t,!1),Ie(n,t);return!0},ft=e=>{let t,s;do{if((t=e._$AM)===void 0)break;s=t._$AN,s.delete(e),e=t}while(s?.size===0)},wn=e=>{for(let t;t=e._$AM;e=t){let s=t._$AN;if(s===void 0)t._$AN=s=new Set;else if(s.has(e))break;s.add(e),bo(t)}};function yo(e){this._$AN!==void 0?(ft(this),this._$AM=e,wn(this)):this._$AM=e}function go(e,t=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(n))for(let r=s;r<n.length;r++)Ie(n[r],!1),ft(n[r]);else n!=null&&(Ie(n,!1),ft(n));else Ie(this,e)}const bo=e=>{e.type==bn.CHILD&&(e._$AP??=go,e._$AQ??=yo)};class wo extends As{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,s,n){super._$AT(t,s,n),wn(this),this.isConnected=t._$AU}_$AO(t,s=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),s&&(Ie(this,t),ft(this))}setValue(t){if(Gr(this._$Ct))this._$Ct._$AI(t,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=t,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:le,createContext:vo}=mo({render:Xr});const Mt=!(window.ShadyDOM&&window.ShadyDOM.inUse);let _t;function oi(e){e&&e.shimcssproperties?_t=!1:_t=Mt||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let $e;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&($e=window.ShadyCSS.cssBuild);const vn=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?_t=window.ShadyCSS.nativeCss:window.ShadyCSS?(oi(window.ShadyCSS),window.ShadyCSS=void 0):oi(window.WebComponents&&window.WebComponents.flags);const Ts=_t;class ai{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function Cn(e){return e=Co(e),xn(xo(e),e)}function Co(e){return e.replace($.comments,"").replace($.port,"")}function xo(e){let t=new ai;t.start=0,t.end=e.length;let s=t;for(let n=0,i=e.length;n<i;n++)if(e[n]===Pn){s.rules||(s.rules=[]);let r=s,a=r.rules[r.rules.length-1]||null;s=new ai,s.start=n+1,s.parent=r,s.previous=a,r.rules.push(s)}else e[n]===En&&(s.end=n+1,s=s.parent||t);return t}function xn(e,t){let s=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=s.trim(),e.parent){let i=e.previous?e.previous.end:e.parent.start;s=t.substring(i,e.start-1),s=So(s),s=s.replace($.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=s.trim();e.atRule=r.indexOf(No)===0,e.atRule?r.indexOf(Oo)===0?e.type=pe.MEDIA_RULE:r.match($.keyframesRule)&&(e.type=pe.KEYFRAMES_RULE,e.keyframesName=e.selector.split($.multipleSpaces).pop()):r.indexOf(An)===0?e.type=pe.MIXIN_RULE:e.type=pe.STYLE_RULE}let n=e.rules;if(n)for(let i=0,r=n.length,a;i<r&&(a=n[i]);i++)xn(a,t);return e}function So(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],s=6-t.length;for(;s--;)t="0"+t;return"\\"+t})}function Sn(e,t,s=""){let n="";if(e.cssText||e.rules){let i=e.rules;if(i&&!Po(i))for(let r=0,a=i.length,o;r<a&&(o=i[r]);r++)n=Sn(o,t,n);else n=t?e.cssText:Eo(e.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(e.selector&&(s+=e.selector+" "+Pn+`
`),s+=n,e.selector&&(s+=En+`

`)),s}function Po(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(An)===0}function Eo(e){return e=Ao(e),To(e)}function Ao(e){return e.replace($.customProp,"").replace($.mixinProp,"")}function To(e){return e.replace($.mixinApply,"").replace($.varApply,"")}const pe={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Pn="{",En="}",$={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},An="--",Oo="@media",No="@";const is=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,mt=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;const li=new Set,ko="shady-unscoped";function Mo(e){const t=e.textContent;if(!li.has(t)){li.add(t);const s=document.createElement("style");s.setAttribute("shady-unscoped",""),s.textContent=t,document.head.appendChild(s)}}function Ro(e){return e.hasAttribute(ko)}function ns(e,t){return e?(typeof e=="string"&&(e=Cn(e)),Sn(e,Ts)):""}function ci(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Cn(e.textContent)),e.__cssRules||null}function ct(e,t,s,n){if(!e)return;let i=!1,r=e.type;r===pe.STYLE_RULE?t(e):r===pe.MIXIN_RULE&&(i=!0);let a=e.rules;if(a&&!i)for(let o=0,l=a.length,c;o<l&&(c=a[o]);o++)ct(c,t)}function Do(e,t){let s=0;for(let n=t,i=e.length;n<i;n++)if(e[n]==="(")s++;else if(e[n]===")"&&--s===0)return n;return-1}function Tn(e,t){let s=e.indexOf("var(");if(s===-1)return t(e,"","","");let n=Do(e,s+3),i=e.substring(s+4,n),r=e.substring(0,s),a=Tn(e.substring(n+1),t),o=i.indexOf(",");if(o===-1)return t(r,i.trim(),"",a);let l=i.substring(0,o).trim(),c=i.substring(o+1).trim();return t(r,l,c,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function Io(e){let t=e.localName,s="",n="";return t?t.indexOf("-")>-1?s=t:(n=t,s=e.getAttribute&&e.getAttribute("is")||""):(s=e.is,n=e.extends),{is:s,typeExtension:n}}function Lo(e){const t=[],s=e.querySelectorAll("style");for(let n=0;n<s.length;n++){const i=s[n];Ro(i)?Mt||(Mo(i),i.parentNode.removeChild(i)):(t.push(i.textContent),i.parentNode.removeChild(i))}return t.join("").trim()}const On="css-build";function Bo(e){if($e!==void 0)return $e;if(e.__cssBuild===void 0){const t=e.getAttribute(On);if(t)e.__cssBuild=t;else{const s=Fo(e);s!==""&&zo(e),e.__cssBuild=s}}return e.__cssBuild||""}function ui(e){return Bo(e)!==""}function Fo(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const s=t.textContent.trim().split(":");if(s[0]===On)return s[1]}return""}function zo(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}function rs(e,t){for(let s in t)s===null?e.style.removeProperty(s):e.style.setProperty(s,t[s])}function Nn(e,t){const s=window.getComputedStyle(e).getPropertyValue(t);return s?s.trim():""}function Ho(e){const t=mt.test(e)||is.test(e);return mt.lastIndex=0,is.lastIndex=0,t}const $o=/;\s*/m,Uo=/^\s*(initial)|(inherit)\s*$/,di=/\s*!important/,os="_-_";class jo{constructor(){this._map={}}set(t,s){t=t.trim(),this._map[t]={properties:s,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let yt=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new jo}detectMixin(t){return Ho(t)}gatherStyles(t){const s=Lo(t.content);if(s){const n=document.createElement("style");return n.textContent=s,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,s){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,s):null}transformStyle(t,s=""){let n=ci(t);return this.transformRules(n,s),t.textContent=ns(n),n}transformCustomStyle(t){let s=ci(t);return ct(s,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),t.textContent=ns(s),s}transformRules(t,s){this._currentElement=s,ct(t,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,s){return t=t.replace(is,(n,i,r,a)=>this._produceCssProperties(n,i,r,a,s)),this._consumeCssProperties(t,s)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let s=t;for(;s.parent;)s=s.parent;const n={};let i=!1;return ct(s,r=>{i=i||r===t,!i&&r.selector===t.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(t,s){let n=null;for(;n=mt.exec(t);){let i=n[0],r=n[1],a=n.index,o=a+i.indexOf("@apply"),l=a+i.length,c=t.slice(0,o),u=t.slice(l),d=s?this._fallbacksFromPreviousRules(s):{};Object.assign(d,this._cssTextToMap(c));let h=this._atApplyToCssProperties(r,d);t=`${c}${h}${u}`,mt.lastIndex=a+h.length}return t}_atApplyToCssProperties(t,s){t=t.replace($o,"");let n=[],i=this._map.get(t);if(i||(this._map.set(t,{}),i=this._map.get(t)),i){this._currentElement&&(i.dependants[this._currentElement]=!0);let r,a,o;const l=i.properties;for(r in l)o=s&&s[r],a=[r,": var(",t,os,r],o&&a.push(",",o.replace(di,"")),a.push(")"),di.test(l[r])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,s){let n=Uo.exec(s);return n&&(n[1]?s=this._getInitialValueForProperty(t):s="apply-shim-inherit"),s}_cssTextToMap(t,s=!1){let n=t.split(";"),i,r,a={};for(let o=0,l,c;o<n.length;o++)l=n[o],l&&(c=l.split(":"),c.length>1&&(i=c[0].trim(),r=c.slice(1).join(":"),s&&(r=this._replaceInitialOrInherit(i,r)),a[i]=r));return a}_invalidateMixinEntry(t){if(yt)for(let s in t.dependants)s!==this._currentElement&&yt(s)}_produceCssProperties(t,s,n,i,r){if(n&&Tn(n,(g,m)=>{m&&this._map.get(m)&&(i=`@apply ${m};`)}),!i)return t;let a=this._consumeCssProperties(""+i,r),o=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,u=this._map.get(s),d=u&&u.properties;d?c=Object.assign(Object.create(d),l):this._map.set(s,c);let h=[],p,_,f=!1;for(p in c)_=l[p],_===void 0&&(_="initial"),d&&!(p in d)&&(f=!0),h.push(`${s}${os}${p}: ${_}`);return f&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(o=`${t};${o}`),`${o}${h.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin;T.prototype.transformStyle=T.prototype.transformStyle;T.prototype.transformCustomStyle=T.prototype.transformCustomStyle;T.prototype.transformRules=T.prototype.transformRules;T.prototype.transformRule=T.prototype.transformRule;T.prototype.transformTemplate=T.prototype.transformTemplate;T.prototype._separator=os;Object.defineProperty(T.prototype,"invalidCallback",{get(){return yt},set(e){yt=e}});const as={};const gt="_applyShimCurrentVersion",be="_applyShimNextVersion",bt="_applyShimValidatingVersion",Ko=Promise.resolve();function Vo(e){let t=as[e];t&&qo(t)}function qo(e){e[gt]=e[gt]||0,e[bt]=e[bt]||0,e[be]=(e[be]||0)+1}function kn(e){return e[gt]===e[be]}function Yo(e){return!kn(e)&&e[bt]===e[be]}function Wo(e){e[bt]=e[be],e._validating||(e._validating=!0,Ko.then(function(){e[gt]=e[be],e._validating=!1}))}let Vt=null,hi=window.HTMLImports&&window.HTMLImports.whenReady||null,qt;function pi(e){requestAnimationFrame(function(){hi?hi(e):(Vt||(Vt=new Promise(t=>{qt=t}),document.readyState==="complete"?qt():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&qt()})),Vt.then(function(){e&&e()}))})}const fi="__seenByShadyCSS",et="__shadyCSSCachedStyle";let wt=null,Le=null,Y=class{constructor(){this.customStyles=[],this.enqueued=!1,pi(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Le||(this.enqueued=!0,pi(Le))}addCustomStyle(t){t[fi]||(t[fi]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[et])return t[et];let s;return t.getStyle?s=t.getStyle():s=t,s}processStyles(){const t=this.customStyles;for(let s=0;s<t.length;s++){const n=t[s];if(n[et])continue;const i=this.getStyleForCustomStyle(n);if(i){const r=i.__appliedElement||i;wt&&wt(r),n[et]=r}}return t}};Y.prototype.addCustomStyle=Y.prototype.addCustomStyle;Y.prototype.getStyleForCustomStyle=Y.prototype.getStyleForCustomStyle;Y.prototype.processStyles=Y.prototype.processStyles;Object.defineProperties(Y.prototype,{transformCallback:{get(){return wt},set(e){wt=e}},validateCallback:{get(){return Le},set(e){let t=!1;Le||(t=!0),Le=e,t&&this.enqueueDocumentValidation()}}});const ke=new T;class Jo{constructor(){this.customStyleInterface=null,ke.invalidCallback=Vo}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{ke.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,s){if(this.ensure(),ui(t))return;as[s]=t;let n=ke.transformTemplate(t,s);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let s=0;s<t.length;s++){let n=t[s],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&ke.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,s){if(this.ensure(),s&&rs(t,s),t.shadowRoot){this.styleElement(t);let n=t.shadowRoot.children||t.shadowRoot.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}else{let n=t.children||t.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}}styleElement(t){this.ensure();let{is:s}=Io(t),n=as[s];if(!(n&&ui(n))&&n&&!kn(n)){Yo(n)||(this.prepareTemplate(n,s),Wo(n));let i=t.shadowRoot;if(i){let r=i.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=ns(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Jo;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(s,n,i){e.flushCustomStyles(),e.prepareTemplate(s,n)},prepareTemplateStyles(s,n,i){window.ShadyCSS.prepareTemplate(s,n,i)},prepareTemplateDom(s,n){},styleSubtree(s,n){e.flushCustomStyles(),e.styleSubtree(s,n)},styleElement(s){e.flushCustomStyles(),e.styleElement(s)},styleDocument(s){e.flushCustomStyles(),e.styleDocument(s)},getComputedStyleValue(s,n){return Nn(s,n)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:Ts,nativeShadow:Mt,cssBuild:$e,disableRuntime:vn},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=ke;window.JSCompiler_renameProperty=function(e,t){return e};let Go=/(url\()([^)]*)(\))/g,Xo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,tt,O;function Be(e,t){if(e&&Xo.test(e)||e==="//")return e;if(tt===void 0){tt=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",tt=s.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),tt)try{return new URL(e,t).href}catch{return e}return O||(O=document.implementation.createHTMLDocument("temp"),O.base=O.createElement("base"),O.head.appendChild(O.base),O.anchor=O.createElement("a"),O.body.appendChild(O.anchor)),O.base.href=t,O.anchor.href=e,O.anchor.href||e}function Os(e,t){return e.replace(Go,function(s,n,i,r){return n+"'"+Be(i.replace(/["']/g,""),t)+"'"+r})}function Ns(e){return e.substring(0,e.lastIndexOf("/")+1)}const Mn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Qo=Mn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Zo=window.Polymer&&window.Polymer.rootPath||Ns(document.baseURI||window.location.href),vt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,ea=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,we=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ta=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ue=window.Polymer&&window.Polymer.legacyOptimizations||!1,Rn=window.Polymer&&window.Polymer.legacyWarnings||!1,sa=window.Polymer&&window.Polymer.syncInitialRender||!1,ls=window.Polymer&&window.Polymer.legacyUndefined||!1,ia=window.Polymer&&window.Polymer.orderedComputed||!1,_i=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Dn=window.Polymer&&window.Polymer.fastDomIf||!1,cs=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,st=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,na=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let ra=0;const k=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let s=ra++;function n(i){let r=i.__mixinSet;if(r&&r[s])return i;let a=t,o=a.get(i);if(!o){o=e(i),a.set(i,o);let l=Object.create(o.__mixinSet||r||null);l[s]=!0,o.__mixinSet=l}return o}return n};let ks={},In={};function mi(e,t){ks[e]=In[e.toLowerCase()]=t}function yi(e){return ks[e]||In[e.toLowerCase()]}function oa(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class je extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,s){if(t){let n=yi(t);return n&&s?n.querySelector(s):n}return null}attributeChangedCallback(t,s,n,i){s!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Be(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ns(s)}return this.__assetpath}register(t){if(t=t||this.id,t){if(we&&yi(t)!==void 0)throw mi(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,mi(t,this),oa(this)}}}je.prototype.modules=ks;customElements.define("dom-module",je);const aa="link[rel=import][type~=css]",la="include",gi="shady-unscoped";function Ms(e){return je.import(e)}function bi(e){let t=e.body?e.body:e;const s=Os(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=s,n}function ca(e){const t=e.trim().split(/\s+/),s=[];for(let n=0;n<t.length;n++)s.push(...ua(t[n]));return s}function ua(e){const t=Ms(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const s=[];s.push(...Ds(t));const n=t.querySelector("template");n&&s.push(...Rs(n,t.assetpath)),t._styles=s}return t._styles}function Rs(e,t){if(!e._styles){const s=[],n=e.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let r=n[i],a=r.getAttribute(la);a&&s.push(...ca(a).filter(function(o,l,c){return c.indexOf(o)===l})),t&&(r.textContent=Os(r.textContent,t)),s.push(r)}e._styles=s}return e._styles}function da(e){let t=Ms(e);return t?Ds(t):[]}function Ds(e){const t=[],s=e.querySelectorAll(aa);for(let n=0;n<s.length;n++){let i=s[n];if(i.import){const r=i.import,a=i.hasAttribute(gi);if(a&&!r._unscopedStyle){const o=bi(r);o.setAttribute(gi,""),r._unscopedStyle=o}else r._style||(r._style=bi(r));t.push(a?r._unscopedStyle:r._style)}}return t}function ha(e){let t=e.trim().split(/\s+/),s="";for(let n=0;n<t.length;n++)s+=pa(t[n]);return s}function pa(e){let t=Ms(e);if(t&&t._cssText===void 0){let s=_a(t),n=t.querySelector("template");n&&(s+=fa(n,t.assetpath)),t._cssText=s||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function fa(e,t){let s="";const n=Rs(e,t);for(let i=0;i<n.length;i++){let r=n[i];r.parentNode&&r.parentNode.removeChild(r),s+=r.textContent}return s}function _a(e){let t="",s=Ds(e);for(let n=0;n<s.length;n++)t+=s[n].textContent;return t}const y=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function us(e){return e.indexOf(".")>=0}function j(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function Ln(e,t){return e.indexOf(t+".")===0}function Ke(e,t){return t.indexOf(e+".")===0}function Ve(e,t,s){return t+s.slice(e.length)}function ma(e,t){return e===t||Ln(e,t)||Ke(e,t)}function Me(e){if(Array.isArray(e)){let t=[];for(let s=0;s<e.length;s++){let n=e[s].toString().split(".");for(let i=0;i<n.length;i++)t.push(n[i])}return t.join(".")}else return e}function Bn(e){return Array.isArray(e)?Me(e).split("."):e.toString().split(".")}function A(e,t,s){let n=e,i=Bn(t);for(let r=0;r<i.length;r++){if(!n)return;let a=i[r];n=n[a]}return s&&(s.path=i.join(".")),n}function wi(e,t,s){let n=e,i=Bn(t),r=i[i.length-1];if(i.length>1){for(let a=0;a<i.length-1;a++){let o=i[a];if(n=n[o],!n)return}n[r]=s}else n[t]=s;return i.join(".")}const Ct={},ya=/-[a-z]/g,ga=/([A-Z])/g;function Fn(e){return Ct[e]||(Ct[e]=e.indexOf("-")<0?e:e.replace(ya,t=>t[1].toUpperCase()))}function Rt(e){return Ct[e]||(Ct[e]=e.replace(ga,"-$1").toLowerCase())}let ba=0,zn=0,_e=[],wa=0,ds=!1,Hn=document.createTextNode("");new window.MutationObserver(va).observe(Hn,{characterData:!0});function va(){ds=!1;const e=_e.length;for(let t=0;t<e;t++){let s=_e[t];if(s)try{s()}catch(n){setTimeout(()=>{throw n})}}_e.splice(0,e),zn+=e}const Fe={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},V={run(e){return ds||(ds=!0,Hn.textContent=wa++),_e.push(e),ba++},cancel(e){const t=e-zn;if(t>=0){if(!_e[t])throw new Error("invalid async handle: "+e);_e[t]=null}}};const Ca=V,$n=k(e=>{class t extends e{static createProperties(n){const i=this.prototype;for(let r in n)r in i||i._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,r){let a=this.__data[n],o=this._shouldPropertyChange(n,i,a);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=i,this.__dataPending[n]=i),o}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,Ca.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,i,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,r)),this.__dataCounter--}_shouldPropertiesChange(n,i,r){return!!i}_propertiesChanged(n,i,r){}_shouldPropertyChange(n,i,r){return r!==i&&(r===r||i===i)}attributeChangedCallback(n,i,r,a){i!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,r,a)}_attributeToProperty(n,i,r){if(!this.__serializing){const a=this.__dataAttributes,o=a&&a[n]||n;this[o]=this._deserializeValue(i,r||this.constructor.typeForProperty(o))}}_propertyToAttribute(n,i,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,r){const a=this._serializeValue(i);(r==="class"||r==="name"||r==="slot")&&(n=y(n)),a===void 0?n.removeAttribute(r):n.setAttribute(r,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){return typeof n==="boolean"?n?"":void 0:n?.toString()}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});const Un={};let it=HTMLElement.prototype;for(;it;){let e=Object.getOwnPropertyNames(it);for(let t=0;t<e.length;t++)Un[e[t]]=!0;it=Object.getPrototypeOf(it)}const xa=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function Sa(e,t){if(!Un[t]){let s=e[t];s!==void 0&&(e.__data?e._setPendingProperty(t,s):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=s))}}const jn=k(e=>{const t=$n(e);class s extends t{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let r=0;r<i.length;r++)this.prototype._createPropertyAccessor(Fn(i[r]))}static attributeNameForProperty(i){return Rt(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let r in i)this._setProperty(r,i[r])}_ensureAttribute(i,r){const a=this;a.hasAttribute(i)||this._valueToNodeAttribute(a,r,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(xa(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,r){let a;switch(r){case Object:try{a=JSON.parse(i)}catch{a=i}break;case Array:try{a=JSON.parse(i)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:a=isNaN(i)?String(i):Number(i),a=new Date(a);break;default:a=super._deserializeValue(i,r);break}return a}_definePropertyAccessor(i,r){Sa(this,i),super._definePropertyAccessor(i,r)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return s});const Pa={"dom-if":!0,"dom-repeat":!0};let vi=!1,Ci=!1;function Ea(){if(!vi){vi=!0;const e=document.createElement("textarea");e.placeholder="a",Ci=e.placeholder===e.textContent}return Ci}function Aa(e){Ea()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Ta=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,s,n)=>{const i=s.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(i,n));return}t.setAttribute(n,i)}})();function Oa(e){let t=e.getAttribute("is");if(t&&Pa[t]){let s=e;for(s.removeAttribute("is"),e=s.ownerDocument.createElement(t),s.parentNode.replaceChild(e,s),e.appendChild(s);s.attributes.length;){const{name:n}=s.attributes[0];Ta(e,s,n),s.removeAttribute(n)}}return e}function Kn(e,t){let s=t.parentInfo&&Kn(e,t.parentInfo);if(s){for(let n=s.firstChild,i=0;n;n=n.nextSibling)if(t.parentIndex===i++)return n}else return e}function Na(e,t,s,n){n.id&&(t[n.id]=s)}function ka(e,t,s){if(s.events&&s.events.length)for(let n=0,i=s.events,r;n<i.length&&(r=i[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Ma(e,t,s,n){s.templateInfo&&(t._templateInfo=s.templateInfo,t._parentTemplateInfo=n)}function Ra(e,t,s){return e=e._methodHost||e,function(i){e[s]?e[s](i,i.detail):console.warn("listener method `"+s+"` not defined")}}const Da=k(e=>{class t extends e{static _parseTemplate(n,i){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!i,r.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,r){return this._parseTemplateNode(n.content,i,r)}static _parseTemplateNode(n,i,r){let a=!1,o=n;return o.localName=="template"&&!o.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(o,i,r)||a:o.localName==="slot"&&(i.hasInsertionPoint=!0),Aa(o),o.firstChild&&this._parseTemplateChildNodes(o,i,r),o.hasAttributes&&o.hasAttributes()&&(a=this._parseTemplateNodeAttributes(o,i,r)||a),a||r.noted}static _parseTemplateChildNodes(n,i,r){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,o=0,l;a;a=l){if(a.localName=="template"&&(a=Oa(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)a.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(i.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let c={parentIndex:o,parentInfo:r};this._parseTemplateNode(a,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),a.parentNode&&o++}}static _parseTemplateNestedTemplate(n,i,r){let a=n,o=this._parseTemplate(a,i);return(o.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),r.templateInfo=o,!0}static _parseTemplateNodeAttributes(n,i,r){let a=!1,o=Array.from(n.attributes);for(let l=o.length-1,c;c=o[l];l--)a=this._parseTemplateNodeAttribute(n,i,r,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(n,i,r,a,o){return a.slice(0,3)==="on-"?(n.removeAttribute(a),r.events=r.events||[],r.events.push({name:a.slice(3),value:o}),!0):a==="id"?(r.id=o,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let r=i.nodeInfoList,a=i.content||n.content,o=document.importNode(a,!0);o.__noInsertionPoint=!i.hasInsertionPoint;let l=o.nodeList=new Array(r.length);o.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=Kn(o,d);Na(this,o.$,h,d),Ma(this,h,d,i),ka(this,h,d)}return o=o,o}_addMethodEventListenerToNode(n,i,r,a){a=a||n;let o=Ra(a,i,r);return this._addEventListenerToNode(n,i,o),o}_addEventListenerToNode(n,i,r){n.addEventListener(i,r)}_removeEventListenerFromNode(n,i,r){n.removeEventListener(i,r)}}return t});let qe=0;const Ye=[],v={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Vn="__computeInfo",Ia=/[A-Z]/;function Yt(e,t,s){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),s))for(let i in n){let r=n[i],a=n[i]=Array(r.length);for(let o=0;o<r.length;o++)a[o]=r[o]}return n}function Re(e,t,s,n,i,r){if(t){let a=!1;const o=qe++;for(let l in s){let c=i?j(l):l,u=t[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==o)&&(!i||Is(l,p.trigger))&&(p.info&&(p.info.lastRun=o),p.fn(e,l,s,n,p.info,i,r),a=!0)}return a}return!1}function La(e,t,s,n,i,r,a,o){let l=!1,c=a?j(n):n,u=t[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==s)&&(!a||Is(n,p.trigger))&&(p.info&&(p.info.lastRun=s),p.fn(e,n,i,r,p.info,a,o),l=!0);return l}function Is(e,t){if(t){let s=t.name;return s==e||!!(t.structured&&Ln(s,e))||!!(t.wildcard&&Ke(s,e))}else return!0}function xi(e,t,s,n,i){let r=typeof i.method=="string"?e[i.method]:i.method,a=i.property;r?r.call(e,e.__data[a],n[a]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function Ba(e,t,s,n,i){let r=e[v.NOTIFY],a,o=qe++;for(let c in t)t[c]&&(r&&La(e,r,o,c,s,n,i)||i&&Fa(e,c,s))&&(a=!0);let l;a&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Fa(e,t,s){let n=j(t);if(n!==t){let i=Rt(n)+"-changed";return qn(e,i,s[t],t),!0}return!1}function qn(e,t,s,n){let i={value:s,queueProperty:!0};n&&(i.path=n),y(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function za(e,t,s,n,i,r){let o=(r?j(t):t)!=t?t:null,l=o?A(e,o):e.__data[t];o&&l===void 0&&(l=s[t]),qn(e,i.eventName,l,o)}function Ha(e,t,s,n,i){let r,a=e.detail,o=a&&a.path;o?(n=Ve(s,n,o),r=a&&a.value):r=e.currentTarget[s],r=i?!r:r,(!t[v.READ_ONLY]||!t[v.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,r,!0,!!o)&&(!a||!a.queueProperty)&&t._invalidateProperties()}function $a(e,t,s,n,i){let r=e.__data[t];vt&&(r=vt(r,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,r)}function Ua(e,t,s,n){let i=e[v.COMPUTE];if(i)if(ia){qe++;const r=Ka(e),a=[];for(let l in t)Si(l,i,a,r,n);let o;for(;o=a.shift();)Yn(e,"",t,s,o)&&Si(o.methodInfo,i,a,r,n);Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Re(e,i,r,s,n);)Object.assign(s,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const ja=(e,t,s)=>{let n=0,i=t.length-1,r=-1;for(;n<=i;){const a=n+i>>1,o=s.get(t[a].methodInfo)-s.get(e.methodInfo);if(o<0)n=a+1;else if(o>0)i=a-1;else{r=a;break}}r<0&&(r=i+1),t.splice(r,0,e)},Si=(e,t,s,n,i)=>{const r=i?j(e):e,a=t[r];if(a)for(let o=0;o<a.length;o++){const l=a[o];l.info.lastRun!==qe&&(!i||Is(e,l.trigger))&&(l.info.lastRun=qe,ja(l.info,s,n))}};function Ka(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const s=e[v.COMPUTE];let{counts:n,ready:i,total:r}=Va(e),a;for(;a=i.shift();){t.set(a,t.size);const o=s[a];o&&o.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&i.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function Va(e){const t=e[Vn],s={},n=e[v.COMPUTE],i=[];let r=0;for(let a in t){const o=t[a];r+=s[a]=o.args.filter(l=>!l.literal).length+(o.dynamicFn?1:0)}for(let a in n)t[a]||i.push(a);return{counts:s,ready:i,total:r}}function Yn(e,t,s,n,i){let r=hs(e,t,s,n,i);if(r===Ye)return!1;let a=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[a]?e._setPendingProperty(a,r,!0):(e[a]=r,!1)}function qa(e,t,s){let n=e.__dataLinkedPaths;if(n){let i;for(let r in n){let a=n[r];Ke(r,t)?(i=Ve(r,a,t),e._setPendingPropertyOrPath(i,s,!0,!0)):Ke(a,t)&&(i=Ve(a,r,t),e._setPendingPropertyOrPath(i,s,!0,!0))}}}function Wt(e,t,s,n,i,r,a){s.bindings=s.bindings||[];let o={kind:n,target:i,parts:r,literal:a,isCompound:r.length!==1};if(s.bindings.push(o),Xa(o)){let{event:c,negate:u}=o.parts[0];o.listenerEvent=c||Rt(i)+"-changed",o.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<o.parts.length;c++){let u=o.parts[c];u.compoundIndex=c,Ya(e,t,o,u,l)}}function Ya(e,t,s,n,i){if(!n.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,a={index:i,binding:s,part:n,evaluator:e};for(let o=0;o<r.length;o++){let l=r[o];typeof l=="string"&&(l=Jn(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:Wa,info:a,trigger:l})}}}function Wa(e,t,s,n,i,r,a){let o=a[i.index],l=i.binding,c=i.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let u=s[t];t=Ve(c.source,l.target,t),o._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(o)}else{let u=i.evaluator._evaluateBinding(e,c,t,s,n,r);u!==Ye&&Ja(e,o,l,c,u)}}function Ja(e,t,s,n,i){if(i=Ga(t,i,s,n),vt&&(i=vt(i,s.target,s.kind,t)),s.kind=="attribute")e._valueToNodeAttribute(t,i,s.target);else{let r=s.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[v.READ_ONLY]||!t[v.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function Ga(e,t,s,n){if(s.isCompound){let i=e.__dataCompoundStorage[s.target];i[n.compoundIndex]=t,t=i.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Xa(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Qa(e,t){let{nodeList:s,nodeInfoList:n}=t;if(n.length)for(let i=0;i<n.length;i++){let r=n[i],a=s[i],o=r.bindings;if(o)for(let l=0;l<o.length;l++){let c=o[l];Za(a,c),el(a,e,c)}a.__dataHost=e}}function Za(e,t){if(t.isCompound){let s=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length);for(let a=0;a<n.length;a++)i[a]=n[a].literal;let r=t.target;s[r]=i,t.literal&&t.kind=="property"&&(r==="className"&&(e=y(e)),e[r]=t.literal)}}function el(e,t,s){if(s.listenerEvent){let n=s.parts[0];e.addEventListener(s.listenerEvent,function(i){Ha(i,t,s.target,n.source,n.negate)})}}function Pi(e,t,s,n,i,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let a={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:r};for(let o=0,l;o<t.args.length&&(l=t.args[o]);o++)l.literal||e._addPropertyEffect(l.rootProperty,s,{fn:n,info:a,trigger:l});return r&&e._addPropertyEffect(t.methodName,s,{fn:n,info:a}),a}function hs(e,t,s,n,i){let r=e._methodHost||e,a=r[i.methodName];if(a){let o=e._marshalArgs(i.args,t,s);return o===Ye?Ye:a.apply(r,o)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const tl=[],Wn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",sl="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",il="(?:'(?:[^'\\\\]|\\\\.)*')",nl='(?:"(?:[^"\\\\]|\\\\.)*")',rl="(?:"+il+"|"+nl+")",Ei="(?:("+Wn+"|"+sl+"|"+rl+")\\s*)",ol="(?:"+Ei+"(?:,\\s*"+Ei+")*)",al="(?:\\(\\s*(?:"+ol+"?)\\)\\s*)",ll="("+Wn+"\\s*"+al+"?)",cl="(\\[\\[|{{)\\s*",ul="(?:]]|}})",dl="(?:(!)\\s*)?",hl=cl+dl+ll+ul,Ai=new RegExp(hl,"g");function Ti(e){let t="";for(let s=0;s<e.length;s++){let n=e[s].literal;t+=n||""}return t}function Jt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:tl};if(t[2].trim()){let i=t[2].replace(/\\,/g,"&comma;").split(",");return pl(i,n)}else return n}return null}function pl(e,t){return t.args=e.map(function(s){let n=Jn(s);return n.literal||(t.static=!1),n},this),t}function Jn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':s.value=t.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(t),s.literal=!0;break}return s.literal||(s.rootProperty=j(t),s.structured=us(t),s.structured&&(s.wildcard=t.slice(-2)==".*",s.wildcard&&(s.name=t.slice(0,-2)))),s}function Oi(e,t,s){let n=A(e,s);return n===void 0&&(n=t[s]),n}function Gn(e,t,s,n){const i={indexSplices:n};ls&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(s+".splices",i),e.notifyPath(s+".length",t.length),ls&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function Ae(e,t,s,n,i,r){Gn(e,t,s,[{index:n,addedCount:i,removed:r,object:t,type:"splice"}])}function fl(e){return e[0].toUpperCase()+e.substring(1)}const Dt=k(e=>{const t=Da(jn(e));class s extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return v}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Te.length){let i=Te[Te.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let r=this[v.READ_ONLY];for(let a in i)(!r||!r[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=i[a])}_addPropertyEffect(i,r,a){this._createPropertyAccessor(i,r==v.READ_ONLY);let o=Yt(this,r,!0)[i];o||(o=this[r][i]=[]),o.push(a)}_removePropertyEffect(i,r,a){let o=Yt(this,r,!0)[i],l=o.indexOf(a);l>=0&&o.splice(l,1)}_hasPropertyEffect(i,r){let a=this[r];return!!(a&&a[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,v.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,v.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,v.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,v.COMPUTE)}_setPendingPropertyOrPath(i,r,a,o){if(o||j(Array.isArray(i)?i[0]:i)!==i){if(!o){let l=A(this,i);if(i=wi(this,i,r),!i||!super._shouldPropertyChange(i,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,r,a))return qa(this,i,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,r,a);this[i]=r}return!1}_setUnmanagedPropertyToNode(i,r,a){(a!==i[r]||typeof a=="object")&&(r==="className"&&(i=y(i)),i[r]=a)}_setPendingProperty(i,r,a){let o=this.__dataHasPaths&&us(i),l=o?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,r,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),o?this.__dataTemp[i]=r:this.__data[i]=r,this.__dataPending[i]=r,(o||this[v.NOTIFY]&&this[v.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=a),!0):!1}_setProperty(i,r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let r=0;r<i.length;r++){let a=i[r];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,r){for(let a in i)(r||!this[v.READ_ONLY]||!this[v.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,i[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,r,a){let o=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ua(this,r,a,o),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,a,o),this._flushClients(),Re(this,this[v.REFLECT],r,a,o),Re(this,this[v.OBSERVE],r,a,o),l&&Ba(this,l,r,a,o),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,r,a){this[v.PROPAGATE]&&Re(this,this[v.PROPAGATE],i,r,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,r,a)}_runEffectsForTemplate(i,r,a,o){const l=(c,u)=>{Re(this,i.propertyEffects,c,a,u,i.nodeList);for(let d=i.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,a,u)};i.runEffects?i.runEffects(l,r,o):l(r,o)}linkPaths(i,r){i=Me(i),r=Me(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=r}unlinkPaths(i){i=Me(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,r){let a={path:""},o=A(this,i,a);Gn(this,o,a.path,r)}get(i,r){return A(r||this,i)}set(i,r,a){a?wi(a,i,r):(!this[v.READ_ONLY]||!this[v.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,r,!0)&&this._invalidateProperties()}push(i,...r){let a={path:""},o=A(this,i,a),l=o.length,c=o.push(...r);return r.length&&Ae(this,o,a.path,l,r.length,[]),c}pop(i){let r={path:""},a=A(this,i,r),o=!!a.length,l=a.pop();return o&&Ae(this,a,r.path,a.length,0,[l]),l}splice(i,r,a,...o){let l={path:""},c=A(this,i,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,a,...o),(o.length||u.length)&&Ae(this,c,l.path,r,o.length,u),u}shift(i){let r={path:""},a=A(this,i,r),o=!!a.length,l=a.shift();return o&&Ae(this,a,r.path,0,0,[l]),l}unshift(i,...r){let a={path:""},o=A(this,i,a),l=o.unshift(...r);return r.length&&Ae(this,o,a.path,0,r.length,[]),l}notifyPath(i,r){let a;if(arguments.length==1){let o={path:""};r=A(this,i,o),a=o.path}else Array.isArray(i)?a=Me(i):a=i;this._setPendingPropertyOrPath(a,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,r){this._addPropertyEffect(i,v.READ_ONLY),r&&(this["_set"+fl(i)]=function(a){this._setProperty(i,a)})}_createPropertyObserver(i,r,a){let o={property:i,method:r,dynamicFn:!!a};this._addPropertyEffect(i,v.OBSERVE,{fn:xi,info:o,trigger:{name:i}}),a&&this._addPropertyEffect(r,v.OBSERVE,{fn:xi,info:o,trigger:{name:r}})}_createMethodObserver(i,r){let a=Jt(i);if(!a)throw new Error("Malformed observer expression '"+i+"'");Pi(this,a,v.OBSERVE,hs,null,r)}_createNotifyingProperty(i){this._addPropertyEffect(i,v.NOTIFY,{fn:za,info:{eventName:Rt(i)+"-changed",property:i}})}_createReflectedProperty(i){let r=this.constructor.attributeNameForProperty(i);r[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,v.REFLECT,{fn:$a,info:{attrName:r}})}_createComputedProperty(i,r,a){let o=Jt(r);if(!o)throw new Error("Malformed computed expression '"+r+"'");const l=Pi(this,o,v.COMPUTE,Yn,i,a);Yt(this,Vn)[i]=l}_marshalArgs(i,r,a){const o=this.__data,l=[];for(let c=0,u=i.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:_,literal:f}=i[c];if(!f)if(p){const g=Ke(d,r),m=Oi(o,a,g?r:d);_={path:g?r:d,value:m,base:g?A(o,d):m}}else _=h?Oi(o,a,d):o[d];if(ls&&!this._overrideLegacyUndefined&&_===void 0&&i.length>1)return Ye;l[c]=_}return l}static addPropertyEffect(i,r,a){this.prototype._addPropertyEffect(i,r,a)}static createPropertyObserver(i,r,a){this.prototype._createPropertyObserver(i,r,a)}static createMethodObserver(i,r){this.prototype._createMethodObserver(i,r)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,r){this.prototype._createReadOnlyProperty(i,r)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,r,a){this.prototype._createComputedProperty(i,r,a)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,r){let a=this.constructor._parseTemplate(i),o=this.__preBoundTemplateInfo==a;if(!o)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(r)if(a=Object.create(a),a.wasPreBound=o,!this.__templateInfo)this.__templateInfo=a;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(i,r,a){let o=i.hostProps=i.hostProps||{};o[r]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[r]=l[r]||[]).push(a)}_stampTemplate(i,r){r=r||this._bindTemplate(i,!0),Te.push(this);let a=super._stampTemplate(i,r);if(Te.pop(),r.nodeList=a.nodeList,!r.wasPreBound){let o=r.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)o.push(l)}return a.templateInfo=r,Qa(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(i){const r=i.templateInfo,{previousSibling:a,nextSibling:o,parent:l}=r;a?a.nextSibling=o:l&&(l.firstChild=o),o?o.previousSibling=a:l&&(l.lastChild=a),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];y(y(d).parentNode).removeChild(d)}}static _parseTemplateNode(i,r,a){let o=t._parseTemplateNode.call(this,i,r,a);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,r);l&&(i.textContent=Ti(l)||" ",Wt(this,r,a,"text","textContent",l),o=!0)}return o}static _parseTemplateNodeAttribute(i,r,a,o,l){let c=this._parseBindings(l,r);if(c){let u=o,d="property";Ia.test(o)?d="attribute":o[o.length-1]=="$"&&(o=o.slice(0,-1),d="attribute");let h=Ti(c);return h&&d=="attribute"&&(o=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(o)),i.setAttribute(o,h)),d=="attribute"&&u=="disable-upgrade$"&&i.setAttribute(o,""),i.localName==="input"&&u==="value"&&i.setAttribute(u,""),i.removeAttribute(u),d==="property"&&(o=Fn(o)),Wt(this,r,a,d,o,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,i,r,a,o,l)}static _parseTemplateNestedTemplate(i,r,a){let o=t._parseTemplateNestedTemplate.call(this,i,r,a);const l=i.parentNode,c=a.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";_i&&(u||d)&&(l.removeChild(i),a=a.parentInfo,a.templateInfo=c,a.noted=!0,o=!1);let h=c.hostProps;if(Dn&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),_i||(a.parentInfo.noted=!0));else{let p="{";for(let _ in h){let f=[{mode:p,source:_,dependencies:[_],hostProp:!0}];Wt(this,r,a,"property","_host_"+_,f)}}return o}static _parseBindings(i,r){let a=[],o=0,l;for(;(l=Ai.exec(i))!==null;){l.index>o&&a.push({literal:i.slice(o,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",_=-1;c=="{"&&(_=d.indexOf("::"))>0&&(p=d.substring(_+2),d=d.substring(0,_),h=!0);let f=Jt(d),g=[];if(f){let{args:m,methodName:b}=f;for(let S=0;S<m.length;S++){let x=m[S];x.literal||g.push(x)}let w=r.dynamicFns;(w&&w[b]||f.static)&&(g.push(b),f.dynamicFn=!0)}else g.push(d);a.push({source:d,mode:c,negate:u,customEvent:h,signature:f,dependencies:g,event:p}),o=Ai.lastIndex}if(o&&o<i.length){let c=i.substring(o);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(i,r,a,o,l,c){let u;return r.signature?u=hs(i,a,o,l,r.signature):a!=r.source?u=A(i,r.source):c&&us(a)?u=A(i,a):u=i.__data[a],r.negate&&(u=!u),u}}return s}),Te=[];function _l(e){const t={};for(let s in e){const n=e[s];t[s]=typeof n=="function"?{type:n}:n}return t}const ml=k(e=>{const t=$n(e);function s(r){const a=Object.getPrototypeOf(r);return a.prototype instanceof i?a:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let a=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const o=r.properties;o&&(a=_l(o))}r.__ownProperties=a}return r.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(o=>this.prototype._addPropertyToAttributeMap(o)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=s(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=s(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){const o=this._properties[a];return o&&o.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});const yl="3.5.2",ps=window.ShadyCSS&&window.ShadyCSS.cssBuild,It=k(e=>{const t=ml(Dt(e));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!ps){const h=c.content.querySelectorAll("style"),p=Rs(c),_=da(u),f=c.content.firstElementChild;for(let m=0;m<_.length;m++){let b=_[m];b.textContent=l._processStyleText(b.textContent,d),c.content.insertBefore(b,f)}let g=0;for(let m=0;m<p.length;m++){let b=p[m],w=h[g];w!==b?(b=b.cloneNode(!0),w.parentNode.insertBefore(b,w)):g++,b.textContent=l._processStyleText(b.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),na&&ps&&Qo){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(_=>{p+=_.textContent,_.parentNode.removeChild(_)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function a(l){let c=null;if(l&&(!we||ta)&&(c=je.import(l,"template"),we&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class o extends t{static get polymerElementVersion(){return yl}static _finalizeClass(){t._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Ue||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)i(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Ns(c.url);else{const u=je.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Zo,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return Os(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Be(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=y(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),sa&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Be(this.importPath)),Be(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Rn&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return o});class ne{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,s){this._asyncModule=t,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,We.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),We.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,s,n){return t instanceof ne?t._cancelAsync():t=new ne,t.setConfig(s,n),t}}let We=new Set;const Xn=function(e){We.add(e)},gl=function(){const e=!!We.size;return We.forEach(t=>{try{t.flush()}catch(s){setTimeout(()=>{throw s})}}),e};let Ls=typeof document.head.style.touchAction=="string",xt="__polymerGestures",ut="__polymerGesturesHandled",fs="__polymerGesturesTouchAction",Ni=25,ki=5,bl=2,wl=2500,Qn=["mousedown","mousemove","mouseup","click"],vl=[0,1,4,2],Cl=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Bs(e){return Qn.indexOf(e)>-1}let Fs=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){Fs=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Zn(e){if(!(Bs(e)||e==="touchend")&&Ls&&Fs&&ea)return{passive:!0}}let er=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const _s=[],xl={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Sl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Pl(e){return xl[e.localName]||!1}function El(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let s=e.getRootNode();if(e.id){let n=s.querySelectorAll(`label[for = '${e.id}']`);for(let i=0;i<n.length;i++)t.push(n[i])}}catch{}}return t}let Mi=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[ut]={skip:!0},e.type==="click")){let s=!1,n=Lt(e);for(let i=0;i<n.length;i++){if(n[i].nodeType===Node.ELEMENT_NODE){if(n[i].localName==="label")_s.push(n[i]);else if(Pl(n[i])){let r=El(n[i]);for(let a=0;a<r.length;a++)s=s||_s.indexOf(r[a])>-1}}if(n[i]===E.mouse.target)return}if(s)return;e.preventDefault(),e.stopPropagation()}};function Ri(e){let t=er?["click"]:Qn;for(let s=0,n;s<t.length;s++)n=t[s],e?(_s.length=0,document.addEventListener(n,Mi,!0)):document.removeEventListener(n,Mi,!0)}function Al(e){E.mouse.mouseIgnoreJob||Ri(!0);let t=function(){Ri(),E.mouse.target=null,E.mouse.mouseIgnoreJob=null};E.mouse.target=Lt(e)[0],E.mouse.mouseIgnoreJob=ne.debounce(E.mouse.mouseIgnoreJob,Fe.after(wl),t)}function se(e){let t=e.type;if(!Bs(t))return!1;if(t==="mousemove"){let s=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!Cl&&(s=vl[e.which]||0),!!(s&1)}else return(e.button===void 0?0:e.button)===0}function Tl(e){if(e.type==="click"){if(e.detail===0)return!0;let t=q(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let s=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=s.left&&n<=s.right&&i>=s.top&&i<=s.bottom)}return!1}let E={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Ol(e){let t="auto",s=Lt(e);for(let n=0,i;n<s.length;n++)if(i=s[n],i[fs]){t=i[fs];break}return t}function tr(e,t,s){e.movefn=t,e.upfn=s,document.addEventListener("mousemove",t),document.addEventListener("mouseup",s)}function me(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",Al,Fs?{passive:!0}:!1);const Lt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Xe={},Z=[];function Nl(e,t){let s=document.elementFromPoint(e,t),n=s;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(e,t),i===n)break;n&&(s=n)}return s}function q(e){const t=Lt(e);return t.length>0?t[0]:e.target}function sr(e){let t,s=e.type,i=e.currentTarget[xt];if(!i)return;let r=i[s];if(r){if(!e[ut]&&(e[ut]={},s.slice(0,5)==="touch")){e=e;let a=e.changedTouches[0];if(s==="touchstart"&&e.touches.length===1&&(E.touch.id=a.identifier),E.touch.id!==a.identifier)return;Ls||(s==="touchstart"||s==="touchmove")&&kl(e)}if(t=e[ut],!t.skip){for(let a=0,o;a<Z.length;a++)o=Z[a],r[o.name]&&!t[o.name]&&o.flow&&o.flow.start.indexOf(e.type)>-1&&o.reset&&o.reset();for(let a=0,o;a<Z.length;a++)o=Z[a],r[o.name]&&!t[o.name]&&(t[o.name]=!0,o[s](e))}}}function kl(e){let t=e.changedTouches[0],s=e.type;if(s==="touchstart")E.touch.x=t.clientX,E.touch.y=t.clientY,E.touch.scrollDecided=!1;else if(s==="touchmove"){if(E.touch.scrollDecided)return;E.touch.scrollDecided=!0;let n=Ol(e),i=!1,r=Math.abs(E.touch.x-t.clientX),a=Math.abs(E.touch.y-t.clientY);e.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=a>r:n==="pan-y"&&(i=r>a)),i?e.preventDefault():St("track")}}function Ml(e,t,s){return Xe[t]?(Dl(e,t,s),!0):!1}function Rl(e,t,s){return Xe[t]?(Il(e,t,s),!0):!1}function Dl(e,t,s){let n=Xe[t],i=n.deps,r=n.name,a=e[xt];a||(e[xt]=a={});for(let o=0,l,c;o<i.length;o++)l=i[o],!(er&&Bs(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&e.addEventListener(l,sr,Zn(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);e.addEventListener(t,s),n.touchAction&&ir(e,n.touchAction)}function Il(e,t,s){let n=Xe[t],i=n.deps,r=n.name,a=e[xt];if(a)for(let o=0,l,c;o<i.length;o++)l=i[o],c=a[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&e.removeEventListener(l,sr,Zn(l)));e.removeEventListener(t,s)}function zs(e){Z.push(e);for(let t=0;t<e.emits.length;t++)Xe[e.emits[t]]=e}function Ll(e){for(let t=0,s;t<Z.length;t++){s=Z[t];for(let n=0,i;n<s.emits.length;n++)if(i=s.emits[n],i===e)return s}return null}function ir(e,t){Ls&&e instanceof HTMLElement&&V.run(()=>{e.style.touchAction=t}),e[fs]=t}function Hs(e,t,s){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=s,y(e).dispatchEvent(n),n.defaultPrevented){let i=s.preventer||s.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function St(e){let t=Ll(e);t.info&&(t.info.prevent=!0)}zs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){me(this.info)},mousedown:function(e){if(!se(e))return;let t=q(e),s=this,n=function(a){se(a)||(Oe("up",t,a),me(s.info))},i=function(a){se(a)&&Oe("up",t,a),me(s.info)};tr(this.info,n,i),Oe("down",t,e)},touchstart:function(e){Oe("down",q(e),e.changedTouches[0],e)},touchend:function(e){Oe("up",q(e),e.changedTouches[0],e)}});function Oe(e,t,s,n){t&&Hs(t,e,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:n,prevent:function(i){return St(i)}})}zs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>bl&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,me(this.info)},mousedown:function(e){if(!se(e))return;let t=q(e),s=this,n=function(a){let o=a.clientX,l=a.clientY;Di(s.info,o,l)&&(s.info.state=s.info.started?a.type==="mouseup"?"end":"track":"start",s.info.state==="start"&&St("tap"),s.info.addMove({x:o,y:l}),se(a)||(s.info.state="end",me(s.info)),t&&Gt(s.info,t,a),s.info.started=!0)},i=function(a){s.info.started&&n(a),me(s.info)};tr(this.info,n,i),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=q(e),s=e.changedTouches[0],n=s.clientX,i=s.clientY;Di(this.info,n,i)&&(this.info.state==="start"&&St("tap"),this.info.addMove({x:n,y:i}),Gt(this.info,t,s),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=q(e),s=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),Gt(this.info,t,s))}});function Di(e,t,s){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),i=Math.abs(e.y-s);return n>=ki||i>=ki}function Gt(e,t,s){if(!t)return;let n=e.moves[e.moves.length-2],i=e.moves[e.moves.length-1],r=i.x-e.x,a=i.y-e.y,o,l=0;n&&(o=i.x-n.x,l=i.y-n.y),Hs(t,"track",{state:e.state,x:s.clientX,y:s.clientY,dx:r,dy:a,ddx:o,ddy:l,sourceEvent:s,hover:function(){return Nl(s.clientX,s.clientY)}})}zs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){se(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){se(e)&&Ii(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Ii(this.info,e.changedTouches[0],e)}});function Ii(e,t,s){let n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),r=q(s||t);!r||Sl[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Ni&&i<=Ni||Tl(t))&&(e.prevent||Hs(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:s}))}const nr=k(e=>{class t extends e{_addEventListenerToNode(n,i,r){Ml(n,i,r)||super._addEventListenerToNode(n,i,r)}_removeEventListenerFromNode(n,i,r){Rl(n,i,r)||super._removeEventListenerFromNode(n,i,r)}}return t});const Bl=/:host\(:dir\((ltr|rtl)\)\)/g,Fl=':host([dir="$1"])',zl=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Hl=':host([dir="$2"]) $1',$l=/:dir\((?:ltr|rtl)\)/,Li=!!(window.ShadyDOM&&window.ShadyDOM.inUse),ze=[];let He=null,$s="";function rr(){$s=document.documentElement.getAttribute("dir")}function or(e){e.__autoDirOptOut||e.setAttribute("dir",$s)}function ar(){rr(),$s=document.documentElement.getAttribute("dir");for(let e=0;e<ze.length;e++)or(ze[e])}function Ul(){He&&He.takeRecords().length&&ar()}const jl=k(e=>{Li||He||(rr(),He=new MutationObserver(ar),He.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=jn(e);class s extends t{static _processStyleText(i,r){return i=t._processStyleText.call(this,i,r),!Li&&$l.test(i)&&(i=this._replaceDirInCssText(i),this.__activateDir=!0),i}static _replaceDirInCssText(i){let r=i;return r=r.replace(Bl,Fl),r=r.replace(zl,Hl),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Ul(),ze.push(this),or(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const i=ze.indexOf(this);i>-1&&ze.splice(i,1)}}}return s.__activateDir=!1,s});function Bi(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Bi():window.addEventListener("DOMContentLoaded",Bi);function Ne(e,t,s){return{index:e,removed:t,addedCount:s}}const lr=0,cr=1,ms=2,ys=3;function Kl(e,t,s,n,i,r){let a=r-i+1,o=s-t+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(o),l[c][0]=c;for(let c=0;c<o;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let u=1;u<o;u++)if(Us(e[t+u-1],n[i+c-1]))l[c][u]=l[c-1][u-1];else{let d=l[c-1][u]+1,h=l[c][u-1]+1;l[c][u]=d<h?d:h}return l}function Vl(e){let t=e.length-1,s=e[0].length-1,n=e[t][s],i=[];for(;t>0||s>0;){if(t==0){i.push(ms),s--;continue}if(s==0){i.push(ys),t--;continue}let r=e[t-1][s-1],a=e[t-1][s],o=e[t][s-1],l;a<o?l=a<r?a:r:l=o<r?o:r,l==r?(r==n?i.push(lr):(i.push(cr),n=r),t--,s--):l==a?(i.push(ys),t--,n=a):(i.push(ms),s--,n=o)}return i.reverse(),i}function ql(e,t,s,n,i,r){let a=0,o=0,l,c=Math.min(s-t,r-i);if(t==0&&i==0&&(a=Yl(e,n,c)),s==e.length&&r==n.length&&(o=Wl(e,n,c-a)),t+=a,i+=a,s-=o,r-=o,s-t==0&&r-i==0)return[];if(t==s){for(l=Ne(t,[],0);i<r;)l.removed.push(n[i++]);return[l]}else if(i==r)return[Ne(t,[],s-t)];let u=Vl(Kl(e,t,s,n,i,r));l=void 0;let d=[],h=t,p=i;for(let _=0;_<u.length;_++)switch(u[_]){case lr:l&&(d.push(l),l=void 0),h++,p++;break;case cr:l||(l=Ne(h,[],0)),l.addedCount++,h++,l.removed.push(n[p]),p++;break;case ms:l||(l=Ne(h,[],0)),l.addedCount++,h++;break;case ys:l||(l=Ne(h,[],0)),l.removed.push(n[p]),p++;break}return l&&d.push(l),d}function Yl(e,t,s){for(let n=0;n<s;n++)if(!Us(e[n],t[n]))return n;return s}function Wl(e,t,s){let n=e.length,i=t.length,r=0;for(;r<s&&Us(e[--n],t[--i]);)r++;return r}function ur(e,t){return ql(e,0,e.length,t,0,t.length)}function Us(e,t){return e===t}function de(e){return e.localName==="slot"}let Fi=class{static getFlattenedNodes(e){const t=y(e);if(de(e))return e=e,t.assignedNodes({flatten:!0});{const s=[];for(let n=0;n<t.childNodes.length;n++){const i=t.childNodes[n];if(de(i)){const r=i;s.push(...y(r).assignedNodes({flatten:!0}))}else s.push(i)}return s}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){de(this._target)?this._listenSlots([this._target]):y(this._target).children&&(this._listenSlots(y(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){de(this._target)?this._unlistenSlots([this._target]):y(this._target).children&&(this._unlistenSlots(y(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,V.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let s=e[t];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),s=ur(t,this._effectiveNodes);for(let i=0,r;i<s.length&&(r=s[i]);i++)for(let a=0,o;a<r.removed.length&&(o=r.removed[a]);a++)e.removedNodes.push(o);for(let i=0,r;i<s.length&&(r=s[i]);i++)for(let a=r.index;a<r.index+r.addedCount;a++)e.addedNodes.push(t[a]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];de(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let s=e[t];de(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}};const dr=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=gl();while(e||t)};const he=Element.prototype,Jl=he.matches||he.matchesSelector||he.mozMatchesSelector||he.msMatchesSelector||he.oMatchesSelector||he.webkitMatchesSelector,hr=function(e,t){return Jl.call(e,t)};class C{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Fi(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(y(this.node).contains(t))return!0;let s=t,n=t.ownerDocument;for(;s&&s!==n&&s!==this.node;)s=y(s).parentNode||y(s).host;return s===this.node}getOwnerRoot(){return y(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?y(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],s=y(this.node).assignedSlot;for(;s;)t.push(s),s=y(s).assignedSlot;return t}importNode(t,s){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return y(n).importNode(t,s)}getEffectiveChildNodes(){return Fi.getFlattenedNodes(this.node)}queryDistributedElements(t){let s=this.getEffectiveChildNodes(),n=[];for(let i=0,r=s.length,a;i<r&&(a=s[i]);i++)a.nodeType===Node.ELEMENT_NODE&&hr(a,t)&&n.push(a);return n}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function Gl(e,t){for(let s=0;s<t.length;s++){let n=t[s];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}function zi(e,t){for(let s=0;s<t.length;s++){let n=t[s];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}function Xl(e,t){for(let s=0;s<t.length;s++){let n=t[s];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(i){this.node[n]=i},configurable:!0})}}class gs{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}C.prototype.cloneNode;C.prototype.appendChild;C.prototype.insertBefore;C.prototype.removeChild;C.prototype.replaceChild;C.prototype.setAttribute;C.prototype.removeAttribute;C.prototype.querySelector;C.prototype.querySelectorAll;C.prototype.parentNode;C.prototype.firstChild;C.prototype.lastChild;C.prototype.nextSibling;C.prototype.previousSibling;C.prototype.firstElementChild;C.prototype.lastElementChild;C.prototype.nextElementSibling;C.prototype.previousElementSibling;C.prototype.childNodes;C.prototype.children;C.prototype.classList;C.prototype.textContent;C.prototype.innerHTML;let bs=C;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(C.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=C.prototype[t])}),zi(e.prototype,["classList"]),bs=e,Object.defineProperties(gs.prototype,{localTarget:{get(){const t=this.event.currentTarget,s=t&&P(t).getOwnerRoot(),n=this.path;for(let i=0;i<n.length;i++){const r=n[i];if(P(r).getOwnerRoot()===s)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Gl(C.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),zi(C.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Xl(C.prototype,["textContent","innerHTML","className"]);const P=function(e){if(e=e||document,e instanceof bs||e instanceof gs)return e;let t=e.__domApi;return t||(e instanceof Event?t=new gs(e):t=new bs(e),e.__domApi=t),t};const Xt=window.ShadyDOM,Hi=window.ShadyCSS;function $i(e,t){return y(e).getRootNode()===t}function Ql(e,t=!1){if(!Xt||!Hi||!Xt.handlesDynamicScoping)return null;const s=Hi.ScopingShim;if(!s)return null;const n=s.scopeForNode(e),i=y(e).getRootNode(),r=a=>{if(!$i(a,i))return;const o=Array.from(Xt.nativeMethods.querySelectorAll.call(a,"*"));o.push(a);for(let l=0;l<o.length;l++){const c=o[l];if(!$i(c,i))continue;const u=s.currentScopeForNode(c);u!==n&&(u!==""&&s.unscopeNode(c,u),s.scopeNode(c,n))}};if(r(e),t){const a=new MutationObserver(o=>{for(let l=0;l<o.length;l++){const c=o[l];for(let u=0;u<c.addedNodes.length;u++){const d=c.addedNodes[u];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return a.observe(e,{childList:!0,subtree:!0}),a}else return null}const Qt="disable-upgrade",pr=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};k(e=>{const t=It(e);let s=pr(t);class n extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return s.call(this).concat(Qt)}_initializeProperties(){this.hasAttribute(Qt)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,a,o,l){r==Qt?this.__isUpgradeDisabled&&o==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,y(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,a,o,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});const nt="disable-upgrade";let Zl=window.ShadyCSS;const fr=k(e=>{const t=nr(It(e)),s=ps?t:jl(t),n=pr(s),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends s{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,l,c){(this.__dataAttributes&&this.__dataAttributes[o]||o===nt)&&this.attributeChangedCallback(o,l,c,null)}setAttribute(o,l){if(st&&!this._legacyForceObservedAttributes){const c=this.getAttribute(o);super.setAttribute(o,l),this.__attributeReaction(o,c,String(l))}else super.setAttribute(o,l)}removeAttribute(o){if(st&&!this._legacyForceObservedAttributes){const l=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,l,null)}else super.removeAttribute(o)}static get observedAttributes(){return st&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(nt)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,l,c,u){l!==c&&(o==nt?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,y(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,l,c,u),this.attributeChanged(o,l,c)))}attributeChanged(o,l,c){}_initializeProperties(){if(Ue&&this.hasAttribute(nt))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),st&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const o=this.attributes;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,l){return this._deserializeValue(o,l)}reflectPropertyToAttribute(o,l,c){this._propertyToAttribute(o,l,c)}serializeValueToAttribute(o,l,c){this._valueToNodeAttribute(c||this,o,l)}extend(o,l){if(!(o&&l))return o||l;let c=Object.getOwnPropertyNames(l);for(let u=0,d;u<c.length&&(d=c[u]);u++){let h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(o,d,h)}return o}mixin(o,l){for(let c in l)o[c]=l[c];return o}chainObject(o,l){return o&&l&&o!==l&&(o.__proto__=l),o}instanceTemplate(o){let l=this.constructor._contentForTemplate(o);return document.importNode(l,!0)}fire(o,l,c){c=c||{},l=l??{};let u=new Event(o,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let d=c.node||this;return y(d).dispatchEvent(u),u}listen(o,l,c){o=o||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),d=u.get(o);d||(d={},u.set(o,d));let h=l+c;d[h]||(d[h]=this._addMethodEventListenerToNode(o,l,c,this))}unlisten(o,l,c){o=o||this;let u=this.__boundListeners&&this.__boundListeners.get(o),d=l+c,h=u&&u[d];h&&(this._removeEventListenerFromNode(o,l,h),u[d]=null)}setScrollDirection(o,l){ir(l||this,i[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=y(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){const l=P(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return P(this).getEffectiveChildNodes()}queryDistributedElements(o){return P(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=o[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(o){let l=this.queryDistributedElements(o);return l&&l[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let l=this.root.querySelector(o||"slot");return l?P(l).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){const l=this;return l!==o&&y(l).contains(o)&&y(l).getRootNode()===y(o).getRootNode()}isLocalDescendant(o){return this.root===y(o).getRootNode()}scopeSubtree(o,l=!1){return Ql(o,l)}getComputedStyleValue(o){return Zl.getComputedStyleValue(this,o)}debounce(o,l,c){return this._debouncers=this._debouncers||{},this._debouncers[o]=ne.debounce(this._debouncers[o],c>0?Fe.after(c):V,l.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];return!!(l&&l.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.cancel()}async(o,l){return l>0?Fe.run(o.bind(this),l):~V.run(o.bind(this))}cancelAsync(o){o<0?V.cancel(~o):Fe.cancel(o)}create(o,l){let c=document.createElement(o);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(o,l){return hr(l||this,o)}toggleAttribute(o,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(o)),l?(y(c).setAttribute(o,""),!0):(y(c).removeAttribute(o),!1)}toggleClass(o,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(o)),l?c.classList.add(o):c.classList.remove(o)}transform(o,l){l=l||this,l.style.webkitTransform=o,l.style.transform=o}translate3d(o,l,c,u){u=u||this,this.transform("translate3d("+o+","+l+","+c+")",u)}arrayDelete(o,l){let c;if(Array.isArray(o)){if(c=o.indexOf(l),c>=0)return o.splice(c,1)}else if(c=A(this,o).indexOf(l),c>=0)return this.splice(o,c,1);return null}_logger(o,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),o){case"log":case"warn":case"error":console[o](...l)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...l){return["[%s::%s]",this.is,o,...l]}}return r.prototype.is="",r});const ec={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},_r={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},tc=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},_r);function sc(e,t,s){const n=e._noAccessors,i=Object.getOwnPropertyNames(e);for(let r=0;r<i.length;r++){let a=i[r];if(!(a in s))if(n)t[a]=e[a];else{let o=Object.getOwnPropertyDescriptor(e,a);o&&(o.configurable=!0,Object.defineProperty(t,a,o))}}}function ic(e,t,s){for(let n=0;n<t.length;n++)mr(e,t[n],s,tc)}function mr(e,t,s,n){sc(t,e,n);for(let i in ec)t[i]&&(s[i]=s[i]||[],s[i].push(t[i]))}function yr(e,t,s){t=t||[];for(let n=e.length-1;n>=0;n--){let i=e[n];i?Array.isArray(i)?yr(i,t):t.indexOf(i)<0&&(!s||s.indexOf(i)<0)&&t.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return t}function Ui(e,t){for(const s in t){const n=e[s],i=t[s];!("value"in i)&&n&&"value"in n?e[s]=Object.assign({value:n.value},i):e[s]=i}}const ji=fr(HTMLElement);function nc(e,t,s){let n;const i={};class r extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)Ui(l,n[c].properties);return Ui(l,e.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=i.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Ue&&a(l);const c=Object.getPrototypeOf(this);let u=i.beforeRegister;if(u)for(let d=0;d<u.length;d++)u[d].call(c);if(u=i.registered,u)for(let d=0;d<u.length;d++)u[d].call(c)}}_applyListeners(){super._applyListeners();const l=i.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let d in u)this._addMethodEventListenerToNode(this,d,u[d])}}_ensureAttributes(){const l=i.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let d in u)this._ensureAttribute(d,u[d])}super._ensureAttributes()}ready(){super.ready();let l=i.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=i.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=i.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let d=i.attributeChanged;if(d)for(let h=0;h<d.length;h++)d[h].call(this,l,c,u)}}if(s){Array.isArray(s)||(s=[s]);let o=t.prototype.behaviors;n=yr(s,null,o),r.prototype.behaviors=o?o.concat(s):n}const a=o=>{n&&ic(o,n,i),mr(o,e,i,_r)};return Ue||a(r.prototype),r.generatedFrom=e,r}const rc=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let s=t?t(ji):ji;return s=nc(e,s,e.behaviors),s.is=s.prototype.is=e.is,s};const Bt=function(e){let t;return typeof e=="function"?t=e:t=Bt.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};Bt.Class=rc;function js(e,t,s,n,i){let r;i&&(r=typeof s=="object"&&s!==null,r&&(n=e.__dataTemp[t]));let a=n!==s&&(n===n||s===s);return r&&a&&(e.__dataTemp[t]=s),a}const Ks=k(e=>{class t extends e{_shouldPropertyChange(n,i,r){return js(this,n,i,r,!0)}}return t}),gr=k(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,i,r){return js(this,n,i,r,this.mutableData)}}return t});Ks._mutablePropertyChange=js;let ws=null;function vs(){return ws}vs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:vs,writable:!0}});const br=Dt(vs),oc=Ks(br);function ac(e,t){ws=e,Object.setPrototypeOf(e,t.prototype),new t,ws=null}const lc=Dt(class{});function wr(e,t){for(let s=0;s<t.length;s++){let n=t[s];if(!!e!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),y(y(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const i=n.__polymerReplaced__;i&&y(y(i).parentNode).replaceChild(n,i)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class J extends lc{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let s=[];this.children=s;for(let i=this.root.firstChild;i;i=i.nextSibling)s.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,s){this._setPendingPropertyOrPath(t,s,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,s,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,s,i=>{i.model=this,n(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(t,s,n)}}_showHideChildren(t){wr(t,this.children)}_setUnmanagedPropertyToNode(t,s,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&s=="textContent"?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,s,n)}get parentModel(){let t=this.__parentModel;if(!t){let s;t=this;do t=t.__dataHost.__dataHost;while((s=t.__templatizeOptions)&&!s.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}J.prototype.__dataHost;J.prototype.__templatizeOptions;J.prototype._methodHost;J.prototype.__templatizeOwner;J.prototype.__hostProps;const cc=Ks(J);function Ki(e){let t=e.__dataHost;return t&&t._methodHost||t}function uc(e,t,s){let n=s.mutableData?cc:J;Pt.mixin&&(n=Pt.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=s,i.prototype._bindTemplate(e),pc(i,e,t,s),i}function dc(e,t,s,n){let i=s.forwardHostProp;if(i&&t.hasHostProps){const r=e.localName=="template";let a=t.templatizeTemplateClass;if(!a){if(r){let l=s.mutableData?oc:br;class c extends l{}a=t.templatizeTemplateClass=c}else{const l=e.constructor;class c extends l{}a=t.templatizeTemplateClass=c}let o=t.hostProps;for(let l in o)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:hc(l,i)}),a.prototype._createNotifyingProperty("_host_"+l);Rn&&n&&mc(t,s,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),r)ac(e,a),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,a.prototype);const o=t.hostProps;for(let l in o)if(l="_host_"+l,l in e){const c=e[l];delete e[l],e.__data[l]=c}}}}function hc(e,t){return function(n,i,r){t.call(n.__templatizeOwner,i.substring(6),r[i])}}function pc(e,t,s,n){let i=s.hostProps||{};for(let r in n.instanceProps){delete i[r];let a=n.notifyInstanceProp;a&&e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:fc(r,a)})}if(n.forwardHostProp&&t.__dataHost)for(let r in i)s.hasHostProps||(s.hasHostProps=!0),e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:_c()})}function fc(e,t){return function(n,i,r){t.call(n.__templatizeOwner,n,i,r[i])}}function _c(){return function(t,s,n){t.__dataHost._setPendingPropertyOrPath("_host_"+s,n[s],!0,!0)}}function Pt(e,t,s){if(we&&!Ki(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(s=s||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let i=(t?t.constructor:J)._parseTemplate(e),r=i.templatizeInstanceClass;r||(r=uc(e,i,s),i.templatizeInstanceClass=r);const a=Ki(e);dc(e,i,s,a);let o=class extends r{};return o.prototype._methodHost=a,o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=i.hostProps,o=o,o}function mc(e,t,s){const n=s.constructor._properties,{propertyEffects:i}=e,{instanceProps:r}=t;for(let a in i)if(!n[a]&&!(r&&r[a])){const o=i[a];for(let l=0;l<o.length;l++){const{part:c}=o[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function yc(e,t){let s;for(;t;)if(s=t.__dataHost?t:t.__templatizeInstance)if(s.__dataHost!=e)t=s.__dataHost;else return s;else t=y(t).parentNode;return null}let Vi=!1;function Vs(){if(Ue&&!Mn){if(!Vi){Vi=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const gc=nr(gr(Dt(HTMLElement)));class bc extends gc{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),we)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,s,n,i){this.mutableData=!0}connectedCallback(){Vs()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){y(y(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let s=new MutationObserver(()=>{if(t=this.querySelector("template"),t)s.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});s.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let s=this.root.firstChild;s;s=s.nextSibling)this.__children[this.__children.length]=s;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",bc);const qi=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class vr{constructor(t,s){xr(t,s);const n=s.reduce((i,r,a)=>i+Cr(r)+t[a+1],t[0]);this.value=n.toString()}toString(){return this.value}}function Cr(e){if(e instanceof vr)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function wc(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof vr)return Cr(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const xe=function(t,...s){xr(t,s);const n=document.createElement("template");let i=s.reduce((r,a,o)=>r+wc(a)+t[o+1],t[0]);return qi&&(i=qi.createHTML(i)),n.innerHTML=i,n},xr=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};const qs=It(HTMLElement);const vc=gr(qs);class Yi extends vc{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!cs,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),Vs()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=y(y(this).parentNode);for(let s=0;s<this.__instances.length;s++)this.__attachInstance(s,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let s=this.template=t._templateInfo?t:this.querySelector("template");if(!s){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Pt(s,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(i,r){let a=this.__instances;for(let o=0,l;o<a.length&&(l=a[o]);o++)l.forwardHostProp(i,r)},notifyInstanceProp:function(i,r,a){if(ma(this.as,r)){let o=i[this.itemsIndexAs];r==this.as&&(this.items[o]=a);let l=Ve(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,r);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let s=t,n=this.__getMethodHost();return function(){return n[s].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let s=this.__observePaths;for(let n=0;n<s.length;n++)t.indexOf(s[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,s=0){this.__renderDebouncer=ne.debounce(this.__renderDebouncer,s>0?Fe.after(s):V,t.bind(this)),Xn(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),dr()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const s=this.__sortAndFilterItems(t),n=this.__calculateLimit(s.length);this.__updateInstances(t,n,s),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!cs||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let s=new Array(t.length);for(let n=0;n<t.length;n++)s[n]=n;return this.__filterFn&&(s=s.filter((n,i,r)=>this.__filterFn(t[n],i,r))),this.__sortFn&&s.sort((n,i)=>this.__sortFn(t[n],t[i])),s}__calculateLimit(t){let s=t;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(s=Math.min(t,this.initialCount),i=Math.max(s-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(t-n,0),this.__chunkCount),s=Math.min(n+i,t)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=s<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,s}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,s=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*s)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,s,n){const i=this.__itemsIdxToInstIdx={};let r;for(r=0;r<s;r++){let a=this.__instances[r],o=n[r],l=t[o];i[o]=r,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,r),a._setPendingProperty(this.itemsIndexAs,o),a._flushProperties()):this.__insertInstance(l,r,o)}for(let a=this.__instances.length-1;a>=r;a--)this.__detachAndRemoveInstance(a)}__detachInstance(t){let s=this.__instances[t];const n=y(s.root);for(let i=0;i<s.children.length;i++){let r=s.children[i];n.appendChild(r)}return s}__attachInstance(t,s){let n=this.__instances[t];s.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,s,n){let i={};return i[this.as]=t,i[this.indexAs]=s,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(t,s,n){const i=this.__stampInstance(t,s,n);let r=this.__instances[s+1],a=r?r.children[0]:this;return y(y(this).parentNode).insertBefore(i.root,a),this.__instances[s]=i,i}_showHideChildren(t){for(let s=0;s<this.__instances.length;s++)this.__instances[s]._showHideChildren(t)}__handleItemPath(t,s){let n=t.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let a=i<0?"":n.substring(i+1);this.__handleObservedPaths(a);let o=this.__itemsIdxToInstIdx[r],l=this.__instances[o];if(l){let c=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(c,s,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let s=this.modelForElement(t);return s&&s[this.as]}indexForElement(t){let s=this.modelForElement(t);return s&&s[this.indexAs]}modelForElement(t){return yc(this.template,t)}}customElements.define(Yi.is,Yi);class Sr extends qs{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=ne.debounce(this.__renderDebouncer,V,()=>this.__render()),Xn(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=y(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!y(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),Vs()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let s=t._templateInfo?t:y(t).querySelector("template");if(!s){let n=new MutationObserver(()=>{if(y(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=s}return!0}__ensureInstance(){let t=y(this).parentNode;if(this.__hasInstance()){let s=this.__getInstanceNodes();if(s&&s.length&&y(this).previousSibling!==s[s.length-1])for(let i=0,r;i<s.length&&(r=s[i]);i++)y(t).insertBefore(r,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){dr()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!cs||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class Cc extends Sr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const s=this.__dataHost||this;if(we&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=s._bindTemplate(this.__template,!0);n.runEffects=(i,r,a)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(o.changedProps,r)),i(r,a);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:i,changedProps:{}}),a)for(const l in r){const c=j(l);o.changedProps[c]=this.__dataHost[c]}else Object.assign(o.changedProps,r)},this.__instance=s._stampTemplate(this.__template,n),y(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,wr(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class xc extends Sr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=Pt(this.__template,this,{mutableData:!0,forwardHostProp:function(s,n){this.__instance&&(this.if?this.__instance.forwardHostProp(s,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[j(s)]=!0))}})),this.__instance=new this.__ctor,y(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let s=y(t[0]).parentNode;if(s){s=y(s);for(let n=0,i;n<t.length&&(i=t[n]);n++)s.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let s in t)this.__instance._setPendingProperty(s,this.__dataHost[s]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const Wi=Dn?Cc:xc;customElements.define(Wi.is,Wi);let Sc=k(e=>{let t=It(e);class s extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(i,r){let a=r.path;if(a==JSCompiler_renameProperty("items",this)){let o=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(i!==c&&this.clearSelection(),l){let u=ur(o,l);this.__applySplices(u)}this.__lastItems=o,this.__lastMulti=i}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let o=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(o,10);o.indexOf(".")<0&&o==l&&this.__deselectChangedIdx(l)}}__applySplices(i){let r=this.__selectedMap;for(let o=0;o<i.length;o++){let l=i[o];r.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?r.set(u,c+l.addedCount-l.removed.length):r.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;r.has(this.items[u])&&r.set(this.items[u],u)}}this.__updateLinks();let a=0;r.forEach((o,l)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,r.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let i=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${i++}`)})}else this.__selectedMap.forEach(i=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${i}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${i}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(i){return this.__selectedMap.has(i)}isIndexSelected(i){return this.isSelected(this.items[i])}__deselectChangedIdx(i){let r=this.__selectedIndexForItemIndex(i);if(r>=0){let a=0;this.__selectedMap.forEach((o,l)=>{r==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(i){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${i}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(i){let r=this.__selectedMap.get(i);if(r>=0){this.__selectedMap.delete(i);let a;this.multi&&(a=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(i){this.deselect(this.items[i])}select(i){this.selectIndex(this.items.indexOf(i))}selectIndex(i){let r=this.items[i];this.isSelected(r)?this.toggle&&this.deselectIndex(i):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,i),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return s}),Pc=Sc(qs);class Ji extends Pc{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ji.is,Ji);const dt=new Y;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,s){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,s){},styleSubtree(e,t){dt.processStyles(),rs(e,t)},styleElement(e){dt.processStyles()},styleDocument(e){dt.processStyles(),rs(document.body,e)},getComputedStyleValue(e,t){return Nn(e,t)},flushCustomStyles(){},nativeCss:Ts,nativeShadow:Mt,cssBuild:$e,disableRuntime:vn});window.ShadyCSS.CustomStyleInterface=dt;const Gi="include",Ec=window.ShadyCSS.CustomStyleInterface;class Ac extends HTMLElement{constructor(){super(),this._style=null,Ec.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const s=t.getAttribute(Gi);return s&&(t.removeAttribute(Gi),t.textContent=ha(s)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ac);fr(HTMLElement).prototype;const Pr=xe`
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
</custom-style>`;Pr.setAttribute("style","display: none;");document.head.appendChild(Pr.content);var Er=document.createElement("style");Er.textContent="[hidden] { display: none !important; }";document.head.appendChild(Er);const Ar=xe`
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
</custom-style>`;Ar.setAttribute("style","display: none;");document.head.appendChild(Ar.content);const Tr=xe`
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
</dom-module>`;Tr.setAttribute("style","display: none;");document.head.appendChild(Tr.content);const Tc={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused(e.type==="focus")},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};var Xi={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Oc={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Qi={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Nc=/[a-z0-9*]/,kc=/U\+/,Mc=/^arrow/,Rc=/^space(bar)?/,Dc=/^escape$/;function Zi(e,t){var s="";if(e){var n=e.toLowerCase();n===" "||Rc.test(n)?s="space":Dc.test(n)?s="esc":n.length==1?(!t||Nc.test(n))&&(s=n):Mc.test(n)?s=n.replace("arrow",""):n=="multiply"?s="*":s=n}return s}function Ic(e){var t="";return e&&(e in Xi?t=Xi[e]:kc.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function Lc(e){var t="";return Number(e)&&(e>=65&&e<=90?t=String.fromCharCode(32+e):e>=112&&e<=123?t="f"+(e-112+1):e>=48&&e<=57?t=String(e-48):e>=96&&e<=105?t=String(e-96):t=Oc[e]),t}function Bc(e,t){return e.key?Zi(e.key,t):e.detail&&e.detail.key?Zi(e.detail.key,t):Ic(e.keyIdentifier)||Lc(e.keyCode)||""}function en(e,t){var s=Bc(t,e.hasModifiers);return s===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Fc(e){return e.length===1?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(t,s){var n=s.split(":"),i=n[0],r=n[1];return i in Qi?(t[Qi[i]]=!0,t.hasModifiers=!0):(t.key=i,t.event=r||"keydown"),t},{combo:e.split(":").shift()})}function tn(e){return e.trim().split(" ").map(function(t){return Fc(t)})}const Or={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var s=tn(t),n=0;n<s.length;++n)if(en(s[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(t){return t.keyBindings});return e.indexOf(this.keyBindings)===-1&&e.push(this.keyBindings),e},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(s){for(var n in s)this._addKeyBinding(n,s[n])},this);for(var e in this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(s,n){var i=s[0].hasModifiers,r=n[0].hasModifiers;return i===r?0:i?-1:1})},_addKeyBinding:function(e,t){tn(e).forEach(function(s){this._keyBindings[s.event]=this._keyBindings[s.event]||[],this._keyBindings[s.event].push([s,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],s=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,s]),this.keyEventTarget.addEventListener(e,s)},this)},_unlistenKeyEventListeners:function(){for(var e,t,s,n;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],s=e[1],n=e[2],t.removeEventListener(s,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var s=0;s<e.length;s++){var n=e[s][0],i=e[s][1];if(en(n,t)&&(this._triggerKeyHandler(n,i,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,s){var n=Object.create(e);n.keyboardEvent=s;var i=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,i),i.defaultPrevented&&s.preventDefault()}};const Et={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,s=P(t).localTarget;this.isLightDescendant(s)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,s=P(t).localTarget;this.isLightDescendant(s)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},zc=[Or,Et];var L={distance:function(e,t,s,n){var i=e-s,r=t-n;return Math.sqrt(i*i+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Nr(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Nr.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var s=L.distance(e,t,0,0),n=L.distance(e,t,this.width,0),i=L.distance(e,t,0,this.height),r=L.distance(e,t,this.width,this.height);return Math.max(s,n,i,r)}};function Q(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),P(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}Q.MAX_RADIUS=300;Q.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=L.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?L.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,s=Math.min(Math.sqrt(e+t),Q.MAX_RADIUS)*1.1+5,n=1.1-.2*(s/Q.MAX_RADIUS),i=this.mouseInteractionSeconds/n,r=s*(1-Math.pow(80,-i));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=this.mouseUpElapsedSeconds*.3,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,Q.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Q.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Nr(this.element)},draw:function(){var e,t,s;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,s=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+s+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+s+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,s=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=L.now(),this.center?(this.xStart=t,this.yStart=s,this.slideDistance=L.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=s,this.slideDistance=L.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=L.now())},remove:function(){P(P(this.waveContainer).parentNode).removeChild(this.waveContainer)}};Bt({_template:xe`
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
`,is:"paper-ripple",behaviors:[Or],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){P(this).parentNode.nodeType==11?this.keyEventTarget=P(this).getOwnerRoot().host:this.keyEventTarget=P(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){if(!(this.holdDown&&this.ripples.length>0)){var t=this.addRipple();t.downAction(e),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new Q(this);return P(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){t!==void 0&&(e?this.downAction():this.upAction())}});const Hc={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Et._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&P(t).appendChild(this._ripple),e){var s=P(this._rippleContainer||this),n=P(e).rootTarget;s.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var e=document.createElement("paper-ripple");return e},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}};const kr={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){Et._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Et._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},$c=[zc,Tc,Hc,kr];const Mr=xe`
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

  <slot></slot>`;Mr.setAttribute("strip-whitespace","");Bt({_template:Mr,is:"paper-button",behaviors:[$c],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?kr._calculateElevation.apply(this):this._setElevation(0)}});const Uc=e=>e??ht;function*jc(e,t){if(e!==void 0){let s=0;for(const n of e)yield t(n,s++)}}const Kc={duration:250},Vc=e=>(t,s,n)=>{const i="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:"",display:""});const{[e]:r}=t.getBoundingClientRect(),a=[0,r],[o,l]=s?a:a.slice().reverse(),c=t.animate([{[i]:`${o}px`},{[i]:`${l}px`}],{...Kc,...n});c.onfinish=()=>Object.assign(t.style,{[i]:"",display:s?"":"none"})};const qc={},Yc=Es(class extends As{constructor(){super(...arguments),this.ot=qc}render(e,t){return t()}update(e,[t,s]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,i)=>n===this.ot[i]))return ts}else if(this.ot===t)return ts;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,s)}}),Zt=new WeakMap,Cs=Es(class extends wo{render(e){return ht}update(e,[t]){const s=t!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),ht}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let s=Zt.get(t);s===void 0&&(s=new WeakMap,Zt.set(t,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?Zt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const Rr="important",Wc=" !"+Rr,Jc=Es(class extends As{constructor(e){if(super(e),e.type!==bn.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,s)=>{const n=e[s];return n==null?t:t+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:s}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in t){const i=t[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(Wc);n.includes("-")||r?s.setProperty(n,r?i.slice(0,-11):i,r?Rr:""):s[n]=i}}return ts}});function Gc(e,t,s){return e?t(e):s?.(e)}const Xc=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},Qc=Ge`
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
`,Zc=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Xc(le(Zc,{styleSheets:[Qc]})));const At=Math.min,ie=Math.max,Tt=Math.round,rt=Math.floor,B=e=>({x:e,y:e}),eu={left:"right",right:"left",bottom:"top",top:"bottom"},tu={start:"end",end:"start"};function sn(e,t,s){return ie(e,At(t,s))}function Ys(e,t){return typeof e=="function"?e(t):e}function ve(e){return e.split("-")[0]}function Ws(e){return e.split("-")[1]}function Dr(e){return e==="x"?"y":"x"}function Ir(e){return e==="y"?"height":"width"}const su=new Set(["top","bottom"]);function ee(e){return su.has(ve(e))?"y":"x"}function Lr(e){return Dr(ee(e))}function iu(e,t,s){s===void 0&&(s=!1);const n=Ws(e),i=Lr(e),r=Ir(i);let a=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(a=Ot(a)),[a,Ot(a)]}function nu(e){const t=Ot(e);return[xs(e),t,xs(t)]}function xs(e){return e.replace(/start|end/g,t=>tu[t])}const nn=["left","right"],rn=["right","left"],ru=["top","bottom"],ou=["bottom","top"];function au(e,t,s){switch(e){case"top":case"bottom":return s?t?rn:nn:t?nn:rn;case"left":case"right":return t?ru:ou;default:return[]}}function lu(e,t,s,n){const i=Ws(e);let r=au(ve(e),s==="start",n);return i&&(r=r.map(a=>a+"-"+i),t&&(r=r.concat(r.map(xs)))),r}function Ot(e){return e.replace(/left|right|bottom|top/g,t=>eu[t])}function cu(e){return{top:0,right:0,bottom:0,left:0,...e}}function uu(e){return typeof e!="number"?cu(e):{top:e,right:e,bottom:e,left:e}}function Nt(e){const{x:t,y:s,width:n,height:i}=e;return{width:n,height:i,top:s,left:t,right:t+n,bottom:s+i,x:t,y:s}}function on(e,t,s){let{reference:n,floating:i}=e;const r=ee(t),a=Lr(t),o=Ir(a),l=ve(t),c=r==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[o]/2-i[o]/2;let p;switch(l){case"top":p={x:u,y:n.y-i.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-i.width,y:d};break;default:p={x:n.x,y:n.y}}switch(Ws(t)){case"start":p[a]-=h*(s&&c?-1:1);break;case"end":p[a]+=h*(s&&c?-1:1);break}return p}const du=async(e,t,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:a}=s,o=r.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=on(c,n,l),h=n,p={},_=0;for(let f=0;f<o.length;f++){const{name:g,fn:m}=o[f],{x:b,y:w,data:S,reset:x}=await m({x:u,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:p,rects:c,platform:a,elements:{reference:e,floating:t}});u=b??u,d=w??d,p={...p,[g]:{...p[g],...S}},x&&_<=50&&(_++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(c=x.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=on(c,h,l)),f=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:p}};async function Br(e,t){var s;t===void 0&&(t={});const{x:n,y:i,platform:r,rects:a,elements:o,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=Ys(t,e),_=uu(p),g=o[h?d==="floating"?"reference":"floating":d],m=Nt(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(g)))==null||s?g:g.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(o.floating)),boundary:c,rootBoundary:u,strategy:l})),b=d==="floating"?{x:n,y:i,width:a.floating.width,height:a.floating.height}:a.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(o.floating)),S=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},x=Nt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:b,offsetParent:w,strategy:l}):b);return{top:(m.top-x.top+_.top)/S.y,bottom:(x.bottom-m.bottom+_.bottom)/S.y,left:(m.left-x.left+_.left)/S.x,right:(x.right-m.right+_.right)/S.x}}const hu=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,n;const{placement:i,middlewareData:r,rects:a,initialPlacement:o,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:_="none",flipAlignment:f=!0,...g}=Ys(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const m=ve(i),b=ee(o),w=ve(o)===o,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=h||(w||!f?[Ot(o)]:nu(o)),Pe=_!=="none";!h&&Pe&&x.push(...lu(o,f,_,S));const ce=[o,...x],Ut=await Br(t,g),Ze=[];let ue=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&Ze.push(Ut[m]),d){const G=iu(i,a,S);Ze.push(Ut[G[0]],Ut[G[1]])}if(ue=[...ue,{placement:i,overflows:Ze}],!Ze.every(G=>G<=0)){var Qs,Zs;const G=(((Qs=r.flip)==null?void 0:Qs.index)||0)+1,jt=ce[G];if(jt&&(!(d==="alignment"?b!==ee(jt):!1)||ue.every(R=>ee(R.placement)===b?R.overflows[0]>0:!0)))return{data:{index:G,overflows:ue},reset:{placement:jt}};let Ee=(Zs=ue.filter(X=>X.overflows[0]<=0).sort((X,R)=>X.overflows[1]-R.overflows[1])[0])==null?void 0:Zs.placement;if(!Ee)switch(p){case"bestFit":{var ei;const X=(ei=ue.filter(R=>{if(Pe){const K=ee(R.placement);return K===b||K==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(K=>K>0).reduce((K,Jr)=>K+Jr,0)]).sort((R,K)=>R[1]-K[1])[0])==null?void 0:ei[0];X&&(Ee=X);break}case"initialPlacement":Ee=o;break}if(i!==Ee)return{reset:{placement:Ee}}}return{}}}},pu=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:n,placement:i}=t,{mainAxis:r=!0,crossAxis:a=!1,limiter:o={fn:g=>{let{x:m,y:b}=g;return{x:m,y:b}}},...l}=Ys(e,t),c={x:s,y:n},u=await Br(t,l),d=ee(ve(i)),h=Dr(d);let p=c[h],_=c[d];if(r){const g=h==="y"?"top":"left",m=h==="y"?"bottom":"right",b=p+u[g],w=p-u[m];p=sn(b,p,w)}if(a){const g=d==="y"?"top":"left",m=d==="y"?"bottom":"right",b=_+u[g],w=_-u[m];_=sn(b,_,w)}const f=o.fn({...t,[h]:p,[d]:_});return{...f,data:{x:f.x-s,y:f.y-n,enabled:{[h]:r,[d]:a}}}}}};function Ft(){return typeof window<"u"}function Se(e){return Fr(e)?(e.nodeName||"").toLowerCase():"#document"}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function z(e){var t;return(t=(Fr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Fr(e){return Ft()?e instanceof Node||e instanceof N(e).Node:!1}function D(e){return Ft()?e instanceof Element||e instanceof N(e).Element:!1}function F(e){return Ft()?e instanceof HTMLElement||e instanceof N(e).HTMLElement:!1}function an(e){return!Ft()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}const fu=new Set(["inline","contents"]);function Qe(e){const{overflow:t,overflowX:s,overflowY:n,display:i}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+s)&&!fu.has(i)}const _u=new Set(["table","td","th"]);function mu(e){return _u.has(Se(e))}const yu=[":popover-open",":modal"];function zt(e){return yu.some(t=>{try{return e.matches(t)}catch{return!1}})}const gu=["transform","translate","scale","rotate","perspective"],bu=["transform","translate","scale","rotate","perspective","filter"],wu=["paint","layout","strict","content"];function Js(e){const t=Gs(),s=D(e)?I(e):e;return gu.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||bu.some(n=>(s.willChange||"").includes(n))||wu.some(n=>(s.contain||"").includes(n))}function vu(e){let t=W(e);for(;F(t)&&!Ce(t);){if(Js(t))return t;if(zt(t))return null;t=W(t)}return null}function Gs(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Cu=new Set(["html","body","#document"]);function Ce(e){return Cu.has(Se(e))}function I(e){return N(e).getComputedStyle(e)}function Ht(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function W(e){if(Se(e)==="html")return e;const t=e.assignedSlot||e.parentNode||an(e)&&e.host||z(e);return an(t)?t.host:t}function zr(e){const t=W(e);return Ce(t)?e.ownerDocument?e.ownerDocument.body:e.body:F(t)&&Qe(t)?t:zr(t)}function Je(e,t,s){var n;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=zr(e),r=i===((n=e.ownerDocument)==null?void 0:n.body),a=N(i);if(r){const o=Ss(a);return t.concat(a,a.visualViewport||[],Qe(i)?i:[],o&&s?Je(o):[])}return t.concat(i,Je(i,[],s))}function Ss(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Hr(e){const t=I(e);let s=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const i=F(e),r=i?e.offsetWidth:s,a=i?e.offsetHeight:n,o=Tt(s)!==r||Tt(n)!==a;return o&&(s=r,n=a),{width:s,height:n,$:o}}function Xs(e){return D(e)?e:e.contextElement}function ye(e){const t=Xs(e);if(!F(t))return B(1);const s=t.getBoundingClientRect(),{width:n,height:i,$:r}=Hr(t);let a=(r?Tt(s.width):s.width)/n,o=(r?Tt(s.height):s.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const xu=B(0);function $r(e){const t=N(e);return!Gs()||!t.visualViewport?xu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Su(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==N(e)?!1:t}function re(e,t,s,n){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Xs(e);let a=B(1);t&&(n?D(n)&&(a=ye(n)):a=ye(e));const o=Su(r,s,n)?$r(r):B(0);let l=(i.left+o.x)/a.x,c=(i.top+o.y)/a.y,u=i.width/a.x,d=i.height/a.y;if(r){const h=N(r),p=n&&D(n)?N(n):n;let _=h,f=Ss(_);for(;f&&n&&p!==_;){const g=ye(f),m=f.getBoundingClientRect(),b=I(f),w=m.left+(f.clientLeft+parseFloat(b.paddingLeft))*g.x,S=m.top+(f.clientTop+parseFloat(b.paddingTop))*g.y;l*=g.x,c*=g.y,u*=g.x,d*=g.y,l+=w,c+=S,_=N(f),f=Ss(_)}}return Nt({width:u,height:d,x:l,y:c})}function $t(e,t){const s=Ht(e).scrollLeft;return t?t.left+s:re(z(e)).left+s}function Ur(e,t){const s=e.getBoundingClientRect(),n=s.left+t.scrollLeft-$t(e,s),i=s.top+t.scrollTop;return{x:n,y:i}}function Pu(e){let{elements:t,rect:s,offsetParent:n,strategy:i}=e;const r=i==="fixed",a=z(n),o=t?zt(t.floating):!1;if(n===a||o&&r)return s;let l={scrollLeft:0,scrollTop:0},c=B(1);const u=B(0),d=F(n);if((d||!d&&!r)&&((Se(n)!=="body"||Qe(a))&&(l=Ht(n)),F(n))){const p=re(n);c=ye(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const h=a&&!d&&!r?Ur(a,l):B(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:s.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Eu(e){return Array.from(e.getClientRects())}function Au(e){const t=z(e),s=Ht(e),n=e.ownerDocument.body,i=ie(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ie(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let a=-s.scrollLeft+$t(e);const o=-s.scrollTop;return I(n).direction==="rtl"&&(a+=ie(t.clientWidth,n.clientWidth)-i),{width:i,height:r,x:a,y:o}}const ln=25;function Tu(e,t){const s=N(e),n=z(e),i=s.visualViewport;let r=n.clientWidth,a=n.clientHeight,o=0,l=0;if(i){r=i.width,a=i.height;const u=Gs();(!u||u&&t==="fixed")&&(o=i.offsetLeft,l=i.offsetTop)}const c=$t(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),p=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,_=Math.abs(n.clientWidth-d.clientWidth-p);_<=ln&&(r-=_)}else c<=ln&&(r+=c);return{width:r,height:a,x:o,y:l}}const Ou=new Set(["absolute","fixed"]);function Nu(e,t){const s=re(e,!0,t==="fixed"),n=s.top+e.clientTop,i=s.left+e.clientLeft,r=F(e)?ye(e):B(1),a=e.clientWidth*r.x,o=e.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:a,height:o,x:l,y:c}}function cn(e,t,s){let n;if(t==="viewport")n=Tu(e,s);else if(t==="document")n=Au(z(e));else if(D(t))n=Nu(t,s);else{const i=$r(e);n={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Nt(n)}function jr(e,t){const s=W(e);return s===t||!D(s)||Ce(s)?!1:I(s).position==="fixed"||jr(s,t)}function ku(e,t){const s=t.get(e);if(s)return s;let n=Je(e,[],!1).filter(o=>D(o)&&Se(o)!=="body"),i=null;const r=I(e).position==="fixed";let a=r?W(e):e;for(;D(a)&&!Ce(a);){const o=I(a),l=Js(a);!l&&o.position==="fixed"&&(i=null),(r?!l&&!i:!l&&o.position==="static"&&!!i&&Ou.has(i.position)||Qe(a)&&!l&&jr(e,a))?n=n.filter(u=>u!==a):i=o,a=W(a)}return t.set(e,n),n}function Mu(e){let{element:t,boundary:s,rootBoundary:n,strategy:i}=e;const a=[...s==="clippingAncestors"?zt(t)?[]:ku(t,this._c):[].concat(s),n],o=a[0],l=a.reduce((c,u)=>{const d=cn(t,u,i);return c.top=ie(d.top,c.top),c.right=At(d.right,c.right),c.bottom=At(d.bottom,c.bottom),c.left=ie(d.left,c.left),c},cn(t,o,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Ru(e){const{width:t,height:s}=Hr(e);return{width:t,height:s}}function Du(e,t,s){const n=F(t),i=z(t),r=s==="fixed",a=re(e,!0,r,t);let o={scrollLeft:0,scrollTop:0};const l=B(0);function c(){l.x=$t(i)}if(n||!n&&!r)if((Se(t)!=="body"||Qe(i))&&(o=Ht(t)),n){const p=re(t,!0,r,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else i&&c();r&&!n&&i&&c();const u=i&&!n&&!r?Ur(i,o):B(0),d=a.left+o.scrollLeft-l.x-u.x,h=a.top+o.scrollTop-l.y-u.y;return{x:d,y:h,width:a.width,height:a.height}}function es(e){return I(e).position==="static"}function un(e,t){if(!F(e)||I(e).position==="fixed")return null;if(t)return t(e);let s=e.offsetParent;return z(e)===s&&(s=s.ownerDocument.body),s}function Kr(e,t){const s=N(e);if(zt(e))return s;if(!F(e)){let i=W(e);for(;i&&!Ce(i);){if(D(i)&&!es(i))return i;i=W(i)}return s}let n=un(e,t);for(;n&&mu(n)&&es(n);)n=un(n,t);return n&&Ce(n)&&es(n)&&!Js(n)?s:n||vu(e)||s}const Iu=async function(e){const t=this.getOffsetParent||Kr,s=this.getDimensions,n=await s(e.floating);return{reference:Du(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Lu(e){return I(e).direction==="rtl"}const Bu={convertOffsetParentRelativeRectToViewportRelativeRect:Pu,getDocumentElement:z,getClippingRect:Mu,getOffsetParent:Kr,getElementRects:Iu,getClientRects:Eu,getDimensions:Ru,getScale:ye,isElement:D,isRTL:Lu};function Vr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Fu(e,t){let s=null,n;const i=z(e);function r(){var o;clearTimeout(n),(o=s)==null||o.disconnect(),s=null}function a(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(o||t(),!h||!p)return;const _=rt(d),f=rt(i.clientWidth-(u+h)),g=rt(i.clientHeight-(d+p)),m=rt(u),w={rootMargin:-_+"px "+-f+"px "+-g+"px "+-m+"px",threshold:ie(0,At(1,l))||1};let S=!0;function x(Pe){const ce=Pe[0].intersectionRatio;if(ce!==l){if(!S)return a();ce?a(!1,ce):n=setTimeout(()=>{a(!1,1e-7)},1e3)}ce===1&&!Vr(c,e.getBoundingClientRect())&&a(),S=!1}try{s=new IntersectionObserver(x,{...w,root:i.ownerDocument})}catch{s=new IntersectionObserver(x,w)}s.observe(e)}return a(!0),r}function zu(e,t,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Xs(e),u=i||r?[...c?Je(c):[],...Je(t)]:[];u.forEach(m=>{i&&m.addEventListener("scroll",s,{passive:!0}),r&&m.addEventListener("resize",s)});const d=c&&o?Fu(c,s):null;let h=-1,p=null;a&&(p=new ResizeObserver(m=>{let[b]=m;b&&b.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),s()}),c&&!l&&p.observe(c),p.observe(t));let _,f=l?re(e):null;l&&g();function g(){const m=re(e);f&&!Vr(f,m)&&s(),f=m,_=requestAnimationFrame(g)}return s(),()=>{var m;u.forEach(b=>{i&&b.removeEventListener("scroll",s),r&&b.removeEventListener("resize",s)}),d?.(),(m=p)==null||m.disconnect(),p=null,l&&cancelAnimationFrame(_)}}const Hu=pu,$u=hu,Uu=(e,t,s)=>{const n=new Map,i={platform:Bu,...s},r={...i.platform,_c:n};return du(e,t,{...i,platform:r})},ju=[$u({fallbackAxisSideDirection:"start",crossAxis:!1}),Hu()],Ku=({placement:e="bottom-start",strategy:t,middleware:s=ju}={})=>{const[n,i]=fe(),[r,a]=fe(),[o,l]=fe();return U(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return zu(n,r,()=>Uu(n,r,{placement:e,strategy:t,middleware:s}).then(l))},[n,r,e,t,s]),{setReference:i,setFloating:a,styles:ge(()=>o?{left:`${o.x}px`,top:`${o.y}px`}:{},[o?.x,o?.y])}},qr=e=>{const t=ge(()=>({}),[]);return ge(()=>Object.assign(t,e),[t,...Object.values(e)])},dn=e=>e.matches(":focus-within"),Vu=({disabled:e,onFocus:t})=>{const[s,n]=fe(),{focused:i,closed:r}=s||{},a=i&&!e,o=qr({closed:r,onFocus:t}),l=H(u=>n(d=>({...d,closed:u})),[]),c=H(u=>{const d=u.currentTarget;return dn(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return U(()=>{if(!a)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=o;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a]),{focused:a,active:a&&!r,setClosed:l,onToggle:c,onFocus:H(u=>{const d=dn(u.currentTarget);n({focused:d}),o.onFocus?.(d)},[o])}},hn=["focusin","focusout"],qu=e=>{const t=Vu(e),{onFocus:s}=t;return U(()=>(e.setAttribute("tabindex","0"),hn.forEach(n=>e.addEventListener(n,s)),()=>{hn.forEach(n=>e.removeEventListener(n,s))}),[]),t},Yu=e=>e.preventDefault(),Wu=Ge`
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
`,Ju=e=>{const{placement:t,strategy:s,middleware:n,render:i}=e,{active:r,onToggle:a}=qu(e),{styles:o,setReference:l,setFloating:c}=Ku({placement:t,strategy:s,middleware:n});return M` <div class="anchor" part="anchor" ${Cs(l)}>
			<button
				@mousedown=${Yu}
				@click=${a}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Gc(r,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Jc(o)}"
					@connected=${u=>u.target.showPopover?.()}
					${Cs(c)}
					><slot></slot>${Yc([i],()=>i?.()||ht)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",le(Ju,{styleSheets:[Wu]}));const Gu=Ge`
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
`,Xu=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",le(Xu,{styleSheets:[Gu]}));const Qu=({placement:e})=>M` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",le(Qu));const Zu=({host:e,popoverRef:t,disabled:s,openOnHover:n,openOnFocus:i,open:r,close:a})=>{const o=Ps(),l=()=>clearTimeout(o.current),c=()=>{clearTimeout(o.current),o.current=setTimeout(()=>{const d=t.current;n&&(e.matches(":hover")||d?.matches(":hover"))||e.matches(":focus-within")||d?.matches(":focus-within")||a()},100)},u=()=>{s||(l(),r())};return U(()=>{if(!(!n||s))return e.addEventListener("pointerenter",u),e.addEventListener("pointerleave",c),()=>{l(),e.removeEventListener("pointerenter",u),e.removeEventListener("pointerleave",c)}},[n,s,e]),U(()=>{if(!(!i||s))return e.addEventListener("focusin",u),e.addEventListener("focusout",c),()=>{l(),e.removeEventListener("focusin",u),e.removeEventListener("focusout",c)}},[i,s,e]),{scheduleClose:c,cancelClose:l}},ed=e=>{if(e.newState!=="open")return;const n=e.target.querySelector("slot:not([name])")?.assignedElements({flatten:!0})??[];for(const i of n){const r=i.matches("[autofocus]")?i:i.querySelector("[autofocus]");if(r instanceof HTMLElement){r.focus();break}}},td=Ge`
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
`,sd=e=>{const{placement:t="bottom span-right",disabled:s,openOnHover:n,openOnFocus:i}=e,r=Ps(),[a,o]=_o("opened",!1),l=H(()=>{s||(o(!0),r.current?.showPopover())},[s]),c=H(()=>{o(!1),r.current?.hidePopover()},[]),u=H(()=>{if(s)return;r.current?.matches(":popover-open")?c():l()},[s]);U(()=>{const f=r.current;f&&(a?f.showPopover():f.hidePopover())},[a]),U(()=>{e.toggleAttribute("opened",!!a)},[a]);const{scheduleClose:d,cancelClose:h}=Zu({host:e,popoverRef:r,disabled:s,openOnHover:n,openOnFocus:i,open:l,close:c}),p=i?l:u,_=H(f=>{ed(f),o(f.newState==="open"),e.dispatchEvent(new ToggleEvent("dropdown-toggle",{newState:f.newState,oldState:f.oldState,composed:!0}))},[]);return M`
		<slot name="button" @click=${p}></slot>
		<div
			popover
			style="position-area: ${t}"
			@toggle=${_}
			@select=${c}
			@focusout=${d}
			@focusin=${h}
			${Cs(f=>f&&(r.current=f))}
		>
			<slot></slot>
		</div>
	`};customElements.define("cosmoz-dropdown-next",le(sd,{styleSheets:[td],observedAttributes:["placement","disabled","open-on-hover","open-on-focus"],shadowRootInit:{mode:"open",delegatesFocus:!0}}));function id(e){return()=>e}const nd=id(),rd=nd,Yr=vo(()=>rd);customElements.define("cosmoz-keybinding-provider",Yr.Provider);const od=(e,t)=>{const s=gn(Yr),n=qr(e);U(()=>s(n),t)},ad="bottom-bar-toolbar",ld="bottom-bar-menu",cd=Ge`
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
`,ud=Symbol("openMenu"),dd=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Wr=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute("slot")!=="info"&&e.tagName!=="TEMPLATE"&&e.tagName!=="STYLE"&&e.tagName!=="DOM-REPEAT"&&e.tagName!=="DOM-IF"&&e.getAttribute("slot")!=="extra",hd=e=>{const t=[...e.childNodes],s=[];for(const n of t)if(n.tagName==="SLOT"){const i=n.assignedElements({flatten:!0});s.push(...i)}else s.push(n);return s},pd=e=>{const t=hd(e).filter(Wr).filter(n=>!n.hidden).sort((n,i)=>(Number(n.dataset.index)||0)-(Number(i.dataset.index)||0));if(t.length===0)return t;const s=t.reduce((n,i)=>parseInt(n.dataset.priority??"0",10)>=parseInt(i.dataset.priority??"0",10)?n:i,{dataset:{priority:"-1000"}});return[s,...t.filter(n=>n!==s)]},pn=(e,t,s,n)=>{const i=t?ad:ld;e.setAttribute("slot",i),e.setAttribute("tabindex","0"),e.classList.toggle(n,!t),e.classList.toggle(s,t)},fd=(e,t,s)=>{const n=pd(e),{maxToolbarItems:i=1}=e;if(!(n.length>0)){e.toggleAttribute("has-menu-items",!1);return}const a=n.slice(0,i),o=n.slice(a.length);a.forEach(l=>pn(l,!0,t,s)),o.forEach(l=>pn(l,!1,t,s)),e.toggleAttribute("has-menu-items",o.length>0)},_d=e=>{const{active:t=!1,maxToolbarItems:s=1}=e,n=Ps(!1),i="cosmoz-bottom-bar-toolbar",r="cosmoz-bottom-bar-menu";od({activity:ud,callback:()=>dd(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const a=ge(()=>Vc("height"),[]);po(()=>{n.current?a(e,t):a(e,t,{duration:0}),n.current=!0},[t]);const o=H(()=>fd(e,i,r),[s]);U(()=>{const c=new MutationObserver(()=>o()),u=()=>{c.disconnect(),Array.from(e.children).forEach(h=>{Wr(h)&&c.observe(h,{attributes:!0,attributeFilter:["hidden"]})})};u();const d=new MutationObserver(()=>{u(),o()});return d.observe(e,{childList:!0}),()=>{c.disconnect(),d.disconnect()}},[o]);const l=H(()=>o(),[o]);return M` <div id="bar" part="bar">
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
		</div>`};customElements.define("cosmoz-bottom-bar",le(_d,{observedAttributes:["active","max-toolbar-items"],styleSheets:[cd]}));const kt=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;M(Object.assign([kt],{raw:[kt]}));xe(Object.assign([kt],{raw:[kt]}));function md(e){const t=[...e];for(let s=t.length-1;s>0;s--){const n=Math.floor(Math.random()*(s+1));[t[s],t[n]]=[t[n],t[s]]}return t}const yd=e=>{const{active:t,maxToolbarItems:s}=e,[n,i]=fe(""),[r,a]=fe(md([{onClick:()=>alert("Button 1 clicked"),priority:10,text:"Button 1"},{onClick:()=>alert("Button 2 clicked"),text:"Button 2"},{onClick:()=>alert("Button 3 clicked"),text:"Button 3"},{onClick:()=>alert("Button 4 clicked"),priority:5,text:"Button 4"},{onClick:()=>alert("Button 5 clicked"),text:"Button 5"}].concat(...Array.from({length:100},(u,d)=>{const h=d+6;return{onClick:()=>alert("Button "+h+" clicked"),text:"Button "+h,priority:h}})))),o=u=>{const d=u.target;i(d.value)},l=u=>{const d=u?u.trim():"";a([...r,{onClick:()=>alert("!!Button "+d+" clicked"),priority:d?+d:void 0,text:"Button "+d}]),u&&i("")};return M`
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
            .maxToolbarItems=${s}
        >
            <span slot="info">Bottom bar demo</span>
            ${jc(r,u=>M`<paper-button
                        @click=${u.onClick}
                        data-priority=${Uc(u.priority)}
                        >${u.text}</paper-button
                    >`)}
        </cosmoz-bottom-bar>
    `};customElements.define("cosmoz-bottom-bar-story",le(yd,{observedAttributes:["active","max-toolbar-items"]}));const gd=e=>M`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,bd=({active:e,maxToolbarItems:t})=>M`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,Sd={title:"Cosmoz Bottom Bar",render:gd,argTypes:{active:{control:"boolean"},maxToolbarItems:{control:"number"}},parameters:{docs:{description:{component:"The Cosmoz Bottom Bar web component"}}}},ot={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The basic version"}}}},at={render:bd,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The empty cosmoz-bottom-bar"}}}};ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
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
}`,...ot.parameters?.docs?.source}}};at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
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
}`,...at.parameters?.docs?.source}}};const Pd=["Basic","Empty"];export{ot as Basic,at as Empty,Pd as __namedExportsOrder,Sd as default};
