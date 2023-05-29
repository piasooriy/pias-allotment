import { sanity } from "../sanity.js";

export default async function FetchProduct() {
	/**
	 * 
	 * @NOTE Everything that is commented out
	 * is just me trying to see if I can fetch both seed and plant as well as 
	 * supplies under one function, which I highly doubt, but hey, 
	 * no harm in trying.
	 */
	
	const productQuery = `{
		"seedAndPlant": *[_type == 'seedAndPlant']{       
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
	  },
	  "supply": *[_type == 'supply']{
			_id,
			  title, 
			  _type, 
			  "image": image.asset ->url,
			  "altText": image.alt,
			  "slug": slug.current,
			  description,
			  metadata
		}
	 }
		`;	 

	 /*****
	 * @NOTE Fetching both supply and seedAndPlant in one query. 
	 * 
	 */

	
	const products = await sanity.fetch(productQuery);

	return products;

	
	
}