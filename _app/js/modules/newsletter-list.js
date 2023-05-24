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
	 * @Note  Moved sanity.fetch() call to seperate function under modules,
	 * Makes it easier to use with other functions.
	 */

	const newsletters = await FetchNewsletter();
	 
	//console.log(newsletters);
	
	function createNewsletterListContainerDOM() {
	const newsletterListContainer = document.createElement('div');
	newsletterListContainer.classList.add('newsletter-list');
	newsletterListContainer.classList.add('grid');
	
	
		for (const newsletter of newsletters) {
			const newsletterCard = document.createElement('div');
			const newsletterBox = document.createElement ('figure'); 
			const newsletterImage = document.createElement('img');
			const newsletterTitle = document.createElement('figcaption');

			newsletterListContainer.appendChild(newsletterCard);
			newsletterCard.appendChild(newsletterBox);
			newsletterCard.appendChild(newsletterTitle);
			newsletterBox.appendChild(newsletterImage);
			
			newsletterCard.classList.add('newsletter__card');
			newsletterCard.classList.add('grid__column--3');
			newsletterBox.classList.add ('newsletter__box');

			newsletterImage.classList.add('newsletter__image');
			newsletterImage.src = newsletter.image;
			newsletterImage.alt = newsletter.altText;

			newsletterTitle.classList.add('newsletter__title');
			newsletterTitle.innerText = newsletter.title;
		}

		return newsletterListContainer;
		
	}
	
	function renderHTML(){
		const newsletterElement = document.querySelector('.newsletter-container');
		const newsletterListContainer = createNewsletterListContainerDOM();
		newsletterElement.appendChild(newsletterListContainer);
	}		

	renderHTML();
	
};
