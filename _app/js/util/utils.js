/**
 * 
 * @NOTE Redirecting to a new generated window, which uses the slug
 * for product. 
 * @SEE newsletterList function under newsletter-list.js and 
 * getNewsletter function under newsletter-post.js
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/location
 * https://developer.mozilla.org/en-US/docs/Web/API/Location/href
 */

export function readSlug() {
	const allUrl = window.location.href;
	if(allUrl.includes('product')) {
		return window.location.search.slice(1)
	} if (allUrl.includes('newsletter-post')) {
      return window.location.search.slice(1)
   } return undefined;
 }
