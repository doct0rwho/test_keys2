import dynamic from 'next/dynamic';
import {getTranslations} from 'next-intl/server';
import ReasonsSliderWrapper from './reasons/ReasonsSliderWrapper';


import { SpinnerBlock } from '@/app/ui/spinner/SpinnerBlock';


import './Reasons.css'


export default async function Reasons() {
	const t = await getTranslations('Reasons');
	return (
		<div className='header__container reasons__container'>
			<div className='reasons'>
				<h3 className="main__header title">
				{t('title')}
				</h3>
				<ReasonsSliderWrapper />
			</div>
		</div>
	)
}
