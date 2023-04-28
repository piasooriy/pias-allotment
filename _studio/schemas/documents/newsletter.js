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
				}
			]
		}, 
		{
			title: 'Desciptive text', 
			name: 'descriptiveText', 
			type: 'text', 
			validation: rule => rule.required(),
		},
		{
			title: 'Direction', 
			name: 'direction', 
			type: 'text', 
			validation: rule => rule.required(),
		},
		/* {
			title: 'Supplies', 
			name: 'supplies', 
			type: 'array', 
			of: [
				{
					type: 'reference', 
					to: {
						type: 'seed'
					}
				}
			]
		}, */
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