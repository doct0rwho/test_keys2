import { getTranslations } from 'next-intl/server';

export async function getLocalizedMetadata() {
	const t = await getTranslations('VRLibrary');

	return {
	title:t(`metadataTitle`),
	description: t(`metadataDescription`),
	openGraph: {
		title: t(`openGraph.title`),
		description: t(`openGraph.description`),
		type: 'website',
		locale: t(`openGraph.locale`),
		url: 'https://metaenga.com/vr-training-library',
		siteName: "Metaenga",
	},
	twitter: {
		site: "https://metaenga.com/vr-training-library",
	},
	alternates: {
		canonical: 'https://metaenga.com/vr-training-library',
		types: {
			'application/rss+xml': 'https://metaenga.com/vr-training-library',
		},
	}
    };
}
