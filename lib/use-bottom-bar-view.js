import {
	useEffect,
	useState,
	useMemo
} from 'haunted';
import { useHost } from '@neovici/cosmoz-utils/lib/hooks/use-host';
import { useViewInfo } from '@neovici/cosmoz-viewinfo';

const useBottomBarView = ({
	active: initialActive,
	fixed
}) => { /* eslint-disable no-return-assign */
	const host = useHost(),
		{ desktop } = useViewInfo(),
		isFixed = fixed ?? desktop,
		[active, setActive] = useState(initialActive),
		info = useMemo(() => ({}), []);

	useEffect(() => {
		if (isFixed) {
			return;
		}
		const opts = { passive: true },
			onScroll = () => {
				if (info.raf) {
					cancelAnimationFrame(info.raf);
				}
				info.raf = requestAnimationFrame(() => info.raf = requestAnimationFrame(() => {
					const { scrollTop } = host;
					setActive(
						scrollTop < 2 // ~ at top
						|| info.scrollTop > scrollTop // scrolling up
						|| info.current.scrollHeight - scrollTop - host.clientHeight < info.computedBarHeight // at bottom
					);
					Object.assign(info, {
						scrollTop,
						raf: undefined
					});
				}));
			};
		host.addEventListener('scroll', onScroll, opts);
		onScroll();
		return () => {
			host.removeEventListener('scroll', onScroll, opts);
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
