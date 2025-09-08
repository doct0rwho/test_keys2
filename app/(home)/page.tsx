import  Promo  from './components/Promo';
import { Features } from './components/Features';
import dynamic from 'next/dynamic';
import Partners from './components/Partners';
import ExploreVR from './components/ExploreVR';
import GettingStarted from './components/GettingStarted';
import { PriceBanner } from './components/PriceBanner';
import Reasons  from './components/Reasons';
import Benefits from './components/Benefits';
import ValenciaDigitalSummit from './components/metaengaAwards/VDS';
import SeedsOfBravery from './components/metaengaAwards/seedsOfBravery';
import ContactsWrapper from './components/ContactsWrapper';
import FAQServerWrapper from './components/FAQServerWrapper';


// const Contact = dynamic(() => import('./components/Contact'), {
// 	ssr: false,
// });

// const FAQ = dynamic(() => import('./components/FAQ'), {
// 	ssr: false,
// });

const ScrollUp = dynamic(() => import('../ui/autoScrollUp/AutoScrollUp'), {
	ssr: false,
});

export default async function Home() {
	return (
		<main>
			<section id='overview'>
				<Promo />
			</section>

			<Partners />
			<section>
				<Benefits />
			</section>
			<section>
				<Reasons />
			</section>

			<section>
				<ExploreVR />
			</section>

			<section>
				<GettingStarted />
			</section>


			<section>
				<PriceBanner />
			</section>

			<section>
			<div className="awards-container">
				<ValenciaDigitalSummit />
				<SeedsOfBravery />
			</div>
			</section>

			<FAQServerWrapper />
			<section id='contact'>
				 <ContactsWrapper />
			</section>
			<ScrollUp />

		</main>
	)
}