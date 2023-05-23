import FetchSettings from "../modules/fetch-settings.js";

export default async function FrontPageContent() {

	const settings = await FetchSettings();

	function createFrontpageContainterDOM() {
		const settingsContainer = document.createElement('div');
		settingsContainer.classList.add('settings__containter');
		//settingsContainer.classList.add('grid__column--8');
		
		const settingsBox = document.createElement('div');
		settingsBox.classList.add('settings__box');
		settingsBox.classList.add('grid__column--5');

		const about = document.createElement('div');
		about.innerText = settings[0].about;
		about.classList.add('settings__about');
		about.classList.add('grid__column--3');
		
		const socialMediaLinks = document.createElement('div');
		socialMediaLinks.innerText = settings[0].socialMedia;
		socialMediaLinks.classList.add('social__media-links');
		
		const emailContact = document.createElement('div');
		emailContact.innerText = settings[0].contactEmail;
		emailContact.classList.add('email__contact');

		/**
		 * 
		 * @Note Since I am trying to access the first and only item in the array
		 * (which can be found in the console when logging settings)
		 * I need to make sure that I choose those with[0]!!
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
		 */
		
		settingsContainer.appendChild(settingsBox);
		settingsBox.appendChild(about)
		settingsBox.appendChild(socialMediaLinks);
		settingsBox.appendChild(emailContact);
		
		return settingsContainer;
	}
	
	function renderHTML() {
		const aboutUs = document.querySelector('.front-page');
		const settingsContainer = createFrontpageContainterDOM();
		aboutUs.appendChild(settingsContainer);
	}
	renderHTML();
	
};