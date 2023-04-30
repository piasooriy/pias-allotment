import { Preview } from "sanity";

export default {
	title: 'Settings',
	name: 'settings', 
	type: 'document', 
	fields: [
		{
			title:'Announcement', 
			name: 'announcement', 
			type: 'object', 
			fields: [
				{
					title: 'Text', 
					name: 'text', 
					type: 'string',
					vaidation: rule => rule.max(250).warning('Max 250 characters'),
				}, 
				{
					title: 'Visible', 
					name: 'visible', 
					type: 'boolean', 
				}
			]
		}, 
		{
			title: 'About', 
			name: 'about', 
			type: 'string', 
		}, 
		{
			title: 'Contact e-mail', 
			name: 'contactEmail', 
			type: 'string', 
		}, 
		{
			title: 'Social Media', 
			name: 'socialMedia', 
			type: 'string', 
		}, 
		
	]
}