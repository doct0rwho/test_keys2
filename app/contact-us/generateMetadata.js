

import { getTranslations } from 'next-intl/server';

export async function generateMetadata( params ) {
	const t = await getTranslations('ContactUs.metadata');

	return {
		title: t('title'),
		description: t('description'),
		openGraph: {
			title: t('title'),
			description: t('description'),
			type: 'website',
			locale: t('locale'), // напр. 'en_US' або 'uk_UA'
			url: 'https://metaenga.com/contact-us',
			siteName: 'Metaenga',
		},
		twitter: {
			site: 'https://metaenga.com/contact-us',
		},
		alternates: {
			canonical: 'https://metaenga.com/contact-us',
			types: {
				'application/rss+xml': 'https://metaenga.com/contact-us',
			},
		},
	};
}
