import React from 'react'

import './Mission.css'
import Image from 'next/image'
import {getTranslations} from 'next-intl/server';

export default async function Mission() {
		const t = await getTranslations('AboutUs.Mission');
	return (
		<div className='header__container'>
			<div className="mission">
				<div className="mission__wrapper">
					<div className="mission__img">
						<Image src='/assets/img/aboutus/mission.jpg' alt={t(`alt`)} width={740} height={286} quality={100} />
					</div>
					<div className="mission__text">
						<h2 className="main__header">
							{t('title')}
						</h2>
						<p className='text__body'>
							{t('textBody')}
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

