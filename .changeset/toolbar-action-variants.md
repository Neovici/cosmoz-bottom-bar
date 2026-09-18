---
"@neovici/cosmoz-bottom-bar": minor
---

Let toolbar actions say whether they are secondary or destructive.

Every action slotted into the bottom bar was painted with the brand fill,
so a cancel button looked exactly as important as the primary action. The
only way out was `unstyled`, which drops the size, padding and radius too.

Slotted actions now honour `variant="secondary"` and `variant="destructive"`,
matching cosmoz-button's variants, while keeping the bar's own sizing. The
default is unchanged.

```html
<button variant="secondary" slot="bottom-bar-toolbar">Cancel</button>
```

Also upgrades to cosmoz-tokens v4, where dark values follow the page's
`color-scheme` rather than a CSS class.
