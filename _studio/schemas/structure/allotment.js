export default Structure => {
	const { divider, editor, list, documentTypeListItem} =  Structure; 

	return list()
			.title('Allotment')
			.items([
				documentTypeListItem('newsletter'),
				divider(), 
				documentTypeListItem('seedAndPlant'),
				documentTypeListItem('supply'),
				divider(),
				documentTypeListItem('family'),
			])
};