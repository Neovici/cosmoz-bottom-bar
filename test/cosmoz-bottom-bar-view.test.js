import {
	assert,
	fixture,
	html,
	nextFrame
} from '@open-wc/testing';

import '@polymer/paper-button/paper-button.js';
import '../cosmoz-bottom-bar-view.js';

suite('<cosmoz-bottom-bar-view>', () => {
	let bottomBarView,
		bottomBar;

	setup(async () => {
		bottomBarView = await fixture(html`
			<cosmoz-bottom-bar-view style="width: 300px; height: 300px";>
				<div slot="scroller-content" style="display: block">
					<div style="min-height:400px;">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec tristique diam nisl, at dapibus tortor pulvinar malesuada.
						Nulla tempus congue sem, at auctor tellus.
					</div>
				</div>
				<paper-button>b</paper-button>
			</cosmoz-bottom-bar-view>
		`);
		bottomBar = bottomBarView.shadowRoot.querySelector('cosmoz-bottom-bar');
	});

	test('bottomBar is visible', async () => {
		bottomBar._layoutDebouncer.flush();
		await nextFrame();
		await nextFrame();
		assert.isTrue(bottomBar.visible);
	});

	test('bottomBar is hidden when scrolling down', async () => {
		bottomBar._layoutDebouncer.flush();
		bottomBarView.scroll(0, 20);

		await nextFrame();
		await nextFrame();
		await nextFrame();

		assert.isFalse(bottomBar.active);
		assert.isFalse(bottomBar.visible);
	});

	test('bottomBar is visible when scroll is at bottom', async () => {
		bottomBar._layoutDebouncer.flush();
		bottomBarView.scroll(0, 350);

		await nextFrame();
		await nextFrame();
		await nextFrame();

		assert.isTrue(bottomBar.active);
		assert.isTrue(bottomBar.visible);
	});

	test('fixed bottomBar is still visible when scrolling down', async () => {
		bottomBarView.fixed = true;
		bottomBar._layoutDebouncer.flush();
		bottomBarView.scroll(0, 20);

		await nextFrame();
		await nextFrame();
		await nextFrame();

		assert.isTrue(bottomBar.active);
		assert.isTrue(bottomBar.visible);
	});
});
