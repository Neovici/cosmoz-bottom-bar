import { useMeta } from '@neovici/cosmoz-utils/hooks/use-meta';
import { useEffect, useMemo } from '@pionjs/pion';
import { AttributePart, noChange } from 'lit-html';
import { asyncDirective } from './async-directive';

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

const overflow = asyncDirective(
	(part: AttributePart, [onOverflow]: [OnOverflow]) => {
		check(part);

		const meta = useMeta({ onOverflow });

		const slot = useMemo(() => part.element as HTMLSlotElement, [part]);

		useEffect(() => {
			const visible: Set<HTMLElement> = new Set();
			const overflowing: Set<HTMLElement> = new Set();

			const observer = new IntersectionObserver(
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

			const observe = () => {
				const elements = Array.from(slot.assignedElements()) as HTMLElement[];
				for (const c of elements) {
					observer.observe(c);
				}
			};

			observe();

			slot.addEventListener('slotchange', observe);
			return () => {
				slot.removeEventListener('slotchange', observe);
				observer.disconnect();
			};
		}, [slot]);

		return noChange;
	},
);

export default overflow;
