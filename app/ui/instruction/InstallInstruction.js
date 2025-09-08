
import cl from './InstallInstruction.module.css'


import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
export default async function InstallInstruction() {
	const t = await getTranslations('gettingStarted'); 
	return (
		<div className={classNames(cl.wrapper, cl.lite)}>
			<p className='subheader title' style={{ flexBasis: '100%', marginTop: 16 }}>{t(`title`)}</p>
			<div className={cl.item}>
				<div className={cl.item__header}>
					<Image
						src='/icons/svg/VR_download.svg'
						alt='vr icon'
						width={24}
						height={24} />
					<p className='text__body'>
						{t(`step_0`)}
					</p>
				</div>
				<div className={cl.item__body}>
					<p className='text__body-light' style={{ lineHeight: '150%' }}>
						{t(`description_0`)} <Link href='https://www.meta.com/experiences/4950000178436188/' target='_blank' className='text__link' style={{ height: 'auto', fontWeight: 500 }}>MetaQuest</Link>{(` `)}{t(`description_1`)}{(` `)}<Link href='https://store-global.picoxr.com/global/detail/1/7234057402927333382' target='_blank' className='text__link' style={{ height: 'auto', fontWeight: 500 }}>Pico.</Link>
					</p>
				</div>
			</div>
			<div className={cl.item}>
				<div className={cl.item__header}>
					<Image
						src='/icons/svg/Acc_ok.svg'
						alt='Login icon'
						width={24}
						height={24} />

					<p className='text__body'>
					{t(`step_1`)}
					</p>
				</div>
				<div className={cl.item__body}>
					<p className='text__body-light' style={{ lineHeight: '150%' }}>
						{t(`description_2`)} <br /> {t(`description_3`)}

					</p>
				</div>
			</div>
			<div className={cl.item}>
				<div className={cl.item__header}>
					<Image
						src='/icons/svg/rocket_launch.svg'
						alt='Launch icon'
						width={24}
						height={24} />
					<p className='text__body'>
						{t(`step_2`)}
					</p>
				</div>
				<div className={cl.item__body}>
					<p className='text__body-light' style={{ lineHeight: '150%' }}>
						{t(`description_4`)} <br />
						{t(`description_5`)}
					</p>
				</div>
			</div>
		</div>
	)
}

export { InstallInstruction }