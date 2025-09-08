import { ButtonLink } from "@/app/ui/button/ButtonLink"
import Image from "next/image"

import './SuccessSentForm.css'


function SuccessSentForm({ text = '', title,
  description_0,
  description_1,
  description_2,
  buttonHome,
  buttonStart,...props }) {
	return (
		<div className="sales-form__message-sent message-sent">
			<Image width={240} height={128} src='/assets/img/flex/request.svg' alt='message-sent' />
			<p className="main__header">{title}</p>
			{text ? <p className="text__body">{text}</p> 
			: <p className="text__body">{description_0}</p>}
			<p className="text__body">
            {description_1}
            <span> {description_2}</span>
			</p>
			<div className="message-sent__btns">
				<ButtonLink className='btn-link secondary' style={{ background: 'transparent' }} href='/'>{buttonHome}</ButtonLink>
				<ButtonLink className='btn primary' href='https://metaenga.com/book-a-demo'>{buttonStart}</ButtonLink>
			</div>
		</div>
	)
}

export { SuccessSentForm }