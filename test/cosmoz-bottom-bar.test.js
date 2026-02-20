/* eslint-disable max-lines */
import { assert, aTimeout, fixture, html, nextFrame } from '@open-wc/testing';

import '../src/cosmoz-bottom-bar.ts';

const getToolbarElements = (bottomBar) => {
	return Array.from(
		bottomBar.querySelectorAll('[slot="bottom-bar-toolbar"]'),
	).filter((el) => !el.hidden);
};

const getMenuElements = (bottomBar) => {
	return Array.from(
		bottomBar.querySelectorAll('[slot="bottom-bar-menu"]'),
	).filter((el) => !el.hidden);
};

suite('bottomBarWithoutMenu', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar active style="min-width: 200px; max-width: 200px">
				<div
					style="width: 50px; height: 32px; background: red"
					id="bottomBarWithoutMenuItem"
				></div>
			</cosmoz-bottom-bar>
		`);

		await nextFrame();
	});

	test('button should be in toolbar slot', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const item = bottomBar.querySelector('#bottomBarWithoutMenuItem');
		assert.include(toolbarElements, item, 'Item should be in the toolbar slot');
	});

	test('menu button should be hidden', async () => {
		assert.isFalse(bottomBar.hasAttribute('has-menu-items'));

		const dropdown = bottomBar.shadowRoot.querySelector('cosmoz-dropdown-menu');
		assert.equal(getComputedStyle(dropdown).display, 'none');
	});
});

suite('bottomBarWithOverflowingButton', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar active style="min-width: 350px; max-width: 350px">
				<div
					style="width: 200px; height: 32px; background: green"
					id="bottomBarWithOverflowingButtonItem1"
				></div>
				<div
					style="width: 200px; height:32px; background: limegreen"
					id="bottomBarWithOverflowingButtonItem2"
				></div>
			</cosmoz-bottom-bar>
		`);

		await nextFrame();
	});

	test('First button should be in toolbar slot', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const item = bottomBar.querySelector(
			'#bottomBarWithOverflowingButtonItem1',
		);
		assert.include(
			toolbarElements,
			item,
			'First item should be in the toolbar slot',
		);
	});

	test('Second button should be in menu slot', async () => {
		const menuElements = getMenuElements(bottomBar);
		const item = bottomBar.querySelector(
			'#bottomBarWithOverflowingButtonItem2',
		);
		assert.include(
			menuElements,
			item,
			'Second item should be in the menu slot',
		);
	});

	test('menu button should be visible', async () => {
		assert.isTrue(
			bottomBar.hasAttribute('has-menu-items'),
			'Should have has-menu-items attribute',
		);
	});

	test('menu items should be the actual elements (not clones)', async () => {
		const menuSlot = bottomBar.shadowRoot.querySelector('#bottomBarMenu');
		const assignedElements = menuSlot.assignedElements({ flatten: true });

		assert.isAbove(assignedElements.length, 0, 'Should have menu items');

		// The menu items should be the same DOM elements, not synthetic clones
		const item = bottomBar.querySelector(
			'#bottomBarWithOverflowingButtonItem2',
		);
		assert.include(
			assignedElements,
			item,
			'Menu slot should contain the actual element, not a clone',
		);
	});
});

suite('bottomBarMaxToolbarItems', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 400px; max-width: 400px"
			>
				<div
					id="bottomBarMaxToolbarItemsItem1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="bottomBarMaxToolbarItemsItem2"
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="bottomBarMaxToolbarItemsItem3"
					style="width: 50px; height: 32px; background: green"
				></div>
				<div
					id="bottomBarMaxToolbarItemsItem4"
					style="width: 50px; height: 32px; background: black"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();
	});

	test('Toolbar should not contain more than max-toolbar-items', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const menuElements = getMenuElements(bottomBar);

		assert.equal(
			toolbarElements.length,
			3,
			'Should have exactly 3 items in toolbar slot',
		);

		assert.equal(
			menuElements.length,
			1,
			'Should have exactly 1 item in menu slot',
		);

		const item4 = bottomBar.querySelector('#bottomBarMaxToolbarItemsItem4');
		assert.include(menuElements, item4, 'Item 4 should be in menu');
	});
});

suite('bottomBarWithPriority', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${1}
				style="min-width: 400px; max-width: 400px"
			>
				<div
					id="lowPriorityItem"
					data-priority="1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="highPriorityItem"
					data-priority="10"
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="noPriorityItem"
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();
	});

	test('Highest priority item should be in toolbar', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const highPriorityItem = bottomBar.querySelector('#highPriorityItem');
		assert.include(
			toolbarElements,
			highPriorityItem,
			'High priority item should be in toolbar',
		);
	});

	test('Lower priority items should be in menu', async () => {
		const menuElements = getMenuElements(bottomBar);
		const lowPriorityItem = bottomBar.querySelector('#lowPriorityItem');
		const noPriorityItem = bottomBar.querySelector('#noPriorityItem');
		assert.include(
			menuElements,
			lowPriorityItem,
			'Low priority item should be in menu',
		);
		assert.include(
			menuElements,
			noPriorityItem,
			'No priority item should be in menu',
		);
	});
});

suite('bottomBarWithHiddenButton', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="bottomBarWithHiddenButtonItem1"
					style="width: 150px; height: 32px; background: red"
				></div>
				<div
					id="bottomBarWithHiddenButtonItem2"
					hidden
					style="width: 150px; height: 32px; background: blue"
				></div>
				<div
					id="bottomBarWithHiddenButtonItem3"
					style="width: 150px; height: 32px; background: green"
				></div>
				<div
					id="bottomBarWithHiddenButtonItem4"
					hidden
					style="width: 150px; height: 32px; background: purple"
				></div>
			</cosmoz-bottom-bar>
		`);

		await nextFrame();
	});

	test('Hidden items should not affect layout', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const menuElements = getMenuElements(bottomBar);

		assert.equal(
			toolbarElements.length,
			2,
			'Should have 2 items in toolbar (hidden items excluded)',
		);
		assert.equal(menuElements.length, 0, 'Should have no menu items');
		assert.isFalse(
			bottomBar.hasAttribute('has-menu-items'),
			'Should not have has-menu-items attribute',
		);

		const dropdown = bottomBar.shadowRoot.querySelector('cosmoz-dropdown-menu');
		assert.equal(
			getComputedStyle(dropdown).display,
			'none',
			'Dropdown should be hidden',
		);
	});

	test('Unhiding item triggers relayout', async () => {
		const item2 = bottomBar.querySelector('#bottomBarWithHiddenButtonItem2');

		item2.hidden = false;
		item2.removeAttribute('hidden');

		await nextFrame();
		await aTimeout(100);

		const toolbarElements = getToolbarElements(bottomBar);
		const menuElements = getMenuElements(bottomBar);

		// Now we have 3 non-hidden items, maxToolbarItems is 3
		assert.equal(
			toolbarElements.length,
			3,
			'Should have 3 items in toolbar after unhiding',
		);
		assert.equal(
			menuElements.length,
			0,
			'Should have no menu items with 3 items and maxToolbarItems=3',
		);
	});
});

suite('height management', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar>
				<div style="width: 50px; height: 32px; background: red"></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();
	});

	test('should have bar with default height', async () => {
		const bar = bottomBar.shadowRoot.querySelector('#bar');
		assert.equal(getComputedStyle(bar).height, '64px');
	});

	test('should transition max-height when active', async () => {
		bottomBar.setAttribute('active', '');
		await nextFrame();
		await aTimeout(330);
		assert.equal(getComputedStyle(bottomBar).display, 'block');
	});

	test('should be hidden when not active', async () => {
		bottomBar.removeAttribute('active');
		await nextFrame();
		await aTimeout(330);
		assert.equal(getComputedStyle(bottomBar).display, 'none');
	});
});

suite('toggle bottom bar', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar>
				<div style="width: 50px; height: 32px; background: red"></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();
		await aTimeout(330);
	});

	test('should not be visible initially', () => {
		assert.isFalse(bottomBar.hasAttribute('active'));
		assert.equal(getComputedStyle(bottomBar).display, 'none');
	});

	test('should be visible when active', async () => {
		bottomBar.setAttribute('active', '');
		await nextFrame();
		await aTimeout(330);
		assert.isTrue(bottomBar.hasAttribute('active'));
		assert.equal(getComputedStyle(bottomBar).display, 'block');
	});
});

suite('slot-based distribution', () => {
	test('items with slot="bottom-bar-toolbar" should stay in toolbar', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar active>
				<div
					slot="bottom-bar-toolbar"
					id="preSlottedToolbar"
					style="width: 50px; height: 32px; background: red"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const item = bottomBar.querySelector('#preSlottedToolbar');
		assert.equal(
			item.getAttribute('slot'),
			'bottom-bar-toolbar',
			'Pre-slotted toolbar item should remain in toolbar slot',
		);
	});

	test('items are distributed from default slot to named slots', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar active .maxToolbarItems=${1}>
				<div
					id="item1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="item2"
					style="width: 50px; height: 32px; background: blue"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const item1 = bottomBar.querySelector('#item1');
		const item2 = bottomBar.querySelector('#item2');

		// After distribution, items should have been moved to named slots
		assert.isTrue(
			item1.getAttribute('slot') === 'bottom-bar-toolbar' ||
				item2.getAttribute('slot') === 'bottom-bar-toolbar',
			'One item should be in toolbar slot',
		);
		assert.isTrue(
			item1.getAttribute('slot') === 'bottom-bar-menu' ||
				item2.getAttribute('slot') === 'bottom-bar-menu',
			'One item should be in menu slot',
		);
	});

	test('CSS classes are applied correctly', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar active .maxToolbarItems=${1}>
				<div
					id="item1"
					data-priority="10"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="item2"
					style="width: 50px; height: 32px; background: blue"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const toolbarItems = getToolbarElements(bottomBar);
		const menuItems = getMenuElements(bottomBar);

		toolbarItems.forEach((item) => {
			assert.isTrue(
				item.classList.contains('cosmoz-bottom-bar-toolbar'),
				'Toolbar items should have toolbar class',
			);
			assert.isFalse(
				item.classList.contains('cosmoz-bottom-bar-menu'),
				'Toolbar items should not have menu class',
			);
		});

		menuItems.forEach((item) => {
			assert.isTrue(
				item.classList.contains('cosmoz-bottom-bar-menu'),
				'Menu items should have menu class',
			);
			assert.isFalse(
				item.classList.contains('cosmoz-bottom-bar-toolbar'),
				'Menu items should not have toolbar class',
			);
		});
	});
});
