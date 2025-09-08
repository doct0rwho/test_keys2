import './Partners.css'
import dynamic from 'next/dynamic';
import PartnersSkeleton from './partners/PartnersSkeleton';
import {getTranslations} from 'next-intl/server';
const PartnersMarquee = dynamic(() => import('./partners/PartnersMarquee'), {
	ssr: false,
	loading: () => <PartnersSkeleton />,
});

export default async function  Partners() {
	const t = await getTranslations('Partners');
	return (
			<div className="partners">
				<p className='small__header'>
					{t('title')}
				</p>

				<PartnersMarquee />
			</div>


	)
}

