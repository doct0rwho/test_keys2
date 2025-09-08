import cl from './Details.module.css'
import { ButtonLink } from '@/app/ui/button/ButtonLink';

import {getTranslations} from 'next-intl/server';

export default async function Details({ training }) {
const t = await getTranslations('TrainingDetails');
	return (
		<div className={cl.details}>
			<div className="container">
				<p className='main__header title'>{t(`title`)}</p>
				<div className={cl.table}>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_11`)}</p>
						<div className={cl.table__item_right}>
							{training.features?.map((el, i) => {
								return <span className='text__body' key={i}>{el}</span>
							})}
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_0`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.category}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_1`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.objectives}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_2`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.audience}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_3`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.duration}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_10`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.modes}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_4`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.assessment}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_5`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.available}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_6`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.languages}</p>
						</div>
					</div>
					<div className={cl.table__item}>
						<p className='text__body'>{t(`attribute_7`)}</p>
						<div className={cl.table__item_right}>
							<p className='text__body'>{training.plan==="Free" ? t(`attribute_8`) : t(`attribute_9`)} </p>
						</div>
					</div>
					{training.pdf && (
						<div className={cl.table__item}>
							<p className='text__body'>{t(`textBody`)}</p>
							<div className={cl.table__item_right}>
								<ButtonLink 
									href={training.pdf} 
									target='_blank' 
									style={{ color: 'var(--primary-color)' }}
									className="small__header"
								>
									{t(`buttonPDF`)}
								</ButtonLink>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}




export { Details }