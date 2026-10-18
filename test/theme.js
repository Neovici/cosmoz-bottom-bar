// Exercise the token-dependent controls with the same theme as their consumers.
const theme = document.createElement('link');
theme.rel = 'stylesheet';
theme.href = new URL(
	'../node_modules/@neovici/cosmoz-tokens/src/index.css',
	import.meta.url,
).href;
await new Promise((resolve, reject) => {
	theme.onload = resolve;
	theme.onerror = reject;
	document.head.append(theme);
});
