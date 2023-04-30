import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';

import schemas from './schemas/schemas.js';
import settings from './schemas/structure/settings.js';
import newsletter from './schemas/structure/newsletter.js';
import products from './schemas/structure/products.js';

export default {
	title: 'Studio',

	projectId: 'gc535fmx',
	dataset: 'production',

	plugins: [
		deskTool({
			title: 'Newsletter', 
			name: 'newsletter',
		}),
		deskTool({
			title: 'Products', 
			name: 'products',
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
