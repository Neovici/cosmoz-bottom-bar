import { createContext, useContext, useState, useMemo } from '@pionjs/pion';
import { noop } from '@neovici/cosmoz-utils/function';

export const bottomBarFocused = createContext({
	bars: [],
	add: noop,
	remove: noop,
});
customElements.define('bottom-bar-focused-provider', bottomBarFocused.Provider);

export const useBottomBarFocusedCtx = () => useContext(bottomBarFocused) ?? {};

export const useBottomBarFocusedCtxHandler = () => {
	const [bars, setBars] = useState([]),
		remove = (el) =>
			setBars((prevBars) => prevBars.filter((bar) => bar !== el)),
		add = (el) => {
			setBars((prevBars) => [el, ...prevBars]);
			return () => remove(el);
		},
		focusHandler = useMemo(() => {
			return { bars, add, remove };
		}, [bars]);

	return focusHandler;
};
