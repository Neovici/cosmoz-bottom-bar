cosmoz-bottom-bar
==================

[![Build Status](https://github.com/Neovici/cosmoz-bottom-bar/workflows/Github%20CI/badge.svg)](https://github.com/Neovici/cosmoz-bottom-bar/actions?workflow=Github+CI)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/Neovici/cosmoz-bottom-bar)
[![pnpm](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-changesets-e10079.svg)](https://github.com/changesets/changesets)
[![Depfu](https://badges.depfu.com/badges/8b56008467d80932f1a2deecefa0728c/overview.svg)](https://depfu.com/github/Neovici/cosmoz-bottom-bar?project_id=9732)

## &lt;cosmoz-bottom-bar&gt;

**cosmoz-bottom-bar** is a responsive bottom-bar that can house buttons/actions and a menu for the buttons that won't fit the available width.

Example:

<!---
```
<custom-element-demo>
	<template>
		<script src="../webcomponentsjs/webcomponents-lite.js"></script>
		<link rel="import" href="cosmoz-bottom-bar.html">
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
<div style="padding: 0 18px;">
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
<cosmoz-bottom-bar active>
	<div slot="info">5 dummy actions</div>
	<paper-button>Action 1</paper-button>
	<paper-button>Action 2</paper-button>
	<paper-button>Action 3</paper-button>
	<paper-button>Action 4</paper-button>
	<paper-button>Action 5</paper-button>
</cosmoz-bottom-bar>
```

## Styling slotted actions

Actions slotted into the toolbar are painted as brand buttons, because most
consumers slot a bare `<button>` or `<a>`:

```html
<cosmoz-bottom-bar active>
	<button>Save</button>
</cosmoz-bottom-bar>
```

An element that already styles itself has to be left alone, or it gets painted
twice — the bar gives the host a 40px padded box and the component's own button
overflows it, which reads as two stacked buttons.

`cosmoz-button` is excluded by tag, so it needs no attribute:

```html
<cosmoz-bottom-bar active>
	<cosmoz-button>Save</cosmoz-button>
</cosmoz-bottom-bar>
```

Any other self-styling element opts out with `unstyled`:

```html
<cosmoz-bottom-bar active>
	<my-fancy-button unstyled>Save</my-fancy-button>
</cosmoz-bottom-bar>
```

`unstyled` also suppresses the bar's `[disabled]` and `:hover` rules, so an
opted-out element owns all of its own states.

## Releasing

This project uses [changesets](https://github.com/changesets/changesets) for versioning and releases.

### Creating a changeset

To document a change that should be included in the next release, run:

```bash
npm run changeset
```

This will prompt you to select the type of version bump (major, minor, or patch) and describe the change.

### Publishing

When changes are merged to the main branch, the CI will automatically:

1. Create a version bump based on the changesets
2. Update the changelog
3. Publish to npm
