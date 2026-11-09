---
'@neovici/cosmoz-bottom-bar': minor
---

Opening the actions menu from the keyboard (Enter or Space on the menu button, or the `openMenu` shortcut) puts focus on the first menu item, and the arrow keys move between items. Needs `@neovici/cosmoz-dropdown` with `cosmoz-dropdown-list` autofocus.

The "…" button names the app's key for the actions menu in `aria-keyshortcuts` and shows it in its tooltip ("More actions (A)"). Needs `@neovici/cosmoz-utils` with `useShortcut` and `@neovici/cosmoz-button` forwarding `aria-keyshortcuts`.
