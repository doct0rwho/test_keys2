import classNames from 'classnames'

import cl from './Overview.module.css'
import dynamic from 'next/dynamic';
import DownloadVRBanner from '@/app/ui/instruction/DownloadVRBanner';
import {getTranslations} from 'next-intl/server';
const YTVideoWithThumb = dynamic(() => import('@/app/components/video/YTVideoWithThumb'), {
	ssr: false,
});
 
export default async function Overview({ training }) {
		const t = await getTranslations('Overview');
	return (
		<div className={cl.overview}>
			<div className="container">
				<p className='main__header title'>{t(`title`)}</p>
				<p className={classNames('text__body', cl.overview__descr)}>
					{training?.descr}
				</p>
				<div className={cl.overview__video} style={{ marginBottom: 32 }}>
					<DownloadVRBanner />
				</div>
				{training.ytvideo ? <div className={cl.overview__video}>
					<YTVideoWithThumb source={JSON.parse(JSON.stringify(training))} />
				</div>
					: null}
			</div>
		</div>
	)
}

export { Overview }