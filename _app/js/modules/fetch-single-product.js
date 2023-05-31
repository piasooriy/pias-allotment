import { sanity } from "../sanity.js";
import { readSlug } from "../util/utils.js";

export default async function FetchSingleProduct(){
	const slug = readSlug();

		const productQuery = `
	 {
	 "product": *[_type == 'seedAndPlant' && slug.current == "${slug}"]{       
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
	
	}`;
	/**
	 * @TODO Figure out why the query does not work when I add && slug.current == "${slug}"
	 * to Supply. That way it will help filter out the articles based on slug, 
	 * but instead it removes all the products(that show up when slug matching in
	 * supply is not there.)
	 * @SEE https://www.sanity.io/schemas/query-for-slugs-for-all-available-locales-of-this-document-0bf5d2ce
	 * @NOTE I don't think this way (fetching multiple schemas in an array), 
	 * works that well. I seem to be fetching all the elements from the schema, 
	 * not just the ones I want. I could also try to split the query in two and call
	 * it in together, sort of like this: */	

	/*  const productQuery = `
    *[_type == 'seedAndPlant' && slug.current == "${slug}"]{       
      _id,  
      title,  
      _type,
      productFormat,
      durability,  
      "image": picture.asset->url,  
      "altText": picture.alt,
      "slug": slug.current,
      description, 
      "stock": metadata.stock, 
      "price": metadata.price, 
      "family": family._ref,  
      category
    }
  `;
  const supplyQuery = `
    *[_type == 'supply' && slug.current == "${slug}"]{
      _id,
      title, 
      _type, 
      "image": image.asset->url,
      "altText": image.alt,
      "slug": slug.current,
      description,
      metadata
    }
  `;
  const [product, supply] = await Promise.all([
    sanity.fetch(productQuery),
    sanity.fetch(supplyQuery)
  ]);
   return { product, supply };
	  */
	
	const products = await sanity.fetch(productQuery);

	return products;

}