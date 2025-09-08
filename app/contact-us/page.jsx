import Link from 'next/link'
import './ContactUs.css'
import Image from 'next/image'
import { SpinnerBlock } from '../ui/spinner/SpinnerBlock';
import dynamic from 'next/dynamic';
import  SuccessSentOverlay  from '../components/contactForm/SuccessSentOverlay';
import {getTranslations} from 'next-intl/server';

import ContactusFormWrapper from './contactus/ContactusFormWrapper'


export { generateMetadata } from './generateMetadata';

export default async function ContactUs() {
		const t = await getTranslations('ContactUs');
	return (
		<div className="relative fullpage">
			<main className='container'>
				<div className="contactus">
					<h1 className='subheader'>{t(`title`)}</h1> 
					<p className='text__body'>{t(`description_0`)} <br /> {t(`description_1`)}</p>
					<div className="contactus__wrap">
						<ContactusFormWrapper />
						<div className="contactus__links cu-links">
							<div className="footer__socials socials">
								<Link href='https://www.instagram.com/metaenga/' className="socials__item" aria-label={t(`ariaLabelInstagram`)}>
									<i className='icon-instagram' />
								</Link>
								<Link href='https://www.youtube.com/channel/UC_PKn3Uy2VMne1PgynCkFzg' className="socials__item" aria-label={t(`ariaLabelYoutube`)}>
									<i className='icon-youtube' />
								</Link>
								<Link href='https://twitter.com/metaenga' className="socials__item" aria-label={t(`ariaLabelTwitter`)}>
									<i className='icon-twitter-dark' />
								</Link>
								<Link href='https://www.linkedin.com/showcase/metaenga' className="socials__item" aria-label={t(`ariaLabelLinkedIn`)}>
									<i className='icon-LinkedIn' />
								</Link>
							</div>
							<div className="cu-links__item">
								{/*<div className='cu-links__item-row'>
									<Image src='/icons/svg/us.svg' alt='Flag USA' width={24} height={24} />
									<p className='text__body'>US</p>
								</div>*/}
								<div >
									<p className='text__body'>Metaenga Inc.</p>
									<p className='text__body'>1111b South Governors Avenue, <br /> Dover, Delaware, 19904, US</p>
									<a href='mailhref:info@metaenga.com' className='text__body'>info@metaenga.com</a>
								</div>
							</div>
						</div>
					</div>

				</div>
			</main>

		</div>
	)
}