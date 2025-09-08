import { Video } from '../../components/video/Video';
import { ButtonLink } from '../../ui/button/ButtonLink';
import dynamic from 'next/dynamic';

import {getTranslations} from 'next-intl/server';

import './Promo.css'
import Image from 'next/image';

const VideoModal = dynamic(() => import('../../components/video/VideoModal'), {
	ssr: false,
});
 
export default async function Promo() {
const t = await getTranslations('Promo');
	return (
		<div className='header__container'>
			<div className="promo">
				<div className="promo__info">
					<h1 className='main__header'><span style={{ whiteSpace: 'nowrap' }}>{t('title1')}</span> <br />
						<span style={{ whiteSpace: 'nowrap' }}>{t('title2')}</span></h1> 
					<div className="promo__media tablet">
						<div className="promo__media-img">
							<Video src='./assets/videos/Metaenga.mp4' thumb='https://metaenga.com/assets/Metaenga.jpg'
								alt={t('videoAlt')} />
							<VideoModal src='https://www.youtube.com/embed/Vphdes0rJok?autoplay=1&amp' id='video-btn-promo' style={{ marginLeft: 16 }}>
								<button className="promo__media-img-play">
									<Image src='/icons/play_circle_bg.png' alt={t('imgAlt')} width={88} height={88} />
								</button>
							</VideoModal>
						</div>
					</div>
					<div className="promo__media mobile">
						<div className="promo__media-img">
							<Video thumb='https://metaenga.com/assets/Metaenga_m.jpg'
								alt={t('videoAlt')} >
								<source
									src="./assets/videos/Metaenga_m.mp4"
									type="video/mp4"
									media="(max-width: 600px)"
								/>
								<source
									src="./assets/videos/Metaenga.mp4"
									type="video/mp4"
									media="(min-width: 600px)"
								/>
							</Video >
							<VideoModal src='https://www.youtube.com/embed/Vphdes0rJok?autoplay=1&amp' id='video-btn-promo' style={{ marginLeft: 16 }}>
								<button className="promo__media-img-play">
									<Image src='/icons/play_circle_bg.png' alt={t('imgAlt')} width={88} height={88} />
								</button>
							</VideoModal>
						</div>
					</div>
					<article className='text__body'>{t('textBody1')}</article>
					<article className='text__body' style={{ fontWeight: 600 }}>{t('textBody2')}</article>
					<div className="promo__info-buttons">
						<ButtonLink href='https://app.metaenga.com/self-registration' className='btn-link primary' id='free-btn-promo'>{t('buttonFree')}</ButtonLink>
						<ButtonLink href='/contact-sales' className='btn-link textbtn' id='contact-sales-promo'>{t('buttonContact')}</ButtonLink>
					</div>
				</div>
				<div className="promo__media pc">
					<div className="promo__media-img">
						<Video src='./assets/videos/Metaenga.mp4' thumb='https://metaenga.com/assets/Metaenga.jpg' />
						<VideoModal src='https://www.youtube.com/embed/Vphdes0rJok?autoplay=1&amp' id='video-btn-promo' style={{ marginLeft: 16 }}>
							<button className="promo__media-img-play">
								<Image src='/icons/play_circle_bg.png' alt={t('imgAlt')} width={88} height={88} />
							</button>
						</VideoModal>
					</div>
				</div>
			</div>

		</div>
	)
}

