import { readSlug } from "../util/utils.js";
import FetchProduct from '../modules/fetch-product.js';

export default async function GetProduct() {

	const product = await FetchProduct();
	console.log(product)
	if(slug !== undefined) {
		console.log(slug);
	} 
	

	const slug = readSlug();
	
	function createDynamicProductPageDOM(){
		const productContainer = document.createElement('div');
		const productBox = document.createElement('div');
		const productInformation = document.createElement('div');
		const productImage = document.createElement('figure')
		const productTitle = document.createElement('figcaption');
		const productDescription = document.createElement('div');
		const productFamily = document.createElement('div');
		const productDurability = document.createElement('div');
		const productCategory = document.createElement('div');
		const productFormat = document.createElement('div');
		
		productContainer.appendChild(productBox);
		productContainer.appendChild(productInformation);
		productBox.appendChild(productTitle);
		productBox.appendChild( productImage);
		productInformation.appendChild(productDescription);
		productInformation.appendChild(productFamily);
		productInformation.appendChild(productDurability);
		productInformation.appendChild(productCategory);
		productInformation.appendChild(productFormat);
	
		productContainer.classList.add('product__container');
		productBox.classList('product__container-box');
		productInformation.classList('product__container-information');
		
		productImage.classList.add('product__container-box-image');
		productImage.src = product.image;
		productImage.alt = product.altText;
		/**
		 * 
		 * @NOTE Could maybe make a h2? but figcap works too,
		 or is that the wrong way of doing this?, because all in
		 all the title is the description for the picture, like
		 the name of the item, right(?)
		 */

		productTitle.classList('product__container-box-title');
		productTitle.innerText = product.title;

		productDescription.classList('product__container-information-description');
		productDescription.innerText = product.description;

		productFamily.classList('product__container-information-family');
		productFamily.innerText = product.family;

		productDurability.classList('product__container-information-durability');
		productDurability.innerText = product.durability;

		productCategory.classList('product__container-information-category');
		productCategory.innerText = product.category;

		productFormat.classList('product__container-information-format');
		productFormat.innerText = product.format

		return productContainer;
	}

	console.log(productContainer)

}



//console.log(slug);

/* if(slug !== undefined) {
	console.log(slug);
}	
	 */
	/***
	 * 
	 * @NOTE Filtering the array from fetch to match the slug. 
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	 */
