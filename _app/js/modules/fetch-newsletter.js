import { sanity } from "../sanity.js";

export default async function FetchNewsletter() {
	const newsletterQuery = `*[_type == 'newsletter']{
		_id,
		title,
		"image": image.asset->url,  
		"altText": image.alt,
		"slug":slug.current,
	 }`;
	const newsletters = await sanity.fetch(newsletterQuery);

	//console.log('hei')

	return newsletters;
}