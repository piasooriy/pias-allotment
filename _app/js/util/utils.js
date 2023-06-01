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


 /**
  * @TODO try to redirect based on slug and type so that we can include the supplies too, and 
  * not just product/seedAndSupply
  * @NOTE Maybe kind of like this: 
  * 
export function readSlug() {
	const allUrl = window.location.href;
	if(allUrl.includes('product')) {
		 const urlParams = new URLSearchParams(window.location.search);
		 const slug = urlParams.get('slug');
		 const type = urlParams.get('type');

		 return [slug, type]

	} if (allUrl.includes('newsletter-post')) {
	  return window.location.search.slice(1)
  } return undefined;
}
  * 
  */
