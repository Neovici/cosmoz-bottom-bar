import { html, component, useState, useEffect } from '@pionjs/pion';
import { useBottomBarFocusedCtxHandler } from '../../src/cosmoz-bottom-bar-focused-context.js';
import '../../cosmoz-bottom-bar.js';

export const BottomBarFocusedDemo = () => {
	const focusCtxHandler = useBottomBarFocusedCtxHandler(),
		[firstBarActive, setFirstBarActive] = useState(false),
		[secondBarActive, setSecondBarActive] = useState(false);

	useEffect(() => {
		const handleEvent = (e) => {
			const { shiftKey, key } = e;

			if (shiftKey && key === 'A') {
				focusCtxHandler.bars[0]?.openActionsDropdown();
			}
			return focusCtxHandler.bars.find((bar) => bar);
		};

		document.addEventListener('keydown', handleEvent);
		return () => document.removeEventListener('keydown', handleEvent);
	}, [focusCtxHandler.bars]);

	return html`<bottom-bar-focused-provider .value=${focusCtxHandler}>
		<div style="display: flex; flex-direction: column; margin: 0 8px 8px;">
			<h3>Bottom bar focused demo</h3>
			<div>
				<input
					type="checkbox"
					id="first-bar"
					@change=${(e) => setFirstBarActive(e.target.checked)}
				/>
				<label for="first-bar">'Bottom bar 1' active</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="second-bar"
					@change=${(e) => setSecondBarActive(e.target.checked)}
				/>
				<label for="second-bar">'Bottom bar 2' active</label>
			</div>
		</div>
		<div style="overflow: hidden; margin-top: 20px;">
			<cosmoz-bottom-bar ?active=${firstBarActive}
				><span slot="info">Bottom bar 1</span>
				<button>Button A</button>
				<button>Button B</button>
				<button>Button C</button>
			</cosmoz-bottom-bar>
			<cosmoz-bottom-bar id="bottomBar" ?active=${secondBarActive}>
				<span slot="info">Bottom bar 2</span>
				<button>Button 1</button>
				<button>Button 2</button>
				<button>Button 3</button>
			</cosmoz-bottom-bar>
		</div>
	</bottom-bar-focused-provider>`;
};

customElements.define(
	'bottom-bar-focused-demo',
	component(BottomBarFocusedDemo),
);
