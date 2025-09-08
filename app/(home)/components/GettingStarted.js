import { ButtonLink } from '@/app/ui/button/ButtonLink'
import Image from 'next/image'

import './GettingStarted.css'
import  PlatformLink  from '@/app/ui/headsetLink/PlatformLink'

import {getTranslations} from 'next-intl/server';

export default async function GettingStarted() {
	const t = await getTranslations('GettingStarted');
	return (
		<div className='header__container'>
			<div className='started'>
				<h3 className="main__header title">
					{t('title')}
				</h3>
				<div className="started__grid">
					<div className="started__grid_item started__grid_item_signup">
						<p className='card__header'>{t('title1')}</p>
					<p className="text__body-light">
  <ButtonLink
    href="https://app.metaenga.com/self-registration?referrer=metaenga"
    target="_blank"
    className="text__link"
    style={{ height: 'auto', fontWeight: 500 }}
  >
    {t('textBody1_start')}
  </ButtonLink>{' '}
  {t('textBody1_middle')}{' '}
  <ButtonLink
    href="/pricing"
    className="text__link"
    style={{ height: 'auto', fontWeight: 500 }}
  >
    {t('textBody1_standard')}
  </ButtonLink>{' '}
  {t('textBody1_and')}{' '}
  <ButtonLink
    href="/pricing"
    className="text__link"
    style={{ height: 'auto', fontWeight: 500 }}
  >
    {t('textBody1_enterprise')}
  </ButtonLink>
</p>

						<div className="started__grid_item_img">
							<Image
								src='/assets/img/gettingStarted/devices_new.png'
								alt='signup'
								width={436}
								height={297}
								quality={100}
							/>
						</div>
					</div>
					<div className="started__grid_item started__grid_item_download">
						<p className='card__header'>{t(`title2`)}</p>
						<p className='text__body-light'>
							{t('textBody2')}						
						</p>
						<div className='started__grid_item_links'>
							<PlatformLink />
							<PlatformLink platform='pico' />
						</div>

						<div className="started__grid_item_img quest__img">
							<Image
								src='/assets/img/gettingStarted/Meta-Quest-3.png'
								alt='signup'
								width={254}
								height={308}
								quality={100}
							/>
						</div>
					</div>
					<div className="started__grid_item started__grid_item_vr">
						<p className='card__header'>{t(`title3`)}</p>
						<p className='text__body-light'>{t('textBody3')}</p>
						<div className="started__grid_item_img">
							<Image
								src='/assets/img/gettingStarted/VR-prev.png'
								alt='signup'
								width={436}
								height={297}
								quality={100}
							/>
						</div>
					</div>

				</div>
			</div>
		</div>
	)
}

