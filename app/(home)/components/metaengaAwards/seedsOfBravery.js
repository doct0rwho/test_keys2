import Image from "next/image";
import React from "react";
import "./seedsOfBravery.css"; 

import {getTranslations} from 'next-intl/server';

export default async function SeedsOfBravery() {
  const t = await getTranslations('SeedsOfBravery');
  return (
   
      <div className="medal-Utilitie">
      
        <div className="medal-Utilitie__trophy">
          <Image
            src="/assets/metaengaAwards/Medal - Utilities.png"
            alt={t('medal1Alt')}
            width={94}
            height={105}
            className="medal-Utilitie__trophy-icon"
            quality={100}
          />
        </div>
        
        <div className="medal-Utilitie__content">
          <div className="medal-Utilitie__metaenga">
            <p>{t('text')}</p>
          </div>

      
          <div className="medal-Utilitie__sob">
            <div className="medal-Utilitie__brand-name">
              <Image
                src="./assets/metaengaAwards/Home - Seeds Of Bravery-14 1.svg"
                alt={t('sobLogoAlt')}
                width={91}
                height={36}
                quality={100}
              />
            </div>
          

          <p className="medal-Utilitie__text" data-default="| Seeds of Bravery" data-alt="Seeds of Bravery"></p>

          </div>
        </div>

      </div>
   
  );
}


