import { AttributePart, noChange } from 'lit-html';
import { Directive, directive } from 'lit-html/directive.js';

type OnOverflow = (
	visibleElements: Set<HTMLElement>,
	overflownElements: Set<HTMLElement>,
) => void;

class OverflowDirective extends Directive {
	_observer?: IntersectionObserver;
	_container?: HTMLElement | null;

	render() {
		return noChange;
	}

	update(part: AttributePart, [onOverflow]: [OnOverflow]) {
		const slot = part.element as HTMLSlotElement;
		this._container = slot.parentElement;

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
				console.log('entries', entries);
				entries.forEach((entry) => {
					const el = entry.target as HTMLElement;

					if (entry.intersectionRatio === 1) {
						visibleElements.add(el);
						overflownElements.delete(el);
					} else {
						overflownElements.add(el);
						visibleElements.delete(el);
					}

					onOverflow(visibleElements, overflownElements);
				});
			},
			{ root: this._container, threshold: 1 },
		);

		// this._observer.observe(this._container);
		for (const c of elements) {
			this._observer.observe(c);
		}
	}
}

const overflow = directive(OverflowDirective);

export default overflow;
