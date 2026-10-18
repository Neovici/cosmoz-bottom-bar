---
'@neovici/cosmoz-bottom-bar': minor
---

Keep overflow and extra controls reachable by moving actions that exceed the available width into the menu. Recalculate on resize, action content changes and maxToolbarItems changes. Use shared glass tokens and 44px controls on mobile across all consumers.

Use a tertiary More actions trigger so overflow navigation does not compete with primary actions.

Anchor the mobile primary action to the left with a wider glass button, hide empty information space, and keep overflow and extra controls aligned to the right. Move labels that cannot fit into the action menu without clipping either edge. Preserve the desktop layout and populated information slot.

Present mobile overflow actions in a native modal sheet with a translated heading, Close control, 48px rows and a bounded scrolling group. Preserve the original action elements, native focus containment and Escape/backdrop dismissal. Close the sheet when switching to the compact desktop popover. Keep the mobile toolbar transparent and compact so it can sit above application navigation without an extra outlined band.
