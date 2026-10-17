import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c}from"./iframe-Cfe90FGH.js";function l(e){f=e}function u(){f=null,p=0}function d(){return p++}var f,p;function m(){return(m=e((()=>{p=0})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=Symbol(`haunted.phase`),g=Symbol(`haunted.hook`),_=Symbol(`haunted.update`),v=Symbol(`haunted.commit`),y=Symbol(`haunted.effects`),b=Symbol(`haunted.layoutEffects`),x=`haunted.context`})))()}var ee;function te(){return(te=e((()=>{m(),S(),ee=class{update;host;virtual;[g];[y];[b];constructor(e,t){this.update=e,this.host=t,this[g]=new Map,this[y]=[],this[b]=[]}run(e){l(this);let t=e();return u(),t}_runEffects(e){let t=this[e];l(this);for(let e of t)e.call(this);u()}runEffects(){this._runEffects(y)}runLayoutEffects(){this._runEffects(b)}teardown(){this[g].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var C;function ne(){return(ne=e((()=>{C=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,se,ce;function le(){return(le=e((()=>{te(),S(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),se=re(),ce=class e{renderer;host;state;[h];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[h]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new C(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(_);se(()=>{this.handlePhase(v,e),se(()=>{this.handlePhase(y),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[h]=e,e){case v:this.commit(t),this.runEffects(b);return;case _:return this.render();case y:return this.runEffects(y)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var ue,de,fe,w;function pe(){return(pe=e((()=>{ue=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},de=e=>e?.map(e=>typeof e==`string`?ue(e):e),fe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=fe})))()}function me(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=de(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,he(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),r._scheduler?.update(),!0):(Reflect.set(e,t,n,r),r._scheduler?.update(),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var he;function ge(){return(ge=e((()=>{le(),pe(),he=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function _e(e,...t){let n=d(),r=f[g],i=r.get(n);return i||(i=new e(n,f,...t),r.set(n,i)),i.update(...t)}function T(e){return _e.bind(null,e)}var E;function D(){return(D=e((()=>{m(),S(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function ve(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function ye(){return(ye=e((()=>{D()})))()}function be(e,t){e[y].push(t)}var O;function xe(){return(xe=e((()=>{S(),ye(),O=ve(be)})))()}var Se,Ce;function we(){return(we=e((()=>{D(),S(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(x,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(x,this)}disconnectedCallback(){this.removeEventListener(x,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Ee(){return(Ee=e((()=>{S(),we()})))()}var k;function De(){return(De=e((()=>{D(),k=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var A;function Oe(){return(Oe=e((()=>{De(),A=(e,t)=>k(()=>e,t)})))()}function ke(e,t){e[b].push(t)}var Ae;function je(){return(je=e((()=>{S(),ye(),Ae=ve(ke)})))()}var j;function Me(){return(Me=e((()=>{D(),j=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Ne(){return(Ne=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Pe,Fe;function Ie(){return(Ie=e((()=>{D(),Pe=/([A-Z])/gu,Fe=T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Pe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Le(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function M(e){return k(()=>Le(e),[])}function Re(){return(Re=e((()=>{De()})))()}function ze(){return(ze=e((()=>{D(),T(class extends E{update(){return this.state.host}})})))()}function Be({render:e}){let t=me(e);return{component:t,createContext:Te(t)}}function Ve(){return(Ve=e((()=>{ge(),Ee(),Oe(),xe(),je(),Me(),Ne(),De(),we(),Ie(),Re(),ze(),le()})))()}var He,Ue,We;function Ge(){return(Ge=e((()=>{He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t}),We=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function Ke(e){this._$AN===void 0?this._$AM=e:(Ye(this),this._$AM=e,Xe(this))}function qe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Je(r[e],!1),Ye(r[e]);else r!=null&&(Je(r,!1),Ye(r))}else Je(this,e)}}var Je,Ye,Xe,Ze,Qe;function $e(){return($e=e((()=>{a(),Ge(),Je=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Je(e,t);return!0},Ye=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Xe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ze(t)}},Ze=e=>{e.type==He.CHILD&&(e._$AP??=qe,e._$AQ??=Ke)},Qe=class extends We{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Xe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Je(this,e),Ye(this))}setValue(e){if(s(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function et(){return(et=e((()=>{Ge(),n(),$e(),le(),Array.prototype.includes})))()}var N,tt;function nt(){return(nt=e((()=>{n(),Ve(),et(),{component:N,createContext:tt}=Be({render:t})})))()}function P(){return(P=e((()=>{nt(),Ve(),pe()})))()}var rt;function it(){return(it=e((()=>{P(),rt=ue(w`
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
`)})))()}var at,F;function ot(){return(ot=e((()=>{n(),$e(),Ge(),at=new WeakMap,F=Ue(class extends Qe{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=at.get(t);n===void 0&&(n=new WeakMap,at.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?at.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}function st(e,t,n){return e?t(e):n?.(e)}var ct;function lt(){return(lt=e((()=>{it(),P(),n(),ct=w`
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
		`,{styleSheets:[rt,ct]}))})))()}var ut;function dt(){return(dt=e((()=>{P(),ut=ue(w`
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
		</cosmoz-tooltip-content>`,e),pt=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=M(),l=!!(r||i)&&!s;O(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(ut)||(t.adoptedStyleSheets=[...u,ut]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,ft(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),O(()=>{n&&c.current&&ft(c.current,r,i)},[r,i,n]),O(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var ht;function gt(){return(gt=e((()=>{P(),ht=e=>{let[t,n]=j(!1);return O(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var _t,vt;function yt(){return(yt=e((()=>{it(),P(),n(),ot(),lt(),dt(),mt(),gt(),_t=w`
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
		`},customElements.define(`cosmoz-tooltip`,N(vt,{styleSheets:[rt,ut,_t],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function bt(){return(bt=e((()=>{yt()})))()}var I;function L(){return(L=e((()=>{n(),I=e=>e??r})))()}var xt;function St(){return(St=e((()=>{P(),xt=w`
	:host {
		display: inline-flex;
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

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: var(--cz-control-height-sm);
		padding: calc(var(--cz-spacing) * 1) calc(var(--cz-spacing) * 2.5);
		font-size: var(--cz-text-xs);
		line-height: var(--cz-text-xs-line-height);
		border-radius: var(--cz-radius-sm);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: var(--cz-control-height-lg);
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: var(--cz-control-height-xl);
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * ICON ONLY
	 * ======================================== */

	:host([icon-only]) .button {
		width: var(--cz-control-height-md);
		height: var(--cz-control-height-md);
		padding: calc(var(--cz-spacing) * 1.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([icon-only][size='sm']) .button {
		width: var(--cz-control-height-sm);
		height: var(--cz-control-height-sm);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='lg']) .button {
		width: var(--cz-control-height-lg);
		height: var(--cz-control-height-lg);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='xl']) .button {
		width: var(--cz-control-height-xl);
		height: var(--cz-control-height-xl);
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only]) ::slotted(svg) {
		width: 20px;
		height: 20px;
	}

	:host([icon-only][size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	/* ========================================
	 * BUTTON BASE STYLES
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: var(--cosmoz-button-justify-content, center);
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-medium);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease,
			transform 0.1s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) default size */
		height: var(--cz-control-height-md);
		padding: calc(var(--cz-spacing) * 1.5) calc(var(--cz-spacing) * 3);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active:not(:disabled) {
			transform: translateY(1px);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);
		box-shadow:
			inset 0 0 0 1px var(--cz-color-border-primary),
			var(--cz-shadow-xs);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-secondary);
		}

		&:focus-visible {
			box-shadow: var(--cz-focus-ring);
		}
	}

	:host([variant='destructive']) .button {
		background-color: var(--cz-color-bg-error-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-error-800);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
			transform: none;
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * ICON ONLY COLORS (Untitled UI utility button)
	 * ======================================== */

	:host([icon-only][variant='secondary']) .button,
	:host([icon-only][variant='tertiary']) .button {
		color: var(--cz-color-text-tertiary);
	}

	:host([icon-only][variant='secondary']:not([disabled]):hover) .button,
	:host([icon-only][variant='secondary']) .button:hover,
	:host([icon-only][variant='tertiary']:not([disabled]):hover) .button,
	:host([icon-only][variant='tertiary']) .button:hover {
		color: var(--cz-color-text-secondary);
	}

	/* ========================================
	 * PRESSED / SELECTED STATE (aria-pressed)
	 * Quiet variants (secondary, tertiary) shift to the selected brand
	 * chip; primary and destructive stay solid but visually "sink" with
	 * an inset shadow; link emphasizes text with no surface change.
	 * ======================================== */

	:host([aria-pressed='true']) .button {
		box-shadow: var(--cz-shadow-pressed-3d);
	}

	:host([variant='secondary'][aria-pressed='true']) .button {
		box-shadow:
			var(--cz-shadow-pressed-3d),
			inset 0 0 0 1px
				light-dark(var(--cz-color-brand-300), var(--cz-color-brand-500));
	}

	:host([aria-pressed='true']) .button {
		background-color: light-dark(
			var(--cz-color-brand-50),
			var(--cz-color-brand-900)
		);
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			background-color: light-dark(
				var(--cz-color-brand-100),
				var(--cz-color-brand-800)
			);
		}
	}

	/* Overrides the muted icon-only colors above (higher specificity). */
	:host([icon-only][variant='secondary'][aria-pressed='true']) .button,
	:host([icon-only][variant='tertiary'][aria-pressed='true']) .button {
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));

		&:hover {
			color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-200));
		}
	}

	:host(:not([variant])[aria-pressed='true']) .button,
	:host([variant='primary'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}
	}

	:host([variant='destructive'][aria-pressed='true']) .button {
		background-color: var(--cz-color-bg-error-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs), var(--cz-shadow-pressed-3d-solid);

		&:hover {
			background-color: var(--cz-color-bg-error-solid-hover);
		}
	}

	:host([variant='link'][aria-pressed='true']) .button {
		background-color: transparent;
		box-shadow: none;
		color: light-dark(var(--cz-color-brand-700), var(--cz-color-brand-300));
		text-decoration: underline;

		&:hover {
			background-color: transparent;
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;
	}

	:host([disabled]) .button,
	:host([disabled][variant='primary']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='destructive']) .button {
		background-color: var(--cz-color-bg-disabled);
		color: var(--cz-color-text-disabled);
		box-shadow: none;
	}

	:host([disabled][variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-disabled);
	}

	/* ========================================
	 * ICON SLOTS
	 * ======================================== */

	::slotted(svg) {
		width: 20px;
		height: 20px;
		flex-shrink: 0;
	}
`})))()}var Ct,wt;function Tt(){return(Tt=e((()=>{it(),bt(),P(),n(),L(),St(),Ct=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`],wt=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:i,type:a=`button`,href:o,target:s,rel:l,download:u}=e,d=!!t;O(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=c`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=st(o!=null,()=>c`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${d?`true`:r}
				target=${I(s)}
				rel=${I(l)}
				download=${I(u)}
				>${f}</a
			>
		`,()=>c`
			<button type=${a} class="button" part="button" ?disabled=${d}>
				${f}
			</button>
		`);return c`<cosmoz-tooltip
		heading=${I(n??void 0)}
		placement=${I(i??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,N(wt,{observedAttributes:Ct,styleSheets:[rt,xt],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function Et(){return(Et=e((()=>{Tt()})))()}function*Dt(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var Ot,kt;function At(){return(At=e((()=>{Ot={duration:250},kt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Ot,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var jt,Mt;function Nt(){return(Nt=e((()=>{n(),Ge(),jt={},Mt=Ue(class extends We{constructor(){super(...arguments),this.ot=jt}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return o}else if(this.ot===t)return o;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})))()}var Pt,Ft,It;function Lt(){return(Lt=e((()=>{n(),Ge(),Pt=`important`,Ft=` !`+Pt,It=Ue(class extends We{constructor(e){if(super(e),e.type!==He.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ft);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Pt:``):n[e]=r}}return o}})})))()}var Rt;function zt(){return(zt=e((()=>{Rt=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var Bt,Vt;function Ht(){return(Ht=e((()=>{P(),n(),zt(),Bt=w`
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
`,Vt=()=>c`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Rt(N(Vt,{styleSheets:[Bt]})))})))()}function Ut(e,t,n){return z(e,on(t,n))}function Wt(e,t){return typeof e==`function`?e(t):e}function Gt(e){return e.split(`-`)[0]}function Kt(e){return e.split(`-`)[1]}function qt(e){return e===`x`?`y`:`x`}function Jt(e){return e===`y`?`height`:`width`}function R(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Yt(e){return qt(R(e))}function Xt(e,t,n){n===void 0&&(n=!1);let r=Kt(e),i=Yt(e),a=Jt(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=tn(o)),[o,tn(o)]}function Zt(e){let t=tn(e);return[Qt(e),t,Qt(t)]}function Qt(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function $t(e,t,n){switch(e){case`top`:case`bottom`:return n?t?dn:un:t?un:dn;case`left`:case`right`:return t?fn:pn;default:return[]}}function en(e,t,n,r){let i=Kt(e),a=$t(Gt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Qt)))),a}function tn(e){let t=Gt(e);return ln[t]+e.slice(t.length)}function nn(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function rn(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:nn(e)}function an(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var on,z,sn,cn,B,ln,un,dn,fn,pn;function mn(){return(mn=e((()=>{on=Math.min,z=Math.max,sn=Math.round,cn=Math.floor,B=e=>({x:e,y:e}),ln={left:`right`,right:`left`,bottom:`top`,top:`bottom`},un=[`left`,`right`],dn=[`right`,`left`],fn=[`top`,`bottom`],pn=[`bottom`,`top`]})))()}function hn(e,t,n){let{reference:r,floating:i}=e,a=R(t),o=Yt(t),s=Jt(o),c=Gt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Kt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function gn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Wt(t,e),p=rn(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=an(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=an(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var _n,vn,yn,bn;function xn(){return(xn=e((()=>{mn(),_n=50,vn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:gn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=hn(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<_n&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=hn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},yn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Wt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Gt(r),_=R(o),v=Gt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[tn(o)]:Zt(o)),x=p!==`none`;!d&&x&&b.push(...en(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=Xt(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===R(t)||C.every(e=>R(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=R(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},bn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Wt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=R(i),p=qt(f),m=u[p],h=u[f],g=(e,t)=>Ut(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}}})))()}function Sn(){return typeof window<`u`}function Cn(e){return wn(e)?(e.nodeName||``).toLowerCase():`#document`}function V(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function H(e){return((wn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function wn(e){return Sn()?e instanceof Node||e instanceof V(e).Node:!1}function U(e){return Sn()?e instanceof Element||e instanceof V(e).Element:!1}function W(e){return Sn()?e instanceof HTMLElement||e instanceof V(e).HTMLElement:!1}function Tn(e){return!Sn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof V(e).ShadowRoot}function En(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=G(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Dn(e){return/^(table|td|th)$/.test(Cn(e))}function On(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function kn(e){let t=U(e)?G(e):e;return q(t.transform)||q(t.translate)||q(t.scale)||q(t.rotate)||q(t.perspective)||!jn()&&(q(t.backdropFilter)||q(t.filter))||Ln.test(t.willChange||``)||Rn.test(t.contain||``)}function An(e){let t=K(e);for(;W(t)&&!Mn(t);){if(kn(t))return t;if(On(t))return null;t=K(t)}return null}function jn(){return zn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),zn}function Mn(e){return/^(html|body|#document)$/.test(Cn(e))}function G(e){return V(e).getComputedStyle(e)}function Nn(e){return U(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function K(e){if(Cn(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||Tn(e)&&e.host||H(e);return Tn(t)?t.host:t}function Pn(e){let t=K(e);return Mn(t)?(e.ownerDocument||e).body:W(t)&&En(t)?t:Pn(t)}function Fn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Pn(e),i=r===e.ownerDocument?.body,a=V(r);if(i){let e=In(a);return t.concat(a,a.visualViewport||[],En(r)?r:[],e&&n?Fn(e):[])}return t.concat(r,Fn(r,[],n))}function In(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Ln,Rn,q,zn;function Bn(){return(Bn=e((()=>{Ln=/transform|translate|scale|rotate|perspective|filter/,Rn=/paint|layout|strict|content/,q=e=>!!e&&e!==`none`})))()}function Vn(e){let t=G(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=W(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=sn(n)!==a||sn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Hn(e){return U(e)?e:e.contextElement}function Un(e){let t=Hn(e);if(!W(t))return B(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Vn(t),o=(a?sn(n.width):n.width)/r,s=(a?sn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Wn(e){let t=V(e);return!jn()||!t.visualViewport?dr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Gn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===V(e)}function J(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Hn(e),o=B(1);t&&(r?U(r)&&(o=Un(r)):o=Un(e));let s=Gn(a,n,r)?Wn(a):B(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=V(a),t=U(r)?V(r):r,n=e,i=In(n);for(;i&&t!==n;){let e=Un(i),t=i.getBoundingClientRect(),r=G(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=V(i),i=In(n)}}return an({width:u,height:d,x:c,y:l})}function Kn(e,t){let n=Nn(e).scrollLeft;return t?t.left+n:J(H(e)).left+n}function qn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Kn(e,n),y:n.top+t.scrollTop}}function Jn(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=H(r),s=t?On(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=B(1),u=B(0),d=W(r);if((d||!a)&&((Cn(r)!==`body`||En(o))&&(c=Nn(r)),d)){let e=J(r);l=Un(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?qn(o,c):B(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Yn(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Xn(e){let t=Nn(e),n=e.ownerDocument.body,r=z(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=z(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Kn(e),o=-t.scrollTop;return G(n).direction===`rtl`&&(a+=z(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Zn(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=V(e),a=H(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!jn()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Kn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=fr&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Qn(e,t){let n=J(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Un(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function $n(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Zn(e,n,t);else if(t===`document`)r=Xn(H(e));else if(U(t))r=Qn(t,n);else{let n=Wn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return an(r)}function er(e,t){let n=t.get(e);if(n)return n;let r=Fn(e,[],!1).filter(e=>U(e)&&Cn(e)!==`body`),i=null,a=G(e).position===`fixed`,o=a?K(e):e;for(;U(o)&&!Mn(o);){let e=G(o),t=kn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=K(o)}return t.set(e,r),r}function tr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?On(t)?[]:er(t,this._c):[].concat(n),r],o=$n(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=$n(t,a[e],i);s=z(n.top,s),c=on(n.right,c),l=on(n.bottom,l),u=z(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function nr(e){let{width:t,height:n}=Vn(e);return{width:t,height:n}}function rr(e,t,n){let r=W(t),i=H(t),a=n===`fixed`,o=J(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=B(0);if((r||!a)&&((Cn(t)!==`body`||En(i))&&(s=Nn(t)),r)){let e=J(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Kn(i));let l=i&&!r&&!a?qn(i,s):B(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ir(e){return G(e).position===`static`}function ar(e,t){if(!W(e)||G(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return H(e)===n&&(n=n.ownerDocument.body),n}function or(e,t){let n=V(e);if(On(e))return n;if(!W(e)){let t=K(e);for(;t&&!Mn(t);){if(U(t)&&!ir(t))return t;t=K(t)}return n}let r=ar(e,t);for(;r&&Dn(r)&&ir(r);)r=ar(r,t);return r&&Mn(r)&&ir(r)&&!kn(r)?n:r||An(e)||n}function sr(e){return G(e).direction===`rtl`}function cr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function lr(e,t,n){let r=null,i,a=H(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=cn(d),h=cn(a.clientWidth-(u+f)),g=cn(a.clientHeight-(d+p)),_=cn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:z(0,on(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!cr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=V(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function ur(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Hn(e),u=i||a?[...l?Fn(l):[],...t?Fn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?lr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?J(e):null;c&&g();function g(){let t=J(e);h&&!cr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var dr,fr,pr,mr,hr,gr,_r;function vr(){return(vr=e((()=>{xn(),mn(),Bn(),dr=B(0),fr=25,pr=async function(e){let t=this.getOffsetParent||or,n=this.getDimensions,r=await n(e.floating);return{reference:rr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},mr={convertOffsetParentRelativeRectToViewportRelativeRect:Jn,getDocumentElement:H,getClippingRect:tr,getOffsetParent:or,getElementRects:pr,getClientRects:Yn,getDimensions:nr,getScale:Un,isElement:U,isRTL:sr},hr=bn,gr=yn,_r=(e,t,n)=>{let r=new Map,i=n??{},a={...mr,...i.platform,_c:r};return vn(e,t,{...i,platform:a})}})))()}var yr,br;function xr(){return(xr=e((()=>{P(),vr(),yr=[gr({fallbackAxisSideDirection:`start`,crossAxis:!1}),hr()],br=({placement:e=`bottom-start`,strategy:t,middleware:n=yr}={})=>{let[r,i]=j(),[a,o]=j(),[s,c]=j();return O(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return ur(r,a,()=>_r(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:k(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})))()}var Sr;function Cr(){return(Cr=e((()=>{P(),Sr=e=>{let t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var wr,Tr,Er;function Dr(){return(Dr=e((()=>{Cr(),P(),wr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,Tr=({disabled:e,onFocus:t})=>{let[n,r]=j(),{focused:i,closed:a}=n||{},o=i&&!e,s=Sr({closed:a,onFocus:t}),c=A(e=>r(t=>({...t,closed:e})),[]),l=A(e=>{let t=e.currentTarget;return wr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:A(e=>{let t=wr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},Er=e=>{let t=Tr(e),{onFocus:n}=t,r=M();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var Or,kr,Ar;function jr(){return(jr=e((()=>{P(),n(),Nt(),ot(),Lt(),Ht(),xr(),Dr(),Or=e=>e.preventDefault(),kr=w`
	.anchor {
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
`,Ar=e=>{let{placement:t,strategy:n,middleware:i,render:a}=e,{active:o,onToggle:s}=Er(e),l=M(),{styles:u,setReference:d,setFloating:f}=br({placement:t,strategy:n,middleware:i}),p=A(e=>{l.current=e,f(e)},[f]);return O(()=>{let e=l.current;e&&(o&&!e.matches(`:popover-open`)&&e.showPopover?.(),!o&&e.matches(`:popover-open`)&&e.hidePopover?.())},[o]),c`
		<div class="anchor" part="anchor" ${F(d)}>
			<button
				@mousedown=${Or}
				@click=${s}
				part="button"
				id="dropdownButton"
			>
				<slot name="button">...</slot>
			</button>
		</div>
		<cosmoz-dropdown-content
			popover
			id="content"
			part="content"
			exportparts="wrap, content"
			style="${It(u)}"
			${F(p)}
			><slot></slot>${Mt([a],()=>a?.()||r)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,N(Ar,{styleSheets:[kr]}))})))()}var Mr,Nr,Pr;function Fr(){return(Fr=e((()=>{P(),n(),Mr=w`
	:host {
		display: contents;
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
`,Nr=()=>c` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,N(Nr,{styleSheets:[Mr]})),Pr=({placement:e})=>c` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,N(Pr))})))()}var Ir;function Lr(){return(Lr=e((()=>{P(),Ir=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=M(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return O(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),O(()=>{if(i&&!n)return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})))()}var Rr,zr,Br;function Vr(){return(Vr=e((()=>{P(),n(),ot(),Lr(),Rr=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},zr=w`
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
`,Br=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=M(),[s,l]=Fe(`opened`,!1),u=A(()=>{n||(l(!0),o.current?.showPopover?.())},[n]),d=A(()=>{l(!1),o.current?.hidePopover?.()},[]),f=A(()=>{n||(o.current?.matches(`:popover-open`)?d():u())},[n]);O(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),O(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:p,cancelClose:m}=Ir({host:e,popoverRef:o,disabled:n,openOnHover:i,openOnFocus:a,open:u,close:d}),h=a?u:f,g=A(t=>{Rr(t),l(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c`
		<slot name="button" @click=${h}></slot>
		${n&&r?c`<slot></slot>`:c`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${F(e=>e&&(o.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,N(Br,{styleSheets:[zr],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function Hr(){return(Hr=e((()=>{jr(),Fr(),Dr(),Vr()})))()}function Ur(){return(Ur=e((()=>{n(),L()})))()}function Wr(){return(Wr=e((()=>{n(),L()})))()}function Gr(){return(Gr=e((()=>{n(),L()})))()}function Kr(){return(Kr=e((()=>{n(),L()})))()}function qr(){return(qr=e((()=>{n(),L()})))()}function Jr(){return(Jr=e((()=>{n(),L()})))()}function Yr(){return(Yr=e((()=>{n(),L()})))()}function Xr(){return(Xr=e((()=>{n(),L()})))()}function Zr(){return(Zr=e((()=>{n(),L()})))()}function Qr(){return(Qr=e((()=>{n(),L()})))()}function $r(){return($r=e((()=>{n(),L()})))()}function ei(){return(ei=e((()=>{n(),L()})))()}function ti(){return(ti=e((()=>{n(),L()})))()}function ni(){return(ni=e((()=>{n(),L()})))()}function ri(){return(ri=e((()=>{n(),L()})))()}function ii(){return(ii=e((()=>{n(),L()})))()}function ai(){return(ai=e((()=>{n(),L()})))()}function oi(){return(oi=e((()=>{n(),L()})))()}function si(){return(si=e((()=>{n(),L()})))()}function ci(){return(ci=e((()=>{n(),L()})))()}function li(){return(li=e((()=>{n(),L()})))()}function ui(){return(ui=e((()=>{n(),L()})))()}function di(){return(di=e((()=>{n(),L()})))()}function fi(){return(fi=e((()=>{n(),L()})))()}function pi(){return(pi=e((()=>{n(),L()})))()}function mi(){return(mi=e((()=>{n(),L()})))()}function hi(){return(hi=e((()=>{n(),L()})))()}function gi(){return(gi=e((()=>{n(),L()})))()}function _i(){return(_i=e((()=>{n(),L()})))()}function vi(){return(vi=e((()=>{n(),L()})))()}function yi(){return(yi=e((()=>{n(),L()})))()}function bi(){return(bi=e((()=>{n(),L()})))()}function xi(){return(xi=e((()=>{n(),L()})))()}function Si(){return(Si=e((()=>{n(),L()})))()}function Ci(){return(Ci=e((()=>{n(),L()})))()}function wi(){return(wi=e((()=>{n(),L()})))()}function Ti(){return(Ti=e((()=>{n(),L()})))()}function Ei(){return(Ei=e((()=>{n(),L()})))()}function Di(){return(Di=e((()=>{n(),L()})))()}function Oi(){return(Oi=e((()=>{n(),L()})))()}function ki(){return(ki=e((()=>{n(),L()})))()}function Ai(){return(Ai=e((()=>{n(),L()})))()}function ji(){return(ji=e((()=>{n(),L()})))()}function Mi(){return(Mi=e((()=>{n(),L()})))()}function Ni(){return(Ni=e((()=>{n(),L()})))()}function Pi(){return(Pi=e((()=>{n(),L()})))()}function Fi(){return(Fi=e((()=>{n(),L()})))()}function Ii(){return(Ii=e((()=>{n(),L()})))()}function Li(){return(Li=e((()=>{n(),L()})))()}function Ri(){return(Ri=e((()=>{n(),L()})))()}function zi(){return(zi=e((()=>{n(),L()})))()}function Bi(){return(Bi=e((()=>{n(),L()})))()}function Vi(){return(Vi=e((()=>{n(),L()})))()}function Hi(){return(Hi=e((()=>{n(),L()})))()}function Ui(){return(Ui=e((()=>{n(),L()})))()}function Wi(){return(Wi=e((()=>{n(),L()})))()}function Gi(){return(Gi=e((()=>{n(),L()})))()}function Ki(){return(Ki=e((()=>{n(),L()})))()}function qi(){return(qi=e((()=>{n(),L()})))()}function Ji(){return(Ji=e((()=>{n(),L()})))()}function Yi(){return(Yi=e((()=>{n(),L()})))()}function Xi(){return(Xi=e((()=>{n(),L()})))()}function Zi(){return(Zi=e((()=>{n(),L()})))()}function Qi(){return(Qi=e((()=>{n(),L()})))()}function $i(){return($i=e((()=>{n(),L()})))()}function ea(){return(ea=e((()=>{n(),L()})))()}function ta(){return(ta=e((()=>{n(),L()})))()}function na(){return(na=e((()=>{n(),L()})))()}function ra(){return(ra=e((()=>{n(),L()})))()}function ia(){return(ia=e((()=>{n(),L()})))()}function aa(){return(aa=e((()=>{n(),L()})))()}function oa(){return(oa=e((()=>{n(),L()})))()}function sa(){return(sa=e((()=>{n(),L()})))()}function ca(){return(ca=e((()=>{n(),L()})))()}function la(){return(la=e((()=>{n(),L()})))()}function ua(){return(ua=e((()=>{n(),L()})))()}function da(){return(da=e((()=>{n(),L()})))()}function fa(){return(fa=e((()=>{n(),L()})))()}function pa(){return(pa=e((()=>{n(),L()})))()}function ma(){return(ma=e((()=>{n(),L()})))()}function ha(){return(ha=e((()=>{n(),L()})))()}function ga(){return(ga=e((()=>{n(),L()})))()}function _a(){return(_a=e((()=>{n(),L()})))()}function va(){return(va=e((()=>{n(),L()})))()}function ya(){return(ya=e((()=>{n(),L()})))()}function ba(){return(ba=e((()=>{n(),L()})))()}function xa(){return(xa=e((()=>{n(),L()})))()}function Sa(){return(Sa=e((()=>{n(),L()})))()}function Ca(){return(Ca=e((()=>{n(),L()})))()}function wa(){return(wa=e((()=>{n(),L()})))()}function Ta(){return(Ta=e((()=>{n(),L()})))()}function Ea(){return(Ea=e((()=>{n(),L()})))()}function Da(){return(Da=e((()=>{n(),L()})))()}function Oa(){return(Oa=e((()=>{n(),L()})))()}function ka(){return(ka=e((()=>{n(),L()})))()}function Aa(){return(Aa=e((()=>{n(),L()})))()}function ja(){return(ja=e((()=>{n(),L()})))()}function Ma(){return(Ma=e((()=>{n(),L()})))()}function Na(){return(Na=e((()=>{n(),L()})))()}function Pa(){return(Pa=e((()=>{n(),L()})))()}function Fa(){return(Fa=e((()=>{n(),L()})))()}function Ia(){return(Ia=e((()=>{n(),L()})))()}function La(){return(La=e((()=>{n(),L()})))()}function Ra(){return(Ra=e((()=>{n(),L()})))()}function za(){return(za=e((()=>{n(),L()})))()}function Ba(){return(Ba=e((()=>{n(),L()})))()}function Va(){return(Va=e((()=>{n(),L()})))()}function Ha(){return(Ha=e((()=>{n(),L()})))()}function Ua(){return(Ua=e((()=>{n(),L()})))()}function Wa(){return(Wa=e((()=>{n(),L()})))()}function Ga(){return(Ga=e((()=>{n(),L()})))()}function Ka(){return(Ka=e((()=>{n(),L()})))()}function qa(){return(qa=e((()=>{n(),L()})))()}function Ja(){return(Ja=e((()=>{n(),L()})))()}function Ya(){return(Ya=e((()=>{n(),L()})))()}function Xa(){return(Xa=e((()=>{n(),L()})))()}function Za(){return(Za=e((()=>{n(),L()})))()}function Qa(){return(Qa=e((()=>{n(),L()})))()}function $a(){return($a=e((()=>{n(),L()})))()}function eo(){return(eo=e((()=>{n(),L()})))()}function to(){return(to=e((()=>{n(),L()})))()}function no(){return(no=e((()=>{n(),L()})))()}function ro(){return(ro=e((()=>{n(),L()})))()}function io(){return(io=e((()=>{n(),L()})))()}function ao(){return(ao=e((()=>{n(),L()})))()}function oo(){return(oo=e((()=>{n(),L()})))()}function so(){return(so=e((()=>{n(),L()})))()}function co(){return(co=e((()=>{n(),L()})))()}function lo(){return(lo=e((()=>{n(),L()})))()}function uo(){return(uo=e((()=>{n(),L()})))()}function fo(){return(fo=e((()=>{n(),L()})))()}function po(){return(po=e((()=>{n(),L()})))()}function mo(){return(mo=e((()=>{n(),L()})))()}function ho(){return(ho=e((()=>{n(),L()})))()}function go(){return(go=e((()=>{n(),L()})))()}function _o(){return(_o=e((()=>{n(),L()})))()}function vo(){return(vo=e((()=>{n(),L()})))()}function yo(){return(yo=e((()=>{n(),L()})))()}function bo(){return(bo=e((()=>{n(),L()})))()}function xo(){return(xo=e((()=>{n(),L()})))()}function So(){return(So=e((()=>{n(),L()})))()}function Co(){return(Co=e((()=>{n(),L()})))()}function wo(){return(wo=e((()=>{n(),L()})))()}function To(){return(To=e((()=>{n(),L()})))()}function Eo(){return(Eo=e((()=>{n(),L()})))()}function Do(){return(Do=e((()=>{n(),L()})))()}function Oo(){return(Oo=e((()=>{n(),L()})))()}function ko(){return(ko=e((()=>{n(),L()})))()}function Ao(){return(Ao=e((()=>{n(),L()})))()}function jo(){return(jo=e((()=>{n(),L()})))()}function Mo(){return(Mo=e((()=>{n(),L()})))()}function No(){return(No=e((()=>{n(),L()})))()}function Po(){return(Po=e((()=>{n(),L()})))()}function Fo(){return(Fo=e((()=>{n(),L()})))()}function Io(){return(Io=e((()=>{n(),L()})))()}function Lo(){return(Lo=e((()=>{n(),L()})))()}function Ro(){return(Ro=e((()=>{n(),L()})))()}function zo(){return(zo=e((()=>{n(),L()})))()}function Bo(){return(Bo=e((()=>{n(),L()})))()}function Vo(){return(Vo=e((()=>{n(),L()})))()}function Ho(){return(Ho=e((()=>{n(),L()})))()}function Uo(){return(Uo=e((()=>{n(),L()})))()}function Wo(){return(Wo=e((()=>{n(),L()})))()}function Go(){return(Go=e((()=>{n(),L()})))()}function Ko(){return(Ko=e((()=>{n(),L()})))()}function qo(){return(qo=e((()=>{n(),L()})))()}function Jo(){return(Jo=e((()=>{n(),L()})))()}function Yo(){return(Yo=e((()=>{n(),L()})))()}function Xo(){return(Xo=e((()=>{n(),L()})))()}function Zo(){return(Zo=e((()=>{n(),L()})))()}function Qo(){return(Qo=e((()=>{n(),L()})))()}function $o(){return($o=e((()=>{n(),L()})))()}function es(){return(es=e((()=>{n(),L()})))()}function ts(){return(ts=e((()=>{n(),L()})))()}function ns(){return(ns=e((()=>{n(),L()})))()}function rs(){return(rs=e((()=>{n(),L()})))()}function is(){return(is=e((()=>{n(),L()})))()}function as(){return(as=e((()=>{n(),L()})))()}function os(){return(os=e((()=>{n(),L()})))()}function ss(){return(ss=e((()=>{n(),L()})))()}function cs(){return(cs=e((()=>{n(),L()})))()}function ls(){return(ls=e((()=>{n(),L()})))()}function us(){return(us=e((()=>{n(),L()})))()}function ds(){return(ds=e((()=>{n(),L()})))()}function fs(){return(fs=e((()=>{n(),L()})))()}function ps(){return(ps=e((()=>{n(),L()})))()}function ms(){return(ms=e((()=>{n(),L()})))()}function hs(){return(hs=e((()=>{n(),L()})))()}function gs(){return(gs=e((()=>{n(),L()})))()}function _s(){return(_s=e((()=>{n(),L()})))()}function vs(){return(vs=e((()=>{n(),L()})))()}function ys(){return(ys=e((()=>{n(),L()})))()}function bs(){return(bs=e((()=>{n(),L()})))()}function xs(){return(xs=e((()=>{n(),L()})))()}function Ss(){return(Ss=e((()=>{n(),L()})))()}function Cs(){return(Cs=e((()=>{n(),L()})))()}function ws(){return(ws=e((()=>{n(),L()})))()}function Ts(){return(Ts=e((()=>{n(),L()})))()}function Es(){return(Es=e((()=>{n(),L()})))()}function Ds(){return(Ds=e((()=>{n(),L()})))()}function Os(){return(Os=e((()=>{n(),L()})))()}function ks(){return(ks=e((()=>{n(),L()})))()}function As(){return(As=e((()=>{n(),L()})))()}function js(){return(js=e((()=>{n(),L()})))()}function Ms(){return(Ms=e((()=>{n(),L()})))()}function Ns(){return(Ns=e((()=>{n(),L()})))()}function Ps(){return(Ps=e((()=>{n(),L()})))()}function Fs(){return(Fs=e((()=>{n(),L()})))()}function Is(){return(Is=e((()=>{n(),L()})))()}function Ls(){return(Ls=e((()=>{n(),L()})))()}function Rs(){return(Rs=e((()=>{n(),L()})))()}function zs(){return(zs=e((()=>{n(),L()})))()}function Bs(){return(Bs=e((()=>{n(),L()})))()}function Vs(){return(Vs=e((()=>{n(),L()})))()}function Hs(){return(Hs=e((()=>{n(),L()})))()}function Us(){return(Us=e((()=>{n(),L()})))()}function Ws(){return(Ws=e((()=>{n(),L()})))()}function Gs(){return(Gs=e((()=>{n(),L()})))()}function Ks(){return(Ks=e((()=>{n(),L()})))()}function qs(){return(qs=e((()=>{n(),L()})))()}function Js(){return(Js=e((()=>{n(),L()})))()}function Ys(){return(Ys=e((()=>{n(),L()})))()}function Xs(){return(Xs=e((()=>{n(),L()})))()}function Zs(){return(Zs=e((()=>{n(),L()})))()}function Qs(){return(Qs=e((()=>{n(),L()})))()}function $s(){return($s=e((()=>{n(),L()})))()}function ec(){return(ec=e((()=>{n(),L()})))()}function tc(){return(tc=e((()=>{n(),L()})))()}function nc(){return(nc=e((()=>{n(),L()})))()}function rc(){return(rc=e((()=>{n(),L()})))()}function ic(){return(ic=e((()=>{n(),L()})))()}function ac(){return(ac=e((()=>{n(),L()})))()}function oc(){return(oc=e((()=>{n(),L()})))()}function sc(){return(sc=e((()=>{n(),L()})))()}function cc(){return(cc=e((()=>{n(),L()})))()}function lc(){return(lc=e((()=>{n(),L()})))()}function uc(){return(uc=e((()=>{n(),L()})))()}function dc(){return(dc=e((()=>{n(),L()})))()}function fc(){return(fc=e((()=>{n(),L()})))()}function pc(){return(pc=e((()=>{n(),L()})))()}function mc(){return(mc=e((()=>{n(),L()})))()}function hc(){return(hc=e((()=>{n(),L()})))()}function gc(){return(gc=e((()=>{n(),L()})))()}function _c(){return(_c=e((()=>{n(),L()})))()}function vc(){return(vc=e((()=>{n(),L()})))()}function yc(){return(yc=e((()=>{n(),L()})))()}function bc(){return(bc=e((()=>{n(),L()})))()}function xc(){return(xc=e((()=>{n(),L()})))()}function Sc(){return(Sc=e((()=>{n(),L()})))()}function Cc(){return(Cc=e((()=>{n(),L()})))()}function wc(){return(wc=e((()=>{n(),L()})))()}function Tc(){return(Tc=e((()=>{n(),L()})))()}function Ec(){return(Ec=e((()=>{n(),L()})))()}function Dc(){return(Dc=e((()=>{n(),L()})))()}function Oc(){return(Oc=e((()=>{n(),L()})))()}function kc(){return(kc=e((()=>{n(),L()})))()}function Ac(){return(Ac=e((()=>{n(),L()})))()}function jc(){return(jc=e((()=>{n(),L()})))()}function Mc(){return(Mc=e((()=>{n(),L()})))()}function Nc(){return(Nc=e((()=>{n(),L()})))()}function Pc(){return(Pc=e((()=>{n(),L()})))()}function Fc(){return(Fc=e((()=>{n(),L()})))()}function Ic(){return(Ic=e((()=>{n(),L()})))()}function Lc(){return(Lc=e((()=>{n(),L()})))()}function Rc(){return(Rc=e((()=>{n(),L()})))()}function zc(){return(zc=e((()=>{n(),L()})))()}function Bc(){return(Bc=e((()=>{n(),L()})))()}function Vc(){return(Vc=e((()=>{n(),L()})))()}function Hc(){return(Hc=e((()=>{n(),L()})))()}function Uc(){return(Uc=e((()=>{n(),L()})))()}function Wc(){return(Wc=e((()=>{n(),L()})))()}function Gc(){return(Gc=e((()=>{n(),L()})))()}function Kc(){return(Kc=e((()=>{n(),L()})))()}function qc(){return(qc=e((()=>{n(),L()})))()}function Jc(){return(Jc=e((()=>{n(),L()})))()}function Yc(){return(Yc=e((()=>{n(),L()})))()}function Xc(){return(Xc=e((()=>{n(),L()})))()}function Zc(){return(Zc=e((()=>{n(),L()})))()}function Qc(){return(Qc=e((()=>{n(),L()})))()}function $c(){return($c=e((()=>{n(),L()})))()}function el(){return(el=e((()=>{n(),L()})))()}function tl(){return(tl=e((()=>{n(),L()})))()}function nl(){return(nl=e((()=>{n(),L()})))()}function rl(){return(rl=e((()=>{n(),L()})))()}function il(){return(il=e((()=>{n(),L()})))()}function al(){return(al=e((()=>{n(),L()})))()}function ol(){return(ol=e((()=>{n(),L()})))()}function sl(){return(sl=e((()=>{n(),L()})))()}function cl(){return(cl=e((()=>{n(),L()})))()}function ll(){return(ll=e((()=>{n(),L()})))()}function ul(){return(ul=e((()=>{n(),L()})))()}function dl(){return(dl=e((()=>{n(),L()})))()}function fl(){return(fl=e((()=>{n(),L()})))()}function pl(){return(pl=e((()=>{n(),L()})))()}function ml(){return(ml=e((()=>{n(),L()})))()}function hl(){return(hl=e((()=>{n(),L()})))()}function gl(){return(gl=e((()=>{n(),L()})))()}function _l(){return(_l=e((()=>{n(),L()})))()}function vl(){return(vl=e((()=>{n(),L()})))()}function yl(){return(yl=e((()=>{n(),L()})))()}function bl(){return(bl=e((()=>{n(),L()})))()}function xl(){return(xl=e((()=>{n(),L()})))()}function Sl(){return(Sl=e((()=>{n(),L()})))()}function Cl(){return(Cl=e((()=>{n(),L()})))()}function wl(){return(wl=e((()=>{n(),L()})))()}function Tl(){return(Tl=e((()=>{n(),L()})))()}function El(){return(El=e((()=>{n(),L()})))()}function Dl(){return(Dl=e((()=>{n(),L()})))()}function Ol(){return(Ol=e((()=>{n(),L()})))()}function kl(){return(kl=e((()=>{n(),L()})))()}function Al(){return(Al=e((()=>{n(),L()})))()}function jl(){return(jl=e((()=>{n(),L()})))()}function Ml(){return(Ml=e((()=>{n(),L()})))()}function Nl(){return(Nl=e((()=>{n(),L()})))()}function Pl(){return(Pl=e((()=>{n(),L()})))()}function Fl(){return(Fl=e((()=>{n(),L()})))()}function Il(){return(Il=e((()=>{n(),L()})))()}function Ll(){return(Ll=e((()=>{n(),L()})))()}function Rl(){return(Rl=e((()=>{n(),L()})))()}function zl(){return(zl=e((()=>{n(),L()})))()}function Bl(){return(Bl=e((()=>{n(),L()})))()}function Vl(){return(Vl=e((()=>{n(),L()})))()}function Hl(){return(Hl=e((()=>{n(),L()})))()}function Ul(){return(Ul=e((()=>{n(),L()})))()}function Wl(){return(Wl=e((()=>{n(),L()})))()}function Gl(){return(Gl=e((()=>{n(),L()})))()}function Kl(){return(Kl=e((()=>{n(),L()})))()}function ql(){return(ql=e((()=>{n(),L()})))()}function Jl(){return(Jl=e((()=>{n(),L()})))()}function Yl(){return(Yl=e((()=>{n(),L()})))()}function Xl(){return(Xl=e((()=>{n(),L()})))()}function Zl(){return(Zl=e((()=>{n(),L()})))()}function Ql(){return(Ql=e((()=>{n(),L()})))()}function $l(){return($l=e((()=>{n(),L()})))()}function eu(){return(eu=e((()=>{n(),L()})))()}function tu(){return(tu=e((()=>{n(),L()})))()}function nu(){return(nu=e((()=>{n(),L()})))()}function ru(){return(ru=e((()=>{n(),L()})))()}function iu(){return(iu=e((()=>{n(),L()})))()}function au(){return(au=e((()=>{n(),L()})))()}function ou(){return(ou=e((()=>{n(),L()})))()}function su(){return(su=e((()=>{n(),L()})))()}function cu(){return(cu=e((()=>{n(),L()})))()}function lu(){return(lu=e((()=>{n(),L()})))()}function uu(){return(uu=e((()=>{n(),L()})))()}function du(){return(du=e((()=>{n(),L()})))()}function fu(){return(fu=e((()=>{n(),L()})))()}function pu(){return(pu=e((()=>{n(),L()})))()}function mu(){return(mu=e((()=>{n(),L()})))()}function hu(){return(hu=e((()=>{n(),L()})))()}function gu(){return(gu=e((()=>{n(),L()})))()}function _u(){return(_u=e((()=>{n(),L()})))()}function vu(){return(vu=e((()=>{n(),L()})))()}function yu(){return(yu=e((()=>{n(),L()})))()}function bu(){return(bu=e((()=>{n(),L()})))()}function xu(){return(xu=e((()=>{n(),L()})))()}function Su(){return(Su=e((()=>{n(),L()})))()}function Cu(){return(Cu=e((()=>{n(),L()})))()}function wu(){return(wu=e((()=>{n(),L()})))()}function Tu(){return(Tu=e((()=>{n(),L()})))()}function Eu(){return(Eu=e((()=>{n(),L()})))()}function Du(){return(Du=e((()=>{n(),L()})))()}function Ou(){return(Ou=e((()=>{n(),L()})))()}function ku(){return(ku=e((()=>{n(),L()})))()}function Au(){return(Au=e((()=>{n(),L()})))()}function ju(){return(ju=e((()=>{n(),L()})))()}function Mu(){return(Mu=e((()=>{n(),L()})))()}function Nu(){return(Nu=e((()=>{n(),L()})))()}function Pu(){return(Pu=e((()=>{n(),L()})))()}function Fu(){return(Fu=e((()=>{n(),L()})))()}function Iu(){return(Iu=e((()=>{n(),L()})))()}function Lu(){return(Lu=e((()=>{n(),L()})))()}function Ru(){return(Ru=e((()=>{n(),L()})))()}function zu(){return(zu=e((()=>{n(),L()})))()}function Bu(){return(Bu=e((()=>{n(),L()})))()}function Vu(){return(Vu=e((()=>{n(),L()})))()}function Hu(){return(Hu=e((()=>{n(),L()})))()}function Uu(){return(Uu=e((()=>{n(),L()})))()}function Wu(){return(Wu=e((()=>{n(),L()})))()}function Gu(){return(Gu=e((()=>{n(),L()})))()}function Ku(){return(Ku=e((()=>{n(),L()})))()}function qu(){return(qu=e((()=>{n(),L()})))()}function Ju(){return(Ju=e((()=>{n(),L()})))()}function Yu(){return(Yu=e((()=>{n(),L()})))()}function Xu(){return(Xu=e((()=>{n(),L()})))()}function Zu(){return(Zu=e((()=>{n(),L()})))()}function Qu(){return(Qu=e((()=>{n(),L()})))()}function $u(){return($u=e((()=>{n(),L()})))()}function ed(){return(ed=e((()=>{n(),L()})))()}function td(){return(td=e((()=>{n(),L()})))()}function nd(){return(nd=e((()=>{n(),L()})))()}function rd(){return(rd=e((()=>{n(),L()})))()}function id(){return(id=e((()=>{n(),L()})))()}function ad(){return(ad=e((()=>{n(),L()})))()}function od(){return(od=e((()=>{n(),L()})))()}function sd(){return(sd=e((()=>{n(),L()})))()}function cd(){return(cd=e((()=>{n(),L()})))()}function ld(){return(ld=e((()=>{n(),L()})))()}function ud(){return(ud=e((()=>{n(),L()})))()}function dd(){return(dd=e((()=>{n(),L()})))()}function fd(){return(fd=e((()=>{n(),L()})))()}function pd(){return(pd=e((()=>{n(),L()})))()}function md(){return(md=e((()=>{n(),L()})))()}function hd(){return(hd=e((()=>{n(),L()})))()}function gd(){return(gd=e((()=>{n(),L()})))()}function _d(){return(_d=e((()=>{n(),L()})))()}function vd(){return(vd=e((()=>{n(),L()})))()}function yd(){return(yd=e((()=>{n(),L()})))()}var bd;function xd(){return(xd=e((()=>{n(),L(),bd=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>c`
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
`})))()}function Sd(){return(Sd=e((()=>{n(),L()})))()}function Cd(){return(Cd=e((()=>{n(),L()})))()}function wd(){return(wd=e((()=>{n(),L()})))()}function Td(){return(Td=e((()=>{n(),L()})))()}function Ed(){return(Ed=e((()=>{n(),L()})))()}function Dd(){return(Dd=e((()=>{n(),L()})))()}function Od(){return(Od=e((()=>{n(),L()})))()}function kd(){return(kd=e((()=>{n(),L()})))()}function Ad(){return(Ad=e((()=>{n(),L()})))()}function jd(){return(jd=e((()=>{n(),L()})))()}function Md(){return(Md=e((()=>{n(),L()})))()}function Nd(){return(Nd=e((()=>{n(),L()})))()}function Pd(){return(Pd=e((()=>{n(),L()})))()}function Fd(){return(Fd=e((()=>{n(),L()})))()}function Id(){return(Id=e((()=>{n(),L()})))()}function Ld(){return(Ld=e((()=>{n(),L()})))()}function Rd(){return(Rd=e((()=>{n(),L()})))()}function zd(){return(zd=e((()=>{n(),L()})))()}function Bd(){return(Bd=e((()=>{n(),L()})))()}function Vd(){return(Vd=e((()=>{n(),L()})))()}function Hd(){return(Hd=e((()=>{n(),L()})))()}function Ud(){return(Ud=e((()=>{n(),L()})))()}function Wd(){return(Wd=e((()=>{n(),L()})))()}function Gd(){return(Gd=e((()=>{n(),L()})))()}function Kd(){return(Kd=e((()=>{n(),L()})))()}function qd(){return(qd=e((()=>{n(),L()})))()}function Jd(){return(Jd=e((()=>{n(),L()})))()}function Yd(){return(Yd=e((()=>{n(),L()})))()}function Xd(){return(Xd=e((()=>{n(),L()})))()}function Zd(){return(Zd=e((()=>{n(),L()})))()}function Qd(){return(Qd=e((()=>{n(),L()})))()}function $d(){return($d=e((()=>{n(),L()})))()}function ef(){return(ef=e((()=>{n(),L()})))()}function tf(){return(tf=e((()=>{n(),L()})))()}function nf(){return(nf=e((()=>{n(),L()})))()}function rf(){return(rf=e((()=>{n(),L()})))()}function af(){return(af=e((()=>{n(),L()})))()}function of(){return(of=e((()=>{n(),L()})))()}function sf(){return(sf=e((()=>{n(),L()})))()}function cf(){return(cf=e((()=>{n(),L()})))()}function lf(){return(lf=e((()=>{n(),L()})))()}function uf(){return(uf=e((()=>{n(),L()})))()}function df(){return(df=e((()=>{n(),L()})))()}function ff(){return(ff=e((()=>{n(),L()})))()}function pf(){return(pf=e((()=>{n(),L()})))()}function mf(){return(mf=e((()=>{n(),L()})))()}function hf(){return(hf=e((()=>{n(),L()})))()}function gf(){return(gf=e((()=>{n(),L()})))()}function _f(){return(_f=e((()=>{n(),L()})))()}function vf(){return(vf=e((()=>{n(),L()})))()}function yf(){return(yf=e((()=>{n(),L()})))()}function bf(){return(bf=e((()=>{n(),L()})))()}function xf(){return(xf=e((()=>{n(),L()})))()}function Sf(){return(Sf=e((()=>{n(),L()})))()}function Cf(){return(Cf=e((()=>{n(),L()})))()}function wf(){return(wf=e((()=>{n(),L()})))()}function Tf(){return(Tf=e((()=>{n(),L()})))()}function Ef(){return(Ef=e((()=>{n(),L()})))()}function Df(){return(Df=e((()=>{n(),L()})))()}function Of(){return(Of=e((()=>{n(),L()})))()}function kf(){return(kf=e((()=>{n(),L()})))()}function Af(){return(Af=e((()=>{n(),L()})))()}function jf(){return(jf=e((()=>{n(),L()})))()}function Mf(){return(Mf=e((()=>{n(),L()})))()}function Nf(){return(Nf=e((()=>{n(),L()})))()}function Pf(){return(Pf=e((()=>{n(),L()})))()}function Ff(){return(Ff=e((()=>{n(),L()})))()}function If(){return(If=e((()=>{n(),L()})))()}function Lf(){return(Lf=e((()=>{n(),L()})))()}function Rf(){return(Rf=e((()=>{n(),L()})))()}function zf(){return(zf=e((()=>{n(),L()})))()}function Bf(){return(Bf=e((()=>{n(),L()})))()}function Vf(){return(Vf=e((()=>{n(),L()})))()}function Hf(){return(Hf=e((()=>{n(),L()})))()}function Uf(){return(Uf=e((()=>{n(),L()})))()}function Wf(){return(Wf=e((()=>{n(),L()})))()}function Gf(){return(Gf=e((()=>{n(),L()})))()}function Kf(){return(Kf=e((()=>{n(),L()})))()}function qf(){return(qf=e((()=>{n(),L()})))()}function Jf(){return(Jf=e((()=>{n(),L()})))()}function Yf(){return(Yf=e((()=>{n(),L()})))()}function Xf(){return(Xf=e((()=>{n(),L()})))()}function Zf(){return(Zf=e((()=>{n(),L()})))()}function Qf(){return(Qf=e((()=>{n(),L()})))()}function $f(){return($f=e((()=>{n(),L()})))()}function ep(){return(ep=e((()=>{n(),L()})))()}function tp(){return(tp=e((()=>{n(),L()})))()}function np(){return(np=e((()=>{n(),L()})))()}function rp(){return(rp=e((()=>{n(),L()})))()}function ip(){return(ip=e((()=>{n(),L()})))()}function ap(){return(ap=e((()=>{n(),L()})))()}function op(){return(op=e((()=>{n(),L()})))()}function sp(){return(sp=e((()=>{n(),L()})))()}function cp(){return(cp=e((()=>{n(),L()})))()}function lp(){return(lp=e((()=>{n(),L()})))()}function up(){return(up=e((()=>{n(),L()})))()}function dp(){return(dp=e((()=>{n(),L()})))()}function fp(){return(fp=e((()=>{n(),L()})))()}function pp(){return(pp=e((()=>{n(),L()})))()}function mp(){return(mp=e((()=>{n(),L()})))()}function hp(){return(hp=e((()=>{n(),L()})))()}function gp(){return(gp=e((()=>{n(),L()})))()}function _p(){return(_p=e((()=>{n(),L()})))()}function vp(){return(vp=e((()=>{n(),L()})))()}function yp(){return(yp=e((()=>{n(),L()})))()}function bp(){return(bp=e((()=>{n(),L()})))()}function xp(){return(xp=e((()=>{n(),L()})))()}function Sp(){return(Sp=e((()=>{n(),L()})))()}function Cp(){return(Cp=e((()=>{n(),L()})))()}function wp(){return(wp=e((()=>{n(),L()})))()}function Tp(){return(Tp=e((()=>{n(),L()})))()}function Ep(){return(Ep=e((()=>{n(),L()})))()}function Dp(){return(Dp=e((()=>{n(),L()})))()}function Op(){return(Op=e((()=>{n(),L()})))()}function kp(){return(kp=e((()=>{n(),L()})))()}function Ap(){return(Ap=e((()=>{n(),L()})))()}function jp(){return(jp=e((()=>{n(),L()})))()}function Mp(){return(Mp=e((()=>{n(),L()})))()}function Np(){return(Np=e((()=>{n(),L()})))()}function Pp(){return(Pp=e((()=>{n(),L()})))()}function Fp(){return(Fp=e((()=>{n(),L()})))()}function Ip(){return(Ip=e((()=>{n(),L()})))()}function Lp(){return(Lp=e((()=>{n(),L()})))()}function Rp(){return(Rp=e((()=>{n(),L()})))()}function zp(){return(zp=e((()=>{n(),L()})))()}function Bp(){return(Bp=e((()=>{n(),L()})))()}function Vp(){return(Vp=e((()=>{n(),L()})))()}function Hp(){return(Hp=e((()=>{n(),L()})))()}function Up(){return(Up=e((()=>{n(),L()})))()}function Wp(){return(Wp=e((()=>{n(),L()})))()}function Gp(){return(Gp=e((()=>{n(),L()})))()}function Kp(){return(Kp=e((()=>{n(),L()})))()}function qp(){return(qp=e((()=>{n(),L()})))()}function Jp(){return(Jp=e((()=>{n(),L()})))()}function Yp(){return(Yp=e((()=>{n(),L()})))()}function Xp(){return(Xp=e((()=>{n(),L()})))()}function Zp(){return(Zp=e((()=>{n(),L()})))()}function Qp(){return(Qp=e((()=>{n(),L()})))()}function $p(){return($p=e((()=>{n(),L()})))()}function em(){return(em=e((()=>{n(),L()})))()}function tm(){return(tm=e((()=>{n(),L()})))()}function nm(){return(nm=e((()=>{n(),L()})))()}function rm(){return(rm=e((()=>{n(),L()})))()}function im(){return(im=e((()=>{n(),L()})))()}function am(){return(am=e((()=>{n(),L()})))()}function om(){return(om=e((()=>{n(),L()})))()}function sm(){return(sm=e((()=>{n(),L()})))()}function cm(){return(cm=e((()=>{n(),L()})))()}function lm(){return(lm=e((()=>{n(),L()})))()}function um(){return(um=e((()=>{n(),L()})))()}function dm(){return(dm=e((()=>{n(),L()})))()}function fm(){return(fm=e((()=>{n(),L()})))()}function pm(){return(pm=e((()=>{n(),L()})))()}function mm(){return(mm=e((()=>{n(),L()})))()}function hm(){return(hm=e((()=>{n(),L()})))()}function gm(){return(gm=e((()=>{n(),L()})))()}function _m(){return(_m=e((()=>{n(),L()})))()}function vm(){return(vm=e((()=>{n(),L()})))()}function ym(){return(ym=e((()=>{n(),L()})))()}function bm(){return(bm=e((()=>{n(),L()})))()}function xm(){return(xm=e((()=>{n(),L()})))()}function Sm(){return(Sm=e((()=>{n(),L()})))()}function Cm(){return(Cm=e((()=>{n(),L()})))()}function wm(){return(wm=e((()=>{n(),L()})))()}function Tm(){return(Tm=e((()=>{n(),L()})))()}function Em(){return(Em=e((()=>{n(),L()})))()}function Dm(){return(Dm=e((()=>{n(),L()})))()}function Om(){return(Om=e((()=>{n(),L()})))()}function km(){return(km=e((()=>{n(),L()})))()}function Am(){return(Am=e((()=>{n(),L()})))()}function jm(){return(jm=e((()=>{n(),L()})))()}function Mm(){return(Mm=e((()=>{n(),L()})))()}function Nm(){return(Nm=e((()=>{n(),L()})))()}function Pm(){return(Pm=e((()=>{n(),L()})))()}function Fm(){return(Fm=e((()=>{n(),L()})))()}function Im(){return(Im=e((()=>{n(),L()})))()}function Lm(){return(Lm=e((()=>{n(),L()})))()}function Rm(){return(Rm=e((()=>{n(),L()})))()}function zm(){return(zm=e((()=>{n(),L()})))()}function Bm(){return(Bm=e((()=>{n(),L()})))()}function Vm(){return(Vm=e((()=>{n(),L()})))()}function Hm(){return(Hm=e((()=>{n(),L()})))()}function Um(){return(Um=e((()=>{n(),L()})))()}function Wm(){return(Wm=e((()=>{n(),L()})))()}function Gm(){return(Gm=e((()=>{n(),L()})))()}function Km(){return(Km=e((()=>{n(),L()})))()}function qm(){return(qm=e((()=>{n(),L()})))()}function Jm(){return(Jm=e((()=>{n(),L()})))()}function Ym(){return(Ym=e((()=>{n(),L()})))()}function Xm(){return(Xm=e((()=>{n(),L()})))()}function Zm(){return(Zm=e((()=>{n(),L()})))()}function Qm(){return(Qm=e((()=>{n(),L()})))()}function $m(){return($m=e((()=>{n(),L()})))()}function eh(){return(eh=e((()=>{n(),L()})))()}function th(){return(th=e((()=>{n(),L()})))()}function nh(){return(nh=e((()=>{n(),L()})))()}function rh(){return(rh=e((()=>{n(),L()})))()}function ih(){return(ih=e((()=>{n(),L()})))()}function ah(){return(ah=e((()=>{n(),L()})))()}function oh(){return(oh=e((()=>{n(),L()})))()}function sh(){return(sh=e((()=>{n(),L()})))()}function ch(){return(ch=e((()=>{n(),L()})))()}function lh(){return(lh=e((()=>{n(),L()})))()}function uh(){return(uh=e((()=>{n(),L()})))()}function dh(){return(dh=e((()=>{n(),L()})))()}function fh(){return(fh=e((()=>{n(),L()})))()}function ph(){return(ph=e((()=>{n(),L()})))()}function mh(){return(mh=e((()=>{n(),L()})))()}function hh(){return(hh=e((()=>{n(),L()})))()}function gh(){return(gh=e((()=>{n(),L()})))()}function _h(){return(_h=e((()=>{n(),L()})))()}function vh(){return(vh=e((()=>{n(),L()})))()}function yh(){return(yh=e((()=>{n(),L()})))()}function bh(){return(bh=e((()=>{n(),L()})))()}function xh(){return(xh=e((()=>{n(),L()})))()}function Sh(){return(Sh=e((()=>{n(),L()})))()}function Ch(){return(Ch=e((()=>{n(),L()})))()}function wh(){return(wh=e((()=>{n(),L()})))()}function Th(){return(Th=e((()=>{n(),L()})))()}function Eh(){return(Eh=e((()=>{n(),L()})))()}function Dh(){return(Dh=e((()=>{n(),L()})))()}function Oh(){return(Oh=e((()=>{n(),L()})))()}function kh(){return(kh=e((()=>{n(),L()})))()}function Ah(){return(Ah=e((()=>{n(),L()})))()}function jh(){return(jh=e((()=>{n(),L()})))()}function Mh(){return(Mh=e((()=>{n(),L()})))()}function Nh(){return(Nh=e((()=>{n(),L()})))()}function Ph(){return(Ph=e((()=>{n(),L()})))()}function Fh(){return(Fh=e((()=>{n(),L()})))()}function Ih(){return(Ih=e((()=>{n(),L()})))()}function Lh(){return(Lh=e((()=>{n(),L()})))()}function Rh(){return(Rh=e((()=>{n(),L()})))()}function zh(){return(zh=e((()=>{n(),L()})))()}function Bh(){return(Bh=e((()=>{n(),L()})))()}function Vh(){return(Vh=e((()=>{n(),L()})))()}function Hh(){return(Hh=e((()=>{n(),L()})))()}function Uh(){return(Uh=e((()=>{n(),L()})))()}function Wh(){return(Wh=e((()=>{n(),L()})))()}function Gh(){return(Gh=e((()=>{n(),L()})))()}function Kh(){return(Kh=e((()=>{n(),L()})))()}function qh(){return(qh=e((()=>{n(),L()})))()}function Jh(){return(Jh=e((()=>{n(),L()})))()}function Yh(){return(Yh=e((()=>{n(),L()})))()}function Xh(){return(Xh=e((()=>{n(),L()})))()}function Zh(){return(Zh=e((()=>{n(),L()})))()}function Qh(){return(Qh=e((()=>{n(),L()})))()}function $h(){return($h=e((()=>{n(),L()})))()}function eg(){return(eg=e((()=>{n(),L()})))()}function tg(){return(tg=e((()=>{n(),L()})))()}function ng(){return(ng=e((()=>{n(),L()})))()}function rg(){return(rg=e((()=>{n(),L()})))()}function ig(){return(ig=e((()=>{n(),L()})))()}function ag(){return(ag=e((()=>{n(),L()})))()}function og(){return(og=e((()=>{n(),L()})))()}function sg(){return(sg=e((()=>{n(),L()})))()}function cg(){return(cg=e((()=>{n(),L()})))()}function lg(){return(lg=e((()=>{n(),L()})))()}function ug(){return(ug=e((()=>{n(),L()})))()}function dg(){return(dg=e((()=>{n(),L()})))()}function fg(){return(fg=e((()=>{n(),L()})))()}function pg(){return(pg=e((()=>{n(),L()})))()}function mg(){return(mg=e((()=>{n(),L()})))()}function hg(){return(hg=e((()=>{n(),L()})))()}function gg(){return(gg=e((()=>{n(),L()})))()}function _g(){return(_g=e((()=>{n(),L()})))()}function vg(){return(vg=e((()=>{n(),L()})))()}function yg(){return(yg=e((()=>{n(),L()})))()}function bg(){return(bg=e((()=>{n(),L()})))()}function xg(){return(xg=e((()=>{n(),L()})))()}function Sg(){return(Sg=e((()=>{n(),L()})))()}function Cg(){return(Cg=e((()=>{n(),L()})))()}function wg(){return(wg=e((()=>{n(),L()})))()}function Tg(){return(Tg=e((()=>{n(),L()})))()}function Eg(){return(Eg=e((()=>{n(),L()})))()}function Dg(){return(Dg=e((()=>{n(),L()})))()}function Og(){return(Og=e((()=>{n(),L()})))()}function kg(){return(kg=e((()=>{n(),L()})))()}function Ag(){return(Ag=e((()=>{n(),L()})))()}function jg(){return(jg=e((()=>{n(),L()})))()}function Mg(){return(Mg=e((()=>{n(),L()})))()}function Ng(){return(Ng=e((()=>{n(),L()})))()}function Pg(){return(Pg=e((()=>{n(),L()})))()}function Fg(){return(Fg=e((()=>{n(),L()})))()}function Ig(){return(Ig=e((()=>{n(),L()})))()}function Lg(){return(Lg=e((()=>{n(),L()})))()}function Rg(){return(Rg=e((()=>{n(),L()})))()}function zg(){return(zg=e((()=>{n(),L()})))()}function Bg(){return(Bg=e((()=>{n(),L()})))()}function Vg(){return(Vg=e((()=>{n(),L()})))()}function Hg(){return(Hg=e((()=>{n(),L()})))()}function Ug(){return(Ug=e((()=>{n(),L()})))()}function Wg(){return(Wg=e((()=>{n(),L()})))()}function Gg(){return(Gg=e((()=>{n(),L()})))()}function Kg(){return(Kg=e((()=>{n(),L()})))()}function qg(){return(qg=e((()=>{n(),L()})))()}function Jg(){return(Jg=e((()=>{n(),L()})))()}function Yg(){return(Yg=e((()=>{n(),L()})))()}function Xg(){return(Xg=e((()=>{n(),L()})))()}function Zg(){return(Zg=e((()=>{n(),L()})))()}function Qg(){return(Qg=e((()=>{n(),L()})))()}function $g(){return($g=e((()=>{n(),L()})))()}function e_(){return(e_=e((()=>{n(),L()})))()}function t_(){return(t_=e((()=>{n(),L()})))()}function n_(){return(n_=e((()=>{n(),L()})))()}function r_(){return(r_=e((()=>{n(),L()})))()}function i_(){return(i_=e((()=>{n(),L()})))()}function a_(){return(a_=e((()=>{n(),L()})))()}function o_(){return(o_=e((()=>{n(),L()})))()}function s_(){return(s_=e((()=>{n(),L()})))()}function c_(){return(c_=e((()=>{n(),L()})))()}function l_(){return(l_=e((()=>{n(),L()})))()}function u_(){return(u_=e((()=>{n(),L()})))()}function d_(){return(d_=e((()=>{n(),L()})))()}function f_(){return(f_=e((()=>{n(),L()})))()}function p_(){return(p_=e((()=>{n(),L()})))()}function m_(){return(m_=e((()=>{n(),L()})))()}function h_(){return(h_=e((()=>{n(),L()})))()}function g_(){return(g_=e((()=>{n(),L()})))()}function __(){return(__=e((()=>{n(),L()})))()}function v_(){return(v_=e((()=>{n(),L()})))()}function y_(){return(y_=e((()=>{n(),L()})))()}function b_(){return(b_=e((()=>{n(),L()})))()}function x_(){return(x_=e((()=>{n(),L()})))()}function S_(){return(S_=e((()=>{n(),L()})))()}function C_(){return(C_=e((()=>{n(),L()})))()}function w_(){return(w_=e((()=>{n(),L()})))()}function T_(){return(T_=e((()=>{n(),L()})))()}function E_(){return(E_=e((()=>{n(),L()})))()}function D_(){return(D_=e((()=>{n(),L()})))()}function O_(){return(O_=e((()=>{n(),L()})))()}function k_(){return(k_=e((()=>{n(),L()})))()}function A_(){return(A_=e((()=>{n(),L()})))()}function j_(){return(j_=e((()=>{n(),L()})))()}function M_(){return(M_=e((()=>{n(),L()})))()}function N_(){return(N_=e((()=>{n(),L()})))()}function P_(){return(P_=e((()=>{n(),L()})))()}function F_(){return(F_=e((()=>{n(),L()})))()}function I_(){return(I_=e((()=>{n(),L()})))()}function L_(){return(L_=e((()=>{n(),L()})))()}function R_(){return(R_=e((()=>{n(),L()})))()}function z_(){return(z_=e((()=>{n(),L()})))()}function B_(){return(B_=e((()=>{n(),L()})))()}function V_(){return(V_=e((()=>{n(),L()})))()}function H_(){return(H_=e((()=>{n(),L()})))()}function U_(){return(U_=e((()=>{n(),L()})))()}function W_(){return(W_=e((()=>{n(),L()})))()}function G_(){return(G_=e((()=>{n(),L()})))()}function K_(){return(K_=e((()=>{n(),L()})))()}function q_(){return(q_=e((()=>{n(),L()})))()}function J_(){return(J_=e((()=>{n(),L()})))()}function Y_(){return(Y_=e((()=>{n(),L()})))()}function X_(){return(X_=e((()=>{n(),L()})))()}function Z_(){return(Z_=e((()=>{n(),L()})))()}function Q_(){return(Q_=e((()=>{n(),L()})))()}function $_(){return($_=e((()=>{n(),L()})))()}function ev(){return(ev=e((()=>{n(),L()})))()}function tv(){return(tv=e((()=>{n(),L()})))()}function nv(){return(nv=e((()=>{n(),L()})))()}function rv(){return(rv=e((()=>{n(),L()})))()}function iv(){return(iv=e((()=>{n(),L()})))()}function av(){return(av=e((()=>{n(),L()})))()}function ov(){return(ov=e((()=>{n(),L()})))()}function sv(){return(sv=e((()=>{n(),L()})))()}function cv(){return(cv=e((()=>{n(),L()})))()}function lv(){return(lv=e((()=>{n(),L()})))()}function uv(){return(uv=e((()=>{n(),L()})))()}function dv(){return(dv=e((()=>{n(),L()})))()}function fv(){return(fv=e((()=>{n(),L()})))()}function pv(){return(pv=e((()=>{n(),L()})))()}function mv(){return(mv=e((()=>{n(),L()})))()}function hv(){return(hv=e((()=>{n(),L()})))()}function gv(){return(gv=e((()=>{n(),L()})))()}function _v(){return(_v=e((()=>{n(),L()})))()}function vv(){return(vv=e((()=>{n(),L()})))()}function yv(){return(yv=e((()=>{n(),L()})))()}function bv(){return(bv=e((()=>{n(),L()})))()}function xv(){return(xv=e((()=>{n(),L()})))()}function Sv(){return(Sv=e((()=>{n(),L()})))()}function Cv(){return(Cv=e((()=>{n(),L()})))()}function wv(){return(wv=e((()=>{n(),L()})))()}function Tv(){return(Tv=e((()=>{n(),L()})))()}function Ev(){return(Ev=e((()=>{n(),L()})))()}function Dv(){return(Dv=e((()=>{n(),L()})))()}function Ov(){return(Ov=e((()=>{n(),L()})))()}function kv(){return(kv=e((()=>{n(),L()})))()}function Av(){return(Av=e((()=>{n(),L()})))()}function jv(){return(jv=e((()=>{n(),L()})))()}function Mv(){return(Mv=e((()=>{n(),L()})))()}function Nv(){return(Nv=e((()=>{n(),L()})))()}function Pv(){return(Pv=e((()=>{n(),L()})))()}function Fv(){return(Fv=e((()=>{n(),L()})))()}function Iv(){return(Iv=e((()=>{n(),L()})))()}function Lv(){return(Lv=e((()=>{n(),L()})))()}function Rv(){return(Rv=e((()=>{n(),L()})))()}function zv(){return(zv=e((()=>{n(),L()})))()}function Bv(){return(Bv=e((()=>{n(),L()})))()}function Vv(){return(Vv=e((()=>{n(),L()})))()}function Hv(){return(Hv=e((()=>{n(),L()})))()}function Uv(){return(Uv=e((()=>{n(),L()})))()}function Wv(){return(Wv=e((()=>{n(),L()})))()}function Gv(){return(Gv=e((()=>{n(),L()})))()}function Kv(){return(Kv=e((()=>{n(),L()})))()}function qv(){return(qv=e((()=>{n(),L()})))()}function Jv(){return(Jv=e((()=>{n(),L()})))()}function Yv(){return(Yv=e((()=>{n(),L()})))()}function Xv(){return(Xv=e((()=>{n(),L()})))()}function Zv(){return(Zv=e((()=>{n(),L()})))()}function Qv(){return(Qv=e((()=>{n(),L()})))()}function $v(){return($v=e((()=>{n(),L()})))()}function ey(){return(ey=e((()=>{n(),L()})))()}function ty(){return(ty=e((()=>{n(),L()})))()}function ny(){return(ny=e((()=>{n(),L()})))()}function ry(){return(ry=e((()=>{n(),L()})))()}function iy(){return(iy=e((()=>{n(),L()})))()}function ay(){return(ay=e((()=>{n(),L()})))()}function oy(){return(oy=e((()=>{n(),L()})))()}function sy(){return(sy=e((()=>{n(),L()})))()}function cy(){return(cy=e((()=>{n(),L()})))()}function ly(){return(ly=e((()=>{n(),L()})))()}function uy(){return(uy=e((()=>{n(),L()})))()}function dy(){return(dy=e((()=>{n(),L()})))()}function fy(){return(fy=e((()=>{n(),L()})))()}function py(){return(py=e((()=>{n(),L()})))()}function my(){return(my=e((()=>{n(),L()})))()}function hy(){return(hy=e((()=>{n(),L()})))()}function gy(){return(gy=e((()=>{n(),L()})))()}function _y(){return(_y=e((()=>{n(),L()})))()}function vy(){return(vy=e((()=>{n(),L()})))()}function yy(){return(yy=e((()=>{n(),L()})))()}function by(){return(by=e((()=>{n(),L()})))()}function xy(){return(xy=e((()=>{n(),L()})))()}function Sy(){return(Sy=e((()=>{n(),L()})))()}function Cy(){return(Cy=e((()=>{n(),L()})))()}function wy(){return(wy=e((()=>{n(),L()})))()}function Ty(){return(Ty=e((()=>{n(),L()})))()}function Ey(){return(Ey=e((()=>{n(),L()})))()}function Dy(){return(Dy=e((()=>{n(),L()})))()}function Oy(){return(Oy=e((()=>{n(),L()})))()}function ky(){return(ky=e((()=>{n(),L()})))()}function Ay(){return(Ay=e((()=>{n(),L()})))()}function jy(){return(jy=e((()=>{n(),L()})))()}function My(){return(My=e((()=>{n(),L()})))()}function Ny(){return(Ny=e((()=>{n(),L()})))()}function Py(){return(Py=e((()=>{n(),L()})))()}function Fy(){return(Fy=e((()=>{n(),L()})))()}function Iy(){return(Iy=e((()=>{n(),L()})))()}function Ly(){return(Ly=e((()=>{n(),L()})))()}function Ry(){return(Ry=e((()=>{n(),L()})))()}function zy(){return(zy=e((()=>{n(),L()})))()}function By(){return(By=e((()=>{n(),L()})))()}function Vy(){return(Vy=e((()=>{n(),L()})))()}function Hy(){return(Hy=e((()=>{n(),L()})))()}function Uy(){return(Uy=e((()=>{n(),L()})))()}function Wy(){return(Wy=e((()=>{n(),L()})))()}function Gy(){return(Gy=e((()=>{n(),L()})))()}function Ky(){return(Ky=e((()=>{n(),L()})))()}function qy(){return(qy=e((()=>{n(),L()})))()}function Jy(){return(Jy=e((()=>{n(),L()})))()}function Yy(){return(Yy=e((()=>{n(),L()})))()}function Xy(){return(Xy=e((()=>{n(),L()})))()}function Zy(){return(Zy=e((()=>{n(),L()})))()}function Qy(){return(Qy=e((()=>{n(),L()})))()}function $y(){return($y=e((()=>{n(),L()})))()}function eb(){return(eb=e((()=>{n(),L()})))()}function tb(){return(tb=e((()=>{n(),L()})))()}function nb(){return(nb=e((()=>{n(),L()})))()}function rb(){return(rb=e((()=>{n(),L()})))()}function ib(){return(ib=e((()=>{n(),L()})))()}function ab(){return(ab=e((()=>{n(),L()})))()}function ob(){return(ob=e((()=>{n(),L()})))()}function sb(){return(sb=e((()=>{n(),L()})))()}function cb(){return(cb=e((()=>{n(),L()})))()}function lb(){return(lb=e((()=>{n(),L()})))()}function ub(){return(ub=e((()=>{n(),L()})))()}function db(){return(db=e((()=>{n(),L()})))()}function fb(){return(fb=e((()=>{n(),L()})))()}function pb(){return(pb=e((()=>{n(),L()})))()}function mb(){return(mb=e((()=>{n(),L()})))()}function hb(){return(hb=e((()=>{n(),L()})))()}function gb(){return(gb=e((()=>{n(),L()})))()}function _b(){return(_b=e((()=>{n(),L()})))()}function vb(){return(vb=e((()=>{n(),L()})))()}function yb(){return(yb=e((()=>{n(),L()})))()}function bb(){return(bb=e((()=>{n(),L()})))()}function xb(){return(xb=e((()=>{n(),L()})))()}function Sb(){return(Sb=e((()=>{n(),L()})))()}function Cb(){return(Cb=e((()=>{n(),L()})))()}function wb(){return(wb=e((()=>{n(),L()})))()}function Tb(){return(Tb=e((()=>{n(),L()})))()}function Eb(){return(Eb=e((()=>{n(),L()})))()}function Db(){return(Db=e((()=>{n(),L()})))()}function Ob(){return(Ob=e((()=>{n(),L()})))()}function kb(){return(kb=e((()=>{n(),L()})))()}function Ab(){return(Ab=e((()=>{n(),L()})))()}function jb(){return(jb=e((()=>{n(),L()})))()}function Mb(){return(Mb=e((()=>{n(),L()})))()}function Nb(){return(Nb=e((()=>{n(),L()})))()}function Pb(){return(Pb=e((()=>{n(),L()})))()}function Fb(){return(Fb=e((()=>{n(),L()})))()}function Ib(){return(Ib=e((()=>{n(),L()})))()}function Lb(){return(Lb=e((()=>{n(),L()})))()}function Rb(){return(Rb=e((()=>{n(),L()})))()}function zb(){return(zb=e((()=>{n(),L()})))()}function Bb(){return(Bb=e((()=>{n(),L()})))()}function Vb(){return(Vb=e((()=>{n(),L()})))()}function Hb(){return(Hb=e((()=>{n(),L()})))()}function Ub(){return(Ub=e((()=>{n(),L()})))()}function Wb(){return(Wb=e((()=>{n(),L()})))()}function Gb(){return(Gb=e((()=>{n(),L()})))()}function Kb(){return(Kb=e((()=>{n(),L()})))()}function qb(){return(qb=e((()=>{n(),L()})))()}function Jb(){return(Jb=e((()=>{n(),L()})))()}function Yb(){return(Yb=e((()=>{n(),L()})))()}function Xb(){return(Xb=e((()=>{n(),L()})))()}function Zb(){return(Zb=e((()=>{n(),L()})))()}function Qb(){return(Qb=e((()=>{n(),L()})))()}function $b(){return($b=e((()=>{n(),L()})))()}function ex(){return(ex=e((()=>{n(),L()})))()}function tx(){return(tx=e((()=>{n(),L()})))()}function nx(){return(nx=e((()=>{n(),L()})))()}function rx(){return(rx=e((()=>{n(),L()})))()}function ix(){return(ix=e((()=>{n(),L()})))()}function ax(){return(ax=e((()=>{n(),L()})))()}function ox(){return(ox=e((()=>{n(),L()})))()}function sx(){return(sx=e((()=>{n(),L()})))()}function cx(){return(cx=e((()=>{n(),L()})))()}function lx(){return(lx=e((()=>{n(),L()})))()}function ux(){return(ux=e((()=>{n(),L()})))()}function dx(){return(dx=e((()=>{n(),L()})))()}function fx(){return(fx=e((()=>{n(),L()})))()}function px(){return(px=e((()=>{n(),L()})))()}function mx(){return(mx=e((()=>{n(),L()})))()}function hx(){return(hx=e((()=>{n(),L()})))()}function gx(){return(gx=e((()=>{n(),L()})))()}function _x(){return(_x=e((()=>{n(),L()})))()}function vx(){return(vx=e((()=>{n(),L()})))()}function yx(){return(yx=e((()=>{n(),L()})))()}function bx(){return(bx=e((()=>{n(),L()})))()}function xx(){return(xx=e((()=>{n(),L()})))()}function Sx(){return(Sx=e((()=>{n(),L()})))()}function Cx(){return(Cx=e((()=>{n(),L()})))()}function wx(){return(wx=e((()=>{n(),L()})))()}function Tx(){return(Tx=e((()=>{n(),L()})))()}function Ex(){return(Ex=e((()=>{n(),L()})))()}function Dx(){return(Dx=e((()=>{n(),L()})))()}function Ox(){return(Ox=e((()=>{n(),L()})))()}function kx(){return(kx=e((()=>{n(),L()})))()}function Ax(){return(Ax=e((()=>{n(),L()})))()}function jx(){return(jx=e((()=>{n(),L()})))()}function Mx(){return(Mx=e((()=>{n(),L()})))()}function Nx(){return(Nx=e((()=>{n(),L()})))()}function Px(){return(Px=e((()=>{n(),L()})))()}function Fx(){return(Fx=e((()=>{n(),L()})))()}function Ix(){return(Ix=e((()=>{n(),L()})))()}function Lx(){return(Lx=e((()=>{n(),L()})))()}function Rx(){return(Rx=e((()=>{n(),L()})))()}function zx(){return(zx=e((()=>{n(),L()})))()}function Bx(){return(Bx=e((()=>{n(),L()})))()}function Vx(){return(Vx=e((()=>{n(),L()})))()}function Hx(){return(Hx=e((()=>{n(),L()})))()}function Ux(){return(Ux=e((()=>{n(),L()})))()}function Wx(){return(Wx=e((()=>{n(),L()})))()}function Gx(){return(Gx=e((()=>{n(),L()})))()}function Kx(){return(Kx=e((()=>{n(),L()})))()}function qx(){return(qx=e((()=>{n(),L()})))()}function Jx(){return(Jx=e((()=>{n(),L()})))()}function Yx(){return(Yx=e((()=>{n(),L()})))()}function Xx(){return(Xx=e((()=>{n(),L()})))()}function Zx(){return(Zx=e((()=>{n(),L()})))()}function Qx(){return(Qx=e((()=>{n(),L()})))()}function $x(){return($x=e((()=>{n(),L()})))()}function eS(){return(eS=e((()=>{n(),L()})))()}function tS(){return(tS=e((()=>{n(),L()})))()}function nS(){return(nS=e((()=>{n(),L()})))()}function rS(){return(rS=e((()=>{n(),L()})))()}function iS(){return(iS=e((()=>{n(),L()})))()}function aS(){return(aS=e((()=>{n(),L()})))()}function oS(){return(oS=e((()=>{n(),L()})))()}function sS(){return(sS=e((()=>{n(),L()})))()}function cS(){return(cS=e((()=>{n(),L()})))()}function lS(){return(lS=e((()=>{n(),L()})))()}function uS(){return(uS=e((()=>{n(),L()})))()}function dS(){return(dS=e((()=>{n(),L()})))()}function fS(){return(fS=e((()=>{n(),L()})))()}function pS(){return(pS=e((()=>{n(),L()})))()}function mS(){return(mS=e((()=>{n(),L()})))()}function hS(){return(hS=e((()=>{n(),L()})))()}function gS(){return(gS=e((()=>{n(),L()})))()}function _S(){return(_S=e((()=>{n(),L()})))()}function vS(){return(vS=e((()=>{n(),L()})))()}function yS(){return(yS=e((()=>{n(),L()})))()}function bS(){return(bS=e((()=>{n(),L()})))()}function xS(){return(xS=e((()=>{n(),L()})))()}function SS(){return(SS=e((()=>{n(),L()})))()}function CS(){return(CS=e((()=>{n(),L()})))()}function wS(){return(wS=e((()=>{n(),L()})))()}function TS(){return(TS=e((()=>{n(),L()})))()}function ES(){return(ES=e((()=>{n(),L()})))()}function DS(){return(DS=e((()=>{n(),L()})))()}function OS(){return(OS=e((()=>{n(),L()})))()}function kS(){return(kS=e((()=>{n(),L()})))()}function AS(){return(AS=e((()=>{n(),L()})))()}function jS(){return(jS=e((()=>{n(),L()})))()}function MS(){return(MS=e((()=>{n(),L()})))()}function NS(){return(NS=e((()=>{n(),L()})))()}function PS(){return(PS=e((()=>{n(),L()})))()}function FS(){return(FS=e((()=>{n(),L()})))()}function IS(){return(IS=e((()=>{n(),L()})))()}function LS(){return(LS=e((()=>{n(),L()})))()}function RS(){return(RS=e((()=>{n(),L()})))()}function zS(){return(zS=e((()=>{n(),L()})))()}function BS(){return(BS=e((()=>{n(),L()})))()}function VS(){return(VS=e((()=>{n(),L()})))()}function HS(){return(HS=e((()=>{n(),L()})))()}function US(){return(US=e((()=>{n(),L()})))()}function WS(){return(WS=e((()=>{n(),L()})))()}function GS(){return(GS=e((()=>{n(),L()})))()}function KS(){return(KS=e((()=>{n(),L()})))()}function qS(){return(qS=e((()=>{n(),L()})))()}function JS(){return(JS=e((()=>{n(),L()})))()}function YS(){return(YS=e((()=>{n(),L()})))()}function XS(){return(XS=e((()=>{n(),L()})))()}function ZS(){return(ZS=e((()=>{n(),L()})))()}function QS(){return(QS=e((()=>{n(),L()})))()}function $S(){return($S=e((()=>{n(),L()})))()}function eC(){return(eC=e((()=>{n(),L()})))()}function tC(){return(tC=e((()=>{n(),L()})))()}function nC(){return(nC=e((()=>{n(),L()})))()}function rC(){return(rC=e((()=>{n(),L()})))()}function iC(){return(iC=e((()=>{n(),L()})))()}function aC(){return(aC=e((()=>{n(),L()})))()}function oC(){return(oC=e((()=>{n(),L()})))()}function sC(){return(sC=e((()=>{n(),L()})))()}function cC(){return(cC=e((()=>{n(),L()})))()}function lC(){return(lC=e((()=>{n(),L()})))()}function uC(){return(uC=e((()=>{n(),L()})))()}function dC(){return(dC=e((()=>{n(),L()})))()}function fC(){return(fC=e((()=>{n(),L()})))()}function pC(){return(pC=e((()=>{n(),L()})))()}function mC(){return(mC=e((()=>{n(),L()})))()}function hC(){return(hC=e((()=>{n(),L()})))()}function gC(){return(gC=e((()=>{n(),L()})))()}function _C(){return(_C=e((()=>{n(),L()})))()}function vC(){return(vC=e((()=>{n(),L()})))()}function yC(){return(yC=e((()=>{n(),L()})))()}function bC(){return(bC=e((()=>{n(),L()})))()}function xC(){return(xC=e((()=>{n(),L()})))()}function SC(){return(SC=e((()=>{n(),L()})))()}function CC(){return(CC=e((()=>{n(),L()})))()}function wC(){return(wC=e((()=>{n(),L()})))()}function TC(){return(TC=e((()=>{n(),L()})))()}function EC(){return(EC=e((()=>{n(),L()})))()}function DC(){return(DC=e((()=>{n(),L()})))()}function OC(){return(OC=e((()=>{n(),L()})))()}function kC(){return(kC=e((()=>{n(),L()})))()}function AC(){return(AC=e((()=>{n(),L()})))()}function jC(){return(jC=e((()=>{n(),L()})))()}function MC(){return(MC=e((()=>{n(),L()})))()}function NC(){return(NC=e((()=>{n(),L()})))()}function PC(){return(PC=e((()=>{n(),L()})))()}function FC(){return(FC=e((()=>{n(),L()})))()}function IC(){return(IC=e((()=>{n(),L()})))()}function LC(){return(LC=e((()=>{n(),L()})))()}function RC(){return(RC=e((()=>{n(),L()})))()}function zC(){return(zC=e((()=>{n(),L()})))()}function BC(){return(BC=e((()=>{n(),L()})))()}function VC(){return(VC=e((()=>{n(),L()})))()}function HC(){return(HC=e((()=>{n(),L()})))()}function UC(){return(UC=e((()=>{n(),L()})))()}function WC(){return(WC=e((()=>{n(),L()})))()}function GC(){return(GC=e((()=>{n(),L()})))()}function KC(){return(KC=e((()=>{n(),L()})))()}function qC(){return(qC=e((()=>{n(),L()})))()}function JC(){return(JC=e((()=>{n(),L()})))()}function YC(){return(YC=e((()=>{n(),L()})))()}function XC(){return(XC=e((()=>{n(),L()})))()}function ZC(){return(ZC=e((()=>{n(),L()})))()}function QC(){return(QC=e((()=>{n(),L()})))()}function $C(){return($C=e((()=>{n(),L()})))()}function ew(){return(ew=e((()=>{n(),L()})))()}function tw(){return(tw=e((()=>{n(),L()})))()}function nw(){return(nw=e((()=>{n(),L()})))()}function rw(){return(rw=e((()=>{n(),L()})))()}function iw(){return(iw=e((()=>{n(),L()})))()}function aw(){return(aw=e((()=>{n(),L()})))()}function ow(){return(ow=e((()=>{n(),L()})))()}function sw(){return(sw=e((()=>{n(),L()})))()}function cw(){return(cw=e((()=>{n(),L()})))()}function lw(){return(lw=e((()=>{n(),L()})))()}function uw(){return(uw=e((()=>{n(),L()})))()}function dw(){return(dw=e((()=>{n(),L()})))()}function fw(){return(fw=e((()=>{n(),L()})))()}function pw(){return(pw=e((()=>{n(),L()})))()}function mw(){return(mw=e((()=>{n(),L()})))()}function hw(){return(hw=e((()=>{n(),L()})))()}function gw(){return(gw=e((()=>{n(),L()})))()}function _w(){return(_w=e((()=>{n(),L()})))()}function vw(){return(vw=e((()=>{n(),L()})))()}function yw(){return(yw=e((()=>{n(),L()})))()}function bw(){return(bw=e((()=>{n(),L()})))()}function xw(){return(xw=e((()=>{n(),L()})))()}function Sw(){return(Sw=e((()=>{n(),L()})))()}function Cw(){return(Cw=e((()=>{n(),L()})))()}function ww(){return(ww=e((()=>{n(),L()})))()}function Tw(){return(Tw=e((()=>{n(),L()})))()}function Ew(){return(Ew=e((()=>{n(),L()})))()}function Dw(){return(Dw=e((()=>{n(),L()})))()}function Ow(){return(Ow=e((()=>{n(),L()})))()}function kw(){return(kw=e((()=>{n(),L()})))()}function Aw(){return(Aw=e((()=>{n(),L()})))()}function jw(){return(jw=e((()=>{n(),L()})))()}function Mw(){return(Mw=e((()=>{n(),L()})))()}function Nw(){return(Nw=e((()=>{n(),L()})))()}function Pw(){return(Pw=e((()=>{n(),L()})))()}function Fw(){return(Fw=e((()=>{n(),L()})))()}function Iw(){return(Iw=e((()=>{n(),L()})))()}function Lw(){return(Lw=e((()=>{n(),L()})))()}function Rw(){return(Rw=e((()=>{n(),L()})))()}function zw(){return(zw=e((()=>{n(),L()})))()}function Bw(){return(Bw=e((()=>{n(),L()})))()}function Vw(){return(Vw=e((()=>{n(),L()})))()}function Hw(){return(Hw=e((()=>{n(),L()})))()}function Uw(){return(Uw=e((()=>{n(),L()})))()}function Ww(){return(Ww=e((()=>{n(),L()})))()}function Gw(){return(Gw=e((()=>{n(),L()})))()}function Kw(){return(Kw=e((()=>{n(),L()})))()}function qw(){return(qw=e((()=>{n(),L()})))()}function Jw(){return(Jw=e((()=>{n(),L()})))()}function Yw(){return(Yw=e((()=>{n(),L()})))()}function Xw(){return(Xw=e((()=>{n(),L()})))()}function Zw(){return(Zw=e((()=>{n(),L()})))()}function Qw(){return(Qw=e((()=>{n(),L()})))()}function $w(){return($w=e((()=>{n(),L()})))()}function eT(){return(eT=e((()=>{n(),L()})))()}function tT(){return(tT=e((()=>{n(),L()})))()}function nT(){return(nT=e((()=>{n(),L()})))()}function rT(){return(rT=e((()=>{n(),L()})))()}function iT(){return(iT=e((()=>{n(),L()})))()}function aT(){return(aT=e((()=>{n(),L()})))()}function oT(){return(oT=e((()=>{n(),L()})))()}function sT(){return(sT=e((()=>{n(),L()})))()}function cT(){return(cT=e((()=>{n(),L()})))()}function lT(){return(lT=e((()=>{n(),L()})))()}function uT(){return(uT=e((()=>{n(),L()})))()}function dT(){return(dT=e((()=>{n(),L()})))()}function fT(){return(fT=e((()=>{n(),L()})))()}function pT(){return(pT=e((()=>{n(),L()})))()}function mT(){return(mT=e((()=>{n(),L()})))()}function hT(){return(hT=e((()=>{n(),L()})))()}function gT(){return(gT=e((()=>{n(),L()})))()}function _T(){return(_T=e((()=>{n(),L()})))()}function vT(){return(vT=e((()=>{n(),L()})))()}function yT(){return(yT=e((()=>{n(),L()})))()}function bT(){return(bT=e((()=>{n(),L()})))()}function xT(){return(xT=e((()=>{n(),L()})))()}function ST(){return(ST=e((()=>{n(),L()})))()}function CT(){return(CT=e((()=>{n(),L()})))()}function wT(){return(wT=e((()=>{n(),L()})))()}function TT(){return(TT=e((()=>{n(),L()})))()}function ET(){return(ET=e((()=>{n(),L()})))()}function DT(){return(DT=e((()=>{n(),L()})))()}function OT(){return(OT=e((()=>{n(),L()})))()}function kT(){return(kT=e((()=>{n(),L()})))()}function AT(){return(AT=e((()=>{n(),L()})))()}function jT(){return(jT=e((()=>{Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT(),OT(),kT(),AT()})))()}function MT(e){return()=>e}var NT,PT;function FT(){return(FT=e((()=>{NT=MT(),PT=NT})))()}var IT;function LT(){return(LT=e((()=>{P(),FT(),IT=tt(()=>PT),customElements.define(`cosmoz-keybinding-provider`,IT.Provider)})))()}var RT;function zT(){return(zT=e((()=>{P(),LT(),Cr(),RT=(e,t)=>{let n=Ce(IT),r=Sr(e);O(()=>n(r),t)}})))()}function Y(){return(Y=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function BT(e,t){if(e&&WT.test(e)||e===`//`)return e;if(GT===void 0){GT=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,GT=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,GT)try{return new URL(e,t).href}catch{return e}return X||(X=document.implementation.createHTMLDocument(`temp`),X.base=X.createElement(`base`),X.head.appendChild(X.base),X.anchor=X.createElement(`a`),X.body.appendChild(X.anchor)),X.base.href=t,X.anchor.href=e,X.anchor.href||e}function VT(e,t){return e.replace(UT,function(e,n,r,i){return n+`'`+BT(r.replace(/["']/g,``),t)+`'`+i})}function HT(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var UT,WT,GT,X;function KT(){return(KT=e((()=>{Y(),UT=/(url\()([^)]*)(\))/g,WT=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var qT,JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE,iE,aE,oE;function sE(){return(sE=e((()=>{Y(),KT(),qT=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,JT=qT&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),YT=window.Polymer&&window.Polymer.rootPath||HT(document.baseURI||window.location.href),XT=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,ZT=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,QT=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,$T=window.Polymer&&window.Polymer.legacyOptimizations||!1,eE=window.Polymer&&window.Polymer.legacyWarnings||!1,tE=window.Polymer&&window.Polymer.syncInitialRender||!1,nE=window.Polymer&&window.Polymer.legacyUndefined||!1,rE=window.Polymer&&window.Polymer.orderedComputed||!1,iE=window.Polymer&&window.Polymer.removeNestedTemplates||!1,aE=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,oE=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function cE(){}var lE,uE;function dE(){return(dE=e((()=>{Y(),lE=0,cE.prototype.__mixinApplications,cE.prototype.__mixinSet,uE=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=lE++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function fE(e,t){hE[e]=gE[e.toLowerCase()]=t}function pE(e){return hE[e]||gE[e.toLowerCase()]}function mE(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var hE,gE,_E;function vE(){return(vE=e((()=>{Y(),KT(),sE(),hE={},gE={},_E=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=pE(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=BT(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=HT(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(ZT&&pE(e)!==void 0)throw fE(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,fE(e,this),mE(this)}}},_E.prototype.modules=hE,customElements.define(`dom-module`,_E)})))()}function yE(e){return _E.import(e)}function bE(e){let t=VT((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function xE(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...SE(t[e]));return n}function SE(e){let t=yE(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...TE(t));let n=t.querySelector(`template`);n&&e.push(...CE(n,t.assetpath)),t._styles=e}return t._styles}function CE(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(DE);a&&n.push(...xE(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=VT(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function wE(e){let t=yE(e);return t?TE(t):[]}function TE(e){let t=[],n=e.querySelectorAll(EE);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(OE);if(n&&!e._unscopedStyle){let t=bE(e);t.setAttribute(OE,``),e._unscopedStyle=t}else e._style||=bE(e);t.push(n?e._unscopedStyle:e._style)}}return t}var EE,DE,OE;function kE(){return(kE=e((()=>{vE(),KT(),EE=`link[rel=import][type~=css]`,DE=`include`,OE=`shady-unscoped`})))()}var Z;function AE(){return(AE=e((()=>{Z=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function jE(e){return e.indexOf(`.`)>=0}function ME(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function NE(e,t){return e.indexOf(t+`.`)===0}function PE(e,t){return t.indexOf(e+`.`)===0}function FE(e,t,n){return t+n.slice(e.length)}function IE(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function LE(e){return Array.isArray(e)?IE(e).split(`.`):e.toString().split(`.`)}function Q(e,t,n){let r=e,i=LE(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function RE(e,t,n){let r=e,i=LE(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function zE(){return(zE=e((()=>{Y()})))()}function BE(e){return HE[e]||(HE[e]=e.indexOf(`-`)<0?e:e.replace(UE,e=>e[1].toUpperCase()))}function VE(e){return HE[e]||(HE[e]=e.replace(WE,`-$1`).toLowerCase())}var HE,UE,WE;function GE(){return(GE=e((()=>{Y(),HE={},UE=/-[a-z]/g,WE=/([A-Z])/g})))()}function KE(){ZE=!1;let e=YE.length;for(let t=0;t<e;t++){let e=YE[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}YE.splice(0,e),JE+=e}var qE,JE,YE,XE,ZE,QE,$E;function eD(){return(eD=e((()=>{Y(),qE=0,JE=0,YE=[],XE=0,ZE=!1,QE=document.createTextNode(``),new window.MutationObserver(KE).observe(QE,{characterData:!0}),$E={run(e){return ZE||(ZE=!0,QE.textContent=XE++),YE.push(e),qE++},cancel(e){let t=e-JE;if(t>=0){if(!YE[t])throw Error(`invalid async handle: `+e);YE[t]=null}}}})))()}var tD,nD;function rD(){return(rD=e((()=>{Y(),dE(),eD(),AE(),tD=$E,nD=uE(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,tD.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=Z(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function iD(e,t){if(!aD[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var aD,oD,sD,cD;function lD(){return(lD=e((()=>{for(Y(),dE(),GE(),rD(),aD={},oD=HTMLElement.prototype;oD;){let e=Object.getOwnPropertyNames(oD);for(let t=0;t<e.length;t++)aD[e[t]]=!0;oD=Object.getPrototypeOf(oD)}sD=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,cD=uE(e=>{let t=nD(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(BE(e[t]))}static attributeNameForProperty(e){return VE(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(sD(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){iD(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function uD(){if(!yD){yD=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,bD=e.placeholder===e.textContent}return bD}function dD(e){uD()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function fD(e){let t=e.getAttribute(`is`);if(t&&vD[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];xD(e,n,t),n.removeAttribute(t)}}return e}function pD(e,t){let n=t.parentInfo&&pD(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function mD(e,t,n,r){r.id&&(t[r.id]=n)}function hD(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function gD(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function _D(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var vD,yD,bD,xD,SD;function CD(){return(CD=e((()=>{Y(),dE(),vD={"dom-if":!0,"dom-repeat":!0},yD=!1,bD=!1,xD=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),SD=uE(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),dD(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=fD(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=pD(i,o);mD(this,i.$,n,o),gD(this,n,o,t),hD(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=_D(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function wD(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function TD(e,t,n,r,i,a){if(t){let o=!1,s=aO++;for(let c in n){let l=t[i?ME(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||DD(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function ED(e,t,n,r,i,a,o,s){let c=!1,l=t[o?ME(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||DD(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function DD(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&NE(n,e))||!!(t.wildcard&&PE(n,e))}return!0}function OD(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function kD(e,t,n,r,i){let a=e[$.NOTIFY],o,s=aO++;for(let c in t)t[c]&&(a&&ED(e,a,s,c,n,r,i)||i&&AD(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function AD(e,t,n){let r=ME(t);return r!==t&&(jD(e,VE(r)+`-changed`,n[t],t),!0)}function jD(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),Z(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function MD(e,t,n,r,i,a){let o=(a?ME(t):t)==t?null:t,s=o?Q(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),jD(e,i.eventName,s,o)}function ND(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=FE(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function PD(e,t,n,r,i){let a=e.__data[t];XT&&(a=XT(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function FD(e,t,n,r){let i=e[$.COMPUTE];if(i){if(rE){aO++;let a=ID(e),o=[];for(let e in t)uO(e,i,o,a,r);let s;for(;s=o.shift();)RD(e,``,t,n,s)&&uO(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;TD(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function ID(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[$.COMPUTE],{counts:r,ready:i,total:a}=LD(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function LD(e){let t=e[sO],n={},r=e[$.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function RD(e,t,n,r,i){let a=XD(e,t,n,r,i);if(a===oO)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function zD(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];PE(a,t)?(i=FE(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):PE(o,t)&&(i=FE(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function BD(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),GD(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||VE(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,VD(e,t,s,r,c)}}function VD(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=eO(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:HD,info:o,trigger:r})}}}}function HD(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=FE(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==oO&&UD(e,s,c,l,o)}}function UD(e,t,n,r,i){if(i=WD(t,i,n,r),XT&&(i=XT(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function WD(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function GD(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function KD(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];qD(a,n),JD(a,e,n)}a.__dataHost=e}}function qD(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=Z(e)),e[a]=t.literal)}}function JD(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){ND(e,t,n.target,r.source,r.negate)})}}function YD(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function XD(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===oO?oO:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function ZD(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function QD(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:dO};return t[2].trim()?$D(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function $D(e,t){return t.args=e.map(function(e){let n=eO(e);return n.literal||(t.static=!1),n},this),t}function eO(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=ME(t),n.structured=jE(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function tO(e,t,n){let r=Q(e,n);return r===void 0&&(r=t[n]),r}function nO(e,t,n,r){let i={indexSplices:r};nE&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),nE&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function rO(e,t,n,r,i,a){nO(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function iO(e){return e[0].toUpperCase()+e.substring(1)}var aO,oO,$,sO,cO,lO,uO,dO,fO,pO,mO;function hO(){return(hO=e((()=>{Y(),AE(),dE(),zE(),GE(),lD(),CD(),sE(),aO=0,oO=[],$={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},sO=`__computeInfo`,cO=/[A-Z]/,lO=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},uO=(e,t,n,r,i)=>{let a=t[i?ME(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==aO&&(!i||DD(e,o.trigger))&&(o.info.lastRun=aO,lO(o.info,n,r))}},dO=[],fO=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),pO=uE(e=>{let t=SD(cD(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(mO.length){let e=mO[mO.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[$.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==$.READ_ONLY);let r=wD(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=wD(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,$.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,$.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,$.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,$.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||ME(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Q(this,e);if(e=RE(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return zD(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=Z(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&jE(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[$.NOTIFY]&&this[$.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;FD(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),TD(this,this[$.REFLECT],t,n,r),TD(this,this[$.OBSERVE],t,n,r),i&&kD(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[$.PROPAGATE]&&TD(this,this[$.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{TD(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=IE(e),t=IE(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=IE(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Q(this,e,n);nO(this,r,n.path,t)}get(e,t){return Q(t||this,e)}set(e,t,n){n?RE(n,e,t):(!this[$.READ_ONLY]||!this[$.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Q(this,e,n),i=r.length,a=r.push(...t);return t.length&&rO(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.pop();return r&&rO(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Q(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&rO(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.shift();return r&&rO(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Q(this,e,n),i=r.unshift(...t);return t.length&&rO(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Q(this,e,r),n=r.path}else n=Array.isArray(e)?IE(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,$.READ_ONLY),t&&(this[`_set`+iO(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,$.OBSERVE,{fn:OD,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,$.OBSERVE,{fn:OD,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=QD(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);YD(this,n,$.OBSERVE,XD,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,$.NOTIFY,{fn:MD,info:{eventName:VE(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,$.REFLECT,{fn:PD,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=QD(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=YD(this,r,$.COMPUTE,RD,e,n);wD(this,sO)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=PE(o,t),i=tO(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Q(r,o):i}}else l=s?tO(r,n,o):r[o]}if(nE&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return oO;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),mO.push(this);let n=super._stampTemplate(e,t);if(mO.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,KD(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];Z(Z(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=ZD(t)||` `,BD(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;cO.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=ZD(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=BE(i)),BD(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;iE&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(aE&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),iE||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];BD(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=fO.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=QD(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=fO.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?XD(e,n,r,i,t.signature):n==t.source?a&&jE(n)?Q(e,n):e.__data[n]:Q(e,t.source),t.negate&&(o=!o),o}}return n}),mO=[]})))()}function gO(){vO++}function _O(e){yO.push(e)}var vO,yO;function bO(){return(bO=e((()=>{vO=0,yO=[]})))()}function xO(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var SO;function CO(){return(CO=e((()=>{Y(),dE(),bO(),rD(),SO=uE(e=>{let t=nD(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=xO(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){_O(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){gO(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var wO,TO,EO;function DO(){return(DO=e((()=>{Y(),sE(),dE(),kE(),KT(),vE(),hO(),CO(),AE(),wO=`3.5.2`,TO=window.ShadyCSS&&window.ShadyCSS.cssBuild,EO=uE(e=>{let t=SO(pO(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!TO){let i=t.content.querySelectorAll(`style`),a=CE(t),o=wE(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),oE&&TO&&JT){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!ZT||QT)&&(t=_E.import(e,`template`),ZT&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return wO}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):$T||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=HT(e.url);else{let e=_E.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=YT,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return VT(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?BT(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=Z(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),tE&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=BT(this.importPath)),BT(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return eE&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function OO(e){if(e instanceof jO)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function kO(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof jO)return OO(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var AO,jO,MO,NO;function PO(){return(PO=e((()=>{Y(),AO=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),jO=class{constructor(e,t){NO(e,t);let n=t.reduce((t,n,r)=>t+OO(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},MO=function(e,...t){NO(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+kO(n)+e[r+1],e[0]);return AO&&(r=AO.createHTML(r)),n.innerHTML=r,n},NO=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}function FO(){return(FO=e((()=>{DO(),PO(),EO(HTMLElement)})))()}var IO,LO,RO,zO,BO,VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO;function QO(){return(QO=e((()=>{Et(),At(),Hr(),Vr(),jT(),zT(),P(),FO(),n(),IO=`bottom-bar-toolbar`,LO=`bottom-bar-menu`,RO=w`
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

	@media (max-width: 899px) {
		:host {
			--cz-control-height-md: 44px;
			--cz-control-height-sm: 44px;
			background-color: var(
				--cosmoz-bottom-bar-bg-color,
				var(--cz-color-bg-glass)
			);
			background-image: var(--cz-glass-sheen);
			border-color: var(--cz-color-border-glass);
			box-shadow: var(--cosmoz-bottom-bar-shadow, var(--cz-shadow-glass));
			backdrop-filter: var(--cz-backdrop-filter-glass);
		}
	}

	@media (prefers-reduced-motion: reduce) {
		:host {
			transition: none;
		}
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) #dropdown {
		display: none;
	}
`,zO=Symbol(`openMenu`),BO=e=>{let t=e.currentTarget.closest(`#dropdown`);t&&(t.opened=!1)},VO=e=>{e.shadowRoot?.querySelector(`#menuButton`)?.click()},HO=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,UO=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},WO=e=>{let t=UO(e).filter(HO).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},GO={variant:`tertiary`,size:`sm`},KO=new WeakMap,qO=e=>e.constructor.observedAttributes?.includes(`variant`)??!1,JO=(e,t,n,r)=>{let i=t?IO:LO;if(e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),qO(e)){KO.has(e)||KO.set(e,{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`)});let n=t?KO.get(e):GO;Object.entries(n).forEach(([t,n])=>n==null?e.removeAttribute(t):e.setAttribute(t,n))}e.classList.toggle(r,!t),e.classList.toggle(n,t)},YO=(e,t,n)=>{let r=WO(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>JO(e,!0,t,n)),o.forEach(e=>JO(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0);let s=e.shadowRoot?.querySelector(`#bar`);if(!s?.clientWidth)return;let c=()=>s.scrollWidth>s.clientWidth||a.some(e=>e.scrollWidth>e.clientWidth);for(;a.length>0&&c();)JO(a.pop(),!1,t,n),e.toggleAttribute(`has-menu-items`,!0)},XO=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=M(!1);RT({activity:zO,callback:()=>VO(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=k(()=>kt(`height`),[]);Ae(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let a=M([]),o=A(()=>{a.current=WO(e),YO(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`)},[n]),s=M(null),l=A(()=>{let t=s.current;t&&(t.disconnect(),UO(e).filter(HO).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{s.current=new MutationObserver(()=>{l(),o()}),l(),o();let t=new MutationObserver(()=>{l(),o()});t.observe(e,{childList:!0,subtree:!0,characterData:!0});let n=new ResizeObserver(o);return n.observe(e),()=>{s.current?.disconnect(),s.current=null,t.disconnect(),n.disconnect()}},[o]);let u=A(()=>{l();let t=WO(e),n=a.current??[];(t.length!==n.length||t.some((e,t)=>e!==n[t]))&&o()},[o]);return c` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${u}
			></slot>
			<cosmoz-dropdown-next
				id="dropdown"
				part="dropdown"
				placement="top span-left"
			>
				<cosmoz-button
					id="menuButton"
					slot="button"
					variant="primary"
					icon-only
					aria-label="More actions"
				>
					${bd()}
				</cosmoz-button>
				<div class="menu" part="menu" @click=${BO}>
					<cosmoz-dropdown-list>
						<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
					</cosmoz-dropdown-list>
				</div>
			</cosmoz-dropdown-next>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${u}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,N(XO,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[RO]})),ZO=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,c(Object.assign([ZO],{raw:[ZO]})),MO(Object.assign([ZO],{raw:[ZO]}))})))()}function $O(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var ek,tk,nk,rk,ik,ak,ok;function sk(){return(sk=e((()=>{Et(),P(),n(),L(),QO(),ek=e=>{let{active:t,maxToolbarItems:n}=e,[r,i]=j(``),[a,o]=j($O([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),s=e=>{let t=e.target;i(t.value)},l=e=>{let t=e?e.trim():``;o([...a,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&i(``)};return c`
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
			${Dt(a,e=>c`<cosmoz-button
						@click=${e.onClick}
						data-priority=${I(e.priority)}
					>
						${e.text}
					</cosmoz-button>`)}
		</cosmoz-bottom-bar>
	`},customElements.define(`cosmoz-bottom-bar-story`,N(ek,{observedAttributes:[`active`,`max-toolbar-items`]})),tk=e=>c`<cosmoz-bottom-bar-story
		?active=${e.active}
		.maxToolbarItems=${e.maxToolbarItems}
	></cosmoz-bottom-bar-story>`,nk=({active:e,maxToolbarItems:t})=>c`
	<cosmoz-bottom-bar
		id="bottomBar"
		?active=${e}
		.maxToolbarItems=${t}
	>
		<span slot="info">Bottom bar demo</span>
	</cosmoz-bottom-bar>
`,rk={title:`Cosmoz Bottom Bar`,render:tk,argTypes:{active:{control:`boolean`},maxToolbarItems:{control:`number`}},parameters:{docs:{description:{component:`The Cosmoz Bottom Bar web component`}}}},ik={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The basic version`}}}},ak={render:nk,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The empty cosmoz-bottom-bar`}}}},ok=[`Basic`,`Empty`]})))()}sk();export{ik as Basic,ak as Empty,ok as __namedExportsOrder,rk as default};