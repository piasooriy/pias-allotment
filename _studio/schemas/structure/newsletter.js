export default Structure => {
	const { divider, editor, list, documentTypeListItem} =  Structure; 

	return list()
			.title('Newsletter')
			.items([
				documentTypeListItem('newsletter'),
			])
}