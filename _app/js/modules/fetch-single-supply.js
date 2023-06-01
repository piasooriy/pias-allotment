import { sanity } from "../sanity"

/**
 * 
 * @NOTE MODULE NOT IN USE
 */

export default async function FetchSingleSupply () {
	const singleSupplyQuery = ` "supply": *[_type == 'supply' && slug.current == "${slug}"]{
		_id,
		  title, 
		  _type, 
		  "image": image.asset ->url,
		  "altText": image.alt,
		  "slug": slug.current,
		  description,
		  metadata
	}`

	const supplies = await sanity.fetch(singleSupplyQuery);
	console.log(supplies)

	return supplies


}