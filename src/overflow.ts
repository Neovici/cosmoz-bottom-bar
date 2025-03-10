import { AttributePart, noChange } from 'lit-html';
import { AsyncDirective } from 'lit-html/async-directive.js';
import { directive, DirectiveResult, PartInfo } from 'lit-html/directive.js';

type OnOverflow = (opts: {
	visible: Set<HTMLElement>;
	overflowing: Set<HTMLElement>;
}) => void;

function isEntryHidden(el: IntersectionObserverEntry) {
	return el.boundingClientRect.height === 0;
}

class OverflowDirective extends AsyncDirective {
	observer?: IntersectionObserver;
	slot?: HTMLSlotElement;
	onOverflow?: OnOverflow;

	constructor(part: PartInfo) {
		super(part);

		this.setupObserver = this.setupObserver.bind(this);
	}

	render() {
		return noChange;
	}

	update(part: AttributePart, [onOverflow]: [OnOverflow]) {
		if (part.element.tagName !== 'SLOT') {
			throw new Error('Overflow directive must be used on a slot element');
		}

		this.onOverflow = onOverflow;

		const hasChanged = this.slot !== part.element;
		if (hasChanged) {
			this.slot = part.element as HTMLSlotElement;
			this.setupListener();
		}

		return noChange;
	}

	setupListener() {
		this.teardownListener();
		this.slot?.addEventListener('slotchange', this.setupObserver);
	}

	teardownListener() {
		this.slot?.removeEventListener('slotchange', this.setupObserver);
	}

	setupObserver() {
		if (!this.slot || !this.onOverflow) return;
		const { slot, onOverflow } = this;
		this.teardownObserver();

		const visible: Set<HTMLElement> = new Set();
		const overflowing: Set<HTMLElement> = new Set();

		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;

					if (entry.intersectionRatio === 1) {
						visible.add(el);
						overflowing.delete(el);
					} else if (isEntryHidden(entry)) {
						visible.delete(el);
						overflowing.delete(el);
					} else {
						visible.delete(el);
						overflowing.add(el);
					}
				});

				onOverflow({ visible, overflowing });
			},
			{ root: slot.parentElement, threshold: 1 },
		);

		const elements = Array.from(slot.assignedElements()) as HTMLElement[];
		for (const c of elements) {
			this.observer.observe(c);
		}
	}

	teardownObserver() {
		this.observer?.disconnect();
	}

	disconnected() {
		this.teardownListener();
		this.teardownObserver();
	}

	reconnected(): void {
		this.setupListener();
		this.setupObserver();
	}
}

interface Overflow {
	(onOverflow: OnOverflow): DirectiveResult<typeof OverflowDirective>;
}

const overflow = directive(OverflowDirective) as Overflow;

export default overflow;
