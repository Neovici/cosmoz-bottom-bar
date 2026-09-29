import { assert, fixture, html, nextFrame } from '@open-wc/testing';
import '../src/cosmoz-bottom-bar.ts';

suite('bottom bar materials', () => {
	test('themes the action and overflow together, then restores their defaults', async () => {
		const bar = await fixture(html`<cosmoz-bottom-bar active>
			<button>Approve</button><button>Assign</button>
		</cosmoz-bottom-bar>`);
		await nextFrame();
		const action = bar.querySelector('button');
		const menu = bar.shadowRoot.querySelector('cosmoz-dropdown-menu');
		const trigger = menu.shadowRoot
			.querySelector('cosmoz-dropdown')
			.shadowRoot.querySelector('button');
		const before = [action, trigger].map((el) => ({
			background: getComputedStyle(el).backgroundColor,
			radius: getComputedStyle(el).borderRadius,
		}));
		bar.style.cssText = `
			--cosmoz-bottom-bar-action-background: rgb(20, 40, 60);
			--cosmoz-bottom-bar-action-color: rgb(230, 240, 250);
			--cosmoz-bottom-bar-action-radius: 999px;
			--cosmoz-bottom-bar-action-sheen: linear-gradient(white, transparent);
			--cosmoz-bottom-bar-action-shadow: inset 0 1px 0 white;
		`;
		for (const el of [action, trigger]) {
			const style = getComputedStyle(el);
			assert.equal(style.borderRadius, '999px');
			assert.equal(style.color, 'rgb(230, 240, 250)');
			assert.include(style.backgroundImage, 'linear-gradient');
			assert.notEqual(style.boxShadow, 'none');
		}
		bar.removeAttribute('style');
		[action, trigger].forEach((el, index) => {
			assert.equal(
				getComputedStyle(el).backgroundColor,
				before[index].background
			);
			assert.equal(getComputedStyle(el).borderRadius, before[index].radius);
		});
	});
});
