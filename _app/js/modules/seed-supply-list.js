import {sanity} from "../sanity.js";
import { readSlug } from "../util/utils.js";

export default async function seedAndSupply() {
	const slug = readSlug();
	if(slug === undefined) {

	const query = `*[_type == 'seedAndPlant']{  
		title, 
		"image": picture.asset->url,  
		"altText": picture.alt,
		"slug": slug.current
		 }`;	 

	const products = await sanity.fetch(query);
	
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

	console.log(products);
/***
 * @todo Move all fetch functions outside of the module, easier to 
	reasue the fetch for other modules, in case you need it to make a 
	seperate search filter, etc. You can import it the way you do
	{sanity}
 */
	
	
	function createproductListContainerDOM() {
	const productListContainer = document.createElement('div');
	productListContainer.className = 'product-list grid';

		for (const product of products) {
			const productCard = document.createElement('a');
			const productBox = document.createElement ('figure'); 
			const productImage = document.createElement('img');
			const productTitle = document.createElement('figcaption');

			productCard.setAttribute('href', `/product/?${product.slug}`);
			

			productListContainer.appendChild(productCard);
			productCard.appendChild(productBox)
			productCard.appendChild(productTitle);
			productBox.appendChild(productImage);

			productCard.className = 'product__card grid__column--3';
			productBox.className = 'product__box';

			/* By using className you remove the other classnames and use
			only the one that you make here. If you use classList it just
			adds on top of the other classnames. If we need a toggle function
			we need to have an classlist(i.e. when using add eventlistener with
			--block or --hidden) */

			productImage.className = 'product__image';
			productImage.src = product.image;
			productImage.alt = product.altText;

			productTitle.className = 'product__title';
			productTitle.innerText = product.title;
		}

		return productListContainer;
		
	}
	
	function renderHTML(){

		/**
		 * 
		 * @todo Make a classname for main(different one for each
		 * page) and use queryselector to access it in js!!!
		 */
		const mainElement = document.querySelector('main');
		const productListContainer = createproductListContainerDOM();
		mainElement.appendChild(productListContainer);
	}		

	renderHTML();

}
	
};


