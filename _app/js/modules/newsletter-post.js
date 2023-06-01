import { readSlug } from "../util/utils.js";
import FetchSingleNewsletterPost from "./fetch-single-newsletter.js";

export default async function GetNewsletterPost() {
	const newsletterPost = await FetchSingleNewsletterPost();
	const slug = readSlug();
	console.log(newsletterPost)

	if (slug !== undefined) {
		console.log(slug);
		function createDynamicNewsletterPageDOM(){
			//Creating HTML elements
			const newsletterContainer = document.createElement('div');
			const newsletterBox = document.createElement('div');
			const newsletterInformation = document.createElement('div');
			const newsletterImageSingle = document.createElement('figure');
			const newsletterImageSingleURL = document.createElement('img');
			const newsletterTitle = document.createElement('figcaption');
			const newsletterDescription = document.createElement('div');
			const newsletterAuthor = document.createElement('div');
			const newsletterDirection = document.createElement('div');
			const newsletterPlantType = document.createElement('div');
			const newsletterSupply = document.createElement('div');
			const toggleSection = document.querySelector('.newsletter__container-information-toggle-section');
			const toggleButton = document.querySelector('.newsletter__container-information-toggle-section-button');

			//Appending children to parent
			newsletterContainer.appendChild(newsletterBox);
			newsletterContainer.appendChild(newsletterInformation);
			newsletterBox.appendChild(newsletterTitle);
			newsletterBox.appendChild( newsletterImageSingle);
			newsletterImageSingle.appendChild(newsletterImageSingleURL);
			newsletterInformation.appendChild(newsletterPlantType);
			newsletterInformation.appendChild(newsletterAuthor);
			newsletterInformation.appendChild(newsletterDescription);
			newsletterInformation.appendChild(toggleButton);
			newsletterInformation.appendChild(toggleSection);
			toggleSection.appendChild(newsletterDirection);
			toggleSection.appendChild(newsletterSupply);

			//Creating classnames and choosing data from query
			newsletterContainer.classList.add('newsletter__container');
			newsletterContainer.classList.add('grid');
			newsletterContainer.classList.add('grid__column--8');
			newsletterBox.classList.add('newsletter__container-box');
			newsletterBox.classList.add('grid__coloumn--8');
			newsletterInformation.classList.add('newsletter__information');
			newsletterInformation.classList.add('grid');
			newsletterInformation.classList.add('grid__column--12');
			toggleSection.classList.add('grid__column--12');

			newsletterImageSingleURL.classList.add('newsletter__container-box-image');
			newsletterImageSingleURL.src = newsletterPost[0].image;
			newsletterImageSingleURL.alt = newsletterPost[0].altText;


			newsletterTitle.classList.add('newsletter__container-box-title');
			newsletterTitle.innerText = newsletterPost[0].title;

			newsletterDescription.classList.add('newsletter__container-information-description');
			newsletterDescription.classList.add('grid__column--12');
			newsletterDescription.innerText = 'Description: '+ newsletterPost[0].descriptiveText;

			newsletterAuthor.classList.add('newsletter__container-information-author');
			newsletterAuthor.classList.add('grid__column--12');
			newsletterAuthor.innerText = 'Author : '+newsletterPost[0].author;

			
			toggleButton.classList.add('grid__column--12');
			toggleButton.innerHTML = 'Directions'

			newsletterDirection.classList.add('newsletter__container-box-direction');
			newsletterDirection.classList.add('grid__column--12');
			newsletterDirection.innerText = newsletterPost[0].direction;

			newsletterPlantType.classList.add('newsletter__container-box-plant-type');
			newsletterPlantType.classList.add('grid__column--12');
			newsletterPlantType.innerText = newsletterPost[0].seedAndPlant;

			newsletterSupply.classList.add('newsletter__container-box-supply');
			newsletterSupply.classList.add('grid__column--12');
			newsletterSupply.innerHTML = 'Supplies you will need: '+ newsletterPost[0].supply;

			console.log(newsletterContainer)
			
			//Returning the node-element,which we will use later
			return newsletterContainer;

		}

		//Function which renders newsletter-post
		function renderHTML () {
			const newsletterSinglePost = document.querySelector('.newsletter__container');
			const newsletterContainer = createDynamicNewsletterPageDOM();
			newsletterSinglePost.appendChild(newsletterContainer);
		}
		renderHTML();

	} else {
		throw new Error ('Slug is undefined. Cannot fetch newsletter post!!')
	}

}