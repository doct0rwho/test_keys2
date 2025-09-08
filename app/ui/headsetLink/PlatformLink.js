
import cl from './PlatformLinks.module.css'
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'

export default async function PlatformLink({ platform = 'meta' }) {
	const t = await getTranslations('PlatformLink')
	return (
		platform === 'meta' ?
			<Link href='https://www.meta.com/experiences/4950000178436188' target='_blank' className={cl.platform__link}>
				<i className='icon-logo_meta' />
				<div className={cl.text}>
					<p className='caption-light'>{t(`download`)}</p>
					<p>Quest</p>
				</div>
			</Link>
			: <Link href='https://store-global.picoxr.com/global/detail/1/7234057402927333382' target='_blank' className={cl.platform__link}>
				<i className='icon-logo_Pico' />
				<div className={cl.text}>
					<p className='caption-light'>{t(`download`)}</p>
					<p>Pico</p>
				</div>
			</Link>
	)
}

