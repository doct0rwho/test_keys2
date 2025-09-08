import Link from 'next/link';
import Image from "next/image";
import "./CaseCardMobile.css";

function CaseCardMobile({
  imageSrc,
  logoSrc,
  company,
  title,
  description,
  buttonText,
  linkid
}) {
  return (
    <Link href={`/case-study/${linkid}`} className="caseCardMobile">
      <div className="caseCardMobile__imageWrapper">
        <Image src={imageSrc} alt={title} width={720} height={405} />
      </div>

      <div className="caseCardMobile__content">
        <div className="caseCardMobile__logo">
          <Image src={logoSrc} alt={`${company} logo`} width={48} height={48} />
          <span className="caseCardMobile__company">{company}</span>
        </div>
        <h2 className="caseCardMobile__title">
          {title.join(" ")}
        </h2>
        <p className="caseCardMobile__description">{description}</p>
        <div className="caseCardMobile__button">
          {buttonText} <i className="icon-arrow-up" />
        </div>
      </div>
    </Link>
  );
}

export default CaseCardMobile;
