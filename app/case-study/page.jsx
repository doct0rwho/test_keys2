import { getTranslations } from 'next-intl/server';
import CaseStudy from './CaseStudyClient';

export default async function CaseStudyWrapper() {
  const t = await getTranslations('CaseStudy');

  const caseStudies = [
    {
      imageSrc: '/assets/img/caseCard/caseCardNexans.jpg',
      logoSrc: '/assets/img/caseCard/nexans-logo.svg',
      company: t('nexans.company'),
      title: [t('nexans.title_0'), t('nexans.title_1')],
      description: t('nexans.description'),
      buttonText: t('nexans.button'),
      linkid: 'nexans'
    },
    {
      imageSrc: '/assets/img/caseCard/caseCardMita.jpg',
      logoSrc: '/assets/img/caseCard/mita-logo.svg',
      company: t('mita.company'),
      title: [t('mita.title_0'), t('mita.title_1')],
      description: t('mita.description'),
      buttonText: t('mita.button'),
      linkid: 'mita'
    }

  ];

  return <CaseStudy title={t('header')} caseStudies={caseStudies} />;
}
