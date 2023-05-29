import { sanity } from "../sanity.js";

export default async function FetchSettings() {
	const settingsQuery = `*[_type == 'settings']{       
		_id,
		announcement, 
		about, 
		socialMedia,
		contactEmail,   
		 }
		`;


	const settings = await sanity.fetch(settingsQuery);
	////console.log(settings)

	return settings;

};