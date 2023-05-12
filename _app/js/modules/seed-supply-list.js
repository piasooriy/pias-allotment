import {sanity} from "../sanity.js";

export default async function seedAndSupply() {
	const query = `*[_type == 'seedAndPlant']{  
		title, 
		"image": picture.asset->url,  
		"altText": picture.alt,
		slug,
		 }`;	 

	const products = await sanity.fetch(query);
	
	console.log(products);
	
	function createproductListContainerDOM() {
	const productListContainer = document.createElement('div');
	productListContainer.className = 'product-list';
	
	
		for (const product of products) {
			const productCard = document.createElement('div');
			const productBox = document.createElement ('figure'); 
			const productImage = document.createElement('img');
			const productTitle = document.createElement('figcaption');

			productListContainer.appendChild(productCard);
			productListContainer.appendChild(productTitle);
			productCard.appendChild(productBox)
			productBox.appendChild(productImage);

			productCard.className = 'product__card';
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
		const productListContainer = createproductListContainerDOM();
		document.body.appendChild(productListContainer);
	}		

	renderHTML();
	
};


