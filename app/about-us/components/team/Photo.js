import Image from 'next/image'
import React from 'react'
import {getTranslations} from 'next-intl/server';

import cl from './Photo.module.css'

export default async function Photo() {
	const t = await getTranslations('AboutUs.Team.Photo');
	return (
		<div className='container'>
			<div className={cl.photo}>
				<h5 className='main__header'>{t(`title`)}</h5>
				<Image src='/assets/img/team/team.jpg' width={1216} height={429} alt='photo' className='photo' quality={100} />

			</div>
		</div>
	)
}

