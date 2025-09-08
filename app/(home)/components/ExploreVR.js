import { ButtonLink } from "@/app/ui/button/ButtonLink"
import {getTranslations} from 'next-intl/server';
import './ExploreVR.css'
import FreeGridTrainings from "../../components/randomGridTrainings/FreeGridTrainings"

export default async function ExploreVR() {
	const t = await getTranslations('ExploreVR');
	return (
		<div className='header__container'>
			<div className='explorevr'>
				<h2 className="main__header title">
					{t('title')}
				</h2>
				<FreeGridTrainings />
				<div className="explorevr__btns">
					<ButtonLink href='/vr-training-library' className='btn secondary' direction='right' icon='chevron-right'>{t('button')}</ButtonLink>
				</div>
			</div>
		</div>
	)
}

