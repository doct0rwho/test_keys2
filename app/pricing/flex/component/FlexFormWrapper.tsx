
import { getTranslations } from 'next-intl/server';
import FlexForm from './FlexForm';

export default async function FlexFormWrapper() {
	const t = await getTranslations('ChooseModules');

	const trainingsForRender = [
		'hv', 'tos', 'osha', 'hs', 'warehouse', 'mv',
		'forklift', 'fs', 'hlo', 'mcc', 'dmb', 'rct', 'ieiloto', 'wah', 'mar', "mup"
	].map(key => ({
		name: key,
		label: t(`trainings.${key}`)
	}));

	return (
        
		<FlexForm
			title={t('title')}
			description_0={t('description_0')}
			description_1={t('description_1')}
			numberLicenses={t('numberLicenses')}
			tooltip_0={t('tooltip_0')}
			videoSet={t('videoSet')}
			tooltip_1={t('tooltip_1')}
			month={t('month')}
			uploadVideo={t('uploadVideo')}
			classroom={t('classroom')}
			videoPlayer={t('videoPlayer')}
			SubscriptionPeriod={t('SubscriptionPeriod')}
			period={t('period')}
			tooltip_2={t('tooltip_2')}
			modulesMult={t('modules×')}
			headsetMult={t('headset×')}
			standardPlan={t('standardPlan')}
			videoSetUpTo={t('360VideoSet')}
			uploadLimits={t('uploadLimits')}
			totalPrice={t('totalPrice')}
			buttonBack={t('buttonBack')}
			buttonNext={t('buttonNext')}
            likeStandard={t(`likeStandard`)}
            licenses={t(`licenses`)}
            limit={t(`limit`)}
			trainingsForRender={trainingsForRender}
		/>
	);
    
}
