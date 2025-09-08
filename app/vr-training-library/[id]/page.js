import dynamic from "next/dynamic";
import { getTrainingInfo } from "../../data/GetTrainingInfo";
import { Details } from "./components/Details";
import { Overview } from "./components/Overview";
import { Promo } from "./components/Promo";
import { Inctruction } from "./components/Instruction";
import { Suspense } from "react";
import Loading from "./loading";
import Error from "./error";
import { RandomLibTrainings } from "./components/RandomLibTrainings";
import FAQServerWrapper from '@/app/(home)/components/FAQServerWrapper';
import { getTranslations } from 'next-intl/server';

const Gallery = dynamic(() => import('./components/Gallery'), {
	ssr: false,
});

// const FAQ = dynamic(() => import('@/app/(home)/components/FAQ'), {
// 	ssr: false,
// });

const ScrollUp = dynamic(() => import('../../ui/autoScrollUp/AutoScrollUp'), {
	ssr: false,
});

async function getTraining(trainingId) {
	const training = await getTrainingInfo(trainingId); // ← потрібен await
	return training;
}

export async function generateMetadata({ params: { id } }) {
	const training = await getTraining(id)
	if (!training) {
		return {}
	} 
	return {
		title: `${training.shortname}`,
		description: `${training.shortdescr}`,
		keywords: training.keywords,
		openGraph: {
			title: `${training.shortname}`,
			description: `${training.shortdescr}`,
			type: 'website',
			locale: 'en_US',
			url: `${`https://metaenga.com/vr-training-library/` + training.linkid}`,
			siteName: "Metaenga",
			images: [{
				url: 'https://metaenga.com' + training.cardimg,
				width: 1200,
				height: 600,
			}]
		},
		twitter: {
			card: "summary_large_image",
			site: `${`https://metaenga.com/vr-training-library/` + training.linkid}`,
			creator: "Metaenga",
			images: [{
				url: 'https://metaenga.com' + training.cardimg,
				width: 1200,
				height: 600,
			}]
		},
		alternates: {
			canonical: `${`https://metaenga.com/vr-training-library/` + training.linkid}`,
			types: {
				'application/rss+xml': `${`https://metaenga.com/vr-training-library/` + training.linkid}`,
			},
		},
	}
}

async function page({ params: { id } }) {
	const t = await getTranslations('Gallery'); 
	const title = t(`title`)
	const training = await getTraining(id)
	if (!training) {
		return <Error />
	}
	return (
		<>
			<Promo training={training} />
			<Overview training={training} />
			<Details training={training} />
			<Inctruction />
			<Suspense fallback={<Loading />}>
				<Gallery slides={JSON.parse(JSON.stringify(training?.gallery)) || null} title={title}/>
			</Suspense>
			<FAQServerWrapper />
			{/*<Suspense fallback={<Loading />}>
				<Presentation trainingId={JSON.parse(JSON.stringify(training.id))} />
			</Suspense>*/}
			<section style={{marginBottom: 60}}>
			<RandomLibTrainings />
			</section>
			<ScrollUp />
			
		</>

	)
}



export default page;