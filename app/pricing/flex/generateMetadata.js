import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('ChooseModules.metadata');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: t('locale'),
   	url: 'https://metaenga.com/pricing/flex',
		siteName: "Metaenga",
	},
	twitter: {
		site: "https://metaenga.com/pricing/flex",
	},
	alternates: {
		canonical: 'https://metaenga.com/pricing/flex',
		types: {
			'application/rss+xml': 'https://metaenga.com/pricing/flex',
		},
	},
  };
}
