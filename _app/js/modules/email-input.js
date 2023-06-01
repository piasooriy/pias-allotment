export default function EmailInput(){
	/**
	 * @NOTE This is a simple version of handling email
	 * input validation for email.
	 * @SEE https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation#validating_forms_using_javascript
	 * 
	 */
	const email = document.querySelectorAll('.footer__nav-menu-subscription-submit-email');

	/**
	 * @NOTE an arrow function for form validation. 
	 * Can also be written like this: 
	 * 
	 * if(email) {
	 * email.addEventlistener('input', handleEmailInput);
	 * }
	 * 
	 * function handleEmailInput(event) {
	 * 	emailInput();
	 * }
	 * 
	 * function emailInput(){
	 * 	if(email.validity.typeMismatch){
	 * 	.....
	 * 	} else {
	 * 	.....
	 * 	}
	 * }
	 * 
	 */
	email.addEventListener('input', (event) => {
		if (email.validity.typeMismatch){
			email.setCutomValiditiy('Please enter your email adress here!');
		} else {
			email.setCutomValiditiy('');
		}
	}); 


}