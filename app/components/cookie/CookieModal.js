'use client';
import './CookieModal.css'
import Link from 'next/link'
import Button from '@/app/ui/button/Button'

function CookieModal({ setModal, callback = () => { } }) {
	const onAllow = () => {
		localStorage.setItem('cookie', 'true')
		callback()
		setModal(false)
	}
	const onDecline = () => {
		setModal(false)
	}
	return (
		<div className='cookie'>
			<div className='cookie__container'>
				<p className="cookie__text">
					We use cookies to ensure that we give you the best experience on our website. <Link href='/cookie-policy' target='_blank'>Read cookies policies</Link>.
				</p>
				<div className="cookie__buttons">
					<Button className='btn textbtn' onClick={onDecline}>Decline</Button>
					<Button className='btn primary' onClick={onAllow}>Allow</Button>
				</div>
			</div>
		</div>
	)
}

export default CookieModal