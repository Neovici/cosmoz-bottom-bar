import { assert, fixture, html, nextFrame, aTimeout } from '@open-wc/testing';

import '../src/cosmoz-bottom-bar.ts';

// TODO: this should be a function in bottomBar that is imported here.
// Use that definition of hidden not ours.
const getVisibleToolbarElements = (bottomBar) => {
	const children = Array.from(bottomBar.children);

	return children.filter(
		(el) =>
			!el.hidden &&
			!el.hasAttribute('hidden') &&
			el.style.visibility !== 'hidden' &&
			el.dataset.visibility !== 'hidden' &&
			el.offsetWidth > 0 &&
			el.offsetHeight > 0,
	);
};

const getMenuItems = (bottomBar) => {
	const allNonHiddenElements = Array.from(bottomBar.children).filter(
		(el) => !el.hidden && !el.hasAttribute('hidden'),
	);
	const visibleToolbarElements = getVisibleToolbarElements(bottomBar);

	const menuItems = allNonHiddenElements.filter(
		(el) => !visibleToolbarElements.includes(el),
	);

	const hasMenuItems = bottomBar.hasAttribute('has-menu-items');

	return {
		hasMenuItems,
		menuItems,
	};
};

suite('bottomBarWithoutMenu', () => {
	let bottomBar;
	let visibleToolbarElements;
	let hasMenuItems;

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
		visibleToolbarElements = getVisibleToolbarElements(bottomBar);
		({ hasMenuItems } = getMenuItems(bottomBar));
	});

	test('button should be visible in toolbar', async () => {
		const item = bottomBar.querySelector('#bottomBarWithoutMenuItem');
		assert.include(
			visibleToolbarElements,
			item,
			'Item should be visible in the toolbar',
		);
	});

	test('menu button should be hidden', async () => {
		assert.isFalse(hasMenuItems);

		const dropdown = bottomBar.shadowRoot.querySelector('cosmoz-dropdown-menu');
		assert.equal(getComputedStyle(dropdown).display, 'none');
	});
});

suite('bottomBarWithOverflowingButton', () => {
	let bottomBar;
	let visibleToolbarElements;
	let menuItems;
	let hasMenuItems;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar style="min-width: 350px; max-width: 350px">
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
		({ menuItems, hasMenuItems } = getMenuItems(bottomBar));
		visibleToolbarElements = getVisibleToolbarElements(bottomBar);
	});

	test('First button should be visible in toolbar', async () => {
		const item = bottomBar.querySelector(
			'#bottomBarWithOverflowingButtonItem1',
		);
		assert.include(
			visibleToolbarElements,
			item,
			'First item should be visible in the toolbar',
		);
	});

	test('Second button should not be visible in toolbar', async () => {
		const item = bottomBar.querySelector(
			'#bottomBarWithOverflowingButtonItem2',
		);
		assert.notInclude(
			visibleToolbarElements,
			item,
			'Second item should not be visible in the toolbar',
		);
		assert.include(
			menuItems,
			item,
			'Second item should be part of menu elements',
		);
	});

	test('menu button should be visible', async () => {
		assert.isTrue(hasMenuItems, 'Should have has-menu-items attribute');

		const dropdown = bottomBar.shadowRoot.querySelector('#dropdown');
		assert.isFalse(
			dropdown.hasAttribute('hidden'),
			'Dropdown should not be hidden',
		);
	});
});

suite('bottomBarMaxToolbarItems', () => {
	let bottomBar;
	let visibleToolbarElements;
	let menuItems;

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

		visibleToolbarElements = getVisibleToolbarElements(bottomBar);
		({ menuItems } = getMenuItems(bottomBar));
	});

	test('Toolbar should not contain more than max-toolbar-items', async () => {
		assert.equal(
			visibleToolbarElements.length,
			3,
			'Should have exactly 3 visible items in toolbar',
		);

		const item1 = bottomBar.querySelector('#bottomBarMaxToolbarItemsItem1');
		const item2 = bottomBar.querySelector('#bottomBarMaxToolbarItemsItem2');
		const item3 = bottomBar.querySelector('#bottomBarMaxToolbarItemsItem3');
		const item4 = bottomBar.querySelector('#bottomBarMaxToolbarItemsItem4');

		assert.include(visibleToolbarElements, item1, 'Item 1 should be visible');
		assert.include(visibleToolbarElements, item2, 'Item 2 should be visible');
		assert.include(visibleToolbarElements, item3, 'Item 3 should be visible');

		assert.include(menuItems, item4, 'Item 4 should be in menu');
	});
});

suite('bottomBarWithHiddenButton', () => {
	let bottomBar;
	let visibleToolbarElements;
	let menuItems;
	let hasMenuItems;

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

		visibleToolbarElements = getVisibleToolbarElements(bottomBar);
		({ menuItems, hasMenuItems } = getMenuItems(bottomBar));
	});

	test('Hidden items should not affect layout', async () => {
		assert.equal(
			visibleToolbarElements.length,
			2,
			'Should have 2 visible toolbar items with 500px width',
		);

		assert.equal(
			visibleToolbarElements[0].id,
			'bottomBarWithHiddenButtonItem1',
			'First element should be visible',
		);

		assert.equal(
			visibleToolbarElements[1].id,
			'bottomBarWithHiddenButtonItem3',
			'Third element (second non-hidden) should be visible',
		);

		assert.equal(menuItems.length, 0, 'Should have no menu items');
		assert.isFalse(hasMenuItems, 'Should not have has-menu-items attribute');

		const dropdown = bottomBar.shadowRoot.querySelector('cosmoz-dropdown-menu');
		assert.equal(
			getComputedStyle(dropdown).display,
			'none',
			'Dropdown should be hidden',
		);
	});

	test('Unhiding item affects layout appropriately', async () => {
		const item1 = bottomBar.querySelector('#bottomBarWithHiddenButtonItem1');
		const item2 = bottomBar.querySelector('#bottomBarWithHiddenButtonItem2');
		const item3 = bottomBar.querySelector('#bottomBarWithHiddenButtonItem3');

		assert.include(
			visibleToolbarElements,
			item1,
			'Item 1 should initially be visible',
		);
		assert.notInclude(
			visibleToolbarElements,
			item2,
			'Item 2 should initially be hidden',
		);
		assert.include(
			visibleToolbarElements,
			item3,
			'Item 3 should initially be visible',
		);

		item2.hidden = false;
		item2.removeAttribute('hidden');

		await nextFrame();

		const newVisibleElements = getVisibleToolbarElements(bottomBar);
		const { menuItems: newMenuItems, hasMenuItems: newHasMenuItems } =
			getMenuItems(bottomBar);

		const item2Visible = newVisibleElements.includes(item2);
		const item2InMenu = newMenuItems.includes(item2);

		assert.isTrue(
			item2Visible || item2InMenu,
			'Unhidden item2 should either be visible in toolbar or moved to menu',
		);

		assert.isTrue(
			newMenuItems.length > 0,
			'Should have items in the menu when not all visible items fit',
		);
		assert.isTrue(
			newHasMenuItems,
			'Should have has-menu-items attribute when not all visible items fit',
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
