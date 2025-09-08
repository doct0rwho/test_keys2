'use client';
import { useState, useEffect } from 'react';
import cl from './Promo.module.css';
import Image from 'next/image';
import { useWindowSize, MOBILE_WIDTH } from "../../../hooks/useWindowWidth";

function Promo({ data }) {
    const winWidth = useWindowSize();
   
    const [hasMounted, setHasMounted] = useState(false);
  
    useEffect(() => {
      setHasMounted(true);
    }, []);
  
    if (!hasMounted) return null; 
  
    const isMobile = winWidth < MOBILE_WIDTH;

  return (
    <section className={cl.promo}>
  <Image
  src={isMobile ? data.bannerImgMobile : data.bannerImg}
    alt={data.title}
    fill
    className={cl.promo__image}
    quality={100}
    priority
  />

  <div className="header__container">
    <div className={cl.promo__overlay}>
  
      <div className={cl.promo__left}>
        <div className={cl.promo__logoRow}>
          <Image src={data.logoSrc} alt={`${data.company} logo`} width={48} height={48} />
          <span className={cl.promo__company}>{data.company}</span>
        </div>
        <h1 className={cl.promo__title}>
  <span className={cl.promo__titleFull}>{data.title}</span>
  <span className={cl.promo__titleMobile}>{data.mobileTitle}</span>
</h1>
      </div>

      <div className={cl.promo__right}>
  {data.bannerText.map((line, index) => (
    <p key={index} className={cl.promo__desc}>{line}</p>
  ))}
</div>
    </div>
    {isMobile && (
  <div className={cl.promo__arrow}>
    <Image
      src="/assets/img/caseCard/chevron-down.svg"
      alt="Scroll down"
      width={40}
      height={40}
      className={cl.promo__arrowIcon}
    />
  </div>
)}
  </div>
</section>

  );
}

export { Promo };
