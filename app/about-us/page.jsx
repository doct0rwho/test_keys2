import dynamic from 'next/dynamic'
import { ExploreVR } from '../(home)/components/ExploreVR'
import  LetsCollaborateBunner  from '../ui/bunner/LetsCollaborateBunner'
import Mission from './components/Mission'
import Promo from './components/Promo'
import Services from './components/Services'
import Team from './components/Team'

export { generateMetadata } from './generateMetadata';

const ScrollUp = dynamic(() => import('../ui/autoScrollUp/AutoScrollUp'), {
	ssr: false,
});

function AboutUs() {
	return (
		<main>
			<section>
				<Promo />
			</section>
			<section>
				<Mission />
			</section>
			<section>
				<Services />
			</section>

			<section>
				<Team />
			</section>
			<section>
				<LetsCollaborateBunner />
			</section>
			<ScrollUp />
		</main>
	)
}

export default AboutUs