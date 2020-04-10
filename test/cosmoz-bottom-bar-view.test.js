import {
	assert, fixture, html
} from '@open-wc/testing';

import '@polymer/paper-button/paper-button.js';
import '../cosmoz-bottom-bar-view.js';

suite('<cosmoz-bottom-bar-view>', () => {
	let bottomBarView,
		bottomBar;

	setup(async () => {
		bottomBarView = await fixture(html`
			<cosmoz-bottom-bar-view style="width: 300px; height: 400px;">
				<div slot="scroller-content">
					<div>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec tristique diam nisl, at dapibus tortor pulvinar malesuada.
						Nulla tempus congue sem, at auctor tellus.
					</div>
				</div>
				<paper-button>b</paper-button>
			</cosmoz-bottom-bar-view>
		`);
		bottomBar = bottomBarView.$.bottomBar;
	});

	test('bottomBar is visible', () => {
		bottomBar._layoutDebouncer.flush();
		assert.isTrue(bottomBar.visible);
	});
});

suite('scrolling bottom-bar-view', () => {
	let bottomBarView,
		bottomBar;

	setup(async () => {
		bottomBarView = await fixture(html`
			<cosmoz-bottom-bar-view style="width: 300px; height: 300px";>
				<div slot="scroller-content" style="display: block">
					<div style="min-height:350px;">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Donec tristique diam nisl, at dapibus tortor pulvinar malesuada.
						Nulla tempus congue sem, at auctor tellus.
					</div>
				</div>
				<paper-button>b</paper-button>
			</cosmoz-bottom-bar-view>
		`);
		bottomBar = bottomBarView.$.bottomBar;
	});

	test('bottomBar is hidden when scrolling down', () => {
		bottomBar._layoutDebouncer.flush();
		bottomBarView.$.scroller.scrollTop = 20;
		bottomBarView.$.scroller.dispatchEvent(new CustomEvent('scroll'));

		assert.isFalse(bottomBar.active);
		assert.isFalse(bottomBar.visible);
	});

	test('bottomBar is visible when scroll is at bottom', () => {
		bottomBar._layoutDebouncer.flush();
		bottomBarView.$.scroller.scrollTop = 350;
		bottomBarView.$.scroller.dispatchEvent(new CustomEvent('scroll'));
		assert.isTrue(bottomBar.active);
		assert.isTrue(bottomBar.visible);
	});
});
