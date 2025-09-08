

import { getTranslations } from 'next-intl/server';

export async function generateMetadata( params ) {
	const t = await getTranslations('AboutUs.Metadata');

	return {
		title: t('title'),
	description: t('description'),
	openGraph: {
		title: t('title') ,
		description: t('description'),
		type: 'website',
		locale: t('locale'),
		url: 'https://metaenga.com/about-us',
		siteName: "Metaenga",
	},
	twitter: {
		site: "https://metaenga.com/about-us",
	},
	alternates: {
		canonical: 'https://metaenga.com/about-us',
		types: {
			'application/rss+xml': 'https://metaenga.com/about-us',
		},
	},
	};
}
