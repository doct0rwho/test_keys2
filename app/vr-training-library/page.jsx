import Link from "next/link";
import { getTrainingInfoList } from "../data/GetTrainingInfo";
import { getLocalizedMetadata } from "./getLocalizedMetadata";
import { getTranslations } from "next-intl/server";

import { PlanChips } from "../ui/planChips/PlanChips";

import "./VrLib.css";
import Image from "next/image";
import { PriceBanner } from "../(home)/components/PriceBanner";
import dynamic from "next/dynamic";

export async function generateMetadata() {
  return await getLocalizedMetadata("VRLibrary");
}

const ScrollUp = dynamic(() => import("../ui/autoScrollUp/AutoScrollUp"), {
  ssr: false,
});

export default async function VRLibrary() {
  const t = await getTranslations("VRLibrary");
  const t1 = await getTranslations("TrainingInfoData");
  const trainings = await getTrainingInfoList();
  return (
    <>
      <main className="header__container">
        <div className="vrLib">
          <h1 className="subheader">{t(`title`)}</h1>

          <div className="vrLib__grid">
            {trainings &&
              trainings.map((training, index) => {
                const MEDIA_BASE = process.env.NEXT_PUBLIC_MEDIA_BASE;
                const cardimg = `${MEDIA_BASE}/details/web/${training.id}/0.jpg`;

                return (
                  <Link
                    className="vrLib__grid_item vrLib__item"
                    href={`vr-training-library/${training.linkid}`}
                    key={training.id}
                  >
                    <div className="vrLib__item_img">
                      <Image
                        src={cardimg}
                        alt={
                          training.cardalt ||
                          training.shortname ||
                          "VR training"
                        }
                        width={474}
                        height={265}
                        sizes="(max-width: 768px) 100vw, 33vw"
                        quality={85}
                        style={{ width: "100%", height: "auto" }}
                        priority={index < 6} // щоб перші 6 грузились швидше
                      />
                      <div className="vrLib__item_info_chips">
                        <PlanChips plan={training.plan} light>
                          {training.plan === "Free"
                            ? t1("planFree")
                            : t1("planSubscribe")}
                        </PlanChips>
                      </div>
                    </div>

                    <div className="vrLib__item_info">
                      <p className="vrLib__item_info_title">
                        {training.shortname}
                      </p>
                      <p className="vrLib__item_info_desc text__body">
                        {training.briefdescr}
                      </p>
                      <div className="vrLib__item_info_arrow vrLib__arrow">
                        <div className="vrLib__arrow_btn">
                          <p>{t("button")}</p>
                          <i className="icon-arrow-up" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </main>
      <div className="vrLib__banner">
        <PriceBanner />
      </div>
      <ScrollUp />
    </>
  );
}
