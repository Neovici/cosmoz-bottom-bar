cosmoz-bottom-bar
==================

[![Build Status](https://travis-ci.org/Neovici/cosmoz-bottom-bar.svg?branch=master)](https://travis-ci.org/Neovici/cosmoz-bottom-bar)

## &lt;cosmoz-bottom-bar&gt;

**cosmoz-bottom-bar** is a responsive bottom-bar that can house buttons/actions and a menu for the buttons that won't fit the available width.

Example:

<!---
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
		<link rel="import" href="../paper-button/paper-button.html">
    <link rel="import" href="cosmoz-bottom-bar.html">
		<style is="custom-style">
			html, body {
				margin: 0;
				min-height: 368px;
				max-height: 368px;
			}
		</style>
    <div id="container">
			<next-code-block></next-code-block>
		</div>
  </template>
</custom-element-demo>
```
-->
```html
<cosmoz-bottom-bar active>
	<div slot="info">My app toolbar</div>
	<paper-button>Button 1</paper-button>
	<paper-button>Button 2</paper-button>
	<paper-button>Button 3</paper-button>
	<paper-button>Button 4</paper-button>
</cosmoz-bottom-bar>
```
