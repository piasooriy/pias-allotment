export default {
	title: 'Seed and Plant', 
	name: 'seedAndPlant', 
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
			title: 'Picture',
			name: 'picture', 
			type: 'image', 
			validation: rule => rule.required(),
			fields: [
				{
					name: 'alt', 
					type: 'string', 
					validation: rule => rule.required(),
					description: 'Enter an alternative text for the picture here'
				}
			] 
		}, 
		{
			title: 'Price', 
			name: 'price', 
			type: 'number', 
			description: 'Enter price for plant or seed her in NOK'
		},
		{
			title: 'Stock', 
			name: 'stock', 
			type: 'number', 
			validation: rule => rule.required(),
		}, 
		{
			title: 'Family', 
			name: 'family', 
			type:'reference',
			to: {type: 'family'}
		},
		{
			title: 'Category', 
			name: 'category', 
			type: 'string', 
			options: {
				description: 'Enter plant trait',
				list: [
					'Evergreen', 
					'Flowering', 
					'Fruit', 
					'Vegetable'
				]
			}
		},
		{
			title: 'Description', 
			name: 'description', 
			type: 'text', 
			validation: rule => rule.required(),
			vaidation: rule => rule.max(500).warning('Max 500 characters'),
		}, 
		{
			title: 'Product Format', 
			name: 'productFormat', 
			type: 'string', 
			options: {
				list: [
					'Tree',
					'Bush',
					'Seed', 
					'Seedling', 
				]
			}
		}, 
		{
			title: 'Durability', 
			name: 'durability', 
			type: 'string', 
			options: {
				list: [
					'Perennial', 
					'Annual',
				]
			}
		}
	]
}