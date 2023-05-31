import { readSlug } from "../util/utils.js";
import { sanity } from "../sanity.js";
import FetchSingleProduct from "./fetch-single-product.js";

export default async function GetProduct() {

	const products = await FetchSingleProduct();
	const slug = readSlug();

	/* const productQuery = `
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
	 "supply": *[_type == 'supply']
	}`;
		
	const products = await sanity.fetch(productQuery); */

	/**
	 * 
	 * @NOTE the entire fetch + match slug function has been moved
	 * out to seperate module 'fetch-single-product'
	 */

	//console.log(products)
		
	const product = products.product;
	console.log(product)
	const supply = products.supply;

	if(slug !== undefined) {
		console.log(slug);
		function createDynamicProductPageDOM(){
			/**
			 * @SEE https://developer.mozilla.org/en-US/docs/Web/API/Element#instance_properties
			 * @NOTE To understand more of node elements
			 */
			//Creating HTML elements
			const productContainer = document.createElement('div');
			const productBox = document.createElement('div');
			const productInformation = document.createElement('div');
			const productImageSingle = document.createElement('figure');
			const productImageSingleURL = document.createElement('img');
			const productTitle = document.createElement('figcaption');
			const productDescription = document.createElement('div');
			const productFamily = document.createElement('div');
			const productDurability = document.createElement('div');
			const productCategory = document.createElement('div');
			const productFormat = document.createElement('div');
			const productPrice = document.createElement('div');
			const productStock = document.createElement('div');
			const toggleProductSection = document.querySelector('.product__container-information-toggle-section');
			const toggleProductButton = document.querySelector('.product__container-information-toggle-button');
			
			//Appending node to parent
			productContainer.appendChild(productBox);
			productContainer.appendChild(productInformation);
			productBox.appendChild(productTitle);
			productBox.appendChild( productImageSingle);
			productImageSingle.appendChild(productImageSingleURL);
			productInformation.appendChild(productDescription);
			productInformation.appendChild(toggleProductButton);
			productInformation.appendChild(toggleProductSection);
			toggleProductSection.appendChild(productFamily);
			toggleProductSection.appendChild(productDurability);
			toggleProductSection.appendChild(productCategory);
			toggleProductSection.appendChild(productFormat);
			toggleProductSection.appendChild(productPrice);
			toggleProductSection.appendChild(productStock);
			

			//console.log(productContainer)
			
			//Creating classnames and choosing data from query
			productContainer.classList.add('product__container');
			productContainer.classList.add('grid');
			productContainer.classList.add('grid__column--12');
			productBox.classList.add('product__container-box');
			productBox.classList.add('product__container-box');
			productBox.classList.add('grid__column--4');
			productInformation.classList.add('product__container-information');
			productInformation.classList.add('grid__column--8');
			toggleProductSection.classList.add('grid__column--8');
			/**
			 * 
			 * @TODO Figure out why the image is not appearing on 
			 * the page. It is the same path for seed-and-supply list/
			 * same fetch query for fetch-products. But the image
			 * appears on the seed and supply list, and not here. 
			 * Maybe try a "try catch"?
			 * @NOTE forgot to append productImageSingleURL to ProductImageSingle
			 * My faul, it is fixed now! Still keeping the try catch, 
			 * incase I forgot to add a photo to a product, which I highly doubt
			 * since I used validation rule: validation: rule => rule.required(),
			 */
		try {	
			productImageSingleURL.classList.add('product__container-image');
			
			if (product.length > 0 ){
			productImageSingleURL.src = product[0].image;
			productImageSingleURL.alt = product[0].altText;
		} else {
			throw new Error ('Product data is missing. Cannot find path to image')
		} 
		}	catch (error) {
			console.error(' an error occured while fetchin the image source', error)
		
		}
		//console.log(product[0].image)
		//console.log(productImageSingle)
		
			/**
			 * 
			 * @NOTE Could maybe make a h2? but figcap works too,
			 or is that the wrong way of doing this?, because all in
			all the title is the description for the picture, like
			the name of the item, right(?)
			*/

			productTitle.classList.add('product__container-box-title');
			productTitle.innerText = product[0].title;

			productDescription.classList.add('product__container-information-description');
			productDescription.classList.add('grid__column--4');
			productDescription.innerText = 'Description: ' +product[0].description;

			toggleProductButton.classList.add('grid__column--4');
			toggleProductButton.innerHTML = 'More Information'

			productFamily.classList.add('product__container-information-family');
			//productFamily.innerText = product[0].family;

			productDurability.classList.add('product__container-information-durability');
			productDurability.innerText = 'Durability: ' + product[0].durability + ' variety';
			console.log(product[0].durability)

			productCategory.classList.add('product__container-information-category');
			productCategory.innerText = 'Type: ' + product[0].category ;

			productFormat.classList.add('product__container-information-format');
			productFormat.innerText = 'Product-Format: ' + product[0].productFormat
			
			productPrice.classList.add('product__container-information-price');
			productPrice.innerText = 'Price: ' + product[0].price


			productStock.classList.add('product__container-information-stock');
			productStock.innerText = 'Items left: ' + product[0].stock

			//Returning node element
			return productContainer;
		}

	/* 	function createDynamicSupplyPageDOM(){
			const supplyContainer = document.createElement('div');
			const supplyBox = document.createElement('div');
			const supplyInformation = document.createElement('div');
			const supplyImageSingle = document.createElement('figure');
			const supplyImageSingleURL = document.createElement('img');
			const supplyTitle = document.createElement('figcaption');
			const supplyDescription = document.createElement('div');
			const supplyFamily = document.createElement('div');
			const supplyDurability = document.createElement('div');
			const supplyCategory = document.createElement('div');
			const supplyFormat = document.createElement('div');

			supplyContainer.appendChild(supplyBox);
			supplyContainer.appendChild(supplyInformation);
			supplyBox.appendChild(supplyTitle);
			supplyBox.appendChild( supplyImageSingle);
			supplyImageSingle.appendChild(supplyImageSingleURL);
			supplyInformation.appendChild(supplyFamily);
			supplyInformation.appendChild(supplyDurability);
			supplyInformation.appendChild(supplyCategory);
			supplyInformation.appendChild(supplyFormat);
			supplyInformation.appendChild(supplyDescription);

			supplyImageSingleURL.src = supply[0].image;
			supplyImageSingleURL.alt = supply[0].altText;

			supplyContainer.classList.add('supply__container');
			supplyBox.classList.add('supply__container-box');
			supplyInformation.classList.add('supply__container-information');
			
			supplyTitle.classList.add('supply__container-box-title');
			supplyTitle.innerText = supply[0].title;

			supplyDescription.classList.add('supply__container-information-description');
			supplyDescription.innerText = supply[0].description;

			supplyFamily.classList.add('supply__container-information-family');
			//supplyFamily.innerText = supply[0].family;

			supplyDurability.classList.add('supply__container-information-durability');
			supplyDurability.innerText = supply[0].durability;

			supplyCategory.classList.add('supply__container-information-category');
			supplyCategory.innerText = supply[0].category;

			supplyFormat.classList.add('supply__container-information-format');
			supplyFormat.innerText = supply[0].format

			return supplyContainer;

		} */

		//Function which renders products(seedAndPlant for now)
		function renderHTML() {
			const singleProduct = document.querySelector('.single-product');
			//const singleSupply = document.querySelector('.single-supply');
			const productContainer = createDynamicProductPageDOM();
			//const supplyContainer = createDynamicSupplyPageDOM();
			
			

			if(productContainer === undefined /* || supplyContainer === undefined */) {
				throw new Error('Container is undefined. Cannot render the product');
			}

			singleProduct.appendChild(productContainer);
			//singleSupply.appendChild(supplyContainer);

		}
		renderHTML();

	} else {
		throw new Error('Slug is undefined. Cannot fetch product!')
	}

};
