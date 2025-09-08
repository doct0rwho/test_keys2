import classNames from 'classnames'
import { PlatformLink } from '../headsetLink/PlatformLink'

import cl from './LetsCollaborateBunner.module.css'
import { ButtonLink } from '../button/ButtonLink'

import {getTranslations} from 'next-intl/server';

export default async function LetsCollaborateBunner(props) {
	const t = await getTranslations('AboutUs.LetsCollaborateBunner');
	return (
		<div className={classNames('header__container', cl.bunner__container)}>
			<div className={cl.banner} {...props}>
				<div className={cl.wrapper}>
					<p className='main__header'>{t(`title_0`)}</p>
					<p className='text__body'>{t(`description`)}</p>
					<div className={cl.links}>
						<ButtonLink className='btn-link secondary' href='/contact-us' style={{background: 'transparent'}}>{t(`button`)}</ButtonLink>
					</div>
				</div>
			</div>
		</div>
	)
}

