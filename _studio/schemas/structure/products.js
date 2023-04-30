export default Structure => {
	const { divider, editor, list, documentTypeListItem} =  Structure; 

	return list()
			.title('products')
			.items([
				documentTypeListItem('seedAndPlant'),
				documentTypeListItem('supply'),
				divider(),
				documentTypeListItem('family'),
			])
};