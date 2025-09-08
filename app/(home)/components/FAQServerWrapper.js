import { getTranslations } from 'next-intl/server';
import FAQ from './FAQ';

export default async function FAQServerWrapper() {
  const t = await getTranslations('FAQ');

  const data = [
    {
      title: t('question1.title'),
      content: (
        <p>
          {t('question1.text_0')}<br /><br />
          {t('question1.text_1')}
        </p>
      )
    },
    {
      title: t('question2.title'),
      content: (
        <p>
          {t('question2.text_0')} <span>{t('question2.text_1')}</span> {t('question2.text_2')}<br />
          {t('question2.text_3')}<br /><br />
          {t('question2.text_4')}
        </p>
      )
    },
    {
      title: t('question3.title'),
      content: (
        <p>
          {t('question3.text_0')} <span>{t('question3.text_1')}</span> {t('question3.text_2')} <span>{t('question3.text_3')} 99.00</span> {t('question3.text_4')}
        </p>
      )
    },
    {
      title: t('question4.title'),
      content: (
        <p>
          {t('question4.text_0')} <span>Meta Quest</span> {t('question4.text_1')} <span>Pico 4</span> {t('question4.text_3')}<br /><br />
          {t('question4.text_4')}<br /><br />
          {t('question4.text_5')} <a href="https://metaenga.com">metaenga.com</a> {t('question4.text_7')}<br /><br />
          {t('question4.text_8')} <span>{t('question4.text_9')}</span> {t('question4.text_10')} <span>{t('question4.text_11')}</span>. {t('question4.text_12')}
        </p>
      )
    },
    {
      title: t('question5.title'),
      content: (
        <p>
          {t('question5.text_0')} <a href="mailto:info@metaenga.com">info@metaenga.com</a>. {t('question5.text_2')}
        </p>
      )
    },
    {
      title: t('question6.title'),
      content: (
        <p>
          {t('question6.text_0')}<br /><br />
          {t('question6.text_1')}
        </p>
      )
    },
    {
      title: t('question7.title'),
      content: (
        <p>
          {t('question7.text_0')}<br /><br />
          {t('question7.text_1')}
        </p>
      )
    },
  ];

  return <FAQ title={t('mainTitle')} data={data} />;
}
