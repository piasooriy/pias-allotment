import { sanity } from "../sanity.js";

export default async function FetchProduct() {
	const seedAndPlantQuery = `*[_type == 'seedAndPlant']{   
		_id,  
		title,  
		_type,
		productFormat,
		durability,  
		"image": picture.asset->url,  
		"altText": image.alt,
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
	
	const products = await sanity.fetch(seedAndPlantQuery, SupplyQuery);

	return products;
	
}