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

	const products = await sanity.fetch(productQuery);

	return products;

}
	/**
	 * @TODO I think I need to make an if-else statement which chooses 
	 * the slug based on the type.
	 * @NOTE Maybe I can write it like this? This is an extention of the 
	 * code which has been commented out under utils */	

	/* 
	import { sanity } from "../sanity.js";
	import { readSlug } from "../util/utils.js";

	export default async function FetchSingleProduct(){
		const slug = readSlug();
	// [slug, type]
	console.log(slug)
	let productQuery;

	if (slug[1] === 'seedAndPlant') {
		productQuery = `{
			"product": *[_type == 'seedAndPlant' && slug.current == "${slug[0]}"]{       
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
			},`
			} else {
		productQuery = `{
			"product": *[_type == 'supply' && slug.current == "${slug[0]}"]{
			_id,
			title, 
			_type, 
			"image": image.asset->url,
			"altText": image.alt,
			"slug": slug.current,
			description,
			metadata
		},`
	};

		const products = await sanity.fetch(productQuery);
		return products;

	} */

	
	