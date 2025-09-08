
export function getNavLinks(t: (key: string) => string) {
	return [
		{ name: t('menu_0'), mainhref: 'vr-training-library', subhref: '' },
		{ name: t('menu_1'), mainhref: 'pricing', subhref: '' },
		{ name: t('menu_4'), mainhref: 'case-study', subhref: '' },
		{ name: t('menu_2'), mainhref: 'about-us', subhref: '' },
		{ name: t('menu_3'), mainhref: 'contact-us', subhref: '' },
	];
}
