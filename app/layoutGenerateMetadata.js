import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('Layout.metadata');
   const raw = t.raw('keywords');

  return {
    title: t('title'),
	description: t('description'),
	keywords: Array.isArray(raw) ? raw.join(', ') : raw,
	openGraph: {
		title: t('title'),
		description: t('description'),
		type: 'website',
		locale: t('locale'),
		url: 'https://metaenga.com/',
		siteName: t('siteName'),
		images: [
			{
				url: 'https://metaenga.com/opengraph-image.jpg',
				width: 1200,
				height: 600,
			},
			{
				url: 'https://metaenga.com/opengraph-image.jpg',
				width: 1200,
				height: 600,
			},
		]
	},
	twitter: {
		card: "summary_large_image",
		site: "https://metaenga.com/",
		creator: "Metaenga",
		images: [{
			url: 'https://metaenga.com/opengraph-image.jpg',
			width: 1200,
			height: 600,
		}]
	},
	icons: {
		icon: [
			{ url: 'https://metaenga.com/favicon.ico', rel: 'shortcut icon' },
			{ url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
			{ url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
			{ url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
			
		],
		apple: [
			{ url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
		],
		other: [
			{ rel: 'apple-touch-icon', url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
		],
	},
	//robots: {
	//	index: false,
	//	follow: true,
	//	nocache: true,
	//	googleBot: {
	//		index: true,
	//		follow: false,
	//		noimageindex: true,
	//		'max-video-preview': -1,
	//		'max-image-preview': 'large',
	//		'max-snippet': -1,
	//	},
	//},
	verification: {
		google: 'google',
		yandex: 'yandex',
		yahoo: 'yahoo',
		other: {
			me: ['my-email', 'https://metaenga.com/'],
		},
	},
	alternates: {
		canonical: 'https://metaenga.com/',
		types: {
			'application/rss+xml': 'https://metaenga.com/',
		},
	},
	metadataBase: new URL('https://metaenga.com/'),
    };
}
