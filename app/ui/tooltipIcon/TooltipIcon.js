'use client';
import React, { useId } from 'react'
import { Tooltip } from '../tooltip/Tooltip'

import cl from './TooltipIcon.module.css'

function TooltipIcon({ tooltip, place = 'bottom', ...props }) {
	const id = useId()
	return (
		<span className={cl.tooltip__info}>
			<i data-tip data-for={id} className='icon-circle-info' />
			<Tooltip id={id} place={place} {...props}>{tooltip}</Tooltip>
		</span>
	)
}

export default TooltipIcon
