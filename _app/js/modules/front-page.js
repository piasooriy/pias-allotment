import FetchSettings from "../modules/fetch-settings.js";

export default async function FrontPageContent() {

	const settings = await FetchSettings();

	function createFrontpageContainterDOM() {
		const settingsContainer = document.createElement('div');
		settingsContainer.classList.add('settings__containter');
		
		const settingsBox = document.createElement('div');
		settingsBox.classList.add('settings__box');
		
		const socialMediaLinks = document.createElement('div');
		socialMediaLinks.innerText = settings.socialMedia;
		socialMediaLinks.classList.add('social__media-links');
		
		const emailContact = document.createElement('div');
		emailContact.innerText = settings.contactEmail;
		emailContact.classList.add('email__contact');
		
		settingsContainer.appendChild(settingsBox);
		settingsBox.appendChild(socialMediaLinks);
		settingsBox.appendChild(emailContact);
		
		console.log('hei') 
		
	}
	
	function renderHTML() {
		const aboutUs = document.querySelector('.front-page');
		const settingsContainer = createFrontpageContainterDOM();
		aboutUs.appendChild(settingsContainer);
	}
	renderHTML();
	
};