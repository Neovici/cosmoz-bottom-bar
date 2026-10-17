import{t as e}from"./rolldown-runtime-Dh6celcD.js";import{a as t,c as n,i as r,l as i,n as a,o,r as s,s as c}from"./iframe-DicQ9kCm.js";function l(e){f=e}function u(){f=null,p=0}function d(){return p++}var f,p;function m(){return(m=e((()=>{p=0})))()}var h,g,_,v,y,b,x;function S(){return(S=e((()=>{h=Symbol(`haunted.phase`),g=Symbol(`haunted.hook`),_=Symbol(`haunted.update`),v=Symbol(`haunted.commit`),y=Symbol(`haunted.effects`),b=Symbol(`haunted.layoutEffects`),x=`haunted.context`})))()}var ee;function te(){return(te=e((()=>{m(),S(),ee=class{update;host;virtual;[g];[y];[b];constructor(e,t){this.update=e,this.host=t,this[g]=new Map,this[y]=[],this[b]=[]}run(e){l(this);let t=e();return u(),t}_runEffects(e){let t=this[e];l(this);for(let e of t)e.call(this);u()}runEffects(){this._runEffects(y)}runLayoutEffects(){this._runEffects(b)}teardown(){this[g].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})))()}var C;function ne(){return(ne=e((()=>{C=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}})))()}function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,se,ce;function le(){return(le=e((()=>{te(),S(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),se=re(),ce=class e{renderer;host;state;[h];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[h]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new C(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(_);se(()=>{this.handlePhase(v,e),se(()=>{this.handlePhase(y),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[h]=e,e){case v:this.commit(t),this.runEffects(b);return;case _:return this.render();case y:return this.runEffects(y)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})))()}var ue,de,fe,w;function pe(){return(pe=e((()=>{ue=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},de=e=>e?.map(e=>typeof e==`string`?ue(e):e),fe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=fe})))()}function me(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=de(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){super.connectedCallback?.(),this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback?.(),this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,he(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),r._scheduler?.update(),!0):(Reflect.set(e,t,n,r),r._scheduler?.update(),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var he;function ge(){return(ge=e((()=>{le(),pe(),he=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)})))()}function _e(e,...t){let n=d(),r=f[g],i=r.get(n);return i||(i=new e(n,f,...t),r.set(n,i)),i.update(...t)}function T(e){return _e.bind(null,e)}var E;function D(){return(D=e((()=>{m(),S(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}})))()}function ve(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}function ye(){return(ye=e((()=>{D()})))()}function be(e,t){e[y].push(t)}var O;function xe(){return(xe=e((()=>{S(),ye(),O=ve(be)})))()}var Se,Ce;function we(){return(we=e((()=>{D(),S(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(x,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})})))()}function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(x,this)}disconnectedCallback(){this.removeEventListener(x,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}function Ee(){return(Ee=e((()=>{S(),we()})))()}var De;function Oe(){return(Oe=e((()=>{D(),De=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})))()}var k;function ke(){return(ke=e((()=>{Oe(),k=(e,t)=>De(()=>e,t)})))()}function Ae(e,t){e[b].push(t)}var je;function Me(){return(Me=e((()=>{S(),ye(),je=ve(Ae)})))()}var A;function Ne(){return(Ne=e((()=>{D(),A=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})))()}function Pe(){return(Pe=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})))()}var Fe,Ie;function Le(){return(Le=e((()=>{D(),Fe=/([A-Z])/gu,Ie=T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Fe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);(t||!a.defaultPrevented)&&(Object.is(n,r)||(this.state.host[this.property]=r))}})})))()}function Re(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function j(e){return De(()=>Re(e),[])}function ze(){return(ze=e((()=>{Oe()})))()}function Be(){return(Be=e((()=>{D(),T(class extends E{update(){return this.state.host}})})))()}function Ve({render:e}){let t=me(e);return{component:t,createContext:Te(t)}}function He(){return(He=e((()=>{ge(),Ee(),ke(),xe(),Me(),Ne(),Pe(),Oe(),we(),Le(),ze(),Be(),le()})))()}var Ue,We,Ge;function Ke(){return(Ke=e((()=>{Ue={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},We=e=>(...t)=>({_$litDirective$:e,values:t}),Ge=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}})))()}function qe(e){this._$AN===void 0?this._$AM=e:(Xe(this),this._$AM=e,Ze(this))}function Je(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0){if(t){if(Array.isArray(r))for(let e=n;e<r.length;e++)Ye(r[e],!1),Xe(r[e]);else r!=null&&(Ye(r,!1),Xe(r))}else Ye(this,e)}}var Ye,Xe,Ze,Qe,$e;function et(){return(et=e((()=>{a(),Ke(),Ye=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Ye(e,t);return!0},Xe=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Ze=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Qe(t)}},Qe=e=>{e.type==Ue.CHILD&&(e._$AP??=Je,e._$AQ??=qe)},$e=class extends Ge{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Ze(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Ye(this,e),Xe(this))}setValue(e){if(s(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}})))()}function tt(){return(tt=e((()=>{Ke(),n(),et(),le(),Array.prototype.includes})))()}var M,nt;function rt(){return(rt=e((()=>{n(),He(),tt(),{component:M,createContext:nt}=Ve({render:t})})))()}function N(){return(N=e((()=>{rt(),He(),pe()})))()}var it;function at(){return(at=e((()=>{N(),it=ue(w`
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
`)})))()}var ot,P;function st(){return(st=e((()=>{n(),et(),Ke(),ot=new WeakMap,P=We(class extends $e{render(e){return r}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),r}rt(e){if(this.G!==void 0){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=ot.get(t);n===void 0&&(n=new WeakMap,ot.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}}get lt(){return typeof this.G==`function`?ot.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})})))()}function ct(e,t,n){return e?t(e):n?.(e)}var lt;function ut(){return(ut=e((()=>{at(),N(),n(),lt=w`
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
`,customElements.define(`cosmoz-tooltip-content`,M(()=>c`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[it,lt]}))})))()}var dt;function ft(){return(ft=e((()=>{N(),dt=ue(w`
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
`)})))()}var pt,mt;function ht(){return(ht=e((()=>{N(),n(),ut(),ft(),pt=(e,n,r)=>t(c`<cosmoz-tooltip-content>
			${ct(n,()=>c`<strong slot="heading">${n}</strong>`)}
			${ct(r,()=>c`<p slot="description">${r}</p>`)}
		</cosmoz-tooltip-content>`,e),mt=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=j(),l=!!(r||i)&&!s;O(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(dt)||(t.adoptedStyleSheets=[...u,dt]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,pt(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),O(()=>{n&&c.current&&pt(c.current,r,i)},[r,i,n]),O(()=>{s&&c.current&&c.current.hidePopover()},[s])}})))()}var gt;function _t(){return(_t=e((()=>{N(),gt=e=>{let[t,n]=A(!1);return O(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})))()}var vt,yt;function bt(){return(bt=e((()=>{at(),N(),n(),st(),ut(),ft(),ht(),_t(),vt=w`
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
`,yt=e=>{let{heading:t,description:n,for:i,placement:a=`top`,delay:o=300,disabled:s=!1}=e,l=j(),u=j(),d=j(),f=gt(d),p=!!(t||n||f)&&!s,m=k(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},o))},[o,p]);O(()=>{s&&(clearTimeout(u.current),l.current?.hidePopover())},[s]);let h=k(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return O(()=>{if(i)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[i,m,h]),mt(e,{for:i,heading:t,description:n,placement:a,delay:o,disabled:s}),i?r:p?c`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${a}"
			${P(l)}
		>
			<cosmoz-tooltip-content>
				${ct(t,()=>c`<strong slot="heading">${t}</strong>`)}
				${ct(n,()=>c`<p slot="description">${n}</p>`)}
				<slot name="content" ${P(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:c`
			<slot></slot>
			<slot name="content" ${P(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,M(yt,{styleSheets:[it,dt,vt],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})))()}function xt(){return(xt=e((()=>{bt()})))()}var F;function I(){return(I=e((()=>{n(),F=e=>e??r})))()}var St;function Ct(){return(Ct=e((()=>{N(),St=w`
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
`})))()}var wt,Tt;function Et(){return(Et=e((()=>{at(),xt(),N(),n(),I(),Ct(),wt=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`],Tt=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:i,type:a=`button`,href:o,target:s,rel:l,download:u}=e,d=!!t;O(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=c`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=ct(o!=null,()=>c`
			<a
				href=${o}
				class="button"
				part="button"
				aria-disabled=${d?`true`:r}
				target=${F(s)}
				rel=${F(l)}
				download=${F(u)}
				>${f}</a
			>
		`,()=>c`
			<button type=${a} class="button" part="button" ?disabled=${d}>
				${f}
			</button>
		`);return c`<cosmoz-tooltip
		heading=${F(n??void 0)}
		placement=${F(i??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,M(Tt,{observedAttributes:wt,styleSheets:[it,St],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function Dt(){return(Dt=e((()=>{Et()})))()}function*Ot(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var kt,At;function jt(){return(jt=e((()=>{kt={duration:250},At=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...kt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})))()}var Mt,Nt;function Pt(){return(Pt=e((()=>{n(),Ke(),Mt={},Nt=We(class extends Ge{constructor(){super(...arguments),this.ot=Mt}render(e,t){return t()}update(e,[t,n]){if(Array.isArray(t)){if(Array.isArray(this.ot)&&this.ot.length===t.length&&t.every((e,t)=>e===this.ot[t]))return o}else if(this.ot===t)return o;return this.ot=Array.isArray(t)?Array.from(t):t,this.render(t,n)}})})))()}var Ft,It,Lt;function Rt(){return(Rt=e((()=>{n(),Ke(),Ft=`important`,It=` !`+Ft,Lt=We(class extends Ge{constructor(e){if(super(e),e.type!==Ue.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(It);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Ft:``):n[e]=r}}return o}})})))()}var zt;function Bt(){return(Bt=e((()=>{zt=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})))()}var Vt,Ht;function Ut(){return(Ut=e((()=>{N(),n(),Bt(),Vt=w`
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
`,Ht=()=>c`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,zt(M(Ht,{styleSheets:[Vt]})))})))()}function Wt(e,t,n){return R(e,sn(t,n))}function Gt(e,t){return typeof e==`function`?e(t):e}function Kt(e){return e.split(`-`)[0]}function qt(e){return e.split(`-`)[1]}function Jt(e){return e===`x`?`y`:`x`}function Yt(e){return e===`y`?`height`:`width`}function L(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Xt(e){return Jt(L(e))}function Zt(e,t,n){n===void 0&&(n=!1);let r=qt(e),i=Xt(e),a=Yt(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=nn(o)),[o,nn(o)]}function Qt(e){let t=nn(e);return[$t(e),t,$t(t)]}function $t(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function en(e,t,n){switch(e){case`top`:case`bottom`:return n?t?fn:dn:t?dn:fn;case`left`:case`right`:return t?pn:mn;default:return[]}}function tn(e,t,n,r){let i=qt(e),a=en(Kt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map($t)))),a}function nn(e){let t=Kt(e);return un[t]+e.slice(t.length)}function rn(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function an(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:rn(e)}function on(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var sn,R,cn,ln,z,un,dn,fn,pn,mn;function hn(){return(hn=e((()=>{sn=Math.min,R=Math.max,cn=Math.round,ln=Math.floor,z=e=>({x:e,y:e}),un={left:`right`,right:`left`,bottom:`top`,top:`bottom`},dn=[`left`,`right`],fn=[`right`,`left`],pn=[`top`,`bottom`],mn=[`bottom`,`top`]})))()}function gn(e,t,n){let{reference:r,floating:i}=e,a=L(t),o=Xt(t),s=Yt(o),c=Kt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=qt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function _n(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Gt(t,e),p=an(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=on(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=on(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var vn,yn,bn,xn;function Sn(){return(Sn=e((()=>{hn(),vn=50,yn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:_n},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=gn(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<vn&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=gn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},bn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Gt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Kt(r),_=L(o),v=Kt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[nn(o)]:Qt(o)),x=p!==`none`;!d&&x&&b.push(...tn(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=Zt(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(u!==`alignment`||_===L(t)||C.every(e=>L(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=L(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o}if(r!==n)return{reset:{placement:n}}}return{}}}},xn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Gt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=L(i),p=Jt(f),m=u[p],h=u[f],g=(e,t)=>Wt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}}})))()}function Cn(){return typeof window<`u`}function wn(e){return Tn(e)?(e.nodeName||``).toLowerCase():`#document`}function B(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function V(e){return((Tn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function Tn(e){return Cn()?e instanceof Node||e instanceof B(e).Node:!1}function H(e){return Cn()?e instanceof Element||e instanceof B(e).Element:!1}function U(e){return Cn()?e instanceof HTMLElement||e instanceof B(e).HTMLElement:!1}function En(e){return!Cn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof B(e).ShadowRoot}function Dn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=W(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function On(e){return/^(table|td|th)$/.test(wn(e))}function kn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function An(e){let t=H(e)?W(e):e;return K(t.transform)||K(t.translate)||K(t.scale)||K(t.rotate)||K(t.perspective)||!Mn()&&(K(t.backdropFilter)||K(t.filter))||Rn.test(t.willChange||``)||zn.test(t.contain||``)}function jn(e){let t=G(e);for(;U(t)&&!Nn(t);){if(An(t))return t;if(kn(t))return null;t=G(t)}return null}function Mn(){return Bn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Bn}function Nn(e){return/^(html|body|#document)$/.test(wn(e))}function W(e){return B(e).getComputedStyle(e)}function Pn(e){return H(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function G(e){if(wn(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||En(e)&&e.host||V(e);return En(t)?t.host:t}function Fn(e){let t=G(e);return Nn(t)?(e.ownerDocument||e).body:U(t)&&Dn(t)?t:Fn(t)}function In(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=Fn(e),i=r===e.ownerDocument?.body,a=B(r);if(i){let e=Ln(a);return t.concat(a,a.visualViewport||[],Dn(r)?r:[],e&&n?In(e):[])}return t.concat(r,In(r,[],n))}function Ln(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Rn,zn,K,Bn;function Vn(){return(Vn=e((()=>{Rn=/transform|translate|scale|rotate|perspective|filter/,zn=/paint|layout|strict|content/,K=e=>!!e&&e!==`none`})))()}function Hn(e){let t=W(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=U(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=cn(n)!==a||cn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Un(e){return H(e)?e:e.contextElement}function Wn(e){let t=Un(e);if(!U(t))return z(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Hn(t),o=(a?cn(n.width):n.width)/r,s=(a?cn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Gn(e){let t=B(e);return!Mn()||!t.visualViewport?fr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Kn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===B(e)}function q(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Un(e),o=z(1);t&&(r?H(r)&&(o=Wn(r)):o=Wn(e));let s=Kn(a,n,r)?Gn(a):z(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=B(a),t=H(r)?B(r):r,n=e,i=Ln(n);for(;i&&t!==n;){let e=Wn(i),t=i.getBoundingClientRect(),r=W(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=B(i),i=Ln(n)}}return on({width:u,height:d,x:c,y:l})}function qn(e,t){let n=Pn(e).scrollLeft;return t?t.left+n:q(V(e)).left+n}function Jn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-qn(e,n),y:n.top+t.scrollTop}}function Yn(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=V(r),s=t?kn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=z(1),u=z(0),d=U(r);if((d||!a)&&((wn(r)!==`body`||Dn(o))&&(c=Pn(r)),d)){let e=q(r);l=Wn(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Jn(o,c):z(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Xn(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function Zn(e){let t=Pn(e),n=e.ownerDocument.body,r=R(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=R(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+qn(e),o=-t.scrollTop;return W(n).direction===`rtl`&&(a+=R(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function Qn(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=B(e),a=V(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!Mn()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(qn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=pr&&(s-=o)}return{width:s,height:c,x:l,y:u}}function $n(e,t){let n=q(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Wn(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function er(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=Qn(e,n,t);else if(t===`document`)r=Zn(V(e));else if(H(t))r=$n(t,n);else{let n=Gn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return on(r)}function tr(e,t){let n=t.get(e);if(n)return n;let r=In(e,[],!1).filter(e=>H(e)&&wn(e)!==`body`),i=null,a=W(e).position===`fixed`,o=a?G(e):e;for(;H(o)&&!Nn(o);){let e=W(o),t=An(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=G(o)}return t.set(e,r),r}function nr(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?kn(t)?[]:tr(t,this._c):[].concat(n),r],o=er(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=er(t,a[e],i);s=R(n.top,s),c=sn(n.right,c),l=sn(n.bottom,l),u=R(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function rr(e){let{width:t,height:n}=Hn(e);return{width:t,height:n}}function ir(e,t,n){let r=U(t),i=V(t),a=n===`fixed`,o=q(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=z(0);if((r||!a)&&((wn(t)!==`body`||Dn(i))&&(s=Pn(t)),r)){let e=q(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=qn(i));let l=i&&!r&&!a?Jn(i,s):z(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function ar(e){return W(e).position===`static`}function or(e,t){if(!U(e)||W(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return V(e)===n&&(n=n.ownerDocument.body),n}function sr(e,t){let n=B(e);if(kn(e))return n;if(!U(e)){let t=G(e);for(;t&&!Nn(t);){if(H(t)&&!ar(t))return t;t=G(t)}return n}let r=or(e,t);for(;r&&On(r)&&ar(r);)r=or(r,t);return r&&Nn(r)&&ar(r)&&!An(r)?n:r||jn(e)||n}function cr(e){return W(e).direction===`rtl`}function lr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function ur(e,t,n){let r=null,i,a=V(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=ln(d),h=ln(a.clientWidth-(u+f)),g=ln(a.clientHeight-(d+p)),_=ln(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:R(0,sn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!lr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=B(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function dr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Un(e),u=i||a?[...l?In(l):[],...t?In(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?ur(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?q(e):null;c&&g();function g(){let t=q(e);h&&!lr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var fr,pr,mr,hr,gr,_r,vr;function yr(){return(yr=e((()=>{Sn(),hn(),Vn(),fr=z(0),pr=25,mr=async function(e){let t=this.getOffsetParent||sr,n=this.getDimensions,r=await n(e.floating);return{reference:ir(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},hr={convertOffsetParentRelativeRectToViewportRelativeRect:Yn,getDocumentElement:V,getClippingRect:nr,getOffsetParent:sr,getElementRects:mr,getClientRects:Xn,getDimensions:rr,getScale:Wn,isElement:H,isRTL:cr},gr=xn,_r=bn,vr=(e,t,n)=>{let r=new Map,i=n??{},a={...hr,...i.platform,_c:r};return yn(e,t,{...i,platform:a})}})))()}var br,xr;function Sr(){return(Sr=e((()=>{N(),yr(),br=[_r({fallbackAxisSideDirection:`start`,crossAxis:!1}),gr()],xr=({placement:e=`bottom-start`,strategy:t,middleware:n=br}={})=>{let[r,i]=A(),[a,o]=A(),[s,c]=A();return O(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return dr(r,a,()=>vr(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:De(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})))()}var Cr;function wr(){return(wr=e((()=>{N(),Cr=e=>{let t=De(()=>({}),[]);return De(()=>Object.assign(t,e),[t,...Object.values(e)])}})))()}var Tr,Er,Dr;function Or(){return(Or=e((()=>{wr(),N(),Tr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,Er=({disabled:e,onFocus:t})=>{let[n,r]=A(),{focused:i,closed:a}=n||{},o=i&&!e,s=Cr({closed:a,onFocus:t}),c=k(e=>r(t=>({...t,closed:e})),[]),l=k(e=>{let t=e.currentTarget;return Tr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:k(e=>{let t=Tr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},Dr=e=>{let t=Er(e),{onFocus:n}=t,r=j();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})))()}var kr,Ar,jr;function Mr(){return(Mr=e((()=>{N(),n(),Pt(),st(),Rt(),Ut(),Sr(),Or(),kr=e=>e.preventDefault(),Ar=w`
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
`,jr=e=>{let{placement:t,strategy:n,middleware:i,render:a}=e,{active:o,onToggle:s}=Dr(e),l=j(),{styles:u,setReference:d,setFloating:f}=xr({placement:t,strategy:n,middleware:i}),p=k(e=>{l.current=e,f(e)},[f]);return O(()=>{let e=l.current;e&&(o&&!e.matches(`:popover-open`)&&e.showPopover?.(),!o&&e.matches(`:popover-open`)&&e.hidePopover?.())},[o]),c`
		<div class="anchor" part="anchor" ${P(d)}>
			<button
				@mousedown=${kr}
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
			style="${Lt(u)}"
			${P(p)}
			><slot></slot>${Nt([a],()=>a?.()||r)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,M(jr,{styleSheets:[Ar]}))})))()}var Nr,Pr,Fr;function Ir(){return(Ir=e((()=>{N(),n(),Nr=w`
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
`,Pr=()=>c` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,M(Pr,{styleSheets:[Nr]})),Fr=({placement:e})=>c` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,M(Fr))})))()}var Lr;function Rr(){return(Rr=e((()=>{N(),Lr=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=j(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return O(()=>{if(r&&!n)return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),O(()=>{if(i&&!n)return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})))()}var zr,Br,Vr;function Hr(){return(Hr=e((()=>{N(),n(),st(),Rr(),zr=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Br=w`
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
`,Vr=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:a}=e,o=j(),[s,l]=Ie(`opened`,!1),u=k(()=>{n||(l(!0),o.current?.showPopover?.())},[n]),d=k(()=>{l(!1),o.current?.hidePopover?.()},[]),f=k(()=>{n||(o.current?.matches(`:popover-open`)?d():u())},[n]);O(()=>{let e=o.current;e&&(s?e.showPopover?.():e.hidePopover?.())},[s]),O(()=>{e.toggleAttribute(`opened`,!!s)},[s]);let{scheduleClose:p,cancelClose:m}=Lr({host:e,popoverRef:o,disabled:n,openOnHover:i,openOnFocus:a,open:u,close:d}),h=a?u:f,g=k(t=>{zr(t),l(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return c`
		<slot name="button" @click=${h}></slot>
		${n&&r?c`<slot></slot>`:c`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${P(e=>e&&(o.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,M(Vr,{styleSheets:[Br],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})))()}function Ur(){return(Ur=e((()=>{Mr(),Ir(),Or(),Hr()})))()}function Wr(){return(Wr=e((()=>{n(),I()})))()}function Gr(){return(Gr=e((()=>{n(),I()})))()}function Kr(){return(Kr=e((()=>{n(),I()})))()}function qr(){return(qr=e((()=>{n(),I()})))()}function Jr(){return(Jr=e((()=>{n(),I()})))()}function Yr(){return(Yr=e((()=>{n(),I()})))()}function Xr(){return(Xr=e((()=>{n(),I()})))()}function Zr(){return(Zr=e((()=>{n(),I()})))()}function Qr(){return(Qr=e((()=>{n(),I()})))()}function $r(){return($r=e((()=>{n(),I()})))()}function ei(){return(ei=e((()=>{n(),I()})))()}function ti(){return(ti=e((()=>{n(),I()})))()}function ni(){return(ni=e((()=>{n(),I()})))()}function ri(){return(ri=e((()=>{n(),I()})))()}function ii(){return(ii=e((()=>{n(),I()})))()}function ai(){return(ai=e((()=>{n(),I()})))()}function oi(){return(oi=e((()=>{n(),I()})))()}function si(){return(si=e((()=>{n(),I()})))()}function ci(){return(ci=e((()=>{n(),I()})))()}function li(){return(li=e((()=>{n(),I()})))()}function ui(){return(ui=e((()=>{n(),I()})))()}function di(){return(di=e((()=>{n(),I()})))()}function fi(){return(fi=e((()=>{n(),I()})))()}function pi(){return(pi=e((()=>{n(),I()})))()}function mi(){return(mi=e((()=>{n(),I()})))()}function hi(){return(hi=e((()=>{n(),I()})))()}function gi(){return(gi=e((()=>{n(),I()})))()}function _i(){return(_i=e((()=>{n(),I()})))()}function vi(){return(vi=e((()=>{n(),I()})))()}function yi(){return(yi=e((()=>{n(),I()})))()}function bi(){return(bi=e((()=>{n(),I()})))()}function xi(){return(xi=e((()=>{n(),I()})))()}function Si(){return(Si=e((()=>{n(),I()})))()}function Ci(){return(Ci=e((()=>{n(),I()})))()}function wi(){return(wi=e((()=>{n(),I()})))()}function Ti(){return(Ti=e((()=>{n(),I()})))()}function Ei(){return(Ei=e((()=>{n(),I()})))()}function Di(){return(Di=e((()=>{n(),I()})))()}function Oi(){return(Oi=e((()=>{n(),I()})))()}function ki(){return(ki=e((()=>{n(),I()})))()}function Ai(){return(Ai=e((()=>{n(),I()})))()}function ji(){return(ji=e((()=>{n(),I()})))()}function Mi(){return(Mi=e((()=>{n(),I()})))()}function Ni(){return(Ni=e((()=>{n(),I()})))()}function Pi(){return(Pi=e((()=>{n(),I()})))()}function Fi(){return(Fi=e((()=>{n(),I()})))()}function Ii(){return(Ii=e((()=>{n(),I()})))()}function Li(){return(Li=e((()=>{n(),I()})))()}function Ri(){return(Ri=e((()=>{n(),I()})))()}function zi(){return(zi=e((()=>{n(),I()})))()}function Bi(){return(Bi=e((()=>{n(),I()})))()}function Vi(){return(Vi=e((()=>{n(),I()})))()}function Hi(){return(Hi=e((()=>{n(),I()})))()}function Ui(){return(Ui=e((()=>{n(),I()})))()}function Wi(){return(Wi=e((()=>{n(),I()})))()}function Gi(){return(Gi=e((()=>{n(),I()})))()}function Ki(){return(Ki=e((()=>{n(),I()})))()}function qi(){return(qi=e((()=>{n(),I()})))()}function Ji(){return(Ji=e((()=>{n(),I()})))()}function Yi(){return(Yi=e((()=>{n(),I()})))()}function Xi(){return(Xi=e((()=>{n(),I()})))()}function Zi(){return(Zi=e((()=>{n(),I()})))()}function Qi(){return(Qi=e((()=>{n(),I()})))()}function $i(){return($i=e((()=>{n(),I()})))()}function ea(){return(ea=e((()=>{n(),I()})))()}function ta(){return(ta=e((()=>{n(),I()})))()}function na(){return(na=e((()=>{n(),I()})))()}function ra(){return(ra=e((()=>{n(),I()})))()}function ia(){return(ia=e((()=>{n(),I()})))()}function aa(){return(aa=e((()=>{n(),I()})))()}function oa(){return(oa=e((()=>{n(),I()})))()}function sa(){return(sa=e((()=>{n(),I()})))()}function ca(){return(ca=e((()=>{n(),I()})))()}function la(){return(la=e((()=>{n(),I()})))()}function ua(){return(ua=e((()=>{n(),I()})))()}function da(){return(da=e((()=>{n(),I()})))()}function fa(){return(fa=e((()=>{n(),I()})))()}function pa(){return(pa=e((()=>{n(),I()})))()}function ma(){return(ma=e((()=>{n(),I()})))()}function ha(){return(ha=e((()=>{n(),I()})))()}function ga(){return(ga=e((()=>{n(),I()})))()}function _a(){return(_a=e((()=>{n(),I()})))()}function va(){return(va=e((()=>{n(),I()})))()}function ya(){return(ya=e((()=>{n(),I()})))()}function ba(){return(ba=e((()=>{n(),I()})))()}function xa(){return(xa=e((()=>{n(),I()})))()}function Sa(){return(Sa=e((()=>{n(),I()})))()}function Ca(){return(Ca=e((()=>{n(),I()})))()}function wa(){return(wa=e((()=>{n(),I()})))()}function Ta(){return(Ta=e((()=>{n(),I()})))()}function Ea(){return(Ea=e((()=>{n(),I()})))()}function Da(){return(Da=e((()=>{n(),I()})))()}function Oa(){return(Oa=e((()=>{n(),I()})))()}function ka(){return(ka=e((()=>{n(),I()})))()}function Aa(){return(Aa=e((()=>{n(),I()})))()}function ja(){return(ja=e((()=>{n(),I()})))()}function Ma(){return(Ma=e((()=>{n(),I()})))()}function Na(){return(Na=e((()=>{n(),I()})))()}function Pa(){return(Pa=e((()=>{n(),I()})))()}function Fa(){return(Fa=e((()=>{n(),I()})))()}function Ia(){return(Ia=e((()=>{n(),I()})))()}function La(){return(La=e((()=>{n(),I()})))()}function Ra(){return(Ra=e((()=>{n(),I()})))()}function za(){return(za=e((()=>{n(),I()})))()}function Ba(){return(Ba=e((()=>{n(),I()})))()}function Va(){return(Va=e((()=>{n(),I()})))()}function Ha(){return(Ha=e((()=>{n(),I()})))()}function Ua(){return(Ua=e((()=>{n(),I()})))()}function Wa(){return(Wa=e((()=>{n(),I()})))()}function Ga(){return(Ga=e((()=>{n(),I()})))()}function Ka(){return(Ka=e((()=>{n(),I()})))()}function qa(){return(qa=e((()=>{n(),I()})))()}function Ja(){return(Ja=e((()=>{n(),I()})))()}function Ya(){return(Ya=e((()=>{n(),I()})))()}function Xa(){return(Xa=e((()=>{n(),I()})))()}function Za(){return(Za=e((()=>{n(),I()})))()}function Qa(){return(Qa=e((()=>{n(),I()})))()}function $a(){return($a=e((()=>{n(),I()})))()}function eo(){return(eo=e((()=>{n(),I()})))()}function to(){return(to=e((()=>{n(),I()})))()}function no(){return(no=e((()=>{n(),I()})))()}function ro(){return(ro=e((()=>{n(),I()})))()}function io(){return(io=e((()=>{n(),I()})))()}function ao(){return(ao=e((()=>{n(),I()})))()}function oo(){return(oo=e((()=>{n(),I()})))()}function so(){return(so=e((()=>{n(),I()})))()}function co(){return(co=e((()=>{n(),I()})))()}function lo(){return(lo=e((()=>{n(),I()})))()}function uo(){return(uo=e((()=>{n(),I()})))()}function fo(){return(fo=e((()=>{n(),I()})))()}function po(){return(po=e((()=>{n(),I()})))()}function mo(){return(mo=e((()=>{n(),I()})))()}function ho(){return(ho=e((()=>{n(),I()})))()}function go(){return(go=e((()=>{n(),I()})))()}function _o(){return(_o=e((()=>{n(),I()})))()}function vo(){return(vo=e((()=>{n(),I()})))()}function yo(){return(yo=e((()=>{n(),I()})))()}function bo(){return(bo=e((()=>{n(),I()})))()}function xo(){return(xo=e((()=>{n(),I()})))()}function So(){return(So=e((()=>{n(),I()})))()}function Co(){return(Co=e((()=>{n(),I()})))()}function wo(){return(wo=e((()=>{n(),I()})))()}function To(){return(To=e((()=>{n(),I()})))()}function Eo(){return(Eo=e((()=>{n(),I()})))()}function Do(){return(Do=e((()=>{n(),I()})))()}function Oo(){return(Oo=e((()=>{n(),I()})))()}function ko(){return(ko=e((()=>{n(),I()})))()}function Ao(){return(Ao=e((()=>{n(),I()})))()}function jo(){return(jo=e((()=>{n(),I()})))()}function Mo(){return(Mo=e((()=>{n(),I()})))()}function No(){return(No=e((()=>{n(),I()})))()}function Po(){return(Po=e((()=>{n(),I()})))()}function Fo(){return(Fo=e((()=>{n(),I()})))()}function Io(){return(Io=e((()=>{n(),I()})))()}function Lo(){return(Lo=e((()=>{n(),I()})))()}function Ro(){return(Ro=e((()=>{n(),I()})))()}function zo(){return(zo=e((()=>{n(),I()})))()}function Bo(){return(Bo=e((()=>{n(),I()})))()}function Vo(){return(Vo=e((()=>{n(),I()})))()}function Ho(){return(Ho=e((()=>{n(),I()})))()}function Uo(){return(Uo=e((()=>{n(),I()})))()}function Wo(){return(Wo=e((()=>{n(),I()})))()}function Go(){return(Go=e((()=>{n(),I()})))()}function Ko(){return(Ko=e((()=>{n(),I()})))()}function qo(){return(qo=e((()=>{n(),I()})))()}function Jo(){return(Jo=e((()=>{n(),I()})))()}function Yo(){return(Yo=e((()=>{n(),I()})))()}function Xo(){return(Xo=e((()=>{n(),I()})))()}function Zo(){return(Zo=e((()=>{n(),I()})))()}function Qo(){return(Qo=e((()=>{n(),I()})))()}function $o(){return($o=e((()=>{n(),I()})))()}function es(){return(es=e((()=>{n(),I()})))()}function ts(){return(ts=e((()=>{n(),I()})))()}function ns(){return(ns=e((()=>{n(),I()})))()}function rs(){return(rs=e((()=>{n(),I()})))()}function is(){return(is=e((()=>{n(),I()})))()}function as(){return(as=e((()=>{n(),I()})))()}function os(){return(os=e((()=>{n(),I()})))()}function ss(){return(ss=e((()=>{n(),I()})))()}function cs(){return(cs=e((()=>{n(),I()})))()}function ls(){return(ls=e((()=>{n(),I()})))()}function us(){return(us=e((()=>{n(),I()})))()}function ds(){return(ds=e((()=>{n(),I()})))()}function fs(){return(fs=e((()=>{n(),I()})))()}function ps(){return(ps=e((()=>{n(),I()})))()}function ms(){return(ms=e((()=>{n(),I()})))()}function hs(){return(hs=e((()=>{n(),I()})))()}function gs(){return(gs=e((()=>{n(),I()})))()}function _s(){return(_s=e((()=>{n(),I()})))()}function vs(){return(vs=e((()=>{n(),I()})))()}function ys(){return(ys=e((()=>{n(),I()})))()}function bs(){return(bs=e((()=>{n(),I()})))()}function xs(){return(xs=e((()=>{n(),I()})))()}function Ss(){return(Ss=e((()=>{n(),I()})))()}function Cs(){return(Cs=e((()=>{n(),I()})))()}function ws(){return(ws=e((()=>{n(),I()})))()}function Ts(){return(Ts=e((()=>{n(),I()})))()}function Es(){return(Es=e((()=>{n(),I()})))()}function Ds(){return(Ds=e((()=>{n(),I()})))()}function Os(){return(Os=e((()=>{n(),I()})))()}function ks(){return(ks=e((()=>{n(),I()})))()}function As(){return(As=e((()=>{n(),I()})))()}function js(){return(js=e((()=>{n(),I()})))()}function Ms(){return(Ms=e((()=>{n(),I()})))()}function Ns(){return(Ns=e((()=>{n(),I()})))()}function Ps(){return(Ps=e((()=>{n(),I()})))()}function Fs(){return(Fs=e((()=>{n(),I()})))()}function Is(){return(Is=e((()=>{n(),I()})))()}function Ls(){return(Ls=e((()=>{n(),I()})))()}function Rs(){return(Rs=e((()=>{n(),I()})))()}function zs(){return(zs=e((()=>{n(),I()})))()}function Bs(){return(Bs=e((()=>{n(),I()})))()}function Vs(){return(Vs=e((()=>{n(),I()})))()}function Hs(){return(Hs=e((()=>{n(),I()})))()}function Us(){return(Us=e((()=>{n(),I()})))()}function Ws(){return(Ws=e((()=>{n(),I()})))()}function Gs(){return(Gs=e((()=>{n(),I()})))()}function Ks(){return(Ks=e((()=>{n(),I()})))()}function qs(){return(qs=e((()=>{n(),I()})))()}function Js(){return(Js=e((()=>{n(),I()})))()}function Ys(){return(Ys=e((()=>{n(),I()})))()}function Xs(){return(Xs=e((()=>{n(),I()})))()}function Zs(){return(Zs=e((()=>{n(),I()})))()}function Qs(){return(Qs=e((()=>{n(),I()})))()}function $s(){return($s=e((()=>{n(),I()})))()}function ec(){return(ec=e((()=>{n(),I()})))()}function tc(){return(tc=e((()=>{n(),I()})))()}function nc(){return(nc=e((()=>{n(),I()})))()}function rc(){return(rc=e((()=>{n(),I()})))()}function ic(){return(ic=e((()=>{n(),I()})))()}function ac(){return(ac=e((()=>{n(),I()})))()}function oc(){return(oc=e((()=>{n(),I()})))()}function sc(){return(sc=e((()=>{n(),I()})))()}function cc(){return(cc=e((()=>{n(),I()})))()}function lc(){return(lc=e((()=>{n(),I()})))()}function uc(){return(uc=e((()=>{n(),I()})))()}function dc(){return(dc=e((()=>{n(),I()})))()}function fc(){return(fc=e((()=>{n(),I()})))()}function pc(){return(pc=e((()=>{n(),I()})))()}function mc(){return(mc=e((()=>{n(),I()})))()}function hc(){return(hc=e((()=>{n(),I()})))()}function gc(){return(gc=e((()=>{n(),I()})))()}function _c(){return(_c=e((()=>{n(),I()})))()}function vc(){return(vc=e((()=>{n(),I()})))()}function yc(){return(yc=e((()=>{n(),I()})))()}function bc(){return(bc=e((()=>{n(),I()})))()}function xc(){return(xc=e((()=>{n(),I()})))()}function Sc(){return(Sc=e((()=>{n(),I()})))()}function Cc(){return(Cc=e((()=>{n(),I()})))()}function wc(){return(wc=e((()=>{n(),I()})))()}function Tc(){return(Tc=e((()=>{n(),I()})))()}function Ec(){return(Ec=e((()=>{n(),I()})))()}function Dc(){return(Dc=e((()=>{n(),I()})))()}function Oc(){return(Oc=e((()=>{n(),I()})))()}function kc(){return(kc=e((()=>{n(),I()})))()}function Ac(){return(Ac=e((()=>{n(),I()})))()}function jc(){return(jc=e((()=>{n(),I()})))()}function Mc(){return(Mc=e((()=>{n(),I()})))()}function Nc(){return(Nc=e((()=>{n(),I()})))()}function Pc(){return(Pc=e((()=>{n(),I()})))()}function Fc(){return(Fc=e((()=>{n(),I()})))()}function Ic(){return(Ic=e((()=>{n(),I()})))()}function Lc(){return(Lc=e((()=>{n(),I()})))()}function Rc(){return(Rc=e((()=>{n(),I()})))()}function zc(){return(zc=e((()=>{n(),I()})))()}function Bc(){return(Bc=e((()=>{n(),I()})))()}function Vc(){return(Vc=e((()=>{n(),I()})))()}function Hc(){return(Hc=e((()=>{n(),I()})))()}function Uc(){return(Uc=e((()=>{n(),I()})))()}function Wc(){return(Wc=e((()=>{n(),I()})))()}function Gc(){return(Gc=e((()=>{n(),I()})))()}function Kc(){return(Kc=e((()=>{n(),I()})))()}function qc(){return(qc=e((()=>{n(),I()})))()}function Jc(){return(Jc=e((()=>{n(),I()})))()}function Yc(){return(Yc=e((()=>{n(),I()})))()}function Xc(){return(Xc=e((()=>{n(),I()})))()}function Zc(){return(Zc=e((()=>{n(),I()})))()}function Qc(){return(Qc=e((()=>{n(),I()})))()}function $c(){return($c=e((()=>{n(),I()})))()}function el(){return(el=e((()=>{n(),I()})))()}function tl(){return(tl=e((()=>{n(),I()})))()}function nl(){return(nl=e((()=>{n(),I()})))()}function rl(){return(rl=e((()=>{n(),I()})))()}function il(){return(il=e((()=>{n(),I()})))()}function al(){return(al=e((()=>{n(),I()})))()}function ol(){return(ol=e((()=>{n(),I()})))()}function sl(){return(sl=e((()=>{n(),I()})))()}function cl(){return(cl=e((()=>{n(),I()})))()}function ll(){return(ll=e((()=>{n(),I()})))()}function ul(){return(ul=e((()=>{n(),I()})))()}function dl(){return(dl=e((()=>{n(),I()})))()}function fl(){return(fl=e((()=>{n(),I()})))()}function pl(){return(pl=e((()=>{n(),I()})))()}function ml(){return(ml=e((()=>{n(),I()})))()}function hl(){return(hl=e((()=>{n(),I()})))()}function gl(){return(gl=e((()=>{n(),I()})))()}function _l(){return(_l=e((()=>{n(),I()})))()}function vl(){return(vl=e((()=>{n(),I()})))()}function yl(){return(yl=e((()=>{n(),I()})))()}function bl(){return(bl=e((()=>{n(),I()})))()}function xl(){return(xl=e((()=>{n(),I()})))()}function Sl(){return(Sl=e((()=>{n(),I()})))()}function Cl(){return(Cl=e((()=>{n(),I()})))()}function wl(){return(wl=e((()=>{n(),I()})))()}function Tl(){return(Tl=e((()=>{n(),I()})))()}function El(){return(El=e((()=>{n(),I()})))()}function Dl(){return(Dl=e((()=>{n(),I()})))()}function Ol(){return(Ol=e((()=>{n(),I()})))()}function kl(){return(kl=e((()=>{n(),I()})))()}function Al(){return(Al=e((()=>{n(),I()})))()}function jl(){return(jl=e((()=>{n(),I()})))()}function Ml(){return(Ml=e((()=>{n(),I()})))()}function Nl(){return(Nl=e((()=>{n(),I()})))()}function Pl(){return(Pl=e((()=>{n(),I()})))()}function Fl(){return(Fl=e((()=>{n(),I()})))()}function Il(){return(Il=e((()=>{n(),I()})))()}function Ll(){return(Ll=e((()=>{n(),I()})))()}function Rl(){return(Rl=e((()=>{n(),I()})))()}function zl(){return(zl=e((()=>{n(),I()})))()}function Bl(){return(Bl=e((()=>{n(),I()})))()}function Vl(){return(Vl=e((()=>{n(),I()})))()}function Hl(){return(Hl=e((()=>{n(),I()})))()}function Ul(){return(Ul=e((()=>{n(),I()})))()}function Wl(){return(Wl=e((()=>{n(),I()})))()}function Gl(){return(Gl=e((()=>{n(),I()})))()}function Kl(){return(Kl=e((()=>{n(),I()})))()}function ql(){return(ql=e((()=>{n(),I()})))()}function Jl(){return(Jl=e((()=>{n(),I()})))()}function Yl(){return(Yl=e((()=>{n(),I()})))()}function Xl(){return(Xl=e((()=>{n(),I()})))()}function Zl(){return(Zl=e((()=>{n(),I()})))()}function Ql(){return(Ql=e((()=>{n(),I()})))()}function $l(){return($l=e((()=>{n(),I()})))()}function eu(){return(eu=e((()=>{n(),I()})))()}function tu(){return(tu=e((()=>{n(),I()})))()}function nu(){return(nu=e((()=>{n(),I()})))()}function ru(){return(ru=e((()=>{n(),I()})))()}function iu(){return(iu=e((()=>{n(),I()})))()}function au(){return(au=e((()=>{n(),I()})))()}function ou(){return(ou=e((()=>{n(),I()})))()}function su(){return(su=e((()=>{n(),I()})))()}function cu(){return(cu=e((()=>{n(),I()})))()}function lu(){return(lu=e((()=>{n(),I()})))()}function uu(){return(uu=e((()=>{n(),I()})))()}function du(){return(du=e((()=>{n(),I()})))()}function fu(){return(fu=e((()=>{n(),I()})))()}function pu(){return(pu=e((()=>{n(),I()})))()}function mu(){return(mu=e((()=>{n(),I()})))()}function hu(){return(hu=e((()=>{n(),I()})))()}function gu(){return(gu=e((()=>{n(),I()})))()}function _u(){return(_u=e((()=>{n(),I()})))()}function vu(){return(vu=e((()=>{n(),I()})))()}function yu(){return(yu=e((()=>{n(),I()})))()}function bu(){return(bu=e((()=>{n(),I()})))()}function xu(){return(xu=e((()=>{n(),I()})))()}function Su(){return(Su=e((()=>{n(),I()})))()}function Cu(){return(Cu=e((()=>{n(),I()})))()}function wu(){return(wu=e((()=>{n(),I()})))()}function Tu(){return(Tu=e((()=>{n(),I()})))()}function Eu(){return(Eu=e((()=>{n(),I()})))()}function Du(){return(Du=e((()=>{n(),I()})))()}function Ou(){return(Ou=e((()=>{n(),I()})))()}function ku(){return(ku=e((()=>{n(),I()})))()}function Au(){return(Au=e((()=>{n(),I()})))()}function ju(){return(ju=e((()=>{n(),I()})))()}function Mu(){return(Mu=e((()=>{n(),I()})))()}function Nu(){return(Nu=e((()=>{n(),I()})))()}function Pu(){return(Pu=e((()=>{n(),I()})))()}function Fu(){return(Fu=e((()=>{n(),I()})))()}function Iu(){return(Iu=e((()=>{n(),I()})))()}function Lu(){return(Lu=e((()=>{n(),I()})))()}function Ru(){return(Ru=e((()=>{n(),I()})))()}function zu(){return(zu=e((()=>{n(),I()})))()}function Bu(){return(Bu=e((()=>{n(),I()})))()}function Vu(){return(Vu=e((()=>{n(),I()})))()}function Hu(){return(Hu=e((()=>{n(),I()})))()}function Uu(){return(Uu=e((()=>{n(),I()})))()}function Wu(){return(Wu=e((()=>{n(),I()})))()}function Gu(){return(Gu=e((()=>{n(),I()})))()}function Ku(){return(Ku=e((()=>{n(),I()})))()}function qu(){return(qu=e((()=>{n(),I()})))()}function Ju(){return(Ju=e((()=>{n(),I()})))()}function Yu(){return(Yu=e((()=>{n(),I()})))()}function Xu(){return(Xu=e((()=>{n(),I()})))()}function Zu(){return(Zu=e((()=>{n(),I()})))()}function Qu(){return(Qu=e((()=>{n(),I()})))()}function $u(){return($u=e((()=>{n(),I()})))()}function ed(){return(ed=e((()=>{n(),I()})))()}function td(){return(td=e((()=>{n(),I()})))()}function nd(){return(nd=e((()=>{n(),I()})))()}function rd(){return(rd=e((()=>{n(),I()})))()}function id(){return(id=e((()=>{n(),I()})))()}function ad(){return(ad=e((()=>{n(),I()})))()}function od(){return(od=e((()=>{n(),I()})))()}function sd(){return(sd=e((()=>{n(),I()})))()}function cd(){return(cd=e((()=>{n(),I()})))()}function ld(){return(ld=e((()=>{n(),I()})))()}function ud(){return(ud=e((()=>{n(),I()})))()}function dd(){return(dd=e((()=>{n(),I()})))()}function fd(){return(fd=e((()=>{n(),I()})))()}function pd(){return(pd=e((()=>{n(),I()})))()}function md(){return(md=e((()=>{n(),I()})))()}function hd(){return(hd=e((()=>{n(),I()})))()}function gd(){return(gd=e((()=>{n(),I()})))()}function _d(){return(_d=e((()=>{n(),I()})))()}function vd(){return(vd=e((()=>{n(),I()})))()}function yd(){return(yd=e((()=>{n(),I()})))()}function bd(){return(bd=e((()=>{n(),I()})))()}var xd;function Sd(){return(Sd=e((()=>{n(),I(),xd=({slot:e,title:t,className:n,width:r=`24`,height:a=`24`,styles:o}={})=>c`
  <svg
    slot=${F(e)}
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
    style=${F(o)}
  >
    ${ct(t,()=>i`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})))()}function Cd(){return(Cd=e((()=>{n(),I()})))()}function wd(){return(wd=e((()=>{n(),I()})))()}function Td(){return(Td=e((()=>{n(),I()})))()}function Ed(){return(Ed=e((()=>{n(),I()})))()}function Dd(){return(Dd=e((()=>{n(),I()})))()}function Od(){return(Od=e((()=>{n(),I()})))()}function kd(){return(kd=e((()=>{n(),I()})))()}function Ad(){return(Ad=e((()=>{n(),I()})))()}function jd(){return(jd=e((()=>{n(),I()})))()}function Md(){return(Md=e((()=>{n(),I()})))()}function Nd(){return(Nd=e((()=>{n(),I()})))()}function Pd(){return(Pd=e((()=>{n(),I()})))()}function Fd(){return(Fd=e((()=>{n(),I()})))()}function Id(){return(Id=e((()=>{n(),I()})))()}function Ld(){return(Ld=e((()=>{n(),I()})))()}function Rd(){return(Rd=e((()=>{n(),I()})))()}function zd(){return(zd=e((()=>{n(),I()})))()}function Bd(){return(Bd=e((()=>{n(),I()})))()}function Vd(){return(Vd=e((()=>{n(),I()})))()}function Hd(){return(Hd=e((()=>{n(),I()})))()}function Ud(){return(Ud=e((()=>{n(),I()})))()}function Wd(){return(Wd=e((()=>{n(),I()})))()}function Gd(){return(Gd=e((()=>{n(),I()})))()}function Kd(){return(Kd=e((()=>{n(),I()})))()}function qd(){return(qd=e((()=>{n(),I()})))()}function Jd(){return(Jd=e((()=>{n(),I()})))()}function Yd(){return(Yd=e((()=>{n(),I()})))()}function Xd(){return(Xd=e((()=>{n(),I()})))()}function Zd(){return(Zd=e((()=>{n(),I()})))()}function Qd(){return(Qd=e((()=>{n(),I()})))()}function $d(){return($d=e((()=>{n(),I()})))()}function ef(){return(ef=e((()=>{n(),I()})))()}function tf(){return(tf=e((()=>{n(),I()})))()}function nf(){return(nf=e((()=>{n(),I()})))()}function rf(){return(rf=e((()=>{n(),I()})))()}function af(){return(af=e((()=>{n(),I()})))()}function of(){return(of=e((()=>{n(),I()})))()}function sf(){return(sf=e((()=>{n(),I()})))()}function cf(){return(cf=e((()=>{n(),I()})))()}function lf(){return(lf=e((()=>{n(),I()})))()}function uf(){return(uf=e((()=>{n(),I()})))()}function df(){return(df=e((()=>{n(),I()})))()}function ff(){return(ff=e((()=>{n(),I()})))()}function pf(){return(pf=e((()=>{n(),I()})))()}function mf(){return(mf=e((()=>{n(),I()})))()}function hf(){return(hf=e((()=>{n(),I()})))()}function gf(){return(gf=e((()=>{n(),I()})))()}function _f(){return(_f=e((()=>{n(),I()})))()}function vf(){return(vf=e((()=>{n(),I()})))()}function yf(){return(yf=e((()=>{n(),I()})))()}function bf(){return(bf=e((()=>{n(),I()})))()}function xf(){return(xf=e((()=>{n(),I()})))()}function Sf(){return(Sf=e((()=>{n(),I()})))()}function Cf(){return(Cf=e((()=>{n(),I()})))()}function wf(){return(wf=e((()=>{n(),I()})))()}function Tf(){return(Tf=e((()=>{n(),I()})))()}function Ef(){return(Ef=e((()=>{n(),I()})))()}function Df(){return(Df=e((()=>{n(),I()})))()}function Of(){return(Of=e((()=>{n(),I()})))()}function kf(){return(kf=e((()=>{n(),I()})))()}function Af(){return(Af=e((()=>{n(),I()})))()}function jf(){return(jf=e((()=>{n(),I()})))()}function Mf(){return(Mf=e((()=>{n(),I()})))()}function Nf(){return(Nf=e((()=>{n(),I()})))()}function Pf(){return(Pf=e((()=>{n(),I()})))()}function Ff(){return(Ff=e((()=>{n(),I()})))()}function If(){return(If=e((()=>{n(),I()})))()}function Lf(){return(Lf=e((()=>{n(),I()})))()}function Rf(){return(Rf=e((()=>{n(),I()})))()}function zf(){return(zf=e((()=>{n(),I()})))()}function Bf(){return(Bf=e((()=>{n(),I()})))()}function Vf(){return(Vf=e((()=>{n(),I()})))()}function Hf(){return(Hf=e((()=>{n(),I()})))()}function Uf(){return(Uf=e((()=>{n(),I()})))()}function Wf(){return(Wf=e((()=>{n(),I()})))()}function Gf(){return(Gf=e((()=>{n(),I()})))()}function Kf(){return(Kf=e((()=>{n(),I()})))()}function qf(){return(qf=e((()=>{n(),I()})))()}function Jf(){return(Jf=e((()=>{n(),I()})))()}function Yf(){return(Yf=e((()=>{n(),I()})))()}function Xf(){return(Xf=e((()=>{n(),I()})))()}function Zf(){return(Zf=e((()=>{n(),I()})))()}function Qf(){return(Qf=e((()=>{n(),I()})))()}function $f(){return($f=e((()=>{n(),I()})))()}function ep(){return(ep=e((()=>{n(),I()})))()}function tp(){return(tp=e((()=>{n(),I()})))()}function np(){return(np=e((()=>{n(),I()})))()}function rp(){return(rp=e((()=>{n(),I()})))()}function ip(){return(ip=e((()=>{n(),I()})))()}function ap(){return(ap=e((()=>{n(),I()})))()}function op(){return(op=e((()=>{n(),I()})))()}function sp(){return(sp=e((()=>{n(),I()})))()}function cp(){return(cp=e((()=>{n(),I()})))()}function lp(){return(lp=e((()=>{n(),I()})))()}function up(){return(up=e((()=>{n(),I()})))()}function dp(){return(dp=e((()=>{n(),I()})))()}function fp(){return(fp=e((()=>{n(),I()})))()}function pp(){return(pp=e((()=>{n(),I()})))()}function mp(){return(mp=e((()=>{n(),I()})))()}function hp(){return(hp=e((()=>{n(),I()})))()}function gp(){return(gp=e((()=>{n(),I()})))()}function _p(){return(_p=e((()=>{n(),I()})))()}function vp(){return(vp=e((()=>{n(),I()})))()}function yp(){return(yp=e((()=>{n(),I()})))()}function bp(){return(bp=e((()=>{n(),I()})))()}function xp(){return(xp=e((()=>{n(),I()})))()}function Sp(){return(Sp=e((()=>{n(),I()})))()}function Cp(){return(Cp=e((()=>{n(),I()})))()}function wp(){return(wp=e((()=>{n(),I()})))()}function Tp(){return(Tp=e((()=>{n(),I()})))()}function Ep(){return(Ep=e((()=>{n(),I()})))()}function Dp(){return(Dp=e((()=>{n(),I()})))()}function Op(){return(Op=e((()=>{n(),I()})))()}function kp(){return(kp=e((()=>{n(),I()})))()}function Ap(){return(Ap=e((()=>{n(),I()})))()}function jp(){return(jp=e((()=>{n(),I()})))()}function Mp(){return(Mp=e((()=>{n(),I()})))()}function Np(){return(Np=e((()=>{n(),I()})))()}function Pp(){return(Pp=e((()=>{n(),I()})))()}function Fp(){return(Fp=e((()=>{n(),I()})))()}function Ip(){return(Ip=e((()=>{n(),I()})))()}function Lp(){return(Lp=e((()=>{n(),I()})))()}function Rp(){return(Rp=e((()=>{n(),I()})))()}function zp(){return(zp=e((()=>{n(),I()})))()}function Bp(){return(Bp=e((()=>{n(),I()})))()}function Vp(){return(Vp=e((()=>{n(),I()})))()}function Hp(){return(Hp=e((()=>{n(),I()})))()}function Up(){return(Up=e((()=>{n(),I()})))()}function Wp(){return(Wp=e((()=>{n(),I()})))()}function Gp(){return(Gp=e((()=>{n(),I()})))()}function Kp(){return(Kp=e((()=>{n(),I()})))()}function qp(){return(qp=e((()=>{n(),I()})))()}function Jp(){return(Jp=e((()=>{n(),I()})))()}function Yp(){return(Yp=e((()=>{n(),I()})))()}function Xp(){return(Xp=e((()=>{n(),I()})))()}function Zp(){return(Zp=e((()=>{n(),I()})))()}function Qp(){return(Qp=e((()=>{n(),I()})))()}function $p(){return($p=e((()=>{n(),I()})))()}function em(){return(em=e((()=>{n(),I()})))()}function tm(){return(tm=e((()=>{n(),I()})))()}function nm(){return(nm=e((()=>{n(),I()})))()}function rm(){return(rm=e((()=>{n(),I()})))()}function im(){return(im=e((()=>{n(),I()})))()}function am(){return(am=e((()=>{n(),I()})))()}function om(){return(om=e((()=>{n(),I()})))()}function sm(){return(sm=e((()=>{n(),I()})))()}function cm(){return(cm=e((()=>{n(),I()})))()}function lm(){return(lm=e((()=>{n(),I()})))()}function um(){return(um=e((()=>{n(),I()})))()}function dm(){return(dm=e((()=>{n(),I()})))()}function fm(){return(fm=e((()=>{n(),I()})))()}function pm(){return(pm=e((()=>{n(),I()})))()}function mm(){return(mm=e((()=>{n(),I()})))()}function hm(){return(hm=e((()=>{n(),I()})))()}function gm(){return(gm=e((()=>{n(),I()})))()}function _m(){return(_m=e((()=>{n(),I()})))()}function vm(){return(vm=e((()=>{n(),I()})))()}function ym(){return(ym=e((()=>{n(),I()})))()}function bm(){return(bm=e((()=>{n(),I()})))()}function xm(){return(xm=e((()=>{n(),I()})))()}function Sm(){return(Sm=e((()=>{n(),I()})))()}function Cm(){return(Cm=e((()=>{n(),I()})))()}function wm(){return(wm=e((()=>{n(),I()})))()}function Tm(){return(Tm=e((()=>{n(),I()})))()}function Em(){return(Em=e((()=>{n(),I()})))()}function Dm(){return(Dm=e((()=>{n(),I()})))()}function Om(){return(Om=e((()=>{n(),I()})))()}function km(){return(km=e((()=>{n(),I()})))()}function Am(){return(Am=e((()=>{n(),I()})))()}function jm(){return(jm=e((()=>{n(),I()})))()}function Mm(){return(Mm=e((()=>{n(),I()})))()}function Nm(){return(Nm=e((()=>{n(),I()})))()}function Pm(){return(Pm=e((()=>{n(),I()})))()}function Fm(){return(Fm=e((()=>{n(),I()})))()}function Im(){return(Im=e((()=>{n(),I()})))()}function Lm(){return(Lm=e((()=>{n(),I()})))()}function Rm(){return(Rm=e((()=>{n(),I()})))()}function zm(){return(zm=e((()=>{n(),I()})))()}function Bm(){return(Bm=e((()=>{n(),I()})))()}function Vm(){return(Vm=e((()=>{n(),I()})))()}function Hm(){return(Hm=e((()=>{n(),I()})))()}function Um(){return(Um=e((()=>{n(),I()})))()}function Wm(){return(Wm=e((()=>{n(),I()})))()}function Gm(){return(Gm=e((()=>{n(),I()})))()}function Km(){return(Km=e((()=>{n(),I()})))()}function qm(){return(qm=e((()=>{n(),I()})))()}function Jm(){return(Jm=e((()=>{n(),I()})))()}function Ym(){return(Ym=e((()=>{n(),I()})))()}function Xm(){return(Xm=e((()=>{n(),I()})))()}function Zm(){return(Zm=e((()=>{n(),I()})))()}function Qm(){return(Qm=e((()=>{n(),I()})))()}function $m(){return($m=e((()=>{n(),I()})))()}function eh(){return(eh=e((()=>{n(),I()})))()}function th(){return(th=e((()=>{n(),I()})))()}function nh(){return(nh=e((()=>{n(),I()})))()}function rh(){return(rh=e((()=>{n(),I()})))()}function ih(){return(ih=e((()=>{n(),I()})))()}function ah(){return(ah=e((()=>{n(),I()})))()}function oh(){return(oh=e((()=>{n(),I()})))()}function sh(){return(sh=e((()=>{n(),I()})))()}function ch(){return(ch=e((()=>{n(),I()})))()}function lh(){return(lh=e((()=>{n(),I()})))()}function uh(){return(uh=e((()=>{n(),I()})))()}function dh(){return(dh=e((()=>{n(),I()})))()}function fh(){return(fh=e((()=>{n(),I()})))()}function ph(){return(ph=e((()=>{n(),I()})))()}function mh(){return(mh=e((()=>{n(),I()})))()}function hh(){return(hh=e((()=>{n(),I()})))()}function gh(){return(gh=e((()=>{n(),I()})))()}function _h(){return(_h=e((()=>{n(),I()})))()}function vh(){return(vh=e((()=>{n(),I()})))()}function yh(){return(yh=e((()=>{n(),I()})))()}function bh(){return(bh=e((()=>{n(),I()})))()}function xh(){return(xh=e((()=>{n(),I()})))()}function Sh(){return(Sh=e((()=>{n(),I()})))()}function Ch(){return(Ch=e((()=>{n(),I()})))()}function wh(){return(wh=e((()=>{n(),I()})))()}function Th(){return(Th=e((()=>{n(),I()})))()}function Eh(){return(Eh=e((()=>{n(),I()})))()}function Dh(){return(Dh=e((()=>{n(),I()})))()}function Oh(){return(Oh=e((()=>{n(),I()})))()}function kh(){return(kh=e((()=>{n(),I()})))()}function Ah(){return(Ah=e((()=>{n(),I()})))()}function jh(){return(jh=e((()=>{n(),I()})))()}function Mh(){return(Mh=e((()=>{n(),I()})))()}function Nh(){return(Nh=e((()=>{n(),I()})))()}function Ph(){return(Ph=e((()=>{n(),I()})))()}function Fh(){return(Fh=e((()=>{n(),I()})))()}function Ih(){return(Ih=e((()=>{n(),I()})))()}function Lh(){return(Lh=e((()=>{n(),I()})))()}function Rh(){return(Rh=e((()=>{n(),I()})))()}function zh(){return(zh=e((()=>{n(),I()})))()}function Bh(){return(Bh=e((()=>{n(),I()})))()}function Vh(){return(Vh=e((()=>{n(),I()})))()}function Hh(){return(Hh=e((()=>{n(),I()})))()}function Uh(){return(Uh=e((()=>{n(),I()})))()}function Wh(){return(Wh=e((()=>{n(),I()})))()}function Gh(){return(Gh=e((()=>{n(),I()})))()}function Kh(){return(Kh=e((()=>{n(),I()})))()}function qh(){return(qh=e((()=>{n(),I()})))()}function Jh(){return(Jh=e((()=>{n(),I()})))()}function Yh(){return(Yh=e((()=>{n(),I()})))()}function Xh(){return(Xh=e((()=>{n(),I()})))()}function Zh(){return(Zh=e((()=>{n(),I()})))()}function Qh(){return(Qh=e((()=>{n(),I()})))()}function $h(){return($h=e((()=>{n(),I()})))()}function eg(){return(eg=e((()=>{n(),I()})))()}function tg(){return(tg=e((()=>{n(),I()})))()}function ng(){return(ng=e((()=>{n(),I()})))()}function rg(){return(rg=e((()=>{n(),I()})))()}function ig(){return(ig=e((()=>{n(),I()})))()}function ag(){return(ag=e((()=>{n(),I()})))()}function og(){return(og=e((()=>{n(),I()})))()}function sg(){return(sg=e((()=>{n(),I()})))()}function cg(){return(cg=e((()=>{n(),I()})))()}function lg(){return(lg=e((()=>{n(),I()})))()}function ug(){return(ug=e((()=>{n(),I()})))()}function dg(){return(dg=e((()=>{n(),I()})))()}function fg(){return(fg=e((()=>{n(),I()})))()}function pg(){return(pg=e((()=>{n(),I()})))()}function mg(){return(mg=e((()=>{n(),I()})))()}function hg(){return(hg=e((()=>{n(),I()})))()}function gg(){return(gg=e((()=>{n(),I()})))()}function _g(){return(_g=e((()=>{n(),I()})))()}function vg(){return(vg=e((()=>{n(),I()})))()}function yg(){return(yg=e((()=>{n(),I()})))()}function bg(){return(bg=e((()=>{n(),I()})))()}function xg(){return(xg=e((()=>{n(),I()})))()}function Sg(){return(Sg=e((()=>{n(),I()})))()}function Cg(){return(Cg=e((()=>{n(),I()})))()}function wg(){return(wg=e((()=>{n(),I()})))()}function Tg(){return(Tg=e((()=>{n(),I()})))()}function Eg(){return(Eg=e((()=>{n(),I()})))()}function Dg(){return(Dg=e((()=>{n(),I()})))()}function Og(){return(Og=e((()=>{n(),I()})))()}function kg(){return(kg=e((()=>{n(),I()})))()}function Ag(){return(Ag=e((()=>{n(),I()})))()}function jg(){return(jg=e((()=>{n(),I()})))()}function Mg(){return(Mg=e((()=>{n(),I()})))()}function Ng(){return(Ng=e((()=>{n(),I()})))()}function Pg(){return(Pg=e((()=>{n(),I()})))()}function Fg(){return(Fg=e((()=>{n(),I()})))()}function Ig(){return(Ig=e((()=>{n(),I()})))()}function Lg(){return(Lg=e((()=>{n(),I()})))()}function Rg(){return(Rg=e((()=>{n(),I()})))()}function zg(){return(zg=e((()=>{n(),I()})))()}function Bg(){return(Bg=e((()=>{n(),I()})))()}function Vg(){return(Vg=e((()=>{n(),I()})))()}function Hg(){return(Hg=e((()=>{n(),I()})))()}function Ug(){return(Ug=e((()=>{n(),I()})))()}function Wg(){return(Wg=e((()=>{n(),I()})))()}function Gg(){return(Gg=e((()=>{n(),I()})))()}function Kg(){return(Kg=e((()=>{n(),I()})))()}function qg(){return(qg=e((()=>{n(),I()})))()}function Jg(){return(Jg=e((()=>{n(),I()})))()}function Yg(){return(Yg=e((()=>{n(),I()})))()}function Xg(){return(Xg=e((()=>{n(),I()})))()}function Zg(){return(Zg=e((()=>{n(),I()})))()}function Qg(){return(Qg=e((()=>{n(),I()})))()}function $g(){return($g=e((()=>{n(),I()})))()}function e_(){return(e_=e((()=>{n(),I()})))()}function t_(){return(t_=e((()=>{n(),I()})))()}function n_(){return(n_=e((()=>{n(),I()})))()}function r_(){return(r_=e((()=>{n(),I()})))()}function i_(){return(i_=e((()=>{n(),I()})))()}function a_(){return(a_=e((()=>{n(),I()})))()}function o_(){return(o_=e((()=>{n(),I()})))()}function s_(){return(s_=e((()=>{n(),I()})))()}function c_(){return(c_=e((()=>{n(),I()})))()}function l_(){return(l_=e((()=>{n(),I()})))()}function u_(){return(u_=e((()=>{n(),I()})))()}function d_(){return(d_=e((()=>{n(),I()})))()}function f_(){return(f_=e((()=>{n(),I()})))()}function p_(){return(p_=e((()=>{n(),I()})))()}function m_(){return(m_=e((()=>{n(),I()})))()}function h_(){return(h_=e((()=>{n(),I()})))()}function g_(){return(g_=e((()=>{n(),I()})))()}function __(){return(__=e((()=>{n(),I()})))()}function v_(){return(v_=e((()=>{n(),I()})))()}function y_(){return(y_=e((()=>{n(),I()})))()}function b_(){return(b_=e((()=>{n(),I()})))()}function x_(){return(x_=e((()=>{n(),I()})))()}function S_(){return(S_=e((()=>{n(),I()})))()}function C_(){return(C_=e((()=>{n(),I()})))()}function w_(){return(w_=e((()=>{n(),I()})))()}function T_(){return(T_=e((()=>{n(),I()})))()}function E_(){return(E_=e((()=>{n(),I()})))()}function D_(){return(D_=e((()=>{n(),I()})))()}function O_(){return(O_=e((()=>{n(),I()})))()}function k_(){return(k_=e((()=>{n(),I()})))()}function A_(){return(A_=e((()=>{n(),I()})))()}function j_(){return(j_=e((()=>{n(),I()})))()}function M_(){return(M_=e((()=>{n(),I()})))()}function N_(){return(N_=e((()=>{n(),I()})))()}function P_(){return(P_=e((()=>{n(),I()})))()}function F_(){return(F_=e((()=>{n(),I()})))()}function I_(){return(I_=e((()=>{n(),I()})))()}function L_(){return(L_=e((()=>{n(),I()})))()}function R_(){return(R_=e((()=>{n(),I()})))()}function z_(){return(z_=e((()=>{n(),I()})))()}function B_(){return(B_=e((()=>{n(),I()})))()}function V_(){return(V_=e((()=>{n(),I()})))()}function H_(){return(H_=e((()=>{n(),I()})))()}function U_(){return(U_=e((()=>{n(),I()})))()}function W_(){return(W_=e((()=>{n(),I()})))()}function G_(){return(G_=e((()=>{n(),I()})))()}function K_(){return(K_=e((()=>{n(),I()})))()}function q_(){return(q_=e((()=>{n(),I()})))()}function J_(){return(J_=e((()=>{n(),I()})))()}function Y_(){return(Y_=e((()=>{n(),I()})))()}function X_(){return(X_=e((()=>{n(),I()})))()}function Z_(){return(Z_=e((()=>{n(),I()})))()}function Q_(){return(Q_=e((()=>{n(),I()})))()}function $_(){return($_=e((()=>{n(),I()})))()}function ev(){return(ev=e((()=>{n(),I()})))()}function tv(){return(tv=e((()=>{n(),I()})))()}function nv(){return(nv=e((()=>{n(),I()})))()}function rv(){return(rv=e((()=>{n(),I()})))()}function iv(){return(iv=e((()=>{n(),I()})))()}function av(){return(av=e((()=>{n(),I()})))()}function ov(){return(ov=e((()=>{n(),I()})))()}function sv(){return(sv=e((()=>{n(),I()})))()}function cv(){return(cv=e((()=>{n(),I()})))()}function lv(){return(lv=e((()=>{n(),I()})))()}function uv(){return(uv=e((()=>{n(),I()})))()}function dv(){return(dv=e((()=>{n(),I()})))()}function fv(){return(fv=e((()=>{n(),I()})))()}function pv(){return(pv=e((()=>{n(),I()})))()}function mv(){return(mv=e((()=>{n(),I()})))()}function hv(){return(hv=e((()=>{n(),I()})))()}function gv(){return(gv=e((()=>{n(),I()})))()}function _v(){return(_v=e((()=>{n(),I()})))()}function vv(){return(vv=e((()=>{n(),I()})))()}function yv(){return(yv=e((()=>{n(),I()})))()}function bv(){return(bv=e((()=>{n(),I()})))()}function xv(){return(xv=e((()=>{n(),I()})))()}function Sv(){return(Sv=e((()=>{n(),I()})))()}function Cv(){return(Cv=e((()=>{n(),I()})))()}function wv(){return(wv=e((()=>{n(),I()})))()}function Tv(){return(Tv=e((()=>{n(),I()})))()}function Ev(){return(Ev=e((()=>{n(),I()})))()}function Dv(){return(Dv=e((()=>{n(),I()})))()}function Ov(){return(Ov=e((()=>{n(),I()})))()}function kv(){return(kv=e((()=>{n(),I()})))()}function Av(){return(Av=e((()=>{n(),I()})))()}function jv(){return(jv=e((()=>{n(),I()})))()}function Mv(){return(Mv=e((()=>{n(),I()})))()}function Nv(){return(Nv=e((()=>{n(),I()})))()}function Pv(){return(Pv=e((()=>{n(),I()})))()}function Fv(){return(Fv=e((()=>{n(),I()})))()}function Iv(){return(Iv=e((()=>{n(),I()})))()}function Lv(){return(Lv=e((()=>{n(),I()})))()}function Rv(){return(Rv=e((()=>{n(),I()})))()}function zv(){return(zv=e((()=>{n(),I()})))()}function Bv(){return(Bv=e((()=>{n(),I()})))()}function Vv(){return(Vv=e((()=>{n(),I()})))()}function Hv(){return(Hv=e((()=>{n(),I()})))()}function Uv(){return(Uv=e((()=>{n(),I()})))()}function Wv(){return(Wv=e((()=>{n(),I()})))()}function Gv(){return(Gv=e((()=>{n(),I()})))()}function Kv(){return(Kv=e((()=>{n(),I()})))()}function qv(){return(qv=e((()=>{n(),I()})))()}function Jv(){return(Jv=e((()=>{n(),I()})))()}function Yv(){return(Yv=e((()=>{n(),I()})))()}function Xv(){return(Xv=e((()=>{n(),I()})))()}function Zv(){return(Zv=e((()=>{n(),I()})))()}function Qv(){return(Qv=e((()=>{n(),I()})))()}function $v(){return($v=e((()=>{n(),I()})))()}function ey(){return(ey=e((()=>{n(),I()})))()}function ty(){return(ty=e((()=>{n(),I()})))()}function ny(){return(ny=e((()=>{n(),I()})))()}function ry(){return(ry=e((()=>{n(),I()})))()}function iy(){return(iy=e((()=>{n(),I()})))()}function ay(){return(ay=e((()=>{n(),I()})))()}function oy(){return(oy=e((()=>{n(),I()})))()}function sy(){return(sy=e((()=>{n(),I()})))()}function cy(){return(cy=e((()=>{n(),I()})))()}function ly(){return(ly=e((()=>{n(),I()})))()}function uy(){return(uy=e((()=>{n(),I()})))()}function dy(){return(dy=e((()=>{n(),I()})))()}function fy(){return(fy=e((()=>{n(),I()})))()}function py(){return(py=e((()=>{n(),I()})))()}function my(){return(my=e((()=>{n(),I()})))()}function hy(){return(hy=e((()=>{n(),I()})))()}function gy(){return(gy=e((()=>{n(),I()})))()}function _y(){return(_y=e((()=>{n(),I()})))()}function vy(){return(vy=e((()=>{n(),I()})))()}function yy(){return(yy=e((()=>{n(),I()})))()}function by(){return(by=e((()=>{n(),I()})))()}function xy(){return(xy=e((()=>{n(),I()})))()}function Sy(){return(Sy=e((()=>{n(),I()})))()}function Cy(){return(Cy=e((()=>{n(),I()})))()}function wy(){return(wy=e((()=>{n(),I()})))()}function Ty(){return(Ty=e((()=>{n(),I()})))()}function Ey(){return(Ey=e((()=>{n(),I()})))()}function Dy(){return(Dy=e((()=>{n(),I()})))()}function Oy(){return(Oy=e((()=>{n(),I()})))()}function ky(){return(ky=e((()=>{n(),I()})))()}function Ay(){return(Ay=e((()=>{n(),I()})))()}function jy(){return(jy=e((()=>{n(),I()})))()}function My(){return(My=e((()=>{n(),I()})))()}function Ny(){return(Ny=e((()=>{n(),I()})))()}function Py(){return(Py=e((()=>{n(),I()})))()}function Fy(){return(Fy=e((()=>{n(),I()})))()}function Iy(){return(Iy=e((()=>{n(),I()})))()}function Ly(){return(Ly=e((()=>{n(),I()})))()}function Ry(){return(Ry=e((()=>{n(),I()})))()}function zy(){return(zy=e((()=>{n(),I()})))()}function By(){return(By=e((()=>{n(),I()})))()}function Vy(){return(Vy=e((()=>{n(),I()})))()}function Hy(){return(Hy=e((()=>{n(),I()})))()}function Uy(){return(Uy=e((()=>{n(),I()})))()}function Wy(){return(Wy=e((()=>{n(),I()})))()}function Gy(){return(Gy=e((()=>{n(),I()})))()}function Ky(){return(Ky=e((()=>{n(),I()})))()}function qy(){return(qy=e((()=>{n(),I()})))()}function Jy(){return(Jy=e((()=>{n(),I()})))()}function Yy(){return(Yy=e((()=>{n(),I()})))()}function Xy(){return(Xy=e((()=>{n(),I()})))()}function Zy(){return(Zy=e((()=>{n(),I()})))()}function Qy(){return(Qy=e((()=>{n(),I()})))()}function $y(){return($y=e((()=>{n(),I()})))()}function eb(){return(eb=e((()=>{n(),I()})))()}function tb(){return(tb=e((()=>{n(),I()})))()}function nb(){return(nb=e((()=>{n(),I()})))()}function rb(){return(rb=e((()=>{n(),I()})))()}function ib(){return(ib=e((()=>{n(),I()})))()}function ab(){return(ab=e((()=>{n(),I()})))()}function ob(){return(ob=e((()=>{n(),I()})))()}function sb(){return(sb=e((()=>{n(),I()})))()}function cb(){return(cb=e((()=>{n(),I()})))()}function lb(){return(lb=e((()=>{n(),I()})))()}function ub(){return(ub=e((()=>{n(),I()})))()}function db(){return(db=e((()=>{n(),I()})))()}function fb(){return(fb=e((()=>{n(),I()})))()}function pb(){return(pb=e((()=>{n(),I()})))()}function mb(){return(mb=e((()=>{n(),I()})))()}function hb(){return(hb=e((()=>{n(),I()})))()}function gb(){return(gb=e((()=>{n(),I()})))()}function _b(){return(_b=e((()=>{n(),I()})))()}function vb(){return(vb=e((()=>{n(),I()})))()}function yb(){return(yb=e((()=>{n(),I()})))()}function bb(){return(bb=e((()=>{n(),I()})))()}function xb(){return(xb=e((()=>{n(),I()})))()}function Sb(){return(Sb=e((()=>{n(),I()})))()}function Cb(){return(Cb=e((()=>{n(),I()})))()}function wb(){return(wb=e((()=>{n(),I()})))()}function Tb(){return(Tb=e((()=>{n(),I()})))()}function Eb(){return(Eb=e((()=>{n(),I()})))()}function Db(){return(Db=e((()=>{n(),I()})))()}function Ob(){return(Ob=e((()=>{n(),I()})))()}function kb(){return(kb=e((()=>{n(),I()})))()}function Ab(){return(Ab=e((()=>{n(),I()})))()}function jb(){return(jb=e((()=>{n(),I()})))()}function Mb(){return(Mb=e((()=>{n(),I()})))()}function Nb(){return(Nb=e((()=>{n(),I()})))()}function Pb(){return(Pb=e((()=>{n(),I()})))()}function Fb(){return(Fb=e((()=>{n(),I()})))()}function Ib(){return(Ib=e((()=>{n(),I()})))()}function Lb(){return(Lb=e((()=>{n(),I()})))()}function Rb(){return(Rb=e((()=>{n(),I()})))()}function zb(){return(zb=e((()=>{n(),I()})))()}function Bb(){return(Bb=e((()=>{n(),I()})))()}function Vb(){return(Vb=e((()=>{n(),I()})))()}function Hb(){return(Hb=e((()=>{n(),I()})))()}function Ub(){return(Ub=e((()=>{n(),I()})))()}function Wb(){return(Wb=e((()=>{n(),I()})))()}function Gb(){return(Gb=e((()=>{n(),I()})))()}function Kb(){return(Kb=e((()=>{n(),I()})))()}function qb(){return(qb=e((()=>{n(),I()})))()}function Jb(){return(Jb=e((()=>{n(),I()})))()}function Yb(){return(Yb=e((()=>{n(),I()})))()}function Xb(){return(Xb=e((()=>{n(),I()})))()}function Zb(){return(Zb=e((()=>{n(),I()})))()}function Qb(){return(Qb=e((()=>{n(),I()})))()}function $b(){return($b=e((()=>{n(),I()})))()}function ex(){return(ex=e((()=>{n(),I()})))()}function tx(){return(tx=e((()=>{n(),I()})))()}function nx(){return(nx=e((()=>{n(),I()})))()}function rx(){return(rx=e((()=>{n(),I()})))()}function ix(){return(ix=e((()=>{n(),I()})))()}function ax(){return(ax=e((()=>{n(),I()})))()}function ox(){return(ox=e((()=>{n(),I()})))()}function sx(){return(sx=e((()=>{n(),I()})))()}function cx(){return(cx=e((()=>{n(),I()})))()}function lx(){return(lx=e((()=>{n(),I()})))()}function ux(){return(ux=e((()=>{n(),I()})))()}function dx(){return(dx=e((()=>{n(),I()})))()}function fx(){return(fx=e((()=>{n(),I()})))()}function px(){return(px=e((()=>{n(),I()})))()}function mx(){return(mx=e((()=>{n(),I()})))()}function hx(){return(hx=e((()=>{n(),I()})))()}function gx(){return(gx=e((()=>{n(),I()})))()}function _x(){return(_x=e((()=>{n(),I()})))()}function vx(){return(vx=e((()=>{n(),I()})))()}function yx(){return(yx=e((()=>{n(),I()})))()}function bx(){return(bx=e((()=>{n(),I()})))()}function xx(){return(xx=e((()=>{n(),I()})))()}function Sx(){return(Sx=e((()=>{n(),I()})))()}function Cx(){return(Cx=e((()=>{n(),I()})))()}function wx(){return(wx=e((()=>{n(),I()})))()}function Tx(){return(Tx=e((()=>{n(),I()})))()}function Ex(){return(Ex=e((()=>{n(),I()})))()}function Dx(){return(Dx=e((()=>{n(),I()})))()}function Ox(){return(Ox=e((()=>{n(),I()})))()}function kx(){return(kx=e((()=>{n(),I()})))()}function Ax(){return(Ax=e((()=>{n(),I()})))()}function jx(){return(jx=e((()=>{n(),I()})))()}function Mx(){return(Mx=e((()=>{n(),I()})))()}function Nx(){return(Nx=e((()=>{n(),I()})))()}function Px(){return(Px=e((()=>{n(),I()})))()}function Fx(){return(Fx=e((()=>{n(),I()})))()}function Ix(){return(Ix=e((()=>{n(),I()})))()}function Lx(){return(Lx=e((()=>{n(),I()})))()}function Rx(){return(Rx=e((()=>{n(),I()})))()}function zx(){return(zx=e((()=>{n(),I()})))()}function Bx(){return(Bx=e((()=>{n(),I()})))()}function Vx(){return(Vx=e((()=>{n(),I()})))()}function Hx(){return(Hx=e((()=>{n(),I()})))()}function Ux(){return(Ux=e((()=>{n(),I()})))()}function Wx(){return(Wx=e((()=>{n(),I()})))()}function Gx(){return(Gx=e((()=>{n(),I()})))()}function Kx(){return(Kx=e((()=>{n(),I()})))()}function qx(){return(qx=e((()=>{n(),I()})))()}function Jx(){return(Jx=e((()=>{n(),I()})))()}function Yx(){return(Yx=e((()=>{n(),I()})))()}function Xx(){return(Xx=e((()=>{n(),I()})))()}function Zx(){return(Zx=e((()=>{n(),I()})))()}function Qx(){return(Qx=e((()=>{n(),I()})))()}function $x(){return($x=e((()=>{n(),I()})))()}function eS(){return(eS=e((()=>{n(),I()})))()}function tS(){return(tS=e((()=>{n(),I()})))()}function nS(){return(nS=e((()=>{n(),I()})))()}function rS(){return(rS=e((()=>{n(),I()})))()}function iS(){return(iS=e((()=>{n(),I()})))()}function aS(){return(aS=e((()=>{n(),I()})))()}function oS(){return(oS=e((()=>{n(),I()})))()}function sS(){return(sS=e((()=>{n(),I()})))()}function cS(){return(cS=e((()=>{n(),I()})))()}function lS(){return(lS=e((()=>{n(),I()})))()}function uS(){return(uS=e((()=>{n(),I()})))()}function dS(){return(dS=e((()=>{n(),I()})))()}function fS(){return(fS=e((()=>{n(),I()})))()}function pS(){return(pS=e((()=>{n(),I()})))()}function mS(){return(mS=e((()=>{n(),I()})))()}function hS(){return(hS=e((()=>{n(),I()})))()}function gS(){return(gS=e((()=>{n(),I()})))()}function _S(){return(_S=e((()=>{n(),I()})))()}function vS(){return(vS=e((()=>{n(),I()})))()}function yS(){return(yS=e((()=>{n(),I()})))()}function bS(){return(bS=e((()=>{n(),I()})))()}function xS(){return(xS=e((()=>{n(),I()})))()}function SS(){return(SS=e((()=>{n(),I()})))()}function CS(){return(CS=e((()=>{n(),I()})))()}function wS(){return(wS=e((()=>{n(),I()})))()}function TS(){return(TS=e((()=>{n(),I()})))()}function ES(){return(ES=e((()=>{n(),I()})))()}function DS(){return(DS=e((()=>{n(),I()})))()}function OS(){return(OS=e((()=>{n(),I()})))()}function kS(){return(kS=e((()=>{n(),I()})))()}function AS(){return(AS=e((()=>{n(),I()})))()}function jS(){return(jS=e((()=>{n(),I()})))()}function MS(){return(MS=e((()=>{n(),I()})))()}function NS(){return(NS=e((()=>{n(),I()})))()}function PS(){return(PS=e((()=>{n(),I()})))()}function FS(){return(FS=e((()=>{n(),I()})))()}function IS(){return(IS=e((()=>{n(),I()})))()}function LS(){return(LS=e((()=>{n(),I()})))()}function RS(){return(RS=e((()=>{n(),I()})))()}function zS(){return(zS=e((()=>{n(),I()})))()}function BS(){return(BS=e((()=>{n(),I()})))()}function VS(){return(VS=e((()=>{n(),I()})))()}function HS(){return(HS=e((()=>{n(),I()})))()}function US(){return(US=e((()=>{n(),I()})))()}function WS(){return(WS=e((()=>{n(),I()})))()}function GS(){return(GS=e((()=>{n(),I()})))()}function KS(){return(KS=e((()=>{n(),I()})))()}function qS(){return(qS=e((()=>{n(),I()})))()}function JS(){return(JS=e((()=>{n(),I()})))()}function YS(){return(YS=e((()=>{n(),I()})))()}function XS(){return(XS=e((()=>{n(),I()})))()}function ZS(){return(ZS=e((()=>{n(),I()})))()}function QS(){return(QS=e((()=>{n(),I()})))()}function $S(){return($S=e((()=>{n(),I()})))()}function eC(){return(eC=e((()=>{n(),I()})))()}function tC(){return(tC=e((()=>{n(),I()})))()}function nC(){return(nC=e((()=>{n(),I()})))()}function rC(){return(rC=e((()=>{n(),I()})))()}function iC(){return(iC=e((()=>{n(),I()})))()}function aC(){return(aC=e((()=>{n(),I()})))()}function oC(){return(oC=e((()=>{n(),I()})))()}function sC(){return(sC=e((()=>{n(),I()})))()}function cC(){return(cC=e((()=>{n(),I()})))()}function lC(){return(lC=e((()=>{n(),I()})))()}function uC(){return(uC=e((()=>{n(),I()})))()}function dC(){return(dC=e((()=>{n(),I()})))()}function fC(){return(fC=e((()=>{n(),I()})))()}function pC(){return(pC=e((()=>{n(),I()})))()}function mC(){return(mC=e((()=>{n(),I()})))()}function hC(){return(hC=e((()=>{n(),I()})))()}function gC(){return(gC=e((()=>{n(),I()})))()}function _C(){return(_C=e((()=>{n(),I()})))()}function vC(){return(vC=e((()=>{n(),I()})))()}function yC(){return(yC=e((()=>{n(),I()})))()}function bC(){return(bC=e((()=>{n(),I()})))()}function xC(){return(xC=e((()=>{n(),I()})))()}function SC(){return(SC=e((()=>{n(),I()})))()}function CC(){return(CC=e((()=>{n(),I()})))()}function wC(){return(wC=e((()=>{n(),I()})))()}function TC(){return(TC=e((()=>{n(),I()})))()}function EC(){return(EC=e((()=>{n(),I()})))()}function DC(){return(DC=e((()=>{n(),I()})))()}function OC(){return(OC=e((()=>{n(),I()})))()}function kC(){return(kC=e((()=>{n(),I()})))()}function AC(){return(AC=e((()=>{n(),I()})))()}function jC(){return(jC=e((()=>{n(),I()})))()}function MC(){return(MC=e((()=>{n(),I()})))()}function NC(){return(NC=e((()=>{n(),I()})))()}function PC(){return(PC=e((()=>{n(),I()})))()}function FC(){return(FC=e((()=>{n(),I()})))()}function IC(){return(IC=e((()=>{n(),I()})))()}function LC(){return(LC=e((()=>{n(),I()})))()}function RC(){return(RC=e((()=>{n(),I()})))()}function zC(){return(zC=e((()=>{n(),I()})))()}function BC(){return(BC=e((()=>{n(),I()})))()}function VC(){return(VC=e((()=>{n(),I()})))()}function HC(){return(HC=e((()=>{n(),I()})))()}function UC(){return(UC=e((()=>{n(),I()})))()}function WC(){return(WC=e((()=>{n(),I()})))()}function GC(){return(GC=e((()=>{n(),I()})))()}function KC(){return(KC=e((()=>{n(),I()})))()}function qC(){return(qC=e((()=>{n(),I()})))()}function JC(){return(JC=e((()=>{n(),I()})))()}function YC(){return(YC=e((()=>{n(),I()})))()}function XC(){return(XC=e((()=>{n(),I()})))()}function ZC(){return(ZC=e((()=>{n(),I()})))()}function QC(){return(QC=e((()=>{n(),I()})))()}function $C(){return($C=e((()=>{n(),I()})))()}function ew(){return(ew=e((()=>{n(),I()})))()}function tw(){return(tw=e((()=>{n(),I()})))()}function nw(){return(nw=e((()=>{n(),I()})))()}function rw(){return(rw=e((()=>{n(),I()})))()}function iw(){return(iw=e((()=>{n(),I()})))()}function aw(){return(aw=e((()=>{n(),I()})))()}function ow(){return(ow=e((()=>{n(),I()})))()}function sw(){return(sw=e((()=>{n(),I()})))()}function cw(){return(cw=e((()=>{n(),I()})))()}function lw(){return(lw=e((()=>{n(),I()})))()}function uw(){return(uw=e((()=>{n(),I()})))()}function dw(){return(dw=e((()=>{n(),I()})))()}function fw(){return(fw=e((()=>{n(),I()})))()}function pw(){return(pw=e((()=>{n(),I()})))()}function mw(){return(mw=e((()=>{n(),I()})))()}function hw(){return(hw=e((()=>{n(),I()})))()}function gw(){return(gw=e((()=>{n(),I()})))()}function _w(){return(_w=e((()=>{n(),I()})))()}function vw(){return(vw=e((()=>{n(),I()})))()}function yw(){return(yw=e((()=>{n(),I()})))()}function bw(){return(bw=e((()=>{n(),I()})))()}function xw(){return(xw=e((()=>{n(),I()})))()}function Sw(){return(Sw=e((()=>{n(),I()})))()}function Cw(){return(Cw=e((()=>{n(),I()})))()}function ww(){return(ww=e((()=>{n(),I()})))()}function Tw(){return(Tw=e((()=>{n(),I()})))()}function Ew(){return(Ew=e((()=>{n(),I()})))()}function Dw(){return(Dw=e((()=>{n(),I()})))()}function Ow(){return(Ow=e((()=>{n(),I()})))()}function kw(){return(kw=e((()=>{n(),I()})))()}function Aw(){return(Aw=e((()=>{n(),I()})))()}function jw(){return(jw=e((()=>{n(),I()})))()}function Mw(){return(Mw=e((()=>{n(),I()})))()}function Nw(){return(Nw=e((()=>{n(),I()})))()}function Pw(){return(Pw=e((()=>{n(),I()})))()}function Fw(){return(Fw=e((()=>{n(),I()})))()}function Iw(){return(Iw=e((()=>{n(),I()})))()}function Lw(){return(Lw=e((()=>{n(),I()})))()}function Rw(){return(Rw=e((()=>{n(),I()})))()}function zw(){return(zw=e((()=>{n(),I()})))()}function Bw(){return(Bw=e((()=>{n(),I()})))()}function Vw(){return(Vw=e((()=>{n(),I()})))()}function Hw(){return(Hw=e((()=>{n(),I()})))()}function Uw(){return(Uw=e((()=>{n(),I()})))()}function Ww(){return(Ww=e((()=>{n(),I()})))()}function Gw(){return(Gw=e((()=>{n(),I()})))()}function Kw(){return(Kw=e((()=>{n(),I()})))()}function qw(){return(qw=e((()=>{n(),I()})))()}function Jw(){return(Jw=e((()=>{n(),I()})))()}function Yw(){return(Yw=e((()=>{n(),I()})))()}function Xw(){return(Xw=e((()=>{n(),I()})))()}function Zw(){return(Zw=e((()=>{n(),I()})))()}function Qw(){return(Qw=e((()=>{n(),I()})))()}function $w(){return($w=e((()=>{n(),I()})))()}function eT(){return(eT=e((()=>{n(),I()})))()}function tT(){return(tT=e((()=>{n(),I()})))()}function nT(){return(nT=e((()=>{n(),I()})))()}function rT(){return(rT=e((()=>{n(),I()})))()}function iT(){return(iT=e((()=>{n(),I()})))()}function aT(){return(aT=e((()=>{n(),I()})))()}function oT(){return(oT=e((()=>{n(),I()})))()}function sT(){return(sT=e((()=>{n(),I()})))()}function cT(){return(cT=e((()=>{n(),I()})))()}function lT(){return(lT=e((()=>{n(),I()})))()}function uT(){return(uT=e((()=>{n(),I()})))()}function dT(){return(dT=e((()=>{n(),I()})))()}function fT(){return(fT=e((()=>{n(),I()})))()}function pT(){return(pT=e((()=>{n(),I()})))()}function mT(){return(mT=e((()=>{n(),I()})))()}function hT(){return(hT=e((()=>{n(),I()})))()}function gT(){return(gT=e((()=>{n(),I()})))()}function _T(){return(_T=e((()=>{n(),I()})))()}function vT(){return(vT=e((()=>{n(),I()})))()}function yT(){return(yT=e((()=>{n(),I()})))()}function bT(){return(bT=e((()=>{n(),I()})))()}function xT(){return(xT=e((()=>{n(),I()})))()}function ST(){return(ST=e((()=>{n(),I()})))()}function CT(){return(CT=e((()=>{n(),I()})))()}function wT(){return(wT=e((()=>{n(),I()})))()}function TT(){return(TT=e((()=>{n(),I()})))()}function ET(){return(ET=e((()=>{n(),I()})))()}function DT(){return(DT=e((()=>{n(),I()})))()}function OT(){return(OT=e((()=>{n(),I()})))()}function kT(){return(kT=e((()=>{n(),I()})))()}function AT(){return(AT=e((()=>{n(),I()})))()}function jT(){return(jT=e((()=>{n(),I()})))()}function MT(){return(MT=e((()=>{Wr(),Gr(),Kr(),qr(),Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),Sd(),Cd(),wd(),Td(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT(),OT(),kT(),AT(),jT()})))()}function NT(e){return()=>e}var PT,FT;function IT(){return(IT=e((()=>{PT=NT(),FT=PT})))()}var LT;function RT(){return(RT=e((()=>{N(),IT(),LT=nt(()=>FT),customElements.define(`cosmoz-keybinding-provider`,LT.Provider)})))()}var zT;function BT(){return(BT=e((()=>{N(),RT(),wr(),zT=(e,t)=>{let n=Ce(LT),r=Cr(e);O(()=>n(r),t)}})))()}function J(){return(J=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}})))()}function VT(e,t){if(e&&GT.test(e)||e===`//`)return e;if(KT===void 0){KT=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,KT=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,KT)try{return new URL(e,t).href}catch{return e}return Y||(Y=document.implementation.createHTMLDocument(`temp`),Y.base=Y.createElement(`base`),Y.head.appendChild(Y.base),Y.anchor=Y.createElement(`a`),Y.body.appendChild(Y.anchor)),Y.base.href=t,Y.anchor.href=e,Y.anchor.href||e}function HT(e,t){return e.replace(WT,function(e,n,r,i){return n+`'`+VT(r.replace(/["']/g,``),t)+`'`+i})}function UT(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var WT,GT,KT,Y;function qT(){return(qT=e((()=>{J(),WT=/(url\()([^)]*)(\))/g,GT=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})))()}var JT,YT,XT,ZT,QT,$T,eE,tE,nE,rE,iE,aE,oE,sE;function cE(){return(cE=e((()=>{J(),qT(),JT=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,YT=JT&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),XT=window.Polymer&&window.Polymer.rootPath||UT(document.baseURI||window.location.href),ZT=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,QT=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,$T=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,eE=window.Polymer&&window.Polymer.legacyOptimizations||!1,tE=window.Polymer&&window.Polymer.legacyWarnings||!1,nE=window.Polymer&&window.Polymer.syncInitialRender||!1,rE=window.Polymer&&window.Polymer.legacyUndefined||!1,iE=window.Polymer&&window.Polymer.orderedComputed||!1,aE=window.Polymer&&window.Polymer.removeNestedTemplates||!1,oE=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,sE=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1})))()}function lE(){}var uE,X;function dE(){return(dE=e((()=>{J(),uE=0,lE.prototype.__mixinApplications,lE.prototype.__mixinSet,X=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=uE++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}})))()}function fE(e,t){hE[e]=gE[e.toLowerCase()]=t}function pE(e){return hE[e]||gE[e.toLowerCase()]}function mE(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var hE,gE,_E;function vE(){return(vE=e((()=>{J(),qT(),cE(),hE={},gE={},_E=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=pE(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=VT(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=UT(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(QT&&pE(e)!==void 0)throw fE(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,fE(e,this),mE(this)}}},_E.prototype.modules=hE,customElements.define(`dom-module`,_E)})))()}function yE(e){return _E.import(e)}function bE(e){let t=HT((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function xE(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...SE(t[e]));return n}function SE(e){let t=yE(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...TE(t));let n=t.querySelector(`template`);n&&e.push(...CE(n,t.assetpath)),t._styles=e}return t._styles}function CE(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(DE);a&&n.push(...xE(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=HT(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function wE(e){let t=yE(e);return t?TE(t):[]}function TE(e){let t=[],n=e.querySelectorAll(EE);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(OE);if(n&&!e._unscopedStyle){let t=bE(e);t.setAttribute(OE,``),e._unscopedStyle=t}else e._style||=bE(e);t.push(n?e._unscopedStyle:e._style)}}return t}var EE,DE,OE;function kE(){return(kE=e((()=>{vE(),qT(),EE=`link[rel=import][type~=css]`,DE=`include`,OE=`shady-unscoped`})))()}var Z;function AE(){return(AE=e((()=>{Z=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e})))()}function jE(e){return e.indexOf(`.`)>=0}function ME(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function NE(e,t){return e.indexOf(t+`.`)===0}function PE(e,t){return t.indexOf(e+`.`)===0}function FE(e,t,n){return t+n.slice(e.length)}function IE(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}return e}function LE(e){return Array.isArray(e)?IE(e).split(`.`):e.toString().split(`.`)}function Q(e,t,n){let r=e,i=LE(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function RE(e,t,n){let r=e,i=LE(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}function zE(){return(zE=e((()=>{J()})))()}function BE(e){return HE[e]||(HE[e]=e.indexOf(`-`)<0?e:e.replace(UE,e=>e[1].toUpperCase()))}function VE(e){return HE[e]||(HE[e]=e.replace(WE,`-$1`).toLowerCase())}var HE,UE,WE;function GE(){return(GE=e((()=>{J(),HE={},UE=/-[a-z]/g,WE=/([A-Z])/g})))()}function KE(){ZE=!1;let e=YE.length;for(let t=0;t<e;t++){let e=YE[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}YE.splice(0,e),JE+=e}var qE,JE,YE,XE,ZE,QE,$E;function eD(){return(eD=e((()=>{J(),qE=0,JE=0,YE=[],XE=0,ZE=!1,QE=document.createTextNode(``),new window.MutationObserver(KE).observe(QE,{characterData:!0}),$E={run(e){return ZE||(ZE=!0,QE.textContent=XE++),YE.push(e),qE++},cancel(e){let t=e-JE;if(t>=0){if(!YE[t])throw Error(`invalid async handle: `+e);YE[t]=null}}}})))()}var tD,nD;function rD(){return(rD=e((()=>{J(),dE(),eD(),AE(),tD=$E,nD=X(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,tD.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=Z(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})})))()}function iD(e,t){if(!aD[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var aD,oD,sD,cD;function lD(){return(lD=e((()=>{for(J(),dE(),GE(),rD(),aD={},oD=HTMLElement.prototype;oD;){let e=Object.getOwnPropertyNames(oD);for(let t=0;t<e.length;t++)aD[e[t]]=!0;oD=Object.getPrototypeOf(oD)}sD=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,cD=X(e=>{let t=nD(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(BE(e[t]))}static attributeNameForProperty(e){return VE(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(sD(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t)}return n}_definePropertyAccessor(e,t){iD(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})})))()}function uD(){if(!yD){yD=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,bD=e.placeholder===e.textContent}return bD}function dD(e){uD()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function fD(e){let t=e.getAttribute(`is`);if(t&&vD[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];xD(e,n,t),n.removeAttribute(t)}}return e}function pD(e,t){let n=t.parentInfo&&pD(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function mD(e,t,n,r){r.id&&(t[r.id]=n)}function hD(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function gD(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function _D(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var vD,yD,bD,xD,SD;function CD(){return(CD=e((()=>{J(),dE(),vD={"dom-if":!0,"dom-repeat":!0},yD=!1,bD=!1,xD=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),SD=X(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),dD(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(e.localName!==`script`&&e.localName!==`style`)for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=fD(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`&&(n.id=i,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=pD(i,o);mD(this,i.$,n,o),gD(this,n,o,t),hD(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=_D(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})})))()}function wD(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function TD(e,t,n,r,i,a){if(t){let o=!1,s=aO++;for(let c in n){let l=t[i?ME(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||DD(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function ED(e,t,n,r,i,a,o,s){let c=!1,l=t[o?ME(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||DD(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function DD(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&NE(n,e))||!!(t.wildcard&&PE(n,e))}return!0}function OD(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function kD(e,t,n,r,i){let a=e[$.NOTIFY],o,s=aO++;for(let c in t)t[c]&&(a&&ED(e,a,s,c,n,r,i)||i&&AD(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function AD(e,t,n){let r=ME(t);return r!==t&&(jD(e,VE(r)+`-changed`,n[t],t),!0)}function jD(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),Z(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function MD(e,t,n,r,i,a){let o=(a?ME(t):t)==t?null:t,s=o?Q(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),jD(e,i.eventName,s,o)}function ND(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=FE(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function PD(e,t,n,r,i){let a=e.__data[t];ZT&&(a=ZT(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function FD(e,t,n,r){let i=e[$.COMPUTE];if(i){if(iE){aO++;let a=ID(e),o=[];for(let e in t)uO(e,i,o,a,r);let s;for(;s=o.shift();)RD(e,``,t,n,s)&&uO(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;TD(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}}function ID(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[$.COMPUTE],{counts:r,ready:i,total:a}=LD(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function LD(e){let t=e[sO],n={},r=e[$.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function RD(e,t,n,r,i){let a=XD(e,t,n,r,i);if(a===oO)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function zD(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];PE(a,t)?(i=FE(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):PE(o,t)&&(i=FE(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function BD(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),GD(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||VE(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,VD(e,t,s,r,c)}}function VD(e,t,n,r,i){if(!r.literal){if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=eO(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:HD,info:o,trigger:r})}}}}function HD(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=FE(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==oO&&UD(e,s,c,l,o)}}function UD(e,t,n,r,i){if(i=WD(t,i,n,r),ZT&&(i=ZT(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function WD(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function GD(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function KD(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];qD(a,n),JD(a,e,n)}a.__dataHost=e}}function qD(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=Z(e)),e[a]=t.literal)}}function JD(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){ND(e,t,n.target,r.source,r.negate)})}}function YD(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function XD(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===oO?oO:o.apply(a,r)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function ZD(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function QD(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:dO};return t[2].trim()?$D(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function $D(e,t){return t.args=e.map(function(e){let n=eO(e);return n.literal||(t.static=!1),n},this),t}function eO(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0}return n.literal||(n.rootProperty=ME(t),n.structured=jE(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function tO(e,t,n){let r=Q(e,n);return r===void 0&&(r=t[n]),r}function nO(e,t,n,r){let i={indexSplices:r};rE&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),rE&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function rO(e,t,n,r,i,a){nO(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function iO(e){return e[0].toUpperCase()+e.substring(1)}var aO,oO,$,sO,cO,lO,uO,dO,fO,pO,mO;function hO(){return(hO=e((()=>{J(),AE(),dE(),zE(),GE(),lD(),CD(),cE(),aO=0,oO=[],$={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},sO=`__computeInfo`,cO=/[A-Z]/,lO=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},uO=(e,t,n,r,i)=>{let a=t[i?ME(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==aO&&(!i||DD(e,o.trigger))&&(o.info.lastRun=aO,lO(o.info,n,r))}},dO=[],fO=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),pO=X(e=>{let t=SD(cD(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(mO.length){let e=mO[mO.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[$.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==$.READ_ONLY);let r=wD(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=wD(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,$.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,$.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,$.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,$.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||ME(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Q(this,e);if(e=RE(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return zD(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=Z(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&jE(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[$.NOTIFY]&&this[$.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;FD(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),TD(this,this[$.REFLECT],t,n,r),TD(this,this[$.OBSERVE],t,n,r),i&&kD(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[$.PROPAGATE]&&TD(this,this[$.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{TD(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=IE(e),t=IE(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=IE(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Q(this,e,n);nO(this,r,n.path,t)}get(e,t){return Q(t||this,e)}set(e,t,n){n?RE(n,e,t):(!this[$.READ_ONLY]||!this[$.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Q(this,e,n),i=r.length,a=r.push(...t);return t.length&&rO(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.pop();return r&&rO(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Q(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&rO(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.shift();return r&&rO(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Q(this,e,n),i=r.unshift(...t);return t.length&&rO(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Q(this,e,r),n=r.path}else n=Array.isArray(e)?IE(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,$.READ_ONLY),t&&(this[`_set`+iO(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,$.OBSERVE,{fn:OD,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,$.OBSERVE,{fn:OD,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=QD(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);YD(this,n,$.OBSERVE,XD,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,$.NOTIFY,{fn:MD,info:{eventName:VE(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,$.REFLECT,{fn:PD,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=QD(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=YD(this,r,$.COMPUTE,RD,e,n);wD(this,sO)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u){if(c){let e=PE(o,t),i=tO(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Q(r,o):i}}else l=s?tO(r,n,o):r[o]}if(rE&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return oO;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t){if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),mO.push(this);let n=super._stampTemplate(e,t);if(mO.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,KD(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];Z(Z(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=ZD(t)||` `,BD(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;cO.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=ZD(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=BE(i)),BD(this,n,r,a,i,o,s),!0}return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;aE&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(oE&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),aE||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];BD(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=fO.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=QD(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=fO.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?XD(e,n,r,i,t.signature):n==t.source?a&&jE(n)?Q(e,n):e.__data[n]:Q(e,t.source),t.negate&&(o=!o),o}}return n}),mO=[]})))()}function gO(){vO++}function _O(e){yO.push(e)}var vO,yO;function bO(){return(bO=e((()=>{vO=0,yO=[]})))()}function xO(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var SO;function CO(){return(CO=e((()=>{J(),dE(),bO(),rD(),SO=X(e=>{let t=nD(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=xO(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){_O(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){gO(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})))()}var wO,TO,EO;function DO(){return(DO=e((()=>{J(),cE(),dE(),kE(),qT(),vE(),hO(),CO(),AE(),wO=`3.5.2`,TO=window.ShadyCSS&&window.ShadyCSS.cssBuild,EO=X(e=>{let t=SO(pO(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!TO){let i=t.content.querySelectorAll(`style`),a=CE(t),o=wE(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),sE&&TO&&YT){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!QT||$T)&&(t=_E.import(e,`template`),QT&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return wO}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):eE||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=UT(e.url);else{let e=_E.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=XT,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return HT(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?VT(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=Z(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),nE&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=VT(this.importPath)),VT(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return tE&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})})))()}function OO(e){if(e instanceof jO)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function kO(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof jO)return OO(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var AO,jO,MO,NO;function PO(){return(PO=e((()=>{J(),AO=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),jO=class{constructor(e,t){NO(e,t);let n=t.reduce((t,n,r)=>t+OO(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},MO=function(e,...t){NO(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+kO(n)+e[r+1],e[0]);return AO&&(r=AO.createHTML(r)),n.innerHTML=r,n},NO=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})))()}function FO(){return(FO=e((()=>{DO(),PO(),EO(HTMLElement)})))()}var IO,LO,RO,zO,BO,VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO;function QO(){return(QO=e((()=>{Dt(),jt(),Ur(),Hr(),MT(),BT(),N(),FO(),n(),IO=`bottom-bar-toolbar`,LO=`bottom-bar-menu`,RO=w`
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
		flex: 0 1 auto;
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
	:host([hide-actions]) #dropdown {
		display: none;
	}

	:host(:not([has-menu-items])) #dropdown {
		display: none;
	}
`,zO=Symbol(`openMenu`),BO=e=>{let t=e.currentTarget.closest(`#dropdown`);t&&(t.opened=!1)},VO=e=>{e.shadowRoot?.querySelector(`#menuButton`)?.click()},HO=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,UO=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},WO=e=>{let t=UO(e).filter(HO).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},GO={variant:`tertiary`,size:`sm`},KO=new WeakMap,qO=e=>e.constructor.observedAttributes?.includes(`variant`)??!1,JO=(e,t,n,r)=>{let i=t?IO:LO;if(e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),qO(e)){KO.has(e)||KO.set(e,{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`)});let n=t?KO.get(e):GO;Object.entries(n).forEach(([t,n])=>n==null?e.removeAttribute(t):e.setAttribute(t,n))}e.classList.toggle(r,!t),e.classList.toggle(n,t)},YO=(e,t,n)=>{let r=WO(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>JO(e,!0,t,n)),o.forEach(e=>JO(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},XO=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=j(!1);zT({activity:zO,callback:()=>VO(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=De(()=>At(`height`),[]);je(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let a=k(()=>YO(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),o=j(null),s=k(()=>{let t=o.current;t&&(t.disconnect(),UO(e).filter(HO).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{o.current=new MutationObserver(()=>{s(),a()}),s();let t=new MutationObserver(()=>{s(),a()});return t.observe(e,{childList:!0}),()=>{o.current?.disconnect(),o.current=null,t.disconnect()}},[a]);let l=k(()=>{s(),a()},[a]);return c` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${l}
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
					${xd()}
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
			<slot id="content" @slotchange=${l}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,M(XO,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[RO]})),ZO=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,c(Object.assign([ZO],{raw:[ZO]})),MO(Object.assign([ZO],{raw:[ZO]}))})))()}function $O(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var ek,tk,nk,rk,ik,ak,ok;function sk(){return(sk=e((()=>{Dt(),N(),n(),I(),QO(),ek=e=>{let{active:t,maxToolbarItems:n}=e,[r,i]=A(``),[a,o]=A($O([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),s=e=>{let t=e.target;i(t.value)},l=e=>{let t=e?e.trim():``;o([...a,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&i(``)};return c`
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
			${Ot(a,e=>c`<cosmoz-button
						@click=${e.onClick}
						data-priority=${F(e.priority)}
					>
						${e.text}
					</cosmoz-button>`)}
		</cosmoz-bottom-bar>
	`},customElements.define(`cosmoz-bottom-bar-story`,M(ek,{observedAttributes:[`active`,`max-toolbar-items`]})),tk=e=>c`<cosmoz-bottom-bar-story
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