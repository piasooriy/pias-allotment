export default {
	title: 'About', 
	name: 'about', 
	type: 'document', 
	fields: [
		{
			title: 'Title', 
			name: 'title', 
			type: 'string', 
		}, 
		{
			title: 'History', 
			name: 'history', 
			type: 'text', 
		}, 
		{
			title: 'Opening Hours', 
			name: 'openingHours', 
			type: 'string',
		}, 
	],
	preview: {
		prepare: () => {
			return {
				title: 'about'
			}
		}
	}
}