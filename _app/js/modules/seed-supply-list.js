import FetchProduct from "../modules/fetch-product.js";
import { readSlug } from "../util/utils.js";

export default async function SeedAndSupply() {
	const slug = readSlug();
	if(slug === undefined) {
	const products = await FetchProduct();
	//console.log(products);
	//console.log(products.title)
	
	/**
	 * 
	 * @NOTE Moved the fetch call to seperate function -> 
	 * @SEE fetch-products under modules!!
	 */		 
	
	function createproductListContainerDOM() {
	const productListContainer = document.createElement('div');
	productListContainer.classList.add('product-list');
	productListContainer.classList.add('grid');

		for (const product of products.seedAndPlant) {
			const productCard = document.createElement('a');
			const productBox = document.createElement ('figure'); 
			const productImage = document.createElement('img');
			const productTitle = document.createElement('figcaption');

			productCard.setAttribute('href', `/product/?${product.slug}`);
			/**
			 * 
			 * @NOTE Making a link based on the slug here, which can be 
			 * accessed when hovering over and/or clicked on productCard 
			 * due to function readSlug in utils(under util).
			 */

			productListContainer.appendChild(productCard);
			productCard.appendChild(productBox)
			productCard.appendChild(productTitle);
			productBox.appendChild(productImage);

			productCard.classList.add('product__card');
			productCard.classList.add('grid__column--3');
			productBox.classList.add('product__box');

			/**
			 * 
			 * @Note By using className you remove the other classnames and use
			only the one that you make here. If you use classList it just
			adds on top of the other classnames. If we need i.e. a toggle function
			we need to have an classlist(i.e. when using add eventlistener with
			--block or --hidden, which adds a classname on top of exsisting classname, without
			removing it).
			Since I am generating everything in js I could 
			use classname = 'product__box', but I decided to keep using classlist
			to make it more coherent with everything else in the project, and who
			knows, maybe I want to make everything toggle-ble in the future?. 
			 */

			productImage.classList.add('product__image');
			productImage.src = product.image;
			productImage.alt = product.altText;
			//console.log(product.image)

			productTitle.classList.add('product__title');
			productTitle.innerText = product.title;
		}

		/**
		 * @NOTE Maybe there is a better way to access information 
		 * from two different scemas, but this was the simplest way
		 * of doing it. It looks very long, but at least it is easily 
		 * understandable. 
		 */
		for (const product of products.supply) {
			const productCard = document.createElement('a');
			const productBox = document.createElement ('figure'); 
			const productImage = document.createElement('img');
			const productTitle = document.createElement('figcaption');

			productCard.setAttribute('href', `/product/?${product.slug}`);
			/**
			 * 
			 * @NOTE Making a link based on the slug here, which can be 
			 * accessed when hovering over and/or clicked on productCard 
			 * due to function readSlug in utils(under util).
			 */

			productListContainer.appendChild(productCard);
			productCard.appendChild(productBox)
			productCard.appendChild(productTitle);
			productBox.appendChild(productImage);

			productCard.classList.add('product__card');
			productCard.classList.add('grid__column--3');
			productBox.classList.add('product__box');

			/**
			 * 
			 * @Note By using className you remove the other classnames and use
			only the one that you make here. If you use classList it just
			adds on top of the other classnames. If we need i.e. a toggle function
			we need to have an classlist(i.e. when using add eventlistener with
			--block or --hidden, which adds a classname on top of exsisting classname, without
			removing it).
			Since I am generating everything in js I could 
			use classname = 'product__box', but I decided to keep using classlist
			to make it more coherent with everything else in the project, and who
			knows, maybe I want to make everything toggle-ble in the future?. 
			 */

			productImage.classList.add('product__image');
			productImage.src = product.image;
			productImage.alt = product.altText;
			//console.log(product.image)

			productTitle.classList.add('product__title');
			productTitle.innerText = product.title;
		}

		return productListContainer;
		
	}
	
	function renderHTML(){

		/**
		 * 
		 * @NOTE Made a classname for main in index(different one for each
		 * page) and used queryselector to access it in js, this
		 * is to minimize the files in js, I just import all of these
		 * in main.js!!!
		 */
		const mainElement = document.querySelector('.seed__and-supplies');
		const productListContainer = createproductListContainerDOM();
		mainElement.appendChild(productListContainer);
	}		

	renderHTML();

}
	
};


