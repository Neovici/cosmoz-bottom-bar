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

suite('hidden tracking - reproduction tests', () => {
	test('initially hidden item gets slot assigned when unhidden', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="visible1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="hidden1"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const hidden1 = bottomBar.querySelector('#hidden1');

		// Unhide the item
		hidden1.removeAttribute('hidden');

		await nextFrame();
		await aTimeout(200);

		// The previously hidden item should now have a slot assigned
		const slot = hidden1.getAttribute('slot');
		assert.isTrue(
			slot === 'bottom-bar-toolbar' || slot === 'bottom-bar-menu',
			`Unhidden item should be in toolbar or menu slot, got slot="${slot}"`,
		);

		// Both items should be in toolbar (maxToolbarItems=3, only 2 items)
		const toolbarElements = getToolbarElements(bottomBar);
		assert.equal(toolbarElements.length, 2, 'Should have 2 items in toolbar');
		assert.include(
			toolbarElements,
			hidden1,
			'Previously hidden item should be in toolbar',
		);
	});

	test('initially hidden item gets correct slot when unhidden (more items than toolbar)', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${1}
				style="min-width: 500px; max-width: 510px"
			>
				<div id="vis1" style="width: 50px; height: 32px; background: red"></div>
				<div
					id="hid1"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="vis2"
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// Initially: vis1 in toolbar, vis2 in menu, hid1 nowhere
		let toolbarElements = getToolbarElements(bottomBar);
		let menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 1, 'Initial: 1 toolbar item');
		assert.equal(menuElements.length, 1, 'Initial: 1 menu item');

		// Unhide hid1
		const hid1 = bottomBar.querySelector('#hid1');
		hid1.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(200);

		// Now: 3 visible items, maxToolbarItems=1, so 1 toolbar + 2 menu
		toolbarElements = getToolbarElements(bottomBar);
		menuElements = getMenuElements(bottomBar);

		assert.equal(toolbarElements.length, 1, 'After unhide: 1 toolbar item');
		assert.equal(menuElements.length, 2, 'After unhide: 2 menu items');
	});

	test('hiding a visible item triggers relayout', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${1}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="itemA"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="itemB"
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="itemC"
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// Initially: 1 toolbar + 2 menu
		let toolbarElements = getToolbarElements(bottomBar);
		let menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 1, 'Initial: 1 toolbar');
		assert.equal(menuElements.length, 2, 'Initial: 2 menu');

		// Hide two items - should leave only 1 visible item in toolbar
		bottomBar.querySelector('#itemB').setAttribute('hidden', '');
		bottomBar.querySelector('#itemC').setAttribute('hidden', '');

		await nextFrame();
		await aTimeout(200);

		toolbarElements = getToolbarElements(bottomBar);
		menuElements = getMenuElements(bottomBar);

		assert.equal(toolbarElements.length, 1, 'After hiding: 1 toolbar item');
		assert.equal(menuElements.length, 0, 'After hiding: 0 menu items');
		assert.isFalse(
			bottomBar.hasAttribute('has-menu-items'),
			'No menu items attribute',
		);
	});

	test('all items initially hidden, then unhide one', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="allHid1"
					hidden
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="allHid2"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// Initially: no visible items
		let toolbarElements = getToolbarElements(bottomBar);
		let menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 0, 'Initial: no toolbar items');
		assert.equal(menuElements.length, 0, 'Initial: no menu items');

		// Unhide one
		const allHid1 = bottomBar.querySelector('#allHid1');
		allHid1.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(200);

		toolbarElements = getToolbarElements(bottomBar);
		menuElements = getMenuElements(bottomBar);

		assert.equal(toolbarElements.length, 1, 'After unhide: 1 toolbar item');
		assert.include(toolbarElements, allHid1, 'allHid1 should be in toolbar');
	});

	test('multiple hide/unhide cycles work correctly', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${2}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="cycle1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="cycle2"
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="cycle3"
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// Cycle 1: hide cycle1
		const cycle1 = bottomBar.querySelector('#cycle1');
		cycle1.setAttribute('hidden', '');
		await nextFrame();
		await aTimeout(200);

		let toolbarElements = getToolbarElements(bottomBar);
		let menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 2, 'Cycle 1: 2 toolbar items');
		assert.equal(menuElements.length, 0, 'Cycle 1: 0 menu items');

		// Cycle 2: unhide cycle1
		cycle1.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(200);

		toolbarElements = getToolbarElements(bottomBar);
		menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 2, 'Cycle 2: 2 toolbar items');
		assert.equal(menuElements.length, 1, 'Cycle 2: 1 menu item');

		// Cycle 3: hide cycle1 again
		cycle1.setAttribute('hidden', '');
		await nextFrame();
		await aTimeout(200);

		toolbarElements = getToolbarElements(bottomBar);
		menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 2, 'Cycle 3: 2 toolbar items');
		assert.equal(menuElements.length, 0, 'Cycle 3: 0 menu items');
	});

	test('hidden item slot attribute after layout', async () => {
		// This test checks what slot attribute hidden items end up with
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${1}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="slotCheck1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="slotCheck2"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const slotCheck2 = bottomBar.querySelector('#slotCheck2');

		// The hidden item should NOT have a slot attribute set (it was filtered out in getElements)
		// When unhidden, the MutationObserver should trigger doLayout which should assign a slot.

		// Now unhide and verify it gets a slot
		slotCheck2.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(200);

		const slotAfterUnhide = slotCheck2.getAttribute('slot');
		assert.isTrue(
			slotAfterUnhide === 'bottom-bar-toolbar' ||
				slotAfterUnhide === 'bottom-bar-menu',
			`After unhide, item should have a named slot, got: "${slotAfterUnhide}"`,
		);
	});

	test('dynamically added hidden element, then unhidden', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="existing1"
					style="width: 50px; height: 32px; background: red"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// Dynamically add a hidden element
		const newEl = document.createElement('div');
		newEl.id = 'dynamic1';
		newEl.hidden = true;
		newEl.style.cssText = 'width: 50px; height: 32px; background: yellow';
		bottomBar.appendChild(newEl);

		await nextFrame();
		await aTimeout(200);

		// Should still only have 1 visible toolbar item
		let toolbarElements = getToolbarElements(bottomBar);
		assert.equal(
			toolbarElements.length,
			1,
			'After adding hidden: 1 toolbar item',
		);

		// Now unhide it
		newEl.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(200);

		toolbarElements = getToolbarElements(bottomBar);
		assert.equal(
			toolbarElements.length,
			2,
			'After unhiding dynamic: 2 toolbar items',
		);
		assert.include(
			toolbarElements,
			newEl,
			'Dynamic element should be in toolbar',
		);
	});
});

suite('hidden tracking - edge cases with slotchange', () => {
	test('rapid hide/unhide does not cause layout issues', async () => {
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${2}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="rapid1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="rapid2"
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="rapid3"
					hidden
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const rapid3 = bottomBar.querySelector('#rapid3');

		// Rapid hide/unhide without waiting
		rapid3.removeAttribute('hidden');
		rapid3.setAttribute('hidden', '');
		rapid3.removeAttribute('hidden');

		await nextFrame();
		await aTimeout(200);

		const toolbarElements = getToolbarElements(bottomBar);
		const menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 2, 'Should have 2 toolbar items');
		assert.equal(menuElements.length, 1, 'Should have 1 menu item');
	});

	test('unhiding item that was hidden before first layout', async () => {
		// This tests the scenario where an item is hidden in the initial HTML
		// and the MutationObserver might not be set up for it
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${3}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="preHid1"
					hidden
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="preHid2"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="preHid3"
					hidden
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// All hidden - nothing visible
		assert.equal(
			getToolbarElements(bottomBar).length,
			0,
			'No toolbar items initially',
		);

		// Unhide all at once
		bottomBar.querySelector('#preHid1').removeAttribute('hidden');
		bottomBar.querySelector('#preHid2').removeAttribute('hidden');
		bottomBar.querySelector('#preHid3').removeAttribute('hidden');

		await nextFrame();
		await aTimeout(200);

		const toolbarElements = getToolbarElements(bottomBar);
		const menuElements = getMenuElements(bottomBar);
		assert.equal(toolbarElements.length, 3, 'All 3 should be in toolbar');
		assert.equal(menuElements.length, 0, 'No menu items');
	});

	test('slotchange on toolbar slot does not interfere with hidden tracking', async () => {
		// When items move to toolbar slot, it triggers slotchange on that slot
		// This test ensures the cascading slotchange doesn't break anything
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${1}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="sc1"
					data-priority="1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="sc2"
					data-priority="10"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="sc3"
					data-priority="5"
					style="width: 50px; height: 32px; background: green"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		// sc2 is hidden and has highest priority - when unhidden it should become toolbar item
		const sc2 = bottomBar.querySelector('#sc2');
		sc2.removeAttribute('hidden');

		await nextFrame();
		await aTimeout(200);

		const toolbarElements = getToolbarElements(bottomBar);
		const menuElements = getMenuElements(bottomBar);

		// sc2 has highest priority (10), should be in toolbar
		assert.equal(toolbarElements.length, 1, '1 toolbar item');
		assert.include(
			toolbarElements,
			sc2,
			'Highest priority item should be in toolbar',
		);
		assert.equal(menuElements.length, 2, '2 menu items');
	});

	test('hidden element with slot already set from previous layout', async () => {
		// Scenario: element was visible, got layout, then hidden, then unhidden
		// When hidden, it might still have slot="bottom-bar-toolbar" from before
		const bottomBar = await fixture(html`
			<cosmoz-bottom-bar
				active
				.maxToolbarItems=${2}
				style="min-width: 500px; max-width: 510px"
			>
				<div
					id="prevSlot1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="prevSlot2"
					style="width: 50px; height: 32px; background: blue"
				></div>
			</cosmoz-bottom-bar>
		`);
		await nextFrame();

		const prevSlot2 = bottomBar.querySelector('#prevSlot2');

		// Verify it has a slot from initial layout
		assert.isTrue(
			prevSlot2.getAttribute('slot') === 'bottom-bar-toolbar' ||
				prevSlot2.getAttribute('slot') === 'bottom-bar-menu',
			'Should have a slot from initial layout',
		);

		// Hide it
		prevSlot2.setAttribute('hidden', '');
		await nextFrame();
		await aTimeout(200);

		// It's hidden but still has its old slot attribute — toolbar should only show prevSlot1
		let toolbarElements = getToolbarElements(bottomBar);
		assert.equal(toolbarElements.length, 1, 'After hide: 1 toolbar item');

		// Unhide it
		prevSlot2.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(200);

		toolbarElements = getToolbarElements(bottomBar);
		assert.equal(toolbarElements.length, 2, 'After unhide: 2 toolbar items');
	});
});

suite('hidden tracking - nested slot (bottomBarSlots pattern)', () => {
	// This simulates the pattern where cosmoz-bottom-bar is used inside
	// another web component that uses bottomBarSlots to re-project slots
	let wrapper;

	setup(async () => {
		// Define a wrapper component if not already defined
		if (!customElements.get('test-wrapper')) {
			class TestWrapper extends HTMLElement {
				constructor() {
					super();
					const shadow = this.attachShadow({ mode: 'open' });
					shadow.innerHTML = `
						<cosmoz-bottom-bar active max-toolbar-items="3" style="min-width: 500px; max-width: 510px">
							<slot name="extra" slot="extra"></slot>
							<slot name="bottom-bar-toolbar" slot="bottom-bar-toolbar"></slot>
							<slot name="bottom-bar-menu" slot="bottom-bar-menu"></slot>
							<slot></slot>
						</cosmoz-bottom-bar>
					`;
				}
			}
			customElements.define('test-wrapper', TestWrapper);
		}

		wrapper = await fixture(html`
			<test-wrapper>
				<div
					id="nested1"
					style="width: 50px; height: 32px; background: red"
				></div>
				<div
					id="nested2"
					hidden
					style="width: 50px; height: 32px; background: blue"
				></div>
				<div
					id="nested3"
					style="width: 50px; height: 32px; background: green"
				></div>
			</test-wrapper>
		`);

		await nextFrame();
		await aTimeout(200);
	});

	test('initial layout through nested slots', async () => {
		// The visible items should be distributed through nested slots
		const nested1 = wrapper.querySelector('#nested1');
		const nested3 = wrapper.querySelector('#nested3');

		const slot1 = nested1.getAttribute('slot');
		const slot3 = nested3.getAttribute('slot');
		assert.isTrue(
			slot1 === 'bottom-bar-toolbar' || slot1 === 'bottom-bar-menu',
			'nested1 should have a named slot',
		);
		assert.isTrue(
			slot3 === 'bottom-bar-toolbar' || slot3 === 'bottom-bar-menu',
			'nested3 should have a named slot',
		);
	});

	test('unhiding nested item works', async () => {
		const nested2 = wrapper.querySelector('#nested2');

		nested2.removeAttribute('hidden');
		await nextFrame();
		await aTimeout(300);

		// The item should now be visible and have a slot
		const slot = nested2.getAttribute('slot');
		assert.isTrue(
			slot === 'bottom-bar-toolbar' || slot === 'bottom-bar-menu',
			`After unhide, nested item should have a named slot, got: "${slot}"`,
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
