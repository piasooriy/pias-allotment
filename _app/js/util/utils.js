export function readSlug() {
	const allUrl = window.location.href;
	if(allUrl.includes('product')) {
		return window.location.search.slice(1)
	}
	return undefined;
 }