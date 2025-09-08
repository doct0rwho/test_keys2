import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import CaseStudyDetail from "./CaseStudyDetail";
import { getLocalizedBullets } from "./getLocalizedBullets";

export default async function CaseStudyDetailWrapper({ params }) {
  const { linkid } = params;

  const supportedCaseIds = ["nexans", "mita"];
  if (!supportedCaseIds.includes(linkid)) return notFound();

  const t = await getTranslations(`CaseStudy.${linkid}.details`);
  const tCaseStudy = await getTranslations(`CaseStudy.${linkid}`);
  const data = {
    linkid,
    company: tCaseStudy(`company`),
    title: t(`title`),
    mobileTitle: (
      <>
        {t("mobileTitle_0")} <br /> {t("mobileTitle_1")}
      </>
    ),
    bannerText: Array.isArray(t.raw("bannerText"))
      ? t.raw("bannerText")
      : [t("bannerText")],
    bannerImg: t(`bannerImg`),
    bannerImgMobile: t(`bannerImgMobile`),
    logoSrc: t(`logoSrc`),
    gifIntroduction: t(`gifIntroduction`),
    altIntroduction: t(`altIntroduction`),
    introduction: t(`introduction`),
    descriptionIntroduction: t(`descriptionIntroduction`),
    challenge: t(`challenge`),
    challengeTitle: t(`challengeTitle`),
    challengePreList: null,
    challengeBullets: getLocalizedBullets(t, 'challengeBullets', 'challenge'),
    challengeSummary: t(`challengeSummary`),
    challengeImg1: t(`challengeImg1`),
    challengeImg2: t(`challengeImg2`),
    altChallenge1: t(`altChallenge1`),
    altChallenge2: t(`altChallenge2`),
    solutionTitle: t(`solutionTitle`),
    solution: t(`solution`),
    solutionPreList: null,
   solutionBullets: getLocalizedBullets(t, 'solutionBullets', 'solution'),
    solutionSummary: null,
    impactResults: t(`impactResults`),
    impactTitle: t(`impactTitle`),
    impactPreList: t(`impactPreList`),
    impactBullets: getLocalizedBullets(t, 'impactBullets', 'impact'),
    impactSummary: t(`impactSummary`),
  };

  return <CaseStudyDetail data={data} />;
}
