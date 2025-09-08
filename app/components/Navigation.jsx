'use client';

import Link from "next/link";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ScrollLink from './../ui/scrollLink/ScrollLink';
import classNames from "classnames";
import { ButtonLink } from "../ui/button/ButtonLink";
import Button from "../ui/button/Button";



const SubscrModal = dynamic(() => import('./modals/SubscrModal'), {
	ssr: false,
});

const Navigation = ({ navLinks, translations }) => {
	const pathname = usePathname();

	return (
		<>
			<nav className="header__menu header__menu_pc">
				<ul className="header__menu-list">
					{pathname === '/' ? <MainLinks navLinks={navLinks} pathname={pathname} /> : <SubLinks navLinks={navLinks} pathname={pathname} />}
				</ul>
			</nav>
			<Burger pathname={pathname} navLinks={navLinks} translations={translations} />
		</>
	)
}

const MainLinks = ({ navLinks, pathname, onClickLink }) => {
	return (
		<>
			{navLinks.map((link, index) => {
				if (link.subhref === '') return null
				return (
					<li key={link.name} className="header__menu-item" onClick={onClickLink}>
						<ScrollLink to={link.subhref} className="header__menu-link link"
							activeClass='active__link' onSetActive={onClickLink}>
							{link.name}
						</ScrollLink>

					</li>
				)
			})}
			{navLinks.map((link, index) => {
				if (link.subhref !== '') return null
				return (
					<li key={link.name} className="header__menu-item" onClick={onClickLink}>
						<Link href={link.mainhref} className={pathname === link.href ? 'header__menu-link link active__link' : 'header__menu-link link'} onClick={onClickLink}>
							{link.name}
						</Link>
					</li>
				)
			}
			)}
		</>
	)
}

const SubLinks = ({ navLinks, pathname, onClickLink }) => {
	return (
		<>

			{navLinks.map((link, index) => {
				return (
					<li key={link.name} className="header__menu-item">
						<Link href={link.subhref === '' ? `/${link.mainhref}` : `/#${link.subhref}`} className={pathname === `/${link.mainhref}` ? 'header__menu-link link active__link' : 'header__menu-link link'} onClick={onClickLink}>
							{link.name}
						</Link>
					</li>
				)
			})}
		</>
	)
}

const Burger = ({ pathname, navLinks, translations }) => {
	const [burger, setBurger] = useState(false)
	const [subscModal, setSubscModal] = useState(false)
	const onClickLink = () => {
		setBurger(false)
	}
	return (
		<>
			<div className={classNames('burger-icon', burger && 'open')} onClick={() => setBurger(!burger)}>
				<span className="bar bar1"></span>
				<span className="bar bar2"></span>
				<span className="bar bar3"></span>
			</div>
			<nav className={classNames('header__menu', burger && 'open', 'header__menu_mob')}>
				<ul className="header__menu-list">
					<li className="header__menu-item">
						<Link href='/' className={'header__menu-link link'} onClick={onClickLink}>
							 {translations.burgerOverview}
						</Link>
					</li>
					{pathname === '/' ? <MainLinks navLinks={navLinks} pathname={pathname} onClickLink={onClickLink} /> : <SubLinks navLinks={navLinks} pathname={pathname} onClickLink={onClickLink} />}
				</ul>
				<div className="header__buttons">
					<ButtonLink className='btn-link primary btn__flex' id='login-btn-burger' href={'https://app.metaenga.com/self-registration?referrer=metaenga'} target="_blank"> {translations.burgerDemo}</ButtonLink>
					<ButtonLink className='btn-link secondary btn__flex' id='free-btn-burger' href={'https://app.metaenga.com/?referrer=metaenga'} target="_blank"> {translations.login}</ButtonLink>

				</div>
				{/*<div className="header__contact">
					<Button onClick={() => setSubscModal(true)} className='btn textbtn' direction="left" icon='mail'>Contact us</Button>
				</div>
				<SubscrModal modalisopen={subscModal} setisopen={setSubscModal} />*/}
			</nav>
			<div className={classNames('overlay', burger && 'open')} onClick={() => setBurger(false)}>

			</div>

		</>
	)
}


export { Navigation }