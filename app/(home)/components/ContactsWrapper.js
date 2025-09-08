import { getTranslations } from 'next-intl/server';
import Contact from './Contact';

export default async function ContactsWrapper() {
  const t = await getTranslations('Contact');

  const texts = {
    toastSuccess: t('toastSuccess'),
    toastError: t('toastError'),
    title: t('title'),
    textBody: t('textBody'),
    textError_0: t('textError_0'),
    textError_1: t('textError_1'),
    fieldName: t('fieldName'),
    fieldEmail: t('fieldEmail'),
    fieldMessage: t('fieldMessage'),
    buttonSend: t('buttonSend'),
  };

  return <Contact texts={texts} />;
}
