import FetchNewsletter from "../modules/fetch-newsletter.js";

export default async function NewsletterList() {
	/* const query = `*[_type == 'newsletter']{
		title,
		"image": image.asset->url,  
		"altText": image.alt,
		slug,
	 }`;
 */
	/***
	 * @NOTE  Moved sanity.fetch() call to seperate function under modules,
	 * Makes it easier to use with other functions.
	 */

	const newsletters = await FetchNewsletter();
	 
	////console.log(newsletters);
	
	//Creating HTML elements
	function createNewsletterListContainerDOM() {
	const newsletterListContainer = document.createElement('div');
	newsletterListContainer.classList.add('newsletter-list');
	newsletterListContainer.classList.add('grid');
	
	
		for (const newsletter of newsletters) {
			const newsletterCard = document.createElement('a');
			const newsletterBox = document.createElement ('figure'); 
			const newsletterImage = document.createElement('img');
			const newsletterTitle = document.createElement('figcaption');
			
			//Setting attribute for slug to later redirect to new window
			newsletterCard.setAttribute('href', `/newsletter-post/?${newsletter.slug}`)

			//Appending children
			newsletterListContainer.appendChild(newsletterCard);
			newsletterCard.appendChild(newsletterBox);
			newsletterCard.appendChild(newsletterTitle);
			newsletterBox.appendChild(newsletterImage);
			
			//Creating classnames and adding grid layout
			newsletterCard.classList.add('newsletter__card');
			newsletterCard.classList.add('grid__column--3');
			newsletterBox.classList.add ('newsletter__box');

			newsletterImage.classList.add('newsletter__image');
			newsletterImage.src = newsletter.image;
			newsletterImage.alt = newsletter.altText;

			newsletterTitle.classList.add('newsletter__title');
			newsletterTitle.innerText = newsletter.title;
		}

		//Returning node
		return newsletterListContainer;
		
	}
	
	//Render 
	function renderHTML(){
		const newsletterElement = document.querySelector('.newsletter');
		const newsletterListContainer = createNewsletterListContainerDOM();
		newsletterElement.appendChild(newsletterListContainer);
	}		

	//Calling render function
	renderHTML();
	
};
