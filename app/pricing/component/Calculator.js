"use client";
import { useMemo, useState } from "react";
import classNames from "classnames";
import { useWindowSize } from "@/app/hooks/useWindowWidth";
import { ButtonLink } from "@/app/ui/button/ButtonLink";
import { Switch } from "@/app/ui/switch/Switch";
import { Count } from "@/app/ui/count/Count";

import cl from "./Price.module.css";
import "rc-slider/assets/index.css";

const Calculator = ({
  plans,
  pricingTexts,
  currentValute,
  sumAnnually,
  sumAnnuallySaleAbove20,
  sumAnnuallySaleAbove50,
  sumMonthly,
  
}) => {
  const winWidth = useWindowSize();
  const [standartCount, setStandartCount] = useState(1);
  const [sale, setSale] = useState(0);
  const [annualy, setAnnualy] = useState(true);

  const calculatePrice = (price) => {
    if (annualy) {
      if (standartCount >= 50) {
        const discounted = (sumAnnually - sumAnnuallySaleAbove50) * standartCount;
        setSale(Math.round(price * 12 * standartCount - discounted));
        return Math.round(discounted);
      } else if (standartCount >= 20) {
        const discounted = (sumAnnually - sumAnnuallySaleAbove20) * standartCount;
        setSale(Math.round(price * 12 * standartCount - discounted));
        return Math.round(discounted);
      } else {
        setSale(Math.round(price * 12 * standartCount - sumAnnually * standartCount));
        return Math.round(sumAnnually * standartCount);
      }
    } else {
      setSale(0);
      return Math.round(price * standartCount);
    }
  };

  const totalPrice = useMemo(
    () => calculatePrice(sumMonthly),
    [sumMonthly, standartCount, annualy]
  );

  const card = (plan, index) => {
    const isStandard = plan.id === "Standard";

    return (
      <div
        className={cl.card}
        key={index}
        style={isStandard ? { border: "2px solid var(--primary-color)" } : {}}
      >
        <div className={cl.card__top}>
          <div className={cl.card__header}>
            <p className="subheader">
              {plan.name}
              {annualy && isStandard ? (
                <span className={classNames(cl.chips, cl.chipsGray)}>
                  {pricingTexts.billingChips}
                </span>
              ) : (
                <span className={classNames(cl.chips, cl.chipsGray)} style={{ opacity: 0 }}>
                  {pricingTexts.billingPeriodLabelStandard}
                </span>
              )}
            </p>
            <p className="text__body">{plan.subname}</p>
          </div>

          <div className={cl.card__price}>
            <p className="mid__header">
              {plan.id !== "Enterprise" && currentValute}
              {plan.id === "Enterprise" ? (
                <img
                  src="/assets/img/enterpriseCard/enterpriseCard.svg"
                  alt="Enterprise Plan"
                  className={cl.enterprise__plan__image}
                />
              ) : (
                <span>
                  {annualy && isStandard
                    ? Math.round(totalPrice / standartCount / 12)
                    : plan.price}
                </span>
              )}
            </p>
            {isStandard && <p className="text__body-light">{pricingTexts.billingPeriodLabelStandard}</p>}
            {plan.id === "Flex" && (
              <p className="text__body-light">{pricingTexts.billingPeriodLabelEnterprise}</p>
            )}
            {annualy && isStandard ? (
              <div className={classNames(cl.chips, cl.chipsGray)}>
                {pricingTexts.annualy}
              </div>
            ) : (
              <div className={classNames(cl.chips, cl.chipsGray)} style={{ opacity: 0 }}>
                {pricingTexts.annualy}
              </div>
            )}
          </div>

          <div className={cl.card__calc}>
            {plan.caption?.length ? (
              <div className={cl.plan__captions}>
                {plan.caption.map((item, i) => (
                  <p className={cl.card__calc_caption} key={i}>
                    {item}
                  </p>
                ))}
              </div>
            ) : (
              <>
                <div className={cl.card__calc_count}>
                  <p className={classNames("text__body-light", cl.card__calc_count_label_up)}>
                    {pricingTexts.numberOfHeadsets}
                  </p>
                  <Count
                    id={`count-${plan.id}`}
                    count={standartCount}
                    setCount={setStandartCount}
                    max={150}
                    min={1}
                  />
                  <p className={classNames("text__body-light", cl.card__calc_count_label_down)}>
                    {pricingTexts.headsets}
                  </p>
                </div>
                <div className={cl.card__calc_price}>
                  <p className="text__body-bold">
                    <span>
                      {currentValute}
                      {annualy
                        ? Math.round(totalPrice / 12).toLocaleString("en-UK")
                        : totalPrice.toLocaleString("en-UK")}
                    </span>
                  </p>
                  <p className={classNames("text__body-light", cl.card__calc_count_label_down)}>
                    {pricingTexts.monthly}
                  </p>
                </div>
              </>
            )}
          </div>

          <div
            className={cl.card__supp}
            style={
              isStandard && standartCount >= 150 ? {} : { opacity: 0, visibility: "hidden" }
            }
          >
            <p className="caption-light">
              {pricingTexts.limitWarning[0]}
              <br />
              <a
                href="https://digitalengineeringmagic.atlassian.net/servicedesk/customer/portals"
                target="_blank"
              >
                {pricingTexts.limitWarning[1]}
              </a>{" "}
              {pricingTexts.limitWarning[2]}
            </p>
          </div>

          <div className={cl.card__btn}>
            {plan.id === "Flex" ? (
              <ButtonLink className="btn-link secondary" href="/pricing/flex">
                {pricingTexts.flexButton}
              </ButtonLink>
            ) : isStandard ? (
              <ButtonLink
                className="btn-link primary"
                href="https://app.metaenga.com/self-registration?referrer=metaenga"
                target="_blank"
              >
                {pricingTexts.standardButton}
              </ButtonLink>
            ) : (
              <ButtonLink className="btn-link secondary" href="/contact-sales">
                {pricingTexts.enterpriseButton}
              </ButtonLink>
            )}
          </div>

          {isStandard ? (
            <div className={cl.total}>
              <p className="text__body">
                {pricingTexts.totalPrice}: {currentValute}
                {totalPrice.toLocaleString("en-UK")}
                <span> {annualy ? pricingTexts.year : pricingTexts.monthly}</span>
              </p>
              <div className={cl.chips} style={{ opacity: sale ? 1 : 0 }}>
                <span>
                  {pricingTexts.saved} {currentValute}
                  {sale.toLocaleString("en-UK")}
                </span>
              </div>
            </div>
          ) : (
            <div className={cl.emptyBlock}></div>
          )}
          <div className={cl.divider}></div>
        </div>

        <div className={cl.card__details}>
  {[...plan.details,
    (plan.id === "Standard" || plan.id === "Enterprise") && pricingTexts.fullTrainingReports
  ]
    .filter(Boolean)
    .map((detail, i) => (
      <div className={cl.detail} key={i}>
        <i className="icon-check_small" />
        <span>{detail}</span>
      </div>
    ))}

  <div className={cl.card__supp} style={isStandard ? {} : { display: "none" }}>
    <p className="caption-light">
      {pricingTexts.buyLimitWarning[0]}
      <br />
      <a
        href="https://digitalengineeringmagic.atlassian.net/servicedesk/customer/portals"
        target="_blank"
      >
        {pricingTexts.buyLimitWarning[1]}
      </a>{" "}
      {pricingTexts.buyLimitWarning[2]}
    </p>
  </div>
</div>
      </div>
    );
  }

  return (
    <div>
      <div className={cl.title}>
        <h1 className="subheader">
          {pricingTexts.subheader[0]} <span>{pricingTexts.subheader[1]}</span>{" "}
          {pricingTexts.subheader[2]}
        </h1>
      </div>

 <div className={cl.switch}>
  <p className="small__header">
    {winWidth > 768
      ? pricingTexts.smallHeaderMouthly
      : pricingTexts.smallHeaderMouthlymob}
  </p>
  <Switch checked={annualy} onChange={() => setAnnualy(!annualy)}>
    <div
      className="small__header"
      style={
        annualy
          ? { color: "var(--primary-color)", fontWeight: 600, marginRight: 8 }
          : { marginRight: 8 }
      }
    >
      {winWidth > 768
        ? pricingTexts.smallHeaderYearly
        : pricingTexts.smallHeaderYearlymob}
    </div>
  </Switch>
  <div className={cl.chips}>
    {pricingTexts.yearlySave}
  </div>
</div>


      <div className={cl.cards}>{plans.map((plan, index) => card(plan, index))}</div>
    </div>
  );
};

export default Calculator;
