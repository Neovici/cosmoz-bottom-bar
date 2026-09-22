---
'@neovici/cosmoz-bottom-bar': patch
---

Don't paint slotted `cosmoz-button` actions as bare buttons

The toolbar styles every slotted child as a brand button, which is right for the
`<button>`/`<a>` most consumers slot in, but `cosmoz-button` already renders its
own styled button. Both were painted, and because the host is given a 40px
`border-box` with 10px/16px padding, the component's own 40px button overflowed
it — visibly two stacked buttons, the inner one offset by the host's padding.

`cosmoz-button` is now excluded from the toolbar's styling by tag, alongside the
existing `[unstyled]` opt-out, which is also documented now.

Slotted `cosmoz-button`s get narrower, since the toolbar is no longer adding its
own padding on top of the button's.
