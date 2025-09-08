import { getTranslations } from 'next-intl/server';
import SalesForm from './SalesForm';

export default async function SalesFormWrapper() {
  const t = await getTranslations('ContactSales');
  const tSuccess = await getTranslations('SuccessContactSales');

  return (
    <SalesForm
      title={t('title')}
      subTitle={t('subTitle')}
      name={t('name')}
      email={t('email')}
      company={t('company')}
      message={t('message')}
      submit_0={t('submit_0')}
      submit_1={t('submit_1')}
      schedule={t('schedule')}
      successTranslations={{
        title: tSuccess('title'),
        description_0: tSuccess('description_0'),
        description_1: tSuccess('description_1'),
        description_2: tSuccess('description_2'),
        buttonHome: tSuccess('buttonHome'),
        buttonStart: tSuccess('buttonStart'),
      }}
    />
  );
}
