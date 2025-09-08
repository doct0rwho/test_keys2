// app/components/reasons/getLocalizedReasonsBlocks.js
import { getTranslations } from 'next-intl/server';

export async function getLocalizedReasonsBlocks() {
  const t = await getTranslations('ReasonsSlider');

  return [
    {
      id: 1,
      title: t('reason1.title'),
      text_0: t('reason1.text_0'),
      text_1: t('reason1.text_1'),
      icon: '/icons/svg/VR.svg',
      videoUrl: './assets/img/features/video/AssignTraining.mp4',
      thumb: './assets/img/features/poster/AssignTraining.jpg',
    },
    {
      id: 2,
      title: t('reason2.title'),
      text_0: t('reason2.text_0'),
      text_1: t('reason2.text_1'),
      icon: '/icons/svg/insights_star.svg',
      videoUrl: './assets/img/features/video/Insights.mp4',
      thumb: './assets/img/features/poster/Insights.jpg',
    },
    {
      id: 3,
      title: t('reason3.title'),
      text_0: t('reason3.text_0'),
      text_1: t('reason3.text_1'),
      icon: '/icons/svg/arrow-decision.svg',
      videoUrl: './assets/img/features/video/Effortless.mp4',
      thumb: './assets/img/features/poster/Effortless.jpg',
    },
    {
      id: 4,
      title: t('reason4.title'),
      text_0: t('reason4.text_0'),
      text_1: t('reason4.text_1'),
      icon: '/icons/svg/360_VR.svg',
      videoUrl: '',
      thumb: './assets/img/features/360-video-poster.jpg',
    },
    {
      id: 5,
      title: t('reason5.title'),
      text_0: t('reason5.text_0'),
      text_1: t('reason5.text_1'),
      icon: '/icons/svg/User_group.svg',
      videoUrl: './assets/img/features/video/VRClassrooms.mp4',
      thumb: './assets/img/features/poster/VRClassrooms.jpg',
    },
  ];
}
