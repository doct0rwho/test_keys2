import React from 'react'
import { getTranslations } from 'next-intl/server';

import '../../VrLib.css'
import RandomGridTrainings from '@/app/components/randomGridTrainings/RandomGridTrainings'

export default async function RandomLibTrainings() {
		const t = await getTranslations('moreModules'); 
	return (
		<div className='header__container'>
			<div className="vrLib" style={{ marginBottom: 24 }}>
				<p className='main__header' style={{ textAlign: 'center' }}>{t(`title`)}</p>
				<RandomGridTrainings />
			</div>
		</div>
	)
}

export { RandomLibTrainings }