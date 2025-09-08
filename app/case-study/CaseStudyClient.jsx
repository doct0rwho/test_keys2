'use client';

import "./CaseStudy.css";
import { useEffect, useState } from 'react';
import CaseCardDesktop from "./CaseCardDesktop";
import CaseCardMobile from "./CaseCardMobile";
import { useWindowSize, TABLET_WIDTH } from "../hooks/useWindowWidth";

function CaseStudy({ title, caseStudies }) {
  const winWidth = useWindowSize();
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  const isMobile = winWidth < TABLET_WIDTH;

  return (
    <div className="header__container">
      <div className="caseStudy">
        <h1 className="subheader">{title}</h1>

        <div className="caseCardsWrapper">
          {caseStudies.map((study, index) =>
            isMobile ? (
              <CaseCardMobile key={index} {...study} index={index} />
            ) : (
              <CaseCardDesktop key={index} {...study} index={index} />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CaseStudy;
