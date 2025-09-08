import { getTranslations } from 'next-intl/server';
import AsyncTableHeader from './AsyncTableHeader';

export default async function AsyncTableHeaderWrapper() {
	const t = await getTranslations('TableHeader');

	const data = [
		{ planKey: 'Flex', label: t('flex'), title: t('titleFlex') },
		{ planKey: 'Standard', label: t('standard'), title: t('titleStandard') },
		{ planKey: 'Enterprise', label: t('enterprise'), title: t('titleEnterprise') },
	];

	return <AsyncTableHeader plans={data} />;
}
