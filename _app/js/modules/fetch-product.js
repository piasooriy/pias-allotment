import { sanity } from "../sanity.js";

export default async function FetchProduct() {
	const seedAndPlantQuery = `*[_type == 'seedAndPlant']{   
		_id,  
		title,  
		_type,
		productFormat,
		durability,  
		"image": picture.asset->url,  
		"altText": picture.alt,
		"slug":slug.current,
		description, 
		"stock": metadata.stock, 
		"price": metadata.price, 
		"family": family._ref,  
		category,  
		 }
		`;	 

	const SupplyQuery = `*[_type == 'supply']{   
		_id,  
		title,  
		_type,
		"image": image.asset->url,  
		"altText": image.alt,
		"slug":slug.current,
		description, 
		metadata, 
		 }`;	 

	 /*****
	 * @todo How to include the fetch of supplies in the query?
	 * it would be easier if I could fetch all the supplies and seeds/plants as products. 
	 * and then perhaps filter it according to either seedAndPlant type or supply type.
	 * *[_type == 'supply']{   
		title, 
		"image": image.asset->url,  
		"altText": image.alt,
		slug,
		} 
	 */

	
	const products = await sanity.fetch(seedAndPlantQuery, SupplyQuery);

	return products;

	
	
}