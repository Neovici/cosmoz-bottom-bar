import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import { setViewport } from '@web/test-runner-commands';
import '../src/cosmoz-bottom-bar';
import './theme.js';

suite('mobile action alignment', () => {
	teardown(async () => setViewport({ width: 1024, height: 768 }));

	test('anchors the main action left and navigation right without an empty info spacer', async () => {
		await setViewport({ width: 390, height: 844 });
		const bar = await fixture(html`
			<cosmoz-bottom-bar active style="position: fixed; inset: auto 0 80px">
				<cosmoz-button data-priority="2">Approve order</cosmoz-button>
				<cosmoz-button>Comment order</cosmoz-button>
				<div slot="extra" style="display: flex; flex: none; gap: 8px">
					<cosmoz-button icon-only aria-label="Previous">‹</cosmoz-button>
					<cosmoz-button icon-only aria-label="Next">›</cosmoz-button>
				</div>
			</cosmoz-bottom-bar>
		`);
		const primary = bar.firstElementChild;
		const bounds = (element) => element.getBoundingClientRect();
		for (const width of [320, 390, 899]) {
			await setViewport({ width, height: 844 });
			await nextFrame();
			await waitUntil(() => primary.slot === 'bottom-bar-toolbar');
			const frame = bounds(bar.shadowRoot.querySelector('#bar'));
			const action = bounds(primary);
			assert.closeTo(action.left, frame.left + 12, 1);
			assert.isAtLeast(action.width, 130);
			assert.isAtMost(action.width, 320);
			assert.closeTo(
				bounds(bar.querySelector('[slot="extra"]')).right,
				frame.right - 12,
				1,
			);
			assert.isAtLeast(action.height, 44);
		}
		const info = document.createElement('span');
		info.slot = 'info';
		info.textContent = '3 selected';
		bar.append(info);
		await waitUntil(() => bar.hasAttribute('has-info'));
		assert.isAbove(bounds(info).width, 0);
		info.remove();
		await waitUntil(() => !bar.hasAttribute('has-info'));
		await setViewport({ width: 1024, height: 800 });
		await nextFrame();
		assert.isBelow(bounds(primary).width, 130);
	});

	test('moves an action into the menu when its label would extend past the left edge', async () => {
		await setViewport({ width: 320, height: 844 });
		const bar = await fixture(html`
			<cosmoz-bottom-bar active style="position: fixed; inset: auto 0 80px">
				<cosmoz-button data-priority="2"
					>Supplement accounting information</cosmoz-button
				>
				<cosmoz-button>Comment invoice</cosmoz-button>
				<div slot="extra" style="display: flex; flex: none; gap: 8px">
					<cosmoz-button icon-only aria-label="Previous">‹</cosmoz-button>
					<cosmoz-button icon-only aria-label="Next">›</cosmoz-button>
				</div>
			</cosmoz-bottom-bar>
		`);
		// Recalculate WebKit's cached media-query sheet on this new fixture.
		await setViewport({ width: 321, height: 844 });
		await setViewport({ width: 320, height: 844 });
		const primary = bar.firstElementChild;
		await waitUntil(() => primary.slot === 'bottom-bar-menu');
		for (const element of [
			bar.shadowRoot.querySelector('#menuButton'),
			bar.querySelector('[slot="extra"]'),
		]) {
			const bounds = element.getBoundingClientRect();
			assert.isAtLeast(bounds.left, 12);
			assert.isAtMost(bounds.right, 308);
		}
		await setViewport({ width: 1024, height: 800 });
		await waitUntil(() => primary.slot === 'bottom-bar-toolbar');
	});
});
