import Image from 'next/image'
import React from 'react'

import './Services.css'
import {getTranslations} from 'next-intl/server';

export default async function Services() {
	const t = await getTranslations('AboutUs.Services');
	return (
		<div className='container'>
			<div className="services">
				<h3 className='main__header'>
					{t('title')}
				</h3>
				<div className="services__wrapper">
					<div className="services__item s-item">
						<div className="s-item__icon">
							<Image src='/icons/svg/cube-scan.svg' alt={t(`alt`)} width={48} height={48} />
						</div>
						<div className="s-text">
							<h4 className='card__header'>{t(`cardHeaders.header_0`)}</h4>
							<p className='text__body'>{t(`cardHeaders.text_0`)}<br /> {t(`cardHeaders.text_1`)}</p>
						</div>
					</div>
					<div className="services__item s-item">
						<div className="s-item__icon">
							<Image src='/icons/svg/services_VR.svg' alt={t(`alt`)} width={48} height={48} />
						</div>
						<div className="s-text">
							<h4 className='card__header'>{t(`cardHeaders.header_1`)}</h4>
							<p className='text__body'>{t(`cardHeaders.text_2`)} <br />{t(`cardHeaders.text_3`)} </p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

