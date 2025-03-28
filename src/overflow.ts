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

const check = (part: AttributePart) => {
	if (part.element.tagName !== 'SLOT') {
		throw new Error('Overflow directive must be used on a slot element');
	}
};

class OverflowDirective extends AsyncDirective {
	observer?: IntersectionObserver;
	slot?: HTMLSlotElement;
	onOverflow?: OnOverflow;
	cleanup?: () => void;

	constructor(part: PartInfo) {
		super(part);

		this.setupObserver = this.setupObserver.bind(this);
	}

	render() {
		return noChange;
	}

	update(part: AttributePart, [onOverflow]: [OnOverflow]) {
		check(part);
		this.onOverflow = onOverflow;

		const hasChanged = this.slot !== part.element;
		if (hasChanged) {
			if (this.cleanup) {
				this.cleanup();
				this.cleanup = undefined;
			}
			this.slot = part.element as HTMLSlotElement;
			this.setupObserver();
		}

		return noChange;
	}

	setupObserver() {
		if (!this.slot || !this.onOverflow) return;

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

				this.onOverflow!({ visible, overflowing });
			},
			{ root: this.slot.parentElement, threshold: 1 },
		);

		const observe = () => {
			if (!this.observer || !this.slot) return;
			const elements = Array.from(
				this.slot.assignedElements(),
			) as HTMLElement[];
			for (const c of elements) {
				this.observer.observe(c);
			}
		};

		observe();

		this.slot.addEventListener('slotchange', observe);

		this.cleanup = () => {
			if (this.slot) {
				this.slot.removeEventListener('slotchange', observe);
			}
			if (this.observer) {
				this.observer.disconnect();
				this.observer = undefined;
			}
		};
	}
}

interface Overflow {
	(onOverflow: OnOverflow): DirectiveResult<typeof OverflowDirective>;
}

const overflow = directive(OverflowDirective) as Overflow;

export default overflow;
