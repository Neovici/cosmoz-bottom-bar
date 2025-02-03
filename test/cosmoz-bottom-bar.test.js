import { assert, fixture, html, nextFrame, aTimeout } from '@open-wc/testing';

import '../src/cosmoz-bottom-bar.ts';

const getToolbarElements = (bottomBar) => {
	const slot = bottomBar.shadowRoot.querySelector(
		'slot[name="bottom-bar-toolbar"]',
	);
	return slot?.assignedElements() ?? [];
};

const getMenuElements = (bottomBar) => {
	const slot = bottomBar.shadowRoot.querySelector(
		'slot[name="bottom-bar-menu"]',
	);
	return slot?.assignedElements() ?? [];
};

const visibleFilter = (item) => item.offsetWidth > 0 && item.offsetHeight > 0;

suite('bottomBarWithoutMenu', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar style="min-width: 200px; max-width: 200px">
				<div
					style="width: 50px; height: 32px; background: red"
					id="bottomBarWithoutMenuItem"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();
		// Wait for layout
		const toolbarSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-toolbar"]',
		);
		toolbarSlot.dispatchEvent(new Event('slotchange'));
		await nextFrame();
	});

	test('button should be placed in toolbar', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const item = toolbarElements[0];

		// Test slot assignment
		assert.equal(item.id, 'bottomBarWithoutMenuItem');
		assert.equal(item.getAttribute('slot'), 'bottom-bar-toolbar');

		// Test actual DOM presence
		const toolbarSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-toolbar"]',
		);
		const assignedElements = toolbarSlot.assignedElements();
		assert.equal(
			assignedElements[0],
			item,
			'Item should be present in toolbar slot',
		);
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
			<cosmoz-bottom-bar style="min-width: 300px; max-width: 300px">
				<div
					style="width: 200px; height: 32px; background: red"
					id="bottomBarWithOverflowingButtonItem1"
				></div>
				<div
					style="width: 200px; height:32px; background: blue"
					id="bottomBarWithOverflowingButtonItem2"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();
	});

	test('First button should be placed in toolbar', async () => {
		const toolbarElements = getToolbarElements(bottomBar);
		const item = toolbarElements[0];

		// Test slot assignment
		assert.equal(item.id, 'bottomBarWithOverflowingButtonItem1');
		assert.equal(item.getAttribute('slot'), 'bottom-bar-toolbar');

		// Test actual DOM presence
		const toolbarSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-toolbar"]',
		);
		const assignedElements = toolbarSlot.assignedElements();
		assert.equal(
			assignedElements[0],
			item,
			'Item should be present in toolbar slot',
		);
	});

	test('Second button should be placed in menu', async () => {
		const menuElements = getMenuElements(bottomBar);
		const item = menuElements[0];

		// Test slot assignment
		assert.equal(item.id, 'bottomBarWithOverflowingButtonItem2');
		assert.equal(item.getAttribute('slot'), 'bottom-bar-menu');

		// Test actual DOM presence
		const menuSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-menu"]',
		);
		const assignedElements = menuSlot.assignedElements();
		assert.equal(
			assignedElements[0],
			item,
			'Item should be present in menu slot',
		);
	});

	test('menu button should be visible', async () => {
		assert.isTrue(bottomBar.hasAttribute('has-menu-items'));
		const dropdown = bottomBar.shadowRoot.querySelector('#dropdown');
		assert.isFalse(dropdown.hasAttribute('hidden'));
	});
});

suite('bottomBarMaxToolbarItems', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar
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

	test('Toolbar should not contains more than max-toolbar-items', async () => {
		const toolbarSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-toolbar"]',
		);
		const menuSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-menu"]',
		);
		const toolbarElements = toolbarSlot.assignedElements();
		const menuElements = menuSlot.assignedElements();

		// Check toolbar items
		assert.equal(
			toolbarElements.length,
			3,
			'Should have exactly 3 toolbar items',
		);
		assert.equal(toolbarElements[0].id, 'bottomBarMaxToolbarItemsItem1');
		assert.equal(toolbarElements[1].id, 'bottomBarMaxToolbarItemsItem2');
		assert.equal(toolbarElements[2].id, 'bottomBarMaxToolbarItemsItem3');

		// Check menu items
		assert.equal(menuElements[0].id, 'bottomBarMaxToolbarItemsItem4');
	});
});

suite('bottomBarWithHiddenButton', () => {
	let bottomBar, toolbarSlot, menuSlot;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 400px; max-width: 410px"
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
		toolbarSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-toolbar"]',
		);
		menuSlot = bottomBar.shadowRoot.querySelector(
			'slot[name="bottom-bar-menu"]',
		);
		await nextFrame();
		// Wait for layout
		toolbarSlot.dispatchEvent(new Event('slotchange'));
		await nextFrame();
	});

	test('Hidden items should not affect layout', async () => {
		const toolbarElements = toolbarSlot.assignedElements();
		const menuElements = menuSlot.assignedElements();
		const visibleToolbarElements = toolbarElements.filter(visibleFilter);

		assert.equal(
			visibleToolbarElements.length,
			2,
			'Should have 2 visible toolbar items',
		);
		assert.equal(
			visibleToolbarElements[0].id,
			'bottomBarWithHiddenButtonItem1',
		);
		assert.equal(
			visibleToolbarElements[1].id,
			'bottomBarWithHiddenButtonItem3',
		);

		const visibleMenuElements = menuElements.filter(visibleFilter);
		assert.equal(
			visibleMenuElements.length,
			0,
			'Should have no visible menu items',
		);

		assert.isFalse(bottomBar.hasAttribute('has-menu-items'));
		const dropdown = bottomBar.shadowRoot.querySelector('cosmoz-dropdown-menu');
		assert.equal(getComputedStyle(dropdown).display, 'none');
	});

	test('Unhiding item', async () => {
		const toolbarElements = toolbarSlot.assignedElements();
		const item1 = toolbarElements[0];
		const item2 = bottomBar.querySelector('#bottomBarWithHiddenButtonItem2');
		const item3 = toolbarElements[1];

		assert.equal(item1.id, 'bottomBarWithHiddenButtonItem1');
		assert.equal(item2.id, 'bottomBarWithHiddenButtonItem2');
		assert.equal(item3.id, 'bottomBarWithHiddenButtonItem3');

		item2.hidden = false;
		item2.removeAttribute('hidden');

		// Trigger a slot change event to force layout update
		toolbarSlot.dispatchEvent(new Event('slotchange'));
		await nextFrame();

		const newToolbarElements = toolbarSlot.assignedElements();
		assert.include(
			newToolbarElements,
			item2,
			'Unhidden item should be in toolbar',
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
		assert.equal(getComputedStyle(bar).height, '64px'); // Fixed height from CSS
	});

	test('should transition max-height when active', async () => {
		bottomBar.setAttribute('active', '');
		await nextFrame();
		await aTimeout(330); // Wait for transition
		assert.equal(getComputedStyle(bottomBar).display, 'block');
	});

	test('should be hidden when not active', async () => {
		await nextFrame();
		await aTimeout(330); // Wait for transition
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
		await aTimeout(330); // Wait for transition
	});

	test('should not be visible initially', () => {
		assert.isFalse(bottomBar.hasAttribute('active'));
		assert.equal(getComputedStyle(bottomBar).display, 'none');
	});

	test('should be visible when active', async () => {
		bottomBar.setAttribute('active', '');
		await nextFrame();
		await aTimeout(330); // Wait for transition
		assert.isTrue(bottomBar.hasAttribute('active'));
		assert.equal(getComputedStyle(bottomBar).display, 'block');
	});
});
