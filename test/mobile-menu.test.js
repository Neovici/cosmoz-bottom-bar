import { assert, fixture, html, nextFrame, waitUntil } from '@open-wc/testing';
import { sendKeys, sendMouse, setViewport } from '@web/test-runner-commands';
import { changeLanguage, init } from 'i18next';
import '../src/cosmoz-bottom-bar';
import './theme.js';

const setupMenu = async () => {
	const bar = await fixture(html`
		<cosmoz-bottom-bar
			active
			.maxToolbarItems=${0}
			style="position: fixed; inset: auto 0 80px"
		>
			<cosmoz-button>Komplettera konteringsinformation</cosmoz-button>
			${Array.from(
				{ length: 24 },
				(_, index) => html`<cosmoz-button>Action ${index + 1}</cosmoz-button>`,
			)}
		</cosmoz-bottom-bar>
	`);
	const trigger = bar.shadowRoot.querySelector('#menuButton');
	await waitUntil(() => bar.hasAttribute('has-menu-items'));
	trigger.shadowRoot.querySelector('button').focus();
	trigger.click();
	const sheet = bar.shadowRoot.querySelector('dialog');
	await waitUntil(() => sheet.open);
	await nextFrame();
	return {
		bar,
		sheet,
		trigger,
		list: bar.shadowRoot.querySelector('.sheet-actions'),
	};
};

suite('mobile action sheet', () => {
	teardown(async () => setViewport({ width: 1024, height: 768 }));

	test('fits phone and tablet sizes with reachable scrolling and original action nodes', async () => {
		await setViewport({ width: 320, height: 568 });
		const { bar, sheet, list, trigger } = await setupMenu();
		for (const [width, height] of [
			[320, 568],
			[390, 844],
			[899, 800],
		]) {
			await setViewport({ width, height });
			await nextFrame();
			if (!sheet.open) trigger.click();
			await waitUntil(
				() => bar.firstElementChild.getBoundingClientRect().height >= 48,
			);
			const box = sheet.getBoundingClientRect();
			assert.isAtLeast(box.left, 0);
			assert.isAtMost(box.right, width);
			assert.closeTo(box.bottom, height, 1);
			assert.isAtMost(box.height, height * 0.75 + 1);
			assert.isAbove(list.scrollHeight, list.clientHeight);
			assert.isAtMost(list.scrollWidth, list.clientWidth + 1);
			assert.deepEqual(
				bar.shadowRoot.querySelector('#bottomBarMenu').assignedElements(),
				[...bar.children],
			);
			const last = bar.lastElementChild;
			last.scrollIntoView({ block: 'nearest' });
			assert.isAtMost(
				last.getBoundingClientRect().bottom,
				list.getBoundingClientRect().bottom + 1,
			);
			last.click();
			await waitUntil(() => !sheet.open);
		}
	});

	test('keeps native Escape, restores focus and dismisses from the backdrop or close control', async () => {
		await setViewport({ width: 390, height: 844 });
		const { sheet, trigger } = await setupMenu();
		await sendKeys({ press: 'Escape' });
		await waitUntil(() => !sheet.open);
		assert.equal(
			trigger.shadowRoot.activeElement,
			trigger.shadowRoot.querySelector('button'),
		);
		trigger.click();
		await waitUntil(() => sheet.open);
		await sendMouse({ type: 'click', position: [4, 4] });
		await waitUntil(() => !sheet.open);
		trigger.click();
		await waitUntil(() => sheet.open);
		sheet.querySelector('cosmoz-button').click();
		await waitUntil(() => !sheet.open);
	});

	test('closes the modal and preserves action nodes when resizing back to desktop', async () => {
		await setViewport({ width: 390, height: 844 });
		const { bar, sheet } = await setupMenu();
		const actions = [...bar.children];
		await setViewport({ width: 1024, height: 800 });
		await waitUntil(() => !!bar.shadowRoot.querySelector('#dropdown'));
		assert.isFalse(sheet.open);
		assert.deepEqual(
			bar.shadowRoot.querySelector('#bottomBarMenu').assignedElements(),
			actions,
		);
		bar.shadowRoot.querySelector('#menuButton').click();
		await waitUntil(() => bar.shadowRoot.querySelector('#dropdown').opened);
		assert.isAtMost(
			bar.shadowRoot.querySelector('.menu').getBoundingClientRect().width,
			300,
		);
		await setViewport({ width: 390, height: 844 });
		await waitUntil(() => !!bar.shadowRoot.querySelector('dialog'));
		assert.equal(
			bar.shadowRoot.querySelector('#menuButton').getAttribute('aria-expanded'),
			'false',
		);
		assert.isFalse(bar.shadowRoot.querySelector('dialog').open);
	});

	test('uses the application translations for the action heading and dismissal', async () => {
		await init({
			lng: 'sv',
			resources: {
				sv: {
					translation: {
						Actions: 'Åtgärder',
						Close: 'Stäng',
						'More actions': 'Fler åtgärder',
					},
				},
			},
		});
		await setViewport({ width: 390, height: 844 });
		const { sheet, trigger } = await setupMenu();
		assert.equal(sheet.querySelector('h2').textContent, 'Åtgärder');
		assert.equal(
			sheet.querySelector('cosmoz-button').getAttribute('aria-label'),
			'Stäng',
		);
		assert.equal(trigger.getAttribute('aria-label'), 'Fler åtgärder');
		sheet.close();
		await changeLanguage('en');
	});
});
