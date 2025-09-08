import Link from 'next/link'
import cl from './Member.module.css'
import Image from 'next/image'

function Member({ info, ...props }) {
	const { photo, lastname, firstname, position, linkedin, twitter } = info
	return (
		<div className={cl.member} {...props}>
			<div className={cl.photo}>
				<Image width={168} height={168} src={photo} alt={lastname || 'Team member photo'} />
			</div>
			<p className='text__body-bold'>
				{firstname}
			</p>
			<p className='text__body-bold'>
				{lastname}
			</p>
			<div className={cl.position}>
			<p className='text__body-light'>
				{position}
			</p>
			</div>
			<div className={cl.links}>
				{linkedin && <Link href={linkedin} target='_blank'><i className='icon-LinkedIn' /></Link>}
				{twitter && <Link href={twitter} target='_blank'><i className='icon-twitter' /></Link>}
			</div>
		</div>
	)
}

export { Member }