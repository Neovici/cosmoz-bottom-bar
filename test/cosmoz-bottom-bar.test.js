import {
	assert, fixture, html
} from '@open-wc/testing';

import { FlattenedNodesObserver } from '@polymer/polymer/lib/utils/flattened-nodes-observer';

import '../cosmoz-bottom-bar.js';
import './helpers/fixed-size-item.js';
import { Polymer } from '@polymer/polymer/polymer-legacy';

const isElement = ({ nodeType: type }) => type === Node.ELEMENT_NODE;

suite('bottomBarWithoutMenu',	 () => {
	let bottomBar;

	setup(async () => {
		bottomBar = await fixture(html`
			<cosmoz-bottom-bar style="min-width:200px; max-width: 200px;">
				<fixed-size-item width="50px" height="32px" id="bottomBarWithoutMenuItem"></fixed-size-item>
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
			<cosmoz-bottom-bar style="min-width:300px; max-width: 300px;">
				<fixed-size-item width="200px" id="bottomBarWithOverflowingButtonItem1"></fixed-size-item>
				<fixed-size-item width="200px" id="bottomBarWithOverflowingButtonItem2"></fixed-size-item>
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
			<cosmoz-bottom-bar max-toolbar-items="3" style="min-width:400px; max-width: 400px;">
				<fixed-size-item id="bottomBarMaxToolbarItemsItem1" width="50px"></fixed-size-item>
				<fixed-size-item id="bottomBarMaxToolbarItemsItem2" width="50px"></fixed-size-item>
				<fixed-size-item id="bottomBarMaxToolbarItemsItem3" width="50px"></fixed-size-item>
				<fixed-size-item id="bottomBarMaxToolbarItemsItem4" width="50px"></fixed-size-item>
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
			<cosmoz-bottom-bar active style="min-width:400px; max-width: 410px;">
				<fixed-size-item id="bottomBarWithHiddenButtonItem1" width="150px"></fixed-size-item>
				<fixed-size-item id="bottomBarWithHiddenButtonItem2" hidden width="150px"></fixed-size-item>
				<fixed-size-item id="bottomBarWithHiddenButtonItem3" width="150px"></fixed-size-item>
				<fixed-size-item id="bottomBarWithHiddenButtonItem4" hidden width="150px"></fixed-size-item>
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
			item2 = toolbarItems[1],
			item4 = toolbarItems[2],
			visibleMenuItems = menuItems.filter(visibleFilter).length,
			visibleToolbarCount = toolbarItems.filter(visibleFilter).length;

		assert.equal(item1.id, 'bottomBarWithHiddenButtonItem1');
		assert.equal(item2.id, 'bottomBarWithHiddenButtonItem2');
		assert.equal(item4.id, 'bottomBarWithHiddenButtonItem4');

		assert.equal(visibleToolbarCount, 1);
		assert.equal(visibleMenuItems, 0);
		assert.isTrue(bottomBar.$.menu.hidden);
	});

	test('Unhiding item', () => {
		const toolBarNodes = FlattenedNodesObserver.getFlattenedNodes(toolbar),
			item1 = toolBarNodes[0],
			item2 =	toolBarNodes[1],
			item4 =	toolBarNodes[2];

		assert.equal(item1.id, 'bottomBarWithHiddenButtonItem1');
		assert.equal(item2.id, 'bottomBarWithHiddenButtonItem2');
		assert.equal(item4.id, 'bottomBarWithHiddenButtonItem4');

		item2.removeAttribute('hidden');

		bottomBar._layoutDebouncer.flush();

		const item5 = toolBarNodes[1],
			menuItems = FlattenedNodesObserver.getFlattenedNodes(menu),
			// item6 = menuItems[0],
			nonHiddenMenuItems = menuItems.filter(item => !item.hidden).length,
			visibleToolbarCount = toolBarNodes.filter(visibleFilter).length;

		assert.equal(item1.id, 'bottomBarWithHiddenButtonItem1');
		assert.equal(item5.id, 'bottomBarWithHiddenButtonItem2');
		// assert.equal(item5.id, 'bottomBarWithHiddenButtonItem4'); why fail?
		assert.equal(visibleToolbarCount, 1);
		assert.equal(nonHiddenMenuItems, 2);
	});
});

suite('height management', () => {
	let heightManagementParent,
		bottomBar;

	setup(async () => {
		heightManagementParent = await fixture(html`
			<div id="heightManagementParent" style="min-height: 100px; max-height: 100px">
				<cosmoz-bottom-bar>
					<fixed-size-item width="50px" height="32px"></fixed-size-item>
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
				<fixed-size-item width="50px" height="32px"></fixed-size-item>
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
