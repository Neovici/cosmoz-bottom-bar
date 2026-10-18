import { css } from '@pionjs/pion';

export const mobileStyles = css`
	@media (max-width: 899px) {
		:host {
			--cz-control-height-md: 44px;
			--cz-control-height-sm: 44px;
			background-color: var(--cosmoz-bottom-bar-bg-color, transparent);
			border-color: transparent;
			box-shadow: var(--cosmoz-bottom-bar-shadow, none);
		}

		#bar {
			height: 52px;
			padding-inline: 12px;
		}

		#bottomBarMenu::slotted(*) {
			box-sizing: border-box;
			width: 100%;
			min-height: 48px;
			--cz-control-height-sm: 48px;
			--cosmoz-button-justify-content: flex-start;
			--cz-text-xs: var(--cz-text-sm);
		}
	}

	.action-sheet {
		position: fixed;
		inset: auto 0 0;
		margin: 0 auto;
		box-sizing: border-box;
		width: min(100%, 480px);
		max-width: 100%;
		max-height: min(75dvh, 640px);
		padding: 0 12px max(16px, env(safe-area-inset-bottom));
		border: 0;
		border-radius: var(--cz-radius-3xl) var(--cz-radius-3xl) 0 0;
		background: var(--cz-glass-sheen), var(--cz-color-bg-primary);
		box-shadow: var(--cz-shadow-2xl);
		color: var(--cz-color-text-primary);
		font-family: var(--cz-font-body);
		overflow: hidden;
	}
	.action-sheet[open] {
		display: flex;
		flex-direction: column;
	}
	.action-sheet::backdrop {
		background: var(--cosmoz-overlay-backdrop-color);
	}
	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex: none;
		gap: 16px;
		padding: 12px 4px 8px 12px;
	}
	.sheet-header h2 {
		margin: 0;
		font-size: var(--cz-text-base);
		font-weight: var(--cz-font-weight-semibold);
	}
	.sheet-actions {
		min-height: 0;
		overflow-y: auto;
		overscroll-behavior: contain;
		border-radius: var(--cz-radius-xl);
		background: var(--cz-color-bg-secondary);
		padding: 4px;
	}
`;
