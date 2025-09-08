import React from 'react'
import { Link } from 'react-scroll'

function ScrollLink({ to, children, activeClass = 'active', onSetActive = () => {}, ...props }) {
	return (
		<Link activeClass={activeClass}
			to={to}
			spy={true}
			smooth={true}
			hashSpy={true}
			offset={-200}
			duration={500}
			isDynamic={true}
			ignoreCancelEvents={false}
			onSetActive={onSetActive}
			{...props}
		>

			{children}
		</Link>
	)
}

export default ScrollLink