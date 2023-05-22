import {sanity} from "../sanity.js";

export default async function FetchAbout() {
	const aboutQuery = `*[_type == 'about']{         
_id,
history, 
title, 
operningHours   
 }`;
const about = await sanity.fetch(aboutQuery);

//console.log(about);

return about;
}

