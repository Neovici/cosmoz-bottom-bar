import{r as Jr,D as Gr,A as dt,b as M,E as He}from"./iframe-BljMKXe0.js";let ht,hn=0;function Zi(e){ht=e}function es(){ht=null,hn=0}function Xr(){return hn++}const Vt=Symbol("haunted.phase"),at=Symbol("haunted.hook"),ts=Symbol("haunted.update"),is=Symbol("haunted.commit"),ee=Symbol("haunted.effects"),Re=Symbol("haunted.layoutEffects"),si="haunted.context";class Qr{update;host;virtual;[at];[ee];[Re];constructor(t,i){this.update=t,this.host=i,this[at]=new Map,this[ee]=[],this[Re]=[]}run(t){Zi(this);let i=t();return es(),i}_runEffects(t){let i=this[t];Zi(this);for(let n of i)n.call(this);es()}runEffects(){this._runEffects(ee)}runLayoutEffects(){this._runEffects(Re)}teardown(){this[at].forEach(i=>{typeof i.teardown=="function"&&i.teardown(!0)})}}const Zr=Promise.resolve().then.bind(Promise.resolve());function pn(){let e=[],t;function i(){t=null;let n=e;e=[];for(var s=0,r=n.length;s<r;s++)n[s]()}return function(n){e.push(n),t==null&&(t=Zr(i))}}const eo=pn(),ss=pn();class to{renderer;host;state;[Vt];_updateQueued;_active;constructor(t,i){this.renderer=t,this.host=i,this.state=new Qr(this.update.bind(this),i),this[Vt]=null,this._updateQueued=!1,this._active=!0}update(){this._active&&(this._updateQueued||(eo(()=>{let t=this.handlePhase(ts);ss(()=>{this.handlePhase(is,t),ss(()=>{this.handlePhase(ee)})}),this._updateQueued=!1}),this._updateQueued=!0))}handlePhase(t,i){switch(this[Vt]=t,t){case is:this.commit(i),this.runEffects(Re);return;case ts:return this.render();case ee:return this.runEffects(ee)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(t){this.state._runEffects(t)}teardown(){this.state.teardown()}pause(){this._active=!1}resume(){this._active=!0}}const io=(...e)=>{const t=new CSSStyleSheet;return t.replaceSync(e.join("")),t},so=e=>e?.map(t=>typeof t=="string"?io(t):t),no=(e,...t)=>e.flatMap((i,n)=>[i,t[n]||""]).join(""),kt=no,ro=(e="")=>e.replace(/-+([a-z])?/g,(t,i)=>i?i.toUpperCase():"");function oo(e){class t extends to{frag;renderResult;constructor(s,r,o){super(s,o||r),this.frag=r}commit(s){this.renderResult=e(s,this.frag)}}function i(n,s,r){const o=(r||s||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:l=!0,shadowRootInit:c={},styleSheets:u}=r||s||{},d=so(n.styleSheets||u);class h extends o{_scheduler;static get observedAttributes(){return n.observedAttributes||a||[]}constructor(){if(super(),l===!1)this._scheduler=new t(n,this);else{const y=this.attachShadow({mode:"open",...c});d&&(y.adoptedStyleSheets=d),this._scheduler=new t(n,y,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(y,_,b){if(_===b)return;let w=b===""?!0:b;Reflect.set(this,ro(y),w)}}function p(g){let y=g,_=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return y},set(b){_&&y===b||(_=!0,y=b,this._scheduler&&this._scheduler.update())}})}const f=new Proxy(o.prototype,{getPrototypeOf(g){return g},set(g,y,_,b){let w;return y in g?(w=Object.getOwnPropertyDescriptor(g,y),w&&w.set?(w.set.call(b,_),!0):(Reflect.set(g,y,_,b),!0)):(typeof y=="symbol"||y[0]==="_"?w={enumerable:!0,configurable:!0,writable:!0,value:_}:w=p(_),Object.defineProperty(b,y,w),w.set&&w.set.call(b,_),!0)}});return Object.setPrototypeOf(h.prototype,f),h}return i}class be{id;state;constructor(t,i){this.id=t,this.state=i}}function ao(e,...t){let i=Xr(),n=ht[at],s=n.get(i);return s||(s=new e(i,ht,...t),n.set(i,s)),s.update(...t)}function we(e){return ao.bind(null,e)}function fn(e){return we(class extends be{callback;lastValues;values;_teardown;constructor(t,i,n,s){super(t,i),e(i,this)}update(t,i){this.callback=t,this.values=i}call(){const t=!this.values||this.hasChanged();this.lastValues=this.values,t&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(t){typeof this._teardown=="function"&&(this._teardown(),this._teardown=void 0),t&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((t,i)=>this.lastValues[i]!==t)}})}function _n(e,t){e[ee].push(t)}const te=fn(_n),lo=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,mn=we(class extends be{Context;value;_ranEffect;_unsubscribe;constructor(e,t,i){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,_n(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){const t={Context:e,callback:this._updater};lo(this.state.host).dispatchEvent(new CustomEvent(si,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));const{unsubscribe:n=null,value:s}=t;this.value=n?s:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}});function co(e){return t=>{const i={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display="contents",this.listeners=new Set,this.addEventListener(si,this)}disconnectedCallback(){this.removeEventListener(si,this)}handleEvent(n){const{detail:s}=n;s.Context===i&&(s.value=this.value,s.unsubscribe=this.unsubscribe.bind(this,s.callback),this.listeners.add(s.callback),n.stopPropagation())}unsubscribe(n){this.listeners.delete(n)}set value(n){this._value=n;for(let s of this.listeners)s(n)}get value(){return this._value}},Consumer:e(function({render:n}){const s=mn(i);return n(s)},{useShadowDOM:!1}),defaultValue:t};return i}}const H=we(class extends be{value;values;constructor(e,t,i,n){super(e,t),this.value=i(),this.values=n}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((t,i)=>this.values[i]!==t)}}),qt=(e,t)=>H(()=>e,t);function uo(e,t){e[Re].push(t)}const ho=fn(uo),ie=we(class extends be{args;constructor(e,t,i){super(e,t),this.updater=this.updater.bind(this),typeof i=="function"&&(i=i()),this.makeArgs(i)}update(){return this.args}updater(e){const[t]=this.args;typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}});we(class extends be{reducer;currentState;constructor(e,t,i,n,s){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=s!==void 0?s(n):n}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}});const po=/([A-Z])/gu;we(class extends be{property;eventName;constructor(e,t,i,n){if(super(e,t),this.state.virtual)throw new Error("Can't be used with virtual components.");this.updater=this.updater.bind(this),this.property=i,this.eventName=i.replace(po,"-$1").toLowerCase()+"-changed",this.state.host[this.property]==null&&(typeof n=="function"&&(n=n()),n!=null&&this.updateProp(n))}update(e,t){return[this.state.host[this.property],this.updater]}updater(e){const t=this.state.host[this.property];typeof e=="function"&&(e=e(t)),!Object.is(t,e)&&this.updateProp(e)}updateProp(e){this.notify(e).defaultPrevented||(this.state.host[this.property]=e)}notify(e){const t=new CustomEvent(this.eventName,{detail:{value:e,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(t),t}});function fo(e){return H(()=>({current:e}),[])}function _o({render:e}){const t=oo(e),i=co(t);return{component:t,createContext:i}}const yn={ATTRIBUTE:1,CHILD:2},Mt=e=>(...t)=>({_$litDirective$:e,values:t});let Pi=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,i,n){this._$Ct=t,this._$AM=i,this._$Ci=n}_$AS(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}};const De=(e,t)=>{const i=e._$AN;if(i===void 0)return!1;for(const n of i)n._$AO?.(t,!1),De(n,t);return!0},pt=e=>{let t,i;do{if((t=e._$AM)===void 0)break;i=t._$AN,i.delete(e),e=t}while(i?.size===0)},gn=e=>{for(let t;t=e._$AM;e=t){let i=t._$AN;if(i===void 0)t._$AN=i=new Set;else if(i.has(e))break;i.add(e),go(t)}};function mo(e){this._$AN!==void 0?(pt(this),this._$AM=e,gn(this)):this._$AM=e}function yo(e,t=!1,i=0){const n=this._$AH,s=this._$AN;if(s!==void 0&&s.size!==0)if(t)if(Array.isArray(n))for(let r=i;r<n.length;r++)De(n[r],!1),pt(n[r]);else n!=null&&(De(n,!1),pt(n));else De(this,e)}const go=e=>{e.type==yn.CHILD&&(e._$AP??=yo,e._$AQ??=mo)};class bn extends Pi{constructor(){super(...arguments),this._$AN=void 0}_$AT(t,i,n){super._$AT(t,i,n),gn(this),this.isConnected=t._$AU}_$AO(t,i=!0){t!==this.isConnected&&(this.isConnected=t,t?this.reconnected?.():this.disconnected?.()),i&&(De(this,t),pt(this))}setValue(t){if(Jr(this._$Ct))this._$Ct._$AI(t,this);else{const i=[...this._$Ct._$AH];i[this._$Ci]=t,this._$Ct._$AI(i,this,0)}}disconnected(){}reconnected(){}}const{component:ve,createContext:bo}=_o({render:Gr});const Rt=!(window.ShadyDOM&&window.ShadyDOM.inUse);let ft;function ns(e){e&&e.shimcssproperties?ft=!1:ft=Rt||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)"))}let $e;window.ShadyCSS&&window.ShadyCSS.cssBuild!==void 0&&($e=window.ShadyCSS.cssBuild);const wn=!!(window.ShadyCSS&&window.ShadyCSS.disableRuntime);window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?ft=window.ShadyCSS.nativeCss:window.ShadyCSS?(ns(window.ShadyCSS),window.ShadyCSS=void 0):ns(window.WebComponents&&window.WebComponents.flags);const Ei=ft;class rs{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function vn(e){return e=wo(e),Cn(vo(e),e)}function wo(e){return e.replace($.comments,"").replace($.port,"")}function vo(e){let t=new rs;t.start=0,t.end=e.length;let i=t;for(let n=0,s=e.length;n<s;n++)if(e[n]===Sn){i.rules||(i.rules=[]);let r=i,o=r.rules[r.rules.length-1]||null;i=new rs,i.start=n+1,i.parent=r,i.previous=o,r.rules.push(i)}else e[n]===Pn&&(i.end=n+1,i=i.parent||t);return t}function Cn(e,t){let i=t.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=i.trim(),e.parent){let s=e.previous?e.previous.end:e.parent.start;i=t.substring(s,e.start-1),i=Co(i),i=i.replace($.multipleSpaces," "),i=i.substring(i.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=i.trim();e.atRule=r.indexOf(To)===0,e.atRule?r.indexOf(Ao)===0?e.type=de.MEDIA_RULE:r.match($.keyframesRule)&&(e.type=de.KEYFRAMES_RULE,e.keyframesName=e.selector.split($.multipleSpaces).pop()):r.indexOf(En)===0?e.type=de.MIXIN_RULE:e.type=de.STYLE_RULE}let n=e.rules;if(n)for(let s=0,r=n.length,o;s<r&&(o=n[s]);s++)Cn(o,t);return e}function Co(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let t=arguments[1],i=6-t.length;for(;i--;)t="0"+t;return"\\"+t})}function xn(e,t,i=""){let n="";if(e.cssText||e.rules){let s=e.rules;if(s&&!xo(s))for(let r=0,o=s.length,a;r<o&&(a=s[r]);r++)n=xn(a,t,n);else n=t?e.cssText:So(e.cssText),n=n.trim(),n&&(n="  "+n+`
`)}return n&&(e.selector&&(i+=e.selector+" "+Sn+`
`),i+=n,e.selector&&(i+=Pn+`

`)),i}function xo(e){let t=e[0];return!!t&&!!t.selector&&t.selector.indexOf(En)===0}function So(e){return e=Po(e),Eo(e)}function Po(e){return e.replace($.customProp,"").replace($.mixinProp,"")}function Eo(e){return e.replace($.mixinApply,"").replace($.varApply,"")}const de={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},Sn="{",Pn="}",$={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},En="--",Ao="@media",To="@";const ni=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,_t=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;const os=new Set,Oo="shady-unscoped";function No(e){const t=e.textContent;if(!os.has(t)){os.add(t);const i=document.createElement("style");i.setAttribute("shady-unscoped",""),i.textContent=t,document.head.appendChild(i)}}function ko(e){return e.hasAttribute(Oo)}function ri(e,t){return e?(typeof e=="string"&&(e=vn(e)),xn(e,Ei)):""}function as(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=vn(e.textContent)),e.__cssRules||null}function lt(e,t,i,n){if(!e)return;let s=!1,r=e.type;r===de.STYLE_RULE?t(e):r===de.MIXIN_RULE&&(s=!0);let o=e.rules;if(o&&!s)for(let a=0,l=o.length,c;a<l&&(c=o[a]);a++)lt(c,t)}function Mo(e,t){let i=0;for(let n=t,s=e.length;n<s;n++)if(e[n]==="(")i++;else if(e[n]===")"&&--i===0)return n;return-1}function An(e,t){let i=e.indexOf("var(");if(i===-1)return t(e,"","","");let n=Mo(e,i+3),s=e.substring(i+4,n),r=e.substring(0,i),o=An(e.substring(n+1),t),a=s.indexOf(",");if(a===-1)return t(r,s.trim(),"",o);let l=s.substring(0,a).trim(),c=s.substring(a+1).trim();return t(r,l,c,o)}window.ShadyDOM&&window.ShadyDOM.wrap;function Ro(e){let t=e.localName,i="",n="";return t?t.indexOf("-")>-1?i=t:(n=t,i=e.getAttribute&&e.getAttribute("is")||""):(i=e.is,n=e.extends),{is:i,typeExtension:n}}function Do(e){const t=[],i=e.querySelectorAll("style");for(let n=0;n<i.length;n++){const s=i[n];ko(s)?Rt||(No(s),s.parentNode.removeChild(s)):(t.push(s.textContent),s.parentNode.removeChild(s))}return t.join("").trim()}const Tn="css-build";function Io(e){if($e!==void 0)return $e;if(e.__cssBuild===void 0){const t=e.getAttribute(Tn);if(t)e.__cssBuild=t;else{const i=Lo(e);i!==""&&Bo(e),e.__cssBuild=i}}return e.__cssBuild||""}function ls(e){return Io(e)!==""}function Lo(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;if(t instanceof Comment){const i=t.textContent.trim().split(":");if(i[0]===Tn)return i[1]}return""}function Bo(e){const t=e.localName==="template"?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}function oi(e,t){for(let i in t)i===null?e.style.removeProperty(i):e.style.setProperty(i,t[i])}function On(e,t){const i=window.getComputedStyle(e).getPropertyValue(t);return i?i.trim():""}function Fo(e){const t=_t.test(e)||ni.test(e);return _t.lastIndex=0,ni.lastIndex=0,t}const zo=/;\s*/m,Ho=/^\s*(initial)|(inherit)\s*$/,cs=/\s*!important/,ai="_-_";class $o{constructor(){this._map={}}set(t,i){t=t.trim(),this._map[t]={properties:i,dependants:{}}}get(t){return t=t.trim(),this._map[t]||null}}let mt=null;class T{constructor(){this._currentElement=null,this._measureElement=null,this._map=new $o}detectMixin(t){return Fo(t)}gatherStyles(t){const i=Do(t.content);if(i){const n=document.createElement("style");return n.textContent=i,t.content.insertBefore(n,t.content.firstChild),n}return null}transformTemplate(t,i){t._gatheredStyle===void 0&&(t._gatheredStyle=this.gatherStyles(t));const n=t._gatheredStyle;return n?this.transformStyle(n,i):null}transformStyle(t,i=""){let n=as(t);return this.transformRules(n,i),t.textContent=ri(n),n}transformCustomStyle(t){let i=as(t);return lt(i,n=>{n.selector===":root"&&(n.selector="html"),this.transformRule(n)}),t.textContent=ri(i),i}transformRules(t,i){this._currentElement=i,lt(t,n=>{this.transformRule(n)}),this._currentElement=null}transformRule(t){t.cssText=this.transformCssText(t.parsedCssText,t),t.selector===":root"&&(t.selector=":host > *")}transformCssText(t,i){return t=t.replace(ni,(n,s,r,o)=>this._produceCssProperties(n,s,r,o,i)),this._consumeCssProperties(t,i)}_getInitialValueForProperty(t){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(t)}_fallbacksFromPreviousRules(t){let i=t;for(;i.parent;)i=i.parent;const n={};let s=!1;return lt(i,r=>{s=s||r===t,!s&&r.selector===t.selector&&Object.assign(n,this._cssTextToMap(r.parsedCssText))}),n}_consumeCssProperties(t,i){let n=null;for(;n=_t.exec(t);){let s=n[0],r=n[1],o=n.index,a=o+s.indexOf("@apply"),l=o+s.length,c=t.slice(0,a),u=t.slice(l),d=i?this._fallbacksFromPreviousRules(i):{};Object.assign(d,this._cssTextToMap(c));let h=this._atApplyToCssProperties(r,d);t=`${c}${h}${u}`,_t.lastIndex=o+h.length}return t}_atApplyToCssProperties(t,i){t=t.replace(zo,"");let n=[],s=this._map.get(t);if(s||(this._map.set(t,{}),s=this._map.get(t)),s){this._currentElement&&(s.dependants[this._currentElement]=!0);let r,o,a;const l=s.properties;for(r in l)a=i&&i[r],o=[r,": var(",t,ai,r],a&&o.push(",",a.replace(cs,"")),o.push(")"),cs.test(l[r])&&o.push(" !important"),n.push(o.join(""))}return n.join("; ")}_replaceInitialOrInherit(t,i){let n=Ho.exec(i);return n&&(n[1]?i=this._getInitialValueForProperty(t):i="apply-shim-inherit"),i}_cssTextToMap(t,i=!1){let n=t.split(";"),s,r,o={};for(let a=0,l,c;a<n.length;a++)l=n[a],l&&(c=l.split(":"),c.length>1&&(s=c[0].trim(),r=c.slice(1).join(":"),i&&(r=this._replaceInitialOrInherit(s,r)),o[s]=r));return o}_invalidateMixinEntry(t){if(mt)for(let i in t.dependants)i!==this._currentElement&&mt(i)}_produceCssProperties(t,i,n,s,r){if(n&&An(n,(y,_)=>{_&&this._map.get(_)&&(s=`@apply ${_};`)}),!s)return t;let o=this._consumeCssProperties(""+s,r),a=t.slice(0,t.indexOf("--")),l=this._cssTextToMap(o,!0),c=l,u=this._map.get(i),d=u&&u.properties;d?c=Object.assign(Object.create(d),l):this._map.set(i,c);let h=[],p,f,g=!1;for(p in c)f=l[p],f===void 0&&(f="initial"),d&&!(p in d)&&(g=!0),h.push(`${i}${ai}${p}: ${f}`);return g&&this._invalidateMixinEntry(u),u&&(u.properties=c),n&&(a=`${t};${a}`),`${a}${h.join("; ")};`}}T.prototype.detectMixin=T.prototype.detectMixin;T.prototype.transformStyle=T.prototype.transformStyle;T.prototype.transformCustomStyle=T.prototype.transformCustomStyle;T.prototype.transformRules=T.prototype.transformRules;T.prototype.transformRule=T.prototype.transformRule;T.prototype.transformTemplate=T.prototype.transformTemplate;T.prototype._separator=ai;Object.defineProperty(T.prototype,"invalidCallback",{get(){return mt},set(e){mt=e}});const li={};const yt="_applyShimCurrentVersion",_e="_applyShimNextVersion",gt="_applyShimValidatingVersion",Uo=Promise.resolve();function jo(e){let t=li[e];t&&Ko(t)}function Ko(e){e[yt]=e[yt]||0,e[gt]=e[gt]||0,e[_e]=(e[_e]||0)+1}function Nn(e){return e[yt]===e[_e]}function Vo(e){return!Nn(e)&&e[gt]===e[_e]}function qo(e){e[gt]=e[_e],e._validating||(e._validating=!0,Uo.then(function(){e[yt]=e[_e],e._validating=!1}))}let Yt=null,us=window.HTMLImports&&window.HTMLImports.whenReady||null,Wt;function ds(e){requestAnimationFrame(function(){us?us(e):(Yt||(Yt=new Promise(t=>{Wt=t}),document.readyState==="complete"?Wt():document.addEventListener("readystatechange",()=>{document.readyState==="complete"&&Wt()})),Yt.then(function(){e&&e()}))})}const hs="__seenByShadyCSS",Ze="__shadyCSSCachedStyle";let bt=null,Ie=null,q=class{constructor(){this.customStyles=[],this.enqueued=!1,ds(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){this.enqueued||!Ie||(this.enqueued=!0,ds(Ie))}addCustomStyle(t){t[hs]||(t[hs]=!0,this.customStyles.push(t),this.enqueueDocumentValidation())}getStyleForCustomStyle(t){if(t[Ze])return t[Ze];let i;return t.getStyle?i=t.getStyle():i=t,i}processStyles(){const t=this.customStyles;for(let i=0;i<t.length;i++){const n=t[i];if(n[Ze])continue;const s=this.getStyleForCustomStyle(n);if(s){const r=s.__appliedElement||s;bt&&bt(r),n[Ze]=r}}return t}};q.prototype.addCustomStyle=q.prototype.addCustomStyle;q.prototype.getStyleForCustomStyle=q.prototype.getStyleForCustomStyle;q.prototype.processStyles=q.prototype.processStyles;Object.defineProperties(q.prototype,{transformCallback:{get(){return bt},set(e){bt=e}},validateCallback:{get(){return Ie},set(e){let t=!1;Ie||(t=!0),Ie=e,t&&this.enqueueDocumentValidation()}}});const Ne=new T;class Yo{constructor(){this.customStyleInterface=null,Ne.invalidCallback=jo}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=t=>{Ne.transformCustomStyle(t)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(t,i){if(this.ensure(),ls(t))return;li[i]=t;let n=Ne.transformTemplate(t,i);t._styleAst=n}flushCustomStyles(){if(this.ensure(),!this.customStyleInterface)return;let t=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let i=0;i<t.length;i++){let n=t[i],s=this.customStyleInterface.getStyleForCustomStyle(n);s&&Ne.transformCustomStyle(s)}this.customStyleInterface.enqueued=!1}}styleSubtree(t,i){if(this.ensure(),i&&oi(t,i),t.shadowRoot){this.styleElement(t);let n=t.shadowRoot.children||t.shadowRoot.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}else{let n=t.children||t.childNodes;for(let s=0;s<n.length;s++)this.styleSubtree(n[s])}}styleElement(t){this.ensure();let{is:i}=Ro(t),n=li[i];if(!(n&&ls(n))&&n&&!Nn(n)){Vo(n)||(this.prepareTemplate(n,i),qo(n));let s=t.shadowRoot;if(s){let r=s.querySelector("style");r&&(r.__cssRules=n._styleAst,r.textContent=ri(n._styleAst))}}}styleDocument(t){this.ensure(),this.styleSubtree(document.body,t)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new Yo;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(i,n,s){e.flushCustomStyles(),e.prepareTemplate(i,n)},prepareTemplateStyles(i,n,s){window.ShadyCSS.prepareTemplate(i,n,s)},prepareTemplateDom(i,n){},styleSubtree(i,n){e.flushCustomStyles(),e.styleSubtree(i,n)},styleElement(i){e.flushCustomStyles(),e.styleElement(i)},styleDocument(i){e.flushCustomStyles(),e.styleDocument(i)},getComputedStyleValue(i,n){return On(i,n)},flushCustomStyles(){e.flushCustomStyles()},nativeCss:Ei,nativeShadow:Rt,cssBuild:$e,disableRuntime:wn},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=Ne;window.JSCompiler_renameProperty=function(e,t){return e};let Wo=/(url\()([^)]*)(\))/g,Jo=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/,et,O;function Le(e,t){if(e&&Jo.test(e)||e==="//")return e;if(et===void 0){et=!1;try{const i=new URL("b","http://a");i.pathname="c%20d",et=i.href==="http://a/c%20d"}catch{}}if(t||(t=document.baseURI||window.location.href),et)try{return new URL(e,t).href}catch{return e}return O||(O=document.implementation.createHTMLDocument("temp"),O.base=O.createElement("base"),O.head.appendChild(O.base),O.anchor=O.createElement("a"),O.body.appendChild(O.anchor)),O.base.href=t,O.anchor.href=e,O.anchor.href||e}function Ai(e,t){return e.replace(Wo,function(i,n,s,r){return n+"'"+Le(s.replace(/["']/g,""),t)+"'"+r})}function Ti(e){return e.substring(0,e.lastIndexOf("/")+1)}const kn=!window.ShadyDOM||!window.ShadyDOM.inUse;!window.ShadyCSS||window.ShadyCSS.nativeCss;const Go=kn&&"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype&&(()=>{try{const e=new CSSStyleSheet;e.replaceSync("");const t=document.createElement("div");return t.attachShadow({mode:"open"}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})();let Xo=window.Polymer&&window.Polymer.rootPath||Ti(document.baseURI||window.location.href),wt=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,Qo=window.Polymer&&window.Polymer.setPassiveTouchGestures||!1,me=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,Zo=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,Ue=window.Polymer&&window.Polymer.legacyOptimizations||!1,Mn=window.Polymer&&window.Polymer.legacyWarnings||!1,ea=window.Polymer&&window.Polymer.syncInitialRender||!1,ci=window.Polymer&&window.Polymer.legacyUndefined||!1,ta=window.Polymer&&window.Polymer.orderedComputed||!1,ps=window.Polymer&&window.Polymer.removeNestedTemplates||!1,Rn=window.Polymer&&window.Polymer.fastDomIf||!1,ui=window.Polymer&&window.Polymer.suppressTemplateNotifications||!1,tt=window.Polymer&&window.Polymer.legacyNoObservedAttributes||!1,ia=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1;let sa=0;const k=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let i=sa++;function n(s){let r=s.__mixinSet;if(r&&r[i])return s;let o=t,a=o.get(s);if(!a){a=e(s),o.set(s,a);let l=Object.create(a.__mixinSet||r||null);l[i]=!0,a.__mixinSet=l}return a}return n};let Oi={},Dn={};function fs(e,t){Oi[e]=Dn[e.toLowerCase()]=t}function _s(e){return Oi[e]||Dn[e.toLowerCase()]}function na(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}class je extends HTMLElement{static get observedAttributes(){return["id"]}static import(t,i){if(t){let n=_s(t);return n&&i?n.querySelector(i):n}return null}attributeChangedCallback(t,i,n,s){i!==n&&this.register()}get assetpath(){if(!this.__assetpath){const t=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,i=Le(this.getAttribute("assetpath")||"",t.baseURI);this.__assetpath=Ti(i)}return this.__assetpath}register(t){if(t=t||this.id,t){if(me&&_s(t)!==void 0)throw fs(t,null),new Error(`strictTemplatePolicy: dom-module ${t} re-registered`);this.id=t,fs(t,this),na(this)}}}je.prototype.modules=Oi;customElements.define("dom-module",je);const ra="link[rel=import][type~=css]",oa="include",ms="shady-unscoped";function Ni(e){return je.import(e)}function ys(e){let t=e.body?e.body:e;const i=Ai(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=i,n}function aa(e){const t=e.trim().split(/\s+/),i=[];for(let n=0;n<t.length;n++)i.push(...la(t[n]));return i}function la(e){const t=Ni(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(t._styles===void 0){const i=[];i.push(...Mi(t));const n=t.querySelector("template");n&&i.push(...ki(n,t.assetpath)),t._styles=i}return t._styles}function ki(e,t){if(!e._styles){const i=[],n=e.content.querySelectorAll("style");for(let s=0;s<n.length;s++){let r=n[s],o=r.getAttribute(oa);o&&i.push(...aa(o).filter(function(a,l,c){return c.indexOf(a)===l})),t&&(r.textContent=Ai(r.textContent,t)),i.push(r)}e._styles=i}return e._styles}function ca(e){let t=Ni(e);return t?Mi(t):[]}function Mi(e){const t=[],i=e.querySelectorAll(ra);for(let n=0;n<i.length;n++){let s=i[n];if(s.import){const r=s.import,o=s.hasAttribute(ms);if(o&&!r._unscopedStyle){const a=ys(r);a.setAttribute(ms,""),r._unscopedStyle=a}else r._style||(r._style=ys(r));t.push(o?r._unscopedStyle:r._style)}}return t}function ua(e){let t=e.trim().split(/\s+/),i="";for(let n=0;n<t.length;n++)i+=da(t[n]);return i}function da(e){let t=Ni(e);if(t&&t._cssText===void 0){let i=pa(t),n=t.querySelector("template");n&&(i+=ha(n,t.assetpath)),t._cssText=i||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function ha(e,t){let i="";const n=ki(e,t);for(let s=0;s<n.length;s++){let r=n[s];r.parentNode&&r.parentNode.removeChild(r),i+=r.textContent}return i}function pa(e){let t="",i=Mi(e);for(let n=0;n<i.length;n++)t+=i[n].textContent;return t}const m=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e;function di(e){return e.indexOf(".")>=0}function U(e){let t=e.indexOf(".");return t===-1?e:e.slice(0,t)}function In(e,t){return e.indexOf(t+".")===0}function Ke(e,t){return t.indexOf(e+".")===0}function Ve(e,t,i){return t+i.slice(e.length)}function fa(e,t){return e===t||In(e,t)||Ke(e,t)}function ke(e){if(Array.isArray(e)){let t=[];for(let i=0;i<e.length;i++){let n=e[i].toString().split(".");for(let s=0;s<n.length;s++)t.push(n[s])}return t.join(".")}else return e}function Ln(e){return Array.isArray(e)?ke(e).split("."):e.toString().split(".")}function A(e,t,i){let n=e,s=Ln(t);for(let r=0;r<s.length;r++){if(!n)return;let o=s[r];n=n[o]}return i&&(i.path=s.join(".")),n}function gs(e,t,i){let n=e,s=Ln(t),r=s[s.length-1];if(s.length>1){for(let o=0;o<s.length-1;o++){let a=s[o];if(n=n[a],!n)return}n[r]=i}else n[t]=i;return s.join(".")}const vt={},_a=/-[a-z]/g,ma=/([A-Z])/g;function Bn(e){return vt[e]||(vt[e]=e.indexOf("-")<0?e:e.replace(_a,t=>t[1].toUpperCase()))}function Dt(e){return vt[e]||(vt[e]=e.replace(ma,"-$1").toLowerCase())}let ya=0,Fn=0,he=[],ga=0,hi=!1,zn=document.createTextNode("");new window.MutationObserver(ba).observe(zn,{characterData:!0});function ba(){hi=!1;const e=he.length;for(let t=0;t<e;t++){let i=he[t];if(i)try{i()}catch(n){setTimeout(()=>{throw n})}}he.splice(0,e),Fn+=e}const Be={after(e){return{run(t){return window.setTimeout(t,e)},cancel(t){window.clearTimeout(t)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}},K={run(e){return hi||(hi=!0,zn.textContent=ga++),he.push(e),ya++},cancel(e){const t=e-Fn;if(t>=0){if(!he[t])throw new Error("invalid async handle: "+e);he[t]=null}}};const wa=K,Hn=k(e=>{class t extends e{static createProperties(n){const s=this.prototype;for(let r in n)r in s||s._createPropertyAccessor(r)}static attributeNameForProperty(n){return n.toLowerCase()}static typeForProperty(n){}_createPropertyAccessor(n,s){this._addPropertyToAttributeMap(n),this.hasOwnProperty(JSCompiler_renameProperty("__dataHasAccessor",this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[n]||(this.__dataHasAccessor[n]=!0,this._definePropertyAccessor(n,s))}_addPropertyToAttributeMap(n){this.hasOwnProperty(JSCompiler_renameProperty("__dataAttributes",this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let s=this.__dataAttributes[n];return s||(s=this.constructor.attributeNameForProperty(n),this.__dataAttributes[s]=n),s}_definePropertyAccessor(n,s){Object.defineProperty(this,n,{get(){return this.__data[n]},set:s?function(){}:function(r){this._setPendingProperty(n,r,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let n in this.__dataHasAccessor)this.hasOwnProperty(n)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[n]=this[n],delete this[n])}_initializeInstanceProperties(n){Object.assign(this,n)}_setProperty(n,s){this._setPendingProperty(n,s)&&this._invalidateProperties()}_getProperty(n){return this.__data[n]}_setPendingProperty(n,s,r){let o=this.__data[n],a=this._shouldPropertyChange(n,s,o);return a&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(n in this.__dataOld)&&(this.__dataOld[n]=o),this.__data[n]=s,this.__dataPending[n]=s),a}_isPropertyPending(n){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(n))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,wa.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){this.__dataCounter++;const n=this.__data,s=this.__dataPending,r=this.__dataOld;this._shouldPropertiesChange(n,s,r)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(n,s,r)),this.__dataCounter--}_shouldPropertiesChange(n,s,r){return!!s}_propertiesChanged(n,s,r){}_shouldPropertyChange(n,s,r){return r!==s&&(r===r||s===s)}attributeChangedCallback(n,s,r,o){s!==r&&this._attributeToProperty(n,r),super.attributeChangedCallback&&super.attributeChangedCallback(n,s,r,o)}_attributeToProperty(n,s,r){if(!this.__serializing){const o=this.__dataAttributes,a=o&&o[n]||n;this[a]=this._deserializeValue(s,r||this.constructor.typeForProperty(a))}}_propertyToAttribute(n,s,r){this.__serializing=!0,r=arguments.length<3?this[n]:r,this._valueToNodeAttribute(this,r,s||this.constructor.attributeNameForProperty(n)),this.__serializing=!1}_valueToNodeAttribute(n,s,r){const o=this._serializeValue(s);(r==="class"||r==="name"||r==="slot")&&(n=m(n)),o===void 0?n.removeAttribute(r):n.setAttribute(r,o===""&&window.trustedTypes?window.trustedTypes.emptyScript:o)}_serializeValue(n){return typeof n==="boolean"?n?"":void 0:n?.toString()}_deserializeValue(n,s){switch(s){case Boolean:return n!==null;case Number:return Number(n);default:return n}}}return t});const $n={};let it=HTMLElement.prototype;for(;it;){let e=Object.getOwnPropertyNames(it);for(let t=0;t<e.length;t++)$n[e[t]]=!0;it=Object.getPrototypeOf(it)}const va=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1;function Ca(e,t){if(!$n[t]){let i=e[t];i!==void 0&&(e.__data?e._setPendingProperty(t,i):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=i))}}const Un=k(e=>{const t=Hn(e);class i extends t{static createPropertiesForAttributes(){let s=this.observedAttributes;for(let r=0;r<s.length;r++)this.prototype._createPropertyAccessor(Bn(s[r]))}static attributeNameForProperty(s){return Dt(s)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(s){for(let r in s)this._setProperty(r,s[r])}_ensureAttribute(s,r){const o=this;o.hasAttribute(s)||this._valueToNodeAttribute(o,r,s)}_serializeValue(s){switch(typeof s){case"object":if(s instanceof Date)return s.toString();if(s){if(va(s))return s;try{return JSON.stringify(s)}catch{return""}}default:return super._serializeValue(s)}}_deserializeValue(s,r){let o;switch(r){case Object:try{o=JSON.parse(s)}catch{o=s}break;case Array:try{o=JSON.parse(s)}catch{o=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${s}`)}break;case Date:o=isNaN(s)?String(s):Number(s),o=new Date(o);break;default:o=super._deserializeValue(s,r);break}return o}_definePropertyAccessor(s,r){Ca(this,s),super._definePropertyAccessor(s,r)}_hasAccessor(s){return this.__dataHasAccessor&&this.__dataHasAccessor[s]}_isPropertyPending(s){return!!(this.__dataPending&&s in this.__dataPending)}}return i});const xa={"dom-if":!0,"dom-repeat":!0};let bs=!1,ws=!1;function Sa(){if(!bs){bs=!0;const e=document.createElement("textarea");e.placeholder="a",ws=e.placeholder===e.textContent}return ws}function Pa(e){Sa()&&e.localName==="textarea"&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}const Ea=(()=>{const e=window.trustedTypes&&window.trustedTypes.createPolicy("polymer-template-event-attribute-policy",{createScript:t=>t});return(t,i,n)=>{const s=i.getAttribute(n);if(e&&n.startsWith("on-")){t.setAttribute(n,e.createScript(s,n));return}t.setAttribute(n,s)}})();function Aa(e){let t=e.getAttribute("is");if(t&&xa[t]){let i=e;for(i.removeAttribute("is"),e=i.ownerDocument.createElement(t),i.parentNode.replaceChild(e,i),e.appendChild(i);i.attributes.length;){const{name:n}=i.attributes[0];Ea(e,i,n),i.removeAttribute(n)}}return e}function jn(e,t){let i=t.parentInfo&&jn(e,t.parentInfo);if(i){for(let n=i.firstChild,s=0;n;n=n.nextSibling)if(t.parentIndex===s++)return n}else return e}function Ta(e,t,i,n){n.id&&(t[n.id]=i)}function Oa(e,t,i){if(i.events&&i.events.length)for(let n=0,s=i.events,r;n<s.length&&(r=s[n]);n++)e._addMethodEventListenerToNode(t,r.name,r.value,e)}function Na(e,t,i,n){i.templateInfo&&(t._templateInfo=i.templateInfo,t._parentTemplateInfo=n)}function ka(e,t,i){return e=e._methodHost||e,function(s){e[i]?e[i](s,s.detail):console.warn("listener method `"+i+"` not defined")}}const Ma=k(e=>{class t extends e{static _parseTemplate(n,s){if(!n._templateInfo){let r=n._templateInfo={};r.nodeInfoList=[],r.nestedTemplate=!!s,r.stripWhiteSpace=s&&s.stripWhiteSpace||n.hasAttribute&&n.hasAttribute("strip-whitespace"),this._parseTemplateContent(n,r,{parent:null})}return n._templateInfo}static _parseTemplateContent(n,s,r){return this._parseTemplateNode(n.content,s,r)}static _parseTemplateNode(n,s,r){let o=!1,a=n;return a.localName=="template"&&!a.hasAttribute("preserve-content")?o=this._parseTemplateNestedTemplate(a,s,r)||o:a.localName==="slot"&&(s.hasInsertionPoint=!0),Pa(a),a.firstChild&&this._parseTemplateChildNodes(a,s,r),a.hasAttributes&&a.hasAttributes()&&(o=this._parseTemplateNodeAttributes(a,s,r)||o),o||r.noted}static _parseTemplateChildNodes(n,s,r){if(!(n.localName==="script"||n.localName==="style"))for(let o=n.firstChild,a=0,l;o;o=l){if(o.localName=="template"&&(o=Aa(o)),l=o.nextSibling,o.nodeType===Node.TEXT_NODE){let u=l;for(;u&&u.nodeType===Node.TEXT_NODE;)o.textContent+=u.textContent,l=u.nextSibling,n.removeChild(u),u=l;if(s.stripWhiteSpace&&!o.textContent.trim()){n.removeChild(o);continue}}let c={parentIndex:a,parentInfo:r};this._parseTemplateNode(o,s,c)&&(c.infoIndex=s.nodeInfoList.push(c)-1),o.parentNode&&a++}}static _parseTemplateNestedTemplate(n,s,r){let o=n,a=this._parseTemplate(o,s);return(a.content=o.content.ownerDocument.createDocumentFragment()).appendChild(o.content),r.templateInfo=a,!0}static _parseTemplateNodeAttributes(n,s,r){let o=!1,a=Array.from(n.attributes);for(let l=a.length-1,c;c=a[l];l--)o=this._parseTemplateNodeAttribute(n,s,r,c.name,c.value)||o;return o}static _parseTemplateNodeAttribute(n,s,r,o,a){return o.slice(0,3)==="on-"?(n.removeAttribute(o),r.events=r.events||[],r.events.push({name:o.slice(3),value:a}),!0):o==="id"?(r.id=a,!0):!1}static _contentForTemplate(n){let s=n._templateInfo;return s&&s.content||n.content}_stampTemplate(n,s){n&&!n.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(n),s=s||this.constructor._parseTemplate(n);let r=s.nodeInfoList,o=s.content||n.content,a=document.importNode(o,!0);a.__noInsertionPoint=!s.hasInsertionPoint;let l=a.nodeList=new Array(r.length);a.$={};for(let c=0,u=r.length,d;c<u&&(d=r[c]);c++){let h=l[c]=jn(a,d);Ta(this,a.$,h,d),Na(this,h,d,s),Oa(this,h,d)}return a=a,a}_addMethodEventListenerToNode(n,s,r,o){o=o||n;let a=ka(o,s,r);return this._addEventListenerToNode(n,s,a),a}_addEventListenerToNode(n,s,r){n.addEventListener(s,r)}_removeEventListenerFromNode(n,s,r){n.removeEventListener(s,r)}}return t});let qe=0;const Ye=[],v={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},Kn="__computeInfo",Ra=/[A-Z]/;function Jt(e,t,i){let n=e[t];if(!n)n=e[t]={};else if(!e.hasOwnProperty(t)&&(n=e[t]=Object.create(e[t]),i))for(let s in n){let r=n[s],o=n[s]=Array(r.length);for(let a=0;a<r.length;a++)o[a]=r[a]}return n}function Me(e,t,i,n,s,r){if(t){let o=!1;const a=qe++;for(let l in i){let c=s?U(l):l,u=t[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==a)&&(!s||Ri(l,p.trigger))&&(p.info&&(p.info.lastRun=a),p.fn(e,l,i,n,p.info,s,r),o=!0)}return o}return!1}function Da(e,t,i,n,s,r,o,a){let l=!1,c=o?U(n):n,u=t[c];if(u)for(let d=0,h=u.length,p;d<h&&(p=u[d]);d++)(!p.info||p.info.lastRun!==i)&&(!o||Ri(n,p.trigger))&&(p.info&&(p.info.lastRun=i),p.fn(e,n,s,r,p.info,o,a),l=!0);return l}function Ri(e,t){if(t){let i=t.name;return i==e||!!(t.structured&&In(i,e))||!!(t.wildcard&&Ke(i,e))}else return!0}function vs(e,t,i,n,s){let r=typeof s.method=="string"?e[s.method]:s.method,o=s.property;r?r.call(e,e.__data[o],n[o]):s.dynamicFn||console.warn("observer method `"+s.method+"` not defined")}function Ia(e,t,i,n,s){let r=e[v.NOTIFY],o,a=qe++;for(let c in t)t[c]&&(r&&Da(e,r,a,c,i,n,s)||s&&La(e,c,i))&&(o=!0);let l;o&&(l=e.__dataHost)&&l._invalidateProperties&&l._invalidateProperties()}function La(e,t,i){let n=U(t);if(n!==t){let s=Dt(n)+"-changed";return Vn(e,s,i[t],t),!0}return!1}function Vn(e,t,i,n){let s={value:i,queueProperty:!0};n&&(s.path=n),m(e).dispatchEvent(new CustomEvent(t,{detail:s}))}function Ba(e,t,i,n,s,r){let a=(r?U(t):t)!=t?t:null,l=a?A(e,a):e.__data[t];a&&l===void 0&&(l=i[t]),Vn(e,s.eventName,l,a)}function Fa(e,t,i,n,s){let r,o=e.detail,a=o&&o.path;a?(n=Ve(i,n,a),r=o&&o.value):r=e.currentTarget[i],r=s?!r:r,(!t[v.READ_ONLY]||!t[v.READ_ONLY][n])&&t._setPendingPropertyOrPath(n,r,!0,!!a)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function za(e,t,i,n,s){let r=e.__data[t];wt&&(r=wt(r,s.attrName,"attribute",e)),e._propertyToAttribute(t,s.attrName,r)}function Ha(e,t,i,n){let s=e[v.COMPUTE];if(s)if(ta){qe++;const r=Ua(e),o=[];for(let l in t)Cs(l,s,o,r,n);let a;for(;a=o.shift();)qn(e,"",t,i,a)&&Cs(a.methodInfo,s,o,r,n);Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let r=t;for(;Me(e,s,r,i,n);)Object.assign(i,e.__dataOld),Object.assign(t,e.__dataPending),r=e.__dataPending,e.__dataPending=null}}const $a=(e,t,i)=>{let n=0,s=t.length-1,r=-1;for(;n<=s;){const o=n+s>>1,a=i.get(t[o].methodInfo)-i.get(e.methodInfo);if(a<0)n=o+1;else if(a>0)s=o-1;else{r=o;break}}r<0&&(r=s+1),t.splice(r,0,e)},Cs=(e,t,i,n,s)=>{const r=s?U(e):e,o=t[r];if(o)for(let a=0;a<o.length;a++){const l=o[a];l.info.lastRun!==qe&&(!s||Ri(e,l.trigger))&&(l.info.lastRun=qe,$a(l.info,i,n))}};function Ua(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;const i=e[v.COMPUTE];let{counts:n,ready:s,total:r}=ja(e),o;for(;o=s.shift();){t.set(o,t.size);const a=i[o];a&&a.forEach(l=>{const c=l.info.methodInfo;--r,--n[c]===0&&s.push(c)})}r!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function ja(e){const t=e[Kn],i={},n=e[v.COMPUTE],s=[];let r=0;for(let o in t){const a=t[o];r+=i[o]=a.args.filter(l=>!l.literal).length+(a.dynamicFn?1:0)}for(let o in n)t[o]||s.push(o);return{counts:i,ready:s,total:r}}function qn(e,t,i,n,s){let r=pi(e,t,i,n,s);if(r===Ye)return!1;let o=s.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,r,!0):(e[o]=r,!1)}function Ka(e,t,i){let n=e.__dataLinkedPaths;if(n){let s;for(let r in n){let o=n[r];Ke(r,t)?(s=Ve(r,o,t),e._setPendingPropertyOrPath(s,i,!0,!0)):Ke(o,t)&&(s=Ve(o,r,t),e._setPendingPropertyOrPath(s,i,!0,!0))}}}function Gt(e,t,i,n,s,r,o){i.bindings=i.bindings||[];let a={kind:n,target:s,parts:r,literal:o,isCompound:r.length!==1};if(i.bindings.push(a),Ja(a)){let{event:c,negate:u}=a.parts[0];a.listenerEvent=c||Dt(s)+"-changed",a.listenerNegate=u}let l=t.nodeInfoList.length;for(let c=0;c<a.parts.length;c++){let u=a.parts[c];u.compoundIndex=c,Va(e,t,a,u,l)}}function Va(e,t,i,n,s){if(!n.literal)if(i.kind==="attribute"&&i.target[0]==="-")console.warn("Cannot set attribute "+i.target+' because "-" is not a valid attribute starting character');else{let r=n.dependencies,o={index:s,binding:i,part:n,evaluator:e};for(let a=0;a<r.length;a++){let l=r[a];typeof l=="string"&&(l=Wn(l),l.wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:qa,info:o,trigger:l})}}}function qa(e,t,i,n,s,r,o){let a=o[s.index],l=s.binding,c=s.part;if(r&&c.source&&t.length>c.source.length&&l.kind=="property"&&!l.isCompound&&a.__isPropertyEffectsClient&&a.__dataHasAccessor&&a.__dataHasAccessor[l.target]){let u=i[t];t=Ve(c.source,l.target,t),a._setPendingPropertyOrPath(t,u,!1,!0)&&e._enqueueClient(a)}else{let u=s.evaluator._evaluateBinding(e,c,t,i,n,r);u!==Ye&&Ya(e,a,l,c,u)}}function Ya(e,t,i,n,s){if(s=Wa(t,s,i,n),wt&&(s=wt(s,i.target,i.kind,t)),i.kind=="attribute")e._valueToNodeAttribute(t,s,i.target);else{let r=i.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[v.READ_ONLY]||!t[v.READ_ONLY][r])&&t._setPendingProperty(r,s)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,s)}}function Wa(e,t,i,n){if(i.isCompound){let s=e.__dataCompoundStorage[i.target];s[n.compoundIndex]=t,t=s.join("")}return i.kind!=="attribute"&&(i.target==="textContent"||i.target==="value"&&(e.localName==="input"||e.localName==="textarea"))&&(t=t??""),t}function Ja(e){return!!e.target&&e.kind!="attribute"&&e.kind!="text"&&!e.isCompound&&e.parts[0].mode==="{"}function Ga(e,t){let{nodeList:i,nodeInfoList:n}=t;if(n.length)for(let s=0;s<n.length;s++){let r=n[s],o=i[s],a=r.bindings;if(a)for(let l=0;l<a.length;l++){let c=a[l];Xa(o,c),Qa(o,e,c)}o.__dataHost=e}}function Xa(e,t){if(t.isCompound){let i=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,s=new Array(n.length);for(let o=0;o<n.length;o++)s[o]=n[o].literal;let r=t.target;i[r]=s,t.literal&&t.kind=="property"&&(r==="className"&&(e=m(e)),e[r]=t.literal)}}function Qa(e,t,i){if(i.listenerEvent){let n=i.parts[0];e.addEventListener(i.listenerEvent,function(s){Fa(s,t,i.target,n.source,n.negate)})}}function xs(e,t,i,n,s,r){r=t.static||r&&(typeof r!="object"||r[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:s,dynamicFn:r};for(let a=0,l;a<t.args.length&&(l=t.args[a]);a++)l.literal||e._addPropertyEffect(l.rootProperty,i,{fn:n,info:o,trigger:l});return r&&e._addPropertyEffect(t.methodName,i,{fn:n,info:o}),o}function pi(e,t,i,n,s){let r=e._methodHost||e,o=r[s.methodName];if(o){let a=e._marshalArgs(s.args,t,i);return a===Ye?Ye:o.apply(r,a)}else s.dynamicFn||console.warn("method `"+s.methodName+"` not defined")}const Za=[],Yn="(?:[a-zA-Z_$][\\w.:$\\-*]*)",el="(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)",tl="(?:'(?:[^'\\\\]|\\\\.)*')",il='(?:"(?:[^"\\\\]|\\\\.)*")',sl="(?:"+tl+"|"+il+")",Ss="(?:("+Yn+"|"+el+"|"+sl+")\\s*)",nl="(?:"+Ss+"(?:,\\s*"+Ss+")*)",rl="(?:\\(\\s*(?:"+nl+"?)\\)\\s*)",ol="("+Yn+"\\s*"+rl+"?)",al="(\\[\\[|{{)\\s*",ll="(?:]]|}})",cl="(?:(!)\\s*)?",ul=al+cl+ol+ll,Ps=new RegExp(ul,"g");function Es(e){let t="";for(let i=0;i<e.length;i++){let n=e[i].literal;t+=n||""}return t}function Xt(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let n={methodName:t[1],static:!0,args:Za};if(t[2].trim()){let s=t[2].replace(/\\,/g,"&comma;").split(",");return dl(s,n)}else return n}return null}function dl(e,t){return t.args=e.map(function(i){let n=Wn(i);return n.literal||(t.static=!1),n},this),t}function Wn(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),i={name:t,value:"",literal:!1},n=t[0];switch(n==="-"&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':i.value=t.slice(1,-1),i.literal=!0;break;case"#":i.value=Number(t),i.literal=!0;break}return i.literal||(i.rootProperty=U(t),i.structured=di(t),i.structured&&(i.wildcard=t.slice(-2)==".*",i.wildcard&&(i.name=t.slice(0,-2)))),i}function As(e,t,i){let n=A(e,i);return n===void 0&&(n=t[i]),n}function Jn(e,t,i,n){const s={indexSplices:n};ci&&!e._overrideLegacyUndefined&&(t.splices=s),e.notifyPath(i+".splices",s),e.notifyPath(i+".length",t.length),ci&&!e._overrideLegacyUndefined&&(s.indexSplices=[])}function Ee(e,t,i,n,s,r){Jn(e,t,i,[{index:n,addedCount:s,removed:r,object:t,type:"splice"}])}function hl(e){return e[0].toUpperCase()+e.substring(1)}const It=k(e=>{const t=Ma(Un(e));class i extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return v}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(Ae.length){let s=Ae[Ae.length-1];s._enqueueClient(this),this.__dataHost=s}}_initializeProtoProperties(s){this.__data=Object.create(s),this.__dataPending=Object.create(s),this.__dataOld={}}_initializeInstanceProperties(s){let r=this[v.READ_ONLY];for(let o in s)(!r||!r[o])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[o]=this.__dataPending[o]=s[o])}_addPropertyEffect(s,r,o){this._createPropertyAccessor(s,r==v.READ_ONLY);let a=Jt(this,r,!0)[s];a||(a=this[r][s]=[]),a.push(o)}_removePropertyEffect(s,r,o){let a=Jt(this,r,!0)[s],l=a.indexOf(o);l>=0&&a.splice(l,1)}_hasPropertyEffect(s,r){let o=this[r];return!!(o&&o[s])}_hasReadOnlyEffect(s){return this._hasPropertyEffect(s,v.READ_ONLY)}_hasNotifyEffect(s){return this._hasPropertyEffect(s,v.NOTIFY)}_hasReflectEffect(s){return this._hasPropertyEffect(s,v.REFLECT)}_hasComputedEffect(s){return this._hasPropertyEffect(s,v.COMPUTE)}_setPendingPropertyOrPath(s,r,o,a){if(a||U(Array.isArray(s)?s[0]:s)!==s){if(!a){let l=A(this,s);if(s=gs(this,s,r),!s||!super._shouldPropertyChange(s,r,l))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(s,r,o))return Ka(this,s,r),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[s])return this._setPendingProperty(s,r,o);this[s]=r}return!1}_setUnmanagedPropertyToNode(s,r,o){(o!==s[r]||typeof o=="object")&&(r==="className"&&(s=m(s)),s[r]=o)}_setPendingProperty(s,r,o){let a=this.__dataHasPaths&&di(s),l=a?this.__dataTemp:this.__data;return this._shouldPropertyChange(s,r,l[s])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),s in this.__dataOld||(this.__dataOld[s]=this.__data[s]),a?this.__dataTemp[s]=r:this.__data[s]=r,this.__dataPending[s]=r,(a||this[v.NOTIFY]&&this[v.NOTIFY][s])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[s]=o),!0):!1}_setProperty(s,r){this._setPendingProperty(s,r,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(s){this.__dataPendingClients=this.__dataPendingClients||[],s!==this&&this.__dataPendingClients.push(s)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let s=this.__dataPendingClients;if(s){this.__dataPendingClients=null;for(let r=0;r<s.length;r++){let o=s[r];o.__dataEnabled?o.__dataPending&&o._flushProperties():o._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(s,r){for(let o in s)(r||!this[v.READ_ONLY]||!this[v.READ_ONLY][o])&&this._setPendingPropertyOrPath(o,s[o],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(s,r,o){let a=this.__dataHasPaths;this.__dataHasPaths=!1;let l;Ha(this,r,o,a),l=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(r,o,a),this._flushClients(),Me(this,this[v.REFLECT],r,o,a),Me(this,this[v.OBSERVE],r,o,a),l&&Ia(this,l,r,o,a),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(s,r,o){this[v.PROPAGATE]&&Me(this,this[v.PROPAGATE],s,r,o),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,s,r,o)}_runEffectsForTemplate(s,r,o,a){const l=(c,u)=>{Me(this,s.propertyEffects,c,o,u,s.nodeList);for(let d=s.firstChild;d;d=d.nextSibling)this._runEffectsForTemplate(d,c,o,u)};s.runEffects?s.runEffects(l,r,a):l(r,a)}linkPaths(s,r){s=ke(s),r=ke(r),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[s]=r}unlinkPaths(s){s=ke(s),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[s]}notifySplices(s,r){let o={path:""},a=A(this,s,o);Jn(this,a,o.path,r)}get(s,r){return A(r||this,s)}set(s,r,o){o?gs(o,s,r):(!this[v.READ_ONLY]||!this[v.READ_ONLY][s])&&this._setPendingPropertyOrPath(s,r,!0)&&this._invalidateProperties()}push(s,...r){let o={path:""},a=A(this,s,o),l=a.length,c=a.push(...r);return r.length&&Ee(this,a,o.path,l,r.length,[]),c}pop(s){let r={path:""},o=A(this,s,r),a=!!o.length,l=o.pop();return a&&Ee(this,o,r.path,o.length,0,[l]),l}splice(s,r,o,...a){let l={path:""},c=A(this,s,l);r<0?r=c.length-Math.floor(-r):r&&(r=Math.floor(r));let u;return arguments.length===2?u=c.splice(r):u=c.splice(r,o,...a),(a.length||u.length)&&Ee(this,c,l.path,r,a.length,u),u}shift(s){let r={path:""},o=A(this,s,r),a=!!o.length,l=o.shift();return a&&Ee(this,o,r.path,0,0,[l]),l}unshift(s,...r){let o={path:""},a=A(this,s,o),l=a.unshift(...r);return r.length&&Ee(this,a,o.path,0,r.length,[]),l}notifyPath(s,r){let o;if(arguments.length==1){let a={path:""};r=A(this,s,a),o=a.path}else Array.isArray(s)?o=ke(s):o=s;this._setPendingPropertyOrPath(o,r,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(s,r){this._addPropertyEffect(s,v.READ_ONLY),r&&(this["_set"+hl(s)]=function(o){this._setProperty(s,o)})}_createPropertyObserver(s,r,o){let a={property:s,method:r,dynamicFn:!!o};this._addPropertyEffect(s,v.OBSERVE,{fn:vs,info:a,trigger:{name:s}}),o&&this._addPropertyEffect(r,v.OBSERVE,{fn:vs,info:a,trigger:{name:r}})}_createMethodObserver(s,r){let o=Xt(s);if(!o)throw new Error("Malformed observer expression '"+s+"'");xs(this,o,v.OBSERVE,pi,null,r)}_createNotifyingProperty(s){this._addPropertyEffect(s,v.NOTIFY,{fn:Ba,info:{eventName:Dt(s)+"-changed",property:s}})}_createReflectedProperty(s){let r=this.constructor.attributeNameForProperty(s);r[0]==="-"?console.warn("Property "+s+" cannot be reflected to attribute "+r+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(s,v.REFLECT,{fn:za,info:{attrName:r}})}_createComputedProperty(s,r,o){let a=Xt(r);if(!a)throw new Error("Malformed computed expression '"+r+"'");const l=xs(this,a,v.COMPUTE,qn,s,o);Jt(this,Kn)[s]=l}_marshalArgs(s,r,o){const a=this.__data,l=[];for(let c=0,u=s.length;c<u;c++){let{name:d,structured:h,wildcard:p,value:f,literal:g}=s[c];if(!g)if(p){const y=Ke(d,r),_=As(a,o,y?r:d);f={path:y?r:d,value:_,base:y?A(a,d):_}}else f=h?As(a,o,d):a[d];if(ci&&!this._overrideLegacyUndefined&&f===void 0&&s.length>1)return Ye;l[c]=f}return l}static addPropertyEffect(s,r,o){this.prototype._addPropertyEffect(s,r,o)}static createPropertyObserver(s,r,o){this.prototype._createPropertyObserver(s,r,o)}static createMethodObserver(s,r){this.prototype._createMethodObserver(s,r)}static createNotifyingProperty(s){this.prototype._createNotifyingProperty(s)}static createReadOnlyProperty(s,r){this.prototype._createReadOnlyProperty(s,r)}static createReflectedProperty(s){this.prototype._createReflectedProperty(s)}static createComputedProperty(s,r,o){this.prototype._createComputedProperty(s,r,o)}static bindTemplate(s){return this.prototype._bindTemplate(s)}_bindTemplate(s,r){let o=this.constructor._parseTemplate(s),a=this.__preBoundTemplateInfo==o;if(!a)for(let l in o.propertyEffects)this._createPropertyAccessor(l);if(r)if(o=Object.create(o),o.wasPreBound=a,!this.__templateInfo)this.__templateInfo=o;else{const l=s._parentTemplateInfo||this.__templateInfo,c=l.lastChild;o.parent=l,l.lastChild=o,o.previousSibling=c,c?c.nextSibling=o:l.firstChild=o}else this.__preBoundTemplateInfo=o;return o}static _addTemplatePropertyEffect(s,r,o){let a=s.hostProps=s.hostProps||{};a[r]=!0;let l=s.propertyEffects=s.propertyEffects||{};(l[r]=l[r]||[]).push(o)}_stampTemplate(s,r){r=r||this._bindTemplate(s,!0),Ae.push(this);let o=super._stampTemplate(s,r);if(Ae.pop(),r.nodeList=o.nodeList,!r.wasPreBound){let a=r.childNodes=[];for(let l=o.firstChild;l;l=l.nextSibling)a.push(l)}return o.templateInfo=r,Ga(this,r),this.__dataClientsReady&&(this._runEffectsForTemplate(r,this.__data,null,!1),this._flushClients()),o}_removeBoundDom(s){const r=s.templateInfo,{previousSibling:o,nextSibling:a,parent:l}=r;o?o.nextSibling=a:l&&(l.firstChild=a),a?a.previousSibling=o:l&&(l.lastChild=o),r.nextSibling=r.previousSibling=null;let c=r.childNodes;for(let u=0;u<c.length;u++){let d=c[u];m(m(d).parentNode).removeChild(d)}}static _parseTemplateNode(s,r,o){let a=t._parseTemplateNode.call(this,s,r,o);if(s.nodeType===Node.TEXT_NODE){let l=this._parseBindings(s.textContent,r);l&&(s.textContent=Es(l)||" ",Gt(this,r,o,"text","textContent",l),a=!0)}return a}static _parseTemplateNodeAttribute(s,r,o,a,l){let c=this._parseBindings(l,r);if(c){let u=a,d="property";Ra.test(a)?d="attribute":a[a.length-1]=="$"&&(a=a.slice(0,-1),d="attribute");let h=Es(c);return h&&d=="attribute"&&(a=="class"&&s.hasAttribute("class")&&(h+=" "+s.getAttribute(a)),s.setAttribute(a,h)),d=="attribute"&&u=="disable-upgrade$"&&s.setAttribute(a,""),s.localName==="input"&&u==="value"&&s.setAttribute(u,""),s.removeAttribute(u),d==="property"&&(a=Bn(a)),Gt(this,r,o,d,a,c,h),!0}else return t._parseTemplateNodeAttribute.call(this,s,r,o,a,l)}static _parseTemplateNestedTemplate(s,r,o){let a=t._parseTemplateNestedTemplate.call(this,s,r,o);const l=s.parentNode,c=o.templateInfo,u=l.localName==="dom-if",d=l.localName==="dom-repeat";ps&&(u||d)&&(l.removeChild(s),o=o.parentInfo,o.templateInfo=c,o.noted=!0,a=!1);let h=c.hostProps;if(Rn&&u)h&&(r.hostProps=Object.assign(r.hostProps||{},h),ps||(o.parentInfo.noted=!0));else{let p="{";for(let f in h){let g=[{mode:p,source:f,dependencies:[f],hostProp:!0}];Gt(this,r,o,"property","_host_"+f,g)}}return a}static _parseBindings(s,r){let o=[],a=0,l;for(;(l=Ps.exec(s))!==null;){l.index>a&&o.push({literal:s.slice(a,l.index)});let c=l[1][0],u=!!l[2],d=l[3].trim(),h=!1,p="",f=-1;c=="{"&&(f=d.indexOf("::"))>0&&(p=d.substring(f+2),d=d.substring(0,f),h=!0);let g=Xt(d),y=[];if(g){let{args:_,methodName:b}=g;for(let S=0;S<_.length;S++){let x=_[S];x.literal||y.push(x)}let w=r.dynamicFns;(w&&w[b]||g.static)&&(y.push(b),g.dynamicFn=!0)}else y.push(d);o.push({source:d,mode:c,negate:u,customEvent:h,signature:g,dependencies:y,event:p}),a=Ps.lastIndex}if(a&&a<s.length){let c=s.substring(a);c&&o.push({literal:c})}return o.length?o:null}static _evaluateBinding(s,r,o,a,l,c){let u;return r.signature?u=pi(s,o,a,l,r.signature):o!=r.source?u=A(s,r.source):c&&di(o)?u=A(s,o):u=s.__data[o],r.negate&&(u=!u),u}}return i}),Ae=[];function pl(e){const t={};for(let i in e){const n=e[i];t[i]=typeof n=="function"?{type:n}:n}return t}const fl=k(e=>{const t=Hn(e);function i(r){const o=Object.getPrototypeOf(r);return o.prototype instanceof s?o:null}function n(r){if(!r.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",r))){let o=null;if(r.hasOwnProperty(JSCompiler_renameProperty("properties",r))){const a=r.properties;a&&(o=pl(a))}r.__ownProperties=o}return r.__ownProperties}class s extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))){this.prototype;const o=this._properties;this.__observedAttributes=o?Object.keys(o).map(a=>this.prototype._addPropertyToAttributeMap(a)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const o=i(this);o&&o.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const o=n(this);o&&this.createProperties(o)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const o=i(this);this.__properties=Object.assign({},o&&o._properties,n(this))}return this.__properties}static typeForProperty(o){const a=this._properties[o];return a&&a.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return s});const _l="3.5.2",fi=window.ShadyCSS&&window.ShadyCSS.cssBuild,Lt=k(e=>{const t=fl(It(e));function i(l){if(!l.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",l))){l.__propertyDefaults=null;let c=l._properties;for(let u in c){let d=c[u];"value"in d&&(l.__propertyDefaults=l.__propertyDefaults||{},l.__propertyDefaults[u]=d)}}return l.__propertyDefaults}function n(l){return l.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",l))||(l.__ownObservers=l.hasOwnProperty(JSCompiler_renameProperty("observers",l))?l.observers:null),l.__ownObservers}function s(l,c,u,d){u.computed&&(u.readOnly=!0),u.computed&&(l._hasReadOnlyEffect(c)?console.warn(`Cannot redefine computed property '${c}'.`):l._createComputedProperty(c,u.computed,d)),u.readOnly&&!l._hasReadOnlyEffect(c)?l._createReadOnlyProperty(c,!u.computed):u.readOnly===!1&&l._hasReadOnlyEffect(c)&&console.warn(`Cannot make readOnly property '${c}' non-readOnly.`),u.reflectToAttribute&&!l._hasReflectEffect(c)?l._createReflectedProperty(c):u.reflectToAttribute===!1&&l._hasReflectEffect(c)&&console.warn(`Cannot make reflected property '${c}' non-reflected.`),u.notify&&!l._hasNotifyEffect(c)?l._createNotifyingProperty(c):u.notify===!1&&l._hasNotifyEffect(c)&&console.warn(`Cannot make notify property '${c}' non-notify.`),u.observer&&l._createPropertyObserver(c,u.observer,d[u.observer]),l._addPropertyToAttributeMap(c)}function r(l,c,u,d){if(!fi){const h=c.content.querySelectorAll("style"),p=ki(c),f=ca(u),g=c.content.firstElementChild;for(let _=0;_<f.length;_++){let b=f[_];b.textContent=l._processStyleText(b.textContent,d),c.content.insertBefore(b,g)}let y=0;for(let _=0;_<p.length;_++){let b=p[_],w=h[y];w!==b?(b=b.cloneNode(!0),w.parentNode.insertBefore(b,w)):y++,b.textContent=l._processStyleText(b.textContent,d)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(c,u),ia&&fi&&Go){const h=c.content.querySelectorAll("style");if(h){let p="";Array.from(h).forEach(f=>{p+=f.textContent,f.parentNode.removeChild(f)}),l._styleSheet=new CSSStyleSheet,l._styleSheet.replaceSync(p)}}}function o(l){let c=null;if(l&&(!me||Zo)&&(c=je.import(l,"template"),me&&!c))throw new Error(`strictTemplatePolicy: expecting dom-module or null template for ${l}`);return c}class a extends t{static get polymerElementVersion(){return _l}static _finalizeClass(){t._finalizeClass.call(this);const c=n(this);c&&this.createObservers(c,this._properties),this._prepareTemplate()}static _prepareTemplate(){let c=this.template;c&&(typeof c=="string"?(console.error("template getter must return HTMLTemplateElement"),c=null):Ue||(c=c.cloneNode(!0))),this.prototype._template=c}static createProperties(c){for(let u in c)s(this.prototype,u,c[u],c)}static createObservers(c,u){const d=this.prototype;for(let h=0;h<c.length;h++)d._createMethodObserver(c[h],u)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_template",this))){let c=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:void 0;typeof c=="function"&&(c=c()),this._template=c!==void 0?c:this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template}return this._template}static set template(c){this._template=c}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const c=this.importMeta;if(c)this._importPath=Ti(c.url);else{const u=je.import(this.is);this._importPath=u&&u.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Xo,this.importPath=this.constructor.importPath;let c=i(this.constructor);if(c)for(let u in c){let d=c[u];if(this._canApplyPropertyDefault(u)){let h=typeof d.value=="function"?d.value.call(this):d.value;this._hasAccessor(u)?this._setPendingProperty(u,h,!0):this[u]=h}}}_canApplyPropertyDefault(c){return!this.hasOwnProperty(c)}static _processStyleText(c,u){return Ai(c,u)}static _finalizeTemplate(c){const u=this.prototype._template;if(u&&!u.__polymerFinalized){u.__polymerFinalized=!0;const d=this.importPath,h=d?Le(d):"";r(this,u,c,h),this.prototype._bindTemplate(u)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(c){const u=m(this);if(u.attachShadow)return c?(u.shadowRoot||(u.attachShadow({mode:"open",shadyUpgradeFragment:c}),u.shadowRoot.appendChild(c),this.constructor._styleSheet&&(u.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ea&&window.ShadyDOM&&window.ShadyDOM.flushInitial(u.shadowRoot),u.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(c){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,c)}resolveUrl(c,u){return!u&&this.importPath&&(u=Le(this.importPath)),Le(c,u)}static _parseTemplateContent(c,u,d){return u.dynamicFns=u.dynamicFns||this._properties,t._parseTemplateContent.call(this,c,u,d)}static _addTemplatePropertyEffect(c,u,d){return Mn&&!(u in this._properties)&&!(d.info.part.signature&&d.info.part.signature.static)&&!d.info.part.hostProp&&!c.nestedTemplate&&console.warn(`Property '${u}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,c,u,d)}}return a});class re{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(t,i){this._asyncModule=t,this._callback=i,this._timer=this._asyncModule.run(()=>{this._timer=null,We.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),We.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return this._timer!=null}static debounce(t,i,n){return t instanceof re?t._cancelAsync():t=new re,t.setConfig(i,n),t}}let We=new Set;const Gn=function(e){We.add(e)},ml=function(){const e=!!We.size;return We.forEach(t=>{try{t.flush()}catch(i){setTimeout(()=>{throw i})}}),e};let Di=typeof document.head.style.touchAction=="string",Ct="__polymerGestures",ct="__polymerGesturesHandled",_i="__polymerGesturesTouchAction",Ts=25,Os=5,yl=2,gl=2500,Xn=["mousedown","mousemove","mouseup","click"],bl=[0,1,4,2],wl=(function(){try{return new MouseEvent("test",{buttons:1}).buttons===1}catch{return!1}})();function Ii(e){return Xn.indexOf(e)>-1}let Li=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){Li=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch{}})();function Qn(e){if(!(Ii(e)||e==="touchend")&&Di&&Li&&Qo)return{passive:!0}}let Zn=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/);const mi=[],vl={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},Cl={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function xl(e){return vl[e.localName]||!1}function Sl(e){let t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];try{let i=e.getRootNode();if(e.id){let n=i.querySelectorAll(`label[for = '${e.id}']`);for(let s=0;s<n.length;s++)t.push(n[s])}}catch{}}return t}let Ns=function(e){let t=e.sourceCapabilities;if(!(t&&!t.firesTouchEvents)&&(e[ct]={skip:!0},e.type==="click")){let i=!1,n=Bt(e);for(let s=0;s<n.length;s++){if(n[s].nodeType===Node.ELEMENT_NODE){if(n[s].localName==="label")mi.push(n[s]);else if(xl(n[s])){let r=Sl(n[s]);for(let o=0;o<r.length;o++)i=i||mi.indexOf(r[o])>-1}}if(n[s]===E.mouse.target)return}if(i)return;e.preventDefault(),e.stopPropagation()}};function ks(e){let t=Zn?["click"]:Xn;for(let i=0,n;i<t.length;i++)n=t[i],e?(mi.length=0,document.addEventListener(n,Ns,!0)):document.removeEventListener(n,Ns,!0)}function Pl(e){E.mouse.mouseIgnoreJob||ks(!0);let t=function(){ks(),E.mouse.target=null,E.mouse.mouseIgnoreJob=null};E.mouse.target=Bt(e)[0],E.mouse.mouseIgnoreJob=re.debounce(E.mouse.mouseIgnoreJob,Be.after(gl),t)}function se(e){let t=e.type;if(!Ii(t))return!1;if(t==="mousemove"){let i=e.buttons===void 0?1:e.buttons;return e instanceof window.MouseEvent&&!wl&&(i=bl[e.which]||0),!!(i&1)}else return(e.button===void 0?0:e.button)===0}function El(e){if(e.type==="click"){if(e.detail===0)return!0;let t=V(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;let i=t.getBoundingClientRect(),n=e.pageX,s=e.pageY;return!(n>=i.left&&n<=i.right&&s>=i.top&&s<=i.bottom)}return!1}let E={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function Al(e){let t="auto",i=Bt(e);for(let n=0,s;n<i.length;n++)if(s=i[n],s[_i]){t=s[_i];break}return t}function er(e,t,i){e.movefn=t,e.upfn=i,document.addEventListener("mousemove",t),document.addEventListener("mouseup",i)}function pe(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",Pl,Li?{passive:!0}:!1);const Bt=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],Ge={},Q=[];function Tl(e,t){let i=document.elementFromPoint(e,t),n=i;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let s=n;if(n=n.shadowRoot.elementFromPoint(e,t),s===n)break;n&&(i=n)}return i}function V(e){const t=Bt(e);return t.length>0?t[0]:e.target}function tr(e){let t,i=e.type,s=e.currentTarget[Ct];if(!s)return;let r=s[i];if(r){if(!e[ct]&&(e[ct]={},i.slice(0,5)==="touch")){e=e;let o=e.changedTouches[0];if(i==="touchstart"&&e.touches.length===1&&(E.touch.id=o.identifier),E.touch.id!==o.identifier)return;Di||(i==="touchstart"||i==="touchmove")&&Ol(e)}if(t=e[ct],!t.skip){for(let o=0,a;o<Q.length;o++)a=Q[o],r[a.name]&&!t[a.name]&&a.flow&&a.flow.start.indexOf(e.type)>-1&&a.reset&&a.reset();for(let o=0,a;o<Q.length;o++)a=Q[o],r[a.name]&&!t[a.name]&&(t[a.name]=!0,a[i](e))}}}function Ol(e){let t=e.changedTouches[0],i=e.type;if(i==="touchstart")E.touch.x=t.clientX,E.touch.y=t.clientY,E.touch.scrollDecided=!1;else if(i==="touchmove"){if(E.touch.scrollDecided)return;E.touch.scrollDecided=!0;let n=Al(e),s=!1,r=Math.abs(E.touch.x-t.clientX),o=Math.abs(E.touch.y-t.clientY);e.cancelable&&(n==="none"?s=!0:n==="pan-x"?s=o>r:n==="pan-y"&&(s=r>o)),s?e.preventDefault():xt("track")}}function Nl(e,t,i){return Ge[t]?(Ml(e,t,i),!0):!1}function kl(e,t,i){return Ge[t]?(Rl(e,t,i),!0):!1}function Ml(e,t,i){let n=Ge[t],s=n.deps,r=n.name,o=e[Ct];o||(e[Ct]=o={});for(let a=0,l,c;a<s.length;a++)l=s[a],!(Zn&&Ii(l)&&l!=="click")&&(c=o[l],c||(o[l]=c={_count:0}),c._count===0&&e.addEventListener(l,tr,Qn(l)),c[r]=(c[r]||0)+1,c._count=(c._count||0)+1);e.addEventListener(t,i),n.touchAction&&ir(e,n.touchAction)}function Rl(e,t,i){let n=Ge[t],s=n.deps,r=n.name,o=e[Ct];if(o)for(let a=0,l,c;a<s.length;a++)l=s[a],c=o[l],c&&c[r]&&(c[r]=(c[r]||1)-1,c._count=(c._count||1)-1,c._count===0&&e.removeEventListener(l,tr,Qn(l)));e.removeEventListener(t,i)}function Bi(e){Q.push(e);for(let t=0;t<e.emits.length;t++)Ge[e.emits[t]]=e}function Dl(e){for(let t=0,i;t<Q.length;t++){i=Q[t];for(let n=0,s;n<i.emits.length;n++)if(s=i.emits[n],s===e)return i}return null}function ir(e,t){Di&&e instanceof HTMLElement&&K.run(()=>{e.style.touchAction=t}),e[_i]=t}function Fi(e,t,i){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=i,m(e).dispatchEvent(n),n.defaultPrevented){let s=i.preventer||i.sourceEvent;s&&s.preventDefault&&s.preventDefault()}}function xt(e){let t=Dl(e);t.info&&(t.info.prevent=!0)}Bi({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){pe(this.info)},mousedown:function(e){if(!se(e))return;let t=V(e),i=this,n=function(o){se(o)||(Te("up",t,o),pe(i.info))},s=function(o){se(o)&&Te("up",t,o),pe(i.info)};er(this.info,n,s),Te("down",t,e)},touchstart:function(e){Te("down",V(e),e.changedTouches[0],e)},touchend:function(e){Te("up",V(e),e.changedTouches[0],e)}});function Te(e,t,i,n){t&&Fi(t,e,{x:i.clientX,y:i.clientY,sourceEvent:i,preventer:n,prevent:function(s){return xt(s)}})}Bi({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>yl&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,pe(this.info)},mousedown:function(e){if(!se(e))return;let t=V(e),i=this,n=function(o){let a=o.clientX,l=o.clientY;Ms(i.info,a,l)&&(i.info.state=i.info.started?o.type==="mouseup"?"end":"track":"start",i.info.state==="start"&&xt("tap"),i.info.addMove({x:a,y:l}),se(o)||(i.info.state="end",pe(i.info)),t&&Qt(i.info,t,o),i.info.started=!0)},s=function(o){i.info.started&&n(o),pe(i.info)};er(this.info,n,s),this.info.x=e.clientX,this.info.y=e.clientY},touchstart:function(e){let t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){let t=V(e),i=e.changedTouches[0],n=i.clientX,s=i.clientY;Ms(this.info,n,s)&&(this.info.state==="start"&&xt("tap"),this.info.addMove({x:n,y:s}),Qt(this.info,t,i),this.info.state="track",this.info.started=!0)},touchend:function(e){let t=V(e),i=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:i.clientX,y:i.clientY}),Qt(this.info,t,i))}});function Ms(e,t,i){if(e.prevent)return!1;if(e.started)return!0;let n=Math.abs(e.x-t),s=Math.abs(e.y-i);return n>=Os||s>=Os}function Qt(e,t,i){if(!t)return;let n=e.moves[e.moves.length-2],s=e.moves[e.moves.length-1],r=s.x-e.x,o=s.y-e.y,a,l=0;n&&(a=s.x-n.x,l=s.y-n.y),Fi(t,"track",{state:e.state,x:i.clientX,y:i.clientY,dx:r,dy:o,ddx:a,ddy:l,sourceEvent:i,hover:function(){return Tl(i.clientX,i.clientY)}})}Bi({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){se(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){se(e)&&Rs(this.info,e)},touchstart:function(e){const t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){Rs(this.info,e.changedTouches[0],e)}});function Rs(e,t,i){let n=Math.abs(t.clientX-e.x),s=Math.abs(t.clientY-e.y),r=V(i||t);!r||Cl[r.localName]&&r.hasAttribute("disabled")||(isNaN(n)||isNaN(s)||n<=Ts&&s<=Ts||El(t))&&(e.prevent||Fi(r,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:i}))}const sr=k(e=>{class t extends e{_addEventListenerToNode(n,s,r){Nl(n,s,r)||super._addEventListenerToNode(n,s,r)}_removeEventListenerFromNode(n,s,r){kl(n,s,r)||super._removeEventListenerFromNode(n,s,r)}}return t});const Il=/:host\(:dir\((ltr|rtl)\)\)/g,Ll=':host([dir="$1"])',Bl=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,Fl=':host([dir="$2"]) $1',zl=/:dir\((?:ltr|rtl)\)/,Ds=!!(window.ShadyDOM&&window.ShadyDOM.inUse),Fe=[];let ze=null,zi="";function nr(){zi=document.documentElement.getAttribute("dir")}function rr(e){e.__autoDirOptOut||e.setAttribute("dir",zi)}function or(){nr(),zi=document.documentElement.getAttribute("dir");for(let e=0;e<Fe.length;e++)rr(Fe[e])}function Hl(){ze&&ze.takeRecords().length&&or()}const $l=k(e=>{Ds||ze||(nr(),ze=new MutationObserver(or),ze.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=Un(e);class i extends t{static _processStyleText(s,r){return s=t._processStyleText.call(this,s,r),!Ds&&zl.test(s)&&(s=this._replaceDirInCssText(s),this.__activateDir=!0),s}static _replaceDirInCssText(s){let r=s;return r=r.replace(Il,Ll),r=r.replace(Bl,Fl),r}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Hl(),Fe.push(this),rr(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const s=Fe.indexOf(this);s>-1&&Fe.splice(s,1)}}}return i.__activateDir=!1,i});function Is(){document.body.removeAttribute("unresolved")}document.readyState==="interactive"||document.readyState==="complete"?Is():window.addEventListener("DOMContentLoaded",Is);function Oe(e,t,i){return{index:e,removed:t,addedCount:i}}const ar=0,lr=1,yi=2,gi=3;function Ul(e,t,i,n,s,r){let o=r-s+1,a=i-t+1,l=new Array(o);for(let c=0;c<o;c++)l[c]=new Array(a),l[c][0]=c;for(let c=0;c<a;c++)l[0][c]=c;for(let c=1;c<o;c++)for(let u=1;u<a;u++)if(Hi(e[t+u-1],n[s+c-1]))l[c][u]=l[c-1][u-1];else{let d=l[c-1][u]+1,h=l[c][u-1]+1;l[c][u]=d<h?d:h}return l}function jl(e){let t=e.length-1,i=e[0].length-1,n=e[t][i],s=[];for(;t>0||i>0;){if(t==0){s.push(yi),i--;continue}if(i==0){s.push(gi),t--;continue}let r=e[t-1][i-1],o=e[t-1][i],a=e[t][i-1],l;o<a?l=o<r?o:r:l=a<r?a:r,l==r?(r==n?s.push(ar):(s.push(lr),n=r),t--,i--):l==o?(s.push(gi),t--,n=o):(s.push(yi),i--,n=a)}return s.reverse(),s}function Kl(e,t,i,n,s,r){let o=0,a=0,l,c=Math.min(i-t,r-s);if(t==0&&s==0&&(o=Vl(e,n,c)),i==e.length&&r==n.length&&(a=ql(e,n,c-o)),t+=o,s+=o,i-=a,r-=a,i-t==0&&r-s==0)return[];if(t==i){for(l=Oe(t,[],0);s<r;)l.removed.push(n[s++]);return[l]}else if(s==r)return[Oe(t,[],i-t)];let u=jl(Ul(e,t,i,n,s,r));l=void 0;let d=[],h=t,p=s;for(let f=0;f<u.length;f++)switch(u[f]){case ar:l&&(d.push(l),l=void 0),h++,p++;break;case lr:l||(l=Oe(h,[],0)),l.addedCount++,h++,l.removed.push(n[p]),p++;break;case yi:l||(l=Oe(h,[],0)),l.addedCount++,h++;break;case gi:l||(l=Oe(h,[],0)),l.removed.push(n[p]),p++;break}return l&&d.push(l),d}function Vl(e,t,i){for(let n=0;n<i;n++)if(!Hi(e[n],t[n]))return n;return i}function ql(e,t,i){let n=e.length,s=t.length,r=0;for(;r<i&&Hi(e[--n],t[--s]);)r++;return r}function cr(e,t){return Kl(e,0,e.length,t,0,t.length)}function Hi(e,t){return e===t}function ce(e){return e.localName==="slot"}let Ls=class{static getFlattenedNodes(e){const t=m(e);if(ce(e))return e=e,t.assignedNodes({flatten:!0});{const i=[];for(let n=0;n<t.childNodes.length;n++){const s=t.childNodes[n];if(ce(s)){const r=s;i.push(...m(r).assignedNodes({flatten:!0}))}else i.push(s)}return i}}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ce(this._target)?this._listenSlots([this._target]):m(this._target).children&&(this._listenSlots(m(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=window.ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ce(this._target)?this._unlistenSlots([this._target]):m(this._target).children&&(this._unlistenSlots(m(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(window.ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,K.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0;t<e.length;t++){let i=e[t];i.addedNodes&&this._listenSlots(i.addedNodes),i.removedNodes&&this._unlistenSlots(i.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),i=cr(t,this._effectiveNodes);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let o=0,a;o<r.removed.length&&(a=r.removed[o]);o++)e.removedNodes.push(a);for(let s=0,r;s<i.length&&(r=i[s]);s++)for(let o=r.index;o<r.index+r.addedCount;o++)e.addedNodes.push(t[o]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ce(i)&&i.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(let t=0;t<e.length;t++){let i=e[t];ce(i)&&i.removeEventListener("slotchange",this._boundSchedule)}}};const ur=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=ml();while(e||t)};const ue=Element.prototype,Yl=ue.matches||ue.matchesSelector||ue.mozMatchesSelector||ue.msMatchesSelector||ue.oMatchesSelector||ue.webkitMatchesSelector,dr=function(e,t){return Yl.call(e,t)};class C{constructor(t){window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.patch(t),this.node=t}observeNodes(t){return new Ls(this.node,t)}unobserveNodes(t){t.disconnect()}notifyObserver(){}deepContains(t){if(m(this.node).contains(t))return!0;let i=t,n=t.ownerDocument;for(;i&&i!==n&&i!==this.node;)i=m(i).parentNode||m(i).host;return i===this.node}getOwnerRoot(){return m(this.node).getRootNode()}getDistributedNodes(){return this.node.localName==="slot"?m(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let t=[],i=m(this.node).assignedSlot;for(;i;)t.push(i),i=m(i).assignedSlot;return t}importNode(t,i){let n=this.node instanceof Document?this.node:this.node.ownerDocument;return m(n).importNode(t,i)}getEffectiveChildNodes(){return Ls.getFlattenedNodes(this.node)}queryDistributedElements(t){let i=this.getEffectiveChildNodes(),n=[];for(let s=0,r=i.length,o;s<r&&(o=i[s]);s++)o.nodeType===Node.ELEMENT_NODE&&dr(o,t)&&n.push(o);return n}get activeElement(){let t=this.node;return t._activeElement!==void 0?t._activeElement:t.activeElement}}function Wl(e,t){for(let i=0;i<t.length;i++){let n=t[i];e[n]=function(){return this.node[n].apply(this.node,arguments)}}}function Bs(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})}}function Jl(e,t){for(let i=0;i<t.length;i++){let n=t[i];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(s){this.node[n]=s},configurable:!0})}}class bi{constructor(t){this.event=t}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}C.prototype.cloneNode;C.prototype.appendChild;C.prototype.insertBefore;C.prototype.removeChild;C.prototype.replaceChild;C.prototype.setAttribute;C.prototype.removeAttribute;C.prototype.querySelector;C.prototype.querySelectorAll;C.prototype.parentNode;C.prototype.firstChild;C.prototype.lastChild;C.prototype.nextSibling;C.prototype.previousSibling;C.prototype.firstElementChild;C.prototype.lastElementChild;C.prototype.nextElementSibling;C.prototype.previousElementSibling;C.prototype.childNodes;C.prototype.children;C.prototype.classList;C.prototype.textContent;C.prototype.innerHTML;let wi=C;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(C.prototype).forEach(t=>{t!="activeElement"&&(e.prototype[t]=C.prototype[t])}),Bs(e.prototype,["classList"]),wi=e,Object.defineProperties(bi.prototype,{localTarget:{get(){const t=this.event.currentTarget,i=t&&P(t).getOwnerRoot(),n=this.path;for(let s=0;s<n.length;s++){const r=n[s];if(P(r).getOwnerRoot()===i)return r}},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else Wl(C.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll","attachShadow"]),Bs(C.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList","shadowRoot"]),Jl(C.prototype,["textContent","innerHTML","className"]);const P=function(e){if(e=e||document,e instanceof wi||e instanceof bi)return e;let t=e.__domApi;return t||(e instanceof Event?t=new bi(e):t=new wi(e),e.__domApi=t),t};const Zt=window.ShadyDOM,Fs=window.ShadyCSS;function zs(e,t){return m(e).getRootNode()===t}function Gl(e,t=!1){if(!Zt||!Fs||!Zt.handlesDynamicScoping)return null;const i=Fs.ScopingShim;if(!i)return null;const n=i.scopeForNode(e),s=m(e).getRootNode(),r=o=>{if(!zs(o,s))return;const a=Array.from(Zt.nativeMethods.querySelectorAll.call(o,"*"));a.push(o);for(let l=0;l<a.length;l++){const c=a[l];if(!zs(c,s))continue;const u=i.currentScopeForNode(c);u!==n&&(u!==""&&i.unscopeNode(c,u),i.scopeNode(c,n))}};if(r(e),t){const o=new MutationObserver(a=>{for(let l=0;l<a.length;l++){const c=a[l];for(let u=0;u<c.addedNodes.length;u++){const d=c.addedNodes[u];d.nodeType===Node.ELEMENT_NODE&&r(d)}}});return o.observe(e,{childList:!0,subtree:!0}),o}else return null}const ei="disable-upgrade",hr=e=>{for(;e;){const t=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(t)return t.get;e=Object.getPrototypeOf(e.prototype).constructor}return()=>[]};k(e=>{const t=Lt(e);let i=hr(t);class n extends t{constructor(){super(),this.__isUpgradeDisabled}static get observedAttributes(){return i.call(this).concat(ei)}_initializeProperties(){this.hasAttribute(ei)?this.__isUpgradeDisabled=!0:super._initializeProperties()}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(r){return super._canApplyPropertyDefault(r)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(r))}attributeChangedCallback(r,o,a,l){r==ei?this.__isUpgradeDisabled&&a==null&&(super._initializeProperties(),this.__isUpgradeDisabled=!1,m(this).isConnected&&super.connectedCallback()):super.attributeChangedCallback(r,o,a,l)}connectedCallback(){this.__isUpgradeDisabled||super.connectedCallback()}disconnectedCallback(){this.__isUpgradeDisabled||super.disconnectedCallback()}}return n});const st="disable-upgrade";let Xl=window.ShadyCSS;const pr=k(e=>{const t=sr(Lt(e)),i=fi?t:$l(t),n=hr(i),s={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class r extends i{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this.__isUpgradeDisabled,this.__needsAttributesAtConnected,this._legacyForceObservedAttributes}static get importMeta(){return this.prototype.importMeta}created(){}__attributeReaction(a,l,c){(this.__dataAttributes&&this.__dataAttributes[a]||a===st)&&this.attributeChangedCallback(a,l,c,null)}setAttribute(a,l){if(tt&&!this._legacyForceObservedAttributes){const c=this.getAttribute(a);super.setAttribute(a,l),this.__attributeReaction(a,c,String(l))}else super.setAttribute(a,l)}removeAttribute(a){if(tt&&!this._legacyForceObservedAttributes){const l=this.getAttribute(a);super.removeAttribute(a),this.__attributeReaction(a,l,null)}else super.removeAttribute(a)}static get observedAttributes(){return tt&&!this.prototype._legacyForceObservedAttributes?(this.hasOwnProperty(JSCompiler_renameProperty("__observedAttributes",this))||(this.__observedAttributes=[],this.prototype,void 0),this.__observedAttributes):n.call(this).concat(st)}_enableProperties(){this.__isUpgradeDisabled||super._enableProperties()}_canApplyPropertyDefault(a){return super._canApplyPropertyDefault(a)&&!(this.__isUpgradeDisabled&&this._isPropertyPending(a))}connectedCallback(){this.__needsAttributesAtConnected&&this._takeAttributes(),this.__isUpgradeDisabled||(super.connectedCallback(),this.isAttached=!0,this.attached())}attached(){}disconnectedCallback(){this.__isUpgradeDisabled||(super.disconnectedCallback(),this.isAttached=!1,this.detached())}detached(){}attributeChangedCallback(a,l,c,u){l!==c&&(a==st?this.__isUpgradeDisabled&&c==null&&(this._initializeProperties(),this.__isUpgradeDisabled=!1,m(this).isConnected&&this.connectedCallback()):(super.attributeChangedCallback(a,l,c,u),this.attributeChanged(a,l,c)))}attributeChanged(a,l,c){}_initializeProperties(){if(Ue&&this.hasAttribute(st))this.__isUpgradeDisabled=!0;else{let a=Object.getPrototypeOf(this);a.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",a))||(this._registered(),a.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),tt&&!this._legacyForceObservedAttributes&&(this.hasAttributes()?this._takeAttributes():this.parentNode||(this.__needsAttributesAtConnected=!0)),this._applyListeners()}}_takeAttributes(){const a=this.attributes;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.__attributeReaction(u.name,null,u.value)}}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(a){return this._serializeValue(a)}deserialize(a,l){return this._deserializeValue(a,l)}reflectPropertyToAttribute(a,l,c){this._propertyToAttribute(a,l,c)}serializeValueToAttribute(a,l,c){this._valueToNodeAttribute(c||this,a,l)}extend(a,l){if(!(a&&l))return a||l;let c=Object.getOwnPropertyNames(l);for(let u=0,d;u<c.length&&(d=c[u]);u++){let h=Object.getOwnPropertyDescriptor(l,d);h&&Object.defineProperty(a,d,h)}return a}mixin(a,l){for(let c in l)a[c]=l[c];return a}chainObject(a,l){return a&&l&&a!==l&&(a.__proto__=l),a}instanceTemplate(a){let l=this.constructor._contentForTemplate(a);return document.importNode(l,!0)}fire(a,l,c){c=c||{},l=l??{};let u=new Event(a,{bubbles:c.bubbles===void 0?!0:c.bubbles,cancelable:!!c.cancelable,composed:c.composed===void 0?!0:c.composed});u.detail=l;let d=c.node||this;return m(d).dispatchEvent(u),u}listen(a,l,c){a=a||this;let u=this.__boundListeners||(this.__boundListeners=new WeakMap),d=u.get(a);d||(d={},u.set(a,d));let h=l+c;d[h]||(d[h]=this._addMethodEventListenerToNode(a,l,c,this))}unlisten(a,l,c){a=a||this;let u=this.__boundListeners&&this.__boundListeners.get(a),d=l+c,h=u&&u[d];h&&(this._removeEventListenerFromNode(a,l,h),u[d]=null)}setScrollDirection(a,l){ir(l||this,s[a]||"auto")}$$(a){return this.root.querySelector(a)}get domHost(){let a=m(this).getRootNode();return a instanceof DocumentFragment?a.host:a}distributeContent(){const l=P(this);window.ShadyDOM&&l.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return P(this).getEffectiveChildNodes()}queryDistributedElements(a){return P(this).queryDistributedElements(a)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter(function(l){return l.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let a=this.getEffectiveChildNodes(),l=[];for(let c=0,u;u=a[c];c++)u.nodeType!==Node.COMMENT_NODE&&l.push(u.textContent);return l.join("")}queryEffectiveChildren(a){let l=this.queryDistributedElements(a);return l&&l[0]}queryAllEffectiveChildren(a){return this.queryDistributedElements(a)}getContentChildNodes(a){let l=this.root.querySelector(a||"slot");return l?P(l).getDistributedNodes():[]}getContentChildren(a){return this.getContentChildNodes(a).filter(function(c){return c.nodeType===Node.ELEMENT_NODE})}isLightDescendant(a){const l=this;return l!==a&&m(l).contains(a)&&m(l).getRootNode()===m(a).getRootNode()}isLocalDescendant(a){return this.root===m(a).getRootNode()}scopeSubtree(a,l=!1){return Gl(a,l)}getComputedStyleValue(a){return Xl.getComputedStyleValue(this,a)}debounce(a,l,c){return this._debouncers=this._debouncers||{},this._debouncers[a]=re.debounce(this._debouncers[a],c>0?Be.after(c):K,l.bind(this))}isDebouncerActive(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];return!!(l&&l.isActive())}flushDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.flush()}cancelDebouncer(a){this._debouncers=this._debouncers||{};let l=this._debouncers[a];l&&l.cancel()}async(a,l){return l>0?Be.run(a.bind(this),l):~K.run(a.bind(this))}cancelAsync(a){a<0?K.cancel(~a):Be.cancel(a)}create(a,l){let c=document.createElement(a);if(l)if(c.setProperties)c.setProperties(l);else for(let u in l)c[u]=l[u];return c}elementMatches(a,l){return dr(l||this,a)}toggleAttribute(a,l){let c=this;return arguments.length===3&&(c=arguments[2]),arguments.length==1&&(l=!c.hasAttribute(a)),l?(m(c).setAttribute(a,""),!0):(m(c).removeAttribute(a),!1)}toggleClass(a,l,c){c=c||this,arguments.length==1&&(l=!c.classList.contains(a)),l?c.classList.add(a):c.classList.remove(a)}transform(a,l){l=l||this,l.style.webkitTransform=a,l.style.transform=a}translate3d(a,l,c,u){u=u||this,this.transform("translate3d("+a+","+l+","+c+")",u)}arrayDelete(a,l){let c;if(Array.isArray(a)){if(c=a.indexOf(l),c>=0)return a.splice(c,1)}else if(c=A(this,a).indexOf(l),c>=0)return this.splice(a,c,1);return null}_logger(a,l){switch(Array.isArray(l)&&l.length===1&&Array.isArray(l[0])&&(l=l[0]),a){case"log":case"warn":case"error":console[a](...l)}}_log(...a){this._logger("log",a)}_warn(...a){this._logger("warn",a)}_error(...a){this._logger("error",a)}_logf(a,...l){return["[%s::%s]",this.is,a,...l]}}return r.prototype.is="",r});const Ql={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},fr={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},Zl=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},fr);function ec(e,t,i){const n=e._noAccessors,s=Object.getOwnPropertyNames(e);for(let r=0;r<s.length;r++){let o=s[r];if(!(o in i))if(n)t[o]=e[o];else{let a=Object.getOwnPropertyDescriptor(e,o);a&&(a.configurable=!0,Object.defineProperty(t,o,a))}}}function tc(e,t,i){for(let n=0;n<t.length;n++)_r(e,t[n],i,Zl)}function _r(e,t,i,n){ec(t,e,n);for(let s in Ql)t[s]&&(i[s]=i[s]||[],i[s].push(t[s]))}function mr(e,t,i){t=t||[];for(let n=e.length-1;n>=0;n--){let s=e[n];s?Array.isArray(s)?mr(s,t):t.indexOf(s)<0&&(!i||i.indexOf(s)<0)&&t.unshift(s):console.warn("behavior is null, check for missing or 404 import")}return t}function Hs(e,t){for(const i in t){const n=e[i],s=t[i];!("value"in s)&&n&&"value"in n?e[i]=Object.assign({value:n.value},s):e[i]=s}}const $s=pr(HTMLElement);function ic(e,t,i){let n;const s={};class r extends t{static _finalizeClass(){if(!this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this)))t._finalizeClass.call(this);else{if(n)for(let l=0,c;l<n.length;l++)c=n[l],c.properties&&this.createProperties(c.properties),c.observers&&this.createObservers(c.observers,c.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}}static get properties(){const l={};if(n)for(let c=0;c<n.length;c++)Hs(l,n[c].properties);return Hs(l,e.properties),l}static get observers(){let l=[];if(n)for(let c=0,u;c<n.length;c++)u=n[c],u.observers&&(l=l.concat(u.observers));return e.observers&&(l=l.concat(e.observers)),l}created(){super.created();const l=s.created;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}_registered(){const l=r.prototype;if(!l.hasOwnProperty(JSCompiler_renameProperty("__hasRegisterFinished",l))){l.__hasRegisterFinished=!0,super._registered(),Ue&&o(l);const c=Object.getPrototypeOf(this);let u=s.beforeRegister;if(u)for(let d=0;d<u.length;d++)u[d].call(c);if(u=s.registered,u)for(let d=0;d<u.length;d++)u[d].call(c)}}_applyListeners(){super._applyListeners();const l=s.listeners;if(l)for(let c=0;c<l.length;c++){const u=l[c];if(u)for(let d in u)this._addMethodEventListenerToNode(this,d,u[d])}}_ensureAttributes(){const l=s.hostAttributes;if(l)for(let c=l.length-1;c>=0;c--){const u=l[c];for(let d in u)this._ensureAttribute(d,u[d])}super._ensureAttributes()}ready(){super.ready();let l=s.ready;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attached(){super.attached();let l=s.attached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}detached(){super.detached();let l=s.detached;if(l)for(let c=0;c<l.length;c++)l[c].call(this)}attributeChanged(l,c,u){super.attributeChanged();let d=s.attributeChanged;if(d)for(let h=0;h<d.length;h++)d[h].call(this,l,c,u)}}if(i){Array.isArray(i)||(i=[i]);let a=t.prototype.behaviors;n=mr(i,null,a),r.prototype.behaviors=a?a.concat(i):n}const o=a=>{n&&tc(a,n,s),_r(a,e,s,fr)};return Ue||o(r.prototype),r.generatedFrom=e,r}const sc=function(e,t){e||console.warn("Polymer.Class requires `info` argument");let i=t?t($s):$s;return i=ic(e,i,e.behaviors),i.is=i.prototype.is=e.is,i};const Ft=function(e){let t;return typeof e=="function"?t=e:t=Ft.Class(e),e._legacyForceObservedAttributes&&(t.prototype._legacyForceObservedAttributes=e._legacyForceObservedAttributes),customElements.define(t.is,t),t};Ft.Class=sc;function $i(e,t,i,n,s){let r;s&&(r=typeof i=="object"&&i!==null,r&&(n=e.__dataTemp[t]));let o=n!==i&&(n===n||i===i);return r&&o&&(e.__dataTemp[t]=i),o}const Ui=k(e=>{class t extends e{_shouldPropertyChange(n,s,r){return $i(this,n,s,r,!0)}}return t}),yr=k(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(n,s,r){return $i(this,n,s,r,this.mutableData)}}return t});Ui._mutablePropertyChange=$i;let vi=null;function Ci(){return vi}Ci.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:Ci,writable:!0}});const gr=It(Ci),nc=Ui(gr);function rc(e,t){vi=e,Object.setPrototypeOf(e,t.prototype),new t,vi=null}const oc=It(class{});function br(e,t){for(let i=0;i<t.length;i++){let n=t[i];if(!!e!=!!n.__hideTemplateChildren__)if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if(n.localName==="slot")if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),m(m(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{const s=n.__polymerReplaced__;s&&m(m(s).parentNode).replaceChild(n,s)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}class W extends oc{constructor(t){super(),this._configureProperties(t),this.root=this._stampTemplate(this.__dataHost);let i=[];this.children=i;for(let s=this.root.firstChild;s;s=s.nextSibling)i.push(s),s.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let n=this.__templatizeOptions;(t&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(t){if(this.__templatizeOptions.forwardHostProp)for(let n in this.__hostProps)this._setPendingProperty(n,this.__dataHost["_host_"+n]);for(let n in t)this._setPendingProperty(n,t[n])}forwardHostProp(t,i){this._setPendingPropertyOrPath(t,i,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(t,i,n){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(t,i,s=>{s.model=this,n(s)});else{let s=this.__dataHost.__dataHost;s&&s._addEventListenerToNode(t,i,n)}}_showHideChildren(t){br(t,this.children)}_setUnmanagedPropertyToNode(t,i,n){t.__hideTemplateChildren__&&t.nodeType==Node.TEXT_NODE&&i=="textContent"?t.__polymerTextContent__=n:super._setUnmanagedPropertyToNode(t,i,n)}get parentModel(){let t=this.__parentModel;if(!t){let i;t=this;do t=t.__dataHost.__dataHost;while((i=t.__templatizeOptions)&&!i.parentModel);this.__parentModel=t}return t}dispatchEvent(t){return!0}}W.prototype.__dataHost;W.prototype.__templatizeOptions;W.prototype._methodHost;W.prototype.__templatizeOwner;W.prototype.__hostProps;const ac=Ui(W);function Us(e){let t=e.__dataHost;return t&&t._methodHost||t}function lc(e,t,i){let n=i.mutableData?ac:W;St.mixin&&(n=St.mixin(n));let s=class extends n{};return s.prototype.__templatizeOptions=i,s.prototype._bindTemplate(e),dc(s,e,t,i),s}function cc(e,t,i,n){let s=i.forwardHostProp;if(s&&t.hasHostProps){const r=e.localName=="template";let o=t.templatizeTemplateClass;if(!o){if(r){let l=i.mutableData?nc:gr;class c extends l{}o=t.templatizeTemplateClass=c}else{const l=e.constructor;class c extends l{}o=t.templatizeTemplateClass=c}let a=t.hostProps;for(let l in a)o.prototype._addPropertyEffect("_host_"+l,o.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:uc(l,s)}),o.prototype._createNotifyingProperty("_host_"+l);Mn&&n&&fc(t,i,n)}if(e.__dataProto&&Object.assign(e.__data,e.__dataProto),r)rc(e,o),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties();else{Object.setPrototypeOf(e,o.prototype);const a=t.hostProps;for(let l in a)if(l="_host_"+l,l in e){const c=e[l];delete e[l],e.__data[l]=c}}}}function uc(e,t){return function(n,s,r){t.call(n.__templatizeOwner,s.substring(6),r[s])}}function dc(e,t,i,n){let s=i.hostProps||{};for(let r in n.instanceProps){delete s[r];let o=n.notifyInstanceProp;o&&e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:hc(r,o)})}if(n.forwardHostProp&&t.__dataHost)for(let r in s)i.hasHostProps||(i.hasHostProps=!0),e.prototype._addPropertyEffect(r,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:pc()})}function hc(e,t){return function(n,s,r){t.call(n.__templatizeOwner,n,s,r[s])}}function pc(){return function(t,i,n){t.__dataHost._setPendingPropertyOrPath("_host_"+i,n[i],!0,!0)}}function St(e,t,i){if(me&&!Us(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(i=i||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;let s=(t?t.constructor:W)._parseTemplate(e),r=s.templatizeInstanceClass;r||(r=lc(e,s,i),s.templatizeInstanceClass=r);const o=Us(e);cc(e,s,i,o);let a=class extends r{};return a.prototype._methodHost=o,a.prototype.__dataHost=e,a.prototype.__templatizeOwner=t,a.prototype.__hostProps=s.hostProps,a=a,a}function fc(e,t,i){const n=i.constructor._properties,{propertyEffects:s}=e,{instanceProps:r}=t;for(let o in s)if(!n[o]&&!(r&&r[o])){const a=s[o];for(let l=0;l<a.length;l++){const{part:c}=a[l].info;if(!(c.signature&&c.signature.static)){console.warn(`Property '${o}' used in template but not declared in 'properties'; attribute will not be observed.`);break}}}}function _c(e,t){let i;for(;t;)if(i=t.__dataHost?t:t.__templatizeInstance)if(i.__dataHost!=e)t=i.__dataHost;else return i;else t=m(t).parentNode;return null}let js=!1;function ji(){if(Ue&&!kn){if(!js){js=!0;const e=document.createElement("style");e.textContent="dom-bind,dom-if,dom-repeat{display:none;}",document.head.appendChild(e)}return!0}return!1}const mc=sr(yr(It(HTMLElement)));class yc extends mc{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),me)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(t,i,n,s){this.mutableData=!0}connectedCallback(){ji()||(this.style.display="none"),this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){m(m(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let t=0;t<this.__children.length;t++)this.root.appendChild(this.__children[t])}render(){let t;if(!this.__children){if(t=t||this.querySelector("template"),!t){let i=new MutationObserver(()=>{if(t=this.querySelector("template"),t)i.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});i.observe(this,{childList:!0});return}this.root=this._stampTemplate(t),this.$=this.root.$,this.__children=[];for(let i=this.root.firstChild;i;i=i.nextSibling)this.__children[this.__children.length]=i;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}customElements.define("dom-bind",yc);const Ks=window.trustedTypes&&trustedTypes.createPolicy("polymer-html-literal",{createHTML:e=>e});class wr{constructor(t,i){Cr(t,i);const n=i.reduce((s,r,o)=>s+vr(r)+t[o+1],t[0]);this.value=n.toString()}toString(){return this.value}}function vr(e){if(e instanceof wr)return e.value;throw new Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function gc(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof wr)return vr(e);throw new Error(`non-template value passed to Polymer's html function: ${e}`)}const Ce=function(t,...i){Cr(t,i);const n=document.createElement("template");let s=i.reduce((r,o,a)=>r+gc(o)+t[a+1],t[0]);return Ks&&(s=Ks.createHTML(s)),n.innerHTML=s,n},Cr=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw new TypeError("Invalid call to the html template tag")};const Ki=Lt(HTMLElement);const bc=yr(Ki);class Vs extends bc{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!ui,readOnly:!0},initialCount:{type:Number},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"},notifyDomChange:{type:Boolean},reuseChunkedInstances:{type:Boolean}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__renderStartTime=null,this.__itemsArrayChanged=!1,this.__shouldMeasureChunk=!1,this.__shouldContinueChunking=!1,this.__chunkingId=0,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null,this._templateInfo}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let t=0;t<this.__instances.length;t++)this.__detachInstance(t);this.__chunkingId&&cancelAnimationFrame(this.__chunkingId)}connectedCallback(){if(super.connectedCallback(),ji()||(this.style.display="none"),this.__isDetached){this.__isDetached=!1;let t=m(m(this).parentNode);for(let i=0;i<this.__instances.length;i++)this.__attachInstance(i,t);this.__chunkingId&&this.__render()}}__ensureTemplatized(){if(!this.__ctor){const t=this;let i=this.template=t._templateInfo?t:this.querySelector("template");if(!i){let s=new MutationObserver(()=>{if(this.querySelector("template"))s.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return s.observe(this,{childList:!0}),!1}let n={};n[this.as]=!0,n[this.indexAs]=!0,n[this.itemsIndexAs]=!0,this.__ctor=St(i,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:n,forwardHostProp:function(s,r){let o=this.__instances;for(let a=0,l;a<o.length&&(l=o[a]);a++)l.forwardHostProp(s,r)},notifyInstanceProp:function(s,r,o){if(fa(this.as,r)){let a=s[this.itemsIndexAs];r==this.as&&(this.items[a]=o);let l=Ve(this.as,`${JSCompiler_renameProperty("items",this)}.${a}`,r);this.notifyPath(l,o)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(t){if(typeof t=="string"){let i=t,n=this.__getMethodHost();return function(){return n[i].apply(n,arguments)}}return t}__sortChanged(t){this.__sortFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__filterChanged(t){this.__filterFn=this.__functionFromPropertyValue(t),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(t){return Math.ceil(1e3/t)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__handleObservedPaths(t){if(this.__sortFn||this.__filterFn){if(!t)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let i=this.__observePaths;for(let n=0;n<i.length;n++)t.indexOf(i[n])===0&&this.__debounceRender(this.__render,this.delay)}}}__itemsChanged(t){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(t.path,t.value)||(t.path==="items"&&(this.__itemsArrayChanged=!0),this.__debounceRender(this.__render))}__debounceRender(t,i=0){this.__renderDebouncer=re.debounce(this.__renderDebouncer,i>0?Be.after(i):K,t.bind(this)),Gn(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ur()}__render(){if(!this.__ensureTemplatized())return;let t=this.items||[];const i=this.__sortAndFilterItems(t),n=this.__calculateLimit(i.length);this.__updateInstances(t,n,i),this.initialCount&&(this.__shouldMeasureChunk||this.__shouldContinueChunking)&&(cancelAnimationFrame(this.__chunkingId),this.__chunkingId=requestAnimationFrame(()=>{this.__chunkingId=null,this.__continueChunking()})),this._setRenderedItemCount(this.__instances.length),(!ui||this.notifyDomChange)&&this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}__sortAndFilterItems(t){let i=new Array(t.length);for(let n=0;n<t.length;n++)i[n]=n;return this.__filterFn&&(i=i.filter((n,s,r)=>this.__filterFn(t[n],s,r))),this.__sortFn&&i.sort((n,s)=>this.__sortFn(t[n],t[s])),i}__calculateLimit(t){let i=t;const n=this.__instances.length;if(this.initialCount){let s;!this.__chunkCount||this.__itemsArrayChanged&&!this.reuseChunkedInstances?(i=Math.min(t,this.initialCount),s=Math.max(i-n,0),this.__chunkCount=s||1):(s=Math.min(Math.max(t-n,0),this.__chunkCount),i=Math.min(n+s,t)),this.__shouldMeasureChunk=s===this.__chunkCount,this.__shouldContinueChunking=i<t,this.__renderStartTime=performance.now()}return this.__itemsArrayChanged=!1,i}__continueChunking(){if(this.__shouldMeasureChunk){const t=performance.now()-this.__renderStartTime,i=this._targetFrameTime/t;this.__chunkCount=Math.round(this.__chunkCount*i)||1}this.__shouldContinueChunking&&this.__debounceRender(this.__render)}__updateInstances(t,i,n){const s=this.__itemsIdxToInstIdx={};let r;for(r=0;r<i;r++){let o=this.__instances[r],a=n[r],l=t[a];s[a]=r,o?(o._setPendingProperty(this.as,l),o._setPendingProperty(this.indexAs,r),o._setPendingProperty(this.itemsIndexAs,a),o._flushProperties()):this.__insertInstance(l,r,a)}for(let o=this.__instances.length-1;o>=r;o--)this.__detachAndRemoveInstance(o)}__detachInstance(t){let i=this.__instances[t];const n=m(i.root);for(let s=0;s<i.children.length;s++){let r=i.children[s];n.appendChild(r)}return i}__attachInstance(t,i){let n=this.__instances[t];i.insertBefore(n.root,this)}__detachAndRemoveInstance(t){this.__detachInstance(t),this.__instances.splice(t,1)}__stampInstance(t,i,n){let s={};return s[this.as]=t,s[this.indexAs]=i,s[this.itemsIndexAs]=n,new this.__ctor(s)}__insertInstance(t,i,n){const s=this.__stampInstance(t,i,n);let r=this.__instances[i+1],o=r?r.children[0]:this;return m(m(this).parentNode).insertBefore(s.root,o),this.__instances[i]=s,s}_showHideChildren(t){for(let i=0;i<this.__instances.length;i++)this.__instances[i]._showHideChildren(t)}__handleItemPath(t,i){let n=t.slice(6),s=n.indexOf("."),r=s<0?n:n.substring(0,s);if(r==parseInt(r,10)){let o=s<0?"":n.substring(s+1);this.__handleObservedPaths(o);let a=this.__itemsIdxToInstIdx[r],l=this.__instances[a];if(l){let c=this.as+(o?"."+o:"");l._setPendingPropertyOrPath(c,i,!1,!0),l._flushProperties()}return!0}}itemForElement(t){let i=this.modelForElement(t);return i&&i[this.as]}indexForElement(t){let i=this.modelForElement(t);return i&&i[this.indexAs]}modelForElement(t){return _c(this.template,t)}}customElements.define(Vs.is,Vs);class xr extends Ki{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"},notifyDomChange:{type:Boolean}}}constructor(){super(),this.__renderDebouncer=null,this._lastIf=!1,this.__hideTemplateChildren__=!1,this.__template,this._templateInfo}__debounceRender(){this.__renderDebouncer=re.debounce(this.__renderDebouncer,K,()=>this.__render()),Gn(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();const t=m(this).parentNode;(!t||t.nodeType==Node.DOCUMENT_FRAGMENT_NODE&&!m(t).host)&&this.__teardownInstance()}connectedCallback(){super.connectedCallback(),ji()||(this.style.display="none"),this.if&&this.__debounceRender()}__ensureTemplate(){if(!this.__template){const t=this;let i=t._templateInfo?t:m(t).querySelector("template");if(!i){let n=new MutationObserver(()=>{if(m(this).querySelector("template"))n.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return n.observe(this,{childList:!0}),!1}this.__template=i}return!0}__ensureInstance(){let t=m(this).parentNode;if(this.__hasInstance()){let i=this.__getInstanceNodes();if(i&&i.length&&m(this).previousSibling!==i[i.length-1])for(let s=0,r;s<i.length&&(r=i[s]);s++)m(t).insertBefore(r,this)}else{if(!t||!this.__ensureTemplate())return!1;this.__createAndInsertInstance(t)}return!0}render(){ur()}__render(){if(this.if){if(!this.__ensureInstance())return}else this.restamp&&this.__teardownInstance();this._showHideChildren(),(!ui||this.notifyDomChange)&&this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__hasInstance(){}__getInstanceNodes(){}__createAndInsertInstance(t){}__teardownInstance(){}_showHideChildren(){}}class wc extends xr{constructor(){super(),this.__instance=null,this.__syncInfo=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.templateInfo.childNodes}__createAndInsertInstance(t){const i=this.__dataHost||this;if(me&&!this.__dataHost)throw new Error("strictTemplatePolicy: template owner not trusted");const n=i._bindTemplate(this.__template,!0);n.runEffects=(s,r,o)=>{let a=this.__syncInfo;if(this.if)a&&(this.__syncInfo=null,this._showHideChildren(),r=Object.assign(a.changedProps,r)),s(r,o);else if(this.__instance)if(a||(a=this.__syncInfo={runEffects:s,changedProps:{}}),o)for(const l in r){const c=U(l);a.changedProps[c]=this.__dataHost[c]}else Object.assign(a.changedProps,r)},this.__instance=i._stampTemplate(this.__template,n),m(t).insertBefore(this.__instance,this)}__syncHostProperties(){const t=this.__syncInfo;t&&(this.__syncInfo=null,t.runEffects(t.changedProps,!1))}__teardownInstance(){const t=this.__dataHost||this;this.__instance&&(t._removeBoundDom(this.__instance),this.__instance=null,this.__syncInfo=null)}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,br(t,this.__instance.templateInfo.childNodes)),t||this.__syncHostProperties()}}class vc extends xr{constructor(){super(),this.__ctor=null,this.__instance=null,this.__invalidProps=null}__hasInstance(){return!!this.__instance}__getInstanceNodes(){return this.__instance.children}__createAndInsertInstance(t){this.__ctor||(this.__ctor=St(this.__template,this,{mutableData:!0,forwardHostProp:function(i,n){this.__instance&&(this.if?this.__instance.forwardHostProp(i,n):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[U(i)]=!0))}})),this.__instance=new this.__ctor,m(t).insertBefore(this.__instance.root,this)}__teardownInstance(){if(this.__instance){let t=this.__instance.children;if(t&&t.length){let i=m(t[0]).parentNode;if(i){i=m(i);for(let n=0,s;n<t.length&&(s=t[n]);n++)i.removeChild(s)}}this.__invalidProps=null,this.__instance=null}}__syncHostProperties(){let t=this.__invalidProps;if(t){this.__invalidProps=null;for(let i in t)this.__instance._setPendingProperty(i,this.__dataHost[i]);this.__instance._flushProperties()}}_showHideChildren(){const t=this.__hideTemplateChildren__||!this.if;this.__instance&&!!this.__instance.__hidden!==t&&(this.__instance.__hidden=t,this.__instance._showHideChildren(t)),t||this.__syncHostProperties()}}const qs=Rn?wc:vc;customElements.define(qs.is,qs);let Cc=k(e=>{let t=Lt(e);class i extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(s,r){let o=r.path;if(o==JSCompiler_renameProperty("items",this)){let a=r.base||[],l=this.__lastItems,c=this.__lastMulti;if(s!==c&&this.clearSelection(),l){let u=cr(a,l);this.__applySplices(u)}this.__lastItems=a,this.__lastMulti=s}else if(r.path==`${JSCompiler_renameProperty("items",this)}.splices`)this.__applySplices(r.value.indexSplices);else{let a=o.slice(`${JSCompiler_renameProperty("items",this)}.`.length),l=parseInt(a,10);a.indexOf(".")<0&&a==l&&this.__deselectChangedIdx(l)}}__applySplices(s){let r=this.__selectedMap;for(let a=0;a<s.length;a++){let l=s[a];r.forEach((c,u)=>{c<l.index||(c>=l.index+l.removed.length?r.set(u,c+l.addedCount-l.removed.length):r.set(u,-1))});for(let c=0;c<l.addedCount;c++){let u=l.index+c;r.has(this.items[u])&&r.set(this.items[u],u)}}this.__updateLinks();let o=0;r.forEach((a,l)=>{a<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,r.delete(l)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let s=0;this.__selectedMap.forEach(r=>{r>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${r}`,`${JSCompiler_renameProperty("selected",this)}.${s++}`)})}else this.__selectedMap.forEach(s=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${s}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${s}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(s){return this.__selectedMap.has(s)}isIndexSelected(s){return this.isSelected(this.items[s])}__deselectChangedIdx(s){let r=this.__selectedIndexForItemIndex(s);if(r>=0){let o=0;this.__selectedMap.forEach((a,l)=>{r==o++&&this.deselect(l)})}}__selectedIndexForItemIndex(s){let r=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${s}`];if(r)return parseInt(r.slice(`${JSCompiler_renameProperty("selected",this)}.`.length),10)}deselect(s){let r=this.__selectedMap.get(s);if(r>=0){this.__selectedMap.delete(s);let o;this.multi&&(o=this.__selectedIndexForItemIndex(r)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null}}deselectIndex(s){this.deselect(this.items[s])}select(s){this.selectIndex(this.items.indexOf(s))}selectIndex(s){let r=this.items[s];this.isSelected(r)?this.toggle&&this.deselectIndex(s):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(r,s),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),r):this.selected=this.selectedItem=r)}}return i}),xc=Cc(Ki);class Ys extends xc{static get is(){return"array-selector"}static get template(){return null}}customElements.define(Ys.is,Ys);const ut=new q;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,i){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,i){},styleSubtree(e,t){ut.processStyles(),oi(e,t)},styleElement(e){ut.processStyles()},styleDocument(e){ut.processStyles(),oi(document.body,e)},getComputedStyleValue(e,t){return On(e,t)},flushCustomStyles(){},nativeCss:Ei,nativeShadow:Rt,cssBuild:$e,disableRuntime:wn});window.ShadyCSS.CustomStyleInterface=ut;const Ws="include",Sc=window.ShadyCSS.CustomStyleInterface;class Pc extends HTMLElement{constructor(){super(),this._style=null,Sc.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const t=this.querySelector("style");if(!t)return null;this._style=t;const i=t.getAttribute(Ws);return i&&(t.removeAttribute(Ws),t.textContent=ua(i)+t.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",Pc);pr(HTMLElement).prototype;const Sr=Ce`
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
</custom-style>`;Sr.setAttribute("style","display: none;");document.head.appendChild(Sr.content);var Pr=document.createElement("style");Pr.textContent="[hidden] { display: none !important; }";document.head.appendChild(Pr);const Er=Ce`
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
</custom-style>`;Er.setAttribute("style","display: none;");document.head.appendChild(Er.content);const Ar=Ce`
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
</dom-module>`;Ar.setAttribute("style","display: none;");document.head.appendChild(Ar.content);const Ec={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){this._setFocused(e.type==="focus")},_disabledChanged:function(e,t){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(this._oldTabIndex===null?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};var Js={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},Ac={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},Gs={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},Tc=/[a-z0-9*]/,Oc=/U\+/,Nc=/^arrow/,kc=/^space(bar)?/,Mc=/^escape$/;function Xs(e,t){var i="";if(e){var n=e.toLowerCase();n===" "||kc.test(n)?i="space":Mc.test(n)?i="esc":n.length==1?(!t||Tc.test(n))&&(i=n):Nc.test(n)?i=n.replace("arrow",""):n=="multiply"?i="*":i=n}return i}function Rc(e){var t="";return e&&(e in Js?t=Js[e]:Oc.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=String.fromCharCode(e).toLowerCase()):t=e.toLowerCase()),t}function Dc(e){var t="";return Number(e)&&(e>=65&&e<=90?t=String.fromCharCode(32+e):e>=112&&e<=123?t="f"+(e-112+1):e>=48&&e<=57?t=String(e-48):e>=96&&e<=105?t=String(e-96):t=Ac[e]),t}function Ic(e,t){return e.key?Xs(e.key,t):e.detail&&e.detail.key?Xs(e.detail.key,t):Rc(e.keyIdentifier)||Dc(e.keyCode)||""}function Qs(e,t){var i=Ic(t,e.hasModifiers);return i===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function Lc(e){return e.length===1?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(t,i){var n=i.split(":"),s=n[0],r=n[1];return s in Gs?(t[Gs[s]]=!0,t.hasModifiers=!0):(t.key=s,t.event=r||"keydown"),t},{combo:e.split(":").shift()})}function Zs(e){return e.trim().split(" ").map(function(t){return Lc(t)})}const Tr={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var i=Zs(t),n=0;n<i.length;++n)if(Qs(i[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(t){return t.keyBindings});return e.indexOf(this.keyBindings)===-1&&e.push(this.keyBindings),e},_prepKeyBindings:function(){this._keyBindings={},this._collectKeyBindings().forEach(function(i){for(var n in i)this._addKeyBinding(n,i[n])},this);for(var e in this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(i,n){var s=i[0].hasModifiers,r=n[0].hasModifiers;return s===r?0:s?-1:1})},_addKeyBinding:function(e,t){Zs(e).forEach(function(i){this._keyBindings[i.event]=this._keyBindings[i.event]||[],this._keyBindings[i.event].push([i,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],i=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,i]),this.keyEventTarget.addEventListener(e,i)},this)},_unlistenKeyEventListeners:function(){for(var e,t,i,n;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],i=e[1],n=e[2],t.removeEventListener(i,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var i=0;i<e.length;i++){var n=e[i][0],s=e[i][1];if(Qs(n,t)&&(this._triggerKeyHandler(n,s,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,i){var n=Object.create(e);n.keyboardEvent=i;var s=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,s),s.defaultPrevented&&i.preventDefault()}};const Pt={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(e){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,i=P(t).localTarget;this.isLightDescendant(i)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,i=P(t).localTarget;this.isLightDescendant(i)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(e){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e,t){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}},Bc=[Tr,Pt];var L={distance:function(e,t,i,n){var s=e-i,r=t-n;return Math.sqrt(s*s+r*r)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};function Or(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Math.max(this.width,this.height)}Or.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var i=L.distance(e,t,0,0),n=L.distance(e,t,this.width,0),s=L.distance(e,t,0,this.height),r=L.distance(e,t,this.width,this.height);return Math.max(i,n,s,r)}};function X(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),P(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}X.MAX_RADIUS=300;X.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=L.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?L.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,i=Math.min(Math.sqrt(e+t),X.MAX_RADIUS)*1.1+5,n=1.1-.2*(i/X.MAX_RADIUS),s=this.mouseInteractionSeconds/n,r=i*(1-Math.pow(80,-s));return Math.abs(r)},get opacity(){return this.mouseUpStart?Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=this.mouseUpElapsedSeconds*.3,t=this.opacity;return Math.max(0,Math.min(e,t))},get isOpacityFullyDecayed(){return this.opacity<.01&&this.radius>=Math.min(this.maxRadius,X.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,X.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,this.radius/this.containerMetrics.size*2/Math.sqrt(2))},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Or(this.element)},draw:function(){var e,t,i;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,i=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+i+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+i+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,i=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=L.now(),this.center?(this.xStart=t,this.yStart=i,this.slideDistance=L.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=i,this.slideDistance=L.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(e){this.isMouseDown&&(this.mouseUpStart=L.now())},remove:function(){P(P(this.waveContainer).parentNode).removeChild(this.waveContainer)}};Ft({_template:Ce`
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
`,is:"paper-ripple",behaviors:[Tr],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){P(this).parentNode.nodeType==11?this.keyEventTarget=P(this).getOwnerRoot().host:this.keyEventTarget=P(this).parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){if(!(this.holdDown&&this.ripples.length>0)){var t=this.addRipple();t.downAction(e),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor="",this.fire("transitionend")},addRipple:function(){var e=new X(this);return P(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);t<0||(this.ripples.splice(t,1),e.remove(),this.ripples.length||this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);!this.shouldKeepAnimating&&this.ripples.length===0?this.onAnimationComplete():window.requestAnimationFrame(this._boundAnimate)}},animateRipple:function(){return this.animate()},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){t!==void 0&&(e?this.downAction():this.upAction())}});const Fc={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){Pt._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&P(t).appendChild(this._ripple),e){var i=P(this._rippleContainer||this),n=P(e).rootTarget;i.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var e=document.createElement("paper-ripple");return e},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}};const Nr={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var e=1;this.disabled?e=0:this.active||this.pressed?e=4:this.receivedFocusFromKeyboard&&(e=3),this._setElevation(e)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){Pt._spaceKeyDownHandler.call(this,e),this.hasRipple()&&this.getRipple().ripples.length<1&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){Pt._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}},zc=[Bc,Ec,Fc,Nr];const kr=Ce`
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

  <slot></slot>`;kr.setAttribute("strip-whitespace","");Ft({_template:kr,is:"paper-button",behaviors:[zc],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Nr._calculateElevation.apply(this):this._setElevation(0)}});const Hc=e=>e??dt;function*Mr(e,t){if(e!==void 0){let i=0;for(const n of e)yield t(n,i++)}}const $c={duration:250},Uc=e=>(t,i,n)=>{const s="max"+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[s]:"",display:""});const{[e]:r}=t.getBoundingClientRect(),o=[0,r],[a,l]=i?o:o.slice().reverse(),c=t.animate([{[s]:`${a}px`},{[s]:`${l}px`}],{...$c,...n});c.onfinish=()=>Object.assign(t.style,{[s]:"",display:i?"":"none"})},Rr=e=>{const t=H(()=>({}),[]);return H(()=>Object.assign(t,e),[t,...Object.values(e)])},en=e=>e.matches(":focus-within"),jc=({disabled:e,onFocus:t})=>{const[i,n]=ie(),{focused:s,closed:r}=i||{},o=s&&!e,a=Rr({closed:r,onFocus:t}),l=qt(u=>n(d=>({...d,closed:u})),[]),c=qt(u=>{const d=u.currentTarget;return en(d)?n(h=>({focused:!0,closed:!h?.closed})):d.focus()},[]);return te(()=>{if(!o)return;const u=d=>{if(d.defaultPrevented)return;const{closed:h}=a;d.key==="Escape"&&!h?(d.preventDefault(),l(!0)):["ArrowUp","Up"].includes(d.key)&&h&&(d.preventDefault(),l(!1))};return document.addEventListener("keydown",u,!0),()=>document.removeEventListener("keydown",u,!0)},[o]),{focused:o,active:o&&!r,setClosed:l,onToggle:c,onFocus:qt(u=>{const d=en(u.currentTarget);n({focused:d}),a.onFocus?.(d)},[a])}},tn=["focusin","focusout"],Kc=e=>{const t=jc(e),{onFocus:i}=t;return te(()=>(e.setAttribute("tabindex","0"),tn.forEach(n=>e.addEventListener(n,i)),()=>{tn.forEach(n=>e.removeEventListener(n,i))}),[]),t},Vc=kt`
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
`,qc=()=>M` <slot></slot> `;customElements.define("cosmoz-dropdown-list",ve(qc,{styleSheets:[Vc]}));const Yc=({placement:e})=>M` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`;customElements.define("cosmoz-dropdown-menu",ve(Yc));function Wc(e,t,i){return e?t(e):i?.(e)}const ti=new WeakMap,sn=Mt(class extends bn{render(e){return dt}update(e,[t]){const i=t!==this.G;return i&&this.G!==void 0&&this.rt(void 0),(i||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),dt}rt(e){if(this.isConnected||(e=void 0),typeof this.G=="function"){const t=this.ht??globalThis;let i=ti.get(t);i===void 0&&(i=new WeakMap,ti.set(t,i)),i.get(this.G)!==void 0&&this.G.call(this.ht,void 0),i.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G=="function"?ti.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}});const Dr="important",Jc=" !"+Dr,Gc=Mt(class extends Pi{constructor(e){if(super(e),e.type!==yn.ATTRIBUTE||e.name!=="style"||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,i)=>{const n=e[i];return n==null?t:t+`${i=i.includes("-")?i:i.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${n};`},"")}update(e,[t]){const{style:i}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const n of this.ft)t[n]==null&&(this.ft.delete(n),n.includes("-")?i.removeProperty(n):i[n]=null);for(const n in t){const s=t[n];if(s!=null){this.ft.add(n);const r=typeof s=="string"&&s.endsWith(Jc);n.includes("-")||r?i.setProperty(n,r?s.slice(0,-11):s,r?Dr:""):i[n]=s}}return He}});const Xc={},Qc=Mt(class extends Pi{constructor(){super(...arguments),this.ot=Xc}render(e,t){return t()}update(e,[t,i]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((n,s)=>n===this.ot[s]))return He}else if(this.ot===t)return He;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,i)}}),Zc=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent("connected"))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent("disconnected"))}},eu=kt`
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
`,tu=()=>M`<div class="wrap" part="wrap"><slot></slot></div>`;customElements.define("cosmoz-dropdown-content",Zc(ve(tu,{styleSheets:[eu]})));const Et=Math.min,ne=Math.max,At=Math.round,nt=Math.floor,B=e=>({x:e,y:e}),iu={left:"right",right:"left",bottom:"top",top:"bottom"},su={start:"end",end:"start"};function nn(e,t,i){return ne(e,Et(t,i))}function Vi(e,t){return typeof e=="function"?e(t):e}function ye(e){return e.split("-")[0]}function qi(e){return e.split("-")[1]}function Ir(e){return e==="x"?"y":"x"}function Lr(e){return e==="y"?"height":"width"}const nu=new Set(["top","bottom"]);function Z(e){return nu.has(ye(e))?"y":"x"}function Br(e){return Ir(Z(e))}function ru(e,t,i){i===void 0&&(i=!1);const n=qi(e),s=Br(e),r=Lr(s);let o=s==="x"?n===(i?"end":"start")?"right":"left":n==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(o=Tt(o)),[o,Tt(o)]}function ou(e){const t=Tt(e);return[xi(e),t,xi(t)]}function xi(e){return e.replace(/start|end/g,t=>su[t])}const rn=["left","right"],on=["right","left"],au=["top","bottom"],lu=["bottom","top"];function cu(e,t,i){switch(e){case"top":case"bottom":return i?t?on:rn:t?rn:on;case"left":case"right":return t?au:lu;default:return[]}}function uu(e,t,i,n){const s=qi(e);let r=cu(ye(e),i==="start",n);return s&&(r=r.map(o=>o+"-"+s),t&&(r=r.concat(r.map(xi)))),r}function Tt(e){return e.replace(/left|right|bottom|top/g,t=>iu[t])}function du(e){return{top:0,right:0,bottom:0,left:0,...e}}function hu(e){return typeof e!="number"?du(e):{top:e,right:e,bottom:e,left:e}}function Ot(e){const{x:t,y:i,width:n,height:s}=e;return{width:n,height:s,top:i,left:t,right:t+n,bottom:i+s,x:t,y:i}}function an(e,t,i){let{reference:n,floating:s}=e;const r=Z(t),o=Br(t),a=Lr(o),l=ye(t),c=r==="y",u=n.x+n.width/2-s.width/2,d=n.y+n.height/2-s.height/2,h=n[a]/2-s[a]/2;let p;switch(l){case"top":p={x:u,y:n.y-s.height};break;case"bottom":p={x:u,y:n.y+n.height};break;case"right":p={x:n.x+n.width,y:d};break;case"left":p={x:n.x-s.width,y:d};break;default:p={x:n.x,y:n.y}}switch(qi(t)){case"start":p[o]-=h*(i&&c?-1:1);break;case"end":p[o]+=h*(i&&c?-1:1);break}return p}const pu=async(e,t,i)=>{const{placement:n="bottom",strategy:s="absolute",middleware:r=[],platform:o}=i,a=r.filter(Boolean),l=await(o.isRTL==null?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:s}),{x:u,y:d}=an(c,n,l),h=n,p={},f=0;for(let g=0;g<a.length;g++){const{name:y,fn:_}=a[g],{x:b,y:w,data:S,reset:x}=await _({x:u,y:d,initialPlacement:n,placement:h,strategy:s,middlewareData:p,rects:c,platform:o,elements:{reference:e,floating:t}});u=b??u,d=w??d,p={...p,[y]:{...p[y],...S}},x&&f<=50&&(f++,typeof x=="object"&&(x.placement&&(h=x.placement),x.rects&&(c=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:s}):x.rects),{x:u,y:d}=an(c,h,l)),g=-1)}return{x:u,y:d,placement:h,strategy:s,middlewareData:p}};async function Fr(e,t){var i;t===void 0&&(t={});const{x:n,y:s,platform:r,rects:o,elements:a,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:p=0}=Vi(t,e),f=hu(p),y=a[h?d==="floating"?"reference":"floating":d],_=Ot(await r.getClippingRect({element:(i=await(r.isElement==null?void 0:r.isElement(y)))==null||i?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(a.floating)),boundary:c,rootBoundary:u,strategy:l})),b=d==="floating"?{x:n,y:s,width:o.floating.width,height:o.floating.height}:o.reference,w=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a.floating)),S=await(r.isElement==null?void 0:r.isElement(w))?await(r.getScale==null?void 0:r.getScale(w))||{x:1,y:1}:{x:1,y:1},x=Ot(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:a,rect:b,offsetParent:w,strategy:l}):b);return{top:(_.top-x.top+f.top)/S.y,bottom:(x.bottom-_.bottom+f.bottom)/S.y,left:(_.left-x.left+f.left)/S.x,right:(x.right-_.right+f.right)/S.x}}const fu=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var i,n;const{placement:s,middlewareData:r,rects:o,initialPlacement:a,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:h,fallbackStrategy:p="bestFit",fallbackAxisSideDirection:f="none",flipAlignment:g=!0,...y}=Vi(e,t);if((i=r.arrow)!=null&&i.alignmentOffset)return{};const _=ye(s),b=Z(a),w=ye(a)===a,S=await(l.isRTL==null?void 0:l.isRTL(c.floating)),x=h||(w||!g?[Tt(a)]:ou(a)),Se=f!=="none";!h&&Se&&x.push(...uu(a,g,f,S));const ae=[a,...x],jt=await Fr(t,y),Qe=[];let le=((n=r.flip)==null?void 0:n.overflows)||[];if(u&&Qe.push(jt[_]),d){const J=ru(s,o,S);Qe.push(jt[J[0]],jt[J[1]])}if(le=[...le,{placement:s,overflows:Qe}],!Qe.every(J=>J<=0)){var Gi,Xi;const J=(((Gi=r.flip)==null?void 0:Gi.index)||0)+1,Kt=ae[J];if(Kt&&(!(d==="alignment"?b!==Z(Kt):!1)||le.every(R=>Z(R.placement)===b?R.overflows[0]>0:!0)))return{data:{index:J,overflows:le},reset:{placement:Kt}};let Pe=(Xi=le.filter(G=>G.overflows[0]<=0).sort((G,R)=>G.overflows[1]-R.overflows[1])[0])==null?void 0:Xi.placement;if(!Pe)switch(p){case"bestFit":{var Qi;const G=(Qi=le.filter(R=>{if(Se){const j=Z(R.placement);return j===b||j==="y"}return!0}).map(R=>[R.placement,R.overflows.filter(j=>j>0).reduce((j,Wr)=>j+Wr,0)]).sort((R,j)=>R[1]-j[1])[0])==null?void 0:Qi[0];G&&(Pe=G);break}case"initialPlacement":Pe=a;break}if(s!==Pe)return{reset:{placement:Pe}}}return{}}}},_u=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:i,y:n,placement:s}=t,{mainAxis:r=!0,crossAxis:o=!1,limiter:a={fn:y=>{let{x:_,y:b}=y;return{x:_,y:b}}},...l}=Vi(e,t),c={x:i,y:n},u=await Fr(t,l),d=Z(ye(s)),h=Ir(d);let p=c[h],f=c[d];if(r){const y=h==="y"?"top":"left",_=h==="y"?"bottom":"right",b=p+u[y],w=p-u[_];p=nn(b,p,w)}if(o){const y=d==="y"?"top":"left",_=d==="y"?"bottom":"right",b=f+u[y],w=f-u[_];f=nn(b,f,w)}const g=a.fn({...t,[h]:p,[d]:f});return{...g,data:{x:g.x-i,y:g.y-n,enabled:{[h]:r,[d]:o}}}}}};function zt(){return typeof window<"u"}function xe(e){return zr(e)?(e.nodeName||"").toLowerCase():"#document"}function N(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function z(e){var t;return(t=(zr(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function zr(e){return zt()?e instanceof Node||e instanceof N(e).Node:!1}function D(e){return zt()?e instanceof Element||e instanceof N(e).Element:!1}function F(e){return zt()?e instanceof HTMLElement||e instanceof N(e).HTMLElement:!1}function ln(e){return!zt()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof N(e).ShadowRoot}const mu=new Set(["inline","contents"]);function Xe(e){const{overflow:t,overflowX:i,overflowY:n,display:s}=I(e);return/auto|scroll|overlay|hidden|clip/.test(t+n+i)&&!mu.has(s)}const yu=new Set(["table","td","th"]);function gu(e){return yu.has(xe(e))}const bu=[":popover-open",":modal"];function Ht(e){return bu.some(t=>{try{return e.matches(t)}catch{return!1}})}const wu=["transform","translate","scale","rotate","perspective"],vu=["transform","translate","scale","rotate","perspective","filter"],Cu=["paint","layout","strict","content"];function Yi(e){const t=Wi(),i=D(e)?I(e):e;return wu.some(n=>i[n]?i[n]!=="none":!1)||(i.containerType?i.containerType!=="normal":!1)||!t&&(i.backdropFilter?i.backdropFilter!=="none":!1)||!t&&(i.filter?i.filter!=="none":!1)||vu.some(n=>(i.willChange||"").includes(n))||Cu.some(n=>(i.contain||"").includes(n))}function xu(e){let t=Y(e);for(;F(t)&&!ge(t);){if(Yi(t))return t;if(Ht(t))return null;t=Y(t)}return null}function Wi(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const Su=new Set(["html","body","#document"]);function ge(e){return Su.has(xe(e))}function I(e){return N(e).getComputedStyle(e)}function $t(e){return D(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Y(e){if(xe(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ln(e)&&e.host||z(e);return ln(t)?t.host:t}function Hr(e){const t=Y(e);return ge(t)?e.ownerDocument?e.ownerDocument.body:e.body:F(t)&&Xe(t)?t:Hr(t)}function Je(e,t,i){var n;t===void 0&&(t=[]),i===void 0&&(i=!0);const s=Hr(e),r=s===((n=e.ownerDocument)==null?void 0:n.body),o=N(s);if(r){const a=Si(o);return t.concat(o,o.visualViewport||[],Xe(s)?s:[],a&&i?Je(a):[])}return t.concat(s,Je(s,[],i))}function Si(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function $r(e){const t=I(e);let i=parseFloat(t.width)||0,n=parseFloat(t.height)||0;const s=F(e),r=s?e.offsetWidth:i,o=s?e.offsetHeight:n,a=At(i)!==r||At(n)!==o;return a&&(i=r,n=o),{width:i,height:n,$:a}}function Ji(e){return D(e)?e:e.contextElement}function fe(e){const t=Ji(e);if(!F(t))return B(1);const i=t.getBoundingClientRect(),{width:n,height:s,$:r}=$r(t);let o=(r?At(i.width):i.width)/n,a=(r?At(i.height):i.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!a||!Number.isFinite(a))&&(a=1),{x:o,y:a}}const Pu=B(0);function Ur(e){const t=N(e);return!Wi()||!t.visualViewport?Pu:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Eu(e,t,i){return t===void 0&&(t=!1),!i||t&&i!==N(e)?!1:t}function oe(e,t,i,n){t===void 0&&(t=!1),i===void 0&&(i=!1);const s=e.getBoundingClientRect(),r=Ji(e);let o=B(1);t&&(n?D(n)&&(o=fe(n)):o=fe(e));const a=Eu(r,i,n)?Ur(r):B(0);let l=(s.left+a.x)/o.x,c=(s.top+a.y)/o.y,u=s.width/o.x,d=s.height/o.y;if(r){const h=N(r),p=n&&D(n)?N(n):n;let f=h,g=Si(f);for(;g&&n&&p!==f;){const y=fe(g),_=g.getBoundingClientRect(),b=I(g),w=_.left+(g.clientLeft+parseFloat(b.paddingLeft))*y.x,S=_.top+(g.clientTop+parseFloat(b.paddingTop))*y.y;l*=y.x,c*=y.y,u*=y.x,d*=y.y,l+=w,c+=S,f=N(g),g=Si(f)}}return Ot({width:u,height:d,x:l,y:c})}function Ut(e,t){const i=$t(e).scrollLeft;return t?t.left+i:oe(z(e)).left+i}function jr(e,t){const i=e.getBoundingClientRect(),n=i.left+t.scrollLeft-Ut(e,i),s=i.top+t.scrollTop;return{x:n,y:s}}function Au(e){let{elements:t,rect:i,offsetParent:n,strategy:s}=e;const r=s==="fixed",o=z(n),a=t?Ht(t.floating):!1;if(n===o||a&&r)return i;let l={scrollLeft:0,scrollTop:0},c=B(1);const u=B(0),d=F(n);if((d||!d&&!r)&&((xe(n)!=="body"||Xe(o))&&(l=$t(n)),F(n))){const p=oe(n);c=fe(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}const h=o&&!d&&!r?jr(o,l):B(0);return{width:i.width*c.x,height:i.height*c.y,x:i.x*c.x-l.scrollLeft*c.x+u.x+h.x,y:i.y*c.y-l.scrollTop*c.y+u.y+h.y}}function Tu(e){return Array.from(e.getClientRects())}function Ou(e){const t=z(e),i=$t(e),n=e.ownerDocument.body,s=ne(t.scrollWidth,t.clientWidth,n.scrollWidth,n.clientWidth),r=ne(t.scrollHeight,t.clientHeight,n.scrollHeight,n.clientHeight);let o=-i.scrollLeft+Ut(e);const a=-i.scrollTop;return I(n).direction==="rtl"&&(o+=ne(t.clientWidth,n.clientWidth)-s),{width:s,height:r,x:o,y:a}}const cn=25;function Nu(e,t){const i=N(e),n=z(e),s=i.visualViewport;let r=n.clientWidth,o=n.clientHeight,a=0,l=0;if(s){r=s.width,o=s.height;const u=Wi();(!u||u&&t==="fixed")&&(a=s.offsetLeft,l=s.offsetTop)}const c=Ut(n);if(c<=0){const u=n.ownerDocument,d=u.body,h=getComputedStyle(d),p=u.compatMode==="CSS1Compat"&&parseFloat(h.marginLeft)+parseFloat(h.marginRight)||0,f=Math.abs(n.clientWidth-d.clientWidth-p);f<=cn&&(r-=f)}else c<=cn&&(r+=c);return{width:r,height:o,x:a,y:l}}const ku=new Set(["absolute","fixed"]);function Mu(e,t){const i=oe(e,!0,t==="fixed"),n=i.top+e.clientTop,s=i.left+e.clientLeft,r=F(e)?fe(e):B(1),o=e.clientWidth*r.x,a=e.clientHeight*r.y,l=s*r.x,c=n*r.y;return{width:o,height:a,x:l,y:c}}function un(e,t,i){let n;if(t==="viewport")n=Nu(e,i);else if(t==="document")n=Ou(z(e));else if(D(t))n=Mu(t,i);else{const s=Ur(e);n={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Ot(n)}function Kr(e,t){const i=Y(e);return i===t||!D(i)||ge(i)?!1:I(i).position==="fixed"||Kr(i,t)}function Ru(e,t){const i=t.get(e);if(i)return i;let n=Je(e,[],!1).filter(a=>D(a)&&xe(a)!=="body"),s=null;const r=I(e).position==="fixed";let o=r?Y(e):e;for(;D(o)&&!ge(o);){const a=I(o),l=Yi(o);!l&&a.position==="fixed"&&(s=null),(r?!l&&!s:!l&&a.position==="static"&&!!s&&ku.has(s.position)||Xe(o)&&!l&&Kr(e,o))?n=n.filter(u=>u!==o):s=a,o=Y(o)}return t.set(e,n),n}function Du(e){let{element:t,boundary:i,rootBoundary:n,strategy:s}=e;const o=[...i==="clippingAncestors"?Ht(t)?[]:Ru(t,this._c):[].concat(i),n],a=o[0],l=o.reduce((c,u)=>{const d=un(t,u,s);return c.top=ne(d.top,c.top),c.right=Et(d.right,c.right),c.bottom=Et(d.bottom,c.bottom),c.left=ne(d.left,c.left),c},un(t,a,s));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function Iu(e){const{width:t,height:i}=$r(e);return{width:t,height:i}}function Lu(e,t,i){const n=F(t),s=z(t),r=i==="fixed",o=oe(e,!0,r,t);let a={scrollLeft:0,scrollTop:0};const l=B(0);function c(){l.x=Ut(s)}if(n||!n&&!r)if((xe(t)!=="body"||Xe(s))&&(a=$t(t)),n){const p=oe(t,!0,r,t);l.x=p.x+t.clientLeft,l.y=p.y+t.clientTop}else s&&c();r&&!n&&s&&c();const u=s&&!n&&!r?jr(s,a):B(0),d=o.left+a.scrollLeft-l.x-u.x,h=o.top+a.scrollTop-l.y-u.y;return{x:d,y:h,width:o.width,height:o.height}}function ii(e){return I(e).position==="static"}function dn(e,t){if(!F(e)||I(e).position==="fixed")return null;if(t)return t(e);let i=e.offsetParent;return z(e)===i&&(i=i.ownerDocument.body),i}function Vr(e,t){const i=N(e);if(Ht(e))return i;if(!F(e)){let s=Y(e);for(;s&&!ge(s);){if(D(s)&&!ii(s))return s;s=Y(s)}return i}let n=dn(e,t);for(;n&&gu(n)&&ii(n);)n=dn(n,t);return n&&ge(n)&&ii(n)&&!Yi(n)?i:n||xu(e)||i}const Bu=async function(e){const t=this.getOffsetParent||Vr,i=this.getDimensions,n=await i(e.floating);return{reference:Lu(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Fu(e){return I(e).direction==="rtl"}const zu={convertOffsetParentRelativeRectToViewportRelativeRect:Au,getDocumentElement:z,getClippingRect:Du,getOffsetParent:Vr,getElementRects:Bu,getClientRects:Tu,getDimensions:Iu,getScale:fe,isElement:D,isRTL:Fu};function qr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function Hu(e,t){let i=null,n;const s=z(e);function r(){var a;clearTimeout(n),(a=i)==null||a.disconnect(),i=null}function o(a,l){a===void 0&&(a=!1),l===void 0&&(l=1),r();const c=e.getBoundingClientRect(),{left:u,top:d,width:h,height:p}=c;if(a||t(),!h||!p)return;const f=nt(d),g=nt(s.clientWidth-(u+h)),y=nt(s.clientHeight-(d+p)),_=nt(u),w={rootMargin:-f+"px "+-g+"px "+-y+"px "+-_+"px",threshold:ne(0,Et(1,l))||1};let S=!0;function x(Se){const ae=Se[0].intersectionRatio;if(ae!==l){if(!S)return o();ae?o(!1,ae):n=setTimeout(()=>{o(!1,1e-7)},1e3)}ae===1&&!qr(c,e.getBoundingClientRect())&&o(),S=!1}try{i=new IntersectionObserver(x,{...w,root:s.ownerDocument})}catch{i=new IntersectionObserver(x,w)}i.observe(e)}return o(!0),r}function $u(e,t,i,n){n===void 0&&(n={});const{ancestorScroll:s=!0,ancestorResize:r=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:a=typeof IntersectionObserver=="function",animationFrame:l=!1}=n,c=Ji(e),u=s||r?[...c?Je(c):[],...Je(t)]:[];u.forEach(_=>{s&&_.addEventListener("scroll",i,{passive:!0}),r&&_.addEventListener("resize",i)});const d=c&&a?Hu(c,i):null;let h=-1,p=null;o&&(p=new ResizeObserver(_=>{let[b]=_;b&&b.target===c&&p&&(p.unobserve(t),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var w;(w=p)==null||w.observe(t)})),i()}),c&&!l&&p.observe(c),p.observe(t));let f,g=l?oe(e):null;l&&y();function y(){const _=oe(e);g&&!qr(g,_)&&i(),g=_,f=requestAnimationFrame(y)}return i(),()=>{var _;u.forEach(b=>{s&&b.removeEventListener("scroll",i),r&&b.removeEventListener("resize",i)}),d?.(),(_=p)==null||_.disconnect(),p=null,l&&cancelAnimationFrame(f)}}const Uu=_u,ju=fu,Ku=(e,t,i)=>{const n=new Map,s={platform:zu,...i},r={...s.platform,_c:n};return pu(e,t,{...s,platform:r})},Vu=[ju({fallbackAxisSideDirection:"start",crossAxis:!1}),Uu()],qu=({placement:e="bottom-start",strategy:t,middleware:i=Vu}={})=>{const[n,s]=ie(),[r,o]=ie(),[a,l]=ie();return te(()=>{if(!n||!(r instanceof HTMLElement)){l(void 0);return}return $u(n,r,()=>Ku(n,r,{placement:e,strategy:t,middleware:i}).then(l))},[n,r,e,t,i]),{setReference:s,setFloating:o,styles:H(()=>a?{left:`${a.x}px`,top:`${a.y}px`}:{},[a?.x,a?.y])}},Yu=e=>e.preventDefault(),Wu=kt`
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
`,Ju=e=>{const{placement:t,strategy:i,middleware:n,render:s}=e,{active:r,onToggle:o}=Kc(e),{styles:a,setReference:l,setFloating:c}=qu({placement:t,strategy:i,middleware:n});return M` <div class="anchor" part="anchor" ${sn(l)}>
			<button
				@mousedown=${Yu}
				@click=${o}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		${Wc(r,()=>M`<cosmoz-dropdown-content
					popover
					id="content"
					part="content"
					exportparts="wrap, content"
					style="${Gc(a)}"
					@connected=${u=>u.target.showPopover?.()}
					${sn(c)}
					><slot></slot>${Qc([s],()=>s?.()||dt)}</cosmoz-dropdown-content
				> `)}`};customElements.define("cosmoz-dropdown",ve(Ju,{styleSheets:[Wu]}));function Gu(e){return()=>e}const Xu=Gu(),Qu=Xu,Yr=bo(()=>Qu);customElements.define("cosmoz-keybinding-provider",Yr.Provider);const Zu=(e,t)=>{const i=mn(Yr),n=Rr(e);te(()=>i(n),t)};function ed(e){return e.boundingClientRect.height===0}function td(e){return e.getBoundingClientRect().height===0}const id=e=>{if(e.element.tagName!=="SLOT")throw new Error("Overflow directive must be used on a slot element")};function sd(e,t){e.forEach(i=>{td(i)||(t.add(i),e.delete(i))})}const nd=(e,t)=>{let i=new Set,n=new Set,s=new Set;const r=new IntersectionObserver(a=>{a.forEach(l=>{const c=l.target;l.boundingClientRect.width===l.intersectionRect.width&&l.intersectionRect.height!==0?(i.add(c),n.delete(c),s.delete(c)):ed(l)?(i.delete(c),n.delete(c),s.add(c)):(i.delete(c),n.add(c),s.delete(c))}),sd(s,n),t({visible:i,overflowing:n,hidden:s})},{root:e.parentElement,threshold:[0,.5,1]}),o=()=>{const a=Array.from(e.assignedElements({flatten:!0})),l=new Set,c=new Set,u=new Set;for(const d of a)i.has(d)?l.add(d):n.has(d)?c.add(d):s.has(d)?u.add(d):r.observe(d);i=l,n=c,s=u,t({visible:i,overflowing:n,hidden:s})};return o(),e.addEventListener("slotchange",o),()=>{e.removeEventListener("slotchange",o),r.disconnect()}};class rd extends bn{observer;slot;cleanup;render(){return He}update(t,[i]){return id(t),this.slot!==t.element&&(this.cleanup&&(this.cleanup(),this.cleanup=void 0),this.slot=t.element,this.cleanup=nd(this.slot,i)),He}}const od=Mt(rd),ad=kt`
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
		border-color: transparent;
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
`,ld=Symbol("openMenu"),cd=e=>{const t=e.shadowRoot?.querySelector("#dropdown");if(!t||t.hasAttribute("hidden"))return;t.shadowRoot?.querySelector("cosmoz-dropdown")?.shadowRoot?.querySelector("#dropdownButton")?.click()},ud=e=>{const[t,i]=ie({visible:new Set,overflowing:new Set});te(()=>{e.dispatchEvent(new CustomEvent("reflow",{detail:t}))},[t]);const n=H(()=>[...t.visible,...t.overflowing],[t]),s=H(()=>n.map(l=>({element:l,priority:Number(l.dataset.priority??0),text:l.textContent?.trim()||""})).toSorted((l,c)=>c.priority-l.priority),[n]),{maxToolbarItems:r=1}=e,o=Math.min(r,t.visible.size);te(()=>{s.forEach(({element:l,priority:c},u)=>{const d=u<o;l.dataset.visibility=d?"visible":"hidden",l.style.order=String(-c)})},[s,o]);const a=H(()=>s.slice(o).sort((l,c)=>c.element.compareDocumentPosition(l.element)-l.element.compareDocumentPosition(c.element)),[s,o]);return te(()=>{e.toggleAttribute("has-menu-items",a.length>0)},[a.length]),{setButtonStates:i,menuButtons:a}},dd=e=>{const{active:t=!1}=e,i=fo(!1);Zu({activity:ld,callback:()=>cd(e),check:()=>t&&!e.hasAttribute("hide-actions"),element:()=>e.shadowRoot?.querySelector("#dropdown")},[t]);const{setButtonStates:n,menuButtons:s}=ud(e),r=H(()=>Uc("height"),[]);return ho(()=>{i.current?r(e,t):r(e,t,{duration:0}),i.current=!0},[t]),M` <div id="bar" part="bar">
		<div id="info" part="info"><slot name="info"></slot></div>
		<div id="buttonContainer" part="buttons">
			<slot id="bottomBarToolbar" ${od(n)}></slot>
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
			${Mr(s,o=>M`
					<button @click=${()=>o.element.click()}>
						${o.text}
					</button>
				`)}
		</cosmoz-dropdown-menu>
		<slot name="extra" id="extraSlot"></slot>
	</div>`};customElements.define("cosmoz-bottom-bar",ve(dd,{observedAttributes:["active","max-toolbar-items"],styleSheets:[ad]}));const Nt=`
	<slot name="extra" slot="extra"></slot>
`;M(Object.assign([Nt],{raw:[Nt]}));Ce(Object.assign([Nt],{raw:[Nt]}));function hd(e){const t=[...e];for(let i=t.length-1;i>0;i--){const n=Math.floor(Math.random()*(i+1));[t[i],t[n]]=[t[n],t[i]]}return t}const pd=e=>{const{active:t,maxToolbarItems:i}=e,[n,s]=ie(""),[r,o]=ie(hd([{onClick:()=>alert("Button 1 clicked"),priority:10,text:"Button 1"},{onClick:()=>alert("Button 2 clicked"),text:"Button 2"},{onClick:()=>alert("Button 3 clicked"),text:"Button 3"},{onClick:()=>alert("Button 4 clicked"),priority:5,text:"Button 4"},{onClick:()=>alert("Button 5 clicked"),text:"Button 5"}].concat(...Array.from({length:100},(u,d)=>{const h=d+6;return{onClick:()=>alert("Button "+h+" clicked"),text:"Button "+h,priority:h}})))),a=u=>{const d=u.target;s(d.value)},l=u=>{const d=u?u.trim():"";o([...r,{onClick:()=>alert("!!Button "+d+" clicked"),priority:d?+d:void 0,text:"Button "+d}]),u&&s("")};return M`
        <input
            .value=${n}
            placeholder="priority"
            type="number"
            @input=${a}
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
            ${Mr(r,u=>M`<paper-button
                        @click=${u.onClick}
                        data-priority=${Hc(u.priority)}
                        >${u.text}</paper-button
                    >`)}
        </cosmoz-bottom-bar>
    `};customElements.define("cosmoz-bottom-bar-story",ve(pd,{observedAttributes:["active","max-toolbar-items"]}));const fd=e=>M`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,_d=({active:e,maxToolbarItems:t})=>M`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,wd={title:"Cosmoz Bottom Bar",render:fd,argTypes:{active:{control:"boolean"},maxToolbarItems:{control:"number"}},parameters:{docs:{description:{component:"The Cosmoz Bottom Bar web component"}}}},rt={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The basic version"}}}},ot={render:_d,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:"The empty cosmoz-bottom-bar"}}}};rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
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
}`,...rt.parameters?.docs?.source}}};ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
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
}`,...ot.parameters?.docs?.source}}};const vd=["Basic","Empty"];export{rt as Basic,ot as Empty,vd as __namedExportsOrder,wd as default};
