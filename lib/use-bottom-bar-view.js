import {
	useEffect,
	useState,
	useMemo
} from 'haunted';
import { useViewInfo } from '@neovici/cosmoz-viewinfo';

const useBottomBarView = ({
	active: initialActive = true,
	fixed
}) => { /* eslint-disable no-return-assign */
	const { desktop } = useViewInfo(),
		isFixed = fixed ?? desktop,
		[active, setActive] = useState(initialActive),
		info = useMemo(() => ({}), []);

	useEffect(() => {
		if (isFixed) {
			return;
		}
		const
			{ current: el } = info,
			opts = { passive: true },
			onScroll = () => {
				if (info.raf) {
					cancelAnimationFrame(info.raf);
				}
				info.raf = requestAnimationFrame(() => info.raf = requestAnimationFrame(() => {
					const { scrollTop } = el;
					setActive(
						scrollTop < 2 // at top
						|| info.scrollTop > scrollTop // scrolling up
						|| el.scrollHeight - scrollTop - el.offsetHeight < 3 // at bottom
					);
					Object.assign(info, {
						scrollTop,
						raf: undefined
					});
				}));
			};
		el.addEventListener('scroll', onScroll, opts);
		onScroll();
		return () => {
			el.removeEventListener('scroll', onScroll, opts);
			if (info.raf) {
				cancelAnimationFrame(info.raf);
				info.raf = undefined;
			}
		};
	}, [isFixed, info]);

	useEffect(() => {
		setActive(initialActive);
	}, [initialActive, setActive]);

	return {
		active,
		info
	};
};

export { useBottomBarView };
