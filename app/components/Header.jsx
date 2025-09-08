import Link from "next/link"
import NavigationWrapper from '@/app/components/NavigationWrapper';
import Image from "next/image"

import { ButtonLink } from "../ui/button/ButtonLink"
import dynamic from "next/dynamic";

import { getTranslations } from "next-intl/server";
import { getNavLinks } from "./getNavLinks";

import OffsetBtnWrapper from './header/OffsetBtnWrapper';

export default async function Header() {
	const t = await getTranslations('Header');
	const navLinks = getNavLinks(t);

	return (
		<header className="header">
			<div className="header__container">
				<Link href='/' scroll={true} className="header__logo-box">
					<Image
						src="/icons/logo.svg"
						alt="Metaenga Logo"
						className="header__logo"
						width={128}
						height={32}
						priority
					/>
				</Link>
				<NavigationWrapper navLinks={navLinks} />
				<div className="header__buttons header__buttons_pc">
					<ButtonLink
						style={{ marginRight: '10px' }}
						className='btn-link textbtn'
						id='login-btn-header'
						href={'https://app.metaenga.com/?referrer=metaenga'}
						
					>
						{t('menu_5')}
					</ButtonLink>

			<OffsetBtnWrapper label={t('menu_6')} />
					
				</div>
			</div>
		</header>
	)
}
