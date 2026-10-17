import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse, setViewport } from '@web/test-runner-commands';
import '../src/cosmoz-bottom-bar';

const setupMenu = async () => {
	const bar = await fixture(html`
		<cosmoz-bottom-bar
			active
			.maxToolbarItems=${0}
			style="position: fixed; inset: auto 0 80px; --cz-spacing: 4px"
		>
			<cosmoz-button>Komplettera konteringsinformation</cosmoz-button>
			${Array.from(
				{ length: 24 },
				(_, index) => html`<cosmoz-button>Action ${index + 1}</cosmoz-button>`,
			)}
		</cosmoz-bottom-bar>
	`);
	const dropdown = bar.shadowRoot.querySelector('#dropdown');
	const trigger = bar.shadowRoot.querySelector('#menuButton');
	await waitUntil(() => bar.hasAttribute('has-menu-items'));
	trigger.click();
	await waitUntil(() => dropdown.opened);
	await nextFrame();
	await Promise.all(
		dropdown.shadowRoot
			.getAnimations({ subtree: true })
			.map((animation) => animation.finished),
	);
	return {
		bar,
		dropdown,
		trigger,
		menu: bar.shadowRoot.querySelector('.menu'),
		list: bar.shadowRoot.querySelector('cosmoz-dropdown-list'),
	};
};

suite('mobile action panel', () => {
	teardown(async () => setViewport({ width: 800, height: 600 }));

	for (const [width, height] of [
		[320, 568],
		[390, 844],
		[899, 800],
	]) {
		test(`fits at ${width}px with reachable scrolling and full-width touch targets`, async () => {
			await setViewport({ width, height });
			const { bar, dropdown, menu, list } = await setupMenu();
			const box = menu.getBoundingClientRect();
			assert.isAtLeast(box.left, 11);
			assert.isAtMost(box.right, width - 11);
			assert.isAtLeast(box.top, 0);
			assert.isAtMost(box.bottom, height);
			assert.isAtMost(box.height, height * 0.55 + 18);
			assert.isAbove(list.scrollHeight, list.clientHeight);
			assert.isAtMost(list.scrollWidth, list.clientWidth + 1);
			for (const action of bar.querySelectorAll('cosmoz-button')) {
				assert.isAtLeast(action.getBoundingClientRect().height, 48);
				assert.closeTo(
					action.getBoundingClientRect().width,
					list.clientWidth,
					1,
				);
			}
			const last = bar.lastElementChild;
			last.scrollIntoView({ block: 'nearest' });
			const lastBox = last.getBoundingClientRect();
			assert.isAtMost(lastBox.bottom, list.getBoundingClientRect().bottom + 1);
			last.click();
			await waitUntil(() => !dropdown.opened);
		});
	}

	test('keeps native Escape and outside-click dismissal', async () => {
		await setViewport({ width: 390, height: 844 });
		const { dropdown, trigger } = await setupMenu();
		await sendKeys({ press: 'Escape' });
		await waitUntil(() => !dropdown.opened);
		trigger.click();
		await waitUntil(() => dropdown.opened);
		await sendMouse({ type: 'click', position: [4, 4] });
		await waitUntil(() => !dropdown.opened);
	});

	test('restores compact desktop dimensions above the mobile breakpoint', async () => {
		await setViewport({ width: 390, height: 844 });
		const { menu } = await setupMenu();
		await setViewport({ width: 900, height: 800 });
		await waitUntil(() => menu.getBoundingClientRect().width <= 300);
		assert.isAtMost(menu.getBoundingClientRect().width, 300);
		assert.equal(getComputedStyle(menu).marginInlineStart, '0px');
	});
});
