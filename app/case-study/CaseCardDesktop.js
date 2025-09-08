import Link from 'next/link';
import { ButtonLink } from '@/app/ui/button/ButtonLink';
import Image from "next/image";
import "./CaseCardDesktop.css";

function CaseCardDesktop({
  imageSrc,
  logoSrc,
  company,
  title,
  description,
  buttonText,
  index,
  linkid,
}) {
  const isEven = index % 2 === 1; // 0 — непарний, 1 — парний

  return (
    <Link href={`/case-study/${linkid}`}>
      <div className={`caseCard ${isEven ? "caseCard--even" : "caseCard--odd"}`}>
        <div className="caseCard__imageWrapper">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="caseCard__background"
            sizes="100vw"
          />
          <div className="caseCard__gradient" />
        </div>

        <div className={`caseCard__content ${isEven ? "caseCard__content--right" : "caseCard__content--left"}`}>
          <div className="caseCard__logo">
            <Image src={logoSrc} alt={`${company} logo`} width={56} height={56} />
            <span className="caseCard__company">{company}</span>
          </div>

          <h2 className="caseCard__title">
            {Array.isArray(title) ? (
              <>
                {title[0]}<br />{title[1]}
              </>
            ) : title}
          </h2>

          <p className="caseCard__description">{description}</p>

        <ButtonLink
  className="btn-link primary white caseCard__button"
  href={`/case-study/${linkid}`}
>
  {buttonText}
</ButtonLink>
        </div>
      </div>
    </Link>
  );
}

export default CaseCardDesktop;
