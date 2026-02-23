import{r as Jr,D as Gr,A as de,b as R,E as es}from"./iframe-D_3otHup.js";let he,pn=0;function Zs(t){he=t}function ti(){he=null,pn=0}function Xr(){return pn++}const Ke=Symbol("haunted.phase"),ae=Symbol("haunted.hook"),ei=Symbol("haunted.update"),si=Symbol("haunted.commit"),Z=Symbol("haunted.effects"),Mt=Symbol("haunted.layoutEffects"),ss="haunted.context";class Qr{update;host;virtual;[ae];[Z];[Mt];constructor(e,s){this.update=e,this.host=s,this[ae]=new Map,this[Z]=[],this[Mt]=[]}run(e){Zs(this);let s=e();return ti(),s}_runEffects(e){let s=this[e];Zs(this);for(let n of s)n.call(this);ti()}runEffects(){this._runEffects(Z)}runLayoutEffects(){this._runEffects(Mt)}teardown(){this[ae].forEach(s=>{typeof s.teardown=="function"&&s.teardown(!0)})}}const Zr=Promise.resolve().then.bind(Promise.resolve());function fn(){let t=[],e;function s(){e=null;let n=t;t=[];for(var i=0,r=n.length;i<r;i++)n[i]()}return function(n){t.push(n),e==null&&(e=Zr(s))}}const to=fn(),ii=fn();class eo{renderer;host;state;[Ke];_updateQueued;_active;constructor(e,s){this.renderer=e,this.host=s,this.state=new Qr(this.update.bind(this),s),this[Ke]=null,this._updateQueued=!1,this._active=!1}update(){this._active&&(this._updateQueued||(to(()=>{let e=this.handlePhase(ei);ii(()=>{this.handlePhase(si,e),ii(()=>{this.handlePhase(Z)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(e,s){switch(this[Ke]=e,e){case si:this.commit(s),this.runEffects(Mt);return;case ei:return this.render();case Z:return this.runEffects(Z)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const so=(...t)=>{const e=new CSSStyleSheet;return e.replaceSync(t.join("")),e},io=t=>t?.map(e=>typeof e=="string"?so(e):e),no=(t,...e)=>t.flatMap((s,n)=>[s,e[n]||""]).join(""),ke=no,ro=(t="")=>t.replace(/-+([a-z])?/g,(e,s)=>s?s.toUpperCase():"");function oo(t){class e extends eo{frag;renderResult;constructor(i,r,a){super(i,a||r),this.frag=r}commit(i){this.renderResult=t(i,this.frag)}}function s(n,i,r){const a=(r||i||{}).baseElement||HTMLElement,{observedAttributes:o=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||i||{},d=io(n.styleSheets||u);class h extends a{_scheduler;static get observedAttributes(){return n.observedAttributes||o||[]}constructor(){if(super(),l===!1)this._scheduler=new e(n,this);else{const y=this.attachShadow({mode:"open",...c});d&&(y.adoptedStyleSheets=d),this._scheduler=new e(n,y,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(y,_,b){if(_===b)return;let w=b===""?!0:b;Reflect.set(this,ro(y),w)}}function p(g){let y=g,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return y},set(b){_&&y===b||(_=!0,y=b,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(a.prototype,{getPrototypeOf(g){return g},set(g,y,_,b){let w;return y in g?(w=Object.getOwnPropertyDescriptor(g,y),w&&w.set?(w.set.call(b,_),!0):(Reflect.set(g,y,_,b),!0)):(typeof y=="symbol"||y[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:_}:w=p(_),Object.defineProperty(b,y,w),w.set&&w.set.call(b,_),!0)}});return Object.setPrototypeOf(h.prototype,f),h}return s}class nt{id;state;constructor(e,s){this.id=e,this.state=s}}function ao(t,...e){let s=Xr(),n=he[ae],i=n.get(s);return i||(i=new t(s,he,...e),n.set(s,i)),i.update(...e)}function rt(t){return ao.bind(null,t)}function _n(t){return rt(class extends nt{callback;lastValues;values;_teardown;constructor(e,s,n,i){super(e,s),t(s,this)}update(e,s){this.callback=e,this.values=s}call(){const e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,s)=>this.lastValues[s]!==e)}})}function mn(t,e){t[Z].push(e)}const Jt=_n(mn),lo=t=>t instanceof Element?t:t.startNode||t.endNode||t.parentNode,yn=rt(class extends nt{Context;value;_ranEffect;_unsubscribe;constructor(t,e,s){super(t,e),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,mn(e,this)}update(t){return this.Context!==t&&(this._subscribe(t),this.Context=t),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(t){this.value=t,this.state.update()}_subscribe(t){const e={Context:t,callback:this._updater};lo(this.state.host).dispatchEvent(new CustomEvent(ss,{detail:e,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:i}=e;this.value=n?i:t.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function co(t){return e=>{const s={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(ss,this)}disconnectedCallback(){this.removeEventListener(ss,this)}handleEvent(n){const{detail:i}=n;i.Context===s&&(i.value=this.value,i.unsubscribe=this.unsubscribe.bind(this,i.callback),this.listeners.add(i.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let i of this.listeners)i(n)}get value(){return this._value}},Consumer:t(function({render:n}){const i=yn(s);return n(i)},{useShadowDOM:!1}),defaultValue:e};return s}}const _t=rt(class extends nt{value;values;constructor(t,e,s,n){super(t,e),this.value=s(),this.values=n}update(t,e){return this.hasChanged(e)&&(this.values=e,this.value=t()),this.value}hasChanged(t=[]){return t.some((e,s)=>this.values[s]!==e)}}),Rt=(t,e)=>_t(()=>t,e);function uo(t,e){t[Mt].push(e)}const ho=_n(uo),dt=rt(class extends nt{args;constructor(t,e,s){super(t,e),this.updater=this.updater.bind(this),typeof s=="function"&&(s=s()),this.makeArgs(s)}update(){return this.args}updater(t){const[e]=this.args;typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&(this.makeArgs(t),this.state.update())}makeArgs(t){this.args=Object.freeze([t,this.updater])}});rt(class extends nt{reducer;currentState;constructor(t,e,s,n,i){super(t,e),this.dispatch=this.dispatch.bind(this),this.currentState=i!==void 0?i(n):n}update(t){return this.reducer=t,[this.currentState,this.dispatch]}dispatch(t){this.currentState=this.reducer(this.currentState,t),this.state.update()}});const po=/([A-Z])/gu;rt(class extends nt{property;eventName;constructor(t,e,s,n){if(super(t,e),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=s,this.eventName=s.replace(po,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(t,e){return[this.state.host[this.property],this.updater]}updater(t){const e=this.state.host[this.property];typeof t=="function"&&(t=t(e)),!Object.is(e,t)&&this.updateProp(t)}updateProp(t){this.notify(t).defaultPrevented||(this.state.host[this.property]=t)}notify(t){const e=new CustomEvent(this.eventName,{detail:{value:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(e),e}});function fo(t){return _t(()=>({current:t}),[])}rt(class extends nt{update(){return this.state.host}});function _o({render:t}){const e=oo(t),s=co(e);return{component:e,createContext:s}}const gn={ATTRIBUTE:1,CHILD:2},Ss=t=>(...e)=>({_$litDirective$:t,values:e});let Ps=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,s,n){this._$Ct=e,this._$AM=s,this._$Ci=n}_$AS(e,s){return this.update(e,s)}update(e,s){return this.render(...s)}};const Dt=(t,e)=>{const s=t._$AN;if(s===void 0)return!1;for(const n of s)n._$AO?.(e,!1),Dt(n,e);return!0},pe=t=>{let e,s;do{if((e=t._$AM)===void 0)break;s=e._$AN,s.delete(t),t=e}while(s?.size===0)},bn=t=>{for(let e;e=t._$AM;t=e){let s=e._$AN;if(s===void 0)e._$AN=s=new Set;else if(s.has(t))break;s.add(t),go(e)}};function mo(t){this._$AN!==void 0?(pe(this),this._$AM=t,bn(this)):this._$AM=t}function yo(t,e=!1,s=0){const n=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(n))for(let r=s;r<n.length;r++)Dt(n[r],!1),pe(n[r]);else n!=null&&(Dt(n,!1),pe(n));else Dt(this,t)}const go=t=>{t.type==gn.CHILD&&(t._$AP??=yo,t._$AQ??=mo)};class bo extends Ps{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,s,n){super._$AT(e,s,n),bn(this),this.isConnected=e._$AU}_$AO(e,s=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),s&&(Dt(this,e),pe(this))}setValue(e){if(Jr(this._$Ct))this._$Ct._$AI(e,this);else{const s=[...this._$Ct._$AH];s[this._$Ci]=e,this._$Ct._$AI(s,this,0)}}disconnected(){}reconnected(){}}const{component:wt,createContext:wo}=_o({render:Gr});const Me=!(window.ShadyDOM&&window.ShadyDOM.inUse);let fe;function ni(t){t&&t.shimcssproperties?fe=!1:fe=Me||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let Ht;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&(Ht=window.ShadyCSS.cssBuild);const wn=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?fe=window.ShadyCSS.nativeCss:window.ShadyCSS?(ni(window.ShadyCSS),window.ShadyCSS=void 0):ni(window.WebComponents&&window.WebComponents.flags);const Es=fe;class ri{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function vn(t){return t=vo(t),Cn(Co(t),t)}function vo(t){return t.replace(H.comments,"").replace(H.port,"")}function Co(t){let e=new ri;e.start=0,e.end=t.length;let s=e;for(let n=0,i=t.length;n<i;n++)if(t[n]===Sn){s.rules||(s.rules=[]);let r=s,a=r.rules[r.rules.length-1]||null;s=new ri,s.start=n+1,s.parent=r,s.previous=a,r.rules.push(s)}else t[n]===Pn&&(s.end=n+1,s=s.parent||e);return e}function Cn(t,e){let s=e.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=s.trim(),t.parent){let i=t.previous?t.previous.end:t.parent.start;s=e.substring(i,t.start-1),s=xo(s),s=s.replace(H.multipleSpaces," "),s=s.substring(s.lastIndexOf(";")+1);let r=t.parsedSelector=t.selector=s.trim();t.atRule=r.indexOf(Oo)===0,t.atRule?r.indexOf(To)===0?t.type=ut.MEDIA_RULE:r.match(H.keyframesRule)&&(t.type=ut.KEYFRAMES_RULE,t.keyframesName=t.selector.split(H.multipleSpaces).pop()):r.indexOf(En)===0?t.type=ut.MIXIN_RULE:t.type=ut.STYLE_RULE}let n=t.rules;if(n)for(let i=0,r=n.length,a;i<r&&(a=n[i]);i++)Cn(a,e);return t}function xo(t){return t.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],s=6-e.length;for(;s--;)e="0"+e;return"\\"+e})}function xn(t,e,s=""){let n="";if(t.cssText||t.rules){let i=t.rules;if(i&&!So(i))for(let r=0,a=i.length,o;r<a&&(o=i[r]);r++)n=xn(o,e,n);else n=e?t.cssText:Po(t.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(t.selector&&(s+=t.selector+" "+Sn+`
`),s+=n,t.selector&&(s+=Pn+`

`)),s}function So(t){let e=t[0];return!!e&&!!e.selector&&e.selector.indexOf(En)===0}function Po(t){return t=Eo(t),Ao(t)}function Eo(t){return t.replace(H.customProp,"").replace(H.mixinProp,"")}function Ao(t){return t.replace(H.mixinApply,"").replace(H.varApply,"")}const ut={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Sn="{",Pn="}",H={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},En="--",To="@media",Oo="@";const is=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,_e=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;const oi=new Set,No="shady-unscoped";function ko(t){const e=t.textContent;if(!oi.has(e)){oi.add(e);const s=document.createElement("style");s.setAttribute("shady-unscoped",""),s.textContent=e,document.head.appendChild(s)}}function Mo(t){return t.hasAttribute(No)}function ns(t,e){return t?(typeof t=="string"&&(t=vn(t)),xn(t,Es)):""}function ai(t){return!t.__cssRules&&t.textContent&&(t.__cssRules=vn(t.textContent)),t.__cssRules||null}function le(t,e,s,n){if(!t)return;let i=!1,r=t.type;r===ut.STYLE_RULE?e(t):r===ut.MIXIN_RULE&&(i=!0);let a=t.rules;if(a&&!i)for(let o=0,l=a.length,c;o<l&&(c=a[o]);o++)le(c,e)}function Ro(t,e){let s=0;for(let n=e,i=t.length;n<i;n++)if(t[n]==="(")s++;else if(t[n]===")"&&--s===0)return n;return-1}function An(t,e){let s=t.indexOf("var(");if(s===-1)return e(t,"","","");let n=Ro(t,s+3),i=t.substring(s+4,n),r=t.substring(0,s),a=An(t.substring(n+1),e),o=i.indexOf(",");if(o===-1)return e(r,i.trim(),"",a);let l=i.substring(0,o).trim(),c=i.substring(o+1).trim();return e(r,l,c,a)}window.ShadyDOM&&window.ShadyDOM.wrap;function Do(t){let e=t.localName,s="",n="";return e?e.indexOf("-")>-1?s=e:(n=e,s=t.getAttribute&&t.getAttribute("is")||""):(s=t.is,n=t.extends),{is:s,typeExtension:n}}function Io(t){const e=[],s=t.querySelectorAll("style");for(let n=0;n<s.length;n++){const i=s[n];Mo(i)?Me||(ko(i),i.parentNode.removeChild(i)):(e.push(i.textContent),i.parentNode.removeChild(i))}return e.join("").trim()}const Tn="css-build";function Lo(t){if(Ht!==void 0)return Ht;if(t.__cssBuild===void 0){const e=t.getAttribute(Tn);if(e)t.__cssBuild=e;else{const s=Bo(t);s!==""&&Fo(t),t.__cssBuild=s}}return t.__cssBuild||""}function li(t){return Lo(t)!==""}function Bo(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;if(e instanceof Comment){const s=e.textContent.trim().split(":");if(s[0]===Tn)return s[1]}return""}function Fo(t){const e=t.localName==="template"?t.content.firstChild:t.firstChild;e.parentNode.removeChild(e)}function rs(t,e){for(let s in e)s===null?t.style.removeProperty(s):t.style.setProperty(s,e[s])}function On(t,e){const s=window.getComputedStyle(t).getPropertyValue(e);return s?s.trim():""}function zo(t){const e=_e.test(t)||is.test(t);return _e.lastIndex=0,is.lastIndex=0,e}const Ho=/;\s*/m,$o=/^\s*(initial)|(inherit)\s*$/,ci=/\s*!important/,os="_-_";class Uo{constructor(){this._map={}}set(e,s){e=e.trim(),this._map[e]={properties:s,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let me=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new Uo}detectMixin(e){return zo(e)}gatherStyles(e){const s=Io(e.content);if(s){const n=document.createElement("style");return n.textContent=s,e.content.insertBefore(n,e.content.firstChild),n}return null}transformTemplate(e,s){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const n=e._gatheredStyle;return n?this.transformStyle(n,s):null}transformStyle(e,s=""){let n=ai(e);return this.transformRules(n,s),e.textContent=ns(n),n}transformCustomStyle(e){let s=ai(e);return le(s,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),e.textContent=ns(s),s}transformRules(e,s){this._currentElement=s,le(e,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),e.selector===":root"&&(e.selector=":host > *")}transformCssText(e,s){return e=e.replace(is,(n,i,r,a)=>this._produceCssProperties(n,i,r,a,s)),this._consumeCssProperties(e,s)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){let s=e;for(;s.parent;)s=s.parent;const n={};let i=!1;return le(s,r=>{i=i||r===e,!i&&r.selector===e.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(e,s){let n=null;for(;n=_e.exec(e);){let i=n[0],r=n[1],a=n.index,o=a+i.indexOf("@apply"),l=a+i.length,c=e.slice(0,o),u=e.slice(l),d=s?this._fallbacksFromPreviousRules(s):{};Object.assign(d,this._cssTextToMap(c));let h=this._atApplyToCssProperties(r,d);e=`${c}${h}${u}`,_e.lastIndex=a+h.length}return e}_atApplyToCssProperties(e,s){e=e.replace(Ho,"");let n=[],i=this._map.get(e);if(i||(this._map.set(e,{}),i=this._map.get(e)),i){this._currentElement&&(i.dependants[this._currentElement]=!0);let r,a,o;const l=i.properties;for(r in l)o=s&&s[r],a=[r,": var(",e,os,r],o&&a.push(",",o.replace(ci,"")),a.push(")"),ci.test(l[r])&&a.push(" !important"),n.push(a.join(""))}return n.join("; ")}_replaceInitialOrInherit(e,s){let n=$o.exec(s);return n&&(n[1]?s=this._getInitialValueForProperty(e):s="apply-shim-inherit"),s}_cssTextToMap(e,s=!1){let n=e.split(";"),i,r,a={};for(let o=0,l,c;o<n.length;o++)l=n[o],l&&(c=l.split(":"),c.length>1&&(i=c[0].trim(),r=c.slice(1).join(":"),s&&(r=this._replaceInitialOrInherit(i,r)),a[i]=r));return a}_invalidateMixinEntry(e){if(me)for(let s in e.dependants)s!==this._currentElement&&me(s)}_produceCssProperties(e,s,n,i,r){if(n&&An(n,(y,_)=>{_&&this._map.get(_)&&(i=`@apply ${_};`)}),!i)return e;let a=this._consumeCssProperties(""+i,r),o=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(a,!0),c=l,u=this._map.get(s),d=u&&u.properties;d?c=Object.assign(Object.create(d),l):this._map.set(s,c);let h=[],p,f,g=!1;for(p in c)f=l[p],f===void 0&&(f="initial"),d&&!(p in d)&&(g=!0),h.push(`${s}${os}${p}: ${f}`);return g&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(o=`${e};${o}`),`${o}${h.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin;T.prototype.transformStyle=T.prototype.transformStyle;T.prototype.transformCustomStyle=T.prototype.transformCustomStyle;T.prototype.transformRules=T.prototype.transformRules;T.prototype.transformRule=T.prototype.transformRule;T.prototype.transformTemplate=T.prototype.transformTemplate;T.prototype._separator=os;Object.defineProperty(T.prototype,"invalidCallback",{get(){return me},set(t){me=t}});const as={};const ye="_applyShimCurrentVersion",mt="_applyShimNextVersion",ge="_applyShimValidatingVersion",jo=Promise.resolve();function Ko(t){let e=as[t];e&&Vo(e)}function Vo(t){t[ye]=t[ye]||0,t[ge]=t[ge]||0,t[mt]=(t[mt]||0)+1}function Nn(t){return t[ye]===t[mt]}function qo(t){return!Nn(t)&&t[ge]===t[mt]}function Yo(t){t[ge]=t[mt],t._validating||(t._validating=!0,jo.then(function(){t[ye]=t[mt],t._validating=!1}))}let Ve=null,ui=window.HTMLImports&&window.HTMLImports.whenReady||null,qe;function di(t){requestAnimationFrame(function(){ui?ui(t):(Ve||(Ve=new Promise(e=>{qe=e}),document.readyState==="complete"?qe():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&qe()})),Ve.then(function(){t&&t()}))})}const hi="__seenByShadyCSS",Zt="__shadyCSSCachedStyle";let be=null,It=null,V=class{constructor(){this.customStyles=[],this.enqueued=!1,di(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!It||(this.enqueued=!0,di(It))}addCustomStyle(e){e[hi]||(e[hi]=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Zt])return e[Zt];let s;return e.getStyle?s=e.getStyle():s=e,s}processStyles(){const e=this.customStyles;for(let s=0;s<e.length;s++){const n=e[s];if(n[Zt])continue;const i=this.getStyleForCustomStyle(n);if(i){const r=i.__appliedElement||i;be&&be(r),n[Zt]=r}}return e}};V.prototype.addCustomStyle=V.prototype.addCustomStyle;V.prototype.getStyleForCustomStyle=V.prototype.getStyleForCustomStyle;V.prototype.processStyles=V.prototype.processStyles;Object.defineProperties(V.prototype,{transformCallback:{get(){return be},set(t){be=t}},validateCallback:{get(){return It},set(t){let e=!1;It||(e=!0),It=t,e&&this.enqueueDocumentValidation()}}});const Ot=new T;class Wo{constructor(){this.customStyleInterface=null,Ot.invalidCallback=Ko}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{Ot.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,s){if(this.ensure(),li(e))return;as[s]=e;let n=Ot.transformTemplate(e,s);e._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let s=0;s<e.length;s++){let n=e[s],i=this.customStyleInterface.getStyleForCustomStyle(n);i&&Ot.transformCustomStyle(i)}this.customStyleInterface.enqueued=!1}}styleSubtree(e,s){if(this.ensure(),s&&rs(e,s),e.shadowRoot){this.styleElement(e);let n=e.shadowRoot.children||e.shadowRoot.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}else{let n=e.children||e.childNodes;for(let i=0;i<n.length;i++)this.styleSubtree(n[i])}}styleElement(e){this.ensure();let{is:s}=Do(e),n=as[s];if(!(n&&li(n))&&n&&!Nn(n)){qo(n)||(this.prepareTemplate(n,s),Yo(n));let i=e.shadowRoot;if(i){let r=i.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=ns(n._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const t=new Wo;let e=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(s,n,i){t.flushCustomStyles(),t.prepareTemplate(s,n)},prepareTemplateStyles(s,n,i){window.ShadyCSS.prepareTemplate(s,n,i)},prepareTemplateDom(s,n){},styleSubtree(s,n){t.flushCustomStyles(),t.styleSubtree(s,n)},styleElement(s){t.flushCustomStyles(),t.styleElement(s)},styleDocument(s){t.flushCustomStyles(),t.styleDocument(s)},getComputedStyleValue(s,n){return On(s,n)},flushCustomStyles(){t.flushCustomStyles()},nativeCss:Es,nativeShadow:Me,cssBuild:Ht,disableRuntime:wn},e&&(window.ShadyCSS.CustomStyleInterface=e)}window.ShadyCSS.ApplyShim=Ot;window.JSCompiler_renameProperty=function(t,e){return t};let Jo=/(url\()([^)]*)(\))/g,Go=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,te,O;function Lt(t,e){if(t&&Go.test(t)||t==="//")return t;if(te===void 0){te=!1;try{const s=new URL("b","http://a");s.pathname="c%20d",te=s.href==="http://a/c%20d"}catch{}}if(e||(e=document.baseURI||window.location.href),te)try{return new URL(t,e).href}catch{return t}return O||(O=document.implementation.createHTMLDocument("temp"),O.base=O.createElement("base"),O.head.appendChild(O.base),O.anchor=O.createElement("a"),O.body.appendChild(O.anchor)),O.base.href=e,O.anchor.href=t,O.anchor.href||t}function As(t,e){return t.replace(Jo,function(s,n,i,r){return n+"'"+Lt(i.replace(/["']/g,""),e)+"'"+r})}function Ts(t){return t.substring(0,t.lastIndexOf("/")+1)}const kn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Xo=kn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const t=new CSSStyleSheet;t.replaceSync("");const e=document.createElement("div");return e.attachShadow({mode:"open"}),e.shadowRoot.adoptedStyleSheets=[t],e.shadowRoot.adoptedStyleSheets[0]===t}catch{return!1}})();let Qo=window.Polymer&&window.Polymer.rootPath||Ts(document.baseURI||window.location.href),we=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Zo=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,yt=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,ta=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,$t=window.Polymer&&window.Polymer.legacyOptimizations||!1,Mn=window.Polymer&&window.Polymer.legacyWarnings||!1,ea=window.Polymer&&window.Polymer.syncInitialRender||!1,ls=window.Polymer&&window.Polymer.legacyUndefined||!1,sa=window.Polymer&&window.Polymer.orderedComputed||!1,pi=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Rn=window.Polymer&&window.Polymer.fastDomIf||!1,cs=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,ee=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,ia=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let na=0;const k=function(t){let e=t.__mixinApplications;e||(e=new WeakMap,t.__mixinApplications=e);let s=na++;function n(i){let r=i.__mixinSet;if(r&&r[s])return i;let a=e,o=a.get(i);if(!o){o=t(i),a.set(i,o);let l=Object.create(o.__mixinSet||r||null);l[s]=!0,o.__mixinSet=l}return o}return n};let Os={},Dn={};function fi(t,e){Os[t]=Dn[t.toLowerCase()]=e}function _i(t){return Os[t]||Dn[t.toLowerCase()]}function ra(t){t.querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}class Ut extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,s){if(e){let n=_i(e);return n&&s?n.querySelector(s):n}return null}attributeChangedCallback(e,s,n,i){s!==n&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,s=Lt(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Ts(s)}return this.__assetpath}register(e){if(e=e||this.id,e){if(yt&&_i(e)!==void 0)throw fi(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,fi(e,this),ra(this)}}}Ut.prototype.modules=Os;customElements.define("dom-module",Ut);const oa="link[rel=import][type~=css]",aa="include",mi="shady-unscoped";function Ns(t){return Ut.import(t)}function yi(t){let e=t.body?t.body:t;const s=As(e.textContent,t.baseURI),n=document.createElement("style");return n.textContent=s,n}function la(t){const e=t.trim().split(/\s+/),s=[];for(let n=0;n<e.length;n++)s.push(...ca(e[n]));return s}function ca(t){const e=Ns(t);if(!e)return console.warn("Could not find style data in module named",t),[];if(e._styles===void 0){const s=[];s.push(...Ms(e));const n=e.querySelector("template");n&&s.push(...ks(n,e.assetpath)),e._styles=s}return e._styles}function ks(t,e){if(!t._styles){const s=[],n=t.content.querySelectorAll("style");for(let i=0;i<n.length;i++){let r=n[i],a=r.getAttribute(aa);a&&s.push(...la(a).filter(function(o,l,c){return c.indexOf(o)===l})),e&&(r.textContent=As(r.textContent,e)),s.push(r)}t._styles=s}return t._styles}function ua(t){let e=Ns(t);return e?Ms(e):[]}function Ms(t){const e=[],s=t.querySelectorAll(oa);for(let n=0;n<s.length;n++){let i=s[n];if(i.import){const r=i.import,a=i.hasAttribute(mi);if(a&&!r._unscopedStyle){const o=yi(r);o.setAttribute(mi,""),r._unscopedStyle=o}else r._style||(r._style=yi(r));e.push(a?r._unscopedStyle:r._style)}}return e}function da(t){let e=t.trim().split(/\s+/),s="";for(let n=0;n<e.length;n++)s+=ha(e[n]);return s}function ha(t){let e=Ns(t);if(e&&e._cssText===void 0){let s=fa(e),n=e.querySelector("template");n&&(s+=pa(n,e.assetpath)),e._cssText=s||null}return e||console.warn("Could not find style data in module named",t),e&&e._cssText||""}function pa(t,e){let s="";const n=ks(t,e);for(let i=0;i<n.length;i++){let r=n[i];r.parentNode&&r.parentNode.removeChild(r),s+=r.textContent}return s}function fa(t){let e="",s=Ms(t);for(let n=0;n<s.length;n++)e+=s[n].textContent;return e}const m=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?t=>ShadyDOM.patch(t):t=>t;function us(t){return t.indexOf(".")>=0}function $(t){let e=t.indexOf(".");return e===-1?t:t.slice(0,e)}function In(t,e){return t.indexOf(e+".")===0}function jt(t,e){return e.indexOf(t+".")===0}function Kt(t,e,s){return e+s.slice(t.length)}function _a(t,e){return t===e||In(t,e)||jt(t,e)}function Nt(t){if(Array.isArray(t)){let e=[];for(let s=0;s<t.length;s++){let n=t[s].toString().split(".");for(let i=0;i<n.length;i++)e.push(n[i])}return e.join(".")}else return t}function Ln(t){return Array.isArray(t)?Nt(t).split("."):t.toString().split(".")}function A(t,e,s){let n=t,i=Ln(e);for(let r=0;r<i.length;r++){if(!n)return;let a=i[r];n=n[a]}return s&&(s.path=i.join(".")),n}function gi(t,e,s){let n=t,i=Ln(e),r=i[i.length-1];if(i.length>1){for(let a=0;a<i.length-1;a++){let o=i[a];if(n=n[o],!n)return}n[r]=s}else n[e]=s;return i.join(".")}const ve={},ma=/-[a-z]/g,ya=/([A-Z])/g;function Bn(t){return ve[t]||(ve[t]=t.indexOf("-")<0?t:t.replace(ma,e=>e[1].toUpperCase()))}function Re(t){return ve[t]||(ve[t]=t.replace(ya,"-$1").toLowerCase())}let ga=0,Fn=0,ht=[],ba=0,ds=!1,zn=document.createTextNode("");new window.MutationObserver(wa).observe(zn,{characterData:!0});function wa(){ds=!1;const t=ht.length;for(let e=0;e<t;e++){let s=ht[e];if(s)try{s()}catch(n){setTimeout(()=>{throw n})}}ht.splice(0,t),Fn+=t}const Bt={after(t){return{run(e){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}}},run(t,e){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}},j={run(t){return ds||(ds=!0,zn.textContent=ba++),ht.push(t),ga++},cancel(t){const e=t-Fn;if(e>=0){if(!ht[e])throw new Error("invalid async handle: "+t);ht[e]=null}}};const va=j,Hn=k(t=>{class e extends t{static createProperties(n){const i=this.prototype;for(let r in n)r in i||i._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,i){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,i))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let i=this.__dataAttributes[n];return i||(i=this.constructor.attributeNameForProperty(n),this.__dataAttributes[i]=n),i}_definePropertyAccessor(n,i){Object.defineProperty(this,n,{get(){return this.__data[n]},set:i?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,i){this._setPendingProperty(n,i)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,i,r){let a=this.__data[n],o=this._shouldPropertyChange(n,i,a);return o&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=a),this.__data[n]=i,this.__dataPending[n]=i),o}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,va.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,i=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,i,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,i,r)),this.__dataCounter--}_shouldPropertiesChange(n,i,r){return!!i}_propertiesChanged(n,i,r){}_shouldPropertyChange(n,i,r){return r!==i&&(r===r||i===i)}attributeChangedCallback(n,i,r,a){i!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,i,r,a)}_attributeToProperty(n,i,r){if(!this.__serializing){const a=this.__dataAttributes,o=a&&a[n]||n;this[o]=this._deserializeValue(i,r||this.constructor.typeForProperty(o))}}_propertyToAttribute(n,i,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,i||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,i,r){const a=this._serializeValue(i);(r==="class"||r==="name"||r==="slot")&&(n=m(n)),a===void 0?n.removeAttribute(r):n.setAttribute(r,a===""&&window.trustedTypes?window.trustedTypes.emptyScript:a)}_serializeValue(n){return typeof n==="boolean"?n?"":void 0:n?.toString()}_deserializeValue(n,i){switch(i){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return e});const $n={};let se=HTMLElement.prototype;for(;se;){let t=Object.getOwnPropertyNames(se);for(let e=0;e<t.length;e++)$n[t[e]]=!0;se=Object.getPrototypeOf(se)}const Ca=window.trustedTypes?t=>trustedTypes.isHTML(t)||trustedTypes.isScript(t)||trustedTypes.isScriptURL(t):()=>!1;function xa(t,e){if(!$n[e]){let s=t[e];s!==void 0&&(t.__data?t._setPendingProperty(e,s):(t.__dataProto?t.hasOwnProperty(JSCompiler_renameProperty("__dataProto",t))||(t.__dataProto=Object.create(t.__dataProto)):t.__dataProto={},t.__dataProto[e]=s))}}const Un=k(t=>{const e=Hn(t);class s extends e{static createPropertiesForAttributes(){let i=this.observedAttributes;for(let r=0;r<i.length;r++)this.prototype._createPropertyAccessor(Bn(i[r]))}static attributeNameForProperty(i){return Re(i)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(i){for(let r in i)this._setProperty(r,i[r])}_ensureAttribute(i,r){const a=this;a.hasAttribute(i)||this._valueToNodeAttribute(a,r,i)}_serializeValue(i){switch(typeof i){case"object":if(i instanceof Date)return i.toString();if(i){if(Ca(i))return i;try{return JSON.stringify(i)}catch{return""}}default:return super._serializeValue(i)}}_deserializeValue(i,r){let a;switch(r){case Object:try{a=JSON.parse(i)}catch{a=i}break;case Array:try{a=JSON.parse(i)}catch{a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${i}`)}break;case Date:a=isNaN(i)?String(i):Number(i),a=new Date(a);break;default:a=super._deserializeValue(i,r);break}return a}_definePropertyAccessor(i,r){xa(this,i),super._definePropertyAccessor(i,r)}_hasAccessor(i){return this.__dataHasAccessor&&this.__dataHasAccessor[i]}_isPropertyPending(i){return!!(this.__dataPending&&i in this.__dataPending)}}return s});const Sa={"dom-if":!0,"dom-repeat":!0};let bi=!1,wi=!1;function Pa(){if(!bi){bi=!0;const t=document.createElement("textarea");t.placeholder="a",wi=t.placeholder===t.textContent}return wi}function Ea(t){Pa()&&t.localName==="textarea"&&t.placeholder&&t.placeholder===t.textContent&&(t.textContent=null)}const Aa=(()=>{const t=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:e=>e});return(e,s,n)=>{const i=s.getAttribute(n);if(t&&n.startsWith("on-")){e.setAttribute(n,t.createScript(i,n));return}e.setAttribute(n,i)}})();function Ta(t){let e=t.getAttribute("is");if(e&&Sa[e]){let s=t;for(s.removeAttribute("is"),t=s.ownerDocument.createElement(e),s.parentNode.replaceChild(t,s),t.appendChild(s);s.attributes.length;){const{name:n}=s.attributes[0];Aa(t,s,n),s.removeAttribute(n)}}return t}function jn(t,e){let s=e.parentInfo&&jn(t,e.parentInfo);if(s){for(let n=s.firstChild,i=0;n;n=n.nextSibling)if(e.parentIndex===i++)return n}else return t}function Oa(t,e,s,n){n.id&&(e[n.id]=s)}function Na(t,e,s){if(s.events&&s.events.length)for(let n=0,i=s.events,r;n<i.length&&(r=i[n]);n++)t._addMethodEventListenerToNode(e,r.name,r.value,t)}function ka(t,e,s,n){s.templateInfo&&(e._templateInfo=s.templateInfo,e._parentTemplateInfo=n)}function Ma(t,e,s){return t=t._methodHost||t,function(i){t[s]?t[s](i,i.detail):console.warn("listener method `"+s+"` not defined")}}const Ra=k(t=>{class e extends t{static _parseTemplate(n,i){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!i,r.stripWhiteSpace=i&&i.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,i,r){return this._parseTemplateNode(n.content,i,r)}static _parseTemplateNode(n,i,r){let a=!1,o=n;return o.localName=="template"&&!o.hasAttribute("preserve-content")?a=this._parseTemplateNestedTemplate(o,i,r)||a:o.localName==="slot"&&(i.hasInsertionPoint=!0),Ea(o),o.firstChild&&this._parseTemplateChildNodes(o,i,r),o.hasAttributes&&o.hasAttributes()&&(a=this._parseTemplateNodeAttributes(o,i,r)||a),a||r.noted}static _parseTemplateChildNodes(n,i,r){if(!(n.localName==="script"||n.localName==="style"))for(let a=n.firstChild,o=0,l;a;a=l){if(a.localName=="template"&&(a=Ta(a)),l=a.nextSibling,a.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)a.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(i.stripWhiteSpace&&!a.textContent.trim()){n.removeChild(a);continue}}let c={parentIndex:o,parentInfo:r};this._parseTemplateNode(a,i,c)&&(c.infoIndex=i.nodeInfoList.push(c)-1),a.parentNode&&o++}}static _parseTemplateNestedTemplate(n,i,r){let a=n,o=this._parseTemplate(a,i);return(o.content=a.content.ownerDocument.createDocumentFragment()).appendChild(a.content),r.templateInfo=o,!0}static _parseTemplateNodeAttributes(n,i,r){let a=!1,o=Array.from(n.attributes);for(let l=o.length-1,c;c=o[l];l--)a=this._parseTemplateNodeAttribute(n,i,r,c.name,c.value)||a;return a}static _parseTemplateNodeAttribute(n,i,r,a,o){return a.slice(0,3)==="on-"?(n.removeAttribute(a),r.events=r.events||[],r.events.push({name:a.slice(3),value:o}),!0):a==="id"?(r.id=o,!0):!1}static _contentForTemplate(n){let i=n._templateInfo;return i&&i.content||n.content}_stampTemplate(n,i){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),i=i||this.constructor._parseTemplate(n);let r=i.nodeInfoList,a=i.content||n.content,o=document.importNode(a,!0);o.__noInsertionPoint=!i.hasInsertionPoint;let l=o.nodeList=new Array(r.length);o.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=jn(o,d);Oa(this,o.$,h,d),ka(this,h,d,i),Na(this,h,d)}return o=o,o}_addMethodEventListenerToNode(n,i,r,a){a=a||n;let o=Ma(a,i,r);return this._addEventListenerToNode(n,i,o),o}_addEventListenerToNode(n,i,r){n.addEventListener(i,r)}_removeEventListenerFromNode(n,i,r){n.removeEventListener(i,r)}}return e});let Vt=0;const qt=[],v={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Kn="__computeInfo",Da=/[A-Z]/;function Ye(t,e,s){let n=t[e];if(!n)n=t[e]={};else if(!t.hasOwnProperty(e)&&(n=t[e]=Object.create(t[e]),s))for(let i in n){let r=n[i],a=n[i]=Array(r.length);for(let o=0;o<r.length;o++)a[o]=r[o]}return n}function kt(t,e,s,n,i,r){if(e){let a=!1;const o=Vt++;for(let l in s){let c=i?$(l):l,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==o)&&(!i||Rs(l,p.trigger))&&(p.info&&(p.info.lastRun=o),p.fn(t,l,s,n,p.info,i,r),a=!0)}return a}return!1}function Ia(t,e,s,n,i,r,a,o){let l=!1,c=a?$(n):n,u=e[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==s)&&(!a||Rs(n,p.trigger))&&(p.info&&(p.info.lastRun=s),p.fn(t,n,i,r,p.info,a,o),l=!0);return l}function Rs(t,e){if(e){let s=e.name;return s==t||!!(e.structured&&In(s,t))||!!(e.wildcard&&jt(s,t))}else return!0}function vi(t,e,s,n,i){let r=typeof i.method=="string"?t[i.method]:i.method,a=i.property;r?r.call(t,t.__data[a],n[a]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function La(t,e,s,n,i){let r=t[v.NOTIFY],a,o=Vt++;for(let c in e)e[c]&&(r&&Ia(t,r,o,c,s,n,i)||i&&Ba(t,c,s))&&(a=!0);let l;a&&(l=t.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function Ba(t,e,s){let n=$(e);if(n!==e){let i=Re(n)+"-changed";return Vn(t,i,s[e],e),!0}return!1}function Vn(t,e,s,n){let i={value:s,queueProperty:!0};n&&(i.path=n),m(t).dispatchEvent(new CustomEvent(e,{detail:i}))}function Fa(t,e,s,n,i,r){let o=(r?$(e):e)!=e?e:null,l=o?A(t,o):t.__data[e];o&&l===void 0&&(l=s[e]),Vn(t,i.eventName,l,o)}function za(t,e,s,n,i){let r,a=t.detail,o=a&&a.path;o?(n=Kt(s,n,o),r=a&&a.value):r=t.currentTarget[s],r=i?!r:r,(!e[v.READ_ONLY]||!e[v.READ_ONLY][n])&&e._setPendingPropertyOrPath(n,r,!0,!!o)&&(!a||!a.queueProperty)&&e._invalidateProperties()}function Ha(t,e,s,n,i){let r=t.__data[e];we&&(r=we(r,i.attrName,"attribute",t)),t._propertyToAttribute(e,i.attrName,r)}function $a(t,e,s,n){let i=t[v.COMPUTE];if(i)if(sa){Vt++;const r=ja(t),a=[];for(let l in e)Ci(l,i,a,r,n);let o;for(;o=a.shift();)qn(t,"",e,s,o)&&Ci(o.methodInfo,i,a,r,n);Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),t.__dataPending=null}else{let r=e;for(;kt(t,i,r,s,n);)Object.assign(s,t.__dataOld),Object.assign(e,t.__dataPending),r=t.__dataPending,t.__dataPending=null}}const Ua=(t,e,s)=>{let n=0,i=e.length-1,r=-1;for(;n<=i;){const a=n+i>>1,o=s.get(e[a].methodInfo)-s.get(t.methodInfo);if(o<0)n=a+1;else if(o>0)i=a-1;else{r=a;break}}r<0&&(r=i+1),e.splice(r,0,t)},Ci=(t,e,s,n,i)=>{const r=i?$(t):t,a=e[r];if(a)for(let o=0;o<a.length;o++){const l=a[o];l.info.lastRun!==Vt&&(!i||Rs(t,l.trigger))&&(l.info.lastRun=Vt,Ua(l.info,s,n))}};function ja(t){let e=t.constructor.__orderedComputedDeps;if(!e){e=new Map;const s=t[v.COMPUTE];let{counts:n,ready:i,total:r}=Ka(t),a;for(;a=i.shift();){e.set(a,e.size);const o=s[a];o&&o.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&i.push(c)})}r!==0&&console.warn(`Computed graph for ${t.localName} incomplete; circular?`),t.constructor.__orderedComputedDeps=e}return e}function Ka(t){const e=t[Kn],s={},n=t[v.COMPUTE],i=[];let r=0;for(let a in e){const o=e[a];r+=s[a]=o.args.filter(l=>!l.literal).length+(o.dynamicFn?1:0)}for(let a in n)e[a]||i.push(a);return{counts:s,ready:i,total:r}}function qn(t,e,s,n,i){let r=hs(t,e,s,n,i);if(r===qt)return!1;let a=i.methodInfo;return t.__dataHasAccessor&&t.__dataHasAccessor[a]?t._setPendingProperty(a,r,!0):(t[a]=r,!1)}function Va(t,e,s){let n=t.__dataLinkedPaths;if(n){let i;for(let r in n){let a=n[r];jt(r,e)?(i=Kt(r,a,e),t._setPendingPropertyOrPath(i,s,!0,!0)):jt(a,e)&&(i=Kt(a,r,e),t._setPendingPropertyOrPath(i,s,!0,!0))}}}function We(t,e,s,n,i,r,a){s.bindings=s.bindings||[];let o={kind:n,target:i,parts:r,literal:a,isCompound:r.length!==1};if(s.bindings.push(o),Ga(o)){let{event:c,negate:u}=o.parts[0];o.listenerEvent=c||Re(i)+"-changed",o.listenerNegate=u}let l=e.nodeInfoList.length;for(let c=0;c<o.parts.length;c++){let u=o.parts[c];u.compoundIndex=c,qa(t,e,o,u,l)}}function qa(t,e,s,n,i){if(!n.literal)if(s.kind==="attribute"&&s.target[0]==="-")console.warn("Cannot set attribute "+s.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,a={index:i,binding:s,part:n,evaluator:t};for(let o=0;o<r.length;o++){let l=r[o];typeof l=="string"&&(l=Wn(l),l.wildcard=!0),t._addTemplatePropertyEffect(e,l.rootProperty,{fn:Ya,info:a,trigger:l})}}}function Ya(t,e,s,n,i,r,a){let o=a[i.index],l=i.binding,c=i.part;if(r&&c.source&&e.length>c.source.length&&l.kind=="property"&&!l.isCompound&&o.__isPropertyEffectsClient&&o.__dataHasAccessor&&o.__dataHasAccessor[l.target]){let u=s[e];e=Kt(c.source,l.target,e),o._setPendingPropertyOrPath(e,u,!1,!0)&&t._enqueueClient(o)}else{let u=i.evaluator._evaluateBinding(t,c,e,s,n,r);u!==qt&&Wa(t,o,l,c,u)}}function Wa(t,e,s,n,i){if(i=Ja(e,i,s,n),we&&(i=we(i,s.target,s.kind,e)),s.kind=="attribute")t._valueToNodeAttribute(e,i,s.target);else{let r=s.target;e.__isPropertyEffectsClient&&e.__dataHasAccessor&&e.__dataHasAccessor[r]?(!e[v.READ_ONLY]||!e[v.READ_ONLY][r])&&e._setPendingProperty(r,i)&&t._enqueueClient(e):t._setUnmanagedPropertyToNode(e,r,i)}}function Ja(t,e,s,n){if(s.isCompound){let i=t.__dataCompoundStorage[s.target];i[n.compoundIndex]=e,e=i.join("")}return s.kind!=="attribute"&&(s.target==="textContent"||s.target==="value"&&(t.localName==="input"||t.localName==="textarea"))&&(e=e??""),e}function Ga(t){return!!t.target&&t.kind!="attribute"&&t.kind!="text"&&!t.isCompound&&t.parts[0].mode==="{"}function Xa(t,e){let{nodeList:s,nodeInfoList:n}=e;if(n.length)for(let i=0;i<n.length;i++){let r=n[i],a=s[i],o=r.bindings;if(o)for(let l=0;l<o.length;l++){let c=o[l];Qa(a,c),Za(a,t,c)}a.__dataHost=t}}function Qa(t,e){if(e.isCompound){let s=t.__dataCompoundStorage||(t.__dataCompoundStorage={}),n=e.parts,i=new Array(n.length);for(let a=0;a<n.length;a++)i[a]=n[a].literal;let r=e.target;s[r]=i,e.literal&&e.kind=="property"&&(r==="className"&&(t=m(t)),t[r]=e.literal)}}function Za(t,e,s){if(s.listenerEvent){let n=s.parts[0];t.addEventListener(s.listenerEvent,function(i){za(i,e,s.target,n.source,n.negate)})}}function xi(t,e,s,n,i,r){r=e.static||r&&(typeof r!="object"||r[e.methodName]);let a={methodName:e.methodName,args:e.args,methodInfo:i,dynamicFn:r};for(let o=0,l;o<e.args.length&&(l=e.args[o]);o++)l.literal||t._addPropertyEffect(l.rootProperty,s,{fn:n,info:a,trigger:l});return r&&t._addPropertyEffect(e.methodName,s,{fn:n,info:a}),a}function hs(t,e,s,n,i){let r=t._methodHost||t,a=r[i.methodName];if(a){let o=t._marshalArgs(i.args,e,s);return o===qt?qt:a.apply(r,o)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}const tl=[],Yn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",el="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",sl="(?:'(?:[^'\\\\]|\\\\.)*')",il='(?:"(?:[^"\\\\]|\\\\.)*")',nl="(?:"+sl+"|"+il+")",Si="(?:("+Yn+"|"+el+"|"+nl+")\\s*)",rl="(?:"+Si+"(?:,\\s*"+Si+")*)",ol="(?:\\(\\s*(?:"+rl+"?)\\)\\s*)",al="("+Yn+"\\s*"+ol+"?)",ll="(\\[\\[|{{)\\s*",cl="(?:]]|}})",ul="(?:(!)\\s*)?",dl=ll+ul+al+cl,Pi=new RegExp(dl,"g");function Ei(t){let e="";for(let s=0;s<t.length;s++){let n=t[s].literal;e+=n||""}return e}function Je(t){let e=t.match(/([^\s]+?)\(([\s\S]*)\)/);if(e){let n={methodName:e[1],static:!0,args:tl};if(e[2].trim()){let i=e[2].replace(/\\,/g,"&comma;").split(",");return hl(i,n)}else return n}return null}function hl(t,e){return e.args=t.map(function(s){let n=Wn(s);return n.literal||(e.static=!1),n},this),e}function Wn(t){let e=t.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),s={name:e,value:"",literal:!1},n=e[0];switch(n==="-"&&(n=e[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':s.value=e.slice(1,-1),s.literal=!0;break;case"#":s.value=Number(e),s.literal=!0;break}return s.literal||(s.rootProperty=$(e),s.structured=us(e),s.structured&&(s.wildcard=e.slice(-2)==".*",s.wildcard&&(s.name=e.slice(0,-2)))),s}function Ai(t,e,s){let n=A(t,s);return n===void 0&&(n=e[s]),n}function Jn(t,e,s,n){const i={indexSplices:n};ls&&!t._overrideLegacyUndefined&&(e.splices=i),t.notifyPath(s+".splices",i),t.notifyPath(s+".length",e.length),ls&&!t._overrideLegacyUndefined&&(i.indexSplices=[])}function Pt(t,e,s,n,i,r){Jn(t,e,s,[{index:n,addedCount:i,removed:r,object:e,type:"splice"}])}function pl(t){return t[0].toUpperCase()+t.substring(1)}const De=k(t=>{const e=Ra(Un(t));class s extends e{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return v}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Et.length){let i=Et[Et.length-1];i._enqueueClient(this),this.__dataHost=i}}_initializeProtoProperties(i){this.__data=Object.create(i),this.__dataPending=Object.create(i),this.__dataOld={}}_initializeInstanceProperties(i){let r=this[v.READ_ONLY];for(let a in i)(!r||!r[a])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=i[a])}_addPropertyEffect(i,r,a){this._createPropertyAccessor(i,r==v.READ_ONLY);let o=Ye(this,r,!0)[i];o||(o=this[r][i]=[]),o.push(a)}_removePropertyEffect(i,r,a){let o=Ye(this,r,!0)[i],l=o.indexOf(a);l>=0&&o.splice(l,1)}_hasPropertyEffect(i,r){let a=this[r];return!!(a&&a[i])}_hasReadOnlyEffect(i){return this._hasPropertyEffect(i,v.READ_ONLY)}_hasNotifyEffect(i){return this._hasPropertyEffect(i,v.NOTIFY)}_hasReflectEffect(i){return this._hasPropertyEffect(i,v.REFLECT)}_hasComputedEffect(i){return this._hasPropertyEffect(i,v.COMPUTE)}_setPendingPropertyOrPath(i,r,a,o){if(o||$(Array.isArray(i)?i[0]:i)!==i){if(!o){let l=A(this,i);if(i=gi(this,i,r),!i||!super._shouldPropertyChange(i,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(i,r,a))return Va(this,i,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[i])return this._setPendingProperty(i,r,a);this[i]=r}return!1}_setUnmanagedPropertyToNode(i,r,a){(a!==i[r]||typeof a=="object")&&(r==="className"&&(i=m(i)),i[r]=a)}_setPendingProperty(i,r,a){let o=this.__dataHasPaths&&us(i),l=o?this.__dataTemp:this.__data;return this._shouldPropertyChange(i,r,l[i])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),i in this.__dataOld||(this.__dataOld[i]=this.__data[i]),o?this.__dataTemp[i]=r:this.__data[i]=r,this.__dataPending[i]=r,(o||this[v.NOTIFY]&&this[v.NOTIFY][i])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[i]=a),!0):!1}_setProperty(i,r){this._setPendingProperty(i,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(i){this.__dataPendingClients=this.__dataPendingClients||[],i!==this&&this.__dataPendingClients.push(i)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let i=this.__dataPendingClients;if(i){this.__dataPendingClients=null;for(let r=0;r<i.length;r++){let a=i[r];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(i,r){for(let a in i)(r||!this[v.READ_ONLY]||!this[v.READ_ONLY][a])&&this._setPendingPropertyOrPath(a,i[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(i,r,a){let o=this.__dataHasPaths;this.__dataHasPaths=!1;let l;$a(this,r,a,o),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,a,o),this._flushClients(),kt(this,this[v.REFLECT],r,a,o),kt(this,this[v.OBSERVE],r,a,o),l&&La(this,l,r,a,o),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(i,r,a){this[v.PROPAGATE]&&kt(this,this[v.PROPAGATE],i,r,a),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,i,r,a)}_runEffectsForTemplate(i,r,a,o){const l=(c,u)=>{kt(this,i.propertyEffects,c,a,u,i.nodeList);for(let d=i.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,a,u)};i.runEffects?i.runEffects(l,r,o):l(r,o)}linkPaths(i,r){i=Nt(i),r=Nt(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[i]=r}unlinkPaths(i){i=Nt(i),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[i]}notifySplices(i,r){let a={path:""},o=A(this,i,a);Jn(this,o,a.path,r)}get(i,r){return A(r||this,i)}set(i,r,a){a?gi(a,i,r):(!this[v.READ_ONLY]||!this[v.READ_ONLY][i])&&this._setPendingPropertyOrPath(i,r,!0)&&this._invalidateProperties()}push(i,...r){let a={path:""},o=A(this,i,a),l=o.length,c=o.push(...r);return r.length&&Pt(this,o,a.path,l,r.length,[]),c}pop(i){let r={path:""},a=A(this,i,r),o=!!a.length,l=a.pop();return o&&Pt(this,a,r.path,a.length,0,[l]),l}splice(i,r,a,...o){let l={path:""},c=A(this,i,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,a,...o),(o.length||u.length)&&Pt(this,c,l.path,r,o.length,u),u}shift(i){let r={path:""},a=A(this,i,r),o=!!a.length,l=a.shift();return o&&Pt(this,a,r.path,0,0,[l]),l}unshift(i,...r){let a={path:""},o=A(this,i,a),l=o.unshift(...r);return r.length&&Pt(this,o,a.path,0,r.length,[]),l}notifyPath(i,r){let a;if(arguments.length==1){let o={path:""};r=A(this,i,o),a=o.path}else Array.isArray(i)?a=Nt(i):a=i;this._setPendingPropertyOrPath(a,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(i,r){this._addPropertyEffect(i,v.READ_ONLY),r&&(this["_set"+pl(i)]=function(a){this._setProperty(i,a)})}_createPropertyObserver(i,r,a){let o={property:i,method:r,dynamicFn:!!a};this._addPropertyEffect(i,v.OBSERVE,{fn:vi,info:o,trigger:{name:i}}),a&&this._addPropertyEffect(r,v.OBSERVE,{fn:vi,info:o,trigger:{name:r}})}_createMethodObserver(i,r){let a=Je(i);if(!a)throw new Error("Malformed observer expression '"+i+"'");xi(this,a,v.OBSERVE,hs,null,r)}_createNotifyingProperty(i){this._addPropertyEffect(i,v.NOTIFY,{fn:Fa,info:{eventName:Re(i)+"-changed",property:i}})}_createReflectedProperty(i){let r=this.constructor.attributeNameForProperty(i);r[0]==="-"?console.warn("Property "+i+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(i,v.REFLECT,{fn:Ha,info:{attrName:r}})}_createComputedProperty(i,r,a){let o=Je(r);if(!o)throw new Error("Malformed computed expression '"+r+"'");const l=xi(this,o,v.COMPUTE,qn,i,a);Ye(this,Kn)[i]=l}_marshalArgs(i,r,a){const o=this.__data,l=[];for(let c=0,u=i.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:f,literal:g}=i[c];if(!g)if(p){const y=jt(d,r),_=Ai(o,a,y?r:d);f={path:y?r:d,value:_,base:y?A(o,d):_}}else f=h?Ai(o,a,d):o[d];if(ls&&!this._overrideLegacyUndefined&&f===void 0&&i.length>1)return qt;l[c]=f}return l}static addPropertyEffect(i,r,a){this.prototype._addPropertyEffect(i,r,a)}static createPropertyObserver(i,r,a){this.prototype._createPropertyObserver(i,r,a)}static createMethodObserver(i,r){this.prototype._createMethodObserver(i,r)}static createNotifyingProperty(i){this.prototype._createNotifyingProperty(i)}static createReadOnlyProperty(i,r){this.prototype._createReadOnlyProperty(i,r)}static createReflectedProperty(i){this.prototype._createReflectedProperty(i)}static createComputedProperty(i,r,a){this.prototype._createComputedProperty(i,r,a)}static bindTemplate(i){return this.prototype._bindTemplate(i)}_bindTemplate(i,r){let a=this.constructor._parseTemplate(i),o=this.__preBoundTemplateInfo==a;if(!o)for(let l in a.propertyEffects)this._createPropertyAccessor(l);if(r)if(a=Object.create(a),a.wasPreBound=o,!this.__templateInfo)this.__templateInfo=a;else{const l=i._parentTemplateInfo||this.__templateInfo,c=l.lastChild;a.parent=l,l.lastChild=a,a.previousSibling=c,c?c.nextSibling=a:l.firstChild=a}else this.__preBoundTemplateInfo=a;return a}static _addTemplatePropertyEffect(i,r,a){let o=i.hostProps=i.hostProps||{};o[r]=!0;let l=i.propertyEffects=i.propertyEffects||{};(l[r]=l[r]||[]).push(a)}_stampTemplate(i,r){r=r||this._bindTemplate(i,!0),Et.push(this);let a=super._stampTemplate(i,r);if(Et.pop(),r.nodeList=a.nodeList,!r.wasPreBound){let o=r.childNodes=[];for(let l=a.firstChild;l;l=l.nextSibling)o.push(l)}return a.templateInfo=r,Xa(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),a}_removeBoundDom(i){const r=i.templateInfo,{previousSibling:a,nextSibling:o,parent:l}=r;a?a.nextSibling=o:l&&(l.firstChild=o),o?o.previousSibling=a:l&&(l.lastChild=a),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];m(m(d).parentNode).removeChild(d)}}static _parseTemplateNode(i,r,a){let o=e._parseTemplateNode.call(this,i,r,a);if(i.nodeType===Node.TEXT_NODE){let l=this._parseBindings(i.textContent,r);l&&(i.textContent=Ei(l)||" ",We(this,r,a,"text","textContent",l),o=!0)}return o}static _parseTemplateNodeAttribute(i,r,a,o,l){let c=this._parseBindings(l,r);if(c){let u=o,d="property";Da.test(o)?d="attribute":o[o.length-1]=="$"&&(o=o.slice(0,-1),d="attribute");let h=Ei(c);return h&&d=="attribute"&&(o=="class"&&i.hasAttribute("class")&&(h+=" "+i.getAttribute(o)),i.setAttribute(o,h)),d=="attribute"&&u=="disable-upgrade$"&&i.setAttribute(o,""),i.localName==="input"&&u==="value"&&i.setAttribute(u,""),i.removeAttribute(u),d==="property"&&(o=Bn(o)),We(this,r,a,d,o,c,h),!0}else return e._parseTemplateNodeAttribute.call(this,i,r,a,o,l)}static _parseTemplateNestedTemplate(i,r,a){let o=e._parseTemplateNestedTemplate.call(this,i,r,a);const l=i.parentNode,c=a.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";pi&&(u||d)&&(l.removeChild(i),a=a.parentInfo,a.templateInfo=c,a.noted=!0,o=!1);let h=c.hostProps;if(Rn&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),pi||(a.parentInfo.noted=!0));else{let p="{";for(let f in h){let g=[{mode:p,source:f,dependencies:[f],hostProp:!0}];We(this,r,a,"property","_host_"+f,g)}}return o}static _parseBindings(i,r){let a=[],o=0,l;for(;(l=Pi.exec(i))!==null;){l.index>o&&a.push({literal:i.slice(o,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),h=!0);let g=Je(d),y=[];if(g){let{args:_,methodName:b}=g;for(let S=0;S<_.length;S++){let x=_[S];x.literal||y.push(x)}let w=r.dynamicFns;(w&&w[b]||g.static)&&(y.push(b),g.dynamicFn=!0)}else y.push(d);a.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:y,event:p}),o=Pi.lastIndex}if(o&&o<i.length){let c=i.substring(o);c&&a.push({literal:c})}return a.length?a:null}static _evaluateBinding(i,r,a,o,l,c){let u;return r.signature?u=hs(i,a,o,l,r.signature):a!=r.source?u=A(i,r.source):c&&us(a)?u=A(i,a):u=i.__data[a],r.negate&&(u=!u),u}}return s}),Et=[];function fl(t){const e={};for(let s in t){const n=t[s];e[s]=typeof n=="function"?{type:n}:n}return e}const _l=k(t=>{const e=Hn(t);function s(r){const a=Object.getPrototypeOf(r);return a.prototype instanceof i?a:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let a=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const o=r.properties;o&&(a=fl(o))}r.__ownProperties=a}return r.__ownProperties}class i extends e{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const a=this._properties;this.__observedAttributes=a?Object.keys(a).map(o=>this.prototype._addPropertyToAttributeMap(o)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const a=s(this);a&&a.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const a=n(this);a&&this.createProperties(a)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const a=s(this);this.__properties=Object.assign({},a&&a._properties,n(this))}return this.__properties}static typeForProperty(a){const o=this._properties[a];return o&&o.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i});const ml="3.5.2",ps=window.ShadyCSS&&window.ShadyCSS.cssBuild,Ie=k(t=>{const e=_l(De(t));function s(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function i(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!ps){const h=c.content.querySelectorAll("style"),p=ks(c),f=ua(u),g=c.content.firstElementChild;for(let _=0;_<f.length;_++){let b=f[_];b.textContent=l._processStyleText(b.textContent,d),c.content.insertBefore(b,g)}let y=0;for(let _=0;_<p.length;_++){let b=p[_],w=h[y];w!==b?(b=b.cloneNode(!0),w.parentNode.insertBefore(b,w)):y++,b.textContent=l._processStyleText(b.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),ia&&ps&&Xo){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function a(l){let c=null;if(l&&(!yt||ta)&&(c=Ut.import(l,"template"),yt&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class o extends e{static get polymerElementVersion(){return ml}static _finalizeClass(){e._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):$t||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)i(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&a(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Ts(c.url);else{const u=Ut.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Qo,this.importPath=this.constructor.importPath;let c=s(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return As(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Lt(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=m(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ea&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Lt(this.importPath)),Lt(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,e._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Mn&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),e._addTemplatePropertyEffect.call(this,c,u,d)}}return o});class st{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,s){this._asyncModule=e,this._callback=s,this._timer=this._asyncModule.run(()=>{this._timer=null,Yt.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),Yt.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(e,s,n){return e instanceof st?e._cancelAsync():e=new st,e.setConfig(s,n),e}}let Yt=new Set;const Gn=function(t){Yt.add(t)},yl=function(){const t=!!Yt.size;return Yt.forEach(e=>{try{e.flush()}catch(s){setTimeout(()=>{throw s})}}),t};let Ds=typeof document.head.style.touchAction=="string",Ce="__polymerGestures",ce="__polymerGesturesHandled",fs="__polymerGesturesTouchAction",Ti=25,Oi=5,gl=2,bl=2500,Xn=["mousedown","mousemove","mouseup","click"],wl=[0,1,4,2],vl=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Is(t){return Xn.indexOf(t)>-1}let Ls=!1;(function(){try{let t=Object.defineProperty({},"passive",{get(){Ls=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch{}})();function Qn(t){if(!(Is(t)||t==="touchend")&&Ds&&Ls&&Zo)return{passive:!0}}let Zn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const _s=[],Cl={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},xl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function Sl(t){return Cl[t.localName]||!1}function Pl(t){let e=Array.prototype.slice.call(t.labels||[]);if(!e.length){e=[];try{let s=t.getRootNode();if(t.id){let n=s.querySelectorAll(`label[for = '${t.id}']`);for(let i=0;i<n.length;i++)e.push(n[i])}}catch{}}return e}let Ni=function(t){let e=t.sourceCapabilities;if(!(e&&!e.firesTouchEvents)&&(t[ce]={skip:!0},t.type==="click")){let s=!1,n=Le(t);for(let i=0;i<n.length;i++){if(n[i].nodeType===Node.ELEMENT_NODE){if(n[i].localName==="label")_s.push(n[i]);else if(Sl(n[i])){let r=Pl(n[i]);for(let a=0;a<r.length;a++)s=s||_s.indexOf(r[a])>-1}}if(n[i]===E.mouse.target)return}if(s)return;t.preventDefault(),t.stopPropagation()}};function ki(t){let e=Zn?["click"]:Xn;for(let s=0,n;s<e.length;s++)n=e[s],t?(_s.length=0,document.addEventListener(n,Ni,!0)):document.removeEventListener(n,Ni,!0)}function El(t){E.mouse.mouseIgnoreJob||ki(!0);let e=function(){ki(),E.mouse.target=null,E.mouse.mouseIgnoreJob=null};E.mouse.target=Le(t)[0],E.mouse.mouseIgnoreJob=st.debounce(E.mouse.mouseIgnoreJob,Bt.after(bl),e)}function tt(t){let e=t.type;if(!Is(e))return!1;if(e==="mousemove"){let s=t.buttons===void 0?1:t.buttons;return t instanceof window.MouseEvent&&!vl&&(s=wl[t.which]||0),!!(s&1)}else return(t.button===void 0?0:t.button)===0}function Al(t){if(t.type==="click"){if(t.detail===0)return!0;let e=K(t);if(!e.nodeType||e.nodeType!==Node.ELEMENT_NODE)return!0;let s=e.getBoundingClientRect(),n=t.pageX,i=t.pageY;return!(n>=s.left&&n<=s.right&&i>=s.top&&i<=s.bottom)}return!1}let E={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Tl(t){let e="auto",s=Le(t);for(let n=0,i;n<s.length;n++)if(i=s[n],i[fs]){e=i[fs];break}return e}function tr(t,e,s){t.movefn=e,t.upfn=s,document.addEventListener("mousemove",e),document.addEventListener("mouseup",s)}function pt(t){document.removeEventListener("mousemove",t.movefn),document.removeEventListener("mouseup",t.upfn),t.movefn=null,t.upfn=null}document.addEventListener("touchend",El,Ls?{passive:!0}:!1);const Le=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:t=>t.composedPath&&t.composedPath()||[],Gt={},X=[];function Ol(t,e){let s=document.elementFromPoint(t,e),n=s;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let i=n;if(n=n.shadowRoot.elementFromPoint(t,e),i===n)break;n&&(s=n)}return s}function K(t){const e=Le(t);return e.length>0?e[0]:t.target}function er(t){let e,s=t.type,i=t.currentTarget[Ce];if(!i)return;let r=i[s];if(r){if(!t[ce]&&(t[ce]={},s.slice(0,5)==="touch")){t=t;let a=t.changedTouches[0];if(s==="touchstart"&&t.touches.length===1&&(E.touch.id=a.identifier),E.touch.id!==a.identifier)return;Ds||(s==="touchstart"||s==="touchmove")&&Nl(t)}if(e=t[ce],!e.skip){for(let a=0,o;a<X.length;a++)o=X[a],r[o.name]&&!e[o.name]&&o.flow&&o.flow.start.indexOf(t.type)>-1&&o.reset&&o.reset();for(let a=0,o;a<X.length;a++)o=X[a],r[o.name]&&!e[o.name]&&(e[o.name]=!0,o[s](t))}}}function Nl(t){let e=t.changedTouches[0],s=t.type;if(s==="touchstart")E.touch.x=e.clientX,E.touch.y=e.clientY,E.touch.scrollDecided=!1;else if(s==="touchmove"){if(E.touch.scrollDecided)return;E.touch.scrollDecided=!0;let n=Tl(t),i=!1,r=Math.abs(E.touch.x-e.clientX),a=Math.abs(E.touch.y-e.clientY);t.cancelable&&(n==="none"?i=!0:n==="pan-x"?i=a>r:n==="pan-y"&&(i=r>a)),i?t.preventDefault():xe("track")}}function kl(t,e,s){return Gt[e]?(Rl(t,e,s),!0):!1}function Ml(t,e,s){return Gt[e]?(Dl(t,e,s),!0):!1}function Rl(t,e,s){let n=Gt[e],i=n.deps,r=n.name,a=t[Ce];a||(t[Ce]=a={});for(let o=0,l,c;o<i.length;o++)l=i[o],!(Zn&&Is(l)&&l!=="click")&&(c=a[l],c||(a[l]=c={_count:0}),c._count===0&&t.addEventListener(l,er,Qn(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);t.addEventListener(e,s),n.touchAction&&sr(t,n.touchAction)}function Dl(t,e,s){let n=Gt[e],i=n.deps,r=n.name,a=t[Ce];if(a)for(let o=0,l,c;o<i.length;o++)l=i[o],c=a[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&t.removeEventListener(l,er,Qn(l)));t.removeEventListener(e,s)}function Bs(t){X.push(t);for(let e=0;e<t.emits.length;e++)Gt[t.emits[e]]=t}function Il(t){for(let e=0,s;e<X.length;e++){s=X[e];for(let n=0,i;n<s.emits.length;n++)if(i=s.emits[n],i===t)return s}return null}function sr(t,e){Ds&&t instanceof HTMLElement&&j.run(()=>{t.style.touchAction=e}),t[fs]=e}function Fs(t,e,s){let n=new Event(e,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=s,m(t).dispatchEvent(n),n.defaultPrevented){let i=s.preventer||s.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function xe(t){let e=Il(t);e.info&&(e.info.prevent=!0)}Bs({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){pt(this.info)},mousedown:function(t){if(!tt(t))return;let e=K(t),s=this,n=function(a){tt(a)||(At("up",e,a),pt(s.info))},i=function(a){tt(a)&&At("up",e,a),pt(s.info)};tr(this.info,n,i),At("down",e,t)},touchstart:function(t){At("down",K(t),t.changedTouches[0],t)},touchend:function(t){At("up",K(t),t.changedTouches[0],t)}});function At(t,e,s,n){e&&Fs(e,t,{x:s.clientX,y:s.clientY,sourceEvent:s,preventer:n,prevent:function(i){return xe(i)}})}Bs({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(t){this.moves.length>gl&&this.moves.shift(),this.moves.push(t)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,pt(this.info)},mousedown:function(t){if(!tt(t))return;let e=K(t),s=this,n=function(a){let o=a.clientX,l=a.clientY;Mi(s.info,o,l)&&(s.info.state=s.info.started?a.type==="mouseup"?"end":"track":"start",s.info.state==="start"&&xe("tap"),s.info.addMove({x:o,y:l}),tt(a)||(s.info.state="end",pt(s.info)),e&&Ge(s.info,e,a),s.info.started=!0)},i=function(a){s.info.started&&n(a),pt(s.info)};tr(this.info,n,i),this.info.x=t.clientX,this.info.y=t.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(t){let e=K(t),s=t.changedTouches[0],n=s.clientX,i=s.clientY;Mi(this.info,n,i)&&(this.info.state==="start"&&xe("tap"),this.info.addMove({x:n,y:i}),Ge(this.info,e,s),this.info.state="track",this.info.started=!0)},touchend:function(t){let e=K(t),s=t.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:s.clientX,y:s.clientY}),Ge(this.info,e,s))}});function Mi(t,e,s){if(t.prevent)return!1;if(t.started)return!0;let n=Math.abs(t.x-e),i=Math.abs(t.y-s);return n>=Oi||i>=Oi}function Ge(t,e,s){if(!e)return;let n=t.moves[t.moves.length-2],i=t.moves[t.moves.length-1],r=i.x-t.x,a=i.y-t.y,o,l=0;n&&(o=i.x-n.x,l=i.y-n.y),Fs(e,"track",{state:t.state,x:s.clientX,y:s.clientY,dx:r,dy:a,ddx:o,ddy:l,sourceEvent:s,hover:function(){return Ol(s.clientX,s.clientY)}})}Bs({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(t){tt(t)&&(this.info.x=t.clientX,this.info.y=t.clientY)},click:function(t){tt(t)&&Ri(this.info,t)},touchstart:function(t){const e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchend:function(t){Ri(this.info,t.changedTouches[0],t)}});function Ri(t,e,s){let n=Math.abs(e.clientX-t.x),i=Math.abs(e.clientY-t.y),r=K(s||e);!r||xl[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=Ti&&i<=Ti||Al(e))&&(t.prevent||Fs(r,"tap",{x:e.clientX,y:e.clientY,sourceEvent:e,preventer:s}))}const ir=k(t=>{class e extends t{_addEventListenerToNode(n,i,r){kl(n,i,r)||super._addEventListenerToNode(n,i,r)}_removeEventListenerFromNode(n,i,r){Ml(n,i,r)||super._removeEventListenerFromNode(n,i,r)}}return e});const Ll=/:host\(:dir\((ltr|rtl)\)\)/g,Bl=':host([dir="$1"])',Fl=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,zl=':host([dir="$2"]) $1',Hl=/:dir\((?:ltr|rtl)\)/,Di=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Ft=[];let zt=null,zs="";function nr(){zs=document.documentElement.getAttribute("dir")}function rr(t){t.__autoDirOptOut||t.setAttribute("dir",zs)}function or(){nr(),zs=document.documentElement.getAttribute("dir");for(let t=0;t<Ft.length;t++)rr(Ft[t])}function $l(){zt&&zt.takeRecords().length&&or()}const Ul=k(t=>{Di||zt||(nr(),zt=new MutationObserver(or),zt.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const e=Un(t);class s extends e{static _processStyleText(i,r){return i=e._processStyleText.call(this,i,r),!Di&&Hl.test(i)&&(i=this._replaceDirInCssText(i),this.__activateDir=!0),i}static _replaceDirInCssText(i){let r=i;return r=r.replace(Ll,Bl),r=r.replace(Fl,zl),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){e.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&($l(),Ft.push(this),rr(this))}disconnectedCallback(){if(e.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const i=Ft.indexOf(this);i>-1&&Ft.splice(i,1)}}}return s.__activateDir=!1,s});function Ii(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Ii():window.addEventListener("DOMContentLoaded",Ii);function Tt(t,e,s){return{index:t,removed:e,addedCount:s}}const ar=0,lr=1,ms=2,ys=3;function jl(t,e,s,n,i,r){let a=r-i+1,o=s-e+1,l=new Array(a);for(let c=0;c<a;c++)l[c]=new Array(o),l[c][0]=c;for(let c=0;c<o;c++)l[0][c]=c;for(let c=1;c<a;c++)for(let u=1;u<o;u++)if(Hs(t[e+u-1],n[i+c-1]))l[c][u]=l[c-1][u-1];else{let d=l[c-1][u]+1,h=l[c][u-1]+1;l[c][u]=d<h?d:h}return l}function Kl(t){let e=t.length-1,s=t[0].length-1,n=t[e][s],i=[];for(;e>0||s>0;){if(e==0){i.push(ms),s--;continue}if(s==0){i.push(ys),e--;continue}let r=t[e-1][s-1],a=t[e-1][s],o=t[e][s-1],l;a<o?l=a<r?a:r:l=o<r?o:r,l==r?(r==n?i.push(ar):(i.push(lr),n=r),e--,s--):l==a?(i.push(ys),e--,n=a):(i.push(ms),s--,n=o)}return i.reverse(),i}function Vl(t,e,s,n,i,r){let a=0,o=0,l,c=Math.min(s-e,r-i);if(e==0&&i==0&&(a=ql(t,n,c)),s==t.length&&r==n.length&&(o=Yl(t,n,c-a)),e+=a,i+=a,s-=o,r-=o,s-e==0&&r-i==0)return[];if(e==s){for(l=Tt(e,[],0);i<r;)l.removed.push(n[i++]);return[l]}else if(i==r)return[Tt(e,[],s-e)];let u=Kl(jl(t,e,s,n,i,r));l=void 0;let d=[],h=e,p=i;for(let f=0;f<u.length;f++)switch(u[f]){case ar:l&&(d.push(l),l=void 0),h++,p++;break;case lr:l||(l=Tt(h,[],0)),l.addedCount++,h++,l.removed.push(n[p]),p++;break;case ms:l||(l=Tt(h,[],0)),l.addedCount++,h++;break;case ys:l||(l=Tt(h,[],0)),l.removed.push(n[p]),p++;break}return l&&d.push(l),d}function ql(t,e,s){for(let n=0;n<s;n++)if(!Hs(t[n],e[n]))return n;return s}function Yl(t,e,s){let n=t.length,i=e.length,r=0;for(;r<s&&Hs(t[--n],e[--i]);)r++;return r}function cr(t,e){return Vl(t,0,t.length,e,0,e.length)}function Hs(t,e){return t===e}function lt(t){return t.localName==="slot"}let Li=class{static getFlattenedNodes(t){const e=m(t);if(lt(t))return t=t,e.assignedNodes({flatten:!0});{const s=[];for(let n=0;n<e.childNodes.length;n++){const i=e.childNodes[n];if(lt(i)){const r=i;s.push(...m(r).assignedNodes({flatten:!0}))}else s.push(i)}return s}}constructor(t,e){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=t,this.callback=e,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){lt(this._target)?this._listenSlots([this._target]):m(this._target).children&&(this._listenSlots(m(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,t=>{this._processMutations(t)}):(this._nativeChildrenObserver=new MutationObserver(t=>{this._processMutations(t)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){lt(this._target)?this._unlistenSlots([this._target]):m(this._target).children&&(this._unlistenSlots(m(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,j.run(()=>this.flush()))}_processMutations(t){this._processSlotMutations(t),this.flush()}_processSlotMutations(t){if(t)for(let e=0;e<t.length;e++){let s=t[e];s.addedNodes&&this._listenSlots(s.addedNodes),s.removedNodes&&this._unlistenSlots(s.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let t={target:this._target,addedNodes:[],removedNodes:[]},e=this.constructor.getFlattenedNodes(this._target),s=cr(e,this._effectiveNodes);for(let i=0,r;i<s.length&&(r=s[i]);i++)for(let a=0,o;a<r.removed.length&&(o=r.removed[a]);a++)t.removedNodes.push(o);for(let i=0,r;i<s.length&&(r=s[i]);i++)for(let a=r.index;a<r.index+r.addedCount;a++)t.addedNodes.push(e[a]);this._effectiveNodes=e;let n=!1;return(t.addedNodes.length||t.removedNodes.length)&&(n=!0,this.callback.call(this._target,t)),n}_listenSlots(t){for(let e=0;e<t.length;e++){let s=t[e];lt(s)&&s.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(t){for(let e=0;e<t.length;e++){let s=t[e];lt(s)&&s.removeEventListener("slotchange",this._boundSchedule)}}};const ur=function(){let t,e;do t=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),e=yl();while(t||e)};const ct=Element.prototype,Wl=ct.matches||ct.matchesSelector||ct.mozMatchesSelector||ct.msMatchesSelector||ct.oMatchesSelector||ct.webkitMatchesSelector,dr=function(t,e){return Wl.call(t,e)};class C{constructor(e){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(e),this.node=e}observeNodes(e){return new Li(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(m(this.node).contains(e))return!0;let s=e,n=e.ownerDocument;for(;s&&s!==n&&s!==this.node;)s=m(s).parentNode||m(s).host;return s===this.node}getOwnerRoot(){return m(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?m(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],s=m(this.node).assignedSlot;for(;s;)e.push(s),s=m(s).assignedSlot;return e}importNode(e,s){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return m(n).importNode(e,s)}getEffectiveChildNodes(){return Li.getFlattenedNodes(this.node)}queryDistributedElements(e){let s=this.getEffectiveChildNodes(),n=[];for(let i=0,r=s.length,a;i<r&&(a=s[i]);i++)a.nodeType===Node.ELEMENT_NODE&&dr(a,e)&&n.push(a);return n}get activeElement(){let e=this.node;return e._activeElement!==void 0?e._activeElement:e.activeElement}}function Jl(t,e){for(let s=0;s<e.length;s++){let n=e[s];t[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Bi(t,e){for(let s=0;s<e.length;s++){let n=e[s];Object.defineProperty(t,n,{get:function(){return this.node[n]},configurable:!0})}}function Gl(t,e){for(let s=0;s<e.length;s++){let n=e[s];Object.defineProperty(t,n,{get:function(){return this.node[n]},set:function(i){this.node[n]=i},configurable:!0})}}class gs{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}C.prototype.cloneNode;C.prototype.appendChild;C.prototype.insertBefore;C.prototype.removeChild;C.prototype.replaceChild;C.prototype.setAttribute;C.prototype.removeAttribute;C.prototype.querySelector;C.prototype.querySelectorAll;C.prototype.parentNode;C.prototype.firstChild;C.prototype.lastChild;C.prototype.nextSibling;C.prototype.previousSibling;C.prototype.firstElementChild;C.prototype.lastElementChild;C.prototype.nextElementSibling;C.prototype.previousElementSibling;C.prototype.childNodes;C.prototype.children;C.prototype.classList;C.prototype.textContent;C.prototype.innerHTML;let bs=C;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class t extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(C.prototype).forEach(e=>{e!="activeElement"&&(t.prototype[e]=C.prototype[e])}),Bi(t.prototype,["classList"]),bs=t,Object.defineProperties(gs.prototype,{localTarget:{get(){const e=this.event.currentTarget,s=e&&P(e).getOwnerRoot(),n=this.path;for(let i=0;i<n.length;i++){const r=n[i];if(P(r).getOwnerRoot()===s)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Jl(C.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Bi(C.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Gl(C.prototype,["textContent","innerHTML","className"]);const P=function(t){if(t=t||document,t instanceof bs||t instanceof gs)return t;let e=t.__domApi;return e||(t instanceof Event?e=new gs(t):e=new bs(t),t.__domApi=e),e};const Xe=window.ShadyDOM,Fi=window.ShadyCSS;function zi(t,e){return m(t).getRootNode()===e}function Xl(t,e=!1){if(!Xe||!Fi||!Xe.handlesDynamicScoping)return null;const s=Fi.ScopingShim;if(!s)return null;const n=s.scopeForNode(t),i=m(t).getRootNode(),r=a=>{if(!zi(a,i))return;const o=Array.from(Xe.nativeMethods.querySelectorAll.call(a,"*"));o.push(a);for(let l=0;l<o.length;l++){const c=o[l];if(!zi(c,i))continue;const u=s.currentScopeForNode(c);u!==n&&(u!==""&&s.unscopeNode(c,u),s.scopeNode(c,n))}};if(r(t),e){const a=new MutationObserver(o=>{for(let l=0;l<o.length;l++){const c=o[l];for(let u=0;u<c.addedNodes.length;u++){const d=c.addedNodes[u];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return a.observe(t,{childList:!0,subtree:!0}),a}else return null}const Qe="disable-upgrade",hr=t=>{for(;t;){const e=Object.getOwnPropertyDescriptor(t,"observedAttributes");if(e)return e.get;t=Object.getPrototypeOf(t.prototype).constructor}return()=>[]};k(t=>{const e=Ie(t);let s=hr(e);class n extends e{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return s.call(this).concat(Qe)}_initializeProperties(){this.hasAttribute(Qe)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,a,o,l){r==Qe?this.__isUpgradeDisabled&&o==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,m(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,a,o,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});const ie="disable-upgrade";let Ql=window.ShadyCSS;const pr=k(t=>{const e=ir(Ie(t)),s=ps?e:Ul(e),n=hr(s),i={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends s{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(o,l,c){(this.__dataAttributes&&this.__dataAttributes[o]||o===ie)&&this.attributeChangedCallback(o,l,c,null)}setAttribute(o,l){if(ee&&!this._legacyForceObservedAttributes){const c=this.getAttribute(o);super.setAttribute(o,l),this.__attributeReaction(o,c,String(l))}else super.setAttribute(o,l)}removeAttribute(o){if(ee&&!this._legacyForceObservedAttributes){const l=this.getAttribute(o);super.removeAttribute(o),this.__attributeReaction(o,l,null)}else super.removeAttribute(o)}static get observedAttributes(){return ee&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(ie)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(o){return super._canApplyPropertyDefault(o)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(o))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(o,l,c,u){l!==c&&(o==ie?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,m(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(o,l,c,u),this.attributeChanged(o,l,c)))}attributeChanged(o,l,c){}_initializeProperties(){if($t&&this.hasAttribute(ie))this.__isUpgradeDisabled=!0;else{let o=Object.getPrototypeOf(this);o.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",o))||(this._registered(),o.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),ee&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const o=this.attributes;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(o){return this._serializeValue(o)}deserialize(o,l){return this._deserializeValue(o,l)}reflectPropertyToAttribute(o,l,c){this._propertyToAttribute(o,l,c)}serializeValueToAttribute(o,l,c){this._valueToNodeAttribute(c||this,o,l)}extend(o,l){if(!(o&&l))return o||l;let c=Object.getOwnPropertyNames(l);for(let u=0,d;u<c.length&&(d=c[u]);u++){let h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(o,d,h)}return o}mixin(o,l){for(let c in l)o[c]=l[c];return o}chainObject(o,l){return o&&l&&o!==l&&(o.__proto__=l),o}instanceTemplate(o){let l=this.constructor._contentForTemplate(o);return document.importNode(l,!0)}fire(o,l,c){c=c||{},l=l??{};let u=new Event(o,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let d=c.node||this;return m(d).dispatchEvent(u),u}listen(o,l,c){o=o||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),d=u.get(o);d||(d={},u.set(o,d));let h=l+c;d[h]||(d[h]=this._addMethodEventListenerToNode(o,l,c,this))}unlisten(o,l,c){o=o||this;let u=this.__boundListeners&&this.__boundListeners.get(o),d=l+c,h=u&&u[d];h&&(this._removeEventListenerFromNode(o,l,h),u[d]=null)}setScrollDirection(o,l){sr(l||this,i[o]||"auto")}$$(o){return this.root.querySelector(o)}get domHost(){let o=m(this).getRootNode();return o instanceof DocumentFragment?o.host:o}distributeContent(){const l=P(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return P(this).getEffectiveChildNodes()}queryDistributedElements(o){return P(this).queryDistributedElements(o)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let o=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=o[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(o){let l=this.queryDistributedElements(o);return l&&l[0]}queryAllEffectiveChildren(o){return this.queryDistributedElements(o)}getContentChildNodes(o){let l=this.root.querySelector(o||"slot");return l?P(l).getDistributedNodes():[]}getContentChildren(o){return this.getContentChildNodes(o).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(o){const l=this;return l!==o&&m(l).contains(o)&&m(l).getRootNode()===m(o).getRootNode()}isLocalDescendant(o){return this.root===m(o).getRootNode()}scopeSubtree(o,l=!1){return Xl(o,l)}getComputedStyleValue(o){return Ql.getComputedStyleValue(this,o)}debounce(o,l,c){return this._debouncers=this._debouncers||{},this._debouncers[o]=st.debounce(this._debouncers[o],c>0?Bt.after(c):j,l.bind(this))}isDebouncerActive(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];return!!(l&&l.isActive())}flushDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.flush()}cancelDebouncer(o){this._debouncers=this._debouncers||{};let l=this._debouncers[o];l&&l.cancel()}async(o,l){return l>0?Bt.run(o.bind(this),l):~j.run(o.bind(this))}cancelAsync(o){o<0?j.cancel(~o):Bt.cancel(o)}create(o,l){let c=document.createElement(o);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(o,l){return dr(l||this,o)}toggleAttribute(o,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(o)),l?(m(c).setAttribute(o,""),!0):(m(c).removeAttribute(o),!1)}toggleClass(o,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(o)),l?c.classList.add(o):c.classList.remove(o)}transform(o,l){l=l||this,l.style.webkitTransform=o,l.style.transform=o}translate3d(o,l,c,u){u=u||this,this.transform("translate3d("+o+","+l+","+c+")",u)}arrayDelete(o,l){let c;if(Array.isArray(o)){if(c=o.indexOf(l),c>=0)return o.splice(c,1)}else if(c=A(this,o).indexOf(l),c>=0)return this.splice(o,c,1);return null}_logger(o,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),o){case"log":case"warn":case"error":console[o](...l)}}_log(...o){this._logger("log",o)}_warn(...o){this._logger("warn",o)}_error(...o){this._logger("error",o)}_logf(o,...l){return["[%s::%s]",this.is,o,...l]}}return r.prototype.is="",r});const Zl={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},fr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},tc=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},fr);function ec(t,e,s){const n=t._noAccessors,i=Object.getOwnPropertyNames(t);for(let r=0;r<i.length;r++){let a=i[r];if(!(a in s))if(n)e[a]=t[a];else{let o=Object.getOwnPropertyDescriptor(t,a);o&&(o.configurable=!0,Object.defineProperty(e,a,o))}}}function sc(t,e,s){for(let n=0;n<e.length;n++)_r(t,e[n],s,tc)}function _r(t,e,s,n){ec(e,t,n);for(let i in Zl)e[i]&&(s[i]=s[i]||[],s[i].push(e[i]))}function mr(t,e,s){e=e||[];for(let n=t.length-1;n>=0;n--){let i=t[n];i?Array.isArray(i)?mr(i,e):e.indexOf(i)<0&&(!s||s.indexOf(i)<0)&&e.unshift(i):console.warn("behavior is null, check for missing or 404 import")}return e}function Hi(t,e){for(const s in e){const n=t[s],i=e[s];!("value"in i)&&n&&"value"in n?t[s]=Object.assign({value:n.value},i):t[s]=i}}const $i=pr(HTMLElement);function ic(t,e,s){let n;const i={};class r extends e{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))e._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);t.properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)Hi(l,n[c].properties);return Hi(l,t.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return t.observers&&(l=l.concat(t.observers)),l}created(){super.created();const l=i.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),$t&&a(l);const c=Object.getPrototypeOf(this);let u=i.beforeRegister;if(u)for(let d=0;d<u.length;d++)u[d].call(c);if(u=i.registered,u)for(let d=0;d<u.length;d++)u[d].call(c)}}_applyListeners(){super._applyListeners();const l=i.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let d in u)this._addMethodEventListenerToNode(this,d,u[d])}}_ensureAttributes(){const l=i.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let d in u)this._ensureAttribute(d,u[d])}super._ensureAttributes()}ready(){super.ready();let l=i.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=i.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=i.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let d=i.attributeChanged;if(d)for(let h=0;h<d.length;h++)d[h].call(this,l,c,u)}}if(s){Array.isArray(s)||(s=[s]);let o=e.prototype.behaviors;n=mr(s,null,o),r.prototype.behaviors=o?o.concat(s):n}const a=o=>{n&&sc(o,n,i),_r(o,t,i,fr)};return $t||a(r.prototype),r.generatedFrom=t,r}const nc=function(t,e){t||console.warn("Polymer.Class requires `info` argument");let s=e?e($i):$i;return s=ic(t,s,t.behaviors),s.is=s.prototype.is=t.is,s};const Be=function(t){let e;return typeof t=="function"?e=t:e=Be.Class(t),t._legacyForceObservedAttributes&&(e.prototype._legacyForceObservedAttributes=t._legacyForceObservedAttributes),customElements.define(e.is,e),e};Be.Class=nc;function $s(t,e,s,n,i){let r;i&&(r=typeof s=="object"&&s!==null,r&&(n=t.__dataTemp[e]));let a=n!==s&&(n===n||s===s);return r&&a&&(t.__dataTemp[e]=s),a}const Us=k(t=>{class e extends t{_shouldPropertyChange(n,i,r){return $s(this,n,i,r,!0)}}return e}),yr=k(t=>{class e extends t{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,i,r){return $s(this,n,i,r,this.mutableData)}}return e});Us._mutablePropertyChange=$s;let ws=null;function vs(){return ws}vs.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:vs,writable:!0}});const gr=De(vs),rc=Us(gr);function oc(t,e){ws=t,Object.setPrototypeOf(t,e.prototype),new e,ws=null}const ac=De(class{});function br(t,e){for(let s=0;s<e.length;s++){let n=e[s];if(!!t!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)t?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(t)n.__polymerReplaced__=document.createComment("hidden-slot"),m(m(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const i=n.__polymerReplaced__;i&&m(m(i).parentNode).replaceChild(n,i)}else n.style&&(t?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=t,n._showHideChildren&&n._showHideChildren(t)}}class Y extends ac{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let s=[];this.children=s;for(let i=this.root.firstChild;i;i=i.nextSibling)s.push(i),i.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in e)this._setPendingProperty(n,e[n])}forwardHostProp(e,s){this._setPendingPropertyOrPath(e,s,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,s,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,s,i=>{i.model=this,n(i)});else{let i=this.__dataHost.__dataHost;i&&i._addEventListenerToNode(e,s,n)}}_showHideChildren(e){br(e,this.children)}_setUnmanagedPropertyToNode(e,s,n){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&s=="textContent"?e.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(e,s,n)}get parentModel(){let e=this.__parentModel;if(!e){let s;e=this;do e=e.__dataHost.__dataHost;while((s=e.__templatizeOptions)&&!s.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}Y.prototype.__dataHost;Y.prototype.__templatizeOptions;Y.prototype._methodHost;Y.prototype.__templatizeOwner;Y.prototype.__hostProps;const lc=Us(Y);function Ui(t){let e=t.__dataHost;return e&&e._methodHost||e}function cc(t,e,s){let n=s.mutableData?lc:Y;Se.mixin&&(n=Se.mixin(n));let i=class extends n{};return i.prototype.__templatizeOptions=s,i.prototype._bindTemplate(t),hc(i,t,e,s),i}function uc(t,e,s,n){let i=s.forwardHostProp;if(i&&e.hasHostProps){const r=t.localName=="template";let a=e.templatizeTemplateClass;if(!a){if(r){let l=s.mutableData?rc:gr;class c extends l{}a=e.templatizeTemplateClass=c}else{const l=t.constructor;class c extends l{}a=e.templatizeTemplateClass=c}let o=e.hostProps;for(let l in o)a.prototype._addPropertyEffect("_host_"+l,a.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:dc(l,i)}),a.prototype._createNotifyingProperty("_host_"+l);Mn&&n&&_c(e,s,n)}if(t.__dataProto&&Object.assign(t.__data,t.__dataProto),r)oc(t,a),t.__dataTemp={},t.__dataPending=null,t.__dataOld=null,t._enableProperties();else{Object.setPrototypeOf(t,a.prototype);const o=e.hostProps;for(let l in o)if(l="_host_"+l,l in t){const c=t[l];delete t[l],t.__data[l]=c}}}}function dc(t,e){return function(n,i,r){e.call(n.__templatizeOwner,i.substring(6),r[i])}}function hc(t,e,s,n){let i=s.hostProps||{};for(let r in n.instanceProps){delete i[r];let a=n.notifyInstanceProp;a&&t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:pc(r,a)})}if(n.forwardHostProp&&e.__dataHost)for(let r in i)s.hasHostProps||(s.hasHostProps=!0),t.prototype._addPropertyEffect(r,t.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:fc()})}function pc(t,e){return function(n,i,r){e.call(n.__templatizeOwner,n,i,r[i])}}function fc(){return function(e,s,n){e.__dataHost._setPendingPropertyOrPath("_host_"+s,n[s],!0,!0)}}function Se(t,e,s){if(yt&&!Ui(t))throw new Error("strictTemplatePolicy: template owner not trusted");if(s=s||{},t.__templatizeOwner)throw new Error("A <template> can only be templatized once");t.__templatizeOwner=e;let i=(e?e.constructor:Y)._parseTemplate(t),r=i.templatizeInstanceClass;r||(r=cc(t,i,s),i.templatizeInstanceClass=r);const a=Ui(t);uc(t,i,s,a);let o=class extends r{};return o.prototype._methodHost=a,o.prototype.__dataHost=t,o.prototype.__templatizeOwner=e,o.prototype.__hostProps=i.hostProps,o=o,o}function _c(t,e,s){const n=s.constructor._properties,{propertyEffects:i}=t,{instanceProps:r}=e;for(let a in i)if(!n[a]&&!(r&&r[a])){const o=i[a];for(let l=0;l<o.length;l++){const{part:c}=o[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${a}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function mc(t,e){let s;for(;e;)if(s=e.__dataHost?e:e.__templatizeInstance)if(s.__dataHost!=t)e=s.__dataHost;else return s;else e=m(e).parentNode;return null}let ji=!1;function js(){if($t&&!kn){if(!ji){ji=!0;const t=document.createElement("style");t.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(t)}return!0}return!1}const yc=ir(yr(De(HTMLElement)));class gc extends yc{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),yt)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(e,s,n,i){this.mutableData=!0}connectedCallback(){js()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){m(m(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let s=new MutationObserver(()=>{if(e=this.querySelector("template"),e)s.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});s.observe(this,{childList:!0});return}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let s=this.root.firstChild;s;s=s.nextSibling)this.__children[this.__children.length]=s;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",gc);const Ki=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:t=>t});class wr{constructor(e,s){Cr(e,s);const n=s.reduce((i,r,a)=>i+vr(r)+e[a+1],e[0]);this.value=n.toString()}toString(){return this.value}}function vr(t){if(t instanceof wr)return t.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${t}`)}function bc(t){if(t instanceof HTMLTemplateElement)return t.innerHTML;if(t instanceof wr)return vr(t);throw new Error(`non-template value passed to Polymer's html function: ${t}`)}const vt=function(e,...s){Cr(e,s);const n=document.createElement("template");let i=s.reduce((r,a,o)=>r+bc(a)+e[o+1],e[0]);return Ki&&(i=Ki.createHTML(i)),n.innerHTML=i,n},Cr=(t,e)=>{if(!Array.isArray(t)||!Array.isArray(t.raw)||e.length!==t.length-1)throw new TypeError("Invalid call to the html template tag")};const Ks=Ie(HTMLElement);const wc=yr(Ks);class Vi extends wc{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!cs,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),js()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let e=m(m(this).parentNode);for(let s=0;s<this.__instances.length;s++)this.__attachInstance(s,e);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const e=this;let s=this.template=e._templateInfo?e:this.querySelector("template");if(!s){let i=new MutationObserver(()=>{if(this.querySelector("template"))i.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return i.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=Se(s,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(i,r){let a=this.__instances;for(let o=0,l;o<a.length&&(l=a[o]);o++)l.forwardHostProp(i,r)},notifyInstanceProp:function(i,r,a){if(_a(this.as,r)){let o=i[this.itemsIndexAs];r==this.as&&(this.items[o]=a);let l=Kt(this.as,`${JSCompiler_renameProperty("items",this)}.${o}`,r);this.notifyPath(l,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if(typeof e=="string"){let s=e,n=this.__getMethodHost();return function(){return n[s].apply(n,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn){if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let s=this.__observePaths;for(let n=0;n<s.length;n++)e.indexOf(s[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(e.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(e,s=0){this.__renderDebouncer=st.debounce(this.__renderDebouncer,s>0?Bt.after(s):j,e.bind(this)),Gn(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ur()}__render(){if(!this.__ensureTemplatized())return;let e=this.items||[];const s=this.__sortAndFilterItems(e),n=this.__calculateLimit(s.length);this.__updateInstances(e,n,s),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!cs||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(e){let s=new Array(e.length);for(let n=0;n<e.length;n++)s[n]=n;return this.__filterFn&&(s=s.filter((n,i,r)=>this.__filterFn(e[n],i,r))),this.__sortFn&&s.sort((n,i)=>this.__sortFn(e[n],e[i])),s}__calculateLimit(e){let s=e;const n=this.__instances.length;if(this.initialCount){let i;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(s=Math.min(e,this.initialCount),i=Math.max(s-n,0),this.__chunkCount=i||1):(i=Math.min(Math.max(e-n,0),this.__chunkCount),s=Math.min(n+i,e)),this.__shouldMeasureChunk=i===this.__chunkCount,this.__shouldContinueChunking=s<e,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,s}__continueChunking(){if(this.__shouldMeasureChunk){const e=performance.now()-this.__renderStartTime,s=this._targetFrameTime/e;this.__chunkCount=Math.round(this.__chunkCount*s)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(e,s,n){const i=this.__itemsIdxToInstIdx={};let r;for(r=0;r<s;r++){let a=this.__instances[r],o=n[r],l=e[o];i[o]=r,a?(a._setPendingProperty(this.as,l),a._setPendingProperty(this.indexAs,r),a._setPendingProperty(this.itemsIndexAs,o),a._flushProperties()):this.__insertInstance(l,r,o)}for(let a=this.__instances.length-1;a>=r;a--)this.__detachAndRemoveInstance(a)}__detachInstance(e){let s=this.__instances[e];const n=m(s.root);for(let i=0;i<s.children.length;i++){let r=s.children[i];n.appendChild(r)}return s}__attachInstance(e,s){let n=this.__instances[e];s.insertBefore(n.root,this)}__detachAndRemoveInstance(e){this.__detachInstance(e),this.__instances.splice(e,1)}__stampInstance(e,s,n){let i={};return i[this.as]=e,i[this.indexAs]=s,i[this.itemsIndexAs]=n,new this.__ctor(i)}__insertInstance(e,s,n){const i=this.__stampInstance(e,s,n);let r=this.__instances[s+1],a=r?r.children[0]:this;return m(m(this).parentNode).insertBefore(i.root,a),this.__instances[s]=i,i}_showHideChildren(e){for(let s=0;s<this.__instances.length;s++)this.__instances[s]._showHideChildren(e)}__handleItemPath(e,s){let n=e.slice(6),i=n.indexOf("."),r=i<0?n:n.substring(0,i);if(r==parseInt(r,10)){let a=i<0?"":n.substring(i+1);this.__handleObservedPaths(a);let o=this.__itemsIdxToInstIdx[r],l=this.__instances[o];if(l){let c=this.as+(a?"."+a:"");l._setPendingPropertyOrPath(c,s,!1,!0),l._flushProperties()}return!0}}itemForElement(e){let s=this.modelForElement(e);return s&&s[this.as]}indexForElement(e){let s=this.modelForElement(e);return s&&s[this.indexAs]}modelForElement(e){return mc(this.template,e)}}customElements.define(Vi.is,Vi);class xr extends Ks{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=st.debounce(this.__renderDebouncer,j,()=>this.__render()),Gn(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const e=m(this).parentNode;(!e||e.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!m(e).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),js()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const e=this;let s=e._templateInfo?e:m(e).querySelector("template");if(!s){let n=new MutationObserver(()=>{if(m(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=s}return!0}__ensureInstance(){let e=m(this).parentNode;if(this.__hasInstance()){let s=this.__getInstanceNodes();if(s&&s.length&&m(this).previousSibling!==s[s.length-1])for(let i=0,r;i<s.length&&(r=s[i]);i++)m(e).insertBefore(r,this)}else{if(!e||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(e)}return!0}render(){ur()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!cs||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(e){}__teardownInstance(){}_showHideChildren(){}}class vc extends xr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(e){const s=this.__dataHost||this;if(yt&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=s._bindTemplate(this.__template,!0);n.runEffects=(i,r,a)=>{let o=this.__syncInfo;if(this.if)o&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(o.changedProps,r)),i(r,a);else if(this.__instance)if(o||(o=this.__syncInfo={runEffects:i,changedProps:{}}),a)for(const l in r){const c=$(l);o.changedProps[c]=this.__dataHost[c]}else Object.assign(o.changedProps,r)},this.__instance=s._stampTemplate(this.__template,n),m(e).insertBefore(this.__instance,this)}__syncHostProperties(){const e=this.__syncInfo;e&&(this.__syncInfo=null,e.runEffects(e.changedProps,!1))}__teardownInstance(){const e=this.__dataHost||this;this.__instance&&(e._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,br(e,this.__instance.templateInfo.childNodes)),e||this.__syncHostProperties()}}class Cc extends xr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(e){this.__ctor||(this.__ctor=Se(this.__template,this,{mutableData:!0,forwardHostProp:function(s,n){this.__instance&&(this.if?this.__instance.forwardHostProp(s,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[$(s)]=!0))}})),this.__instance=new this.__ctor,m(e).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let s=m(e[0]).parentNode;if(s){s=m(s);for(let n=0,i;n<e.length&&(i=e[n]);n++)s.removeChild(i)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let e=this.__invalidProps;if(e){this.__invalidProps=null;for(let s in e)this.__instance._setPendingProperty(s,this.__dataHost[s]);this.__instance._flushProperties()}}_showHideChildren(){const e=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==e&&(this.__instance.__hidden=e,this.__instance._showHideChildren(e)),e||this.__syncHostProperties()}}const qi=Rn?vc:Cc;customElements.define(qi.is,qi);let xc=k(t=>{let e=Ie(t);class s extends e{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(i,r){let a=r.path;if(a==JSCompiler_renameProperty("items",this)){let o=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(i!==c&&this.clearSelection(),l){let u=cr(o,l);this.__applySplices(u)}this.__lastItems=o,this.__lastMulti=i}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let o=a.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(o,10);o.indexOf(".")<0&&o==l&&this.__deselectChangedIdx(l)}}__applySplices(i){let r=this.__selectedMap;for(let o=0;o<i.length;o++){let l=i[o];r.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?r.set(u,c+l.addedCount-l.removed.length):r.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;r.has(this.items[u])&&r.set(this.items[u],u)}}this.__updateLinks();let a=0;r.forEach((o,l)=>{o<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null,r.delete(l)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let i=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${i++}`)})}else this.__selectedMap.forEach(i=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${i}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${i}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(i){return this.__selectedMap.has(i)}isIndexSelected(i){return this.isSelected(this.items[i])}__deselectChangedIdx(i){let r=this.__selectedIndexForItemIndex(i);if(r>=0){let a=0;this.__selectedMap.forEach((o,l)=>{r==a++&&this.deselect(l)})}}__selectedIndexForItemIndex(i){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${i}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(i){let r=this.__selectedMap.get(i);if(r>=0){this.__selectedMap.delete(i);let a;this.multi&&(a=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),a,1):this.selected=this.selectedItem=null}}deselectIndex(i){this.deselect(this.items[i])}select(i){this.selectIndex(this.items.indexOf(i))}selectIndex(i){let r=this.items[i];this.isSelected(r)?this.toggle&&this.deselectIndex(i):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,i),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return s}),Sc=xc(Ks);class Yi extends Sc{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Yi.is,Yi);const ue=new V;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(t,e,s){},prepareTemplateDom(t,e){},prepareTemplateStyles(t,e,s){},styleSubtree(t,e){ue.processStyles(),rs(t,e)},styleElement(t){ue.processStyles()},styleDocument(t){ue.processStyles(),rs(document.body,t)},getComputedStyleValue(t,e){return On(t,e)},flushCustomStyles(){},nativeCss:Es,nativeShadow:Me,cssBuild:Ht,disableRuntime:wn});window.ShadyCSS.CustomStyleInterface=ue;const Wi="include",Pc=window.ShadyCSS.CustomStyleInterface;class Ec extends HTMLElement{constructor(){super(),this._style=null,Pc.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const s=e.getAttribute(Wi);return s&&(e.removeAttribute(Wi),e.textContent=da(s)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Ec);pr(HTMLElement).prototype;const Sr=vt`
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
</custom-style>`;Sr.setAttribute("style","display: none;");document.head.appendChild(Sr.content);var Pr=document.createElement("style");Pr.textContent="[hidden] { display: none !important; }";document.head.appendChild(Pr);const Er=vt`
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
</custom-style>`;Er.setAttribute("style","display: none;");document.head.appendChild(Er.content);const Ar=vt`
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
</dom-module>`;Ar.setAttribute("style","display: none;");document.head.appendChild(Ar.content);const Ac={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(t){this._setFocused(t.type==="focus")},_disabledChanged:function(t,e){this.setAttribute("aria-disabled",t?"true":"false"),this.style.pointerEvents=t?"none":"",t?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};var Ji={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Tc={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Gi={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Oc=/[a-z0-9*]/,Nc=/U\+/,kc=/^arrow/,Mc=/^space(bar)?/,Rc=/^escape$/;function Xi(t,e){var s="";if(t){var n=t.toLowerCase();n===" "||Mc.test(n)?s="space":Rc.test(n)?s="esc":n.length==1?(!e||Oc.test(n))&&(s=n):kc.test(n)?s=n.replace("arrow",""):n=="multiply"?s="*":s=n}return s}function Dc(t){var e="";return t&&(t in Ji?e=Ji[t]:Nc.test(t)?(t=parseInt(t.replace("U+","0x"),16),e=String.fromCharCode(t).toLowerCase()):e=t.toLowerCase()),e}function Ic(t){var e="";return Number(t)&&(t>=65&&t<=90?e=String.fromCharCode(32+t):t>=112&&t<=123?e="f"+(t-112+1):t>=48&&t<=57?e=String(t-48):t>=96&&t<=105?e=String(t-96):e=Tc[t]),e}function Lc(t,e){return t.key?Xi(t.key,e):t.detail&&t.detail.key?Xi(t.detail.key,e):Dc(t.keyIdentifier)||Ic(t.keyCode)||""}function Qi(t,e){var s=Lc(e,t.hasModifiers);return s===t.key&&(!t.hasModifiers||!!e.shiftKey==!!t.shiftKey&&!!e.ctrlKey==!!t.ctrlKey&&!!e.altKey==!!t.altKey&&!!e.metaKey==!!t.metaKey)}function Bc(t){return t.length===1?{combo:t,key:t,event:"keydown"}:t.split("+").reduce(function(e,s){var n=s.split(":"),i=n[0],r=n[1];return i in Gi?(e[Gi[i]]=!0,e.hasModifiers=!0):(e.key=i,e.event=r||"keydown"),e},{combo:t.split(":").shift()})}function Zi(t){return t.trim().split(" ").map(function(e){return Bc(e)})}const Tr={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(t,e){this._imperativeKeyBindings[t]=e,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(t,e){for(var s=Zi(e),n=0;n<s.length;++n)if(Qi(s[n],t))return!0;return!1},_collectKeyBindings:function(){var t=this.behaviors.map(function(e){return e.keyBindings});return t.indexOf(this.keyBindings)===-1&&t.push(this.keyBindings),t},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(s){for(var n in s)this._addKeyBinding(n,s[n])},this);for(var t in this._imperativeKeyBindings)this._addKeyBinding(t,this._imperativeKeyBindings[t]);for(var e in this._keyBindings)this._keyBindings[e].sort(function(s,n){var i=s[0].hasModifiers,r=n[0].hasModifiers;return i===r?0:i?-1:1})},_addKeyBinding:function(t,e){Zi(t).forEach(function(s){this._keyBindings[s.event]=this._keyBindings[s.event]||[],this._keyBindings[s.event].push([s,e])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(t){var e=this._keyBindings[t],s=this._onKeyBindingEvent.bind(this,e);this._boundKeyHandlers.push([this.keyEventTarget,t,s]),this.keyEventTarget.addEventListener(t,s)},this)},_unlistenKeyEventListeners:function(){for(var t,e,s,n;this._boundKeyHandlers.length;)t=this._boundKeyHandlers.pop(),e=t[0],s=t[1],n=t[2],e.removeEventListener(s,n)},_onKeyBindingEvent:function(t,e){if(this.stopKeyboardEventPropagation&&e.stopPropagation(),!e.defaultPrevented)for(var s=0;s<t.length;s++){var n=t[s][0],i=t[s][1];if(Qi(n,e)&&(this._triggerKeyHandler(n,i,e),e.defaultPrevented))return}},_triggerKeyHandler:function(t,e,s){var n=Object.create(t);n.keyboardEvent=s;var i=new CustomEvent(t.event,{detail:n,cancelable:!0});this[e].call(this,i),i.defaultPrevented&&s.preventDefault()}};const Pe={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(t){this._detectKeyboardFocus(t),t||this._setPressed(!1)},_detectKeyboardFocus:function(t){this._setReceivedFocusFromKeyboard(!this.pointerDown&&t)},_userActivate:function(t){this.active!==t&&(this.active=t,this.fire("change"))},_downHandler:function(t){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(t){var e=t.detail.keyboardEvent,s=P(e).localTarget;this.isLightDescendant(s)||(e.preventDefault(),e.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(t){var e=t.detail.keyboardEvent,s=P(e).localTarget;this.isLightDescendant(s)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(t){this._changedButtonState()},_ariaActiveAttributeChanged:function(t,e){e&&e!=t&&this.hasAttribute(e)&&this.removeAttribute(e)},_activeChanged:function(t,e){this.toggles?this.setAttribute(this.ariaActiveAttribute,t?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Fc=[Tr,Pe];var L={distance:function(t,e,s,n){var i=t-s,r=e-n;return Math.sqrt(i*i+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Or(t){this.element=t,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Or.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(t,e){var s=L.distance(t,e,0,0),n=L.distance(t,e,this.width,0),i=L.distance(t,e,0,this.height),r=L.distance(t,e,this.width,this.height);return Math.max(s,n,i,r)}};function G(t){this.element=t,this.color=window.getComputedStyle(t).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),P(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}G.MAX_RADIUS=300;G.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var t;return this.mouseDownStart?(t=L.now()-this.mouseDownStart,this.mouseUpStart&&(t-=this.mouseUpElapsed),t):0},get mouseUpElapsed(){return this.mouseUpStart?L.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var t=this.containerMetrics.width*this.containerMetrics.width,e=this.containerMetrics.height*this.containerMetrics.height,s=Math.min(Math.sqrt(t+e),G.MAX_RADIUS)*1.1+5,n=1.1-.2*(s/G.MAX_RADIUS),i=this.mouseInteractionSeconds/n,r=s*(1-Math.pow(80,-i));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var t=this.mouseUpElapsedSeconds*.3,e=this.opacity;return Math.max(0,Math.min(t,e))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,G.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,G.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Or(this.element)},draw:function(){var t,e,s;this.wave.style.opacity=this.opacity,t=this.radius/(this.containerMetrics.size/2),e=this.xNow-this.containerMetrics.width/2,s=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+e+"px, "+s+"px)",this.waveContainer.style.transform="translate3d("+e+"px, "+s+"px, 0)",this.wave.style.webkitTransform="scale("+t+","+t+")",this.wave.style.transform="scale3d("+t+","+t+",1)"},downAction:function(t){var e=this.containerMetrics.width/2,s=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=L.now(),this.center?(this.xStart=e,this.yStart=s,this.slideDistance=L.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=t?t.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=t?t.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=e,this.yEnd=s,this.slideDistance=L.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(t){this.isMouseDown&&(this.mouseUpStart=L.now())},remove:function(){P(P(this.waveContainer).parentNode).removeChild(this.waveContainer)}};Be({_template:vt`
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
`,is:"paper-ripple",behaviors:[Tr],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){P(this).parentNode.nodeType==11?this.keyEventTarget=P(this).getOwnerRoot().host:this.keyEventTarget=P(this).parentNode;var t=this.keyEventTarget;this.listen(t,"up","uiUpAction"),this.listen(t,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var t=0;t<this.ripples.length;++t)if(!this.ripples[t].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(t){this.noink||this.downAction(t)},downAction:function(t){if(!(this.holdDown&&this.ripples.length>0)){var e=this.addRipple();e.downAction(t),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(t){this.noink||this.upAction(t)},upAction:function(t){this.holdDown||(this.ripples.forEach(function(e){e.upAction(t)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var t=new G(this);return P(this.$.waves).appendChild(t.waveContainer),this.$.background.style.backgroundColor=t.color,this.ripples.push(t),this._setAnimating(!0),t},removeRipple:function(t){var e=this.ripples.indexOf(t);e<0||(this.ripples.splice(e,1),t.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var t,e;for(t=0;t<this.ripples.length;++t)e=this.ripples[t],e.draw(),this.$.background.style.opacity=e.outerOpacity,e.isOpacityFullyDecayed&&!e.isRestingAtMaxRadius&&this.removeRipple(e);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(t,e){e!==void 0&&(t?this.downAction():this.upAction())}});const zc={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(t){Pe._downHandler.call(this,t),this.pressed&&this.ensureRipple(t)},ensureRipple:function(t){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var e=this._rippleContainer||this.root;if(e&&P(e).appendChild(this._ripple),t){var s=P(this._rippleContainer||this),n=P(t).rootTarget;s.deepContains(n)&&this._ripple.uiDownAction(t)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var t=document.createElement("paper-ripple");return t},_noinkChanged:function(t){this.hasRipple()&&(this._ripple.noink=t)}};const Nr={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(t){this.toggleClass("keyboard-focus",t)},_spaceKeyDownHandler:function(t){Pe._spaceKeyDownHandler.call(this,t),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(t){Pe._spaceKeyUpHandler.call(this,t),this.hasRipple()&&this._ripple.uiUpAction()}},Hc=[Fc,Ac,zc,Nr];const kr=vt`
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

  <slot></slot>`;kr.setAttribute("strip-whitespace","");Be({_template:kr,is:"paper-button",behaviors:[Hc],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Nr._calculateElevation.apply(this):this._setElevation(0)}});const $c=t=>t??de;function*Uc(t,e){if(t!==void 0){let s=0;for(const n of t)yield e(n,s++)}}const jc={duration:250},Kc=t=>(e,s,n)=>{const i="max"+t.charAt(0).toUpperCase()+t.slice(1);Object.assign(e.style,{[i]:"",display:""});const{[t]:r}=e.getBoundingClientRect(),a=[0,r],[o,l]=s?a:a.slice().reverse(),c=e.animate([{[i]:`${o}px`},{[i]:`${l}px`}],{...jc,...n});c.onfinish=()=>Object.assign(e.style,{[i]:"",display:s?"":"none"})},Mr=t=>{const e=_t(()=>({}),[]);return _t(()=>Object.assign(e,t),[e,...Object.values(t)])},tn=t=>t.matches(":focus-within"),Vc=({disabled:t,onFocus:e})=>{const[s,n]=dt(),{focused:i,closed:r}=s||{},a=i&&!t,o=Mr({closed:r,onFocus:e}),l=Rt(u=>n(d=>({...d,closed:u})),[]),c=Rt(u=>{const d=u.currentTarget;return tn(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return Jt(()=>{if(!a)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=o;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[a]),{focused:a,active:a&&!r,setClosed:l,onToggle:c,onFocus:Rt(u=>{const d=tn(u.currentTarget);n({focused:d}),o.onFocus?.(d)},[o])}},en=["focusin","focusout"],qc=t=>{const e=Vc(t),{onFocus:s}=e;return Jt(()=>(t.setAttribute("tabindex","0"),en.forEach(n=>t.addEventListener(n,s)),()=>{en.forEach(n=>t.removeEventListener(n,s))}),[]),e},Yc=ke`
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
`,Wc=()=>R` <slot></slot> `;customElements.define("cosmoz-dropdown-list",wt(Wc,{styleSheets:[Yc]}));const Jc=({placement:t})=>R` <cosmoz-dropdown
		.placement=${t}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",wt(Jc));const Gc={},Xc=Ss(class extends Ps{constructor(){super(...arguments),this.ot=Gc}render(t,e){return e()}update(t,[e,s]){if(Array.isArray(e)){if(Array.isArray(this.ot)&&this.ot.length===e.length&&e.every((n,i)=>n===this.ot[i]))return es}else if(this.ot===e)return es;return this.ot=Array.isArray(e)?Array.from(e):e,this.render(e,s)}}),Ze=new WeakMap,sn=Ss(class extends bo{render(t){return de}update(t,[e]){const s=e!==this.G;return s&&this.G!==void 0&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.G=e,this.ht=t.options?.host,this.rt(this.ct=t.element)),de}rt(t){if(this.isConnected||(t=void 0),typeof this.G=="function"){const e=this.ht??globalThis;let s=Ze.get(e);s===void 0&&(s=new WeakMap,Ze.set(e,s)),s.get(this.G)!==void 0&&this.G.call(this.ht,void 0),s.set(this.G,t),t!==void 0&&this.G.call(this.ht,t)}else this.G.value=t}get lt(){return typeof this.G=="function"?Ze.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const Rr="important",Qc=" !"+Rr,Zc=Ss(class extends Ps{constructor(t){if(super(t),t.type!==gn.ATTRIBUTE||t.name!=="style"||t.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).reduce((e,s)=>{const n=t[s];return n==null?e:e+`${s=s.includes("-")?s:s.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(t,[e]){const{style:s}=t.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(e)),this.render(e);for(const n of this.ft)e[n]==null&&(this.ft.delete(n),n.includes("-")?s.removeProperty(n):s[n]=null);for(const n in e){const i=e[n];if(i!=null){this.ft.add(n);const r=typeof i=="string"&&i.endsWith(Qc);n.includes("-")||r?s.setProperty(n,r?i.slice(0,-11):i,r?Rr:""):s[n]=i}}return es}});function tu(t,e,s){return t?e(t):s?.(t)}const eu=(t=HTMLElement)=>class extends t{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},su=ke`
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
`,iu=()=>R`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",eu(wt(iu,{styleSheets:[su]})));const Ee=Math.min,et=Math.max,Ae=Math.round,ne=Math.floor,B=t=>({x:t,y:t}),nu={left:"right",right:"left",bottom:"top",top:"bottom"},ru={start:"end",end:"start"};function nn(t,e,s){return et(t,Ee(e,s))}function Vs(t,e){return typeof t=="function"?t(e):t}function gt(t){return t.split("-")[0]}function qs(t){return t.split("-")[1]}function Dr(t){return t==="x"?"y":"x"}function Ir(t){return t==="y"?"height":"width"}const ou=new Set(["top","bottom"]);function Q(t){return ou.has(gt(t))?"y":"x"}function Lr(t){return Dr(Q(t))}function au(t,e,s){s===void 0&&(s=!1);const n=qs(t),i=Lr(t),r=Ir(i);let a=i==="x"?n===(s?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=Te(a)),[a,Te(a)]}function lu(t){const e=Te(t);return[Cs(t),e,Cs(e)]}function Cs(t){return t.replace(/start|end/g,e=>ru[e])}const rn=["left","right"],on=["right","left"],cu=["top","bottom"],uu=["bottom","top"];function du(t,e,s){switch(t){case"top":case"bottom":return s?e?on:rn:e?rn:on;case"left":case"right":return e?cu:uu;default:return[]}}function hu(t,e,s,n){const i=qs(t);let r=du(gt(t),s==="start",n);return i&&(r=r.map(a=>a+"-"+i),e&&(r=r.concat(r.map(Cs)))),r}function Te(t){return t.replace(/left|right|bottom|top/g,e=>nu[e])}function pu(t){return{top:0,right:0,bottom:0,left:0,...t}}function fu(t){return typeof t!="number"?pu(t):{top:t,right:t,bottom:t,left:t}}function Oe(t){const{x:e,y:s,width:n,height:i}=t;return{width:n,height:i,top:s,left:e,right:e+n,bottom:s+i,x:e,y:s}}function an(t,e,s){let{reference:n,floating:i}=t;const r=Q(e),a=Lr(e),o=Ir(a),l=gt(e),c=r==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,h=n[o]/2-i[o]/2;let p;switch(l){case"top":p={x:u,y:n.y-i.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-i.width,y:d};break;default:p={x:n.x,y:n.y}}switch(qs(e)){case"start":p[a]-=h*(s&&c?-1:1);break;case"end":p[a]+=h*(s&&c?-1:1);break}return p}const _u=async(t,e,s)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:a}=s,o=r.filter(Boolean),l=await(a.isRTL==null?void 0:a.isRTL(e));let c=await a.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=an(c,n,l),h=n,p={},f=0;for(let g=0;g<o.length;g++){const{name:y,fn:_}=o[g],{x:b,y:w,data:S,reset:x}=await _({x:u,y:d,initialPlacement:n,placement:h,strategy:i,middlewareData:p,rects:c,platform:a,elements:{reference:t,floating:e}});u=b??u,d=w??d,p={...p,[y]:{...p[y],...S}},x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(c=x.rects===!0?await a.getElementRects({reference:t,floating:e,strategy:i}):x.rects),{x:u,y:d}=an(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:p}};async function Br(t,e){var s;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:a,elements:o,strategy:l}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=Vs(e,t),f=fu(p),y=o[h?d==="floating"?"reference":"floating":d],_=Oe(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(y)))==null||s?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(o.floating)),boundary:c,rootBoundary:u,strategy:l})),b=d==="floating"?{x:n,y:i,width:a.floating.width,height:a.floating.height}:a.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(o.floating)),S=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},x=Oe(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:b,offsetParent:w,strategy:l}):b);return{top:(_.top-x.top+f.top)/S.y,bottom:(x.bottom-_.bottom+f.bottom)/S.y,left:(_.left-x.left+f.left)/S.x,right:(x.right-_.right+f.right)/S.x}}const mu=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var s,n;const{placement:i,middlewareData:r,rects:a,initialPlacement:o,platform:l,elements:c}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:g=!0,...y}=Vs(t,e);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const _=gt(i),b=Q(o),w=gt(o)===o,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=h||(w||!g?[Te(o)]:lu(o)),xt=f!=="none";!h&&xt&&x.push(...hu(o,g,f,S));const ot=[o,...x],Ue=await Br(e,y),Qt=[];let at=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&Qt.push(Ue[_]),d){const W=au(i,a,S);Qt.push(Ue[W[0]],Ue[W[1]])}if(at=[...at,{placement:i,overflows:Qt}],!Qt.every(W=>W<=0)){var Gs,Xs;const W=(((Gs=r.flip)==null?void 0:Gs.index)||0)+1,je=ot[W];if(je&&(!(d==="alignment"?b!==Q(je):!1)||at.every(M=>Q(M.placement)===b?M.overflows[0]>0:!0)))return{data:{index:W,overflows:at},reset:{placement:je}};let St=(Xs=at.filter(J=>J.overflows[0]<=0).sort((J,M)=>J.overflows[1]-M.overflows[1])[0])==null?void 0:Xs.placement;if(!St)switch(p){case"bestFit":{var Qs;const J=(Qs=at.filter(M=>{if(xt){const U=Q(M.placement);return U===b||U==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(U=>U>0).reduce((U,Wr)=>U+Wr,0)]).sort((M,U)=>M[1]-U[1])[0])==null?void 0:Qs[0];J&&(St=J);break}case"initialPlacement":St=o;break}if(i!==St)return{reset:{placement:St}}}return{}}}},yu=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:s,y:n,placement:i}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:o={fn:y=>{let{x:_,y:b}=y;return{x:_,y:b}}},...l}=Vs(t,e),c={x:s,y:n},u=await Br(e,l),d=Q(gt(i)),h=Dr(d);let p=c[h],f=c[d];if(r){const y=h==="y"?"top":"left",_=h==="y"?"bottom":"right",b=p+u[y],w=p-u[_];p=nn(b,p,w)}if(a){const y=d==="y"?"top":"left",_=d==="y"?"bottom":"right",b=f+u[y],w=f-u[_];f=nn(b,f,w)}const g=o.fn({...e,[h]:p,[d]:f});return{...g,data:{x:g.x-s,y:g.y-n,enabled:{[h]:r,[d]:a}}}}}};function Fe(){return typeof window<"u"}function Ct(t){return Fr(t)?(t.nodeName||"").toLowerCase():"#document"}function N(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function z(t){var e;return(e=(Fr(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Fr(t){return Fe()?t instanceof Node||t instanceof N(t).Node:!1}function D(t){return Fe()?t instanceof Element||t instanceof N(t).Element:!1}function F(t){return Fe()?t instanceof HTMLElement||t instanceof N(t).HTMLElement:!1}function ln(t){return!Fe()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof N(t).ShadowRoot}const gu=new Set(["inline","contents"]);function Xt(t){const{overflow:e,overflowX:s,overflowY:n,display:i}=I(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+s)&&!gu.has(i)}const bu=new Set(["table","td","th"]);function wu(t){return bu.has(Ct(t))}const vu=[":popover-open",":modal"];function ze(t){return vu.some(e=>{try{return t.matches(e)}catch{return!1}})}const Cu=["transform","translate","scale","rotate","perspective"],xu=["transform","translate","scale","rotate","perspective","filter"],Su=["paint","layout","strict","content"];function Ys(t){const e=Ws(),s=D(t)?I(t):t;return Cu.some(n=>s[n]?s[n]!=="none":!1)||(s.containerType?s.containerType!=="normal":!1)||!e&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!e&&(s.filter?s.filter!=="none":!1)||xu.some(n=>(s.willChange||"").includes(n))||Su.some(n=>(s.contain||"").includes(n))}function Pu(t){let e=q(t);for(;F(e)&&!bt(e);){if(Ys(e))return e;if(ze(e))return null;e=q(e)}return null}function Ws(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Eu=new Set(["html","body","#document"]);function bt(t){return Eu.has(Ct(t))}function I(t){return N(t).getComputedStyle(t)}function He(t){return D(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function q(t){if(Ct(t)==="html")return t;const e=t.assignedSlot||t.parentNode||ln(t)&&t.host||z(t);return ln(e)?e.host:e}function zr(t){const e=q(t);return bt(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&Xt(e)?e:zr(e)}function Wt(t,e,s){var n;e===void 0&&(e=[]),s===void 0&&(s=!0);const i=zr(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),a=N(i);if(r){const o=xs(a);return e.concat(a,a.visualViewport||[],Xt(i)?i:[],o&&s?Wt(o):[])}return e.concat(i,Wt(i,[],s))}function xs(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Hr(t){const e=I(t);let s=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:s,a=i?t.offsetHeight:n,o=Ae(s)!==r||Ae(n)!==a;return o&&(s=r,n=a),{width:s,height:n,$:o}}function Js(t){return D(t)?t:t.contextElement}function ft(t){const e=Js(t);if(!F(e))return B(1);const s=e.getBoundingClientRect(),{width:n,height:i,$:r}=Hr(e);let a=(r?Ae(s.width):s.width)/n,o=(r?Ae(s.height):s.height)/i;return(!a||!Number.isFinite(a))&&(a=1),(!o||!Number.isFinite(o))&&(o=1),{x:a,y:o}}const Au=B(0);function $r(t){const e=N(t);return!Ws()||!e.visualViewport?Au:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Tu(t,e,s){return e===void 0&&(e=!1),!s||e&&s!==N(t)?!1:e}function it(t,e,s,n){e===void 0&&(e=!1),s===void 0&&(s=!1);const i=t.getBoundingClientRect(),r=Js(t);let a=B(1);e&&(n?D(n)&&(a=ft(n)):a=ft(t));const o=Tu(r,s,n)?$r(r):B(0);let l=(i.left+o.x)/a.x,c=(i.top+o.y)/a.y,u=i.width/a.x,d=i.height/a.y;if(r){const h=N(r),p=n&&D(n)?N(n):n;let f=h,g=xs(f);for(;g&&n&&p!==f;){const y=ft(g),_=g.getBoundingClientRect(),b=I(g),w=_.left+(g.clientLeft+parseFloat(b.paddingLeft))*y.x,S=_.top+(g.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=w,c+=S,f=N(g),g=xs(f)}}return Oe({width:u,height:d,x:l,y:c})}function $e(t,e){const s=He(t).scrollLeft;return e?e.left+s:it(z(t)).left+s}function Ur(t,e){const s=t.getBoundingClientRect(),n=s.left+e.scrollLeft-$e(t,s),i=s.top+e.scrollTop;return{x:n,y:i}}function Ou(t){let{elements:e,rect:s,offsetParent:n,strategy:i}=t;const r=i==="fixed",a=z(n),o=e?ze(e.floating):!1;if(n===a||o&&r)return s;let l={scrollLeft:0,scrollTop:0},c=B(1);const u=B(0),d=F(n);if((d||!d&&!r)&&((Ct(n)!=="body"||Xt(a))&&(l=He(n)),F(n))){const p=it(n);c=ft(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const h=a&&!d&&!r?Ur(a,l):B(0);return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:s.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Nu(t){return Array.from(t.getClientRects())}function ku(t){const e=z(t),s=He(t),n=t.ownerDocument.body,i=et(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=et(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let a=-s.scrollLeft+$e(t);const o=-s.scrollTop;return I(n).direction==="rtl"&&(a+=et(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:a,y:o}}const cn=25;function Mu(t,e){const s=N(t),n=z(t),i=s.visualViewport;let r=n.clientWidth,a=n.clientHeight,o=0,l=0;if(i){r=i.width,a=i.height;const u=Ws();(!u||u&&e==="fixed")&&(o=i.offsetLeft,l=i.offsetTop)}const c=$e(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),p=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,f=Math.abs(n.clientWidth-d.clientWidth-p);f<=cn&&(r-=f)}else c<=cn&&(r+=c);return{width:r,height:a,x:o,y:l}}const Ru=new Set(["absolute","fixed"]);function Du(t,e){const s=it(t,!0,e==="fixed"),n=s.top+t.clientTop,i=s.left+t.clientLeft,r=F(t)?ft(t):B(1),a=t.clientWidth*r.x,o=t.clientHeight*r.y,l=i*r.x,c=n*r.y;return{width:a,height:o,x:l,y:c}}function un(t,e,s){let n;if(e==="viewport")n=Mu(t,s);else if(e==="document")n=ku(z(t));else if(D(e))n=Du(e,s);else{const i=$r(t);n={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return Oe(n)}function jr(t,e){const s=q(t);return s===e||!D(s)||bt(s)?!1:I(s).position==="fixed"||jr(s,e)}function Iu(t,e){const s=e.get(t);if(s)return s;let n=Wt(t,[],!1).filter(o=>D(o)&&Ct(o)!=="body"),i=null;const r=I(t).position==="fixed";let a=r?q(t):t;for(;D(a)&&!bt(a);){const o=I(a),l=Ys(a);!l&&o.position==="fixed"&&(i=null),(r?!l&&!i:!l&&o.position==="static"&&!!i&&Ru.has(i.position)||Xt(a)&&!l&&jr(t,a))?n=n.filter(u=>u!==a):i=o,a=q(a)}return e.set(t,n),n}function Lu(t){let{element:e,boundary:s,rootBoundary:n,strategy:i}=t;const a=[...s==="clippingAncestors"?ze(e)?[]:Iu(e,this._c):[].concat(s),n],o=a[0],l=a.reduce((c,u)=>{const d=un(e,u,i);return c.top=et(d.top,c.top),c.right=Ee(d.right,c.right),c.bottom=Ee(d.bottom,c.bottom),c.left=et(d.left,c.left),c},un(e,o,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Bu(t){const{width:e,height:s}=Hr(t);return{width:e,height:s}}function Fu(t,e,s){const n=F(e),i=z(e),r=s==="fixed",a=it(t,!0,r,e);let o={scrollLeft:0,scrollTop:0};const l=B(0);function c(){l.x=$e(i)}if(n||!n&&!r)if((Ct(e)!=="body"||Xt(i))&&(o=He(e)),n){const p=it(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else i&&c();r&&!n&&i&&c();const u=i&&!n&&!r?Ur(i,o):B(0),d=a.left+o.scrollLeft-l.x-u.x,h=a.top+o.scrollTop-l.y-u.y;return{x:d,y:h,width:a.width,height:a.height}}function ts(t){return I(t).position==="static"}function dn(t,e){if(!F(t)||I(t).position==="fixed")return null;if(e)return e(t);let s=t.offsetParent;return z(t)===s&&(s=s.ownerDocument.body),s}function Kr(t,e){const s=N(t);if(ze(t))return s;if(!F(t)){let i=q(t);for(;i&&!bt(i);){if(D(i)&&!ts(i))return i;i=q(i)}return s}let n=dn(t,e);for(;n&&wu(n)&&ts(n);)n=dn(n,e);return n&&bt(n)&&ts(n)&&!Ys(n)?s:n||Pu(t)||s}const zu=async function(t){const e=this.getOffsetParent||Kr,s=this.getDimensions,n=await s(t.floating);return{reference:Fu(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Hu(t){return I(t).direction==="rtl"}const $u={convertOffsetParentRelativeRectToViewportRelativeRect:Ou,getDocumentElement:z,getClippingRect:Lu,getOffsetParent:Kr,getElementRects:zu,getClientRects:Nu,getDimensions:Bu,getScale:ft,isElement:D,isRTL:Hu};function Vr(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Uu(t,e){let s=null,n;const i=z(t);function r(){var o;clearTimeout(n),(o=s)==null||o.disconnect(),s=null}function a(o,l){o===void 0&&(o=!1),l===void 0&&(l=1),r();const c=t.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(o||e(),!h||!p)return;const f=ne(d),g=ne(i.clientWidth-(u+h)),y=ne(i.clientHeight-(d+p)),_=ne(u),w={rootMargin:-f+"px "+-g+"px "+-y+"px "+-_+"px",threshold:et(0,Ee(1,l))||1};let S=!0;function x(xt){const ot=xt[0].intersectionRatio;if(ot!==l){if(!S)return a();ot?a(!1,ot):n=setTimeout(()=>{a(!1,1e-7)},1e3)}ot===1&&!Vr(c,t.getBoundingClientRect())&&a(),S=!1}try{s=new IntersectionObserver(x,{...w,root:i.ownerDocument})}catch{s=new IntersectionObserver(x,w)}s.observe(t)}return a(!0),r}function ju(t,e,s,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:o=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Js(t),u=i||r?[...c?Wt(c):[],...Wt(e)]:[];u.forEach(_=>{i&&_.addEventListener("scroll",s,{passive:!0}),r&&_.addEventListener("resize",s)});const d=c&&o?Uu(c,s):null;let h=-1,p=null;a&&(p=new ResizeObserver(_=>{let[b]=_;b&&b.target===c&&p&&(p.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(e)})),s()}),c&&!l&&p.observe(c),p.observe(e));let f,g=l?it(t):null;l&&y();function y(){const _=it(t);g&&!Vr(g,_)&&s(),g=_,f=requestAnimationFrame(y)}return s(),()=>{var _;u.forEach(b=>{i&&b.removeEventListener("scroll",s),r&&b.removeEventListener("resize",s)}),d?.(),(_=p)==null||_.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const Ku=yu,Vu=mu,qu=(t,e,s)=>{const n=new Map,i={platform:$u,...s},r={...i.platform,_c:n};return _u(t,e,{...i,platform:r})},Yu=[Vu({fallbackAxisSideDirection:"start",crossAxis:!1}),Ku()],Wu=({placement:t="bottom-start",strategy:e,middleware:s=Yu}={})=>{const[n,i]=dt(),[r,a]=dt(),[o,l]=dt();return Jt(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return ju(n,r,()=>qu(n,r,{placement:t,strategy:e,middleware:s}).then(l))},[n,r,t,e,s]),{setReference:i,setFloating:a,styles:_t(()=>o?{left:`${o.x}px`,top:`${o.y}px`}:{},[o?.x,o?.y])}},Ju=t=>t.preventDefault(),Gu=ke`
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
`,Xu=t=>{const{placement:e,strategy:s,middleware:n,render:i}=t,{active:r,onToggle:a}=qc(t),{styles:o,setReference:l,setFloating:c}=Wu({placement:e,strategy:s,middleware:n});return R` <div class="anchor" part="anchor" ${sn(l)}>
			<button
				@mousedown=${Ju}
				@click=${a}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${tu(r,()=>R`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Zc(o)}"
					@connected=${u=>u.target.showPopover?.()}
					${sn(c)}
					><slot></slot>${Xc([i],()=>i?.()||de)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",wt(Xu,{styleSheets:[Gu]}));function Qu(t){return()=>t}const Zu=Qu(),td=Zu,qr=wo(()=>td);customElements.define("cosmoz-keybinding-provider",qr.Provider);const ed=(t,e)=>{const s=yn(qr),n=Mr(t);Jt(()=>s(n),e)},sd="bottom-bar-toolbar",id="bottom-bar-menu",nd=ke`
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
`,rd=Symbol("openMenu"),od=t=>{const e=t.shadowRoot?.querySelector("#dropdown");if(!e||e.hasAttribute("hidden"))return;e.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},Yr=t=>t.nodeType===Node.ELEMENT_NODE&&t.getAttribute("slot")!=="info"&&t.tagName!=="TEMPLATE"&&t.tagName!=="STYLE"&&t.tagName!=="DOM-REPEAT"&&t.tagName!=="DOM-IF"&&t.getAttribute("slot")!=="extra",ad=t=>{const e=[...t.childNodes],s=[];for(const n of e)if(n.tagName==="SLOT"){const i=n.assignedElements({flatten:!0});s.push(...i)}else s.push(n);return s},ld=t=>{const e=ad(t).filter(Yr).filter(n=>!n.hidden).sort((n,i)=>(Number(n.dataset.index)||0)-(Number(i.dataset.index)||0));if(e.length===0)return e;const s=e.reduce((n,i)=>parseInt(n.dataset.priority??"0",10)>=parseInt(i.dataset.priority??"0",10)?n:i,{dataset:{priority:"-1000"}});return[s,...e.filter(n=>n!==s)]},hn=(t,e,s,n)=>{const i=e?sd:id;t.setAttribute("slot",i),t.setAttribute("tabindex","0"),t.classList.toggle(n,!e),t.classList.toggle(s,e)},cd=(t,e,s)=>{const n=ld(t),{maxToolbarItems:i=1}=t;if(!(n.length>0)){t.toggleAttribute("has-menu-items",!1);return}const a=n.slice(0,i),o=n.slice(a.length);a.forEach(l=>hn(l,!0,e,s)),o.forEach(l=>hn(l,!1,e,s)),t.toggleAttribute("has-menu-items",o.length>0)},ud=t=>{const{active:e=!1,maxToolbarItems:s=1}=t,n=fo(!1),i="cosmoz-bottom-bar-toolbar",r="cosmoz-bottom-bar-menu";ed({activity:rd,callback:()=>od(t),check:()=>e&&!t.hasAttribute("hide-actions"),element:()=>t.shadowRoot?.querySelector("#dropdown")},[e]);const a=_t(()=>Kc("height"),[]);ho(()=>{n.current?a(t,e):a(t,e,{duration:0}),n.current=!0},[e]);const o=Rt(()=>cd(t,i,r),[s]);Jt(()=>{const c=new MutationObserver(()=>o()),u=()=>{c.disconnect(),Array.from(t.children).forEach(h=>{Yr(h)&&c.observe(h,{attributes:!0,attributeFilter:["hidden"]})})};u();const d=new MutationObserver(()=>{u(),o()});return d.observe(t,{childList:!0}),()=>{c.disconnect(),d.disconnect()}},[o]);const l=Rt(()=>o(),[o]);return R` <div id="bar" part="bar">
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
		</div>`};customElements.define("cosmoz-bottom-bar",wt(ud,{observedAttributes:["active","max-toolbar-items"],styleSheets:[nd]}));const Ne=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`;R(Object.assign([Ne],{raw:[Ne]}));vt(Object.assign([Ne],{raw:[Ne]}));function dd(t){const e=[...t];for(let s=e.length-1;s>0;s--){const n=Math.floor(Math.random()*(s+1));[e[s],e[n]]=[e[n],e[s]]}return e}const hd=t=>{const{active:e,maxToolbarItems:s}=t,[n,i]=dt(""),[r,a]=dt(dd([{onClick:()=>alert("Button 1 clicked"),priority:10,text:"Button 1"},{onClick:()=>alert("Button 2 clicked"),text:"Button 2"},{onClick:()=>alert("Button 3 clicked"),text:"Button 3"},{onClick:()=>alert("Button 4 clicked"),priority:5,text:"Button 4"},{onClick:()=>alert("Button 5 clicked"),text:"Button 5"}].concat(...Array.from({length:100},(u,d)=>{const h=d+6;return{onClick:()=>alert("Button "+h+" clicked"),text:"Button "+h,priority:h}})))),o=u=>{const d=u.target;i(d.value)},l=u=>{const d=u?u.trim():"";a([...r,{onClick:()=>alert("!!Button "+d+" clicked"),priority:d?+d:void 0,text:"Button "+d}]),u&&i("")};return R`
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
        <paper-button @click=${()=>{const u=t.shadowRoot.querySelector("cosmoz-bottom-bar");t.shadowRoot.appendChild(u)}}>Test reconnect</paper-button>

        <cosmoz-bottom-bar
            id="bottomBar"
            ?active=${e}
            .maxToolbarItems=${s}
        >
            <span slot="info">Bottom bar demo</span>
            ${Uc(r,u=>R`<paper-button
                        @click=${u.onClick}
                        data-priority=${$c(u.priority)}
                        >${u.text}</paper-button
                    >`)}
        </cosmoz-bottom-bar>
    `};customElements.define("cosmoz-bottom-bar-story",wt(hd,{observedAttributes:["active","max-toolbar-items"]}));const pd=t=>R`<cosmoz-bottom-bar-story
        ?active=${t.active}
        .maxToolbarItems=${t.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,fd=({active:t,maxToolbarItems:e})=>R`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${t}
        .maxToolbarItems=${e}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,bd={title:"Cosmoz Bottom Bar",render:pd,argTypes:{active:{control:"boolean"},maxToolbarItems:{control:"number"}},parameters:{docs:{description:{component:"The Cosmoz Bottom Bar web component"}}}},re={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The basic version"}}}},oe={render:fd,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The empty cosmoz-bottom-bar"}}}};re.parameters={...re.parameters,docs:{...re.parameters?.docs,source:{originalSource:`{
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
}`,...re.parameters?.docs?.source}}};oe.parameters={...oe.parameters,docs:{...oe.parameters?.docs,source:{originalSource:`{
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
}`,...oe.parameters?.docs?.source}}};const wd=["Basic","Empty"];export{re as Basic,oe as Empty,wd as __namedExportsOrder,bd as default};
