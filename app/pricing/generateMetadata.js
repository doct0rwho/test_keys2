import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }) {
	const t = await getTranslations('Pricing.Metadata');

	const title = t('title');
	const description = t('description');
	const locale = t('locale');

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			locale,
			url: 'https://metaenga.com/pricing',
			siteName: 'Metaenga',
		},
		twitter: {
			site: 'https://metaenga.com/pricing',
		},
		alternates: {
			canonical: 'https://metaenga.com/pricing',
			types: {
				'application/rss+xml': 'https://metaenga.com/pricing',
			},
		},
	};
}
