import '@neovici/cosmoz-button';
import { xCloseIcon } from '@neovici/cosmoz-icons/untitled';
import { html, useEffect, useMemo, useRef, useState } from '@pionjs/pion';
import { t } from 'i18next';
import { ref } from 'lit-html/directives/ref.js';

export const useMobileActions = () => {
	const media = useMemo(() => matchMedia('(max-width: 899px)'), []),
		[mobile, setMobile] = useState(media.matches),
		[opened, setOpened] = useState(false),
		sheet = useRef<HTMLDialogElement>();

	useEffect(() => {
		const onChange = () => {
			sheet.current?.close();
			setOpened(false);
			setMobile(media.matches);
		};
		media.addEventListener('change', onChange);
		return () => media.removeEventListener('change', onChange);
	}, [media]);

	return {
		mobile,
		opened,
		sheet,
		open: () => {
			sheet.current?.showModal();
			setOpened(true);
		},
		close: () => sheet.current?.close(),
		onClose: () => setOpened(false),
	};
};

export const renderMobileActions = (
	{ sheet, close, onClose }: ReturnType<typeof useMobileActions>,
	content: unknown,
) => html`
	<dialog
		class="action-sheet"
		part="action-sheet"
		aria-labelledby="actions-heading"
		${ref((element) => (sheet.current = element as HTMLDialogElement))}
		@close=${onClose}
		@click=${(event: MouseEvent) => {
			const dialog = sheet.current;
			if (!dialog || event.target !== dialog) return;
			const { left, right, top, bottom } = dialog.getBoundingClientRect();
			if (
				event.clientX < left ||
				event.clientX > right ||
				event.clientY < top ||
				event.clientY > bottom
			) {
				close();
			}
		}}
	>
		<header class="sheet-header">
			<h2 id="actions-heading">${t('Actions') || 'Actions'}</h2>
			<cosmoz-button
				variant="tertiary"
				icon-only
				aria-label=${t('Close') || 'Close'}
				@click=${close}
				>${xCloseIcon()}</cosmoz-button
			>
		</header>
		<div class="sheet-actions" @click=${close}>${content}</div>
	</dialog>
`;
