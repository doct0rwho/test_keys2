import { ButtonLink } from "@/app/ui/button/ButtonLink"
import Image from "next/image"
import {getTranslations} from 'next-intl/server';

import './PriceBanner.css'

export default async function PriceBanner() {
	const t = await getTranslations('PriceBanner');
	return (

		<div className='header__container price-banner__container'>
			<div className='price-banner'>
				<div className="price-banner__text">
					<h3 className="main__header">
						<span>{t(`title1`)}</span> <br />
						{t(`title2`)}
					</h3>
					<div className="price-banner__text_btns">
						<ButtonLink className='btn-link primary' href='https://app.metaenga.com/self-registration?referrer=metaenga' target='_blank'>{t(`buttonFree`)}</ButtonLink>
						<ButtonLink className='btn-link secondary' href='/pricing'>{t(`buttonPricing`)}</ButtonLink>
					</div>

				</div>

				<div className="price-banner__img">
					<Image
						src='/assets/img/pricebanner/girl-in-VR.png'
						width={537}
						height={279}
						alt={t(`banerAlt`)}
						quality={100}
					/>
				</div>

			</div>
		</div>
	)
}

export { PriceBanner }