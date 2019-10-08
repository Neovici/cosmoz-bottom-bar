cosmoz-bottom-bar
==================

[![Build Status](https://github.com/Neovici/cosmoz-bottom-bar/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-bottom-bar/actions?workflow=Github+CI)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-bottom-bar)[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

## &lt;cosmoz-bottom-bar&gt;

**cosmoz-bottom-bar** is a responsive bottom-bar that can house buttons/actions and a menu for the buttons that won't fit the available width.

Example:

<!---
```
<custom-element-demo>
	<template>
		<script src="../webcomponentsjs/webcomponents-lite.js"></script>
		<link rel="import" href="cosmoz-bottom-bar-view.html">
		<link rel="import" href="../paper-button/paper-button.html">
		<style>
			body {
				background-color: lightblue;
				font-family: sans-serif;
				margin: 0;
				height: 100vh;
				flex-direction: column;
				display: flex;
			}
			p {
				margin: 40px 0;
			}
		</style>
		<next-code-block></next-code-block>
	</template>
</custom-element-demo>
```
-->
```html
<cosmoz-bottom-bar-view>
	<div slot="scroller-content" style="padding: 0 18px;">
		<h3>Sample page</h3>
		<p>Nam non enim vitae mauris pharetra semper nec sed lectus.</p>
		<p>Maecenas gravida sollicitudin mauris, id gravida odio commodo iaculis.</p>
		<p>Nulla pulvinar justo vel sodales sollicitudin.</p>
		<p>Proin turpis tortor, sagittis sit amet consequat ut, tempor non velit.</p>
		<p>Proin finibus elit libero, vitae scelerisque lacus maximus ac.</p>
		<p>Vivamus ut finibus ligula. Mauris sollicitudin vitae orci eu scelerisque.</p>
		<p>Duis nec placerat mauris, at tincidunt libero.</p>
		<p>Nullam non magna eget mauris porta tempor.</p>
		<p>Proin non sagittis enim.</p>
		<p>Sed pharetra ante ipsum, in porta dolor sagittis non.</p>
		<p>Cras odio quam, pretium consectetur finibus eu, elementum at risus.</p>
		<p>Proin feugiat vitae sem eu imperdiet.</p>
	</div>
	<div slot="info">5 dummy actions</div>
	<paper-button>Action 1</paper-button>
	<paper-button>Action 2</paper-button>
	<paper-button>Action 3</paper-button>
	<paper-button>Action 4</paper-button>
	<paper-button>Action 5</paper-button>
</cosmoz-bottom-bar-view>
```