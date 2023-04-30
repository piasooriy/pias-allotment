export default Structure => {
	const { divider, editor, list, listItem, documentTypeList, documentTypeListItem} =  Structure; 

	return list()
			.title('settings')
			.items([
				documentTypeListItem('about'),
				divider(),
				documentTypeListItem('settings')
			])
};