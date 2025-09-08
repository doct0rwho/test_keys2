import Image from "next/image"
import Link from "next/link"

import './Button.css'

const ButtonLink = ({ children, direction, icon = '', ...props }) => {
	return (
		<Link {...props}>
			<>
				{direction === 'left' && <span className="icon left_icon">
					<i className={icon ? `icon-${icon}` : 'icon-chevron-left'} />
				</span>}
				{children}
				{direction === 'right' && <span className="icon right_icon">
					<i className={icon ? `icon-${icon}` : "icon-chevron-right"} />
				</span>}
			</>
		</Link>
	)
}

export { ButtonLink }
