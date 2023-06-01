export default function ToggleProduct() {
	let informationVisible = false;

	const toggleProductButton = document.querySelector('.product__container-information-toggle-button');
	const toggleProductSection = document.querySelector('.product__container-information-toggle-section');

	//EventListener
	if (toggleProductButton) {
		toggleProductButton.addEventListener('click', handleToggleProductButtonOnClick);
	}

	//Eventhandler

	function handleToggleProductButtonOnClick(event) {
		toggleInformation();
		renderInformationHTML();
	}

	//Method

	function toggleInformation() {
		informationVisible = !informationVisible;
	}

	//render
	function renderInformationHTML() {
		if (informationVisible === true) {
			toggleProductSection.classList.add('product__container-information-toggle-section--visible')
		} else {
			toggleProductSection.classList.remove('product__container-information-toggle-section--visible')
		}
	}
}