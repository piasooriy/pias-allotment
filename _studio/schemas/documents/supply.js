export default{
	title: 'Supply', 
	name: 'supply', 
	type: 'document', 
	fields: [
		{
			title: 'Title', 
			name: 'title', 
			type: 'string', 
		}, 
		{
			title: 'Slug', 
			name: 'slug', 
			type: 'slug', 
			validation: rule => rule.required(),
			options: {
				source: 'title'
			}
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
					description: 'Enter an alternative text here for the product image',
				}
			] 
		},
		{
			title: 'Price', 
			name: 'price', 
			type: 'number', 
			description: 'Enter price for product here'
		},	
		{
			title: 'Stock', 
			name: 'stock', 
			type: 'number', 
			validation: rule => rule.required(),
		},
		{
			title: 'Description', 
			name: 'description', 
			type: 'text', 
			validation: rule => rule.required(),
			vaidation: rule => rule.max(500).warning('Max 500 characters'),
		}, 
		
	]
}