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
