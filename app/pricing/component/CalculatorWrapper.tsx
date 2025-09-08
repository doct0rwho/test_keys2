import { getTranslations } from 'next-intl/server';
import Calculator from './Calculator';
import {
  currentValute,
  pricePerModule,
  sumAnnually,
  sumAnnuallySaleAbove20,
  sumAnnuallySaleAbove50,
  sumMonthly,
} from '../../variables/planPrice';

export default async function CalculatorWrapper() {
  const t = await getTranslations('Pricing.Calculator');

  const plans = [
    {
      id: 'Flex',
      name: t('Flex.title'),
      subname: t('Flex.subname'),
      price: pricePerModule,
      currentValute: t('Flex.currentValute'),
      caption: [t('Flex.caption.0'), t('Flex.caption.1')],
      details: [
        t('Flex.details.0'),
        t('Flex.details.1'),
        t('Flex.details.2'),
        t('Flex.details.3'),
        t('Flex.details.4'),
        t('Flex.details.5'),
      ],
    },
    {
      id: 'Standard',
      name: t('Standard.title'),
      subname: t('Standard.subname'),
      price: sumMonthly,
      currentValute: t('Standard.currentValute'),
      details: [
        t('Standard.details.0'),
        t('Standard.details.1'),
        t('Standard.details.2'),
        t('Standard.details.3'),
        t('Standard.details.4'),
        t('Standard.details.5'),
      ],
    },
    {
      id: 'Enterprise',
      name: t('Enterprise.title'),
      subname: t('Enterprise.subname'),
      price: pricePerModule,
      caption: [t('Enterprise.caption.0'), t('Enterprise.caption.1')],
      details: [
        t('Enterprise.details.0'),
        t('Enterprise.details.1'),
        t('Enterprise.details.2'),
        t('Enterprise.details.3'),
        t('Enterprise.details.4'),
        t('Enterprise.details.5'),
      ],
    },
  ];

  const pricingTexts = {
    annualy: t('annualy'),
    billingPeriodLabelStandard: t('billingPeriodLabelStandard'),
    billingChips: t('billingChips'),
    billingPeriodLabelEnterprise: t('billingPeriodLabelEnterprise'),
    numberOfHeadsets: t('numberOfHeadsets'),
    headsets: t('headsets'),
    period: t('period'),
    limitWarning: [t('limitWarning_0'), t('limitWarning_1'), t('limitWarning_2')],
    flexButton: t('flexButton'),
    standardButton: t('standardButton'),
    enterpriseButton: t('enterpriseButton'),
    totalPrice: t('totalPrice'),
    year: t('year'),
    monthly: t('monthly'),
    saved: t('saved'),
    fullTrainingReports: t('fullTrainingReports'),
    buyLimitWarning: [t('buyLimitWarning_0'), t('buyLimitWarning_1'), t('buyLimitWarning_2')],
    subheader: [t('subheader_0'), t('subheader_1'), t('subheader_2')],
    smallHeaderMouthly: t('smallHeaderMouthly'),
    smallHeaderYearly: t('smallHeaderYearly'),
    smallHeaderMouthlymob: t('smallHeaderMouthlymob'),
    smallHeaderYearlymob: t('smallHeaderYearlymob'),
    yearlySave: t('yearlySave'),
  };

  return (
    <Calculator
      plans={plans}
      pricingTexts={pricingTexts}
      currentValute={currentValute}
      sumAnnually={sumAnnually}
      sumAnnuallySaleAbove20={sumAnnuallySaleAbove20}
      sumAnnuallySaleAbove50={sumAnnuallySaleAbove50}
      sumMonthly={sumMonthly}
    />
  );
}
