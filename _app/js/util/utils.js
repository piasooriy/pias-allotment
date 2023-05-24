export function readSlug() {
	const allUrl = window.location.href;
	if(allUrl.includes('product')) {
		return window.location.search.slice(1)
	}
	return undefined;
 }

 /**
  * 
  * @NOTE Redirecting to a new generated window, which uses the slug
  * for product. 
  * @SEE seedAndSupply function
  * https://developer.mozilla.org/en-US/docs/Web/API/Window/location
  * https://developer.mozilla.org/en-US/docs/Web/API/Location/href
  */