import{r as e}from"./preload-helper-CGrDLHbs.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./iframe-DonMwL8G.js";function l(e){f=e}function u(){f=null,p=0}function d(){return p++}var f,p,m=e((()=>{p=0})),h,g,_,v,y,b,x,S=e((()=>{h=Symbol(`haunted.phase`),g=Symbol(`haunted.hook`),_=Symbol(`haunted.update`),v=Symbol(`haunted.commit`),y=Symbol(`haunted.effects`),b=Symbol(`haunted.layoutEffects`),x=`haunted.context`})),ee,te=e((()=>{m(),S(),ee=class{update;host;virtual;[g];[y];[b];constructor(e,t){this.update=e,this.host=t,this[g]=new Map,this[y]=[],this[b]=[]}run(e){l(this);let t=e();return u(),t}_runEffects(e){let t=this[e];l(this);for(let e of t)e.call(this);u()}runEffects(){this._runEffects(y)}runLayoutEffects(){this._runEffects(b)}teardown(){this[g].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),C,ne=e((()=>{C=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,se,ce,le=e((()=>{te(),S(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),se=re(),ce=class e{renderer;host;state;[h];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[h]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new C(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(_);se(()=>{this.handlePhase(v,e),se(()=>{this.handlePhase(y),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[h]=e,e){case v:this.commit(t),this.runEffects(b);return;case _:return this.render();case y:return this.runEffects(y)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),ue,de,fe,w,pe=e((()=>{ue=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},de=e=>e?.map(e=>typeof e==`string`?ue(e):e),fe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=fe}));function me(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=de(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,he(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var he,ge=e((()=>{le(),pe(),he=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function _e(e,...t){let n=d(),r=f[g],i=r.get(n);return i||(i=new e(n,f,...t),r.set(n,i)),i.update(...t)}function T(e){return _e.bind(null,e)}var E,D=e((()=>{m(),S(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ve(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ye=e((()=>{D()}));function be(e,t){e[y].push(t)}var O,xe=e((()=>{S(),ye(),O=ve(be)})),Se,Ce,we=e((()=>{D(),S(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(x,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(x,this)}disconnectedCallback(){this.removeEventListener(x,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ee=e((()=>{S(),we()})),k,De=e((()=>{D(),k=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),A,Oe=e((()=>{De(),A=(e,t)=>k(()=>e,t)}));function ke(e,t){e[b].push(t)}var Ae,je=e((()=>{S(),ye(),Ae=ve(ke)})),Me,Ne=e((()=>{D(),Me=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Pe=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Fe,Ie,Le=e((()=>{D(),Fe=/([A-Z])/gu,Ie=T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Fe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Re(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function ze(e){return k(()=>Re(e),[])}var Be=e((()=>{De()})),Ve=e((()=>{D(),T(class extends E{update(){return this.state.host}})}));function He({render:e}){let t=me(e);return{component:t,createContext:Te(t)}}var Ue=e((()=>{ge(),Ee(),Oe(),xe(),je(),Ne(),Pe(),De(),we(),Le(),Be(),Ve(),D(),le(),te(),ne()})),We,Ge,Ke,qe=e((()=>{We={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ge=e=>(...t)=>({_$litDirective$:e,values:t}),Ke=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Je(e){this._$AN===void 0?this._$AM=e:(Ze(this),this._$AM=e,Qe(this))}function Ye(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Xe(r[e],!1),Ze(r[e]);else r!=null&&(Xe(r,!1),Ze(r));else Xe(this,e)}var Xe,Ze,Qe,$e,et,tt=e((()=>{c(),qe(),Xe=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Xe(e,t);return!0},Ze=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Qe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),$e(t)}},$e=e=>{e.type==We.CHILD&&(e._$AP??=Ye,e._$AQ??=Je)},et=class extends Ke{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Qe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Xe(this,e),Ze(this))}setValue(e){if(i(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function nt(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(rt.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?nt(e,t):e.teardown();break}else if(rt.call(a.addedNodes,n.nextSibling)){i.disconnect(),nt(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var rt,it=e((()=>{qe(),s(),tt(),le(),rt=Array.prototype.includes})),j,at,ot=e((()=>{s(),Ue(),it(),{component:j,createContext:at}=He({render:r})})),M=e((()=>{ot(),Ue(),pe(),Ue()})),st,ct=e((()=>{M(),st=ue(w`
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
`)})),N,P=e((()=>{s(),N=e=>e??o})),lt,ut=e((()=>{M(),lt=w`
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
`})),dt,ft=e((()=>{ut(),M(),dt=w`
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
		${lt}
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
`})),pt,mt,ht=e((()=>{ct(),M(),s(),P(),ft(),pt=[`variant`,`size`,`disabled`,`full-width`,`type`,`value`,`href`,`target`,`rel`,`download`],mt=e=>{let t=e.hasAttribute(`disabled`),n=e.getAttribute(`type`)||`button`,r=e.getAttribute(`href`);O(()=>{let t=t=>{e.hasAttribute(`disabled`)&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[]);let i=a`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`;if(r!=null){let n=e.getAttribute(`target`),s=e.getAttribute(`rel`),c=e.getAttribute(`download`);return a`
			<a
				href=${r}
				class="button"
				part="button"
				aria-disabled=${t?`true`:o}
				target=${N(n)}
				rel=${N(s)}
				download=${N(c)}
				>${i}</a
			>
		`}return a`
		<button type=${n} class="button" ?disabled=${t} part="button">
			${i}
		</button>
	`},customElements.define(`cosmoz-button`,j(mt,{observedAttributes:pt,styleSheets:[st,dt],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),gt=e((()=>{ht()}));function*_t(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var vt=e((()=>{})),yt,bt,xt=e((()=>{yt={duration:250},bt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...yt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})),St,Ct,wt=e((()=>{s(),qe(),St={},Ct=Ge(class extends Ke{constructor(){super(...arguments),this.ot=St}render(e,t){return t()}update(e,[n,r]){if(Array.isArray(n)){if(Array.isArray(this.ot)&&this.ot.length===n.length&&n.every((e,t)=>e===this.ot[t]))return t}else if(this.ot===n)return t;return this.ot=Array.isArray(n)?Array.from(n):n,this.render(n,r)}})})),Tt,Et,Dt=e((()=>{s(),tt(),qe(),Tt=new WeakMap,Et=Ge(class extends et{render(e){return o}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=Tt.get(t);n===void 0&&(n=new WeakMap,Tt.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?Tt.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})),Ot,kt,At,jt=e((()=>{s(),qe(),Ot=`important`,kt=` !important`,At=Ge(class extends Ke{constructor(e){if(super(e),e.type!==We.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[n]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in n){let t=n[e];if(t!=null){this.ft.add(e);let n=typeof t==`string`&&t.endsWith(kt);e.includes(`-`)||n?r.setProperty(e,n?t.slice(0,-11):t,n?Ot:``):r[e]=t}}return t}})})),Mt,Nt=e((()=>{Mt=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),Pt=e((()=>{Nt()})),Ft,It,Lt=e((()=>{M(),s(),Pt(),Ft=w`
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
`,It=()=>a`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Mt(j(It,{styleSheets:[Ft]})))}));function Rt(e,t,n){return I(e,en(t,n))}function zt(e,t){return typeof e==`function`?e(t):e}function Bt(e){return e.split(`-`)[0]}function Vt(e){return e.split(`-`)[1]}function Ht(e){return e===`x`?`y`:`x`}function Ut(e){return e===`y`?`height`:`width`}function F(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Wt(e){return Ht(F(e))}function Gt(e,t,n){n===void 0&&(n=!1);let r=Vt(e),i=Wt(e),a=Ut(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=Xt(o)),[o,Xt(o)]}function Kt(e){let t=Xt(e);return[qt(e),t,qt(t)]}function qt(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function Jt(e,t,n){switch(e){case`top`:case`bottom`:return n?t?on:an:t?an:on;case`left`:case`right`:return t?sn:cn;default:return[]}}function Yt(e,t,n,r){let i=Vt(e),a=Jt(Bt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(qt)))),a}function Xt(e){let t=Bt(e);return rn[t]+e.slice(t.length)}function Zt(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function Qt(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:Zt(e)}function $t(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var en,I,tn,nn,L,rn,an,on,sn,cn,ln=e((()=>{en=Math.min,I=Math.max,tn=Math.round,nn=Math.floor,L=e=>({x:e,y:e}),rn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},an=[`left`,`right`],on=[`right`,`left`],sn=[`top`,`bottom`],cn=[`bottom`,`top`]}));function un(e,t,n){let{reference:r,floating:i}=e,a=F(t),o=Wt(t),s=Ut(o),c=Bt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Vt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function dn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=zt(t,e),p=Qt(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=$t(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=$t(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var fn,pn,mn,hn,gn=e((()=>{ln(),fn=50,pn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:dn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=un(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<fn&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=un(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},mn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=zt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Bt(r),_=F(o),v=Bt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[Xt(o)]:Kt(o)),x=p!==`none`;!d&&x&&b.push(...Yt(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=Gt(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==F(t))||C.every(e=>F(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=F(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},hn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=zt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=F(i),p=Ht(f),m=u[p],h=u[f],g=(e,t)=>Rt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}}}));function _n(){return typeof window<`u`}function vn(e){return yn(e)?(e.nodeName||``).toLowerCase():`#document`}function R(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function z(e){return((yn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function yn(e){return _n()?e instanceof Node||e instanceof R(e).Node:!1}function B(e){return _n()?e instanceof Element||e instanceof R(e).Element:!1}function V(e){return _n()?e instanceof HTMLElement||e instanceof R(e).HTMLElement:!1}function bn(e){return!_n()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof R(e).ShadowRoot}function xn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Sn(e){return/^(table|td|th)$/.test(vn(e))}function Cn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function wn(e){let t=B(e)?H(e):e;return W(t.transform)||W(t.translate)||W(t.scale)||W(t.rotate)||W(t.perspective)||!En()&&(W(t.backdropFilter)||W(t.filter))||Mn.test(t.willChange||``)||Nn.test(t.contain||``)}function Tn(e){let t=U(e);for(;V(t)&&!Dn(t);){if(wn(t))return t;if(Cn(t))return null;t=U(t)}return null}function En(){return Pn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Pn}function Dn(e){return/^(html|body|#document)$/.test(vn(e))}function H(e){return R(e).getComputedStyle(e)}function On(e){return B(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function U(e){if(vn(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||bn(e)&&e.host||z(e);return bn(t)?t.host:t}function kn(e){let t=U(e);return Dn(t)?(e.ownerDocument||e).body:V(t)&&xn(t)?t:kn(t)}function An(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=kn(e),i=r===e.ownerDocument?.body,a=R(r);if(i){let e=jn(a);return t.concat(a,a.visualViewport||[],xn(r)?r:[],e&&n?An(e):[])}else return t.concat(r,An(r,[],n))}function jn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Mn,Nn,W,Pn,Fn=e((()=>{Mn=/transform|translate|scale|rotate|perspective|filter/,Nn=/paint|layout|strict|content/,W=e=>!!e&&e!==`none`}));function In(e){let t=H(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=V(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=tn(n)!==a||tn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Ln(e){return B(e)?e:e.contextElement}function Rn(e){let t=Ln(e);if(!V(t))return L(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=In(t),o=(a?tn(n.width):n.width)/r,s=(a?tn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function zn(e){let t=R(e);return!En()||!t.visualViewport?or:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Bn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===R(e)}function G(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Ln(e),o=L(1);t&&(r?B(r)&&(o=Rn(r)):o=Rn(e));let s=Bn(a,n,r)?zn(a):L(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=R(a),t=B(r)?R(r):r,n=e,i=jn(n);for(;i&&t!==n;){let e=Rn(i),t=i.getBoundingClientRect(),r=H(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=R(i),i=jn(n)}}return $t({width:u,height:d,x:c,y:l})}function Vn(e,t){let n=On(e).scrollLeft;return t?t.left+n:G(z(e)).left+n}function Hn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Vn(e,n),y:n.top+t.scrollTop}}function Un(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=z(r),s=t?Cn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=L(1),u=L(0),d=V(r);if((d||!a)&&((vn(r)!==`body`||xn(o))&&(c=On(r)),d)){let e=G(r);l=Rn(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Hn(o,c):L(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Wn(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Gn(e){let t=On(e),n=e.ownerDocument.body,r=I(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=I(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Vn(e),o=-t.scrollTop;return H(n).direction===`rtl`&&(a+=I(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Kn(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=R(e),a=z(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!En()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Vn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=sr&&(s-=o)}return{width:s,height:c,x:l,y:u}}function qn(e,t){let n=G(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Rn(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function Jn(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Kn(e,n,t);else if(t===`document`)r=Gn(z(e));else if(B(t))r=qn(t,n);else{let n=zn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return $t(r)}function Yn(e,t){let n=t.get(e);if(n)return n;let r=An(e,[],!1).filter(e=>B(e)&&vn(e)!==`body`),i=null,a=H(e).position===`fixed`,o=a?U(e):e;for(;B(o)&&!Dn(o);){let e=H(o),t=wn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=U(o)}return t.set(e,r),r}function Xn(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Cn(t)?[]:Yn(t,this._c):[].concat(n),r],o=Jn(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=Jn(t,a[e],i);s=I(n.top,s),c=en(n.right,c),l=en(n.bottom,l),u=I(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function Zn(e){let{width:t,height:n}=In(e);return{width:t,height:n}}function Qn(e,t,n){let r=V(t),i=z(t),a=n===`fixed`,o=G(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=L(0);if((r||!a)&&((vn(t)!==`body`||xn(i))&&(s=On(t)),r)){let e=G(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Vn(i));let l=i&&!r&&!a?Hn(i,s):L(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function $n(e){return H(e).position===`static`}function er(e,t){if(!V(e)||H(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return z(e)===n&&(n=n.ownerDocument.body),n}function tr(e,t){let n=R(e);if(Cn(e))return n;if(!V(e)){let t=U(e);for(;t&&!Dn(t);){if(B(t)&&!$n(t))return t;t=U(t)}return n}let r=er(e,t);for(;r&&Sn(r)&&$n(r);)r=er(r,t);return r&&Dn(r)&&$n(r)&&!wn(r)?n:r||Tn(e)||n}function nr(e){return H(e).direction===`rtl`}function rr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ir(e,t,n){let r=null,i,a=z(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=nn(d),h=nn(a.clientWidth-(u+f)),g=nn(a.clientHeight-(d+p)),_=nn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:I(0,en(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!rr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=R(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function ar(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Ln(e),u=i||a?[...l?An(l):[],...t?An(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ir(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?G(e):null;c&&g();function g(){let t=G(e);h&&!rr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var or,sr,cr,lr,ur,dr,fr,pr=e((()=>{gn(),ln(),Fn(),or=L(0),sr=25,cr=async function(e){let t=this.getOffsetParent||tr,n=this.getDimensions,r=await n(e.floating);return{reference:Qn(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},lr={convertOffsetParentRelativeRectToViewportRelativeRect:Un,getDocumentElement:z,getClippingRect:Xn,getOffsetParent:tr,getElementRects:cr,getClientRects:Wn,getDimensions:Zn,getScale:Rn,isElement:B,isRTL:nr},ur=hn,dr=mn,fr=(e,t,n)=>{let r=new Map,i=n??{},a={...lr,...i.platform,_c:r};return pn(e,t,{...i,platform:a})}})),mr,hr,gr=e((()=>{M(),pr(),mr=[dr({fallbackAxisSideDirection:`start`,crossAxis:!1}),ur()],hr=({placement:e=`bottom-start`,strategy:t,middleware:n=mr}={})=>{let[r,i]=Me(),[a,o]=Me(),[s,c]=Me();return O(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return ar(r,a,()=>fr(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:k(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),_r,vr=e((()=>{M(),_r=e=>{let t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])}})),yr,br,xr,Sr=e((()=>{vr(),M(),yr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,br=({disabled:e,onFocus:t})=>{let[n,r]=Me(),{focused:i,closed:a}=n||{},o=i&&!e,s=_r({closed:a,onFocus:t}),c=A(e=>r(t=>({...t,closed:e})),[]),l=A(e=>{let t=e.currentTarget;return yr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:A(e=>{let t=yr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},xr=e=>{let t=br(e),{onFocus:n}=t,r=ze();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})),Cr,wr,Tr,Er=e((()=>{M(),s(),wt(),Dt(),jt(),Lt(),gr(),Sr(),Cr=e=>e.preventDefault(),wr=w`
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
`,Tr=e=>{let{placement:t,strategy:n,middleware:r,render:i}=e,{active:s,onToggle:c}=xr(e),l=ze(),{styles:u,setReference:d,setFloating:f}=hr({placement:t,strategy:n,middleware:r}),p=A(e=>{l.current=e,f(e)},[f]);return O(()=>{let e=l.current;e&&(s&&!e.matches(`:popover-open`)&&e.showPopover?.(),!s&&e.matches(`:popover-open`)&&e.hidePopover?.())},[s]),a`
		<div class="anchor" part="anchor" ${Et(d)}>
			<button
				@mousedown=${Cr}
				@click=${c}
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
			style="${At(u)}"
			${Et(p)}
			><slot></slot>${Ct([i],()=>i?.()||o)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,j(Tr,{styleSheets:[wr]}))})),Dr,Or,kr,Ar=e((()=>{M(),s(),Dr=w`
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
`,Or=()=>a` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,j(Or,{styleSheets:[Dr]})),kr=({placement:e})=>a` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,j(kr))})),jr,Mr=e((()=>{M(),jr=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=ze(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return O(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),O(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),Nr,Pr,Fr,Ir=e((()=>{M(),s(),Dt(),Mr(),Nr=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Pr=w`
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
`,Fr=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:o}=e,s=ze(),[c,l]=Ie(`opened`,!1),u=A(()=>{n||(l(!0),s.current?.showPopover?.())},[n]),d=A(()=>{l(!1),s.current?.hidePopover?.()},[]),f=A(()=>{n||(s.current?.matches(`:popover-open`)?d():u())},[n]);O(()=>{let e=s.current;e&&(c?e.showPopover?.():e.hidePopover?.())},[c]),O(()=>{e.toggleAttribute(`opened`,!!c)},[c]);let{scheduleClose:p,cancelClose:m}=jr({host:e,popoverRef:s,disabled:n,openOnHover:i,openOnFocus:o,open:u,close:d}),h=o?u:f,g=A(t=>{Nr(t),l(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return a`
		<slot name="button" @click=${h}></slot>
		${n&&r?a`<slot></slot>`:a`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${Et(e=>e&&(s.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,j(Fr,{styleSheets:[Pr],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),Lr=e((()=>{Er(),Ar(),Sr(),Ir()}));function Rr(e,t,n){return e?t(e):n?.(e)}var zr=e((()=>{})),Br=e((()=>{s(),P()})),Vr=e((()=>{s(),P()})),Hr=e((()=>{s(),P()})),Ur=e((()=>{s(),P()})),Wr=e((()=>{s(),P()})),Gr=e((()=>{s(),P()})),Kr=e((()=>{s(),P()})),qr=e((()=>{s(),P()})),Jr=e((()=>{s(),P()})),Yr=e((()=>{s(),P()})),Xr=e((()=>{s(),P()})),Zr=e((()=>{s(),P()})),Qr=e((()=>{s(),P()})),$r=e((()=>{s(),P()})),ei=e((()=>{s(),P()})),ti=e((()=>{s(),P()})),ni=e((()=>{s(),P()})),ri=e((()=>{s(),P()})),ii=e((()=>{s(),P()})),ai=e((()=>{s(),P()})),oi=e((()=>{s(),P()})),si=e((()=>{s(),P()})),ci=e((()=>{s(),P()})),li=e((()=>{s(),P()})),ui=e((()=>{s(),P()})),di=e((()=>{s(),P()})),fi=e((()=>{s(),P()})),pi=e((()=>{s(),P()})),mi=e((()=>{s(),P()})),hi=e((()=>{s(),P()})),gi=e((()=>{s(),P()})),_i=e((()=>{s(),P()})),vi=e((()=>{s(),P()})),yi=e((()=>{s(),P()})),bi=e((()=>{s(),P()})),xi=e((()=>{s(),P()})),Si=e((()=>{s(),P()})),Ci=e((()=>{s(),P()})),wi=e((()=>{s(),P()})),Ti=e((()=>{s(),P()})),Ei=e((()=>{s(),P()})),Di=e((()=>{s(),P()})),Oi=e((()=>{s(),P()})),ki=e((()=>{s(),P()})),Ai=e((()=>{s(),P()})),ji=e((()=>{s(),P()})),Mi=e((()=>{s(),P()})),Ni=e((()=>{s(),P()})),Pi=e((()=>{s(),P()})),Fi=e((()=>{s(),P()})),Ii=e((()=>{s(),P()})),Li=e((()=>{s(),P()})),Ri=e((()=>{s(),P()})),zi=e((()=>{s(),P()})),Bi=e((()=>{s(),P()})),Vi=e((()=>{s(),P()})),Hi=e((()=>{s(),P()})),Ui=e((()=>{s(),P()})),Wi=e((()=>{s(),P()})),Gi=e((()=>{s(),P()})),Ki=e((()=>{s(),P()})),qi=e((()=>{s(),P()})),Ji=e((()=>{s(),P()})),Yi=e((()=>{s(),P()})),Xi=e((()=>{s(),P()})),Zi=e((()=>{s(),P()})),Qi=e((()=>{s(),P()})),$i=e((()=>{s(),P()})),ea=e((()=>{s(),P()})),ta=e((()=>{s(),P()})),na=e((()=>{s(),P()})),ra=e((()=>{s(),P()})),ia=e((()=>{s(),P()})),aa=e((()=>{s(),P()})),oa=e((()=>{s(),P()})),sa=e((()=>{s(),P()})),ca=e((()=>{s(),P()})),la=e((()=>{s(),P()})),ua=e((()=>{s(),P()})),da=e((()=>{s(),P()})),fa=e((()=>{s(),P()})),pa=e((()=>{s(),P()})),ma=e((()=>{s(),P()})),ha=e((()=>{s(),P()})),ga=e((()=>{s(),P()})),_a=e((()=>{s(),P()})),va=e((()=>{s(),P()})),ya=e((()=>{s(),P()})),ba=e((()=>{s(),P()})),xa=e((()=>{s(),P()})),Sa=e((()=>{s(),P()})),Ca=e((()=>{s(),P()})),wa=e((()=>{s(),P()})),Ta=e((()=>{s(),P()})),Ea=e((()=>{s(),P()})),Da=e((()=>{s(),P()})),Oa=e((()=>{s(),P()})),ka=e((()=>{s(),P()})),Aa=e((()=>{s(),P()})),ja=e((()=>{s(),P()})),Ma=e((()=>{s(),P()})),Na=e((()=>{s(),P()})),Pa=e((()=>{s(),P()})),Fa=e((()=>{s(),P()})),Ia=e((()=>{s(),P()})),La=e((()=>{s(),P()})),Ra=e((()=>{s(),P()})),za=e((()=>{s(),P()})),Ba=e((()=>{s(),P()})),Va=e((()=>{s(),P()})),Ha=e((()=>{s(),P()})),Ua=e((()=>{s(),P()})),Wa=e((()=>{s(),P()})),Ga=e((()=>{s(),P()})),Ka=e((()=>{s(),P()})),qa=e((()=>{s(),P()})),Ja=e((()=>{s(),P()})),Ya=e((()=>{s(),P()})),Xa=e((()=>{s(),P()})),Za=e((()=>{s(),P()})),Qa=e((()=>{s(),P()})),$a=e((()=>{s(),P()})),eo=e((()=>{s(),P()})),to=e((()=>{s(),P()})),no=e((()=>{s(),P()})),ro=e((()=>{s(),P()})),io=e((()=>{s(),P()})),ao=e((()=>{s(),P()})),oo=e((()=>{s(),P()})),so=e((()=>{s(),P()})),co=e((()=>{s(),P()})),lo=e((()=>{s(),P()})),uo=e((()=>{s(),P()})),fo=e((()=>{s(),P()})),po=e((()=>{s(),P()})),mo=e((()=>{s(),P()})),ho=e((()=>{s(),P()})),go=e((()=>{s(),P()})),_o=e((()=>{s(),P()})),vo=e((()=>{s(),P()})),yo=e((()=>{s(),P()})),bo=e((()=>{s(),P()})),xo=e((()=>{s(),P()})),So=e((()=>{s(),P()})),Co=e((()=>{s(),P()})),wo=e((()=>{s(),P()})),To=e((()=>{s(),P()})),Eo=e((()=>{s(),P()})),Do=e((()=>{s(),P()})),Oo=e((()=>{s(),P()})),ko=e((()=>{s(),P()})),Ao=e((()=>{s(),P()})),jo=e((()=>{s(),P()})),Mo=e((()=>{s(),P()})),No=e((()=>{s(),P()})),Po=e((()=>{s(),P()})),Fo=e((()=>{s(),P()})),Io=e((()=>{s(),P()})),Lo=e((()=>{s(),P()})),Ro=e((()=>{s(),P()})),zo=e((()=>{s(),P()})),Bo=e((()=>{s(),P()})),Vo=e((()=>{s(),P()})),Ho=e((()=>{s(),P()})),Uo=e((()=>{s(),P()})),Wo=e((()=>{s(),P()})),Go=e((()=>{s(),P()})),Ko=e((()=>{s(),P()})),qo=e((()=>{s(),P()})),Jo=e((()=>{s(),P()})),Yo=e((()=>{s(),P()})),Xo=e((()=>{s(),P()})),Zo=e((()=>{s(),P()})),Qo=e((()=>{s(),P()})),$o=e((()=>{s(),P()})),es=e((()=>{s(),P()})),ts=e((()=>{s(),P()})),ns=e((()=>{s(),P()})),rs=e((()=>{s(),P()})),is=e((()=>{s(),P()})),as=e((()=>{s(),P()})),os=e((()=>{s(),P()})),ss=e((()=>{s(),P()})),cs=e((()=>{s(),P()})),ls=e((()=>{s(),P()})),us=e((()=>{s(),P()})),ds=e((()=>{s(),P()})),fs=e((()=>{s(),P()})),ps=e((()=>{s(),P()})),ms=e((()=>{s(),P()})),hs=e((()=>{s(),P()})),gs=e((()=>{s(),P()})),_s=e((()=>{s(),P()})),vs=e((()=>{s(),P()})),ys=e((()=>{s(),P()})),bs=e((()=>{s(),P()})),xs=e((()=>{s(),P()})),Ss=e((()=>{s(),P()})),Cs=e((()=>{s(),P()})),ws=e((()=>{s(),P()})),Ts=e((()=>{s(),P()})),Es=e((()=>{s(),P()})),Ds=e((()=>{s(),P()})),Os=e((()=>{s(),P()})),ks=e((()=>{s(),P()})),As=e((()=>{s(),P()})),js=e((()=>{s(),P()})),Ms=e((()=>{s(),P()})),Ns=e((()=>{s(),P()})),Ps=e((()=>{s(),P()})),Fs=e((()=>{s(),P()})),Is=e((()=>{s(),P()})),Ls=e((()=>{s(),P()})),Rs=e((()=>{s(),P()})),zs=e((()=>{s(),P()})),Bs=e((()=>{s(),P()})),Vs=e((()=>{s(),P()})),Hs=e((()=>{s(),P()})),Us=e((()=>{s(),P()})),Ws=e((()=>{s(),P()})),Gs=e((()=>{s(),P()})),Ks=e((()=>{s(),P()})),qs=e((()=>{s(),P()})),Js=e((()=>{s(),P()})),Ys=e((()=>{s(),P()})),Xs=e((()=>{s(),P()})),Zs=e((()=>{s(),P()})),Qs=e((()=>{s(),P()})),$s=e((()=>{s(),P()})),ec=e((()=>{s(),P()})),tc=e((()=>{s(),P()})),nc=e((()=>{s(),P()})),rc=e((()=>{s(),P()})),ic=e((()=>{s(),P()})),ac=e((()=>{s(),P()})),oc=e((()=>{s(),P()})),sc=e((()=>{s(),P()})),cc=e((()=>{s(),P()})),lc=e((()=>{s(),P()})),uc=e((()=>{s(),P()})),dc=e((()=>{s(),P()})),fc=e((()=>{s(),P()})),pc=e((()=>{s(),P()})),mc=e((()=>{s(),P()})),hc=e((()=>{s(),P()})),gc=e((()=>{s(),P()})),_c=e((()=>{s(),P()})),vc=e((()=>{s(),P()})),yc=e((()=>{s(),P()})),bc=e((()=>{s(),P()})),xc=e((()=>{s(),P()})),Sc=e((()=>{s(),P()})),Cc=e((()=>{s(),P()})),wc=e((()=>{s(),P()})),Tc=e((()=>{s(),P()})),Ec=e((()=>{s(),P()})),Dc=e((()=>{s(),P()})),Oc=e((()=>{s(),P()})),kc=e((()=>{s(),P()})),Ac=e((()=>{s(),P()})),jc=e((()=>{s(),P()})),Mc=e((()=>{s(),P()})),Nc=e((()=>{s(),P()})),Pc=e((()=>{s(),P()})),Fc=e((()=>{s(),P()})),Ic=e((()=>{s(),P()})),Lc=e((()=>{s(),P()})),Rc=e((()=>{s(),P()})),zc=e((()=>{s(),P()})),Bc=e((()=>{s(),P()})),Vc=e((()=>{s(),P()})),Hc=e((()=>{s(),P()})),Uc=e((()=>{s(),P()})),Wc=e((()=>{s(),P()})),Gc=e((()=>{s(),P()})),Kc=e((()=>{s(),P()})),qc=e((()=>{s(),P()})),Jc=e((()=>{s(),P()})),Yc=e((()=>{s(),P()})),Xc=e((()=>{s(),P()})),Zc=e((()=>{s(),P()})),Qc=e((()=>{s(),P()})),$c=e((()=>{s(),P()})),el=e((()=>{s(),P()})),tl=e((()=>{s(),P()})),nl=e((()=>{s(),P()})),rl=e((()=>{s(),P()})),il=e((()=>{s(),P()})),al=e((()=>{s(),P()})),ol=e((()=>{s(),P()})),sl=e((()=>{s(),P()})),cl=e((()=>{s(),P()})),ll=e((()=>{s(),P()})),ul=e((()=>{s(),P()})),dl=e((()=>{s(),P()})),fl=e((()=>{s(),P()})),pl=e((()=>{s(),P()})),ml=e((()=>{s(),P()})),hl=e((()=>{s(),P()})),gl=e((()=>{s(),P()})),_l=e((()=>{s(),P()})),vl=e((()=>{s(),P()})),yl=e((()=>{s(),P()})),bl=e((()=>{s(),P()})),xl=e((()=>{s(),P()})),Sl=e((()=>{s(),P()})),Cl=e((()=>{s(),P()})),wl=e((()=>{s(),P()})),Tl=e((()=>{s(),P()})),El=e((()=>{s(),P()})),Dl=e((()=>{s(),P()})),Ol=e((()=>{s(),P()})),kl=e((()=>{s(),P()})),Al=e((()=>{s(),P()})),jl=e((()=>{s(),P()})),Ml=e((()=>{s(),P()})),Nl=e((()=>{s(),P()})),Pl=e((()=>{s(),P()})),Fl=e((()=>{s(),P()})),Il=e((()=>{s(),P()})),Ll=e((()=>{s(),P()})),Rl=e((()=>{s(),P()})),zl=e((()=>{s(),P()})),Bl=e((()=>{s(),P()})),Vl=e((()=>{s(),P()})),Hl=e((()=>{s(),P()})),Ul=e((()=>{s(),P()})),Wl=e((()=>{s(),P()})),Gl=e((()=>{s(),P()})),Kl=e((()=>{s(),P()})),ql=e((()=>{s(),P()})),Jl=e((()=>{s(),P()})),Yl=e((()=>{s(),P()})),Xl=e((()=>{s(),P()})),Zl=e((()=>{s(),P()})),Ql=e((()=>{s(),P()})),$l=e((()=>{s(),P()})),eu=e((()=>{s(),P()})),tu=e((()=>{s(),P()})),nu=e((()=>{s(),P()})),ru=e((()=>{s(),P()})),iu=e((()=>{s(),P()})),au=e((()=>{s(),P()})),ou=e((()=>{s(),P()})),su=e((()=>{s(),P()})),cu=e((()=>{s(),P()})),lu=e((()=>{s(),P()})),uu=e((()=>{s(),P()})),du=e((()=>{s(),P()})),fu=e((()=>{s(),P()})),pu=e((()=>{s(),P()})),mu=e((()=>{s(),P()})),hu=e((()=>{s(),P()})),gu=e((()=>{s(),P()})),_u=e((()=>{s(),P()})),vu=e((()=>{s(),P()})),yu=e((()=>{s(),P()})),bu=e((()=>{s(),P()})),xu=e((()=>{s(),P()})),Su=e((()=>{s(),P()})),Cu=e((()=>{s(),P()})),wu=e((()=>{s(),P()})),Tu=e((()=>{s(),P()})),Eu=e((()=>{s(),P()})),Du=e((()=>{s(),P()})),Ou=e((()=>{s(),P()})),ku=e((()=>{s(),P()})),Au=e((()=>{s(),P()})),ju=e((()=>{s(),P()})),Mu=e((()=>{s(),P()})),Nu=e((()=>{s(),P()})),Pu=e((()=>{s(),P()})),Fu=e((()=>{s(),P()})),Iu=e((()=>{s(),P()})),Lu=e((()=>{s(),P()})),Ru=e((()=>{s(),P()})),zu=e((()=>{s(),P()})),Bu=e((()=>{s(),P()})),Vu=e((()=>{s(),P()})),Hu=e((()=>{s(),P()})),Uu=e((()=>{s(),P()})),Wu=e((()=>{s(),P()})),Gu=e((()=>{s(),P()})),Ku=e((()=>{s(),P()})),qu=e((()=>{s(),P()})),Ju=e((()=>{s(),P()})),Yu=e((()=>{s(),P()})),Xu=e((()=>{s(),P()})),Zu=e((()=>{s(),P()})),Qu=e((()=>{s(),P()})),$u=e((()=>{s(),P()})),ed=e((()=>{s(),P()})),td=e((()=>{s(),P()})),nd=e((()=>{s(),P()})),rd=e((()=>{s(),P()})),id=e((()=>{s(),P()})),ad=e((()=>{s(),P()})),od=e((()=>{s(),P()})),sd=e((()=>{s(),P()})),cd=e((()=>{s(),P()})),ld=e((()=>{s(),P()})),ud=e((()=>{s(),P()})),dd=e((()=>{s(),P()})),fd=e((()=>{s(),P()})),pd=e((()=>{s(),P()})),md=e((()=>{s(),P()})),hd=e((()=>{s(),P()})),gd=e((()=>{s(),P()})),_d,vd=e((()=>{s(),P(),zr(),_d=({slot:e,title:t,className:r,width:i=`24`,height:o=`24`,styles:s}={})=>a`
  <svg
    slot=${N(e)}
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
    style=${N(s)}
  >
    ${Rr(t,()=>n`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})),yd=e((()=>{s(),P()})),bd=e((()=>{s(),P()})),xd=e((()=>{s(),P()})),Sd=e((()=>{s(),P()})),Cd=e((()=>{s(),P()})),wd=e((()=>{s(),P()})),Td=e((()=>{s(),P()})),Ed=e((()=>{s(),P()})),Dd=e((()=>{s(),P()})),Od=e((()=>{s(),P()})),kd=e((()=>{s(),P()})),Ad=e((()=>{s(),P()})),jd=e((()=>{s(),P()})),Md=e((()=>{s(),P()})),Nd=e((()=>{s(),P()})),Pd=e((()=>{s(),P()})),Fd=e((()=>{s(),P()})),Id=e((()=>{s(),P()})),Ld=e((()=>{s(),P()})),Rd=e((()=>{s(),P()})),zd=e((()=>{s(),P()})),Bd=e((()=>{s(),P()})),Vd=e((()=>{s(),P()})),Hd=e((()=>{s(),P()})),Ud=e((()=>{s(),P()})),Wd=e((()=>{s(),P()})),Gd=e((()=>{s(),P()})),Kd=e((()=>{s(),P()})),qd=e((()=>{s(),P()})),Jd=e((()=>{s(),P()})),Yd=e((()=>{s(),P()})),Xd=e((()=>{s(),P()})),Zd=e((()=>{s(),P()})),Qd=e((()=>{s(),P()})),$d=e((()=>{s(),P()})),ef=e((()=>{s(),P()})),tf=e((()=>{s(),P()})),nf=e((()=>{s(),P()})),rf=e((()=>{s(),P()})),af=e((()=>{s(),P()})),of=e((()=>{s(),P()})),sf=e((()=>{s(),P()})),cf=e((()=>{s(),P()})),lf=e((()=>{s(),P()})),uf=e((()=>{s(),P()})),df=e((()=>{s(),P()})),ff=e((()=>{s(),P()})),pf=e((()=>{s(),P()})),mf=e((()=>{s(),P()})),hf=e((()=>{s(),P()})),gf=e((()=>{s(),P()})),_f=e((()=>{s(),P()})),vf=e((()=>{s(),P()})),yf=e((()=>{s(),P()})),bf=e((()=>{s(),P()})),xf=e((()=>{s(),P()})),Sf=e((()=>{s(),P()})),Cf=e((()=>{s(),P()})),wf=e((()=>{s(),P()})),Tf=e((()=>{s(),P()})),Ef=e((()=>{s(),P()})),Df=e((()=>{s(),P()})),Of=e((()=>{s(),P()})),kf=e((()=>{s(),P()})),Af=e((()=>{s(),P()})),jf=e((()=>{s(),P()})),Mf=e((()=>{s(),P()})),Nf=e((()=>{s(),P()})),Pf=e((()=>{s(),P()})),Ff=e((()=>{s(),P()})),If=e((()=>{s(),P()})),Lf=e((()=>{s(),P()})),Rf=e((()=>{s(),P()})),zf=e((()=>{s(),P()})),Bf=e((()=>{s(),P()})),Vf=e((()=>{s(),P()})),Hf=e((()=>{s(),P()})),Uf=e((()=>{s(),P()})),Wf=e((()=>{s(),P()})),Gf=e((()=>{s(),P()})),Kf=e((()=>{s(),P()})),qf=e((()=>{s(),P()})),Jf=e((()=>{s(),P()})),Yf=e((()=>{s(),P()})),Xf=e((()=>{s(),P()})),Zf=e((()=>{s(),P()})),Qf=e((()=>{s(),P()})),$f=e((()=>{s(),P()})),ep=e((()=>{s(),P()})),tp=e((()=>{s(),P()})),np=e((()=>{s(),P()})),rp=e((()=>{s(),P()})),ip=e((()=>{s(),P()})),ap=e((()=>{s(),P()})),op=e((()=>{s(),P()})),sp=e((()=>{s(),P()})),cp=e((()=>{s(),P()})),lp=e((()=>{s(),P()})),up=e((()=>{s(),P()})),dp=e((()=>{s(),P()})),fp=e((()=>{s(),P()})),pp=e((()=>{s(),P()})),mp=e((()=>{s(),P()})),hp=e((()=>{s(),P()})),gp=e((()=>{s(),P()})),_p=e((()=>{s(),P()})),vp=e((()=>{s(),P()})),yp=e((()=>{s(),P()})),bp=e((()=>{s(),P()})),xp=e((()=>{s(),P()})),Sp=e((()=>{s(),P()})),Cp=e((()=>{s(),P()})),wp=e((()=>{s(),P()})),Tp=e((()=>{s(),P()})),Ep=e((()=>{s(),P()})),Dp=e((()=>{s(),P()})),Op=e((()=>{s(),P()})),kp=e((()=>{s(),P()})),Ap=e((()=>{s(),P()})),jp=e((()=>{s(),P()})),Mp=e((()=>{s(),P()})),Np=e((()=>{s(),P()})),Pp=e((()=>{s(),P()})),Fp=e((()=>{s(),P()})),Ip=e((()=>{s(),P()})),Lp=e((()=>{s(),P()})),Rp=e((()=>{s(),P()})),zp=e((()=>{s(),P()})),Bp=e((()=>{s(),P()})),Vp=e((()=>{s(),P()})),Hp=e((()=>{s(),P()})),Up=e((()=>{s(),P()})),Wp=e((()=>{s(),P()})),Gp=e((()=>{s(),P()})),Kp=e((()=>{s(),P()})),qp=e((()=>{s(),P()})),Jp=e((()=>{s(),P()})),Yp=e((()=>{s(),P()})),Xp=e((()=>{s(),P()})),Zp=e((()=>{s(),P()})),Qp=e((()=>{s(),P()})),$p=e((()=>{s(),P()})),em=e((()=>{s(),P()})),tm=e((()=>{s(),P()})),nm=e((()=>{s(),P()})),rm=e((()=>{s(),P()})),im=e((()=>{s(),P()})),am=e((()=>{s(),P()})),om=e((()=>{s(),P()})),sm=e((()=>{s(),P()})),cm=e((()=>{s(),P()})),lm=e((()=>{s(),P()})),um=e((()=>{s(),P()})),dm=e((()=>{s(),P()})),fm=e((()=>{s(),P()})),pm=e((()=>{s(),P()})),mm=e((()=>{s(),P()})),hm=e((()=>{s(),P()})),gm=e((()=>{s(),P()})),_m=e((()=>{s(),P()})),vm=e((()=>{s(),P()})),ym=e((()=>{s(),P()})),bm=e((()=>{s(),P()})),xm=e((()=>{s(),P()})),Sm=e((()=>{s(),P()})),Cm=e((()=>{s(),P()})),wm=e((()=>{s(),P()})),Tm=e((()=>{s(),P()})),Em=e((()=>{s(),P()})),Dm=e((()=>{s(),P()})),Om=e((()=>{s(),P()})),km=e((()=>{s(),P()})),Am=e((()=>{s(),P()})),jm=e((()=>{s(),P()})),Mm=e((()=>{s(),P()})),Nm=e((()=>{s(),P()})),Pm=e((()=>{s(),P()})),Fm=e((()=>{s(),P()})),Im=e((()=>{s(),P()})),Lm=e((()=>{s(),P()})),Rm=e((()=>{s(),P()})),zm=e((()=>{s(),P()})),Bm=e((()=>{s(),P()})),Vm=e((()=>{s(),P()})),Hm=e((()=>{s(),P()})),Um=e((()=>{s(),P()})),Wm=e((()=>{s(),P()})),Gm=e((()=>{s(),P()})),Km=e((()=>{s(),P()})),qm=e((()=>{s(),P()})),Jm=e((()=>{s(),P()})),Ym=e((()=>{s(),P()})),Xm=e((()=>{s(),P()})),Zm=e((()=>{s(),P()})),Qm=e((()=>{s(),P()})),$m=e((()=>{s(),P()})),eh=e((()=>{s(),P()})),th=e((()=>{s(),P()})),nh=e((()=>{s(),P()})),rh=e((()=>{s(),P()})),ih=e((()=>{s(),P()})),ah=e((()=>{s(),P()})),oh=e((()=>{s(),P()})),sh=e((()=>{s(),P()})),ch=e((()=>{s(),P()})),lh=e((()=>{s(),P()})),uh=e((()=>{s(),P()})),dh=e((()=>{s(),P()})),fh=e((()=>{s(),P()})),ph=e((()=>{s(),P()})),mh=e((()=>{s(),P()})),hh=e((()=>{s(),P()})),gh=e((()=>{s(),P()})),_h=e((()=>{s(),P()})),vh=e((()=>{s(),P()})),yh=e((()=>{s(),P()})),bh=e((()=>{s(),P()})),xh=e((()=>{s(),P()})),Sh=e((()=>{s(),P()})),Ch=e((()=>{s(),P()})),wh=e((()=>{s(),P()})),Th=e((()=>{s(),P()})),Eh=e((()=>{s(),P()})),Dh=e((()=>{s(),P()})),Oh=e((()=>{s(),P()})),kh=e((()=>{s(),P()})),Ah=e((()=>{s(),P()})),jh=e((()=>{s(),P()})),Mh=e((()=>{s(),P()})),Nh=e((()=>{s(),P()})),Ph=e((()=>{s(),P()})),Fh=e((()=>{s(),P()})),Ih=e((()=>{s(),P()})),Lh=e((()=>{s(),P()})),Rh=e((()=>{s(),P()})),zh=e((()=>{s(),P()})),Bh=e((()=>{s(),P()})),Vh=e((()=>{s(),P()})),Hh=e((()=>{s(),P()})),Uh=e((()=>{s(),P()})),Wh=e((()=>{s(),P()})),Gh=e((()=>{s(),P()})),Kh=e((()=>{s(),P()})),qh=e((()=>{s(),P()})),Jh=e((()=>{s(),P()})),Yh=e((()=>{s(),P()})),Xh=e((()=>{s(),P()})),Zh=e((()=>{s(),P()})),Qh=e((()=>{s(),P()})),$h=e((()=>{s(),P()})),eg=e((()=>{s(),P()})),tg=e((()=>{s(),P()})),ng=e((()=>{s(),P()})),rg=e((()=>{s(),P()})),ig=e((()=>{s(),P()})),ag=e((()=>{s(),P()})),og=e((()=>{s(),P()})),sg=e((()=>{s(),P()})),cg=e((()=>{s(),P()})),lg=e((()=>{s(),P()})),ug=e((()=>{s(),P()})),dg=e((()=>{s(),P()})),fg=e((()=>{s(),P()})),pg=e((()=>{s(),P()})),mg=e((()=>{s(),P()})),hg=e((()=>{s(),P()})),gg=e((()=>{s(),P()})),_g=e((()=>{s(),P()})),vg=e((()=>{s(),P()})),yg=e((()=>{s(),P()})),bg=e((()=>{s(),P()})),xg=e((()=>{s(),P()})),Sg=e((()=>{s(),P()})),Cg=e((()=>{s(),P()})),wg=e((()=>{s(),P()})),Tg=e((()=>{s(),P()})),Eg=e((()=>{s(),P()})),Dg=e((()=>{s(),P()})),Og=e((()=>{s(),P()})),kg=e((()=>{s(),P()})),Ag=e((()=>{s(),P()})),jg=e((()=>{s(),P()})),Mg=e((()=>{s(),P()})),Ng=e((()=>{s(),P()})),Pg=e((()=>{s(),P()})),Fg=e((()=>{s(),P()})),Ig=e((()=>{s(),P()})),Lg=e((()=>{s(),P()})),Rg=e((()=>{s(),P()})),zg=e((()=>{s(),P()})),Bg=e((()=>{s(),P()})),Vg=e((()=>{s(),P()})),Hg=e((()=>{s(),P()})),Ug=e((()=>{s(),P()})),Wg=e((()=>{s(),P()})),Gg=e((()=>{s(),P()})),Kg=e((()=>{s(),P()})),qg=e((()=>{s(),P()})),Jg=e((()=>{s(),P()})),Yg=e((()=>{s(),P()})),Xg=e((()=>{s(),P()})),Zg=e((()=>{s(),P()})),Qg=e((()=>{s(),P()})),$g=e((()=>{s(),P()})),e_=e((()=>{s(),P()})),t_=e((()=>{s(),P()})),n_=e((()=>{s(),P()})),r_=e((()=>{s(),P()})),i_=e((()=>{s(),P()})),a_=e((()=>{s(),P()})),o_=e((()=>{s(),P()})),s_=e((()=>{s(),P()})),c_=e((()=>{s(),P()})),l_=e((()=>{s(),P()})),u_=e((()=>{s(),P()})),d_=e((()=>{s(),P()})),f_=e((()=>{s(),P()})),p_=e((()=>{s(),P()})),m_=e((()=>{s(),P()})),h_=e((()=>{s(),P()})),g_=e((()=>{s(),P()})),__=e((()=>{s(),P()})),v_=e((()=>{s(),P()})),y_=e((()=>{s(),P()})),b_=e((()=>{s(),P()})),x_=e((()=>{s(),P()})),S_=e((()=>{s(),P()})),C_=e((()=>{s(),P()})),w_=e((()=>{s(),P()})),T_=e((()=>{s(),P()})),E_=e((()=>{s(),P()})),D_=e((()=>{s(),P()})),O_=e((()=>{s(),P()})),k_=e((()=>{s(),P()})),A_=e((()=>{s(),P()})),j_=e((()=>{s(),P()})),M_=e((()=>{s(),P()})),N_=e((()=>{s(),P()})),P_=e((()=>{s(),P()})),F_=e((()=>{s(),P()})),I_=e((()=>{s(),P()})),L_=e((()=>{s(),P()})),R_=e((()=>{s(),P()})),z_=e((()=>{s(),P()})),B_=e((()=>{s(),P()})),V_=e((()=>{s(),P()})),H_=e((()=>{s(),P()})),U_=e((()=>{s(),P()})),W_=e((()=>{s(),P()})),G_=e((()=>{s(),P()})),K_=e((()=>{s(),P()})),q_=e((()=>{s(),P()})),J_=e((()=>{s(),P()})),Y_=e((()=>{s(),P()})),X_=e((()=>{s(),P()})),Z_=e((()=>{s(),P()})),Q_=e((()=>{s(),P()})),$_=e((()=>{s(),P()})),ev=e((()=>{s(),P()})),tv=e((()=>{s(),P()})),nv=e((()=>{s(),P()})),rv=e((()=>{s(),P()})),iv=e((()=>{s(),P()})),av=e((()=>{s(),P()})),ov=e((()=>{s(),P()})),sv=e((()=>{s(),P()})),cv=e((()=>{s(),P()})),lv=e((()=>{s(),P()})),uv=e((()=>{s(),P()})),dv=e((()=>{s(),P()})),fv=e((()=>{s(),P()})),pv=e((()=>{s(),P()})),mv=e((()=>{s(),P()})),hv=e((()=>{s(),P()})),gv=e((()=>{s(),P()})),_v=e((()=>{s(),P()})),vv=e((()=>{s(),P()})),yv=e((()=>{s(),P()})),bv=e((()=>{s(),P()})),xv=e((()=>{s(),P()})),Sv=e((()=>{s(),P()})),Cv=e((()=>{s(),P()})),wv=e((()=>{s(),P()})),Tv=e((()=>{s(),P()})),Ev=e((()=>{s(),P()})),Dv=e((()=>{s(),P()})),Ov=e((()=>{s(),P()})),kv=e((()=>{s(),P()})),Av=e((()=>{s(),P()})),jv=e((()=>{s(),P()})),Mv=e((()=>{s(),P()})),Nv=e((()=>{s(),P()})),Pv=e((()=>{s(),P()})),Fv=e((()=>{s(),P()})),Iv=e((()=>{s(),P()})),Lv=e((()=>{s(),P()})),Rv=e((()=>{s(),P()})),zv=e((()=>{s(),P()})),Bv=e((()=>{s(),P()})),Vv=e((()=>{s(),P()})),Hv=e((()=>{s(),P()})),Uv=e((()=>{s(),P()})),Wv=e((()=>{s(),P()})),Gv=e((()=>{s(),P()})),Kv=e((()=>{s(),P()})),qv=e((()=>{s(),P()})),Jv=e((()=>{s(),P()})),Yv=e((()=>{s(),P()})),Xv=e((()=>{s(),P()})),Zv=e((()=>{s(),P()})),Qv=e((()=>{s(),P()})),$v=e((()=>{s(),P()})),ey=e((()=>{s(),P()})),ty=e((()=>{s(),P()})),ny=e((()=>{s(),P()})),ry=e((()=>{s(),P()})),iy=e((()=>{s(),P()})),ay=e((()=>{s(),P()})),oy=e((()=>{s(),P()})),sy=e((()=>{s(),P()})),cy=e((()=>{s(),P()})),ly=e((()=>{s(),P()})),uy=e((()=>{s(),P()})),dy=e((()=>{s(),P()})),fy=e((()=>{s(),P()})),py=e((()=>{s(),P()})),my=e((()=>{s(),P()})),hy=e((()=>{s(),P()})),gy=e((()=>{s(),P()})),_y=e((()=>{s(),P()})),vy=e((()=>{s(),P()})),yy=e((()=>{s(),P()})),by=e((()=>{s(),P()})),xy=e((()=>{s(),P()})),Sy=e((()=>{s(),P()})),Cy=e((()=>{s(),P()})),wy=e((()=>{s(),P()})),Ty=e((()=>{s(),P()})),Ey=e((()=>{s(),P()})),Dy=e((()=>{s(),P()})),Oy=e((()=>{s(),P()})),ky=e((()=>{s(),P()})),Ay=e((()=>{s(),P()})),jy=e((()=>{s(),P()})),My=e((()=>{s(),P()})),Ny=e((()=>{s(),P()})),Py=e((()=>{s(),P()})),Fy=e((()=>{s(),P()})),Iy=e((()=>{s(),P()})),Ly=e((()=>{s(),P()})),Ry=e((()=>{s(),P()})),zy=e((()=>{s(),P()})),By=e((()=>{s(),P()})),Vy=e((()=>{s(),P()})),Hy=e((()=>{s(),P()})),Uy=e((()=>{s(),P()})),Wy=e((()=>{s(),P()})),Gy=e((()=>{s(),P()})),Ky=e((()=>{s(),P()})),qy=e((()=>{s(),P()})),Jy=e((()=>{s(),P()})),Yy=e((()=>{s(),P()})),Xy=e((()=>{s(),P()})),Zy=e((()=>{s(),P()})),Qy=e((()=>{s(),P()})),$y=e((()=>{s(),P()})),eb=e((()=>{s(),P()})),tb=e((()=>{s(),P()})),nb=e((()=>{s(),P()})),rb=e((()=>{s(),P()})),ib=e((()=>{s(),P()})),ab=e((()=>{s(),P()})),ob=e((()=>{s(),P()})),sb=e((()=>{s(),P()})),cb=e((()=>{s(),P()})),lb=e((()=>{s(),P()})),ub=e((()=>{s(),P()})),db=e((()=>{s(),P()})),fb=e((()=>{s(),P()})),pb=e((()=>{s(),P()})),mb=e((()=>{s(),P()})),hb=e((()=>{s(),P()})),gb=e((()=>{s(),P()})),_b=e((()=>{s(),P()})),vb=e((()=>{s(),P()})),yb=e((()=>{s(),P()})),bb=e((()=>{s(),P()})),xb=e((()=>{s(),P()})),Sb=e((()=>{s(),P()})),Cb=e((()=>{s(),P()})),wb=e((()=>{s(),P()})),Tb=e((()=>{s(),P()})),Eb=e((()=>{s(),P()})),Db=e((()=>{s(),P()})),Ob=e((()=>{s(),P()})),kb=e((()=>{s(),P()})),Ab=e((()=>{s(),P()})),jb=e((()=>{s(),P()})),Mb=e((()=>{s(),P()})),Nb=e((()=>{s(),P()})),Pb=e((()=>{s(),P()})),Fb=e((()=>{s(),P()})),Ib=e((()=>{s(),P()})),Lb=e((()=>{s(),P()})),Rb=e((()=>{s(),P()})),zb=e((()=>{s(),P()})),Bb=e((()=>{s(),P()})),Vb=e((()=>{s(),P()})),Hb=e((()=>{s(),P()})),Ub=e((()=>{s(),P()})),Wb=e((()=>{s(),P()})),Gb=e((()=>{s(),P()})),Kb=e((()=>{s(),P()})),qb=e((()=>{s(),P()})),Jb=e((()=>{s(),P()})),Yb=e((()=>{s(),P()})),Xb=e((()=>{s(),P()})),Zb=e((()=>{s(),P()})),Qb=e((()=>{s(),P()})),$b=e((()=>{s(),P()})),ex=e((()=>{s(),P()})),tx=e((()=>{s(),P()})),nx=e((()=>{s(),P()})),rx=e((()=>{s(),P()})),ix=e((()=>{s(),P()})),ax=e((()=>{s(),P()})),ox=e((()=>{s(),P()})),sx=e((()=>{s(),P()})),cx=e((()=>{s(),P()})),lx=e((()=>{s(),P()})),ux=e((()=>{s(),P()})),dx=e((()=>{s(),P()})),fx=e((()=>{s(),P()})),px=e((()=>{s(),P()})),mx=e((()=>{s(),P()})),hx=e((()=>{s(),P()})),gx=e((()=>{s(),P()})),_x=e((()=>{s(),P()})),vx=e((()=>{s(),P()})),yx=e((()=>{s(),P()})),bx=e((()=>{s(),P()})),xx=e((()=>{s(),P()})),Sx=e((()=>{s(),P()})),Cx=e((()=>{s(),P()})),wx=e((()=>{s(),P()})),Tx=e((()=>{s(),P()})),Ex=e((()=>{s(),P()})),Dx=e((()=>{s(),P()})),Ox=e((()=>{s(),P()})),kx=e((()=>{s(),P()})),Ax=e((()=>{s(),P()})),jx=e((()=>{s(),P()})),Mx=e((()=>{s(),P()})),Nx=e((()=>{s(),P()})),Px=e((()=>{s(),P()})),Fx=e((()=>{s(),P()})),Ix=e((()=>{s(),P()})),Lx=e((()=>{s(),P()})),Rx=e((()=>{s(),P()})),zx=e((()=>{s(),P()})),Bx=e((()=>{s(),P()})),Vx=e((()=>{s(),P()})),Hx=e((()=>{s(),P()})),Ux=e((()=>{s(),P()})),Wx=e((()=>{s(),P()})),Gx=e((()=>{s(),P()})),Kx=e((()=>{s(),P()})),qx=e((()=>{s(),P()})),Jx=e((()=>{s(),P()})),Yx=e((()=>{s(),P()})),Xx=e((()=>{s(),P()})),Zx=e((()=>{s(),P()})),Qx=e((()=>{s(),P()})),$x=e((()=>{s(),P()})),eS=e((()=>{s(),P()})),tS=e((()=>{s(),P()})),nS=e((()=>{s(),P()})),rS=e((()=>{s(),P()})),iS=e((()=>{s(),P()})),aS=e((()=>{s(),P()})),oS=e((()=>{s(),P()})),sS=e((()=>{s(),P()})),cS=e((()=>{s(),P()})),lS=e((()=>{s(),P()})),uS=e((()=>{s(),P()})),dS=e((()=>{s(),P()})),fS=e((()=>{s(),P()})),pS=e((()=>{s(),P()})),mS=e((()=>{s(),P()})),hS=e((()=>{s(),P()})),gS=e((()=>{s(),P()})),_S=e((()=>{s(),P()})),vS=e((()=>{s(),P()})),yS=e((()=>{s(),P()})),bS=e((()=>{s(),P()})),xS=e((()=>{s(),P()})),SS=e((()=>{s(),P()})),CS=e((()=>{s(),P()})),wS=e((()=>{s(),P()})),TS=e((()=>{s(),P()})),ES=e((()=>{s(),P()})),DS=e((()=>{s(),P()})),OS=e((()=>{s(),P()})),kS=e((()=>{s(),P()})),AS=e((()=>{s(),P()})),jS=e((()=>{s(),P()})),MS=e((()=>{s(),P()})),NS=e((()=>{s(),P()})),PS=e((()=>{s(),P()})),FS=e((()=>{s(),P()})),IS=e((()=>{s(),P()})),LS=e((()=>{s(),P()})),RS=e((()=>{s(),P()})),zS=e((()=>{s(),P()})),BS=e((()=>{s(),P()})),VS=e((()=>{s(),P()})),HS=e((()=>{s(),P()})),US=e((()=>{s(),P()})),WS=e((()=>{s(),P()})),GS=e((()=>{s(),P()})),KS=e((()=>{s(),P()})),qS=e((()=>{s(),P()})),JS=e((()=>{s(),P()})),YS=e((()=>{s(),P()})),XS=e((()=>{s(),P()})),ZS=e((()=>{s(),P()})),QS=e((()=>{s(),P()})),$S=e((()=>{s(),P()})),eC=e((()=>{s(),P()})),tC=e((()=>{s(),P()})),nC=e((()=>{s(),P()})),rC=e((()=>{s(),P()})),iC=e((()=>{s(),P()})),aC=e((()=>{s(),P()})),oC=e((()=>{s(),P()})),sC=e((()=>{s(),P()})),cC=e((()=>{s(),P()})),lC=e((()=>{s(),P()})),uC=e((()=>{s(),P()})),dC=e((()=>{s(),P()})),fC=e((()=>{s(),P()})),pC=e((()=>{s(),P()})),mC=e((()=>{s(),P()})),hC=e((()=>{s(),P()})),gC=e((()=>{s(),P()})),_C=e((()=>{s(),P()})),vC=e((()=>{s(),P()})),yC=e((()=>{s(),P()})),bC=e((()=>{s(),P()})),xC=e((()=>{s(),P()})),SC=e((()=>{s(),P()})),CC=e((()=>{s(),P()})),wC=e((()=>{s(),P()})),TC=e((()=>{s(),P()})),EC=e((()=>{s(),P()})),DC=e((()=>{s(),P()})),OC=e((()=>{s(),P()})),kC=e((()=>{s(),P()})),AC=e((()=>{s(),P()})),jC=e((()=>{s(),P()})),MC=e((()=>{s(),P()})),NC=e((()=>{s(),P()})),PC=e((()=>{s(),P()})),FC=e((()=>{s(),P()})),IC=e((()=>{s(),P()})),LC=e((()=>{s(),P()})),RC=e((()=>{s(),P()})),zC=e((()=>{s(),P()})),BC=e((()=>{s(),P()})),VC=e((()=>{s(),P()})),HC=e((()=>{s(),P()})),UC=e((()=>{s(),P()})),WC=e((()=>{s(),P()})),GC=e((()=>{s(),P()})),KC=e((()=>{s(),P()})),qC=e((()=>{s(),P()})),JC=e((()=>{s(),P()})),YC=e((()=>{s(),P()})),XC=e((()=>{s(),P()})),ZC=e((()=>{s(),P()})),QC=e((()=>{s(),P()})),$C=e((()=>{s(),P()})),ew=e((()=>{s(),P()})),tw=e((()=>{s(),P()})),nw=e((()=>{s(),P()})),rw=e((()=>{s(),P()})),iw=e((()=>{s(),P()})),aw=e((()=>{s(),P()})),ow=e((()=>{s(),P()})),sw=e((()=>{s(),P()})),cw=e((()=>{s(),P()})),lw=e((()=>{s(),P()})),uw=e((()=>{s(),P()})),dw=e((()=>{s(),P()})),fw=e((()=>{s(),P()})),pw=e((()=>{s(),P()})),mw=e((()=>{s(),P()})),hw=e((()=>{s(),P()})),gw=e((()=>{s(),P()})),_w=e((()=>{s(),P()})),vw=e((()=>{s(),P()})),yw=e((()=>{s(),P()})),bw=e((()=>{s(),P()})),xw=e((()=>{s(),P()})),Sw=e((()=>{s(),P()})),Cw=e((()=>{s(),P()})),ww=e((()=>{s(),P()})),Tw=e((()=>{s(),P()})),Ew=e((()=>{s(),P()})),Dw=e((()=>{s(),P()})),Ow=e((()=>{s(),P()})),kw=e((()=>{s(),P()})),Aw=e((()=>{s(),P()})),jw=e((()=>{s(),P()})),Mw=e((()=>{s(),P()})),Nw=e((()=>{s(),P()})),Pw=e((()=>{s(),P()})),Fw=e((()=>{s(),P()})),Iw=e((()=>{s(),P()})),Lw=e((()=>{s(),P()})),Rw=e((()=>{s(),P()})),zw=e((()=>{s(),P()})),Bw=e((()=>{s(),P()})),Vw=e((()=>{s(),P()})),Hw=e((()=>{s(),P()})),Uw=e((()=>{s(),P()})),Ww=e((()=>{s(),P()})),Gw=e((()=>{s(),P()})),Kw=e((()=>{s(),P()})),qw=e((()=>{s(),P()})),Jw=e((()=>{s(),P()})),Yw=e((()=>{s(),P()})),Xw=e((()=>{s(),P()})),Zw=e((()=>{s(),P()})),Qw=e((()=>{s(),P()})),$w=e((()=>{s(),P()})),eT=e((()=>{s(),P()})),tT=e((()=>{s(),P()})),nT=e((()=>{s(),P()})),rT=e((()=>{s(),P()})),iT=e((()=>{s(),P()})),aT=e((()=>{s(),P()})),oT=e((()=>{s(),P()})),sT=e((()=>{s(),P()})),cT=e((()=>{s(),P()})),lT=e((()=>{s(),P()})),uT=e((()=>{s(),P()})),dT=e((()=>{s(),P()})),fT=e((()=>{s(),P()})),pT=e((()=>{s(),P()})),mT=e((()=>{s(),P()})),hT=e((()=>{s(),P()})),gT=e((()=>{s(),P()})),_T=e((()=>{s(),P()})),vT=e((()=>{s(),P()})),yT=e((()=>{s(),P()})),bT=e((()=>{s(),P()})),xT=e((()=>{s(),P()})),ST=e((()=>{s(),P()})),CT=e((()=>{s(),P()})),wT=e((()=>{s(),P()})),TT=e((()=>{s(),P()})),ET=e((()=>{s(),P()})),DT=e((()=>{s(),P()})),OT=e((()=>{Br(),Vr(),Hr(),Ur(),Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT()}));function kT(e){return()=>e}var AT,jT,MT=e((()=>{AT=kT(),jT=AT})),NT,PT=e((()=>{M(),MT(),NT=at(()=>jT),customElements.define(`cosmoz-keybinding-provider`,NT.Provider)})),FT,IT=e((()=>{M(),PT(),vr(),FT=(e,t)=>{let n=Ce(NT),r=_r(e);O(()=>n(r),t)}})),K=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function LT(e,t){if(e&&VT.test(e)||e===`//`)return e;if(HT===void 0){HT=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,HT=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,HT)try{return new URL(e,t).href}catch{return e}return q||(q=document.implementation.createHTMLDocument(`temp`),q.base=q.createElement(`base`),q.head.appendChild(q.base),q.anchor=q.createElement(`a`),q.body.appendChild(q.anchor)),q.base.href=t,q.anchor.href=e,q.anchor.href||e}function RT(e,t){return e.replace(BT,function(e,n,r,i){return n+`'`+LT(r.replace(/["']/g,``),t)+`'`+i})}function zT(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var BT,VT,HT,q,UT=e((()=>{K(),BT=/(url\()([^)]*)(\))/g,VT=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),WT,GT,KT,qT,JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE,iE=e((()=>{K(),UT(),WT=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,GT=WT&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),KT=window.Polymer&&window.Polymer.rootPath||zT(document.baseURI||window.location.href),qT=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,JT=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,YT=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,XT=window.Polymer&&window.Polymer.legacyOptimizations||!1,ZT=window.Polymer&&window.Polymer.legacyWarnings||!1,QT=window.Polymer&&window.Polymer.syncInitialRender||!1,$T=window.Polymer&&window.Polymer.legacyUndefined||!1,eE=window.Polymer&&window.Polymer.orderedComputed||!1,tE=window.Polymer&&window.Polymer.removeNestedTemplates||!1,nE=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,rE=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function aE(){}var oE,J,sE=e((()=>{K(),oE=0,aE.prototype.__mixinApplications,aE.prototype.__mixinSet,J=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=oE++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function cE(e,t){dE[e]=fE[e.toLowerCase()]=t}function lE(e){return dE[e]||fE[e.toLowerCase()]}function uE(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var dE,fE,pE,mE=e((()=>{K(),UT(),iE(),dE={},fE={},pE=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=lE(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=LT(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=zT(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(JT&&lE(e)!==void 0)throw cE(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,cE(e,this),uE(this)}}},pE.prototype.modules=dE,customElements.define(`dom-module`,pE)}));function hE(e){return pE.import(e)}function gE(e){let t=RT((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function _E(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...vE(t[e]));return n}function vE(e){let t=hE(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...xE(t));let n=t.querySelector(`template`);n&&e.push(...yE(n,t.assetpath)),t._styles=e}return t._styles}function yE(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(CE);a&&n.push(..._E(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=RT(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function bE(e){let t=hE(e);return t?xE(t):[]}function xE(e){let t=[],n=e.querySelectorAll(SE);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(wE);if(n&&!e._unscopedStyle){let t=gE(e);t.setAttribute(wE,``),e._unscopedStyle=t}else e._style||=gE(e);t.push(n?e._unscopedStyle:e._style)}}return t}var SE,CE,wE,TE=e((()=>{mE(),UT(),SE=`link[rel=import][type~=css]`,CE=`include`,wE=`shady-unscoped`})),Y,EE=e((()=>{Y=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function DE(e){return e.indexOf(`.`)>=0}function X(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function OE(e,t){return e.indexOf(t+`.`)===0}function kE(e,t){return t.indexOf(e+`.`)===0}function AE(e,t,n){return t+n.slice(e.length)}function jE(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function ME(e){return Array.isArray(e)?jE(e).split(`.`):e.toString().split(`.`)}function Z(e,t,n){let r=e,i=ME(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function NE(e,t,n){let r=e,i=ME(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var PE=e((()=>{K()}));function FE(e){return LE[e]||(LE[e]=e.indexOf(`-`)<0?e:e.replace(RE,e=>e[1].toUpperCase()))}function IE(e){return LE[e]||(LE[e]=e.replace(zE,`-$1`).toLowerCase())}var LE,RE,zE,BE=e((()=>{K(),LE={},RE=/-[a-z]/g,zE=/([A-Z])/g}));function VE(){GE=!1;let e=Q.length;for(let t=0;t<e;t++){let e=Q[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}Q.splice(0,e),UE+=e}var HE,UE,Q,WE,GE,KE,qE,JE=e((()=>{K(),HE=0,UE=0,Q=[],WE=0,GE=!1,KE=document.createTextNode(``),new window.MutationObserver(VE).observe(KE,{characterData:!0}),qE={run(e){return GE||(GE=!0,KE.textContent=WE++),Q.push(e),HE++},cancel(e){let t=e-UE;if(t>=0){if(!Q[t])throw Error(`invalid async handle: `+e);Q[t]=null}}}})),YE,XE,ZE=e((()=>{K(),sE(),JE(),EE(),YE=qE,XE=J(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,YE.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=Y(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function QE(e,t){if(!$E[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var $E,eD,tD,nD,rD=e((()=>{for(K(),sE(),BE(),ZE(),$E={},eD=HTMLElement.prototype;eD;){let e=Object.getOwnPropertyNames(eD);for(let t=0;t<e.length;t++)$E[e[t]]=!0;eD=Object.getPrototypeOf(eD)}tD=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,nD=J(e=>{let t=XE(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(FE(e[t]))}static attributeNameForProperty(e){return IE(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(tD(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){QE(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function iD(){if(!pD){pD=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,mD=e.placeholder===e.textContent}return mD}function aD(e){iD()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function oD(e){let t=e.getAttribute(`is`);if(t&&fD[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];hD(e,n,t),n.removeAttribute(t)}}return e}function sD(e,t){let n=t.parentInfo&&sD(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function cD(e,t,n,r){r.id&&(t[r.id]=n)}function lD(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function uD(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function dD(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var fD,pD,mD,hD,gD,_D=e((()=>{K(),sE(),fD={"dom-if":!0,"dom-repeat":!0},pD=!1,mD=!1,hD=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),gD=J(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),aD(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=oD(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=sD(i,o);cD(this,i.$,n,o),uD(this,n,o,t),lD(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=dD(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function vD(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function yD(e,t,n,r,i,a){if(t){let o=!1,s=$D++;for(let c in n){let l=t[i?X(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||xD(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function bD(e,t,n,r,i,a,o,s){let c=!1,l=t[o?X(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||xD(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function xD(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&OE(n,e))||!!(t.wildcard&&kE(n,e))}else return!0}function SD(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function CD(e,t,n,r,i){let a=e[$.NOTIFY],o,s=$D++;for(let c in t)t[c]&&(a&&bD(e,a,s,c,n,r,i)||i&&wD(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function wD(e,t,n){let r=X(t);return r===t?!1:(TD(e,IE(r)+`-changed`,n[t],t),!0)}function TD(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),Y(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function ED(e,t,n,r,i,a){let o=(a?X(t):t)==t?null:t,s=o?Z(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),TD(e,i.eventName,s,o)}function DD(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=AE(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function OD(e,t,n,r,i){let a=e.__data[t];qT&&(a=qT(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function kD(e,t,n,r){let i=e[$.COMPUTE];if(i)if(eE){$D++;let a=AD(e),o=[];for(let e in t)iO(e,i,o,a,r);let s;for(;s=o.shift();)MD(e,``,t,n,s)&&iO(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;yD(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function AD(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[$.COMPUTE],{counts:r,ready:i,total:a}=jD(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function jD(e){let t=e[tO],n={},r=e[$.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function MD(e,t,n,r,i){let a=WD(e,t,n,r,i);if(a===eO)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function ND(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];kE(a,t)?(i=AE(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):kE(o,t)&&(i=AE(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function PD(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),zD(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||IE(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,FD(e,t,s,r,c)}}function FD(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=JD(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:ID,info:o,trigger:r})}}}function ID(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=AE(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==eO&&LD(e,s,c,l,o)}}function LD(e,t,n,r,i){if(i=RD(t,i,n,r),qT&&(i=qT(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function RD(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function zD(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function BD(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];VD(a,n),HD(a,e,n)}a.__dataHost=e}}function VD(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=Y(e)),e[a]=t.literal)}}function HD(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){DD(e,t,n.target,r.source,r.negate)})}}function UD(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function WD(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===eO?eO:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function GD(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function KD(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:aO};return t[2].trim()?qD(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function qD(e,t){return t.args=e.map(function(e){let n=JD(e);return n.literal||(t.static=!1),n},this),t}function JD(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=X(t),n.structured=DE(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function YD(e,t,n){let r=Z(e,n);return r===void 0&&(r=t[n]),r}function XD(e,t,n,r){let i={indexSplices:r};$T&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),$T&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function ZD(e,t,n,r,i,a){XD(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function QD(e){return e[0].toUpperCase()+e.substring(1)}var $D,eO,$,tO,nO,rO,iO,aO,oO,sO,cO,lO=e((()=>{K(),EE(),sE(),PE(),BE(),rD(),_D(),iE(),$D=0,eO=[],$={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},tO=`__computeInfo`,nO=/[A-Z]/,rO=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},iO=(e,t,n,r,i)=>{let a=t[i?X(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==$D&&(!i||xD(e,o.trigger))&&(o.info.lastRun=$D,rO(o.info,n,r))}},aO=[],oO=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),sO=J(e=>{let t=gD(nD(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(cO.length){let e=cO[cO.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[$.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==$.READ_ONLY);let r=vD(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=vD(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,$.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,$.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,$.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,$.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||X(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Z(this,e);if(e=NE(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return ND(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=Y(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&DE(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[$.NOTIFY]&&this[$.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;kD(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),yD(this,this[$.REFLECT],t,n,r),yD(this,this[$.OBSERVE],t,n,r),i&&CD(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[$.PROPAGATE]&&yD(this,this[$.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{yD(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=jE(e),t=jE(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=jE(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Z(this,e,n);XD(this,r,n.path,t)}get(e,t){return Z(t||this,e)}set(e,t,n){n?NE(n,e,t):(!this[$.READ_ONLY]||!this[$.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Z(this,e,n),i=r.length,a=r.push(...t);return t.length&&ZD(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Z(this,e,t),r=!!n.length,i=n.pop();return r&&ZD(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Z(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&ZD(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Z(this,e,t),r=!!n.length,i=n.shift();return r&&ZD(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Z(this,e,n),i=r.unshift(...t);return t.length&&ZD(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Z(this,e,r),n=r.path}else n=Array.isArray(e)?jE(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,$.READ_ONLY),t&&(this[`_set`+QD(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,$.OBSERVE,{fn:SD,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,$.OBSERVE,{fn:SD,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=KD(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);UD(this,n,$.OBSERVE,WD,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,$.NOTIFY,{fn:ED,info:{eventName:IE(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,$.REFLECT,{fn:OD,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=KD(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=UD(this,r,$.COMPUTE,MD,e,n);vD(this,tO)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=kE(o,t),i=YD(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Z(r,o):i}}else l=s?YD(r,n,o):r[o];if($T&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return eO;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),cO.push(this);let n=super._stampTemplate(e,t);if(cO.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,BD(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];Y(Y(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=GD(t)||` `,PD(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;nO.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=GD(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=FE(i)),PD(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;tE&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(nE&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),tE||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];PD(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=oO.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=KD(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=oO.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?WD(e,n,r,i,t.signature):n==t.source?a&&DE(n)?Z(e,n):e.__data[n]:Z(e,t.source),t.negate&&(o=!o),o}}return n}),cO=[]}));function uO(){fO++}function dO(e){pO.push(e)}var fO,pO,mO=e((()=>{fO=0,pO=[]}));function hO(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var gO,_O=e((()=>{K(),sE(),mO(),ZE(),gO=J(e=>{let t=XE(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=hO(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){dO(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){uO(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),vO,yO,bO,xO=e((()=>{K(),iE(),sE(),TE(),UT(),mE(),lO(),_O(),EE(),vO=`3.5.2`,yO=window.ShadyCSS&&window.ShadyCSS.cssBuild,bO=J(e=>{let t=gO(sO(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!yO){let i=t.content.querySelectorAll(`style`),a=yE(t),o=bE(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),rE&&yO&&GT){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!JT||YT)&&(t=pE.import(e,`template`),JT&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return vO}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):XT||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=zT(e.url);else{let e=pE.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=KT,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return RT(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?LT(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=Y(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),QT&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=LT(this.importPath)),LT(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return ZT&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})}));function SO(e){if(e instanceof TO)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function CO(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof TO)return SO(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var wO,TO,EO,DO,OO=e((()=>{K(),wO=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),TO=class{constructor(e,t){DO(e,t);let n=t.reduce((t,n,r)=>t+SO(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},EO=function(e,...t){DO(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+CO(n)+e[r+1],e[0]);return wO&&(r=wO.createHTML(r)),n.innerHTML=r,n},DO=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),kO=e((()=>{xO(),OO(),bO(HTMLElement)})),AO,jO,MO,NO,PO,FO,IO,LO,RO,zO,BO,VO,HO=e((()=>{xt(),Lr(),OT(),IT(),M(),kO(),s(),AO=`bottom-bar-toolbar`,jO=`bottom-bar-menu`,MO=w`
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
`,NO=Symbol(`openMenu`),PO=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},FO=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,IO=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},LO=e=>{let t=IO(e).filter(FO).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},RO=(e,t,n,r)=>{let i=t?AO:jO;e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),e.classList.toggle(r,!t),e.classList.toggle(n,t)},zO=(e,t,n)=>{let r=LO(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>RO(e,!0,t,n)),o.forEach(e=>RO(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},BO=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=ze(!1);FT({activity:NO,callback:()=>PO(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=k(()=>bt(`height`),[]);Ae(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let o=A(()=>zO(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),s=ze(null),c=A(()=>{let t=s.current;t&&(t.disconnect(),IO(e).filter(FO).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{s.current=new MutationObserver(()=>{c(),o()}),c();let t=new MutationObserver(()=>{c(),o()});return t.observe(e,{childList:!0}),()=>{s.current?.disconnect(),s.current=null,t.disconnect()}},[o]);let l=A(()=>{c(),o()},[o]);return a` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${l}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${_d({slot:`button`})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${l}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,j(BO,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[MO]})),VO=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,a(Object.assign([VO],{raw:[VO]})),EO(Object.assign([VO],{raw:[VO]}))}));function UO(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var WO,GO,KO,qO,JO,YO,XO;e((()=>{gt(),M(),s(),P(),vt(),HO(),WO=e=>{let{active:t,maxToolbarItems:n}=e,[r,i]=Me(``),[o,s]=Me(UO([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),c=e=>{let t=e.target;i(t.value)},l=e=>{let t=e?e.trim():``;s([...o,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&i(``)};return a`
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
            ${_t(o,e=>a`<button
                        @click=${e.onClick}
                        data-priority=${N(e.priority)}
                    >
                        ${e.text}
                    </button>`)}
        </cosmoz-bottom-bar>
    `},customElements.define(`cosmoz-bottom-bar-story`,j(WO,{observedAttributes:[`active`,`max-toolbar-items`]})),GO=e=>a`<cosmoz-bottom-bar-story
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