import React, { useEffect } from 'react'
import cl from './Count.module.css'
import Image from 'next/image'

function Count({ count = 0, setCount, max = null, min = null, id = '' }) {
	const onIncrement = () => {
		if (max && count === max) return
		if (max && count > max) setCount(max)
		setCount(++count)
	}
	const onDecrement = () => {
		if (min && count === min) return
		if (count === 0 || !count) return
		setCount(--count)
	}

	const onChange = (e) => {
		if (max && e.target.value.replace(/[^0-9]/, '') > max) setCount(max)
		else if (min && e.target.value.replace(/[^0-9]/, '') < min) setCount(min)
		else
			setCount(e.target.value.replace(/[^0-9]/, ''))
	}
	function hasLeadingZeros(number) {
		const str = number.toString();
		// Регулярное выражение для проверки наличия нулей перед первой положительной цифрой
		const regex = /^0+/;
		return regex.test(str);
	}
	function removeLeadingZeros(number) {
		const str = number.toString();
		const result = str.replace(/^0+/, '');
		return result === '' ? min : +result;
	}

	useEffect(() => {
		if (hasLeadingZeros(count)) {
			setCount(removeLeadingZeros(count))
		}
		if (count > max) setCount(max)
		if (count < min) setCount(min)
	}, [count])


	return (
		<div className={cl.block}>
			<span onClick={onDecrement}><Image width={24} height={24} src='/icons/svg/ic_minus.svg' /></span>
			<input id={id} value={count} onChange={onChange} type='text' aria-label='enter the number of required licenses to calculate the cost' autoComplete='off' />
			<span onClick={onIncrement}><Image width={24} height={24} src='/icons/svg/ic_plus.svg' /></span>
		</div>
	)
}

export { Count }