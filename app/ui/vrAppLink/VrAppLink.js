import Link from 'next/link';

import classNames from 'classnames';

import cl from './VrAppLink.module.css'

import {getTranslations} from 'next-intl/server';

export default async function VrAppLink({ gray = false, ...props }) {
	const t = await getTranslations('Footer');
	return (
		<div className={cl.links} {...props}>
			{gray ?
				<>
					<Link href='https://www.meta.com/experiences/4950000178436188' target='_blank' className={classNames(cl.link, cl.gray)}>
						<i className="icon-logo_meta" />
						<span>{t(`quest`)}</span>
					</Link>
					<Link href='https://store-global.picoxr.com/global/detail/1/7234057402927333382' target='_blank' className={classNames(cl.link, cl.gray)}>
						<i className="icon-logo_Pico" />
						<span>{t(`pico`)}</span>
					</Link>
				</>
				: <><Link href='https://www.meta.com/experiences/4950000178436188' target='_blank' className={cl.link}>
					<i className="icon-logo_meta" />
					<span>{t(`quest`)}</span>
				</Link>
				<Link href='https://store-global.picoxr.com/global/detail/1/7234057402927333382' target='_blank' className={cl.link}>
					<i className="icon-logo_Pico" />
					<span>{t(`pico`)}</span>
				</Link>
				</>
			}
		</div>
	)
}

export { VrAppLink }