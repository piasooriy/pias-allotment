import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './schemas/structure/settings.js';
import allotment from './schemas/structure/allotment.js';
import about from './schemas/structure/about.js';



export default {
	title: 'Studio',

	projectId: 'gc535fmx',
	dataset: 'production',

	plugins: [
		deskTool({
			title: 'Allotment', 
			name: 'allotment',
			structure: allotment
		}),
		
		deskTool({
			title: 'About',
			name: 'about',
			structure: about
		}),
		deskTool({
			title: 'Settings',
			name: 'settings',
			structure: settings
		}),

		visionTool()
	],

	schema: {
		types: schemas,
	},
};
