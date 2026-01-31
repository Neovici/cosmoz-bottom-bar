import { AttributePart, noChange } from 'lit-html';
import { AsyncDirective } from 'lit-html/async-directive.js';
import { directive, DirectiveResult } from 'lit-html/directive.js';

type OnOverflow = (opts: {
	visible: Set<HTMLElement>;
	overflowing: Set<HTMLElement>;
	hidden: Set<HTMLElement>;
}) => void;

function isEntryHidden(el: IntersectionObserverEntry) {
	return el.boundingClientRect.height === 0;
}

function isElementHidden(el: HTMLElement) {
	return el.getBoundingClientRect().height === 0;
}

const check = (part: AttributePart) => {
	if (part.element.tagName !== 'SLOT') {
		throw new Error('Overflow directive must be used on a slot element');
	}
};

function reconcileHiddenElements(
	hidden: Set<HTMLElement>,
	overflowing: Set<HTMLElement>,
) {
	// If a parent element was hidden, all its children were marked as hidden.
	// When the parent becomes visible, the observer only reports entries for
	// children that intersect the parent’s content box. Others remain stuck in
	// `hidden` even if they should be `overflowing`. This pass corrects that.
	hidden.forEach((el) => {
		if (isElementHidden(el)) return;
		overflowing.add(el);
		hidden.delete(el);
	});
}

const setupObserver = (slot: HTMLSlotElement, onOverflow: OnOverflow) => {
	let visible: Set<HTMLElement> = new Set();
	let overflowing: Set<HTMLElement> = new Set();
	let hidden: Set<HTMLElement> = new Set();
	let pending: Set<HTMLElement> = new Set();

	const observer: IntersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const el = entry.target as HTMLElement;
				pending.delete(el);

				if (
					entry.boundingClientRect.width === entry.intersectionRect.width &&
					entry.intersectionRect.height !== 0
				) {
					visible.add(el);
					overflowing.delete(el);
					hidden.delete(el);
				} else if (isEntryHidden(entry)) {
					visible.delete(el);
					overflowing.delete(el);
					hidden.add(el);
				} else {
					visible.delete(el);
					overflowing.add(el);
					hidden.delete(el);
				}
			});

			reconcileHiddenElements(hidden, overflowing);

			onOverflow({ visible, overflowing, hidden });
		},
		{ root: slot.parentElement, threshold: [0, 0.5, 1] },
	);

	const classifyElement = (
		c: HTMLElement,
		sets: {
			newVisible: Set<HTMLElement>;
			newOverflowing: Set<HTMLElement>;
			newHidden: Set<HTMLElement>;
			newPending: Set<HTMLElement>;
		},
	) => {
		if (visible.has(c)) {
			sets.newVisible.add(c);
		} else if (overflowing.has(c)) {
			sets.newOverflowing.add(c);
		} else if (hidden.has(c)) {
			sets.newHidden.add(c);
		} else if (pending.has(c)) {
			sets.newPending.add(c);
		} else {
			observer.observe(c);
			sets.newPending.add(c);
		}
	};

	const observe = () => {
		const elements = Array.from(
			slot.assignedElements({ flatten: true }),
		) as HTMLElement[];
		const sets = {
			newVisible: new Set<HTMLElement>(),
			newOverflowing: new Set<HTMLElement>(),
			newHidden: new Set<HTMLElement>(),
			newPending: new Set<HTMLElement>(),
		};

		elements.forEach((c) => classifyElement(c, sets));

		visible = sets.newVisible;
		overflowing = sets.newOverflowing;
		hidden = sets.newHidden;
		pending = sets.newPending;

		// Only call onOverflow if no elements are pending classification
		if (pending.size === 0) {
			onOverflow({ visible, overflowing, hidden });
		}
	};

	observe();

	slot.addEventListener('slotchange', observe);

	return () => {
		slot.removeEventListener('slotchange', observe);
		observer.disconnect();
	};
};

class OverflowDirective extends AsyncDirective {
	observer?: IntersectionObserver;
	slot?: HTMLSlotElement;
	cleanup?: () => void;

	render() {
		return noChange;
	}

	update(part: AttributePart, [onOverflow]: [OnOverflow]) {
		check(part);

		const hasChanged = this.slot !== part.element;
		if (hasChanged) {
			if (this.cleanup) {
				this.cleanup();
				this.cleanup = undefined;
			}
			this.slot = part.element as HTMLSlotElement;
			this.cleanup = setupObserver(this.slot, onOverflow);
		}

		return noChange;
	}
}

interface Overflow {
	(onOverflow: OnOverflow): DirectiveResult<typeof OverflowDirective>;
}

const overflow = directive(OverflowDirective) as Overflow;

export default overflow;
