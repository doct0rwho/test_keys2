import Image from "next/image";
import React from "react";
import "./VDS.css"; 

import {getTranslations} from 'next-intl/server';

export default async function ValenciaDigitalSummit() {
const t = await getTranslations('ValenciaDigitalSummit');
  return (

      <div className="valencia-digital-summit">

        <div className="valencia-digital-summit__trophy">
          <Image
            src="/assets/metaengaAwards/Trophy1.png"
            alt={t('trophy1Alt')}
            width={94}
            height={105}
            className="valencia-digital-summit__trophy-icon"
            quality={100}
          />
        </div>
        
        <div className="valencia-digital-summit__content">
          <div className="valencia-digital-summit__metaenga">
            <p>{t(`text`)}</p>
          </div>


          <div className="valencia-digital-summit__vds">
            <div className="valencia-digital-summit__brand-name">
              <Image
                src="./assets/metaengaAwards/VDSLOGO.svg"
                alt={t('vdsLogoAlt')}
                width={91}
                height={36}
                quality={100}
              />
            </div>
      

          <p className="valencia-digital-summit__text" data-default="| Valencia Digital Summit, 2024" data-alt="Valencia Digital Summit, 2024"></p>

          </div>
        </div>

      </div>
    
  );
}



