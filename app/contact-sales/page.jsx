import dynamic from "next/dynamic";
import "./ContactSales.css";
import { SpinnerBlock } from "../ui/spinner/SpinnerBlock";
import Image from "next/image";
import SalesFormWrapper  from "./component/SalesFormWrapper";
import {getTranslations} from 'next-intl/server';

export { generateMetadata } from './generateMetadata';

export default async function Sales() {
    const t = await getTranslations('Sales');
  return (
    <div className="sales__bg">
      <div className="header__container">
        <main className="sales">
          <section className="sales__img">
            <div className="sales__sticky">
              <Image
                width={690}
                height={733}
                src="/assets/img/sales/poster/sales.png"
                quality={100}
                alt="Sales Poster"
              />

              <div className="sales__logos">
                <p className="sales__logos-title text__body-light">
                  {t(`partners`)}
                </p>
                <div className="sales__logos-container">
                  <div className="sales__logo">
                    <Image
                      src={`/assets/img/logos/edp.svg`}
                      quality={100}
                      alt={`edp logo`}
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo">
                    <Image
                      src={`/assets/img/logos/hitachi.svg`}
                      quality={100}
                      alt={`hitachi logo`}
               
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo">
                    <Image
                      src={`/assets/img/logos/mita.svg`}
                      quality={100}
                      alt={`mita logo`}
                   
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo hidden-1440">
                    <Image
                      src={`/assets/img/logos/raf.svg`}
                      quality={100}
                      alt={`royal logo`}
                 
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo">
                    <Image
                      src={`/assets/img/logos/tfl.svg`}
                      quality={100}
                      alt={`tfl logo`}
                 
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo">
                    <Image
                      src={`/assets/img/logos/river.svg`}
                      quality={100}
                      alt={`river logo`}
              
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo hidden-1440">
                    <Image
                      src={`/assets/img/logos/dtek.svg`}
                      quality={100}
                      alt={`dtek logo`}
                 
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo hidden-1070">
                    <Image
                      src={`/assets/img/logos/wincanton.svg`}
                      quality={100}
                      alt={`wincanton logo`}
                     
                      width={100}
                      height={40}
                    />
                  </div>
                  <div className="sales__logo hidden-1070">
                    <Image
                      src={`/assets/img/logos/avo.svg`}
                      quality={100}
                      alt={`avo logo`}
                    
                      width={100}
                      height={40}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="sales__form">
            <SalesFormWrapper />
          </section>
        </main>
      </div>
    </div>
  );
}




