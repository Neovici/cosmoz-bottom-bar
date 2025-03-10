import { AttributePart, noChange } from 'lit-html';
import { AsyncDirective } from 'lit-html/async-directive.js';
import { directive, DirectiveResult } from 'lit-html/directive.js';

type OnOverflow = (
	visibleElements: Set<HTMLElement>,
	overflownElements: Set<HTMLElement>,
) => void;

function isEntryHidden(el: IntersectionObserverEntry) {
	return el.boundingClientRect.height === 0;
}

class OverflowDirective extends AsyncDirective {
	_observer?: IntersectionObserver;
	_partRef?: HTMLSlotElement | null;

	render() {
		return noChange;
	}

	update(part: AttributePart, [onOverflow]: [OnOverflow]) {
		if (part.element.tagName !== 'SLOT') {
			throw new Error('Overflow directive must be used on a slot element');
		}

		const slot = part.element as HTMLSlotElement;

		slot.addEventListener('slotchange', () => {
			this.overflow(slot, onOverflow);
		});

		return noChange;
	}

	overflow(element: HTMLSlotElement, onOverflow: OnOverflow) {
		this._observer?.disconnect();

		const elements = Array.from(element.assignedElements()) as HTMLElement[];
		const visibleElements: Set<HTMLElement> = new Set();
		const overflownElements: Set<HTMLElement> = new Set();

		this._observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;

					if (entry.intersectionRatio === 1) {
						visibleElements.add(el);
						overflownElements.delete(el);
					} else if (isEntryHidden(entry)) {
						visibleElements.delete(el);
						overflownElements.delete(el);
					} else {
						visibleElements.delete(el);
						overflownElements.add(el);
					}
				});
				onOverflow(visibleElements, overflownElements);
			},
			{ root: this._partRef?.parentElement, threshold: 1 },
		);

		for (const c of elements) {
			this._observer.observe(c);
		}
	}

	disconnected() {
		this._observer?.disconnect();
	}

	reconnected(): void {
		if (this._partRef) {
			for (const c of this._partRef.assignedElements()) {
				this._observer?.observe(c);
			}
		}
	}
}

interface Overflow {
	(onOverflow: OnOverflow): DirectiveResult<typeof OverflowDirective>;
}

const overflow = directive(OverflowDirective) as Overflow;

export default overflow;
