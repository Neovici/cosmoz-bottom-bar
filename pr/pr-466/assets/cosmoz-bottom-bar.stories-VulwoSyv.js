import{r as e}from"./preload-helper-CGrDLHbs.js";import{a as t,c as n,i as r,n as i,o as a,r as o,s,t as c}from"./iframe-BAi60vHl.js";function l(e){f=e}function u(){f=null,p=0}function d(){return p++}var f,p,m=e((()=>{p=0})),h,g,_,v,y,b,x,S=e((()=>{h=Symbol(`haunted.phase`),g=Symbol(`haunted.hook`),_=Symbol(`haunted.update`),v=Symbol(`haunted.commit`),y=Symbol(`haunted.effects`),b=Symbol(`haunted.layoutEffects`),x=`haunted.context`})),ee,te=e((()=>{m(),S(),ee=class{update;host;virtual;[g];[y];[b];constructor(e,t){this.update=e,this.host=t,this[g]=new Map,this[y]=[],this[b]=[]}run(e){l(this);let t=e();return u(),t}_runEffects(e){let t=this[e];l(this);for(let e of t)e.call(this);u()}runEffects(){this._runEffects(y)}runLayoutEffects(){this._runEffects(b)}teardown(){this[g].forEach(e=>{typeof e.teardown==`function`&&e.teardown(!0)})}}})),C,ne=e((()=>{C=class extends Error{constructor(e){let t=e?` <${e}>`:``;super(`Infinite update loop detected in component${t}. This usually means a hook (useEffect, useMemo, useCallback) has dependencies that create new references on every render, such as [{}], [[]], or [Promise.resolve()]. Make sure your dependency arrays contain stable references.`),this.name=`InfiniteLoopError`}}}));function re(){let e=[],t;function n(){t=null;let n=e;e=[];for(var r=0,i=n.length;r<i;r++)n[r]()}return function(r){e.push(r),t??=ae(n)}}var ie,ae,oe,se,ce,le=e((()=>{te(),S(),ne(),ie=100,ae=Promise.resolve().then.bind(Promise.resolve()),oe=re(),se=re(),ce=class e{renderer;host;state;[h];_updateQueued;_active;_updateCount;_processing;static maxUpdates=ie;constructor(e,t){this.renderer=e,this.host=t,this.state=new ee(this.update.bind(this),t),this[h]=null,this._updateQueued=!1,this._active=!1,this._updateCount=0,this._processing=!1}_checkForInfiniteLoop(){if(this._processing||(this._updateCount=0),this._updateCount++,this._updateCount>e.maxUpdates){let e=this.host instanceof HTMLElement?this.host.tagName.toLowerCase():void 0;throw this._active=!1,new C(e)}}update(){this._active&&(this._updateQueued||=(this._checkForInfiniteLoop(),this._processing=!0,oe(()=>{let e=this.handlePhase(_);se(()=>{this.handlePhase(v,e),se(()=>{this.handlePhase(y),this._updateQueued||(this._processing=!1)})}),this._updateQueued=!1}),!0))}handlePhase(e,t){switch(this[h]=e,e){case v:this.commit(t),this.runEffects(b);return;case _:return this.render();case y:return this.runEffects(y)}}render(){return this.state.run(()=>this.renderer.call(this.host,this.host))}runEffects(e){this.state._runEffects(e)}teardown(){this.state.teardown(),this._updateCount=0,this._processing=!1}pause(){this._active=!1}resume(){this._active=!0,this._updateCount=0}}})),ue,de,fe,w,pe=e((()=>{ue=(...e)=>{let t=new CSSStyleSheet;return t.replaceSync(e.join(``)),t},de=e=>e?.map(e=>typeof e==`string`?ue(e):e),fe=(e,...t)=>e.flatMap((e,n)=>[e,t[n]||``]).join(``),w=fe}));function me(e){class t extends ce{frag;renderResult;constructor(e,t,n){super(e,n||t),this.frag=t}commit(t){this.renderResult=e(t,this.frag)}}function n(e,n,r){let i=(r||n||{}).baseElement||HTMLElement,{observedAttributes:a=[],useShadowDOM:o=!0,shadowRootInit:s={},styleSheets:c}=r||n||{},l=de(e.styleSheets||c);class u extends i{_scheduler;static get observedAttributes(){return e.observedAttributes||a||[]}constructor(){if(super(),o===!1)this._scheduler=new t(e,this);else{let n=this.attachShadow({mode:`open`,...s});l&&(n.adoptedStyleSheets=l),this._scheduler=new t(e,n,this)}}connectedCallback(){this._scheduler.resume(),this._scheduler.update(),this._scheduler.renderResult?.setConnected(!0)}disconnectedCallback(){this._scheduler.pause(),this._scheduler.teardown(),this._scheduler.renderResult?.setConnected(!1)}attributeChangedCallback(e,t,n){if(t===n)return;let r=n===``||n;Reflect.set(this,he(e),r)}}function d(e){let t=e,n=!1;return Object.freeze({enumerable:!0,configurable:!0,get(){return t},set(e){n&&t===e||(n=!0,t=e,this._scheduler&&this._scheduler.update())}})}let f=new Proxy(i.prototype,{getPrototypeOf(e){return e},set(e,t,n,r){let i;return t in e?(i=Object.getOwnPropertyDescriptor(e,t),i&&i.set?(i.set.call(r,n),!0):(Reflect.set(e,t,n,r),!0)):(i=typeof t==`symbol`||t[0]===`_`?{enumerable:!0,configurable:!0,writable:!0,value:n}:d(n),Object.defineProperty(r,t,i),i.set&&i.set.call(r,n),!0)}});return Object.setPrototypeOf(u.prototype,f),u}return n}var he,ge=e((()=>{le(),pe(),he=(e=``)=>e.replace(/-+([a-z])?/g,(e,t)=>t?t.toUpperCase():``)}));function _e(e,...t){let n=d(),r=f[g],i=r.get(n);return i||(i=new e(n,f,...t),r.set(n,i)),i.update(...t)}function T(e){return _e.bind(null,e)}var E,D=e((()=>{m(),S(),E=class{id;state;constructor(e,t){this.id=e,this.state=t}}}));function ve(e){return T(class extends E{callback;lastValues;values;_teardown;constructor(t,n,r,i){super(t,n),e(n,this)}update(e,t){this.callback=e,this.values=t}call(){let e=!this.values||this.hasChanged();this.lastValues=this.values,e&&this.run()}run(){this.teardown(),this._teardown=this.callback.call(this.state)}teardown(e){typeof this._teardown==`function`&&(this._teardown(),this._teardown=void 0),e&&(this.lastValues=this.values=void 0)}hasChanged(){return!this.lastValues||this.values.some((e,t)=>this.lastValues[t]!==e)}})}var ye=e((()=>{D()}));function be(e,t){e[y].push(t)}var O,xe=e((()=>{S(),ye(),O=ve(be)})),Se,Ce,we=e((()=>{D(),S(),xe(),Se=e=>e instanceof Element?e:e.startNode||e.endNode||e.parentNode,Ce=T(class extends E{Context;value;_ranEffect;_unsubscribe;constructor(e,t,n){super(e,t),this._updater=this._updater.bind(this),this._ranEffect=!1,this._unsubscribe=null,be(t,this)}update(e){return this.Context!==e&&(this._subscribe(e),this.Context=e),this.value}call(){this._ranEffect||(this._ranEffect=!0,this._unsubscribe&&this._unsubscribe(),this._subscribe(this.Context),this.state.update())}_updater(e){this.value=e,this.state.update()}_subscribe(e){let t={Context:e,callback:this._updater};Se(this.state.host).dispatchEvent(new CustomEvent(x,{detail:t,bubbles:!0,cancelable:!0,composed:!0}));let{unsubscribe:n=null,value:r}=t;this.value=n?r:e.defaultValue,this._unsubscribe=n}teardown(){this._unsubscribe&&this._unsubscribe()}})}));function Te(e){return t=>{let n={Provider:class extends HTMLElement{listeners;_value;constructor(){super(),this.style.display=`contents`,this.listeners=new Set,this.addEventListener(x,this)}disconnectedCallback(){this.removeEventListener(x,this)}handleEvent(e){let{detail:t}=e;t.Context===n&&(t.value=this.value,t.unsubscribe=this.unsubscribe.bind(this,t.callback),this.listeners.add(t.callback),e.stopPropagation())}unsubscribe(e){this.listeners.delete(e)}set value(e){this._value=e;for(let t of this.listeners)t(e)}get value(){return this._value}},Consumer:e(function({render:e}){return e(Ce(n))},{useShadowDOM:!1}),defaultValue:t};return n}}var Ee=e((()=>{S(),we()})),k,De=e((()=>{D(),k=T(class extends E{value;values;constructor(e,t,n,r){super(e,t),this.value=n(),this.values=r}update(e,t){return this.hasChanged(t)&&(this.values=t,this.value=e()),this.value}hasChanged(e=[]){return e.some((e,t)=>this.values[t]!==e)}})})),A,Oe=e((()=>{De(),A=(e,t)=>k(()=>e,t)}));function ke(e,t){e[b].push(t)}var Ae,je=e((()=>{S(),ye(),Ae=ve(ke)})),j,Me=e((()=>{D(),j=T(class extends E{args;constructor(e,t,n){super(e,t),this.updater=this.updater.bind(this),typeof n==`function`&&(n=n()),this.makeArgs(n)}update(){return this.args}updater(e){let[t]=this.args;typeof e==`function`&&(e=e(t)),!Object.is(t,e)&&(this.makeArgs(e),this.state.update())}makeArgs(e){this.args=Object.freeze([e,this.updater])}})})),Ne=e((()=>{D(),T(class extends E{reducer;currentState;constructor(e,t,n,r,i){super(e,t),this.dispatch=this.dispatch.bind(this),this.currentState=i===void 0?r:i(r)}update(e){return this.reducer=e,[this.currentState,this.dispatch]}dispatch(e){this.currentState=this.reducer(this.currentState,e),this.state.update()}})})),Pe,Fe,Ie=e((()=>{D(),Pe=/([A-Z])/gu,Fe=T(class extends E{property;eventName;constructor(e,t,n,r){if(super(e,t),this.state.virtual)throw Error(`Can't be used with virtual components.`);this.updater=this.updater.bind(this),this.property=n,this.eventName=n.replace(Pe,`-$1`).toLowerCase()+`-changed`,this.state.host[this.property]??(typeof r==`function`&&(r=r()),r!=null&&this.updater(r,!0))}update(e,t){return[this.state.host[this.property],this.updater]}resolve(e){let t=this.state.host[this.property],n=typeof e==`function`?e:void 0;return[t,n?n(t):e,n]}notify(e,t){let n=new CustomEvent(this.eventName,{detail:{value:e,updater:t,path:this.property},cancelable:!0});return this.state.host.dispatchEvent(n),n}updater(e,t=!1){let[n,r,i]=this.resolve(e),a=this.notify(r,i);!t&&a.defaultPrevented||Object.is(n,r)||(this.state.host[this.property]=r)}})}));function Le(e){let t=e;return{get current(){return t},set current(e){t=e},get value(){return t},set value(e){t=e}}}function M(e){return k(()=>Le(e),[])}var Re=e((()=>{De()})),ze=e((()=>{D(),T(class extends E{update(){return this.state.host}})}));function Be({render:e}){let t=me(e);return{component:t,createContext:Te(t)}}var Ve=e((()=>{ge(),Ee(),Oe(),xe(),je(),Me(),Ne(),De(),we(),Ie(),Re(),ze(),D(),le(),te(),ne()})),He,Ue,We,Ge=e((()=>{He={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},Ue=e=>(...t)=>({_$litDirective$:e,values:t}),We=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}}));function Ke(e){this._$AN===void 0?this._$AM=e:(Ye(this),this._$AM=e,Xe(this))}function qe(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)Je(r[e],!1),Ye(r[e]);else r!=null&&(Je(r,!1),Ye(r));else Je(this,e)}var Je,Ye,Xe,Ze,Qe,$e=e((()=>{c(),Ge(),Je=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),Je(e,t);return!0},Ye=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},Xe=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),Ze(t)}},Ze=e=>{e.type==He.CHILD&&(e._$AP??=qe,e._$AQ??=Ke)},Qe=class extends We{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),Xe(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(Je(this,e),Ye(this))}setValue(e){if(i(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}}}));function et(e,t,n=t.startNode){let r=n.parentNode,i=new MutationObserver(r=>{for(let a of r)if(tt.call(a.removedNodes,n)){i.disconnect(),n.parentNode instanceof ShadowRoot?et(e,t):e.teardown();break}else if(tt.call(a.addedNodes,n.nextSibling)){i.disconnect(),et(e,t,n.nextSibling||void 0);break}});i.observe(r,{childList:!0})}var tt,nt=e((()=>{Ge(),s(),$e(),le(),tt=Array.prototype.includes})),N,rt,it=e((()=>{s(),Ve(),nt(),{component:N,createContext:rt}=Be({render:r})})),P=e((()=>{it(),Ve(),pe(),Ve()})),at,ot=e((()=>{P(),at=ue(w`
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
`)})),st,F,ct=e((()=>{s(),$e(),Ge(),st=new WeakMap,F=Ue(class extends Qe{render(e){return o}update(e,[t]){let n=t!==this.G;return n&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),o}rt(e){if(this.G!==void 0)if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=st.get(t);n===void 0&&(n=new WeakMap,st.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?st.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}));function lt(e,t,n){return e?t(e):n?.(e)}var ut=e((()=>{})),dt,ft=e((()=>{ot(),P(),s(),dt=w`
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
`,customElements.define(`cosmoz-tooltip-content`,N(()=>a`
			<slot name="heading"></slot>
			<slot name="description"></slot>
			<slot></slot>
		`,{styleSheets:[at,dt]}))})),pt,mt=e((()=>{P(),pt=ue(w`
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
`)})),ht,gt,_t=e((()=>{P(),s(),ut(),ft(),mt(),ht=(e,t,n)=>r(a`<cosmoz-tooltip-content>
			${lt(t,()=>a`<strong slot="heading">${t}</strong>`)}
			${lt(n,()=>a`<p slot="description">${n}</p>`)}
		</cosmoz-tooltip-content>`,e),gt=(e,t)=>{let{for:n,heading:r,description:i,placement:a=`top`,delay:o=300,disabled:s=!1}=t,c=M(),l=!!(r||i)&&!s;O(()=>{if(!n||!l)return;let t=e.getRootNode(),u=t.adoptedStyleSheets??[];u.includes(pt)||(t.adoptedStyleSheets=[...u,pt]);let d=document.createElement(`div`);d.setAttribute(`popover`,`manual`),d.setAttribute(`role`,`tooltip`),d.classList.add(`cosmoz-tooltip-popover`),e.after(d),c.current=d,ht(d,r,i);let f=`[name="${n}"]`,p=`--tooltip-anchor-${n}`,m,h=e=>{s||(clearTimeout(m),e.style.anchorName=p,d.style.positionAnchor=p,d.style.positionArea=a,m=window.setTimeout(()=>d.showPopover(),o))},g=()=>{clearTimeout(m),d.hidePopover()},_=e=>{let t=e.target.closest?.(f);t&&h(t)},v=e=>{let t=e.target.closest?.(f);if(!t)return;let n=e.relatedTarget;n&&t.contains(n)||g()},y=e=>{let t=e.target.closest?.(f);t&&h(t)},b=e=>{e.target.closest?.(f)&&g()};return t.addEventListener(`pointerover`,_),t.addEventListener(`pointerout`,v),t.addEventListener(`focusin`,y),t.addEventListener(`focusout`,b),()=>{clearTimeout(m),t.removeEventListener(`pointerover`,_),t.removeEventListener(`pointerout`,v),t.removeEventListener(`focusin`,y),t.removeEventListener(`focusout`,b),d.hidePopover(),d.remove(),c.current=void 0}},[n,a,o,l]),O(()=>{!n||!c.current||ht(c.current,r,i)},[r,i,n]),O(()=>{!s||!c.current||c.current.hidePopover()},[s])}})),vt,yt=e((()=>{P(),vt=e=>{let[t,n]=j(!1);return O(()=>{let t=e.current;if(!t)return;let r=()=>{n(t.assignedElements().length>0)};return r(),t.addEventListener(`slotchange`,r),()=>t.removeEventListener(`slotchange`,r)},[e.current]),t}})),bt,xt,St=e((()=>{ot(),P(),s(),ct(),ut(),ft(),mt(),_t(),yt(),bt=w`
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
`,xt=e=>{let{heading:t,description:n,for:r,placement:i=`top`,delay:s=300,disabled:c=!1}=e,l=M(),u=M(),d=M(),f=vt(d),p=!!(t||n||f)&&!c,m=A(()=>{p&&(clearTimeout(u.current),u.current=window.setTimeout(()=>{l.current?.showPopover()},s))},[s,p]);O(()=>{c&&(clearTimeout(u.current),l.current?.hidePopover())},[c]);let h=A(()=>{clearTimeout(u.current),l.current?.hidePopover()},[]);return O(()=>{if(r)return;let t=t=>{let n=t.relatedTarget;n&&e.contains(n)||h()};return e.addEventListener(`pointerover`,m),e.addEventListener(`pointerout`,t),()=>{e.removeEventListener(`pointerover`,m),e.removeEventListener(`pointerout`,t)}},[r,m,h]),gt(e,{for:r,heading:t,description:n,placement:i,delay:s,disabled:c}),r?o:p?a`
		<slot @focusin=${m} @focusout=${h}></slot>
		<div
			class="cosmoz-tooltip-popover"
			popover="manual"
			role="tooltip"
			style="position-area: ${i}"
			${F(l)}
		>
			<cosmoz-tooltip-content>
				${lt(t,()=>a`<strong slot="heading">${t}</strong>`)}
				${lt(n,()=>a`<p slot="description">${n}</p>`)}
				<slot name="content" ${F(d)}></slot>
			</cosmoz-tooltip-content>
		</div>
	`:a`
			<slot></slot>
			<slot name="content" ${F(d)} hidden></slot>
		`},customElements.define(`cosmoz-tooltip`,N(xt,{styleSheets:[at,pt,bt],observedAttributes:[`heading`,`description`,`for`,`placement`,`delay`,`disabled`]}))})),Ct=e((()=>{St()})),I,L=e((()=>{s(),I=e=>e??o})),wt,Tt=e((()=>{P(),wt=w`
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
		height: 28px;
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
		height: 36px;
		padding: calc(var(--cz-spacing) * 2) calc(var(--cz-spacing) * 3.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([size='xl']) .button {
		height: 40px;
		padding: calc(var(--cz-spacing) * 2.5) calc(var(--cz-spacing) * 4);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	/* ========================================
	 * ICON ONLY
	 * ======================================== */

	:host([icon-only]) .button {
		width: 32px;
		height: 32px;
		padding: calc(var(--cz-spacing) * 1.5);
		font-size: var(--cz-text-sm);
		line-height: var(--cz-text-sm-line-height);
		border-radius: var(--cz-radius-md);
	}

	:host([icon-only][size='sm']) .button {
		width: 28px;
		height: 28px;
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='lg']) .button {
		width: 36px;
		height: 36px;
		padding: calc(var(--cz-spacing) * 1.5);
	}

	:host([icon-only][size='xl']) .button {
		width: 40px;
		height: 40px;
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
		justify-content: center;
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
		height: 32px;
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
`})),Et,Dt,Ot=e((()=>{ot(),Ct(),P(),s(),L(),ut(),Tt(),Et=[`variant`,`size`,`disabled`,`full-width`,`icon-only`,`tooltip`,`tooltip-placement`,`type`,`value`,`href`,`target`,`rel`,`download`],Dt=e=>{let{disabled:t=!1,tooltip:n,tooltipPlacement:r,type:i=`button`,href:s,target:c,rel:l,download:u}=e,d=!!t;O(()=>{let t=t=>{e.disabled&&t.stopImmediatePropagation()};return e.addEventListener(`click`,t,{capture:!0}),()=>e.removeEventListener(`click`,t,{capture:!0})},[e.disabled]);let f=a`
		<slot name="prefix"></slot>
		<slot></slot>
		<slot name="suffix"></slot>
	`,p=lt(s!=null,()=>a`
			<a
				href=${s}
				class="button"
				part="button"
				aria-disabled=${d?`true`:o}
				target=${I(c)}
				rel=${I(l)}
				download=${I(u)}
				>${f}</a
			>
		`,()=>a`
			<button type=${i} class="button" part="button" ?disabled=${d}>
				${f}
			</button>
		`);return a`<cosmoz-tooltip
		heading=${I(n??void 0)}
		placement=${I(r??void 0)}
		?disabled=${d}
	>
		${p}
	</cosmoz-tooltip>`},customElements.define(`cosmoz-button`,N(Dt,{observedAttributes:Et,styleSheets:[at,wt],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),kt=e((()=>{Ot()}));function*At(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}var jt=e((()=>{})),Mt,Nt,Pt=e((()=>{Mt={duration:250},Nt=e=>(t,n,r)=>{let i=`max`+e.charAt(0).toUpperCase()+e.slice(1);Object.assign(t.style,{[i]:``,display:``,overflow:`hidden`});let{[e]:a}=t.getBoundingClientRect(),o=[0,a],[s,c]=n?o:o.slice().reverse(),l=t.animate([{[i]:`${s}px`},{[i]:`${c}px`}],{...Mt,...r});l.onfinish=()=>Object.assign(t.style,{[i]:``,display:n?``:`none`,overflow:n?``:`visible`})}})),Ft,It,Lt=e((()=>{s(),Ge(),Ft={},It=Ue(class extends We{constructor(){super(...arguments),this.ot=Ft}render(e,t){return t()}update(e,[n,r]){if(Array.isArray(n)){if(Array.isArray(this.ot)&&this.ot.length===n.length&&n.every((e,t)=>e===this.ot[t]))return t}else if(this.ot===n)return t;return this.ot=Array.isArray(n)?Array.from(n):n,this.render(n,r)}})})),Rt,zt,Bt,Vt=e((()=>{s(),Ge(),Rt=`important`,zt=` !important`,Bt=Ue(class extends We{constructor(e){if(super(e),e.type!==He.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[n]){let{style:r}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(n)),this.render(n);for(let e of this.ft)n[e]??(this.ft.delete(e),e.includes(`-`)?r.removeProperty(e):r[e]=null);for(let e in n){let t=n[e];if(t!=null){this.ft.add(e);let n=typeof t==`string`&&t.endsWith(zt);e.includes(`-`)||n?r.setProperty(e,n?t.slice(0,-11):t,n?Rt:``):r[e]=t}}return t}})})),Ht,Ut=e((()=>{Ht=(e=HTMLElement)=>class extends e{connectedCallback(){super.connectedCallback?.(),this.dispatchEvent(new CustomEvent(`connected`))}disconnectedCallback(){super.disconnectedCallback?.(),this.dispatchEvent(new CustomEvent(`disconnected`))}}})),Wt=e((()=>{Ut()})),Gt,Kt,qt=e((()=>{P(),s(),Wt(),Gt=w`
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
`,Kt=()=>a`<div class="wrap" part="wrap"><slot></slot></div>`,customElements.define(`cosmoz-dropdown-content`,Ht(N(Kt,{styleSheets:[Gt]})))}));function Jt(e,t,n){return z(e,dn(t,n))}function Yt(e,t){return typeof e==`function`?e(t):e}function Xt(e){return e.split(`-`)[0]}function Zt(e){return e.split(`-`)[1]}function Qt(e){return e===`x`?`y`:`x`}function $t(e){return e===`y`?`height`:`width`}function R(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function en(e){return Qt(R(e))}function tn(e,t,n){n===void 0&&(n=!1);let r=Zt(e),i=en(e),a=$t(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=sn(o)),[o,sn(o)]}function nn(e){let t=sn(e);return[rn(e),t,rn(t)]}function rn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}function an(e,t,n){switch(e){case`top`:case`bottom`:return n?t?gn:hn:t?hn:gn;case`left`:case`right`:return t?_n:vn;default:return[]}}function on(e,t,n,r){let i=Zt(e),a=an(Xt(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(rn)))),a}function sn(e){let t=Xt(e);return mn[t]+e.slice(t.length)}function cn(e){return{top:e.top??0,right:e.right??0,bottom:e.bottom??0,left:e.left??0}}function ln(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:cn(e)}function un(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}var dn,z,fn,pn,B,mn,hn,gn,_n,vn,yn=e((()=>{dn=Math.min,z=Math.max,fn=Math.round,pn=Math.floor,B=e=>({x:e,y:e}),mn={left:`right`,right:`left`,bottom:`top`,top:`bottom`},hn=[`left`,`right`],gn=[`right`,`left`],_n=[`top`,`bottom`],vn=[`bottom`,`top`]}));function bn(e,t,n){let{reference:r,floating:i}=e,a=R(t),o=en(t),s=$t(o),c=Xt(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}let m=Zt(t);return m&&(p[o]+=f*(m===`end`?1:-1)*(n&&l?-1:1)),p}async function xn(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Yt(t,e),p=ln(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=un(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=un(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var Sn,Cn,wn,Tn,En=e((()=>{yn(),Sn=50,Cn=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:xn},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=bn(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:b,reset:x}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...b},x&&p<Sn&&(p++,typeof x==`object`&&(x.placement&&(f=x.placement),x.rects&&(l=x.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:u,y:d}=bn(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},wn=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Yt(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Xt(r),_=R(o),v=Xt(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),b=d||(v||!m?[sn(o)]:nn(o)),x=p!==`none`;!d&&x&&b.push(...on(o,m,p,y));let S=[o,...b],ee=await s.detectOverflow(t,h),te=[],C=i.flip?.overflows||[];if(l&&te.push(ee[g]),u){let e=tn(r,a,y);te.push(ee[e[0]],ee[e[1]])}if(C=[...C,{placement:r,overflows:te}],!te.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=S[e];if(t&&(!(u===`alignment`&&_!==R(t))||C.every(e=>R(e.placement)!==_||e.overflows[0]>0)))return{data:{index:e,overflows:C},reset:{placement:t}};let n=C.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=C.filter(e=>{if(x){let t=R(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},Tn=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Yt(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=R(i),p=Qt(f),m=u[p],h=u[f],g=(e,t)=>Jt(t+d[e===`y`?`top`:`left`],t,t-d[e===`y`?`bottom`:`right`]);o&&(m=g(p,m)),s&&(h=g(f,h));let _=c.fn({...t,[p]:m,[f]:h});return{..._,data:{x:_.x-n,y:_.y-r,enabled:{[p]:o,[f]:s}}}}}}}));function Dn(){return typeof window<`u`}function On(e){return kn(e)?(e.nodeName||``).toLowerCase():`#document`}function V(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function H(e){return((kn(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function kn(e){return Dn()?e instanceof Node||e instanceof V(e).Node:!1}function U(e){return Dn()?e instanceof Element||e instanceof V(e).Element:!1}function W(e){return Dn()?e instanceof HTMLElement||e instanceof V(e).HTMLElement:!1}function An(e){return!Dn()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof V(e).ShadowRoot}function jn(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=G(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Mn(e){return/^(table|td|th)$/.test(On(e))}function Nn(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}function Pn(e){let t=U(e)?G(e):e;return q(t.transform)||q(t.translate)||q(t.scale)||q(t.rotate)||q(t.perspective)||!In()&&(q(t.backdropFilter)||q(t.filter))||Hn.test(t.willChange||``)||Un.test(t.contain||``)}function Fn(e){let t=K(e);for(;W(t)&&!Ln(t);){if(Pn(t))return t;if(Nn(t))return null;t=K(t)}return null}function In(){return Wn??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),Wn}function Ln(e){return/^(html|body|#document)$/.test(On(e))}function G(e){return V(e).getComputedStyle(e)}function Rn(e){return U(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function K(e){if(On(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||An(e)&&e.host||H(e);return An(t)?t.host:t}function zn(e){let t=K(e);return Ln(t)?(e.ownerDocument||e).body:W(t)&&jn(t)?t:zn(t)}function Bn(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=zn(e),i=r===e.ownerDocument?.body,a=V(r);if(i){let e=Vn(a);return t.concat(a,a.visualViewport||[],jn(r)?r:[],e&&n?Bn(e):[])}else return t.concat(r,Bn(r,[],n))}function Vn(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}var Hn,Un,q,Wn,Gn=e((()=>{Hn=/transform|translate|scale|rotate|perspective|filter/,Un=/paint|layout|strict|content/,q=e=>!!e&&e!==`none`}));function Kn(e){let t=G(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=W(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=fn(n)!==a||fn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function qn(e){return U(e)?e:e.contextElement}function Jn(e){let t=qn(e);if(!W(t))return B(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Kn(t),o=(a?fn(n.width):n.width)/r,s=(a?fn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}function Yn(e){let t=V(e);return!In()||!t.visualViewport?gr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function Xn(e,t,n){return t===void 0&&(t=!1),!!n&&t&&n===V(e)}function J(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=qn(e),o=B(1);t&&(r?U(r)&&(o=Jn(r)):o=Jn(e));let s=Xn(a,n,r)?Yn(a):B(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a&&r){let e=V(a),t=U(r)?V(r):r,n=e,i=Vn(n);for(;i&&t!==n;){let e=Jn(i),t=i.getBoundingClientRect(),r=G(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=V(i),i=Vn(n)}}return un({width:u,height:d,x:c,y:l})}function Zn(e,t){let n=Rn(e).scrollLeft;return t?t.left+n:J(H(e)).left+n}function Qn(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Zn(e,n),y:n.top+t.scrollTop}}function $n(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=H(r),s=t?Nn(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=B(1),u=B(0),d=W(r);if((d||!a)&&((On(r)!==`body`||jn(o))&&(c=Rn(r)),d)){let e=J(r);l=Jn(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Qn(o,c):B(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function er(e){return e.getClientRects?Array.from(e.getClientRects()):[]}function tr(e){let t=Rn(e),n=e.ownerDocument.body,r=z(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),i=z(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight),a=-t.scrollLeft+Zn(e),o=-t.scrollTop;return G(n).direction===`rtl`&&(a+=z(e.clientWidth,n.clientWidth)-r),{width:r,height:i,x:a,y:o}}function nr(e,t,n){n===void 0&&(n=`viewport`);let r=n===`layoutViewport`,i=V(e),a=H(e),o=i.visualViewport,s=a.clientWidth,c=a.clientHeight,l=0,u=0;if(o){let e=!In()||t===`fixed`;r?e||(l=-o.offsetLeft,u=-o.offsetTop):(s=o.width,c=o.height,e&&(l=o.offsetLeft,u=o.offsetTop))}if(Zn(a)<=0){let e=a.ownerDocument,t=e.body,n=getComputedStyle(t),r=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,i=Math.abs(a.clientWidth-t.clientWidth-r),o=getComputedStyle(a).scrollbarGutter===`stable both-edges`?i/2:i;o<=_r&&(s-=o)}return{width:s,height:c,x:l,y:u}}function rr(e,t){let n=J(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Jn(e);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ir(e,t,n){let r;if(t===`viewport`||t===`layoutViewport`)r=nr(e,n,t);else if(t===`document`)r=tr(H(e));else if(U(t))r=rr(t,n);else{let n=Yn(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return un(r)}function ar(e,t){let n=t.get(e);if(n)return n;let r=Bn(e,[],!1).filter(e=>U(e)&&On(e)!==`body`),i=null,a=G(e).position===`fixed`,o=a?K(e):e;for(;U(o)&&!Ln(o);){let e=G(o),t=Pn(o),n=i?i.position:a?`fixed`:``;!t&&(n===`fixed`||n===`absolute`&&e.position===`static`)?r=r.filter(e=>e!==o):i=e,o=K(o)}return t.set(e,r),r}function or(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Nn(t)?[]:ar(t,this._c):[].concat(n),r],o=ir(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ir(t,a[e],i);s=z(n.top,s),c=dn(n.right,c),l=dn(n.bottom,l),u=z(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function sr(e){let{width:t,height:n}=Kn(e);return{width:t,height:n}}function cr(e,t,n){let r=W(t),i=H(t),a=n===`fixed`,o=J(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=B(0);if((r||!a)&&((On(t)!==`body`||jn(i))&&(s=Rn(t)),r)){let e=J(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}!r&&i&&(c.x=Zn(i));let l=i&&!r&&!a?Qn(i,s):B(0);return{x:o.left+s.scrollLeft-c.x-l.x,y:o.top+s.scrollTop-c.y-l.y,width:o.width,height:o.height}}function lr(e){return G(e).position===`static`}function ur(e,t){if(!W(e)||G(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return H(e)===n&&(n=n.ownerDocument.body),n}function dr(e,t){let n=V(e);if(Nn(e))return n;if(!W(e)){let t=K(e);for(;t&&!Ln(t);){if(U(t)&&!lr(t))return t;t=K(t)}return n}let r=ur(e,t);for(;r&&Mn(r)&&lr(r);)r=ur(r,t);return r&&Ln(r)&&lr(r)&&!Pn(r)?n:r||Fn(e)||n}function fr(e){return G(e).direction===`rtl`}function pr(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function mr(e,t,n){let r=null,i,a=H(e);function o(){var e;clearTimeout(i),(e=r)==null||e.disconnect(),r=null}function s(n,c){n===void 0&&(n=!1),c===void 0&&(c=1),o();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(n||t(),!f||!p)return;let m=pn(d),h=pn(a.clientWidth-(u+f)),g=pn(a.clientHeight-(d+p)),_=pn(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:z(0,dn(1,c))||1},y=!0;function b(t){let n=t[0].intersectionRatio;if(!pr(l,e.getBoundingClientRect()))return s();if(n!==c){if(!y)return s();n?s(!1,n):i=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{r=new IntersectionObserver(b,{...v,root:a.ownerDocument})}catch{r=new IntersectionObserver(b,v)}r.observe(e)}let c=V(e),l=()=>s(n);return c.addEventListener(`resize`,l),s(!0),()=>{c.removeEventListener(`resize`,l),o()}}function hr(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=qn(e),u=i||a?[...l?Bn(l):[],...t?Bn(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n),a&&e.addEventListener(`resize`,n)});let d=l&&s?mr(l,n,a):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?J(e):null;c&&g();function g(){let t=J(e);h&&!pr(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var gr,_r,vr,yr,br,xr,Sr,Cr=e((()=>{En(),yn(),Gn(),gr=B(0),_r=25,vr=async function(e){let t=this.getOffsetParent||dr,n=this.getDimensions,r=await n(e.floating);return{reference:cr(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},yr={convertOffsetParentRelativeRectToViewportRelativeRect:$n,getDocumentElement:H,getClippingRect:or,getOffsetParent:dr,getElementRects:vr,getClientRects:er,getDimensions:sr,getScale:Jn,isElement:U,isRTL:fr},br=Tn,xr=wn,Sr=(e,t,n)=>{let r=new Map,i=n??{},a={...yr,...i.platform,_c:r};return Cn(e,t,{...i,platform:a})}})),wr,Tr,Er=e((()=>{P(),Cr(),wr=[xr({fallbackAxisSideDirection:`start`,crossAxis:!1}),br()],Tr=({placement:e=`bottom-start`,strategy:t,middleware:n=wr}={})=>{let[r,i]=j(),[a,o]=j(),[s,c]=j();return O(()=>{if(!r||!(a instanceof HTMLElement)){c(void 0);return}return hr(r,a,()=>Sr(r,a,{placement:e,strategy:t,middleware:n}).then(c))},[r,a,e,t,n]),{setReference:i,setFloating:o,styles:k(()=>s?{left:`${s.x}px`,top:`${s.y}px`}:{},[s?.x,s?.y])}}})),Dr,Or=e((()=>{P(),Dr=e=>{let t=k(()=>({}),[]);return k(()=>Object.assign(t,e),[t,...Object.values(e)])}})),kr,Ar,jr,Mr=e((()=>{Or(),P(),kr=e=>e.matches(`:focus-within`)?!0:(e.shadowRoot?.querySelector(`[popover]`))?.matches(`:focus-within`)??!1,Ar=({disabled:e,onFocus:t})=>{let[n,r]=j(),{focused:i,closed:a}=n||{},o=i&&!e,s=Dr({closed:a,onFocus:t}),c=A(e=>r(t=>({...t,closed:e})),[]),l=A(e=>{let t=e.currentTarget;return kr(t)?r(e=>({focused:!0,closed:!e?.closed})):t.focus()},[]);return O(()=>{if(!o)return;let e=e=>{if(e.defaultPrevented)return;let{closed:t}=s;e.key===`Escape`&&!t?(e.preventDefault(),c(!0)):[`ArrowUp`,`Up`].includes(e.key)&&t&&(e.preventDefault(),c(!1))};return document.addEventListener(`keydown`,e,!0),()=>document.removeEventListener(`keydown`,e,!0)},[o]),{focused:o,active:o&&!a,setClosed:c,onToggle:l,onFocus:A(e=>{let t=kr(e.currentTarget);r({focused:t}),s.onFocus?.(t)},[s])}},jr=e=>{let t=Ar(e),{onFocus:n}=t,r=M();return O(()=>{e.setAttribute(`tabindex`,`0`);let t=e=>{clearTimeout(r.current),n(e)},i=e=>{clearTimeout(r.current);let t=e.currentTarget;r.current=setTimeout(()=>n({currentTarget:t}),30)};return e.addEventListener(`focusin`,t),e.addEventListener(`focusout`,i),()=>{clearTimeout(r.current),e.removeEventListener(`focusin`,t),e.removeEventListener(`focusout`,i)}},[n]),t}})),Nr,Pr,Fr,Ir=e((()=>{P(),s(),Lt(),ct(),Vt(),qt(),Er(),Mr(),Nr=e=>e.preventDefault(),Pr=w`
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
`,Fr=e=>{let{placement:t,strategy:n,middleware:r,render:i}=e,{active:s,onToggle:c}=jr(e),l=M(),{styles:u,setReference:d,setFloating:f}=Tr({placement:t,strategy:n,middleware:r}),p=A(e=>{l.current=e,f(e)},[f]);return O(()=>{let e=l.current;e&&(s&&!e.matches(`:popover-open`)&&e.showPopover?.(),!s&&e.matches(`:popover-open`)&&e.hidePopover?.())},[s]),a`
		<div class="anchor" part="anchor" ${F(d)}>
			<button
				@mousedown=${Nr}
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
			style="${Bt(u)}"
			${F(p)}
			><slot></slot>${It([i],()=>i?.()||o)}</cosmoz-dropdown-content
		>
	`},customElements.define(`cosmoz-dropdown`,N(Fr,{styleSheets:[Pr]}))})),Lr,Rr,zr,Br=e((()=>{P(),s(),Lr=w`
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
`,Rr=()=>a` <slot></slot> `,customElements.define(`cosmoz-dropdown-list`,N(Rr,{styleSheets:[Lr]})),zr=({placement:e})=>a` <cosmoz-dropdown
		.placement=${e}
		part="dropdown"
		exportparts="anchor, button, content, wrap, dropdown"
	>
		<slot name="button" slot="button"></slot>
		<cosmoz-dropdown-list><slot></slot></cosmoz-dropdown-list>
	</cosmoz-dropdown>`,customElements.define(`cosmoz-dropdown-menu`,N(zr))})),Vr,Hr=e((()=>{P(),Vr=({host:e,popoverRef:t,disabled:n,openOnHover:r,openOnFocus:i,open:a,close:o})=>{let s=M(),c=()=>clearTimeout(s.current),l=()=>{clearTimeout(s.current),s.current=setTimeout(()=>{let n=t.current;r&&(e.matches(`:hover`)||n?.matches(`:hover`))||e.matches(`:focus-within`)||n?.matches(`:focus-within`)||o()},100)},u=()=>{n||(c(),a())};return O(()=>{if(!(!r||n))return e.addEventListener(`pointerenter`,u),e.addEventListener(`pointerleave`,l),()=>{c(),e.removeEventListener(`pointerenter`,u),e.removeEventListener(`pointerleave`,l)}},[r,n,e]),O(()=>{if(!(!i||n))return e.addEventListener(`focusin`,u),e.addEventListener(`focusout`,l),()=>{c(),e.removeEventListener(`focusin`,u),e.removeEventListener(`focusout`,l)}},[i,n,e]),{scheduleClose:l,cancelClose:c}}})),Ur,Wr,Gr,Kr=e((()=>{P(),s(),ct(),Hr(),Ur=e=>{if(e.newState!==`open`)return;let t=e.target.querySelector(`slot:not([name])`)?.assignedElements({flatten:!0})??[];for(let e of t){let t=e.matches(`[autofocus]`)?e:e.querySelector(`[autofocus]`);if(t instanceof HTMLElement){t.focus();break}}},Wr=w`
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
`,Gr=e=>{let{placement:t=`bottom span-right`,disabled:n,passthrough:r,openOnHover:i,openOnFocus:o}=e,s=M(),[c,l]=Fe(`opened`,!1),u=A(()=>{n||(l(!0),s.current?.showPopover?.())},[n]),d=A(()=>{l(!1),s.current?.hidePopover?.()},[]),f=A(()=>{n||(s.current?.matches(`:popover-open`)?d():u())},[n]);O(()=>{let e=s.current;e&&(c?e.showPopover?.():e.hidePopover?.())},[c]),O(()=>{e.toggleAttribute(`opened`,!!c)},[c]);let{scheduleClose:p,cancelClose:m}=Vr({host:e,popoverRef:s,disabled:n,openOnHover:i,openOnFocus:o,open:u,close:d}),h=o?u:f,g=A(t=>{Ur(t),l(t.newState===`open`),e.dispatchEvent(new ToggleEvent(`dropdown-toggle`,{newState:t.newState,oldState:t.oldState,composed:!0}))},[]);return a`
		<slot name="button" @click=${h}></slot>
		${n&&r?a`<slot></slot>`:a`<div
					popover
					style="position-area: ${t}"
					@toggle=${g}
					@select=${d}
					@focusout=${p}
					@focusin=${m}
					${F(e=>e&&(s.current=e))}
				>
					<slot></slot>
				</div>`}
	`},customElements.define(`cosmoz-dropdown-next`,N(Gr,{styleSheets:[Wr],observedAttributes:[`placement`,`disabled`,`passthrough`,`open-on-hover`,`open-on-focus`],shadowRootInit:{mode:`open`,delegatesFocus:!0}}))})),qr=e((()=>{Ir(),Br(),Mr(),Kr()})),Jr=e((()=>{s(),L()})),Yr=e((()=>{s(),L()})),Xr=e((()=>{s(),L()})),Zr=e((()=>{s(),L()})),Qr=e((()=>{s(),L()})),$r=e((()=>{s(),L()})),ei=e((()=>{s(),L()})),ti=e((()=>{s(),L()})),ni=e((()=>{s(),L()})),ri=e((()=>{s(),L()})),ii=e((()=>{s(),L()})),ai=e((()=>{s(),L()})),oi=e((()=>{s(),L()})),si=e((()=>{s(),L()})),ci=e((()=>{s(),L()})),li=e((()=>{s(),L()})),ui=e((()=>{s(),L()})),di=e((()=>{s(),L()})),fi=e((()=>{s(),L()})),pi=e((()=>{s(),L()})),mi=e((()=>{s(),L()})),hi=e((()=>{s(),L()})),gi=e((()=>{s(),L()})),_i=e((()=>{s(),L()})),vi=e((()=>{s(),L()})),yi=e((()=>{s(),L()})),bi=e((()=>{s(),L()})),xi=e((()=>{s(),L()})),Si=e((()=>{s(),L()})),Ci=e((()=>{s(),L()})),wi=e((()=>{s(),L()})),Ti=e((()=>{s(),L()})),Ei=e((()=>{s(),L()})),Di=e((()=>{s(),L()})),Oi=e((()=>{s(),L()})),ki=e((()=>{s(),L()})),Ai=e((()=>{s(),L()})),ji=e((()=>{s(),L()})),Mi=e((()=>{s(),L()})),Ni=e((()=>{s(),L()})),Pi=e((()=>{s(),L()})),Fi=e((()=>{s(),L()})),Ii=e((()=>{s(),L()})),Li=e((()=>{s(),L()})),Ri=e((()=>{s(),L()})),zi=e((()=>{s(),L()})),Bi=e((()=>{s(),L()})),Vi=e((()=>{s(),L()})),Hi=e((()=>{s(),L()})),Ui=e((()=>{s(),L()})),Wi=e((()=>{s(),L()})),Gi=e((()=>{s(),L()})),Ki=e((()=>{s(),L()})),qi=e((()=>{s(),L()})),Ji=e((()=>{s(),L()})),Yi=e((()=>{s(),L()})),Xi=e((()=>{s(),L()})),Zi=e((()=>{s(),L()})),Qi=e((()=>{s(),L()})),$i=e((()=>{s(),L()})),ea=e((()=>{s(),L()})),ta=e((()=>{s(),L()})),na=e((()=>{s(),L()})),ra=e((()=>{s(),L()})),ia=e((()=>{s(),L()})),aa=e((()=>{s(),L()})),oa=e((()=>{s(),L()})),sa=e((()=>{s(),L()})),ca=e((()=>{s(),L()})),la=e((()=>{s(),L()})),ua=e((()=>{s(),L()})),da=e((()=>{s(),L()})),fa=e((()=>{s(),L()})),pa=e((()=>{s(),L()})),ma=e((()=>{s(),L()})),ha=e((()=>{s(),L()})),ga=e((()=>{s(),L()})),_a=e((()=>{s(),L()})),va=e((()=>{s(),L()})),ya=e((()=>{s(),L()})),ba=e((()=>{s(),L()})),xa=e((()=>{s(),L()})),Sa=e((()=>{s(),L()})),Ca=e((()=>{s(),L()})),wa=e((()=>{s(),L()})),Ta=e((()=>{s(),L()})),Ea=e((()=>{s(),L()})),Da=e((()=>{s(),L()})),Oa=e((()=>{s(),L()})),ka=e((()=>{s(),L()})),Aa=e((()=>{s(),L()})),ja=e((()=>{s(),L()})),Ma=e((()=>{s(),L()})),Na=e((()=>{s(),L()})),Pa=e((()=>{s(),L()})),Fa=e((()=>{s(),L()})),Ia=e((()=>{s(),L()})),La=e((()=>{s(),L()})),Ra=e((()=>{s(),L()})),za=e((()=>{s(),L()})),Ba=e((()=>{s(),L()})),Va=e((()=>{s(),L()})),Ha=e((()=>{s(),L()})),Ua=e((()=>{s(),L()})),Wa=e((()=>{s(),L()})),Ga=e((()=>{s(),L()})),Ka=e((()=>{s(),L()})),qa=e((()=>{s(),L()})),Ja=e((()=>{s(),L()})),Ya=e((()=>{s(),L()})),Xa=e((()=>{s(),L()})),Za=e((()=>{s(),L()})),Qa=e((()=>{s(),L()})),$a=e((()=>{s(),L()})),eo=e((()=>{s(),L()})),to=e((()=>{s(),L()})),no=e((()=>{s(),L()})),ro=e((()=>{s(),L()})),io=e((()=>{s(),L()})),ao=e((()=>{s(),L()})),oo=e((()=>{s(),L()})),so=e((()=>{s(),L()})),co=e((()=>{s(),L()})),lo=e((()=>{s(),L()})),uo=e((()=>{s(),L()})),fo=e((()=>{s(),L()})),po=e((()=>{s(),L()})),mo=e((()=>{s(),L()})),ho=e((()=>{s(),L()})),go=e((()=>{s(),L()})),_o=e((()=>{s(),L()})),vo=e((()=>{s(),L()})),yo=e((()=>{s(),L()})),bo=e((()=>{s(),L()})),xo=e((()=>{s(),L()})),So=e((()=>{s(),L()})),Co=e((()=>{s(),L()})),wo=e((()=>{s(),L()})),To=e((()=>{s(),L()})),Eo=e((()=>{s(),L()})),Do=e((()=>{s(),L()})),Oo=e((()=>{s(),L()})),ko=e((()=>{s(),L()})),Ao=e((()=>{s(),L()})),jo=e((()=>{s(),L()})),Mo=e((()=>{s(),L()})),No=e((()=>{s(),L()})),Po=e((()=>{s(),L()})),Fo=e((()=>{s(),L()})),Io=e((()=>{s(),L()})),Lo=e((()=>{s(),L()})),Ro=e((()=>{s(),L()})),zo=e((()=>{s(),L()})),Bo=e((()=>{s(),L()})),Vo=e((()=>{s(),L()})),Ho=e((()=>{s(),L()})),Uo=e((()=>{s(),L()})),Wo=e((()=>{s(),L()})),Go=e((()=>{s(),L()})),Ko=e((()=>{s(),L()})),qo=e((()=>{s(),L()})),Jo=e((()=>{s(),L()})),Yo=e((()=>{s(),L()})),Xo=e((()=>{s(),L()})),Zo=e((()=>{s(),L()})),Qo=e((()=>{s(),L()})),$o=e((()=>{s(),L()})),es=e((()=>{s(),L()})),ts=e((()=>{s(),L()})),ns=e((()=>{s(),L()})),rs=e((()=>{s(),L()})),is=e((()=>{s(),L()})),as=e((()=>{s(),L()})),os=e((()=>{s(),L()})),ss=e((()=>{s(),L()})),cs=e((()=>{s(),L()})),ls=e((()=>{s(),L()})),us=e((()=>{s(),L()})),ds=e((()=>{s(),L()})),fs=e((()=>{s(),L()})),ps=e((()=>{s(),L()})),ms=e((()=>{s(),L()})),hs=e((()=>{s(),L()})),gs=e((()=>{s(),L()})),_s=e((()=>{s(),L()})),vs=e((()=>{s(),L()})),ys=e((()=>{s(),L()})),bs=e((()=>{s(),L()})),xs=e((()=>{s(),L()})),Ss=e((()=>{s(),L()})),Cs=e((()=>{s(),L()})),ws=e((()=>{s(),L()})),Ts=e((()=>{s(),L()})),Es=e((()=>{s(),L()})),Ds=e((()=>{s(),L()})),Os=e((()=>{s(),L()})),ks=e((()=>{s(),L()})),As=e((()=>{s(),L()})),js=e((()=>{s(),L()})),Ms=e((()=>{s(),L()})),Ns=e((()=>{s(),L()})),Ps=e((()=>{s(),L()})),Fs=e((()=>{s(),L()})),Is=e((()=>{s(),L()})),Ls=e((()=>{s(),L()})),Rs=e((()=>{s(),L()})),zs=e((()=>{s(),L()})),Bs=e((()=>{s(),L()})),Vs=e((()=>{s(),L()})),Hs=e((()=>{s(),L()})),Us=e((()=>{s(),L()})),Ws=e((()=>{s(),L()})),Gs=e((()=>{s(),L()})),Ks=e((()=>{s(),L()})),qs=e((()=>{s(),L()})),Js=e((()=>{s(),L()})),Ys=e((()=>{s(),L()})),Xs=e((()=>{s(),L()})),Zs=e((()=>{s(),L()})),Qs=e((()=>{s(),L()})),$s=e((()=>{s(),L()})),ec=e((()=>{s(),L()})),tc=e((()=>{s(),L()})),nc=e((()=>{s(),L()})),rc=e((()=>{s(),L()})),ic=e((()=>{s(),L()})),ac=e((()=>{s(),L()})),oc=e((()=>{s(),L()})),sc=e((()=>{s(),L()})),cc=e((()=>{s(),L()})),lc=e((()=>{s(),L()})),uc=e((()=>{s(),L()})),dc=e((()=>{s(),L()})),fc=e((()=>{s(),L()})),pc=e((()=>{s(),L()})),mc=e((()=>{s(),L()})),hc=e((()=>{s(),L()})),gc=e((()=>{s(),L()})),_c=e((()=>{s(),L()})),vc=e((()=>{s(),L()})),yc=e((()=>{s(),L()})),bc=e((()=>{s(),L()})),xc=e((()=>{s(),L()})),Sc=e((()=>{s(),L()})),Cc=e((()=>{s(),L()})),wc=e((()=>{s(),L()})),Tc=e((()=>{s(),L()})),Ec=e((()=>{s(),L()})),Dc=e((()=>{s(),L()})),Oc=e((()=>{s(),L()})),kc=e((()=>{s(),L()})),Ac=e((()=>{s(),L()})),jc=e((()=>{s(),L()})),Mc=e((()=>{s(),L()})),Nc=e((()=>{s(),L()})),Pc=e((()=>{s(),L()})),Fc=e((()=>{s(),L()})),Ic=e((()=>{s(),L()})),Lc=e((()=>{s(),L()})),Rc=e((()=>{s(),L()})),zc=e((()=>{s(),L()})),Bc=e((()=>{s(),L()})),Vc=e((()=>{s(),L()})),Hc=e((()=>{s(),L()})),Uc=e((()=>{s(),L()})),Wc=e((()=>{s(),L()})),Gc=e((()=>{s(),L()})),Kc=e((()=>{s(),L()})),qc=e((()=>{s(),L()})),Jc=e((()=>{s(),L()})),Yc=e((()=>{s(),L()})),Xc=e((()=>{s(),L()})),Zc=e((()=>{s(),L()})),Qc=e((()=>{s(),L()})),$c=e((()=>{s(),L()})),el=e((()=>{s(),L()})),tl=e((()=>{s(),L()})),nl=e((()=>{s(),L()})),rl=e((()=>{s(),L()})),il=e((()=>{s(),L()})),al=e((()=>{s(),L()})),ol=e((()=>{s(),L()})),sl=e((()=>{s(),L()})),cl=e((()=>{s(),L()})),ll=e((()=>{s(),L()})),ul=e((()=>{s(),L()})),dl=e((()=>{s(),L()})),fl=e((()=>{s(),L()})),pl=e((()=>{s(),L()})),ml=e((()=>{s(),L()})),hl=e((()=>{s(),L()})),gl=e((()=>{s(),L()})),_l=e((()=>{s(),L()})),vl=e((()=>{s(),L()})),yl=e((()=>{s(),L()})),bl=e((()=>{s(),L()})),xl=e((()=>{s(),L()})),Sl=e((()=>{s(),L()})),Cl=e((()=>{s(),L()})),wl=e((()=>{s(),L()})),Tl=e((()=>{s(),L()})),El=e((()=>{s(),L()})),Dl=e((()=>{s(),L()})),Ol=e((()=>{s(),L()})),kl=e((()=>{s(),L()})),Al=e((()=>{s(),L()})),jl=e((()=>{s(),L()})),Ml=e((()=>{s(),L()})),Nl=e((()=>{s(),L()})),Pl=e((()=>{s(),L()})),Fl=e((()=>{s(),L()})),Il=e((()=>{s(),L()})),Ll=e((()=>{s(),L()})),Rl=e((()=>{s(),L()})),zl=e((()=>{s(),L()})),Bl=e((()=>{s(),L()})),Vl=e((()=>{s(),L()})),Hl=e((()=>{s(),L()})),Ul=e((()=>{s(),L()})),Wl=e((()=>{s(),L()})),Gl=e((()=>{s(),L()})),Kl=e((()=>{s(),L()})),ql=e((()=>{s(),L()})),Jl=e((()=>{s(),L()})),Yl=e((()=>{s(),L()})),Xl=e((()=>{s(),L()})),Zl=e((()=>{s(),L()})),Ql=e((()=>{s(),L()})),$l=e((()=>{s(),L()})),eu=e((()=>{s(),L()})),tu=e((()=>{s(),L()})),nu=e((()=>{s(),L()})),ru=e((()=>{s(),L()})),iu=e((()=>{s(),L()})),au=e((()=>{s(),L()})),ou=e((()=>{s(),L()})),su=e((()=>{s(),L()})),cu=e((()=>{s(),L()})),lu=e((()=>{s(),L()})),uu=e((()=>{s(),L()})),du=e((()=>{s(),L()})),fu=e((()=>{s(),L()})),pu=e((()=>{s(),L()})),mu=e((()=>{s(),L()})),hu=e((()=>{s(),L()})),gu=e((()=>{s(),L()})),_u=e((()=>{s(),L()})),vu=e((()=>{s(),L()})),yu=e((()=>{s(),L()})),bu=e((()=>{s(),L()})),xu=e((()=>{s(),L()})),Su=e((()=>{s(),L()})),Cu=e((()=>{s(),L()})),wu=e((()=>{s(),L()})),Tu=e((()=>{s(),L()})),Eu=e((()=>{s(),L()})),Du=e((()=>{s(),L()})),Ou=e((()=>{s(),L()})),ku=e((()=>{s(),L()})),Au=e((()=>{s(),L()})),ju=e((()=>{s(),L()})),Mu=e((()=>{s(),L()})),Nu=e((()=>{s(),L()})),Pu=e((()=>{s(),L()})),Fu=e((()=>{s(),L()})),Iu=e((()=>{s(),L()})),Lu=e((()=>{s(),L()})),Ru=e((()=>{s(),L()})),zu=e((()=>{s(),L()})),Bu=e((()=>{s(),L()})),Vu=e((()=>{s(),L()})),Hu=e((()=>{s(),L()})),Uu=e((()=>{s(),L()})),Wu=e((()=>{s(),L()})),Gu=e((()=>{s(),L()})),Ku=e((()=>{s(),L()})),qu=e((()=>{s(),L()})),Ju=e((()=>{s(),L()})),Yu=e((()=>{s(),L()})),Xu=e((()=>{s(),L()})),Zu=e((()=>{s(),L()})),Qu=e((()=>{s(),L()})),$u=e((()=>{s(),L()})),ed=e((()=>{s(),L()})),td=e((()=>{s(),L()})),nd=e((()=>{s(),L()})),rd=e((()=>{s(),L()})),id=e((()=>{s(),L()})),ad=e((()=>{s(),L()})),od=e((()=>{s(),L()})),sd=e((()=>{s(),L()})),cd=e((()=>{s(),L()})),ld=e((()=>{s(),L()})),ud=e((()=>{s(),L()})),dd=e((()=>{s(),L()})),fd=e((()=>{s(),L()})),pd=e((()=>{s(),L()})),md=e((()=>{s(),L()})),hd=e((()=>{s(),L()})),gd=e((()=>{s(),L()})),_d=e((()=>{s(),L()})),vd=e((()=>{s(),L()})),yd=e((()=>{s(),L()})),bd=e((()=>{s(),L()})),xd=e((()=>{s(),L()})),Sd=e((()=>{s(),L()})),Cd=e((()=>{s(),L()})),wd=e((()=>{s(),L()})),Td,Ed=e((()=>{s(),L(),ut(),Td=({slot:e,title:t,className:r,width:i=`24`,height:o=`24`,styles:s}={})=>a`
  <svg
    slot=${I(e)}
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
    style=${I(s)}
  >
    ${lt(t,()=>n`<title>${t}</title>`)}
    <path
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </svg>
`})),Dd=e((()=>{s(),L()})),Od=e((()=>{s(),L()})),kd=e((()=>{s(),L()})),Ad=e((()=>{s(),L()})),jd=e((()=>{s(),L()})),Md=e((()=>{s(),L()})),Nd=e((()=>{s(),L()})),Pd=e((()=>{s(),L()})),Fd=e((()=>{s(),L()})),Id=e((()=>{s(),L()})),Ld=e((()=>{s(),L()})),Rd=e((()=>{s(),L()})),zd=e((()=>{s(),L()})),Bd=e((()=>{s(),L()})),Vd=e((()=>{s(),L()})),Hd=e((()=>{s(),L()})),Ud=e((()=>{s(),L()})),Wd=e((()=>{s(),L()})),Gd=e((()=>{s(),L()})),Kd=e((()=>{s(),L()})),qd=e((()=>{s(),L()})),Jd=e((()=>{s(),L()})),Yd=e((()=>{s(),L()})),Xd=e((()=>{s(),L()})),Zd=e((()=>{s(),L()})),Qd=e((()=>{s(),L()})),$d=e((()=>{s(),L()})),ef=e((()=>{s(),L()})),tf=e((()=>{s(),L()})),nf=e((()=>{s(),L()})),rf=e((()=>{s(),L()})),af=e((()=>{s(),L()})),of=e((()=>{s(),L()})),sf=e((()=>{s(),L()})),cf=e((()=>{s(),L()})),lf=e((()=>{s(),L()})),uf=e((()=>{s(),L()})),df=e((()=>{s(),L()})),ff=e((()=>{s(),L()})),pf=e((()=>{s(),L()})),mf=e((()=>{s(),L()})),hf=e((()=>{s(),L()})),gf=e((()=>{s(),L()})),_f=e((()=>{s(),L()})),vf=e((()=>{s(),L()})),yf=e((()=>{s(),L()})),bf=e((()=>{s(),L()})),xf=e((()=>{s(),L()})),Sf=e((()=>{s(),L()})),Cf=e((()=>{s(),L()})),wf=e((()=>{s(),L()})),Tf=e((()=>{s(),L()})),Ef=e((()=>{s(),L()})),Df=e((()=>{s(),L()})),Of=e((()=>{s(),L()})),kf=e((()=>{s(),L()})),Af=e((()=>{s(),L()})),jf=e((()=>{s(),L()})),Mf=e((()=>{s(),L()})),Nf=e((()=>{s(),L()})),Pf=e((()=>{s(),L()})),Ff=e((()=>{s(),L()})),If=e((()=>{s(),L()})),Lf=e((()=>{s(),L()})),Rf=e((()=>{s(),L()})),zf=e((()=>{s(),L()})),Bf=e((()=>{s(),L()})),Vf=e((()=>{s(),L()})),Hf=e((()=>{s(),L()})),Uf=e((()=>{s(),L()})),Wf=e((()=>{s(),L()})),Gf=e((()=>{s(),L()})),Kf=e((()=>{s(),L()})),qf=e((()=>{s(),L()})),Jf=e((()=>{s(),L()})),Yf=e((()=>{s(),L()})),Xf=e((()=>{s(),L()})),Zf=e((()=>{s(),L()})),Qf=e((()=>{s(),L()})),$f=e((()=>{s(),L()})),ep=e((()=>{s(),L()})),tp=e((()=>{s(),L()})),np=e((()=>{s(),L()})),rp=e((()=>{s(),L()})),ip=e((()=>{s(),L()})),ap=e((()=>{s(),L()})),op=e((()=>{s(),L()})),sp=e((()=>{s(),L()})),cp=e((()=>{s(),L()})),lp=e((()=>{s(),L()})),up=e((()=>{s(),L()})),dp=e((()=>{s(),L()})),fp=e((()=>{s(),L()})),pp=e((()=>{s(),L()})),mp=e((()=>{s(),L()})),hp=e((()=>{s(),L()})),gp=e((()=>{s(),L()})),_p=e((()=>{s(),L()})),vp=e((()=>{s(),L()})),yp=e((()=>{s(),L()})),bp=e((()=>{s(),L()})),xp=e((()=>{s(),L()})),Sp=e((()=>{s(),L()})),Cp=e((()=>{s(),L()})),wp=e((()=>{s(),L()})),Tp=e((()=>{s(),L()})),Ep=e((()=>{s(),L()})),Dp=e((()=>{s(),L()})),Op=e((()=>{s(),L()})),kp=e((()=>{s(),L()})),Ap=e((()=>{s(),L()})),jp=e((()=>{s(),L()})),Mp=e((()=>{s(),L()})),Np=e((()=>{s(),L()})),Pp=e((()=>{s(),L()})),Fp=e((()=>{s(),L()})),Ip=e((()=>{s(),L()})),Lp=e((()=>{s(),L()})),Rp=e((()=>{s(),L()})),zp=e((()=>{s(),L()})),Bp=e((()=>{s(),L()})),Vp=e((()=>{s(),L()})),Hp=e((()=>{s(),L()})),Up=e((()=>{s(),L()})),Wp=e((()=>{s(),L()})),Gp=e((()=>{s(),L()})),Kp=e((()=>{s(),L()})),qp=e((()=>{s(),L()})),Jp=e((()=>{s(),L()})),Yp=e((()=>{s(),L()})),Xp=e((()=>{s(),L()})),Zp=e((()=>{s(),L()})),Qp=e((()=>{s(),L()})),$p=e((()=>{s(),L()})),em=e((()=>{s(),L()})),tm=e((()=>{s(),L()})),nm=e((()=>{s(),L()})),rm=e((()=>{s(),L()})),im=e((()=>{s(),L()})),am=e((()=>{s(),L()})),om=e((()=>{s(),L()})),sm=e((()=>{s(),L()})),cm=e((()=>{s(),L()})),lm=e((()=>{s(),L()})),um=e((()=>{s(),L()})),dm=e((()=>{s(),L()})),fm=e((()=>{s(),L()})),pm=e((()=>{s(),L()})),mm=e((()=>{s(),L()})),hm=e((()=>{s(),L()})),gm=e((()=>{s(),L()})),_m=e((()=>{s(),L()})),vm=e((()=>{s(),L()})),ym=e((()=>{s(),L()})),bm=e((()=>{s(),L()})),xm=e((()=>{s(),L()})),Sm=e((()=>{s(),L()})),Cm=e((()=>{s(),L()})),wm=e((()=>{s(),L()})),Tm=e((()=>{s(),L()})),Em=e((()=>{s(),L()})),Dm=e((()=>{s(),L()})),Om=e((()=>{s(),L()})),km=e((()=>{s(),L()})),Am=e((()=>{s(),L()})),jm=e((()=>{s(),L()})),Mm=e((()=>{s(),L()})),Nm=e((()=>{s(),L()})),Pm=e((()=>{s(),L()})),Fm=e((()=>{s(),L()})),Im=e((()=>{s(),L()})),Lm=e((()=>{s(),L()})),Rm=e((()=>{s(),L()})),zm=e((()=>{s(),L()})),Bm=e((()=>{s(),L()})),Vm=e((()=>{s(),L()})),Hm=e((()=>{s(),L()})),Um=e((()=>{s(),L()})),Wm=e((()=>{s(),L()})),Gm=e((()=>{s(),L()})),Km=e((()=>{s(),L()})),qm=e((()=>{s(),L()})),Jm=e((()=>{s(),L()})),Ym=e((()=>{s(),L()})),Xm=e((()=>{s(),L()})),Zm=e((()=>{s(),L()})),Qm=e((()=>{s(),L()})),$m=e((()=>{s(),L()})),eh=e((()=>{s(),L()})),th=e((()=>{s(),L()})),nh=e((()=>{s(),L()})),rh=e((()=>{s(),L()})),ih=e((()=>{s(),L()})),ah=e((()=>{s(),L()})),oh=e((()=>{s(),L()})),sh=e((()=>{s(),L()})),ch=e((()=>{s(),L()})),lh=e((()=>{s(),L()})),uh=e((()=>{s(),L()})),dh=e((()=>{s(),L()})),fh=e((()=>{s(),L()})),ph=e((()=>{s(),L()})),mh=e((()=>{s(),L()})),hh=e((()=>{s(),L()})),gh=e((()=>{s(),L()})),_h=e((()=>{s(),L()})),vh=e((()=>{s(),L()})),yh=e((()=>{s(),L()})),bh=e((()=>{s(),L()})),xh=e((()=>{s(),L()})),Sh=e((()=>{s(),L()})),Ch=e((()=>{s(),L()})),wh=e((()=>{s(),L()})),Th=e((()=>{s(),L()})),Eh=e((()=>{s(),L()})),Dh=e((()=>{s(),L()})),Oh=e((()=>{s(),L()})),kh=e((()=>{s(),L()})),Ah=e((()=>{s(),L()})),jh=e((()=>{s(),L()})),Mh=e((()=>{s(),L()})),Nh=e((()=>{s(),L()})),Ph=e((()=>{s(),L()})),Fh=e((()=>{s(),L()})),Ih=e((()=>{s(),L()})),Lh=e((()=>{s(),L()})),Rh=e((()=>{s(),L()})),zh=e((()=>{s(),L()})),Bh=e((()=>{s(),L()})),Vh=e((()=>{s(),L()})),Hh=e((()=>{s(),L()})),Uh=e((()=>{s(),L()})),Wh=e((()=>{s(),L()})),Gh=e((()=>{s(),L()})),Kh=e((()=>{s(),L()})),qh=e((()=>{s(),L()})),Jh=e((()=>{s(),L()})),Yh=e((()=>{s(),L()})),Xh=e((()=>{s(),L()})),Zh=e((()=>{s(),L()})),Qh=e((()=>{s(),L()})),$h=e((()=>{s(),L()})),eg=e((()=>{s(),L()})),tg=e((()=>{s(),L()})),ng=e((()=>{s(),L()})),rg=e((()=>{s(),L()})),ig=e((()=>{s(),L()})),ag=e((()=>{s(),L()})),og=e((()=>{s(),L()})),sg=e((()=>{s(),L()})),cg=e((()=>{s(),L()})),lg=e((()=>{s(),L()})),ug=e((()=>{s(),L()})),dg=e((()=>{s(),L()})),fg=e((()=>{s(),L()})),pg=e((()=>{s(),L()})),mg=e((()=>{s(),L()})),hg=e((()=>{s(),L()})),gg=e((()=>{s(),L()})),_g=e((()=>{s(),L()})),vg=e((()=>{s(),L()})),yg=e((()=>{s(),L()})),bg=e((()=>{s(),L()})),xg=e((()=>{s(),L()})),Sg=e((()=>{s(),L()})),Cg=e((()=>{s(),L()})),wg=e((()=>{s(),L()})),Tg=e((()=>{s(),L()})),Eg=e((()=>{s(),L()})),Dg=e((()=>{s(),L()})),Og=e((()=>{s(),L()})),kg=e((()=>{s(),L()})),Ag=e((()=>{s(),L()})),jg=e((()=>{s(),L()})),Mg=e((()=>{s(),L()})),Ng=e((()=>{s(),L()})),Pg=e((()=>{s(),L()})),Fg=e((()=>{s(),L()})),Ig=e((()=>{s(),L()})),Lg=e((()=>{s(),L()})),Rg=e((()=>{s(),L()})),zg=e((()=>{s(),L()})),Bg=e((()=>{s(),L()})),Vg=e((()=>{s(),L()})),Hg=e((()=>{s(),L()})),Ug=e((()=>{s(),L()})),Wg=e((()=>{s(),L()})),Gg=e((()=>{s(),L()})),Kg=e((()=>{s(),L()})),qg=e((()=>{s(),L()})),Jg=e((()=>{s(),L()})),Yg=e((()=>{s(),L()})),Xg=e((()=>{s(),L()})),Zg=e((()=>{s(),L()})),Qg=e((()=>{s(),L()})),$g=e((()=>{s(),L()})),e_=e((()=>{s(),L()})),t_=e((()=>{s(),L()})),n_=e((()=>{s(),L()})),r_=e((()=>{s(),L()})),i_=e((()=>{s(),L()})),a_=e((()=>{s(),L()})),o_=e((()=>{s(),L()})),s_=e((()=>{s(),L()})),c_=e((()=>{s(),L()})),l_=e((()=>{s(),L()})),u_=e((()=>{s(),L()})),d_=e((()=>{s(),L()})),f_=e((()=>{s(),L()})),p_=e((()=>{s(),L()})),m_=e((()=>{s(),L()})),h_=e((()=>{s(),L()})),g_=e((()=>{s(),L()})),__=e((()=>{s(),L()})),v_=e((()=>{s(),L()})),y_=e((()=>{s(),L()})),b_=e((()=>{s(),L()})),x_=e((()=>{s(),L()})),S_=e((()=>{s(),L()})),C_=e((()=>{s(),L()})),w_=e((()=>{s(),L()})),T_=e((()=>{s(),L()})),E_=e((()=>{s(),L()})),D_=e((()=>{s(),L()})),O_=e((()=>{s(),L()})),k_=e((()=>{s(),L()})),A_=e((()=>{s(),L()})),j_=e((()=>{s(),L()})),M_=e((()=>{s(),L()})),N_=e((()=>{s(),L()})),P_=e((()=>{s(),L()})),F_=e((()=>{s(),L()})),I_=e((()=>{s(),L()})),L_=e((()=>{s(),L()})),R_=e((()=>{s(),L()})),z_=e((()=>{s(),L()})),B_=e((()=>{s(),L()})),V_=e((()=>{s(),L()})),H_=e((()=>{s(),L()})),U_=e((()=>{s(),L()})),W_=e((()=>{s(),L()})),G_=e((()=>{s(),L()})),K_=e((()=>{s(),L()})),q_=e((()=>{s(),L()})),J_=e((()=>{s(),L()})),Y_=e((()=>{s(),L()})),X_=e((()=>{s(),L()})),Z_=e((()=>{s(),L()})),Q_=e((()=>{s(),L()})),$_=e((()=>{s(),L()})),ev=e((()=>{s(),L()})),tv=e((()=>{s(),L()})),nv=e((()=>{s(),L()})),rv=e((()=>{s(),L()})),iv=e((()=>{s(),L()})),av=e((()=>{s(),L()})),ov=e((()=>{s(),L()})),sv=e((()=>{s(),L()})),cv=e((()=>{s(),L()})),lv=e((()=>{s(),L()})),uv=e((()=>{s(),L()})),dv=e((()=>{s(),L()})),fv=e((()=>{s(),L()})),pv=e((()=>{s(),L()})),mv=e((()=>{s(),L()})),hv=e((()=>{s(),L()})),gv=e((()=>{s(),L()})),_v=e((()=>{s(),L()})),vv=e((()=>{s(),L()})),yv=e((()=>{s(),L()})),bv=e((()=>{s(),L()})),xv=e((()=>{s(),L()})),Sv=e((()=>{s(),L()})),Cv=e((()=>{s(),L()})),wv=e((()=>{s(),L()})),Tv=e((()=>{s(),L()})),Ev=e((()=>{s(),L()})),Dv=e((()=>{s(),L()})),Ov=e((()=>{s(),L()})),kv=e((()=>{s(),L()})),Av=e((()=>{s(),L()})),jv=e((()=>{s(),L()})),Mv=e((()=>{s(),L()})),Nv=e((()=>{s(),L()})),Pv=e((()=>{s(),L()})),Fv=e((()=>{s(),L()})),Iv=e((()=>{s(),L()})),Lv=e((()=>{s(),L()})),Rv=e((()=>{s(),L()})),zv=e((()=>{s(),L()})),Bv=e((()=>{s(),L()})),Vv=e((()=>{s(),L()})),Hv=e((()=>{s(),L()})),Uv=e((()=>{s(),L()})),Wv=e((()=>{s(),L()})),Gv=e((()=>{s(),L()})),Kv=e((()=>{s(),L()})),qv=e((()=>{s(),L()})),Jv=e((()=>{s(),L()})),Yv=e((()=>{s(),L()})),Xv=e((()=>{s(),L()})),Zv=e((()=>{s(),L()})),Qv=e((()=>{s(),L()})),$v=e((()=>{s(),L()})),ey=e((()=>{s(),L()})),ty=e((()=>{s(),L()})),ny=e((()=>{s(),L()})),ry=e((()=>{s(),L()})),iy=e((()=>{s(),L()})),ay=e((()=>{s(),L()})),oy=e((()=>{s(),L()})),sy=e((()=>{s(),L()})),cy=e((()=>{s(),L()})),ly=e((()=>{s(),L()})),uy=e((()=>{s(),L()})),dy=e((()=>{s(),L()})),fy=e((()=>{s(),L()})),py=e((()=>{s(),L()})),my=e((()=>{s(),L()})),hy=e((()=>{s(),L()})),gy=e((()=>{s(),L()})),_y=e((()=>{s(),L()})),vy=e((()=>{s(),L()})),yy=e((()=>{s(),L()})),by=e((()=>{s(),L()})),xy=e((()=>{s(),L()})),Sy=e((()=>{s(),L()})),Cy=e((()=>{s(),L()})),wy=e((()=>{s(),L()})),Ty=e((()=>{s(),L()})),Ey=e((()=>{s(),L()})),Dy=e((()=>{s(),L()})),Oy=e((()=>{s(),L()})),ky=e((()=>{s(),L()})),Ay=e((()=>{s(),L()})),jy=e((()=>{s(),L()})),My=e((()=>{s(),L()})),Ny=e((()=>{s(),L()})),Py=e((()=>{s(),L()})),Fy=e((()=>{s(),L()})),Iy=e((()=>{s(),L()})),Ly=e((()=>{s(),L()})),Ry=e((()=>{s(),L()})),zy=e((()=>{s(),L()})),By=e((()=>{s(),L()})),Vy=e((()=>{s(),L()})),Hy=e((()=>{s(),L()})),Uy=e((()=>{s(),L()})),Wy=e((()=>{s(),L()})),Gy=e((()=>{s(),L()})),Ky=e((()=>{s(),L()})),qy=e((()=>{s(),L()})),Jy=e((()=>{s(),L()})),Yy=e((()=>{s(),L()})),Xy=e((()=>{s(),L()})),Zy=e((()=>{s(),L()})),Qy=e((()=>{s(),L()})),$y=e((()=>{s(),L()})),eb=e((()=>{s(),L()})),tb=e((()=>{s(),L()})),nb=e((()=>{s(),L()})),rb=e((()=>{s(),L()})),ib=e((()=>{s(),L()})),ab=e((()=>{s(),L()})),ob=e((()=>{s(),L()})),sb=e((()=>{s(),L()})),cb=e((()=>{s(),L()})),lb=e((()=>{s(),L()})),ub=e((()=>{s(),L()})),db=e((()=>{s(),L()})),fb=e((()=>{s(),L()})),pb=e((()=>{s(),L()})),mb=e((()=>{s(),L()})),hb=e((()=>{s(),L()})),gb=e((()=>{s(),L()})),_b=e((()=>{s(),L()})),vb=e((()=>{s(),L()})),yb=e((()=>{s(),L()})),bb=e((()=>{s(),L()})),xb=e((()=>{s(),L()})),Sb=e((()=>{s(),L()})),Cb=e((()=>{s(),L()})),wb=e((()=>{s(),L()})),Tb=e((()=>{s(),L()})),Eb=e((()=>{s(),L()})),Db=e((()=>{s(),L()})),Ob=e((()=>{s(),L()})),kb=e((()=>{s(),L()})),Ab=e((()=>{s(),L()})),jb=e((()=>{s(),L()})),Mb=e((()=>{s(),L()})),Nb=e((()=>{s(),L()})),Pb=e((()=>{s(),L()})),Fb=e((()=>{s(),L()})),Ib=e((()=>{s(),L()})),Lb=e((()=>{s(),L()})),Rb=e((()=>{s(),L()})),zb=e((()=>{s(),L()})),Bb=e((()=>{s(),L()})),Vb=e((()=>{s(),L()})),Hb=e((()=>{s(),L()})),Ub=e((()=>{s(),L()})),Wb=e((()=>{s(),L()})),Gb=e((()=>{s(),L()})),Kb=e((()=>{s(),L()})),qb=e((()=>{s(),L()})),Jb=e((()=>{s(),L()})),Yb=e((()=>{s(),L()})),Xb=e((()=>{s(),L()})),Zb=e((()=>{s(),L()})),Qb=e((()=>{s(),L()})),$b=e((()=>{s(),L()})),ex=e((()=>{s(),L()})),tx=e((()=>{s(),L()})),nx=e((()=>{s(),L()})),rx=e((()=>{s(),L()})),ix=e((()=>{s(),L()})),ax=e((()=>{s(),L()})),ox=e((()=>{s(),L()})),sx=e((()=>{s(),L()})),cx=e((()=>{s(),L()})),lx=e((()=>{s(),L()})),ux=e((()=>{s(),L()})),dx=e((()=>{s(),L()})),fx=e((()=>{s(),L()})),px=e((()=>{s(),L()})),mx=e((()=>{s(),L()})),hx=e((()=>{s(),L()})),gx=e((()=>{s(),L()})),_x=e((()=>{s(),L()})),vx=e((()=>{s(),L()})),yx=e((()=>{s(),L()})),bx=e((()=>{s(),L()})),xx=e((()=>{s(),L()})),Sx=e((()=>{s(),L()})),Cx=e((()=>{s(),L()})),wx=e((()=>{s(),L()})),Tx=e((()=>{s(),L()})),Ex=e((()=>{s(),L()})),Dx=e((()=>{s(),L()})),Ox=e((()=>{s(),L()})),kx=e((()=>{s(),L()})),Ax=e((()=>{s(),L()})),jx=e((()=>{s(),L()})),Mx=e((()=>{s(),L()})),Nx=e((()=>{s(),L()})),Px=e((()=>{s(),L()})),Fx=e((()=>{s(),L()})),Ix=e((()=>{s(),L()})),Lx=e((()=>{s(),L()})),Rx=e((()=>{s(),L()})),zx=e((()=>{s(),L()})),Bx=e((()=>{s(),L()})),Vx=e((()=>{s(),L()})),Hx=e((()=>{s(),L()})),Ux=e((()=>{s(),L()})),Wx=e((()=>{s(),L()})),Gx=e((()=>{s(),L()})),Kx=e((()=>{s(),L()})),qx=e((()=>{s(),L()})),Jx=e((()=>{s(),L()})),Yx=e((()=>{s(),L()})),Xx=e((()=>{s(),L()})),Zx=e((()=>{s(),L()})),Qx=e((()=>{s(),L()})),$x=e((()=>{s(),L()})),eS=e((()=>{s(),L()})),tS=e((()=>{s(),L()})),nS=e((()=>{s(),L()})),rS=e((()=>{s(),L()})),iS=e((()=>{s(),L()})),aS=e((()=>{s(),L()})),oS=e((()=>{s(),L()})),sS=e((()=>{s(),L()})),cS=e((()=>{s(),L()})),lS=e((()=>{s(),L()})),uS=e((()=>{s(),L()})),dS=e((()=>{s(),L()})),fS=e((()=>{s(),L()})),pS=e((()=>{s(),L()})),mS=e((()=>{s(),L()})),hS=e((()=>{s(),L()})),gS=e((()=>{s(),L()})),_S=e((()=>{s(),L()})),vS=e((()=>{s(),L()})),yS=e((()=>{s(),L()})),bS=e((()=>{s(),L()})),xS=e((()=>{s(),L()})),SS=e((()=>{s(),L()})),CS=e((()=>{s(),L()})),wS=e((()=>{s(),L()})),TS=e((()=>{s(),L()})),ES=e((()=>{s(),L()})),DS=e((()=>{s(),L()})),OS=e((()=>{s(),L()})),kS=e((()=>{s(),L()})),AS=e((()=>{s(),L()})),jS=e((()=>{s(),L()})),MS=e((()=>{s(),L()})),NS=e((()=>{s(),L()})),PS=e((()=>{s(),L()})),FS=e((()=>{s(),L()})),IS=e((()=>{s(),L()})),LS=e((()=>{s(),L()})),RS=e((()=>{s(),L()})),zS=e((()=>{s(),L()})),BS=e((()=>{s(),L()})),VS=e((()=>{s(),L()})),HS=e((()=>{s(),L()})),US=e((()=>{s(),L()})),WS=e((()=>{s(),L()})),GS=e((()=>{s(),L()})),KS=e((()=>{s(),L()})),qS=e((()=>{s(),L()})),JS=e((()=>{s(),L()})),YS=e((()=>{s(),L()})),XS=e((()=>{s(),L()})),ZS=e((()=>{s(),L()})),QS=e((()=>{s(),L()})),$S=e((()=>{s(),L()})),eC=e((()=>{s(),L()})),tC=e((()=>{s(),L()})),nC=e((()=>{s(),L()})),rC=e((()=>{s(),L()})),iC=e((()=>{s(),L()})),aC=e((()=>{s(),L()})),oC=e((()=>{s(),L()})),sC=e((()=>{s(),L()})),cC=e((()=>{s(),L()})),lC=e((()=>{s(),L()})),uC=e((()=>{s(),L()})),dC=e((()=>{s(),L()})),fC=e((()=>{s(),L()})),pC=e((()=>{s(),L()})),mC=e((()=>{s(),L()})),hC=e((()=>{s(),L()})),gC=e((()=>{s(),L()})),_C=e((()=>{s(),L()})),vC=e((()=>{s(),L()})),yC=e((()=>{s(),L()})),bC=e((()=>{s(),L()})),xC=e((()=>{s(),L()})),SC=e((()=>{s(),L()})),CC=e((()=>{s(),L()})),wC=e((()=>{s(),L()})),TC=e((()=>{s(),L()})),EC=e((()=>{s(),L()})),DC=e((()=>{s(),L()})),OC=e((()=>{s(),L()})),kC=e((()=>{s(),L()})),AC=e((()=>{s(),L()})),jC=e((()=>{s(),L()})),MC=e((()=>{s(),L()})),NC=e((()=>{s(),L()})),PC=e((()=>{s(),L()})),FC=e((()=>{s(),L()})),IC=e((()=>{s(),L()})),LC=e((()=>{s(),L()})),RC=e((()=>{s(),L()})),zC=e((()=>{s(),L()})),BC=e((()=>{s(),L()})),VC=e((()=>{s(),L()})),HC=e((()=>{s(),L()})),UC=e((()=>{s(),L()})),WC=e((()=>{s(),L()})),GC=e((()=>{s(),L()})),KC=e((()=>{s(),L()})),qC=e((()=>{s(),L()})),JC=e((()=>{s(),L()})),YC=e((()=>{s(),L()})),XC=e((()=>{s(),L()})),ZC=e((()=>{s(),L()})),QC=e((()=>{s(),L()})),$C=e((()=>{s(),L()})),ew=e((()=>{s(),L()})),tw=e((()=>{s(),L()})),nw=e((()=>{s(),L()})),rw=e((()=>{s(),L()})),iw=e((()=>{s(),L()})),aw=e((()=>{s(),L()})),ow=e((()=>{s(),L()})),sw=e((()=>{s(),L()})),cw=e((()=>{s(),L()})),lw=e((()=>{s(),L()})),uw=e((()=>{s(),L()})),dw=e((()=>{s(),L()})),fw=e((()=>{s(),L()})),pw=e((()=>{s(),L()})),mw=e((()=>{s(),L()})),hw=e((()=>{s(),L()})),gw=e((()=>{s(),L()})),_w=e((()=>{s(),L()})),vw=e((()=>{s(),L()})),yw=e((()=>{s(),L()})),bw=e((()=>{s(),L()})),xw=e((()=>{s(),L()})),Sw=e((()=>{s(),L()})),Cw=e((()=>{s(),L()})),ww=e((()=>{s(),L()})),Tw=e((()=>{s(),L()})),Ew=e((()=>{s(),L()})),Dw=e((()=>{s(),L()})),Ow=e((()=>{s(),L()})),kw=e((()=>{s(),L()})),Aw=e((()=>{s(),L()})),jw=e((()=>{s(),L()})),Mw=e((()=>{s(),L()})),Nw=e((()=>{s(),L()})),Pw=e((()=>{s(),L()})),Fw=e((()=>{s(),L()})),Iw=e((()=>{s(),L()})),Lw=e((()=>{s(),L()})),Rw=e((()=>{s(),L()})),zw=e((()=>{s(),L()})),Bw=e((()=>{s(),L()})),Vw=e((()=>{s(),L()})),Hw=e((()=>{s(),L()})),Uw=e((()=>{s(),L()})),Ww=e((()=>{s(),L()})),Gw=e((()=>{s(),L()})),Kw=e((()=>{s(),L()})),qw=e((()=>{s(),L()})),Jw=e((()=>{s(),L()})),Yw=e((()=>{s(),L()})),Xw=e((()=>{s(),L()})),Zw=e((()=>{s(),L()})),Qw=e((()=>{s(),L()})),$w=e((()=>{s(),L()})),eT=e((()=>{s(),L()})),tT=e((()=>{s(),L()})),nT=e((()=>{s(),L()})),rT=e((()=>{s(),L()})),iT=e((()=>{s(),L()})),aT=e((()=>{s(),L()})),oT=e((()=>{s(),L()})),sT=e((()=>{s(),L()})),cT=e((()=>{s(),L()})),lT=e((()=>{s(),L()})),uT=e((()=>{s(),L()})),dT=e((()=>{s(),L()})),fT=e((()=>{s(),L()})),pT=e((()=>{s(),L()})),mT=e((()=>{s(),L()})),hT=e((()=>{s(),L()})),gT=e((()=>{s(),L()})),_T=e((()=>{s(),L()})),vT=e((()=>{s(),L()})),yT=e((()=>{s(),L()})),bT=e((()=>{s(),L()})),xT=e((()=>{s(),L()})),ST=e((()=>{s(),L()})),CT=e((()=>{s(),L()})),wT=e((()=>{s(),L()})),TT=e((()=>{s(),L()})),ET=e((()=>{s(),L()})),DT=e((()=>{s(),L()})),OT=e((()=>{s(),L()})),kT=e((()=>{s(),L()})),AT=e((()=>{s(),L()})),jT=e((()=>{s(),L()})),MT=e((()=>{s(),L()})),NT=e((()=>{s(),L()})),PT=e((()=>{s(),L()})),FT=e((()=>{s(),L()})),IT=e((()=>{Jr(),Yr(),Xr(),Zr(),Qr(),$r(),ei(),ti(),ni(),ri(),ii(),ai(),oi(),si(),ci(),li(),ui(),di(),fi(),pi(),mi(),hi(),gi(),_i(),vi(),yi(),bi(),xi(),Si(),Ci(),wi(),Ti(),Ei(),Di(),Oi(),ki(),Ai(),ji(),Mi(),Ni(),Pi(),Fi(),Ii(),Li(),Ri(),zi(),Bi(),Vi(),Hi(),Ui(),Wi(),Gi(),Ki(),qi(),Ji(),Yi(),Xi(),Zi(),Qi(),$i(),ea(),ta(),na(),ra(),ia(),aa(),oa(),sa(),ca(),la(),ua(),da(),fa(),pa(),ma(),ha(),ga(),_a(),va(),ya(),ba(),xa(),Sa(),Ca(),wa(),Ta(),Ea(),Da(),Oa(),ka(),Aa(),ja(),Ma(),Na(),Pa(),Fa(),Ia(),La(),Ra(),za(),Ba(),Va(),Ha(),Ua(),Wa(),Ga(),Ka(),qa(),Ja(),Ya(),Xa(),Za(),Qa(),$a(),eo(),to(),no(),ro(),io(),ao(),oo(),so(),co(),lo(),uo(),fo(),po(),mo(),ho(),go(),_o(),vo(),yo(),bo(),xo(),So(),Co(),wo(),To(),Eo(),Do(),Oo(),ko(),Ao(),jo(),Mo(),No(),Po(),Fo(),Io(),Lo(),Ro(),zo(),Bo(),Vo(),Ho(),Uo(),Wo(),Go(),Ko(),qo(),Jo(),Yo(),Xo(),Zo(),Qo(),$o(),es(),ts(),ns(),rs(),is(),as(),os(),ss(),cs(),ls(),us(),ds(),fs(),ps(),ms(),hs(),gs(),_s(),vs(),ys(),bs(),xs(),Ss(),Cs(),ws(),Ts(),Es(),Ds(),Os(),ks(),As(),js(),Ms(),Ns(),Ps(),Fs(),Is(),Ls(),Rs(),zs(),Bs(),Vs(),Hs(),Us(),Ws(),Gs(),Ks(),qs(),Js(),Ys(),Xs(),Zs(),Qs(),$s(),ec(),tc(),nc(),rc(),ic(),ac(),oc(),sc(),cc(),lc(),uc(),dc(),fc(),pc(),mc(),hc(),gc(),_c(),vc(),yc(),bc(),xc(),Sc(),Cc(),wc(),Tc(),Ec(),Dc(),Oc(),kc(),Ac(),jc(),Mc(),Nc(),Pc(),Fc(),Ic(),Lc(),Rc(),zc(),Bc(),Vc(),Hc(),Uc(),Wc(),Gc(),Kc(),qc(),Jc(),Yc(),Xc(),Zc(),Qc(),$c(),el(),tl(),nl(),rl(),il(),al(),ol(),sl(),cl(),ll(),ul(),dl(),fl(),pl(),ml(),hl(),gl(),_l(),vl(),yl(),bl(),xl(),Sl(),Cl(),wl(),Tl(),El(),Dl(),Ol(),kl(),Al(),jl(),Ml(),Nl(),Pl(),Fl(),Il(),Ll(),Rl(),zl(),Bl(),Vl(),Hl(),Ul(),Wl(),Gl(),Kl(),ql(),Jl(),Yl(),Xl(),Zl(),Ql(),$l(),eu(),tu(),nu(),ru(),iu(),au(),ou(),su(),cu(),lu(),uu(),du(),fu(),pu(),mu(),hu(),gu(),_u(),vu(),yu(),bu(),xu(),Su(),Cu(),wu(),Tu(),Eu(),Du(),Ou(),ku(),Au(),ju(),Mu(),Nu(),Pu(),Fu(),Iu(),Lu(),Ru(),zu(),Bu(),Vu(),Hu(),Uu(),Wu(),Gu(),Ku(),qu(),Ju(),Yu(),Xu(),Zu(),Qu(),$u(),ed(),td(),nd(),rd(),id(),ad(),od(),sd(),cd(),ld(),ud(),dd(),fd(),pd(),md(),hd(),gd(),_d(),vd(),yd(),bd(),xd(),Sd(),Cd(),wd(),Ed(),Dd(),Od(),kd(),Ad(),jd(),Md(),Nd(),Pd(),Fd(),Id(),Ld(),Rd(),zd(),Bd(),Vd(),Hd(),Ud(),Wd(),Gd(),Kd(),qd(),Jd(),Yd(),Xd(),Zd(),Qd(),$d(),ef(),tf(),nf(),rf(),af(),of(),sf(),cf(),lf(),uf(),df(),ff(),pf(),mf(),hf(),gf(),_f(),vf(),yf(),bf(),xf(),Sf(),Cf(),wf(),Tf(),Ef(),Df(),Of(),kf(),Af(),jf(),Mf(),Nf(),Pf(),Ff(),If(),Lf(),Rf(),zf(),Bf(),Vf(),Hf(),Uf(),Wf(),Gf(),Kf(),qf(),Jf(),Yf(),Xf(),Zf(),Qf(),$f(),ep(),tp(),np(),rp(),ip(),ap(),op(),sp(),cp(),lp(),up(),dp(),fp(),pp(),mp(),hp(),gp(),_p(),vp(),yp(),bp(),xp(),Sp(),Cp(),wp(),Tp(),Ep(),Dp(),Op(),kp(),Ap(),jp(),Mp(),Np(),Pp(),Fp(),Ip(),Lp(),Rp(),zp(),Bp(),Vp(),Hp(),Up(),Wp(),Gp(),Kp(),qp(),Jp(),Yp(),Xp(),Zp(),Qp(),$p(),em(),tm(),nm(),rm(),im(),am(),om(),sm(),cm(),lm(),um(),dm(),fm(),pm(),mm(),hm(),gm(),_m(),vm(),ym(),bm(),xm(),Sm(),Cm(),wm(),Tm(),Em(),Dm(),Om(),km(),Am(),jm(),Mm(),Nm(),Pm(),Fm(),Im(),Lm(),Rm(),zm(),Bm(),Vm(),Hm(),Um(),Wm(),Gm(),Km(),qm(),Jm(),Ym(),Xm(),Zm(),Qm(),$m(),eh(),th(),nh(),rh(),ih(),ah(),oh(),sh(),ch(),lh(),uh(),dh(),fh(),ph(),mh(),hh(),gh(),_h(),vh(),yh(),bh(),xh(),Sh(),Ch(),wh(),Th(),Eh(),Dh(),Oh(),kh(),Ah(),jh(),Mh(),Nh(),Ph(),Fh(),Ih(),Lh(),Rh(),zh(),Bh(),Vh(),Hh(),Uh(),Wh(),Gh(),Kh(),qh(),Jh(),Yh(),Xh(),Zh(),Qh(),$h(),eg(),tg(),ng(),rg(),ig(),ag(),og(),sg(),cg(),lg(),ug(),dg(),fg(),pg(),mg(),hg(),gg(),_g(),vg(),yg(),bg(),xg(),Sg(),Cg(),wg(),Tg(),Eg(),Dg(),Og(),kg(),Ag(),jg(),Mg(),Ng(),Pg(),Fg(),Ig(),Lg(),Rg(),zg(),Bg(),Vg(),Hg(),Ug(),Wg(),Gg(),Kg(),qg(),Jg(),Yg(),Xg(),Zg(),Qg(),$g(),e_(),t_(),n_(),r_(),i_(),a_(),o_(),s_(),c_(),l_(),u_(),d_(),f_(),p_(),m_(),h_(),g_(),__(),v_(),y_(),b_(),x_(),S_(),C_(),w_(),T_(),E_(),D_(),O_(),k_(),A_(),j_(),M_(),N_(),P_(),F_(),I_(),L_(),R_(),z_(),B_(),V_(),H_(),U_(),W_(),G_(),K_(),q_(),J_(),Y_(),X_(),Z_(),Q_(),$_(),ev(),tv(),nv(),rv(),iv(),av(),ov(),sv(),cv(),lv(),uv(),dv(),fv(),pv(),mv(),hv(),gv(),_v(),vv(),yv(),bv(),xv(),Sv(),Cv(),wv(),Tv(),Ev(),Dv(),Ov(),kv(),Av(),jv(),Mv(),Nv(),Pv(),Fv(),Iv(),Lv(),Rv(),zv(),Bv(),Vv(),Hv(),Uv(),Wv(),Gv(),Kv(),qv(),Jv(),Yv(),Xv(),Zv(),Qv(),$v(),ey(),ty(),ny(),ry(),iy(),ay(),oy(),sy(),cy(),ly(),uy(),dy(),fy(),py(),my(),hy(),gy(),_y(),vy(),yy(),by(),xy(),Sy(),Cy(),wy(),Ty(),Ey(),Dy(),Oy(),ky(),Ay(),jy(),My(),Ny(),Py(),Fy(),Iy(),Ly(),Ry(),zy(),By(),Vy(),Hy(),Uy(),Wy(),Gy(),Ky(),qy(),Jy(),Yy(),Xy(),Zy(),Qy(),$y(),eb(),tb(),nb(),rb(),ib(),ab(),ob(),sb(),cb(),lb(),ub(),db(),fb(),pb(),mb(),hb(),gb(),_b(),vb(),yb(),bb(),xb(),Sb(),Cb(),wb(),Tb(),Eb(),Db(),Ob(),kb(),Ab(),jb(),Mb(),Nb(),Pb(),Fb(),Ib(),Lb(),Rb(),zb(),Bb(),Vb(),Hb(),Ub(),Wb(),Gb(),Kb(),qb(),Jb(),Yb(),Xb(),Zb(),Qb(),$b(),ex(),tx(),nx(),rx(),ix(),ax(),ox(),sx(),cx(),lx(),ux(),dx(),fx(),px(),mx(),hx(),gx(),_x(),vx(),yx(),bx(),xx(),Sx(),Cx(),wx(),Tx(),Ex(),Dx(),Ox(),kx(),Ax(),jx(),Mx(),Nx(),Px(),Fx(),Ix(),Lx(),Rx(),zx(),Bx(),Vx(),Hx(),Ux(),Wx(),Gx(),Kx(),qx(),Jx(),Yx(),Xx(),Zx(),Qx(),$x(),eS(),tS(),nS(),rS(),iS(),aS(),oS(),sS(),cS(),lS(),uS(),dS(),fS(),pS(),mS(),hS(),gS(),_S(),vS(),yS(),bS(),xS(),SS(),CS(),wS(),TS(),ES(),DS(),OS(),kS(),AS(),jS(),MS(),NS(),PS(),FS(),IS(),LS(),RS(),zS(),BS(),VS(),HS(),US(),WS(),GS(),KS(),qS(),JS(),YS(),XS(),ZS(),QS(),$S(),eC(),tC(),nC(),rC(),iC(),aC(),oC(),sC(),cC(),lC(),uC(),dC(),fC(),pC(),mC(),hC(),gC(),_C(),vC(),yC(),bC(),xC(),SC(),CC(),wC(),TC(),EC(),DC(),OC(),kC(),AC(),jC(),MC(),NC(),PC(),FC(),IC(),LC(),RC(),zC(),BC(),VC(),HC(),UC(),WC(),GC(),KC(),qC(),JC(),YC(),XC(),ZC(),QC(),$C(),ew(),tw(),nw(),rw(),iw(),aw(),ow(),sw(),cw(),lw(),uw(),dw(),fw(),pw(),mw(),hw(),gw(),_w(),vw(),yw(),bw(),xw(),Sw(),Cw(),ww(),Tw(),Ew(),Dw(),Ow(),kw(),Aw(),jw(),Mw(),Nw(),Pw(),Fw(),Iw(),Lw(),Rw(),zw(),Bw(),Vw(),Hw(),Uw(),Ww(),Gw(),Kw(),qw(),Jw(),Yw(),Xw(),Zw(),Qw(),$w(),eT(),tT(),nT(),rT(),iT(),aT(),oT(),sT(),cT(),lT(),uT(),dT(),fT(),pT(),mT(),hT(),gT(),_T(),vT(),yT(),bT(),xT(),ST(),CT(),wT(),TT(),ET(),DT(),OT(),kT(),AT(),jT(),MT(),NT(),PT(),FT()}));function LT(e){return()=>e}var RT,zT,BT=e((()=>{RT=LT(),zT=RT})),VT,HT=e((()=>{P(),BT(),VT=rt(()=>zT),customElements.define(`cosmoz-keybinding-provider`,VT.Provider)})),UT,WT=e((()=>{P(),HT(),Or(),UT=(e,t)=>{let n=Ce(VT),r=Dr(e);O(()=>n(r),t)}})),Y=e((()=>{window.JSCompiler_renameProperty=function(e,t){return e}}));function GT(e,t){if(e&&YT.test(e)||e===`//`)return e;if(XT===void 0){XT=!1;try{let e=new URL(`b`,`http://a`);e.pathname=`c%20d`,XT=e.href===`http://a/c%20d`}catch{}}if(t||=document.baseURI||window.location.href,XT)try{return new URL(e,t).href}catch{return e}return X||(X=document.implementation.createHTMLDocument(`temp`),X.base=X.createElement(`base`),X.head.appendChild(X.base),X.anchor=X.createElement(`a`),X.body.appendChild(X.anchor)),X.base.href=t,X.anchor.href=e,X.anchor.href||e}function KT(e,t){return e.replace(JT,function(e,n,r,i){return n+`'`+GT(r.replace(/["']/g,``),t)+`'`+i})}function qT(e){return e.substring(0,e.lastIndexOf(`/`)+1)}var JT,YT,XT,X,ZT=e((()=>{Y(),JT=/(url\()([^)]*)(\))/g,YT=/(^\/[^\/])|(^#)|(^[\w-\d]*:)/})),QT,$T,eE,tE,nE,rE,iE,aE,oE,sE,cE,lE,uE,dE,fE=e((()=>{Y(),ZT(),QT=!window.ShadyDOM||!window.ShadyDOM.inUse,!window.ShadyCSS||window.ShadyCSS.nativeCss,window.customElements.polyfillWrapFlushCallback,$T=QT&&`adoptedStyleSheets`in Document.prototype&&`replaceSync`in CSSStyleSheet.prototype&&(()=>{try{let e=new CSSStyleSheet;e.replaceSync(``);let t=document.createElement(`div`);return t.attachShadow({mode:`open`}),t.shadowRoot.adoptedStyleSheets=[e],t.shadowRoot.adoptedStyleSheets[0]===e}catch{return!1}})(),eE=window.Polymer&&window.Polymer.rootPath||qT(document.baseURI||window.location.href),tE=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,window.Polymer&&window.Polymer.setPassiveTouchGestures,nE=window.Polymer&&window.Polymer.strictTemplatePolicy||!1,rE=window.Polymer&&window.Polymer.allowTemplateFromDomModule||!1,iE=window.Polymer&&window.Polymer.legacyOptimizations||!1,aE=window.Polymer&&window.Polymer.legacyWarnings||!1,oE=window.Polymer&&window.Polymer.syncInitialRender||!1,sE=window.Polymer&&window.Polymer.legacyUndefined||!1,cE=window.Polymer&&window.Polymer.orderedComputed||!1,lE=window.Polymer&&window.Polymer.removeNestedTemplates||!1,uE=window.Polymer&&window.Polymer.fastDomIf||!1,window.Polymer&&window.Polymer.suppressTemplateNotifications,window.Polymer&&window.Polymer.legacyNoObservedAttributes,dE=window.Polymer&&window.Polymer.useAdoptedStyleSheetsWithBuiltCSS||!1}));function pE(){}var mE,hE,gE=e((()=>{Y(),mE=0,pE.prototype.__mixinApplications,pE.prototype.__mixinSet,hE=function(e){let t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);let n=mE++;function r(r){let i=r.__mixinSet;if(i&&i[n])return r;let a=t,o=a.get(r);if(!o){o=e(r),a.set(r,o);let t=Object.create(o.__mixinSet||i||null);t[n]=!0,o.__mixinSet=t}return o}return r}}));function _E(e,t){bE[e]=xE[e.toLowerCase()]=t}function vE(e){return bE[e]||xE[e.toLowerCase()]}function yE(e){e.querySelector(`style`)&&console.warn(`dom-module %s has style outside template`,e.id)}var bE,xE,SE,CE=e((()=>{Y(),ZT(),fE(),bE={},xE={},SE=class extends HTMLElement{static get observedAttributes(){return[`id`]}static import(e,t){if(e){let n=vE(e);return n&&t?n.querySelector(t):n}return null}attributeChangedCallback(e,t,n,r){t!==n&&this.register()}get assetpath(){if(!this.__assetpath){let e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=GT(this.getAttribute(`assetpath`)||``,e.baseURI);this.__assetpath=qT(t)}return this.__assetpath}register(e){if(e||=this.id,e){if(nE&&vE(e)!==void 0)throw _E(e,null),Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,_E(e,this),yE(this)}}},SE.prototype.modules=bE,customElements.define(`dom-module`,SE)}));function wE(e){return SE.import(e)}function TE(e){let t=KT((e.body?e.body:e).textContent,e.baseURI),n=document.createElement(`style`);return n.textContent=t,n}function EE(e){let t=e.trim().split(/\s+/),n=[];for(let e=0;e<t.length;e++)n.push(...DE(t[e]));return n}function DE(e){let t=wE(e);if(!t)return console.warn(`Could not find style data in module named`,e),[];if(t._styles===void 0){let e=[];e.push(...AE(t));let n=t.querySelector(`template`);n&&e.push(...OE(n,t.assetpath)),t._styles=e}return t._styles}function OE(e,t){if(!e._styles){let n=[],r=e.content.querySelectorAll(`style`);for(let e=0;e<r.length;e++){let i=r[e],a=i.getAttribute(ME);a&&n.push(...EE(a).filter(function(e,t,n){return n.indexOf(e)===t})),t&&(i.textContent=KT(i.textContent,t)),n.push(i)}e._styles=n}return e._styles}function kE(e){let t=wE(e);return t?AE(t):[]}function AE(e){let t=[],n=e.querySelectorAll(jE);for(let e=0;e<n.length;e++){let r=n[e];if(r.import){let e=r.import,n=r.hasAttribute(NE);if(n&&!e._unscopedStyle){let t=TE(e);t.setAttribute(NE,``),e._unscopedStyle=t}else e._style||=TE(e);t.push(n?e._unscopedStyle:e._style)}}return t}var jE,ME,NE,PE=e((()=>{CE(),ZT(),jE=`link[rel=import][type~=css]`,ME=`include`,NE=`shady-unscoped`})),Z,FE=e((()=>{Z=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:window.ShadyDOM?e=>ShadyDOM.patch(e):e=>e}));function IE(e){return e.indexOf(`.`)>=0}function LE(e){let t=e.indexOf(`.`);return t===-1?e:e.slice(0,t)}function RE(e,t){return e.indexOf(t+`.`)===0}function zE(e,t){return t.indexOf(e+`.`)===0}function BE(e,t,n){return t+n.slice(e.length)}function VE(e){if(Array.isArray(e)){let t=[];for(let n=0;n<e.length;n++){let r=e[n].toString().split(`.`);for(let e=0;e<r.length;e++)t.push(r[e])}return t.join(`.`)}else return e}function HE(e){return Array.isArray(e)?VE(e).split(`.`):e.toString().split(`.`)}function Q(e,t,n){let r=e,i=HE(t);for(let e=0;e<i.length;e++){if(!r)return;let t=i[e];r=r[t]}return n&&(n.path=i.join(`.`)),r}function UE(e,t,n){let r=e,i=HE(t),a=i[i.length-1];if(i.length>1){for(let e=0;e<i.length-1;e++){let t=i[e];if(r=r[t],!r)return}r[a]=n}else r[t]=n;return i.join(`.`)}var WE=e((()=>{Y()}));function GE(e){return qE[e]||(qE[e]=e.indexOf(`-`)<0?e:e.replace(JE,e=>e[1].toUpperCase()))}function KE(e){return qE[e]||(qE[e]=e.replace(YE,`-$1`).toLowerCase())}var qE,JE,YE,XE=e((()=>{Y(),qE={},JE=/-[a-z]/g,YE=/([A-Z])/g}));function ZE(){nD=!1;let e=eD.length;for(let t=0;t<e;t++){let e=eD[t];if(e)try{e()}catch(e){setTimeout(()=>{throw e})}}eD.splice(0,e),$E+=e}var QE,$E,eD,tD,nD,rD,iD,aD=e((()=>{Y(),QE=0,$E=0,eD=[],tD=0,nD=!1,rD=document.createTextNode(``),new window.MutationObserver(ZE).observe(rD,{characterData:!0}),iD={run(e){return nD||(nD=!0,rD.textContent=tD++),eD.push(e),QE++},cancel(e){let t=e-$E;if(t>=0){if(!eD[t])throw Error(`invalid async handle: `+e);eD[t]=null}}}})),oD,sD,cD=e((()=>{Y(),gE(),aD(),FE(),oD=iD,sD=hE(e=>{class t extends e{static createProperties(e){let t=this.prototype;for(let n in e)n in t||t._createPropertyAccessor(n)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty(JSCompiler_renameProperty(`__dataHasAccessor`,this))||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){this.hasOwnProperty(JSCompiler_renameProperty(`__dataAttributes`,this))||(this.__dataAttributes=Object.assign({},this.__dataAttributes));let t=this.__dataAttributes[e];return t||(t=this.constructor.attributeNameForProperty(e),this.__dataAttributes[t]=e),t}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this.__data[e]},set:t?function(){}:function(t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__dataCounter=0,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,n){let r=this.__data[e],i=this._shouldPropertyChange(e,t,r);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=r),this.__data[e]=t,this.__dataPending[e]=t),i}_isPropertyPending(e){return!!(this.__dataPending&&this.__dataPending.hasOwnProperty(e))}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,oD.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&=(this._initializeInstanceProperties(this.__dataInstanceProps),null),this.ready())}_flushProperties(){this.__dataCounter++;let e=this.__data,t=this.__dataPending,n=this.__dataOld;this._shouldPropertiesChange(e,t,n)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,n)),this.__dataCounter--}_shouldPropertiesChange(e,t,n){return!!t}_propertiesChanged(e,t,n){}_shouldPropertyChange(e,t,n){return n!==t&&(n===n||t===t)}attributeChangedCallback(e,t,n,r){t!==n&&this._attributeToProperty(e,n),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,n,r)}_attributeToProperty(e,t,n){if(!this.__serializing){let r=this.__dataAttributes,i=r&&r[e]||e;this[i]=this._deserializeValue(t,n||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,n){this.__serializing=!0,n=arguments.length<3?this[e]:n,this._valueToNodeAttribute(this,n,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,n){let r=this._serializeValue(t);(n===`class`||n===`name`||n===`slot`)&&(e=Z(e)),r===void 0?e.removeAttribute(n):e.setAttribute(n,r===``&&window.trustedTypes?window.trustedTypes.emptyScript:r)}_serializeValue(e){switch(typeof e){case`boolean`:return e?``:void 0;default:return e?.toString()}}_deserializeValue(e,t){switch(t){case Boolean:return e!==null;case Number:return Number(e);default:return e}}}return t})}));function lD(e,t){if(!uD[t]){let n=e[t];n!==void 0&&(e.__data?e._setPendingProperty(t,n):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty(`__dataProto`,e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=n))}}var uD,dD,fD,pD,mD=e((()=>{for(Y(),gE(),XE(),cD(),uD={},dD=HTMLElement.prototype;dD;){let e=Object.getOwnPropertyNames(dD);for(let t=0;t<e.length;t++)uD[e[t]]=!0;dD=Object.getPrototypeOf(dD)}fD=window.trustedTypes?e=>trustedTypes.isHTML(e)||trustedTypes.isScript(e)||trustedTypes.isScriptURL(e):()=>!1,pD=hE(e=>{let t=sD(e);class n extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(GE(e[t]))}static attributeNameForProperty(e){return KE(e)}_initializeProperties(){this.__dataProto&&=(this._initializeProtoProperties(this.__dataProto),null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){let n=this;n.hasAttribute(e)||this._valueToNodeAttribute(n,t,e)}_serializeValue(e){switch(typeof e){case`object`:if(e instanceof Date)return e.toString();if(e){if(fD(e))return e;try{return JSON.stringify(e)}catch{return``}}default:return super._serializeValue(e)}}_deserializeValue(e,t){let n;switch(t){case Object:try{n=JSON.parse(e)}catch{n=e}break;case Array:try{n=JSON.parse(e)}catch{n=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:n=isNaN(e)?String(e):Number(e),n=new Date(n);break;default:n=super._deserializeValue(e,t);break}return n}_definePropertyAccessor(e,t){lD(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}return n})}));function hD(){if(!wD){wD=!0;let e=document.createElement(`textarea`);e.placeholder=`a`,TD=e.placeholder===e.textContent}return TD}function gD(e){hD()&&e.localName===`textarea`&&e.placeholder&&e.placeholder===e.textContent&&(e.textContent=null)}function _D(e){let t=e.getAttribute(`is`);if(t&&CD[t]){let n=e;for(n.removeAttribute(`is`),e=n.ownerDocument.createElement(t),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;){let{name:t}=n.attributes[0];ED(e,n,t),n.removeAttribute(t)}}return e}function vD(e,t){let n=t.parentInfo&&vD(e,t.parentInfo);if(n){for(let e=n.firstChild,r=0;e;e=e.nextSibling)if(t.parentIndex===r++)return e}else return e}function yD(e,t,n,r){r.id&&(t[r.id]=n)}function bD(e,t,n){if(n.events&&n.events.length)for(let r=0,i=n.events,a;r<i.length&&(a=i[r]);r++)e._addMethodEventListenerToNode(t,a.name,a.value,e)}function xD(e,t,n,r){n.templateInfo&&(t._templateInfo=n.templateInfo,t._parentTemplateInfo=r)}function SD(e,t,n){return e=e._methodHost||e,function(t){e[n]?e[n](t,t.detail):console.warn("listener method `"+n+"` not defined")}}var CD,wD,TD,ED,DD,OD=e((()=>{Y(),gE(),CD={"dom-if":!0,"dom-repeat":!0},wD=!1,TD=!1,ED=(()=>{let e=window.trustedTypes&&window.trustedTypes.createPolicy(`polymer-template-event-attribute-policy`,{createScript:e=>e});return(t,n,r)=>{let i=n.getAttribute(r);if(e&&r.startsWith(`on-`)){t.setAttribute(r,e.createScript(i,r));return}t.setAttribute(r,i)}})(),DD=hE(e=>{class t extends e{static _parseTemplate(e,t){if(!e._templateInfo){let n=e._templateInfo={};n.nodeInfoList=[],n.nestedTemplate=!!t,n.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute&&e.hasAttribute(`strip-whitespace`),this._parseTemplateContent(e,n,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,n){return this._parseTemplateNode(e.content,t,n)}static _parseTemplateNode(e,t,n){let r=!1,i=e;return i.localName==`template`&&!i.hasAttribute(`preserve-content`)?r=this._parseTemplateNestedTemplate(i,t,n)||r:i.localName===`slot`&&(t.hasInsertionPoint=!0),gD(i),i.firstChild&&this._parseTemplateChildNodes(i,t,n),i.hasAttributes&&i.hasAttributes()&&(r=this._parseTemplateNodeAttributes(i,t,n)||r),r||n.noted}static _parseTemplateChildNodes(e,t,n){if(!(e.localName===`script`||e.localName===`style`))for(let r=e.firstChild,i=0,a;r;r=a){if(r.localName==`template`&&(r=_D(r)),a=r.nextSibling,r.nodeType===Node.TEXT_NODE){let n=a;for(;n&&n.nodeType===Node.TEXT_NODE;)r.textContent+=n.textContent,a=n.nextSibling,e.removeChild(n),n=a;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:i,parentInfo:n};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&i++}}static _parseTemplateNestedTemplate(e,t,n){let r=e,i=this._parseTemplate(r,t);return(i.content=r.content.ownerDocument.createDocumentFragment()).appendChild(r.content),n.templateInfo=i,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,i=Array.from(e.attributes);for(let a=i.length-1,o;o=i[a];a--)r=this._parseTemplateNodeAttribute(e,t,n,o.name,o.value)||r;return r}static _parseTemplateNodeAttribute(e,t,n,r,i){return r.slice(0,3)===`on-`?(e.removeAttribute(r),n.events=n.events||[],n.events.push({name:r.slice(3),value:i}),!0):r===`id`?(n.id=i,!0):!1}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e,t){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e),t||=this.constructor._parseTemplate(e);let n=t.nodeInfoList,r=t.content||e.content,i=document.importNode(r,!0);i.__noInsertionPoint=!t.hasInsertionPoint;let a=i.nodeList=Array(n.length);i.$={};for(let e=0,r=n.length,o;e<r&&(o=n[e]);e++){let n=a[e]=vD(i,o);yD(this,i.$,n,o),xD(this,n,o,t),bD(this,n,o)}return i=i,i}_addMethodEventListenerToNode(e,t,n,r){r||=e;let i=SD(r,t,n);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,n){e.addEventListener(t,n)}_removeEventListenerFromNode(e,t,n){e.removeEventListener(t,n)}}return t})}));function kD(e,t,n){let r=e[t];if(!r)r=e[t]={};else if(!e.hasOwnProperty(t)&&(r=e[t]=Object.create(e[t]),n))for(let e in r){let t=r[e],n=r[e]=Array(t.length);for(let e=0;e<t.length;e++)n[e]=t[e]}return r}function AD(e,t,n,r,i,a){if(t){let o=!1,s=uO++;for(let c in n){let l=t[i?LE(c):c];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==s)&&(!i||MD(c,d.trigger))&&(d.info&&(d.info.lastRun=s),d.fn(e,c,n,r,d.info,i,a),o=!0)}return o}return!1}function jD(e,t,n,r,i,a,o,s){let c=!1,l=t[o?LE(r):r];if(l)for(let t=0,u=l.length,d;t<u&&(d=l[t]);t++)(!d.info||d.info.lastRun!==n)&&(!o||MD(r,d.trigger))&&(d.info&&(d.info.lastRun=n),d.fn(e,r,i,a,d.info,o,s),c=!0);return c}function MD(e,t){if(t){let n=t.name;return n==e||!!(t.structured&&RE(n,e))||!!(t.wildcard&&zE(n,e))}else return!0}function ND(e,t,n,r,i){let a=typeof i.method==`string`?e[i.method]:i.method,o=i.property;a?a.call(e,e.__data[o],r[o]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function PD(e,t,n,r,i){let a=e[$.NOTIFY],o,s=uO++;for(let c in t)t[c]&&(a&&jD(e,a,s,c,n,r,i)||i&&FD(e,c,n))&&(o=!0);let c;o&&(c=e.__dataHost)&&c._invalidateProperties&&c._invalidateProperties()}function FD(e,t,n){let r=LE(t);return r===t?!1:(ID(e,KE(r)+`-changed`,n[t],t),!0)}function ID(e,t,n,r){let i={value:n,queueProperty:!0};r&&(i.path=r),Z(e).dispatchEvent(new CustomEvent(t,{detail:i}))}function LD(e,t,n,r,i,a){let o=(a?LE(t):t)==t?null:t,s=o?Q(e,o):e.__data[t];o&&s===void 0&&(s=n[t]),ID(e,i.eventName,s,o)}function RD(e,t,n,r,i){let a,o=e.detail,s=o&&o.path;s?(r=BE(n,r,s),a=o&&o.value):a=e.currentTarget[n],a=i?!a:a,(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingPropertyOrPath(r,a,!0,!!s)&&(!o||!o.queueProperty)&&t._invalidateProperties()}function zD(e,t,n,r,i){let a=e.__data[t];tE&&(a=tE(a,i.attrName,`attribute`,e)),e._propertyToAttribute(t,i.attrName,a)}function BD(e,t,n,r){let i=e[$.COMPUTE];if(i)if(cE){uO++;let a=VD(e),o=[];for(let e in t)hO(e,i,o,a,r);let s;for(;s=o.shift();)UD(e,``,t,n,s)&&hO(s.methodInfo,i,o,a,r);Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),e.__dataPending=null}else{let a=t;for(;AD(e,i,a,n,r);)Object.assign(n,e.__dataOld),Object.assign(t,e.__dataPending),a=e.__dataPending,e.__dataPending=null}}function VD(e){let t=e.constructor.__orderedComputedDeps;if(!t){t=new Map;let n=e[$.COMPUTE],{counts:r,ready:i,total:a}=HD(e),o;for(;o=i.shift();){t.set(o,t.size);let e=n[o];e&&e.forEach(e=>{let t=e.info.methodInfo;--a,--r[t]===0&&i.push(t)})}a!==0&&console.warn(`Computed graph for ${e.localName} incomplete; circular?`),e.constructor.__orderedComputedDeps=t}return t}function HD(e){let t=e[fO],n={},r=e[$.COMPUTE],i=[],a=0;for(let e in t){let r=t[e];a+=n[e]=r.args.filter(e=>!e.literal).length+ +!!r.dynamicFn}for(let e in r)t[e]||i.push(e);return{counts:n,ready:i,total:a}}function UD(e,t,n,r,i){let a=tO(e,t,n,r,i);if(a===dO)return!1;let o=i.methodInfo;return e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,a,!0):(e[o]=a,!1)}function WD(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let a in r){let o=r[a];zE(a,t)?(i=BE(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0)):zE(o,t)&&(i=BE(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function GD(e,t,n,r,i,a,o){n.bindings=n.bindings||[];let s={kind:r,target:i,parts:a,literal:o,isCompound:a.length!==1};if(n.bindings.push(s),XD(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||KE(i)+`-changed`,s.listenerNegate=t}let c=t.nodeInfoList.length;for(let n=0;n<s.parts.length;n++){let r=s.parts[n];r.compoundIndex=n,KD(e,t,s,r,c)}}function KD(e,t,n,r,i){if(!r.literal)if(n.kind===`attribute`&&n.target[0]===`-`)console.warn(`Cannot set attribute `+n.target+` because "-" is not a valid attribute starting character`);else{let a=r.dependencies,o={index:i,binding:n,part:r,evaluator:e};for(let n=0;n<a.length;n++){let r=a[n];typeof r==`string`&&(r=aO(r),r.wildcard=!0),e._addTemplatePropertyEffect(t,r.rootProperty,{fn:qD,info:o,trigger:r})}}}function qD(e,t,n,r,i,a,o){let s=o[i.index],c=i.binding,l=i.part;if(a&&l.source&&t.length>l.source.length&&c.kind==`property`&&!c.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[c.target]){let r=n[t];t=BE(l.source,c.target,t),s._setPendingPropertyOrPath(t,r,!1,!0)&&e._enqueueClient(s)}else{let o=i.evaluator._evaluateBinding(e,l,t,n,r,a);o!==dO&&JD(e,s,c,l,o)}}function JD(e,t,n,r,i){if(i=YD(t,i,n,r),tE&&(i=tE(i,n.target,n.kind,t)),n.kind==`attribute`)e._valueToNodeAttribute(t,i,n.target);else{let r=n.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[r]?(!t[$.READ_ONLY]||!t[$.READ_ONLY][r])&&t._setPendingProperty(r,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,r,i)}}function YD(e,t,n,r){if(n.isCompound){let i=e.__dataCompoundStorage[n.target];i[r.compoundIndex]=t,t=i.join(``)}return n.kind!==`attribute`&&(n.target===`textContent`||n.target===`value`&&(e.localName===`input`||e.localName===`textarea`))&&(t??=``),t}function XD(e){return!!e.target&&e.kind!=`attribute`&&e.kind!=`text`&&!e.isCompound&&e.parts[0].mode===`{`}function ZD(e,t){let{nodeList:n,nodeInfoList:r}=t;if(r.length)for(let t=0;t<r.length;t++){let i=r[t],a=n[t],o=i.bindings;if(o)for(let t=0;t<o.length;t++){let n=o[t];QD(a,n),$D(a,e,n)}a.__dataHost=e}}function QD(e,t){if(t.isCompound){let n=e.__dataCompoundStorage||={},r=t.parts,i=Array(r.length);for(let e=0;e<r.length;e++)i[e]=r[e].literal;let a=t.target;n[a]=i,t.literal&&t.kind==`property`&&(a===`className`&&(e=Z(e)),e[a]=t.literal)}}function $D(e,t,n){if(n.listenerEvent){let r=n.parts[0];e.addEventListener(n.listenerEvent,function(e){RD(e,t,n.target,r.source,r.negate)})}}function eO(e,t,n,r,i,a){a=t.static||a&&(typeof a!=`object`||a[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:a};for(let i=0,a;i<t.args.length&&(a=t.args[i]);i++)a.literal||e._addPropertyEffect(a.rootProperty,n,{fn:r,info:o,trigger:a});return a&&e._addPropertyEffect(t.methodName,n,{fn:r,info:o}),o}function tO(e,t,n,r,i){let a=e._methodHost||e,o=a[i.methodName];if(o){let r=e._marshalArgs(i.args,t,n);return r===dO?dO:o.apply(a,r)}else i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}function nO(e){let t=``;for(let n=0;n<e.length;n++){let r=e[n].literal;t+=r||``}return t}function rO(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e={methodName:t[1],static:!0,args:gO};return t[2].trim()?iO(t[2].replace(/\\,/g,`&comma;`).split(`,`),e):e}return null}function iO(e,t){return t.args=e.map(function(e){let n=aO(e);return n.literal||(t.static=!1),n},this),t}function aO(e){let t=e.trim().replace(/&comma;/g,`,`).replace(/\\(.)/g,`$1`),n={name:t,value:``,literal:!1},r=t[0];switch(r===`-`&&(r=t[1]),r>=`0`&&r<=`9`&&(r=`#`),r){case`'`:case`"`:n.value=t.slice(1,-1),n.literal=!0;break;case`#`:n.value=Number(t),n.literal=!0;break}return n.literal||(n.rootProperty=LE(t),n.structured=IE(t),n.structured&&(n.wildcard=t.slice(-2)==`.*`,n.wildcard&&(n.name=t.slice(0,-2)))),n}function oO(e,t,n){let r=Q(e,n);return r===void 0&&(r=t[n]),r}function sO(e,t,n,r){let i={indexSplices:r};sE&&!e._overrideLegacyUndefined&&(t.splices=i),e.notifyPath(n+`.splices`,i),e.notifyPath(n+`.length`,t.length),sE&&!e._overrideLegacyUndefined&&(i.indexSplices=[])}function cO(e,t,n,r,i,a){sO(e,t,n,[{index:r,addedCount:i,removed:a,object:t,type:`splice`}])}function lO(e){return e[0].toUpperCase()+e.substring(1)}var uO,dO,$,fO,pO,mO,hO,gO,_O,vO,yO,bO=e((()=>{Y(),FE(),gE(),WE(),XE(),mD(),OD(),fE(),uO=0,dO=[],$={COMPUTE:`__computeEffects`,REFLECT:`__reflectEffects`,NOTIFY:`__notifyEffects`,PROPAGATE:`__propagateEffects`,OBSERVE:`__observeEffects`,READ_ONLY:`__readOnly`},fO=`__computeInfo`,pO=/[A-Z]/,mO=(e,t,n)=>{let r=0,i=t.length-1,a=-1;for(;r<=i;){let o=r+i>>1,s=n.get(t[o].methodInfo)-n.get(e.methodInfo);if(s<0)r=o+1;else if(s>0)i=o-1;else{a=o;break}}a<0&&(a=i+1),t.splice(a,0,e)},hO=(e,t,n,r,i)=>{let a=t[i?LE(e):e];if(a)for(let t=0;t<a.length;t++){let o=a[t];o.info.lastRun!==uO&&(!i||MD(e,o.trigger))&&(o.info.lastRun=uO,mO(o.info,n,r))}},gO=[],_O=RegExp(`(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:"(?:[^"\\\\]|\\\\.)*")))\\s*))*)?)\\)\\s*)?)(?:]]|}})`,`g`),vO=hE(e=>{let t=DD(pD(e));class n extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__computeInfo,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo,this._overrideLegacyUndefined}get PROPERTY_EFFECT_TYPES(){return $}_initializeProperties(){super._initializeProperties(),this._registerHost(),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_registerHost(){if(yO.length){let e=yO[yO.length-1];e._enqueueClient(this),this.__dataHost=e}}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[$.READ_ONLY];for(let n in e)(!t||!t[n])&&(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[n]=this.__dataPending[n]=e[n])}_addPropertyEffect(e,t,n){this._createPropertyAccessor(e,t==$.READ_ONLY);let r=kD(this,t,!0)[e];r||=this[t][e]=[],r.push(n)}_removePropertyEffect(e,t,n){let r=kD(this,t,!0)[e],i=r.indexOf(n);i>=0&&r.splice(i,1)}_hasPropertyEffect(e,t){let n=this[t];return!!(n&&n[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,$.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,$.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,$.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,$.COMPUTE)}_setPendingPropertyOrPath(e,t,n,r){if(r||LE(Array.isArray(e)?e[0]:e)!==e){if(!r){let n=Q(this,e);if(e=UE(this,e,t),!e||!super._shouldPropertyChange(e,t,n))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,n))return WD(this,e,t),!0}else if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,n);else this[e]=t;return!1}_setUnmanagedPropertyToNode(e,t,n){(n!==e[t]||typeof n==`object`)&&(t===`className`&&(e=Z(e)),e[t]=n)}_setPendingProperty(e,t,n){let r=this.__dataHasPaths&&IE(e),i=r?this.__dataTemp:this.__data;return this._shouldPropertyChange(e,t,i[e])?(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),r?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(r||this[$.NOTIFY]&&this[$.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=n),!0):!1}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0;t<e.length;t++){let n=e[t];n.__dataEnabled?n.__dataPending&&n._flushProperties():n._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let n in e)(t||!this[$.READ_ONLY]||!this[$.READ_ONLY][n])&&this._setPendingPropertyOrPath(n,e[n],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,n){let r=this.__dataHasPaths;this.__dataHasPaths=!1;let i;BD(this,t,n,r),i=this.__dataToNotify,this.__dataToNotify=null,this._propagatePropertyChanges(t,n,r),this._flushClients(),AD(this,this[$.REFLECT],t,n,r),AD(this,this[$.OBSERVE],t,n,r),i&&PD(this,i,t,n,r),this.__dataCounter==1&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,n){this[$.PROPAGATE]&&AD(this,this[$.PROPAGATE],e,t,n),this.__templateInfo&&this._runEffectsForTemplate(this.__templateInfo,e,t,n)}_runEffectsForTemplate(e,t,n,r){let i=(t,r)=>{AD(this,e.propertyEffects,t,n,r,e.nodeList);for(let i=e.firstChild;i;i=i.nextSibling)this._runEffectsForTemplate(i,t,n,r)};e.runEffects?e.runEffects(i,t,r):i(t,r)}linkPaths(e,t){e=VE(e),t=VE(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=VE(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let n={path:``},r=Q(this,e,n);sO(this,r,n.path,t)}get(e,t){return Q(t||this,e)}set(e,t,n){n?UE(n,e,t):(!this[$.READ_ONLY]||!this[$.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let n={path:``},r=Q(this,e,n),i=r.length,a=r.push(...t);return t.length&&cO(this,r,n.path,i,t.length,[]),a}pop(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.pop();return r&&cO(this,n,t.path,n.length,0,[i]),i}splice(e,t,n,...r){let i={path:``},a=Q(this,e,i);t<0?t=a.length-Math.floor(-t):t&&=Math.floor(t);let o;return o=arguments.length===2?a.splice(t):a.splice(t,n,...r),(r.length||o.length)&&cO(this,a,i.path,t,r.length,o),o}shift(e){let t={path:``},n=Q(this,e,t),r=!!n.length,i=n.shift();return r&&cO(this,n,t.path,0,0,[i]),i}unshift(e,...t){let n={path:``},r=Q(this,e,n),i=r.unshift(...t);return t.length&&cO(this,r,n.path,0,t.length,[]),i}notifyPath(e,t){let n;if(arguments.length==1){let r={path:``};t=Q(this,e,r),n=r.path}else n=Array.isArray(e)?VE(e):e;this._setPendingPropertyOrPath(n,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,$.READ_ONLY),t&&(this[`_set`+lO(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,n){let r={property:e,method:t,dynamicFn:!!n};this._addPropertyEffect(e,$.OBSERVE,{fn:ND,info:r,trigger:{name:e}}),n&&this._addPropertyEffect(t,$.OBSERVE,{fn:ND,info:r,trigger:{name:t}})}_createMethodObserver(e,t){let n=rO(e);if(!n)throw Error(`Malformed observer expression '`+e+`'`);eO(this,n,$.OBSERVE,tO,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,$.NOTIFY,{fn:LD,info:{eventName:KE(e)+`-changed`,property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);t[0]===`-`?console.warn(`Property `+e+` cannot be reflected to attribute `+t+` because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.`):this._addPropertyEffect(e,$.REFLECT,{fn:zD,info:{attrName:t}})}_createComputedProperty(e,t,n){let r=rO(t);if(!r)throw Error(`Malformed computed expression '`+t+`'`);let i=eO(this,r,$.COMPUTE,UD,e,n);kD(this,fO)[e]=i}_marshalArgs(e,t,n){let r=this.__data,i=[];for(let a=0,o=e.length;a<o;a++){let{name:o,structured:s,wildcard:c,value:l,literal:u}=e[a];if(!u)if(c){let e=zE(o,t),i=oO(r,n,e?t:o);l={path:e?t:o,value:i,base:e?Q(r,o):i}}else l=s?oO(r,n,o):r[o];if(sE&&!this._overrideLegacyUndefined&&l===void 0&&e.length>1)return dO;i[a]=l}return i}static addPropertyEffect(e,t,n){this.prototype._addPropertyEffect(e,t,n)}static createPropertyObserver(e,t,n){this.prototype._createPropertyObserver(e,t,n)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,n){this.prototype._createComputedProperty(e,t,n)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let n=this.constructor._parseTemplate(e),r=this.__preBoundTemplateInfo==n;if(!r)for(let e in n.propertyEffects)this._createPropertyAccessor(e);if(t)if(n=Object.create(n),n.wasPreBound=r,!this.__templateInfo)this.__templateInfo=n;else{let t=e._parentTemplateInfo||this.__templateInfo,r=t.lastChild;n.parent=t,t.lastChild=n,n.previousSibling=r,r?r.nextSibling=n:t.firstChild=n}else this.__preBoundTemplateInfo=n;return n}static _addTemplatePropertyEffect(e,t,n){let r=e.hostProps=e.hostProps||{};r[t]=!0;let i=e.propertyEffects=e.propertyEffects||{};(i[t]=i[t]||[]).push(n)}_stampTemplate(e,t){t||=this._bindTemplate(e,!0),yO.push(this);let n=super._stampTemplate(e,t);if(yO.pop(),t.nodeList=n.nodeList,!t.wasPreBound){let e=t.childNodes=[];for(let t=n.firstChild;t;t=t.nextSibling)e.push(t)}return n.templateInfo=t,ZD(this,t),this.__dataClientsReady&&(this._runEffectsForTemplate(t,this.__data,null,!1),this._flushClients()),n}_removeBoundDom(e){let t=e.templateInfo,{previousSibling:n,nextSibling:r,parent:i}=t;n?n.nextSibling=r:i&&(i.firstChild=r),r?r.previousSibling=n:i&&(i.lastChild=n),t.nextSibling=t.previousSibling=null;let a=t.childNodes;for(let e=0;e<a.length;e++){let t=a[e];Z(Z(t).parentNode).removeChild(t)}}static _parseTemplateNode(e,n,r){let i=t._parseTemplateNode.call(this,e,n,r);if(e.nodeType===Node.TEXT_NODE){let t=this._parseBindings(e.textContent,n);t&&(e.textContent=nO(t)||` `,GD(this,n,r,`text`,`textContent`,t),i=!0)}return i}static _parseTemplateNodeAttribute(e,n,r,i,a){let o=this._parseBindings(a,n);if(o){let t=i,a=`property`;pO.test(i)?a=`attribute`:i[i.length-1]==`$`&&(i=i.slice(0,-1),a=`attribute`);let s=nO(o);return s&&a==`attribute`&&(i==`class`&&e.hasAttribute(`class`)&&(s+=` `+e.getAttribute(i)),e.setAttribute(i,s)),a==`attribute`&&t==`disable-upgrade$`&&e.setAttribute(i,``),e.localName===`input`&&t===`value`&&e.setAttribute(t,``),e.removeAttribute(t),a===`property`&&(i=GE(i)),GD(this,n,r,a,i,o,s),!0}else return t._parseTemplateNodeAttribute.call(this,e,n,r,i,a)}static _parseTemplateNestedTemplate(e,n,r){let i=t._parseTemplateNestedTemplate.call(this,e,n,r),a=e.parentNode,o=r.templateInfo,s=a.localName===`dom-if`,c=a.localName===`dom-repeat`;lE&&(s||c)&&(a.removeChild(e),r=r.parentInfo,r.templateInfo=o,r.noted=!0,i=!1);let l=o.hostProps;if(uE&&s)l&&(n.hostProps=Object.assign(n.hostProps||{},l),lE||(r.parentInfo.noted=!0));else for(let e in l){let t=[{mode:`{`,source:e,dependencies:[e],hostProp:!0}];GD(this,n,r,`property`,`_host_`+e,t)}return i}static _parseBindings(e,t){let n=[],r=0,i;for(;(i=_O.exec(e))!==null;){i.index>r&&n.push({literal:e.slice(r,i.index)});let a=i[1][0],o=!!i[2],s=i[3].trim(),c=!1,l=``,u=-1;a==`{`&&(u=s.indexOf(`::`))>0&&(l=s.substring(u+2),s=s.substring(0,u),c=!0);let d=rO(s),f=[];if(d){let{args:e,methodName:n}=d;for(let t=0;t<e.length;t++){let n=e[t];n.literal||f.push(n)}let r=t.dynamicFns;(r&&r[n]||d.static)&&(f.push(n),d.dynamicFn=!0)}else f.push(s);n.push({source:s,mode:a,negate:o,customEvent:c,signature:d,dependencies:f,event:l}),r=_O.lastIndex}if(r&&r<e.length){let t=e.substring(r);t&&n.push({literal:t})}return n.length?n:null}static _evaluateBinding(e,t,n,r,i,a){let o;return o=t.signature?tO(e,n,r,i,t.signature):n==t.source?a&&IE(n)?Q(e,n):e.__data[n]:Q(e,t.source),t.negate&&(o=!o),o}}return n}),yO=[]}));function xO(){CO++}function SO(e){wO.push(e)}var CO,wO,TO=e((()=>{CO=0,wO=[]}));function EO(e){let t={};for(let n in e){let r=e[n];t[n]=typeof r==`function`?{type:r}:r}return t}var DO,OO=e((()=>{Y(),gE(),TO(),cD(),DO=hE(e=>{let t=sD(e);function n(e){let t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function r(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__ownProperties`,e))){let t=null;if(e.hasOwnProperty(JSCompiler_renameProperty(`properties`,e))){let n=e.properties;n&&(t=EO(n))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__observedAttributes`,this))){SO(this.prototype);let e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.prototype._addPropertyToAttributeMap(e)):[]}return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__finalized`,this))){let e=n(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){let e=r(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`__properties`,this))){let e=n(this);this.__properties=Object.assign({},e&&e._properties,r(this))}return this.__properties}static typeForProperty(e){let t=this._properties[e];return t&&t.type}_initializeProperties(){xO(),this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i})})),kO,AO,jO,MO=e((()=>{Y(),fE(),gE(),PE(),ZT(),CE(),bO(),OO(),FE(),kO=`3.5.2`,AO=window.ShadyCSS&&window.ShadyCSS.cssBuild,jO=hE(e=>{let t=DO(vO(e));function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty(`__propertyDefaults`,e))){e.__propertyDefaults=null;let t=e._properties;for(let n in t){let r=t[n];`value`in r&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[n]=r)}}return e.__propertyDefaults}function r(e){return e.hasOwnProperty(JSCompiler_renameProperty(`__ownObservers`,e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty(`observers`,e))?e.observers:null),e.__ownObservers}function i(e,t,n,r){n.computed&&(n.readOnly=!0),n.computed&&(e._hasReadOnlyEffect(t)?console.warn(`Cannot redefine computed property '${t}'.`):e._createComputedProperty(t,n.computed,r)),n.readOnly&&!e._hasReadOnlyEffect(t)?e._createReadOnlyProperty(t,!n.computed):n.readOnly===!1&&e._hasReadOnlyEffect(t)&&console.warn(`Cannot make readOnly property '${t}' non-readOnly.`),n.reflectToAttribute&&!e._hasReflectEffect(t)?e._createReflectedProperty(t):n.reflectToAttribute===!1&&e._hasReflectEffect(t)&&console.warn(`Cannot make reflected property '${t}' non-reflected.`),n.notify&&!e._hasNotifyEffect(t)?e._createNotifyingProperty(t):n.notify===!1&&e._hasNotifyEffect(t)&&console.warn(`Cannot make notify property '${t}' non-notify.`),n.observer&&e._createPropertyObserver(t,n.observer,r[n.observer]),e._addPropertyToAttributeMap(t)}function a(e,t,n,r){if(!AO){let i=t.content.querySelectorAll(`style`),a=OE(t),o=kE(n),s=t.content.firstElementChild;for(let n=0;n<o.length;n++){let i=o[n];i.textContent=e._processStyleText(i.textContent,r),t.content.insertBefore(i,s)}let c=0;for(let t=0;t<a.length;t++){let n=a[t],o=i[c];o===n?c++:(n=n.cloneNode(!0),o.parentNode.insertBefore(n,o)),n.textContent=e._processStyleText(n.textContent,r)}}if(window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,n),dE&&AO&&$T){let n=t.content.querySelectorAll(`style`);if(n){let t=``;Array.from(n).forEach(e=>{t+=e.textContent,e.parentNode.removeChild(e)}),e._styleSheet=new CSSStyleSheet,e._styleSheet.replaceSync(t)}}}function o(e){let t=null;if(e&&(!nE||rE)&&(t=SE.import(e,`template`),nE&&!t))throw Error(`strictTemplatePolicy: expecting dom-module or null template for ${e}`);return t}class s extends t{static get polymerElementVersion(){return kO}static _finalizeClass(){t._finalizeClass.call(this);let e=r(this);e&&this.createObservers(e,this._properties),this._prepareTemplate()}static _prepareTemplate(){let e=this.template;e&&(typeof e==`string`?(console.error(`template getter must return HTMLTemplateElement`),e=null):iE||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(let t in e)i(this.prototype,t,e[t],e)}static createObservers(e,t){let n=this.prototype;for(let r=0;r<e.length;r++)n._createMethodObserver(e[r],t)}static get template(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_template`,this))){let e=this.prototype.hasOwnProperty(JSCompiler_renameProperty(`_template`,this.prototype))?this.prototype._template:void 0;typeof e==`function`&&(e=e()),this._template=e===void 0?this.hasOwnProperty(JSCompiler_renameProperty(`is`,this))&&o(this.is)||Object.getPrototypeOf(this.prototype).constructor.template:e}return this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty(`_importPath`,this))){let e=this.importMeta;if(e)this._importPath=qT(e.url);else{let e=SE.import(this.is);this._importPath=e&&e.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=eE,this.importPath=this.constructor.importPath;let e=n(this.constructor);if(e)for(let t in e){let n=e[t];if(this._canApplyPropertyDefault(t)){let e=typeof n.value==`function`?n.value.call(this):n.value;this._hasAccessor(t)?this._setPendingProperty(t,e,!0):this[t]=e}}}_canApplyPropertyDefault(e){return!this.hasOwnProperty(e)}static _processStyleText(e,t){return KT(e,t)}static _finalizeTemplate(e){let t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;let n=this.importPath,r=n?GT(n):``;a(this,t,e,r),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){let t=Z(this);if(t.attachShadow)return e?(t.shadowRoot||(t.attachShadow({mode:`open`,shadyUpgradeFragment:e}),t.shadowRoot.appendChild(e),this.constructor._styleSheet&&(t.shadowRoot.adoptedStyleSheets=[this.constructor._styleSheet])),oE&&window.ShadyDOM&&window.ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=GT(this.importPath)),GT(e,t)}static _parseTemplateContent(e,n,r){return n.dynamicFns=n.dynamicFns||this._properties,t._parseTemplateContent.call(this,e,n,r)}static _addTemplatePropertyEffect(e,n,r){return aE&&!(n in this._properties)&&!(r.info.part.signature&&r.info.part.signature.static)&&!r.info.part.hostProp&&!e.nestedTemplate&&console.warn(`Property '${n}' used in template but not declared in 'properties'; attribute will not be observed.`),t._addTemplatePropertyEffect.call(this,e,n,r)}}return s})}));function NO(e){if(e instanceof IO)return e.value;throw Error(`non-literal value passed to Polymer's htmlLiteral function: ${e}`)}function PO(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof IO)return NO(e);throw Error(`non-template value passed to Polymer's html function: ${e}`)}var FO,IO,LO,RO,zO=e((()=>{Y(),FO=window.trustedTypes&&trustedTypes.createPolicy(`polymer-html-literal`,{createHTML:e=>e}),IO=class{constructor(e,t){RO(e,t);let n=t.reduce((t,n,r)=>t+NO(n)+e[r+1],e[0]);this.value=n.toString()}toString(){return this.value}},LO=function(e,...t){RO(e,t);let n=document.createElement(`template`),r=t.reduce((t,n,r)=>t+PO(n)+e[r+1],e[0]);return FO&&(r=FO.createHTML(r)),n.innerHTML=r,n},RO=(e,t)=>{if(!Array.isArray(e)||!Array.isArray(e.raw)||t.length!==e.length-1)throw TypeError(`Invalid call to the html template tag`)}})),BO=e((()=>{MO(),zO(),jO(HTMLElement)})),VO,HO,UO,WO,GO,KO,qO,JO,YO,XO,ZO,QO,$O,ek,tk,nk=e((()=>{Pt(),qr(),IT(),WT(),P(),BO(),s(),VO=`bottom-bar-toolbar`,HO=`bottom-bar-menu`,UO=w`
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
		gap: 0.58em;
	}

	#info {
		min-width: 5px;
		padding-right: 3%;
		margin-right: auto;
		white-space: nowrap;
	}

	#dropdown::part(content) {
		max-width: 300px;
	}

	#bottomBarMenu::slotted([variant]) {
		padding: 0;
		background: none;
	}

	#dropdown::part(button) {
		cursor: pointer;
		transition: background-color 0.15s ease, box-shadow 0.15s ease;
		border: none;
		width: var(--cz-control-height-md);
		height: var(--cz-control-height-md);
		border-radius: var(--cz-radius-md);
		background-color: var(--cz-color-bg-brand-solid);
		color: var(--cz-color-text-on-brand);
		box-shadow: var(--cz-shadow-xs);
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
`,WO=Symbol(`openMenu`),GO=e=>{let t=e.shadowRoot?.querySelector(`#dropdown`);!t||t.hasAttribute(`hidden`)||((t.shadowRoot?.querySelector(`cosmoz-dropdown`))?.shadowRoot?.querySelector(`#dropdownButton`))?.click()},KO=e=>e.nodeType===Node.ELEMENT_NODE&&e.getAttribute(`slot`)!==`info`&&e.tagName!==`TEMPLATE`&&e.tagName!==`STYLE`&&e.tagName!==`DOM-REPEAT`&&e.tagName!==`DOM-IF`&&e.getAttribute(`slot`)!==`extra`,qO=e=>{let t=[...e.childNodes],n=[];for(let e of t)if(e.tagName===`SLOT`){let t=e.assignedElements({flatten:!0});n.push(...t)}else n.push(e);return n},JO=e=>{let t=qO(e).filter(KO).filter(e=>!e.hidden).sort((e,t)=>(Number(e.dataset.index)||0)-(Number(t.dataset.index)||0));if(t.length===0)return t;let n=t.reduce((e,t)=>parseInt(e.dataset.priority??`0`,10)>=parseInt(t.dataset.priority??`0`,10)?e:t,{dataset:{priority:`-1000`}});return[n,...t.filter(e=>e!==n)]},YO={variant:`tertiary`,size:`sm`},XO=new WeakMap,ZO=e=>e.constructor.observedAttributes?.includes(`variant`)??!1,QO=(e,t,n,r)=>{let i=t?VO:HO;if(e.setAttribute(`slot`,i),e.setAttribute(`tabindex`,`0`),ZO(e)){XO.has(e)||XO.set(e,{variant:e.getAttribute(`variant`),size:e.getAttribute(`size`)});let n=t?XO.get(e):YO;Object.entries(n).forEach(([t,n])=>n==null?e.removeAttribute(t):e.setAttribute(t,n))}e.classList.toggle(r,!t),e.classList.toggle(n,t)},$O=(e,t,n)=>{let r=JO(e),{maxToolbarItems:i=1}=e;if(!(r.length>0)){e.toggleAttribute(`has-menu-items`,!1);return}let a=r.slice(0,i),o=r.slice(a.length);a.forEach(e=>QO(e,!0,t,n)),o.forEach(e=>QO(e,!1,t,n)),e.toggleAttribute(`has-menu-items`,o.length>0)},ek=e=>{let{active:t=!1,maxToolbarItems:n=1}=e,r=M(!1);UT({activity:WO,callback:()=>GO(e),check:()=>t&&!e.hasAttribute(`hide-actions`),element:()=>e.shadowRoot?.querySelector(`#dropdown`)},[t]);let i=k(()=>Nt(`height`),[]);Ae(()=>{r.current?i(e,t):i(e,t,{duration:0}),r.current=!0},[t]);let o=A(()=>$O(e,`cosmoz-bottom-bar-toolbar`,`cosmoz-bottom-bar-menu`),[n]),s=M(null),c=A(()=>{let t=s.current;t&&(t.disconnect(),qO(e).filter(KO).forEach(e=>{t.observe(e,{attributes:!0,attributeFilter:[`hidden`]})}))},[]);O(()=>{s.current=new MutationObserver(()=>{c(),o()}),c(),o();let t=new MutationObserver(()=>{c(),o()});return t.observe(e,{childList:!0}),()=>{s.current?.disconnect(),s.current=null,t.disconnect()}},[o]);let l=A(()=>{c(),o()},[o]);return a` <div id="bar" part="bar">
			<div id="info" part="info"><slot name="info"></slot></div>
			<slot
				id="bottomBarToolbar"
				name="bottom-bar-toolbar"
				@slotchange=${l}
			></slot>
			<cosmoz-dropdown-menu id="dropdown" part="dropdown">
				${Td({slot:`button`})}
				<slot id="bottomBarMenu" name="bottom-bar-menu"></slot>
			</cosmoz-dropdown-menu>
			<slot name="extra" id="extraSlot"></slot>
		</div>
		<div hidden style="display:none">
			<slot id="content" @slotchange=${l}></slot>
		</div>`},customElements.define(`cosmoz-bottom-bar`,N(ek,{observedAttributes:[`active`,`max-toolbar-items`],styleSheets:[UO]})),tk=`
	<slot name="extra" slot="extra"></slot>
	<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
	<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
`,a(Object.assign([tk],{raw:[tk]})),LO(Object.assign([tk],{raw:[tk]}))}));function rk(e){let t=[...e];for(let e=t.length-1;e>0;e--){let n=Math.floor(Math.random()*(e+1));[t[e],t[n]]=[t[n],t[e]]}return t}var ik,ak,ok,sk,ck,lk,uk;e((()=>{kt(),P(),s(),L(),jt(),nk(),ik=e=>{let{active:t,maxToolbarItems:n}=e,[r,i]=j(``),[o,s]=j(rk([{onClick:()=>alert(`Button 1 clicked`),priority:10,text:`Button 1`},{onClick:()=>alert(`Button 2 clicked`),text:`Button 2`},{onClick:()=>alert(`Button 3 clicked`),text:`Button 3`},{onClick:()=>alert(`Button 4 clicked`),priority:5,text:`Button 4`},{onClick:()=>alert(`Button 5 clicked`),text:`Button 5`}].concat(...Array.from({length:100},(e,t)=>{let n=t+6;return{onClick:()=>alert(`Button `+n+` clicked`),text:`Button `+n,priority:n}})))),c=e=>{let t=e.target;i(t.value)},l=e=>{let t=e?e.trim():``;s([...o,{onClick:()=>alert(`!!Button `+t+` clicked`),priority:t?+t:void 0,text:`Button `+t}]),e&&i(``)};return a`
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
            ${At(o,e=>a`<cosmoz-button
                        @click=${e.onClick}
                        data-priority=${I(e.priority)}
                    >
                        ${e.text}
                    </cosmoz-button>`)}
        </cosmoz-bottom-bar>
    `},customElements.define(`cosmoz-bottom-bar-story`,N(ik,{observedAttributes:[`active`,`max-toolbar-items`]})),ak=e=>a`<cosmoz-bottom-bar-story
        ?active=${e.active}
        .maxToolbarItems=${e.maxToolbarItems}
    ></cosmoz-bottom-bar-story>`,ok=({active:e,maxToolbarItems:t})=>a`
    <cosmoz-bottom-bar
        id="bottomBar"
        ?active=${e}
        .maxToolbarItems=${t}
    >
        <span slot="info">Bottom bar demo</span>
    </cosmoz-bottom-bar>
`,sk={title:`Cosmoz Bottom Bar`,render:ak,argTypes:{active:{control:`boolean`},maxToolbarItems:{control:`number`}},parameters:{docs:{description:{component:`The Cosmoz Bottom Bar web component`}}}},ck={args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The basic version`}}}},lk={render:ok,args:{active:!0,maxToolbarItems:2},parameters:{docs:{description:{story:`The empty cosmoz-bottom-bar`}}}},ck.parameters={...ck.parameters,docs:{...ck.parameters?.docs,source:{originalSource:`{
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
}`,...ck.parameters?.docs?.source}}},lk.parameters={...lk.parameters,docs:{...lk.parameters?.docs,source:{originalSource:`{
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
}`,...lk.parameters?.docs?.source}}},uk=[`Basic`,`Empty`]}))();export{ck as Basic,lk as Empty,uk as __namedExportsOrder,sk as default};