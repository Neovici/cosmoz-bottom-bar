# [11.0.0](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.2.4...v11.0.0) (2026-02-20)


* feat!: revert to slot-based menu distribution ([#318](https://github.com/Neovici/cosmoz-bottom-bar/issues/318)) ([f525170](https://github.com/Neovici/cosmoz-bottom-bar/commit/f525170d273e62eda19703cbc9a5bea9467f6d2f))


### BREAKING CHANGES

* Reverts from IntersectionObserver-based overflow
detection to the v8-style slot-based distribution mechanism.

Children are now collected from a hidden staging slot and distributed
to named slots (bottom-bar-toolbar and bottom-bar-menu) based on
maxToolbarItems and data-priority, instead of using an
IntersectionObserver to detect overflow.

This means:
- Menu items are the actual DOM elements (slotted into the dropdown),
  not synthetic clone buttons
- Consumers must use slot='bottom-bar-toolbar' / slot='bottom-bar-menu'
  for re-distribution through parent components (via bottomBarSlots)
- The overflow.ts IntersectionObserver directive is removed

The Pion/TS component architecture, CSS styling, cosmoz-collapse
toggle animation, and keybinding support are all preserved from v10.

## [10.2.4](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.2.3...v10.2.4) (2026-01-31)


### Bug Fixes

* prevent race condition in overflow detection ([#299](https://github.com/Neovici/cosmoz-bottom-bar/issues/299)) ([54d4955](https://github.com/Neovici/cosmoz-bottom-bar/commit/54d4955493266323d9737f92c265947e7ad2b740))

## [10.2.3](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.2.2...v10.2.3) (2026-01-30)


### Bug Fixes

* elements show up and then dissapear ([#298](https://github.com/Neovici/cosmoz-bottom-bar/issues/298)) ([4e348d2](https://github.com/Neovici/cosmoz-bottom-bar/commit/4e348d242f4e9bd73bf49c00868488effbe2975d))

## [10.2.2](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.2.1...v10.2.2) (2026-01-30)


### Bug Fixes

* match v8 look ([14708b5](https://github.com/Neovici/cosmoz-bottom-bar/commit/14708b5ecaa7b1ffd22ae3be574dd6c1e04f1cad))

## [10.2.1](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.2.0...v10.2.1) (2026-01-29)


### Bug Fixes

* read title attribute from source button for menu text ([#296](https://github.com/Neovici/cosmoz-bottom-bar/issues/296)) ([0f87670](https://github.com/Neovici/cosmoz-bottom-bar/commit/0f87670437165bfa5cbc29e572f2b02c3818d0da))

# [10.2.0](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.1.0...v10.2.0) (2026-01-29)


### Features

* add title attribute to overflow menu buttons ([#295](https://github.com/Neovici/cosmoz-bottom-bar/issues/295)) ([380ce80](https://github.com/Neovici/cosmoz-bottom-bar/commit/380ce80171e379758eaa247a0e4df24a75f64b49))

# [10.1.0](https://github.com/Neovici/cosmoz-bottom-bar/compare/v10.0.0...v10.1.0) (2026-01-28)


### Features

* add duplicate web component check ([#294](https://github.com/Neovici/cosmoz-bottom-bar/issues/294)) ([2c02f05](https://github.com/Neovici/cosmoz-bottom-bar/commit/2c02f053efc7430c235fe1fa1f8d45a8301d9404))

# [10.0.0](https://github.com/Neovici/cosmoz-bottom-bar/compare/v9.5.0...v10.0.0) (2026-01-27)


### Bug Fixes

* repository URL case sensitivity ([661a1f8](https://github.com/Neovici/cosmoz-bottom-bar/commit/661a1f891a84de759dce4ccb33942ed688ff2921))


### Features

* add button styling for cosmoz-dropdown v7 compatibility ([#292](https://github.com/Neovici/cosmoz-bottom-bar/issues/292)) ([126e33d](https://github.com/Neovici/cosmoz-bottom-bar/commit/126e33d9789f911e1cda5019f264b7cf2c3dd68f))


### BREAKING CHANGES

* requires @neovici/cosmoz-dropdown@^7.0.0

# [9.5.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.4.0...v9.5.0) (2025-12-09)


### Features

* dark theme bottom bar toolbar ([#268](https://github.com/neovici/cosmoz-bottom-bar/issues/268)) ([09d2d49](https://github.com/neovici/cosmoz-bottom-bar/commit/09d2d49c0fad58e9cd5674ee61fb71379ce4f5c9))

# [9.4.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.3.0...v9.4.0) (2025-12-02)


### Bug Fixes

* add active prop to bottom-bar components rendered in tests ([9097ac2](https://github.com/neovici/cosmoz-bottom-bar/commit/9097ac2fdb162d77d9c2cfbdd01136b618410b42))


### Features

* add option to skip toggle animation on mount ([987cb19](https://github.com/neovici/cosmoz-bottom-bar/commit/987cb19101fd2c01616f9871414f337e67ce0a1b))
* skip toggle animation on mount ([7ad974a](https://github.com/neovici/cosmoz-bottom-bar/commit/7ad974a4a0130214023ae034fa5fa8b51533e4ac))

# [9.3.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.2.0...v9.3.0) (2025-08-27)


### Bug Fixes

* off-screen rendering bug ([edab3ad](https://github.com/neovici/cosmoz-bottom-bar/commit/edab3adfa103bbe427da7b9812fbe559216cd262))


### Features

* emit reflow event to notify when the button state changes ([3c72d2c](https://github.com/neovici/cosmoz-bottom-bar/commit/3c72d2c7679187e028a998d996519534a1224215))

# [9.2.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.1.2...v9.2.0) (2025-08-12)


### Features

* **botom-bar:** adjust hidden/overflowing state ([f47ec5f](https://github.com/neovici/cosmoz-bottom-bar/commit/f47ec5fef7d0d677bd7ba473c6a28e66cdaf1f88))

## [9.1.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.1.1...v9.1.2) (2025-08-05)


### Bug Fixes

* **deps:** bump cosmoz-dropdown 5.3.0 to 6.2.1 ([49debab](https://github.com/neovici/cosmoz-bottom-bar/commit/49debab67cb2a7ad6416484bdf8c9a114474ed85))

## [9.1.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.1.0...v9.1.1) (2025-08-04)


### Bug Fixes

* automerge workflow ([1ee0b92](https://github.com/neovici/cosmoz-bottom-bar/commit/1ee0b92be4f8c4759aac0c0029ab69e2c32da644))

# [9.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.0.5...v9.1.0) (2025-07-21)


### Features

* new automerge workflow ([4f63320](https://github.com/neovici/cosmoz-bottom-bar/commit/4f633206959710beb6fc12deccdb991cd7224b37))

## [9.0.5](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.0.4...v9.0.5) (2025-05-22)


### Bug Fixes

* menu buttons rounded ([4fb53b5](https://github.com/neovici/cosmoz-bottom-bar/commit/4fb53b577f6d102d537ff1a6bfccd3a13d6b0e03))

## [9.0.4](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.0.3...v9.0.4) (2025-05-12)


### Bug Fixes

* new overflowing elements flicker ([#191](https://github.com/neovici/cosmoz-bottom-bar/issues/191)) ([11e46a9](https://github.com/neovici/cosmoz-bottom-bar/commit/11e46a9d52a9ce44e6212345070c029e902c1704))

## [9.0.3](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.0.2...v9.0.3) (2025-05-08)


### Bug Fixes

* **overflow:** hidden elements are considered visible ([#190](https://github.com/neovici/cosmoz-bottom-bar/issues/190)) ([6d28ca4](https://github.com/neovici/cosmoz-bottom-bar/commit/6d28ca4e23ecf0fc957574ce4499b74d6446bccb))

## [9.0.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.0.1...v9.0.2) (2025-05-08)


### Bug Fixes

* **overflow:** old elements did not clean up on slotchange ([#189](https://github.com/neovici/cosmoz-bottom-bar/issues/189)) ([ac87a76](https://github.com/neovici/cosmoz-bottom-bar/commit/ac87a76941b8ed080d486714fa2efeed2d09d421))

## [9.0.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v9.0.0...v9.0.1) (2025-04-29)


### Bug Fixes

* **overflow:** nested slots are not handled properly ([#187](https://github.com/neovici/cosmoz-bottom-bar/issues/187)) ([b144a33](https://github.com/neovici/cosmoz-bottom-bar/commit/b144a336fd3c940a14a4f7c8f82046211b73dd0a))

# [9.0.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v8.1.1...v9.0.0) (2025-04-29)


### Features

* pion version ([#171](https://github.com/neovici/cosmoz-bottom-bar/issues/171)) ([62c8c61](https://github.com/neovici/cosmoz-bottom-bar/commit/62c8c61471b3ea9c8f7a5fd15280b2cc4d8fa149))


### BREAKING CHANGES

* Migrate to Pion, TS and new Overflow directive.

* fix: remove named slots
* Whatever is projected needs to have textContent,
otherwise it won't show up in the menu.

## [8.1.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v8.1.0...v8.1.1) (2025-03-25)


### Bug Fixes

* commitlint config and update ([928e34e](https://github.com/neovici/cosmoz-bottom-bar/commit/928e34e089f7041da08e586dec6ca4cbfcf74f26))

# [8.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v8.0.1...v8.1.0) (2025-01-25)


### Features

* sync new features to cosmoz-bottom-bar-next ([#169](https://github.com/neovici/cosmoz-bottom-bar/issues/169)) ([c61e4d3](https://github.com/neovici/cosmoz-bottom-bar/commit/c61e4d342b0735c6bfd137f403d9c0318df4e9ff))

## [8.0.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v8.0.0...v8.0.1) (2025-01-23)


### Bug Fixes

* revert changes of collecting actions in dropdown ([#170](https://github.com/neovici/cosmoz-bottom-bar/issues/170)) ([7279c90](https://github.com/neovici/cosmoz-bottom-bar/commit/7279c902ff9baec0ce3f75643c7a35b96af47537))

# [8.0.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.5.1...v8.0.0) (2025-01-07)


### Features

* update cosmoz-dropdown ([87c5c78](https://github.com/neovici/cosmoz-bottom-bar/commit/87c5c78e8f8b86c7b5bc7cf8781137e6618de93f))


### BREAKING CHANGES

* Upgrade to cosmoz-dropdown@5 with floating-ui.

## [7.5.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.5.0...v7.5.1) (2024-12-12)


### Bug Fixes

* collect all actions in dropdown when too narrow ([#166](https://github.com/neovici/cosmoz-bottom-bar/issues/166)) ([a23e441](https://github.com/neovici/cosmoz-bottom-bar/commit/a23e441ff682e875dc65c3e4e0aeadd7d8e71b69)), closes [AB#17737](https://github.com/AB/issues/17737)

# [7.5.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.4.0...v7.5.0) (2024-11-27)


### Features

* open actions dropdown on useActivity callback ([#165](https://github.com/neovici/cosmoz-bottom-bar/issues/165)) ([082f919](https://github.com/neovici/cosmoz-bottom-bar/commit/082f9193d59c3585fee988d2324825e3fef98758))

# [7.4.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.3.0...v7.4.0) (2024-08-28)


### Features

* add a info part ([b24bdde](https://github.com/neovici/cosmoz-bottom-bar/commit/b24bddef8a4761b4e2d9fb1ef0a34ad111203e2e))

# [7.3.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.2.2...v7.3.0) (2024-07-23)


### Features

* **cosmoz-bottom-bar:** support unstyled attribute ([6dea770](https://github.com/neovici/cosmoz-bottom-bar/commit/6dea770e0e1c4c46ef6922affcb1a0be401587ea))
* **deps:** upgrade ([661f79b](https://github.com/neovici/cosmoz-bottom-bar/commit/661f79bc471840d66b0eec4029091f6925b5750f))

## [7.2.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.2.1...v7.2.2) (2024-06-05)


### Bug Fixes

* add z-index to make sure bottom-bar is above views content ([28fcc3e](https://github.com/neovici/cosmoz-bottom-bar/commit/28fcc3ecd77ade149f0a703c66bbf0aee33aab6e))

## [7.2.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.2.0...v7.2.1) (2024-04-26)


### Bug Fixes

* next is not included in package ([0892c30](https://github.com/neovici/cosmoz-bottom-bar/commit/0892c301da8aafec124f52995fb2c0dd699f337d))

# [7.2.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.1.3...v7.2.0) (2024-04-25)


### Features

* add `cosmoz-collapse` ([85d0e1d](https://github.com/neovici/cosmoz-bottom-bar/commit/85d0e1ddbf2cb0182b1ba2026eba05c37db25d0f))
* add `exports` in package.json ([999611e](https://github.com/neovici/cosmoz-bottom-bar/commit/999611e15dc064106861de390ad57a09de1c5d7d))
* add `getFlattenedNodes` function ([445a519](https://github.com/neovici/cosmoz-bottom-bar/commit/445a519be2aea96956d6035e1cb3ae8b2a3778fc))
* add `slotChangeHandler` function ([e0853a1](https://github.com/neovici/cosmoz-bottom-bar/commit/e0853a18881c65c1223136067571568386bb3e26))
* add `storybook-static` dir to .gitignore ([d15f54a](https://github.com/neovici/cosmoz-bottom-bar/commit/d15f54a0bcc889e3fe8d7eececa5eeec1d94a434))
* add cosmoz-utils dependency ([b6b37e2](https://github.com/neovici/cosmoz-bottom-bar/commit/b6b37e2642f73bc091b9e8f14a29ba4767c2dbb7))
* add empty story ([880f8c2](https://github.com/neovici/cosmoz-bottom-bar/commit/880f8c2fd04dfb0b708208a5db19e6547fadab26))
* add empty story render function ([8fe1461](https://github.com/neovici/cosmoz-bottom-bar/commit/8fe1461d4e685ce370276c08adc913d6562b8b50))
* add new demo file ([b465746](https://github.com/neovici/cosmoz-bottom-bar/commit/b4657466fd97f883b1e2f568c7cef5bf265f6e9d))
* add new file (will rename it later) ([cac18ea](https://github.com/neovici/cosmoz-bottom-bar/commit/cac18ea309cbf0539f91793030bb62f1646a03ae))
* add pionjs dependecy ([5c127fb](https://github.com/neovici/cosmoz-bottom-bar/commit/5c127fb044353f015f077f32066d7d11e4214951))
* add questions and html inside the function ([ef3ad56](https://github.com/neovici/cosmoz-bottom-bar/commit/ef3ad56fdba4a99c7734cf1855eee6054bfdbf85))
* add stories ([60a3086](https://github.com/neovici/cosmoz-bottom-bar/commit/60a30863af37db74225bd935321e9d20557d0731))
* add storybook configs ([24085b3](https://github.com/neovici/cosmoz-bottom-bar/commit/24085b39ace9d98a5406d2959b31b0787a517f43))
* add storybook dependencies ([2a36bb4](https://github.com/neovici/cosmoz-bottom-bar/commit/2a36bb4f60de1f3a9dbfd74d830ebf21d23e7b40))
* add todos ([2dc38e6](https://github.com/neovici/cosmoz-bottom-bar/commit/2dc38e6f9b966095d1d009220ce40e454ca9c904))
* create src dir for pionjs component ([a1a2fe0](https://github.com/neovici/cosmoz-bottom-bar/commit/a1a2fe0e9236672d7c8faff7be7c2454731dadf3))
* do changes adviced by Iulian ([060e726](https://github.com/neovici/cosmoz-bottom-bar/commit/060e726f088b5f922955120d2a2cb1cb00c33796))
* extract functions outside CosmozBottomBar ([9892452](https://github.com/neovici/cosmoz-bottom-bar/commit/989245292ef89120f5cc37bac87f730763c66cb8))
* have the style outside of the component ([56bb120](https://github.com/neovici/cosmoz-bottom-bar/commit/56bb120fba4941df9d2c041a06c886eaff3ed10a))
* implement requested changes ([add8218](https://github.com/neovici/cosmoz-bottom-bar/commit/add8218d89dcb4d6b32e34d5d5a085dac08a2972))
* make `npm run lint` pass ([16ac296](https://github.com/neovici/cosmoz-bottom-bar/commit/16ac2965be0abcb9b64f1d0d79197bac15384565))
* remove commented useEffect ([4c83832](https://github.com/neovici/cosmoz-bottom-bar/commit/4c838320891478486743bc6edb13ffc07e75299f))
* remove old file ([d8771c5](https://github.com/neovici/cosmoz-bottom-bar/commit/d8771c56ed4b75202e20182507209b96b40842be))
* rename `cosmoz-bottom-bar-new.js` ([5a3304a](https://github.com/neovici/cosmoz-bottom-bar/commit/5a3304afc8e89348e20a79bf53a8edb55c49af8c))
* rename component to `cosmoz-bottom-bar-next` ([94f47c8](https://github.com/neovici/cosmoz-bottom-bar/commit/94f47c861676618c3ce11e17efa7879a00f933e6))
* set the right title for the component in src ([dcceb24](https://github.com/neovici/cosmoz-bottom-bar/commit/dcceb24f8445917f57a60e7b7c2245a71bb9ea08))
* suffix the files with `next` ([385c222](https://github.com/neovici/cosmoz-bottom-bar/commit/385c222b29c9cfc482f5befc163e25757f09d180))
* toggle the height ([e357da9](https://github.com/neovici/cosmoz-bottom-bar/commit/e357da9a4ef1f3998eaf0ee712e90fe20634c24f))
* update `getFlattenedNodes` function ([794dd3c](https://github.com/neovici/cosmoz-bottom-bar/commit/794dd3c456015023482abf88df6ba4841337f6bc))
* update new demo file ([4a4c83c](https://github.com/neovici/cosmoz-bottom-bar/commit/4a4c83cc93cf12c056f8f2a7e86285638a019801))
* use the `has-menu-items` attr to hide cmpnt ([db863d7](https://github.com/neovici/cosmoz-bottom-bar/commit/db863d7780a3504f4c6acb441184807a24edf85d))
* use the `notifyProperty` hook ([169fdf1](https://github.com/neovici/cosmoz-bottom-bar/commit/169fdf153f089b2ce8f2cd259eb878a3c094e31b))
* use the notifyProperty hook some more ([34a111e](https://github.com/neovici/cosmoz-bottom-bar/commit/34a111e1af6f7694d6cf9edfc6ab51c8d221508e))
* wip - convert the codebase to pionjs ([dc7e306](https://github.com/neovici/cosmoz-bottom-bar/commit/dc7e306fd3fc602b83af9af1f7f6febb3996a2c4))

## [7.1.3](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.1.2...v7.1.3) (2024-03-19)


### Bug Fixes

* bar height is calculated outside of the resize handler ([ce02cf7](https://github.com/neovici/cosmoz-bottom-bar/commit/ce02cf7d48d636f0c78f0f427d401de6c529f127))

## [7.1.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.1.1...v7.1.2) (2024-03-14)


### Bug Fixes

* change tabindex for action menu buttons + vscode settings ([1ab667b](https://github.com/neovici/cosmoz-bottom-bar/commit/1ab667bc2ccb7b44e164d04d2d6f6f2b2142dd40))

## [7.1.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.1.0...v7.1.1) (2024-03-11)


### Bug Fixes

* **vscode-settings:** change eslint settings ([b16edbc](https://github.com/neovici/cosmoz-bottom-bar/commit/b16edbcfc881ee11660a84d8859004b535ea0938))

# [7.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v7.0.0...v7.1.0) (2024-03-07)


### Features

* **cosmoz-bottom-bar:** init without transition ([b724778](https://github.com/neovici/cosmoz-bottom-bar/commit/b72477875ded3cec0f5b51c888b28837b1aad753))

# [7.0.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v6.4.0...v7.0.0) (2024-01-11)


### Features

* update to pion ([4f989f6](https://github.com/neovici/cosmoz-bottom-bar/commit/4f989f65eaec22ff0f31098ccd5243c2087ac48e))


### BREAKING CHANGES

* Update to lastest cosmoz-dropdown with @pionjs/pion.

# [6.4.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v6.3.1...v6.4.0) (2023-05-02)


### Features

* **bottom-bar:** implement hide-actions ([3295a5c](https://github.com/neovici/cosmoz-bottom-bar/commit/3295a5c7765e7f1b8900641e27b4cda65ffcb844))
* update ci ([982a257](https://github.com/neovici/cosmoz-bottom-bar/commit/982a2575f0fc6d8d28dd7dc1da4a221d8e7a6776))
* updates ([a49d99e](https://github.com/neovici/cosmoz-bottom-bar/commit/a49d99edaa4fd53cb8061846ec6e3d7d3cb93c1b))

## [6.3.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v6.3.0...v6.3.1) (2022-09-09)


### Bug Fixes

* **data-priority:** error if there are no elements ([c4cae7c](https://github.com/neovici/cosmoz-bottom-bar/commit/c4cae7c12a6d5b61fff50579e5ee6f1d0b812f9a))

# [6.3.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v6.2.0...v6.3.0) (2022-09-08)


### Features

* support for data-priority ([900ac41](https://github.com/neovici/cosmoz-bottom-bar/commit/900ac415cffc597c9acc35115f6f46af48539c93))

# [6.2.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v6.1.0...v6.2.0) (2022-07-19)


### Features

* upgrade cosmoz-dropdown ([4bdcb6a](https://github.com/neovici/cosmoz-bottom-bar/commit/4bdcb6ac989469835e0019949ac90097ff0e42cb))

# [6.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v6.0.0...v6.1.0) (2022-06-23)


### Features

* **dropdown:** adjust max width on correct part ([72a6d7a](https://github.com/neovici/cosmoz-bottom-bar/commit/72a6d7afde391201df1dbcbe8a605060ed25049c))

# [6.0.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v5.2.1...v6.0.0) (2022-06-22)


### Features

* uprade to lit-html@^2 ([c581096](https://github.com/neovici/cosmoz-bottom-bar/commit/c581096830e3da4f191bd159cf89d9b2cc77217f))


### BREAKING CHANGES

* Upgrade to lit-html@^2

# [6.0.0-beta.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v5.2.1...v6.0.0-beta.1) (2022-06-16)


### Features

* uprade to lit-html@^2 ([c581096](https://github.com/neovici/cosmoz-bottom-bar/commit/c581096830e3da4f191bd159cf89d9b2cc77217f))


### BREAKING CHANGES

* Upgrade to lit-html@^2

## [5.2.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v5.2.0...v5.2.1) (2022-06-14)


### Bug Fixes

* **cosmoz-bottom-bar:** fix template raw support ([d6013be](https://github.com/neovici/cosmoz-bottom-bar/commit/d6013be39341bcc3bb9c3442388a33060c1e01f3))

# [5.2.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v5.1.1...v5.2.0) (2022-06-11)


### Features

* **render-open:** skip the animation the first time the bar becomes visible ([bae74f9](https://github.com/neovici/cosmoz-bottom-bar/commit/bae74f9c9cbb82c243dc7d35c44fb26fe01a9f74)), closes [AB#7563](https://github.com/AB/issues/7563)

## [5.1.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v5.1.0...v5.1.1) (2022-04-27)


### Bug Fixes

* **cosmoz-bottom-bar:** correctly sort items with missing data index ([41e4154](https://github.com/neovici/cosmoz-bottom-bar/commit/41e41542441a985eed111bcad3253d1c4a85a022))

# [5.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v5.0.0...v5.1.0) (2022-03-30)


### Features

* **force-open:** force the bar to stay open and render without any animation ([6e72567](https://github.com/neovici/cosmoz-bottom-bar/commit/6e725675fa6b37f69e4ea4f0a72d9017f00095da))

# [5.0.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.5.2...v5.0.0) (2022-03-14)


### Features

* **cosmoz-bottom-bar-view:** remove cosmoz-bottom-bar-view ([768a70a](https://github.com/neovici/cosmoz-bottom-bar/commit/768a70ae83c1a97122bf5cdbf5f4b7279ac02720))


### BREAKING CHANGES

* **cosmoz-bottom-bar-view:** remove cosmoz-bottom-bar-view

## [4.5.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.5.1...v4.5.2) (2022-03-14)


### Bug Fixes

* **cosmoz-bottom-bar:** add bg and shadow styles ([8f023f6](https://github.com/neovici/cosmoz-bottom-bar/commit/8f023f61b7ab9bbb61e96173ffff71884e119e67))

## [4.5.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.5.0...v4.5.1) (2022-01-12)


### Bug Fixes

* disabled toolbar item ([353cc7e](https://github.com/neovici/cosmoz-bottom-bar/commit/353cc7ef44a1b83a51cc5c3edef165efc0869fd1))

# [4.5.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.4.0...v4.5.0) (2021-12-29)


### Features

* remove action event ([ffc361a](https://github.com/neovici/cosmoz-bottom-bar/commit/ffc361a5c59cad9ead9db6085c93e776741320c8))

# [4.4.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.3.0...v4.4.0) (2021-12-21)


### Features

* refactor dropdown ([2f0d724](https://github.com/neovici/cosmoz-bottom-bar/commit/2f0d7244f30a82f0723dd987e1ab64cf04e242d9))

# [4.3.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.2.0...v4.3.0) (2021-12-17)


### Features

* **bottom-bar:** replace paper elements with cosmoz-dropdown ([bca41ed](https://github.com/neovici/cosmoz-bottom-bar/commit/bca41ede21922e44b13e3e3316ac6c8bb2b899a8))

# [4.2.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.1.1...v4.2.0) (2021-12-17)


### Bug Fixes

* **cosmoz-bottom-bar:** add bar slot ([0c564fa](https://github.com/neovici/cosmoz-bottom-bar/commit/0c564fa12fae29da457daaab453eca99320b7416))


### Features

* **cosmoz-bottom-bar-view:** remove auto hide on scroll ([5741e0e](https://github.com/neovici/cosmoz-bottom-bar/commit/5741e0e1a35db15dc5818931b1c54c38666d8d23))

## [4.1.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.1.0...v4.1.1) (2021-06-08)


### Bug Fixes

* **cosmoz-bottom-bar:** resize dropdown on layout ([8d95fdb](https://github.com/neovici/cosmoz-bottom-bar/commit/8d95fdb692c04aa85acf454f8685237d27f439bb))

# [4.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.6...v4.1.0) (2021-06-08)


### Bug Fixes

* **cosmoz-bottom-bar:** autosize on focus (bold) or if it doesn't fit ([d44a906](https://github.com/neovici/cosmoz-bottom-bar/commit/d44a9068265a42c77d06de33541ef09d93388268))


### Features

* **cosmoz-bottom-bar:** slot items without computing sizes ([95384ca](https://github.com/neovici/cosmoz-bottom-bar/commit/95384ca92349722a671bdd7e6b3dd3027753390c))

## [4.0.6](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.5...v4.0.6) (2021-06-07)


### Bug Fixes

* upgrade repo ([d88520c](https://github.com/neovici/cosmoz-bottom-bar/commit/d88520c6b3c159865af408ba37ed4596de6e3d49))

## [4.0.5](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.4...v4.0.5) (2021-01-15)


### Bug Fixes

* **cosmoz-bottom-bar:** ignore style elements ([b5330e9](https://github.com/neovici/cosmoz-bottom-bar/commit/b5330e9583eb9a2b6044e47a46d20615b8829d4c))

## [4.0.4](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.3...v4.0.4) (2020-10-20)


### Bug Fixes

* do not style slotted slots on Safari/iOS ([ee653c8](https://github.com/neovici/cosmoz-bottom-bar/commit/ee653c878a41ac400906262bb5a6e7e26e24027e))

## [4.0.3](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.2...v4.0.3) (2020-10-15)


### Bug Fixes

* don't recompute height ([7b52e06](https://github.com/neovici/cosmoz-bottom-bar/commit/7b52e068ed4e17cd3ac5259da5f09fce11237033))
* restore cosmoz-bottom-bar-view animation behavior ([cf04651](https://github.com/neovici/cosmoz-bottom-bar/commit/cf04651f70a188bf99e80181402dd751684880f2))

## [4.0.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.1...v4.0.2) (2020-10-15)


### Bug Fixes

* disabled buttons in the menu are not styled ([3a0cf4a](https://github.com/neovici/cosmoz-bottom-bar/commit/3a0cf4a23a57c28152b30ae0ac8afead1a0da82b))

## [4.0.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v4.0.0...v4.0.1) (2020-10-15)


### Bug Fixes

* prevent resize observer loops ([7994a7f](https://github.com/neovici/cosmoz-bottom-bar/commit/7994a7f827e601e6ffbb18c7096e03af224dc098))

# [4.0.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.1.5...v4.0.0) (2020-10-15)


### Features

* distribute via slots ([ea66679](https://github.com/neovici/cosmoz-bottom-bar/commit/ea66679776135abef30f06b7917a5a131717aa7c)), closes [#24802](https://github.com/neovici/cosmoz-bottom-bar/issues/24802)


### BREAKING CHANGES

* If your component allows adding content to the bottom bar via slots, then you have
to also make sure you also export `bottom-bar-toolbar` and `bottom-bar-menu`, otherwise the actions
will not show up.

## [3.1.5](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.1.4...v3.1.5) (2020-10-12)


### Bug Fixes

* always run layout actions on resize ([f95925c](https://github.com/neovici/cosmoz-bottom-bar/commit/f95925ccf27c73765cb13a6f22fc1e6c84c0818e))

## [3.1.4](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.1.3...v3.1.4) (2020-10-02)


### Bug Fixes

* remove iron-flex-layout from demos ([44faf8d](https://github.com/neovici/cosmoz-bottom-bar/commit/44faf8d5345a536d6de93437242881946a56002f))
* replace iron-resizable-behavior with a ResizeObserver ([69b0c60](https://github.com/neovici/cosmoz-bottom-bar/commit/69b0c60c1fcbce542f3eb515f1fe34716d1df310)), closes [#83](https://github.com/neovici/cosmoz-bottom-bar/issues/83)

## [3.1.3](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.1.2...v3.1.3) (2020-08-24)


### Bug Fixes

* undefined layoutDebouncer ([46a46e0](https://github.com/neovici/cosmoz-bottom-bar/commit/46a46e062f772b1312ddf7e3ef44686d1feee35d))

## [3.1.2](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.1.1...v3.1.2) (2020-08-20)


### Bug Fixes

* on desktop bb remains inactive, if not explicitly made active ([956b9b2](https://github.com/neovici/cosmoz-bottom-bar/commit/956b9b2d7f44c927aa06a07a7e375e4afff0a514))

## [3.1.1](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.1.0...v3.1.1) (2020-08-19)


### Bug Fixes

* remove iron-flex-layout ([2664d51](https://github.com/neovici/cosmoz-bottom-bar/commit/2664d5115eaacc966b4e9cfa7882b86ed196e0cd))

# [3.1.0](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.0.11...v3.1.0) (2020-08-14)


### Features

* convert cosmoz-bottom-bar-view to haunted ([6b4c674](https://github.com/neovici/cosmoz-bottom-bar/commit/6b4c6743c209a6fb81ce573638d40c075a925c41)), closes [#74](https://github.com/neovici/cosmoz-bottom-bar/issues/74)

## [3.0.11](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.0.10...v3.0.11) (2020-06-23)


### Bug Fixes

* better hidden element handling ([3184992](https://github.com/neovici/cosmoz-bottom-bar/commit/3184992dad82951881eab58ec60c1019cdeec9a6))
* improve initial distribution of toolbar elements ([f195cfb](https://github.com/neovici/cosmoz-bottom-bar/commit/f195cfb6c33d5d8110e8dc3362350767e932600c))

## [3.0.10](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.0.9...v3.0.10) (2020-01-13)


### Bug Fixes

* reduce max toolbar items from 3 to 1 ([#70](https://github.com/neovici/cosmoz-bottom-bar/issues/70)) ([ae3a781](https://github.com/neovici/cosmoz-bottom-bar/commit/ae3a781))

## [3.0.9](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.0.8...v3.0.9) (2020-01-10)


### Bug Fixes

* correct package version ([9132345](https://github.com/neovici/cosmoz-bottom-bar/commit/9132345))

## [3.0.5](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.0.4...v3.0.5) (2019-10-10)


### Bug Fixes

* **readme:** missing badges ([5217901](https://github.com/neovici/cosmoz-bottom-bar/commit/5217901))

## [3.0.4](https://github.com/neovici/cosmoz-bottom-bar/compare/v3.0.3...v3.0.4) (2019-10-08)


### Bug Fixes

* **ci:** adopt semantic release ([1e5240f](https://github.com/neovici/cosmoz-bottom-bar/commit/1e5240f))
