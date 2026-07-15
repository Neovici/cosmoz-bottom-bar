import{r as e}from"./preload-helper-CGrDLHbs.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./iframe-LlA2C0nT.js";function l(e){f=e}function u(){f=null,p=0}function d(){return p++}var f,p,m=e((()=>{p=0})),h,g,_,v,y,b,x,S=e((()=>{h=Symbol(`haunted.phase`),g=Symbol(`haunted.hook`),_=Symbol(`haunted.update`),v=Symbol(`haunted.commit`),y=Symbol(`haunted.effects`),b=Symbol(`haunted.layoutEffects`),x=`haunted.context`})),ee,te=e((()=>{m(),S(),ee=class{update;host;virtual;[g];[y];[b];constructor(e,t){this.update=e,this.host=t,this[g]=new Map,this[y]=[],this[b]=[]}run(e){l(this);let t=e();return u(),t}_runEffects(e){let t=this[e];l(this);for(let e of t)e.call(this);u()}runEffects(){this._runEffects(y)}runLayoutEffects(){this._runEffects(b)}teardown(){this[g].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),C,ne=e((()=>{C=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,se,ce,le=e((()=>{te(),S(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),se=re(),ce=class e{renderer;host;state;[h];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[h]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new C(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(_);se(()=>{this.handlePhase(v,e),se(()=>{this.handlePhase(y),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[h]=e,e){case v:this.commit(t),this.runEffects(b);return;case _:return this.render();case y:return this.runEffects(y)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),ue,de,fe,w,pe=e((()=>{ue=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},de=e=>e?.map(e=>typeof e==`string`?ue(e):e),fe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=fe}));function me(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=de(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,he(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var he,ge=e((()=>{le(),pe(),he=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function _e(e,...t){let n=d(),r=f[g],i=r.get(n);return i||(i=new e(n,f,...t),r.set(n,i)),i.update(...t)}function T(e){return _e.bind(null,e)}var E,D=e((()=>{m(),S(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ve(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ye=e((()=>{D()}));function be(e,t){e[y].push(t)}var O,xe=e((()=>{S(),ye(),O=ve(be)})),Se,Ce,we=e((()=>{D(),S(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(x,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(x,this)}disconnectedCallback(){this.removeEventListener(x,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ee=e((()=>{S(),we()})),k,De=e((()=>{D(),k=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),A,Oe=e((()=>{De(),A=(e,t)=>k(()=>e,t)}));function ke(e,t){e[b].push(t)}var Ae,je=e((()=>{S(),ye(),Ae=ve(ke)})),j,Me=e((()=>{D(),j=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ne=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Pe,Fe,Ie=e((()=>{D(),Pe=/([A-Z])/gu,Fe=T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Pe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Le(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function Re(e){return k(()=>Le(e),[])}var ze=e((()=>{De()})),Be=e((()=>{D(),T(class extends E{update(){return this.state.host}})}));function Ve({render:e}){let t=me(e);return{component:t,createContext:Te(t)}}var He=e((()=>{ge(),Ee(),Oe(),xe(),je(),Me(),Ne(),De(),we(),Ie(),ze(),Be(),D(),le(),te(),ne()})),Ue,We,Ge,Ke=e((()=>{Ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=e=>(...t)=>({_$litDirective$:e,values:t}),Ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function qe(e){this._$AN===void 0?this._$AM=e:(Xe(this),this._$AM=e,Ze(this))}function Je(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Ye(r[e],!1),Xe(r[e]);else r!=null&&(Ye(r,!1),Xe(r));else Ye(this,e)}var Ye,Xe,Ze,Qe,$e,et=e((()=>{c(),Ke(),Ye=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Ye(e,t);return!0},Xe=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ze=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qe(t)}},Qe=e=>{e.type==Ue.CHILD&&(e._$AP??=Je,e._$AQ??=qe)},$e=class extends Ge{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ze(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ye(this,e),Xe(this))}setValue(e){if(i(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function tt(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(nt.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?tt(e,t):e.teardown();break}else if(nt.call(a.addedNodes,n.nextSibling)){i.disconnect(),tt(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var nt,rt=e((()=>{Ke(),s(),et(),le(),nt=Array.prototype.includes})),M,it,at=e((()=>{s(),He(),rt(),{component:M,createContext:it}=Ve({render:r})})),N=e((()=>{at(),He(),pe(),He()})),ot,st=e((()=>{N(),ot=ue(w`
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
`)})),P,F=e((()=>{s(),P=e=>e??o})),ct,lt=e((()=>{N(),ct=w`
	position: relative;

	&::before {
		content: '';
		position: absolute;
		inset: 1px;
		border: 1px solid var(--skeumorphic-color, rgba(255, 255, 255, 0.12));
		border-radius: var(--skeumorphic-radius, calc(var(--cz-radius-md) - 1px));
		pointer-events: none;
		mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
		-webkit-mask-image: linear-gradient(to bottom, black 0%, transparent 100%);
	}
`})),ut,dt=e((()=>{lt(),N(),ut=w`
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

	/* ========================================
	 * SIZE VARIANTS
	 * ======================================== */

	:host([size='sm']) .button {
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='sm']) ::slotted(svg) {
		width: 16px;
		height: 16px;
	}

	:host([size='lg']) .button {
		height: 44px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4.5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 48px;
		padding: calc(var(--cz-spacing) * 3) calc(var(--cz-spacing) * 5);
		font-size: var(--cz-text-base);
		line-height: var(--cz-text-base-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * BUTTON BASE STYLES (Primary - default)
	 * ======================================== */

	.button {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		cursor: pointer;
		font-family: var(--cz-font-body);
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition:
			background-color 0.15s ease,
			box-shadow 0.15s ease;
		width: 100%;
		white-space: nowrap;
		border: none;
		background: none;
		text-align: center;

		/* Medium (md) - default size */
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		/* Primary - default variant */
		${ct}
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);

		&:hover {
			background-color: var(--cz-color-bg-brand-solid-hover);
		}

		&:active {
			background-color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			outline: none;
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	/* ========================================
	 * STYLE VARIANTS
	 * ======================================== */

	:host([variant='secondary']) .button {
		background-color: var(--cz-color-bg-primary);
		color: var(--cz-color-text-secondary);

		&:hover {
			background-color: var(--cz-color-bg-primary-hover);
			color: var(--cz-color-text-secondary-hover);
		}

		&:active {
			background-color: var(--cz-color-bg-tertiary);
		}

		&:focus-visible {
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring);
		}
	}

	:host([variant='tertiary']) .button {
		background-color: transparent;
		color: var(--cz-color-text-secondary);
		box-shadow: none;

		&::before {
			display: none;
		}

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
			box-shadow: var(--cz-shadow-xs-skeumorphic), var(--cz-focus-ring-error);
		}
	}

	:host([variant='link']) .button {
		background-color: transparent;
		color: var(--cz-color-text-brand);
		box-shadow: none;
		padding: 0;
		height: auto;

		&::before {
			display: none;
		}

		&:hover {
			text-decoration: underline;
			color: var(--cz-color-text-brand-hover);
		}

		&:active {
			color: var(--cz-color-brand-800);
		}

		&:focus-visible {
			text-decoration: underline;
			box-shadow: var(--cz-focus-ring);
			border-radius: var(--cz-radius-xs);
		}
	}

	/* ========================================
	 * DISABLED STATE
	 * ======================================== */

	:host([disabled]) .button {
		cursor: not-allowed;
		pointer-events: none;

		&::before {
			display: none;
		}
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
`})),ft,pt,mt=e((()=>{st(),N(),s(),F(),dt(),ft=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],pt=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,r=e.getAttribute(`href`);O(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let i=a`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){let n=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return a`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${t?`true`:o}
				target=${P(n)}
				rel=${P(s)}
				download=${P(c)}
				>${i}</a
			>
		`}return a`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${i}
		</button>
	`},customElements.define(`cosmoz-button`,M(pt,{observedAttributes:ft,styleSheets:[ot,ut],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),ht=e((()=>{mt()}));function*gt(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var _t=e((()=>{})),vt,yt,bt=e((()=>{vt={duration:250},yt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...vt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})),xt,St,Ct=e((()=>{s(),Ke(),xt={},St=We(class extends Ge{constructor(){super(...arguments),this.ot=xt}render(e,t){return t()}update(e,[n,r]){if(Array.isArray(n)){if(Array.isArray(this.ot)&&this.ot.length===n.length&&n.every((e,t)=>e===this.ot[t]))return t}else if(this.ot===n)return t;return this.ot=Array.isArray(n)?Array.from(n):n,this.render(n,r)}})})),wt,Tt,Et=e((()=>{s(),et(),Ke(),wt=new WeakMap,Tt=We(class extends $e{render(e){return o}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=wt.get(t);n===void 0&&(n=new WeakMap,wt.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?wt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),Dt,Ot,kt,At=e((()=>{s(),Ke(),Dt=`important`,Ot=` !important`,kt=We(class extends Ge{constructor(e){if(super(e),e.type!==Ue.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[n]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in n){let t=n[e];if(t!=null){this.ft.add(e);let n=typeof t==`string`&&t.endsWith(Ot);e.includes(`-`)||n?r.setProperty(e,n?t.slice(0,-11):t,n?Dt:``):r[e]=t}}return t}})})),jt,Mt=e((()=>{jt=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),Nt=e((()=>{Mt()})),Pt,Ft,It=e((()=>{N(),s(),Nt(),Pt=w`
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
`,Ft=()=>a`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,jt(M(Ft,{styleSheets:[Pt]})))}));function Lt(e,t,n){return L(e,$t(t,n))}function Rt(e,t){return typeof e==`function`?e(t):e}function zt(e){return e.split(`-`)[0]}function Bt(e){return e.split(`-`)[1]}function Vt(e){return e===`x`?`y`:`x`}function Ht(e){return e===`y`?`height`:`width`}function I(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Ut(e){return Vt(I(e))}function Wt(e,t,n){n===void 0&&(n=!1);let r=Bt(e),i=Ut(e),a=Ht(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Yt(o)),[o,Yt(o)]}function Gt(e){let t=Yt(e);return[Kt(e),t,Kt(t)]}function Kt(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function qt(e,t,n){switch(e){case`top`:case`bottom`:return n?t?an:rn:t?rn:an;case`left`:case`right`:return t?on:sn;default:return[]}}function Jt(e,t,n,r){let i=Bt(e),a=qt(zt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Kt)))),a}function Yt(e){let t=zt(e);return nn[t]+e.slice(t.length)}function Xt(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Zt(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Xt(e)}function Qt(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var $t,L,en,tn,R,nn,rn,an,on,sn,cn=e((()=>{$t=Math.min,L=Math.max,en=Math.round,tn=Math.floor,R=e=>({x:e,y:e}),nn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},rn=[`left`,`right`],an=[`right`,`left`],on=[`top`,`bottom`],sn=[`bottom`,`top`]}));function ln(e,t,n){let{reference:r,floating:i}=e,a=I(t),o=Ut(t),s=Ht(o),c=zt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Bt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function un(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Rt(t,e),p=Zt(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=Qt(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=Qt(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var dn,fn,pn,mn,hn=e((()=>{cn(),dn=50,fn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:un},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=ln(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<dn&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=ln(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},pn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Rt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=zt(r),_=I(o),v=zt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Yt(o)]:Gt(o)),x=p!==`none`;!d&&x&&b.push(...Jt(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=Wt(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==I(t))||C.every(e=>I(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=I(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},mn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Rt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=I(i),p=Vt(f),m=u[p],h=u[f],g=(e,t)=>Lt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}}}));function gn(){return typeof window<`u`}function _n(e){return vn(e)?(e.nodeName||``).toLowerCase():`#document`}function z(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function B(e){return((vn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function vn(e){return gn()?e instanceof Node||e instanceof z(e).Node:!1}function V(e){return gn()?e instanceof Element||e instanceof z(e).Element:!1}function H(e){return gn()?e instanceof HTMLElement||e instanceof z(e).HTMLElement:!1}function yn(e){return!gn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof z(e).ShadowRoot}function bn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=U(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function xn(e){return/^(table|td|th)$/.test(_n(e))}function Sn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Cn(e){let t=V(e)?U(e):e;return G(t.transform)||G(t.translate)||G(t.scale)||G(t.rotate)||G(t.perspective)||!Tn()&&(G(t.backdropFilter)||G(t.filter))||jn.test(t.willChange||``)||Mn.test(t.contain||``)}function wn(e){let t=W(e);for(;H(t)&&!En(t);){if(Cn(t))return t;if(Sn(t))return null;t=W(t)}return null}function Tn(){return Nn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Nn}function En(e){return/^(html|body|#document)$/.test(_n(e))}function U(e){return z(e).getComputedStyle(e)}function Dn(e){return V(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function W(e){if(_n(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||yn(e)&&e.host||B(e);return yn(t)?t.host:t}function On(e){let t=W(e);return En(t)?(e.ownerDocument||e).body:H(t)&&bn(t)?t:On(t)}function kn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=On(e),i=r===e.ownerDocument?.body,a=z(r);if(i){let e=An(a);return t.concat(a,a.visualViewport||[],bn(r)?r:[],e&&n?kn(e):[])}else return t.concat(r,kn(r,[],n))}function An(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var jn,Mn,G,Nn,Pn=e((()=>{jn=/transform|translate|scale|rotate|perspective|filter/,Mn=/paint|layout|strict|content/,G=e=>!!e&&e!==`none`}));function Fn(e){let t=U(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=H(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=en(n)!==a||en(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function In(e){return V(e)?e:e.contextElement}function Ln(e){let t=In(e);if(!H(t))return R(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Fn(t),o=(a?en(n.width):n.width)/r,s=(a?en(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Rn(e){let t=z(e);return!Tn()||!t.visualViewport?ar:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function zn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===z(e)}function K(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=In(e),o=R(1);t&&(r?V(r)&&(o=Ln(r)):o=Ln(e));let s=zn(a,n,r)?Rn(a):R(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=z(a),t=V(r)?z(r):r,n=e,i=An(n);for(;i&&t!==n;){let e=Ln(i),t=i.getBoundingClientRect(),r=U(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=z(i),i=An(n)}}return Qt({width:u,height:d,x:c,y:l})}function Bn(e,t){let n=Dn(e).scrollLeft;return t?t.left+n:K(B(e)).left+n}function Vn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Bn(e,n),y:n.top+t.scrollTop}}function Hn(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=B(r),s=t?Sn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=R(1),u=R(0),d=H(r);if((d||!a)&&((_n(r)!==`body`||bn(o))&&(c=Dn(r)),d)){let e=K(r);l=Ln(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Vn(o,c):R(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Un(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Wn(e){let t=Dn(e),n=e.ownerDocument.body,r=L(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=L(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Bn(e),o=-t.scrollTop;return U(n).direction===`rtl`&&(a+=L(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Gn(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=z(e),a=B(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Tn()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Bn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=or&&(s-=o)}return{width:s,height:c,x:l,y:u}}function Kn(e,t){let n=K(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ln(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function qn(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Gn(e,n,t);else if(t===`document`)r=Wn(B(e));else if(V(t))r=Kn(t,n);else{let n=Rn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Qt(r)}function Jn(e,t){let n=t.get(e);if(n)return n;let r=kn(e,[],!1).filter(e=>V(e)&&_n(e)!==`body`),i=null,a=U(e).position===`fixed`,o=a?W(e):e;for(;V(o)&&!En(o);){let e=U(o),t=Cn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=W(o)}return t.set(e,r),r}function Yn(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Sn(t)?[]:Jn(t,this._c):[].concat(n),r],o=qn(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=qn(t,a[e],i);s=L(n.top,s),c=$t(n.right,c),l=$t(n.bottom,l),u=L(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Xn(e){let{width:t,height:n}=Fn(e);return{width:t,height:n}}function Zn(e,t,n){let r=H(t),i=B(t),a=n===`fixed`,o=K(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=R(0);if((r||!a)&&((_n(t)!==`body`||bn(i))&&(s=Dn(t)),r)){let e=K(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Bn(i));let l=i&&!r&&!a?Vn(i,s):R(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function Qn(e){return U(e).position===`static`}function $n(e,t){if(!H(e)||U(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return B(e)===n&&(n=n.ownerDocument.body),n}function er(e,t){let n=z(e);if(Sn(e))return n;if(!H(e)){let t=W(e);for(;t&&!En(t);){if(V(t)&&!Qn(t))return t;t=W(t)}return n}let r=$n(e,t);for(;r&&xn(r)&&Qn(r);)r=$n(r,t);return r&&En(r)&&Qn(r)&&!Cn(r)?n:r||wn(e)||n}function tr(e){return U(e).direction===`rtl`}function nr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function rr(e,t,n){let r=null,i,a=B(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=tn(d),h=tn(a.clientWidth-(u+f)),g=tn(a.clientHeight-(d+p)),_=tn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:L(0,$t(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!nr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=z(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function ir(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=In(e),u=i||a?[...l?kn(l):[],...t?kn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?rr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?K(e):null;c&&g();function g(){let t=K(e);h&&!nr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var ar,or,sr,cr,lr,ur,dr,fr=e((()=>{hn(),cn(),Pn(),ar=R(0),or=25,sr=async function(e){let t=this.getOffsetParent||er,n=this.getDimensions,r=await n(e.floating);return{reference:Zn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},cr={convertOffsetParentRelativeRectToViewportRelativeRect:Hn,getDocumentElement:B,getClippingRect:Yn,getOffsetParent:er,getElementRects:sr,getClientRects:Un,getDimensions:Xn,getScale:Ln,isElement:V,isRTL:tr},lr=mn,ur=pn,dr=(e,t,n)=>{let r=new Map,i=n??{},a={...cr,...i.platform,_c:r};return fn(e,t,{...i,platform:a})}})),pr,mr,hr=e((()=>{N(),fr(),pr=[ur({fallbackAxisSideDirection:`start`,crossAxis:!1}),lr()],mr=({placement:e=`bottom-start`,strategy:t,middleware:n=pr}={})=>{let[r,i]=j(),[a,o]=j(),[s,c]=j();return O(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return ir(r,a,()=>dr(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:k(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),gr,_r=e((()=>{N(),gr=e=>{let t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])}})),vr,yr,br,xr=e((()=>{_r(),N(),vr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,yr=({disabled:e,onFocus:t})=>{let[n,r]=j(),{focused:i,closed:a}=n||{},o=i&&!e,s=gr({closed:a,onFocus:t}),c=A(e=>r(t=>({...t,closed:e})),[]),l=A(e=>{let t=e.currentTarget;return vr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:A(e=>{let t=vr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},br=e=>{let t=yr(e),{onFocus:n}=t,r=Re();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})),Sr,Cr,wr,Tr=e((()=>{ht(),N(),s(),Ct(),Et(),At(),It(),hr(),xr(),Sr=e=>e.preventDefault(),Cr=w`
	.anchor {
		padding: var(--cosmoz-dropdown-anchor-spacing);
	}

	@-moz-document url-prefix() {
		#content {
			left: auto;
		}
	}
`,wr=e=>{let{placement:t,strategy:n,middleware:r,render:i}=e,{active:s,onToggle:c}=br(e),l=Re(),{styles:u,setReference:d,setFloating:f}=mr({placement:t,strategy:n,middleware:r}),p=A(e=>{l.current=e,f(e)},[f]);return O(()=>{let e=l.current;e&&(s&&!e.matches(`:popover-open`)&&e.showPopover?.(),!s&&e.matches(`:popover-open`)&&e.hidePopover?.())},[s]),a`
		<div class="anchor" part="anchor" ${Tt(d)}>
			<cosmoz-button
				@mousedown=${Sr}
				@click=${c}
				part="button"
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
			style="${kt(u)}"
			${Tt(p)}
			><slot></slot>${St([i],()=>i?.()||o)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,M(wr,{styleSheets:[Cr]}))})),Er,Dr,Or,kr=e((()=>{N(),s(),Er=w`
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
`,Dr=()=>a` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,M(Dr,{styleSheets:[Er]})),Or=({placement:e})=>a` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,M(Or))})),Ar,jr=e((()=>{N(),Ar=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=Re(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return O(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),O(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),Mr,Nr,Pr,Fr=e((()=>{N(),s(),Et(),jr(),Mr=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Nr=w`
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
`,Pr=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:o}=e,s=Re(),[c,l]=Fe(`opened`,!1),u=A(()=>{n||(l(!0),s.current?.showPopover?.())},[n]),d=A(()=>{l(!1),s.current?.hidePopover?.()},[]),f=A(()=>{n||(s.current?.matches(`:popover-open`)?d():u())},[n]);O(()=>{let e=s.current;e&&(c?e.showPopover?.():e.hidePopover?.())},[c]),O(()=>{e.toggleAttribute(`opened`,!!c)},[c]);let{scheduleClose:p,cancelClose:m}=Ar({host:e,popoverRef:s,disabled:n,openOnHover:i,openOnFocus:o,open:u,close:d}),h=o?u:f,g=A(t=>{Mr(t),l(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return a`
		<slot name="button" @click=${h}></slot>
		${n&&r?a`<slot></slot>`:a`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${Tt(e=>e&&(s.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,M(Pr,{styleSheets:[Nr],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Ir=e((()=>{Tr(),kr(),xr(),Fr()}));function Lr(e,t,n){return e?t(e):n?.(e)}var Rr=e((()=>{})),zr=e((()=>{s(),F()})),Br=e((()=>{s(),F()})),Vr=e((()=>{s(),F()})),Hr=e((()=>{s(),F()})),Ur=e((()=>{s(),F()})),Wr=e((()=>{s(),F()})),Gr=e((()=>{s(),F()})),Kr=e((()=>{s(),F()})),qr=e((()=>{s(),F()})),Jr=e((()=>{s(),F()})),Yr=e((()=>{s(),F()})),Xr=e((()=>{s(),F()})),Zr=e((()=>{s(),F()})),Qr=e((()=>{s(),F()})),$r=e((()=>{s(),F()})),ei=e((()=>{s(),F()})),ti=e((()=>{s(),F()})),ni=e((()=>{s(),F()})),ri=e((()=>{s(),F()})),ii=e((()=>{s(),F()})),ai=e((()=>{s(),F()})),oi=e((()=>{s(),F()})),si=e((()=>{s(),F()})),ci=e((()=>{s(),F()})),li=e((()=>{s(),F()})),ui=e((()=>{s(),F()})),di=e((()=>{s(),F()})),fi=e((()=>{s(),F()})),pi=e((()=>{s(),F()})),mi=e((()=>{s(),F()})),hi=e((()=>{s(),F()})),gi=e((()=>{s(),F()})),_i=e((()=>{s(),F()})),vi=e((()=>{s(),F()})),yi=e((()=>{s(),F()})),bi=e((()=>{s(),F()})),xi=e((()=>{s(),F()})),Si=e((()=>{s(),F()})),Ci=e((()=>{s(),F()})),wi=e((()=>{s(),F()})),Ti=e((()=>{s(),F()})),Ei=e((()=>{s(),F()})),Di=e((()=>{s(),F()})),Oi=e((()=>{s(),F()})),ki=e((()=>{s(),F()})),Ai=e((()=>{s(),F()})),ji=e((()=>{s(),F()})),Mi=e((()=>{s(),F()})),Ni=e((()=>{s(),F()})),Pi=e((()=>{s(),F()})),Fi=e((()=>{s(),F()})),Ii=e((()=>{s(),F()})),Li=e((()=>{s(),F()})),Ri=e((()=>{s(),F()})),zi=e((()=>{s(),F()})),Bi=e((()=>{s(),F()})),Vi=e((()=>{s(),F()})),Hi=e((()=>{s(),F()})),Ui=e((()=>{s(),F()})),Wi=e((()=>{s(),F()})),Gi=e((()=>{s(),F()})),Ki=e((()=>{s(),F()})),qi=e((()=>{s(),F()})),Ji=e((()=>{s(),F()})),Yi=e((()=>{s(),F()})),Xi=e((()=>{s(),F()})),Zi=e((()=>{s(),F()})),Qi=e((()=>{s(),F()})),$i=e((()=>{s(),F()})),ea=e((()=>{s(),F()})),ta=e((()=>{s(),F()})),na=e((()=>{s(),F()})),ra=e((()=>{s(),F()})),ia=e((()=>{s(),F()})),aa=e((()=>{s(),F()})),oa=e((()=>{s(),F()})),sa=e((()=>{s(),F()})),ca=e((()=>{s(),F()})),la=e((()=>{s(),F()})),ua=e((()=>{s(),F()})),da=e((()=>{s(),F()})),fa=e((()=>{s(),F()})),pa=e((()=>{s(),F()})),ma=e((()=>{s(),F()})),ha=e((()=>{s(),F()})),ga=e((()=>{s(),F()})),_a=e((()=>{s(),F()})),va=e((()=>{s(),F()})),ya=e((()=>{s(),F()})),ba=e((()=>{s(),F()})),xa=e((()=>{s(),F()})),Sa=e((()=>{s(),F()})),Ca=e((()=>{s(),F()})),wa=e((()=>{s(),F()})),Ta=e((()=>{s(),F()})),Ea=e((()=>{s(),F()})),Da=e((()=>{s(),F()})),Oa=e((()=>{s(),F()})),ka=e((()=>{s(),F()})),Aa=e((()=>{s(),F()})),ja=e((()=>{s(),F()})),Ma=e((()=>{s(),F()})),Na=e((()=>{s(),F()})),Pa=e((()=>{s(),F()})),Fa=e((()=>{s(),F()})),Ia=e((()=>{s(),F()})),La=e((()=>{s(),F()})),Ra=e((()=>{s(),F()})),za=e((()=>{s(),F()})),Ba=e((()=>{s(),F()})),Va=e((()=>{s(),F()})),Ha=e((()=>{s(),F()})),Ua=e((()=>{s(),F()})),Wa=e((()=>{s(),F()})),Ga=e((()=>{s(),F()})),Ka=e((()=>{s(),F()})),qa=e((()=>{s(),F()})),Ja=e((()=>{s(),F()})),Ya=e((()=>{s(),F()})),Xa=e((()=>{s(),F()})),Za=e((()=>{s(),F()})),Qa=e((()=>{s(),F()})),$a=e((()=>{s(),F()})),eo=e((()=>{s(),F()})),to=e((()=>{s(),F()})),no=e((()=>{s(),F()})),ro=e((()=>{s(),F()})),io=e((()=>{s(),F()})),ao=e((()=>{s(),F()})),oo=e((()=>{s(),F()})),so=e((()=>{s(),F()})),co=e((()=>{s(),F()})),lo=e((()=>{s(),F()})),uo=e((()=>{s(),F()})),fo=e((()=>{s(),F()})),po=e((()=>{s(),F()})),mo=e((()=>{s(),F()})),ho=e((()=>{s(),F()})),go=e((()=>{s(),F()})),_o=e((()=>{s(),F()})),vo=e((()=>{s(),F()})),yo=e((()=>{s(),F()})),bo=e((()=>{s(),F()})),xo=e((()=>{s(),F()})),So=e((()=>{s(),F()})),Co=e((()=>{s(),F()})),wo=e((()=>{s(),F()})),To=e((()=>{s(),F()})),Eo=e((()=>{s(),F()})),Do=e((()=>{s(),F()})),Oo=e((()=>{s(),F()})),ko=e((()=>{s(),F()})),Ao=e((()=>{s(),F()})),jo=e((()=>{s(),F()})),Mo=e((()=>{s(),F()})),No=e((()=>{s(),F()})),Po=e((()=>{s(),F()})),Fo=e((()=>{s(),F()})),Io=e((()=>{s(),F()})),Lo=e((()=>{s(),F()})),Ro=e((()=>{s(),F()})),zo=e((()=>{s(),F()})),Bo=e((()=>{s(),F()})),Vo=e((()=>{s(),F()})),Ho=e((()=>{s(),F()})),Uo=e((()=>{s(),F()})),Wo=e((()=>{s(),F()})),Go=e((()=>{s(),F()})),Ko=e((()=>{s(),F()})),qo=e((()=>{s(),F()})),Jo=e((()=>{s(),F()})),Yo=e((()=>{s(),F()})),Xo=e((()=>{s(),F()})),Zo=e((()=>{s(),F()})),Qo=e((()=>{s(),F()})),$o=e((()=>{s(),F()})),es=e((()=>{s(),F()})),ts=e((()=>{s(),F()})),ns=e((()=>{s(),F()})),rs=e((()=>{s(),F()})),is=e((()=>{s(),F()})),as=e((()=>{s(),F()})),os=e((()=>{s(),F()})),ss=e((()=>{s(),F()})),cs=e((()=>{s(),F()})),ls=e((()=>{s(),F()})),us=e((()=>{s(),F()})),ds=e((()=>{s(),F()})),fs=e((()=>{s(),F()})),ps=e((()=>{s(),F()})),ms=e((()=>{s(),F()})),hs=e((()=>{s(),F()})),gs=e((()=>{s(),F()})),_s=e((()=>{s(),F()})),vs=e((()=>{s(),F()})),ys=e((()=>{s(),F()})),bs=e((()=>{s(),F()})),xs=e((()=>{s(),F()})),Ss=e((()=>{s(),F()})),Cs=e((()=>{s(),F()})),ws=e((()=>{s(),F()})),Ts=e((()=>{s(),F()})),Es=e((()=>{s(),F()})),Ds=e((()=>{s(),F()})),Os=e((()=>{s(),F()})),ks=e((()=>{s(),F()})),As=e((()=>{s(),F()})),js=e((()=>{s(),F()})),Ms=e((()=>{s(),F()})),Ns=e((()=>{s(),F()})),Ps=e((()=>{s(),F()})),Fs=e((()=>{s(),F()})),Is=e((()=>{s(),F()})),Ls=e((()=>{s(),F()})),Rs=e((()=>{s(),F()})),zs=e((()=>{s(),F()})),Bs=e((()=>{s(),F()})),Vs=e((()=>{s(),F()})),Hs=e((()=>{s(),F()})),Us=e((()=>{s(),F()})),Ws=e((()=>{s(),F()})),Gs=e((()=>{s(),F()})),Ks=e((()=>{s(),F()})),qs=e((()=>{s(),F()})),Js=e((()=>{s(),F()})),Ys=e((()=>{s(),F()})),Xs=e((()=>{s(),F()})),Zs=e((()=>{s(),F()})),Qs=e((()=>{s(),F()})),$s=e((()=>{s(),F()})),ec=e((()=>{s(),F()})),tc=e((()=>{s(),F()})),nc=e((()=>{s(),F()})),rc=e((()=>{s(),F()})),ic=e((()=>{s(),F()})),ac=e((()=>{s(),F()})),oc=e((()=>{s(),F()})),sc=e((()=>{s(),F()})),cc=e((()=>{s(),F()})),lc=e((()=>{s(),F()})),uc=e((()=>{s(),F()})),dc=e((()=>{s(),F()})),fc=e((()=>{s(),F()})),pc=e((()=>{s(),F()})),mc=e((()=>{s(),F()})),hc=e((()=>{s(),F()})),gc=e((()=>{s(),F()})),_c=e((()=>{s(),F()})),vc=e((()=>{s(),F()})),yc=e((()=>{s(),F()})),bc=e((()=>{s(),F()})),xc=e((()=>{s(),F()})),Sc=e((()=>{s(),F()})),Cc=e((()=>{s(),F()})),wc=e((()=>{s(),F()})),Tc=e((()=>{s(),F()})),Ec=e((()=>{s(),F()})),Dc=e((()=>{s(),F()})),Oc=e((()=>{s(),F()})),kc=e((()=>{s(),F()})),Ac=e((()=>{s(),F()})),jc=e((()=>{s(),F()})),Mc=e((()=>{s(),F()})),Nc=e((()=>{s(),F()})),Pc=e((()=>{s(),F()})),Fc=e((()=>{s(),F()})),Ic=e((()=>{s(),F()})),Lc=e((()=>{s(),F()})),Rc=e((()=>{s(),F()})),zc=e((()=>{s(),F()})),Bc=e((()=>{s(),F()})),Vc=e((()=>{s(),F()})),Hc=e((()=>{s(),F()})),Uc=e((()=>{s(),F()})),Wc=e((()=>{s(),F()})),Gc=e((()=>{s(),F()})),Kc=e((()=>{s(),F()})),qc=e((()=>{s(),F()})),Jc=e((()=>{s(),F()})),Yc=e((()=>{s(),F()})),Xc=e((()=>{s(),F()})),Zc=e((()=>{s(),F()})),Qc=e((()=>{s(),F()})),$c=e((()=>{s(),F()})),el=e((()=>{s(),F()})),tl=e((()=>{s(),F()})),nl=e((()=>{s(),F()})),rl=e((()=>{s(),F()})),il=e((()=>{s(),F()})),al=e((()=>{s(),F()})),ol=e((()=>{s(),F()})),sl=e((()=>{s(),F()})),cl=e((()=>{s(),F()})),ll=e((()=>{s(),F()})),ul=e((()=>{s(),F()})),dl=e((()=>{s(),F()})),fl=e((()=>{s(),F()})),pl=e((()=>{s(),F()})),ml=e((()=>{s(),F()})),hl=e((()=>{s(),F()})),gl=e((()=>{s(),F()})),_l=e((()=>{s(),F()})),vl=e((()=>{s(),F()})),yl=e((()=>{s(),F()})),bl=e((()=>{s(),F()})),xl=e((()=>{s(),F()})),Sl=e((()=>{s(),F()})),Cl=e((()=>{s(),F()})),wl=e((()=>{s(),F()})),Tl=e((()=>{s(),F()})),El=e((()=>{s(),F()})),Dl=e((()=>{s(),F()})),Ol=e((()=>{s(),F()})),kl=e((()=>{s(),F()})),Al=e((()=>{s(),F()})),jl=e((()=>{s(),F()})),Ml=e((()=>{s(),F()})),Nl=e((()=>{s(),F()})),Pl=e((()=>{s(),F()})),Fl=e((()=>{s(),F()})),Il=e((()=>{s(),F()})),Ll=e((()=>{s(),F()})),Rl=e((()=>{s(),F()})),zl=e((()=>{s(),F()})),Bl=e((()=>{s(),F()})),Vl=e((()=>{s(),F()})),Hl=e((()=>{s(),F()})),Ul=e((()=>{s(),F()})),Wl=e((()=>{s(),F()})),Gl=e((()=>{s(),F()})),Kl=e((()=>{s(),F()})),ql=e((()=>{s(),F()})),Jl=e((()=>{s(),F()})),Yl=e((()=>{s(),F()})),Xl=e((()=>{s(),F()})),Zl=e((()=>{s(),F()})),Ql=e((()=>{s(),F()})),$l=e((()=>{s(),F()})),eu=e((()=>{s(),F()})),tu=e((()=>{s(),F()})),nu=e((()=>{s(),F()})),ru=e((()=>{s(),F()})),iu=e((()=>{s(),F()})),au=e((()=>{s(),F()})),ou=e((()=>{s(),F()})),su=e((()=>{s(),F()})),cu=e((()=>{s(),F()})),lu=e((()=>{s(),F()})),uu=e((()=>{s(),F()})),du=e((()=>{s(),F()})),fu=e((()=>{s(),F()})),pu=e((()=>{s(),F()})),mu=e((()=>{s(),F()})),hu=e((()=>{s(),F()})),gu=e((()=>{s(),F()})),_u=e((()=>{s(),F()})),vu=e((()=>{s(),F()})),yu=e((()=>{s(),F()})),bu=e((()=>{s(),F()})),xu=e((()=>{s(),F()})),Su=e((()=>{s(),F()})),Cu=e((()=>{s(),F()})),wu=e((()=>{s(),F()})),Tu=e((()=>{s(),F()})),Eu=e((()=>{s(),F()})),Du=e((()=>{s(),F()})),Ou=e((()=>{s(),F()})),ku=e((()=>{s(),F()})),Au=e((()=>{s(),F()})),ju=e((()=>{s(),F()})),Mu=e((()=>{s(),F()})),Nu=e((()=>{s(),F()})),Pu=e((()=>{s(),F()})),Fu=e((()=>{s(),F()})),Iu=e((()=>{s(),F()})),Lu=e((()=>{s(),F()})),Ru=e((()=>{s(),F()})),zu=e((()=>{s(),F()})),Bu=e((()=>{s(),F()})),Vu=e((()=>{s(),F()})),Hu=e((()=>{s(),F()})),Uu=e((()=>{s(),F()})),Wu=e((()=>{s(),F()})),Gu=e((()=>{s(),F()})),Ku=e((()=>{s(),F()})),qu=e((()=>{s(),F()})),Ju=e((()=>{s(),F()})),Yu=e((()=>{s(),F()})),Xu=e((()=>{s(),F()})),Zu=e((()=>{s(),F()})),Qu=e((()=>{s(),F()})),$u=e((()=>{s(),F()})),ed=e((()=>{s(),F()})),td=e((()=>{s(),F()})),nd=e((()=>{s(),F()})),rd=e((()=>{s(),F()})),id=e((()=>{s(),F()})),ad=e((()=>{s(),F()})),od=e((()=>{s(),F()})),sd=e((()=>{s(),F()})),cd=e((()=>{s(),F()})),ld=e((()=>{s(),F()})),ud=e((()=>{s(),F()})),dd=e((()=>{s(),F()})),fd=e((()=>{s(),F()})),pd=e((()=>{s(),F()})),md=e((()=>{s(),F()})),hd=e((()=>{s(),F()})),gd,_d=e((()=>{s(),F(),Rr(),gd=({slot:e,title:t,className:r,width:i=`24`,height:o=`24`,styles:s}={})=>a`
  <svg
    slot=${P(e)}
    class=${`dots-vertical-icon ${r??``}`}
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    focusable="false"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    width=${i}
    height=${o}
    style=${P(s)}
  >
    ${Lr(t,()=>n`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})),vd=e((()=>{s(),F()})),yd=e((()=>{s(),F()})),bd=e((()=>{s(),F()})),xd=e((()=>{s(),F()})),Sd=e((()=>{s(),F()})),Cd=e((()=>{s(),F()})),wd=e((()=>{s(),F()})),Td=e((()=>{s(),F()})),Ed=e((()=>{s(),F()})),Dd=e((()=>{s(),F()})),Od=e((()=>{s(),F()})),kd=e((()=>{s(),F()})),Ad=e((()=>{s(),F()})),jd=e((()=>{s(),F()})),Md=e((()=>{s(),F()})),Nd=e((()=>{s(),F()})),Pd=e((()=>{s(),F()})),Fd=e((()=>{s(),F()})),Id=e((()=>{s(),F()})),Ld=e((()=>{s(),F()})),Rd=e((()=>{s(),F()})),zd=e((()=>{s(),F()})),Bd=e((()=>{s(),F()})),Vd=e((()=>{s(),F()})),Hd=e((()=>{s(),F()})),Ud=e((()=>{s(),F()})),Wd=e((()=>{s(),F()})),Gd=e((()=>{s(),F()})),Kd=e((()=>{s(),F()})),qd=e((()=>{s(),F()})),Jd=e((()=>{s(),F()})),Yd=e((()=>{s(),F()})),Xd=e((()=>{s(),F()})),Zd=e((()=>{s(),F()})),Qd=e((()=>{s(),F()})),$d=e((()=>{s(),F()})),ef=e((()=>{s(),F()})),tf=e((()=>{s(),F()})),nf=e((()=>{s(),F()})),rf=e((()=>{s(),F()})),af=e((()=>{s(),F()})),of=e((()=>{s(),F()})),sf=e((()=>{s(),F()})),cf=e((()=>{s(),F()})),lf=e((()=>{s(),F()})),uf=e((()=>{s(),F()})),df=e((()=>{s(),F()})),ff=e((()=>{s(),F()})),pf=e((()=>{s(),F()})),mf=e((()=>{s(),F()})),hf=e((()=>{s(),F()})),gf=e((()=>{s(),F()})),_f=e((()=>{s(),F()})),vf=e((()=>{s(),F()})),yf=e((()=>{s(),F()})),bf=e((()=>{s(),F()})),xf=e((()=>{s(),F()})),Sf=e((()=>{s(),F()})),Cf=e((()=>{s(),F()})),wf=e((()=>{s(),F()})),Tf=e((()=>{s(),F()})),Ef=e((()=>{s(),F()})),Df=e((()=>{s(),F()})),Of=e((()=>{s(),F()})),kf=e((()=>{s(),F()})),Af=e((()=>{s(),F()})),jf=e((()=>{s(),F()})),Mf=e((()=>{s(),F()})),Nf=e((()=>{s(),F()})),Pf=e((()=>{s(),F()})),Ff=e((()=>{s(),F()})),If=e((()=>{s(),F()})),Lf=e((()=>{s(),F()})),Rf=e((()=>{s(),F()})),zf=e((()=>{s(),F()})),Bf=e((()=>{s(),F()})),Vf=e((()=>{s(),F()})),Hf=e((()=>{s(),F()})),Uf=e((()=>{s(),F()})),Wf=e((()=>{s(),F()})),Gf=e((()=>{s(),F()})),Kf=e((()=>{s(),F()})),qf=e((()=>{s(),F()})),Jf=e((()=>{s(),F()})),Yf=e((()=>{s(),F()})),Xf=e((()=>{s(),F()})),Zf=e((()=>{s(),F()})),Qf=e((()=>{s(),F()})),$f=e((()=>{s(),F()})),ep=e((()=>{s(),F()})),tp=e((()=>{s(),F()})),np=e((()=>{s(),F()})),rp=e((()=>{s(),F()})),ip=e((()=>{s(),F()})),ap=e((()=>{s(),F()})),op=e((()=>{s(),F()})),sp=e((()=>{s(),F()})),cp=e((()=>{s(),F()})),lp=e((()=>{s(),F()})),up=e((()=>{s(),F()})),dp=e((()=>{s(),F()})),fp=e((()=>{s(),F()})),pp=e((()=>{s(),F()})),mp=e((()=>{s(),F()})),hp=e((()=>{s(),F()})),gp=e((()=>{s(),F()})),_p=e((()=>{s(),F()})),vp=e((()=>{s(),F()})),yp=e((()=>{s(),F()})),bp=e((()=>{s(),F()})),xp=e((()=>{s(),F()})),Sp=e((()=>{s(),F()})),Cp=e((()=>{s(),F()})),wp=e((()=>{s(),F()})),Tp=e((()=>{s(),F()})),Ep=e((()=>{s(),F()})),Dp=e((()=>{s(),F()})),Op=e((()=>{s(),F()})),kp=e((()=>{s(),F()})),Ap=e((()=>{s(),F()})),jp=e((()=>{s(),F()})),Mp=e((()=>{s(),F()})),Np=e((()=>{s(),F()})),Pp=e((()=>{s(),F()})),Fp=e((()=>{s(),F()})),Ip=e((()=>{s(),F()})),Lp=e((()=>{s(),F()})),Rp=e((()=>{s(),F()})),zp=e((()=>{s(),F()})),Bp=e((()=>{s(),F()})),Vp=e((()=>{s(),F()})),Hp=e((()=>{s(),F()})),Up=e((()=>{s(),F()})),Wp=e((()=>{s(),F()})),Gp=e((()=>{s(),F()})),Kp=e((()=>{s(),F()})),qp=e((()=>{s(),F()})),Jp=e((()=>{s(),F()})),Yp=e((()=>{s(),F()})),Xp=e((()=>{s(),F()})),Zp=e((()=>{s(),F()})),Qp=e((()=>{s(),F()})),$p=e((()=>{s(),F()})),em=e((()=>{s(),F()})),tm=e((()=>{s(),F()})),nm=e((()=>{s(),F()})),rm=e((()=>{s(),F()})),im=e((()=>{s(),F()})),am=e((()=>{s(),F()})),om=e((()=>{s(),F()})),sm=e((()=>{s(),F()})),cm=e((()=>{s(),F()})),lm=e((()=>{s(),F()})),um=e((()=>{s(),F()})),dm=e((()=>{s(),F()})),fm=e((()=>{s(),F()})),pm=e((()=>{s(),F()})),mm=e((()=>{s(),F()})),hm=e((()=>{s(),F()})),gm=e((()=>{s(),F()})),_m=e((()=>{s(),F()})),vm=e((()=>{s(),F()})),ym=e((()=>{s(),F()})),bm=e((()=>{s(),F()})),xm=e((()=>{s(),F()})),Sm=e((()=>{s(),F()})),Cm=e((()=>{s(),F()})),wm=e((()=>{s(),F()})),Tm=e((()=>{s(),F()})),Em=e((()=>{s(),F()})),Dm=e((()=>{s(),F()})),Om=e((()=>{s(),F()})),km=e((()=>{s(),F()})),Am=e((()=>{s(),F()})),jm=e((()=>{s(),F()})),Mm=e((()=>{s(),F()})),Nm=e((()=>{s(),F()})),Pm=e((()=>{s(),F()})),Fm=e((()=>{s(),F()})),Im=e((()=>{s(),F()})),Lm=e((()=>{s(),F()})),Rm=e((()=>{s(),F()})),zm=e((()=>{s(),F()})),Bm=e((()=>{s(),F()})),Vm=e((()=>{s(),F()})),Hm=e((()=>{s(),F()})),Um=e((()=>{s(),F()})),Wm=e((()=>{s(),F()})),Gm=e((()=>{s(),F()})),Km=e((()=>{s(),F()})),qm=e((()=>{s(),F()})),Jm=e((()=>{s(),F()})),Ym=e((()=>{s(),F()})),Xm=e((()=>{s(),F()})),Zm=e((()=>{s(),F()})),Qm=e((()=>{s(),F()})),$m=e((()=>{s(),F()})),eh=e((()=>{s(),F()})),th=e((()=>{s(),F()})),nh=e((()=>{s(),F()})),rh=e((()=>{s(),F()})),ih=e((()=>{s(),F()})),ah=e((()=>{s(),F()})),oh=e((()=>{s(),F()})),sh=e((()=>{s(),F()})),ch=e((()=>{s(),F()})),lh=e((()=>{s(),F()})),uh=e((()=>{s(),F()})),dh=e((()=>{s(),F()})),fh=e((()=>{s(),F()})),ph=e((()=>{s(),F()})),mh=e((()=>{s(),F()})),hh=e((()=>{s(),F()})),gh=e((()=>{s(),F()})),_h=e((()=>{s(),F()})),vh=e((()=>{s(),F()})),yh=e((()=>{s(),F()})),bh=e((()=>{s(),F()})),xh=e((()=>{s(),F()})),Sh=e((()=>{s(),F()})),Ch=e((()=>{s(),F()})),wh=e((()=>{s(),F()})),Th=e((()=>{s(),F()})),Eh=e((()=>{s(),F()})),Dh=e((()=>{s(),F()})),Oh=e((()=>{s(),F()})),kh=e((()=>{s(),F()})),Ah=e((()=>{s(),F()})),jh=e((()=>{s(),F()})),Mh=e((()=>{s(),F()})),Nh=e((()=>{s(),F()})),Ph=e((()=>{s(),F()})),Fh=e((()=>{s(),F()})),Ih=e((()=>{s(),F()})),Lh=e((()=>{s(),F()})),Rh=e((()=>{s(),F()})),zh=e((()=>{s(),F()})),Bh=e((()=>{s(),F()})),Vh=e((()=>{s(),F()})),Hh=e((()=>{s(),F()})),Uh=e((()=>{s(),F()})),Wh=e((()=>{s(),F()})),Gh=e((()=>{s(),F()})),Kh=e((()=>{s(),F()})),qh=e((()=>{s(),F()})),Jh=e((()=>{s(),F()})),Yh=e((()=>{s(),F()})),Xh=e((()=>{s(),F()})),Zh=e((()=>{s(),F()})),Qh=e((()=>{s(),F()})),$h=e((()=>{s(),F()})),eg=e((()=>{s(),F()})),tg=e((()=>{s(),F()})),ng=e((()=>{s(),F()})),rg=e((()=>{s(),F()})),ig=e((()=>{s(),F()})),ag=e((()=>{s(),F()})),og=e((()=>{s(),F()})),sg=e((()=>{s(),F()})),cg=e((()=>{s(),F()})),lg=e((()=>{s(),F()})),ug=e((()=>{s(),F()})),dg=e((()=>{s(),F()})),fg=e((()=>{s(),F()})),pg=e((()=>{s(),F()})),mg=e((()=>{s(),F()})),hg=e((()=>{s(),F()})),gg=e((()=>{s(),F()})),_g=e((()=>{s(),F()})),vg=e((()=>{s(),F()})),yg=e((()=>{s(),F()})),bg=e((()=>{s(),F()})),xg=e((()=>{s(),F()})),Sg=e((()=>{s(),F()})),Cg=e((()=>{s(),F()})),wg=e((()=>{s(),F()})),Tg=e((()=>{s(),F()})),Eg=e((()=>{s(),F()})),Dg=e((()=>{s(),F()})),Og=e((()=>{s(),F()})),kg=e((()=>{s(),F()})),Ag=e((()=>{s(),F()})),jg=e((()=>{s(),F()})),Mg=e((()=>{s(),F()})),Ng=e((()=>{s(),F()})),Pg=e((()=>{s(),F()})),Fg=e((()=>{s(),F()})),Ig=e((()=>{s(),F()})),Lg=e((()=>{s(),F()})),Rg=e((()=>{s(),F()})),zg=e((()=>{s(),F()})),Bg=e((()=>{s(),F()})),Vg=e((()=>{s(),F()})),Hg=e((()=>{s(),F()})),Ug=e((()=>{s(),F()})),Wg=e((()=>{s(),F()})),Gg=e((()=>{s(),F()})),Kg=e((()=>{s(),F()})),qg=e((()=>{s(),F()})),Jg=e((()=>{s(),F()})),Yg=e((()=>{s(),F()})),Xg=e((()=>{s(),F()})),Zg=e((()=>{s(),F()})),Qg=e((()=>{s(),F()})),$g=e((()=>{s(),F()})),e_=e((()=>{s(),F()})),t_=e((()=>{s(),F()})),n_=e((()=>{s(),F()})),r_=e((()=>{s(),F()})),i_=e((()=>{s(),F()})),a_=e((()=>{s(),F()})),o_=e((()=>{s(),F()})),s_=e((()=>{s(),F()})),c_=e((()=>{s(),F()})),l_=e((()=>{s(),F()})),u_=e((()=>{s(),F()})),d_=e((()=>{s(),F()})),f_=e((()=>{s(),F()})),p_=e((()=>{s(),F()})),m_=e((()=>{s(),F()})),h_=e((()=>{s(),F()})),g_=e((()=>{s(),F()})),__=e((()=>{s(),F()})),v_=e((()=>{s(),F()})),y_=e((()=>{s(),F()})),b_=e((()=>{s(),F()})),x_=e((()=>{s(),F()})),S_=e((()=>{s(),F()})),C_=e((()=>{s(),F()})),w_=e((()=>{s(),F()})),T_=e((()=>{s(),F()})),E_=e((()=>{s(),F()})),D_=e((()=>{s(),F()})),O_=e((()=>{s(),F()})),k_=e((()=>{s(),F()})),A_=e((()=>{s(),F()})),j_=e((()=>{s(),F()})),M_=e((()=>{s(),F()})),N_=e((()=>{s(),F()})),P_=e((()=>{s(),F()})),F_=e((()=>{s(),F()})),I_=e((()=>{s(),F()})),L_=e((()=>{s(),F()})),R_=e((()=>{s(),F()})),z_=e((()=>{s(),F()})),B_=e((()=>{s(),F()})),V_=e((()=>{s(),F()})),H_=e((()=>{s(),F()})),U_=e((()=>{s(),F()})),W_=e((()=>{s(),F()})),G_=e((()=>{s(),F()})),K_=e((()=>{s(),F()})),q_=e((()=>{s(),F()})),J_=e((()=>{s(),F()})),Y_=e((()=>{s(),F()})),X_=e((()=>{s(),F()})),Z_=e((()=>{s(),F()})),Q_=e((()=>{s(),F()})),$_=e((()=>{s(),F()})),ev=e((()=>{s(),F()})),tv=e((()=>{s(),F()})),nv=e((()=>{s(),F()})),rv=e((()=>{s(),F()})),iv=e((()=>{s(),F()})),av=e((()=>{s(),F()})),ov=e((()=>{s(),F()})),sv=e((()=>{s(),F()})),cv=e((()=>{s(),F()})),lv=e((()=>{s(),F()})),uv=e((()=>{s(),F()})),dv=e((()=>{s(),F()})),fv=e((()=>{s(),F()})),pv=e((()=>{s(),F()})),mv=e((()=>{s(),F()})),hv=e((()=>{s(),F()})),gv=e((()=>{s(),F()})),_v=e((()=>{s(),F()})),vv=e((()=>{s(),F()})),yv=e((()=>{s(),F()})),bv=e((()=>{s(),F()})),xv=e((()=>{s(),F()})),Sv=e((()=>{s(),F()})),Cv=e((()=>{s(),F()})),wv=e((()=>{s(),F()})),Tv=e((()=>{s(),F()})),Ev=e((()=>{s(),F()})),Dv=e((()=>{s(),F()})),Ov=e((()=>{s(),F()})),kv=e((()=>{s(),F()})),Av=e((()=>{s(),F()})),jv=e((()=>{s(),F()})),Mv=e((()=>{s(),F()})),Nv=e((()=>{s(),F()})),Pv=e((()=>{s(),F()})),Fv=e((()=>{s(),F()})),Iv=e((()=>{s(),F()})),Lv=e((()=>{s(),F()})),Rv=e((()=>{s(),F()})),zv=e((()=>{s(),F()})),Bv=e((()=>{s(),F()})),Vv=e((()=>{s(),F()})),Hv=e((()=>{s(),F()})),Uv=e((()=>{s(),F()})),Wv=e((()=>{s(),F()})),Gv=e((()=>{s(),F()})),Kv=e((()=>{s(),F()})),qv=e((()=>{s(),F()})),Jv=e((()=>{s(),F()})),Yv=e((()=>{s(),F()})),Xv=e((()=>{s(),F()})),Zv=e((()=>{s(),F()})),Qv=e((()=>{s(),F()})),$v=e((()=>{s(),F()})),ey=e((()=>{s(),F()})),ty=e((()=>{s(),F()})),ny=e((()=>{s(),F()})),ry=e((()=>{s(),F()})),iy=e((()=>{s(),F()})),ay=e((()=>{s(),F()})),oy=e((()=>{s(),F()})),sy=e((()=>{s(),F()})),cy=e((()=>{s(),F()})),ly=e((()=>{s(),F()})),uy=e((()=>{s(),F()})),dy=e((()=>{s(),F()})),fy=e((()=>{s(),F()})),py=e((()=>{s(),F()})),my=e((()=>{s(),F()})),hy=e((()=>{s(),F()})),gy=e((()=>{s(),F()})),_y=e((()=>{s(),F()})),vy=e((()=>{s(),F()})),yy=e((()=>{s(),F()})),by=e((()=>{s(),F()})),xy=e((()=>{s(),F()})),Sy=e((()=>{s(),F()})),Cy=e((()=>{s(),F()})),wy=e((()=>{s(),F()})),Ty=e((()=>{s(),F()})),Ey=e((()=>{s(),F()})),Dy=e((()=>{s(),F()})),Oy=e((()=>{s(),F()})),ky=e((()=>{s(),F()})),Ay=e((()=>{s(),F()})),jy=e((()=>{s(),F()})),My=e((()=>{s(),F()})),Ny=e((()=>{s(),F()})),Py=e((()=>{s(),F()})),Fy=e((()=>{s(),F()})),Iy=e((()=>{s(),F()})),Ly=e((()=>{s(),F()})),Ry=e((()=>{s(),F()})),zy=e((()=>{s(),F()})),By=e((()=>{s(),F()})),Vy=e((()=>{s(),F()})),Hy=e((()=>{s(),F()})),Uy=e((()=>{s(),F()})),Wy=e((()=>{s(),F()})),Gy=e((()=>{s(),F()})),Ky=e((()=>{s(),F()})),qy=e((()=>{s(),F()})),Jy=e((()=>{s(),F()})),Yy=e((()=>{s(),F()})),Xy=e((()=>{s(),F()})),Zy=e((()=>{s(),F()})),Qy=e((()=>{s(),F()})),$y=e((()=>{s(),F()})),eb=e((()=>{s(),F()})),tb=e((()=>{s(),F()})),nb=e((()=>{s(),F()})),rb=e((()=>{s(),F()})),ib=e((()=>{s(),F()})),ab=e((()=>{s(),F()})),ob=e((()=>{s(),F()})),sb=e((()=>{s(),F()})),cb=e((()=>{s(),F()})),lb=e((()=>{s(),F()})),ub=e((()=>{s(),F()})),db=e((()=>{s(),F()})),fb=e((()=>{s(),F()})),pb=e((()=>{s(),F()})),mb=e((()=>{s(),F()})),hb=e((()=>{s(),F()})),gb=e((()=>{s(),F()})),_b=e((()=>{s(),F()})),vb=e((()=>{s(),F()})),yb=e((()=>{s(),F()})),bb=e((()=>{s(),F()})),xb=e((()=>{s(),F()})),Sb=e((()=>{s(),F()})),Cb=e((()=>{s(),F()})),wb=e((()=>{s(),F()})),Tb=e((()=>{s(),F()})),Eb=e((()=>{s(),F()})),Db=e((()=>{s(),F()})),Ob=e((()=>{s(),F()})),kb=e((()=>{s(),F()})),Ab=e((()=>{s(),F()})),jb=e((()=>{s(),F()})),Mb=e((()=>{s(),F()})),Nb=e((()=>{s(),F()})),Pb=e((()=>{s(),F()})),Fb=e((()=>{s(),F()})),Ib=e((()=>{s(),F()})),Lb=e((()=>{s(),F()})),Rb=e((()=>{s(),F()})),zb=e((()=>{s(),F()})),Bb=e((()=>{s(),F()})),Vb=e((()=>{s(),F()})),Hb=e((()=>{s(),F()})),Ub=e((()=>{s(),F()})),Wb=e((()=>{s(),F()})),Gb=e((()=>{s(),F()})),Kb=e((()=>{s(),F()})),qb=e((()=>{s(),F()})),Jb=e((()=>{s(),F()})),Yb=e((()=>{s(),F()})),Xb=e((()=>{s(),F()})),Zb=e((()=>{s(),F()})),Qb=e((()=>{s(),F()})),$b=e((()=>{s(),F()})),ex=e((()=>{s(),F()})),tx=e((()=>{s(),F()})),nx=e((()=>{s(),F()})),rx=e((()=>{s(),F()})),ix=e((()=>{s(),F()})),ax=e((()=>{s(),F()})),ox=e((()=>{s(),F()})),sx=e((()=>{s(),F()})),cx=e((()=>{s(),F()})),lx=e((()=>{s(),F()})),ux=e((()=>{s(),F()})),dx=e((()=>{s(),F()})),fx=e((()=>{s(),F()})),px=e((()=>{s(),F()})),mx=e((()=>{s(),F()})),hx=e((()=>{s(),F()})),gx=e((()=>{s(),F()})),_x=e((()=>{s(),F()})),vx=e((()=>{s(),F()})),yx=e((()=>{s(),F()})),bx=e((()=>{s(),F()})),xx=e((()=>{s(),F()})),Sx=e((()=>{s(),F()})),Cx=e((()=>{s(),F()})),wx=e((()=>{s(),F()})),Tx=e((()=>{s(),F()})),Ex=e((()=>{s(),F()})),Dx=e((()=>{s(),F()})),Ox=e((()=>{s(),F()})),kx=e((()=>{s(),F()})),Ax=e((()=>{s(),F()})),jx=e((()=>{s(),F()})),Mx=e((()=>{s(),F()})),Nx=e((()=>{s(),F()})),Px=e((()=>{s(),F()})),Fx=e((()=>{s(),F()})),Ix=e((()=>{s(),F()})),Lx=e((()=>{s(),F()})),Rx=e((()=>{s(),F()})),zx=e((()=>{s(),F()})),Bx=e((()=>{s(),F()})),Vx=e((()=>{s(),F()})),Hx=e((()=>{s(),F()})),Ux=e((()=>{s(),F()})),Wx=e((()=>{s(),F()})),Gx=e((()=>{s(),F()})),Kx=e((()=>{s(),F()})),qx=e((()=>{s(),F()})),Jx=e((()=>{s(),F()})),Yx=e((()=>{s(),F()})),Xx=e((()=>{s(),F()})),Zx=e((()=>{s(),F()})),Qx=e((()=>{s(),F()})),$x=e((()=>{s(),F()})),eS=e((()=>{s(),F()})),tS=e((()=>{s(),F()})),nS=e((()=>{s(),F()})),rS=e((()=>{s(),F()})),iS=e((()=>{s(),F()})),aS=e((()=>{s(),F()})),oS=e((()=>{s(),F()})),sS=e((()=>{s(),F()})),cS=e((()=>{s(),F()})),lS=e((()=>{s(),F()})),uS=e((()=>{s(),F()})),dS=e((()=>{s(),F()})),fS=e((()=>{s(),F()})),pS=e((()=>{s(),F()})),mS=e((()=>{s(),F()})),hS=e((()=>{s(),F()})),gS=e((()=>{s(),F()})),_S=e((()=>{s(),F()})),vS=e((()=>{s(),F()})),yS=e((()=>{s(),F()})),bS=e((()=>{s(),F()})),xS=e((()=>{s(),F()})),SS=e((()=>{s(),F()})),CS=e((()=>{s(),F()})),wS=e((()=>{s(),F()})),TS=e((()=>{s(),F()})),ES=e((()=>{s(),F()})),DS=e((()=>{s(),F()})),OS=e((()=>{s(),F()})),kS=e((()=>{s(),F()})),AS=e((()=>{s(),F()})),jS=e((()=>{s(),F()})),MS=e((()=>{s(),F()})),NS=e((()=>{s(),F()})),PS=e((()=>{s(),F()})),FS=e((()=>{s(),F()})),IS=e((()=>{s(),F()})),LS=e((()=>{s(),F()})),RS=e((()=>{s(),F()})),zS=e((()=>{s(),F()})),BS=e((()=>{s(),F()})),VS=e((()=>{s(),F()})),HS=e((()=>{s(),F()})),US=e((()=>{s(),F()})),WS=e((()=>{s(),F()})),GS=e((()=>{s(),F()})),KS=e((()=>{s(),F()})),qS=e((()=>{s(),F()})),JS=e((()=>{s(),F()})),YS=e((()=>{s(),F()})),XS=e((()=>{s(),F()})),ZS=e((()=>{s(),F()})),QS=e((()=>{s(),F()})),$S=e((()=>{s(),F()})),eC=e((()=>{s(),F()})),tC=e((()=>{s(),F()})),nC=e((()=>{s(),F()})),rC=e((()=>{s(),F()})),iC=e((()=>{s(),F()})),aC=e((()=>{s(),F()})),oC=e((()=>{s(),F()})),sC=e((()=>{s(),F()})),cC=e((()=>{s(),F()})),lC=e((()=>{s(),F()})),uC=e((()=>{s(),F()})),dC=e((()=>{s(),F()})),fC=e((()=>{s(),F()})),pC=e((()=>{s(),F()})),mC=e((()=>{s(),F()})),hC=e((()=>{s(),F()})),gC=e((()=>{s(),F()})),_C=e((()=>{s(),F()})),vC=e((()=>{s(),F()})),yC=e((()=>{s(),F()})),bC=e((()=>{s(),F()})),xC=e((()=>{s(),F()})),SC=e((()=>{s(),F()})),CC=e((()=>{s(),F()})),wC=e((()=>{s(),F()})),TC=e((()=>{s(),F()})),EC=e((()=>{s(),F()})),DC=e((()=>{s(),F()})),OC=e((()=>{s(),F()})),kC=e((()=>{s(),F()})),AC=e((()=>{s(),F()})),jC=e((()=>{s(),F()})),MC=e((()=>{s(),F()})),NC=e((()=>{s(),F()})),PC=e((()=>{s(),F()})),FC=e((()=>{s(),F()})),IC=e((()=>{s(),F()})),LC=e((()=>{s(),F()})),RC=e((()=>{s(),F()})),zC=e((()=>{s(),F()})),BC=e((()=>{s(),F()})),VC=e((()=>{s(),F()})),HC=e((()=>{s(),F()})),UC=e((()=>{s(),F()})),WC=e((()=>{s(),F()})),GC=e((()=>{s(),F()})),KC=e((()=>{s(),F()})),qC=e((()=>{s(),F()})),JC=e((()=>{s(),F()})),YC=e((()=>{s(),F()})),XC=e((()=>{s(),F()})),ZC=e((()=>{s(),F()})),QC=e((()=>{s(),F()})),$C=e((()=>{s(),F()})),ew=e((()=>{s(),F()})),tw=e((()=>{s(),F()})),nw=e((()=>{s(),F()})),rw=e((()=>{s(),F()})),iw=e((()=>{s(),F()})),aw=e((()=>{s(),F()})),ow=e((()=>{s(),F()})),sw=e((()=>{s(),F()})),cw=e((()=>{s(),F()})),lw=e((()=>{s(),F()})),uw=e((()=>{s(),F()})),dw=e((()=>{s(),F()})),fw=e((()=>{s(),F()})),pw=e((()=>{s(),F()})),mw=e((()=>{s(),F()})),hw=e((()=>{s(),F()})),gw=e((()=>{s(),F()})),_w=e((()=>{s(),F()})),vw=e((()=>{s(),F()})),yw=e((()=>{s(),F()})),bw=e((()=>{s(),F()})),xw=e((()=>{s(),F()})),Sw=e((()=>{s(),F()})),Cw=e((()=>{s(),F()})),ww=e((()=>{s(),F()})),Tw=e((()=>{s(),F()})),Ew=e((()=>{s(),F()})),Dw=e((()=>{s(),F()})),Ow=e((()=>{s(),F()})),kw=e((()=>{s(),F()})),Aw=e((()=>{s(),F()})),jw=e((()=>{s(),F()})),Mw=e((()=>{s(),F()})),Nw=e((()=>{s(),F()})),Pw=e((()=>{s(),F()})),Fw=e((()=>{s(),F()})),Iw=e((()=>{s(),F()})),Lw=e((()=>{s(),F()})),Rw=e((()=>{s(),F()})),zw=e((()=>{s(),F()})),Bw=e((()=>{s(),F()})),Vw=e((()=>{s(),F()})),Hw=e((()=>{s(),F()})),Uw=e((()=>{s(),F()})),Ww=e((()=>{s(),F()})),Gw=e((()=>{s(),F()})),Kw=e((()=>{s(),F()})),qw=e((()=>{s(),F()})),Jw=e((()=>{s(),F()})),Yw=e((()=>{s(),F()})),Xw=e((()=>{s(),F()})),Zw=e((()=>{s(),F()})),Qw=e((()=>{s(),F()})),$w=e((()=>{s(),F()})),eT=e((()=>{s(),F()})),tT=e((()=>{s(),F()})),nT=e((()=>{s(),F()})),rT=e((()=>{s(),F()})),iT=e((()=>{s(),F()})),aT=e((()=>{s(),F()})),oT=e((()=>{s(),F()})),sT=e((()=>{s(),F()})),cT=e((()=>{s(),F()})),lT=e((()=>{s(),F()})),uT=e((()=>{s(),F()})),dT=e((()=>{s(),F()})),fT=e((()=>{s(),F()})),pT=e((()=>{s(),F()})),mT=e((()=>{s(),F()})),hT=e((()=>{s(),F()})),gT=e((()=>{s(),F()})),_T=e((()=>{s(),F()})),vT=e((()=>{s(),F()})),yT=e((()=>{s(),F()})),bT=e((()=>{s(),F()})),xT=e((()=>{s(),F()})),ST=e((()=>{s(),F()})),CT=e((()=>{s(),F()})),wT=e((()=>{s(),F()})),TT=e((()=>{s(),F()})),ET=e((()=>{s(),F()})),DT=e((()=>{zr(),Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET()}));function OT(e){return()=>e}var kT,AT,jT=e((()=>{kT=OT(),AT=kT})),MT,NT=e((()=>{N(),jT(),MT=it(()=>AT),customElements.define(`cosmoz-keybinding-provider`,MT.Provider)})),PT,FT=e((()=>{N(),NT(),_r(),PT=(e,t)=>{let n=Ce(MT),r=gr(e);O(()=>n(r),t)}})),q=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function IT(e,t){if(e&&BT.test(e)||e===`//`)return e;if(VT===void 0){VT=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,VT=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,VT)try{return new URL(e,t).href}catch{return e}return J||(J=document.implementation.createHTMLDocument(`temp`),J.base=J.createElement(`base`),J.head.appendChild(J.base),J.anchor=J.createElement(`a`),J.body.appendChild(J.anchor)),J.base.href=t,J.anchor.href=e,J.anchor.href||e}function LT(e,t){return e.replace(zT,function(e,n,r,i){return n+`'`+IT(r.replace(/["']/g,``),t)+`'`+i})}function RT(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var zT,BT,VT,J,HT=e((()=>{q(),zT=/(url\()([^)]*)(\))/g,BT=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),UT,WT,GT,KT,qT,JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE=e((()=>{q(),HT(),UT=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,WT=UT&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),GT=window.Polymer&&window.Polymer.rootPath||RT(document.baseURI||window.location.href),KT=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,qT=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,JT=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,YT=window.Polymer&&window.Polymer.legacyOptimizations||!1,XT=window.Polymer&&window.Polymer.legacyWarnings||!1,ZT=window.Polymer&&window.Polymer.syncInitialRender||!1,QT=window.Polymer&&window.Polymer.legacyUndefined||!1,$T=window.Polymer&&window.Polymer.orderedComputed||!1,eE=window.Polymer&&window.Polymer.removeNestedTemplates||!1,tE=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,nE=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function iE(){}var aE,Y,oE=e((()=>{q(),aE=0,iE.prototype.__mixinApplications,iE.prototype.__mixinSet,Y=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=aE++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function sE(e,t){uE[e]=dE[e.toLowerCase()]=t}function cE(e){return uE[e]||dE[e.toLowerCase()]}function lE(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var uE,dE,fE,pE=e((()=>{q(),HT(),rE(),uE={},dE={},fE=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=cE(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=IT(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=RT(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(qT&&cE(e)!==void 0)throw sE(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,sE(e,this),lE(this)}}},fE.prototype.modules=uE,customElements.define(`dom-module`,fE)}));function mE(e){return fE.import(e)}function hE(e){let t=LT((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function gE(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(..._E(t[e]));return n}function _E(e){let t=mE(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...bE(t));let n=t.querySelector(`template`);n&&e.push(...vE(n,t.assetpath)),t._styles=e}return t._styles}function vE(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(SE);a&&n.push(...gE(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=LT(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function yE(e){let t=mE(e);return t?bE(t):[]}function bE(e){let t=[],n=e.querySelectorAll(xE);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(CE);if(n&&!e._unscopedStyle){let t=hE(e);t.setAttribute(CE,``),e._unscopedStyle=t}else e._style||=hE(e);t.push(n?e._unscopedStyle:e._style)}}return t}var xE,SE,CE,wE=e((()=>{pE(),HT(),xE=`link[rel=import][type~=css]`,SE=`include`,CE=`shady-unscoped`})),X,TE=e((()=>{X=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function EE(e){return e.indexOf(`.`)>=0}function Z(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function DE(e,t){return e.indexOf(t+`.`)===0}function OE(e,t){return t.indexOf(e+`.`)===0}function kE(e,t,n){return t+n.slice(e.length)}function AE(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function jE(e){return Array.isArray(e)?AE(e).split(`.`):e.toString().split(`.`)}function Q(e,t,n){let r=e,i=jE(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function ME(e,t,n){let r=e,i=jE(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var NE=e((()=>{q()}));function PE(e){return IE[e]||(IE[e]=e.indexOf(`-`)<0?e:e.replace(LE,e=>e[1].toUpperCase()))}function FE(e){return IE[e]||(IE[e]=e.replace(RE,`-$1`).toLowerCase())}var IE,LE,RE,zE=e((()=>{q(),IE={},LE=/-[a-z]/g,RE=/([A-Z])/g}));function BE(){GE=!1;let e=UE.length;for(let t=0;t<e;t++){let e=UE[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}UE.splice(0,e),HE+=e}var VE,HE,UE,WE,GE,KE,qE,JE=e((()=>{q(),VE=0,HE=0,UE=[],WE=0,GE=!1,KE=document.createTextNode(``),new window.MutationObserver(BE).observe(KE,{characterData:!0}),qE={run(e){return GE||(GE=!0,KE.textContent=WE++),UE.push(e),VE++},cancel(e){let t=e-HE;if(t>=0){if(!UE[t])throw Error(`invalid async handle: `+e);UE[t]=null}}}})),YE,XE,ZE=e((()=>{q(),oE(),JE(),TE(),YE=qE,XE=Y(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,YE.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=X(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function QE(e,t){if(!$E[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var $E,eD,tD,nD,rD=e((()=>{for(q(),oE(),zE(),ZE(),$E={},eD=HTMLElement.prototype;eD;){let e=Object.getOwnPropertyNames(eD);for(let t=0;t<e.length;t++)$E[e[t]]=!0;eD=Object.getPrototypeOf(eD)}tD=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,nD=Y(e=>{let t=XE(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(PE(e[t]))}static attributeNameForProperty(e){return FE(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(tD(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){QE(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function iD(){if(!pD){pD=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,mD=e.placeholder===e.textContent}return mD}function aD(e){iD()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function oD(e){let t=e.getAttribute(`is`);if(t&&fD[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];hD(e,n,t),n.removeAttribute(t)}}return e}function sD(e,t){let n=t.parentInfo&&sD(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function cD(e,t,n,r){r.id&&(t[r.id]=n)}function lD(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function uD(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function dD(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var fD,pD,mD,hD,gD,_D=e((()=>{q(),oE(),fD={"dom-if":!0,"dom-repeat":!0},pD=!1,mD=!1,hD=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),gD=Y(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),aD(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=oD(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=sD(i,o);cD(this,i.$,n,o),uD(this,n,o,t),lD(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=dD(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function vD(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function yD(e,t,n,r,i,a){if(t){let o=!1,s=$D++;for(let c in n){let l=t[i?Z(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||xD(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function bD(e,t,n,r,i,a,o,s){let c=!1,l=t[o?Z(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||xD(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function xD(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&DE(n,e))||!!(t.wildcard&&OE(n,e))}else return!0}function SD(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function CD(e,t,n,r,i){let a=e[$.NOTIFY],o,s=$D++;for(let c in t)t[c]&&(a&&bD(e,a,s,c,n,r,i)||i&&wD(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function wD(e,t,n){let r=Z(t);return r===t?!1:(TD(e,FE(r)+`-changed`,n[t],t),!0)}function TD(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),X(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function ED(e,t,n,r,i,a){let o=(a?Z(t):t)==t?null:t,s=o?Q(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),TD(e,i.eventName,s,o)}function DD(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=kE(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function OD(e,t,n,r,i){let a=e.__data[t];KT&&(a=KT(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function kD(e,t,n,r){let i=e[$.COMPUTE];if(i)if($T){$D++;let a=AD(e),o=[];for(let e in t)iO(e,i,o,a,r);let s;for(;s=o.shift();)MD(e,``,t,n,s)&&iO(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;yD(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function AD(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[$.COMPUTE],{counts:r,ready:i,total:a}=jD(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function jD(e){let t=e[tO],n={},r=e[$.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function MD(e,t,n,r,i){let a=WD(e,t,n,r,i);if(a===eO)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function ND(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];OE(a,t)?(i=kE(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):OE(o,t)&&(i=kE(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function PD(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),zD(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||FE(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,FD(e,t,s,r,c)}}function FD(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=JD(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:ID,info:o,trigger:r})}}}function ID(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=kE(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==eO&&LD(e,s,c,l,o)}}function LD(e,t,n,r,i){if(i=RD(t,i,n,r),KT&&(i=KT(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function RD(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function zD(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function BD(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];VD(a,n),HD(a,e,n)}a.__dataHost=e}}function VD(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=X(e)),e[a]=t.literal)}}function HD(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){DD(e,t,n.target,r.source,r.negate)})}}function UD(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function WD(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===eO?eO:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function GD(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function KD(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:aO};return t[2].trim()?qD(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function qD(e,t){return t.args=e.map(function(e){let n=JD(e);return n.literal||(t.static=!1),n},this),t}function JD(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=Z(t),n.structured=EE(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function YD(e,t,n){let r=Q(e,n);return r===void 0&&(r=t[n]),r}function XD(e,t,n,r){let i={indexSplices:r};QT&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),QT&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function ZD(e,t,n,r,i,a){XD(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function QD(e){return e[0].toUpperCase()+e.substring(1)}var $D,eO,$,tO,nO,rO,iO,aO,oO,sO,cO,lO=e((()=>{q(),TE(),oE(),NE(),zE(),rD(),_D(),rE(),$D=0,eO=[],$={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},tO=`__computeInfo`,nO=/[A-Z]/,rO=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},iO=(e,t,n,r,i)=>{let a=t[i?Z(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==$D&&(!i||xD(e,o.trigger))&&(o.info.lastRun=$D,rO(o.info,n,r))}},aO=[],oO=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),sO=Y(e=>{let t=gD(nD(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(cO.length){let e=cO[cO.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[$.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==$.READ_ONLY);let r=vD(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=vD(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,$.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,$.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,$.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,$.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||Z(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Q(this,e);if(e=ME(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return ND(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=X(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&EE(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[$.NOTIFY]&&this[$.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;kD(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),yD(this,this[$.REFLECT],t,n,r),yD(this,this[$.OBSERVE],t,n,r),i&&CD(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[$.PROPAGATE]&&yD(this,this[$.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{yD(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=AE(e),t=AE(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=AE(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Q(this,e,n);XD(this,r,n.path,t)}get(e,t){return Q(t||this,e)}set(e,t,n){n?ME(n,e,t):(!this[$.READ_ONLY]||!this[$.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Q(this,e,n),i=r.length,a=r.push(...t);return t.length&&ZD(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.pop();return r&&ZD(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Q(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&ZD(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.shift();return r&&ZD(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Q(this,e,n),i=r.unshift(...t);return t.length&&ZD(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Q(this,e,r),n=r.path}else n=Array.isArray(e)?AE(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,$.READ_ONLY),t&&(this[`_set`+QD(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,$.OBSERVE,{fn:SD,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,$.OBSERVE,{fn:SD,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=KD(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);UD(this,n,$.OBSERVE,WD,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,$.NOTIFY,{fn:ED,info:{eventName:FE(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,$.REFLECT,{fn:OD,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=KD(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=UD(this,r,$.COMPUTE,MD,e,n);vD(this,tO)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=OE(o,t),i=YD(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Q(r,o):i}}else l=s?YD(r,n,o):r[o];if(QT&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return eO;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),cO.push(this);let n=super._stampTemplate(e,t);if(cO.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,BD(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];X(X(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=GD(t)||` `,PD(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;nO.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=GD(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=PE(i)),PD(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;eE&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(tE&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),eE||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];PD(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=oO.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=KD(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=oO.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?WD(e,n,r,i,t.signature):n==t.source?a&&EE(n)?Q(e,n):e.__data[n]:Q(e,t.source),t.negate&&(o=!o),o}}return n}),cO=[]}));function uO(){fO++}function dO(e){pO.push(e)}var fO,pO,mO=e((()=>{fO=0,pO=[]}));function hO(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var gO,_O=e((()=>{q(),oE(),mO(),ZE(),gO=Y(e=>{let t=XE(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=hO(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){dO(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){uO(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),vO,yO,bO,xO=e((()=>{q(),rE(),oE(),wE(),HT(),pE(),lO(),_O(),TE(),vO=`3.5.2`,yO=window.ShadyCSS&&window.ShadyCSS.cssBuild,bO=Y(e=>{let t=gO(sO(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!yO){let i=t.content.querySelectorAll(`style`),a=vE(t),o=yE(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),nE&&yO&&WT){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!qT||JT)&&(t=fE.import(e,`template`),qT&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return vO}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):YT||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=RT(e.url);else{let e=fE.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=GT,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return LT(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?IT(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=X(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),ZT&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=IT(this.importPath)),IT(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return XT&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})}));function SO(e){if(e instanceof TO)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function CO(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof TO)return SO(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var wO,TO,EO,DO,OO=e((()=>{q(),wO=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),TO=class{constructor(e,t){DO(e,t);let n=t.reduce((t,n,r)=>t+SO(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},EO=function(e,...t){DO(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+CO(n)+e[r+1],e[0]);return wO&&(r=wO.createHTML(r)),n.innerHTML=r,n},DO=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),kO=e((()=>{xO(),OO(),bO(HTMLElement)})),AO,jO,MO,NO,PO,FO,IO,LO,RO,zO,BO,VO,HO=e((()=>{bt(),Ir(),DT(),FT(),N(),kO(),s(),AO=`bottom-bar-toolbar`,jO=`bottom-bar-menu`,MO=w`
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
			var(--cz-color-bg-secondary)
		);
		border-top: 1px solid var(--cz-color-border-secondary);
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
		text-overflow: ellipsis;
		white-space: nowrap;
		flex: 0 0 auto;
		cursor: pointer;
		font-weight: var(--cz-font-weight-semibold);
		text-decoration: none;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		white-space: nowrap;
		border: none;

		text-align: center;
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);

		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#bottomBarToolbar::slotted(:not(slot)[disabled]) {
		opacity: var(--cosmoz-button-disabled-opacity, 0.15);
		pointer-events: none;
	}

	#bottomBarToolbar::slotted(:not(slot):hover) {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	#dropdown::part(button) {
		cursor: pointer;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		border: none;
		width: 40px;
		height: 40px;
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs-skeumorphic);
	}

	#dropdown::part(button):hover {
		background-color: var(--cz-color-bg-brand-solid-hover);
	}

	:host([hide-actions]) #bottomBarToolbar,
	:host([hide-actions]) #bottomBarMenu,
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) cosmoz-dropdown-menu {
		display: none;
	}
`,NO=Symbol(`openMenu`),PO=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},FO=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,IO=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},LO=e=>{let t=IO(e).filter(FO).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},RO=(e,t,n,r)=>{let i=t?AO:jO;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},zO=(e,t,n)=>{let r=LO(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>RO(e,!0,t,n)),o.forEach(e=>RO(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},BO=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=Re(!1);PT({activity:NO,callback:()=>PO(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=k(()=>yt(`height`),[]);Ae(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let o=A(()=>zO(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),s=Re(null),c=A(()=>{let t=s.current;t&&(t.disconnect(),IO(e).filter(FO).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{s.current=new MutationObserver(()=>{c(),o()}),c();let t=new MutationObserver(()=>{c(),o()});return t.observe(e,{childList:!0}),()=>{s.current?.disconnect(),s.current=null,t.disconnect()}},[o]);let l=A(()=>{c(),o()},[o]);return a` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${l}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${gd({slot:`button`})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${l}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,M(BO,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[MO]})),VO=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,a(Object.assign([VO],{raw:[VO]})),EO(Object.assign([VO],{raw:[VO]}))}));function UO(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var WO,GO,KO,qO,JO,YO,XO;e((()=>{ht(),N(),s(),F(),_t(),HO(),WO=e=>{let{active:t,maxToolbarItems:n}=e,[r,i]=j(``),[o,s]=j(UO([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),c=e=>{let t=e.target;i(t.value)},l=e=>{let t=e?e.trim():``;s([...o,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&i(``)};return a`
        <input
            .value=${r}
            placeholder="priority"
            type="number"
            @input=${c}
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
            ${gt(o,e=>a`<button
                        @click=${e.onClick}
                        data-priority=${P(e.priority)}
                    >
                        ${e.text}
                    </button>`)}
        </cosmoz-bottom-bar>
    `},customElements.define(`cosmoz-bottom-bar-story`,M(WO,{observedAttributes:[`active`,`max-toolbar-items`]})),GO=e=>a`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,KO=({active:e,maxToolbarItems:t})=>a`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,qO={title:`Cosmoz Bottom Bar`,render:GO,argTypes:{active:{control:`boolean`},maxToolbarItems:{control:`number`}},parameters:{docs:{description:{component:`The Cosmoz Bottom Bar web component`}}}},JO={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The basic version`}}}},YO={render:KO,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The empty cosmoz-bottom-bar`}}}},JO.parameters={...JO.parameters,docs:{...JO.parameters?.docs,source:{originalSource:`{
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
}`,...JO.parameters?.docs?.source}}},YO.parameters={...YO.parameters,docs:{...YO.parameters?.docs,source:{originalSource:`{
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
}`,...YO.parameters?.docs?.source}}},XO=[`Basic`,`Empty`]}))();export{JO as Basic,YO as Empty,XO as __namedExportsOrder,qO as default};