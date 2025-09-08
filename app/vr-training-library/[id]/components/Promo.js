import cl from './Promo.module.css'
import Image from 'next/image';
import { ButtonLink } from '@/app/ui/button/ButtonLink';
import { Video } from '@/app/components/video/Video';
import { PlanChips } from '@/app/ui/planChips/PlanChips';
import classNames from 'classnames';
import { currentValute, pricePerModule, sumMonthly } from '@/app/variables/planPrice';
import React from 'react';

import {getTranslations} from 'next-intl/server';

export default async function Promo({ training }) {
	const t = await getTranslations('PromoTraining');
	//const bgVid = winWidth > 767.5 ? training.video?.pc : training.video?.mob || ''
	//const bgVidThumb = winWidth > 767.5 ? training.video?.pcThumb : training.video?.mobThumb || ''

	const bgVid = training.video?.pc || ''

	const bgVidThumb = training.video?.pcThumb || ''
	const bgMobThumb = training.video?.mobThumb || ''

	return (
		<div className={cl.promo}>
			<Video src={bgVid} thumb={bgVidThumb} />
			<Image
				src={bgMobThumb}
				alt={training.name}
				className={cl.promo__img}
				width={532}
				height={1280}
				quality={100}
				sizes="100vw"
				style={{
					width: '100%',
				}} 
			/>
			<div className='container'>
				<div className={cl.promo__info}>
				{training.plan === "Free" ? (
					<PlanChips style={{ marginBottom: 8 }} light={true}>
						{t(`planChips`)}
					</PlanChips>
				) : null}
					<h1 className='training__title'> {Array.isArray(training.name) ? training.name.map((part, index) => ( <React.Fragment key={index}> {part} {index < training.name.length - 1 && <br />} </React.Fragment> )) : training.name} </h1>
					<p className="text__body-light">
  {Array.isArray(training.shortdescr)
    ? training.shortdescr.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index < training.shortdescr.length - 1 && <br />}
        </React.Fragment>
      ))
    : training.shortdescr}
</p>
					<div className={cl.promo__info_buttons}>
						<div className={classNames(cl.promo__info_buttons_btn, cl.promo__info_buttons_btn_first)}><ButtonLink className='btn-link primary white' href={'/pricing'}>{t(`button_0`)}<p className='caption-light' style={{whiteSpace: 'nowrap'}}>{t(`description_0`)} {currentValute}{sumMonthly} {t(`description_1`)}</p></ButtonLink></div>
						<div className={classNames(cl.promo__info_buttons_btn, cl.promo__info_buttons_btn_second)}>					{training.plan === 'Free' ? <ButtonLink className='btn-link primary white' href='https://app.metaenga.com/self-registration?referrer=metaenga' target='_blank'>{t(`button_1`)}<p className='caption-light' style={{whiteSpace: 'nowrap'}}>{t(`button_2`)}</p></ButtonLink> :
							<ButtonLink className='btn-link primary white' href={'/pricing/flex' + '?ref=' + training.ref} >{t(`button_1`)}<p className='caption-light' style={{whiteSpace: 'nowrap'}}>{currentValute}{pricePerModule} {t(`description_2`)}</p></ButtonLink>}</div>
						{training.pdf ? <div className={classNames(cl.promo__info_buttons_btn, cl.promo__info_buttons_btn_pdf)}><ButtonLink icon='file_download' direction='left' className={classNames('btn-link textbtnWhite', cl.promo__info_buttons_pdf)} href={training.pdf} target='_blank'>{t(`pdf`)}</ButtonLink></div> : null}
					</div>
				</div>
			</div>
		</div>
	)
}

export { Promo }