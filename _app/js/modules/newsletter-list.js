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
 * @Note Tried moving the query in a seperate fetch module
 * to make sure that I can reuse the query easily for other
 * things too!
 */

	//change query to newsletterQuery
	const newsletters = await FetchNewsletter();
	 
	//console.log(newsletters);
	
	function createNewsletterListContainerDOM() {
	const newsletterListContainer = document.createElement('div');
	newsletterListContainer.className = 'newsletter-list grid';
	
	
		for (const newsletter of newsletters) {
			const newsletterCard = document.createElement('div');
			const newsletterBox = document.createElement ('figure'); 
			const newsletterImage = document.createElement('img');
			const newsletterTitle = document.createElement('figcaption');

			newsletterListContainer.appendChild(newsletterCard);
			newsletterCard.appendChild(newsletterBox);
			newsletterCard.appendChild(newsletterTitle);
			newsletterBox.appendChild(newsletterImage);
			
			newsletterCard.className = 'newsletter__card grid__column--3';
			newsletterBox.className = 'newsletter__box';

			newsletterImage.className = 'newsletter__image';
			newsletterImage.src = newsletter.image;
			newsletterImage.alt = newsletter.altText;

			newsletterTitle.className = 'newsletter__title';
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
