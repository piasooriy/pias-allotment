export default {
	title: 'Newsletter',
	name: 'newsletter',
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
			title: 'Author', 
			name: 'author', 
			type: 'string',
			validation: rule => rule.required(),
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
					description: 'Enter an alternative text for the image here'
				}
			]
		}, 
		{
			title: 'Desciptive text', 
			name: 'descriptiveText', 
			type: 'text', 
			validation: rule => rule.required(),
			vaidation: rule => rule.max(500).warning('Max 500 characters'),
		},
		{
			title: 'Direction', 
			name: 'direction', 
			type: 'text', 
			validation: rule => rule.required(),
		},
		{
			title: 'Seed and Plant', 
			name: 'seedAndPlant', 
			type:'reference',
			to: {type: 'seedAndPlant'}
		},
		{
			title: 'Supply',
			name: 'supply',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: {
						type: 'supply'
					}
				}
			]
		},
		{
			title: 'Published date', 
			name: 'publishedDate', 
			type: 'date', 
			options: {
				dateformat: 'YYYY-MM-DD',
				calenderTodayLabel: 'today'
			}
		}
	]
}