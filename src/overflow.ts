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

	const observer: IntersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				const el = entry.target as HTMLElement;

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

	const observe = () => {
		const elements = Array.from(
			slot.assignedElements({ flatten: true }),
		) as HTMLElement[];
		const newVisible: typeof visible = new Set();
		const newOverflowing: typeof overflowing = new Set();
		const newHidden: typeof hidden = new Set();

		for (const c of elements) {
			if (visible.has(c)) {
				newVisible.add(c);
			} else if (overflowing.has(c)) {
				newOverflowing.add(c);
			} else if (hidden.has(c)) {
				newHidden.add(c);
			} else {
				observer.observe(c);
			}
		}

		visible = newVisible;
		overflowing = newOverflowing;
		hidden = newHidden;
		onOverflow({ visible, overflowing, hidden });
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
