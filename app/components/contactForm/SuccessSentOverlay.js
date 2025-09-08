// SuccessSentOverlay.tsx
import { ButtonLink } from "@/app/ui/button/ButtonLink";
import Image from "next/image";
import './SuccessSentOverlay.css';

function SuccessSentOverlay({ title, description0, description1, buttonHome, buttonStart, text = '' }) {
	return (
		<div className="flex-form__message-sent message-sent">
			<Image width={240} height={128} src='/assets/img/flex/request.svg' alt='message-sent' />
			<p className="main__header">{title}</p>
			{text ? <p className="text__body">{text}</p> : <p className="text__body">{description0}</p>}
			<p className="text__body">{description1}</p>
			<div className="message-sent__btns">
				<ButtonLink className='btn-link secondary' style={{ background: 'transparent' }} href='/'>{buttonHome}</ButtonLink>
				<ButtonLink className='btn primary' href='https://app.metaenga.com/self-registration?referrer=metaenga'>{buttonStart}</ButtonLink>
			</div>
		</div>
	);
}

export { SuccessSentOverlay };
