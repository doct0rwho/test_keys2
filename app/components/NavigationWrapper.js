import { getTranslations } from 'next-intl/server';
import { Navigation } from './Navigation';

export default async function NavigationWrapper({ navLinks }) {
  const t = await getTranslations('Header');

  const translations = {
    login: t('menu_5'),
    burgerOverview: t('menuBurger_0'),
    burgerDemo: t('menuBurger_1')
  };

  return <Navigation navLinks={navLinks} translations={translations} />;
}
