import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c}from"./iframe-C56Edpdj.js";function l(e){f=e}function u(){f=null,p=0}function d(){return p++}var f,p;function m(){return(m=e((()=>{p=0})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=Symbol(`haunted.phase`),g=Symbol(`haunted.hook`),_=Symbol(`haunted.update`),v=Symbol(`haunted.commit`),y=Symbol(`haunted.effects`),b=Symbol(`haunted.layoutEffects`),x=`haunted.context`})))()}var ee;function C(){return(C=e((()=>{m(),S(),ee=class{update;host;virtual;[g];[y];[b];constructor(e,t){this.update=e,this.host=t,this[g]=new Map,this[y]=[],this[b]=[]}run(e){l(this);let t=e();return u(),t}_runEffects(e){let t=this[e];l(this);for(let e of t)e.call(this);u()}runEffects(){this._runEffects(y)}runLayoutEffects(){this._runEffects(b)}teardown(){this[g].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var w;function T(){return(T=e((()=>{w=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function te(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=re(n)}}var ne,re,ie,ae,oe;function se(){return(se=e((()=>{C(),S(),T(),ne=100,re=Promise.resolve().then.bind(Promise.resolve()),ie=te(),ae=te(),oe=class e{renderer;host;state;[h];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ne;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[h]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new w(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,ie(()=>{let e=this.handlePhase(_);ae(()=>{this.handlePhase(v,e),ae(()=>{this.handlePhase(y),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[h]=e,e){case v:this.commit(t),this.runEffects(b);return;case _:return this.render();case y:return this.runEffects(y)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var ce,le,ue,E;function de(){return(de=e((()=>{ce=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},le=e=>e?.map(e=>typeof e==`string`?ce(e):e),ue=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),E=ue})))()}function fe(e){class t extends oe{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=le(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,pe(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),r._scheduler?.update(),!0):(Reflect.set(e,t,n,r),r._scheduler?.update(),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var pe;function me(){return(me=e((()=>{se(),de(),pe=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function he(e,...t){let n=d(),r=f[g],i=r.get(n);return i||(i=new e(n,f,...t),r.set(n,i)),i.update(...t)}function ge(e){return he.bind(null,e)}var _e;function D(){return(D=e((()=>{m(),S(),_e=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function ve(e){return ge(class extends _e{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function ye(){return(ye=e((()=>{D()})))()}function be(e,t){e[y].push(t)}var O;function xe(){return(xe=e((()=>{S(),ye(),O=ve(be)})))()}var Se,Ce;function we(){return(we=e((()=>{D(),S(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=ge(class extends _e{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(x,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(x,this)}disconnectedCallback(){this.removeEventListener(x,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Ee(){return(Ee=e((()=>{S(),we()})))()}var k;function De(){return(De=e((()=>{D(),k=ge(class extends _e{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var A;function Oe(){return(Oe=e((()=>{De(),A=(e,t)=>k(()=>e,t)})))()}function ke(e,t){e[b].push(t)}var Ae;function je(){return(je=e((()=>{S(),ye(),Ae=ve(ke)})))()}var j;function Me(){return(Me=e((()=>{D(),j=ge(class extends _e{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Ne(){return(Ne=e((()=>{D(),ge(class extends _e{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Pe,Fe;function Ie(){return(Ie=e((()=>{D(),Pe=/([A-Z])/gu,Fe=ge(class extends _e{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Pe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Le(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function M(e){return k(()=>Le(e),[])}function Re(){return(Re=e((()=>{De()})))()}function ze(){return(ze=e((()=>{D(),ge(class extends _e{update(){return this.state.host}})})))()}function Be({render:e}){let t=fe(e);return{component:t,createContext:Te(t)}}function Ve(){return(Ve=e((()=>{me(),Ee(),Oe(),xe(),je(),Me(),Ne(),De(),we(),Ie(),Re(),ze(),se()})))()}var He,Ue,We;function Ge(){return(Ge=e((()=>{He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t}),We=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function Ke(e){this._$AN===void 0?this._$AM=e:(Ye(this),this._$AM=e,Xe(this))}function qe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Je(r[e],!1),Ye(r[e]);else r!=null&&(Je(r,!1),Ye(r))}else Je(this,e)}}var Je,Ye,Xe,Ze,Qe;function $e(){return($e=e((()=>{a(),Ge(),Je=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Je(e,t);return!0},Ye=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Xe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ze(t)}},Ze=e=>{e.type==He.CHILD&&(e._$AP??=qe,e._$AQ??=Ke)},Qe=class extends We{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Xe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Je(this,e),Ye(this))}setValue(e){if(s(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function et(){return(et=e((()=>{Ge(),n(),$e(),se(),Array.prototype.includes})))()}var N,tt;function nt(){return(nt=e((()=>{n(),Ve(),et(),{component:N,createContext:tt}=Be({render:t})})))()}function P(){return(P=e((()=>{nt(),Ve(),de()})))()}var rt;function it(){return(it=e((()=>{P(),rt=ce(E`
	/*
	 * Use border-box sizing for all elements.
	 * This is safe and doesn't conflict with child component styles.
	 */
	*,
	::before,
	::after,
	::backdrop,
	::file-selector-button {
		box-sizing: border-box;
	}

	/*
	 * Reset margins and padding on elements that typically have browser defaults.
	 * This is more targeted than using * to avoid affecting custom elements.
	 */
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	ul,
	ol,
	li,
	dl,
	dt,
	dd,
	figure,
	figcaption,
	fieldset,
	legend,
	form,
	hr,
	table,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	/*
	 * Reset borders on elements that typically have them.
	 */
	fieldset,
	hr,
	iframe {
		border: 0 solid;
	}

	/*
	 * 1. Use a consistent sensible line-height in all browsers.
	 * 2. Prevent adjustments of font size after orientation changes in iOS.
	 * 3. Use a more readable tab size.
	 * 4. Use the configured font-family.
	 * 5. Disable tap highlights on iOS.
	 */
	:host {
		line-height: 1.5;
		-webkit-text-size-adjust: 100%;
		tab-size: 4;
		font-family: var(--cz-font-body);
		-webkit-tap-highlight-color: transparent;
	}

	/*
	 * Reset links to optimize for opt-in styling.
	 */
	a {
		color: inherit;
		text-decoration: inherit;
	}

	/*
	 * Add the correct font weight in Edge and Safari.
	 */
	b,
	strong {
		font-weight: bolder;
	}

	/*
	 * 1. Use the configured mono font-family.
	 * 2. Correct the odd em font sizing in all browsers.
	 */
	code,
	kbd,
	samp,
	pre {
		font-family: var(--cz-font-mono);
		font-size: 1em;
	}

	/*
	 * Add the correct font size in all browsers.
	 */
	small {
		font-size: 80%;
	}

	/*
	 * Prevent sub and sup from affecting line height.
	 */
	sub,
	sup {
		font-size: 75%;
		line-height: 0;
		position: relative;
		vertical-align: baseline;
	}

	sub {
		bottom: -0.25em;
	}

	sup {
		top: -0.5em;
	}

	/*
	 * 1. Make replaced elements display: block by default.
	 * 2. Add vertical-align: middle for better alignment.
	 */
	img,
	svg,
	video,
	canvas,
	audio,
	iframe,
	embed,
	object {
		display: block;
		vertical-align: middle;
	}

	/*
	 * Constrain images and videos to parent width.
	 */
	img,
	video {
		max-width: 100%;
		height: auto;
	}

	/*
	 * Reset form controls:
	 * 1. Inherit font styles in all browsers.
	 * 2. Remove default margins, padding, and borders.
	 * 3. Remove border radius.
	 * 4. Remove background color.
	 */
	button,
	input,
	select,
	optgroup,
	textarea,
	::file-selector-button {
		margin: 0;
		padding: 0;
		border: 0 solid;
		font: inherit;
		font-feature-settings: inherit;
		font-variation-settings: inherit;
		letter-spacing: inherit;
		color: inherit;
		border-radius: 0;
		background-color: transparent;
	}

	/*
	 * Reset placeholder opacity in Firefox.
	 */
	::placeholder {
		opacity: 1;
		color: var(--cz-color-text-placeholder, currentcolor);
	}

	/*
	 * Prevent horizontal textarea resize.
	 */
	textarea {
		resize: vertical;
	}

	/*
	 * Remove the inner padding in Chrome and Safari on macOS.
	 */
	::-webkit-search-decoration {
		-webkit-appearance: none;
	}

	/*
	 * Correct the inability to style the border radius in iOS Safari.
	 */
	button,
	input:where([type='button'], [type='reset'], [type='submit']),
	::file-selector-button {
		appearance: button;
	}

	/*
	 * Make elements with hidden attribute stay hidden.
	 */
	[hidden]:where(:not([hidden='until-found'])) {
		display: none !important;
	}
`)})))()}var at,F;function ot(){return(ot=e((()=>{n(),$e(),Ge(),at=new WeakMap,F=Ue(class extends Qe{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=at.get(t);n===void 0&&(n=new WeakMap,at.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?at.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}function st(e,t,n){return e?t(e):n?.(e)}var ct;function lt(){return(lt=e((()=>{it(),P(),n(),ct=E`
	:host {
		display: flex;
		flex-direction: column;
		gap: var(--cosmoz-tooltip-gap, var(--cz-spacing));
		font-family: var(--cz-font-body);
	}

	::slotted([slot='heading']) {
		display: block;
	}

	::slotted([slot='description']) {
		margin: 0;
	}
`,customElements.define(`cosmoz-tooltip-content`,N(()=>c`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[rt,ct]}))})))()}var ut;function dt(){return(dt=e((()=>{P(),ut=ce(E`
	.cosmoz-tooltip-popover {
		position: fixed;
		inset: unset;
		pointer-events: none;
		text-align: left;
		margin: calc(var(--cz-spacing) * 2);
		position-try-fallbacks:
			flip-block,
			flip-inline,
			flip-block flip-inline;

		/* Reset popover defaults */
		border: none;
		white-space: normal;
		padding: var(--cosmoz-tooltip-padding, calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3));
		border-radius: var(--cosmoz-tooltip-border-radius, var(--cz-radius-sm));
		max-width: var(--cosmoz-tooltip-max-width, 20rem);
		box-shadow: var(--cosmoz-tooltip-box-shadow, var(--cz-shadow-lg));
		background: var(--cosmoz-tooltip-bg-color, var(--cz-color-gray-900));
		font-size: var(--cosmoz-tooltip-font-size, var(--cz-text-xs));
		font-weight: var(--cosmoz-tooltip-font-weight, 400);
		line-height: var(--cosmoz-tooltip-line-height, var(--cz-text-xs-line-height));
		color: var(--cosmoz-tooltip-text-color, var(--cz-color-white));

		cosmoz-tooltip-content strong {
			font-weight: var(
	 			--cosmoz-tooltip-heading-font-weight,
	 			var(--cz-font-weight-semibold)
	 		);

			color: var(--cosmoz-tooltip-heading-color);
		}

		/* Animation - open state */
		opacity: 1;
		transform: translateY(0) scale(1);

		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		.cosmoz-tooltip-popover:popover-open {
			opacity: 0;
			transform: translateY(4px) scale(0.96);
		}
	}

	.cosmoz-tooltip-popover:not(:popover-open) {
		opacity: 0;
		transform: translateY(4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		.cosmoz-tooltip-popover {
			transition: none;
		}
	}
`)})))()}var ft,pt;function mt(){return(mt=e((()=>{P(),n(),lt(),dt(),ft=(e,n,r)=>t(c`<cosmoz-tooltip-content>
			${st(n,()=>c`<strong slot="heading">${n}</strong>`)}
			${st(r,()=>c`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),pt=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=M(),l=!!(r||i)&&!s;O(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(ut)||(t.adoptedStyleSheets=[...u,ut]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,ft(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),O(()=>{n&&c.current&&ft(c.current,r,i)},[r,i,n]),O(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var ht;function gt(){return(gt=e((()=>{P(),ht=e=>{let[t,n]=j(!1);return O(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var _t,vt;function yt(){return(yt=e((()=>{it(),P(),n(),ot(),lt(),dt(),mt(),gt(),_t=E`
	:host {
		display: inline-block;
		anchor-name: --tooltip-anchor;
	}

	:host([for]) {
		display: contents;
		anchor-name: unset;
	}

	.cosmoz-tooltip-popover {
		position-anchor: --tooltip-anchor;
	}
`,vt=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:s=!1}=e,l=M(),u=M(),d=M(),f=ht(d),p=!!(t||n||f)&&!s,m=A(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},o))},[o,p]);O(()=>{s&&(clearTimeout(u.current),l.current?.hidePopover())},[s]);let h=A(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return O(()=>{if(i)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[i,m,h]),pt(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:s}),i?r:p?c`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${F(l)}
		>
			<cosmoz-tooltip-content>
				${st(t,()=>c`<strong slot="heading">${t}</strong>`)}
				${st(n,()=>c`<p slot="description">${n}</p>`)}
				<slot name="content" ${F(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:c`
			<slot></slot>
			<slot name="content" ${F(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,N(vt,{styleSheets:[rt,ut,_t],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function bt(){return(bt=e((()=>{yt()})))()}var I;function L(){return(L=e((()=>{n(),I=e=>e??r})))()}var xt,St;function Ct(){return(Ct=e((()=>{xt=(e,t)=>{e.type=`submit`,e.hidden=!0,e.disabled=!!(t.disabled||t.formDisabled),e.name=t.name??``,e.value=t.value??``;for(let n of[`form`,`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`])t.hasAttribute(n)?e.setAttribute(n,t.getAttribute(n)):e.removeAttribute(n)},St=class extends HTMLElement{static formAssociated=!0;#e=this.attachInternals();#t;get form(){return this.#e.form}syncFormButton(){if(!this.isConnected||this.type!==`submit`||this.href!=null){this.#t?.remove(),this.#t=void 0;return}this.#t?xt(this.#t,this):(this.#t=document.createElement(`button`),xt(this.#t,this),this.append(this.#t))}formAssociatedCallback(){this.syncFormButton()}formDisabledCallback(e){this.formDisabled=e,this.syncFormButton()}connectedCallback(){this.addEventListener(`click`,this.#n),this.syncFormButton()}disconnectedCallback(){this.removeEventListener(`click`,this.#n),this.#t?.remove(),this.#t=void 0}#n=e=>{this.#t&&e.composedPath().includes(this.#t)||setTimeout(()=>{if(e.defaultPrevented||!this.isConnected||this.disabled||this.formDisabled||this.href!=null)return;let t=this.form;t&&(this.type===`reset`?t.reset():this.type===`submit`&&(this.syncFormButton(),this.#t&&t.requestSubmit(this.#t)))},0)}}})))()}var wt;function Tt(){return(Tt=e((()=>{P(),wt=E`
	:host {
		display: inline-flex;

		--_wash: var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		--_wash-strong: var(
			--cz-color-bg-glass-hover,
			var(--cz-color-bg-secondary-hover)
		);
		--_hairline: var(--cz-color-border-glass, var(--cz-color-border-primary));
		--_sheen: var(--cz-glass-action-sheen, var(--cz-action-sheen, none));
		--_lift: var(--cz-shadow-xs);
		--_pressed-bg: var(
			--cz-color-bg-glass-action-pressed,
			var(--cz-color-bg-action-solid-hover)
		);
	}

	:host([full-width]) {
		display: flex;
		width: 100%;
	}

	:host([hidden]) {
		display: none;
	}

	/* Keeps the inner control stretching with host-driven sizing. */
	:host > cosmoz-tooltip {
		display: flex;
		width: 100%;
	}

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 6px;
		width: 100%;
		height: var(--cz-control-height-md);
		padding: 0 14px;
		border: 1px solid transparent;
		border-radius: var(--cz-radius-md);
		font-family: var(--cz-font-body);
		font-size: calc((var(--cz-text-sm) + var(--cz-text-xs)) / 2);
		font-weight: var(--cz-font-weight-regular);
		line-height: 1.25;
		letter-spacing: normal;
		text-align: center;
		text-decoration: none;
		white-space: nowrap;
		cursor: pointer;
		user-select: none;
		-webkit-tap-highlight-color: transparent;
		outline: 2px solid transparent;
		outline-offset: 2px;
		transition:
			background-color 120ms ease-out,
			color 120ms ease-out,
			box-shadow 120ms ease-out,
			outline-color 120ms ease-out;

		background:
			var(--cz-glass-action-sheen, var(--cz-action-sheen, none)),
			var(--cz-color-bg-glass-action, var(--cz-color-bg-action-solid));
		border-color: var(--cz-color-border-glass-action, transparent);
		backdrop-filter: var(--cz-backdrop-filter-glass, none);
		color: var(--cz-color-text-on-glass-action, var(--cz-color-text-on-action));
		box-shadow: var(--cz-shadow-glass-action, var(--cz-shadow-action));

		&:hover {
			background-color: var(
				--cz-color-bg-glass-action-hover,
				var(--cz-color-bg-action-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-focus-ring);
		}
	}

	::slotted(iron-icon) {
		pointer-events: none;
		width: 20px;
		height: 20px;
		flex: none;
	}

	::slotted(svg) {
		width: 16px;
		height: 16px;
		flex-shrink: 0;
	}

	::slotted([slot='prefix']) {
		margin-inline-start: -2px;
	}

	::slotted([slot='suffix']) {
		margin-inline-end: -2px;
	}

	/* Sizes */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: 0 12px;
		font-size: var(--cz-text-xs);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 14px;
		height: 14px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: 0 16px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: 0 18px;
		gap: 8px;
		font-size: var(--cz-text-sm);
	}

	:host([size='xl']) ::slotted(svg) {
		width: 18px;
		height: 18px;
	}

	:host([icon-only]) .button {
		border-radius: var(--cz-radius-full);
		width: var(--cz-control-height-md);
		padding: 0;
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
	}

	:host([icon-only]) ::slotted(svg) {
		margin: 0;
	}

	/* Preserve the supplied geometry of standalone icons. */
	:host([icon-only]) ::slotted(svg[width]) {
		width: auto;
	}

	:host([icon-only]) ::slotted(svg[height]) {
		height: auto;
	}

	/* Variants */

	:host([variant='secondary']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-pressed,
			var(--cz-color-bg-secondary-hover)
		);
		background:
			var(--cz-glass-sheen, none),
			var(--cz-color-bg-glass, var(--cz-color-bg-tertiary));
		color: var(--cz-color-text-primary);
		border-color: var(--cz-color-border-glass, var(--cz-color-border-primary));
		box-shadow: var(--cz-shadow-glass, var(--cz-shadow-xs));
		backdrop-filter: var(--cz-backdrop-filter-glass, none);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-hover,
				var(--cz-color-bg-secondary-hover)
			);
		}
	}

	:host([variant='tertiary']) .button {
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background: var(--cz-color-bg-tertiary);
			color: var(--cz-color-text-primary);
		}
	}

	:host([variant='tertiary']) .button:active {
		background: var(--cz-color-bg-quaternary);
		box-shadow: none;
	}

	:host([variant='destructive']) .button {
		--_pressed-bg: var(
			--cz-color-bg-glass-destructive-pressed,
			var(--cz-color-bg-error-solid-hover)
		);
		background:
			var(--_sheen),
			var(--cz-color-bg-glass-destructive, var(--cz-color-bg-error-solid));
		color: var(--cz-color-white);
		box-shadow:
			inset 0 1px 0 rgb(255 255 255 / 0.06),
			inset 0 0 0 1px light-dark(rgb(10 13 18 / 0.2), transparent),
			var(--_lift);

		&:hover {
			background-color: var(
				--cz-color-bg-glass-destructive-hover,
				var(--cz-color-bg-error-solid-hover)
			);
		}

		&:focus-visible {
			outline-color: var(--cz-color-error-500);
		}
	}

	:host([variant='link']) .button {
		height: auto;
		padding: 0;
		background: transparent;
		border-color: transparent;
		backdrop-filter: none;
		color: var(--cz-color-text-link);
		box-shadow: none;
		border-radius: var(--cz-radius-xs);
		outline-offset: 3px;
		text-decoration: underline;
		text-decoration-color: transparent;
		text-underline-offset: 3px;
		transition-property: color, text-decoration-color, outline-color;

		&:hover {
			color: var(--cz-color-text-link-hover);
			text-decoration-color: currentColor;
		}
	}

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-primary);

		&:hover {
			color: var(--cz-color-text-primary);
		}
	}

	:host(:not([variant='tertiary']):not([variant='link']))
		.button:active:not(:disabled) {
		background-color: var(--_pressed-bg);
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	/* Toggled (aria-pressed) */

	:host([variant='secondary'][aria-pressed='true']) .button {
		background: var(--_wash-strong);
		color: var(--cz-color-text-primary);
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='tertiary'][aria-pressed='true']) .button {
		background: var(--cz-color-bg-quaternary);
		color: var(--cz-color-text-primary);
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button,
	:host([variant='destructive'][aria-pressed='true']) .button {
		background-image: none;
		box-shadow: var(--cz-shadow-glass-pressed, var(--cz-shadow-pressed-3d));
	}

	:host([variant='link'][aria-pressed='true']) .button {
		text-decoration-color: currentColor;
	}

	/* Disabled keeps the variant's look, just quieter. */

	:host([disabled]) .button,
	:host(:disabled) .button,
	.button:disabled {
		opacity: var(--cz-opacity-disabled, 0.45);
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
	}

	@media (forced-colors: active) {
		:host .button,
		:host([variant]) .button {
			border-color: ButtonText;
			background: ButtonFace;
			color: ButtonText;
		}
		:host([aria-pressed='true']) .button {
			outline: 2px solid Highlight;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		.button {
			transition: none;
		}
	}
`})))()}var Et,Dt;function Ot(){return(Ot=e((()=>{it(),bt(),P(),n(),L(),Ct(),Tt(),Et=`variant.size.disabled.full-width.icon-only.tooltip.tooltip-placement.type.value.href.target.rel.download.aria-expanded.aria-label.title.aria-pressed.aria-controls.aria-haspopup.aria-description.aria-busy.aria-current.control-role.tabindex.name.form.formaction.formenctype.formmethod.formnovalidate.formtarget`.split(`.`),Dt=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:i,type:a=`button`,href:o,target:s,rel:l,download:u}=e,d=!!(t||e.formDisabled);O(()=>{e.syncFormButton()}),O(()=>{let t=t=>{(e.disabled||e.formDisabled)&&(t.preventDefault(),t.stopImmediatePropagation())};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled,e.formDisabled]),Ae(()=>{let t=e.shadowRoot?.querySelector(`.button`);t&&`ariaControlsElements`in t&&(t.ariaControlsElements=e.ariaControlsElements)});let f=c`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=st(o!=null,()=>c`
			<a
				role=${I(e.controlRole)}
				tabindex=${I(e.getAttribute(`tabindex`)??void 0)}
				aria-controls=${I(e.getAttribute(`aria-controls`)??void 0)}
				aria-haspopup=${I(e.getAttribute(`aria-haspopup`)??void 0)}
				aria-description=${I(e.getAttribute(`aria-description`)??void 0)}
				aria-busy=${I(e.getAttribute(`aria-busy`)??void 0)}
				aria-current=${I(e.getAttribute(`aria-current`)??void 0)}
				href=${o}
				class="button"
				part="button"
				aria-disabled=${d?`true`:r}
				aria-expanded=${I(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${I(e.getAttribute(`aria-label`)??(e.iconOnly&&e.title?e.title:void 0))}
				target=${I(s)}
				rel=${I(l)}
				download=${I(u)}
				>${f}</a
			>
		`,()=>c`
			<button
				role=${I(e.controlRole)}
				tabindex=${I(e.getAttribute(`tabindex`)??void 0)}
				aria-controls=${I(e.getAttribute(`aria-controls`)??void 0)}
				aria-haspopup=${I(e.getAttribute(`aria-haspopup`)??void 0)}
				aria-description=${I(e.getAttribute(`aria-description`)??void 0)}
				aria-busy=${I(e.getAttribute(`aria-busy`)??void 0)}
				aria-current=${I(e.getAttribute(`aria-current`)??void 0)}
				type=${a}
				class="button"
				part="button"
				?disabled=${d}
				aria-expanded=${I(e.getAttribute(`aria-expanded`)??void 0)}
				aria-label=${I(e.getAttribute(`aria-label`)??(e.iconOnly&&e.title?e.title:void 0))}
				aria-pressed=${I(e.getAttribute(`aria-pressed`)??void 0)}
			>
				${f}
			</button>
		`);return c`<cosmoz-tooltip
		heading=${I(n??void 0)}
		placement=${I(i??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,N(Dt,{baseElement:St,observedAttributes:Et,styleSheets:[rt,wt],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function kt(){return(kt=e((()=>{Ot()})))()}function*At(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var jt,Mt;function Nt(){return(Nt=e((()=>{jt={duration:250},Mt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...jt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var Pt,Ft;function It(){return(It=e((()=>{n(),Ge(),Pt={},Ft=Ue(class extends We{constructor(){super(...arguments),this.ot=Pt}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return o}else if(this.ot===t)return o;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})))()}var Lt,Rt,zt;function Bt(){return(Bt=e((()=>{n(),Ge(),Lt=`important`,Rt=` !`+Lt,zt=Ue(class extends We{constructor(e){if(super(e),e.type!==He.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Rt);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Lt:``):n[e]=r}}return o}})})))()}var Vt;function Ht(){return(Ht=e((()=>{Vt=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var Ut,Wt;function Gt(){return(Gt=e((()=>{P(),n(),Ht(),Ut=E`
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
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		box-shadow: var(--cosmoz-dropdown-box-shadow, var(--cz-shadow-sm));
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
	}
	::slotted(*) {
		display: block;
	}
`,Wt=()=>c`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Vt(N(Wt,{styleSheets:[Ut]})))})))()}function Kt(e,t,n){return R(e,un(t,n))}function qt(e,t){return typeof e==`function`?e(t):e}function Jt(e){return e.split(`-`)[0]}function Yt(e){return e.split(`-`)[1]}function Xt(e){return e===`x`?`y`:`x`}function Zt(e){return e===`y`?`height`:`width`}function Qt(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function $t(e){return Xt(Qt(e))}function en(e,t,n){n===void 0&&(n=!1);let r=Yt(e),i=$t(e),a=Zt(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=on(o)),[o,on(o)]}function tn(e){let t=on(e);return[nn(e),t,nn(t)]}function nn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function rn(e,t,n){switch(e){case`top`:case`bottom`:return n?t?hn:mn:t?mn:hn;case`left`:case`right`:return t?gn:_n;default:return[]}}function an(e,t,n,r){let i=Yt(e),a=rn(Jt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(nn)))),a}function on(e){let t=Jt(e);return pn[t]+e.slice(t.length)}function sn(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function cn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:sn(e)}function ln(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var un,R,dn,fn,z,pn,mn,hn,gn,_n;function vn(){return(vn=e((()=>{un=Math.min,R=Math.max,dn=Math.round,fn=Math.floor,z=e=>({x:e,y:e}),pn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},mn=[`left`,`right`],hn=[`right`,`left`],gn=[`top`,`bottom`],_n=[`bottom`,`top`]})))()}function yn(e,t,n){let{reference:r,floating:i}=e,a=Qt(t),o=$t(t),s=Zt(o),c=Jt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Yt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function bn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=qt(t,e),p=cn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ln(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ln(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var xn,Sn,Cn,wn;function Tn(){return(Tn=e((()=>{vn(),xn=50,Sn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:bn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=yn(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<xn&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=yn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},Cn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=qt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Jt(r),_=Qt(o),v=Jt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[on(o)]:tn(o)),x=p!==`none`;!d&&x&&b.push(...an(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),C=[],w=i.flip?.overflows||[];if(l&&C.push(ee[g]),u){let e=en(r,a,y);C.push(ee[e[0]],ee[e[1]])}if(w=[...w,{placement:r,overflows:C}],!C.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===Qt(t)||w.every(e=>Qt(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:w},reset:{placement:t}};let n=w.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=w.filter(e=>{if(x){let t=Qt(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},wn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=qt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Qt(i),p=Xt(f),m=u[p],h=u[f],g=(e,t)=>Kt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}}})))()}function En(){return typeof window<`u`}function Dn(e){return On(e)?(e.nodeName||``).toLowerCase():`#document`}function B(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function V(e){return((On(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function On(e){return En()?e instanceof Node||e instanceof B(e).Node:!1}function H(e){return En()?e instanceof Element||e instanceof B(e).Element:!1}function U(e){return En()?e instanceof HTMLElement||e instanceof B(e).HTMLElement:!1}function kn(e){return!En()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof B(e).ShadowRoot}function An(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function jn(e){return/^(table|td|th)$/.test(Dn(e))}function Mn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Nn(e){let t=H(e)?W(e):e;return G(t.transform)||G(t.translate)||G(t.scale)||G(t.rotate)||G(t.perspective)||!Fn()&&(G(t.backdropFilter)||G(t.filter))||Hn.test(t.willChange||``)||Un.test(t.contain||``)}function Pn(e){let t=Rn(e);for(;U(t)&&!In(t);){if(Nn(t))return t;if(Mn(t))return null;t=Rn(t)}return null}function Fn(){return Wn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Wn}function In(e){return/^(html|body|#document)$/.test(Dn(e))}function W(e){return B(e).getComputedStyle(e)}function Ln(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Rn(e){if(Dn(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||kn(e)&&e.host||V(e);return kn(t)?t.host:t}function zn(e){let t=Rn(e);return In(t)?(e.ownerDocument||e).body:U(t)&&An(t)?t:zn(t)}function Bn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=zn(e),i=r===e.ownerDocument?.body,a=B(r);if(i){let e=Vn(a);return t.concat(a,a.visualViewport||[],An(r)?r:[],e&&n?Bn(e):[])}return t.concat(r,Bn(r,[],n))}function Vn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Hn,Un,G,Wn;function Gn(){return(Gn=e((()=>{Hn=/transform|translate|scale|rotate|perspective|filter/,Un=/paint|layout|strict|content/,G=e=>!!e&&e!==`none`})))()}function Kn(e){let t=W(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=U(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=dn(n)!==a||dn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function qn(e){return H(e)?e:e.contextElement}function Jn(e){let t=qn(e);if(!U(t))return z(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Kn(t),o=(a?dn(n.width):n.width)/r,s=(a?dn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Yn(e){let t=B(e);return!Fn()||!t.visualViewport?_r:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===B(e)}function Zn(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=qn(e),o=z(1);t&&(r?H(r)&&(o=Jn(r)):o=Jn(e));let s=Xn(a,n,r)?Yn(a):z(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=B(a),t=H(r)?B(r):r,n=e,i=Vn(n);for(;i&&t!==n;){let e=Jn(i),t=i.getBoundingClientRect(),r=W(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=B(i),i=Vn(n)}}return ln({width:u,height:d,x:c,y:l})}function Qn(e,t){let n=Ln(e).scrollLeft;return t?t.left+n:Zn(V(e)).left+n}function $n(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Qn(e,n),y:n.top+t.scrollTop}}function er(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=V(r),s=t?Mn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=z(1),u=z(0),d=U(r);if((d||!a)&&((Dn(r)!==`body`||An(o))&&(c=Ln(r)),d)){let e=Zn(r);l=Jn(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?$n(o,c):z(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function tr(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function nr(e){let t=Ln(e),n=e.ownerDocument.body,r=R(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=R(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Qn(e),o=-t.scrollTop;return W(n).direction===`rtl`&&(a+=R(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function rr(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=B(e),a=V(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Fn()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Qn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=vr&&(s-=o)}return{width:s,height:c,x:l,y:u}}function ir(e,t){let n=Zn(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Jn(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ar(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=rr(e,n,t);else if(t===`document`)r=nr(V(e));else if(H(t))r=ir(t,n);else{let n=Yn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ln(r)}function or(e,t){let n=t.get(e);if(n)return n;let r=Bn(e,[],!1).filter(e=>H(e)&&Dn(e)!==`body`),i=null,a=W(e).position===`fixed`,o=a?Rn(e):e;for(;H(o)&&!In(o);){let e=W(o),t=Nn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=Rn(o)}return t.set(e,r),r}function sr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Mn(t)?[]:or(t,this._c):[].concat(n),r],o=ar(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ar(t,a[e],i);s=R(n.top,s),c=un(n.right,c),l=un(n.bottom,l),u=R(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function cr(e){let{width:t,height:n}=Kn(e);return{width:t,height:n}}function lr(e,t,n){let r=U(t),i=V(t),a=n===`fixed`,o=Zn(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=z(0);if((r||!a)&&((Dn(t)!==`body`||An(i))&&(s=Ln(t)),r)){let e=Zn(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Qn(i));let l=i&&!r&&!a?$n(i,s):z(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ur(e){return W(e).position===`static`}function dr(e,t){if(!U(e)||W(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return V(e)===n&&(n=n.ownerDocument.body),n}function fr(e,t){let n=B(e);if(Mn(e))return n;if(!U(e)){let t=Rn(e);for(;t&&!In(t);){if(H(t)&&!ur(t))return t;t=Rn(t)}return n}let r=dr(e,t);for(;r&&jn(r)&&ur(r);)r=dr(r,t);return r&&In(r)&&ur(r)&&!Nn(r)?n:r||Pn(e)||n}function pr(e){return W(e).direction===`rtl`}function mr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function hr(e,t,n){let r=null,i,a=V(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=fn(d),h=fn(a.clientWidth-(u+f)),g=fn(a.clientHeight-(d+p)),_=fn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:R(0,un(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!mr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=B(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function gr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=qn(e),u=i||a?[...l?Bn(l):[],...t?Bn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?hr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Zn(e):null;c&&g();function g(){let t=Zn(e);h&&!mr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var _r,vr,yr,br,xr,Sr,Cr;function wr(){return(wr=e((()=>{Tn(),vn(),Gn(),_r=z(0),vr=25,yr=async function(e){let t=this.getOffsetParent||fr,n=this.getDimensions,r=await n(e.floating);return{reference:lr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},br={convertOffsetParentRelativeRectToViewportRelativeRect:er,getDocumentElement:V,getClippingRect:sr,getOffsetParent:fr,getElementRects:yr,getClientRects:tr,getDimensions:cr,getScale:Jn,isElement:H,isRTL:pr},xr=wn,Sr=Cn,Cr=(e,t,n)=>{let r=new Map,i=n??{},a={...br,...i.platform,_c:r};return Sn(e,t,{...i,platform:a})}})))()}var Tr,Er;function Dr(){return(Dr=e((()=>{P(),wr(),Tr=[Sr({fallbackAxisSideDirection:`start`,crossAxis:!1}),xr()],Er=({placement:e=`bottom-start`,strategy:t,middleware:n=Tr}={})=>{let[r,i]=j(),[a,o]=j(),[s,c]=j();return O(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return gr(r,a,()=>Cr(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:k(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})))()}var Or;function kr(){return(kr=e((()=>{P(),Or=e=>{let t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var Ar,jr,Mr;function Nr(){return(Nr=e((()=>{kr(),P(),Ar=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,jr=({disabled:e,onFocus:t})=>{let[n,r]=j(),{focused:i,closed:a}=n||{},o=i&&!e,s=Or({closed:a,onFocus:t}),c=A(e=>r(t=>({...t,closed:e})),[]),l=A(e=>{let t=e.currentTarget;return Ar(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:A(e=>{let t=Ar(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},Mr=e=>{let t=jr(e),{onFocus:n}=t,r=M();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var Pr,Fr,Ir;function Lr(){return(Lr=e((()=>{kt(),P(),n(),It(),ot(),Bt(),Gt(),Dr(),Nr(),Pr=e=>e.preventDefault(),Fr=E`
	.anchor {
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}

	cosmoz-button {
		width: 100%;
		pointer-events: none;
	}

	cosmoz-button::part(button) {
		width: auto;
		pointer-events: auto;
		border: none;
		cursor: pointer;
		background: transparent;
		padding: 0;

		height: auto;
	}

	::slotted(svg) {
		pointer-events: none;
	}

	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,Ir=e=>{let{placement:t,strategy:n,middleware:i,render:a}=e,{active:o,onToggle:s}=Mr(e),l=M(),{styles:u,setReference:d,setFloating:f}=Er({placement:t,strategy:n,middleware:i}),p=A(e=>{l.current=e,f(e)},[f]);return O(()=>{let e=l.current;e&&(o&&!e.matches(`:popover-open`)&&e.showPopover?.(),!o&&e.matches(`:popover-open`)&&e.hidePopover?.())},[o]),c`
		<div class="anchor" part="anchor" ${F(d)}>
			<cosmoz-button
				variant="tertiary"
				@mousedown=${Pr}
				@click=${s}
				exportparts="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</cosmoz-button>
		</div>
		<cosmoz-dropdown-content
			popover
			id="content"
			part="content"
			exportparts="wrap, content"
			style="${zt(u)}"
			${F(p)}
			><slot></slot>${Ft([a],()=>a?.()||r)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,N(Ir,{styleSheets:[Fr]}))})))()}var Rr,zr,Br;function Vr(){return(Vr=e((()=>{P(),n(),Rr=E`
	:host {
		display: block;
		max-height: var(--cosmoz-dropdown-menu-max-height, calc(96dvh - 64px));
		background: var(
			--cosmoz-dropdown-menu-bg-color,
			var(--cz-color-bg-primary)
		);
		overflow-y: auto;
		padding: var(--cz-spacing) calc(var(--cz-spacing) * 1.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		border: 1px solid
			var(--cosmoz-dropdown-menu-border-color, var(--cz-color-border-primary));
	}
	::slotted(:not(slot)) {
		display: block;
		--paper-button_-_display: block;
		box-sizing: border-box;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 2.5);
		border-radius: var(--cosmoz-dropdown-border-radius, var(--cz-radius-sm));
		background: var(--cosmoz-dropdown-menu-bg-color, transparent);
		color: var(--cosmoz-dropdown-menu-color, var(--cz-color-text-primary));
		transition:
			background 0.25s,
			color 0.25s;
		border: none;
		cursor: pointer;
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		text-align: left;
		margin: 0;
		width: 100%;
		white-space: nowrap;
	}

	::slotted(:not(slot):hover) {
		background: var(
			--cosmoz-dropdown-menu-hover-color,
			var(--cz-color-bg-secondary)
		);
	}

	::slotted(:not(slot)[disabled]) {
		opacity: 0.5;
		pointer-events: none;
	}

	/* Button components own their padding, hover and disabled appearance. */
	::slotted([variant]),
	::slotted([variant]:hover) {
		padding: 0;
		background: none;
		--cosmoz-button-justify-content: flex-start;
	}

	::slotted([variant][disabled]) {
		opacity: 1;
	}
`,zr=()=>c` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,N(zr,{styleSheets:[Rr]})),Br=({placement:e})=>c` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,N(Br))})))()}var Hr,Ur;function Wr(){return(Wr=e((()=>{n(),$e(),Hr=class extends Qe{_slot;_ref;#e=()=>{this._slot&&this._ref&&(this._ref.current=this._slot.assignedElements({flatten:!0}))};#t=()=>this.#e();update(e,[t]){this._ref=t;let n=e.element;this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e()}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}render(e){return o}},Ur=Ue(Hr)})))()}function Gr(e){return()=>e}var Kr,qr,Jr;function Yr(){return(Yr=e((()=>{Kr=Gr(),qr=Kr,Jr=(e,...t)=>typeof e==`function`?e(...t):e})))()}var Xr,Zr,Qr,$r;function ei(){return(ei=e((()=>{n(),$e(),Yr(),Xr=(e,t,n)=>{n==null?e.removeAttribute(t):e.setAttribute(t,n)},Zr=(e,t)=>{for(let[n,r]of Object.entries(e))Xr(t,n,Jr(r,t))},Qr=class extends Qe{_slot;_attrs;#e=()=>{if(!this._slot||!this._attrs)return;let e=this._slot.assignedElements({flatten:!0});for(let t of e)Zr(this._attrs,t)};#t=()=>this.#e();render(e){return o}update(e,[t]){this._attrs=t;let n=e.element;return this._slot!==n&&(this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=n,n.addEventListener(`slotchange`,this.#t)),this.#e(),o}disconnected(){this._slot?.removeEventListener(`slotchange`,this.#t),this._slot=void 0}},$r=Ue(Qr)})))()}var ti,ni;function ri(){return(ri=e((()=>{kr(),P(),ti=e=>{for(let t of e.current??[]){let e=t.matches(`[autofocus]`)?t:t.querySelector(`[autofocus]`);if(e instanceof HTMLElement){e.focus();break}}},ni=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=M(),[s,c]=Fe(`opened`,!1),l=M(),u=M(),d=Or({disabled:n,openOnHover:i}),f=A(()=>{let e=l.current?.[0];return e instanceof HTMLElement?e:void 0},[]),p=A(()=>{d.disabled||(c(!0),o.current?.showPopover?.())},[]),m=A(()=>{c(!1),o.current?.hidePopover?.()},[]),h=A(()=>{o.current?.matches(`:popover-open`)?m():p()},[]),g=A(()=>{clearTimeout(d.closeTimeout)},[]),_=A(e=>{d.disabled||e.target===f()&&(g(),p())},[]),v=A(()=>{d.disabled||(g(),p())},[]),y=A(()=>{clearTimeout(d.closeTimeout),d.closeTimeout=setTimeout(()=>{let t=o.current;d.openOnHover&&(e.matches(`:hover`)||t?.matches(`:hover`))||e.matches(`:focus-within`)||t?.matches(`:focus-within`)||m()},100)},[]),b=A(()=>{let t=document.activeElement;for(;t?.shadowRoot;)t=t.shadowRoot.activeElement;if(t!=null&&t!==document.body&&t.offsetParent!=null)return;let n=f();n&&(e.removeEventListener(`focusin`,_),n.focus(),e.addEventListener(`focusin`,_))},[]),x=A(t=>{let n=t.newState===`open`;c(n),n?ti(u):b(),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return O(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),O(()=>{e.toggleAttribute(`opened`,!!s)},[s]),O(()=>{if(a&&!n)return e.addEventListener(`focusin`,_),e.addEventListener(`focusout`,y),()=>{e.removeEventListener(`focusin`,_),e.removeEventListener(`focusout`,y)}},[a,n]),O(()=>{if(i&&!n)return e.addEventListener(`pointerenter`,v),e.addEventListener(`pointerleave`,y),()=>{e.removeEventListener(`pointerenter`,v),e.removeEventListener(`pointerleave`,y)}},[i,n]),{placement:t,disabled:n,passthrough:r,opened:s,triggers:l,content:u,popoverRef:o,handleClick:a?p:h,onToggle:x,close:m,scheduleClose:y,cancelClose:g}}})))()}var ii,ai,oi;function si(){return(si=e((()=>{Wr(),ei(),P(),n(),ot(),ri(),ii=E`
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

		opacity: 1;
		transform: translateY(0) scale(1);

		/* overlay/display transitions need allow-discrete to animate
		 * between display:none and display:block */
		transition:
			opacity 150ms ease-out,
			transform 150ms ease-out,
			overlay 150ms ease-out allow-discrete,
			display 150ms ease-out allow-discrete;
	}

	@starting-style {
		[popover]:popover-open {
			opacity: 0;
			transform: translateY(-4px) scale(0.96);
		}
	}

	[popover]:not(:popover-open) {
		opacity: 0;
		transform: translateY(-4px) scale(0.96);
	}

	@media (prefers-reduced-motion: reduce) {
		[popover] {
			transition: none;
		}
	}
`,ai=({placement:e,disabled:t,passthrough:n,opened:r,triggers:i,content:a,popoverRef:o,handleClick:s,onToggle:l,close:u,scheduleClose:d,cancelClose:f})=>c`
		<slot
			name="button"
			${Ur(i)}
			${$r({"aria-expanded":n?null:String(r),disabled:t&&!n?``:null})}
			@click=${s}
		></slot>
		${t&&n?c`<slot></slot>`:c`<div
					popover
					style="position-area: ${e}"
					@toggle=${l}
					@select=${u}
					@focusout=${d}
					@focusin=${f}
					${F(e=>e&&(o.current=e))}
				>
					<slot ${Ur(a)}></slot>
				</div>`}
	`,oi=e=>ai(ni(e)),customElements.define(`cosmoz-dropdown-next`,N(oi,{styleSheets:[ii],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function ci(){return(ci=e((()=>{Lr(),Vr(),Nr(),si()})))()}function li(){return(li=e((()=>{n(),L()})))()}function ui(){return(ui=e((()=>{n(),L()})))()}function di(){return(di=e((()=>{n(),L()})))()}function fi(){return(fi=e((()=>{n(),L()})))()}function pi(){return(pi=e((()=>{n(),L()})))()}function mi(){return(mi=e((()=>{n(),L()})))()}function hi(){return(hi=e((()=>{n(),L()})))()}function gi(){return(gi=e((()=>{n(),L()})))()}function _i(){return(_i=e((()=>{n(),L()})))()}function vi(){return(vi=e((()=>{n(),L()})))()}function yi(){return(yi=e((()=>{n(),L()})))()}function bi(){return(bi=e((()=>{n(),L()})))()}function xi(){return(xi=e((()=>{n(),L()})))()}function Si(){return(Si=e((()=>{n(),L()})))()}function Ci(){return(Ci=e((()=>{n(),L()})))()}function wi(){return(wi=e((()=>{n(),L()})))()}function Ti(){return(Ti=e((()=>{n(),L()})))()}function Ei(){return(Ei=e((()=>{n(),L()})))()}function Di(){return(Di=e((()=>{n(),L()})))()}function Oi(){return(Oi=e((()=>{n(),L()})))()}function ki(){return(ki=e((()=>{n(),L()})))()}function Ai(){return(Ai=e((()=>{n(),L()})))()}function ji(){return(ji=e((()=>{n(),L()})))()}function Mi(){return(Mi=e((()=>{n(),L()})))()}function Ni(){return(Ni=e((()=>{n(),L()})))()}function Pi(){return(Pi=e((()=>{n(),L()})))()}function Fi(){return(Fi=e((()=>{n(),L()})))()}function Ii(){return(Ii=e((()=>{n(),L()})))()}function Li(){return(Li=e((()=>{n(),L()})))()}function Ri(){return(Ri=e((()=>{n(),L()})))()}function zi(){return(zi=e((()=>{n(),L()})))()}function Bi(){return(Bi=e((()=>{n(),L()})))()}function Vi(){return(Vi=e((()=>{n(),L()})))()}function Hi(){return(Hi=e((()=>{n(),L()})))()}function Ui(){return(Ui=e((()=>{n(),L()})))()}function Wi(){return(Wi=e((()=>{n(),L()})))()}function Gi(){return(Gi=e((()=>{n(),L()})))()}function Ki(){return(Ki=e((()=>{n(),L()})))()}function qi(){return(qi=e((()=>{n(),L()})))()}function Ji(){return(Ji=e((()=>{n(),L()})))()}function Yi(){return(Yi=e((()=>{n(),L()})))()}function Xi(){return(Xi=e((()=>{n(),L()})))()}function Zi(){return(Zi=e((()=>{n(),L()})))()}function Qi(){return(Qi=e((()=>{n(),L()})))()}function $i(){return($i=e((()=>{n(),L()})))()}function ea(){return(ea=e((()=>{n(),L()})))()}function ta(){return(ta=e((()=>{n(),L()})))()}function na(){return(na=e((()=>{n(),L()})))()}function ra(){return(ra=e((()=>{n(),L()})))()}function ia(){return(ia=e((()=>{n(),L()})))()}function aa(){return(aa=e((()=>{n(),L()})))()}function oa(){return(oa=e((()=>{n(),L()})))()}function sa(){return(sa=e((()=>{n(),L()})))()}function ca(){return(ca=e((()=>{n(),L()})))()}function la(){return(la=e((()=>{n(),L()})))()}function ua(){return(ua=e((()=>{n(),L()})))()}function da(){return(da=e((()=>{n(),L()})))()}function fa(){return(fa=e((()=>{n(),L()})))()}function pa(){return(pa=e((()=>{n(),L()})))()}function ma(){return(ma=e((()=>{n(),L()})))()}function ha(){return(ha=e((()=>{n(),L()})))()}function ga(){return(ga=e((()=>{n(),L()})))()}function _a(){return(_a=e((()=>{n(),L()})))()}function va(){return(va=e((()=>{n(),L()})))()}function ya(){return(ya=e((()=>{n(),L()})))()}function ba(){return(ba=e((()=>{n(),L()})))()}function xa(){return(xa=e((()=>{n(),L()})))()}function Sa(){return(Sa=e((()=>{n(),L()})))()}function Ca(){return(Ca=e((()=>{n(),L()})))()}function wa(){return(wa=e((()=>{n(),L()})))()}function Ta(){return(Ta=e((()=>{n(),L()})))()}function Ea(){return(Ea=e((()=>{n(),L()})))()}function Da(){return(Da=e((()=>{n(),L()})))()}function Oa(){return(Oa=e((()=>{n(),L()})))()}function ka(){return(ka=e((()=>{n(),L()})))()}function Aa(){return(Aa=e((()=>{n(),L()})))()}function ja(){return(ja=e((()=>{n(),L()})))()}function Ma(){return(Ma=e((()=>{n(),L()})))()}function Na(){return(Na=e((()=>{n(),L()})))()}function Pa(){return(Pa=e((()=>{n(),L()})))()}function Fa(){return(Fa=e((()=>{n(),L()})))()}function Ia(){return(Ia=e((()=>{n(),L()})))()}function La(){return(La=e((()=>{n(),L()})))()}function Ra(){return(Ra=e((()=>{n(),L()})))()}function za(){return(za=e((()=>{n(),L()})))()}function Ba(){return(Ba=e((()=>{n(),L()})))()}function Va(){return(Va=e((()=>{n(),L()})))()}function Ha(){return(Ha=e((()=>{n(),L()})))()}function Ua(){return(Ua=e((()=>{n(),L()})))()}function Wa(){return(Wa=e((()=>{n(),L()})))()}function Ga(){return(Ga=e((()=>{n(),L()})))()}function Ka(){return(Ka=e((()=>{n(),L()})))()}function qa(){return(qa=e((()=>{n(),L()})))()}function Ja(){return(Ja=e((()=>{n(),L()})))()}function Ya(){return(Ya=e((()=>{n(),L()})))()}function Xa(){return(Xa=e((()=>{n(),L()})))()}function Za(){return(Za=e((()=>{n(),L()})))()}function Qa(){return(Qa=e((()=>{n(),L()})))()}function $a(){return($a=e((()=>{n(),L()})))()}function eo(){return(eo=e((()=>{n(),L()})))()}function to(){return(to=e((()=>{n(),L()})))()}function no(){return(no=e((()=>{n(),L()})))()}function ro(){return(ro=e((()=>{n(),L()})))()}function io(){return(io=e((()=>{n(),L()})))()}function ao(){return(ao=e((()=>{n(),L()})))()}function oo(){return(oo=e((()=>{n(),L()})))()}function so(){return(so=e((()=>{n(),L()})))()}function co(){return(co=e((()=>{n(),L()})))()}function lo(){return(lo=e((()=>{n(),L()})))()}function uo(){return(uo=e((()=>{n(),L()})))()}function fo(){return(fo=e((()=>{n(),L()})))()}function po(){return(po=e((()=>{n(),L()})))()}function mo(){return(mo=e((()=>{n(),L()})))()}function ho(){return(ho=e((()=>{n(),L()})))()}function go(){return(go=e((()=>{n(),L()})))()}function _o(){return(_o=e((()=>{n(),L()})))()}function vo(){return(vo=e((()=>{n(),L()})))()}function yo(){return(yo=e((()=>{n(),L()})))()}function bo(){return(bo=e((()=>{n(),L()})))()}function xo(){return(xo=e((()=>{n(),L()})))()}function So(){return(So=e((()=>{n(),L()})))()}function Co(){return(Co=e((()=>{n(),L()})))()}function wo(){return(wo=e((()=>{n(),L()})))()}function To(){return(To=e((()=>{n(),L()})))()}function Eo(){return(Eo=e((()=>{n(),L()})))()}function Do(){return(Do=e((()=>{n(),L()})))()}function Oo(){return(Oo=e((()=>{n(),L()})))()}function ko(){return(ko=e((()=>{n(),L()})))()}function Ao(){return(Ao=e((()=>{n(),L()})))()}function jo(){return(jo=e((()=>{n(),L()})))()}function Mo(){return(Mo=e((()=>{n(),L()})))()}function No(){return(No=e((()=>{n(),L()})))()}function Po(){return(Po=e((()=>{n(),L()})))()}function Fo(){return(Fo=e((()=>{n(),L()})))()}function Io(){return(Io=e((()=>{n(),L()})))()}function Lo(){return(Lo=e((()=>{n(),L()})))()}function Ro(){return(Ro=e((()=>{n(),L()})))()}function zo(){return(zo=e((()=>{n(),L()})))()}function Bo(){return(Bo=e((()=>{n(),L()})))()}function Vo(){return(Vo=e((()=>{n(),L()})))()}function Ho(){return(Ho=e((()=>{n(),L()})))()}function Uo(){return(Uo=e((()=>{n(),L()})))()}function Wo(){return(Wo=e((()=>{n(),L()})))()}function Go(){return(Go=e((()=>{n(),L()})))()}function Ko(){return(Ko=e((()=>{n(),L()})))()}function qo(){return(qo=e((()=>{n(),L()})))()}function Jo(){return(Jo=e((()=>{n(),L()})))()}function Yo(){return(Yo=e((()=>{n(),L()})))()}function Xo(){return(Xo=e((()=>{n(),L()})))()}function Zo(){return(Zo=e((()=>{n(),L()})))()}function Qo(){return(Qo=e((()=>{n(),L()})))()}function $o(){return($o=e((()=>{n(),L()})))()}function es(){return(es=e((()=>{n(),L()})))()}function ts(){return(ts=e((()=>{n(),L()})))()}function ns(){return(ns=e((()=>{n(),L()})))()}function rs(){return(rs=e((()=>{n(),L()})))()}function is(){return(is=e((()=>{n(),L()})))()}function as(){return(as=e((()=>{n(),L()})))()}function os(){return(os=e((()=>{n(),L()})))()}function ss(){return(ss=e((()=>{n(),L()})))()}function cs(){return(cs=e((()=>{n(),L()})))()}function ls(){return(ls=e((()=>{n(),L()})))()}function us(){return(us=e((()=>{n(),L()})))()}function ds(){return(ds=e((()=>{n(),L()})))()}function fs(){return(fs=e((()=>{n(),L()})))()}function ps(){return(ps=e((()=>{n(),L()})))()}function ms(){return(ms=e((()=>{n(),L()})))()}function hs(){return(hs=e((()=>{n(),L()})))()}function gs(){return(gs=e((()=>{n(),L()})))()}function _s(){return(_s=e((()=>{n(),L()})))()}function vs(){return(vs=e((()=>{n(),L()})))()}function ys(){return(ys=e((()=>{n(),L()})))()}function bs(){return(bs=e((()=>{n(),L()})))()}function xs(){return(xs=e((()=>{n(),L()})))()}function Ss(){return(Ss=e((()=>{n(),L()})))()}function Cs(){return(Cs=e((()=>{n(),L()})))()}function ws(){return(ws=e((()=>{n(),L()})))()}function Ts(){return(Ts=e((()=>{n(),L()})))()}function Es(){return(Es=e((()=>{n(),L()})))()}function Ds(){return(Ds=e((()=>{n(),L()})))()}function Os(){return(Os=e((()=>{n(),L()})))()}function ks(){return(ks=e((()=>{n(),L()})))()}function As(){return(As=e((()=>{n(),L()})))()}function js(){return(js=e((()=>{n(),L()})))()}function Ms(){return(Ms=e((()=>{n(),L()})))()}function Ns(){return(Ns=e((()=>{n(),L()})))()}function Ps(){return(Ps=e((()=>{n(),L()})))()}function Fs(){return(Fs=e((()=>{n(),L()})))()}function Is(){return(Is=e((()=>{n(),L()})))()}function Ls(){return(Ls=e((()=>{n(),L()})))()}function Rs(){return(Rs=e((()=>{n(),L()})))()}function zs(){return(zs=e((()=>{n(),L()})))()}function Bs(){return(Bs=e((()=>{n(),L()})))()}function Vs(){return(Vs=e((()=>{n(),L()})))()}function Hs(){return(Hs=e((()=>{n(),L()})))()}function Us(){return(Us=e((()=>{n(),L()})))()}function Ws(){return(Ws=e((()=>{n(),L()})))()}function Gs(){return(Gs=e((()=>{n(),L()})))()}function Ks(){return(Ks=e((()=>{n(),L()})))()}function qs(){return(qs=e((()=>{n(),L()})))()}function Js(){return(Js=e((()=>{n(),L()})))()}function Ys(){return(Ys=e((()=>{n(),L()})))()}function Xs(){return(Xs=e((()=>{n(),L()})))()}function Zs(){return(Zs=e((()=>{n(),L()})))()}function Qs(){return(Qs=e((()=>{n(),L()})))()}function $s(){return($s=e((()=>{n(),L()})))()}function ec(){return(ec=e((()=>{n(),L()})))()}function tc(){return(tc=e((()=>{n(),L()})))()}function nc(){return(nc=e((()=>{n(),L()})))()}function rc(){return(rc=e((()=>{n(),L()})))()}function ic(){return(ic=e((()=>{n(),L()})))()}function ac(){return(ac=e((()=>{n(),L()})))()}function oc(){return(oc=e((()=>{n(),L()})))()}function sc(){return(sc=e((()=>{n(),L()})))()}function cc(){return(cc=e((()=>{n(),L()})))()}function lc(){return(lc=e((()=>{n(),L()})))()}function uc(){return(uc=e((()=>{n(),L()})))()}function dc(){return(dc=e((()=>{n(),L()})))()}function fc(){return(fc=e((()=>{n(),L()})))()}function pc(){return(pc=e((()=>{n(),L()})))()}function mc(){return(mc=e((()=>{n(),L()})))()}function hc(){return(hc=e((()=>{n(),L()})))()}function gc(){return(gc=e((()=>{n(),L()})))()}function _c(){return(_c=e((()=>{n(),L()})))()}function vc(){return(vc=e((()=>{n(),L()})))()}function yc(){return(yc=e((()=>{n(),L()})))()}function bc(){return(bc=e((()=>{n(),L()})))()}function xc(){return(xc=e((()=>{n(),L()})))()}function Sc(){return(Sc=e((()=>{n(),L()})))()}function Cc(){return(Cc=e((()=>{n(),L()})))()}function wc(){return(wc=e((()=>{n(),L()})))()}function Tc(){return(Tc=e((()=>{n(),L()})))()}function Ec(){return(Ec=e((()=>{n(),L()})))()}function Dc(){return(Dc=e((()=>{n(),L()})))()}function Oc(){return(Oc=e((()=>{n(),L()})))()}function kc(){return(kc=e((()=>{n(),L()})))()}function Ac(){return(Ac=e((()=>{n(),L()})))()}function jc(){return(jc=e((()=>{n(),L()})))()}function Mc(){return(Mc=e((()=>{n(),L()})))()}function Nc(){return(Nc=e((()=>{n(),L()})))()}function Pc(){return(Pc=e((()=>{n(),L()})))()}function Fc(){return(Fc=e((()=>{n(),L()})))()}function Ic(){return(Ic=e((()=>{n(),L()})))()}function Lc(){return(Lc=e((()=>{n(),L()})))()}function Rc(){return(Rc=e((()=>{n(),L()})))()}function zc(){return(zc=e((()=>{n(),L()})))()}function Bc(){return(Bc=e((()=>{n(),L()})))()}function Vc(){return(Vc=e((()=>{n(),L()})))()}function Hc(){return(Hc=e((()=>{n(),L()})))()}function Uc(){return(Uc=e((()=>{n(),L()})))()}function Wc(){return(Wc=e((()=>{n(),L()})))()}function Gc(){return(Gc=e((()=>{n(),L()})))()}function Kc(){return(Kc=e((()=>{n(),L()})))()}function qc(){return(qc=e((()=>{n(),L()})))()}function Jc(){return(Jc=e((()=>{n(),L()})))()}function Yc(){return(Yc=e((()=>{n(),L()})))()}function Xc(){return(Xc=e((()=>{n(),L()})))()}function Zc(){return(Zc=e((()=>{n(),L()})))()}function Qc(){return(Qc=e((()=>{n(),L()})))()}function $c(){return($c=e((()=>{n(),L()})))()}function el(){return(el=e((()=>{n(),L()})))()}function tl(){return(tl=e((()=>{n(),L()})))()}function nl(){return(nl=e((()=>{n(),L()})))()}function rl(){return(rl=e((()=>{n(),L()})))()}function il(){return(il=e((()=>{n(),L()})))()}function al(){return(al=e((()=>{n(),L()})))()}function ol(){return(ol=e((()=>{n(),L()})))()}function sl(){return(sl=e((()=>{n(),L()})))()}function cl(){return(cl=e((()=>{n(),L()})))()}function ll(){return(ll=e((()=>{n(),L()})))()}function ul(){return(ul=e((()=>{n(),L()})))()}function dl(){return(dl=e((()=>{n(),L()})))()}function fl(){return(fl=e((()=>{n(),L()})))()}function pl(){return(pl=e((()=>{n(),L()})))()}function ml(){return(ml=e((()=>{n(),L()})))()}function hl(){return(hl=e((()=>{n(),L()})))()}function gl(){return(gl=e((()=>{n(),L()})))()}function _l(){return(_l=e((()=>{n(),L()})))()}function vl(){return(vl=e((()=>{n(),L()})))()}function yl(){return(yl=e((()=>{n(),L()})))()}function bl(){return(bl=e((()=>{n(),L()})))()}function xl(){return(xl=e((()=>{n(),L()})))()}function Sl(){return(Sl=e((()=>{n(),L()})))()}function Cl(){return(Cl=e((()=>{n(),L()})))()}function wl(){return(wl=e((()=>{n(),L()})))()}function Tl(){return(Tl=e((()=>{n(),L()})))()}function El(){return(El=e((()=>{n(),L()})))()}function Dl(){return(Dl=e((()=>{n(),L()})))()}function Ol(){return(Ol=e((()=>{n(),L()})))()}function kl(){return(kl=e((()=>{n(),L()})))()}function Al(){return(Al=e((()=>{n(),L()})))()}function jl(){return(jl=e((()=>{n(),L()})))()}function Ml(){return(Ml=e((()=>{n(),L()})))()}function Nl(){return(Nl=e((()=>{n(),L()})))()}function Pl(){return(Pl=e((()=>{n(),L()})))()}function Fl(){return(Fl=e((()=>{n(),L()})))()}function Il(){return(Il=e((()=>{n(),L()})))()}function Ll(){return(Ll=e((()=>{n(),L()})))()}function Rl(){return(Rl=e((()=>{n(),L()})))()}function zl(){return(zl=e((()=>{n(),L()})))()}function Bl(){return(Bl=e((()=>{n(),L()})))()}function Vl(){return(Vl=e((()=>{n(),L()})))()}function Hl(){return(Hl=e((()=>{n(),L()})))()}function Ul(){return(Ul=e((()=>{n(),L()})))()}function Wl(){return(Wl=e((()=>{n(),L()})))()}function Gl(){return(Gl=e((()=>{n(),L()})))()}function Kl(){return(Kl=e((()=>{n(),L()})))()}function ql(){return(ql=e((()=>{n(),L()})))()}function Jl(){return(Jl=e((()=>{n(),L()})))()}function Yl(){return(Yl=e((()=>{n(),L()})))()}function Xl(){return(Xl=e((()=>{n(),L()})))()}function Zl(){return(Zl=e((()=>{n(),L()})))()}function Ql(){return(Ql=e((()=>{n(),L()})))()}function $l(){return($l=e((()=>{n(),L()})))()}function eu(){return(eu=e((()=>{n(),L()})))()}function tu(){return(tu=e((()=>{n(),L()})))()}function nu(){return(nu=e((()=>{n(),L()})))()}function ru(){return(ru=e((()=>{n(),L()})))()}function iu(){return(iu=e((()=>{n(),L()})))()}function au(){return(au=e((()=>{n(),L()})))()}function ou(){return(ou=e((()=>{n(),L()})))()}function su(){return(su=e((()=>{n(),L()})))()}function cu(){return(cu=e((()=>{n(),L()})))()}function lu(){return(lu=e((()=>{n(),L()})))()}function uu(){return(uu=e((()=>{n(),L()})))()}function du(){return(du=e((()=>{n(),L()})))()}function fu(){return(fu=e((()=>{n(),L()})))()}function pu(){return(pu=e((()=>{n(),L()})))()}function mu(){return(mu=e((()=>{n(),L()})))()}function hu(){return(hu=e((()=>{n(),L()})))()}function gu(){return(gu=e((()=>{n(),L()})))()}function _u(){return(_u=e((()=>{n(),L()})))()}function vu(){return(vu=e((()=>{n(),L()})))()}function yu(){return(yu=e((()=>{n(),L()})))()}function bu(){return(bu=e((()=>{n(),L()})))()}function xu(){return(xu=e((()=>{n(),L()})))()}function Su(){return(Su=e((()=>{n(),L()})))()}function Cu(){return(Cu=e((()=>{n(),L()})))()}function wu(){return(wu=e((()=>{n(),L()})))()}function Tu(){return(Tu=e((()=>{n(),L()})))()}function Eu(){return(Eu=e((()=>{n(),L()})))()}function Du(){return(Du=e((()=>{n(),L()})))()}function Ou(){return(Ou=e((()=>{n(),L()})))()}function ku(){return(ku=e((()=>{n(),L()})))()}function Au(){return(Au=e((()=>{n(),L()})))()}function ju(){return(ju=e((()=>{n(),L()})))()}function Mu(){return(Mu=e((()=>{n(),L()})))()}function Nu(){return(Nu=e((()=>{n(),L()})))()}function Pu(){return(Pu=e((()=>{n(),L()})))()}function Fu(){return(Fu=e((()=>{n(),L()})))()}function Iu(){return(Iu=e((()=>{n(),L()})))()}function Lu(){return(Lu=e((()=>{n(),L()})))()}function Ru(){return(Ru=e((()=>{n(),L()})))()}function zu(){return(zu=e((()=>{n(),L()})))()}function Bu(){return(Bu=e((()=>{n(),L()})))()}function Vu(){return(Vu=e((()=>{n(),L()})))()}function Hu(){return(Hu=e((()=>{n(),L()})))()}function Uu(){return(Uu=e((()=>{n(),L()})))()}function Wu(){return(Wu=e((()=>{n(),L()})))()}function Gu(){return(Gu=e((()=>{n(),L()})))()}function Ku(){return(Ku=e((()=>{n(),L()})))()}function qu(){return(qu=e((()=>{n(),L()})))()}function Ju(){return(Ju=e((()=>{n(),L()})))()}function Yu(){return(Yu=e((()=>{n(),L()})))()}function Xu(){return(Xu=e((()=>{n(),L()})))()}function Zu(){return(Zu=e((()=>{n(),L()})))()}function Qu(){return(Qu=e((()=>{n(),L()})))()}function $u(){return($u=e((()=>{n(),L()})))()}function ed(){return(ed=e((()=>{n(),L()})))()}function td(){return(td=e((()=>{n(),L()})))()}function nd(){return(nd=e((()=>{n(),L()})))()}function rd(){return(rd=e((()=>{n(),L()})))()}function id(){return(id=e((()=>{n(),L()})))()}function ad(){return(ad=e((()=>{n(),L()})))()}function od(){return(od=e((()=>{n(),L()})))()}function sd(){return(sd=e((()=>{n(),L()})))()}function cd(){return(cd=e((()=>{n(),L()})))()}function ld(){return(ld=e((()=>{n(),L()})))()}function ud(){return(ud=e((()=>{n(),L()})))()}function dd(){return(dd=e((()=>{n(),L()})))()}function fd(){return(fd=e((()=>{n(),L()})))()}function pd(){return(pd=e((()=>{n(),L()})))()}function md(){return(md=e((()=>{n(),L()})))()}function hd(){return(hd=e((()=>{n(),L()})))()}function gd(){return(gd=e((()=>{n(),L()})))()}function _d(){return(_d=e((()=>{n(),L()})))()}function vd(){return(vd=e((()=>{n(),L()})))()}function yd(){return(yd=e((()=>{n(),L()})))()}function bd(){return(bd=e((()=>{n(),L()})))()}function xd(){return(xd=e((()=>{n(),L()})))()}function Sd(){return(Sd=e((()=>{n(),L()})))()}function Cd(){return(Cd=e((()=>{n(),L()})))()}function wd(){return(wd=e((()=>{n(),L()})))()}function Td(){return(Td=e((()=>{n(),L()})))()}function Ed(){return(Ed=e((()=>{n(),L()})))()}function Dd(){return(Dd=e((()=>{n(),L()})))()}function Od(){return(Od=e((()=>{n(),L()})))()}function kd(){return(kd=e((()=>{n(),L()})))()}function Ad(){return(Ad=e((()=>{n(),L()})))()}function jd(){return(jd=e((()=>{n(),L()})))()}function Md(){return(Md=e((()=>{n(),L()})))()}function Nd(){return(Nd=e((()=>{n(),L()})))()}function Pd(){return(Pd=e((()=>{n(),L()})))()}function Fd(){return(Fd=e((()=>{n(),L()})))()}function Id(){return(Id=e((()=>{n(),L()})))()}function Ld(){return(Ld=e((()=>{n(),L()})))()}function Rd(){return(Rd=e((()=>{n(),L()})))()}function zd(){return(zd=e((()=>{n(),L()})))()}var Bd;function Vd(){return(Vd=e((()=>{n(),L(),Bd=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>c`
  <svg
    slot=${I(e)}
    class=${`dots-vertical-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${a}
    style=${I(o)}
  >
    ${st(t,()=>i`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})))()}function Hd(){return(Hd=e((()=>{n(),L()})))()}function Ud(){return(Ud=e((()=>{n(),L()})))()}function Wd(){return(Wd=e((()=>{n(),L()})))()}function Gd(){return(Gd=e((()=>{n(),L()})))()}function Kd(){return(Kd=e((()=>{n(),L()})))()}function qd(){return(qd=e((()=>{n(),L()})))()}function Jd(){return(Jd=e((()=>{n(),L()})))()}function Yd(){return(Yd=e((()=>{n(),L()})))()}function Xd(){return(Xd=e((()=>{n(),L()})))()}function Zd(){return(Zd=e((()=>{n(),L()})))()}function Qd(){return(Qd=e((()=>{n(),L()})))()}function $d(){return($d=e((()=>{n(),L()})))()}function ef(){return(ef=e((()=>{n(),L()})))()}function tf(){return(tf=e((()=>{n(),L()})))()}function nf(){return(nf=e((()=>{n(),L()})))()}function rf(){return(rf=e((()=>{n(),L()})))()}function af(){return(af=e((()=>{n(),L()})))()}function of(){return(of=e((()=>{n(),L()})))()}function sf(){return(sf=e((()=>{n(),L()})))()}function cf(){return(cf=e((()=>{n(),L()})))()}function lf(){return(lf=e((()=>{n(),L()})))()}function uf(){return(uf=e((()=>{n(),L()})))()}function df(){return(df=e((()=>{n(),L()})))()}function ff(){return(ff=e((()=>{n(),L()})))()}function pf(){return(pf=e((()=>{n(),L()})))()}function mf(){return(mf=e((()=>{n(),L()})))()}function hf(){return(hf=e((()=>{n(),L()})))()}function gf(){return(gf=e((()=>{n(),L()})))()}function _f(){return(_f=e((()=>{n(),L()})))()}function vf(){return(vf=e((()=>{n(),L()})))()}function yf(){return(yf=e((()=>{n(),L()})))()}function bf(){return(bf=e((()=>{n(),L()})))()}function xf(){return(xf=e((()=>{n(),L()})))()}function Sf(){return(Sf=e((()=>{n(),L()})))()}function Cf(){return(Cf=e((()=>{n(),L()})))()}function wf(){return(wf=e((()=>{n(),L()})))()}function Tf(){return(Tf=e((()=>{n(),L()})))()}function Ef(){return(Ef=e((()=>{n(),L()})))()}function Df(){return(Df=e((()=>{n(),L()})))()}function Of(){return(Of=e((()=>{n(),L()})))()}function kf(){return(kf=e((()=>{n(),L()})))()}function Af(){return(Af=e((()=>{n(),L()})))()}function jf(){return(jf=e((()=>{n(),L()})))()}function Mf(){return(Mf=e((()=>{n(),L()})))()}function Nf(){return(Nf=e((()=>{n(),L()})))()}function Pf(){return(Pf=e((()=>{n(),L()})))()}function Ff(){return(Ff=e((()=>{n(),L()})))()}function If(){return(If=e((()=>{n(),L()})))()}function Lf(){return(Lf=e((()=>{n(),L()})))()}function Rf(){return(Rf=e((()=>{n(),L()})))()}function zf(){return(zf=e((()=>{n(),L()})))()}function Bf(){return(Bf=e((()=>{n(),L()})))()}function Vf(){return(Vf=e((()=>{n(),L()})))()}function Hf(){return(Hf=e((()=>{n(),L()})))()}function Uf(){return(Uf=e((()=>{n(),L()})))()}function Wf(){return(Wf=e((()=>{n(),L()})))()}function Gf(){return(Gf=e((()=>{n(),L()})))()}function Kf(){return(Kf=e((()=>{n(),L()})))()}function qf(){return(qf=e((()=>{n(),L()})))()}function Jf(){return(Jf=e((()=>{n(),L()})))()}function Yf(){return(Yf=e((()=>{n(),L()})))()}function Xf(){return(Xf=e((()=>{n(),L()})))()}function Zf(){return(Zf=e((()=>{n(),L()})))()}function Qf(){return(Qf=e((()=>{n(),L()})))()}function $f(){return($f=e((()=>{n(),L()})))()}function ep(){return(ep=e((()=>{n(),L()})))()}function tp(){return(tp=e((()=>{n(),L()})))()}function np(){return(np=e((()=>{n(),L()})))()}function rp(){return(rp=e((()=>{n(),L()})))()}function ip(){return(ip=e((()=>{n(),L()})))()}function ap(){return(ap=e((()=>{n(),L()})))()}function op(){return(op=e((()=>{n(),L()})))()}function sp(){return(sp=e((()=>{n(),L()})))()}function cp(){return(cp=e((()=>{n(),L()})))()}function lp(){return(lp=e((()=>{n(),L()})))()}function up(){return(up=e((()=>{n(),L()})))()}function dp(){return(dp=e((()=>{n(),L()})))()}function fp(){return(fp=e((()=>{n(),L()})))()}function pp(){return(pp=e((()=>{n(),L()})))()}function mp(){return(mp=e((()=>{n(),L()})))()}function hp(){return(hp=e((()=>{n(),L()})))()}function gp(){return(gp=e((()=>{n(),L()})))()}function _p(){return(_p=e((()=>{n(),L()})))()}function vp(){return(vp=e((()=>{n(),L()})))()}function yp(){return(yp=e((()=>{n(),L()})))()}function bp(){return(bp=e((()=>{n(),L()})))()}function xp(){return(xp=e((()=>{n(),L()})))()}function Sp(){return(Sp=e((()=>{n(),L()})))()}function Cp(){return(Cp=e((()=>{n(),L()})))()}function wp(){return(wp=e((()=>{n(),L()})))()}function Tp(){return(Tp=e((()=>{n(),L()})))()}function Ep(){return(Ep=e((()=>{n(),L()})))()}function Dp(){return(Dp=e((()=>{n(),L()})))()}function Op(){return(Op=e((()=>{n(),L()})))()}function kp(){return(kp=e((()=>{n(),L()})))()}function Ap(){return(Ap=e((()=>{n(),L()})))()}function jp(){return(jp=e((()=>{n(),L()})))()}function Mp(){return(Mp=e((()=>{n(),L()})))()}function Np(){return(Np=e((()=>{n(),L()})))()}function Pp(){return(Pp=e((()=>{n(),L()})))()}function Fp(){return(Fp=e((()=>{n(),L()})))()}function Ip(){return(Ip=e((()=>{n(),L()})))()}function Lp(){return(Lp=e((()=>{n(),L()})))()}function Rp(){return(Rp=e((()=>{n(),L()})))()}function zp(){return(zp=e((()=>{n(),L()})))()}function Bp(){return(Bp=e((()=>{n(),L()})))()}function Vp(){return(Vp=e((()=>{n(),L()})))()}function Hp(){return(Hp=e((()=>{n(),L()})))()}function Up(){return(Up=e((()=>{n(),L()})))()}function Wp(){return(Wp=e((()=>{n(),L()})))()}function Gp(){return(Gp=e((()=>{n(),L()})))()}function Kp(){return(Kp=e((()=>{n(),L()})))()}function qp(){return(qp=e((()=>{n(),L()})))()}function Jp(){return(Jp=e((()=>{n(),L()})))()}function Yp(){return(Yp=e((()=>{n(),L()})))()}function Xp(){return(Xp=e((()=>{n(),L()})))()}function Zp(){return(Zp=e((()=>{n(),L()})))()}function Qp(){return(Qp=e((()=>{n(),L()})))()}function $p(){return($p=e((()=>{n(),L()})))()}function em(){return(em=e((()=>{n(),L()})))()}function tm(){return(tm=e((()=>{n(),L()})))()}function nm(){return(nm=e((()=>{n(),L()})))()}function rm(){return(rm=e((()=>{n(),L()})))()}function im(){return(im=e((()=>{n(),L()})))()}function am(){return(am=e((()=>{n(),L()})))()}function om(){return(om=e((()=>{n(),L()})))()}function sm(){return(sm=e((()=>{n(),L()})))()}function cm(){return(cm=e((()=>{n(),L()})))()}function lm(){return(lm=e((()=>{n(),L()})))()}function um(){return(um=e((()=>{n(),L()})))()}function dm(){return(dm=e((()=>{n(),L()})))()}function fm(){return(fm=e((()=>{n(),L()})))()}function pm(){return(pm=e((()=>{n(),L()})))()}function mm(){return(mm=e((()=>{n(),L()})))()}function hm(){return(hm=e((()=>{n(),L()})))()}function gm(){return(gm=e((()=>{n(),L()})))()}function _m(){return(_m=e((()=>{n(),L()})))()}function vm(){return(vm=e((()=>{n(),L()})))()}function ym(){return(ym=e((()=>{n(),L()})))()}function bm(){return(bm=e((()=>{n(),L()})))()}function xm(){return(xm=e((()=>{n(),L()})))()}function Sm(){return(Sm=e((()=>{n(),L()})))()}function Cm(){return(Cm=e((()=>{n(),L()})))()}function wm(){return(wm=e((()=>{n(),L()})))()}function Tm(){return(Tm=e((()=>{n(),L()})))()}function Em(){return(Em=e((()=>{n(),L()})))()}function Dm(){return(Dm=e((()=>{n(),L()})))()}function Om(){return(Om=e((()=>{n(),L()})))()}function km(){return(km=e((()=>{n(),L()})))()}function Am(){return(Am=e((()=>{n(),L()})))()}function jm(){return(jm=e((()=>{n(),L()})))()}function Mm(){return(Mm=e((()=>{n(),L()})))()}function Nm(){return(Nm=e((()=>{n(),L()})))()}function Pm(){return(Pm=e((()=>{n(),L()})))()}function Fm(){return(Fm=e((()=>{n(),L()})))()}function Im(){return(Im=e((()=>{n(),L()})))()}function Lm(){return(Lm=e((()=>{n(),L()})))()}function Rm(){return(Rm=e((()=>{n(),L()})))()}function zm(){return(zm=e((()=>{n(),L()})))()}function Bm(){return(Bm=e((()=>{n(),L()})))()}function Vm(){return(Vm=e((()=>{n(),L()})))()}function Hm(){return(Hm=e((()=>{n(),L()})))()}function Um(){return(Um=e((()=>{n(),L()})))()}function Wm(){return(Wm=e((()=>{n(),L()})))()}function Gm(){return(Gm=e((()=>{n(),L()})))()}function Km(){return(Km=e((()=>{n(),L()})))()}function qm(){return(qm=e((()=>{n(),L()})))()}function Jm(){return(Jm=e((()=>{n(),L()})))()}function Ym(){return(Ym=e((()=>{n(),L()})))()}function Xm(){return(Xm=e((()=>{n(),L()})))()}function Zm(){return(Zm=e((()=>{n(),L()})))()}function Qm(){return(Qm=e((()=>{n(),L()})))()}function $m(){return($m=e((()=>{n(),L()})))()}function eh(){return(eh=e((()=>{n(),L()})))()}function th(){return(th=e((()=>{n(),L()})))()}function nh(){return(nh=e((()=>{n(),L()})))()}function rh(){return(rh=e((()=>{n(),L()})))()}function ih(){return(ih=e((()=>{n(),L()})))()}function ah(){return(ah=e((()=>{n(),L()})))()}function oh(){return(oh=e((()=>{n(),L()})))()}function sh(){return(sh=e((()=>{n(),L()})))()}function ch(){return(ch=e((()=>{n(),L()})))()}function lh(){return(lh=e((()=>{n(),L()})))()}function uh(){return(uh=e((()=>{n(),L()})))()}function dh(){return(dh=e((()=>{n(),L()})))()}function fh(){return(fh=e((()=>{n(),L()})))()}function ph(){return(ph=e((()=>{n(),L()})))()}function mh(){return(mh=e((()=>{n(),L()})))()}function hh(){return(hh=e((()=>{n(),L()})))()}function gh(){return(gh=e((()=>{n(),L()})))()}function _h(){return(_h=e((()=>{n(),L()})))()}function vh(){return(vh=e((()=>{n(),L()})))()}function yh(){return(yh=e((()=>{n(),L()})))()}function bh(){return(bh=e((()=>{n(),L()})))()}function xh(){return(xh=e((()=>{n(),L()})))()}function Sh(){return(Sh=e((()=>{n(),L()})))()}function Ch(){return(Ch=e((()=>{n(),L()})))()}function wh(){return(wh=e((()=>{n(),L()})))()}function Th(){return(Th=e((()=>{n(),L()})))()}function Eh(){return(Eh=e((()=>{n(),L()})))()}function Dh(){return(Dh=e((()=>{n(),L()})))()}function Oh(){return(Oh=e((()=>{n(),L()})))()}function kh(){return(kh=e((()=>{n(),L()})))()}function Ah(){return(Ah=e((()=>{n(),L()})))()}function jh(){return(jh=e((()=>{n(),L()})))()}function Mh(){return(Mh=e((()=>{n(),L()})))()}function Nh(){return(Nh=e((()=>{n(),L()})))()}function Ph(){return(Ph=e((()=>{n(),L()})))()}function Fh(){return(Fh=e((()=>{n(),L()})))()}function Ih(){return(Ih=e((()=>{n(),L()})))()}function Lh(){return(Lh=e((()=>{n(),L()})))()}function Rh(){return(Rh=e((()=>{n(),L()})))()}function zh(){return(zh=e((()=>{n(),L()})))()}function Bh(){return(Bh=e((()=>{n(),L()})))()}function Vh(){return(Vh=e((()=>{n(),L()})))()}function Hh(){return(Hh=e((()=>{n(),L()})))()}function Uh(){return(Uh=e((()=>{n(),L()})))()}function Wh(){return(Wh=e((()=>{n(),L()})))()}function Gh(){return(Gh=e((()=>{n(),L()})))()}function Kh(){return(Kh=e((()=>{n(),L()})))()}function qh(){return(qh=e((()=>{n(),L()})))()}function Jh(){return(Jh=e((()=>{n(),L()})))()}function Yh(){return(Yh=e((()=>{n(),L()})))()}function Xh(){return(Xh=e((()=>{n(),L()})))()}function Zh(){return(Zh=e((()=>{n(),L()})))()}function Qh(){return(Qh=e((()=>{n(),L()})))()}function $h(){return($h=e((()=>{n(),L()})))()}function eg(){return(eg=e((()=>{n(),L()})))()}function tg(){return(tg=e((()=>{n(),L()})))()}function ng(){return(ng=e((()=>{n(),L()})))()}function rg(){return(rg=e((()=>{n(),L()})))()}function ig(){return(ig=e((()=>{n(),L()})))()}function ag(){return(ag=e((()=>{n(),L()})))()}function og(){return(og=e((()=>{n(),L()})))()}function sg(){return(sg=e((()=>{n(),L()})))()}function cg(){return(cg=e((()=>{n(),L()})))()}function lg(){return(lg=e((()=>{n(),L()})))()}function ug(){return(ug=e((()=>{n(),L()})))()}function dg(){return(dg=e((()=>{n(),L()})))()}function fg(){return(fg=e((()=>{n(),L()})))()}function pg(){return(pg=e((()=>{n(),L()})))()}function mg(){return(mg=e((()=>{n(),L()})))()}function hg(){return(hg=e((()=>{n(),L()})))()}function gg(){return(gg=e((()=>{n(),L()})))()}function _g(){return(_g=e((()=>{n(),L()})))()}function vg(){return(vg=e((()=>{n(),L()})))()}function yg(){return(yg=e((()=>{n(),L()})))()}function bg(){return(bg=e((()=>{n(),L()})))()}function xg(){return(xg=e((()=>{n(),L()})))()}function Sg(){return(Sg=e((()=>{n(),L()})))()}function Cg(){return(Cg=e((()=>{n(),L()})))()}function wg(){return(wg=e((()=>{n(),L()})))()}function Tg(){return(Tg=e((()=>{n(),L()})))()}function Eg(){return(Eg=e((()=>{n(),L()})))()}function Dg(){return(Dg=e((()=>{n(),L()})))()}function Og(){return(Og=e((()=>{n(),L()})))()}function kg(){return(kg=e((()=>{n(),L()})))()}function Ag(){return(Ag=e((()=>{n(),L()})))()}function jg(){return(jg=e((()=>{n(),L()})))()}function Mg(){return(Mg=e((()=>{n(),L()})))()}function Ng(){return(Ng=e((()=>{n(),L()})))()}function Pg(){return(Pg=e((()=>{n(),L()})))()}function Fg(){return(Fg=e((()=>{n(),L()})))()}function Ig(){return(Ig=e((()=>{n(),L()})))()}function Lg(){return(Lg=e((()=>{n(),L()})))()}function Rg(){return(Rg=e((()=>{n(),L()})))()}function zg(){return(zg=e((()=>{n(),L()})))()}function Bg(){return(Bg=e((()=>{n(),L()})))()}function Vg(){return(Vg=e((()=>{n(),L()})))()}function Hg(){return(Hg=e((()=>{n(),L()})))()}function Ug(){return(Ug=e((()=>{n(),L()})))()}function Wg(){return(Wg=e((()=>{n(),L()})))()}function Gg(){return(Gg=e((()=>{n(),L()})))()}function Kg(){return(Kg=e((()=>{n(),L()})))()}function qg(){return(qg=e((()=>{n(),L()})))()}function Jg(){return(Jg=e((()=>{n(),L()})))()}function Yg(){return(Yg=e((()=>{n(),L()})))()}function Xg(){return(Xg=e((()=>{n(),L()})))()}function Zg(){return(Zg=e((()=>{n(),L()})))()}function Qg(){return(Qg=e((()=>{n(),L()})))()}function $g(){return($g=e((()=>{n(),L()})))()}function e_(){return(e_=e((()=>{n(),L()})))()}function t_(){return(t_=e((()=>{n(),L()})))()}function n_(){return(n_=e((()=>{n(),L()})))()}function r_(){return(r_=e((()=>{n(),L()})))()}function i_(){return(i_=e((()=>{n(),L()})))()}function a_(){return(a_=e((()=>{n(),L()})))()}function o_(){return(o_=e((()=>{n(),L()})))()}function s_(){return(s_=e((()=>{n(),L()})))()}function c_(){return(c_=e((()=>{n(),L()})))()}function l_(){return(l_=e((()=>{n(),L()})))()}function u_(){return(u_=e((()=>{n(),L()})))()}function d_(){return(d_=e((()=>{n(),L()})))()}function f_(){return(f_=e((()=>{n(),L()})))()}function p_(){return(p_=e((()=>{n(),L()})))()}function m_(){return(m_=e((()=>{n(),L()})))()}function h_(){return(h_=e((()=>{n(),L()})))()}function g_(){return(g_=e((()=>{n(),L()})))()}function __(){return(__=e((()=>{n(),L()})))()}function v_(){return(v_=e((()=>{n(),L()})))()}function y_(){return(y_=e((()=>{n(),L()})))()}function b_(){return(b_=e((()=>{n(),L()})))()}function x_(){return(x_=e((()=>{n(),L()})))()}function S_(){return(S_=e((()=>{n(),L()})))()}function C_(){return(C_=e((()=>{n(),L()})))()}function w_(){return(w_=e((()=>{n(),L()})))()}function T_(){return(T_=e((()=>{n(),L()})))()}function E_(){return(E_=e((()=>{n(),L()})))()}function D_(){return(D_=e((()=>{n(),L()})))()}function O_(){return(O_=e((()=>{n(),L()})))()}function k_(){return(k_=e((()=>{n(),L()})))()}function A_(){return(A_=e((()=>{n(),L()})))()}function j_(){return(j_=e((()=>{n(),L()})))()}function M_(){return(M_=e((()=>{n(),L()})))()}function N_(){return(N_=e((()=>{n(),L()})))()}function P_(){return(P_=e((()=>{n(),L()})))()}function F_(){return(F_=e((()=>{n(),L()})))()}function I_(){return(I_=e((()=>{n(),L()})))()}function L_(){return(L_=e((()=>{n(),L()})))()}function R_(){return(R_=e((()=>{n(),L()})))()}function z_(){return(z_=e((()=>{n(),L()})))()}function B_(){return(B_=e((()=>{n(),L()})))()}function V_(){return(V_=e((()=>{n(),L()})))()}function H_(){return(H_=e((()=>{n(),L()})))()}function U_(){return(U_=e((()=>{n(),L()})))()}function W_(){return(W_=e((()=>{n(),L()})))()}function G_(){return(G_=e((()=>{n(),L()})))()}function K_(){return(K_=e((()=>{n(),L()})))()}function q_(){return(q_=e((()=>{n(),L()})))()}function J_(){return(J_=e((()=>{n(),L()})))()}function Y_(){return(Y_=e((()=>{n(),L()})))()}function X_(){return(X_=e((()=>{n(),L()})))()}function Z_(){return(Z_=e((()=>{n(),L()})))()}function Q_(){return(Q_=e((()=>{n(),L()})))()}function $_(){return($_=e((()=>{n(),L()})))()}function ev(){return(ev=e((()=>{n(),L()})))()}function tv(){return(tv=e((()=>{n(),L()})))()}function nv(){return(nv=e((()=>{n(),L()})))()}function rv(){return(rv=e((()=>{n(),L()})))()}function iv(){return(iv=e((()=>{n(),L()})))()}function av(){return(av=e((()=>{n(),L()})))()}function ov(){return(ov=e((()=>{n(),L()})))()}function sv(){return(sv=e((()=>{n(),L()})))()}function cv(){return(cv=e((()=>{n(),L()})))()}function lv(){return(lv=e((()=>{n(),L()})))()}function uv(){return(uv=e((()=>{n(),L()})))()}function dv(){return(dv=e((()=>{n(),L()})))()}function fv(){return(fv=e((()=>{n(),L()})))()}function pv(){return(pv=e((()=>{n(),L()})))()}function mv(){return(mv=e((()=>{n(),L()})))()}function hv(){return(hv=e((()=>{n(),L()})))()}function gv(){return(gv=e((()=>{n(),L()})))()}function _v(){return(_v=e((()=>{n(),L()})))()}function vv(){return(vv=e((()=>{n(),L()})))()}function yv(){return(yv=e((()=>{n(),L()})))()}function bv(){return(bv=e((()=>{n(),L()})))()}function xv(){return(xv=e((()=>{n(),L()})))()}function Sv(){return(Sv=e((()=>{n(),L()})))()}function Cv(){return(Cv=e((()=>{n(),L()})))()}function wv(){return(wv=e((()=>{n(),L()})))()}function Tv(){return(Tv=e((()=>{n(),L()})))()}function Ev(){return(Ev=e((()=>{n(),L()})))()}function Dv(){return(Dv=e((()=>{n(),L()})))()}function Ov(){return(Ov=e((()=>{n(),L()})))()}function kv(){return(kv=e((()=>{n(),L()})))()}function Av(){return(Av=e((()=>{n(),L()})))()}function jv(){return(jv=e((()=>{n(),L()})))()}function Mv(){return(Mv=e((()=>{n(),L()})))()}function Nv(){return(Nv=e((()=>{n(),L()})))()}function Pv(){return(Pv=e((()=>{n(),L()})))()}function Fv(){return(Fv=e((()=>{n(),L()})))()}function Iv(){return(Iv=e((()=>{n(),L()})))()}function Lv(){return(Lv=e((()=>{n(),L()})))()}function Rv(){return(Rv=e((()=>{n(),L()})))()}function zv(){return(zv=e((()=>{n(),L()})))()}function Bv(){return(Bv=e((()=>{n(),L()})))()}function Vv(){return(Vv=e((()=>{n(),L()})))()}function Hv(){return(Hv=e((()=>{n(),L()})))()}function Uv(){return(Uv=e((()=>{n(),L()})))()}function Wv(){return(Wv=e((()=>{n(),L()})))()}function Gv(){return(Gv=e((()=>{n(),L()})))()}function Kv(){return(Kv=e((()=>{n(),L()})))()}function qv(){return(qv=e((()=>{n(),L()})))()}function Jv(){return(Jv=e((()=>{n(),L()})))()}function Yv(){return(Yv=e((()=>{n(),L()})))()}function Xv(){return(Xv=e((()=>{n(),L()})))()}function Zv(){return(Zv=e((()=>{n(),L()})))()}function Qv(){return(Qv=e((()=>{n(),L()})))()}function $v(){return($v=e((()=>{n(),L()})))()}function ey(){return(ey=e((()=>{n(),L()})))()}function ty(){return(ty=e((()=>{n(),L()})))()}function ny(){return(ny=e((()=>{n(),L()})))()}function ry(){return(ry=e((()=>{n(),L()})))()}function iy(){return(iy=e((()=>{n(),L()})))()}function ay(){return(ay=e((()=>{n(),L()})))()}function oy(){return(oy=e((()=>{n(),L()})))()}function sy(){return(sy=e((()=>{n(),L()})))()}function cy(){return(cy=e((()=>{n(),L()})))()}function ly(){return(ly=e((()=>{n(),L()})))()}function uy(){return(uy=e((()=>{n(),L()})))()}function dy(){return(dy=e((()=>{n(),L()})))()}function fy(){return(fy=e((()=>{n(),L()})))()}function py(){return(py=e((()=>{n(),L()})))()}function my(){return(my=e((()=>{n(),L()})))()}function hy(){return(hy=e((()=>{n(),L()})))()}function gy(){return(gy=e((()=>{n(),L()})))()}function _y(){return(_y=e((()=>{n(),L()})))()}function vy(){return(vy=e((()=>{n(),L()})))()}function yy(){return(yy=e((()=>{n(),L()})))()}function by(){return(by=e((()=>{n(),L()})))()}function xy(){return(xy=e((()=>{n(),L()})))()}function Sy(){return(Sy=e((()=>{n(),L()})))()}function Cy(){return(Cy=e((()=>{n(),L()})))()}function wy(){return(wy=e((()=>{n(),L()})))()}function Ty(){return(Ty=e((()=>{n(),L()})))()}function Ey(){return(Ey=e((()=>{n(),L()})))()}function Dy(){return(Dy=e((()=>{n(),L()})))()}function Oy(){return(Oy=e((()=>{n(),L()})))()}function ky(){return(ky=e((()=>{n(),L()})))()}function Ay(){return(Ay=e((()=>{n(),L()})))()}function jy(){return(jy=e((()=>{n(),L()})))()}function My(){return(My=e((()=>{n(),L()})))()}function Ny(){return(Ny=e((()=>{n(),L()})))()}function Py(){return(Py=e((()=>{n(),L()})))()}function Fy(){return(Fy=e((()=>{n(),L()})))()}function Iy(){return(Iy=e((()=>{n(),L()})))()}function Ly(){return(Ly=e((()=>{n(),L()})))()}function Ry(){return(Ry=e((()=>{n(),L()})))()}function zy(){return(zy=e((()=>{n(),L()})))()}function By(){return(By=e((()=>{n(),L()})))()}function Vy(){return(Vy=e((()=>{n(),L()})))()}function Hy(){return(Hy=e((()=>{n(),L()})))()}function Uy(){return(Uy=e((()=>{n(),L()})))()}function Wy(){return(Wy=e((()=>{n(),L()})))()}function Gy(){return(Gy=e((()=>{n(),L()})))()}function Ky(){return(Ky=e((()=>{n(),L()})))()}function qy(){return(qy=e((()=>{n(),L()})))()}function Jy(){return(Jy=e((()=>{n(),L()})))()}function Yy(){return(Yy=e((()=>{n(),L()})))()}function Xy(){return(Xy=e((()=>{n(),L()})))()}function Zy(){return(Zy=e((()=>{n(),L()})))()}function Qy(){return(Qy=e((()=>{n(),L()})))()}function $y(){return($y=e((()=>{n(),L()})))()}function eb(){return(eb=e((()=>{n(),L()})))()}function tb(){return(tb=e((()=>{n(),L()})))()}function nb(){return(nb=e((()=>{n(),L()})))()}function rb(){return(rb=e((()=>{n(),L()})))()}function ib(){return(ib=e((()=>{n(),L()})))()}function ab(){return(ab=e((()=>{n(),L()})))()}function ob(){return(ob=e((()=>{n(),L()})))()}function sb(){return(sb=e((()=>{n(),L()})))()}function cb(){return(cb=e((()=>{n(),L()})))()}function lb(){return(lb=e((()=>{n(),L()})))()}function ub(){return(ub=e((()=>{n(),L()})))()}function db(){return(db=e((()=>{n(),L()})))()}function fb(){return(fb=e((()=>{n(),L()})))()}function pb(){return(pb=e((()=>{n(),L()})))()}function mb(){return(mb=e((()=>{n(),L()})))()}function hb(){return(hb=e((()=>{n(),L()})))()}function gb(){return(gb=e((()=>{n(),L()})))()}function _b(){return(_b=e((()=>{n(),L()})))()}function vb(){return(vb=e((()=>{n(),L()})))()}function yb(){return(yb=e((()=>{n(),L()})))()}function bb(){return(bb=e((()=>{n(),L()})))()}function xb(){return(xb=e((()=>{n(),L()})))()}function Sb(){return(Sb=e((()=>{n(),L()})))()}function Cb(){return(Cb=e((()=>{n(),L()})))()}function wb(){return(wb=e((()=>{n(),L()})))()}function Tb(){return(Tb=e((()=>{n(),L()})))()}function Eb(){return(Eb=e((()=>{n(),L()})))()}function Db(){return(Db=e((()=>{n(),L()})))()}function Ob(){return(Ob=e((()=>{n(),L()})))()}function kb(){return(kb=e((()=>{n(),L()})))()}function Ab(){return(Ab=e((()=>{n(),L()})))()}function jb(){return(jb=e((()=>{n(),L()})))()}function Mb(){return(Mb=e((()=>{n(),L()})))()}function Nb(){return(Nb=e((()=>{n(),L()})))()}function Pb(){return(Pb=e((()=>{n(),L()})))()}function Fb(){return(Fb=e((()=>{n(),L()})))()}function Ib(){return(Ib=e((()=>{n(),L()})))()}function Lb(){return(Lb=e((()=>{n(),L()})))()}function Rb(){return(Rb=e((()=>{n(),L()})))()}function zb(){return(zb=e((()=>{n(),L()})))()}function Bb(){return(Bb=e((()=>{n(),L()})))()}function Vb(){return(Vb=e((()=>{n(),L()})))()}function Hb(){return(Hb=e((()=>{n(),L()})))()}function Ub(){return(Ub=e((()=>{n(),L()})))()}function Wb(){return(Wb=e((()=>{n(),L()})))()}function Gb(){return(Gb=e((()=>{n(),L()})))()}function Kb(){return(Kb=e((()=>{n(),L()})))()}function qb(){return(qb=e((()=>{n(),L()})))()}function Jb(){return(Jb=e((()=>{n(),L()})))()}function Yb(){return(Yb=e((()=>{n(),L()})))()}function Xb(){return(Xb=e((()=>{n(),L()})))()}function Zb(){return(Zb=e((()=>{n(),L()})))()}function Qb(){return(Qb=e((()=>{n(),L()})))()}function $b(){return($b=e((()=>{n(),L()})))()}function ex(){return(ex=e((()=>{n(),L()})))()}function tx(){return(tx=e((()=>{n(),L()})))()}function nx(){return(nx=e((()=>{n(),L()})))()}function rx(){return(rx=e((()=>{n(),L()})))()}function ix(){return(ix=e((()=>{n(),L()})))()}function ax(){return(ax=e((()=>{n(),L()})))()}function ox(){return(ox=e((()=>{n(),L()})))()}function sx(){return(sx=e((()=>{n(),L()})))()}function cx(){return(cx=e((()=>{n(),L()})))()}function lx(){return(lx=e((()=>{n(),L()})))()}function ux(){return(ux=e((()=>{n(),L()})))()}function dx(){return(dx=e((()=>{n(),L()})))()}function fx(){return(fx=e((()=>{n(),L()})))()}function px(){return(px=e((()=>{n(),L()})))()}function mx(){return(mx=e((()=>{n(),L()})))()}function hx(){return(hx=e((()=>{n(),L()})))()}function gx(){return(gx=e((()=>{n(),L()})))()}function _x(){return(_x=e((()=>{n(),L()})))()}function vx(){return(vx=e((()=>{n(),L()})))()}function yx(){return(yx=e((()=>{n(),L()})))()}function bx(){return(bx=e((()=>{n(),L()})))()}function xx(){return(xx=e((()=>{n(),L()})))()}function Sx(){return(Sx=e((()=>{n(),L()})))()}function Cx(){return(Cx=e((()=>{n(),L()})))()}function wx(){return(wx=e((()=>{n(),L()})))()}function Tx(){return(Tx=e((()=>{n(),L()})))()}function Ex(){return(Ex=e((()=>{n(),L()})))()}function Dx(){return(Dx=e((()=>{n(),L()})))()}function Ox(){return(Ox=e((()=>{n(),L()})))()}function kx(){return(kx=e((()=>{n(),L()})))()}function Ax(){return(Ax=e((()=>{n(),L()})))()}function jx(){return(jx=e((()=>{n(),L()})))()}function Mx(){return(Mx=e((()=>{n(),L()})))()}function Nx(){return(Nx=e((()=>{n(),L()})))()}function Px(){return(Px=e((()=>{n(),L()})))()}function Fx(){return(Fx=e((()=>{n(),L()})))()}function Ix(){return(Ix=e((()=>{n(),L()})))()}function Lx(){return(Lx=e((()=>{n(),L()})))()}function Rx(){return(Rx=e((()=>{n(),L()})))()}function zx(){return(zx=e((()=>{n(),L()})))()}function Bx(){return(Bx=e((()=>{n(),L()})))()}function Vx(){return(Vx=e((()=>{n(),L()})))()}function Hx(){return(Hx=e((()=>{n(),L()})))()}function Ux(){return(Ux=e((()=>{n(),L()})))()}function Wx(){return(Wx=e((()=>{n(),L()})))()}function Gx(){return(Gx=e((()=>{n(),L()})))()}function Kx(){return(Kx=e((()=>{n(),L()})))()}function qx(){return(qx=e((()=>{n(),L()})))()}function Jx(){return(Jx=e((()=>{n(),L()})))()}function Yx(){return(Yx=e((()=>{n(),L()})))()}function Xx(){return(Xx=e((()=>{n(),L()})))()}function Zx(){return(Zx=e((()=>{n(),L()})))()}function Qx(){return(Qx=e((()=>{n(),L()})))()}function $x(){return($x=e((()=>{n(),L()})))()}function eS(){return(eS=e((()=>{n(),L()})))()}function tS(){return(tS=e((()=>{n(),L()})))()}function nS(){return(nS=e((()=>{n(),L()})))()}function rS(){return(rS=e((()=>{n(),L()})))()}function iS(){return(iS=e((()=>{n(),L()})))()}function aS(){return(aS=e((()=>{n(),L()})))()}function oS(){return(oS=e((()=>{n(),L()})))()}function sS(){return(sS=e((()=>{n(),L()})))()}function cS(){return(cS=e((()=>{n(),L()})))()}function lS(){return(lS=e((()=>{n(),L()})))()}function uS(){return(uS=e((()=>{n(),L()})))()}function dS(){return(dS=e((()=>{n(),L()})))()}function fS(){return(fS=e((()=>{n(),L()})))()}function pS(){return(pS=e((()=>{n(),L()})))()}function mS(){return(mS=e((()=>{n(),L()})))()}function hS(){return(hS=e((()=>{n(),L()})))()}function gS(){return(gS=e((()=>{n(),L()})))()}function _S(){return(_S=e((()=>{n(),L()})))()}function vS(){return(vS=e((()=>{n(),L()})))()}function yS(){return(yS=e((()=>{n(),L()})))()}function bS(){return(bS=e((()=>{n(),L()})))()}function xS(){return(xS=e((()=>{n(),L()})))()}function SS(){return(SS=e((()=>{n(),L()})))()}function CS(){return(CS=e((()=>{n(),L()})))()}function wS(){return(wS=e((()=>{n(),L()})))()}function TS(){return(TS=e((()=>{n(),L()})))()}function ES(){return(ES=e((()=>{n(),L()})))()}function DS(){return(DS=e((()=>{n(),L()})))()}function OS(){return(OS=e((()=>{n(),L()})))()}function kS(){return(kS=e((()=>{n(),L()})))()}function AS(){return(AS=e((()=>{n(),L()})))()}function jS(){return(jS=e((()=>{n(),L()})))()}function MS(){return(MS=e((()=>{n(),L()})))()}function NS(){return(NS=e((()=>{n(),L()})))()}function PS(){return(PS=e((()=>{n(),L()})))()}function FS(){return(FS=e((()=>{n(),L()})))()}function IS(){return(IS=e((()=>{n(),L()})))()}function LS(){return(LS=e((()=>{n(),L()})))()}function RS(){return(RS=e((()=>{n(),L()})))()}function zS(){return(zS=e((()=>{n(),L()})))()}function BS(){return(BS=e((()=>{n(),L()})))()}function VS(){return(VS=e((()=>{n(),L()})))()}function HS(){return(HS=e((()=>{n(),L()})))()}function US(){return(US=e((()=>{n(),L()})))()}function WS(){return(WS=e((()=>{n(),L()})))()}function GS(){return(GS=e((()=>{n(),L()})))()}function KS(){return(KS=e((()=>{n(),L()})))()}function qS(){return(qS=e((()=>{n(),L()})))()}function JS(){return(JS=e((()=>{n(),L()})))()}function YS(){return(YS=e((()=>{n(),L()})))()}function XS(){return(XS=e((()=>{n(),L()})))()}function ZS(){return(ZS=e((()=>{n(),L()})))()}function QS(){return(QS=e((()=>{n(),L()})))()}function $S(){return($S=e((()=>{n(),L()})))()}function eC(){return(eC=e((()=>{n(),L()})))()}function tC(){return(tC=e((()=>{n(),L()})))()}function nC(){return(nC=e((()=>{n(),L()})))()}function rC(){return(rC=e((()=>{n(),L()})))()}function iC(){return(iC=e((()=>{n(),L()})))()}function aC(){return(aC=e((()=>{n(),L()})))()}function oC(){return(oC=e((()=>{n(),L()})))()}function sC(){return(sC=e((()=>{n(),L()})))()}function cC(){return(cC=e((()=>{n(),L()})))()}function lC(){return(lC=e((()=>{n(),L()})))()}function uC(){return(uC=e((()=>{n(),L()})))()}function dC(){return(dC=e((()=>{n(),L()})))()}function fC(){return(fC=e((()=>{n(),L()})))()}function pC(){return(pC=e((()=>{n(),L()})))()}function mC(){return(mC=e((()=>{n(),L()})))()}function hC(){return(hC=e((()=>{n(),L()})))()}function gC(){return(gC=e((()=>{n(),L()})))()}function _C(){return(_C=e((()=>{n(),L()})))()}function vC(){return(vC=e((()=>{n(),L()})))()}function yC(){return(yC=e((()=>{n(),L()})))()}function bC(){return(bC=e((()=>{n(),L()})))()}function xC(){return(xC=e((()=>{n(),L()})))()}function SC(){return(SC=e((()=>{n(),L()})))()}function CC(){return(CC=e((()=>{n(),L()})))()}function wC(){return(wC=e((()=>{n(),L()})))()}function TC(){return(TC=e((()=>{n(),L()})))()}function EC(){return(EC=e((()=>{n(),L()})))()}function DC(){return(DC=e((()=>{n(),L()})))()}function OC(){return(OC=e((()=>{n(),L()})))()}function kC(){return(kC=e((()=>{n(),L()})))()}function AC(){return(AC=e((()=>{n(),L()})))()}function jC(){return(jC=e((()=>{n(),L()})))()}function MC(){return(MC=e((()=>{n(),L()})))()}function NC(){return(NC=e((()=>{n(),L()})))()}function PC(){return(PC=e((()=>{n(),L()})))()}function FC(){return(FC=e((()=>{n(),L()})))()}function IC(){return(IC=e((()=>{n(),L()})))()}function LC(){return(LC=e((()=>{n(),L()})))()}function RC(){return(RC=e((()=>{n(),L()})))()}function zC(){return(zC=e((()=>{n(),L()})))()}function BC(){return(BC=e((()=>{n(),L()})))()}function VC(){return(VC=e((()=>{n(),L()})))()}function HC(){return(HC=e((()=>{n(),L()})))()}function UC(){return(UC=e((()=>{n(),L()})))()}function WC(){return(WC=e((()=>{n(),L()})))()}function GC(){return(GC=e((()=>{n(),L()})))()}function KC(){return(KC=e((()=>{n(),L()})))()}function qC(){return(qC=e((()=>{n(),L()})))()}function JC(){return(JC=e((()=>{n(),L()})))()}function YC(){return(YC=e((()=>{n(),L()})))()}function XC(){return(XC=e((()=>{n(),L()})))()}function ZC(){return(ZC=e((()=>{n(),L()})))()}function QC(){return(QC=e((()=>{n(),L()})))()}function $C(){return($C=e((()=>{n(),L()})))()}function ew(){return(ew=e((()=>{n(),L()})))()}function tw(){return(tw=e((()=>{n(),L()})))()}function nw(){return(nw=e((()=>{n(),L()})))()}function rw(){return(rw=e((()=>{n(),L()})))()}function iw(){return(iw=e((()=>{n(),L()})))()}function aw(){return(aw=e((()=>{n(),L()})))()}function ow(){return(ow=e((()=>{n(),L()})))()}function sw(){return(sw=e((()=>{n(),L()})))()}function cw(){return(cw=e((()=>{n(),L()})))()}function lw(){return(lw=e((()=>{n(),L()})))()}function uw(){return(uw=e((()=>{n(),L()})))()}function dw(){return(dw=e((()=>{n(),L()})))()}function fw(){return(fw=e((()=>{n(),L()})))()}function pw(){return(pw=e((()=>{n(),L()})))()}function mw(){return(mw=e((()=>{n(),L()})))()}function hw(){return(hw=e((()=>{n(),L()})))()}function gw(){return(gw=e((()=>{n(),L()})))()}function _w(){return(_w=e((()=>{n(),L()})))()}function vw(){return(vw=e((()=>{n(),L()})))()}function yw(){return(yw=e((()=>{n(),L()})))()}function bw(){return(bw=e((()=>{n(),L()})))()}function xw(){return(xw=e((()=>{n(),L()})))()}function Sw(){return(Sw=e((()=>{n(),L()})))()}function Cw(){return(Cw=e((()=>{n(),L()})))()}function ww(){return(ww=e((()=>{n(),L()})))()}function Tw(){return(Tw=e((()=>{n(),L()})))()}function Ew(){return(Ew=e((()=>{n(),L()})))()}function Dw(){return(Dw=e((()=>{n(),L()})))()}function Ow(){return(Ow=e((()=>{n(),L()})))()}function kw(){return(kw=e((()=>{n(),L()})))()}function Aw(){return(Aw=e((()=>{n(),L()})))()}function jw(){return(jw=e((()=>{n(),L()})))()}function Mw(){return(Mw=e((()=>{n(),L()})))()}function Nw(){return(Nw=e((()=>{n(),L()})))()}function Pw(){return(Pw=e((()=>{n(),L()})))()}function Fw(){return(Fw=e((()=>{n(),L()})))()}function Iw(){return(Iw=e((()=>{n(),L()})))()}function Lw(){return(Lw=e((()=>{n(),L()})))()}function Rw(){return(Rw=e((()=>{n(),L()})))()}function zw(){return(zw=e((()=>{n(),L()})))()}function Bw(){return(Bw=e((()=>{n(),L()})))()}function Vw(){return(Vw=e((()=>{n(),L()})))()}function Hw(){return(Hw=e((()=>{n(),L()})))()}function Uw(){return(Uw=e((()=>{n(),L()})))()}function Ww(){return(Ww=e((()=>{n(),L()})))()}function Gw(){return(Gw=e((()=>{n(),L()})))()}function Kw(){return(Kw=e((()=>{n(),L()})))()}function qw(){return(qw=e((()=>{n(),L()})))()}function Jw(){return(Jw=e((()=>{n(),L()})))()}function Yw(){return(Yw=e((()=>{n(),L()})))()}function Xw(){return(Xw=e((()=>{n(),L()})))()}function Zw(){return(Zw=e((()=>{n(),L()})))()}function Qw(){return(Qw=e((()=>{n(),L()})))()}function $w(){return($w=e((()=>{n(),L()})))()}function eT(){return(eT=e((()=>{n(),L()})))()}function tT(){return(tT=e((()=>{n(),L()})))()}function nT(){return(nT=e((()=>{n(),L()})))()}function rT(){return(rT=e((()=>{n(),L()})))()}function iT(){return(iT=e((()=>{n(),L()})))()}function aT(){return(aT=e((()=>{n(),L()})))()}function oT(){return(oT=e((()=>{n(),L()})))()}function sT(){return(sT=e((()=>{n(),L()})))()}function cT(){return(cT=e((()=>{n(),L()})))()}function lT(){return(lT=e((()=>{n(),L()})))()}function uT(){return(uT=e((()=>{n(),L()})))()}function dT(){return(dT=e((()=>{n(),L()})))()}function fT(){return(fT=e((()=>{n(),L()})))()}function pT(){return(pT=e((()=>{n(),L()})))()}function mT(){return(mT=e((()=>{n(),L()})))()}function hT(){return(hT=e((()=>{n(),L()})))()}function gT(){return(gT=e((()=>{n(),L()})))()}function _T(){return(_T=e((()=>{n(),L()})))()}function vT(){return(vT=e((()=>{n(),L()})))()}function yT(){return(yT=e((()=>{n(),L()})))()}function bT(){return(bT=e((()=>{n(),L()})))()}function xT(){return(xT=e((()=>{n(),L()})))()}function ST(){return(ST=e((()=>{n(),L()})))()}function CT(){return(CT=e((()=>{n(),L()})))()}function wT(){return(wT=e((()=>{n(),L()})))()}function TT(){return(TT=e((()=>{n(),L()})))()}function ET(){return(ET=e((()=>{n(),L()})))()}function DT(){return(DT=e((()=>{n(),L()})))()}function OT(){return(OT=e((()=>{n(),L()})))()}function kT(){return(kT=e((()=>{n(),L()})))()}function AT(){return(AT=e((()=>{n(),L()})))()}function jT(){return(jT=e((()=>{n(),L()})))()}function MT(){return(MT=e((()=>{n(),L()})))()}function NT(){return(NT=e((()=>{n(),L()})))()}function PT(){return(PT=e((()=>{n(),L()})))()}function FT(){return(FT=e((()=>{n(),L()})))()}function IT(){return(IT=e((()=>{n(),L()})))()}function LT(){return(LT=e((()=>{n(),L()})))()}function RT(){return(RT=e((()=>{n(),L()})))()}function zT(){return(zT=e((()=>{n(),L()})))()}function BT(){return(BT=e((()=>{n(),L()})))()}var VT;function HT(){return(HT=e((()=>{n(),L(),VT=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>c`
  <svg
    slot=${I(e)}
    class=${`x-close-icon ${n??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${r}
    height=${a}
    style=${I(o)}
  >
    ${st(t,()=>i`<title>${t}</title>`)}
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
`})))()}function UT(){return(UT=e((()=>{n(),L()})))()}function WT(){return(WT=e((()=>{n(),L()})))()}function GT(){return(GT=e((()=>{n(),L()})))()}function KT(){return(KT=e((()=>{n(),L()})))()}function qT(){return(qT=e((()=>{n(),L()})))()}function JT(){return(JT=e((()=>{n(),L()})))()}function YT(){return(YT=e((()=>{n(),L()})))()}function XT(){return(XT=e((()=>{n(),L()})))()}function ZT(){return(ZT=e((()=>{n(),L()})))()}function QT(){return(QT=e((()=>{li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT(),OT(),kT(),AT(),jT(),MT(),NT(),PT(),FT(),IT(),LT(),RT(),zT(),BT(),HT(),UT(),WT(),GT(),KT(),qT(),JT(),YT(),XT(),ZT()})))()}var $T;function eE(){return(eE=e((()=>{P(),Yr(),$T=tt(()=>qr),customElements.define(`cosmoz-keybinding-provider`,$T.Provider)})))()}var tE;function nE(){return(nE=e((()=>{P(),eE(),kr(),tE=(e,t)=>{let n=Ce($T),r=Or(e);O(()=>n(r),t)}})))()}function K(){return(K=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function rE(e,t){if(e&&sE.test(e)||e===`//`)return e;if(cE===void 0){cE=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,cE=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,cE)try{return new URL(e,t).href}catch{return e}return q||(q=document.implementation.createHTMLDocument(`temp`),q.base=q.createElement(`base`),q.head.appendChild(q.base),q.anchor=q.createElement(`a`),q.body.appendChild(q.anchor)),q.base.href=t,q.anchor.href=e,q.anchor.href||e}function iE(e,t){return e.replace(oE,function(e,n,r,i){return n+`'`+rE(r.replace(/["']/g,``),t)+`'`+i})}function aE(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var oE,sE,cE,q;function lE(){return(lE=e((()=>{K(),oE=/(url\()([^)]*)(\))/g,sE=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var uE,dE,fE,pE,mE,hE,gE,_E,vE,yE,bE,xE,SE,CE;function wE(){return(wE=e((()=>{K(),lE(),uE=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,dE=uE&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),fE=window.Polymer&&window.Polymer.rootPath||aE(document.baseURI||window.location.href),pE=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,mE=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,hE=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,gE=window.Polymer&&window.Polymer.legacyOptimizations||!1,_E=window.Polymer&&window.Polymer.legacyWarnings||!1,vE=window.Polymer&&window.Polymer.syncInitialRender||!1,yE=window.Polymer&&window.Polymer.legacyUndefined||!1,bE=window.Polymer&&window.Polymer.orderedComputed||!1,xE=window.Polymer&&window.Polymer.removeNestedTemplates||!1,SE=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,CE=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function TE(){}var EE,DE;function OE(){return(OE=e((()=>{K(),EE=0,TE.prototype.__mixinApplications,TE.prototype.__mixinSet,DE=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=EE++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function kE(e,t){ME[e]=NE[e.toLowerCase()]=t}function AE(e){return ME[e]||NE[e.toLowerCase()]}function jE(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var ME,NE,PE;function FE(){return(FE=e((()=>{K(),lE(),wE(),ME={},NE={},PE=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=AE(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=rE(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=aE(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(mE&&AE(e)!==void 0)throw kE(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,kE(e,this),jE(this)}}},PE.prototype.modules=ME,customElements.define(`dom-module`,PE)})))()}function IE(e){return PE.import(e)}function LE(e){let t=iE((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function RE(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...zE(t[e]));return n}function zE(e){let t=IE(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...HE(t));let n=t.querySelector(`template`);n&&e.push(...BE(n,t.assetpath)),t._styles=e}return t._styles}function BE(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(WE);a&&n.push(...RE(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=iE(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function VE(e){let t=IE(e);return t?HE(t):[]}function HE(e){let t=[],n=e.querySelectorAll(UE);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(GE);if(n&&!e._unscopedStyle){let t=LE(e);t.setAttribute(GE,``),e._unscopedStyle=t}else e._style||=LE(e);t.push(n?e._unscopedStyle:e._style)}}return t}var UE,WE,GE;function KE(){return(KE=e((()=>{FE(),lE(),UE=`link[rel=import][type~=css]`,WE=`include`,GE=`shady-unscoped`})))()}var qE;function JE(){return(JE=e((()=>{qE=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function YE(e){return e.indexOf(`.`)>=0}function XE(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function ZE(e,t){return e.indexOf(t+`.`)===0}function QE(e,t){return t.indexOf(e+`.`)===0}function $E(e,t,n){return t+n.slice(e.length)}function eD(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function tD(e){return Array.isArray(e)?eD(e).split(`.`):e.toString().split(`.`)}function J(e,t,n){let r=e,i=tD(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function nD(e,t,n){let r=e,i=tD(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function rD(){return(rD=e((()=>{K()})))()}function iD(e){return oD[e]||(oD[e]=e.indexOf(`-`)<0?e:e.replace(sD,e=>e[1].toUpperCase()))}function aD(e){return oD[e]||(oD[e]=e.replace(cD,`-$1`).toLowerCase())}var oD,sD,cD;function lD(){return(lD=e((()=>{K(),oD={},sD=/-[a-z]/g,cD=/([A-Z])/g})))()}function uD(){hD=!1;let e=pD.length;for(let t=0;t<e;t++){let e=pD[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}pD.splice(0,e),fD+=e}var dD,fD,pD,mD,hD,gD,_D;function vD(){return(vD=e((()=>{K(),dD=0,fD=0,pD=[],mD=0,hD=!1,gD=document.createTextNode(``),new window.MutationObserver(uD).observe(gD,{characterData:!0}),_D={run(e){return hD||(hD=!0,gD.textContent=mD++),pD.push(e),dD++},cancel(e){let t=e-fD;if(t>=0){if(!pD[t])throw Error(`invalid async handle: `+e);pD[t]=null}}}})))()}var yD,bD;function xD(){return(xD=e((()=>{K(),OE(),vD(),JE(),yD=_D,bD=DE(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,yD.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=qE(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function SD(e,t){if(!CD[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var CD,wD,TD,ED;function DD(){return(DD=e((()=>{for(K(),OE(),lD(),xD(),CD={},wD=HTMLElement.prototype;wD;){let e=Object.getOwnPropertyNames(wD);for(let t=0;t<e.length;t++)CD[e[t]]=!0;wD=Object.getPrototypeOf(wD)}TD=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,ED=DE(e=>{let t=bD(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(iD(e[t]))}static attributeNameForProperty(e){return aD(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(TD(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){SD(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function OD(){if(!LD){LD=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,RD=e.placeholder===e.textContent}return RD}function kD(e){OD()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function AD(e){let t=e.getAttribute(`is`);if(t&&ID[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];zD(e,n,t),n.removeAttribute(t)}}return e}function jD(e,t){let n=t.parentInfo&&jD(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function MD(e,t,n,r){r.id&&(t[r.id]=n)}function ND(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function PD(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function FD(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var ID,LD,RD,zD,BD;function VD(){return(VD=e((()=>{K(),OE(),ID={"dom-if":!0,"dom-repeat":!0},LD=!1,RD=!1,zD=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),BD=DE(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),kD(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=AD(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=jD(i,o);MD(this,i.$,n,o),PD(this,n,o,t),ND(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=FD(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function HD(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function UD(e,t,n,r,i,a){if(t){let o=!1,s=CO++;for(let c in n){let l=t[i?XE(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||GD(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function WD(e,t,n,r,i,a,o,s){let c=!1,l=t[o?XE(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||GD(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function GD(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&ZE(n,e))||!!(t.wildcard&&QE(n,e))}return!0}function KD(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function qD(e,t,n,r,i){let a=e[Y.NOTIFY],o,s=CO++;for(let c in t)t[c]&&(a&&WD(e,a,s,c,n,r,i)||i&&JD(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function JD(e,t,n){let r=XE(t);return r!==t&&(YD(e,aD(r)+`-changed`,n[t],t),!0)}function YD(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),qE(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function XD(e,t,n,r,i,a){let o=(a?XE(t):t)==t?null:t,s=o?J(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),YD(e,i.eventName,s,o)}function ZD(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=$E(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[Y.READ_ONLY]||!t[Y.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function QD(e,t,n,r,i){let a=e.__data[t];pE&&(a=pE(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function $D(e,t,n,r){let i=e[Y.COMPUTE];if(i){if(bE){CO++;let a=eO(e),o=[];for(let e in t)OO(e,i,o,a,r);let s;for(;s=o.shift();)nO(e,``,t,n,s)&&OO(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;UD(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function eO(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[Y.COMPUTE],{counts:r,ready:i,total:a}=tO(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function tO(e){let t=e[TO],n={},r=e[Y.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function nO(e,t,n,r,i){let a=mO(e,t,n,r,i);if(a===wO)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function rO(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];QE(a,t)?(i=$E(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):QE(o,t)&&(i=$E(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function iO(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),lO(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||aD(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,aO(e,t,s,r,c)}}function aO(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=vO(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:oO,info:o,trigger:r})}}}}function oO(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=$E(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==wO&&sO(e,s,c,l,o)}}function sO(e,t,n,r,i){if(i=cO(t,i,n,r),pE&&(i=pE(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[Y.READ_ONLY]||!t[Y.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function cO(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function lO(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function uO(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];dO(a,n),fO(a,e,n)}a.__dataHost=e}}function dO(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=qE(e)),e[a]=t.literal)}}function fO(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){ZD(e,t,n.target,r.source,r.negate)})}}function pO(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function mO(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===wO?wO:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function hO(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function gO(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:kO};return t[2].trim()?_O(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function _O(e,t){return t.args=e.map(function(e){let n=vO(e);return n.literal||(t.static=!1),n},this),t}function vO(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=XE(t),n.structured=YE(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function yO(e,t,n){let r=J(e,n);return r===void 0&&(r=t[n]),r}function bO(e,t,n,r){let i={indexSplices:r};yE&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),yE&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function xO(e,t,n,r,i,a){bO(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function SO(e){return e[0].toUpperCase()+e.substring(1)}var CO,wO,Y,TO,EO,DO,OO,kO,AO,jO,MO;function NO(){return(NO=e((()=>{K(),JE(),OE(),rD(),lD(),DD(),VD(),wE(),CO=0,wO=[],Y={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},TO=`__computeInfo`,EO=/[A-Z]/,DO=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},OO=(e,t,n,r,i)=>{let a=t[i?XE(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==CO&&(!i||GD(e,o.trigger))&&(o.info.lastRun=CO,DO(o.info,n,r))}},kO=[],AO=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),jO=DE(e=>{let t=BD(ED(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return Y}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(MO.length){let e=MO[MO.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[Y.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==Y.READ_ONLY);let r=HD(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=HD(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,Y.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,Y.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,Y.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,Y.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||XE(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=J(this,e);if(e=nD(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return rO(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=qE(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&YE(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[Y.NOTIFY]&&this[Y.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[Y.READ_ONLY]||!this[Y.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;$D(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),UD(this,this[Y.REFLECT],t,n,r),UD(this,this[Y.OBSERVE],t,n,r),i&&qD(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[Y.PROPAGATE]&&UD(this,this[Y.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{UD(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=eD(e),t=eD(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=eD(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=J(this,e,n);bO(this,r,n.path,t)}get(e,t){return J(t||this,e)}set(e,t,n){n?nD(n,e,t):(!this[Y.READ_ONLY]||!this[Y.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=J(this,e,n),i=r.length,a=r.push(...t);return t.length&&xO(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=J(this,e,t),r=!!n.length,i=n.pop();return r&&xO(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=J(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&xO(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=J(this,e,t),r=!!n.length,i=n.shift();return r&&xO(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=J(this,e,n),i=r.unshift(...t);return t.length&&xO(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=J(this,e,r),n=r.path}else n=Array.isArray(e)?eD(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,Y.READ_ONLY),t&&(this[`_set`+SO(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,Y.OBSERVE,{fn:KD,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,Y.OBSERVE,{fn:KD,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=gO(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);pO(this,n,Y.OBSERVE,mO,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,Y.NOTIFY,{fn:XD,info:{eventName:aD(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,Y.REFLECT,{fn:QD,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=gO(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=pO(this,r,Y.COMPUTE,nO,e,n);HD(this,TO)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=QE(o,t),i=yO(r,n,e?t:o);l={path:e?t:o,value:i,base:e?J(r,o):i}}else l=s?yO(r,n,o):r[o]}if(yE&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return wO;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),MO.push(this);let n=super._stampTemplate(e,t);if(MO.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,uO(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];qE(qE(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=hO(t)||` `,iO(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;EO.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=hO(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=iD(i)),iO(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;xE&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(SE&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),xE||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];iO(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=AO.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=gO(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=AO.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?mO(e,n,r,i,t.signature):n==t.source?a&&YE(n)?J(e,n):e.__data[n]:J(e,t.source),t.negate&&(o=!o),o}}return n}),MO=[]})))()}function PO(){IO++}function FO(e){LO.push(e)}var IO,LO;function RO(){return(RO=e((()=>{IO=0,LO=[]})))()}function zO(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var BO;function VO(){return(VO=e((()=>{K(),OE(),RO(),xD(),BO=DE(e=>{let t=bD(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=zO(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){FO(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){PO(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var HO,UO,WO;function GO(){return(GO=e((()=>{K(),wE(),OE(),KE(),lE(),FE(),NO(),VO(),JE(),HO=`3.5.2`,UO=window.ShadyCSS&&window.ShadyCSS.cssBuild,WO=DE(e=>{let t=BO(jO(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!UO){let i=t.content.querySelectorAll(`style`),a=BE(t),o=VE(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),CE&&UO&&dE){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!mE||hE)&&(t=PE.import(e,`template`),mE&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return HO}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):gE||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=aE(e.url);else{let e=PE.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=fE,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return iE(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?rE(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=qE(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),vE&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=rE(this.importPath)),rE(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return _E&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function KO(e){if(e instanceof YO)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function qO(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof YO)return KO(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var JO,YO,XO,ZO;function QO(){return(QO=e((()=>{K(),JO=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),YO=class{constructor(e,t){ZO(e,t);let n=t.reduce((t,n,r)=>t+KO(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},XO=function(e,...t){ZO(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+qO(n)+e[r+1],e[0]);return JO&&(r=JO.createHTML(r)),n.innerHTML=r,n},ZO=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}function $O(){return($O=e((()=>{GO(),QO(),WO(HTMLElement)})))()}function ek(){let e=[],t=Object.create(null),n;return t.get=(r,i)=>(n?.revoke?.(),i===Ok?e:(e.push(i),n=Proxy.revocable(r,t),n.proxy)),Proxy.revocable(Object.create(null),t).proxy}function tk(e,t){let{[Ok]:n}=e(ek()),r=t?.keySeparator??`.`,i=t?.nsSeparator??`:`,a=t?.enableSelector===`strict`;if(n.length>1&&i){let e=t?.ns,o=a?Array.isArray(e)?e:e?[e]:null:Array.isArray(e)?e:null;if(o&&(a?o:o.length>1?o.slice(1):[]).includes(n[0]))return`${n[0]}${i}${n.slice(1).join(r)}`}return n.join(r)}var X,nk,rk,ik,ak,ok,sk,ck,lk,uk,dk,fk,pk,Z,mk,hk,gk,_k,vk,yk,bk,xk,Sk,Ck,Q,wk,Tk,Ek,Dk,Ok,kk,Ak,jk,Mk,Nk,Pk,Fk,Ik,Lk,Rk,zk,Bk,Vk,Hk,Uk,Wk,Gk,Kk,qk,Jk,$,Yk;function Xk(){return(Xk=e((()=>{X=e=>typeof e==`string`,nk=()=>{let e,t,n=new Promise((n,r)=>{e=n,t=r});return n.resolve=e,n.reject=t,n},rk=e=>e==null?``:String(e),ik=(e,t,n)=>{e.forEach(e=>{t[e]&&(n[e]=t[e])})},ak=/###/g,ok=e=>e&&e.includes(`###`)?e.replace(ak,`.`):e,sk=e=>!e||X(e),ck=(e,t,n)=>{let r=X(t)?t.split(`.`):t,i=0;for(;i<r.length-1;){if(sk(e))return{};let t=ok(r[i]);!e[t]&&n&&(e[t]=new n),e=Object.prototype.hasOwnProperty.call(e,t)?e[t]:{},++i}return sk(e)?{}:{obj:e,k:ok(r[i])}},lk=(e,t,n)=>{let{obj:r,k:i}=ck(e,t,Object);if(r!==void 0||t.length===1){r[i]=n;return}let a=t[t.length-1],o=t.slice(0,t.length-1),s=ck(e,o,Object);for(;s.obj===void 0&&o.length;)a=`${o[o.length-1]}.${a}`,o=o.slice(0,o.length-1),s=ck(e,o,Object),s?.obj&&s.obj[`${s.k}.${a}`]!==void 0&&(s.obj=void 0);s.obj[`${s.k}.${a}`]=n},uk=(e,t,n,r)=>{let{obj:i,k:a}=ck(e,t,Object);i[a]=i[a]||[],i[a].push(n)},dk=(e,t)=>{let{obj:n,k:r}=ck(e,t);if(n&&Object.prototype.hasOwnProperty.call(n,r))return n[r]},fk=(e,t,n)=>{let r=dk(e,n);return r===void 0?dk(t,n):r},pk=(e,t,n)=>{for(let r in t)r!==`__proto__`&&r!==`constructor`&&(Object.prototype.hasOwnProperty.call(e,r)?X(e[r])||e[r]instanceof String||X(t[r])||t[r]instanceof String?n&&(e[r]=t[r]):pk(e[r],t[r],n):e[r]=t[r]);return e},Z=e=>e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,`\\$&`),mk={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`,"/":`&#x2F;`},hk=e=>X(e)?e.replace(/[&<>"'\/]/g,e=>mk[e]):e,gk=class{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){let t=this.regExpMap.get(e);if(t!==void 0)return t;let n=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,n),this.regExpQueue.push(e),n}},_k=[` `,`,`,`?`,`!`,`;`],vk=new gk(20),yk=(e,t,n)=>{t||=``,n||=``;let r=_k.filter(e=>!t.includes(e)&&!n.includes(e));if(r.length===0)return!0;let i=vk.getRegExp(`(${r.map(e=>e===`?`?`\\?`:e).join(`|`)})`),a=!i.test(e);if(!a){let t=e.indexOf(n);t>0&&!i.test(e.substring(0,t))&&(a=!0)}return a},bk=(e,t,n=`.`)=>{if(!e)return;if(e[t])return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0;let r=t.split(n),i=e;for(let e=0;e<r.length;){if(!i||typeof i!=`object`)return;let t,a=``;for(let o=e;o<r.length;++o)if(o!==e&&(a+=n),a+=r[o],t=i[a],t!==void 0){if([`string`,`number`,`boolean`].includes(typeof t)&&o<r.length-1)continue;e+=o-e+1;break}i=t}return i},xk=e=>e?.replace(/_/g,`-`),Sk={type:`logger`,log(e){this.output(`log`,e)},warn(e){this.output(`warn`,e)},error(e){this.output(`error`,e)},output(e,t){console?.[e]?.apply?.(console,t)}},Ck=class e{constructor(e,t={}){this.init(e,t)}init(e,t={}){this.prefix=t.prefix||`i18next:`,this.logger=e||Sk,this.options=t,this.debug=t.debug}log(...e){return this.forward(e,`log`,``,!0)}warn(...e){return this.forward(e,`warn`,``,!0)}error(...e){return this.forward(e,`error`,``)}deprecate(...e){return this.forward(e,`warn`,`WARNING DEPRECATED: `,!0)}forward(e,t,n,r){return r&&!this.debug?null:(e=e.map(e=>X(e)?e.replace(/[\r\n\x00-\x1F\x7F]/g,` `):e),X(e[0])&&(e[0]=`${n}${this.prefix} ${e[0]}`),this.logger[t](e))}create(t){return new e(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t||=this.options,t.prefix=t.prefix||this.prefix,new e(this.logger,t)}},Q=new Ck,wk=class{constructor(){this.observers={}}on(e,t){return e.split(` `).forEach(e=>{this.observers[e]||(this.observers[e]=new Map);let n=this.observers[e].get(t)||0;this.observers[e].set(t,n+1)}),this}off(e,t){if(this.observers[e]){if(!t){delete this.observers[e];return}this.observers[e].delete(t)}}once(e,t){let n=(...r)=>{t(...r),this.off(e,n)};return this.on(e,n),this}emit(e,...t){this.observers[e]&&Array.from(this.observers[e].entries()).forEach(([e,n])=>{for(let r=0;r<n;r++)e(...t)}),this.observers[`*`]&&Array.from(this.observers[`*`].entries()).forEach(([n,r])=>{for(let i=0;i<r;i++)n(e,...t)})}},Tk=new WeakSet,Ek=class extends wk{constructor(e,t={ns:[`translation`],defaultNS:`translation`}){super(),this.data=e||{},this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.includes(e)||this.options.ns.push(e)}removeNamespaces(e){let t=this.options.ns.indexOf(e);t>-1&&this.options.ns.splice(t,1)}getResource(e,t,n,r={}){let i=r.keySeparator===void 0?this.options.keySeparator:r.keySeparator,a=r.ignoreJSONStructure===void 0?this.options.ignoreJSONStructure:r.ignoreJSONStructure,o;e.includes(`.`)?o=e.split(`.`):(o=[e,t],n&&(Array.isArray(n)?o.push(...n):X(n)&&i?o.push(...n.split(i)):o.push(n)));let s=dk(this.data,o);return!s&&!t&&!n&&e.includes(`.`)&&(e=o[0],t=o[1],n=o.slice(2).join(`.`)),s||!a||!X(n)?s:bk(this.data?.[e]?.[t],n,i)}addResource(e,t,n,r,i={silent:!1}){let a=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,o=[e,t];n&&(o=o.concat(a?n.split(a):n)),e.includes(`.`)&&(o=e.split(`.`),r=t,t=o[1]),this.addNamespaces(t),lk(this.data,o,r),i.silent||this.emit(`added`,e,t,n,r)}addResources(e,t,n,r={silent:!1}){for(let r in n)(X(n[r])||Array.isArray(n[r]))&&this.addResource(e,t,r,n[r],{silent:!0});r.silent||this.emit(`added`,e,t,n)}addResourceBundle(e,t,n,r,i,a={silent:!1,skipCopy:!1}){let o=[e,t];e.includes(`.`)&&(o=e.split(`.`),r=n,n=t,t=o[1]),this.addNamespaces(t);let s=dk(this.data,o)||{};a.skipCopy||(n=JSON.parse(JSON.stringify(n))),r?pk(s,n,i):s={...s,...n},lk(this.data,o,s),a.silent||this.emit(`added`,e,t,n)}removeResourceBundle(e,t){this.hasResourceBundle(e,t)&&delete this.data[e][t],this.removeNamespaces(t),this.emit(`removed`,e,t)}hasResourceBundle(e,t){return this.getResource(e,t)!==void 0}getResourceBundle(e,t){return t||=this.options.defaultNS,this.getResource(e,t)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){let t=this.getDataByLanguage(e);return!!(t&&Object.keys(t)||[]).find(e=>{let n=t[e];return Tk.has(n)?!0:!n||Object.keys(n).length===0?!1:(typeof n==`object`&&Tk.add(n),!0)})}toJSON(){return this.data}},Dk={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,i){return e.forEach(e=>{t=this.processors[e]?.process(t,n,r,i)??t}),t}},Ok=Symbol(`i18next/PATH_KEY`),kk=e=>!X(e)&&typeof e!=`boolean`&&typeof e!=`number`,Ak=class e extends wk{constructor(e,t={}){super(),ik([`resourceStore`,`languageUtils`,`pluralResolver`,`interpolator`,`backendConnector`,`i18nFormat`,`utils`],e,this),this.options=t,this.options.keySeparator===void 0&&(this.options.keySeparator=`.`),this.logger=Q.create(`translator`),this.checkedLoadedFor={}}changeLanguage(e){e&&(this.language=e)}exists(e,t={interpolation:{}}){let n={...t};if(e==null)return!1;let r=this.resolve(e,n);if(r?.res===void 0)return!1;let i=kk(r.res);return!(n.returnObjects===!1&&i)}extractFromKey(e,t){let n=t.nsSeparator===void 0?this.options.nsSeparator:t.nsSeparator;n===void 0&&(n=`:`);let r=t.keySeparator===void 0?this.options.keySeparator:t.keySeparator,i=t.ns||this.options.defaultNS||[],a=n&&e.includes(n),o=!this.options.userDefinedKeySeparator&&!t.keySeparator&&!this.options.userDefinedNsSeparator&&!t.nsSeparator&&!yk(e,n,r);if(a&&!o){let t=e.match(this.interpolator.nestingRegexp);if(t&&t.length>0)return{key:e,namespaces:X(i)?[i]:i};let a=e.split(n);(n!==r||n===r&&this.options.ns.includes(a[0]))&&(i=a.shift()),e=a.join(r)}return{key:e,namespaces:X(i)?[i]:i}}translate(t,n,r){let i=typeof n==`object`?{...n}:n;if(typeof i!=`object`&&this.options.overloadTranslationOptionHandler&&(i=this.options.overloadTranslationOptionHandler(arguments)),typeof i==`object`&&(i={...i}),i||={},t==null)return``;typeof t==`function`&&(t=tk(t,{...this.options,...i})),Array.isArray(t)||(t=[String(t)]),t=t.map(e=>typeof e==`function`?tk(e,{...this.options,...i}):String(e));let a=i.returnDetails===void 0?this.options.returnDetails:i.returnDetails,o=i.keySeparator===void 0?this.options.keySeparator:i.keySeparator,{key:s,namespaces:c}=this.extractFromKey(t[t.length-1],i),l=c[c.length-1],u=i.nsSeparator===void 0?this.options.nsSeparator:i.nsSeparator;u===void 0&&(u=`:`);let d=i.lng||this.language,f=i.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d?.toLowerCase()===`cimode`)return f?a?{res:`${l}${u}${s}`,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:`${l}${u}${s}`:a?{res:s,usedKey:s,exactUsedKey:s,usedLng:d,usedNS:l,usedParams:this.getUsedParamsDetails(i)}:s;let p=this.resolve(t,i),m=p?.res,h=p?.usedKey||s,g=p?.exactUsedKey||s,_=[`[object Number]`,`[object Function]`,`[object RegExp]`],v=i.joinArrays===void 0?this.options.joinArrays:i.joinArrays,y=!this.i18nFormat||this.i18nFormat.handleAsObject,b=i.count!==void 0&&!X(i.count),x=e.hasDefaultValue(i),S=b?this.pluralResolver.getSuffix(d,i.count,i):``,ee=i.ordinal&&b?this.pluralResolver.getSuffix(d,i.count,{ordinal:!1}):``,C=b&&!i.ordinal&&i.count===0,w=C&&i[`defaultValue${this.options.pluralSeparator}zero`]||i[`defaultValue${S}`]||i[`defaultValue${ee}`]||i.defaultValue,T=m;y&&!m&&x&&(T=w);let te=kk(T),ne=Object.prototype.toString.apply(T);if(y&&T&&te&&!_.includes(ne)&&!(X(v)&&Array.isArray(T))){if(!i.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn(`accessing an object - but returnObjects options is not enabled!`);let e=this.options.returnedObjectHandler?this.options.returnedObjectHandler(h,T,{...i,ns:c}):`key '${s} (${this.language})' returned an object instead of string.`;return a?(p.res=e,p.usedParams=this.getUsedParamsDetails(i),p):e}if(o){let e=Array.isArray(T),t=e?[]:{},n=e?g:h;for(let e in T)if(Object.prototype.hasOwnProperty.call(T,e)){let r=`${n}${o}${e}`;t[e]=x&&!m?this.translate(r,{...i,defaultValue:kk(w)?w[e]:void 0,joinArrays:!1,ns:c}):this.translate(r,{...i,joinArrays:!1,ns:c}),t[e]===r&&(t[e]=T[e])}m=t}}else if(y&&X(v)&&Array.isArray(m))m=m.join(v),m&&=this.extendTranslation(m,t,i,r);else{let e=!1,n=!1;!this.isValidLookup(m)&&x&&(e=!0,m=w),this.isValidLookup(m)||(n=!0,m=s);let a=(i.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&n?void 0:m,c=x&&w!==m&&this.options.updateMissing;if(n||e||c){if(this.logger.log(c?`updateKey`:`missingKey`,d,l,b&&!c?`${s}${this.pluralResolver.getSuffix(d,i.count,i)}`:s,c?w:m),o){let e=this.resolve(s,{...i,keySeparator:!1});e&&e.res&&this.logger.warn(`Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.`)}let e=[],t=this.languageUtils.getFallbackCodes(this.options.fallbackLng,i.lng||this.language);if(this.options.saveMissingTo===`fallback`&&t&&t[0])for(let n=0;n<t.length;n++)e.push(t[n]);else this.options.saveMissingTo===`all`?e=this.languageUtils.toResolveHierarchy(i.lng||this.language):e.push(i.lng||this.language);let n=(e,t,n)=>{let r=x&&n!==m?n:a;this.options.missingKeyHandler?this.options.missingKeyHandler(e,l,t,r,c,i):this.backendConnector?.saveMissing&&this.backendConnector.saveMissing(e,l,t,r,c,i),this.emit(`missingKey`,e,l,t,m)};this.options.saveMissing&&(this.options.saveMissingPlurals&&b?e.forEach(e=>{let t=this.pluralResolver.getSuffixes(e,i);C&&i[`defaultValue${this.options.pluralSeparator}zero`]&&!t.includes(`${this.options.pluralSeparator}zero`)&&t.push(`${this.options.pluralSeparator}zero`),t.forEach(t=>{n([e],s+t,i[`defaultValue${t}`]||w)})}):n(e,s,w))}m=this.extendTranslation(m,t,i,p,r),n&&m===s&&this.options.appendNamespaceToMissingKey&&(m=`${l}${u}${s}`),(n||e)&&this.options.parseMissingKeyHandler&&(m=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}${u}${s}`:s,e?m:void 0,i))}return a?(p.res=m,p.usedParams=this.getUsedParamsDetails(i),p):m}extendTranslation(e,t,n,r,i){if(this.i18nFormat?.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...n},n.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!n.skipInterpolation){n.interpolation&&this.interpolator.init({...n,interpolation:{...this.options.interpolation,...n.interpolation}});let a=X(e)&&(n?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:n.interpolation.skipOnVariables),o;if(a){let t=e.match(this.interpolator.nestingRegexp);o=t&&t.length}let s=n.replace&&!X(n.replace)?n.replace:n;if(this.options.interpolation.defaultVariables&&(s={...this.options.interpolation.defaultVariables,...s}),e=this.interpolator.interpolate(e,s,n.lng||this.language||r.usedLng,n),a){let t=e.match(this.interpolator.nestingRegexp),r=t&&t.length;o<r&&(n.nest=!1)}!n.lng&&r&&r.res&&(n.lng=this.language||r.usedLng),n.nest!==!1&&(e=this.interpolator.nest(e,(...e)=>i?.[0]===e[0]&&!n.context?(this.logger.warn(`It seems you are nesting recursively key: ${e[0]} in key: ${t[0]}`),null):this.translate(...e,t),n)),n.interpolation&&this.interpolator.reset()}let a=n.postProcess||this.options.postProcess,o=X(a)?[a]:a;return e!=null&&o?.length&&n.applyPostProcessor!==!1&&(e=Dk.handle(o,e,t,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(n)},...n}:n,this)),e}resolve(e,t={}){let n,r,i,a,o;return X(e)&&(e=[e]),Array.isArray(e)&&(e=e.map(e=>typeof e==`function`?tk(e,{...this.options,...t}):e)),e.forEach(e=>{if(this.isValidLookup(n))return;let s=this.extractFromKey(e,t),c=s.key;r=c;let l=s.namespaces;this.options.fallbackNS&&(l=l.concat(this.options.fallbackNS));let u=t.count!==void 0&&!X(t.count),d=u&&!t.ordinal&&t.count===0,f=t.context!==void 0&&(X(t.context)||typeof t.context==`number`)&&t.context!==``,p=t.lngs?t.lngs:this.languageUtils.toResolveHierarchy(t.lng||this.language,t.fallbackLng);l.forEach(e=>{this.isValidLookup(n)||(o=e,!this.checkedLoadedFor[`${p[0]}-${e}`]&&this.utils?.hasLoadedNamespace&&!this.utils?.hasLoadedNamespace(o)&&(this.checkedLoadedFor[`${p[0]}-${e}`]=!0,this.logger.warn(`key "${r}" for languages "${p.join(`, `)}" won't get resolved as namespace "${o}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`)),p.forEach(r=>{if(this.isValidLookup(n))return;a=r;let o=[c];if(this.i18nFormat?.addLookupKeys)this.i18nFormat.addLookupKeys(o,c,r,e,t);else{let e;u&&(e=this.pluralResolver.getSuffix(r,t.count,t));let n=`${this.options.pluralSeparator}zero`,i=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(u&&(t.ordinal&&e.startsWith(i)&&o.push(c+e.replace(i,this.options.pluralSeparator)),o.push(c+e),d&&o.push(c+n)),f){let r=`${c}${this.options.contextSeparator||`_`}${t.context}`;o.push(r),u&&(t.ordinal&&e.startsWith(i)&&o.push(r+e.replace(i,this.options.pluralSeparator)),o.push(r+e),d&&o.push(r+n))}}let s;for(;s=o.pop();)this.isValidLookup(n)||(i=s,n=this.getResource(r,e,s,t))}))})}),{res:n,usedKey:r,exactUsedKey:i,usedLng:a,usedNS:o}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e===``)}getResource(e,t,n,r={}){return this.i18nFormat?.getResource?this.i18nFormat.getResource(e,t,n,r):this.resourceStore.getResource(e,t,n,r)}getUsedParamsDetails(e={}){let t=[`defaultValue`,`ordinal`,`context`,`replace`,`lng`,`lngs`,`fallbackLng`,`ns`,`keySeparator`,`nsSeparator`,`returnObjects`,`returnDetails`,`joinArrays`,`postProcess`,`interpolation`],n=e.replace&&!X(e.replace),r=n?e.replace:e;if(n&&e.count!==void 0&&(r={...r,count:e.count}),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!n){r={...r};for(let e of t)delete r[e]}return r}static hasDefaultValue(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&t.startsWith(`defaultValue`)&&e[t]!==void 0)return!0;return!1}},jk=class{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Q.create(`languageUtils`),this.resolveHierarchyCache={}}clearCache(){this.resolveHierarchyCache={}}getScriptPartFromCode(e){if(e=xk(e),!e||!e.includes(`-`))return null;let t=e.split(`-`);return t.length===2||(t.pop(),t[t.length-1].toLowerCase()===`x`)?null:this.formatLanguageCode(t.join(`-`))}getLanguagePartFromCode(e){if(e=xk(e),!e||!e.includes(`-`))return e;let t=e.split(`-`);return this.formatLanguageCode(t[0])}formatLanguageCode(e){if(X(e)&&e.includes(`-`)){let t;try{t=Intl.getCanonicalLocales(e)[0]}catch{}return t&&this.options.lowerCaseLng&&(t=t.toLowerCase()),t||(this.options.lowerCaseLng?e.toLowerCase():e)}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load===`languageOnly`||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.includes(e)}getBestMatchFromCodes(e){if(!e)return null;let t;return e.forEach(e=>{if(t)return;let n=this.formatLanguageCode(e);(!this.options.supportedLngs||this.isSupportedCode(n))&&(t=n)}),!t&&this.options.supportedLngs&&e.forEach(e=>{if(t)return;let n=this.getScriptPartFromCode(e);if(this.isSupportedCode(n))return t=n;let r=this.getLanguagePartFromCode(e);if(this.isSupportedCode(r))return t=r;t=this.options.supportedLngs.find(e=>e===r?!0:!e.includes(`-`)&&!r.includes(`-`)?!1:!!(e.includes(`-`)&&!r.includes(`-`)&&e.slice(0,e.indexOf(`-`))===r||e.startsWith(r)&&r.length>1))}),t||=this.getFallbackCodes(this.options.fallbackLng)[0],t}getFallbackCodes(e,t){if(!e)return[];if(typeof e==`function`&&(e=e(t)),X(e)&&(e=[e]),Array.isArray(e))return e;if(!t)return e.default||[];let n=e[t];return n||=e[this.getScriptPartFromCode(t)],n||=e[this.formatLanguageCode(t)],n||=e[this.getLanguagePartFromCode(t)],n||=e.default,n||[]}toResolveHierarchy(e,t){let n=this.options.fallbackLng,r=Array.isArray(n)?n.join(`|`):n;r!==this._cachedFallbackLng&&(this.resolveHierarchyCache={},this._cachedFallbackLng=r);let i=t===void 0||t===!1||X(t),a=t===void 0&&typeof this.options.fallbackLng==`function`,o=X(e)&&i&&!a,s=null;if(o){let n;n=t===void 0?`undefined`:t===!1?`boolean:false`:`string:${t}`,s=`${e.length}:${e}|${n}`}if(s!==null){let e=this.resolveHierarchyCache[s];if(e!==void 0)return e.slice()}let c=this.getFallbackCodes((t===!1?[]:t)||this.options.fallbackLng||[],e),l=[],u=e=>{e&&(this.isSupportedCode(e)?l.push(e):this.logger.warn(`rejecting language code not found in supportedLngs: ${e}`))};return X(e)&&(e.includes(`-`)||e.includes(`_`))?(this.options.load!==`languageOnly`&&u(this.formatLanguageCode(e)),this.options.load!==`languageOnly`&&this.options.load!==`currentOnly`&&u(this.getScriptPartFromCode(e)),this.options.load!==`currentOnly`&&u(this.getLanguagePartFromCode(e))):X(e)&&u(this.formatLanguageCode(e)),c.forEach(e=>{let t=this.formatLanguageCode(e);l.includes(t)||u(t)}),s===null?l:(this.resolveHierarchyCache[s]=l,l.slice())}},Mk={zero:0,one:1,two:2,few:3,many:4,other:5},Nk={select:e=>e===1?`one`:`other`,resolvedOptions:()=>({pluralCategories:[`one`,`other`]})},Pk=class{constructor(e,t={}){this.languageUtils=e,this.options=t,this.logger=Q.create(`pluralResolver`),this.pluralRulesCache={}}clearCache(){this.pluralRulesCache={}}getRule(e,t={}){let n=xk(e===`dev`?`en`:e),r=t.ordinal?`ordinal`:`cardinal`,i=JSON.stringify({cleanedCode:n,type:r});if(i in this.pluralRulesCache)return this.pluralRulesCache[i];let a;try{a=new Intl.PluralRules(n,{type:r})}catch{if(typeof Intl>`u`)return this.logger.error(`No Intl support, please use an Intl polyfill!`),Nk;if(!e.match(/-|_/))return Nk;let n=this.languageUtils.getLanguagePartFromCode(e);a=this.getRule(n,t)}return this.pluralRulesCache[i]=a,a}needsPlural(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?.resolvedOptions().pluralCategories.length>1}getPluralFormsOfKey(e,t,n={}){return this.getSuffixes(e,n).map(e=>`${t}${e}`)}getSuffixes(e,t={}){let n=this.getRule(e,t);return n||=this.getRule(`dev`,t),n?n.resolvedOptions().pluralCategories.sort((e,t)=>Mk[e]-Mk[t]).map(e=>`${this.options.prepend}${t.ordinal?`ordinal${this.options.prepend}`:``}${e}`):[]}getSuffix(e,t,n={}){let r=this.getRule(e,n);return r?`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:``}${r.select(t)}`:(this.logger.warn(`no plural rule found for: ${e}`),this.getSuffix(`dev`,t,n))}},Fk=(e,t,n,r=`.`,i=!0)=>{let a=fk(e,t,n);return!a&&i&&X(n)&&(a=bk(e,n,r),a===void 0&&(a=bk(t,n,r))),a},Ik=e=>e.replace(/\$/g,`$$$$`),Lk=class{constructor(e={}){this.logger=Q.create(`interpolator`),this.options=e,this.format=e?.interpolation?.format||(e=>e),this.init(e)}init(e={}){e.interpolation||={escapeValue:!0};let{escape:t,escapeValue:n,useRawValueToEscape:r,prefix:i,prefixEscaped:a,suffix:o,suffixEscaped:s,formatSeparator:c,unescapeSuffix:l,unescapePrefix:u,nestingPrefix:d,nestingPrefixEscaped:f,nestingSuffix:p,nestingSuffixEscaped:m,nestingOptionsSeparator:h,maxReplaces:g,alwaysFormat:_}=e.interpolation;this.escape=t===void 0?hk:t,this.escapeValue=n===void 0||n,this.useRawValueToEscape=r!==void 0&&r,this.prefix=i?Z(i):a||`{{`,this.suffix=o?Z(o):s||`}}`,this.formatSeparator=c||`,`,this.unescapePrefix=l?``:u?Z(u):`-`,this.unescapeSuffix=this.unescapePrefix?``:l?Z(l):``,this.nestingPrefix=d?Z(d):f||Z(`$t(`),this.nestingSuffix=p?Z(p):m||Z(`)`),this.nestingOptionsSeparator=h||`,`,this.maxReplaces=g||1e3,this.alwaysFormat=_!==void 0&&_,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){let e=(e,t)=>e?.source===t?(e.lastIndex=0,e):new RegExp(t,`g`);this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}((?:[^()"']|"[^"]*"|'[^']*'|\\((?:[^()"']|"[^"]*"|'[^']*')*\\))*?)${this.nestingSuffix}`)}interpolate(e,t,n,r){let i,a,o,s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=e=>{if(!e.includes(this.formatSeparator)){let i=Fk(t,s,e,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(i,void 0,n,{...r,...t,interpolationkey:e}):i}let i=e.split(this.formatSeparator),a=i.shift().trim(),o=i.join(this.formatSeparator).trim();return this.format(Fk(t,s,a,this.options.keySeparator,this.options.ignoreJSONStructure),o,n,{...r,...t,interpolationkey:a})};this.resetRegExp(),!this.escapeValue&&typeof e==`string`&&/\$t\([^)]*\{[^}]*\{\{/.test(e)&&this.logger.warn(`nesting options string contains interpolated variables with escapeValue: false — if any of those values are attacker-controlled they can inject additional nesting options (e.g. redirect lng/ns). Sanitise untrusted input before passing it to t(), or keep escapeValue: true.`);let l=r?.missingInterpolationHandler||this.options.missingInterpolationHandler,u=r?.interpolation?.skipOnVariables===void 0?this.options.interpolation.skipOnVariables:r.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:e=>e},{regex:this.regexp,safeValue:e=>this.escapeValue?this.escape(e):e}].forEach(t=>{for(o=0;i=t.regex.exec(e);){let n=i[1].trim();if(a=c(n),a===void 0){if(typeof l==`function`){let t=l(e,i,r);a=X(t)?t:``}else if(r&&Object.prototype.hasOwnProperty.call(r,n))a=``;else if(u){a=i[0];continue}else this.logger.warn(`missed to pass in variable ${n} for interpolating ${e}`),a=``}else!X(a)&&!this.useRawValueToEscape&&(a=rk(a));let s=t.safeValue(a);if(e=e.replace(i[0],Ik(s)),u?(t.regex.lastIndex+=s.length,t.regex.lastIndex-=i[0].length):t.regex.lastIndex=0,o++,o>=this.maxReplaces)break}}),e}nest(e,t,n={}){let r,i,a,o=(e,t)=>{let n=this.nestingOptionsSeparator;if(!e.includes(n))return e;let r=e.split(RegExp(`${Z(n)}[ ]*{`)),i=`{${r[1]}`;e=r[0],i=this.interpolate(i,a);let o=i.match(/'/g),s=i.match(/"/g);((o?.length??0)%2==0&&!s||(s?.length??0)%2!=0)&&(i=i.replace(/'/g,`"`));try{a=JSON.parse(i),t&&(a={...t,...a})}catch(t){return this.logger.warn(`failed parsing options string in nesting for key ${e}`,t),`${e}${n}${i}`}return a.defaultValue&&a.defaultValue.includes(this.prefix)&&delete a.defaultValue,e},s=new RegExp(this.nestingRegexp),c=``,l=0;for(;r=s.exec(e);){let u=[];a={...n},a=a.replace&&!X(a.replace)?a.replace:a,a.applyPostProcessor=!1,delete a.defaultValue;let d=/{.*}/s.test(r[1])?r[1].lastIndexOf(`}`)+1:r[1].indexOf(this.formatSeparator);if(d!==-1&&(u=r[1].slice(d).split(this.formatSeparator).map(e=>e.trim()).filter(Boolean),r[1]=r[1].slice(0,d)),i=t(o.call(this,r[1].trim(),a),a),i&&r[0]===e&&!X(i))return i;X(i)||(i=rk(i)),i||=(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),``),u.length&&(i=u.reduce((e,t)=>this.format(e,t,n.lng,{...n,interpolationkey:r[1].trim()}),i.trim())),c+=e.slice(l,r.index)+rk(i),l=s.lastIndex,this.regexp.lastIndex=0}return l?c+e.slice(l):e}},Rk=e=>{let t=e.toLowerCase().trim(),n={};if(e.includes(`(`)){let r=e.split(`(`);t=r[0].toLowerCase().trim();let i=r[1].slice(0,-1);t===`currency`&&!i.includes(`:`)?n.currency||=i.trim():t===`relativetime`&&!i.includes(`:`)?n.range||=i.trim():i.split(`;`).forEach(e=>{if(e){let[t,...r]=e.split(`:`),i=r.join(`:`).trim().replace(/^'+|'+$/g,``),a=t.trim();n[a]||(n[a]=i),i===`false`&&(n[a]=!1),i===`true`&&(n[a]=!0),isNaN(i)||(n[a]=parseInt(i,10))}})}return{formatName:t,formatOptions:n}},zk=e=>{let t={};return(n,r,i)=>{let a=i;i&&i.interpolationkey&&i.formatParams&&i.formatParams[i.interpolationkey]&&i[i.interpolationkey]&&(a={...a,[i.interpolationkey]:void 0});let o=r+JSON.stringify(a),s=t[o];return s||(s=e(xk(r),i),t[o]=s),s(n)}},Bk=e=>(t,n,r)=>e(xk(n),r)(t),Vk=class{constructor(e={}){this.logger=Q.create(`formatter`),this.options=e,this.init(e)}init(e,t={interpolation:{}}){this.formatSeparator=t.interpolation.formatSeparator||`,`;let n=t.cacheInBuiltFormats?zk:Bk;this.formats={number:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t});return e=>n.format(e)}),currency:n((e,t)=>{let n=new Intl.NumberFormat(e,{...t,style:`currency`});return e=>n.format(e)}),datetime:n((e,t)=>{let n=new Intl.DateTimeFormat(e,{...t});return e=>n.format(e)}),relativetime:n((e,t)=>{let n=new Intl.RelativeTimeFormat(e,{...t});return e=>n.format(e,t.range||`day`)}),list:n((e,t)=>{let n=new Intl.ListFormat(e,{...t});return e=>n.format(e)})}}add(e,t){this.formats[e.toLowerCase().trim()]=t}addCached(e,t){this.formats[e.toLowerCase().trim()]=zk(t)}format(e,t,n,r={}){if(!t||e==null)return e;let i=t.split(this.formatSeparator),a=[];for(let e=0;e<i.length;e++){let t=i[e];for(;t.indexOf(`(`)>-1&&!t.includes(`)`)&&e+1<i.length;)t=`${t}${this.formatSeparator}${i[++e]}`;a.push(t)}return a.reduce((e,t)=>{let{formatName:i,formatOptions:a}=Rk(t);if(this.formats[i]){let t=e;try{let o=r?.formatParams?.[r.interpolationkey]||{},s=o.locale||o.lng||r.locale||r.lng||n;t=this.formats[i](e,s,{...a,...r,...o})}catch(e){this.logger.warn(e)}return t}return this.logger.warn(`there was no format function for ${i}`),e},e)}},Hk=(e,t)=>{e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)},Uk=class extends wk{constructor(e,t,n,r={}){super(),this.backend=e,this.store=t,this.services=n,this.languageUtils=n.languageUtils,this.options=r,this.logger=Q.create(`backendConnector`),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend?.init?.(n,r.backend,r)}queueLoad(e,t,n,r){let i={},a={},o={},s={};return e.forEach(e=>{let r=!0;t.forEach(t=>{let o=`${e}|${t}`;!n.reload&&this.store.hasResourceBundle(e,t)?this.state[o]=2:this.state[o]<0||(this.state[o]===1?a[o]===void 0&&(a[o]=!0):(this.state[o]=1,r=!1,a[o]===void 0&&(a[o]=!0),i[o]===void 0&&(i[o]=!0),s[t]===void 0&&(s[t]=!0)))}),r||(o[e]=!0)}),(Object.keys(i).length||Object.keys(a).length)&&this.queue.push({pending:a,pendingCount:Object.keys(a).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(i),pending:Object.keys(a),toLoadLanguages:Object.keys(o),toLoadNamespaces:Object.keys(s)}}loaded(e,t,n){let r=e.split(`|`),i=r[0],a=r[1];t&&this.emit(`failedLoading`,i,a,t),!t&&n&&this.store.addResourceBundle(i,a,n,void 0,void 0,{skipCopy:!0}),this.state[e]=t?-1:2,t&&n&&(this.state[e]=0);let o={};this.queue.forEach(n=>{uk(n.loaded,[i],a),Hk(n,e),t&&n.errors.push(t),n.pendingCount===0&&!n.done&&(Object.keys(n.loaded).forEach(e=>{o[e]||(o[e]={});let t=n.loaded[e];t.length&&t.forEach(t=>{o[e][t]===void 0&&(o[e][t]=!0)})}),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.emit(`loaded`,o),this.queue=this.queue.filter(e=>!e.done)}read(e,t,n,r=0,i=this.retryTimeout,a){if(!e.length)return a(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:t,fcName:n,tried:r,wait:i,callback:a});return}this.readingCalls++;let o=(o,s)=>{if(this.readingCalls--,this.waitingReads.length>0){let e=this.waitingReads.shift();this.read(e.lng,e.ns,e.fcName,e.tried,e.wait,e.callback)}if(o&&s&&r<this.maxRetries){setTimeout(()=>{this.read(e,t,n,r+1,i*2,a)},i);return}a(o,s)},s=this.backend[n].bind(this.backend);if(s.length===2){try{let n=s(e,t);n&&typeof n.then==`function`?n.then(e=>o(null,e)).catch(o):o(null,n)}catch(e){o(e)}return}return s(e,t,o)}prepareLoading(e,t,n={},r){if(!this.backend)return this.logger.warn(`No backend was added via i18next.use. Will not load resources.`),r&&r();X(e)&&(e=this.languageUtils.toResolveHierarchy(e)),X(t)&&(t=[t]);let i=this.queueLoad(e,t,n,r);if(!i.toLoad.length)return i.pending.length||r(),null;i.toLoad.forEach(e=>{this.loadOne(e)})}load(e,t,n){this.prepareLoading(e,t,{},n)}reload(e,t,n){this.prepareLoading(e,t,{reload:!0},n)}loadOne(e,t=``){let n=e.split(`|`),r=n[0],i=n[1];this.read(r,i,`read`,void 0,void 0,(n,a)=>{n&&this.logger.warn(`${t}loading namespace ${i} for language ${r} failed`,n),!n&&a&&this.logger.log(`${t}loaded namespace ${i} for language ${r}`,a),this.loaded(e,n,a)})}saveMissing(e,t,n,r,i,a={},o=()=>{}){if(this.services?.utils?.hasLoadedNamespace&&!this.services?.utils?.hasLoadedNamespace(t)){this.logger.warn(`did not save key "${n}" as the namespace "${t}" was not yet loaded`,`This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!`);return}if(n!=null&&n!==``){if(this.backend?.create){let s={...a,isUpdate:i},c=this.backend.create.bind(this.backend);if(c.length<6)try{let i;i=c.length===5?c(e,t,n,r,s):c(e,t,n,r),i&&typeof i.then==`function`?i.then(e=>o(null,e)).catch(o):o(null,i)}catch(e){o(e)}else c(e,t,n,r,o,s)}e&&e[0]&&this.store.addResource(e[0],t,n,r)}}},Wk=()=>({debug:!1,initAsync:!0,ns:[`translation`],defaultNS:[`translation`],fallbackLng:[`dev`],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:`all`,preload:!1,keySeparator:`.`,nsSeparator:`:`,pluralSeparator:`_`,contextSeparator:`_`,enableSelector:!1,partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:`fallback`,saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:e=>{let t={};if(typeof e[1]==`object`&&(t=e[1]),X(e[1])&&(t.defaultValue=e[1]),X(e[2])&&(t.tDescription=e[2]),typeof e[2]==`object`||typeof e[3]==`object`){let n=e[3]||e[2];Object.keys(n).forEach(e=>{t[e]=n[e]})}return t},interpolation:{escapeValue:!0,prefix:`{{`,suffix:`}}`,formatSeparator:`,`,unescapePrefix:`-`,nestingPrefix:`$t(`,nestingSuffix:`)`,nestingOptionsSeparator:`,`,maxReplaces:1e3,skipOnVariables:!0},cacheInBuiltFormats:!0}),Gk=e=>(X(e.ns)&&(e.ns=[e.ns]),X(e.fallbackLng)&&(e.fallbackLng=[e.fallbackLng]),X(e.fallbackNS)&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&!e.supportedLngs.includes(`cimode`)&&(e.supportedLngs=e.supportedLngs.concat([`cimode`])),e),Kk=()=>{},qk=e=>{Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(t=>{typeof e[t]==`function`&&(e[t]=e[t].bind(e))})},Jk=class e extends wk{constructor(e={},t){if(super(),this.options=Gk(e),this.services={},this.logger=Q,this.modules={external:[]},qk(this),t&&!this.isInitialized&&!e.isClone){if(!this.options.initAsync)return this.init(e,t),this;setTimeout(()=>{this.init(e,t)},0)}}init(e={},t){this.isInitializing=!0,typeof e==`function`&&(t=e,e={}),e.defaultNS==null&&e.ns&&(X(e.ns)?e.defaultNS=e.ns:e.ns.includes(`translation`)||(e.defaultNS=e.ns[0]));let n=Wk();this.options={...n,...this.options,...Gk(e)},this.options.interpolation={...n.interpolation,...this.options.interpolation},e.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=e.keySeparator),e.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=e.nsSeparator),typeof this.options.overloadTranslationOptionHandler!=`function`&&(this.options.overloadTranslationOptionHandler=n.overloadTranslationOptionHandler);let r=e=>e?typeof e==`function`?new e:e:null;if(!this.options.isClone){this.modules.logger?Q.init(r(this.modules.logger),this.options):Q.init(null,this.options);let e;e=this.modules.formatter?this.modules.formatter:Vk;let t=new jk(this.options);this.store=new Ek(this.options.resources,this.options);let n=this.services;n.logger=Q,n.resourceStore=this.store,n.languageUtils=t,n.pluralResolver=new Pk(t,{prepend:this.options.pluralSeparator}),e&&(n.formatter=r(e),n.formatter.init&&n.formatter.init(n,this.options),this.options.interpolation.format=n.formatter.format.bind(n.formatter)),n.interpolator=new Lk(this.options),n.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},n.backendConnector=new Uk(r(this.modules.backend),n.resourceStore,n,this.options),n.backendConnector.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.languageDetector&&(n.languageDetector=r(this.modules.languageDetector),n.languageDetector.init&&n.languageDetector.init(n,this.options.detection,this.options)),this.modules.i18nFormat&&(n.i18nFormat=r(this.modules.i18nFormat),n.i18nFormat.init&&n.i18nFormat.init(this)),this.translator=new Ak(this.services,this.options),this.translator.on(`*`,(e,...t)=>{this.emit(e,...t)}),this.modules.external.forEach(e=>{e.init&&e.init(this)})}if(this.format=this.options.interpolation.format,t||=Kk,this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){let e=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);e.length>0&&e[0]!==`dev`&&(this.options.lng=e[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn(`init: no languageDetector is used and no lng is defined`),[`getResource`,`hasResourceBundle`,`getResourceBundle`,`getDataByLanguage`].forEach(e=>{this[e]=(...t)=>this.store[e](...t)}),[`addResource`,`addResources`,`addResourceBundle`,`removeResourceBundle`].forEach(e=>{this[e]=(...t)=>(this.store[e](...t),this)});let i=nk(),a=()=>{let e=(e,n)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn(`init: i18next is already initialized. You should call init just once!`),this.isInitialized=!0,this.options.isClone||this.logger.log(`initialized`,this.options),this.emit(`initialized`,this.options),i.resolve(n),t(e,n)};if((this.languages||this.isLanguageChangingTo)&&!this.isInitialized)return e(null,this.t.bind(this));this.changeLanguage(this.options.lng,e)};return this.options.resources||!this.options.initAsync?a():setTimeout(a,0),i}loadResources(e,t=Kk){let n=t,r=X(e)?e:this.language;if(typeof e==`function`&&(n=e),!this.options.resources||this.options.partialBundledLanguages){if(r?.toLowerCase()===`cimode`&&(!this.options.preload||this.options.preload.length===0))return n();let e=[],t=t=>{t&&t!==`cimode`&&this.services.languageUtils.toResolveHierarchy(t).forEach(t=>{t!==`cimode`&&(e.includes(t)||e.push(t))})};r?t(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(e=>t(e)),this.options.preload?.forEach?.(e=>t(e)),this.services.backendConnector.load(e,this.options.ns,e=>{!e&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),n(e)})}else n(null)}reloadResources(e,t,n){let r=nk();return typeof e==`function`&&(n=e,e=void 0),typeof t==`function`&&(n=t,t=void 0),e||=this.languages,t||=this.options.ns,n||=Kk,this.services.backendConnector.reload(e,t,e=>{r.resolve(),n(e)}),r}use(e){if(!e)throw Error(`You are passing an undefined module! Please check the object you are passing to i18next.use()`);if(!e.type)throw Error(`You are passing a wrong module! Please check the object you are passing to i18next.use()`);return e.type===`backend`&&(this.modules.backend=e),(e.type===`logger`||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type===`languageDetector`&&(this.modules.languageDetector=e),e.type===`i18nFormat`&&(this.modules.i18nFormat=e),e.type===`postProcessor`&&Dk.addPostProcessor(e),e.type===`formatter`&&(this.modules.formatter=e),e.type===`3rdParty`&&this.modules.external.push(e),this}setResolvedLanguage(e){if(e&&this.languages&&![`cimode`,`dev`].includes(e)){for(let e=0;e<this.languages.length;e++){let t=this.languages[e];if(![`cimode`,`dev`].includes(t)&&this.store.hasLanguageSomeTranslations(t)){this.resolvedLanguage=t;break}}!this.resolvedLanguage&&!this.languages.includes(e)&&this.store.hasLanguageSomeTranslations(e)&&(this.resolvedLanguage=e,this.languages.unshift(e))}}changeLanguage(e,t){this.isLanguageChangingTo=e;let n=nk();this.emit(`languageChanging`,e);let r=e=>{this.language=e,this.languages=this.services.languageUtils.toResolveHierarchy(e),this.resolvedLanguage=void 0,this.setResolvedLanguage(e)},i=(i,a)=>{a?this.isLanguageChangingTo===e&&(r(a),this.translator.changeLanguage(a),this.isLanguageChangingTo=void 0,this.emit(`languageChanged`,a),this.logger.log(`languageChanged`,a)):this.isLanguageChangingTo=void 0,n.resolve((...e)=>this.t(...e)),t&&t(i,(...e)=>this.t(...e))},a=t=>{!e&&!t&&this.services.languageDetector&&(t=[]);let n=X(t)?t:t&&t[0],a=this.store.hasLanguageSomeTranslations(n)?n:this.services.languageUtils.getBestMatchFromCodes(X(t)?[t]:t);a&&(this.language||r(a),this.translator.language||this.translator.changeLanguage(a),this.services.languageDetector?.cacheUserLanguage?.(a)),this.loadResources(a,e=>{i(e,a)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),n}getFixedT(e,t,n,r){let i=r?.scopeNs,a=(e,t,...r)=>{let o;o=typeof t==`object`?{...t}:this.options.overloadTranslationOptionHandler([e,t].concat(r)),o.lng=o.lng||a.lng,o.lngs=o.lngs||a.lngs;let s=o.ns!==void 0&&o.ns!==null;o.ns=o.ns||a.ns,o.keyPrefix!==``&&(o.keyPrefix=o.keyPrefix||n||a.keyPrefix);let c={...this.options,...o};Array.isArray(i)&&!s&&(c.ns=i),typeof o.keyPrefix==`function`&&(o.keyPrefix=tk(o.keyPrefix,c));let l=this.options.keySeparator||`.`,u;return o.keyPrefix&&Array.isArray(e)?u=e.map(e=>(typeof e==`function`&&(e=tk(e,c)),`${o.keyPrefix}${l}${e}`)):(typeof e==`function`&&(e=tk(e,c)),u=o.keyPrefix?`${o.keyPrefix}${l}${e}`:e),this.t(u,o)};return X(e)?a.lng=e:a.lngs=e,a.ns=t,a.keyPrefix=n,a}t(...e){return this.translator?.translate(...e)}exists(...e){return this.translator?.exists(...e)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e,t={}){if(!this.isInitialized)return this.logger.warn(`hasLoadedNamespace: i18next was not initialized`,this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn(`hasLoadedNamespace: i18n.languages were undefined or empty`,this.languages),!1;let n=t.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(n.toLowerCase()===`cimode`)return!0;let a=(e,t)=>{let n=this.services.backendConnector.state[`${e}|${t}`];return n===-1||n===0||n===2};if(t.precheck){let e=t.precheck(this,a);if(e!==void 0)return e}if(this.hasResourceBundle(n,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages)return!0;let{languageUtils:o}=this.services,s=t.lng?o.isSupportedCode(n)&&o.toResolveHierarchy(n,!1)[0]:n;return!(s&&!a(s,e)||r&&!a(i,e))}loadNamespaces(e,t){let n=nk();return this.options.ns?(X(e)&&(e=[e]),e.forEach(e=>{this.options.ns.includes(e)||this.options.ns.push(e)}),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}loadLanguages(e,t){let n=nk();X(e)&&(e=[e]);let r=this.options.preload||[],i=e.filter(e=>!r.includes(e)&&this.services.languageUtils.isSupportedCode(e));return i.length?(this.options.preload=r.concat(i),this.loadResources(e=>{n.resolve(),t&&t(e)}),n):(t&&t(),Promise.resolve())}dir(e){if(e||=this.resolvedLanguage||(this.languages?.length>0?this.languages[0]:this.language),!e)return`rtl`;try{let t=new Intl.Locale(e);if(t&&t.getTextInfo){let e=t.getTextInfo();if(e&&e.direction)return e.direction}}catch{}let t=`ar.shu.sqr.ssh.xaa.yhd.yud.aao.abh.abv.acm.acq.acw.acx.acy.adf.ads.aeb.aec.afb.ajp.apc.apd.arb.arq.ars.ary.arz.auz.avl.ayh.ayl.ayn.ayp.bbz.pga.he.iw.ps.pbt.pbu.pst.prp.prd.ug.ur.ydd.yds.yih.ji.yi.hbo.men.xmn.fa.jpr.peo.pes.prs.dv.sam.ckb`.split(`.`),n=this.services?.languageUtils||new jk(Wk());return e.toLowerCase().indexOf(`-latn`)>1?`ltr`:t.includes(n.getLanguagePartFromCode(e))||e.toLowerCase().indexOf(`-arab`)>1?`rtl`:`ltr`}static createInstance(t={},n){let r=new e(t,n);return r.createInstance=e.createInstance,r}cloneInstance(t={},n=Kk){let r=t.forkResourceStore;r&&delete t.forkResourceStore;let i={...this.options,preload:!1,...t,isClone:!0},a=new e(i);if((t.debug!==void 0||t.prefix!==void 0)&&(a.logger=a.logger.clone(t)),[`store`,`services`,`language`].forEach(e=>{a[e]=this[e]}),a.services={...this.services},a.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},r){let e=Object.keys(this.store.data).reduce((e,t)=>(e[t]={...this.store.data[t]},e[t]=Object.keys(e[t]).reduce((n,r)=>(n[r]={...e[t][r]},n),e[t]),e),{});a.store=new Ek(e,i),a.services.resourceStore=a.store}if(t.interpolation){let e={...Wk().interpolation,...this.options.interpolation,...t.interpolation},n={...i,interpolation:e};a.services.interpolator=new Lk(n)}return a.translator=new Ak(a.services,i),a.translator.on(`*`,(e,...t)=>{a.emit(e,...t)}),a.init(i,n),a.translator.options=i,a.translator.backendConnector.services.utils={hasLoadedNamespace:a.hasLoadedNamespace.bind(a)},a}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}},$=Jk.createInstance(),$.createInstance,$.dir,$.init,$.loadResources,$.reloadResources,$.use,$.changeLanguage,$.getFixedT,Yk=$.t,$.exists,$.setDefaultNamespace,$.hasLoadedNamespace,$.loadNamespaces,$.loadLanguages})))()}var Zk,Qk;function $k(){return($k=e((()=>{kt(),QT(),P(),Xk(),ot(),Zk=()=>{let e=k(()=>matchMedia(`(max-width: 899px)`),[]),[t,n]=j(e.matches),[r,i]=j(!1),a=M();return O(()=>{let t=()=>{a.current?.close(),i(!1),n(e.matches)};return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)},[e]),{mobile:t,opened:r,sheet:a,open:()=>{a.current?.showModal(),i(!0)},close:()=>a.current?.close(),onClose:()=>i(!1)}},Qk=({sheet:e,close:t,onClose:n},r)=>c`
	<dialog
		class="action-sheet"
		part="action-sheet"
		aria-labelledby="actions-heading"
		${F(t=>e.current=t)}
		@close=${n}
		@click=${n=>{let r=e.current;if(!r||n.target!==r)return;let{left:i,right:a,top:o,bottom:s}=r.getBoundingClientRect();(n.clientX<i||n.clientX>a||n.clientY<o||n.clientY>s)&&t()}}
	>
		<header class="sheet-header">
			<h2 id="actions-heading">${Yk(`Actions`)||`Actions`}</h2>
			<cosmoz-button
				variant="tertiary"
				icon-only
				aria-label=${Yk(`Close`)||`Close`}
				@click=${t}
				>${VT()}</cosmoz-button
			>
		</header>
		<div class="sheet-actions" @click=${t}>${r}</div>
	</dialog>
`})))()}var eA;function tA(){return(tA=e((()=>{P(),eA=E`
	@media (max-width: 899px) {
		:host {
			--cz-control-height-md: 44px;
			--cz-control-height-sm: 44px;
			background-color: var(--cosmoz-bottom-bar-bg-color, transparent);
			border-color: transparent;
			box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		}

		#bar {
			height: 52px;
			padding-inline: 12px;
			justify-content: flex-end;
		}

		#info {
			flex: 0 1 auto;
		}

		:host(:not([has-info])) #info {
			display: none;
		}

		#bottomBarToolbar::slotted(*) {
			flex: 1 0 auto;
			max-inline-size: 320px;
			margin-inline-end: auto;
		}

		#bottomBarMenu::slotted(*) {
			box-sizing: border-box;
			width: 100%;
			min-height: 48px;
			--cz-control-height-sm: 48px;
			--cosmoz-button-justify-content: flex-start;
			--cz-text-xs: var(--cz-text-sm);
		}
	}

	.action-sheet {
		position: fixed;
		inset: auto 0 0;
		margin: 0 auto;
		box-sizing: border-box;
		width: min(100%, 480px);
		max-width: 100%;
		max-height: min(75dvh, 640px);
		padding: 0 12px max(16px, env(safe-area-inset-bottom));
		border: 0;
		border-radius: var(--cz-radius-3xl) var(--cz-radius-3xl) 0 0;
		background: var(--cz-glass-sheen), var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-2xl);
		color: var(--cz-color-text-primary);
		font-family: var(--cz-font-body);
		overflow: hidden;
	}
	.action-sheet[open] {
		display: flex;
		flex-direction: column;
	}
	.action-sheet::backdrop {
		background: var(--cosmoz-overlay-backdrop-color);
	}
	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: none;
		gap: 16px;
		padding: 12px 4px 8px 12px;
	}
	.sheet-header h2 {
		margin: 0;
		font-size: var(--cz-text-base);
		font-weight: var(--cz-font-weight-semibold);
	}
	.sheet-actions {
		min-height: 0;
		overflow-y: auto;
		overscroll-behavior: contain;
		border-radius: var(--cz-radius-xl);
		background: var(--cz-color-bg-secondary);
		padding: 4px;
	}
`})))()}var nA,rA,iA,aA,oA,sA,cA,lA,uA,dA,fA,pA,mA,hA,gA,_A;function vA(){return(vA=e((()=>{kt(),Nt(),ci(),si(),QT(),nE(),P(),$O(),Xk(),n(),$k(),tA(),nA=`bottom-bar-toolbar`,rA=`bottom-bar-menu`,iA=E`
	:host {
		display: block;
		overflow: hidden;
		bottom: 0;
		left: 0;
		width: 100%;
		max-width: 100%; /* Firefox fix */
		transition: max-height 0.3s ease;
		flex: none;
		background-color: var(
			--cosmoz-bottom-bar-bg-color,
			var(--cz-color-bg-secondary)
		);
		border-top: 1px solid var(--cz-color-border-secondary);
		box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		z-index: 1;
	}

	:host([force-open]) {
		transition: none;
	}

	[hidden],
	::slotted([hidden]) {
		display: none !important;
	}

	#bar {
		height: calc(
			var(--cz-control-height-md, 32px) + var(--cz-spacing, 4px) * 4
		);
		padding: 0 3%;
		display: flex;
		align-items: center;
		gap: calc(var(--cz-spacing, 4px) * 2);
	}

	#info {
		flex: 1 1 auto;
		min-width: 0;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	#dropdown {
		flex: none;
	}

	#bottomBarToolbar::slotted(*) {
		flex: 0 0 auto;
		min-width: 0;
	}

	.menu {
		max-width: min(300px, calc(100dvw - var(--cz-spacing, 4px) * 4));
	}

	.menu > cosmoz-dropdown-list {
		max-height: var(--cosmoz-dropdown-menu-max-height, min(60dvh, 30rem));
	}

	#bottomBarMenu::slotted([variant]) {
		padding: 0;
		background: none;
		--cosmoz-button-justify-content: flex-start;
	}

	@media (prefers-reduced-motion: reduce) {
		:host {
			transition: none;
		}
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown,
	:host([hide-actions]) #menuButton {
		display: none;
	}

	:host(:not([has-menu-items])) #dropdown,
	:host(:not([has-menu-items])) #menuButton {
		display: none;
	}
`,aA=Symbol(`openMenu`),oA=e=>{let t=e.currentTarget.closest(`#dropdown`);t&&(t.opened=!1)},sA=e=>{e.shadowRoot?.querySelector(`#menuButton`)?.click()},cA=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,lA=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},uA=e=>{let t=lA(e).filter(cA).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},dA={variant:`tertiary`,size:`sm`},fA=new WeakMap,pA=e=>e.constructor.observedAttributes?.includes(`variant`)??!1,mA=(e,t,n,r)=>{let i=t?nA:rA;if(e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),pA(e)){fA.has(e)||fA.set(e,{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`)});let n=t?fA.get(e):dA;Object.entries(n).forEach(([t,n])=>n==null?e.removeAttribute(t):e.setAttribute(t,n))}e.classList.toggle(r,!t),e.classList.toggle(n,t)},hA=(e,t,n)=>{let r=uA(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>mA(e,!0,t,n)),o.forEach(e=>mA(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0);let s=e.shadowRoot?.querySelector(`#bar`);if(!s?.clientWidth)return;let c=s.getBoundingClientRect(),l=getComputedStyle(s),u=c.left+parseFloat(l.paddingLeft),d=c.right-parseFloat(l.paddingRight),f=()=>s.scrollWidth>s.clientWidth||a.some(e=>{let t=e.getBoundingClientRect();return e.scrollWidth>e.clientWidth||t.left<u-.5||t.right>d+.5});for(;a.length>0&&f();)mA(a.pop(),!1,t,n),e.toggleAttribute(`has-menu-items`,!0)},gA=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,i=Zk(),a=M(!1);tE({activity:aA,callback:()=>sA(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#menuButton`)},[t]);let o=k(()=>Mt(`height`),[]);Ae(()=>{a.current?o(e,t):o(e,t,{duration:0}),a.current=!0},[t]);let s=M([]),l=A(()=>{s.current=uA(e),hA(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`)},[n]),u=M(null),d=A(()=>{let t=u.current;t&&(t.disconnect(),lA(e).filter(cA).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{u.current=new MutationObserver(()=>{d(),l()}),d(),l();let t=new MutationObserver(()=>{d(),l()});t.observe(e,{childList:!0,subtree:!0,characterData:!0});let n=new ResizeObserver(l);return n.observe(e),()=>{u.current?.disconnect(),u.current=null,t.disconnect(),n.disconnect()}},[l]),Ae(l,[i.mobile]);let f=A(()=>{d();let t=uA(e),n=s.current??[];(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&l()},[l]);return c` <div id="bar" part="bar">
			<div id="info" part="info">
				<slot
					name="info"
					@slotchange=${t=>e.toggleAttribute(`has-info`,t.target.assignedNodes({flatten:!0}).length>0)}
				></slot>
			</div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${f}
			></slot>
			${i.mobile?c`<cosmoz-button
							id="menuButton"
							variant="tertiary"
							icon-only
							aria-label=${Yk(`More actions`)||`More actions`}
							aria-haspopup="dialog"
							aria-expanded=${String(i.opened)}
							@click=${i.open}
							>${Bd()}</cosmoz-button
						>`:c`<cosmoz-dropdown-next
							id="dropdown"
							part="dropdown"
							placement="top span-left"
						>
							<cosmoz-button
								id="menuButton"
								slot="button"
								variant="tertiary"
								icon-only
								aria-label=${Yk(`More actions`)||`More actions`}
								>${Bd()}</cosmoz-button
							>
							<div class="menu" part="menu" @click=${oA}>
								<cosmoz-dropdown-list>
									<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
								</cosmoz-dropdown-list>
							</div>
						</cosmoz-dropdown-next>`}
			<slot name="extra" id="extraSlot"></slot>
		</div>
		${i.mobile?Qk(i,c`<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>`):r}
		<div hidden style="display:none">
			<slot id="content" @slotchange=${f}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,N(gA,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[iA,eA]})),_A=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,c(Object.assign([_A],{raw:[_A]})),XO(Object.assign([_A],{raw:[_A]}))})))()}function yA(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var bA,xA,SA,CA,wA,TA,EA;function DA(){return(DA=e((()=>{kt(),P(),n(),L(),vA(),bA=e=>{let{active:t,maxToolbarItems:n}=e,[r,i]=j(``),[a,o]=j(yA([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),s=e=>{let t=e.target;i(t.value)},l=e=>{let t=e?e.trim():``;o([...a,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&i(``)};return c`
		<input
			.value=${r}
			placeholder="priority"
			type="number"
			@input=${s}
			@keypress=${e=>e.key===`Enter`&&l(r)}
		/>
		<cosmoz-button @click=${()=>l(r)}>Add btn</cosmoz-button>
		<cosmoz-button @click=${()=>l(void 0)}
			>Add noprio btn</cosmoz-button
		>
		<cosmoz-button @click=${()=>{let t=e.shadowRoot.querySelector(`cosmoz-bottom-bar`);e.shadowRoot.appendChild(t)}}>Test reconnect</cosmoz-button>

		<cosmoz-bottom-bar
			id="bottomBar"
			?active=${t}
			.maxToolbarItems=${n}
		>
			<span slot="info">Bottom bar demo</span>
			${At(a,e=>c`<cosmoz-button
						@click=${e.onClick}
						data-priority=${I(e.priority)}
					>
						${e.text}
					</cosmoz-button>`)}
		</cosmoz-bottom-bar>
	`},customElements.define(`cosmoz-bottom-bar-story`,N(bA,{observedAttributes:[`active`,`max-toolbar-items`]})),xA=e=>c`<cosmoz-bottom-bar-story
		?active=${e.active}
		.maxToolbarItems=${e.maxToolbarItems}
	></cosmoz-bottom-bar-story>`,SA=({active:e,maxToolbarItems:t})=>c`
	<cosmoz-bottom-bar
		id="bottomBar"
		?active=${e}
		.maxToolbarItems=${t}
	>
		<span slot="info">Bottom bar demo</span>
	</cosmoz-bottom-bar>
`,CA={title:`Cosmoz Bottom Bar`,render:xA,argTypes:{active:{control:`boolean`},maxToolbarItems:{control:`number`}},parameters:{docs:{description:{component:`The Cosmoz Bottom Bar web component`}}}},wA={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The basic version`}}}},TA={render:SA,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The empty cosmoz-bottom-bar`}}}},EA=[`Basic`,`Empty`]})))()}DA();export{wA as Basic,TA as Empty,EA as __namedExportsOrder,CA as default};