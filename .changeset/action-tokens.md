---
"@neovici/cosmoz-bottom-bar": minor
---

Fill buttons with the `action` tokens

Buttons now read `--cz-color-bg-action-solid`, `--cz-color-bg-action-solid-hover`
and `--cz-color-text-on-action`, so they stay gray while the brand hue marks
selection. They fall back to the previous brand tokens, so older cosmoz-tokens
versions render as before.
