---
"@neovici/cosmoz-bottom-bar": major
---

Stop styling toolbar actions. Render them as `cosmoz-button` instead.

The bar used to paint everything slotted into the toolbar — colour, padding,
height, radius, shadow — so a cancel button looked exactly as important as
the primary action, and a `size` attribute had no effect because the bar
forced its own height. The `unstyled` escape hatch turned all of it off at
once, leaving you with a bare browser button.

The bar now only positions its actions. Appearance comes from the action
itself, which means the full `variant` and `size` range works:

```html
<cosmoz-bottom-bar>
	<cosmoz-button variant="secondary">Cancel</cosmoz-button>
	<cosmoz-button>Approve</cosmoz-button>
	<cosmoz-button variant="destructive" size="sm">Delete</cosmoz-button>
</cosmoz-bottom-bar>
```

Actions that overflow into the menu are switched to `variant="tertiary"
size="sm"` so they read as menu rows, and get their own `variant` and `size`
back when they return to the toolbar. This applies to any element that
observes a `variant` attribute, `cosmoz-button` and components wrapping it,
so wrappers get the same treatment as long as they forward `variant` and
`size`. Plain elements are left as they are.

**Breaking:** plain `<button>` elements are no longer styled by the bar.
Swap them for `cosmoz-button` with the variant you want. `unstyled` is no
longer needed and has no effect.

The ⋮ menu button is an `icon-only` `cosmoz-button` inside
`cosmoz-dropdown-next`, so it matches the actions next to it. The old
dropdown's `button` and `content` parts are gone; style the menu through the
new `menu` part or `--cosmoz-dropdown-menu-*` custom properties. The menu
closes when a row is clicked.

Also upgrades to cosmoz-tokens v4, where dark values follow the page's
`color-scheme` rather than a CSS class.
