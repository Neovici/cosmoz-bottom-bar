import { AttributePart, noChange } from 'lit-html';
import { AsyncDirective } from 'lit-html/async-directive.js';
import { directive, DirectiveResult } from 'lit-html/directive.js';

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

const setupObserver = (slot: HTMLSlotElement, onOverflow: OnOverflow) => {
	let visible: Set<HTMLElement> = new Set();
	let overflowing: Set<HTMLElement> = new Set();

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
		{ root: slot.parentElement, threshold: [0, 0.5, 1] },
	);

	const observe = () => {
		const elements = Array.from(
			slot.assignedElements({ flatten: true }),
		) as HTMLElement[];
		const newVisible: typeof visible = new Set();
		const newOverflowing: typeof overflowing = new Set();

		for (const c of elements) {
			if (visible.has(c)) {
				newVisible.add(c);
			} else if (overflowing.has(c)) {
				newOverflowing.add(c);
			} else {
				if (c.getBoundingClientRect().height !== 0) {
					newVisible.add(c);
				}
				observer.observe(c);
			}
		}

		visible = newVisible;
		overflowing = newOverflowing;
		onOverflow({ visible, overflowing });
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
