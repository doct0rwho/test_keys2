import cl from './Cards.module.css'
import {getTranslations} from 'next-intl/server';

export default async function Cards() {
	const t = await getTranslations('AboutUs.Team.Cards');
	return (
		<div className='container'>
			<div className={cl.cards}>
				<div className={cl.card}>
					<p className={cl.number}>10</p>
					<p className={cl.descr}>
						{t('card_0.description')}
					</p>
				</div>
				<div className={cl.card}>
					<p className={cl.number}>8</p>
					<p className={cl.descr}>
						{t('card_1.description')}
					</p>
				</div>
				<div className={cl.card}>
					<p className={cl.number}>60+</p>
					<p className={cl.descr}>
						{t('card_2.description')}
					</p>
				</div>
				<div className={cl.card}>
					<p className={cl.number}>40+</p>
					<p className={cl.descr}>
						{t('card_3.description')}
					</p>
				</div>
			</div>
		</div>
	)
}

export { Cards }