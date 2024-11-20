import { createContext, useContext, useState, useMemo } from '@pionjs/pion';
import { noop } from '@neovici/cosmoz-utils/function';

export const focus = createContext({
	bars: [],
	add: noop,
	remove: noop,
});
customElements.define('bottom-bar-focus-provider', focus.Provider);

export const focusCtx = () => useContext(focus) ?? {};

export const useFocusHandler = () => {
	const [bars, setBars] = useState([]),
		remove = (el) =>
			setBars((prevBars) => prevBars.filter((bar) => bar !== el)),
		add = (el) => {
			setBars((prevBars) => [el, ...prevBars]);
			return () => remove(el);
		},
		focusHandler = useMemo(() => ({ bars, add, remove }), [bars]);

	return focusHandler;
};
