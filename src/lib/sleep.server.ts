export function sleep(ms?: number) {
	const delay = ms ?? Math.floor(Math.random() * (1100 - 100 + 1)) + 100;
	return new Promise((resolve) => setTimeout(resolve, delay));
}
