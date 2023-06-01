export default function ToggleNewsletter() {
	let directionVisible = false;

	const toggleNewsletterButton = document.querySelector('.newsletter__container-information-toggle-section-button');
	const toggleNewsletterSection = document.querySelector('.newsletter__container-information-toggle-section');

	//EventListener
	if (toggleNewsletterButton) {
		toggleNewsletterButton.addEventListener('click', handleToggleNewsletterButtonOnClick);
	}

	//Eventhandler

	function handleToggleNewsletterButtonOnClick(event) {
		toggleDirection();
		renderDirectionHTML();
	}

	//Method

	function toggleDirection() {
		directionVisible = !directionVisible;
	}

	//render
	function renderDirectionHTML() {
		if (directionVisible === true) {
			toggleNewsletterSection.classList.add('newsletter__container-information-toggle-section--visible')
		} else {
			toggleNewsletterSection.classList.remove('newsletter__container-information-toggle-section--visible')
		}
	}
}