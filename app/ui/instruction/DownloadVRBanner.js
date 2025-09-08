import cl from './DownloadVRBanner.module.css'
import PlatformLink  from '../headsetLink/PlatformLink'
import { getTranslations } from 'next-intl/server';

export default async function DownloadVRBanner(props) {
	const t = await getTranslations('Table.GetVrAppBunner'); 
	return (
		<div className={cl.banner} {...props}>
			<div className={cl.wrapper}>
				<p>{t(`descriptionMobile_0`)}{(` `)}<br />{t(`descriptionMobile_1`)}</p>
				<div className={cl.links}>
					<PlatformLink />
					<PlatformLink platform='pico' />
				</div>
			</div>
		</div>
	)
}

