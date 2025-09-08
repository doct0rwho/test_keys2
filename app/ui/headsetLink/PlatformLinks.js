import React from 'react'
import { Caption, Paragraph } from '../../../UI/Typography/Typography'

import cl from './PlatformLinks.module.css'

function PlatformLinks({ lite = false, ...props }) {
	return (
		<div className={cl.platform}>
			{!lite && <Paragraph>Download platform</Paragraph>}
			<div className={cl.platform__links}>
				<a href='https://www.oculus.com/experiences/quest/4950000178436188' target='_blank' className={cl.platform__link}>
					<i className='icon-logo_meta' />
					<div className={cl.text}>
						<Caption>Download for </Caption>
						<Paragraph>Quest</Paragraph>
					</div>
				</a>
				{/*<div className={cl.platform__link}>
					<i className='icon-logo_Pico' />
					<div className={cl.text}>
						<Caption>Download for </Caption>
						<Paragraph>Pico</Paragraph>
					</div>
				</div>*/}
			</div>
		</div>
	)
}

export default PlatformLinks