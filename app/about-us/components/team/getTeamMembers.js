import { getTranslations } from 'next-intl/server';

export default async function getTeamMembers() {
	const t = await getTranslations('AboutUs.Team.Members');

	return [
		{
			photo: '/assets/img/aboutus/team/slava.svg',
			firstname: t('member_0.name'),
			lastname: t('member_0.lastname'),
			position: t('member_0.position'),
			linkedin: 'https://www.linkedin.com/in/slavbudnyk',
			twitter: 'https://twitter.com/ishottheduck',
		},
		{
			photo: '/assets/img/aboutus/team/pasha.svg',
			firstname: t('member_1.name'),
			lastname: t('member_1.lastname'),
			position: t('member_1.position'),
			linkedin: 'https://www.linkedin.com/in/pavlo-kezlia-b7732112',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/stas.svg',
			firstname: t('member_2.name'),
			lastname: t('member_2.lastname'),
			position: t('member_2.position'),
			linkedin: 'https://www.linkedin.com/in/stan-zakharchenko-524282182',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/olena.svg',
			firstname: t('member_3.name'),
			lastname: t('member_3.lastname'),
			position: t('member_3.position'),
			linkedin: 'https://www.linkedin.com/in/elenaleonenko',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/alexandr.svg',
			firstname: t('member_4.name'),
			lastname: t('member_4.lastname'),
			position: t('member_4.position'),
			linkedin: 'https://www.linkedin.com/in/aleksander-demchenko-1952bb1a7',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/polina.svg',
			firstname: t('member_5.name'),
			lastname: t('member_5.lastname'),
			position: t('member_5.position'),
			linkedin: 'https://www.linkedin.com/in/polina-poda-744237300/',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/dmytro.svg',
			firstname: t('member_6.name'),
			lastname: t('member_6.lastname'),
			position: t('member_6.position'),
			linkedin: 'https://www.linkedin.com/in/dmytro-lutskyi-185303218/',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/artemiy.svg',
			firstname: t('member_7.name'),
			lastname: t('member_7.lastname'),
			position: t('member_7.position'),
			linkedin: 'https://www.linkedin.com/in/artem-krasenko-825863232',
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/artem.svg',
			firstname: t('member_8.name'),
			lastname: t('member_8.lastname'),
			position: t('member_8.position'),
			linkedin: null,
			twitter: null,
		},
		{
			photo: '/assets/img/aboutus/team/andrey.svg',
			firstname: t('member_9.name'),
			lastname: t('member_9.lastname'),
			position: t('member_9.position'),
			linkedin: null,
			twitter: null,
		},
	];
}
