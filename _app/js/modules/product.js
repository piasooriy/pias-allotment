import { readSlug } from "../util/utils.js";

export default async function getProduct() {


	const slug = readSlug();

	console.log(slug);

	if(slug !== undefined) {
		console.log(slug);

		
	}

}