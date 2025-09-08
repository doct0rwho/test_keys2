import dynamic from 'next/dynamic';
import { ButtonLink } from '@/app/ui/button/ButtonLink';

export default function OffsetBtnWrapper({ label }) {
  const FreeBtn = dynamic(() => import('./OffsetBtn'), {
    ssr: false,
    loading: () => (
      <ButtonLink
        className='btn-link secondary'
        id='free-btn-header'
        href="https://app.metaenga.com/self-registration?referrer=metaenga"
      >
        {label}
      </ButtonLink>
    ),
  });

  return <FreeBtn label={label} />;
}
