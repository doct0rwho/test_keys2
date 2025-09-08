import { PlanChips } from "@/app/ui/planChips/PlanChips"
import Image from "next/image"
import Link from "next/link"

import '../../vr-training-library/VrLib.css'
import classNames from "classnames"
import { getTranslations } from 'next-intl/server';

export default async function VRLibGrid({ trainings, lite = false }) {
	const t = await getTranslations('TrainingInfoData'); 

	return (
		<div className={classNames('vrLib__grid', lite ? 'vrLib__grid-lite' : '')}>
{trainings && trainings.map((training, index) => {

	return training.video?.pcThumb ? (
				
				<Link className="vrLib__grid_item vrLib__item" href={`/vr-training-library/${training.linkid}`} key={training.id}>
					<div className="vrLib__item_img">
						<Image
							src={training.cardimg}
							alt={training.cardalt}
							width={474}
							height={266}
							quality={100}
						/>
						<div className="vrLib__item_info_chips">
						<PlanChips plan={training.plan} light={true}> {training.plan === "Free" ? t(`planFree`) : t(`planSubscribe`)} </PlanChips>
						</div>
					</div>
					<div className="vrLib__item_info">

						<p className="vrLib__item_info_title">{training.name}</p>
						<p className="vrLib__item_info_desc text__body">{training.briefdescr}</p>
						<div className="vrLib__item_info_arrow vrLib__arrow">
							<div className="vrLib__arrow_btn">
								<p>{t(`button`)}</p>
								<i className='icon-arrow-up' />
							</div>
						</div>
					</div>
				</Link>
			
			) : null
			})}
		</div>

	)
}

export { VRLibGrid }