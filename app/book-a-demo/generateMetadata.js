import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('CalendlyWidget.metadata');

  return {
    title: t('title'),
    description: t('description'),
    openGraph: {
      title: t('title'),
      description: t('description'),
      type: 'website',
      locale: t('locale'),
      url: 'https://metaenga.com/book-a-demo',
      siteName: "Metaenga",
    },
    twitter: {
      site: 'https://metaenga.com/book-a-demo',
    },
    alternates: {
      canonical: 'https://metaenga.com/book-a-demo',
      types: {
        'application/rss+xml': 'https://metaenga.com/book-a-demo',
      },
    },
  };
}
