export default {
	title: 'Family', 
	name: 'family', 
	type: 'document', 
	fields: [
		{
			title: 'Name', 
			name: 'name', 
			type: 'string',
			description: 'Enter plant family name'
		},
		{
			title: 'Image', 
			name: 'image', 
			type: 'image',
			validation: rule => rule.required(),
			fields: [
				{
					name: 'alt', 
					type: 'string', 
					validation: rule => rule.required(), 
					description: 'Please enter alternative text description for the image here'
				}
			]
		},
		{
			title: 'Slug', 
			title: 'slug', 
			type: 'slug',
			validation: rule => rule.required(),
			options: {
				source: 'name'
			},
		},
		{
			title: 'Description', 
			name: 'description', 
			type: 'text', 
			description: 'Add a description about the plant family',
			validation: rule => rule.required(),
		}
	]
}