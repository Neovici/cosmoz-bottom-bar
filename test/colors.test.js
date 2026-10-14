import { assert, fixture, html, nextFrame } from '@open-wc/testing';

import '../src/cosmoz-bottom-bar.ts';

const render = (tokens) =>
	fixture(html`
		<cosmoz-bottom-bar active style=${tokens}>
			<button slot="bottom-bar-toolbar">Approve</button>
		</cosmoz-bottom-bar>
	`);

suite('bottom bar button colors', () => {
	test('slotted buttons use the action tokens', async () => {
		const bar = await render(
			'--cz-color-bg-action-solid: rgb(1, 2, 3); --cz-color-text-on-action: rgb(4, 5, 6); --cz-color-bg-brand-solid: rgb(9, 9, 9)'
		);
		await nextFrame();
		const style = getComputedStyle(bar.querySelector('button'));
		assert.equal(style.backgroundColor, 'rgb(1, 2, 3)');
		assert.equal(style.color, 'rgb(4, 5, 6)');
	});

	test('falls back to the brand fill without action tokens', async () => {
		const bar = await render('--cz-color-bg-brand-solid: rgb(9, 9, 9)');
		await nextFrame();
		assert.equal(
			getComputedStyle(bar.querySelector('button')).backgroundColor,
			'rgb(9, 9, 9)'
		);
	});
});
