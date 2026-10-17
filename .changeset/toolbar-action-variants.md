---
'@neovici/cosmoz-bottom-bar': major
---

Toolbar actions own their appearance. Replace plain toolbar `<button>` elements with `cosmoz-button` and choose their `variant` and `size`. Remove obsolete `unstyled` attributes.

Actions that observe `variant` use `variant="tertiary" size="sm"` in the overflow menu, then regain their authored variant and size in the toolbar. Wrappers must forward these attributes to their button.

Use a shared button inside `cosmoz-dropdown-next` for the overflow trigger and keep long menus scrollable. Style the overflow through the `menu` part or `--cosmoz-dropdown-menu-*` properties; the former dropdown `button` and `content` parts are removed. Close the menu after selecting an action.
