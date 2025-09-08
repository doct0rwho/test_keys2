import { getTranslations } from 'next-intl/server';
import TableHeader from './TableHeader';

export default async function TableHeaderWrapper({ planKey }) {
  const t = await getTranslations('TableHeader');

  const labelMap = {
    Flex: t('flex'),
    Standard: t('standard'),
    Enterprise: t('enterprise'),
  };

  const titleMap = {
    Flex: t('titleFlex'),
    Standard: t('titleStandard'),
    Enterprise: t('titleEnterprise'),
  };

  const label = labelMap[planKey] || '';
  const title = titleMap[planKey] || '';

  return <TableHeader planKey={planKey} title={title} label={label} />;
}
