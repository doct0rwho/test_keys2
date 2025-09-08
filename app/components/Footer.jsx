import Link from "next/link";
import dynamic from "next/dynamic";
import "../styles/Footer.css";
import Image from "next/image";
import { VrAppLink } from "../ui/vrAppLink/VrAppLink";
import {getTranslations} from 'next-intl/server';

const LanguageSelector = dynamic(
  () => import("./languageSelector/LanguageSelector"),
  {
    ssr: false,
  }
);
export default async function Footer () {
  const t = await getTranslations('Footer');
  return (
    <footer className="footer">
      <div className="header__container">
        <div className="footer__container">
          <div className="footer__socials socials">
            <Link
              href="https://www.instagram.com/metaenga/"
              className="socials__item"
              aria-label={t(`ariaLabel_0`)}
            >
              <i className="icon-instagram" />
            </Link>
            <Link
              href="https://www.youtube.com/channel/UC_PKn3Uy2VMne1PgynCkFzg"
              className="socials__item"
              aria-label={t(`ariaLabel_1`)}
            >
              <i className="icon-youtube" />
            </Link>
            <Link
              href="https://twitter.com/metaenga"
              className="socials__item"
              aria-label={t(`ariaLabel_2`)}
            >
              <i className="icon-twitter-light" />
            </Link>
            <Link
              href="https://www.linkedin.com/showcase/metaenga"
              className="socials__item"
              aria-label={t(`ariaLabel_3`)}
            >
              <i className="icon-LinkedIn" />
            </Link>
            <div className="socials__vr">
              <p>{t(`download`)}</p>
              <VrAppLink gray />
            </div>
          </div>
          <div className="footer__docs docs">
    <div className="docs__col">
      <Link href="/cookie-policy" className="docs__item">{t(`cookie`)}</Link>
      <Link href="/terms-of-service" className="docs__item">{t(`terms`)}</Link>
      <Link href="/data-processing-agreement" className="docs__item">{t(`DPA`)}</Link>
    </div>
    <div className="docs__col">
      <Link href="/privacy-policy" className="docs__item">{t(`privacy`)}</Link>
      <Link href="/eula" className="docs__item">{t(`EULA`)}</Link>
      <Link href="/dmca" className="docs__item">{t(`DMCA`)}</Link>
    </div>
  </div>
          <div className="footer__contacts contacts">
            <div className="contacts__item">
              <div className="contacts__item-title">
                <p className="small__header">{t(`office_0`)}</p>
              </div>
              <div className="contacts__item-flag">
                <Image
                  src="/icons/svg/us.svg"
                  alt={t(`altUSA`)}
                  width={24}
                  height={24}
                />
                <p className="text__body">United States</p>
              </div>
              <div className="contacts__item-text">
                <p className="text__body">
                  1111b South Governors Avenue, <br /> Dover, Delaware, 19904
                </p>
                <a href="mailto:info@metaenga.com" className="text__body">
                  info@metaenga.com
                </a>
              </div>
            </div>

            <div className="contacts__item">
              <div className="contacts__item-title">
                <p className="small__header">{t(`office_1`)}</p>
              </div>
              <div className="contacts__item-flag">
                <Image
                  src="/icons/svg/ua.svg"
                  alt={t(`altUkraine`)}
                  width={24}
                  height={24}
                />
                <p className="text__body">{t(`country_1`)}</p>
              </div>
              <div className="contacts__item-text">
                <p className="text__body">{t(`address_1`)}</p>
                <a href="tel:+380933796971" className="text__body">
                  +38 (093) 379 69 71
                </a>
                <a href="mailhref:info@metaenga.com" className="text__body">
                  info@metaenga.com
                </a>
              </div>
            </div>

            {/*<div className="contacts__item">
							<Image src='/icons/svg/uk.svg' alt='Flag United Kingdom' width={24} height={24} />
							<div className="contacts__item-text">
								<p className='text__body'>United Kingdom</p>
								<p className='text__body'><span>80 Nightingale Road</span>, <span>Derby DE24 8BG</span></p>
								<a href='tel:+4408006893495' className='text__body'>+44 (0800) 6893495</a>
								<a href='mailhref:info@vrsafety.co.uk' className='text__body'>info@vrsafety.co.uk</a>
							</div>
						</div>*/}
          </div>
          <div className="footer__provide">
            <div className="footer__bottom-row">
              <p className="text__footer">© 2025 – Metaenga, Inc.</p>
              <div className="footer__language">
                <LanguageSelector />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};


