

import { getTranslations } from 'next-intl/server';

export async function generateMetadata( params ) {
	const t = await getTranslations('Sales.metadata');

	return {
	title: t(`title`),
	description: t(`description`),
	openGraph: {
		title: t(`title`),
		description: t(`description`),
		type: 'website',
		locale: t(`locale`),
		url: 'https://metaenga.com/contact-sales',
		siteName: "Metaenga",
	},
	twitter: {
		site: "https://metaenga.com/contact-sales",
	},
	alternates: {
		canonical: 'https://metaenga.com/contact-sales',
		types: {
			'application/rss+xml': 'https://metaenga.com/contact-sales',
		},
	}
}
}
