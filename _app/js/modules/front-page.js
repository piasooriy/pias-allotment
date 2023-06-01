import FetchSettings from "../modules/fetch-settings.js";

export default async function FrontPageContent() {

	const settings = await FetchSettings();

	//Creating HTML element
	function createFrontpageContainterDOM() {
		const settingsContainer = document.createElement('div');
		settingsContainer.classList.add('settings__containter');
		settingsContainer.classList.add('grid__column--10');
		
		//Appending children to parent
		settingsContainer.appendChild(settingsBox);
		settingsBox.appendChild(about)
		settingsBox.appendChild(socialMediaLinks);
		settingsBox.appendChild(emailContact);
		
		//Creating classnames && grid layout
		const settingsBox = document.createElement('div');
		settingsBox.classList.add('settings__box');
		settingsBox.classList.add('grid__column--5');

		const about = document.createElement('div');
		about.innerText = 'About us: ' + settings[0].about;
		about.classList.add('settings__about');
		about.classList.add('grid__column--3');
		
		const socialMediaLinks = document.createElement('div');
		socialMediaLinks.innerText = 'Find us at: ' + settings[0].socialMedia;
		socialMediaLinks.classList.add('social__media-links');
		
		const emailContact = document.createElement('div');
		emailContact.innerText = 'Contact us at: ' + settings[0].contactEmail;
		emailContact.classList.add('email__contact');

		/**
		 * 
		 * @NOTE Since I am trying to access the first and only item in the array
		 * (which can be found in the console when logging settings)
		 * I need to make sure that I choose those with '[0]' !!
		 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
		 */
		
		return settingsContainer;
	}
	
	//REnder
	function renderHTML() {
		const aboutUs = document.querySelector('.front-page');
		const settingsContainer = createFrontpageContainterDOM();
		aboutUs.appendChild(settingsContainer);
	}
	renderHTML();

	
};


/**
 * 
 * @TODO Remember to implement a try catch!
 * @NOTE Use the template bellow to make your own
 */

/* try {
	//console.log(aboutUs)
	handleResponses(aboutUs);
} catch (error) {
	handleError(error);
}

function handleaboutUs(aboutUs) {
if(aboutUs[0].ok && 
	aboutUs[1].ok){

} else if (
	aboutUs[0].status === 404 ||
	aboutUs[1].status === 404 
) {
	throw new Error('Failed URL!')
} else if (
	aboutUs[0].status > 499 ||
	aboutUs[1].status > 499 
) {
	throw new Error ('Server down!')
} else {
	throw new Error ('Something went wrong!')
}
} */