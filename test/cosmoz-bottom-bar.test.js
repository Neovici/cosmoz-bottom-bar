import {
	assert, fixture, html, aTimeout
} from '@open-wc/testing';

import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';

import '../cosmoz-bottom-bar.js';

const isElement = ({ nodeType: type }) => type === Node.ELEMENT_NODE;

suite('bottomBarWithoutMenu',	 () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar style="min-width: 200px; max-width: 200px">
				<div style="width: 50px; height: 32px; background: red" id="bottomBarWithoutMenuItem" ></div>
			</cosmoz-bottom-bar>
		`);
	});

	test('button should be placed in toolbar', () => {
		const item = FlattenedNodesObserver.getFlattenedNodes(bottomBar).find(isElement),
			slot = item.getAttribute('slot');

		assert.equal(item.id, 'bottomBarWithoutMenuItem');
		assert.equal(slot, 'bottom-bar-toolbar');
		assert.equal(item, FlattenedNodesObserver.getFlattenedNodes(bottomBar.$.bottomBarToolbar)[0]);
	});

	test('menu button should be hidden', () => {
		assert.isTrue(bottomBar.$.menu.hidden);
	});
});

suite('bottomBarWithOverflowingButton', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar style="min-width: 300px; max-width: 300px">
				<div style="width: 200px; height: 32px; background: red" id="bottomBarWithOverflowingButtonItem1"></div>
				<div style="width: 200px; height:32px; background: blue" id="bottomBarWithOverflowingButtonItem2"></div>
			</cosmoz-bottom-bar>
		`);
		bottomBar._layoutDebouncer.flush();
	});

	test('First button should be placed in toolbar', () => {
		const item = FlattenedNodesObserver.getFlattenedNodes(bottomBar).find(isElement),
			slot = item.getAttribute('slot');

		assert.equal(slot, 'bottom-bar-toolbar');
		assert.equal(item.id, 'bottomBarWithOverflowingButtonItem1');
		assert.equal(item, FlattenedNodesObserver.getFlattenedNodes(bottomBar.$.bottomBarToolbar)[0]);

	});

	test('Second button should be placed in menu', () => {
		const item = FlattenedNodesObserver.getFlattenedNodes(bottomBar).filter(isElement)[1],
			slot = item.getAttribute('slot');
		assert.equal(slot, 'bottom-bar-menu');
		assert.equal(item.id, 'bottomBarWithOverflowingButtonItem2');
		assert.equal(item, FlattenedNodesObserver.getFlattenedNodes(bottomBar.$.bottomBarMenu)[0]);
	});

	test('menu button should be visible', () => {
		bottomBar._layoutDebouncer.flush(); //flush again to update hidden
		assert.isFalse(bottomBar.$.menu.hidden);
	});

});

suite('bottomBarMaxToolbarItems', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar max-toolbar-items="3" style="min-width:400px; max-width: 400px">
				<div id="bottomBarMaxToolbarItemsItem1" style="width: 50px; height: 32px; background: red"></div>
				<div id="bottomBarMaxToolbarItemsItem2" style="width: 50px; height: 32px; background: blue"></div>
				<div id="bottomBarMaxToolbarItemsItem3" style="width: 50px; height: 32px; background: green"></div>
				<div id="bottomBarMaxToolbarItemsItem4" style="width: 50px; height: 32px; background: black"></div>
			</cosmoz-bottom-bar>
		`);
		bottomBar._layoutDebouncer.flush();
	});

	test('Toolbar should not contains more than max-toolbar-items', () => {
		const toolBarNodes = FlattenedNodesObserver.getFlattenedNodes(bottomBar.$.bottomBarToolbar),
			item1 = toolBarNodes[0],
			item2 = toolBarNodes[1],
			item3 = toolBarNodes[2],
			item4 = FlattenedNodesObserver.getFlattenedNodes(bottomBar.$.bottomBarMenu)[0];

		assert.equal(toolBarNodes.length, 3);
		assert.equal(item1.id, 'bottomBarMaxToolbarItemsItem1');
		assert.equal(item2.id, 'bottomBarMaxToolbarItemsItem2');
		assert.equal(item3.id, 'bottomBarMaxToolbarItemsItem3');
		assert.equal(item4.id, 'bottomBarMaxToolbarItemsItem4');
	});
});

suite('bottomBarWithHiddenButton', () => {
	let bottomBar,
		toolbar,
		menu;

	const visibleFilter = item => item.offsetWidth > 0 && item.offsetHeight > 0;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar active style="min-width:400px; max-width: 410px" max-toolbar-items="3">
				<div id="bottomBarWithHiddenButtonItem1" style="width: 150px; height: 32px; background: red"></div>
				<div id="bottomBarWithHiddenButtonItem2" hidden style="width: 150px; height: 32px; background: blue"></div>
				<div id="bottomBarWithHiddenButtonItem3" style="width: 150px; height: 32px; background: green"></div>
				<div id="bottomBarWithHiddenButtonItem4" hidden style="width: 150px; height: 32px; background: purple"></div>
			</cosmoz-bottom-bar>
		`);
		toolbar = bottomBar.$.bottomBarToolbar;
		menu = bottomBar.$.bottomBarMenu;
		bottomBar._layoutDebouncer.flush();
	});

	test('Hidden items should not affect layout', () => {
		const toolbarItems = FlattenedNodesObserver.getFlattenedNodes(toolbar),
			menuItems = FlattenedNodesObserver.getFlattenedNodes(menu),
			item1 = toolbarItems[0],
			item3 = toolbarItems[1],
			visibleMenuItems = menuItems.filter(visibleFilter).length,
			visibleToolbarCount = toolbarItems.filter(visibleFilter).length;

		assert.equal(item1.id, 'bottomBarWithHiddenButtonItem1');
		assert.equal(item3.id, 'bottomBarWithHiddenButtonItem3');

		assert.equal(visibleToolbarCount, 2);
		assert.equal(visibleMenuItems, 0);
		assert.isTrue(bottomBar.$.menu.hidden);
	});

	test('Unhiding item', async () => {
		const toolBarNodes = FlattenedNodesObserver.getFlattenedNodes(toolbar),
			item1 = toolBarNodes[0],
			menuItems = FlattenedNodesObserver.getFlattenedNodes(menu),
			item2 = menuItems[0],
			item3 =	toolBarNodes[1];

		assert.equal(item1.id, 'bottomBarWithHiddenButtonItem1');
		assert.equal(item2.id, 'bottomBarWithHiddenButtonItem2');
		assert.equal(item3.id, 'bottomBarWithHiddenButtonItem3');

		item2.hidden  = false;
		item2.removeAttribute('hidden');
		bottomBar._debounceLayoutActions();
		bottomBar._layoutDebouncer.flush();

		const newToolBarNodes = FlattenedNodesObserver.getFlattenedNodes(toolbar);
		console.warn(newToolBarNodes.map(({id})=>id).join(','))

		assert.include(newToolBarNodes, item2);
	});
});

suite('height management', () => {
	let heightManagementParent,
		bottomBar;

	setup(async () => {
		heightManagementParent = await fixture(html`
			<div id="heightManagementParent" style="min-height: 100px; max-height: 100px">
				<cosmoz-bottom-bar>
					<div style="width: 50px; height: 32px; background: red"></div>
				</cosmoz-bottom-bar>
			</div>
		`);
		bottomBar = heightManagementParent.querySelector('cosmoz-bottom-bar');
	});

	test('setting matchParent to true should set bottom-bar height to the height of the parent', () => {
		bottomBar.matchParent = true;
		assert.equal(bottomBar.offsetHeight, 100);
	});

	test('setting matchParent to false should set bottom-bar height to the height of the bar', () => {
		bottomBar.matchParent = false;
		assert.equal(bottomBar.offsetHeight, bottomBar.barHeight);
	});
});

suite('toggle bottom bar', () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar style="min-height: 100px; max-height: 100px">
				<div style="width: 50px; height: 32px; background: red"></div>
			</cosmoz-bottom-bar>
		`);
	});

	test('menu should not be visible on screen', () => {
		assert.isFalse(bottomBar.visible);
	});

	test('menu should be visible on screen', () => {
		bottomBar.active = true;
		bottomBar._layoutDebouncer.flush();
		assert.isTrue(bottomBar.visible);
	});

});
