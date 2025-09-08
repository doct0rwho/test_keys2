import Head from 'next/head'
import Script from 'next/script';
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'
import { headers } from 'next/headers';
// import { Figtree } from 'next/font/google'

import {NextIntlClientProvider} from 'next-intl';
import {getLocale} from 'next-intl/server';

// const figtree = Figtree({ subsets: ['latin'], style: 'normal', weight: ['400', '500', '600', '700', '800', '900'] })
import { Inter, Figtree } from 'next/font/google';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });
const figtree = Figtree({ subsets: ['latin'] });


import Header  from './components/Header'
import  Footer  from './components/Footer'
import { Toast } from './ui/toast/Toast'


import './globals.css'

export { generateMetadata } from './layoutGenerateMetadata';


const Cookie = dynamic(() => import('@/app/components/Cookie'), {
	ssr: false,
});

const Hotjar = dynamic(() => import('@/app/components/hotjar/Hotjar'), {
	ssr: false,
});

export default async  function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {

	 const locale = await getLocale();
	const headersList = headers();
	const hostname = headersList.get('host');

	const isMetaenga = hostname === 'metaenga.com';

	return (
		<html lang={locale}>
			<Head>
				<meta name="google-site-verification" content="LqvMZiTzE0hBVuo7d6CnUyrKcZWCZrV8kJmhO7bSadU" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="shortcut icon" href="/favicon.ico" />
			</Head>

	<body className={locale === 'en' ? figtree.className : inter.className}>


				<Header />
				<NextIntlClientProvider>
					{children}
				</NextIntlClientProvider>
				
				<Footer />
				<Toast />
				<Cookie />
				{/*<SupportChat />*/}
				<Hotjar />
				{isMetaenga && <>
					<Script
						id='gtm'
						strategy="afterInteractive"
						dangerouslySetInnerHTML={{
							__html: `
								 (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
								 new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
								 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
								 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
								 })(window,document,'script','dataLayer','GTM-WNRBWH62');
							`
						}}
					/>

				</>}

			</body>
		</html>
	)
}
