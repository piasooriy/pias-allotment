import { Preview } from "sanity";

export default {
	title: 'Settings',
	name: 'settings', 
	type: 'document', 
	fields: [
		{
			title: 'About', 
			name: 'about', 
			type: 'string', 
		}, 
		{
			title: 'Contact', 
			name: 'contact', 
			type: 'string', 
		}, 
		{
			title: 'Social Media', 
			name: 'socialMedia', 
			type: 'string', 
		}, 
		
	]
}