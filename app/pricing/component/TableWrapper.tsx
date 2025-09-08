import { getTranslations } from 'next-intl/server';
import Table  from './Table';
type VrTrainItem = {
  title: string;
  note?: string;
  linkid: string;
};

export default async function TableWrapper() {
  const t = await getTranslations('Table');


 const tableLink = (name: string, href: string) => (
    <a href={href} className="link">
      {name}
      <img
        src="/icons/svg/chevron-right.svg"
        alt="icon chevron right"
        width={24}
        height={24}
      />
    </a>
  );

  const vrTrainingContent = [
    [
      <a href="#vrLib" className="link">
        {t('vrTrainingContent.row1.col1')}
        <img src="/icons/svg/chevron-right.svg" alt="icon chevron right" width={24} height={24} />
      </a>,
      t('vrTrainingContent.row1.col2'),
      t('vrTrainingContent.row1.col3'),
      t('vrTrainingContent.row1.col4'),
    ],
    [t('vrTrainingContent.row2.col1'), 'check', 'check', 'check'],
    [t('vrTrainingContent.row3.col1'), 'check', 'check', 'check'],
    [t('vrTrainingContent.row4.col1'), 'minus', t('vrTrainingContent.row4.col3'), t('vrTrainingContent.row4.col4')],
    [t('vrTrainingContent.row5.col1'), 'minus', 'check', 'check'],
  ];

  const accountExperience = [
    [t('accountExperience.row1.col1'), t('accountExperience.row1.col2'), t('accountExperience.row1.col3'), t('accountExperience.row1.col4')],
    [t('accountExperience.row2.col1'), 'minus', 'check', 'check'],
    [t('accountExperience.row3.col1'), 'minus', 'check', 'check'],
    [t('accountExperience.row4.col1'), 'minus', 'minus', 'check'],
  ];

  const analyticsAndReporting = [
    [t('analyticsAndReporting.row1.col1'), t('analyticsAndReporting.row1.col2'), t('analyticsAndReporting.row1.col3'), t('analyticsAndReporting.row1.col4')],
    [t('analyticsAndReporting.row2.col1'), 'minus', 'check', 'check'],
    [t('analyticsAndReporting.row3.col1'), 'minus', 'check', 'check'],
    [t('analyticsAndReporting.row4.col1'), 'minus', 'check', 'check'],
    [t('analyticsAndReporting.row5.col1'), 'minus', 'minus', 'check'],
  ];

  const distributionManagement = [
    [t('distributionManagement.row1.col1'), 'check', 'check', 'check'],
    [t('distributionManagement.row2.col1'), 'check', 'check', 'check'],
    [t('distributionManagement.row3.col1'), 'minus', 'check', 'check'],
    [t('distributionManagement.row4.col1'), 'minus', 'check', 'check'],
    [t('distributionManagement.row5.col1'), 'minus', 'check', 'check'],
    [t('distributionManagement.row6.col1'), 'minus', 'check', 'check'],
    [t('distributionManagement.row7.col1'), 'minus', 'check', 'check'],
    [t('distributionManagement.row8.col1'), 'minus', 'check', 'check'],
  ];

  const security = [
    [t('security.row1.col1'), 'minus', 'check', 'check'],
    [t('security.row2.col1'), 'minus', 'check', 'check'],
    [t('security.row3.col1'), 'minus', 'minus', 'check'],
    [t('security.row4.col1'), 'minus', 'minus', 'check'],
  ];

  const supportAndBilling = [
    [t('supportAndBilling.row1.col1'), t('supportAndBilling.row1.col2'), t('supportAndBilling.row1.col3'), t('supportAndBilling.row1.col4')],
    [t('supportAndBilling.row2.col1'), 'check', 'check', 'check'],
    [t('supportAndBilling.row3.col1'), 'minus', 'check', 'check'],
    [t('supportAndBilling.row4.col1'), 'minus', 'minus', 'check'],
    [t('supportAndBilling.row5.col1'), 'minus', 'minus', 'check'],
    [t('supportAndBilling.row6.col1'), 'minus', 'minus', 'check'],
    [t('supportAndBilling.row7.col1'), 'minus', 'minus', 'check'],
    [t('supportAndBilling.row8.col1'), 'minus', 'minus', 'check'],
  ];

const vrTrainLibData = t.raw('vrTrainLib') as Record<string, VrTrainItem>;

const vrTrainLib = Object.entries(vrTrainLibData).map(([key, item]) => [
  tableLink(
    item.title,
    `/vr-training-library/${item.linkid}`
  ),
  item.note ? { text: item.note, isPurchase: true } : 'check',
  'check',
  'check',
]);



  return (
    <Table
      vrTrainingContent={vrTrainingContent}
      accountExperience={accountExperience}
      analyticsAndReporting={analyticsAndReporting}
      distributionManagement={distributionManagement}
      security={security}
      supportAndBilling={supportAndBilling}
      vrTrainLib={vrTrainLib}
    />
  );
}
