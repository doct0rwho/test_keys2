import classNames from 'classnames'
import React from 'react'

import cl from './RadioBtn.module.css'


function RadioBtn({ checked, onChange, disabled, error, children,value , ...props }) {
	const id = Math.random().toString(36).substr(2, 9)

	return (
		<div className={classNames(cl.row, props.className)}  {...props}>
			<div className={cl.box}>
				<input value={value} className={classNames(cl.checkbox, error && cl.error)} id={id} type='radio' checked={checked}
					onChange={onChange} disabled={disabled} />
			</div>
			<label className={classNames(cl.label, disabled ? cl.disabled : '')} htmlFor={id}>{children}</label>
		</div>
	)
}

export default RadioBtn