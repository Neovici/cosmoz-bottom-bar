---
'@neovici/cosmoz-bottom-bar': minor
---

Keep overflow and extra controls reachable by moving actions that exceed the available width into the menu. Recalculate on resize, action content changes and maxToolbarItems changes. Use shared glass tokens and 44px controls on mobile across all consumers.

Use a tertiary More actions trigger so overflow navigation does not compete with primary actions.

Present mobile overflow actions in a wider rounded panel using shared glass tokens, 48px rows and a bounded scrolling list. Require dropdown 8.1.0 for its scroll container. Preserve the compact desktop menu.
