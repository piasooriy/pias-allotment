import { readSlug } from "../util/utils.js";
import FetchSingleNewsletterPost from "./fetch-single-newsletter.js";

export default async function GetNewsletterPost() {
	const newsletterPost = await FetchSingleNewsletterPost();
	const slug = readSlug();


	console.log(newsletterPost)

	if (slug !== undefined) {
		console.log(slug);
		function createDynamicNewsletterPageDOM(){
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

			newsletterContainer.appendChild(newsletterBox);
			newsletterContainer.appendChild(newsletterInformation);
			newsletterBox.appendChild(newsletterTitle);
			newsletterBox.appendChild( newsletterImageSingle);
			newsletterImageSingle.appendChild(newsletterImageSingleURL);
			newsletterInformation.appendChild(newsletterPlantType);
			newsletterInformation.appendChild(newsletterAuthor);
			newsletterInformation.appendChild(newsletterDescription);
			newsletterInformation.appendChild(newsletterDirection);
			newsletterInformation.appendChild(newsletterSupply);

			newsletterContainer.classList.add('newsletter__container');
			newsletterBox.classList.add('newsletter__box');
			newsletterInformation.classList.add('newsletter__information');

			newsletterImageSingleURL.classList.add('newsletter__container-box-image');
			newsletterImageSingleURL.src = newsletterPost[0].image;
			newsletterImageSingleURL.alt = newsletterPost[0].altText;


			newsletterTitle.classList.add('newsletter__container-box-title');
			newsletterTitle.innerText = newsletterPost[0].title;

			newsletterDescription.classList.add('newsletter__container-information-description');
			newsletterDescription.innerText = newsletterPost[0].descriptiveText;

			newsletterAuthor.classList.add('newsletter__container-information-author');
			newsletterAuthor.innerText = 'Author : '+newsletterPost[0].author;

			newsletterDirection.classList.add('newsletter__container-box-title');
			newsletterDirection.innerText = newsletterPost[0].direction;

			newsletterPlantType.classList.add('newsletter__container-box-plant-type');
			newsletterPlantType.innerText = newsletterPost[0].seedAndPlant;

			newsletterSupply.classList.add('newsletter__container-box-supply');
			newsletterSupply.innerHTML = newsletterPost[0].supply;

			console.log(newsletterContainer)
			return newsletterContainer;

		}

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