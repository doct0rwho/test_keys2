import React from 'react'
import {getTranslations} from 'next-intl/server';
import './Benefits.css'

export default async function  Benefits() {
	const t = await getTranslations('Benefits');
	return (
		<div className='header__container container__benefits'>
			<div className='benefits'>
				<h3 className="main__header title">
					{t('title')}
				</h3>
				<div className="benefits__wrapper">
					<div className="benefits__item">
						<p className="benefits__number">

							<span>X</span>
							4
						</p>
						<p className="benefits__descr">
							{t('benefit1_0')} <br />
							{t('benefit1_1')}
						</p>

					</div>
					<div className="benefits__item">
						<p className="benefits__number">
							52
							<span>%</span>
						</p>
						<p className="benefits__descr">
							{t('benefit2_0')} <br />
							{t('benefit2_1')}
						</p>

					</div>
					<div className="benefits__item">
						<p className="benefits__number">
							43
							<span>%</span>
						</p>
						<p className="benefits__descr">
							{t('benefit3_0')} <br /> {t('benefit3_1')}
						</p>

					</div>
				</div>
			</div>
		</div>
	)
}

