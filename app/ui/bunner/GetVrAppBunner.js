import classNames from 'classnames'
import  PlatformLink from '../headsetLink/PlatformLink'

import cl from './GetVrAppBunner.module.css'
import {getTranslations} from 'next-intl/server';
export default async function GetVrAppBunner(props) {
const t = await getTranslations('Table.GetVrAppBunner');
	return (
		<div className="header__container">
		<div className={cl.banner} {...props}>
			<div className={cl.wrapper}>
				<p className='subheader'>{t(`title_0`)}<span style={{whiteSpace: 'wrap'}}>{(` `)}{t(`title_1`)}</span></p>
				<p className='text__body-second'>{t(`description_0`)} <br />
					{t(`description_1`)} </p>
				<p className={classNames('text__body-second', cl.mobile__text)}>{t(`descriptionMobile_0`)}<br />
				{t(`descriptionMobile_1`)}</p>
				<div className={cl.links}>
					<PlatformLink />
					<PlatformLink platform='pico' />
				</div>
			</div>
		</div>
		</div>
	)
}
