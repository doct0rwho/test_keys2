import Image from 'next/image'
import './Promo.css'
import {getTranslations} from 'next-intl/server';

export default async function Promo() {
	const t = await getTranslations('AboutUs.Promo');
	return (
		<div className="about">
			<div className="header__container">
				<div className="about__wrapper">
					<div className="about__wrapper-text">
						<h1 className="main__header">
							{t(`title_0`)} <br /> {t(`title_1`)}
						</h1>
						<p className='text__body'>{t(`textBody`)}</p>
					</div>
					<div className="about__wrapper-img">
						<Image src='/assets/img/aboutus/headset.png' alt={t(`alt`)} width={425} height={447} quality={100}/>
					</div>
				</div>
			</div>
		</div>
	)
}

