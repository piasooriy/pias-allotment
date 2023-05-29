import { sanity } from "../sanity.js";
import { readSlug } from "../util/utils.js";

export default async function FetchSingleNewsletterPost(){

	const slug = readSlug();
	const newsletterPostQuery = `*[_type == 'newsletter']{
		_id,
		title,
		"image": image.asset->url,  
		"altText": image.alt,
		"slug":slug.current,
        descriptiveText, 
        author,
        direction,
        "seedAndPlant": seedAndPlant->.title,
        "supply": supply[]->.title,
        publishedDate,
	 }
`

	 const newsletterPosts = await sanity.fetch(newsletterPostQuery);

	 return newsletterPosts;
}